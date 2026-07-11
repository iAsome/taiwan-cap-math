import assert from "node:assert/strict";
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
const historicalTests = new Set(["pilot-unit-source-split.test.mjs", "u01-coverage-expansion.test.mjs", "u01-policy-v1-1-quality.test.mjs"]);
const testDir = path.join(toolsDir, "v2-qa", "test");
const tests = fs.readdirSync(testDir).filter(name => name.endsWith(".test.mjs")).sort();
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
  for (const legacy of ["questions.js", "quiz-taxonomy.js", "quiz-variant-bank.js", "quiz-variants.js", "lecture-taxonomy.js", "app-legacy.js"]) {
    assert(!directScripts.includes(legacy), `default page directly loads ${legacy}`);
    assert(bootstrap.includes(`"${legacy}"`), `rollback list is missing ${legacy}`);
  }
  for (const current of ["math-syllabus-v2.js", "math-v2-production-profile.js", "math-v2-unit-manifest.js", "math-quiz-blueprints-v2.js", "math-mock-blueprint-v2.js", "math-engine-v2.js", "math-production-bootstrap.js", "app.js"]) {
    assert(bootstrap.includes(`"${current.startsWith("app") ? current : `v2/${current}`}"`), `V2 bootstrap is missing ${current}`);
  }
  assert(index.includes("math-bootstrap.js"));
  assert(fs.existsSync(path.join(mathDir, "legacy.html")));
  return { defaultV2: true, defaultLegacy: false, mixedDefault: false, rollback: true };
}

export function runReleaseGate({ outputPath = null } = {}) {
  evidence.length = 0;
  const before = gitStatus();
  assert.equal(hashPolicy(), expectedPolicyHash, "policy hash changed");
  assert.deepEqual({ units: productionProfile.units, skills: productionProfile.skills, questions: productionProfile.questions, lectures: productionProfile.lectures }, { units: 23, skills: 339, questions: 4068, lectures: 339 });
  const reachability = verifyConsumerIsolation();
  console.log("OK policy, production profile, and consumer isolation");

  run("deterministic all-unit build", process.execPath, [path.join(mathDir, "tools", "build-v2-all-units.mjs")]);
  run("current U01-U23 content audit", process.execPath, [path.join(mathDir, "tools", "verify-v2-all.mjs")]);
  run("production content locks", process.execPath, [path.join(mathDir, "tools", "verify-v2-production-locks.mjs")]);

  for (const test of tests) {
    const label = historicalTests.has(test) ? `historical test status: ${test}` : `V2 test: ${test}`;
    run(label, process.execPath, [path.join(testDir, test)]);
  }
  run("historical fixed-ref global audit", process.execPath, [path.join(mathDir, "tools", "v2-qa", "runner", "audit-all-math-units.mjs"), "--task", path.join(mathDir, "tools", "v2-qa", "tasks", "MATH-V2-GLOBAL-RETRO-AUDIT.json")]);
  run("production browser smoke", process.execPath, [path.join(testDir, "production-browser-smoke.mjs")]);
  run("repository Phase 0 regression", process.execPath, [path.join(repo, "tools", "run-phase0.mjs")]);

  const generatedPaths = [
    "數學會考作戰室/v2/math-syllabus-v2.js",
    "數學會考作戰室/v2/math-v2-production-profile.js",
    "數學會考作戰室/v2/math-v2-unit-manifest.js",
    "數學會考作戰室/v2/math-quiz-blueprints-v2.js",
    "數學會考作戰室/v2/math-mock-blueprint-v2.js",
    "數學會考作戰室/v2/math-migration-map.js",
    "數學會考作戰室/v2/math-v2-content-manifest.json",
    ...Array.from({ length: 23 }, (_, index) => `數學會考作戰室/v2/math-question-bank-v2-u${String(index + 1).padStart(2, "0")}.js`),
    ...Array.from({ length: 23 }, (_, index) => `數學會考作戰室/v2/math-lecture-v2-u${String(index + 1).padStart(2, "0")}.js`),
    ...Array.from({ length: 23 }, (_, index) => `數學會考作戰室/tools/v2-qa/manifests/u${String(index + 1).padStart(2, "0")}.production.json`)
  ];
  run("generated artifacts clean against HEAD", "git", ["diff", "--exit-code", "HEAD", "--", ...generatedPaths]);
  assert(before.equals(gitStatus()), "release gate changed the worktree");

  const summary = {
    policyHash: expectedPolicyHash,
    inventory: { units: 23, skills: 339, questions: 4068, lectures: 339 },
    activeMechanicalFindings: 0,
    unresolvedTargetedFindings: 0,
    historicalTests: { retained: historicalTests.size, mode: "explicit-skip-on-339-skill-production" },
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
