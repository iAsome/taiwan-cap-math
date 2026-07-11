# Math V2 正式題庫

Math V2 是數學網站的預設 production 內容。V1 僅保留於未出現在一般導覽的 `legacy.html`／`?legacy=1` 回退路由。

## 正式規模

- 23 個課綱單元
- 339 項必修技能
- 4,068 題純文字四選一題
- 339 份技能講義
- 每技能 12 題：`basic`、`standard`、`advanced`、`literacy` 各 3 題
- 每技能四個答案位置各 3 題
- 每技能 1 份講義；例題格式固定為 `{ prompt, answer, why }`

每題至少有 45 個中文字的詳解、3 個有順序的步驟與具體常見錯誤。每份講義至少有 80 個中文字的觀念、5 個步驟、2 個完整例題與 4 個常見錯誤。學生內容禁止圖片、SVG、canvas 或隱藏圖形依賴。

## 權威來源與產物

`tools/v2-content/syllabus-source.mjs` 是獨立課綱來源；`tools/v2-content/units/u01` 至 `u23` 是各單元的靜態權威題目與講義來源。`tools/build-v2-all-units.mjs` 是唯一 U01–U23 production builder，生成本資料夾的瀏覽器 bank、blueprint、manifest 與 migration map。

生成檔不可手改。內容修正必須先改權威 source，再重建並通過 source/generated equality。

## 網站載入

預設頁只載入課綱 metadata、production profile、unit manifest、blueprint、V2 engine 與 UI bootstrap。題庫與講義由固定白名單路徑按需載入；初始頁不解析全部 4,068 題。

- 單元小考：每項技能抽 1 題，20 分鐘，題目與選項依 seed 決定。
- 模擬考：25 題四選一，80 分鐘，不含非選擇題。
- 模考權重：依本機 `analysis-data.js` 的 106–115 年官方題本主概念編碼換算。
- 相同 engine version、content version、blueprint 與 seed 會重現同卷。

舊 `capMath.completed`、`capMath.quizSignatures.*` 與 `capMath.paperHistory` 不會被清除。V2 完成紀錄使用新增 key；舊完成紀錄會在讀取時映射，新考卷另存 engine/content version 與 seed。

## 建置與驗證

從 repository 根目錄執行：

```bash
node 數學會考作戰室/tools/build-v2-all-units.mjs
node 數學會考作戰室/tools/verify-v2-all.mjs
node 數學會考作戰室/tools/run-v2-full-release-gate.mjs
```

內容鎖只可由本次授權 task 明確寫入：

```bash
node 數學會考作戰室/tools/write-v2-production-locks.mjs --task MATH-V2-U01-U23-ONE-SHOT-FULL-PRODUCTION-R1
```

驗證模式只讀鎖，不會自動更新。三支早期 U01–U03 fixed-base 測試仍保留作考古證據；偵測到 339-skill production profile 時會明確輸出 historical skip，現在的放行依據是累積 gate。

最近一次 Chrome 效能 smoke 見 `tools/review-output/full-v2-production/performance-smoke.json`；完整命令、工作目錄、exit code、輸出摘要與時間證據見同目錄的 `validation-evidence.json`。

## 主要檔案

| 路徑 | 用途 |
|---|---|
| `math-syllabus-v2.js` | 23 單元與 339 技能的瀏覽器 metadata |
| `math-question-bank-v2-u01.js`～`u23.js` | 23 份題庫產物 |
| `math-lecture-v2-u01.js`～`u23.js` | 23 份講義產物 |
| `math-quiz-blueprints-v2.js` | 23 份單元小考藍圖 |
| `math-mock-blueprint-v2.js` | 25 題模考領域、難度與單元權重 |
| `math-v2-unit-manifest.js` | 固定 bank 路徑白名單與內容版本 |
| `math-engine-v2.js` | 懶載入、組卷、訂正與復原引擎 |
| `math-v2-content-manifest.json` | inventory 與 source/generated hash |
| `math-v2-production-locks.json` | 61 個 production SHA-256 鎖 |
