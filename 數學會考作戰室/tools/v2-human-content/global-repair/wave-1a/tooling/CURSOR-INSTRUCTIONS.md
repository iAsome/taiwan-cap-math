# CURSOR INSTRUCTIONS — MATH V2 GLOBAL REPAIR WAVE 1A R1

## Purpose

Apply the exact central repair operations already encoded in this immutable tooling package.

This is not an authoring task. Cursor must not invent, rewrite, paraphrase, expand, delete, or otherwise alter mathematical content outside the exact scripted operations.

## Repository preconditions

Repository:

`C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1`

Required branch:

`chatgpt/math-v2-human-authoring-r1`

Required HEAD:

`e761034ca7391039323a3c011844dc0e6aa2e813`

Required latest commit subject:

`audit(math-v2): record global human-content audit r1`

Before execution require:

- clean `git status --short --untracked-files=all`;
- local HEAD equals origin for the authoring branch;
- Global Audit R1 exists at `數學會考作戰室/tools/v2-human-content/global-audit/r1/`;
- `global-repair/wave-1a/` does not already exist.

Stop if any precondition differs.

## Tooling copy

Copy this extracted package byte-for-byte to:

`數學會考作戰室/tools/v2-human-content/global-repair/wave-1a/tooling/`

Verify every copied tooling file against `KIT-SHA256.json`.

## Exact execution

Set:

```powershell
$repo = "C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1"
$evidence = "$repo/數學會考作戰室/tools/v2-human-content/global-repair/wave-1a/evidence"
$tooling = "$repo/數學會考作戰室/tools/v2-human-content/global-repair/wave-1a/tooling"
```

### 1. Apply exact source repairs

```powershell
node "$tooling/scripts/apply-global-repair-wave-1a.mjs" --repo "$repo" --evidence "$evidence"
```

Require:

- status `REPAIR_SOURCE_APPLIED_STAGING_NOT_YET_EMITTED`;
- affected batch count 9;
- changed record count 484;
- changed field operation count 880;
- production activation false.

### 2. Emit and verify the nine affected batches

```powershell
node "$tooling/scripts/emit-and-verify-affected.mjs" --repo "$repo" --evidence "$evidence"
```

Require:

- status `PASS`;
- completed batch count 9;
- no failed batch.

### 3. Run all 24 batch verifiers with the fixed Windows runner

```powershell
node "$tooling/scripts/run-batch-verifiers-fixed.mjs" --repo "$repo" --output "$evidence"
```

Require:

- status `PASS`;
- batch count 24;
- passed 24;
- failed list empty.

### 4. Run the post-repair global audit

Use the already committed Global Audit R1 scanner, but write new evidence under Wave 1A:

```powershell
node "$repo/數學會考作戰室/tools/v2-human-content/global-audit/r1/tooling/scripts/run-global-audit.mjs" --repo "$repo" --output "$evidence/post-audit"
```

Require:

- status `PASS_GLOBAL_STRUCTURE`;
- 339 skills and lectures;
- 4,068 MC questions;
- 678 constructed responses;
- 4,068 semantic reviews;
- content-authority gap count 0;
- legacy-isolation issue count 0;
- simplified issue count 0;
- title punctuation issue count 0;
- production activation false.

The 7 cross-unit prompt-skeleton groups and 29 number-swap candidate groups may remain. They are Wave 1B review work and are not permission to weaken or remove the scanner.

### 5. Finalize evidence

```powershell
node "$tooling/scripts/finalize-wave-1a-evidence.mjs" --evidence "$evidence"
```

Require status:

`PASS_WAVE_1A`

## Path-boundary review

Run:

```powershell
git status --short
git diff --check
git diff --name-only
```

Allowed batch paths only:

- `batches/001/`
- `batches/002-u01-complete/`
- `batches/003-u02-complete/`
- `batches/004-u03-complete/`
- `batches/009-u08-complete/`
- `batches/012-u11-complete/`
- `batches/019-u18-complete/`
- `batches/021-u20-complete/`
- `batches/023-u22-complete/`

Also allowed:

- `global-repair/wave-1a/`

No other path may change.

## Commit and push

Stage only the allowed paths above.

Commit once with exactly:

`fix(math-v2): apply global repair wave 1a`

Push:

`chatgpt/math-v2-human-authoring-r1`

Do not create a pull request and do not merge.

## Prohibitions

Do not:

- edit any question or lecture beyond the scripted repairs;
- handle duplicate candidates in this wave;
- modify `數學會考作戰室/v2/`;
- run `author-v2-production-content.mjs`;
- activate production;
- import, combine, modify, or delete V1 or generated V2 content;
- delete the old database;
- reset, clean, restore, stash, amend, rebase, or force-push;
- weaken any verifier or audit rule.

## Stop conditions

Stop without committing if:

- any expected starting-state check fails;
- any tooling hash differs;
- any of the nine affected batch verifiers fails;
- the 24-batch matrix is not 24/24 PASS;
- the post-audit status is not `PASS_GLOBAL_STRUCTURE`;
- any of the four Wave 1A blocker counts remains nonzero;
- an unauthorized path changes;
- a production or old-database path changes.

## Required report

Return:

1. pre-execution branch, HEAD, latest subject, remote sync, and clean status;
2. tooling SHA-256 verification;
3. apply-script console JSON;
4. nine affected-batch pre/emitter/post verifier results;
5. complete 24-batch matrix summary and any failure output;
6. post-repair global-audit console JSON;
7. `wave-1a-final-summary.json`;
8. evidence file SHA-256 manifest;
9. every changed path;
10. commit SHA and push result;
11. final clean git status;
12. confirmation that production was not activated;
13. confirmation that old content was not imported, combined, modified, or deleted;
14. confirmation that the duplicate candidates remain reserved for Wave 1B.
