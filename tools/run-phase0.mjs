// Phase 0 gate: run subject verify scripts from repo root.
import { execSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));

const steps = [
  ["hub-links", root, "node tools/verify-hub-links.js"],
  ["chinese", path.join(root, "國文會考作戰室"), "node tools/verify-chapter-quizzes.js"],
  ["math", path.join(root, "數學會考作戰室"), "node tools/verify-chapter-quizzes.js"],
  ["english", path.join(root, "英文會考作戰室"), "node tools/verify-data.mjs"],
  ["earth", path.join(root, "地科會考作戰室"), "node tools/verify-data.mjs"],
  ["earth-smoke", path.join(root, "地科會考作戰室"), "node tools-smoke-test.mjs"],
  ["physics-chem-quizzes", path.join(root, "理化會考作戰室"), "node tools/verify-quizzes.js"],
  ["biology", path.join(root, "生物會考作戰室"), "node tools/verify-data.mjs"],
  ["history", path.join(root, "歷史會考作戰室"), "node tools/verify-data.mjs"],
  ["geography", path.join(root, "地理會考作戰室"), "node tools/verify-data.mjs"],
  ["civics", path.join(root, "公民會考作戰室"), "node tools/verify-data.mjs"],
];

const results = [];
let failed = 0;
for (const [name, cwd, cmd] of steps) {
  try {
    const out = execSync(cmd, { cwd, encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] });
    const last = out.trim().split("\n").filter(Boolean).pop() ?? "(no output)";
    results.push({ name, ok: true, last });
    console.log(`OK ${name}: ${last}`);
  } catch (e) {
    failed++;
    const msg = (e.stdout || "") + (e.stderr || "") || String(e);
    results.push({ name, ok: false, last: msg.trim().split("\n").slice(-3).join(" | ") });
    console.error(`FAIL ${name}: ${results.at(-1).last}`);
  }
}

if (failed) {
  console.error(`\nPhase 0: ${failed}/${steps.length} checks failed`);
  process.exit(1);
}
console.log(`\nPhase 0: all ${steps.length} checks passed`);
process.exit(0);
