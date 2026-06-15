# Thesis Progress Log

This file is the active state snapshot for thesis work. It is not the full historical log; historical entries are archived by date under `docs/thesis-workspace/progress-archive/`.

---

## Current status summary

| Area | Status | Notes |
|---|---|---|
| Thesis writing | MARKDOWN_THESIS_ASSEMBLED | Chapters 1-6 approved/final in Markdown. References, appendices, front matter, and final `thesis.md` assembly are complete. Approval-page defense committee members remain deferred until the thesis defense. |
| Next approval gate | NONE — LaTeX migration complete | T-091→T-099 all done. Thesis compiles on Overleaf (77 pages). Remaining is optional/user-driven: supervisor review on Overleaf, then Turnitin (external), then final submission. |
| Next thesis task | (User-driven) supervisor review + Turnitin | Share the Overleaf project with the supervisor (Reviewer role) for feedback; user runs Turnitin externally on the PDF. No pending Claude/Codex task. |
| Task board | CURRENT | T-093/T-094/T-095/T-096 DONE. **T-097 figures user-approved (2026-06-14)** and **T-098 final QA gate PASS (2026-06-14)**. Only T-099 Overleaf sync remains (needs user action). T-030 remains IN_PROGRESS only because committee members are deferred. |
| Outline | UPDATED_2026_06_11 | Chapter 6 uses 6.1 Discussion, 6.2 Conclusion, 6.3 Limitations, and 6.4 Future Work. Abbreviation list now 14 entries (XML/URL added 2026-06-14). |
| Evidence and citations | UPDATED_2026_06_14 | Front-matter Definitions citations converted to APA `\autocite{}`; no self-repository `project_*` citations or raw Markdown citation markers remain. |
| Visual and diagram evidence | UPDATED_FOR_CH5_LATEX | Four Chapter 5 PNG figures were copied under `docs/thesis-latex/figures/reports/` and inserted in LaTeX; short LoF captions added while preserving full figure captions. |
| Test execution evidence | UNCHANGED | Verified 2026-06-03 full-suite run: 18 tests, 18 passed, 0 failed, 0 skipped, 0 errors, 28.890057s. Do not claim new metrics without new execution evidence. |
| Progress tracking | COMPACTED_2026_06_14 | Older daily history is archived through 2026-06-13. |
| LaTeX/Overleaf migration | COMPLETE — LIVE ON OVERLEAF | **77 pages**, compiles successfully on Overleaf (XeLaTeX + Biber, Calibri→Carlito fallback). Full chain done: chapters/front matter/appendices approved, bibliography verified, figures migrated, T-098 QA PASS, blank page + junk removed, margins resolved (2.0 cm). **T-099 done via GitHub Sync:** Overleaf project `6a2ebaad5239feb373495b8e` ↔ private GitHub repo `LeTiepTuyen/Thesis---UI-and-API-Automation-Framework-Playwright-`; local mirror at `D:\DevTools\Projects\thesis-overleaf-sync`. Send the **PDF** (not Overleaf DOCX export — lossy) to the supervisor; for true Calibri use the local Windows build. |

---

## Progress archive index

Historical progress entries are archived by date so this file remains fast to read at the start of each thesis session. Read archive files only when older context is needed for traceability, review, or debugging.

| Date | Archive file | Entries |
|---|---|---:|
| 2026-05-31 | `progress-archive/2026-05-31.md` | 1 |
| 2026-06-01 | `progress-archive/2026-06-01.md` | 9 |
| 2026-06-02 | `progress-archive/2026-06-02.md` | 12 |
| 2026-06-03 | `progress-archive/2026-06-03.md` | 15 |
| 2026-06-04 | `progress-archive/2026-06-04.md` | 8 |
| 2026-06-05 | `progress-archive/2026-06-05.md` | 2 |
| 2026-06-08 | `progress-archive/2026-06-08.md` | 3 |
| 2026-06-10 | `progress-archive/2026-06-10.md` | 1 |
| 2026-06-11 | `progress-archive/2026-06-11.md` | 6 |
| 2026-06-12 | `progress-archive/2026-06-12.md` | 12 |
| 2026-06-13 | `progress-archive/2026-06-13.md` | 2 |

---

## Current-day progress entry

### 2026-06-15 - LaTeX revision round R1: 12 user feedback items (Claude) — USER-APPROVED + SYNCED TO OVERLEAF

**User approved 2026-06-15.** Synced to Overleaf via GitHub Sync: mirror `D:\DevTools\Projects\thesis-overleaf-sync` updated, committed (`4d4ce7c`), and pushed to `main` of the private repo `LeTiepTuyen/Thesis---UI-and-API-Automation-Framework-Playwright-`. User pulls into Overleaf (Menu → GitHub → Pull) and recompiles. Final local build verified: **77 pages, 0 undefined, 0 overfull**.

**Completed (all 12 items + follow-ups)**

1. **Roman page numbers uppercase** in front matter / ToC: `\pagenumbering{roman}` → `Roman` (I, V, VI … in `main.tex`).
2. **Level-1 headings unified**: all `\chapter`/`\chapter*` headings now uppercase and one larger size (16/19 pt) via titlesec `\MakeUppercase` before-code (numbered + numberless) in `config/formatting.tex`. Auto headings (`\contentsname`, `\listfigurename`, `\listtablename`) set uppercase directly because their `\@mkboth` blocks the before-code. Now consistent: CHAPTER N TITLE, ABSTRACT, APPROVAL PAGE, TABLE OF CONTENTS, LIST OF FIGURES, REFERENCES, APPENDICES.
3. **Fig 3.5 short LoF caption** added (`[Page Object Model application workflow.]`) to fix the LoF page-number column overflow.
4. **Table-intro rewording** (avoid mirroring the caption / "Table x.x summarizes…"): ch2 ×4, ch3 ×2, ch5 ×5 reworded so the reference sits mid/late in the sentence.
5. **Back-matter reorder + rename**: `Reference List` → **REFERENCES**, and **REFERENCES now precedes APPENDICES** (`main.tex`).
6. **Tables 5.2 & 5.3 descriptions** clarified with a linking sentence so both are introduced clearly without caption duplication.
7. **Page-47 orphan fixed**: Table 5.7 moved to after both surrounding paragraphs so the manual-vs-automation text is contiguous (`05-evaluation-and-discussion.tex`).
8. **Fig 5.4 short LoF caption** shortened to "Playwright Trace Viewer inspecting a UI test trace."
9. **Appendix references hyperlinked**: 4 plain `Appendix~D` → `\hyperref[app:sample-reports]{Appendix~D}` (ch4, ch5 ×2, ch6).
10. **"Chapter N" capitalization**: verified already satisfied (no lowercase `chapter <n>` anywhere).
11. **APA 7 retrieval dates removed**: 41 `urldate` fields stripped from `references.bib` (removes "Retrieved June 3, 2026, from"; dated stable sources do not need a retrieval date in APA 7).
12. **Cover page**: added `figures/logos/danang-university-logo.png` (The University of Danang) to the left of the VNUK logo, and a thin A4 border frame around the text area (`frontmatter/cover.tex`).

**Verification:** forced clean rebuild (`latexmk -gg -xelatex`) PASS — 0 undefined, 0 overfull `\hbox`, no non-biblatex warnings. Spot-rendered cover, ToC (×3), LoF, ABSTRACT, CHAPTER 1, and the ch5 ending — all 12 items visually confirmed.

**Follow-up fixes (same round, also pending approval):**
- **Logo balance (re feedback 12):** the Da Nang logo PNG had huge transparent padding making it tiny next to VNUK. Trimmed the alpha bbox (1920×1080 → 497×504, tight square) and set both logos to equal height (2.7 cm), vertically centred in `m{}` columns. Now balanced.
- **Ch5 Table 5.2 wedge:** the capability-comparison paragraph (sec 5.3.1) was split across a page with the large Table 5.2 floated into the middle of the sentence. Pinned Table 5.2 with `[H]` (float package) so it stays directly under its intro and the following paragraph stays contiguous. Page count is now **77** (the pin leaves some whitespace at the foot of the criteria-intro page — an accepted trade-off for contiguous prose).
- **Figure 4.2 conceptual fix (F-05):** removed the misplaced "Chapter 5 evidence gate" node (pink "risk" style) from `playwright-reporting-pipeline.mmd` — it injected thesis-document structure into a Chapter 4 implementation pipeline. Pipeline now ends at "Reporting and evidence artifacts" (green output node); labels refined to `results.xml` and "Trace on first retry". Regenerated the PDF (LaTeX), SVG (out/), and Word-export PNG via Mermaid CLI. Chapter-5 linkage remains in prose only.

**Next:** Overleaf sync DONE (push `4d4ce7c`). Remaining optional/user-driven: (a) user pulls into Overleaf + recompiles to confirm; (b) regenerate the Word `.docx` (`docs/thesis-workspace/word-export/`) from the revised LaTeX when a fresh DOCX is needed; (c) supervisor review + Turnitin (external, user-run).

### 2026-06-14 - Word (.docx) export of the final thesis (Claude + user)

**Completed**

- Produced a Word version for supervisor review / university submission: `docs/thesis-workspace/word-export/Thesis_LeTiepTuyen.docx`.
- **Source decision:** converted from the **final LaTeX** (`docs/thesis-latex/`, same source as the approved 77-page PDF) via **Pandoc 3.10**, NOT from the older Markdown (which had drifted — old long title, old Ch3 figure numbering incl. the removed shared-runtime figure, and self-artifact `execution_*` citations still present). This keeps the Word content faithful to the approved thesis.
- **Pipeline:** rasterised the 13 Mermaid figure PDFs → PNG (Word cannot embed PDF images) with `pdftoppm`; temp `.tex` copy (`word-export/build-src/`) with figure paths flattened and `.pdf`→`.png`; `pandoc main.tex --from latex --to docx --citeproc --bibliography=references.bib --csl=apa.csl --metadata reference-section-title="Reference List"`. User installed pandoc and downloaded `apa.csl` (saved at `docs/thesis-workspace/apa.csl`).
- **Result:** all front matter + 6 chapters + appendices + reference list; 21 figures embedded as PNG; **APA 7 in-text `(Author, Year)` and APA 7 reference list** confirmed. Reproduce steps in `word-export/README.md`.
- **Known:** LaTeX auto-structures (ToC/LoF/LoT) don't transfer — rebuild in Word (one click each; headings carry Word Heading styles). Cover/approval render as clean text to tidy in Word. APA 7 CSL omits "Retrieved … from" for dated web sources (correct APA 7; differs cosmetically from the biblatex PDF wording).

### 2026-06-14 - T-099 COMPLETE: thesis live on Overleaf via GitHub Sync (Claude + user)

**Completed**

- **User route:** instead of direct `git.overleaf.com`, the user used Overleaf's **GitHub Sync** (new 2026 UI) — created the Overleaf project (`6a2ebaad5239feb373495b8e`) and linked it to a GitHub repo. They set Compiler = XeLaTeX and Main document = main.tex.
- **Security:** the user pasted their Overleaf Git token in chat → advised immediate revoke (not needed with GitHub Sync). The GitHub repo was **Public**; user agreed to Private → Claude ran `gh repo edit --visibility private` (protects the thesis + personal signature before defense).
- **Push (Claude, via authenticated `gh`):** cloned the repo to `D:\DevTools\Projects\thesis-overleaf-sync`, replaced the Overleaf import stub `main.tex` with the full project (48 files: `report`-class main.tex + config/frontmatter/chapters/appendices/bibliography/figures + Overleaf-safe `latexmkrc` without `out_dir` + `.gitignore`), committed `8ebeef8`, pushed to `main`. Verified on GitHub: private, real project present.
- **Compile:** user pulled into Overleaf and **compiled successfully — 77 pages**, Calibri→Carlito fallback (expected; Carlito is metric-compatible).
- **Guidance given:** Overleaf PDF embeds Carlito; for true Calibri send the local Windows build PDF; **do not** use Overleaf's lossy DOCX export for review — send the PDF; share the Overleaf project with the supervisor using the **Reviewer** role (comment-only) with link sharing off.

**Next**

- No pending Claude/Codex task. User-driven from here: supervisor review on Overleaf → Turnitin (external) → final submission. Future edits: edit `docs/thesis-latex/` → sync to `D:\DevTools\Projects\thesis-overleaf-sync` → push → Pull in Overleaf.

### 2026-06-14 - T-099 prep + pre-push cleanup: blank page removed, junk files deleted (Claude)

**Completed (Claude)**

- **Acknowledgements finalized:** rewrote to a longer, warmer three-paragraph text (supervisor Dr. Le Dinh Dung, CSE Department + VNUK Institute / University of Danang, and peers); added a date block ("Da Nang, June 10, 2026", left) on the same baseline row as the right-aligned "Author" / signature / name block; inserted the user's **transparent-background signature** (`figures/signature/signature.png`, trimmed via PIL to the alpha bbox) centered above the printed name. Parity kept in the Markdown source.
- **Abstract:** removed the trailing `Keywords:` line (not standard for a formal academic abstract), in `.tex` + `.md`.
- **Trailing blank page removed:** deleted the final `\blankpage` in `main.tex`; the PDF is now **77 pages** (was 78) and the last page carries Reference List content, not a blank.
- **Pre-push junk cleanup (user-authorized):** deleted nine stale top-level build artifacts (`main.aux/.bcf/.lof/.log/.lot/.out/.pdf/.run.xml/.toc`, none git-tracked, superseded by `build/`) and the empty `tables/` directory. `docs/thesis-latex/` top level now holds only real source (`main.tex`, `latexmkrc`, `.gitignore`, `README.md`, `document-setup-summary.md`) plus the source dirs.
- **T-099 repo side prepared:** wrote the full `latex-migration/overleaf-sync-guide.md` (create project → XeLaTeX → Git token → clone → export → push → verify → ongoing pull/compile/push protocol + troubleshooting); completed `scripts/export-overleaf.ps1` (clean copy of `main.tex` + config/frontmatter/chapters/appendices/bibliography/figures, excludes build/scripts/artifacts, writes an Overleaf-safe `latexmkrc` without `out_dir` and a `.gitignore`); added `docs/thesis-latex/.gitignore`. Validated the export file selection (~2.3 MB, no artifact leak, signature included). Final clean rebuild after all edits: EXIT 0, **77 pages**, 0 undefined, 0 overfull.

**Next**

- **T-099 (needs user):** create the Overleaf Premium project, set Compiler = XeLaTeX, generate a Git auth token, and provide the `https://git.overleaf.com/<PROJECT_ID>` URL. Then run the export + push and verify the Overleaf compile. User runs Turnitin externally.

### 2026-06-14 - T-097 figures approved + T-098 final QA gate PASS (Claude)

**Completed (Claude)**

- **T-097 figure migration — independent review PASS + user-approved.** Verified Codex's work against the actual build rather than the report: all 21 `\includegraphics` targets exist (13 Mermaid **PDF vector** with valid `%PDF` headers + 8 PNG screenshots/reports/logo); no `.svg` is included by LaTeX; LoF = 20 figures with continuous numbering (3.1–3.12, 4.1–4.4, 5.1–5.4) matching the includes; figure-register aligned; `shared-runtime-context-flow` correctly excluded. Deleted its orphan unused PDF (`figures/architecture/shared-runtime-context-flow.pdf`) per user approval to keep the figures tree clean.
- **T-098 final LaTeX/Overleaf readiness QA gate — PASS.** Forced clean rebuild (`latexmk -gg -xelatex`): EXIT 0, **78 pages**, 0 undefined, 0 overfull `\hbox`, 0 underfull `\vbox`, 0 missing chars, 0 unresolved `??`, 0 non-biblatex warnings, 0 hyperref duplicate destinations, no content markers (only the unused `\migrationpending` *macro definition* remains; harmless). Front-matter order matches approved T-094; TOC casing correct; `APPENDICES` (p. 52) and `REFERENCE LIST` (p. 62) render correctly; captions bottom; LoT 13 tables continuous; APA 7 bibliography verified (T-096). Review saved: `reviews/latex-readiness-review.md`.
- **Binding-margin discrepancy surfaced and resolved.** QA found the active geometry uses 2.0 cm on all sides while the formatting guideline + four tracking files specified a 3.0 cm left/binding margin. Asked the user; **user chose to keep all margins 2.0 cm** (intentional deviation, like the 12 pt deviation). Re-synced `latex-migration-spec.md`, `formatting-checklist.md`, `latex-progress.md`, and `document-setup-summary.md` to 2.0 cm with a deviation note. No geometry change/rebuild needed (config already 2.0 cm).

**Next**

- **T-099 Overleaf Premium Git sync** is the only remaining task and needs the user: create the Overleaf Premium project + provide the Git remote, then Codex/Claude push the LaTeX project and document the pull/compile/push protocol. User runs Turnitin externally.

### 2026-06-14 - Approval Page co-advisor row removed (Codex)

**Completed**

- Removed the `Thesis Co-Advisor: None` row from the LaTeX Approval Page because the project is completed by one student without a co-advisor.
- Removed the same co-advisor line from `front-matter/approval-page.md` and assembled `thesis.md` for source parity.
- Rebuilt `docs/thesis-latex/build/main.pdf`: **78 pages**, 0 undefined citations/references. PDF text extraction confirms the Approval Page now lists the thesis advisor, committee members, and department chair only.

**Next**

- Continue with T-098 final LaTeX/Overleaf readiness QA.

### 2026-06-14 - T-097 figure migration completed (Codex)

**Completed**

- Confirmed from `tasks.md`, `progress.md`, and `next-chat-handoff.md` that T-097 was the next task before T-098.
- Implemented `docs/thesis-latex/scripts/convert-svg-to-pdf.ps1` as the reproducible Mermaid-to-PDF vector conversion script.
- Regenerated 13 active Mermaid diagram PDFs with Mermaid CLI `--pdfFit` under `docs/thesis-latex/figures/architecture/` and `docs/thesis-latex/figures/workflows/`.
- Kept screenshot, report, trace-viewer, and author-created benchmark figures as PNG assets.
- Updated `figure-register.md` to match the final LaTeX List of Figures and marked the redundant `shared-runtime-context-flow` detail diagram as excluded from the final LaTeX thesis.
- Rebuilt `docs/thesis-latex/build/main.pdf`: **78 pages**, 0 undefined citations/references; no `.svg` graphics are included by LaTeX.
- Saved `reviews/figure-migration-review-2026-06-14.md`.

**Next**

- Run T-098 final LaTeX/Overleaf readiness QA.

### 2026-06-14 - Table of Contents feedback applied (Codex)

**Completed**

- Applied user-requested ToC consistency pass in the LaTeX build.
- Numbered chapter ToC entries now render as `CHAPTER N. TITLE`; numbered child sections such as `1.1`, `2.1`, and `3.x` remain title case; subsection/subsubsection children remain title case.
- Uppercased front-matter parent entries and `REFERENCE LIST` in the ToC while keeping displayed page headings title case where appropriate.
- Rebuilt `docs/thesis-latex/build/main.pdf`: **78 pages**, 0 undefined citations/references. Layout extraction confirms entries such as `CHAPTER 4. IMPLEMENTATION`, `3.4 API Automation Design`, and title-case appendix child entries.

**Next**

- Continue with T-098 final QA sweep, then T-099 Overleaf sync.

### 2026-06-14 - T-095 appendices Claude review PASS + two layout feedbacks applied (Claude)

**Completed (Claude)**

- **Layout feedback 1 — removed wasted whitespace between appendix pages.** `\appendixitem` (`config/commands.tex`) no longer issues `\clearpage`; appendices now flow continuously with `\addvspace` separation and `\needspace{5\baselineskip}` (added `\usepackage{needspace}`) so headings are never stranded. The APPENDICES divider page now carries Appendix A directly after the appendix list instead of leaving a near-empty page.
- **Layout feedback 2 — Appendix B page-55 gap.** Compacted the B.1 UI Scenario Matrix cells (Preconditions / Main actions / Main evidence) in both `appendix-b-test-scenarios.tex` and the Markdown source (parity kept); the table now sits directly under the B heading, eliminating the large blank gap.
- **Extra tidy — Appendix C.** Merged the two split `tabularx` blocks into one `longtable` so the source map flows continuously across the page break (removed the ~30% foot gap).
- **Path/file column de-risked (user decision).** User flagged that long file paths bloat the appendix tables and pin the thesis to a docs layout that is not finalized/not fully public. Applied the recommended scope to `.tex` + Markdown: Appendix C dropped the "Representative files or folders" column (now Concept | Source area | Role) and generalized the docs/workflow rows; Appendix D references evidence by ID + file name only (no `docs/thesis-workspace/…` prefixes) with a "location may change" note; Appendix E "Representative path" → "Representative artifact" keeping stable `.github/…` refs and generalizing docs paths; Appendix B keeps stable `tests/…spec.ts` paths. Also removed a residual `.claude/skills/` leak still present in the Appendix C Markdown source. Only stable source-code folders + committed `.github/` config remain as concrete paths.
- **T-095 review PASS.** Verified all five appendices vs approved Markdown + PDF: parity holds; immutable 2026-06-03 evidence exact (18/18, `28.890057` s); safety fix confirmed (Appendix C/E list only the four automation skills, no `.claude/skills/` directory, no `.agents/skills/`); cross-refs use `\hyperref`; marker/safety grep clean. Saved `reviews/appendices-latex-review-2026-06-14.md`.
- Rebuilt `latexmk -xelatex`: EXIT 0, **78 pages** (was 80), 0 undefined, 0 overfull.

**Next**

- User approves T-095 appendices. Then T-096 final bibliography re-verify, T-097 figure migration, T-098 QA gate, T-099 Overleaf sync.

### 2026-06-14 - T-095 appendices LaTeX conversion completed by Codex; awaiting Claude review

**Completed**

- Confirmed from `next-chat-handoff.md`, `tasks.md`, and `progress.md` that the next actionable task was **T-095 appendices conversion** after T-094 front matter approval.
- Converted Appendices A-E from approved Markdown sources into `docs/thesis-latex/appendices/*.tex` while preserving the grouped `\appendixitem{X}{Title}` structure.
- Removed all `\migrationpending` markers and did not reintroduce `\chapter` or `\appendix` in appendix files.
- Preserved Appendix D as the execution-evidence appendix: 18 tests, 18 passed, 0 failed, 0 skipped, 0 errors, 28.890057 seconds, with registered HTML report, JUnit XML, terminal log, and supplemental trace references.
- Applied the safety fix from the pre-conversion review: Appendix C/E list only the four automation skills (`code-review`, `design-test-case`, `playwright-mcp`, `script-generation`) and do not point to `.claude/skills/` or `.agents/skills/` directories.
- Rebuilt with `docs/thesis-latex/scripts/build.ps1` outside the sandbox after the known MiKTeX/Perl sandbox issue. Build PASS; `docs/thesis-latex/build/main.pdf` rebuilt to 80 pages; final log has 0 undefined citations/references.
- Resolved new appendix path/table overfull warnings with breakable `\path{}` and split tables. Remaining overfull warnings are pre-existing/global LoF/LoT/Chapter 5/bibliography cosmetics.
- Marker scan found no `migrationpending`, raw `[@...]`, `NEEDS_`, `PLACEHOLDER`, `project_`, self-artifact citation keys, `.agents/skills`, or `.claude/skills/` directory references in appendices/log.
- Updated `tasks.md`, `conversion-register.md`, `source-map.md`, `latex-progress.md`, `compile-issue-log.md`, `next-chat-handoff.md`, and this progress file.

**Next**

- Claude reviews the converted appendices against the approved Markdown sources and built PDF, saves `reviews/appendices-latex-review-2026-06-14.md` or equivalent, then asks the user for T-095 approval.

### 2026-06-14 - Two presentation feedbacks applied (APPENDICES grouping + Reference List spacing); T-094 front matter reviewed PASS (Claude)

**Completed (Claude)**

- **Feedback 1 - APPENDICES grouped under one TOC entry (international scientific style).** Previously the five appendices each produced a separate top-level chapter entry in the Table of Contents. Restructured so they appear under a single bold "APPENDICES" entry (parallel to "Reference List"), each appendix listed as an indented section-level entry. Implementation: new `\appendixitem{X}{Title}` macro in `config/commands.tex`; `main.tex` now prints one `\chapter*{APPENDICES}` divider that also lists the five appendices, then `\input`s the five files; the five stub `.tex` files switched from `\chapter{...}` to `\appendixitem{...}` (labels preserved); removed the now-unused `\appendix` switch. Because appendices use `\section*`, a later Appendix D cross-reference should use `\hyperref[app:sample-reports]{Appendix~D}` rather than `\cref`.
- **Feedback 2 - Reference List spacing tidied.** Added bibliography layout settings in `config/formatting.tex`: `\bibfont` set to `\singlespacing` (the global 1.5 spacing made multi-line references look loose/uneven), `\bibitemsep` = 0.6 baselineskip for an even gap between entries, `\bibparsep` = 0, and `\bibhang` = 1.5em for an APA hanging indent. Reference List now reads as a compact, evenly spaced block.
- **T-094 front matter review (PASS).** Verified all five converted front-matter files sentence-for-sentence against the approved Markdown sources: abstract (immutable 2026-06-03 evidence intact), acknowledgements, author-contribution, abbreviations (uncaptioned `tabularx`, no extra LoT entry), definitions (all 14 terms, every `[@a; @b]` correctly â†’ `\autocite{a,b}`, 0 undefined). Academic-tone / AI-tone / plagiarism check PASS; definitions are attributed (no self-definition); Copilot framed only as a project feature.
- **Completeness fix during review:** the List of Abbreviations was missing `XML` (used Ã—18, e.g. "JUnit XML output") and `URL` (used Ã—8) while parallel JSON/HTML/HTTP were listed. Added both to `frontmatter/abbreviations.tex` and source `front-matter/abbreviations.md` (now 14 entries, alphabetical).
- Saved review artifact `reviews/frontmatter-latex-review-2026-06-14.md`.
- Rebuilt with `latexmk -xelatex`: EXIT 0, **73 pages, 0 undefined, 0 overfull**.

**Completed (Claude) - bibliography integrity fix**

- **Removed five self-referential `Project execution artifact` entries from the Reference List** (`execution_test_run_2026`, `execution_junit_results_2026`, `execution_html_report_2026`, `visual_playwright_html_report_2026`, `execution_trace_artifacts_2026`). User flagged that citing the project's own non-public local artifacts (`.log`/`.xml`/`.zip` under `docs/thesis-workspace/`) is not valid in a scientific study. Confirmed against APA 7 recoverability + thesis/IEEE convention; chose user-approved **PhÆ°Æ¡ng Ã¡n A**.
- Deleted the five entries from `bibliography/references.bib` and replaced the in-text `\autocite{execution_*}` in `chapters/04`, `chapters/05` (two places), and `chapters/06` with internal cross-references to Chapter 5 and **Appendix D**. Immutable evidence numbers unchanged; only the citation mechanism changed. Rebuild EXIT 0, 0 undefined, 0 overfull, 74 pages; `build/main.bbl` confirmed free of the removed keys. Decision artifact: `reviews/self-artifact-citations-removal-2026-06-14.md`.

**Completed (Claude) - Reference List APA 7 formatting fix**

- User flagged that documentation references rendered as `Cypress.io. (2026a). â€¦ [Accessed 2026-06-03]` with no URL. Verified the cause: 41 doc entries were `@misc` with `howpublished`+`note={Accessed}`, but `biblatex-apa` does not print `howpublished` for `@misc`, so **all 41 URLs were missing** and `[Accessed]` is not APA 7.
- Converted the 41 documentation entries to `@online` with `url`+`urldate` (kept `@article`/`@book`/`@inproceedings` and the one URL-less `@misc{martin_solid_principles_2000}`). Rendering now correct APA 7: `Cypress.io. (2026a). Launching browsers in cypress. Retrieved June 3, 2026, from https://...`. Verified via `pdftotext`. Build EXIT 0, 0 undefined, 0 overfull, 74 pages.
- Per APA 7, **kept a single alphabetical Reference List** (no grouping by source type). Decision artifact: `reviews/reference-list-apa-format-fix-2026-06-14.md`.

**Next**

- User approves T-094 front matter. Then Codex converts T-095 appendices into the new grouped `\appendixitem` structure. **Appendix D must now hold the actual execution evidence** (log, JUnit XML, HTML report snapshot, supplemental trace) so the new "Appendix~D" pointers in Chapters 4-6 resolve to real content.

### 2026-06-14 - T-094 front matter LaTeX conversion completed by Codex; awaiting review

**Completed**

- Confirmed from `next-chat-handoff.md`, `tasks.md`, and `progress.md` that the next actionable task was **T-094 front matter content conversion**, because Chapter 6 LaTeX had already been reviewed and user-approved on 2026-06-13.
- Converted the five remaining front-matter content stubs from approved Markdown sources:
  - `docs/thesis-latex/frontmatter/abstract.tex`
  - `docs/thesis-latex/frontmatter/acknowledgements.tex`
  - `docs/thesis-latex/frontmatter/abbreviations.tex`
  - `docs/thesis-latex/frontmatter/definitions.tex`
  - `docs/thesis-latex/frontmatter/author-contribution.tex`
- Left `docs/thesis-latex/frontmatter/cover.tex` and `docs/thesis-latex/frontmatter/approval.tex` unchanged, as required by the handoff.
- Converted Definitions citations to APA `\autocite{}` commands and rendered Abbreviations as an uncaptioned `booktabs`/`tabularx` list so it does not add an extra List of Tables entry.
- Built the project with `docs/thesis-latex/scripts/build.ps1` outside the sandbox after the known MiKTeX/Perl sandbox issue. Build PASS; `docs/thesis-latex/build/main.pdf` rebuilt to 72 pages. Final log has 0 undefined citations/references.
- Marker scan found no `migrationpending`, raw `[@...]`, `NEEDS_`, `PLACEHOLDER`, or `project_` markers in the converted front matter and build log.
- Resolved a new Definitions layout warning by replacing the `description` list with bold term paragraphs and a local `sloppypar`; no new front-matter overfull warning remains.
- Updated `tasks.md`, `conversion-register.md`, `source-map.md`, `latex-progress.md`, `compile-issue-log.md`, `next-chat-handoff.md`, and this progress file.

**Next**

- Claude reviews the converted front matter against the approved Markdown sources and built PDF, saves a review artifact under `docs/thesis-workspace/reviews/`, and asks the user for T-094 approval before appendices conversion begins.

## Next recommended task

**T-098 final LaTeX/Overleaf readiness QA.** T-097 figure migration is complete. Next task is the full PDF QA gate across front matter, numbering, LoF/LoT, citations, cross-references, layout warnings, marker scans, and Overleaf readiness; after acceptance, proceed to T-099 Overleaf sync.

---

## How this file should be updated

Each thesis work session must update `tasks.md` and `progress.md` together. Keep `progress.md` compact by using this structure only:

1. current status summary;
2. progress archive index;
3. current-day entry or latest handoff;
4. next recommended task;
5. update rules and thesis-content exclusion rule.

Before ending a thesis work session, move progress entries from previous dates into `progress-archive/YYYY-MM-DD.md` and update the archive index. Do not keep multiple days of detailed history in `progress.md`. Read archive files only when older context is necessary.

## Thesis content exclusion rule

The thesis must not mention the private writing workflow, private agents, private skills, or personal AI-assisted writing process. These harness files are personal productivity infrastructure only.
