// Cross-check 歷史/地理/公民 archive answers vs official 社會 column (106–115).
// Matches each archive question to official exam number via choice text in *-exam.txt,
// then compares answer index to tmp_answers/{year}.json (parsed from answer PDF).
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const answersDir = path.join(root, "tmp_answers");

const SUBJECTS = [
  { dir: "歷史會考作戰室", files: ["history-data.js", "archive-exams.js"] },
  { dir: "地理會考作戰室", files: ["geography-data.js", "archive-exams.js"] },
  { dir: "公民會考作戰室", files: ["civics-data.js", "archive-exams.js"] },
];

const norm = s => s.normalize("NFKC").replace(/\s+/g, "").replace(/[，。、；：「」『』（）()\[\]【】：,.\-—…& ＝]/g, "").toLowerCase();
const letterToIndex = l => "ABCD".indexOf(l);

function loadOfficialAnswers(year) {
  const file = path.join(answersDir, `${year}.json`);
  if (!fs.existsSync(file)) throw new Error(`missing ${file}; run tmp_parse_answer.mjs on answer PDFs first`);
  const data = JSON.parse(fs.readFileSync(file, "utf8"));
  const out = {};
  for (const [q, rec] of Object.entries(data.answers)) {
    if (rec.社會) out[q] = rec.社會;
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
    if (num < 1 || num > 63) continue;
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
  // fallback: longest choice substring search
  const key = [...want].sort((a, b) => b.length - a.length)[0];
  const byChoice = sections.filter(sec => norm(sec.text).includes(key));
  if (byChoice.length === 1) return byChoice[0].num;
  return null;
}

function loadArchive(subject) {
  const dir = path.join(root, subject.dir);
  const sandbox = { window: {}, console, Date, Math };
  vm.createContext(sandbox);
  for (const file of subject.files) {
    vm.runInContext(fs.readFileSync(path.join(dir, file), "utf8"), sandbox, { filename: file });
  }
  return sandbox.window.ARCHIVE_EXAMS;
}

let ok = true;
let total = 0;
let matched = 0;

for (const subject of SUBJECTS) {
  const archive = loadArchive(subject);
  console.log(`\n${subject.dir}:`);
  for (const year of Object.keys(archive).sort()) {
    const examText = fs.readFileSync(
      path.join(root, subject.dir, "official-data", year, `${year}-exam.txt`), "utf8");
    const sections = examSections(examText);
    const official = loadOfficialAnswers(year);
    const mismatches = [];
    let yearMatched = 0;

    for (let i = 0; i < archive[year].questions.length; i++) {
      const q = archive[year].questions[i];
      total++;
      const num = matchOfficialNum(sections, q);
      if (num == null) {
        ok = false;
        mismatches.push(`#${i + 1} unmatched (${q.text.slice(0, 24)}…)`);
        continue;
      }
      yearMatched++;
      matched++;
      const letter = official[String(num)];
      if (!letter) {
        ok = false;
        mismatches.push(`#${i + 1} official Q${num} missing 社會 key`);
        continue;
      }
      const expected = letterToIndex(letter);
      if (expected !== q.answer) {
        ok = false;
        mismatches.push(`#${i + 1} Q${num}: archive=${q.choices[q.answer]?.slice(0, 12)} vs official ${letter} (${q.choices[expected]?.slice(0, 12)})`);
      }
    }
    console.log(`  ${year}: ${archive[year].questions.length} archive, ${yearMatched} matched, ${mismatches.length} issues`);
    if (mismatches.length) mismatches.slice(0, 5).forEach(msg => console.log("    -", msg));
    if (mismatches.length > 5) console.log(`    … +${mismatches.length - 5} more`);
  }
}

console.log(`\nTotal: ${total} questions, ${matched} matched to official numbers`);
console.log(ok ? "OK: all matched archive answers agree with official 社會 column" : "FAIL: see mismatches above");
process.exit(ok ? 0 : 1);
