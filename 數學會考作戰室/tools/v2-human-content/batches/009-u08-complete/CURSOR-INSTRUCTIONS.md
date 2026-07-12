# CENTRAL_COORDINATOR_APPROVAL_REQUIRED

## DO NOT EXECUTE BEFORE CENTRAL APPROVAL

This package was authored in a parallel unit conversation. Do not integrate it until the central coordinator has accepted the ZIP, completed ordering checks and supplied the exact expected Git HEAD.

```text
EXPECTED_HEAD=__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__
TARGET_BRANCH=chatgpt/math-v2-human-authoring-r1
TARGET_DIRECTORY=數學會考作戰室/tools/v2-human-content/batches/009-u08-complete/
APPROVAL_STATE=CENTRAL_COORDINATOR_APPROVAL_REQUIRED
```

## Cursor role

Cursor is implementation-only. It must not generate, rewrite, repair, shorten, expand or reinterpret any mathematical content. If validation fails, stop and report the exact failure to the central coordinator. Do not silently edit a question, answer, explanation, rubric, review or lecture.

## Preconditions

1. Receive explicit central-coordinator approval.
2. Replace the expected-head placeholder with the exact approved commit SHA.
3. Confirm the active repository is `iAsome/taiwan-cap-math`.
4. Confirm the active branch is `chatgpt/math-v2-human-authoring-r1`.
5. Confirm `git rev-parse HEAD` exactly equals the supplied expected HEAD.
6. Confirm the target directory does not already contain unreviewed or conflicting files.
7. Keep all old production content untouched.

## Integration steps

1. Extract the ZIP into a temporary directory.
2. Confirm the extracted root is exactly `math-v2-human-content-batch-009-u08-complete/`.
3. Run `node importer/verify-bundle.mjs` in the extracted root. Require JSON status `PASS`.
4. Copy the complete extracted root to:
   `數學會考作戰室/tools/v2-human-content/batches/009-u08-complete/`
5. Run the verifier again from the copied target.
6. Run `node importer/emit-unit-modules.mjs`. This may create only the package-local `staging/` directory.
7. Run the verifier after emission and require JSON status `PASS`.
8. Run repository tests selected by the central coordinator.
9. Produce a report containing the exact HEAD, copied file count, verifier JSON, emitted module count, test results and `git diff --stat`.
10. Do not commit, push, create a PR or activate production unless the central coordinator separately authorizes those actions.

## Prohibited actions

- Do not modify U01–U07 or U09–U23.
- Do not read old production questions as repair material.
- Do not import legacy lectures, reviews or compiled banks.
- Do not modify production routes, manifests or runtime defaults.
- Do not delete legacy sources.
- Do not use the old automatic content generator.
- Do not change IDs, skill order, prerequisites or answer indices.
- Do not keep staging output in any distributable ZIP.
