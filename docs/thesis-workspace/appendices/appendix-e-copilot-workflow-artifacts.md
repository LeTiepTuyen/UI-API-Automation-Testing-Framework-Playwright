# Appendix E: Copilot Agentic-AI Workflow Artifacts

This appendix provides a concise artifact map for the project-level Copilot Agentic-AI workflow used to support automation testing work. It covers only the automation-testing workflow that belongs to the project scope. Private thesis-writing workflow files, private planning agents, personal drafting notes, and private assistant-control artifacts are excluded from the thesis.

| Artifact area | Representative path | Thesis-safe purpose |
|---|---|---|
| Workflow overview | `docs/agentic-workflow/workflow-overview.md` | Summarizes the project automation-testing support workflow for repository understanding, test-case design, script generation, and review. |
| Repository-wide Copilot instructions | `.github/copilot-instructions.md` | Defines framework conventions such as reuse-first behavior, Page Object expectations, fixture usage, workflow placement, API service rules, and generated-code review expectations. |
| GitHub agent definitions | `.github/AGENTS.md`; `.github/agents/` | Describes project-specific automation-support agent roles for scenario design, script generation, and review. |
| Prompt entry points | `.github/prompts/` | Provides prompt templates for repository understanding, UI/API scenario design, Playwright script generation, and generated-code review. |
| Claude automation skills | `.claude/skills/` | Provides reusable automation-development and review guidance, including scenario design, script generation, Playwright MCP usage, and code-review references. |
| Chapter 3 workflow figure | `docs/thesis-workspace/assets/diagrams/src/copilot-agentic-automation-workflow.mmd` | Editable source for the high-level Copilot Agentic-AI workflow figure used in Chapter 3. |
| Chapter 4 workflow figures | `docs/thesis-workspace/assets/diagrams/src/copilot-script-generation-workflow.mmd`; `docs/thesis-workspace/assets/diagrams/src/copilot-code-review-workflow.mmd` | Editable sources for implementation-focused workflow figures used in Chapter 4. |

The workflow is presented as a documented support mechanism for automation testing activities. The thesis does not claim measured productivity improvement, defect reduction, review accuracy, or code-quality improvement from the workflow because those outcomes were not quantitatively evaluated.
