#!/usr/bin/env node
import assert from "node:assert/strict";
import { mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  assertAuthorizedFieldsDiff,
  assertExactPatchDiff,
  collectTopLevelFieldDiffs,
  sortDiffs
} from "../core/field-diff-core.mjs";
import { stableStringify } from "../core/deterministic-json.mjs";
import { assertByteIdentical } from "../core/byte-compare.mjs";
import { readLocksJson, sha256File, validateHashLocks } from "../core/hash-locks.mjs";
import {
  authorizedQuestionManifest,
  baseQuestionBank,
  exactQuestionManifest,
  minimalUnitConfig,
  questionRecord
} from "./fixtures.mjs";

const ID = "questionId";
const LABEL = "field-diff-core-test";

function authThrows(before, after, options) {
  assert.throws(() =>
    assertAuthorizedFieldsDiff({
      label: LABEL,
      before,
      after,
      idField: ID,
      entries: {},
      expected: { changedRecords: 0, changedFields: 0 },
      ...options
    })
  );
}

function exactThrows(before, after, manifest, options = {}) {
  assert.throws(() =>
    assertExactPatchDiff({
      label: LABEL,
      before,
      after,
      idField: ID,
      manifest,
      expected: manifest.expected,
      ...options
    })
  );
}

const baseBank = baseQuestionBank();

// authorized-fields valid diff
{
  const result = assertAuthorizedFieldsDiff({
    label: LABEL,
    before: [questionRecord()],
    after: [questionRecord({ explanation: "新解析" })],
    idField: ID,
    entries: { "u09-s001-v001": ["explanation"] },
    expected: { changedRecords: 1, changedFields: 1 }
  });
  assert.deepEqual(result.changedRecords, ["u09-s001-v001"]);
  assert.equal(result.changedFields, 1);
}

// authorized-fields unauthorized field
authThrows(baseBank, [questionRecord({ title: "新標題" }), baseBank[1]], {
  entries: { "u09-s001-v001": ["explanation"] },
  expected: { changedRecords: 1, changedFields: 1 }
});

// authorized-fields required field unchanged
authThrows([questionRecord()], [questionRecord()], {
  entries: { "u09-s001-v001": ["explanation"] },
  expected: { changedRecords: 1, changedFields: 1 }
});

// exact-patch valid diff
{
  const manifest = exactQuestionManifest();
  const result = assertExactPatchDiff({
    label: LABEL,
    before: [questionRecord()],
    after: [questionRecord({ explanation: "新解析" })],
    idField: ID,
    manifest,
    expected: manifest.expected
  });
  assert.deepEqual(result.changedRecords, ["u09-s001-v001"]);
}

// exact-patch wrong value
exactThrows(
  [questionRecord()],
  [questionRecord({ explanation: "錯誤解析" })],
  exactQuestionManifest()
);

// exact-patch unexpected field
exactThrows(
  [questionRecord()],
  [questionRecord({ explanation: "新解析", text: "新題幹" })],
  exactQuestionManifest()
);

// exact-patch with multiple authorized fields passes when all match
{
  const manifest = exactQuestionManifest({
    expected: { changedRecords: 1, changedFields: 2 },
    entries: {
      "u09-s001-v001": { explanation: "新解析", text: "新題幹" }
    }
  });
  assertExactPatchDiff({
    label: LABEL,
    before: [questionRecord()],
    after: [questionRecord({ explanation: "新解析", text: "新題幹" })],
    idField: ID,
    manifest,
    expected: manifest.expected
  });
}

// changed record outside manifest
exactThrows(
  baseBank,
  [baseBank[0], questionRecord({ questionId: "u09-s001-v002", text: "改動" })],
  exactQuestionManifest()
);

// record order change
authThrows(baseBank, [baseBank[1], baseBank[0]]);

// duplicate entity ID
authThrows([questionRecord(), questionRecord({ text: "other" })]);

// added field
authThrows(baseBank, [questionRecord({ futureField: "x" }), baseBank[1]]);

// removed field
{
  const beforeQ = questionRecord();
  const afterQ = questionRecord();
  delete afterQ.concept;
  authThrows([beforeQ, baseBank[1]], [afterQ, baseBank[1]]);
}

// unsorted deterministic diff output
{
  const before = [
    questionRecord({ questionId: "u09-s002-v001" }),
    questionRecord({ questionId: "u09-s001-v001" })
  ];
  const after = [
    questionRecord({ questionId: "u09-s002-v001", text: "B" }),
    questionRecord({ questionId: "u09-s001-v001", text: "A" })
  ];
  const diffs = collectTopLevelFieldDiffs(before, after, ID);
  assert.deepEqual(
    diffs.map(diff => diff.questionId),
    ["u09-s001-v001", "u09-s002-v001"]
  );
  assert.deepEqual(sortDiffs(diffs, ID), diffs);
}

// stable JSON preserves array order
{
  const value = { b: [3, 1, 2], a: { z: 1, y: [9, 8] } };
  const text = stableStringify(value);
  assert.equal(text, '{"a":{"y":[9,8],"z":1},"b":[3,1,2]}');
}

// byte compare pass/fail
assertByteIdentical("abc", "abc");
assert.throws(() => assertByteIdentical("abc", "abd"));

// opposite-bank byte-lock pass/fail via temp files
{
  const tmp = mkdtempSync(path.join(os.tmpdir(), "v2qa-byte-"));
  try {
    const abs = path.join(tmp, "bank.js");
    writeFileSync(abs, "window.BANK = [];\n");
    const bytes = readFileSync(abs);
    assertByteIdentical(bytes, bytes);
    writeFileSync(path.join(tmp, "other.js"), "window.BANK = [1];\n");
    assert.throws(() =>
      assertByteIdentical(readFileSync(abs), readFileSync(path.join(tmp, "other.js")))
    );
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
}

// lock validation pass and mismatch in temp dir
{
  const tmp = mkdtempSync(path.join(os.tmpdir(), "v2qa-lock-"));
  try {
    const mathRoot = tmp;
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
      }
    });
    const files = {
      "bank.js": "bank-a\n",
      "lecture.js": "lecture-a\n",
      "dossier.jsonl": "{}\n",
      "distractor.md": "# d\n",
      "samples.md": "# s\n"
    };
    for (const [name, content] of Object.entries(files)) {
      writeFileSync(path.join(mathRoot, name), content);
    }
    const locks = {
      distractor: sha256File(path.join(mathRoot, "distractor.md")),
      dossier: sha256File(path.join(mathRoot, "dossier.jsonl")),
      lecture: sha256File(path.join(mathRoot, "lecture.js")),
      questionBank: sha256File(path.join(mathRoot, "bank.js")),
      samples: sha256File(path.join(mathRoot, "samples.md"))
    };
    writeFileSync(path.join(mathRoot, "locks.json"), `${JSON.stringify(locks, null, 2)}\n`);
    readLocksJson(path.join(mathRoot, "locks.json"));
    validateHashLocks({
      unitConfig: unit,
      mathRoot,
      locksPath: path.join(mathRoot, "locks.json")
    });
    writeFileSync(path.join(mathRoot, "bank.js"), "bank-b\n");
    assert.throws(() =>
      validateHashLocks({
        unitConfig: unit,
        mathRoot,
        locksPath: path.join(mathRoot, "locks.json")
      })
    );
  } finally {
    rmSync(tmp, { recursive: true, force: true });
  }
}

// imports produce no output and no files
{
  const tmp = mkdtempSync(path.join(os.tmpdir(), "v2qa-import-"));
  const marker = path.join(tmp, "marker.txt");
  writeFileSync(marker, "ok");
  const modules = [
    "../configs/schema.mjs",
    "../core/git-at-commit.mjs",
    "../core/pack-loader.mjs",
    "../core/field-diff-core.mjs",
    "../core/byte-compare.mjs",
    "../core/hash-locks.mjs",
    "../core/deterministic-json.mjs",
    "../checkers/question-diff.mjs",
    "../checkers/lecture-diff.mjs",
    "../checkers/manifest-lint.mjs"
  ];
  const testDir = path.dirname(fileURLToPath(import.meta.url));
  for (const rel of modules) {
    await import(new URL(rel, import.meta.url).href);
  }
  assert.equal(readFileSync(marker, "utf8"), "ok");
  rmSync(tmp, { recursive: true, force: true });
}

// malformed manifest kind rejected by schema import path
{
  const { validateManifest } = await import("../configs/schema.mjs");
  assert.throws(() =>
    validateManifest({
      manifestId: "bad",
      unitId: "u09",
      entity: "question",
      kind: "unknown",
      baseCommit: "d60bdc261c9210465a0a59ede7028c933e305e7f",
      expected: { changedRecords: 0, changedFields: 0 },
      entries: {}
    })
  );
}

console.log("field-diff-core.test.mjs: OK");
