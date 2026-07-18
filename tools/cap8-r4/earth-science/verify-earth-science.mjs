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
const UNIT_IDS = Object.freeze(Array.from({ length: 30 }, (_, index) => `EARTH_R4_U${String(index + 1).padStart(2, "0")}`));
const MACHINE_RESIDUE = /(?:TODO|FIXME|placeholder|lorem ipsum|示意文字|答案略)/iu;
const SIMPLIFIED = /[这为与个们来时会从后发边应当过还较对让实气压层变条号门间见闻读写体处东万]/u;
const PUNCTUATION_DEFECT = /(?:。；|；。|。。|，，|。\s+，)/u;
const BANNED_TEMPLATES = Object.freeze([
  "先先",
  "其餘三項逐一查核如下",
  "的正確選項是",
  "依資料與定義檢查，此項不能成立",
  "這項敘述符合可查核的科學關係",
  "每一步都要指出使用哪一筆觀測",
  "先確認列與欄代表的量",
  "本技能會用到",
  "就「",
  "符合判讀條件",
  "會使結論失真",
  "答案不依選項位置或語病",
  "這項有科學證據支持，所以",
  "敘述與證據或適用邊界衝突",
  "答案同時符合資料、作用機制與適用範圍",
  "這個說法把局部線索當成完整規則",
  "作答時再補上條件與資料來源",
]);

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
    ...Object.values(source.skillTitles ?? {}),
    ...source.lectures.flatMap((lecture) => [
      ...lecture.objectives,
      ...lecture.sections.flatMap((section) => [section.title, section.content]),
      ...lecture.workedExamples.flatMap((example) => [example.prompt, ...example.steps, example.answer, example.why]),
      ...lecture.misconceptions.flatMap((item) => [item.belief, item.whyWrong, item.correction]),
      ...lecture.checks.flatMap((item) => [item.prompt, item.answer, item.reason]),
    ]),
    ...[...source.questions, ...source.stimulusQuestions].flatMap((question) => [question.stem, ...question.options, ...question.reasons, ...question.reviews]),
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
  const stimulusPurposes = new Map();
  const stems = new Map();
  const reviewPairs = new Map();
  const workedExampleWhys = new Map();
  const misconceptionBeliefs = new Map();
  for (const unitId of UNIT_IDS) {
    const source = await loadEarthScienceUnitSource(unitId, { repoRoot });
    assert.equal(Object.keys(source.skillTitles ?? {}).length, source.lectures.length, `${unitId}: one display title per skill required`);
    assert.equal(new Set(Object.values(source.skillTitles)).size, source.lectures.length, `${unitId}: display skill titles must be unique`);
    for (const value of studentStrings(source)) {
      assert(!MACHINE_RESIDUE.test(value), `${unitId}: machine residue in student-facing text`);
      assert(!SIMPLIFIED.test(value), `${unitId}: possible Simplified Chinese in student-facing text: ${value.slice(0, 80)}`);
      assert(!value.includes("�"), `${unitId}: replacement character in student-facing text`);
      assert(!PUNCTUATION_DEFECT.test(value), `${unitId}: punctuation defect in student-facing text: ${value.slice(0, 100)}`);
      for (const template of BANNED_TEMPLATES) assert(!value.includes(template), `${unitId}: banned question template '${template}'`);
    }
    const result = await materializeEarthScienceUnit(source);
    all.lectures.push(...result.lectures);
    all.questions.push(...result.questions);
    all.stimuli.push(...result.stimuli);
    all.skills.push(...result.skills);

    for (const question of result.questions) {
      assert(!stems.has(question.stem), `${question.id}: repeats stem of ${stems.get(question.stem)}`);
      stems.set(question.stem, question.id);
      assert.equal(new Set(question.options).size, 4, `${question.id}: option text must be unique`);
      assert.equal(new Set(question.optionRationales.map((value) => value.reason)).size, 4, `${question.id}: option rationales must be distinct`);
      assert.equal(question.optionRationales.filter((value) => value.isCorrect).length, 1, `${question.id}: exactly one rationale must be marked correct`);
      assert(question.optionRationales.every((value) => value.reason.trim().length >= 10), `${question.id}: rationale is too short to explain the option`);
      const grounding = [question.stem, ...question.options, ...question.optionRationales.map((value) => value.reason)].join("\n");
      for (const target of question.misconceptionTargets) {
        assert(grounding.includes(target), `${question.id}: misconception target is not an actual belief or option in this record: ${target}`);
      }
      assert.equal(question.independentReviews.length, 2, `${question.id}: two independent reviews required`);
      assert.notEqual(question.independentReviews[0].evidence, question.independentReviews[1].evidence, `${question.id}: independent reviews must use different evidence`);
      const reviewKey = JSON.stringify(question.independentReviews.map((review) => review.evidence));
      assert(!reviewPairs.has(reviewKey), `${question.id}: repeats the complete review pair of ${reviewPairs.get(reviewKey)}`);
      reviewPairs.set(reviewKey, question.id);
      if (/_11$/u.test(question.id)) {
        assert(/(?:錯誤|有錯|不正確|說錯|寫錯|錯把|仍把|混淆|誤認|需要修正|不能成立)/u.test(question.stem), `${question.id}: polarity stem must ask for the invalid claim`);
        assert(/(?:錯誤|有錯|不正確|違反|衝突|不成立|不能|混淆|誤認)/u.test(question.optionRationales[question.answerIndex].reason), `${question.id}: keyed rationale does not establish why the selected claim is invalid`);
      }
      const skillTitle = source.skillTitles[question.skillIds[0]];
      assert(question.options.every((value) => !value.includes(skillTitle)), `${question.id}: option repeats the full skill title`);
      const visibleKey = JSON.stringify([question.stem.trim(), [...question.options].map((value) => value.trim()).sort()]);
      assert(!visible.has(visibleKey), `${question.id}: exact duplicate of ${visible.get(visibleKey)}`);
      visible.set(visibleKey, question.id);
      const essenceKey = JSON.stringify([normalize(question.stem), question.options.map(normalize).sort()]);
      assert(!essence.has(essenceKey), `${question.id}: same normalized skeleton as ${essence.get(essenceKey)}`);
      essence.set(essenceKey, question.id);
    }
    for (const lecture of result.lectures) {
      assert.equal(lecture.sections.length, 5, `${lecture.id}: five teaching sections required`);
      assert.equal(lecture.workedExamples.length, 3, `${lecture.id}: three worked examples required`);
      assert.equal(lecture.misconceptions.length, 4, `${lecture.id}: four misconceptions required`);
      assert.equal(lecture.checks.length, 4, `${lecture.id}: four diagnostic/transfer checks required`);
      assert.equal(new Set(lecture.misconceptions.map((value) => value.belief)).size, 4, `${lecture.id}: repeated misconception`);
      for (const example of lecture.workedExamples) {
        assert.equal(example.steps.length, 3, `${example.id}: three explicit reasoning steps required`);
        assert(example.answer.trim() && example.why.trim().length >= 28, `${example.id}: answer and explanatory why required`);
        assert(!workedExampleWhys.has(example.why), `${example.id}: repeats worked-example explanation of ${workedExampleWhys.get(example.why)}`);
        workedExampleWhys.set(example.why, example.id);
      }
      for (const misconception of lecture.misconceptions) {
        assert(!misconceptionBeliefs.has(misconception.belief), `${lecture.id}: repeats misconception belief of ${misconceptionBeliefs.get(misconception.belief)}`);
        misconceptionBeliefs.set(misconception.belief, lecture.id);
        assert(misconception.whyWrong.trim().length >= 30, `${lecture.id}: misconception explanation too short`);
        assert(misconception.correction.trim().length >= 20, `${lecture.id}: misconception correction too short`);
      }
    }
    for (const stimulus of result.stimuli) {
      const purposeKey = JSON.stringify([stimulus.content.scenario, stimulus.content.table, stimulus.content.skillSpecificCriterion]);
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
  assert.equal(stems.size, 3300, "Earth Science question stems must be globally unique");
  assert.equal(workedExampleWhys.size, 660, "Earth Science worked-example explanations must be globally unique");
  assert.equal(reviewPairs.size, 3300, "Earth Science independent review pairs must be globally unique");
  assert.equal(misconceptionBeliefs.size, 880, "Earth Science misconception beliefs must be globally unique");
  const q001 = all.questions.find((value) => value.id === "EARTH_R4_Q_001_01");
  assert(q001, "EARTH_R4_Q_001_01 regression record required");
  assert(!q001.options.some((value) => /模型畫得越複雜|兩變量同時增加/u.test(value)), "EARTH_R4_Q_001_01 must not use generic science-process distractors");
  assert(q001.stem.includes("地球圈層與科學證據"), "EARTH_R4_Q_001_01 must establish a coherent unit context");
  const q00111 = all.questions.find((value) => value.id === "EARTH_R4_Q_001_11");
  assert(q00111, "EARTH_R4_Q_001_11 regression record required");
  assert.match(q00111.stem, /哪一項敘述錯誤/u, "EARTH_R4_Q_001_11 must preserve negative polarity");
  assert.equal(q00111.options[q00111.answerIndex], "水圈只指海洋，而岩石圈只指地表看得到的岩石。", "EARTH_R4_Q_001_11 keyed option must be the false scope claim");
  assert(q00111.optionRationales[q00111.answerIndex].reason.includes("水圈包含海洋、河湖、地下水與冰"), "EARTH_R4_Q_001_11 must derive the correction");
  assert.deepEqual(q00111.misconceptionTargets, [q00111.options[q00111.answerIndex]], "EARTH_R4_Q_001_11 misconception target must name the selected false belief");
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
    assert(asset.altText.length >= 18, `${asset.id}: meaningful alt text required`);
    assert(asset.longDescription.length >= 50, `${asset.id}: long description required`);
    assert(asset.dataFallback?.summary && asset.dataFallback.columns.length >= 2 && asset.dataFallback.rows.length >= 2, `${asset.id}: tabular data alternative required`);
  }

  const appSource = await readFile(path.join(repoRoot, "地科會考作戰室", "r4", "app.mjs"), "utf8");
  assert(!appSource.includes("renderStructured(stimulus.content)"), "UI must not dump internal stimulus fields");
  assert(!appSource.includes("stimulus.content.skillSpecificCriterion"), "UI must not reveal the internal answer criterion");
  assert(appSource.includes("stimulus.content.scenario") && appSource.includes("stimulus.content.readingGuide"), "UI must render the reviewed scenario and reading guide explicitly");

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
