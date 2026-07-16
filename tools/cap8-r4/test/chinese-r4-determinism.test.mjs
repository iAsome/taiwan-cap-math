import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { sha256 } from "../r4-core.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..", "..", "..");
const SUBJECT_ROOT = path.join(ROOT, "國文會考作戰室", "r4");

async function treeHashes(root, directory = root) {
  const entries = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) entries.push(...await treeHashes(root, fullPath));
    else entries.push([path.relative(root, fullPath).replaceAll("\\", "/"), sha256(await readFile(fullPath))]);
  }
  return entries.sort(([left], [right]) => left.localeCompare(right, "en"));
}

async function cleanBuild() {
  for (const script of ["author-chinese-r4.mjs", "build-chinese-r4.mjs"]) {
    const result = spawnSync(process.execPath, [path.join(HERE, "..", script)], { cwd: ROOT, encoding: "utf8" });
    assert.equal(result.status, 0, `${script} failed:\n${result.stdout}\n${result.stderr}`);
  }
  const files = await treeHashes(SUBJECT_ROOT);
  return { files, aggregateSha256: sha256(Buffer.from(JSON.stringify(files), "utf8")) };
}

const first = await cleanBuild();
const second = await cleanBuild();
assert.deepEqual(second, first, "two clean Chinese author/build runs produced different bytes");
console.log(JSON.stringify({ cleanBuilds: 2, files: first.files.length, aggregateSha256: first.aggregateSha256, deterministic: true }));
