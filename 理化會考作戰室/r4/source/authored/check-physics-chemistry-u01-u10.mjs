import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { spawnSync } from "node:child_process";
import { pathToFileURL } from "node:url";
import { PHYSICS_CHEMISTRY_AUTHORED_U01 } from "./physics-chemistry-u01.mjs";
import { PHYSICS_CHEMISTRY_AUTHORED_U02 } from "./physics-chemistry-u02.mjs";
import { PHYSICS_CHEMISTRY_AUTHORED_U03 } from "./physics-chemistry-u03.mjs";
import { PHYSICS_CHEMISTRY_AUTHORED_U04 } from "./physics-chemistry-u04.mjs";
import { PHYSICS_CHEMISTRY_AUTHORED_U05 } from "./physics-chemistry-u05.mjs";
import { PHYSICS_CHEMISTRY_AUTHORED_U06 } from "./physics-chemistry-u06.mjs";
import { PHYSICS_CHEMISTRY_AUTHORED_U07 } from "./physics-chemistry-u07.mjs";
import { PHYSICS_CHEMISTRY_AUTHORED_U08 } from "./physics-chemistry-u08.mjs";
import { PHYSICS_CHEMISTRY_AUTHORED_U09 } from "./physics-chemistry-u09.mjs";
import { PHYSICS_CHEMISTRY_AUTHORED_U10 } from "./physics-chemistry-u10.mjs";

const units = [
  PHYSICS_CHEMISTRY_AUTHORED_U01,
  PHYSICS_CHEMISTRY_AUTHORED_U02,
  PHYSICS_CHEMISTRY_AUTHORED_U03,
  PHYSICS_CHEMISTRY_AUTHORED_U04,
  PHYSICS_CHEMISTRY_AUTHORED_U05,
  PHYSICS_CHEMISTRY_AUTHORED_U06,
  PHYSICS_CHEMISTRY_AUTHORED_U07,
  PHYSICS_CHEMISTRY_AUTHORED_U08,
  PHYSICS_CHEMISTRY_AUTHORED_U09,
  PHYSICS_CHEMISTRY_AUTHORED_U10,
];

const sourceUrls = Array.from(
  { length: 10 },
  (_, index) => new URL(`./physics-chemistry-u${String(index + 1).padStart(2, "0")}.mjs`, import.meta.url),
);

const circularReviewPattern = /(?:\u7b54\u6848|\u7b54\u9805|\u7d22\u5f15|\u9078\u9805|answer\s*index|answerIndex|(?:^|[\s\uff0c\uff1b\uff1a])(?:A|B|C|D|\uff21|\uff22|\uff23|\uff24)(?:\u9805|\u4f4d\u7f6e|\u6b63\u78ba))/i;
const genericDismissalPattern = /^(?:\u7121\u95dc|\u4e0d\u5408\u7406|\u932f\u8aa4|\u4e0d\u6b63\u78ba|\u8207\u984c\u610f\u7121\u95dc|\u6c92\u6709\u610f\u7fa9|\u6558\u8ff0\u932f\u8aa4|\u8cc7\u6599\u4e0d\u8db3|\u8b49\u64da\u4e0d\u8db3)[\u3002\uff01]?$/;
const compatibilityPattern = /(?:\u4ee5\u4e0a\u7686|\u4ee5\u4e0a\u90fd|\u4e0a\u8ff0\u7686|\u4e0a\u8ff0\u90fd|\u4ee5\u4e0a\u5404\u9805|\u5168\u90e8\u6b63\u78ba|\u7686\u53ef\u6210\u7acb|\u5747\u53ef\u76f8\u5bb9)/;
const forbiddenStaticSourcePatterns = [
  ["Array.from", /\bArray\.from\s*\(/],
  ["map-based generation", /\.map\s*\(/],
  ["loop-based generation", /\b(?:for|while)\s*\(/],
  ["template interpolation", /`/],
  ["runtime randomness", /\bMath\.random\s*\(/],
  ["dynamic import", /\bimport\s*\(/],
  ["side-effect API", /\b(?:console|process|globalThis|setTimeout|setInterval)\b/],
];

const pad = (value) => String(value).padStart(3, "0");

function requireUnique(values, label) {
  assert.equal(new Set(values).size, values.length, `${label} must be exact-string unique`);
}

function requireText(value, label) {
  assert.equal(typeof value, "string", `${label} must be a string`);
  assert.ok(value.trim().length > 0, `${label} must not be blank`);
}

function normalizeScaffold(value) {
  return value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[+-]?\d+(?:\.\d+)?/g, "#")
    .replace(/[a-z]+/g, "x")
    .replace(/[\s\u3000\uff0c\u3002\uff01\uff1f\u3001\uff1b\uff1a:,.?()\uff08\uff09\u300c\u300d\u300e\u300f\[\]\u3010\u3011]/g, "");
}

function rememberScaffold(scaffolds, category, id, value) {
  if (!scaffolds.has(category)) scaffolds.set(category, new Map());
  const signature = normalizeScaffold(value);
  const categoryGroups = scaffolds.get(category);
  if (!categoryGroups.has(signature)) categoryGroups.set(signature, []);
  categoryGroups.get(signature).push(id);
}

function collectScaffoldGroups(scaffolds) {
  const groups = [];
  for (const [category, signatures] of scaffolds) {
    for (const [signature, ids] of signatures) {
      if (ids.length > 1) groups.push({ category, signature, ids });
    }
  }
  return groups;
}

function checkStaticSourceModules() {
  for (const sourceUrl of sourceUrls) {
    const source = readFileSync(sourceUrl, "utf8");
    for (const [label, pattern] of forbiddenStaticSourcePatterns) {
      assert.ok(!pattern.test(source), `${sourceUrl.pathname} contains forbidden ${label}`);
    }

    const probe = spawnSync(
      process.execPath,
      ["--input-type=module", "--eval", `await import(${JSON.stringify(sourceUrl.href)})`],
      { encoding: "utf8" },
    );
    assert.equal(probe.status, 0, `${sourceUrl.pathname} import failed: ${probe.stderr}`);
    assert.equal(probe.stdout, "", `${sourceUrl.pathname} emitted stdout during import`);
    assert.equal(probe.stderr, "", `${sourceUrl.pathname} emitted stderr during import`);
  }
}

function checkQuestion(question, expectedId, metrics, stimulusId = null) {
  assert.equal(question.id, expectedId);
  requireText(question.stem, `${expectedId}.stem`);
  assert.equal(question.options.length, 4, `${expectedId} must have four options`);
  question.options.forEach((option, index) => requireText(option, `${expectedId}.options[${index}]`));
  requireUnique(question.options, `${expectedId}.options`);
  assert.ok(
    Number.isInteger(question.answerIndex) && question.answerIndex >= 0 && question.answerIndex < 4,
    `${expectedId}.answerIndex out of range`,
  );
  assert.equal(question.rationales.length, 4, `${expectedId} must have four rationales`);
  question.rationales.forEach((rationale, index) => {
    requireText(rationale, `${expectedId}.rationales[${index}]`);
    if (genericDismissalPattern.test(rationale)) metrics.genericDismissals.push(`${expectedId}[${index}]`);
  });
  assert.ok(Object.hasOwn(question, "reviewEvidence"), `${expectedId}.reviewEvidence missing`);
  requireText(question.reviewEvidence, `${expectedId}.reviewEvidence`);
  if (circularReviewPattern.test(question.reviewEvidence)) metrics.circularReviews.push(expectedId);
  if (compatibilityPattern.test(`${question.stem}\n${question.options.join("\n")}`)) {
    metrics.compatibilityQuestions.push(expectedId);
  }
  requireText(question.difficulty, `${expectedId}.difficulty`);
  assert.ok(
    Array.isArray(question.cognitiveProcess) && question.cognitiveProcess.length > 0,
    `${expectedId}.cognitiveProcess missing`,
  );
  question.cognitiveProcess.forEach((value, index) => requireText(value, `${expectedId}.cognitiveProcess[${index}]`));
  if (stimulusId !== null) assert.equal(question.stimulusId, stimulusId, `${expectedId}.stimulusId mismatch`);

  const optionLengths = question.options.map((option) => Array.from(option).length);
  const maximumLength = Math.max(...optionLengths);
  if (
    optionLengths[question.answerIndex] === maximumLength &&
    optionLengths.filter((length) => length === maximumLength).length === 1
  ) {
    metrics.uniqueLongestCorrect += 1;
  }
  metrics.answerPositions.push(question.answerIndex);
  metrics.answerCounts[question.answerIndex] += 1;
  metrics.questionIds.push(question.id);
  metrics.questionStems.push(question.stem);
  metrics.questionSignatures.push(`${question.stem}\u0000${question.options.join("\u0000")}`);
  metrics.reviewEvidence.push(question.reviewEvidence);
  rememberScaffold(metrics.scaffolds, "question stem", question.id, question.stem);
}

function findAnswerRhythms(positions) {
  const rhythms = [];
  let runStart = 0;
  for (let index = 1; index <= positions.length; index += 1) {
    if (index < positions.length && positions[index] === positions[index - 1]) continue;
    if (index - runStart > 2) rhythms.push({ type: "run", start: runStart, end: index - 1 });
    runStart = index;
  }

  for (let period = 2; period <= 6; period += 1) {
    for (let end = period * 2; end <= positions.length; end += 1) {
      let repeated = true;
      for (let offset = 0; offset < period; offset += 1) {
        if (positions[end - period * 2 + offset] !== positions[end - period + offset]) {
          repeated = false;
          break;
        }
      }
      if (repeated) rhythms.push({ type: `period-${period}`, start: end - period * 2, end: end - 1 });
    }
  }
  return rhythms;
}

export function checkPhysicsChemistryU01U10() {
  checkStaticSourceModules();
  assert.equal(units.length, 10, "expected U01-U10");

  const metrics = {
    answerCounts: [0, 0, 0, 0],
    answerPositions: [],
    circularReviews: [],
    compatibilityQuestions: [],
    genericDismissals: [],
    questionIds: [],
    questionSignatures: [],
    questionStems: [],
    reviewEvidence: [],
    scaffolds: new Map(),
    uniqueLongestCorrect: 0,
  };
  const allIds = [];
  const skillIds = [];
  const lectureObjectives = [];
  const stimulusBodies = [];
  const workedPrompts = [];
  const skillPositionSignatures = [];
  let lectureCount = 0;
  let stimulusCount = 0;
  let standaloneCount = 0;
  let stimulusQuestionCount = 0;
  let workedExampleCount = 0;
  let misconceptionCount = 0;

  units.forEach((unit, unitIndex) => {
    const unitNumber = unitIndex + 1;
    const expectedUnitId = `PHYCHM_R4_U${String(unitNumber).padStart(2, "0")}`;
    assert.equal(unit.unitId, expectedUnitId);
    requireText(unit.title, `${expectedUnitId}.title`);
    assert.equal(unit.skills.length, 8, `${expectedUnitId} must have eight skills`);
    assert.ok(Array.isArray(unit.authorityRefs) && unit.authorityRefs.length > 0, `${expectedUnitId}.authorityRefs missing`);
    assert.ok(unit.provenance && typeof unit.provenance === "object", `${expectedUnitId}.provenance missing`);

    unit.skills.forEach((skill, localIndex) => {
      const number = unitIndex * 8 + localIndex + 1;
      const suffix = pad(number);
      const expectedSkillId = `PHYCHM_R4_S${suffix}`;
      assert.equal(skill.id, expectedSkillId);
      requireText(skill.title, `${expectedSkillId}.title`);
      skillIds.push(skill.id);
      allIds.push(skill.id);
      assert.ok(Array.isArray(skill.authorityRefs) && skill.authorityRefs.length > 0, `${skill.id}.authorityRefs missing`);
      assert.ok(skill.provenance && typeof skill.provenance === "object", `${skill.id}.provenance missing`);
      assert.ok(Array.isArray(skill.assetIds), `${skill.id}.assetIds missing`);

      assert.equal(skill.lecture.id, `PHYCHM_R4_L_${suffix}`);
      lectureCount += 1;
      allIds.push(skill.lecture.id);
      requireText(skill.lecture.objective, `${skill.lecture.id}.objective`);
      lectureObjectives.push(skill.lecture.objective);
      rememberScaffold(metrics.scaffolds, "lecture objective", skill.lecture.id, skill.lecture.objective);
      assert.equal(skill.lecture.sections.length, 3, `${skill.lecture.id} must have three sections`);
      skill.lecture.sections.forEach((section, sectionIndex) => {
        requireText(section.title, `${skill.lecture.id}.sections[${sectionIndex}].title`);
        requireText(section.content, `${skill.lecture.id}.sections[${sectionIndex}].content`);
        rememberScaffold(
          metrics.scaffolds,
          "lecture section",
          `${skill.lecture.id}.sections[${sectionIndex}]`,
          section.content,
        );
      });
      assert.equal(skill.lecture.workedExamples.length, 3, `${skill.lecture.id} must have three worked examples`);
      assert.equal(skill.lecture.misconceptions.length, 4, `${skill.lecture.id} must have four misconceptions`);
      workedExampleCount += skill.lecture.workedExamples.length;
      misconceptionCount += skill.lecture.misconceptions.length;

      skill.lecture.workedExamples.forEach((example, exampleIndex) => {
        assert.equal(example.id, `PHYCHM_R4_L_${suffix}_EX_${String(exampleIndex + 1).padStart(2, "0")}`);
        allIds.push(example.id);
        requireText(example.prompt, `${example.id}.prompt`);
        requireText(example.answer, `${example.id}.answer`);
        requireText(example.why, `${example.id}.why`);
        assert.ok(Array.isArray(example.steps) && example.steps.length > 0, `${example.id}.steps missing`);
        example.steps.forEach((step, stepIndex) => requireText(step, `${example.id}.steps[${stepIndex}]`));
        workedPrompts.push(example.prompt);
        rememberScaffold(metrics.scaffolds, "worked prompt", example.id, example.prompt);
        rememberScaffold(metrics.scaffolds, "worked explanation", example.id, example.why);
      });

      skill.lecture.misconceptions.forEach((misconception, misconceptionIndex) => {
        const id = `${skill.lecture.id}.misconceptions[${misconceptionIndex}]`;
        requireText(misconception.belief, `${id}.belief`);
        requireText(misconception.whyWrong, `${id}.whyWrong`);
        requireText(misconception.correction, `${id}.correction`);
        rememberScaffold(metrics.scaffolds, "misconception belief", id, misconception.belief);
        rememberScaffold(metrics.scaffolds, "misconception explanation", id, misconception.whyWrong);
        rememberScaffold(metrics.scaffolds, "misconception correction", id, misconception.correction);
      });

      assert.equal(skill.stimulus.id, `PHYCHM_R4_STIM_${suffix}`);
      stimulusCount += 1;
      allIds.push(skill.stimulus.id);
      requireText(skill.stimulus.title, `${skill.stimulus.id}.title`);
      requireText(skill.stimulus.body, `${skill.stimulus.id}.body`);
      stimulusBodies.push(skill.stimulus.body);
      rememberScaffold(metrics.scaffolds, "stimulus body", skill.stimulus.id, skill.stimulus.body);
      assert.ok(Array.isArray(skill.stimulus.assetIds), `${skill.stimulus.id}.assetIds missing`);

      const skillPositionCounts = [0, 0, 0, 0];
      const skillPositionStart = metrics.answerPositions.length;
      assert.equal(skill.standaloneQuestions.length, 12, `${skill.id} must have twelve standalone questions`);
      skill.standaloneQuestions.forEach((question, questionIndex) => {
        checkQuestion(question, `PHYCHM_R4_Q_${suffix}_${String(questionIndex + 1).padStart(2, "0")}`, metrics);
        allIds.push(question.id);
        skillPositionCounts[question.answerIndex] += 1;
        standaloneCount += 1;
      });

      assert.equal(skill.stimulusQuestions.length, 3, `${skill.id} must have three stimulus questions`);
      skill.stimulusQuestions.forEach((question, questionIndex) => {
        checkQuestion(
          question,
          `PHYCHM_R4_STIMQ_${suffix}_${String(questionIndex + 1).padStart(2, "0")}`,
          metrics,
          skill.stimulus.id,
        );
        allIds.push(question.id);
        skillPositionCounts[question.answerIndex] += 1;
        stimulusQuestionCount += 1;
      });
      assert.ok(
        skillPositionCounts.every((count) => count === 3 || count === 4),
        `${skill.id} answer positions must each occur three or four times: ${skillPositionCounts.join("/")}`,
      );
      skillPositionSignatures.push(metrics.answerPositions.slice(skillPositionStart).join(""));
    });
  });

  const questionCount = standaloneCount + stimulusQuestionCount;
  const longestCorrectRatio = metrics.uniqueLongestCorrect / questionCount;
  const scaffoldGroups = collectScaffoldGroups(metrics.scaffolds);
  const answerRhythms = findAnswerRhythms(metrics.answerPositions);

  assert.equal(skillIds.length, 80);
  assert.equal(lectureCount, 80);
  assert.equal(stimulusCount, 80);
  assert.equal(standaloneCount, 960);
  assert.equal(stimulusQuestionCount, 240);
  assert.equal(questionCount, 1200);
  assert.equal(workedExampleCount, 240);
  assert.equal(misconceptionCount, 320);
  assert.ok(Math.max(...metrics.answerCounts) - Math.min(...metrics.answerCounts) <= 1, "global answer positions must be near-even");
  assert.ok(longestCorrectRatio < 0.35, `uniquely-longest correct ratio must be below 35%, got ${longestCorrectRatio}`);
  assert.deepEqual(metrics.circularReviews, [], `circular review evidence: ${metrics.circularReviews.join(", ")}`);
  assert.deepEqual(metrics.genericDismissals, [], `generic rationale dismissals: ${metrics.genericDismissals.join(", ")}`);
  assert.deepEqual(
    metrics.compatibilityQuestions,
    [],
    `compatibility-template questions: ${metrics.compatibilityQuestions.join(", ")}`,
  );
  assert.deepEqual(scaffoldGroups, [], `duplicated prose scaffolds: ${JSON.stringify(scaffoldGroups)}`);
  assert.deepEqual(answerRhythms, [], `answer-position rhythms: ${JSON.stringify(answerRhythms)}`);
  requireUnique(allIds, "all record IDs");
  requireUnique(skillIds, "skill IDs");
  requireUnique(skillPositionSignatures, "per-skill answer-position schedules");
  requireUnique(lectureObjectives, "lecture objectives");
  requireUnique(stimulusBodies, "stimulus bodies");
  requireUnique(workedPrompts, "worked-example prompts");
  requireUnique(metrics.questionIds, "question IDs");
  requireUnique(metrics.questionStems, "question stems");
  requireUnique(metrics.questionSignatures, "question stem/option signatures");
  requireUnique(metrics.reviewEvidence, "question review evidence");

  return {
    units: units.length,
    skills: skillIds.length,
    lectures: lectureCount,
    stimuli: stimulusCount,
    standaloneCount,
    stimulusQuestionCount,
    questionCount,
    answerCounts: metrics.answerCounts,
    uniqueLongestCorrect: metrics.uniqueLongestCorrect,
    longestCorrectRatio,
    circularTokenCount: metrics.circularReviews.length,
    scaffoldGroups: scaffoldGroups.length,
    answerRhythmGroups: answerRhythms.length,
  };
}

if (process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url) {
  const result = checkPhysicsChemistryU01U10();
  console.log(
    `check-physics-chemistry-u01-u10: OK; ${result.units} units; ${result.skills} skills; ` +
      `${result.lectures} lectures; ${result.stimuli} stimuli; ${result.standaloneCount} standalone + ` +
      `${result.stimulusQuestionCount} stimulus = ${result.questionCount} questions; ` +
      `A/B/C/D=${result.answerCounts.join("/")}; unique-longest=${result.uniqueLongestCorrect}/${result.questionCount} ` +
      `(${(result.longestCorrectRatio * 100).toFixed(2)}%); circular=${result.circularTokenCount}; ` +
      `scaffolds=${result.scaffoldGroups}; rhythms=${result.answerRhythmGroups}`,
  );
}
