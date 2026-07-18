import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { loadEarthScienceUnitSource } from "./build-earth-science-unit.mjs";
import { verifyEarthScience } from "./verify-earth-science.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..", "..");
const sourcePath = path.join(REPO_ROOT, "地科會考作戰室", "r4", "source", "units", "EARTH_R4_U01.mjs");
const before = (await stat(sourcePath)).mtimeMs;
await import("../../../地科會考作戰室/r4/source/materialize-earth-r4-sources.mjs");
await import("./build-earth-science-final-audit.mjs");
assert.equal((await stat(sourcePath)).mtimeMs, before, "Earth Science validator imports must not write authoritative content");

const materializerSource = await readFile(path.join(REPO_ROOT, "地科會考作戰室", "r4", "source", "materialize-earth-r4-sources.mjs"), "utf8");
assert(!/\bwriteFile\b|\bappendFile\b/u.test(materializerSource), "Earth Science source validator must never generate prose snapshots");
const auditSource = await readFile(path.join(HERE, "build-earth-science-final-audit.mjs"), "utf8");
assert(!/\bwriteFile\b|status:\s*["']accepted["']/u.test(auditSource), "Earth Science final-audit tool may validate but must not manufacture acceptance evidence");

const unit = await loadEarthScienceUnitSource("EARTH_R4_U01");
const q00111 = unit.questions.find((question) => question.id === "EARTH_R4_Q_001_11");
assert(q00111, "EARTH_R4_Q_001_11 fixture required");
assert.match(q00111.stem, /哪一項敘述錯誤/u);
assert.equal(q00111.options[q00111.answerIndex], "水圈只指海洋，而岩石圈只指地表看得到的岩石。");
assert(q00111.reasons[q00111.answerIndex].includes("水圈包含海洋、河湖、地下水與冰"));
assert.deepEqual(q00111.misconceptionTargets, [q00111.options[q00111.answerIndex]]);

await verifyEarthScience();
console.log("earth-science-semantic.test: OK");
