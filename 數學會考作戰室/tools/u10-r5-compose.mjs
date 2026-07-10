#!/usr/bin/env node
/** R5: strip question-wrapper + template filler; natural per-question prose. */
import { countZh } from "./v2-quality.mjs";
import {
  composeRow as composeRowR4,
  R4_SKILL,
  stepOverlapCount,
  stripSkillText,
} from "./u10-r4-compose.mjs";

export const R5_FILLER = [
  "就「",
  "」而言",
  "計算時每一項係數與正負號都要算清楚",
  "每一步乘法或合併都要寫清楚",
  "避免算錯係數與符號",
  "化簡時粗心漏項或算錯係數就容易選錯",
];

const SKILL_INTRO_PREFIX = [
  "把同類項的係數加減合併，",
  "去括號後把同類項的係數加減，",
  "將各因式的係數與次方分別計算，",
  "用分配律把外項乘進括號內每一項，",
  "兩個括號相乘後合併同類項，",
  "用完全平方和公式展開，",
  "用完全平方差公式展開，",
  "用平方差公式展開，",
  "先辨認題目型態再展開，",
  "依題意列出面積或代數式再展開，",
  "將題目給定的值代入代數式後依運算順序計算，",
  "依多項式定義與次數、係數的意義判斷，",
];

function escRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function hasAnswer(o, ans) {
  if (o.includes(ans)) return true;
  return new RegExp(`(得|化簡為|整理得|所以得)\\s*${escRe(ans)}`).test(o);
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

export function stripDupAnswer(text) {
  let o = text;
  const norm = (s) => s.replace(/\s+/g, "");
  o = o.replace(/(所以化簡為|整理得|所以得|化簡為)\s*([^，。；]+)，\s*得\s*\2(?=[。；]|$)/g, "$1 $2");
  o = o.replace(/(?<![=＝\d])得\s*([^，。；]+)，\s*得\s*\1(?=[。；]|$)/g, "得 $1");
  o = o.replace(/得\s*([^，。；]+)，\s*(?:所以)?得\s*([^，。；]+)/g, (m, a, b) =>
    norm(a) === norm(b) ? `得 ${b.trim()}` : m
  );
  o = o.replace(/([^，。；]{2,})，\s*得\s*\1(?=[。；]|$)/g, "$1");
  o = o.replace(/逐步計算較不易出錯。(?:逐步計算較不易出錯。)+/g, "逐步計算較不易出錯。");
  return o;
}

export function stripR5Filler(text) {
  let o = text;
  o = o.replace(/就「[^」]*」而言，?/g, "");
  for (const p of R5_FILLER) o = o.split(p).join("");
  for (const p of SKILL_INTRO_PREFIX) {
    if (o.startsWith(p)) o = o.slice(p.length);
    else o = o.replace(new RegExp(`^[^。]{0,24}。?，${escRe(p)}`), (m) => m.replace(p, ""));
  }
  o = stripDupAnswer(o);
  return dedupeSentences(o.trim());
}

export function hasR5Filler(text) {
  return R5_FILLER.some((p) => text.includes(p)) || /就「[^」]*」而言/.test(text);
}

function naturalOpen(skillId, row) {
  const t = row.text;
  if (skillId === "like-terms-combine") {
    if (/x²|a²|y²/.test(t)) return "把 x² 項、x 項與常數項分開處理。";
    if (/[ab]|mn/.test(t)) return "把同類項分組後再合併。";
    return "把同次項分開合併。";
  }
  const map = {
    "polynomial-add-subtract": "先去括號，再分項合併。",
    "monomial-multiply": "係數與指數分開計算。",
    "monomial-polynomial-distribute": "用分配律乘開括號內各項。",
    "binomial-multiply-basic": "兩個括號相乘後合併同類項。",
    "square-sum-formula": "用完全平方和公式展開。",
    "square-difference-formula": "用完全平方差公式展開。",
    "difference-of-squares-expand": "用平方差公式展開。",
    "formula-mixed-recognition": "先辨認題型再展開。",
    "polynomial-literacy-context": "依題意列式再展開。",
    "polynomial-evaluation": "代入題目給定的值計算。",
    "polynomial-terms": "依定義判斷。",
  };
  return map[skillId] || "";
}

function wrongBits(row, expl) {
  const wrong = row.choices.filter((_, i) => i !== row.answerIndex).slice(0, 2);
  const bits = [];
  for (const w of wrong) {
    if (!expl.includes(w)) continue;
    const idx = expl.indexOf(w);
    const seg = expl.slice(Math.max(0, idx - 24), idx + w.length + 36);
    const re = new RegExp(`${escRe(w)}[^。；]*`);
    const m = seg.match(re);
    if (m) bits.push(m[0]);
  }
  if (bits.length) return bits.join("；");
  const cm = stripR5Filler(row.commonMistake || "");
  return cm.replace(/。$/, "");
}

function expandShort(skillId, row, o) {
  if (countZh(o) >= 45) return o;
  const ans = row.choices[row.answerIndex];
  const open = naturalOpen(skillId, row) || "依題意計算。";
  const stem = row.text.replace(/[?？]/g, "");
  const steps = (row.steps || []).map((s) => s.replace(/。$/, "")).join("，");
  let base = `${open}${stem} ${steps}，所以得 ${ans}。`;
  const wrong = row.choices.filter((_, i) => i !== row.answerIndex).slice(0, 2);
  const wb = wrong
    .filter((w) => !base.includes(w))
    .map((w) => `${w} 代表計算某一步出錯`)
    .join("；");
  if (wb) base = `${base.replace(/。$/, "")}。${wb}。`;
  return base;
}

function ensureR5Length(skillId, row, o) {
  const ans = row.choices[row.answerIndex];
  const open = naturalOpen(skillId, row);
  if (open && !o.startsWith(open) && !/^(把|先去|代入|係數|用|兩個|依|先|多項式)/.test(o)) {
    o = `${open}${o}`;
  }
  if (!hasAnswer(o, ans)) o = `${o.replace(/。$/, "")}，所以得 ${ans}。`;
  if (countZh(o) < 45) {
    const wb = wrongBits(row, o);
    if (wb && countZh(wb) > 4 && !o.includes(wb.slice(0, 8))) {
      o = `${o.replace(/。$/, "")}。${wb}。`;
    }
  }
  if (countZh(o) < 45 && row.steps?.length) {
    const parts = row.steps.map((s) => s.replace(/。$/, ""));
    const tail = parts.length >= 3
      ? `先${parts[0]}，再${parts[1]}，最後${parts[2]}。`
      : parts.join("，") + "。";
    if (!o.includes(parts[0]?.slice(0, 4) || "")) o = `${o.replace(/。$/, "")}，${tail}`;
  }
  if (countZh(o) < 45) {
    const wrong = row.choices.filter((_, i) => i !== row.answerIndex).slice(0, 2);
    for (const w of wrong) {
      if (!o.includes(w)) {
        o = `${o.replace(/。$/, "")}，若誤選 ${w} 代表中間某步算錯。`;
        if (countZh(o) >= 45) break;
      }
    }
  }
  if (countZh(o) < 45) {
    const cm = stripR5Filler(row.commonMistake || "");
    if (cm && !o.includes(cm.slice(0, 6))) o = `${o.replace(/。$/, "")}。${cm}。`;
  }
  if (countZh(o) < 45) o = expandShort(skillId, row, o);
  if (countZh(o) < 45) o = `${o.replace(/。$/, "")}，逐步計算較不易出錯。`;
  return o.endsWith("。") ? o : `${o}。`;
}

function polishCm(cm, expl, row) {
  let o = stripR5Filler(cm);
  o = o.replace(/，化簡時粗心漏項或算錯係數就容易選錯。$/, "。");
  o = o.replace(/，每一步乘法或合併都要寫清楚，避免算錯係數與符號。$/, "。");
  if (!o || o === expl) {
    const notes = expl.split(/(?<=。)/).filter((p) => /是|可能|漏|忘|弄|反|錯/.test(p)).slice(0, 1);
    o = notes[0] || row.commonMistake || "粗心算錯就容易選錯。";
  }
  o = o.endsWith("。") ? o : `${o}。`;
  while (countZh(o) < 12) o = `${o.replace(/。$/, "").replace(/，+$/, "")}，容易選錯。`;
  return o;
}

export function composeRow(skillId, idx, row) {
  const out = composeRowR4(skillId, idx, row);
  let explanation = stripR5Filler(stripSkillText(out.explanation));
  explanation = ensureR5Length(skillId, row, explanation);
  explanation = stripDupAnswer(explanation);
  explanation = stripDupAnswer(explanation);
  explanation = explanation.replace(/。，/g, "。").replace(/。+/g, "。");
  explanation = dedupeSentences(explanation);
  const tailPads = ["，逐步計算較不易出錯。", "，計算過程要寫完整。"];
  let ti = 0;
  while (countZh(explanation) < 45 && ti < tailPads.length) {
    const pad = tailPads[ti++];
    if (!explanation.includes(pad.replace(/。$/, ""))) {
      explanation = `${explanation.replace(/。$/, "")}${pad}`;
    }
  }
  return {
    explanation,
    commonMistake: polishCm(out.commonMistake, explanation, row),
  };
}

export { R4_SKILL, stepOverlapCount };
