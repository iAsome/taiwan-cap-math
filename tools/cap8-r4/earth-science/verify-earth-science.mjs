import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";
import { canonicalJson, sha256 } from "../r4-core.mjs";
import { loadEarthScienceUnitSource, materializeEarthScienceUnit } from "./build-earth-science-unit.mjs";
import { materializeEarthScienceAssets } from "./materialize-earth-science-assets.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..", "..");
const SOURCE_ROOT = path.join(REPO_ROOT, "地科會考作戰室", "r4", "source", "units");
const UNIT_IDS = Object.freeze(Array.from({ length: 30 }, (_, index) => `EARTH_R4_U${String(index + 1).padStart(2, "0")}`));
const MACHINE_RESIDUE = /(?:TODO|FIXME|placeholder|lorem ipsum|待補|暫定|示意文字|答案略|undefined|NaN|\[object Object\])/iu;
const SIMPLIFIED = /[这为与个们来时会从后发边应当过还较对让实气压层变条号门间见闻读写体处东万]/u;

function normalize(value) {
  return value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/\d+(?:\.\d+)?/gu, "<n>")
    .replace(/[甲乙丙丁戊己庚辛壬癸]/gu, "<label>")
    .replace(/[A-Za-z][A-Za-z'-]*/gu, "<latin>")
    .replace(/[\s\p{P}\p{S}]+/gu, "")
    .trim();
}

function studentStrings(source) {
  return [
    ...source.lectures.flatMap((lecture) => [
      ...lecture.objectives,
      ...lecture.sections.flatMap((section) => [section.title, section.content]),
      ...lecture.workedExamples.flatMap((example) => [example.prompt, ...example.steps, example.answer, example.why]),
      ...lecture.misconceptions.flatMap((item) => [item.belief, item.whyWrong, item.correction]),
      ...lecture.checks.flatMap((item) => [item.prompt, item.answer, item.reason]),
    ]),
    ...[...source.questions, ...source.stimulusQuestions].flatMap((question) => [question.stem, ...question.options, ...question.reasons]),
    ...source.stimuli.flatMap((stimulus) => [JSON.stringify(stimulus.content), stimulus.accessibility.textAlternative]),
  ];
}

export async function verifyEarthScience({ repoRoot = REPO_ROOT } = {}) {
  const actualSources = (await readdir(path.join(repoRoot, "地科會考作戰室", "r4", "source", "units")))
    .filter((name) => /^EARTH_R4_U\d{2}\.mjs$/u.test(name))
    .sort((a, b) => a.localeCompare(b, "en"));
  assert.deepEqual(actualSources, UNIT_IDS.map((id) => `${id}.mjs`), "Earth Science unit source set must be exactly U01-U30");

  const all = { lectures: [], questions: [], stimuli: [], skills: [] };
  const visible = new Map();
  const essence = new Map();
  const optionSets = new Map();
  const stimulusPurposes = new Map();
  for (const unitId of UNIT_IDS) {
    const source = await loadEarthScienceUnitSource(unitId, { repoRoot });
    for (const value of studentStrings(source)) {
      assert(!MACHINE_RESIDUE.test(value), `${unitId}: machine residue in student-facing text`);
      assert(!SIMPLIFIED.test(value), `${unitId}: possible Simplified Chinese in student-facing text: ${value.slice(0, 80)}`);
      assert(!value.includes("�"), `${unitId}: replacement character in student-facing text`);
    }
    const stimuliById = new Map(source.stimuli.map((stimulus) => [stimulus.id, stimulus]));
    for (const question of source.stimulusQuestions) {
      const scenario = stimuliById.get(question.stimulusId)?.content.scenario;
      assert(scenario && question.stem.includes(`「${scenario}」`), `${question.id}: stimulus scenario mismatch`);
    }
    const result = await materializeEarthScienceUnit(source);
    for (const lecture of source.lectures) {
      const focus = lecture.objectives[0].match(/^能以自己的話說明「(.+)」，並指出/u)?.[1];
      assert(focus, `${lecture.id}: explicit skill focus`);
      assert(lecture.workedExamples.every((example) => example.answer.includes(focus)), `${lecture.id}: worked examples must apply the skill focus`);
      const focusQuestions = source.questions.filter((question) => question.skillId === lecture.skillId && /_(?:01|03|04|09)$/u.test(question.id));
      assert.equal(focusQuestions.length, 4, `${lecture.skillId}: four focus questions`);
      assert(focusQuestions.every((question) => question.options[question.answerIndex].includes(focus)), `${lecture.skillId}: focus question answer mismatch`);
    }
    all.lectures.push(...result.lectures);
    all.questions.push(...result.questions);
    all.stimuli.push(...result.stimuli);
    all.skills.push(...result.skills);

    for (const question of result.questions) {
      const visibleKey = JSON.stringify([question.stem.trim(), [...question.options].map((value) => value.trim()).sort()]);
      assert(!visible.has(visibleKey), `${question.id}: exact duplicate of ${visible.get(visibleKey)}`);
      visible.set(visibleKey, question.id);
      const essenceKey = JSON.stringify([normalize(question.stem), question.options.map(normalize).sort()]);
      assert(!essence.has(essenceKey), `${question.id}: same normalized skeleton as ${essence.get(essenceKey)}`);
      essence.set(essenceKey, question.id);
      const optionSetKey = JSON.stringify(question.options.map((value) => value.trim()).sort());
      assert(!optionSets.has(optionSetKey), `${question.id}: repeats the complete option set of ${optionSets.get(optionSetKey)}`);
      optionSets.set(optionSetKey, question.id);
    }
    for (const stimulus of result.stimuli) {
      const purposeKey = JSON.stringify([stimulus.content.title, stimulus.content.scenario, stimulus.content.table, stimulus.content.skillSpecificCriterion]);
      assert(!stimulusPurposes.has(purposeKey), `${stimulus.id}: duplicate stimulus purpose of ${stimulusPurposes.get(purposeKey)}`);
      stimulusPurposes.set(purposeKey, stimulus.id);
    }
    for (const skill of result.skills) {
      const processes = result.questions
        .filter((question) => question.skillIds.includes(skill.id))
        .map((question) => JSON.stringify(question.cognitiveProcess));
      assert(new Set(processes).size >= 6, `${skill.id}: fewer than six distinct assessment operations`);
    }
  }

  assert.equal(all.skills.length, 220, "Earth Science skill count");
  assert.equal(new Set(all.skills.map((value) => value.id)).size, 220, "Earth Science unique skills");
  assert.equal(all.lectures.length, 220, "Earth Science lecture count");
  assert.equal(all.questions.filter((value) => value.stimulusId === null).length, 2640, "Earth Science skill question count");
  assert.equal(all.questions.filter((value) => value.stimulusId !== null).length, 660, "Earth Science stimulus question count");
  assert.equal(all.stimuli.length, 220, "Earth Science stimulus count");
  assert.equal(new Set(all.questions.map((value) => value.id)).size, 3300, "Earth Science unique question IDs");
  assert.equal(new Set(all.stimuli.map((value) => value.id)).size, 220, "Earth Science unique stimulus IDs");
  const answerPositions = [0, 0, 0, 0];
  let longestAnswers = 0;
  let shortestAnswers = 0;
  for (const question of all.questions) {
    answerPositions[question.answerIndex] += 1;
    const lengths = question.options.map((value) => value.length);
    const answerLength = lengths[question.answerIndex];
    if (answerLength === Math.max(...lengths)) longestAnswers += 1;
    if (answerLength === Math.min(...lengths)) shortestAnswers += 1;
  }
  assert.deepEqual(answerPositions, [825, 825, 825, 825], "answer positions must be exactly balanced");
  assert(longestAnswers / all.questions.length < 0.5, "correct-answer length must not create a longest-option shortcut");
  assert(shortestAnswers / all.questions.length < 0.5, "correct-answer length must not create a shortest-option shortcut");
  const assets = await materializeEarthScienceAssets([...all.lectures, ...all.questions, ...all.stimuli], { repoRoot });
  assert.equal(assets.length, 11, "Earth Science original asset count");
  for (const asset of assets) {
    const svg = await readFile(path.join(repoRoot, ...asset.path.split("/")), "utf8");
    assert(svg.includes("<title") && svg.includes("<desc"), `${asset.id}: SVG title and description required`);
    assert(svg.includes('role="img"') && svg.includes("viewBox="), `${asset.id}: SVG image role and viewBox required`);
    assert(asset.accessibility.colorIndependent && asset.accessibility.printSafe, `${asset.id}: monochrome/print accessibility`);
  }

  const releaseManifest = JSON.parse(await readFile(path.join(repoRoot, "地科會考作戰室", "r4", "content-manifest-v4.json"), "utf8"));
  const manifestSchema = JSON.parse(await readFile(path.join(repoRoot, "tools", "cap8-r4", "content-manifest-v4.schema.json"), "utf8"));
  const validateManifest = new Ajv2020({ allErrors: true, strict: true }).compile(manifestSchema);
  assert(validateManifest(releaseManifest), `release manifest schema: ${JSON.stringify(validateManifest.errors)}`);
  assert.deepEqual(releaseManifest.counts, {
    authorityNodes: 69,
    skills: 220,
    lectures: 220,
    skillQuestions: 2640,
    stimulusQuestions: 660,
    stimuli: 220,
    assets: 11,
  });
  assert.equal(releaseManifest.artifacts.length, 4047, "release manifest artifact count");
  assert.equal(new Set(releaseManifest.artifacts.map((value) => value.id)).size, releaseManifest.artifacts.length, "release artifact IDs unique");
  assert.equal(new Set(releaseManifest.artifacts.map((value) => value.path)).size, releaseManifest.artifacts.length, "release artifact paths unique");
  for (const descriptor of releaseManifest.artifacts) {
    const bytes = await readFile(path.join(repoRoot, ...descriptor.path.split("/")));
    assert.equal(sha256(bytes), descriptor.sha256, `${descriptor.id}: release artifact hash`);
  }
  assert.equal(
    releaseManifest.buildSha256,
    sha256(canonicalJson({ authorityGraphSha256: releaseManifest.authorityGraphSha256, artifacts: releaseManifest.artifacts, counts: releaseManifest.counts })),
    "release manifest build hash",
  );
  return {
    units: UNIT_IDS.length,
    skills: all.skills.length,
    lectures: all.lectures.length,
    questions: all.questions.length,
    skillQuestions: all.questions.filter((value) => value.stimulusId === null).length,
    stimulusQuestions: all.questions.filter((value) => value.stimulusId !== null).length,
    stimuli: all.stimuli.length,
    assets: assets.length,
    manifestArtifacts: releaseManifest.artifacts.length,
  };
}

async function main() {
  const result = await verifyEarthScience();
  console.log(`verify-earth-science: OK - ${result.units} units, ${result.skills} skills, ${result.lectures} lectures, ${result.questions} questions, ${result.stimuli} stimuli, ${result.assets} assets`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
