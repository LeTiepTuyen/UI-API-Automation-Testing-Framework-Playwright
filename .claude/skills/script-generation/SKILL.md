---
name: script-generation
description: Use this skill whenever the task is to generate or update Playwright automation scripts following the Unsplash framework conventions. This includes creating test files, Page Objects, workflow methods, fixtures, and API service classes that fit the existing framework structure.
---

# Script Generation Skill

This skill guides the generation of Playwright automation code that fits the current project framework.

Use this skill when:
- the user asks to generate a new test file, Page Object, workflow, fixture, or API service
- an existing script needs to be updated or extended
- a designed scenario set needs to be converted to automation code
- a Page Object or test needs to follow the current framework conventions

This skill is not for reviewing existing code.
Its purpose is to produce correct, maintainable, reusable automation scripts.

---

## Core objectives

Generated scripts must be:
- correct and runnable in the existing framework
- aligned with the Page Object Model pattern
- reusing existing framework assets before creating new files
- placed in the correct directory per framework conventions
- type-safe and following TypeScript conventions

---

## Script generation workflow

### 1. Inspect existing framework assets
Before writing any new code:
- check `page-object/` for existing Page Objects for the target feature
- check `workflow/` for reusable workflow patterns
- check `fixtures/` and `core/fixtures/` for relevant test fixtures
- check `api-service/` for existing API service classes
- check `constants/` for relevant constants and test data
- check `data-object/` for relevant DTOs and request/response models

Apply the reuse-first policy: extend or reuse before creating new files.

### 2. Confirm file placement
Determine the correct output location:
- UI test files → `tests/ui/`
- API test files → `tests/api/`
- Page Object classes → `page-object/`
- Reusable workflows → `workflow/`
- Fixtures → `fixtures/` or `core/fixtures/`
- API service classes → `api-service/`
- DTOs and models → `data-object/`
- Constants → `constants/`

### 3. Apply framework conventions
Follow the Page Object Model pattern strictly:
- UI interactions belong in Page Object methods, not in test files
- Page Objects receive `page` via the fixture, not by constructing `new PlaywrightPage()`
- Test files import Page Objects and workflows via the fixture
- API service classes use the core HTTP client utilities

### 4. Generate with TypeScript strict conventions
- Use TypeScript types for all parameters and return values
- Import from existing barrel files or direct paths per project convention
- Do not introduce new npm dependencies without asking

---

## Page Object generation rules

- Class name matches the page name: `LoginPage`, `ProfilePage`
- Constructor: `constructor(page: Page)`
- Methods represent user actions: `login(email, password)`, `editProfile(data)`
- Selectors are defined as private class properties, not inline in methods
- No test assertions inside Page Object methods

---

## Test file generation rules

- Test file name: `feature-name.spec.ts`
- Use `test.describe` for grouping related scenarios
- Use `test` for individual scenarios
- Import fixtures from the project fixture file, not from `@playwright/test` directly if the project wraps it
- Each test is independent and does not rely on state from another test

---

## Fixture update rules

When a new Page Object needs to be added to the fixture:
- read `fixtures/` and `core/fixtures/` to understand the current fixture structure
- add the new Page Object property following the existing pattern
- do not restructure the fixture unless the user asks for it

Read `references/fixture-update-rules.md` for the detailed fixture update procedure.

---

## Output expectations

Return:
- **Files to create or update** (with full paths)
- **Generated code** (TypeScript, following framework conventions)
- **Reuse decisions** (what was reused and from where)
- **Placement rationale** (why each file goes where it goes)
- **Any assumptions** that affect the generated code

---

## When to read reference files

Read files under `references/` only when needed:
- `reuse-first-policy.md` → when deciding whether to create or extend
- `page-object-rules.md` → when generating or updating Page Object classes
- `test-file-placement.md` → when deciding where to place generated test files
- `fixture-update-rules.md` → when the new code requires fixture changes
