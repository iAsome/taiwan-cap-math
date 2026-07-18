import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";
import { PHYSICS_CHEMISTRY_AUTHORED_U11 as U11 } from "./physics-chemistry-u11.mjs";
import { PHYSICS_CHEMISTRY_AUTHORED_U12 as U12 } from "./physics-chemistry-u12.mjs";
import { PHYSICS_CHEMISTRY_AUTHORED_U13 as U13 } from "./physics-chemistry-u13.mjs";
import { PHYSICS_CHEMISTRY_AUTHORED_U14 as U14 } from "./physics-chemistry-u14.mjs";
import { PHYSICS_CHEMISTRY_AUTHORED_U15 as U15 } from "./physics-chemistry-u15.mjs";
import { PHYSICS_CHEMISTRY_AUTHORED_U16 as U16 } from "./physics-chemistry-u16.mjs";
import { PHYSICS_CHEMISTRY_AUTHORED_U17 as U17 } from "./physics-chemistry-u17.mjs";
import { PHYSICS_CHEMISTRY_AUTHORED_U18 as U18 } from "./physics-chemistry-u18.mjs";
import { PHYSICS_CHEMISTRY_AUTHORED_U19 as U19 } from "./physics-chemistry-u19.mjs";
import { PHYSICS_CHEMISTRY_AUTHORED_U20 as U20 } from "./physics-chemistry-u20.mjs";

const UNITS = [U11, U12, U13, U14, U15, U16, U17, U18, U19, U20];
const SOURCE_DIR = path.dirname(fileURLToPath(import.meta.url));
const CIRCULAR_REVIEW = /答案索引|正確選項|依\s*answerIndex|answerIndex|答案位置|選項排列|由第[一二三四1234]個選項|第[一二三四1234]個選項(?:就是|是)答案/gu;
const GENERIC_DISMISSAL = /^(?:無關|不會|不足|不對|相反|未給|未改|未必|可不同|不是|錯誤|不符|沒有|仍有|另量|未說明)[。！]?$/u;

function hasText(value) {
  return typeof value === "string" && value.trim().length > 0;
}

function normalized(value) {
  return [...value.normalize("NFKC")].filter(char => /[\p{Script=Han}A-Za-z0-9]/u.test(char)).join("");
}

function compact(value) {
  return value.normalize("NFKC").replace(/\s+/gu, "");
}

function hanLength(value) {
  return [...normalized(value)].length;
}

function assertStaticSource(unitNumber, importedUnit) {
  const file = path.join(SOURCE_DIR, `physics-chemistry-u${unitNumber}.mjs`);
  const source = readFileSync(file, "utf8");
  const exportName = `PHYSICS_CHEMISTRY_AUTHORED_U${unitNumber}`;
  const match = source.match(new RegExp(`^export const ${exportName} = ([\\s\\S]+);\\s*$`, "u"));
  assert(match, `${path.basename(file)} must contain one static export assignment`);
  assert.deepEqual(JSON.parse(match[1]), importedUnit, `${path.basename(file)} must be JSON-compatible static data`);

  const probe = spawnSync(process.execPath, [
    "--input-type=module",
    "--eval",
    `await import(${JSON.stringify(`${pathToFileURL(file).href}?side-effect-check`)})`,
  ], { encoding: "utf8" });
  assert.equal(probe.status, 0, `${path.basename(file)} import failed: ${probe.stderr}`);
  assert.equal(probe.stdout, "", `${path.basename(file)} wrote to stdout while importing`);
  assert.equal(probe.stderr, "", `${path.basename(file)} wrote to stderr while importing`);
}

function scaffoldGroups(records, width = 20, minimumSkills = 4) {
  const occurrences = new Map();
  for (const record of records) {
    const value = normalized(record.text);
    if (value.length < width) continue;
    const local = new Set();
    for (let index = 0; index <= value.length - width; index += 1) {
      local.add(value.slice(index, index + width));
    }
    for (const fragment of local) {
      const entry = occurrences.get(fragment) ?? { skills: new Set(), labels: [] };
      entry.skills.add(record.skillId);
      if (entry.labels.length < 4) entry.labels.push(record.label);
      occurrences.set(fragment, entry);
    }
  }
  return [...occurrences.entries()]
    .filter(([, entry]) => entry.skills.size >= minimumSkills)
    .map(([fragment, entry]) => ({ fragment, skills: [...entry.skills], labels: entry.labels }));
}

export function validatePhysicsChemistryU11U20() {
  const ids = new Set();
  const stems = new Set();
  const answerSequences = new Set();
  const answerCounts = [0, 0, 0, 0];
  const proseRecords = [];
  let circularTokens = 0;
  let lectureCount = 0;
  let stimulusCount = 0;
  let standaloneCount = 0;
  let stimulusQuestionCount = 0;
  let longestCorrect = 0;
  let skillNumber = 81;

  const addId = id => {
    assert(hasText(id), "missing id");
    assert(!ids.has(id), `duplicate id ${id}`);
    ids.add(id);
  };
  const addProse = (skillId, label, text) => {
    if (hasText(text)) proseRecords.push({ skillId, label, text });
  };

  for (let unitOffset = 0; unitOffset < UNITS.length; unitOffset += 1) {
    const unitNumber = unitOffset + 11;
    const unit = UNITS[unitOffset];
    assertStaticSource(unitNumber, unit);
    assert.equal(unit.unitId, `PHYCHM_R4_U${unitNumber}`);
    assert.equal(unit.skills.length, 8, `${unit.unitId} skill count`);
    assert(unit.authorityRefs.length > 0 && unit.authorityRefs.every(ref => /^AUTH-NATURAL-/.test(ref)));
    assert(Object.keys(unit.provenance).length >= 3 && Object.values(unit.provenance).every(hasText), `${unit.unitId} provenance`);

    for (const skill of unit.skills) {
      const number = String(skillNumber).padStart(3, "0");
      assert.equal(skill.id, `PHYCHM_R4_S${number}`);
      assert.equal(skill.lecture.id, `PHYCHM_R4_L_${number}`);
      assert.equal(skill.stimulus.id, `PHYCHM_R4_STIM_${number}`);
      assert.equal(skill.lecture.workedExamples.length, 3, `${skill.id} examples`);
      assert.equal(skill.lecture.misconceptions.length, 4, `${skill.id} misconceptions`);
      assert.equal(skill.standaloneQuestions.length, 12, `${skill.id} standalone`);
      assert.equal(skill.stimulusQuestions.length, 3, `${skill.id} stimulus questions`);
      assert(skill.lecture.sections.length >= 3 && hasText(skill.lecture.objective));
      assert(skill.authorityRefs.length > 0 && skill.authorityRefs.every(ref => /^AUTH-NATURAL-/.test(ref)));
      assert.deepEqual(skill.provenance, unit.provenance, `${skill.id} provenance`);
      addId(skill.id);
      addId(skill.lecture.id);
      addId(skill.stimulus.id);
      lectureCount += 1;
      stimulusCount += 1;
      addProse(skill.id, `${skill.lecture.id}:objective`, skill.lecture.objective);
      skill.lecture.sections.forEach((section, index) => {
        const sectionText = section.body ?? section.content;
        assert(hasText(section.title) && hasText(sectionText), `${skill.lecture.id} section ${index + 1}`);
        addProse(skill.id, `${skill.lecture.id}:section:${index + 1}`, sectionText);
      });

      for (let exampleIndex = 0; exampleIndex < 3; exampleIndex += 1) {
        const example = skill.lecture.workedExamples[exampleIndex];
        assert.equal(example.id, `PHYCHM_R4_L_${number}_EX_${String(exampleIndex + 1).padStart(2, "0")}`);
        assert(hasText(example.prompt) && hasText(example.answer) && hasText(example.why));
        assert(example.steps.length >= 3 && example.steps.every(hasText));
        addId(example.id);
        addProse(skill.id, `${example.id}:prompt`, example.prompt);
        addProse(skill.id, `${example.id}:why`, example.why);
      }
      skill.lecture.misconceptions.forEach((misconception, index) => {
        assert(hasText(misconception.belief) && hasText(misconception.whyWrong) && hasText(misconception.correction));
        addProse(skill.id, `${skill.lecture.id}:misconception:${index + 1}`, `${misconception.belief}${misconception.whyWrong}${misconception.correction}`);
      });
      assert(hasText(skill.stimulus.title) && hasText(skill.stimulus.body));
      assert(Array.isArray(skill.stimulus.assetIds));
      addProse(skill.id, `${skill.stimulus.id}:body`, skill.stimulus.body);

      const skillAnswerCounts = [0, 0, 0, 0];
      const skillQuestions = [...skill.standaloneQuestions, ...skill.stimulusQuestions];
      const checkQuestion = (question, expectedId, stimulusId) => {
        assert.equal(question.id, expectedId);
        assert(hasText(question.stem) && !stems.has(compact(question.stem)), `duplicate stem ${question.id}`);
        stems.add(compact(question.stem));
        assert.equal(question.options.length, 4, `${question.id} option count`);
        assert.equal(question.rationales.length, 4, `${question.id} rationale count`);
        assert.equal(new Set(question.options.map(compact)).size, 4, `${question.id} duplicate options`);
        assert(Number.isInteger(question.answerIndex) && question.answerIndex >= 0 && question.answerIndex < 4);
        assert(question.options.every(hasText) && question.rationales.every(hasText));
        assert(question.rationales.every(rationale => !GENERIC_DISMISSAL.test(rationale.trim())), `${question.id} generic rationale`);
        assert(hasText(question.reviewEvidence) && hanLength(question.reviewEvidence) >= 20, `${question.id} review evidence too short`);
        assert(question.reviewEvidence.includes(question.options[question.answerIndex]), `${question.id} review must state the proved result`);
        circularTokens += (question.reviewEvidence.match(CIRCULAR_REVIEW) ?? []).length;
        assert(hasText(question.difficulty) && question.cognitiveProcess.length > 0 && question.cognitiveProcess.every(hasText));
        if (stimulusId) assert.equal(question.stimulusId, stimulusId);
        addId(question.id);
        addProse(skill.id, `${question.id}:stem`, question.stem);
        addProse(skill.id, `${question.id}:review`, question.reviewEvidence);
        question.rationales.forEach((rationale, index) => addProse(skill.id, `${question.id}:rationale:${index + 1}`, rationale));
        skillAnswerCounts[question.answerIndex] += 1;
        answerCounts[question.answerIndex] += 1;
        const lengths = question.options.map(option => [...option.trim()].length);
        const maximum = Math.max(...lengths);
        if (lengths[question.answerIndex] === maximum && lengths.filter(length => length === maximum).length === 1) {
          longestCorrect += 1;
        }
      };

      skill.standaloneQuestions.forEach((question, index) => {
        checkQuestion(question, `PHYCHM_R4_Q_${number}_${String(index + 1).padStart(2, "0")}`);
        standaloneCount += 1;
      });
      skill.stimulusQuestions.forEach((question, index) => {
        checkQuestion(question, `PHYCHM_R4_STIMQ_${number}_${String(index + 1).padStart(2, "0")}`, skill.stimulus.id);
        stimulusQuestionCount += 1;
      });

      assert(skillAnswerCounts.every(count => count === 3 || count === 4), `${skill.id} answer positions ${skillAnswerCounts}`);
      const sequence = skillQuestions.map(question => question.answerIndex);
      assert(!sequence.some((value, index) => index >= 2 && value === sequence[index - 1] && value === sequence[index - 2]), `${skill.id} repeated answer run`);
      assert(!sequence.some((value, index) => index >= 5 && value === sequence[index - 2] && value === sequence[index - 4] && sequence[index - 1] === sequence[index - 3] && sequence[index - 1] === sequence[index - 5]), `${skill.id} alternating answer rhythm`);
      const sequenceKey = sequence.join("");
      assert(!answerSequences.has(sequenceKey), `${skill.id} duplicates another answer sequence`);
      answerSequences.add(sequenceKey);
      skillNumber += 1;
    }
  }

  const groups = scaffoldGroups(proseRecords);
  const totalQuestions = standaloneCount + stimulusQuestionCount;
  const longestCorrectRatio = longestCorrect / totalQuestions;
  assert.equal(skillNumber, 161);
  assert.equal(lectureCount, 80);
  assert.equal(stimulusCount, 80);
  assert.equal(standaloneCount, 960);
  assert.equal(stimulusQuestionCount, 240);
  assert.equal(totalQuestions, 1200);
  assert.deepEqual(answerCounts, [300, 300, 300, 300]);
  assert.equal(circularTokens, 0, `circular review tokens: ${circularTokens}`);
  assert(longestCorrectRatio < 0.35, `uniquely-longest correct ratio ${(longestCorrectRatio * 100).toFixed(2)}%`);
  assert.deepEqual(groups, [], `duplicated scaffold groups: ${JSON.stringify(groups.slice(0, 8))}`);
  return {
    units: UNITS.length,
    skills: skillNumber - 81,
    lectures: lectureCount,
    stimuli: stimulusCount,
    standaloneQuestions: standaloneCount,
    stimulusQuestions: stimulusQuestionCount,
    questions: totalQuestions,
    answerCounts,
    longestCorrect,
    longestCorrectRatio,
    circularTokens,
    scaffoldGroups: groups.length,
  };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = validatePhysicsChemistryU11U20();
  console.log(`validate-physics-chemistry-u11-u20: OK - ${result.units} units, ${result.skills} skills, ${result.lectures} lectures, ${result.stimuli} stimuli, ${result.standaloneQuestions} standalone + ${result.stimulusQuestions} stimulus = ${result.questions} questions; A/B/C/D ${result.answerCounts.join("/")}; uniquely-longest ${result.longestCorrect}/${result.questions} (${(result.longestCorrectRatio * 100).toFixed(2)}%); circular ${result.circularTokens}; scaffold groups ${result.scaffoldGroups}`);
}
