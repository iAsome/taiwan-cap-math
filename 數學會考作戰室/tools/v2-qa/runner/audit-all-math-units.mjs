#!/usr/bin/env node
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import vm from "node:vm";
import policy from "../policies/math-tw-v1.mjs";
import { hashPolicy, stableSerialize } from "../policies/policy-hash.mjs";
import inventory from "../inventory/math-units-u01-u10.mjs";
import { validateTask } from "../tasks/schema.mjs";
import { auditLectureBank, auditQuestionBank, auditSourceText, mergeAuditResults } from "../checkers/content-standard.mjs";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../../../../");

function readGit(ref, repoPath) {
  const type = execFileSync("git", ["cat-file", "-t", ref], { cwd: repoRoot, encoding: "utf8" }).trim();
  assert.equal(type, "commit", `${ref} is not a commit`);
  return execFileSync("git", ["show", `${ref}:${repoPath}`], { cwd: repoRoot, encoding: "utf8", maxBuffer: 64 * 1024 * 1024 });
}

function loadBank(ref, repoPath, globalName) {
  const context = { window: {} };
  vm.runInNewContext(readGit(ref, repoPath), context, { filename: repoPath, timeout: 10_000 });
  const bank = context.window[globalName];
  assert(Array.isArray(bank), `${repoPath}: ${globalName} is not an array`);
  return bank;
}

function parseArgs(argv) {
  const args = {};
  for (let i = 0; i < argv.length; i += 2) {
    assert(["--task", "--output"].includes(argv[i]), `unknown argument ${argv[i]}`);
    assert(argv[i + 1], `${argv[i]} requires a value`);
    args[argv[i].slice(2)] = argv[i + 1];
  }
  assert(args.task, "--task is required");
  return args;
}

function countBy(items, field) {
  const counts = {};
  for (const item of items) counts[item[field]] = (counts[item[field]] ?? 0) + 1;
  return Object.fromEntries(Object.entries(counts).sort(([a], [b]) => a < b ? -1 : a > b ? 1 : 0));
}

export function runAudit({ taskPath, outputPath } = {}) {
  const task = validateTask(JSON.parse(readFileSync(path.resolve(taskPath), "utf8")));
  const policyHash = hashPolicy();
  assert.equal(task.policy.id, policy.id, "policy ID mismatch");
  assert.equal(task.policy.version, policy.version, "policy version mismatch");
  assert.equal(task.policy.hash, policyHash, "policy hash mismatch");
  const results = [], perUnit = {};
  for (const unitId of task.units) {
    const item = inventory.units[unitId];
    assert(item, `inventory missing ${unitId}`); assert.equal(task.refs.units[unitId], item.ref, `${unitId} ref mismatch`);
    const suffix = unitId.toLowerCase();
    const questions = loadBank(item.ref, item.questionBankPath, `MATH_QUESTION_BANK_V2_${unitId}`);
    const lectures = loadBank(item.ref, item.lectureBankPath, `MATH_LECTURE_V2_${unitId}`);
    const skills = new Set(questions.map(q => q.skillId)).size;
    assert.deepEqual({ questions: questions.length, lectures: lectures.length, skills }, task.expectedInventory[unitId]);
    results.push(auditQuestionBank({ unit: unitId, path: item.questionBankPath, questions, policy }));
    results.push(auditLectureBank({ unit: unitId, path: item.lectureBankPath, lectures, policy }));
    perUnit[unitId] = { questions: questions.length, lectures: lectures.length, skills };
    void suffix;
  }
  if (task.includeLegacy) for (const repoPath of inventory.legacySourcePaths) results.push(auditSourceText({ path: repoPath, text: readGit(task.refs.legacyUi, repoPath), policy }));
  if (task.includeUi) for (const repoPath of inventory.uiPaths) results.push(auditSourceText({ path: repoPath, text: readGit(task.refs.legacyUi, repoPath), policy, unit: "UI" }));
  const merged = mergeAuditResults(results);
  const summary = {
    taskId: task.taskId,
    policy: { id: policy.id, version: policy.version, hash: policyHash },
    perUnit,
    counts: {
      mechanicalBySeverity: countBy(merged.mechanical, "severity"),
      mechanicalByCategory: countBy(merged.mechanical, "category"),
      requiresHumanReview: merged.requiresHumanReview.length
    },
    findings: merged
  };
  const json = `${stableSerialize(summary)}\n`;
  if (outputPath) writeFileSync(path.resolve(outputPath), json, { flag: "w" });
  return { summary, json };
}

export function main(argv = process.argv.slice(2)) {
  const args = parseArgs(argv);
  const result = runAudit({ taskPath: args.task, outputPath: args.output });
  console.log(`Policy: ${result.summary.policy.id} ${result.summary.policy.version} ${result.summary.policy.hash}`);
  for (const [unit, counts] of Object.entries(result.summary.perUnit)) console.log(`${unit}: ${counts.questions} questions, ${counts.lectures} lectures, ${counts.skills} skills`);
  console.log(`Mechanical findings by severity: ${JSON.stringify(result.summary.counts.mechanicalBySeverity)}`);
  console.log(`Mechanical findings by category: ${JSON.stringify(result.summary.counts.mechanicalByCategory)}`);
  console.log(result.json.trim());
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  try { main(); } catch (error) { console.error(error.stack || error.message); process.exitCode = 1; }
}
