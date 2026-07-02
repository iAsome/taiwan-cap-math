#!/usr/bin/env node
/**
 * Cross-check 國文 archive answers vs official-data/{year}/{year}-answer.txt 國文 column.
 * Matches each archive question to official exam number via choice text in *-exam.txt
 * (same approach as verify-social-archive-answers.mjs).
 *
 * Years without {year}-answer.txt are skipped (reported as SKIP).
 * As of initial run: PASS 106–109; FAIL 110–114 (archive/official mismatches or
 * unmatched stems); SKIP 115 (no answer.txt yet).
 * Exit 1 if any checked year has unmatched questions or answer mismatches.
 */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const CN = path.join(root, "國文會考作戰室");
const YEARS = [106, 107, 108, 109, 110, 111, 112, 113, 114, 115];

const norm = s => s.normalize("NFKC").replace(/\s+/g, "").replace(/[，。、；：「」『』（）()\[\]【】：,.\-—…& ＝]/g, "").toLowerCase();
const letterToIndex = l => "ABCD".indexOf(String(l).toUpperCase());

const HEADER = new Set(["國文", "英語", "數學", "社會", "自然", "閱讀", "聽力", "(閱讀)"]);

/** Parse flattened answer PDF text; 國文 is always the first A–D on each row (≤48). */
function parseAnswerTxt(text) {
  const lines = text.split(/\r?\n/)
    .map(l => l.trim())
    .filter(l => l && !/^--- page/.test(l) && !/參考答案|一覽表|選擇題|教育會考|^答案$|^科目$|^題$|^號$/.test(l));
  const answers = {};
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].replace(/\s/g, "");
    if (HEADER.has(line)) continue;
    if (!/^\d+$/.test(lines[i])) continue;
    const qnum = +lines[i];
    if (qnum < 1 || qnum > 48) continue;
    let j = i + 1;
    while (j < lines.length && /^[A-D]$/.test(lines[j])) j++;
    if (j > i + 1) {
      answers[qnum] = { 國文: lines[i + 1] };
      i = j - 1;
    }
  }
  return answers;
}

function loadOfficialAnswers(year) {
  const file = path.join(CN, "official-data", String(year), `${year}-answer.txt`);
  if (!fs.existsSync(file)) return null;
  const parsed = parseAnswerTxt(fs.readFileSync(file, "utf8"));
  const out = {};
  for (const [q, rec] of Object.entries(parsed)) {
    if (rec.國文) out[q] = rec.國文;
  }
  return out;
}

function examSections(examText) {
  const re = /\n(\d{1,2})\.(\s|[^\d])/g;
  const hits = [];
  let m;
  while ((m = re.exec(examText))) hits.push({ num: +m[1], pos: m.index });
  const sections = [];
  for (let i = 0; i < hits.length; i++) {
    const { num, pos } = hits[i];
    if (num < 1 || num > 48) continue;
    const end = hits[i + 1]?.pos ?? examText.length;
    const text = examText.slice(pos, end);
    if (!/\([A-D]\)/.test(text)) continue;
    sections.push({ num, text });
  }
  return sections;
}

function stemFingerprint(text) {
  return norm(text.replace(/^【題組：[^】]+】\n?/, "").slice(0, 48));
}

function matchOfficialNum(sections, q) {
  const want = q.choices.map(norm);
  const stem = stemFingerprint(q.text);
  let hits = sections.filter(sec => want.every(c => norm(sec.text).includes(c)));
  if (hits.length > 1 && stem.length >= 12) {
    const refined = hits.filter(sec => norm(sec.text).includes(stem.slice(0, 24)));
    if (refined.length) hits = refined;
    hits.sort((a, b) => {
      const score = s => {
        const t = norm(s.text);
        let n = 0;
        for (let i = 0; i + 8 <= stem.length; i += 8) if (t.includes(stem.slice(i, i + 8))) n++;
        return n;
      };
      return score(b) - score(a);
    });
  }
  if (hits.length >= 1) return hits[0].num;
  const key = [...want].sort((a, b) => b.length - a.length)[0];
  if (key.length < 4) return null;
  const byChoice = sections.filter(sec => norm(sec.text).includes(key));
  if (byChoice.length === 1) return byChoice[0].num;
  return null;
}

function loadArchive() {
  const sandbox = { window: {}, console, Date, Math };
  vm.createContext(sandbox);
  for (const f of ["data.js", "archive-exams.js"]) {
    vm.runInContext(fs.readFileSync(path.join(CN, f), "utf8"), sandbox, { filename: f });
  }
  return sandbox.window.ARCHIVE_EXAMS;
}

// ponytail: spot-check parser against tmp_answers when present
if (process.argv.includes("--self-check-parser")) {
  const year = 106;
  const fromTxt = loadOfficialAnswers(year);
  const tmp = path.join(root, "tmp_answers", `${year}.json`);
  if (fs.existsSync(tmp)) {
    const ref = JSON.parse(fs.readFileSync(tmp, "utf8")).answers;
    let ok = true;
    for (let n = 1; n <= 48; n++) {
      const a = fromTxt?.[String(n)];
      const b = ref[String(n)]?.國文;
      if (a && b && a !== b) { console.error(`parser Q${n}: txt=${a} json=${b}`); ok = false; }
    }
    console.log(ok ? "parseAnswerTxt self-check: OK (106 國文 vs tmp_answers)" : "parseAnswerTxt self-check: FAIL");
    process.exit(ok ? 0 : 1);
  }
  console.log("parseAnswerTxt: no tmp_answers/106.json to compare");
  process.exit(0);
}

const archive = loadArchive();
let failed = false;
const summary = { pass: [], fail: [], skip: [] };

console.log("國文會考作戰室 archive vs official 國文 column:\n");

for (const year of YEARS) {
  const exam = archive[year];
  if (!exam) {
    console.log(`${year}: SKIP (no archive year)`);
    summary.skip.push(year);
    continue;
  }

  const official = loadOfficialAnswers(year);
  if (!official) {
    console.log(`${year}: SKIP (missing ${year}-answer.txt)`);
    summary.skip.push(year);
    continue;
  }

  const examPath = path.join(CN, "official-data", String(year), `${year}-exam.txt`);
  if (!fs.existsSync(examPath)) {
    console.error(`${year}: FAIL (missing ${year}-exam.txt)`);
    failed = true;
    summary.fail.push(year);
    continue;
  }

  const sections = examSections(fs.readFileSync(examPath, "utf8"));
  const qs = exam.questions || [];
  const issues = [];
  let matched = 0;

  for (let i = 0; i < qs.length; i++) {
    const q = qs[i];
    const num = matchOfficialNum(sections, q);
    if (num == null) {
      issues.push(`#${i + 1} unmatched (${q.text.slice(0, 24)}…)`);
      continue;
    }
    matched++;
    const letter = official[String(num)];
    if (!letter) {
      issues.push(`#${i + 1} official Q${num} missing 國文 key`);
      continue;
    }
    const expected = letterToIndex(letter);
    if (expected < 0) {
      issues.push(`#${i + 1} bad official letter ${letter}`);
      continue;
    }
    if (q.answer !== expected) {
      issues.push(`#${i + 1} Q${num}: archive=${"ABCD"[q.answer]} vs official=${letter}`);
    }
  }

  if (issues.length) {
    failed = true;
    summary.fail.push(year);
    console.error(`${year}: FAIL (${matched}/${qs.length} matched, ${issues.length} issues)`);
    issues.slice(0, 8).forEach(i => console.error(`  - ${i}`));
    if (issues.length > 8) console.error(`  … +${issues.length - 8} more`);
  } else {
    summary.pass.push(year);
    console.log(`${year}: OK (${qs.length} archive, ${matched} matched, answers agree)`);
  }
}

console.log(`\nSummary: PASS ${summary.pass.join(", ") || "—"} | FAIL ${summary.fail.join(", ") || "—"} | SKIP ${summary.skip.join(", ") || "—"}`);
if (failed) {
  console.error("\nverify-cn-archive-answers: FAIL");
  process.exit(1);
}
console.log("\nverify-cn-archive-answers: PASS (all checked years)");
