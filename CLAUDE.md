@AGENTS.md

# Claude Code Instructions

## Role

Claude Code is a thesis assistant and automation-testing code assistant for this repository, operating alongside Codex with a shared source of truth.

## Shared source of truth

Both Claude and Codex must read and respect:
- `AGENTS.md` — shared project rules (imported above)
- `docs/thesis-workspace/progress.md` — active thesis state
- `docs/thesis-workspace/tasks.md` — task board
- `docs/thesis-workspace/evidence-matrix.md` — claim-to-evidence map
- `docs/thesis-workspace/citation-register.md` — citation register
- `docs/thesis-workspace/next-chat-handoff.md` — cross-session handoff state

## Before any thesis task

1. Read `docs/thesis-workspace/progress.md`.
2. Read `docs/thesis-workspace/tasks.md`.
3. Read `docs/thesis-workspace/evidence-matrix.md`.
4. Read `docs/thesis-workspace/citation-register.md`.
5. If reviewing a chapter: read `docs/thesis-workspace/chapter-review-gate.md`.
6. Confirm the current approval gate before editing any thesis chapter.

## Collaboration with Codex

- Do not create thesis state outside `docs/thesis-workspace/`.
- Do not overwrite or delete files under `.codex/` or `.agents/skills/`.
- Do not rewrite `AGENTS.md` without explicit user approval.
- After completing a thesis task, update `progress.md` and `next-chat-handoff.md` so Codex can continue.
- If Claude only reviews, save review output under `docs/thesis-workspace/reviews/` and do not modify chapter prose unless the user explicitly approves.

## Safety rules

- Do not read or expose: `.env`, `config/.env`, `test-data/user-info.json`, or any secrets file.
- Do not modify automation source code under `tests/`, `page-object/`, `api-service/`, `workflow/`, `core/`, `fixtures/`, `data-object/`, `constants/`, `config/`, or `utils/` unless the user explicitly requests a coding task.
- Do not include private thesis harness details (agents, skills, workflow instructions) in thesis chapter prose.
- The Copilot Agentic-AI feature may appear in thesis prose only as a project automation-testing feature, not as a thesis-writing workflow.
- Stop at approval gates. Do not draft the next chapter until the current approval gate passes.

## Claude-specific project context

- Path-scoped rules: `.claude/rules/`
- Project subagents: `.claude/agents/`
- Project skills: `.claude/skills/`
- Dual-agent workflow guide: `docs/thesis-workspace/dual-agent-guide.md`
- Claude session artifacts: `docs/thesis-workspace/claude-artifacts/`
