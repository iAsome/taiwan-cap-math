#!/usr/bin/env node
"use strict";

import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const ROOT = process.cwd();
const HUMAN = path.join(ROOT, "數學會考作戰室", "tools", "v2-human-content");
const BATCHES = path.join(HUMAN, "batches");
const OUT = path.join(HUMAN, "full-semantic-repair", "r2");
const LOCK = path.join(HUMAN, "authoring", "authoring-syllabus-lock-r2.json");
const GLOBAL_AUDIT = path.join(HUMAN, "global-audit", "r1", "tooling", "scripts", "run-global-audit.mjs");
const DUPLICATE_ADJUDICATION = path.join(HUMAN, "global-repair", "wave-1b", "evidence", "duplicate-adjudication-report.json");
const REQUIRE_RUNTIME_SYNC = process.argv.includes("--require-runtime-sync");
const REVIEWER = "CODEX_IMPLEMENTATION_R2_PENDING_CENTRAL_REVIEW";
const EXPECT = { units: 23, skills: 339, lectures: 339, mc: 4068, cr: 678, drawings: 178, reviews: 4068 };
const LOCK_SHA = "930dbdbbb70818b461ba6ad28620dfed69442716b653be91a9025ebe92d353fc";
const ANSWER_ONLY_ZERO = "只寫答案而沒有任何可辨識且與題意相關的有效過程，得 0 分。";
const SCORE_ONE_PROCESS = "本級至少須呈現一個可辨識且與題意相關的有效步驟。";
const SCORE_TWO_PROCESS = "本級須呈現主要方法或可檢核的推理，只有答案不得分。";
const TITLE_EXCEPTIONS = new Map([
  ["u01-s001-lecture-r1", "數的分類入門：整數、分數與有限小數"],
  ["u03-s010-lecture-r1", "行程問題：用距離、速率和時間建立方程式"]
]);
const MACHINE_RESIDUE = [
  "。；", "。，", "。。", "；。", "，，", "[object Object]",
  "依題意依序處理：", "重新依題目條件計算：", "依獨立重算", "此錯誤常源自：",
  "關鍵推導依序是", "由這些條件可得正確答案", "其餘選項則與上述計算結果或定義不一致",
  "實際判斷時依序使用", "不能只憑表面符號或單一數字下結論", "依照這三步可確定答案"
];
const PROHIBITED_LANGUAGE = [
  "隻看表面", "避擴音前使用", "组", "场", "花坛", "给定", "之后", "后项",
  "公釐", "公厘", "厘米", "千米", "平方厘米", "立方厘米", "平米", "千克"
];
const LATER_SCOPE = ["正弦", "餘弦", "正切", "向量", "矩陣", "行列式", "微分", "積分", "對數", "複數"];
const SCOPE_NEGATION = /(不使用|不需要|不需|不得|避免|超出|不在|禁止|未引入|不依賴|不要求|無需|不涉及)/;
const SCOPE_FALSE_PREFIXES = new Map([
  ["積分", new Set(["面", "體", "累", "總"])],
  ["對數", new Set(["絕", "核", "配"])],
  ["向量", new Set(["方"])]
]);

const stable = value => {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map(key => [key, stable(value[key])]));
  }
  return value;
};
const hashBytes = value => crypto.createHash("sha256").update(value).digest("hex");
const hashFile = file => hashBytes(fs.readFileSync(file));
const contentSha = record => {
  const copy = structuredClone(record);
  delete copy.contentSha256;
  return hashBytes(JSON.stringify(stable(copy)));
};
const reviewSha = (record, field) => {
  const copy = structuredClone(record);
  delete copy[field];
  delete copy.contentSha256;
  return hashBytes(JSON.stringify(stable(copy)));
};
const readJson = file => JSON.parse(fs.readFileSync(file, "utf8"));
const readJsonl = file => fs.readFileSync(file, "utf8").split(/\r?\n/).filter(Boolean).map(JSON.parse);
const rel = file => path.relative(ROOT, file).split(path.sep).join("/");
const collectStrings = (value, out = []) => {
  if (typeof value === "string") out.push(value);
  else if (Array.isArray(value)) value.forEach(item => collectStrings(item, out));
  else if (value && typeof value === "object") Object.values(value).forEach(item => collectStrings(item, out));
  return out;
};

function requiredCoreStrings(type, record) {
  const values = [];
  const add = value => collectStrings(value, values);
  if (type === "lecture") {
    for (const field of [
      "title", "skillTitle", "learningOutcomes", "learningGoals", "conceptNarrative",
      "conceptDevelopment", "formalDefinitions", "definitions", "formulas", "method",
      "stepByStepMethod", "workedExamples", "summary", "conciseSummary"
    ]) add(record[field]);
  } else if (type === "mc") {
    for (const field of ["prompt", "text", "givenConditions", "target", "independentSolution", "explanation", "mainExplanation", "steps"]) add(record[field]);
    add(record.choices?.[record.answerIndex]);
    add(record.optionAnalysis?.[record.answerIndex]?.reason);
  } else {
    for (const field of ["prompt", "text", "requiredWork", "standardSolution", "fullSolution", "solution", "reasoningSteps", "alternativeMethods"]) add(record[field]);
    for (const level of record.rubric || []) if (Number(level.score) >= 2) add(level.criteria);
  }
  return values.filter(Boolean);
}

function containsScopeTerm(fragment, token) {
  let index = fragment.indexOf(token);
  while (index >= 0) {
    const prefix = index > 0 ? fragment[index - 1] : "";
    if (!SCOPE_FALSE_PREFIXES.get(token)?.has(prefix)) return true;
    index = fragment.indexOf(token, index + token.length);
  }
  return false;
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
          drawing: path.join(dir, "drawing-specs.jsonl"),
          review: path.join(dir, "semantic-reviews.jsonl")
        };
        skills.push({
          batch,
          unit,
          slot,
          dir,
          files,
          lecture: readJson(files.lecture),
          mc: readJsonl(files.mc),
          cr: readJsonl(files.cr),
          drawings: fs.existsSync(files.drawing) ? readJsonl(files.drawing) : [],
          reviews: readJsonl(files.review)
        });
      }
    }
  }
  return skills;
}

function decimalRational(value) {
  const match = String(value).match(/^([+-]?)(\d+)(?:\.(\d+))?$/);
  if (!match) return null;
  const fraction = match[3] || "";
  const sign = match[1] === "-" ? -1n : 1n;
  return reduce(sign * BigInt(`${match[2]}${fraction}`), 10n ** BigInt(fraction.length));
}

function reduce(numerator, denominator) {
  if (denominator === 0n) return null;
  if (denominator < 0n) [numerator, denominator] = [-numerator, -denominator];
  let a = numerator < 0n ? -numerator : numerator;
  let b = denominator;
  while (b) [a, b] = [b, a % b];
  const divisor = a || 1n;
  return [numerator / divisor, denominator / divisor];
}

function normalizedChoice(choice, question) {
  let text = String(choice).trim().replace(/[−－]/g, "-").replace(/,/g, "").replace(/\s+/g, " ");
  const unitPattern = "公里|公尺|公分|毫米|平方公尺|平方公分|立方公尺|立方公分|公升|毫升|公斤|公克|毫克|小時|分鐘|秒|元|人|個|件|本|張|歲|組|箱|袋|瓶|頁|次|包";
  const unitMatch = text.match(new RegExp(`^(.+?)(?:\\s*)(${unitPattern})?$`));
  const unit = unitMatch?.[2] || "";
  text = unitMatch?.[1] || text;
  const markup = text.match(/^\[\[frac:([^|]+)\|([^\]]+)\]\]$/);
  if (markup) {
    const n = decimalRational(markup[1]);
    const d = decimalRational(markup[2]);
    if (n && d) {
      const result = reduce(n[0] * d[1], n[1] * d[0]);
      if (result) return `N:${result[0]}/${result[1]}|${unit}`;
    }
  }
  const fraction = text.match(/^([+-]?\d+)\s*\/\s*([+-]?\d+)$/);
  if (fraction) {
    const result = reduce(BigInt(fraction[1]), BigInt(fraction[2]));
    if (result) return `N:${result[0]}/${result[1]}|${unit}`;
  }
  const percent = text.match(/^([+-]?\d+(?:\.\d+)?)%$/);
  if (percent) {
    const value = decimalRational(percent[1]);
    const result = reduce(value[0], value[1] * 100n);
    return `N:${result[0]}/${result[1]}|${unit}`;
  }
  const number = decimalRational(text);
  if (number) return `N:${number[0]}/${number[1]}|${unit}`;
  const ratio = text.match(/^([+-]?\d+(?:\.\d+)?):([+-]?\d+(?:\.\d+)?)$/);
  if (ratio && /比|比例|比值|最簡比|放大|縮小/.test(collectStrings(question).join(""))) {
    const left = decimalRational(ratio[1]);
    const right = decimalRational(ratio[2]);
    const result = reduce(left[0] * right[1], left[1] * right[0]);
    if (result) return `R:${result[0]}/${result[1]}|${unit}`;
  }
  return `T:${String(choice).trim().replace(/\s+/g, " ")}`;
}

function runGlobalAudit() {
  const temp = fs.mkdtempSync(path.join(os.tmpdir(), "math-v2-r2-phase3-audit-"));
  try {
    execFileSync(process.execPath, [GLOBAL_AUDIT, "--repo", ROOT, "--output", temp], { cwd: ROOT, encoding: "utf8" });
    return readJson(path.join(temp, "global-audit-report.json"));
  } finally {
    fs.rmSync(temp, { recursive: true, force: true });
  }
}

export function validatePhase3Corpus() {
  const errors = [];
  const error = (code, id, detail) => errors.push({ code, id, detail });
  if (hashFile(LOCK) !== LOCK_SHA) error("LOCK_SHA", rel(LOCK), hashFile(LOCK));
  const lock = readJson(LOCK);
  const lockMap = new Map();
  for (const unit of lock.units) for (const topic of unit.topics) for (const skill of topic.skills) {
    lockMap.set(`${unit.unitId}:${skill.skillId}`, { unit, topic, skill });
  }

  const skills = discoverSkills();
  const artifacts = new Map();
  const reviews = new Map();
  const drawings = new Map();
  const units = new Set();
  for (const skill of skills) {
    units.add(skill.unit);
    if (skill.mc.length !== 12 || skill.cr.length !== 2 || skill.reviews.length !== 12) {
      error("PER_SKILL_COUNTS", `${skill.unit}-${skill.slot}`, `${skill.mc.length}/${skill.cr.length}/${skill.reviews.length}`);
    }
    const difficulty = new Map();
    const answerIndexes = [0, 0, 0, 0];
    for (const question of skill.mc) {
      difficulty.set(question.difficulty, (difficulty.get(question.difficulty) || 0) + 1);
      if (Number.isInteger(question.answerIndex) && question.answerIndex >= 0 && question.answerIndex < 4) answerIndexes[question.answerIndex]++;
    }
    for (const label of ["basic", "standard", "advanced", "literacy"]) {
      if (difficulty.get(label) !== 3) error("DIFFICULTY_DISTRIBUTION", `${skill.unit}-${skill.slot}`, `${label}:${difficulty.get(label) || 0}`);
    }
    if (JSON.stringify(answerIndexes) !== JSON.stringify([3, 3, 3, 3])) {
      error("ANSWER_DISTRIBUTION", `${skill.unit}-${skill.slot}`, JSON.stringify(answerIndexes));
    }

    const groups = [["lecture", [skill.lecture], skill.files.lecture], ["mc", skill.mc, skill.files.mc], ["cr", skill.cr, skill.files.cr]];
    for (const [type, rows, file] of groups) for (const record of rows) {
      const id = type === "lecture" ? record.lectureId : record.questionId;
      if (!id || artifacts.has(id)) error("DUPLICATE_ARTIFACT_ID", id || rel(file), rel(file));
      else artifacts.set(id, { type, record, file });
      if (record.unitId !== skill.unit || !lockMap.has(`${record.unitId}:${record.skillId}`)) {
        error("SCOPE_LOCK_IDENTITY", id, `${record.unitId}/${record.skillId}`);
      }
      if (record.contentSha256 !== contentSha(record)) error("CONTENT_SHA", id, rel(file));
      const text = collectStrings(record).join("\n");
      for (const token of MACHINE_RESIDUE) if (text.includes(token)) error("MACHINE_RESIDUE", id, token);
      for (const token of PROHIBITED_LANGUAGE) if (text.includes(token)) error("LANGUAGE", id, token);
      for (const fragment of requiredCoreStrings(type, record)) {
        for (const token of [...LATER_SCOPE, "參數方程式"]) {
          if (containsScopeTerm(fragment, token) && !SCOPE_NEGATION.test(fragment)) error("LATER_SCOPE", id, token);
        }
      }
    }

    const lecture = skill.lecture;
    const lectureTitle = lecture.title || lecture.skillTitle;
    const learning = lecture.learningOutcomes || lecture.learningGoals;
    const concept = lecture.conceptNarrative || lecture.conceptDevelopment;
    const method = lecture.method || lecture.stepByStepMethod;
    const selfCheck = lecture.selfCheck || lecture.selfCheckItems || lecture.selfChecks;
    const summary = lecture.summary || lecture.conciseSummary;
    for (const [field, value] of Object.entries({ lectureTitle, learning, concept, method, workedExamples: lecture.workedExamples, commonMistakes: lecture.commonMistakes, selfCheck, summary })) {
      if (!(Array.isArray(value) ? value.length : String(value || "").trim())) error("LECTURE_FIELD", lecture.lectureId, field);
    }
    if ((lecture.workedExamples || []).length < 2) error("LECTURE_EXAMPLES", lecture.lectureId, lecture.workedExamples?.length || 0);

    for (const question of skill.mc) {
      if (question.choices?.length !== 4 || question.optionAnalysis?.length !== 4) error("MC_CHOICE_COUNT", question.questionId, "four required");
      if (!Number.isInteger(question.answerIndex) || question.answerIndex < 0 || question.answerIndex > 3) error("ANSWER_INDEX", question.questionId, question.answerIndex);
      const truth = question.optionAnalysis.map(entry => entry.truth === true);
      if (truth.filter(Boolean).length !== 1 || truth[question.answerIndex] !== true) error("OPTION_TRUTH", question.questionId, JSON.stringify(truth));
      question.optionAnalysis.forEach((entry, index) => {
        if ("choice" in entry && entry.choice !== question.choices[index]) error("OPTION_CHOICE_LINK", question.questionId, index);
        if (!String(entry.reason || "").trim()) error("OPTION_REASON", question.questionId, index);
      });
      const normalized = question.choices.map(choice => normalizedChoice(choice, question));
      if (new Set(normalized).size !== 4) error("EQUIVALENT_CHOICES", question.questionId, JSON.stringify(normalized));
      if (!Array.isArray(question.steps) || question.steps.length < 3 || question.steps.some(step => typeof step !== "string" || !step.trim())) {
        error("MC_STEP_DEPTH", question.questionId, question.steps?.length ?? null);
      }
      if (question.difficulty === "literacy" && !String(question.literacyContextNecessity || "").trim()) {
        error("LITERACY_RATIONALE", question.questionId, "missing");
      }
      const review = skill.reviews.find(row => row.questionId === question.questionId);
      if (!review) error("MISSING_REVIEW", question.questionId, rel(skill.files.review));
      else {
        const reviewKey = review.reviewId || review.questionId;
        if (reviews.has(reviewKey)) error("DUPLICATE_REVIEW_ID", reviewKey, question.questionId);
        reviews.set(reviewKey, { record: review, file: skill.files.review });
        const linkedQuestionHash = review.questionContentSha256 || review.reviewedContentSha256 || review.questionSha256 || (!review.reviewId ? review.contentSha256 : null);
        if (linkedQuestionHash && linkedQuestionHash !== question.contentSha256) error("REVIEW_CONTENT_SHA", question.questionId, linkedQuestionHash);
        if (review.reviewId && review.contentSha256 !== contentSha(review)) error("REVIEW_SHA", question.questionId, "contentSha256");
        if (review.answerMatch !== true || review.uniqueCorrectAnswer !== true) error("REVIEW_ANSWER_FLAGS", question.questionId, "false");
        if (review.derivedAnswer !== question.choices[question.answerIndex] || review.storedAnswer !== question.choices[question.answerIndex]) {
          error("REVIEW_ANSWER_LINK", question.questionId, `${review.derivedAnswer}/${review.storedAnswer}`);
        }
        if (JSON.stringify(review.optionTruth) !== JSON.stringify(question.choices.map((_, index) => index === question.answerIndex))) {
          error("REVIEW_OPTION_TRUTH", question.questionId, JSON.stringify(review.optionTruth));
        }
        const reviewText = collectStrings(review).join("\n");
        for (const token of MACHINE_RESIDUE) if (reviewText.includes(token)) error("REVIEW_MACHINE_RESIDUE", question.questionId, token);
        for (const token of PROHIBITED_LANGUAGE) if (reviewText.includes(token)) error("REVIEW_LANGUAGE", question.questionId, token);
        if ("reviewSha256" in review && review.reviewSha256 !== reviewSha(review, "reviewSha256")) error("REVIEW_SHA", question.questionId, "reviewSha256");
        if ("reviewEvidenceSha256" in review && review.reviewEvidenceSha256 !== reviewSha(review, "reviewEvidenceSha256")) error("REVIEW_SHA", question.questionId, "reviewEvidenceSha256");
      }
    }

    for (const response of skill.cr) {
      const policy = response.answerOnlyPolicy || response.answerOnlyResponseHandling;
      if (policy !== ANSWER_ONLY_ZERO) error("CR_ANSWER_ONLY", response.questionId, policy);
      const rubric = new Map((response.rubric || []).map(level => [Number(level.score), String(level.criteria || "")]));
      if ([0, 1, 2, 3].some(score => !rubric.has(score))) error("CR_RUBRIC", response.questionId, [...rubric.keys()].join(","));
      if (!rubric.get(0)?.includes(ANSWER_ONLY_ZERO)) error("CR_RUBRIC_ZERO", response.questionId, rubric.get(0));
      if (!rubric.get(1)?.includes(SCORE_ONE_PROCESS)) error("CR_RUBRIC_ONE", response.questionId, rubric.get(1));
      if (!rubric.get(2)?.includes(SCORE_TWO_PROCESS)) error("CR_RUBRIC_TWO", response.questionId, rubric.get(2));
    }

    for (const drawing of skill.drawings) {
      const id = drawing.figureId || drawing.drawingSpecId;
      if (!id || drawings.has(id)) error("DUPLICATE_DRAWING_ID", id || `${skill.unit}-${skill.slot}`, rel(skill.files.drawing));
      else drawings.set(id, { record: drawing, file: skill.files.drawing });
      if (drawing.contentSha256 && drawing.contentSha256 !== contentSha(drawing)) error("DRAWING_SHA", id, rel(skill.files.drawing));
    }
  }

  const counts = {
    units: units.size,
    skills: skills.length,
    lectures: [...artifacts.values()].filter(item => item.type === "lecture").length,
    mc: [...artifacts.values()].filter(item => item.type === "mc").length,
    cr: [...artifacts.values()].filter(item => item.type === "cr").length,
    drawings: drawings.size,
    reviews: reviews.size
  };
  for (const [key, expected] of Object.entries(EXPECT)) if (counts[key] !== expected) error("CORPUS_COUNT", key, `${counts[key]}/${expected}`);

  const fieldRows = readJsonl(path.join(OUT, "field-review-ledger.jsonl"));
  const scopeRows = readJsonl(path.join(OUT, "scope-sequence-ledger.jsonl"));
  const repairRows = readJsonl(path.join(OUT, "repair-ledger.jsonl"));
  const summary = readJson(path.join(OUT, "repository-review-summary.json"));
  for (const [name, rows] of [["field", fieldRows], ["scope", scopeRows]]) {
    if (rows.length !== 5085) error("LEDGER_COUNT", name, rows.length);
    if (new Set(rows.map(row => row.artifactId)).size !== rows.length) error("LEDGER_DUPLICATE", name, "artifactId");
    if (rows.some(row => row.reviewer !== REVIEWER)) error("LEDGER_REVIEWER", name, "mismatch");
  }
  for (const row of fieldRows) {
    const artifact = artifacts.get(row.artifactId);
    if (!artifact) error("FIELD_LEDGER_ORPHAN", row.artifactId, row.sourcePath);
    else if (row.contentSha256 !== artifact.record.contentSha256) error("FIELD_LEDGER_SHA", row.artifactId, row.contentSha256);
  }
  if (repairRows.length !== summary.repairRecords) error("REPAIR_LEDGER_COUNT", "summary", `${repairRows.length}/${summary.repairRecords}`);
  if (repairRows.some(row => row.reviewer !== REVIEWER || !row.categories?.length || !row.changedFields?.length)) {
    error("REPAIR_LEDGER_SCHEMA", "repair-ledger", "reviewer/categories/changedFields");
  }

  const figureRows = readJsonl(path.join(OUT, "figure-review-ledger.jsonl"));
  if (figureRows.length !== 178 || new Set(figureRows.map(row => row.figureId)).size !== 178) error("FIGURE_LEDGER_COUNT", "figure-review-ledger", figureRows.length);
  let sourceRuntimeFigureMismatches = 0;
  for (const row of figureRows) {
    const sourceSvg = path.join(ROOT, ...row.sourceSvgPath.split("/"));
    const runtimeSvg = path.join(ROOT, ...row.runtimeSvgPath.split("/"));
    if (!fs.existsSync(sourceSvg) || hashFile(sourceSvg) !== row.sourceSvgSha256) error("FIGURE_SOURCE_SHA", row.figureId, row.sourceSvgPath);
    if (row.renders?.source?.desktop?.clippedInViewBox || row.renders?.source?.mobile?.clippedInViewBox) error("FIGURE_SOURCE_CLIPPING", row.figureId, "viewBox");
    if (row.renders?.source?.desktop?.horizontalOverflow || row.renders?.source?.mobile?.horizontalOverflow) error("FIGURE_SOURCE_OVERFLOW", row.figureId, "viewport");
    if (row.possibleAnswerLeakageCandidates?.length && !row.answerLeakageAdjudication) error("FIGURE_LEAKAGE_UNADJUDICATED", row.figureId, row.possibleAnswerLeakageCandidates.length);
    if (!row.sourceRuntimeByteIdentical) sourceRuntimeFigureMismatches++;
    if (REQUIRE_RUNTIME_SYNC) {
      if (!fs.existsSync(runtimeSvg) || hashFile(runtimeSvg) !== hashFile(sourceSvg) || !row.sourceRuntimeByteIdentical) error("FIGURE_RUNTIME_SYNC", row.figureId, row.runtimeSvgPath);
      if (row.renders?.runtime?.desktop?.clippedInViewBox || row.renders?.runtime?.mobile?.clippedInViewBox) error("FIGURE_RUNTIME_CLIPPING", row.figureId, "viewBox");
    }
  }

  const global = runGlobalAudit();
  if (global.counts.skillDirectories !== 339 || global.counts.mcQuestions !== 4068 || global.counts.constructedResponses !== 678) error("GLOBAL_AUDIT_COUNTS", "global", JSON.stringify(global.counts));
  if (global.contentAuthority.gapCount || global.legacyIsolation.issueCount || global.language.simplifiedIssueCount) error("GLOBAL_AUDIT_BLOCKER", "global", JSON.stringify(global.criticalBlockers));
  if (global.duplicates.exactMcPromptGroups?.length || global.duplicates.exactConstructedResponseGroups?.length || global.duplicates.crossUnitPromptSkeletonGroups?.length) {
    error("GLOBAL_DUPLICATE", "global", "exact or cross-unit skeleton");
  }
  const titleIssues = global.language.titlePunctuationIssues || [];
  if (titleIssues.length !== TITLE_EXCEPTIONS.size || titleIssues.some(issue => TITLE_EXCEPTIONS.get(issue.id) !== issue.title)) {
    error("TITLE_EXCEPTION_SET", "global", JSON.stringify(titleIssues));
  }
  const otherBlockers = (global.criticalBlockers || []).filter(blocker => blocker !== "title-punctuation");
  if (otherBlockers.length) error("GLOBAL_AUDIT_BLOCKER", "global", otherBlockers.join(","));

  const historical = readJson(DUPLICATE_ADJUDICATION);
  const retained = new Set(historical.retainedGroups.map(group => [...group.ids].sort().join("|")));
  const currentNumberGroups = global.duplicates.numberSwapCandidateGroups || [];
  for (const group of currentNumberGroups) {
    const key = group.map(item => item.id).sort().join("|");
    if (!retained.has(key)) error("UNADJUDICATED_NUMBER_SWAP", key, "not in historical retained set");
  }

  const allArtifactText = [...artifacts.values()].map(item => collectStrings(item.record).join("\n")).join("\n");
  for (const token of ["tan θ", "參數方程式", "高度矩陣", "配置矩陣", "示例矩陣"]) if (allArtifactText.includes(token)) error("SCOPE_TOKEN", "corpus", token);
  const u21s12 = skills.find(skill => skill.unit === "u21" && skill.slot === "s012");
  if (!u21s12 || collectStrings([u21s12.lecture, ...u21s12.mc, ...u21s12.cr]).join("\n").includes("向量")) error("U21_VECTOR_SCOPE", "u21-s012", "向量");

  if (errors.length) {
    const failure = new Error(`Phase 3 corpus validation failed (${errors.length})`);
    failure.findings = errors.sort((a, b) => `${a.code}|${a.id}|${a.detail}`.localeCompare(`${b.code}|${b.id}|${b.detail}`, "en"));
    throw failure;
  }
  return stable({
    status: "PASS_PHASE3_CORPUS_PENDING_CENTRAL_ACCEPTANCE",
    counts,
    policy: { syllabusLockSha256: LOCK_SHA, mcStepsMinimum: 3 },
    ledgers: { fieldReview: fieldRows.length, scopeSequence: scopeRows.length, repairs: repairRows.length, figures: figureRows.length },
    globalAudit: {
      exactMcPromptGroups: 0,
      exactConstructedResponseGroups: 0,
      crossUnitPromptSkeletonGroups: 0,
      numberSwapCandidateGroups: currentNumberGroups.length,
      titleExceptions: titleIssues.map(issue => issue.id).sort()
    },
    figures: { reviewed: figureRows.length, sourceRuntimeMismatches: sourceRuntimeFigureMismatches, runtimeSyncRequired: REQUIRE_RUNTIME_SYNC },
    semanticAcceptanceOwner: "ChatGPT",
    centralSemanticAcceptanceComplete: false
  });
}

const isDirect = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isDirect) {
  try {
    console.log(JSON.stringify(validatePhase3Corpus(), null, 2));
  } catch (failure) {
    console.error(JSON.stringify({
      status: "FAIL_PHASE3_CORPUS",
      message: failure.message,
      findings: failure.findings || [{ code: "INTERNAL", id: "validator", detail: failure.stack }]
    }, null, 2));
    process.exitCode = 1;
  }
}
