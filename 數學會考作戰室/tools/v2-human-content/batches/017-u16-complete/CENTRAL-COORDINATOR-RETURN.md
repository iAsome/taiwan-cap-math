# CENTRAL COORDINATOR RETURN — BATCH 017 U16

請中央總負責人接收：

- ZIP：`math-v2-human-content-batch-017-u16-complete.zip`
- extracted root：`math-v2-human-content-batch-017-u16-complete/`
- target destination：`數學會考作戰室/tools/v2-human-content/batches/017-u16-complete/`
- approval gate：`CENTRAL_COORDINATOR_APPROVAL_REQUIRED`

## 驗收順序

1. 驗證 ZIP SHA-256 與本次交付報告一致。
2. 在乾淨目錄解壓，確認沒有 `staging/`。
3. 執行 `node importer/verify-bundle.mjs`。
4. 將本包 fingerprints 納入 U04–U23 全域近重複掃描。
5. 比對 shared schemas、manifest conventions 與依賴順序。
6. 填入實際 `EXPECTED_HEAD`，再授權 Cursor。
7. Cursor 複製 immutable package 後先驗證，再執行 emitter，再以 `--expect-staging` 二次驗證。
8. 不得啟用 production，不得刪除舊資料庫；需等待 23 單元全部通過 final global release gate。

## 本包不主張的事項

- 不主張已完成跨單元重複檢查。
- 不主張已與其他 19 個平行包完成 schema reconcile。
- 不主張可替換 production。
- 不主張可現在刪除 legacy sources。
