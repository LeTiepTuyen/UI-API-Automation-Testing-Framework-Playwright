# Repository Analysis Notes

## Project identity

The repository implements a Playwright + TypeScript UI and API automation testing framework for Unsplash.

## Key architecture areas

- `tests/ui/`: UI test specifications
- `tests/api/`: API test specifications
- `page-object/`: Page Object classes
- `fixtures/`: custom Playwright fixtures
- `core/fixtures/`: base fixture setup
- `workflow/`: reusable business workflows
- `api-service/`: API service classes
- `core/api/`: reusable API utilities
- `core/browser/`: browser management and utilities
- `core/element/`: element wrapper utilities
- `data-object/`: request/response models
- `constants/`: endpoint paths and constants
- `test-data/`: static test data
- `utils/`: shared helpers

## Implementation examples to cite in thesis

- `playwright.config.ts`: timeout, test directory, parallel execution, retries, HTML/JUnit reporters, trace settings.
- `fixtures/custome-fixture.ts`: injection of Page Objects and workflows.
- `core/api/api.ts`: reusable HTTP methods and JSON schema validation support.
- `api-service/users-service.ts`: API service abstraction for user-related Unsplash endpoints.
- `tests/ui/profile/update-profile.spec.ts`: representative UI flow.
- `tests/api/users/get-public-profile.spec.ts`: representative API suite.

## Missing evidence

- final test execution screenshots
- final pass/fail counts
- final execution time
- final report screenshots
- trace viewer evidence
