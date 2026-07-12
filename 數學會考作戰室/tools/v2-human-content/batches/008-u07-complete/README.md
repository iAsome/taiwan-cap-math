# Math V2 Human Content Batch 008 — U07 Complete

本批次完整撰寫 U07「一元一次不等式」，對象為臺灣國中零基礎學生至國中教育會考滿分準備。

## 內容

- 12 個鎖定技能與 12 篇完整講義
- 144 題個別撰寫選擇題，每技能 12 題
- 24 題個別撰寫非選擇題，每技能 2 題
- 144 筆逐題獨立語意審查
- 3 張具替代文字、繪圖規格與人工檢查的 SVG
- 難度分布：basic、standard、advanced、literacy 各 36 題
- 答案位置：索引 0、1、2、3 各 36 題

## 安全狀態

此 ZIP 是不可變的平行作者套件，尚未獲中央協調者驗收。禁止直接啟用正式題庫、修改舊資料庫、提交共享分支或建立 PR。`CURSOR-INSTRUCTIONS.md` 僅供中央協調者核准後使用。

## 驗證流程

1. 乾淨解壓後執行 `node importer/verify-bundle.mjs`。
2. 核准後才可執行 `node importer/emit-unit-modules.mjs` 產生暫存模組。
3. 再次執行 verifier。
4. 交付 ZIP 本身不包含 `staging/`。
