# Copilot Instructions for Unsplash UI & API Automation Testing Framework

You are working in the ** UI & API Automation Testing Framework** repository.

This repository is a **Playwright + TypeScript automation framework** for both **UI testing** and **API testing**.  
All generated or updated code must strictly follow the existing framework structure, conventions, and reusable patterns already present in the workspace.

---

## 1. Core Working Principles

- Always understand the existing project structure before generating new code.
- Always search for and reuse existing code before creating new files.
- Never generate isolated or ad-hoc Playwright code that ignores the current framework structure.
- Prefer consistency, maintainability, and reuse over speed.
- Do not introduce a new pattern when an existing pattern already works in the project.
- Keep all code aligned with the current **Page Object Model**, **fixtures**, **workflow**, and **service-layer** design already used in the repository.

---

## 2. Current Project Structure

The repository is organized around the following key areas:

- `tests/ui/` → UI test specifications
- `tests/api/` → API test specifications
- `page-object/` → Page Object classes
- `fixtures/` and `core/fixtures/` → Playwright fixtures
- `workflow/` → reusable business workflows
- `api-service/` → API service classes
- `core/` → browser, API, and element wrapper utilities
- `data-object/` → DTOs / test data models
- `test-data/` → static test data
- `constants/` → centralized constants
- `config/` → environment and runtime configuration
- `utils/` → shared utilities

Before generating any script, inspect these folders first and identify anything that can be reused.

## 2.1 GitHub Repository and Project Board

Use these as the canonical GitHub references for this project:

- Repository name: `UI-API-Automation-Testing-Framework-Playwright`
- Repository URL: https://github.com/LeTiepTuyen/UI-API-Automation-Testing-Framework-Playwright
- Project board name: `Graduation-Project-Automation-Testing-Framework`
- Project board URL: https://github.com/users/LeTiepTuyen/projects/3
- Default repository linked to the project board: `UI-API-Automation-Testing-Framework-Playwright`

When creating or reviewing phases, issues, branches, or board items, keep them aligned with these GitHub references.

GitHub action preference:

- Prefer GitHub MCP server actions whenever they are available for issue, branch, project board, and pull request operations.
- Use browser or manual GitHub UI actions only when the required GitHub MCP action is not available.
- After any issue and branch are created for a project board card task, always link the new issue back to the corresponding project board card so the board item is not left as a draft.

---

## 3. Page Object Rules

- All UI interactions must be encapsulated in `page-object/` classes.
- Do not use raw `page.locator(...)`, `page.goto(...)`, `page.click(...)`, or `page.fill(...)` directly inside test files unless there is a very strong existing project exception.
- If navigation is needed, place it inside a Page Object method or a reusable workflow.
- Each Page Object should represent one page, component, or clearly scoped UI function.
- Page Object methods must be action-oriented and reusable.
- If a needed Page Object already exists, extend it instead of creating a duplicate.

### Page Object conventions
- Use one file per page object.
- Use meaningful class names in PascalCase.
- Keep locators as class properties.
- Initialize locators in the constructor when consistent with the existing framework.
- Follow the existing project style if the current framework already has a preferred locator wrapper or base class.

---

## 4. Locator Rules

- All selectors must be robust and unique.
- Prefer stable selectors first:
  - `data-testid`
  - `id`
  - stable `name`
  - stable semantic roles
- Use CSS selectors where possible.
- Use XPath only when CSS is not sufficient or when relationship-based targeting is required.
- If a selector is not unique, refine it using stable parent/child/sibling relationships.
- Validate selectors by running the generated automation in a real browser flow.
- Prefer selectors that are maintainable under moderate UI change.

---

## 5. Fixture Rules

- Use Playwright fixtures to inject Page Objects and reusable helpers into tests.
- Reuse existing fixtures before adding new ones.
- If a new Page Object is introduced and fixture injection is appropriate, update the relevant fixture file instead of bypassing the fixture system.
- Keep fixture additions minimal and aligned with the current framework pattern.

---

## 6. Workflow Rules

- Reuse existing workflow classes from `workflow/` whenever possible.
- If a business flow already exists (for example login or navigation), do not duplicate it inside tests.
- Add a new workflow only if:
  - the flow is reusable,
  - spans multiple pages or components,
  - and is likely to be used in multiple tests.

---

## 7. Test File Rules

- Store UI tests in `tests/ui/` and API tests in `tests/api/`.
- Test file names must be feature-first, kebab-case, and end with `.spec.ts`.
- Prefer UI paths such as `tests/ui/profile/view-profile.spec.ts`, `tests/ui/profile/update-profile.spec.ts`, and `tests/ui/profile/bookmarked-photos.spec.ts`.
- Prefer API paths such as `tests/api/users/get-public-profile.spec.ts`, `tests/api/users/get-statistics.spec.ts`, `tests/api/users/list-collections.spec.ts`, and `tests/api/users/list-photos.spec.ts`.
- Name `test.describe(...)` blocks with the format `UI | <page or flow name>` or `API | <method> <endpoint>`.
- Use numbered `Scenario <n>:` prefixes only when a suite is intentionally ordered and the number improves list scanning.
- Name individual `test(...)` cases with concise business-readable outcomes, such as `returns 200 and public profile data for a valid username` or `displays photographer profile for a valid account`.
- Tests must be independent and runnable in any order.
- Prefer readable, scenario-based test names.
- Keep assertions clear and focused.
- Reuse existing test data and utilities before creating new data sources.
- Do not hardcode sensitive values or environment-specific values in test files.

---

## 8. API Testing Rules

- For API-related test automation, reuse existing classes in `api-service/` and `core/api/` whenever possible.
- Keep endpoint logic in service classes, not in test files.
- If request or response models are needed, place them in `data-object/`.
- Reuse constants from `constants/` instead of hardcoding paths or endpoints.

---

## 9. Reuse-First Policy

Before generating anything new, always check for reusable assets in this order:

1. existing test files in `tests/ui/` and `tests/api/`
2. existing page objects in `page-object/`
3. existing fixtures in `fixtures/` or `core/fixtures/`
4. existing workflow classes in `workflow/`
5. existing API services in `api-service/`
6. existing DTOs and utilities in `data-object/`, `constants/`, and `utils/`

Only create new code when reuse is not practical.

---

## 10. Playwright MCP Preference

- Prefer **Playwright MCP** for browser understanding, DOM inspection, and validating selectors.
- Use Playwright MCP to inspect the actual running UI before finalizing selectors or automation logic.
- Do not rely on guesswork when UI structure can be inspected with Playwright MCP.
- Do not design the workflow around Playwright CLI.

---

## 11. Script Generation Expectations

When generating a new automation script, always follow this general order:

1. Understand the requested scenario
2. Inspect the existing framework and reusable assets
3. Inspect the actual UI/API behavior if needed
4. Reuse or extend existing page objects, fixtures, workflows, and services
5. Generate only the minimal new code required
6. Place files in the correct locations and apply the naming convention for file names, `test.describe(...)`, and `test(...)` titles
7. Validate the script by running it when feasible
8. Refine selectors or structure if the first run reveals issues

---

## 12. Code Quality Expectations

- Keep code professional, readable, and maintainable.
- Avoid duplicated logic.
- Keep imports relative and correct.
- Prefer small, cohesive methods.
- Do not generate unused code, placeholder comments, or speculative abstractions.
- Keep TypeScript typing as strong as practical within the existing framework style.

---

## 13. If Information Is Missing

- If the repository does not provide enough information, say so explicitly.
- Ask for clarification only when necessary.
- Do not invent framework conventions that are not supported by the codebase.
- If multiple implementation options exist, choose the one that best matches the current repository structure.

---

## 14. Final Goal

Your job is to help expand this automation framework safely and professionally.

Every generated artifact must:
- fit the existing framework,
- be reusable,
- be runnable,
- and be easy for future QA engineers to understand and maintain.