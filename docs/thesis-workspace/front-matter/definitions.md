# Definitions

**Software Testing.** Software testing is the systematic activity of evaluating a software product or system to provide information about quality, detect defects, and support confidence that the system satisfies specified requirements and user needs [@istqb_ctfl_syllabus_2024; @ammann_offutt_testing_2016].

**Test Automation.** Test automation refers to the use of software tools to support or perform testing activities, including test execution, comparison of actual and expected results, reporting, and related test-control activities [@istqb_glossary_test_automation_2026; @garousi_mantyla_automation_2016].

**End-to-End Testing.** End-to-end testing validates integrated application behavior from the perspective of realistic user or system workflows, especially where multiple components, interfaces, and dependencies interact [@leotta_e2e_web_testing_2016].

**UI Testing.** UI testing evaluates user-facing behavior through the graphical interface, including page state, visible content, user interactions, navigation, and assertions against observable browser behavior [@playwright_docs_locators_2026; @playwright_docs_assertions_2026].

**API Testing.** API testing validates application behavior through service or endpoint interactions, commonly checking request execution, response status, response body, headers, and error behavior without relying on browser UI interaction [@playwright_docs_api_testing_2026; @playwright_docs_apirequestcontext_2026].

**Playwright.** Playwright is the browser automation and test-runner technology used in this research to implement TypeScript-based UI and API automation, configure execution behavior, and produce reporting and trace-related artifacts [@playwright_docs_intro_2026; @playwright_docs_configuration_2026].

**Page Object Model.** Page Object Model is a UI automation design pattern in which page-specific locators and operations are encapsulated behind page-oriented objects so that tests can express scenario intent without duplicating low-level UI interaction details [@fowler_page_object_2013; @playwright_docs_pom_2026; @selenium_page_object_models_2026].

**Fixture.** In Playwright Test, a fixture is a reusable setup mechanism that can provide initialized objects or runtime context to tests, supporting shared setup while preserving test isolation [@playwright_docs_fixtures_2026].

**Test Data Management.** Test data management, in this thesis context, refers to the preparation, organization, loading, and restoration of data required for automated test execution, including static data, structured request objects, endpoint constants, and cleanup data where applicable [@istqb_glossary_test_data_preparation_2026; @istqb_glossary_data_driven_testing_2026].

**Continuous Integration.** Continuous integration is treated in this thesis as a future-work execution environment in which automated tests could be run repeatedly on code changes or schedules. The current framework is configured in a CI-aware way, but no verified CI/CD pipeline execution is claimed [@playwright_docs_configuration_2026; @playwright_docs_parallelism_2026].

**Flaky Test.** A flaky test is a test that can produce different outcomes across executions without corresponding changes to the tested code or test code, creating uncertainty in the interpretation of automated test results [@habchi_flaky_tests_2022; @tahir_flakiness_review_2023].

**Trace Viewer.** Playwright Trace Viewer is a debugging and inspection tool for recorded trace artifacts, allowing actions, snapshots, network activity, logs, source information, and related execution details to be reviewed when traces are collected [@playwright_docs_trace_viewer_2026].

**HTML Report.** An HTML report is a Playwright reporter output that presents test execution results in a browser-readable report format for review, debugging, and evidence documentation [@playwright_docs_reporters_2026].

**JUnit Report.** A JUnit report is an XML-style test report output commonly used for machine-readable test-result integration and archival; in this research, Playwright is configured to produce JUnit XML output as part of the verified execution evidence [@playwright_docs_reporters_2026; @project_playwright_config_2026].
