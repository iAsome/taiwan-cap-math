# Central Coordinator Return — Batch 013 U12

Return this ZIP and the assistant's complete delivery report to the central coordinator conversation.

## Acceptance scope

- Unit: `u12` 因式分解
- Skills: `s001`–`s010`, exactly 10 locked skills
- Source content: 10 lectures, 120 MC items, 20 constructed responses, 120 MC semantic reviews
- Figures: 3 reviewed SVGs
- Production activation: forbidden
- Legacy content: not imported or modified
- Parallel limitation: this unit can detect duplicates internally, but cross-unit comparison against the other nineteen simultaneously authored packages must be performed centrally.

## Required coordinator actions

1. Verify ZIP SHA-256 and byte size against the delivery report.
2. Extract cleanly and run the first verifier.
3. Review the audit and fingerprints.
4. Reconcile cross-unit duplicates and shared-schema differences.
5. Supply the exact expected Git HEAD only when this batch reaches its ordered integration turn.
6. Authorize Cursor integration separately; do not infer approval from package delivery.
