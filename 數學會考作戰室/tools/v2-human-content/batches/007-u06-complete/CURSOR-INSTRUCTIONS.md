# CENTRAL_COORDINATOR_APPROVAL_REQUIRED

EXPECTED_HEAD=__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__

## Scope

This immutable package is approved for integration only after the central coordinator supplies and verifies the exact expected Git HEAD.

- Package: `math-v2-human-content-batch-007-u06-complete`
- Unit: `u06`
- Allowed destination:
  `數學會考作戰室/tools/v2-human-content/batches/007-u06-complete/`
- Authoring branch: `chatgpt/math-v2-human-authoring-r1`
- Production activation: **FORBIDDEN**
- Legacy deletion or modification: **FORBIDDEN**
- Mathematical generation or repair by Cursor: **FORBIDDEN**

Do not execute these instructions until the central coordinator explicitly approves this package and replaces the placeholder `EXPECTED_HEAD`.

## Why these controls are mandatory

Twenty unit packages are being authored in parallel. A mutable shared-branch assumption can overwrite another unit, invalidate the ordered integration baseline, or accidentally mix human-authored sources with the untrusted legacy banks. The expected-HEAD gate and immutable-copy procedure prevent those failures.

## Pre-integration checks

1. Confirm that the working repository is `iAsome/taiwan-cap-math`.
2. Confirm that the current branch is exactly `chatgpt/math-v2-human-authoring-r1`.
3. Obtain the approved 40-character commit SHA from the central coordinator.
4. Replace `__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__` locally with that SHA for the integration session only.
5. Run `git status --short` and stop if unrelated changes exist.
6. Run `git rev-parse HEAD` and compare the complete output with `EXPECTED_HEAD`.
7. Stop immediately on any mismatch. Do not rebase, merge, pull, reset, cherry-pick, or guess a newer acceptable HEAD.
8. Confirm the destination directory does not already contain a conflicting package.
9. Confirm the supplied ZIP SHA-256 matches the coordinator's acceptance report.
10. Extract the ZIP into a temporary directory outside the repository. Do not edit any source record.

## First verification on the clean extraction

From the extracted package root, run:

```bash
node importer/verify-bundle.mjs
```

The command must return JSON with:

- `status: "PASS"`
- `unitId: "u06"`
- `lockedSkillCount: 12`
- `lectureCount: 12`
- `mcQuestionCount: 144`
- `constructedResponseCount: 24`
- `semanticReviewCount: 144`
- `figureCount: 3`
- `stagingPresent: false`
- `productionActivationAllowed: false`

Stop if any value differs. Cursor must not repair a failed record, invent replacement text, change an answer, or weaken a validator. Return the exact failure to the central coordinator.

## Immutable repository copy

After the first verifier passes and approval remains valid:

1. Re-check `git rev-parse HEAD` against `EXPECTED_HEAD`.
2. Create only:
   `數學會考作戰室/tools/v2-human-content/batches/007-u06-complete/`
3. Copy every package file byte-for-byte into that destination.
4. Do not copy temporary extraction artifacts.
5. Do not include a pre-generated `staging/` directory from outside the package.
6. Do not edit U01-U05, U07-U23, production banks, runtime routes, old generators, semantic-review stores, or release gates.
7. Run the verifier again from the copied package root before emission.

## Deterministic staging emission

Only after the copied source passes unchanged:

```bash
node importer/emit-unit-modules.mjs
node importer/verify-bundle.mjs
```

The emitter may only serialize the already reviewed JSON and JSONL records. It must create exactly 12 skill modules under `staging/u06/` plus its module manifest. It must not generate mathematical prose, alter hashes, infer missing answers, import legacy records, or write outside this package directory.

The second verifier must report:

- `status: "PASS"`
- `stagingPresent: true`
- `stagingModuleCount: 12`
- `sourceAndStagingParityVerified: true`
- `productionActivationAllowed: false`

Stop and report any discrepancy without modifying content.

## Required repository safety scan

Before any commit, verify:

```bash
git status --short
git diff --name-only
```

Every changed path must be inside:

```text
數學會考作戰室/tools/v2-human-content/batches/007-u06-complete/
```

The following are prohibited:

- production question or lecture banks
- old compiled banks
- old automatic generators
- production routing or default UI activation
- U01-U05 or U07-U23 content
- deletion or migration of any legacy source
- broad formatting, dependency, lockfile, or build changes
- validator weakening
- answer or rubric repair by Cursor

## Commit and push policy

Do not commit, push, or open a pull request unless the central coordinator gives a separate explicit instruction after reviewing both verifier outputs and the path-only diff.

If later authorized, use one package-scoped commit only. Re-check the approved HEAD immediately before committing. Never force-push.

## Report back

Return to the central coordinator:

- actual pre-integration HEAD
- ZIP SHA-256
- first verifier JSON
- emitter JSON
- second verifier JSON
- exact changed-path list
- confirmation that production and legacy paths were untouched
- confirmation that no mathematical content was generated or repaired
- resulting commit SHA only if a commit was separately authorized
