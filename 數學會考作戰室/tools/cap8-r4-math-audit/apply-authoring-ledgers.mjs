import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const mathDir = path.resolve(here, "../..");
const batchesDir = path.join(mathDir, "tools/v2-human-content/batches");
const repairsDir = path.join(here, "repairs");
const selectedUnit = process.argv.includes("--unit") ? process.argv[process.argv.indexOf("--unit") + 1] : null;
const selectedLedger = process.argv.includes("--ledger") ? process.argv[process.argv.indexOf("--ledger") + 1] : null;
const dryRun = process.argv.includes("--dry-run");
const selectedLedgerRelative = selectedLedger?.replaceAll("\\", "/").replace(/^repairs\//, "");

const sha = value => crypto.createHash("sha256").update(value).digest("hex");
const readJson = file => JSON.parse(fs.readFileSync(file, "utf8"));
const writeJson = (file, value) => fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`, "utf8");
const readJsonl = file => fs.readFileSync(file, "utf8").trim().split(/\r?\n/).filter(Boolean).map(JSON.parse);
const writeJsonl = (file, rows) => fs.writeFileSync(file, `${rows.map(row => JSON.stringify(row)).join("\n")}\n`, "utf8");
const clone = value => structuredClone(value);
const sourceHashByRecord = new Map();
const fullyAppliedRecords = new Set();
const stable = value => Array.isArray(value)
  ? value.map(stable)
  : value && typeof value === "object"
    ? Object.fromEntries(Object.keys(value).sort().map(key => [key, stable(value[key])]))
    : value;
const canonicalHash = (record, ownField, excluded = []) => {
  const copy = clone(record);
  delete copy[ownField];
  for (const field of excluded) delete copy[field];
  return sha(JSON.stringify(stable(copy)));
};
const walk = directory => fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
  const file = path.join(directory, entry.name);
  return entry.isDirectory() ? walk(file) : [file];
});
const fail = message => { throw new Error(message); };
const ledgerFields = new Set(["schemaVersion", "unitId", "batch", "skills", "mc", "constructedResponse", "lectures", "drawingSpecs", "textFiles"]);

function validateLedgerShape(ledger, file) {
  const unknown = Object.keys(ledger).filter(field => !ledgerFields.has(field));
  if (unknown.length) fail(`${path.relative(repairsDir, file)}: unsupported ledger fields ${unknown.join(", ")}`);
  if (ledger.schemaVersion !== "cap8-r4-math-authoring-ledger-r1" || !/^u\d{2}$/.test(ledger.unitId) || !ledger.batch) {
    fail(`${path.relative(repairsDir, file)}: invalid ledger identity`);
  }
  for (const field of ["skills", "mc", "constructedResponse", "lectures", "drawingSpecs", "textFiles"]) {
    if (ledger[field] !== undefined && !Array.isArray(ledger[field])) fail(`${path.relative(repairsDir, file)}: ${field} must be an array`);
  }
}

function replaceStrings(value, replacements) {
  if (typeof value === "string") {
    return Object.entries(replacements).reduce((text, [from, to]) => {
      if (!from || from === to) return text;
      if (!to.includes(from)) return text.split(from).join(to);
      const marker = Array.from({ length: 6400 }, (_, index) => String.fromCharCode(0xe000 + index))
        .find(candidate => !text.includes(candidate) && !from.includes(candidate) && !to.includes(candidate));
      if (!marker) fail("No replacement sentinel available");
      return text.split(to).join(marker).split(from).join(to).split(marker).join(to);
    }, value);
  }
  if (Array.isArray(value)) return value.map(item => replaceStrings(item, replacements));
  if (value && typeof value === "object") {
    for (const key of Object.keys(value)) value[key] = replaceStrings(value[key], replacements);
  }
  return value;
}

function includesText(value, text) {
  if (typeof value === "string") return value.includes(text);
  if (Array.isArray(value)) return value.some(item => includesText(item, text));
  return Boolean(value && typeof value === "object" && Object.values(value).some(item => includesText(item, text)));
}

function includesAdditions(values, additions) {
  if (!Array.isArray(values) || !Array.isArray(additions)) return false;
  const identityFields = ["exampleId", "questionId", "lectureId", "figureId", "mistake", "prompt"];
  const same = (left, right) => JSON.stringify(stable(left)) === JSON.stringify(stable(right));
  return additions.every(addition => values.some(value => {
    if (same(value, addition)) return true;
    if (!value || !addition || typeof value !== "object" || typeof addition !== "object") return false;
    const identity = identityFields.find(field => field in addition);
    return Boolean(identity && value[identity] === addition[identity]);
  }));
}

function patchAlreadyApplied(record, patch) {
  const same = (left, right) => JSON.stringify(stable(left)) === JSON.stringify(stable(right));
  const replacementEntries = Object.entries(patch.replaceText || {});
  const hasOtherContentEvidence = ["set", "appendText", "appendArray", "optionReasons"]
    .some(field => Object.keys(patch[field] || {}).length);
  const replacementsDone = same(replaceStrings(clone(record), patch.replaceText || {}), record)
    && (hasOtherContentEvidence || replacementEntries.every(([from, to]) => to ? includesText(record, to) : !includesText(record, from)));
  const setsDone = Object.entries(patch.set || {}).every(([field, value]) =>
    same(record[field], value)
      || Array.isArray(value) && includesAdditions(record[field], value)
      || typeof value === "string" && typeof record[field] === "string" && record[field].startsWith(value));
  const textDone = Object.entries(patch.appendText || {}).every(([field, suffix]) => record[field]?.includes(suffix));
  const arraysDone = Object.entries(patch.appendArray || {}).every(([field, additions]) => includesAdditions(record[field], additions));
  const reasonsDone = Object.entries(patch.optionReasons || {}).every(([index, reason]) => record.optionAnalysis?.[Number(index)]?.reason === reason);
  return replacementsDone && setsDone && textDone && arraysDone && reasonsDone;
}

function applyPatch(record, patch, label) {
  if (fullyAppliedRecords.has(label)) return;
  if (patch.expectedContentSha256 && record.contentSha256 !== patch.expectedContentSha256 && patchAlreadyApplied(record, patch)) {
    sourceHashByRecord.set(label, patch.expectedContentSha256);
    return;
  }
  const sourceHash = sourceHashByRecord.get(label) || record.contentSha256;
  sourceHashByRecord.set(label, sourceHash);
  if (patch.expectedContentSha256 && record.contentSha256 !== patch.expectedContentSha256 && sourceHash !== patch.expectedContentSha256 && !patchAlreadyApplied(record, patch)) {
    fail(`${label}: content hash drift; expected ${patch.expectedContentSha256}, got ${record.contentSha256}`);
  }
  replaceStrings(record, patch.replaceText || {});
  Object.assign(record, clone(patch.set || {}));
  for (const [field, suffix] of Object.entries(patch.appendText || {})) {
    if (typeof record[field] !== "string") fail(`${label}: ${field} is not text`);
    if (record[field].includes(suffix)) continue;
    record[field] = `${record[field]}${record[field] ? " " : ""}${suffix}`;
  }
  for (const [field, additions] of Object.entries(patch.appendArray || {})) {
    if (!Array.isArray(record[field])) fail(`${label}: ${field} is not an array`);
    if (includesAdditions(record[field], additions)) continue;
    record[field].push(...clone(additions));
  }
  for (const [index, reason] of Object.entries(patch.optionReasons || {})) {
    if (!record.optionAnalysis?.[Number(index)]) fail(`${label}: optionAnalysis[${index}] missing`);
    record.optionAnalysis[Number(index)].reason = reason;
  }
}

function findRecord(batchDir, fileName, idField, id) {
  for (const file of walk(path.join(batchDir, "units")).filter(candidate => candidate.endsWith(fileName))) {
    const rows = fileName.endsWith(".jsonl") ? readJsonl(file) : [readJson(file)];
    const index = rows.findIndex(row => row[idField] === id);
    if (index >= 0) return { file, rows, index };
  }
  fail(`${id}: missing from ${fileName}`);
}

function updateReview(questionFile, question, reviewPatch, reviewReplacements, changed) {
  const file = path.join(path.dirname(questionFile), "semantic-reviews.jsonl");
  if (!fs.existsSync(file)) fail(`${question.questionId}: semantic review file missing`);
  const rows = readJsonl(file);
  const index = rows.findIndex(row => row.questionId === question.questionId);
  if (index < 0) fail(`${question.questionId}: semantic review missing`);
  const review = rows[index];
  const hasSeparateContentHash = "questionContentSha256" in review;
  const hasSelfContentHash = !hasSeparateContentHash && review.contentSha256 === canonicalHash(review, "contentSha256");
  const reviewShaIncludesContent = "reviewSha256" in review && review.reviewSha256 === canonicalHash(review, "reviewSha256");
  replaceStrings(review, reviewReplacements || {});
  Object.assign(review, clone(reviewPatch || {}));
  if (hasSeparateContentHash) {
    review.questionContentSha256 = question.contentSha256;
    review.contentSha256 = canonicalHash(review, "contentSha256");
  } else if (hasSelfContentHash) {
    review.contentSha256 = canonicalHash(review, "contentSha256");
  } else {
    review.contentSha256 = question.contentSha256;
  }
  const excluded = ["contentSha256"];
  if ("reviewSha256" in review) {
    review.reviewSha256 = reviewShaIncludesContent || review.reviewVersion === "human-review-u20-r1"
      ? canonicalHash(review, "reviewSha256")
      : canonicalHash(review, "reviewSha256", excluded);
  }
  if ("reviewEvidenceSha256" in review) review.reviewEvidenceSha256 = canonicalHash(review, "reviewEvidenceSha256", excluded);
  if ("reviewContentSha256" in review) review.reviewContentSha256 = canonicalHash(review, "reviewContentSha256", excluded);
  rows[index] = review;
  writeJsonl(file, rows);
  changed.set(`semantic-review:${question.questionId}`, review.reviewSha256 || review.reviewEvidenceSha256 || review.reviewContentSha256 || review.contentSha256);
}

function updateContentManifest(batchDir, changed) {
  const file = path.join(batchDir, "manifest/content-sha256.json");
  if (!fs.existsSync(file)) return;
  const manifest = readJson(file);
  if (Array.isArray(manifest.files) && !manifest.records && !manifest.entries && !manifest.items) return;
  const matched = new Set();
  const flatRecords = manifest.records && !Array.isArray(manifest.records)
    && Object.values(manifest.records).every(value => typeof value === "string");
  if (flatRecords) for (const [key, hash] of changed) {
    const candidates = key.startsWith("semantic-review:")
      ? [`${key.slice(16)}-review`, `${key.slice(16)}#semantic-review`, `review:${key.slice(16)}`]
      : [key];
    const target = candidates.find(candidate => candidate in manifest.records);
    if (target) {
      manifest.records[target] = hash;
      matched.add(key);
    }
  }
  const recordGroups = manifest.records && !Array.isArray(manifest.records) && !flatRecords
    ? Object.entries(manifest.records)
    : flatRecords ? [] : [[null, manifest.records || manifest.entries || []]];
  for (const [group, records] of recordGroups) {
    if (!Array.isArray(records)) fail(`${file}: content manifest group ${group} is not an array`);
    for (const record of records) {
      const recordId = record.id || record.recordId;
      if (!recordId) fail(`${file}: content manifest record has no id or recordId`);
      const semantic = group === "semanticReviews" || [record.kind, record.type, record.recordType].includes("semantic-review");
      const key = semantic
        ? [...changed.keys()].find(candidate => candidate.startsWith("semantic-review:") && recordId.startsWith(candidate.slice(16)))
        : recordId;
      if (key && changed.has(key)) {
        record.sha256 = changed.get(key);
        matched.add(key);
      }
    }
  }
  for (const [key, hash] of changed) {
    if (!manifest.items) break;
    const candidates = key.startsWith("semantic-review:")
      ? [`${key.slice(16)}-review`, `${key.slice(16)}#semantic-review`, `review:${key.slice(16)}`]
      : [key];
    const target = candidates.find(candidate => candidate in manifest.items);
    if (target) {
      manifest.items[target] = hash;
      matched.add(key);
    }
  }
  const groupedKeys = {
    lectures: changed,
    mcQuestions: changed,
    constructedResponses: changed,
    semanticReviews: new Map([...changed].filter(([key]) => key.startsWith("semantic-review:")).map(([key, value]) => [key.slice(16), value])),
    figures: changed
  };
  for (const [group, values] of Object.entries(groupedKeys)) {
    if (!manifest[group] || typeof manifest[group] !== "object") continue;
    for (const [key, hash] of values) if (key in manifest[group]) {
      manifest[group][key] = hash;
      matched.add(group === "semanticReviews" ? `semantic-review:${key}` : key);
    }
  }
  for (const key of changed.keys()) {
    if (!matched.has(key) && !key.startsWith("semantic-review:")) fail(`${key}: content manifest entry missing`);
  }
  writeJson(file, manifest);
}

function updateFingerprintManifest(batchDir, changed, prompts) {
  const file = path.join(batchDir, "review/unit-content-fingerprints.json");
  if (!fs.existsSync(file)) return;
  const manifest = readJson(file);
  const fingerprints = Array.isArray(manifest.fingerprints) ? manifest.fingerprints : manifest.records;
  if (Array.isArray(fingerprints)) {
    for (const fingerprint of fingerprints) {
      const hash = changed.get(fingerprint.id);
      if (hash && "contentSha256" in fingerprint) fingerprint.contentSha256 = hash;
    }
  } else if (Array.isArray(manifest.questions)) {
    for (const fingerprint of manifest.questions) {
      const prompt = prompts.get(fingerprint.id);
      if (!prompt) continue;
      const normalized = prompt.normalize("NFKC").toLowerCase().replace(/[\p{P}\p{S}\s]/gu, "");
      fingerprint.sha256 = sha(normalized);
      fingerprint.numericSkeletonSha256 = sha(normalized.replace(/\d+(?:\.\d+)?/g, "#"));
    }
  } else {
    return;
  }
  writeJson(file, manifest);
}

function updateFileManifest(batchDir) {
  const dedicated = path.join(batchDir, "manifest/file-sha256.json");
  const file = fs.existsSync(dedicated) ? dedicated : path.join(batchDir, "manifest/content-sha256.json");
  const manifest = readJson(file);
  if (Array.isArray(manifest.files)) {
    for (const record of manifest.files) {
      const target = path.join(batchDir, ...record.path.split("/"));
      if (!fs.existsSync(target)) fail(`${record.path}: file manifest target missing`);
      record.bytes = fs.statSync(target).size;
      record.sha256 = sha(fs.readFileSync(target));
    }
  } else if (manifest.files && typeof manifest.files === "object") {
    for (const relative of Object.keys(manifest.files)) {
      const target = path.join(batchDir, ...relative.split("/"));
      if (!fs.existsSync(target)) fail(`${relative}: file manifest target missing`);
      manifest.files[relative] = sha(fs.readFileSync(target));
    }
  } else {
    fail(`${file}: unsupported file manifest`);
  }
  writeJson(file, manifest);
}

function applyTextFiles(batchDir, entries) {
  for (const entry of entries || []) {
    const file = path.join(batchDir, ...entry.path.split("/"));
    let text = fs.readFileSync(file, "utf8");
    for (const replacement of entry.replacements) {
      const count = text.split(replacement.from).length - 1;
      const expectedCount = replacement.count ?? 1;
      const appliedCount = text.split(replacement.to).length - 1;
      if (appliedCount === expectedCount) continue;
      if (count === expectedCount) text = text.split(replacement.from).join(replacement.to);
      else {
        fail(`${entry.path}: expected ${expectedCount} original or applied occurrences, got ${count}/${appliedCount}`);
      }
    }
    fs.writeFileSync(file, text, "utf8");
  }
}

function preflightLedger(ledger) {
  const batchDir = path.join(batchesDir, ledger.batch);
  if (!fs.existsSync(batchDir)) fail(`${ledger.unitId}: missing batch ${ledger.batch}`);
  const acceptedSources = new Set();
  const groups = [
    [ledger.mc, "mc-questions.jsonl", "questionId"],
    [ledger.constructedResponse, "constructed-response.jsonl", "questionId"],
    [ledger.lectures, "lecture.json", "lectureId"],
    [ledger.drawingSpecs, "drawing-specs.jsonl", "figureId"]
  ];
  for (const [patches, fileName, idField] of groups) for (const patch of patches || []) {
    const id = patch[idField];
    if (fullyAppliedRecords.has(id)) continue;
    const box = findRecord(batchDir, fileName, idField, id);
    const record = box.rows[box.index];
    if (patch.expectedContentSha256 && record.contentSha256 !== patch.expectedContentSha256) {
      const sourceKey = `${fileName}\0${id}\0${patch.expectedContentSha256}`;
      if (patchAlreadyApplied(record, patch)) acceptedSources.add(sourceKey);
      else if (!acceptedSources.has(sourceKey)) {
        fail(`${id}: preflight content hash drift; expected ${patch.expectedContentSha256}, got ${record.contentSha256}`);
      }
    }
  }
  for (const entry of ledger.textFiles || []) {
    const file = path.join(batchDir, ...entry.path.split("/"));
    const source = fs.readFileSync(file, "utf8");
    for (const replacement of entry.replacements) {
      const count = source.split(replacement.from).length - 1;
      const expectedCount = replacement.count ?? 1;
      const appliedCount = source.split(replacement.to).length - 1;
      if (count !== expectedCount && appliedCount !== expectedCount) {
        fail(`${entry.path}: preflight expected ${expectedCount} original or applied occurrences, got ${count}/${appliedCount}`);
      }
    }
  }
  const dedicated = path.join(batchDir, "manifest/file-sha256.json");
  const fallback = path.join(batchDir, "manifest/content-sha256.json");
  const fileManifest = fs.existsSync(dedicated) ? dedicated : fallback;
  if (!fs.existsSync(fileManifest)) fail(`${ledger.batch}: file manifest missing`);
  const manifest = readJson(fileManifest);
  if (!(Array.isArray(manifest.files) || manifest.files && typeof manifest.files === "object")) fail(`${fileManifest}: unsupported file manifest`);
}

function applyLedger(ledger) {
  const batchDir = path.join(batchesDir, ledger.batch);
  if (!fs.existsSync(batchDir)) fail(`${ledger.unitId}: missing batch ${ledger.batch}`);
  const changed = new Map();
  const prompts = new Map();

  for (const patch of ledger.mc || []) {
    const box = findRecord(batchDir, "mc-questions.jsonl", "questionId", patch.questionId);
    const question = box.rows[box.index];
    applyPatch(question, patch, patch.questionId);
    question.contentSha256 = canonicalHash(question, "contentSha256");
    box.rows[box.index] = question;
    writeJsonl(box.file, box.rows);
    changed.set(question.questionId, question.contentSha256);
    prompts.set(question.questionId, question.text);
    updateReview(box.file, question, patch.reviewSet, patch.reviewReplaceText, changed);
  }

  for (const patch of ledger.constructedResponse || []) {
    const box = findRecord(batchDir, "constructed-response.jsonl", "questionId", patch.questionId);
    const question = box.rows[box.index];
    applyPatch(question, patch, patch.questionId);
    question.contentSha256 = canonicalHash(question, "contentSha256");
    box.rows[box.index] = question;
    writeJsonl(box.file, box.rows);
    changed.set(question.questionId, question.contentSha256);
    prompts.set(question.questionId, question.prompt);
  }

  for (const patch of ledger.lectures || []) {
    const box = findRecord(batchDir, "lecture.json", "lectureId", patch.lectureId);
    const lecture = box.rows[box.index];
    applyPatch(lecture, patch, patch.lectureId);
    lecture.contentSha256 = canonicalHash(lecture, "contentSha256");
    writeJson(box.file, lecture);
    changed.set(lecture.lectureId, lecture.contentSha256);
  }

  for (const patch of ledger.drawingSpecs || []) {
    const box = findRecord(batchDir, "drawing-specs.jsonl", "figureId", patch.figureId);
    const drawing = box.rows[box.index];
    applyPatch(drawing, patch, patch.figureId);
    if ("contentSha256" in drawing) drawing.contentSha256 = canonicalHash(drawing, "contentSha256");
    box.rows[box.index] = drawing;
    writeJsonl(box.file, box.rows);
    if (drawing.contentSha256) changed.set(drawing.figureId, drawing.contentSha256);
  }

  applyTextFiles(batchDir, ledger.textFiles);
  updateContentManifest(batchDir, changed);
  updateFingerprintManifest(batchDir, changed, prompts);
  updateFileManifest(batchDir);
  return { unitId: ledger.unitId, batch: ledger.batch, changedRecords: changed.size };
}

if (!fs.existsSync(repairsDir)) fail(`Missing repairs directory: ${repairsDir}`);
const ledgerFiles = walk(repairsDir).filter(file => {
  if (!file.endsWith(".json")) return false;
  const relative = path.relative(repairsDir, file).replaceAll("\\", "/");
  if (selectedUnit && relative.split("/")[0] !== selectedUnit) return false;
  if (!selectedLedger) return true;
  return selectedLedgerRelative.includes("/") ? relative === selectedLedgerRelative : path.basename(file) === selectedLedgerRelative;
}).sort();
const ledgers = ledgerFiles.map(file => {
  const ledger = readJson(file);
  validateLedgerShape(ledger, file);
  return ledger;
}).filter(ledger => !selectedUnit || ledger.unitId === selectedUnit);
if (!ledgers.length) fail(selectedUnit ? `No ledger for ${selectedUnit}` : "No authoring ledgers found");
const finalContentPatches = new Map();
for (const ledger of ledgers) {
  const groups = [
    [ledger.mc, "mc-questions.jsonl", "questionId"],
    [ledger.constructedResponse, "constructed-response.jsonl", "questionId"],
    [ledger.lectures, "lecture.json", "lectureId"],
    [ledger.drawingSpecs, "drawing-specs.jsonl", "figureId"]
  ];
  for (const [patches, fileName, idField] of groups) for (const patch of patches || []) {
    const hasContentPatch = ["replaceText", "set", "appendText", "appendArray", "optionReasons"]
      .some(field => Object.keys(patch[field] || {}).length);
    if (hasContentPatch) finalContentPatches.set(patch[idField], { ledger, patch, fileName, idField });
  }
}
for (const [id, { ledger, patch, fileName, idField }] of finalContentPatches) {
  const batchDir = path.join(batchesDir, ledger.batch);
  const box = findRecord(batchDir, fileName, idField, id);
  const record = box.rows[box.index];
  if (patch.expectedContentSha256 && record.contentSha256 !== patch.expectedContentSha256 && patchAlreadyApplied(record, patch)) {
    fullyAppliedRecords.add(id);
  }
}
ledgers.forEach(preflightLedger);
if (dryRun) {
  console.log(JSON.stringify({ status: "PASS_LEDGER_PREFLIGHT", units: ledgers.map(ledger => ledger.unitId) }));
  process.exit(0);
}

const results = ledgers.map(applyLedger);
const reportName = selectedUnit ? `repair-apply-${selectedUnit}.json` : "repair-apply-report.json";
writeJson(path.join(here, `results/${reportName}`), { status: "REPAIRS_APPLIED_TO_AUTHORITATIVE_BATCHES", results });
console.log(JSON.stringify({ status: "REPAIRS_APPLIED_TO_AUTHORITATIVE_BATCHES", results }));
