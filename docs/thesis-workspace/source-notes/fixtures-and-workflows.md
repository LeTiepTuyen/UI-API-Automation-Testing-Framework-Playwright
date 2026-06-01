# Fixtures and Workflows Source Note

## Purpose

This source note summarizes fixture and workflow evidence for the framework.

## Base Fixture Evidence

`core/fixtures/base-fixture.ts` extends Playwright's base test and defines an automatic `browserFixture`. The fixture receives Playwright's `browser`, `context`, `page`, and `request` objects, then passes them into `BrowserManagement.initializeBrowser()`.

This design provides shared access to the current browser, context, page, and API request context through `core/browser/browser-management.ts`.

## Custom Fixture Evidence

`fixtures/custome-fixture.ts` extends the base fixture and injects reusable Page Objects and workflow objects into tests. The injected objects include:

- `HomePage`
- `LoginPage`
- `ProfilePage`
- `AccountPage`
- `LoginWorkflow`
- `LikePage`
- `CollectionPage`
- `BookmarkPage`

The fixture exports `test` and `expect`, allowing UI and API specs to import from the project fixture layer.

## Workflow Evidence

`workflow/login-workflow.ts` defines `LoginWorkflow`. It composes:

- `LoginPage`
- `HomePage`
- `BrowserUtils`

The `login()` method navigates to `/login`, performs login through the login page, and waits for the home page avatar image to load. This provides a reusable business-flow abstraction for tests that require authenticated user context.

## Browser Utility Evidence

`core/browser/browser-management.ts` stores the current Playwright browser, browser context, page, and API request context after fixture initialization. `core/browser/browser-utils.ts` uses `BrowserManagement.getCurrentPage()` to navigate.

## Design Implications

The fixture and workflow layers support:

- dependency injection of reusable Page Objects;
- centralized initialization of Playwright runtime objects;
- reuse of login behavior across UI tests;
- connection between UI tests and API utilities through the shared request context.

## Evidence Gaps

- The fixture setup is source evidence only. Runtime stability requires test execution evidence.
- The repository currently shows one inspected workflow, `LoginWorkflow`; broader workflow coverage should not be claimed without additional source inspection.
