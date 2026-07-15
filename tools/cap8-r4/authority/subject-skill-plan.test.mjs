import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { materializeSubjectSkillPlan } from "./subject-skill-plan.mjs";
import { CHINESE_SKILL_PLAN } from "./skill-plans/chinese.mjs";
import { ENGLISH_SKILL_PLAN } from "./skill-plans/english.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));

async function authorityNodes() {
  const graph = JSON.parse(await readFile(path.join(HERE, "authority-graph.json"), "utf8"));
  return graph.nodes;
}

async function scopeLock(fileName) {
  return JSON.parse(await readFile(path.join(
    HERE,
    "..",
    "specification",
    "taiwan-cap-8-subject-one-shot-codex-pack-r4",
    "locks",
    fileName,
  ), "utf8"));
}

test("English plan materializes 320 stable atomic skills across all required families", async () => {
  const result = materializeSubjectSkillPlan(ENGLISH_SKILL_PLAN, await authorityNodes());
  const lock = await scopeLock("ENGLISH_SCOPE_LOCK_R4.json");
  assert.equal(result.subject, "english");
  assert.equal(result.families, 48);
  assert.equal(result.authorityNodes, 116);
  assert.equal(result.skills.length, lock.minimumAtomicSkills);
  assert.deepEqual(ENGLISH_SKILL_PLAN.families.map((family) => family.title), lock.requiredTopicFamilies);
  assert.equal(result.skills[0].id, "ENG_R4_S001");
  assert.equal(result.skills.at(-1).id, "ENG_R4_S320");
  assert.equal(new Set(result.skills.map((skill) => skill.title)).size, 320);
});

test("Chinese plan materializes 320 stable atomic skills across all required families", async () => {
  const result = materializeSubjectSkillPlan(CHINESE_SKILL_PLAN, await authorityNodes());
  const lock = await scopeLock("CHINESE_SCOPE_LOCK_R4.json");
  assert.equal(result.subject, "chinese");
  assert.equal(result.families, 48);
  assert.equal(result.authorityNodes, 61);
  assert.equal(result.skills.length, lock.minimumAtomicSkills);
  assert.deepEqual(CHINESE_SKILL_PLAN.families.map((family) => family.title), lock.requiredTopicFamilies);
  assert.equal(result.skills[0].id, "CHI_R4_S001");
  assert.equal(result.skills.at(-1).id, "CHI_R4_S320");
  assert.equal(new Set(result.skills.map((skill) => skill.title)).size, 320);
});

test("Chinese plan covers every applicable official node and has valid prerequisites", async () => {
  const nodes = await authorityNodes();
  const result = materializeSubjectSkillPlan(CHINESE_SKILL_PLAN, nodes);
  const authorityIds = new Set(nodes.filter((node) => node.subjects.includes("chinese")).map((node) => node.id));
  const linked = new Set(result.skills.flatMap((skill) => skill.authorityRefs));
  assert.deepEqual([...linked].sort(), [...authorityIds].sort());
  const skillIds = new Set(result.skills.map((skill) => skill.id));
  for (const skill of result.skills) {
    assert(skill.authorityRefs.length > 0, `${skill.id}: authority refs missing`);
    assert(skill.prerequisites.every((id) => skillIds.has(id)), `${skill.id}: invalid prerequisite`);
  }
});

test("English plan covers every applicable official node and has valid prerequisites", async () => {
  const nodes = await authorityNodes();
  const result = materializeSubjectSkillPlan(ENGLISH_SKILL_PLAN, nodes);
  const authorityIds = new Set(nodes.filter((node) => node.subjects.includes("english")).map((node) => node.id));
  const linked = new Set(result.skills.flatMap((skill) => skill.authorityRefs));
  assert.deepEqual([...linked].sort(), [...authorityIds].sort());
  const skillIds = new Set(result.skills.map((skill) => skill.id));
  for (const skill of result.skills) {
    assert(skill.authorityRefs.length > 0, `${skill.id}: authority refs missing`);
    assert(skill.prerequisites.every((id) => skillIds.has(id)), `${skill.id}: invalid prerequisite`);
  }
});

test("skill-plan validation fails closed on an orphan authority node", async () => {
  const nodes = await authorityNodes();
  const plan = structuredClone(ENGLISH_SKILL_PLAN);
  for (const family of plan.families) family.authorityCodes = family.authorityCodes.filter((code) => code !== "Aa-Ⅳ-1");
  assert.throws(() => materializeSubjectSkillPlan(plan, nodes), /orphan authority nodes/);
});
