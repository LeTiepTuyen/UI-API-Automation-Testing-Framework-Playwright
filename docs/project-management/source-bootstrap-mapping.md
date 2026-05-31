# Source Bootstrap Mapping

## 1. Purpose

This document defines the practical source-code mapping for the initial Git/GitHub bootstrap of the Unsplash UI & API Automation Testing Framework.

Its purpose is to help the bootstrap workflow:
- map the current local repository content into 3 major completed phases
- split the local source code into logical commit groups
- avoid pushing the entire current codebase in one single commit
- keep the initial repository history understandable and reviewable

This document is intended for the initial bootstrap only.

---

## 2. Ignore Rules for Initial Source Bootstrap

The following folders must be completely ignored during the initial source bootstrap:

- `.github/`
- `.claude/`
- `docs/`

The following generated or local-only folders must also be ignored:

- `node_modules/`
- `playwright-report/`
- `test-results/`

These folders are not part of the initial source import to GitHub at this stage.

---

## 3. Included Source Areas for Initial Bootstrap

The following areas are part of the initial source bootstrap:

- `api-service/`
- `config/`
- `constants/`
- `core/`
- `data-object/`
- `fixtures/`
- `page-object/`
- `test-data/`
- `tests/`
- `utils/`
- `workflow/`
- `.gitignore`
- `.gitkeep` *(optional if intentionally kept)*
- `package.json`
- `package-lock.json`
- `playwright.config.ts`
- `README.md` *(if present in root)*

---

## 4. Phase Mapping

## Phase A — Repository Bootstrap

### Scope
Repository identity and minimal root bootstrap files.

### Include
- `.gitignore`
- `.gitkeep` *(optional)*
- `README.md` *(if present)*
- `package.json`
- `package-lock.json`

### Commit groups
#### A1
**Commit message:** `chore: initialize repository with gitignore and root metadata`

Files:
- `.gitignore`
- `.gitkeep` *(optional)*
- `README.md` *(if present)*

#### A2
**Commit message:** `chore: add base project package metadata`

Files:
- `package.json`
- `package-lock.json`

---

## Phase B — Framework Foundation

### Scope
Low-level technical foundation and shared reusable framework support.

### Include
- `playwright.config.ts`
- `config/`
- `constants/`
- `core/`
- `utils/`
- `data-object/`
- `test-data/`

### Commit groups
#### B1
**Commit message:** `feat: add Playwright configuration`

Files:
- `playwright.config.ts`

#### B2
**Commit message:** `feat: add shared configuration and constants`

Files:
- `config/`
- `constants/`

#### B3
**Commit message:** `feat: add core automation utilities`

Files:
- `core/`

#### B4
**Commit message:** `feat: add shared utility modules`

Files:
- `utils/`

#### B5
**Commit message:** `feat: add data objects and test data support`

Files:
- `data-object/`
- `test-data/`

---

## Phase C — Framework Architecture

### Scope
Higher-level automation framework layers and initial runnable automation assets.

### Include
- `api-service/`
- `fixtures/`
- `page-object/`
- `workflow/`
- `tests/`

### Commit groups
#### C1
**Commit message:** `feat: add API service layer`

Files:
- `api-service/`

#### C2
**Commit message:** `feat: add fixture layer`

Files:
- `fixtures/`

#### C3
**Commit message:** `feat: add page object layer`

Files:
- `page-object/`

#### C4
**Commit message:** `feat: add reusable workflow layer`

Files:
- `workflow/`

#### C5
**Commit message:** `test: add initial automated test scenarios`

Files:
- `tests/`

---

## 5. Execution Order

The bootstrap import must be executed in this exact order:

1. Phase A — Repository Bootstrap
2. Phase B — Framework Foundation
3. Phase C — Framework Architecture

Within each phase:
- stage only the files listed for that phase
- commit only by the defined commit groups
- push the phase branch
- create the Pull Request
- merge into `main`

---

## 6. Rule for Conflict or Mismatch

If the current local repository contains additional files not listed here:
- inspect them first
- assign them to the most appropriate phase only if they belong to the actual source bootstrap
- otherwise ignore them during initial bootstrap

Do not invent extra bootstrap phases unless absolutely necessary.

---

## 7. Final Bootstrap Goal

After applying this mapping:
- the 3 phase Issues should be closed
- the 3 phase PRs should be merged
- `main` should contain the full current local source code except the intentionally ignored folders
- the commit history should remain structured by phase and logical module 