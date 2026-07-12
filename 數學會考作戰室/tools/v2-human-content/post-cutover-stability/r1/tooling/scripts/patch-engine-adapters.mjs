import fs from "node:fs";
import path from "node:path";
import { parseArgs, assert } from "./lib/common.mjs";

const a = parseArgs(process.argv.slice(2));
assert(a.repo, "Usage --repo");
const file = path.join(a.repo, "數學會考作戰室/human-runtime/engine.mjs");
const raw = fs.readFileSync(file, "utf8");
const eol = raw.includes("\r\n") ? "\r\n" : "\n";
let text = raw.replace(/\r\n/g, "\n");

const adaptCrOld = `  adaptCr(question) {
    const lock = this.lockByUnit.get(question.unitId); const skill = this.skillById.get(question.skillId)?.skill;
    const answer = (question.fullCreditSolution || []).at(-1) || "依完整解法與評分標準作答。";
    return {
      ...question, type: "cr", text: question.prompt, answer, v2UnitId: question.unitId, unitId: lock.numericId,
      difficultyBand: question.difficulty, difficulty: question.difficulty === "advanced" ? 4 : 3,
      ability: question.difficulty === "advanced" ? "analysis" : "application",
      explanation: (question.scoringNotes || []).join(" ") || "依策略正確性與表達完整性評分。",
      concept: (question.requiredWork || []).join("；"), steps: question.fullCreditSolution || [],
      rubric: (question.rubric || []).map(item => [String(item.score), item.criteria]),
      formula: (skill?.lecture?.formulas || []).map(item => item.formula).join("\\n"),
      tip: (question.requiredWork || []).at(-1) || "寫出完整推導與結論。",
      trap: (question.commonErrors || []).join("；") || "只寫答案不能呈現解題能力。",`;

const adaptCrNew = `  adaptCr(question) {
    const lock = this.lockByUnit.get(question.unitId); const skill = this.skillById.get(question.skillId)?.skill;
    const asList = value => Array.isArray(value) ? value : (value ? [value] : []);
    const solution = question.fullCreditSolution || question.standardSolution || [];
    const requiredWork = asList(question.requiredWork);
    const commonErrors = asList(question.commonErrors);
    const scoringNotes = asList(question.scoringNotes);
    const answer = solution.at(-1) || "依完整解法與評分標準作答。";
    return {
      ...question, type: "cr", text: question.prompt, answer, v2UnitId: question.unitId, unitId: lock.numericId,
      difficultyBand: question.difficulty, difficulty: question.difficulty === "advanced" ? 4 : 3,
      ability: question.difficulty === "advanced" ? "analysis" : "application",
      explanation: scoringNotes.join(" ") || "依策略正確性與表達完整性評分。",
      concept: requiredWork.join("；"), steps: solution,
      rubric: (question.rubric || []).map(item => [String(item.score), item.criteria]),
      formula: (skill?.lecture?.formulas || []).map(item => item.formula).join("\\n"),
      tip: requiredWork.at(-1) || "寫出完整推導與結論。",
      trap: commonErrors.join("；") || "只寫答案不能呈現解題能力。",`;

assert(text.includes(adaptCrOld), "adaptCr block not found");
text = text.replace(adaptCrOld, adaptCrNew);

const summaryOld = `summary: joinField(l.summary, "；"), concept: joinField(l.conceptNarrative, "\\n"), formula: formulas,`;
const summaryNew = `summary: joinField(l.summary || l.conciseSummary || l.learningOutcomes, "；"), concept: joinField(l.conceptNarrative || l.conceptDevelopment, "\\n"), formula: formulas,`;
assert(text.includes(summaryOld), "lecture summary block not found");
text = text.replace(summaryOld, summaryNew);

const stepOld = "stepGuide: (l.method || []).map(item => `${item.step}. ${item.instruction}（檢查：${item.check}）`),";
const stepNew = "stepGuide: (l.method || l.stepByStepMethod || []).map(item => `${item.step}. ${item.instruction}（檢查：${item.check}）`),";
assert(text.includes(stepOld), "lecture stepGuide block not found");
text = text.replace(stepOld, stepNew);

fs.writeFileSync(file, text.replace(/\n/g, eol), "utf8");
console.log(JSON.stringify({ status: "PATCHED_ENGINE_ADAPTERS", file }, null, 2));
