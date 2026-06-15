# LaTeX Formatting Checklist

Use this checklist during T-092 through T-098.

| Area | Required State | Status |
|---|---|---|
| Compiler | XeLaTeX | Updated after formatting-guideline request; configured through `latexmkrc` |
| Bibliography | Biber + `biblatex` APA style | Configured in T-092; migration pending T-096 |
| Document class | `report`, 11pt, A4, `oneside` | Updated after formatting-guideline request |
| Margins | All four margins 2.0 cm (left/right/top/bottom) | User-confirmed deviation from the guideline's 3.0 cm binding margin (T-098 QA gate, 2026-06-14): uniform 2.0 cm kept |
| Font | Calibri via XeLaTeX `fontspec`; fallback Carlito if Calibri is unavailable | Updated after formatting-guideline request |
| Line spacing | One-and-a-half spacing | Configured in T-092 |
| Page numbering | Roman front matter; arabic body | Configured in T-092 |
| Front matter order | Cover, approval, TOC, LoF, LoT, author contribution, acknowledgements, definitions, abbreviations, abstract | Configured in T-092 |
| Code listings | `listings`, not `minted` | Configured in T-092 |
| Tables | `booktabs` rules, no vertical rules, `tabularx`/`Y` for prose tables, `longtable` for multi-page tables, bottom captions, global row spacing via `\arraystretch=1.22` and `\extrarowheight=1.5pt` | Updated after Chapter 2 table-spacing review |
| Figures | PDF vector for diagrams; PNG/JPG for screenshots | Pending T-097 |
| Captions | Bottom position, bold label, small single-spaced left-aligned caption text | Updated after formatting-guideline request |
| Chapter headings | Left-aligned, bold 14pt, preceded by `Chapter` and number | Updated after formatting-guideline request |
| Cross-references | `hyperref` + `cleveref` | Configured in T-092 |
| Private workflow exclusion | No private thesis-writing workflow in `.tex` output | Must be checked every task |
