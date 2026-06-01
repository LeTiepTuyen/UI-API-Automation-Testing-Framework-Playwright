# Framework Architecture Source Note

## Purpose

This source note organizes repository evidence for explaining the framework architecture. It is not a chapter draft and should not be treated as final thesis prose.

## Architectural Layers

The repository evidence supports a layered architecture:

1. Test specifications: `tests/ui/` and `tests/api/`.
2. UI abstraction layer: `page-object/`.
3. Workflow layer: `workflow/`.
4. Fixture and dependency injection layer: `fixtures/` and `core/fixtures/`.
5. API service layer: `api-service/`.
6. Core utilities: `core/api/`, `core/browser/`, and `core/element/`.
7. Data and configuration: `data-object/`, `constants/`, `test-data/`, `config/`, and `utils/`.
8. Execution and reporting configuration: `playwright.config.ts`.

These layers are directly supported by `README.md`, `docs/project-overview.md`, and `.github/copilot-instructions.md`.

## Separation of Concerns

`.github/copilot-instructions.md` defines the repository convention that UI interactions should be encapsulated in Page Objects, endpoint logic should be placed in API services, fixtures should inject reusable objects into tests, and test data/configuration should be centralized.

The inspected source code follows these conventions in representative areas:

- `tests/ui/profile/update-profile.spec.ts` uses Page Objects and workflow fixtures rather than defining selectors directly in the test.
- `tests/api/users/get-public-profile.spec.ts` calls `UsersService.getUserPublicProfile()` rather than constructing the endpoint request directly in the test.
- `fixtures/custome-fixture.ts` injects Page Objects and `LoginWorkflow`.
- `core/fixtures/base-fixture.ts` initializes browser, page, context, and request references through `BrowserManagement`.

## Reuse-Oriented Design

The framework documents and demonstrates reuse through:

- Page Object classes such as `HomePage`, `ProfilePage`, and `AccountPage`.
- A reusable `LoginWorkflow` in `workflow/login-workflow.ts`.
- API service classes such as `UsersService` and `PhotosService`.
- Shared endpoint constants in `constants/api-endpoints.ts`.
- Shared JSON and URL helpers in `utils/json.ts` and `utils/api-url.ts`.

## Architecture Claims That Are Supported

- The repository separates UI tests and API tests.
- The repository uses Page Objects for page-level UI interaction.
- The repository uses fixtures to inject reusable test objects.
- The repository uses API service classes to centralize endpoint calls.
- The repository uses a shared core layer for browser, request, API, and element utilities.

## Evidence Gaps

- The architecture diagram still needs to be reviewed against the current repository before being inserted into a thesis chapter.
- Claims about scalability, maintainability improvement, or enterprise readiness should be framed as design intentions unless supported by evaluation evidence.
