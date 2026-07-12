# Cursor Instructions — Controlled Production Cutover R1

## Purpose

Activate the Human Runtime as the real default student route under a strict fail-closed gate.

Generated V2 and V1 remain available as query rollbacks. No old runtime is deleted in this stage.

## Required starting state

- Repository: `C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1`
- Branch: `chatgpt/math-v2-human-authoring-r1`
- HEAD: `b52116364e145b564aaf394ef798dda9d2b7b2ec`
- Subject: `build(math-v2): prepare production cutover package r1`
- Clean and synchronized worktree
- Package status: `PASS_PRODUCTION_CUTOVER_PACKAGE_R1`
- Next stage: `CONTROLLED_PRODUCTION_CUTOVER_R1`

## Critical safety

This is the first real route change.

- Do not delete generated V2.
- Do not delete V1.
- Do not delete the old database.
- Do not modify human batch sources.
- Do not merge or create a pull request.
- Do not force-update or delete the pre-cutover tag.
- Stop and rollback on the first failed gate.

## Archive installation

Keep the extracted kit outside the repository initially.

Verify the archive SHA-256 and all files against `KIT-SHA256.json`.

Set:

```powershell
$repo = "C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1"
$externalTooling = "C:/Users/iAsom/Downloads/math-v2-controlled-production-cutover-r1"
$root = "$repo/數學會考作戰室/tools/v2-human-content/controlled-production-cutover/r1"
$tooling = "$root/tooling"
$evidence = "$root/evidence"
$rollbackScratch = "C:/Users/iAsom/Documents/math-v2-cutover-rollback-exercise-r1"
$abortArchive = "C:/Users/iAsom/Documents/math-v2-aborted-controlled-cutover-r1"
$packageRoot = "$repo/數學會考作戰室/tools/v2-human-content/production-cutover/r1/package"
```

The rollback scratch and abort archive paths must not exist.

## Step 1 — external tooling self-test

```powershell
node "$externalTooling/scripts/run-tooling-self-test.mjs"
```

Require `PASS_TOOLING_SELF_TEST`.

## Step 2 — create and push the immutable pre-cutover tag

Run from the external tooling before changing any repository file:

```powershell
node "$externalTooling/scripts/verify-and-create-precutover-tag.mjs" --repo "$repo" --output "C:/Users/iAsom/Documents/math-v2-cutover-tag-evidence-r1" --tooling "$externalTooling"
```

Require:

- `CREATED_AND_PUSHED_IMMUTABLE_PRECUTOVER_TAG_R1`;
- tag `math-v2-pre-human-cutover-r1`;
- tag target exactly `b52116364e145b564aaf394ef798dda9d2b7b2ec`;
- local and remote tag verified.

Do not continue if the tag already exists or points elsewhere.

## Step 3 — apply the exact committed staged payload

The repository must still be clean.

```powershell
node "$packageRoot/ops/apply-staged-cutover.mjs" "$repo" "$packageRoot"
```

Require `APPLIED_STAGED_HUMAN_PRODUCTION_CUTOVER`.

At this point Human Runtime is the working-tree default but is not committed yet.

## Step 4 — install this control kit and tag evidence

Copy the extracted kit byte-for-byte to:

`數學會考作戰室/tools/v2-human-content/controlled-production-cutover/r1/tooling/`

Copy the external tag report to:

`數學會考作戰室/tools/v2-human-content/controlled-production-cutover/r1/evidence/precutover-tag-report.json`

Verify copied tooling against `KIT-SHA256.json`.

## Step 5 — applied payload Node gate

```powershell
node "$tooling/scripts/verify-applied-cutover-node.mjs" --repo "$repo" --root "$root"
```

Require:

- `PASS_APPLIED_HUMAN_PRODUCTION_CUTOVER_NODE_R1`;
- exact payload hashes;
- 23 units;
- 339 skills and lectures;
- 4,068 MC;
- 678 CR;
- 178 figures;
- generated V2 rollback files still present;
- V1 rollback files still present;
- old-database deletion false.

## Step 6 — content integrity after route change

```powershell
node "$tooling/scripts/run-content-integrity-gate.mjs" --repo "$repo" --root "$root"
```

Require:

- `PASS_POST_CUTOVER_CONTENT_INTEGRITY_R1`;
- 24/24 batch verifiers pass;
- Global Audit R2 passes;
- unresolved duplicate groups 0.

## Step 7 — real-browser live working-tree gate

```powershell
node "$tooling/scripts/run-live-cutover-browser-gate.mjs" --repo "$repo" --root "$root"
```

Set `CHROME_PATH` or `EDGE_PATH` only when discovery requires it.

Require:

- `PASS_LIVE_HUMAN_PRODUCTION_BROWSER_GATE_R1`;
- zero failed tests;
- zero console errors;
- zero runtime exceptions;
- zero network errors;
- Human Runtime is the default route;
- content version exact;
- 23/339/339/4,068/678/178 counts;
- 25 MC + 2 CR, 80-minute mock;
- all 23 unit quizzes deterministic;
- production exam UI renders 27 questions;
- 390×844 mobile layout passes;
- `generated=1` rollback works;
- `legacy=1` rollback works;
- completion progress migration works;
- generated paper history is backed up;
- source localStorage keys are not deleted.

## Step 8 — exercise the actual rollback script in a detached worktree

```powershell
node "$tooling/scripts/exercise-rollback-script.mjs" --repo "$repo" --root "$root" --scratch "$rollbackScratch"
```

Require:

- `PASS_ACTUAL_ROLLBACK_SCRIPT_EXERCISE_R1`;
- staged Human loader applied in the scratch worktree;
- rollback script restores tag versions;
- scratch Human Runtime removed;
- scratch status clean;
- scratch worktree removed.

## Step 9 — finalize the gate

```powershell
node "$tooling/scripts/finalize-controlled-production-cutover.mjs" --repo "$repo" --root "$root"
```

Require:

- `PASS_CONTROLLED_PRODUCTION_CUTOVER_R1`;
- production activated true;
- student route changed true;
- generated V2 rollback available true;
- V1 rollback available true;
- old-database deletion false;
- merge allowed false;
- next stage `POST_CUTOVER_STABILITY_GATE_R1`.

## Failure procedure

On any failure after Step 3, do not commit.

Run:

```powershell
node "$tooling/scripts/abort-and-rollback.mjs" --repo "$repo" --root "$root" --archive "$abortArchive"
```

Require:

- route restored from the immutable tag;
- Human production runtime removed;
- repository clean;
- old databases untouched;
- tag preserved.

Then stop and report the exact failed gate.

## Allowed changed paths

Only:

- `數學會考作戰室/index.html`
- `數學會考作戰室/math-bootstrap.js`
- `數學會考作戰室/human-runtime/`
- `數學會考作戰室/tools/v2-human-content/controlled-production-cutover/r1/`

No other path may change.

## Commit and push

After every gate passes:

```powershell
git add -- "數學會考作戰室/index.html" "數學會考作戰室/math-bootstrap.js" "數學會考作戰室/human-runtime" "數學會考作戰室/tools/v2-human-content/controlled-production-cutover/r1"
git commit -m "release(math-v2): cut over to human runtime r1"
git push origin chatgpt/math-v2-human-authoring-r1
```

Do not amend.
Do not force-push.

## Required report

Return:

1. Pre-state and clean synchronization
2. Archive and tooling hashes
3. Tooling self-test
4. Local and remote pre-cutover tag evidence
5. Apply report
6. Applied payload Node validation
7. 24-batch verifier matrix
8. Global Audit R2 result
9. Browser executable and version
10. Complete live-browser tests
11. Human counts and 25+2 mock
12. All 23 unit quiz results
13. Storage migration result
14. Generated V2 rollback result
15. V1 rollback result
16. Console/runtime/network errors
17. Screenshots with hashes
18. Actual rollback-script exercise
19. Final summary and evidence manifest
20. Every changed path
21. Commit SHA and push
22. Remote tag verification after push
23. Final clean status
24. Confirmation that Human Runtime is now the default route
25. Confirmation that generated V2 and V1 remain available
26. Confirmation that no old runtime or database was deleted
27. Confirmation that no batch source changed
