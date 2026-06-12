# Chapter 5 Tool Comparison Source Selection

## Purpose

This source note records the source basis and evidence boundaries for the revised Chapter 5 tool-selection and comparative-analysis sections. It supports a project-specific comparison of Playwright, Cypress, and Selenium before the chapter evaluates the implemented framework execution evidence.

## Sample Thesis Boundary

The thesis by Truong Duong is used only as a structural reference for organizing a tool-selection section around primary requirements, secondary requirements, and a weighted scoring table. Its wording, project-specific HMI requirements, Bamboo/Bitbucket/Docker context, and numerical framework scores must not be copied into this thesis. This project requires its own criteria because the implemented repository is a Playwright and TypeScript framework for selected Unsplash UI and API tests.

## Official Documentation Sources

| Source key | Tool | Use in Chapter 5 |
|---|---|---|
| `playwright_docs_configuration_2026` | Playwright | Test runner configuration, projects, reporters, retries, workers, and trace settings. |
| `playwright_docs_locators_2026` | Playwright | Locator model and selector reliability discussion. |
| `playwright_docs_actionability_2026` | Playwright | Auto-waiting and actionability checks for dynamic UI interaction. |
| `playwright_docs_fixtures_2026` | Playwright | Fixture-based object provisioning and isolated test setup. |
| `playwright_docs_api_testing_2026` | Playwright | API request support and UI/API workflow combination. |
| `playwright_docs_reporters_2026` | Playwright | HTML and JUnit reporting capability. |
| `playwright_docs_trace_viewer_2026` | Playwright | Trace viewer and debugging artifact capability. |
| `playwright_docs_parallelism_2026` | Playwright | Parallel workers and test isolation expectations. |
| `playwright_docs_retries_2026` | Playwright | Retry configuration and flaky/passed/failed categorization. |
| `cypress_browser_support_2026` | Cypress | Browser support baseline, including Chrome, Firefox, Edge, and experimental WebKit support. |
| `cypress_docs_retryability_2026` | Cypress | Command retryability and assertion retry behavior. |
| `cypress_docs_request_2026` | Cypress | `cy.request()` HTTP request capability. |
| `cypress_docs_screenshots_videos_2026` | Cypress | Screenshot and video artifact capability. |
| `cypress_docs_parallelization_2026` | Cypress | Cypress Cloud multi-machine parallelization and CI orchestration. |
| `cypress_docs_reporters_2026` | Cypress | Built-in and custom reporter support. |
| `selenium_webdriver_2026` | Selenium | WebDriver baseline for browser automation. |
| `selenium_docs_browsers_2026` | Selenium | Browser support baseline. |
| `selenium_docs_waits_2026` | Selenium | Explicit/implicit wait behavior and dynamic-UI synchronization risk. |
| `selenium_docs_grid_2026` | Selenium | Selenium Grid for remote and parallel/distributed execution. |
| `selenium_page_object_models_2026` | Selenium | Page Object Model and maintainability guidance. |

## Academic Source

Mon and Panczyk (2025) provide a recent academic comparison of Playwright, Cypress, and Selenium. Their study executed test cases, reviewed tool documentation, and compared execution time, CPU usage, RAM usage, and tool characteristics. Their results support a cautious statement that Playwright showed strong effectiveness and flexibility in most of their tested cases, while the final tool choice should remain project-specific. Chapter 5 now uses an author-created mean-summary chart adapted from the source tables rather than copying the source figures.

Source key: `mon_panczyk_tool_comparison_2025`.

Almabruk et al. (2025) provide an external reliability comparison of Selenium and Playwright using uptime and ROCOF metrics. Chapter 5 uses this source only as reliability context and records the hardware/methodology boundary explicitly.

Source key: `almabruk_selenium_playwright_reliability_2025`.

Use boundary:

- This source can support the claim that comparative tool evaluation is an accepted academic method for automation framework selection.
- This source can support external context about Playwright, Cypress, and Selenium capabilities and empirical findings.
- Its numeric results must not be presented as this project's own benchmark.
- This thesis should not copy the source's tables; it may summarize relevant findings and cite the article.
- External reliability metrics from Almabruk et al. (2025) must not be treated as a universal Selenium-versus-Playwright conclusion because the study context, hardware assignments, and target website differ from this project.

## Project-Specific Weighted Rubric

The revised Chapter 5 weighted scoring table is an evaluative rubric for this project, not an empirical benchmark. Scores represent project fit on a 1-to-5 scale:

| Score | Meaning |
|---:|---|
| 1 | Very limited fit for this project criterion. |
| 2 | Limited fit; would need substantial additional tooling or process. |
| 3 | Adequate fit with moderate additional integration. |
| 4 | Strong fit with some trade-offs. |
| 5 | Excellent fit for the implemented project context. |

Weights are assigned from the project needs described in Chapters 2 to 4:

- combined UI and API automation;
- TypeScript and Playwright Test runner usage;
- Page Object Model, fixtures, workflows, API services, DTOs, and data handling;
- reporting, traceability, and debugging artifacts;
- maintainability and repeatable regression execution;
- CI-readiness without claiming verified CI execution.

## Evidence Boundaries

- The Chapter 5 comparison can justify why Playwright is the strongest project fit among the compared tools.
- It must not claim that Playwright is universally superior for every team or every application.
- It must not claim this project measured Cypress or Selenium performance locally.
- It must not claim long-term reliability, flakiness rate, manual-effort reduction, or CI effectiveness without project evidence.
- The verified 2026-06-03 Playwright run remains the only project execution result available for Chapter 5.
