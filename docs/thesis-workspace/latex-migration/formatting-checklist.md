# LaTeX Formatting Checklist

Use this checklist during T-092 through T-098.

| Area | Required State | Status |
|---|---|---|
| Compiler | XeLaTeX | Updated after formatting-guideline request; configured through `latexmkrc` |
| Bibliography | Biber + `biblatex` APA style | Configured in T-092; migration pending T-096 |
| Document class | `report`, 11pt, A4, `oneside` | Updated after formatting-guideline request |
| Margins | Single-sided binding layout: left/inside 3.0 cm; right/top/bottom 2.0 cm | Updated after formatting-guideline request |
| Font | Calibri via XeLaTeX `fontspec`; fallback Carlito if Calibri is unavailable | Updated after formatting-guideline request |
| Line spacing | One-and-a-half spacing | Configured in T-092 |
| Page numbering | Roman front matter; arabic body | Configured in T-092 |
| Front matter order | Cover, approval, TOC, LoF, LoT, author contribution, acknowledgements, definitions, abbreviations, abstract | Configured in T-092 |
| Code listings | `listings`, not `minted` | Configured in T-092 |
| Figures | PDF vector for diagrams; PNG/JPG for screenshots | Pending T-097 |
| Captions | Bottom position, bold label, small single-spaced left-aligned caption text | Updated after formatting-guideline request |
| Chapter headings | Left-aligned, bold 14pt, preceded by `Chapter` and number | Updated after formatting-guideline request |
| Cross-references | `hyperref` + `cleveref` | Configured in T-092 |
| Private workflow exclusion | No private thesis-writing workflow in `.tex` output | Must be checked every task |
