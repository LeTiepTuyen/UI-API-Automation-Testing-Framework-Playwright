# Codex Thesis Writing Plan and Bootstrap Workflow

## Mission

Use Codex as a disciplined thesis-writing and repository-analysis assistant to produce the final graduation thesis. This is private productivity infrastructure only. Do not include the private Codex thesis-writing workflow, private agents, or private skills in the thesis content.

The thesis topic remains:

**A Comprehensive UI and API Automation Testing Framework Using Playwright: An Enterprise-Standard Approach**

The final output must be a professional academic thesis in English, aligned with the VNUK thesis template and supported by the current GitHub repository implementation.

---

## Operating principles

1. **Evidence first**: no technical claim may be written without repository evidence, execution evidence, official documentation, academic literature, or explicitly marked assumption.
2. **VNUK compliance first**: the VNUK template and VNUK sample define the required thesis structure and front matter.
3. **Do not plagiarize samples**: sample theses are used only to learn structure, chapter flow, and academic style.
4. **Write in small reviewable increments**: draft one section or chapter at a time.
5. **Update tracking files continuously**: every completed task must update `tasks.md`, `progress.md`, and, when relevant, `evidence-matrix.md` and `citation-register.md`.
6. **Human approval gates**: stop for review after each chapter, after each major outline change, and before final assembly.
7. **No fake results**: test counts, pass rates, execution times, screenshots, and report evidence must come from actual runs or be marked `NEEDS_EVIDENCE`.

---

## Workflow inclusion boundary

The thesis may include the repository's Copilot Agentic-AI workflow for automation testing because it is part of the graduation project. This project feature supports automation test case design, Playwright script generation, and automation code review through `.github/` and `.claude/` workflow artifacts.

The private thesis-writing harness remains private productivity infrastructure. It must not appear in the thesis body, appendices, references, figures, captions, or final Word document.

---

## Phase 0: Repository and source-document discovery

### Goals

- Understand the current Playwright framework.
- Understand VNUK thesis formatting and structure expectations.
- Understand Playwright-focused academic thesis patterns.
- Create source notes that Codex can reuse.

### Codex actions

1. Read these repository files first:
   - `README.md`
   - `docs/project-overview.md`
   - `docs/agentic-workflow/workflow-overview.md`
   - `.github/copilot-instructions.md`
   - `.github/AGENTS.md`
   - `package.json`
   - `playwright.config.ts`
2. Inspect source folders:
   - `tests/ui/`
   - `tests/api/`
   - `page-object/`
   - `fixtures/`
   - `core/fixtures/`
   - `workflow/`
   - `api-service/`
   - `core/api/`
   - `core/browser/`
   - `core/element/`
   - `data-object/`
   - `constants/`
   - `test-data/`
   - `utils/`
3. Read converted Markdown versions of these thesis references:
   - VNUK thesis template: `docs/final-graduation-thesis-doc/thesis-template.md`
   - VNUK completed sample thesis: `docs/final-graduation-thesis-doc/reference-documents/Thesis_HaVu_VNUK-Sample.md`
   - Playwright thesis by Duong: `docs/final-graduation-thesis-doc/reference-documents/Thesis_Playwright_Duong_Sample1.md`
   - Playwright thesis by Barbaglia: `docs/final-graduation-thesis-doc/reference-documents/Thesis_Playwright_Barbaglia_Sofia_Sample2.md`
4. Produce or update source notes:
   - `docs/final-graduation-thesis-doc/source-notes/vnuk-template-analysis.md`
   - `docs/final-graduation-thesis-doc/source-notes/vnuk-sample-analysis.md`
   - `docs/final-graduation-thesis-doc/source-notes/playwright-samples-analysis.md`
   - `docs/final-graduation-thesis-doc/source-notes/repo-analysis.md`

### Done criteria

- Codex can summarize the project architecture without guessing.
- Codex can explain which thesis sections are mandatory for VNUK.
- `evidence-matrix.md` has initial entries for repository architecture and thesis sample structure.

---

## Phase 1: Bootstrap the thesis workspace

### Goals

Create the files needed for long-running, trackable thesis writing.

### Codex actions

1. Create root and nested instruction files:
   - `AGENTS.md`
   - `docs/thesis-workspace/AGENTS.md`
2. Create Codex configuration and custom agents:
   - `.codex/config.toml`
   - `.codex/agents/thesis-orchestrator.toml`
   - `.codex/agents/thesis-researcher.toml`
   - `.codex/agents/thesis-drafter.toml`
   - `.codex/agents/thesis-reviewer.toml`
   - `.codex/agents/thesis-citation-auditor.toml`
3. Create thesis skills:
   - `.agents/skills/thesis-planning/SKILL.md`
   - `.agents/skills/thesis-drafting/SKILL.md`
   - `.agents/skills/thesis-evidence-citation/SKILL.md`
   - `.agents/skills/thesis-review/SKILL.md`
4. Create thesis workspace files:
   - `docs/thesis-workspace/README.md`
   - `docs/thesis-workspace/outline.md`
   - `docs/thesis-workspace/plan.md`
   - `docs/thesis-workspace/tasks.md`
   - `docs/thesis-workspace/progress.md`
   - `docs/thesis-workspace/evidence-matrix.md`
   - `docs/thesis-workspace/citation-register.md`
   - `docs/thesis-workspace/quality-checklist.md`
   - `docs/thesis-workspace/writing-style-guide.md`
5. Create chapter, front-matter, appendix, references, assets, and prompt placeholders.

### Done criteria

- The workspace tree exists.
- Codex can detect `AGENTS.md` from the repository root.
- Codex can detect thesis-specific `AGENTS.md` when launched in `docs/thesis-workspace`.
- `tasks.md` contains an actionable task backlog.
- `progress.md` contains the first progress entry.

---

## Phase 2: Build the evidence base

### Goals

Create a traceability layer before drafting prose.

### Codex actions

1. Fill `evidence-matrix.md` with claims related to:
   - framework purpose
   - repository structure
   - UI test design
   - API test design
   - fixtures
   - Page Object Model
   - API services
   - Playwright config
   - reporting and traces
   - test data and configuration
   - limitations
2. Fill `citation-register.md` with:
   - project source references
   - official Playwright documentation references
   - software testing literature references
   - thesis sample references for structure only
3. Run or request execution evidence:
   - `npm install`
   - `npx playwright test`
   - `npx playwright show-report`
4. Save evidence artifacts under:
   - `docs/thesis-workspace/assets/figures/`
   - `docs/thesis-workspace/assets/tables/`
   - `docs/thesis-workspace/appendices/`

### Done criteria

- Every planned chapter has at least one evidence source.
- Missing evidence is explicitly marked `NEEDS_EVIDENCE`.
- No result metric is invented.

---

## Phase 3: Finalize the thesis outline

### Goals

Turn the proposed outline into the final working outline.

### Codex actions

1. Review `outline.md` against VNUK template requirements.
2. Compare against VNUK completed sample chapter flow.
3. Compare against Playwright thesis samples for automation-specific chapter flow.
4. Adjust section names if needed.
5. Lock the outline for drafting.

### Done criteria

- `outline.md` is approved by the user.
- `tasks.md` contains section-level drafting tasks mapped to the final outline.

---

## Phase 4: Prepare front matter after chapters

### Drafting order

Front matter is prepared after the main chapters are stable so definitions, abbreviations, contribution wording, and the abstract match the actual thesis content.

1. `front-matter/definitions.md`
2. `front-matter/abbreviations.md`
3. `front-matter/author-contribution.md`
4. `front-matter/acknowledgements.md`
5. `front-matter/abstract.md`
6. `front-matter/title-page.md`
7. `front-matter/approval-page.md`

### Rules

- The abstract is drafted after at least Chapters 1, 3, 4, and 5 have stable content.
- Definitions and abbreviations must match terms actually used in the thesis.

### Done criteria

- Front matter exists in English.
- The VNUK-required front matter is complete.

---

## Phase 5: Draft chapters one by one

### Chapter drafting loop

For each chapter:

1. Read the chapter objective from `outline.md`.
2. Read relevant evidence from `evidence-matrix.md`.
3. Read relevant references from `citation-register.md`.
4. Draft only the target chapter file.
5. Add `NEEDS_EVIDENCE` markers where exact evidence is missing.
6. Review for academic tone, structure, coherence, and citation coverage.
7. Update `tasks.md` and `progress.md`.
8. Ask for user approval before moving to the next chapter.

### Drafting order

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

### Rationale for this order

Chapter 3 and Chapter 4 are drafted first because the repository design and implementation evidence is already organized. Chapter 5 must wait until the evidence gate is complete. Chapter 2 is drafted after the project-specific design and implementation scope is clear, so the literature review can focus on concepts actually used by the framework. Chapter 1 and Chapter 6 are drafted later so the introduction, contribution claims, limitations, and conclusion match the verified thesis content.

---

## Phase 6: Review and revise

### Review passes

1. Structural review: does every section match the outline?
2. Evidence review: is every technical claim supported?
3. Citation review: are citations complete and consistent?
4. Academic tone review: is the writing formal and precise?
5. Consistency review: are terms, abbreviations, figure/table labels, and file paths consistent?
6. Word-template migration review: can the Markdown be copied into the VNUK `.docx` template cleanly?

### Done criteria

- No unresolved `NEEDS_EVIDENCE` markers in final chapters.
- No broken internal references.
- No duplicated or contradictory definitions.
- All figures and tables have captions.

---

## Phase 7: Assemble `thesis.md`

### Codex actions

1. Merge front matter and chapters into `docs/thesis-workspace/thesis.md`.
2. Keep each chapter source file unchanged for maintainability.
3. Add reference list and appendices.
4. Ensure heading levels are compatible with Word styles.
5. Create a copy/paste checklist for migration into the VNUK Word template.

### Done criteria

- `thesis.md` is complete.
- The source chapter files remain the source of truth.
- The user can copy content into the VNUK Word template.

---

## Phase 8: Final academic QA

### QA checklist

- Title is consistent across title page, abstract, and introduction.
- All front-matter sections exist.
- Chapter numbering is consistent.
- All figures and tables are cited in the text.
- All references are cited in the body.
- No citation appears in the body without a reference-list entry.
- No reference-list entry is unused unless VNUK allows bibliography-only sources.
- No placeholder text remains.
- No source-code paths are wrong.
- No test result is claimed without evidence.
- English is academic, clear, and professional.

---

## Recommended Codex working modes

### For planning

Use plan mode:

```text
/plan Read docs/thesis-workspace/plan.md, docs/thesis-workspace/outline.md, docs/thesis-workspace/tasks.md, and propose the next 5 thesis-writing tasks only. Do not edit files yet.
```

### For implementation/drafting

Use local mode when editing files:

```text
/local
Use the thesis-drafter agent and $thesis-drafting skill. Draft only docs/thesis-workspace/chapters/chapter-1-introduction.md based on outline.md and evidence-matrix.md. Update tasks.md and progress.md after finishing. Do not modify source code.
```

### For review

Use review mode:

```text
/review Review the changes under docs/thesis-workspace only. Focus on VNUK structure compliance, academic English, evidence coverage, citation consistency, and unresolved NEEDS_EVIDENCE markers.
```

### For subagent parallel review

Use explicit subagent instruction:

```text
Spawn four subagents and wait for all results:
1. thesis-reviewer: review academic structure and tone.
2. thesis-citation-auditor: review citation and evidence coverage.
3. thesis-researcher: check whether any factual claims need stronger sources.
4. thesis-orchestrator: verify progress.md and tasks.md are updated.
Return a consolidated review and do not edit files until I approve.
```

---

## Human approval gates

Codex must stop and ask for approval after:

- creating or changing the master outline
- finishing each chapter draft
- changing citation style
- adding or removing a major thesis section
- claiming final evaluation results
- modifying source code outside `docs/thesis-workspace`, `.codex`, `.agents`, or `AGENTS.md`


## Diagram and figure production gate

For every major chapter, evaluate whether a diagram would improve reader comprehension. When a diagram is useful, the assistant must:

1. consult `diagram-workflow.md`;
2. add or update the entry in `figure-register.md`;
3. create an editable diagram source under `assets/diagrams/src/`;
4. render an SVG/PNG output under `assets/diagrams/out/` when tooling is available;
5. insert a figure reference and academic caption into the relevant chapter;
6. update `progress.md` and `tasks.md`.

Minimum required diagram categories:

- framework layered architecture;
- UI test execution flow;
- API test execution flow;
- Playwright reporting pipeline;
- evaluation workflow;
- Copilot Agentic-AI workflow for Automation Testing.
