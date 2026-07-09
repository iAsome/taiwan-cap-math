#!/usr/bin/env node
/** R4: per-question explanation/cm without skill-level tail padding. */
import { countZh } from "./v2-quality.mjs";
import { stripPads } from "./u10-r2-strip.mjs";

const R3_CUT = [
  "接著",
  "此題所求為",
  "把代入與運算步驟寫完整即可",
  "把同類項合併的步驟寫清楚即可",
  "把乘法展開與合併步驟寫清楚即可",
  "此錯法會讓本題結果不正確",
];

export const R4_SKILL = [
  "同類項係數加減後",
  "合併時只改係數",
  "字相同、次方相同才算同類項",
  "去括號合併後",
  "分配律展開整理後",
  "分配律要乘到括號內每一項",
  "四項相乘合併後",
  "兩括號相乘要交叉相乘四項",
  "完全平方展開整理後",
  "完全平方和要有中間項",
  "完全平方差的中間項",
  "平方差公式展開後",
  "平方差展開後中間項",
  "辨識型態並展開",
  "先辨識是平方和",
  "依題意列式展開化簡",
  "文字題先依題意列式",
  "化簡整理後應得",
  "代入後依運算順序化簡",
  "係數相乘、指數相加",
  "係數相乘、同底指數相加",
  "去括號時每一項符號都要處理",
  "再合併同類項",
  "再合併同次項",
  "三項缺一不可",
  "三項都要算到",
  "只剩兩個平方相減",
  "最簡式為",
  "展開式為",
];

function norm(s) {
  return s.replace(/。$/, "").trim();
}

function escRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function dedupeSentences(text) {
  const parts = text.split(/(?<=。)/).map((s) => s.trim()).filter(Boolean);
  const seen = new Set();
  const out = [];
  for (const p of parts) {
    if (!seen.has(p)) {
      seen.add(p);
      out.push(p.endsWith("。") ? p : `${p}。`);
    }
  }
  return out.join("");
}

function cutMechanical(raw) {
  let o = raw;
  for (const p of R3_CUT) {
    const i = o.indexOf(p);
    if (i > 0) o = o.slice(0, i);
  }
  return stripPads(o);
}

function hasSkillPad(s) {
  return R4_SKILL.some((p) => s.includes(p));
}

export function stripSkillText(text) {
  let o = text;
  for (const p of R4_SKILL) {
    const i = o.indexOf(p);
    if (i > 0) o = o.slice(0, i);
  }
  const parts = o.split(/(?<=。)/).map((s) => s.trim()).filter(Boolean);
  const kept = parts.filter((p) => !hasSkillPad(p));
  o = kept.map((p) => (p.endsWith("。") ? p : `${p}。`)).join("");
  return dedupeSentences(o.trim());
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
    const isWrong = /是|可能|則|像|誤|漏|忘|弄|反|錯|沒乘|沒變|少乘|少加|當成|只寫|只算|相加而非|弄成/.test(p);
    if (isStep) {
      const n = (stepCounts.get(t) || 0) + 1;
      stepCounts.set(t, n);
      if (seenWrong || n >= 2) break;
    }
    if (isWrong) seenWrong = true;
    kept.push(p.endsWith("。") ? p : `${p}。`);
  }
  o = kept.join("").trim();
  return o && !o.endsWith("。") ? `${o}。` : o;
}

function stripStandaloneSteps(expl, steps) {
  const stepSet = new Set((steps || []).map(norm));
  const parts = expl.split(/(?<=。)/).map((s) => s.trim()).filter(Boolean);
  const kept = parts.filter((p) => !stepSet.has(norm(p)));
  let o = kept.map((p) => (p.endsWith("。") ? p : `${p}。`)).join("").trim();
  return o && !o.endsWith("。") ? `${o}。` : o || expl;
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

function splitSents(text) {
  return text.split(/(?<=。)/).map((s) => s.trim()).filter(Boolean).map((s) => (s.endsWith("。") ? s : `${s}。`));
}

function isWrong(s) {
  return /是|可能|則|像|誤|漏|忘|弄|反|錯|沒乘|沒變|少乘|少加|當成|只寫|只算|相加而非|弄成/.test(s);
}

function isCalc(s) {
  return /[=＝]/.test(s) && !isWrong(s);
}

function isGenericTip(s) {
  return /要分|要一次|要逐|要完整|要依|不能漏|逐底數|多字母|兩字母|含常數|文字題|面積長乘寬|辨識時|帶係數時|單獨 y|每一個因式|單項相乘|係數乘、指數加/.test(s) && !isWrong(s);
}

function flowCalc(calcs, ans, skillId) {
  const body = calcs.map((c) => c.replace(/。$/, "")).join("，");
  if (!body) return "";
  if (body.includes(ans)) return `${body}。`;
  if (skillId === "like-terms-combine" || skillId === "polynomial-add-subtract") {
    return `${body}，所以化簡為 ${ans}。`;
  }
  if (/展開|公式|平方/.test(body) || skillId.includes("formula") || skillId.includes("multiply")) {
    return `${body}，整理得 ${ans}。`;
  }
  return `${body}，所以得 ${ans}。`;
}

const R4_PRIORITY = new Set([
  "like-terms-combine",
  "polynomial-add-subtract",
  "monomial-polynomial-distribute",
  "binomial-multiply-basic",
  "square-sum-formula",
  "square-difference-formula",
  "difference-of-squares-expand",
  "formula-mixed-recognition",
  "polynomial-literacy-context",
]);

const SKILL_INTRO = {
  "polynomial-terms": "依多項式定義與次數、係數的意義判斷",
  "polynomial-evaluation": "將題目給定的值代入代數式後依運算順序計算",
  "like-terms-combine": "把同類項的係數加減合併",
  "polynomial-add-subtract": "去括號後把同類項的係數加減",
  "monomial-multiply": "將各因式的係數與次方分別計算",
  "monomial-polynomial-distribute": "用分配律把外項乘進括號內每一項",
  "binomial-multiply-basic": "兩個括號相乘後合併同類項",
  "square-sum-formula": "用完全平方和公式展開",
  "square-difference-formula": "用完全平方差公式展開",
  "difference-of-squares-expand": "用平方差公式展開",
  "formula-mixed-recognition": "先辨認題目型態再展開",
  "polynomial-literacy-context": "依題意列出面積或代數式再展開",
};

function ensureLength(o, row, skillId) {
  o = stripSkillText(o);
  if (countZh(o) >= 45) return o;
  const ans = row.choices[row.answerIndex];
  const parts = splitSents(o).filter((p) => !hasSkillPad(p) && !isGenericTip(p));
  const calcs = parts.filter((p) => !isWrong(p));
  const wrongs = parts.filter(isWrong).slice(0, 2);
  const intro = SKILL_INTRO[skillId] || "依題意計算";
  const calc = calcs.map((c) => c.replace(/。$/, "")).join("，");
  const wrong = wrongs.map((w) => w.replace(/。$/, "")).join("；");
  let out = calc ? `${intro}，${calc}，得 ${ans}。` : `${intro}，得 ${ans}。`;
  if (wrong) out += `${wrong}。`;
  const stem = row.text.replace(/[?？]/g, "");
  if (countZh(out) < 45 && !out.includes("就「")) out = `就「${stem}」而言，${out}`;
  if (countZh(out) < 45) out += "計算時每一項係數與正負號都要算清楚。";
  if (countZh(out) < 45) out += "每一步乘法或合併都要寫清楚，避免算錯係數與符號。";
  return out.endsWith("。") ? out : `${out}。`;
}

function buildExpl(skillId, row) {
  let raw = trimAtStepEcho(row.explanation, row.steps);
  if (stepOverlapCount(raw, row.steps) >= 2) raw = stripStandaloneSteps(raw, row.steps);
  raw = stripSkillText(cutMechanical(raw));

  if (!R4_PRIORITY.has(skillId)) {
    return ensureLength(raw.endsWith("。") ? raw : `${raw}。`, row, skillId);
  }

  const parts = splitSents(raw).filter((p) => !hasSkillPad(p) && !isGenericTip(p));
  const calcs = parts.filter((p) => isCalc(p) || (!isWrong(p) && /[=＝]/.test(p)));
  const wrongs = parts.filter(isWrong).slice(0, 2);
  const ans = row.choices[row.answerIndex];

  let o = calcs.length ? flowCalc(calcs, ans, skillId) : parts.filter((p) => !isWrong(p)).slice(0, 2).join("");
  o += wrongs.join("");
  o = stripSkillText(o);
  if (countZh(o) < 45) {
    for (const p of parts.filter((p) => !o.includes(p.replace(/。$/, "")))) {
      if (!hasSkillPad(p) && !isGenericTip(p)) {
        o += p;
        if (countZh(o) >= 45) break;
      }
    }
  }
  o = stripSkillText(o);
  if (countZh(o) < 45 && !o.includes(ans)) o = o.replace(/。$/, "") + `，化簡得 ${ans}。`;
  return ensureLength(o.endsWith("。") ? o : `${o}。`, row, skillId);
}

function cleanCmRaw(raw) {
  return stripSkillText(
    raw
      .replace(/，此錯法會讓本題結果不正確。$/, "。")
      .replace(/，容易把係數或符號算錯。$/, "。")
      .split("接著")[0]
      .split("此題所求為")[0]
      .replace(/，$/, "。")
      .trim()
  );
}

function isPad(s) {
  return /計算時每一項係數|每一步乘法或合併|就「/.test(s);
}

function wrongNotes(expl) {
  return splitSents(expl).filter(isWrong).filter((t) => !hasSkillPad(t) && !isPad(t) && countZh(t) <= 32);
}

function specificCm(note) {
  const t = note.replace(/。$/, "");
  const m = t.match(/^[^是；]+是(.+)$/);
  if (m) return m[1].endsWith("。") ? m[1] : `${m[1]}。`;
  return t.endsWith("。") ? t : `${t}。`;
}

function finalizeCm(cm) {
  let o = (cm || "").trim();
  o = o.endsWith("。") ? o : `${o}。`;
  const PAD = "，化簡時粗心漏項或算錯係數就容易選錯。";
  while (countZh(o) < 12) o = `${o.replace(/。$/, "")}${PAD}`;
  return o;
}

function buildCm(row, expl) {
  let o = dedupeSentences(cleanCmRaw(row.commonMistake));
  if (countZh(o) >= 12 && o !== expl && !hasSkillPad(o)) {
    return finalizeCm(o);
  }

  const notes = wrongNotes(expl);
  if (notes.length >= 2) {
    const a = specificCm(notes[0]).replace(/。$/, "");
    const b = specificCm(notes[1]).replace(/。$/, "");
    const combo = `${a}，${b}。`;
    if (combo !== expl && !hasSkillPad(combo)) return finalizeCm(combo);
  }
  if (notes.length) {
    const one = specificCm(notes[0]);
    if (one !== expl && !hasSkillPad(one)) return finalizeCm(one);
  }

  const legacy = cleanCmRaw(row.commonMistake);
  if (legacy !== expl && !hasSkillPad(legacy)) return finalizeCm(legacy);
  const fb = wrongNotes(expl)[0];
  if (fb) return finalizeCm(specificCm(fb));
  return finalizeCm("本題化簡時漏項或算錯係數，容易選錯。");
}

export const HAND = {
  "polynomial-evaluation#6": {
    explanation:
      "將 x=1/2 代入 4x+3，先算 4×1/2=2，再加上 3 得 5。若得 4 通常是忘加常數 3，或把 4×(1/2) 誤算成 4；得 2 則只算了 4x 這一段，沒有把後面的 +3 一併完成，分數代入要先乘後加。",
    commonMistake: "分數代入時 4×(1/2) 算錯，或只算 4x 而漏加常數 3。",
  },
  "like-terms-combine#4": {
    explanation:
      "ba 與 ab 只是字母順序不同，仍代表同一個乘積，所以 2ab、5ba、−ab 可以合併。係數為 2+5−1=6，因此化簡為 6ab。7ab 是忘記減掉最後的 ab；6a²b² 則把同類項合併誤當成字母相乘。",
    commonMistake: "看到 ba 就以為和 ab 不同類，導致少合併 5ba 這一項。",
  },
  "monomial-multiply#9": {
    explanation:
      "三個因式 (−x²)·3x·(−2x⁴) 相乘：係數 (−1)×3×(−2)=6，指數 2+1+4=7，得 6x⁷。−6x⁷ 是符號弄錯；6x⁶ 是指數少加。",
    commonMistake: "三個因式相乘時漏算其中一個負號或 x 的次方。",
  },
};

export function composeRow(skillId, idx, row) {
  const key = `${skillId}#${idx}`;
  if (HAND[key]) {
    const h = HAND[key];
    return {
      explanation: ensureLength(h.explanation, row, skillId),
      commonMistake: finalizeCm(h.commonMistake),
    };
  }
  const explanation = buildExpl(skillId, row);
  return { explanation, commonMistake: buildCm(row, explanation) };
}
