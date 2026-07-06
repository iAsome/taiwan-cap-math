# 進度表

## 已完成

- 全站**完整 text-only**：測驗、講義、題型地圖皆不渲染本站 SVG（數線、統計圖、幾何示意等）。
- `attachDiagramText()` 回傳空字串；數學講義不再 wire `DIAGRAM_ENGINE` 渲染。
- 9 科 CSS 隱藏 `.question-diagram` 與 `.lecture-diagram`。
- `lecture-taxonomy.js` 重產為純文字 block（無 diagram block）。
- 官方 PDF 考卷館預覽保留（外部 embed，非本站 SVG）。
- `verify-no-student-images.mjs` 與 Phase 0 `diagram-coverage` gate 已對齊 full text-only 政策。

## 待補

- 依 `image-dependent-audit.json` 逐題人工文字化官方圖題（測驗仍暫停 `needs-text` 題）。
- 若未來恢復某些圖形，必須先建立「題文可作答 + 圖僅輔助」規則，並更新 verify 政策。

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
