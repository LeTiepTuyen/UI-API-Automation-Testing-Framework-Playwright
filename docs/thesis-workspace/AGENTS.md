# AGENTS.md - Thesis Workspace Instructions

## Scope

These instructions apply when working inside `docs/thesis-workspace/`.

## Mission

Draft the final graduation thesis in formal academic English, using the VNUK thesis template structure and the current Playwright automation framework as the project evidence base.

## Required workflow

For every thesis-writing task:

1. Read `outline.md`.
2. Read the relevant section of `plan.md`.
3. Identify the task in `tasks.md` and set it to `IN_PROGRESS`.
4. Check `evidence-matrix.md` before writing factual claims.
5. Check `citation-register.md` before using external theory or documentation.
6. Draft or edit only the scoped file.
7. Mark unsupported claims as `NEEDS_EVIDENCE`.
8. Update `tasks.md` and compact `progress.md` after finishing.
9. If new claims or sources were added, update `evidence-matrix.md` and `citation-register.md`.

For every completed chapter draft:

1. Run the Formal Chapter Review Gate defined in `chapter-review-gate.md`.
2. Save the gate output as `reviews/chapter-X-review.md`, where `X` is the chapter number.
3. Return the Chapter Review Gate Summary table to the user.
4. Stop at the human approval gate.
5. Do not mark the chapter as final or begin the next chapter until the user explicitly approves the review result.

## Academic writing rules

- Use precise and formal academic English.
- Write thesis chapters as an academic research report, not as README content, repository documentation, or a technical note.
- Prefer research framing such as "this research", "this study", "the proposed framework", "the implemented framework", "the selected system under test", and "the evaluation evidence".
- Avoid "the repository" in thesis body prose unless the section is explicitly mapping implementation evidence in Chapter 3, Chapter 4, an appendix, or an evidence/source table.
- Do not place raw repository folder/file paths in Chapter 1. Chapter 1 must frame the problem, objectives, and research questions rather than explain project directories.
- Frame Unsplash as the selected demonstration system or selected system under test. The framework contribution should be described as applicable to modern web applications more generally.
- Do not self-define academic or specialized testing concepts. Use academic, official, or professional source attribution with necessary APA 7 in-text citations.
- For Literature Review chapters, synthesize multiple source families where appropriate; do not rely almost entirely on one source such as ISTQB when broader testing literature is available.
- Use concise academic section titles. If a heading becomes a list of technical terms, replace it with a broader parent heading and sub-sections.
- Do not use comma-separated artifact lists as section or sub-section titles; use conceptual headings and explain concrete artifacts in the prose or a table.
- Prefer clear topic sentences and short paragraphs.
- Do not use marketing language.
- Do not overclaim results.
- Do not write "the framework proves" unless the evidence actually supports it.
- Use "this project demonstrates", "the implementation shows", or "the results suggest" where appropriate.
- Avoid first-person language unless VNUK explicitly allows it.
- Keep chapter numbering and heading levels compatible with Microsoft Word styles.
- Preserve the approved 2026-06-04 chapter boundary and T-078 refinement: Chapter 2 is Literature Review for theoretical background and methodology only, with source-attributed definitions and citation-backed tables; Chapter 3 is the framework-design chapter for Page Object Model, fixture/dependency injection, API service abstraction, DTO/data/cleanup, reporting/traceability design, and related technical diagrams.
- Use logical parent sections and sub-sections in framework-design chapters when related mechanisms belong together; avoid an overly flat list of peer-level sections.

## Citation and evidence rules

- Use project source files for implementation claims.
- Use official documentation for tool capabilities.
- Use academic/professional sources for theory.
- Use thesis samples only for structural guidance.
- Use APA 7th edition as the final thesis citation style. Markdown drafts may use stable citation keys, but final in-text citations and the reference list must be APA 7 formatted.
- Add in-text citations at the points where readers need to know the source of information: theory claims, official tool capability claims, external benchmark claims, execution result claims, and specific repository/source-code evidence. Do not over-cite every sentence when a paragraph already clearly points to the relevant source.
- Every table and figure must have a caption and evidence source.
- Every evaluation result must come from actual execution evidence.
- Every screenshot, report capture, browser capture, GitHub project image, or external visual must be registered in `visual-evidence-register.md` before insertion.
- External visuals require source, citation, and copyright/license review; prefer self-captured project screenshots or original thesis tables when possible.

## Progress tracking rules

- Treat `progress.md` as the active state file, not the full historical log.
- Keep current status, blockers, archive index, current-day entry or latest handoff, and next recommended task in `progress.md`.
- Archive older entries by date under `progress-archive/YYYY-MM-DD.md` before ending every thesis work session.
- Do not leave detailed progress entries from multiple dates in `progress.md`; multi-day history belongs in the archive.
- Read archive files only when older context is needed for review, traceability, or debugging.
- Do not delete archive files unless the user explicitly asks.

## Session sizing rule

Classify every thesis task by context weight before starting:

| Weight | Examples | Rule |
|---|---|---|
| **HEAVY** | Full chapter draft, complete chapter rewrite, formal review gate | Start a new chat session. Do NOT begin in a session that has already been compacted. |
| **MEDIUM** | Apply fixes from a review, diagram updates, citation fixes | May compact and continue in the current session. |
| **LIGHT** | Update tracking files, fix one sentence, answer a question | Continue in any session. |

When the user requests a HEAVY task and the current session has been compacted at least once, stop before beginning. Prepare and write an updated `next-chat-handoff.md` with the task scope, then instruct the user to start a new session and use the start prompt in the handoff file.

When starting a new session for a HEAVY task, always read `next-chat-handoff.md` first, then confirm the task weight and gate status via `progress.md` and `tasks.md` before delegating to `thesis-drafter` or `thesis-reviewer`.

## Stop conditions

Stop and ask the user when:

- evidence is missing for a key claim
- the thesis outline conflicts with the VNUK template
- a chapter requires actual test execution results
- a source document appears inconsistent or incomplete
- a requested action would modify source code outside the thesis scope


## Diagram workflow rules

Use `diagram-workflow.md`, `figure-register.md`, and the `thesis-diagramming` skill whenever creating thesis figures, Mermaid diagrams, PlantUML diagrams, Graphviz diagrams, flowcharts, sequence diagrams, architecture diagrams, or pipeline diagrams.

All diagram sources must be editable and stored under `assets/diagrams/src/`. Rendered SVG/PNG files must be stored under `assets/diagrams/out/`. Register every figure in `figure-register.md` and connect it to a target chapter section.

## Screenshot and visual evidence rules

Use `visual-evidence-register.md` for screenshots and non-diagram visuals. Store accepted screenshots under `assets/figures/`, keep them sanitized, and do not use them as evidence for execution results unless they come from a verified run.
