---
name: thesis-handoff-sync
description: Use this skill at the end of a Claude thesis session to update progress.md, tasks.md, and next-chat-handoff.md so Codex or another Claude session can continue seamlessly from the correct state.
---

# Thesis Handoff Sync Skill

## Purpose

Ensure that every Claude thesis session ends with a clean, accurate handoff so that Codex or a future Claude session can continue from the correct thesis state without re-reading the full conversation history.

## Trigger

Use this skill when:
- a Claude thesis session is ending
- a task or review is complete and needs to be recorded
- the user asks to save session state before switching to Codex
- `next-chat-handoff.md` needs to be updated

## Handoff sync workflow

1. Read `docs/thesis-workspace/progress.md` to confirm the current state.
2. Read `docs/thesis-workspace/tasks.md` to confirm task status changes.
3. Identify what was completed, what is in review, and what is blocked.
4. Update `progress.md`:
   - Update the Current status summary table.
   - Add a current-day progress entry if one does not exist for today.
   - Archive older dated entries to `progress-archive/YYYY-MM-DD.md` if needed.
5. Update `tasks.md` with any status changes (READY → IN_PROGRESS → REVIEW → DONE).
6. Write or update `docs/thesis-workspace/next-chat-handoff.md`.
7. If review artifacts were created, confirm they are saved under `docs/thesis-workspace/reviews/` or `docs/thesis-workspace/claude-artifacts/`.

## next-chat-handoff.md format

```markdown
# Next Chat Handoff

**Updated:** YYYY-MM-DD

## What was done this session

- [brief bullet list]

## Current thesis state

- Chapter approval gate: [state]
- Last task: [task ID and status]
- Files edited: [list]

## What to do next

- [specific next task]

## Files to read at session start

- docs/thesis-workspace/progress.md
- docs/thesis-workspace/tasks.md
- docs/thesis-workspace/evidence-matrix.md
- docs/thesis-workspace/citation-register.md
- [any chapter file that is in progress]
```

## Rules

- Do not summarize private harness workflow details in handoff files.
- Keep handoff files concise; the tracking files (`progress.md`, `tasks.md`) hold the detail.
- Only record factual state: what was done, what the current gate is, what comes next.
- If evidence-matrix.md or citation-register.md were updated, note which claim or citation was added.
