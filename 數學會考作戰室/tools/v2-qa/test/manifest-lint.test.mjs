#!/usr/bin/env node
import assert from "node:assert/strict";
import { mkdtempSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import u09Config from "../configs/u09.config.mjs";
import {
  isJsonSerializable,
  resolveConfigPaths,
  validateManifest,
  validateUnitConfig
} from "../configs/schema.mjs";
import { buildCumulativeAuth, lintManifest, lintUnitConfig } from "../checkers/manifest-lint.mjs";
import { readLocksJson, sha256File } from "../core/hash-locks.mjs";
import {
  authorizedQuestionManifest,
  exactQuestionManifest,
  minimalUnitConfig
} from "./fixtures.mjs";

const testDir = path.dirname(fileURLToPath(import.meta.url));
const v2qaRoot = path.resolve(testDir, "..");
const mathRoot = path.resolve(v2qaRoot, "../..");
const repoRoot = path.resolve(mathRoot, "..");

// U09 explanationZhMin is exactly 30
assert.equal(u09Config.thresholds.explanationZhMin, 30);

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

// path overrides resolve to supplied temporary roots
{
  const tmpMath = mkdtempSync(path.join(os.tmpdir(), "v2qa-path-math-"));
  const tmpRepo = mkdtempSync(path.join(os.tmpdir(), "v2qa-path-repo-"));
  const tmpV2qa = mkdtempSync(path.join(os.tmpdir(), "v2qa-path-v2qa-"));
  try {
    const paths = resolveConfigPaths(minimalUnitConfig(), v2qaRoot, {
      mathRoot: tmpMath,
      repoRoot: tmpRepo,
      v2qaRoot: tmpV2qa
    });
    assert.equal(paths.mathRoot, path.resolve(tmpMath));
    assert.equal(paths.repoRoot, path.resolve(tmpRepo));
    assert.equal(paths.v2qaRoot, path.resolve(tmpV2qa));
    assert.equal(paths.locks, path.join(tmpMath, "tools/v2-qa/locks/u09.locks.json"));
  } finally {
    rmSync(tmpMath, { recursive: true, force: true });
    rmSync(tmpRepo, { recursive: true, force: true });
    rmSync(tmpV2qa, { recursive: true, force: true });
  }
}

// lint reads temporary locks and artifacts rather than repository files
{
  const tmpMath = mkdtempSync(path.join(os.tmpdir(), "v2qa-lint-temp-"));
  try {
    const relPrefix = "only-in-temp";
    const unit = minimalUnitConfig({
      paths: {
        questionBank: `${relPrefix}/bank.js`,
        lecture: `${relPrefix}/lecture.js`,
        locks: `${relPrefix}/locks.json`
      },
      reviewArtifacts: {
        dossier: `${relPrefix}/dossier.jsonl`,
        distractor: `${relPrefix}/distractor.md`,
        samples: `${relPrefix}/samples.md`
      },
      buildPipeline: [],
      legacyReleaseGate: `${relPrefix}/gate.mjs`
    });
    const base = path.join(tmpMath, relPrefix);
    mkdirSync(base, { recursive: true });
    writeFileSync(path.join(base, "gate.mjs"), "export default null;\n");
    const artifactContents = {
      "bank.js": "temp-bank-only\n",
      "lecture.js": "temp-lecture-only\n",
      "dossier.jsonl": "{}\n",
      "distractor.md": "# temp\n",
      "samples.md": "# temp\n"
    };
    for (const [name, content] of Object.entries(artifactContents)) {
      writeFileSync(path.join(base, name), content);
    }
    const locks = {
      distractor: sha256File(path.join(base, "distractor.md")),
      dossier: sha256File(path.join(base, "dossier.jsonl")),
      lecture: sha256File(path.join(base, "lecture.js")),
      questionBank: sha256File(path.join(base, "bank.js")),
      samples: sha256File(path.join(base, "samples.md"))
    };
    writeFileSync(path.join(base, "locks.json"), `${JSON.stringify(locks, null, 2)}\n`);

    const okResult = lintUnitConfig(unit, {
      mathRoot: tmpMath,
      repoRoot,
      fromDir: v2qaRoot
    });
    assert.equal(okResult.ok, true, okResult.violations.join("\n"));

    const failResult = lintUnitConfig(unit, { fromDir: v2qaRoot });
    assert.equal(failResult.ok, false);
    assert.ok(
      failResult.violations.some(v => v.includes("artifact missing: only-in-temp/")),
      failResult.violations.join("\n")
    );
  } finally {
    rmSync(tmpMath, { recursive: true, force: true });
  }
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

// later incremental authorization may omit prior fields without failure
{
  const batchA = {
    manifest: authorizedQuestionManifest({
      manifestId: "batch-a",
      entries: { "u09-s001-v001": ["text", "explanation"] },
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
  assert.equal(result.ok, true, result.violations.join("\n"));
}

// cumulative union retains prior authorization
{
  const batchA = {
    manifest: authorizedQuestionManifest({
      manifestId: "batch-a",
      entries: { "u09-s001-v001": ["text", "explanation"] },
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
  const cumulative = buildCumulativeAuth([batchA, batchB]);
  assert.deepEqual([...cumulative["u09-s001-v001"]].sort(), ["explanation", "text"]);
}

// JSON serializability matrix
assert.equal(isJsonSerializable(null), true);
assert.equal(isJsonSerializable("x"), true);
assert.equal(isJsonSerializable(true), true);
assert.equal(isJsonSerializable(0), true);
assert.equal(isJsonSerializable({ a: { b: [1, "x", false, null] } }), true);
assert.equal(isJsonSerializable(undefined), false);
assert.equal(isJsonSerializable(() => {}), false);
assert.equal(isJsonSerializable(Symbol("x")), false);
assert.equal(isJsonSerializable(1n), false);
assert.equal(isJsonSerializable(Number.NaN), false);
assert.equal(isJsonSerializable(Number.POSITIVE_INFINITY), false);
assert.equal(isJsonSerializable(Number.NEGATIVE_INFINITY), false);
assert.equal(isJsonSerializable(new Date()), false);
assert.equal(isJsonSerializable(new Map()), false);
assert.equal(isJsonSerializable(new Set()), false);
assert.equal(isJsonSerializable({ a: { b: undefined } }), false);

// shared plain object accepted
{
  const sharedObject = { value: 1 };
  assert.equal(isJsonSerializable({ first: sharedObject, second: sharedObject }), true);
}

// shared nested plain object accepted
{
  const inner = { value: 1 };
  assert.equal(isJsonSerializable({ first: { inner }, second: { inner } }), true);
}

// shared array accepted
{
  const sharedArray = [1, 2];
  assert.equal(isJsonSerializable({ first: sharedArray, second: sharedArray }), true);
}

// direct object cycle rejected
{
  const direct = {};
  direct.self = direct;
  assert.equal(isJsonSerializable(direct), false);
}

// indirect two-object cycle rejected
{
  const a = {};
  const b = { a };
  a.b = b;
  assert.equal(isJsonSerializable(a), false);
}

// array cycle rejected
{
  const cyclicArray = [];
  cyclicArray.push(cyclicArray);
  assert.equal(isJsonSerializable(cyclicArray), false);
}

// duplicate field names rejected
assert.throws(() =>
  validateManifest(
    authorizedQuestionManifest({
      entries: { "u09-s001-v001": ["explanation", "explanation"] },
      expected: { changedRecords: 1, changedFields: 2 }
    })
  )
);
assert.throws(() =>
  validateManifest(
    exactQuestionManifest({
      allowedFields: ["text", "text"]
    })
  )
);

// entity ID fields rejected from allowlists
assert.throws(() =>
  validateManifest(
    exactQuestionManifest({
      allowedFields: ["questionId", "text"]
    })
  )
);

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
    const result = lintUnitConfig(unit, { mathRoot: tmp, repoRoot, fromDir: v2qaRoot });
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
