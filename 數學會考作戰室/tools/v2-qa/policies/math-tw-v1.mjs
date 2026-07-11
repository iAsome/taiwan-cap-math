const prose = ["公里", "公尺", "公分", "毫米", "平方公尺", "平方公分", "立方公尺", "立方公分", "公升", "毫升", "公斤", "公克", "毫克"];
const symbols = ["km", "m", "cm", "mm", "m²", "cm²", "m³", "cm³", "L", "mL", "kg", "g", "mg"];

export const policy = Object.freeze({
  id: "math-content-standard-tw",
  version: "1.1.0",
  documentPath: "MATH_CONTENT_STANDARD_TW.md",
  authority: ["taiwan-12-year-curriculum", "official-cap", "moe-terminology", "legal-si", "full-score-objective"],
  studentFacingFields: ["title", "text", "choices", "concept", "formula", "explanation", "steps", "commonMistake", "stepGuide", "examples", "commonMistakes", "label", "description"],
  terminology: {
    requiredTraditional: ["組", "場", "操場", "花壇", "給定", "之後", "後項"],
    prohibitedSimplified: ["组", "场", "操场", "花坛", "给", "后"],
    contextualSimplified: ["里"],
    contextualExceptions: [{ token: "里", allowedWithin: ["公里", "里程"] }]
  },
  units: {
    prose,
    symbols,
    families: {
      length: ["公里", "公尺", "公分", "毫米", "km", "m", "cm", "mm"],
      area: ["平方公尺", "平方公分", "m²", "cm²"],
      volume: ["立方公尺", "立方公分", "公升", "毫升", "m³", "cm³", "L", "mL"],
      mass: ["公斤", "公克", "毫克", "kg", "g", "mg"]
    },
    prohibited: ["公釐", "公厘", "厘米", "千米", "平方厘米", "立方厘米", "平米", "千克"],
    chineseNumberSpacing: "optional-zero-or-one-space",
    parallelChoicesMustNotMixPresentation: true,
    normalizeLatinSpacing: false
  },
  notation: {
    numericMultiplication: "×",
    algebraicMultiplication: "juxtaposition",
    inequalities: ["<", ">", "≤", "≥"],
    prohibitedVisible: ["<=", ">="],
    visiblePowerStyle: "superscript",
    preferredMinus: "−",
    ambiguousNumericXPattern: "\\d\\s*x\\s*\\d"
  },
  questionThresholds: { explanationChineseMin: 45, commonMistakeChineseMin: 12, stepsMin: 3 },
  lectureThresholds: { conceptChineseMin: 80, stepGuideMin: 5, examplesMin: 2, commonMistakesMin: 4, exampleWhyChineseMin: 40 },
  lectureExampleSchema: { canonical: ["prompt", "answer", "why"], legacy: ["question", "explanation"] },
  coverage: { advancedPerSkillMin: 1, literacyPerSkillMin: 1 },
  severityPolicy: {
    alwaysBlocking: ["BLOCKER", "HIGH"],
    conditionalMediumCategories: ["correctness", "terminology", "units", "notation", "stem", "unique-answer", "distractor", "explanation", "steps", "lecture", "coverage", "residue", "visual", "scope"],
    lowDefault: "debt-unless-ambiguous-or-misleading"
  },
  legacyPolicy: { releaseBlockingWhileReachable: true, generatedSameStandard: true, englishInstructionRequiresTraditionalChinese: true },
  policyRevalidation: { allMechanicalOnHashChange: true, semanticOnlyAffectedCategoriesAndUnits: true, grandfathering: false, automaticContentChanges: false, automaticLockUpdates: false }
});

export default policy;
