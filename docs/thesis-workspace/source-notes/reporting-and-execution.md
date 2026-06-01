# Reporting and Execution Source Note

## Purpose

This source note summarizes execution and reporting evidence from repository configuration. It does not record actual test results.

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

The repository root currently includes `results.xml`, `playwright-report/`, and `test-results/` in the working tree, but the thesis should not use them as final evaluation evidence until their source run, timestamp, and relevance are verified.

## Mermaid Diagram Rendering Evidence

`docs/thesis-workspace/scripts/render-diagrams.mjs` renders `.mmd` files from `docs/thesis-workspace/assets/diagrams/src/` to SVG files under `docs/thesis-workspace/assets/diagrams/out/` using `npx -y @mermaid-js/mermaid-cli`.

Preflight checks showed that `npx` is available, but local Mermaid CLI is not installed under `node_modules`. Rendering may therefore require package download/network access.

## Evidence Gaps

- Actual test execution output is required before claiming pass/fail counts.
- Actual execution time is required before discussing performance or duration.
- Verified report screenshots and trace artifacts are required before using them in Chapter 5 or appendices.
- Mermaid-rendered SVG outputs still need to be generated and reviewed before figure insertion.
