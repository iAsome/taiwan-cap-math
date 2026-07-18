import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { createExam, SUBJECT_ORDER, subjectQuotas } from "../../自然會考作戰室/exam-engine.mjs";

const TARGET_DIRECTORY = "自然會考作戰室";
const SOURCE = Object.freeze({
  biology: "生物會考作戰室/r4",
  physics_chemistry: "理化會考作戰室/r4",
  earth_science: "地科會考作戰室/r4",
});
const REQUIRED_CATEGORIES = Object.freeze(["experiment", "data-table", "figure", "model", "cross-domain", "system", "inquiry"]);
const REQUIRED_GROUPS = Object.freeze([
  "PHYCHM_R4_STIM_137",
  "PHYCHM_R4_STIM_297",
  "BIO_R4_ST_S194",
  "EARTH_R4_ST_003",
  "EARTH_R4_ST_201",
]);
const REPAIRED_ASSET_IDS = new Set([
  "EARTH_R4_ASSET_CLIMATE_GRAPH",
  "EARTH_R4_ASSET_PLATE",
  "EARTH_R4_ASSET_WEATHER_MAP",
]);

function slashPath(root, value) {
  return path.join(root, ...value.split("/"));
}

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

async function json(file) {
  return JSON.parse(await readFile(file, "utf8"));
}

function duplicateValues(values) {
  const seen = new Set();
  return values.filter((value) => seen.has(value) || !seen.add(value));
}

async function sourceRecord(repoRoot, subject, kind, id) {
  if (kind === "assets" && subject === "earth_science") {
    const records = await json(slashPath(repoRoot, `${SOURCE[subject]}/runtime/assets.json`));
    return records.find((record) => record.id === id);
  }
  return json(slashPath(repoRoot, `${SOURCE[subject]}/runtime/${kind}/${id}.json`));
}

function assertQuestion(question) {
  assert.equal(question.provenance?.status, "original", `${question.id} 必須是原創靜態題目`);
  assert.equal(question.options?.length, 4, `${question.id} 必須有四個選項`);
  assert.ok(Number.isInteger(question.answerIndex) && question.answerIndex >= 0 && question.answerIndex < 4, `${question.id} 答案索引錯誤`);
  assert.equal(question.optionRationales?.length, 4, `${question.id} 必須逐選項解析`);
  assert.deepEqual(question.optionRationales.map((item) => item.optionIndex), [0, 1, 2, 3], `${question.id} 解析索引錯誤`);
  assert.deepEqual(question.optionRationales.filter((item) => item.isCorrect).map((item) => item.optionIndex), [question.answerIndex], `${question.id} 正解解析錯誤`);
  assert.equal(new Set(question.options).size, 4, `${question.id} 選項重複`);
  assert.ok(!question.independentReviews || question.independentReviews.length >= 2, `${question.id} 缺少兩次獨立審查`);
  for (const review of question.independentReviews || []) {
    assert.equal(review.status, "pass", `${question.id} 審查未通過`);
    assert.equal(review.derivedAnswerIndex, question.answerIndex, `${question.id} 審查答案不一致`);
  }
}

function assertGroupIntegrity(exam, groupId) {
  const entries = exam.entries.filter((entry) => entry.groupId === groupId);
  assert.equal(entries.length, 3, `${groupId} 必須完整選入三題`);
  assert.deepEqual(entries.map((entry) => entry.groupOrder), [1, 2, 3], `${groupId} 題序錯誤`);
  const positions = entries.map((entry) => entry.number);
  assert.deepEqual(positions, [positions[0], positions[0] + 1, positions[0] + 2], `${groupId} 必須連續顯示`);
  assert.equal(new Set(entries.map((entry) => entry.question.stimulusId)).size, 1, `${groupId} 題組文章不一致`);
}

async function verifyOfficialCalibration(repoRoot, blueprint) {
  const ledger = await json(path.join(repoRoot, "tools", "cap8-r4", "ledger", "reviews", "items", "CAP-115-MAIN-integrated-natural.json"));
  assert.equal(ledger.items.length, 50, "115 年官方自然科題數應為 50");
  const distribution = Object.fromEntries(SUBJECT_ORDER.map((subject) => [subject, ledger.items.filter((item) => item.primarySubject === subject).length]));
  assert.deepEqual(distribution, blueprint.officialCalibration.defaultSubjectCounts, "預設分科比例必須對齊 115 年官方逐題審查");
  assert.equal(blueprint.officialCalibration.defaultQuestions, ledger.items.length);
}

async function verifyArtifacts(repoRoot, targetRoot, catalog, manifest) {
  for (const dependency of manifest.dependencies) {
    assert.equal(sha256(await readFile(slashPath(repoRoot, dependency.path))), dependency.sha256, `來源雜湊改變：${dependency.path}`);
  }
  for (const [artifact, expected] of Object.entries(manifest.artifacts)) {
    assert.equal(sha256(await readFile(slashPath(repoRoot, artifact))), expected, `產物雜湊錯誤：${artifact}`);
  }
  const precache = await json(path.join(targetRoot, "runtime", "precache.json"));
  assert.equal(new Set(precache).size, precache.length, "離線快取清單重複");
  for (const asset of catalog.assets) {
    const bytes = await readFile(path.join(targetRoot, ...asset.runtimePath.split("/")));
    assert.equal(sha256(bytes), asset.runtimeSha256, `整合資產雜湊錯誤：${asset.id}`);
    if (REPAIRED_ASSET_IDS.has(asset.id)) {
      assert.equal(asset.presentationRepair, "integrated-natural-svg-legibility-v1", `${asset.id} 缺少圖形可讀性修復標記`);
      assert.notEqual(asset.runtimeSha256, asset.sha256, `${asset.id} 修復後資產不應等於來源位元組`);
    } else {
      assert.equal(asset.presentationRepair, undefined, `${asset.id} 不應宣告圖形修復`);
      assert.equal(asset.runtimeSha256, asset.sha256, `${asset.id} 未修復資產必須保持來源位元組`);
    }
    assert.ok(precache.includes(`./${asset.runtimePath}`), `離線快取漏列 ${asset.id}`);
    assert.ok(asset.altText && asset.longDescription && asset.caption && asset.dataFallback, `${asset.id} 無障礙說明不完整`);
  }
  assert.ok(precache.includes("./runtime/catalog.json"));
  assert.ok(precache.includes("./index.html"));
}

export async function verifyIntegratedNatural({ repoRoot } = {}) {
  if (!repoRoot) throw new TypeError("repoRoot 為必填。 ");
  const targetRoot = path.join(repoRoot, TARGET_DIRECTORY);
  const blueprint = await json(path.join(targetRoot, "source-blueprint.json"));
  const catalog = await json(path.join(targetRoot, "runtime", "catalog.json"));
  const manifest = await json(path.join(targetRoot, "runtime", "build-manifest.json"));
  await verifyOfficialCalibration(repoRoot, blueprint);

  assert.equal(catalog.exam.minutes, 70);
  assert.equal(catalog.exam.minQuestions, 45);
  assert.equal(catalog.exam.maxQuestions, 55);
  assert.equal(catalog.exam.defaultQuestions, 50);
  assert.equal(catalog.sourceMode, "reviewed-static-id-selection-only");
  assert.equal(catalog.pool.length, 55);
  assert.equal(catalog.questions.length, 55);
  assert.deepEqual(catalog.pool, blueprint.questionPool);
  assert.deepEqual(
    Object.fromEntries(SUBJECT_ORDER.map((subject) => [subject, catalog.pool.filter((entry) => entry.subject === subject).length])),
    { physics_chemistry: 29, biology: 14, earth_science: 12 },
  );
  assert.deepEqual(duplicateValues(catalog.pool.map((entry) => entry.questionId)), []);
  assert.deepEqual(duplicateValues(catalog.questions.map((question) => question.id)), []);
  assert.deepEqual(duplicateValues(catalog.questions.map((question) => JSON.stringify([question.stem, [...question.options].sort()]))), [], "題面與選項重複");

  const poolById = new Map(catalog.pool.map((entry) => [entry.questionId, entry]));
  for (const question of catalog.questions) {
    assertQuestion(question);
    const entry = poolById.get(question.id);
    assert.ok(entry, `${question.id} 不在靜態藍圖`);
    assert.deepEqual(question, await sourceRecord(repoRoot, entry.subject, "questions", question.id), `${question.id} 不等於已審核來源`);
  }
  for (const stimulus of catalog.stimuli) {
    const subject = stimulus.subject;
    assert.deepEqual(stimulus, await sourceRecord(repoRoot, subject, "stimuli", stimulus.id), `${stimulus.id} 題組遭改寫`);
  }
  for (const skill of catalog.skills) {
    const subject = skill.subject || (skill.id.startsWith("BIO_") ? "biology" : skill.id.startsWith("PHYCHM_") ? "physics_chemistry" : "earth_science");
    assert.deepEqual(skill, await sourceRecord(repoRoot, subject, "skills", skill.id), `${skill.id} 技能資料遭改寫`);
  }
  for (const asset of catalog.assets) {
    const subject = asset.subject || (asset.id.startsWith("BIO_") ? "biology" : asset.id.startsWith("PHYCHM_") ? "physics_chemistry" : "earth_science");
    const { runtimePath, runtimeSha256, presentationRepair, ...sourceShape } = asset;
    assert.deepEqual(sourceShape, await sourceRecord(repoRoot, subject, "assets", asset.id), `${asset.id} 資產中繼資料遭改寫`);
  }
  assert.equal(catalog.assets.filter((asset) => asset.presentationRepair).length, REPAIRED_ASSET_IDS.size, "圖形修復數量不符");

  const sequences = new Set();
  for (let count = 45; count <= 55; count += 1) {
    for (const seed of ["1", "2", "12345", "999999", "臺灣會考"]) {
      const exam = createExam(catalog, { seed, count });
      assert.equal(exam.minutes, 70);
      assert.equal(exam.entries.length, count);
      assert.deepEqual(exam.quotas, subjectQuotas(count, catalog.exam.defaultSubjectCounts));
      assert.equal(new Set(exam.entries.map((entry) => entry.questionId)).size, count, `${seed}/${count} 有重複題目 ID`);
      for (const entry of exam.entries) {
        assert.ok(poolById.has(entry.questionId), `${entry.questionId} 不是靜態 ID`);
        assert.strictEqual(entry.question, catalog.questions.find((question) => question.id === entry.questionId), `${entry.questionId} 不得在執行期改寫`);
      }
      for (const groupId of REQUIRED_GROUPS) assertGroupIntegrity(exam, groupId);
      const categories = new Set(exam.entries.flatMap((entry) => entry.categories));
      for (const category of REQUIRED_CATEGORIES) assert.ok(categories.has(category), `${seed}/${count} 缺少 ${category}`);
      sequences.add(exam.entries.map((entry) => entry.questionId).join("|"));
    }
  }
  assert.ok(sequences.size > 20, "不同種子未產生足夠的靜態題目排列變化");
  assert.deepEqual(createExam(catalog, { seed: "same", count: 50 }), createExam(catalog, { seed: "same", count: 50 }), "同 seed 結果不穩定");

  assert.equal(manifest.questionCount, 55);
  assert.equal(manifest.stimulusCount, 5);
  assert.equal(manifest.deterministic, true);
  await verifyArtifacts(repoRoot, targetRoot, catalog, manifest);

  const index = await readFile(path.join(targetRoot, "index.html"), "utf8");
  const app = await readFile(path.join(targetRoot, "app.mjs"), "utf8");
  const styles = await readFile(path.join(targetRoot, "styles.css"), "utf8");
  const worker = await readFile(path.join(targetRoot, "sw.js"), "utf8");
  assert.match(index, /CAP R4 原創練習/);
  assert.match(index, /70 分鐘/);
  assert.match(index, /min="45" max="55"[^>]*value="50"/);
  assert.match(app, /recordAttempt/);
  assert.match(app, /optionRationales/);
  assert.match(app, /複習/);
  assert.match(styles, /:focus-visible/);
  assert.match(styles, /@media print/);
  assert.match(styles, /@media \(max-width:/);
  assert.match(worker, /precache\.json/);

  const authoredFiles = (await readdir(targetRoot)).filter((name) => !["assets", "runtime"].includes(name));
  assert.ok(authoredFiles.includes("manifest.webmanifest"));
  return {
    questions: catalog.questions.length,
    stimuli: catalog.stimuli.length,
    skills: catalog.skills.length,
    assets: catalog.assets.length,
    seedsAndCountsChecked: 55,
    subjectPool: { physics_chemistry: 29, biology: 14, earth_science: 12 },
  };
}

const repoRoot = fileURLToPath(new URL("../..", import.meta.url));
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const result = await verifyIntegratedNatural({ repoRoot });
  console.log(`integrated-natural-verify: OK — ${result.questions} static questions, ${result.stimuli} stimuli, ${result.assets} assets`);
}
