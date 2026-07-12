# CENTRAL_COORDINATOR_APPROVAL_REQUIRED

EXPECTED_HEAD=__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__
TARGET_PATH=數學會考作戰室/tools/v2-human-content/batches/011-u10-complete/

## Role and authority

You are Cursor acting as an implementation-only executor. Do not author, rewrite, repair, simplify, expand, translate, rebalance, or infer any mathematical content. Every source record is immutable and is governed by `contentAuthority: CHATGPT_HUMAN_AUTHORED_R1`. If any mathematical or semantic defect is detected, stop and report the exact file, record ID, field, and reason to the central coordinator. Never silently fix it.

## Approval gate

Do not execute these instructions until the central coordinator explicitly approves Batch 011, provides the exact expected Git HEAD, and confirms the ordered integration slot. Replace only the placeholder value in your local execution notes; do not edit the immutable package merely to insert the HEAD.

## Preconditions

1. Work only in repository `iAsome/taiwan-cap-math` on branch `chatgpt/math-v2-human-authoring-r1`.
2. Confirm `git status --short` is clean. If not clean, stop and report.
3. Confirm `git rev-parse HEAD` exactly equals the central coordinator supplied HEAD. If it differs, stop; do not pull, rebase, merge, reset, cherry-pick, stash, or switch branches automatically.
4. Confirm the destination `數學會考作戰室/tools/v2-human-content/batches/011-u10-complete/` does not already exist. If it exists, stop and report; do not merge directories.
5. Do not read or use old production question/lecture banks to compare or repair content. Cross-unit duplicate detection may use only accepted human-authored batch fingerprints.

## Immutable copy and first verification

1. Extract the ZIP to a temporary directory and confirm the root is exactly `math-v2-human-content-batch-011-u10-complete/`.
2. Confirm there is no `staging/` directory in the extracted delivery.
3. From the extracted root run: `node importer/verify-bundle.mjs .`
4. Require JSON output with `pass: true`, 13 skills, 13 lectures, 156 MC, 26 constructed responses, 156 semantic reviews, 4 figures, and `stagingPresent: false`.
5. Copy the complete root contents, without mutation, to `數學會考作戰室/tools/v2-human-content/batches/011-u10-complete/`.
6. Run the same verifier from the repository destination and require the same source counts.

## Staging emission and second verification

1. Run `node importer/emit-unit-modules.mjs .` from the destination.
2. The emitter must create only `staging/u10/` inside this batch directory. It must emit 13 skill modules plus one index module, total 14.
3. Run `node importer/verify-bundle.mjs .` again. Require `pass: true`, `stagingPresent: true`, and `emittedModuleCount: 14`.
4. Do not hand-edit emitted modules. If emission or verification fails, preserve logs and report; do not repair source or output.

## Repository safety

- Do not touch U01–U09 or U11–U23.
- Do not modify the shared syllabus lock, production manifests, runtime loaders, default UI routes, old databases, generated banks, release gates, or legacy retirement files.
- Do not delete legacy content.
- Do not activate U10 in production.
- Do not commit, push, create a pull request, or change Git HEAD unless the central coordinator gives a separate explicit command after reviewing the verification report.

## Required report

Return: supplied and actual HEAD, clean-status proof, destination path, source ZIP SHA-256, first verifier JSON, copied-file count, emitter JSON, second verifier JSON, `git status --short`, and an explicit statement that production and legacy content were untouched.
