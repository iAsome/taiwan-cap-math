#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "數學會考作戰室", "tools", "v2-human-content", "full-semantic-repair", "r2");
const BATCHES = path.join(ROOT, "數學會考作戰室", "tools", "v2-human-content", "batches");
const RUNTIME = path.join(ROOT, "數學會考作戰室", "human-runtime");
const LOCK = path.join(ROOT, "數學會考作戰室", "tools", "v2-human-content", "authoring", "authoring-syllabus-lock-r2.json");
const PACKAGE = process.argv[2] ? path.resolve(process.argv[2]) : null;
const REQUIRED_ANCESTOR = "d3a0b432a5b659528d357cb5a24b561f10ac5980";
const EXPECTED_LOCK = "930dbdbbb70818b461ba6ad28620dfed69442716b653be91a9025ebe92d353fc";

const sha = bytes => crypto.createHash("sha256").update(bytes).digest("hex");
const fileSha = file => sha(fs.readFileSync(file));
const posix = file => file.split(path.sep).join("/");
const rel = file => posix(path.relative(ROOT, file));
const stable = value => {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === "object") return Object.fromEntries(Object.keys(value).sort().map(key => [key, stable(value[key])]));
  return value;
};
const jsonBytes = value => Buffer.from(`${JSON.stringify(stable(value))}\n`);
const writeJson = (name, value) => fs.writeFileSync(path.join(OUT, name), `${JSON.stringify(value, null, 2)}\n`);
const readJson = file => JSON.parse(fs.readFileSync(file, "utf8"));
const readJsonl = file => fs.readFileSync(file, "utf8").split(/\r?\n/).filter(Boolean).map(JSON.parse);
const walk = root => {
  const files = [];
  const stack = [root];
  while (stack.length) {
    const current = stack.pop();
    for (const entry of fs.readdirSync(current, { withFileTypes: true }).sort((a, b) => b.name.localeCompare(a.name, "en"))) {
      const target = path.join(current, entry.name);
      if (entry.isDirectory()) stack.push(target);
      else files.push(target);
    }
  }
  return files.sort((a, b) => rel(a).localeCompare(rel(b), "en"));
};
const git = args => execFileSync("git", args, { cwd: ROOT, encoding: "utf8" }).trimEnd();
const diffFields = (a, b) => [...new Set([...Object.keys(a || {}), ...Object.keys(b || {})])]
  .filter(key => JSON.stringify(a?.[key]) !== JSON.stringify(b?.[key]))
  .sort((x, y) => x.localeCompare(y, "en"));

if (!PACKAGE || !fs.existsSync(path.join(PACKAGE, "PACKAGE_MANIFEST.json"))) throw new Error("Usage: node build-baseline.mjs <package-root>");
if (git(["branch", "--show-current"]) !== "codex/math-v2-full-human-semantic-repair-r2") throw new Error("Wrong branch");
execFileSync("git", ["merge-base", "--is-ancestor", REQUIRED_ANCESTOR, "HEAD"], { cwd: ROOT });
const initialStatus = git(["-c", "core.quotepath=false", "status", "--short", "--untracked-files=all"]);
const unexpectedInitial = initialStatus.split(/\r?\n/).filter(Boolean).filter(line => !line.includes("數學會考作戰室/tools/v2-human-content/full-semantic-repair/r2/"));
if (unexpectedInitial.length) throw new Error(`Unexpected pre-baseline changes: ${unexpectedInitial.join(", ")}`);
if (fileSha(LOCK) !== EXPECTED_LOCK) throw new Error("Syllabus lock hash mismatch");

const packageManifest = readJson(path.join(PACKAGE, "PACKAGE_MANIFEST.json"));
for (const item of packageManifest.files) {
  const file = path.join(PACKAGE, ...item.path.split("/"));
  if (!fs.existsSync(file) || fs.statSync(file).size !== item.bytes || fileSha(file) !== item.sha256) throw new Error(`Package integrity failure: ${item.path}`);
}

const runtimeManifest = readJson(path.join(RUNTIME, "content", "manifest.json"));
const runtimeById = new Map();
for (const unitRow of runtimeManifest.units) {
  const unit = readJson(path.join(RUNTIME, "content", unitRow.path));
  for (const skill of unit.skills) {
    runtimeById.set(skill.lecture.lectureId, { type: "lecture", value: skill.lecture, path: unitRow.path });
    for (const q of skill.mcQuestions) runtimeById.set(q.questionId, { type: "mc", value: q, path: unitRow.path });
    for (const q of skill.constructedResponses) runtimeById.set(q.questionId, { type: "cr", value: q, path: unitRow.path });
    for (const d of skill.drawingSpecs) runtimeById.set(d.figureId || d.drawingSpecId || d.id, { type: "drawing", value: d, path: unitRow.path });
  }
}

const inventory = [];
const sourceById = new Map();
const counts = { units: new Set(), skills: new Set(), lectures: 0, mc: 0, cr: 0, drawings: 0, reviews: 0, sourceFigures: 0 };
for (const file of walk(BATCHES)) {
  const name = path.basename(file);
  let type = null;
  let rows = [];
  if (name === "lecture.json") { type = "lecture"; rows = [readJson(file)]; }
  else if (name === "mc-questions.jsonl") { type = "mc"; rows = readJsonl(file); }
  else if (name === "constructed-response.jsonl") { type = "cr"; rows = readJsonl(file); }
  else if (name === "drawing-specs.jsonl") { type = "drawing"; rows = readJsonl(file); }
  else if (name === "semantic-reviews.jsonl") { type = "review"; rows = readJsonl(file); }
  else if (file.endsWith(".svg") && file.includes(`${path.sep}figures${path.sep}`)) {
    counts.sourceFigures++;
    inventory.push({ type: "source-svg", id: path.basename(file, ".svg"), path: rel(file), bytes: fs.statSync(file).size, sha256: fileSha(file) });
    continue;
  } else continue;

  rows.forEach((row, index) => {
    const id = row.lectureId || row.questionId || row.figureId || row.drawingSpecId || row.id;
    if (!id) throw new Error(`Missing ID: ${rel(file)}:${index + 1}`);
    const unitId = row.unitId || null;
    const skillId = row.skillId || null;
    if (unitId) counts.units.add(unitId);
    if (skillId && type !== "review") counts.skills.add(`${unitId}:${skillId}`);
    if (type === "lecture") counts.lectures++;
    else if (type === "mc") counts.mc++;
    else if (type === "cr") counts.cr++;
    else if (type === "drawing") counts.drawings++;
    else counts.reviews++;
    const rowHash = sha(jsonBytes(row));
    inventory.push({ type, id, unitId, skillId, path: rel(file), line: rows.length === 1 ? null : index + 1, sha256: rowHash, contentSha256: row.contentSha256 || null });
    if (type !== "review") {
      if (sourceById.has(id)) throw new Error(`Duplicate source ID ${id}`);
      sourceById.set(id, { type, value: row, path: rel(file), sha256: rowHash });
    }
  });
}

const sourceRuntimeDiff = [];
for (const [id, source] of [...sourceById.entries()].sort(([a], [b]) => a.localeCompare(b, "en"))) {
  const runtime = runtimeById.get(id);
  if (!runtime) sourceRuntimeDiff.push({ id, type: source.type, sourcePath: source.path, status: "missing-runtime" });
  else {
    const fields = diffFields(source.value, runtime.value);
    if (fields.length) sourceRuntimeDiff.push({ id, type: source.type, sourcePath: source.path, runtimePath: `數學會考作戰室/human-runtime/content/${runtime.path}`, status: "field-difference", fields, sourceSha256: source.sha256, runtimeSha256: sha(jsonBytes(runtime.value)) });
  }
}
for (const [id, runtime] of [...runtimeById.entries()].sort(([a], [b]) => a.localeCompare(b, "en"))) if (!sourceById.has(id)) sourceRuntimeDiff.push({ id, type: runtime.type, runtimePath: `數學會考作戰室/human-runtime/content/${runtime.path}`, status: "missing-source" });

const figureDiff = [];
for (const item of inventory.filter(item => item.type === "source-svg")) {
  const runtimeFile = path.join(RUNTIME, "figures", `${item.id}.svg`);
  if (!fs.existsSync(runtimeFile)) figureDiff.push({ id: item.id, sourcePath: item.path, status: "missing-runtime" });
  else if (fileSha(runtimeFile) !== item.sha256) figureDiff.push({ id: item.id, sourcePath: item.path, runtimePath: rel(runtimeFile), status: "byte-difference", sourceSha256: item.sha256, runtimeSha256: fileSha(runtimeFile) });
}

fs.mkdirSync(OUT, { recursive: true });
const policyPath = path.join(ROOT, "MATH_CONTENT_STANDARD_TW.md");
writeJson("authority-locks.json", {
  taskId: "MATH-V2-FULL-HUMAN-CONTENT-SEMANTIC-REPAIR-R2",
  requiredAncestor: REQUIRED_ANCESTOR,
  startingHead: git(["rev-parse", "HEAD"]),
  policy: { path: "MATH_CONTENT_STANDARD_TW.md", sha256: fileSha(policyPath) },
  syllabus: { path: rel(LOCK), sha256: fileSha(LOCK) },
  package: { root: PACKAGE, manifestSha256: fileSha(path.join(PACKAGE, "PACKAGE_MANIFEST.json")), files: packageManifest.files },
  contentAuthority: "CHATGPT_HUMAN_AUTHORED_R1"
});
writeJson("baseline.json", {
  taskId: "MATH-V2-FULL-HUMAN-CONTENT-SEMANTIC-REPAIR-R2",
  source: { units: counts.units.size, skills: counts.skills.size, lectures: counts.lectures, mc: counts.mc, cr: counts.cr, drawings: counts.drawings, semanticReviews: counts.reviews, sourceFigures: counts.sourceFigures },
  runtime: { contentVersion: runtimeManifest.contentVersion, units: runtimeManifest.unitCount, skills: runtimeManifest.skillCount, lectures: runtimeManifest.lectureCount, mc: runtimeManifest.mcQuestionCount, cr: runtimeManifest.constructedResponseCount, figures: runtimeManifest.figureCount },
  expected: { units: 23, skills: 339, lectures: 339, mc: 4068, cr: 678, figures: 178 },
  sourceRuntimeDifferenceCount: sourceRuntimeDiff.length,
  sourceRuntimeFigureDifferenceCount: figureDiff.length
});
writeJson("source-inventory.json", { schemaVersion: "math-v2-full-source-inventory-r2", recordCount: inventory.length, records: inventory });
writeJson("source-runtime-diff.json", { schemaVersion: "math-v2-source-runtime-diff-r2", recordDifferenceCount: sourceRuntimeDiff.length, figureDifferenceCount: figureDiff.length, records: sourceRuntimeDiff, figures: figureDiff });

const status = git(["status", "--short", "--untracked-files=all"]);
const preflight = [
  "TASK=MATH-V2-FULL-HUMAN-CONTENT-SEMANTIC-REPAIR-R2",
  `REPOSITORY=${git(["remote", "get-url", "origin"])}`,
  `BRANCH=${git(["branch", "--show-current"])}`,
  `HEAD=${git(["rev-parse", "HEAD"])}`,
  `SUBJECT=${git(["log", "-1", "--format=%s"])}`,
  `REQUIRED_ANCESTOR=${REQUIRED_ANCESTOR}`,
  "ANCESTOR_CHECK=PASS",
  `PACKAGE_FILES_VERIFIED=${packageManifest.files.length}`,
  `SYLLABUS_SHA256=${fileSha(LOCK)}`,
  `SOURCE_COUNTS=${counts.units.size}/${counts.skills.size}/${counts.lectures}/${counts.mc}/${counts.cr}/${counts.sourceFigures}`,
  `RUNTIME_COUNTS=${runtimeManifest.unitCount}/${runtimeManifest.skillCount}/${runtimeManifest.lectureCount}/${runtimeManifest.mcQuestionCount}/${runtimeManifest.constructedResponseCount}/${runtimeManifest.figureCount}`,
  `SOURCE_RUNTIME_RECORD_DIFFERENCES=${sourceRuntimeDiff.length}`,
  `SOURCE_RUNTIME_FIGURE_DIFFERENCES=${figureDiff.length}`,
  "WORKTREE_WAS_CLEAN_BEFORE_GENERATION=true",
  `GENERATED_STATUS=${status.replaceAll("\r", "").replaceAll("\n", " | ")}`
].join("\n") + "\n";
fs.writeFileSync(path.join(OUT, "preflight.txt"), preflight);
console.log(JSON.stringify({ status: "BASELINE_WRITTEN", counts: { units: counts.units.size, skills: counts.skills.size, lectures: counts.lectures, mc: counts.mc, cr: counts.cr, drawings: counts.drawings, reviews: counts.reviews, figures: counts.sourceFigures }, sourceRuntimeDifferences: sourceRuntimeDiff.length, figureDifferences: figureDiff.length }, null, 2));
