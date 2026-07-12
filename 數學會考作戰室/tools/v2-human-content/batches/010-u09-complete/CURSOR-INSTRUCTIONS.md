# CENTRAL_COORDINATOR_APPROVAL_REQUIRED

`EXPECTED_HEAD=__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__`

## Purpose

Integrate the immutable human-authored U09 package only after the central coordinator supplies the real expected HEAD and explicitly approves this batch.

Target directory:

`數學會考作戰室/tools/v2-human-content/batches/010-u09-complete/`

## Non-negotiable rules

1. Do not execute these instructions before central coordinator approval.
2. Do not generate, paraphrase, expand, repair or reinterpret any mathematical content.
3. Do not read old production questions or lectures as replacement material.
4. Do not modify U01–U08, U10–U23 or another parallel batch.
5. Do not change production runtime routes, banks, manifests or defaults.
6. Do not delete legacy content.
7. Do not commit or push unless the central coordinator separately authorizes both actions.
8. Abort if the current HEAD does not exactly match the coordinator-supplied replacement for `EXPECTED_HEAD`.
9. Preserve UTF-8, file names, JSONL line boundaries and every SHA-256 field.
10. Never hand-edit a failed mathematical record. Return the exact verifier failure to the coordinator.

## Approved procedure

After approval, the central coordinator must replace the placeholder HEAD in the operational copy of these instructions. Then:

```bash
set -euo pipefail

EXPECTED_HEAD="<CENTRAL_COORDINATOR_SUPPLIED_HEAD>"
ACTUAL_HEAD="$(git rev-parse HEAD)"
test "$ACTUAL_HEAD" = "$EXPECTED_HEAD"

DEST="數學會考作戰室/tools/v2-human-content/batches/010-u09-complete"
test ! -e "$DEST"

# Copy the extracted immutable package root to $DEST without staging.
# Use a byte-preserving recursive copy. Do not merge into an existing directory.

node "$DEST/importer/verify-bundle.mjs" "$DEST"
node "$DEST/importer/emit-unit-modules.mjs" "$DEST"
node "$DEST/importer/verify-bundle.mjs" "$DEST"
```

## Required report to the coordinator

Return:

- actual HEAD and expected HEAD
- destination path
- first verifier JSON
- emitter JSON and emitted module count
- second verifier JSON
- `git status --short`
- confirmation that production activation remains false
- confirmation that no legacy path or other unit changed
- any failure exactly as printed, without repair attempts

`CENTRAL_COORDINATOR_APPROVAL_REQUIRED`
