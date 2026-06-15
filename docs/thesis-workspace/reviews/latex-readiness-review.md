# LaTeX / Overleaf Readiness QA Gate (T-098)

- **Actor:** Claude (final QA / audit; no chapter prose changed)
- **Date:** 2026-06-14
- **Inputs:** full clean rebuild (`latexmk -gg -xelatex`), `build/main.pdf`, `build/main.log`, `build/main.toc`, `build/main.lof`, `build/main.lot`, `config/*`, `main.tex`, figure assets.
- **Build command:** `latexmk -gg -xelatex -interaction=nonstopmode -halt-on-error -outdir=build main.tex` (forced full regeneration so all cross-references settle).

## Verdict: PASS — Overleaf-ready

The document is technically clean and Overleaf-ready. The one open item — the left/binding margin — was resolved by the user on 2026-06-14 (see below). No blockers remain.

> **Margin decision (2026-06-14):** the user chose to **keep all four margins at 2.0 cm** (declining the guideline's 3.0 cm binding margin). This is now recorded as an intentional deviation — alongside the 12 pt body-size deviation — in `latex-migration-spec.md`, `formatting-checklist.md`, `latex-progress.md`, and `document-setup-summary.md`. No geometry change and no rebuild were required (the active config already used 2.0 cm).

## Automated integrity checks

| Check | Result |
|---|---|
| Clean compile exit code | **0** |
| Page count | **77 pages** (78 at QA time; the trailing `\blankpage` was removed on 2026-06-14 at user request) |
| Undefined citations/references | **0** |
| Overfull `\hbox` | **0** |
| Underfull `\vbox` (page-fill) | **0** |
| Missing characters (font coverage) | **0** |
| Unresolved cross-refs (`??`) in PDF | **0** |
| LaTeX/package warnings (excl. biblatex `-dm.cfg` optional config) | **0** |
| hyperref duplicate destinations | **0** |
| Leftover content markers (`PLACEHOLDER`/`NEEDS_*`/`migrationpending` usage/`TODO`/`FIXME`/raw `[@`) | **0** (only the unused `\migrationpending` *macro definition* remains in `config/commands.tex`; harmless) |

## Structure, numbering, cross-references

- **Front-matter order** (physical, from `main.tex` + `.toc`): Cover → Approval Page → Table of Contents → List of Figures → List of Tables → Author Contribution Statement → Acknowledgements → Definitions → List of Abbreviations → Abstract → body. Matches the user-approved T-094 arrangement.
- **TOC casing:** top-level entries uppercase; numbered chapters render `CHAPTER N. TITLE`; numbered child sections title case. `APPENDICES` (p. 52) and `REFERENCE LIST` (p. 62) render correctly (no `\MakeUppercase` `[]` artifact; kernel `LaTeX2e <2025-11-01>` supports the optional-argument form).
- **List of Figures:** 20 figures, continuous — 3.1–3.12, 4.1–4.4, 5.1–5.4. Every entry maps to an existing asset.
- **List of Tables:** 13 tables, continuous within chapters (2.1–2.4, 3.1–3.2, 5.1–5.7).
- **Cross-references:** 0 unresolved (`??`); 0 undefined citations.

## Figures (post-T-097)

- 21 `\includegraphics` targets verified to exist: 13 Mermaid **PDF vector** (valid `%PDF` header) + 8 PNG (cover logo, screenshots, reports, benchmarks).
- No `.svg` is included by LaTeX. Orphan `shared-runtime-context-flow.pdf` removed.

## Typography / layout (inherited from user-approved T-100)

- `report`, **12pt** (approved deviation from the 11pt guideline — "11pt read too small"), A4, `oneside`, XeLaTeX + Calibri/Carlito.
- `\onehalfspacing` (1.5), left-aligned body (`\RaggedRight`), 1.25cm first-line indent, paragraph spacing `0.6\baselineskip`, orphan/widow penalties `10000` + `\raggedbottom`.
- Captions positioned **bottom** (`position=bottom`).
- Bibliography: APA 7 (`biblatex style=apa sorting=nyt`), verified final in T-096.

## RESOLVED — left/binding margin (user kept 2.0 cm, 2026-06-14)

The active configuration and the project's own specification disagree:

| Source | Left / inside (binding) margin |
|---|---|
| **Active config** `config/packages.tex` (geometry) | **2.0 cm** (all four margins 2.0 cm) |
| `document-setup-summary.md` | 2.0 cm (matches active config; no "deviation" note) |
| `latex-migration-spec.md` (§ page geometry + §179) | **3.0 cm** left/inside, others 2.0 cm |
| `latex-migration/formatting-checklist.md` | **3.0 cm** left/inside, others 2.0 cm |
| `latex-migration/latex-progress.md` (Page setup PASS) | **3.0 cm** left/inside, others 2.0 cm |
| `progress-archive/2026-06-12.md` (T-100 record of the user formatting guideline) | **3.0 cm** left/inside, others 2.0 cm |
| User formatting guideline as recorded for T-100 | **3.0 cm** binding / 2.0 cm others |

The user-provided formatting guideline and four tracking files specify a **3.0 cm** left/inside binding margin (standard for a single-sided **bound** thesis so spine binding does not eat the text block). The active geometry uses **2.0 cm** on all sides, and only `document-setup-summary.md` was updated to match it. This looks like the geometry was never changed to the 3.0 cm binding margin the guideline requires — but it could also be a late, undocumented deliberate choice.

**This is a one-line fix once decided:** set `left=3.0cm` in `config/packages.tex` (keep right/top/bottom = 2.0 cm), rebuild, and re-sync `document-setup-summary.md`. Page count may shift slightly.

## Low-priority observation (no action unless user wants)

- **Abstract placement:** the Abstract sits last in the front matter (after Definitions and List of Abbreviations, immediately before Chapter 1). This was part of the user-approved T-094 arrangement; flagged only for awareness, as many templates place the Abstract earlier (just after Acknowledgements / before the ToC).

## Recommendation

T-098 QA gate **PASSED**. Binding margin resolved (user kept 2.0 cm; recorded as an intentional deviation). The LaTeX project is ready for **T-099 Overleaf Premium Git sync**. (User runs Turnitin externally.)
