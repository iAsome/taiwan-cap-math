# CENTRAL_COORDINATOR_APPROVAL_REQUIRED

`EXPECTED_HEAD=__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__`

## Purpose

Integrate the immutable, independently reviewed U23 human-authoring package into:

`數學會考作戰室/tools/v2-human-content/batches/024-u23-complete/`

This file is an implementation instruction for Cursor. It is not authorization to execute now. The central coordinator must first approve the ZIP, supply the exact expected Git HEAD, and confirm the ordered integration slot.

## Non-negotiable rules

1. Do not generate, rewrite, repair, paraphrase, expand or remove mathematical content.
2. Do not read old production U23 questions or lectures as a comparison source.
3. Do not merge this package with old generated banks.
4. Do not modify U01–U22 or any parallel unit package.
5. Do not modify production runtime, default routes, compiled banks or release locks.
6. Do not delete legacy content in this integration task.
7. Do not commit or push until the central coordinator explicitly authorizes both actions.
8. Stop immediately if the checked-out branch or HEAD does not exactly match the coordinator-supplied values.
9. Preserve UTF-8, LF line endings, paths, filenames and byte contents.
10. The source package must remain immutable. `staging/` may be emitted only as a derived local validation artifact.

## Why these rules exist

Twenty unit packages were authored in parallel. An assumed Git HEAD can overwrite another accepted unit. Old U23 production content is untrusted mathematical evidence. Cursor is implementation-only; changing even one number or answer would invalidate the human review and content hashes.

## Preconditions supplied by the central coordinator

The coordinator must replace the placeholder below before execution:

```text
EXPECTED_HEAD=__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__
EXPECTED_BRANCH=chatgpt/math-v2-human-authoring-r1
TARGET_PATH=數學會考作戰室/tools/v2-human-content/batches/024-u23-complete/
```

The coordinator must also provide the approved ZIP SHA-256 from the ChatGPT delivery report.

## Required procedure

### 1. Establish repository safety

Run read-only checks:

```bash
git status --short
git branch --show-current
git rev-parse HEAD
```

Requirements:

- working tree is clean;
- branch equals `chatgpt/math-v2-human-authoring-r1`;
- `git rev-parse HEAD` exactly equals the coordinator-supplied `EXPECTED_HEAD`.

If any requirement fails, stop and report the exact output. Do not stash, reset, checkout, pull, merge or rebase automatically.

### 2. Verify the received archive outside the repository

Compute:

```bash
sha256sum math-v2-human-content-batch-024-u23-complete.zip
```

Compare byte-for-byte with the approved SHA-256. If it differs, stop.

Extract into a new temporary directory. Confirm the archive has exactly one root:

`math-v2-human-content-batch-024-u23-complete/`

Confirm there is no `staging/` directory in the archive.

### 3. Run the immutable-source verifier

From the extracted root:

```bash
node importer/verify-bundle.mjs
```

The JSON result must have `status: "PASS"`, `unitId: "u23"`, 20 skills, 20 lectures, 240 MC questions, 40 constructed responses, 240 semantic reviews, 5 figures, balanced difficulty and answer-index totals, and `productionActivationAllowed: false`.

Do not edit files to make validation pass. If validation fails, return the error to the central coordinator and wait for a corrected immutable package.

### 4. Emit reviewed serialization only

Run:

```bash
node importer/emit-unit-modules.mjs
node importer/verify-bundle.mjs
```

Expected emitted module count: 20.

The emitter is intentionally mechanical. It serializes reviewed JSON/JSONL records and must not infer answers, generate wording, or activate production.

### 5. Remove derived staging before repository copy

Delete only the derived `staging/` directory in the temporary extraction:

```bash
rm -rf staging
node importer/verify-bundle.mjs
```

The verifier must pass again with `stagingPresent: false`.

### 6. Copy the immutable root

The destination must not already contain unreviewed or partial content. If it exists, stop and ask the central coordinator whether it is an accepted identical package. Do not merge directories automatically.

Copy the extracted root contents exactly to:

`數學會考作戰室/tools/v2-human-content/batches/024-u23-complete/`

Do not copy the outer ZIP and do not add `staging/`.

### 7. Repository-side verification

From the destination path, run:

```bash
node importer/verify-bundle.mjs
git status --short
git diff --stat
git diff --check
```

Verify that changed files are confined to the assigned destination. Any modification outside that path is a hard stop.

### 8. Report before commit

Return a report containing:

- actual branch and HEAD;
- approved ZIP SHA-256 and computed SHA-256;
- first verifier JSON;
- emitted module count;
- second verifier JSON;
- post-removal verifier JSON;
- destination path;
- full `git status --short`;
- `git diff --stat`;
- confirmation that no production path changed;
- confirmation that no legacy content was imported, deleted or activated;
- confirmation that `staging/` is absent.

Do not commit or push unless the central coordinator replies with explicit authorization and a commit message.

## Forbidden recovery actions

Cursor must not silently:

- change an answer or distractor;
- regenerate hashes;
- weaken the verifier;
- delete a failing item;
- import an old question to fill a gap;
- run any old content generator;
- commit on a different HEAD;
- create a pull request;
- activate U23 in production.

A failure is a reportable state, not permission to repair mathematical content.
