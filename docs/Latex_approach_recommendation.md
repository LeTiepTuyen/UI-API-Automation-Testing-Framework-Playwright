Tôi đã kiểm tra kỹ file `thesis_latex_overleaf_structure_sample.zip`. Mẫu này là một **LaTeX thesis project hoàn chỉnh, tổ chức khá tốt**, nhưng chỉ nên dùng làm **tham khảo kỹ thuật trình bày**. Cấu trúc và yêu cầu chính thức của VNUK vẫn phải là nguồn ưu tiên cao nhất.

## Đánh giá nhanh mẫu LaTeX bạn gửi

Mẫu hiện có:

```text
thesis_latex_overleaf_sample/
├── main.tex
├── references.bib
├── frontmatter/
│   ├── frontmatter.tex
│   ├── cover.tex
│   ├── declaration.tex
│   ├── acknowledgements.tex
│   └── abstract.tex
├── chapters/
│   ├── 01_introduction.tex
│   ├── 02_literature_review.tex
│   ├── 03_methodology.tex
│   ├── 04_experimental_setup.tex
│   ├── 05_results.tex
│   ├── 06_discussion.tex
│   └── 07_conclusion.tex
├── appendices/
│   ├── appendix_a_implementation.tex
│   └── appendix_b_additional_results.tex
└── figures/
```

Mẫu sử dụng:

* `report` document class, A4, font size 12 pt.
* Lề trái 3 cm, các lề còn lại khoảng 2.5 cm.
* Font `newtxtext/newtxmath`, phong cách gần Times.
* Giãn dòng 1.5.
* `graphicx`, `booktabs`, `tabularx`, `siunitx` cho hình và bảng.
* `TikZ` cho diagram.
* `listings` cho source code.
* `hyperref` và `cleveref` cho cross-reference.
* `biblatex` + Biber với style IEEE.
* Front matter, list of figures, list of tables, appendices và bibliography được tách riêng.

Đây là nền tảng tốt, nhưng **không nên copy nguyên xi** vì:

1. Thesis của bạn có **6 chapters**, không phải 7 chapters như mẫu.
2. Cover hiện hard-code tên đề tài, tên sinh viên và người hướng dẫn của người khác.
3. Mẫu chưa có `abbreviations`, `definitions`, `author contribution` như workspace của bạn.
4. Citation style IEEE cần kiểm tra lại với yêu cầu chính thức của VNUK.
5. Trong `main.tex` có `\pagenumbering{roman}`, nhưng `frontmatter/frontmatter.tex` lại gọi `\pagenumbering{arabic}`; điều này có thể làm sai numbering của phần mở đầu.
6. Các chapter của mẫu thuộc một đề tài computer vision hoàn toàn khác; chỉ dùng cấu trúc file và formatting.
7. Hình Mermaid hiện tại của bạn là SVG; Overleaf nên dùng PDF vector hoặc PNG thay vì phụ thuộc trực tiếp vào SVG/shell escape.

---

# 1. LaTeX có Plugin hoặc MCP Server hỗ trợ Codex không?

## Câu trả lời thực tế

Codex hỗ trợ MCP server nói chung trong cả CLI lẫn VS Code Extension, và hai client dùng chung cấu hình MCP trong `config.toml`. Tuy nhiên, tôi **không tìm thấy một MCP chính thức của OpenAI hoặc Overleaf dành riêng cho LaTeX/Overleaf** trong tài liệu chính thức hiện tại. ([OpenAI Developers][1])

Điều này không phải trở ngại, vì Codex đã có thể:

* Đọc và chỉnh sửa `.tex`, `.bib`, `.sty`.
* Chạy `latexmk`, `pdflatex`, `xelatex`, `biber`.
* Đọc compiler log.
* Sửa lỗi LaTeX.
* Convert Markdown sang LaTeX bằng Pandoc hoặc script tùy chỉnh.
* Quản lý Git và push lên Overleaf.

Vì vậy, giải pháp tốt nhất không phải tìm một MCP LaTeX ngẫu nhiên, mà là:

```text
Codex
+ LaTeX Workshop
+ MiKTeX hoặc TeX Live
+ latexmk
+ Pandoc
+ Overleaf Git integration
+ một skill LaTeX riêng trong thesis harness
```

## Công cụ nên cài

### A. LaTeX Workshop cho VS Code

LaTeX Workshop hỗ trợ build LaTeX/BibTeX tự động, xem PDF ngay trong VS Code và SyncTeX hai chiều giữa `.tex` với PDF. ([GitHub][2])

Cài extension:

```text
James-Yu.latex-workshop
```

Đây là **VS Code extension**, không phải MCP hoặc Codex plugin. Codex vẫn có thể dùng terminal và file system bên cạnh extension này.

### B. Local LaTeX distribution

Trên Windows, có thể chọn:

```text
MiKTeX
hoặc
TeX Live
```

Đảm bảo terminal nhận được:

```powershell
pdflatex --version
xelatex --version
biber --version
latexmk --version
```

### C. Pandoc

Pandoc có thể convert Markdown sang LaTeX, nhưng chỉ nên dùng để tạo **bản chuyển đổi ban đầu**. Không nên chạy bulk conversion rồi xem kết quả đó là final thesis.

Ví dụ:

```powershell
pandoc chapter-1-introduction.md `
  --from=gfm `
  --to=latex `
  --wrap=none `
  --output=01-introduction.tex
```

Các phần như citation, figure, table, label, cross-reference và code listing vẫn phải được Codex review và chỉnh lại thủ công.

### D. Overleaf Git integration

Vì bạn có Overleaf Premium, đây là integration quan trọng nhất. Overleaf Git integration là premium feature, cho phép clone project như một Git remote, làm việc local, rồi pull/push giữa local và Overleaf. ([docs.overleaf.com][3])

Overleaf sử dụng token-based authentication cho các thao tác clone, pull và push. ([docs.overleaf.com][3])

---

## Plugin/MCP tôi khuyên dùng

| Tool                      | Vai trò                                  |                Khuyến nghị |
| ------------------------- | ---------------------------------------- | -------------------------: |
| LaTeX Workshop            | Compile và preview PDF trong VS Code     |                    Nên cài |
| Overleaf Git integration  | Đồng bộ local LaTeX với Overleaf         |                    Rất nên |
| GitHub plugin             | Quản lý repo/commits/PR                  |                Có thể dùng |
| Fetch MCP                 | Đọc Overleaf/CTAN/package docs           |                Có thể dùng |
| Context7 MCP              | Tra docs công nghệ khác                  | Không quan trọng cho LaTeX |
| Community LaTeX MCP       | Không thật sự cần                        |               Chưa nên cài |
| Custom thesis LaTeX skill | Hướng dẫn Codex conversion và validation |                    Nên tạo |
| Custom LaTeX subagent     | Audit template, compiler và formatting   |                    Nên tạo |

Tôi khuyên bổ sung vào harness:

```text
.agents/skills/thesis-latex-migration/SKILL.md
.codex/agents/thesis-latex-architect.toml
```

Như vậy LaTeX trở thành một phần chính thức của thesis harness thay vì phụ thuộc vào MCP community chưa kiểm chứng.

---

# 2. Kiến trúc LaTeX nên dùng cho thesis của bạn

Không nên đổi tên hoặc thay thế toàn bộ `docs/thesis-workspace`. Hãy thêm một workspace riêng:

```text
docs/
├── thesis-workspace/              # Nội dung Markdown + harness hiện tại
│   ├── chapters/
│   ├── front-matter/
│   ├── appendices/
│   ├── references/
│   ├── progress.md
│   ├── tasks.md
│   └── ...
│
└── thesis-latex/                  # LaTeX publication workspace mới
    ├── main.tex
    ├── latexmkrc
    ├── README.md
    ├── config/
    │   ├── metadata.tex
    │   ├── packages.tex
    │   ├── formatting.tex
    │   └── commands.tex
    ├── frontmatter/
    │   ├── cover.tex
    │   ├── declaration.tex
    │   ├── acknowledgements.tex
    │   ├── abstract.tex
    │   ├── abbreviations.tex
    │   ├── definitions.tex
    │   └── author-contribution.tex
    ├── chapters/
    │   ├── 01-introduction.tex
    │   ├── 02-literature-review.tex
    │   ├── 03-system-analysis-and-framework-design.tex
    │   ├── 04-implementation.tex
    │   ├── 05-evaluation-and-discussion.tex
    │   └── 06-conclusion-and-future-work.tex
    ├── appendices/
    │   ├── appendix-a-installation.tex
    │   ├── appendix-b-test-scenarios.tex
    │   ├── appendix-c-source-code.tex
    │   └── appendix-d-evaluation-evidence.tex
    ├── bibliography/
    │   └── references.bib
    ├── figures/
    │   ├── architecture/
    │   ├── workflows/
    │   ├── screenshots/
    │   ├── reports/
    │   └── logos/
    ├── tables/
    ├── scripts/
    │   ├── build.ps1
    │   ├── clean.ps1
    │   ├── convert-markdown.ps1
    │   ├── convert-svg-to-pdf.ps1
    │   └── export-overleaf.ps1
    └── migration/
        ├── migration-plan.md
        ├── source-map.md
        ├── conversion-register.md
        ├── formatting-checklist.md
        ├── compile-issue-log.md
        └── latex-progress.md
```

## Mapping Markdown hiện tại sang LaTeX

| Markdown source                           | LaTeX target                                  |
| ----------------------------------------- | --------------------------------------------- |
| `chapter-1-introduction.md`               | `01-introduction.tex`                         |
| `chapter-2-literature-review.md`          | `02-literature-review.tex`                    |
| `chapter-3-system-analysis-and-design.md` | `03-system-analysis-and-framework-design.tex` |
| `chapter-4-implementation.md`             | `04-implementation.tex`                       |
| `chapter-5-evaluation-and-discussion.md`  | `05-evaluation-and-discussion.tex`            |
| `chapter-6-conclusion-and-future-work.md` | `06-conclusion-and-future-work.tex`           |
| `front-matter/abstract.md`                | `frontmatter/abstract.tex`                    |
| `front-matter/acknowledgements.md`        | `frontmatter/acknowledgements.tex`            |
| `front-matter/abbreviations.md`           | `frontmatter/abbreviations.tex`               |
| `references/references.bib`               | `bibliography/references.bib`                 |
| `assets/diagrams/out/*.svg`               | `figures/**/*.pdf`                            |
| `appendices/*.md`                         | `appendices/*.tex`                            |

---

# 3. Nguyên tắc source of truth

Đây là điểm rất quan trọng để tránh nội dung Markdown và LaTeX bị lệch nhau.

## Trước khi conversion hoàn thành

```text
Markdown = source of truth về nội dung học thuật
LaTeX = publication/layout representation
```

Codex không được tự rewrite nội dung học thuật trong lúc convert. Nó chỉ được:

* Chuyển cấu trúc.
* Chuyển syntax.
* Tạo labels.
* Tạo citations.
* Tạo tables/figures/environments.
* Sửa lỗi compile.
* Điều chỉnh formatting.

Nếu phát hiện nội dung cần sửa, phải ghi vào issue log, không tự sửa kín đáo.

## Sau khi toàn bộ conversion được approve

Bạn cần chọn một trong hai:

```text
Option A — tiếp tục Markdown là source of truth
Option B — khóa Markdown và chuyển LaTeX thành final publication source
```

Với thesis final stage, tôi khuyên:

```text
Sau khi tất cả chapters đã được convert và đối chiếu:
Freeze Markdown → LaTeX trở thành final publication source.
```

Không nên chỉnh cùng một đoạn nội dung ở cả Markdown lẫn LaTeX mà không sync.

---

# 4. Conversion workflow chính thức

## Phase 0 — Freeze và audit nội dung

Trước khi convert:

* Tất cả chapters đã hoàn chỉnh.
* Formal Chapter Review Gate đã pass.
* Không còn `NEEDS_EVIDENCE`.
* Không còn `NEEDS_CITATION`.
* Citation register và `.bib` đã đồng bộ.
* Figures đã được register.
* Tables đã có caption/source.
* Front matter đã hoàn chỉnh.

Tạo Git checkpoint:

```powershell
git status
git add .
git commit -m "docs: freeze thesis markdown before LaTeX migration"
git checkout -b task/thesis-latex-migration
```

## Phase 1 — Audit template

Codex so sánh ba nguồn:

```text
1. Official VNUK thesis template
2. VNUK sample thesis
3. thesis_latex_overleaf_sample.zip
```

Thứ tự ưu tiên:

```text
Official VNUK requirements
> official VNUK sample
> friend's LaTeX sample
> Codex suggestions
```

## Phase 2 — Bootstrap LaTeX skeleton

Codex tạo:

* `main.tex`
* config files.
* metadata.
* front matter.
* chapter placeholder files.
* bibliography.
* figure folders.
* compile scripts.

Chưa convert chapter content.

## Phase 3 — Convert từng chapter

Thứ tự tốt nhất:

```text
1. Chapter 1
2. Chapter 2
3. Chapter 3
4. Chapter 4
5. Chapter 5
6. Chapter 6
7. Front matter
8. Appendices
9. Bibliography
10. Final assembly
```

Mỗi chapter phải trải qua:

```text
Markdown → initial LaTeX
→ syntax normalization
→ citation normalization
→ figure/table conversion
→ compile
→ compare content
→ visual review
→ approval gate
```

## Phase 4 — Figures và diagrams

Sử dụng:

```text
Mermaid source .mmd
→ SVG master
→ PDF vector cho LaTeX/Overleaf
```

Không nên dùng screenshot PNG cho architecture diagram nếu có bản vector.

Ví dụ convert:

```powershell
inkscape framework-architecture.svg `
  --export-type=pdf `
  --export-filename=framework-architecture.pdf
```

Ảnh browser, Playwright report và screenshot giữ PNG.

## Phase 5 — Bibliography

Dùng một file:

```text
docs/thesis-latex/bibliography/references.bib
```

Mỗi citation trong `.tex` phải có key hợp lệ:

```latex
\cite{playwright_docs_2026}
```

Không hard-code citation như `[12]`.

## Phase 6 — Local compile

Chạy từ `docs/thesis-latex`:

```powershell
latexmk -pdf `
  -file-line-error `
  -interaction=nonstopmode `
  -halt-on-error `
  main.tex
```

Nếu chọn XeLaTeX:

```powershell
latexmk -xelatex `
  -file-line-error `
  -interaction=nonstopmode `
  -halt-on-error `
  main.tex
```

## Phase 7 — Overleaf

Tạo một Overleaf project riêng, chỉ chứa thesis LaTeX, không chứa toàn bộ source-code repository.

Lý do:

* Repo hiện tại có `node_modules`, test reports và artifacts không liên quan.
* Overleaf không cần source code framework đầy đủ.
* Overleaf GitHub sync có project/file limits và không hỗ trợ Git LFS hoặc submodules. Overleaf khuyến nghị project GitHub-synced nên dưới khoảng 100 MB. ([docs.overleaf.com][4])

---

# 5. Cách kết nối Overleaf Premium với local

Tôi khuyên dùng **Overleaf Git integration**, không dùng GitHub sync cho workflow chính.

GitHub synchronization là premium nhưng không tự động; người dùng phải chọn push/pull. Ngoài ra, không thể nối một Overleaf project đã tồn tại với một GitHub repository đã tồn tại. ([docs.overleaf.com][4])

## Quy trình khuyên dùng

### Bước 1 — Tạo project trống trên Overleaf

Tên gợi ý:

```text
UI-API-Automation-Testing-Framework-Thesis
```

### Bước 2 — Lấy Git clone command

Trong Overleaf:

```text
Integrations → Git
```

Overleaf sẽ cung cấp lệnh dạng:

```powershell
git clone https://git.overleaf.com/<project-id>
```

### Bước 3 — Clone thành folder riêng

```powershell
cd ..
git clone https://git.overleaf.com/<project-id> AutoTestingFramework-Thesis-Overleaf
```

### Bước 4 — Mở multi-root workspace

Trong VS Code:

```text
Folder 1: AutoTestingFramework
Folder 2: AutoTestingFramework-Thesis-Overleaf
```

Codex lúc này có thể đọc Markdown ở repo chính và viết LaTeX trong repo Overleaf.

### Bước 5 — Push bản LaTeX

```powershell
cd ..\AutoTestingFramework-Thesis-Overleaf
git add .
git commit -m "docs: initialize VNUK thesis LaTeX project"
git push
```

Không để local repo và Overleaf cùng sửa một file mà chưa pull trước.

Quy tắc:

```text
Trước khi local edit: git pull
Sau local edit: compile → commit → git push
Trước khi Overleaf edit: đảm bảo Overleaf đã pull bản mới
Sau Overleaf edit: local git pull trước khi sửa tiếp
```

---

# 6. Prompt 1 — Codex lập kế hoạch migration, chưa sửa file

Bật **Plan Mode ON** và gửi prompt này:

```text
/local
/auto-context

Use $Thesis Planning, $Thesis Review, $Thesis Evidence Citation, and $Thesis Diagramming.

Task:
Prepare a complete plan for migrating the finished Markdown graduation thesis to a professional LaTeX/Overleaf project.

Plan only. Do not create, modify, move, or delete files yet.

Primary sources of truth:
1. Official VNUK thesis requirements and template.
2. Official VNUK thesis sample documents.
3. Current approved Markdown thesis workspace.
4. The uploaded LaTeX thesis sample, used only as a technical reference.

Read:
@AGENTS.md
@docs/thesis-workspace/AGENTS.md
@docs/thesis-workspace/outline.md
@docs/thesis-workspace/plan.md
@docs/thesis-workspace/tasks.md
@docs/thesis-workspace/progress.md
@docs/thesis-workspace/chapter-review-gate.md
@docs/thesis-workspace/quality-checklist.md
@docs/thesis-workspace/writing-style-guide.md
@docs/thesis-workspace/citation-register.md
@docs/thesis-workspace/evidence-matrix.md
@docs/thesis-workspace/figure-register.md
@docs/thesis-workspace/visual-evidence-register.md
@docs/thesis-workspace/chapters/
@docs/thesis-workspace/front-matter/
@docs/thesis-workspace/appendices/
@docs/thesis-workspace/references/
@docs/thesis-workspace/assets/
@docs/final-gradation-thesis-doc/
@docs/thesis-workspace/latex-reference-sample/

Audit the reference LaTeX sample, including:
- main.tex
- frontmatter/
- chapters/
- appendices/
- references.bib
- figures/
- document class
- packages
- page layout
- typography
- page numbering
- bibliography backend/style
- figure/table configuration
- cross-references
- compiler requirements

Important:
- The reference LaTeX sample belongs to another thesis and must not determine this thesis’s academic outline.
- The official VNUK template takes precedence over the reference sample.
- The current thesis has six chapters.
- Do not rewrite or summarize thesis content during migration.
- Do not invent citations or evidence.
- Markdown remains the academic-content source of truth until the migration is fully approved.

Design a migration plan covering:

1. VNUK formatting audit.
2. Target LaTeX directory structure.
3. Compiler selection:
   - pdfLaTeX or XeLaTeX,
   - justification for the choice.
4. Font and spacing strategy.
5. Front-matter structure.
6. Six-chapter mapping.
7. Appendix mapping.
8. Bibliography and citation migration.
9. Figure and table migration.
10. Mermaid SVG-to-PDF conversion.
11. Cross-reference and label conventions.
12. Code-listing conventions.
13. Markdown-to-LaTeX conversion strategy.
14. Local compile and error validation.
15. Content-equivalence validation.
16. Visual QA checklist.
17. Overleaf Premium Git synchronization strategy.
18. Approval gates for every chapter.
19. Rollback and source-of-truth strategy.
20. Files, scripts, skills, and agents that should be created.

Propose whether to create:
- .agents/skills/thesis-latex-migration/SKILL.md
- .codex/agents/thesis-latex-architect.toml
- docs/thesis-workspace/latex-migration/
- docs/thesis-latex/

Return:
1. Audit of the reference LaTeX sample.
2. Recommended architecture.
3. Exact target folder tree.
4. Migration phases.
5. Risks and mitigations.
6. Files to create or update.
7. Commands and dependencies required.
8. Exact implementation prompt for Phase 1.

Do not edit files.
```

---

# 7. Prompt 2 — Bootstrap LaTeX workspace và harness

Sau khi approve plan, tắt Plan Mode và gửi:

```text
Approved. Implement Phase 1 of the thesis LaTeX migration only.

Do not convert chapter prose yet.

Create:

1. Shared migration skill:
- .agents/skills/thesis-latex-migration/SKILL.md

2. Codex LaTeX specialist:
- .codex/agents/thesis-latex-architect.toml

3. Migration control documents:
- docs/thesis-workspace/latex-migration/migration-plan.md
- docs/thesis-workspace/latex-migration/source-map.md
- docs/thesis-workspace/latex-migration/conversion-register.md
- docs/thesis-workspace/latex-migration/formatting-checklist.md
- docs/thesis-workspace/latex-migration/compile-issue-log.md
- docs/thesis-workspace/latex-migration/latex-progress.md
- docs/thesis-workspace/latex-migration/overleaf-sync-guide.md

4. LaTeX staging project:
- docs/thesis-latex/main.tex
- docs/thesis-latex/README.md
- docs/thesis-latex/latexmkrc
- docs/thesis-latex/config/metadata.tex
- docs/thesis-latex/config/packages.tex
- docs/thesis-latex/config/formatting.tex
- docs/thesis-latex/config/commands.tex
- docs/thesis-latex/frontmatter/
- docs/thesis-latex/chapters/
- docs/thesis-latex/appendices/
- docs/thesis-latex/bibliography/references.bib
- docs/thesis-latex/figures/
- docs/thesis-latex/tables/
- docs/thesis-latex/scripts/build.ps1
- docs/thesis-latex/scripts/clean.ps1
- docs/thesis-latex/scripts/convert-svg-to-pdf.ps1
- docs/thesis-latex/scripts/export-overleaf.ps1

Requirements:
- Follow official VNUK structure first.
- Use the reference LaTeX sample only for reusable technical patterns.
- Fix the page-numbering inconsistency found in the reference sample.
- Use six chapter placeholders matching the current thesis outline.
- Add front matter for abstract, declaration, acknowledgements, abbreviations, definitions, and author contribution where required.
- Do not copy another student’s personal details.
- Do not convert thesis content yet.
- Do not invent metadata; mark unknown fields as PLACEHOLDER or NEEDS_INPUT.
- Choose citation style only after checking the official VNUK source.
- Keep the LaTeX project compatible with Overleaf.
- Avoid minted or packages requiring unrestricted shell execution unless absolutely necessary.
- Prefer listings for code.
- Prefer PDF for vector diagrams and PNG/JPG for screenshots.
- Update tasks.md and progress.md with the migration status.

Return:
1. Files changed.
2. Target compiler.
3. Template decisions.
4. Outstanding metadata.
5. Compile command.
6. Exact approval question before converting Chapter 1.
```

---

# 8. Prompt 3 — Convert từng chapter

Dùng lại prompt này, chỉ thay số chapter:

```text
Use $Thesis LaTeX Migration and the thesis-latex-architect agent.

Task:
Convert Chapter 1 only from approved Markdown to LaTeX.

Source:
@docs/thesis-workspace/chapters/chapter-1-introduction.md

Target:
@docs/thesis-latex/chapters/01-introduction.tex

Read:
@docs/thesis-workspace/latex-migration/migration-plan.md
@docs/thesis-workspace/latex-migration/source-map.md
@docs/thesis-workspace/latex-migration/conversion-register.md
@docs/thesis-workspace/latex-migration/formatting-checklist.md
@docs/thesis-workspace/outline.md
@docs/thesis-workspace/citation-register.md
@docs/thesis-workspace/figure-register.md
@docs/thesis-latex/config/
@docs/thesis-latex/bibliography/references.bib

Rules:
1. Preserve academic meaning exactly.
2. Do not rewrite, shorten, expand, or improve the prose.
3. Convert headings to appropriate chapter/section/subsection commands.
4. Convert citations to valid BibLaTeX citation keys.
5. Convert figure references to label/cref references.
6. Convert tables to booktabs/tabularx/longtable as appropriate.
7. Convert code blocks using listings.
8. Escape LaTeX special characters correctly.
9. Add stable semantic labels.
10. Do not add unsupported evidence.
11. If conversion reveals a content issue, record it in compile-issue-log.md instead of silently modifying content.
12. Update source-map.md, conversion-register.md, and latex-progress.md.
13. Compile the entire LaTeX project.
14. Fix LaTeX syntax and formatting errors only.
15. Stop for approval before converting Chapter 2.

Return:
1. Files changed.
2. Conversion summary.
3. Compile result.
4. Warnings/errors.
5. Content-equivalence concerns.
6. Figures/tables requiring manual review.
7. Exact approval question.
```

---

# 9. Prompt final QA trước khi đưa lên Overleaf

```text
Use $Thesis LaTeX Migration, $Thesis Review, $Thesis Evidence Citation, and $Thesis Diagramming.

Task:
Perform the final LaTeX/Overleaf readiness audit.

Read:
@docs/thesis-latex/
@docs/thesis-workspace/outline.md
@docs/thesis-workspace/quality-checklist.md
@docs/thesis-workspace/citation-register.md
@docs/thesis-workspace/figure-register.md
@docs/thesis-workspace/visual-evidence-register.md
@docs/thesis-workspace/latex-migration/

Audit:
1. VNUK front-matter order.
2. Cover and metadata correctness.
3. Page numbering.
4. Table of contents.
5. List of figures.
6. List of tables.
7. Chapter numbering.
8. Section hierarchy.
9. Figure and table numbering.
10. Figure resolution and readability.
11. Cross-references.
12. Citation keys.
13. Missing bibliography entries.
14. Unused bibliography entries.
15. Undefined references.
16. Overfull and underfull boxes.
17. Font and spacing.
18. Margin compliance.
19. Appendix numbering.
20. Content parity with approved Markdown.
21. Remaining PLACEHOLDER, NEEDS_INPUT, NEEDS_CITATION, or NEEDS_EVIDENCE markers.
22. Overleaf package compatibility.
23. Final clean compile from scratch.

Run:
latexmk -C
latexmk using the selected compiler with halt-on-error enabled.

Do not rewrite thesis prose.

Return:
- PASS / NEEDS_FIXES / BLOCKED
- QA summary table
- compile status
- remaining issues
- files changed
- exact steps to push the project to Overleaf
```

---

## Khuyến nghị cuối cùng

Workflow phù hợp nhất với bạn là:

```text
Markdown thesis hoàn chỉnh
→ freeze content
→ audit VNUK + LaTeX sample
→ bootstrap LaTeX project
→ convert từng chapter
→ compile và review từng chapter
→ final LaTeX QA
→ push lên dedicated Overleaf Premium project
```

Không nên yêu cầu Codex:

```text
Convert toàn bộ thesis sang LaTeX trong một lần.
```

Nên vận hành tương tự Chapter Review Gate hiện tại:

```text
Convert Chapter X
→ Compile
→ Content-equivalence review
→ Visual review
→ Bạn approve
→ Convert Chapter X+1
```

Như vậy sẽ tránh mất citation, hỏng figure, sai numbering hoặc thay đổi nội dung học thuật trong quá trình chuyển đổi.

[1]: https://developers.openai.com/codex/mcp "Model Context Protocol – Codex | OpenAI Developers"
[2]: https://github.com/James-Yu/LaTeX-Workshop "GitHub - James-Yu/LaTeX-Workshop: Boost LaTeX typesetting efficiency with preview, compile, autocomplete, colorize, and more. · GitHub"
[3]: https://docs.overleaf.com/integrations-and-add-ons/git-integration-and-github-synchronization/git-integration "Git integration | Overleaf docs"
[4]: https://docs.overleaf.com/integrations-and-add-ons/git-integration-and-github-synchronization/github-synchronization "GitHub synchronization | Overleaf docs"

---

> **Note (2026-06-12):** The authoritative execution spec for the LaTeX migration is now `docs/thesis-workspace/latex-migration/latex-migration-spec.md`. This recommendation file is supporting rationale/background (sample audit, front-matter drafts). Where the two differ, the spec wins.

# ADDENDUM — Claude verification, locked decisions, and front-matter drafts (2026-06-11)

This addendum is added by Claude after directly inspecting the extracted sample at `docs/thesis_latex_overleaf_structure_sample/` (not only the prose above). It records what was confirmed, the decisions that are now locked, and ready-to-use cover and acknowledgements drafts using the real author/supervisor metadata from `README.md`. The Phase 5 task IDs (T-090 to T-099, plus planning task T-091) are tracked in `docs/thesis-workspace/tasks.md`.

## 1. Sample inspection — confirmed facts

Verified directly from the extracted files:

- `main.tex`: `\documentclass[12pt,a4paper,oneside]{report}`; `geometry` left 3.0 cm, right/top/bottom 2.5 cm; `newtxtext`/`newtxmath`; `microtype`; `\onehalfspacing`; `\parindent` 1.25 cm; `booktabs`/`tabularx`/`siunitx`; `tikz`; `listings`; `hyperref`+`cleveref`; `biblatex` backend `biber`, **`style=ieee`**, `sorting=none`.
- **Page-numbering bug confirmed:** `main.tex` sets `\pagenumbering{roman}` (line 116) but `frontmatter/frontmatter.tex` immediately resets `\pagenumbering{arabic}` (line 5). Result: the front matter would print 1, 2, 3 instead of i, ii, iii. **Fix during bootstrap:** delete the `\pagenumbering{arabic}` line from `frontmatter.tex`; the single `\pagenumbering{arabic}` reset belongs only in `main.tex` right before the chapters.
- Sample has **7 chapters** (intro, lit review, methodology, experimental setup, results, discussion, conclusion) for a computer-vision topic. Our thesis has **6 chapters**. Use the file/format patterns only, never the academic structure or content.
- Front matter present: cover (2 pages: outside cover + inside title/signature page), declaration, acknowledgements, abstract. **Missing** vs our workspace: abbreviations, definitions, author-contribution, and a VNUK approval page with committee members.
- Cover, declaration, acknowledgements, and abstract are hard-coded with the other student's name (Tran Cong Quoc Huy, ID 22040005), supervisor (Nguyen Chi Thien), and topic. All must be replaced.
- Figures are all `.png` (raster). Our diagrams are SVG masters and should become PDF vector for crisp output.

## 2. Locked decisions for our migration

| Decision | Choice | Reason |
|---|---|---|
| Compiler | **pdfLaTeX + Biber** | Matches the sample's package set (`newtxtext`, `inputenc utf8`), is the Overleaf default, and supports `biblatex`/`biber`. XeLaTeX is not needed since there is no custom OpenType font or complex script requirement. |
| Bibliography style | **APA 7th via `biblatex` `style=apa` + `biber`** | The thesis citation-style decision is already locked to APA 7th in `outline.md`, `citation-register.md`, and `references.bib`. The sample's `style=ieee` is **not** reused. |
| Document class / layout | `report`, 12 pt, A4, `oneside`; geometry left 3.0 cm, others 2.5 cm; `\onehalfspacing` | Standard VNUK-style thesis layout; matches the sample and typical VNUK margins. Confirm exact margins against the official VNUK template in T-091. |
| Source of truth | Markdown stays authoritative until migration approved; then **freeze Markdown → LaTeX becomes final publication source** | Prevents content drift between two formats. |
| Code listings | `listings` (not `minted`) | `minted` needs shell-escape, which Overleaf restricts; `listings` is portable. |
| Diagrams | SVG master → **PDF vector**; screenshots stay PNG/JPG | Vector diagrams stay sharp at any zoom; raster screenshots are fine as PNG. |
| Project hosting | A **dedicated** Overleaf project containing only `docs/thesis-latex/`, synced via Overleaf Git integration | The main repo has `node_modules`/artifacts irrelevant to Overleaf and may exceed sync limits. |

VNUK template precedence rule (unchanged): Official VNUK requirements > official VNUK sample > friend's LaTeX sample > assistant suggestions.

## 3. Plugin / MCP support — Claude and Codex

There is **no official Overleaf or LaTeX MCP server** for either Claude Code or Codex, and one is not needed. Both assistants already do everything required through their normal file and shell tools:

- **Claude Code** (this environment): reads/edits `.tex`/`.bib`/`.sty` with the file tools and runs `latexmk`, `pdflatex`, `biber`, `pandoc`, `inkscape`, and `git` through the Bash tool. No plugin or MCP is required; the work is plain file editing plus compile commands.
- **Codex**: same capability set; supports MCP generally but has no dedicated LaTeX/Overleaf MCP.
- **Recommended (optional) local tooling for the human side:** the `James-Yu.latex-workshop` VS Code extension (compile + PDF preview + SyncTeX) and a local TeX distribution (MiKTeX or TeX Live) so PDFs build locally before pushing to Overleaf. These are editor conveniences, not assistant plugins.
- **Best approach:** make LaTeX a first-class part of the thesis harness via a `thesis-latex-migration` skill and a LaTeX architect agent (created in T-092), rather than depending on an unvetted community MCP.

## 4. Front-matter drafts (T-030 / T-035 unblocked, content-ready)

These professionalized drafts use the real metadata from `README.md` and the `outline.md`. They are written fresh — **not** copied from the friend's sample wording. They feed both the Markdown front matter (T-030/T-035) and the LaTeX `frontmatter/cover.tex` and `frontmatter/acknowledgements.tex` (T-094).

Author/supervisor metadata source of truth (`README.md`):

- Author: **Le Tiep Tuyen**, Student ID **22020015**, Cohort **K22**, Computer Science and Engineering, VNUK Institute for Research and Executive Education, The University of Danang.
- Supervisor: **Le Dinh Dung, PhD** (PhD in Computer Science; Lecturer), VNUK Institute for Research and Executive Education, The University of Danang.
- Title: **A Comprehensive UI and API Automation Testing Framework Using Playwright: An Enterprise-Standard Approach**.
- Place/Year: Da Nang, 2026.

### 4.1 Outside cover (LaTeX target `cover.tex`, page 1)

```text
THE UNIVERSITY OF DANANG
VNUK INSTITUTE FOR RESEARCH AND EXECUTIVE EDUCATION
            [VNUK logo]

A COMPREHENSIVE UI AND API AUTOMATION TESTING FRAMEWORK
USING PLAYWRIGHT: AN ENTERPRISE-STANDARD APPROACH

                    by
              LE TIEP TUYEN

       under the supervision of
          LE DINH DUNG, PhD
VNUK Institute for Research and Executive Education,
        The University of Da Nang

              Da Nang, 2026
```

### 4.2 Inside title / signature page (LaTeX target `cover.tex`, page 2)

```text
A COMPREHENSIVE UI AND API AUTOMATION TESTING FRAMEWORK
USING PLAYWRIGHT: AN ENTERPRISE-STANDARD APPROACH

                    by
              Le Tiep Tuyen

Submitted to the Department of Computer Science and Engineering (CSE),
VNUK Institute for Research and Executive Education, The University of Da Nang
in Partial Fulfillment of the Requirements for the Degree of
Bachelor in Computer Science and Engineering

                Da Nang, 2026

Signature of Author:  ____________________
                      Le Tiep Tuyen, Student ID: 22020015

Certified by:         ____________________
                      Le Dinh Dung, PhD
                      Thesis Supervisor

Accepted by:          ____________________
                      [Full Name of Head of Department]   <- NEEDS_INPUT (person name)
                      Head of Department,
                      Computer Science and Engineering (CSE)
```

Department is confirmed as **Computer Science and Engineering (CSE)**. `NEEDS_INPUT` remains only for the Head of Department's **person name** and any additional VNUK approval-committee members; these come from the official VNUK approval-page template and must be confirmed before T-030 is finalized.

### 4.3 Acknowledgements draft (LaTeX target `acknowledgements.tex`)

> I would like to express my sincere gratitude to my supervisor, Le Dinh Dung, PhD, for his thoughtful guidance, technical insight, and consistent encouragement throughout this graduation project. His feedback on testing methodology and software design substantially shaped the direction and quality of this work.
>
> I am also grateful to the lecturers and staff of the VNUK Institute for Research and Executive Education, The University of Danang, for the academic foundation and supportive learning environment that made this research possible.
>
> Finally, I thank my classmates for their constructive discussions and my family for their patience and steady support during the development and writing of this thesis.

Note: per the workspace exclusion rule, the acknowledgements must thank only people and institutions — no AI tools, assistants, or private writing-workflow infrastructure.

## 5. How Phase 5 fits the remaining work (ordering)

Planning task **T-091** may start now in parallel (it only records decisions). All conversion tasks (T-090, T-092–T-099) stay **BLOCKED** until the Markdown thesis is fully complete and assembled, because converting before the content is frozen would force re-conversion. Recommended global order:

1. Finish Markdown back/front matter: T-083 References → T-060 Appendices → T-036 Abstract + T-032 Definitions/Abbreviations → T-030 Title/Approval (uses §4 drafts) + T-035 Acknowledgements (uses §4.3 draft) → T-065 assemble `thesis.md`.
2. Then LaTeX phase: T-090 freeze → T-092 bootstrap → T-093 chapters (gate per chapter) → T-094 front matter → T-095 appendices → T-096 bibliography (APA) → T-097 figures → T-098 final QA gate → T-099 Overleaf push.

T-091 (audit/decisions) is the only LaTeX task safe to do during the Markdown finishing stage.
