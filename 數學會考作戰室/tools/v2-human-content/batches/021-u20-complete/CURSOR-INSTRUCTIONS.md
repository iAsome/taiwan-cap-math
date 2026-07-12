# CENTRAL_COORDINATOR_APPROVAL_REQUIRED

Do not execute these instructions until the central coordinator has accepted this ZIP and supplied the expected Git HEAD.

```text
EXPECTED_HEAD=__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__
DESTINATION=數學會考作戰室/tools/v2-human-content/batches/021-u20-complete/
```

## Role and safety boundary

You are the implementation-only integrator. Do not author, rewrite, repair, expand, simplify, normalize, or infer any mathematical content. Copy the approved immutable package byte-for-byte. Do not inspect or use old production questions or lectures as replacement material. Do not modify production routes, compiled banks, legacy generators, or activation flags.

## Preconditions

1. Confirm the repository is `iAsome/taiwan-cap-math`.
2. Confirm the checked-out branch is `chatgpt/math-v2-human-authoring-r1`.
3. Replace the placeholder `EXPECTED_HEAD` only with the exact SHA supplied by the central coordinator.
4. Run `git rev-parse HEAD` and stop if it differs from the supplied expected SHA.
5. Confirm the destination directory does not already exist. If it exists, stop and report; do not merge directories.
6. Confirm the approved ZIP SHA-256 matches the coordinator's report before extraction.

## Integration procedure

1. Extract only the root directory `math-v2-human-content-batch-021-u20-complete/` into a temporary directory outside the repository.
2. Run:
   `node importer/verify-bundle.mjs`
3. Require JSON output with `"status":"pass"` and `"phase":"source-only"`.
4. Confirm there is no `staging/` directory in the approved source package.
5. Copy the complete extracted root to:
   `數學會考作戰室/tools/v2-human-content/batches/021-u20-complete/`
6. From that copied directory run:
   `node importer/emit-unit-modules.mjs`
7. Run:
   `node importer/verify-bundle.mjs`
8. Require JSON output with `"status":"pass"` and `"phase":"source-plus-staging"`.
9. Review `git status --short` and confirm changes are confined to the assigned batch directory.
10. Do not commit or push until the central coordinator explicitly authorizes those actions.

## Mandatory report

Return:
- current branch and HEAD
- approved ZIP SHA-256 comparison
- first verifier JSON
- emitter JSON and emitted module count
- second verifier JSON
- exact changed-file list
- confirmation that no path outside the assigned batch directory changed
- confirmation that production activation remains false
- confirmation that legacy content was neither read nor imported
- any error, warning, or mismatch without attempting content repair
