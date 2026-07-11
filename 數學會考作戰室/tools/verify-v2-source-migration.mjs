#!/usr/bin/env node
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import vm from "node:vm";

const mathRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const repoRoot = path.dirname(mathRoot);
const currentUnits = new Set(["u01", "u02", "u03", "u04", "u05", "u06", "u07", "u09"]);
const historical = { u08: "56a55474dbcbdb65309eb83127e5280b358d168f", u10: "8c54029901b590ef9dc725c5da8ed0570488cf63" };

function loadBrowserFile(source, key) {
  const context = { window: {} };
  vm.runInNewContext(source, context);
  return JSON.parse(JSON.stringify(context.window[key]));
}

function baseline(unitId, kind) {
  const upper = unitId.toUpperCase();
  const file = `math-${kind}-v2-${unitId}.js`;
  const key = `MATH_${kind === "question-bank" ? "QUESTION_BANK" : "LECTURE"}_V2_${upper}`;
  const source = currentUnits.has(unitId)
    ? readFileSync(path.join(mathRoot, "v2", file), "utf8")
    : execFileSync("git", ["show", `${historical[unitId]}:數學會考作戰室/v2/${file}`], { cwd: repoRoot, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
  return loadBrowserFile(source, key);
}

export async function verifySourceMigration() {
  let questions = 0, lectures = 0;
  for (const unitId of [...currentUnits, ...Object.keys(historical)].sort()) {
    const source = await import(`./v2-content/units/${unitId}/index.mjs`);
    assert.deepEqual(source.QUESTIONS, baseline(unitId, "question-bank"), `${unitId} questions changed during source migration`);
    assert.deepEqual(source.LECTURES, baseline(unitId, "lecture"), `${unitId} lectures changed during source migration`);
    const allowed = new Set(source.UNIT.topics.flatMap(topic => topic.skills.map(skill => skill.skillId)));
    for (const record of [...source.QUESTIONS, ...source.LECTURES]) assert(allowed.has(record.skillId), `${unitId} unmapped skill ${record.skillId}`);
    questions += source.QUESTIONS.length; lectures += source.LECTURES.length;
  }
  return { units: 10, questions, lectures };
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) console.log(JSON.stringify(await verifySourceMigration()));
