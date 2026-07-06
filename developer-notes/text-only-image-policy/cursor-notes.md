# 給 Cursor / 未來 Codex

- 不要刪除官方 PDF、官方圖片、歷史來源檔。這次只停用學生端顯示。
- 不要重新打開 `q.diagram` 渲染。若題目需要圖，先把題幹文字化。
- `shared/diagram-attach.js` 是全站 kill switch；優先改這裡，不要在九科 app 各自補一堆例外。
- `visualPolicy`、`visualReason`、`visualTextStatus`、`visualRisk`、`pausedReason`、`symbolNotes` 是內部欄位，不要顯示給學生。
- 學生可見的只有：
  - 暫停圖題提示。
  - 講義「符號說明」。
  - 詳解「本題符號說明」。
- 任何 `x =`、`r =`、`h =` 類寫法，如果沒有說明字母代表什麼，都要補成「設 x 為……」或靠 `symbolNotes` 清楚顯示。
- `verify-diagram-coverage.mjs` 已改為文字模式檢查 wrapper，名稱沿用是為了相容舊流程。

## 文字化圖題的最低標準

題目要不看圖也能作答。例如：

- 不足：如右圖，求 x。
- 可接受：一個直角三角形的兩股分別為 3 公分與 4 公分，斜邊設為 x 公分，求 x。
- 不足：半徑 r = 5。
- 可接受：圓的半徑設為 r，且半徑 r = 5 公分，求圓面積。
