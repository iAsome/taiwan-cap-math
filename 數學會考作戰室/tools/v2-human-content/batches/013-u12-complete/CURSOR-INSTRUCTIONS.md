# CENTRAL_COORDINATOR_APPROVAL_REQUIRED

EXPECTED_HEAD=__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__
TARGET_PATH=數學會考作戰室/tools/v2-human-content/batches/013-u12-complete/
PACKAGE_ID=math-v2-human-content-batch-013-u12-complete

## Authority and role

These instructions are intentionally inert until the central coordinator has reviewed the returned ZIP, supplied the exact expected Git HEAD, and explicitly approved ordered integration. Do not execute this package merely because it exists.

Cursor is implementation-only. It MUST NOT generate, rewrite, paraphrase, repair, expand, shorten, reorder, or infer any lecture, question, answer, distractor, explanation, rubric, semantic review, or drawing specification. If any mathematical record fails validation, stop and report the exact file, record ID, and validator message to the central coordinator. Do not auto-fix content.

## Preconditions

1. Obtain explicit central coordinator approval for Batch 013.
2. Replace only the placeholder value in `EXPECTED_HEAD` with the coordinator-supplied full commit SHA.
3. Confirm the active repository is exactly `iAsome/taiwan-cap-math` and the branch is exactly `chatgpt/math-v2-human-authoring-r1`.
4. Confirm `git status --short` is clean. Never discard unrelated work.
5. Confirm `git rev-parse HEAD` exactly equals the supplied `EXPECTED_HEAD`. If it differs, stop. Do not merge, rebase, reset, cherry-pick, or guess a new base.
6. Confirm the destination directory does not already contain another Batch 013 package. If it exists, compare hashes and stop for coordinator direction rather than overwriting.

## Controlled integration procedure

1. Extract the ZIP into a temporary directory outside the repository.
2. Confirm the extracted root is exactly `math-v2-human-content-batch-013-u12-complete/` and that it contains no `staging/` directory.
3. Run `node importer/verify-bundle.mjs` inside the clean extraction. Require JSON `status: "PASS"` and all reported counts to match the manifest.
4. Copy the complete immutable source directory to:
   `數學會考作戰室/tools/v2-human-content/batches/013-u12-complete/`
5. Run the verifier again from the repository copy before emitting anything.
6. Run `node importer/emit-unit-modules.mjs`. This may create only the package-local `staging/` directory and ten serialization modules plus one staging manifest.
7. Run `node importer/verify-bundle.mjs` again after emission. Require `status: "PASS"`.
8. Inspect `git diff --stat` and `git status --short`. Changes must be confined to the assigned Batch 013 destination. No U01–U11, U13–U23, production bank, runtime route, release manifest, old database, generator, or shared schema may change.
9. Return the exact verifier JSON, emitter JSON, file list, and Git diff summary to the central coordinator.
10. Commit or push only if the central coordinator separately authorizes that action and provides the required ordered-integration commit message. Do not create a pull request unless separately directed.

## Prohibited actions

- Do not activate U12 in production.
- Do not edit or delete the old database.
- Do not import legacy questions, lectures, reviews, or generator output.
- Do not run old automatic content generators.
- Do not alter locked skill IDs, topic IDs, order, titles, prerequisites, or counts.
- Do not regenerate hashes by changing content.
- Do not silently repair a failed item.
- Do not integrate another parallel unit in the same operation.
- Do not commit a `staging/` directory unless the central coordinator explicitly requests it.

## Failure reporting

On any failure, stop and report: current HEAD, expected HEAD, command, exit code, validator message, affected paths, and whether any working-tree files were changed. Preserve all evidence and make no corrective content edits.
