#!/usr/bin/env node
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { validateTask } from "../tasks/schema.mjs";

const task = JSON.parse(readFileSync(new URL("../tasks/MATH-V2-GLOBAL-RETRO-AUDIT.json", import.meta.url), "utf8"));
validateTask(task);
assert.throws(() => validateTask({ ...task, unknown: true }), /unknown key/);
assert.throws(() => validateTask({ ...task, taskId: undefined }));
assert.throws(() => validateTask({ ...task, refs: { ...task.refs, units: { ...task.refs.units, U01: "main" } } }), /40/);
assert.throws(() => validateTask({ ...task, automaticLockUpdates: true }));
await import("../tasks/schema.mjs");
console.log("task-schema.test.mjs: OK");
