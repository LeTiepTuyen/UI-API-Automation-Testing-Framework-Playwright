---
name: code-review
description: Use this skill whenever the task is to review Playwright automation code for correctness, maintainability, selector quality, Page Object Model compliance, and adherence to the Unsplash framework conventions.
---

# Code Review Skill

This skill guides a thorough review of Playwright automation code in the current project.

Use this skill when:
- the user asks for a code review of a test file, Page Object, workflow, or fixture
- a generated script needs quality verification before merging
- a Page Object needs POM convention compliance checking
- selector quality or maintainability concerns are raised
- an agent needs a structured code review before code is considered complete

This skill is not for writing new automation code.
Its purpose is to assess and improve existing code quality.

---

## Core objectives

The goal is to produce a review that identifies:
- correctness issues that could cause false passes or false failures
- maintainability problems that increase test fragility
- selector quality concerns that reduce stability
- POM convention violations that break the framework pattern
- reuse opportunities where existing framework assets are ignored

---

## Review workflow

### 1. Understand the scope
Identify:
- which file or files are under review
- is it a test file, Page Object, workflow, fixture, or API service?
- what is the expected behavior the code should verify?

### 2. Inspect existing framework assets
Before reviewing:
- check `page-object/` for existing POM classes
- check `workflow/` for reusable workflow patterns
- check `fixtures/` and `core/fixtures/` for existing fixture setup
- check `api-service/` for existing API service patterns

### 3. Apply the review checklist
Use the POM, selector, and maintainability checklists from `references/`.

---

## Correctness review

Check:
- assertions are specific and meaningful, not just `toBeTruthy()`
- test steps match the described scenario intent
- error conditions are handled or documented
- async operations are awaited correctly
- test isolation is preserved (no shared mutable state between tests)
- test data does not rely on hardcoded values that will drift

---

## POM compliance review

Check:
- UI interactions go through Page Object methods, not direct `page.click` in test files
- Page Object methods represent meaningful user actions
- Page Object constructor receives `page` from fixture, not created inline
- Page Object does not contain test assertions (assertions belong in test files)
- Page Object class is placed under `page-object/` matching the framework structure

---

## Selector quality review

Check:
- selectors use stable attributes in preference order:
  1. `data-testid`
  2. stable `id`
  3. stable `name`
  4. stable accessible role
  5. stable CSS based on meaningful attributes
  6. XPath only for relationship-based refinement
- selectors are not deeply nested structural paths that break on layout changes
- selectors are not positional unless no stable alternative exists
- selectors are unique and not ambiguous

---

## Maintainability review

Check:
- test file is placed under `tests/ui/` or `tests/api/` per framework conventions
- test name describes the scenario in business-readable language
- no duplicated logic that should be extracted to workflow or Page Object
- no magic strings; prefer constants from `constants/`
- fixture usage follows the project fixture pattern

---

## Output expectations

Return a structured review:
- **Overall verdict**: PASS / MINOR_ISSUES / MAJOR_ISSUES
- **Correctness findings** (numbered, specific)
- **POM compliance findings**
- **Selector quality findings**
- **Maintainability findings**
- **Reuse opportunities**
- **Recommended fixes**

---

## When to read reference files

Read files under `references/` only when needed:
- `pom-review.md` → when reviewing Page Object structure and method design
- `selector-review.md` → when selector quality or stability is in question
- `maintainability-checklist.md` → when assessing overall test code health
