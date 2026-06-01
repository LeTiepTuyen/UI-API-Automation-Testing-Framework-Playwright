# Thesis Diagrams

This folder stores editable diagram sources and rendered outputs for the thesis.

```text
assets/diagrams/
├── src/   # Mermaid, PlantUML, Graphviz source files
└── out/   # Rendered SVG/PNG outputs for Word/PDF insertion
```

## Default tool

Use Mermaid first. Mermaid source files use `.mmd`.

Render one diagram:

```bash
npx -y @mermaid-js/mermaid-cli -i docs/thesis-workspace/assets/diagrams/src/framework-architecture.mmd -o docs/thesis-workspace/assets/diagrams/out/framework-architecture.svg
```

Render all Mermaid diagrams:

```bash
node docs/thesis-workspace/scripts/render-diagrams.mjs
```

## Output policy

- Keep `.mmd`, `.puml`, or `.dot` source files in Git.
- Prefer `.svg` as the master rendered output.
- Export `.png` only when Word insertion quality requires it.
- Register every figure in `docs/thesis-workspace/figure-register.md`.
