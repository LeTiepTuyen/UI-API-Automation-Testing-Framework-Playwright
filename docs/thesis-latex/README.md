# VNUK Thesis LaTeX Project

This directory is the LaTeX publication workspace for the approved Markdown thesis:

**A COMPREHENSIVE UI AND API AUTOMATION TESTING FRAMEWORK USING PLAYWRIGHT**

Markdown under `docs/thesis-workspace/` remains the academic-content source of truth until the LaTeX migration is fully approved.

## Build

From this directory:

```powershell
latexmk -xelatex -file-line-error -interaction=nonstopmode -halt-on-error main.tex
```

The project now uses XeLaTeX through `latexmkrc` so the thesis can use Calibri-style system fonts required by the formatting guideline.

If MiKTeX reports that `latexmk` cannot find Perl, use the temporary bootstrap fallback:

```powershell
xelatex -file-line-error -interaction=nonstopmode -halt-on-error main.tex
```

Clean generated files:

```powershell
latexmk -C
```

## Migration Rule

Do not convert all chapters at once. Convert and review one chapter per approval gate, following `docs/thesis-workspace/latex-migration/latex-migration-spec.md`.
