# 九科全站 QA 紀錄

執行者：Cursor Agent（自動 verify + qa-smoke）  
日期：2026-07-02（地科／理化 diagram 重製 + 自然稽核後重驗）

## Phase 0 — 自動化閘門

- [x] `node tools/run-phase0.mjs` — **19/19 pass**
- [x] hub-links — 9/9 連結有效
- [x] 國文 `verify-chapter-quizzes.js`
- [x] 數學 `verify-chapter-quizzes.js`
- [x] 英文 / 地科 / 生物 / 歷史 / 地理 / 公民 `verify-data.mjs`
- [x] 地科 `tools-smoke-test.mjs`
- [x] 理化 `verify-quizzes.js` + `verify-archive.mjs`
- [x] 自然 cross-check `cross-check-answers.mjs` — 106–115 零 mismatches
- [x] 社會 cross-check `verify-social-archive-answers.mjs` — **525/525** 題 vs 官方社會欄一致
- [x] 英文閱讀 cross-check `verify-en-reading-archive.mjs` — **420/420** pass
- [x] 歷屆缺口 `inventory-archive-gaps.mjs` — **九科 gap 0**
- [x] 自然分科稽核 `audit-nature-subject.mjs` → `tests/nature-subject-audit.json`
- [x] 地科／理化 diagram 覆蓋 `verify-diagram-coverage.mjs` — **image-ref 100% 有 diagram**
- [x] 地科／理化答案 cross-check `verify-nature-archive-answers.mjs` — **144/144** pass（stem 對齊後比對）

## Phase 1–2 — Hub 入口 + 9 views

自動化（`node tools/qa-smoke.mjs`）：

- [x] hub 9 科卡片 href 皆可解析
- [x] 9 科皆有 `.cmd` 啟動器
- [x] 9 科 × 9 個 `data-view` 皆存在於 index.html
- [x] 9 科皆有 app.js（八科支援 `q.diagram` 渲染）

## Phase 3 — 模考 + 小考 catalog

- [x] **240 份小考** 全 catalog 生成成功
- [x] **9 份模擬考** generate() 成功

## Phase 3C + 4 + 5 — 歷屆考卷館（數學黃金標準）

- [x] **2070 題** archive 結構檢查（steps/tip/trap/answer 有效）
- [x] 圖表/地圖題以 `diagram`（PNG/SVG/HTML 表）重製，**有效 omittedNote 已移除**
- [x] 社會三科 525 題答案 vs 官方社會欄 — 0 不一致
- [x] 自然三科 vs confirmed-nature-answers.json — 0 不一致
- [x] 英文閱讀 420 題 vs `*-reading-answers.json` — 0 不一致
- [~] 國文 `verify-cn-archive-answers.mjs` — 已建；部分 diagram 題 stem 比對待強化（不阻 Phase 0）
- [~] Phase 5 詳解逐題人工 rubric — 以 steps/tip/trap 存在性 + 答案 cross-check 替代

### 歷屆題數（inventory + verify-data）

| 科目 | 題數 | 官方範圍 |
|------|------|----------|
| 國文 | 450 | 106–110×48 + 111–115×42 |
| 數學 | 275 | 106–110×28 + 111–115×27 |
| 英文（閱讀） | 420 | 106–110×41 + 111–115×43 |
| 理化 | 253 | 自然合卷理化子集 |
| 生物 | 99 | 自然合卷生物子集 |
| 地科 | 48 | 自然合卷地科子集 |
| 歷史 | 159 | 社會合卷歷史子集 |
| 地理 | 155 | 社會合卷地理子集 |
| 公民 | 211 | 社會合卷公民子集 |
| **合計** | **2070** | |

## 問題彙整

| ID | 嚴重度 | 狀態 | 說明 |
|----|--------|------|------|
| BUG-001 | blocker | **已修** | 數學 verify 未載入 quiz-taxonomy.js |
| BUG-002 | blocker | **已修** | regen-analysis 曾破壞 primaryUnits `],` — 已修 regex + 自 archive 重建 |
| GAP-001 | low | **已建** | `verify-cn-archive-answers.mjs`；diagram 題 stem 比對可再強化 |
| GAP-002 | low | 已知 | Phase 5 詳解品質需人工 rubric |

## 驗收對照（Definition of Done — 歷屆補齊）

- [x] 九科 106–115 每年 archive 題數 = 各科官方/子集目標（inventory gap 0）
- [x] 九科無有效 omittedNote（英文聽力不在站內規格）
- [x] 八科 app 支援 `diagram` 渲染
- [x] 社會/自然/英文閱讀 cross-check 全 pass
- [x] `inventory-archive-gaps.mjs` exit 0
- [x] `run-phase0.mjs` 19/19 pass

## 地科／理化十年完善（數學黃金標準 diagram）

- [x] `withDiagram` / `imgDiagram` 輔助函式已加入兩科 archive
- [x] 地科 **13** 題 image-ref → PNG diagram（`official-data/{year}/q{N}.png`）
- [x] 理化 **123** 題 image-ref → PNG diagram
- [x] 地科 header 移除「圖表題未收錄」矛盾描述；理化 stale `omittedNote` 註解已清
- [x] `analysis-data.js` 兩科已 regen
- [x] 工具：`patch-earth-diagrams.mjs`、`patch-phys-diagrams.mjs`、`nature-exam-utils.mjs`

## 重跑指令

```bash
node tools/run-phase0.mjs
node tools/qa-smoke.mjs
node tools/inventory-archive-gaps.mjs
node tools/verify-social-archive-answers.mjs
node tools/verify-en-reading-archive.mjs
node tools/audit-nature-subject.mjs
node tools/patch-earth-diagrams.mjs
node tools/patch-phys-diagrams.mjs
node tools/verify-diagram-coverage.mjs
node tools/verify-nature-archive-answers.mjs
node tools/regen-analysis.mjs 國文會考作戰室   # 各科可替換
```
