# Chapter 3: System Analysis and Framework Design

## 3.1 Current Testing Context

The system selected for this graduation project is the Unsplash web application and its public API. The repository is organized as a Playwright and TypeScript automation framework that supports both browser-based UI testing and API-level validation for selected Unsplash user flows. The project documents describe the framework as a reusable automation structure rather than a collection of isolated scripts, with source areas dedicated to test specifications, Page Objects, fixtures, workflows, API services, data objects, constants, configuration, and shared utilities.

The testing context is suitable for a graduation automation framework because the target application exposes both visible user interactions and service-level endpoints. UI testing is represented through profile-related flows under `tests/ui/profile/`, while API testing is represented through user endpoint tests under `tests/api/users/`. This gives the project a clear basis for discussing a combined UI and API automation strategy. However, the available evidence supports only selected Unsplash scenarios. The framework should therefore be described as representative coverage for chosen user and API flows, not as complete coverage of the entire Unsplash platform.

The framework design also includes a documented Copilot Agentic-AI workflow for automation testing development. This workflow is described in project files under `docs/agentic-workflow/`, `.github/`, and `.claude/`. Its role is to support repository understanding, automation scenario design, Playwright script generation, and automation code review while preserving the existing framework structure. It is treated in this thesis as a project feature that supports automation testing work, not as a replacement for the Playwright framework itself.

## 3.2 Requirements Analysis

The framework requirements are derived from the repository purpose, the existing folder structure, representative UI/API tests, and the project workflow documentation. The design problem is not only to automate browser and API requests, but also to keep the automation maintainable as scenarios are added. For that reason, the requirements emphasize separation of concerns, reuse, traceability, and clear placement of responsibilities across framework layers.

### 3.2.1 Functional Requirements

The first functional requirement is to execute UI automation for selected Unsplash user-facing flows. The inspected UI evidence includes profile-related tests and Page Object interactions. These flows require browser navigation, login support, profile page interaction, account update behavior, and assertions against visible UI state.

The second functional requirement is to execute API automation for selected public user endpoints. The inspected API evidence includes public profile validation, invalid username handling, link validation, and service methods for user photos, collections, and statistics. API endpoint construction should be centralized in service classes and constants rather than duplicated directly in test files.

The third requirement is to support reusable Page Objects for UI interaction. UI test files should consume page-level methods rather than defining selectors and low-level browser actions directly inside each scenario. This requirement is supported by Page Object files under `page-object/` and by repository guidance in `.github/copilot-instructions.md`.

The fourth requirement is to support reusable workflow abstractions for multi-step user flows. The current source evidence includes `workflow/login-workflow.ts`, which composes login and home page behavior for authenticated UI scenarios. The workflow layer reduces repeated setup logic in UI tests.

The fifth requirement is to support fixture-based dependency injection. Fixtures should initialize shared Playwright runtime objects and provide reusable Page Objects and workflows to tests. The current repository uses `core/fixtures/base-fixture.ts` and `fixtures/custome-fixture.ts` for this purpose.

The sixth requirement is to support service-layer API abstractions. API test files should call service methods such as `UsersService.getUserPublicProfile()` instead of constructing endpoint requests directly. This supports reuse, consistent authorization handling, and clearer test intent.

The seventh requirement is to centralize test data, constants, DTOs, and configuration. Source evidence shows endpoint constants in `constants/api-endpoints.ts`, static user data location in `constants/file-paths.ts`, JSON loading in `utils/json.ts`, and environment-based URL construction in `playwright.config.ts` and `utils/api-url.ts`.

The eighth requirement is to configure reporting and debugging support. The Playwright configuration defines HTML and JUnit reporters, Chromium execution, trace collection on first retry, timeouts, and CI-specific retry/worker behavior. These are configuration-level capabilities; actual generated report and trace artifacts still require verified execution evidence.

The ninth requirement is to support a project-level Copilot Agentic-AI workflow for automation test development. The workflow should guide scenario design, framework-aware script generation, repository inspection, optional Playwright MCP-based UI inspection, and generated-code review. This requirement is grounded in `docs/agentic-workflow/workflow-overview.md`, `.github/AGENTS.md`, `.github/copilot-instructions.md`, custom agent files, prompt files, reusable skills, and the project workflow source note.

### 3.2.2 Non-Functional Requirements

Maintainability is a core non-functional requirement. The framework should place UI interaction logic in Page Objects, API endpoint logic in service classes, setup and object injection in fixtures, shared flows in workflows, and test data/configuration in centralized files. This structure reduces the need to update many test files when a common interaction or endpoint changes.

Reusability is required because UI and API scenarios share common setup, data, and helper behavior. Reusable Page Objects, workflows, service methods, DTOs, constants, and utilities allow additional test cases to be added without duplicating framework logic.

Readability is required so that test specifications communicate business intent. Test files should remain focused on scenario flow and assertions, while lower-level implementation details are delegated to supporting layers.

Scalability is a design intention of the framework. The folder structure separates UI tests, API tests, Page Objects, services, and utilities in a way that can support more scenarios. This thesis does not claim measured scalability because large-scale execution evidence has not yet been collected.

Reliability is also a design requirement. The framework uses reusable selectors and Page Object methods for UI automation, API services for endpoint consistency, and Playwright configuration for retries and trace collection. Runtime reliability, pass rate, and flakiness still require actual execution evidence.

Debuggability is supported through reporting and trace configuration. The project is configured for HTML reporting, JUnit XML output, and trace collection on first retry. These settings support future investigation of failures, but verified report screenshots and trace artifacts are part of the later evaluation evidence gate.

Extensibility is required so future QA engineers can add new UI pages, workflows, API services, or DTOs in established locations. The repository-wide Copilot workflow also reinforces this requirement by instructing automation generation to inspect and reuse existing assets before creating new artifacts.

## 3.3 System Under Test

The system under test consists of selected Unsplash web UI flows and public API user endpoints. The UI scope is represented by profile-related tests under `tests/ui/profile/`. The project overview identifies practical end-to-end coverage such as viewing photographer profiles, updating user profile information, and listing liked photos. The inspected update-profile scenario uses authenticated UI interaction, page navigation, profile editing, form submission, and profile validation.

The API scope is represented by user endpoint tests under `tests/api/users/`. The inspected public profile test validates successful retrieval for a valid username, error behavior for an invalid username, and URL patterns in profile links. The `UsersService` source also provides methods for listing user photos, listing user collections, retrieving user statistics, and updating the current user profile.

The selected system scope is intentionally limited. The repository does not provide evidence for full coverage of every Unsplash feature, full security testing, performance testing, accessibility testing, or visual regression testing. These limitations should remain visible in later evaluation and conclusion chapters.

## 3.4 Proposed Framework Architecture

The proposed architecture is layered to separate test intent from implementation details. Figure 3.1 summarizes the relationship between the major framework areas.

![Figure 3.1. Layered architecture of the Playwright UI and API automation framework.](../assets/diagrams/out/framework-architecture.svg)

*Figure 3.1. Layered architecture of the Playwright UI and API automation framework.*

At the top of the architecture are test specifications under `tests/ui/` and `tests/api/`. These files describe the scenarios to execute and the assertions to verify. UI test files focus on browser-based user flows, while API test files focus on endpoint behavior and response validation.

The UI abstraction layer is implemented through Page Objects under `page-object/`. This layer encapsulates page-level locators and user actions. For example, profile-related tests can use methods from home, profile, and account Page Objects rather than placing raw selectors directly inside the test scenario.

The workflow layer is represented by reusable business flows under `workflow/`. The inspected `LoginWorkflow` composes login and home page behavior to support authenticated scenarios. This layer is useful when a sequence spans multiple pages or repeated setup steps.

The fixture layer, implemented under `fixtures/` and `core/fixtures/`, initializes shared Playwright objects and injects reusable Page Objects and workflows into tests. This design allows tests to consume ready-to-use objects while keeping initialization logic centralized.

The API service layer is implemented under `api-service/`. It centralizes endpoint access for API tests and hides request construction behind service methods. The `UsersService` source provides a representative example because it encapsulates public profile, photos, collections, statistics, and profile update calls.

The shared core layer contains browser, API, element, and fixture utilities. `core/api/api.ts` centralizes HTTP methods such as GET, POST, PUT, and DELETE. `core/browser/` manages browser, context, page, request context, and navigation utilities. `core/element/element.ts` provides an element wrapper abstraction.

The data and configuration layer contains DTOs, test data, endpoint constants, file path constants, environment configuration, and shared helpers. This includes `data-object/`, `constants/`, `test-data/`, `config/`, and `utils/`. Keeping these files separate from tests improves reuse and reduces hardcoded environment or endpoint values.

The execution and reporting layer is defined primarily in `playwright.config.ts`. The current configuration sets the test directory, Chromium project, timeout values, parallel execution, CI-specific retry behavior, HTML reporting, JUnit XML output, and trace collection on first retry. This is configuration evidence only; successful runtime generation of reports and traces remains an evaluation task.

## 3.5 UI Automation Design

The UI automation design follows the Page Object Model and fixture-based test composition. Test specifications should express the user scenario at a readable level, while Page Objects contain page-specific selectors and actions. This reduces duplication and allows UI interaction changes to be localized in the relevant Page Object.

Figure 3.2 presents the UI execution flow from a test specification through fixtures, workflows, Page Objects, browser utilities, and assertions.

![Figure 3.2. UI automation execution flow using fixtures, workflows, and Page Objects.](../assets/diagrams/out/ui-test-execution-flow.svg)

*Figure 3.2. UI automation execution flow using fixtures, workflows, and Page Objects.*

The inspected update-profile scenario demonstrates this design. The test loads user data through `JsonHelper.getUserInfo('valid_account')`, logs in through `loginWorkflow.login()`, navigates through home page actions, opens the profile edit page through `profilePage.clickEditProfileButton()`, updates the username through account page methods, submits the form, checks the success message, navigates to the updated profile URL, and verifies the displayed full name.

The test does not directly construct Page Object instances. Instead, it consumes objects injected by `fixtures/custome-fixture.ts`, such as `homePage`, `profilePage`, `accountPage`, and `loginWorkflow`. This keeps test setup consistent and makes scenario code easier to read.

The design also shows a connection between UI automation and API support. The inspected update-profile test resets the username in `test.afterEach()` by calling `UsersService.updateCurrentUserProfile()`. This is useful as a design pattern because API support can help restore test data after a UI scenario changes application state. The effectiveness of cleanup still requires execution evidence, so it should be discussed as a design mechanism rather than a verified reliability result.

## 3.6 API Automation Design

The API automation design separates endpoint interaction from test assertions. API tests under `tests/api/` call service classes under `api-service/`, which in turn use endpoint constants, URL helpers, authorization headers, and core API utilities.

Figure 3.3 shows the API execution flow from a test specification through service classes and shared API utilities.

![Figure 3.3. API automation execution flow using service classes and API utilities.](../assets/diagrams/out/api-test-execution-flow.svg)

*Figure 3.3. API automation execution flow using service classes and API utilities.*

The inspected `UsersService` source centralizes user endpoint access through methods such as `getUserPublicProfile()`, `listUserPhotos()`, `listUserCollections()`, `getUserStatistics()`, and `updateCurrentUserProfile()`. Endpoint paths are imported from `constants/api-endpoints.ts`, and API URLs are composed through `utils/api-url.ts` using the configured API base URL. This avoids scattering endpoint path strings across API test files.

The core API utility layer in `core/api/api.ts` defines reusable methods for GET, POST, PUT, and DELETE requests. These methods use the Playwright request context stored by `BrowserManagement`. The same utility file includes helpers for security-header checks and JSON schema validation through Ajv. The existence of these helpers supports describing available framework utilities, but it does not prove broad schema-validation coverage unless specific tests use them.

The representative public profile API test validates a successful response for a valid username, a 404 response for an invalid username, and URL patterns in returned profile links. It also includes handling for rate-limit response text. This rate-limit handling is source evidence that the test considers public API constraints, but actual rate-limit occurrence and its effect on execution require runtime evidence.

## 3.7 Fixture and Dependency Injection Design

Fixtures are a central design mechanism in the framework because they connect Playwright runtime objects to reusable framework abstractions. The base fixture in `core/fixtures/base-fixture.ts` extends Playwright's test fixture and initializes shared references to the browser, context, page, and request objects through `BrowserManagement.initializeBrowser()`.

The custom fixture in `fixtures/custome-fixture.ts` extends the base fixture and injects Page Objects and workflows into tests. The injected objects include home, login, profile, account, like, collection, and bookmark Page Objects, as well as the login workflow. This enables tests to import `test` and `expect` from the project fixture layer and receive framework-specific objects as test parameters.

This dependency injection design supports readability and reuse. Test files do not need to repeat object construction, and future Page Object or workflow additions can follow the same fixture pattern. The design also helps keep runtime initialization in one place, although actual runtime stability still depends on execution evidence collected later.

## 3.8 Test Data and Configuration Design

The framework centralizes configuration and test data to reduce hardcoded values in tests. The Playwright configuration loads environment variables from `config/.env` and uses `process.env.BASE_URL` as the browser base URL. API URL construction is handled separately in `utils/api-url.ts`, which uses `process.env.API_BASE_URL`.

Static user data is stored under `test-data/user-info.json`, with the path centralized through `constants/file-paths.ts`. The `JsonHelper.getUserInfo()` utility reads this data for representative UI and API tests. The thesis should cite the existence and location of this data source without exposing account credentials, access tokens, or runtime environment values.

Endpoint paths are centralized in `constants/api-endpoints.ts`. This file includes paths for public user profile, user photos, user collections, user statistics, random photos, like/unlike operations, and current profile update. Centralizing endpoint constants helps API services remain consistent and reduces duplication in test files.

DTOs and response models are stored under `data-object/`. The inspected update-profile UI test imports `UpdateUserProfileRequestData` for profile reset behavior, and the repository also includes response data models such as photo response data. This supports a framework design in which request and response structures can be represented separately from test logic.

## 3.9 Reporting and Debugging Design

The reporting and debugging design is grounded in `playwright.config.ts` and repository execution notes. The configuration defines `./tests` as the test directory, a Chromium project using desktop Chrome device settings, full parallel execution, global and action timeouts, CI-specific retry behavior, and CI-specific worker configuration.

The same configuration enables the Playwright HTML reporter and the JUnit reporter with `results.xml` as the output file. It also configures trace collection with `trace: 'on-first-retry'`. These settings are important for debugging because they define how the framework is expected to produce execution artifacts and failure-investigation evidence.

At this stage, the thesis may state that the framework is configured for HTML reporting, JUnit XML output, and trace collection. It must not claim that a particular report, trace file, pass rate, retry behavior, or execution duration has been verified. NEEDS_EVIDENCE: Chapter 5 must collect actual execution output, generated report evidence, trace artifacts, screenshots, and verified `results.xml` before any evaluation result is finalized.

## 3.10 AI-Assisted Automation Testing Workflow Design

The project includes a documented Copilot Agentic-AI workflow for automation testing development. Its purpose is to help QA engineers use GitHub Copilot in VS Code Agent mode more consistently for repository understanding, UI/API test scenario design, Playwright script generation, and automation code review. The workflow is explicitly designed to wrap around the existing Playwright framework rather than replace it.

Figure 3.4 summarizes the core automation-testing workflow.

![Figure 3.4. Copilot Agentic-AI workflow for automation test development.](../assets/diagrams/out/copilot-agentic-automation-workflow.svg)

*Figure 3.4. Copilot Agentic-AI workflow for automation test development.*

The workflow begins with repository understanding. Project guidance requires automation work to inspect existing tests, Page Objects, fixtures, workflows, API services, core utilities, constants, DTOs, and test data before generating or modifying code. This supports the reuse-first principle already present in the framework architecture.

The scenario design stage is supported by the `DesignTestCase` role and prompt files for UI and API scenario design. The intended output is automation-ready scenario definitions based on user requests, repository context, existing tests, reusable assets, and product behavior. The design focus includes happy paths, negative paths, and meaningful edge cases where practical.

The script-generation stage is supported by the `GenerateTestScript` role and prompt files for UI and API script generation. The documented workflow expects generated automation code to follow existing Page Object, fixture, workflow, service, DTO, constant, utility, and test placement conventions. It also encourages the smallest clean code change needed for the requested scenario.

The workflow includes a preference for Playwright MCP when UI understanding, DOM inspection, selector validation, navigation behavior, or interaction feasibility is uncertain. This preference is relevant to UI automation because selector quality and real page behavior can affect maintainability.

The code-review stage is supported by the `CodeReview` role and review prompt/reference files. The review focus includes framework structure compliance, Page Object quality, fixture integration, selector robustness, missed reuse, duplication, TypeScript readability, and maintainability. This stage is intended to reduce the risk of accepting generated automation code that does not fit the existing framework.

The design evidence supports describing the workflow as a documented support layer for automation testing development. It does not support quantitative claims about productivity improvement, defect reduction, execution reliability, or time savings. NEEDS_EVIDENCE: any evaluation of the workflow's effectiveness must be based on a documented evaluation method and evidence before being included in Chapter 5.

## 3.11 Chapter Summary

This chapter analyzed the current testing context and presented the proposed framework design for the Playwright and TypeScript automation project. The design separates UI tests, API tests, Page Objects, workflows, fixtures, API services, core utilities, data objects, constants, configuration, and reporting setup into distinct responsibilities. This layered structure supports maintainability, reuse, readability, and extensibility as design goals.

The chapter also described the selected Unsplash UI and API scope, including representative profile-related UI scenarios and public user API endpoints. It explained how Page Objects and workflows support UI automation, how service classes and core API utilities support API automation, how fixtures provide dependency injection, and how centralized data/configuration files reduce duplication.

Finally, the chapter introduced the project Copilot Agentic-AI workflow as an automation-testing support feature. The workflow is grounded in repository artifacts and is limited to scenario design, framework-aware script generation, repository-aware reuse, optional Playwright MCP inspection, and code review. Quantitative claims about test execution results or AI workflow effectiveness remain outside the current evidence base and must be addressed only after the relevant evaluation evidence is collected.
