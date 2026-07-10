/** Shared U09 semantic duplicate detection for audit + verifier. Report-only. */
import { countZh } from "./v2-quality.mjs";

export const U09_SEMANTIC_ALLOWLIST = [
  // Mathematically necessary pairs — max 20; no known duplicate rule restatements.
];

export const ROLE_SIGNATURES = {
  compare: ["比較", "相減", "差", "指定", "鎖定", "只使用", "只能拿"],
  total: ["加總", "合計", "全部", "都要", "納入", "列入", "漏算", "漏掉"],
  maxmin: ["最大", "最高", "最小", "最低", "比較全部"],
  mean: ["平均", "總和", "個數", "除以"],
  mode: ["眾數", "出現次數", "最多次"],
  range: ["全距", "最大值", "最小值"],
  weighted: ["加權", "權重", "占比", "分別乘", "再加總"]
};

const CONTAIN_THRESH = 0.50;
const BIGRAM_THRESH = 0.35;

export function splitExplanationSentences(text) {
  return text.split(/[。！？；]/).map(s => s.trim().replace(/[\u0020\u3000]+/g, "")).filter(Boolean);
}

export function normalizeSemanticText(s) {
  return s.replace(/[\d+\-−×÷=().,，、%元分人cmgkg％\s]/gi, "");
}

export function bigrams(s) {
  const out = [];
  for (let i = 0; i < s.length - 1; i++) out.push(s.slice(i, i + 2));
  return out;
}

export function bigramSimilarity(a, b) {
  const A = new Set(bigrams(a));
  const B = new Set(bigrams(b));
  if (!A.size || !B.size) return 0;
  let inter = 0;
  for (const x of A) if (B.has(x)) inter++;
  return inter / (A.size + B.size - inter);
}

export function sharedRoleSignatures(a, b) {
  const out = [];
  for (const [sig, words] of Object.entries(ROLE_SIGNATURES)) {
    if (words.some(w => a.includes(w)) && words.some(w => b.includes(w))) out.push(sig);
  }
  return out;
}

/** Distractor-analysis clauses cite wrong options; rule clauses state procedure. */
export function isDistractorClause(s) {
  return /(\d+[是像]|漏|誤|錯選|則把|不是.*相減|不是.*結果|也不是)/.test(s);
}

export function sentencePairSimilarity(a, b) {
  const na = normalizeSemanticText(a);
  const nb = normalizeSemanticText(b);
  if (!na || !nb) return { hit: false, contain: 0, bigram: 0, reason: "" };
  const shorter = na.length <= nb.length ? na : nb;
  const longer = na.length <= nb.length ? nb : na;
  const contain = longer.includes(shorter) ? shorter.length / longer.length : 0;
  const bigram = bigramSimilarity(na, nb);
  if (contain >= CONTAIN_THRESH) return { hit: true, contain, bigram, reason: `contain ${contain.toFixed(2)}` };
  if (bigram >= BIGRAM_THRESH) return { hit: true, contain, bigram, reason: `bigram ${bigram.toFixed(2)}` };
  const roles = sharedRoleSignatures(a, b);
  if (roles.length && !isDistractorClause(a) && !isDistractorClause(b) && bigram >= 0.30) {
    return { hit: true, contain, bigram, reason: `role ${roles.join("+")} bigram ${bigram.toFixed(2)}` };
  }
  return { hit: false, contain, bigram, reason: "" };
}

function allowlisted(id, a, b) {
  return U09_SEMANTIC_ALLOWLIST.some(
    e => e.questionId === id && ((e.a === a && e.b === b) || (e.a === b && e.b === a))
  );
}

export function findSemanticDuplicatePairs(explanation, questionId = "") {
  const sents = splitExplanationSentences(explanation).filter(s => countZh(s) >= 10);
  const out = [];
  for (let i = 0; i < sents.length; i++) {
    for (let j = i + 1; j < sents.length; j++) {
      const sim = sentencePairSimilarity(sents[i], sents[j]);
      if (!sim.hit) continue;
      if (allowlisted(questionId, sents[i], sents[j])) continue;
      out.push({ a: sents[i], b: sents[j], ...sim });
    }
  }
  return out;
}

export function auditQuestions(questions) {
  const all = [];
  for (const q of questions) {
    const pairs = findSemanticDuplicatePairs(q.explanation, q.questionId);
    for (const p of pairs) all.push({ questionId: q.questionId, ...p });
  }
  return all;
}
