# Evidence Matrix

This file maps thesis claims to supporting evidence. Codex must update it whenever a new factual or technical claim is introduced.

Status values: `READY`, `NEEDS_EVIDENCE`, `NEEDS_SOURCE`, `REVIEWED`.

---

## Evidence sources

| Source ID | Source type | Location | Notes |
|---|---|---|---|
| SRC-REPO-README | Repository document | `README.md` | Project title, overview, purpose, tech stack, high-level structure, author/supervisor information. |
| SRC-REPO-OVERVIEW | Repository document | `docs/project-overview.md` | Framework summary, core areas, testing scope, design principles. |
| SRC-REPO-COPILOT | Repository document | `.github/copilot-instructions.md` | Current framework rules and conventions. |
| SRC-REPO-PKG | Source config | `package.json` | Playwright, TypeScript-related dependencies, dotenv, Ajv. |
| SRC-REPO-PWCONFIG | Source config | `playwright.config.ts` | Timeout, test directory, parallel execution, CI retries, reporters, base URL, trace settings. |
| SRC-REPO-UI-TESTS | Source code | `tests/ui/` | UI test implementation evidence. |
| SRC-REPO-API-TESTS | Source code | `tests/api/` | API test implementation evidence. |
| SRC-REPO-POM | Source code | `page-object/` | Page Object Model implementation evidence. |
| SRC-REPO-FIXTURES | Source code | `fixtures/`, `core/fixtures/` | Fixture and dependency injection evidence. |
| SRC-REPO-WORKFLOW | Source code | `workflow/` | Reusable business-flow abstraction evidence. |
| SRC-REPO-API-SERVICE | Source code | `api-service/` | Service-layer API abstraction evidence. |
| SRC-REPO-CORE | Source code | `core/` | Browser, API, and element utility evidence. |
| SRC-VNUK-TEMPLATE | Thesis template | `docs/final-graduation-thesis-doc/templates/thesis-template-vnuk.md` | Mandatory thesis structure and front-matter guidance. |
| SRC-VNUK-SAMPLE | Thesis sample | `docs/final-graduation-thesis-doc/templates/thesis-truonghavu-vnuk-sample.md` | Completed VNUK chapter organization reference. |
| SRC-PLAYWRIGHT-DUONG | Thesis sample | `docs/final-graduation-thesis-doc/playwright-samples/thesis-playwright-duong-sample.md` | Automation framework thesis structure and implementation/evaluation pattern. |
| SRC-PLAYWRIGHT-BARBAGLIA | Thesis sample | `docs/final-graduation-thesis-doc/playwright-samples/thesis-playwright-barbaglia-sample.md` | Playwright E2E automation thesis structure and test automation content pattern. |
| SRC-PLAYWRIGHT-DOCS | Official documentation | To be added | Playwright official docs for framework features. |
| SRC-ISTQB | Official/academic testing source | To be added | Testing terminology and automation theory. |

---

## Claim-to-evidence traceability

| Claim ID | Thesis section | Claim | Evidence source(s) | Status | Notes |
|---|---|---|---|---|---|
| C-001 | Ch.1 | The project is a Playwright + TypeScript automation framework for Unsplash UI and API testing. | SRC-REPO-README, SRC-REPO-OVERVIEW | READY | Verify final wording against README and overview. |
| C-002 | Ch.1 | The framework supports UI and API test automation, reusable Page Objects, workflows, API services, DTOs, test data, and utilities. | SRC-REPO-README, SRC-REPO-OVERVIEW, SRC-REPO-COPILOT | READY | Use as core project contribution. |
| C-003 | Ch.2 | Modern test automation improves repeatability and regression efficiency but does not remove the need for manual judgment. | SRC-ISTQB, SRC-PLAYWRIGHT-BARBAGLIA, SRC-PLAYWRIGHT-DUONG | NEEDS_SOURCE | Add official/academic citation. |
| C-004 | Ch.2 | E2E tests validate integrated behavior from a user perspective but can be expensive and should be selected carefully. | SRC-ISTQB, SRC-PLAYWRIGHT-BARBAGLIA, SRC-PLAYWRIGHT-DUONG | NEEDS_SOURCE | Add official/academic citation. |
| C-005 | Ch.2 | Playwright provides browser automation and test execution features suitable for UI and API testing. | SRC-PLAYWRIGHT-DOCS, SRC-REPO-PKG, SRC-REPO-PWCONFIG | NEEDS_SOURCE | Add official Playwright docs. |
| C-006 | Ch.3 | The proposed framework uses a layered architecture separating tests, Page Objects, workflows, API services, core utilities, data, and configuration. | SRC-REPO-README, SRC-REPO-OVERVIEW, SRC-REPO-COPILOT | READY | Add architecture figure. |
| C-007 | Ch.3 | UI interactions should be encapsulated in Page Object classes. | SRC-REPO-COPILOT, SRC-REPO-POM, SRC-REPO-UI-TESTS | READY | Use code examples. |
| C-008 | Ch.3 | API endpoint logic should be placed in service classes rather than duplicated inside tests. | SRC-REPO-COPILOT, SRC-REPO-API-SERVICE, SRC-REPO-API-TESTS | READY | Use UsersService as example. |
| C-009 | Ch.4 | The Playwright configuration uses `tests` as the test directory, HTML and JUnit reporters, retries in CI, and trace collection on first retry. | SRC-REPO-PWCONFIG | READY | Include config excerpt or summarized table. |
| C-010 | Ch.4 | API utility methods centralize GET, POST, PUT, and DELETE request execution. | SRC-REPO-CORE | READY | Use `core/api/api.ts`. |
| C-011 | Ch.4 | The UsersService encapsulates public user profile, photos, collections, statistics, and profile update API calls. | SRC-REPO-API-SERVICE | READY | Use `api-service/users-service.ts`. |
| C-012 | Ch.4 | Fixture-based injection provides page objects and workflows to tests. | SRC-REPO-FIXTURES | READY | Use `fixtures/custome-fixture.ts`. |
| C-013 | Ch.5 | The framework successfully executes all selected UI/API tests. | Test execution output | NEEDS_EVIDENCE | Must run tests before writing. |
| C-014 | Ch.5 | The framework reduces repeated manual regression effort. | Test execution output, manual-vs-automation comparison | NEEDS_EVIDENCE | Use cautiously; may be qualitative. |
| C-015 | Ch.5 | External API rate limits can affect API test reliability. | API test code, execution evidence | NEEDS_EVIDENCE | Some tests already handle rate-limit body text. Verify. |

---

## Evidence rules for Codex

- If a claim cannot be linked to a source, mark it `NEEDS_SOURCE` or remove it.
- If a result needs local execution, mark it `NEEDS_EVIDENCE` until the run is complete.
- If a source is a thesis sample, use it for structure and methodology only, not for project-specific claims.
- If a source is external documentation, add it to `references/references.bib` and `citation-register.md`.
- Every figure and table must have an evidence source or a clear note that it is author-created from repository analysis.
