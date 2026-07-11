import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath, pathToFileURL } from "node:url";
import { writeJs } from "./v2-shared.mjs";
import syllabus from "./v2-content/syllabus-source.mjs";
import unitRegistry from "./v2-content/unit-registry.mjs";
import migrationSource from "./v2-content/migration-source.mjs";
import productionProfile from "./v2-qa/policies/math-v2-production-profile.mjs";

const toolsDir = path.dirname(fileURLToPath(import.meta.url));
const mathDir = path.resolve(toolsDir, "..");
const contentDir = path.join(toolsDir, "v2-content");
const DEFAULT_OUT_DIR = path.join(mathDir, "v2");
const DEFAULT_MANIFEST_DIR = path.join(toolsDir, "v2-qa", "manifests");
const QUESTION_FIELDS = ["questionId", "unitId", "numericUnitId", "topicId", "skillId", "difficulty", "type", "visualMode", "sourceScope", "text", "choices", "answerIndex", "explanation", "steps", "commonMistake", "concept", "tags", "estimatedTimeSec"];
const LECTURE_FIELDS = ["unitId", "topicId", "skillId", "title", "concept", "formula", "stepGuide", "examples", "commonMistakes", "prerequisites", "learningObjectives", "symbolNotes", "summary", "selfCheck", "fullScoreExtension", "quizLink"];

export function sha256(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function canonicalJson(value) {
  if (Array.isArray(value)) return `[${value.map(canonicalJson).join(",")}]`;
  if (value && typeof value === "object") return `{${Object.keys(value).sort().map(key => `${JSON.stringify(key)}:${canonicalJson(value[key])}`).join(",")}}`;
  return JSON.stringify(value);
}

function pick(record, fields) {
  return Object.fromEntries(fields.filter(field => Object.hasOwn(record, field)).map(field => [field, record[field]]));
}

function allSkills(unit) {
  return unit.topics.flatMap(topic => topic.skills);
}

function countBy(records, field, values) {
  return Object.fromEntries(values.map(value => [String(value), records.filter(record => record[field] === value).length]));
}

async function loadUnits() {
  const units = [];
  for (const registryItem of unitRegistry) {
    const modulePath = path.join(contentDir, "units", registryItem.unitId, "index.mjs");
    const source = await import(`${pathToFileURL(modulePath).href}?build-v2-all`);
    units.push({ unit: source.UNIT, questions: source.QUESTIONS.map(record => pick(record, QUESTION_FIELDS)), lectures: source.LECTURES.map(record => pick(record, LECTURE_FIELDS)), modulePath });
  }
  return units;
}

function makeBlueprints(units) {
  return units.map(({ unit }) => ({
    quizId: `${unit.unitId}-all-skills`,
    unitId: unit.unitId,
    minutes: productionProfile.unitQuiz.minutes,
    questionCount: allSkills(unit).length,
    shuffleQuestions: true,
    shuffleChoices: true,
    slots: allSkills(unit).map((skill, index) => ({
      slot: index + 1,
      skillId: skill.skillId,
      difficultyCycle: ["basic", "standard", "advanced", "literacy"],
      select: 1
    }))
  }));
}

function makeUnitQaManifest(source) {
  const skills = allSkills(source.unit);
  return {
    policyId: "math-content-standard-tw",
    policyVersion: "1.1.0",
    productionProfileId: productionProfile.id,
    productionProfileVersion: productionProfile.version,
    unitId: source.unit.unitId,
    sourceModule: path.relative(mathDir, source.modulePath).replace(/\\/g, "/"),
    generatedQuestionArtifact: `v2/math-question-bank-v2-${source.unit.unitId}.js`,
    generatedLectureArtifact: `v2/math-lecture-v2-${source.unit.unitId}.js`,
    expected: { skills: skills.length, questions: source.questions.length, lectures: source.lectures.length },
    sourceSha256: sha256(fs.readFileSync(path.join(source.modulePath, "..", "questions.mjs")) + fs.readFileSync(path.join(source.modulePath, "..", "lectures.mjs"))),
    generatedRecordSha256: sha256(canonicalJson({ questions: source.questions, lectures: source.lectures })),
    reviewStatus: "reviewed",
    skills: skills.map(skill => {
      const questions = source.questions.filter(question => question.skillId === skill.skillId);
      return {
        skillId: skill.skillId,
        questionIds: questions.map(question => question.questionId),
        lectureId: skill.skillId,
        difficultyCounts: countBy(questions, "difficulty", ["basic", "standard", "advanced", "literacy"]),
        answerIndexCounts: countBy(questions, "answerIndex", [0, 1, 2, 3])
      };
    })
  };
}

function parseArgs(argv) {
  const options = {};
  for (let index = 0; index < argv.length; index += 1) {
    if (argv[index] === "--out") options.outDir = path.resolve(argv[++index]);
    else if (argv[index] === "--manifest-dir") options.manifestDir = path.resolve(argv[++index]);
    else throw new Error(`Unknown argument: ${argv[index]}`);
  }
  return options;
}

export async function buildV2Production({ outDir = DEFAULT_OUT_DIR, manifestDir = DEFAULT_MANIFEST_DIR, write = true } = {}) {
  const units = await loadUnits();
  const blueprints = makeBlueprints(units);
  const core = { syllabus, profile: productionProfile, blueprints, migration: migrationSource, units: units.map(({ unit, questions, lectures }) => ({ unit, questions, lectures })) };
  const contentVersion = sha256(canonicalJson(core));
  const browserUnitManifest = {
    engineVersion: "2.0.0",
    contentVersion,
    units: units.map(({ unit, questions, lectures }) => ({
      unitId: unit.unitId,
      numericId: unit.numericId,
      questionCount: questions.length,
      lectureCount: lectures.length,
      questionGlobal: `MATH_QUESTION_BANK_V2_${unit.unitId.toUpperCase()}`,
      lectureGlobal: `MATH_LECTURE_V2_${unit.unitId.toUpperCase()}`,
      questionScript: `v2/math-question-bank-v2-${unit.unitId}.js`,
      lectureScript: `v2/math-lecture-v2-${unit.unitId}.js`
    }))
  };
  const artifacts = new Map([
    ["math-syllabus-v2.js", writeJs("MATH_SYLLABUS_V2", syllabus)],
    ["math-v2-production-profile.js", writeJs("MATH_V2_PRODUCTION_PROFILE", { ...productionProfile, contentVersion })],
    ["math-v2-unit-manifest.js", writeJs("MATH_V2_UNIT_MANIFEST", browserUnitManifest)],
    ["math-quiz-blueprints-v2.js", writeJs("MATH_QUIZ_BLUEPRINTS_V2", blueprints)],
    ["math-migration-map.js", writeJs("MATH_MIGRATION_MAP", migrationSource)]
  ]);
  const qaManifests = [];
  for (const source of units) {
    const uid = source.unit.unitId;
    artifacts.set(`math-question-bank-v2-${uid}.js`, writeJs(`MATH_QUESTION_BANK_V2_${uid.toUpperCase()}`, source.questions));
    artifacts.set(`math-lecture-v2-${uid}.js`, writeJs(`MATH_LECTURE_V2_${uid.toUpperCase()}`, source.lectures));
    qaManifests.push(makeUnitQaManifest(source));
  }
  const contentManifest = {
    schemaVersion: 1,
    contentVersion,
    productionProfile: { id: productionProfile.id, version: productionProfile.version },
    inventory: { units: productionProfile.units, skills: productionProfile.skills, questions: productionProfile.questions, lectures: productionProfile.lectures },
    units: qaManifests.map(manifest => ({
      unitId: manifest.unitId,
      skillCount: manifest.expected.skills,
      questionCount: manifest.expected.questions,
      lectureCount: manifest.expected.lectures,
      sourceModule: manifest.sourceModule,
      questionArtifact: manifest.generatedQuestionArtifact,
      lectureArtifact: manifest.generatedLectureArtifact,
      sourceSha256: manifest.sourceSha256,
      generatedRecordSha256: manifest.generatedRecordSha256,
      reviewStatus: manifest.reviewStatus
    })),
    artifacts: Object.fromEntries([...artifacts].map(([name, bytes]) => [name, sha256(bytes)]))
  };
  artifacts.set("math-v2-content-manifest.json", `${JSON.stringify(contentManifest, null, 2)}\n`);

  if (write) {
    fs.mkdirSync(outDir, { recursive: true });
    fs.mkdirSync(manifestDir, { recursive: true });
    for (const [name, bytes] of artifacts) fs.writeFileSync(path.join(outDir, name), bytes, "utf8");
    for (const manifest of qaManifests) fs.writeFileSync(path.join(manifestDir, `${manifest.unitId}.production.json`), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");
  }
  return { contentVersion, units, blueprints, artifacts, qaManifests, inventory: { units: units.length, skills: units.reduce((sum, item) => sum + allSkills(item.unit).length, 0), questions: units.reduce((sum, item) => sum + item.questions.length, 0), lectures: units.reduce((sum, item) => sum + item.lectures.length, 0) } };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = await buildV2Production(parseArgs(process.argv.slice(2)));
  console.log(`build-v2-all-units: ${result.inventory.units} units, ${result.inventory.skills} skills, ${result.inventory.questions} questions, ${result.inventory.lectures} lectures`);
  console.log(`content version: ${result.contentVersion}`);
}
