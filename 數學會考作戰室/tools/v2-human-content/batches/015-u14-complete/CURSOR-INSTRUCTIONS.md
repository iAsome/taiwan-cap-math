# CENTRAL_COORDINATOR_APPROVAL_REQUIRED

**DO NOT EXECUTE THESE INSTRUCTIONS UNTIL THE CENTRAL COORDINATOR HAS REVIEWED AND APPROVED THIS IMMUTABLE ZIP.**

```text
EXPECTED_HEAD=__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__
TARGET=數學會考作戰室/tools/v2-human-content/batches/015-u14-complete/
PACKAGE=math-v2-human-content-batch-015-u14-complete
```

## Cursor role

Cursor is implementation-only. Do not generate, paraphrase, repair, expand, or replace any mathematical lecture, question, solution, option analysis, rubric, semantic review, or drawing specification. If verification fails because of mathematical content, stop and return the exact failure to the central coordinator.

## Approved integration procedure

1. Confirm the central coordinator supplied an exact `EXPECTED_HEAD` and explicitly approved this batch.
2. Confirm the repository is `iAsome/taiwan-cap-math` on branch `chatgpt/math-v2-human-authoring-r1` and `git rev-parse HEAD` exactly equals `EXPECTED_HEAD`. Stop on mismatch.
3. Clean-extract the ZIP to a temporary directory. Reject path traversal, symlinks, extra top-level roots, or any `staging/` directory inside the delivered ZIP.
4. Run `node importer/verify-bundle.mjs` from the extracted root. Require JSON `status: PASS`.
5. Copy the extracted root byte-for-byte to `數學會考作戰室/tools/v2-human-content/batches/015-u14-complete/`. Do not touch U01–U13, U15–U23, production banks, old generators, compiled banks, routes, manifests, or release gates.
6. Run the verifier again at the repository destination.
7. Run `node importer/emit-unit-modules.mjs`; this may create authoring-only `staging/u14/` inside the destination.
8. Run the verifier a third time after emission.
9. Report file hashes, verifier JSON, emitted module count, repository diff, and confirmation that production paths were unchanged. Do not commit or push unless the central coordinator separately authorizes it after reviewing the report.

## Non-negotiable isolation

- `legacyContentImported=false`
- `legacySemanticEvidenceAccepted=false`
- `oldProductionRuntimeModified=false`
- `deleteLegacyNow=false`
- `finalRetirementRequired=true`
- `productionActivationAllowed=false`

Any attempt to generate new mathematics, use legacy content, activate production, or modify another unit is a hard stop.
