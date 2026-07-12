# CENTRAL COORDINATOR RETURN — Batch 010 U09

Return this ZIP and the complete delivery report to the central coordinator conversation.

## Identity

- Package: `math-v2-human-content-batch-010-u09-complete`
- Unit: `u09`
- Batch: `010-u09-complete`
- Destination after approval: `數學會考作戰室/tools/v2-human-content/batches/010-u09-complete/`
- Expected HEAD: `__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__`

## Required central checks

1. Bind the actual expected Git HEAD.
2. Confirm ordered integration relative to the other unit packages.
3. Run the package verifier before emission.
4. Emit staging modules and run the verifier again.
5. Run cross-unit fingerprint and semantic duplicate reconciliation.
6. Reconcile any shared-schema differences.
7. Keep production activation disabled.
8. Do not retire legacy content until all 23 units pass the global release gate.

This subordinate package is not authorization to run Cursor or modify the shared branch.
