---
name: thesis-latex-migration
description: Use this skill when bootstrapping, converting, compiling, auditing, or preparing the VNUK thesis LaTeX / Overleaf migration.
---

# Thesis LaTeX Migration Skill

## Trigger

Use this skill when the user asks Codex to:

- create or revise the LaTeX thesis project
- convert approved Markdown thesis content to LaTeX
- run LaTeX compilation and fix syntax/layout issues
- prepare the Overleaf sync workflow
- audit content parity between Markdown and LaTeX

## Required Reading

1. `docs/thesis-workspace/latex-migration/latex-migration-spec.md`
2. `docs/thesis-workspace/tasks.md`
3. `docs/thesis-workspace/progress.md`
4. The relevant Markdown source file for the current conversion task.
5. The relevant LaTeX target file under `docs/thesis-latex/`.

## Golden Rules

- Do not rewrite, shorten, expand, or improve thesis prose during conversion.
- Do not invent citations, evidence, metrics, figures, or committee metadata.
- Preserve APA 7 with `biblatex` and Biber unless the user explicitly approves a citation-style change.
- Keep Markdown as the academic-content source of truth until the LaTeX migration is fully approved.
- Record content issues in `docs/thesis-workspace/latex-migration/compile-issue-log.md`; do not silently fix approved prose.
- Convert one chapter at a time and stop for approval before moving to the next chapter.
- Do not include private thesis-writing workflow details in thesis-facing `.tex` output.

## Bootstrap Workflow

For T-092:

1. Create the `docs/thesis-latex/` skeleton.
2. Create config files, front matter placeholders, chapter placeholders, appendix placeholders, bibliography placeholder, scripts, and migration control docs.
3. Ensure page numbering is roman for front matter and switches to arabic only once immediately before Chapter 1.
4. Compile the stub project with:

```powershell
latexmk -pdf -file-line-error -interaction=nonstopmode -halt-on-error main.tex
```

5. Do not convert chapter prose.

## Conversion Workflow

For T-093 and later:

1. Read the source Markdown and target LaTeX mapping.
2. Convert headings, citations, figures, tables, code, and cross-references without changing meaning.
3. Update `source-map.md`, `conversion-register.md`, and `latex-progress.md`.
4. Compile the full LaTeX project.
5. Fix LaTeX syntax or layout issues only.
6. Record unresolved content or formatting problems in `compile-issue-log.md`.
7. Stop for user approval after each chapter conversion.

