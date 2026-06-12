# Appendix A: Installation and Execution Guide

This appendix records the practical setup and execution commands used by the implemented Playwright and TypeScript automation framework. It is intended to support reproducibility of the project environment without exposing runtime credentials or private account data.

## A.1 Environment Prerequisites

The framework requires a local Node.js environment capable of installing the dependencies listed in `package.json`. The main framework dependencies are Playwright, `@playwright/test`, TypeScript-related Node typings, `dotenv`, and Ajv. Runtime environment variables are loaded from `config/.env` by `playwright.config.ts`; sensitive values such as access tokens, client identifiers, passwords, or account data must not be copied into the thesis.

## A.2 Dependency Installation

The following commands install project dependencies and Playwright browser binaries:

```bash
npm install
npx playwright install
```

The project currently uses direct Playwright CLI commands rather than npm script aliases because `package.json` does not define custom scripts.

## A.3 Common Test Execution Commands

The full test suite can be executed with:

```bash
npx playwright test
```

For visual observation during debugging, the suite can be run in headed mode:

```bash
npx playwright test --headed
```

For step-by-step debugging, Playwright debug mode can be invoked with:

```bash
npx playwright test --debug
```

After execution, the Playwright HTML report can be opened with:

```bash
npx playwright show-report
```

## A.4 Execution Configuration Summary

The framework configuration is defined in `playwright.config.ts`. The test directory is `./tests`, and the active project is `chromium` using Playwright's Desktop Chrome device settings. The configuration enables full parallel execution, a global timeout of ten minutes, an action timeout of ten seconds, CI-only retries, CI-only single-worker execution, HTML reporting, and JUnit XML output to `results.xml`.

Trace collection is configured as `trace: 'on-first-retry'`. Therefore, a passing full-suite execution without retries is not expected to produce trace artifacts. Supplemental trace capture requires an explicit trace command, as documented in Appendix D.

## A.5 Evidence Boundary

The commands above describe how the framework is installed and executed. They do not, by themselves, establish pass rates, reliability, or performance. Verified execution results must be taken only from the recorded evidence artifacts listed in Appendix D and discussed in Chapter 5.
