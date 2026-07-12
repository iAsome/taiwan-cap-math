# Math V2 Human Content — Batch 009 U08 Complete

This immutable source package contains the complete human-authored U08 unit: **平面幾何圖形與三視圖**.

## Counts

- 14 locked skills
- 14 lectures
- 168 multiple-choice questions
- 28 constructed-response questions
- 168 semantic reviews
- 0 figures, because the locked U08 scope is text-only
- 42 questions in each difficulty band
- 42 answers in each answer-index position

## Trust boundary

Old production questions, lectures and generated semantic evidence were not used. Repository materials were consulted only for the locked syllabus identity and package/schema conventions.

## Verification

From the extracted package root:

```bash
node importer/verify-bundle.mjs
node importer/emit-unit-modules.mjs
node importer/verify-bundle.mjs
```

The emitter creates `staging/` only in the working copy. It is serialization of reviewed source, not production activation. The delivered ZIP intentionally has no `staging/` directory.

## Integration

Do not run the Cursor instructions until the central coordinator supplies the expected Git HEAD and approves the package. Return this ZIP and the complete delivery report to the central coordinator for ordered integration and cross-unit duplicate reconciliation.


## 中央總負責修訂 R1

本封包已通過中央結構檢查並完成以下修訂：
- 修正簡體字「给」；新增4張必要SVG；修正平方公里換算的跨單元通用題幹；解除錯誤的全單元純文字限制。

舊題庫未匯入；正式 runtime 尚未啟用。
