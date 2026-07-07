// 自我檢查腳本：載入英文站的資料模組，檢查跨檔案的資料一致性。
// 用法：node tools/verify-data.mjs（在 英文會考作戰室/ 目錄下執行）
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { loadFractionMarkup } from "../../shared/load-fraction-markup.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const sandbox = { window: {}, console, Date, Math };
vm.createContext(sandbox);
loadFractionMarkup(sandbox);

for (const file of ["english-data.js", "quiz-taxonomy.js", "vocab-quiz-data.js", "questions.js", "analysis-data.js"]) {
  const code = fs.readFileSync(path.join(root, file), "utf8");
  vm.runInContext(code, sandbox, { filename: file });
}

const { ENGLISH_DATA, QUIZ_TAXONOMY, EXAM_ENGINE, ENGLISH_ANALYSIS } = sandbox.window;
const errors = [];
const check = (cond, msg) => { if (!cond) errors.push(msg); };
const handbookEsc = value => String(value).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const handbookNl = value => handbookEsc(value).replace(/\n/g, "<br>");
const badHandbookText = /分子|分母|\[\[frac:|math-frac|math-num|math-den|[А-Яа-яЁё]/;
const appSource = fs.readFileSync(path.join(root, "app.js"), "utf8");
check(!/const\s+nl\s*=\s*value\s*=>\s*FRACTION_MARKUP\.renderMath/.test(appSource), "英文講義 nl() 不得使用 FRACTION_MARKUP.renderMath，避免 a/an 等斜線文字被渲染成分數");

function handbookStrings(unit) {
  return [
    unit.summary, unit.core, unit.clarify, unit.formula, unit.derivation,
    ...(unit.steps || []), ...(unit.tips || []),
    ...((unit.examples || []).flatMap(example => [example.sentence, example.note])),
    unit.quiz?.q, unit.quiz?.a
  ].filter(value => value != null);
}

// 1. 單元 id 應為 1..20 連續整數
const unitIds = ENGLISH_DATA.units.map(u => u.id);
check(unitIds.length === 20, `ENGLISH_DATA.units 應有 20 個單元，實際 ${unitIds.length} 個`);
unitIds.forEach((id, i) => check(id === i + 1, `單元 id 應依序為 ${i + 1}，實際為 ${id}`));
ENGLISH_DATA.units.forEach(unit => {
  ["summary", "core", "clarify", "formula", "derivation"].forEach(field => {
    check(typeof unit[field] === "string" && unit[field].trim(), `unit ${unit.id} ${field} 不得為空`);
  });
  check(Array.isArray(unit.steps) && unit.steps.length >= 4, `unit ${unit.id} 至少需要 4 個 steps`);
  check(Array.isArray(unit.tips) && unit.tips.length >= 4, `unit ${unit.id} 至少需要 4 個 tips`);
  check(unit.quiz?.q && unit.quiz?.a, `unit ${unit.id} 需要 1 題觀念測驗與解說`);
  check(Array.isArray(unit.examples) && unit.examples.length >= 1, `unit ${unit.id} 至少需要 1 個會考例句`);
  (unit.examples || []).forEach((example, i) => {
    check(example.sentence && example.note, `unit ${unit.id} example ${i + 1} 需要 sentence 與 note`);
  });
  const text = handbookStrings(unit).join("\n");
  check(!badHandbookText.test(text), `unit ${unit.id} 講義含分數標記、分子分母字樣或異常 Cyrillic 字元`);
  const rendered = handbookStrings(unit).map(handbookNl).join("\n");
  check(!/math-frac|math-num|math-den/.test(rendered), `unit ${unit.id} 英文講義渲染後不得含 math fraction class`);
});

// 2. 模考：generate() 應產生 30 題，每題 4 個選項、answer 落在範圍內、unitId 有效
const mock = EXAM_ENGINE.generate(20260701, 2);
check(mock.questions.length === 30, `模考應產生 30 題，實際 ${mock.questions.length} 題`);
mock.questions.forEach((q, i) => {
  check(Array.isArray(q.choices) && q.choices.length === 4, `模考第 ${i + 1} 題選項數應為 4`);
  check(q.answer >= 0 && q.answer < q.choices.length, `模考第 ${i + 1} 題 answer 索引超出範圍`);
  check(unitIds.includes(q.unitId), `模考第 ${i + 1} 題 unitId=${q.unitId} 不存在於 ENGLISH_DATA`);
});

// 3. 小考題庫：每份小考的實際出題數應等於 blueprint.questionCount，unitIds 皆有效
for (const blueprint of EXAM_ENGINE.quizCatalog) {
  const quiz = EXAM_ENGINE.generateQuiz(blueprint.id);
  check(quiz.questions.length === blueprint.questionCount,
    `小考 ${blueprint.id} 題數不符：blueprint=${blueprint.questionCount}，實際=${quiz.questions.length}`);
  check(blueprint.questionCount === 50 && blueprint.minutes === 50, `小考 ${blueprint.id} 應為 50 題、50 分鐘`);
  check(quiz.questions.length === 50, `小考 ${blueprint.id} 實際應產生 50 題`);
  const reading = quiz.questions.slice(44);
  check(reading.length === 6, `小考 ${blueprint.id} 第 45–50 題應為閱讀題組`);
  check(reading.slice(0, 3).every(q => q.readingGroup === 1) && reading.slice(3, 6).every(q => q.readingGroup === 2),
    `小考 ${blueprint.id} 閱讀題組應為 3+3 題`);
  reading.forEach((q, i) => {
    check(Array.isArray(q.glossary) && q.glossary.length <= 5, `小考 ${blueprint.id} 閱讀第 ${i + 45} 題 glossary 不得超過 5 字`);
    (q.glossary || []).forEach(g => check(g.word && g.zh, `小考 ${blueprint.id} 閱讀第 ${i + 45} 題 glossary 需含 word/zh`));
  });
  quiz.questions.forEach((q, i) => {
    check(Array.isArray(q.choices) && q.choices.length === 4, `小考 ${blueprint.id} 第 ${i + 1} 題選項數應為 4`);
    check(q.answer >= 0 && q.answer < q.choices.length, `小考 ${blueprint.id} 第 ${i + 1} 題 answer 索引超出範圍`);
  });
  blueprint.unitIds.forEach(id => check(unitIds.includes(id), `小考 ${blueprint.id} 引用的 unitId=${id} 不存在於 ENGLISH_DATA`));
}
check(EXAM_ENGINE.vocabCoverage?.basicCount === 1971, `2000 字動態題庫應覆蓋 1971 詞，實際 ${EXAM_ENGINE.vocabCoverage?.basicCount}`);
check(EXAM_ENGINE.vocabCoverage?.slotsPerWord >= 10, `2000 字動態題庫每詞至少 10 題槽，實際 ${EXAM_ENGINE.vocabCoverage?.slotsPerWord}`);
check(EXAM_ENGINE.vocabCoverage?.totalSlots >= 19710, `2000 字動態題庫總題槽至少 19710，實際 ${EXAM_ENGINE.vocabCoverage?.totalSlots}`);

// 4. QUIZ_TAXONOMY 的 key 必須對應真實存在的 quizCatalog id
const catalogIds = new Set(EXAM_ENGINE.quizCatalog.map(b => b.id));
Object.keys(QUIZ_TAXONOMY).forEach(quizId => check(catalogIds.has(quizId), `QUIZ_TAXONOMY 的 ${quizId} 不存在於 quizCatalog`));

// 5. 凍結逐題分析（官方題本見 cap.rcpet.edu.tw/examination.html）
Object.entries(ENGLISH_ANALYSIS.primaryUnits || {}).forEach(([year, unitSeq]) => {
  check(Array.isArray(unitSeq) && unitSeq.length > 0, `${year} 年 primaryUnits 為空`);
  unitSeq.forEach((unitId, i) => check(unitIds.includes(unitId), `${year} 年第 ${i + 1} 題 unitId=${unitId} 無效`));
});
if (ENGLISH_ANALYSIS.officialByYear) {
  Object.keys(ENGLISH_ANALYSIS.primaryUnits || {}).forEach(year => {
    const info = ENGLISH_ANALYSIS.officialByYear[year];
    check(!!info, `${year} 年 officialByYear 缺失`);
    if (!info) return;
    const seqLen = ENGLISH_ANALYSIS.primaryUnits[year].length;
    if (info.count != null) check(info.count === seqLen, `${year} 年 count(${info.count}) ≠ primaryUnits(${seqLen})`);
    if (info.abilities) {
      const sum = Object.values(info.abilities).reduce((s, v) => s + v, 0);
      check(sum === info.count, `${year} 年 abilities 合計(${sum}) ≠ count(${info.count})`);
    }
  });
}
unitIds.forEach(id => check(!!ENGLISH_ANALYSIS.domainByUnit?.[id], `domainByUnit 缺少 unit ${id}`));
check(Object.keys(ENGLISH_ANALYSIS.primaryUnits || {}).length === 10, "ENGLISH_ANALYSIS 應涵蓋 10 年 primaryUnits");

const vocabPath = path.join(root, "vocab-3000.json");
const PHRASE_STOP = new Set(["a", "an", "the", "to", "of", "in", "on", "at", "for", "and", "or"]);

function kkSyllableCount(kk) {
  const s = String(kk).replace(/[ˈˌ]/g, "");
  const vowels = s.match(/[aeiouɪɛæɑɔʊʌəɚ]+/g);
  return vowels ? vowels.length : 0;
}

function vocabNeedsStress(word, kk) {
  if (/\s/.test(word)) return false;
  if (/[()]/.test(word)) return false;
  if (/\./.test(word)) return false;
  return kkSyllableCount(kk) >= 2;
}

if (fs.existsSync(vocabPath)) {
  const vocab = JSON.parse(fs.readFileSync(vocabPath, "utf8"));
  check(Array.isArray(vocab.tiers) && vocab.tiers.length === 3, "vocab-3000.json 應有 3 個 tier");
  vocab.tiers.forEach(tier => {
    check(Array.isArray(tier.words) && tier.words.length > 0, `vocab tier ${tier.id} 為空`);
    tier.words.forEach((item, i) => {
      check(!!item.word && !!item.zh, `vocab tier ${tier.id} 第 ${i + 1} 筆缺少 word/zh`);
      check(!!item.sortKey, `vocab tier ${tier.id}「${item.word}」缺少 sortKey`);
      check(!!item.kk, `vocab tier ${tier.id}「${item.word}」缺少 kk`);
      if (item.kk && /\s/.test(item.word) && !/\//.test(item.word)) {
        check(/\s/.test(item.kk), `片語「${item.word}」KK 應為多詞音標`);
        const parts = item.word.trim().split(/\s+/).filter(p => !PHRASE_STOP.has(p.toLowerCase()));
        if (parts.length >= 2) check(item.kk.split(/\s+/).length >= 2, `片語「${item.word}」KK 可能只剩最後一詞（${item.kk}）`);
      } else if (item.kk && vocabNeedsStress(item.word, item.kk)) {
        check(/[ˈˌ]/.test(item.kk), `「${item.word}」KK 缺少重音（${item.kk}）`);
      }
    });
    for (let i = 1; i < tier.words.length; i++) {
      const prev = tier.words[i - 1].sortKey;
      const cur = tier.words[i].sortKey;
      check(prev.localeCompare(cur, "en") <= 0, `vocab tier ${tier.id} 第 ${i + 1} 筆 sortKey 未依 A→Z 排序（${prev} > ${cur}）`);
    }
  });
  const total = vocab.tiers.reduce((n, t) => n + t.words.length, 0);
  check(total >= 2900, `vocab-3000.json 總字數過少：${total}`);
  check(vocab.meta?.counts?.total === total, `vocab meta.counts.total(${vocab.meta?.counts?.total}) ≠ 實際(${total})`);
} else {
  errors.push("vocab-3000.json 不存在，請先執行 node tools/build-vocab-3000.mjs");
}

if (errors.length) {
  console.error(`發現 ${errors.length} 個問題：`);
  errors.forEach(e => console.error(" -", e));
  process.exit(1);
} else {
  const years = Object.keys(ENGLISH_ANALYSIS.primaryUnits).sort();
  const totalArchiveQ = years.reduce((s, y) => s + ENGLISH_ANALYSIS.primaryUnits[y].length, 0);
  const vocabNote = fs.existsSync(vocabPath) ? `、vocab-3000 ${JSON.parse(fs.readFileSync(vocabPath, "utf8")).meta?.counts?.total || "?"} 字` : "";
  console.log(`全部檢查通過：20 個單元、${EXAM_ENGINE.quizCatalog.length} 份小考、模考 30 題、凍結逐題分析 ${years.length} 年（${years.join("、")}）共 ${totalArchiveQ} 題${vocabNote}。`);
}
