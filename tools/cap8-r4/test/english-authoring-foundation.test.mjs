import assert from "node:assert/strict";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import {
  buildSubjectFoundationRecords,
  validateSubjectFoundationRecords,
} from "../subject-authoring-foundation.mjs";
import { validateAuthoringRecord } from "../authoring-validator.mjs";
import { classifyCurrentSitePath } from "../inventory-current-site.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..", "..", "..");
const GRAPH_PATH = path.join(ROOT, "tools", "cap8-r4", "authority", "frozen-authority-graph.json");
const ENGLISH_R4 = path.join(ROOT, "英文會考作戰室", "r4");

async function graph() {
  return JSON.parse(await readFile(GRAPH_PATH, "utf8"));
}

test("English foundation binds all frozen authority nodes and atomic skills", async () => {
  const records = buildSubjectFoundationRecords(await graph(), "english");
  assert.deepEqual(await validateSubjectFoundationRecords(records), { authorityNodes: 116, skills: 320, units: 48 });
  assert.equal(records.skills[0].id, "ENG_R4_S001");
  assert.equal(records.skills.at(-1).id, "ENG_R4_S320");
});

test("checked-in English authority and skill records match the frozen graph", async () => {
  const expected = buildSubjectFoundationRecords(await graph(), "english");
  for (const [kind, records] of [["authority", expected.authority], ["skill", expected.skills]]) {
    const directory = path.join(ENGLISH_R4, "runtime", kind === "skill" ? "skills" : "authority");
    const files = (await readdir(directory)).filter((name) => name.endsWith(".json")).sort();
    assert.deepEqual(files, records.map((record) => `${record.id}.json`));
    for (const record of records) {
      const checkedIn = JSON.parse(await readFile(path.join(directory, `${record.id}.json`), "utf8"));
      assert.deepEqual(checkedIn, record);
      await validateAuthoringRecord(kind, checkedIn);
    }
  }
});

test("English binding is honest about unfinished student content", async () => {
  const binding = JSON.parse(await readFile(path.join(ENGLISH_R4, "source", "authority-skill-binding.json"), "utf8"));
  assert.equal(binding.subject, "english");
  assert.deepEqual(binding.counts, { authorityNodes: 116, skills: 320, units: 48 });
  assert.deepEqual(binding.contentStatus, {
    lecturesComplete: false,
    skillQuestionsComplete: false,
    stimuliComplete: false,
    manifestEligible: false,
  });
});

test("R4 authoring artifacts are retained without implying release acceptance", () => {
  assert.deepEqual(classifyCurrentSitePath("英文會考作戰室/r4/runtime/skills/ENG_R4_S001.json"), {
    decision: "KEEP",
    reason: "R4 authoring artifact; production use still requires a complete manifest and final audit",
  });
});
