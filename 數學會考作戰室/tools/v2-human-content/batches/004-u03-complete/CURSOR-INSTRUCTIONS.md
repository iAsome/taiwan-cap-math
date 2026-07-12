# MATH-V2-HUMAN-CONTENT-BATCH-004-U03-COMPLETE

## Target repository

`C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1`

Expected branch:

`chatgpt/math-v2-human-authoring-r1`

Expected HEAD before this task:

`91e2211fe846e80d9e2a11ce5fb2850913a14235`

## Role

You are implementation-only.

Do not author, rewrite, shorten, expand, repair, reinterpret, optimize, normalize, regenerate, combine, or migrate any mathematical content.

Do not use existing production questions, lectures, semantic reviews, or compiled banks to fill or alter this package.

## Exact procedure

1. Confirm the repository path, branch, expected HEAD, and a clean `git status`.

2. Copy this entire immutable package byte-for-byte to:

   `數學會考作戰室/tools/v2-human-content/batches/004-u03-complete/`

3. Compare every copied package source file against:

   `manifest/file-sha256.json`

4. From the copied package directory run:

   `node importer/verify-bundle.mjs`

5. Run:

   `node importer/emit-unit-modules.mjs`

6. Run the verifier again:

   `node importer/verify-bundle.mjs`

7. Confirm exactly 15 staging modules were emitted.

8. Confirm the staging manifest exists:

   `staging/u03-batch-004-staging-manifest.json`

9. Confirm all three SVG geometry assertion sets pass.

10. Confirm every content record has:

    `contentAuthority: CHATGPT_HUMAN_AUTHORED_R1`

11. Confirm `manifest/legacy-content-isolation.json` reports:

    - `legacyContentImported: false`
    - `legacySemanticEvidenceAccepted: false`
    - `oldProductionRuntimeModified: false`
    - `finalRetirementRequired: true`

12. Confirm no path outside:

    `數學會考作戰室/tools/v2-human-content/batches/004-u03-complete/`

    changed.

13. Confirm no path under:

    `數學會考作戰室/v2/`

    changed.

14. Confirm the following file was neither run nor modified:

    `數學會考作戰室/tools/author-v2-production-content.mjs`

15. Stage only:

    `數學會考作戰室/tools/v2-human-content/batches/004-u03-complete/`

16. Commit once with exactly:

    `feat(math-v2): add human-authored U03 completion batch`

17. Push:

    `chatgpt/math-v2-human-authoring-r1`

## Old-database rule

Do not delete the old database during this batch.

Do not copy any old question, lecture, review or compiled bank into this batch.

The old generated database remains isolated only until all 23 human-authored units are complete. Final integration must delete the legacy families listed in:

`manifest/legacy-content-isolation.json`

and build the runtime exclusively from `CHATGPT_HUMAN_AUTHORED_R1` sources.

Stable IDs are final replacement keys. They do not permit old and new records to coexist in the final runtime.

## Prohibitions

Do not:

- edit any lecture, question, choice, answer, explanation, rubric, review record, drawing specification, SVG, ID, authority marker, retirement rule, or hash;
- run `author-v2-production-content.mjs`;
- modify production banks, lecture banks, engine, locks, manifests, bootstrap, UI, or migration files;
- activate U03 in production;
- delete the old database now;
- combine old and new content;
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
- any content authority marker is missing or different;
- the legacy isolation contract fails;
- any file outside the allowed Batch 004 directory changes;
- any production path changes;
- any old content is copied into the new batch.

## Required report

Return the complete report containing:

1. Pre-execution repository, branch, HEAD, and `git status`
2. Copied source-file count
3. Byte-identical SHA-256 comparison result
4. First verifier JSON
5. All 15 emitted staging-module paths and SHA-256 values
6. Staging-manifest path and SHA-256
7. Second verifier JSON
8. Figure count, all figure paths, and SVG assertion result
9. Content-authority validation result
10. Legacy-isolation validation result
11. Every created or modified path
12. Commit SHA and commit message
13. Pushed branch and remote result
14. Final `git status`
15. Explicit confirmation that production content was not activated
16. Explicit confirmation that old content was not imported, combined, deleted, or modified
