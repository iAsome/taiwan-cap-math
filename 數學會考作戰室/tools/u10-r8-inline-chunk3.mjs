#!/usr/bin/env node
/** U10-R8: drop only generic tail sentences; inline-strip banned phrases elsewhere */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { countZh } from "./v2-quality.mjs";

const tools = path.dirname(fileURLToPath(import.meta.url));

const INLINE_STRIP = [
  "這題跟範例一樣要對照常數符號",
  "這題負號乘進括號要特別小心",
  "中間項係數要記得乘二",
  "平方公式首平方、中間項、末平方三項都要寫齊",
  "每一步乘法都要寫清楚",
  "合併時正負號要盯緊",
  "展開後三項係數都要對照",
  "這題數字不大但符號易錯",
  "常數符號最易錯",
  "常數項正負號最易看錯",
  "負號漏看最常有",
  "係數平方常漏",
  "要特別小心",
  "要盯緊",
  "公式不能套錯",
  "中間項少一半",
  "幾何題先寫長乘寬再展開",
  "完全平方和公式是 a²+2ab+b²",
  "這是最基本的完全平方和",
  "最簡完全平方和也要寫 2x",
  "加號平方一定要算出 2ab 這個中間項",
  "加號平方與平方差不要混用",
  "展開後要對照中間項係數正負",
  "減號平方中間項係數要算兩倍",
];

const DROP_SENTENCE = [
  /^這題跟範例/,
  /^這題負號乘進括號/,
  /^中間項係數要記得乘二/,
  /^平方公式首平方/,
  /^每一步乘法都要寫清楚/,
  /^合併時正負號要盯緊/,
  /^展開後三項係數都要對照/,
  /^這題數字不大但符號易錯/,
  /^常數符號最易錯/,
  /^常數項正負號最易看錯/,
  /^負號漏看最常有/,
  /^係數平方常漏/,
  /^要特別小心/,
  /^要盯緊/,
  /^公式不能套錯/,
  /^幾何題先寫長乘寬/,
  /^完全平方和公式是/,
  /^這是最基本的完全平方/,
  /^最簡完全平方/,
  /^加號平方一定要算出/,
  /^加號平方與平方差不要混用/,
];

const BINOMIAL_DROP = [/^完全平方/, /^平方公式/];

const TOPUP = {
  "binomial-multiply-basic#1": "一次項少 3x。",
  "binomial-multiply-basic#4": "一次項 −3x 加 2x 合併後是 −x。",
  "binomial-multiply-basic#5": "5 乘 (2x−1) 要分別算出 10x 與 −5 兩段一次項與常數。",
  "binomial-multiply-basic#6": "常數 −28 也要保留。",
  "binomial-multiply-basic#7": "2x 與 −3x 合併只少 1x 不是 5x。",
  "binomial-multiply-basic#8": "6 乘 (x−1) 常數是 −6 不是 +6。",
  "binomial-multiply-basic#8_cm": "或 6 乘 x 符號弄反變 −6x。",
  "binomial-multiply-basic#9": "−1 乘 3 得 −3 常數不能寫 +3，一次項 9x−2x=7x。",
  "binomial-multiply-basic#10": "−2 乘 (3x+4) 要得 −6x−8，4x 與 −6x 合併 −2x。",
  "binomial-multiply-basic#11": "長乘寬展開 3x+2x=5x 常數 2×3=6 不能對調。",
  "square-sum-formula#0": "分配律兩段 3x 加總才是 6x 不是 3x，2·x·3 要乘 2。",
  "square-sum-formula#1": "係數 2x 平方時 2 也要平方成 4。",
  "square-sum-formula#1_cm": "首項 4x² 不是 2x²。",
  "square-sum-formula#2": "漏乘 2 時中間項只有 5x 不是 10x；5 平方是 25 不是 10。",
  "square-sum-formula#3": "首項 9x² 與中間 12x 都要寫出。",
  "square-sum-formula#4": "7 平方是 49 中間是 14x，2·x·7 要乘 2。",
  "square-sum-formula#5": "4x 平方得 16x² 不是 8x²，2·4x·1 要乘 2。",
  "square-sum-formula#6": "展開要有 x²、4x、4 三項，2·x·2 要乘 2。",
  "square-sum-formula#7": "5x 平方 25x² 中間 20x 末項 4，2·5x·2 要乘 2。",
  "square-sum-formula#8": "(x+1)² 展開要有 2x 中間項，2·x·1 要乘 2。",
  "square-sum-formula#9": "2x 平方 4x² 中間 12x 末項 9，2·2x·3 要乘 2。",
  "square-sum-formula#10": "中間 8x 與末項 16 都要寫出，不能漏掉任一段。",
  "square-difference-formula#0": "一次項只有 −2x 不是 −4x。",
  "square-difference-formula#1": "減 5 平方中間是 −10x 常數 25。",
  "square-difference-formula#2": "2x 減 1 平方中間符號與加 1 相反。",
  "square-difference-formula#3": "減 7 平方中間 −14x 常數 49，2·x·7 要乘 2。",
  "square-difference-formula#4": "3x 減 2 中間 −12x 不是 −6x，2·3x·2 要乘 2。",
  "square-difference-formula#6": "4x 減 3 中間 −24x 不是 −12x，2·4x·3 要乘 2。",
  "square-difference-formula#7": "減 10 平方中間 −20x 常數 100，2·x·10 要乘 2。",
  "square-difference-formula#8": "5x 減 2 中間 −20x 不是 −10x，2·5x·2 要乘 2。",
  "square-difference-formula#9": "減 4 跟加 4 中間項符號相反。",
  "square-difference-formula#10": "2x 減 5 中間 −20x 常數 25，2·2x·5 要乘 2。",
};

const OVERRIDES = {
  "binomial-multiply-basic#9": {
    explanation:
      "3x 乘 (2x+3) 得 6x²+9x；−1 乘 (2x+3) 得 −2x−3。把 9x 與 −2x 合併 7x，常數 −3 保留，整理 6x²+7x−3。6x²+11x−3 是把 9x−2x 算成 11x 多加了 2x；6x²+7x+3 則常數項來自 (−1)×3=−3，漏掉 −1 的負號而寫成 +3。",
  },
  "square-sum-formula#10": {
    explanation:
      "(x+4)² 第一項 x 平方得 x²，中間項 2·x·4=8x，末項 4 平方得 16，整理 x²+8x+16。x²+4x+16 是 2·x·4 只算 x·4=4x 漏乘 2；x²+8x+8 則 4² 常數算成 8 不是 16，平方漏算。2·x·4 就是 8x 不是 4x，末項 16 不能寫 8，三項都要寫齊。",
    commonMistake: "2·x·4 只寫 4x 漏乘 2，或 4² 誤算成 8 不是 16，4 平方是 16。",
  },
};

function skillFromKey(key) {
  return key.replace(/#\d+$/, "");
}

function fixPunct(text) {
  return text.replace(/。，/g, "，").replace(/，。/g, "。").replace(/。。+/g, "。").replace(/，，+/g, "，");
}

function stripInline(text) {
  let t = text;
  for (const p of INLINE_STRIP) t = t.split(p).join("");
  return fixPunct(t.replace(/；+/g, "；").trim());
}

function dropSentence(s, skillId) {
  const t = s.trim();
  if (DROP_SENTENCE.some((re) => re.test(t))) return true;
  if (skillId === "binomial-multiply-basic" && BINOMIAL_DROP.some((re) => re.test(t))) return true;
  return false;
}

function cleanField(text, skillId) {
  const parts = text.split(/(?<=。)/).map((s) => s.trim()).filter(Boolean);
  return parts
    .filter((p) => !dropSentence(p, skillId))
    .map((p) => stripInline(p))
    .filter((p) => countZh(p) > 0)
    .join("");
}

const orig = await import(pathToFileURL(path.join(tools, "u10-r7-chunk3.orig.mjs")).href);
const OUT = structuredClone(orig.U10_R7_CHUNK);

const failures = [];
for (const [key, v] of Object.entries(OUT)) {
  const sid = skillFromKey(key);
  v.explanation = cleanField(v.explanation, sid);
  v.commonMistake = cleanField(v.commonMistake, sid);
  if (OVERRIDES[key]) Object.assign(v, OVERRIDES[key]);
  if (TOPUP[key]) {
    v.explanation += TOPUP[key];
    if (!v.explanation.endsWith("。")) v.explanation += "。";
  }
  if (TOPUP[`${key}_cm`]) v.commonMistake += TOPUP[`${key}_cm`];
  const TOPUP2 = {
    "binomial-multiply-basic#10": "常數 −8 也要保留。",
    "square-sum-formula#0": "2·x·3 要乘 2 得 6x。",
    "square-sum-formula#2": "2·x·5 要乘 2 得 10x，10x 才是正確中間項。",
    "square-sum-formula#4": "2·x·7 要乘 2 得 14x，14x 才是正確中間項。",
    "square-sum-formula#5": "2·4x·1 要乘 2 得 8x，8x 才是正確中間項。",
    "square-sum-formula#6": "2·x·2 要乘 2 得 4x，4x 才是正確中間項。",
    "square-sum-formula#7": "2·5x·2 要乘 2 得 20x，20x 才是正確中間項。",
    "square-sum-formula#8": "2·x·1 要乘 2 得 2x，2x 才是正確中間項，末項 1 平方得 1。",
    "square-sum-formula#9": "2·2x·3 要乘 2 得 12x，12x 才是正確中間項。",
    "square-difference-formula#3": "2·x·7 要乘 2 得 −14x。",
    "square-difference-formula#4": "2·3x·2 要乘 2 得 −12x，−12x 才是正確中間項。",
    "square-difference-formula#6": "2·4x·3 要乘 2 得 −24x，−24x 才是正確中間項。",
    "square-difference-formula#7": "2·x·10 要乘 2 得 −20x。",
    "square-difference-formula#8": "2·5x·2 要乘 2 得 −20x，−20x 才是正確中間項。",
    "square-difference-formula#10": "2·2x·5 要乘 2 得 −20x，−20x 才是正確中間項。",
  };
  if (TOPUP2[key]) v.explanation += TOPUP2[key];
  v.explanation = fixPunct(v.explanation);
  v.commonMistake = fixPunct(v.commonMistake);
  if (countZh(v.explanation) < 45) failures.push(`${key} expl ${countZh(v.explanation)}`);
  if (countZh(v.commonMistake) < 12) failures.push(`${key} cm ${countZh(v.commonMistake)}`);
}
if (failures.length) {
  console.log(failures.join("\n"));
  throw new Error(`${failures.length} entries too short`);
}

fs.writeFileSync(
  path.join(tools, "u10-r7-chunk3.mjs"),
  `// U10-R7 chunk 3 — R8 inline cleaned\nexport const U10_R7_CHUNK = ${JSON.stringify(OUT, null, 2)};\n`
);
console.log("u10-r8-inline-chunk3: OK", Object.keys(OUT).length);
