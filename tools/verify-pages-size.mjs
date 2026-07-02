import { execSync } from "node:child_process";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const MAX_MB = 1000;
const ref = process.argv[2] || "HEAD";

const out = execSync(`git ls-tree -r -l ${ref}`, { cwd: root, encoding: "utf8" });
let total = 0, n = 0;
for (const line of out.split("\n").filter(Boolean)) {
  const m = line.match(/^\d+ blob \w+\s+(\d+)\t/);
  if (m) { total += Number(m[1]); n++; }
}
const mb = total / 1048576;
if (mb >= MAX_MB) {
  console.error(`FAIL pages-size: ${mb.toFixed(1)} MB in ${ref} (limit ${MAX_MB} MB)`);
  process.exit(1);
}
console.log(`pages-size: ${mb.toFixed(1)} MB in ${ref} OK (< ${MAX_MB} MB)`);
