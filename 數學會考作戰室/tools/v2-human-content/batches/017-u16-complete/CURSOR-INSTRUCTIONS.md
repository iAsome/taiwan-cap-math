# CENTRAL_COORDINATOR_APPROVAL_REQUIRED

**DO NOT RUN THESE INSTRUCTIONS UNTIL THE CENTRAL COORDINATOR HAS REVIEWED THE ZIP, SUPPLIED THE EXPECTED HEAD, AND EXPLICITLY APPROVED INTEGRATION.**

```text
EXPECTED_HEAD=__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__
TARGET=數學會考作戰室/tools/v2-human-content/batches/017-u16-complete/
PACKAGE=math-v2-human-content-batch-017-u16-complete
```

## Role and authority

You are the implementation operator only. The mathematical content in this package is immutable and is authored under `CHATGPT_HUMAN_AUTHORED_R1`.

You may:

- verify repository identity, branch, and exact HEAD;
- copy the approved package byte-for-byte into the assigned batch directory;
- run the supplied verifier and emitter;
- report failures with exact file paths and validator messages;
- commit and push only after the central coordinator explicitly authorizes those actions.

You must not:

- generate, rewrite, paraphrase, repair, expand, shorten, translate, or reorder any lecture, question, answer, explanation, rubric, semantic review, drawing specification, SVG, or content hash;
- borrow from legacy production content;
- activate production routes or manifests;
- edit U01–U15, U17–U23, or another parallel batch;
- delete legacy sources;
- run the old automatic authoring generator;
- silently relax a validator;
- infer an expected HEAD.

## Why these restrictions exist

Twenty unit packages were authored in parallel. A shared branch HEAD can change between packages, and the central coordinator must control integration order, cross-unit duplicate reconciliation, shared-schema changes, and final retirement of the old database. Editing content locally would invalidate individual human review and canonical hashes.

## Preflight after approval

1. Confirm the repository is exactly `iAsome/taiwan-cap-math`.
2. Confirm the current branch is exactly `chatgpt/math-v2-human-authoring-r1`.
3. Replace the placeholder in your local execution notes with the coordinator-supplied 40-character commit SHA. Do not modify the immutable package file merely to store that value.
4. Run:
   ```bash
   git rev-parse HEAD
   ```
   Stop if the output does not exactly equal the approved expected HEAD.
5. Confirm the destination does not already contain unrelated or partially integrated content.
6. Confirm the extracted source package has no `staging/` directory.

## Copy and first validation

Copy the extracted package directory without changing line endings, encoding, file names, or JSON formatting:

```text
math-v2-human-content-batch-017-u16-complete/
→ 數學會考作戰室/tools/v2-human-content/batches/017-u16-complete/
```

Then run from the copied package root:

```bash
node importer/verify-bundle.mjs
```

The command must emit JSON with `status: "PASS"`, 18 skills, 18 lectures, 216 MC questions, 36 constructed responses, 216 semantic reviews, 18 figures, balanced difficulty totals, balanced answer-index totals, and `productionActivationAllowed: false`.

If validation fails, stop. Do not repair content. Return the complete stdout/stderr, current HEAD, and affected paths to the central coordinator.

## Deterministic emission and second validation

Only after the first validation passes:

```bash
node importer/emit-unit-modules.mjs
node importer/verify-bundle.mjs --expect-staging
```

The emitter must create exactly 19 modules under `staging/u16/`: 18 skill modules and one index module. It serializes reviewed source; it is not an authoring generator.

The second verifier must report `stagingVerified: true` and `emittedModuleCount: 19`.

## Repository safety checks

Before any commit:

- verify that the diff is confined to `數學會考作戰室/tools/v2-human-content/batches/017-u16-complete/`;
- verify no production bank, runtime route, default UI path, legacy generator, U01–U15, or U17–U23 file changed;
- verify all `contentAuthority` markers remain exact;
- verify `manifest/legacy-content-isolation.json` still forbids activation and deletion;
- re-run both verifier modes;
- give the central coordinator the diff summary and await explicit commit authorization.

## Commit and push

Do not commit or push under this package instruction alone. The central coordinator controls the shared branch and may require rebasing or a different integration order. When authorization is later given, use the exact commit message supplied by the coordinator and do not open a pull request unless separately instructed.

## Required implementation report

Return:

1. repository and branch;
2. approved expected HEAD and observed HEAD;
3. destination path;
4. first verifier JSON;
5. emitter JSON and module count;
6. second verifier JSON;
7. `git status --short`;
8. changed-file scope;
9. explicit confirmation that no mathematical content was edited;
10. explicit confirmation that production and legacy sources were not modified;
11. commit and push status, or `NOT AUTHORIZED`.
