---
agent: agent
description: Generate or update a Playwright UI automation script for the requested Unsplash scenario using the existing framework structure and Playwright MCP.
---

Generate or update a Playwright UI automation script for the requested scenario in the Unsplash automation framework.

Tasks:
1. Understand the requested UI scenario from the user prompt.
2. Inspect the repository and identify reuse candidates in:
   - `tests/ui/`
   - `page-object/`
   - `fixtures/`
   - `workflow/`
   - `core/`
   - `test-data/`
3. Use Playwright MCP to inspect the relevant UI flow when selector or UI behavior understanding is needed.
4. Reuse or extend existing framework assets before creating anything new.
5. Generate only the minimal required changes, such as:
   - updating or creating a Page Object
   - updating a fixture if justified
   - updating a workflow if justified
   - creating or updating the target UI test file in `tests/ui/`
6. Validate the generated test at the smallest practical scope when feasible.
7. Prepare the result for CodeReview handoff.

Important rules:
- Follow `copilot-instructions.md`
- Do not write raw Playwright test code that bypasses the framework
- Prefer Playwright MCP for DOM understanding
- Do not use Playwright CLI as the primary workflow
- Keep changes minimal, reusable, and maintainable