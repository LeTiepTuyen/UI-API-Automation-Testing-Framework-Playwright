# Hướng Dẫn Vận Hành Figures Và Citations Trong Thesis Harness

Tài liệu này giải thích cách bộ thesis harness quản lý **Figures** và **Citations/References** cho dự án thesis. Đây là tài liệu học hỏi để user nắm rõ một số kỹ năng/cơ chế cụ thể của harness, không phải nội dung đưa vào thesis chính thức.

Tài liệu này cũng không thay thế các source-of-truth files như `plan.md`, `tasks.md`, `progress.md`, `figure-register.md`, `visual-evidence-register.md`, `citation-register.md`, `evidence-matrix.md`, hoặc `diagram-workflow.md`. Khi Codex thực hiện thesis task, các file đó vẫn là nơi điều khiển workflow và tracking chính; file này chỉ dùng để đọc lại và hiểu cách vận hành.

---

## 1. Cách Quản Lý Figures

Trong harness này, **Figure** không chỉ là ảnh minh họa. Figure có thể là:

- diagram/chart/pipeline được vẽ bằng Mermaid, PlantUML, Graphviz, hoặc script tạo chart;
- screenshot của Playwright HTML report, trace viewer, terminal output, UI flow, API evidence;
- author-created chart được tạo lại từ số liệu có citation;
- external visual reference nếu đã được kiểm tra citation/license/copyright.

Tables thường được viết trực tiếp trong chapter, nhưng nếu table dựa trên execution evidence, benchmark data, hoặc CSV summary thì vẫn phải được trace trong evidence/register phù hợp.

## 2. Các File Chính Cho Figure Workflow

| File/Folder | Vai trò |
|---|---|
| `docs/thesis-workspace/diagram-workflow.md` | Quy tắc thiết kế, render, caption, và review diagram. |
| `docs/thesis-workspace/figure-register.md` | Register chính cho thesis figures: ID, title, chapter, status, source, output. |
| `docs/thesis-workspace/visual-evidence-register.md` | Register riêng cho screenshot, report capture, external visual, generated benchmark chart. |
| `docs/thesis-workspace/assets/diagrams/src/` | Lưu editable diagram source, ví dụ `.mmd`. |
| `docs/thesis-workspace/assets/diagrams/out/` | Lưu rendered SVG output để chèn vào chapter. |
| `docs/thesis-workspace/assets/figures/` | Lưu screenshots và generated chart images. |
| `docs/thesis-workspace/assets/tables/` | Lưu raw execution evidence, CSV summary, benchmark tables. |
| `docs/thesis-workspace/evidence-matrix.md` | Map claim trong chapter với evidence và figure liên quan. |
| `docs/thesis-workspace/outline.md` | Ghi planned/inserted figures theo từng chapter. |
| `docs/thesis-workspace/tasks.md` và `progress.md` | Theo dõi task/status của việc tạo, review, insert figures. |

## 3. Flow Tạo Và Chèn Figure

Quy trình chuẩn khi thêm một figure:

1. Xác định section có cần visual không. Nếu nội dung có thể viết ngắn gọn bằng text/list/table thì không nên làm diagram.
2. Xác định claim mà figure sẽ hỗ trợ. Figure phải giải thích rõ hơn một ý quan trọng, không được dùng để che lấp `NEEDS_EVIDENCE`.
3. Kiểm tra evidence. Nếu là project claim thì dựa vào repository evidence; nếu là benchmark/theory claim thì cần source/citation.
4. Tạo source:
   - Diagram: viết `.mmd`, `.puml`, hoặc `.dot` trong `assets/diagrams/src/`.
   - Screenshot/chart: lưu ảnh trong `assets/figures/`.
   - Benchmark chart: ưu tiên tạo chart mới từ số liệu được cite, thay vì copy trực tiếp screenshot có copyright.
5. Render output nếu là diagram, thường ra SVG trong `assets/diagrams/out/`.
6. Đăng ký figure trong `figure-register.md` hoặc `visual-evidence-register.md`.
7. Insert figure vào chapter với caption rõ ràng, ví dụ `Figure 5.2`.
8. Cập nhật `outline.md`, `evidence-matrix.md`, `tasks.md`, và `progress.md`.
9. Khi chapter được draft/revise, Formal Chapter Review Gate sẽ kiểm tra figure có hợp lý, có evidence, có caption, và có bị overclaim không.

## 4. Ví Dụ Cụ Thể: Figure 5.2 Và Figure 5.3 Trong Chapter 5

Trong Chapter 5, user thêm hai PDF thesis references có số liệu comparative analysis. Harness không copy nguyên chart screenshot từ PDF vào thesis. Thay vào đó, flow được xử lý như sau:

1. Convert PDF sang Markdown để Codex đọc tiết kiệm token hơn và để trích xuất nội dung bảng.
2. Đọc các table/figure có giá trị benchmark trong source Markdown.
3. Chọn những số liệu có liên quan đến Playwright, Cypress, Selenium, reliability, execution time, CPU/RAM, hoặc adoption.
4. Tạo author-created charts bằng script riêng:
   - `external-tool-benchmark-summary-mon-panczyk-2025.png`
   - `external-reliability-benchmark-almabruk-2025.png`
5. Lưu CSV summary trong `assets/tables/chapter-5-external-benchmarks/`.
6. Đăng ký chart trong `visual-evidence-register.md` với ID `V-10` và `V-11`.
7. Đăng ký thesis figure trong `figure-register.md` là `Figure 5.2` và `Figure 5.3`.
8. Map claim vào `evidence-matrix.md`, ví dụ external benchmark context không được hiểu là local benchmark của project.
9. Insert vào Chapter 5 kèm citation cho source gốc.

Đây là cách harness quản lý figure một cách logic: **asset có file riêng, source có citation riêng, claim có evidence mapping riêng, và chapter chỉ chèn visual sau khi đã register**.

---

## 5. Cách Quản Lý Citations Và References

Thesis harness dùng cách quản lý citation theo hướng traceable trước, format APA 7 sau. Nghĩa là trong quá trình draft Markdown, chapter có thể dùng citation key ổn định như `[@playwright_docs_locators]`. Đến giai đoạn final assembly/Word migration, các citation key này sẽ được render hoặc chuyển thành định dạng **APA 7th edition**.

## 6. Các File Chính Cho Citation Workflow

| File/Folder | Vai trò |
|---|---|
| `docs/thesis-workspace/citation-register.md` | Register nguồn: citation key, loại nguồn, chapter sử dụng, mục đích, status. |
| `docs/thesis-workspace/references/references.bib` | Canonical BibTeX database cho citation keys. |
| `docs/thesis-workspace/references/references.md` | Ghi chú citation policy, APA 7 decision, và source groups. |
| `docs/thesis-workspace/evidence-matrix.md` | Map claim với repository evidence hoặc external source. |
| `docs/thesis-workspace/source-notes/` | Ghi chú chọn nguồn, tóm tắt source, và boundary để tránh overclaim. |
| `docs/thesis-workspace/chapters/*.md` | Chapter drafts dùng stable citation keys, không viết manual reference list trong từng chapter. |

## 7. Source Hierarchy

Khi Codex viết thesis, thứ tự ưu tiên nguồn là:

1. Repository source code và project documents cho project-specific claims.
2. VNUK template/sample cho structure.
3. Official Playwright documentation cho Playwright capability claims.
4. Official OpenAI/Codex documentation nếu nói về agentic workflow.
5. Academic/professional testing literature cho theory.
6. Thesis samples chỉ dùng để tham khảo structure/topic coverage, không copy văn phong hoặc nội dung.

Nếu thiếu nguồn, chapter phải ghi `NEEDS_SOURCE` hoặc `NEEDS_EVIDENCE`, không tự sáng tạo citation.

## 8. Flow Chèn Citation Khi Draft

Quy trình chuẩn:

1. Xác định claim cần citation.
2. Chọn source theo source hierarchy.
3. Tạo hoặc kiểm tra citation key trong `references.bib`.
4. Đăng ký source trong `citation-register.md`.
5. Nếu source cần giải thích thêm, tạo source note trong `source-notes/`.
6. Chèn citation key vào chapter, ví dụ `[@mon_panczyk_web_automation_tools_2025]`.
7. Audit chapter để đảm bảo mọi citation key đều tồn tại trong `references.bib`.
8. Formal Chapter Review Gate kiểm tra missing citation, unsupported claim, và citation boundary.

## 9. APA 7 Sẽ Được Xử Lý Như Thế Nào Ở Giai Đoạn Cuối

Quyết định hiện tại của harness: **final thesis citation style là APA 7th edition**.

Trong Markdown drafting phase, citation được giữ bằng key để dễ trace. Khi hoàn tất toàn bộ thesis, Codex sẽ làm final citation workflow:

1. Assemble các chapter vào `docs/thesis-workspace/thesis.md`.
2. Audit tất cả citation keys trong `thesis.md`.
3. Đối chiếu với `references/references.bib` để phát hiện:
   - citation key bị thiếu;
   - reference không được cite;
   - duplicate source;
   - source chưa đủ thông tin APA.
4. Nếu dùng toolchain tự động, chạy Pandoc/citeproc với APA CSL:

```powershell
pandoc docs/thesis-workspace/thesis.md `
  --citeproc `
  --bibliography docs/thesis-workspace/references/references.bib `
  --csl docs/thesis-workspace/references/apa.csl `
  -o docs/thesis-workspace/thesis.docx
```

5. Nếu Pandoc/citeproc chưa sẵn sàng, Codex sẽ dùng `references.bib`, `citation-register.md`, và `references.md` để manual-review citation khi migrate sang VNUK Word template.
6. Kiểm tra cuối:
   - mọi in-text citation có reference list entry;
   - reference list đúng APA 7;
   - không có claim quan trọng nào thiếu source;
   - không có thesis-sample source nào bị dùng như project evidence.

Lưu ý: tại thời điểm hiện tại, harness đã chọn APA 7 và đã có BibTeX database, nhưng Pandoc/citeproc không phải dependency bắt buộc của repo. Nếu cần render tự động sang `.docx`, có thể cài thêm Pandoc/citeproc sau.

## 10. Tool/MCP Hỗ Trợ Citation Và Conversion

| Tool/MCP | Vai trò trong harness |
|---|---|
| Fetch MCP | Lấy nội dung URL/public docs về dạng Markdown khi cần đọc source online. |
| MarkItDown MCP | Hỗ trợ convert PDF/DOCX/HTML và tài liệu khác sang Markdown cho các session tương lai. |
| Context7 MCP | Lấy current official documentation cho library/framework/API khi cần source mới. |
| Web search | Dùng khi thông tin có thể thay đổi, cần sources mới, hoặc user yêu cầu research. |
| Pandoc/citeproc | Toolchain dự kiến cho final APA 7 rendering từ Markdown + BibTeX sang DOCX/PDF. |
| Zotero | Optional nếu user muốn quản lý reference library riêng; hiện tại harness chưa phụ thuộc Zotero. |

## 11. Ví Dụ Cụ Thể: External Benchmark Citation Trong Chapter 5

Với source `almabruk_selenium_playwright_reliability_2025`, harness xử lý như sau:

1. PDF reference được convert sang Markdown.
2. Source được thêm vào `references.bib`.
3. Source được đăng ký trong `citation-register.md`.
4. Benchmark claim được map trong `evidence-matrix.md`.
5. Chart mới được tạo từ số liệu đã cite, không copy chart screenshot trực tiếp.
6. Chapter 5 dùng citation key để nói rõ đây là external benchmark context, không phải kết quả chạy local của dự án.

---

## 12. Vì Sao Harness Này "Thông Minh"

Harness không chỉ lưu chapter text. Nó tách riêng:

- **chapter prose**: nội dung học thuật;
- **evidence matrix**: claim nào dựa trên bằng chứng nào;
- **citation register**: source nào được dùng cho mục đích nào;
- **figure register**: figure nào đã plan/review/insert;
- **visual evidence register**: screenshot/chart nào có giá trị evidence;
- **source notes**: lý do chọn nguồn và boundary;
- **review artifacts**: kết quả Formal Chapter Review Gate;
- **progress/tasks**: state cho session tiếp theo.

Nhờ cách tách này, Codex có thể tiếp tục làm việc từ current state mà không cần đọc lại toàn bộ lịch sử. Đồng thời, harness giúp tránh các lỗi nguy hiểm trong thesis:

- citation key bị thiếu;
- figure không có evidence;
- copy chart/image mà chưa kiểm tra copyright;
- claim benchmark bị hiểu nhầm là kết quả local;
- nội dung chapter quá nhiều hình ảnh không cần thiết;
- thesis sample bị dùng sai như project evidence;
- metric hoặc result bị invent.

## 13. Checklist Nhanh Trước Khi Chèn Figure Hoặc Citation

Trước khi chèn figure:

- Figure có thực sự làm nội dung dễ hiểu hơn không?
- Figure đã có source/evidence chưa?
- Asset đã lưu đúng folder chưa?
- Đã đăng ký trong `figure-register.md` hoặc `visual-evidence-register.md` chưa?
- Caption có đúng chapter numbering không?
- Có cần citation/license note không?

Trước khi chèn citation:

- Claim có cần source không?
- Citation key đã có trong `references.bib` chưa?
- Source đã có trong `citation-register.md` chưa?
- Claim có bị overclaim so với source không?
- Source có phù hợp APA 7 final style không?

Quy tắc ngắn gọn: **chapter chỉ là nội dung hiển thị; harness registers mới là bộ nhớ và cơ chế kiểm soát evidence/citation/figure của thesis**.
