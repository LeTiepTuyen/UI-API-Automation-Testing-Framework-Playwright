# Page Object Rules

Use this reference when creating or updating Page Objects.

## Objective

Keep all UI interaction logic in Page Objects so tests stay readable, reusable, and maintainable.

---

## Core rules

- Place Page Objects in `page-object/`
- Use one file per page or clearly scoped UI component/function
- Use meaningful PascalCase class names
- Keep locators as class properties
- Keep reusable user actions as methods
- Keep tests focused on scenario flow and assertions, not raw UI plumbing

---

## What belongs in a Page Object

A Page Object may contain:
- locators
- page-level actions
- component interactions
- simple navigation methods
- state-check helper methods when they improve reuse
- stable wrappers around UI behaviors

---

## What should not live in a test file

Avoid placing these directly in test files:
- `page.goto(...)`
- `page.locator(...)`
- `click`, `fill`, `hover`, `press`, `selectOption` chains
- ad-hoc selector logic
- repeated page interaction code

If this logic is needed, move it to a Page Object or workflow.

---

## What does not belong in a Page Object

Avoid putting the following in Page Objects unless the framework already expects it:
- unrelated cross-page business flow orchestration
- large assertion blocks
- test-only data setup
- API request logic

Cross-page reusable business flow belongs in `workflow/` when justified.

---

## Locator guidance

Page Objects must use:
- robust selectors
- maintainable selectors
- selectors validated from actual UI when needed

If selectors are unclear, use Playwright MCP first.

---

## Method design guidance

Good Page Object methods are:
- action-oriented
- reusable
- named by business meaning

Examples:
- `openEditProfile()`
- `updateUsername(value: string)`
- `clickSave()`
- `getDisplayedUsername()`

Poor methods:
- mirror raw UI plumbing too literally
- expose too much internal DOM detail
- duplicate existing helper methods

---

## Extension rule

If a Page Object already exists for the target page:
- extend it first
- add only the missing interactions
- avoid creating a duplicate Page Object for the same page

---

## Unsplash project notes

In this repository, Page Objects should support:
- profile-related flows
- home/feed-related interactions
- likes/collections user flows
- authentication-related UI
- any new UI area added through consistent POM expansion