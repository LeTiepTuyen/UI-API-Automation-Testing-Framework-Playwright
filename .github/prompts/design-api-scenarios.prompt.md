---
agent: agent
description: Design automation-ready API test scenarios for a requested Unsplash API feature or endpoint using the current repository context.
---

Design automation-ready API test scenarios for the requested API feature, endpoint, or endpoint family in the Unsplash project.

Tasks:
1. Understand the requested API area from the user prompt.
2. Inspect the repository for reusable assets and existing support in:
   - `api-service/`
   - `core/api/`
   - `data-object/`
   - `tests/api/`
   - `constants/`
3. Design a focused scenario set that includes:
   - one or more strong happy paths
   - meaningful validation or missing-data cases
   - useful data integrity or response verification cases
4. Keep the output suitable for later automation through the current framework structure.
5. Output the result in Markdown with:
   - Title
   - Pre-conditions
   - Step Actions
   - Expected Results
   - Test Data
   - Priority
   - Test Type

Important rules:
- Do not invent API behavior not supported by repository evidence or user-provided docs
- Keep scenarios practical and automation-friendly
- Avoid raw generic API test lists