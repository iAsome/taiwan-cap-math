import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const PACKAGE_ROOT = path.join(
  HERE,
  "specification",
  "taiwan-cap-8-subject-one-shot-codex-pack-r4",
);

export const SUBJECTS = Object.freeze([
  "english",
  "chinese",
  "geography",
  "history",
  "civics",
  "biology",
  "physics_chemistry",
  "earth_science",
]);

function sortValue(value) {
  if (Array.isArray(value)) return value.map(sortValue);
  if (!value || typeof value !== "object") return value;
  return Object.fromEntries(
    Object.keys(value)
      .sort((a, b) => a.localeCompare(b, "en"))
      .map((key) => [key, sortValue(value[key])]),
  );
}

export function canonicalJson(value) {
  return JSON.stringify(sortValue(value));
}

export function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

export function withoutKey(value, key) {
  assert(value && typeof value === "object" && !Array.isArray(value), "expected an object");
  return Object.fromEntries(Object.entries(value).filter(([name]) => name !== key));
}

export function artifactSha256(artifact) {
  return sha256(canonicalJson(withoutKey(artifact, "finalAudit")));
}

export function auditRecordSha256(record) {
  return sha256(canonicalJson(withoutKey(record, "auditRecordSha256")));
}

export function verifyFinalAuditBinding(artifact) {
  const audit = artifact?.finalAudit;
  assert(audit && typeof audit === "object" && !Array.isArray(audit), "missing finalAudit");
  assert.equal(audit.status, "accepted", "finalAudit status must be accepted");
  assert.equal(audit.fullRead, true, "finalAudit.fullRead must be true");
  assert.equal(
    audit.renderedContextInspected,
    true,
    "finalAudit.renderedContextInspected must be true",
  );
  assert.equal(
    audit.independentSolveOrEvidenceCheck,
    true,
    "finalAudit.independentSolveOrEvidenceCheck must be true",
  );
  assert.equal(audit.allFindingsResolved, true, "finalAudit.allFindingsResolved must be true");
  assert.match(audit.reviewerRole, /\S/, "finalAudit.reviewerRole is required");
  assert.match(audit.reviewedAt, /\S/, "finalAudit.reviewedAt is required");
  assert.equal(audit.artifactSha256, artifactSha256(artifact), "artifact audit hash mismatch");
  assert.equal(
    audit.auditRecordSha256,
    auditRecordSha256(audit),
    "audit record hash mismatch",
  );
  return true;
}

export async function readPackageJson(relativePath) {
  return JSON.parse(await readFile(path.join(PACKAGE_ROOT, ...relativePath.split("/")), "utf8"));
}

export async function productionFloor() {
  const archived = await readPackageJson("locks/GLOBAL_PRODUCTION_FLOOR_R4.json");
  assert.equal(archived.schemaVersion, "", "unexpected archived floor schemaVersion");
  return { ...archived, schemaVersion: "cap8-global-production-floor-r4" };
}

export async function scopeLocks() {
  const filenames = {
    english: "ENGLISH_SCOPE_LOCK_R4.json",
    chinese: "CHINESE_SCOPE_LOCK_R4.json",
    geography: "GEOGRAPHY_SCOPE_LOCK_R4.json",
    history: "HISTORY_SCOPE_LOCK_R4.json",
    civics: "CIVICS_SCOPE_LOCK_R4.json",
    biology: "BIOLOGY_SCOPE_LOCK_R4.json",
    physics_chemistry: "PHYSICS_CHEMISTRY_SCOPE_LOCK_R4.json",
    earth_science: "EARTH_SCIENCE_SCOPE_LOCK_R4.json",
  };
  return Object.fromEntries(
    await Promise.all(
      SUBJECTS.map(async (subject) => [subject, await readPackageJson(`locks/${filenames[subject]}`)]),
    ),
  );
}
