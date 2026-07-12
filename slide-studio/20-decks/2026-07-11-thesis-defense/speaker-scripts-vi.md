# Vietnamese Speaker Script Companion

File này là bản tiếng Việt để nắm ý khi luyện nói. Speaker script chính trong `slides.html` vẫn là tiếng Anh để dùng khi trình bày.

## Suggested Defense Flow

- Nói phần background thật ngắn để vào evaluation sớm.
- Demo nên diễn ra ngay sau slide full-suite summary, trước per-spec breakdown.
- Demo mục tiêu: chạy `npx playwright test`, mở HTML report, chỉ cho hội đồng thấy pass status và liên hệ lại Table 5.5.
- Nếu live run gặp vấn đề do mạng/live Unsplash, chuyển sang saved verified HTML report ngày 3 June 2026 và nói rõ boundary.

## Slide Scripts

### s01-cover
Chào hội đồng. Em là Lê Tiệp Tuyên. Hôm nay em trình bày đồ án về framework automation testing dùng Playwright và TypeScript cho cả UI và API. Framework được demo trên một số scenario của Unsplash và được đánh giá bằng evidence từ lần chạy test đã verify.

### s02-toc
Em sẽ đi khá nhanh phần mở đầu, sau đó tập trung vào phần hội đồng quan tâm nhất: scope đã implement, kết quả chạy test, demo chạy test và HTML report, rồi benchmark so sánh Playwright với Cypress và Selenium. Sau đó em mới giải thích ngắn framework design phía sau.

### s02a-manual-testing
Trước khi so sánh hai cách tiếp cận, em xin định nghĩa manual testing một cách đơn giản. Tester tự thao tác các bước trên application, quan sát behavior, sau đó dùng judgment để quyết định kết quả có đúng hay không. Manual testing rất phù hợp cho exploratory work và usability, vì con người có thể nhận ra các điểm chưa được quy định sẵn.

### s02b-test-automation
Test automation khác ở chỗ phần mềm sẽ thực hiện hoặc hỗ trợ hoạt động testing. Các bước test và expected result được encode trong script, sau đó tool có thể chạy lại và tạo logs hoặc reports. Giá trị mạnh nhất là regression checks ổn định và lặp lại. Automation không thay thế human judgment, mà giúp các check có thể chạy và review dễ hơn.

### s03-manual-vs-auto
Bảng này chỉ để đặt ngữ cảnh. Manual testing vẫn rất quan trọng cho exploration và judgment. Automation phù hợp hơn với các regression checks cần lặp lại nhiều lần và cần evidence rõ ràng. Mục tiêu của framework không phải thay thế manual testing, mà là tự động hóa các check ổn định và có thể kiểm chứng.

### s04-automation-solves
Trong đồ án này, hai giá trị chính của automation là repeatability và reviewable evidence. Framework có thể chạy lại các check bằng một command và tạo JUnit XML cùng HTML report. Em không claim automation nhanh hơn manual bao nhiêu lần, vì đồ án không đo manual baseline.

### s05-problem
Vấn đề chính là regression testing phải lặp lại nhiều thao tác: navigation, nhập dữ liệu, gọi API, verify kết quả và ghi nhận evidence. Nếu automation chỉ là nhiều script rời rạc thì cũng khó maintain. Vì vậy đồ án tập trung vào việc thiết kế một framework maintainable cho cả UI-level và API-level regression checks.

### s06-objectives
Đồ án có bốn mục tiêu: phân tích cách tổ chức UI và API automation với Playwright và TypeScript, thiết kế các reusable abstractions, đánh giá implementation bằng execution evidence thật, và chỉ ra limitations cũng như future work.

### s14-implemented-scope
Framework được áp dụng trên Unsplash như một demonstration system. UI suite có ba scenario liên quan đến profile. API suite có mười lăm test trong bốn spec files, bao gồm public profile, statistics, photos và collections. Đây là representative scope, không phải full coverage của Unsplash.

### s15-verified-results
Đây là kết quả quan trọng nhất của đồ án. Lần chạy local verified ngày 3 June 2026 dùng lệnh `npx playwright test`. Tổng cộng có mười lăm API tests và ba UI tests, tức mười tám tests. Cả mười tám tests đều pass, zero failed, zero skipped. JUnit XML ghi duration là 28.890057 seconds, và HTML report trên slide xác nhận cùng kết quả.

### s15b-live-demo
Đây là thời điểm em chuyển sang demo. Em sẽ chạy `npx playwright test`, sau đó mở Playwright HTML report để cho hội đồng thấy passing status. Nếu live system hoặc network gặp vấn đề, em sẽ mở saved verified HTML report của lần chạy 3 June 2026 và nói rõ đây là verified evidence đã dùng trong thesis.

### s16-verified-breakdown
Slide này giải thích mười tám tests đến từ đâu. Bốn API spec files cover public profile, statistics, collections và photos. Ba UI spec files cover bookmarked photos, profile update và profile view. Tất cả đều zero failures và zero skipped, nên đây là breakdown chi tiết đằng sau full-suite summary.

### s17-tool-criteria
Phần tool comparison không phải ranking theo popularity. Thesis so sánh theo project-specific criteria như synchronization, UI plus API support, TypeScript architecture fit, reporting và debugging evidence. Playwright phù hợp vì nó gom browser automation, API request context, fixtures, HTML/JUnit report và trace support trong cùng một ecosystem.

### s19-benchmark-resource
Chart này là external benchmark về execution time, CPU và RAM. Lower is better. Selenium nhanh nhất một chút với 6.10s, Playwright rất gần với 6.26s, Cypress là 6.48s. Về CPU, Playwright tốt nhất với 17.57%, thấp hơn Selenium 19.98% và Cypress 20.63%. Về RAM, Selenium thấp nhất 28.08%, Playwright gần sát 28.77%, Cypress cao nhất 33.51%. Ý chính: Playwright không thắng mọi metric, nhưng rất competitive và tốt nhất ở CPU trong study này.

### s20-benchmark-reliability
Chart này bổ sung reliability context. Về uptime, Selenium đạt 100.00%, Playwright đạt 99.72% trong 24 giờ. Nhưng ROCOF lại cho thấy Playwright có fewer failures per second trong các hardware contexts được report. HP/HDD: Selenium 0.1208, Playwright 0.0272. Dell/SSD: Selenium 0.1336, Playwright 0.0279. Ý chính: đây là trade-off, không phải tool nào thắng tuyệt đối. Playwright vẫn phù hợp với framework này vì capability fit mạnh và external evidence cạnh tranh.

### s07-e2e-methodology
E2E testing có giá trị vì nó đi theo user-facing flow, nhưng dễ fragile nếu scope quá rộng. Vì vậy framework chỉ chọn các stable, representative flows. API checks bổ sung cho UI checks bằng cách verify service behavior gần interface hơn.

### s07b-playwright-capabilities
Các capability của Playwright giải thích vì sao tool này hợp với framework. Auto-waiting và web-first assertions giảm rủi ro timing-based flakiness. Fixtures giúp reusable setup. API request contexts cho phép UI và API checks cùng một toolchain. HTML, JUnit và trace tạo evidence để review.

### s08-architecture
Đây là cấu trúc tổng thể. Test files nằm trên cùng và thể hiện scenario intent. Page Objects xử lý UI interaction, workflows xử lý flow lặp lại, API services tập trung endpoint logic, còn core utilities hỗ trợ browser và request. Mục tiêu là giảm thay đổi rải rác khi application thay đổi.

### s09-pom
Page Object Model giúp đưa selectors và page actions ra khỏi test files. Test gọi một method có ý nghĩa, còn Page Object quản lý locator và interaction details. Cách này giúp localize UI changes tốt hơn.

### s10-fixtures
Fixtures inject Page Objects, workflows và runtime context vào tests. Nhờ vậy mỗi test không cần tự khởi tạo object. Setup được centralize và reusable, còn test body tập trung vào scenario cần verify.

### s11-api-design
Ở API side, service classes giữ endpoint construction và request logic bên ngoài test files. Tests gọi service methods, còn shared utilities xử lý URL, headers, HTTP methods và response support.

### s12-data-dto
Test data, DTOs, endpoint constants và configuration được centralize. Với UI tests có thay đổi state, framework có thể dùng API cleanup sau test. Đây là design mechanism hỗ trợ repeatability, không phải evidence về long-term reliability.

### s13-copilot
Project cũng có Copilot Agentic-AI workflow để hỗ trợ automation development: thiết kế scenario, generate Playwright scripts và review code theo framework conventions. Tuy nhiên hiệu quả productivity chưa được đo, nên chỉ trình bày như support feature.

### s21-limitations
Evaluation có boundary rõ. Evidence chỉ là một verified local run, chưa phải long-term reliability. Scope là representative, chưa phải full Unsplash coverage. Cypress và Selenium chưa được chạy local trên cùng suite. Future work nên tập trung vào CI/CD, mở rộng coverage, schema validation, non-functional testing và trend reporting.

### s22-thanks
Kết luận, nghiên cứu đã thiết kế và implement một Playwright TypeScript framework cho selected UI và API regression checks, verify bằng một full-suite passing run mười tám tests, và so sánh Playwright với Cypress/Selenium bằng project-specific criteria cùng external benchmark context. Em xin cảm ơn thầy hướng dẫn và hội đồng, và sẵn sàng nhận câu hỏi.
