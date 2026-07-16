import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadChineseR4Source, validateChineseR4Source } from "./build-chinese-r4.mjs";
import { sha256 } from "./r4-core.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const SUBJECT_ROOT = path.join(REPO_ROOT, "國文會考作戰室");

function collectStrings(value, out = []) {
  if (typeof value === "string") out.push(value);
  else if (Array.isArray(value)) value.forEach((item) => collectStrings(item, out));
  else if (value && typeof value === "object") Object.values(value).forEach((item) => collectStrings(item, out));
  return out;
}

function studentVisibleStrings(source) {
  const lectures = source.units.flatMap(({ value }) => value.lectures);
  const questions = [
    ...source.units.flatMap(({ value }) => value.questions),
    ...source.stimulusQuestions,
  ];
  return collectStrings([
    lectures.map(({ objectives, sections, workedExamples, misconceptions, checks }) => [
      objectives,
      sections.map(({ title, content }) => [title, content]),
      workedExamples.map(({ prompt, steps, answer, why }) => [prompt, steps, answer, why]),
      misconceptions.map(({ belief, whyWrong, correction }) => [belief, whyWrong, correction]),
      checks.map(({ prompt, answer, reason }) => [prompt, answer, reason]),
    ]),
    questions.map(({ stem, options, optionRationales }) => [stem, options, optionRationales.map(({ reason }) => reason)]),
    source.stimuli.map(({ content }) => content),
    source.writingTasks.map(({ title, prompt, taskRequirements, scoringFocus }) => [title, prompt, taskRequirements, scoringFocus]),
    source.assets.map(({ caption, alt, longDescription, dataTable, print }) => [caption, alt, longDescription, dataTable, print.note]),
  ]);
}

export async function verifyChineseR4({ repoRoot = REPO_ROOT } = {}) {
  const source = await loadChineseR4Source({ repoRoot });
  const counts = await validateChineseR4Source(source, { repoRoot });
  const all = [source.units.map(({ value }) => value), source.stimuli, source.stimulusQuestions, source.writingTasks, source.assets];
  const text = collectStrings(all).join("\n");
  const studentText = studentVisibleStrings(source).join("\n");
  assert(!/（以下略）|待補|TODO|TBD|placeholder|lorem ipsum/iu.test(text), "unfinished student content");
  assert(!/<(?:script|iframe|img)\b/iu.test(text), "embedded active or inaccessible markup");
  assert(!/[A-Za-z]{2,}/u.test(studentText), "student-visible Chinese content contains an English family or template label");
  assert.equal(new Set(source.stimuli.map(({ content }) => content)).size, 320, "shared texts must be individually distinct");
  assert.deepEqual(
    Object.fromEntries(["narrative", "expository", "argumentative", "practical"].map((type) => [type, source.stimuli.filter((item) => item.type === type).length])),
    { narrative: 80, expository: 80, argumentative: 80, practical: 80 },
    "shared texts need balanced, genuinely different discourse forms",
  );
  assert.equal(new Set(source.writingTasks.map(({ title }) => title)).size, 120, "writing-task titles must be unique");

  const legacy = await readFile(path.join(repoRoot, "國文會考作戰室", "questions.js"), "utf8");
  assert.match(legacy, /generateQuiz/u, "legacy inventory marker changed unexpectedly");

  const runtimeRoot = path.join(repoRoot, "國文會考作戰室", "r4", "runtime");
  const manifest = JSON.parse(await readFile(path.join(runtimeRoot, "manifest.json"), "utf8"));
  assert.deepEqual(manifest.counts, counts, "runtime manifest count drift");
  assert.equal(manifest.runtimeGeneration, false);
  const unitFiles = (await readdir(path.join(runtimeRoot, "units"))).filter((name) => name.endsWith(".json")).sort();
  assert.equal(unitFiles.length, 48);
  for (const name of unitFiles) {
    const sourceBytes = await readFile(path.join(repoRoot, "國文會考作戰室", "r4", "source", "units", name));
    const runtimeBytes = await readFile(path.join(runtimeRoot, "units", name));
    assert.equal(sha256(runtimeBytes), sha256(sourceBytes), `${name}: runtime differs from authoritative source`);
  }
  for (const name of ["stimuli.json", "stimulus-questions.json", "writing-tasks.json", "assets.json", "catalog.json"]) {
    const sourceBytes = await readFile(path.join(repoRoot, "國文會考作戰室", "r4", "source", name));
    const runtimeBytes = await readFile(path.join(runtimeRoot, name));
    assert.equal(sha256(runtimeBytes), sha256(sourceBytes), `${name}: runtime differs from authoritative source`);
  }
  const graph = JSON.parse(await readFile(path.join(repoRoot, "tools", "cap8-r4", "authority", "frozen-authority-graph.json"), "utf8"));
  const runtimeSkillFiles = (await readdir(path.join(runtimeRoot, "skills"))).filter((name) => name.endsWith(".json")).sort();
  const runtimeAuthorityFiles = (await readdir(path.join(runtimeRoot, "authority"))).filter((name) => name.endsWith(".json")).sort();
  assert.equal(runtimeSkillFiles.length, 320);
  assert.equal(runtimeAuthorityFiles.length, 61);
  for (const skill of graph.skills.filter(({ subject }) => subject === "chinese")) {
    assert.deepEqual(JSON.parse(await readFile(path.join(runtimeRoot, "skills", `${skill.id}.json`), "utf8")), skill, `${skill.id}: runtime skill drift`);
  }
  const sourceAssetIndex = await readFile(path.join(repoRoot, "國文會考作戰室", "r4", "source", "assets.json"));
  const runtimeAssetIndex = await readFile(path.join(runtimeRoot, "assets.json"));
  assert.equal(sha256(runtimeAssetIndex), sha256(sourceAssetIndex), "runtime asset index differs from authoritative source");
  for (const asset of source.assets) {
    const sourceBytes = await readFile(path.join(repoRoot, "國文會考作戰室", "r4", "source", asset.file));
    const runtimeBytes = await readFile(path.join(runtimeRoot, asset.file));
    assert.equal(sha256(runtimeBytes), sha256(sourceBytes), `${asset.id}: runtime asset differs from authoritative source`);
  }
  return counts;
}

async function main() {
  const counts = await verifyChineseR4();
  console.log(`verify-chinese-r4: OK - ${JSON.stringify(counts)}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
