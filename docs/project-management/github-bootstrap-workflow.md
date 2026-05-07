# GitHub Bootstrap Workflow for Solo Graduation Project

## 1. Purpose

This document is the single source of truth for bootstrapping and managing the GitHub repository for the **Unsplash UI & API Automation Testing Framework** graduation project.

The project has already been developed significantly in local source code before Git was initialized.  
Therefore, this workflow is designed to:

- initialize Git and GitHub governance professionally from this point onward
- import the current local codebase into GitHub in a structured and reviewable way
- represent the already completed local work through a clean phase-based history
- manage the repository like a real software project, even though it is a solo graduation project

The workflow should produce a GitHub repository that clearly demonstrates:
- project organization
- incremental progress
- issue / branch / PR discipline
- professional repository governance

---

## 2. Target End State on GitHub

After the bootstrap process is completed, GitHub should show the following:

### A. Issues tab
Three major Issues should exist and be closed:

1. **Phase A — Repository Bootstrap**
2. **Phase B — Framework Foundation**
3. **Phase C — Framework Architecture**

### B. Pull Requests tab
Three merged Pull Requests should be visible:

1. PR for Phase A
2. PR for Phase B
3. PR for Phase C

### C. Code tab / `main` branch
- `main` must contain the **full current local source code**
- the source code must arrive in `main` through the 3 phase branches
- the commit history should be clean and understandable
- the repository should look like it was managed in a structured engineering process rather than dumped all at once

This is the intended repository presentation state for graduation project review.

---

## 3. Project Context

This is a **solo graduation project**, but it must still be managed professionally.

The current local codebase already satisfies these completed development phases:

- **Phase A — Repository Bootstrap**
- **Phase B — Framework Foundation**
- **Phase C — Framework Architecture**

This means the GitHub bootstrap process does **not** start from zero code.

Instead, it must:
- create repository governance first
- then import the current local codebase through 3 large structured phase branches
- then continue future development through normal issue / branch / PR flow

---

## 4. Minimal Repository Files Required Before Bootstrap

The repository should contain these core governance files before starting the GitHub bootstrap execution:

### Root files
- `.gitignore`
- `README.md`
- `PROJECT_ROADMAP.md`
- `CHANGELOG.md`

### Project management document
- `docs/project-management/github-bootstrap-workflow.md`

### GitHub templates
- `.github/ISSUE_TEMPLATE/task.md`
- `.github/ISSUE_TEMPLATE/bug.md` *(optional but recommended)*
- `.github/pull_request_template.md`

These are sufficient for the initial GitHub bootstrap and governance flow.  
Additional project-management documents can be added later only if needed.

---

## 5. Minimal GitHub Repository Configuration

Once the remote GitHub repository is created, configure the following:

### 5.1 Repository basics
- repository name
- description
- visibility according to graduation project needs
- default branch = `main`

### 5.2 Labels
Create these minimum labels.

#### Type labels
- `type:feature`
- `type:task`
- `type:bug`
- `type:docs`
- `type:refactor`
- `type:test`
- `type:chore`

#### Area labels
- `area:framework`
- `area:ui`
- `area:api`
- `area:page-object`
- `area:fixtures`
- `area:workflow`
- `area:agentic-ai`
- `area:github-management`
- `area:docs`

#### Priority labels
- `priority:high`
- `priority:medium`
- `priority:low`

#### Status labels
- `status:todo`
- `status:in-progress`
- `status:review`
- `status:done`

### 5.3 Branch protection
Apply lightweight protection to `main`:
- no force push
- no delete
- prefer merge through Pull Request

### 5.4 GitHub Project board
Create one public GitHub Project board named **Graduation-Project-Automation-Testing-Framework** and link it to the repository.

Use a simple Kanban-style flow with these columns:
- Todo
- In Progress
- Done

This board should stay simple because this is a solo graduation project.

---

## 6. Git Flow for This Project

This project uses a **lightweight GitHub Flow**.

### Long-lived branch
- `main`

### Short-lived branches
During bootstrap, use these 3 branch names:

- `phase/repository-bootstrap`
- `phase/framework-foundation`
- `phase/framework-architecture`

After bootstrap, use normal short-lived branches such as:
- `feat/<scope>`
- `fix/<scope>`
- `docs/<scope>`
- `refactor/<scope>`
- `test/<scope>`
- `chore/<scope>`

Examples:
- `feat/ui-profile-scenarios`
- `feat/api-profile-tests`
- `fix/login-flow-selector`
- `docs/agentic-workflow-update`

This flow is chosen because:
- the project is solo
- a heavier Git Flow would add unnecessary overhead
- GitHub Flow is enough to demonstrate professional engineering discipline

---

## 7. Core Working Principles

All Git and GitHub activity must follow these principles:

1. **Do not push the whole current codebase in one single commit**
2. **Do not create too many bootstrap issues**
3. **Group code changes by logical phase and module**
4. **Use branches and PRs even for solo work**
5. **Keep repository history understandable**
6. **Prefer simplicity and traceability over process overload**
7. **Use GitHub Issues and the Project board to show progress clearly**
8. **Do not fake old commit timestamps to simulate older Git activity**

The goal is to create a repository history that is clean, honest, and professionally structured.

---

## 8. Commit Message Convention

All commits must use **Conventional Commit style**.

### Format
`<type>: <short summary>`

### Allowed types
- `feat:`
- `fix:`
- `docs:`
- `refactor:`
- `test:`
- `chore:`

### Examples
- `chore: initialize repository governance and gitignore`
- `feat: add playwright configuration and package setup`
- `feat: add page object layer`
- `feat: add fixtures and reusable workflow support`
- `test: add initial automated UI and API scenarios`
- `docs: add github bootstrap workflow`

### Commit rules
- one logical unit per commit
- avoid vague commits such as `update code` or `fix stuff`
- avoid mixing unrelated changes in one commit
- keep commit history readable by another reviewer

---

## 9. The 3 Initial Phase Issues

To avoid creating too many bootstrap issues, the initial GitHub setup must use exactly **3 major phase issues**.

---

### Issue 1
## Phase A — Repository Bootstrap

### Recommended issue title
`[Task] Phase A - Repository Bootstrap`

### Suggested labels
- `type:task`
- `area:github-management`
- `priority:high`
- `status:todo`

### Objective
Establish the Git and GitHub foundation for the graduation project repository.

### In scope
- local Git initialization
- remote GitHub repo creation
- `.gitignore`
- `README.md`
- `PROJECT_ROADMAP.md`
- `CHANGELOG.md`
- `docs/project-management/github-bootstrap-workflow.md`
- `.github/ISSUE_TEMPLATE/task.md`
- `.github/ISSUE_TEMPLATE/bug.md`
- `.github/pull_request_template.md`
- labels
- Project board bootstrap

### Out of scope
- framework core technical implementation
- page objects
- fixtures
- workflows
- api service layer
- tests

### Branch name
`phase/repository-bootstrap`

### Suggested commit breakdown
1. `chore: initialize repository governance and gitignore`
2. `docs: add roadmap, changelog, and bootstrap workflow`
3. `docs: add issue templates and pull request template`

---

### Issue 2
## Phase B — Framework Foundation

### Recommended issue title
`[Task] Phase B - Framework Foundation`

### Suggested labels
- `type:task`
- `area:framework`
- `priority:high`
- `status:todo`

### Objective
Import the core low-level technical foundation of the automation framework.

### In scope
- `package.json`
- `playwright.config.ts`
- `core/`
- `constants/`
- `config/`
- `utils/`
- `data-object/`
- `test-data/`

### Out of scope
- page objects
- fixtures
- workflows
- api service layer
- test files

### Branch name
`phase/framework-foundation`

### Suggested commit breakdown
1. `feat: add playwright configuration and package setup`
2. `feat: add core browser, api, and element utilities`
3. `feat: add constants, config, and shared helpers`
4. `feat: add data objects and test data support`

---

### Issue 3
## Phase C — Framework Architecture

### Recommended issue title
`[Task] Phase C - Framework Architecture`

### Suggested labels
- `type:task`
- `area:framework`
- `priority:high`
- `status:todo`

### Objective
Import the higher-level automation framework architecture and initial runnable automation assets.

### In scope
- `page-object/`
- `fixtures/`
- `workflow/`
- `api-service/`
- `tests/`

### Out of scope
- future scenario expansion beyond the current local baseline
- future Agentic AI workflow files
- future optimization/refactor tasks

### Branch name
`phase/framework-architecture`

### Suggested commit breakdown
1. `feat: add page object layer`
2. `feat: add fixtures and reusable workflow support`
3. `feat: add api service layer`
4. `test: add initial automated UI and API scenarios`

---

## 10. Baseline Import Execution Plan

Because the project already exists locally, the baseline import must be executed in this order:

### Step 1
Initialize Git locally in the current project root.

### Step 2
Create or confirm the core repository governance files.

### Step 3
Create the remote GitHub repository.

### Step 4
Create labels and the GitHub Project board.

### Step 5
Create the 3 phase Issues.

### Step 6
Execute the baseline import in this order:

1. `phase/repository-bootstrap`
2. `phase/framework-foundation`
3. `phase/framework-architecture`

### Step 7
For each phase:
- create the branch from `main`
- stage only the files relevant to that phase
- commit in logical grouped commits
- push the branch
- create a Pull Request into `main`
- move the linked issue card through the Project board
- merge the PR
- close the issue

### Step 8
Repeat until all 3 phases are merged into `main`.

---

## 11. Pull Request Rules

Each phase branch must be merged through a Pull Request.

### PR requirements
- one PR per phase
- link the related issue
- use the repository PR template
- summarize the scope clearly
- explain what was imported in that phase
- mention validation status where relevant

### Expected bootstrap PR count
- exactly 3 phase PRs

This is enough to present the initial repository setup in a professional and understandable way.

---

## 12. GitHub Project Board Flow

The GitHub Project board should be used as follows:

### Initial state
- all 3 phase Issues are created
- all 3 are added to `Todo`

### Phase execution
- move next issue to `Todo`
- once the related branch work begins, move it to `In Progress`
- once the PR is merged and the issue is closed, move it to `Done`

Keep issue tracking aligned with `Todo`, `In Progress`, and `Done`.

This is sufficient project board management for the bootstrap stage.

---

## 13. What Not to Do

Do not:
- create dozens of bootstrap issues
- dump the whole project into one commit
- push directly to `main` without branches and PRs
- overcomplicate the project board
- create fake development history
- introduce unnecessary branch models for a solo project

The repository should look professional, but not artificially over-managed.

---

## 14. Success Criteria

The GitHub bootstrap is successful when:

### Issues
- the 3 phase Issues are created and closed

### Pull Requests
- the 3 phase Pull Requests are created and merged

### Code
- `main` contains the full current local source code

### History
- the commit history is organized by logical phase and module

### Project board
- the Project board exists and reflects the phase progression

### Presentation value
- the repository clearly demonstrates professional, traceable, phase-based progress suitable for a solo graduation project

---

## 15. Final Rule

This workflow document is the primary source of truth for bootstrapping and governing the GitHub repository for this project.

GitHub Copilot Agent mode and `github-mcp-server` must follow this workflow unless explicit human approval is given to deviate from it.