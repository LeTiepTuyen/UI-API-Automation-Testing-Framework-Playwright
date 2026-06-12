# Thesis Workspace

This folder is the working environment for drafting the final graduation thesis in Markdown before copying the final content into the VNUK Word template.

## Thesis title

**A Comprehensive UI and API Automation Testing Framework Using Playwright: An Enterprise-Standard Approach**

## Workflow

1. Read `AGENTS.md` for thesis-specific rules.
2. Read `outline.md` for the approved thesis structure.
3. Read `plan.md` for the private writing workflow.
4. Work through `tasks.md` one task at a time.
5. Update `progress.md` after every work session and keep older history under `progress-archive/`.
6. Update `evidence-matrix.md` and `citation-register.md` whenever adding technical claims or sources.
7. Draft chapters in `chapters/`.
8. Assemble the final Markdown thesis in `thesis.md`.
9. Copy the final content into `thesis-template-vnuk.docx` and apply Word styles.

## Key rule

No unsupported claims. If evidence is missing, write `NEEDS_EVIDENCE` and stop before finalizing the section.

## Citation style

The final thesis citation style is **APA 7th edition**. Markdown drafts may keep stable citation keys for traceability, but final in-text citations and the reference list must be formatted according to APA 7th edition during final assembly and Word migration.


## Diagram workflow

Use `diagram-workflow.md` and `figure-register.md` to plan, generate, render, and track all thesis figures. Editable diagram sources live in `assets/diagrams/src/`; rendered outputs live in `assets/diagrams/out/`.

## Screenshot and visual evidence workflow

Use `visual-evidence-register.md` to plan and track screenshots, report captures, trace-viewer captures, browser screenshots, GitHub project screenshots, and any external visual materials. Accepted visual evidence should be stored under `assets/figures/`, must be source-safe, must not expose secrets or private account data, and must be linked to chapter evidence before insertion.

## Harness learning guide

Use `harness-citation-and-figure-guide.vi.md` as a Vietnamese learning note for how this workspace manages thesis figures, charts, screenshots, citation keys, APA 7 references, and final citation conversion.

## Progress archive workflow

Use `progress.md` for current state, blockers, archive index, the current-day entry or latest handoff, and the next recommended task. Historical entries are stored by date under `progress-archive/` so new sessions can start without reading the full history.

Before finishing a thesis work session, move detailed entries from previous dates into `progress-archive/YYYY-MM-DD.md` and update the archive index. Do not let `progress.md` become a multi-day log.

## Private workflow note

This workspace may contain private planning and assistant-control files. Do not include the private thesis-writing workflow, Codex setup, agents, or skills in the thesis itself.
