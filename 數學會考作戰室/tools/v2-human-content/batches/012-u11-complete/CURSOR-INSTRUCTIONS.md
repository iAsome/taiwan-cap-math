# CENTRAL_COORDINATOR_APPROVAL_REQUIRED

## Status

**DO NOT EXECUTE THESE INSTRUCTIONS UNTIL THE CENTRAL COORDINATOR HAS APPROVED THIS ZIP AND SUPPLIED THE EXPECTED HEAD.**

```text
EXPECTED_HEAD=__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__
TARGET_PATH=數學會考作戰室/tools/v2-human-content/batches/012-u11-complete/
```

## Purpose

Integrate the immutable, already-authored U11 package. Cursor is implementation-only. It must not create, rewrite, repair, paraphrase, expand, reorder or delete mathematical content.

## Preconditions

1. Confirm central-coordinator approval is recorded.
2. Replace the placeholder `EXPECTED_HEAD` with the exact coordinator-supplied commit SHA.
3. Confirm the repository is `iAsome/taiwan-cap-math` on branch `chatgpt/math-v2-human-authoring-r1`.
4. Confirm `git rev-parse HEAD` exactly equals `EXPECTED_HEAD`. Stop on mismatch.
5. Confirm the target batch directory does not already contain unreviewed or conflicting files.
6. Confirm no other unit directory will be edited.

## Immutable copy procedure

1. Extract the ZIP outside the repository.
2. Verify the ZIP SHA-256 against the coordinator report.
3. Run `node importer/verify-bundle.mjs` inside the clean extracted root. Require JSON status `PASS`.
4. Copy the complete extracted root to `數學會考作戰室/tools/v2-human-content/batches/012-u11-complete/` without altering line endings or JSON content.
5. Run `node importer/verify-bundle.mjs` again in the repository copy.
6. Run `node importer/emit-unit-modules.mjs`. This may create only the batch-local `staging/` directory.
7. Run `node importer/verify-bundle.mjs` a third time and require `emittedModuleCount: 4`.
8. Run the repository's approved authoring tests and duplicate scans. Do not use any automatic content generator.
9. Produce a report containing HEAD before and after, copied file list, all verifier JSON, emitted module list, test commands, and any discrepancy.

## Hard prohibitions

- Do not commit or push unless the central coordinator separately authorizes that action.
- Do not create a pull request.
- Do not edit U01–U10 or U12–U23.
- Do not edit production question banks, lecture banks, runtime routes or release manifests.
- Do not import legacy questions, lectures or semantic evidence.
- Do not run `數學會考作戰室/tools/author-v2-production-content.mjs`.
- Do not set production activation to true.
- Do not delete legacy content in this batch.
- Do not fix mathematical content locally. Report any failure to the central coordinator with exact file and record IDs.
