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

const TEMPLATE_LEAK = /當題幹出現|本技能要學會|本技能的具體例子|最需防的專屬錯誤|可使用的具體判準|採用這個|同時忽略|只要照著技能名稱/u;
const cleanClaim = (value) => value.trim().replace(/[。；]+$/u, "");

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

test("materialized bank meets exact floors and every answer survives an independent semantic construction audit", async () => {
  const [{ materializePhysicsChemistry }, { PHYSICS_CHEMISTRY_SKILL_KNOWLEDGE: knowledge }] = await Promise.all([api(), import(KNOWLEDGE_URL)]);
  const content = await materializePhysicsChemistry();
  assert.deepEqual(
    Object.fromEntries(["authority", "skills", "lectures", "questions", "stimuli", "assets"].map((key) => [key, content[key].length])),
    { authority: 141, skills: 300, lectures: 300, questions: 4500, stimuli: 300, assets: 16 },
  );
  const authorityIds = new Set(content.authority.map((record) => record.id));
  const stimulusIds = new Set(content.stimuli.map((record) => record.id));
  const assetIds = new Set(content.assets.map((record) => record.id));
  const trapCorrections = new Map(content.skills.map((skill) => [
    cleanClaim(knowledge[skill.id].trap),
    cleanClaim(knowledge[skill.id].truth),
  ]));
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
    assert.equal(new Set(own.map((question) => question.stem)).size, 15, `${skill.id}: repeated stem`);
    assert(own.some((question) => question.options.some((option, index) => index !== question.answerIndex && option === cleanClaim(knowledge[skill.id].trap))), `${skill.id}: dedicated misconception is never tested`);
    const unitTraps = new Set(content.skills.filter((candidate) => candidate.unitId === skill.unitId).map((candidate) => cleanClaim(knowledge[candidate.id].trap)));
    for (const question of own) {
      assert.equal(question.options.length, 4, `${question.id}: option count`);
      assert.equal(new Set(question.options).size, 4, `${question.id}: duplicate option`);
      const answer = question.options[question.answerIndex];
      assert(cleanClaim(knowledge[skill.id].truth).includes(answer), `${question.id}: answer is not a verbatim skill fact`);
      assert(question.stem.length <= 48, `${question.id}: stem is too long`);
      assert(question.options.every((option) => option.length <= 64), `${question.id}: option is too long`);
      assert(!JSON.stringify(question).includes(skill.title), `${question.id}: learner record repeats the complete skill title`);
      assert(!TEMPLATE_LEAK.test(JSON.stringify(question)), `${question.id}: authoring template leaked into learner content`);
      assert.equal(question.optionRationales.length, 4, `${question.id}: rationale count`);
      assert.equal(question.optionRationales.filter((rationale) => rationale.isCorrect).length, 1, `${question.id}: rationale key count`);
      assert(question.optionRationales.every((rationale, index) => rationale.optionIndex === index && rationale.reason.length <= 90), `${question.id}: rationale readability`);
      assert(question.optionRationales[question.answerIndex].reason.includes(cleanClaim(knowledge[skill.id].truth).slice(0, 18)), `${question.id}: answer rationale omits its scientific basis`);
      const wrongOptions = question.options.filter((option, index) => index !== question.answerIndex);
      assert(wrongOptions.every((option) => unitTraps.has(option)), `${question.id}: fabricated distractor`);
      assert.deepEqual([...question.misconceptionTargets].sort(), [...wrongOptions].sort(), `${question.id}: misconception metadata mismatch`);
      for (const [index, option] of question.options.entries()) {
        if (index === question.answerIndex) continue;
        const correction = trapCorrections.get(option);
        assert(correction && question.optionRationales[index].reason.includes(correction.slice(0, 18)), `${question.id}: distractor rationale lacks its paired correction`);
      }
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
  const stemCounts = new Map();
  for (const question of content.questions) {
    const visibleKey = JSON.stringify([question.stem, [...question.options].sort()]);
    assert(!visible.has(visibleKey), `${question.id}: exact visible duplicate`);
    visible.add(visibleKey);
    const skeletonKey = essence(`${question.stem}|${[...question.options].sort().join("|")}`, titles);
    assert(!skeletons.has(skeletonKey), `${question.id}: same skeleton after skill title and numbers are removed`);
    skeletons.add(skeletonKey);
    stemCounts.set(question.stem, (stemCounts.get(question.stem) || 0) + 1);
  }
  assert.equal(visible.size, 4500);
  assert.equal(skeletons.size, 4500);
  assert(Math.max(...stemCounts.values()) <= 4, "one learner-facing stem was mass-repeated");
});

test("lectures, stimuli, and figures expose complete learning and accessible alternatives", async () => {
  const [{ materializePhysicsChemistry }, { PHYSICS_CHEMISTRY_SKILL_KNOWLEDGE: knowledge }] = await Promise.all([api(), import(KNOWLEDGE_URL)]);
  const content = await materializePhysicsChemistry();
  const skills = new Map(content.skills.map((skill) => [skill.id, skill]));
  const trapCorrections = new Map(Object.values(knowledge).map((card) => [cleanClaim(card.trap), cleanClaim(card.truth)]));
  for (const lecture of content.lectures) {
    const card = knowledge[lecture.skillId];
    const serialized = JSON.stringify(lecture);
    assert.equal(lecture.sections.length, 4, `${lecture.id}: sections`);
    assert.equal(lecture.workedExamples.length, 3, `${lecture.id}: worked examples`);
    assert.equal(new Set(lecture.workedExamples.map((item) => item.prompt)).size, 3, `${lecture.id}: duplicate examples`);
    assert.equal(lecture.misconceptions.length, 4, `${lecture.id}: misconceptions`);
    assert.equal(new Set(lecture.misconceptions.map((item) => item.belief)).size, 4, `${lecture.id}: duplicate misconceptions`);
    assert.equal(lecture.checks.length, 3, `${lecture.id}: checks`);
    assert(serialized.includes(card.truth), `${lecture.id}: skill truth absent`);
    assert(serialized.includes(cleanClaim(card.trap)), `${lecture.id}: skill trap absent`);
    assert(!TEMPLATE_LEAK.test(serialized), `${lecture.id}: authoring template leaked into lecture`);
    assert(!serialized.includes(skills.get(lecture.skillId).title), `${lecture.id}: complete skill title is repeated`);
    assert(lecture.sections.every((section) => section.content.length <= 100), `${lecture.id}: lecture section is too dense`);
    assert(lecture.workedExamples.every((example) => example.prompt.length <= 68 && example.answer.length <= 92 && example.why.length <= 72), `${lecture.id}: worked example is too dense`);
    for (const misconception of lecture.misconceptions) {
      assert.equal(misconception.correction, trapCorrections.get(misconception.belief), `${lecture.id}: misconception correction mismatch`);
    }
  }
  for (const stimulus of content.stimuli) {
    const card = knowledge[stimulus.skillIds[0]];
    assert.equal(stimulus.dataTable.columns.length, 3, `${stimulus.id}: table columns`);
    assert.equal(stimulus.dataTable.rows.length, 4, `${stimulus.id}: table rows`);
    assert(stimulus.dataTable.rows.every((row) => row.length === 3), `${stimulus.id}: ragged table`);
    assert(JSON.stringify(stimulus).includes(cleanClaim(card.truth)) && JSON.stringify(stimulus).includes(cleanClaim(card.trap)), `${stimulus.id}: evidence pair absent`);
    assert(!TEMPLATE_LEAK.test(JSON.stringify(stimulus)), `${stimulus.id}: authoring template leaked into stimulus`);
    assert(!JSON.stringify(stimulus).includes(skills.get(stimulus.skillIds[0]).title), `${stimulus.id}: complete skill title is repeated`);
    assert(stimulus.body.length <= 80 && stimulus.dataTable.rows.flat().every((cell) => cell.length <= 64), `${stimulus.id}: unreadable stimulus`);
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
    assert(svg.toString("utf8").includes(`<desc>${asset.longDescription}</desc>`), `${asset.id}: long description diverges from SVG`);
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
  const normalizedApp = app.replaceAll("\r\n", "\n");
  assert.match(app, /orders reviewed IDs only/);
  assert.doesNotMatch(app, /generate(?:Question|Stem|Option)|sentence\s*splic/i);
  assert.match(app, /migrationBackup/);
  assert.match(app, /legacySnapshot/);
  assert.match(html, /<main|<aside|<fieldset|aria-live|skip-link/);
  assert.match(css, /:focus-visible/);
  assert.match(css, /prefers-reduced-motion/);
  assert.match(css, /@media print/);
  assert.match(css, /@media print[\s\S]*break-inside:\s*avoid/);
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
  const validationSource = normalizedApp.slice(normalizedApp.indexOf("function validProgress"), normalizedApp.indexOf("\n\nfunction freshProgress"));
  const validProgress = Function("SUBJECT", `${validationSource}\nreturn validProgress;`)("physics_chemistry");
  const validAttempt = { practice: { best: 10, last: 9, total: 12, seed: 20260716 } };
  assert(validProgress({ schemaVersion: 4, subject: "physics_chemistry", completedSkillIds: ["PHYCHM_R4_S001"], attempts: { PHYCHM_R4_S001: validAttempt } }));
  assert(!validProgress({ schemaVersion: 4, subject: "physics_chemistry", completedSkillIds: [], attempts: { PHYCHM_R4_S001: "invalid" } }));
  assert(!validProgress({ schemaVersion: 4, subject: "physics_chemistry", completedSkillIds: ["PHYCHM_R4_S001", "PHYCHM_R4_S001"], attempts: {} }));
  const store = new Map([
    ["capScience.progress", '{"score":7}'],
    ["capR4.physicsChemistry.old", "legacy-value"],
    ["unrelated", "keep-outside-migration"],
  ]);
  const localStorage = {
    get length() { return store.size; },
    key(index) { return [...store.keys()][index] ?? null; },
    getItem(key) { return store.get(key) ?? null; },
    setItem(key, value) { store.set(key, String(value)); },
  };
  const migrationSource = normalizedApp.slice(normalizedApp.indexOf("function safeParse"), normalizedApp.indexOf("\n\nfunction saveProgress"));
  const loadOrMigrateProgress = Function(
    "SUBJECT", "STORAGE_KEY", "BACKUP_KEY", "LEGACY_PREFIXES", "localStorage",
    `${migrationSource}\nreturn loadOrMigrateProgress;`,
  )("physics_chemistry", "capR4.physicsChemistry.progress.v4", "capR4.physicsChemistry.migrationBackup.v1", ["capScience.", "capR4.physicsChemistry."], localStorage);
  const migrated = loadOrMigrateProgress();
  assert.deepEqual(migrated.legacy.preservedKeys, {
    "capScience.progress": '{"score":7}',
    "capR4.physicsChemistry.old": "legacy-value",
  });
  assert.equal(store.get("capScience.progress"), '{"score":7}');
  assert.equal(store.get("capR4.physicsChemistry.old"), "legacy-value");
  const backup = JSON.parse(store.get("capR4.physicsChemistry.migrationBackup.v1"));
  assert.equal(backup.reason, "legacy-migration");
  assert.deepEqual(backup.legacy, migrated.legacy.preservedKeys);
  store.set("capR4.physicsChemistry.progress.v4", "invalid-json");
  const recovered = loadOrMigrateProgress();
  assert.equal(recovered.legacy.invalidR4Raw, "invalid-json");
  assert.equal(JSON.parse(store.get("capR4.physicsChemistry.migrationBackup.v1")).r4Raw, "invalid-json");
  assert(!`${app}${html}${css}${worker}`.includes("\uFFFD"), "replacement character in runtime source");
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
  assert.match(correct("PHYCHM_R4_Q_133_01"), /油脂.*鹼.*皂化.*肥皂/u);
  assert.match(correct("PHYCHM_R4_Q_172_01"), /往返.*68 m/u);
  assert.match(correct("PHYCHM_R4_Q_177_01"), /入射角等於反射角.*法線/u);
  assert.match(correct("PHYCHM_R4_Q_240_01"), /12 N.*7 N.*5 N/u);
  assert.match(correct("PHYCHM_R4_Q_247_01"), /速度平方.*四倍/u);
  assert.match(correct("PHYCHM_R4_Q_290_01"), /磁通量.*感應電動勢.*閉合/u);
  assert.match(correct("PHYCHM_R4_Q_292_01"), /交流.*高電壓.*降低電流/u);
  assert.match(correct("PHYCHM_R4_Q_295_01"), /有用輸出能量.*總輸入能量.*100%.*30%/u);
});
