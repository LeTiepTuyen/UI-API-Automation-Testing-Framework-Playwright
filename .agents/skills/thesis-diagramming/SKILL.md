---
name: thesis-diagramming
description: Use this skill when the user asks Codex to design, generate, review, render, or insert thesis figures, Mermaid diagrams, PlantUML diagrams, Graphviz DOT diagrams, architecture diagrams, flowcharts, sequence diagrams, pipeline diagrams, or visual explanations for the graduation thesis.
---

# Thesis Diagramming Skill

## Purpose

Create thesis-ready diagrams that are accurate, reproducible, version-controlled, and suitable for exporting into Word/PDF later.

## Mandatory rules

1. Prefer text-based diagram sources over manually drawn images.
2. Store editable sources under `docs/thesis-workspace/assets/diagrams/src/`.
3. Store rendered outputs under `docs/thesis-workspace/assets/diagrams/out/`.
4. Use SVG as the master export when possible; generate PNG only for Word insertion or preview.
5. Every figure must be registered in `docs/thesis-workspace/figure-register.md`.
6. Every diagram must have a clear academic caption and a target thesis section.
7. Do not invent architecture details. Ground framework diagrams in repository source files and project documents.
8. Keep labels in professional academic English for thesis use.
9. Use readable left-to-right flow for process diagrams unless top-down is clearer.
10. Avoid decorative complexity. Prefer simple, explanatory diagrams over dense posters.
11. Apply the Academic Mermaid Visual Style Guide when creating Mermaid diagrams.
12. Audit complexity before drawing; split large diagrams instead of forcing every concept into one figure.
13. The project Copilot Agentic-AI workflow for Automation Testing may be diagrammed only as a project automation-testing workflow, never as a thesis-writing workflow.
14. Prefer technically informative diagrams over overly sparse diagrams: each important node should normally communicate its role, mechanism, or repository-facing artifact, while still staying readable in Word/PDF.

## Tool selection policy

Use Mermaid first for:
- workflow diagrams
- flowcharts
- sequence diagrams
- state diagrams
- class diagrams at a moderate level
- entity relationship diagrams
- Gantt charts
- CI/CD or testing pipeline diagrams
- high-level architecture diagrams

Use PlantUML when:
- a stricter UML use case, component, class, sequence, or deployment diagram is needed
- C4-style architecture is requested

Use Graphviz DOT when:
- dependency graphs, layered graphs, or repository structure graphs need precise automatic layout

Use screenshots only for:
- real application UI evidence
- Playwright HTML report evidence
- terminal/test execution evidence

## Academic Mermaid visual style guide

Mermaid thesis diagrams must use clean minimalist academic visuals. They should be readable in Word/PDF export, visually consistent across chapters, and modern without becoming decorative.

Style requirements:

- Separate groups, architectural layers, and workflow phases clearly.
- Use distinct but soft colors for semantic groups.
- Keep typography, spacing, node shapes, and connector style consistent.
- Use concise node labels, normally under 6-8 words where possible.
- Use strong contrast between section headers/groups and internal nodes.
- Avoid excessive gradients, emojis, novelty icons, decorative clutter, and dense poster-like layouts.
- Use professional academic English for all labels.
- Do not include the private thesis-writing workflow, private agents, private skills, or thesis harness in thesis-facing diagrams.
- Use compact technical labels that carry meaning. Prefer labels such as `Page Object<br/>selectors + actions` over vague labels such as `Page Object` when the extra detail helps the reader understand the mechanism.
- Use short edge labels only when they explain responsibility transfer, such as `injects`, `calls`, `wraps`, `validates`, `resets state`, or `produces evidence`.
- Avoid decorative detail, but include enough technical specificity for a reader to understand what is being abstracted, reused, validated, or configured.

Recommended Mermaid conventions:

- Use `%%{init: ... }%%` for Mermaid theme variables when useful.
- Use `classDef` for semantic node groups and assign classes consistently.
- Use soft border colors, light fills, readable dark text, and neutral connectors.
- Use stronger title/header emphasis only where Mermaid supports it reliably.
- Prefer SVG output as the master artifact.
- Keep edge labels short and use them only when they clarify meaning.

Reusable academic palette:

- `core`: cool gray/slate for foundation and shared framework utilities.
- `ui`: soft blue for UI tests, Page Objects, workflows, and browser interactions.
- `api`: soft green for API tests, service classes, clients, and endpoints.
- `data`: soft amber for DTOs, constants, test data, and configuration.
- `reporting`: soft purple for reports, traces, screenshots, and result evidence.
- `agentic`: soft indigo for the project Copilot automation-testing workflow.
- `risk`: soft rose/red for missing evidence, limitations, risks, and blocked claims.
- `neutral`: readable dark text and neutral connector colors.

Suggested Mermaid scaffold:

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

## Technical density calibration

The thesis diagrams should be richer than a presentation sketch but simpler than a full engineering blueprint. Use this calibration:

- Overview diagrams: 8-12 nodes, 3-5 groups, and node labels that name the architectural responsibility.
- Focused mechanism diagrams: 10-15 nodes, 2-4 groups, and node labels that include the concept plus its concrete role, such as `Fixture<br/>injects Page Objects`.
- Sequence/process diagrams: 5-8 participants or phases, with concise messages that show data/control flow.
- Avoid one-word nodes unless the surrounding group or edge label already makes the technical role obvious.
- Prefer a small number of information-rich nodes over many tiny generic nodes.
- If a figure needs more than 15 nodes, split it into a concept overview and one or more focused mechanism figures.

Each technical diagram should answer at least two of these questions:

- What responsibility does this component/concept own?
- What concrete framework artifact demonstrates it?
- What data, control, or dependency flows through it?
- What quality attribute does it support, such as maintainability, reusability, traceability, reliability, or debuggability?
- What limitation or evidence boundary must not be overclaimed?

## Complexity control and split rules

Before creating or revising any diagram:

1. Identify the one main idea the figure should explain.
2. Estimate the node count.
3. Count major phases/groups.
4. Check for likely crossing edges, long labels, and mixed concerns.
5. Decide whether to keep one figure or split it into multiple figures.

Split a diagram when:

- it exceeds about 12-15 nodes;
- a workflow has more than 3 major phases;
- it requires many crossing edges or long labels;
- it attempts to show every repository folder/file at once;
- it mixes architecture, implementation, reporting, and evaluation concerns in one figure.

Use progressive disclosure:

- start with one high-level overview;
- add focused follow-up figures when a concept is important enough to require more technical detail;
- simplify large diagrams before inserting them into thesis chapters.

Framework architecture may be split into:

- high-level layered architecture;
- UI automation layer detail;
- API automation layer detail;
- fixture/dependency injection detail;
- test data and cleanup strategy detail;
- reporting/evidence pipeline.

Copilot Agentic-AI workflow for Automation Testing may be split into:

- overall agentic automation-testing workflow;
- test-case design workflow;
- script-generation workflow;
- code-review workflow.

## Diagram workflow

1. Identify the thesis section and the claim the figure supports.
2. Audit complexity and decide whether the diagram should be split.
3. Add or update the planned figure in `figure-register.md`.
4. Draft the diagram source in `assets/diagrams/src/`.
5. Apply the academic Mermaid style system when Mermaid is used.
6. Render SVG using the approved renderer.
7. Review readability, label consistency, caption quality, and Word/PDF suitability.
8. Update `figure-register.md`, `evidence-matrix.md`, and the target chapter when chapter drafting is in scope.

## Output quality checklist

Before marking a diagram ready:
- The source file is committed and editable.
- The rendered file exists.
- The figure has a number placeholder and caption.
- The diagram supports a specific paragraph or section.
- The caption explains what the reader should understand.
- The diagram does not expose secrets, tokens, private account data, or irrelevant implementation noise.
- The diagram follows the Academic Mermaid Visual Style Guide when Mermaid is used.
- The complexity audit supports keeping it as one figure; otherwise it has been split into focused figures.
