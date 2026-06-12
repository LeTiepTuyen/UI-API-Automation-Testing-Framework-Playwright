# Mình bắt đầu để Claude Code làm orchestrator — còn Codex và agy chạy như worker ngầm

**Type:** Community Post  
**Date:** May 22, 2026  
**Author:** Tony  
**URL:** https://tony.edu.vibery.app/c/claude-code-orchestrator

---

> Một cách nhẹ để Claude Code làm nhiều việc song song mà session chính vẫn không bị loãng.

---

## Trước khi đụng tới pattern này — bạn đã có gì rồi

Claude Code một mình đã làm được rất nhiều việc. Nó giữ mạch hội thoại, đọc codebase, sửa file, chạy test, giải thích lỗi, và khi gặp thao tác có rủi ro thì thường hỏi quyền trước. Nó cũng có sandbox (vùng chạy giới hạn để giảm rủi ro khi lệnh đụng tới file hoặc hệ thống), nên với phần lớn việc hằng ngày, một session là đủ.

Bài này không phải để thay Claude Code bằng một thứ phức tạp hơn. Mình viết cho khoảnh khắc hơi cụ thể hơn: nếu bạn đã dùng Claude Code một thời gian và bắt đầu nghĩ "ước gì nó làm được hai việc cùng lúc", thì đây là lúc pattern này đáng nhìn thử. Không cần vội. Most days, one session is enough.

---

## Một câu chuyện trước, định nghĩa sau

Giả sử mình có một helper chuẩn hóa email đang nằm rải rác ở 3 chỗ. Việc cần làm nghe nhỏ thôi: refactor helper validation này, update docs đang nhắc tới logic cũ, rồi fix tests bị gãy sau refactor.

Nếu làm bằng một session Claude Code duy nhất, flow thường là thế này: Claude Code đọc code validation, tìm 3 nơi gọi logic đó, sửa helper, chạy test. Test fail. Nó đọc tiếp test. Trong lúc đó mình nhớ ra docs cũng phải đổi, nên bảo nó đọc docs. Bây giờ context window (phần trí nhớ làm việc mà model có thể giữ trong một lượt hội thoại) bắt đầu chứa cả code validation, API caller, test output, docs cũ, ý định refactor, và vài quyết định nhỏ đã chốt lúc trước.

Không có gì sai ở đây. Đây là cách rất bình thường. Nhưng cảm giác hay gặp là session chính bắt đầu "nặng". Mình đợi test chạy, rồi đợi docs, rồi quay lại test fix. Khi nó tập trung vào docs thì đôi khi quên mất constraint ở code. Khi nó tập trung vào test thì mình lại phải nhắc "docs nữa". Lúc đó mình không còn chỉ review nữa, mình đang giữ nhịp cho cả phiên.

Với orchestrator (agent giữ context chính và chia việc), cách làm hơi khác. Session chính đọc repo trước, hiểu việc cần làm, rồi chia thành 3 slice: refactor code, update docs, kiểm tra test fallout. Nó có thể giao phần refactor cho một code worker (agent nhỏ nhận một task hẹp rồi trả kết quả), giao phần docs cho worker khác, còn nó giữ quyết định chính và tích hợp kết quả.

Ở đây MCP (chuẩn để Claude Code gọi tool hoặc dịch vụ khác theo cùng một cách) là lớp nối để Claude Code gọi Codex như một tool. Worker không cần hiểu toàn bộ repo như session chính. Nó chỉ cần một việc hẹp: "đọc các file này, sửa các file này, trả patch". Khi kết quả quay lại, orchestrator review, chọn phần đúng, bỏ phần thừa, rồi chạy test ở nhánh chính.

Điểm thắng không phải là "nhanh hơn 3 lần". Cá nhân mình thấy điểm thắng thật là session chính đỡ bị loãng. Nó không phải tự ôm mọi đoạn context cùng lúc. Mình cũng không phải đọc toàn bộ suy luận phụ; mình chỉ review artifact trả về. Bài này cũng được làm theo cách đó — mình bảo Claude Code rewrite, nó có thể gọi Codex làm phần soạn câu nếu cần.

---

## Định nghĩa nhanh — để cả bài đọc dễ hơn

- **agent** (đoạn AI tự chọn bước và dùng công cụ): không chỉ trả lời text, mà có thể đọc file, chạy lệnh, sửa code, rồi tự điều chỉnh bước tiếp theo.
- **orchestrator**: agent giữ context chính, hiểu mục tiêu lớn, chia việc, nhận kết quả, rồi quyết định tích hợp thế nào.
- **worker**: agent nhỏ nhận một task hẹp, làm xong là xong, không cần giữ toàn bộ câu chuyện.
- **MCP**: chuẩn để Claude Code gọi tool hoặc dịch vụ khác theo cùng một cách.
- **headless** (chạy không cần giao diện, qua command): phù hợp để một tool được gọi nền bởi Claude Code.
- **fan-out** (chia việc cho nhiều worker cùng làm): hữu ích khi task tự nhiên tách được thành vài phần độc lập.
- **git worktree** (tính năng Git cho nhiều thư mục làm việc từ cùng một repo): giúp nhiều worker sửa trên nhiều branch riêng mà không đè nhau. agy là một ví dụ worker phụ có thể gọi theo kiểu tương tự, nếu bạn đã quen setup.

---

## Khi nào nên nghĩ tới fan-out

Dấu hiệu pattern này đáng thử:

- Task tự nhiên chia thành 2+ phần độc lập: code + docs + tests.
- Bạn đang chần chừ giữa hai hướng và muốn ý kiến thứ hai trước khi quyết.
- Một analysis dài làm bạn lo "tí nữa session này sẽ quên việc chính".
- Bạn cần một artifact cụ thể: patch, risks list, JSON theo schema.

Dấu hiệu nên cứ làm trong một session:

- Một file, một bug rõ, fix trong 5-10 phút.
- Một quyết định kiến trúc đang cần giữ toàn bộ bức tranh trong đầu.
- Bạn còn đang học codebase — fan-out lúc này che mất quá trình hiểu.
- Bạn biết mình sẽ review từng dòng output của worker như tự làm.

---

## Setup trong 30 giây

Trước khi cần pattern này, bạn chỉ cần đã cài Claude Code và Codex CLI. Codex là một AI coding agent khác của OpenAI, cũng chạy local, dùng được ChatGPT subscription bạn đã có.

```bash
# Một lần: cài Codex CLI và login
brew install --cask codex   # hoặc theo hướng dẫn của OpenAI
codex login                  # mở browser, login bằng ChatGPT
```

`codex login` lưu token ở `~/.codex/auth.json`, sau đó Codex CLI dùng được headless mà không cần mở giao diện.

```bash
# Đăng ký Codex thành MCP server trong Claude Code
claude mcp add -s user codex -- env -u OPENAI_API_KEY codex mcp-server
```

Command này nói với Claude Code: "khi cần, hãy gọi Codex như một tool". `-s user` nghĩa là setup này dùng được trong mọi project trên máy bạn. Dấu `--` là separator để Claude Code biết mọi thứ sau đó là subprocess command thật sự. `env -u OPENAI_API_KEY` là phần mình thấy rất đáng giữ: nếu bạn từng export OpenAI API key trong shell, Codex có thể lặng lẽ dùng key đó, tính phí theo token, thay vì dùng ChatGPT subscription. Flag này gỡ biến đó trước khi launch, để Codex dùng subscription.

```bash
# Kiểm tra
claude mcp list   # phải thấy: codex: ... ✓ Connected
```

Nếu chưa thấy `✓ Connected`, hai thứ mình hay check trước là `codex` có trong `PATH` chưa, và bạn đã chạy `codex login` ít nhất một lần chưa.

Về scope, `-s local` chỉ áp dụng cho thư mục hiện tại; `-s user` như trên áp dụng mọi project; `-s project` ghi vào file `.mcp.json` trong repo nếu bạn muốn cả team dùng chung.

agy là CLI tương đương trong hệ sinh thái Google Antigravity. Phiên bản hiện tại của CLI là v1.0.0 (lưu ý: số version này khác với Antigravity desktop app đang ở v2.x — CLI và desktop app là hai sản phẩm tách rời). Mình hay xem agy như worker phụ để lấy ý kiến thứ hai, không phải lựa chọn chính. Nếu chưa quen multi-agent, hoàn toàn bỏ qua cũng được — quay lại sau.

---

## Viết ticket cho worker — kỹ năng thật sự

Đây là phần quan trọng nhất, vì worker không có toàn cảnh repo như Claude Code. Worker chỉ làm tốt khi bạn, hoặc orchestrator qua bạn, viết yêu cầu đủ rõ. Mình thấy đây là kỹ năng tích lũy được, không phải bẩm sinh.

Một ticket (mô tả việc nhỏ, có scope và output rõ để worker làm) mình hay xài như sau. Không cần làm đúng từng chữ; quan trọng là có đủ 5-6 trường này:

```text
Scope:
Read:
Write:
Task:
Output:
Constraints:
```

Ví dụ với helper validation ở câu chuyện trên:

```text
Scope: src/lib/validation/
Read: src/lib/validation/**, các file gọi tới helper này trong src/api/
Write: src/lib/validation/normalize-email.ts, tests/validation/normalize-email.test.ts. Ngoài đây không đụng tới.
Task: Gom logic chuẩn hóa email đang lặp ở 3 chỗ thành một helper, giữ nguyên behavior.
Output: patch
Constraints: không thêm dependency mới; không đổi signature của hàm public; chỉ thêm hoặc cập nhật test liên quan.
```

Mình thấy nếu mỗi ticket chỉ một slice, một việc rõ, output cụ thể, worker ít trôi hơn nhiều.

Việc nói rõ worker không được đụng đâu nghe hơi cứng, nhưng giúp tránh patch "lan sang" file khác.

Specify output shape ngay từ đầu. Muốn patch thì nói patch. Muốn JSON theo schema thì gắn schema. Vague output là mời worker tự diễn, và thường nó diễn sai hướng bạn cần.

Người viết ticket thật ra là orchestrator, không phải bạn. Bạn nói intent bằng tiếng tự nhiên, ví dụ "chia phần test ra worker, đừng để session chính phải đọc hết test code", orchestrator dịch thành ticket.

---

## Fan-out với git worktree

git worktree là tính năng Git ít người dùng. Nó cho phép cùng một repo có nhiều thư mục làm việc, mỗi cái checkout một branch khác nhau, không phải clone lại từ đầu. Khi nhiều worker cùng sửa code, đây là cách rẻ nhất để chúng không đè lên nhau.

```bash
# Tạo hai worktree cho hai worker khác nhau
git worktree add ../proj-refactor refactor-branch
git worktree add ../proj-docs docs-branch
```

Worker refactor làm trong `../proj-refactor`, worker docs làm trong `../proj-docs`. Khi xong, orchestrator review từng patch, kéo phần cần thiết về branch chính, conflict được dời tới bước merge thay vì nổ giữa lúc tụi nó còn đang chạy. Nếu output worker tệ, bạn xóa worktree đó, không ảnh hưởng main.

cmux và OMX là các công cụ productize phần này khi scale lên. Không cần dùng ngay, nhưng đáng biết tên để sau này bạn nhận ra vấn đề mình đang gặp đã có người đóng gói thành workflow.

---

## Failure modes — và cách sửa

Đây là vài chỗ mình hay vấp khi mới dùng pattern này. Không phải lỗi của AI, thường là ticket thiếu rõ, hoặc setup nhầm.

- Worker bịa context không có thật → ticket quá vague; siết `Scope` và `Read`.
- Output trả về prose dài trong khi bạn cần patch → chưa specify `Output`; ghi `Output: patch`.
- Worker sửa file ngoài scope → thêm câu "ngoài các file trên không đụng tới".
- Main session vẫn phình → orchestrator đang tự làm phần phụ; bảo nó gọi worker.
- Fan-out chậm hơn tự làm → bình thường, với task nhỏ thì đúng; skip worker.
- Cost surprise → check `OPENAI_API_KEY` có đang set không; install command ở trên đã xử lý.

---

## Khi pattern này không hợp

Task có coupling cao thì mình thường giữ trong một session. Ví dụ một quyết định kiến trúc, một bug chạy ngang nhiều module, hoặc một migration mà bước sau phụ thuộc bước trước. Lúc đó orchestrator cần giữ full picture. Chia ra sớm dễ tạo nhiều output rời rạc, nhìn có vẻ nhiều tiến độ nhưng tích hợp lại mệt hơn.

Bạn đang học codebase thì cũng nên chậm lại một chút. Fan-out lúc này che mất quá trình hiểu. Cá nhân mình hay tự đọc và sửa vài bug nhỏ trước, để biết repo nghĩ theo kiểu gì, rồi mới nghĩ tới chia việc.

---

## Câu hỏi mình đang để mở

Setup này nhẹ với 2-3 worker. Lên 5+ worker thì bottleneck đổi: visibility, merge conflict handling, cost ceiling. Mình vẫn đang thử cách giữ orchestrator đủ tỉnh mà không biến nó thành một project manager mini quá phức tạp.

Bạn có thử pattern này chưa, và lần đầu vấp ở đâu?

## Phụ lục: Cheatsheet để Claude của bạn biết cách gọi codex và agy

Phần này không phải để bạn tự gõ lệnh. Nó để bạn paste vào Claude Code (hoặc agent orchestrator khác) — để chính Claude biết cách gọi `codex exec` và `agy -p` như headless workers thay cho bạn.

### `codex exec`: Tham chiếu Headless Worker

`codex exec` là primitive chạy headless: nó nhận một prompt, chạy non-interactive, in final assistant message ra stdout, rồi thoát. Nó dùng được trong cron, CI, bash scripts, Docker jobs, và orchestration kiểu supervisor-worker.

Tham chiếu version: `codex` v0.130.0.

| Nhu cầu | Flag / Dạng |
|---|---|
| Prompt | `codex exec "..."` or pipe stdin |
| Đính kèm image | `-i, --image ` |
| Model | `-m, --model ` |
| Sandbox | `-s, --sandbox ` |
| Bỏ qua approvals + sandbox | `--dangerously-bypass-approvals-and-sandbox` |
| Thư mục làm việc | `-C, --cd ` |
| Thêm thư mục writable/readable | `--add-dir ` |
| Bỏ qua kiểm tra git repo | `--skip-git-repo-check` |
| Không lưu session | `--ephemeral` |
| Final output có cấu trúc | `--output-schema ` |
| JSONL event stream | `--json` |
| Lưu message cuối | `-o, --output-last-message ` |
| Profile | `-p, --profile ` |
| Ghi đè config | `-c, --config key=value` |

Ví dụ cơ bản:

```bash
env -u OPENAI_API_KEY codex exec -s read-only \
  "Review this repo and list the top 5 risks."

env -u OPENAI_API_KEY codex exec -s workspace-write -C ./api \
  "Fix the failing tests, keep changes minimal, then summarize files changed."

printf '%s\n' "Explain this codebase architecture." \
  | env -u OPENAI_API_KEY codex exec -s read-only
```

Auth:

```bash
codex login
```

`codex login` dùng ChatGPT subscription và lưu auth trong `~/.codex/auth.json`.

Bẫy billing quan trọng: nếu `OPENAI_API_KEY` tồn tại trong environment, `codex` âm thầm dùng API billing thay vì subscription auth. Trong scripts, nên dùng:

```bash
env -u OPENAI_API_KEY codex exec "..."
```

### JSONL Mode

Dùng `--json` khi chương trình khác cần parse progress, final text, token usage, hoặc thread id.

Event shapes đã verify chính xác:

```json
{"type":"thread.started","thread_id":"..."}
{"type":"turn.started"}
{"type":"item.completed","item":{"id":"...","type":"agent_message","text":"..."}}
{"type":"turn.completed","usage":{"input_tokens":N,"cached_input_tokens":N,"output_tokens":N,"reasoning_output_tokens":N}}
```

`item.type` có thể là `agent_message` hoặc `tool_call`.

Parser hữu ích:

```bash
# Final agent message text
env -u OPENAI_API_KEY codex exec --json "Say hello" \
  | jq -r 'select(.type=="item.completed" and .item.type=="agent_message") | .item.text' \
  | tail -n 1

# Total token usage from completed turn
env -u OPENAI_API_KEY codex exec --json "Analyze repo" \
  | jq 'select(.type=="turn.completed") | .usage'

# Thread id
env -u OPENAI_API_KEY codex exec --json "Start work" \
  | jq -r 'select(.type=="thread.started") | .thread_id'
```

### Structured Output

`--output-schema ` ràng buộc final response theo JSON Schema. Kết hợp với `-o` để output an toàn cho pipeline.

```json
{
  "type": "object",
  "additionalProperties": false,
  "required": ["summary", "risks"],
  "properties": {
    "summary": { "type": "string" },
    "risks": {
      "type": "array",
      "items": { "type": "string" }
    }
  }
}
```

```bash
env -u OPENAI_API_KEY codex exec \
  --output-schema ./schema.json \
  -o /tmp/last.json \
  -s read-only \
  "Inspect this repository and return only the requested JSON."
```

### Resume Sessions

```bash
env -u OPENAI_API_KEY codex exec resume --last \
  "Continue. Now implement the smallest safe fix."

env -u OPENAI_API_KEY codex exec resume  \
  "Continue from that thread and produce a final summary."
```

### Codex làm MCP Server

`codex mcp-server` expose chính Codex như một stdio MCP server. Một MCP host như Claude Code, Cursor, hoặc orchestrator khác có thể gọi Codex như một tool.

```bash
env -u OPENAI_API_KEY codex mcp-server
```

### `agy -p`: Tham chiếu Headless Worker

`agy` v1.0.0 là Google Antigravity CLI standalone — số version này thuộc về binary CLI, không phải Antigravity desktop app (đang ở v2.x). Hai sản phẩm tách rời trong cùng hệ sinh thái. CLI khác với `agy-desktop`, vốn là một VS Code fork và không phải headless runner.

Các flag headless chính:

| Nhu cầu | Flag |
|---|---|
| Prompt one-shot, in response | `-p, --print, --prompt` |
| Tiếp tục conversation gần nhất | `-c, --continue` |
| Resume một conversation cụ thể | `--conversation ` |
| Prompt interactive | `-i, --prompt-interactive` |
| Thêm workspace dir, có thể lặp lại | `--add-dir ` |
| Sandbox | `--sandbox` |
| Bỏ qua permissions | `--dangerously-skip-permissions` |
| Print timeout | `--print-timeout` |

Subcommands / Ví dụ invocation:

```bash
agy plugin install
agy plugin list
agy plugin enable
agy plugin disable
agy update
agy install
```

```bash
agy -p "Review this repository and summarize the architecture."

agy -p "Analyze only the API package." --add-dir ./api

agy -c -p "Continue the previous task and implement the next step."

agy --conversation  -p "Resume this conversation and produce a concise status."
```

Auth: `agy` dùng Google Sign-In OAuth qua system keyring. Lần chạy đầu tiên sẽ mở browser. Nó không dùng `GEMINI_API_KEY`; biến đó dành cho Python SDK riêng, không phải CLI này.

Lưu ý quota: free tier của Antigravity khá nhỏ, khoảng 20 agent requests/ngày, và CLI dùng chung quota với desktop app. Scripted loops có thể đốt hết quota rất nhanh. Dùng có chủ đích.

### Safety Rules

Chỉ dùng dangerous bypass flags bên trong runner đã được sandbox từ bên ngoài, ví dụ container dùng một lần hoặc CI job bị khóa chặt:

```bash
codex exec --dangerously-bypass-approvals-and-sandbox "..."
agy --dangerously-skip-permissions -p "..."
```

Đừng bao giờ chạy các flag đó trên dev machine có secrets thật. Nên dùng defense in depth: isolation bằng container bên ngoài cộng với CLI sandbox flags.

Với Codex:

```bash
# Review / analysis
env -u OPENAI_API_KEY codex exec -s read-only "Review this code."

# Code editing
env -u OPENAI_API_KEY codex exec -s workspace-write "Fix the bug."
```

### Parallel Fan-Out Pattern

Chạy workers trong các git worktrees tách biệt, mỗi worker một branch, để agents không ghi đè lẫn nhau. Dùng `tmux` cho panes bền vững và `--json | tee` để ghi logs.

```bash
#!/usr/bin/env bash
set -euo pipefail

BASE="$(pwd)"
mkdir -p ../agent-runs logs

for n in 1 2 3; do
  branch="agent/worker-$n"
  dir="../agent-runs/worker-$n"

  git worktree add -b "$branch" "$dir" HEAD

  tmux new-session -d -s "worker-$n" \
    "cd '$dir' && env -u OPENAI_API_KEY codex exec --json -s workspace-write \
      'Worker $n: inspect this repo, make one focused improvement, run relevant checks, summarize changed files.' \
      | tee '$BASE/logs/worker-$n.jsonl'"
done

tmux ls
```

Công cụ liên quan:

| Tool | Vai trò |
|---|---|
| OMX / `oh-my-codex` | npm tool productize mô hình git-worktree-per-worker, tmux panes, và role agents |
| `cmux` | native macOS UI layer điều khiển OMX qua `cmux omx` |
| CAO / `awslabs/cli-agent-orchestrator` | phương án supervisor-worker dựa trên MCP, có thể mix `codex`, `claude`, và các CLI khác |

### So Sánh Nhanh: `codex` vs `agy` cho Headless Work

| Khả năng | `codex exec` | `agy -p` |
|---|---|---|
| Độ trưởng thành cho scripts | Headless primitive mạnh | CLI one-shot dùng được |
| JSONL stream | Yes: `--json` | Chưa có tương đương trong các flag đã liệt kê |
| Structured output | Yes: `--output-schema ` | Chưa có tương đương trong các flag đã liệt kê |
| Lưu final output | Yes: `-o, --output-last-message ` | Print response with `-p` |
| Resume session | `resume --last`, `resume ` | `-c`, `--conversation ` |
| Các mức sandbox | `read-only`, `workspace-write`, `danger-full-access` | `--sandbox` |
| Dangerous bypass | `--dangerously-bypass-approvals-and-sandbox` | `--dangerously-skip-permissions` |
| MCP server | `codex mcp-server` | Chưa có tương đương trong commands đã liệt kê |
| Auth | `codex login`, `~/.codex/auth.json`; coi chừng `OPENAI_API_KEY` | Google OAuth system keyring; không phải `GEMINI_API_KEY` |
| Hệ sinh thái multi-agent | OMX, cmux, CAO, MCP hosts | Có thể mix qua orchestrators bên ngoài |

---

*Generated for AI consumption from [Tony's Friends](https://tony.vibery.app)*