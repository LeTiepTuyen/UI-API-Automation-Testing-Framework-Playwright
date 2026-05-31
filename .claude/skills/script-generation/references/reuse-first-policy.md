# Reuse-First Policy

Use this reference when deciding whether to reuse, extend, refactor, or create new automation artifacts.

## Core rule

Always prefer:
1. reuse
2. extend
3. lightly refactor for reuse
4. create new

Do not create new Page Objects, fixtures, workflows, services, DTOs, or tests unless reuse is clearly insufficient.

---

## Reuse decision order

Before writing new code, inspect in this order:

1. `tests/`
2. `page-object/`
3. `fixtures/`
4. `workflow/`
5. `api-service/`
6. `core/`
7. `constants/`
8. `utils/`
9. `data-object/`
10. `test-data/`

---

## When reuse is enough

Reuse as-is when:
- the required action already exists
- the selector is still correct
- the workflow already covers the business path
- the service already supports the endpoint family
- the DTO already fits the request/response need

---

## When extension is better than creation

Extend existing artifacts when:
- a Page Object already covers the same page but lacks one or two methods
- a workflow already covers most of the flow
- an API service already owns the relevant endpoint family
- a fixture already injects related page objects and only needs a small addition

---

## When light refactor is justified

Refactor when:
- existing logic is duplicated in multiple places
- a method can be generalized safely
- small restructuring improves reuse without changing framework direction

Avoid refactoring too broadly during a small script-generation task.

---

## When new creation is justified

Create a new artifact only when:
- the functionality does not fit any existing artifact
- forcing reuse would make the structure worse
- the new page/component/flow/service is clearly distinct
- the framework would become harder to maintain if everything were forced into one existing file

---

## Anti-patterns

Avoid:
- creating a new Page Object for a page already covered
- creating a new fixture when existing injection can be extended
- re-implementing login or navigation flows already handled in `workflow/`
- hardcoding request logic inside tests when an API service should own it

---

## Unsplash project notes

This framework already has meaningful reusable layers:
- `page-object/`
- `fixtures/`
- `workflow/`
- `api-service/`
- `core/`
- `data-object/`

Generated code must fit these layers instead of bypassing them.