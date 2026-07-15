import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { materializeSubjectSkillPlan } from "./subject-skill-plan.mjs";
import { CHINESE_SKILL_PLAN } from "./skill-plans/chinese.mjs";
import { BIOLOGY_SKILL_PLAN } from "./skill-plans/biology.mjs";
import { CIVICS_SKILL_PLAN } from "./skill-plans/civics.mjs";
import { ENGLISH_SKILL_PLAN } from "./skill-plans/english.mjs";
import { GEOGRAPHY_SKILL_PLAN } from "./skill-plans/geography.mjs";
import { HISTORY_SKILL_PLAN } from "./skill-plans/history.mjs";
import { PHYSICS_CHEMISTRY_SKILL_PLAN } from "./skill-plans/physics-chemistry.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));

async function authorityNodes() {
  const graph = JSON.parse(await readFile(path.join(HERE, "authority-graph.json"), "utf8"));
  const review = JSON.parse(await readFile(path.join(HERE, "authority-node-review.json"), "utf8"));
  const reviewedSubjects = new Map(review.nodes.map((node) => [node.authorityId, node.reviewedSubjects]));
  assert.equal(reviewedSubjects.size, graph.nodes.length);
  return graph.nodes.map((node) => ({ ...node, reviewedSubjects: reviewedSubjects.get(node.id) }));
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
  const authorityIds = new Set(nodes.filter((node) => node.reviewedSubjects.includes("chinese")).map((node) => node.id));
  const linked = new Set(result.skills.flatMap((skill) => skill.authorityRefs));
  assert.deepEqual([...linked].sort(), [...authorityIds].sort());
  const skillIds = new Set(result.skills.map((skill) => skill.id));
  for (const skill of result.skills) {
    assert(skill.authorityRefs.length > 0, `${skill.id}: authority refs missing`);
    assert(skill.prerequisites.every((id) => skillIds.has(id)), `${skill.id}: invalid prerequisite`);
  }
});

test("Geography plan materializes 240 stable atomic skills across all required families", async () => {
  const result = materializeSubjectSkillPlan(GEOGRAPHY_SKILL_PLAN, await authorityNodes());
  const lock = await scopeLock("GEOGRAPHY_SCOPE_LOCK_R4.json");
  assert.equal(result.subject, "geography");
  assert.equal(result.families, 36);
  assert.equal(result.authorityNodes, 94);
  assert.equal(result.skills.length, lock.minimumAtomicSkills);
  assert.deepEqual(GEOGRAPHY_SKILL_PLAN.families.map((family) => family.title), lock.requiredTopicFamilies);
  assert.equal(result.skills[0].id, "GEO_R4_S001");
  assert.equal(result.skills.at(-1).id, "GEO_R4_S240");
  assert.equal(new Set(result.skills.map((skill) => skill.title)).size, 240);
});

test("Geography plan covers every applicable official node and has valid prerequisites", async () => {
  const nodes = await authorityNodes();
  const result = materializeSubjectSkillPlan(GEOGRAPHY_SKILL_PLAN, nodes);
  const authorityIds = new Set(nodes.filter((node) => node.reviewedSubjects.includes("geography")).map((node) => node.id));
  const linked = new Set(result.skills.flatMap((skill) => skill.authorityRefs));
  assert.deepEqual([...linked].sort(), [...authorityIds].sort());
  const skillIds = new Set(result.skills.map((skill) => skill.id));
  for (const skill of result.skills) {
    assert(skill.authorityRefs.length > 0, `${skill.id}: authority refs missing`);
    assert(skill.prerequisites.every((id) => skillIds.has(id)), `${skill.id}: invalid prerequisite`);
  }
});

test("History plan materializes 240 stable atomic skills across all required families", async () => {
  const result = materializeSubjectSkillPlan(HISTORY_SKILL_PLAN, await authorityNodes());
  const lock = await scopeLock("HISTORY_SCOPE_LOCK_R4.json");
  assert.equal(result.subject, "history");
  assert.equal(result.families, 36);
  assert.equal(result.authorityNodes, 94);
  assert.equal(result.skills.length, lock.minimumAtomicSkills);
  assert.deepEqual(HISTORY_SKILL_PLAN.families.map((family) => family.title), lock.requiredTopicFamilies);
  assert.equal(result.skills[0].id, "HIS_R4_S001");
  assert.equal(result.skills.at(-1).id, "HIS_R4_S240");
  assert.equal(new Set(result.skills.map((skill) => skill.title)).size, 240);
});

test("History plan covers every applicable official node and has valid prerequisites", async () => {
  const nodes = await authorityNodes();
  const result = materializeSubjectSkillPlan(HISTORY_SKILL_PLAN, nodes);
  const authorityIds = new Set(nodes.filter((node) => node.reviewedSubjects.includes("history")).map((node) => node.id));
  const linked = new Set(result.skills.flatMap((skill) => skill.authorityRefs));
  assert.deepEqual([...linked].sort(), [...authorityIds].sort());
  const skillIds = new Set(result.skills.map((skill) => skill.id));
  for (const skill of result.skills) {
    assert(skill.authorityRefs.length > 0, `${skill.id}: authority refs missing`);
    assert(skill.prerequisites.every((id) => skillIds.has(id)), `${skill.id}: invalid prerequisite`);
  }
});

test("Civics plan materializes 240 stable atomic skills across all required families", async () => {
  const result = materializeSubjectSkillPlan(CIVICS_SKILL_PLAN, await authorityNodes());
  const lock = await scopeLock("CIVICS_SCOPE_LOCK_R4.json");
  assert.equal(result.subject, "civics");
  assert.equal(result.families, 36);
  assert.equal(result.authorityNodes, 100);
  assert.equal(result.skills.length, lock.minimumAtomicSkills);
  assert.deepEqual(CIVICS_SKILL_PLAN.families.map((family) => family.title), lock.requiredTopicFamilies);
  assert.equal(result.skills[0].id, "CIV_R4_S001");
  assert.equal(result.skills.at(-1).id, "CIV_R4_S240");
  assert.equal(new Set(result.skills.map((skill) => skill.title)).size, 240);
});

test("Civics plan covers every applicable official node and has valid prerequisites", async () => {
  const nodes = await authorityNodes();
  const result = materializeSubjectSkillPlan(CIVICS_SKILL_PLAN, nodes);
  const authorityIds = new Set(nodes.filter((node) => node.reviewedSubjects.includes("civics")).map((node) => node.id));
  const linked = new Set(result.skills.flatMap((skill) => skill.authorityRefs));
  assert.deepEqual([...linked].sort(), [...authorityIds].sort());
  const skillIds = new Set(result.skills.map((skill) => skill.id));
  for (const skill of result.skills) {
    assert(skill.authorityRefs.length > 0, `${skill.id}: authority refs missing`);
    assert(skill.prerequisites.every((id) => skillIds.has(id)), `${skill.id}: invalid prerequisite`);
  }
});

test("Biology plan materializes 220 stable atomic skills across all required families", async () => {
  const result = materializeSubjectSkillPlan(BIOLOGY_SKILL_PLAN, await authorityNodes());
  const lock = await scopeLock("BIOLOGY_SCOPE_LOCK_R4.json");
  assert.equal(result.subject, "biology");
  assert.equal(result.families, 30);
  assert.equal(result.authorityNodes, 80);
  assert.equal(result.skills.length, lock.minimumAtomicSkills);
  assert.deepEqual(BIOLOGY_SKILL_PLAN.families.map((family) => family.title), lock.requiredTopicFamilies);
  assert.equal(result.skills[0].id, "BIO_R4_S001");
  assert.equal(result.skills.at(-1).id, "BIO_R4_S220");
  assert.equal(new Set(result.skills.map((skill) => skill.title)).size, 220);
});

test("Biology plan covers every applicable official node and has valid prerequisites", async () => {
  const nodes = await authorityNodes();
  const result = materializeSubjectSkillPlan(BIOLOGY_SKILL_PLAN, nodes);
  const authorityIds = new Set(nodes.filter((node) => node.reviewedSubjects.includes("biology")).map((node) => node.id));
  const linked = new Set(result.skills.flatMap((skill) => skill.authorityRefs));
  assert.deepEqual([...linked].sort(), [...authorityIds].sort());
  const skillIds = new Set(result.skills.map((skill) => skill.id));
  for (const skill of result.skills) {
    assert(skill.authorityRefs.length > 0, `${skill.id}: authority refs missing`);
    assert(skill.prerequisites.every((id) => skillIds.has(id)), `${skill.id}: invalid prerequisite`);
  }
});

test("Physics/Chemistry plan materializes 300 stable atomic skills across all required families", async () => {
  const result = materializeSubjectSkillPlan(PHYSICS_CHEMISTRY_SKILL_PLAN, await authorityNodes());
  const lock = await scopeLock("PHYSICS_CHEMISTRY_SCOPE_LOCK_R4.json");
  assert.equal(result.subject, "physics_chemistry");
  assert.equal(result.families, 40);
  assert.equal(result.authorityNodes, 141);
  assert.equal(result.skills.length, lock.minimumAtomicSkills);
  assert.deepEqual(PHYSICS_CHEMISTRY_SKILL_PLAN.families.map((family) => family.title), lock.requiredTopicFamilies);
  assert.equal(result.skills[0].id, "PHYCHM_R4_S001");
  assert.equal(result.skills.at(-1).id, "PHYCHM_R4_S300");
  assert.equal(new Set(result.skills.map((skill) => skill.title)).size, 300);
});

test("Physics/Chemistry plan covers every applicable official node and has valid prerequisites", async () => {
  const nodes = await authorityNodes();
  const result = materializeSubjectSkillPlan(PHYSICS_CHEMISTRY_SKILL_PLAN, nodes);
  const authorityIds = new Set(nodes
    .filter((node) => node.reviewedSubjects.includes("physics_chemistry"))
    .map((node) => node.id));
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
  const authorityIds = new Set(nodes.filter((node) => node.reviewedSubjects.includes("english")).map((node) => node.id));
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

test("skill-plan validation rejects unreviewed subject ownership", async () => {
  const graph = JSON.parse(await readFile(path.join(HERE, "authority-graph.json"), "utf8"));
  assert.throws(() => materializeSubjectSkillPlan(ENGLISH_SKILL_PLAN, graph.nodes), /reviewed subject ownership is required/);
});
