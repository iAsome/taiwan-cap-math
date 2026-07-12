# CURSOR INSTRUCTIONS — Math V2 Global Human Content Audit R1

## Purpose

Create the first repository-authoritative global audit across all 24 human-authoring batches covering U01–U23.

This task does not activate production and does not delete or modify any old database.

## Repository requirements

Repository:

`C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1`

Branch:

`chatgpt/math-v2-human-authoring-r1`

Expected HEAD:

`ae4025336dc7ed3f28119c46d300c7a7345b00b3`

Expected latest subject:

`feat(math-v2): add human-authored U23 completion batch`

The working tree must be completely clean.

## Exact procedure

1. Verify branch, HEAD, latest subject and clean status.
2. Extract this kit outside the repository.
3. Copy the extracted kit byte-for-byte to:

   `數學會考作戰室/tools/v2-human-content/global-audit/r1/tooling/`

4. From the copied tooling directory run:

   `node scripts/run-global-audit.mjs --repo "C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1" --output "C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1/數學會考作戰室/tools/v2-human-content/global-audit/r1"`

5. Run the batch verifier matrix:

   `node scripts/run-batch-verifiers.mjs --repo "C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1" --output "C:/Users/iAsom/Documents/GitHub/taiwan-cap-math-u01-u23-full-production-r1/數學會考作戰室/tools/v2-human-content/global-audit/r1"`

6. Run the global audit command one more time so `audit-file-sha256.json` includes the verifier matrix.
7. Confirm all changes are confined to:

   `數學會考作戰室/tools/v2-human-content/global-audit/r1/`

8. Do not edit any batch content in this task, even when the audit reports blockers.
9. Stage only the global audit directory.
10. Commit once with exactly:

    `audit(math-v2): record global human-content audit r1`

11. Push `chatgpt/math-v2-human-authoring-r1`.

## Required behavior

The audit is allowed to return `BLOCKED_BEFORE_PRODUCTION`. That is an expected evidence state, not permission to weaken checks or repair content automatically.

Do not:

- modify U01–U23 batch records;
- activate production;
- modify `數學會考作戰室/v2/`;
- run `author-v2-production-content.mjs`;
- delete or alter V1 or generated V2 content;
- merge or create a pull request;
- reset, clean, stash, amend, rebase or force-push.

## Required report

Return:

1. pre-execution branch, HEAD and clean status;
2. first global-audit console JSON;
3. complete batch-verifier matrix summary and failed batches, if any;
4. second global-audit console JSON;
5. generated audit file paths and SHA-256 values;
6. all changed paths;
7. commit SHA and push result;
8. final clean status;
9. explicit confirmation that production was not activated;
10. explicit confirmation that old content was not imported, combined, modified or deleted.
