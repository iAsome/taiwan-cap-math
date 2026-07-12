# CENTRAL_COORDINATOR_APPROVAL_REQUIRED

EXPECTED_HEAD=__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__
TARGET=數學會考作戰室/tools/v2-human-content/batches/018-u17-complete/

## Status

These instructions are dormant until the central coordinator approves this exact ZIP and replaces the expected HEAD placeholder. Do not execute them from the subordinate unit conversation.

## Approved integration procedure only

1. Confirm the repository is `iAsome/taiwan-cap-math` and the active branch is the coordinator-designated human-authoring branch.
2. Confirm `git rev-parse HEAD` exactly equals the coordinator-supplied `EXPECTED_HEAD`. Stop on any mismatch; do not merge, rebase, reset or guess.
3. Extract the ZIP outside the repository and verify its SHA-256 against the coordinator report.
4. Confirm the extracted root is exactly `math-v2-human-content-batch-018-u17-complete/` and contains no `staging/` directory.
5. Run `node importer/verify-bundle.mjs` in the extracted root. It must return PASS before any copy.
6. Copy the entire reviewed package to `數學會考作戰室/tools/v2-human-content/batches/018-u17-complete/` without editing mathematical content.
7. Run the verifier again at the repository destination.
8. Run `node importer/emit-unit-modules.mjs`; this creates staging serialization only. Do not activate it in production.
9. Run the verifier a third time and retain both verifier and emitter JSON outputs for the coordinator.
10. Run repository tests specified by the central coordinator. Cursor may fix only transport, path or serialization defects that do not alter mathematics. Any lecture, question, answer, distractor, proof, rubric or figure-content concern must be returned to ChatGPT and the central coordinator.
11. Commit and push only when the central coordinator explicitly authorizes the exact scope and integration order. Do not create a pull request unless separately instructed.

## Prohibitions

- Do not import or compare against old production mathematical content.
- Do not generate, paraphrase, repair or expand content.
- Do not modify U01–U16 or U18–U23.
- Do not delete legacy databases or generators.
- Do not activate staging, change default routes or replace production banks.
- Do not substitute a different Git HEAD.
