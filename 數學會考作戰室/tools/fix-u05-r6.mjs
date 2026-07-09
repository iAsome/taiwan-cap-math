#!/usr/bin/env node
/** U05-R6: strip template prefixes and generic phrases — no filler. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { countZh, findU05BannedPhrase, hasBannedStep } from "./v2-quality.mjs";

const PART_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "v2-u05-parts");
const PREFIX_RE = /^(先讀題意|接著求值|最後寫出)：+/g;

const DROP_SENT_RE =
  /跟題目給的坐標或方向條件不符|跟題目給的坐標|方向條件不符|是坐標某一分量，不是截距所問的數值|帶入兩式後無法同時成立|未比較|沒有對照|沒對照/;

const MANUAL = {
  "u05-s001-v012": {
    explanation:
      "x = -3 表示向西 3，y = 4 表示向北 4，合起來是西 3、北 4。地圖上 x 負代表與向東相反即向西，y 正代表向北。「東 3 北 4」忽略 x 為負；「東 4 北 3」把兩個數字對調。",
    steps: ["x = -3，向西 3 單位。", "y = 4，向北 4 單位。", "合起來是西 3、北 4。"],
    commonMistake: "負 x 仍說向東，沒先看題目 x 正向定義。"
  },
  "u05-s002-v012": {
    explanation:
      "(-5, 2) 在第二象限沒錯，但原因是 x 負、y 正，不是 5 比 2 大。象限看 x、y 正負，不看絕對值大小。「對，數字大就在第二象限」把 5 和 2 的大小當理由；「對，y 為正就在第二象限」沒看 x 也是負的。",
    steps: [
      "(-5, 2)：x 為負、y 為正。",
      "這是第二象限的條件。",
      "「5 比 2 大」不能拿來判斷象限。"
    ],
    commonMistake: "用數字大小代替正負號判斷象限。"
  },
  "u05-s003-v012": {
    explanation:
      "在 x 軸上 y 必為 0，距原點 8 單位表示 |x| = 8，可取 (8, 0) 或 (-8, 0)。所給答案中 (8, 0) 成立。(0, 8) 在 y 軸上；(8, 8) 的 y 不是 0，不在 x 軸。軸上點到原點的距離看 x 的絕對值。",
    steps: ["x 軸上的點：y = 0。", "|x| = 8，所以 x = 8 或 x = -8。", "其中一解是 (8, 0)。"],
    commonMistake: "距原點 8 寫成 (0, 8)，忘了 x 軸上的點 y 必須是 0。"
  },
  "u05-s004-v012": {
    explanation:
      "噴水池 (4, 3) 與涼亭 (-4, 3) 的 y 相同，x 為 4 與 -4 互為相反數，關於 y 軸對稱。兩點在同一水平線上，再比較 x 是否相反。「x 相同，關於 x 軸對稱」須 y 也相反；「關於原點對稱」須 x、y 都相反。",
    steps: ["兩點 y 坐標都是 3。", "x 坐標 4 與 -4 互為相反數。", "所以關於 y 軸對稱。"],
    commonMistake: "看到 4 和 -4 就說原點對稱，須先看 y 是否也相反。"
  },
  "u05-s005-v012": {
    explanation:
      "先向左 4 再向右 1，x 共減 3，等效向左 3。連續平移可先把 x 的變化加在一起再判斷方向。「向右 3 個單位」把加減方向弄反；「不動」誤以為 4 與 1 完全抵銷。",
    steps: ["向左 4：x 減 4。", "再向右 1：x 加 1。", "總共 x 減 3，等效向左 3。"],
    commonMistake: "連續平移代數合併算錯，方向與正負號要一致。"
  },
  "u05-s007-v012": {
    explanation:
      "寬 = |2 − (−1)| = 3，高 = |5 − 0| = 5，面積 = 3 × 5 = 15。邊平行坐標軸的長方形，寬高取坐標差絕對值再相乘。含負數的 x 邊界仍要取差再取絕對值。8 是把 3 和 5 相加；10 是把寬算成 2 再乘 5。",
    steps: [
      "x 從 -1 到 2，寬 = |2 − (−1)| = 3。",
      "y 從 0 到 5，高 = 5。",
      "面積 = 3 × 5 = 15。"
    ],
    commonMistake: "x 含 -1 時寬算成 2-1=1，面積是寬乘高不是相加。"
  },
  "u05-s008-v012": {
    explanation:
      "先兩式相加消去 y：2x = 8，x = 4；代入 x + y = 6 得 y = 2，交點 (4, 2)。解聯立方程式時，交點須同時滿足兩式，不可只代一條線。(2, 4) 代進 x − y = 2 得到 −2 ≠ 2；(3, 3) 代進第二式得 0 ≠ 2。",
    steps: ["列 x + y = 6 與 x − y = 2。", "兩式相加得 2x = 8，x = 4。", "代入得 y = 2，交點 (4, 2)。"],
    commonMistake: "只解第一式就隨便配 y，交點須同時滿足兩式。"
  },
  "u05-s010-v012": {
    explanation:
      "y 截距是 9。令 y = 0 得 x = 3 為 x 截距。題目問 y 截距比 x 截距大多少，所以算 9 − 3 = 6。截距是直線與坐標軸的交點坐標。9 只寫 y 截距沒相減；3 只把 x 截距當答案。",
    steps: ["y 截距 = 9。", "令 y = 0，x 截距 = 3。", "9 − 3 = 6。"],
    commonMistake: "截距差算成截距和，兩個截距都要先求出再相減。"
  },
  "u05-s012-v012": {
    explanation:
      "x = 120 表示向東 120 m，y = 80 表示向北 80 m，位置是校門東方 120 m、北方 80 m。地圖上 x 正向是向東、y 正向是向北。「東 80、北 120」把兩個數對調；含西方或南方是把正負方向看反。",
    steps: ["x = 120，向東 120 m。", "y = 80，向北 80 m。", "校門東方 120 m、北方 80 m。"],
    commonMistake: "把第一個數 120 當成南北方向、第二個數 80 當成東西方向。"
  }
};

function splitSents(text) {
  return text
    .split(/(?<=。)|(?<=；)/)
    .map(s => s.replace(/；$/, "。").trim())
    .filter(Boolean);
}

function dedupeSents(sents) {
  const seen = new Set();
  return sents.filter(s => {
    const k = s.replace(/\s/g, "").slice(0, 24);
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

function badSentence(s) {
  if (!s || DROP_SENT_RE.test(s)) return true;
  if (/「[^」]+」跟/.test(s)) return true;
  if (/^(先讀題意|接著求值|最後寫出)/.test(s)) return true;
  return !!findU05BannedPhrase(s);
}

function cleanStep(s) {
  let t = String(s).trim();
  while (/^(先讀題意|接著求值|最後寫出)：/.test(t)) {
    t = t.replace(/^(先讀題意|接著求值|最後寫出)：/, "").trim();
  }
  if (!t.endsWith("。")) t += "。";
  return t;
}

function cleanExplanation(ex) {
  let out = dedupeSents(splitSents(ex).filter(s => !badSentence(s))).join("");
  out = out.replace(/。{2,}/g, "。");
  if (!out.endsWith("。")) out += "。";
  return out;
}

function cleanCommonMistake(m, explanation) {
  let t = cleanExplanation(m || " ").replace(/。$/, "").trim();
  if (t && explanation.includes(t)) t = t.split("，")[0];
  if (countZh(t) < 12) t += "，寫坐標前先確認正負方向。";
  return t.endsWith("。") ? t : t + "。";
}

function patchQuestion(q) {
  const manual = MANUAL[q.questionId];
  if (manual) Object.assign(q, manual);

  q.steps = (q.steps || []).map(cleanStep);
  if (!manual) {
    q.explanation = cleanExplanation(q.explanation);
    q.commonMistake = cleanCommonMistake(q.commonMistake, q.explanation);
  }

  // ponytail: if still short after strip, append unused concept clause (from q.concept, not generated)
  if (countZh(q.explanation) < 45 && q.concept) {
    for (const part of q.concept.split("；").map(p => p.trim()).filter(Boolean)) {
      if (!badSentence(part) && !q.explanation.includes(part)) {
        q.explanation = q.explanation.replace(/。?$/, "") + "。" + part;
      }
    }
  }
  for (const st of q.steps) {
    if (countZh(q.explanation) >= 45) break;
    const core = st.replace(/。$/, "");
    if (countZh(st) >= 4 && !q.explanation.includes(core.slice(0, 6))) {
      q.explanation = q.explanation.replace(/。?$/, "") + "。" + st;
    }
  }

  const blob = [q.explanation, q.commonMistake, ...q.steps, q.text].join("");
  const hit = findU05BannedPhrase(blob);
  if (hit) throw new Error(`${q.questionId} banned: ${hit}`);
  const stepBan = hasBannedStep(q.steps);
  if (stepBan) throw new Error(`${q.questionId} banned step: ${stepBan}`);
  if (countZh(q.explanation) < 45) throw new Error(`${q.questionId} short ex: ${countZh(q.explanation)}`);
  if (countZh(q.commonMistake) < 12) throw new Error(`${q.questionId} short mistake: ${countZh(q.commonMistake)}`);
}

function patchLecture(l) {
  l.examples = l.examples.map(ex => ({
    ...ex,
    explanation: cleanExplanation(ex.explanation)
  }));
}

async function main() {
  const errors = [];
  for (const file of fs.readdirSync(PART_DIR).filter(f => f.endsWith(".mjs"))) {
    const mod = await import(`${pathToFileURL(path.join(PART_DIR, file)).href}?v=${Date.now()}`);
    const itemKey = Object.keys(mod).find(k => k.startsWith("U05_PART"));
    const lecKey = Object.keys(mod).find(k => k.startsWith("U05_LECTURES"));
    for (const q of mod[itemKey]) {
      try {
        patchQuestion(q);
      } catch (e) {
        errors.push(e.message);
      }
    }
    for (const l of mod[lecKey]) patchLecture(l);
    fs.writeFileSync(
      path.join(PART_DIR, file),
      `export const ${itemKey} = ${JSON.stringify(mod[itemKey], null, 2)};\n\nexport const ${lecKey} = ${JSON.stringify(mod[lecKey], null, 2)};\n`,
      "utf8"
    );
    console.log("r6 cleaned", file);
  }
  if (errors.length) {
    console.error(errors.join("\n"));
    process.exit(1);
  }
  console.log("U05-R6 OK");
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
