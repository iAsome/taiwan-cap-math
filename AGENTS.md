# AGENTS.md

## Current Focus

- The active task is the CAP R4 rebuild of English, Chinese, Geography, History, Civics, Biology, Physics/Chemistry, Earth Science, integrated Social, and integrated Natural Science.
- The archived R4 package under `tools/cap8-r4/specification/` is the binding execution specification for this branch. Package corrections are recorded separately and must not rewrite archived evidence.
- Mathematics content is outside the R4 authoring scope. Math V2 may change only when an explicit regression-gate repair is required and no student-facing mathematics content changes.
- Mathematics is nevertheless part of the single final exhaustive audit: every final student-visible Math V2 artifact and rendered page must be read, independently solved or evidence-checked, and hash-bound before release.
- Non-math student content may and should use original accessible figures, maps, tables, charts, experiment diagrams, and listening audio when the subject requires them. Every visual or audio asset needs an accessible alternative and provenance record.
- Final questions and lectures must be statically materialized. Runtime code may select or order reviewed IDs but must not create student-facing prose, vary numbers, splice sentences, or fabricate fallback questions.
- Official fourth-learning-stage curriculum material defines scope. Official CAP 106-115 material calibrates assessment form and demand. Publisher and cram-school resources are secondary references only: they may reveal omissions or teaching approaches but must not expand official scope, and unlicensed content must not be copied.
- `main` and the public website remain frozen until the complete R4 global release gate passes from a clean checkout.

## Required Workflow

- Work only on `codex/cap-eight-subject-one-shot-r4` in its dedicated clean worktree while R4 is active.
- Preserve resumable state in `tools/cap8-r4/execution-state.json` and keep evidence deterministic and hash-addressed.
- Run the smallest relevant checks first, then the subject and global gates affected by the change.
- Always inspect `git status` before committing. Stage only intentional files.
- Checkpoint commits may be pushed only to the R4 branch. Do not update `main`, publish Pages, or create a release tag before the full release gate passes.
- A validation failure blocks the affected checkpoint or release; it must not be hidden, waived, or converted into an automatic semantic approval.

## Cleanup Guardrails

- Do not delete official PDFs, `official-data`, official audio, or ten-year official download content.
- Do not delete unrelated untracked files or modify another worktree.
- Do not remove legacy student data keys. Back them up and migrate them without silent data loss.

## Mathematics Content Authority

- `MATH_CONTENT_STANDARD_TW.md` is the sole normative authority for all student-facing mathematics content.
- `數學會考作戰室/tools/v2-qa/policies/math-tw-v1.mjs` is only the deterministic machine-readable adapter for that document and must not contain an independently editable policy.
- ChatGPT owns mathematics, pedagogy, terminology, notation, acceptance, migration and release decisions.
- Executors may modify mathematics content only through an explicitly authorized task with fixed refs and declared file scope.
- Previously accepted mathematics content is not exempt from a newer policy version or policy hash.
- A required validation failure prohibits commit and push.
- Completion means reporting results and stopping; executors must not autonomously begin another task, create a pull request or merge.
