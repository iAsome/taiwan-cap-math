import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..", "..");
const EVIDENCE_PATH = "tools/cap8-r4/earth-science/evidence/changed-files.txt";
const roots = ["tools/cap8-r4/earth-science", "地科會考作戰室/r4"];
const output = execFileSync(
  "git",
  ["-c", "core.quotepath=false", "ls-files", "--others", "--exclude-standard", "--", ...roots],
  { cwd: REPO_ROOT, encoding: "utf8" },
);
const files = new Set(output.split(/\r?\n/u).filter(Boolean));
files.add(EVIDENCE_PATH);
const sorted = [...files].sort((a, b) => a.localeCompare(b, "en"));
assert(sorted.every((file) => roots.some((root) => file === root || file.startsWith(`${root}/`))), "changed-file evidence escaped Earth-only roots");
await writeFile(path.join(REPO_ROOT, ...EVIDENCE_PATH.split("/")), `${sorted.join("\n")}\n`, "utf8");
console.log(`build-changed-files-evidence: OK - ${sorted.length} Earth-only files`);
