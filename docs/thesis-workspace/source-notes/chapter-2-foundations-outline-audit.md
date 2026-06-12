# Chapter 2 Foundations Outline Audit

## Purpose

This note records the pre-drafting audit for Chapter 2, before writing chapter prose. It evaluates whether the Chapter 2 outline is strong enough for an automation-testing thesis and maps the planned foundations content to repository evidence.

## Superseding Scope Note - 2026-06-04

This audit is historical. It was created when Chapter 2 was planned as a foundations plus framework-patterns chapter. After the user-approved restructuring on 2026-06-04, Chapter 2 is now a Literature Review chapter focused on theoretical background and methodology only. The framework-mechanism diagrams and detailed design topics listed below were moved to Chapter 3: Framework Design.

## T-078 Refinement Note - 2026-06-05

The current Chapter 2 no longer uses the planned framework-mechanism diagrams listed below. It uses source-attributed literature-review prose and four tables: manual/automated testing approaches, manual test case versus automation script representation, automated test case design considerations, and literature-based automation framework concepts. The detailed Page Object Model, fixture/dependency injection, API service abstraction, DTO/data/cleanup, framework quality, and execution-flow diagrams remain in Chapter 3.

## Audit Conclusion

The previous Chapter 2 outline covered the right high-level topics, but it risked being too general for this project. The framework is not only a Playwright test suite; it applies multiple framework engineering mechanisms that should be explained before Chapters 3 and 4:

- Page Object Model for UI abstraction.
- Element wrapper and locator strategy abstraction.
- Fixture-based dependency injection.
- Shared runtime context through browser/page/request management.
- Workflow abstraction for multi-step UI behavior.
- API service-layer abstraction.
- Endpoint constants and API URL construction.
- DTO/request model usage.
- Centralized static test data and JSON loading.
- API-based cleanup after state-changing UI tests.
- API utility support for HTTP methods, security-header checks, and JSON schema validation.
- Reporting, traceability, and evidence boundaries.
- OOP/SOLID-oriented design principles, described carefully without claiming formal compliance.

## Repository Evidence Used

| Technique | Repository evidence | Chapter 2 use |
|---|---|---|
| Page Object Model | `page-object/`, `tests/ui/profile/update-profile.spec.ts` | Explain separation between scenario intent and page interactions. |
| Element abstraction | `core/element/element.ts`, `page-object/account-page.ts`, `page-object/profile-page.ts` | Explain reusable locator/action/wait/assertion helpers. |
| Fixtures and dependency injection | `fixtures/custome-fixture.ts`, `core/fixtures/base-fixture.ts` | Explain reusable object provisioning and setup centralization. |
| Runtime context management | `core/browser/browser-management.ts`, `core/browser/browser-utils.ts` | Explain shared access to page/context/request references after fixture initialization. |
| Workflow abstraction | `workflow/login-workflow.ts` | Explain reusable business-flow composition. |
| API service layer | `api-service/users-service.ts`, `api-service/photos-service.ts` | Explain endpoint and authorization encapsulation. |
| API utilities | `core/api/api.ts` | Explain reusable HTTP methods and validation helpers. |
| DTOs and typed request data | `data-object/request/update-user-profile-request-data.ts` | Explain structured request data. |
| Constants and API URL helpers | `constants/api-endpoints.ts`, `utils/api-url.ts` | Explain centralized endpoint/configuration values. |
| Data-driven inputs | `test-data/user-info.json`, `utils/json.ts` | Explain test data separated from test logic without exposing secrets. |
| Cleanup strategy | `tests/ui/profile/update-profile.spec.ts`, `UsersService.updateCurrentUserProfile()` | Explain API-based cleanup mechanism; effectiveness still requires execution evidence. |
| Reporting and traceability | `playwright.config.ts`, `docs/thesis-workspace/source-notes/reporting-and-execution.md` | Explain configured reports/traces; actual artifacts still require evidence gate. |

## Chapter 2 Outline Strengthening

The strengthened outline should:

1. Keep manual testing versus automation testing as a foundation, but avoid claiming automation replaces manual exploratory testing.
2. Explain UI and API automation as a combined strategy before repository-specific architecture.
3. Treat Page Object Model together with element abstraction, because the repository wraps locator interactions through `Element`.
4. Add a focused section on fixture-based dependency injection and shared runtime context.
5. Add a focused section on API service abstraction and validation support.
6. Add a focused section on DTOs, data-driven inputs, constants, and cleanup.
7. Add quality-attribute mapping so maintainability, reusability, reliability, debuggability, and traceability are linked to framework mechanisms.
8. Keep effectiveness, pass rate, execution time, and cleanup reliability as `NEEDS_EVIDENCE` until Chapter 5.

## Planned Visuals and Tables

| Item | Purpose | Status |
|---|---|---|
| Figure F-11 | Page Object Model and element abstraction responsibility flow. | Rendered; needs source/citation review before insertion. |
| Figure F-16 | Practical workflow for applying Page Object Model in an automation testing project. | Rendered; needs source/citation review before insertion. |
| Figure F-12 | Automation framework concept map and quality-attribute relationships. | Rendered; needs source/citation review before insertion. |
| Figure F-13 | Fixture-based dependency injection and shared runtime context. | Rendered; needs source/citation review before insertion. |
| Figure F-14 | API service abstraction and validation pipeline. | Rendered; needs source/citation review before insertion. |
| Figure F-15 | Test data, DTO, and cleanup strategy. | Rendered; needs source/citation review before insertion. |
| Table 2.1 | Manual testing and automation testing comparison. | Planned. |
| Table 2.2 | Automation framework concepts and project role. | Planned. |
| Table 2.3 | Design patterns and engineering principles. | Planned. |
| Table 2.4 | Quality attributes mapped to framework mechanisms. | Planned. |
| Table 2.5 | Evidence-boundary table for concept claims. | Planned. |

Excluded visual:

| Item | Reason |
|---|---|
| Figure F-01 | The test automation pyramid concept is useful as short context, but it is not important enough for a standalone Chapter 2 diagram. Cover it through prose or a compact list/table only. |

Screenshot and external visual note:

Chapter 2 should not rely on screenshots for its core explanation. It should use academic/professional sources, tables, and the selected framework-mechanism diagrams. Any external model image, benchmark chart, or copied source visual must be reviewed through `visual-evidence-register.md`, `citation-register.md`, and `references/references.bib` before use. Prefer an original thesis table with citation over a screenshot of another source's table.

## Evidence Boundaries

- Do not claim the UI/API tests pass before a verified execution run.
- Do not claim schema-validation coverage from the existence of `APIUtils.verifyJsonSchema()` alone.
- Do not claim cleanup effectiveness from source structure alone.
- Do not claim formal SOLID compliance without a focused code audit.
- Do not expose credential, token, access key, or runtime environment values.
- Do not cite thesis samples as evidence for this project's implementation.
