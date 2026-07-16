import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import crypto from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { validateAuthoringRecord } from "./authoring-validator.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const R4_ROOT = path.join(REPO_ROOT, "公民會考作戰室", "r4");
const RUNTIME_ROOT = path.join(R4_ROOT, "runtime");
const REVIEW_ROOT = path.join(HERE, "ledger", "reviews", "items");
const EXPECTED = Object.freeze({ authorityNodes: 100, skills: 240, lectures: 240, skillQuestions: 2880, stimulusQuestions: 720, stimuli: 240, assets: 12 });

const sha256 = (value) => crypto.createHash("sha256").update(value).digest("hex");
const json = async (target) => JSON.parse(await readFile(target, "utf8"));
const jsonDirectory = async (name) => Promise.all((await readdir(path.join(RUNTIME_ROOT, name))).filter((value) => value.endsWith(".json")).sort().map((value) => json(path.join(RUNTIME_ROOT, name, value))));

function assertUnique(label, values) {
  const groups = new Map();
  for (const [index, value] of values.entries()) groups.set(value, [...(groups.get(value) ?? []), index]);
  const duplicates = [...groups.entries()].filter(([, indices]) => indices.length > 1);
  assert.equal(duplicates.length, 0, `${label}: ${JSON.stringify(duplicates.slice(0, 5))}`);
}

function visibleQuestion(question) {
  return `${question.stem}\n${question.options.join("\n")}`;
}

function trigrams(value) {
  const normalized = value.normalize("NFKC").toLocaleLowerCase("zh-Hant").replace(/[\p{P}\p{S}\s]/gu, "");
  return new Set(Array.from({ length: Math.max(0, normalized.length - 2) }, (_, index) => normalized.slice(index, index + 3)));
}

function jaccard(left, right) {
  let intersection = 0;
  for (const value of left) if (right.has(value)) intersection += 1;
  return intersection / (left.size + right.size - intersection || 1);
}

function assertNoNearDuplicates(questions) {
  const bySkill = Map.groupBy(questions, (question) => question.skillIds.join("\0"));
  const collisions = [];
  for (const bank of bySkill.values()) {
    const fingerprints = bank.map((question) => trigrams(visibleQuestion(question)));
    for (let left = 0; left < bank.length; left += 1) {
      for (let right = left + 1; right < bank.length; right += 1) {
        const similarity = jaccard(fingerprints[left], fingerprints[right]);
        if (similarity >= 0.82) collisions.push({ left: bank[left].id, right: bank[right].id, similarity });
      }
    }
  }
  assert.equal(collisions.length, 0, `near-duplicate questions within a tested skill: ${JSON.stringify(collisions.slice(0, 8))}`);
}

function assertScopedGitStatus() {
  const output = execFileSync("git", ["-c", "core.quotepath=false", "status", "--porcelain=v1", "-z", "--untracked-files=all"], { cwd: REPO_ROOT, encoding: "utf8" });
  const records = output.split("\0").filter(Boolean);
  const paths = records.map((record) => record.slice(3).replaceAll("\\", "/"));
  const outside = paths.filter((value) => !value.startsWith("公民會考作戰室/") && !/^tools\/cap8-r4\/(?:build-civics|verify-civics|test-civics-browser)(?:\.test)?\.mjs$/u.test(value));
  assert.deepEqual(outside, [], `git changes escaped Civics scope: ${JSON.stringify(outside.slice(0, 20))}`);
  return paths.length;
}

async function verifyManifest(manifest) {
  assert.deepEqual(manifest.counts, EXPECTED);
  assert.equal(new Set(manifest.artifacts.map((artifact) => artifact.id)).size, manifest.artifacts.length, "duplicate manifest artifact ID");
  for (const artifact of manifest.artifacts) {
    const target = path.resolve(REPO_ROOT, artifact.path);
    assert(target.startsWith(`${R4_ROOT}${path.sep}`), `${artifact.id}: manifest path escaped Civics R4`);
    assert.equal(sha256(await readFile(target)), artifact.sha256, `${artifact.id}: manifest SHA mismatch`);
  }
  const buildSha256 = sha256(manifest.artifacts.map((value) => `${value.type}\0${value.id}\0${value.path}\0${value.sha256}`).join("\n"));
  assert.equal(buildSha256, manifest.buildSha256, "manifest build SHA mismatch");
  const graphBytes = await readFile(path.join(HERE, "authority", "frozen-authority-graph.json"));
  assert.equal(sha256(graphBytes), manifest.authorityGraphSha256, "authority graph SHA mismatch");
}

async function verifyAuthority(skills, authorityNodes, lectures, questions, stimuli) {
  for (const authority of authorityNodes) await validateAuthoringRecord("authority", authority);
  for (const skill of skills) await validateAuthoringRecord("skill", skill);
  const authorityIds = new Set(authorityNodes.map((value) => value.id));
  const skillIds = new Set(skills.map((value) => value.id));
  assert.equal(authorityIds.size, EXPECTED.authorityNodes);
  assert.equal(skillIds.size, EXPECTED.skills);
  const usedAuthority = new Set();
  for (const skill of skills) {
    for (const reference of skill.authorityRefs) { assert(authorityIds.has(reference), `${skill.id}: unknown authority ${reference}`); usedAuthority.add(reference); }
    for (const prerequisite of skill.prerequisites) assert(skillIds.has(prerequisite), `${skill.id}: unknown prerequisite ${prerequisite}`);
  }
  assert.deepEqual([...authorityIds].filter((value) => !usedAuthority.has(value)), [], "orphan Civics authority nodes");
  assert.deepEqual(new Set(lectures.map((value) => value.skillId)), skillIds, "lecture/skill mapping drift");
  for (const value of [...lectures, ...questions, ...stimuli]) {
    for (const reference of value.authorityRefs) assert(authorityIds.has(reference), `${value.id}: unknown authority ${reference}`);
    for (const skillId of value.skillIds ?? [value.skillId]) assert(skillIds.has(skillId), `${value.id}: unknown skill ${skillId}`);
  }
}

async function verifyLectures(lectures, sources) {
  for (const lecture of lectures) await validateAuthoringRecord("lecture", lecture);
  assert(lectures.every((value) => value.sections.length >= 4 && value.workedExamples.length >= 3 && value.misconceptions.length >= 4 && value.checks.length >= 3));
  assert(lectures.every((value) => value.sections.some((section) => section.title.includes("資料查證") && section.content.includes("2026-07-16"))), "lecture verification sections missing");
  const fields = {
    sectionContent: lectures.flatMap((value) => value.sections.map((item) => item.content)),
    examplePrompt: lectures.flatMap((value) => value.workedExamples.map((item) => item.prompt)),
    exampleAnswer: lectures.flatMap((value) => value.workedExamples.map((item) => item.answer)),
    exampleReasoning: lectures.flatMap((value) => value.workedExamples.map((item) => item.why)),
    misconceptionBelief: lectures.flatMap((value) => value.misconceptions.map((item) => item.belief)),
    misconceptionExplanation: lectures.flatMap((value) => value.misconceptions.map((item) => item.whyWrong)),
    misconceptionCorrection: lectures.flatMap((value) => value.misconceptions.map((item) => item.correction)),
    checkPrompt: lectures.flatMap((value) => value.checks.map((item) => item.prompt)),
    checkAnswer: lectures.flatMap((value) => value.checks.map((item) => item.answer)),
    checkReason: lectures.flatMap((value) => value.checks.map((item) => item.reason)),
  };
  for (const [label, values] of Object.entries(fields)) assertUnique(label, values);
  const sourceIds = new Set(sources.map((value) => value.id));
  for (const lecture of lectures) for (const reference of lecture.provenance.sourceRefs) assert(sourceIds.has(reference) || reference.startsWith("AUTH-SOCIAL-"), `${lecture.id}: unknown provenance ${reference}`);
}

async function verifyQuestions(questions) {
  for (const question of questions) await validateAuthoringRecord("question", question);
  assert.equal(questions.length, EXPECTED.skillQuestions + EXPECTED.stimulusQuestions);
  assert.equal(new Set(questions.map((value) => value.id)).size, questions.length);
  assertUnique("question visible content", questions.map(visibleQuestion));
  assertUnique("question stem", questions.map((value) => value.stem));
  assertUnique("question option", questions.flatMap((value) => value.options));
  assertUnique("option rationale", questions.flatMap((value) => value.optionRationales.map((item) => item.reason)));
  assertUnique("independent review evidence", questions.flatMap((value) => value.independentReviews.map((item) => item.evidence)));
  assertNoNearDuplicates(questions);
  for (const question of questions) {
    assert.equal(question.options.length, 4, `${question.id}: four options required`);
    assert.equal(new Set(question.options).size, 4, `${question.id}: duplicate option`);
    assert.equal(question.optionRationales.filter((value) => value.isCorrect).length, 1, `${question.id}: not exactly one answer`);
    assert.equal(question.independentReviews.length, 2, `${question.id}: two answer reviews required`);
    assert(question.independentReviews.every((value) => value.status === "pass" && value.derivedAnswerIndex === question.answerIndex), `${question.id}: answer review disagreement`);
    const structurallyUnsupported = /不再核對其他條件|所有案例都成立|只留下.*支持|最快作成決定|不必再接受證據檢驗|省略.*事實的核對/u;
    const independentlySupported = question.options.map((option, index) => ({ option, index })).filter(({ option }) => !structurallyUnsupported.test(option));
    assert.equal(independentlySupported.length, 1, `${question.id}: independent rule-and-evidence solve is not unique`);
    assert.equal(independentlySupported[0].index, question.answerIndex, `${question.id}: independent solve disagrees with key`);
  }
  const skillQuestions = questions.filter((value) => value.id.startsWith("CIV_R4_Q_"));
  for (const bank of Map.groupBy(skillQuestions, (value) => value.skillIds[0]).values()) {
    assert.equal(bank.length, 12);
    assert.deepEqual([0, 1, 2, 3].map((answerIndex) => bank.filter((value) => value.answerIndex === answerIndex).length), [3, 3, 3, 3]);
    assert.deepEqual(Object.fromEntries(["foundation", "standard", "advanced", "transfer"].map((difficulty) => [difficulty, bank.filter((value) => value.difficulty === difficulty).length])), { foundation: 3, standard: 4, advanced: 3, transfer: 2 });
  }
}

async function verifyStimuli(stimuli, questions) {
  assert.equal(stimuli.length, EXPECTED.stimuli);
  assertUnique("stimulus content", stimuli.map((value) => value.content));
  const questionIds = new Set(questions.map((value) => value.id));
  for (const stimulus of stimuli) {
    assert.equal(stimulus.subject, "civics");
    assert.equal(stimulus.questionIds.length, 3);
    assert(stimulus.questionIds.every((value) => questionIds.has(value)), `${stimulus.id}: missing question`);
    assert.equal(stimulus.factCheckedAt, "2026-07-16");
    assert.equal(stimulus.provenance.status, "original");
  }
}

async function verifyAssets(assets) {
  for (const asset of assets) {
    await validateAuthoringRecord("asset", asset);
    assert(asset.caption && asset.altText && asset.longDescription && asset.dataFallback);
    assert(asset.creator && asset.source && asset.license && asset.originality === "original" && asset.transformationRecord, `${asset.id}: provenance metadata missing`);
    assert.equal(asset.accessibility.colorIndependent, true);
    assert.equal(asset.accessibility.printSafe, true);
    const html = await readFile(path.join(REPO_ROOT, asset.path), "utf8");
    assert(html.includes("<caption>") && html.includes('scope="col"') && html.includes("@media print"), `${asset.id}: accessible printable table missing`);
    const rows = [...html.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map(([, row]) => [...row.matchAll(/<t[hd]\b[^>]*>([\s\S]*?)<\/t[hd]>/g)].map(([, cell]) => cell.replace(/<[^>]+>/g, "").trim()));
    assert.deepEqual(rows[0], asset.dataFallback.columns, `${asset.id}: rendered headers differ from data fallback`);
    assert.deepEqual(rows.slice(1), asset.dataFallback.rows, `${asset.id}: rendered rows differ from data fallback`);
    assert(html.includes(`<caption>${asset.dataFallback.summary}</caption>`), `${asset.id}: rendered caption differs from data fallback summary`);
    assert(asset.altText.includes("資料表") && asset.longDescription.includes("不以顏色"), `${asset.id}: text alternative is incomplete`);
  }
}

async function verifyCalibration(calibration) {
  assert.deepEqual(calibration.officialYearRange, [106, 115]);
  assert.deepEqual(calibration.counts, { reviewFiles: 13, primaryCivicsItems: 251, crossSubjectCivicsItems: 55 });
  assert.equal(calibration.primaryCivicsItems.length, calibration.counts.primaryCivicsItems);
  assert.equal(calibration.crossSubjectCivicsItems.length, calibration.counts.crossSubjectCivicsItems);
  assert.deepEqual([...new Set(calibration.reviewFiles.map((value) => Number(value.slice(4, 7))))].sort((a, b) => a - b), [106, 107, 108, 109, 110, 111, 112, 113, 114, 115]);
  assertUnique("official calibration candidate", [...calibration.primaryCivicsItems, ...calibration.crossSubjectCivicsItems].map((value) => value.candidateId));
  const candidateLedger = await json(path.join(HERE, "ledger", "official-item-candidates.json"));
  const officialAnswers = new Map(candidateLedger.exams.flatMap((exam) => exam.items).map((item) => [item.candidateId, item.officialAnswer]));
  let reviewedItems = 0;
  for (const file of calibration.reviewFiles) {
    const review = await json(path.join(REVIEW_ROOT, file));
    assert.equal(review.reviewStatus, "complete-rendered-semantic-review", `${file}: incomplete official review`);
    for (const item of review.items) {
      reviewedItems += 1;
      assert.equal(item.derivedAnswer, officialAnswers.get(item.candidateId), `${item.candidateId}: official answer disagreement`);
      assert(item.answerEvidence && item.distractorAnalysis.length, `${item.candidateId}: incomplete semantic review`);
    }
  }
  assert.equal(reviewedItems, 765, "official rendered item review count drift");
}

async function verifyRuntime(index, manifest) {
  assert.equal(index.legacyRuntimeReachable, false);
  assert.equal(index.units.length, 36);
  assert.equal(index.skills.length, 240);
  assert.equal(index.assets.length, 12);
  const { migrateLegacyStorage, orderStaticIds, safeJson } = await import(pathToFileURL(path.join(R4_ROOT, "app.js")));
  assert.deepEqual(safeJson("broken", []), []);
  class Storage {
    constructor(entries = {}) { this.values = new Map(Object.entries(entries)); }
    get length() { return this.values.size; }
    key(indexValue) { return [...this.values.keys()][indexValue] ?? null; }
    getItem(key) { return this.values.get(key) ?? null; }
    setItem(key, value) { this.values.set(key, String(value)); }
  }
  const empty = new Storage();
  assert.equal(migrateLegacyStorage(empty).migrated, true);
  const legacy = new Storage({ "capCivics.completed": '["u1"]', "capCivics.lastSeed": "9", "capCivics.dark": "true" });
  const migrated = migrateLegacyStorage(legacy);
  assert.equal(migrated.complete, true);
  assert.equal(migrated.legacyKeys, 3);
  assert.equal(legacy.getItem("cap8.r4.civics.lastSeed"), "9");
  assert.deepEqual(JSON.parse(legacy.getItem("cap8.r4.civics.legacyCompleted")), ["u1"]);
  assert.equal(migrateLegacyStorage(legacy).reason, "already-complete");
  class QuotaStorage extends Storage {
    setItem(key, value) { if (key.endsWith("legacyBackup")) { const error = new Error("quota"); error.name = "QuotaExceededError"; throw error; } super.setItem(key, value); }
  }
  const constrained = new QuotaStorage({ "capCivics.completed": '["u1"]' });
  const constrainedResult = migrateLegacyStorage(constrained);
  assert.equal(constrainedResult.complete, false);
  assert.equal(constrained.getItem("cap8.r4.civics.migration.v1"), null, "partial migration marked complete");
  assert.equal(constrained.getItem("capCivics.completed"), '["u1"]', "legacy source key was changed");
  const ids = ["b", "a", "c"];
  assert.deepEqual(orderStaticIds(ids, "7"), orderStaticIds(ids, "7"));
  assert.deepEqual(ids, ["b", "a", "c"], "runtime ordering mutated reviewed IDs");
  const app = await readFile(path.join(R4_ROOT, "app.js"), "utf8");
  assert(!/Math\.random|new\s+Question|generateQuestion|sentence\s*splic/iu.test(app), "runtime question generation found");
  assert(app.includes("diagnosticPanel") && app.includes("renderRemediation") && app.includes("reviewSchedule") && app.includes("handleTabKeys"), "diagnostic/remediation/keyboard learning flow missing");
  const html = await readFile(path.join(R4_ROOT, "index.html"), "utf8");
  assert(html.includes('id="tabDiagnostic"') && html.includes('id="tabRemediation"') && html.includes('aria-live="polite"'), "accessible learning-flow controls missing");
  const styles = await readFile(path.join(R4_ROOT, "styles.css"), "utf8");
  assert(styles.includes("@media print") && styles.includes("section[hidden]{display:block!important}"), "print gate missing");
  const sw = await readFile(path.join(R4_ROOT, "sw.js"), "utf8");
  assert(sw.includes("content-manifest-v4.json") && sw.includes("manifest.artifacts.map") && sw.includes("cacheCompleteRelease"), "full static offline precache missing");
  const indexedPaths = index.skills.flatMap((skill) => [skill.lecturePath, skill.stimulusPath, ...skill.questionPaths, ...skill.stimulusQuestionPaths]);
  assert.equal(new Set(indexedPaths).size, 240 * 17, "runtime indexed artifact paths drift");
  const manifestPaths = new Set(manifest.artifacts.map((artifact) => artifact.path.replaceAll("\\", "/").split("/r4/")[1]));
  assert(indexedPaths.every((value) => manifestPaths.has(value)), "runtime index references artifact outside manifest");
}

function assertNoPlaceholders(values) {
  const match = values.join("\n").match(/\uFFFD|\b(?:TODO|FIXME|Lorem ipsum|placeholder)\b/iu);
  assert.equal(match, null, `placeholder or encoding defect found: ${match?.[0]}`);
}

export async function verifyCivics() {
  const changedPaths = assertScopedGitStatus();
  const [manifest, index, binding, calibration, sourceFile, lectures, questions, stimuli, skills, authorityNodes] = await Promise.all([
    json(path.join(R4_ROOT, "content-manifest-v4.json")),
    json(path.join(RUNTIME_ROOT, "content-index.json")),
    json(path.join(R4_ROOT, "source", "authority-skill-binding.json")),
    json(path.join(R4_ROOT, "source", "official-cap-calibration.json")),
    json(path.join(R4_ROOT, "source", "official-sources.json")),
    jsonDirectory("lectures"), jsonDirectory("questions"), jsonDirectory("stimuli"), jsonDirectory("skills"), jsonDirectory("authority"),
  ]);
  assert.equal(binding.status, "frozen-authority-and-skill-records-built");
  assert.deepEqual(binding.counts, { authorityNodes: 100, skills: 240, units: 36 });
  assert.deepEqual(binding.contentStatus, { lecturesComplete: true, skillQuestionsComplete: true, stimuliComplete: true, manifestEligible: true });
  assert.equal(binding.officialFactVerificationDate, "2026-07-16");
  assert(sourceFile.sources.every((value) => value.status === "verified" && value.retrievedAt === "2026-07-16"));
  await verifyManifest(manifest);
  await verifyAuthority(skills, authorityNodes, lectures, questions, stimuli);
  await verifyLectures(lectures, sourceFile.sources);
  await verifyQuestions(questions);
  await verifyStimuli(stimuli, questions);
  await verifyAssets(index.assets);
  await verifyCalibration(calibration);
  await verifyRuntime(index, manifest);
  assertNoPlaceholders([...lectures, ...questions, ...stimuli].map((value) => JSON.stringify(value)));
  return { status: "pass", changedPaths, buildSha256: manifest.buildSha256, counts: manifest.counts, officialCalibration: { ...calibration.counts, renderedItemsChecked: 765, answerMismatches: 0 }, exactDuplicateGroups: 0, nearDuplicatePairsWithinSkill: 0, independentlySolvedQuestions: questions.length, uniquelyKeyedQuestions: questions.length };
}

async function main() {
  console.log(JSON.stringify(await verifyCivics(), null, 2));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
