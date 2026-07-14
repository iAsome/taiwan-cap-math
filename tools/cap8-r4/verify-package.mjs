import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const PACKAGE_NAME = "taiwan-cap-8-subject-one-shot-codex-pack-r4";
const PACKAGE_ROOT = path.join(HERE, "specification", PACKAGE_NAME);
const ZIP_PATH = path.join(
  HERE,
  "evidence",
  "package-r4",
  "original",
  `${PACKAGE_NAME}.zip`,
);
const MANIFEST_PATH = path.join(PACKAGE_ROOT, "PACKAGE_MANIFEST_R4.json");
const EXPECTED_ZIP_SHA256 =
  "bb7ce18064e591d208e615983d141afa4a53fd24802c48ea0ee05a84a0325a85";
const EXPECTED_MANIFEST_SHA256 =
  "b8321b78533af23e05dcff68b6b336a9f7da5d1301de5ad5d2627d731f8c3fd4";

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

async function listFiles(root, current = root) {
  const entries = await readdir(current, { withFileTypes: true });
  const files = [];
  for (const entry of entries.sort((a, b) => a.name.localeCompare(b.name, "en"))) {
    const absolute = path.join(current, entry.name);
    if (entry.isDirectory()) files.push(...(await listFiles(root, absolute)));
    else if (entry.isFile()) files.push(path.relative(root, absolute).replaceAll("\\", "/"));
  }
  return files;
}

export async function verifyPackage() {
  const zipBytes = await readFile(ZIP_PATH);
  const manifestBytes = await readFile(MANIFEST_PATH);
  const manifest = JSON.parse(manifestBytes.toString("utf8"));

  assert.equal(sha256(zipBytes), EXPECTED_ZIP_SHA256, "R4 ZIP hash mismatch");
  assert.equal(
    sha256(manifestBytes),
    EXPECTED_MANIFEST_SHA256,
    "R4 manifest hash mismatch",
  );
  assert.equal(manifest.files.length, 62, "R4 manifest must contain 62 payload files");

  const expectedPaths = manifest.files.map((entry) => entry.path).sort();
  const actualPaths = (await listFiles(PACKAGE_ROOT))
    .filter((relative) => relative !== "PACKAGE_MANIFEST_R4.json")
    .sort();
  assert.deepEqual(actualPaths, expectedPaths, "R4 extracted payload path set mismatch");

  const payload = [];
  for (const entry of manifest.files) {
    const absolute = path.join(PACKAGE_ROOT, ...entry.path.split("/"));
    const info = await stat(absolute);
    const bytes = await readFile(absolute);
    assert.equal(info.size, entry.bytes, `byte count mismatch: ${entry.path}`);
    assert.equal(sha256(bytes), entry.sha256, `SHA-256 mismatch: ${entry.path}`);
    payload.push({ path: entry.path, bytes: entry.bytes, sha256: entry.sha256 });
  }

  const validationReport = await readFile(
    path.join(PACKAGE_ROOT, "PACKAGE_VALIDATION_REPORT.txt"),
    "utf8",
  );
  const globalFloor = JSON.parse(
    await readFile(path.join(PACKAGE_ROOT, "locks", "GLOBAL_PRODUCTION_FLOOR_R4.json"), "utf8"),
  );

  return {
    schemaVersion: "cap8-r4-package-verification-v1",
    repository: path.basename(REPO_ROOT),
    package: PACKAGE_NAME,
    zip: { bytes: zipBytes.length, sha256: sha256(zipBytes) },
    manifest: {
      bytes: manifestBytes.length,
      sha256: sha256(manifestBytes),
      payloadCount: manifest.files.length,
    },
    payload,
    corrections: [
      {
        id: "R4-PACKAGE-COUNT-REPORT",
        observed: validationReport.includes("Files in manifest: 61")
          ? "PACKAGE_VALIDATION_REPORT.txt says 61"
          : "expected stale count text was not found",
        canonical: "PACKAGE_MANIFEST_R4.json contains 62 verified payload entries",
        sourceMutated: false,
      },
      {
        id: "R4-GLOBAL-FLOOR-SCHEMA-VERSION",
        observed: `schemaVersion=${JSON.stringify(globalFloor.schemaVersion)}`,
        canonical: "adapter supplies cap8-global-production-floor-r4 without mutating the package",
        sourceMutated: false,
      },
    ],
  };
}

async function main() {
  const result = await verifyPackage();
  const serialized = `${JSON.stringify(result, null, 2)}\n`;
  const outputIndex = process.argv.indexOf("--output");
  if (outputIndex !== -1) {
    const output = process.argv[outputIndex + 1];
    assert(output, "--output requires a path");
    await writeFile(path.resolve(process.cwd(), output), serialized, "utf8");
  }
  process.stdout.write(serialized);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await main();
}
