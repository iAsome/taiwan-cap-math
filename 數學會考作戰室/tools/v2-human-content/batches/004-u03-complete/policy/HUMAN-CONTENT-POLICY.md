# HUMAN CONTENT POLICY — Batch 004 / U03

## Authority

Every lecture, multiple-choice question, constructed-response question, answer, distractor explanation, semantic review and figure in this package is marked:

`CHATGPT_HUMAN_AUTHORED_R1`

Cursor is implementation-only and must not alter mathematical content.

## Isolation from the old database

This package is a new authoring source under `tools/v2-human-content/`.

It must not import, merge, patch, copy, or accept semantic evidence from:

- the Codex-generated production question banks;
- the Codex-generated lecture banks;
- `author-v2-production-content.mjs`;
- `review-output/full-v2-production/`;
- existing production locks that hash the old generated content.

Question IDs intentionally retain stable U03 IDs so the final migration can replace old records. Matching IDs do not mean old and new records may coexist at runtime.

## Final retirement rule

The old generated content is not deleted during unit authoring. After all 23 units are complete, final integration must:

1. back up the old generated banks;
2. delete old generated source questions, lectures and circular review evidence;
3. remove compiled old U01–U23 banks;
4. rebuild compiled banks exclusively from human-authoring sources;
5. scan all imports and manifests to prove zero runtime references to old banks;
6. regenerate locks from the new human content;
7. run the full release gate before any production activation.

## Content rules

- No question-stem or lecture-content templates.
- Exactly twelve individually authored MC questions per skill in this batch.
- Exactly two individually authored constructed-response questions per skill.
- Every MC item has a separately recorded independent solution and four-option truth audit.
- Figures are used only when the visual data participates in solving the item.
- Skill and lecture titles use `和` or `與`, not internal `、`.
