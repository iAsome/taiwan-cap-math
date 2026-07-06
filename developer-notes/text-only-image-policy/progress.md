# 進度表

## 已完成

- 全站共用圖形入口改為文字模式。
- 各科作答頁停止渲染 `q.diagram`。
- 各科 `launchAssessment()` 改走 `prepareTextOnlyExam()`。
- 各科 CSS 加上學生端圖片隱藏保險線。
- 數學講義新增「符號說明」區塊。
- 數學詳解新增「本題符號說明」區塊。
- 數學講義內直接渲染 diagram block 的入口已停用。
- 新增文字模式 / 圖依賴 / 符號說明稽核工具。
- 前端 cache token 已更新到 `20260709d`。

## 待補

- 依 `image-dependent-audit.json` 逐題人工文字化官方圖題。
- 依 `symbol-clarity-audit.json` 檢查需要更精準語意的符號說明。
- 若未來恢復某些圖形，必須先建立「題文可作答 + 圖僅輔助」規則，不能回到每題硬配圖。

## 驗收指令

```powershell
node tools\verify-no-student-images.mjs
node tools\audit-text-only-questions.mjs
node tools\verify-symbol-clarity.mjs
node tools\verify-diagram-coverage.mjs
node 數學會考作戰室\tools\verify-drill-generation.mjs
node 數學會考作戰室\tools\verify-lecture-taxonomy.mjs
node tools\run-phase0.mjs
```
