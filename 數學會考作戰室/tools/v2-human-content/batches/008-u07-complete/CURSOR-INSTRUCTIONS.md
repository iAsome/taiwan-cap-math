# CENTRAL_COORDINATOR_APPROVAL_REQUIRED

## Batch identity

- Package: `math-v2-human-content-batch-008-u07-complete`
- Batch ID: `008-u07-complete`
- Unit: `u07`
- Repository: `iAsome/taiwan-cap-math`
- Authoring branch: `chatgpt/math-v2-human-authoring-r1`
- Approved destination: `數學會考作戰室/tools/v2-human-content/batches/008-u07-complete/`
- `EXPECTED_HEAD=__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__`

## Absolute stop condition

Do not execute these instructions until the central coordinator explicitly approves this exact ZIP and replaces the expected-HEAD placeholder with the single current commit SHA authorized for ordered integration. The placeholder is intentionally non-executable. This prevents twenty parallel packages from assuming or overwriting the same moving branch head.

Stop immediately if any of the following is true:

1. `EXPECTED_HEAD` is still `__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__`.
2. The checked-out repository is not `iAsome/taiwan-cap-math`.
3. The current branch is not `chatgpt/math-v2-human-authoring-r1`.
4. `git rev-parse HEAD` does not exactly equal the coordinator-supplied expected HEAD.
5. The destination directory already exists with different content and the coordinator has not supplied a reconciliation decision.
6. Any verifier reports a failure.
7. Any proposed action would modify production banks, U01–U06, U08–U23, shared runtime activation, or legacy-retirement files.

## Content authority and role separation

This package contains reviewed mathematical source. Cursor is implementation-only.

Cursor must not:

- generate, rewrite, paraphrase, shorten, expand, translate, normalize, or repair mathematical content;
- change a correct choice, answer index, explanation, solution, rubric, review, or drawing specification;
- import any old production question or lecture;
- run an automatic content generator;
- infer missing records or create number-swapped variants;
- change skill IDs, topic IDs, order, prerequisites, or titles;
- activate production, delete legacy sources, merge to `main`, or open a pull request unless the central coordinator later issues a separate explicit command.

Why: the human-authoring trust boundary requires mathematical judgments to remain traceable to reviewed records. Cursor may copy exact bytes, run deterministic validators, emit serialization modules, and report results only.

## Approved integration procedure

### 1. Confirm repository identity and exact head

Run from the repository root:

```bash
git remote -v
git branch --show-current
git rev-parse HEAD
```

Compare the output with the central coordinator's repository, branch, and approved `EXPECTED_HEAD`. Do not continue on a mismatch. Do not automatically pull, merge, rebase, reset, or switch to another head; those actions could reorder parallel batches.

### 2. Inspect the ZIP before extraction

Calculate the ZIP SHA-256 and compare it with the coordinator's acceptance report. Confirm that the archive contains exactly one top-level root directory named:

```text
math-v2-human-content-batch-008-u07-complete/
```

Confirm that the archive does not contain absolute paths, `..` traversal components, symlinks, or a `staging/` directory. This check protects the repository from path traversal and proves that emitted staging was not shipped as source.

### 3. Extract outside the repository and run the first verifier

Extract into a new temporary directory, not directly into the repository. From the extracted package root run:

```bash
node importer/verify-bundle.mjs
```

The command must return JSON with `status: "PASS"`, `unitId: "u07"`, 12 skills, 12 lectures, 144 MC questions, 24 constructed responses, 144 semantic reviews, 3 figures, four difficulty totals of 36, four answer-index totals of 36, and `productionActivationAllowed: false`.

Why: validating before repository copy distinguishes an authentic package defect from an integration-side file mutation.

### 4. Copy exact source bytes to the assigned batch path

Create only this destination:

```text
數學會考作戰室/tools/v2-human-content/batches/008-u07-complete/
```

Copy the complete extracted package contents into that directory without editing line endings, JSON ordering, whitespace, Unicode characters, or SVG data. Do not copy the outer root directory as an extra nested level. The destination should directly contain `README.md`, `CURSOR-INSTRUCTIONS.md`, `units/`, `manifest/`, and the other package directories.

Why: content and file SHA-256 manifests are byte-sensitive and ensure the reviewed artifact is preserved exactly.

### 5. Verify the repository copy before emission

From the repository destination run:

```bash
node importer/verify-bundle.mjs
```

Require the same PASS facts as the clean extraction. If any hash differs, delete only the incomplete destination copy, re-copy exact bytes from the accepted ZIP, and rerun. Do not repair content manually.

### 6. Emit deterministic staging modules

Only after both approval and source verification run:

```bash
node importer/emit-unit-modules.mjs
```

The emitter must create exactly 12 reviewed serialization modules plus one staging manifest inside the package-local `staging/` directory. It must not touch runtime banks or production routes.

Why: staging is generated from reviewed source and is intentionally absent from the immutable delivery ZIP, so source remains authoritative.

### 7. Run the verifier again after emission

Run:

```bash
node importer/verify-bundle.mjs
```

Require `status: "PASS"`, `stagingPresent: true`, and `stagingModuleCount: 12`. A failure means stop and return the exact JSON/error to the central coordinator. Do not modify source or emitter output to force a PASS.

### 8. Inspect the change scope

Run:

```bash
git status --short
git diff --stat
git diff --name-only
```

Every changed path must be under:

```text
數學會考作戰室/tools/v2-human-content/batches/008-u07-complete/
```

There must be no changes to production content banks, old generators, U01–U06, U08–U23, global release gates, package locks, deployment files, or UI defaults.

### 9. Report before any commit

Return to the central coordinator:

- current HEAD used;
- ZIP SHA-256 checked;
- first clean-extraction verifier JSON;
- repository-copy verifier JSON;
- emitter JSON with exactly 12 modules;
- post-emission verifier JSON;
- `git status --short` and changed-file list;
- confirmation that no production or legacy source changed.

Do not commit, push, or open a PR merely because the checks pass. Those actions require a new explicit coordinator command that specifies the permitted commit scope and expected head at that moment.

## Legacy and production prohibitions

The following values are binding:

```text
legacyContentImported=false
legacySemanticEvidenceAccepted=false
oldProductionRuntimeModified=false
deleteLegacyNow=false
finalRetirementRequired=true
productionActivationAllowed=false
```

The old database must remain available and isolated until all 23 units pass the global release gate and the central coordinator executes a separately reviewed retirement migration.
