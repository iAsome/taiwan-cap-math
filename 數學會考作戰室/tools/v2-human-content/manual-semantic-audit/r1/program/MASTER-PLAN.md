# Math V2 Complete Manual Semantic Audit Program R1

## Non-negotiable final target

Every character in all 4,746 questions and all 339 lectures must be manually reviewed.

Total review objects: 5,085.

No automated validator, existing review marker, question template, or Cursor report may grant semantic PASS.

## Completed before this program

- U01-S001: 12 MC, 2 CR and 1 lecture reviewed and published.
- U02-S012: 12 MC, 2 CR and 1 lecture reviewed and published.

## Program batches

- 85 sequential manual batches.
- Batch size: normally 4 skills.
- The order follows the production syllabus so prerequisite defects can be detected.
- Figure, proof and high-risk skills may be split into smaller sub-batches without changing the total queue.

## Phase 0 — immutable audit baseline

Cursor creates a fresh clone from the exact current remote main commit.

Cursor may:

- verify hashes and counts;
- pretty-print content into an audit workspace;
- generate field inventories and deterministic diagnostics;
- copy centrally approved manual-review evidence;
- export current workflow and production-blueprint diagnostics.

Cursor may not:

- decide whether a mathematical statement is correct;
- mark a pending artifact PASS;
- rewrite questions or lectures;
- modify production content;
- deploy.

## Phase 1 — manual review of 5,085 objects

For every question:

1. Read every string field.
2. Map it to official junior-high scope evidence.
3. Check prerequisite order.
4. Recompute the answer independently.
5. Check all four choices for uniqueness and mathematical equivalence.
6. Check answerIndex.
7. Check explanation, each step and each option analysis.
8. Check difficulty and literacy necessity.
9. Check renderer behavior and figures.
10. Specify an exact repair or approve the original.

For every lecture:

1. Read title, outcomes, glossary, notation and every paragraph.
2. Check prerequisite order and zero-foundation readability.
3. Verify every definition, formula, example and common mistake.
4. Check symbols are introduced before use.
5. Check the lecture does not require later content.
6. Specify an exact repair or approve the original.

## Phase 2 — unit repair assembly

A production unit is not rewritten until every skill in that unit has completed manual review.

The central reviewer authors the exact corrected unit content.

Cursor only applies the approved payload and verifies hashes.

## Phase 3 — global cross-unit audit

After all 23 units are reviewed:

- verify all prerequisite links and teaching order;
- verify official scope mapping;
- remove cross-unit duplication and number-only variants;
- verify difficulty balance and answer positions;
- verify 178 SVG figures;
- verify renderer behavior;
- verify no Simplified Chinese or mojibake;
- verify all CR rubrics and answer-only-zero policy.

## Phase 4 — one final production release

Use one new content version and one paper-history migration.

Required final state:

- 5,085 manual review objects complete;
- 4,746 question reviews complete;
- 339 lecture reviews complete;
- pending count 0;
- unresolved issue count 0;
- every configured CI check green;
- production blueprint identifies a production release, not an RC;
- real Chrome and live GitHub Pages validation pass.

## Efficiency rules

- Cursor performs extraction, hashing, screenshots, deterministic arithmetic checks and evidence packaging in parallel with manual review.
- Production is not repeatedly rewritten after each small batch.
- Repairs are assembled by completed unit, then released once globally.
- Urgent renderer or safety defects may use a separate hotfix, but may not change the manual-review count.
