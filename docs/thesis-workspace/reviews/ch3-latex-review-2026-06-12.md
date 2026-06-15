# Chapter 3 LaTeX Conversion Review (T-093)

- **Reviewer:** Claude (independent gate)
- **Date:** 2026-06-12
- **Source:** `docs/thesis-workspace/chapters/chapter-3-system-analysis-and-design.md`
- **Target:** `docs/thesis-latex/chapters/03-framework-design.tex`
- **Verdict:** PASS — figure readability issue found and fixed; ready for user approval.

## 1. Content parity (PASS)
- Title parity: Markdown H1 "Chapter 3: Framework Design" → `\chapter{Framework Design}`.
- 8 sections (3.1–3.8) with full subsection/subsubsection hierarchy preserved.
- Prose is verbatim-equivalent; no meaning drift. Path references rendered with `\path{}`/`\code{}`.
- 2 tables converted (Table 3.1 concept-responsibility map, Table 3.2 quality-attributes map) with `tabularx`/`Y`/`\tablefont`/booktabs, bottom captions, labels after captions.
- 13 figures present (`includegraphics` count 13/13) numbered Figure 3.1–3.13.

## 2. Citations (PASS)
- 18 distinct citation keys; all 18 verified present in `references.bib`.
- APA forms correct: `\textcite{}` for narrative (Fowler ×3, Garousi & Felderer), `\autocite{}` for parenthetical.
- No self-repository (`project_*_2026`) keys. 0 undefined in the final build log.

## 3. Safety — Section 3.8 Copilot Agentic-AI (PASS)
- Section 3.8 frames the workflow only as a project automation-testing support feature, not a thesis-writing workflow.
- The path mention `docs/agentic-workflow/`, `.github/`, `.claude/` exists in the **approved Markdown source** (line 199) — preserved by conversion, not newly introduced. No private thesis-writing harness (agents/skills/prompts/dual-agent process) is exposed.

## 4. Figure readability — issue found and FIXED (Claude)
- **User feedback:** several left-to-right diagrams (e.g. Figure 3.2, 3.3, 3.6) rendered too small to read.
- **Root cause:** the `flowchart LR` Mermaid sources produced extreme aspect-ratio PDFs (POM application workflow 1816×89 pt = 20:1; POM concept 1569×106 = 15:1; API pipeline 1308×115 = 11:1). With `\includegraphics[width=\textwidth]` (textwidth 455 pt) the content shrank to ~25–35%, dropping diagram height to ~0.8–1.4 cm — effectively unreadable in print.
- **Fix (user chose "re-author to vertical TB + re-render"):**
  - Re-authored 8 linear diagrams `flowchart LR`→`flowchart TB` in `assets/diagrams/src/*.mmd`: page-object-model-concept, page-object-model-application-workflow, fixture-dependency-injection-flow, shared-runtime-context-flow, api-service-abstraction-pipeline, test-data-dto-cleanup-strategy, copilot-agentic-automation-workflow, framework-architecture.
  - Re-rendered SVG masters into `assets/diagrams/out/` and cropped PDFs via `npx @mermaid-js/mermaid-cli ... --pdfFit` into `figures/architecture|workflows/`.
  - Set all 11 Chapter 3 diagram `\includegraphics` to `[width=\textwidth,height=0.8\textheight,keepaspectratio]` so tall figures bind on height and wide ones bind on width; nothing overflows.
- **Result:** new dimensions are portrait/balanced (e.g. POM concept 225×767, POM application 219×839, framework architecture 600×410). Rebuild PASS, 49 pages, 0 undefined, 0 overfull `\vbox`/`\hbox` in the body.
- **Remaining (acceptable):** 3 inherently-wide breadth diagrams — concept map (3.8) 1904×657, UI execution flow (3.9) 1449×525, API execution flow (3.10) 1359×525 — stay full-width at ~5 cm tall. These are breadth-driven (many parallel nodes), not direction-driven, so a TB swap would not help without restructuring approved diagram content. Flagged for the user's visual call; a landscape (`sidewaysfigure`) option remains available if desired.

## 5. Build verification (PASS)
- `latexmk -xelatex` (Git-for-Windows Perl on PATH): PASS, 49 pages.
- 0 undefined citations/references; no overfull `\vbox`/`\hbox` in the body.
- One minor List-of-Figures `Overfull \hbox` (3.71 pt) from the long Figure 3.13 caption — cosmetic, non-blocking.
- PDF text scan: no `project_`, raw `[@...]`, raw keys, `NEEDS_`, or `migrationpending` (the only `placeholder` hit is the Playwright locator term in prose).

## 6. Content refinement during review (2026-06-13, user-directed)
- **Removed redundant Figure 3.5** (`shared-runtime-context-flow`): it duplicated Figure 3.4 (fixture DI flow), whose caption already covers shared runtime context. §3.3.2 prose re-pointed to Figure 3.4. Chapter 3 now has **12 figures** (auto-renumbered 3.1-3.12) — an intentional, documented divergence from the frozen Markdown source (13 figures).
- **Figure 3.1 vs 3.8 analysis:** confirmed complementary, not duplicate — 3.1 is the structural/layered architecture overview (with the SUT boundary) correct for §3.1; 3.8 is a design-concept→quality-attribute map correct for §3.6 (its quality nodes map 1:1 to Table 3.2). User confirmed keeping both and not swapping. No node reduction (would desync from Table 3.2).
- **Landscape enlargement:** the concept map (3.8→now 3.7) and the two sequence diagrams (UI/API execution flows) are placed on full landscape pages via `rotating`/`sidewaysfigure`, using the page height as width for much larger, readable rendering.
- Rebuild PASS: 50 pages, 0 undefined, 0 body overfull, 12 LoF entries.

## 7. Content refinement round 2 (2026-06-13, user-directed)
- **Figure 3.1 (layered architecture) redesigned.** Expert finding: the original diagram laid the six layers side by side (inner `direction LR`), reading as a left-to-right flow rather than a layered stack, which did not match the caption "Layered architecture". Redesigned as a genuine vertical tier stack — test specification layer → abstraction layer (Page Objects/workflows | API services) → framework core layer (fixtures | core utilities) → system under test — with data/configuration and reporting shown as cross-cutting concerns. New PDF is balanced (582x651 pt) instead of the old 1128x360 wide strip; nodes still map to the layers named in the §3.1 prose and Table 3.1.
- **Landscape policy decision.** Landscape (`sidewaysfigure`/`rotating`, or `pdflscape`) for a single oversized figure is accepted by international venues (IEEE, ACM, Springer, Elsevier) and standard LaTeX practice; convention is one figure per landscape page with the caption rotated with it. Retained for the breadth-driven concept map only (now Fig 3.9).
- **UI/API execution-flow figures reverted to portrait.** These two sequence diagrams are reverted from `sidewaysfigure` to portrait `figure` at `[width=\textwidth,height=0.8\textheight,keepaspectratio]` per user preference; full-width portrait is legible enough for them, leaving only one landscape page in the chapter.
- **SUT screenshots repositioned.** The two Unsplash context screenshots were physically at the very end of the chapter while first referenced in §3.1; moved up to immediately follow their first reference in §3.1 (now Fig 3.2-3.3) so figure placement follows the standard "near first mention" rule.
- Rebuild PASS: 49 pages, 0 undefined, only the two pre-existing cosmetic overfull `\hbox` (LoF caption + Chapter 2), 12 LoF entries, one landscape page.

## Gate status
- One-chapter-per-gate respected: Chapter 4 not converted; blocked pending user approval of Chapter 3.
- Figure orientation convention (prefer vertical/TB or balanced layouts; avoid wide LR linear flows; size with `keepaspectratio`) should carry into Chapters 4–6 figure work.
