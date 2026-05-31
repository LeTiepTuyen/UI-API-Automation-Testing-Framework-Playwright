# Unsplash Automation Framework - Agentic AI Workflow Bootstrap Plan

This document is a bootstrap plan for setting up the initial Agentic AI workflow structure in the current Unsplash UI & API Automation Testing Framework repository.

The goal is to create a reusable GitHub Copilot Agent-mode setup that supports:
- understanding the repository before making changes
- designing UI and API test scenarios
- generating Playwright automation scripts using the existing framework
- reviewing generated code for maintainability and framework compliance

This repository already has an existing automation framework.  
The purpose of this bootstrap is **not** to redesign the framework, but to add the missing Agentic AI support layer around it.

---

## 1. Bootstrap Objective

Create the following initial structure in the repository:

```text
.github/
├── copilot-instructions.md
├── AGENTS.md
├── agents/
│   ├── GenerateTestScript.agent.md
│   ├── DesignTestCase.agent.md
│   └── CodeReview.agent.md
├── prompts/
│   ├── understand-project.prompt.md
│   ├── design-ui-scenarios.prompt.md
│   ├── design-api-scenarios.prompt.md
│   ├── generate-ui-script.prompt.md
│   ├── generate-api-script.prompt.md
│   └── review-generated-script.prompt.md

.claude/
└── skills/
    ├── playwright-mcp/
    │   ├── SKILL.md
    │   └── references/
    │       ├── dom-inspection.md
    │       ├── selector-strategy.md
    │       ├── navigation-and-auth.md
    │       └── validation-flow.md
    ├── script-generation/
    │   ├── SKILL.md
    │   └── references/
    │       ├── reuse-first-policy.md
    │       ├── page-object-rules.md
    │       ├── fixture-update-rules.md
    │       └── test-file-placement.md
    ├── design-test-case/
    │   ├── SKILL.md
    │   └── references/
    │       ├── ui-scenario-patterns.md
    │       └── api-scenario-patterns.md
    └── code-review/
        ├── SKILL.md
        └── references/
            ├── selector-review.md
            ├── pom-review.md
            └── maintainability-checklist.md

docs/
└── agentic-workflow/
    ├── bootstrap-plan.md
    └── workflow-overview.md