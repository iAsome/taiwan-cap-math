# Math V2 Global Repair Wave 1A R1

本包處理 Global Audit R1 中可確定、可機械驗證、不涉及跨單元教學取捨的四類 blocker：

- 834 個 `contentAuthority` 缺口
- 4 個舊資料隔離契約缺口
- 43 個簡體字形出現位置
- 3 個講義標題內部頓號

同時提供修正後的 Windows batch verifier runner。

## 不處理的項目

本包不自動處理：

- 7 組跨單元 prompt skeleton 候選
- 29 組只換數字候選

這些留給 Global Repair Wave 1B，由中央總負責人逐組判讀及改寫。

## 經中央離線驗證的預期結果

- 受影響批次：9
- 受影響批次雙重 verifier：9/9 PASS
- 全部 batch verifier：24/24 PASS
- Global audit：`PASS_GLOBAL_STRUCTURE`
- skills：339
- lectures：339
- MC：4,068
- CR：678
- semantic reviews：4,068
- content-authority gaps：0
- legacy-isolation issues：0
- simplified issues：0
- title punctuation issues：0
- production activation：仍禁止
- old database deletion：仍禁止
