# Cursor Instructions — Math V2 Final Retirement and Release Superflow R1

## Purpose

Complete all remaining Math V2 work in one controlled superflow:

- promote Human content into a self-contained production runtime;
- remove generated V2, V1, preview and RC served runtimes;
- safely retire old browser-storage namespaces;
- pass Human-only Node, browser, content and repository-purity gates;
- produce three intentional commits;
- create the final release tag;
- merge through a PR when permissions allow;
- verify GitHub Pages.

Internal gates remain mandatory. Stop on the first failure.

## Required starting state

- Repository: `C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1`
- Branch: `chatgpt/math-v2-human-authoring-r1`
- HEAD: `eadecdc55e3a2c2d3c4ae75f480656c87f654c5b`
- Subject: `fix(math-v2): repair production text and pass stability gate r1`
- Local branch equals remote branch
- Clean worktree
- Stability status: `PASS_POST_CUTOVER_STABILITY_GATE_R1`
- Stability next stage: `OLD_RUNTIME_RETIREMENT_PACKAGE_R1`

## Install

Copy this kit byte-for-byte to:

`數學會考作戰室/tools/v2-human-content/final-superflow/r1/tooling/`

Verify all files against `KIT-SHA256.json`.

Set:

```powershell
$repo = "C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1"
$root = "$repo/數學會考作戰室/tools/v2-human-content/final-superflow/r1"
$tooling = "$root/tooling"
$tagScratch = "C:/Users/iAsom/Documents/math-v2-final-retirement-tag-rebuild-r1"
$abortArchive = "C:/Users/iAsom/Documents/math-v2-final-superflow-aborted-r1"
$externalEvidence = "C:/Users/iAsom/Documents/math-v2-final-release-external-evidence-r1"
```

Scratch and abort paths must not exist.

## Phase A — baseline, tag, build and dry-run

```powershell
node "$tooling/scripts/run-tooling-self-test.mjs"
node "$tooling/scripts/verify-superflow-baseline.mjs" --repo "$repo" --root "$root"
node "$tooling/scripts/create-pre-retirement-tag.mjs" --repo "$repo" --root "$root"
node "$tooling/scripts/build-human-only-payload.mjs" --repo "$repo" --root "$root"
node "$tooling/scripts/dry-run-retirement.mjs" --repo "$repo" --root "$root"
```

Require:

- `PASS_TOOLING_SELF_TEST`
- `PASS_FINAL_SUPERFLOW_BASELINE_R1`
- `CREATED_AND_PUSHED_PRE_RETIREMENT_TAG_R1`
- tag `math-v2-pre-old-runtime-retirement-r1` points exactly to starting HEAD
- `BUILT_HUMAN_ONLY_RETIREMENT_PAYLOAD_R1`
- 23 production unit JSON files
- 178 production SVG files
- production manifest, syllabus lock and content are self-contained under `human-runtime/`
- `PASS_OLD_RUNTIME_RETIREMENT_DRY_RUN_R1`
- no unclassified active reference to a retirement target

## Phase B — apply retirement and validate

```powershell
node "$tooling/scripts/apply-retirement.mjs" --repo "$repo" --root "$root"
node "$tooling/scripts/validate-human-only-node.mjs" --repo "$repo" --root "$root"
node "$tooling/scripts/run-content-integrity.mjs" --repo "$repo" --root "$root"
node "$tooling/scripts/run-human-only-browser-gate.mjs" --repo "$repo" --root "$root"
node "$tooling/scripts/verify-retirement-tag-rebuild.mjs" --repo "$repo" --root "$root" --scratch "$tagScratch"
node "$tooling/scripts/finalize-retirement-phase.mjs" --repo "$repo" --root "$root"
```

Require:

- `APPLIED_OLD_RUNTIME_RETIREMENT_R1`
- generated V2, V1 served runtime, old generator, preview route and RC route deleted
- Human-only loader applied
- Human production content promoted
- old localStorage namespaces retired only after migration and backup verification
- `PASS_HUMAN_ONLY_NODE_GATE_R1`
- counts 23 / 339 / 339 / 4,068 / 678 / 178
- 27 deterministic mock validations
- 23 deterministic unit quizzes
- `PASS_FINAL_CONTENT_INTEGRITY_R1`
- 24/24 batch verifiers
- Global Audit R2 pass
- `PASS_HUMAN_ONLY_BROWSER_GATE_R1`
- plain, `?generated=1`, and `?legacy=1` URLs all load the Human Runtime
- 178 SVG assets load from `human-runtime/figures/`
- old localStorage keys are removed and backup is preserved
- zero console/runtime/network errors
- `PASS_PRE_RETIREMENT_TAG_REBUILD_R1`
- `PASS_CONTROLLED_OLD_RUNTIME_RETIREMENT_R1`

On any failure before the first retirement commit, run:

```powershell
node "$tooling/scripts/abort-to-pre-retirement-tag.mjs" --repo "$repo" --root "$root" --archive "$abortArchive"
```

Then stop.

## Commit 1 — retirement

Stage the runtime changes, all deletions, and the final-superflow tree.

Commit exactly:

`chore(math-v2): retire generated and legacy runtimes r1`

Push normally.

Record the resulting commit SHA as `$retirementCommit`.

Do not amend or force-push.

## Phase C — clean-tree repository purity

After Commit 1, the tree must be clean and local must equal remote.

Run:

```powershell
node "$tooling/scripts/run-repository-purity-gate.mjs" --repo "$repo" --root "$root" --retirementCommit "$retirementCommit"
node "$tooling/scripts/finalize-purity-phase.mjs" --repo "$repo" --root "$root" --retirementCommit "$retirementCommit"
```

Require:

- `PASS_HUMAN_ONLY_REPOSITORY_PURITY_GATE_R1`
- no tracked file remains under any retired path
- no active served reference remains
- historical references are allowed only under retained human-content evidence/tooling
- loader is Human-only
- production config is self-contained
- production manifest is not preview content
- `PASS_HUMAN_ONLY_REPOSITORY_PURITY_PHASE_R1`

## Commit 2 — purity evidence

Stage only new purity evidence under:

`數學會考作戰室/tools/v2-human-content/final-superflow/r1/`

Commit exactly:

`test(math-v2): pass human-only repository purity gate r1`

Push normally.

Record the resulting commit SHA as `$purityCommit`.

## Phase D — final release gate

Run:

```powershell
node "$tooling/scripts/run-final-release-gate.mjs" --repo "$repo" --root "$root" --retirementCommit "$retirementCommit" --purityCommit "$purityCommit"
```

Require:

- `PASS_MATH_V2_FINAL_RETIREMENT_AND_RELEASE_SUPERFLOW_R1`
- Human Runtime only
- generated V2 deleted
- V1 served runtime deleted
- preview and RC routes deleted
- old localStorage namespaces retired
- counts exact
- 24/24 verifiers
- Global Audit R2 pass
- Node/browser/purity gates pass
- rollback tags unchanged
- merge allowed true

## Commit 3 — final release evidence

Stage only final release evidence under the final-superflow directory.

Commit exactly:

`release(math-v2): finalize human-authored math site r1`

Push normally.

Record the resulting commit SHA as `$releaseCommit`.

## Final release tag

```powershell
node "$tooling/scripts/create-release-tag.mjs" --repo "$repo" --root "$root" --releaseCommit "$releaseCommit" --output "$externalEvidence"
```

Require:

- `CREATED_AND_PUSHED_FINAL_RELEASE_TAG_R1`
- tag `math-v2-human-runtime-r1`
- tag target exactly `$releaseCommit`

## PR, merge and deployment

Confirm GitHub CLI authentication and repository permissions.

```powershell
node "$tooling/scripts/merge-and-verify-deployment.mjs" --repo "$repo" --root "$root" --releaseCommit "$releaseCommit" --output "$externalEvidence"
```

This must:

- discover the actual default branch;
- create or reuse the release PR;
- wait for configured checks;
- require mergeable state;
- merge without force-pushing;
- read the repository's actual GitHub Pages configuration.

Then run:

```powershell
node "$tooling/scripts/verify-pages-deployment.mjs" --output "$externalEvidence"
```

Require:

- `PASS_FINAL_PR_MERGE_R1`
- `PASS_GITHUB_PAGES_HUMAN_RUNTIME_DEPLOYMENT_R1`
- deployed page loads Human Runtime
- deployed counts show 23 units and 339 skills
- no deployment runtime/network errors

If branch protection requires an approval that the authenticated account cannot provide, do not bypass protection. Leave the validated PR open and report the exact blocker. All repository retirement and release work is still complete on the release-tagged branch.

## Deletion scope

The policy file is authoritative. It includes:

- generated V2 runtime and source;
- old generator;
- V1 served runtime;
- root old data/app files replaced by Human copies;
- preview route;
- RC route.

Do not delete:

- `human-runtime/`
- human-content batches
- authoring lock
- audit evidence
- official data
- shared UI utilities
- immutable Git tags

## Required report

Return:

1. Starting state and stability evidence
2. Archive and kit hashes
3. Pre-retirement tag evidence
4. Human-only payload build
5. Complete dry-run deletion inventory and bytes
6. Active reference scan
7. Retirement apply result
8. Promoted production content manifest and hashes
9. Node Human-only gate
10. 24-batch and Global Audit R2
11. Browser Human-only tests
12. Storage retirement and backup verification
13. Tag reconstruction
14. Retirement commit and push
15. Repository purity report
16. Purity commit and push
17. Final release gate
18. Final release commit and push
19. Final release tag
20. PR and merge result
21. GitHub Pages deployment result
22. Final clean Git status
23. Confirmation generated V2, V1, preview and RC served runtimes are deleted
24. Confirmation Human Runtime is the only served content runtime
25. Confirmation old browser-storage namespaces are deleted after backup
26. Confirmation Human batch source and audit evidence remain
27. Confirmation rollback tags remain immutable
