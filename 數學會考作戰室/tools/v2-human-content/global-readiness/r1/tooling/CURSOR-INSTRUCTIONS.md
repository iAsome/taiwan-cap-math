# CURSOR INSTRUCTIONS — GLOBAL AUDIT R2 AND PRODUCTION READINESS GATE R1

## Purpose

Verify the repaired U01–U23 human source, build a normalized read-only runtime preview, inventory the current generated V2 runtime and its references, and record a pre-activation readiness decision.

This task does not activate production, change the student route, merge branches, delete generated V2, or delete V1 rollback content.

## Preconditions

Repository:

`C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1`

Required branch:

`chatgpt/math-v2-human-authoring-r1`

Required HEAD:

`b79cc9ecbc91c001c308bb1c269d8945aacf8ee3`

Required latest subject:

`fix(math-v2): apply global repair wave 1b`

Require a clean working tree and local/remote synchronization. Require Wave 1A `PASS_WAVE_1A` and Wave 1B `PASS_WAVE_1B`.

## Copy boundary

Copy this package byte-for-byte to:

`數學會考作戰室/tools/v2-human-content/global-readiness/r1/tooling/`

Verify `KIT-SHA256.json` before execution.

## Exact execution

Set:

```powershell
$repo = "C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1"
$root = "$repo/數學會考作戰室/tools/v2-human-content/global-readiness/r1"
$tooling = "$root/tooling"
$evidence = "$root/evidence"
$preview = "$root/runtime-preview"
$inventory = "$root/retirement-inventory"
```

Run:

```powershell
node "$tooling/scripts/verify-evidence-chain.mjs" --repo "$repo" --output "$evidence"
node "$tooling/scripts/run-batch-verifiers-r2.mjs" --repo "$repo" --output "$evidence"
node "$tooling/scripts/run-global-audit-r2.mjs" --repo "$repo" --output "$evidence"
node "$tooling/scripts/build-human-runtime-preview.mjs" --repo "$repo" --output "$preview"
node "$tooling/scripts/validate-human-runtime-preview.mjs" --repo "$repo" --preview "$preview" --output "$evidence"
node "$tooling/scripts/inventory-generated-v2.mjs" --repo "$repo" --output "$inventory"
node "$tooling/scripts/validate-retirement-inventory.mjs" --repo "$repo" --inventory "$inventory" --output "$evidence"
node "$tooling/scripts/finalize-readiness-gate.mjs" --repo "$repo" --root "$root"
```

Require:

- `PASS_EVIDENCE_CHAIN`
- 24/24 batch verifiers
- `PASS_GLOBAL_AUDIT_R2`
- `PASS_RUNTIME_PREVIEW`
- `PASS_RETIREMENT_INVENTORY`
- `PASS_READINESS_GATE_R1`
- 23 units, 339 skills, 339 lectures, 4,068 MC, 678 constructed responses, 4,068 semantic reviews, 178 drawing specs and 178 SVG figures
- 22 retained number-swap groups and 0 unresolved duplicate groups
- preview-only flags remain true
- production activation, route change and old-database deletion remain false

## Allowed changes

Only:

`數學會考作戰室/tools/v2-human-content/global-readiness/r1/`

No batch source may change in this task.

## Prohibitions

Do not modify `數學會考作戰室/v2/`.
Do not modify `math-bootstrap.js`, `index.html`, `app.js`, V1 rollback files or generated V2 files.
Do not run `author-v2-production-content.mjs`.
Do not activate production.
Do not change the student route.
Do not delete or rename old generated V2.
Do not merge or create a pull request.
Do not weaken an audit, verifier or adjudication rule.

## Commit

After all gates pass and path boundaries are confirmed, stage only `global-readiness/r1/`.

Commit exactly:

`audit(math-v2): record global audit r2 readiness gate`

Push `chatgpt/math-v2-human-authoring-r1`.

## Required report

Return pre-state, archive/tooling hashes, all console JSON, preview manifest and content version, complete retirement inventory counts, loader analysis, generated paths, changed paths, commit SHA, push result, final clean status, and explicit confirmation that no production route or old content was changed or deleted.
