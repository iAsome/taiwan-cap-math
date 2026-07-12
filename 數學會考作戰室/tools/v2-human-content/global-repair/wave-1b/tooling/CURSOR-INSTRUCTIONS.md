# CURSOR INSTRUCTIONS — MATH V2 GLOBAL REPAIR WAVE 1B R1

## Purpose

Apply the exact 12 centrally authored question replacements and record the human adjudication of the remaining 22 number-swap candidate groups.

Cursor is implementation-only. It must not invent, rewrite, remove, expand or replace any mathematical content beyond the immutable operations encoded in this package.

## Repository preconditions

Repository:

`C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1`

Required branch:

`chatgpt/math-v2-human-authoring-r1`

Required HEAD:

`1dfe2624a092189506352cb133f6dd0a92cc1fee`

Required latest commit subject:

`fix(math-v2): apply global repair wave 1a`

Before execution require:

- clean `git status --short --untracked-files=all`;
- local HEAD equals `origin/chatgpt/math-v2-human-authoring-r1`;
- Wave 1A final evidence exists and reports `PASS_WAVE_1A`;
- Wave 1A post-audit duplicate-candidate file exists and has SHA-256 `c4b9878c2099deee6c47d00b402ae9dffb8761177b4c7eeaeb4afdd82dcc4ef6`;
- `global-repair/wave-1b/` does not already exist.

Stop if any precondition differs.

## Tooling copy

Copy this extracted package byte-for-byte to:

`數學會考作戰室/tools/v2-human-content/global-repair/wave-1b/tooling/`

Verify every copied tooling file against `KIT-SHA256.json`.

## Exact execution

Set:

```powershell
$repo = "C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1"
$wave = "$repo/數學會考作戰室/tools/v2-human-content/global-repair/wave-1b"
$tooling = "$wave/tooling"
$evidence = "$wave/evidence"
```

### 1. Apply the exact central replacements

```powershell
node "$tooling/scripts/apply-global-repair-wave-1b.mjs" --repo "$repo" --evidence "$evidence"
```

Require:

- status `REPAIR_SOURCE_APPLIED_STAGING_NOT_YET_EMITTED`;
- replacement count 12;
- affected batches exactly:
  - `003-u02-complete`
  - `009-u08-complete`
  - `011-u10-complete`
  - `018-u17-complete`
  - `024-u23-complete`
- retained number-swap group count 22;
- production activation false.

The script must stop if any original question text, answer index, content authority or candidate-source hash differs.

### 2. Emit and verify the five affected batches

```powershell
node "$tooling/scripts/emit-and-verify-affected.mjs" --repo "$repo" --evidence "$evidence"
```

Require:

- status `PASS`;
- expected batch count 5;
- completed batch count 5;
- failed list empty.

### 3. Run all 24 batch verifiers

```powershell
node "$tooling/scripts/run-batch-verifiers-fixed.mjs" --repo "$repo" --evidence "$evidence"
```

Require:

- status `PASS`;
- batch count 24;
- passed 24;
- failed list empty;
- output file `batch-verifier-matrix-wave-1b.json`.

### 4. Run the global audit after repair

```powershell
node "$repo/數學會考作戰室/tools/v2-human-content/global-audit/r1/tooling/scripts/run-global-audit.mjs" --repo "$repo" --output "$evidence/post-audit"
```

Require:

- status `PASS_GLOBAL_STRUCTURE`;
- 339 skills and lectures;
- 4,068 MC questions;
- 678 constructed responses;
- 4,068 semantic reviews;
- all critical blocker counts zero;
- exact MC prompt groups 0;
- cross-unit prompt-skeleton groups 0;
- number-swap candidate groups 22;
- exact constructed-response groups 0;
- production activation false.

The remaining 22 raw number-swap groups are not unresolved defects. They require the exact human decisions encoded in `duplicate-adjudication-ledger.json`.

### 5. Verify duplicate adjudication

```powershell
node "$tooling/scripts/adjudicate-remaining-duplicates.mjs" --repo "$repo" --evidence "$evidence"
```

Require:

- status `PASS_DUPLICATE_ADJUDICATION`;
- retained group count 22;
- unresolved group count 0.

Do not modify the ledger or suppress an unexpected candidate.

### 6. Finalize evidence

```powershell
node "$tooling/scripts/finalize-wave-1b-evidence.mjs" --repo "$repo" --evidence "$evidence"
```

Require:

`PASS_WAVE_1B`

Also require:

- replacement count 12;
- affected batch count 5;
- all 24 batch verifiers passed;
- global audit status `PASS_GLOBAL_STRUCTURE`;
- unresolved duplicate groups 0;
- production activation false;
- old database deletion false.

## Path-boundary review

Run:

```powershell
git status --short
git diff --check
git diff --name-only
```

Allowed modified batch paths only:

- `數學會考作戰室/tools/v2-human-content/batches/003-u02-complete/`
- `數學會考作戰室/tools/v2-human-content/batches/009-u08-complete/`
- `數學會考作戰室/tools/v2-human-content/batches/011-u10-complete/`
- `數學會考作戰室/tools/v2-human-content/batches/018-u17-complete/`
- `數學會考作戰室/tools/v2-human-content/batches/024-u23-complete/`
- `數學會考作戰室/tools/v2-human-content/global-repair/wave-1b/`

No other path may change.

## Commit and push

Stage only the allowed paths.

Commit once with exactly:

`fix(math-v2): apply global repair wave 1b`

Push:

`chatgpt/math-v2-human-authoring-r1`

Do not create a pull request and do not merge.

## Prohibitions

Do not:

- alter any question outside the 12 immutable replacements;
- change any answer index or difficulty;
- delete or automatically rewrite the 22 retained groups;
- weaken the duplicate scanner, batch verifier or global audit;
- modify `數學會考作戰室/v2/`;
- run `author-v2-production-content.mjs`;
- activate production;
- import, combine, modify or delete V1 or generated V2 content;
- delete the old database;
- reset, clean, restore, stash, amend, rebase or force-push.

## Stop conditions

Stop without committing if:

- any starting-state check fails;
- any tooling hash differs;
- the Wave 1A candidate-source hash differs;
- an original question text or answer index has drifted;
- any affected-batch verifier fails;
- the 24-batch matrix is not 24/24 PASS;
- exact or cross-unit duplicate groups remain;
- any retained candidate differs from the adjudication ledger;
- any duplicate group remains unresolved;
- an unauthorized path changes;
- any production or old-database path changes.

## Required report

Return:

1. pre-execution branch, HEAD, latest subject, remote sync and clean status;
2. archive and tooling SHA-256 verification;
3. apply-script console JSON;
4. complete five affected-batch pre/emitter/post verifier results;
5. complete 24-batch verifier matrix summary;
6. post-repair global-audit console JSON;
7. duplicate-adjudication report;
8. `wave-1b-final-summary.json`;
9. evidence SHA-256 manifest;
10. every changed path;
11. commit SHA and push result;
12. final clean Git status;
13. confirmation that production was not activated;
14. confirmation that old content was not imported, combined, modified or deleted;
15. confirmation that exactly 12 questions were replaced and 22 number-swap groups were retained by explicit human adjudication.
