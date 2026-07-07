# AGENTS.md

## Current Focus

- Only change `英文會考作戰室` unless the user explicitly expands scope.
- English chapter quizzes are 20 multiple-choice questions, 20 minutes: 15 grammar/usage questions plus 5 vocabulary-usage questions, with no reading groups.
- English review quizzes are 50 multiple-choice questions, 50 minutes: 34 grammar/usage questions, 10 vocabulary-usage questions, plus two reading groups of 3 questions.
- English quiz question text and choices must be English-only; explanations should use Chinese reasoning, translation, and right/wrong analysis.
- English vocabulary questions may test English definitions, context, word forms, collocations, and phrase use, but must not use English-Chinese translation matching.
- English quiz questions must not repeat by visible text, choices, `templateKey`, or tested `targetKey` within the same seed across the full English quiz catalog.
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
