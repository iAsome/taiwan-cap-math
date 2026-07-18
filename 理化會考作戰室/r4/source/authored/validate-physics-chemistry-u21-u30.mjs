import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const STATIC_EXPORT = /^export const ([A-Z0-9_]+) = ([\s\S]+);\s*$/u;
const CIRCULAR_RE = /答案索引|正確選項|依\s*answerIndex|answerIndex|答案位置|選項排列(?:決定|顯示)|由第[一二三四1234]個選項|第[一二三四1234]項(?:就是|為)答案|索引\s*[0-3]/giu;
const GENERIC_DISMISSAL_RE = /與題意無關|不是本題重點|只是干擾選項|所以不選|排除即可|顯然錯誤|不符合正確答案/gu;
const POLARITY_RE = /不|無|未|非|不能|不可|錯|誤/u;
const CROSS_ARTIFACT_PARENTHESES_RE = /[（(][^）)\r\n]{0,180}(?:[？?]|教學(?:重點|內容)|學習目標|例題|迷思|題幹|哪(?:一|個|項)|如何|為何|可求|由表|請)[^）)\r\n]*[）)]/gu;
const QUOTED_META_RE = /[「『][^」』\r\n]{0,180}(?:教學(?:重點|內容)|學習目標|例題|迷思|正確選項|答案位置|如何檢查|如何改正|哪項可保留|符合重點)[^」』\r\n]*[」』]/gu;
const META_QUESTION_RE = /哪(?:一|個|項)敘述(?:符合|對應)(?:教學|學習)|符合(?:教學|學習)(?:重點|目標)|依(?:本|上)講義|根據例題|採用[^？?]{0,80}理由為何|如何檢查|如何改正|哪項可保留|要守住哪個限制|能否外推[^？?]{0,80}界線/gu;
const ASSEMBLED_OPTION_RE = /[？?]|教學(?:重點|內容)|學習目標|例題|迷思|題幹|前述內容|相鄰題目|上一題|下一題/gu;
const BELIEF_ERROR_RE = /認為|以為|把|只|忽略|混淆|混用|誤|判|直接|一律|仍|不看|不先|省略|看到|計算|比較|畫|寫|用|遇到|取|更換|換算|認定|一定|必須|等同|所以|越|就|不是|沒有|選|相加|相減|當成|忘記|捨去|顛倒|沿用|改成|將|會讓|是因|表示/u;
const KNOWN_SCAFFOLDS = [
  /不只要記住結論，還要能從/u,
  /研究紀錄[^。]{0,30}保留[^。]{0,30}原始欄位/u,
  /成對比較後，何者成立/u,
  /外推前，哪個限制不能漏/u,
  /是否支持[^？?]{0,40}應採哪個說法/u,
  /針對「[^」]+」，哪個回應正確/u,
  /「[^」]+」錯在哪裡/u,
  /檢查「[^」]+」時讀到「[^」]+」；改正定義為何/u,
  /依[^，]+核對「[^」]+」[^？?]+應如何修正/u,
  /有人從「[^」]+」推出「[^」]+」[^？?]+要檢查哪項關係/u,
  /記成「[^」]+」後出現「[^」]+」[^？?]+判準可駁回/u,
  /合看「[^」]+」和「[^」]+」[^？?]+計算能排除/u,
  /牴觸；[^？?]+應以哪個關係取代/u,
  /要納入[^？?]+推論，須保留哪項條件/u,
  /四列[^？?]+逐一核對後[^？?]+還可得到什麼/u,
  /移到另一情境[^？?]+要守住哪個限制/u,
  /忽略[^？?]+需補哪項邊界/u,
  /下一次只改[^；]+；為免[^？?]+須固定何事/u,
  /能否外推[^？?]+哪條界線排除/u,
];

function unique(values, label) {
  assert.equal(new Set(values).size, values.length, `${label} must be unique`);
}

function nonempty(value, label, minimum = 1) {
  assert.equal(typeof value, "string", `${label} must be a string`);
  assert(value.trim().length >= minimum, `${label} is empty or too short`);
}

function stripTerminal(value) {
  return value.replace(/[。；;\s]+$/u, "");
}

function normalizedText(value) {
  return stripTerminal(value).replace(/[\p{P}\p{S}\s]/gu, "");
}

function countMatches(value, expression) {
  return [...value.matchAll(expression)].length;
}

function questionStrings(question) {
  return [question.stem, ...question.options, ...question.rationales, question.reviewEvidence];
}

function skillStrings(skill) {
  const values = [skill.title, skill.lecture.objective];
  for (const section of skill.lecture.sections) values.push(section.title, section.content);
  for (const example of skill.lecture.workedExamples) {
    values.push(example.prompt, ...example.steps, example.answer, example.why);
  }
  for (const misconception of skill.lecture.misconceptions) {
    values.push(misconception.belief, misconception.whyWrong, misconception.correction);
  }
  values.push(skill.stimulus.title, skill.stimulus.body, skill.stimulus.dataTable.caption);
  values.push(...skill.stimulus.dataTable.columns);
  for (const row of skill.stimulus.dataTable.rows) values.push(...row.map(String));
  for (const question of [...skill.standaloneQuestions, ...skill.stimulusQuestions]) {
    values.push(...questionStrings(question));
  }
  return values;
}

function artifactSourceStrings(skill) {
  const values = [skill.lecture.objective];
  for (const section of skill.lecture.sections) values.push(section.title, section.content);
  for (const example of skill.lecture.workedExamples) {
    values.push(example.prompt, ...example.steps, example.answer, example.why);
  }
  for (const misconception of skill.lecture.misconceptions) {
    values.push(misconception.belief, misconception.whyWrong, misconception.correction);
  }
  values.push(skill.stimulus.title, skill.stimulus.body, skill.stimulus.dataTable.caption);
  values.push(...skill.stimulus.dataTable.columns);
  for (const row of skill.stimulus.dataTable.rows) values.push(...row.map(String));
  return values;
}

function repeatedHanScaffolds(skills, size = 14) {
  const owners = new Map();
  for (const skill of skills) {
    const local = new Set();
    for (const value of skillStrings(skill)) {
      const han = [...value].filter((character) => /\p{Script=Han}/u.test(character)).join("");
      for (let index = 0; index + size <= han.length; index += 1) {
        local.add(han.slice(index, index + size));
      }
    }
    for (const scaffold of local) {
      const prior = owners.get(scaffold);
      if (prior === undefined) owners.set(scaffold, skill.id);
      else if (typeof prior === "string" && prior !== skill.id) owners.set(scaffold, [prior, skill.id]);
      else if (Array.isArray(prior) && !prior.includes(skill.id) && prior.length < 3) prior.push(skill.id);
    }
  }
  return [...owners.entries()].filter(([, skillIds]) => Array.isArray(skillIds) && skillIds.length >= 3);
}

async function loadStaticUnit(unitNumber) {
  const fileName = `physics-chemistry-u${unitNumber}.mjs`;
  const filePath = path.join(HERE, fileName);
  const source = await readFile(filePath, "utf8");
  const match = source.match(STATIC_EXPORT);
  assert(match, `${fileName}: source must be one static JSON-literal export`);
  const expectedName = `PHYSICS_CHEMISTRY_AUTHORED_U${unitNumber}`;
  assert.equal(match[1], expectedName, `${fileName}: unexpected export name`);
  const parsed = JSON.parse(match[2]);

  const messages = [];
  const originalConsole = {};
  for (const level of ["log", "warn", "error"]) {
    originalConsole[level] = console[level];
    console[level] = (...args) => messages.push([level, ...args]);
  }
  let imported;
  try {
    imported = await import(`${pathToFileURL(filePath).href}?validate=${Date.now()}-${unitNumber}`);
  } finally {
    for (const level of ["log", "warn", "error"]) console[level] = originalConsole[level];
  }
  assert.equal(messages.length, 0, `${fileName}: import produced console side effects`);
  assert.deepEqual(Object.keys(imported), [expectedName], `${fileName}: unexpected module exports`);
  assert.deepEqual(imported[expectedName], parsed, `${fileName}: evaluated export differs from static data`);
  return parsed;
}

function validateProvenance(provenance, label) {
  assert(provenance && typeof provenance === "object", `${label}: provenance required`);
  assert.equal(provenance.status, "original", `${label}: provenance status must be original`);
  nonempty(provenance.authorRole, `${label}.authorRole`);
  nonempty(provenance.copyrightStatus, `${label}.copyrightStatus`);
}

function validateQuestion(question, expectedId, stimulusId, state, skill) {
  assert.equal(question.id, expectedId, `${skill.id}: question order or ID changed`);
  if (stimulusId === null) assert(!Object.hasOwn(question, "stimulusId"), `${question.id}: unexpected stimulusId`);
  else assert.equal(question.stimulusId, stimulusId, `${question.id}: broken stimulus link`);
  nonempty(question.stem, `${question.id}.stem`, 4);
  assert(Array.isArray(question.options) && question.options.length === 4, `${question.id}: four options required`);
  assert(Array.isArray(question.rationales) && question.rationales.length === 4, `${question.id}: four rationales required`);
  assert(Number.isInteger(question.answerIndex) && question.answerIndex >= 0 && question.answerIndex < 4, `${question.id}: invalid answerIndex`);
  unique(question.options, `${question.id} options`);
  for (let index = 0; index < 4; index += 1) {
    nonempty(question.options[index], `${question.id}.options[${index}]`);
    nonempty(question.rationales[index], `${question.id}.rationales[${index}]`, 4);
  }
  nonempty(question.reviewEvidence, `${question.id}.reviewEvidence`, 12);
  nonempty(question.difficulty, `${question.id}.difficulty`);
  assert(Array.isArray(question.cognitiveProcess) && question.cognitiveProcess.length > 0, `${question.id}: cognitiveProcess required`);

  state.questionIds.push(question.id);
  state.stems.push(question.stem);
  state.answerPositions[question.answerIndex] += 1;
  state.answerSequence.push(question.answerIndex);
  state.allQuestions.push(question);
  const reviewText = [question.reviewEvidence, ...question.rationales].join("\n");
  state.circularTokens += countMatches(reviewText, CIRCULAR_RE);
  state.genericDismissals += countMatches(reviewText, GENERIC_DISMISSAL_RE);
  state.crossArtifactParentheses += countMatches(question.options.join("\n"), CROSS_ARTIFACT_PARENTHESES_RE);
  state.quotedMetaFrames += countMatches([question.stem, ...question.options].join("\n"), QUOTED_META_RE);
  state.metaQuestionFrames += countMatches(question.stem, META_QUESTION_RE);
  state.assembledOptionMarkers += countMatches(question.options.join("\n"), ASSEMBLED_OPTION_RE);
}

function validateSkill(skill, skillNumber, bindingUnit, state) {
  const expectedSkillId = `PHYCHM_R4_S${String(skillNumber).padStart(3, "0")}`;
  assert.equal(skill.id, expectedSkillId, `skill ${skillNumber}: ID or ordering changed`);
  nonempty(skill.title, `${skill.id}.title`, 4);
  assert.deepEqual(skill.authorityRefs, bindingUnit.authorityRefs, `${skill.id}: authorityRefs differ from frozen binding`);
  validateProvenance(skill.provenance, skill.id);
  assert(Array.isArray(skill.assetIds), `${skill.id}: assetIds must be an array`);

  const lecture = skill.lecture;
  assert.equal(lecture.id, `PHYCHM_R4_L_${skillNumber}`, `${skill.id}: lecture ID changed`);
  nonempty(lecture.objective, `${lecture.id}.objective`, 8);
  assert(Array.isArray(lecture.sections) && lecture.sections.length >= 3, `${lecture.id}: at least three sections required`);
  for (const section of lecture.sections) {
    nonempty(section.title, `${lecture.id} section title`, 2);
    nonempty(section.content, `${lecture.id} section content`, 12);
  }
  assert.equal(lecture.workedExamples.length, 3, `${lecture.id}: exactly three worked examples required`);
  lecture.workedExamples.forEach((example, index) => {
    assert.equal(example.id, `${lecture.id}_EX_${String(index + 1).padStart(2, "0")}`, `${lecture.id}: worked-example ID changed`);
    nonempty(example.prompt, `${example.id}.prompt`, 8);
    assert(Array.isArray(example.steps) && example.steps.length >= 3, `${example.id}: at least three steps required`);
    example.steps.forEach((step, stepIndex) => nonempty(step, `${example.id}.steps[${stepIndex}]`, 4));
    nonempty(example.answer, `${example.id}.answer`, 3);
    nonempty(example.why, `${example.id}.why`, 8);
    state.examplePrompts.push(example.prompt);
  });
  assert.equal(lecture.misconceptions.length, 4, `${lecture.id}: exactly four misconceptions required`);
  unique(lecture.misconceptions.map(({ belief }) => belief), `${lecture.id} misconception beliefs`);
  const promptTexts = [
    lecture.objective,
    ...lecture.workedExamples.map(({ prompt }) => prompt),
    ...skill.standaloneQuestions.map(({ stem }) => stem),
    ...skill.stimulusQuestions.map(({ stem }) => stem),
  ].map(normalizedText);
  for (const misconception of lecture.misconceptions) {
    nonempty(misconception.belief, `${lecture.id} misconception`, 6);
    nonempty(misconception.whyWrong, `${lecture.id} misconception reason`, 12);
    nonempty(misconception.correction, `${lecture.id} misconception correction`, 10);
    const belief = normalizedText(misconception.belief);
    const whyWrong = normalizedText(misconception.whyWrong);
    const correction = normalizedText(misconception.correction);
    const malformed =
      /[？?]/u.test(misconception.belief)
      || /[？?]/u.test(misconception.whyWrong)
      || /[？?]/u.test(misconception.correction)
      || countMatches(misconception.belief, QUOTED_META_RE) > 0
      || countMatches(misconception.belief, META_QUESTION_RE) > 0
      || countMatches(`${misconception.whyWrong}\n${misconception.correction}`, META_QUESTION_RE) > 0
      || !BELIEF_ERROR_RE.test(misconception.belief)
      || belief === whyWrong
      || belief === correction
      || whyWrong === correction
      || promptTexts.includes(belief);
    if (malformed) state.malformedMisconceptions.push(`${skill.id}: ${misconception.belief}`);
    state.misconceptionBeliefs.push(misconception.belief);
  }

  const stimulus = skill.stimulus;
  assert.equal(stimulus.id, `PHYCHM_R4_STIM_${skillNumber}`, `${skill.id}: stimulus ID changed`);
  nonempty(stimulus.title, `${stimulus.id}.title`, 4);
  nonempty(stimulus.body, `${stimulus.id}.body`, 12);
  assert(Array.isArray(stimulus.assetIds), `${stimulus.id}: assetIds must be an array`);
  const table = stimulus.dataTable;
  nonempty(table.caption, `${stimulus.id}.caption`, 4);
  assert(Array.isArray(table.columns) && table.columns.length >= 3, `${stimulus.id}: at least three columns required`);
  assert.equal(table.rows.length, 4, `${stimulus.id}: exactly four data rows required`);
  for (const row of table.rows) assert.equal(row.length, table.columns.length, `${stimulus.id}: row width mismatch`);

  assert.equal(skill.standaloneQuestions.length, 12, `${skill.id}: 12 standalone questions required`);
  assert.equal(skill.stimulusQuestions.length, 3, `${skill.id}: three stimulus questions required`);
  const localPositions = [0, 0, 0, 0];
  const sequenceStart = state.answerSequence.length;
  skill.standaloneQuestions.forEach((question, index) => {
    validateQuestion(question, `PHYCHM_R4_Q_${skillNumber}_${String(index + 1).padStart(2, "0")}`, null, state, skill);
    localPositions[question.answerIndex] += 1;
  });
  skill.stimulusQuestions.forEach((question, index) => {
    validateQuestion(question, `PHYCHM_R4_STIMQ_${skillNumber}_${String(index + 1).padStart(2, "0")}`, stimulus.id, state, skill);
    localPositions[question.answerIndex] += 1;
  });
  if (skillNumber >= 231) {
    const suppliedStimulusText = JSON.stringify(stimulus);
    const suppliedNumbers = new Set((suppliedStimulusText.match(/\d+(?:\.\d+)?/gu) ?? []).map(Number));
    for (const question of skill.stimulusQuestions) {
      const supportedNumbers = new Set((`${suppliedStimulusText}\n${question.reviewEvidence}`.match(/\d+(?:\.\d+)?/gu) ?? []).map(Number));
      for (const option of question.options) {
        const optionNumbers = (option.match(/\d+(?:\.\d+)?/gu) ?? []).map(Number);
        const suppliedOperands = optionNumbers.filter((number) => suppliedNumbers.has(number)).length;
        for (const number of optionNumbers) {
          assert(supportedNumbers.has(number) || suppliedOperands >= 2, `${question.id}: option imports unsupported number ${number}`);
        }
      }
      assert(question.rationales.every((rationale) => rationale.includes(question.reviewEvidence)), `${question.id}: rationale does not use supplied-data evidence`);
    }
  }
  assert(localPositions.every((count) => count === 3 || count === 4), `${skill.id}: answer positions must each occur three or four times; got ${localPositions.join("/")}`);
  const sequence = state.answerSequence.slice(sequenceStart);
  let run = 1;
  for (let index = 1; index < sequence.length; index += 1) {
    run = sequence[index] === sequence[index - 1] ? run + 1 : 1;
    if (run > 3) state.rhythmViolations += 1;
  }
  state.answerSequences.push(sequence.join(""));
  state.skills.push(skill);
  state.skillIds.push(skill.id);
  state.skillTitles.push(skill.title);
  state.lectureIds.push(lecture.id);
  state.stimulusIds.push(stimulus.id);
}

export async function validatePhysicsChemistryRange({ firstUnit, lastUnit, firstSkill, lastSkill }) {
  assert.equal(lastUnit - firstUnit, 9, "validator range must contain ten units");
  assert.equal(lastSkill - firstSkill, 69, "validator range must contain seventy skills");
  const authority = JSON.parse(await readFile(path.join(HERE, "..", "authority-skill-binding.json"), "utf8"));
  assert.equal(authority.subject, "physics_chemistry", "wrong authority binding ledger");
  const state = {
    units: [], skills: [], skillIds: [], skillTitles: [], lectureIds: [], stimulusIds: [],
    questionIds: [], stems: [], examplePrompts: [], misconceptionBeliefs: [],
    allQuestions: [], answerPositions: [0, 0, 0, 0], answerSequence: [], answerSequences: [],
    circularTokens: 0, genericDismissals: 0, crossArtifactParentheses: 0,
    quotedMetaFrames: 0, metaQuestionFrames: 0, assembledOptionMarkers: 0,
    malformedMisconceptions: [], assembledOptions: [], rhythmViolations: 0,
  };

  for (let unitNumber = firstUnit; unitNumber <= lastUnit; unitNumber += 1) {
    const unit = await loadStaticUnit(unitNumber);
    const bindingUnit = authority.units.find(({ unitId }) => unitId === `PHYCHM_R4_U${String(unitNumber).padStart(2, "0")}`);
    assert(bindingUnit, `U${unitNumber}: missing frozen authority binding`);
    assert.equal(unit.unitId, bindingUnit.unitId, `U${unitNumber}: unit ID changed`);
    nonempty(unit.title, `${unit.unitId}.title`, 4);
    assert.deepEqual(unit.authorityRefs, bindingUnit.authorityRefs, `${unit.unitId}: authorityRefs differ from frozen binding`);
    validateProvenance(unit.provenance, unit.unitId);
    assert.equal(unit.skills.length, 7, `${unit.unitId}: seven skills required`);
    assert.deepEqual(unit.skills.map(({ id }) => id), bindingUnit.skillIds, `${unit.unitId}: frozen skill order changed`);
    unit.skills.forEach((skill, index) => validateSkill(skill, firstSkill + state.skills.length, bindingUnit, state));
    state.units.push(unit);
  }

  assert.equal(state.units.length, 10, "ten units required");
  assert.equal(state.skills.length, 70, "seventy skills required");
  assert.equal(state.lectureIds.length, 70, "seventy lectures required");
  assert.equal(state.stimulusIds.length, 70, "seventy stimuli required");
  assert.equal(state.questionIds.filter((id) => id.includes("_STIMQ_")).length, 210, "210 stimulus questions required");
  assert.equal(state.questionIds.filter((id) => !id.includes("_STIMQ_")).length, 840, "840 standalone questions required");
  assert.equal(state.questionIds.length, 1050, "1050 total questions required");
  assert.equal(state.skillIds.at(-1), `PHYCHM_R4_S${lastSkill}`, "last skill ID changed");
  unique(state.units.map(({ unitId }) => unitId), "unit IDs");
  unique(state.units.map(({ title }) => title), "unit titles");
  unique(state.skillIds, "skill IDs");
  unique(state.skillTitles, "skill titles");
  unique(state.lectureIds, "lecture IDs");
  unique(state.stimulusIds, "stimulus IDs");
  unique(state.questionIds, "question IDs");
  unique(state.stems, "question stems");
  unique(state.examplePrompts, "worked-example prompts");
  unique(state.misconceptionBeliefs, "misconception beliefs");
  unique(state.answerSequences, "15-question answer-position sequences");
  assert(Math.max(...state.answerPositions) - Math.min(...state.answerPositions) <= 1, `range answer positions are imbalanced: ${state.answerPositions.join("/")}`);
  assert.equal(state.circularTokens, 0, "circular review language found");
  assert.equal(state.rhythmViolations, 0, "answer-position rhythm has a run longer than three");
  assert.equal(state.genericDismissals, 0, "generic distractor dismissal found");
  assert.equal(state.crossArtifactParentheses, 0, "cross-artifact parenthetical option payload found");
  assert.equal(state.quotedMetaFrames, 0, "quoted teaching-objective/example/misconception frame found");
  assert.equal(state.metaQuestionFrames, 0, "generated meta-question frame found");
  assert.equal(state.assembledOptionMarkers, 0, "option contains a pasted question or artifact marker");
  assert.equal(state.malformedMisconceptions.length, 0, `malformed misconception found: ${state.malformedMisconceptions[0]}`);

  const artifactFragments = state.skills
    .flatMap(artifactSourceStrings)
    .map((value) => ({ raw: value, normalized: normalizedText(value) }))
    .filter(({ normalized }) => normalized.length >= 18);
  for (const question of state.allQuestions) {
    for (const option of question.options) {
      const normalizedOption = normalizedText(option);
      if (normalizedOption.length < 18) continue;
      const copied = artifactFragments.find(({ normalized }) =>
        normalizedOption !== normalized
        && normalizedOption.includes(normalized)
        && normalized.length / normalizedOption.length >= 0.55);
      if (copied) state.assembledOptions.push(`${question.id}: ${option} <= ${copied.raw}`);
    }
  }
  assert.equal(state.assembledOptions.length, 0, `option copied/assembled from another artifact: ${state.assembledOptions[0]}`);

  if (firstSkill <= 172 && lastSkill >= 172) {
  const q172 = state.allQuestions.find(({ id }) => id === "PHYCHM_R4_Q_172_01");
  assert(q172, "PHYCHM_R4_Q_172_01 missing");
  assert.match(q172.stem, /0\.10\s*s/u, "PHYCHM_R4_Q_172_01 must state the 0.10 s round-trip premise");
  assert.match(q172.stem, /340\s*m\/s/u, "PHYCHM_R4_Q_172_01 must state the sound speed");
  assert.match(q172.options[q172.answerIndex], /17\s*m/u, "PHYCHM_R4_Q_172_01 keyed distance must be 17 m");
  assert.match(q172.reviewEvidence, /340[^。\n]*0\.10[^。\n]*(?:÷\s*2|\/\s*2)[^。\n]*17/u, "PHYCHM_R4_Q_172_01 evidence must derive 17 m from 340 m/s and 0.10 s round trip");

  }

  const allStudentText = state.skills.flatMap(skillStrings).join("\n");
  const knownScaffoldHits = KNOWN_SCAFFOLDS.filter((expression) => expression.test(allStudentText));
  const repeatedScaffolds = repeatedHanScaffolds(state.skills);
  assert.equal(knownScaffoldHits.length, 0, `known scaffold family found: ${knownScaffoldHits[0]}`);
  assert.equal(repeatedScaffolds.length, 0, `14-Han scaffold shared by three skills: ${repeatedScaffolds[0]?.[0]}`);

  let longestCorrect = 0;
  let shortestCorrect = 0;
  let correctLength = 0;
  let wrongLength = 0;
  let correctPolarity = 0;
  let wrongPolarity = 0;
  for (const question of state.allQuestions) {
    const lengths = question.options.map((option) => [...option].length);
    const correct = lengths[question.answerIndex];
    const longest = Math.max(...lengths);
    const shortest = Math.min(...lengths);
    if (correct === longest && lengths.filter((length) => length === longest).length === 1) longestCorrect += 1;
    if (correct === shortest && lengths.filter((length) => length === shortest).length === 1) shortestCorrect += 1;
    correctLength += correct;
    correctPolarity += POLARITY_RE.test(question.options[question.answerIndex]) ? 1 : 0;
    question.options.forEach((option, index) => {
      if (index === question.answerIndex) return;
      wrongLength += lengths[index];
      wrongPolarity += POLARITY_RE.test(option) ? 1 : 0;
    });
  }
  const questionCount = state.allQuestions.length;
  const longestCorrectRatio = longestCorrect / questionCount;
  const shortestCorrectRatio = shortestCorrect / questionCount;
  const averageLengthRatio = (correctLength / questionCount) / (wrongLength / (questionCount * 3));
  const polarityDifference = Math.abs(correctPolarity / questionCount - wrongPolarity / (questionCount * 3));
  assert(longestCorrectRatio < 0.35, `uniquely-longest correct ratio is ${(longestCorrectRatio * 100).toFixed(2)}%`);
  assert(shortestCorrectRatio < 0.35, `uniquely-shortest correct ratio is ${(shortestCorrectRatio * 100).toFixed(2)}%`);
  assert(averageLengthRatio >= 0.75 && averageLengthRatio <= 1.25, `correct/wrong average option-length ratio is ${averageLengthRatio.toFixed(3)}`);
  assert(polarityDifference < 0.25, `correct/wrong polarity-marker difference is ${polarityDifference.toFixed(3)}`);

  return {
    units: state.units.length,
    skills: state.skills.length,
    lectures: state.lectureIds.length,
    stimuli: state.stimulusIds.length,
    standaloneQuestions: 840,
    stimulusQuestions: 210,
    questions: questionCount,
    answerPositions: state.answerPositions,
    longestCorrect,
    longestCorrectRatio,
    shortestCorrect,
    shortestCorrectRatio,
    averageLengthRatio,
    polarityDifference,
    circularTokens: state.circularTokens,
    rhythmViolations: state.rhythmViolations,
    crossArtifactParentheses: state.crossArtifactParentheses,
    quotedMetaFrames: state.quotedMetaFrames,
    metaQuestionFrames: state.metaQuestionFrames,
    malformedMisconceptions: state.malformedMisconceptions.length,
    assembledOptions: state.assembledOptionMarkers + state.assembledOptions.length,
    scaffoldGroups: knownScaffoldHits.length + repeatedScaffolds.length,
  };
}

export function validatePhysicsChemistryU21U30() {
  return validatePhysicsChemistryRange({ firstUnit: 21, lastUnit: 30, firstSkill: 161, lastSkill: 230 });
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = await validatePhysicsChemistryU21U30();
  console.log(JSON.stringify(result, null, 2));
}
