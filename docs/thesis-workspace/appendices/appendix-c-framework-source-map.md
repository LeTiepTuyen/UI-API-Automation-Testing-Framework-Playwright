# Appendix C: Framework Source Code Map

This appendix maps the thesis concepts discussed in Chapters 3 and 4 to the main implementation areas of the Playwright and TypeScript automation framework. The map is included as supporting evidence for maintainability and traceability; it is not a replacement for the design and implementation discussion in the main chapters.

| Thesis concept | Primary source area | Representative files or folders | Role in the framework |
|---|---|---|---|
| Test specifications | `tests/ui/`, `tests/api/` | `tests/ui/profile/*.spec.ts`; `tests/api/users/*.spec.ts` | Defines executable UI and API scenarios while relying on reusable framework layers for interaction, setup, request execution, and assertions. |
| Page Object Model | `page-object/` | `HomePage`, `LoginPage`, `ProfilePage`, `AccountPage`, `BookmarkPage`, `CollectionPage`, `LikePage` classes | Encapsulates page-level UI behavior and keeps browser interaction details outside test specifications. |
| Reusable business workflow | `workflow/` | `workflow/login-workflow.ts` | Composes Page Objects and browser utilities to represent repeated user actions, especially authenticated login setup. |
| Fixture-based runtime composition | `fixtures/`, `core/fixtures/` | `fixtures/custome-fixture.ts`; `core/fixtures/base-fixture.ts` | Provides Playwright runtime objects, Page Objects, and workflow objects to tests through typed fixtures. |
| Browser runtime and element utilities | `core/browser/`, `core/element/` | `core/browser/browser-management.ts`; `core/browser/browser-utils.ts`; `core/element/element.ts` | Centralizes access to active browser/page context, navigation behavior, locator wrapping, waits, and common element operations. |
| API service abstraction | `api-service/` | `api-service/users-service.ts`; `api-service/photos-service.ts` | Encapsulates endpoint-specific API operations so test specifications call service methods rather than constructing low-level requests directly. |
| API request utility | `core/api/` | `core/api/api.ts` | Provides reusable HTTP request methods and available helper capabilities such as JSON schema validation support. |
| Endpoint and file-path constants | `constants/` | `constants/api-endpoints.ts`; `constants/file-paths.ts` | Centralizes endpoint paths and file-path references used across services and utilities. |
| Data objects and DTOs | `data-object/` | Request and response model files, including update-profile request data | Represents structured request/response data boundaries used by UI cleanup and API service logic. |
| Static test data | `test-data/` | `test-data/user-info.json` | Stores local account/test data used by the framework. Sensitive values must remain outside the thesis body. |
| Shared helpers | `utils/` | `utils/json.ts`; `utils/api-url.ts` | Loads structured JSON data and constructs API URLs from configured runtime values. |
| Runtime configuration | `config/`, `playwright.config.ts` | `config/.env`; `playwright.config.ts` | Loads environment variables, configures browser/API execution behavior, reporters, timeouts, retries, workers, and trace behavior. |
| Reporting and execution evidence | Playwright report outputs and thesis evidence assets | `results.xml`; `playwright-report/`; `docs/thesis-workspace/assets/tables/execution-2026-06-03/`; `docs/thesis-workspace/assets/figures/` | Provides reviewed evidence for Chapter 5 and Appendix D. Verified metrics must come from preserved artifacts, not from configuration alone. |
| Automation workflow support artifacts | `docs/agentic-workflow/`, `.github/`, `.claude/` | `docs/agentic-workflow/workflow-overview.md`; `.github/copilot-instructions.md`; `.github/AGENTS.md`; `.github/agents/`; `.github/prompts/`; `.claude/skills/` | Documents project-level automation-testing support for scenario design, Playwright script generation, and generated-code review. Private thesis-writing workflow artifacts are excluded from thesis content. |

The source map reflects the framework state used for the approved thesis chapters. Any later source-code changes should be reviewed before the final thesis assembly if they affect a mapped concept or evidence claim.
