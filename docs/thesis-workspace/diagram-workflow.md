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

## 3. Repository locations

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

## 4. Figure naming convention

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

## 5. Caption format

Use academic figure captions:

```text
Figure X.X. Layered architecture of the Playwright UI and API automation framework.
```

Every caption must answer: what does this figure help the reader understand?

## 6. Minimum planned figures for this thesis

| Figure | Target chapter | Tool | Purpose |
|---|---:|---|---|
| Test Automation Pyramid | Chapter 2 | Mermaid | Explain levels of software testing and why E2E tests should be selective. |
| Playwright Framework Layered Architecture | Chapter 3 | Mermaid | Show the relationship between tests, fixtures, workflows, page objects, API services, DTOs, utilities, and config. |
| UI Test Execution Flow | Chapter 3/4 | Mermaid | Explain how a UI test moves through fixtures, workflows, page objects, browser utilities, and assertions. |
| API Test Execution Flow | Chapter 3/4 | Mermaid | Explain how API tests use service classes, endpoint constants, API utilities, DTOs, and response assertions. |
| Test Data and Cleanup Strategy | Chapter 4 | Mermaid | Explain how test data is centralized and how cleanup/reset flows protect test independence. |
| Playwright Reporting Pipeline | Chapter 4/5 | Mermaid | Show trace, HTML report, JUnit report, and result artifacts. |
| Evaluation Methodology | Chapter 5 | Mermaid | Show how results, maintainability, coverage, and limitations are evaluated. |

## 7. Diagram review checklist

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

## 8. Diagram prompt pattern

Use this pattern when asking the assistant to generate a diagram:

```text
Use the thesis-diagramming skill.
Create a Mermaid diagram for <section/topic>.
Target chapter: <chapter>.
Read these files first: <files>.
Store source under docs/thesis-workspace/assets/diagrams/src/.
Render SVG under docs/thesis-workspace/assets/diagrams/out/ if the local renderer is available.
Update docs/thesis-workspace/figure-register.md.
Do not invent architecture details; mark unknowns as NEEDS_EVIDENCE.
```
