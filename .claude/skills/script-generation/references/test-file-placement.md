# Test File Placement Rules

Use this reference when deciding where and how a new test file should be created.

## Objective

Place test files in the correct location and structure them consistently so the test suite remains easy to navigate and maintain.

---

## Placement rules

- Put new tests under `tests/`
- Follow the existing repository organization and naming conventions
- Group by feature or area only when that matches the current project pattern
- Do not invent a parallel folder structure unless there is a strong reason

---

## Naming rules

Test file names should:
- describe the scenario or feature clearly
- stay consistent with the current repository naming pattern
- use feature-first, readable kebab-case
- end in `.spec.ts`

Examples:
- `tests/ui/profile/view-profile.spec.ts`
- `tests/ui/profile/update-profile.spec.ts`
- `tests/ui/profile/bookmarked-photos.spec.ts`
- `tests/api/users/get-public-profile.spec.ts`
- `tests/api/users/get-statistics.spec.ts`
- `tests/api/users/list-collections.spec.ts`
- `tests/api/users/list-photos.spec.ts`

## Suite and test naming rules

`test.describe(...)` blocks should use:
- `UI | <page or flow name>` for UI scenarios
- `API | <method> <endpoint>` for API scenarios

Individual `test(...)` cases should:
- describe one observable outcome
- stay business-readable
- match the behavior being asserted

Examples:
- `test.describe('UI | Photographer profile page', () => {})`
- `test.describe('API | GET /users/:username/public-profile', () => {})`
- `test('returns 200 and public profile data for a valid username', async () => {})`
- `test('displays photographer profile for a valid account', async () => {})`

---

## Structure rules inside test files

Tests should:
- use fixtures consistently
- call Page Object, workflow, or service methods
- keep direct implementation logic out of the test body
- remain scenario-focused and readable

---

## Reuse rules

Before creating a new test file:
- check whether the scenario belongs in an existing test file
- check whether adding one more test to an existing feature-aligned file is cleaner
- prefer updating an existing file if it keeps the suite more coherent

Create a new file only when:
- the scenario is clearly distinct
- the file would otherwise become overloaded
- the new file improves organization

---

## Anti-patterns

Avoid:
- placing UI tests outside `tests/`
- placing API tests inside service files
- mixing unrelated scenarios into one large test file
- creating too many one-test files if the repository prefers grouped scenario files

---

## Unsplash project notes

This framework already contains scenario-oriented test files under `tests/`.  
Follow that pattern unless the repository evolves to a more granular folder strategy later.