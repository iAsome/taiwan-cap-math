import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildHistoryUnit } from "./build-history-unit.mjs";
import { validateAuthoringRecord } from "./authoring-validator.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const SUBJECT_ROOT = path.join(REPO_ROOT, "歷史會考作戰室", "r4");
const RUNTIME_ROOT = path.join(SUBJECT_ROOT, "runtime");
const CONTENT_VERSION = "4.0.0";

const UNIT_TITLES = [
  "歷史時間、時序與分期", "史料、證據與歷史解釋", "史前臺灣與考古", "原住民族與南島連結",
  "歐洲勢力與鄭氏政權", "清帝國治臺與社會", "開港與晚清變局", "日治統治與社會",
  "戰爭動員與殖民末期", "戰後接收、威權與社會", "臺灣經濟轉型與社會變遷", "民主化與當代臺灣",
  "早期中國文明", "帝國制度與社會", "中古中國與文化交流", "宋元明清的轉型",
  "晚清危機與改革", "革命、共和與軍閥時期", "國共關係與對日戰爭", "中華人民共和國、中華民國與戰後東亞",
  "古代西亞與埃及", "古希臘與羅馬", "主要宗教與文化傳播", "中世紀歐洲與伊斯蘭世界",
  "文藝復興、宗教改革與科學變革", "海外擴張與全球交流", "政治革命與現代公民", "工業革命與資本主義",
  "民族主義與民族國家", "帝國主義與殖民", "第一次世界大戰與戰間期", "第二次世界大戰及其影響",
  "冷戰與去殖民化", "冷戰後與全球化", "區域與全球史中的臺灣", "文件、地圖、時間線與因果整合",
];

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function canonical(value) {
  if (Array.isArray(value)) return value.map(canonical);
  if (value && typeof value === "object") return Object.fromEntries(Object.keys(value).sort().map((key) => [key, canonical(value[key])]));
  return value;
}

async function readRecords(folder) {
  const names = (await readdir(folder)).filter((name) => name.endsWith(".json")).sort();
  return Promise.all(names.map(async (name) => ({ name, value: JSON.parse(await readFile(path.join(folder, name), "utf8")) })));
}

async function descriptor(repoRoot, id, type, absolutePath) {
  const bytes = await readFile(absolutePath);
  return {
    id,
    type,
    path: path.relative(repoRoot, absolutePath).replaceAll("\\", "/"),
    sha256: sha256(bytes),
  };
}

async function officialCalibration(repoRoot) {
  const reviewRoot = path.join(repoRoot, "tools", "cap8-r4", "ledger", "reviews", "items");
  const names = (await readdir(reviewRoot))
    .filter((name) => /^CAP-(?:106|107|108|109|110|111|112|113|114|115)-(?:MAIN|ALTERNATE)-integrated-social\.json$/u.test(name))
    .sort();
  const relevant = [];
  for (const name of names) {
    const shard = JSON.parse(await readFile(path.join(reviewRoot, name), "utf8"));
    assert.equal(shard.reviewStatus, "complete-rendered-semantic-review", `${name}: review incomplete`);
    relevant.push(...shard.items.filter((item) => item.primarySubject === "history" || item.secondarySubjects.includes("history")).map((item) => ({ ...item, paper: name })));
  }
  const countValues = (key) => Object.fromEntries(
    [...relevant.flatMap((item) => item[key] ?? []).reduce((map, value) => map.set(value, (map.get(value) ?? 0) + 1), new Map())]
      .sort((left, right) => right[1] - left[1] || left[0].localeCompare(right[0], "en")),
  );
  return {
    years: "106-115",
    reviewedPapers: names.length,
    mainRelevantItems: relevant.filter((item) => item.paper.includes("-MAIN-")).length,
    allRelevantItems: relevant.length,
    primaryHistoryItems: relevant.filter((item) => item.primarySubject === "history").length,
    secondaryHistoryLinks: relevant.filter((item) => item.primarySubject !== "history").length,
    sharedStimulusItems: relevant.filter((item) => item.sharedStimulusId).length,
    representationTypes: countValues("representationTypes"),
  };
}

async function buildAssets(repoRoot, subjectRoot, runtimeRoot) {
  const sourceRoot = path.join(subjectRoot, "source", "assets");
  const outputRoot = path.join(runtimeRoot, "assets");
  await rm(outputRoot, { recursive: true, force: true });
  await mkdir(outputRoot, { recursive: true });
  const names = (await readdir(sourceRoot)).filter((name) => name.endsWith(".json")).sort();
  const records = [];
  for (const name of names) {
    const source = JSON.parse(await readFile(path.join(sourceRoot, name), "utf8"));
    const bytes = await readFile(path.join(repoRoot, source.path));
    const record = { ...source, sha256: sha256(bytes) };
    await validateAuthoringRecord("asset", record);
    const outputName = `${record.id}.json`;
    await writeFile(path.join(outputRoot, outputName), `${JSON.stringify(record, null, 2)}\n`, "utf8");
    records.push({ name: outputName, value: record });
  }
  return records;
}

export async function buildHistory({ repoRoot = REPO_ROOT } = {}) {
  const subjectRoot = path.join(repoRoot, "歷史會考作戰室", "r4");
  const runtimeRoot = path.join(subjectRoot, "runtime");
  for (const name of ["lectures", "questions", "stimuli"]) await rm(path.join(runtimeRoot, name), { recursive: true, force: true });

  const unitResults = [];
  for (let number = 1; number <= 36; number += 1) {
    unitResults.push(await buildHistoryUnit(`HIS_R4_U${String(number).padStart(2, "0")}`, { repoRoot }));
  }

  const assets = await buildAssets(repoRoot, subjectRoot, runtimeRoot);

  const [authorities, skills, lectures, questions, stimuli] = await Promise.all([
    readRecords(path.join(runtimeRoot, "authority")),
    readRecords(path.join(runtimeRoot, "skills")),
    readRecords(path.join(runtimeRoot, "lectures")),
    readRecords(path.join(runtimeRoot, "questions")),
    readRecords(path.join(runtimeRoot, "stimuli")),
  ]);
  const skillQuestions = questions.filter(({ value }) => value.stimulusId === null);
  const stimulusQuestions = questions.filter(({ value }) => value.stimulusId !== null);
  assert.deepEqual(
    [authorities.length, skills.length, lectures.length, skillQuestions.length, stimuli.length, stimulusQuestions.length],
    [94, 240, 240, 2880, 240, 720],
    "History R4 content floor mismatch",
  );

  const skillIds = new Set(skills.map(({ value }) => value.id));
  const assetById = new Map(assets.map(({ value }) => [value.id, value]));
  const referencedAssets = new Set();
  for (const { value: asset } of assets) {
    assert(asset.skillIds.every((skillId) => skillIds.has(skillId)), `${asset.id}: asset references an unknown History skill`);
  }
  for (const { value: record } of [...lectures, ...questions, ...stimuli]) {
    const recordSkillIds = record.skillIds ?? [record.skillId];
    for (const assetId of record.assets ?? []) {
      const asset = assetById.get(assetId);
      assert(asset, `${record.id}: references missing asset ${assetId}`);
      assert(recordSkillIds.some((skillId) => asset.skillIds.includes(skillId)), `${record.id}: ${assetId} is not declared for this skill`);
      referencedAssets.add(assetId);
    }
  }
  assert.deepEqual([...referencedAssets].sort(), [...assetById.keys()].sort(), "every History asset must be used by student-facing content");

  const index = {
    schemaVersion: "cap8-r4-history-runtime-index-v1",
    contentVersion: CONTENT_VERSION,
    counts: {
      authorityNodes: authorities.length,
      skills: skills.length,
      lectures: lectures.length,
      skillQuestions: skillQuestions.length,
      stimulusQuestions: stimulusQuestions.length,
      stimuli: stimuli.length,
      assets: assets.length,
    },
    officialCalibration: await officialCalibration(repoRoot),
    officialArchives: Array.from({ length: 10 }, (_, offset) => 115 - offset).map((year) => ({
      year,
      paper: `../../shared/social-official-data/${year}/${year}-exam.pdf`,
      answer: `../../shared/social-official-data/${year}/${year}-answer.pdf`,
      guide: `../../shared/social-official-data/${year}/${year}-guide.pdf`,
      officialPage: `https://cap.rcpet.edu.tw/exam/${year}/${year}exam.html`,
    })),
    units: Array.from({ length: 36 }, (_, offset) => {
      const id = `HIS_R4_U${String(offset + 1).padStart(2, "0")}`;
      return { id, title: UNIT_TITLES[offset], skillIds: skills.filter(({ value }) => value.unitId === id).map(({ value }) => value.id) };
    }),
    skills: skills.map(({ name, value }) => ({ id: value.id, unitId: value.unitId, title: value.title, path: `./runtime/skills/${name}` })),
    lectures: lectures.map(({ name, value }) => ({ id: value.id, skillId: value.skillId, path: `./runtime/lectures/${name}` })),
    questions: questions.map(({ name, value }) => ({ id: value.id, skillIds: value.skillIds, stimulusId: value.stimulusId, difficulty: value.difficulty, path: `./runtime/questions/${name}` })),
    stimuli: stimuli.map(({ name, value }) => ({ id: value.id, skillIds: value.skillIds, path: `./runtime/stimuli/${name}` })),
    assets: assets.map(({ name, value }) => ({
      id: value.id,
      skillIds: value.skillIds,
      path: `./runtime/assets/${name}`,
      filePath: `./${path.relative(subjectRoot, path.join(repoRoot, value.path)).replaceAll("\\", "/")}`,
    })),
  };
  index.offlineUrls = [
    "./", "./index.html", "./styles.css", "../../shared/subject-shell.css?v=20260718a", "./app.js", "./runtime.js", "./service-worker.js", "./runtime/index.json",
    ...index.skills.map((value) => value.path),
    ...index.lectures.map((value) => value.path),
    ...index.questions.map((value) => value.path),
    ...index.stimuli.map((value) => value.path),
    ...index.assets.flatMap((value) => [value.path, value.filePath]),
  ];
  await mkdir(runtimeRoot, { recursive: true });
  const indexPath = path.join(runtimeRoot, "index.json");
  await writeFile(indexPath, `${JSON.stringify(index, null, 2)}\n`, "utf8");

  const artifacts = [];
  for (const [type, records, folder] of [
    ["authority", authorities, "authority"], ["skill", skills, "skills"], ["lecture", lectures, "lectures"],
    ["question", questions, "questions"], ["stimulus", stimuli, "stimuli"],
    ["asset", assets, "assets"],
  ]) {
    for (const { name, value } of records) artifacts.push(await descriptor(repoRoot, value.id, type, path.join(runtimeRoot, folder, name)));
  }
  for (const [id, relative] of [
    ["HIS_R4_UI_INDEX", "index.html"], ["HIS_R4_UI_APP", "app.js"], ["HIS_R4_UI_STYLE", "styles.css"],
    ["HIS_R4_UI_RUNTIME", "runtime.js"], ["HIS_R4_UI_SERVICE_WORKER", "service-worker.js"], ["HIS_R4_UI_RUNTIME_INDEX", "runtime/index.json"],
  ]) artifacts.push(await descriptor(repoRoot, id, "ui", path.join(subjectRoot, relative)));
  artifacts.push(await descriptor(repoRoot, "HIS_R4_UI_SHARED_SHELL", "ui", path.join(repoRoot, "shared", "subject-shell.css")));
  artifacts.push(await descriptor(repoRoot, "HIS_R4_UI_ENTRY", "ui", path.join(subjectRoot, "..", "index.html")));
  for (const { value } of assets) artifacts.push(await descriptor(repoRoot, `${value.id}_FILE`, "ui", path.join(repoRoot, value.path)));
  artifacts.sort((left, right) => left.id.localeCompare(right.id, "en"));

  const graphBytes = await readFile(path.join(repoRoot, "tools", "cap8-r4", "authority", "frozen-authority-graph.json"));
  const counts = index.counts;
  const buildSha256 = sha256(Buffer.from(JSON.stringify(canonical({ artifacts, counts }))));
  const manifest = {
    schemaVersion: "cap8-content-manifest-v4",
    subjectId: "history",
    contentVersion: CONTENT_VERSION,
    authorityGraphSha256: sha256(graphBytes),
    artifacts,
    counts,
    buildSha256,
  };
  await writeFile(path.join(subjectRoot, "content-manifest-v4.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  return { unitResults, manifest, index };
}

async function main() {
  const { manifest } = await buildHistory();
  console.log(`build-history: OK - ${manifest.counts.lectures} lectures, ${manifest.counts.skillQuestions} skill questions, ${manifest.counts.stimuli} stimuli, ${manifest.counts.stimulusQuestions} stimulus questions`);
  console.log(`build-history: ${manifest.buildSha256}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
