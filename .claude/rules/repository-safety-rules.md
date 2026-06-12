---
paths:
  - "**"
---

# Repository Safety Rules

- Do not read, display, or process: `.env`, `.env.*`, `config/.env`, `test-data/user-info.json`, or any file under `secrets/`.
- Do not commit tokens, API keys, OAuth credentials, or personal account information to any file.
- Do not force-push, hard-reset, or perform destructive git operations without explicit user instruction.
- Do not install npm packages or MCP servers without explaining the package source and obtaining user approval.
- Do not create or modify CI/CD pipeline files under `.github/workflows/` without explicit user approval.
- Do not overwrite or delete files under `.codex/`, `.agents/skills/`, or `.github/` without explicit user approval.
- Do not add secrets or personal paths to any committed config file including `.claude/settings.json` or `.mcp.json`.
- When unsure whether an action is reversible, confirm with the user before proceeding.
