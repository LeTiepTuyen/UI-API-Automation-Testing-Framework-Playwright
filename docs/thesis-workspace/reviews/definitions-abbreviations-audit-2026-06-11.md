# Definitions & Abbreviations Audit — T-032 (2026-06-11)

Reviewer: Claude (independent evidence/citation audit)
Task: T-032 — Draft Definitions and List of Abbreviations.
Owner of work: Codex. Verdict: **PASS** (well-sourced, accurate). One minor optional cleanup noted (unused abbreviations).

## Files reviewed

- `front-matter/definitions.md`
- `front-matter/abbreviations.md`

## Independent verification (re-run, not taken from Codex's report)

| Check | Method | Result |
|---|---|---|
| Distinct citation keys in `definitions.md` | grep deduped | **23** |
| Definition keys missing from `references.bib` | `comm -23` | **0** |
| Definition keys not cited in any chapter (orphan references) | `comm -23` vs chapter usage | **0** — every definition key is already cited in the chapters, so no new reference entries are introduced |
| `NEEDS_SOURCE` remaining in definitions | grep | none (all 14 definitions carry source attribution) |
| Definition coverage vs outline | manual | All 14 recommended terms present (Software Testing, Test Automation, E2E, UI Testing, API Testing, Playwright, POM, Fixture, Test Data Management, CI, Flaky Test, Trace Viewer, HTML Report, JUnit Report) |
| Abbreviation coverage vs outline | manual | All 16 recommended entries present; clean table format |
| Source automation code modified | git scope | No |

## Quality notes (definitions)

- Source attribution is appropriate per concept (ISTQB/academic for theory; official Playwright docs for tool capabilities; repository config for the JUnit-output claim).
- "Continuous Integration" is correctly framed as a future-work environment with an explicit "no verified CI/CD pipeline is claimed" boundary — consistent with the thesis evidence rules.
- No fabricated metrics; no self-defined specialized concepts.

## Minor finding (optional cleanup; not a Codex defect)

Four abbreviations appear **only** in `abbreviations.md` and are never used (in acronym form) anywhere in the chapters, appendices, or other front matter:

| Abbreviation | Usage in thesis body | Note |
|---|---|---|
| REST | 0 | Chapters say "API"/"public API"; the REST acronym is not used. |
| SUT | 0 | Chapters spell out "system under test" rather than using "SUT". |
| TDM | 0 | "Test Data Management" is spelled out; the TDM acronym is not used. |
| VCS | 0 | Not referenced anywhere in the thesis. |

CLI is used (Appendix A: "Playwright CLI"), so CLI should stay. All other listed abbreviations (AI, API, CI/CD, DOM, DTO, E2E, HTML, HTTP, JSON, POM, UI) appear in the body.

This stems from the approved outline's recommended abbreviation list, so it is faithful to the plan rather than an error. A List of Abbreviations conventionally contains only abbreviations that actually appear in the document. **Decision for the user:**
- Option A (stricter): remove REST, SUT, TDM, VCS (and keep CLI).
- Option B (comprehensive standard list): keep all; optionally introduce the SUT acronym at first mention of "system under test" since that term is used frequently.

## Resolution (2026-06-11)

User chose **Option A**. Claude removed REST, SUT, TDM, and VCS from `abbreviations.md` (no chapter edits). The list now holds 12 entries (AI, API, CI/CD, CLI, DOM, DTO, E2E, HTML, HTTP, JSON, POM, UI), all of which are verified to appear in the thesis body. Definitions were unchanged.

## Conclusion

T-032 meets its core requirement: all definitions are source-attributed and key-verified (23/23, 0 missing, 0 orphan), and the abbreviation list is now strictly limited to abbreviations used in the document. No rework required before proceeding to T-036 (Abstract).
