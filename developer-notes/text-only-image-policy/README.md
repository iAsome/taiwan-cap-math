# 全站文字模式與圖片停用政策

本資料夾是給 Cursor / 未來 Codex 的內部備註，不會顯示給學生。

## 決策

- 學生作答頁與講義頁不顯示圖片、SVG、題目圖。
- 官方 PDF、原始圖片檔、歷史來源資料保留，不刪除。
- 題目必須靠文字本身可作答；如果仍依賴「如圖、右圖、圖中、附圖」且文字資訊不足，互動卷暫停出題。
- 數學題目若使用 `x、y、r、h、l、m、a、b、c、n、k` 等符號，詳解旁必須出現「本題符號說明」。
- 講義每單元顯示「符號說明」，先提醒學生字母代表什麼。

## 主要入口

- `shared/diagram-attach.js`
  - `attachDiagram()`：移除 `diagram` / `diagramSpec`，加上 `visualPolicy: "text-only"`。
  - `attachDiagramText()`：回傳空字串，講義不產圖。
  - `prepareTextOnlyExam()`：過濾 `visualTextStatus: "needs-text"` 題目，保留暫停數量。
- 各科 `app.js`
  - `launchAssessment()` 必須呼叫 `prepareTextOnlyExam()`。
  - 題目 HTML 不可插入 `q.diagram`。
  - 考卷上方可顯示暫停提示。
- `數學會考作戰室/app.js`
  - `unitSymbolHtml()`：講義符號說明。
  - `questionSymbolHtml()`：詳解本題符號說明。

## 稽核工具

- `node tools/verify-no-student-images.mjs`
- `node tools/audit-text-only-questions.mjs`
- `node tools/verify-symbol-clarity.mjs`
- `node tools/verify-diagram-coverage.mjs` 目前是文字模式 wrapper，不再要求產圖。

## 維護原則

先保守：寧可少出一題，也不要讓錯圖或缺圖誤導學生。若要恢復圖題，必須先把題幹改成不看圖也能完整作答，並通過稽核。
