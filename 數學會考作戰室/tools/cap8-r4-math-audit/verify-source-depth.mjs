import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const mathDir = path.resolve(here, "../..");
const batchesDir = path.join(mathDir, "tools/v2-human-content/batches");
const syllabusLock = JSON.parse(fs.readFileSync(path.join(mathDir, "tools/v2-human-content/authoring/authoring-syllabus-lock-r2.json"), "utf8"));
const args = new Map(process.argv.slice(2).map((value, index, all) => value.startsWith("--") ? [value, all[index + 1]] : null).filter(Boolean));
const units = String(args.get("--units") || "").split(",").filter(value => /^u(?:0[1-9]|1[0-9]|2[0-3])$/.test(value));
if (!units.length) throw new Error("--units requires comma-separated u01..u23 values");

const han = value => (String(value || "").match(/\p{Script=Han}/gu) || []).length;
const list = value => Array.isArray(value) ? value : (value ? [value] : []);
const text = value => list(value).map(item => typeof item === "string" ? item : (item?.work || item?.instruction || item?.action || item?.solution || "")).filter(Boolean);
const readJson = file => JSON.parse(fs.readFileSync(file, "utf8"));
const readJsonl = file => fs.readFileSync(file, "utf8").trim().split(/\r?\n/).filter(Boolean).map(JSON.parse);
const findings = [];
const add = (severity, rule, id, field, evidence) => findings.push({ severity, rule, id, field, evidence: String(evidence).slice(0, 180) });
const prohibited = new Map([["公釐", "毫米"], ["公厘", "毫米"], ["厘米", "公分"], ["千米", "公里"], ["平方厘米", "平方公分"], ["立方厘米", "立方公分"], ["平米", "平方公尺"], ["千克", "公斤"], ["公裡", "公里"]]);
const simplified = "边线点圆体长应题证为与进这还图标关开门问误选项决侧却轮虑盖镜画头";
const scan = (id, field, value) => {
  const rendered = JSON.stringify(value ?? "");
  for (const [token, replacement] of prohibited) if (rendered.includes(token)) add("HIGH", "prohibited-taiwan-unit", id, field, `${token} -> ${replacement}`);
  if (/(?:^|[^<])<=|(?:^|[^>])>=/.test(rendered)) add("HIGH", "prohibited-visible-notation", id, field, rendered.match(/.{0,35}(?:<=|>=).{0,35}/)?.[0] || rendered);
  if (/\^/.test(rendered)) add("HIGH", "prohibited-visible-caret", id, field, rendered.match(/.{0,35}\^.{0,35}/)?.[0] || rendered);
  if (/。。|，，|？？|！！/.test(rendered)) add("HIGH", "duplicate-punctuation", id, field, rendered.match(/.{0,35}(?:。。|，，|？？|！！).{0,35}/)?.[0] || rendered);
  for (const token of simplified) if (rendered.includes(token)) add("HIGH", "simplified-chinese", id, field, token);
};

const seenSkills = new Set();
const counts = { units: units.length, skills: 0, lectures: 0, mc: 0, cr: 0, drawingSpecs: 0, workedExamples: 0 };
const unitCounts = Object.fromEntries(units.map(unitId => [unitId, { skills: 0, lectures: 0, mc: 0, cr: 0, drawingSpecs: 0, workedExamples: 0 }]));
const unitFigures = Object.fromEntries(units.map(unitId => [unitId, new Set()]));
const unitDrawingSpecs = Object.fromEntries(units.map(unitId => [unitId, new Set()]));
const unitSkillIds = Object.fromEntries(units.map(unitId => [unitId, []]));
const figureReferences = [];
const drawingSpecReferences = [];

for (const batch of fs.readdirSync(batchesDir).sort()) for (const unitId of units) {
  const unitDir = path.join(batchesDir, batch, "units", unitId);
  if (!fs.existsSync(unitDir)) continue;
  for (const slot of fs.readdirSync(unitDir).filter(name => /^s\d{3}$/.test(name)).sort()) {
    const key = `${unitId}:${slot}`;
    if (seenSkills.has(key)) throw new Error(`${key}: duplicate authoritative skill directory`);
    seenSkills.add(key);
    counts.skills++; unitCounts[unitId].skills++;
    const skillDir = path.join(unitDir, slot);
    const lecture = readJson(path.join(skillDir, "lecture.json"));
    const mc = readJsonl(path.join(skillDir, "mc-questions.jsonl"));
    const cr = readJsonl(path.join(skillDir, "constructed-response.jsonl"));
    const drawings = readJsonl(path.join(skillDir, "drawing-specs.jsonl"));
    unitSkillIds[unitId].push(lecture.skillId);

    counts.lectures++; unitCounts[unitId].lectures++;
    const concept = [lecture.conceptNarrative, lecture.conceptDevelopment, lecture.concept, lecture.definition]
      .filter(Boolean)
      .sort((left, right) => han(right) - han(left))[0] || "";
    const method = list(lecture.method || lecture.stepByStepMethod || lecture.stepGuide || lecture.methods);
    const examples = list(lecture.workedExamples || lecture.canonicalExamples || lecture.examples);
    const mistakes = list(lecture.commonMistakes || lecture.mistakes);
    counts.workedExamples += examples.length; unitCounts[unitId].workedExamples += examples.length;
    scan(lecture.lectureId || key, "lecture", lecture);
    for (const reference of list(lecture.figureReferences || lecture.figures)) {
      const figureId = typeof reference === "string" ? reference : reference?.figureId;
      if (figureId) figureReferences.push({ unitId, owner: lecture.lectureId || key, figureId });
      if (typeof reference === "object" && figureId && !reference.altText) add("HIGH", "lecture-figure-alt-missing", lecture.lectureId || key, "figureReferences", figureId);
    }
    if (han(concept) < 80) add("MEDIUM", "lecture-concept-short", lecture.lectureId || key, "concept", han(concept));
    if (method.length < 5) add("MEDIUM", "lecture-method-short", lecture.lectureId || key, "method", method.length);
    if (mistakes.length < 4) add("MEDIUM", "lecture-mistakes-short", lecture.lectureId || key, "commonMistakes", mistakes.length);
    if (examples.length < 2) add("BLOCKER", "worked-example-count", lecture.lectureId || key, "workedExamples", examples.length);
    for (const [index, example] of examples.entries()) if (han(example.why) < 40) add("MEDIUM", "lecture-example-why-short", lecture.lectureId || key, `example[${index}].why`, han(example.why));

    for (const question of mc) {
      counts.mc++; unitCounts[unitId].mc++;
      const id = question.questionId;
      const steps = text(question.steps || question.solutionSteps);
      const trap = question.commonMistake || question.misconceptionTarget || "";
      scan(id, "question", question);
      if (question.figureId) figureReferences.push({ unitId, owner: id, figureId: question.figureId });
      if (question.drawingSpecId) drawingSpecReferences.push({ unitId, owner: id, drawingSpecId: question.drawingSpecId });
      if (han(question.explanation) < 45) add("MEDIUM", "mc-explanation-short", id, "explanation", han(question.explanation));
      if (steps.length < 3) add("MEDIUM", "mc-steps-short", id, "steps", steps.length);
      if (han(trap) < 12) add("MEDIUM", "mc-misconception-short", id, "misconception", han(trap));
      if (question.choices?.length !== 4 || new Set(question.choices).size !== 4) add("BLOCKER", "mc-choice-shape", id, "choices", JSON.stringify(question.choices));
      if (!Number.isInteger(question.answerIndex) || question.answerIndex < 0 || question.answerIndex > 3) add("BLOCKER", "mc-answer-index", id, "answerIndex", question.answerIndex);
      if (question.optionAnalysis?.length !== 4 || question.optionAnalysis.filter(item => item.truth).length !== 1 || !question.optionAnalysis?.[question.answerIndex]?.truth) add("BLOCKER", "mc-option-truth", id, "optionAnalysis", "expected exactly one truth at answerIndex");
    }
    if (mc.length !== 12) add("BLOCKER", "mc-count-per-skill", key, "mcQuestions", mc.length);

    for (const question of cr) {
      counts.cr++; unitCounts[unitId].cr++;
      const id = question.questionId;
      const solution = [question.explanation, question.fullCreditSolution, question.standardSolution].map(text).sort((a, b) => han(b.join(" ")) - han(a.join(" ")))[0] || [];
      const steps = [question.reasoningSteps, question.solutionSteps, question.fullCreditSolution, question.standardSolution].map(text).sort((a, b) => b.length - a.length)[0] || [];
      const trap = [question.commonErrors, question.commonErrorTargets].map(value => text(value).join("；")).sort((a, b) => han(b) - han(a))[0] || "";
      scan(id, "constructedResponse", question);
      if (question.figureId) figureReferences.push({ unitId, owner: id, figureId: question.figureId });
      if (question.drawingSpecId) drawingSpecReferences.push({ unitId, owner: id, drawingSpecId: question.drawingSpecId });
      if (han(solution.join(" ")) < 45) add("MEDIUM", "cr-explanation-short", id, "solution", han(solution.join(" ")));
      if (steps.length < 3) add("MEDIUM", "cr-steps-short", id, "steps", steps.length);
      if (han(trap) < 12) add("MEDIUM", "cr-misconception-short", id, "commonErrors", han(trap));
    }
    if (cr.length !== 2) add("BLOCKER", "cr-count-per-skill", key, "constructedResponses", cr.length);

    counts.drawingSpecs += drawings.length; unitCounts[unitId].drawingSpecs += drawings.length;
    for (const drawing of drawings) {
      scan(drawing.figureId, "drawingSpec", drawing);
      if (!drawing.altText) add("HIGH", "drawing-metadata-missing", drawing.figureId, "drawingSpec", "altText missing");
      if (drawing.figureId) unitFigures[unitId].add(drawing.figureId);
      if (drawing.figureId) unitDrawingSpecs[unitId].add(drawing.figureId);
      if (drawing.drawingSpecId) unitDrawingSpecs[unitId].add(drawing.drawingSpecId);
    }
  }
}

for (const { unitId, owner, figureId } of figureReferences) {
  if (!unitFigures[unitId].has(figureId)) add("BLOCKER", "figure-reference-missing", owner, "figureId", figureId);
}
for (const { unitId, owner, drawingSpecId } of drawingSpecReferences) {
  if (!unitDrawingSpecs[unitId].has(drawingSpecId)) add("BLOCKER", "drawing-spec-reference-missing", owner, "drawingSpecId", drawingSpecId);
}
for (const unitId of units) {
  if (!unitCounts[unitId].skills) {
    add("BLOCKER", "unit-source-missing", unitId, "unit", "no authoritative skill directories found");
    continue;
  }
  const lockedUnit = syllabusLock.units.find(unit => unit.unitId === unitId);
  const expected = lockedUnit?.topics.flatMap(topic => topic.skills).sort((a, b) => a.order - b.order).map(skill => skill.skillId) || [];
  if (JSON.stringify(unitSkillIds[unitId]) !== JSON.stringify(expected)) {
    add("BLOCKER", "syllabus-skill-sequence", unitId, "skills", `expected ${expected.join(",")}; got ${unitSkillIds[unitId].join(",")}`);
  }
}
findings.sort((a, b) => a.severity.localeCompare(b.severity) || a.rule.localeCompare(b.rule) || a.id.localeCompare(b.id));
const findingCounts = Object.fromEntries(["BLOCKER", "HIGH", "MEDIUM", "LOW"].map(severity => [severity, findings.filter(item => item.severity === severity).length]));
const report = { schemaVersion: "cap8-r4-math-source-depth-r1", units, counts, unitCounts, findingCounts, findings };
if (args.get("--output")) {
  const output = path.resolve(mathDir, args.get("--output"));
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, `${JSON.stringify(report, null, 2)}\n`, "utf8");
}
console.log(JSON.stringify({ units, counts, findingCounts, output: args.get("--output") || null }, null, 2));
if (findingCounts.BLOCKER || findingCounts.HIGH || findingCounts.MEDIUM) process.exit(1);
