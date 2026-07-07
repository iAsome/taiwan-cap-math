# AI Maintenance Notes

Scope lock:
- Default scope is `數學會考作戰室`.
- Do not touch official downloads: `official-data`, official PDFs, official PNG crops, or ten-year archive source files.

Cleanup policy:
- Root `tmp_*`, `tmp_answers/`, debug logs, and the root `-` file are disposable scratch.
- One-off scripts should live under `tools/_scratch/` and stay ignored unless promoted deliberately.
- Promote a tool only when a tracked verifier, README, or AGENTS rule names it.

Math invariants:
- Mock exam = 25 multiple-choice questions, 80 minutes, no constructed-response questions.
- Student-facing content must stay text-only: questions, handbooks, papers, and explanations.
- Favicons/icons are not part of the student-content no-graphics rule.

Verification ladder:
- Small math/content cleanup: `node tools\qa-smoke.mjs`.
- Text-only/content risk: add `node tools\verify-no-student-images.mjs`.
- Scope risk: add `node tools\verify-curriculum-scope.mjs`.
- Shared/site risk: run `node tools\run-phase0.mjs`.

Publish rule:
- Commit tracked intentional changes and push to `origin/main`.
- After push, confirm `HEAD` equals `origin/main`.
