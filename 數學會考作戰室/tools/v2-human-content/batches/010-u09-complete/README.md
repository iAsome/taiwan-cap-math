# math-v2-human-content-batch-010-u09-complete

Human-authored completion package for Unit U09, **統計圖表與資料處理**.

## Contents

- 16 locked skills in `s001`–`s016`
- 16 zero-foundation lectures
- 192 multiple-choice questions, exactly 12 per skill
- 32 constructed-response questions, exactly 2 per skill
- 192 question-specific semantic reviews
- 7 question-specific SVG figures and drawing specifications
- source verifier, staging emitter, manifests, hashes and human audit records

## Scope

The package covers data tables, frequency and relative frequency, bar charts, line charts, frequency polygons, pie charts, histograms, cumulative frequency, contingency tables, mean, median, mode, range, weighted mean, means from frequency tables, data comparison, misleading statistical claims and statistical literacy.

Quartiles and box plots are intentionally excluded and remain assigned to U22.

## Safety status

- `productionActivationAllowed`: `false`
- legacy content imported: `false`
- delivery ZIP contains no `staging/` directory
- central coordinator approval is required before Cursor integration
- expected Git HEAD is intentionally unresolved: `__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__`

Run the verifier only on an extracted copy:

```bash
node importer/verify-bundle.mjs .
```

The emitter is for coordinator-approved integration testing and creates `staging/` from reviewed source:

```bash
node importer/emit-unit-modules.mjs .
node importer/verify-bundle.mjs .
```


## 中央總負責修訂 R1

本封包已通過中央結構檢查並完成以下修訂：
- 修正簡體字形；把一題重複的合併平均計算改為加權平均錯誤診斷。

舊題庫未匯入；正式 runtime 尚未啟用。
