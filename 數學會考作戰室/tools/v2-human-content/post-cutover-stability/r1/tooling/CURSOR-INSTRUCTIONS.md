# Cursor Instructions — Post-Cutover Stability Repair and Gate R1

## Purpose

Repair confirmed production-visible text corruption and RC labels, then independently validate the Human Runtime after the real cutover.

Generated V2 and V1 must remain available. No old runtime is deleted.

## Required starting state

- Branch: `chatgpt/math-v2-human-authoring-r1`
- HEAD: `915832b69b33a29afe33ffbdface0f3af39d5eaf`
- Subject: `release(math-v2): cut over to human runtime r1`
- Clean and synchronized worktree
- Cutover status: `PASS_CONTROLLED_PRODUCTION_CUTOVER_R1`
- Next stage: `POST_CUTOVER_STABILITY_GATE_R1`
- Pre-cutover tag unchanged

## Install

Copy this kit byte-for-byte to:

`數學會考作戰室/tools/v2-human-content/post-cutover-stability/r1/tooling/`

Verify every file against `KIT-SHA256.json`.

Set:

```powershell
$repo = "C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1"
$root = "$repo/數學會考作戰室/tools/v2-human-content/post-cutover-stability/r1"
$tooling = "$root/tooling"
$tagScratch = "C:/Users/iAsom/Documents/math-v2-precutover-tag-rebuild-r1"
$abortArchive = "C:/Users/iAsom/Documents/math-v2-aborted-stability-r1"
```

The scratch and abort paths must not exist.

## Execute

```powershell
node "$tooling/scripts/run-tooling-self-test.mjs"
node "$tooling/scripts/verify-stability-baseline.mjs" --repo "$repo" --root "$root"
node "$tooling/scripts/apply-production-text-repair.mjs" --repo "$repo" --root "$root"
node "$tooling/scripts/run-runtime-stability-node.mjs" --repo "$repo" --root "$root"
node "$tooling/scripts/run-content-integrity-rerun.mjs" --repo "$repo" --root "$root"
node "$tooling/scripts/run-browser-stability-gate.mjs" --repo "$repo" --root "$root"
node "$tooling/scripts/verify-precutover-tag-rebuild.mjs" --repo "$repo" --root "$root" --scratch "$tagScratch"
node "$tooling/scripts/finalize-post-cutover-stability.mjs" --repo "$repo" --root "$root"
```

Require:

- `PASS_TOOLING_SELF_TEST`
- `PASS_POST_CUTOVER_STABILITY_BASELINE_R1`
- `APPLIED_PRODUCTION_RUNTIME_TEXT_AND_IDENTITY_REPAIR_R1`
- `PASS_HUMAN_RUNTIME_NODE_STABILITY_R1`
- `PASS_STABILITY_CONTENT_INTEGRITY_RERUN_R1`
- `PASS_POST_CUTOVER_BROWSER_STABILITY_R1`
- `PASS_PRECUTOVER_TAG_CHECKOUT_AND_REBUILD_R1`
- `PASS_POST_CUTOVER_STABILITY_GATE_R1`

The repair script is locked to exact pre-repair Git blob IDs and exact occurrence counts.

Node stability must validate:

- 23 units
- 339 skills and lectures
- 4,068 MC
- 678 CR
- 178 figures
- 48 deterministic mock validations
- 184 deterministic unit-quiz validations
- 339 correction-drill validations
- saved-paper version rejection
- no corrupted or RC text in adapted runtime output

Browser stability must validate:

- Human Runtime remains default
- generated V2 rollback works
- V1 rollback works
- migration first run and three idempotent reloads
- all 23 quizzes
- all 178 SVG files
- all 23 handbook units and 339 lecture cards
- no corrupted or RC text visible
- exam history save
- saved-paper review
- correction drill and correction persistence
- desktop and 390×844 mobile layout
- accessibility
- zero console, runtime and network errors

Tag rebuild must prove that `math-v2-pre-human-cutover-r1` still checks out and runs the original generated V2 default plus V1 rollback.

## Failure

If any gate fails after repair, do not commit.

Run:

```powershell
node "$tooling/scripts/abort-stability-repair.mjs" --repo "$repo" --root "$root" --archive "$abortArchive"
```

This restores the three repaired runtime files to the existing cutover commit. It does not roll back the Human production cutover.

## Allowed changed paths

Only:

- `數學會考作戰室/human-runtime/engine.mjs`
- `數學會考作戰室/human-runtime/bootstrap.mjs`
- `數學會考作戰室/human-runtime/app-human.js`
- `數學會考作戰室/tools/v2-human-content/post-cutover-stability/r1/`

Do not modify or delete generated V2, V1, human batches, the loader, index, storage migration, or the pre-cutover tag.

## Commit

After all gates pass:

```powershell
git add -- "數學會考作戰室/human-runtime/engine.mjs" "數學會考作戰室/human-runtime/bootstrap.mjs" "數學會考作戰室/human-runtime/app-human.js" "數學會考作戰室/tools/v2-human-content/post-cutover-stability/r1"
git commit -m "fix(math-v2): repair production text and pass stability gate r1"
git push origin chatgpt/math-v2-human-authoring-r1
```

Do not amend or force-push.

## Report

Return:

1. Pre-state and remote synchronization
2. Archive and tooling hashes
3. Self-test
4. Baseline and Git blob evidence
5. Exact text/identity repair report
6. Post-repair file hashes
7. Node stability report
8. 48 mock results summary
9. 184 unit-quiz results summary
10. 339 correction-drill results summary
11. 24-batch verifier matrix
12. Global Audit R2
13. Browser and version
14. Browser test list
15. Migration and reload idempotence
16. 23 quizzes and 23 handbook units
17. 178 SVG decode
18. Paper history, review and correction drill
19. Mobile/accessibility
20. Error lists and screenshots
21. Tag checkout/rebuild result
22. Final summary and evidence manifest
23. Changed paths
24. Commit and normal push
25. Final clean status
26. Confirmation Human remains default
27. Confirmation generated V2 and V1 remain available
28. Confirmation no old runtime/database was deleted
29. Confirmation no batch source changed
