# LaTeX Migration Specification (Source of Truth)

**Status:** Authoritative implementation spec for the thesis LaTeX/Overleaf migration (Phase 5).
**Audience:** Both Codex and Claude. Follow this document during every LaTeX migration task (T-090 to T-099, plus planning T-091).
**Created:** 2026-06-12.

## 0. Authority and precedence

1. This file is the single source of truth for *how* the LaTeX migration is executed.
2. For thesis academic **content**, the approved Markdown under `docs/thesis-workspace/` remains the source of truth until the migration is fully approved and Markdown is frozen.
3. For **formatting**, precedence is: official VNUK template (`docs/final-graduation-thesis-doc/thesis-template.md` and `source-notes/vnuk-template-analysis.md`) > VNUK sample > friend's LaTeX sample (`docs/thesis_latex_overleaf_structure_sample/`) > assistant suggestions.
4. `docs/Latex_approach_recommendation.md` is supporting **rationale/background** (sample audit, front-matter drafts). Where it differs from this spec, **this spec wins**.

## 1. Golden rules

- Do **not** rewrite, shorten, expand, or "improve" thesis prose during conversion. Convert structure and syntax only.
- Do **not** invent citations, evidence, metrics, or figures. Verified execution evidence is fixed: 18 tests, 18 passed, 0 failed, 0 skipped, 0 errors, 28.890057s.
- If conversion surfaces a content problem, record it in `latex-migration/compile-issue-log.md` (created in T-092) — never fix prose silently.
- Do **not** include private thesis-writing harness details (thesis-* skills/agents, drafting/review workflow) in any `.tex` output. The project Copilot Agentic-AI automation workflow may appear only as a project automation-testing feature, exactly as in the approved Markdown.
- Do **not** modify automation source code or commit secrets.
- One chapter per approval gate; do not batch-convert the whole thesis at once.

## 2. Locked technical decisions

| Item | Decision |
|---|---|
| Compiler | pdfLaTeX |
| Bibliography backend / style | Biber + `biblatex` with `style=apa` (APA 7th). **Confirmed by the user on 2026-06-12** (T-023 reaffirmed); the template's generic IEEE line is intentionally overridden. The sample's `style=ieee` is NOT reused. |
| Document class | `report`, 12pt, A4, `oneside` |
| Page geometry | left 3.0 cm; right/top/bottom 2.5 cm (confirm against official VNUK template in T-091) |
| Line spacing | `\onehalfspacing` (setspace) |
| Body font | `newtxtext` + `newtxmath` (Times-like); `microtype` enabled |
| Paragraph | `\parindent` 1.25 cm; `\parskip` 0 |
| Code listings | `listings` (NOT `minted` — Overleaf restricts shell-escape) |
| Tables | `booktabs` + `tabularx`/`longtable`; avoid vertical rules |
| Cross-references | `hyperref` + `cleveref` (`\cref`/`\Cref`) |
| Diagrams | Mermaid SVG masters → PDF vector for LaTeX; screenshots stay PNG/JPG |
| Citations in text | `\autocite{key}` (parenthetical) / `\textcite{key}` (narrative); never hard-code `[12]` |
| Page numbering | Roman (i, ii, iii) for front matter; switch to arabic (1, 2, 3) once, immediately before Chapter 1. **Fix the sample bug:** remove the stray `\pagenumbering{arabic}` from `frontmatter/frontmatter.tex`. |
| Overleaf project | A dedicated project containing only `docs/thesis-latex/`; synced via Overleaf Git integration; keep < ~100 MB; no `node_modules`/framework source. |

## 3. Target structure

```
docs/thesis-latex/
├── main.tex
├── latexmkrc
├── README.md
├── config/        metadata.tex, packages.tex, formatting.tex, commands.tex
├── frontmatter/   cover.tex, approval.tex, author-contribution.tex,
│                  acknowledgements.tex, abstract.tex, abbreviations.tex, definitions.tex
├── chapters/      01-introduction.tex ... 06-conclusion-and-future-work.tex
├── appendices/    appendix-a-installation.tex ... appendix-e-copilot-workflow.tex
├── bibliography/  references.bib
├── figures/       architecture/, workflows/, screenshots/, reports/, logos/
├── tables/
└── scripts/       build.ps1, clean.ps1, convert-svg-to-pdf.ps1, export-overleaf.ps1
```

Migration control docs live under `docs/thesis-workspace/latex-migration/`: this spec, plus (created in T-092) `source-map.md`, `conversion-register.md`, `formatting-checklist.md`, `compile-issue-log.md`, `latex-progress.md`, `overleaf-sync-guide.md`.

## 4. Markdown → LaTeX mapping

| Markdown source (`docs/thesis-workspace/`) | LaTeX target (`docs/thesis-latex/`) |
|---|---|
| `chapters/chapter-1-introduction.md` | `chapters/01-introduction.tex` |
| `chapters/chapter-2-literature-review.md` | `chapters/02-literature-review.tex` |
| `chapters/chapter-3-system-analysis-and-design.md` | `chapters/03-framework-design.tex` |
| `chapters/chapter-4-implementation.md` | `chapters/04-implementation.tex` |
| `chapters/chapter-5-evaluation-and-discussion.md` | `chapters/05-evaluation-and-discussion.tex` |
| `chapters/chapter-6-conclusion-and-future-work.md` | `chapters/06-conclusion-and-future-work.tex` |
| `front-matter/title-page.md` | `frontmatter/cover.tex` |
| `front-matter/approval-page.md` | `frontmatter/approval.tex` |
| `front-matter/author-contribution.md` | `frontmatter/author-contribution.tex` |
| `front-matter/acknowledgements.md` | `frontmatter/acknowledgements.tex` |
| `front-matter/definitions.md` | `frontmatter/definitions.tex` |
| `front-matter/abbreviations.md` | `frontmatter/abbreviations.tex` |
| `front-matter/abstract.md` | `frontmatter/abstract.tex` |
| `references/references.bib` | `bibliography/references.bib` |
| `appendices/appendix-a..e-*.md` | `appendices/appendix-a..e-*.tex` |
| `assets/diagrams/out/*.svg` | `figures/**/*.pdf` |
| `assets/figures/*.png` | `figures/**/*.png` |

`docs/thesis-workspace/thesis.md` is the assembled reference for content parity, not a conversion input.

## 5. Conversion conventions

- **Headings:** `# Chapter N` → `\chapter{...}`; `##` → `\section`; `###` → `\subsection`; `####` → `\subsubsection`.
- **Labels:** add stable semantic labels — `\label{ch:introduction}`, `\label{sec:framework-architecture}`, `\label{fig:framework-architecture}`, `\label{tab:tool-comparison}`.
- **Cross-refs:** `\cref{...}`/`\Cref{...}`; never hard-code "Figure 3.1".
- **Citations:** `[@key]` → `\autocite{key}`; `[@a; @b]` → `\autocite{a,b}`; narrative "X (2025) shows" → `\textcite{key}`.
- **Figures:** `\begin{figure}[htbp]\centering\includegraphics[width=...]{figures/.../name}\caption{...}\label{fig:...}\end{figure}`. Prefer PDF vector for diagrams.
- **Tables:** `booktabs`; wide tables use `tabularx` with the `Y` ragged-right column; multi-page use `longtable`.
- **Code:** fenced blocks → `lstlisting` with an appropriate language; inline code → `\code{...}` (detokenized `\texttt`).
- **Escaping:** escape `% & _ # $ { } ~ ^ \` and URLs via `\url{}`/`hyperref`.

## 6. Front-matter specifics

- Author/supervisor metadata from `README.md`: Le Tiep Tuyen (ID 22020015, K22, CSE); supervisor Dr. Le Dinh Dung (PhD), VNUK, The University of Danang. Title and "Da Nang, 2026" per the assembled `thesis.md`.
- Approval page: Advisor = Dr. Le Dinh Dung; Department Chair = Dr. Le Dinh Dung; Co-Advisor = None; **defense committee members deferred** to the defense (leave a clearly labelled placeholder, not `NEEDS_INPUT`).
- TOC / List of Figures / List of Tables are generated by LaTeX (`\tableofcontents`, `\listoffigures`, `\listoftables`) — do not hand-write them.
- Definitions still carry `[@key]`; convert them to `\autocite` like body citations.

## 7. Phase procedure and task map

| Task | Phase | Action | Gate |
|---|---|---|---|
| T-091 | Plan | Audit VNUK template + friend's sample; confirm margins/decisions; finalize this spec + folder tree. No content edits. | Plan approved |
| T-090 | Freeze | Confirm registers synced, no unresolved `NEEDS_*`; git checkpoint; create branch `task/thesis-latex-migration`. | Clean baseline |
| T-092 | Bootstrap | Create `docs/thesis-latex/` skeleton + config + scripts + control docs; fix page-numbering bug. No content conversion. | Compiles empty |
| T-093 | Convert | Chapters 1→6, one per gate: Markdown→LaTeX → compile → content-parity check → visual review. | Per-chapter approval |
| T-094 | Convert | Front matter (cover, approval, author-contribution, acknowledgements, abstract, abbreviations, definitions). | Compiles + parity |
| T-095 | Convert | Appendices A–E. | Compiles + parity |
| T-096 | Bib | Port `references.bib`; APA 7 style; verify every key resolves; no unused/undefined. | 0 missing/undefined |
| T-097 | Figures | SVG→PDF vector; screenshots PNG; update paths. | All figures render |
| T-098 | QA | Full clean `latexmk` from scratch; VNUK order, numbering, cross-refs, citations, margins, content parity, no leftover placeholders. | PASS gate |
| T-099 | Overleaf | Dedicated project; clone; push; document pull/compile/push protocol. | Pushed + builds on Overleaf |

## 8. Compile commands

```powershell
# from docs/thesis-latex
latexmk -pdf -file-line-error -interaction=nonstopmode -halt-on-error main.tex
latexmk -C   # clean
```

## 9. QA gate checklist (T-098)

VNUK front-matter order · cover/metadata correct · roman→arabic page numbering · TOC/LoF/LoT generated · chapter & appendix numbering · figure/table numbering and readability · all `\cref` resolve · all citation keys resolve · no undefined references · no unused bib entries (or intentionally kept) · margins/typography compliant · content parity with approved Markdown · zero PLACEHOLDER/NEEDS_INPUT/NEEDS_CITATION/NEEDS_EVIDENCE · Overleaf package compatibility · clean compile from scratch.

## 10. Open inputs (track until resolved)

- `NEEDS_INPUT`: defense committee member names (post-defense).
- `NEEDS_INPUT`: VNUK logo image file for the cover (`figures/logos/vn-uk-logo.png`).
- Optional: exact submission month for the cover (currently "Da Nang, 2026").
- Confirm exact VNUK margin/spacing requirements against the official template in T-091.

## 11. T-091 audit findings (2026-06-12)

Audited `docs/final-graduation-thesis-doc/thesis-template.md` (official template, ~1.1 MB), `source-notes/vnuk-sample-analysis.md`, `source-notes/vnuk-template-analysis.md`, and the friend's sample at `docs/thesis_latex_overleaf_structure_sample/`.

### Confirmed consistent with this spec
- Front-matter order (title, approval, TOC, list of figures, list of tables, author contribution, acknowledgements, definitions, abbreviations, abstract) matches the template and the assembled `thesis.md`.
- TOC / List of Figures / List of Tables are auto-generated (template relies on Word caption/heading styles; LaTeX uses `\tableofcontents`/`\listoffigures`/`\listoftables`). No hand-writing.
- Six-chapter structure matches the VNUK adapted pattern.
- Page numbering: roman front matter → arabic body (consistent; sample bug fix still required).

### RESOLVED DECISION — citation style = APA 7 (confirmed 2026-06-12)
- The official template states "All citations must be IEEE format." (line 278) while also saying "Use a style appropriate for your field" (line 273).
- The thesis was built on **APA 7th edition** by explicit user decision (T-023); all artifacts are APA: `references/references.md`, `references.bib`, and the `[@key]` markers.
- **User confirmed on 2026-06-12 to keep APA 7.** The template's generic IEEE line is intentionally overridden for this thesis. T-096 uses `biblatex style=apa`. No rework needed.

### Minor finding — abstract length
- Template recommends abstracts **< 150 words** (hard limit: 1 page single-spaced). The current abstract is ~250 words — within the hard limit but above the recommendation. User may optionally request a condensed <150-word abstract before/at the LaTeX stage.

### Formatting note
- The template is a Word/style-based document and does not state explicit cm margins in prose; it relies on named styles ("Normal" body = 12 pt). The spec's geometry (left 3.0 cm / others 2.5 cm, 12 pt Times-like, 1.5 spacing) is retained as a standard VNUK-style default and should be confirmed against the actual VNUK `.docx` styles during T-098 QA.

### Tooling — TeX distribution (Cách 1 — DONE 2026-06-12)
- **MiKTeX 25.12 installed and verified** (per-user). Tools: `pdflatex` (MiKTeX-pdfTeX 4.23), `biber` 2.21, `latexmk` 4.88. A minimal `pdflatex` compile produced a PDF (exit 0). MiKTeX on-the-fly package install set to **Always**, so compiles auto-fetch missing packages without prompting.
- Binaries are at `C:\Users\Admin\AppData\Local\Programs\MiKTeX\miktex\bin\x64\`. A fresh terminal/session picks them up on PATH; if a tool is "not found", use that full path or open a new shell.
- Optional: run MiKTeX updates (Console → Updates) to clear the "not checked for updates" advisory.

### T-091 outcome
- Structural/format decisions confirmed. Folder tree (Section 3) finalized.
- Citation style APA 7 is confirmed by the user; no APA/IEEE blocker remains before T-096.
- TeX install (Cách 1) is complete and verified; no tooling prerequisite remains before T-092.

## 12. T-090 freeze findings (2026-06-12)

- Markdown baseline frozen for LaTeX migration.
- `docs/thesis-workspace/thesis.md` assembled from approved front matter, Chapters 1-6, References, and Appendices A-E.
- Freeze audit saved as `docs/thesis-workspace/reviews/latex-freeze-audit-2026-06-12.md`.
- Citation check: 72 keys used in `thesis.md`, 76 entries in `references.bib`, 0 missing keys.
- Image check: 21 image links in `thesis.md`, 0 missing assets.
- Marker check: 0 unresolved `NEEDS_*`, `PLACEHOLDER`, `TODO`, or `FIXME` markers in the assembled thesis and thesis source content.
- Optional candidate visual entries that remain `NEEDS_EVIDENCE` / `NEEDS_SOURCE` in registers are not blockers because they are not inserted in the assembled thesis.
- Git checkpoint and branch `task/thesis-latex-migration` created. T-092 is unblocked.
