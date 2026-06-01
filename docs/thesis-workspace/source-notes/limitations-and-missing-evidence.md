# Limitations and Missing Evidence Source Note

## Purpose

This source note lists evidence gaps and limitations that must be resolved or explicitly marked before thesis drafting and finalization.

## Current Evidence Limitations

The repository provides strong source evidence for framework structure and representative UI/API automation design. However, several thesis claims are not yet supported by execution or external-source evidence.

## Missing Execution Evidence

The following must not be claimed until verified:

- final number of executed tests;
- pass, fail, skipped, or flaky counts;
- execution duration;
- retry behavior observed during execution;
- generated HTML report content;
- generated JUnit XML results from a known run;
- generated trace files and trace viewer evidence;
- screenshots for reports, traces, or UI states.

Required evidence should be collected from an actual run of `npx playwright test` and relevant report inspection commands.

## Missing Literature and Documentation Evidence

Chapter 2 requires external sources before drafting. Missing source categories include:

- official Playwright documentation for test runner, fixtures, locators, API testing, traces, and reporters;
- professional or academic testing sources for test automation concepts;
- sources for test pyramid discussion;
- sources for E2E flakiness and reliability;
- sources for API testing theory and validation practices.

## Scope Limitations Supported by Current Evidence

The available repository evidence supports selected Unsplash UI and API scenarios. It does not support claims of complete product coverage, full security testing, performance testing, accessibility testing, visual regression testing, or production-grade CI/CD execution.

## Environment and Data Limitations

The framework depends on environment variables and static user data:

- UI base URL from `BASE_URL`;
- API base URL from `API_BASE_URL`;
- Unsplash public API access via token or client ID/access key;
- static account data from `test-data/user-info.json`.

The thesis should not disclose credential values or token values.

## External Dependency Risks

Because the target system is Unsplash, test execution may be affected by:

- UI changes in the external web application;
- public API behavior changes;
- API rate limits;
- authentication or access-token validity;
- network availability.

These risks should be discussed as limitations only when grounded in source code, execution evidence, or official documentation.

## Diagram and Figure Gaps

Initial Mermaid sources exist under `docs/thesis-workspace/assets/diagrams/src/`, but rendered outputs have not been verified. Figures should not be marked thesis-ready until rendered outputs are reviewed for readability and accuracy.
