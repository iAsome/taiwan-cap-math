const severities = { BLOCKER: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };
const zh = /[\u3400-\u9fff]/g;
const imageMarkers = ["如圖", "下圖", "上圖", "右圖", "左圖", "附圖", "示意圖", "看圖"];
const residue = ["TODO", "FIXME", "undefined", "NaN", "[object Object]", "請再核對一次", "依題意即可"];
const requiredQuestionFields = ["questionId", "unitId", "skillId", "difficulty", "text", "choices", "answerIndex", "explanation", "steps", "commonMistake"];
const requiredLectureFields = ["unitId", "skillId", "title", "concept", "formula", "stepGuide", "examples", "commonMistakes"];
const canonicalExampleKeys = ["prompt", "answer", "why"];
const legacyExampleKeys = ["question", "explanation"];

export function chineseCount(value) {
  return (String(value ?? "").match(zh) ?? []).length;
}

export function sortFindings(findings) {
  return [...findings].sort((a, b) =>
    (severities[a.severity] - severities[b.severity]) ||
    ordinal(`${a.unit}\0${a.path}\0${a.recordId}\0${a.field}\0${a.rule}`, `${b.unit}\0${b.path}\0${b.recordId}\0${b.field}\0${b.rule}`)
  );
}

function ordinal(a, b) { return a < b ? -1 : a > b ? 1 : 0; }

function finding({ unit = "GLOBAL", path = "", recordId = "", field = "", severity, category, rule, evidence = "", kind = "mechanical" }) {
  return { unit, path, recordId, field, severity, category, rule, evidence: String(evidence).slice(0, 180), kind };
}

function strings(value, field = "", out = []) {
  if (typeof value === "string") out.push({ field, value });
  else if (Array.isArray(value)) value.forEach((item, i) => strings(item, `${field}[${i}]`, out));
  else if (value && typeof value === "object") Object.entries(value).forEach(([key, item]) => strings(item, field ? `${field}.${key}` : key, out));
  return out;
}

export function selectStudentFacing(record, policy) {
  return Object.fromEntries(policy.studentFacingFields.filter(field => field in record).map(field => [field, record[field]]));
}

function enabled(checks, check) { return checks.has(check); }

function familyOfUnit(unit, policy) {
  for (const [family, units] of Object.entries(policy.units.families)) if (units.includes(unit)) return family;
  return null;
}

function escapeRegex(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function classifyChoiceMeasurement(choice, policy) {
  const text = String(choice ?? "").trim();
  if (!text) return null;
  for (const unit of [...policy.units.prose].sort((a, b) => b.length - a.length)) {
    const match = text.match(new RegExp(`^(\\d+(?:\\.\\d+)?)(?:\\s*)(${escapeRegex(unit)})$`));
    if (match) return { family: familyOfUnit(unit, policy), presentation: "chinese", unit, confident: true };
  }
  for (const unit of [...policy.units.symbols].sort((a, b) => b.length - a.length)) {
    const match = text.match(new RegExp(`^(\\d+(?:\\.\\d+)?)\\s*(${escapeRegex(unit)})$`));
    if (match) return { family: familyOfUnit(unit, policy), presentation: "latin", unit, confident: true };
  }
  return null;
}

function exampleSchema(example) {
  const keys = Object.keys(example ?? {});
  const canonical = canonicalExampleKeys.every(key => keys.includes(key));
  const legacy = legacyExampleKeys.every(key => keys.includes(key));
  const canonicalOnly = canonical && !legacyExampleKeys.some(key => keys.includes(key));
  const legacyOnly = legacy && !canonicalExampleKeys.some(key => keys.includes(key));
  if (canonicalOnly) return "canonical";
  if (legacyOnly) return "legacy";
  return "mixed";
}

function auditLectureExamples(lecture, context, policy, findings) {
  const examples = lecture.examples ?? [];
  const schemas = examples.map(example => exampleSchema(example));
  const whyMin = policy.lectureThresholds.exampleWhyChineseMin;
  if (schemas.some(schema => schema === "mixed")) {
    examples.forEach((example, i) => {
      if (exampleSchema(example) === "mixed") findings.push(finding({ ...context, field: `examples[${i}]`, severity: "BLOCKER", category: "lecture", rule: "lecture-example-schema", evidence: `keys=${Object.keys(example).sort().join(",")}` }));
    });
    return;
  }
  if (new Set(schemas).size > 1) {
    examples.forEach((example, i) => findings.push(finding({ ...context, field: `examples[${i}]`, severity: "BLOCKER", category: "lecture", rule: "lecture-example-schema", evidence: `keys=${Object.keys(example).sort().join(",")}` })));
    return;
  }
  if (schemas.every(schema => schema === "canonical")) {
    examples.forEach((example, i) => {
      if (!String(example.prompt ?? "").trim()) findings.push(finding({ ...context, field: `examples[${i}].prompt`, severity: "BLOCKER", category: "lecture", rule: "lecture-example-schema", evidence: `keys=${Object.keys(example).sort().join(",")}` }));
      if (!String(example.answer ?? "").trim()) findings.push(finding({ ...context, field: `examples[${i}].answer`, severity: "BLOCKER", category: "lecture", rule: "lecture-example-schema", evidence: `keys=${Object.keys(example).sort().join(",")}` }));
      if (chineseCount(example.why) < whyMin) findings.push(finding({ ...context, field: `examples[${i}].why`, severity: "MEDIUM", category: "lecture", rule: "lecture-example-why-min", evidence: chineseCount(example.why) }));
    });
    return;
  }
  if (schemas.every(schema => schema === "legacy")) {
    const indexes = examples.map((_, i) => i);
    findings.push(finding({ ...context, field: "examples", severity: "MEDIUM", category: "lecture", rule: "legacy-lecture-example-schema", evidence: `count=${examples.length};indexes=${indexes.join(",")}` }));
    examples.forEach((example, i) => {
      if (chineseCount(example.explanation) < whyMin) findings.push(finding({ ...context, field: `examples[${i}].explanation`, severity: "MEDIUM", category: "lecture", rule: "lecture-example-explanation-min", evidence: chineseCount(example.explanation) }));
    });
    return;
  }
  examples.forEach((example, i) => {
    if (exampleSchema(example) === "mixed") findings.push(finding({ ...context, field: `examples[${i}]`, severity: "BLOCKER", category: "lecture", rule: "lecture-example-schema", evidence: `keys=${Object.keys(example).sort().join(",")}` }));
  });
}

function textChecks(value, context, policy, findings, requiresHumanReview, checks) {
  for (const { field, value: text } of strings(value)) {
    if (enabled(checks, "terminology")) {
      for (const token of policy.terminology.prohibitedSimplified) {
        if (text.includes(token)) findings.push(finding({ ...context, field, severity: "HIGH", category: "terminology", rule: "prohibited-token", evidence: token }));
      }
      for (const token of policy.terminology.contextualSimplified) {
        let remaining = text;
        for (const exception of policy.terminology.contextualExceptions.filter(item => item.token === token).flatMap(item => item.allowedWithin)) remaining = remaining.split(exception).join("");
        if (remaining.includes(token)) findings.push(finding({ ...context, field, severity: "HIGH", category: "terminology", rule: "contextual-simplified-token", evidence: token }));
      }
    }
    if (enabled(checks, "units")) {
      for (const token of policy.units.prohibited) if (text.includes(token)) findings.push(finding({ ...context, field, severity: "HIGH", category: "units", rule: "prohibited-unit", evidence: token }));
    }
    if (enabled(checks, "notation")) {
      for (const token of policy.notation.prohibitedVisible) if (text.includes(token)) findings.push(finding({ ...context, field, severity: "MEDIUM", category: "notation", rule: "prohibited-visible-notation", evidence: token }));
      if (new RegExp(policy.notation.ambiguousNumericXPattern).test(text)) {
        findings.push(finding({ ...context, field, severity: "MEDIUM", category: "notation", rule: "ambiguous-numeric-x", evidence: text }));
        requiresHumanReview.push(finding({ ...context, field, severity: "MEDIUM", category: "notation", rule: "ambiguous-numeric-x-review", evidence: text, kind: "requiresHumanReview" }));
      }
    }
    if (enabled(checks, "duplicates")) for (const token of residue) if (text.includes(token)) findings.push(finding({ ...context, field, severity: "MEDIUM", category: "residue", rule: "machine-residue", evidence: token }));
  }
}

function unitPresentation(choices, context, policy, findings, requiresHumanReview) {
  const classifications = choices.map(choice => classifyChoiceMeasurement(choice, policy));
  const confident = classifications.filter(Boolean);
  if (confident.some(item => item.presentation === "chinese") && confident.some(item => item.presentation === "latin")) {
    findings.push(finding({ ...context, field: "choices", severity: "MEDIUM", category: "units", rule: "mixed-unit-presentation", evidence: choices.join(" | ") }));
  }
  if (classifications.every(Boolean) && new Set(classifications.map(item => item.family)).size > 1) {
    const families = classifications.map(item => item.family).join(",");
    requiresHumanReview.push(finding({
      ...context, field: "choices", severity: "MEDIUM", category: "units", rule: "mixed-unit-dimensions-review",
      evidence: `${choices.join(" | ")} :: families=${families}`, kind: "requiresHumanReview"
    }));
  }
}

function duplicateSentences(text) {
  const parts = String(text ?? "").split(/[\u3002！？!?\n]+/).map(x => x.trim()).filter(x => x.length >= 8);
  return [...new Set(parts.filter((x, i) => parts.indexOf(x) !== i))];
}

export function auditQuestionBank({ unit, path, questions, policy, checks = new Set(["schema", "thresholds", "terminology", "units", "notation", "duplicates", "visual", "coverage"]) }) {
  const mechanical = [], requiresHumanReview = [], ids = new Set(), skillDifficulty = new Map();
  for (const q of questions) {
    const context = { unit, path, recordId: q.questionId ?? "" };
    if (!q.questionId || ids.has(q.questionId)) mechanical.push(finding({ ...context, severity: "BLOCKER", category: "schema", rule: "duplicate-or-missing-question-id", evidence: q.questionId }));
    ids.add(q.questionId);
    for (const field of requiredQuestionFields) if (!(field in q)) mechanical.push(finding({ ...context, field, severity: "BLOCKER", category: "schema", rule: "missing-required-field" }));
    if (!Array.isArray(q.choices) || !Number.isInteger(q.answerIndex) || q.answerIndex < 0 || q.answerIndex >= (q.choices?.length ?? 0)) mechanical.push(finding({ ...context, field: "answerIndex", severity: "BLOCKER", category: "unique-answer", rule: "answer-index-range", evidence: q.answerIndex }));
    else if (q.correctChoice !== undefined && q.correctChoice !== q.choices[q.answerIndex]) mechanical.push(finding({ ...context, field: "correctChoice", severity: "BLOCKER", category: "unique-answer", rule: "correct-choice-mismatch", evidence: q.correctChoice }));
    if (enabled(checks, "thresholds")) {
      if (chineseCount(q.explanation) < policy.questionThresholds.explanationChineseMin) mechanical.push(finding({ ...context, field: "explanation", severity: "MEDIUM", category: "explanation", rule: "question-explanation-min", evidence: chineseCount(q.explanation) }));
      if (chineseCount(q.commonMistake) < policy.questionThresholds.commonMistakeChineseMin) mechanical.push(finding({ ...context, field: "commonMistake", severity: "MEDIUM", category: "distractor", rule: "common-mistake-min", evidence: chineseCount(q.commonMistake) }));
      if (!Array.isArray(q.steps) || q.steps.length < policy.questionThresholds.stepsMin) mechanical.push(finding({ ...context, field: "steps", severity: "MEDIUM", category: "steps", rule: "question-steps-min", evidence: q.steps?.length ?? 0 }));
    }
    if (enabled(checks, "duplicates")) {
      if (Array.isArray(q.steps) && new Set(q.steps).size !== q.steps.length) mechanical.push(finding({ ...context, field: "steps", severity: "MEDIUM", category: "residue", rule: "duplicate-exact-step", evidence: q.steps.join(" | ") }));
      for (const sentence of duplicateSentences(q.explanation)) mechanical.push(finding({ ...context, field: "explanation", severity: "MEDIUM", category: "residue", rule: "duplicate-explanation-sentence", evidence: sentence }));
    }
    if (enabled(checks, "visual") && imageMarkers.some(marker => String(q.text).includes(marker)) && !q.visual && q.visualMode !== "visual") {
      mechanical.push(finding({ ...context, field: "text", severity: "MEDIUM", category: "visual", rule: "undeclared-image-dependency", evidence: q.text }));
      requiresHumanReview.push(finding({ ...context, field: "text", severity: "MEDIUM", category: "visual", rule: "undeclared-image-dependency-review", evidence: q.text, kind: "requiresHumanReview" }));
    }
    textChecks(selectStudentFacing(q, policy), context, policy, mechanical, requiresHumanReview, checks);
    if (enabled(checks, "units") && Array.isArray(q.choices)) unitPresentation(q.choices, context, policy, mechanical, requiresHumanReview);
    if (/^下列何者正確？?$/.test(String(q.text).trim())) requiresHumanReview.push(finding({ ...context, field: "text", severity: "MEDIUM", category: "stem", rule: "generic-stem-review", evidence: q.text, kind: "requiresHumanReview" }));
    const levels = skillDifficulty.get(q.skillId) ?? new Set(); levels.add(q.difficulty); skillDifficulty.set(q.skillId, levels);
  }
  if (enabled(checks, "coverage")) for (const [skillId, levels] of skillDifficulty) {
    for (const level of ["advanced", "literacy"]) if (!levels.has(level)) mechanical.push(finding({ unit, path, recordId: skillId, field: "difficulty", severity: "MEDIUM", category: "coverage", rule: `missing-${level}-coverage`, evidence: [...levels].sort().join(",") }));
  }
  return { mechanical: sortFindings(mechanical), requiresHumanReview: sortFindings(requiresHumanReview) };
}

export function auditLectureBank({ unit, path, lectures, policy, checks = new Set(["schema", "thresholds", "terminology", "units", "notation", "duplicates", "visual", "coverage"]) }) {
  const mechanical = [], requiresHumanReview = [], ids = new Set();
  for (const lecture of lectures) {
    const context = { unit, path, recordId: lecture.skillId ?? "" };
    if (!lecture.skillId || ids.has(lecture.skillId)) mechanical.push(finding({ ...context, severity: "BLOCKER", category: "schema", rule: "duplicate-or-missing-lecture-skill-id", evidence: lecture.skillId }));
    ids.add(lecture.skillId);
    for (const field of requiredLectureFields) if (!(field in lecture)) mechanical.push(finding({ ...context, field, severity: "BLOCKER", category: "schema", rule: "missing-required-field" }));
    if (enabled(checks, "thresholds")) {
      const t = policy.lectureThresholds;
      if (chineseCount(lecture.concept) < t.conceptChineseMin) mechanical.push(finding({ ...context, field: "concept", severity: "MEDIUM", category: "lecture", rule: "lecture-concept-min", evidence: chineseCount(lecture.concept) }));
      if (!Array.isArray(lecture.stepGuide) || lecture.stepGuide.length < t.stepGuideMin) mechanical.push(finding({ ...context, field: "stepGuide", severity: "MEDIUM", category: "lecture", rule: "lecture-step-guide-min", evidence: lecture.stepGuide?.length ?? 0 }));
      if (!Array.isArray(lecture.examples) || lecture.examples.length < t.examplesMin) mechanical.push(finding({ ...context, field: "examples", severity: "MEDIUM", category: "lecture", rule: "lecture-examples-min", evidence: lecture.examples?.length ?? 0 }));
      if (!Array.isArray(lecture.commonMistakes) || lecture.commonMistakes.length < t.commonMistakesMin) mechanical.push(finding({ ...context, field: "commonMistakes", severity: "MEDIUM", category: "lecture", rule: "lecture-common-mistakes-min", evidence: lecture.commonMistakes?.length ?? 0 }));
      auditLectureExamples(lecture, context, policy, mechanical);
    }
    textChecks(selectStudentFacing(lecture, policy), context, policy, mechanical, requiresHumanReview, checks);
  }
  return { mechanical: sortFindings(mechanical), requiresHumanReview: sortFindings(requiresHumanReview) };
}

export function auditSourceText({ path, text, policy, unit = "LEGACY", checks = new Set(["terminology", "units", "notation", "duplicates", "ui"]) }) {
  const mechanical = [], requiresHumanReview = [], context = { unit, path, recordId: "" };
  textChecks(text, context, policy, mechanical, requiresHumanReview, checks);
  if (enabled(checks, "ui")) {
    const englishLabels = [...text.matchAll(/>([A-Z][A-Z0-9 ]{5,})</g)].map(match => match[1]);
    for (const label of englishLabels) requiresHumanReview.push(finding({ ...context, field: "ui", severity: "LOW", category: "language", rule: "english-instruction-label-review", evidence: label, kind: "requiresHumanReview" }));
  }
  return { mechanical: sortFindings(mechanical), requiresHumanReview: sortFindings(requiresHumanReview) };
}

export function mergeAuditResults(results) {
  return {
    mechanical: sortFindings(results.flatMap(result => result.mechanical)),
    requiresHumanReview: sortFindings(results.flatMap(result => result.requiresHumanReview))
  };
}

export function isBlockingMechanicalFinding(finding, policy) {
  if (finding.kind !== "mechanical") return false;
  if (policy.severityPolicy.alwaysBlocking.includes(finding.severity)) return true;
  if (finding.severity === "MEDIUM" && policy.severityPolicy.conditionalMediumCategories.includes(finding.category)) return true;
  return false;
}
