# Reporting and Execution Source Note

## Purpose

This source note summarizes execution and reporting evidence from repository configuration and records the current verified execution-evidence boundary. Detailed run evidence is stored in the dated Chapter 5 execution evidence source note.

## Execution Commands

`README.md` documents common commands:

- `npm install`
- `npx playwright test`
- `npx playwright test --headed`
- `npx playwright test --debug`
- `npx playwright show-report`

These commands are documentation evidence for how the framework is intended to be installed and run. They are not execution evidence by themselves.

## Playwright Execution Configuration

`playwright.config.ts` configures:

- test directory: `./tests`;
- Chromium project using `devices['Desktop Chrome']`;
- full parallel execution;
- CI-specific retries and worker count;
- global and action timeouts.

## Reporting Configuration

`playwright.config.ts` configures:

- HTML report output through the Playwright HTML reporter.
- JUnit XML output through `['junit', { outputFile: 'results.xml' }]`.
- trace collection through `trace: 'on-first-retry'`.

The repository root includes `results.xml`, `playwright-report/`, and `test-results/` in the working tree. A verified local execution run was collected on `2026-06-03` and copied into thesis evidence artifacts. Use the dated source note and copied artifacts rather than relying on any later overwritten root-level report files.

Verified `2026-06-03` full-suite evidence:

- source note: `docs/thesis-workspace/source-notes/chapter-5-execution-evidence-2026-06-03.md`;
- JUnit XML snapshot: `docs/thesis-workspace/assets/tables/execution-2026-06-03/playwright-results-2026-06-03.xml`;
- HTML report snapshot: `docs/thesis-workspace/assets/tables/execution-2026-06-03/playwright-html-report-index-2026-06-03.html`;
- execution log snapshot: `docs/thesis-workspace/assets/tables/execution-2026-06-03/playwright-test-run-2026-06-03.log`;
- HTML report screenshot: `docs/thesis-workspace/assets/figures/playwright-html-report-overview.png`.

The verified full-suite run executed 18 tests with 18 passed, 0 failed, 0 skipped, 0 errors, and 28.890057 seconds recorded in JUnit XML.

Trace evidence boundary:

- The full-suite run did not produce traces because `trace: 'on-first-retry'` only records traces on retry, and the run passed without retry.
- A supplemental representative trace run was collected for `tests/ui/profile/view-profile.spec.ts` with `--trace on --reporter=line`.
- The trace zip is stored at `docs/thesis-workspace/assets/tables/execution-2026-06-03/playwright-trace-view-profile-2026-06-03.zip`.
- The current trace-viewer screenshot should not be inserted because it shows the upload screen rather than a loaded trace.

## Mermaid Diagram Rendering Evidence

`docs/thesis-workspace/scripts/render-diagrams.mjs` renders `.mmd` files from `docs/thesis-workspace/assets/diagrams/src/` to SVG files under `docs/thesis-workspace/assets/diagrams/out/` using `npx -y @mermaid-js/mermaid-cli`.

Preflight checks showed that `npx` is available, but local Mermaid CLI is not installed under `node_modules`. Rendering may therefore require package download/network access.

## Evidence Gaps

- The first verified full-suite execution output is now available for Chapter 5.
- The first verified execution duration is now available for Chapter 5, but it supports only this local run and not long-term performance claims.
- Verified HTML report evidence is available.
- A supplemental trace zip is available, but a loaded trace-viewer screenshot still needs capture if a screenshot is required.
- Mermaid-rendered SVG outputs still need to be generated and reviewed before figure insertion.
