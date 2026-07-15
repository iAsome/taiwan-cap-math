import assert from "node:assert/strict";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { validateAuthoringRecord } from "./authoring-validator.mjs";
import { sha256 } from "./r4-core.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const GRAPH_PATH = path.join(HERE, "authority", "frozen-authority-graph.json");

const SUBJECTS = Object.freeze({
  english: { folder: "英文會考作戰室", authorityNodes: 116, skills: 320 },
  chinese: { folder: "國文會考作戰室", authorityNodes: 61, skills: 320 },
  geography: { folder: "地理會考作戰室", authorityNodes: 94, skills: 240 },
  history: { folder: "歷史會考作戰室", authorityNodes: 94, skills: 240 },
  civics: { folder: "公民會考作戰室", authorityNodes: 100, skills: 240 },
  biology: { folder: "生物會考作戰室", authorityNodes: 80, skills: 220 },
  physics_chemistry: { folder: "理化會考作戰室", authorityNodes: 141, skills: 300 },
  earth_science: { folder: "地科會考作戰室", authorityNodes: 69, skills: 220 },
});

function compareId(a, b) {
  return a.id.localeCompare(b.id, "en");
}

function authorityRecord(node, subject) {
  return {
    id: node.id,
    subject,
    kind: node.kind,
    code: node.code,
    text: node.text,
    sourceIds: [node.sourceId],
    applicable: true,
  };
}

function skillRecord(skill) {
  return {
    id: skill.id,
    subject: skill.subject,
    unitId: skill.unitId,
    title: skill.title,
    authorityRefs: [...skill.authorityRefs],
    prerequisites: [...skill.prerequisites],
  };
}

export function buildSubjectFoundationRecords(graph, subject) {
  const expected = SUBJECTS[subject];
  assert(expected, `unsupported production subject: ${subject}`);
  assert.equal(graph.status, "frozen-reviewed", "authority graph must be frozen and reviewed");
  const authority = graph.nodes
    .filter((node) => node.reviewedSubjects.includes(subject))
    .map((node) => authorityRecord(node, subject))
    .sort(compareId);
  const skills = graph.skills.filter((skill) => skill.subject === subject).map(skillRecord).sort(compareId);
  assert.equal(authority.length, expected.authorityNodes, `${subject}: authority-node count drift`);
  assert.equal(skills.length, expected.skills, `${subject}: skill count drift`);
  assert.equal(new Set(authority.map((record) => record.id)).size, authority.length);
  assert.equal(new Set(skills.map((record) => record.id)).size, skills.length);
  const authorityIds = new Set(authority.map((record) => record.id));
  const skillIds = new Set(skills.map((record) => record.id));
  for (const skill of skills) {
    assert(skill.authorityRefs.every((id) => authorityIds.has(id)), `${skill.id}: unknown authority ref`);
    assert(skill.prerequisites.every((id) => skillIds.has(id)), `${skill.id}: unknown prerequisite`);
  }
  const units = [];
  for (const skill of skills) {
    let unit = units.at(-1);
    if (unit?.unitId !== skill.unitId) {
      unit = { unitId: skill.unitId, skillIds: [], authorityRefs: [] };
      units.push(unit);
    }
    unit.skillIds.push(skill.id);
    unit.authorityRefs = [...new Set([...unit.authorityRefs, ...skill.authorityRefs])];
  }
  return { authority, skills, units };
}

export async function validateSubjectFoundationRecords(records) {
  for (const record of records.authority) await validateAuthoringRecord("authority", record);
  for (const record of records.skills) await validateAuthoringRecord("skill", record);
  return { authorityNodes: records.authority.length, skills: records.skills.length, units: records.units.length };
}

async function writeRecordDirectory(directory, records) {
  await mkdir(directory, { recursive: true });
  const expected = new Set(records.map((record) => `${record.id}.json`));
  const existing = (await readdir(directory, { withFileTypes: true })).filter((entry) => entry.isFile() && entry.name.endsWith(".json"));
  assert(existing.every((entry) => expected.has(entry.name)), `${directory}: stale record must be reviewed before removal`);
  await Promise.all(records.map((record) =>
    writeFile(path.join(directory, `${record.id}.json`), `${JSON.stringify(record, null, 2)}\n`, "utf8")));
}

export async function writeSubjectFoundation(subject, { repoRoot = REPO_ROOT } = {}) {
  const graphBytes = await readFile(GRAPH_PATH);
  const graph = JSON.parse(graphBytes);
  const records = buildSubjectFoundationRecords(graph, subject);
  const counts = await validateSubjectFoundationRecords(records);
  const subjectRoot = path.resolve(repoRoot, SUBJECTS[subject].folder);
  assert(subjectRoot.startsWith(`${path.resolve(repoRoot)}${path.sep}`), "subject output escaped repository root");
  const r4Root = path.join(subjectRoot, "r4");
  await Promise.all([
    writeRecordDirectory(path.join(r4Root, "runtime", "authority"), records.authority),
    writeRecordDirectory(path.join(r4Root, "runtime", "skills"), records.skills),
  ]);
  const binding = {
    schemaVersion: "cap8-r4-subject-authority-skill-binding-v1",
    subject,
    status: "frozen-authority-and-skill-records-built",
    authorityGraph: {
      path: "tools/cap8-r4/authority/frozen-authority-graph.json",
      sha256: sha256(graphBytes),
      canonicalSha256: graph.sha256 ?? null,
    },
    counts,
    units: records.units,
    contentStatus: {
      lecturesComplete: false,
      skillQuestionsComplete: false,
      stimuliComplete: false,
      manifestEligible: false,
    },
  };
  await mkdir(path.join(r4Root, "source"), { recursive: true });
  await writeFile(path.join(r4Root, "source", "authority-skill-binding.json"), `${JSON.stringify(binding, null, 2)}\n`, "utf8");
  return { ...counts, folder: SUBJECTS[subject].folder };
}

async function main() {
  const subject = process.argv[2];
  assert(subject, "usage: node tools/cap8-r4/subject-authoring-foundation.mjs <subject>");
  const result = await writeSubjectFoundation(subject);
  console.log(`subject-authoring-foundation: OK - ${subject}, ${result.authorityNodes} authority nodes, ${result.skills} skills`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
