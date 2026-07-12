# 中央總負責人回收清單

此套件尚未獲准交由 Cursor 整合。

中央總負責人驗收時應核對：

1. ZIP 檔名、位元組數與 SHA-256。
2. 12 個技能 ID、順序和前置技能是否與 syllabus lock 完全一致。
3. 12 講義、144 單選題、24 非選擇題、144 語意審查和 3 張 SVG 是否齊全。
4. 每技能難度與答案位置皆為 3、3、3、3。
5. 首次乾淨解壓 verifier 為 PASS，且 stagingPresent 為 false。
6. emitter 只產生 12 個 staging skill modules。
7. 第二次 verifier 為 PASS，且來源與 staging 一致。
8. `review/final-human-audit.json` 中的實際修正紀錄。
9. 跨單元重複掃描仍須由中央總負責人在 20 個平行套件回收後統一執行。
10. 核准整合前，填入精確 EXPECTED_HEAD；不得使用猜測或目前看似最新的 HEAD。

禁止提前啟用 production 或刪除舊資料庫。
