# AGENTS.md

## Current Focus

- Only change `英文會考作戰室` unless the user explicitly expands scope.
- English quizzes are 50 multiple-choice questions, 50 minutes.
- English quizzes only test the selected unit/domain grammar, part-of-speech, sentence patterns, collocations, morphology, and usage.
- English quizzes must not test vocabulary translation or require 2000-word coverage; a separate vocabulary exam may be planned later.
- English reading sets are allowed only for unit 15 and unit 16 quizzes.
- Math mock exams are 25 multiple-choice questions, 80 minutes, no constructed-response questions.
- The no-graphics rule applies to student-facing content: questions, handbooks, papers, and explanations. Favicons/icons are allowed.

## Required Workflow

- Before editing, sync local `main` with `origin/main`.
- After editing, run the smallest relevant checks first, then broader checks if the change can affect shared behavior.
- Always inspect `git status` before committing.
- Commit intentional tracked changes and push to GitHub.
- After pushing, confirm local `main` and `origin/main` point to the same commit.

## Cleanup Guardrails

- Do not delete official PDFs, `official-data`, or ten-year official download content.
- Do not delete untracked `tmp_*`, debug logs, or scratch tools until the user confirms the cleanup list.
