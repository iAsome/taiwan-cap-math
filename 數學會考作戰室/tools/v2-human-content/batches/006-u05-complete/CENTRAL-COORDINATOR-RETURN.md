# Return to Central Coordinator

請將整個 ZIP 與交付報告帶回中央協調者對話。

中央協調者需執行：

1. 驗證 ZIP SHA-256 與乾淨解壓結果。
2. 與其他平行單元合併指紋，執行跨單元重複掃描。
3. 供應當下共享作者分支的 `EXPECTED_HEAD`。
4. 審查 `CURSOR-INSTRUCTIONS.md` 後才可交由 Cursor 整合。
5. 依中央排序提交；不得讓此子對話自行 commit、push 或開 PR。
6. 所有 23 單元完成前，不得替換正式題庫或刪除舊資料。
