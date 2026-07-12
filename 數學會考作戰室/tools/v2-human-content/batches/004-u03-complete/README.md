# Math V2 Human Content Batch 004 — U03 Complete

本包完成第三單元「一元一次方程式」的全部十五個 skills。

## 人工製作內容

- 15 篇逐篇撰寫並審查的零基礎講義
- 180 題逐題撰寫、重新求解及逐選項核對的選擇題
- 30 題逐題撰寫的非選擇題與 0～3 分評分規準
- 180 份獨立語意審查紀錄
- 3 張逐題指定 drawing spec、alt text 與幾何斷言的 SVG
- U03 課綱決策、單元總審查、舊資料隔離契約與最終退休清單

## 舊資料庫隔離

本包的所有教學記錄均標示：

`contentAuthority: CHATGPT_HUMAN_AUTHORED_R1`

現有 Codex 生成題庫、講義、語意審查與編譯後 runtime bank 均未匯入本包，也不允許與本包在最終 runtime 共存。

本階段只保存人工作者來源，不立即刪除舊資料庫。待 23 單元全部完成後，最終整合必須依 `manifest/legacy-content-isolation.json`：

1. 備份舊 runtime；
2. 驗證 23 個人工單元完整；
3. 刪除舊生成來源與循環審查證據；
4. 刪除舊編譯題庫與講義庫；
5. 僅從 `CHATGPT_HUMAN_AUTHORED_R1` 建立新 runtime；
6. 掃描並清除所有舊引用與舊 hash；
7. 重建 manifest、locks 並執行完整 release gate。

## 完成本包後的作者分支進度

- 完整單元：U01、U02、U03
- 完整 skills：45 / 339
- 講義：45
- 選擇題：540
- 非選擇題：90
- 人工 SVG：11

本包只允許加入作者 staging 分支，不得寫入或啟用正式 `數學會考作戰室/v2/`。
