#!/usr/bin/env node
"use strict";

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const HUMAN = path.join(ROOT, "數學會考作戰室", "tools", "v2-human-content");
const OUT = path.join(HUMAN, "full-semantic-repair", "r2");
const CATEGORY = "CURRICULUM_SCOPE_TERMINOLOGY_FOLLOWUP";
const REVIEWER = "CODEX_IMPLEMENTATION_R2_PENDING_CENTRAL_REVIEW";

const stable = value => {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === "object") return Object.fromEntries(Object.keys(value).sort().map(key => [key, stable(value[key])]));
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
const changedFields = (before, after) => [...new Set([...Object.keys(before), ...Object.keys(after)])]
  .filter(key => key !== "contentSha256" && JSON.stringify(before[key]) !== JSON.stringify(after[key]))
  .sort();
const mutateStrings = (value, replacements) => {
  if (typeof value === "string") return replacements.reduce((text, [from, to]) => text.replaceAll(from, to), value);
  if (Array.isArray(value)) return value.map(item => mutateStrings(item, replacements));
  if (value && typeof value === "object") for (const key of Object.keys(value)) value[key] = mutateStrings(value[key], replacements);
  return value;
};

const targets = [
  {
    type: "cr", id: "u08-s013-cr002", unitId: "u08", skillId: "orthographic-description",
    file: path.join(HUMAN, "batches", "009-u08-complete", "units", "u08", "s013", "constructed-response.jsonl"),
    replacements: [["高度矩陣", "方格高度表"], ["配置矩陣", "方格配置"]]
  },
  {
    type: "cr", id: "u08-s014-cr002", unitId: "u08", skillId: "geometry-literacy-context",
    file: path.join(HUMAN, "batches", "009-u08-complete", "units", "u08", "s014", "constructed-response.jsonl"),
    replacements: [["高度矩陣", "方格高度表"], ["示例矩陣", "示例高度表"]]
  },
  {
    type: "mc", id: "u08-s014-v011", unitId: "u08", skillId: "geometry-literacy-context",
    file: path.join(HUMAN, "batches", "009-u08-complete", "units", "u08", "s014", "mc-questions.jsonl"),
    reviewFile: path.join(HUMAN, "batches", "009-u08-complete", "units", "u08", "s014", "semantic-reviews.jsonl"),
    replacements: [["高度矩陣", "方格高度表"]]
  },
  {
    type: "mc", id: "u05-s010-v007", unitId: "u05", skillId: "coordinate-intercepts",
    file: path.join(HUMAN, "batches", "006-u05-complete", "units", "u05", "s010", "mc-questions.jsonl"),
    reviewFile: path.join(HUMAN, "batches", "006-u05-complete", "units", "u05", "s010", "semantic-reviews.jsonl"),
    replacements: [["需建立參數方程式並注意 m=1 邊界，屬進階。", "需由截距條件建立含 m 的方程式，並檢查 m=1 的邊界情形，屬進階。"]]
  },
  {
    type: "cr", id: "u13-s006-cr002", unitId: "u13", skillId: "quadratic-standard-form",
    file: path.join(HUMAN, "batches", "014-u13-complete", "units", "u13", "s006", "constructed-response.jsonl"),
    replacements: [["對參數方程式 (m-2)x²+(m+1)x-3=0", "對含 m 的方程式 (m-2)x²+(m+1)x-3=0"]]
  },
  {
    type: "lecture", id: "u13-s010-lecture-r1", unitId: "u13", skillId: "quadratic-root-verification",
    file: path.join(HUMAN, "batches", "014-u13-complete", "units", "u13", "s010", "lecture.json"),
    replacements: [["已知某值是根時，可代入含參數方程式形成參數的一次方程式。", "已知某值是根時，可代入含字母係數的方程式，得到該字母的一次方程式。"]]
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

for (const target of targets) {
  let rows;
  let record;
  if (target.type === "lecture") record = readJson(target.file);
  else {
    rows = readJsonl(target.file);
    record = rows.find(row => row.questionId === target.id);
  }
  if (!record) throw new Error(`Missing target ${target.id}`);
  const before = structuredClone(record);
  const beforeText = JSON.stringify(before);
  const finalText = target.replacements.reduce((text, [from, to]) => text.replaceAll(from, to), beforeText);
  const alreadyFinal = target.replacements.every(([, to]) => beforeText.includes(to));
  const hasSource = target.replacements.some(([from]) => beforeText.includes(from));
  if (!hasSource && !alreadyFinal) throw new Error(`${target.id}: expected terminology target is missing`);
  mutateStrings(record, target.replacements);
  record.contentSha256 = contentSha(record);
  const fields = changedFields(before, record);

  if (target.type === "lecture") writeJson(target.file, record);
  else writeJsonl(target.file, rows);
  if (target.reviewFile) {
    const reviews = readJsonl(target.reviewFile);
    const review = reviews.find(row => row.questionId === target.id);
    if (!review) throw new Error(`Missing semantic review ${target.id}`);
    mutateStrings(review, target.replacements);
    review.contentSha256 = record.contentSha256;
    if ("reviewSha256" in review) review.reviewSha256 = reviewSha(review, "reviewSha256");
    if ("reviewEvidenceSha256" in review) review.reviewEvidenceSha256 = reviewSha(review, "reviewEvidenceSha256");
    writeJsonl(target.reviewFile, reviews);
  }

  const fieldRow = fieldRows.find(row => row.artifactId === target.id);
  const scopeRow = scopeRows.find(row => row.artifactId === target.id);
  if (!fieldRow || !scopeRow) throw new Error(`Missing review ledger row ${target.id}`);
  const priorChangedCount = fieldRow.changedFields.length;
  fieldRow.contentSha256 = record.contentSha256;
  fieldRow.changedFields = [...new Set([...fieldRow.changedFields, ...fields])].sort();
  if (record.title) fieldRow.checks.title = record.title;
  if (record.text || record.prompt) fieldRow.checks.prompt = record.text || record.prompt;
  if (target.type === "lecture") scopeRow.scopeEvidence = record.title;
  else if (target.type === "mc") scopeRow.scopeEvidence = record.authoringIntent || record.target || record.text || record.prompt;
  else scopeRow.scopeEvidence = record.requiredWork;

  let repair = repairRows.find(row => row.artifactId === target.id && row.categories?.includes(CATEGORY));
  if (!repair) {
    repair = {
      artifactType: target.type, artifactId: target.id, unitId: target.unitId, skillId: target.skillId,
      sourcePath: rel(target.file), beforeSha256: contentSha(before), afterSha256: record.contentSha256,
      changedFields: fields, categories: [CATEGORY], reviewer: REVIEWER,
      status: "IMPLEMENTED_PENDING_CENTRAL_ACCEPTANCE"
    };
    repairRows.push(repair);
    const unit = summary.repairCountsByUnit[target.unitId];
    if (priorChangedCount === 0) unit[target.type] += 1;
    unit.changedFields += fieldRow.changedFields.length - priorChangedCount;
  } else {
    repair.afterSha256 = record.contentSha256;
    repair.changedFields = [...new Set([...repair.changedFields, ...fields])].sort();
  }
}

summary.repairRecords = repairRows.length;
writeJsonl(fieldFile, fieldRows);
writeJsonl(scopeFile, scopeRows);
writeJsonl(repairFile, repairRows);
writeJson(summaryFile, summary);

console.log(JSON.stringify({
  status: "SCOPE_TERMINOLOGY_REPAIRED_PENDING_CENTRAL_ACCEPTANCE",
  repairedArtifacts: targets.map(target => target.id),
  repairRecords: repairRows.length
}, null, 2));
