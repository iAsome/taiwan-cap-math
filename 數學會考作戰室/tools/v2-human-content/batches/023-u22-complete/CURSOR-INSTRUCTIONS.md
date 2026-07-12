# CENTRAL_COORDINATOR_APPROVAL_REQUIRED

`EXPECTED_HEAD=__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__`

## Authority and execution boundary

These instructions are **not authorized for execution yet**. They are implementation instructions for Cursor only after the central coordinator has reviewed this ZIP, supplied the expected Git HEAD, selected the integration order and explicitly approved execution.

Cursor is implementation-only. Cursor must not write, rewrite, expand, summarize, repair, regenerate or substitute any mathematical lecture, question, answer, distractor, explanation, rubric, semantic review, drawing specification or SVG. If validation fails, stop and report the exact failure; do not repair content autonomously.

## Approved destination

Copy the extracted immutable package directory exactly to:

`數學會考作戰室/tools/v2-human-content/batches/023-u22-complete/`

Do not modify U01–U21 or U23. Do not read old production question or lecture banks for content comparison or repair. Do not activate production routes. Do not delete legacy content.

## Required procedure after approval

1. Confirm the repository is `iAsome/taiwan-cap-math` and the branch is `chatgpt/math-v2-human-authoring-r1`.
2. Replace the placeholder above only with the exact HEAD supplied by the central coordinator. Run `git rev-parse HEAD` and stop if it differs.
3. Compute the ZIP SHA-256 and compare it with the coordinator-approved value. Stop on mismatch.
4. Extract to a temporary clean directory. Confirm the extracted root is exactly `math-v2-human-content-batch-023-u22-complete/` and confirm there is no `staging/` directory.
5. Run `node importer/verify-bundle.mjs .` from the extracted root. Require `ok: true`, 18 skills, 18 lectures, 216 MC, 36 CR, 216 semantic reviews, 54 questions in each difficulty, 54 answers at each answer index, and zero errors.
6. Copy the complete extracted root without edits to the approved destination. Preserve UTF-8, LF line endings, filenames and bytes.
7. Run the verifier again in the repository destination. Stop on any mismatch.
8. Only if the central coordinator explicitly requests staging emission, run `node importer/emit-unit-modules.mjs .`. This must create only `staging/u22/s001.mjs` through `s018.mjs` plus `staging/u22/index.mjs`.
9. Run the verifier after emission and require `emittedModuleCount: 19`. Staging is generated output and must not be copied back into or added to the immutable ZIP.
10. Run repository tests requested by the central coordinator. Do not alter production manifests, default routes, compiled banks or legacy sources.
11. Produce a report containing HEAD before and after, copied file count, verifier JSON before and after emission, emitted module count, test commands and results, and `git status --short`.
12. Do not commit, push or create a pull request unless a later explicit central coordinator instruction separately authorizes those actions.

## Mandatory stop conditions

Stop without content repair if: HEAD differs; ZIP hash differs; any file hash differs; skill IDs/order differ; any count differs; a content hash fails; a figure or review reference is missing; `productionActivationAllowed` is true; legacy isolation flags differ; the package already contains staging; or any cross-unit collision is reported by the coordinator.
