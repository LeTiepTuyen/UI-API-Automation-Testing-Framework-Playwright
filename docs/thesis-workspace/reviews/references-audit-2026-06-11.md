# References Audit — T-083 (2026-06-11)

Reviewer: Claude (independent citation/evidence audit)
Task: T-083 — Draft the References section (APA 7th) and verify citation-key coverage.
Owner of work: Codex. Verdict: **PASS** (accurate and complete; minor optional polish deferred to final APA pass).

## Files reviewed

- `docs/thesis-workspace/references/references.md` (new APA 7-style reference list)
- `docs/thesis-workspace/references/references.bib`
- `docs/thesis-workspace/chapters/chapter-1..6` (citation-key usage)
- `docs/thesis-workspace/citation-register.md`

## Independent verification (re-run, not taken from Codex's report)

| Check | Method | Result |
|---|---|---|
| Distinct citation keys used in Ch.1–6 | `grep -rhoE '@[A-Za-z0-9_]+' chapters/` deduped | **72** real keys (a 73rd match, `playwright`, is the `@playwright/test` package name, not a citation) |
| Used keys missing from `references.bib` | `comm -23` used vs bib keys | **0** |
| Entries in `references.md` | count of APA paragraphs | **72** (1:1 with used keys) |
| Unused `.bib` entries excluded from the reference list | `comm -13` used vs bib | 4 excluded: `leotta_page_object_2013`, `puppeteer_overview_2026`, `visual_playwright_html_report_2026`, `webdriverio_overview_2026` |
| Source automation code modified | git scope | No |

## APA 7 quality spot-check

- Alphabetical ordering correct; same-author/same-year disambiguation suffixes (a, b, c …) applied correctly (e.g., Microsoft 2026a–m, Le T. T. 2026a–s, ISTQB Glossary 2026a–f, Cypress.io 2026a–f, Selenium Project 2026a–e, Fowler 2003a–b, Project execution artifact 2026a–d).
- Reference list correctly contains only cited works (unused `.bib` entries excluded), per APA practice.
- In-text `[@key]` markers intentionally retained in the approved chapter drafts for traceability; conversion to APA author-date in-text form is deferred to final assembly / Word or LaTeX migration, consistent with the `citation-register.md` drafting note.

## Minor optional fixes (non-blocking; defer to final APA polish pass)

1. Preserve diacritics in author names: `references.md` currently renders "Mon, M., & Panczyk, B." — should be **Moń, M., & Pańczyk, B.** Consider **Mäntylä** for Garousi & Mäntylä as well.
2. Optional consistency: attribute "Project execution artifact (2026a–d)" to the author (Le, T. T.) for uniformity with the other repository sources; "Microsoft" as the Playwright-docs author is valid but "Playwright" is an alternative.

## Conclusion

T-083 meets its core requirement: complete and accurate key coverage (72/72, 0 missing, 0 spurious), correct exclusion of uncited sources, and valid APA 7 styling. The two notes above are cosmetic and belong to the final APA finalization. No rework required before proceeding to T-060 (Appendices).
