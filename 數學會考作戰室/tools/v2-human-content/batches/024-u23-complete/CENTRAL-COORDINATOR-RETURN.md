# Return to Central Coordinator

Return this ZIP together with the complete ChatGPT delivery report.

The central coordinator must:

1. Verify the ZIP SHA-256 and byte size.
2. Extract into an isolated temporary directory.
3. Run the first verifier before staging exists.
4. Review `review/final-human-audit.json` and the five rendered SVGs.
5. Run the emitter, then the second verifier.
6. Run cross-unit duplicate reconciliation against the other 22 units.
7. Supply the current expected Git HEAD.
8. Approve ordered integration into `數學會考作戰室/tools/v2-human-content/batches/024-u23-complete/`.
9. Keep production activation disabled until the final global release gate.
