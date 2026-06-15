# Overleaf Sync Guide (T-099)

How to publish and maintain the thesis LaTeX project (`docs/thesis-latex/`) on
Overleaf Premium via Git, keeping it scoped to the thesis only (never the full
automation framework repository).

- **Compiler on Overleaf:** XeLaTeX + Biber (set in the project menu).
- **Source of truth:** `docs/thesis-latex/` in this repository. Overleaf is a
  publishing/compile target, not the primary source.
- **Strategy:** clone the Overleaf project into a *separate* folder outside this
  repo, copy the clean LaTeX source in with `scripts/export-overleaf.ps1`,
  commit, and push. This keeps Overleaf history independent from the main repo.

---

## ✅ Method actually used (2026-06-14): Overleaf **GitHub Sync**

The new Overleaf UI steers you to **GitHub Sync** rather than the direct
`git.overleaf.com` remote. That is the route used for this thesis, and it is the
recommended one going forward:

- **Overleaf project:** `6a2ebaad5239feb373495b8e`.
- **Linked GitHub repo (PRIVATE):** `LeTiepTuyen/Thesis---UI-and-API-Automation-Framework-Playwright-`.
- **Local mirror clone:** `D:\DevTools\Projects\thesis-overleaf-sync`.
- The Overleaf **Git token is NOT needed** with GitHub Sync — auth for the push
  is your GitHub account (GitHub CLI / credential manager). Revoke any Overleaf
  Git token you generated.
- Keep the GitHub repo **Private** (it contains the thesis and the personal
  signature image). Overleaf Premium GitHub Sync works with private repos.

**Sync cycle (GitHub Sync):**

```powershell
# 1) edit + build locally in docs/thesis-latex (scripts/build.ps1)
# 2) mirror the source into the GitHub clone (replaces stub / updates files)
#    — copy main.tex + config/frontmatter/chapters/appendices/bibliography/figures
#      and a clean latexmkrc/.gitignore into the clone (see export-overleaf.ps1)
cd D:\DevTools\Projects\thesis-overleaf-sync
git add -A
git commit -m "Sync: <what changed>"
git push origin main
# 3) in Overleaf: Menu > GitHub > "Pull GitHub changes into Overleaf", then Recompile
```

> To pull Overleaf *web-editor* edits back: in Overleaf use **Menu > GitHub >
> "Push Overleaf changes to GitHub"**, then `git pull` in the clone and copy the
> changed files back into `docs/thesis-latex/`.

The direct `git.overleaf.com` instructions below remain valid as an alternative.

---

---

## What gets synced

| Synced to Overleaf | Excluded |
|---|---|
| `main.tex` | `build/` and all build artifacts (`*.aux`, `*.log`, `*.pdf`, `*.bbl`, …) |
| `config/`, `frontmatter/`, `chapters/`, `appendices/` | `scripts/` (PowerShell, not used by Overleaf) |
| `bibliography/references.bib` | `tables/` (empty), `README.md`, `document-setup-summary.md` |
| `figures/**` (PDF vector + PNG, incl. signature) | loose top-level `main.*` artifacts |
| a clean `latexmkrc` + `.gitignore` (written by the export script) | the full automation framework repo, `node_modules`, test reports |

---

## One-time setup

### Step 1 — Create the Overleaf project (USER)

1. Sign in to Overleaf Premium.
2. **New Project → Blank Project**, name it e.g. `Thesis - UI and API Automation Framework (Playwright)`.
3. Open **Menu (top-left)** and set:
   - **Compiler:** `XeLaTeX`  *(required — the thesis uses fontspec/Calibri; pdfLaTeX will fail)*.
   - **Main document:** `main.tex` *(set this after the first push, once main.tex exists)*.
   - **TeX Live version:** the latest available.

### Step 2 — Generate a Git authentication token (USER)

Overleaf Git access uses a token, not your account password.

1. Go to **Account Settings → Git Integration** (or `https://www.overleaf.com/user/settings`).
2. Click **Create Token** (a.k.a. *Git authentication token*) and copy it.
   - Treat it like a password. **Do not paste it into any file in this repo.**
3. Find the project's Git URL: in the project, **Menu → Git → Clone with Git**.
   It looks like `https://git.overleaf.com/<PROJECT_ID>`.

> Give Claude/Codex the **Git URL** (`https://git.overleaf.com/<PROJECT_ID>`).
> Keep the **token** private — you enter it at the credential prompt yourself
> (see Step 4 auth note).

### Step 3 — Clone the Overleaf repo into a separate folder

Pick a path **outside** this repository, e.g. `D:\DevTools\Projects\overleaf-thesis`:

```powershell
cd D:\DevTools\Projects
git clone https://git.overleaf.com/<PROJECT_ID> overleaf-thesis
```

At the credential prompt:
- **Username:** `git` (any value works)
- **Password:** paste your **Git authentication token**

### Step 4 — Export the clean LaTeX source and push

From this repository, run the export script with the clone folder as target:

```powershell
cd D:\DevTools\Projects\AutoTestingFramework\docs\thesis-latex
./scripts/export-overleaf.ps1 -Target "D:\DevTools\Projects\overleaf-thesis"
```

This copies the compilable source (no build artifacts) and writes an
Overleaf-friendly `latexmkrc` + `.gitignore` into the clone. Then:

```powershell
cd D:\DevTools\Projects\overleaf-thesis
git add -A
git commit -m "Sync thesis LaTeX project from docs/thesis-latex"
git push
```

**Auth note (token security):** `git push`/`clone` will prompt for credentials —
enter your Overleaf email/`git` as username and the **token** as password. If you
want Windows to remember it, run `git config --global credential.helper manager`
once. Never embed the token in a committed file or in a URL that gets stored in
shell history (`https://git:<token>@…` leaks the token into history).

### Step 5 — Verify the compile on Overleaf

1. Reload the Overleaf project; you should see `main.tex`, `config/`, `chapters/`, etc.
2. **Menu → Compiler = XeLaTeX**, **Main document = main.tex** (confirm).
3. Click **Recompile**. Expect a clean build, **77 pages**, APA references, all
   figures present, no undefined references.
4. If the bibliography is empty on the first compile, recompile once more
   (Overleaf runs Biber on the second pass).

---

## Ongoing protocol (pull → edit → compile → push)

Treat `docs/thesis-latex/` as the source of truth and Overleaf as the mirror.

**A. Local edits → Overleaf (normal direction):**

```powershell
# 1) edit + build locally in docs/thesis-latex (scripts/build.ps1)
# 2) pull any Overleaf-side changes first to avoid conflicts
cd D:\DevTools\Projects\overleaf-thesis
git pull
# 3) re-export and push
cd D:\DevTools\Projects\AutoTestingFramework\docs\thesis-latex
./scripts/export-overleaf.ps1 -Target "D:\DevTools\Projects\overleaf-thesis"
cd D:\DevTools\Projects\overleaf-thesis
git add -A
git commit -m "Sync: <what changed>"
git push
```

**B. Edits made in the Overleaf web editor → back into this repo:**

```powershell
cd D:\DevTools\Projects\overleaf-thesis
git pull          # fetch the Overleaf web edits
# then manually copy the changed files back into docs/thesis-latex/ and commit
# them in the main repo, so docs/thesis-latex stays the source of truth.
```

> Prefer editing in **one** place per change to avoid merge conflicts. If both
> sides changed, `git pull` will surface a conflict in the clone; resolve it
> there, then reconcile `docs/thesis-latex/`.

---

## Troubleshooting

| Symptom | Fix |
|---|---|
| `! LaTeX Error: ... fontspec` / font errors | Compiler is not XeLaTeX. Menu → Compiler → **XeLaTeX**. |
| References/citations show as `?` | Recompile once more (Biber runs on the 2nd pass); ensure `bibliography/references.bib` was pushed. |
| Wrong/blank main document | Menu → **Main document → main.tex**. |
| Calibri looks different on Overleaf | Overleaf has no Calibri; the project falls back to **Carlito** (metric-compatible), which is expected and visually equivalent. |
| "No PDF" with a `build/` directory error | Make sure the **Overleaf** `latexmkrc` has **no** `out_dir`/`aux_dir` (the export script writes the correct one). |
| Push rejected (`non-fast-forward`) | `git pull` in the clone first, resolve, then `git push`. |

---

## Status

- Local LaTeX project passed the T-098 readiness gate (77 pages after the
  trailing blank page was removed, 0 undefined, 0 overfull, XeLaTeX + Biber, APA 7).
- This guide + `scripts/export-overleaf.ps1` + `.gitignore` are ready.
- **Pending the user:** create the Overleaf project, set XeLaTeX, generate the
  Git token, and provide the `https://git.overleaf.com/<PROJECT_ID>` URL.
- Turnitin is run by the user externally on the exported PDF.
