import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import mupdf from "mupdf";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "../../..");
const REGISTER_PATH = path.join(HERE, "math-curriculum-codes.json");
const REGISTER = JSON.parse(readFileSync(REGISTER_PATH, "utf8"));

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function exactKeys(value, keys, label) {
  assert(value && typeof value === "object" && !Array.isArray(value), `${label} must be an object`);
  assert.deepEqual(Object.keys(value).sort(), [...keys].sort(), `${label} keys`);
}

export function extractMathFourthStageCodes(pdfBytes, pageIndexes) {
  const document = mupdf.Document.openDocument(pdfBytes, "application/pdf");
  const codes = [];
  for (const pageIndex of pageIndexes) {
    assert(Number.isInteger(pageIndex) && pageIndex >= 0 && pageIndex < document.countPages());
    const text = document.loadPage(pageIndex).toStructuredText("preserve-whitespace").asText();
    for (const match of text.matchAll(/\b([NSGAFD]-[789]-\d+)\b/g)) {
      if (!codes.includes(match[1])) codes.push(match[1]);
    }
  }
  return { pageCount: document.countPages(), codes };
}

export function validateMathCurriculumCodeRegister(register, pdfBytes) {
  exactKeys(register, ["schemaVersion", "source", "codes"], "math curriculum code register");
  exactKeys(register.source, ["authority", "repositoryPath", "sha256", "pageCount", "contentPageIndexes"], "math curriculum source");
  assert.equal(register.schemaVersion, "cap8-r4-math-fourth-stage-code-register-v1");
  assert.equal(register.source.authority, "Ministry of Education / National Academy for Educational Research");
  assert.match(register.source.sha256, /^[a-f0-9]{64}$/);
  assert.equal(sha256(pdfBytes), register.source.sha256, "math curriculum PDF hash");
  assert(Array.isArray(register.codes) && register.codes.length > 0);
  assert.equal(new Set(register.codes).size, register.codes.length, "duplicate math curriculum code");
  for (const code of register.codes) assert.match(code, /^[NSGAFD]-[789]-\d+$/, `invalid math curriculum code: ${code}`);
  const extracted = extractMathFourthStageCodes(pdfBytes, register.source.contentPageIndexes);
  assert.equal(extracted.pageCount, register.source.pageCount, "math curriculum PDF page count");
  assert.deepEqual(extracted.codes, register.codes, "math curriculum codes must match the fixed official PDF pages");
  return { sourceSha256: register.source.sha256, pageCount: extracted.pageCount, codes: register.codes.length };
}

export const MATH_FOURTH_STAGE_CODES = Object.freeze([...REGISTER.codes]);
export const MATH_FOURTH_STAGE_CODE_SET = new Set(MATH_FOURTH_STAGE_CODES);

export function verifyMathCurriculumCodeRegister() {
  const pdfPath = path.join(REPO_ROOT, ...REGISTER.source.repositoryPath.split("/"));
  return validateMathCurriculumCodeRegister(REGISTER, readFileSync(pdfPath));
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = verifyMathCurriculumCodeRegister();
  console.log(`math-curriculum-codes: OK - ${result.codes} fourth-stage codes, ${result.sourceSha256}`);
}
