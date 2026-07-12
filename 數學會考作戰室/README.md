# 會考數學作戰室

公開網址：https://iasome.github.io/taiwan-cap-math/

數學網站預設使用 Math V2 production：23 個課綱單元、339 項技能、4,068 題純文字四選一題與 339 份完整講義。生成題是原創練習，不是官方題目或預測題。

## 學習與測驗

- 全冊講義：每技能提供觀念、適用條件、至少 5 個步驟、2 個例題與 4 個常見錯誤。
- 單元小考：23 份；每份對該單元每項技能抽 1 題，20 分鐘。
- 模擬考：25 題四選一、80 分鐘、不含非選擇題。
- 模考選題依 106–115 年官方題本主概念分布校準，並涵蓋六大領域與國一至國三。
- 同 seed 可重現同卷；洗牌後正確答案位置會同步更新。
- 交卷後可看完整詳解、步驟、觀念與具體易錯原因，並產生同技能訂正題。
- 題目、講義與考卷都不使用圖片、SVG、canvas 或隱藏圖形依賴。

「我的考卷」保留在本機瀏覽器。既有 `capMath.completed`、`capMath.quizSignatures.*` 與 `capMath.paperHistory` 不會被清除；V2 以新增 key 保存完成紀錄，新考卷會記錄 engine version、content version 與 seed。

## 歷屆官方資料

106–115 年官方數學題本、答案與試題說明仍保存在 `official-data`，未因 V2 改動。官方題本可能含非選擇題與圖表；本站的 25 題練習模考則固定為純文字選擇題。正式規格、答案與勘誤以國中教育會考官方網站為準。

## 執行

保留整個資料夾，使用 `開啟會考數學作戰室.cmd`，或由 repository 根目錄啟動靜態 HTTP server 後開啟 `數學會考作戰室/index.html`。

一般導覽不顯示 V1。需要診斷舊版時，可直接開啟 `legacy.html`；此路由與 V2 預設 consumer 隔離。

## 開發指令

```bash
node 數學會考作戰室/tools/build-v2-all-units.mjs
node 數學會考作戰室/tools/verify-v2-all.mjs
node 數學會考作戰室/tools/run-v2-full-release-gate.mjs
```

權威內容位於 `tools/v2-content/`；`v2/` 題庫與講義 bank 是決定性生成產物，不可手改。完整架構與鎖檔說明見 [`v2/README.md`](v2/README.md)。
