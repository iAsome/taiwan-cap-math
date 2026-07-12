# Return to Central Coordinator

Return this exact ZIP and the complete verification report to the central coordinator conversation.

The central coordinator must:

1. supply the expected Git HEAD;
2. inspect title-boundary decisions and the two repaired audit findings;
3. run cross-unit fingerprint reconciliation against all parallel unit packages;
4. approve or reject integration order;
5. authorize Cursor only after those checks;
6. keep production activation and legacy deletion disabled until the final 23-unit release gate.

Do not execute the included Cursor instructions before central approval.
