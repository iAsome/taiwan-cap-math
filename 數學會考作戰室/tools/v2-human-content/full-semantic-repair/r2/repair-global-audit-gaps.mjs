#!/usr/bin/env node
"use strict";

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const HUMAN = path.join(ROOT, "數學會考作戰室", "tools", "v2-human-content");
const OUT = path.join(HUMAN, "full-semantic-repair", "r2");
const REVIEWER = "CODEX_IMPLEMENTATION_R2_PENDING_CENTRAL_REVIEW";
const STATUS = "IMPLEMENTED_PENDING_CENTRAL_ACCEPTANCE";
const CATEGORY = "GLOBAL_AUDIT_STRUCTURAL_REPAIR";

const stable = value => {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map(key => [key, stable(value[key])]));
  }
  return value;
};
const sha = value => crypto.createHash("sha256").update(value).digest("hex");
const contentSha = record => {
  const copy = structuredClone(record);
  delete copy.contentSha256;
  return sha(JSON.stringify(stable(copy)));
};
const reviewSha = (record, field) => {
  const copy = structuredClone(record);
  delete copy[field];
  delete copy.contentSha256;
  return sha(JSON.stringify(stable(copy)));
};
const readJson = file => JSON.parse(fs.readFileSync(file, "utf8"));
const readJsonl = file => fs.readFileSync(file, "utf8").split(/\r?\n/).filter(Boolean).map(JSON.parse);
const writeJson = (file, value) => fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`, "utf8");
const writeJsonl = (file, rows) => fs.writeFileSync(file, `${rows.map(row => JSON.stringify(row)).join("\n")}\n`, "utf8");
const rel = file => path.relative(ROOT, file).split(path.sep).join("/");

const repairs = [
  {
    type: "mc",
    id: "u01-s001-v006",
    unitId: "u01",
    skillId: "integer-number-classification",
    file: path.join(HUMAN, "batches", "001", "units", "u01", "s001", "mc-questions.jsonl"),
    reviewFile: path.join(HUMAN, "batches", "001", "units", "u01", "s001", "semantic-reviews.jsonl"),
    field: "text",
    before: "0.35 化成最簡分數為何？",
    after: "下列哪一個最簡分數可以表示 0.35？"
  }
];

const fieldFile = path.join(OUT, "field-review-ledger.jsonl");
const scopeFile = path.join(OUT, "scope-sequence-ledger.jsonl");
const repairFile = path.join(OUT, "repair-ledger.jsonl");
const summaryFile = path.join(OUT, "repository-review-summary.json");
const fieldRows = readJsonl(fieldFile);
const scopeRows = readJsonl(scopeFile);
const repairRows = readJsonl(repairFile);
const summary = readJson(summaryFile);

const titleRestorations = [
  {
    id: "u01-s001-lecture-r1",
    file: path.join(HUMAN, "batches", "001", "units", "u01", "s001", "lecture.json"),
    title: "數的分類入門：整數、分數與有限小數",
    retainChangedField: true
  },
  {
    id: "u03-s010-lecture-r1",
    file: path.join(HUMAN, "batches", "004-u03-complete", "units", "u03", "s010", "lecture.json"),
    title: "行程問題：用距離、速率和時間建立方程式",
    retainChangedField: false
  }
];

for (const restoration of titleRestorations) {
  const staleRepairIndex = repairRows.findIndex(row => row.artifactId === restoration.id && row.categories?.includes(CATEGORY));
  const lecture = readJson(restoration.file);
  lecture.title = restoration.title;
  lecture.contentSha256 = contentSha(lecture);
  writeJson(restoration.file, lecture);
  const fieldRow = fieldRows.find(row => row.artifactId === restoration.id);
  const scopeRow = scopeRows.find(row => row.artifactId === restoration.id);
  if (!fieldRow || !scopeRow) throw new Error(`Missing review ledger row ${restoration.id}`);
  fieldRow.contentSha256 = lecture.contentSha256;
  fieldRow.checks.title = restoration.title;
  scopeRow.scopeEvidence = restoration.title;
  if (!restoration.retainChangedField) fieldRow.changedFields = fieldRow.changedFields.filter(field => field !== "title");
  if (staleRepairIndex >= 0) {
    repairRows.splice(staleRepairIndex, 1);
    if (!restoration.retainChangedField) {
      summary.repairCountsByUnit.u03.lecture -= 1;
      summary.repairCountsByUnit.u03.changedFields -= 1;
    }
  }
}

for (const repair of repairs) {
  let rows;
  let record;
  if (repair.type === "lecture") {
    record = readJson(repair.file);
  } else {
    rows = readJsonl(repair.file);
    record = rows.find(row => row.questionId === repair.id);
  }
  if (!record) throw new Error(`Missing target ${repair.id}`);
  const acceptedValues = [repair.before, repair.acceptedIntermediate, repair.after].filter(Boolean);
  if (!acceptedValues.includes(record[repair.field])) {
    throw new Error(`${repair.id}.${repair.field}: expected ${repair.before}, found ${record[repair.field]}`);
  }

  const currentSha256 = contentSha(record);
  record[repair.field] = repair.after;
  record.contentSha256 = contentSha(record);

  if (repair.type === "lecture") writeJson(repair.file, record);
  else {
    writeJsonl(repair.file, rows);
    const reviews = readJsonl(repair.reviewFile);
    const review = reviews.find(row => row.questionId === repair.id);
    if (!review) throw new Error(`Missing semantic review ${repair.id}`);
    review.contentSha256 = record.contentSha256;
    if ("reviewSha256" in review) review.reviewSha256 = reviewSha(review, "reviewSha256");
    if ("reviewEvidenceSha256" in review) review.reviewEvidenceSha256 = reviewSha(review, "reviewEvidenceSha256");
    writeJsonl(repair.reviewFile, reviews);
  }

  const fieldRow = fieldRows.find(row => row.artifactId === repair.id);
  const scopeRow = scopeRows.find(row => row.artifactId === repair.id);
  if (!fieldRow || !scopeRow) throw new Error(`Missing review ledger row ${repair.id}`);
  fieldRow.contentSha256 = record.contentSha256;
  fieldRow.changedFields = [...new Set([...(fieldRow.changedFields || []), repair.field])].sort();
  if (repair.type === "lecture") fieldRow.checks.title = repair.after;
  else fieldRow.checks.prompt = repair.after;
  scopeRow.scopeEvidence = repair.after;

  const existingRepair = repairRows.find(row => row.artifactId === repair.id && row.categories?.includes(CATEGORY));
  if (existingRepair) {
    existingRepair.afterSha256 = record.contentSha256;
  } else {
    repairRows.push({
      artifactType: repair.type,
      artifactId: repair.id,
      unitId: repair.unitId,
      skillId: repair.skillId,
      sourcePath: rel(repair.file),
      beforeSha256: currentSha256,
      afterSha256: record.contentSha256,
      changedFields: [repair.field],
      categories: [CATEGORY],
      reviewer: REVIEWER,
      status: STATUS
    });
    const unit = summary.repairCountsByUnit[repair.unitId];
    if (!unit) throw new Error(`Missing summary unit ${repair.unitId}`);
    const alreadyChanged = (fieldRow.changedFields || []).length > 1;
    if (!alreadyChanged) unit[repair.type] += 1;
    unit.changedFields += 1;
  }
}

summary.repairRecords = repairRows.length;
writeJsonl(fieldFile, fieldRows);
writeJsonl(scopeFile, scopeRows);
writeJsonl(repairFile, repairRows);
writeJson(summaryFile, summary);

console.log(JSON.stringify({
  status: "GLOBAL_AUDIT_GAPS_REPAIRED_PENDING_CENTRAL_ACCEPTANCE",
  repairedArtifacts: repairs.map(({ id, field }) => ({ id, field })),
  repairRecords: repairRows.length
}, null, 2));
