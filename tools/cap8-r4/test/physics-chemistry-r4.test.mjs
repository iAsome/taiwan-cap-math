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
const AUTHORED_URL = pathToFileURL(path.join(SUBJECT_ROOT, "source", "authored", "physics-chemistry-u01-u10.mjs")).href;
const GRAPH_PATH = path.join(ROOT, "tools", "cap8-r4", "authority", "frozen-authority-graph.json");

let apiPromise;
const api = () => (apiPromise ??= import(BUILDER_URL));
const authored = async () => (await import(AUTHORED_URL)).PHYSICS_CHEMISTRY_AUTHORED_UNITS;

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

test("builder serializes authored records instead of synthesizing learner prose", async () => {
  const builder = await readFile(fileURLToPath(BUILDER_URL), "utf8");
  assert.doesNotMatch(
    builder,
    /function\s+(?:stemFor|questionRecord|lectureRecord|stimulusRecord)\b|for\s*\(let slot = 0;\s*slot < (?:12|3)/u,
    "Physics/Chemistry learner content is still assembled by shared prose templates",
  );
});

test("builder cannot turn authored answer keys into acceptance claims", async () => {
  const builder = await readFile(fileURLToPath(BUILDER_URL), "utf8");
  const questionBuilder = builder.match(/function materializeQuestion\b[\s\S]+?(?=\nfunction materializeStimulus\b)/u)?.[0];
  assert(questionBuilder, "materializeQuestion source was not found");
  assert.doesNotMatch(
    builder,
    /\b(?:independentReviews?|reviews?|reviewEvidence|reviewerRole|derivedAnswerIndex|finalAudit|auditRecord(?:Id|Sha256)?|acceptance|approval|reviewStatus|auditStatus|verificationStatus)\b|\b(?:status|role)\s*:\s*["'`](?:pass|accepted|approved|verified|[^"'`]*(?:review|audit))/iu,
    "question builder contains review, PASS, audit, or acceptance metadata",
  );
  assert.doesNotMatch(builder, /\bsource\.(?:reviewEvidence|answerKey|correctAnswer|correctIndex)\b|\boption\.isCorrect\b/u, "question builder consumes authored review or answer-key aliases");
  assert.equal((questionBuilder.match(/\bisCorrect\s*:/gu) || []).length, 1, "isCorrect must remain limited to option rationales");
  assert.match(questionBuilder, /isCorrect:\s*optionIndex === source\.answerIndex/u, "option rationales must retain the quiz answer marker");
});

test("40 authored units preserve the frozen skill order and authority graph", async () => {
  const [units, { loadPhysicsChemistrySkills }] = await Promise.all([authored(), api()]);
  const graphSkills = await loadPhysicsChemistrySkills();
  const sourceSkills = units.flatMap((unit) => unit.skills.map((skill) => ({ unit, skill })));
  assert.equal(units.length, 40);
  assert.equal(sourceSkills.length, 300);
  assert.deepEqual(sourceSkills.map(({ skill }) => skill.id), graphSkills.map((skill) => skill.id));
  for (const [{ unit, skill }, graphSkill] of sourceSkills.map((value, index) => [value, graphSkills[index]])) {
    assert.equal(unit.unitId, graphSkill.unitId, `${skill.id}: unit binding`);
    assert.deepEqual([...skill.authorityRefs].sort(), [...graphSkill.authorityRefs].sort(), `${skill.id}: authority binding`);
    assert.equal(skill.standaloneQuestions.length, 12, `${skill.id}: standalone source count`);
    assert.equal(skill.stimulusQuestions.length, 3, `${skill.id}: stimulus source count`);
  }
});

test("materialized bank meets exact counts and copies every authored learner field", async () => {
  const [{ materializePhysicsChemistry }, units] = await Promise.all([api(), authored()]);
  const content = await materializePhysicsChemistry();
  assert.deepEqual(
    Object.fromEntries(["authority", "skills", "lectures", "questions", "stimuli", "assets"].map((key) => [key, content[key].length])),
    { authority: 141, skills: 300, lectures: 300, questions: 4500, stimuli: 300, assets: 16 },
  );
  const authorityIds = new Set(content.authority.map((record) => record.id));
  const stimulusIds = new Set(content.stimuli.map((record) => record.id));
  const assetIds = new Set(content.assets.map((record) => record.id));
  const sourceBySkill = new Map(units.flatMap((unit) => unit.skills.map((skill) => [skill.id, { unit, skill }])));
  const questionById = new Map(content.questions.map((question) => [question.id, question]));
  const lectureById = new Map(content.lectures.map((lecture) => [lecture.id, lecture]));
  const stimulusById = new Map(content.stimuli.map((stimulus) => [stimulus.id, stimulus]));
  for (const skill of content.skills) {
    const source = sourceBySkill.get(skill.id);
    assert(source, `${skill.id}: missing authored source`);
    assert.equal(skill.title, source.skill.title, `${skill.id}: title was synthesized`);
    assert(skill.authorityRefs.every((id) => authorityIds.has(id)), `${skill.id}: authority escapes subject`);
    const lecture = lectureById.get(source.skill.lecture.id);
    assert.deepEqual(lecture.objectives, [source.skill.lecture.objective], `${lecture.id}: objective was synthesized`);
    assert.deepEqual(lecture.workedExamples, source.skill.lecture.workedExamples, `${lecture.id}: examples diverge from source`);
    assert.deepEqual(lecture.misconceptions, source.skill.lecture.misconceptions, `${lecture.id}: misconceptions diverge from source`);
    const sourceSections = source.skill.lecture.sections.map((section) => ({ title: section.title, content: section.content ?? section.body }));
    assert.deepEqual(lecture.sections.slice(1).map(({ id: _id, ...section }) => section), sourceSections, `${lecture.id}: sections diverge from source`);
    assert.deepEqual(lecture.checks, source.skill.lecture.workedExamples.map(({ prompt, answer, why }) => ({ prompt, answer, reason: why })), `${lecture.id}: checks contain generated prose`);
    const stimulus = stimulusById.get(source.skill.stimulus.id);
    assert.equal(stimulus.title, source.skill.stimulus.title);
    assert.equal(stimulus.body, source.skill.stimulus.body);
    assert.deepEqual(stimulus.dataTable.columns, source.skill.stimulus.dataTable.columns);
    assert.deepEqual(stimulus.dataTable.rows, source.skill.stimulus.dataTable.rows);

    for (const sourceQuestion of [...source.skill.standaloneQuestions, ...source.skill.stimulusQuestions]) {
      const question = questionById.get(sourceQuestion.id);
      assert(question, `${sourceQuestion.id}: missing materialized question`);
      assert.equal(question.stem, sourceQuestion.stem, `${question.id}: stem was synthesized`);
      assert.deepEqual(question.options, sourceQuestion.options, `${question.id}: options were synthesized`);
      assert.equal(question.answerIndex, sourceQuestion.answerIndex, `${question.id}: answer changed`);
      assert.deepEqual(question.optionRationales.map((item) => item.reason), sourceQuestion.rationales, `${question.id}: rationales were synthesized`);
      assert.deepEqual(question.cognitiveProcess, sourceQuestion.cognitiveProcess, `${question.id}: cognitive metadata changed`);
      assert.equal(question.difficulty, sourceQuestion.difficulty === "basic" ? "foundation" : sourceQuestion.difficulty, `${question.id}: difficulty adapter`);
      assert.equal(question.options.length, 4, `${question.id}: option count`);
      assert.equal(new Set(question.options).size, 4, `${question.id}: duplicate option`);
      assert(!TEMPLATE_LEAK.test(JSON.stringify(question)), `${question.id}: authoring template leaked into learner content`);
      assert.equal(question.optionRationales.length, 4, `${question.id}: rationale count`);
      assert.equal(question.optionRationales.filter((rationale) => rationale.isCorrect).length, 1, `${question.id}: rationale key count`);
      const wrongOptions = question.options.filter((option, index) => index !== question.answerIndex);
      assert.deepEqual([...question.misconceptionTargets].sort(), [...wrongOptions].sort(), `${question.id}: misconception metadata mismatch`);
      assert(question.stimulusId === null || stimulusIds.has(question.stimulusId), `${question.id}: missing stimulus`);
      assert(question.assets.every((id) => assetIds.has(id)), `${question.id}: missing asset`);
    }
  }
});

test("runtime questions keep quiz rationales without embedding acceptance claims", async () => {
  const content = await (await api()).materializePhysicsChemistry();
  for (const question of content.questions) {
    const serialized = JSON.stringify(question);
    assert.doesNotMatch(serialized, /"(?:independentReviews?|reviews?|reviewEvidence|reviewerRole|derivedAnswerIndex|finalAudit|auditRecord(?:Id|Sha256)?|acceptance|approval|reviewStatus|auditStatus|verificationStatus)"\s*:/iu, `${question.id}: acceptance field reached runtime`);
    assert.doesNotMatch(serialized, /"(?:status|reviewStatus|auditStatus|verificationStatus)"\s*:\s*"(?:pass|accepted|approved|verified)"/iu, `${question.id}: acceptance status reached runtime`);
    assert.equal(question.optionRationales.length, question.options.length, `${question.id}: quiz rationales were removed`);
    assert.equal(question.optionRationales.filter(({ isCorrect }) => isCorrect).length, 1, `${question.id}: quiz answer marker was removed`);
  }
});

test("known condition-decoupling regressions stay fixed", async () => {
  const { questions } = await (await api()).materializePhysicsChemistry();
  const byId = new Map(questions.map((question) => [question.id, question]));
  const conversion = byId.get("PHYCHM_R4_Q_004_10");
  const buoyancy = byId.get("PHYCHM_R4_Q_243_03");
  const buoyancyAnswer = buoyancy.options[buoyancy.answerIndex];
  const buoyancyRationale = buoyancy.optionRationales[buoyancy.answerIndex].reason;
  const failures = [
    !/2\.35 m.*公分/u.test(conversion.stem) && "PHYCHM_R4_Q_004_10 asks about unrelated liquid-level data",
    !/235 cm/u.test(conversion.options[conversion.answerIndex]) && "PHYCHM_R4_Q_004_10 has the wrong metric conversion",
    !/12 N.*8 N.*1 N/u.test(buoyancy.stem) && "PHYCHM_R4_Q_243_03 omits one of the vertical forces",
    (!/3 N 向下/u.test(buoyancyAnswer) || !/加速度向下/u.test(buoyancyAnswer)) && "PHYCHM_R4_Q_243_03 drops the downward-acceleration result",
    !/浮力仍為 8 N/u.test(`${buoyancyAnswer} ${buoyancyRationale}`) && "PHYCHM_R4_Q_243_03 rationale does not reject zero buoyancy",
  ].filter(Boolean);
  assert.equal(failures.length, 0, failures.join("; "));
});

test("lectures, questions, and stimuli reject shared prose scaffold families", async () => {
  const content = await (await api()).materializePhysicsChemistry();
  const whys = content.lectures.flatMap((lecture) => lecture.workedExamples.map((example) => example.why));
  const misconceptionReasons = content.lectures.flatMap((lecture) => lecture.misconceptions.map((item) => item.whyWrong));
  assert.equal(new Set(whys).size, whys.length, "worked-example explanations are reused");
  assert.equal(new Set(misconceptionReasons).size, misconceptionReasons.length, "misconception explanations are reused");
  const visible = JSON.stringify({ lectures: content.lectures, questions: content.questions, stimuli: content.stimuli });
  for (const scaffold of [
    /不只要記住結論，還要能從/gu,
    /應如何比較，才能回答/gu,
    /若學生寫下[^。]+，可用哪個定義或計算指出錯誤/gu,
    /研究紀錄「[^」]+」保留[^。]+原始欄位。作答者必須自行/gu,
    /是否相容？選出正確判準/gu,
  ]) {
    const matches = visible.match(scaffold) || [];
    assert(matches.length <= 1, `shared scaffold family appears ${matches.length} times: ${scaffold.source}`);
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

test("answer placement and option length do not leak the key", async () => {
  const { questions } = await (await api()).materializePhysicsChemistry();
  const positions = [0, 0, 0, 0];
  let uniquelyLongest = 0;
  for (const question of questions) {
    positions[question.answerIndex] += 1;
    const lengths = question.options.map((option) => [...option].length);
    const maximum = Math.max(...lengths);
    if (lengths[question.answerIndex] === maximum && lengths.filter((length) => length === maximum).length === 1) uniquelyLongest += 1;
  }
  assert(Math.max(...positions) / questions.length <= 0.35, `answer-position leakage: ${positions.join("/")}`);
  assert(uniquelyLongest / questions.length <= 0.45, `answer-length leakage: ${uniquelyLongest}/${questions.length} correct options are uniquely longest`);
});

test("lectures, stimuli, and figures expose complete learning and accessible alternatives", async () => {
  const content = await (await api()).materializePhysicsChemistry();
  for (const lecture of content.lectures) {
    const serialized = JSON.stringify(lecture);
    assert.equal(lecture.sections.length, 4, `${lecture.id}: sections`);
    assert.equal(lecture.workedExamples.length, 3, `${lecture.id}: worked examples`);
    assert.equal(new Set(lecture.workedExamples.map((item) => item.prompt)).size, 3, `${lecture.id}: duplicate examples`);
    assert.equal(lecture.misconceptions.length, 4, `${lecture.id}: misconceptions`);
    assert.equal(new Set(lecture.misconceptions.map((item) => item.belief)).size, 4, `${lecture.id}: duplicate misconceptions`);
    assert.equal(lecture.checks.length, 3, `${lecture.id}: checks`);
    assert(!TEMPLATE_LEAK.test(serialized), `${lecture.id}: authoring template leaked into lecture`);
    assert(lecture.sections.every((section) => section.title.trim() && section.content.trim()), `${lecture.id}: empty section`);
    assert(lecture.workedExamples.every((example) => example.prompt.trim() && example.answer.trim() && example.why.trim()), `${lecture.id}: incomplete example`);
  }
  for (const stimulus of content.stimuli) {
    assert(stimulus.dataTable.columns.length >= 2, `${stimulus.id}: table columns`);
    assert(stimulus.dataTable.rows.length >= 1, `${stimulus.id}: table rows`);
    assert(stimulus.dataTable.rows.every((row) => row.length === stimulus.dataTable.columns.length), `${stimulus.id}: ragged table`);
    assert(!TEMPLATE_LEAK.test(JSON.stringify(stimulus)), `${stimulus.id}: authoring template leaked into stimulus`);
    assert(stimulus.dataTable.caption.trim(), `${stimulus.id}: missing table caption`);
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
  const laboratory = await readFile(path.join(ROOT, content.assets.find((asset) => asset.path.endsWith("laboratory-setup.svg")).path), "utf8");
  assert([...laboratory.matchAll(/<ellipse\b/gu)].length >= 2, "heated-test-tube figure must draw both goggle lenses");
  assert.match(laboratory, /液體不超過試管容量 1\/3/u, "heated-test-tube figure must show the safe liquid level");
  assert.match(laboratory, /人站側面/u, "heated-test-tube figure must show the safe observer position");
  const buoyancy = await readFile(path.join(ROOT, content.assets.find((asset) => asset.path.endsWith("buoyancy-diagram.svg")).path), "utf8");
  assert.match(buoyancy, /上表面壓力（較小）/u);
  assert.match(buoyancy, /下表面壓力（較大）/u);
  assert.match(buoyancy, /壓力的垂直合力/u);
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
  assert.doesNotMatch(html, /全數為已審核靜態內容/u);
  assert.match(html, /固定版本載入，不在瀏覽器即時生成題目/u);
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
  const visible = (id) => `${question.get(id).stem} ${correct(id)} ${question.get(id).optionRationales[question.get(id).answerIndex].reason}`;
  assert.match(visible("PHYCHM_R4_Q_009_01"), /36 g.*12 cm³.*3\.0 g\/cm³.*36÷12/u);
  assert.match(visible("PHYCHM_R4_Q_057_01"), /氫元素.*\bH\b/u);
  assert.match(visible("PHYCHM_R4_Q_062_01"), /Na⁺.*一個正電/u);
  assert.match(visible("PHYCHM_R4_Q_106_01"), /pH＝5.*酸性.*小於7/u);
  assert.match(visible("PHYCHM_R4_Q_133_01"), /皂化.*油脂與強鹼.*肥皂/u);
  assert.match(visible("PHYCHM_R4_Q_172_01"), /340 m\/s.*0\.10 s/u);
  assert.match(correct("PHYCHM_R4_Q_172_01"), /17 m/u);
  assert.match(visible("PHYCHM_R4_Q_177_01"), /法線.*反射定律.*25°/u);
  assert.match(correct("PHYCHM_R4_Q_240_01"), /12.*7.*5 N/u);
  assert.match(correct("PHYCHM_R4_Q_247_01"), /速度平方.*四倍/u);
  assert.match(correct("PHYCHM_R4_Q_290_01"), /磁通量.*感應電動勢.*閉合/u);
  assert.match(correct("PHYCHM_R4_Q_292_01"), /交流.*高電壓.*降低電流/u);
  assert.match(correct("PHYCHM_R4_Q_295_01"), /有用輸出能量.*總輸入能量.*100%.*30%/u);
});
