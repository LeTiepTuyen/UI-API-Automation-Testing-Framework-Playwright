# GitHubPhaseWorkflow Usage Guide

## 1. Purpose

This guide explains how to use the `GitHubPhaseWorkflow` agent for future phase-based work in the **Unsplash UI & API Automation Testing Framework**.

The goal is to keep future work repeatable and lightweight while still following a professional GitHub flow:
- create or refine the phase scope
- open and manage issues or tasks
- place work on the GitHub Project board
- create a branch from `main`
- implement the phase locally
- commit, push, open a PR, merge, and close the issue

This guide is intended for future phases after the bootstrap already completed.

---

## 2. Short Answer

Your understanding is **mostly correct**.

The practical flow should be:

1. Ask `GitHubPhaseWorkflow` to define the phase scope and GitHub work items.
2. Create or update the issue or task for that phase.
3. Move the item onto the Project board.
4. Create the implementation branch from `main`.
5. Switch locally to that branch.
6. Code until the issue scope is complete.
7. Commit in small logical groups.
8. Push the branch and open a PR.
9. Merge the PR into `main`.
10. Close the issue and mark the board item done.

So yes, the overall idea is right. The important detail is that **branch creation comes before local coding**, and **PR/merge/close happen after the code is finished and pushed**.

---

## 3. Recommended Phase Flow

For each future phase, use this sequence:

### A. Phase planning
- Describe the phase goal to `GitHubPhaseWorkflow`.
- Let the agent decide whether the phase needs one issue or a few small related issues.
- Define labels, board state, branch name, and PR target.

### B. GitHub setup
- Create the issue or task.
- Put it on the Project board.
- Move it to `Todo`.
- Create the branch from `main`.

### C. Local implementation
- Fetch and checkout the new branch locally.
- Implement the requested phase.
- Reuse existing page objects, workflows, fixtures, services, and utilities first.
- Keep commits small and logical.

### D. Delivery close-out
- Push the branch.
- Open the PR.
- Merge into `main` when ready.
- Close the issue.
- Move the board item to `Done`.

---

## 4. What To Do In Practice

### 4.1 When you start a new phase
Use `GitHubPhaseWorkflow` first to answer:
- What is the scope of this phase?
- Is it one issue or multiple issues?
- What labels should be used?
- What branch name should be created?
- What is the expected commit grouping?
- What is the PR title and target branch?

### 4.2 When the phase is ready to implement
After the GitHub setup is clear:
- fetch the branch
- checkout the branch locally
- make the code changes
- validate locally as needed
- commit and push

### 4.3 When implementation is done
Call `GitHubPhaseWorkflow` again, or continue with it, to:
- open the PR
- move the board item forward if needed
- merge the PR
- close the issue
- mark the board item `Done`

---

## 5. Suggested Board State Flow

The repository currently uses a simple Project board with:
- `Todo`
- `In Progress`
- `Done`

Use it like this:
- `Todo` when the phase issue is created
- `In Progress` when implementation begins
- `Done` after the PR is merged and the issue is closed

If you later need finer-grained state, keep it lightweight and only expand if the repository workflow truly needs it.

---

## 6. Branch and PR Flow

For each future phase:
- create a branch from `main`
- use a clear phase or scope-based branch name
- commit in logical chunks, not one huge dump
- push the branch to GitHub
- open a PR into `main`
- merge the PR after validation
- delete the branch if it is no longer needed

This keeps the history readable and traceable.

---

## 7. What `GitHubPhaseWorkflow` Should Be Used For

Use the agent when you want help with:
- planning a new phase
- defining issue and task scope
- setting up GitHub board items
- defining branch and PR order
- closing out a phase cleanly after merge
- keeping workflow docs aligned with actual GitHub behavior

Do not use it for writing feature code itself. For that, hand off to:
- `DesignTestCase` for scenario design
- `GenerateTestScript` for code generation
- `CodeReview` for review and refinement

---

## 8. Example Conversation Pattern

A practical request to the agent can look like this:

> We have a new Phase D for profile search improvements. Please design the GitHub workflow for it, create the issue/task plan, define the board state, suggest the branch name, and then tell me when I should start local coding.

Then, after coding is done:

> The Phase D code is finished. Please help me complete the GitHub close-out flow: push, PR, merge, close issue, and mark the board item done.

---
## 9. Example Phase E

Use this example when you want to apply the workflow to a future phase such as **Phase E — Agentic AI workflow**.

### Step 1: Planning and GitHub setup
Call `GitHubPhaseWorkflow` with this style of request:

> GitHubPhaseWorkflow: plan phase Phase E — Agentic AI workflow. Create the issue/task plan, board item, labels, branch name, commit groups, and PR close-out plan. Stop before coding.

Expected result:
- one clear issue or a small set of related tasks
- board item moved to `Todo`
- branch name created from `main`
- commit groups defined for the phase
- PR target and close-out plan defined

### Step 2: Local implementation
After the branch is created:
- fetch the branch
- checkout the branch locally
- code the Phase E scope
- split commits if the work is large enough
- reuse existing code before creating new files

### Step 3: Close-out
When coding is finished, call `GitHubPhaseWorkflow` again:

> GitHubPhaseWorkflow: Phase E coding is finished. Push if needed, open or update the PR, merge into main, close the issue, and move the board item to Done.

Expected result:
- branch pushed
- PR opened or updated
- PR merged into `main`
- issue closed
- board item moved to `Done`

## 10. Key Rule

The cleanest way to think about the workflow is:

- **GitHubPhaseWorkflow** = organize and govern the phase
- **local branch work** = implement the phase
- **PR/merge/close** = finish the phase

That is the repeatable pattern for future work in this repository.
