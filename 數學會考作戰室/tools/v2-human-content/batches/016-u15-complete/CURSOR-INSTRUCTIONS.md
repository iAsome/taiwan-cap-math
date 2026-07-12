# CENTRAL_COORDINATOR_APPROVAL_REQUIRED

EXPECTED_HEAD=__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__
TARGET_PATH=數學會考作戰室/tools/v2-human-content/batches/016-u15-complete/

## Purpose

Integrate the already-authored immutable U15 source package. Cursor is implementation-only. It must not write, rewrite, expand, repair, paraphrase, or generate mathematical content.

## Preconditions

1. Do not execute these instructions until the central coordinator explicitly approves this exact ZIP SHA-256 and supplies the expected Git HEAD.
2. Confirm the current branch is `chatgpt/math-v2-human-authoring-r1`.
3. Confirm `git rev-parse HEAD` exactly equals the coordinator-supplied expected head. Abort on mismatch.
4. Confirm the destination does not contain an unreviewed parallel package. Do not overwrite another unit or U01–U03.

## Exact procedure after approval

1. Extract the root `math-v2-human-content-batch-016-u15-complete/` without modifying any file.
2. Verify the delivered ZIP SHA-256 against the coordinator-approved value.
3. Run `node importer/verify-bundle.mjs` from the extracted root. Require JSON `status: PASS`, `stagingPresent: false`, 13 skills, 156 MC, 26 CR, 156 reviews and 14 figures.
4. Copy the entire immutable root to `數學會考作戰室/tools/v2-human-content/batches/016-u15-complete/`. Do not copy any generated `staging/` directory.
5. From the copied destination, run `node importer/emit-unit-modules.mjs`. This may create local staging modules solely from reviewed JSON/JSONL source. Cursor must not edit emitted mathematics.
6. Run `node importer/verify-bundle.mjs` again. Require JSON `status: PASS` and `emittedModuleCount: 14`.
7. Run repository-wide tests and the central cross-unit duplicate scanner specified by the coordinator. If any content-level error appears, stop and report it; do not repair content autonomously.
8. Do not activate production routes, replace compiled banks, delete legacy files, merge to `main`, push, commit, or open a pull request unless the coordinator issues a separate explicit integration command.

## Absolute prohibitions

- No legacy question or lecture import.
- No use of `tools/author-v2-production-content.mjs`.
- No automatic content generation or semantic-review fabrication.
- No modification of U01–U14 or U16–U23.
- No production activation and no legacy deletion.

Return a machine-readable report containing verified HEAD, copied file count, verifier JSON before and after emission, test commands, failures, and a declaration that no mathematical source was changed.
