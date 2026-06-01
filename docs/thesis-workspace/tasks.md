# Thesis Task Board

Status values: `TODO`, `IN_PROGRESS`, `BLOCKED`, `REVIEW`, `DONE`.

Priority values: `P0` mandatory, `P1` important, `P2` useful, `P3` optional.

This board tracks thesis-writing preparation and drafting. The repository is still in pre-drafting audit: do not draft chapter prose until evidence, citations, figures, and chapter tasks are ready.

---

## Phase 0: Discovery and preflight

| ID | Task | Status | Priority | Owner | Output |
|---|---|---|---|---|---|
| T-000 | Inspect repository structure, project documents, Playwright config, package file, and workflow guidance. | REVIEW | P0 | Codex | Repository evidence sources in `evidence-matrix.md` |
| T-001 | Inspect UI/API tests, Page Objects, fixtures, workflows, services, DTOs, constants, test data, and utilities. | REVIEW | P0 | Codex | Framework evidence sources in `evidence-matrix.md` |
| T-002 | Confirm thesis source/reference area and note path risks. | REVIEW | P0 | Codex | `docs/final-graduation-thesis-doc/` confirmed |
| T-003 | Check Mermaid rendering readiness through local `npx` and Mermaid CLI availability. | REVIEW | P1 | Codex | Rendering blocker recorded in `progress.md` |
| T-004 | Scan thesis-facing files for private workflow references before drafting. | REVIEW | P0 | Codex | Exclusion status recorded in `progress.md` |

---

## Phase 1: Planning and traceability

| ID | Task | Status | Priority | Owner | Output |
|---|---|---|---|---|---|
| T-020 | Approve or revise the working thesis outline before chapter drafting. | TODO | P0 | User + Codex | `outline.md` approved or revised |
| T-021 | Build citation register with repository sources, thesis structure references, official Playwright docs, and testing theory sources. | TODO | P0 | Codex | `citation-register.md` |
| T-022 | Build evidence matrix for every planned chapter and mark gaps explicitly. | TODO | P0 | Codex | `evidence-matrix.md` |
| T-023 | Decide final citation style before literature review drafting. | TODO | P0 | User + Codex | Citation style recorded in tracking files |
| T-024 | Verify source notes against `docs/final-graduation-thesis-doc/` before using thesis samples. | TODO | P1 | Codex | Source-note readiness notes |

---

## Phase 2: Chapter pre-drafting tasks

| ID | Chapter | Task | Status | Priority | Required evidence before drafting |
|---|---|---|---|---|---|
| CH1-PRE | Chapter 1: Introduction | Confirm project objective, problem, scope, success criteria, and repository/project-doc evidence. | TODO | P0 | `README.md`, `docs/project-overview.md`, `outline.md`, `evidence-matrix.md` |
| CH2-PRE | Chapter 2: Literature Review | Collect official Playwright documentation and academic/professional testing sources for automation theory. | BLOCKED | P0 | Official Playwright docs, ISTQB/testing theory sources, selected citation style |
| CH3-PRE | Chapter 3: System Analysis and Framework Design | Map architecture claims to repository folders, fixtures, Page Objects, workflows, API services, config, project Copilot workflow, and planned diagrams. | TODO | P0 | Repository structure, `playwright.config.ts`, `docs/agentic-workflow/workflow-overview.md`, `.github/AGENTS.md`, `.github/copilot-instructions.md`, `.github/agents/`, `.github/prompts/`, `.claude/skills/`, Figure F-02/F-03/F-04/F-07 |
| CH3-AI-PRE | Chapter 3: AI-Assisted Automation Testing Workflow Design | Prepare the design evidence for the project Copilot Agentic-AI workflow as an automation-testing feature. | REVIEW | P0 | `docs/thesis-workspace/source-notes/copilot-agentic-automation-workflow.md`, `docs/agentic-workflow/workflow-overview.md`, `.github/AGENTS.md`, `.github/agents/`, `.github/prompts/`, `.claude/skills/`, Figure F-07 |
| CH4-PRE | Chapter 4: Implementation | Map implementation claims to representative source files and configuration evidence. | TODO | P0 | Tests, Page Objects, services, utilities, DTOs, constants, config |
| CH4-AI-PRE | Chapter 4: Copilot Agentic Workflow Implementation | Map implementation evidence for repository instructions, agents, prompts, and skills used for automation test development. | REVIEW | P0 | `docs/thesis-workspace/source-notes/copilot-agentic-automation-workflow.md`, `docs/agentic-workflow/workflow-overview.md`, `.github/AGENTS.md`, `.github/copilot-instructions.md`, `.github/agents/`, `.github/prompts/`, `.claude/skills/` |
| CH5-PRE | Chapter 5: Evaluation and Discussion | Collect actual execution results, reports, traces, screenshots, and limitation evidence. | BLOCKED | P0 | `npx playwright test` output, `results.xml`, HTML report, trace evidence |
| CH6-PRE | Chapter 6: Conclusion and Future Work | Wait for reviewed Chapters 1-5 and verified evaluation evidence. | BLOCKED | P0 | Reviewed chapters, final limitations, verified evaluation evidence |

---

## Phase 3: Drafting gates

Drafting order:

1. Chapter 3: System Analysis and Framework Design
2. Chapter 4: Implementation
3. Evidence Gate: collect actual test execution, report, trace, screenshot, and `results.xml` evidence
4. Chapter 5: Evaluation and Discussion
5. Chapter 2: Literature Review and Theoretical Background
6. Chapter 1: Introduction
7. Chapter 6: Conclusion and Future Work
8. Front matter
9. Appendices
10. Final `thesis.md` assembly

| ID | Task | Status | Priority | Owner | Output |
|---|---|---|---|---|---|
| T-042 | Draft Chapter 3 only after architecture evidence and figures are ready. | BLOCKED | P0 | Codex | `chapters/chapter-3-system-analysis-and-design.md` |
| T-043 | Draft the Chapter 3 project Copilot workflow design subsection only after `CH3-AI-PRE` is reviewed and F-07 is planned/reviewed. | BLOCKED | P0 | Codex | Section in `chapters/chapter-3-system-analysis-and-design.md` |
| T-044 | Draft Chapter 4 only after implementation evidence mapping is ready. | BLOCKED | P0 | Codex | `chapters/chapter-4-implementation.md` |
| T-045 | Draft the Chapter 4 project Copilot workflow implementation subsection only after `CH4-AI-PRE` is reviewed. | BLOCKED | P0 | Codex | Section in `chapters/chapter-4-implementation.md` |
| T-049 | Draft Chapter 5 only after actual execution evidence is collected. | BLOCKED | P0 | Codex | `chapters/chapter-5-evaluation-and-discussion.md` |
| T-046 | Draft Chapter 2 only after official/theory citations are selected. | BLOCKED | P0 | Codex | `chapters/chapter-2-literature-review.md` |
| T-040 | Draft Chapter 1 only after `CH1-PRE` is ready and Chapters 3-5 establish the project-specific evidence. | BLOCKED | P0 | Codex | `chapters/chapter-1-introduction.md` |
| T-051 | Draft Chapter 6 only after Chapters 1-5 are reviewed. | BLOCKED | P0 | Codex | `chapters/chapter-6-conclusion-and-future-work.md` |
| T-052 | Review each chapter for evidence coverage, citations, academic tone, and private workflow exclusion before approval. | BLOCKED | P0 | Codex | Review notes and updated tracking files |
| T-053 | Review project Copilot workflow sections for evidence grounding and clear separation from the private thesis-writing harness. | BLOCKED | P0 | Codex | Review notes in `progress.md` |

---

## Phase 4: Front matter, appendices, and final assembly

| ID | Task | Status | Priority | Owner | Output |
|---|---|---|---|---|---|
| T-030 | Prepare title page and approval-page placeholders after final VNUK formatting details are confirmed. | BLOCKED | P0 | Codex | `front-matter/title-page.md`, `front-matter/approval-page.md` |
| T-032 | Draft definitions and abbreviations after terminology is fixed in chapters. | BLOCKED | P0 | Codex | `front-matter/definitions.md`, `front-matter/abbreviations.md` |
| T-035 | Draft acknowledgements after user-provided personal acknowledgements are available. | BLOCKED | P1 | User + Codex | `front-matter/acknowledgements.md` |
| T-036 | Draft abstract after Chapters 1, 3, 4, and 5 are stable. | BLOCKED | P0 | Codex | `front-matter/abstract.md` |
| T-060 | Draft appendices after installation, scenario, source-map, and report evidence are verified. | BLOCKED | P1 | Codex | `appendices/*.md` |
| T-065 | Assemble `thesis.md` only after all chapter and appendix sources are reviewed. | BLOCKED | P0 | Codex | `thesis.md` |

---

## Diagram and figure tasks

| ID | Task | Target file(s) | Status |
|---|---|---|---|
| DIA-001 | Confirm diagram workflow and Mermaid rendering path. | `diagram-workflow.md`, `scripts/render-diagrams.mjs` | REVIEW |
| DIA-002 | Review framework architecture diagram source against repository structure. | `assets/diagrams/src/framework-architecture.mmd` | TODO |
| DIA-003 | Review UI and API execution flow diagram sources against tests, fixtures, workflows, Page Objects, services, and utilities. | `assets/diagrams/src/ui-test-execution-flow.mmd`, `assets/diagrams/src/api-test-execution-flow.mmd` | TODO |
| DIA-004 | Review Playwright reporting and evaluation workflow diagrams against config and execution-evidence requirements. | `assets/diagrams/src/playwright-reporting-pipeline.mmd`, `assets/diagrams/src/evaluation-workflow.mmd` | TODO |
| DIA-005 | Plan a thesis-safe Copilot Agentic-AI workflow diagram for automation test development only. | `figure-register.md`, `assets/diagrams/src/copilot-agentic-ai-automation-workflow.mmd` | TODO |
| DIA-006 | Render diagram sources to SVG after Mermaid CLI availability is confirmed. | `assets/diagrams/out/` | BLOCKED |
| DIA-007 | Review rendered diagrams for readability and thesis-safe content before chapter insertion. | `figure-register.md`, `assets/diagrams/out/` | BLOCKED |

---

## Active task protocol

When thesis work starts, update this board and `progress.md` in the same work session. Keep thesis-facing content free from private workflow, private agent, private skill, and personal AI-assisted writing-process references.
