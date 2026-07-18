import assert from "node:assert/strict";
import { readdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const UNITS = Object.freeze(Array.from({ length: 30 }, (_, index) => `EARTH_R4_U${String(index + 1).padStart(2, "0")}`));

export async function validateEarthR4Sources({ sourceRoot = path.join(HERE, "units") } = {}) {
  const filenames = (await readdir(sourceRoot))
    .filter((name) => /^EARTH_R4_U\d{2}\.mjs$/u.test(name))
    .sort((a, b) => a.localeCompare(b, "en"));
  assert.deepEqual(filenames, UNITS.map((unitId) => `${unitId}.mjs`), "Earth Science source set must be exactly U01-U30");

  const ids = new Set();
  let skills = 0;
  let lectures = 0;
  let questions = 0;
  let stimuli = 0;
  for (const unitId of UNITS) {
    const url = pathToFileURL(path.join(sourceRoot, `${unitId}.mjs`));
    const source = (await import(url.href)).EARTH_SCIENCE_UNIT_SOURCE;
    assert(source && source.unitId === unitId, `${unitId}: invalid authoritative source export`);
    const skillIds = Object.keys(source.skillTitles ?? {});
    assert.equal(source.lectures.length, skillIds.length, `${unitId}: one lecture per skill required`);
    assert.equal(source.questions.length, skillIds.length * 12, `${unitId}: twelve direct questions per skill required`);
    assert.equal(source.stimuli.length, skillIds.length, `${unitId}: one stimulus per skill required`);
    assert.equal(source.stimulusQuestions.length, skillIds.length * 3, `${unitId}: three stimulus questions per skill required`);
    for (const record of [...source.lectures, ...source.questions, ...source.stimuli, ...source.stimulusQuestions]) {
      assert(!ids.has(record.id), `${record.id}: duplicate authoritative record ID`);
      ids.add(record.id);
    }
    skills += skillIds.length;
    lectures += source.lectures.length;
    questions += source.questions.length + source.stimulusQuestions.length;
    stimuli += source.stimuli.length;
  }
  assert.deepEqual({ skills, lectures, questions, stimuli }, { skills: 220, lectures: 220, questions: 3300, stimuli: 220 });
  return { units: UNITS.length, skills, lectures, questions, stimuli };
}

async function main() {
  const result = await validateEarthR4Sources();
  console.log(`validate-earth-r4-sources: OK - ${result.units} units, ${result.skills} skills, ${result.lectures} lectures, ${result.questions} questions, ${result.stimuli} stimuli; no files written`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
