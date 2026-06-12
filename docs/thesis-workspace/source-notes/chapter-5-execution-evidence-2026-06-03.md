# Chapter 5 Execution Evidence Source Note - 2026-06-03

## Purpose

This source note records verified execution evidence collected for Chapter 5. It is not a Chapter 5 draft. Use it only as an evidence source for evaluation claims after cross-checking the raw artifacts listed below.

## Full-Suite Execution Run

| Item | Evidence |
|---|---|
| Command | `npx playwright test` |
| Local run window | Started at `2026-06-03T16:08:33.8884807+07:00`; finished at `2026-06-03T16:09:04.3780466+07:00` |
| Playwright reported duration | `28.9s` in terminal output; `28.890057` seconds in JUnit XML |
| Project | `chromium` |
| Worker count | 4 workers reported by terminal output |
| Total tests | 18 |
| Passed | 18 |
| Failed | 0 |
| Skipped | 0 |
| Errors | 0 |
| Exit code | 0 |

Raw artifacts:

- `docs/thesis-workspace/assets/tables/execution-2026-06-03/playwright-test-run-2026-06-03.log`
- `docs/thesis-workspace/assets/tables/execution-2026-06-03/playwright-results-2026-06-03.xml`
- `docs/thesis-workspace/assets/tables/execution-2026-06-03/playwright-html-report-index-2026-06-03.html`
- `docs/thesis-workspace/assets/figures/playwright-html-report-overview.png`

## Suite-Level Breakdown

| Suite | Type | Tests | Failures | Skipped | Errors | Time |
|---|---|---:|---:|---:|---:|---:|
| `api/users/get-public-profile.spec.ts` | API | 3 | 0 | 0 | 0 | 4.466s |
| `api/users/get-statistics.spec.ts` | API | 4 | 0 | 0 | 0 | 8.782s |
| `api/users/list-collections.spec.ts` | API | 4 | 0 | 0 | 0 | 4.405s |
| `api/users/list-photos.spec.ts` | API | 4 | 0 | 0 | 0 | 2.254s |
| `ui/profile/bookmarked-photos.spec.ts` | UI | 1 | 0 | 0 | 0 | 13.963s |
| `ui/profile/update-profile.spec.ts` | UI | 1 | 0 | 0 | 0 | 22.199s |
| `ui/profile/view-profile.spec.ts` | UI | 1 | 0 | 0 | 0 | 15.399s |

Summary by test type:

| Type | Tests |
|---|---:|
| API | 15 |
| UI | 3 |
| Total | 18 |

## HTML Report Evidence

The Playwright HTML report was generated at `playwright-report/index.html` after the full-suite run and copied to:

- `docs/thesis-workspace/assets/tables/execution-2026-06-03/playwright-html-report-index-2026-06-03.html`

A screenshot of the report overview was captured and reviewed:

- `docs/thesis-workspace/assets/figures/playwright-html-report-overview.png`

Safety note: the report screenshot shows test names, paths, pass/fail/skipped counters, project name, and duration. It does not show credentials, access tokens, authorization headers, private account data, or private thesis-writing workflow content.

## Trace Evidence

The normal full-suite run did not produce trace artifacts because `playwright.config.ts` uses `trace: 'on-first-retry'`, and the full-suite run passed without retry.

To collect representative debugging evidence without replacing the full-suite result, a supplemental trace run was performed:

| Item | Evidence |
|---|---|
| Command | `npx playwright test tests/ui/profile/view-profile.spec.ts --trace on --reporter=line` |
| Local run window | Started at `2026-06-03T16:13:01.6435626+07:00`; finished at `2026-06-03T16:13:14.2529140+07:00` |
| Result | 1 passed |
| Duration | 10.9s |
| Exit code | 0 |
| Trace artifact | `docs/thesis-workspace/assets/tables/execution-2026-06-03/playwright-trace-view-profile-2026-06-03.zip` |

Trace-viewer screenshot status: a screenshot was attempted at `docs/thesis-workspace/assets/figures/playwright-trace-viewer-evidence.png`, but the captured image shows the trace viewer upload screen rather than a loaded trace. Do not use this screenshot as final visual evidence unless it is replaced by a loaded-trace screenshot.

## Evidence Boundaries

- The full-suite execution evidence supports claiming that this verified local run executed 18 tests and all 18 passed.
- The evidence supports the observed run duration, JUnit output, and HTML report availability for this run.
- The evidence does not prove long-term reliability, long-term flakiness behavior, production readiness, or performance stability across repeated runs.
- The supplemental trace run supports the availability of a trace artifact for one representative UI test. It should not be used as the full-suite execution result.
- Any claim about API rate limits should remain cautious unless a run artifact shows rate-limit behavior.
