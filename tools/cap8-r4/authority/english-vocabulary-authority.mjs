import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { sha256 } from "../r4-core.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..", "..");
const CURRICULUM_PATH = "tools/cap8-r4/evidence/curriculum/text/naer-curriculum-english.txt";
const CAP_STRUCTURE_PATH = "tools/cap8-r4/evidence/official/html/cap-structure.html";
const OUTPUT_PATH = path.join(HERE, "english-vocabulary-authority.json");

function compareText(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

function splitOutsideParentheses(value) {
  const entries = [];
  let depth = 0;
  let current = "";
  for (const character of value) {
    if (character === "(") depth += 1;
    if (character === ")") depth -= 1;
    assert(depth >= 0, `unbalanced vocabulary entry: ${value}`);
    if (character === "," && depth === 0) {
      if (current.trim()) entries.push(current.trim());
      current = "";
    } else {
      current += character;
    }
  }
  assert.equal(depth, 0, `unbalanced vocabulary entry: ${value}`);
  if (current.trim()) entries.push(current.trim());
  return entries;
}

function expandEntry(entry) {
  const open = entry.indexOf("(");
  const base = (open >= 0 ? entry.slice(0, open) : entry).trim();
  const parenthetical = open >= 0 ? entry.slice(open + 1, entry.lastIndexOf(")")) : "";
  const values = [base, ...splitOutsideParentheses(parenthetical)]
    .flatMap((value) => value.split("/"))
    .map((value) => value.trim())
    .filter(Boolean);
  return [...new Set(values)].sort(compareText);
}

function findLine(lines, predicate, from = 0) {
  const index = lines.findIndex((line, candidate) => candidate >= from && predicate(line));
  assert(index >= 0, "official vocabulary table boundary missing");
  return index;
}

function parseTable(lines, startIndex, endIndex) {
  const entries = [];
  let letter = null;
  for (const rawLine of lines.slice(startIndex + 1, endIndex)) {
    const line = rawLine.trim();
    if (!line) continue;
    const heading = line.match(/^([A-Z])-$/);
    if (heading) {
      letter = heading[1];
      continue;
    }
    assert(letter, `vocabulary row appears before a letter heading: ${line}`);
    for (const sourceEntry of splitOutsideParentheses(line)) {
      entries.push({ letter, sourceEntry, forms: expandEntry(sourceEntry) });
    }
  }
  assert.equal(new Set(entries.map((entry) => entry.sourceEntry)).size, entries.length, "duplicate official vocabulary source entry");
  return entries;
}

export async function buildEnglishVocabularyAuthority() {
  const curriculumBytes = await readFile(path.join(REPO_ROOT, ...CURRICULUM_PATH.split("/")));
  const lines = curriculumBytes.toString("utf8").normalize("NFC").split(/\r?\n/);
  const basicStart = findLine(lines, (line) => line.includes("表一、基本1, 200字"));
  const additionalStart = findLine(lines, (line) => line.includes("表二、其他常用800字"), basicStart + 1);
  const thematicStart = findLine(lines, (line) => line.includes("表三、參考字彙表（2,000字）"), additionalStart + 1);
  const guidanceIndex = findLine(lines, (line) => line.includes("國民中學畢業時，學生應至少學會1,200個字詞"));
  const basic = parseTable(lines, basicStart, additionalStart);
  const additional = parseTable(lines, additionalStart, thematicStart);
  const capBytes = await readFile(path.join(REPO_ROOT, ...CAP_STRUCTURE_PATH.split("/")));
  const capHtml = capBytes.toString("utf8");
  const capStatement = "(最基本1,200字詞參見課綱附錄五：表一)";
  assert(capHtml.includes(capStatement), "official CAP 1,200-word statement missing");
  return {
    schemaVersion: "cap8-r4-english-vocabulary-authority-v1",
    status: "official-tables-extracted",
    capAssessmentTable: "appendix-5-table-1",
    curriculumSource: {
      id: "NAER-CURRICULUM-ENGLISH",
      path: CURRICULUM_PATH,
      sha256: sha256(curriculumBytes),
      guidanceLine: guidanceIndex + 1,
      guidance: lines[guidanceIndex].trim(),
    },
    capScopeSource: {
      id: "CAP-STRUCTURE",
      path: CAP_STRUCTURE_PATH,
      sha256: sha256(capBytes),
      statement: capStatement,
    },
    tables: {
      basic1200: {
        sourceLabel: lines[basicStart].trim(),
        startLine: basicStart + 1,
        endLine: additionalStart,
        sourceEntryCount: basic.length,
        entries: basic,
      },
      additional800: {
        sourceLabel: lines[additionalStart].trim(),
        startLine: additionalStart + 1,
        endLine: thematicStart,
        sourceEntryCount: additional.length,
        entries: additional,
      },
    },
    usage: {
      capQuestionDefault: "basic1200",
      additional800: "broader-learning-only-when-explicitly-governed",
      outsideBasic1200InReadingOrListening: "student-visible-glossary-required",
      cardinalityRule: "preserve-official-source-entries-do-not-force-label-cardinality",
    },
  };
}

export async function validateEnglishVocabularyAuthority(index) {
  const expected = await buildEnglishVocabularyAuthority();
  assert.deepEqual(index, expected, "checked-in English vocabulary authority is stale or manually altered");
  assert.equal(index.tables.basic1200.sourceEntryCount, 1211);
  assert.equal(index.tables.additional800.sourceEntryCount, 794);
  assert(index.tables.basic1200.entries.every((entry) => entry.forms.length > 0));
  return {
    basicSourceEntries: index.tables.basic1200.sourceEntryCount,
    additionalSourceEntries: index.tables.additional800.sourceEntryCount,
    basicRecognizedForms: new Set(index.tables.basic1200.entries.flatMap((entry) => entry.forms.map((form) => form.toLowerCase()))).size,
  };
}

async function main() {
  const index = await buildEnglishVocabularyAuthority();
  const result = await validateEnglishVocabularyAuthority(index);
  await writeFile(OUTPUT_PATH, `${JSON.stringify(index, null, 2)}\n`, "utf8");
  console.log(`english-vocabulary-authority: OK - ${result.basicSourceEntries} official Table 1 entries, ${result.basicRecognizedForms} recognized forms`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
