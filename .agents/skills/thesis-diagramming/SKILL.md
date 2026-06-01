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

## Diagram workflow

1. Identify the thesis section and the claim the figure supports.
2. Add or update the planned figure in `figure-register.md`.
3. Draft the diagram source in `assets/diagrams/src/`.
4. Render it using the approved renderer.
5. Review readability, label consistency, and caption quality.
6. Update `figure-register.md`, `evidence-matrix.md`, and the target chapter.

## Output quality checklist

Before marking a diagram ready:
- The source file is committed and editable.
- The rendered file exists.
- The figure has a number placeholder and caption.
- The diagram supports a specific paragraph or section.
- The caption explains what the reader should understand.
- The diagram does not expose secrets, tokens, private account data, or irrelevant implementation noise.
