# DETAILED OUTLINE OF THE GRADUATION THESIS

## Thesis Title

**A Comprehensive UI and API Automation Testing Framework Using Playwright: An Enterprise-Standard Approach**

## Student

| Item | Details |
|---|---|
| Full Name | Le Tiep Tuyen |
| Student ID | 22020015 |
| Program | Computer Science and Engineering |
| Cohort | K22 |
| Institution | VN-UK Institute For Research and Executive Education (VNUK), The University of Danang |

## Supervisor

| Item | Details |
|---|---|
| Full Name | Le Dinh Dung |
| Academic Title | PhD in Computer Science |
| Position | Lecturer |
| Affiliation | VN-UK Institute For Research and Executive Education (VNUK), The University of Danang |

## 1. Rationale for the Study

The software industry is increasingly governed by continuous integration and continuous delivery (CI/CD), where product teams are expected to release high-quality software at high frequency. Under this pressure, manual regression testing becomes a critical bottleneck due to long execution cycles, high human effort, and inconsistent reproducibility.

A major limitation in current practice is the fragmentation between UI automation and API automation. Many teams maintain separate tools, duplicated test logic, and inconsistent test architecture. As a result, test suites become fragile, maintenance costs increase, and the defect-feedback loop slows down.

From a research perspective, there is practical demand for a maintainable framework that unifies UI and API testing while preserving engineering rigor. This thesis addresses that demand by proposing and evaluating an enterprise-standard automation framework built with Playwright and TypeScript.

The proposed framework is validated on Unsplash (web platform and public API), enabling realistic evaluation of end-to-end user journeys, API contract verification, and hybrid UI-API testing workflows.

## 2. Objectives and Research Tasks

### 2.1 Objectives

The overall objective is to design, implement, and evaluate a scalable test automation framework that integrates UI and API testing for reliable regression validation.

| Objective ID | Objective Statement |
|---|---|
| O1 | Design a layered framework architecture with clear separation of concerns. |
| O2 | Integrate UI and API testing in a unified execution model. |
| O3 | Apply enterprise design patterns to improve reusability and maintainability. |
| O4 | Validate framework effectiveness through representative scenarios and measurable indicators. |

### 2.2 Research Tasks

| Task ID | Research Task | Expected Output |
|---|---|---|
| T1 | Review related studies on automation architecture, hybrid testing, and framework engineering. | Literature synthesis and gap identification |
| T2 | Analyze project requirements for Unsplash UI and API workflows. | Requirement specification |
| T3 | Design framework modules, dependencies, and execution flow. | Architecture specification and module map |
| T4 | Implement core framework components (fixtures, page objects, workflows, API services, wrappers, utilities). | Functional framework prototype |
| T5 | Implement and run representative automated scenarios (profile, update profile, likes). | Executable test suites and run evidence |
| T6 | Evaluate reliability, maintainability, and practical applicability. | Evaluation findings and discussion |
| T7 | Consolidate documentation and thesis report. | Final thesis proposal and report artifacts |

## 3. Research Scope and Subjects

### 3.1 Research Subjects

The study focuses on software test automation engineering for modern web systems, with three technical subjects:

- UI end-to-end automation using Playwright.
- API testing and response contract validation for REST endpoints.
- Hybrid UI-API workflow design for deterministic setup and efficient verification.

### 3.2 Research Scope

| Scope Type | In Scope | Out of Scope |
|---|---|---|
| Architecture | Layered design and module interactions for a unified test framework | General-purpose enterprise platform redesign |
| Implementation | Core automation modules for UI, API, fixtures, and utilities | Commercial-grade product hardening for large-scale deployment |
| Validation | Execution on selected Unsplash scenarios with practical metrics | Multi-organization benchmarking and long-term field studies |
| Security/Performance | Basic testing feasibility in project context | Full penetration testing and formal non-functional certification |

## 4. Research Methodology and Technologies Used

### 4.1 Research Methodology

This thesis adopts an applied software engineering methodology:

1. **Literature Review**: Analyze prior work and best practices in test automation architecture.
2. **System Analysis and Design**: Define architecture layers, module contracts, and test execution model.
3. **Experimental Implementation**: Build the framework and develop representative test scenarios.
4. **Empirical Evaluation**: Assess reliability, maintainability, and execution practicality.
5. **Technical Documentation**: Produce reproducible documentation and academic reporting artifacts.

### 4.2 Technologies Used

| Category | Technology | Purpose |
|---|---|---|
| Programming Language | TypeScript | Type safety and maintainable framework code |
| Runtime | Node.js (>= 18) | Execution environment |
| Test Engine | Playwright | Unified UI and API automation |
| Validation | Ajv | JSON Schema validation for API contracts |
| Configuration | dotenv | Environment and runtime parameter management |
| Data Management | JSON test data | Data-driven and reusable test inputs |
| Development Tools | Visual Studio Code, Git, GitHub, npm | Development workflow and version control |

### 4.3 Key Architectural Components

The framework follows a compact six-layer model:

| Layer | Core Components | Main Responsibility |
|---|---|---|
| Test Layer | Test specifications | Define scenario logic and assertions |
| Fixture Layer | Base and custom fixtures | Dependency injection and test setup |
| Abstraction Layer | Page objects, workflows, API services | Encapsulate UI/API interactions |
| Core Layer | Element wrapper, browser management, API utilities | Provide reusable technical primitives |
| Engine Layer | Playwright runtime | Execute browser and API operations |
| Target Layer | Unsplash Web and Unsplash API | System under test |

### 4.4 Visual Architecture and Flow Artifacts

The proposal includes two existing visual artifacts to improve presentation quality for report conversion:

**Figure 1. Framework Architecture Pipeline**

![Framework Architecture Pipeline](Decision%20Point%20Option-2026-02-08-110401%20(1).png)

**Figure 2. Layered Architecture Flow**

![Layered Architecture Flow](Pipeline%20Design-2026-02-08-093025%20(1).png)

For editable diagram sources, refer to `ARCHITECTURE_DIAGRAMS.md` in the same directory.

## 5. Expected Results

| Result Category | Expected Result |
|---|---|
| Technical Prototype | A complete and functional UI-API automation framework with modular architecture |
| Test Assets | Representative automated suites for profile viewing, profile update, and likes validation |
| Engineering Quality | Reusable components, layered structure, and standardized coding conventions |
| Empirical Evidence | Documented findings on stability, maintainability, and practical applicability |
| Academic Output | Complete thesis report and supporting technical documentation |

## 6. Scientific and Practical Significance

### 6.1 Scientific Significance

- Provides an applied research case in framework-oriented test automation engineering.
- Contributes practical evidence for hybrid UI-API testing as a maintainable research direction.
- Demonstrates the impact of architecture principles and design patterns on test reliability.

### 6.2 Practical Significance

- Offers a reusable implementation blueprint for QA engineers and SDETs.
- Supports faster and more reliable regression cycles in CI/CD-oriented teams.
- Reduces long-term maintenance cost through structured abstractions and centralized components.
- Produces a portfolio-grade artifact aligned with enterprise testing practices.

## 7. Proposed Thesis Structure

| Chapter | Title | Main Content |
|---|---|---|
| Chapter 1 | Introduction | Problem context, motivation, objectives, scope, and contributions |
| Chapter 2 | Literature Review | Related work on automation frameworks, Playwright ecosystem, and hybrid testing strategies |
| Chapter 3 | System Analysis and Design | Requirement analysis, architecture design, module decomposition, and workflow/pipeline description |
| Chapter 4 | System Implementation | Detailed implementation of fixtures, page objects, workflows, API services, and core utilities |
| Chapter 5 | Experimental Results and Evaluation | Scenario execution, observations, metric-oriented discussion, and limitations |
| Chapter 6 | Conclusion and Future Work | Key findings, contribution summary, and extension roadmap |

## 8. Task Allocation

This is an individual graduation thesis project.

| Role | Responsibility |
|---|---|
| Student (Le Tiep Tuyen) | Literature review; requirement analysis; architecture and module design; framework implementation; test execution and evaluation; thesis documentation; defense preparation |

## 9. Proposed Timeline

The thesis is planned for 14 weeks with phase-based deliverables and checkpoints.

| Phase | Weeks | Major Activities | Deliverables | Verification Checkpoint |
|---|---|---|---|---|
| Phase 1 | 1-2 | Topic refinement, literature review, requirement analysis | Problem statement, requirement baseline | Supervisor review of scope and feasibility |
| Phase 2 | 3-5 | Architecture design, fixture/core foundation implementation | Architecture draft, core framework skeleton | Design review and module boundary validation |
| Phase 3 | 6-8 | UI module and API module development | Page objects, workflows, API services, initial test suites | Functional run of target scenarios |
| Phase 4 | 9-11 | Hybrid workflow completion, reporting integration, stabilization | Hybrid UI-API suites, report artifacts, improved reliability | Regression run and stability assessment |
| Phase 5 | 12-14 | Experimental analysis, thesis writing, revision, defense preparation | Final report package and presentation materials | Pre-defense review and final submission readiness |

Da Nang, March 25, 2026

**STUDENT'S AND SUPERVISOR'S CONFIRMATION**
