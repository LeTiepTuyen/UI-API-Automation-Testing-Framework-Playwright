# Chapter 2: Literature Review

## 2.1 Software Testing Fundamentals

Software testing is commonly treated as a structured quality-assurance activity that evaluates software behavior against selected criteria, expected outcomes, and stakeholder needs. Ammann and Offutt describe testing through the use of systematic criteria for evaluating software structures and behaviors, while the ISTQB Foundation Level syllabus frames testing as an activity that supports defect detection, quality evaluation, and decision-making across the software lifecycle [@ammann_offutt_testing_2016; @istqb_ctfl_syllabus_2024]. This theoretical foundation is important because testing is not only the act of executing steps; it also includes designing checks, observing behavior, comparing actual and expected results, and communicating evidence.

Bertolino characterizes software testing research as a long-standing discipline concerned with improving fault detection, validation, cost-effectiveness, and confidence in software systems [@bertolino_testing_research_2007]. In this thesis, that broader view is used to position automation testing as one part of a wider testing strategy rather than as a standalone tool activity.

The ISTQB syllabus distinguishes verification and validation concerns. Verification asks whether a work product satisfies specified requirements, while validation asks whether the system is suitable for its intended use [@istqb_ctfl_syllabus_2024]. Automated tests should therefore contain meaningful assertions, not only automated actions. A browser script or API request has limited value if it does not verify an expected result.

Regression testing is especially relevant to automation because it repeats previously defined checks after software or environment changes [@istqb_ctfl_syllabus_2024]. Exploratory testing remains different because it depends on tester learning, investigation, and human judgment. This distinction frames a central thesis position: automation can strengthen repeatable regression checks, but it should not be presented as a complete replacement for human testing expertise.

## 2.2 Manual Testing and Automated Testing Approaches

Manual and automated testing represent complementary execution approaches. Manual testing relies on a human tester to perform actions, observe behavior, and interpret outcomes, while the ISTQB Glossary defines test automation as the use of software to perform or support activities such as test management, test design, test execution, and result checking [@istqb_glossary_test_automation_2026]. This distinction is methodological: the key difference is not whether the test is valuable, but how the test activity is executed, observed, and recorded.

Garousi and Mantyla's multivocal literature review emphasizes that automation is most appropriate when the test is repeatable, the expected result can be checked reliably, and the cost of building and maintaining automation can be justified by repeated use [@garousi_mantyla_automation_2016]. Manual testing remains suitable for exploratory investigation, usability judgment, new or unstable behavior, and cases where expected results require human interpretation. Automated testing is more suitable for stable, repeatable, and evidence-oriented checks that justify script design and maintenance effort [@istqb_ctfl_syllabus_2024; @garousi_mantyla_automation_2016].

Table 2.1 summarizes the methodological distinction.

| Dimension | Manual testing | Automated testing | Methodological implication |
|---|---|---|---|
| Execution | Human tester performs the steps. | Tool executes predefined scripts. | Automation fits repeatable checks. |
| Judgment | Strong for exploration and usability. | Limited to encoded assertions. | Human testing remains necessary. |
| Evidence | Depends on tester notes, screenshots, or reports. | Can generate logs, reports, traces, and structured results. | Automated evidence supports later review. |
| Maintenance | Knowledge may remain informal. | Scripts require updates when behavior changes. | Framework design affects long-term usefulness. |
| Cost pattern | Lower initial technical setup. | Higher initial setup but reusable over repeated runs. | Suitability depends on stability and repetition. |

*Table 2.1. Manual and automated testing approaches.*

Table 2.2 gives a simplified example of how the same test intent can appear in manual and automated forms. The table is illustrative rather than project-result evidence.

| Test intent | Manual test case representation | Automation script representation |
|---|---|---|
| Start from the target page. | Open the browser and navigate to the application page. | Navigation command or shared workflow setup. |
| Enter required data. | Type values into visible fields. | Data is loaded from a fixture, object, or data file. |
| Perform the user action. | Click the relevant button or link. | Page-level action method or locator interaction. |
| Check expected behavior. | Observe message, page state, or displayed data. | Assertion compares actual outcome against the expected result. |
| Preserve evidence. | Record notes or capture screenshots manually. | Test runner produces logs, reports, traces, or result files. |

*Table 2.2. Manual test case and automation script representations.*

## 2.3 Test Automation in Modern Web Application Testing

Automated web testing is challenging because modern web applications combine dynamic user interfaces, asynchronous requests, authentication, third-party services, and frequently changing page content. Leotta, Clerissi, Ricca, and Tonella describe automated end-to-end web testing as an important but difficult area because tests must interact with changing web interfaces and integrated application behavior [@leotta_e2e_web_testing_2016]. These characteristics make automated web testing valuable, but they also make it fragile when selectors, waiting logic, and test data are poorly managed.

Playwright documentation addresses some of these web-testing concerns through locator strategies, actionability checks, and web-first assertions, which are intended to interact with dynamic pages more reliably than raw timing assumptions [@playwright_docs_locators_2026; @playwright_docs_actionability_2026; @playwright_docs_assertions_2026]. These capabilities support automation, but they do not remove the need for good test design and maintainable framework structure.

From a methodology perspective, a web automation suite should not become a collection of isolated scripts. Repeated navigation, setup, selectors, data, and expected results should be organized so that tests remain readable and maintainable. Garousi and Felderer argue that automated test scripts should be developed and maintained with the same engineering attention given to production code [@garousi_felderer_test_scripts_2016]. This is why test automation is treated in this thesis as a software engineering activity, not only as tool usage.

## 2.4 End-to-End Testing Methodology

End-to-end testing validates an integrated user-facing flow across the relevant parts of a system. In web testing, this usually includes navigation, user actions, visible states, and expected outcomes in the browser. Leotta et al. describe E2E web testing as a way to exercise application behavior through user-oriented workflows, while also noting that tool and approach selection affects reliability and maintainability [@leotta_e2e_web_testing_2016].

End-to-end testing is valuable because it is close to user behavior, but it can also be more expensive and fragile than lower-level checks when scenarios are too broad or poorly isolated. Flaky tests are a major risk in this context. A flaky test can pass or fail inconsistently without a corresponding product change, reducing trust in automated results. Research identifies common causes such as asynchronous waits, environment dependency, test order dependency, external services, and unstable test data [@habchi_flaky_tests_2022; @tahir_flakiness_review_2023].

For this reason, end-to-end automation should focus on representative, stable, and meaningful flows. From this perspective, API-level checks can complement browser-oriented end-to-end tests by validating service boundaries closer to the interface under test, helping to avoid placing all automated confidence in the browser suite [@leotta_e2e_web_testing_2016; @istqb_ctfl_syllabus_2024].

## 2.5 Test Case Design for Automated Testing

The ISTQB Glossary defines a test case through input values, execution preconditions, expected results, and postconditions developed for a test objective or condition [@istqb_glossary_test_case_2026]. Ammann and Offutt also emphasize that effective software testing requires systematic criteria rather than arbitrary execution [@ammann_offutt_testing_2016]. These ideas apply directly to automation: before writing a script, the tester should understand what behavior is being checked, what data is required, what state must exist, what assertion proves the behavior, and what evidence should be preserved.

Automated test case design also requires scope control. A test that covers too much behavior can be difficult to debug, while a test that covers too little behavior may not provide useful confidence. UI automation should identify the user flow, page states, stable interaction points, and observable expected result. API automation should identify the endpoint, request data, authentication assumption, expected status code, response fields, and error case.

Table 2.3 presents an author-synthesized summary of the test design considerations used as methodological guidance for this thesis, drawing on ISTQB test-case design guidance [@istqb_glossary_test_case_2026] and systematic testing criteria [@ammann_offutt_testing_2016].

| Design consideration | Purpose in automated testing |
|---|---|
| Scenario purpose | Explains what risk or behavior the test validates. |
| Preconditions | Defines required account, data, browser, or API state. |
| Test data | Separates input values and expected values from test intent. |
| Assertion points | Prevents scripts from becoming action-only automation. |
| Cleanup/reset | Protects repeatability when a test changes application state. |
| Evidence artifact | Connects execution to reports, logs, traces, or result files. |

*Table 2.3. Test case design considerations for automated testing.*

## 2.6 Test Automation Framework Concepts

The ISTQB Glossary defines a test automation framework as a tool-supported environment for automation that usually includes a test harness and test libraries [@istqb_glossary_test_automation_framework_2026]. The ISTQB Test Automation Engineering syllabus extends this view by discussing test automation architecture, framework layering, test definition, test execution, test adaptation, logging, reporting, and maintainability concerns [@istqb_ctal_tae_syllabus_2024]. Garousi and Felderer further support this interpretation by treating automated test scripts as test code that requires development, quality assessment, and maintenance [@garousi_felderer_test_scripts_2016].

This literature suggests that a framework is more than a folder containing scripts. A useful automation framework provides structure for defining tests, executing them, adapting them to the system under test, managing data and configuration, and reviewing results. Table 2.4 presents an author-synthesized summary of these framework concepts as the theoretical baseline for Chapter 3; the "Design implication for later chapters" column represents author-derived inference from the cited literature rather than a direct quotation from any single source.

| Framework concept | Literature-based role | Design implication for later chapters |
|---|---|---|
| Test definition | Describes test cases, suites, and expected behavior. | Test files should express scenario intent. |
| Test execution | Runs tests and records execution information. | A test runner and reporter configuration are needed. |
| Test adaptation | Connects tests to the system interface, such as UI or API. | UI and API abstractions should separate interface details. |
| Test data and configuration | Supplies repeatable data and environment values. | Data and runtime settings should not be hardcoded everywhere. |
| Test libraries/utilities | Provide reusable operations and support maintainable test code. | Shared helpers reduce duplicated test code. |
| Reporting and logging | Communicate activities, results, and failure context. | Generated artifacts support debugging and evaluation. |

*Table 2.4. Literature-based concepts of a test automation framework.*

Several design concepts can realize these framework responsibilities. Page Object Model is one example for UI abstraction: Fowler describes a Page Object as an application-specific API over a page, while Selenium and Playwright documentation also present Page Objects as a way to keep page interaction details out of test specifications [@fowler_page_object_2013; @selenium_page_object_models_2026; @playwright_docs_pom_2026]. This chapter introduces POM as a design-pattern concept from the automation testing literature; the project application through Page Objects, fixtures, API services, DTOs, and related mechanisms is discussed in Chapter 3.

## 2.7 Test Data Generation and Reporting in Automated Testing

Test data is a central concern in automation because automated checks require known input values, expected outputs, and repeatable state. The ISTQB Glossary defines test data preparation as the activity of selecting, creating, generating, manipulating, or editing data for testing [@istqb_glossary_test_data_preparation_2026]. Data-driven testing further separates test logic from input and expected data, allowing the same control script to run with different data sets [@istqb_glossary_data_driven_testing_2026; @microsoft_data_driven_testing_2021].

Reporting is equally important because automated execution must produce interpretable evidence. The ISTQB Glossary defines a test report as documentation that summarizes test activities and results [@istqb_glossary_test_report_2026]. In automated testing, this evidence may include pass/fail status, logs, traces, screenshots, videos, XML result files, or HTML summaries depending on the tool and configuration. This connects reporting to accountability: automated tests are more useful when their results can be reviewed and diagnosed after execution.

Playwright provides built-in reporting and trace-viewing support, including HTML reporting, JUnit XML output, and trace artifacts for debugging recorded test actions and context [@playwright_docs_reporters_2026; @playwright_docs_trace_viewer_2026]. These sources provide the theoretical basis for the later evaluation chapter. Execution evidence and verified report artifacts are discussed in Chapter 5; this chapter presents reporting only as a methodology concern.
