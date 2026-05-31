---
agent: agent
description: Analyze the current Unsplash automation framework repository and summarize the project structure, reusable assets, conventions, and likely main automation flows.
---

Use the current repository as the source of truth and analyze the automation framework before any major generation work.

Tasks:
1. Read the root README and key configuration files such as:
   - `README.md`
   - `package.json`
   - `playwright.config.ts`
2. Inspect the repository structure, especially:
   - `tests/ui/`
   - `tests/api/`
   - `page-object/`
   - `fixtures/`
   - `workflow/`
   - `api-service/`
   - `core/`
   - `data-object/`
   - `test-data/`
   - `constants/`
   - `utils/`
3. Summarize:
   - current framework layers
   - reusable assets already available
   - current coding conventions
   - likely UI and API main flows already supported
   - any missing pieces or risks that may affect automation generation
4. Output the result as a structured Markdown summary.

Important rules:
- Follow `copilot-instructions.md`
- Prefer repository evidence over assumptions
- Do not generate any new code in this task
- Keep the result concise but practical for downstream agents