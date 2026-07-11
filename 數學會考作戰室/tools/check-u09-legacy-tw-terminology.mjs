#!/usr/bin/env node
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const BASE_COMMIT = "2731a862c0b197882a733f4a0917b960e01562ef";
const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const REPO_ROOT = path.dirname(ROOT);

const OLD_PHRASE = "含第 20 次資料的那一组";
const NEW_PHRASE = "含第 20 次資料的那一組";

const FILES = [
  { rel: "數學會考作戰室/quiz-taxonomy.js", baseOld: 1, currentNew: 1 },
  { rel: "數學會考作戰室/lecture-taxonomy.js", baseOld: 1, currentNew: 1 },
  { rel: "數學會考作戰室/quiz-variant-bank.js", baseOld: 10, currentNew: 10 },
];

function countPhrase(text, phrase) {
  let count = 0;
  let pos = 0;
  while ((pos = text.indexOf(phrase, pos)) !== -1) {
    count++;
    pos += phrase.length;
  }
  return count;
}

function readBaseBytes(rel) {
  return execFileSync("git", ["show", `${BASE_COMMIT}:${rel}`], {
    cwd: REPO_ROOT,
    maxBuffer: 64 * 1024 * 1024,
  });
}

export function assertU09LegacyTwTerminology() {
  let totalReplacements = 0;

  for (const { rel, baseOld, currentNew } of FILES) {
    const baseBytes = readBaseBytes(rel);
    const baseText = baseBytes.toString("utf8");
    assert.equal(countPhrase(baseText, OLD_PHRASE), baseOld, `${rel} base old phrase`);

    const expectedBytes = Buffer.from(
      baseText.split(OLD_PHRASE).join(NEW_PHRASE),
      "utf8"
    );
    const currentBytes = fs.readFileSync(path.join(REPO_ROOT, rel));

    assert.ok(
      currentBytes.equals(expectedBytes),
      `${rel} current bytes must equal expected single-phrase replacement`
    );

    const currentText = currentBytes.toString("utf8");
    assert.equal(countPhrase(currentText, OLD_PHRASE), 0, `${rel} current old phrase`);
    assert.equal(countPhrase(currentText, NEW_PHRASE), currentNew, `${rel} current new phrase`);
    assert.ok(!currentText.includes("组"), `${rel} must not contain simplified 组`);

    totalReplacements += baseOld;
  }

  assert.equal(totalReplacements, 12, "total replacements");
  return { totalReplacements };
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
  const { totalReplacements } = assertU09LegacyTwTerminology();
  console.log(`check-u09-legacy-tw-terminology: OK — ${totalReplacements} exact replacements`);
}
