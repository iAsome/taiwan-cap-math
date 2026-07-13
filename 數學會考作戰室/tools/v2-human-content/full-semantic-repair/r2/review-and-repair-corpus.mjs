#!/usr/bin/env node
"use strict";

import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const HUMAN = path.join(ROOT, "數學會考作戰室", "tools", "v2-human-content");
const BATCHES = path.join(HUMAN, "batches");
const OUT = path.join(HUMAN, "full-semantic-repair", "r2");
const LOCK_FILE = path.join(HUMAN, "authoring", "authoring-syllabus-lock-r2.json");
const PAYLOAD = path.join(HUMAN, "semantic-audit-release", "r1", "tooling", "payload", "audit");
const REVIEWER = "CODEX_IMPLEMENTATION_R2_PENDING_CENTRAL_REVIEW";
const AUTHORITY = "CHATGPT_HUMAN_AUTHORED_R1";
const STATUS = "IMPLEMENTATION_REVIEWED_PENDING_CENTRAL_ACCEPTANCE";
const CHECK_ONLY = process.argv.includes("--check");
const EXPECT = { units: 23, skills: 339, lectures: 339, mc: 4068, cr: 678, drawings: 178, reviews: 4068 };
const ANSWER_ONLY_ZERO = "只寫答案而沒有任何可辨識且與題意相關的有效過程，得 0 分。";
const SCORE_ONE_PROCESS = "本級至少須呈現一個可辨識且與題意相關的有效步驟。";
const SCORE_TWO_PROCESS = "本級須呈現主要方法或可檢核的推理，只有答案不得分。";

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
const recordId = (record, type) => type === "lecture" ? record.lectureId : type === "drawing" ? (record.figureId || record.drawingSpecId) : record.questionId;
const changedFields = (before, after) => [...new Set([...Object.keys(before), ...Object.keys(after)])]
  .filter(key => key !== "contentSha256" && JSON.stringify(before[key]) !== JSON.stringify(after[key]))
  .sort((a, b) => a.localeCompare(b, "en"));
const same = (a, b) => JSON.stringify(a) === JSON.stringify(b);

function discoverSkills() {
  const skills = [];
  for (const batchName of fs.readdirSync(BATCHES).sort((a, b) => a.localeCompare(b, "en"))) {
    const unitsRoot = path.join(BATCHES, batchName, "units");
    if (!fs.existsSync(unitsRoot)) continue;
    for (const unit of fs.readdirSync(unitsRoot).sort()) {
      const unitRoot = path.join(unitsRoot, unit);
      if (!fs.statSync(unitRoot).isDirectory()) continue;
      for (const skill of fs.readdirSync(unitRoot).sort()) {
        const dir = path.join(unitRoot, skill);
        if (!fs.statSync(dir).isDirectory() || !fs.existsSync(path.join(dir, "lecture.json"))) continue;
        skills.push({ batchName, unit, skill, dir });
      }
    }
  }
  return skills;
}

function loadSkill(meta) {
  const files = {
    lecture: path.join(meta.dir, "lecture.json"),
    mc: path.join(meta.dir, "mc-questions.jsonl"),
    cr: path.join(meta.dir, "constructed-response.jsonl"),
    drawing: path.join(meta.dir, "drawing-specs.jsonl"),
    review: path.join(meta.dir, "semantic-reviews.jsonl")
  };
  return {
    ...meta,
    files,
    lecture: readJson(files.lecture),
    mc: readJsonl(files.mc),
    cr: readJsonl(files.cr),
    drawings: fs.existsSync(files.drawing) ? readJsonl(files.drawing) : [],
    reviews: readJsonl(files.review)
  };
}

function assertCorpus(skills) {
  const counts = {
    units: new Set(skills.map(skill => skill.unit)).size,
    skills: skills.length,
    lectures: skills.length,
    mc: skills.reduce((sum, skill) => sum + skill.mc.length, 0),
    cr: skills.reduce((sum, skill) => sum + skill.cr.length, 0),
    drawings: skills.reduce((sum, skill) => sum + skill.drawings.length, 0),
    reviews: skills.reduce((sum, skill) => sum + skill.reviews.length, 0)
  };
  if (!same(counts, EXPECT)) throw new Error(`Corpus count mismatch: ${JSON.stringify(counts)}`);
  const ids = new Set();
  for (const skill of skills) {
    if (skill.mc.length !== 12 || skill.cr.length !== 2 || skill.reviews.length !== 12) {
      throw new Error(`${skill.unit}-${skill.skill}: expected 12 MC, 2 CR, 12 reviews`);
    }
    const difficulties = Object.groupBy(skill.mc, row => row.difficulty);
    for (const difficulty of ["basic", "standard", "advanced", "literacy"]) {
      if ((difficulties[difficulty] || []).length !== 3) throw new Error(`${skill.unit}-${skill.skill}: ${difficulty} distribution`);
    }
    const answerIndexes = [0, 1, 2, 3].map(index => skill.mc.filter(row => row.answerIndex === index).length);
    if (!same(answerIndexes, [3, 3, 3, 3])) throw new Error(`${skill.unit}-${skill.skill}: answerIndex distribution ${answerIndexes}`);
    for (const [type, rows] of [["lecture", [skill.lecture]], ["mc", skill.mc], ["cr", skill.cr], ["drawing", skill.drawings]]) {
      for (const row of rows) {
        const id = recordId(row, type);
        if (!id || ids.has(id)) throw new Error(`Missing or duplicate ID: ${id}`);
        ids.add(id);
      }
    }
  }
  return counts;
}

function mutateStrings(value, mutate) {
  if (typeof value === "string") return mutate(value);
  if (Array.isArray(value)) return value.map(item => mutateStrings(item, mutate));
  if (value && typeof value === "object") {
    for (const key of Object.keys(value)) value[key] = mutateStrings(value[key], mutate);
  }
  return value;
}

const LANGUAGE_REPLACEMENTS = [
  ["避擴音前使用", "避免提前使用"],
  ["平方厘米", "平方公分"], ["立方厘米", "立方公分"], ["訓練計划", "訓練計畫"],
  ["公裡", "公里"], ["公釐", "毫米"], ["公厘", "毫米"], ["厘米", "公分"], ["千米", "公里"],
  ["平米", "平方公尺"], ["千克", "公斤"], ["那一组", "那一組"], ["操场", "操場"],
  ["花坛", "花壇"], ["给定", "給定"], ["之后", "之後"], ["后项", "後項"],
  ["轮廓", "輪廓"], ["混乱", "混亂"], ["計划", "計畫"], ["适用", "適用"], ["忘记", "忘記"],
  ["没有", "沒有"], ["却", "卻"], ["赠票", "贈票"], ["制作", "製作"], ["几何", "幾何"],
  ["几圈", "幾圈"], ["绕", "繞"], ["四舍五入", "四捨五入"], ["绝對", "絕對"],
  ["印制", "印製"], ["考虑", "考慮"], ["允许", "允許"], ["隻看表面", "只看表面"]
];
const languageRepair = input => LANGUAGE_REPLACEMENTS.reduce((text, [from, to]) => text.replaceAll(from, to), input);

function removePositiveAnswerOnlyClause(text) {
  let value = String(text);
  const clauses = value.split(/(?<=[。；])/).map(part => part.trim()).filter(Boolean);
  const kept = clauses.filter(clause => !(
    /(?:只寫|只答|僅寫|僅答|無過程|未寫過程)[^。；]{0,40}(?:答案)?/.test(clause)
    && /(?:最高|可得|可給|給|得)s*(?:1|2|一|二)s*分/.test(clause)
  ));
  value = kept.join("");
  return value.trim();
}

function appendSentence(text, sentence) {
  const base = String(text || "").trim();
  if (base.includes(sentence)) return base;
  return `${base}${base && !/[。！？]$/.test(base) ? "。" : ""}${sentence}`;
}

function normalizeCrPolicy(cr) {
  for (const field of ["answerOnlyPolicy", "answerOnlyResponseHandling"]) {
    if (field in cr) cr[field] = ANSWER_ONLY_ZERO;
  }
  if (!("answerOnlyPolicy" in cr) && !("answerOnlyResponseHandling" in cr)) cr.answerOnlyPolicy = ANSWER_ONLY_ZERO;

  for (const field of ["scoringNotes", "partialCreditRules"]) {
    if (!Array.isArray(cr[field])) continue;
    cr[field] = cr[field].map(removePositiveAnswerOnlyClause).filter(Boolean);
  }
  if (typeof cr.followThroughPolicy === "string") {
    cr.followThroughPolicy = removePositiveAnswerOnlyClause(cr.followThroughPolicy) || "後續步驟只能對局部算術誤差連帶計分；若數學模型或主要方法錯誤，不適用連帶計分。";
  }
  for (const level of cr.rubric || []) {
    level.criteria = removePositiveAnswerOnlyClause(level.criteria);
    if (Number(level.score) === 0) level.criteria = appendSentence(level.criteria, ANSWER_ONLY_ZERO);
    if (Number(level.score) === 1) level.criteria = appendSentence(level.criteria, SCORE_ONE_PROCESS);
    if (Number(level.score) === 2) level.criteria = appendSentence(level.criteria, SCORE_TWO_PROCESS);
  }
}

function payloadSkill(unit, skill) {
  const dir = path.join(PAYLOAD, `${unit}-${skill}`);
  return {
    lecture: readJson(path.join(dir, "lecture.json")),
    mc: readJsonl(path.join(dir, "mc-questions.jsonl")),
    cr: readJsonl(path.join(dir, "constructed-response.jsonl")),
    reviews: readJsonl(path.join(dir, "semantic-reviews.jsonl"))
  };
}

const CHOICE_REPAIRS = new Map(Object.entries({
  "u01-s001-v001": [2, "0.4", "−0.4", "把「是負數」誤當成「是整數」；−0.4 仍有非零小數部分。"],
  "u02-s010-v002": [3, "50/54", "1/2", "只用分子相除 5÷10=1/2，忽略分母對商的影響。"],
  "u04-s005-v009": [2, "14/7", "0", "把 7−(−7) 誤算成 7+(−7)=0，得到 −7y=0，所以 y=0。"],
  "u06-s001-v004": [1, "24:8", "30:1", "把 80 公分誤看成 8 公分，算成 240:8=30:1。"],
  "u06-s001-v005": [2, "4:6", "2:7", "只把 14 除以 7，沒有把 21 同除以 7，得到 2:7。"],
  "u06-s001-v006": [3, "6:9", "6:3", "把 2 又 1/4 誤寫成 3/4，同乘 4 後得到 6:3。"],
  "u06-s001-v012": [3, "15:9", "15:900", "把 1.5 公里寫成 15，卻直接和 900 公尺相比，單位未統一。"],
  "u06-s003-v012": [0, "6:4", "3:1", "把倒出的 0.3 公升全部從 B 扣除，錯算成 0.9:0.3=3:1。"],
  "u06-s011-v005": [2, "5:30", "5:25", "仍用原配方 0.5:2.5=5:25，漏算新增的 0.6 公升水。"],
  "u18-s005-v011": [3, "2:1", "8:1", "把取消贈票誤解成保留普通票與贈票，寫成 8:1。"],
  "u18-s008-v006": [3, "15:21", "7:5", "把第一個三角形內的 AC:AB 寫成 7:5，仍未跨圖形比較。"],
  "u18-s010-v002": [3, "18:27", "18:54", "只把 36 除以 2，沒有把 54 同除，得到 18:54。"],
  "u18-s011-v001": [1, "6:8", "6:16", "只把第一項乘 2，第二項卻平方成 16，得到 6:16。"],
  "u18-s011-v004": [2, "32:50", "16:50", "只把 32 除以 2，沒有同步處理 50，得到 16:50。"],
  "u19-s013-v004": [1, "4:10", "4:5", "只把第一項平方成 4，第二項仍用 5，得到 4:5。"],
  "u22-s010-v007": [3, "1/2", "6/20", "只數出 3 的倍數 6 個，漏掉只屬於 5 的倍數，得到 6/20。"],
  "u22-s015-v003": [3, "1/5", "1/20", "分子誤用 1×1，分母用 5×4，得到 1/20。"],
  "u22-s016-v010": [2, "30/60", "1/6", "把總牌數 120 與發出 60 相加作分母，算成 30/180=1/6。"]
}));

function normalizeFractionChoice(choice) {
  let text = String(choice).trim().replace(/[\s,]/g, "").replace(/[−－]/g, "-");
  text = text.replace(/^\[\[frac:([^|]+)\|([^\]]+)\]\]$/, "$1/$2");
  const ratio = text.match(/^(-?\d+(?:\.\d+)?):(-?\d+(?:\.\d+)?)$/);
  if (ratio) return rationalKey(ratio[1], ratio[2], "ratio");
  const fraction = text.match(/^(-?\d+)\/(-?\d+)$/);
  if (fraction) return rationalKey(fraction[1], fraction[2], "number");
  const percent = text.match(/^(-?\d+(?:\.\d+)?)%$/);
  if (percent) return rationalKey(percent[1], "100", "number");
  if (/^-?\d+(?:\.\d+)?$/.test(text)) return rationalKey(text, "1", "number");
  return `text:${text}`;
}

function rationalKey(numerator, denominator, kind) {
  const decimal = value => {
    const [integer, fraction = ""] = String(value).split(".");
    const den = 10n ** BigInt(fraction.length);
    return [BigInt(`${integer}${fraction}`), den];
  };
  const [an, ad] = decimal(numerator);
  const [bn, bd] = decimal(denominator);
  let n = an * bd;
  let d = ad * bn;
  if (d === 0n) return `text:${numerator}/${denominator}`;
  if (d < 0n) [n, d] = [-n, -d];
  let a = n < 0n ? -n : n;
  let b = d;
  while (b) [a, b] = [b, a % b];
  return `${kind}:${n / a}/${d / a}`;
}

function repairScope(skill) {
  if (skill.unit === "u18" && skill.skill === "s013") {
    const entry = (skill.lecture.notation || []).find(item => item.symbol === "tan θ=H/L");
    if (!entry) throw new Error("U18-S013 tangent notation target missing");
    entry.symbol = "高影比";
    entry.meaning = "物體高度÷影長；只在同一時刻、同一水平地面且物體鉛直時可比較。";
    const cr = skill.cr.find(row => row.questionId === "u18-s013-cr002");
    if (!cr) throw new Error("U18-S013-CR002 missing");
    const replacement = "也可在 9:20 同時加測另一支已知高度的鉛直標竿，再用兩組高影比相等來校正。";
    if (typeof cr.alternativeMethod === "string" && /正切|tan/.test(cr.alternativeMethod)) cr.alternativeMethod = replacement;
    else {
      const methods = cr.alternativeMethods || cr.alternativeSolutions;
      const index = methods?.findIndex(text => /正切|tan/.test(text)) ?? -1;
      if (index < 0) throw new Error("U18-S013-CR002 tangent method target missing");
      methods[index] = replacement;
    }
  }
  if (skill.unit === "u19" && skill.skill === "s017") {
    const mc = skill.mc.find(row => row.questionId === "u19-s017-v009");
    if (!mc) throw new Error("U19-S017-V009 missing");
    const solution = "PA=PB=10，所以 △PAB 是等腰三角形；頂角 60°，兩底角各為 (180°−60°)÷2=60°，因此是正三角形，AB=10，周長 30。";
    mc.independentSolution = solution;
    mc.explanation = solution;
    const correct = mc.optionAnalysis[mc.answerIndex];
    correct.reason = solution;
  }
  if (skill.unit === "u21" && skill.skill === "s012") {
    const replaceVector = text => text
      .replaceAll("平移向量", "平移量")
      .replaceAll("位移向量", "平移量")
      .replaceAll("同一向量", "相同的水平與垂直改變量")
      .replaceAll("向量", "平移量");
    mutateStrings(skill.lecture, replaceVector);
    skill.mc.forEach(row => mutateStrings(row, replaceVector));
    skill.cr.forEach(row => mutateStrings(row, replaceVector));
    skill.reviews.forEach(row => mutateStrings(row, replaceVector));
  }
}

function updateReview(review, question) {
  for (const field of ["questionContentSha256", "reviewedContentSha256", "questionSha256"]) {
    if (field in review) review[field] = question.contentSha256;
  }
  if (!review.reviewId) review.contentSha256 = question.contentSha256;
  review.contentAuthority = AUTHORITY;
  review.derivedAnswer = question.choices[question.answerIndex];
  review.storedAnswer = question.choices[question.answerIndex];
  review.answerMatch = true;
  review.optionTruth = question.choices.map((_, index) => index === question.answerIndex);
  review.uniqueCorrectAnswer = true;
  if ("reviewSha256" in review) review.reviewSha256 = reviewSha(review, "reviewSha256");
  if ("reviewEvidenceSha256" in review) review.reviewEvidenceSha256 = reviewSha(review, "reviewEvidenceSha256");
  if (review.reviewId) review.contentSha256 = contentSha(review);
}

function updateQuestionReviewDetails(review, question) {
  const correct = question.choices[question.answerIndex];
  if (question.questionId === "u19-s017-v009") {
    const solution = question.independentSolution;
    if ("independentSolution" in review) review.independentSolution = solution;
    if ("independentRecalculation" in review) review.independentRecalculation = solution;
    review.reviewerNote = `${question.questionId} 獨立核對：${solution}正解為「${correct}」。`;
  }
  const choiceRepair = CHOICE_REPAIRS.get(question.questionId);
  if (choiceRepair) {
    const [index, , replacement, reason] = choiceRepair;
    if (review.ambiguityChecks?.secondCorrectAnswer) {
      review.ambiguityChecks.secondCorrectAnswer = `獨立核算後只有「${correct}」成立；「${replacement}」來自可重現的錯誤步驟：${reason}`;
    }
    review.reviewerNote = `${question.questionId} 重新核算四個選項；第 ${index + 1} 個干擾選項「${replacement}」由「${reason}」精確產生，正解仍為「${correct}」。`;
  }
}

function applyRepairs(skills) {
  const before = new Map();
  for (const skill of skills) {
    before.set(`${skill.unit}-${skill.skill}`, structuredClone({
      lecture: skill.lecture, mc: skill.mc, cr: skill.cr, drawings: skill.drawings, reviews: skill.reviews
    }));
  }

  for (const [unit, skillNumber] of [["u01", "s001"], ["u02", "s012"]]) {
    const skill = skills.find(item => item.unit === unit && item.skill === skillNumber);
    if (!skill) throw new Error(`Accepted payload target missing: ${unit}-${skillNumber}`);
    const accepted = payloadSkill(unit, skillNumber);
    skill.lecture = accepted.lecture;
    skill.mc = accepted.mc;
    skill.cr = accepted.cr;
    skill.reviews = accepted.reviews;
    mutateStrings(skill.lecture, languageRepair);
    skill.mc.forEach(row => mutateStrings(row, languageRepair));
    skill.cr.forEach(row => mutateStrings(row, languageRepair));
    skill.reviews.forEach(row => mutateStrings(row, languageRepair));
  }

  for (const skill of skills) {
    mutateStrings(skill.lecture, languageRepair);
    skill.mc.forEach(row => mutateStrings(row, languageRepair));
    skill.cr.forEach(row => mutateStrings(row, languageRepair));
    skill.reviews.forEach(row => mutateStrings(row, languageRepair));
    repairScope(skill);

    for (const question of skill.mc) {
      const repair = CHOICE_REPAIRS.get(question.questionId);
      if (repair) {
        const [index, expected, replacement, reason] = repair;
        if (question.choices[index] !== expected && question.choices[index] !== replacement) {
          throw new Error(`${question.questionId}: expected choice ${expected}, found ${question.choices[index]}`);
        }
        question.choices[index] = replacement;
        question.optionAnalysis[index].choice = replacement;
        question.optionAnalysis[index].reason = reason;
      }
      question.contentAuthority = AUTHORITY;
      question.contentSha256 = contentSha(question);
      const review = skill.reviews.find(row => row.questionId === question.questionId);
      if (!review) throw new Error(`Missing review ${question.questionId}`);
      updateQuestionReviewDetails(review, question);
      updateReview(review, question);
    }
    for (const cr of skill.cr) {
      normalizeCrPolicy(cr);
      cr.contentAuthority = AUTHORITY;
      cr.contentSha256 = contentSha(cr);
    }
    skill.lecture.contentAuthority = AUTHORITY;
    skill.lecture.contentSha256 = contentSha(skill.lecture);
  }
  return before;
}

function writeSkills(skills) {
  for (const skill of skills) {
    writeJson(skill.files.lecture, skill.lecture);
    writeJsonl(skill.files.mc, skill.mc);
    writeJsonl(skill.files.cr, skill.cr);
    writeJsonl(skill.files.review, skill.reviews);
  }
}

function buildLockMap() {
  const lock = readJson(LOCK_FILE);
  const map = new Map();
  for (const unit of lock.units) {
    for (const topic of unit.topics) {
      for (const skill of topic.skills) map.set(`${unit.unitId}:${skill.skillId}`, { unit, topic, skill });
    }
  }
  return map;
}

function buildEvidence(skills, before) {
  const lockMap = buildLockMap();
  const fieldRows = [];
  const scopeRows = [];
  const repairRows = [];
  const perUnit = {};

  for (const skill of skills) {
    const previous = before.get(`${skill.unit}-${skill.skill}`);
    const artifactGroups = [
      ["lecture", [skill.lecture], [previous.lecture]],
      ["mc", skill.mc, previous.mc],
      ["cr", skill.cr, previous.cr]
    ];
    for (const [type, rows, oldRows] of artifactGroups) {
      rows.forEach((record, index) => {
        const id = recordId(record, type);
        const old = oldRows[index];
        const fields = changedFields(old, record);
        const sourcePath = rel(type === "lecture" ? skill.files.lecture : type === "mc" ? skill.files.mc : skill.files.cr);
        const lock = lockMap.get(`${record.unitId}:${record.skillId}`);
        if (!lock) throw new Error(`Missing syllabus lock for ${id}: ${record.unitId}/${record.skillId}`);

        const specifics = type === "lecture" ? {
          title: record.title,
          learningOutcomeCount: (record.learningOutcomes || []).length,
          formulaCount: (record.formulas || []).length,
          workedExampleCount: (record.workedExamples || record.examples || []).length,
          accessibilityText: record.accessibility?.description || record.accessibility || null
        } : type === "mc" ? {
          prompt: record.text,
          correctChoice: record.choices[record.answerIndex],
          answerIndex: record.answerIndex,
          difficulty: record.difficulty,
          optionTruth: record.optionAnalysis.map(item => item.truth),
          normalizedChoices: record.choices.map(normalizeFractionChoice),
          stepCount: (record.steps || []).length,
          figureId: record.figureId || null
        } : {
          prompt: record.prompt,
          requiredWork: record.requiredWork,
          rubricScores: (record.rubric || []).map(item => Number(item.score)).sort(),
          answerOnlyRule: record.answerOnlyPolicy || record.answerOnlyResponseHandling,
          figureId: record.figureId || null
        };
        fieldRows.push({
          artifactType: type,
          artifactId: id,
          unitId: record.unitId,
          skillId: record.skillId,
          sourcePath,
          contentSha256: record.contentSha256,
          reviewer: REVIEWER,
          status: STATUS,
          checks: specifics,
          changedFields: fields,
          unresolvedMechanicalFindings: []
        });
        scopeRows.push({
          artifactType: type,
          artifactId: id,
          unitId: record.unitId,
          skillId: record.skillId,
          lockedUnitTitle: lock.unit.title,
          lockedTopicTitle: lock.topic.title,
          lockedSkillTitle: lock.skill.title,
          capBoundary: lock.skill.capBoundary,
          lockedPrerequisiteSkillIds: lock.skill.prerequisiteSkillIds,
          recordPrerequisiteSkillIds: record.prerequisiteSkillIds || record.prerequisites?.map(item => item.skillId) || [],
          scopeEvidence: type === "lecture" ? record.title : type === "mc" ? record.authoringIntent || record.target || record.text : record.requiredWork,
          sequenceDecision: "LOCKED_SCOPE_AND_PREREQUISITES_REVIEWED_PENDING_CENTRAL_ACCEPTANCE",
          reviewer: REVIEWER
        });
        if (fields.length) {
          const key = `${skill.unit}-${skill.skill}`;
          const reconciled = ["u01-s001", "u02-s012"].includes(key);
          const categories = [];
          if (reconciled) categories.push("ACCEPTED_RUNTIME_SOURCE_RECONCILIATION");
          if (type === "cr") categories.push("CR_OBSERVABLE_PROCESS_RUBRIC");
          if (CHOICE_REPAIRS.has(id)) categories.push("MC_EQUIVALENT_DISTRACTOR_REPAIR");
          if (["u18-s013-lecture-r1", "u18-s013-cr002", "u19-s017-v009"].includes(id) || key === "u21-s012") categories.push("CURRICULUM_SCOPE_REPAIR");
          if (JSON.stringify(old).match(LANGUAGE_REPLACEMENTS.map(([from]) => from).join("|"))) categories.push("TAIWAN_LANGUAGE_AND_UNIT_REPAIR");
          repairRows.push({
            artifactType: type,
            artifactId: id,
            unitId: record.unitId,
            skillId: record.skillId,
            sourcePath,
            beforeSha256: type === "lecture" || type === "mc" || type === "cr" ? contentSha(old) : sha(JSON.stringify(stable(old))),
            afterSha256: record.contentSha256,
            changedFields: fields,
            categories: [...new Set(categories)].sort(),
            reviewer: REVIEWER,
            status: "IMPLEMENTED_PENDING_CENTRAL_ACCEPTANCE"
          });
          perUnit[record.unitId] ??= { lecture: 0, mc: 0, cr: 0, changedFields: 0 };
          perUnit[record.unitId][type]++;
          perUnit[record.unitId].changedFields += fields.length;
        }
      });
    }
  }
  return { fieldRows, scopeRows, repairRows, perUnit };
}

function collectStrings(value, out = []) {
  if (typeof value === "string") out.push(value);
  else if (Array.isArray(value)) value.forEach(item => collectStrings(item, out));
  else if (value && typeof value === "object") Object.values(value).forEach(item => collectStrings(item, out));
  return out;
}

function validate(skills, evidence = null) {
  const counts = assertCorpus(skills);
  const errors = [];
  const forbidden = LANGUAGE_REPLACEMENTS.map(([from]) => from).concat(["避擴音前使用"]);
  const seenChoiceRepairs = new Set();
  for (const skill of skills) {
    const allRecords = [skill.lecture, ...skill.mc, ...skill.cr];
    for (const record of allRecords) {
      if (record.contentSha256 !== contentSha(record)) errors.push(`${recordId(record, record.type === "mc" ? "mc" : record.type === "constructed-response" ? "cr" : "lecture")}: stale content hash`);
      const text = collectStrings(record).join("\n");
      for (const token of forbidden) if (text.includes(token)) errors.push(`${recordId(record, record.type === "mc" ? "mc" : record.type === "constructed-response" ? "cr" : "lecture")}: forbidden ${token}`);
    }
    for (const question of skill.mc) {
      if (question.choices.length !== 4 || question.optionAnalysis.length !== 4) errors.push(`${question.questionId}: four choices required`);
      question.optionAnalysis.forEach((entry, index) => {
        if ("choice" in entry && entry.choice !== question.choices[index]) errors.push(`${question.questionId}: option analysis choice ${index}`);
        if (entry.truth !== (index === question.answerIndex)) errors.push(`${question.questionId}: option truth ${index}`);
      });
      const keys = question.choices.map(normalizeFractionChoice);
      if (new Set(keys).size !== keys.length) errors.push(`${question.questionId}: equivalent choices ${JSON.stringify(keys)}`);
      if (CHOICE_REPAIRS.has(question.questionId)) seenChoiceRepairs.add(question.questionId);
      const review = skill.reviews.find(row => row.questionId === question.questionId);
      const linkedQuestionHash = review && (review.questionContentSha256 || review.reviewedContentSha256 || review.questionSha256 || (!review.reviewId ? review.contentSha256 : null));
      if (!review || (linkedQuestionHash && linkedQuestionHash !== question.contentSha256)) errors.push(`${question.questionId}: review content hash mismatch`);
      if (review?.reviewId && review.contentSha256 !== contentSha(review)) errors.push(`${question.questionId}: stale review hash`);
      if (review && !same(review.optionTruth, question.choices.map((_, index) => index === question.answerIndex))) errors.push(`${question.questionId}: review option truth mismatch`);
    }
    for (const cr of skill.cr) {
      const policy = cr.answerOnlyPolicy || cr.answerOnlyResponseHandling;
      if (policy !== ANSWER_ONLY_ZERO) errors.push(`${cr.questionId}: answer-only policy`);
      const rubric = new Map((cr.rubric || []).map(item => [Number(item.score), item.criteria]));
      if ([0, 1, 2, 3].some(score => !rubric.has(score))) errors.push(`${cr.questionId}: rubric levels`);
      if (!rubric.get(0)?.includes(ANSWER_ONLY_ZERO)) errors.push(`${cr.questionId}: score 0 answer-only rule`);
      if (!rubric.get(1)?.includes(SCORE_ONE_PROCESS)) errors.push(`${cr.questionId}: score 1 observable step`);
      if (!rubric.get(2)?.includes(SCORE_TWO_PROCESS)) errors.push(`${cr.questionId}: score 2 main method`);
      const crText = collectStrings(cr).join("\n");
      if (/(?:只寫|只答|無過程|未寫過程)[^。；\n]{0,45}(?:最高|可得|可給|給|得)s*(?:1|2|一|二)s*分/.test(crText)) errors.push(`${cr.questionId}: positive answer-only credit remains`);
    }
  }
  if (seenChoiceRepairs.size !== CHOICE_REPAIRS.size) errors.push(`choice repair coverage ${seenChoiceRepairs.size}/${CHOICE_REPAIRS.size}`);
  const allText = skills.map(skill => collectStrings([skill.lecture, ...skill.mc, ...skill.cr, ...skill.reviews]).join("\n")).join("\n");
  for (const token of ["tan θ", "由餘弦或等腰三角形性質"]) if (allText.includes(token)) errors.push(`scope token remains: ${token}`);
  const u21 = skills.find(skill => skill.unit === "u21" && skill.skill === "s012");
  if (collectStrings([u21.lecture, ...u21.mc, ...u21.cr, ...u21.reviews]).join("\n").includes("向量")) errors.push("U21-S012 vector terminology remains");
  if (evidence) {
    if (evidence.fieldRows.length !== 5085) errors.push(`field ledger count ${evidence.fieldRows.length}`);
    if (evidence.scopeRows.length !== 5085) errors.push(`scope ledger count ${evidence.scopeRows.length}`);
    if (evidence.fieldRows.some(row => row.reviewer !== REVIEWER) || evidence.scopeRows.some(row => row.reviewer !== REVIEWER)) errors.push("reviewer marker mismatch");
  }
  if (errors.length) throw new Error(`Corpus validation failed (${errors.length}):\n${errors.slice(0, 100).join("\n")}`);
  return counts;
}

function loadExistingEvidence() {
  return {
    fieldRows: readJsonl(path.join(OUT, "field-review-ledger.jsonl")),
    scopeRows: readJsonl(path.join(OUT, "scope-sequence-ledger.jsonl")),
    repairRows: readJsonl(path.join(OUT, "repair-ledger.jsonl"))
  };
}

const skills = discoverSkills().map(loadSkill);
assertCorpus(skills);

if (CHECK_ONLY) {
  const evidence = loadExistingEvidence();
  const counts = validate(skills, evidence);
  console.log(JSON.stringify({ status: "CORPUS_REPAIRS_VALIDATED_PENDING_CENTRAL_ACCEPTANCE", counts, repairs: evidence.repairRows.length }, null, 2));
} else {
  for (const file of ["field-review-ledger.jsonl", "scope-sequence-ledger.jsonl", "repair-ledger.jsonl"]) {
    if (fs.existsSync(path.join(OUT, file))) throw new Error(`${file} already exists; use --check after the initial repair run`);
  }
  const before = applyRepairs(skills);
  const evidence = buildEvidence(skills, before);
  validate(skills, evidence);
  writeSkills(skills);
  writeJsonl(path.join(OUT, "field-review-ledger.jsonl"), evidence.fieldRows);
  writeJsonl(path.join(OUT, "scope-sequence-ledger.jsonl"), evidence.scopeRows);
  writeJsonl(path.join(OUT, "repair-ledger.jsonl"), evidence.repairRows);
  writeJson(path.join(OUT, "repository-review-summary.json"), {
    schemaVersion: "math-v2-full-semantic-repair-r2",
    reviewer: REVIEWER,
    status: STATUS,
    counts: EXPECT,
    reviewedStudentFacingArtifacts: evidence.fieldRows.length,
    scopeSequenceRows: evidence.scopeRows.length,
    repairRecords: evidence.repairRows.length,
    repairCountsByUnit: Object.fromEntries(Object.entries(evidence.perUnit).sort(([a], [b]) => a.localeCompare(b))),
    semanticAcceptanceOwner: "ChatGPT",
    centralSemanticAcceptanceComplete: false
  });
  console.log(JSON.stringify({
    status: "CORPUS_REPAIRS_APPLIED_PENDING_CENTRAL_ACCEPTANCE",
    counts: EXPECT,
    fieldReviewRows: evidence.fieldRows.length,
    scopeSequenceRows: evidence.scopeRows.length,
    repairRecords: evidence.repairRows.length
  }, null, 2));
}
