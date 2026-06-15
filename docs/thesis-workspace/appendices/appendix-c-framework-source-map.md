# Appendix C: Framework Source Code Map

This appendix maps the thesis concepts discussed in Chapters 3 and 4 to the main implementation areas of the Playwright and TypeScript automation framework. The map is included as supporting evidence for maintainability and traceability; it is not a replacement for the design and implementation discussion in the main chapters.

| Thesis concept | Primary source area | Role in the framework |
|---|---|---|
| Test specifications | `tests/ui/`, `tests/api/` | Defines executable UI and API scenarios while relying on reusable framework layers for interaction, setup, request execution, and assertions. |
| Page Object Model | `page-object/` | Encapsulates page-level UI behavior (for example, the home, login, profile, account, and bookmark page objects) and keeps browser interaction details outside test specifications. |
| Reusable business workflow | `workflow/` | Composes Page Objects and browser utilities into repeated user actions, especially authenticated login setup. |
| Fixture-based runtime composition | `fixtures/`, `core/fixtures/` | Provides Playwright runtime objects, Page Objects, and workflow objects to tests through typed fixtures. |
| Browser runtime and element utilities | `core/browser/`, `core/element/` | Centralizes access to the active browser and page context, navigation behavior, locator wrapping, waits, and common element operations. |
| API service abstraction | `api-service/` | Encapsulates endpoint-specific API operations so test specifications call service methods rather than constructing low-level requests directly. |
| API request utility | `core/api/` | Provides reusable HTTP request methods and helper capabilities such as JSON schema validation support. |
| Endpoint and file-path constants | `constants/` | Centralizes endpoint paths and file-path references used across services and utilities. |
| Data objects and DTOs | `data-object/` | Represents structured request and response data boundaries used by UI cleanup and API service logic. |
| Static test data | `test-data/` | Stores local account and test data used by the framework; sensitive values remain outside the thesis body. |
| Shared helpers | `utils/` | Loads structured JSON data and constructs API URLs from configured runtime values. |
| Runtime configuration | `config/`, `playwright.config.ts` | Loads environment variables and configures browser/API execution behavior, reporters, timeouts, retries, workers, and trace behavior. |
| Reporting and execution evidence | Playwright report outputs and preserved evidence assets | Provides the reviewed evidence used in Chapter 5 and Appendix D; verified metrics come from preserved artifacts, not from configuration alone. |
| Automation workflow support artifacts | Project Copilot automation-support configuration (instructions, agent and prompt definitions, automation skills) | Documents project-level automation-testing support for scenario design, Playwright script generation, and generated-code review. Private thesis-writing workflow artifacts are excluded from thesis content. |

The source map reflects the framework state used for the approved thesis chapters. Any later source-code changes should be reviewed before the final thesis assembly if they affect a mapped concept or evidence claim.
