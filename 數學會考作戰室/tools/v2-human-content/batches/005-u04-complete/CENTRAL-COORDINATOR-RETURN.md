# Central Coordinator Return — Batch 005 U04

Return this entire immutable ZIP and the ChatGPT delivery report to the central coordinator conversation.

Coordinator checks required before integration:

1. Confirm package SHA-256 and byte size.
2. Confirm U04 skill IDs and order against `authoring-syllabus-lock-r2.json`.
3. Run the package verifier on a clean extraction.
4. Emit staging modules, then run the verifier again.
5. Run cross-unit prompt and skeleton fingerprints against all returned unit packages.
6. Supply the exact expected Git HEAD in the Cursor instructions.
7. Approve integration order explicitly.

No old database deletion, production activation, branch push or pull request is authorized by this package.
