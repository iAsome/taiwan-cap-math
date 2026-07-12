# Math V2 Human Authoring Baseline

## Status

This branch is a protected authoring workspace, not a production release.

- Human-authored skills completed: 1 / 339
- Human-authored lectures completed: 1 / 339
- Human-authored multiple-choice questions completed: 12 / 4,068
- Human-authored constructed-response questions completed: 2 / at least 678
- Production activation: prohibited
- Merge to `main`: prohibited
- Draft PR: not created

## Trust boundary

The existing Codex-generated U02–U23 content and its semantic-review evidence remain untrusted.

They must not be treated as completed content, even when mechanical validation passes.

The following are permitted for reuse only after targeted verification:

- syllabus and unit directory architecture;
- deterministic build and manifests;
- lazy loading and V1 rollback;
- storage migration;
- schema validation and browser smoke tests;
- release-gate infrastructure.

## Authoring authority

ChatGPT is responsible for writing and individually reviewing every lecture, question, answer, explanation, rubric, semantic review and drawing specification.

Cursor is implementation-only. Cursor may copy exact supplied files, execute validators, emit serialization modules, run tests, commit approved packages and push the authoring branch. Cursor must not generate or repair mathematical content.

## Generator prohibition

`數學會考作戰室/tools/author-v2-production-content.mjs` must not be used to create, complete, expand or repair the human-authored content set.

## Activation rule

No production question bank, lecture bank, manifest lock or default UI route may be replaced or activated until all 23 units have been supplied in the final master package and the final human-content release gate passes.
