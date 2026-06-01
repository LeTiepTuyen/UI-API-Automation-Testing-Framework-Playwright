# Playwright Configuration Source Note

## Purpose

This source note summarizes the Playwright configuration evidence in `playwright.config.ts` and related dependency evidence from `package.json`.

## Dependency Evidence

`package.json` lists:

- `@playwright/test` as a development dependency.
- `playwright` as a runtime dependency.
- `dotenv` for loading environment variables.
- `ajv` for JSON schema validation support.

The package file does not currently define npm scripts. The thesis should therefore avoid claiming that named npm scripts exist unless they are added later.

## Environment Loading

`playwright.config.ts` loads environment variables from `config/.env` using:

- `dotenv.config({ path: path.resolve(__dirname, 'config/.env') })`

The configuration uses `process.env.BASE_URL` for Playwright `baseURL`. API URL construction is handled separately by `utils/api-url.ts`, which uses `process.env.API_BASE_URL`.

## Test Directory and Project Configuration

`playwright.config.ts` sets:

- `testDir: './tests'`
- one configured project named `chromium`
- Chromium desktop device settings through `devices['Desktop Chrome']`

This supports describing the current framework as configured for Chromium execution through Playwright.

## Execution Behavior

The configuration defines:

- Global timeout: `10 * 60 * 1000`.
- `fullyParallel: true`.
- `forbidOnly: !!process.env.CI`.
- CI retries: `process.env.CI ? 2 : 0`.
- CI workers: `process.env.CI ? 1 : undefined`.
- Action timeout: `10 * 1000`.

These settings may be described as configuration evidence. They are not evidence of actual runtime performance or reliability.

## Reporting and Trace Configuration

The configuration enables:

- Playwright HTML reporter through `['html']`.
- JUnit reporter through `['junit', { outputFile: 'results.xml' }]`.
- Trace collection on first retry through `trace: 'on-first-retry'`.

The thesis may state that the framework is configured to produce these artifacts. It must not claim that a specific report or trace was generated until execution evidence is collected and verified.

## Evidence Gaps

- No execution result can be inferred from configuration alone.
- No pass rate, execution time, retry count, or trace availability should be claimed before running the test suite.
