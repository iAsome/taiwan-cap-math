/** Shared U09 semantic duplicate detection for audit + verifier. */
import { countZh } from "./v2-quality.mjs";

export const U09_SEMANTIC_ALLOWLIST = [
  // at most 5 pairs; none pre-approved — duplicates must be fixed in content
];

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

export function sentencePairSimilarity(a, b) {
  const na = normalizeSemanticText(a);
  const nb = normalizeSemanticText(b);
  if (!na || !nb) return { hit: false, contain: 0, bigram: 0, reason: "" };
  const shorter = na.length <= nb.length ? na : nb;
  const longer = na.length <= nb.length ? nb : na;
  const contain = longer.includes(shorter) ? shorter.length / longer.length : 0;
  const bigram = bigramSimilarity(na, nb);
  if (contain >= 0.65) return { hit: true, contain, bigram, reason: `contain ${contain.toFixed(2)}` };
  if (bigram >= 0.58) return { hit: true, contain, bigram, reason: `bigram ${bigram.toFixed(2)}` };
  return { hit: false, contain, bigram, reason: "" };
}

function allowlisted(id, a, b) {
  return U09_SEMANTIC_ALLOWLIST.some(
    e => e.id === id && ((e.a === a && e.b === b) || (e.a === b && e.b === a))
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
