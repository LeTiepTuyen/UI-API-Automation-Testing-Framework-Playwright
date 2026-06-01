# AGENTS.md - Repository-Level Codex Instructions

## Repository identity

This repository is the graduation project:

**A Comprehensive UI and API Automation Testing Framework Using Playwright: An Enterprise-Standard Approach**

It contains a Playwright + TypeScript automation testing framework for Unsplash UI and API testing, plus documentation and agentic workflows for maintaining the framework and writing the final thesis.

## Global working rules

- Always inspect existing files before creating new files.
- Reuse existing framework concepts before introducing new concepts.
- Do not modify production/source automation code unless the user explicitly asks.
- For thesis writing tasks, work primarily under `docs/thesis-workspace/`, `.codex/`, `.agents/`, and this `AGENTS.md`.
- Preserve the existing Playwright framework structure.
- Do not remove or rewrite existing `.github` or `.claude` agent files unless explicitly asked.
- Use formal academic English for thesis content.
- Do not copy or closely paraphrase any thesis sample.
- Mark missing evidence as `NEEDS_EVIDENCE` rather than inventing facts.

## Repository architecture to preserve

- `tests/ui/` contains UI test specifications.
- `tests/api/` contains API test specifications.
- `page-object/` contains Page Object classes.
- `fixtures/` and `core/fixtures/` contain Playwright fixtures.
- `workflow/` contains reusable business workflows.
- `api-service/` contains API service classes.
- `core/` contains browser, API, element, and fixture utilities.
- `data-object/` contains request/response models and DTOs.
- `test-data/` contains static test data.
- `constants/` contains centralized constants.
- `config/` contains environment and runtime configuration.
- `utils/` contains shared helpers.

## Thesis writing source hierarchy

Use sources in this priority order:

1. Current repository source code and project documents for project-specific claims.
2. VNUK template and VNUK sample for structure and required sections.
3. Official Playwright documentation for Playwright capabilities.
4. Official OpenAI Codex documentation for agentic workflow claims.
5. Academic/professional software testing literature for theory.
6. Playwright thesis samples for structure and topic coverage only.

## Required tracking files

For thesis tasks, update these files continuously:

- `docs/thesis-workspace/tasks.md`
- `docs/thesis-workspace/progress.md`
- `docs/thesis-workspace/evidence-matrix.md`
- `docs/thesis-workspace/citation-register.md`

## Human approval gates

Ask for approval before:

- changing the master thesis outline
- marking a chapter as final
- claiming evaluation metrics
- changing citation style
- modifying source automation code
- deleting or moving existing project files


## Thesis diagram and figure rules

- For thesis diagrams, use `docs/thesis-workspace/diagram-workflow.md` and `docs/thesis-workspace/figure-register.md` as the source of truth.
- Prefer Mermaid for flowcharts, pipelines, architecture diagrams, test execution flows, and AI workflow diagrams.
- Use PlantUML only when stricter UML/C4 notation is needed.
- Use Graphviz DOT when dependency or layered graph layout is more appropriate.
- Store editable diagram source files in `docs/thesis-workspace/assets/diagrams/src/`.
- Store rendered outputs in `docs/thesis-workspace/assets/diagrams/out/`.
- Every figure must be registered in `docs/thesis-workspace/figure-register.md` before being considered thesis-ready.
- Do not use decorative diagrams to hide missing evidence. Mark missing technical or evaluation evidence as `NEEDS_EVIDENCE`.
