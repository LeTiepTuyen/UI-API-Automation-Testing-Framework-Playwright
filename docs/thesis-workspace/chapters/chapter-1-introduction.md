# Chapter 1: Introduction

## 1.1 Background

Modern web applications combine browser-based user flows, service APIs, authentication, dynamic data, and frequent interface changes. Testing such systems requires more than checking whether a page can be opened. It must also verify whether important user actions behave correctly in the browser and whether the supporting API layer returns expected responses. The ISTQB Foundation Level syllabus describes testing as an activity that supports defect detection, quality evaluation, and decision-making, while also identifying regression testing as a suitable area for automation because repeated checks often need to be executed after software changes [@istqb_ctfl_syllabus_2024].

Manual testing remains valuable for exploratory investigation, usability judgment, and risk-based analysis. However, repeated regression checks can become slow and inconsistent when they depend only on manual execution. Prior research on software test automation notes that automation is most useful when tests are repeatable, the expected outcomes can be evaluated consistently, and the long-term maintenance effort is justified by repeated execution [@garousi_mantyla_automation_2016]. Automation therefore should not be framed as a replacement for human testers, but as a way to support repeatable validation and preserve execution evidence.

This research applies that principle by proposing a Playwright and TypeScript UI and API automation testing framework for modern web applications. Unsplash is used as the selected demonstration system under test because it provides realistic browser flows and public API behavior for evaluating the framework in a concrete context. The proposed framework is designed around reusable automation abstractions rather than isolated scripts, allowing the thesis to discuss both the practical value of automation testing and the engineering design needed to keep automation code maintainable [@project_readme_2026; @project_overview_2026].

## 1.2 Problem Statement

### 1.2.1 Significance of the Problem

A persistent challenge in software testing is that regression checks must be repeated whenever features, dependencies, UI states, or API behavior change. If these checks are performed only manually, testers must repeat navigation steps, data entry, request verification, result recording, and comparison with expected behavior. This increases effort and can introduce inconsistency, especially when the same scenarios are executed many times.

UI testing and API testing also validate different concerns. UI tests confirm whether selected user-facing flows work in the browser, while API tests check service responses, status codes, response structures, and endpoint behavior. A UI-only suite can miss service-layer issues, while an API-only suite cannot fully validate user-facing workflows. Therefore, a practical automation framework should support both layers while keeping their responsibilities separate.

### 1.2.2 Project Problem Statement

This research addresses the problem of designing, implementing, and evaluating a maintainable automation framework that can support both browser-level and API-level regression checks for modern web applications. The project uses selected Unsplash scenarios as a demonstration context, but the framework objective is broader than a single website: it investigates how reusable automation abstractions can organize scenario intent, runtime setup, UI interaction, API request handling, test data, and reporting evidence in a coherent framework [@project_readme_2026; @project_overview_2026].

The study is intentionally bounded. It does not claim complete Unsplash coverage, full API coverage, production CI/CD readiness, a measured manual-testing baseline, long-term reliability, or quantified productivity improvement from the project Copilot Agentic-AI workflow. These boundaries keep the thesis focused on the implemented framework design and the verified execution evidence that is available for evaluation.

## 1.3 Research Objectives

The main objective of this project is to design, implement, and evaluate a maintainable UI and API automation testing framework using Playwright and TypeScript. The framework is demonstrated through selected Unsplash web application and public API scenarios, but its design principles are intended to be applicable to comparable modern web applications that require repeatable UI and API regression validation.

To support this objective, the project defines four research objectives, each corresponding to one research question:

1. Analyze how a Playwright and TypeScript framework can structure UI and API automation scenarios for a modern web application in a maintainable way.
2. Design and implement reusable framework abstractions that improve separation of concerns, reduce duplication, and support long-term test-code maintainability.
3. Evaluate the implemented framework using verified Playwright execution evidence, HTML reporting, JUnit XML output, and trace-related debugging support where evidence is available.
4. Identify remaining limitations and future work related to coverage, scalability, reliability, evaluation depth, and workflow support boundaries.

The project-level Copilot Agentic-AI workflow is discussed as a support feature for automation test case design, Playwright script generation, and automation code review, but the thesis does not claim measured productivity improvement from that workflow.

## 1.4 Research Questions

The thesis is guided by four research questions:

**RQ1:** How can a Playwright and TypeScript framework be structured to support both UI and API automation testing in a maintainable way?

**RQ2:** How can reusable framework abstractions improve maintainability, reusability, and separation of concerns in web automation testing?

**RQ3:** What evidence does the implemented framework provide for validating selected UI and API behavior in the demonstration system?

**RQ4:** What limitations remain in the implemented framework, and what future work is required to improve coverage, scalability, reliability, and evaluation depth?
