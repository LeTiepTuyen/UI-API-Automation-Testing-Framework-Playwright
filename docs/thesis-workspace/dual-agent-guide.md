# Dual-Agent Thesis Guide: Codex + Claude

This document explains how Codex and Claude Code share the thesis harness and switch safely between sessions.

---

## Architecture

```
Shared layer (both agents read)
├── AGENTS.md                              ← source of truth for rules
├── docs/thesis-workspace/progress.md     ← active thesis state
├── docs/thesis-workspace/tasks.md        ← task board
├── docs/thesis-workspace/evidence-matrix.md
├── docs/thesis-workspace/citation-register.md
├── docs/thesis-workspace/next-chat-handoff.md
└── docs/thesis-workspace/outline.md

Codex layer
├── .codex/config.toml
└── .codex/agents/thesis-*.toml

Claude layer
├── CLAUDE.md                             ← bridge that imports AGENTS.md
├── .claude/settings.json
├── .claude/rules/
├── .claude/agents/thesis-*.md
└── .claude/skills/thesis-*/SKILL.md
```

---

## Recommended workflow

```
Codex writes main draft
    ↓
Claude reviews independently
    ↓
Codex or Claude applies fixes
    ↓
User approves chapter
    ↓
Move to next task
```

When Codex hits context limit, Claude continues:
1. Claude reads `CLAUDE.md` + `progress.md` + `next-chat-handoff.md`.
2. Claude confirms the current approval gate.
3. Claude continues from the exact task Codex left off.

When Claude hits context limit, Codex continues:
1. Codex reads `AGENTS.md` + `progress.md` + `next-chat-handoff.md`.
2. Codex confirms the current approval gate.
3. Codex continues from where Claude left off.

---

## Daily workflow (VS Code extensions)

Everyday thesis writing uses both VS Code extensions side by side: **Codex** as the primary
drafter/worker, **Claude Code** as the orchestrator + authority reviewer (Opus review gate).

```
1. DRAFT   → Codex extension: ask Codex to write the chapter/section.
2. SYNC    → Codex updates progress.md, tasks.md, registers, next-chat-handoff.md.
3. REVIEW  → Claude Code extension: ask Claude to run the Formal Chapter Review Gate (thesis-reviewer, Opus).
4. APPROVE → Claude returns verdict → user approves → chapter marked final.
```

**Codex — daily drafting prompt:**
```
Continue the thesis. Read AGENTS.md, progress.md, tasks.md, evidence-matrix.md,
citation-register.md, next-chat-handoff.md, and confirm the current approval gate.
Draft/revise <chapter/section>. Mark unsupported claims NEEDS_EVIDENCE/NEEDS_SOURCE.
When done, update progress.md, tasks.md, the relevant registers, and next-chat-handoff.md.
```

**Claude — daily review prompt:**
```
Review the chapter Codex just drafted. Read CLAUDE.md, progress.md, tasks.md,
evidence-matrix.md, citation-register.md, next-chat-handoff.md, chapter-review-gate.md.
Run the Formal Chapter Review Gate via the thesis-reviewer agent (Opus). Do not edit prose.
Save the result under reviews/ and summarize the verdict for user approval.
```

No MCP bridge is required for this loop — handoff is via the shared tracking files.

## Single-agent fallback

If one agent hits a daily/weekly quota limit, the other can take over **all** work. Both read the
same source of truth and are capable of every role; the split is an optimization, not a capability
limit. When falling back:

- One-writer-at-a-time is automatically satisfied (only one agent is active).
- If the same agent must both draft and review, state **"single-agent fallback"** in the review so
  reduced independence is known; have the other agent re-review once its quota returns.
- The taking-over agent reads `next-chat-handoff.md` first to resume at the correct gate.

See `others/orchestrator-worker-plan.md` for the full rationale.

---

## Session start prompt for Claude

Paste this at the start of a new Claude Code session:

```
Continue the thesis from the current repository state.

Read first:
- CLAUDE.md
- docs/thesis-workspace/progress.md
- docs/thesis-workspace/tasks.md
- docs/thesis-workspace/evidence-matrix.md
- docs/thesis-workspace/citation-register.md
- docs/thesis-workspace/next-chat-handoff.md

Do not edit files yet.

Return:
1. Current thesis status
2. Current approval gate
3. Next recommended task
4. Files safe to edit
5. Files to leave untouched
6. Whether this task should be drafted, reviewed, or only planned
```

---

## Session start prompt for Codex (returning from Claude)

```
Continue from the Claude handoff.

Read:
- AGENTS.md
- docs/thesis-workspace/progress.md
- docs/thesis-workspace/tasks.md
- docs/thesis-workspace/next-chat-handoff.md

Summarize what Claude changed or reviewed.
Verify Claude output against evidence-matrix.md and citation-register.md before accepting it as final.
Do not assume Claude output is final until verified.
```

---

## Roles in this project

| Role | Codex | Claude |
|---|---|---|
| Main thesis writer | Primary | Secondary / backup |
| Chapter reviewer | On request | Preferred independent reviewer |
| Citation auditor | Yes | Yes (use thesis-citation-auditor agent) |
| Diagram generation | Yes | Yes (use thesis-diagram-architect agent) |
| Technical accuracy | Yes | Yes (use thesis-technical-reviewer agent) |
| Session orchestration | Via .codex/agents/ | Via .claude/agents/thesis-orchestrator |

---

## Model policy (Claude)

Model selection is automated through the `model:` field in each `.claude/agents/*.md` file. The correct model is selected automatically when work is delegated to that agent — no manual `/model` switch is needed per task.

| Agent | Model | Used for |
|---|---|---|
| `thesis-reviewer` | `opus` | Chapter approval-gate review (deepest reasoning: logical gaps, evidence inconsistencies, citation mismatches) |
| `thesis-orchestrator` | `sonnet` | Session planning and state reading |
| `thesis-drafter` | `sonnet` | Drafting and revising chapters |
| `thesis-citation-auditor` | `sonnet` | Citation and evidence audit |
| `thesis-diagram-architect` | `sonnet` | Diagram generation |
| `thesis-researcher` | `sonnet` | Source verification |
| `thesis-technical-reviewer` | `sonnet` | Technical accuracy checks |

How automated switching works:
- A subagent always runs on its pinned `model:`, regardless of the main session model. So delegating an approval-gate review to `thesis-reviewer` always runs on Opus, and every other delegated task runs on Sonnet — automatically.
- The main conversation thread does **not** auto-switch. It stays on whatever `/model` is set.
- Recommended default: keep the main session on `/model sonnet`, and let `thesis-reviewer` auto-elevate to Opus when an approval-gate review is delegated to it.

## One writer at a time

- Only one agent writes thesis prose at a time.
- The other agent reviews only, or works on a non-overlapping task.
- Do not let both Claude and Codex edit `tasks.md` or `progress.md` simultaneously.
- After each work session: update `progress.md` → update `next-chat-handoff.md` → commit.

---

## What must never appear in thesis prose

- Private Codex or Claude workflow instructions
- Agent names, skill names, or harness file references
- AI-assisted writing process details
- The `.codex/`, `.claude/`, or `.agents/` folder contents
- Personal tokens, API keys, or account credentials
