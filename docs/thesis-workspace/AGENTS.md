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
8. Update `tasks.md` and `progress.md` after finishing.
9. If new claims or sources were added, update `evidence-matrix.md` and `citation-register.md`.

## Academic writing rules

- Use precise and formal academic English.
- Prefer clear topic sentences and short paragraphs.
- Do not use marketing language.
- Do not overclaim results.
- Do not write "the framework proves" unless the evidence actually supports it.
- Use "this project demonstrates", "the implementation shows", or "the results suggest" where appropriate.
- Avoid first-person language unless VNUK explicitly allows it.
- Keep chapter numbering and heading levels compatible with Microsoft Word styles.

## Citation and evidence rules

- Use project source files for implementation claims.
- Use official documentation for tool capabilities.
- Use academic/professional sources for theory.
- Use thesis samples only for structural guidance.
- Every table and figure must have a caption and evidence source.
- Every evaluation result must come from actual execution evidence.

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
