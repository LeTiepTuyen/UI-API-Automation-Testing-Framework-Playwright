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
2. Audit diagram complexity before drawing:
   - identify the main idea;
   - estimate node count;
   - identify major phases/groups;
   - decide whether to keep one figure or split into multiple figures.
3. Split the diagram when it exceeds about 12-15 nodes, has more than 3 major workflow phases, or would create crossing edges or dense labels.
4. Apply the Academic Mermaid Visual Style Guide from @docs/thesis-workspace/diagram-workflow.md:
   - use clean minimalist academic visuals;
   - use semantic `classDef` and `class` assignments;
   - use soft fills, soft borders, readable dark text, and neutral connectors;
   - keep labels concise, normally under 6-8 words where possible;
   - avoid excessive gradients, emojis, novelty icons, and decorative clutter.
5. Use the reusable academic Mermaid palette:
   - core/foundation: cool gray or slate;
   - UI layer: soft blue;
   - API/service layer: soft green;
   - data/config layer: soft amber;
   - reporting/evidence layer: soft purple;
   - agentic workflow layer: soft indigo;
   - risk/limitation/evidence-needed: soft rose/red.
6. Store diagram source files under @docs/thesis-workspace/assets/diagrams/src/.
7. Render SVG outputs under @docs/thesis-workspace/assets/diagrams/out/ if the local renderer is available.
8. Update @docs/thesis-workspace/figure-register.md.
9. Review rendered readability in Word/PDF context before marking a diagram ready.
10. Add figure references and captions into the relevant chapter draft only when chapter drafting is in scope.
11. Do not invent architecture details or evaluation metrics.
12. Mark missing evidence as NEEDS_EVIDENCE.
13. Keep all diagram labels in professional academic English.
```

Guardrails:
- Do not create thesis figures about Codex, private agents, private skills, or the private thesis-writing workflow.
- The project Copilot Agentic-AI workflow for Automation Testing is allowed as a project feature, but it must be shown only as the automation-testing workflow, not as a thesis-writing workflow.
- If a large framework architecture diagram becomes too dense, split it into high-level architecture, UI automation detail, API automation detail, and reporting/evidence pipeline figures.
- If a Copilot Agentic-AI workflow diagram becomes too dense, split it into overall workflow, test-case design, script-generation, and code-review figures.
