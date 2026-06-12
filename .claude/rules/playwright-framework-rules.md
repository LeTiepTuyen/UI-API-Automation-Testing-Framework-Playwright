---
paths:
  - "tests/**/*.ts"
  - "page-object/**/*.ts"
  - "workflow/**/*.ts"
  - "api-service/**/*.ts"
  - "fixtures/**/*.ts"
  - "core/**/*.ts"
  - "data-object/**/*.ts"
  - "constants/**/*.ts"
  - "utils/**/*.ts"
---

# Playwright Framework Rules

- Reuse existing framework assets before creating new files.
- Keep UI interaction logic in Page Object classes under `page-object/`.
- Keep API endpoint logic in API service classes under `api-service/`.
- Keep test files under `tests/ui/` or `tests/api/`.
- Keep reusable workflows under `workflow/`.
- Keep fixture setup under `fixtures/` or `core/fixtures/`.
- Do not create ad-hoc Playwright scripts outside the established framework structure.
- Preserve TypeScript strict-typing conventions throughout.
- Preserve the Page Object Model pattern; do not access UI elements directly in test files.
- Run the smallest relevant Playwright test after any code change when feasible.
- Do not modify automation source code for a thesis task unless the user explicitly requests it.
- Do not introduce new npm dependencies without explaining the purpose and obtaining user approval.
