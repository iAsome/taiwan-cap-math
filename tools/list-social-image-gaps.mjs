// Work queue: social archive image/diagram gaps with exam.txt page + stem hints.
// ponytail: read-only inventory; next step is pdf-crop-png + diagram field per row.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const years = [106, 107, 108, 109, 110, 111, 112, 113, 114, 115];

const SUBJECTS = [
  { id: "歷史", dir: "歷史會考作戰室", files: ["history-data.js", "archive-exams.js"] },
  { id: "地理", dir: "地理會考作戰室", files: ["geography-data.js", "archive-exams.js"] },
  { id: "公民", dir: "公民會考作戰室", files: ["civics-data.js", "archive-exams.js"] },
];

const norm = s => s.normalize("NFKC").replace(/\s+/g, "").replace(/[，。、；：「」『』（）()\[\]【】：,.\-—…& ＝]/g, "").toLowerCase();

function loadArchive(subject) {
  const sandbox = { window: {}, console, Date, Math };
  vm.createContext(sandbox);
  for (const file of subject.files) {
    vm.runInContext(fs.readFileSync(path.join(root, subject.dir, file), "utf8"), sandbox, { filename: file });
  }
  return sandbox.window.ARCHIVE_EXAMS;
}

function parseOmittedNums(note) {
  if (!note) return [];
  const nums = new Set();
  for (const m of note.matchAll(/第\s*(\d+)\s*[、～\-]\s*(\d+)\s*[題（(]/g)) {
    const a = +m[1], b = +m[2];
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) nums.add(i);
  }
  for (const m of note.matchAll(/(?:第|、)\s*(\d+)\s*[（(]/g)) nums.add(+m[1]);
  for (const m of note.matchAll(/第\s*(\d+)\s*題/g)) nums.add(+m[1]);
  return [...nums].sort((a, b) => a - b);
}

function parseOmittedCount(note) {
  if (!note) return 0;
  const listed = parseOmittedNums(note).length;
  const vague = [...note.matchAll(/另有\s*(\d+)\s*題/g)].map(m => +m[1]);
  return Math.max(listed, vague.length ? Math.max(...vague) : 0);
}

function examMeta(examText) {
  const pages = [...examText.matchAll(/--- page (\d+) ---/g)].map(m => +m[1]);
  const pageStarts = pages.map((p, i) => ({ page: p, pos: examText.indexOf(`--- page ${p} ---`) }));
  const re = /\n(\d{1,2})\.(\s|[^\d])/g;
  const hits = [];
  let m;
  while ((m = re.exec(examText))) hits.push({ num: +m[1], pos: m.index });
  const byNum = {};
  for (let i = 0; i < hits.length; i++) {
    const { num, pos } = hits[i];
    if (num < 1 || num > 63) continue;
    const end = hits[i + 1]?.pos ?? examText.length;
    const block = examText.slice(pos, end).trim();
    const page = pageStarts.filter(p => p.pos <= pos).at(-1)?.page ?? 0;
    const stem = block.replace(/^\d+\.\s*/, "").replace(/\([A-D]\)[\s\S]*/, "").trim().slice(0, 80);
    const hasImageChoices = /\([A-D]\)\s*$|\([A-D]\)\s*\n\s*\([A-D]\)/m.test(block) || /圖\(/.test(stem);
    byNum[num] = { page, stem, hasImageChoices, block };
  }
  return byNum;
}

function matchOfficialNum(sections, q) {
  const want = q.choices.map(norm);
  const stem = norm(q.text.replace(/^【題組：[^】]+】\n?/, "").slice(0, 48));
  let hits = sections.filter(sec => want.every(c => norm(sec.text).includes(c)));
  if (hits.length > 1 && stem.length >= 12) {
    const refined = hits.filter(sec => norm(sec.text).includes(stem.slice(0, 24)));
    if (refined.length) hits = refined;
  }
  return hits[0]?.num ?? null;
}

const archives = Object.fromEntries(SUBJECTS.map(s => [s.id, loadArchive(s)]));
const queue = [];

for (const year of years) {
  const examPath = path.join(root, "歷史會考作戰室", "official-data", String(year), `${year}-exam.txt`);
  const examText = fs.readFileSync(examPath, "utf8");
  const meta = examMeta(examText);
  const assigned = {};
  for (const sub of SUBJECTS) {
    for (const q of archives[sub.id][year].questions) {
      const sections = Object.entries(meta).map(([num, v]) => ({ num: +num, text: v.block }));
      const num = matchOfficialNum(sections, q);
      if (num != null) assigned[num] = sub.id;
    }
  }

  for (const sub of SUBJECTS) {
    const exam = archives[sub.id][year];
    const gap = parseOmittedCount(exam.omittedNote);
    if (!gap) continue;
    const listed = parseOmittedNums(exam.omittedNote);
    const candidates = listed.length
      ? listed
      : Object.keys(meta).map(Number).filter(n => !assigned[n] && meta[n].hasImageChoices);
    for (const num of candidates.slice(0, gap)) {
      const m = meta[num];
      queue.push({
        subject: sub.id,
        year,
        qNum: num,
        page: m?.page ?? null,
        stem: m?.stem ?? "(not in exam.txt)",
        pdf: `${sub.dir}/official-data/${year}/${year}-exam.pdf`,
      });
    }
    if (!listed.length && candidates.length < gap) {
      queue.push({ subject: sub.id, year, qNum: null, note: `${gap - candidates.length} more (no nums in omittedNote)` });
    }
  }
}

console.log(`Social image gap queue: ${queue.filter(q => q.qNum).length} questions\n`);
for (const row of queue) {
  if (!row.qNum) { console.log(`${row.subject} ${row.year}: ${row.note}`); continue; }
  console.log(`${row.subject} ${row.year} Q${row.qNum} page ${row.page}: ${row.stem}`);
}
