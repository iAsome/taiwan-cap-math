# Central Coordinator Return — Batch 008 U07

## Return target

請將原始 ZIP 與本對話完整交付報告帶回中央協調者對話。中央協調者負責：

- 驗證 ZIP 位元組與 SHA-256
- 按既定順序整合 Batch 008
- 提供當下唯一允許的 `EXPECTED_HEAD`
- 執行跨單元 fingerprints 重複掃描
- 處理共享 schema 差異
- 確保舊資料庫隔離
- 在全部 23 單元通過前禁止正式啟用

## Acceptance facts

- Unit: `u07`
- Batch: `008-u07-complete`
- Locked skills: 12
- Lectures: 12
- MC: 144
- Constructed responses: 24
- Semantic reviews: 144
- SVG figures: 3
- Production activation: forbidden
- Legacy deletion: forbidden now
- Cursor execution: requires central coordinator approval

## Parallel limitation

本套件只能驗證 U07 內部重複。其餘平行單元尚未全部可見，跨單元近似重複與先備衝突必須由中央協調者在收齊後統一執行。
