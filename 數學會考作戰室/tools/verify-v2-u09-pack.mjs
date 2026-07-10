#!/usr/bin/env node
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import {
  countZh,
  hasBannedStep,
  hasBannedText,
  conceptQuality,
  explanationQuality,
  explanationHasConcreteContent,
  BANNED_MISTAKE_PHRASES,
  U04_EXPLANATION_PREFIX_RE,
  U04_EXPLANATION_PREFIX_COLON_RE,
  hasU04BannedText,
  u05ExplanationTooVague,
  U05_IMAGE_PHRASES,
  stepsEmbedQuestionText,
  explanationOverRepeatsText
} from "./v2-quality.mjs";
import { auditQuestions } from "./u09-semantic-audit.mjs";
import { QA3_MANIFEST } from "./u09-qa3-review-manifest.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const v2Dir = path.join(root, "v2");

const U09_EXTRA_BANNED = [
  "如圖", "下圖", "請看圖", "圖中", "由圖可知", "依圖判斷", "觀察圖表",
  "選項", "逐項", "驗算", "核對", "故應選", "答案為", "結果為", "若誤以為", "另外，選",
  "【", "】", "標準差", "四分位", "盒狀圖", "常態分布", "信賴區間",
  "不符合題目條件", "逐項驗算後再決定",
  "算出結果後要回頭對照題目文字是否合理",
  "這類資料題不能憑印象估算，要用算式處理",
  "解題時應先整理已知條件再列式計算",
  "會考資料題重在判讀與運算，每一步都要清楚",
  "讀題時要確認比較對象、單位與範圍是否一致",
  "讀資料時要對照題意逐步計算，不能跳步",
  "比較時要清楚比較對象、所用統計量",
  "避免由數字直接做超出題意的推論",
  "計算後要對照題目所問的統計量與單位",
  "確認結論是否仍在題意範圍內",
  "這類資料題不能憑印象估算",
  "解題時應先整理已知條件",
  "會考資料題重在判讀與運算",
  "讀題時要確認比較對象",
  "依題目所給數字列式計算",
  "列式時要把題目中的各組人數與平均都換算成總分再計算",
  "列式要用題目全部已知數字再作答",
  "不能跳步",
  "結論必須依題目所給資料計算得到",
  "計算時要把題幹已列數字全部用進去",
  "不能改用其他資料",
  "與題幹所列數字或所求量對不上",
  "是把部分資料誤當成最終答案",
  "須數各數出現次數，全部不同時可能沒有眾數",
  "有極端高分時中位較適合報一般水準",
  "有極端值時中位較適合描述多數人的水準",
  "依題幹已列數字逐步計算",
  "再確認所求的是哪一種統計量",
  "題幹已列數字",
  "所求的是哪一種統計量",
  "加權平均須先把各項乘以權重",
  "眾數看出現次數，全距用最大值減最小值",
  "平均數相關題目要先分清",
  "中位數須先排序",
  "次數表要先確認",
  "長條圖題要先找出",
  "折線圖題目須先對照",
  "計算完成後比對各錯選數字來源",
  "不符合本題資料",
  "本題正確數值是",
  "已把題目指定的各組次數全部加總",
  "與本題列式結果不符"
];
const U09_SC_BANNED = [
  "中间", "里面", "总体", "数据", "统计", "图表", "比较", "范围",
  "错误", "认为", "显示", "应当", "进行", "选择", "问题", "结果",
  "简单", "复杂", "个数", "数值", "全体", "谨慎", "夸大"
];
const U09_SC_CHARS = [
  "却", "这", "为", "从", "与", "应", "还", "后", "里", "对", "达", "无", "发", "过",
  "别", "数", "学", "类", "组", "图", "题", "问", "结", "选", "错", "较", "范", "围",
  "简", "复", "个", "间", "体", "据", "计", "显", "进"
];
const BAD_SYMBOL_RE = /<=|>=/;

function splitExplanationSentences(text) {
  return text.split(/[。！？；]/).map(s => s.trim().replace(/[\u0020\u3000]+/g, "")).filter(Boolean);
}

function explanationExactDuplicate(explanation) {
  const seen = new Set();
  for (const s of splitExplanationSentences(explanation)) {
    if (seen.has(s)) return s;
    seen.add(s);
  }
  return null;
}

function normalizeNearDup(s) {
  return s.replace(/[\d+\-−×÷=().,，、%元分人cmg\s]/gi, "");
}

function explanationNearDuplicate(explanation) {
  const sents = splitExplanationSentences(explanation).filter(s => countZh(s) > 10);
  for (let i = 0; i < sents.length; i++) {
    for (let j = i + 1; j < sents.length; j++) {
      const a = normalizeNearDup(sents[i]);
      const b = normalizeNearDup(sents[j]);
      if (!a || !b) continue;
      const shorter = a.length <= b.length ? a : b;
      const longer = a.length <= b.length ? b : a;
      if (longer.includes(shorter) && shorter.length / longer.length >= 0.8) {
        return { a: sents[i], b: sents[j] };
      }
    }
  }
  return null;
}

function loadJs(varName, filename) {
  const code = fs.readFileSync(path.join(v2Dir, filename), "utf8");
  const ctx = { window: {} };
  vm.runInNewContext(code, ctx);
  return ctx.window[varName];
}

function hasU09Banned(textOrArray) {
  const parts = Array.isArray(textOrArray) ? textOrArray : [textOrArray];
  for (const part of parts) {
    if (typeof part !== "string") continue;
    const u04 = hasU04BannedText(part);
    if (u04) return `U04: ${u04}`;
    const gen = hasBannedText(part);
    if (gen) return `general: ${gen}`;
    for (const p of U09_EXTRA_BANNED) {
      if (part.includes(p)) return p;
    }
    for (const p of U09_SC_BANNED) {
      if (part.includes(p)) return `SC:${p}`;
    }
    for (const ch of U09_SC_CHARS) {
      if (part.includes(ch)) return `SC-char:${ch}`;
    }
    if (BAD_SYMBOL_RE.test(part)) return "<=/>=";
    for (const [re, label] of [
      [/[^\s，。；]+與本題列式結果不符/, "與本題列式結果不符"],
      [/選\s*[^\s，。；]+\s*不符合本題資料/, "選X不符合本題資料"],
      [/錯選\d+與題幹/, "錯選N與題幹"]
    ]) {
      if (re.test(part)) return label;
    }
  }
  return null;
}

function textStructureKey(text) {
  return text.replace(/[\d+\-−=().,，、\s]/g, "").slice(0, 12);
}

function chartTypeLeakage(q) {
  const parts = [q.explanation, ...q.steps, q.commonMistake];
  const text = parts.join("\n");
  if (q.skillId === "bar-chart-text" && text.includes("折線圖")) return "bar-chart-text forbids 折線圖";
  if (q.skillId === "line-chart-text" && text.includes("長條圖")) return "line-chart-text forbids 長條圖";
  if (q.skillId === "pie-chart-percent" && (text.includes("長條圖") || text.includes("折線圖"))) {
    return "pie-chart-percent forbids 長條圖/折線圖 as current chart type";
  }
  return null;
}

const QA3_EXACT_MIN = {
  "u09-s002-v007": 36,
  "u09-s003-v001": 37,
  "u09-s003-v004": 42
};

function validateQuestion(q) {
  assert.equal(q.unitId, "u09", `${q.questionId} unitId`);
  assert.equal(q.type, "mc", `${q.questionId} type`);
  assert.equal(q.visualMode, "text-only", `${q.questionId} visualMode`);
  const minZh = QA3_EXACT_MIN[q.questionId] ?? 45;
  assert.ok(countZh(q.explanation) >= minZh, `${q.questionId} explanation too short (${countZh(q.explanation)})`);
  assert.ok(countZh(q.commonMistake) >= 12, `${q.questionId} commonMistake too short (${countZh(q.commonMistake)})`);
  assert.ok(!U04_EXPLANATION_PREFIX_RE.test(q.explanation.trim()), `${q.questionId} numeric explanation prefix`);
  assert.ok(!U04_EXPLANATION_PREFIX_COLON_RE.test(q.explanation.trim()), `${q.questionId} numeric prefix colon`);
  assert.ok(!hasBannedStep(q.steps), `${q.questionId} banned step: ${hasBannedStep(q.steps)}`);
  assert.ok(q.steps.length >= 3, `${q.questionId} needs 3 steps`);
  const ban = hasU09Banned([q.explanation, q.text, ...q.steps, q.commonMistake, q.concept, ...q.choices]);
  assert.ok(!ban, `${q.questionId} banned: ${ban}`);
  const vague = u05ExplanationTooVague(q.explanation);
  assert.ok(!vague, `${q.questionId} vague explanation: ${vague}`);
  const embed = stepsEmbedQuestionText(q.steps, q.text);
  assert.ok(!embed, `${q.questionId} steps embed text: ${embed}`);
  const over = explanationOverRepeatsText(q.explanation, q.text);
  assert.ok(!over, `${q.questionId} explanation repeats text: ${over}`);
  const exactDup = explanationExactDuplicate(q.explanation);
  assert.ok(!exactDup, `${q.questionId} explanation exact duplicate sentence: ${exactDup}`);
  const nearDup = explanationNearDuplicate(q.explanation);
  if (nearDup) assert.fail(`${q.questionId} explanation near duplicate: ${nearDup.a} / ${nearDup.b}`);
  const cq = conceptQuality(q.concept, q.explanation);
  assert.ok(!cq, `${q.questionId} concept: ${cq}`);
  const eq = explanationQuality(q.explanation, q.concept);
  assert.ok(!eq, `${q.questionId} explanation: ${eq}`);
  assert.ok(explanationHasConcreteContent(q.explanation, q.choices), `${q.questionId} explanation not concrete`);
  for (const m of BANNED_MISTAKE_PHRASES) {
    assert.ok(!q.commonMistake.includes(m), `${q.questionId} generic commonMistake: ${m}`);
  }
  for (const p of U05_IMAGE_PHRASES) {
    assert.ok(!q.text.includes(p) && !q.explanation.includes(p), `${q.questionId} image phrase ${p}`);
  }
  const chartLeak = chartTypeLeakage(q);
  assert.ok(!chartLeak, `${q.questionId} chart-type leakage: ${chartLeak}`);
}

function validateSkill(key, qs) {
  assert.equal(qs.length, 12, `${key} need 12 questions`);
  const dist = [0, 0, 0, 0];
  qs.forEach(q => dist[q.answerIndex]++);
  assert.deepEqual(dist, [3, 3, 3, 3], `${key} answerIndex: ${dist.join(",")}`);
  const diff = { basic: 0, standard: 0, advanced: 0, literacy: 0 };
  qs.forEach(q => diff[q.difficulty]++);
  assert.equal(diff.basic, 4, `${key} basic count`);
  assert.equal(diff.standard, 5, `${key} standard count`);
  assert.equal(diff.advanced, 2, `${key} advanced count`);
  assert.equal(diff.literacy, 1, `${key} literacy count`);
  assert.ok(diff.literacy >= 1, `${key} needs literacy`);
  const mistakes = new Set(qs.map(q => q.commonMistake));
  assert.ok(mistakes.size >= 6, `${key} commonMistake uniform (${mistakes.size})`);
  const structures = new Set(qs.map(q => textStructureKey(q.text)));
  assert.ok(structures.size >= 8, `${key} text structures (${structures.size})`);
  assert.equal(new Set(qs.map(q => q.text.slice(0, 24))).size, 12, `${key} texts similar`);
  assert.equal(new Set(qs.map(q => q.steps.join("|"))).size, 12, `${key} steps duplicated`);
  assert.equal(new Set(qs.map(q => q.explanation.slice(0, 12))).size, 12, `${key} expl openings duplicated`);
}

function validateLecture(l, bankExpl) {
  assert.equal(l.unitId, "u09", `${l.skillId} unitId`);
  assert.ok(countZh(l.concept) >= 80, `${l.skillId} concept short (${countZh(l.concept)})`);
  assert.ok(l.stepGuide?.length >= 5, `${l.skillId} stepGuide<5`);
  assert.ok(l.examples?.length >= 2, `${l.skillId} examples<2`);
  assert.ok(l.commonMistakes?.length >= 4, `${l.skillId} commonMistakes<4`);
  const ban = hasU09Banned([l.concept, l.formula, ...l.stepGuide, ...l.commonMistakes, ...l.examples.flatMap(e => [e.question, e.explanation])]);
  assert.ok(!ban, `${l.skillId} lecture banned: ${ban}`);
  for (const ex of l.examples) {
    assert.ok(countZh(ex.explanation) >= 40, `${l.skillId} example expl short`);
    assert.ok(!bankExpl.has(ex.explanation.trim()), `${l.skillId} example copies bank expl`);
  }
}

const questions = loadJs("MATH_QUESTION_BANK_V2_U09", "math-question-bank-v2-u09.js");
const lectures = loadJs("MATH_LECTURE_V2_U09", "math-lecture-v2-u09.js");

assert.equal(questions.length, 144, "U09 needs 144 questions");
assert.equal(lectures.length, 12, "U09 needs 12 lectures");

const bySkill = new Map();
const diffTotal = { basic: 0, standard: 0, advanced: 0, literacy: 0 };
const ansTotal = [0, 0, 0, 0];

for (const q of questions) {
  validateQuestion(q);
  diffTotal[q.difficulty]++;
  ansTotal[q.answerIndex]++;
  const key = q.skillId;
  if (!bySkill.has(key)) bySkill.set(key, []);
  bySkill.get(key).push(q);
}

assert.equal(bySkill.size, 12, `skills count ${bySkill.size}`);
assert.deepEqual(ansTotal, [36, 36, 36, 36], `answerIndex total: ${ansTotal.join(",")}`);
assert.equal(diffTotal.basic, 48, "basic total");
assert.equal(diffTotal.standard, 60, "standard total");
assert.equal(diffTotal.advanced, 24, "advanced total");
assert.equal(diffTotal.literacy, 12, "literacy total");

const bankExplBySkill = new Map();
for (const [skillId, qs] of bySkill) {
  validateSkill(skillId, qs);
  bankExplBySkill.set(skillId, new Set(qs.map(q => q.explanation.trim())));
}

for (const l of lectures) {
  const bankExpl = bankExplBySkill.get(l.skillId) || new Set();
  validateLecture(l, bankExpl);
}

const v005 = questions.find(q => q.questionId === "u09-s002-v005");
assert.ok(v005, "u09-s002-v005 missing");
assert.ok(v005.text.includes("未滿70分"), "u09-s002-v005 text must contain 未滿70分");
assert.ok(!v005.text.includes("70分以下"), "u09-s002-v005 text must not contain 70分以下");
assert.equal(v005.answerIndex, 0, "u09-s002-v005 answerIndex");
assert.equal(v005.choices[0], "7", "u09-s002-v005 choice");

const v009 = questions.find(q => q.questionId === "u09-s002-v009");
assert.ok(v009, "u09-s002-v009 missing");
assert.ok(v009.text.includes("99元以下"), "u09-s002-v009 text must contain 99元以下");
assert.ok(v009.text.includes("100−199元"), "u09-s002-v009 text must contain 100−199元");
assert.ok(v009.text.includes("未滿200元"), "u09-s002-v009 text must contain 未滿200元");
assert.ok(!v009.text.includes("200元以下"), "u09-s002-v009 text must not contain 200元以下");
assert.equal(v009.answerIndex, 0, "u09-s002-v009 answerIndex");
assert.equal(v009.choices[0], "23", "u09-s002-v009 choice");
assert.ok(!v009.commonMistake.includes("却"), "u09-s002-v009 commonMistake must not contain 却");
assert.ok(v009.commonMistake.includes("卻"), "u09-s002-v009 commonMistake must contain 卻");

const QA3_REQUIRED_EXPL = {
  "u09-s001-v002":
    "週一80元、週三70元，80−70=10元。15是誤算週二95元與週一80元的差；25是拿週二95元減週三70元；20也不是80與70的差。題目指定比較週一與週三，因此只使用80與70。",
  "u09-s001-v004":
    "女生36人、男生24人，36−24=12人。10與14都是減法計算錯誤；16則不是36與24的差。題目問女生比男生多多少，所以用女生人數減男生人數，答案單位仍是人。",
  "u09-s002-v007":
    "21分鐘以上包含21−30與31−40兩組，14+8=22人。18漏加31−40的8人；26誤把11−20的9人算入；14只算21−30。題目從21分鐘起算，因此11−20這組不列入。",
  "u09-s002-v010":
    "數學15人、英文9人，15−9=6人。8是誤拿社會科7人計算；4不是15與9相減的結果；10則把比較題誤當成加總題。國文、自然與社會三科資料都不參與這次比較。",
  "u09-s003-v001":
    "A班40人、B班55人、C班35人，40+55+35=130人。120、125與140都不是三班人數的正確總和；120少算10人、125少算5人、140多算10人，都是加法計算錯誤。",
  "u09-s003-v002":
    "週一120件、週二95件，120−95=25件。15是誤用週三110件減週二95件；30與20也不是120減95的結果。長條圖比較指定兩類時，只使用週一120件與週二95件，週三資料不列入本題運算。",
  "u09-s003-v003":
    "四種銷量依序為80、65、45、30杯，其中80最大，所以蘋果汁銷量最高。柳橙汁65杯、葡萄汁45杯與其他30杯都低於80杯；選其他飲料表示沒有完整比較四個數值。",
  "u09-s003-v004":
    "二月18萬、三月22萬，22−18=4萬。3、5與2都不是22減18的結果；題目指定比較二月到三月，因此一月與四月的資料不應代入本題。"
};
for (const [id, expl] of Object.entries(QA3_REQUIRED_EXPL)) {
  const q = questions.find(x => x.questionId === id);
  assert.ok(q, `${id} missing`);
  assert.equal(q.explanation, expl, `${id} explanation mismatch`);
}

const QA2_PRESERVED_EXPL = {
  "u09-s002-v008":
    "有養寵物者為8+15+5=28人，全班共有12+8+15+5=40人，因此28÷40×100=70%。60是把分子誤算成24；65與55則使用了錯誤的分子或分母；沒養寵物12人不能算進分子，分母也必須是全班40人。",
  "u09-s002-v011":
    "睡7小時或以上包含7小時12人、8小時10人及9小時以上3人，共12+10+3=25人。22漏加9小時以上的3人；30誤把6小時的8人算入；15只計入部分組別。"
};
for (const [id, expl] of Object.entries(QA2_PRESERVED_EXPL)) {
  const q = questions.find(x => x.questionId === id);
  assert.ok(q, `${id} missing`);
  assert.equal(q.explanation, expl, `${id} explanation mismatch`);
}

const v001 = questions.find(q => q.questionId === "u09-s003-v001");
assert.ok(v001, "u09-s003-v001 missing");
assert.ok(v001.explanation.includes("40+55+35=130"), "u09-s003-v001 must show 40+55+35=130");
assert.ok(!v001.explanation.includes("漏算C班35人常得120或125"), "u09-s003-v001 false omit-C claim");
assert.ok(!/漏算C班.*120.*125/.test(v001.explanation), "u09-s003-v001 must not claim omitting C gives 120 or 125");

const v002 = questions.find(q => q.questionId === "u09-s003-v002");
assert.ok(v002, "u09-s003-v002 missing");
assert.ok(v002.explanation.includes("長條圖"), "u09-s003-v002 must use 長條圖 terminology");
assert.ok(!v002.explanation.includes("折線圖"), "u09-s003-v002 must not say 折線圖");

assert.equal(Object.keys(QA3_MANIFEST).length, 144, "QA3 manifest must have 144 entries");
for (const q of questions) {
  const entry = QA3_MANIFEST[q.questionId];
  assert.ok(entry, `${q.questionId} missing from QA3 manifest`);
  assert.ok(["unchanged", "rewritten"].includes(entry.status), `${q.questionId} manifest status`);
  assert.equal(entry.distractorClaimsChecked, true, `${q.questionId} distractorClaimsChecked`);
  assert.equal(entry.semanticRepetitionChecked, true, `${q.questionId} semanticRepetitionChecked`);
  assert.equal(entry.chartTypeChecked, true, `${q.questionId} chartTypeChecked`);
  assert.ok(entry.note && entry.note.length >= 8, `${q.questionId} manifest note too short`);
}
const manifestNotes = new Set(Object.values(QA3_MANIFEST).map(e => e.note));
assert.equal(manifestNotes.size, 144, "QA3 manifest notes must be unique");

const semanticDups = auditQuestions(questions);
if (semanticDups.length) {
  const first = semanticDups[0];
  assert.fail(`${first.questionId} semantic duplicate: ${first.a} / ${first.b} (${first.reason})`);
}

const v010 = questions.find(q => q.questionId === "u09-s010-v010");
assert.ok(v010, "u09-s010-v010 missing");
assert.equal(v010.answerIndex, 2, "u09-s010-v010 answerIndex");
assert.equal(v010.choices[2], "兩組都相同", "u09-s010-v010 choice");

console.log("verify-v2-u09-pack: OK");
console.log(`  questions: ${questions.length}`);
console.log(`  lectures: ${lectures.length}`);
console.log(`  skills: ${bySkill.size}`);
console.log(`  difficulty: basic=${diffTotal.basic} standard=${diffTotal.standard} advanced=${diffTotal.advanced} literacy=${diffTotal.literacy}`);
console.log(`  answerIndex: [${ansTotal.join(", ")}]`);
