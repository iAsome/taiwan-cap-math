// 108課綱 gate: scan all frozen math quiz variants + lecture blocks for
// out-of-scope content and misleading phrasing. Exits 1 on any violation.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const mathDir = path.join(root, "數學會考作戰室");

const sandbox = { window: {} };
vm.createContext(sandbox);
for (const f of ["quiz-taxonomy.js", "quiz-variant-bank.js", "lecture-taxonomy.js"]) {
  vm.runInContext(fs.readFileSync(path.join(mathDir, f), "utf8"), sandbox, { filename: f });
}
const bank = sandbox.window.QUIZ_VARIANT_BANK || {};
const taxonomy = sandbox.window.QUIZ_TAXONOMY || {};
const lectures = sandbox.window.LECTURE_TAXONOMY || {};

// --- 108課綱國中數學禁題規則（超綱即 fail） ---
const FORBIDDEN = [
  ["錐體/球體積", /(圓錐|角錐|錐體|球)[^。？]{0,25}體積/],
  ["錐體體積公式", /[VＶ]\s*=\s*(?:\[\[frac:)?(?:πr²h|Bh)\|?3/],
  ["斜柱斜錐", /斜[角圓]?[柱錐]體?/],
  ["視圖反推立體", /(視圖|正視圖|俯視圖|側視圖)[^。？]{0,40}(最少|最多|幾個|重建|還原|反推|組成)/],
  ["三角函數", /(?:^|[^a-z])(sin|cos|tan)(?:[^a-z]|$)|正弦|餘弦|正切/],
  ["圓冪根軸", /圓冪|根軸/],
  ["高中內容", /對數函數|矩陣|行列式|虛根|複數平面|微積分/],
  ["繁分數", /\[\[frac:[^\]]*\[\[frac:/],
];

// --- 題文誤導規則 ---
// 「如圖」開頭卻無法自足（frozen bank 題目圖為 runtime 附掛，題文必須自足）。
// 「圖中/作圖中」屬自足句型（圓形圖中占25%…），只攔「如圖」「如下圖」「附圖」。
const MISLEADING = [
  ["如圖但題文未附資料", /如[下上]?圖|附圖|見圖/],
];

// 章節與題文不符：圓章節出現圓錐、數線題型出現座標平面等。
const CHAPTER_RULES = [
  { quizIds: ["g9-1-c2"], label: "圓章節出現立體錐柱", re: /圓[錐柱]|角錐/ },
];

const violations = [];
function scan(where, text, quizId) {
  const t = String(text || "");
  for (const [label, re] of FORBIDDEN) {
    if (re.test(t)) violations.push({ where, label, snippet: t.replace(/\s+/g, " ").slice(0, 80) });
  }
  for (const [label, re] of MISLEADING) {
    if (re.test(t)) violations.push({ where, label, snippet: t.replace(/\s+/g, " ").slice(0, 80) });
  }
  for (const rule of CHAPTER_RULES) {
    if (quizId && rule.quizIds.includes(quizId) && rule.re.test(t)) {
      violations.push({ where, label: rule.label, snippet: t.replace(/\s+/g, " ").slice(0, 80) });
    }
  }
}

let checked = 0;
for (const [key, presets] of Object.entries(bank)) {
  const quizId = key.split("/")[0];
  for (let i = 0; i < presets.length; i++) {
    checked++;
    const q = presets[i];
    const blob = [q.text, ...(q.choices || []), ...(q.steps || []), q.tip, q.trap, q.concept].join(" ");
    scan(`${key}#${i}`, blob, quizId);
  }
}
let lecBlocks = 0;
for (const [key, lec] of Object.entries(lectures)) {
  const quizId = key.split("/")[0];
  for (const b of lec.blocks || []) {
    lecBlocks++;
    const blob = b.type === "example" ? `${b.q} ${b.a}` : (b.html || b.text || "");
    scan(`lec:${key}`, blob, quizId);
  }
}

// sanity: the scan must actually be scanning a full bank
if (checked < 5000) {
  console.error(`curriculum-scope: only ${checked} bank questions scanned (expected 5370) — bank not loaded?`);
  process.exit(1);
}

if (violations.length) {
  console.error(`curriculum-scope: ${violations.length} violations`);
  const seen = new Set();
  for (const v of violations) {
    const sig = `${v.where.replace(/#\d+$/, "")}|${v.label}`;
    if (seen.has(sig)) continue;
    seen.add(sig);
    console.error(`  [${v.label}] ${v.where}: ${v.snippet}`);
  }
  process.exit(1);
}
console.log(`curriculum-scope: ${checked} bank questions + ${lecBlocks} lecture blocks clean (0 violations)`);
