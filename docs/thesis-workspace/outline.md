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

## Outline Lock and Evidence Control

Status: Chapters 1-3 were restructured after user-approved outline feedback on 2026-06-04, refined through T-078, further revised through T-079 for academic research voice, source diversity, and generalized framework framing, and approved by the user on 2026-06-08 after the T-081 Chapter 3 diagram and structure refinement. Chapter 4 was then revised under T-077 on 2026-06-08 to reduce duplication with the revised Chapter 3, group implementation mechanisms into broader academic sections, and keep reporting screenshots/evaluation evidence primarily in Chapter 5 and Appendix D.

This outline defines the thesis structure for a Playwright UI and API automation testing framework. Sections marked `NEEDS_EVIDENCE` must not be finalized until the required repository evidence, external source, execution artifact, or figure review is available.

Citation style decision: the final thesis will use **APA 7th edition**. Markdown drafts may keep stable citation keys for traceability, but final in-text citations and the reference list must be formatted according to APA 7th edition.

Supervisor-feedback decision: Chapter 2 must remain a Literature Review chapter and should not explain repository-specific Page Object, fixture, service-layer, DTO, cleanup, reporting, or design-pattern implementation details. It may introduce Page Object Model only as a brief cited literature concept, while project application belongs to Chapter 3. Those technical framework-design mechanisms belong to Chapter 3. Chapter 1 should not explain repository folders or file paths; it should frame the research problem, objectives, questions, and evidence boundaries. Chapter 4 remains temporarily unchanged until Chapters 1-3 are approved again, after which Chapter 4 can be reviewed for duplicate or outdated design content. Chapter 5 is approved, but future Chapter 5/6 edits should respect the revised Chapter 2/3 scope.

Primary planning and evidence sources:

- `docs/thesis-workspace/source-notes/`
- `docs/thesis-workspace/evidence-matrix.md`
- `docs/thesis-workspace/figure-register.md`
- `docs/final-graduation-thesis-doc/thesis-template.md`
- `docs/final-graduation-thesis-doc/source-notes/vnuk-template-analysis.md`

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

Include only figures actually used in the thesis and registered in `docs/thesis-workspace/figure-register.md`:

- Figure 3.1: layered framework architecture.
- Figure 3.2: Page Object Model concept and separation of responsibilities.
- Figure 3.3: practical workflow for applying the Page Object Model in an automation testing project.
- Figure 3.4: fixture-based dependency injection and shared runtime context.
- Figure 3.5: shared runtime context flow through Playwright fixtures and framework utilities.
- Figure 3.6: API service abstraction and validation pipeline.
- Figure 3.7: test data, DTO, and cleanup strategy.
- Figure 3.8: automation framework concept map and quality-attribute relationships.
- Figure 3.9: UI automation execution flow.
- Figure 3.10: API automation execution flow.
- Figure 3.11: Copilot Agentic-AI workflow for automation test development.
- Figure 3.12: public Unsplash web interface used as contextual system-under-test evidence.
- Figure 3.13: official Unsplash API documentation context for the selected public API scenarios.
- Figure 4.1: VS Code Test Explorer and Playwright panel showing the implemented API and UI test organization.
- Figure 4.2: Playwright execution and reporting pipeline.
- Figure 4.3: Copilot-supported Playwright script-generation workflow.
- Figure 4.4: Copilot-supported automation code-review workflow.
- Figure 5.1: Playwright HTML report showing 18 passed tests from the verified 3 June 2026 full-suite run.
- Figure 5.2: mean execution time, CPU usage, and RAM usage for Playwright, Cypress, and Selenium across ten test cases; source adapted from Moń and Pańczyk (2025).
- Figure 5.3: twenty-four-hour uptime and ROCOF reliability comparison of Selenium and Playwright by hardware context; source adapted from Almabruk et al. (2025).
- Figure 5.4: Playwright Trace Viewer loaded with a representative UI test trace, showing the action timeline, DOM snapshot, and network panel.

Candidate screenshots and non-diagram visuals are tracked separately in `docs/thesis-workspace/visual-evidence-register.md`. They must not be added to the final List of Figures until they are captured, source-safe, evidence-checked, captioned, and accepted for a specific chapter or appendix.

## List of Tables

Include only tables actually used in the thesis, such as tool comparison, framework requirements, test scenario matrix, evaluation metrics, and evidence traceability. Current planned/inserted table groups include:

- Chapter 2: manual and automated testing approaches; manual test case and automation script representations; automated test case design considerations; literature-based automation framework concepts.
- Chapter 3: framework concept responsibility map; quality attributes mapped to framework design mechanisms.
- Chapter 5: tool-selection criteria, Playwright/Cypress/Selenium comparison, verified execution evidence, and evaluation boundaries.

Evaluation metric tables remain `NEEDS_EVIDENCE` until actual execution artifacts are collected.

## Visual Evidence Policy

Use screenshots and external images selectively. The thesis should prioritize diagrams and tables for conceptual explanations, and use screenshots mainly when they provide direct project evidence or improve reader understanding of the system under test, implemented workflow, execution report, or trace/debugging artifact. All screenshot candidates must be tracked in `visual-evidence-register.md`; external internet images or copied benchmark figures require citation and license review before use.

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
- AI: Artificial Intelligence
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

Abbreviation finalization note (2026-06-11, T-032): the final `front-matter/abbreviations.md` keeps only abbreviations actually used in the thesis body (AI, API, CI/CD, CLI, DOM, DTO, E2E, HTML, HTTP, JSON, POM, UI). REST, SUT, TDM, and VCS were removed as unused after the Definitions/Abbreviations audit. Do not re-add them unless they are actually introduced in the prose.

## Abstract

Recommended abstract structure:

1. Context: modern web applications require reliable UI and API validation.
2. Problem: manual regression testing is repetitive, time-consuming, and difficult to scale.
3. Aim: design and implement a maintainable Playwright + TypeScript automation framework.
4. Method: combine Page Object Model, service-layer API abstractions, fixtures, workflows, centralized test data, and reports.
5. Result: demonstrate automation coverage for selected Unsplash UI and API flows. `NEEDS_EVIDENCE`: final execution evidence and reviewed scenario coverage are required before writing the result statement.
6. Contribution: provide a reusable enterprise-style automation framework for UI and API testing.
7. Limitation: scope is limited to selected Unsplash UI/API scenarios and available public API constraints.

---

# Chapter 1: Introduction

## Chapter Purpose and Evidence Basis

Purpose: establish the project context, significance of the testing problem, project-specific problem statement, research objectives, research questions, and concise evidence boundaries.

Length-control rule: Chapter 1 should be concise and framing-oriented, approximately 800 to 1,100 words after the latest user-approved concision revision. It must not repeat Chapter 2 theory, Chapter 3/4 implementation detail, or a chapter-by-chapter thesis structure summary. Scope and success/evaluation boundaries should be integrated briefly into the problem statement and Research Objectives section rather than expanded as separate sections.

Visual decision: no main Chapter 1 figure is planned by default. Do not insert an external software testing pyramid or test automation pyramid image in Chapter 1; Chapter 2 already covers the relevant foundations, and F-01 is archived as excluded from thesis insertion. If a visual is explicitly approved later, prefer a source-safe project SUT context screenshot deferred to Chapter 3 or a compact author-created concept figure.

Evidence basis:

- `README.md`
- `docs/project-overview.md`
- `docs/thesis-workspace/source-notes/repository-overview.md`
- `docs/thesis-workspace/source-notes/limitations-and-missing-evidence.md`
- `docs/thesis-workspace/source-notes/chapter-5-execution-evidence-2026-06-03.md`
- `docs/thesis-workspace/evidence-matrix.md` claims C-001 to C-004
- `docs/thesis-workspace/evidence-matrix.md` claims C-016 to C-019, C-023, and C-054 to C-059 for concise evaluation framing

The verified Chapter 5 evidence is now available for concise evaluation framing. Detailed execution results, tool comparison, and benchmark interpretation should remain in Chapter 5 rather than being repeated in the introduction.

## 1.1 Background

Introduce the growth of web applications, continuous delivery, and the increasing need for reliable automated validation. Explain why both UI and API testing are important for modern software quality.

## 1.2 Problem Statement

Split this section into two focused subsections:

- `1.2.1 Significance of the Problem`: briefly explain the broader software-testing problem, including repeated regression effort, inconsistency risk, and the complementary role of UI and API validation.
- `1.2.2 Project Problem Statement`: state the project-specific problem: how to design, implement, and evaluate a maintainable UI and API automation framework for selected Unsplash regression scenarios, without claiming complete coverage or unsupported metrics.

## 1.3 Research Objectives

State the main objective first: design, implement, and evaluate a maintainable UI and API automation testing framework using Playwright and TypeScript for modern web applications, demonstrated through selected Unsplash web application and public API scenarios.

Then list four essential research objectives that align one-to-one with the four research questions:

- Analyze how a Playwright and TypeScript framework can structure UI and API automation scenarios for a modern web application in a maintainable way.
- Design and implement reusable framework abstractions that improve separation of concerns, reduce duplication, and support long-term test-code maintainability.
- Evaluate the implemented framework using verified Playwright execution evidence, HTML reporting, JUnit XML output, and trace-related debugging support where evidence is available.
- Identify remaining limitations and future work related to coverage, scalability, reliability, evaluation depth, and workflow support boundaries.

Mention the project-supported Copilot Agentic-AI workflow only as a support feature, without measured productivity claims.

## 1.4 Research Questions

- RQ1: How can a Playwright + TypeScript framework be structured to support both UI and API automation in a maintainable way?
- RQ2: How can reusable framework abstractions improve maintainability, reusability, and separation of concerns in web automation testing?
- RQ3: What evidence does the implemented framework provide for validating selected UI and API behavior in the demonstration system?
- RQ4: What limitations remain in the framework, and what future work is required to improve scalability, coverage, and reliability?

---

# Chapter 2: Literature Review

## Chapter Purpose and Evidence Basis

Purpose: provide theoretical background and methodology for software testing and test automation without explaining the repository-specific framework mechanisms. Chapter 2 should prepare readers for the framework design in Chapter 3, but it must not contain the detailed Page Object, fixture, API service, DTO, cleanup, reporting, or design-pattern diagrams now assigned to Chapter 3.

Evidence basis:

- ISTQB/testing theory sources in `citation-register.md`.
- Flaky-test literature for end-to-end testing methodology.
- Official Playwright reporting/trace documentation only where reporting methodology is discussed.
- `docs/final-graduation-thesis-doc/reference-documents/Thesis_Playwright_Duong_Sample1.md` may be used for structure inspiration only, not copied prose.

Required tables:

- Table 2.1: Manual and automated testing approaches.
- Table 2.2: Manual test case and automation script representations.
- Table 2.3: Test case design considerations for automated testing.
- Table 2.4: Literature-based concepts of a test automation framework.

Visual decision: no Chapter 2 diagram is planned after the 2026-06-04 restructuring and T-078 refinement. Use concise prose and literature-based tables only. Do not insert external screenshots or internet images into Chapter 2 unless a later explicit request approves a source/license-reviewed visual.

## 2.1 Software Testing Fundamentals

Define software testing, verification, validation, regression testing, and exploratory testing in the context of web application quality.

## 2.2 Manual Testing and Automated Testing Approaches

Explain manual and automated testing as complementary approaches. Keep the section theoretical and concise; do not repeat the Chapter 1 project problem statement.

## 2.3 Test Automation in Modern Web Application Testing

Discuss web-application testing challenges such as dynamic UI behavior, asynchronous interactions, service dependencies, and the need for maintainable automation.

## 2.4 End-to-End Testing Methodology

Explain the role, value, and risks of end-to-end testing, including careful scenario selection and flaky-test risk.

## 2.5 Test Case Design for Automated Testing

Discuss scenario purpose, preconditions, input data, assertions, cleanup/reset needs, and evidence artifacts as automated test design concerns.

## 2.6 Test Automation Framework Concepts

Introduce the general idea of a test automation framework using ISTQB glossary and Test Automation Engineering syllabus sources. Keep this conceptual and defer the concrete project mechanisms to Chapter 3. Page Object Model may be introduced briefly as a cited UI abstraction concept, but project-specific POM application belongs to Chapter 3.

## 2.7 Test Data Generation and Reporting in Automated Testing

Explain test data preparation/generation, data-driven testing, reporting, and execution evidence as automation methodology concerns. Do not make CI/CD a central topic because the current repository has no verified CI/CD implementation. Detailed project configuration and verified execution evidence remain in Chapters 3 to 5.

---

# Chapter 3: Framework Design

## Chapter Purpose and Evidence Basis

Purpose: present the project-specific framework design. Chapter 3 prioritizes framework design over general system analysis and now contains the technical framework mechanisms moved out of Chapter 2.

Evidence basis:

- `README.md`
- `docs/project-overview.md`
- `.github/copilot-instructions.md`
- `docs/thesis-workspace/source-notes/framework-architecture.md`
- `docs/thesis-workspace/source-notes/ui-automation-layer.md`
- `docs/thesis-workspace/source-notes/api-automation-layer.md`
- `docs/thesis-workspace/source-notes/fixtures-and-workflows.md`
- `docs/agentic-workflow/workflow-overview.md`
- `.github/AGENTS.md`
- `.github/copilot-instructions.md`
- `.github/agents/`
- `.github/prompts/`
- `.claude/skills/`
- Figures F-02, F-11, F-16, F-13, F-17, F-14, F-15, F-12, F-03, F-04, and F-07 in `docs/thesis-workspace/figure-register.md`
- Inserted visual evidence V-01 and V-12 in `docs/thesis-workspace/visual-evidence-register.md`.
- Candidate visual evidence V-07/V-08 in `docs/thesis-workspace/visual-evidence-register.md`, if later approved and captured.

Required tables:

- Table 3.1: Framework concept responsibility map.
- Table 3.2: Quality attributes mapped to framework design mechanisms.

## 3.1 Overall Framework Architecture

Place the layered framework architecture at the beginning of the chapter. Explain the relationship among UI/API tests, Page Objects, workflows, fixtures, API services, core utilities, DTOs, constants, configuration, data, and reporting.

## 3.2 UI Abstraction Design

Explain the Page Object Model and the project element abstraction as framework-design mechanisms. Use sub-sections for:

- `3.2.1 Page Object Model Concept`
- `3.2.2 Page Objects and Element Abstraction`
- `3.2.3 Practical Page Object Workflow`

Use Figure 3.2 and Figure 3.3. Chapter 2 may introduce POM as a cited concept, but Chapter 3 explains project application.

## 3.3 Runtime Composition Design

Explain Playwright fixtures, dependency provisioning, base fixture runtime initialization, custom fixture object creation, typed test consumption, and shared runtime context. Use sub-sections for:

- `3.3.1 Fixture-Based Dependency Provisioning`
- `3.3.2 Shared Runtime Context`

Use Figure 3.4.
Use Figure 3.5 for the shared runtime context flow.

## 3.4 API Automation Design

Explain API service classes, endpoint constants, URL helpers, authorization/header handling, core API utilities, and validation boundaries. Use sub-sections for:

- `3.4.1 Service-Layer Abstraction`
- `3.4.2 Request Execution and Validation Scope`

Use Figure 3.6.

## 3.5 Test Data and State Management Design

Explain static test data, DTOs, endpoint/file-path constants, environment configuration, data loading helpers, and API-based cleanup for state-changing UI scenarios. Use sub-sections for:

- `3.5.1 Centralized Test Data and Configuration`
- `3.5.2 State Reset Through API Cleanup`

Use Figure 3.7.

## 3.6 Framework Quality Design

Explain the design mechanisms as a coherent framework and explain reporting/debugging/traceability as design concerns. Use sub-sections for:

- `3.6.1 Design Principles and Quality Goals`
- `3.6.2 Execution Evidence and Debugging Support`
  - `3.6.2.1 Reporting Artifacts`
  - `3.6.2.2 Debugging and Traceability Scope`

Use Figure 3.8 and concise tables.

## 3.7 Automation Execution Flow

Explain the UI and API automation execution flows. Use sub-sections for:

- `3.7.1 UI Automation Flow`
- `3.7.2 API Automation Flow`

Use Figure 3.9 for UI execution and Figure 3.10 for API execution.

## 3.8 Copilot Agentic-AI Workflow Design for Automation Testing

Explain the project-level Copilot Agentic-AI workflow as an automation-testing support feature. Use Figure 3.11. Do not include or imply the private thesis-writing harness.

---

# Chapter 4: Implementation

## Chapter Purpose and Evidence Basis

Purpose: describe how the framework design is implemented in the repository through configuration, core utilities, Page Objects, workflows, API services, test data, and representative UI/API tests.

Evidence basis:

- `playwright.config.ts`
- `package.json`
- `fixtures/custome-fixture.ts`
- `core/api/api.ts`
- `api-service/users-service.ts`
- `tests/ui/profile/update-profile.spec.ts`
- `tests/api/users/get-public-profile.spec.ts`
- `docs/thesis-workspace/source-notes/playwright-configuration.md`
- `docs/thesis-workspace/source-notes/ui-automation-layer.md`
- `docs/thesis-workspace/source-notes/api-automation-layer.md`
- `docs/thesis-workspace/source-notes/test-data-and-configuration.md`
- `docs/thesis-workspace/source-notes/reporting-and-execution.md`
- `docs/agentic-workflow/workflow-overview.md`
- `.github/AGENTS.md`
- `.github/copilot-instructions.md`
- `.github/agents/`
- `.github/prompts/`
- `.claude/skills/`
- Figures V-13, F-05, F-09, and F-10 in `docs/thesis-workspace/figure-register.md`
- Candidate visual evidence V-02, V-03, V-07, and V-08 in `docs/thesis-workspace/visual-evidence-register.md`, if later approved and captured.

## 4.1 Implementation Environment and Configuration

Describe the dependency set, direct Playwright commands, environment-variable loading, browser/API base URL configuration, test directory, Chromium project settings, timeout behavior, parallelism, CI retry/worker safeguards, reporters, and trace setting. Keep the section implementation-focused and do not treat configuration values as measured reliability or performance results.

## 4.2 Implemented Framework Organization

Describe the concrete source organization that realizes the Chapter 3 design: UI/API tests, Page Objects, workflows, fixtures, API services, constants, DTOs, core utilities, test data, and shared helpers. Keep this as an implementation map rather than a long repository tour.

## 4.3 Runtime and Utility Implementation

Explain how `BrowserManagement`, fixture injection, element wrappers, browser utilities, and `APIUtils` provide shared runtime and request behavior. Mention JSON schema and security-header helpers only as available utility capabilities, not as broad coverage.

## 4.4 UI Automation Implementation

Explain representative UI implementation through the profile-update scenario, including fixture injection, Page Objects, login workflow reuse, centralized test data, UI validation, browser navigation, and API-assisted cleanup. Candidate V-02 may be inserted only after a safe verified capture if it adds more value than prose.

## 4.5 API Automation Implementation

Explain representative API implementation through `UsersService`, `PhotosService`, endpoint constants, API URL construction, public-read authorization behavior, and the public-profile API specification. Candidate V-03 may be inserted only after sanitized verified capture if it adds more value than prose or tables.

## 4.6 Reporting and Debugging Configuration

Use Figure 4.2 to show reporting and trace configuration as implementation evidence. Keep verified HTML report, JUnit XML, terminal output, and trace-viewer screenshots primarily in Chapter 5 and Appendix D.

## 4.7 Copilot-Supported Automation Workflow Implementation

Describe only the project automation-testing support workflow artifacts: repository-wide instructions, custom agents, prompt entry points, reusable skills, and workflow diagrams F-09 and F-10. Avoid productivity, defect-reduction, coverage, or reliability claims without separate evaluation evidence.

---

# Chapter 5: Evaluation and Discussion

## Chapter Purpose and Evidence Basis

Purpose: justify the Playwright tool-selection decision through a project-specific comparison with Cypress and Selenium, then evaluate the implemented Playwright and TypeScript framework using verified execution evidence, reporting artifacts, and external benchmark context. Interpret the findings in relation to the research questions and consolidate all evaluation boundaries in one place. Revised structure applied 2026-06-11 (T-082 rewrite) to improve logical flow, add the missing Discussion section, relocate Figure 5.4, and consolidate boundaries.

Evidence basis:

- `docs/thesis-workspace/source-notes/chapter-5-tool-comparison-source-selection.md`
- `docs/thesis-workspace/source-notes/reporting-and-execution.md`
- `docs/thesis-workspace/source-notes/limitations-and-missing-evidence.md`
- `docs/thesis-workspace/evidence-matrix.md` claims C-016 to C-024 and C-054 to C-059
- Official Playwright, Cypress, and Selenium documentation registered in `citation-register.md`
- Mon and Panczyk (2025) registered as `mon_panczyk_tool_comparison_2025`
- Almabruk et al. (2025) registered as `almabruk_selenium_playwright_reliability_2025`
- `garousi_mantyla_automation_2016` for automation-versus-manual discussion (alongside `istqb_ctfl_syllabus_2024`)
- `docs/thesis-workspace/source-notes/chapter-5-external-benchmark-references.md`
- Inserted visual evidence V-04 and V-05, plus file-based evidence V-06 in `docs/thesis-workspace/visual-evidence-register.md`
- Accepted external benchmark charts V-10 and V-11 in `docs/thesis-workspace/visual-evidence-register.md`

Verified execution evidence (do not change): 18 tests, 18 passed, 0 failed, 0 skipped, 0 errors, 28.890057s (JUnit). API=15 (4 spec files: get-public-profile×3, get-statistics×4, list-collections×4, list-photos×4). UI=3 (3 spec files: bookmarked-photos×1, update-profile×1, view-profile×1). The Chapter 5 comparison score table is a project-specific rubric, not a local Cypress/Selenium benchmark and not a universal tool ranking.

## 5.1 Evaluation Approach and Evidence Basis

State the two evaluation strands: (a) tool-selection justification via project-specific rubric, capability comparison, and external empirical context; (b) framework evaluation via verified execution results, report artifacts, and discussion of automation value. Present the evaluation evidence basis and boundaries in a concise table. Do not scatter the full boundary list here — the complete consolidated boundaries belong to Section 5.7. Do not use the archived evaluation-workflow figure.

Required table: overview of evidence basis and top-level boundaries for both evaluation strands.

## 5.2 Tool Selection Criteria and Weighting

Define primary and secondary criteria used to select an automation framework for this project. Cover: browser support, synchronization/action reliability, UI and API testing support together, TypeScript/POM/fixture/service architecture fit, reporting/debugging artifacts, parallel and CI-ready execution, setup simplicity, ecosystem maturity, cost, learning and documentation fit, and extensibility.

Required table: tool selection criteria with weights (1–5 scale) and project rationale per criterion.

## 5.3 Comparative Analysis of Playwright, Cypress, and Selenium

Compare all three tools using official documentation, Mon and Panczyk (2025), and the project-specific weighted rubric from Section 5.2. The comparison should justify why Playwright is selected for this framework without claiming universal superiority. Place the "project-fit rubric, not an empirical benchmark" guard immediately adjacent to the score table. Distribute per-tool citation references into the capability discussion rather than stacking all citations in opening sentences.

Integrate the external benchmark context here (formerly separate §5.6/5.7) so the entire tool-selection argument forms one continuous strand.

Required tables:
- Capability and literature summary table for the three tools.
- Weighted framework evaluation table with scores, weighted scores, primary subtotal, secondary subtotal, and final rank.

Required figures here (tool comparison context):
- Figure 5.2 adapted from Mon and Panczyk (2025) — external benchmark chart.
- Figure 5.3 adapted from Almabruk et al. (2025) — external reliability chart.
Both must have explicit "external context, not this project's benchmark" framing.

## 5.4 Verified Test Execution Results

Present actual execution evidence from the verified 2026-06-03 full-suite run. Place Figure 5.4 (Trace Viewer screenshot) in this section because it is project execution/debugging evidence, not benchmark interpretation. The supplemental trace caveat must be stated adjacent to Figure 5.4.

Required tables:
- Full-suite result: tests, passed, failed, skipped, duration, evidence. Omit always-zero Errors column.
- Per-spec breakdown from JUnit XML. Omit always-zero Errors column.

Required figures:
- Figure 5.1 (V-04 HTML report overview).
- Figure 5.4 (V-05 Trace Viewer screenshot, relocated here from the former §5.7).

Exact verified figures: 18 tests, 18 passed, 0 failed, 0 skipped, 28.890057s; API=15, UI=3. Do not change.

## 5.5 Automation Value Relative to Manual Testing

Discuss the value of automation for repeatable regression checks compared with manual testing. Place this section AFTER the execution results (Section 5.4) so the 18-test evidence it references is already established. Acknowledge that manual exploratory testing retains value automation cannot replace.

Use `garousi_mantyla_automation_2016` alongside `istqb_ctfl_syllabus_2024` to avoid single-source reliance. State explicitly that no manual timing baseline was measured.

Condensed coverage: repeatability, speed for regression, evidence generation, human judgment, maintenance overhead, and automation risk (stale tests, false confidence). Can be short prose or a small table — do not use a large six-row table.

---

# Chapter 6: Conclusion and Future Work

## Chapter Purpose and Evidence Basis

Purpose: synthesize the research findings, confirm achievement of the research objectives and research questions, consolidate the evaluation limitations, and identify directions for future work. This chapter completes the thesis by interpreting what was found, confirming what was answered, and being honest about what remains open. Keep the chapter concise and analytical — avoid restating Chapter 5 tables or Chapter 3/4 implementation detail at length.

Note on structure: Sections 5.6 (Discussion) and 5.7 (Evaluation Boundaries) from the previous outline have been relocated here as Section 6.1 (Discussion) and Section 6.3 (Limitations), following standard academic thesis structure in which the final chapter synthesizes findings, confirms conclusions, states limitations, and proposes future work.

Evidence basis:

- Verified execution evidence from Chapter 5 (18 tests, 18 passed, 28.890057s; JUnit XML and HTML report).
- Framework design and implementation evidence from Chapters 3 and 4.
- Tool-selection rationale and weighted rubric from Chapter 5 Sections 5.2 and 5.3.
- Evaluation boundaries carried from Chapter 5 §5.7 content (now consolidated in Section 6.3).
- `docs/thesis-workspace/source-notes/limitations-and-missing-evidence.md`

## 6.1 Discussion

Interpret the key findings of the research in relation to the framework design and evaluation evidence. This section is analytical and forward-looking — it synthesizes what the project demonstrated without restating tables or implementation detail.

Cover concisely:
- What the layered Playwright + TypeScript framework demonstrates about combining UI and API automation in a single maintainable codebase.
- What the verified 18-test full-suite run confirms as practical automation evidence, including reporting artifacts.
- How the design abstractions (POM, fixture-based DI, service-layer API) contributed to separation of concerns and reusability in practice.
- Whether the tool-selection rationale (Playwright ranked first on the project-specific weighted rubric) was supported by the execution evidence.
- The Copilot Agentic-AI workflow as a documented automation-testing support feature with clear stated boundaries around effectiveness claims.

Do not repeat Chapter 5 tables verbatim. Write analytical prose that interprets findings rather than re-describes them. One to two paragraphs is sufficient.

## 6.2 Conclusion

State clearly whether the research objectives and four research questions have been answered by the available evidence, but write the conclusion as integrated academic prose rather than a question-by-question response list.

Cover concisely:
- Confirm that the main research objective was achieved through the design, implementation, and evaluation of the Playwright and TypeScript UI/API automation framework.
- Synthesize the answer to RQ1 by explaining that UI and API automation can be structured within one maintainable TypeScript framework through layered responsibilities and shared execution evidence.
- Synthesize the answer to RQ2 by explaining that Page Objects, fixtures, service-layer API abstractions, DTOs, centralized constants, and utilities support maintainability, reusability, and separation of concerns as design outcomes rather than measured scores.
- Synthesize the answer to RQ3 by drawing from the verified 18-test passing run, HTML report, JUnit XML output, execution log, and supplemental trace artifact.
- Synthesize the answer to RQ4 by leading naturally into Sections 6.3 and 6.4, where limitations and future work are consolidated.

Close with one brief statement on the broader relevance of the framework approach for modern web application QA engineering. Do not create a separate Key Contributions subsection, and do not format Section 6.2 as a direct Q&A list.

## 6.3 Limitations

Consolidate the limitations of the framework and its evaluation into a few focused analytical paragraphs, replacing the former Chapter 5 §5.7. The bullets below are planning points only; the chapter prose should not present them as a numbered list. Develop each limitation by explaining what is bounded, why the boundary matters, and what claim the thesis therefore avoids. Cover the essential boundaries only:

- Evaluation rests on a single verified local run — no CI/CD execution and no repeated-run reliability or flakiness measurement.
- Coverage is limited to selected representative Unsplash UI and API scenarios, and excludes non-functional dimensions (accessibility, visual regression, performance, security).
- Comparative and automation-versus-manual claims are qualitative: the Cypress/Selenium comparison rests on documentation and the author-constructed rubric, with no local benchmark suites or quantified manual baseline.
- The framework depends on an external live system, exposing it to Unsplash API rate limiting, third-party UI changes, and token-validity risks across future runs.
- The Copilot Agentic-AI workflow is documented as a support feature but its effectiveness is not quantitatively evaluated.

## 6.4 Future Work

Recommend a small number of high-value directions, each tied directly to a limitation in Section 6.3. The bullets below are planning points only; the chapter prose should not present them as a numbered list. Write this section as forward-looking academic prose that explains how each direction extends the framework and what evidence it would enable in future research. Cover the essential directions only:

- Integrate a verified CI/CD pipeline (e.g., GitHub Actions) to enable repeatable runs and long-term flakiness measurement, addressing the single-run limitation.
- Expand UI and API scenario coverage, with consistent JSON schema validation applied across the full API suite.
- Extend evaluation into non-functional dimensions through accessibility auditing (e.g., axe-core), visual regression, and lightweight performance/security checks.
- Adopt historical reporting and trend analysis (e.g., Allure or Grafana) to monitor stability and reliability over time.

---

# References

Use **APA 7th edition** consistently. References should include official Playwright documentation, official tool documentation where relevant, ISTQB glossary or syllabus materials, software testing textbooks or papers, and any academic sources used in the literature review.

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

Include report screenshots, trace viewer screenshots, and `results.xml` explanation. `NEEDS_EVIDENCE`: include only verified artifacts from a known execution run.

Use `visual-evidence-register.md` entries V-04, V-05, and V-06 as the main Appendix D evidence set. V-04 and V-05 are already inserted in Chapter 5, while V-06 remains file-based terminal/JUnit evidence unless final formatting requires an additional screenshot.

## Appendix E: Copilot Agentic-AI Workflow Artifacts

Optionally include a concise artifact map for the automation-testing workflow, such as `.github/AGENTS.md`, `.github/copilot-instructions.md`, `.github/agents/`, `.github/prompts/`, and `.claude/skills/`. Include only project automation-testing artifacts that are relevant to framework development and review.

Optional screenshots, such as V-07 or V-08, may be included only if they demonstrate project workflow traceability and do not expose private thesis-writing workflow content.
