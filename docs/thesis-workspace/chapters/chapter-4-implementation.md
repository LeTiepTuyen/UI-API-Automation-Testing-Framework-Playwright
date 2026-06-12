# Chapter 4: Implementation

## 4.1 Implementation Environment and Configuration

The implementation is organized as a Playwright and TypeScript automation framework. The package manifest defines `@playwright/test`, `playwright`, TypeScript-related Node typings, `dotenv`, and `ajv` as the main dependencies used for browser automation, API request support, environment-variable loading, and JSON-schema validation utilities [@project_package_json_2026]. The project documentation describes direct command-line execution through `npm install`, `npx playwright test`, `npx playwright test --headed`, `npx playwright test --debug`, and `npx playwright show-report`. Because the current package manifest does not define npm script aliases, the implementation is described through these direct Playwright commands rather than through project-specific script names [@project_readme_2026; @project_package_json_2026].

The central configuration is implemented in `playwright.config.ts`. It loads environment variables from `config/.env`, uses `process.env.BASE_URL` as the browser base URL, and works with `utils/api-url.ts`, which constructs API URLs from `process.env.API_BASE_URL` [@project_playwright_config_2026; @project_data_constants_utils_2026]. The thesis records these mechanisms at the configuration and variable-name level only. It does not disclose runtime values, access tokens, client identifiers, or credential data.

The Playwright configuration sets `testDir: './tests'`, so both UI and API specifications are discovered under the shared test directory. It defines a Chromium project with Playwright's desktop Chrome device settings, a global timeout of `10 * 60 * 1000`, an action timeout of `10 * 1000`, full parallel execution, CI-only `forbidOnly`, two retries in CI, and a single worker in CI [@project_playwright_config_2026; @playwright_docs_configuration_2026]. These settings describe implementation configuration; they should not be interpreted as measured reliability or performance results.

## 4.2 Implemented Framework Organization

The implemented framework follows the layered design introduced in Chapter 3, but Chapter 4 focuses on the concrete source organization rather than re-explaining the design theory. UI and API test specifications are implemented under `tests/ui/` and `tests/api/`. UI interaction logic is implemented in Page Object classes under `page-object/`, reusable business flows are implemented under `workflow/`, and fixture definitions are implemented under `fixtures/` and `core/fixtures/` [@project_ui_profile_tests_2026; @project_api_users_tests_2026; @project_page_objects_2026; @project_login_workflow_2026; @project_custom_fixture_2026].

API-related implementation is separated into service classes under `api-service/`, endpoint constants under `constants/`, request and response models under `data-object/`, and reusable request utilities under `core/api/`. Browser runtime utilities and element wrappers are implemented under `core/browser/` and `core/element/`, while shared helpers for JSON loading and API URL construction are placed under `utils/` [@project_users_service_2026; @project_photos_service_2026; @project_api_utils_2026; @project_browser_element_utils_2026; @project_data_constants_utils_2026]. This organization allows test specifications to focus on scenario behavior while reusable framework components handle interaction, request construction, runtime access, and data management.

Figure 4.1 provides a development-environment view of the implemented test organization. The VS Code Test Explorer shows the API and UI test specifications grouped under the shared `tests` directory, while the Playwright panel exposes tooling actions such as locator picking, recording, report output access, and trace-viewer settings. The figure is included as implementation-context evidence only; it does not replace the verified execution results presented in Chapter 5.

![Figure 4.1](../assets/figures/vscode-test-explorer-playwright-panel.png)

*Figure 4.1. VS Code Test Explorer and Playwright panel showing the implemented API and UI test organisation.*

## 4.3 Runtime and Utility Implementation

The runtime utility layer provides the shared operational support used by both UI and API tests. `core/browser/browser-management.ts` stores references to the active Playwright browser, browser context, page, and API request context after fixture initialization. This allows browser utilities, element wrappers, and API utilities to access the active runtime objects through a single framework utility layer [@project_browser_element_utils_2026; @project_custom_fixture_2026].

The fixture implementation makes these runtime objects and reusable abstractions available to tests. The custom fixture extends the base fixture and injects `HomePage`, `LoginPage`, `ProfilePage`, `AccountPage`, `LoginWorkflow`, `LikePage`, `CollectionPage`, and `BookmarkPage` into test functions [@playwright_docs_fixtures_2026; @project_custom_fixture_2026]. This implementation matches the runtime composition design discussed in Chapter 3 while keeping Chapter 4 focused on how the mechanism is realized in source code.

Two utility implementations are especially relevant to the representative scenarios. First, `core/element/element.ts` wraps Playwright locator access and common element operations, including clicks, fills, visibility waits, text retrieval, attribute access, and visibility assertions [@playwright_docs_locators_2026; @project_browser_element_utils_2026]. Second, `core/api/api.ts` implements reusable `get()`, `post()`, `put()`, and `delete()` methods through the active Playwright request context [@playwright_docs_apirequestcontext_2026; @project_api_utils_2026]. The same API utility also contains helper methods for security-header checks and JSON-schema validation through Ajv. These helpers are available in the framework, but the implementation should not be described as broad security or schema-validation coverage unless specific test evidence supports that claim.

## 4.4 UI Automation Implementation

The UI automation implementation is represented most clearly by the profile-related specifications under `tests/ui/profile/`. These tests use fixture-injected Page Objects and workflows rather than constructing page abstractions directly inside each specification [@project_ui_profile_tests_2026; @project_custom_fixture_2026; @project_page_objects_2026]. The implemented Page Object layer includes representative classes such as `HomePage`, `LoginPage`, `ProfilePage`, and `AccountPage`, with additional page abstractions such as `LikePage`, `CollectionPage`, and `BookmarkPage` made available through fixtures for related profile and photo interactions.

The login workflow is implemented in `workflow/login-workflow.ts`. It composes `LoginPage`, `HomePage`, and `BrowserUtils` to navigate to the login page, submit credentials through the login page abstraction, and wait for the home page avatar image to become visible [@project_login_workflow_2026; @project_page_objects_2026; @project_browser_element_utils_2026]. This implementation turns a repeated authenticated setup sequence into a reusable workflow that can be consumed by tests through fixture injection.

The update-profile scenario provides the most complete UI implementation example. The test loads user data through `JsonHelper.getUserInfo('valid_account')`, logs in through `loginWorkflow.login()`, navigates to the user profile through `HomePage`, opens the edit-profile page through `ProfilePage`, changes the username through `AccountPage`, submits the form, and checks that the update success message is visible [@project_ui_profile_tests_2026]. After the UI state change, the test navigates to the updated profile URL through `BrowserUtils.navigate()` and verifies the visible profile full name against the account first and last name. This demonstrates how the implementation combines fixture injection, Page Objects, workflow reuse, shared test data, browser navigation, and UI assertions in one representative scenario.

The same test defines an `afterEach` cleanup hook. It creates an `UpdateUserProfileRequestData` object, restores the original username, and calls `UsersService.updateCurrentUserProfile()` with the access token loaded from centralized user data [@project_ui_profile_tests_2026; @project_users_service_2026; @project_data_constants_utils_2026]. This is implementation evidence of API-assisted cleanup after a state-changing UI scenario. Its long-term reliability should be discussed only through evaluation evidence rather than inferred from the source code alone.

## 4.5 API Automation Implementation

The API automation implementation is represented by user endpoint tests under `tests/api/users/` and service classes under `api-service/`. `UsersService` centralizes public user profile retrieval, user photos, user collections, user statistics, and current-user profile update operations. Endpoint paths are imported from `constants/api-endpoints.ts`, and full URLs are constructed through `utils/api-url.ts` [@project_users_service_2026; @project_data_constants_utils_2026]. `PhotosService` follows the same service-oriented style for retrieving random photos and performing like or unlike operations [@project_photos_service_2026; @project_api_utils_2026].

The service implementation also centralizes public-read authorization behavior. When an access token is provided, `UsersService` uses bearer-token authorization. When an access token is not supplied, it attempts to use an Unsplash access key or client identifier from environment variables. The thesis describes this mechanism only as an implementation pattern and does not disclose token or key values.

The representative API specification is `tests/api/users/get-public-profile.spec.ts`. It imports `UsersService`, reads an access token from centralized user data, and calls `UsersService.getUserPublicProfile()` [@project_api_users_tests_2026; @project_users_service_2026; @project_data_constants_utils_2026]. The test validates a successful public profile response, an invalid-username `404` response, and expected URL patterns in profile links. It also contains source-level handling for public API rate-limit text. This supports describing how the API suite is implemented around service methods and response assertions, while actual pass/fail results remain part of the Chapter 5 evaluation evidence.

## 4.6 Reporting and Debugging Configuration

Reporting and debugging support is implemented through Playwright configuration and documented execution commands. The configuration enables the Playwright HTML reporter, a JUnit reporter with `results.xml` as the configured output file, and trace collection on first retry [@project_playwright_config_2026; @playwright_docs_reporters_2026; @playwright_docs_trace_viewer_2026]. The README documents `npx playwright show-report` for viewing the generated HTML report after execution [@project_readme_2026].

Figure 4.2 summarizes the reporting pipeline as an implementation-level configuration mechanism.

![Figure 4.2](../assets/diagrams/out/playwright-reporting-pipeline.svg)

*Figure 4.2. Playwright execution and reporting pipeline.*

The figure should be interpreted as configuration evidence rather than as an evaluation result. Verified execution evidence from the 2026-06-03 local full-suite run is presented in Chapter 5, including the HTML report screenshot and JUnit XML evidence [@execution_test_run_2026; @execution_html_report_2026; @execution_junit_results_2026]. Because the full-suite run passed without retry, it did not produce a trace under the configured `trace: 'on-first-retry'` setting. A supplemental trace zip exists for one representative UI run; the supplemental trace artifact has been loaded, sanitised, and is presented as Figure 5.4 in Chapter 5 and referenced in Appendix D [@execution_trace_artifacts_2026].

## 4.7 Copilot-Supported Automation Workflow Implementation

The project also implements a documentation-driven Copilot Agentic-AI workflow that supports automation testing development. This workflow is represented by project artifacts under `docs/agentic-workflow/`, `.github/`, and `.claude/`; it supports repository understanding, automation-ready scenario design, framework-aware Playwright script generation, and generated-code review [@project_agentic_workflow_2026; @project_copilot_instructions_2026; @project_github_agents_2026; @project_github_prompts_2026; @project_claude_skills_2026]. This section treats the workflow as a support layer around the Playwright framework, not as evidence of measured productivity improvement or defect reduction.

The repository-wide instruction layer is implemented through `.github/copilot-instructions.md`, which records framework conventions such as the reuse-first policy, Page Object expectations, fixture usage, workflow placement, API service rules, test file placement, naming guidance, and Playwright MCP preference when UI understanding or selector validation is uncertain [@project_copilot_instructions_2026]. The agent and prompt layers are implemented through `.github/AGENTS.md`, `.github/agents/`, and `.github/prompts/`, including scenario-design, script-generation, and generated-code review entry points [@project_github_agents_2026; @project_github_prompts_2026].

Figure 4.3 shows the implemented workflow for framework-aware script generation.

![Figure 4.3](../assets/diagrams/out/copilot-script-generation-workflow.svg)

*Figure 4.3. Copilot-supported Playwright script-generation workflow.*

The reusable skill layer is stored under `.claude/skills/`. The `playwright-mcp` skill supports browser and DOM inspection, the `script-generation` skill supports framework-aware generation guidance, the `design-test-case` skill supports automation scenario design, and the `code-review` folder contains review references for maintainability, Page Object quality, and selector quality [@project_claude_skills_2026]. Figure 4.4 summarizes the generated-code review workflow.

![Figure 4.4](../assets/diagrams/out/copilot-code-review-workflow.svg)

*Figure 4.4. Copilot-supported automation code-review workflow.*

The implementation evidence is strongest for the generated-code review workflow in `.github/AGENTS.md`, `.github/prompts/review-generated-script.prompt.md`, and the reference materials under `.claude/skills/code-review/references/`. The source note records a documentation consistency risk in `.claude/skills/code-review/SKILL.md`, whose main content appears less aligned with the folder name than its reference files. For this reason, the thesis describes the workflow as a documented support mechanism and avoids claims about quantitative effectiveness, quality improvement, or execution reliability without a separate evaluation method.
