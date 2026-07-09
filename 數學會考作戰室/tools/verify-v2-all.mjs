import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const scripts = [
  "verify-v2-syllabus.mjs",
  "verify-v2-question-bank.mjs",
  "verify-v2-lecture.mjs",
  "verify-v2-migration-map.mjs",
  "verify-v2-text-only.mjs"
];

let failed = false;
for (const s of scripts) {
  console.log(`\n--- ${s} ---`);
  const r = spawnSync(process.execPath, [path.join(dir, s)], { encoding: "utf8", cwd: path.dirname(dir) });
  process.stdout.write(r.stdout || "");
  process.stderr.write(r.stderr || "");
  if (r.status !== 0) failed = true;
}
if (failed) process.exit(1);
console.log("\nverify-v2-all: OK");
