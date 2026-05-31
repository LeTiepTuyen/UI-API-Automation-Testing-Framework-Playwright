# Maintainability Checklist

Use this reference when deciding whether generated automation code is acceptable for long-term project use.

## Objective

Review whether the code is maintainable by another QA engineer later, not just whether it works once.

---

## Maintainability questions

### Structure
- Is the code placed in the correct folder?
- Does it follow the framework layers correctly?
- Is the structure consistent with the rest of the repository?

### Reuse
- Does it reuse existing Page Objects, workflows, fixtures, services, and utilities where practical?
- Has unnecessary duplication been avoided?

### Readability
- Are names clear?
- Is the scenario flow easy to understand?
- Are methods cohesive and not overly long?

### Change tolerance
- Will small UI changes break the automation immediately?
- Are selectors stable enough?
- Are abstractions reasonable?

### Test quality
- Are tests independent?
- Are assertions meaningful?
- Is the implementation understandable without reverse-engineering every line?

### TypeScript quality
- Are imports correct?
- Is typing acceptable for the project style?
- Is dead or unused code avoided?

---

## Good maintainability signs

Code is easier to maintain when it:
- matches existing project conventions
- avoids unnecessary cleverness
- keeps responsibilities separated
- prefers reuse
- keeps tests focused
- keeps UI logic in Page Objects
- keeps reusable business logic in workflows when justified

---

## Poor maintainability signs

Flag code that:
- bypasses the framework
- duplicates existing abstractions
- mixes raw UI logic into tests
- adds large amounts of one-off code
- introduces brittle selectors
- uses confusing naming
- over-engineers small scenarios

---

## Final decision guidance

Use this checklist to support a practical final assessment:

- **Acceptable as-is** → fits the framework and is easy to maintain
- **Acceptable with minor changes** → broadly good, but small improvements are needed
- **Needs significant revision** → structure, reuse, or maintainability problems are too important to ignore

---

## Unsplash project notes

For this repository, “maintainable” specifically means:
- fits the current framework structure
- can be reused or extended later
- is understandable by another QA engineer without extra explanation
- does not create cleanup work for future contributors