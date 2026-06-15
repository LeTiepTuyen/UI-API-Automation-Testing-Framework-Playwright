# Chapter 2 Deep Review — AI-tone / Integrity / Polish (T-093)

- **Reviewer:** Claude (independent gate)
- **Date:** 2026-06-13
- **Checklist:** `reviews/ai-tone-integrity-checklist.md`
- **Source:** `docs/thesis-workspace/chapters/chapter-2-literature-review.md`
- **Target:** `docs/thesis-latex/chapters/02-literature-review.tex`
- **Verdict:** Clean and well-attributed. Minor voice-consistency (B1) and typographic (D3) polish only. No plagiarism red flags.
- (Supersedes/extends the 2026-06-12 conversion review `ch2-latex-review-2026-06-12.md` with the AI-tone/plagiarism lens.)

## Parity (PASS)
7 sections (2.1–2.7), 4 tables. Prose verbatim-equivalent. Citation conversion is correct and actually improves APA form: narrative author mentions became `\textcite{}` (Ammann & Offutt, Bertolino, Garousi & Mantyla, Leotta, Garousi & Felderer, Fowler) and parenthetical support became `\autocite{}`. The Markdown grouped cite `[@ammann…; @istqb…]` was correctly split into a narrative `\textcite` + parenthetical `\autocite`. 0 undefined.

## C. Plagiarism / integrity — focus area for a literature review (PASS)
- **C1 attribution:** every external concept/definition is explicitly attributed — "Ammann and Offutt describe…", "the ISTQB Glossary defines… as…", "Garousi and Felderer argue…", "Fowler describes…". No self-defined testing concepts.
- **C2 close-paraphrase:** definitions (verification/validation, test automation, test case, framework, test data preparation, test report) are reworded into the author's own phrasing and are attributed by name, not copied verbatim; no quotation-without-quotes. The repeated "The ISTQB Glossary defines X as…" construction is safe (explicit attributed definition) — a stylistic note only, normal for a foundations section.
- **C3:** no `project_*_2026` self-citations.
- **C4 strength:** the two synthesized tables (2.3, 2.4) carry explicit integrity hedges — "author-synthesized summary… drawing on [cites]" and "author-derived inference from the cited literature rather than a direct quotation from any single source." This pre-empts the main plagiarism risk of a lit-review table and is a notable strength.
- **C5:** no execution metrics asserted here (correct; evidence is Chapter 5).
- (Author runs Turnitin separately for the official similarity score; this is a heuristic pass.)

## A. AI-tone (PASS — clean)
- A1 repetitive caveats: not present; the cross-reference signposts ("discussed in Chapter 3/5", "presents reporting only as a methodology concern") are scope markers, not the Chapter-4 template hedge.
- A2 meta-filler: "This chapter introduces POM…", "this chapter presents reporting…" — light, acceptable signposting.
- A4 buzzwords / A5 hyperbole: none.

## B. Voice consistency (MINOR)
- **B1-LOW.** Three "this thesis" self-references (2.1 "In this thesis…", 2.3 "treated in this thesis…", 2.5 "guidance for this thesis") standardized to "this study" to match the Chapter 1 polish and keep one consistent voice. (Note: "a central thesis position" in 2.1 uses "thesis" = argument, not the document — left unchanged.)

## D. Mechanics
- **D1 spelling:** American throughout ("behavior", "judgment"); no British forms. PASS.
- **D2 APA forms:** correct. PASS.
- **D3-LOW:** literal "Chapter 3"/"Chapter 5" cross-references given non-breaking spaces ("Chapter~3"/"Chapter~5") to match the Chapter 4 style and prevent a line break before the number. (Chapter numbers are fixed 1–6, so a hard number is acceptable; `\cref` is not required.)
- **D4 build:** clean (see rebuild).

## E. Structure (PASS)
Section order is logical (fundamentals → manual vs automated → modern web → E2E → test-case design → framework concepts → test data & reporting). No forced lead-in added (the chapter opens naturally at 2.1, consistent with Chapter 1).

## Outcome
Applied B1 (3 edits) and D3 (3 edits). Plagiarism/AI-tone pass clean. Rebuild PASS, 0 undefined, no Chapter 2 body overfull beyond the previously accepted 5.0471 pt box. Chapter 2 is approval-ready.
