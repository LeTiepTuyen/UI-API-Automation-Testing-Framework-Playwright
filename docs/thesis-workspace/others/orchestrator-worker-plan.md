# Orchestrator–Worker Plan for the Thesis Harness (Claude + Codex)

**Status:** Proposal for user adoption — not yet an active harness rule.
**Derived from:** `others/Claude Code làm orchestrator — còn Codex và agy chạy như worker ngầm.md`
(URL: https://tony.vibery.app/community/posts/claude-code-orchestrator.md)
**Aligns with / refines:** `dual-agent-guide.md`, `AGENTS.md`, `CLAUDE.md`.
**Date:** 2026-06-11

---

## 1. Goal

Use both subscriptions (Claude Pro + Codex Plus) in parallel without wasting either, by
formalizing a clear orchestrator–worker split:

- **Claude = orchestrator + authority reviewer** (owns the Formal Chapter Review Gate, runs on Opus for review depth).
- **Codex = primary worker / drafter** (drafts chapters, builds diagrams, updates tracking files).

This sharpens the role table already present in `dual-agent-guide.md`; it does not replace the
existing dual-agent model or the approval gates.

---

## 2. Key framing (why we adapt, not copy)

The source article targets **coding** fan-out. Our project is **thesis writing**. Academic prose is
**high-coupling** (claims, citations, figure numbering, RQ linkage), which the article itself says
should stay in a single session. Therefore:

- We keep the existing **one-writer-at-a-time** rule for thesis prose.
- We adopt the **worker / ticket discipline** and **MCP review bridge**, which fit our workflow.
- We defer **git worktree**, heavy **fan-out**, **headless JSONL/output-schema**, and **agy** until
  they are actually needed (final assembly / QA), if at all.

---

## 3. Technique assessment

| Technique | Decision | Rationale |
|---|---|---|
| **Worker (narrow-scope agent)** | **Adopt — already available** | Claude subagents (`thesis-reviewer`@Opus, `thesis-citation-auditor`, `thesis-diagram-architect`, …) and `.codex/agents/` already implement this. Use them deliberately. |
| **MCP bridge (Codex as Claude tool)** | **Adopt — review/audit only, read-only** | The one genuinely new, high-value piece: Claude can request an independent second-opinion review from a different model without bloating its session. Never use it to ghost-write prose. |
| **git worktree** | **Defer** | Solves collisions between parallel code branches. Our collision point is shared tracking files (`progress.md`, `evidence-matrix.md`, `citation-register.md`, `figure-register.md`), which worktree does not solve. Adds complexity now. |
| **fan-out (parallel workers)** | **Defer to QA phase** | Prose drafting cannot fan-out safely. Useful later for the final QA sweep: parallel citation-completeness / figure-numbering / cross-chapter-consistency / formatting checks. |
| **headless + JSONL + output-schema** | **Skip** | For CI/cron/scripts. Our flow is manual with approval gates; no added value. |
| **agy (Antigravity)** | **Skip** | Third model adds coordination overhead; free quota ~20 req/day. Not worth it. |

---

## 4. Role split (refined dual-agent model)

### Codex (Plus) — Primary Worker / Drafter
- Draft & revise chapters (next: Chapter 6) and apply review fixes.
- Create/update diagram sources; regenerate SVG/PNG.
- Update tracking files after every session: `progress.md`, `tasks.md`, `evidence-matrix.md`,
  `citation-register.md`, `figure-register.md`.
- Evidence mapping, citation formatting, figure numbering.
- The **only** agent that writes thesis prose at a given time.

### Claude (Pro) — Orchestrator + Authority Reviewer
- **Owns the Formal Chapter Review Gate** via `thesis-reviewer` on **Opus** (deepest reasoning —
  Claude's biggest comparative advantage here).
- Independent citation/evidence audit; technical-accuracy check (prose vs. real code).
- Session orchestration: read state, pick the next safe task, write tickets for Codex.
- *(Optional, after MCP setup)* call `codex exec -s read-only` for an independent second-opinion
  review.
- Does **not** write chapter prose unless the user explicitly approves (per `CLAUDE.md`).

### Daily workflow (confirmed)
This is the everyday dual-agent loop, using both VS Code extensions (Codex + Claude Code):

1. **Draft** → open the **Codex** extension → ask Codex to write the chapter/section.
2. Codex finishes → Codex updates `progress.md`, `tasks.md`, and the relevant registers, then
   updates `next-chat-handoff.md`.
3. **Review** → switch to the **Claude Code** extension → ask Claude to run the Formal Chapter
   Review Gate (`thesis-reviewer` on Opus).
4. Claude returns the verdict → user approves → chapter marked final.

The loop works because each agent reads `progress.md` + `next-chat-handoff.md` before starting and
updates them before you switch. No MCP bridge is required for this loop.

### Single-agent fallback (confirmed)
If one agent hits a daily/weekly quota limit, the other can take over **all** work, because both
read the same source of truth (`AGENTS.md`, `progress.md`, `tasks.md`, `evidence-matrix.md`,
`citation-register.md`, `next-chat-handoff.md`) and both are capable of every role — the split is an
optimization, not a capability limit. When falling back:

- One-writer-at-a-time is automatically satisfied (only one agent is active).
- If the same agent must both draft and review (e.g., Claude drafts because Codex is out of quota),
  state **"single-agent fallback"** in the review so review independence is reduced knowingly; have
  the other agent re-review once its quota returns.
- The taking-over agent reads `next-chat-handoff.md` first to resume at the correct gate.

### Two operating models — choose Model B
- **Model A (article literal):** Claude orchestrator calls Codex headless via MCP; you talk only to
  Claude. Uses both subscriptions but you lose direct control of Codex, and headless drafting fits
  approval-gated prose poorly.
- **Model B (recommended):** Two interactive sessions with sharp roles, handoff via shared files
  (already in place), **plus** a read-only MCP bridge used only for review second opinions. Keeps
  full control and clean gates while still exercising both subscriptions.

---

## 5. Ticket discipline (the real skill)

When Claude (orchestrator) hands a slice to Codex (worker), use a 6-field ticket:

```text
Scope:       which area/chapter/figure
Read:        files the worker may read
Write:       files the worker may write — "do not touch anything else"
Task:        one focused slice, stated as intent
Output:      patch / revised section / updated register row / review notes
Constraints: gate rules, one-writer rule, no invented metrics/citations, APA 7, formal English
```

This mirrors the article's `Scope/Read/Write/Task/Output/Constraints` but binds it to our gate and
evidence rules.

---

## 6. MCP bridge — NOT adopted

Per user decision (2026-06-11), the optional Codex-as-MCP-tool bridge is **not** being set up. The
daily workflow (§4) and single-agent fallback run entirely through the two interactive VS Code
extensions and shared tracking files; no MCP bridge is needed. This section is retained only as a
record of the deferred option, should a review second-opinion bridge be wanted later.

---

## 7. What does NOT change

- Approval gates: no chapter is final without explicit user approval.
- One-writer-at-a-time for thesis prose.
- `NEEDS_EVIDENCE` / `NEEDS_SOURCE` markers; no invented metrics or citation keys.
- Thesis-content exclusion: this orchestration harness (agents, skills, MCP bridge, tickets) must
  **never** appear in thesis prose.
- Tracking-file update + handoff after every session.

---

## 8. Adoption checklist

- [x] User approves Model B (2026-06-11).
- [x] MCP bridge declined — not set up (2026-06-11).
- [x] Daily workflow + single-agent fallback added to `dual-agent-guide.md`.
- [ ] Use the 6-field ticket format for every Claude→Codex handoff.
- [ ] Revisit fan-out / worktree only at the final-assembly QA phase, if needed.
