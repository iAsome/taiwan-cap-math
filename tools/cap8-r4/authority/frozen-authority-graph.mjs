import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { canonicalJson, sha256 } from "../r4-core.mjs";
import {
  authorityGraphSha256,
  loadCurriculumSourceSnapshot,
  validateAuthorityGraph,
} from "./authority-graph.mjs";
import { materializeSubjectSkillPlan } from "./subject-skill-plan.mjs";
import { BIOLOGY_SKILL_PLAN } from "./skill-plans/biology.mjs";
import { CHINESE_SKILL_PLAN } from "./skill-plans/chinese.mjs";
import { CIVICS_SKILL_PLAN } from "./skill-plans/civics.mjs";
import { EARTH_SCIENCE_SKILL_PLAN } from "./skill-plans/earth-science.mjs";
import { ENGLISH_SKILL_PLAN } from "./skill-plans/english.mjs";
import { GEOGRAPHY_SKILL_PLAN } from "./skill-plans/geography.mjs";
import { HISTORY_SKILL_PLAN } from "./skill-plans/history.mjs";
import { PHYSICS_CHEMISTRY_SKILL_PLAN } from "./skill-plans/physics-chemistry.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..", "..");
const RAW_GRAPH_PATH = "tools/cap8-r4/authority/authority-graph.json";
const REVIEW_PATH = "tools/cap8-r4/authority/authority-node-review.json";
const OUTPUT_PATH = "tools/cap8-r4/authority/frozen-authority-graph.json";

const PLANS = Object.freeze([
  ENGLISH_SKILL_PLAN,
  CHINESE_SKILL_PLAN,
  GEOGRAPHY_SKILL_PLAN,
  HISTORY_SKILL_PLAN,
  CIVICS_SKILL_PLAN,
  BIOLOGY_SKILL_PLAN,
  PHYSICS_CHEMISTRY_SKILL_PLAN,
  EARTH_SCIENCE_SKILL_PLAN,
]);

const EXPECTED_SKILLS = Object.freeze({
  english: 320,
  chinese: 320,
  geography: 240,
  history: 240,
  civics: 240,
  biology: 220,
  physics_chemistry: 300,
  earth_science: 220,
});

async function readJson(repoRoot, relativePath) {
  return JSON.parse(await readFile(path.join(repoRoot, ...relativePath.split("/")), "utf8"));
}

function assertAcyclic(skills) {
  const prerequisites = new Map(skills.map((skill) => [skill.id, skill.prerequisites]));
  const visiting = new Set();
  const visited = new Set();
  function visit(id) {
    if (visited.has(id)) return;
    assert(!visiting.has(id), `authority skill prerequisite cycle at ${id}`);
    visiting.add(id);
    for (const prerequisite of prerequisites.get(id)) visit(prerequisite);
    visiting.delete(id);
    visited.add(id);
  }
  for (const id of prerequisites.keys()) visit(id);
}

export async function buildFrozenAuthorityGraph(repoRoot = REPO_ROOT) {
  const [rawGraph, review] = await Promise.all([
    readJson(repoRoot, RAW_GRAPH_PATH),
    readJson(repoRoot, REVIEW_PATH),
  ]);
  assert.equal(rawGraph.status, "scope-extracted-unreviewed");
  assert.equal(review.status, "scope-reviewed-authority-unmapped");
  assert.equal(review.authorityGraphSha256, authorityGraphSha256(rawGraph), "authority review is not bound to raw graph");

  const reviewById = new Map(review.nodes.map((node) => [node.authorityId, node]));
  assert.equal(reviewById.size, rawGraph.nodes.length, "authority review count mismatch");
  const nodes = rawGraph.nodes.map((node) => {
    const decision = reviewById.get(node.id);
    assert(decision, `${node.id}: reviewed scope decision missing`);
    assert.equal(decision.officialText, node.text, `${node.id}: reviewed text drift`);
    assert.equal(decision.scopeDecision, "required-fourth-stage", `${node.id}: scope is not accepted`);
    return {
      ...node,
      reviewStatus: "accepted",
      reviewedSubjects: decision.reviewedSubjects,
      assessmentRole: decision.assessmentRole,
      scopeDecision: decision.scopeDecision,
    };
  });
  const skills = PLANS.flatMap((plan) => materializeSubjectSkillPlan(plan, nodes).skills);
  assert.equal(skills.length, 2100);
  assert.equal(new Set(skills.map((skill) => skill.id)).size, skills.length, "duplicate frozen skill ID");
  assertAcyclic(skills);
  return {
    schemaVersion: rawGraph.schemaVersion,
    status: "frozen-reviewed",
    curriculumRegisterSha256: rawGraph.curriculumRegisterSha256,
    rawAuthorityGraphSha256: authorityGraphSha256(rawGraph),
    authorityNodeReviewSha256: sha256(canonicalJson(review)),
    sources: rawGraph.sources,
    nodes,
    skills,
    exclusions: rawGraph.exclusions,
  };
}

export async function validateFrozenAuthorityGraph(graph, repoRoot = REPO_ROOT) {
  const snapshot = await loadCurriculumSourceSnapshot();
  const standard = await validateAuthorityGraph(graph, snapshot, { repoRoot, requireFrozen: true });
  const expected = await buildFrozenAuthorityGraph(repoRoot);
  assert.deepEqual(graph, expected, "checked-in frozen authority graph is stale or manually altered");
  const bySubject = Object.fromEntries(Object.keys(EXPECTED_SKILLS).map((subject) => [
    subject,
    graph.skills.filter((skill) => skill.subject === subject).length,
  ]));
  assert.deepEqual(bySubject, EXPECTED_SKILLS);
  assertAcyclic(graph.skills);
  return { ...standard, bySubject };
}

async function main() {
  const graph = await buildFrozenAuthorityGraph();
  await validateFrozenAuthorityGraph(graph);
  await writeFile(path.join(REPO_ROOT, ...OUTPUT_PATH.split("/")), `${JSON.stringify(graph, null, 2)}\n`, "utf8");
  console.log(`frozen-authority-graph: OK - ${graph.nodes.length} nodes, ${graph.skills.length} skills`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
