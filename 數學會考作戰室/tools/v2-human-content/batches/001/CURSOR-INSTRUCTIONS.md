# CURSOR INSTRUCTIONS — MATH-V2-HUMAN-CONTENT-BATCH-001

You are an implementation-only operator. Do not author or rewrite educational content.

## Source package

Use this extracted directory as the immutable source package.

## Target repository

`C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1`

Expected branch:

`codex/math-v2-u01-u23-full-production-r1`

## Required actions

1. Confirm the repository, branch, and clean/dirty state. Do not reset, clean, restore, stash, commit, or push.
2. Create this target directory if absent:
   `數學會考作戰室/tools/v2-human-content/batches/001`
3. Copy every file from this package into that directory byte-for-byte. Preserve UTF-8 and LF endings.
4. From the copied batch directory, run:
   `node importer/verify-bundle.mjs`
5. Run:
   `node importer/emit-skill-module.mjs`
6. Do not replace the current U01 production bank. The emitter must only create the staging module under this batch directory.
7. Run `git diff --check` and report all new paths and hashes.
8. Do not modify any question, answer, explanation, lecture, rubric, review, ID, or manifest value.
9. Do not run `author-v2-production-content.mjs`.
10. Do not mark the entire project complete and do not activate V2.

## Stop conditions

Stop without repairing if:
- a SHA-256 mismatch occurs;
- a schema or review check fails;
- a file already exists with different bytes;
- the branch is not the expected branch;
- any command would overwrite current production content.

## Required report

Return:
- repository path and branch;
- pre/post `git status --short`;
- validator output;
- emitted staging module path;
- SHA-256 of every copied file;
- exact diff summary;
- confirmation that no production bank, generator, answer, or review field was changed;
- confirmation that no commit or push occurred.
