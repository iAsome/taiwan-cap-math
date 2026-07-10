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

const QA5A_REQUIRED_EXPLANATIONS = {
  "u09-s001-v005":
    "五個月用水量相加為45+52+38+41+44=220度，220÷5=44度。42、46、48都不是220除以5的結果；這題必須把五個月份全部計入，不能只取部分月份估算。",
  "u09-s001-v009":
    "六天氣溫中最高是25℃、最低是18℃，全距為25−18=7℃。5是25與20的差，不是最大值與最小值的差；6與8都不是25減18的結果。",
  "u09-s001-v011":
    "營業額由320萬增加到380萬，增加60萬；以2023年的320萬為基準，60÷320×100=18.75%。15、20與25都不是依這個基準算出的成長率。",
  "u09-s002-v003":
    "45公斤以上包含45−49、50−54與55−59三組，10+8+4=22人。18漏加55−59的4人；24誤把40−44的6人算入又漏掉55−59的4人；14只加45−49與55−59，漏掉50−54的8人。",
  "u09-s002-v004":
    "至少借閱1次包含1、2、3、4次四組，35+25+10+5=75人。95誤把0次的20人也算入；55只加0次與1次兩組；70漏加4次的5人。",
  "u09-s002-v007":
    "21分鐘以上包含21−30與31−40兩組，14+8=22人。18把31−40的8人誤換成0−10的4人；26在正確兩組之外又多加0−10的4人；14只計21−30，漏掉31−40。",
  "u09-s002-v008":
    "有養寵物者共有8+15+5=28人，全班共有12+8+15+5=40人，因此28÷40×100=70%。60、65與55都不是28除以40的結果；分子只能計入有養寵物的28人，分母要用全班40人。",
  "u09-s002-v010":
    "數學15人、英文9人，15−9=6人。8是把社會科7人當成比較對象後算15−7；4與10都不是數學15人減英文9人的結果。",
  "u09-s002-v011":
    "睡7小時或以上包含7小時12人、8小時10人與9小時以上3人，合計12+10+3=25人。22漏加9小時以上3人；30誤加6小時8人並漏掉9小時以上3人；15只加7小時與9小時以上兩組。",
  "u09-s003-v005":
    "四個社團共有30+25+20+15=90人。75漏加桌球社15人；70只加籃球、足球與桌球三組，漏掉排球社20人；85不是四組人數的正確總和。",
  "u09-s003-v007":
    "東區50戶最多、南區38戶最少，最多與最少相差50−38=12戶。8是東區50減西區42，只比較到次高值；10與15都不是最大值50減最小值38的結果。",
  "u09-s003-v008":
    "四區總人數為120+85+95+40=340人，南部有95人，95÷340×100約為27.9%，四捨五入得28%。所以26、30與25都不是95占340的正確百分比。",
  "u09-s003-v010":
    "紅茶60杯、奶茶55杯，奶茶比紅茶少60−55=5杯。10是誤用奶茶55減綠茶45；15是奶茶55減咖啡40；20是紅茶60減咖啡40，三者都拿錯比較對象。",
  "u09-s004-v001":
    "3月15度、1月10度，3月比1月高15−10=5度。3是誤算3月與2月的差；2是2月與1月的差；而4不是15減10的結果。",
  "u09-s004-v002":
    "週二55件到週三48件，變化量用後值減前值，48−55=−7件，表示減少7件。7把相減方向顛倒；3與−3都不是48減55的結果。",
  "u09-s004-v005":
    "1月為200元、4月為260元，期間共增加260−200=60元。40只計算1月到3月的增加量；80與50都不是4月260減1月200的結果。",
  "u09-s004-v006":
    "四天中最高是95分、最低是88分，最高與最低相差95−88=7分。5是95減週四90；4是週三92減最低88；8不是95減88的結果。",
  "u09-s004-v007":
    "比較12時與10時的人數：12時有50人、10時有45人，因此50−45=5人。10是誤拿12時50人與下午2時40人相減；3與8都不是50減45的結果。",
  "u09-s004-v009":
    "五天讀書時間合計為30+45+40+50+35=200分鐘。180、210與190都不是這五個數的正確總和；題目要求五天合計，五天數值缺一不可。",
  "u09-s006-v001":
    "五人身高總和為150+155+160+158+162=785公分，因此785÷5=157公分。155、160與158都只是其中一人的身高，不是五人的平均身高。",
  "u09-s006-v002":
    "四天讀書時間合計為30+45+40+50=165分鐘，165÷4=41.25分鐘。40、42與43都不是165除以4的結果；平均必須先加總四天再除以4。",
  "u09-s006-v003":
    "三數平均為12，所以總和是12×3=36；第三數為36−10−14=12。10與14是已知的兩個數，16會使總和變成40、平均變成13又三分之一，不符合題意。",
  "u09-s006-v004":
    "平均80分、共有30人，總分為80×30=2400分。800是80×10；2000是80×25；240則不是80乘30的結果。已知平均與人數求總分時要用乘法。",
  "u09-s006-v009":
    "原四個數的總和為18×4=72，加入22後總和為94，共有5個數，所以94÷5=18.8。18是尚未加入新數前的平均；19是把18.8錯誤取整；20不是94除以5的結果。",
  "u09-s006-v011":
    "設原有n人，75n+80=76(n+1)，解得n=4。檢查其餘人數：原5人時新平均455÷6約75.83；原3人時305÷4=76.25；原6人時530÷7約75.71，只有原4人時380÷5=76。"
};

const QA5B1_REQUIRED_RECORDS = {
  "u09-s007-v001": {
    explanation:
      "五個數12、15、18、20、25已由小到大排列，共5筆資料，正中央第3個是18，所以中位數為18。15與20位在中央兩側；17既不是中央值，五數平均也同樣是18。"
  },
  "u09-s007-v007": {
    explanation:
      "原四個數15、25、35、45的中位數是(25+35)÷2=30。加入50後排成15、25、35、45、50，正中央第3個是35。30是加入前的中位數；40與32.5都不是新資料的中位數。"
  },
  "u09-s008-v002": {
    explanation:
      "五次分數中最大值是30、最小值是10，全距為30−10=20。15是用30減15，誤把第二小的15當成最小值；10是只算20−10；25不是30與10的差。"
  },
  "u09-s008-v004": {
    explanation:
      "這組分數中最大值是22、最小值是9，全距為22−9=13。10是用22減12；7是用22減15，兩者都沒有使用最小值9；15不是22與9的差。"
  },
  "u09-s008-v006": {
    explanation:
      "資料中最大值是120、最小值是100，全距為120−100=20。15是只算115−100；10是只算110−100，兩者都沒有使用最大值120；25不是120與100的差。"
  },
  "u09-s008-v007": {
    explanation:
      "資料中7出現3次，3、5、9各只出現1次，因此出現次數最多的是7，眾數為7。3、5與9的出現次數都少於7，不能作為這組資料的眾數。"
  },
  "u09-s008-v008": {
    explanation:
      "資料中最大值是61、最小值是38，全距為61−38=23。17是用55減38，誤把55當成最大值；20與15都不是61減38的結果。"
  },
  "u09-s008-v009": {
    text: "五個數1、2、3、4、5各出現一次。眾數是多少？",
    explanation:
      "資料中的1、2、3、4、5各出現1次，沒有任何一個數的出現次數高於其他數，所以沒有眾數。3是中位數；1與5分別是最小值與最大值，都不是眾數。"
  },
  "u09-s008-v010": {
    text: "等差數列20、25、30、35、40。全距是多少？",
    explanation:
      "資料中最大值是40、最小值是20，全距為40−20=20。10是只算30−20；5是只算25−20，兩者都只比較部分資料；0表示沒有差距，與最大值40和最小值20不符。",
    commonMistake: "把公差或部分兩數的差誤當成整組資料的全距"
  },
  "u09-s008-v011": {
    explanation:
      "鞋號資料中37出現3次最多，所以眾數是37；最大值39、最小值36，全距為39−36=3。「36；3」把最小值36誤當眾數；「37；4」把全距算錯；「38；3」把只出現1次的38誤當眾數。"
  },
  "u09-s009-v004": {
    explanation:
      "三項加權分數為80×30%+90×50%+70×20%=24+45+14=83分。84、85與82都不是24、45、14的正確總和；總評必須先將每項分數乘占比，再把三項結果相加。"
  },
  "u09-s009-v007": {
    explanation:
      "三種肥料總價為2×10+3×8+1×12=56元，共有2+3+1=6包，所以平均每包56÷6約為9.33元。10只是甲肥料的單價；9與8.67都不是56除以6的結果。"
  },
  "u09-s009-v009": {
    explanation:
      "三項加權後分數為85×20%+90×50%+80×30%=17+45+24=86分。85是平時成績本身，不是加權後的總成績；87與84都不是17、45、24的正確總和。"
  }
};

// V2 Content Quality Gate v1.2 uses a uniform 30-Chinese-character floor.
// Quality is enforced by derivation, concrete distractor analysis and human review,
// not by question-specific length exceptions.

function validateQuestion(q) {
  assert.equal(q.unitId, "u09", `${q.questionId} unitId`);
  assert.equal(q.type, "mc", `${q.questionId} type`);
  assert.equal(q.visualMode, "text-only", `${q.questionId} visualMode`);
  assert.ok(countZh(q.explanation) >= 30, `${q.questionId} explanation too short (${countZh(q.explanation)})`);
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
    "21分鐘以上包含21−30與31−40兩組，14+8=22人。18把31−40的8人誤換成0−10的4人；26在正確兩組之外又多加0−10的4人；14只計21−30，漏掉31−40。",
  "u09-s002-v010":
    "數學15人、英文9人，15−9=6人。8是把社會科7人當成比較對象後算15−7；4與10都不是數學15人減英文9人的結果。",
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
    "有養寵物者共有8+15+5=28人，全班共有12+8+15+5=40人，因此28÷40×100=70%。60、65與55都不是28除以40的結果；分子只能計入有養寵物的28人，分母要用全班40人。",
  "u09-s002-v011":
    "睡7小時或以上包含7小時12人、8小時10人與9小時以上3人，合計12+10+3=25人。22漏加9小時以上3人；30誤加6小時8人並漏掉9小時以上3人；15只加7小時與9小時以上兩組。"
};
for (const [id, expl] of Object.entries(QA2_PRESERVED_EXPL)) {
  const q = questions.find(x => x.questionId === id);
  assert.ok(q, `${id} missing`);
  assert.equal(q.explanation, expl, `${id} explanation mismatch`);
}

assert.equal(Object.keys(QA5A_REQUIRED_EXPLANATIONS).length, 25, "QA5A map must have 25 entries");
for (const [id, expl] of Object.entries(QA5A_REQUIRED_EXPLANATIONS)) {
  const q = questions.find(x => x.questionId === id);
  assert.ok(q, `${id} missing`);
  assert.equal(q.explanation, expl, `${id} QA5A explanation mismatch`);
}

assert.equal(Object.keys(QA5B1_REQUIRED_RECORDS).length, 13, "QA5B1 map must have 13 entries");
for (const [id, fields] of Object.entries(QA5B1_REQUIRED_RECORDS)) {
  const q = questions.find(x => x.questionId === id);
  assert.ok(q, `${id} missing`);
  for (const [field, value] of Object.entries(fields)) {
    assert.equal(q[field], value, `${id} QA5B1 ${field} mismatch`);
  }
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
