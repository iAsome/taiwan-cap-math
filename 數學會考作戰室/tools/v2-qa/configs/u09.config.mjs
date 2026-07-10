export default Object.freeze({
  unitId: "u09",
  acceptedCommit: "d60bdc261c9210465a0a59ede7028c933e305e7f",

  bank: Object.freeze({
    questionCount: 144,
    lectureCount: 12,
    skillCount: 12
  }),

  paths: Object.freeze({
    questionBank: "v2/math-question-bank-v2-u09.js",
    lecture: "v2/math-lecture-v2-u09.js",
    locks: "tools/v2-qa/locks/u09.locks.json"
  }),

  globals: Object.freeze({
    questionBank: "MATH_QUESTION_BANK_V2_U09",
    lecture: "MATH_LECTURE_V2_U09"
  }),

  buildPipeline: Object.freeze([
    "tools/gen-u09-r7-full.mjs",
    "tools/fix-u09-r7.mjs",
    "tools/build-u09-pack.mjs"
  ]),

  legacyReleaseGate: "tools/run-u09-release-gate.mjs",

  reviewArtifacts: Object.freeze({
    dossier: "tools/review-output/u09-review-dossier.jsonl",
    distractor: "tools/review-output/u09-distractor-review.md",
    samples: "tools/review-output/u09-qa4-samples.md"
  }),

  migrationPhase: "foundation-only",

  thresholds: Object.freeze({
    explanationZhMin: 30,
    explanationZhMax: 80,
    stepZhMin: 8,
    lectureExampleWhyZhMin: 40,
    qaSampleCount: 24
  }),

  batches: Object.freeze([])
});
