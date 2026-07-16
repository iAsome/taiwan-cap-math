import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import Ajv2020 from "ajv/dist/2020.js";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const SUBJECT_ROOT = path.join(REPO_ROOT, "地理會考作戰室", "r4");
const RUNTIME_ROOT = path.join(SUBJECT_ROOT, "runtime");
const FORBIDDEN_VISIBLE = /TODO|FIXME|PLACEHOLDER|lorem|待補|待確認|答案略|依題意可知|其餘選項不符|[�]/iu;
const PROCEDURAL_SOURCE = /Math\.random|\bfor\s*\(|\bwhile\s*\(|Array\.from|\.map\s*\(|\.flatMap\s*\(|\$\{|generate(?:Question|Variant|Stem)|template(?:s)?\b/iu;

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function chineseLength(value) {
  return (String(value).match(/[\u3400-\u9fff]/gu) ?? []).length;
}

function visibleKey(question) {
  return JSON.stringify([question.stem.trim(), [...question.options].map((value) => value.trim()).sort((a, b) => a.localeCompare(b, "zh-Hant"))]);
}

function essence(value) {
  return String(value)
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[0-9０-９]+(?:[.,，．][0-9０-９]+)*/gu, "#")
    .replace(/[甲乙丙丁abcd](?=[點地站區線圖表項])/giu, "X")
    .replace(/[\s，。；：、！？,.!?;:「」『』（）()\[\]【】]/gu, "");
}

function essenceKey(question) {
  return JSON.stringify([essence(question.stem), [...question.options].map(essence).sort((a, b) => a.localeCompare(b, "en"))]);
}

async function directoryJson(name) {
  const directory = path.join(RUNTIME_ROOT, name);
  const entries = (await readdir(directory, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
    .sort((a, b) => a.name.localeCompare(b.name, "en"));
  return Promise.all(entries.map(async (entry) => JSON.parse(await readFile(path.join(directory, entry.name), "utf8"))));
}

function assertVisible(recordId, field, value) {
  assert.equal(typeof value, "string", `${recordId}/${field}: visible field must be a string`);
  assert(!FORBIDDEN_VISIBLE.test(value), `${recordId}/${field}: prohibited residue`);
}

function verifyQuestion(question, authorityIds, skillIds, stimulusIds) {
  assert.equal(question.subject, "geography", `${question.id}: wrong subject`);
  assert.equal(question.options.length, 4, `${question.id}: four options required`);
  assert.equal(new Set(question.options).size, 4, `${question.id}: duplicate options`);
  assert(question.answerIndex >= 0 && question.answerIndex < 4, `${question.id}: answerIndex out of range`);
  assert.equal(question.optionRationales.length, 4, `${question.id}: four option rationales required`);
  assert.equal(new Set(question.optionRationales.map((item) => item.reason)).size, 4, `${question.id}: option rationales must be distinct`);
  assert.equal(question.independentReviews.length, 2, `${question.id}: two independent reviews required`);
  assert.notEqual(question.independentReviews[0].evidence, question.independentReviews[1].evidence, `${question.id}: reviews must be independent`);
  assertVisible(question.id, "stem", question.stem);
  question.options.forEach((value, index) => assertVisible(question.id, `option-${index}`, value));
  for (const rationale of question.optionRationales) {
    assert.equal(rationale.isCorrect, rationale.optionIndex === question.answerIndex, `${question.id}: rationale truth flag mismatch`);
    assert(chineseLength(rationale.reason) >= 10, `${question.id}: option ${rationale.optionIndex} rationale is too shallow`);
    assertVisible(question.id, `rationale-${rationale.optionIndex}`, rationale.reason);
  }
  for (const review of question.independentReviews) {
    assert.equal(review.derivedAnswerIndex, question.answerIndex, `${question.id}: independent answer mismatch`);
    assert(chineseLength(review.evidence) >= 12, `${question.id}: independent review evidence is too shallow`);
  }
  const correctRationale = question.optionRationales[question.answerIndex];
  assert(question.independentReviews[0].evidence.includes(question.options[question.answerIndex]), `${question.id}: solution review does not identify the correct option`);
  assert(question.independentReviews[0].evidence.includes(correctRationale.reason), `${question.id}: solution review does not cite the correct rationale`);
  for (const rationale of question.optionRationales.filter((item) => !item.isCorrect)) {
    assert(question.independentReviews[1].evidence.includes(question.options[rationale.optionIndex]), `${question.id}: alternative review omits option ${rationale.optionIndex}`);
    assert(question.independentReviews[1].evidence.includes(rationale.reason), `${question.id}: alternative review omits rationale ${rationale.optionIndex}`);
  }
  for (const id of question.authorityRefs) assert(authorityIds.has(id), `${question.id}: unknown authority ${id}`);
  for (const id of question.skillIds) assert(skillIds.has(id), `${question.id}: unknown skill ${id}`);
  if (question.stimulusId !== null) assert(stimulusIds.has(question.stimulusId), `${question.id}: unknown stimulus ${question.stimulusId}`);
}

function verifyLecture(lecture, authorityIds, skillIds) {
  assert.equal(lecture.subject, "geography", `${lecture.id}: wrong subject`);
  assert(skillIds.has(lecture.skillId), `${lecture.id}: unknown skill`);
  assert(lecture.sections.length >= 4, `${lecture.id}: lecture needs four sections`);
  assert(lecture.workedExamples.length >= 3, `${lecture.id}: lecture needs three worked examples`);
  assert.equal(lecture.misconceptions.length, 4, `${lecture.id}: lecture needs exactly four misconceptions`);
  assert(lecture.checks.length >= 3, `${lecture.id}: lecture needs three checks`);
  for (const id of lecture.authorityRefs) assert(authorityIds.has(id), `${lecture.id}: unknown authority ${id}`);
  const sectionBodies = new Set();
  for (const section of lecture.sections) {
    assertVisible(lecture.id, section.id, section.content);
    assert(chineseLength(section.content) >= 55, `${section.id}: lecture section is too shallow`);
    assert(!sectionBodies.has(section.content), `${lecture.id}: duplicate section prose`);
    sectionBodies.add(section.content);
  }
  for (const example of lecture.workedExamples) {
    assert(example.steps.length >= 2, `${example.id}: worked steps required`);
    assert(chineseLength(example.why) >= 24, `${example.id}: worked explanation is too shallow`);
    assertVisible(example.id, "prompt", example.prompt);
    assertVisible(example.id, "why", example.why);
  }
  const misconceptionBeliefs = new Set();
  for (const item of lecture.misconceptions) {
    assert(!misconceptionBeliefs.has(item.belief), `${lecture.id}: duplicate misconception`);
    misconceptionBeliefs.add(item.belief);
    assert(chineseLength(item.whyWrong) >= 12, `${lecture.id}: misconception analysis is too shallow`);
    assert(chineseLength(item.correction) >= 8, `${lecture.id}: misconception correction is too shallow`);
  }
}

function verifyStimulus(stimulus, authorityIds, skillIds, questionIds) {
  assert.equal(stimulus.subject, "geography", `${stimulus.id}: wrong subject`);
  assert.equal(stimulus.questionIds.length, 3, `${stimulus.id}: exactly three questions required`);
  assert.equal(new Set(stimulus.questionIds).size, 3, `${stimulus.id}: duplicate linked question`);
  stimulus.questionIds.forEach((id) => assert(questionIds.has(id), `${stimulus.id}: unknown question ${id}`));
  stimulus.skillIds.forEach((id) => assert(skillIds.has(id), `${stimulus.id}: unknown skill ${id}`));
  stimulus.authorityRefs.forEach((id) => assert(authorityIds.has(id), `${stimulus.id}: unknown authority ${id}`));
  assert(typeof stimulus.content.title === "string" && stimulus.content.title.trim(), `${stimulus.id}: title missing`);
  assert(typeof stimulus.content.prompt === "string" && stimulus.content.prompt.trim(), `${stimulus.id}: prompt missing`);
  assert(chineseLength(stimulus.accessibility.longDescription) >= 12, `${stimulus.id}: long description too shallow`);
  const serialized = JSON.stringify(stimulus.content);
  assert(!FORBIDDEN_VISIBLE.test(serialized), `${stimulus.id}: prohibited stimulus residue`);
}

async function verifyAssets(assets) {
  for (const asset of assets) {
    assert.equal(asset.subject, "geography", `${asset.id}: wrong subject`);
    const absolute = path.join(REPO_ROOT, ...asset.path.split("/"));
    const bytes = await readFile(absolute);
    assert.equal(sha256(bytes), asset.sha256, `${asset.id}: asset hash mismatch`);
    assert.equal(asset.accessibility.colorIndependent, true, `${asset.id}: color-dependent asset`);
    assert.equal(asset.accessibility.printSafe, true, `${asset.id}: asset is not print-safe`);
    if (asset.path.endsWith(".svg")) {
      const svg = bytes.toString("utf8");
      assert(/<svg\b/u.test(svg) && /viewBox=/u.test(svg), `${asset.id}: SVG needs a stable viewBox`);
      assert(/<title\b/u.test(svg) && /<desc\b/u.test(svg), `${asset.id}: SVG needs title and description`);
      assert(/role=["']img["']/u.test(svg), `${asset.id}: SVG needs role=img`);
      assert(!/<image\b|(?:href|src)\s*=\s*["']https?:\/\/|url\(\s*["']?https?:\/\//iu.test(svg), `${asset.id}: external or raster content is not allowed`);
    }
  }
}

async function verifyStaticSources() {
  const directory = path.join(SUBJECT_ROOT, "source", "units");
  const files = (await readdir(directory)).filter((name) => /^GEO_R4_U\d{2}\.mjs$/u.test(name)).sort((a, b) => a.localeCompare(b, "en"));
  assert.equal(files.length, 36, "exactly 36 Geography unit sources required");
  for (const name of files) {
    const source = await readFile(path.join(directory, name), "utf8");
    assert(!PROCEDURAL_SOURCE.test(source), `${name}: procedural or template source marker found`);
    assert(!FORBIDDEN_VISIBLE.test(source), `${name}: placeholder or machine residue found`);
  }
}

async function verifyOfficialCoverage() {
  const reviewRoot = path.join(HERE, "ledger", "reviews", "items");
  const files = (await readdir(reviewRoot)).filter((name) => name.endsWith("integrated-social.json")).sort((a, b) => a.localeCompare(b, "en"));
  assert(files.length >= 10, "official 106-115 integrated Social review shards missing");
  const years = new Set();
  let primaryGeographyItems = 0;
  for (const name of files) {
    const shard = JSON.parse(await readFile(path.join(reviewRoot, name), "utf8"));
    assert.equal(shard.reviewStatus, "complete-rendered-semantic-review", `${name}: official review incomplete`);
    years.add(Number(String(shard.examId).match(/CAP-(\d{3})/u)?.[1]));
    primaryGeographyItems += shard.items.filter((item) => item.primarySubject === "geography").length;
  }
  for (let year = 106; year <= 115; year += 1) assert(years.has(year), `official year ${year} is not covered`);
  assert(primaryGeographyItems >= 260, `official Geography calibration ledger unexpectedly small: ${primaryGeographyItems}`);
  return { papers: files.length, primaryGeographyItems };
}

export async function verifyGeographyR4() {
  const manifestPath = path.join(SUBJECT_ROOT, "content-manifest-v4.json");
  const manifest = JSON.parse(await readFile(manifestPath, "utf8"));
  const manifestSchema = JSON.parse(await readFile(path.join(HERE, "content-manifest-v4.schema.json"), "utf8"));
  const validateManifest = new Ajv2020({ allErrors: true, strict: true }).compile(manifestSchema);
  assert(validateManifest(manifest), `manifest schema failed: ${JSON.stringify(validateManifest.errors)}`);
  assert.equal(manifest.subjectId, "geography");
  assert.deepEqual(manifest.counts, { authorityNodes: 94, skills: 240, lectures: 240, skillQuestions: 2880, stimulusQuestions: 720, stimuli: 240, assets: manifest.counts.assets });
  for (const artifact of manifest.artifacts) {
    const bytes = await readFile(path.join(REPO_ROOT, ...artifact.path.split("/")));
    assert.equal(sha256(bytes), artifact.sha256, `${artifact.id}: manifest hash mismatch`);
  }

  const [authorities, skills, lectures, questions, stimuli, assets] = await Promise.all([
    directoryJson("authority"), directoryJson("skills"), directoryJson("lectures"), directoryJson("questions"), directoryJson("stimuli"), directoryJson("assets"),
  ]);
  const authorityIds = new Set(authorities.map((value) => value.id));
  const skillIds = new Set(skills.map((value) => value.id));
  const stimulusIds = new Set(stimuli.map((value) => value.id));
  const questionIds = new Set(questions.map((value) => value.id));
  assert.deepEqual(
    { authorities: authorities.length, skills: skills.length, lectures: lectures.length, questions: questions.length, stimuli: stimuli.length, assets: assets.length },
    { authorities: 94, skills: 240, lectures: 240, questions: 3600, stimuli: 240, assets: manifest.counts.assets },
    "runtime directory counts do not match the frozen Geography scope",
  );
  assert.equal(questionIds.size, questions.length, "duplicate question ID");
  for (const skill of skills) for (const prerequisite of skill.prerequisites) assert(skillIds.has(prerequisite), `${skill.id}: unknown prerequisite ${prerequisite}`);
  questions.forEach((value) => verifyQuestion(value, authorityIds, skillIds, stimulusIds));
  lectures.forEach((value) => verifyLecture(value, authorityIds, skillIds));
  stimuli.forEach((value) => verifyStimulus(value, authorityIds, skillIds, questionIds));
  const referencedAuthorities = new Set(skills.flatMap((value) => value.authorityRefs));
  const referencedSkills = new Set([...lectures.map((value) => value.skillId), ...questions.flatMap((value) => value.skillIds), ...stimuli.flatMap((value) => value.skillIds)]);
  for (const id of authorityIds) assert(referencedAuthorities.has(id), `${id}: orphan Geography authority`);
  for (const id of skillIds) assert(referencedSkills.has(id), `${id}: orphan Geography skill`);
  await verifyAssets(assets);
  await verifyStaticSources();

  const visibleKeys = questions.map(visibleKey);
  assert.equal(new Set(visibleKeys).size, questions.length, "exact duplicate question surface found");
  const essenceKeys = questions.map(essenceKey);
  assert.equal(new Set(essenceKeys).size, questions.length, "same-skeleton question found after numeric/label normalization");
  const official = await verifyOfficialCoverage();
  return { counts: manifest.counts, official, exactDuplicates: 0, essenceDuplicates: 0 };
}

async function main() {
  const result = await verifyGeographyR4();
  console.log(`verify-geography-r4: OK - ${result.counts.skills} skills, ${result.counts.lectures} lectures, ${result.counts.skillQuestions + result.counts.stimulusQuestions} questions, ${result.counts.stimuli} stimuli, ${result.counts.assets} assets; ${result.official.papers} official-paper shards / ${result.official.primaryGeographyItems} primary Geography items calibrated`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
