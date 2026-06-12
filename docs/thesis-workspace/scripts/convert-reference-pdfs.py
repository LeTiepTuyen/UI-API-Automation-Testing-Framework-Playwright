from __future__ import annotations

import argparse
import re
import sys
from pathlib import Path

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8")


def slugify(value: str) -> str:
    value = value.lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    value = re.sub(r"-+", "-", value).strip("-")
    return value[:90] or "reference"


def load_pdf_tools(workspace_root: Path):
    pdf_tools = workspace_root / ".tmp" / "pdf-tools"
    if pdf_tools.exists():
        sys.path.insert(0, str(pdf_tools))

    import fitz  # type: ignore
    import pymupdf4llm  # type: ignore

    return fitz, pymupdf4llm


def render_keyword_pages(fitz, pdf_path: Path, output_dir: Path, keywords: list[str]) -> list[int]:
    doc = fitz.open(pdf_path)
    rendered_pages: list[int] = []
    output_dir.mkdir(parents=True, exist_ok=True)

    for page_index, page in enumerate(doc):
        text = page.get_text("text").lower()
        if not any(keyword.lower() in text for keyword in keywords):
            continue

        pix = page.get_pixmap(matrix=fitz.Matrix(2, 2), alpha=False)
        output_path = output_dir / f"page-{page_index + 1:03d}.png"
        pix.save(output_path)
        rendered_pages.append(page_index + 1)

    return rendered_pages


def convert_pdf(workspace_root: Path, pdf_path: Path, output_root: Path, keywords: list[str]) -> None:
    fitz, pymupdf4llm = load_pdf_tools(workspace_root)

    pdf_path = pdf_path.resolve()
    slug = slugify(pdf_path.stem)
    asset_dir = output_root / f"{slug}_assets"
    image_dir = asset_dir / "images"
    page_dir = asset_dir / "pages"
    markdown_path = output_root / f"{slug}.md"

    output_root.mkdir(parents=True, exist_ok=True)
    image_dir.mkdir(parents=True, exist_ok=True)

    doc = fitz.open(pdf_path)
    metadata_lines = [
        f"# Converted PDF Reference: {pdf_path.stem}",
        "",
        "## Conversion Metadata",
        "",
        f"- Original PDF: `{pdf_path.relative_to(workspace_root)}`",
        f"- Page count: {doc.page_count}",
        "- Conversion tool: PyMuPDF4LLM with PyMuPDF page rendering",
        "- Note: This converted Markdown is a reading aid. Cite the original source, not this conversion artifact.",
        "",
        "---",
        "",
    ]

    markdown = pymupdf4llm.to_markdown(
        str(pdf_path),
        write_images=True,
        image_path=str(image_dir),
        image_format="png",
        page_separators=True,
        show_progress=False,
    )

    rendered_pages = render_keyword_pages(fitz, pdf_path, page_dir, keywords)

    if rendered_pages:
        metadata_lines.extend(
            [
                "## Rendered Keyword Pages",
                "",
                "The following pages were rendered as PNG previews because their text matched figure, table, or benchmark keywords:",
                "",
                f"- Pages: {', '.join(str(page) for page in rendered_pages)}",
                f"- Preview directory: `{page_dir.relative_to(workspace_root)}`",
                "",
                "---",
                "",
            ]
        )

    markdown_path.write_text("\n".join(metadata_lines) + markdown, encoding="utf-8")
    print(f"Converted: {pdf_path.name}")
    print(f"Markdown: {markdown_path.relative_to(workspace_root)}")
    print(f"Image assets: {image_dir.relative_to(workspace_root)}")
    print(f"Rendered keyword pages: {len(rendered_pages)}")


def main() -> None:
    parser = argparse.ArgumentParser(description="Convert local thesis reference PDFs to Markdown and figure previews.")
    parser.add_argument("pdf", nargs="+", help="PDF path(s) relative to the workspace root.")
    parser.add_argument(
        "--output-root",
        default="docs/final-graduation-thesis-doc/reference-documents/converted-markdown",
        help="Directory for converted Markdown and extracted assets.",
    )
    parser.add_argument(
        "--keyword",
        action="append",
        default=[
            "figure",
            "fig.",
            "table",
            "chart",
            "execution",
            "cpu",
            "ram",
            "download",
            "github",
            "roc",
            "rocof",
            "failure",
            "selenium",
            "playwright",
            "cypress",
        ],
        help="Keyword used to select pages for PNG rendering. Can be repeated.",
    )

    args = parser.parse_args()
    workspace_root = Path.cwd()
    output_root = workspace_root / args.output_root

    for pdf in args.pdf:
        convert_pdf(workspace_root, workspace_root / pdf, output_root, args.keyword)


if __name__ == "__main__":
    main()
