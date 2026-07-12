# Math V2 人工內容批次 019 — U18 連比與相似形

## 批次狀態

此目錄是完整、不可變更的人工撰寫來源包，等待中央總負責人驗收與排序整合。它不是 production release，也不允許直接啟用。

- 單元：`u18` 連比與相似形
- 鎖定技能：16
- 講義：16
- 選擇題：192
- 非選擇題：32
- 選擇題語意審查：192
- SVG 圖形：11
- 內容權威：`CHATGPT_HUMAN_AUTHORED_R1`
- Production activation：禁止

## 信任邊界

本批次只使用鎖定課綱的 ID、順序、先備關係與範圍，並只參照既有人工批次的檔案結構與驗證慣例。舊 production 題庫、講義、生成式審查紀錄與舊自動產生器內容未被讀取或採用。

## 內容配置

每個 `units/u18/s###/` 都含：

- `lecture.json`
- `mc-questions.jsonl`
- `constructed-response.jsonl`
- `semantic-reviews.jsonl`
- `drawing-specs.jsonl`

圖形位於 `figures/u18/`。每張 SVG 具有 `<title>`、`<desc>`、替代文字、精確座標、繪製規格、token assertion 與人工渲染審查。

## 驗證

在根目錄執行：

```bash
node importer/verify-bundle.mjs
node importer/emit-unit-modules.mjs
node importer/verify-bundle.mjs
```

第一個 verifier 必須在沒有 `staging/` 時通過。Emitter 只會由審查過的來源產生 16 個 batch-local staging 模組。第二次 verifier 必須在 staging 存在時再次通過。

## 整合限制

`CURSOR-INSTRUCTIONS.md` 標示 `CENTRAL_COORDINATOR_APPROVAL_REQUIRED`。中央總負責人尚未提供 expected HEAD 前，不得執行。不得修改其他單元、production runtime、舊資料庫或 release gate。


## 中央總負責修訂 R1

本封包已通過中央結構檢查並完成以下修訂：
- 修正題目、解析、審查及指紋檔中的簡體字形。

舊題庫未匯入；正式 runtime 尚未啟用。
