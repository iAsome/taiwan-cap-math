import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { performance } from "node:perf_hooks";

const mathDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../..");
const metadataScripts = [
  "v2/math-syllabus-v2.js",
  "v2/math-v2-production-profile.js",
  "v2/math-v2-unit-manifest.js",
  "v2/math-quiz-blueprints-v2.js",
  "v2/math-mock-blueprint-v2.js"
];

function loadBrowserScript(context, relativePath) {
  vm.runInContext(fs.readFileSync(path.join(mathDir, relativePath), "utf8"), context, { filename: relativePath });
}

function createRuntime(storageSeed = {}) {
  const storage = new Map(Object.entries(storageSeed));
  const loaded = [];
  const sandbox = {
    console,
    performance,
    setTimeout,
    clearTimeout,
    localStorage: {
      getItem(key) { return storage.has(key) ? storage.get(key) : null; },
      setItem(key, value) { storage.set(key, String(value)); },
      removeItem(key) { storage.delete(key); }
    }
  };
  sandbox.window = sandbox;
  const context = vm.createContext(sandbox);
  for (const script of metadataScripts) loadBrowserScript(context, script);
  sandbox.MATH_V2_SCRIPT_LOADER = async scriptPath => {
    loaded.push(scriptPath);
    loadBrowserScript(context, scriptPath);
  };
  loadBrowserScript(context, "v2/math-engine-v2.js");
  sandbox.MATH_DATA = { units: [{ id: 1, title: "舊資料" }], domains: [], strategies: [], archives: [], sourcePolicy: [], officialSources: [], publisherSources: [], tipAudits: [] };
  loadBrowserScript(context, "v2/math-production-bootstrap.js");
  return { context, window: sandbox, loaded, storage };
}

function difficultyCounts(questions) {
  return Object.fromEntries(["basic", "standard", "advanced", "literacy"].map(difficulty => [difficulty, questions.filter(question => question.difficulty === difficulty).length]));
}

const runtime = createRuntime({ "capMath.completed": JSON.stringify([1, 13, "broken"]) });
const { window, loaded, storage } = runtime;
const engine = window.MATH_ENGINE_V2;

assert.deepEqual(Array.from(engine.loadedUnitIds()), [], "initial page must not load question or lecture banks");
assert.equal(window.EXAM_ENGINE.quizCatalog.length, 23);
assert.equal(window.EXAM_ENGINE.units.length, 23);

const quizA = await engine.generateUnitQuiz("u11", 13579);
const quizB = await engine.generateUnitQuiz("u11", 13579);
assert.equal(quizA.length, 16);
assert.deepEqual(quizA, quizB, "unit quiz must be seed-stable");
assert.equal(new Set(quizA.map(question => question.questionId)).size, quizA.length);
assert.equal(new Set(quizA.map(question => question.skillId)).size, quizA.length, "unit quiz must select one question per skill");
assert.deepEqual(Array.from(engine.loadedUnitIds()), ["u11"]);
assert(loaded.includes("v2/math-question-bank-v2-u11.js"));
assert(!loaded.some(script => script.includes("lecture-v2-u11")), "question quiz must not load lectures");

for (const question of quizA) {
  const source = window.MATH_QUESTION_BANK_V2_U11.find(item => item.questionId === question.questionId);
  assert.equal(question.choices[question.answerIndex], source.choices[source.answerIndex], `choice shuffle changed answer for ${question.questionId}`);
}

const mockA = await engine.generateFullMock(24680, 2);
const mockB = await engine.generateFullMock(24680, 2);
assert.deepEqual(mockA, mockB, "mock must be seed-stable");
assert.equal(mockA.questions.length, 25);
assert.equal(new Set(mockA.questions.map(question => question.questionId)).size, 25);
assert.equal(new Set(mockA.questions.map(question => question.skillId)).size, 25);
assert.deepEqual(difficultyCounts(mockA.questions), { basic: 6, standard: 7, advanced: 5, literacy: 7 });
const mockUnits = mockA.questions.map(question => engine.getUnit(question.unitId));
assert.deepEqual([...new Set(mockUnits.map(unit => Number(unit.gradeBand[0])))].sort(), [7, 8, 9]);
const expectedDomains = window.MATH_MOCK_BLUEPRINT_V2.domainCounts;
for (const [domain, count] of Object.entries(expectedDomains)) assert.equal(mockUnits.filter(unit => unit.domain === domain).length, count, domain);
assert(engine.loadedUnitIds().length < 23, "mock must load only selected units");

const lectureLoadCount = loaded.length;
const lectures = await engine.getLecturesByUnit("u23");
assert.equal(lectures.length, 20);
assert.equal(loaded.length, lectureLoadCount + 1);
assert.equal(loaded.at(-1), "v2/math-lecture-v2-u23.js");
assert.equal(engine.validateLoadedBanks().ok, true);
await assert.rejects(() => engine.loadUnit("../../questions.js"), /Unknown Math V2 unit/);

const correction = await engine.generateCorrectionDrill(mockA.questions[0], "correction-1", 1, [engine.drillQuestionSignature(mockA.questions[0])]);
assert.equal(correction.length, 1);
assert.equal(correction[0].skillId, mockA.questions[0].skillId);
assert.notEqual(correction[0].questionId, mockA.questions[0].questionId);

const adaptedMock = await window.EXAM_ENGINE.generate(24680, 2);
assert.equal(adaptedMock.questions.length, 25);
assert.equal(adaptedMock.questions.every(question => question.answer === question.answerIndex && Number.isInteger(question.unitId)), true);
const adaptedQuiz = await window.EXAM_ENGINE.generateQuiz("u11-all-skills", 13579);
assert.equal(adaptedQuiz.minutes, 20);
assert.equal(adaptedQuiz.questions.length, 16);
assert.equal(adaptedQuiz.engineVersion, engine.ENGINE_VERSION);
assert.equal(adaptedQuiz.contentVersion, engine.contentVersion);

for (const catalog of window.EXAM_ENGINE.quizCatalog) {
  const paper = await window.EXAM_ENGINE.generateQuiz(catalog.id, 99991);
  assert.equal(paper.questions.length, catalog.questionCount, catalog.id);
  assert.equal(new Set(paper.questions.map(question => question.questionId)).size, paper.questions.length, catalog.id);
  assert.equal(new Set(paper.questions.map(question => question.skillId)).size, paper.questions.length, catalog.id);
}
for (let seed = 1; seed <= 200; seed += 1) {
  const paper = await engine.generateFullMock(seed, (seed % 3) + 1);
  assert.equal(paper.questions.length, 25, `mock seed ${seed}`);
  assert.equal(new Set(paper.questions.map(question => question.questionId)).size, 25, `mock IDs seed ${seed}`);
  assert.equal(new Set(paper.questions.map(question => question.skillId)).size, 25, `mock skills seed ${seed}`);
}

assert.deepEqual(Array.from(window.MATH_V2_STORAGE.readCompleted()).sort(), ["u01", "u11"]);
const legacyCompleted = storage.get("capMath.completed");
window.MATH_V2_STORAGE.writeCompleted(["u01", "u23"]);
assert.equal(storage.get("capMath.completed"), legacyCompleted, "legacy completion key must remain untouched");
assert.deepEqual(JSON.parse(storage.get("capMath.v2.completed")), ["u01", "u23"]);
assert.equal(JSON.parse(storage.get("capMath.v2.migration.1")).original, legacyCompleted);

assert.equal(engine.restoreSavedPaper({ exam: adaptedMock }), adaptedMock);
assert.throws(() => engine.restoreSavedPaper({ exam: { questions: null } }), /格式不完整/);
assert.equal(engine.performanceSnapshot().loadedUnits.length, engine.loadedUnitIds().length);

console.log("production-engine.test: OK — lazy loading, deterministic quiz/mock, storage compatibility");
