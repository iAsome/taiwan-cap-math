# Math V2 人工內容批次 017 — U16 完成包

## 範圍

本包只包含 `u16`「三角形的性質與尺規作圖」，保留鎖定的 18 個技能、順序、主題與先備鏈。

- 講義：18
- 選擇題：216（每技能 12 題）
- 非選擇題：36（每技能 2 題）
- 選擇題語意審查：216
- SVG 圖形：18
- 內容權威：`CHATGPT_HUMAN_AUTHORED_R1`

## 信任邊界

本包未讀取、複製、改寫、修補或混用舊生產題庫與舊講義。既有 Codex 生成內容、舊 compiled banks 與舊 semantic evidence 均未被接受為數學內容來源。

只借用：

1. syllabus lock 的 ID、順序、先備關係與會考邊界；
2. HUMAN-AUTHORING-BASELINE 的治理規則；
3. Batch 002/003 的人工內容檔案結構與驗證慣例。

## 驗證

在套件根目錄執行：

```bash
node importer/verify-bundle.mjs
node importer/emit-unit-modules.mjs
node importer/verify-bundle.mjs --expect-staging
```

`emit-unit-modules.mjs` 只由已審核 source 產生 staging module，不產生或修理數學內容。交付 ZIP 中刻意不含 `staging/`。

## 整合限制

本包不得直接執行 Cursor 整合。`CURSOR-INSTRUCTIONS.md` 標示 `CENTRAL_COORDINATOR_APPROVAL_REQUIRED`，並保留待中央總負責人填入的 expected HEAD。只有中央總負責人完成全域重複掃描、schema reconciliation 與 ordered integration 後，才可交由 Cursor 實作。


## 中央總負責修訂 R1

- 把與 U05 完全相同的通用題幹「下列哪個敘述正確？」改為明確的三角形外角定理判讀題幹，避免跨單元指紋碰撞。

舊題庫未匯入；正式 runtime 尚未啟用。
