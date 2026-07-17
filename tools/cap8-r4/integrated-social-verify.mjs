import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import { buildIntegratedSocialCatalog } from "./integrated-social-build.mjs";
import { allocateSubjectCounts, createSocialAssessment } from "../../社會會考作戰室/runtime.js";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const socialRoot = join(repoRoot, "社會會考作戰室");

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

function readJson(path) { return JSON.parse(readFileSync(path, "utf8")); }

function textValues(value, output = []) {
  if (typeof value === "string") output.push(value);
  else if (Array.isArray(value)) value.forEach((item) => textValues(item, output));
  else if (value && typeof value === "object") Object.values(value).forEach((item) => textValues(item, output));
  return output;
}

function subjectForSkill(id) {
  if (id.startsWith("GEO_")) return "geography";
  if (id.startsWith("HIS_")) return "history";
  if (id.startsWith("CIV_")) return "civics";
  return null;
}

export function verifyIntegratedSocial() {
  const catalogPath = join(socialRoot, "runtime", "catalog.json");
  const catalog = readJson(catalogPath);
  assert.deepEqual(catalog, buildIntegratedSocialCatalog(), "runtime catalog must equal a fresh deterministic build");
  assert.equal(catalog.questions.length, 144);
  assert.equal(catalog.stimuli.length, 12);
  assert.equal(new Set(catalog.questions.map((question) => question.id)).size, 144);
  assert.equal(new Set(catalog.stimuli.map((stimulus) => stimulus.id)).size, 12);
  assert.equal(catalog.officialCalibration.defaultQuestions, 54);
  assert.equal(catalog.officialCalibration.minutes, 70);
  assert.deepEqual(catalog.officialCalibration.defaultSubjectCounts, { geography: 17, history: 19, civics: 18 });
  assert.equal(catalog.officialCalibration.papers.filter((paper) => paper.examId.endsWith("-MAIN")).length, 10);

  for (const question of catalog.questions) {
    assert.equal(question.options.length, 4, `${question.id}: four choices`);
    assert.equal(new Set(question.options.map((option) => option.trim())).size, 4, `${question.id}: unique choices`);
    assert.ok(Number.isInteger(question.answerIndex) && question.answerIndex >= 0 && question.answerIndex < 4, `${question.id}: answerIndex`);
    assert.equal(question.optionRationales.length, 4, `${question.id}: rationales`);
    assert.equal(question.optionRationales.filter((rationale) => rationale.isCorrect).length, 1, `${question.id}: one correct rationale`);
    assert.equal(question.optionRationales.find((rationale) => rationale.isCorrect)?.optionIndex, question.answerIndex, `${question.id}: rationale answer`);
    assert.ok(question.independentReviews.length >= 2 && question.independentReviews.every((review) => review.status === "pass" && review.derivedAnswerIndex === question.answerIndex), `${question.id}: independent unique-answer reviews`);
    assert.equal(question.assets?.length ?? 0, 0, `${question.id}: integrated mode only uses text/data items`);
  }
  const setById = new Map(catalog.blueprint.crossDomainSets.map((set) => [set.id, set]));
  const crossDomainQuestions = catalog.questions.filter((question) => question.integratedRole === "cross-domain");
  assert.equal(crossDomainQuestions.length, 36);
  for (const question of crossDomainQuestions) {
    const set = setById.get(question.integratedSetId);
    const skillSubjects = new Set(question.skillIds.map(subjectForSkill));
    assert.ok(set.domains.every((domain) => skillSubjects.has(domain)), `${question.id}: skills must cover ${set.domains.join(", ")}`);
  }
  let tableCount = 0;
  for (const stimulus of catalog.stimuli) {
    assert.ok(stimulus.integratedDomains.length >= 2, `${stimulus.id}: cross-domain labels`);
    assert.equal(stimulus.questionIds.length, 3, `${stimulus.id}: three questions`);
    assert.equal(stimulus.assets?.length ?? 0, 0, `${stimulus.id}: no undeclared cross-directory asset`);
    const skillSubjects = new Set(stimulus.skillIds.map(subjectForSkill));
    assert.ok(stimulus.integratedDomains.every((domain) => skillSubjects.has(domain)), `${stimulus.id}: stimulus skills cover domains`);
    const table = stimulus.content?.table;
    if (!table) continue;
    tableCount += 1;
    assert.ok(stimulus.accessibility?.summary && stimulus.accessibility?.longDescription, `${stimulus.id}: accessible table alternative`);
    assert.ok(table.caption?.trim(), `${stimulus.id}: table caption`);
    assert.equal(table.rowHeader, true, `${stimulus.id}: row headers`);
    assert.ok(table.columns.length >= 3 && table.rows.length >= 3, `${stimulus.id}: substantive table`);
    assert.ok(table.rows.every((row) => row.length === table.columns.length && row.every((value) => String(value).trim())), `${stimulus.id}: rectangular non-empty table`);
  }
  assert.ok(tableCount >= 8, "cross-domain pool must contain at least eight data-table sets");

  const signatures = new Set();
  for (const question of catalog.questions) {
    const signature = `${question.stem.trim()}\0${[...question.options].sort().join("\0")}`;
    assert.ok(!signatures.has(signature), `${question.id}: duplicated visible question`);
    signatures.add(signature);
  }

  const forbidden = /TODO|FIXME|placeholder|lorem|�/i;
  for (const text of textValues({ questions: catalog.questions, stimuli: catalog.stimuli })) assert.ok(!forbidden.test(text), `unresolved visible marker: ${text.slice(0, 80)}`);
  for (const text of textValues({ questions: crossDomainQuestions, stimuli: catalog.stimuli })) assert.doesNotMatch(text, /第[123]小題|最快作成決定|不必再接受證據檢驗/, "cross-domain prose must not contain source-bank templates");
  assert.match(catalog.notice, /原創練習/);
  assert.match(catalog.notice, /不是官方試題/);

  const before = JSON.stringify(catalog);
  const outputs = [];
  for (let seed = 1; seed <= 200; seed += 1) {
    for (let count = 50; count <= 60; count += 1) {
      const assessment = createSocialAssessment(catalog, { seed: String(seed), questionCount: count });
      assert.equal(assessment.questionIds.length, count, `${seed}/${count}: count`);
      assert.equal(new Set(assessment.questionIds).size, count, `${seed}/${count}: unique IDs`);
      assert.equal(assessment.setIds.length, 4, `${seed}/${count}: set count`);
      assert.equal(assessment.stimulusIds.length, 4, `${seed}/${count}: stimulus count`);
      assert.equal(assessment.singleQuestionIds.length, count - 12, `${seed}/${count}: single count`);
      const questionById = new Map(catalog.questions.map((question) => [question.id, question]));
      const actualSubjectCounts = { geography: 0, history: 0, civics: 0 };
      for (const id of assessment.questionIds) {
        assert.ok(questionById.has(id), `${seed}/${count}: unknown question ${id}`);
        actualSubjectCounts[questionById.get(id).subject] += 1;
      }
      assert.deepEqual(actualSubjectCounts, allocateSubjectCounts(count, catalog.officialCalibration.defaultSubjectCounts), `${seed}/${count}: official subject ratio`);
      const setSubjects = assessment.setIds.map((id) => catalog.blueprint.crossDomainSets.find((set) => set.id === id).subject);
      assert.deepEqual(setSubjects.toSorted(), ["civics", "geography", "history", "history"], `${seed}/${count}: calibrated set subjects`);
      assert.deepEqual(assessment, createSocialAssessment(catalog, { seed: String(seed), questionCount: count }), `${seed}/${count}: deterministic`);
      if (count === 54 && seed <= 5) outputs.push(assessment.questionIds.join("|"));
    }
  }
  assert.equal(JSON.stringify(catalog), before, "assessment selection must not mutate static catalog");
  assert.ok(new Set(outputs).size > 1, "different seeds should select different static IDs");

  const manifest = readJson(join(socialRoot, "content-manifest-v4.json"));
  assert.equal(manifest.subjectId, "integrated_social");
  assert.equal(manifest.sourceCommit, "6d385e76d72652677cb4c6337f6042ae0db4a77a");
  assert.equal(manifest.counts.totalQuestionCandidates, 144);
  for (const artifact of manifest.artifacts) {
    const bytes = readFileSync(join(repoRoot, artifact.path));
    assert.equal(sha256(bytes), artifact.sha256, `${artifact.path}: manifest hash`);
  }

  const html = readFileSync(join(socialRoot, "index.html"), "utf8");
  const runtime = readFileSync(join(socialRoot, "runtime.js"), "utf8");
  assert.match(html, /lang="zh-Hant-TW"/);
  assert.match(html, /原創練習，非官方試題/);
  assert.doesNotMatch(runtime, /stem\s*[:=]|options\s*[:=]/, "runtime must not generate question text or options");
  assert.match(readFileSync(join(socialRoot, "styles.css"), "utf8"), /@media print/);
  assert.match(readFileSync(join(socialRoot, "styles.css"), "utf8"), /prefers-reduced-motion/);
  return { questions: catalog.questions.length, sets: catalog.stimuli.length, seeds: 200, counts: 11 };
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  const result = verifyIntegratedSocial();
  console.log(`integrated-social-verify: OK — ${result.questions} static questions, ${result.sets} cross-domain sets, ${result.seeds * result.counts} assessments`);
}
