import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { parseArgs, readJson, writeJson, assert, sha256, canonicalHash } from "./lib/common.mjs";

const args = parseArgs(process.argv.slice(2));
assert(args.repo && args.root, "Usage: --repo --root");
const repo = path.resolve(args.repo);
const root = path.resolve(args.root);
const expected = readJson(path.join(root, "tooling/EXPECTED-RESULTS.json"));
const policy = readJson(path.join(root, "tooling/AUDIT-POLICY.json"));
const evidence = path.join(root, "evidence");

const mathDir = path.join(repo, "數學會考作戰室");
const manifestPath = path.join(mathDir, "human-runtime/content/manifest.json");
const manifest = readJson(manifestPath);
assert(manifest.contentVersion === expected.newContentVersion, "Content version mismatch");
assert(manifest.unitCount === 23 && manifest.skillCount === 339 && manifest.lectureCount === 339, "Unit/skill/lecture counts changed");
assert(manifest.mcQuestionCount === 4068 && manifest.constructedResponseCount === 678 && manifest.figureCount === 178, "Question/figure counts changed");

const units = new Map();
let skills = 0, lectures = 0, mc = 0, cr = 0;
for (const entry of manifest.units) {
  const file = path.join(mathDir, "human-runtime/content", ...entry.path.split("/"));
  const bytes = fs.readFileSync(file);
  assert(bytes.length === entry.bytes, `${entry.unitId} byte mismatch`);
  assert(sha256(bytes) === entry.sha256, `${entry.unitId} hash mismatch`);
  const unit = JSON.parse(bytes.toString("utf8"));
  units.set(entry.unitId, unit);
  skills += unit.skills.length;
  lectures += unit.skills.filter(skill => skill.lecture).length;
  mc += unit.skills.reduce((sum, skill) => sum + skill.mcQuestions.length, 0);
  cr += unit.skills.reduce((sum, skill) => sum + skill.constructedResponses.length, 0);
}
assert(skills === 339 && lectures === 339 && mc === 4068 && cr === 678, "Recount mismatch");

const u01Skill = units.get("u01").skills.find(skill => skill.slot === "s001");
const u02Skill = units.get("u02").skills.find(skill => skill.slot === "s012");
assert(u01Skill.title === "數的分類入門：整數、分數與有限小數", "U01-S001 title mismatch");
assert(u02Skill.title.startsWith("分數四則混合運算與括號"), "U02-S012 title mismatch");
assert(!JSON.stringify(u02Skill).includes("繁分數"), "Visible complex-fraction content remains");
for (const forbidden of ["√", "π", "循環小數", "無理數"]) {
  assert(!JSON.stringify(u01Skill).includes(forbidden), `U01-S001 later concept remains: ${forbidden}`);
}

for (const skill of [u01Skill, u02Skill]) {
  assert(skill.mcQuestions.length === 12 && skill.constructedResponses.length === 2, `${skill.slot} question count`);
  const difficulty = Object.fromEntries(["basic","standard","advanced","literacy"].map(name => [name, skill.mcQuestions.filter(question => question.difficulty === name).length]));
  assert(Object.values(difficulty).every(count => count === 3), `${skill.slot} difficulty distribution`);
  const answers = [0,1,2,3].map(index => skill.mcQuestions.filter(question => question.answerIndex === index).length);
  assert(answers.every(count => count === 3), `${skill.slot} answer distribution`);
  assert(skill.lecture.contentSha256 === canonicalHash(skill.lecture), `${skill.slot} lecture hash`);
  for (const question of [...skill.mcQuestions, ...skill.constructedResponses]) {
    assert(question.contentSha256 === canonicalHash(question), `${question.questionId} content hash`);
    const raw = JSON.stringify(question).replace(/\[\[frac:[^|\]]+\|[^\]]+\]\]/g, "");
    assert(!raw.includes("/"), `${question.questionId} contains an unaudited slash expression`);
  }
}

const rendererContext = { window: {} };
vm.createContext(rendererContext);
vm.runInContext(fs.readFileSync(path.join(repo, "shared/fraction-markup.js"), "utf8"), rendererContext);
const convert = rendererContext.window.FRACTION_MARKUP.slashToFracMarkup;
const rendererCases = [
  ["用了2/5剩下", "用了[[frac:2|5]]剩下"],
  ["2又1/3", "2又[[frac:1|3]]"],
  ["(√36-8)/2，則", "(√36-8)/2，則"],
  ["(1/2)/(3/4)", "([[frac:1|2]])/([[frac:3|4]])"],
  ["2026/7/13", "2026/7/13"]
];
for (const [input, output] of rendererCases) assert(convert(input) === output, `Renderer regression: ${input}`);

const knownBad = policy.encodingRequirements.knownMojibakeFragmentsForbidden;
let stringCount = 0;
const scan = value => {
  if (typeof value === "string") {
    stringCount++;
    assert(!value.includes("\uFFFD") && !value.includes("\u0000"), "Invalid Unicode replacement/NUL character");
    for (const fragment of knownBad) assert(!value.includes(fragment), `Mojibake fragment found: ${fragment}`);
    return;
  }
  if (Array.isArray(value)) value.forEach(scan);
  else if (value && typeof value === "object") Object.values(value).forEach(scan);
};
for (const unit of units.values()) scan(unit);

const config = fs.readFileSync(path.join(mathDir, "human-runtime/config.mjs"), "utf8");
const storage = fs.readFileSync(path.join(mathDir, "human-runtime/storage-migration.mjs"), "utf8");
const bootstrap = fs.readFileSync(path.join(mathDir, "human-runtime/bootstrap.mjs"), "utf8");
assert(config.includes(expected.newContentVersion), "Config version mismatch");
assert(storage.includes("migrateHumanContentVersion"), "Content-version migration missing");
assert(bootstrap.includes("migrateHumanContentVersion") && bootstrap.includes("contentVersionMigration"), "Bootstrap migration call missing");

const report = {
  status: "PASS_REVIEWED_CONTENT_NODE_GATE_R1",
  contentVersion: manifest.contentVersion,
  counts: { units: 23, skills, lectures, mcQuestions: mc, constructedResponses: cr, figures: 178 },
  reviewedQuestionsValidated: expected.reviewedQuestionCount,
  reviewedLecturesValidated: expected.reviewedLectureCount,
  rendererCases: rendererCases.length,
  scannedStringFields: stringCount,
  fullReleaseAuthorized: false,
  pendingManual: expected.pendingQuestionCountAfterHotfix
};
writeJson(path.join(evidence, "node-gate.json"), report);
console.log(JSON.stringify(report, null, 2));
