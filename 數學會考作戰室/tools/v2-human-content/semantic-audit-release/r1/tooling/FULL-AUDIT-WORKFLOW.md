# Full Manual Semantic Audit Workflow R1

## Non-negotiable rule

A machine may detect risks, verify hashes, check arithmetic, scan render output and enforce structure.

A machine may not mark an unaudited question as `PASS`.

## Inventory

- 23 units
- 339 skills
- 339 lectures
- 4,068 multiple-choice questions
- 678 constructed-response questions
- 4,746 total questions
- 178 SVG figures

## Current reviewed scope

- U01-S001: 12 MC, 2 CR, 1 lecture
- U02-S012: 12 MC, 2 CR, 1 lecture
- Reviewed questions: 28
- Pending manual questions: 4,718

## Required order for every skill

1. Read the locked skill title, objectives, prerequisites and boundary.
2. Read the lecture character by character.
3. Independently solve every worked example.
4. Check all symbols are introduced before use.
5. Check every MC prompt, all four choices, answerIndex, explanation, steps, option analysis and misconception.
6. Independently solve every MC without looking at answerIndex.
7. Check that only one choice is correct.
8. Check difficulty and literacy necessity.
9. Check renderer output for every displayed field.
10. Independently solve every constructed response.
11. Check alternative methods and the 0-to-3 rubric.
12. Scan UTF-8, NFC, replacement characters, controls and known mojibake.
13. Record one explicit verdict in the 4,746-row ledger.
14. Do not modify production until the entire skill package has passed review.

## Full-release gate

Run:

`node scripts/validate-audit-ledger.mjs --root <ROOT> --mode full-release`

It must remain blocked until:

- ledger rows = 4,746;
- pending manual = 0;
- every repair verdict has final replacement content;
- all 339 lectures have review evidence;
- all production browser and content gates pass.

The current hotfix is not a declaration that the remaining 4,718 questions are correct.
