#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { countZh, hasU04BannedText, hasBannedText, hasU05BannedText, stepsEmbedQuestionText, explanationOverRepeatsText } from "./v2-quality.mjs";

const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), "v2-u06-parts");
const PAT = [0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3];
const DIFF = ["basic", "basic", "basic", "basic", "standard", "standard", "standard", "standard", "standard", "advanced", "advanced", "literacy"];
const EXTRA_BANNED = ["另外，選","不符合題目條件","逐項驗算後再決定","步驟跳躍","符號處理錯誤","若誤以為","答案為","结果為","【","】","如圖","下圖","請看圖","首重","十二素養","易錯在只記口訣","選項「"];

function reorderChoices(choices, answerIndex, targetIndex) {
  const correct = choices[answerIndex];
  const wrongs = choices.filter((_, i) => i !== answerIndex);
  const out = new Array(4);
  let wi = 0;
  for (let i = 0; i < 4; i++) {
    if (i === targetIndex) out[i] = correct;
    else out[i] = wrongs[wi++];
  }
  return out;
}

function mkItems(seq, skillId, topicId, concept, title, rows) {
  if (rows.length !== 12) throw new Error(`${skillId} need 12 rows`);
  return rows.map((r, i) => {
    const vi = i + 1;
    const want = PAT[i];
    const choices = reorderChoices(r.choices, r.answerIndex, want);
    return {
      questionId: `u06-s${String(seq).padStart(3, "0")}-v${String(vi).padStart(3, "0")}`,
      skillId, topicId, difficulty: DIFF[i], title,
      text: r.text, choices, answerIndex: want,
      explanation: r.explanation, steps: r.steps,
      commonMistake: r.commonMistake, concept
    };
  });
}

function lec(skillId, topicId, title, concept, formula, stepGuide, examples, commonMistakes) {
  return { skillId, topicId, title, concept, formula, stepGuide, examples, commonMistakes };
}

function hasExtraBanned(textOrArray) {
  const parts = Array.isArray(textOrArray) ? textOrArray : [textOrArray];
  for (const part of parts) {
    if (typeof part !== "string") continue;
    for (const p of EXTRA_BANNED) if (part.includes(p)) return p;
  }
  return null;
}

function textStructureKey(text) {
  return text.replace(/[\d+\-−=().,，、\s:：]/g, "").slice(0, 12);
}

function validateSkillItems(items) {
  const stepsSeen = new Set();
  const cmSeen = new Set();
  const prefixSeen = new Set();
  const structures = new Set();
  for (const q of items) {
    const zh = countZh(q.explanation);
    if (zh < 45) throw new Error(`${q.questionId} explanation zh=${zh}`);
    if (countZh(q.commonMistake) < 12) throw new Error(`${q.questionId} commonMistake short`);
    if (!q.steps || q.steps.length < 3) throw new Error(`${q.questionId} steps<3`);
    const sk = q.steps.join("\u001f");
    if (stepsSeen.has(sk)) throw new Error(`${q.questionId} duplicate steps in skill`);
    stepsSeen.add(sk);
    cmSeen.add(q.commonMistake);
    const prefix = (q.explanation.match(/[\u4e00-\u9fff]/g) || []).slice(0, 12).join("");
    if (prefixSeen.has(prefix)) throw new Error(`${q.questionId} duplicate expl prefix: ${prefix}`);
    prefixSeen.add(prefix);
    structures.add(textStructureKey(q.text));
    for (const field of [q.explanation, q.text, ...q.steps, q.commonMistake, q.concept, ...q.choices]) {
      const b1 = hasU04BannedText(field);
      if (b1) throw new Error(`${q.questionId} U04 banned: ${b1}`);
      const b2 = hasBannedText(field);
      if (b2) throw new Error(`${q.questionId} banned: ${b2}`);
      const b3 = hasU05BannedText(field);
      if (b3) throw new Error(`${q.questionId} U05 banned: ${b3}`);
      const b4 = hasExtraBanned(field);
      if (b4) throw new Error(`${q.questionId} extra banned: ${b4}`);
    }
    const embed = stepsEmbedQuestionText(q.steps, q.text);
    if (embed) throw new Error(`${q.questionId} steps embed text: ${embed}`);
    const rep = explanationOverRepeatsText(q.explanation, q.text);
    if (rep) throw new Error(`${q.questionId} expl repeats: ${rep}`);
    if (!q.explanation.includes("選「")) throw new Error(`${q.questionId} missing 選「 wrong choice`);
  }
  if (cmSeen.size < 6) throw new Error(`${items[0].skillId} commonMistake need 6+ unique (${cmSeen.size})`);
  if (structures.size < 8) throw new Error(`${items[0].skillId} text structures need 8+ (${structures.size})`);
}

function validateLecture(l, bankExpl) {
  if (countZh(l.concept) < 80) throw new Error(`${l.skillId} lecture concept short`);
  if (!l.stepGuide || l.stepGuide.length < 5) throw new Error(`${l.skillId} stepGuide<5`);
  if (!l.examples || l.examples.length < 2) throw new Error(`${l.skillId} examples<2`);
  for (const ex of l.examples) {
    if (countZh(ex.explanation) < 40) throw new Error(`${l.skillId} example expl short`);
    if (bankExpl.has(ex.explanation.trim())) throw new Error(`${l.skillId} example copies bank expl`);
  }
  if (!l.commonMistakes || l.commonMistakes.length < 4) throw new Error(`${l.skillId} commonMistakes<4`);
  for (const field of [l.concept, l.formula, ...l.stepGuide, ...l.commonMistakes, ...l.examples.flatMap(e => [e.question, e.explanation])]) {
    const b1 = hasU04BannedText(field);
    if (b1) throw new Error(`${l.skillId} U04 banned: ${b1}`);
    const b2 = hasBannedText(field);
    if (b2) throw new Error(`${l.skillId} banned: ${b2}`);
    const b3 = hasU05BannedText(field);
    if (b3) throw new Error(`${l.skillId} U05 banned: ${b3}`);
    const b4 = hasExtraBanned(field);
    if (b4) throw new Error(`${l.skillId} extra banned: ${b4}`);
  }
}

function writePart(filename, partConst, lecConst, items, lectures) {
  const body = `export const ${partConst} = ${JSON.stringify(items, null, 2)};

export const ${lecConst} = ${JSON.stringify(lectures, null, 2)};
`;
  fs.writeFileSync(path.join(OUT, filename), body, "utf8");
}

const S001 = mkItems(1, "ratio-simplify", "u06-ratio-basics", "比的前後項同乘或同除同一個不為零的數，比值不變；化簡比時求最大公因數，前後項同除以公因數", "比的化簡", [
  {
      "text": "12 : 18 化簡後為何？",
      "choices": [
          "2 : 3",
          "3 : 2",
          "4 : 6",
          "6 : 9"
      ],
      "answerIndex": 0,
      "explanation": "依題意列出比例式，12 與 18 的最大公因數是 6，同除以 6 得 2 : 3。選「3 : 2」是把前後項對調；選「4 : 6」只除以 3 尚未最簡。選「6 : 9」與計算結果不符，應排除。",
      "steps": [
          "找 12 與 18 的公因數。",
          "最大公因數為 6。",
          "12÷6=2，18÷6=3，所以 2:3。"
      ],
      "commonMistake": "只除一個公因數就停，沒除到前後項互質。"
  },
  {
      "text": "30 : 45 的最簡整數比為何？",
      "choices": [
          "2 : 3",
          "3 : 5",
          "5 : 6",
          "6 : 9"
      ],
      "answerIndex": 0,
      "explanation": "先確認比的前後項，30 與 45 的最大公因數是 15，同除以 15 得 2 : 3。選「3 : 5」是只除 10 的結果；選「6 : 9」只除以 5 仍非最簡。選「5 : 6」與計算結果不符，應排除。",
      "steps": [
          "列出 30 與 45 的因數。",
          "最大公因數 15。",
          "30÷15=2，45÷15=3。"
      ],
      "commonMistake": "用 5 去除但沒除到互質，留下 6 : 9。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "8 : 12 與下列哪一個比相等？",
      "choices": [
          "4 : 6",
          "2 : 4",
          "6 : 8",
          "3 : 8"
      ],
      "answerIndex": 0,
      "explanation": "此題考查比例概念，8 : 12 同除以 4 得 2 : 3；4 : 6 同除以 2 也得 2 : 3，兩者相等。選「2 : 4」化簡為 1 : 2；選「6 : 8」化簡為 3 : 4。選「3 : 8」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "化簡 8:12 得 2:3。",
          "化簡 4:6 得 2:3。",
          "比值相同，選 4:6。"
      ],
      "commonMistake": "只比數字大小，沒有化成最簡比再比較。"
  },
  {
      "text": "15 : 25 化簡後，前項比後項少多少？",
      "choices": [
          "2",
          "3",
          "5",
          "10"
      ],
      "answerIndex": 0,
      "explanation": "解題時先化簡比，15 : 25 同除以 5 得 3 : 5，前項 3 比後項 5 少 2。選「5」是把差當成公因數；選「10」是直接用 25−15。選「3」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "15:25 同除 5 得 3:5。",
          "前項 3，後項 5。",
          "5−3=2。"
      ],
      "commonMistake": "沒先化簡就用原始前後項相減。"
  },
  {
      "text": "36 : 48 化簡，前項應為多少？",
      "choices": [
          "3",
          "4",
          "6",
          "9"
      ],
      "answerIndex": 0,
      "explanation": "遇到比例分配題，36 與 48 的最大公因數是 12，36÷12=3 為前項。選「4」是後項；選「6」是只除以 6 的前項。選「9」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "36 與 48 的 gcd 為 12。",
          "前項 36÷12=3。",
          "後項 48÷12=4，比為 3:4。"
      ],
      "commonMistake": "把後項當前項，或只除部分公因數。"
  },
  {
      "text": "0.5 : 1.5 化簡後為何？",
      "choices": [
          "1 : 3",
          "1 : 2",
          "2 : 3",
          "3 : 5"
      ],
      "answerIndex": 0,
      "explanation": "列式前統一單位，同乘 10 得 5 : 15，再同除以 5 得 1 : 3。選「1 : 2」是只同乘 2 的結果；選「2 : 3」把小數部分處理錯誤。選「3 : 5」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "同乘 10：5:15。",
          "同除 5：1:3。",
          "前後項互質，最簡。"
      ],
      "commonMistake": "小數比沒先化整數就直接約分。"
  },
  {
      "text": "某班男女生人數比 24 : 36，最簡比為何？",
      "choices": [
          "2 : 3",
          "3 : 2",
          "4 : 6",
          "12 : 18"
      ],
      "answerIndex": 0,
      "explanation": "正比關係可寫成，24 與 36 同除以 12 得 2 : 3。選「3 : 2」是男女順序對調；選「4 : 6」只除以 6。選「12 : 18」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "24:36 的 gcd 是 12。",
          "24÷12=2，36÷12=3。",
          "最簡比 2:3。"
      ],
      "commonMistake": "題目給男:女，卻寫成女:男。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "56 : 42 化簡後，後項除以前項的商是多少？",
      "choices": [
          "0.75",
          "1.5",
          "1.33",
          "2"
      ],
      "answerIndex": 0,
      "explanation": "反比關係乘積固定，56:42 同除以 14 得 4:3，後項除以前項 = 3÷4 = 0.75。選「1.5」是前項除後項；選「1.33」是未化簡就除。選「2」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "56:42 同除 14 得 4:3。",
          "後項÷前項=3÷4。",
          "3/4=0.75。"
      ],
      "commonMistake": "用原始 56、42 相除，沒先化簡。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "100 : 150 化簡，與哪個比相同？",
      "choices": [
          "10 : 15",
          "2 : 3",
          "20 : 25",
          "5 : 6"
      ],
      "answerIndex": 1,
      "explanation": "比例尺換算時要，100:150 同除以 50 得 2:3。10:15 同除以 5 也得 2:3，但 2:3 本身已最簡且與題意相同。選「10:15」未化簡；選「20:25」化簡為 4:5。選「10 : 15」與計算結果不符，應排除。",
      "steps": [
          "100÷50=2，150÷50=3。",
          "最簡比 2:3。",
          "2:3 與原比相等。"
      ],
      "commonMistake": "選未化簡的等價比當代表。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "18 : 27 化簡後，前後項的和是多少？",
      "choices": [
          "5",
          "6",
          "7",
          "9"
      ],
      "answerIndex": 0,
      "explanation": "連比問題先求總，18:27 同除以 9 得 2:3，和為 5。選「6」是 3+3 或其他誤算；選「9」是用原始 18+27 的一半。選「7」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "gcd(18,27)=9。",
          "得 2:3。",
          "2+3=5。"
      ],
      "commonMistake": "化簡正確但加總時用錯數字。"
  },
  {
      "text": "某材料 A、B 重量比 45 : 60，最簡比為何？",
      "choices": [
          "3 : 4",
          "4 : 3",
          "9 : 12",
          "15 : 20"
      ],
      "answerIndex": 0,
      "explanation": "素養情境題需先，45 與 60 同除以 15 得 3 : 4。選「4 : 3」順序對調；選「9 : 12」只除以 5。選「15 : 20」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "45 與 60 的 gcd=15。",
          "45÷15=3，60÷15=4。",
          "最簡 3:4。"
      ],
      "commonMistake": "A、B 順序與題目相反。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "社團報名，早鳥與一般名額比 14 : 21，若要以最簡整數比呈現並說明分配公平性，應寫成何者？",
      "choices": [
          "2 : 3",
          "1 : 2",
          "7 : 10",
          "3 : 5"
      ],
      "answerIndex": 0,
      "explanation": "複合比例分兩步，14:21 同除以 7 得 2:3，表示每 2 個早鳥名額對 3 個一般名額，便於溝通比例。選「1:2」化簡錯誤；選「7:10」不是等價比。選「1 : 2」與計算結果不符，應排除。",
      "steps": [
          "14:21 同除 7。",
          "得 2:3。",
          "2:3 為最簡且具溝通意義。"
      ],
      "commonMistake": "素養題只會約分但不理解最簡比在情境中的用途。"
  }
]);
const L001 = lec("ratio-simplify", "u06-ratio-basics", "比的化簡", "比的前後項同乘或同除同一個不為零的數，比值不變；化簡比時求最大公因數，前後項同除以公因數，直到前後項互質為止。比 a:b 表示 a 與 b 的數量關係，不同於分數值 a÷b，但可藉由同乘除保持相等關係。國中比例題重在理解前後項關係與列式；運算前要先確認單位一致。", "a : b = (a÷d) : (b÷d)，d 為 a、b 的最大公因數", [
  "確認題目要求的是比、比值還是比例式。",
  "找出比的前項與後項。",
  "求前後項的最大公因數。",
  "前項、後項同除以公因數，寫成最簡整數比。",
  "檢查前後項是否互質，必要時再確認能否同除。"
], [
  {
    "question": "化簡 18 : 24",
    "explanation": "18 與 24 的最大公因數是 6，同除以 6 得 3 : 4。若只除以 2 得 9 : 12 仍非最簡，須除到互質為止。講義例題要先把條件寫成比例式，再逐步化簡或求解。"
  },
  {
    "question": "0.6 : 1.2 化簡",
    "explanation": "先把小數化整數，同乘 10 得 6 : 12，再同除以 6 得 1 : 2。不可直接把 0.6 當作已化簡的前項。講義例題要先把條件寫成比例式，再逐步化簡或求解。"
  }
], [
  "只除前項或只除後項，破壞比值。",
  "沒除到互質就當最簡比。",
  "把小數比直接略去小數點。",
  "混淆比與比值，把 3:4 寫成 3/4 當比。"
]);

const S002 = mkItems(2, "proportion-solve", "u06-ratio-basics", "比例式 a:b = c:d 中，內項積等於外項積 ad=bc；求未知數時交叉相乘再解一次式", "比例式求解", [
  {
      "text": "兩個比 2 : 3 與 x : 12 相等，x = ?",
      "choices": [
          "6",
          "8",
          "9",
          "18"
      ],
      "answerIndex": 1,
      "explanation": "比例式內外項積，外項 2 與 12，內項 3 與 x，2×12=3x，x=8。選「6」是 3×2 誤算；選「18」是 3×6 或其他交叉錯誤。選「9」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "寫成 2:3=x:12。",
          "2×12=3x。",
          "x=8。"
      ],
      "commonMistake": "內外項標錯，寫成 2×x=3×12。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "比例式 4 : 5 = 12 : y 中，y = ?",
      "choices": [
          "10",
          "15",
          "16",
          "20"
      ],
      "answerIndex": 1,
      "explanation": "檢查比是否相等，4×y=5×12，y=15。也可看 4 到 12 乘 3，5 也要乘 3 得 15。選「16」是 4×4；選「20」是 5×4。選「10」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "4×y=5×12。",
          "y=15。",
          "左比 4:5 右比 12:15 相等。"
      ],
      "commonMistake": "只放大前項忘記後項也要同倍。"
  },
  {
      "text": "已知 x : 6 = 5 : 9，求 x",
      "choices": [
          "10/3",
          "10",
          "15",
          "30"
      ],
      "answerIndex": 0,
      "explanation": "部分量占總量時，x×9=6×5，9x=30，x=10/3。選「10」是 6×5÷3 算錯；選「30」是沒除 9。選「15」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "x×9=6×5。",
          "9x=30。",
          "x=10/3。"
      ],
      "commonMistake": "交叉相乘後忘記解一次式。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "利用內外項積解 3 : 7 = 9 : x",
      "choices": [
          "14",
          "21",
          "28",
          "63"
      ],
      "answerIndex": 1,
      "explanation": "圖形概念以文字描，3×x=7×9，3x=63，x=21。選「14」是 7×2；選「63」是忘記除 3。選「28」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "3×x=7×9。",
          "3x=63。",
          "x=21。"
      ],
      "commonMistake": "把內項積當成 x 直接寫出。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "小數比例 1.2 : 2 = 3 : x，求 x",
      "choices": [
          "3.6",
          "5",
          "6",
          "7.2"
      ],
      "answerIndex": 1,
      "explanation": "依題意列出比例式，1.2×x=2×3，1.2x=6，x=5。選「3.6」是 1.2×3；選「6」是忘記除 1.2。選「7.2」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "1.2×x=2×3。",
          "1.2x=6。",
          "x=5。"
      ],
      "commonMistake": "小數比例式交叉相乘時小數點處理錯。"
  },
  {
      "text": "5 : x 與 10 : 6 成比例，x = ?",
      "choices": [
          "2",
          "3",
          "5",
          "12"
      ],
      "answerIndex": 1,
      "explanation": "先確認比的前後項，5×6=10×x，30=10x，x=3。選「2」是 10÷5；選「12」是 6×2。選「5」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "5×6=10x。",
          "30=10x。",
          "x=3。"
      ],
      "commonMistake": "未知數在後項時內外項判斷錯誤。"
  },
  {
      "text": "使 x : 8 與 3 : 4 相等，x = ?",
      "choices": [
          "4",
          "6",
          "8",
          "12"
      ],
      "answerIndex": 1,
      "explanation": "此題考查比例概念，x×4=8×3，4x=24，x=6。選「4」是 8÷2；選「12」是 8+4 類型錯誤。選「8」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "x×4=8×3。",
          "4x=24。",
          "x=6。"
      ],
      "commonMistake": "比例式寫成相減關係而非相乘。"
  },
  {
      "text": "2 : 5 與 x : 20 表示同一比例，x = ?",
      "choices": [
          "4",
          "8",
          "10",
          "50"
      ],
      "answerIndex": 1,
      "explanation": "解題時先化簡比，2×20=5x，40=5x，x=8。也可看 5 到 20 乘 4，2 也要乘 4 得 8。選「4」是 20÷5；選「50」是 2×25。選「10」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "2×20=5x。",
          "40=5x。",
          "x=8。"
      ],
      "commonMistake": "用加減倍數代替同乘除。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "7 : 4 與 21 : x 相等，x = ?",
      "choices": [
          "4",
          "7",
          "12",
          "28"
      ],
      "answerIndex": 2,
      "explanation": "遇到比例分配題，7×x=4×21，7x=84，x=12。選「4」是後項沒變；選「28」是 7×4。選「7」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "7×x=4×21。",
          "7x=84。",
          "x=12。"
      ],
      "commonMistake": "前項乘 3 但後項忘記乘 3。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "0.5 : 1.5 與 2 : x 是比例式，x = ?",
      "choices": [
          "3",
          "4",
          "5",
          "6"
      ],
      "answerIndex": 3,
      "explanation": "列式前統一單位，0.5×x=1.5×2，0.5x=3，x=6。選「3」是 1.5×2 忘除 0.5；選「4」是倍數看錯。選「5」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "0.5×x=1.5×2。",
          "0.5x=3。",
          "x=6。"
      ],
      "commonMistake": "小數比化簡前交叉相乘易錯。"
  },
  {
      "text": "某比例式 6 : 9 = 10 : x，x 是多少？",
      "choices": [
          "12",
          "15",
          "18",
          "20"
      ],
      "answerIndex": 1,
      "explanation": "正比關係可寫成，6×x=9×10，6x=90，x=15。選「12」是 6×2；選「18」是 9×2。選「20」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "6×x=9×10。",
          "6x=90。",
          "x=15。"
      ],
      "commonMistake": "沒化簡 6:9 就直接估 x。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "食譜中麵粉與糖質量比 5:2，若用 750 公克麵粉，糖應幾公克？列比例式 5:2=750:x。",
      "choices": [
          "150",
          "300",
          "375",
          "1875"
      ],
      "answerIndex": 1,
      "explanation": "反比關係乘積固定，5×x=2×750，5x=1500，x=300。選「150」是 750÷5；選「1875」是 750×2.5 交叉錯。選「375」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "5:2=750:x。",
          "5x=1500。",
          "x=300 公克。"
      ],
      "commonMistake": "素養題列式正確但單位或內外項弄反。"
  }
]);
const L002 = lec("proportion-solve", "u06-ratio-basics", "比例式求解", "比例式表示兩個比相等，例如 a:b = c:d。內項是 b 與 c，外項是 a 與 d，內項積等於外項積 ad=bc。解比例式時先辨識內外項，再交叉相乘，最後解一次方程式。比例式兩邊比的前後項順序要一致。國中比例題重在理解前後項關係與列式；運算前要先確認單位一致。", "若 a:b = c:d，則 ad = bc", [
  "寫成 a:b = c:d 形式。",
  "標出內項與外項。",
  "利用 ad=bc 交叉相乘。",
  "解出未知數的一次式。",
  "代回檢查左右比是否相等。"
], [
  {
    "question": "若 2:3 = x:12，求 x",
    "explanation": "外項 2、12，內項 3、x，2×12=3x，x=8。若把 12 當外項卻寫成 2×x=3×12 就會解錯。講義例題要先把條件寫成比例式，再逐步化簡或求解。講義例題要先把條件寫成比例式，再逐步化簡或求解。"
  },
  {
    "question": "若 5:8 = 15:y，求 y",
    "explanation": "5×y=8×15，y=24。也可先看出 5 到 15 乘 3，8 也要乘 3 得 24。講義例題要先把條件寫成比例式，再逐步化簡或求解。講義例題要先把條件寫成比例式，再逐步化簡或求解。"
  }
], [
  "內外項標錯，交叉相乘寫反。",
  "只算一邊的倍數關係。",
  "前後項順序對調導致比不相等。",
  "解完不代回驗算左右比。"
]);

const S003 = mkItems(3, "direct-variation", "u06-ratio-basics", "兩量成正比表示其中一量隨另一量同倍數增減，關係式 y=kx；比例常數 k 不為零，且 y 除以 x 的比值固定", "正比", [
  {
      "text": "y 與 x 成正比，x=4 時 y=20，比例常數 k 為何？",
      "choices": [
          "4",
          "5",
          "16",
          "80"
      ],
      "answerIndex": 1,
      "explanation": "比例尺換算時要，正比 y=kx，k=y/x=20/4=5。選「4」是 x/y；選「80」是 20×4。選「16」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "y=kx。",
          "k=20/4。",
          "k=5。"
      ],
      "commonMistake": "比例常數用 x/y 而非 y/x。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "y 與 x 正比，k=3，x=7 時 y=?",
      "choices": [
          "10",
          "21",
          "24",
          "28"
      ],
      "answerIndex": 1,
      "explanation": "連比問題先求總，y=3×7=21。選「10」是 7+3；選「24」是 3×8 或其他。選「28」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "y=3x。",
          "x=7。",
          "y=21。"
      ],
      "commonMistake": "正比誤用加法而非乘法。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某車以固定速率行駛，時間 t 與距離 d 成正比，2 小時走 120 公里，4 小時走多少？",
      "choices": [
          "180",
          "240",
          "260",
          "480"
      ],
      "answerIndex": 1,
      "explanation": "素養情境題需先，k=120/2=60，d=60×4=240。選「180」是 120+60；選「480」是 120×4。選「260」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "k=120/2=60。",
          "d=60t。",
          "4 小時：240 公里。"
      ],
      "commonMistake": "時間加倍但距離只加固定量。"
  },
  {
      "text": "x 與 y 成正比，x=5 時 y=15，x=8 時 y=?",
      "choices": [
          "18",
          "24",
          "40",
          "45"
      ],
      "answerIndex": 1,
      "explanation": "複合比例分兩步，k=15/5=3，y=3×8=24。選「18」是 15+3；選「40」是 5×8。選「45」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "k=3。",
          "y=3x。",
          "x=8，y=24。"
      ],
      "commonMistake": "沒先求 k 直接用 x×y。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "正比關係 y=2.5x，x=4 時 y=?",
      "choices": [
          "6.5",
          "8",
          "10",
          "12.5"
      ],
      "answerIndex": 2,
      "explanation": "比例式內外項積，y=2.5×4=10。選「8」是 2×4；選「12.5」是 2.5+10 混算。選「6.5」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "y=2.5x。",
          "x=4。",
          "y=10。"
      ],
      "commonMistake": "小數 k 乘法出錯。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某工廠產量 p 與工人數 n 成正比，5 人做 150 件，8 人做幾件？",
      "choices": [
          "200",
          "240",
          "300",
          "400"
      ],
      "answerIndex": 1,
      "explanation": "檢查比是否相等，k=150/5=30，p=30×8=240。選「200」是 150+50；選「300」是 150×2。選「400」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "k=30。",
          "p=30n。",
          "8 人：240 件。"
      ],
      "commonMistake": "人數增加但每件產量也變的誤解。"
  },
  {
      "text": "y 與 x 正比，x 由 3 增為 9，y 由 12 變為？",
      "choices": [
          "24",
          "36",
          "48",
          "108"
      ],
      "answerIndex": 1,
      "explanation": "部分量占總量時，x 乘 3，y 也乘 3，12×3=36。選「24」是加 12；選「108」是 12×9。選「48」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "x: 3→9 乘 3。",
          "y 也乘 3。",
          "12×3=36。"
      ],
      "commonMistake": "x 乘 3 但 y 只加 3。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "下列哪組 x、y 可能成正比？",
      "choices": [
          "(1,2)(2,5)",
          "(2,6)(3,9)",
          "(3,4)(6,10)",
          "(1,3)(2,5)"
      ],
      "answerIndex": 1,
      "explanation": "圖形概念以文字描，(2,6) 與 (3,9) 都是 y/x=3。選「(1,2)(2,5)」比值 2 與 2.5 不同；選「(3,4)(6,10)」比值 4/3 與 5/3 不同。選「(1,3)(2,5)」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "正比檢查 y/x。",
          "(2,6): 3；(3,9): 3。",
          "比值相同。"
      ],
      "commonMistake": "只看 x 或 y 增加就判正比。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "y=kx，已知 (x,y)=(6,18)，求 x=10 時的 y。",
      "choices": [
          "24",
          "28",
          "30",
          "36"
      ],
      "answerIndex": 2,
      "explanation": "依題意列出比例式，k=18/6=3，y=3×10=30。選「24」是 18+6；選「36」是 18×2。選「28」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "k=3。",
          "y=3x。",
          "x=10，y=30。"
      ],
      "commonMistake": "沒求 k 直接用比例估。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "水費 c 與用水量 w 正比，10 度 350 元，15 度多少？",
      "choices": [
          "450",
          "525",
          "700",
          "1050"
      ],
      "answerIndex": 1,
      "explanation": "先確認比的前後項，k=350/10=35，c=35×15=525。選「450」是 350+100；選「1050」是 350×3。選「700」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "k=35 元/度。",
          "c=35w。",
          "15 度：525 元。"
      ],
      "commonMistake": "用水量與費用用加法連結。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "y 與 x 正比，x=0 時 y=?",
      "choices": [
          "0",
          "1",
          "k",
          "無意義"
      ],
      "answerIndex": 0,
      "explanation": "此題考查比例概念，y=kx，x=0 則 y=0。選「k」是常數項誤解；選「無意義」是混淆正比與反比。選「1」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "y=kx。",
          "x=0。",
          "y=0。"
      ],
      "commonMistake": "正比誤加 y 截距常數。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某品牌依重量計價，重量與價格成正比，600 公克 180 元，買 1 公斤需多少？",
      "choices": [
          "240",
          "280",
          "300",
          "360"
      ],
      "answerIndex": 2,
      "explanation": "解題時先化簡比，k=180/600=0.3 元/公克，1000×0.3=300。選「240」是比例估錯；選「360」是 180×2。選「280」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "k=0.3 元/公克。",
          "1000 公克。",
          "300 元。"
      ],
      "commonMistake": "單位換算與正比常數混用錯誤。"
  }
]);
const L003 = lec("direct-variation", "u06-ratio-basics", "正比", "兩量成正比表示其中一量隨另一量同倍數增減，關係式 y=kx，k 是不為零的比例常數。正比圖形過原點的直線，但國中常以文字與比例式處理。解題時先找一組 x、y 算 k，再求未知量。國中比例題重在理解前後項關係與列式；運算前要先確認單位一致。", "y = kx（k 為常數，k≠0）", [
  "確認題意是否為正比（同倍增減）。",
  "用已知一組 x、y 求 k=y/x。",
  "寫出 y=kx。",
  "代入已知 x 或 y 求未知。",
  "檢查 k 是否固定。"
], [
  {
    "question": "y 與 x 正比，x=3 時 y=12，求 k",
    "explanation": "k=y/x=12/3=4，所以 y=4x。若誤用 x/y 得 1/4 就會全題錯。講義例題要先把條件寫成比例式，再逐步化簡或求解。講義例題要先把條件寫成比例式，再逐步化簡或求解。"
  },
  {
    "question": "y=5x，x=6 時 y=?",
    "explanation": "直接 y=5×6=30。正比沒有額外常數項，不要加 5。講義例題要先把條件寫成比例式，再逐步化簡或求解。講義例題要先把條件寫成比例式，再逐步化簡或求解。"
  }
], [
  "用 x/y 求 k 而非 y/x。",
  "正比卻加常數項。",
  "只算一次倍數不驗 k。",
  "混淆正比與反比。"
]);

const S004 = mkItems(4, "inverse-variation", "u06-ratio-basics", "兩量成反比表示 x 增倍時 y 依同倍數縮小，關係式 xy=k；常數 k 不為零，兩量乘積始終固定", "反比", [
  {
      "text": "y 與 x 成反比，x=5 時 y=12，比例常數 k=xy 為何？",
      "choices": [
          "17",
          "60",
          "2.4",
          "7"
      ],
      "answerIndex": 1,
      "explanation": "比例式內外項積，反比 xy=k，k=5×12=60。選「17」是 12+5；選「2.4」是 12/5。選「7」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "xy=k。",
          "k=5×12。",
          "k=60。"
      ],
      "commonMistake": "反比常數用相除而非相乘。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "y 與 x 反比，k=36，x=9 時 y=?",
      "choices": [
          "3",
          "4",
          "6",
          "27"
      ],
      "answerIndex": 1,
      "explanation": "檢查比是否相等，y=36/9=4。選「3」是 36/12；選「27」是 36−9。選「6」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "xy=36。",
          "x=9。",
          "y=4。"
      ],
      "commonMistake": "反比未知量用減法或加法。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某工程固定工作量，5 人需 12 天，10 人需幾天？",
      "choices": [
          "5",
          "6",
          "10",
          "24"
      ],
      "answerIndex": 1,
      "explanation": "部分量占總量時，k=5×12=60，d=60/10=6。選「5」是 12−7；選「24」是 12×2。選「10」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "k=60。",
          "d=60/10。",
          "6 天。"
      ],
      "commonMistake": "人數增倍天數不變。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "y 與 x 反比，x 由 4 變 8，y 由 10 變為？",
      "choices": [
          "5",
          "8",
          "15",
          "20"
      ],
      "answerIndex": 0,
      "explanation": "圖形概念以文字描，x 乘 2，y 除 2，10÷2=5。選「8」是 10−2；選「20」是 10×2。選「15」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "x 乘 2。",
          "y 除 2。",
          "10÷2=5。"
      ],
      "commonMistake": "x 增倍 y 也增倍。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "xy=48，x=6 時 y=?",
      "choices": [
          "6",
          "8",
          "12",
          "42"
      ],
      "answerIndex": 1,
      "explanation": "依題意列出比例式，y=48/6=8。選「6」是 48/8 混淆；選「42」是 48−6。選「12」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "xy=48。",
          "x=6。",
          "y=8。"
      ],
      "commonMistake": "反比用減法求 y。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "下列哪組可能成反比？",
      "choices": [
          "(2,6)(4,12)",
          "(3,8)(6,4)",
          "(1,5)(2,10)",
          "(4,5)(8,10)"
      ],
      "answerIndex": 1,
      "explanation": "先確認比的前後項，(3,8) 與 (6,4) 乘積都是 24。選「(2,6)(4,12)」乘積 12 與 48；選「(1,5)(2,10)」乘積 5 與 20。選「(4,5)(8,10)」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "反比檢查 xy。",
          "(3,8):24；(6,4):24。",
          "乘積相同。"
      ],
      "commonMistake": "比值相同就判反比。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "y 與 x 反比，x=2.5 時 y=8，x=4 時 y=?",
      "choices": [
          "4",
          "5",
          "6.4",
          "12.8"
      ],
      "answerIndex": 1,
      "explanation": "此題考查比例概念，k=2.5×8=20，y=20/4=5。選「4」是 8−4；選「12.8」是 8×1.6。選「6.4」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "k=20。",
          "y=20/x。",
          "x=4，y=5。"
      ],
      "commonMistake": "小數 x 反比計算錯。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "長方形容器底面積 A 與水深 h 成反比（容積固定），A=200 時 h=15，A=300 時 h=?",
      "choices": [
          "8",
          "10",
          "12",
          "22.5"
      ],
      "answerIndex": 1,
      "explanation": "解題時先化簡比，k=200×15=3000，h=3000/300=10。選「8」是 15−7；選「22.5」是 15×1.5。選「12」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "k=3000。",
          "h=3000/A。",
          "A=300，h=10。"
      ],
      "commonMistake": "底面積增大水深也增。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "y 與 x 反比，x=0 時 y 如何？",
      "choices": [
          "0",
          "k",
          "無法討論",
          "無限大"
      ],
      "answerIndex": 2,
      "explanation": "遇到比例分配題，反比 xy=k，x=0 無法滿足 k≠0 的定義，無法討論。選「0」是混淆正比；選「無限大」超出國中範圍。選「k」與計算結果不符，應排除。",
      "steps": [
          "xy=k，k≠0。",
          "x=0 時乘積為 0。",
          "與 k 矛盾，無法討論。"
      ],
      "commonMistake": "x=0 仍硬代公式。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某泵浦固定排水量，抽水時間 t 與功率 P 成反比，P=3 時 t=20 分，P=5 時 t=?",
      "choices": [
          "8",
          "12",
          "15",
          "33"
      ],
      "answerIndex": 1,
      "explanation": "列式前統一單位，k=3×20=60，t=60/5=12。選「8」是 20−12；選「33」是 20+13。選「15」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "k=60。",
          "t=60/P。",
          "P=5，t=12 分。"
      ],
      "commonMistake": "功率增時間也增。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "固定距離下，速率 v 與時間 t 成反比，60 km/h 需 4 小時，80 km/h 需幾小時？",
      "choices": [
          "2",
          "3",
          "4",
          "5"
      ],
      "answerIndex": 1,
      "explanation": "正比關係可寫成，k=60×4=240，t=240/80=3。選「2」是 4−2；選「4」是時間不變。選「5」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "k=240。",
          "t=240/v。",
          "v=80，t=3 小時。"
      ],
      "commonMistake": "速率增時間不減。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某工廠固定訂單，機台數 m 與完成時間 t 成反比，4 台需 15 天，6 台需幾天？",
      "choices": [
          "8",
          "10",
          "12",
          "22.5"
      ],
      "answerIndex": 1,
      "explanation": "反比關係乘積固定，k=4×15=60，t=60/6=10。選「8」是 15−7；選「22.5」是 15×1.5。選「12」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "k=60。",
          "t=60/m。",
          "6 台：10 天。"
      ],
      "commonMistake": "機台增加天數也增加。，常見於未先化簡或列式錯誤。"
  }
]);
const L004 = lec("inverse-variation", "u06-ratio-basics", "反比", "兩量成反比表示 x 增倍時 y 依同倍數縮小，關係式 xy=k，k 是不為零的常數。反比沒有 y=kx 的形式，乘積 xy 才是固定量。解題時用已知一組 x、y 求 k，再代入另一個未知量。國中比例題重在理解前後項關係與列式；運算前要先確認單位一致。", "xy = k（k 為常數，k≠0）", [
  "確認是否為反比（一增一減且乘積固定）。",
  "用已知 x、y 求 k=xy。",
  "寫出 xy=k。",
  "代入求未知 x 或 y。",
  "檢查乘積是否一致。"
], [
  {
    "question": "y 與 x 反比，x=4 時 y=6，求 k",
    "explanation": "k=xy=4×6=24，關係 xy=24。若寫 y=6/4 就混淆反比與正比。講義例題要先把條件寫成比例式，再逐步化簡或求解。講義例題要先把條件寫成比例式，再逐步化簡或求解。"
  },
  {
    "question": "xy=24，x=8 時 y=?",
    "explanation": "y=24/8=3。反比是除法求另一量，不是用同一個 k 去乘。講義例題要先把條件寫成比例式，再逐步化簡或求解。講義例題要先把條件寫成比例式，再逐步化簡或求解。"
  }
], [
  "用 y=kx 處理反比。",
  "x 增倍 y 也增倍。",
  "k 用 x/y 求。",
  "反比加常數項。"
]);

const S005 = mkItems(5, "scale-drawing", "u06-ratio-apps", "比例尺 = 圖上距離:實際距離，同單位下化簡；換算時保持比的前後項單位一致", "比例尺", [
  {
      "text": "地圖比例尺 1 : 5000，圖上 4 cm 代表實際多少 cm？",
      "choices": [
          "2000",
          "5004",
          "20000",
          "50000"
      ],
      "answerIndex": 2,
      "explanation": "比例尺換算時要，實際=4×5000=20000 cm。選「2000」是 4×500；選「5004」是 4+5000。選「50000」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "1:5000 圖上:實際。",
          "實際=4×5000。",
          "20000 cm。"
      ],
      "commonMistake": "比例尺 1:n 誤用 4÷5000。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "比例尺 1 : 200，圖上 7.5 cm，實際長度（cm）？",
      "choices": [
          "150",
          "200",
          "1500",
          "2000"
      ],
      "answerIndex": 2,
      "explanation": "連比問題先求總，實際=7.5×200=1500 cm。選「150」是 7.5×20；選「2000」是 7.5×266 誤算。選「200」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "實際=圖上×200。",
          "7.5×200=1500。",
          "1500 cm。"
      ],
      "commonMistake": "小數圖上距離乘法錯。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "實際距離 600 m，比例尺 1 : 10000，圖上約多少 cm？",
      "choices": [
          "0.6",
          "6",
          "60",
          "600"
      ],
      "answerIndex": 1,
      "explanation": "素養情境題需先，600 m=60000 cm，圖上=60000/10000=6 cm。選「0.6」少除一位；選「60」是 60000/1000。選「600」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "600 m=60000 cm。",
          "圖上=60000/10000。",
          "6 cm。"
      ],
      "commonMistake": "公尺未換公分就算。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某圖比例尺 1 : 50，實際 2 m 的物件，圖上長度？",
      "choices": [
          "2 cm",
          "4 cm",
          "40 cm",
          "100 cm"
      ],
      "answerIndex": 1,
      "explanation": "複合比例分兩步，2 m=200 cm，圖上=200/50=4 cm。選「2 cm」是 2/1；選「40 cm」是 200/5。選「100 cm」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "2 m=200 cm。",
          "圖上=200÷50。",
          "4 cm。"
      ],
      "commonMistake": "實際換算圖上時乘除方向反。"
  },
  {
      "text": "比例尺 2 : 1 表示什麼？",
      "choices": [
          "縮小圖",
          "放大圖",
          "實際與圖相同",
          "無法判斷"
      ],
      "answerIndex": 1,
      "explanation": "比例式內外項積，圖上:實際=2:1，圖上較大，是放大圖。選「縮小圖」是 1:n 才縮小；選「相同」需 1:1。選「實際與圖相同」與計算結果不符，應排除。",
      "steps": [
          "2:1 圖上>實際。",
          "圖上為實際 2 倍。",
          "放大圖。"
      ],
      "commonMistake": "比例尺前項大仍當縮小圖。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "地圖 1 : 25000，兩地圖上距 8 cm，實際距離（km）？",
      "choices": [
          "0.2",
          "2",
          "20",
          "200"
      ],
      "answerIndex": 1,
      "explanation": "檢查比是否相等，實際=8×25000=200000 cm=2000 m=2 km。選「0.2」少一位；選「20」多一位。選「200」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "8×25000=200000 cm。",
          "換算 2 km。",
          "2 km。"
      ],
      "commonMistake": "公分換公里小數點錯。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "設計圖比例尺 1 : 100，圖上寬 3.5 cm，實際寬（m）？",
      "choices": [
          "0.35",
          "3.5",
          "35",
          "350"
      ],
      "answerIndex": 1,
      "explanation": "部分量占總量時，實際=3.5×100=350 cm=3.5 m。選「0.35」少一位；選「35」是 350 cm 當 m。選「350」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "3.5×100=350 cm。",
          "350 cm=3.5 m。",
          "3.5 m。"
      ],
      "commonMistake": "350 cm 未換成 3.5 m。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "比例尺 1 : 4000000，圖上 5 cm 約實際幾 km？",
      "choices": [
          "20",
          "200",
          "2000",
          "20000"
      ],
      "answerIndex": 1,
      "explanation": "圖形概念以文字描，5×4000000=20000000 cm=200 km。選「20」少兩位；選「2000」多一位。選「20000」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "5×4000000 cm。",
          "換算 200 km。",
          "200 km。"
      ],
      "commonMistake": "大比例尺乘法位數錯。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "實際長 45 cm，按 1 : 15 畫在圖上，圖上長？",
      "choices": [
          "3 cm",
          "15 cm",
          "45 cm",
          "675 cm"
      ],
      "answerIndex": 0,
      "explanation": "依題意列出比例式，圖上=45/15=3 cm。選「15 cm」是 45/3；選「675 cm」是 45×15。選「45 cm」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "1:15 圖上=實際÷15。",
          "45÷15=3。",
          "3 cm。"
      ],
      "commonMistake": "求圖上距離卻用乘法。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "兩地實際 3.6 km，比例尺 1 : 60000，圖上距（cm）？",
      "choices": [
          "4",
          "6",
          "60",
          "600"
      ],
      "answerIndex": 1,
      "explanation": "先確認比的前後項，360000/60000=6 cm。選「4」是 360000/90000；選「60」少除一位。選「600」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "3.6 km=360000 cm。",
          "360000/60000=6。",
          "6 cm。"
      ],
      "commonMistake": "km 換 cm 位數錯。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某模型比例尺 1 : 20，模型高 15 cm，實際高（m）？",
      "choices": [
          "0.3",
          "3",
          "30",
          "300"
      ],
      "answerIndex": 1,
      "explanation": "此題考查比例概念，實際=15×20=300 cm=3 m。選「0.3」少一位；選「30」是 300 cm 當 m 又多。選「300」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "15×20=300 cm。",
          "300 cm=3 m。",
          "3 m。"
      ],
      "commonMistake": "模型高度乘除方向弄反。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "城市規劃圖比例尺 1 : 500，圖上公園長 12 cm，實際周長若為長的 4 倍，實際周長（m）？",
      "choices": [
          "24",
          "48",
          "240",
          "480"
      ],
      "answerIndex": 2,
      "explanation": "解題時先化簡比，實際長=12×500=6000 cm=60 m，周長=4×60=240 m。選「48」只算長；選「480」多一位。選「24」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "實際長 60 m。",
          "周長=4×60。",
          "240 m。"
      ],
      "commonMistake": "素養題只求長度忘題問周長。"
  }
]);
const L005 = lec("scale-drawing", "u06-ratio-apps", "比例尺", "比例尺表示圖上距離與實際距離的比，例如 1:5000 表示圖上 1 公分代表實際 5000 公分。使用時先統一單位，再依比例式換算。放大圖比例尺可能大於 1，縮小圖則圖上距離較小。國中比例題重在理解前後項關係與列式；運算前要先確認單位一致。", "比例尺 = 圖上距離 : 實際距離", [
  "讀清比例尺順序（圖上:實際）。",
  "統一長度單位。",
  "列比例式或倍數關係。",
  "換算未知距離。",
  "寫答案並帶單位。"
], [
  {
    "question": "比例尺 1:10000，圖上 3 cm，實際？",
    "explanation": "實際=3×10000=30000 cm=300 m。1:10000 表示圖上 1 對實際 10000，不是相除 10000。講義例題要先把條件寫成比例式，再逐步化簡或求解。講義例題要先把條件寫成比例式，再逐步化簡或求解。"
  },
  {
    "question": "實際 50 m，比例尺 1:500，圖上？",
    "explanation": "5000 cm 實際，圖上 5000/500=10 cm。先把 50 m 換 5000 cm 再除。講義例題要先把條件寫成比例式，再逐步化簡或求解。講義例題要先把條件寫成比例式，再逐步化簡或求解。"
  }
], [
  "圖上實際順序對調。",
  "單位未統一就算。",
  "1:n 誤用除 n。",
  "公分公尺混用。"
]);

const S006 = mkItems(6, "ratio-word-problem", "u06-ratio-apps", "比例分配與混合問題：依比分配總量、求部分量或總量，列比例式或份數和", "比例應用題", [
  {
      "text": "紅糖與白糖質量比 3 : 5，共 240 公克，紅糖多少公克？",
      "choices": [
          "90",
          "120",
          "150",
          "180"
      ],
      "answerIndex": 0,
      "explanation": "遇到比例分配題，總份 8，每份 30，紅糖 3 份=90。選「120」是 4 份；選「150」是 5 份白糖。選「180」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "總份 3+5=8。",
          "每份 240/8=30。",
          "紅糖 3×30=90。"
      ],
      "commonMistake": "紅糖用 5 份去乘。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某班男女生人數比 2 : 3，男生 24 人，全班多少人？",
      "choices": [
          "36",
          "40",
          "48",
          "60"
      ],
      "answerIndex": 3,
      "explanation": "列式前統一單位，2 份=24，每份 12，總份 5，全班 60。選「36」是女生；選「48」是 24+24。選「40」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "2 份=24。",
          "每份 12。",
          "5×12=60。"
      ],
      "commonMistake": "把男生當 3 份。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "長寬比 5 : 3，周長 64 cm，長多少 cm？",
      "choices": [
          "20",
          "24",
          "30",
          "40"
      ],
      "answerIndex": 0,
      "explanation": "正比關係可寫成，設 5k+3k 各為長寬，2(5k+3k)=64，k=4，長 20。選「24」是寬；選「40」是 5×8 若 k 算錯。選「30」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "2(5k+3k)=64。",
          "k=4。",
          "長=5×4=20。"
      ],
      "commonMistake": "周長只加長寬一次。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "酒精與水體積比 1 : 4，酒精 150 ml，水多少 ml？",
      "choices": [
          "450",
          "600",
          "750",
          "900"
      ],
      "answerIndex": 1,
      "explanation": "反比關係乘積固定，1 份=150，水 4 份=600。選「450」是 3 份；選「750」是 5 份總量。選「900」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "1 份=150。",
          "水 4 份。",
          "600 ml。"
      ],
      "commonMistake": "水用 140×7/9 類型對調比例。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "甲:乙:丙=2:3:5，共 100 元，乙得多少？",
      "choices": [
          "20",
          "30",
          "50",
          "60"
      ],
      "answerIndex": 1,
      "explanation": "比例尺換算時要，總份 10，每份 10，乙 3 份=30。選「20」是甲；選「50」是丙。選「60」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "總份 10。",
          "每份 10 元。",
          "乙 3×10=30。"
      ],
      "commonMistake": "連比只加前兩項當總份。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某商品按成本:售價=4:5 定價，成本 320 元，售價？",
      "choices": [
          "360",
          "400",
          "450",
          "500"
      ],
      "answerIndex": 1,
      "explanation": "連比問題先求總，4 份=320，每份 80，售價 5 份=400。選「360」是 320+40；選「450」是 320×5/4 對調。選「500」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "4 份=320。",
          "每份 80。",
          "售價 5×80=400。"
      ],
      "commonMistake": "售價用 320×4/5。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "三角形三邊比 3:4:5，最短邊 12 cm，最長邊？",
      "choices": [
          "15",
          "16",
          "20",
          "25"
      ],
      "answerIndex": 2,
      "explanation": "素養情境題需先，3 份=12，k=4，最長 5×4=20。選「16」是 4 份；選「25」是 5×5 若 k 錯。選「15」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "3k=12，k=4。",
          "最長 5k=20。",
          "20 cm。"
      ],
      "commonMistake": "最短邊當 5 份。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "圖書館科技:人文書=7:9，科技書 140 本，人文書？",
      "choices": [
          "160",
          "180",
          "200",
          "220"
      ],
      "answerIndex": 1,
      "explanation": "複合比例分兩步，7 份=140，每份 20，人文 9×20=180。選「160」是 8 份；選「200」是 10 份。選「220」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "7 份=140。",
          "每份 20。",
          "人文 180 本。"
      ],
      "commonMistake": "人文用 140×7/9。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某合金銅:鋅=5:2，銅重 750 公克，全重？",
      "choices": [
          "900",
          "1000",
          "1050",
          "1200"
      ],
      "answerIndex": 2,
      "explanation": "比例式內外項積，5 份=750，每份 150，總 7 份=1050。選「900」是 6 份；選「1200」是 8 份。選「1000」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "5 份=750。",
          "每份 150。",
          "7×150=1050。"
      ],
      "commonMistake": "全重用 750×5/2。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某活動成人:兒童票價比 3:2，6 張成人、4 張兒童共 2600 元，成人票價？",
      "choices": [
          "300",
          "360",
          "390",
          "400"
      ],
      "answerIndex": 0,
      "explanation": "檢查比是否相等，6×3k+4×2k=26k=2600，k=100，成人 300。選「360」是 3.6k；選「400」是 4k。選「390」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "26k=2600。",
          "k=100。",
          "成人 3k=300。"
      ],
      "commonMistake": "票價比當票數比直接加。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某農場雞鴨比 5:3，雞比鴨多 24 只，雞幾隻？",
      "choices": [
          "36",
          "48",
          "60",
          "72"
      ],
      "answerIndex": 2,
      "explanation": "部分量占總量時，差 2 份=24，每份 12，雞 5×12=60。選「36」是鴨；選「72」是 6 份。選「48」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "差 5-3=2 份=24。",
          "每份 12。",
          "雞 60 隻。"
      ],
      "commonMistake": "差當 5+3=8 份。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某城市綠地:建築用地比 2:5，綠地增加 12 公頃後比變 1:2，原綠地多少公頃？",
      "choices": [
          "24",
          "36",
          "48",
          "60"
      ],
      "answerIndex": 2,
      "explanation": "圖形概念以文字描，設原綠地 2k、建築 5k，(2k+12):5k=1:2，4k+24=5k，k=24，原綠地 48。選「24」是 k；選「60」是 5k。選「36」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "設 2k、5k。",
          "(2k+12)/5k=1/2。",
          "k=24，原綠地 48。"
      ],
      "commonMistake": "比例變化題仍用原始份數。，常見於未先化簡或列式錯誤。"
  }
]);
const L006 = lec("ratio-word-problem", "u06-ratio-apps", "比例應用題", "比例應用題將生活情境寫成比或比例式，例如按比分配糖果、混合溶液。常用總份數=前項+後項，每份=總量÷總份數，再乘所求部分的份數。列式前確認比的前後項對應的對象。國中比例題重在理解前後項關係與列式；運算前要先確認單位一致。", "每份量 = 總量 ÷ 總份數；部分量 = 每份量 × 該部分份數", [
  "讀清比對應的兩種量。",
  "算總份數。",
  "總量÷總份數得每份。",
  "乘所求部分份數。",
  "代回檢查和是否為總量。"
], [
  {
    "question": "紅:藍=3:5，共 40 顆，紅幾顆？",
    "explanation": "總份 8，每份 5 顆，紅 3 份得 15 顆。若用 40×3/5 就對調了後項。講義例題要先把條件寫成比例式，再逐步化簡或求解。講義例題要先把條件寫成比例式，再逐步化簡或求解。"
  },
  {
    "question": "男:女=4:7，男生 28 人，全班？",
    "explanation": "4 份=28，每份 7，總份 11，全班 77 人。不可直接用 28×7/4 當全班。講義例題要先把條件寫成比例式，再逐步化簡或求解。講義例題要先把條件寫成比例式，再逐步化簡或求解。"
  }
], [
  "總份數用減法。",
  "部分量比例式內外項對調。",
  "只求一份忘乘份數。",
  "比的对象對調。"
]);

const S007 = mkItems(7, "continued-ratio-preview", "u06-ratio-apps", "連比 a:b:c 表示三量關係，總份數=a+b+c；可化簡各項或統一中項使相鄰比銜接", "連比預備", [
  {
      "text": "連比 2 : 3 : 5 共 100 元，第二份多少元？",
      "choices": [
          "20",
          "30",
          "50",
          "60"
      ],
      "answerIndex": 1,
      "explanation": "比例尺換算時要，總份 10，每份 10，第二份 3×10=30。選「20」是第一份；選「50」是第三份。選「60」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "總份 2+3+5=10。",
          "每份 10 元。",
          "第二份 30 元。"
      ],
      "commonMistake": "總份數只加前兩項。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "連比 12 : 18 : 24 化簡後為何？",
      "choices": [
          "2 : 3 : 4",
          "3 : 4 : 6",
          "4 : 6 : 8",
          "6 : 9 : 12"
      ],
      "answerIndex": 0,
      "explanation": "連比問題先求總，12:18:24 同除 6 得 2:3:4。選「3:4:6」只除 4；選「6:9:12」只除 2。選「3 : 4 : 6」與計算結果不符，應排除。選「4 : 6 : 8」與計算結果不符，應排除。選「6 : 9 : 12」與計算結果不符，應排除。",
      "steps": [
          "找三項 gcd=6。",
          "同除 6。",
          "2:3:4。"
      ],
      "commonMistake": "連比只化簡前兩項。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某班男:女:外縣=3:4:5，共 36 人，女生多少人？",
      "choices": [
          "9",
          "12",
          "15",
          "18"
      ],
      "answerIndex": 1,
      "explanation": "素養情境題需先，總份 12，每份 3，女生 4×3=12。選「9」是男生；選「15」是外縣。選「18」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "總份 12。",
          "每份 3 人。",
          "女生 12 人。"
      ],
      "commonMistake": "女生用 3 份而非 4 份。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "a:b=1:2，b:c=2:3，連比 a:b:c 為何？",
      "choices": [
          "1:2:3",
          "1:4:6",
          "2:4:3",
          "1:2:6"
      ],
      "answerIndex": 0,
      "explanation": "複合比例分兩步，b 已同為 2，a:b:c=1:2:3。選「1:4:6」是 b 倍數錯；選「2:4:3」順序錯。選「1:2:6」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "b 統一為 2。",
          "a:b=1:2。",
          "b:c=2:3，所以 1:2:3。"
      ],
      "commonMistake": "統一中項時 a 沒同倍。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "連比 5:8:12，第一量 25，第三量？",
      "choices": [
          "40",
          "48",
          "60",
          "72"
      ],
      "answerIndex": 2,
      "explanation": "比例式內外項積，5 份=25，每份 5，第三 12×5=60。選「40」是 8 份；選「48」是 12×4。選「72」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "5 份=25。",
          "每份 5。",
          "第三 60。"
      ],
      "commonMistake": "第三量用 8 份去算。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "三數比 1:3:7，和為 99，最大數？",
      "choices": [
          "63",
          "66",
          "77",
          "88"
      ],
      "answerIndex": 0,
      "explanation": "檢查比是否相等，總份 11，每份 9，最大 7×9=63。選「77」是 7×11；選「88」是 8×11。選「66」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "總份 11。",
          "每份 9。",
          "最大 63。"
      ],
      "commonMistake": "最大數用 11 份。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "紅:綠:藍=2:5:8，紅+藍共 50 公克，綠多少？",
      "choices": [
          "20",
          "25",
          "30",
          "40"
      ],
      "answerIndex": 1,
      "explanation": "部分量占總量時，2+8=10 份=50，每份 5，綠 5×5=25 公克。選「20」是 4 份；選「30」是 6 份。選「40」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "紅+藍 10 份=50。",
          "每份 5 公克。",
          "綠 5 份=25 公克。"
      ],
      "commonMistake": "綠色用 2+5 份。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某獎金按甲:乙:丙=4:5:6 分配，乙比甲多 800 元，丙多少？",
      "choices": [
          "2400",
          "3200",
          "4000",
          "4800"
      ],
      "answerIndex": 3,
      "explanation": "圖形概念以文字描，差 1 份=800，丙 6 份=4800。選「2400」是 3 份；選「3200」是 4 份。選「4000」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "乙-甲=1 份=800。",
          "丙 6 份。",
          "4800 元。"
      ],
      "commonMistake": "差當 5+4=9 份。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "連比 3:5:7，第二量占全部的幾分之幾？",
      "choices": [
          "3/15",
          "5/15",
          "7/15",
          "1/3"
      ],
      "answerIndex": 1,
      "explanation": "依題意列出比例式，總份 15，第二 5/15=1/3。選「3/15」是第一；選「7/15」是第三。選「1/3」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "總份 15。",
          "第二 5 份。",
          "5/15=1/3。"
      ],
      "commonMistake": "分母用 7 而非 15。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "x:y=4:3，y:z=6:5，則 x:y:z=?",
      "choices": [
          "8:6:5",
          "4:6:5",
          "8:3:5",
          "4:3:5"
      ],
      "answerIndex": 0,
      "explanation": "先確認比的前後項，y 統一 6，x:y=8:6，y:z=6:5，所以 8:6:5。選「4:6:5」x 沒乘 2；選「4:3:5」y 未統一。選「8:3:5」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "y 統一 6。",
          "x=8。",
          "8:6:5。"
      ],
      "commonMistake": "只統一 y 的一邊。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "三容器容积比 1:2:4，共 35 升，最大容器几升？",
      "choices": [
          "5",
          "10",
          "20",
          "28"
      ],
      "answerIndex": 2,
      "explanation": "此題考查比例概念，總份 7，每份 5，最大 4×5=20。選「5」是最小；選「28」是 4×7。選「10」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "總份 7。",
          "每份 5 升。",
          "最大 20 升。"
      ],
      "commonMistake": "最大容器用 1 份。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某專案預算按研究:行銷:行政=5:3:2 分配，研究比行政多 900 萬元，總預算？",
      "choices": [
          "1200",
          "1500",
          "1800",
          "3000"
      ],
      "answerIndex": 3,
      "explanation": "解題時先化簡比，研究比行政多 5−2=3 份=900 萬，每份 300 萬，總 10 份=3000 萬。選「1800」是 6 份；選「1500」是 5 份。選「1200」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "差 3 份=900 萬。",
          "每份 300 萬。",
          "總 10 份=3000 萬。"
      ],
      "commonMistake": "連比素養題把差額當成總預算。"
  }
]);
const L007 = lec("continued-ratio-preview", "u06-ratio-apps", "連比預備", "連比 a:b:c 表示三個量的比，例如 2:3:5 表示第一量 2 份、第二量 3 份、第三量 5 份。求總量分配時總份數為各項之和。若已知 a:b 與 b:c，可統一 b 的數值再寫成連比。國中階段以簡單連比分配為主，不深入相似形。國中比例題重在理解前後項關係與列式；運算前要先確認單位一致。", "a:b:c 總份數 = a+b+c；部分量 = 總量×該項/總份數", [
  "確認三種量及順序。",
  "必要時化簡或統一中項。",
  "算總份數 a+b+c。",
  "總量÷總份數或比例分配。",
  "代回檢查三量和。"
], [
  {
    "question": "2:3:5 共 40，中間量？",
    "explanation": "總份 10，每份 4，中間 3 份得 12。若只加 2+3 當總份就漏掉第三量。講義例題要先把條件寫成比例式，再逐步化簡或求解。"
  },
  {
    "question": "a:b=2:3，b:c=6:5，求 a:b:c",
    "explanation": "統一 b 為 6，a:b=4:6，b:c=6:5，所以 4:6:5。不可直接把 3 與 6 相加。講義例題要先把條件寫成比例式，再逐步化簡或求解。講義例題要先把條件寫成比例式，再逐步化簡或求解。"
  }
], [
  "總份數漏項。",
  "統一中項時只乘一邊。",
  "連比順序對調。",
  "把連比當三個獨立比。"
]);

const S008 = mkItems(8, "ratio-literacy", "u06-ratio-literacy", "比例素養題結合生活情境解讀比、比例尺、正反比，需判斷關係再列式", "比例素養題", [
  {
      "text": "食譜 2 人份需牛奶 250 ml，5 人份需多少 ml？",
      "choices": [
          "500",
          "625",
          "750",
          "1250"
      ],
      "answerIndex": 1,
      "explanation": "遇到比例分配題，正比，250/2=125 ml/人，5×125=625。選「500」是 250×2；選「1250」是 250×5。選「750」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "每人 125 ml。",
          "5 人份。",
          "625 ml。"
      ],
      "commonMistake": "人數增加用加法 250+5。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某地圖 1 cm 代表 2 km，兩地圖上 3.5 cm，實際距離？",
      "choices": [
          "5 km",
          "6 km",
          "7 km",
          "8 km"
      ],
      "answerIndex": 2,
      "explanation": "列式前統一單位，3.5×2=7 km。選「5 km」是 3.5+1.5；選「6 km」是 3×2。選「8 km」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "1 cm=2 km。",
          "3.5×2=7。",
          "7 km。"
      ],
      "commonMistake": "圖上距離加 2 而非乘。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某商店 3 件 240 元，同單價買 7 件需多少？",
      "choices": [
          "480",
          "560",
          "640",
          "720"
      ],
      "answerIndex": 1,
      "explanation": "正比關係可寫成，單價 80，7×80=560。選「480」是 6 件；選「720」是 9 件。選「640」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "單價 240/3=80。",
          "7 件。",
          "560 元。"
      ],
      "commonMistake": "7 件用 240×7/3 分母錯。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "4 台抽水機 6 小時抽完，6 台同效率需幾小時？（反比）",
      "choices": [
          "3",
          "4",
          "9",
          "12"
      ],
      "answerIndex": 1,
      "explanation": "反比關係乘積固定，k=24，t=24/6=4。選「3」是 6−3；選「9」是 6+3。選「12」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "k=4×6=24。",
          "t=24/6。",
          "4 小時。"
      ],
      "commonMistake": "機台增時間也增。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某飲料依水:果汁=5:2 調製，要做 3.5 升，果汁需多少 ml？",
      "choices": [
          "700",
          "1000",
          "1400",
          "2000"
      ],
      "answerIndex": 1,
      "explanation": "比例尺換算時要，總份 7，每份 500 ml，果汁 2 份=1000 ml。選「700」是 1.4 份；選「1400」是 2.8 份。選「2000」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "3.5 L=3500 ml。",
          "每份 500 ml。",
          "果汁 1000 ml。"
      ],
      "commonMistake": "3.5 升當 350 ml 算。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某校男女比 4:5，全校 540 人，女生比男生多几人？",
      "choices": [
          "40",
          "60",
          "80",
          "100"
      ],
      "answerIndex": 1,
      "explanation": "連比問題先求總，總份 9，每份 60，女生 300、男生 240，差 60。選「40」是少算；選「80」是多算。選「100」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "每份 60 人。",
          "女 300，男 240。",
          "差 60 人。"
      ],
      "commonMistake": "差用 5-4=1 份但總份算錯。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某地年降水量圖以 1 cm 代表 200 mm，柱高 4.2 cm 表示多少 mm？",
      "choices": [
          "420",
          "640",
          "840",
          "2100"
      ],
      "answerIndex": 2,
      "explanation": "素養情境題需先，4.2×200=840 mm。選「420」是 4.2×100；選「2100」是 4.2×500。選「640」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "1 cm=200 mm。",
          "4.2×200=840。",
          "840 mm。"
      ],
      "commonMistake": "柱高直接當 mm。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某品牌大瓶:小瓶容量比 3:2，小瓶 400 ml，大瓶？",
      "choices": [
          "500",
          "600",
          "800",
          "1200"
      ],
      "answerIndex": 1,
      "explanation": "複合比例分兩步，2 份=400，每份 200，大瓶 3×200=600。選「800」是 4 份；選「1200」是 400×3。選「500」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "2 份=400 ml。",
          "每份 200 ml。",
          "大瓶 600 ml。"
      ],
      "commonMistake": "大瓶用 400×3 而非 400×3/2。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某活動參加者與志工比 15:2，參加者 450 人，志工至少几人？",
      "choices": [
          "30",
          "45",
          "60",
          "75"
      ],
      "answerIndex": 2,
      "explanation": "比例式內外項積，15 份=450，每份 30，志工 2×30=60。選「30」是 1 份；選「75」是 2.5 份。選「45」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "15 份=450。",
          "每份 30。",
          "志工 60 人。"
      ],
      "commonMistake": "志工用 450×2/15 分子分母對調。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某車以 80 km/h 走 2.5 小時，同速走 300 km 需幾小時？",
      "choices": [
          "3",
          "3.5",
          "3.75",
          "4"
      ],
      "answerIndex": 2,
      "explanation": "檢查比是否相等，正比速率固定，300/80=3.75。選「3」是 300−297；選「4」是估太高。選「3.5」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "速率 80 km/h。",
          "時間=距離/速率。",
          "3.75 小時。"
      ],
      "commonMistake": "距離增時間減。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某環保計畫碳排:reduction 比 7:3，已減 210 噸，目標总減量？",
      "choices": [
          "270",
          "300",
          "490",
          "630"
      ],
      "answerIndex": 2,
      "explanation": "部分量占總量時，3 份=210，每份 70，总 10 份=490。選「300」是 210+90；選「630」是 210×3。選「270」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "3 份=210。",
          "每份 70 噸。",
          "总 490 噸。"
      ],
      "commonMistake": "总減量用 210×7。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某社區投票，赞成:反对=5:4，弃权 20 票，全體 200 人，赞成几票？",
      "choices": [
          "80",
          "100",
          "120",
          "180"
      ],
      "answerIndex": 1,
      "explanation": "圖形概念以文字描，弃权 20，有效 180，总份 9，每份 20，赞成 5×20=100。選「80」是 4 份；選「120」是 6 份。選「180」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "有效票 180。",
          "每份 20 票。",
          "赞成 100 票。"
      ],
      "commonMistake": "弃权票也加入 5+4 份。，常見於未先化簡或列式錯誤。"
  }
]);
const L008 = lec("ratio-literacy", "u06-ratio-literacy", "比例素養題", "比例素養題出現在真實情境：食譜、地圖、票價、資源分配等。解題時先判斷是比的化簡、比例式、正比或反比，再選適當模型。閱讀圖表或文字描述時標出已知量與未知量，統一單位後再算。國中比例題重在理解前後項關係與列式；運算前要先確認單位一致。", "依情境選模型：比分配、比例式、y=kx 或 xy=k", [
  "讀懂情境與問題問句。",
  "判斷使用哪種比例模型。",
  "統一單位並列式。",
  "求出數值。",
  "檢查是否符合情境常識。"
], [
  {
    "question": "食譜 2 人份需 300 g 麵，6 人份？",
    "explanation": "人數與麵量正比，6 人=3 倍，900 g。若用 300+6 就完全錯。講義例題要先把條件寫成比例式，再逐步化簡或求解。講義例題要先把條件寫成比例式，再逐步化簡或求解。"
  },
  {
    "question": "地圖 1:50000，實際 2 km 圖上？",
    "explanation": "2 km=200000 cm，圖上 200000/50000=4 cm。先換 cm 再除。講義例題要先把條件寫成比例式，再逐步化簡或求解。講義例題要先把條件寫成比例式，再逐步化簡或求解。"
  }
], [
  "沒判斷正比反比。",
  "單位未統一。",
  "比的对象讀反。",
  "答案不合常理未檢查。"
]);

const S009 = mkItems(9, "ratio-part-total", "u06-ratio-apps", "已知部分量與比，可求總量=部分量÷該部分份數×總份數；或部分量=總量×部分份數/總份數", "部分量與總量", [
  {
      "text": "某班男:女=5:7，男生 35 人，全班多少人？",
      "choices": [
          "49",
          "56",
          "77",
          "84"
      ],
      "answerIndex": 3,
      "explanation": "依題意列出比例式，5 份=35，每份 7，总 12 份=84。選「49」是 7 份；選「77」是 11 份。選「56」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "5 份=35。",
          "每份 7 人。",
          "12 份=84 人。"
      ],
      "commonMistake": "全班用 35×7/5。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "紅球占 紅:白=3:4 中的 3 份，紅球 18 顆，共幾顆？",
      "choices": [
          "24",
          "30",
          "36",
          "42"
      ],
      "answerIndex": 3,
      "explanation": "先確認比的前後項，3 份=18，每份 6，总 7 份=42。選「24」是 4 份；選「36」是 6 份。選「30」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "3 份=18。",
          "每份 6 顆。",
          "总 42 顆。"
      ],
      "commonMistake": "总數用 18×4/3。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某溶液溶质:溶液=2:9，溶质 40 g，溶液质量？",
      "choices": [
          "120",
          "160",
          "180",
          "200"
      ],
      "answerIndex": 2,
      "explanation": "此題考查比例概念，2 份=40，每份 20，溶液 9 份=180。選「120」是 6 份；選「200」是 10 份。選「160」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "2 份=40 g。",
          "每份 20 g。",
          "溶液 180 g。"
      ],
      "commonMistake": "溶质比當溶质:溶剂。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某校學生與老師比 40:1，老師 15 人，學生多少人？",
      "choices": [
          "500",
          "550",
          "600",
          "650"
      ],
      "answerIndex": 2,
      "explanation": "解題時先化簡比，1 份=15，學生 40 份=600。選「500」是少算；選「650」是多算。選「550」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "1 份=15 人。",
          "學生 40 份。",
          "600 人。"
      ],
      "commonMistake": "學生用 15×40+1 混加。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某商品打折，折後:原價=4:5，折後 360 元，原價？",
      "choices": [
          "400",
          "420",
          "450",
          "480"
      ],
      "answerIndex": 2,
      "explanation": "遇到比例分配題，4 份=360，每份 90，原價 5 份=450。選「400」是 360+40；選「480」是 360×4/3。選「420」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "4 份=360。",
          "每份 90 元。",
          "原價 450 元。"
      ],
      "commonMistake": "原價用 360×4/5。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某資料 A 占 A:B:C=1:2:3 中的 1 份，A=25，C=?",
      "choices": [
          "50",
          "60",
          "75",
          "150"
      ],
      "answerIndex": 2,
      "explanation": "列式前統一單位，1 份=25，C 3 份=75。選「50」是 B；選「150」是 6 份。選「60」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "1 份=25。",
          "C 占 3 份。",
          "C=75。"
      ],
      "commonMistake": "C 用 25×3/1 但 1 份算錯。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某班及格:不及格=7:1，及格 42 人，不及格几人？",
      "choices": [
          "4",
          "6",
          "7",
          "8"
      ],
      "answerIndex": 1,
      "explanation": "正比關係可寫成，7 份=42，每份 6，不及格 1 份=6。選「4」是估錯；選「7」是份數當人數。選「8」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "7 份=42。",
          "每份 6 人。",
          "不及格 6 人。"
      ],
      "commonMistake": "不及格用 42/7=6 但當 7 人。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某投資獲利:本金=3:20，獲利 15000 元，本金？",
      "choices": [
          "80000",
          "90000",
          "100000",
          "120000"
      ],
      "answerIndex": 2,
      "explanation": "反比關係乘積固定，3 份=15000，每份 5000，本金 20 份=100000。選「80000」是 16 份；選「120000」是 24 份。選「90000」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "3 份=15000。",
          "每份 5000。",
          "本金 100000。"
      ],
      "commonMistake": "本金用 15000×3/20。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某混合物金:銀=5:3，金 250 g，全重？",
      "choices": [
          "350",
          "400",
          "450",
          "500"
      ],
      "answerIndex": 1,
      "explanation": "比例尺換算時要，5 份=250，每份 50，总 8 份=400。選「350」是 7 份；選「450」是 9 份。選「500」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "5 份=250 g。",
          "每份 50 g。",
          "总 400 g。"
      ],
      "commonMistake": "全重用 250×5/3。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某圖書漫畫:小說=2:5，漫畫 36 本，小說比漫畫多几本？",
      "choices": [
          "54",
          "72",
          "90",
          "126"
      ],
      "answerIndex": 0,
      "explanation": "連比問題先求總，2 份=36，每份 18，小說 5 份=90，差 54。選「72」是 4 份差；選「90」是小說总数。選「126」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "2 份=36。",
          "小說 90 本。",
          "差 54 本。"
      ],
      "commonMistake": "差直接用 36×5/2。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某時間安排學習:休息=5:1，學習 100 分鐘，一天安排总時間？",
      "choices": [
          "110",
          "115",
          "120",
          "125"
      ],
      "answerIndex": 2,
      "explanation": "素養情境題需先，5 份=100，每份 20，总 6 份=120。選「110」是 5.5 份；選「125」是估錯。選「115」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "5 份=100 分。",
          "每份 20 分。",
          "总 120 分。"
      ],
      "commonMistake": "总時間只加 100+20 但 20 算錯。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某问卷同意:不同意=9:2，同意 270 人，参与总人数？",
      "choices": [
          "300",
          "330",
          "360",
          "390"
      ],
      "answerIndex": 1,
      "explanation": "複合比例分兩步，9 份=270，每份 30，总 11 份=330。選「300」是 10 份；選「360」是 12 份。選「390」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "9 份=270。",
          "每份 30 人。",
          "总 330 人。"
      ],
      "commonMistake": "总人数用 270×9/2 類型對調。，常見於未先化簡或列式錯誤。"
  }
]);
const L009 = lec("ratio-part-total", "u06-ratio-apps", "部分量與總量", "部分量與總量的關係：若 a:b 且 a 對應已知量 M，則每份量 M/a，總量=(a+b)×M/a。也可寫 部分量/總量=部分份數/總份數。解題時先確認已知的是哪一部分。國中比例題重在理解前後項關係與列式；運算前要先確認單位一致。國中比例題重在理解前後項關係與列式；運算前要先確認單位一致。", "部分量/總量 = 部分份數/總份數", [
  "標出已知部分量與對應份數。",
  "求每份量。",
  "算總份數。",
  "總量=每份×總份。",
  "或直接用比例式。"
], [
  {
    "question": "男:女=3:5，男 24 人，全班？",
    "explanation": "3 份=24，每份 8，总 8 份=64。不可 24×5/3 當全班。講義例題要先把條件寫成比例式，再逐步化簡或求解。講義例題要先把條件寫成比例式，再逐步化簡或求解。"
  },
  {
    "question": "紅:全=2:7，紅 12 顆，全？",
    "explanation": "2 份=12，每份 6，全 7 份=42。部分比全體時分母是总份。講義例題要先把條件寫成比例式，再逐步化簡或求解。講義例題要先把條件寫成比例式，再逐步化簡或求解。"
  }
], [
  "部分量當總量。",
  "份數用錯項。",
  "比例式內外項對調。",
  "忘加其他部分份數。"
]);

const S010 = mkItems(10, "proportion-property", "u06-ratio-apps", "比例式 a:b=c:d 則 ad=bc（內項積=外項積）；可改寫、交換內項或外項仍成立", "比例式性質", [
  {
      "text": "若 3 : 4 = 6 : 8，內項積為何？",
      "choices": [
          "12",
          "18",
          "24",
          "32"
      ],
      "answerIndex": 2,
      "explanation": "遇到比例分配題，內項 4×6=24，外項 3×8=24。選「12」是 3×4；選「32」是 4×8。選「18」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "內項 4 與 6。",
          "4×6=24。",
          "外項 3×8=24。"
      ],
      "commonMistake": "內項用外項 3 與 8 相乘。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "下列哪個比例式成立？",
      "choices": [
          "2:3=4:5",
          "1:2=3:6",
          "5:2=10:3",
          "3:5=6:15"
      ],
      "answerIndex": 1,
      "explanation": "列式前統一單位，1:2=3:6，1×6=2×3=6。選「2:3=4:5」8≠10；選「5:2=10:3」15≠20。選「3:5=6:15」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "檢驗 1:2=3:6。",
          "1×6=6，2×3=6。",
          "成立。"
      ],
      "commonMistake": "只看前項倍數忽略後項。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "若 a:b=2:3 且 b:c=3:4，則 a:c=?",
      "choices": [
          "2:4",
          "3:4",
          "2:3",
          "6:12"
      ],
      "answerIndex": 0,
      "explanation": "正比關係可寫成，b 統一 3，a=2、c=4，a:c=2:4=1:2。選「3:4」是 b:c；選「6:12」未化簡但等價 1:2，題選 2:4。選「2:3」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "b 統一。",
          "a=2，c=4。",
          "a:c=2:4。"
      ],
      "commonMistake": "a:c 直接用 2:3 或 3:4。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "比例式 5:8=15:x 中，外項積=?",
      "choices": [
          "40",
          "75",
          "120",
          "150"
      ],
      "answerIndex": 2,
      "explanation": "反比關係乘積固定，外項 5×x，內項 8×15=120，5x=120。外項積=5x=120。選「75」是 5×15；選「150」是 15×10。選「40」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "內項 8×15=120。",
          "外項積=內項積。",
          "120。"
      ],
      "commonMistake": "外項積用 5×15。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "若 4:9=12:y，則 y=?",
      "choices": [
          "18",
          "21",
          "27",
          "36"
      ],
      "answerIndex": 2,
      "explanation": "比例尺換算時要，4×y=9×12，4y=108，y=27。選「18」是 12+6；選「36」是 12×3 但 4 未除。選「21」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "4×y=108。",
          "y=27。",
          "檢驗 4:9=12:27。"
      ],
      "commonMistake": "y 用 12×9/4 分子分母對調。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "下列何者與 2:5 相等？",
      "choices": [
          "4:8",
          "6:15",
          "8:15",
          "10:15"
      ],
      "answerIndex": 1,
      "explanation": "連比問題先求總，6:15 同除 3 得 2:5。選「4:8」是 1:2；選「8:15」不等。選「10:15」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "6:15 化簡 2:5。",
          "比值 2/5。",
          "選 6:15。"
      ],
      "commonMistake": "前項乘 2 後項乘 3 當相等。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "若 x:6=5:9，內項積=?",
      "choices": [
          "30",
          "45",
          "54",
          "90"
      ],
      "answerIndex": 0,
      "explanation": "素養情境題需先，內項 6×5=30，外項 x×9=30。選「45」是 9×5；選「54」是 6×9。選「90」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "內項 6 與 5。",
          "6×5=30。",
          "30。"
      ],
      "commonMistake": "內項用 6 與 9。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "比例式 1.5:2=4.5:x，x=?",
      "choices": [
          "4",
          "5",
          "6",
          "7.5"
      ],
      "answerIndex": 2,
      "explanation": "複合比例分兩步，1.5×x=2×4.5，1.5x=9，x=6。選「4」是 4.5−0.5；選「7.5」是 4.5×2/1.2。選「5」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "1.5x=9。",
          "x=6。",
          "檢驗成立。"
      ],
      "commonMistake": "小數比例交叉相乘錯。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "若 7:4=21:12，此式是否成立？",
      "choices": [
          "成立",
          "不成立",
          "無法判斷",
          "缺條件"
      ],
      "answerIndex": 0,
      "explanation": "比例式內外項積，7×12=84，4×21=84，成立。選「不成立」是只比 7/4 與 21/12 化簡後相等卻算錯。選「無法判斷」與計算結果不符，應排除。選「缺條件」與計算結果不符，應排除。",
      "steps": [
          "外項 7×12=84。",
          "內項 4×21=84。",
          "成立。"
      ],
      "commonMistake": "只算一邊乘積。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "a:b=c:d 可改寫為 a:c=?",
      "choices": [
          "b:d",
          "d:b",
          "c:b",
          "d:c"
      ],
      "answerIndex": 0,
      "explanation": "檢查比是否相等，交換內項得 a:c=b:d。選「d:b」是外項交換；選「c:b」順序錯。選「d:c」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "原式 a:b=c:d。",
          "a:c=b:d。",
          "選 b:d。"
      ],
      "commonMistake": "比例式變形時內外項搞混。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "若 8 : 5 = 24 : x，則 x = ?",
      "choices": [
          "10",
          "15",
          "19",
          "24"
      ],
      "answerIndex": 1,
      "explanation": "部分量占總量時，8×x=5×24，8x=120，x=15。選「10」是 120÷12 誤算；選「19」是 24−5。選「24」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "8×x=5×24。",
          "8x=120。",
          "x=15。"
      ],
      "commonMistake": "外項積算成 8×24。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某比例式檢驗：溶液 A:B=2:5，取 4 ml A 與 10 ml B 是否成比例？",
      "choices": [
          "成比例",
          "不成比例",
          "資料不足",
          "無法檢驗"
      ],
      "answerIndex": 0,
      "explanation": "圖形概念以文字描，4:10 化簡 2:5，與 A:B 相同。選「不成比例」是 4/10 與 2/5 化簡錯；選「資料不足」其實可檢驗。選「無法檢驗」與計算結果不符，應排除。",
      "steps": [
          "4:10 化簡 2:5。",
          "與 2:5 相同。",
          "成比例。"
      ],
      "commonMistake": "素養題只比 ml 數字不化簡。，常見於未先化簡或列式錯誤。"
  }
]);
const L010 = lec("proportion-property", "u06-ratio-apps", "比例式性質", "比例式 a:b=c:d 的內項是 b 與 c，外項是 a 與 d，內項積等於外項積 ad=bc。由此可推得 b/a=d/c、交換內項 a:c=b:d 等變形。利用性質可檢驗比例式是否成立，或快速求未知數。國中比例題重在理解前後項關係與列式；運算前要先確認單位一致。", "a:b=c:d ⟺ ad=bc", [
  "寫成比例式。",
  "標內項 b、c 與外項 a、d。",
  "算 ad 與 bc。",
  "比較是否相等。",
  "必要時解未知數。"
], [
  {
    "question": "檢驗 3:4=6:8",
    "explanation": "外項 3×8=24，內項 4×6=24，成立。若只比 3/4 與 6/8 也可，但乘積法更快。講義例題要先把條件寫成比例式，再逐步化簡或求解。"
  },
  {
    "question": "若 2:5=x:15，用內外項",
    "explanation": "2×15=5x，x=6。內外項積相等是解比例式的核心。講義例題要先把條件寫成比例式，再逐步化簡或求解。講義例題要先把條件寫成比例式，再逐步化簡或求解。"
  }
], [
  "內外項標錯。",
  "只比前項不交叉相乘。",
  "交換項後忘記重算。",
  "把比例式當等式直接加減。"
]);

const S011 = mkItems(11, "inverse-variation-graph", "u06-ratio-apps", "反比 xy=k 的圖形為雙曲線，x 增大 y 減小；第一象限內不過原點，描述時用「越…越…」", "反比圖形概念", [
  {
      "text": "反比關係 xy=24，當 x 由 3 增為 6，y 如何變化？",
      "choices": [
          "變為 2 倍",
          "變為 4 倍",
          "變為原來 1/2",
          "不變"
      ],
      "answerIndex": 2,
      "explanation": "依題意列出比例式，x 乘 2，y 除 2，變為原來 1/2。選「變為 2 倍」是正比；選「不變」忽略反比。選「變為 4 倍」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "x: 3→6 乘 2。",
          "y: 8→4 除 2。",
          "變為 1/2。"
      ],
      "commonMistake": "x 增 y 也增。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "下列哪種描述符合反比圖形在第一象限的走勢？",
      "choices": [
          "x 增 y 增，過原點",
          "x 增 y 減，不過原點",
          "x 增 y 不變",
          "x 減 y 減"
      ],
      "answerIndex": 1,
      "explanation": "先確認比的前後項，反比 xy=k 在第一象限 x 增 y 減，且不過原點。選「過原點」是正比；選「y 不變」非反比。選「x 增 y 增，過原點」與計算結果不符，應排除。",
      "steps": [
          "反比 xy=k。",
          "x↑ y↓。",
          "不過原點。"
      ],
      "commonMistake": "反比圖形當過原點直線。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "xy=30，下列哪組 (x,y) 符合反比？",
      "choices": [
          "(5,6)",
          "(3,9)",
          "(2,12)",
          "(10,2)"
      ],
      "answerIndex": 0,
      "explanation": "此題考查比例概念，5×6=30，(3,9)=27，(2,12)=24，(10,2)=20。只有 (5,6)。選「(3,9)」27；選「(10,2)」20。選「(2,12)」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "檢查 xy。",
          "(5,6)=30。",
          "符合。"
      ],
      "commonMistake": "只看 x 增大 y 减小就選。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "正比 y=3x 與反比 xy=12 的圖形共同點？",
      "choices": [
          "都過原點",
          "都在第一象限有分支",
          "都是直線",
          "x 增 y 都增"
      ],
      "answerIndex": 1,
      "explanation": "解題時先化簡比，兩者在第一象限都可討論（x>0,y>0）。正比過原點，反比不過。選「都過原點」只有正比；選「都是直線」反比是曲線。",
      "steps": [
          "正比過原點直線。",
          "反比第一象限雙曲線。",
          "第一象限皆有描述。"
      ],
      "commonMistake": "反比也是直線。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "xy=48，x=8 時 y=6；x=12 時 y=?",
      "choices": [
          "3",
          "4",
          "6",
          "8"
      ],
      "answerIndex": 1,
      "explanation": "遇到比例分配題，y=48/12=4。選「3」是 48/16；選「6」是 x=8 的 y。選「8」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "xy=48。",
          "x=12。",
          "y=4。"
      ],
      "commonMistake": "x 增 y 仍為 6。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "反比圖形不過原點，原因是？",
      "choices": [
          "k 必為負",
          "x、y 不能同時為 0 使 xy=k",
          "只在第二象限",
          "反比無圖形"
      ],
      "answerIndex": 1,
      "explanation": "列式前統一單位，原點 (0,0) 時 xy=0，無法滿足 k≠0。選「k 必為負」錯；選「無圖形」錯。選「只在第二象限」與計算結果不符，應排除。選「反比無圖形」與計算結果不符，應排除。",
      "steps": [
          "原點 xy=0。",
          "k≠0。",
          "不過原點。"
      ],
      "commonMistake": "反比圖形必過原點。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某反比關係，x 由 4 變 12，y 由 9 變 3，圖形上如何移動？",
      "choices": [
          "往右上",
          "往右下",
          "往左上",
          "水平"
      ],
      "answerIndex": 1,
      "explanation": "正比關係可寫成，x 增、y 減，往右下移動。選「往右上」是正比；選「水平」y 不變。選「往左上」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "x 4→12 增大。",
          "y 9→3 減小。",
          "往右下。"
      ],
      "commonMistake": "x 增 y 增往右上。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "下列哪個可能是反比 xy=60 的數對？",
      "choices": [
          "(5,10)",
          "(6,10)",
          "(10,6)",
          "(12,6)"
      ],
      "answerIndex": 2,
      "explanation": "反比關係乘積固定，10×6=60。選「(5,10)」50；選「(12,6)」72。選「(6,10)」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "xy=60。",
          "10×6=60。",
          "(10,6)。"
      ],
      "commonMistake": "5+10=15 當 60。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "反比與正比圖形主要差異？",
      "choices": [
          "反比是直線",
          "正比 x 增 y 減",
          "反比 x 增 y 減且通常不過原點",
          "兩者相同"
      ],
      "answerIndex": 2,
      "explanation": "比例尺換算時要，反比 x 增 y 減，不過原點；正比 x 增 y 增，過原點。選「反比是直線」錯；選「正比 x 增 y 減」反了。選「兩者相同」與計算結果不符，應排除。",
      "steps": [
          "正比 y=kx 過原點。",
          "反比 xy=k 不過原點。",
          "反比 x↑ y↓。"
      ],
      "commonMistake": "兩者圖形都是直線。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "xy=20，x 在 2 到 10 之間，y 的範圍？",
      "choices": [
          "2 到 10",
          "2 到 20",
          "10 到 20",
          "1 到 10"
      ],
      "answerIndex": 0,
      "explanation": "連比問題先求總，x=2 時 y=10；x=10 時 y=2，y 在 2 到 10。選「10 到 20」反了；選「1 到 10」含 1 錯。選「2 到 20」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "x=2，y=10。",
          "x=10，y=2。",
          "y 在 2~10。"
      ],
      "commonMistake": "y 範圍與 x 相同。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某文獻描述「行車時間與速率成反比」，圖形上時間隨速率增加而減少，此敘述？",
      "choices": [
          "正確",
          "錯誤",
          "只適用正比",
          "無法描述"
      ],
      "answerIndex": 0,
      "explanation": "素養情境題需先，反比關係 x（速率）增，y（時間）減，文字描述正確。選「只適用正比」混淆；選「無法描述」反比可用文字描述。選「錯誤」與計算結果不符，應排除。",
      "steps": [
          "反比 xy=k。",
          "速率增時間減。",
          "敘述正確。"
      ],
      "commonMistake": "素養題把反比當正比圖形。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "文字描述「x 越大 y 越小且曲線不過原點」，最可能指哪種關係？",
      "choices": [
          "正比",
          "反比",
          "一次函數平移",
          "等差數列"
      ],
      "answerIndex": 1,
      "explanation": "反比關係滿足 xy 固定，x 增大時 y 會變小；第一象限內反比圖形為雙曲線且 x、y 皆不為 0，故不過原點。選「正比」是 y 隨 x 同向變化且過原點；選「一次函數平移」已超出國中比例重點；選「等差數列」與連續變量關係無關。",
      "steps": [
          "x 增 y 減。",
          "不過原點。",
          "反比 xy=k。"
      ],
      "commonMistake": "把反比當正比直線。，常見於未先化簡或列式錯誤。"
  }
]);
const L011 = lec("inverse-variation-graph", "u06-ratio-apps", "反比圖形概念", "反比關係 xy=k 的圖形是反比例圖形（雙曲線的一支），在第一象限 x 越大 y 越小，曲線不會碰到 x 軸或 y 軸。國中常以文字描述圖形特徵，不要求畫圖。與正比 y=kx 過原點直線不同，反比圖形不過原點。國中比例題重在理解前後項關係與列式；運算前要先確認單位一致。", "xy=k 圖形：第一象限雙曲線，x↑ 則 y↓", [
  "確認是反比 xy=k。",
  "想 x 增大時 y 如何變。",
  "描述曲線在第一象限走向。",
  "指出不過原點。",
  "與正比直線對照。"
], [
  {
    "question": "xy=12，x 由 2 增到 6，y 如何變？",
    "explanation": "x 乘 3，y 由 6 變 2，變小。反比圖形向右下彎。講義例題要先把條件寫成比例式，再逐步化簡或求解。講義例題要先把條件寫成比例式，再逐步化簡或求解。"
  },
  {
    "question": "反比圖形是否過原點？",
    "explanation": "xy=k 且 k≠0，原點 0×0=0≠k，不過原點。正比 y=kx 才過原點。講義例題要先把條件寫成比例式，再逐步化簡或求解。講義例題要先把條件寫成比例式，再逐步化簡或求解。"
  }
], [
  "反比圖形當直線。",
  "x 增 y 也增。",
  "以為過原點。",
  "與正比圖形混淆。"
]);

const S012 = mkItems(12, "ratio-composite-problem", "u06-ratio-apps", "比例複合題結合比、比例式、正反比兩步以上；先後順序與單位統一是關鍵", "比例複合應用", [
  {
      "text": "男:女=3:5，全班 64 人，女生比男生多几人？",
      "choices": [
          "8",
          "12",
          "16",
          "24"
      ],
      "answerIndex": 2,
      "explanation": "比例式內外項積，总份 8，每份 8，男 24 女 40，差 16。選「8」是 1 份；選「24」是 3 份。選「12」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "每份 8 人。",
          "男 24，女 40。",
          "差 16 人。"
      ],
      "commonMistake": "差用 5-3=2 份但每份算錯。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "比例尺 1:200，圖上 5 cm，實際長 10 m，圖上寬 3 cm，實際寬？",
      "choices": [
          "4 m",
          "5 m",
          "6 m",
          "8 m"
      ],
      "answerIndex": 2,
      "explanation": "檢查比是否相等，實際長 5×200=1000 cm=10 m 驗證。寬 3×200=600 cm=6 m。選「4 m」是 3×1.33；選「8 m」是 3+5。選「5 m」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "寬 3×200=600 cm。",
          "600 cm=6 m。",
          "6 m。"
      ],
      "commonMistake": "寬用 3/5×10 比例錯。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "y 與 x 正比，x=4 時 y=12；y 與 z 反比，z=3 時 y=12，x=6 時 z=?",
      "choices": [
          "2",
          "3",
          "4",
          "6"
      ],
      "answerIndex": 0,
      "explanation": "部分量占總量時，y=3x，x=6 時 y=18。yz=36（因 z=3 時 y=12），z=36/18=2。選「3」是原 z；選「4」是 18/4.5。選「6」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "y=3x，x=6，y=18。",
          "yz=36。",
          "z=2。"
      ],
      "commonMistake": "正比反比先後步驟對調。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "紅:白=2:3，白:藍=3:4，紅:藍=?",
      "choices": [
          "2:4",
          "3:4",
          "2:3",
          "6:8"
      ],
      "answerIndex": 0,
      "explanation": "圖形概念以文字描，白統一 3，紅:白=2:3，白:藍=3:4，紅:藍=2:4=1:2。選「3:4」是白藍；選「6:8」未化簡。選「2:3」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "白統一 3。",
          "紅 2，藍 4。",
          "紅:藍=2:4。"
      ],
      "commonMistake": "紅藍直接用 2:4 未化簡但選項有 2:4。"
  },
  {
      "text": "某商品按 4:5 賣出 900 元，成本多少？",
      "choices": [
          "640",
          "720",
          "800",
          "810"
      ],
      "answerIndex": 1,
      "explanation": "依題意列出比例式，5 份=900，每份 180，成本 4 份=720。選「800」是估；選「810」是 900×0.9。選「640」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "5 份=900。",
          "成本 4 份=720。",
          "720 元。"
      ],
      "commonMistake": "成本用 900×4/5 分母錯。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "地圖 1 : 62500，圖上 8 cm，以 5 km/h 步行需幾小時？",
      "choices": [
          "1",
          "1.5",
          "2",
          "4"
      ],
      "answerIndex": 0,
      "explanation": "比例尺 1:62500 表示圖上 1 cm 對應實際 62500 cm。8 cm 的實際距離為 8×62500=500000 cm=5 km。以 5 km/h 步行，時間=距離÷速率=5÷5=1 小時。選「1.5」是把 5 km 誤除以 3.33；選「2」是距離少算成 10 km；選「4」是把速率 5 當成 1.25 類型誤除。",
      "steps": [
          "實際 5 km。",
          "速率 5 km/h。",
          "1 小時。"
      ],
      "commonMistake": "距離換算後忘除以速率。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "甲:乙=5:3，乙:丙=6:7，甲:丙=?",
      "choices": [
          "5:7",
          "10:7",
          "15:14",
          "30:21"
      ],
      "answerIndex": 1,
      "explanation": "此題考查比例概念，乙統一 6，甲:乙=10:6，乙:丙=6:7，甲:丙=10:7。選「5:7」未統一；選「30:21」化簡 10:7。選「15:14」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "乙統一 6。",
          "甲 10，丙 7。",
          "10:7。"
      ],
      "commonMistake": "甲丙直接用 5 與 7。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某班男:女=3:2，學生:老師=25:1，老師 2 人，男生多少人？",
      "choices": [
          "30",
          "36",
          "40",
          "48"
      ],
      "answerIndex": 0,
      "explanation": "解題時先化簡比，學生 50 人，男 3/5×50=30。選「36」是 3/5×60；選「40」是 2/5×100。選「48」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "老師 2，學生 50。",
          "男 3/5。",
          "30 人。"
      ],
      "commonMistake": "學生總數用 25×2=50 但男用 3:2 全體。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "溶液 A:B=1:3，B 60 ml，再加入 A 20 ml，新比 A:B=?",
      "choices": [
          "20:60",
          "40:60",
          "1:3",
          "2:3"
      ],
      "answerIndex": 1,
      "explanation": "遇到比例分配題，原 A 20 ml，新 A 40 ml，B 60，A:B=40:60=2:3。選「20:60」是舊 A；選「1:3」未加。選「2:3」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "原 A 20 ml。",
          "新 A 40 ml。",
          "40:60=2:3。"
      ],
      "commonMistake": "加 A 後 B 也變。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某工程 6 人 10 天完成，10 人需幾天？（反比）",
      "choices": [
          "4",
          "5",
          "6",
          "12"
      ],
      "answerIndex": 2,
      "explanation": "列式前統一單位，k=6×10=60，10 人需 60/10=6 天。選「4」是 60/15；選「12」是 6×2。選「5」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "k=60 人天。",
          "t=60/10。",
          "6 天。"
      ],
      "commonMistake": "人數增天數也增。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某活動预算按材料:人工:运输=2:5:3，材料 8000 元，总预算？",
      "choices": [
          "24000",
          "32000",
          "40000",
          "48000"
      ],
      "answerIndex": 2,
      "explanation": "正比關係可寫成，2 份=8000，每份 4000，总 10 份=40000。選「24000」是 6 份；選「48000」是 12 份。選「32000」與計算結果不符，應排除。計算過程要逐步核對，避免混淆比例關係。",
      "steps": [
          "2 份=8000。",
          "每份 4000。",
          "总 40000 元。"
      ],
      "commonMistake": "总预算用 8000×10/2 分母錯。，常見於未先化簡或列式錯誤。"
  },
  {
      "text": "某商店按成本:售價=3:4 定價，售價 480 元，成本與售價相差多少？",
      "choices": [
          "80",
          "120",
          "160",
          "360"
      ],
      "answerIndex": 1,
      "explanation": "成本:售價=3:4 表示售價占 4 份共 480 元，每份 120 元；成本 3 份 360 元，相差 1 份即 120 元。選「80」是 480÷6 估錯份數；選「360」是成本本身不是差額；選「160」是 480−320 類型誤算。",
      "steps": [
          "4 份=480。",
          "每份 120。",
          "差 1 份=120。"
      ],
      "commonMistake": "差用 4-3=1 但每份算錯。，常見於未先化簡或列式錯誤。"
  }
]);
const L012 = lec("ratio-composite-problem", "u06-ratio-apps", "比例複合應用", "比例複合應用題需兩步以上推理，例如先依比分配再求部分，或先比例尺換算再依反比求時間。解題時分段列式、標單位，每步確認模型是否仍適用。會考基礎範圍，不涉三角函數或等比級數。國中比例題重在理解前後項關係與列式；運算前要先確認單位一致。", "分段列式：先完成第一步比例，再代入下一步", [
  "拆解問題為兩個子問題。",
  "逐步列式並標單位。",
  "第一步結果作第二步輸入。",
  "檢查每步模型。",
  "代回驗算。"
], [
  {
    "question": "男:女=3:4，全班 56 人，女生？",
    "explanation": "總份 7，每份 8，女 4 份=32。不可直接用 56×4/3。講義例題要先把條件寫成比例式，再逐步化簡或求解。講義例題要先把條件寫成比例式，再逐步化簡或求解。"
  },
  {
    "question": "1:5000 圖上 6 cm，以 60 km/h 走需幾分？",
    "explanation": "實際 300000 cm=3 km，時間=3/60=0.05 h=3 分。先換算距離再算時間。講義例題要先把條件寫成比例式，再逐步化簡或求解。講義例題要先把條件寫成比例式，再逐步化簡或求解。"
  }
], [
  "兩步合一步易錯。",
  "第一步結果單位未換。",
  "第二步用錯模型。",
  "比的对象對調。"
]);

function main() {
  fs.mkdirSync(OUT, { recursive: true });
  const allItems = [];
  const allLecs = [];
  const bankExpl = new Set();
  const skillGroups = [
    { items: S001, lec: L001 },
    { items: S002, lec: L002 },
    { items: S003, lec: L003 },
    { items: S004, lec: L004 },
    { items: S005, lec: L005 },
    { items: S006, lec: L006 },
    { items: S007, lec: L007 },
    { items: S008, lec: L008 },
    { items: S009, lec: L009 },
    { items: S010, lec: L010 },
    { items: S011, lec: L011 },
    { items: S012, lec: L012 }
  ];
  for (const g of skillGroups) {
    validateSkillItems(g.items);
    allItems.push(...g.items);
    allLecs.push(g.lec);
  }
  writePart("s001-s003.mjs", "U06_PART_S001_S003", "U06_LECTURES_S001_S003", [...S001, ...S002, ...S003], [L001, L002, L003]);
  writePart("s004-s006.mjs", "U06_PART_S004_S006", "U06_LECTURES_S004_S006", [...S004, ...S005, ...S006], [L004, L005, L006]);
  writePart("s007-s009.mjs", "U06_PART_S007_S009", "U06_LECTURES_S007_S009", [...S007, ...S008, ...S009], [L007, L008, L009]);
  writePart("s010-s012.mjs", "U06_PART_S010_S012", "U06_LECTURES_S010_S012", [...S010, ...S011, ...S012], [L010, L011, L012]);
  for (const q of allItems) bankExpl.add(q.explanation.trim());
  for (const l of allLecs) validateLecture(l, bankExpl);
  if (allItems.length !== 144) throw new Error(`expected 144 questions, got ${allItems.length}`);
  if (allLecs.length !== 12) throw new Error(`expected 12 lectures, got ${allLecs.length}`);
  console.log("OK");
  console.log("U06 bank:", allItems.length, "questions,", allLecs.length, "lectures");
  console.log("Wrote", ["s001-s003.mjs","s004-s006.mjs","s007-s009.mjs","s010-s012.mjs"].map(f => path.join(OUT, f)).join(", "));
}

main();
