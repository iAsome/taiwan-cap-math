# MATH-V2-HUMAN-CONTENT-BATCH-003-U02-COMPLETE

## Target repository

`C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1`

Expected branch:

`chatgpt/math-v2-human-authoring-r1`

Expected HEAD before execution:

`ad34650bfdba8613ab06bfb6d51c4924566d7707`

## Role

You are implementation-only. Do not author, rewrite, shorten, expand, repair, reinterpret, optimize, normalize, or regenerate any mathematical content.

## Exact procedure

1. Confirm the repository path, branch, expected HEAD, and a clean `git status`.
2. Copy this entire immutable package byte-for-byte to:

   `數學會考作戰室/tools/v2-human-content/batches/003-u02-complete/`

3. Compare every copied package source file against `manifest/file-sha256.json`.
4. From the copied package directory run:

   `node importer/verify-bundle.mjs`

5. Run:

   `node importer/emit-unit-modules.mjs`

6. Run the verifier again after staging emission:

   `node importer/verify-bundle.mjs`

7. Confirm exactly 15 staging modules and one staging manifest were emitted.
8. Confirm all three SVG geometry assertion sets pass.
9. Confirm no path outside:

   `數學會考作戰室/tools/v2-human-content/batches/003-u02-complete/`

   changed.

10. Confirm no path under `數學會考作戰室/v2/` changed.
11. Confirm `數學會考作戰室/tools/author-v2-production-content.mjs` was neither run nor modified.
12. Stage only:

   `數學會考作戰室/tools/v2-human-content/batches/003-u02-complete/`

13. Commit once with:

   `feat(math-v2): add human-authored U02 completion batch`

14. Push:

   `chatgpt/math-v2-human-authoring-r1`

## Prohibitions

Do not:

- edit any lecture, question, choice, answer, explanation, rubric, review record, drawing specification, SVG, ID, or hash;
- run `author-v2-production-content.mjs`;
- modify production banks, lecture banks, engine, locks, manifests, bootstrap, UI, or migration files;
- activate U02 in production;
- create a pull request;
- merge;
- reset, clean, restore, stash, amend, rebase, or force-push.

## Stop conditions

Stop without committing if:

- repository, branch, or HEAD differs;
- the working tree is not clean before copy;
- any copied source hash differs;
- either verifier run fails;
- emitted staging module count is not exactly 15;
- any SVG assertion fails;
- any file outside the allowed Batch 003 directory changes;
- any production path changes.

## Required report

Return the complete report containing:

1. Pre-execution repository, branch, HEAD, and `git status`
2. Copied source-file count
3. Byte-identical SHA-256 comparison result
4. First verifier JSON
5. All 15 emitted staging module paths and SHA-256 values
6. Staging manifest path and SHA-256
7. Second verifier JSON
8. Figure count, figure paths, and SVG geometry assertion result
9. Every created or modified path
10. Commit SHA and commit message
11. Pushed branch and remote result
12. Final `git status`
13. Explicit confirmation that production content was not activated
