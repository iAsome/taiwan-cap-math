import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const REGISTER_PATH = path.join(HERE, "evidence", "official", "official-source-register.json");

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

async function verifyFile(absolute, expected, label) {
  const bytes = await readFile(absolute);
  assert.equal(bytes.length, expected.bytes, `${label}: byte count mismatch`);
  assert.equal(sha256(bytes), expected.sha256, `${label}: SHA-256 mismatch`);
}

export async function verifyOfficialSources() {
  const register = JSON.parse(await readFile(REGISTER_PATH, "utf8"));
  const cacheRoot = process.env.CAP8_R4_OFFICIAL_CACHE
    ? path.resolve(process.env.CAP8_R4_OFFICIAL_CACHE)
    : path.resolve(REPO_ROOT, "..", register.externalCache.defaultSiblingDirectory);

  for (const item of [...register.pages, ...register.yearlyPages]) {
    await verifyFile(path.join(REPO_ROOT, ...item.repositoryPath.split("/")), item, item.id || `CAP-${item.year}`);
  }
  let reused = 0;
  let cached = 0;
  for (const item of register.files) {
    assert(!/[ÃÂåæçèéä]/u.test(item.filename), `${item.driveId}: mojibake filename metadata`);
    if (item.reusedExistingRepositoryFile) {
      assert(item.repositoryPath && !item.cacheRelativePath, `${item.driveId}: invalid reused path`);
      await verifyFile(path.join(REPO_ROOT, ...item.repositoryPath.split("/")), item, item.driveId);
      reused += 1;
    } else {
      assert(!item.repositoryPath && item.cacheRelativePath, `${item.driveId}: invalid cache path`);
      await verifyFile(path.join(cacheRoot, ...item.cacheRelativePath.split("/")), item, item.driveId);
      cached += 1;
    }
  }
  assert.deepEqual(register.yearRange, [106, 115]);
  assert.equal(register.yearlyPages.length, 10);
  assert.equal(register.files.length, 246);
  return { pages: register.pages.length, yearlyPages: 10, files: 246, reused, cached };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = await verifyOfficialSources();
  console.log(`verify-official-sources: OK — ${result.files} linked files (${result.reused} reused, ${result.cached} external cache)`);
  console.log(JSON.stringify(result));
}
