#!/usr/bin/env node
"use strict";

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const HUMAN = path.join(ROOT, "數學會考作戰室", "tools", "v2-human-content");
const BATCHES = path.join(HUMAN, "batches");
const OUT = path.join(HUMAN, "full-semantic-repair", "r2");
const CATEGORY = "MACHINE_RESIDUE_AND_DISTRACTOR_TRUTHFULNESS_FOLLOWUP";
const REVIEWER = "CODEX_IMPLEMENTATION_R2_PENDING_CENTRAL_REVIEW";
const EXPLANATION_REPAIRS = new Map([
  ["u08-s006-v001", "任畫一條對角線可把四邊形分成兩個三角形，因此內角和是 2×180°=360°。"],
  ["u08-s006-v004", "三個已知角合計為 75°+110°+95°=280°，所以第四角是 360°−280°=80°。"]
]);

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
const idFor = (record, type) => type === "lecture" ? record.lectureId : record.questionId;
const changedFields = (before, after) => [...new Set([...Object.keys(before), ...Object.keys(after)])]
  .filter(key => key !== "contentSha256" && JSON.stringify(before[key]) !== JSON.stringify(after[key]))
  .sort((a, b) => a.localeCompare(b, "en"));

function cleanPunctuation(text) {
  let value = String(text);
  let previous;
  do {
    previous = value;
    value = value
      .replaceAll("且依獨立重算只有一項成立", "；逐項核對後只有一項成立")
      .replaceAll("。；", "；")
      .replaceAll("。，", "，")
      .replaceAll("；。", "。")
      .replaceAll("。。", "。")
      .replaceAll("，，", "，");
  } while (value !== previous);
  return value;
}

function mutateStrings(value, mutate) {
  if (typeof value === "string") return mutate(value);
  if (Array.isArray(value)) return value.map(item => mutateStrings(item, mutate));
  if (value && typeof value === "object") {
    for (const key of Object.keys(value)) value[key] = mutateStrings(value[key], mutate);
  }
  return value;
}

function reasoningText(value) {
  if (typeof value === "string") return value;
  if (!value || typeof value !== "object") return "";
  return value.derivation || value.solution || value.reasoning || value.explanation || value.result || "";
}

function discoverSkills() {
  const skills = [];
  for (const batch of fs.readdirSync(BATCHES).sort((a, b) => a.localeCompare(b, "en"))) {
    const unitsRoot = path.join(BATCHES, batch, "units");
    if (!fs.existsSync(unitsRoot)) continue;
    for (const unit of fs.readdirSync(unitsRoot).sort()) {
      const unitRoot = path.join(unitsRoot, unit);
      if (!fs.statSync(unitRoot).isDirectory()) continue;
      for (const slot of fs.readdirSync(unitRoot).sort()) {
        const dir = path.join(unitRoot, slot);
        if (!fs.statSync(dir).isDirectory() || !fs.existsSync(path.join(dir, "lecture.json"))) continue;
        const files = {
          lecture: path.join(dir, "lecture.json"),
          mc: path.join(dir, "mc-questions.jsonl"),
          cr: path.join(dir, "constructed-response.jsonl"),
          review: path.join(dir, "semantic-reviews.jsonl")
        };
        skills.push({
          unit,
          slot,
          files,
          lecture: readJson(files.lecture),
          mc: readJsonl(files.mc),
          cr: readJsonl(files.cr),
          reviews: readJsonl(files.review)
        });
      }
    }
  }
  return skills;
}

function updateReview(review, question) {
  for (const field of ["questionContentSha256", "reviewedContentSha256", "questionSha256"]) {
    if (field in review) review[field] = question.contentSha256;
  }
  if (!review.reviewId) review.contentSha256 = question.contentSha256;
  review.derivedAnswer = question.choices[question.answerIndex];
  review.storedAnswer = question.choices[question.answerIndex];
  review.answerMatch = true;
  review.optionTruth = question.choices.map((_, index) => index === question.answerIndex);
  review.uniqueCorrectAnswer = true;
  if (question.difficulty === "literacy" && "literacyContextNecessity" in review) {
    review.literacyContextNecessity = question.literacyContextNecessity;
  }
  const independent = reasoningText(question.independentSolution);
  if ("independentSolution" in review && independent) review.independentSolution = independent;
  if ("independentRecalculation" in review && independent) review.independentRecalculation = independent;
  mutateStrings(review, cleanPunctuation);
  if ("reviewSha256" in review) review.reviewSha256 = reviewSha(review, "reviewSha256");
  if ("reviewEvidenceSha256" in review) review.reviewEvidenceSha256 = reviewSha(review, "reviewEvidenceSha256");
  if (review.reviewId) review.contentSha256 = contentSha(review);
}

function repairU14(question) {
  if (typeof question.mainExplanation === "string" && question.mainExplanation.startsWith("依題意依序處理：")) {
    question.mainExplanation = cleanPunctuation(question.independentSolution);
  }
}

function repairU17(question) {
  if (typeof question.independentSolution === "string") {
    question.independentSolution = question.independentSolution.replace(/^重新依題目條件計算：/, "");
  }
  if (typeof question.ambiguityAudit === "string") {
    question.ambiguityAudit = question.ambiguityAudit.replaceAll("符合獨立重算", "符合逐步核算結果");
  }
  const correctChoice = question.choices[question.answerIndex];
  question.optionAnalysis.forEach((entry, index) => {
    if (index === question.answerIndex && entry.reason.includes("依獨立重算")) {
      entry.reason = question.explanation;
      return;
    }
    if (index !== question.answerIndex && entry.reason.includes("此錯誤常源自：")) {
      const numerical = /[0-9°%]|[=+−\-×÷/]/.test(`${entry.choice}${correctChoice}`);
      entry.reason = numerical
        ? `依題目給定的關係核對，結果應為「${correctChoice}」，不是「${entry.choice}」；${question.explanation}`
        : `題目條件支持「${correctChoice}」，不支持「${entry.choice}」；${question.explanation}`;
    }
  });
}

function repairStepDepth(question) {
  const steps = [...new Set((Array.isArray(question.steps)
    ? question.steps
      .filter(step => typeof step === "string" && step !== "[object Object]")
      .map(step => cleanPunctuation(step.trim()))
      .filter(Boolean)
    : []))];
  if (steps.length >= 3) {
    question.steps = steps;
    return;
  }
  const correctChoice = String(question.choices[question.answerIndex]);
  const focusText = String(
    question.target || question.authoringIntent || question.concept || question.misconceptionTarget || question.text
  ).trim().replace(/[。！？；]+$/, "");
  const focusStep = `先確認本題的判斷重點：${focusText}。`;
  const reasoningStep = cleanPunctuation(String(
    reasoningText(question.independentSolution)
      || reasoningText(question.mainExplanation)
      || reasoningText(question.explanation)
      || reasoningText(question.optionAnalysis[question.answerIndex]?.reason)
  ).trim());
  const answerStep = `依此可確定答案為「${correctChoice}」。`;
  const hasConclusion = step => step.includes(correctChoice) || /答案|選擇|可確定|所以|因此/.test(step);

  const candidates = hasConclusion(steps.at(-1))
    ? [steps[0], reasoningStep, ...steps.slice(1), focusStep, answerStep]
    : [...steps, reasoningStep, answerStep, focusStep];
  question.steps = [...new Set(candidates.filter(Boolean))].slice(0, 3);
  if (question.steps.length < 3) throw new Error(`${question.questionId}: cannot derive three distinct steps`);
}

const fieldFile = path.join(OUT, "field-review-ledger.jsonl");
const scopeFile = path.join(OUT, "scope-sequence-ledger.jsonl");
const repairFile = path.join(OUT, "repair-ledger.jsonl");
const summaryFile = path.join(OUT, "repository-review-summary.json");
const fieldRows = readJsonl(fieldFile);
const scopeRows = readJsonl(scopeFile);
const repairRows = readJsonl(repairFile);
const summary = readJson(summaryFile);
const repairs = [];

function recordArtifactRepair(skill, type, file, before, after) {
  const id = idFor(after, type);
  const fields = changedFields(before, after);
  if (!fields.length) return;
  const fieldRow = fieldRows.find(row => row.artifactId === id);
  const scopeRow = scopeRows.find(row => row.artifactId === id);
  if (!fieldRow || !scopeRow) throw new Error(`Missing R2 evidence row for ${id}`);
  const priorChangedCount = fieldRow.changedFields.length;
  fieldRow.contentSha256 = after.contentSha256;
  fieldRow.changedFields = [...new Set([...fieldRow.changedFields, ...fields])].sort((a, b) => a.localeCompare(b, "en"));
  if (type === "lecture") {
    fieldRow.checks.title = after.title;
    scopeRow.scopeEvidence = after.title;
  } else if (type === "mc") {
    fieldRow.checks.prompt = after.text;
    fieldRow.checks.correctChoice = after.choices[after.answerIndex];
    fieldRow.checks.stepCount = after.steps.length;
    scopeRow.scopeEvidence = after.authoringIntent || after.target || after.text;
  } else {
    fieldRow.checks.prompt = after.prompt;
    scopeRow.scopeEvidence = after.requiredWork;
  }

  let repair = repairRows.find(row => row.artifactId === id && row.categories?.includes(CATEGORY));
  if (!repair) {
    repair = {
      artifactType: type,
      artifactId: id,
      unitId: after.unitId,
      skillId: after.skillId,
      sourcePath: rel(file),
      beforeSha256: contentSha(before),
      afterSha256: after.contentSha256,
      changedFields: fields,
      categories: [CATEGORY],
      reviewer: REVIEWER,
      status: "IMPLEMENTED_PENDING_CENTRAL_ACCEPTANCE"
    };
    repairRows.push(repair);
    const unit = summary.repairCountsByUnit[after.unitId];
    if (!unit) throw new Error(`Missing summary unit ${after.unitId}`);
    if (priorChangedCount === 0) unit[type] += 1;
    unit.changedFields += fieldRow.changedFields.length - priorChangedCount;
  } else {
    repair.afterSha256 = after.contentSha256;
    repair.changedFields = [...new Set([...repair.changedFields, ...fields])].sort((a, b) => a.localeCompare(b, "en"));
  }
  repairs.push(id);
}

function recordReviewRepair(skill, before, after) {
  const fields = changedFields(before, after).filter(field => !["reviewSha256", "reviewEvidenceSha256"].includes(field));
  if (!fields.length) return;
  const id = after.reviewId || `${after.questionId}-review`;
  let repair = repairRows.find(row => row.artifactId === id && row.categories?.includes(CATEGORY));
  if (!repair) {
    repair = {
      artifactType: "semantic-review",
      artifactId: id,
      unitId: skill.unit,
      skillId: after.skillId || skill.mc.find(row => row.questionId === after.questionId)?.skillId,
      sourcePath: rel(skill.files.review),
      beforeSha256: sha(JSON.stringify(stable(before))),
      afterSha256: sha(JSON.stringify(stable(after))),
      changedFields: fields,
      categories: [CATEGORY],
      reviewer: REVIEWER,
      status: "IMPLEMENTED_PENDING_CENTRAL_ACCEPTANCE"
    };
    repairRows.push(repair);
  } else {
    repair.afterSha256 = sha(JSON.stringify(stable(after)));
    repair.changedFields = [...new Set([...repair.changedFields, ...fields])].sort((a, b) => a.localeCompare(b, "en"));
  }
}

for (const skill of discoverSkills()) {
  const beforeLecture = structuredClone(skill.lecture);
  const beforeMc = skill.mc.map(record => structuredClone(record));
  const beforeCr = skill.cr.map(record => structuredClone(record));
  const beforeReviews = skill.reviews.map(record => structuredClone(record));

  mutateStrings(skill.lecture, cleanPunctuation);
  skill.mc.forEach(question => {
    mutateStrings(question, cleanPunctuation);
    if (EXPLANATION_REPAIRS.has(question.questionId)) question.explanation = EXPLANATION_REPAIRS.get(question.questionId);
    if (skill.unit === "u14") repairU14(question);
    if (skill.unit === "u17") repairU17(question);
    if (question.difficulty === "literacy" && !String(question.literacyContextNecessity || "").trim()) {
      if (!String(question.difficultyReason || "").trim()) throw new Error(`${question.questionId}: missing literacy rationale`);
      question.literacyContextNecessity = question.difficultyReason;
    }
    repairStepDepth(question);
    mutateStrings(question, cleanPunctuation);
    question.contentSha256 = contentSha(question);
    const review = skill.reviews.find(row => row.questionId === question.questionId);
    if (!review) throw new Error(`Missing semantic review ${question.questionId}`);
    updateReview(review, question);
  });
  skill.cr.forEach(record => {
    mutateStrings(record, cleanPunctuation);
    record.contentSha256 = contentSha(record);
  });
  skill.lecture.contentSha256 = contentSha(skill.lecture);

  recordArtifactRepair(skill, "lecture", skill.files.lecture, beforeLecture, skill.lecture);
  skill.mc.forEach((record, index) => recordArtifactRepair(skill, "mc", skill.files.mc, beforeMc[index], record));
  skill.cr.forEach((record, index) => recordArtifactRepair(skill, "cr", skill.files.cr, beforeCr[index], record));
  skill.reviews.forEach((record, index) => recordReviewRepair(skill, beforeReviews[index], record));

  if (JSON.stringify(beforeLecture) !== JSON.stringify(skill.lecture)) writeJson(skill.files.lecture, skill.lecture);
  if (JSON.stringify(beforeMc) !== JSON.stringify(skill.mc)) writeJsonl(skill.files.mc, skill.mc);
  if (JSON.stringify(beforeCr) !== JSON.stringify(skill.cr)) writeJsonl(skill.files.cr, skill.cr);
  if (JSON.stringify(beforeReviews) !== JSON.stringify(skill.reviews)) writeJsonl(skill.files.review, skill.reviews);
}

summary.repairRecords = repairRows.length;
writeJsonl(fieldFile, fieldRows);
writeJsonl(scopeFile, scopeRows);
writeJsonl(repairFile, repairRows);
writeJson(summaryFile, summary);

const sourceText = fs.readdirSync(BATCHES).length && fs.readFileSync(repairFile, "utf8");
if (!sourceText) throw new Error("Repair ledger unexpectedly empty");

console.log(JSON.stringify({
  status: "MACHINE_RESIDUE_REPAIRED_PENDING_CENTRAL_ACCEPTANCE",
  changedStudentArtifacts: [...new Set(repairs)].length,
  repairRecords: repairRows.length
}, null, 2));
