# Cursor Instructions — Controlled Human Runtime Cutover Rehearsal R1

## Purpose

Rehearse the complete loader cutover and rollback sequence in a detached temporary Git worktree.

The real repository student route must remain unchanged.

## Required starting state

- Repository: `C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1`
- Branch: `chatgpt/math-v2-human-authoring-r1`
- HEAD: `3fc899d2fb343b3a8e6dd9f8ba9c7be8e1edb7a0`
- Subject: `feat(math-v2): build human runtime release candidate r1`
- Working tree: completely clean
- Prior status: `PASS_HUMAN_RUNTIME_RELEASE_CANDIDATE_R1`
- Prior next stage: `CONTROLLED_HUMAN_RUNTIME_CUTOVER_REHEARSAL_R1`

## Safety rules

Do not modify the real:

- `數學會考作戰室/index.html`
- `數學會考作戰室/math-bootstrap.js`
- generated V2
- V1 rollback files
- human batch sources
- Human RC files

Do not activate production.
Do not delete any old database.
Do not create a tag yet.
Do not merge or open a pull request.

The loader payload may be written only inside the detached scratch worktree.

## Installation

Copy this extracted kit byte-for-byte to:

`數學會考作戰室/tools/v2-human-content/cutover-rehearsal/r1/tooling/`

Verify every tooling file against `KIT-SHA256.json`.

Set:

```powershell
$repo = "C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1"
$root = "$repo/數學會考作戰室/tools/v2-human-content/cutover-rehearsal/r1"
$tooling = "$root/tooling"
$scratch = "C:/Users/iAsom/Documents/math-v2-controlled-cutover-rehearsal-r1-worktree"
```

The scratch path must not exist before execution.

## Step 1 — tooling self-test

```powershell
node "$tooling/scripts/run-tooling-self-test.mjs"
```

Require `PASS_TOOLING_SELF_TEST`.

## Step 2 — prepare detached worktree

```powershell
node "$tooling/scripts/prepare-cutover-rehearsal.mjs" --repo "$repo" --root "$root" --scratch "$scratch"
```

Require:

- `PREPARED_DETACHED_CUTOVER_REHEARSAL_WORKTREE`
- scratch HEAD equals required HEAD
- scratch clean
- main protected baseline recorded
- production route changed false
- deletion false

## Step 3 — real-browser cutover and rollback rehearsal

```powershell
node "$tooling/scripts/run-cutover-rehearsal-browser.mjs" --repo "$repo" --root "$root" --scratch "$scratch"
```

Use local Chrome or Edge. Set `CHROME_PATH` or `EDGE_PATH` only when discovery requires it.

Require:

- `PASS_CONTROLLED_CUTOVER_REHEARSAL_BROWSER_R1`
- all seven required phases present
- zero failed tests
- zero console errors
- zero runtime exceptions
- zero network errors
- generated V2 baseline works
- V1 baseline works
- Human Runtime works as temporary default
- Human content version matches exactly
- Human counts are 23 units, 339 skills, 4,068 MC, 678 CR, 178 figures
- Human mock is 25 MC + 2 CR, 80 minutes
- temporary `generated=1` rollback works
- temporary `legacy=1` rollback works
- original loader bytes restored
- restored generated V2 default works
- restored V1 rollback works
- scratch worktree returns to clean status

## Step 4 — finalize and remove scratch worktree

```powershell
node "$tooling/scripts/finalize-cutover-rehearsal.mjs" --repo "$repo" --root "$root" --scratch "$scratch"
```

Require:

- `PASS_CONTROLLED_HUMAN_RUNTIME_CUTOVER_REHEARSAL_R1`
- protected main paths unchanged
- temporary worktree removed
- production activation false
- student route change false
- old-database deletion false
- merge allowed false
- next stage `PRODUCTION_CUTOVER_PACKAGE_R1`

## Allowed real-repository changed path

Only:

`數學會考作戰室/tools/v2-human-content/cutover-rehearsal/r1/`

No other real-repository path may change.

## Commit

Stage only the allowed path.

Commit once with exactly:

`test(math-v2): rehearse controlled human runtime cutover r1`

Push to:

`chatgpt/math-v2-human-authoring-r1`

## Required report

Return:

1. Pre-execution branch, HEAD, subject, remote sync, clean status
2. Archive and tooling SHA-256 verification
3. Tooling self-test JSON
4. Prepare-worktree JSON
5. Browser executable and version
6. All seven phase results
7. Complete browser test list
8. Human Runtime count and mock-contract results
9. Generated V2 and V1 baseline results
10. Temporary generated V2 and V1 rollback results
11. Restored generated V2 and V1 results
12. Console, runtime, network and HTTP errors
13. Screenshot paths, bytes and SHA-256
14. Final summary
15. Evidence SHA-256 manifest
16. Confirmation that temporary worktree was removed
17. Every changed path
18. Commit SHA and push result
19. Final clean Git status
20. Confirmation that the real `index.html` and `math-bootstrap.js` were unchanged
21. Confirmation that generated V2 and V1 were not modified or deleted
22. Confirmation that production was not activated
23. Confirmation that no old database was deleted
