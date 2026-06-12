# Appendix D: Sample Reports and Trace Evidence

This appendix records the execution artifacts that support the evaluation discussion in Chapter 5. The primary execution result is the verified local full-suite run collected on 3 June 2026. The supplemental trace artifact is included only to illustrate Playwright debugging support and must not be interpreted as an additional full-suite execution result.

## D.1 Verified Full-Suite Run

| Item | Evidence |
|---|---|
| Command | `npx playwright test` |
| Local run window | `2026-06-03T16:08:33.8884807+07:00` to `2026-06-03T16:09:04.3780466+07:00` |
| Playwright project | `chromium` |
| Worker count | 4 workers reported in the terminal output |
| Total tests | 18 |
| Passed | 18 |
| Failed | 0 |
| Skipped | 0 |
| Errors | 0 |
| JUnit duration | 28.890057 seconds |
| Exit code | 0 |

## D.2 Suite-Level Breakdown

| Specification | Type | Tests | Failures | Skipped | Errors | Time |
|---|---|---:|---:|---:|---:|---:|
| `api/users/get-public-profile.spec.ts` | API | 3 | 0 | 0 | 0 | 4.466s |
| `api/users/get-statistics.spec.ts` | API | 4 | 0 | 0 | 0 | 8.782s |
| `api/users/list-collections.spec.ts` | API | 4 | 0 | 0 | 0 | 4.405s |
| `api/users/list-photos.spec.ts` | API | 4 | 0 | 0 | 0 | 2.254s |
| `ui/profile/bookmarked-photos.spec.ts` | UI | 1 | 0 | 0 | 0 | 13.963s |
| `ui/profile/update-profile.spec.ts` | UI | 1 | 0 | 0 | 0 | 22.199s |
| `ui/profile/view-profile.spec.ts` | UI | 1 | 0 | 0 | 0 | 15.399s |

## D.3 Registered Evidence Artifacts

Verified `2026-06-03` evidence artifacts:

- V-04: Playwright HTML report overview from the verified full-suite execution run.
  - `docs/thesis-workspace/assets/figures/playwright-html-report-overview.png`
- V-05: sanitized Playwright Trace Viewer screenshot from a supplemental representative UI trace artifact.
  - `docs/thesis-workspace/assets/figures/playwright-trace-viewer-loaded-trace-sanitized.png`
  - Trace artifact: `docs/thesis-workspace/assets/tables/execution-2026-06-03/playwright-trace-view-profile-2026-06-03.zip`
- V-06: terminal execution output and JUnit `results.xml` evidence from the verified full-suite run.
  - `docs/thesis-workspace/assets/tables/execution-2026-06-03/playwright-test-run-2026-06-03.log`
  - `docs/thesis-workspace/assets/tables/execution-2026-06-03/playwright-results-2026-06-03.xml`

Primary run context source:

- `docs/thesis-workspace/source-notes/chapter-5-execution-evidence-2026-06-03.md`

## D.4 Trace Evidence Boundary

The normal full-suite run did not produce trace artifacts because `playwright.config.ts` uses `trace: 'on-first-retry'`, and all eighteen tests passed without retry. A supplemental trace run was executed only to demonstrate Playwright's trace-inspection support:

```bash
npx playwright test tests/ui/profile/view-profile.spec.ts --trace on --reporter=line
```

The supplemental trace run produced one passing representative UI test trace. It should be cited only as debugging-support evidence, not as a replacement for the verified full-suite result.

## D.5 Safety and Thesis-Use Notes

The HTML report screenshot is used in Chapter 5 as Figure 5.1. The sanitized Trace Viewer screenshot is used in Chapter 5 as Figure 5.4 to demonstrate available debugging artifact inspection. Detailed terminal and JUnit XML artifacts remain file-based evidence rather than additional screenshots unless a later final-formatting pass requires an appendix image.

No appendix screenshot or report artifact should expose credentials, access tokens, authorization headers, private account data, or unrelated personal workflow content. If final Word or LaTeX formatting requires additional screenshots, they must be captured from the registered artifacts above and reviewed again before insertion.
