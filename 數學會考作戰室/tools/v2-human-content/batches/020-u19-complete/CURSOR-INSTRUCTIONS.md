# CENTRAL_COORDINATOR_APPROVED_PACKAGE — SEQUENTIAL HEAD STILL REQUIRED

EXPECTED_HEAD=__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__

## Status

Do not execute these instructions until the central coordinator has accepted this immutable package and supplied the exact expected Git HEAD.

## Approved destination only

`數學會考作戰室/tools/v2-human-content/batches/020-u19-complete/`

## Integration rules

1. Verify the ZIP SHA-256 against the coordinator report.
2. Confirm the current branch and exact HEAD supplied by the coordinator. Stop on any mismatch.
3. Extract this package into the approved destination without editing mathematical content.
4. Run `node importer/verify-bundle.mjs` from the extracted package root.
5. Run `node importer/emit-unit-modules.mjs`; this may create package-local `staging/u19/` only after source validation passes.
6. Run `node importer/verify-bundle.mjs` again.
7. Do not activate production, delete legacy files, alter U01–U18 or U20–U23, create a PR, merge, or push unless the central coordinator gives a separate exact instruction.
8. Cursor is implementation-only. It must not generate, repair, paraphrase, or replace lectures, questions, answers, reviews, rubrics, figures, hashes, or manifests.


## Central repair requirement

Use only the external archive whose filename contains `central-approved-r1` and whose SHA-256 is supplied by the central coordinator. Do not use the originally uploaded U19 archive.

The post-emission verifier must report:

- `crossSkillNumberSwapDuplicatesRejected: true`
- `traditionalChineseAuthoredContentCheck: true`
- `centralCoordinatorRepairVerified: true`
- `legacyContentImported: false`
- `productionActivationAllowed: false`
