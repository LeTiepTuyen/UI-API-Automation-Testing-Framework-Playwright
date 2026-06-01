# Thesis Diagram and Figure Workflow

## 1. Purpose

This workflow defines how diagrams should be planned, created, rendered, reviewed, and inserted for the thesis **A Comprehensive UI and API Automation Testing Framework Using Playwright: An Enterprise-Standard Approach**.

The thesis must not rely only on screenshots. It should include clear diagrams that explain architecture, flows, testing layers, Playwright execution, API service abstraction, CI/CD readiness.

## 2. Recommended diagram stack

### Primary tool: Mermaid

Use Mermaid as the default diagram language because it is text-based, Markdown-friendly, easy to version control, and supports many diagram types useful for a software engineering thesis:

- flowcharts
- sequence diagrams
- class diagrams
- state diagrams
- entity relationship diagrams
- Gantt charts
- user journey diagrams
- Git graphs
- C4-style architecture diagrams where suitable
- timelines
- block diagrams
- architecture diagrams
- XY charts and simple charts

Recommended source extension: `.mmd`.

Recommended renderer:

```bash
npx -y @mermaid-js/mermaid-cli -i docs/thesis-workspace/assets/diagrams/src/<diagram>.mmd -o docs/thesis-workspace/assets/diagrams/out/<diagram>.svg
```

### Secondary tool: PlantUML

Use PlantUML when a stricter UML or C4-style diagram is needed, especially:

- use case diagram
- component diagram
- deployment diagram
- detailed class diagram
- detailed sequence diagram

Recommended source extension: `.puml`.

Recommended renderer:

```bash
java -jar plantuml.jar -tsvg docs/thesis-workspace/assets/diagrams/src/<diagram>.puml
```

### Secondary tool: Graphviz DOT

Use Graphviz DOT for dependency, relationship, and layered repository graphs where automatic layout is important.

Recommended source extension: `.dot` or `.gv`.

Recommended renderer:

```bash
dot -Tsvg docs/thesis-workspace/assets/diagrams/src/<diagram>.dot -o docs/thesis-workspace/assets/diagrams/out/<diagram>.svg
```

### Optional renderer/service: Kroki

Kroki can render many diagram syntaxes through one interface. Use it only when local renderers are unavailable or when a unified rendering service is preferred. Do not send private source code, secrets, tokens, or sensitive data to a public rendering service.

## 3. Academic Mermaid visual style guide

Thesis diagrams must use a clean, minimalist academic visual style. The goal is to make architecture, workflow, evidence, and evaluation relationships readable in Word/PDF output, not to create decorative graphics.

Required style rules:

- Use clear separation between groups, sections, architectural layers, and workflow phases.
- Use distinct but soft colors for different semantic groups.
- Keep typography, spacing, node shapes, and edge style consistent across related diagrams.
- Use readable labels suitable for Word/PDF export; prefer concise node labels, normally under 6-8 words where possible.
- Use modern but non-decorative styling.
- Use strong contrast between section headers/groups and internal nodes.
- Avoid excessive gradients, emojis, novelty icons, decorative clutter, and dense poster-like diagrams.
- Keep all diagram labels in professional academic English.
- Do not include the private thesis-writing workflow, private agents, private skills, or thesis harness in thesis-facing diagrams.
- The Copilot Agentic-AI workflow for Automation Testing may appear only as a project automation-testing workflow, not as a thesis-writing workflow.

### Mermaid styling conventions

When Mermaid supports the diagram type:

- Use `%%{init: ... }%%` for theme variables when useful.
- Use `classDef` for semantic node groups such as `core`, `ui`, `api`, `data`, `reporting`, `agentic`, `risk`, and `neutral`.
- Apply `class` assignments consistently; avoid one-off styling unless a node has a genuine semantic role.
- Use light fills, soft border colors, readable dark text, and neutral connectors.
- Use stronger title/header emphasis only where Mermaid supports it reliably.
- Prefer SVG output as the master artifact; PNG is optional only for preview or Word insertion constraints.
- Keep edge labels short and use them only when they add meaning.

Reusable academic Mermaid palette:

| Semantic group | Recommended fill | Recommended border | Intended use |
|---|---:|---:|---|
| Foundation/core layer | `#F1F5F9` | `#64748B` | Core utilities, browser/API abstractions, shared framework services. |
| UI layer | `#DBEAFE` | `#60A5FA` | UI tests, Page Objects, UI workflows, browser interactions. |
| API/service layer | `#DCFCE7` | `#4ADE80` | API tests, service classes, API clients, endpoint abstractions. |
| Data/config layer | `#FEF3C7` | `#F59E0B` | DTOs, test data, constants, environment and runtime config. |
| Reporting/evidence layer | `#F3E8FF` | `#A78BFA` | Reports, traces, screenshots, result files, evaluation evidence. |
| Agentic workflow layer | `#E0E7FF` | `#818CF8` | Project Copilot automation-testing workflow components. |
| Risk/limitation/evidence-needed | `#FFE4E6` | `#FB7185` | Missing evidence, limitations, risks, blocked claims. |
| Neutral connectors/text | `#334155` | `#94A3B8` | Arrows, labels, and neutral supporting nodes. |

Example style scaffold:

```mermaid
%%{init: {"theme": "base", "themeVariables": {"fontFamily": "Arial", "primaryTextColor": "#1F2937", "lineColor": "#64748B"}}}%%
flowchart TB
    classDef core fill:#F1F5F9,stroke:#64748B,color:#1F2937
    classDef ui fill:#DBEAFE,stroke:#60A5FA,color:#1F2937
    classDef api fill:#DCFCE7,stroke:#4ADE80,color:#1F2937
    classDef data fill:#FEF3C7,stroke:#F59E0B,color:#1F2937
    classDef reporting fill:#F3E8FF,stroke:#A78BFA,color:#1F2937
    classDef agentic fill:#E0E7FF,stroke:#818CF8,color:#1F2937
    classDef risk fill:#FFE4E6,stroke:#FB7185,color:#1F2937
```

## 4. Complexity control and split rules

Before creating or revising a diagram, audit its complexity.

General rules:

- One diagram should explain one main idea only.
- Avoid diagrams with too many nodes, long labels, crossing edges, or unrelated concerns.
- If a diagram exceeds about 12-15 nodes, split it into one overview diagram plus smaller focused diagrams.
- If a workflow has more than 3 major phases, consider separate phase diagrams.
- Avoid placing every repository folder or file into one architecture diagram.
- Prefer progressive disclosure: start with an overview figure, then add focused follow-up figures for UI detail, API detail, reporting, evidence, or workflow phases.
- Large diagrams should be simplified before insertion into thesis chapters.

Explicit split decisions:

- Framework architecture may be split into:
  - high-level layered architecture;
  - UI automation layer detail;
  - API automation layer detail;
  - reporting/evidence pipeline.
- Copilot Agentic-AI workflow for Automation Testing may be split into:
  - overall agentic automation-testing workflow;
  - test-case design workflow;
  - script-generation workflow;
  - code-review workflow.

Recommended complexity audit before rendering:

```text
Main idea:
Approximate node count:
Major phases/groups:
Potential crossing edges:
Decision: keep one diagram / split into multiple figures
Reason:
```

## 5. Repository locations

```text
docs/thesis-workspace/assets/diagrams/
├── README.md
├── src/
│   ├── framework-architecture.mmd
│   ├── ui-api-test-execution-flow.mmd
└── out/
    ├── framework-architecture.svg
    ├── ui-api-test-execution-flow.svg
```

Use `assets/figures/` for screenshots and externally created image figures. Use `assets/diagrams/` for generated diagram source and output.

## 6. Figure naming convention

Use kebab-case names:

```text
framework-architecture.mmd
api-service-abstraction-flow.mmd
playwright-execution-pipeline.mmd
```

Rendered files should keep the same base name:

```text
framework-architecture.svg
framework-architecture.png
```

## 7. Caption format

Use academic figure captions:

```text
Figure X.X. Layered architecture of the Playwright UI and API automation framework.
```

Every caption must answer: what does this figure help the reader understand?

## 8. Minimum planned figures for this thesis

| Figure | Target chapter | Tool | Purpose |
|---|---:|---|---|
| Test Automation Pyramid | Chapter 2 | Mermaid | Explain levels of software testing and why E2E tests should be selective. |
| Playwright Framework Layered Architecture | Chapter 3 | Mermaid | Show the relationship between tests, fixtures, workflows, page objects, API services, DTOs, utilities, and config. |
| UI Test Execution Flow | Chapter 3/4 | Mermaid | Explain how a UI test moves through fixtures, workflows, page objects, browser utilities, and assertions. |
| API Test Execution Flow | Chapter 3/4 | Mermaid | Explain how API tests use service classes, endpoint constants, API utilities, DTOs, and response assertions. |
| Test Data and Cleanup Strategy | Chapter 4 | Mermaid | Explain how test data is centralized and how cleanup/reset flows protect test independence. |
| Playwright Reporting Pipeline | Chapter 4/5 | Mermaid | Show trace, HTML report, JUnit report, and result artifacts. |
| Evaluation Methodology | Chapter 5 | Mermaid | Show how results, maintainability, coverage, and limitations are evaluated. |

## 9. Diagram review checklist

Before using a diagram in a thesis chapter:

- The diagram source exists in `assets/diagrams/src/`.
- The rendered output exists in `assets/diagrams/out/`.
- The figure is listed in `figure-register.md`.
- The target chapter references the figure.
- The caption is concise and academic.
- The figure does not include unverified claims.
- The figure does not reveal secrets or account-specific tokens.
- The diagram remains readable when inserted into Word.
- The diagram uses consistent terminology with the thesis glossary.
- The diagram follows the academic Mermaid visual style guide where Mermaid is used.
- The complexity audit has decided whether the figure should remain one diagram or be split.

## 10. Diagram prompt pattern

Use this pattern when asking the assistant to generate a diagram:

```text
Use the thesis-diagramming skill.
Create a Mermaid diagram for <section/topic>.
Target chapter: <chapter>.
Read these files first: <files>.
Audit diagram complexity first and decide whether to keep one figure or split into multiple figures.
Apply the Academic Mermaid Visual Style Guide, including semantic class definitions and concise labels.
Store source under docs/thesis-workspace/assets/diagrams/src/.
Render SVG under docs/thesis-workspace/assets/diagrams/out/ if the local renderer is available.
Update docs/thesis-workspace/figure-register.md.
Review readability in Word/PDF context before marking the diagram ready.
Do not invent architecture details; mark unknowns as NEEDS_EVIDENCE.
```
