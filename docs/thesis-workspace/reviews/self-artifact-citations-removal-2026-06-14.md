# Removal of Self-Referential Project Execution Artifacts from the Reference List

- **Reviewer / actor:** Claude
- **Date:** 2026-06-14
- **Trigger:** User questioned whether the project's own local execution artifacts belong in the Reference List of a scientific study.
- **Decision:** **Phương án A (user-approved)** — remove the artifacts from the bibliography and replace their in-text citations with internal cross-references.

## Problem
The bibliography contained five `@misc` entries with `author = {{Project execution artifact}}` and `note = {Local artifact: docs/thesis-workspace/...}`:
`execution_test_run_2026`, `execution_junit_results_2026`, `execution_html_report_2026`, `visual_playwright_html_report_2026` (uncited), `execution_trace_artifacts_2026`. Four were cited via `\autocite{}` in Chapters 4, 5, and 6 and therefore appeared in the Reference List.

## Why this is not appropriate (international standards)
1. **APA 7 recoverability principle.** A reference list contains only sources a reader can retrieve. These are local, non-public files (`.log`, `.xml`, `.zip`) with no URL/DOI; a reader/committee cannot retrieve them. Non-recoverable items do not belong in the reference list.
2. **Own research output ≠ external source.** A study's own generated results are *reported* in the Results section and placed as *supplementary material/appendix evidence*, then referred to by internal cross-reference — not cited as third-party literature.
3. **IEEE/ACM and thesis convention** treat internal evidence as figures/tables/appendices, not references.
4. **Project precedent.** The repository already removed `project_*` self-repository citations (commit "remove self-repository citations"); these `execution_*` entries are the same category and were residual.

This was a referencing-convention defect, not plagiarism or fabrication — the evidence is real; only its placement was wrong.

## Changes applied
- **`bibliography/references.bib`** — deleted all five self-artifact entries (`webdriverio_overview_2026` is now the last entry).
- **`chapters/04-implementation.tex`** (l.77) — removed two `\autocite{execution_*}` groups; the sentence already points to Chapter 5 and Appendix D.
- **`chapters/05-evaluation-and-discussion.tex`** (l.171) — replaced `\autocite{execution_test_run_2026,execution_junit_results_2026}` with "The full execution log and JUnit XML results are reproduced in Appendix~D."
- **`chapters/05-evaluation-and-discussion.tex`** (l.215) — replaced `\autocite{execution_trace_artifacts_2026}` with "the supplemental trace artifact is provided in Appendix~D."
- **`chapters/06-conclusion-and-future-work.tex`** (l.10) — replaced the grouped `\autocite{...}` with "as presented in \cref{ch:evaluation-and-discussion} and Appendix~D."

All immutable execution numbers (18 tests / 18 passed / 28.890057 s / 3 June 2026) are unchanged; only the citation mechanism changed.

## Verification
- `latexmk -xelatex` EXIT 0; **0 undefined citations/references** (no dangling cites to the removed keys); **0 overfull**; 74 pages.
- `build/main.bbl` contains **0** occurrences of "Project execution artifact" / `execution_*` — confirmed absent from the printed Reference List.

## Note for T-095 (Appendices)
The execution evidence is now routed to **Appendix D – Sample Reports and Trace Evidence**. When Codex converts Appendix D, it must present the execution log, JUnit XML, HTML report snapshot, and supplemental trace artifact there so the new "Appendix~D" pointers in Chapters 4–6 resolve to real content.

## Scope note
This amendment edited three previously user-approved chapters. The edits were explicitly authorized by the user (Phương án A) and are limited to citation mechanism + internal pointers; chapter prose meaning and evidence are otherwise unchanged. Chapters 4–6 remain final with this amendment.
