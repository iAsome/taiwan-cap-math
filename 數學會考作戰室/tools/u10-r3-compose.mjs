#!/usr/bin/env node
/** Compose natural per-question explanation/commonMistake without copying steps. */
import { countZh } from "./v2-quality.mjs";
import { stripPads } from "./u10-r2-strip.mjs";

const R3_CUT = [
  "接著",
  "此題所求為",
  "把代入與運算步驟寫完整即可",
  "把同類項合併的步驟寫清楚即可",
  "把乘法展開與合併步驟寫清楚即可",
  "依題意逐步計算即可",
  "此錯法會讓本題結果不正確",
  "計算時每一項係數與符號都要看清楚",
];

export function cutMechanical(raw) {
  let o = raw;
  for (const p of R3_CUT) {
    const i = o.indexOf(p);
    if (i > 0) o = o.slice(0, i);
  }
  return stripPads(o);
}

function norm(s) {
  return s.replace(/。$/, "").trim();
}

function escRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

export function dropStepCopies(expl, steps) {
  let o = expl;
  for (const s of steps || []) {
    const t = norm(s);
    if (!t || t.length < 4) continue;
    o = o.replace(new RegExp(`${escRe(t)}。`, "g"), "");
    o = o.replace(new RegExp(`(?<=。)${escRe(t)}(?=。)`, "g"), "");
  }
  o = o.replace(/。+/g, "。").replace(/，+/g, "，").trim();
  o = o.replace(/=\s*=\s*/g, "= ").replace(/=\s+(?=[。；])/g, "");
  return o;
}

function dedupeSentences(text) {
  const parts = text.split(/(?<=。)/).map((s) => s.trim()).filter(Boolean);
  const seen = new Set();
  const out = [];
  for (const p of parts) {
    if (!seen.has(p)) {
      seen.add(p);
      out.push(p);
    }
  }
  return out.join("");
}

function wrongNotes(expl) {
  const parts = expl.split(/(?<=。)|[；;]/).map((s) => s.trim()).filter(Boolean);
  const notes = [];
  for (const p of parts) {
    const t = p.endsWith("。") ? p : `${p}。`;
    if (/是|可能|則|像|誤|漏|忘|弄|反|錯|硬|搞|聯想|沒乘|沒變|少乘|少加|當成|只寫|只算/.test(t) && countZh(t) <= 28) notes.push(t);
  }
  return notes;
}

function trimAtStepEcho(expl, steps) {
  let o = cutMechanical(expl);
  const stepSet = new Set((steps || []).map(norm));
  const parts = o.split(/(?<=。)/).map((s) => s.trim()).filter(Boolean);
  const kept = [];
  let seenWrong = false;
  const stepCounts = new Map();
  for (const p of parts) {
    const t = norm(p);
    const isStep = stepSet.has(t);
    const isWrong = /是|可能|則|像|誤|漏|忘|弄|反|錯|硬|搞|聯想|沒乘|沒變|少乘|少加|當成|只寫|只算|相加而非|弄成/.test(p);
    if (isStep) {
      const n = (stepCounts.get(t) || 0) + 1;
      stepCounts.set(t, n);
      if (seenWrong || n >= 2) break;
    }
    if (isWrong) seenWrong = true;
    kept.push(p.endsWith("。") ? p : `${p}。`);
  }
  o = kept.join("").trim();
  if (o && !o.endsWith("。")) o += "。";
  return o;
}

const SKILL_TIP = {
  "polynomial-evaluation": "代入時依運算順序先乘除後加減，並把常數項一併算進去。",
  "like-terms-combine": "合併時只改係數，字相同、次方相同才算同類項。",
  "polynomial-add-subtract": "去括號時每一項符號都要處理，再合併同次項。",
  "monomial-multiply": "係數相乘、同底指數相加，字不同不能合併。",
  "monomial-polynomial-distribute": "分配律要乘到括號內每一項，再合併同類項。",
  "binomial-multiply-basic": "兩括號相乘要交叉相乘四項，再合併同類項。",
  "square-sum-formula": "完全平方和要有中間項 2ab，三項缺一不可。",
  "square-difference-formula": "完全平方差的中間項是減 2ab，三項都要算到。",
  "difference-of-squares-expand": "平方差展開後中間項會抵消，只剩兩個平方相減。",
  "formula-mixed-recognition": "先辨識是平方和、平方差還是平方差公式，再展開。",
  "polynomial-literacy-context": "文字題先依題意列式，再展開化簡。",
  "polynomial-terms": "看項數、次數與係數時，要依定義逐項判斷。",
};

function skillPad(skillId, row) {
  const ans = row.choices[row.answerIndex];
  const pads = {
    "polynomial-evaluation": `代入後依運算順序化簡，可得 ${ans}。`,
    "like-terms-combine": `同類項係數加減後，最簡式為 ${ans}。`,
    "polynomial-add-subtract": `去括號合併後，最簡式為 ${ans}。`,
    "monomial-multiply": `係數相乘、指數相加，得 ${ans}。`,
    "monomial-polynomial-distribute": `分配律展開整理後，得 ${ans}。`,
    "binomial-multiply-basic": `四項相乘合併後，展開式為 ${ans}。`,
    "square-sum-formula": `完全平方展開整理後，得 ${ans}。`,
    "square-difference-formula": `完全平方展開整理後，得 ${ans}。`,
    "difference-of-squares-expand": `平方差公式展開後，得 ${ans}。`,
    "formula-mixed-recognition": `辨識型態並展開，得 ${ans}。`,
    "polynomial-literacy-context": `依題意列式展開化簡，得 ${ans}。`,
    "polynomial-terms": `依定義判斷，應選 ${ans}。`,
  };
  return pads[skillId] || `計算整理後，得 ${ans}。`;
}

/** Hand-polished overrides keyed skillId#index (0-based). */
export const HAND = {
  "polynomial-evaluation#6": {
    explanation:
      "將 x=1/2 代入 4x+3，先算 4×1/2=2，再加上 3 得 5。若得 4 通常是忘加常數 3，或把 4×(1/2) 誤算成 4；得 2 則只算了 4x 這一段，沒有把後面的 +3 一併完成。分數代入時要先完成乘法，再加減常數項。",
    commonMistake: "分數代入時 4×(1/2) 算錯，或只算 4x 而漏加常數 3。",
  },
  "like-terms-combine#4": {
    explanation:
      "ba 與 ab 只是字母順序不同，仍代表同一個乘積，所以 2ab、5ba、−ab 可以合併。係數為 2+5−1=6，因此化簡為 6ab。7ab 是忘記減掉最後的 ab；6a²b² 則把同類項合併誤當成字母相乘。",
    commonMistake: "看到 ba 就以為和 ab 不同類，導致少合併 5ba 這一項。",
  },
  "monomial-multiply#9": {
    explanation:
      "三個因式 (−x²)·3x·(−2x⁴) 相乘：係數 (−1)×3×(−2)=6，指數 2+1+4=7，得 6x⁷。−6x⁷ 是符號弄錯；6x⁶ 是指數少加；−5x⁷ 則誤把係數相加。每一個因式都要乘進去，不能漏掉其中一個。",
    commonMistake: "三個因式相乘時漏算其中一個負號或 x 的次方。",
  },
};

function stripStandaloneSteps(expl, steps) {
  const stepSet = new Set((steps || []).map(norm));
  const parts = expl.split(/(?<=。)/).map((s) => s.trim()).filter(Boolean);
  const kept = parts.filter((p) => !stepSet.has(norm(p)));
  let o = kept.map((p) => (p.endsWith("。") ? p : `${p}。`)).join("").trim();
  if (o && !o.endsWith("。")) o += "。";
  return o || expl;
}

function buildExpl(skillId, row) {
  let o = dedupeSentences(trimAtStepEcho(row.explanation, row.steps));
  if (stepOverlapCount(o, row.steps) >= 2) o = stripStandaloneSteps(o, row.steps);
  const clauses = o.split(/[；;]/).map((s) => s.trim()).filter(Boolean);
  if (clauses.length) {
    o = clauses.map((c) => (c.endsWith("。") ? c : `${c}。`)).join("");
  }
  if (!o.endsWith("。")) o += "。";
  if (countZh(o) < 45) o += skillPad(skillId, row);
  if (countZh(o) < 45 && SKILL_TIP[skillId]) o += SKILL_TIP[skillId];
  if (countZh(o) < 45) o += `化簡整理後應得 ${row.choices[row.answerIndex]}。`;
  return dedupeSentences(stripPads(o));
}

function cleanCmRaw(raw) {
  return raw
    .replace(/，此錯法會讓本題結果不正確。$/, "。")
    .replace(/，容易把係數或符號算錯。$/, "。")
    .split("接著")[0]
    .split("此題所求為")[0]
    .replace(/，$/, "。")
    .trim();
}

function buildCm(skillId, row, expl) {
  let o = dedupeSentences(cleanCmRaw(row.commonMistake));
  if (countZh(o) >= 12 && o !== expl) return o.endsWith("。") ? o : `${o}。`;
  const notes = wrongNotes(expl);
  if (notes.length >= 2) {
    const combo = `${notes[0].replace(/。$/, "")}；${notes[1].replace(/。$/, "")}。`;
    if (countZh(combo) >= 12 && combo !== expl) return combo;
  }
  for (const n of notes) {
    if (countZh(n) >= 12 && n !== expl) return n;
  }
  if (notes.length) {
    const n = notes[0].endsWith("。") ? notes[0] : `${notes[0]}。`;
    if (countZh(n) >= 12) return n;
    const tip = (SKILL_TIP[skillId] || "代入與運算順序要寫清楚。").replace(/。$/, "");
    return `${n.replace(/。$/, "")}，${tip}。`;
  }
  const fb = SKILL_TIP[skillId] || "代入與運算順序要寫清楚，計算粗心容易選錯。";
  return fb.endsWith("。") ? fb : `${fb}。`;
}

export function composeRow(skillId, idx, row) {
  const key = `${skillId}#${idx}`;
  if (HAND[key]) return HAND[key];
  const explanation = buildExpl(skillId, row);
  const commonMistake = buildCm(skillId, row, explanation);
  return { explanation, commonMistake };
}

export function stepOverlapCount(expl, steps) {
  let n = 0;
  for (const s of steps || []) {
    const t = norm(s);
    if (t.length < 4) continue;
    const re = new RegExp(`(^|[。；;])\\s*${escRe(t)}\\s*(?=[。；;]|$)`);
    if (re.test(expl)) n++;
  }
  return n;
}
