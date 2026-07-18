import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const mathDir = path.resolve(here, "../..");
const args = new Map(process.argv.slice(2).map((value, index, all) => value.startsWith("--") ? [value, all[index + 1]] : null).filter(Boolean));
const unitId = args.get("--unit");
const batch = args.get("--batch");
const output = args.get("--output");
if (!/^u\d{2}$/.test(unitId || "") || !batch || !output) {
  throw new Error("Usage: node generate-exact-padding-ledger.mjs --unit uXX --batch batch-name --output repairs/uXX/file.json");
}

const cleanString = value => {
  const parts = value.match(/[^。！？]*[。！？]?/gu)?.filter(Boolean) || [value];
  const seen = new Set();
  let changed = false;
  const kept = [];
  for (const part of parts) {
    const normalized = part.trim();
    if (normalized.length >= 8 && seen.has(normalized)) {
      changed = true;
      continue;
    }
    if (normalized.length >= 8) seen.add(normalized);
    if (normalized) kept.push(normalized);
  }
  return changed ? kept.join(" ") : value;
};

const cleanValue = value => {
  if (typeof value === "string") return cleanString(value);
  if (Array.isArray(value)) {
    const seen = new Set();
    return value.map(cleanValue).filter(item => {
      if (typeof item !== "string" || item.trim().length < 8) return true;
      const normalized = item.trim();
      if (seen.has(normalized)) return false;
      seen.add(normalized);
      return true;
    });
  }
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, cleanValue(item)]));
  }
  return value;
};

const changedTopLevel = record => Object.fromEntries(Object.entries(record)
  .filter(([key]) => key !== "contentSha256")
  .map(([key, value]) => [key, cleanValue(value)])
  .filter(([key, value]) => JSON.stringify(value) !== JSON.stringify(record[key])));

const unitDir = path.join(mathDir, "tools/v2-human-content/batches", batch, "units", unitId);
const ledger = {
  schemaVersion: "cap8-r4-math-authoring-ledger-r1",
  unitId,
  batch,
  skills: [],
  mc: [],
  constructedResponse: [],
  lectures: [],
  drawingSpecs: [],
  textFiles: []
};

for (const slot of fs.readdirSync(unitDir).filter(name => /^s\d{3}$/.test(name)).sort()) {
  const skillDir = path.join(unitDir, slot);
  const groups = [
    ["mc", "mc-questions.jsonl", "questionId"],
    ["constructedResponse", "constructed-response.jsonl", "questionId"],
    ["drawingSpecs", "drawing-specs.jsonl", "figureId"]
  ];
  let slotChanged = false;
  for (const [ledgerKey, file, idKey] of groups) {
    const source = fs.readFileSync(path.join(skillDir, file), "utf8").trim();
    for (const record of source ? source.split(/\r?\n/u).map(JSON.parse) : []) {
      const set = changedTopLevel(record);
      if (!Object.keys(set).length) continue;
      ledger[ledgerKey].push({ [idKey]: record[idKey], expectedContentSha256: record.contentSha256, set });
      slotChanged = true;
    }
  }
  const lecture = JSON.parse(fs.readFileSync(path.join(skillDir, "lecture.json"), "utf8"));
  const set = changedTopLevel(lecture);
  if (Object.keys(set).length) {
    ledger.lectures.push({ lectureId: lecture.lectureId, expectedContentSha256: lecture.contentSha256, set });
    slotChanged = true;
  }
  if (slotChanged) ledger.skills.push(slot);
}

const target = path.resolve(mathDir, output);
fs.mkdirSync(path.dirname(target), { recursive: true });
fs.writeFileSync(target, `${JSON.stringify(ledger, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ output, skills: ledger.skills.length, mc: ledger.mc.length, cr: ledger.constructedResponse.length, lectures: ledger.lectures.length, drawings: ledger.drawingSpecs.length }));
