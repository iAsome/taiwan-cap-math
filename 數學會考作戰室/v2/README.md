# v2 題庫架構（Phase 2A-R1 品質修正）

v2 **draft** — **尚未上線**，預設網站仍使用 v1 引擎；`index.html` / `app.js` 未接入 v2。

## Phase 2A-R1 修正摘要

- U01～U03 題庫（180 題）與講義（45 份）重寫：steps / concept / explanation / commonMistake 不得模板化。
- raw bank `answerIndex` 依 skill 輪替分布（0～3），不再全部固定 A。
- syllabus 擴充至 **≥330 skills**（U04～U23 僅 syllabus，**未生成題庫**）。
- `legacyRefs` 逐條對照 v1 `QUIZ_TAXONOMY`；不存在者移出或留空待核。
- 驗證器加嚴：題庫品質、講義模板句、syllabus 完整度、migration map 真實性。

## 目前狀態

| 範圍 | 狀態 |
|------|------|
| U01～U03 題庫 | 品質修正版 pilot（每 skill 4 題） |
| U01～U03 講義 | 品質修正版 pilot |
| U04～U23 題庫 | **未生成** |
| U04～U23 syllabus | 完整 coverage（待 Phase 2B 出題） |
| v1 首頁 / 模考 / 小考 | **不受影響** |

## 檔案

| 檔案 | 用途 |
|------|------|
| `math-units-v2.js` | 23 單元總表 |
| `math-syllabus-v2.js` | skill taxonomy 唯一真相來源 |
| `math-syllabus-v2-gap-report.md` | 各單元 skill 覆蓋差距報告 |
| `math-migration-map.js` | v1 → v2 對照 |
| `math-migration-invalid-legacy-refs.json` | 已移除的無效 legacyRefs |
| `math-question-schema-v2.js` | 題目 schema（steps ≥3） |
| `math-question-bank-v2-u01.js`～`u03.js` | pilot 題庫（各 60 題） |
| `math-lecture-v2-u01.js`～`u03.js` | pilot 講義 |
| `math-quiz-blueprints-v2.js` | 單元小考藍圖 |
| `math-engine-v2.js` | v2 測試引擎（非預設） |

## 題目 schema（摘要）

每題必含：`questionId`、`unitId`、`topicId`、`skillId`、`type: "mc"`、`visualMode: "text-only"`、`choices[4]`、`answerIndex`、`explanation`（≥30 中文字）、`steps`（≥3，禁模板句）、`concept`（一般化觀念）、`commonMistake`（對應該題）。

## 驗證腳本

在 `數學會考作戰室/` 目錄執行：

```bash
node tools/build-v2-phase2a.mjs   # 重建 v2 產物
node tools/verify-v2-all.mjs
node tools/verify-chapter-quizzes.js   # 確認 v1 不受影響
```

個別腳本：`verify-v2-syllabus.mjs`、`verify-v2-question-bank.mjs`、`verify-v2-lecture.mjs`、`verify-v2-migration-map.mjs`、`verify-v2-text-only.mjs`。

## 測試引擎

載入 v2 腳本後（**勿設為首頁預設**）：

```js
window.MATH_ENGINE_V2.generateUnitQuiz("u01", 42);
window.MATH_ENGINE_V2.validateBank();
```

## Phase 2B（下一階段）

- **須先經 ChatGPT 審核 Phase 2A-R1 後才可開始。**
- 生成 U04～U23 完整題庫（每 skill 目標 12 題）
- 細化 migration map、接入 `?engine=v2` 測試入口
- 與模考權重、考卷館整合（仍保留 v1）
