# Thesis Outline

## Thesis title

**A Comprehensive UI and API Automation Testing Framework Using Playwright: An Enterprise-Standard Approach**

## Degree and institution

Bachelor of Computer Science and Engineering  
VN-UK Institute for Research and Executive Education, The University of Danang

## Author

Le Tiep Tuyen  
Student ID: 22020015  
Cohort: K22

## Supervisor

Dr. Le Dinh Dung  
VN-UK Institute for Research and Executive Education, The University of Danang

---

# Front Matter

## Title Page

Follow the VNUK template exactly:

- The University of Da Nang
- VNUK Institute for Research and Executive Education
- thesis title in formal title case or uppercase according to final VNUK formatting
- author name
- thesis submission statement
- Bachelor in Computer Science / Computer Science and Engineering
- Danang, submission year
- copyright line

## Approval Page

Use the VNUK approval-page pattern:

- approval statement
- thesis advisor
- thesis co-advisor, if applicable
- committee members
- department chair or college dean

## Table of Contents

Generated later in Microsoft Word from headings after copying the Markdown thesis into the VNUK `.docx` template.

## List of Figures

Include only figures actually used in the thesis, such as framework architecture, Page Object Model structure, API service-layer structure, test execution flow, report screenshots, and evaluation workflow diagrams.

## List of Tables

Include only tables actually used in the thesis, such as tool comparison, framework requirements, test scenario matrix, evaluation metrics, and evidence traceability.

## Author Contribution Statement

Because this is an individual graduation project, state that the author was responsible for research, framework design, implementation, testing, documentation, and thesis writing. Mention supervisor guidance separately.

## Acknowledgements

Acknowledge the supervisor, VNUK lecturers, classmates, family, and any academic or technical support.

## Definitions

Recommended definitions:

- Software Testing
- Test Automation
- End-to-End Testing
- UI Testing
- API Testing
- Playwright
- Page Object Model
- Fixture
- Test Data Management
- Continuous Integration
- Flaky Test
- Trace Viewer
- HTML Report
- JUnit Report

## List of Abbreviations

Recommended abbreviations:

- API: Application Programming Interface
- CI/CD: Continuous Integration and Continuous Delivery/Deployment
- CLI: Command-Line Interface
- DOM: Document Object Model
- DTO: Data Transfer Object
- E2E: End-to-End
- HTML: HyperText Markup Language
- HTTP: HyperText Transfer Protocol
- JSON: JavaScript Object Notation
- POM: Page Object Model
- REST: Representational State Transfer
- SUT: System Under Test
- TDM: Test Data Management
- UI: User Interface
- VCS: Version Control System

## Abstract

Recommended abstract structure:

1. Context: modern web applications require reliable UI and API validation.
2. Problem: manual regression testing is repetitive, time-consuming, and difficult to scale.
3. Aim: design and implement a maintainable Playwright + TypeScript automation framework.
4. Method: combine Page Object Model, service-layer API abstractions, fixtures, workflows, centralized test data, and reports.
5. Result: demonstrate automation coverage for selected Unsplash UI and API flows.
6. Contribution: provide a reusable enterprise-style automation framework for UI and API testing.
7. Limitation: scope is limited to selected Unsplash UI/API scenarios and available public API constraints.

---

# Chapter 1: Introduction

## 1.1 Background

Introduce the growth of web applications, continuous delivery, and the increasing need for reliable automated validation. Explain why both UI and API testing are important for modern software quality.

## 1.2 Problem Statement

Manual regression testing for web applications is repetitive, time-consuming, vulnerable to human error, and difficult to scale across frequent releases. UI-only automation can miss service-layer defects, while API-only automation cannot validate user-facing flows. A maintainable combined UI and API automation framework is therefore required.

## 1.3 Project Aim

The aim of this project is to design, implement, and evaluate a comprehensive UI and API automation testing framework using Playwright and TypeScript for the Unsplash web application and public API.

## 1.4 Objectives

- Study modern software test automation practices and Playwright-based E2E testing.
- Analyze requirements for a maintainable UI and API automation framework.
- Design a layered automation architecture using Page Objects, workflows, fixtures, API services, DTOs, shared utilities, centralized constants, and test data.
- Implement representative UI test scenarios for Unsplash user flows.
- Implement representative API test scenarios for Unsplash public user endpoints.
- Configure Playwright execution, trace collection, HTML reporting, and JUnit reporting.
- Evaluate the framework in terms of maintainability, reusability, readability, execution reliability, and extensibility.
- Document the framework so it can be extended by future QA engineers.

## 1.5 Research Questions

- RQ1: How can a Playwright + TypeScript framework be structured to support both UI and API automation in a maintainable way?
- RQ2: How do Page Objects, fixtures, workflows, service classes, DTOs, and centralized test data improve reusability and reduce duplication?
- RQ3: How effectively can the implemented framework validate selected UI and API behavior of the Unsplash platform?
- RQ4: What limitations remain in the framework, and what future work is required to improve scalability, coverage, and reliability?

## 1.6 Scope of the System

In scope:

- Playwright + TypeScript framework design.
- UI automation for selected Unsplash flows such as viewing photographer profiles, updating profile information, and bookmarked/liked/collection-related profile flows.
- API automation for selected Unsplash public user endpoints such as public profile, user photos, user collections, and user statistics.
- Page Object Model, workflow abstraction, fixtures, API service classes, DTOs, test data, utilities, and reports.
- Playwright HTML report, trace-on-retry, and JUnit XML output.

Out of scope:

- Full production coverage of all Unsplash features.
- Performance testing beyond basic execution observations.
- Security testing beyond basic API response/header checks already implemented or planned.
- Replacing manual exploratory testing entirely.
- Ownership or modification of Unsplash application source code.

## 1.7 Success Criteria

- The repository contains a clear and reusable automation architecture.
- UI and API tests are separated but share consistent conventions.
- Test files reuse Page Objects, workflows, service classes, fixtures, and data helpers.
- The framework can be installed and executed using documented commands.
- Reports and traces are generated for debugging and CI-style review.
- The thesis explains design decisions, implementation details, evaluation, limitations, and future work.

## 1.8 Thesis Structure

Summarize Chapters 2 to 6.

---

# Chapter 2: Literature Review and Theoretical Background

## 2.1 Software Testing Fundamentals

Define verification, validation, functional testing, non-functional testing, manual testing, and automated testing.

## 2.2 Manual Testing and Automation Testing

Compare manual and automated testing in terms of speed, repeatability, human judgment, cost, maintenance, and regression suitability.

## 2.3 The Test Pyramid and Test Levels

Discuss unit, integration, API/service, E2E/UI, and manual exploratory testing. Explain why E2E tests should be meaningful and not excessive.

## 2.4 End-to-End Testing for Web Applications

Explain browser automation, user-flow simulation, assertions, selectors, synchronization, and flakiness.

## 2.5 API Testing in Modern Web Systems

Discuss REST APIs, request/response validation, status codes, headers, schemas, authentication, and API test benefits.

## 2.6 UI and API Automation as a Combined Strategy

Explain why combining UI and API testing gives broader confidence than relying on either layer alone.

## 2.7 Playwright as an Automation Framework

Discuss Playwright concepts: browser contexts, locators, auto-waiting, fixtures, API request context, traces, screenshots, videos, HTML report, JUnit report, and parallel execution.

## 2.8 Comparison of Automation Tools

Compare Playwright, Selenium, Cypress, Puppeteer, and possibly WebdriverIO using criteria such as language support, browser support, auto-waiting, API testing support, parallelization, debugging, maintainability, and CI integration.

## 2.9 Framework Design Patterns

Cover:

- Page Object Model
- service-layer abstraction for API tests
- fixtures and dependency injection
- workflows/business-flow abstraction
- DTOs and test data management
- constants and configuration management
- reusable utilities

## 2.10 Test Data Management

Explain static test data, environment variables, credentials handling, cleanup, isolation, and repeatability.

## 2.11 Reporting, Debugging, and Traceability

Discuss HTML reports, JUnit XML, traces, screenshots, logs, and evidence collection for thesis evaluation.

---

# Chapter 3: System Analysis and Framework Design

## 3.1 Current Testing Context

Describe the selected target application and API: Unsplash web application and public API. Explain why it is suitable for a graduation automation framework demonstration.

## 3.2 Requirements Analysis

### 3.2.1 Functional Requirements

- Execute UI tests for selected user-facing flows.
- Execute API tests for selected public endpoints.
- Support reusable Page Objects.
- Support reusable API service classes.
- Support fixtures for object injection.
- Support centralized test data and constants.
- Generate test reports and traces.

### 3.2.2 Non-Functional Requirements

- Maintainability
- Reusability
- Readability
- Scalability
- Reliability
- Debuggability
- Extensibility

## 3.3 System Under Test

Describe Unsplash UI and API endpoints covered in the framework.

## 3.4 Proposed Framework Architecture

Recommended figure: layered architecture diagram.

Layers:

1. Test specifications: `tests/ui`, `tests/api`
2. Interaction abstractions: `page-object`, `workflow`
3. Service abstractions: `api-service`
4. Shared framework core: `core/api`, `core/browser`, `core/element`, `core/fixtures`
5. Data and configuration: `test-data`, `data-object`, `constants`, `config`
6. Reporting and execution: Playwright config, HTML report, JUnit XML, trace viewer

## 3.5 UI Automation Design

Explain Page Object Model, action methods, selectors, workflows, and fixture injection.

## 3.6 API Automation Design

Explain API service classes, request/response models, endpoint constants, API utility layer, authentication headers, schema validation, and response assertions.

## 3.7 Fixture and Dependency Injection Design

Explain how fixtures provide reusable page objects and workflows to tests.

## 3.8 Test Data and Configuration Design

Explain `test-data`, `.env`, access tokens, base URLs, credentials, and environment-specific configuration.

## 3.9 Reporting and Debugging Design

Explain HTML reporter, JUnit reporter, trace-on-first-retry, retry strategy, timeout strategy, and debugging commands.

---

# Chapter 4: Implementation

## 4.1 Development Environment

Describe Node.js, TypeScript, Playwright, dependency installation, environment variables, browser installation, and command-line execution.

## 4.2 Repository Implementation Overview

Describe the implemented folders and their responsibilities.

## 4.3 Playwright Configuration

Explain timeout, test directory, parallelism, CI retries, workers, base URL, trace mode, HTML report, and JUnit XML report.

## 4.4 Core Utilities

Describe API utilities, browser management, browser utilities, and element wrappers.

## 4.5 Page Object Implementation

Describe implemented Page Objects such as home, login, profile, account, liked/bookmarked/collection-related pages.

## 4.6 Workflow Implementation

Describe reusable workflows such as login flow and other multi-step business flows.

## 4.7 API Service Implementation

Describe UsersService, PhotosService, endpoint constants, data objects, and request execution.

## 4.8 UI Test Implementation

Explain representative UI scenarios:

- viewing a photographer profile
- updating a profile and verifying the full name
- viewing bookmarked/liked/collection-related profile information, if implemented

## 4.9 API Test Implementation

Explain representative API scenarios:

- valid public user profile returns expected data
- invalid username returns 404
- profile links are well formed
- user photos, collections, and statistics endpoints return expected structures, if implemented

## 4.10 Reporting and Debugging Implementation

Include screenshots or examples of HTML report, JUnit result file, and Playwright trace viewer.

---

# Chapter 5: Evaluation and Discussion

## 5.1 Evaluation Methodology

Define how the framework is evaluated:

- execution success rate
- number of UI/API test scenarios
- maintainability through reuse of framework layers
- readability and naming conventions
- trace/report availability
- evidence of debugging support
- limitations from external API rate limits or third-party UI changes

## 5.2 Test Execution Results

Add actual command outputs and report screenshots after running tests.

Recommended table columns:

| Test Suite | Number of Tests | Passed | Failed | Skipped | Execution Time | Evidence |
|---|---:|---:|---:|---:|---:|---|

## 5.3 UI Automation Evaluation

Discuss strengths, coverage, and limitations of UI automation in the project.

## 5.4 API Automation Evaluation

Discuss strengths, coverage, and limitations of API automation in the project.

## 5.5 Framework Maintainability Evaluation

Analyze reuse of Page Objects, fixtures, workflows, API services, constants, DTOs, and utilities.

## 5.6 Reliability and Flakiness Discussion

Discuss retries, trace-on-first-retry, external API rate limits, UI selector stability, and third-party dependency risks.

## 5.7 Comparison with Manual Testing

Discuss the expected benefits of automation over repeated manual regression testing, while acknowledging that manual exploratory testing still has value.

## 5.8 Limitations

Possible limitations:

- limited number of implemented scenarios
- dependence on Unsplash public UI/API behavior
- possible API rate limits
- no full CI/CD pipeline unless added later
- no large-scale performance testing
- no full security testing

## 5.9 Threats to Validity

Discuss internal, external, construct, and conclusion validity.

---

# Chapter 6: Conclusion and Future Work

## 6.1 Summary of the Project

Summarize the thesis aim, implemented framework, and evaluation.

## 6.2 Key Contributions

- A layered Playwright + TypeScript UI/API automation framework.
- Reusable Page Objects, workflows, fixtures, API services, DTOs, constants, utilities, and test data.
- Representative UI and API tests for Unsplash flows.
- Reporting and debugging setup using Playwright HTML report, trace-on-retry, and JUnit XML.

## 6.3 Lessons Learned

Discuss framework design, automation stability, data management, API validation, and documentation.

## 6.4 Future Work

Potential future improvements:

- expand UI coverage to more Unsplash flows
- expand API coverage and schema validation
- improve test data cleanup and isolation
- integrate GitHub Actions CI/CD
- add visual regression testing
- add accessibility testing
- add performance smoke testing
- add security-oriented API checks
- improve reporting dashboards and trend analysis

## 6.5 Final Conclusion

Close with the value of a maintainable UI/API automation framework and its relevance to modern QA engineering.

---

# References

Use IEEE, APA, or the citation style required by VNUK. Keep a single consistent style. References should include official Playwright documentation, official tool documentation where relevant, ISTQB glossary or syllabus materials, software testing textbooks or papers, and any academic sources used in the literature review.

---

# Appendices

## Appendix A: Installation and Execution Guide

Include exact commands:

```bash
npm install
npx playwright install
npx playwright test
npx playwright test --headed
npx playwright show-report
```

## Appendix B: Test Scenario Matrix

List UI and API scenarios, preconditions, steps, expected results, and automation file paths.

## Appendix C: Framework Source Code Map

Map thesis concepts to source folders and files.

## Appendix D: Sample Reports and Trace Evidence

Include report screenshots, trace viewer screenshots, and `results.xml` explanation.
