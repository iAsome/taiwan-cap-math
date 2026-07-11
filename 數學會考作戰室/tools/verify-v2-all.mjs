import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import syllabus from "./v2-content/syllabus-source.mjs";
import migrationSource from "./v2-content/migration-source.mjs";
import productionProfile, { UNIT_INVENTORY } from "./v2-qa/policies/math-v2-production-profile.mjs";
import policy from "./v2-qa/policies/math-tw-v1.mjs";
import { hashPolicy } from "./v2-qa/policies/policy-hash.mjs";
import { auditQuestionBank, auditLectureBank } from "./v2-qa/checkers/content-standard.mjs";
import { buildV2Production } from "./build-v2-all-units.mjs";

const toolsDir = path.dirname(fileURLToPath(import.meta.url));
const mathDir = path.resolve(toolsDir, "..");
const repoDir = path.resolve(mathDir, "..");
const reviewDir = path.join(toolsDir, "review-output", "full-v2-production");
const manifestDir = path.join(toolsDir, "v2-qa", "manifests");
const v2Dir = path.join(mathDir, "v2");
const EXPECTED_POLICY_HASH = "72384ef7b0a3ab549d676c8e9f4af044aa694807d1ee36d3b016d8a3ce13d271";
const REQUIRED_QUESTION_FIELDS = ["questionId", "unitId", "numericUnitId", "topicId", "skillId", "difficulty", "type", "visualMode", "sourceScope", "text", "choices", "answerIndex", "explanation", "steps", "commonMistake", "concept", "tags", "estimatedTimeSec"];
const REQUIRED_LECTURE_FIELDS = ["unitId", "topicId", "skillId", "title", "concept", "formula", "stepGuide", "examples", "commonMistakes", "quizLink"];
const DIFFICULTIES = ["basic", "standard", "advanced", "literacy"];
const IMAGE_MARKERS = /如圖|下圖|附圖|右圖|左圖|圖中|由圖可知|觀察圖形|選項圖|diagram|image|svg|canvas/i;
const MACHINE_RESIDUE = /TODO|FIXME|NaN|\[object Object\]|debug|placeholder|第一題型|第二變化|第十二素養/i;
const OUT_OF_SCOPE = /Vieta|韋達|微分法|定積分|不定積分|積分法|向量|矩陣|複數|虛數|對數|\blog\b|\bsin\b|\bcos\b|\btan\b|導數|極限|圓錐曲線|高中/i;

function allSkills(unit) {
  return unit.topics.flatMap(topic => topic.skills);
}

function chineseCount(value) {
  return (String(value).match(/[\u3400-\u9fff]/g) || []).length;
}

function normalizeStem(value, replaceNumbers = false) {
  let text = String(value).normalize("NFKC").replace(/\s+/g, "").replace(/[\u3000-\u303f\uff01-\uff65()[\]{},.!?;:'"`]/g, "");
  if (replaceNumbers) text = text.replace(/−?\d+(?:\.\d+)?/g, "#").replace(/[A-Z][班組]?/g, "X").replace(/[甲乙丙丁]/g, "X");
  return text;
}

function duplicateGroups(questions, replaceNumbers) {
  const groups = new Map();
  for (const question of questions) {
    const key = normalizeStem(question.text, replaceNumbers);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(question.questionId);
  }
  return [...groups.values()].filter(ids => ids.length > 1).map(ids => [...ids].sort()).sort((a, b) => a.join(",").localeCompare(b.join(","), "en"));
}

function loadJsonLines(file) {
  return fs.readFileSync(file, "utf8").trim().split(/\r?\n/).filter(Boolean).map(line => JSON.parse(line));
}

function visibleTextQuestion(question) {
  return [question.text, ...question.choices, question.explanation, ...question.steps, question.commonMistake, question.concept].join("\n");
}

function visibleTextLecture(lecture) {
  return [lecture.title, lecture.concept, lecture.formula, ...lecture.stepGuide, ...lecture.examples.flatMap(example => [example.prompt, example.answer, example.why]), ...lecture.commonMistakes].join("\n");
}

function assertQuestion(question, unit, topicIds, skillIds) {
  for (const field of REQUIRED_QUESTION_FIELDS) assert(Object.hasOwn(question, field), `${question.questionId}: missing ${field}`);
  assert.equal(question.unitId, unit.unitId, `${question.questionId}: unit mismatch`);
  assert.equal(question.numericUnitId, unit.numericId, `${question.questionId}: numeric unit mismatch`);
  assert(topicIds.has(question.topicId), `${question.questionId}: unknown topic`);
  assert(skillIds.has(question.skillId), `${question.questionId}: unknown skill`);
  assert(DIFFICULTIES.includes(question.difficulty), `${question.questionId}: invalid difficulty`);
  assert.equal(question.type, "mc", `${question.questionId}: type`);
  assert.equal(question.visualMode, "text-only", `${question.questionId}: visual mode`);
  assert.equal(question.sourceScope, "CAP_108_JUNIOR_MATH", `${question.questionId}: source scope`);
  assert.equal(question.choices.length, 4, `${question.questionId}: choices`);
  assert.equal(new Set(question.choices.map(choice => String(choice).trim())).size, 4, `${question.questionId}: duplicate choices`);
  assert(Number.isInteger(question.answerIndex) && question.answerIndex >= 0 && question.answerIndex < 4, `${question.questionId}: answerIndex`);
  assert(String(question.choices[question.answerIndex]).trim(), `${question.questionId}: blank correct choice`);
  assert(chineseCount(question.explanation) >= 45, `${question.questionId}: short explanation`);
  assert(chineseCount(question.commonMistake) >= 12, `${question.questionId}: short commonMistake`);
  assert(question.steps.length >= 3 && question.steps.length <= 6, `${question.questionId}: steps`);
  const visible = visibleTextQuestion(question);
  assert(!IMAGE_MARKERS.test(visible), `${question.questionId}: image dependency`);
  assert(!MACHINE_RESIDUE.test(visible), `${question.questionId}: machine residue`);
  assert(!OUT_OF_SCOPE.test(visible), `${question.questionId}: out-of-scope token`);
}

function assertLecture(lecture, unit, topicIds, skillIds) {
  for (const field of REQUIRED_LECTURE_FIELDS) assert(Object.hasOwn(lecture, field), `${lecture.skillId}: missing ${field}`);
  assert.equal(lecture.unitId, unit.unitId, `${lecture.skillId}: unit mismatch`);
  assert(topicIds.has(lecture.topicId), `${lecture.skillId}: unknown topic`);
  assert(skillIds.has(lecture.skillId), `${lecture.skillId}: unknown skill`);
  assert(chineseCount(lecture.concept) >= 80, `${lecture.skillId}: short concept`);
  assert(lecture.stepGuide.length >= 5, `${lecture.skillId}: short stepGuide`);
  assert(lecture.examples.length >= 2, `${lecture.skillId}: examples`);
  for (const example of lecture.examples) {
    assert.deepEqual(Object.keys(example), ["prompt", "answer", "why"], `${lecture.skillId}: canonical example keys`);
    assert(String(example.prompt).trim() && String(example.answer).trim(), `${lecture.skillId}: blank example`);
    assert(chineseCount(example.why) >= 40, `${lecture.skillId}: short example why`);
  }
  assert(lecture.commonMistakes.length >= 4, `${lecture.skillId}: common mistakes`);
  assert.equal(lecture.quizLink.unitId, unit.unitId, `${lecture.skillId}: quiz unit`);
  assert.equal(lecture.quizLink.skillId, lecture.skillId, `${lecture.skillId}: quiz skill`);
  const visible = visibleTextLecture(lecture);
  assert(!IMAGE_MARKERS.test(visible), `${lecture.skillId}: image dependency`);
  assert(!MACHINE_RESIDUE.test(visible), `${lecture.skillId}: machine residue`);
  assert(!OUT_OF_SCOPE.test(visible), `${lecture.skillId}: out-of-scope token`);
}

function assertDependencyClosure() {
  const builder = fs.readFileSync(path.join(toolsDir, "build-v2-all-units.mjs"), "utf8");
  const imports = [...builder.matchAll(/^import[\s\S]*?from\s+"([^"]+)";/gm)].map(match => match[1]).join("\n");
  for (const forbidden of ["math-question-bank-v2", "math-lecture-v2", "quiz-variant-bank", "quiz-taxonomy", "lecture-taxonomy", "review-output", "v2-qa/checkers", "v2-qa/test", "production.json", "locks"]) {
    assert(!imports.includes(forbidden), `production builder imports forbidden dependency: ${forbidden}`);
  }
  for (const unit of syllabus.units) {
    const dir = path.join(toolsDir, "v2-content", "units", unit.unitId);
    for (const name of ["index.mjs", "questions.mjs", "lectures.mjs"]) {
      const source = fs.readFileSync(path.join(dir, name), "utf8");
      assert(!/quiz-taxonomy|variant-bank|lecture-taxonomy|review-output|math-question-bank-v2|math-lecture-v2/.test(source), `${unit.unitId}/${name}: forbidden source dependency`);
    }
  }
}

export async function verifyV2All() {
  assert.equal(hashPolicy(), EXPECTED_POLICY_HASH, "policy hash changed");
  assert.equal(syllabus.units.length, productionProfile.units);
  assert.equal(UNIT_INVENTORY.length, productionProfile.units);
  const built = await buildV2Production({ write: false });
  assert.deepEqual(built.inventory, { units: 23, skills: 339, questions: 4068, lectures: 339 });
  const questionIds = new Set();
  const lectureIds = new Set();
  const allQuestions = [];
  const allLectures = [];
  let policyFindings = 0;

  for (const [index, source] of built.units.entries()) {
    const expected = UNIT_INVENTORY[index];
    const skills = allSkills(source.unit);
    const topicIds = new Set(source.unit.topics.map(topic => topic.topicId));
    const skillIds = new Set(skills.map(skill => skill.skillId));
    assert.equal(source.unit.unitId, expected.unitId);
    assert.equal(skills.length, expected.skills);
    assert.equal(source.questions.length, expected.questions);
    assert.equal(source.lectures.length, expected.lectures);
    for (const question of source.questions) {
      assert(!questionIds.has(question.questionId), `duplicate questionId ${question.questionId}`);
      questionIds.add(question.questionId);
      assertQuestion(question, source.unit, topicIds, skillIds);
    }
    for (const lecture of source.lectures) {
      assert(!lectureIds.has(lecture.skillId), `duplicate lecture skill ${lecture.skillId}`);
      lectureIds.add(lecture.skillId);
      assertLecture(lecture, source.unit, topicIds, skillIds);
    }
    for (const skill of skills) {
      const questions = source.questions.filter(question => question.skillId === skill.skillId);
      assert.equal(questions.length, 12, `${skill.skillId}: question count`);
      for (const difficulty of DIFFICULTIES) assert.equal(questions.filter(question => question.difficulty === difficulty).length, 3, `${skill.skillId}: ${difficulty}`);
      for (let answerIndex = 0; answerIndex < 4; answerIndex += 1) assert.equal(questions.filter(question => question.answerIndex === answerIndex).length, 3, `${skill.skillId}: answer ${answerIndex}`);
      assert.equal(source.lectures.filter(lecture => lecture.skillId === skill.skillId).length, 1, `${skill.skillId}: lecture count`);
    }
    const questionAudit = auditQuestionBank({ unit: source.unit.unitId, path: source.modulePath, questions: source.questions, policy });
    const lectureAudit = auditLectureBank({ unit: source.unit.unitId, path: source.modulePath, lectures: source.lectures, policy });
    policyFindings += questionAudit.mechanical.length + lectureAudit.mechanical.length;
    allQuestions.push(...source.questions);
    allLectures.push(...source.lectures);
  }
  assert.equal(policyFindings, 0, "content policy findings remain");

  const duplicateReview = JSON.parse(fs.readFileSync(path.join(reviewDir, "duplicate-semantic-review.json"), "utf8"));
  const reviewedGroups = duplicateReview.map(row => row.questionIds.join(",")).sort();
  const exactGroups = duplicateGroups(allQuestions, false);
  assert.deepEqual(exactGroups, [["u01-s004-v002", "u01-s006-v004"]], "unresolved exact duplicate stems");
  assert.deepEqual(duplicateGroups(allQuestions, true).map(ids => ids.join(",")).sort(), reviewedGroups, "number-normalized duplicate review is stale");
  assert.equal(duplicateReview.filter(row => !["accepted-historical-human-review", "reviewed-distinct-mathematical-case"].includes(row.disposition)).length, 0);

  for (const [label, values] of [
    ["question explanations", allQuestions.map(question => question.explanation)],
    ["question steps", allQuestions.map(question => JSON.stringify(question.steps))],
    ["question mistakes", allQuestions.map(question => question.commonMistake)],
    ["lecture concepts", allLectures.map(lecture => lecture.concept)],
    ["lecture steps", allLectures.map(lecture => JSON.stringify(lecture.stepGuide))],
    ["lecture whys", allLectures.flatMap(lecture => lecture.examples.map(example => example.why))],
    ["lecture mistakes", allLectures.flatMap(lecture => lecture.commonMistakes)]
  ]) assert.equal(new Set(values).size, values.length, `duplicate ${label}`);

  const plans = JSON.parse(fs.readFileSync(path.join(reviewDir, "skill-authoring-plans.json"), "utf8"));
  assert.equal(plans.length, 4068, "authoring plan count");
  assert.equal(new Set(plans.map(row => row.variantId)).size, 4068, "authoring plan IDs");
  const questionReviews = loadJsonLines(path.join(reviewDir, "question-semantic-review.jsonl"));
  const lectureReviews = loadJsonLines(path.join(reviewDir, "lecture-semantic-review.jsonl"));
  assert.equal(questionReviews.length, 4068, "question review count");
  assert.equal(lectureReviews.length, 339, "lecture review count");
  assert.equal(questionReviews.filter(row => row.finalDisposition === "unresolved").length, 0, "unresolved question review");
  assert.equal(lectureReviews.filter(row => row.finalDisposition === "unresolved").length, 0, "unresolved lecture review");
  assert.equal(migrationSource.length, 537, "legacy migration count");
  assert.equal(migrationSource.filter(row => row.status !== "mapped-to-v2-skill").length, 0, "unmapped legacy topics");
  assertDependencyClosure();

  for (const [name, bytes] of built.artifacts) assert(fs.readFileSync(path.join(v2Dir, name), "utf8") === bytes, `stale generated artifact ${name}`);
  for (const manifest of built.qaManifests) assert.deepEqual(JSON.parse(fs.readFileSync(path.join(manifestDir, `${manifest.unitId}.production.json`), "utf8")), manifest, `stale ${manifest.unitId} manifest`);
  assert(fs.existsSync(path.join(repoDir, "MATH_V2_PRODUCTION_PROFILE.md")));
  return { policyHash: EXPECTED_POLICY_HASH, contentVersion: built.contentVersion, inventory: built.inventory, policyFindings, normalizedDuplicateGroups: duplicateReview.length, acceptedHistoricalHumanReview: ["u01-s004-v002", "u01-s006-v004"] };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = await verifyV2All();
  console.log(`verify-v2-all: OK — ${result.inventory.units} units, ${result.inventory.skills} skills, ${result.inventory.questions} questions, ${result.inventory.lectures} lectures`);
  console.log(JSON.stringify(result));
}
