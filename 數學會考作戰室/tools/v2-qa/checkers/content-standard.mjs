const severities = { BLOCKER: 0, HIGH: 1, MEDIUM: 2, LOW: 3 };
const zh = /[\u3400-\u9fff]/g;
const imageMarkers = ["如圖", "下圖", "上圖", "右圖", "左圖", "附圖", "示意圖", "看圖"];
const residue = ["TODO", "FIXME", "undefined", "NaN", "[object Object]", "請再核對一次", "依題意即可"];
const requiredQuestionFields = ["questionId", "unitId", "skillId", "difficulty", "text", "choices", "answerIndex", "explanation", "steps", "commonMistake"];
const requiredLectureFields = ["unitId", "skillId", "title", "concept", "formula", "stepGuide", "examples", "commonMistakes"];

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

function textChecks(value, context, policy, findings) {
  for (const { field, value: text } of strings(value)) {
    for (const token of [...policy.terminology.prohibitedSimplified, ...policy.units.prohibited]) {
      if (text.includes(token)) findings.push(finding({ ...context, field, severity: "HIGH", category: "terminology", rule: "prohibited-token", evidence: token }));
    }
    for (const token of policy.terminology.contextualSimplified) {
      let remaining = text;
      for (const exception of policy.terminology.contextualExceptions.filter(item => item.token === token).flatMap(item => item.allowedWithin)) remaining = remaining.split(exception).join("");
      if (remaining.includes(token)) findings.push(finding({ ...context, field, severity: "HIGH", category: "terminology", rule: "contextual-simplified-token", evidence: token }));
    }
    for (const unit of policy.units.prose) if (new RegExp(`\\d\\s+${unit}`).test(text)) findings.push(finding({ ...context, field, severity: "MEDIUM", category: "units", rule: "spaced-chinese-unit", evidence: text }));
    for (const token of policy.notation.prohibitedVisible) {
      if (text.includes(token)) findings.push(finding({ ...context, field, severity: "MEDIUM", category: "notation", rule: "prohibited-visible-notation", evidence: token }));
    }
    if (new RegExp(policy.notation.ambiguousNumericXPattern).test(text)) findings.push(finding({ ...context, field, severity: "MEDIUM", category: "notation", rule: "ambiguous-numeric-x", evidence: text }));
    for (const token of residue) if (text.includes(token)) findings.push(finding({ ...context, field, severity: "LOW", category: "residue", rule: "machine-residue", evidence: token }));
  }
}

function unitPresentation(choices, context, policy, findings) {
  const groups = choices.map(choice => {
    const text = String(choice);
    return {
      chinese: policy.units.prose.some(unit => text.includes(unit)),
      latin: policy.units.symbols.some(unit => new RegExp(`(?:^|\\d\\s*)${unit.replace(/[\u00b2\u00b3]/g, "\\$&")}(?:$|\\b)`).test(text))
    };
  });
  if (groups.some(x => x.chinese) && groups.some(x => x.latin)) findings.push(finding({ ...context, field: "choices", severity: "MEDIUM", category: "units", rule: "mixed-unit-presentation", evidence: choices.join(" | ") }));
  const tokens = Object.entries(policy.units.families).flatMap(([family, units]) => units.map(unit => ({ family, unit }))).sort((a, b) => b.unit.length - a.unit.length);
  const families = choices.map(choice => tokens.find(item => String(choice).includes(item.unit))?.family);
  if (families.every(Boolean) && new Set(families).size > 1) findings.push(finding({ ...context, field: "choices", severity: "MEDIUM", category: "units", rule: "mixed-unit-dimensions", evidence: choices.join(" | ") }));
}

function duplicateSentences(text) {
  const parts = String(text ?? "").split(/[\u3002！？!?\n]+/).map(x => x.trim()).filter(x => x.length >= 8);
  return [...new Set(parts.filter((x, i) => parts.indexOf(x) !== i))];
}

export function auditQuestionBank({ unit, path, questions, policy }) {
  const mechanical = [], requiresHumanReview = [], ids = new Set(), skillDifficulty = new Map();
  for (const q of questions) {
    const context = { unit, path, recordId: q.questionId ?? "" };
    if (!q.questionId || ids.has(q.questionId)) mechanical.push(finding({ ...context, severity: "BLOCKER", category: "schema", rule: "duplicate-or-missing-question-id", evidence: q.questionId }));
    ids.add(q.questionId);
    for (const field of requiredQuestionFields) if (!(field in q)) mechanical.push(finding({ ...context, field, severity: "BLOCKER", category: "schema", rule: "missing-required-field" }));
    if (!Array.isArray(q.choices) || !Number.isInteger(q.answerIndex) || q.answerIndex < 0 || q.answerIndex >= (q.choices?.length ?? 0)) mechanical.push(finding({ ...context, field: "answerIndex", severity: "BLOCKER", category: "unique-answer", rule: "answer-index-range", evidence: q.answerIndex }));
    else if (q.correctChoice !== undefined && q.correctChoice !== q.choices[q.answerIndex]) mechanical.push(finding({ ...context, field: "correctChoice", severity: "BLOCKER", category: "unique-answer", rule: "correct-choice-mismatch", evidence: q.correctChoice }));
    if (chineseCount(q.explanation) < policy.questionThresholds.explanationChineseMin) mechanical.push(finding({ ...context, field: "explanation", severity: "MEDIUM", category: "explanation", rule: "question-explanation-min", evidence: chineseCount(q.explanation) }));
    if (chineseCount(q.commonMistake) < policy.questionThresholds.commonMistakeChineseMin) mechanical.push(finding({ ...context, field: "commonMistake", severity: "MEDIUM", category: "distractor", rule: "common-mistake-min", evidence: chineseCount(q.commonMistake) }));
    if (!Array.isArray(q.steps) || q.steps.length < policy.questionThresholds.stepsMin) mechanical.push(finding({ ...context, field: "steps", severity: "MEDIUM", category: "steps", rule: "question-steps-min", evidence: q.steps?.length ?? 0 }));
    if (Array.isArray(q.steps) && new Set(q.steps).size !== q.steps.length) mechanical.push(finding({ ...context, field: "steps", severity: "MEDIUM", category: "residue", rule: "duplicate-exact-step", evidence: q.steps.join(" | ") }));
    for (const sentence of duplicateSentences(q.explanation)) mechanical.push(finding({ ...context, field: "explanation", severity: "LOW", category: "residue", rule: "duplicate-explanation-sentence", evidence: sentence }));
    if (imageMarkers.some(marker => String(q.text).includes(marker)) && !q.visual && q.visualMode !== "visual") mechanical.push(finding({ ...context, field: "text", severity: "MEDIUM", category: "visual", rule: "undeclared-image-dependency", evidence: q.text }));
    textChecks(q, context, policy, mechanical);
    if (Array.isArray(q.choices)) unitPresentation(q.choices, context, policy, mechanical);
    const levels = skillDifficulty.get(q.skillId) ?? new Set(); levels.add(q.difficulty); skillDifficulty.set(q.skillId, levels);
    requiresHumanReview.push(finding({ ...context, field: "*", severity: "MEDIUM", category: "correctness", rule: "semantic-mathematics-review-required", evidence: "Mechanical checks do not prove correctness.", kind: "requiresHumanReview" }));
  }
  for (const [skillId, levels] of skillDifficulty) {
    for (const level of ["advanced", "literacy"]) if (!levels.has(level)) mechanical.push(finding({ unit, path, recordId: skillId, field: "difficulty", severity: "MEDIUM", category: "coverage", rule: `missing-${level}-coverage`, evidence: [...levels].sort().join(",") }));
  }
  return { mechanical: sortFindings(mechanical), requiresHumanReview: sortFindings(requiresHumanReview) };
}

export function auditLectureBank({ unit, path, lectures, policy }) {
  const mechanical = [], requiresHumanReview = [], ids = new Set();
  for (const lecture of lectures) {
    const context = { unit, path, recordId: lecture.skillId ?? "" };
    if (!lecture.skillId || ids.has(lecture.skillId)) mechanical.push(finding({ ...context, severity: "BLOCKER", category: "schema", rule: "duplicate-or-missing-lecture-skill-id", evidence: lecture.skillId }));
    ids.add(lecture.skillId);
    for (const field of requiredLectureFields) if (!(field in lecture)) mechanical.push(finding({ ...context, field, severity: "BLOCKER", category: "schema", rule: "missing-required-field" }));
    const t = policy.lectureThresholds;
    if (chineseCount(lecture.concept) < t.conceptChineseMin) mechanical.push(finding({ ...context, field: "concept", severity: "MEDIUM", category: "lecture", rule: "lecture-concept-min", evidence: chineseCount(lecture.concept) }));
    if (!Array.isArray(lecture.stepGuide) || lecture.stepGuide.length < t.stepGuideMin) mechanical.push(finding({ ...context, field: "stepGuide", severity: "MEDIUM", category: "lecture", rule: "lecture-step-guide-min", evidence: lecture.stepGuide?.length ?? 0 }));
    if (!Array.isArray(lecture.examples) || lecture.examples.length < t.examplesMin) mechanical.push(finding({ ...context, field: "examples", severity: "MEDIUM", category: "lecture", rule: "lecture-examples-min", evidence: lecture.examples?.length ?? 0 }));
    if (!Array.isArray(lecture.commonMistakes) || lecture.commonMistakes.length < t.commonMistakesMin) mechanical.push(finding({ ...context, field: "commonMistakes", severity: "MEDIUM", category: "lecture", rule: "lecture-common-mistakes-min", evidence: lecture.commonMistakes?.length ?? 0 }));
    (lecture.examples ?? []).forEach((example, i) => { if (chineseCount(example.why) < t.exampleWhyChineseMin) mechanical.push(finding({ ...context, field: `examples[${i}].why`, severity: "MEDIUM", category: "lecture", rule: "lecture-example-why-min", evidence: chineseCount(example.why) })); });
    textChecks(lecture, context, policy, mechanical);
    requiresHumanReview.push(finding({ ...context, field: "*", severity: "MEDIUM", category: "correctness", rule: "semantic-lecture-review-required", evidence: "Mechanical checks do not prove lecture accuracy.", kind: "requiresHumanReview" }));
  }
  return { mechanical: sortFindings(mechanical), requiresHumanReview: sortFindings(requiresHumanReview) };
}

export function auditSourceText({ path, text, policy, unit = "LEGACY" }) {
  const mechanical = [], requiresHumanReview = [], context = { unit, path, recordId: "" };
  textChecks(text, context, policy, mechanical);
  const englishLabels = [...text.matchAll(/>([A-Z][A-Z0-9 ]{5,})</g)].map(match => match[1]);
  for (const label of englishLabels) requiresHumanReview.push(finding({ ...context, field: "ui", severity: "LOW", category: "language", rule: "english-instruction-label-review", evidence: label, kind: "requiresHumanReview" }));
  return { mechanical: sortFindings(mechanical), requiresHumanReview: sortFindings(requiresHumanReview) };
}

export function mergeAuditResults(results) {
  return {
    mechanical: sortFindings(results.flatMap(result => result.mechanical)),
    requiresHumanReview: sortFindings(results.flatMap(result => result.requiresHumanReview))
  };
}
