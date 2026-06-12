## Kết luận sau khi xem `AutoTestingFramework.zip`

Bộ harness hiện tại **đã có nền tảng rất tốt cho Codex**, và cũng đã có một phần `.claude/skills`, nhưng **chưa đủ để Claude Code hiểu thesis harness ngang bằng Codex**.

Trong file zip hiện tại mình thấy:

```text
AGENTS.md                       ✅ đã có, đang là rule trung tâm cho Codex
.codex/config.toml              ✅ đã có
.codex/agents/*.toml            ✅ đã có thesis agents cho Codex
.agents/skills/thesis-*         ✅ đã có thesis skills dạng tool-neutral
docs/thesis-workspace/          ✅ đã có plan, tasks, progress, evidence, citation, review gate
.claude/skills/                 ✅ đã có nhưng mới thiên về coding Playwright
CLAUDE.md                       ❌ chưa có
.claude/settings.json           ❌ chưa có
.mcp.json                       ❌ chưa có
.claude/agents/                 ❌ chưa có Claude subagents
.claude/rules/                  ❌ chưa có Claude path-scoped rules
```

Quan trọng hơn: trong `.claude/skills` hiện tại đang có dấu hiệu **copy nhầm/mismatch**:

```text
.claude/skills/code-review/SKILL.md
→ frontmatter name lại là design-test-case

.claude/skills/script-generation/SKILL.md
→ frontmatter name lại là playwright-mcp
```

Vì vậy, task đầu tiên cho Claude Code không nên là “viết thesis ngay”, mà là:

> **Audit và nâng cấp Claude harness để Claude đọc chung AGENTS.md, hiểu thesis progress hiện tại, có Claude-specific rules/skills/agents/settings, và sửa mismatch trong `.claude/skills`.**

---

# 1) Nguyên tắc thiết kế: không tách riêng Codex harness và Claude harness

Bạn không nên tạo hai bộ rule độc lập kiểu:

```text
Codex đọc AGENTS.md
Claude đọc CLAUDE.md khác hoàn toàn
```

Vì như vậy sau vài ngày Claude và Codex sẽ hiểu project khác nhau.

Thiết kế đúng nên là:

```text
AGENTS.md
  = source of truth chung cho Codex + Claude + các agent khác

CLAUDE.md
  = file bridge riêng cho Claude, import AGENTS.md và bổ sung rule Claude-specific

docs/thesis-workspace/progress.md
  = trạng thái hiện tại của thesis

docs/thesis-workspace/tasks.md
  = task board

docs/thesis-workspace/evidence-matrix.md
  = map claim ↔ evidence

docs/thesis-workspace/citation-register.md
  = nguồn citation

.codex/
  = Codex-specific agents/config

.claude/
  = Claude-specific skills/agents/settings/rules
```

Lý do: Claude Code docs nói Claude đọc `CLAUDE.md`, không đọc `AGENTS.md` trực tiếp; nếu repo đã dùng `AGENTS.md`, cách tốt nhất là tạo `CLAUDE.md` import `AGENTS.md`, rồi thêm Claude-specific instruction bên dưới. ([Claude API Docs][1])

---

# 2) Cấu trúc nên bổ sung cho Claude Code

Bạn nên yêu cầu Claude tạo/thêm các file này:

```text
CLAUDE.md

.claude/
  settings.json
  rules/
    repository-rules.md
    thesis-workspace-rules.md
    playwright-framework-rules.md
  agents/
    thesis-orchestrator.md
    thesis-reviewer.md
    thesis-citation-auditor.md
    thesis-technical-reviewer.md
    thesis-diagram-architect.md
  skills/
    thesis-planning/
      SKILL.md
    thesis-drafting/
      SKILL.md
    thesis-review/
      SKILL.md
    thesis-evidence-citation/
      SKILL.md
    thesis-diagramming/
      SKILL.md
    thesis-handoff-sync/
      SKILL.md

.mcp.json                  optional, chỉ thêm nếu thật sự cần project-level MCP
docs/agentic-workflow/
  codex-claude-dual-agent-workflow.md
```

Claude Code chính thức hỗ trợ project-level settings trong `.claude/settings.json`, project subagents trong `.claude/agents/`, project skills trong `.claude/skills/`, và project-scoped MCP servers trong `.mcp.json`. ([Claude Code][2])

---

# 3) Bước setup Claude Code từ đầu trong VS Code

## Bước 1 — Giữ chế độ an toàn ban đầu

Trong screenshot của bạn, Claude đang ở mode:

```text
Ask before edits
```

Hãy giữ mode này trong giai đoạn setup harness. Chưa nên bật auto-accept edits ngay, vì Claude sẽ cần sửa nhiều file cấu hình.

Ban đầu chỉ cho Claude sửa:

```text
CLAUDE.md
.claude/**
.mcp.json nếu được bạn duyệt
docs/agentic-workflow/**
docs/thesis-workspace/progress.md nếu cần ghi handoff
```

Không cho Claude sửa:

```text
tests/**
api-service/**
page-object/**
workflow/**
core/**
data-object/**
test-data/**
```

trừ khi bạn yêu cầu coding task riêng.

---

## Bước 2 — Kiểm tra Claude Code đã hoạt động

Trong Claude Code panel hoặc terminal của VS Code, chạy:

```text
/doctor
```

Sau đó kiểm tra MCP/status nếu cần:

```text
/mcp
```

Claude Code docs có các lệnh quản lý MCP như `claude mcp list`, `claude mcp get`, `claude mcp remove`, và trong phiên interactive có `/mcp` để kiểm tra trạng thái server. ([Claude Code][3])

---

## Bước 3 — Chạy `/init` nhưng không để Claude overwrite tùy tiện

Vì repo của bạn đã có `AGENTS.md`, `.codex`, `.agents`, `.claude/skills`, bạn có thể dùng `/init` để Claude phân tích codebase, nhưng yêu cầu Claude **chỉ đề xuất cải tiến trước**, không ghi file ngay.

Claude docs nói `/init` có thể tạo `CLAUDE.md`, và nếu repo đã có `AGENTS.md`, Claude có thể đọc và incorporate phần phù hợp vào generated `CLAUDE.md`. Docs cũng có flow mới qua biến `CLAUDE_CODE_NEW_INIT=1` để `/init` hỏi bạn muốn setup CLAUDE.md, skills, hooks và trình bày proposal trước khi ghi file. ([Claude API Docs][1])

Trên Windows PowerShell trong VS Code terminal, bạn có thể chạy:

```powershell
$env:CLAUDE_CODE_NEW_INIT="1"
claude
```

Sau đó trong Claude session:

```text
/init
```

Nhưng với dự án của bạn, mình khuyên **không dùng `/init` một mình**. Hãy dùng prompt audit bên dưới để kiểm soát tốt hơn.

---

# 4) Prompt chính để đưa cho Claude Code ngay bây giờ

Bạn copy nguyên prompt này vào Claude Code panel trong VS Code:

```text
You are Claude Code working inside the AutoTestingFramework graduation project.

Your first task is NOT to draft thesis content yet.
Your first task is to audit and upgrade the existing agentic thesis harness so this repository works safely with both Codex and Claude Code.

Important context:
- The project already has a Codex-oriented thesis harness.
- The root AGENTS.md is the shared source of truth for Codex and should remain the shared source of truth for Claude as well.
- Claude Code reads CLAUDE.md, so create a lightweight CLAUDE.md bridge instead of duplicating the whole AGENTS.md.
- Do not modify thesis chapter content or automation test code in this task.
- Do not modify files under tests/, api-service/, page-object/, workflow/, core/, data-object/, constants/, fixtures/, test-data/, or config/ unless I explicitly approve it.
- Work only on Claude harness/config/workflow files unless you ask for approval first.

Please perform these steps:

1. Inspect the existing project structure.
2. Read these files first:
   - AGENTS.md
   - README.md
   - docs/project-overview.md
   - docs/thesis-workspace/AGENTS.md
   - docs/thesis-workspace/plan.md
   - docs/thesis-workspace/tasks.md
   - docs/thesis-workspace/progress.md
   - docs/thesis-workspace/evidence-matrix.md
   - docs/thesis-workspace/citation-register.md
   - docs/thesis-workspace/figure-register.md
   - docs/thesis-workspace/visual-evidence-register.md
   - docs/thesis-workspace/chapter-review-gate.md
   - .codex/config.toml
   - .codex/agents/*.toml
   - .agents/skills/*/SKILL.md
   - .claude/skills/*/SKILL.md

3. Audit the current Claude-specific setup:
   - Check whether CLAUDE.md exists.
   - Check whether .claude/settings.json exists.
   - Check whether .claude/rules/ exists.
   - Check whether .claude/agents/ exists.
   - Check whether .mcp.json exists.
   - Check whether existing .claude/skills have correct folder names, frontmatter names, descriptions, and content.
   - Pay special attention to duplicated or mismatched skills.

4. Before making edits, return a clear implementation plan with:
   - files to create
   - files to update
   - files not to touch
   - risks
   - whether MCP servers are necessary
   - whether plugins are necessary
   - whether hooks are necessary
   - whether project-level subagents are necessary

5. After I approve the plan, create or update only the approved files.

Target design:
- Create CLAUDE.md as a bridge that imports AGENTS.md and adds concise Claude-specific instructions.
- Do not duplicate the full AGENTS.md content inside CLAUDE.md.
- Add .claude/rules/ for path-scoped rules:
  - thesis workspace rules
  - Playwright framework rules
  - repository safety rules
- Add .claude/agents/ for Claude Code project subagents:
  - thesis-orchestrator
  - thesis-reviewer
  - thesis-citation-auditor
  - thesis-technical-reviewer
  - thesis-diagram-architect
- Mirror or adapt thesis skills from .agents/skills/thesis-* into .claude/skills/thesis-* where useful.
- Fix existing .claude/skills naming/content mismatches if found.
- Add .claude/settings.json with conservative project-level safety settings.
- Do not add secrets to any file.
- Do not commit tokens, API keys, OAuth values, or personal account credentials.
- Only add .mcp.json if the MCP server is safe, minimal, and useful for this project.
- If adding MCP, prefer Playwright MCP for browser/UI inspection only.
- Do not add random third-party MCP servers from npm without explaining why they are trustworthy.
- Use user-scope or local-scope MCP for anything requiring credentials, not committed project-level config.
- Add docs/agentic-workflow/codex-claude-dual-agent-workflow.md explaining how Codex and Claude should share the thesis progress through docs/thesis-workspace/progress.md, tasks.md, evidence-matrix.md, citation-register.md, and next-chat-handoff.md.

Acceptance criteria:
- Claude Code can start a new session and understand the project through CLAUDE.md.
- Codex can still use AGENTS.md as before.
- Both Claude and Codex use the same thesis progress source of truth.
- No private harness details are inserted into thesis chapter prose.
- No automation code is changed.
- No secrets are exposed.
- .claude/skills are not duplicated incorrectly.
- The final response includes a concise summary of changed files and how to use Claude for the next thesis task.
```

---

# 5) Nội dung `CLAUDE.md` nên được Claude tạo

Bạn có thể yêu cầu Claude tạo file này, hoặc tự tạo trước. Nội dung nên ngắn, vì Claude docs khuyên instruction càng cụ thể, ngắn, có cấu trúc thì càng dễ follow; target nên dưới khoảng 200 dòng cho mỗi `CLAUDE.md`. ([Claude API Docs][1])

```md
@AGENTS.md

# Claude Code Instructions

## Role

Claude Code is a secondary thesis and code assistant for this repository.

Codex and Claude must share the same project source of truth:
- `AGENTS.md`
- `docs/thesis-workspace/progress.md`
- `docs/thesis-workspace/tasks.md`
- `docs/thesis-workspace/evidence-matrix.md`
- `docs/thesis-workspace/citation-register.md`
- `docs/thesis-workspace/next-chat-handoff.md`

## Claude-specific workflow

Before any thesis task:
1. Read `docs/thesis-workspace/progress.md`.
2. Read `docs/thesis-workspace/tasks.md`.
3. Read `docs/thesis-workspace/evidence-matrix.md`.
4. Read `docs/thesis-workspace/citation-register.md`.
5. Read `docs/thesis-workspace/chapter-review-gate.md` if reviewing a chapter.
6. Confirm the current task and approval gate before editing.

## Collaboration with Codex

- Do not create a separate thesis state outside `docs/thesis-workspace/`.
- Do not overwrite Codex harness files under `.codex/` unless explicitly asked.
- Do not rewrite `AGENTS.md` without explicit approval.
- If Claude completes a thesis task, update `progress.md` and `next-chat-handoff.md` so Codex can continue later.
- If Claude only reviews, save the review under `docs/thesis-workspace/reviews/` and do not modify chapter prose unless approved.

## Safety

- Keep private AI workflow instructions out of the final thesis body.
- Do not read or expose secrets from `.env`, `config/.env`, or `test-data/user-info.json`.
- Do not change automation source code unless the user explicitly asks for a coding task.
- Use Ask-before-edits for harness setup and thesis writing unless the user changes the permission mode.
```

---

# 6) `.claude/settings.json` nên để conservative

Claude Code settings có nhiều scope: user, project, local, managed. Với repo này, project settings nên để trong `.claude/settings.json`; local/personal settings hoặc secret nên để `.claude/settings.local.json` hoặc user scope, không commit. ([Claude Code][2])

Gợi ý file ban đầu:

```json
{
  "$schema": "https://json.schemastore.org/claude-code-settings.json",
  "permissions": {
    "allow": [
      "Bash(git status)",
      "Bash(git diff *)",
      "Bash(git log *)",
      "Bash(npx playwright test *)",
      "Bash(npx playwright show-report)",
      "Bash(npm install)"
    ],
    "deny": [
      "Read(./.env)",
      "Read(./.env.*)",
      "Read(./config/.env)",
      "Read(./test-data/user-info.json)",
      "Read(./secrets/**)",
      "Bash(git push *)",
      "Bash(git reset --hard *)",
      "Bash(git clean -fd *)",
      "Bash(rm -rf *)",
      "Bash(del /s *)",
      "Bash(curl *)",
      "Bash(wget *)"
    ]
  }
}
```

Đây là bản bảo thủ. Nếu Claude báo schema/pattern nào chưa hợp lệ, yêu cầu Claude chạy `/doctor` hoặc kiểm tra settings schema trước khi commit, vì Claude Code docs nói user/project/local settings strict hơn managed settings: file invalid có thể bị reject. ([Claude Code][2])

---

# 7) `.claude/rules/` nên dùng để giảm context

Không nên nhét toàn bộ thesis workflow vào `CLAUDE.md`. Claude docs khuyên dùng `.claude/rules/` cho project lớn và path-specific rules; skills thì chỉ load khi được dùng, tiết kiệm context hơn. ([Claude API Docs][1])

Nên tạo:

```text
.claude/rules/thesis-workspace-rules.md
.claude/rules/playwright-framework-rules.md
.claude/rules/repository-safety-rules.md
```

Ví dụ `thesis-workspace-rules.md`:

```md
---
paths:
  - "docs/thesis-workspace/**/*.md"
  - "docs/final-graduation-thesis-doc/**/*.md"
---

# Thesis Workspace Rules

When working on thesis files:

1. Read `docs/thesis-workspace/progress.md` first.
2. Read `docs/thesis-workspace/tasks.md`.
3. Check `evidence-matrix.md` before making project-specific claims.
4. Check `citation-register.md` before using theory, Playwright documentation, or external claims.
5. Mark unsupported project claims as `NEEDS_EVIDENCE`.
6. Mark unsupported theory/tool claims as `NEEDS_SOURCE`.
7. Do not include private Codex/Claude workflow content in thesis prose.
8. After editing, update progress and handoff files.
```

Ví dụ `playwright-framework-rules.md`:

```md
---
paths:
  - "tests/**/*.ts"
  - "page-object/**/*.ts"
  - "workflow/**/*.ts"
  - "api-service/**/*.ts"
  - "fixtures/**/*.ts"
  - "core/**/*.ts"
  - "data-object/**/*.ts"
  - "constants/**/*.ts"
  - "utils/**/*.ts"
---

# Playwright Framework Rules

- Reuse existing framework assets before creating new files.
- Keep UI interactions in Page Objects.
- Keep API endpoint logic in API service classes.
- Keep test files under `tests/ui/` or `tests/api/`.
- Do not create ad-hoc Playwright scripts.
- Preserve TypeScript and Page Object Model conventions.
- Run the smallest relevant Playwright test after code changes when feasible.
```

---

# 8) Claude subagents nên tạo

Claude Code supports custom subagents in `.claude/agents/`; project subagents are suitable for repo-specific workflows and can be checked into version control. ([Claude Code][4]) Subagents are useful khi side task có thể làm trong context riêng để không làm bẩn main conversation, ví dụ citation audit, chapter review, technical consistency review. ([Claude Code][4])

Tạo các file:

```text
.claude/agents/thesis-orchestrator.md
.claude/agents/thesis-reviewer.md
.claude/agents/thesis-citation-auditor.md
.claude/agents/thesis-technical-reviewer.md
.claude/agents/thesis-diagram-architect.md
```

Ví dụ `thesis-reviewer.md`:

```md
---
name: thesis-reviewer
description: Reviews thesis chapter drafts for academic tone, structure, evidence support, consistency with approved chapter boundaries, and missing sources. Use after drafting or revising thesis content.
tools: Read, Grep, Glob
model: inherit
permissionMode: plan
skills:
  - thesis-review
---

You are a read-only thesis reviewer for this graduation project.

Responsibilities:
- Review only the scoped thesis chapter or section.
- Check academic tone, structure, chapter boundaries, evidence support, and citation coverage.
- Do not edit files directly.
- Do not invent repository facts or external sources.
- Return a structured review with:
  1. Verdict
  2. Strengths
  3. Required fixes
  4. Missing evidence
  5. Missing citations
  6. Consistency risks
  7. Approval recommendation
```

Claude subagent frontmatter supports fields like `name`, `description`, `tools`, `model`, `permissionMode`, `skills`, `mcpServers`, `memory`, `background`, `effort`, and `isolation`; `isolation: worktree` can give a subagent an isolated git worktree. ([Claude Code][4])

---

# 9) Claude skills nên mirror từ `.agents/skills`

Bạn đã có:

```text
.agents/skills/thesis-diagramming
.agents/skills/thesis-drafting
.agents/skills/thesis-evidence-citation
.agents/skills/thesis-planning
.agents/skills/thesis-review
```

Nên yêu cầu Claude copy/adapt sang:

```text
.claude/skills/thesis-diagramming/SKILL.md
.claude/skills/thesis-drafting/SKILL.md
.claude/skills/thesis-evidence-citation/SKILL.md
.claude/skills/thesis-planning/SKILL.md
.claude/skills/thesis-review/SKILL.md
.claude/skills/thesis-handoff-sync/SKILL.md
```

Claude Code docs nói skills dùng `SKILL.md`, có YAML frontmatter và body instruction; skill body chỉ load khi dùng, phù hợp hơn cho multi-step procedure so với nhồi hết vào `CLAUDE.md`. ([Claude Code][5])

Prompt nhỏ để Claude sửa skill mismatch:

```text
Audit `.claude/skills`.
For every `.claude/skills/<folder>/SKILL.md`, verify:
- frontmatter `name` matches the folder purpose
- description matches the skill purpose
- H1 heading matches the skill purpose
- body is not accidentally copied from another skill
- references/ files are relevant

Fix the current mismatch where:
- `.claude/skills/code-review/SKILL.md` appears to contain design-test-case content
- `.claude/skills/script-generation/SKILL.md` appears to contain playwright-mcp content

Do not delete useful content; restore each skill to the correct folder and purpose.
```

---

# 10) MCP Server: nên thêm gì cho Claude?

## Nên thêm tối thiểu

### 1. Playwright MCP

Phù hợp cho project này vì repo là Playwright UI/API automation framework. Claude docs có ví dụ inline MCP server dùng:

```json
{
  "type": "stdio",
  "command": "npx",
  "args": ["-y", "@playwright/mcp@latest"]
}
```

trong subagent `browser-tester`. ([Claude Code][4])

Mình khuyên **không nhất thiết add Playwright MCP vào `.mcp.json` global main session**. Cách sạch hơn là scope nó vào subagent hoặc skill dùng browser inspection để không làm main context nặng.

Ví dụ trong `.claude/agents/browser-test-inspector.md` nếu sau này cần:

```md
---
name: browser-test-inspector
description: Uses Playwright MCP to inspect UI behavior, DOM structure, selectors, and browser flows before Playwright test generation.
tools: Read, Grep, Glob
mcpServers:
  - playwright:
      type: stdio
      command: npx
      args: ["-y", "@playwright/mcp@latest"]
permissionMode: default
model: inherit
---

Use Playwright MCP only for browser/UI inspection.
Return selector findings and validation notes.
Do not modify test code unless the main Claude session explicitly asks.
```

### 2. GitHub MCP

Chỉ cần nếu bạn muốn Claude quản lý Issues/PR/Project Board. Với thesis writing hiện tại, **chưa bắt buộc** vì Claude có thể đọc local repo. Nếu add GitHub MCP, nên add ở **user scope hoặc local scope**, không commit token vào project `.mcp.json`.

Claude docs nói MCP nên dùng khi bạn thường phải copy dữ liệu từ issue tracker/monitoring/design tools vào chat; MCP giúp Claude đọc và hành động trực tiếp trên external systems. Docs cũng cảnh báo phải verify trust vì server fetch external content có thể gây prompt injection risk. ([Claude Code][3])

### 3. Citation/research MCP

Chưa nên add vội. Với thesis, Claude có “Browse the web” trong UI của bạn. Chỉ add citation MCP nếu:

```text
- server đáng tin
- có source rõ
- không cần secret
- output kiểm chứng được
- Claude chỉ dùng để propose source, không tự bịa citation
```

---

# 11) Plugin riêng cho Claude: có cần không?

Ngay lúc này: **chưa cần plugin riêng**.

Claude Code đã có bundled skills/commands như `/code-review`, `/diff`, `/review`, `/security-review`, `/debug`, `/doctor`, và `/batch`. Docs nói `/batch` có thể decompose thay đổi lớn thành 5–30 unit, chạy background subagent trong isolated git worktree và mở PR; nhưng với thesis harness hiện tại, bạn chưa cần chạy `/batch` ngay. ([Claude Code][6])

Plugin chính thức đáng biết là `mcp-server-dev@claude-plugins-official`, nhưng nó dùng khi bạn muốn Claude scaffold MCP server riêng. Claude docs hướng dẫn install bằng:

```text
/plugin install mcp-server-dev@claude-plugins-official
```

và nếu marketplace chưa có thì add marketplace trước; sau đó dùng `/mcp-server-dev:build-mcp-server`. ([Claude Code][3])

Với project của bạn, chỉ nên dùng plugin này sau này nếu bạn muốn build custom MCP kiểu:

```text
thesis-evidence-mcp
thesis-citation-mcp
playwright-report-reader-mcp
```

Còn hiện tại, file-based harness là đủ.

---

# 12) Workflow switch qua lại giữa Codex và Claude

## Khi bắt đầu session Claude mới

Dùng prompt này:

```text
Continue the thesis harness from the current repository state.

Read first:
- CLAUDE.md
- AGENTS.md
- docs/thesis-workspace/AGENTS.md
- docs/thesis-workspace/progress.md
- docs/thesis-workspace/tasks.md
- docs/thesis-workspace/evidence-matrix.md
- docs/thesis-workspace/citation-register.md
- docs/thesis-workspace/figure-register.md
- docs/thesis-workspace/visual-evidence-register.md
- docs/thesis-workspace/chapter-review-gate.md
- docs/thesis-workspace/next-chat-handoff.md

Do not edit files yet.

Return:
1. Current thesis status
2. Current approval gate
3. Next recommended task
4. Files you believe are safe to edit
5. Files you must not edit
6. Whether this task should be done by Claude directly or only reviewed for Codex
```

## Khi Claude làm writer

```text
Act as the thesis writer for the current approved task only.

Before editing:
- confirm the task ID from tasks.md
- confirm current status from progress.md
- confirm evidence coverage from evidence-matrix.md
- confirm citations from citation-register.md

Rules:
- Edit only the scoped thesis file.
- Use formal academic English.
- Do not include private AI workflow details in the thesis body.
- Mark missing project evidence as NEEDS_EVIDENCE.
- Mark missing source support as NEEDS_SOURCE.
- After editing, update tasks.md, progress.md, and next-chat-handoff.md.
- If new evidence or citations are used, update evidence-matrix.md and citation-register.md.
```

## Khi Claude làm reviewer cho Codex

```text
Act as a read-only thesis reviewer.

Review the scoped chapter/section only.
Do not edit files.

Check:
1. Academic tone
2. Chapter boundary consistency
3. Evidence support
4. Citation support
5. Figure/table consistency
6. Duplication with other chapters
7. Claims that overreach available evidence
8. Compliance with AGENTS.md and docs/thesis-workspace/AGENTS.md

Return:
- verdict
- required fixes
- optional improvements
- missing evidence
- missing citations
- approval recommendation
```

## Khi quay lại Codex sau Claude

```text
Continue from the Claude handoff.

Read:
- AGENTS.md
- docs/thesis-workspace/progress.md
- docs/thesis-workspace/tasks.md
- docs/thesis-workspace/next-chat-handoff.md
- any review file Claude created under docs/thesis-workspace/reviews/

Summarize what Claude changed or reviewed.
Then decide whether to accept, revise, or reject Claude's output.
Do not assume Claude output is final until you verify it against evidence-matrix.md and citation-register.md.
```

---

# 13) Thứ tự triển khai tối ưu cho bạn

Làm theo thứ tự này là an toàn nhất:

```text
Phase 1
→ Claude audit harness, chưa sửa thesis/code

Phase 2
→ Claude tạo CLAUDE.md, .claude/settings.json, .claude/rules, .claude/agents

Phase 3
→ Claude sửa mismatch trong .claude/skills

Phase 4
→ Claude mirror thesis skills từ .agents/skills sang .claude/skills

Phase 5
→ Claude viết docs/agentic-workflow/codex-claude-dual-agent-workflow.md

Phase 6
→ Chạy Claude read-only handoff prompt để kiểm tra Claude hiểu progress hiện tại

Phase 7
→ Dùng Claude reviewer cho Chapter 4 hoặc review consistency trước khi viết Chapter 6
```

Từ trạng thái `progress.md` trong zip, thesis hiện đang ở điểm rất nhạy cảm: **Chapter 4 đang chờ approval gate**, Chapters 1–3 đã được approve trước đó, Chapter 4 đã restructure T-077 và chưa nên nhảy thẳng sang Chapter 6 nếu approval chưa rõ. Vì vậy Claude cần đọc `progress.md` trước mọi task.

---

# 14) Prompt ngắn gọn để bạn dùng ngay trong ảnh hiện tại

Nếu bạn muốn một prompt gọn hơn để paste ngay vào Claude Code, dùng bản này:

```text
Read this repository as a Claude Code setup task.

The project already has a Codex thesis harness. I want Claude Code to support the same thesis harness without creating a separate source of truth.

First, inspect:
- AGENTS.md
- .codex/config.toml
- .codex/agents/
- .agents/skills/
- .claude/skills/
- docs/thesis-workspace/

Do not edit yet.

Audit what Claude-specific setup is missing or wrong:
- missing CLAUDE.md
- missing .claude/settings.json
- missing .claude/rules/
- missing .claude/agents/
- missing thesis skills under .claude/skills/
- possible duplicated/mismatched .claude skills
- whether .mcp.json is necessary
- whether plugins/hooks are necessary

Then propose a safe implementation plan.

Rules:
- AGENTS.md remains the shared source of truth.
- CLAUDE.md should import AGENTS.md, not duplicate it.
- Both Claude and Codex must use docs/thesis-workspace/progress.md, tasks.md, evidence-matrix.md, citation-register.md, and next-chat-handoff.md as shared thesis state.
- Do not modify thesis chapter prose yet.
- Do not modify automation code yet.
- Do not add secrets.
- Do not install random MCP servers.
- Ask for approval before edits.
```

Đây là prompt nên chạy đầu tiên. Sau khi Claude trả plan, bạn gửi mình screenshot/plan đó, mình sẽ giúp bạn review xem Claude đề xuất file nào hợp lý, file nào nên bỏ, MCP/plugin nào nên cẩn thận trước khi bạn bấm approve.

[1]: https://docs.anthropic.com/en/docs/claude-code/memory "How Claude remembers your project - Claude Code Docs"
[2]: https://code.claude.com/docs/en/settings "Claude Code settings - Claude Code Docs"
[3]: https://code.claude.com/docs/en/mcp "Connect Claude Code to tools via MCP - Claude Code Docs"
[4]: https://code.claude.com/docs/en/sub-agents "Create custom subagents - Claude Code Docs"
[5]: https://code.claude.com/docs/en/skills "Extend Claude with skills - Claude Code Docs"
[6]: https://code.claude.com/docs/en/commands "Commands - Claude Code Docs"
