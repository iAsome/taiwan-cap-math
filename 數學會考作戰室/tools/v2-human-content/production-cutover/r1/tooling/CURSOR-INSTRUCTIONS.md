# Cursor Instructions — Production Cutover Package R1

## Purpose

Build and validate the exact production cutover payload without applying it to the real student route.

## Required starting state

- Branch: `chatgpt/math-v2-human-authoring-r1`
- HEAD: `a0e7cf60310aa80b5ca03ed4bc243a2c7f76228c`
- Subject: `test(math-v2): rehearse controlled human runtime cutover r1`
- Clean and synchronized worktree
- Prior gate: `PASS_CONTROLLED_HUMAN_RUNTIME_CUTOVER_REHEARSAL_R1`
- Prior next stage: `PRODUCTION_CUTOVER_PACKAGE_R1`

## Install

Copy this kit byte-for-byte to:

`數學會考作戰室/tools/v2-human-content/production-cutover/r1/tooling/`

Verify all files against `KIT-SHA256.json`.

Set:

```powershell
$repo = "C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1"
$root = "$repo/數學會考作戰室/tools/v2-human-content/production-cutover/r1"
$tooling = "$root/tooling"
$scratch = "C:/Users/iAsom/Documents/math-v2-production-cutover-package-r1-worktree"
```

The scratch path must not exist.

## Execute

```powershell
node "$tooling/scripts/run-tooling-self-test.mjs"
node "$tooling/scripts/verify-prior-gates.mjs" --repo "$repo" --root "$root"
node "$tooling/scripts/build-production-cutover-package.mjs" --repo "$repo" --root "$root"
node "$tooling/scripts/validate-production-cutover-package-node.mjs" --repo "$repo" --root "$root"
node "$tooling/scripts/validate-production-cutover-package-browser.mjs" --repo "$repo" --root "$root" --scratch "$scratch"
node "$tooling/scripts/finalize-production-cutover-package.mjs" --repo "$repo" --root "$root"
```

Require these statuses:

- `PASS_TOOLING_SELF_TEST`
- `PASS_PRODUCTION_CUTOVER_EVIDENCE_CHAIN_R1`
- `BUILT_PRODUCTION_CUTOVER_PACKAGE_R1`
- `PASS_PRODUCTION_CUTOVER_PACKAGE_NODE_VALIDATION_R1`
- `PASS_PRODUCTION_CUTOVER_PACKAGE_BROWSER_VALIDATION_R1`
- `PASS_PRODUCTION_CUTOVER_PACKAGE_R1`

Browser validation must prove:

- Human Runtime is the staged default.
- Counts are 23/339/339/4068/678/178.
- Mock is 25 MC + 2 CR for 80 minutes.
- `generated=1` rollback works.
- `legacy=1` rollback works.
- storage migration merges completion progress.
- generated paper history is archived, not injected into incompatible Human history.
- zero console, runtime and network errors.
- detached scratch worktree is removed.

## Safety

Only this real-repository path may change:

`數學會考作戰室/tools/v2-human-content/production-cutover/r1/`

Do not modify the live `index.html`, `math-bootstrap.js`, generated V2, V1, Human RC, Human batches, or production route.

Do not create the pre-cutover tag in this stage.
Do not apply `package/ops/apply-staged-cutover.mjs`.
Do not run rollback.
Do not delete old data.
Do not merge or create a pull request.

## Commit

Stage only the allowed path.

Commit once:

`build(math-v2): prepare production cutover package r1`

Push the authoring branch.

## Required report

Return:

1. Pre-state and remote synchronization
2. Archive and tooling hashes
3. Tooling self-test
4. Evidence-chain result
5. Package build result
6. Exact staged payload file list and hashes
7. Node validation
8. Browser executable/version
9. Human default test
10. Storage migration test
11. Generated V2 rollback test
12. V1 rollback test
13. Browser errors
14. Retirement manifest summary
15. Tag plan
16. Final summary
17. Evidence manifest
18. Scratch removal confirmation
19. Changed paths
20. Commit and push
21. Final clean status
22. Confirmation live routes and old databases were untouched
