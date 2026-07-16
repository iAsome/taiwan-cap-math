import assert from "node:assert/strict";
import { mkdir, mkdtemp, readFile, readdir, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { canonicalJson, sha256 } from "../r4-core.mjs";
import { buildAllEarthScience } from "./build-all-earth-science.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..", "..");
const TMP_ROOT = path.resolve(os.tmpdir());

async function filesBelow(root, current = root, result = []) {
  for (const entry of await readdir(current, { withFileTypes: true })) {
    const absolute = path.join(current, entry.name);
    if (entry.isDirectory()) await filesBelow(root, absolute, result);
    else result.push(path.relative(root, absolute).replaceAll("\\", "/"));
  }
  return result;
}

async function snapshot(root) {
  const subject = path.join(root, "地科會考作戰室", "r4");
  const entries = [];
  for (const relative of (await filesBelow(subject)).sort((a, b) => a.localeCompare(b, "en"))) {
    const bytes = await readFile(path.join(subject, ...relative.split("/")));
    entries.push({ path: relative, bytes: bytes.length, sha256: sha256(bytes) });
  }
  return entries;
}

const first = await mkdtemp(path.join(TMP_ROOT, "cap8-earth-r4-clean-a-"));
const second = await mkdtemp(path.join(TMP_ROOT, "cap8-earth-r4-clean-b-"));
assert(first.startsWith(`${TMP_ROOT}${path.sep}`) && second.startsWith(`${TMP_ROOT}${path.sep}`), "clean build roots must stay under OS temp");
try {
  const firstResult = await buildAllEarthScience({ repoRoot: REPO_ROOT, outputRoot: first });
  const secondResult = await buildAllEarthScience({ repoRoot: REPO_ROOT, outputRoot: second });
  assert.deepEqual(firstResult, secondResult);
  const firstSnapshot = await snapshot(first);
  const secondSnapshot = await snapshot(second);
  assert.equal(firstSnapshot.length, 4062, "clean build output file count");
  assert.deepEqual(firstSnapshot, secondSnapshot, "two empty-root Earth Science builds must be byte-identical");
  const releaseManifest = JSON.parse(await readFile(path.join(first, "地科會考作戰室", "r4", "content-manifest-v4.json"), "utf8"));
  const evidence = {
    schemaVersion: "cap8-r4-earth-deterministic-clean-build-v1",
    status: "pass",
    runs: 2,
    emptyOutputRoots: true,
    outputFilesPerRun: firstSnapshot.length,
    treeSha256: sha256(canonicalJson(firstSnapshot)),
    manifestBuildSha256: releaseManifest.buildSha256,
    counts: firstResult,
  };
  const evidenceRoot = path.join(HERE, "evidence");
  await mkdir(evidenceRoot, { recursive: true });
  await writeFile(path.join(evidenceRoot, "deterministic-clean-build.json"), `${JSON.stringify(evidence, null, 2)}\n`, "utf8");
  console.log(`deterministic-clean-build.test: OK - 2 x ${firstSnapshot.length} files, tree ${evidence.treeSha256}`);
} finally {
  await rm(first, { recursive: true, force: true });
  await rm(second, { recursive: true, force: true });
}
