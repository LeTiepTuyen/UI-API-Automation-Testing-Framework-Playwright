---
agent: agent
description: Generate or update a Playwright API automation script for the requested Unsplash API scenario using the existing framework structure.
---

Generate or update a Playwright API automation script for the requested API scenario in the Unsplash automation framework.

Tasks:
1. Understand the requested API scenario from the user prompt.
2. Inspect the repository for existing support in:
   - `api-service/`
   - `core/api/`
   - `data-object/`
   - `tests/api/`
   - `constants/`
   - `utils/`
3. Reuse or extend existing API services, DTOs, and utilities before creating new code.
4. Keep endpoint logic in service classes and keep tests scenario-focused.
5. Generate only the minimal required changes, such as:
   - extending an API service
   - creating or updating DTOs
   - creating or updating the target API test file in `tests/api/`
6. Validate the result at the smallest practical scope when feasible.
7. Prepare the result for CodeReview handoff.

Important rules:
- Follow `copilot-instructions.md`
- Do not embed raw endpoint plumbing inside test files if the framework already supports a service layer
- Prefer consistency and maintainability over speed