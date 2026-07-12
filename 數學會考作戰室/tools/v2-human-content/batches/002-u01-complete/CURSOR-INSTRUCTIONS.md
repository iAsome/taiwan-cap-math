# MATH-V2-HUMAN-CONTENT-BATCH-002-U01-COMPLETE

## Target repository

`C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1`

Expected branch:

`chatgpt/math-v2-human-authoring-r1`

Expected HEAD before this task:

`fb25fc5612f4d39559a75e570d3bebc2bf54246c`

## Role

You are implementation-only. Do not author, rewrite, shorten, expand, repair or reinterpret any mathematical content.

## Exact procedure

1. Confirm repository, branch, HEAD and clean `git status`.
2. Copy this entire immutable package byte-for-byte to:

   `數學會考作戰室/tools/v2-human-content/batches/002-u01-complete/`

3. Compare SHA-256 for every copied package file against `manifest/file-sha256.json`.
4. From the copied package directory run:

   `node importer/verify-bundle.mjs`

5. Run:

   `node importer/emit-unit-modules.mjs`

6. Run the verifier again after emission.
7. Confirm no path outside these roots changed:

   - `數學會考作戰室/tools/v2-human-content/batches/002-u01-complete/`

8. Confirm no production file under `數學會考作戰室/v2/` changed.
9. Confirm `數學會考作戰室/tools/author-v2-production-content.mjs` was not run or modified.
10. Stage only the copied Batch 002 directory.
11. Commit once with:

   `feat(math-v2): add human-authored U01 completion batch`

12. Push `chatgpt/math-v2-human-authoring-r1`.
13. Do not create a PR and do not merge.

## Stop conditions

Stop without committing if:

- branch or HEAD differs;
- working tree is not clean before copy;
- any source/destination hash differs;
- verification fails;
- any production path changes;
- any file outside the allowed Batch 002 directory is staged.

## Required report

Return complete command output and JSON including:

- pre/post branch, HEAD and git status;
- copied file count and byte-identical result;
- verifier result;
- emitted staging module count and SHA-256 list;
- figure count and figure-reference validation;
- commit SHA and pushed branch;
- all changed paths;
- confirmation that production content was not activated.
