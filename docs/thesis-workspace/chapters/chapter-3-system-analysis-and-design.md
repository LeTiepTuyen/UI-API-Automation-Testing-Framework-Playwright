# Chapter 3: Framework Design

## 3.1 Overall Framework Architecture

The proposed framework is designed as a layered Playwright and TypeScript automation framework for modern web applications, demonstrated through selected Unsplash UI and public API scenarios. Its main design goal is to separate scenario intent from low-level interaction details, request construction, runtime setup, test data, and reporting configuration. This structure follows the implementation evidence described in the project documentation and source-code layout [@project_readme_2026; @project_overview_2026].

Figure 3.1 presents the overall architecture. The top layer contains UI and API test specifications. UI tests express browser-based user flows, while API tests express endpoint-level validation. Supporting layers provide Page Objects, workflows, API services, fixtures, core utilities, DTOs, constants, configuration, test data, and reporting support.

![Figure 3.1. Layered architecture of the Playwright UI and API automation framework.](../assets/diagrams/out/framework-architecture.svg)

*Figure 3.1. Layered architecture of the Playwright UI and API automation framework.*

The architecture assigns each concern to a distinct layer. Test specifications reside under `tests/ui/` and `tests/api/`; page-level abstractions under `page-object/`; reusable business workflows under `workflow/`; fixture definitions under `fixtures/` and `core/fixtures/`; service logic under `api-service/`; shared utilities under `core/`; and data and configuration concerns under `data-object/`, `constants/`, `test-data/`, `config/`, and `utils/` [@project_page_objects_2026; @project_custom_fixture_2026; @project_users_service_2026; @project_data_constants_utils_2026].

The framework is intentionally scoped. It is not designed to prove complete Unsplash coverage, full security testing, visual regression testing, accessibility testing, or production CI/CD maturity. Instead, it demonstrates how a maintainable framework can support representative UI and API automation with clear design boundaries.

The framework is demonstrated through Unsplash as the selected system under test. Figure 3.12 provides a visual context for the public web interface used by the browser-oriented scenarios, while Figure 3.13 shows the official Unsplash API documentation context that informs the API-oriented scenario selection. These screenshots are included only as contextual visual evidence; they do not extend the tested coverage beyond the selected scenarios described in this chapter and evaluated in Chapter 5.

![Figure 3.12](../assets/figures/unsplash-web-interface-context.png)

*Figure 3.12. Public Unsplash web interface used as contextual system-under-test evidence.*

![Figure 3.13](../assets/figures/unsplash-api-documentation-context.png)

*Figure 3.13. Official Unsplash API documentation context for the selected public API scenarios.*

## 3.2 UI Abstraction Design

### 3.2.1 Page Object Model Concept

The UI automation layer applies the Page Object Model to keep selectors and page-level interactions outside test specifications. Page Object Model literature describes this pattern as an application-specific API over a page or page fragment, allowing tests to interact with meaningful page behavior instead of manipulating raw UI details directly [@fowler_page_object_2013; @selenium_page_object_models_2026; @playwright_docs_pom_2026]. Playwright's own Page Object guidance presents page classes as application-facing abstractions over repeated page interactions, reinforcing the same separation recommended by the broader POM literature.

Figure 3.2 explains the concept at a design level. A test begins from user-visible intent, expresses steps and assertions in a test specification, calls Page Object methods, and leaves locator resolution and browser interaction to lower-level framework objects. This separation helps readers distinguish between what the test verifies and how the framework performs the interaction.

![Figure 3.2. Page Object Model concept from test intent to browser interaction.](../assets/diagrams/out/page-object-model-concept.svg)

*Figure 3.2. Page Object Model concept from test intent to browser interaction.*

### 3.2.2 Page-Level and Element-Level Abstraction

In the implemented framework, Page Object classes such as `HomePage`, `LoginPage`, `ProfilePage`, and `AccountPage` encapsulate the UI interactions needed for browser-based scenarios. Among these, `ProfilePage` and `AccountPage` are directly involved in profile-viewing and profile-update flows, while `HomePage` and `LoginPage` handle navigation and authentication. This allows a test to call methods such as opening a profile, clicking an edit-profile button, filling profile fields, or checking a visible message, while page-specific selector and action details remain in the Page Object layer [@project_page_objects_2026; @project_ui_profile_tests_2026].

The implemented framework also uses an element wrapper under `core/element/element.ts`. Playwright recommends user-facing locators and provides locator APIs for role, text, label, placeholder, alternative text, title, test id, and default locator expressions [@playwright_docs_locators_2026]. The project wrapper centralizes common locator operations and checks around these strategies [@project_browser_element_utils_2026]. While Playwright documentation recommends user-facing locators for resilience, the implemented Page Objects use a combination of locator strategies, including XPath-based selectors through the default locator type, depending on the available UI structure. This combination reduces duplicated low-level Playwright calls inside Page Objects and supports more consistent UI interaction handling.

### 3.2.3 Practical Page Object Workflow

A Page Object design becomes useful only when it is applied consistently during test development. When automating a UI scenario, the tester should first understand the manual scenario, identify the relevant page states, inspect the DOM for reliable locator candidates, map each important page or UI area to a Page Object, and then implement page-level methods that describe user-meaningful actions [@fowler_page_object_2013; @playwright_docs_locators_2026].

Figure 3.3 illustrates this practical workflow. The process begins with manual scenario understanding because automation should not be written before the tester knows the intended flow and expected outcome. The next step is locator discovery through browser inspection and Playwright-oriented locator selection. After that, the tester maps pages or UI areas to Page Object responsibilities and writes test code that consumes those Page Objects through fixtures.

![Figure 3.3. Practical workflow for applying the Page Object Model in an automation testing project.](../assets/diagrams/out/page-object-model-application-workflow.svg)

*Figure 3.3. Practical workflow for applying the Page Object Model in an automation testing project.*

This workflow clarifies the placement of Page Object Model in the thesis. Chapter 2 introduced POM as a general automation concept from the literature; this chapter explains how the project applies POM as a concrete UI abstraction boundary.

## 3.3 Runtime Composition Design

### 3.3.1 Fixture-Based Dependency Provisioning

The framework uses Playwright fixtures to provide reusable objects and runtime context to tests. Playwright supports custom fixtures through `test.extend()`, allowing a project to define setup logic and make objects available to test functions [@playwright_docs_fixtures_2026]. Fowler describes dependency injection as an approach in which configuration and object construction responsibilities are separated from the consuming code [@fowler_dependency_injection_2004]; the fixture-based provisioning in this framework applies the same principle, providing reusable objects to test functions through framework setup rather than inline construction.

Figure 3.4 shows the fixture-based dependency injection flow. The Playwright runtime provides browser, context, page, and request objects. The base fixture initializes shared runtime references through `BrowserManagement`. The custom fixture then creates reusable Page Objects and `LoginWorkflow`, and test specifications consume those objects as typed fixture parameters [@project_custom_fixture_2026; @project_login_workflow_2026; @project_browser_element_utils_2026].

![Figure 3.4. Fixture-based dependency injection and shared runtime context.](../assets/diagrams/out/fixture-dependency-injection-flow.svg)

*Figure 3.4. Fixture-based dependency injection and shared runtime context.*

### 3.3.2 Shared Runtime Context

The shared runtime context is the mechanism that makes the active Playwright browser page and API request context available to framework utilities after fixture initialization. In this framework, the automatic base fixture receives Playwright's `browser`, `context`, `page`, and `request` objects and stores them through `BrowserManagement`; the custom fixture then provides Page Objects and workflow objects to test specifications [@playwright_docs_fixtures_2026; @project_custom_fixture_2026; @project_browser_element_utils_2026].

Figure 3.5 summarizes this runtime relationship. It separates the Playwright runtime objects, the base fixture initialization step, the shared `BrowserManagement` references, the custom fixture objects, and the test scenario that consumes the injected abstractions.

![Figure 3.5. Shared runtime context flow through Playwright fixtures and framework utilities.](../assets/diagrams/out/shared-runtime-context-flow.svg)

*Figure 3.5. Shared runtime context flow through Playwright fixtures and framework utilities.*

This design keeps test files focused on scenario behavior because a UI test can import `test` and `expect` from the custom fixture layer and receive objects such as `homePage`, `profilePage`, `accountPage`, and `loginWorkflow` [@project_ui_profile_tests_2026]. This thesis therefore describes the runtime context as an implemented design mechanism, not as evidence of long-term runtime reliability.

## 3.4 API Automation Design

### 3.4.1 Service-Layer Abstraction

The API automation layer is designed around service classes. API testing validates behavior at the service boundary, including status codes, response bodies, headers, endpoint behavior, and error responses. Playwright supports HTTP request execution through API request contexts and methods such as GET, POST, PUT, and DELETE [@playwright_docs_api_testing_2026; @playwright_docs_apirequestcontext_2026].

Service-layer abstraction keeps endpoint construction outside individual test files. Fowler describes a service layer as a boundary that defines available operations for client layers [@fowler_service_layer_2003]. In this framework, the same idea is applied to API tests: test specifications call meaningful service methods, while URL construction, endpoint constants, authorization headers, request utilities, and response handling remain in supporting layers.

Figure 3.6 presents the API service abstraction and validation pipeline. The test specification calls a service method. The service method combines endpoint constants, URL helpers, optional authorization headers, and request data. The request is executed through shared API utilities, which access the Playwright request context through the shared `BrowserManagement` reference initialized by the base fixture (Section 3.3.2), and the test validates status codes, body fields, headers, error cases, or schema-related expectations where implemented.

![Figure 3.6. API service abstraction and validation pipeline.](../assets/diagrams/out/api-service-abstraction-pipeline.svg)

*Figure 3.6. API service abstraction and validation pipeline.*

### 3.4.2 Request Execution and Validation Scope

The implemented framework realizes this design through `UsersService` and `PhotosService`. `UsersService` encapsulates public profile retrieval, user photos, user collections, user statistics, and current-user profile update operations. `PhotosService` encapsulates random-photo retrieval, like, and unlike operations. Endpoint paths are centralized in `constants/api-endpoints.ts`, API URLs are constructed through `utils/api-url.ts`, and HTTP methods are executed through `core/api/api.ts` [@project_users_service_2026; @project_photos_service_2026; @project_api_utils_2026; @project_data_constants_utils_2026].

The API utility layer also contains JSON schema validation support through Ajv. JSON Schema is a declarative approach for describing and validating JSON document structure [@json_schema_overview_2026]. This chapter therefore describes schema validation as an available utility capability, but it does not claim broad schema-validation coverage because that would require specific test coverage and execution evidence [@project_api_utils_2026].

## 3.5 Test Data and State Management Design

### 3.5.1 Centralized Test Data and Configuration

Maintainable automation separates scenario logic from test data, structured request objects, endpoint constants, and environment-specific values. Data-driven testing stores input and expected data separately from the control script, allowing test logic to remain stable while data changes [@istqb_glossary_data_driven_testing_2026; @microsoft_data_driven_testing_2021]. DTOs provide structured data objects that carry data across a boundary [@fowler_data_transfer_object_2003].

Figure 3.7 shows the relationship among test data, DTOs, scenario execution, API support, and cleanup. The test loads static or environment-aware data, uses DTOs when structured request data is needed, executes UI or API behavior, and can call an API cleanup operation after a state-changing UI scenario.

![Figure 3.7. Test data, DTO, and cleanup strategy for repeatable automation.](../assets/diagrams/out/test-data-dto-cleanup-strategy.svg)

*Figure 3.7. Test data, DTO, and cleanup strategy for repeatable automation.*

The implemented framework applies these ideas through `test-data/user-info.json`, `utils/json.ts`, `constants/file-paths.ts`, `constants/api-endpoints.ts`, `utils/api-url.ts`, and DTO/model files under `data-object/` [@project_data_constants_utils_2026]. Runtime values such as base URLs are loaded from environment variables, keeping environment-specific values outside the committed test code [@project_playwright_config_2026].

### 3.5.2 State Reset Through API Cleanup

The update-profile UI scenario demonstrates the cleanup strategy. After a profile update, the test constructs an `UpdateUserProfileRequestData` object and calls `UsersService.updateCurrentUserProfile()` in `test.afterEach()` to restore the original username [@project_ui_profile_tests_2026; @project_users_service_2026]. This supports the design claim that API-based cleanup is implemented.

The cleanup mechanism should be interpreted cautiously. It shows that the framework includes a reset path for a state-changing UI scenario, but it does not by itself prove long-term cleanup reliability. That claim would require repeated execution evidence and stability analysis, which belongs to evaluation rather than framework design.

## 3.6 Framework Quality Design

### 3.6.1 Design Principles and Quality Goals

The framework combines several design mechanisms to support maintainability, reusability, readability, traceability, and debuggability. In software quality discussion, maintainability and related quality attributes are treated as design concerns rather than automatic outcomes [@iso_25010_2023]. In test automation research, automated scripts also require engineering attention because test code must be developed, assessed, and maintained over time [@garousi_felderer_test_scripts_2016]. In this framework, these concerns are addressed through Page Objects, element abstraction, workflows, fixtures, service-layer API abstraction, DTOs, centralized constants, configuration helpers, shared utilities, JSON schema validation support, and API-based cleanup. The framework applies object-oriented composition to assign responsibilities to specific classes: Page Objects hold UI interaction logic, service classes hold API request operations, and fixtures hold dependency provisioning. In the sense defined by the SOLID principles, responsibilities are separated across cohesive classes and tests depend on named abstractions rather than raw implementation details, applying the Single Responsibility and Dependency Inversion principles to the extent the framework scope requires [@martin_solid_principles_2000].

Figure 3.8 presents the design mechanisms as a framework concept map. The diagram is a design explanation, not a measured quality result. It shows how different abstractions are intended to support quality attributes used in software product quality discussion, including maintainability, reusability, readability, reliability, debuggability, and traceability [@iso_25010_2023].

![Figure 3.8. Automation framework concept map and quality-attribute relationships.](../assets/diagrams/out/automation-framework-concept-map.svg)

*Figure 3.8. Automation framework concept map and quality-attribute relationships.*

Table 3.1 maps major framework concepts to repository evidence.

| Concept | Design responsibility | Repository evidence |
|---|---|---|
| Test specification | Holds scenario intent and assertions. | `tests/ui/`, `tests/api/` |
| Page Object | Encapsulates page-specific UI behavior. | `page-object/` |
| Element abstraction | Centralizes locator operations and checks. | `core/element/element.ts` |
| Workflow | Encapsulates repeated business flow. | `workflow/login-workflow.ts` |
| Fixture | Provides reusable objects and setup. | `fixtures/custome-fixture.ts`, `core/fixtures/base-fixture.ts` |
| API service | Encapsulates endpoint operations. | `api-service/` |
| DTO/model | Represents structured request/response data. | `data-object/` |
| Constants/configuration | Centralizes reusable paths, endpoints, and settings. | `constants/`, `config/`, `utils/`, `playwright.config.ts` |

*Table 3.1. Framework concept responsibility map.*

Evidence boundaries remain important, but they are not retained as a separate design table in this chapter. In a framework-design chapter, such boundaries are clearer when stated in the relevant prose: for example, this chapter may describe implemented abstractions and configuration, while Chapter 5 is responsible for verified execution evidence, pass/fail results, report artifacts, and evaluation limits.

### 3.6.2 Execution Evidence and Debugging Support

#### 3.6.2.1 Reporting Artifacts

Reporting is part of framework design because automated tests must produce evidence that can be reviewed. Playwright documentation describes reporter support, including HTML reporting and JUnit XML output [@playwright_docs_reporters_2026]. The implemented framework configures HTML reporting and JUnit output to `results.xml` in `playwright.config.ts` [@project_playwright_config_2026].

#### 3.6.2.2 Debugging and Traceability Scope

Debugging support is also part of the design boundary. Playwright trace viewing can help inspect recorded actions and artifacts when traces are collected [@playwright_docs_trace_viewer_2026]. The implemented framework configures trace collection on first retry, which means trace evidence depends on execution conditions and should not be treated as guaranteed for every passing run [@project_playwright_config_2026].

This design supports traceability in two ways. First, test execution can produce artifacts such as reports and result files. Second, source organization makes it possible to trace a test scenario to Page Objects, workflows, services, DTOs, constants, and utilities. Chapter 5 evaluates verified execution evidence, while this chapter describes only the design that enables such evidence to be produced.

Table 3.2 maps selected quality attributes to framework mechanisms.

| Quality attribute | Framework mechanism | Design interpretation |
|---|---|---|
| Maintainability | Page Objects, services, constants, DTOs, utilities | Supports localized responsibility, but does not constitute a measured maintenance study. |
| Reusability | Fixtures, workflows, services, data helpers | Supported by source structure and reusable object provisioning. |
| Readability | Scenario-level tests and named methods | Expresses test intent through higher-level abstractions. |
| Reliability | Playwright waits/assertions, retries, cleanup design | Requires execution evidence before pass-rate or flakiness claims. |
| Debuggability | HTML report, JUnit XML, trace-on-retry | Actual artifacts belong to Chapter 5 evaluation evidence. |
| Traceability | Source mapping and execution artifacts | Links design mechanisms to source evidence and later execution artifacts. |

*Table 3.2. Quality attributes mapped to framework design mechanisms.*

## 3.7 Automation Execution Flow

### 3.7.1 UI Automation Flow

The UI execution flow begins with a UI test specification. The test receives reusable objects from fixtures, calls workflow and Page Object methods, interacts with the browser through Playwright-supported abstractions, and performs assertions against visible behavior. Figure 3.9 summarizes this flow.

![Figure 3.9. UI automation execution flow using fixtures, workflows, and Page Objects.](../assets/diagrams/out/ui-test-execution-flow.svg)

*Figure 3.9. UI automation execution flow using fixtures, workflows, and Page Objects.*

The representative update-profile scenario shows this flow in source code. It loads centralized user data, logs in through `LoginWorkflow`, navigates through Page Objects, updates account data, asserts a success message, navigates to the updated profile URL, and verifies the displayed full name [@project_ui_profile_tests_2026; @project_login_workflow_2026; @project_page_objects_2026].

### 3.7.2 API Automation Flow

The API execution flow starts with an API test specification. The test calls a service method, the service builds the request from endpoint constants and URL helpers, the request executes through `APIUtils`, and the test validates status code, response body, response fields, headers, or error handling. Figure 3.10 summarizes the API design flow.

![Figure 3.10. API automation execution flow using service classes and API utilities.](../assets/diagrams/out/api-test-execution-flow.svg)

*Figure 3.10. API automation execution flow using service classes and API utilities.*

The representative public-profile API test demonstrates this structure by calling `UsersService.getUserPublicProfile()`, validating a successful public profile response, validating an invalid username response, and checking profile-link patterns [@project_api_users_tests_2026; @project_users_service_2026]. The API tests therefore remain focused on endpoint behavior rather than repeated request-construction details.

## 3.8 Copilot Agentic-AI Workflow Design for Automation Testing

The project also includes a documented Copilot Agentic-AI workflow for automation testing development. This workflow is a support feature around the Playwright framework, not a replacement for the framework architecture. It is described through project artifacts under `docs/agentic-workflow/`, `.github/`, and `.claude/` [@project_agentic_workflow_2026; @project_copilot_instructions_2026; @project_github_agents_2026; @project_github_prompts_2026; @project_claude_skills_2026].

Figure 3.11 summarizes the automation-testing workflow. It begins with framework understanding, continues into automation scenario design, proceeds to framework-aware Playwright script generation, and ends with code review against framework conventions.

![Figure 3.11. Copilot Agentic-AI workflow for automation test development.](../assets/diagrams/out/copilot-agentic-automation-workflow.svg)

*Figure 3.11. Copilot Agentic-AI workflow for automation test development.*

The workflow reinforces the same design principles as the framework itself. It encourages reuse of existing Page Objects, fixtures, workflows, services, DTOs, constants, and utilities before creating new files. It also supports optional UI inspection when selector behavior or page structure is uncertain. Its review stage focuses on framework structure compliance, selector quality, reuse, duplication, and maintainability.

The available evidence describes the workflow as a documented automation-testing support layer; quantitative productivity, defect-reduction, or reliability evaluation of the workflow is outside the scope of this study and would require a dedicated evaluation method.

