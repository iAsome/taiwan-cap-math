# CENTRAL_COORDINATOR_APPROVAL_REQUIRED

## Batch

- Package: `math-v2-human-content-batch-005-u04-complete`
- Destination: `數學會考作戰室/tools/v2-human-content/batches/005-u04-complete/`
- Branch: `chatgpt/math-v2-human-authoring-r1`
- `EXPECTED_HEAD=__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__`

## Mandatory gate

Do not perform any repository action until the central coordinator has:

1. verified the returned ZIP SHA-256;
2. approved Batch 005 in the ordered integration queue; and
3. replaced the expected-head placeholder with the exact current authoring-branch HEAD.

## Cursor role

Cursor is implementation-only. Do not create, rewrite, expand, repair, paraphrase or optimize any mathematical content. Do not use the old production bank, old generated lectures, old semantic reviews or `tools/author-v2-production-content.mjs`.

## Approved procedure after coordinator authorization

1. Check out `chatgpt/math-v2-human-authoring-r1`.
2. Abort if `git rev-parse HEAD` is not exactly the coordinator-supplied `EXPECTED_HEAD`.
3. Confirm the destination directory does not already contain a conflicting Batch 005 package.
4. Extract the ZIP into a temporary directory and confirm its root is exactly `math-v2-human-content-batch-005-u04-complete/`.
5. Run:

   ```bash
   node importer/verify-bundle.mjs
   ```

   The command must return `status: PASS`, 14 skills, 14 lectures, 168 MC questions, 28 constructed-response questions, 168 semantic reviews and zero figures.
6. Copy the verified package byte-for-byte to:

   ```text
   數學會考作戰室/tools/v2-human-content/batches/005-u04-complete/
   ```

7. In the copied package, run the verifier again.
8. Run:

   ```bash
   node importer/emit-unit-modules.mjs
   node importer/verify-bundle.mjs
   ```

   The emitter must create exactly 14 reviewed staging modules plus one staging manifest. Never edit emitted modules manually.
9. Run repository-level tests requested by the central coordinator, including the global duplicate scan when the other parallel packages are available.
10. Report every command, exit code, verifier JSON, emitted file list and `git diff --stat` to the central coordinator.

## Absolute prohibitions

- Do not modify U01, U02, U03 or any parallel unit.
- Do not modify production question banks, lecture banks, runtime routes or default UI activation.
- Do not delete legacy content in this task.
- Do not commit, push or open a pull request without a separate explicit coordinator command.
- Do not silently fix content. Any content concern must be reported back to the coordinator and this authoring conversation.
