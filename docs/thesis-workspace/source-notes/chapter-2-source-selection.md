# Chapter 2 Source Selection Note

## Purpose

This note records T-059 source selection for Chapter 2 before drafting. It maps the official documentation and academic/professional sources selected for automation-testing foundations, framework design patterns, and Playwright capabilities.

Citation style: the final thesis uses **APA 7th edition**. Citation keys remain stable during Markdown drafting for traceability and must be formatted as APA 7th edition citations during final assembly.

## Superseding Scope Note - 2026-06-04

This note was created before the user-approved Chapter 2/3 restructuring. It remains useful as a source inventory, but it no longer defines the current Chapter 2 outline. Chapter 2 is now `Literature Review` and uses only theory/methodology sources for software testing fundamentals, manual/automated testing approaches, E2E methodology, test case design, automation framework concepts, and reporting methodology. Detailed Page Object Model, fixture/dependency injection, API service abstraction, DTO/data/cleanup, design-pattern, and reporting-configuration explanations now belong to Chapter 3.

## T-078 Refinement Note - 2026-06-05

Chapter 2 now requires direct source attribution for specialized definitions. The current source set includes ISTQB glossary entries for test automation, test automation framework, test case, test data preparation, and test report, plus the ISTQB CTAL-TAE v2.0 syllabus for generic test automation architecture and framework layering. Chapter 2 uses literature-based tables instead of external screenshots or framework-mechanism diagrams.

## T-079 Academic Source-Diversity Note - 2026-06-05

The Chapter 2 literature base was expanded so the Literature Review does not rely too heavily on ISTQB. ISTQB remains useful for terminology, but broader academic and professional sources now support testing fundamentals, automation suitability, end-to-end web testing, and test-script maintainability:

- `ammann_offutt_testing_2016` for structured software testing and test design foundations.
- `bertolino_testing_research_2007` for software-testing research framing and the broader role of testing in software quality.
- `garousi_mantyla_automation_2016` for when and what to automate, including automation suitability and maintenance trade-offs.
- `leotta_e2e_web_testing_2016` for automated end-to-end web testing approaches and dynamic web-application testing concerns.
- `garousi_felderer_test_scripts_2016` for treating automated test scripts as maintainable test code.

## Source Selection Summary

| Topic | Selected sources | Chapter 2 use |
|---|---|---|
| Software testing terminology and automation rationale | `istqb_ctfl_syllabus_2024`, `ammann_offutt_testing_2016`, `bertolino_testing_research_2007`, `garousi_mantyla_automation_2016` | Define testing and automation concepts through source attribution, explain regression and automation suitability, and avoid self-defined theory. |
| Playwright test runner and configuration | `playwright_docs_configuration_2026`, `playwright_docs_parallelism_2026`, `playwright_docs_retries_2026` | Explain test directory, projects, workers, retries, reporters, base URL, and trace configuration as tool capabilities. |
| Locators, auto-waiting, and assertions | `playwright_docs_locators_2026`, `playwright_docs_actionability_2026`, `playwright_docs_assertions_2026` | Explain locator reliability, actionability checks, web-first assertions, and flakiness-aware synchronization. |
| Page Object Model | `playwright_docs_pom_2026`, `selenium_page_object_models_2026`, `fowler_page_object_2013`, `leotta_page_object_2013` | Support a brief conceptual POM mention in Chapter 2 if needed; detailed POM workflow and project application belong to Chapter 3. |
| Fixtures and dependency injection | `playwright_docs_fixtures_2026`, `fowler_dependency_injection_2004` | Explain fixture-based object provisioning, test setup reuse, and the separation between object configuration and object use. |
| API testing and request context | `playwright_docs_api_testing_2026`, `playwright_docs_apirequestcontext_2026` | Explain API request contexts, setup/cleanup by API, HTTP method support, and UI/API combined strategy. |
| Service layer and DTOs | `fowler_service_layer_2003`, `fowler_data_transfer_object_2003` | Explain API service abstraction and structured request/response data boundaries. |
| Data-driven testing | `istqb_glossary_data_driven_testing_2026`, `microsoft_data_driven_testing_2021` | Explain separation of test logic from test inputs and expected results. |
| JSON schema validation | `json_schema_overview_2026` | Explain schema validation as a support capability for structured API response validation. |
| End-to-end web testing and flakiness risks | `leotta_e2e_web_testing_2016`, `habchi_flaky_tests_2022`, `tahir_flakiness_review_2023` | Support cautious discussion of E2E web testing, synchronization, isolation, external dependencies, and reliability boundaries. |
| Quality attributes | `iso_25010_2023` | Support the quality-attribute vocabulary used in Table 2.4 without claiming measured quality improvements. |
| OOP/SOLID-oriented design | `martin_solid_principles_2000` | Support careful explanation of encapsulation, single responsibility, composition, and dependency management. |
| Tool comparison | `selenium_webdriver_2026`, `cypress_browser_support_2026`, `puppeteer_overview_2026`, `webdriverio_overview_2026` | Support a concise comparison of automation tools without turning Chapter 2 into a tool survey. |
| Reporting and traceability | `playwright_docs_reporters_2026`, `playwright_docs_trace_viewer_2026` | Explain HTML report, JUnit XML, and trace viewer capabilities; actual project artifacts remain blocked until execution evidence is collected. |
| Test automation framework source of truth | `istqb_glossary_test_automation_framework_2026`, `istqb_ctal_tae_syllabus_2024`, `garousi_felderer_test_scripts_2016` | Define test automation framework, summarize generic framework capabilities, and connect framework usefulness to maintainable test-code engineering in Chapter 2 Table 2.4. |
| Test data preparation and reporting definitions | `istqb_glossary_test_data_preparation_2026`, `istqb_glossary_test_report_2026`, `istqb_glossary_data_driven_testing_2026` | Support Chapter 2 Section 2.7 on test data generation/preparation and reporting in automated testing. |

## Repository Evidence Boundary

Chapter 2 may use repository evidence to connect general concepts to this project, but it must not repeat Chapter 3 and Chapter 4 implementation detail at the same depth. Project-specific examples should be framed as design evidence from:

- `docs/thesis-workspace/source-notes/repository-overview.md`
- `docs/thesis-workspace/source-notes/framework-architecture.md`
- `docs/thesis-workspace/source-notes/ui-automation-layer.md`
- `docs/thesis-workspace/source-notes/api-automation-layer.md`
- `docs/thesis-workspace/source-notes/fixtures-and-workflows.md`
- `docs/thesis-workspace/source-notes/test-data-and-configuration.md`
- `docs/thesis-workspace/source-notes/reporting-and-execution.md`

## Drafting Boundaries

- Do not claim that the implemented tests pass until the execution-evidence gate is complete.
- Do not claim measured execution speed, pass rate, flakiness reduction, productivity improvement, or maintainability improvement.
- Do not claim broad JSON schema validation coverage from the existence of `APIUtils.verifyJsonSchema()` alone.
- Do not claim formal SOLID compliance; use "SOLID-oriented" or "aligned with selected SOLID principles" only where repository evidence supports the explanation.
- Do not expose secret values from `test-data/`, `.env`, or runtime configuration.
- Do not use the former Chapter 2 framework-mechanism figures in Chapter 2. F-11, F-16, F-12, F-13, F-14, and F-15 now belong to Chapter 3. F-01 and F-06 remain archived/excluded figures.
- Use citation keys consistently during Markdown drafting; final citations and references must be formatted according to APA 7th edition.
