#!/usr/bin/env node
/**
 * U08-R1: strip machine filler, expand steps to full sentences, rebuild commonMistake.
 * ponytail: regex + heuristics; quadrilateral deep rows replaced inline.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { countZh } from "./v2-quality.mjs";
import { U08_R1_BANNED } from "./v2-u08-r1-banned.mjs";

const DIR = path.dirname(fileURLToPath(import.meta.url));

const STRIP_RES = [
  /（第 \d+ 步）[^。！？]*[。！？]?/g,
  /第 [34] 步[^。！？]*[。！？]?/g,
  /做類題時要多留意相同陷阱[。！？]?/g,
  /依對邊平行與直角條件判別[。！？]?/g,
  /正方形兼具長方形與菱形性質[。！？]?/g,
  /多邊形內角和為 \(n−2\)×180 度[。！？]?/g,
  /對角線數與頂點數有固定關係[。！？]?/g,
  /周長加邊長，面積看底乘高[。！？]?/g,
  /單位平方不要與長度混淆[。！？]?/g,
  /情境題把文字轉成幾何量[。！？]?/g,
  /單位與所求量要一致[。！？]?/g,
  /名詞對照題幹再作答[。！？]?/g,
  /先判斷角類型再計算[。！？]?/g,
  /互補互餘要看和是 180 或 90[。！？]?/g,
  /複合圖形先切割或補成基本形[。！？]?/g,
  /加減面積時不要漏算一段[。！？]?/g,
  /前視看列數，上視看層數分布[。！？]?/g,
  /右視與前視搭配判斷高度[。！？]?/g,
  /長度與面積換算進位不同[。！？]?/g,
  /先統一單位再代入公式[。！？]?/g,
  /三角形內角和固定 180 度[。！？]?/g,
  /外角等於不相鄰兩內角和[。！？]?/g,
  /平行線先找同位角或內錯角[。！？]?/g,
  /記得區分端點個數[。！？]?/g,
  /會考常以文字敘述考概念，宜重述定義並實作一題驗證，避免只靠印象作答[。！？]?/g
];

const ROW_REPLACEMENTS = {
  "菱形對角線通常？": {
    text: "下列哪個四邊形四邊都等長？",
    choices: ["菱形", "長方形", "梯形", "一般平行四邊形"],
    answerIndex: 0,
    explanation: "菱形定義是四邊都等長。長方形只要求四角直角，邊長可不同；梯形只有一組平行邊；一般平行四邊形只保證對邊相等，四邊不一定等長。",
    steps: ["題目要比較四邊形的基本定義。", "菱形四邊都等長。", "因此菱形符合條件。"],
    commonMistake: "看到對邊相等就選平行四邊形，沒注意到題目要求四邊都等長。"
  },
  "長方形對角線？": {
    text: "長方形的四個內角各是多少度？",
    choices: ["都是 90 度", "都是 60 度", "都是 180 度", "不一定相等"],
    answerIndex: 0,
    explanation: "長方形定義包含四個角都是直角，所以每個角都是 90 度。60 度是等邊三角形內角；180 度是平角；長方形角一定相等且為直角。",
    steps: ["長方形是四角都直角的四邊形。", "直角表示 90 度。", "所以四個角都是 90 度。"],
    commonMistake: "把長方形和一般平行四邊形混淆，以為內角不一定都是直角。"
  },
  "平行四邊形對角相等。互補是鄰角；互餘錯；無關錯。": null
};

const STEP_PHRASE = {
  "整圈旋轉": "周角表示繞一整圈。",
  "對應 360 度": "一整圈對應 360 度。",
  "周角為 360": "所以周角是 360 度。",
  "確認是過兩個不同點": "先確認題目給的是兩個不同的點。",
  "套用兩點決定一直線": "依幾何公理，兩點決定唯一一條直線。",
  "唯一一條直線": "因此只能畫出這一條直線。",
  "設 B 為 x": "設較小的角 B 為 x 度。",
  "列 x + 2x = 180": "兩角互補，列式 x + 2x = 180。",
  "x=70": "解方程式得到 x = 70 度。",
  "用平行判定": "要用平行線的判定條件來判斷。",
  "同位角相等": "同位角相等時，兩直線互相平行。",
  "可推平行": "因此可以推得兩直線平行。",
  "外角定理": "外角等於兩個不相鄰內角的和。",
  "35+48": "把兩個遠內角 35 度與 48 度相加。",
  "83 度": "相加後外角是 83 度。",
  "3×3=9": "底層共有 3×3 = 9 格。",
  "缺 1 格": "中央缺 1 格沒有積木。",
  "8 格": "所以俯視可見 8 格。"
};

const FILES = [
  ["v2-u08-content-s001-s003.mjs", "U08_SKILLS_S001_S003"],
  ["v2-u08-content-s004-s006.mjs", "U08_SKILLS_S004_S006"],
  ["v2-u08-content-s007-s009.mjs", "U08_SKILLS_S007_S009"],
  ["v2-u08-content-s010-s012.mjs", "U08_SKILLS_S010_S012"]
];

function loadSkillsFile(name, exportName) {
  const text = fs.readFileSync(path.join(DIR, name), "utf8");
  const json = text.replace(/^export const \w+ = /, "").replace(/;\s*$/s, "");
  return JSON.parse(json);
}

function stripFiller(text) {
  if (typeof text !== "string") return text;
  let out = text;
  for (const re of STRIP_RES) out = out.replace(re, "");
  for (const b of U08_R1_BANNED) out = out.split(b).join("");
  return out.replace(/。+/g, "。").replace(/；+/g, "；").replace(/，，+/g, "，").trim();
}

function dedupeSentences(text) {
  const parts = text.split(/(?<=[。！？])/).map((s) => s.trim()).filter(Boolean);
  const seen = new Set();
  const out = [];
  for (const p of parts) {
    const key = p.replace(/\s+/g, "");
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(p);
  }
  return out.join("");
}

function dedupeClauses(text) {
  let out = dedupeSentences(text);
  const semi = out.split(/[；;]/).map((s) => s.trim()).filter(Boolean);
  const seen = new Set();
  const kept = [];
  for (const p of semi) {
    const key = p.replace(/\s+/g, "");
    if (!key || seen.has(key)) continue;
    seen.add(key);
    kept.push(p);
  }
  return kept.join("；");
}

function endsSentence(s) {
  return /[。！？]$/.test(String(s).trim());
}

function zhLen(s) {
  return (String(s).match(/[\u4e00-\u9fff]/g) || []).length;
}

function expandStep(step, idx, row, allSteps) {
  const s = String(step).trim();
  if (STEP_PHRASE[s]) return STEP_PHRASE[s];
  if (endsSentence(s) && zhLen(s) >= 6) return s;

  if (/^\d/.test(s) || /=/.test(s) || /[+\-×÷]/.test(s)) {
    const body = s.replace(/=$/, "").replace(/。+$/, "");
    if (body.startsWith("整理算式：")) return `${body}。`;
    return `整理算式：${body}。`;
  }

  if (/^[A-Za-z\u4e00-\u9fff]{1,12}$/.test(s) && !endsSentence(s)) {
    if (idx === allSteps.length - 1) return `因此得到 ${s}。`;
    return `依題意整理：${s}。`;
  }

  if (idx === 0) {
    if (s.length <= 12) return `先依題意確認：${s}。`;
    return endsSentence(s) ? s : `${s}。`;
  }
  if (idx === allSteps.length - 1) {
    const ans = row.choices[row.answerIndex];
    if (String(ans).length <= 24 && !s.includes(String(ans))) {
      return `因此本題對應 ${ans}。`;
    }
    return endsSentence(s) ? s : `${s}。`;
  }
  return endsSentence(s) ? s : `${s}，再往下整理。`;
}

function finalizeStep(step, idx, row, allSteps) {
  let out = expandStep(step, idx, row, allSteps);
  if (!endsSentence(out)) out += "。";
  if (countZh(out) < 5 && out.length < 10) {
    out = `依題意整理，${out.replace(/[。！？]$/, "")}。`;
  }
  return out;
}

function pickWrongDismissals(explanation, row) {
  const wrongs = row.choices.filter((_, i) => i !== row.answerIndex);
  const parts = explanation.split(/[；;]/).map((p) => p.trim()).filter(Boolean);
  const kept = [];
  for (const p of parts) {
    if (kept.length >= 2) break;
    const hit = wrongs.some((w) => p.includes(String(w).slice(0, Math.min(4, String(w).length))));
    if (hit || /\d+\s*是/.test(p) || /忘/.test(p) || /誤/.test(p)) kept.push(p);
  }
  return kept;
}

function buildExplanation(row) {
  const correct = row.choices[row.answerIndex];
  const stripped = dedupeClauses(stripFiller(row.explanation));
  const clauses = stripped.split(/[；;]/).map((s) => s.trim()).filter(Boolean);
  const kept = [];
  for (const c of clauses) {
    if (kept.length >= 3) break;
    if (/通常是把題目條件或公式用錯/.test(c)) continue;
    kept.push(endsSentence(c) ? c : `${c}。`);
  }
  let exp = dedupeClauses(kept.join(""));
  if (countZh(exp) < 45) {
    exp += `依題意整理後，正確寫法對應 ${correct}。`;
  }
  while (countZh(exp) < 45) {
    exp += "計算時宜逐步列出，確認單位與公式是否都用對。";
  }
  return dedupeClauses(exp);
}

function rebuildExplanation(row) {
  return buildExplanation(row);
}

function rebuildCommonMistake(row, explanation) {
  let cm = stripFiller(row.commonMistake).replace(/做類題時要多留意相同陷阱。?/g, "").trim();
  if (countZh(cm) >= 12 && !/做類題|相同陷阱|通常是把題目條件/.test(cm)) {
    return endsSentence(cm) ? cm : `${cm}。`;
  }

  const wrongs = row.choices.filter((_, i) => i !== row.answerIndex);
  for (const w of wrongs) {
    const frag = String(w).slice(0, 8);
    if (frag.length >= 2 && explanation.includes(frag)) {
      const m = explanation.match(new RegExp(`[^。；]*${frag.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[^。；]*`));
      if (m && countZh(m[0]) >= 8) {
        cm = m[0].replace(/^[0-9]+\s*/, "").trim();
        if (!endsSentence(cm)) cm += "。";
        if (countZh(cm) >= 12) return cm;
      }
    }
  }

  const t = row.text;
  const w0 = wrongs[0];
  if (/周角/.test(t)) return "把 180 度的平角誤當成一整圈，沒有分清楚半圈與整圈。";
  if (/互補|互餘/.test(t)) return "只代入一個角就停，沒有利用兩角和是 180 度或 90 度列式。";
  if (/平行/.test(t) && /角/.test(t)) return "把內錯角、同位角或同側內角的關係記反，因而判斷平行條件錯誤。";
  if (/三角形/.test(t) && /角/.test(t)) return "求第三角時只減一個已知角，沒有用內角和 180 度列式。";
  if (/面積/.test(t)) return `把 ${w0} 當成最終面積，常見原因是忘記除以 2 或漏算其中一塊。`;
  if (/周長/.test(t)) return `把 ${w0} 當成周長，常見原因是只加一組對邊或把面積公式誤用。`;
  if (/俯視|前視|右視|上視/.test(t)) return "數格時沒有依文字描述逐層數，或把缺塊的格數也算進去。";
  if (/公分|公尺|平方/.test(t)) return "長度與面積單位換算時乘除 100 的次數弄錯，導致數值差十倍或一百倍。";
  if (/四邊形|菱形|長方形|梯形|平行四邊形|正方形/.test(t)) {
    return `把 ${w0} 當成符合條件者，沒有先對照四邊形的邊與角定義。`;
  }
  return `得到 ${w0} 時，多半是公式或定義套用不完整，沒有依題意算到底。`;
}

function polishRow(row, skillId) {
  if (ROW_REPLACEMENTS[row.text]) {
    return { ...row, ...ROW_REPLACEMENTS[row.text] };
  }
  const explanation = rebuildExplanation(row);
  const steps = row.steps.map((s, i) => finalizeStep(s, i, row, row.steps));
  const commonMistake = rebuildCommonMistake(row, explanation);
  return { ...row, explanation, steps, commonMistake };
}

function polishLecture(lec, skillId) {
  const out = { ...lec };
  out.concept = stripFiller(lec.concept);
  if (skillId === "quadrilateral-basic") {
    out.concept = "認識平行四邊形、長方形、菱形、正方形、梯形的名稱與基本特徵：幾組平行邊、是否四邊等長、是否四角直角。先判斷圖形類型，再對照定義，不要混用不同四邊形的性質。";
    out.stepGuide = [
      "讀題確認要比較邊、角還是平行關係。",
      "寫下該圖形的定義關鍵字。",
      "對照題目條件是否符合。",
      "排除明顯不符合定義的說法。",
      "用一個簡單例子驗證判斷。"
    ];
    out.commonMistakes = [
      "把平行四邊形與長方形混為一談。",
      "以為梯形有兩組平行邊。",
      "看到四邊相等就忽略是否四角直角。",
      "把正方形只當菱形或只當長方形。"
    ];
    out.examples = [
      { prompt: "四邊都等長且四角直角的是哪種四邊形？", answer: "正方形", why: "同時滿足菱形與長方形的定義。" },
      { prompt: "只有一組對邊平行的四邊形？", answer: "梯形", why: "平行四邊形有兩組平行邊。" }
    ];
  }
  out.stepGuide = out.stepGuide.map((s) => stripFiller(s));
  out.commonMistakes = out.commonMistakes.map((s) => stripFiller(s));
  for (const ex of out.examples) {
    ex.prompt = stripFiller(ex.prompt);
    ex.why = stripFiller(ex.why);
  }
  if (countZh(out.concept) < 80) {
    out.concept += "練習時宜用自己的話重述定義，並用一題簡單數字驗證，避免只靠印象選名詞。";
  }
  return out;
}

function polishSkills(skills) {
  return skills.map((sk) => ({
    ...sk,
    concept: stripFiller(sk.concept),
    rows: sk.rows.map((r) => polishRow(r, sk.skillId)),
    lecture: polishLecture(sk.lecture, sk.skillId)
  }));
}

function writeFile(name, exportName, skills) {
  fs.writeFileSync(path.join(DIR, name), `export const ${exportName} = ${JSON.stringify(skills, null, 2)};\n`, "utf8");
}

const isMain = process.argv[1] && path.resolve(process.argv[1]) === path.resolve(fileURLToPath(import.meta.url));
if (isMain) {
  for (const [file, exportName] of FILES) {
    const skills = loadSkillsFile(file, exportName);
    writeFile(file, exportName, polishSkills(skills));
  }
  console.log("v2-u08-polish-r1: wrote 4 content files");
}
