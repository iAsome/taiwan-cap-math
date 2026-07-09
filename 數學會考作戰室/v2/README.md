# v2 題庫架構（Phase 2A 試作）

v2 draft under development — **尚未取代 v1**，預設網站仍使用 v1 引擎。

## 概述

- v2 目標：**23 單元**（u01～u23），對應台灣國中教育會考數學範圍。
- 第一版題型：**全部四選一選擇題（MC）**，不做手寫算式、輸入答案或非選擇作答。
- 圖形題：**禁止圖片/SVG/canvas**，第一版以完整文字描述代替。
- 本階段（Phase 2A）僅完成 **U01～U03 試作題庫與講義**；U04～U23 僅有 syllabus。

## 檔案

| 檔案 | 用途 |
|------|------|
| `math-units-v2.js` | 23 單元總表 |
| `math-syllabus-v2.js` | skill taxonomy 唯一真相來源 |
| `math-migration-map.js` | v1 → v2 對照 |
| `math-question-schema-v2.js` | 題目 schema 驗證 |
| `math-question-bank-v2-u01.js`～`u03.js` | 試作題庫（各 60 題） |
| `math-lecture-v2-u01.js`～`u03.js` | 試作講義 |
| `math-quiz-blueprints-v2.js` | 單元小考藍圖 |
| `math-engine-v2.js` | v2 測試引擎（非預設） |

## 題目 schema（摘要）

每題必含：`questionId`、`unitId`、`topicId`、`skillId`、`type: "mc"`、`visualMode: "text-only"`、`choices[4]`、`answerIndex`、`explanation`、`steps`（≥2）、`commonMistake` 等。

## 驗證腳本

在 `數學會考作戰室/` 目錄執行：

```bash
node tools/verify-v2-all.mjs
```

個別腳本：`verify-v2-syllabus.mjs`、`verify-v2-question-bank.mjs`、`verify-v2-lecture.mjs`、`verify-v2-migration-map.mjs`、`verify-v2-text-only.mjs`。

## 測試引擎

載入 v2 腳本後（**勿設為首頁預設**）：

```js
window.MATH_ENGINE_V2.generateUnitQuiz("u01", 42);
window.MATH_ENGINE_V2.validateBank();
```

## Phase 2B（下一步）

- 生成 U04～U23 完整題庫（每 skill 目標 12 題）
- 細化 migration map、接入 `?engine=v2` 測試入口
- 與模考權重、考卷館整合（仍保留 v1）
