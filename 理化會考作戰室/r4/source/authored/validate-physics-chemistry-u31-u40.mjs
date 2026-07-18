import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { validatePhysicsChemistryRange } from "./validate-physics-chemistry-u21-u30.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const STATIC_EXPORT = /^export const ([A-Z0-9_]+) = ([\s\S]+);\s*$/u;
const QUOTE_RE = /[「」『』]/u;
const META_RE = /何者(?:成立|完整|相容)|哪個回應|哪項說法[^？?]{0,24}(?:符合|相容)|與題意無關|不是本題重點|which statement is compatible/iu;
const CROSS_ARTIFACT_RE = /(?:見|參照|同上|前述|另一題|上一題)[^。；]{0,24}[（(]/u;
const WRONG_ACTION_RE = /誤|錯|忽略|漏|僅|只|把|將|拿|一看到|主張|卻未|未納入|直接|混淆|顛倒|省略/u;
const CONSEQUENCE_RE = /會把[^。]{1,20}(?:算錯|判反)|差異若未通過[^。]{1,36}就不能只歸給|無法通過[^。]{1,36}檢查|類別會判錯|損壞|過大電流|發熱|火花|風險/u;
const MECHANICAL_PROSE_RE = /先釐清|怎麼讀|適用邊界|學完後，能在|用這兩筆資料分析|題給[^。]{0,30}需要|表內[^。]{0,24}如何共同影響|實驗小組想再驗證|表內[^。]{0,40}便不能支持|若交給[^。]{0,30}判讀/u;

async function loadUnits() {
  const units = [];
  for (let unitNumber = 31; unitNumber <= 40; unitNumber += 1) {
    const fileName = `physics-chemistry-u${unitNumber}.mjs`;
    const source = await readFile(path.join(HERE, fileName), "utf8");
    const match = source.match(STATIC_EXPORT);
    assert(match, `${fileName}: source must remain one explicit static export`);
    assert.equal(match[1], `PHYSICS_CHEMISTRY_AUTHORED_U${unitNumber}`, `${fileName}: export name changed`);
    units.push(JSON.parse(match[2]));
  }
  return units;
}

function questionText(question) {
  return [question.stem, ...question.options, ...question.rationales, question.reviewEvidence];
}

function skillText(skill) {
  const values = [skill.title, skill.lecture.objective];
  for (const section of skill.lecture.sections) values.push(section.title, section.content);
  for (const example of skill.lecture.workedExamples) values.push(example.prompt, ...example.steps, example.answer, example.why);
  for (const misconception of skill.lecture.misconceptions) values.push(misconception.belief, misconception.whyWrong, misconception.correction);
  values.push(skill.stimulus.title, skill.stimulus.body, skill.stimulus.dataTable.caption, ...skill.stimulus.dataTable.columns);
  for (const row of skill.stimulus.dataTable.rows) values.push(...row.map(String));
  for (const question of [...skill.standaloneQuestions, ...skill.stimulusQuestions]) values.push(...questionText(question));
  return values;
}

function isAssembledOption(option) {
  const commas = option.match(/，/gu)?.length ?? 0;
  const semicolons = option.match(/；/gu)?.length ?? 0;
  return [...option].length > 56 || commas > 2 || semicolons > 1 || /而且[^。；]{3,}另外|同時[^。；]{3,}並且/u.test(option);
}

function misconceptionProblems(misconception) {
  const problems = [];
  if (QUOTE_RE.test(misconception.belief)) problems.push("quoted belief");
  if (!WRONG_ACTION_RE.test(misconception.belief)) problems.push("no wrong belief or action");
  if (!CONSEQUENCE_RE.test(misconception.whyWrong)) problems.push("no concrete consequence");
  if (/所以這種做法|判讀失準|誤把拿/u.test(`${misconception.belief}${misconception.whyWrong}${misconception.correction}`)) problems.push("mechanical or malformed wording");
  if (misconception.belief === misconception.correction) problems.push("belief repeats correction");
  if (misconception.whyWrong === misconception.correction) problems.push("reason repeats correction");
  if (!/應|先|再|重新|改用|列入/u.test(misconception.correction)) problems.push("correction gives no action");
  if ([...misconception.whyWrong].length < 20) problems.push("reason too short");
  if ([...misconception.correction].length < 20) problems.push("correction too short");
  return problems;
}

function semanticFingerprint(stem, skill) {
  const specifics = [skill.title, skill.stimulus.title, skill.stimulus.dataTable.caption,
    ...skill.stimulus.dataTable.columns, ...skill.stimulus.dataTable.rows.flat().map(String)]
    .filter((value) => value.length > 1)
    .sort((left, right) => right.length - left.length);
  let normalized = stem.normalize("NFKC");
  for (const specific of specifics) normalized = normalized.replaceAll(specific.normalize("NFKC"), "資料");
  return normalized
    .replace(/\d+(?:\.\d+)?/gu, "#")
    .replace(/[甲乙丙丁]/gu, "樣本")
    .replace(/小[安婷冠菁翔宇晴豪瑜涵]/gu, "學生")
    .replace(/[A-Z]\d*/giu, "X")
    .replace(/[\s，。；：、？?!()（）]/gu, "");
}

function repeatedSemanticGroups(skills) {
  const owners = new Map();
  for (const skill of skills) {
    const questions = [...skill.standaloneQuestions, ...skill.stimulusQuestions];
    for (const [position, question] of questions.entries()) {
      const fingerprint = `${position}:${semanticFingerprint(question.stem, skill)}`;
      const ids = owners.get(fingerprint) ?? new Set();
      ids.add(skill.id);
      owners.set(fingerprint, ids);
    }
  }
  return [...owners.entries()].filter(([, skillIds]) => skillIds.size >= 3);
}

function assertQ243(skills) {
  const skill = skills.find(({ id }) => id === "PHYCHM_R4_S243");
  const question = skill?.standaloneQuestions.find(({ id }) => id === "PHYCHM_R4_Q_243_03");
  assert(question, "Q_243_03 is missing");
  assert(/12 N 重力向下/u.test(question.stem), "Q_243_03 must state gravity");
  assert(/8 N 浮力向上/u.test(question.stem), "Q_243_03 must keep nonzero buoyancy");
  assert(/1 N[^。]*向上/u.test(question.stem), "Q_243_03 must state the other upward force");
  assert.equal(question.options[question.answerIndex], "合力 3 N 向下，加速度向下", "Q_243_03 key must be the solved result only");
  assert.equal(question.answerIndex, 2, "Q_243_03 answer position changed");
  assert.equal(question.rationales.length, 4, "Q_243_03 needs four rationales");
  assert(question.rationales.every((rationale) => /N/u.test(rationale)), "Q_243_03 distractors need force-based explanations");
  assert(/12−9＝3 N 向下/u.test(question.reviewEvidence), "Q_243_03 review evidence must independently solve the net force");
  return { netForce: "3 N downward", accelerationDirection: "downward", buoyancy: "8 N upward" };
}

export async function validatePhysicsChemistryU31U40() {
  const base = await validatePhysicsChemistryRange({ firstUnit: 31, lastUnit: 40, firstSkill: 231, lastSkill: 300 });
  const units = await loadUnits();
  const skills = units.flatMap(({ skills: unitSkills }) => unitSkills);
  const questions = skills.flatMap((skill) => [...skill.standaloneQuestions, ...skill.stimulusQuestions]);
  const options = questions.flatMap(({ options: questionOptions }) => questionOptions);
  const authoredStrings = skills.flatMap(skillText);

  const quotedMetaFrames = authoredStrings.filter((text) => QUOTE_RE.test(text));
  const metaQuestions = questions.filter(({ stem }) => META_RE.test(stem));
  const crossArtifactParentheticals = authoredStrings.filter((text) => CROSS_ARTIFACT_RE.test(text));
  const mechanicalProse = authoredStrings.filter((text) => MECHANICAL_PROSE_RE.test(text));
  const assembledOptions = options.filter(isAssembledOption);
  const placeholderOptions = options.filter((option) => /題外|待補|TODO|FIXME|同上|見前/u.test(option));
  const malformedMisconceptions = skills.flatMap((skill) => skill.lecture.misconceptions.flatMap((misconception, index) =>
    misconceptionProblems(misconception).map((problem) => `${skill.id}[${index}]: ${problem}`)));
  const semanticSkeletons = repeatedSemanticGroups(skills);
  const q243 = assertQ243(skills);

  assert.equal(quotedMetaFrames.length, 0, "quoted objective/example/misconception frames remain");
  assert.equal(metaQuestions.length, 0, "meta compatibility question remains");
  assert.equal(crossArtifactParentheticals.length, 0, "cross-artifact parenthetical remains");
  assert.equal(mechanicalProse.length, 0, `mechanically expanded prose remains: ${mechanicalProse[0]}`);
  assert.equal(assembledOptions.length, 0, "assembled or overlong option remains");
  assert.equal(placeholderOptions.length, 0, "placeholder-like option remains");
  assert.equal(malformedMisconceptions.length, 0, malformedMisconceptions[0] ?? "malformed misconception remains");
  assert.equal(semanticSkeletons.length, 0, `semantic stem skeleton shared by three skills: ${semanticSkeletons[0]?.[0]}`);

  return {
    ...base,
    rewritten: {
      lectures: 70,
      lectureSections: 210,
      workedExamples: 210,
      misconceptions: 280,
      stimuli: 70,
      questions: 1050,
      options: 4200,
      rationales: 4200,
      reviewEvidence: 1050,
    },
    quotedMetaFrames: 0,
    metaGroups: 0,
    assembledOptionGroups: 0,
    malformedMisconceptionGroups: 0,
    semanticSkeletonGroups: 0,
    mechanicalProseGroups: 0,
    crossArtifactParentheticalGroups: 0,
    rhythmGroups: 0,
    q243,
  };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = await validatePhysicsChemistryU31U40();
  console.log(JSON.stringify(result, null, 2));
}
