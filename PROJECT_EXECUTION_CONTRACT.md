# Project Execution Contract

Normative rules governing math-v2 QA tooling work in this repository.

## 1. Authority and decision ownership

ChatGPT owns all content, pedagogy, mathematics, architecture, UI, acceptance, and release decisions.

An implementation executor (for example Cursor) may write code only within an explicitly scoped task. The executor does not decide what to ship, what thresholds apply, or how units migrate.

## 2. One executor / one worktree / one branch / one active task

Each implementation task runs in exactly one dedicated worktree, on exactly one branch, with exactly one active task identifier.

Mixing tasks, branches, or worktrees in a single implementation session is prohibited.

## 3. Task supersession

When a new task instruction conflicts with an older instruction, the newest task instruction wins.

The executor must not continue work from a superseded task without a new explicit assignment.

## 4. Mandatory pre-flight

Before editing, the executor must verify:

- correct repository and worktree path;
- correct branch name;
- correct starting commit SHA when specified;
- clean tracked working tree when required;
- branch and worktree resolve to the specified starting commit when creating new infrastructure.

If pre-flight checks fail, stop before editing.

## 5. Allowed-file scope

Each task lists the only files that may be added or changed.

Editing any file outside that list is prohibited unless a later task explicitly expands scope.

## 6. Stop-before-edit conditions

Stop before commit when any of the following occur:

- ambiguous or conflicting instructions;
- required file missing;
- unexpected diff in a file outside allowed scope;
- required validation command fails;
- starting commit or branch does not match the task specification.

Report the blocker and wait for ChatGPT direction.

## 7. Validation failure policy

Required validation failure prohibits commit and push.

Fix only within allowed scope, re-run all required validations, and stop if failure persists.

## 8. Git mutation restrictions

Unless a task explicitly authorizes it, the executor must not:

- merge;
- rebase;
- cherry-pick;
- force-push;
- create a pull request;
- start the next phase or task autonomously.

Commit and push happen only when the active task explicitly requires them and all required validations pass.

## 9. Accepted-commit immutability

Accepted commits are immutable reference points.

Corrections to accepted content or locks use new commits. History is not rewritten to fix acceptance.

## 10. Manifest ownership

Manifests record authorized or exact scope for a batch at a fixed `baseCommit`.

Manifest ownership belongs to the architecture process led by ChatGPT. The executor implements schema and validation; the executor does not invent batch scope or pedagogy.

## 11. Historical checker lifecycle

Historical per-batch commit-scope checkers document frozen batch boundaries.

They are not cumulative release checks. Cumulative enforcement is a separate, explicitly configured concern.

Deprecation or deletion of historical checkers requires an explicit later task and ChatGPT approval.

## 12. Deterministic generation

QA tools must produce deterministic output for fixed inputs:

- stable ordering in reports and diff records;
- no reliance on wall-clock time, randomness, or locale-dependent formatting in validation output;
- subprocess invocation via `execFileSync` with argument arrays only.

## 13. Hash-lock policy

Hash validation never rewrites locks.

Hash writing is a separate explicit operation and is not implemented in the release validator.

Lock files are read-only inputs during validation phases unless a task explicitly implements and authorizes lock writing.

## 14. Release-gate policy

A release gate runs the authorized pipeline, validates artifacts, compares hash locks, and verifies repository cleanliness.

Gate behavior changes require an explicit task. The executor does not autonomously add workflows, change gate pipelines, or alter accepted locks.

## 15. Required completion report

Task completion requires a structured report covering:

- worktree, branch, and commit SHAs;
- files added or changed;
- validation results;
- confirmation of scope compliance;
- blockers or decisions still required from ChatGPT.

Completion means report and stop.

## 16. Prohibited autonomous follow-up

After reporting completion, the executor must not autonomously:

- begin the next phase;
- migrate additional units;
- modify legacy checkers or gates;
- open pull requests;
- merge branches.

Wait for the next explicit task from ChatGPT.
