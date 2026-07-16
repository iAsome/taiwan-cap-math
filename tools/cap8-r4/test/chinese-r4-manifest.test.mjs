import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { productionFloor, scopeLocks, sha256 } from "../r4-core.mjs";
import { discoverSubjectArtifacts, verifyExternalFinalEvidence } from "../run-full-release-gate.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..", "..", "..");
const SUBJECT_ROOT = path.join(ROOT, "國文會考作戰室", "r4");
const EVIDENCE_ROOT = path.join(ROOT, "tools", "cap8-r4", "evidence", "chinese");

const [fullFloor, fullLocks] = await Promise.all([productionFloor(), scopeLocks()]);
const discovered = await discoverSubjectArtifacts({
  repoRoot: ROOT,
  floor: { chinese: fullFloor.chinese },
  locks: { chinese: fullLocks.chinese },
  expectedSubjects: ["chinese"],
});
assert.equal(discovered.subjects.length, 1);
assert.equal(discovered.artifacts.length, 6290);

const manifest = JSON.parse(await readFile(path.join(SUBJECT_ROOT, "content-manifest-v4.json"), "utf8"));
assert.equal(manifest.authorityGraphSha256, sha256(await readFile(path.join(ROOT, "tools", "cap8-r4", "authority", "frozen-authority-graph.json"))));
assert.equal(manifest.buildSha256, sha256(Buffer.from(JSON.stringify(manifest.artifacts), "utf8")));

const byType = Map.groupBy(discovered.artifacts, ({ type }) => type);
assert.deepEqual(Object.fromEntries([...byType].map(([type, values]) => [type, values.length])), {
  authority: 61,
  skill: 320,
  lecture: 320,
  question: 5120,
  stimulus: 320,
  ui: 125,
  asset: 24,
});

for (const descriptor of byType.get("stimulus")) {
  const record = JSON.parse(await readFile(path.join(ROOT, ...descriptor.path.split("/")), "utf8"));
  assert.equal(record.id, descriptor.id);
  assert.equal(record.subject, "chinese");
}

const writing = byType.get("ui").filter(({ id }) => id.startsWith("CHI_R4_WRITE_"));
assert.equal(writing.length, manifest.counts.writingTasks);
for (const descriptor of writing) {
  const record = JSON.parse(await readFile(path.join(ROOT, ...descriptor.path.split("/")), "utf8"));
  assert.equal(record.id, descriptor.id);
  assert.equal(record.subject, "chinese");
}

const assetIndex = new Map(JSON.parse(await readFile(path.join(SUBJECT_ROOT, "runtime", "assets.json"), "utf8")).map((value) => [value.id, value]));
for (const descriptor of byType.get("asset")) {
  const metadata = assetIndex.get(descriptor.id);
  assert(metadata, `${descriptor.id}: asset metadata missing`);
  assert.equal(metadata.subject, "chinese");
  assert.equal(descriptor.path, `國文會考作戰室/r4/runtime/${metadata.file}`);
  assert.equal(descriptor.sha256, sha256(await readFile(path.join(ROOT, ...descriptor.path.split("/")))));
}

const evidence = await verifyExternalFinalEvidence({
  artifacts: discovered.artifacts,
  audits: JSON.parse(await readFile(path.join(EVIDENCE_ROOT, "final-audit-records.json"), "utf8")),
  corpus: await readFile(path.join(EVIDENCE_ROOT, "student-visible-corpus.txt")),
  ranges: JSON.parse(await readFile(path.join(EVIDENCE_ROOT, "student-visible-corpus-ranges.json"), "utf8")),
});
assert.equal(evidence.artifacts, 5909);
assert.equal(evidence.acceptedAudits, 5909);
assert.equal(evidence.corpusRanges, 5909);

console.log(JSON.stringify({
  subject: "chinese",
  discoveredArtifacts: discovered.artifacts.length,
  manifestTypes: Object.fromEntries([...byType].map(([type, values]) => [type, values.length])),
  writingTasks: writing.length,
  finalEvidence: evidence,
}));
