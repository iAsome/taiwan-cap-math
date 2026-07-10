#!/usr/bin/env node
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import u09Config from "../configs/u09.config.mjs";
import { validateManifest, validateUnitConfig } from "../configs/schema.mjs";
import { lintManifest, lintUnitConfig } from "../checkers/manifest-lint.mjs";
import { readLocksJson } from "../core/hash-locks.mjs";
import {
  authorizedQuestionManifest,
  exactQuestionManifest,
  minimalUnitConfig
} from "./fixtures.mjs";

const testDir = path.dirname(fileURLToPath(import.meta.url));
const v2qaRoot = path.resolve(testDir, "..");
const mathRoot = path.resolve(v2qaRoot, "../..");

// u09 config lint passes
{
  const result = lintUnitConfig(u09Config, { fromDir: v2qaRoot });
  assert.equal(result.ok, true, result.violations.join("\n"));
}

// u09 lock JSON structure and key consistency
{
  const locksPath = path.join(mathRoot, u09Config.paths.locks);
  const locks = readLocksJson(locksPath);
  assert.deepEqual(
    Object.keys(locks).sort(),
    ["distractor", "dossier", "lecture", "questionBank", "samples"]
  );
}

// malformed config
{
  const result = lintUnitConfig({ unitId: "bad" }, { fromDir: v2qaRoot });
  assert.equal(result.ok, false);
  assert.ok(result.violations.some(v => v.startsWith("config:")));
}

// malformed manifest
{
  const result = lintManifest(
    {
      manifestId: "bad",
      unitId: "u09",
      entity: "question",
      kind: "authorized-fields",
      baseCommit: "short",
      expected: { changedRecords: 0, changedFields: 0 },
      entries: {}
    },
    u09Config,
    { fromDir: v2qaRoot }
  );
  assert.equal(result.ok, false);
}

// invalid base SHA format
assert.throws(() =>
  validateManifest(
    authorizedQuestionManifest({ baseCommit: "not-a-sha" })
  )
);

// authorized manifest validates
validateManifest(authorizedQuestionManifest());

// exact manifest validates
validateManifest(exactQuestionManifest());

// threshold positivity enforced
assert.throws(() =>
  validateUnitConfig(
    minimalUnitConfig({
      thresholds: { explanationZhMin: 0 }
    })
  )
);

// cumulative manifests may not remove prior authorization
{
  const batchA = {
    manifest: authorizedQuestionManifest({
      manifestId: "batch-a",
      entries: { "u09-s001-v001": ["explanation", "text"] },
      expected: { changedRecords: 1, changedFields: 2 }
    })
  };
  const batchB = {
    manifest: authorizedQuestionManifest({
      manifestId: "batch-b",
      entries: { "u09-s001-v001": ["explanation"] },
      expected: { changedRecords: 1, changedFields: 1 }
    })
  };
  const result = lintUnitConfig(
    minimalUnitConfig({ batches: [batchA, batchB] }),
    { fromDir: v2qaRoot }
  );
  assert.equal(result.ok, false);
  assert.ok(result.violations.some(v => v.includes("cumulative authorization removed")));
}

// entry ID existence at base commit
{
  const result = lintManifest(
    authorizedQuestionManifest({
      entries: { "u09-s999-v999": ["explanation"] },
      expected: { changedRecords: 1, changedFields: 1 }
    }),
    u09Config,
    { fromDir: v2qaRoot }
  );
  assert.equal(result.ok, false);
}

// lock key consistency in temp dir
{
  const tmp = mkdtempSync(path.join(os.tmpdir(), "v2qa-lint-lock-"));
  try {
    const unit = minimalUnitConfig({
      paths: {
        questionBank: "bank.js",
        lecture: "lecture.js",
        locks: "locks.json"
      },
      reviewArtifacts: {
        dossier: "dossier.jsonl",
        distractor: "distractor.md",
        samples: "samples.md"
      },
      buildPipeline: [],
      legacyReleaseGate: "gate.mjs"
    });
    writeFileSync(path.join(tmp, "gate.mjs"), "export default null;\n");
    for (const name of ["bank.js", "lecture.js", "dossier.jsonl", "distractor.md", "samples.md"]) {
      writeFileSync(path.join(tmp, name), `${name}\n`);
    }
    writeFileSync(
      path.join(tmp, "locks.json"),
      JSON.stringify({ questionBank: "0".repeat(64) }, null, 2)
    );
    const result = lintUnitConfig(unit, { mathRoot: tmp, fromDir: v2qaRoot });
    assert.equal(result.ok, false);
    assert.ok(result.violations.some(v => v.startsWith("locks:")));
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
}

// imports produce no output and no files
{
  const tmp = mkdtempSync(path.join(os.tmpdir(), "v2qa-lint-import-"));
  const marker = path.join(tmp, "marker.txt");
  writeFileSync(marker, "ok");
  await import("../checkers/manifest-lint.mjs");
  await import("../configs/u09.config.mjs");
  assert.equal(readFileSync(marker, "utf8"), "ok");
  rmSync(tmp, { recursive: true, force: true });
}

console.log("manifest-lint.test.mjs: OK");
