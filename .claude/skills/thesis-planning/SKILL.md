---
name: thesis-planning
description: Use this skill when planning, sequencing, or tracking the VNUK thesis-writing workflow. Use at the start of a Claude thesis session to orient to the current state and decide the next safe task.
---

# Thesis Planning Skill

## Trigger

Use this skill when Claude is asked to:
- understand the current thesis state
- identify the next task
- split thesis work into smaller tasks
- update progress tracking
- decide whether the current approval gate allows proceeding

## Session start workflow

1. Read `docs/thesis-workspace/progress.md`.
2. Read `docs/thesis-workspace/tasks.md`.
3. Read `docs/thesis-workspace/next-chat-handoff.md`.
4. Read `docs/thesis-workspace/outline.md` if chapter scoping is needed.
5. Identify the current approval gate and next safe task.
6. Do not edit chapter prose unless the user asks for drafting.
7. Update `tasks.md` and compact `progress.md` after planning changes.

## Output format

Return:
- Current thesis phase
- Current approval gate
- Next task ID and scope
- Files safe to read
- Files safe to edit
- Files to leave untouched
- Risks or blockers

## Rules

- Keep tasks small and reviewable.
- Do not mark blocked tasks as ready until the blocker is resolved.
- Do not claim test results unless execution evidence exists in the repository.
- Keep `progress.md` compact: archive older dated entries to `progress-archive/YYYY-MM-DD.md`.
- Before ending a planning session, verify `progress.md` does not contain detailed entries from multiple dates.
- Do not proceed to the next chapter if the current approval gate has not passed.

## Private workflow exclusion

Do not include the private Claude or Codex thesis-writing workflow, private agents, private skills, or the AI-assisted writing process in the thesis body, front matter, figures, references, or appendices.
