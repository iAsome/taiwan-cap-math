# Math Content Standard TW v1

Policy ID: `math-content-standard-tw`
Policy version: `1.0.0`

This document is the sole normative authority for all student-facing mathematics content in this repository. The machine adapter identifies deterministic checks but does not replace this document.

## 1. Authority And Scope

1. Content MUST follow, in order, the current Taiwan twelve-year basic education mathematics curriculum, official Comprehensive Assessment Program scope and released materials, Ministry of Education terminology, applicable legal measurement-unit conventions, and this project's stricter full-score teaching objective.
2. Content MUST identify its learning stage and MUST remain within that stage's curriculum unless the stem supplies every additional fact needed.
3. Previously accepted, legacy, generated, or locked content MUST NOT be grandfathered against a newer policy version or hash.
4. Mechanical validation MUST NOT claim to establish semantic mathematical correctness. Mathematics, pedagogy, acceptance, migration, and release decisions remain human decisions owned by ChatGPT.

## 2. Language And Taiwan Terminology

1. Student-facing content MUST use Traditional Chinese and Taiwan classroom terminology.
2. Canonical forms include 組, 場, 操場, 花壇, 給定, 之後, and 後項.
3. Student-facing content MUST NOT use Simplified Chinese forms such as `组`, `场`, `操场`, `花坛`, `给`, or `后` where the Traditional form is intended.
4. Simplified-Chinese detection MUST be contextual. In particular, `里` inside the canonical unit `公里` MUST NOT be reported.
5. Passing a character or length check MUST NOT excuse padding, repetition, copied templates, or machine residue.

## 3. Measurement Units

1. Canonical Taiwan prose units are 公里, 公尺, 公分, 毫米, 平方公尺, 平方公分, 立方公尺, 立方公分, 公升, 毫升, 公斤, 公克, and 毫克.
2. Canonical symbols are `km`, `m`, `cm`, `mm`, `m²`, `cm²`, `m³`, `cm³`, `L`, `mL`, `kg`, `g`, and `mg`.
3. Student-facing content MUST NOT use 公釐, 公厘, 厘米, 千米, 平方厘米, 立方厘米, 平米, or 千克.
4. Chinese prose units MUST attach directly to the number, for example `3公尺`.
5. Latin symbols MAY be used in formulas and choices. Parallel choices MUST NOT mix Chinese unit names and Latin symbols.
6. Latin-symbol spacing in prose MUST be internally consistent. Version 1 MUST NOT destructively normalize spacing.
7. Quantities and choices MUST use compatible dimensions, precision, and unit type.

## 4. Mathematical Notation

1. Numeric multiplication MUST use `×`; algebraic multiplication MUST use juxtaposition such as `3x`.
2. A lowercase `x` MUST NOT be used ambiguously as a numeric multiplication sign.
3. Visible inequalities MUST use `<`, `>`, `≤`, or `≥`; visible output MUST NOT use `<=` or `>=`.
4. Visible powers MUST use superscripts such as `x²` rather than source-style caret notation.
5. Visible negative numbers SHOULD use mathematical minus `−` where supported.
6. Roots, fractions, ratios, percentages, coordinates, equality, and inequalities MUST have unambiguous scope and consistent rendering.
7. A denominator MUST be nonzero. Domain restrictions for roots, denominators, functions, and equations MUST be stated when needed.
8. Coefficients include their signs. Polynomial degree, like terms, variables, coordinates, functions, graphs, transformations, congruence, similarity, statistics, probability, and data terminology MUST follow Taiwan junior-high usage.
9. Mathematical expressions MUST use consistent spacing and Chinese punctuation. Formatting MUST NOT change mathematical meaning.

## 5. Questions And Choices

1. Every stem MUST be complete and contain sufficient information.
2. Generic stems such as `下列何者正確？` MAY be used only when every choice is a complete proposition and exactly one is defensible.
3. Every multiple-choice question MUST have exactly one correct answer. `answerIndex` MUST be an in-range integer resolving to that answer.
4. Choices MUST use consistent type, unit, dimension, and presentation.
5. Explanations MUST derive the answer and MUST contain at least 45 Chinese characters.
6. Every distractor discussed in an explanation MUST exist. Claims about how it was produced MUST be truthful and reproducible.
7. Steps MUST be correct, ordered, non-contradictory, and contain at least three entries.
8. `commonMistake` MUST contain at least 12 Chinese characters and describe a plausible student error rather than generic advice.
9. Question fields MUST NOT contradict one another.
10. Difficulty MUST reflect reasoning depth, concept integration, and distractor quality. It MUST NOT be produced by meaningless number substitution or padding.
11. Every skill MUST eventually include at least one advanced question and one literacy question. Missing coverage is a finding and MUST NOT be filled with artificial variants.

## 6. Visual And Literacy Requirements

1. A text-only record MUST be solvable without an unstated image.
2. Image-language markers such as `如圖` or `下圖` MUST have declared visual metadata and an accessible equivalent.
3. Visual content MUST preserve all mathematical relationships required to solve the question.
4. Literacy contexts MUST be authentic, internally consistent, age-appropriate, and mathematically necessary. Decorative stories that do not change the reasoning SHOULD be removed.

## 7. Lectures

1. A lecture title, concept, formula, and examples MUST be mathematically accurate and aligned with its question skill.
2. `concept` MUST contain at least 80 Chinese characters.
3. `stepGuide` MUST contain at least five ordered entries.
4. Every lecture MUST contain at least two examples and four plausible common mistakes.
5. Every example prompt and answer MUST be correct, and every example `why` MUST contain at least 40 Chinese characters.
6. Formulas MUST state necessary conditions and MUST NOT be overgeneralized.
7. Lecture prose MUST NOT copy question explanations as padding.

## 8. Residue, Legacy, And UI

1. Student-facing content MUST NOT contain generator labels, placeholders, debug text, repeated filler, duplicated sentences, exact duplicate steps, or other machine residue.
2. Legacy taxonomy, lecture, variant, question, and UI content remains release-blocking while reachable by the student-facing application.
3. Generated content MUST satisfy the same policy as its authoritative source. Generated files MUST NOT silently become an independent source of truth.
4. Instructional or operational UI meaning MUST be available in Traditional Chinese. Decorative English MAY remain only when paired with a clear Chinese label. Unpaired or confusing English labels are findings.

## 9. Severity And Release Behavior

1. BLOCKER findings always block.
2. HIGH findings always block.
3. MEDIUM findings block when related to correctness, terminology, units, notation, stem completeness, unique answers, distractor truthfulness, hidden visual dependency, or curriculum scope.
4. LOW findings are recorded as debt unless they cause ambiguity or misinformation.
5. A release gate MUST fail closed on malformed policy, task, ref, bank, or internal checker errors.
6. Policy findings are audit results, not runner crashes. No checker may automatically alter content or declare acceptance.

## 10. Versioning, Revalidation, And Hash Locks

1. The policy version and SHA-256 hash MUST be recorded in every audit task and release metadata.
2. The policy hash MUST cover this document's raw bytes and the deterministically serialized public adapter data.
3. A policy-hash change MUST rerun every mechanical check for every unit.
4. Human semantic re-review is required only for affected policy categories and units, but no student-facing content is grandfathered.
5. Content locks and policy locks MUST be separate.
6. Gates MUST NOT write or update content hashes, policy hashes, manifests, or release locks automatically.
7. Lock changes require an explicitly authorized human task. Validation failure prohibits commit and push.
