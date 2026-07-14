# Single final exhaustive audit and corpus policy

## Timing
Run the required audit once globally after all eight subjects, integrated modes, UI strings, and runtime output are frozen. Routine authoring QA does not count.

## Artifact audit
For every final artifact, the reviewer must:
- read the complete artifact;
- inspect its rendered context;
- independently solve/derive/evidence-check all applicable questions and claims;
- verify every answer and distractor;
- verify curriculum mapping, pedagogy, language, copyright, fairness, safety, and accessibility;
- record findings and their resolution;
- bind acceptance to the exact artifact SHA-256.

Any student-visible change invalidates that artifact's acceptance. Correct it and repeat the complete final audit for that artifact at the new hash.

## Corpus proof
Build a canonical deterministic UTF-8 `student-visible-corpus.txt`. Create range records with artifact ID, final artifact SHA-256, start/end offsets, final-audit record ID, and status. Require full nonoverlapping coverage of every student-visible character, excluding only schema-declared machine separators. Zero unaudited ranges are allowed.

## Invalid review methods
Sampling, wildcard approval, folder-level declarations, inherited status, automatic PASS generation, spellcheck-only review, unit-test-only review, or approval based only on author summaries are invalid.
