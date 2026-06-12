# Overleaf Sync Guide

This guide will be completed in T-099 after the local LaTeX project passes the readiness gate.

## Intended Strategy

1. Create a dedicated Overleaf project for the thesis only.
2. Keep the Overleaf project scoped to `docs/thesis-latex/`.
3. Do not sync the full automation framework repository, `node_modules`, Playwright reports, or local test artifacts.
4. Use Overleaf Git integration for pull/compile/push coordination.

## Local Build First

Before syncing to Overleaf, run from `docs/thesis-latex/`:

```powershell
latexmk -pdf -file-line-error -interaction=nonstopmode -halt-on-error main.tex
```

T-099 must document the final clone URL, pull/compile/push protocol, and any Overleaf-specific package adjustments.

