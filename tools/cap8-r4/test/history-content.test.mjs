import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { auditHistorySimilarity } from "../audit-history-similarity.mjs";
import { loadHistoryUnitSource, materializeHistoryUnit } from "../build-history-unit.mjs";
import { validateAuthoringRecord } from "../authoring-validator.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..", "..", "..");
const GRAPH_PATH = path.join(ROOT, "tools", "cap8-r4", "authority", "frozen-authority-graph.json");
const SOURCE_ROOT = path.join(ROOT, "歷史會考作戰室", "r4", "source", "units");
const REVIEW_ROOT = path.join(ROOT, "tools", "cap8-r4", "ledger", "reviews", "items");
const RUNTIME_MODULE_PATH = path.join(ROOT, "歷史會考作戰室", "r4", "runtime.js");
const SUBJECT_ROOT = path.join(ROOT, "歷史會考作戰室", "r4");
const SIMPLIFIED_CHARACTERS = new Set([..."这们个为与于进过还对从书门国发见关体总统长开论认读写实现选题应学习处头运动产阶级军战争义县华亚欧历资证时汉礼观权区条约贸经济农业罗苏联独党团专币厂广岛乡万岁车线组场坛给"]);
const PLACEHOLDER = /(?:TODO|TBD|placeholder|lorem ipsum|(?:^|[\s：:「『])待(?:補|查)(?:$|[\s。；，、」』]))/iu;
const AUTHORING_RESIDUE = /(?:為(?:符合|配合).{0,8}(?:分布|答案位置)|第一個內容|完成(?:排列|分布)|置於第[一二三四]項|answerIndex)/iu;
const INTERNAL_CONTENT_ID = /\bHIS_R4_(?:A|L|Q|S|SQ|ST|U)\d+\b/u;
const ANSWER_ORDINALS = new Map([["一", 0], ["二", 1], ["三", 2], ["四", 3]]);

function simplifiedTokens(value) {
  const text = String(value);
  const found = [...new Set([...text].filter((character) => SIMPLIFIED_CHARACTERS.has(character)))];
  if (/(?:之|以|前|往|然|日|年|戰|战)后|后来|后續|后续|后方|后期|后果|后人|后代|幕后|戰后|战后/u.test(text)) found.push("后");
  return [...new Set(found)];
}

function studentVisibleLecture(lecture) {
  return [
    ...lecture.objectives,
    ...lecture.sections.flatMap((section) => [section.title, section.content]),
    ...lecture.workedExamples.flatMap((example) => [example.prompt, ...example.steps, example.answer, example.why]),
    ...lecture.misconceptions.flatMap((item) => [item.belief, item.whyWrong, item.correction]),
    ...lecture.checks.flatMap((item) => [item.prompt, item.answer, item.reason]),
  ].join("\n");
}

function visibleKey(question) {
  return JSON.stringify([question.stem.trim(), [...question.options].map((value) => value.trim()).sort()]);
}

function essenceKey(question) {
  const normalize = (value) => String(value)
    .normalize("NFKC")
    .replace(/[「」『』，。！？：；、,.!?;:'"()（）\[\]【】]/gu, "")
    .replace(/\d+(?:[.-]\d+)*/gu, "#")
    .replace(/\s+/gu, "");
  return JSON.stringify([normalize(question.stem), question.options.map(normalize).sort()]);
}

function chineseLength(value) {
  return (String(value).match(/[\p{Script=Han}]/gu) ?? []).length;
}

async function allMaterializedUnits() {
  const units = [];
  for (let number = 1; number <= 36; number += 1) {
    const unitId = `HIS_R4_U${String(number).padStart(2, "0")}`;
    const source = await loadHistoryUnitSource(unitId, { repoRoot: ROOT });
    units.push(await materializeHistoryUnit(source, { graphPath: GRAPH_PATH }));
  }
  return units;
}

test("History source owns all 240 frozen skills and 2,880 static skill questions", async () => {
  const graph = JSON.parse(await readFile(GRAPH_PATH, "utf8"));
  const frozenSkills = graph.skills.filter((skill) => skill.subject === "history");
  const graphNodeIds = new Set(graph.nodes.map((node) => node.id));
  const historyAuthorityIds = new Set(frozenSkills.flatMap((skill) => skill.authorityRefs));
  const units = await allMaterializedUnits();
  const lectures = units.flatMap((unit) => unit.lectures);
  const questions = units.flatMap((unit) => unit.questions);
  const stimuli = units.flatMap((unit) => unit.stimuli);
  const stimulusQuestions = units.flatMap((unit) => unit.stimulusQuestions);

  assert.equal(frozenSkills.length, 240);
  assert.equal(historyAuthorityIds.size, 94);
  assert([...historyAuthorityIds].every((id) => graphNodeIds.has(id)), "History skill references an unknown authority node");
  assert(frozenSkills.every((skill) => skill.authorityRefs.length > 0), "History skill has no official authority binding");
  assert(frozenSkills.every((skill) => skill.prerequisites.every((id) => graph.skills.some((candidate) => candidate.id === id))), "History prerequisite is unknown");
  assert.equal(lectures.length, 240);
  assert.equal(questions.length, 2880);
  assert.equal(stimuli.length, 240);
  assert.equal(stimulusQuestions.length, 720);
  assert.equal(new Set(lectures.map((lecture) => lecture.skillId)).size, 240);
  assert.equal(new Set(questions.map((question) => question.id)).size, 2880);
  assert.equal(new Set(questions.map(visibleKey)).size, 2880);
  assert.equal(new Set(stimuli.map((stimulus) => stimulus.id)).size, 240);
  assert.equal(new Set(stimulusQuestions.map(visibleKey)).size, 720);
  const allQuestions = [...questions, ...stimulusQuestions];
  assert.equal(new Set(allQuestions.map(visibleKey)).size, 3600);
  assert.equal(new Set(allQuestions.map(essenceKey)).size, 3600);
  assert.equal(new Set(stimuli.map((stimulus) => JSON.stringify(stimulus.content))).size, 240);
  const sectionContents = lectures.flatMap((lecture) => lecture.sections.map((section) => section.content.trim()));
  const exampleWhys = lectures.flatMap((lecture) => lecture.workedExamples.map((example) => example.why.trim()));
  const misconceptionRecords = lectures.flatMap((lecture) => lecture.misconceptions.map((item) => JSON.stringify([item.belief.trim(), item.whyWrong.trim(), item.correction.trim()])));
  const reviewEvidence = allQuestions.flatMap((question) => question.independentReviews.map((review) => review.evidence.trim()));
  assert.equal(new Set(sectionContents).size, sectionContents.length, "duplicate lecture section content");
  assert.equal(new Set(exampleWhys).size, exampleWhys.length, "duplicate worked-example explanation");
  assert.equal(new Set(misconceptionRecords).size, misconceptionRecords.length, "duplicate lecture misconception record");
  assert.equal(new Set(reviewEvidence).size, reviewEvidence.length, "duplicate independent-review evidence");

  for (const unit of units) {
    for (const skill of unit.skills) {
      const bank = unit.questions.filter((question) => question.skillIds.includes(skill.id));
      assert.deepEqual(
        [0, 1, 2, 3].map((answerIndex) => bank.filter((question) => question.answerIndex === answerIndex).length),
        [3, 3, 3, 3],
        `${skill.id}: answer position distribution`,
      );
    }
    const stimulusDistribution = [0, 1, 2, 3].map((answerIndex) => unit.stimulusQuestions.filter((question) => question.answerIndex === answerIndex).length);
    assert(Math.max(...stimulusDistribution) - Math.min(...stimulusDistribution) <= 1, `${unit.skills[0].unitId}: stimulus answer position distribution`);
  }

  for (const lecture of lectures) {
    assert(lecture.objectives.length >= 1, `${lecture.id}: objective missing`);
    assert(lecture.sections.length >= 4, `${lecture.id}: section floor`);
    assert(lecture.workedExamples.length >= 3, `${lecture.id}: example floor`);
    assert(lecture.misconceptions.length >= 4, `${lecture.id}: misconception floor`);
    assert(lecture.checks.length >= 3, `${lecture.id}: check floor`);
    assert(lecture.sections.every((section) => chineseLength(section.content) >= 35), `${lecture.id}: shallow section`);
    assert(lecture.workedExamples.every((example) => chineseLength(example.why) >= 25), `${lecture.id}: shallow worked example`);
    const visible = studentVisibleLecture(lecture);
    assert(!PLACEHOLDER.test(visible), `${lecture.id}: placeholder`);
    assert(!AUTHORING_RESIDUE.test(visible), `${lecture.id}: authoring residue`);
    assert(!INTERNAL_CONTENT_ID.test(visible), `${lecture.id}: internal content ID exposed`);
    assert.deepEqual(simplifiedTokens(visible), [], `${lecture.id}: possible Simplified Chinese`);
    assert.equal(lecture.provenance.status, "original", `${lecture.id}: provenance`);
  }

  for (const question of questions) {
    assert.equal(question.options.length, 4, `${question.id}: options`);
    assert.equal(new Set(question.options).size, 4, `${question.id}: duplicate option`);
    assert(question.answerIndex >= 0 && question.answerIndex < 4, `${question.id}: answerIndex`);
    assert.equal(question.optionRationales.length, 4, `${question.id}: rationales`);
    assert(question.optionRationales.every((item) => [...item.reason.trim()].length >= 8), `${question.id}: shallow rationale`);
    assert.equal(question.independentReviews.length, 2, `${question.id}: independent reviews`);
    assert.equal(new Set(question.independentReviews.map((review) => review.evidence.trim())).size, 2, `${question.id}: duplicate review evidence`);
    assert(question.independentReviews.every((review) => [...review.evidence.trim()].length >= 8), `${question.id}: shallow review evidence`);
    assert.equal(question.provenance.status, "original", `${question.id}: provenance`);
    const visible = [
      question.stem,
      ...question.options,
      ...question.optionRationales.map((item) => item.reason),
      ...question.independentReviews.map((item) => item.evidence),
    ].join("\n");
    assert(!PLACEHOLDER.test(visible), `${question.id}: placeholder`);
    assert(!AUTHORING_RESIDUE.test(visible), `${question.id}: authoring residue`);
    assert(!INTERNAL_CONTENT_ID.test(visible), `${question.id}: internal content ID exposed`);
    assert.deepEqual(simplifiedTokens(visible), [], `${question.id}: possible Simplified Chinese`);
  }

  for (const question of allQuestions) {
    const ordinal = question.independentReviews[0]?.evidence.match(/第([一二三四])項/u)?.[1];
    if (ordinal) assert.equal(ANSWER_ORDINALS.get(ordinal), question.answerIndex, `${question.id}: review answer ordinal`);
  }

  for (const stimulus of stimuli) {
    assert.match(stimulus.accessibility.plainText, /\S/u, `${stimulus.id}: plain text`);
    assert.match(stimulus.accessibility.longDescription, /\S/u, `${stimulus.id}: long description`);
    const visible = JSON.stringify([stimulus.content, stimulus.accessibility]);
    assert(!PLACEHOLDER.test(visible), `${stimulus.id}: placeholder`);
    assert(!AUTHORING_RESIDUE.test(visible), `${stimulus.id}: authoring residue`);
    assert(!INTERNAL_CONTENT_ID.test(visible), `${stimulus.id}: internal content ID exposed`);
    assert.deepEqual(simplifiedTokens(visible), [], `${stimulus.id}: possible Simplified Chinese`);
    assert.match(stimulus.content.sourceNote ?? "", /原創/u, `${stimulus.id}: originality notice`);
    assert.equal(stimulus.provenance.status, "original", `${stimulus.id}: provenance`);
  }

  const legacyText = (await Promise.all(["history-data.js", "quiz-taxonomy.js", "questions.js"].map((name) => readFile(path.join(SUBJECT_ROOT, "..", name), "utf8")))).join("\n");
  for (const question of allQuestions) assert(!legacyText.includes(question.stem), `${question.id}: stem copied from legacy content`);
  for (const lecture of lectures) {
    for (const section of lecture.sections) assert(!legacyText.includes(section.content), `${section.id}: lecture text copied from legacy content`);
  }
  for (const stimulus of stimuli) {
    for (const block of stimulus.content.blocks ?? []) {
      const text = typeof block === "string" ? block : block.text;
      assert(!legacyText.includes(text), `${stimulus.id}: stimulus text copied from legacy content`);
    }
  }
});

test("History sources are explicit unit modules without runtime question generation", async () => {
  const files = (await readdir(SOURCE_ROOT)).filter((name) => /^HIS_R4_U\d{2}\.mjs$/u.test(name)).sort();
  assert.equal(files.length, 36);
  for (const file of files) {
    const source = await readFile(path.join(SOURCE_ROOT, file), "utf8");
    assert(!/(?:Math\.random|Date\.now|new Function|eval\s*\(|generateQuestion|questionTemplate)/u.test(source), `${file}: procedural generation marker`);
  }
});

test("History near-duplicate audit rejects repeated normalized questions and extreme similarity", async () => {
  const result = await auditHistorySimilarity();
  assert.equal(result.questions, 3600);
  assert.deepEqual(result.normalizedQuestionDuplicateGroups, []);
  assert.deepEqual(result.structuralQuestionDuplicateGroups, []);
  assert.deepEqual(result.normalizedRationaleDuplicateGroups, []);
  assert.deepEqual(result.normalizedReviewEvidenceDuplicateGroups, []);
  assert.deepEqual(result.optionLengthFindings, []);
  assert.deepEqual(result.unmarkedSourceClaims, []);
  assert.deepEqual(result.vagueRationaleFindings, []);
  assert.deepEqual(result.titleLeakFindings, []);
  assert.deepEqual(result.blockingCandidates, []);
});

test("History UI identifies reconstructed source-style prose without weakening stimulus provenance", async () => {
  const app = await readFile(path.join(SUBJECT_ROOT, "app.js"), "utf8");
  const notice = "史料型短文均為本站依查證史實原創重構；未附出處時，不是歷史文獻原文。";
  assert.equal(app.split(notice).length - 1, 1);
  assert.match(app, /SOURCE_RECONSTRUCTION_NOTICE/u);
  assert.match(app, /class="source-notice"/u);
});

test("Official 106-115 social reviews provide complete History calibration evidence", async () => {
  const files = (await readdir(REVIEW_ROOT))
    .filter((name) => /^CAP-(?:106|107|108|109|110|111|112|113|114|115)-(?:MAIN|ALTERNATE)-integrated-social\.json$/u.test(name))
    .sort();
  assert(files.length >= 10);
  const reviewed = [];
  for (const file of files) {
    const shard = JSON.parse(await readFile(path.join(REVIEW_ROOT, file), "utf8"));
    assert.equal(shard.reviewStatus, "complete-rendered-semantic-review", file);
    reviewed.push(...shard.items.filter((item) => item.primarySubject === "history" || item.secondarySubjects.includes("history")).map((item) => ({ ...item, paper: file })));
  }
  assert.equal(files.length, 13);
  assert.equal(reviewed.filter((item) => item.paper.includes("-MAIN-")).length, 226);
  assert.equal(reviewed.length, 290);
  assert.equal(reviewed.filter((item) => item.primarySubject === "history").length, 248);
  assert.equal(reviewed.filter((item) => item.primarySubject !== "history").length, 42);
  assert(reviewed.every((item) => item.answerEvidence && item.reasoningOperations.length > 0));
});

test("History assessment runtime only selects deterministic static IDs", async () => {
  const source = await readFile(RUNTIME_MODULE_PATH, "utf8");
  const runtime = await import(`data:text/javascript;base64,${Buffer.from(source).toString("base64")}`);
  const index = {
    questions: [
      ...Array.from({ length: 12 }, (_, indexValue) => ({ id: `Q${indexValue}`, skillIds: ["S1"], stimulusId: null })),
      ...Array.from({ length: 3 }, (_, indexValue) => ({ id: `SQ${indexValue}`, skillIds: ["S1"], stimulusId: "ST1" })),
    ],
    stimuli: [{ id: "ST1", skillIds: ["S1"] }],
  };
  const first = runtime.createAssessment(index, { seed: "115", skillQuestionCount: 8, stimulusSetCount: 1 });
  const replay = runtime.createAssessment(index, { seed: "115", skillQuestionCount: 8, stimulusSetCount: 1 });
  const other = runtime.createAssessment(index, { seed: "116", skillQuestionCount: 8, stimulusSetCount: 1 });
  assert.deepEqual(first, replay);
  assert.notDeepEqual(first.questionIds, other.questionIds);
  const existing = new Set(index.questions.map((item) => item.id));
  assert(first.questionIds.every((id) => existing.has(id)));
  assert.deepEqual(first.stimulusIds, ["ST1"]);
  assert(!/(?:Math\.random|Date\.now|generateQuestion|replace\s*\()/u.test(source));

  class MemoryStorage {
    constructor(entries = {}, limit = Infinity) { this.values = new Map(Object.entries(entries)); this.limit = limit; }
    get length() { return this.values.size; }
    key(indexValue) { return [...this.values.keys()][indexValue] ?? null; }
    getItem(key) { return this.values.has(key) ? this.values.get(key) : null; }
    setItem(key, value) {
      const next = new Map(this.values);
      next.set(key, String(value));
      if ([...next].reduce((total, [entryKey, entryValue]) => total + entryKey.length + entryValue.length, 0) > this.limit) throw new Error("quota");
      this.values = next;
    }
  }
  const legacyPaper = { id: "old-paper", correct: 8, total: 10, finishedAt: "2026-01-02T03:04:05.000Z", exam: { seed: 88 } };
  const storage = new MemoryStorage({
    "capHistory.completed": JSON.stringify(["u1"]),
    "capHistory.paperHistory": JSON.stringify([legacyPaper]),
    "capHistory.lastSeed": "88",
    "capHistory.dark": "1",
    "capHistory.quizSignatures.u1": JSON.stringify(["large-signature".repeat(2000)]),
  });
  const migrated = runtime.migrateHistoryProgress(storage);
  assert.equal(migrated.status, "migrated");
  assert.deepEqual(Object.keys(migrated.snapshot.entries), [
    "capHistory.completed", "capHistory.dark", "capHistory.lastSeed", "capHistory.paperHistory", "capHistory.quizSignatures.u1",
  ]);
  assert.equal(JSON.parse(storage.getItem(runtime.HISTORY_BACKUP_KEY)).entries["capHistory.quizSignatures.u1"], migrated.snapshot.entries["capHistory.quizSignatures.u1"]);
  assert.deepEqual(migrated.progress.migration.unmappedCompleted, ["u1"]);
  assert.equal(migrated.progress.attempts[0].legacyId, "old-paper");
  assert.equal(runtime.migrateHistoryProgress(storage).progress.attempts.filter((attempt) => attempt.legacyId === "old-paper").length, 1);

  const corrupt = new MemoryStorage({ [runtime.HISTORY_STORAGE_KEY]: "{bad", "capHistory.completed": "not-json" });
  assert.deepEqual(runtime.migrateHistoryProgress(corrupt).progress.completedSkills, []);
  assert.equal(JSON.parse(corrupt.getItem(runtime.HISTORY_BACKUP_KEY)).previousV4Value, "{bad");

  const full = new MemoryStorage({ "capHistory.paperHistory": JSON.stringify([legacyPaper]) }, 100);
  const failed = runtime.migrateHistoryProgress(full);
  assert.equal(failed.status, "backup-failed");
  assert.equal(full.getItem("capHistory.paperHistory"), JSON.stringify([legacyPaper]));
  assert.equal(full.getItem(runtime.HISTORY_STORAGE_KEY), null);

  const app = await readFile(path.join(ROOT, "歷史會考作戰室", "r4", "app.js"), "utf8");
  assert.match(source, /cap8\.r4\.history\.migrationBackup\.v1/u);
  assert.match(app, /migrateHistoryProgress/u);
  assert(!/removeItem\s*\(\s*["']capHistory/u.test(app));
});

test("History visual assets carry complete map and nonvisual evidence", async () => {
  const sourceRoot = path.join(ROOT, "歷史會考作戰室", "r4", "source", "assets");
  const names = (await readdir(sourceRoot)).filter((name) => name.endsWith(".json")).sort();
  assert(names.length >= 4);
  const officialCandidateIds = new Set();
  for (const name of (await readdir(REVIEW_ROOT)).filter((value) => /integrated-social\.json$/u.test(value))) {
    const review = JSON.parse(await readFile(path.join(REVIEW_ROOT, name), "utf8"));
    for (const item of review.items) officialCandidateIds.add(item.candidateId);
  }
  for (const name of names) {
    const source = JSON.parse(await readFile(path.join(sourceRoot, name), "utf8"));
    const bytes = await readFile(path.join(ROOT, source.path));
    const record = { ...source, sha256: createHash("sha256").update(bytes).digest("hex") };
    await validateAuthoringRecord("asset", record);
    assert.equal(record.accessibility.colorIndependent, true);
    assert.equal(record.accessibility.printSafe, true);
    assert(record.dataFallback.rows.length > 0);
    assert(record.calibrationRefs.every((id) => officialCandidateIds.has(id)), `${record.id}: unknown official calibration reference`);
    if (record.type === "map") {
      assert.match(record.technical.orientation, /\S/u);
      assert.match(record.technical.scale, /\S/u);
      assert.match(record.technical.legend, /\S/u);
      assert.match(record.technical.dateOrYear, /\S/u);
      assert.match(record.technical.uncertaintyNote, /\S/u);
    }
    const svg = bytes.toString("utf8");
    assert.match(svg, /<title\b/u);
    assert.match(svg, /<desc\b/u);
    assert.match(svg, /role="img"/u);
  }
});

test("History manifest locks final files and isolates the legacy generator", async () => {
  const manifest = JSON.parse(await readFile(path.join(SUBJECT_ROOT, "content-manifest-v4.json"), "utf8"));
  const runtimeIndex = JSON.parse(await readFile(path.join(SUBJECT_ROOT, "runtime", "index.json"), "utf8"));
  assert.equal(manifest.schemaVersion, "cap8-content-manifest-v4");
  assert.equal(manifest.subjectId, "history");
  assert.deepEqual(manifest.counts, {
    authorityNodes: 94,
    skills: 240,
    lectures: 240,
    skillQuestions: 2880,
    stimulusQuestions: 720,
    stimuli: 240,
    assets: manifest.counts.assets,
  });
  assert(manifest.counts.assets >= 1);
  assert.equal(runtimeIndex.officialCalibration.mainRelevantItems, 226);
  assert.equal(runtimeIndex.officialCalibration.allRelevantItems, 290);
  assert.equal(runtimeIndex.officialArchives.length, 10);

  for (const descriptor of manifest.artifacts) {
    const bytes = await readFile(path.join(ROOT, descriptor.path));
    assert.equal(createHash("sha256").update(bytes).digest("hex"), descriptor.sha256, descriptor.id);
  }
  for (const archive of runtimeIndex.officialArchives) {
    await readFile(path.resolve(SUBJECT_ROOT, archive.paper));
    await readFile(path.resolve(SUBJECT_ROOT, archive.answer));
    await readFile(path.resolve(SUBJECT_ROOT, archive.guide));
  }
  const legacyMarkers = /(?:EXAM_ENGINE|generateQuiz|quiz-taxonomy\.js|questions\.js)/u;
  for (const relative of ["index.html", "app.js", "runtime.js", "service-worker.js", "runtime/index.json"]) {
    assert(!legacyMarkers.test(await readFile(path.join(SUBJECT_ROOT, relative), "utf8")), `${relative}: legacy runtime reachable`);
  }
  const publicEntry = await readFile(path.join(SUBJECT_ROOT, "..", "index.html"), "utf8");
  assert.match(publicEntry, /\.\/r4\//u);
  assert(!legacyMarkers.test(publicEntry), "public History entry still reaches the legacy runtime");
  assert(manifest.artifacts.some((artifact) => artifact.id === "HIS_R4_UI_ENTRY"), "public History entry is not hash-locked");
  const declared = new Set(runtimeIndex.offlineUrls);
  assert(runtimeIndex.questions.every((item) => declared.has(item.path)));
  assert(runtimeIndex.lectures.every((item) => declared.has(item.path)));
  assert(runtimeIndex.stimuli.every((item) => declared.has(item.path)));
  assert(runtimeIndex.assets.every((item) => declared.has(item.path) && declared.has(item.filePath)));
});
