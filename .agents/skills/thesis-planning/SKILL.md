---
name: thesis-planning
description: Use this skill when planning, bootstrapping, sequencing, or tracking the VNUK thesis-writing workflow for the Playwright automation framework project.
---

# Thesis Planning Skill

## Trigger

Use this skill when the user asks Codex to:

- create or revise the thesis plan
- split thesis work into tasks
- update progress tracking
- bootstrap thesis workspace files
- decide the next writing task

## Workflow

1. Read `docs/thesis-workspace/outline.md`.
2. Read `docs/thesis-workspace/plan.md`.
3. Read `docs/thesis-workspace/tasks.md`.
4. Read `docs/thesis-workspace/progress.md` for current state and recent entries.
   - Read `docs/thesis-workspace/progress-archive/` only when older historical context is needed.
5. Identify the smallest next useful task.
6. Do not edit chapter prose unless the user asks for drafting.
7. Update `tasks.md` and compact `progress.md` after planning changes.

## Output format

Return:

- current phase
- next task ID
- scope
- files to read
- files to edit
- acceptance criteria
- risks or blockers

## Rules

- Keep tasks small and reviewable.
- Do not mark blocked tasks as ready until the blocker is resolved.
- Do not claim test results unless execution evidence exists.
- Keep `progress.md` compact: archive older entries by date under `progress-archive/YYYY-MM-DD.md` and preserve only current status, archive index, current-day entry or latest handoff, and next recommended task in the active file.
- Before ending a thesis planning session, verify that `progress.md` does not contain detailed entries from multiple dates.

## Private workflow exclusion

Do not include the private Codex thesis-writing workflow, private agents, private skills, or personal AI-assisted writing process in the thesis body, front matter, figures, references, or appendices.
