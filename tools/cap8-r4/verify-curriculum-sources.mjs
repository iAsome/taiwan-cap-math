import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const REGISTER_PATH = path.join(HERE, "evidence", "curriculum", "curriculum-source-register.json");

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

async function verifyBytes(absolute, bytes, digest, label) {
  const value = await readFile(absolute);
  assert.equal(value.length, bytes, `${label}: byte count mismatch`);
  assert.equal(sha256(value), digest, `${label}: SHA-256 mismatch`);
}

export async function verifyCurriculumSources() {
  const register = JSON.parse(await readFile(REGISTER_PATH, "utf8"));
  const cacheRoot = process.env.CAP8_R4_OFFICIAL_CACHE
    ? path.resolve(process.env.CAP8_R4_OFFICIAL_CACHE)
    : path.resolve(REPO_ROOT, "..", register.externalCache.defaultSiblingDirectory);
  assert.equal(register.schemaVersion, "cap8-r4-curriculum-source-register-v1");
  assert.equal(register.documents.length, 4);
  assert.equal(register.pages.length, 3);
  assert.deepEqual(
    register.documents.map((item) => item.id),
    ["NAER-CURRICULUM-CHINESE", "NAER-CURRICULUM-ENGLISH", "NAER-CURRICULUM-SOCIAL", "NAER-CURRICULUM-NATURAL"],
  );
  for (const item of register.pages) {
    await verifyBytes(path.join(REPO_ROOT, ...item.repositoryPath.split("/")), item.bytes, item.sha256, item.id);
  }
  for (const item of register.documents) {
    assert(item.pageCount > 0, `${item.id}: no pages extracted`);
    await verifyBytes(path.join(cacheRoot, ...item.cacheRelativePath.split("/")), item.bytes, item.sha256, item.id);
    await verifyBytes(
      path.join(cacheRoot, ...item.odtCacheRelativePath.split("/")),
      item.odtBytes,
      item.odtSha256,
      `${item.id} ODT`,
    );
    await verifyBytes(
      path.join(REPO_ROOT, ...item.extractedTextPath.split("/")),
      item.extractedTextBytes,
      item.extractedTextSha256,
      `${item.id} text`,
    );
    const text = await readFile(path.join(REPO_ROOT, ...item.extractedTextPath.split("/")), "utf8");
    assert((text.match(/[\u3400-\u9fff]/gu) || []).length > 1000, `${item.id}: unusable extracted text`);
    assert(!text.includes("�"), `${item.id}: replacement characters in extracted text`);
  }
  return { documents: register.documents.length, pages: register.pages.length };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = await verifyCurriculumSources();
  console.log(`verify-curriculum-sources: OK - ${result.documents} curricula, ${result.pages} authority pages`);
}
