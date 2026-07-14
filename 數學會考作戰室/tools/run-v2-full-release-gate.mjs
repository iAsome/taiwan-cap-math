import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import productionProfile from "./v2-qa/policies/math-v2-production-profile.mjs";
import { hashPolicy } from "./v2-qa/policies/policy-hash.mjs";

const toolsDir = path.dirname(fileURLToPath(import.meta.url));
const mathDir = path.resolve(toolsDir, "..");
const repo = path.resolve(mathDir, "..");
const expectedPolicyHash = "72384ef7b0a3ab549d676c8e9f4af044aa694807d1ee36d3b016d8a3ce13d271";
const testDir = path.join(toolsDir, "v2-qa", "test");
const sharedQaTests = [
  "content-standard.test.mjs",
  "field-diff-core.test.mjs",
  "task-schema.test.mjs"
];
const evidence = [];

function summaryText(value) {
  return String(value || "").trim().split(/\r?\n/).slice(-3).join(" | ");
}

function run(label, executable, args) {
  const started = performance.now();
  const result = spawnSync(executable, args, { cwd: repo, encoding: "utf8", windowsHide: true, maxBuffer: 64 * 1024 * 1024 });
  evidence.push({
    label,
    command: [executable, ...args].join(" "),
    workingDirectory: repo.replace(/\\/g, "/"),
    exitCode: result.status ?? -1,
    stdoutSummary: summaryText(result.stdout),
    stderrSummary: summaryText(result.stderr || result.error?.message),
    durationMs: Number((performance.now() - started).toFixed(2))
  });
  if (result.error || result.status !== 0) {
    const detail = [result.stdout, result.stderr, result.error?.message].filter(Boolean).join("\n").trim();
    throw new Error(`${label} failed${detail ? `\n${detail}` : ""}`);
  }
  console.log(`OK ${label}`);
  return result.stdout;
}

function gitStatus() {
  const result = spawnSync("git", ["status", "--porcelain=v1", "-z"], { cwd: repo, encoding: "buffer", windowsHide: true });
  if (result.status !== 0) throw new Error("git status failed");
  return result.stdout;
}

function verifyConsumerIsolation() {
  const index = fs.readFileSync(path.join(mathDir, "index.html"), "utf8");
  const bootstrap = fs.readFileSync(path.join(mathDir, "math-bootstrap.js"), "utf8");
  const directScripts = [...index.matchAll(/<script src="([^"?]+)/g)].map(match => match[1]);
  assert(directScripts.includes("math-bootstrap.js"), "default page must load math-bootstrap.js");
  assert.deepEqual(
    [...bootstrap.matchAll(/\bload\("([^"]+)"\)/g)].map(match => match[1]),
    ["human-runtime/human-production-bootstrap.js"]
  );

  const consumer = `${directScripts.join("\n")}\n${bootstrap}`;
  for (const marker of [
    "generated=1",
    "legacy=1",
    "v2/",
    "app.js",
    "app-legacy.js",
    "questions.js",
    "quiz-taxonomy.js",
    "quiz-variant-bank.js",
    "quiz-variants.js",
    "lecture-taxonomy.js"
  ]) assert(!consumer.includes(marker), `retired runtime is reachable: ${marker}`);

  for (const marker of [
    'mode:"human-production-r1"',
    "humanDefault:true",
    "generatedRollbackAvailable:false",
    "v1RollbackAvailable:false",
    "oldRuntimesRetired:true"
  ]) assert(bootstrap.includes(marker), `loader contract missing: ${marker}`);

  return {
    runtime: "human-production-r1",
    uniquelyReachable: true,
    generatedRollbackAvailable: false,
    v1RollbackAvailable: false
  };
}

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function verifyHumanRuntime() {
  const contentDir = path.join(mathDir, "human-runtime", "content");
  const manifest = JSON.parse(fs.readFileSync(path.join(contentDir, "manifest.json"), "utf8"));
  assert.equal(manifest.productionRuntime, true);
  assert.equal(manifest.contentAuthority, "CHATGPT_HUMAN_AUTHORED_R1");
  assert.equal(manifest.unitCount, 23);
  assert.equal(manifest.units.length, 23);

  const ids = new Set();
  const counts = { units: 0, skills: 0, lectures: 0, mcQuestions: 0, constructedResponses: 0, figures: 0 };
  for (const descriptor of manifest.units) {
    const unitPath = path.join(contentDir, ...descriptor.path.split("/"));
    const bytes = fs.readFileSync(unitPath);
    assert.equal(bytes.length, descriptor.bytes, `${descriptor.unitId} byte count mismatch`);
    assert.equal(sha256(bytes), descriptor.sha256, `${descriptor.unitId} hash mismatch`);
    const unit = JSON.parse(bytes.toString("utf8"));
    assert.equal(unit.unitId, descriptor.unitId);
    assert.equal(unit.skills.length, descriptor.counts.skills);
    counts.units += 1;
    counts.skills += unit.skills.length;
    counts.lectures += unit.skills.filter(skill => skill.lecture).length;
    for (const skill of unit.skills) {
      for (const question of [...skill.mcQuestions, ...skill.constructedResponses]) {
        assert(!ids.has(question.questionId), `duplicate human question ID: ${question.questionId}`);
        ids.add(question.questionId);
      }
      counts.mcQuestions += skill.mcQuestions.length;
      counts.constructedResponses += skill.constructedResponses.length;
    }
  }
  for (const figure of Object.values(manifest.figureIndex)) {
    const figurePath = path.join(repo, ...figure.sourcePath.split("/"));
    const bytes = fs.readFileSync(figurePath);
    assert.equal(bytes.length, figure.bytes, `${figure.figureId} byte count mismatch`);
    assert.equal(sha256(bytes), figure.sha256, `${figure.figureId} hash mismatch`);
    counts.figures += 1;
  }
  assert.deepEqual(counts, {
    units: manifest.unitCount,
    skills: manifest.skillCount,
    lectures: manifest.lectureCount,
    mcQuestions: manifest.mcQuestionCount,
    constructedResponses: manifest.constructedResponseCount,
    figures: manifest.figureCount
  });
  return { contentVersion: manifest.contentVersion, counts };
}

export function runReleaseGate({ outputPath = null } = {}) {
  evidence.length = 0;
  const before = gitStatus();
  assert.equal(hashPolicy(), expectedPolicyHash, "policy hash changed");
  assert.deepEqual({ units: productionProfile.units, skills: productionProfile.skills, questions: productionProfile.questions, lectures: productionProfile.lectures }, { units: 23, skills: 339, questions: 4068, lectures: 339 });
  const reachability = verifyConsumerIsolation();
  const humanRuntime = verifyHumanRuntime();
  console.log("OK policy, human production content hashes, and consumer isolation");

  for (const test of sharedQaTests) run(`shared V2 QA test: ${test}`, process.execPath, [path.join(testDir, test)]);
  run("historical fixed-ref global audit", process.execPath, [path.join(mathDir, "tools", "v2-qa", "runner", "audit-all-math-units.mjs"), "--task", path.join(mathDir, "tools", "v2-qa", "tasks", "MATH-V2-GLOBAL-RETRO-AUDIT.json")]);
  run("production browser smoke", process.execPath, [path.join(testDir, "production-browser-smoke.mjs")]);
  assert(before.equals(gitStatus()), "release gate changed the worktree");

  const summary = {
    policyHash: expectedPolicyHash,
    inventory: { units: 23, skills: 339, questions: 4068, lectures: 339 },
    activeMechanicalFindings: 0,
    unresolvedTargetedFindings: 0,
    runtime: humanRuntime,
    retiredGeneratedRuntime: { built: false, required: false, rollbackAvailable: false },
    reachability
  };
  console.log("run-v2-full-release-gate: OK");
  console.log(JSON.stringify(summary));
  if (outputPath) {
    const resolved = path.resolve(outputPath);
    fs.mkdirSync(path.dirname(resolved), { recursive: true });
    fs.writeFileSync(resolved, `${JSON.stringify({ generatedAt: new Date().toISOString(), summary, commands: evidence }, null, 2)}\n`, "utf8");
  }
  return summary;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  if (args.length && (args.length !== 2 || args[0] !== "--output")) throw new Error("Usage: node tools/run-v2-full-release-gate.mjs [--output path]");
  runReleaseGate({ outputPath: args[1] || null });
}
