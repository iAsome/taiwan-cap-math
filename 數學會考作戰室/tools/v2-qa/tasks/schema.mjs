import assert from "node:assert/strict";

const SHA = /^[0-9a-f]{40}$/;
const HASH = /^[0-9a-f]{64}$/;
const TOP = ["taskId", "policy", "refs", "units", "includeLegacy", "includeUi", "checks", "expectedInventory", "outputPath", "automaticContentUpdates", "automaticLockUpdates"];
const POLICY = ["id", "version", "hash"];
const REFS = ["sharedQa", "legacyUi", "units"];
export const SUPPORTED_CHECKS = Object.freeze(["schema", "thresholds", "terminology", "units", "notation", "duplicates", "visual", "coverage", "legacy", "ui", "policy"]);

function exactKeys(value, allowed, label) {
  assert(value && typeof value === "object" && !Array.isArray(value), `${label} must be an object`);
  for (const key of Object.keys(value)) assert(allowed.includes(key), `${label}: unknown key ${key}`);
}

export function validateTask(task) {
  exactKeys(task, TOP, "task");
  for (const key of ["taskId", "policy", "refs", "units", "includeLegacy", "includeUi", "checks", "expectedInventory"]) assert(key in task, `task: missing ${key}`);
  assert.match(task.taskId, /^[A-Z0-9-]+$/);
  exactKeys(task.policy, POLICY, "policy");
  assert.equal(typeof task.policy.id, "string"); assert.equal(typeof task.policy.version, "string"); assert.match(task.policy.hash, HASH);
  exactKeys(task.refs, REFS, "refs"); assert.match(task.refs.sharedQa, SHA); assert.match(task.refs.legacyUi, SHA);
  exactKeys(task.refs.units, task.units, "refs.units");
  assert(Array.isArray(task.units) && task.units.length > 0 && new Set(task.units).size === task.units.length);
  for (const unit of task.units) { assert.match(unit, /^U(?:0[1-9]|10)$/); assert.match(task.refs.units[unit], SHA); }
  assert.equal(typeof task.includeLegacy, "boolean"); assert.equal(typeof task.includeUi, "boolean");
  assert(Array.isArray(task.checks) && task.checks.length > 0 && task.checks.every(x => typeof x === "string"));
  assert.equal(new Set(task.checks).size, task.checks.length, "checks: duplicate identifier");
  for (const check of task.checks) assert(SUPPORTED_CHECKS.includes(check), `checks: unknown identifier ${check}`);
  for (const required of ["schema", "policy"]) assert(task.checks.includes(required), `checks: ${required} is required`);
  assert.equal(task.checks.includes("legacy"), task.includeLegacy, "checks: legacy must match includeLegacy");
  assert.equal(task.checks.includes("ui"), task.includeUi, "checks: ui must match includeUi");
  exactKeys(task.expectedInventory, task.units, "expectedInventory");
  for (const unit of task.units) { exactKeys(task.expectedInventory[unit], ["questions", "lectures", "skills"], `expectedInventory.${unit}`); for (const value of Object.values(task.expectedInventory[unit])) assert(Number.isInteger(value) && value > 0); }
  if ("outputPath" in task) assert.equal(typeof task.outputPath, "string");
  assert.equal(task.automaticContentUpdates, false); assert.equal(task.automaticLockUpdates, false);
  return task;
}
