---
name: thesis-diagramming
description: Use this skill when designing, generating, reviewing, rendering, or inserting thesis figures including Mermaid diagrams, architecture diagrams, flowcharts, sequence diagrams, or pipeline diagrams for the graduation thesis.
---

# Thesis Diagramming Skill

## Purpose

Create thesis-ready diagrams that are accurate, reproducible, version-controlled, and suitable for exporting into Word/PDF.

## Mandatory rules

1. Prefer text-based diagram sources over manually drawn images.
2. Store editable sources under `docs/thesis-workspace/assets/diagrams/src/`.
3. Store rendered outputs under `docs/thesis-workspace/assets/diagrams/out/`.
4. Use SVG as the master export format; generate PNG only for Word insertion or preview.
5. Every figure must be registered in `docs/thesis-workspace/figure-register.md`.
6. Every diagram must have a clear academic caption and a target thesis section.
7. Do not invent architecture details; ground framework diagrams in repository source files.
8. Keep labels in professional academic English.
9. Use readable left-to-right flow for process diagrams unless top-down is clearer.
10. Avoid decorative complexity; prefer simple, explanatory diagrams over dense posters.
11. Apply the Academic Mermaid Visual Style Guide when creating Mermaid diagrams.
12. Audit complexity before drawing; split large diagrams instead of forcing every concept into one figure.
13. The Copilot Agentic-AI workflow may be diagrammed only as a project automation-testing workflow, never as a thesis-writing workflow.

## Tool selection

Use **Mermaid** for: workflow diagrams, flowcharts, sequence diagrams, state diagrams, class diagrams, ER diagrams, CI/CD pipeline diagrams, high-level architecture diagrams.

Use **PlantUML** for: strict UML use case, component, class, sequence, or deployment diagrams; C4-style architecture.

Use **Graphviz DOT** for: dependency graphs, layered graphs, repository structure graphs.

Use **screenshots** only for: real application UI evidence, Playwright HTML report evidence, terminal/test execution evidence.

## Academic Mermaid visual style guide

Style requirements:
- Separate groups, architectural layers, and workflow phases clearly.
- Use distinct but soft colors for semantic groups.
- Consistent typography, spacing, node shapes, and connector style.
- Concise node labels, normally under 6-8 words.
- Strong contrast between section headers/groups and internal nodes.
- Avoid emojis, decorative clutter, and dense poster-like layouts.
- Do not include the private thesis-writing workflow in thesis-facing diagrams.

Recommended Mermaid scaffold:

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

Reusable academic palette:
- `core`: cool gray/slate for shared framework utilities
- `ui`: soft blue for UI tests, Page Objects, browser interactions
- `api`: soft green for API tests, service classes, endpoints
- `data`: soft amber for DTOs, constants, test data, configuration
- `reporting`: soft purple for reports, traces, screenshots, result evidence
- `agentic`: soft indigo for the Copilot automation-testing workflow
- `risk`: soft rose/red for missing evidence, limitations, blocked claims

## Complexity control

Split a diagram when it exceeds approximately 12-15 nodes, has more than 3 major phases, has many crossing edges, or mixes architecture and evaluation concerns in one figure.

## Diagram workflow

1. Identify the thesis section and the claim the figure supports.
2. Audit complexity and decide whether to split.
3. Add or update the planned figure in `figure-register.md`.
4. Draft the diagram source in `assets/diagrams/src/`.
5. Apply the Academic Mermaid style system.
6. Render SVG using the approved renderer.
7. Review readability, caption quality, and Word/PDF suitability.
8. Update `figure-register.md` and the target chapter when in scope.

## Output quality checklist

Before marking a diagram ready:
- Source file is committed and editable.
- Rendered file exists.
- Figure has a number placeholder and caption.
- Diagram supports a specific paragraph or section.
- Caption explains what the reader should understand.
- Diagram does not expose secrets, private workflow details, or irrelevant implementation noise.
- Complexity audit supports keeping it as one figure; otherwise it has been split.
