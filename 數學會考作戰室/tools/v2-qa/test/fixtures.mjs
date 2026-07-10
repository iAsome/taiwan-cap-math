export function questionRecord(overrides = {}) {
  return {
    questionId: "u09-s001-v001",
    unitId: "u09",
    numericUnitId: 9,
    topicId: "u09-data",
    skillId: "data-table-reading",
    difficulty: "basic",
    type: "mc",
    visualMode: "text-only",
    sourceScope: "CAP_108_JUNIOR_MATH",
    title: "讀表",
    text: "題幹",
    choices: ["A", "B", "C", "D"],
    answerIndex: 0,
    explanation: "解析",
    steps: ["步驟1", "步驟2", "步驟3"],
    commonMistake: "常見錯誤說明",
    concept: "概念",
    tags: ["統計"],
    estimatedTimeSec: 45,
    ...overrides
  };
}

export function lectureRecord(overrides = {}) {
  return {
    skillId: "data-table-reading",
    title: "讀表",
    concept: "概念",
    conceptZh: "概念中文",
    formula: "",
    stepGuide: ["步驟1"],
    examples: [{ question: "Q", explanation: "E" }],
    commonMistakes: ["錯誤1"],
    exampleWhyZh: "說明",
    ...overrides
  };
}

export function baseQuestionBank() {
  return [
    questionRecord(),
    questionRecord({ questionId: "u09-s001-v002", text: "題幹2" })
  ];
}

export function baseLectureBank() {
  return [
    lectureRecord(),
    lectureRecord({ skillId: "frequency-table", title: "次數分配" })
  ];
}

export function authorizedQuestionManifest(overrides = {}) {
  return {
    manifestId: "test-qa-auth",
    unitId: "u09",
    entity: "question",
    kind: "authorized-fields",
    baseCommit: "d60bdc261c9210465a0a59ede7028c933e305e7f",
    expected: {
      changedRecords: 1,
      changedFields: 1
    },
    entries: {
      "u09-s001-v001": ["explanation"]
    },
    ...overrides
  };
}

export function exactQuestionManifest(overrides = {}) {
  return {
    manifestId: "test-qa-exact",
    unitId: "u09",
    entity: "question",
    kind: "exact-patch",
    baseCommit: "d60bdc261c9210465a0a59ede7028c933e305e7f",
    allowedFields: ["explanation", "text"],
    expected: {
      changedRecords: 1,
      changedFields: 1
    },
    entries: {
      "u09-s001-v001": { explanation: "新解析" }
    },
    ...overrides
  };
}

export function minimalUnitConfig(overrides = {}) {
  return {
    unitId: "u09",
    acceptedCommit: "d60bdc261c9210465a0a59ede7028c933e305e7f",
    bank: {
      questionCount: 2,
      lectureCount: 2,
      skillCount: 2
    },
    paths: {
      questionBank: "v2/math-question-bank-v2-u09.js",
      lecture: "v2/math-lecture-v2-u09.js",
      locks: "tools/v2-qa/locks/u09.locks.json"
    },
    globals: {
      questionBank: "MATH_QUESTION_BANK_V2_U09",
      lecture: "MATH_LECTURE_V2_U09"
    },
    buildPipeline: ["tools/gen-u09-r7-full.mjs"],
    legacyReleaseGate: "tools/run-u09-release-gate.mjs",
    reviewArtifacts: {
      dossier: "tools/review-output/u09-review-dossier.jsonl",
      distractor: "tools/review-output/u09-distractor-review.md",
      samples: "tools/review-output/u09-qa4-samples.md"
    },
    migrationPhase: "foundation-only",
    thresholds: {
      explanationZhMin: 30,
      explanationZhMax: 80,
      stepZhMin: 8,
      lectureExampleWhyZhMin: 40,
      qaSampleCount: 24
    },
    batches: [],
    ...overrides
  };
}
