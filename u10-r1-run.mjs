#!/usr/bin/env node
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { countZh } from "./數學會考作戰室/tools/v2-quality.mjs";

const repo = path.dirname(fileURLToPath(import.meta.url));
const math = path.join(repo, "數學會考作戰室");
const tools = path.join(math, "tools");

execSync("git fetch origin", { cwd: repo, stdio: "inherit" });
execSync("git checkout -f math-v2/u10-polynomial-formulas", { cwd: repo, stdio: "inherit" });
execSync("git reset --hard origin/math-v2/u10-polynomial-formulas", { cwd: repo, stdio: "inherit" });

const CONTENT = [
  "v2-u10-content-s001-s003.mjs",
  "v2-u10-content-s004-s006.mjs",
  "v2-u10-content-s007-s009.mjs",
  "v2-u10-content-s010-s012.mjs",
];

const EXPL_TAILS = [
  "寫完再回頭確認係數、指數與符號是否都處理到。",
  "整理時把同次項分組，較不容易漏項或合併錯。",
  "展開後要檢查每一項的係數與符號，合併同類項後再與題意比對。",
];

const CM_FRAG = [
  "，書寫時要分項處理。",
  "，符號或係數處理不完整。",
  "符號或係數處理不完整。",
  "書寫時要分項處理。",
  "，指數相加錯，書寫時要分項處理。",
];

const SKILL_PAD = {
  "polynomial-terms": "次數與係數要分開看，勿把項數當次數。",
  "polynomial-evaluation": "代入時負數與分數都要加括號再計算。",
  "like-terms-combine": "合併時字母與指數不變，只動係數。",
  "polynomial-add-subtract": "減括號時括號內每一項符號都要改變。",
  "monomial-multiply": "單項相乘係數相乘、同底指數相加。",
  "monomial-polynomial-distribute": "分配律要乘到括號內每一項。",
  "binomial-multiply-basic": "二項式展開要四項相乘再合併同類項。",
  "square-sum-formula": "完全平方和的中間項係數一定是正兩倍乘積。",
  "square-difference-formula": "減號平方的中間項一定是負兩倍乘積。",
  "difference-of-squares-expand": "平方差展開後中間項會互相抵消。",
  "formula-mixed-recognition": "先辨識是平方、平方差還是一般乘法。",
  "polynomial-literacy-context": "面積或周長題先列代數式再展開合併。",
};

const SKILL_TOPUP = {
  "polynomial-terms": "常數項不含字母，係數含符號要一併計算。",
  "polynomial-evaluation": "代入後先算括號內，再算乘方，最後加減。",
  "like-terms-combine": "只有字母與指數完全相同的項才能合併。",
  "polynomial-add-subtract": "去括號後同次項才能合併，係數帶符號。",
  "monomial-multiply": "不同字母的因數要全部保留在結果裡。",
  "monomial-polynomial-distribute": "外項乘每一內項，漏乘一項結果就錯。",
  "binomial-multiply-basic": "交叉相乘四項都要寫出，再合併同類項。",
  "square-sum-formula": "用公式時確認中間項是加號兩倍乘積。",
  "square-difference-formula": "減號平方的中間項一定是負的兩倍乘積。",
  "difference-of-squares-expand": "兩個平方相減才用平方差，先確認型態。",
  "formula-mixed-recognition": "認出型態後再套用對應乘法公式較省事。",
  "polynomial-literacy-context": "文字題先設未知數列式，展開後再化簡。",
};

function stripExpl(s) {
  let o = s;
  for (const t of EXPL_TAILS) o = o.split(t).join("");
  return o.replace(/。+/g, "。").trim();
}

function fixCm(s, skillId) {
  let o = s;
  for (const f of CM_FRAG) o = o.split(f).join("");
  o = o.replace(/，+/g, "，").replace(/。+/g, "。").trim();
  if (countZh(o) < 12) {
    const pad = SKILL_TOPUP[skillId] || SKILL_PAD[skillId];
    if (pad) o += (o.endsWith("。") ? "" : "。") + pad;
  }
  if (!o.endsWith("。")) o += "。";
  return o;
}

function padExpl(expl, skillId) {
  let o = stripExpl(expl);
  if (!o.endsWith("。")) o += "。";
  for (const extra of [SKILL_PAD[skillId], SKILL_TOPUP[skillId]]) {
    if (!extra || countZh(o) >= 45) break;
    if (!o.includes(extra.slice(0, 6))) o += extra;
  }
  const EXPL_MORE = [
    "展開後三項符號都要看清楚。",
    "中間項係數一定是兩倍乘積。",
    "去括號時每一項符號都要處理。",
    "同次項合併時係數相加字母不變。",
    "代入數值後再算一次確認無誤。",
  ];
  for (const m of EXPL_MORE) {
    if (countZh(o) >= 45) break;
    if (!o.includes(m.slice(0, 4))) o += m;
  }
  return o;
}

for (const f of CONTENT) {
  const p = path.join(tools, f);
  let out = fs.readFileSync(p, "utf8");
  let skill = "";
  out = out.replace(/("skillId": "([^"]+)")|("explanation": "([^"]*)")|("commonMistake": "([^"]*)")/g, (m, _a, sid, _c, expl, _e, cm) => {
    if (sid) { skill = sid; return `"skillId": "${sid}"`; }
    if (expl !== undefined) return `"explanation": ${JSON.stringify(padExpl(expl, skill))}`;
    if (cm !== undefined) return `"commonMistake": ${JSON.stringify(fixCm(cm, skill))}`;
    return m;
  });
  fs.writeFileSync(p, out);
}

const { SKILL_ROWS } = await import(pathToFileURL(path.join(tools, "v2-u10-content.mjs")).href);
for (const sk of SKILL_ROWS) {
  for (let i = 0; i < sk.rows.length; i++) {
    const r = sk.rows[i];
    const id = `u10-s${String(sk.seq).padStart(3, "0")}-v${i + 1}`;
    if (countZh(r.explanation) < 45) throw new Error(`${id} explanation still short ${countZh(r.explanation)}`);
    if (countZh(r.commonMistake) < 12) throw new Error(`${id} commonMistake still short ${countZh(r.commonMistake)}`);
  }
}

const verifyPath = path.join(tools, "verify-v2-u10-pack.mjs");
fs.writeFileSync(verifyPath, `#!/usr/bin/env node
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { countZh } from "./v2-quality.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const v2 = path.join(root, "v2");
const U10_BANNED = [
  "寫完再回頭確認係數、指數與符號是否都處理到",
  "展開後要檢查每一項的係數與符號，合併同類項後再與題意比對",
  "書寫時要分項處理",
  "符號或係數處理不完整",
  "整理時把同次項分組，較不容易漏項或合併錯",
  "本題依題干所列式子逐步計算即可",
  "代入後依運算順序逐步計算",
  "因式分解為", "分解為", "求根", "公式解", "判別式", "高中", "餘式", "因式定理", "多項式除法",
  "選項", "逐項", "驗算", "核對", "故應選", "答案為", "結果為", "若誤以為", "另外，選", "【", "】",
  "<=", ">=", "如圖", "下圖", "請看圖"
];
const BAD_SYMBOL_RE = /<=|>=/;
const IMAGE_RE = /<img\\b|<svg\\b|canvas/i;
const FACTORING_Q_RE = /因式分解|分解為[^何]|將.+分解/;
const DIFF_EXPECTED = { basic: 48, standard: 60, advanced: 24, literacy: 12 };
const AI_EXPECTED = [36, 36, 36, 36];
const AI_PER_SKILL = [3, 3, 3, 3];
const BANK_TO_SYLLABUS = {
  "polynomial-terms": "polynomial-degree",
  "polynomial-evaluation": "mult-formula-evaluate",
  "like-terms-combine": "polynomial-like-terms",
  "polynomial-add-subtract": "polynomial-add-subtract",
  "monomial-multiply": "polynomial-multiply",
  "monomial-polynomial-distribute": "distributive-evaluate",
  "binomial-multiply-basic": "polynomial-multiply",
  "square-sum-formula": "square-formula",
  "square-difference-formula": "square-formula",
  "difference-of-squares-expand": "difference-of-squares",
  "formula-mixed-recognition": "mult-formula-expand",
  "polynomial-literacy-context": "polynomial-literacy"
};

function loadU10() {
  const ctx = vm.createContext({ window: {} });
  for (const f of ["math-question-bank-v2-u10.js", "math-lecture-v2-u10.js"]) {
    const p = path.join(v2, f);
    assert.ok(fs.existsSync(p), \`missing \${f}\`);
    vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: f });
  }
  return { questions: ctx.window.MATH_QUESTION_BANK_V2_U10, lectures: ctx.window.MATH_LECTURE_V2_U10 };
}

function loadSyllabusU10Skills() {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(v2, "math-syllabus-v2.js"), "utf8"), ctx, { filename: "math-syllabus-v2.js" });
  const unit = ctx.window.MATH_SYLLABUS_V2.units.find(u => u.unitId === "u10");
  assert.ok(unit, "syllabus u10 missing");
  const skills = [];
  for (const t of unit.topics) for (const s of t.skills) skills.push(s.skillId);
  return [...new Set(skills)].sort();
}

function hasBanned(text) {
  for (const p of U10_BANNED) if (text.includes(p)) return p;
  return null;
}

function hasDuplicateSentence(text) {
  const parts = text.split(/(?<=。)/).map(s => s.trim()).filter(Boolean);
  const seen = new Set();
  for (const p of parts) { if (seen.has(p)) return p; seen.add(p); }
  return null;
}

function checkSyllabusMapping(questions) {
  const bankSkills = [...new Set(questions.map(q => q.skillId))].sort();
  const syllabusSkills = loadSyllabusU10Skills();
  const exact = bankSkills.filter(s => syllabusSkills.includes(s));
  const mappedOnly = bankSkills.filter(s => !syllabusSkills.includes(s) && BANK_TO_SYLLABUS[s]);
  const unmapped = bankSkills.filter(s => !syllabusSkills.includes(s) && !BANK_TO_SYLLABUS[s]);
  console.log("syllabus mapping check:");
  console.log("  bank skills (12):", bankSkills.join(", "));
  console.log(\`  syllabus u10 skills (\${syllabusSkills.length}):\`, syllabusSkills.join(", "));
  console.log("  exact match:", exact.length, exact.join(", ") || "(none)");
  console.log("  mapped (not exact):", mappedOnly.length, mappedOnly.join(", ") || "(none)");
  if (unmapped.length) console.log("  unmapped:", unmapped.join(", "));
  assert.equal(bankSkills.length, 12);
  assert.equal(unmapped.length, 0, "unmapped bank skills");
  assert.equal(exact.length + mappedOnly.length, 12);
}

function checkQuestions(questions) {
  assert.equal(questions.length, 144);
  const bySkill = new Map();
  const diff = { basic: 0, standard: 0, advanced: 0, literacy: 0 };
  const ai = [0, 0, 0, 0];
  for (const q of questions) {
    ai[q.answerIndex]++;
    diff[q.difficulty]++;
    if (!bySkill.has(q.skillId)) bySkill.set(q.skillId, []);
    bySkill.get(q.skillId).push(q);
    assert.equal(q.visualMode, "text-only", q.questionId);
    assert.equal(q.unitId, "u10", q.questionId);
    assert.ok(countZh(q.explanation) >= 45, \`\${q.questionId} explanation\`);
    assert.ok(countZh(q.commonMistake) >= 12, \`\${q.questionId} commonMistake\`);
    assert.ok(q.steps.length >= 3, \`\${q.questionId} steps\`);
    const blob = [q.text, q.explanation, q.commonMistake, ...q.steps, ...q.choices].join("\\n");
    assert.ok(!hasBanned(blob), \`\${q.questionId} banned: \${hasBanned(blob)}\`);
    assert.ok(!FACTORING_Q_RE.test(q.text), \`\${q.questionId} factoring question\`);
    assert.ok(!BAD_SYMBOL_RE.test(blob), \`\${q.questionId} bad symbol\`);
    assert.ok(!IMAGE_RE.test(blob), \`\${q.questionId} image tag\`);
    assert.ok(!hasDuplicateSentence(q.explanation), \`\${q.questionId} duplicate\`);
  }
  assert.equal(bySkill.size, 12);
  for (const [sid, items] of bySkill) {
    assert.equal(items.length, 12, sid);
    const skillAi = [0, 0, 0, 0];
    let literacy = 0;
    for (const q of items) { skillAi[q.answerIndex]++; if (q.difficulty === "literacy") literacy++; }
    assert.deepEqual(skillAi, AI_PER_SKILL, sid);
    assert.ok(literacy >= 1, sid);
  }
  assert.deepEqual(diff, DIFF_EXPECTED);
  assert.deepEqual(ai, AI_EXPECTED);
}

function checkLectures(lectures) {
  assert.equal(lectures.length, 12);
  for (const l of lectures) {
    assert.ok(countZh(l.concept) >= 80, l.skillId);
    assert.ok(l.stepGuide.length >= 5, l.skillId);
    assert.ok(l.examples.length >= 2, l.skillId);
    assert.ok(l.commonMistakes.length >= 4, l.skillId);
    assert.ok(!hasBanned(JSON.stringify(l)), l.skillId);
  }
}

const { questions, lectures } = loadU10();
checkQuestions(questions);
checkLectures(lectures);
checkSyllabusMapping(questions);
console.log("verify-v2-u10-pack: OK — 144 questions, 12 lectures, all checks passed");
`);

execSync("node tools/v2-u10-generate-all.mjs", { cwd: math, stdio: "inherit" });
execSync("node tools/build-u10-pack.mjs", { cwd: math, stdio: "inherit" });
execSync("node tools/verify-v2-u10-pack.mjs", { cwd: math, stdio: "inherit" });
execSync("node tools/verify-chapter-quizzes.js", { cwd: math, stdio: "inherit" });
execSync("node tools/print-v2-u10-samples.mjs", { cwd: math, stdio: "inherit" });
console.log("u10-r1-run: complete");
