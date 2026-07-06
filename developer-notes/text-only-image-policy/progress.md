# 進度表

## 已完成

- 全站共用圖形入口改為**混合模式**：測驗文字作答、講義/handbook 保留課本 SVG。
- 各科作答頁停止渲染 `q.diagram`（測驗仍走 `prepareTextOnlyExam()`）。
- 數學講義重新生成 **298** 個 diagram block（`lecture-taxonomy.js`）。
- 修正 `visualStatus` 只檢查題幹+選項，排除 tip/trap 假陽性。
- 盒狀圖等統計題文字化；`image-dependent-audit.json` **0 筆**待補。
- 前端 cache token 已更新到 `20260706a`。

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
