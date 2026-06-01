# Prompt: Generate Thesis Diagrams

Use this prompt when asking Codex to create or update thesis figures.

```text
Use the thesis-diagramming skill.

Task:
Create or update the required thesis diagrams for <chapter/section>.

Read first:
@docs/thesis-workspace/diagram-workflow.md
@docs/thesis-workspace/figure-register.md
@docs/thesis-workspace/outline.md
@docs/thesis-workspace/evidence-matrix.md
@docs/thesis-workspace/writing-style-guide.md
@README.md
@docs/project-overview.md
@.github/copilot-instructions.md

Requirements:
1. Use Mermaid as the default format unless PlantUML or Graphviz is more appropriate.
2. Store diagram source files under @docs/thesis-workspace/assets/diagrams/src/.
3. Render SVG outputs under @docs/thesis-workspace/assets/diagrams/out/ if the local renderer is available.
4. Update @docs/thesis-workspace/figure-register.md.
5. Add figure references and captions into the relevant chapter draft.
6. Do not invent architecture details or evaluation metrics.
7. Mark missing evidence as NEEDS_EVIDENCE.
8. Keep all diagram labels in professional academic English.
```

Guardrail: Do not create thesis figures about Codex, private agents, private skills, or the private thesis-writing workflow.
