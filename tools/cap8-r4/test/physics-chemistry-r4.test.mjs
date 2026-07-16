import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdtemp, readFile, readdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath, pathToFileURL } from "node:url";
import { canonicalJson, sha256 } from "../r4-core.mjs";
import { discoverSubjectArtifacts } from "../run-full-release-gate.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..", "..", "..");
const SUBJECT_ROOT = path.join(ROOT, "理化會考作戰室", "r4");
const RUNTIME_ROOT = path.join(SUBJECT_ROOT, "runtime");
const BUILDER_URL = pathToFileURL(path.join(ROOT, "tools", "cap8-r4", "build-physics-chemistry-r4.mjs")).href;
const KNOWLEDGE_URL = pathToFileURL(path.join(SUBJECT_ROOT, "source", "physics-chemistry-skill-knowledge.mjs")).href;
const GRAPH_PATH = path.join(ROOT, "tools", "cap8-r4", "authority", "frozen-authority-graph.json");

let apiPromise;
const api = () => (apiPromise ??= import(BUILDER_URL));

async function filesBelow(directory) {
  const values = [];
  async function visit(current) {
    for (const entry of await readdir(current, { withFileTypes: true })) {
      const absolute = path.join(current, entry.name);
      if (entry.isDirectory()) await visit(absolute);
      else values.push(absolute);
    }
  }
  await visit(directory);
  return values.sort((a, b) => a.localeCompare(b, "en"));
}

async function treeHash(directory) {
  const hash = createHash("sha256");
  for (const file of await filesBelow(directory)) {
    hash.update(path.relative(directory, file).replaceAll("\\", "/"));
    hash.update("\0");
    hash.update(await readFile(file));
    hash.update("\0");
  }
  return hash.digest("hex");
}

function essence(value, titles) {
  let result = value.normalize("NFKC").toLowerCase();
  for (const title of titles) result = result.replaceAll(title.normalize("NFKC").toLowerCase(), "<skill>");
  return result
    .replace(/[0-9０-９]+(?:[.,][0-9０-９]+)?/gu, "<number>")
    .replace(/[\s「」『』]+/gu, "")
    .trim();
}

function contrastRatio(first, second) {
  const luminance = (hex) => {
    const channels = hex.slice(1).match(/.{2}/g).map((value) => Number.parseInt(value, 16) / 255)
      .map((value) => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4);
    return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
  };
  const values = [luminance(first), luminance(second)];
  return (Math.max(...values) + 0.05) / (Math.min(...values) + 0.05);
}

test("Physics/Chemistry builder imports without writing runtime content", async () => {
  const before = await treeHash(RUNTIME_ROOT);
  await import(`${BUILDER_URL}?side-effect-check=1`);
  assert.equal(await treeHash(RUNTIME_ROOT), before);
});

test("300 authored skill propositions are complete, aligned, and unique", async () => {
  const [{ PHYSICS_CHEMISTRY_SKILL_KNOWLEDGE: knowledge }, { loadPhysicsChemistrySkills }] = await Promise.all([
    import(KNOWLEDGE_URL),
    api(),
  ]);
  const skills = await loadPhysicsChemistrySkills();
  assert.deepEqual(Object.keys(knowledge), skills.map((skill) => skill.id));
  assert.equal(Object.keys(knowledge).length, 300);
  assert.equal(new Set(Object.values(knowledge).map((card) => card.truth)).size, 300);
  assert.equal(new Set(Object.values(knowledge).map((card) => card.trap)).size, 300);
  for (const skill of skills) {
    const card = knowledge[skill.id];
    assert(card.truth.length >= 25, `${skill.id}: truth is too shallow`);
    assert(card.trap.length >= 20, `${skill.id}: trap is too shallow`);
    assert.notEqual(card.truth, card.trap, `${skill.id}: truth and trap collide`);
  }
});

test("materialized bank meets exact floors and binds every answer to its skill proposition", async () => {
  const [{ materializePhysicsChemistry }, { PHYSICS_CHEMISTRY_SKILL_KNOWLEDGE: knowledge }] = await Promise.all([api(), import(KNOWLEDGE_URL)]);
  const content = await materializePhysicsChemistry();
  assert.deepEqual(
    Object.fromEntries(["authority", "skills", "lectures", "questions", "stimuli", "assets"].map((key) => [key, content[key].length])),
    { authority: 141, skills: 300, lectures: 300, questions: 4500, stimuli: 300, assets: 16 },
  );
  const authorityIds = new Set(content.authority.map((record) => record.id));
  const stimulusIds = new Set(content.stimuli.map((record) => record.id));
  const assetIds = new Set(content.assets.map((record) => record.id));
  for (const skill of content.skills) {
    assert(skill.authorityRefs.every((id) => authorityIds.has(id)), `${skill.id}: authority escapes subject`);
    const own = content.questions.filter((question) => question.skillIds.includes(skill.id));
    const skillQuestions = own.filter((question) => question.stimulusId === null);
    const stimulusQuestions = own.filter((question) => question.stimulusId !== null);
    assert.equal(skillQuestions.length, 12, `${skill.id}: skill question floor`);
    assert.equal(stimulusQuestions.length, 3, `${skill.id}: stimulus question floor`);
    assert.deepEqual(
      Object.fromEntries(["foundation", "standard", "advanced", "transfer"].map((level) => [level, skillQuestions.filter((q) => q.difficulty === level).length])),
      { foundation: 3, standard: 4, advanced: 3, transfer: 2 },
    );
    assert.deepEqual([0, 1, 2, 3].map((index) => skillQuestions.filter((question) => question.answerIndex === index).length), [3, 3, 3, 3]);
    for (const question of own) {
      assert.equal(question.options.length, 4, `${question.id}: option count`);
      assert.equal(new Set(question.options).size, 4, `${question.id}: duplicate option`);
      assert(question.options[question.answerIndex].includes(knowledge[skill.id].truth), `${question.id}: answer is not bound to skill truth`);
      assert(question.options.some((option, index) => index !== question.answerIndex && option.includes(knowledge[skill.id].trap)), `${question.id}: dedicated trap is absent`);
      assert.equal(question.optionRationales.length, 4, `${question.id}: rationale count`);
      assert.equal(question.optionRationales.filter((rationale) => rationale.isCorrect).length, 1, `${question.id}: rationale key count`);
      assert(question.stimulusId === null || stimulusIds.has(question.stimulusId), `${question.id}: missing stimulus`);
      assert(question.assets.every((id) => assetIds.has(id)), `${question.id}: missing asset`);
      assert(question.independentReviews.every((review) => review.status === "pass" && review.derivedAnswerIndex === question.answerIndex), `${question.id}: answer review mismatch`);
    }
  }
});

test("questions have no exact or same-skeleton duplicate after titles and numbers are removed", async () => {
  const { materializePhysicsChemistry } = await api();
  const content = await materializePhysicsChemistry();
  const titles = content.skills.map((skill) => skill.title).sort((a, b) => b.length - a.length);
  const visible = new Set();
  const skeletons = new Set();
  for (const question of content.questions) {
    const visibleKey = JSON.stringify([question.stem, [...question.options].sort()]);
    assert(!visible.has(visibleKey), `${question.id}: exact visible duplicate`);
    visible.add(visibleKey);
    const skeletonKey = essence(`${question.stem}|${[...question.options].sort().join("|")}`, titles);
    assert(!skeletons.has(skeletonKey), `${question.id}: same skeleton after skill title and numbers are removed`);
    skeletons.add(skeletonKey);
  }
  assert.equal(visible.size, 4500);
  assert.equal(skeletons.size, 4500);
});

test("lectures, stimuli, and figures expose complete learning and accessible alternatives", async () => {
  const [{ materializePhysicsChemistry }, { PHYSICS_CHEMISTRY_SKILL_KNOWLEDGE: knowledge }] = await Promise.all([api(), import(KNOWLEDGE_URL)]);
  const content = await materializePhysicsChemistry();
  for (const lecture of content.lectures) {
    const card = knowledge[lecture.skillId];
    assert.equal(lecture.sections.length, 4, `${lecture.id}: sections`);
    assert.equal(lecture.workedExamples.length, 3, `${lecture.id}: worked examples`);
    assert.equal(new Set(lecture.workedExamples.map((item) => item.prompt)).size, 3, `${lecture.id}: duplicate examples`);
    assert.equal(lecture.misconceptions.length, 4, `${lecture.id}: misconceptions`);
    assert.equal(new Set(lecture.misconceptions.map((item) => item.belief)).size, 4, `${lecture.id}: duplicate misconceptions`);
    assert.equal(lecture.checks.length, 3, `${lecture.id}: checks`);
    assert(JSON.stringify(lecture).includes(card.truth), `${lecture.id}: skill truth absent`);
    assert(JSON.stringify(lecture).includes(card.trap), `${lecture.id}: skill trap absent`);
  }
  for (const stimulus of content.stimuli) {
    assert.equal(stimulus.dataTable.columns.length, 3, `${stimulus.id}: table columns`);
    assert.equal(stimulus.dataTable.rows.length, 4, `${stimulus.id}: table rows`);
    assert(stimulus.dataTable.rows.every((row) => row.length === 3), `${stimulus.id}: ragged table`);
  }
  for (const asset of content.assets) {
    assert(asset.altText.length >= 20 && asset.longDescription.length >= 40, `${asset.id}: incomplete description`);
    assert(asset.dataFallback.columns.length >= 2 && asset.dataFallback.rows.length >= 2, `${asset.id}: incomplete data fallback`);
    assert.equal(asset.accessibility.colorIndependent, true, `${asset.id}: color dependence`);
    assert.equal(asset.accessibility.printSafe, true, `${asset.id}: print unsafe`);
    if (asset.type === "graph") {
      assert(asset.technical.axes && asset.technical.significantFigures && asset.technical.controlledVariables && asset.technical.dataSource, `${asset.id}: graph metadata`);
    } else {
      assert(asset.technical.drawingMode && asset.technical.labels && asset.technical.units && asset.technical.controlledVariables, `${asset.id}: diagram metadata`);
    }
    const svg = await readFile(path.join(ROOT, asset.path));
    assert.equal(sha256(svg), asset.sha256, `${asset.id}: SVG hash`);
  }
});

test("static catalog and subject manifest contain reviewed IDs and valid hashes only", async () => {
  const catalog = JSON.parse(await readFile(path.join(RUNTIME_ROOT, "content-catalog.json"), "utf8"));
  assert.equal(catalog.selectionPolicy, "seed-orders-reviewed-static-ids-only");
  assert.equal(catalog.units.length, 40);
  assert.equal(catalog.skills.length, 300);
  assert(catalog.skills.every((skill) => skill.questionIds.length === 12 && skill.stimulusQuestionIds.length === 3));
  const floor = { physics_chemistry: { order: 7, folder: "理化會考作戰室/r4", min_skills: 300, lectures: 300, skill_items: 3600, stimulus_items: 900 } };
  const discovery = await discoverSubjectArtifacts({ floor, expectedSubjects: ["physics_chemistry"] });
  assert.equal(discovery.artifacts.length, 5563);
  assert.equal(discovery.artifacts.filter((artifact) => artifact.type === "ui").length, 6);
  const manifest = JSON.parse(await readFile(path.join(RUNTIME_ROOT, "content-manifest-v4.json"), "utf8"));
  const expectedBuildHash = sha256(canonicalJson({
    authorityGraphSha256: sha256(await readFile(GRAPH_PATH)),
    artifacts: manifest.artifacts,
    counts: manifest.counts,
  }));
  assert.equal(manifest.buildSha256, expectedBuildHash);
});

test("runtime does not generate questions and preserves migration, accessibility, print, and offline hooks", async () => {
  const [app, html, css, worker] = await Promise.all([
    readFile(path.join(SUBJECT_ROOT, "app.mjs"), "utf8"),
    readFile(path.join(SUBJECT_ROOT, "index.html"), "utf8"),
    readFile(path.join(SUBJECT_ROOT, "styles.css"), "utf8"),
    readFile(path.join(SUBJECT_ROOT, "service-worker.js"), "utf8"),
  ]);
  assert.match(app, /orders reviewed IDs only/);
  assert.doesNotMatch(app, /generate(?:Question|Stem|Option)|sentence\s*splic/i);
  assert.match(app, /migrationBackup/);
  assert.match(app, /legacySnapshot/);
  assert.match(html, /<main|<aside|<fieldset|aria-live|skip-link/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /@media print/);
  const colors = (name) => [...css.matchAll(new RegExp(`--${name}:\\s*(#[0-9a-f]{6})`, "gi"))].map((match) => match[1]);
  const [ink] = colors("ink");
  const [muted] = colors("muted");
  const [paper] = colors("paper");
  const [surface] = colors("surface");
  const [brand] = colors("brand");
  const [good] = colors("good");
  const [bad] = colors("bad");
  const [line, darkLine] = colors("line");
  const [focus, darkFocus] = colors("focus");
  assert([contrastRatio(ink, paper), contrastRatio(muted, paper), contrastRatio("#ffffff", brand), contrastRatio(good, surface), contrastRatio(bad, surface)].every((ratio) => ratio >= 4.5));
  assert([contrastRatio(line, paper), contrastRatio(focus, paper), contrastRatio(darkLine, "#0f1921"), contrastRatio(darkFocus, "#0f1921")].every((ratio) => ratio >= 3));
  assert.match(worker, /content-manifest-v4\.json/);
  assert.match(worker, /CACHE_ALL/);
  assert.match(worker, /artifact\.type === "asset"/);
  assert.match(worker, /scopedUrl\(\(await response\.json\(\)\)\.path\)/);
  const validationSource = app.slice(app.indexOf("function validProgress"), app.indexOf("\n\nfunction freshProgress"));
  const validProgress = Function("SUBJECT", `${validationSource}\nreturn validProgress;`)("physics_chemistry");
  const validAttempt = { practice: { best: 10, last: 9, total: 12, seed: 20260716 } };
  assert(validProgress({ schemaVersion: 4, subject: "physics_chemistry", completedSkillIds: ["PHYCHM_R4_S001"], attempts: { PHYCHM_R4_S001: validAttempt } }));
  assert(!validProgress({ schemaVersion: 4, subject: "physics_chemistry", completedSkillIds: [], attempts: { PHYCHM_R4_S001: "invalid" } }));
  assert(!validProgress({ schemaVersion: 4, subject: "physics_chemistry", completedSkillIds: ["PHYCHM_R4_S001", "PHYCHM_R4_S001"], attempts: {} }));
  assert(!`${app}${html}${css}${worker}`.includes("�"), "replacement character in runtime source");
  assert.doesNotMatch(`${app}${html}${css}${worker}`, /\b(?:TODO|FIXME)\b/);
});

test("two isolated clean builds are byte-for-byte deterministic", async (t) => {
  const temporary = await mkdtemp(path.join(SUBJECT_ROOT, ".tmp-physics-r4-"));
  const first = path.join(temporary, "a");
  const second = path.join(temporary, "b");
  assert(path.resolve(temporary).startsWith(path.resolve(SUBJECT_ROOT) + path.sep));
  t.after(async () => rm(temporary, { recursive: true, force: true }));
  const { buildPhysicsChemistryR4 } = await api();
  await buildPhysicsChemistryR4({ runtimeRoot: first });
  await buildPhysicsChemistryR4({ runtimeRoot: second });
  assert((await stat(first)).isDirectory() && (await stat(second)).isDirectory());
  assert.equal(await treeHash(first), await treeHash(second));
  assert.deepEqual(
    JSON.parse(await readFile(path.join(first, "content-manifest-v4.json"), "utf8")),
    JSON.parse(await readFile(path.join(second, "content-manifest-v4.json"), "utf8")),
  );
});

test("high-risk science semantics remain explicit", async () => {
  const { materializePhysicsChemistry } = await api();
  const content = await materializePhysicsChemistry();
  const question = new Map(content.questions.map((value) => [value.id, value]));
  const correct = (id) => question.get(id).options[question.get(id).answerIndex];
  assert.match(correct("PHYCHM_R4_Q_009_01"), /54 g.*20 cm³.*2\.7 g\/cm³/u);
  assert.match(correct("PHYCHM_R4_Q_057_01"), /Co 是鈷.*CO/u);
  assert.match(correct("PHYCHM_R4_Q_062_01"), /Ca²⁺.*鈣離子.*Cl⁻.*氯離子/u);
  assert.match(correct("PHYCHM_R4_Q_106_01"), /pH＜7.*pH＝7.*pH＞7/u);
  assert.match(correct("PHYCHM_R4_Q_172_01"), /往返.*68 m/u);
  assert.match(correct("PHYCHM_R4_Q_177_01"), /入射角等於反射角.*法線/u);
  assert.match(correct("PHYCHM_R4_Q_240_01"), /12 N.*7 N.*5 N/u);
  assert.match(correct("PHYCHM_R4_Q_247_01"), /速度平方.*四倍/u);
  assert.match(correct("PHYCHM_R4_Q_290_01"), /磁通量.*感應電動勢.*閉合/u);
  assert.match(correct("PHYCHM_R4_Q_292_01"), /交流.*高電壓.*降低電流/u);
  assert.match(correct("PHYCHM_R4_Q_295_01"), /有用輸出能量.*總輸入能量.*100%.*30%/u);
});
