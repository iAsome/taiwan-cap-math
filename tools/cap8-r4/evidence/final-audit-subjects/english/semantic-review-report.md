# English CAP R4 Final Exhaustive Semantic Review

## Final-hash scope

- Review date: 2026-07-18
- Reviewer: fresh-context English CAP R4 exhaustive semantic and rendered-context reviewer
- Manifest subject: english
- External artifacts reviewed: 8,258
- Lectures: 320
- Questions independently solved or evidence-checked: 6,740
- Reading and listening stimuli: 800 (500 reading passages, 300 listening scripts)
- Assets: 342 (42 original SVG figures, 300 deterministic WAV files)
- UI aggregates: 56
- Unresolved findings: 0

This review restarted from the rebuilt hashes after the `a umbrella` source repair. Earlier acceptance was not reused. Every accepted record in `final-audit-records.json` is bound to the current manifest descriptor SHA-256, and every corpus byte is covered once by `student-visible-corpus-ranges.json`.

## Exhaustive semantic work

- Read the final student-visible fields from all 320 lectures, 6,740 questions, 500 readings, 300 listening records, 42 SVG descriptions, 300 audio bindings, and 56 UI aggregates.
- Re-solved all 6,740 questions against their actual stems, options, source evidence, answer indices, and option rationales. The reverse-semantic gate confirmed 6,740 unique evidence-bound constructions; the 500 reading sets and 100 picture-listening sets independently resolved from locked evidence.
- Independently reverse-solved all 200 response/discourse listening stimuli and their 600 questions across 20 reviewed dialogue/discourse families. Result: zero answer mismatches and zero duplicate expected answers.
- Verified all 300 transcripts equal spoken text. Regenerated all 300 WAV files and compared the bytes exactly; every file is 22,050 Hz mono 16-bit RIFF. Total reviewed duration was 5,971.898 seconds.
- Rendered and visually inspected all 42 original black-and-white SVG figures in contact sheets. Labels, geometry, caption, alt text, long description, data fallback, print use, and color-independent interpretation agreed.
- Checked vocabulary against the governed CAP vocabulary authority. All 2,230 runtime glossary tokens were mapped and context-reviewed; the 2,308-entry authority glossary had zero remaining malformed/context-defective flags.
- Compared final authored text with 19 official English materials covering 106-115, 196 extracted pages and 30,220 official 16-word fingerprints. Exact 16-word overlap: 0.

## Findings repaired before acceptance

- Re-authored 46 reading question anchors whose title replacement had produced unnatural `this subject` stems; the new anchors use non-answer-leaking sentences from the actual passage.
- Converted the remaining U38 Simplified Chinese teaching text to natural Traditional Chinese and corrected over-converted classroom forms.
- Repaired malformed or context-inappropriate English stimulus glossary translations, then rechecked every runtime use.
- Replaced one shared U42 misconception scaffold with six separately authored, skill-specific sets for timetable, menu, legend, chart reading, chart-to-sentence, and integrated-sheet reasoning.
- Corrected singular visual fallback wording from `1 people` to `1 person` in U47.
- Confirmed zero occurrences of `a umbrella` across the final 8,420 scanned English text artifacts.

## Grammar, scope, originality, and accessibility

- Student language is within the Taiwan junior-high CAP scope governed by the current fourth-learning-stage authority graph and official Appendix 5 Table 1 vocabulary rules.
- Deliberately malformed forms occur only as explicit distractors or grammar examples and are explained as incorrect; no malformed form is presented as a correct model.
- No copied official-paper passage or question was found. Provenance remains original project wording with official papers used only for scope and cognitive calibration.
- Browser review passed the R4 shell, keyboard navigation, responsive menu, static practice, reading, listening visuals/audio, answer flow, print, offline corpus, and legacy-progress migration checks.

## Determinism and tests

- Deterministic rebuild run 1: 8,690 generated files, combined SHA-256 `e968a2b949febf1ea41ccbbfe57690f37e981e8b8a63f77c4f941e172ebec2ea`.
- Deterministic rebuild run 2: 8,690 generated files, combined SHA-256 `e968a2b949febf1ea41ccbbfe57690f37e981e8b8a63f77c4f941e172ebec2ea`.
- `english-corpus-audit.test.mjs`: 3/3 passed.
- `english-reverse-semantic-gate.test.mjs`: 4/4 passed.
- `english-u08-content.test.mjs`: 30/30 passed.
- `english-browser-gate.test.mjs`: 3/3 passed.
- Independent response/discourse listening review: 200 stimuli, 600 questions, 20 families, 0 mismatches.

## Acceptance boundary

The English subject has no unresolved grammar, mathematical/logical answer, CAP-scope, vocabulary, copyright, audio/script, figure, accessibility, browser, offline, migration, or deterministic-build finding at the hashes bound by these evidence files. This subject record does not accept, release, commit, or publish any other subject.
