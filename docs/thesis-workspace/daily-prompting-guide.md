# Daily Thesis Harness Prompting Guide

Use this guide at the start of each thesis-writing session.

## Core Rule

Always ask Codex to follow the thesis harness:

- `AGENTS.md`
- `docs/thesis-workspace/AGENTS.md`
- `docs/thesis-workspace/plan.md`
- `docs/thesis-workspace/tasks.md`
- `docs/thesis-workspace/progress.md`
- `docs/thesis-workspace/evidence-matrix.md`
- `docs/thesis-workspace/citation-register.md`
- `docs/thesis-workspace/figure-register.md`
- `docs/thesis-workspace/chapter-review-gate.md`

Codex should draft only evidence-grounded thesis content, run the Formal Chapter Review Gate after every chapter draft, save the review file, and stop for user approval.

Historical progress entries are archived under `docs/thesis-workspace/progress-archive/`. Codex should read those archive files only when older context is needed; `progress.md` remains the current state file.

Before ending each thesis work session, Codex must archive progress entries from previous dates and leave `progress.md` as a compact active-state handoff only.

## Best Daily Prompt

```text
Continue the thesis harness from the current progress state.
Follow AGENTS.md, docs/thesis-workspace/plan.md, tasks.md, and progress.md.
Read progress-archive only if older historical context is needed.
Do the next planned thesis task only.
If a chapter is drafted, run the Formal Chapter Review Gate, save the review artifact, return the summary table, and stop for my approval.
Before finishing, archive older daily progress entries and keep progress.md compact.
```

## Draft Next Chapter

```text
Continue the thesis harness.
Prepare any required pre-drafting evidence for the next chapter, then draft the next chapter in the planned order.
Use repository evidence only. Do not invent results, metrics, citations, or architecture details.
After drafting, run the Formal Chapter Review Gate and stop for my approval.
```

## Review A Chapter Only

```text
Run the Formal Chapter Review Gate for Chapter X.
Save docs/thesis-workspace/reviews/chapter-X-review.md.
Return the summary table.
Do not edit the chapter.
```

## Apply Approved Fixes

```text
Apply the approved fixes from reviews/chapter-X-review.md only.
Update tasks.md and progress.md.
Do not start the next chapter unless I explicitly approve.
```

## Approve And Continue

```text
I approve Chapter X.
Apply approved tracking fixes, then continue to the next planned task in the thesis harness.
```

## When To Use Plan-Only

Use plan-only when you want Codex to propose changes but not edit files:

```text
Plan only. Do not edit files.
Read the thesis harness and propose the next thesis task, files to update, acceptance criteria, and blockers.
```

## When To Use Normal Implementation Mode

Use normal implementation mode for most thesis work:

- drafting a chapter
- updating evidence tracking
- creating review artifacts
- applying approved minor fixes
- updating diagrams and figure register

You do not need `/goal` mode for ordinary thesis sessions. Use `/goal` only for a long multi-session objective where you want Codex to keep pursuing one broad goal over multiple turns.

## Approval Decisions

Use one of these decisions after a review gate:

- `APPROVE_FOR_NEXT_CHAPTER`
- `APPROVE_WITH_MINOR_FIXES`
- `REVISE_BEFORE_CONTINUING`
- `BLOCKED_BY_EVIDENCE`

Codex must not mark a chapter final or start the next chapter until you approve.

## Safety Reminders

- Do not allow invented execution results.
- Do not expose credentials, tokens, or runtime environment values.
- Keep private thesis-writing harness details out of thesis content.
- Use `NEEDS_EVIDENCE` for missing execution evidence.
- Use thesis samples only for structure, never as copied prose.
