# GitHubPhaseWorkflow 3-Line Prompt

Copy and paste these three lines when you want to run a future phase with the GitHub phase workflow:

1. GitHubPhaseWorkflow: plan phase [name]. Create the issue/task, labels, board item, branch name, commit groups, and PR plan. Stop before coding.
2. GitHubPhaseWorkflow: the branch is ready. I have checked it out locally and I am coding the phase now.
3. GitHubPhaseWorkflow: coding is finished. Push if needed, open or update the PR, merge into main, close the issue, and move the board item to Done.

Use line 1 only for planning and GitHub setup.
Use line 2 after the branch exists and you have started local coding.
Use line 3 when the phase is complete and you want close-out.

Example:

1. GitHubPhaseWorkflow: plan phase Phase E — Agentic AI workflow. Create the issue/task plan, board item, branch name, commit groups, and PR close-out plan. Stop before coding.
2. GitHubPhaseWorkflow: the branch is ready. I have checked it out locally and I am coding the phase now.
3. GitHubPhaseWorkflow: coding is finished. Push if needed, open or update the PR, merge into main, close the issue, and move the board item to Done.
# GitHubPhaseWorkflow 3-Step Prompt

Use this prompt when you want to manage a future phase with a simple 3-step flow.

Repository source of truth:
- GitHub repo: https://github.com/LeTiepTuyen/UI-API-Automation-Testing-Framework-Playwright
- GitHub repo name: UI-API-Automation-Testing-Framework-Playwright
- Project board: Graduation-Project-Automation-Testing-Framework
- Project board URL: https://github.com/users/LeTiepTuyen/projects/3
- Default repo linked to the project board: UI-API-Automation-Testing-Framework-Playwright

GitHub action preference:
- Prefer using GitHub MCP server actions whenever they are available for issue, branch, project board, and PR operations.
- Use browser or manual UI actions only when a needed GitHub MCP action is not available.

## Step 1: Plan and set up GitHub
Ask `GitHubPhaseWorkflow` to do phase planning and GitHub setup for the new phase.

Include:
- phase name or delivery scope
- target area: UI, API, docs, refactor, or test
- expected issue or task title
- labels to use
- project board state
- branch name to create from `main`
- PR title and close-out plan

When planning or closing a phase, make sure the issue, branch, and project board item all refer to the same GitHub repo and the same project board above.

Mandatory project board step:
- After any issue and branch are created for a card task on the project board, always add a step to link the newly created issue back to the corresponding project board card/task.
- Treat this as part of the standard phase setup so future automation can perform it automatically.

Expected output:
- phase scope breakdown
- phase scope breakdowns
- GitHub issue/task plan
- board placement plan
- branch name
- commit group suggestion
- PR and close-out plan

## Step 2: Implement locally
After the branch is created, fetch and checkout the branch locally.
Then code the phase until the issue scope is complete.

You may also:
- split commits into small logical chunks during coding
- reuse existing page objects, workflows, fixtures, services, DTOs, and utilities
- validate locally as needed before closing the phase

## Step 3: Close out the phase
When coding is finished, ask `GitHubPhaseWorkflow` again to complete close-out.

Include:
- confirmation that coding is complete
- branch name
- linked issue or task
- PR status or push status if already available

Expected output:
- push branch if needed
- open or update PR
- merge into `main`
- close the issue
- update the board item to `Done`
- confirm the phase is finished

## Short command example
Use a prompt like this:

> GitHubPhaseWorkflow: plan a new phase for [feature name]. Create the issue/task plan, board state, branch name, and PR close-out plan. Stop before coding.

Then later:

> GitHubPhaseWorkflow: the phase code is finished. Push the branch if needed, create or update the PR, merge into `main`, close the issue, and mark the board item done.

## Rule of thumb
- Use Step 1 only for planning and setup.
- Use Step 2 for local implementation.
- Use Step 3 for delivery close-out.

This keeps the GitHub workflow and the coding workflow cleanly separated while still following the same phase process.