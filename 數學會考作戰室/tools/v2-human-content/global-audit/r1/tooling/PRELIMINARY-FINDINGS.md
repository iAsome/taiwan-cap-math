# Preliminary Global Findings Before Repository Audit

This preliminary scan used the 24 centrally accepted source archives corresponding to U01–U23. The repository-side audit remains authoritative.

## Completeness passed

- 24 authoring batches
- 23 units
- 339 skill directories
- 339 lectures
- 4,068 multiple-choice questions
- 678 constructed-response questions
- 4,068 semantic reviews
- 178 drawing specifications
- 178 SVG figures
- no duplicate lecture IDs, MC IDs, CR IDs, review IDs or figure IDs
- every skill has 12 MC, at least 2 CR, 3/3/3/3 difficulty distribution and 3/3/3/3 answer-index distribution

## Preliminary production blockers

1. Content-authority normalization
   - U01 and U02 predate `contentAuthority: CHATGPT_HUMAN_AUTHORED_R1`.
   - U20 drawing specifications also lack the marker.
   - Preliminary gap count: 834 records.

2. Legacy-isolation normalization
   - Batches 001, 002 and 003 lack `legacy-content-isolation.json`.
   - Batch 004 lacks an explicit `productionActivationAllowed: false` field in that isolation file.

3. Traditional Chinese cleanup
   - Preliminary occurrences: 43.
   - Affected units: U01, U08, U11, U18 and U22.
   - Examples include `错误分组`, `攝影师`, `原来的`, `相机`, `烟囱`, `只凭`, `条件`, `正确`.

4. Title punctuation
   - Three U01 lecture titles contain internal `、` and must use `和` or `與`.

5. Cross-unit overlap candidates requiring human review
   - U03 and U10: two like-term simplification tasks overlap.
   - U08 and U17: quadrilateral angle-sum tasks overlap.
   - U08 and U17: trapezoid-area tasks overlap.
   - Other generic or prerequisite-repeat candidates are listed in the machine report and are not automatically rejected.

6. Number-swap review candidates
   - Preliminary candidate groups: 29.
   - These are review candidates, not automatic errors. Each must be judged by whether it tests a genuinely different capability.

Production activation and old-database deletion remain prohibited.
