# CENTRAL_COORDINATOR_APPROVAL_REQUIRED

## Immutable integration instruction for Batch 014 U13

`EXPECTED_HEAD=__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__`

Target destination:

`數學會考作戰室/tools/v2-human-content/batches/014-u13-complete/`

### Do not start without central approval

This package was produced while twenty unit packages were being authored in parallel. The expected Git HEAD is intentionally unresolved. Do not copy files, create a branch, commit, push, or open a pull request until the central coordinator replaces the placeholder above with an exact approved commit SHA and explicitly authorizes the ordered integration of Batch 014.

### Your role

You are implementation-only. Copy the reviewed source exactly and execute deterministic validation. Do not generate, rewrite, repair, simplify, translate, reorder, or "improve" any lecture, question, choice, answer, explanation, rubric, semantic review, drawing specification, title decision, or audit record. Mathematical edits require a new human-authored replacement package from the central coordinator.

### Required safety rules

1. Confirm the repository is `iAsome/taiwan-cap-math` and the checked-out branch is the coordinator-approved authoring branch.
2. Confirm `git rev-parse HEAD` exactly equals the coordinator-supplied replacement for `__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__`. Stop on any mismatch because another parallel batch may have changed shared files.
3. Confirm the destination directory does not already exist. Never merge this package with a partial or older `014-u13-complete` directory.
4. Extract the ZIP into a clean temporary directory. Reject archives with path traversal, extra root directories, or a pre-existing `staging/` directory.
5. Calculate the ZIP SHA-256 and compare it with the coordinator's delivery report before using any file.
6. Run `node importer/verify-bundle.mjs` in the clean extracted root before emission. It must return `status: PASS`, `stagingPresent: false`, 15 skills, 15 lectures, 180 MC questions, 30 constructed responses, 180 semantic reviews, and 4 figures.
7. Copy the entire immutable root to exactly `數學會考作戰室/tools/v2-human-content/batches/014-u13-complete/`. Do not copy any file into production V2 banks or runtime routes.
8. Run the verifier again from the repository destination. The result must remain byte-for-byte equivalent in all count and policy fields.
9. Run `node importer/emit-unit-modules.mjs`. This may create only the package-local `staging/` directory from reviewed source records. It must report 16 emitted modules: 15 skill modules and one unit index.
10. Run `node importer/verify-bundle.mjs` again. It must return `stagingPresent: true`, `emittedModuleCount: 16`, and `productionActivationAllowed: false`.
11. Review `git diff --stat` and `git status --short`. Every changed path must be under the assigned batch destination. Stop if U01–U12, U14–U23, production banks, routes, old generators, or old databases changed.
12. Do not delete legacy content. Do not set any activation flag. Do not run old content generators. Do not accept generated semantic evidence. Do not edit shared manifests unless the central coordinator supplies a separate reconciliation instruction.
13. Return the verifier JSON, emitter JSON, file list, destination tree, and diff summary to the central coordinator. Do not commit until the coordinator reviews them.
14. If later authorized to commit, use the exact coordinator-specified commit message and expected HEAD procedure. Never push or open a PR unless separately authorized.

### Why these rules are required

Parallel packages cannot safely assume a shared current HEAD. Exact-head gating prevents one unit from overwriting another. Clean extraction and pre-emission verification prove that the delivered author source is intact and staging-free. Package-local emission keeps generated serialization separate from reviewed records. The path-bound diff check prevents accidental production activation or legacy deletion. Central reconciliation is necessary because this package can detect duplicates only inside U13, not against the nineteen simultaneously authored units.

### Stop conditions

Stop and report without editing anything if any hash fails, a count differs, a semantic review is missing, a figure assertion fails, staging already exists in the delivery, the expected HEAD differs, the destination exists, or any requested action would modify production or legacy sources.
