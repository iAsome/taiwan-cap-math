# CENTRAL_COORDINATOR_APPROVAL_REQUIRED

## Status

Do not execute these instructions unless the central coordinator has reviewed and explicitly approved this immutable package.

```text
EXPECTED_HEAD=__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__
TARGET_PATH=數學會考作戰室/tools/v2-human-content/batches/006-u05-complete/
PACKAGE_ID=math-v2-human-content-batch-006-u05-complete
```

## Purpose

Integrate the reviewed U05 human-authoring package as an isolated batch. Cursor is implementation-only. Cursor must not generate, rewrite, repair, paraphrase, extend or delete mathematical content.

## Mandatory preconditions

1. The central coordinator must replace the `EXPECTED_HEAD` placeholder with the exact approved Git HEAD.
2. Confirm the working repository is `iAsome/taiwan-cap-math`.
3. Confirm the current branch is `chatgpt/math-v2-human-authoring-r1`.
4. Confirm `git rev-parse HEAD` exactly equals the coordinator-supplied expected HEAD.
5. Confirm the working tree is clean.
6. Confirm the destination path does not contain another parallel unit package.
7. Stop immediately on any mismatch. Do not rebase, merge, pull, cherry-pick, reset or repair content autonomously.

## Safe integration procedure

1. Extract the ZIP into a temporary directory outside the repository.
2. Run:
   `node importer/verify-bundle.mjs`
3. Require a JSON result with `status: "PASS"`, `unitId: "u05"`, 12 skills, 12 lectures, 144 MC items, 24 constructed responses, 144 semantic reviews and 0 figures.
4. Confirm the extracted delivery has no `staging/` directory.
5. Run:
   `node importer/emit-unit-modules.mjs`
6. Run the verifier again and require `status: "PASS"` with `stagingVerified: true`.
7. Delete the generated temporary `staging/` directory before copying the immutable source package.
8. Copy the package root exactly to:
   `數學會考作戰室/tools/v2-human-content/batches/006-u05-complete/`
9. Re-run the verifier from the repository destination.
10. Confirm no files outside the target path changed.
11. Return a complete report to the central coordinator. Do not commit or push unless the coordinator gives a separate explicit ordered-integration instruction.

## Non-negotiable prohibitions

- Do not modify U01–U04 or U06–U23.
- Do not read old production questions or lectures as repair material.
- Do not run any automatic content generator.
- Do not alter answers, distractors, explanations, rubrics or reviews.
- Do not activate production routes or replace files under the production V2 runtime.
- Do not delete legacy content.
- Do not create a pull request.
- Do not commit or push during parallel authoring.
- Do not silently accept a different Git HEAD.

## Required Cursor report

Report the verified counts, both verifier JSON outputs, emitter JSON, exact copied file list, repository HEAD before and after, `git status --short`, and confirmation that only the approved target directory changed.
