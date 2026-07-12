# CENTRAL_COORDINATOR_APPROVAL_REQUIRED

EXPECTED_HEAD=__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__
TARGET_PATH=數學會考作戰室/tools/v2-human-content/batches/022-u21-complete/

## Status

Do not execute these instructions until the central coordinator has reviewed the ZIP, supplied the exact expected Git HEAD, and explicitly approved integration.

## Purpose

Integrate the immutable, independently reviewed U21 human-authoring package. Cursor is implementation-only. It must not generate, rewrite, paraphrase, repair, extend, or substitute any mathematical content.

## Mandatory procedure after approval

1. Confirm the current branch is `chatgpt/math-v2-human-authoring-r1`.
2. Confirm `git rev-parse HEAD` exactly equals the coordinator-supplied `EXPECTED_HEAD`. Stop on any mismatch.
3. Confirm the destination directory does not already contain unreviewed or conflicting files. Do not merge with an older U21 package.
4. Extract the package root exactly into `數學會考作戰室/tools/v2-human-content/batches/022-u21-complete/`.
5. Run `node importer/verify-bundle.mjs` from that batch root before creating staging. It must return `status: PASS`.
6. Run `node importer/emit-unit-modules.mjs`. This may create only the local `staging/` directory under the batch root.
7. Run `node importer/verify-bundle.mjs` again. It must return `status: PASS` and report 12 emitted modules.
8. Do not edit production question banks, lecture banks, runtime routes, default manifests, legacy generators, or old database files.
9. Do not delete legacy content. Do not activate U21. Do not commit or push unless the central coordinator separately approves the exact diff and integration order.
10. Return the two verifier outputs, emitter output, file diff, and any error verbatim to the central coordinator. Never auto-repair mathematical records.

## Non-negotiable isolation rules

- `legacyContentImported=false`
- `legacySemanticEvidenceAccepted=false`
- `oldProductionRuntimeModified=false`
- `deleteLegacyNow=false`
- `finalRetirementRequired=true`
- `productionActivationAllowed=false`

Any violation requires an immediate stop and a report to the central coordinator.
