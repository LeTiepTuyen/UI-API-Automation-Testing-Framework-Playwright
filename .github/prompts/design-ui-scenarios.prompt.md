---
agent: agent
description: Design automation-ready UI test scenarios for a requested Unsplash user flow using the current repository context.
---

Design automation-ready UI test scenarios for the requested feature or user flow in the Unsplash project.

Tasks:
1. Understand the requested UI feature or flow from the user prompt.
2. Inspect the repository for existing coverage and reuse candidates in:
   - `tests/ui/`
   - `page-object/`
   - `workflow/`
   - `fixtures/`
3. Design a focused set of meaningful UI test scenarios ddthat are realistic to automate in the current framework.
4. Cover:
   - the main happy path
   - meaningful negative paths where practical
   - a few useful edge cases only if they add value
5. Output the result in a clean Markdown structure with:
   - Title
   - Pre-conditions
   - Step Actions
   - Expected Results
   - Test Data
   - Priority
   - Test Type

Important rules:
- Do not design low-value filler cases
- Avoid duplicate coverage if similar tests already exist
- Keep scenarios realistic for Playwright automation
- Align with the project conventions in `copilot-instructions.md`