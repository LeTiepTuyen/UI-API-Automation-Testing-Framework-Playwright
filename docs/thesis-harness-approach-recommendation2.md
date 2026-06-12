Đúng, với trạng thái hiện tại của repo, bạn **nên bổ sung một Claude Code layer riêng**, nhưng theo hướng **additive**: không xóa, không đụng, không thay thế `.codex/` và `.agents/skills/` hiện tại. Tôi đã kiểm tra file ZIP bạn gửi: repo hiện **có `.agents/skills/thesis-*`**, **có `.codex/agents/thesis-*.toml`**, **có `.claude/skills/` nhưng chủ yếu là automation-testing skills**, và hiện **chưa có `CLAUDE.md`, `.claude/agents/`, `.claude/settings.json`**. `progress.md` hiện cũng cho thấy thesis đang ở **Chapter 4 approval gate**, chưa nên để Claude tự nhảy sang chapter khác.

Điểm quan trọng nhất từ docs Claude: **Claude Code đọc `CLAUDE.md`, không đọc `AGENTS.md` làm entrypoint chính**. Nếu repo đã dùng `AGENTS.md`, Anthropic khuyên tạo `CLAUDE.md` import `@AGENTS.md`, rồi thêm phần Claude-specific bên dưới. ([Claude API Docs][1]) Claude project skills nằm ở `.claude/skills/<skill-name>/SKILL.md`, còn project subagents nằm ở `.claude/agents/`. ([Claude API Docs][2]) ([Claude API Docs][3])

---

## 1) Kiến trúc đúng cho repo của bạn

Bạn nên chuyển từ “Codex-only thesis harness” sang:

```text
Dual-Harness Thesis Engine
├── Shared layer
│   ├── AGENTS.md
│   ├── .agents/skills/thesis-*
│   └── docs/thesis-workspace/*
│
├── Codex layer
│   ├── .codex/config.toml
│   └── .codex/agents/thesis-*.toml
│
├── Claude layer
│   ├── CLAUDE.md
│   ├── .claude/settings.json
│   ├── .claude/agents/thesis-*.md
│   └── .claude/skills/thesis-*
│
└── Legacy automation skills
    └── .claude/skills/code-review, design-test-case, playwright-mcp, script-generation
```

Không nên xóa `.agents/skills`. Với Codex, đây vẫn là shared skill layer. Với Claude, nên **mirror/wrapper** các thesis skills sang `.claude/skills/thesis-*`, vì Claude Code chính thức auto-discover project skills từ `.claude/skills/`, không phải `.agents/skills/`. ([Claude API Docs][2])

---

## 2) Vai trò đề xuất: Codex và Claude dùng song song thế nào?

Tôi khuyên flow chính:

```text
Codex = main writer / orchestrator / implementation lead
Claude = thesis reviewer / academic editor / second-opinion auditor
```

Nhưng nếu Codex hit limit, Claude vẫn có thể tiếp tục writing nếu đọc đúng:

```text
CLAUDE.md
docs/thesis-workspace/agent-handoff.md
docs/thesis-workspace/progress.md
docs/thesis-workspace/tasks.md
docs/thesis-workspace/outline.md
docs/thesis-workspace/chapter-review-gate.md
```

Nguyên tắc vận hành:

```text
1. Một tool viết chính tại một thời điểm.
2. Tool còn lại review-only hoặc tạo artifact riêng.
3. Không để Claude và Codex cùng sửa tasks.md/progress.md cùng lúc.
4. Sau mỗi work package: update progress → update handoff → commit.
5. Bạn là approval gate cuối cùng.
```

---

## 3) Các file/folder Claude nên yêu cầu Claude tự tạo

Nên yêu cầu Claude tạo thêm:

```text
CLAUDE.md

.claude/
├── settings.json
├── agents/
│   ├── thesis-orchestrator.md
│   ├── thesis-drafter.md
│   ├── thesis-reviewer.md
│   ├── thesis-citation-auditor.md
│   ├── thesis-diagram-architect.md
│   ├── thesis-researcher.md
│   └── thesis-technical-reviewer.md
└── skills/
    ├── thesis-planning/
    │   └── SKILL.md
    ├── thesis-drafting/
    │   └── SKILL.md
    ├── thesis-review/
    │   └── SKILL.md
    ├── thesis-evidence-citation/
    │   └── SKILL.md
    └── thesis-diagramming/
        └── SKILL.md

docs/thesis-workspace/
├── agent-handoff.md
├── claude-handoff.md
├── dual-agent-guide.md
└── claude-artifacts/
    ├── README.md
    ├── latest-status.md
    ├── review-summary.md
    └── session-log.md
```

`CLAUDE.md` nên ngắn, dưới khoảng 200 dòng nếu có thể, vì Claude docs nói file này được load vào context mỗi session và nên viết ngắn, rõ, có cấu trúc. ([Claude API Docs][1])

---

## 4) Bước setup trước khi chạy Claude

Trong terminal ở root repo:

```powershell
git status
git add .
git commit -m "chore: checkpoint before Claude dual-harness setup"
```

Sau đó kiểm tra Claude:

```powershell
claude --version
claude doctor
```

Trong Claude Code tab VS Code, giữ mode:

```text
Ask before edits: ON
Không bật auto-edit toàn quyền lúc đầu
Không cho Claude chạy command nguy hiểm
```

Claude Code VS Code extension hỗ trợ inline diffs, @-mentions, plan review và conversation history trong editor. ([Claude API Docs][4])

---

# 5) Prompt 1 — Claude đọc repo, không edit

Gửi prompt này trong Claude Code trước. Đây là bước “read-only audit”.

```text
You are working in the AutoTestingFramework repository.

Task: read and understand the current thesis harness and repository state. Read-only mode. Do not edit files yet.

Important:
- This repository already has a Codex-first thesis harness.
- Do not delete, overwrite, or restructure .codex/, .agents/, .github/, or .claude/.
- Do not write or revise thesis prose in this task.
- Do not edit application source code.

Read first:
@AGENTS.md
@.agents/skills/
@.codex/agents/
@.codex/config.toml
@.claude/skills/
@docs/thesis-workspace/plan.md
@docs/thesis-workspace/tasks.md
@docs/thesis-workspace/progress.md
@docs/thesis-workspace/outline.md
@docs/thesis-workspace/chapter-review-gate.md
@docs/thesis-workspace/evidence-matrix.md
@docs/thesis-workspace/citation-register.md
@docs/thesis-workspace/figure-register.md
@docs/thesis-workspace/visual-evidence-register.md
@docs/thesis-workspace/quality-checklist.md
@docs/thesis-workspace/writing-style-guide.md
@docs/thesis-workspace/diagram-workflow.md
@docs/thesis-workspace/reviews/
@docs/thesis-workspace/source-notes/
@README.md
@docs/project-overview.md
@.github/AGENTS.md
@.github/copilot-instructions.md

Return:
1. Current repository purpose.
2. Current thesis state.
3. Current approval gate.
4. Existing Codex harness components.
5. Existing Claude components.
6. Missing Claude Code components.
7. Risks if Claude starts writing immediately.
8. Recommended safe setup plan.

Do not modify files.
```

---

# 6) Prompt 2 — Claude lập plan tạo Claude layer

Sau khi Claude trả lời đúng, gửi prompt này:

```text
Plan only. Do not edit files yet.

Task:
Design a Claude Code support layer so this thesis harness can work with both Codex and Claude Code.

Current goal:
- Keep all existing Codex files.
- Keep all existing Claude automation-testing skills.
- Add the minimum Claude Code files needed so Claude can understand and operate the thesis harness safely.

Requirements:
1. Create a root CLAUDE.md that imports @AGENTS.md and then adds Claude-specific rules.
2. Create Claude project subagents under .claude/agents/ that mirror the existing Codex thesis roles.
3. Create or mirror thesis-specific Claude skills under .claude/skills/thesis-*.
4. Create docs/thesis-workspace/agent-handoff.md if missing.
5. Create docs/thesis-workspace/claude-handoff.md.
6. Create docs/thesis-workspace/dual-agent-guide.md.
7. Create docs/thesis-workspace/claude-artifacts/ for Claude review/session artifacts.
8. Suggest .claude/settings.json with safe project-level settings only.
9. Suggest MCP servers only if they are actually useful for this project.
10. Do not add secrets or personal tokens to repo files.

Return:
- proposed files,
- exact purpose of each file,
- whether each file should be committed,
- MCP/plugin recommendations,
- risk controls,
- implementation plan.

Do not edit files yet.
```

---

# 7) Prompt 3 — Claude implement Claude layer

Nếu plan ổn, gửi:

```text
Approved. Implement the Claude Code support layer.

Rules:
- Additive changes only.
- Do not delete or overwrite .codex/.
- Do not delete or overwrite existing .claude/skills/code-review, design-test-case, playwright-mcp, or script-generation.
- Do not rewrite existing .agents/skills unless a small compatibility note is necessary.
- Do not edit thesis chapter prose.
- Do not edit application source code.
- Do not add secrets, tokens, API keys, or personal paths.

Create or update:

1. Root Claude memory file:
- CLAUDE.md

CLAUDE.md must:
- import @AGENTS.md
- import @docs/thesis-workspace/agent-handoff.md if created
- state that Claude must read progress.md/tasks.md before thesis work
- state that Claude must not mention the private thesis-writing harness in thesis content
- state that the Copilot Agentic-AI workflow may appear only as a project automation-testing feature
- state that Claude must stop at approval gates
- stay concise and well-structured

2. Claude project subagents:
- .claude/agents/thesis-orchestrator.md
- .claude/agents/thesis-drafter.md
- .claude/agents/thesis-reviewer.md
- .claude/agents/thesis-citation-auditor.md
- .claude/agents/thesis-diagram-architect.md
- .claude/agents/thesis-researcher.md
- .claude/agents/thesis-technical-reviewer.md

Each subagent must:
- use YAML frontmatter
- have a clear description
- have focused responsibilities
- limit tool usage where appropriate
- be suitable for Claude Code project-level subagent discovery

3. Claude thesis skills:
- .claude/skills/thesis-planning/SKILL.md
- .claude/skills/thesis-drafting/SKILL.md
- .claude/skills/thesis-review/SKILL.md
- .claude/skills/thesis-evidence-citation/SKILL.md
- .claude/skills/thesis-diagramming/SKILL.md

Each skill must:
- use YAML frontmatter
- explain when to use the skill
- read the shared source-of-truth files
- mirror the matching .agents/skills/thesis-* behavior without overwriting it
- include Claude-specific safety rules
- include output contracts

4. Cross-model handoff:
- docs/thesis-workspace/agent-handoff.md
- docs/thesis-workspace/claude-handoff.md
- docs/thesis-workspace/dual-agent-guide.md

5. Claude artifacts:
- docs/thesis-workspace/claude-artifacts/README.md
- docs/thesis-workspace/claude-artifacts/latest-status.md
- docs/thesis-workspace/claude-artifacts/review-summary.md
- docs/thesis-workspace/claude-artifacts/session-log.md

6. Optional safe settings:
- .claude/settings.json

Only create .claude/settings.json if you are confident it follows Claude Code docs. Keep it minimal. Prefer safe permissions and no dangerous hooks.

7. Update:
- docs/thesis-workspace/progress.md
- docs/thesis-workspace/tasks.md only if needed

Return:
1. Files changed.
2. Claude layer summary.
3. How Claude should be used with the current thesis approval gate.
4. How Codex should continue to work unchanged.
5. Any MCP/plugin setup still requiring manual user action.
```

---

## 8) MCP và Plugin cho Claude: nên thêm gì?

Claude Code hỗ trợ MCP để kết nối tools/data sources bên ngoài; MCP servers có local, project, user scope, trong đó project scope tạo `.mcp.json` ở root repo và sẽ cần approval khi dùng. ([Claude API Docs][5]) ([Claude API Docs][5])

Với thesis project hiện tại, tôi khuyên **đừng cài quá nhiều**. Nên dùng:

| MCP/Plugin           |                          Có nên dùng? | Lý do                                                     |
| -------------------- | ------------------------------------: | --------------------------------------------------------- |
| GitHub MCP           |                                Có thể | Review PR/issues nếu sau này dùng GitHub workflow         |
| Playwright MCP       |                                    Có | Repo là Playwright framework, hữu ích khi inspect UI/test |
| Fetch/Web MCP        |                                Có thể | Hỗ trợ citation/research, nhưng phải kiểm nguồn           |
| Context7/docs lookup |                                Có thể | Tra docs Playwright/Next/Supabase nếu cần coding          |
| Filesystem MCP       | Không cần nếu Claude đã có file tools | Claude Code đã đọc/sửa file local được                    |
| DB/Supabase MCP      |                              Chưa cần | Chỉ cần nếu dự án AI Sales Assistant hoặc DB thật         |
| Slack/Jira/Sentry    |                              Chưa cần | Không liên quan thesis hiện tại                           |

Lệnh kiểm tra MCP:

```powershell
claude mcp list
```

Mở MCP panel trong Claude:

```text
/mcp
```

Ví dụ thêm GitHub theo docs Claude:

```powershell
claude mcp add --transport http github https://api.githubcopilot.com/mcp/ --header "Authorization: Bearer YOUR_GITHUB_PAT"
```

Docs Claude cũng cho biết project-scoped MCP ghi vào `.mcp.json`, user-scoped ghi vào `~/.claude.json`; với secret như PAT, tôi khuyên dùng **user/local scope**, không commit token vào repo. ([Claude API Docs][5])

Với Playwright MCP, tốt nhất hãy để Claude audit cấu hình hiện có trước, rồi mới add. Prompt:

```text
Audit current MCP setup for this repository. Check whether Playwright MCP is already available to Claude Code. If not, propose the safest setup command. Do not modify config yet.
```

---

## 9) Nên dùng Claude thế nào sau khi setup?

### Case A — Claude review Chapter 4 hiện tại

Vì `progress.md` đang ở Chapter 4 approval gate, task đầu tiên nên giao Claude là **review-only**, không viết tiếp.

```text
Use the thesis-review skill and thesis-reviewer subagent if available.

Task: perform a Claude independent review of the current Chapter 4 approval-gate state.

Read:
@CLAUDE.md
@docs/thesis-workspace/agent-handoff.md
@docs/thesis-workspace/progress.md
@docs/thesis-workspace/tasks.md
@docs/thesis-workspace/outline.md
@docs/thesis-workspace/chapter-review-gate.md
@docs/thesis-workspace/chapters/chapter-4-implementation.md
@docs/thesis-workspace/reviews/chapter-4-review.md
@docs/thesis-workspace/evidence-matrix.md
@docs/thesis-workspace/figure-register.md
@docs/thesis-workspace/visual-evidence-register.md

Review-only mode. Do not rewrite Chapter 4.

Create or update:
@docs/thesis-workspace/claude-artifacts/review-summary.md

Return:
1. Review summary table.
2. Whether Chapter 4 is ready for user approval.
3. Critical issues, if any.
4. Minor revision suggestions.
5. Exact approval question for the user.
```

### Case B — Claude tiếp tục viết khi Codex hit limit

Chỉ dùng khi Codex không tiếp tục được:

```text
Read @CLAUDE.md and @docs/thesis-workspace/agent-handoff.md first.

Continue from the current thesis state only if the current approval gate allows it.

Rules:
- Do not skip approval gates.
- Do not invent citations, metrics, execution results, or evidence.
- Do not mention the private thesis-writing harness in thesis content.
- Update progress.md, tasks.md, and agent-handoff.md after work.
- Run the Formal Chapter Review Gate after drafting.
- Stop for user approval before the next major work package.

First, summarize the current state and ask for confirmation before editing.
```

---

## 10) Claude subagents nên tạo như thế nào?

Claude subagents là Markdown files có YAML frontmatter, và project subagents nằm trong `.claude/agents/`. Docs Claude khuyên subagents nên focused, description rõ, giới hạn tool access, và check vào version control nếu dùng cho project. ([Claude API Docs][3])

Ví dụ subagent Claude nên tạo:

```md
---
name: thesis-reviewer
description: Use this agent to review thesis chapters for academic quality, VNUK alignment, evidence grounding, figure usage, and approval readiness.
tools:
  - Read
  - Grep
  - Glob
---

# Thesis Reviewer Agent

You are a thesis reviewer for a VNUK graduation project.

Review only by default. Do not rewrite chapter prose unless explicitly asked.

Check:
- outline compliance
- academic English
- evidence grounding
- citation readiness
- figure/register consistency
- private harness exclusion
- Copilot Agentic-AI workflow scope
- approval readiness

Output:
- review summary table
- critical findings
- minor findings
- final recommendation
```

Bạn không cần tự viết file này bằng tay; prompt Implement ở trên sẽ yêu cầu Claude tạo đầy đủ.

---

## 11) Có nên dùng hooks không?

Hiện tại **chưa nên tạo hooks phức tạp**. Claude hooks có rất nhiều lifecycle events như SessionStart, UserPromptSubmit, PreToolUse, PostToolUse, Stop, SubagentStart/Stop, WorktreeCreate, FileChanged, PreCompact/PostCompact. ([Claude API Docs][6]) Nhưng với thesis, hooks sai có thể gây phiền hoặc tự động chạy lệnh không mong muốn.

Nếu sau này cần, chỉ nên thêm hook nhẹ kiểu:

```text
Sau khi session stop → nhắc update progress.md
Trước tool edit → cảnh báo nếu đụng thesis.md/chapter file khi chưa approved
```

Giai đoạn hiện tại: **không thêm hooks trước**, chỉ tạo docs/skills/agents.

---

## 12) Sau khi Claude setup xong, commit

```powershell
git status
git diff
git add CLAUDE.md .claude docs/thesis-workspace/agent-handoff.md docs/thesis-workspace/claude-handoff.md docs/thesis-workspace/dual-agent-guide.md docs/thesis-workspace/claude-artifacts docs/thesis-workspace/progress.md docs/thesis-workspace/tasks.md
git commit -m "docs: add Claude Code support for thesis harness"
```

Nếu Claude tạo `.mcp.json`, kiểm tra kỹ không có token/secrets rồi mới commit:

```powershell
git diff .mcp.json
```

---

## Kết luận

Việc bạn thêm Claude Pro là hợp lý. Nhưng bước đầu **không nên để Claude viết tiếp thesis ngay**. Hãy để Claude setup layer riêng trước:

```text
CLAUDE.md
.claude/agents/
.claude/skills/thesis-*
docs/thesis-workspace/agent-handoff.md
docs/thesis-workspace/claude-handoff.md
docs/thesis-workspace/dual-agent-guide.md
docs/thesis-workspace/claude-artifacts/
```

Sau đó dùng Claude theo flow:

```text
Codex viết chính → Claude review độc lập → Codex hoặc Claude apply fixes → bạn approve
```

Khi Codex hit limit, Claude đọc `CLAUDE.md + agent-handoff.md + progress.md + tasks.md` là có thể tiếp tục đúng trạng thái. Khi Claude hit limit, Codex đọc `AGENTS.md + agent-handoff.md` là quay lại được. Đây là cách biến harness của bạn thành **dual-agent thesis engine** ổn định cho cả Codex và Claude.

[1]: https://docs.anthropic.com/en/docs/claude-code/memory "How Claude remembers your project - Claude Code Docs"
[2]: https://docs.anthropic.com/en/docs/claude-code/skills "Extend Claude with skills - Claude Code Docs"
[3]: https://docs.anthropic.com/en/docs/claude-code/sub-agents "Create custom subagents - Claude Code Docs"
[4]: https://docs.anthropic.com/en/docs/claude-code/overview "Overview - Claude Code Docs"
[5]: https://docs.anthropic.com/en/docs/claude-code/mcp "Connect Claude Code to tools via MCP - Claude Code Docs"
[6]: https://docs.anthropic.com/en/docs/claude-code/hooks "Hooks reference - Claude Code Docs"
