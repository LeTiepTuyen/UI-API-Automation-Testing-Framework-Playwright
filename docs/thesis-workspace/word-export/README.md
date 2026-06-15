# Word (.docx) export of the thesis

The Word version is generated from the **final LaTeX** (`docs/thesis-latex/`, the
same source as the approved 77-page PDF) using **Pandoc** — not from the older
Markdown (which has drifted: old title, old figure numbering, self-artifact
citations). This keeps the Word content faithful to the approved thesis.

- **Output:** `Thesis_LeTiepTuyen.docx`
- **Figures:** the 13 Mermaid figure PDFs are rasterised to PNG (Word cannot embed
  PDF images); screenshots/reports stay PNG. All live in `figures/`.
- **Working copy:** `build-src/` is a temp copy of the `.tex` tree with figure
  paths flattened and `.pdf` → `.png` for the figures.

## Regenerate

```bash
export PATH="/c/Users/Admin/AppData/Local/Pandoc:/c/Users/Admin/AppData/Local/Programs/MiKTeX/miktex/bin/x64:/mingw64/bin:$PATH"
FIGDIR="$(pwd)/figures"
cd build-src
pandoc main.tex --from=latex --to=docx --citeproc \
  --bibliography=bibliography/references.bib \
  --csl=../../apa.csl \
  --metadata reference-section-title="Reference List" \
  --resource-path=".:$FIGDIR" \
  -o ../Thesis_LeTiepTuyen.docx
```

- `--csl=../../apa.csl` makes citations **APA 7** (`(Author, Year)` + APA reference
  list). **Without `apa.csl` the style falls back to Chicago author-date.** Get the
  file from https://github.com/citation-style-language/styles/raw/master/apa.csl
  and save it as `docs/thesis-workspace/apa.csl`.

## Manual polish in Word (after opening the .docx)

LaTeX auto-generated structures don't transfer; rebuild them with Word's own
tools (the headings already carry Word Heading 1/2/3 styles):

1. **Table of Contents** — References → Table of Contents (auto).
2. **List of Figures / List of Tables** — References → Insert Table of Figures.
3. **Cover / Approval page** — tidy spacing/centering to taste.
4. **Page numbers / section breaks** — add as the university template requires.
