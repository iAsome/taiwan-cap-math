#!/usr/bin/env node
/** Report-only U08 review pack generator. Node built-ins only. */
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const ROOT = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const V2 = path.join(ROOT, "v2");
const OUT = path.join(path.dirname(fileURLToPath(import.meta.url)), "review-output");

const NOTICE = [
  "TEMPORARY REVIEW ARTIFACT.",
  "NOT STUDENT-FACING.",
  "NOT A RELEASE APPROVAL.",
  "REMOVE BEFORE INTEGRATION.",
].join("\n");

const MACHINE_RESIDUE = [
  "沒錯", "才對", "高帶錯", "數字帶錯", "公式用錯", "計算錯誤",
  "其中一個算錯", "多乘", "少扣一點", "漏加倍",
];

const SIMPLIFIED_CHARS =
  "却这为从与应还后里对达无发过别数学类组图题问结选错较范围简复个间体据计显进时给";

const QA_SAMPLE_IDS = [];
for (let s = 1; s <= 12; s++) {
  const sid = String(s).padStart(3, "0");
  QA_SAMPLE_IDS.push(`u08-s${sid}-v001`, `u08-s${sid}-v002`);
}

const ARTIFACTS = [
  "u08-review-dossier.jsonl",
  "u08-distractor-review.md",
  "u08-qa-samples.md",
  "u08-lecture-review.jsonl",
  "u08-quality-findings.jsonl",
];

function countZh(text) {
  if (typeof text !== "string") return 0;
  return (text.match(/[\u4e00-\u9fff]/g) || []).length;
}

function loadU08() {
  const ctx = vm.createContext({ window: {} });
  for (const f of ["math-question-bank-v2-u08.js", "math-lecture-v2-u08.js"]) {
    vm.runInContext(fs.readFileSync(path.join(V2, f), "utf8"), ctx, { filename: f });
  }
  return {
    questions: ctx.window.MATH_QUESTION_BANK_V2_U08,
    lectures: ctx.window.MATH_LECTURE_V2_U08,
  };
}

function normalizeTextStructure(text) {
  return text
    .normalize("NFKC")
    .toLowerCase()
    .replace(/\d+(?:\.\d+)?/g, "#")
    .replace(/\s+/g, "");
}

function normalizeStep(step) {
  let s = step.trim();
  if (s.endsWith("。")) s = s.slice(0, -1);
  return s;
}

function splitSentences(text) {
  return text.split(/(?<=[。！？])/).map((s) => s.trim()).filter(Boolean);
}

function collectNumberTokens(text) {
  const out = new Set();
  for (const m of text.matchAll(/\d+(?:\.\d+)?/g)) out.add(m[0]);
  return out;
}

function scanResidue(text) {
  const hits = [];
  for (const p of MACHINE_RESIDUE) if (text.includes(p)) hits.push(p);
  return hits;
}

function scanSimplified(text) {
  const hits = [];
  for (const ch of SIMPLIFIED_CHARS) if (text.includes(ch)) hits.push(ch);
  return hits;
}

function pushFinding(findings, rec) {
  findings.push({
    scope: rec.scope,
    id: rec.id,
    field: rec.field,
    rule: rec.rule,
    evidence: rec.evidence,
    relatedIds: rec.relatedIds,
  });
}

function sortFindings(findings) {
  findings.sort((a, b) => {
    for (const k of ["scope", "id", "rule", "field", "evidence"]) {
      const c = String(a[k]).localeCompare(String(b[k]), "en");
      if (c) return c;
    }
    return 0;
  });
}

function buildDossier(questions) {
  return questions.map((q) => ({
    questionId: q.questionId,
    skillId: q.skillId,
    difficulty: q.difficulty,
    text: q.text,
    choices: q.choices,
    answerIndex: q.answerIndex,
    correctChoice: q.choices[q.answerIndex],
    explanation: q.explanation,
    steps: q.steps,
    commonMistake: q.commonMistake,
    concept: q.concept,
  }));
}

function mdBulletList(items) {
  return items.map((line) => `- ${line}`).join("\n");
}

function buildDistractorReview(questions) {
  const parts = [NOTICE, ""];
  for (const q of questions) {
    const choiceLines = q.choices.map((c, i) => `${i}: ${c}`);
    parts.push(
      `### ${q.questionId}`,
      "",
      mdBulletList([
        `skillId: ${q.skillId}`,
        `difficulty: ${q.difficulty}`,
        `text: ${q.text}`,
        `choices: ${choiceLines.join(" | ")}`,
        `answerIndex: ${q.answerIndex}`,
        `correctChoice: ${q.choices[q.answerIndex]}`,
        `explanation: ${q.explanation}`,
        `steps: ${JSON.stringify(q.steps)}`,
        `commonMistake: ${q.commonMistake}`,
      ]),
      ""
    );
  }
  return parts.join("\n");
}

function buildQaSamples(questions) {
  const byId = new Map(questions.map((q) => [q.questionId, q]));
  const parts = [NOTICE, ""];
  for (const qid of QA_SAMPLE_IDS) {
    const q = byId.get(qid);
    const choiceLines = q.choices.map((c, i) => `${i}: ${c}`);
    parts.push(
      `### ${q.questionId}`,
      "",
      mdBulletList([
        `skillId: ${q.skillId}`,
        `difficulty: ${q.difficulty}`,
        `text: ${q.text}`,
        `choices: ${choiceLines.join(" | ")}`,
        `answerIndex: ${q.answerIndex}`,
        `correctChoice: ${q.choices[q.answerIndex]}`,
        `explanation: ${q.explanation}`,
        `steps: ${JSON.stringify(q.steps)}`,
        `commonMistake: ${q.commonMistake}`,
      ]),
      ""
    );
  }
  return parts.join("\n");
}

function buildLectureReview(lectures) {
  return lectures.map((l) => ({
    skillId: l.skillId,
    title: l.title,
    concept: l.concept,
    conceptZh: countZh(l.concept),
    formula: l.formula,
    stepGuide: l.stepGuide,
    examples: l.examples,
    commonMistakes: l.commonMistakes,
    exampleWhyZh: (l.examples || []).map((ex) => countZh(ex.why || "")),
  }));
}

function buildFindings(questions, lectures) {
  const findings = [];

  for (const q of questions) {
    const blob = [q.text, q.explanation, q.commonMistake, ...q.steps, ...q.choices].join("\n");

    if (countZh(q.explanation) < 30) {
      pushFinding(findings, {
        scope: "question", id: q.questionId, field: "explanation",
        rule: "Q01 explanation-zh-under-30",
        evidence: String(countZh(q.explanation)), relatedIds: [],
      });
    }
    if (countZh(q.commonMistake) < 12) {
      pushFinding(findings, {
        scope: "question", id: q.questionId, field: "commonMistake",
        rule: "Q02 commonMistake-zh-under-12",
        evidence: String(countZh(q.commonMistake)), relatedIds: [],
      });
    }
    if ((q.steps || []).length < 3) {
      pushFinding(findings, {
        scope: "question", id: q.questionId, field: "steps",
        rule: "Q03 fewer-than-3-steps",
        evidence: String((q.steps || []).length), relatedIds: [],
      });
    }
    const sents = splitSentences(q.explanation);
    const seen = new Set();
    for (const s of sents) {
      if (seen.has(s)) {
        pushFinding(findings, {
          scope: "question", id: q.questionId, field: "explanation",
          rule: "Q04 duplicate-sentence-inside-explanation",
          evidence: s, relatedIds: [],
        });
        break;
      }
      seen.add(s);
    }
    for (const p of scanResidue(blob)) {
      pushFinding(findings, {
        scope: "question", id: q.questionId, field: "explanation",
        rule: "Q08 suspicious-machine-residue",
        evidence: p, relatedIds: [],
      });
    }
    for (const ch of scanSimplified(blob)) {
      pushFinding(findings, {
        scope: "question", id: q.questionId, field: "explanation",
        rule: "Q09 simplified-character",
        evidence: ch, relatedIds: [],
      });
    }
    const explNums = collectNumberTokens(q.explanation);
    const knownNums = new Set([
      ...collectNumberTokens(q.text),
      ...q.choices.flatMap((c) => [...collectNumberTokens(c)]),
    ]);
    for (const tok of [...explNums].sort()) {
      if (!knownNums.has(tok)) {
        pushFinding(findings, {
          scope: "question", id: q.questionId, field: "explanation",
          rule: "Q10 explanation-new-number-token",
          evidence: tok, relatedIds: [],
        });
      }
    }
  }

  const explMap = new Map();
  for (const q of questions) {
    const key = q.explanation;
    if (!explMap.has(key)) explMap.set(key, []);
    explMap.get(key).push(q.questionId);
  }
  for (const [expl, ids] of explMap) {
    if (ids.length > 1) {
      const sorted = [...ids].sort();
      pushFinding(findings, {
        scope: "question", id: sorted[0], field: "explanation",
        rule: "Q05 exact-explanation-shared-across-questions",
        evidence: expl.slice(0, 120), relatedIds: sorted,
      });
    }
  }

  const textGroups = new Map();
  for (const q of questions) {
    const key = normalizeTextStructure(q.text);
    if (!textGroups.has(key)) textGroups.set(key, []);
    textGroups.get(key).push(q.questionId);
  }
  for (const [norm, ids] of textGroups) {
    const uniq = [...new Set(ids)].sort();
    if (uniq.length >= 3) {
      pushFinding(findings, {
        scope: "question", id: uniq[0], field: "text",
        rule: "Q06 normalized-text-structure-group-size-at-least-3",
        evidence: norm, relatedIds: uniq,
      });
    }
  }

  const stepMap = new Map();
  for (const q of questions) {
    for (const step of q.steps || []) {
      const key = normalizeStep(step);
      if (!stepMap.has(key)) stepMap.set(key, new Set());
      stepMap.get(key).add(q.questionId);
    }
  }
  for (const [step, idSet] of stepMap) {
    const ids = [...idSet].sort();
    if (ids.length >= 3) {
      pushFinding(findings, {
        scope: "question", id: ids[0], field: "steps",
        rule: "Q07 exact-step-shared-by-at-least-3-questionIds",
        evidence: step, relatedIds: ids,
      });
    }
  }

  for (const l of lectures) {
    const blob = [l.concept, l.formula, ...(l.stepGuide || []), ...(l.commonMistakes || []),
      ...(l.examples || []).flatMap((ex) => [ex.prompt, ex.answer, ex.why])].join("\n");

    if (countZh(l.concept) < 80) {
      pushFinding(findings, {
        scope: "lecture", id: l.skillId, field: "concept",
        rule: "L01 concept-zh-under-80",
        evidence: String(countZh(l.concept)), relatedIds: [],
      });
    }
    if ((l.stepGuide || []).length < 5) {
      pushFinding(findings, {
        scope: "lecture", id: l.skillId, field: "stepGuide",
        rule: "L02 fewer-than-5-stepGuide",
        evidence: String((l.stepGuide || []).length), relatedIds: [],
      });
    }
    if ((l.examples || []).length < 2) {
      pushFinding(findings, {
        scope: "lecture", id: l.skillId, field: "examples",
        rule: "L03 fewer-than-2-examples",
        evidence: String((l.examples || []).length), relatedIds: [],
      });
    }
    if ((l.commonMistakes || []).length < 4) {
      pushFinding(findings, {
        scope: "lecture", id: l.skillId, field: "commonMistakes",
        rule: "L04 fewer-than-4-commonMistakes",
        evidence: String((l.commonMistakes || []).length), relatedIds: [],
      });
    }
    for (let i = 0; i < (l.examples || []).length; i++) {
      const zh = countZh(l.examples[i].why || "");
      if (zh < 40) {
        pushFinding(findings, {
          scope: "lecture", id: l.skillId, field: `examples[${i}].why`,
          rule: "L05 example-why-zh-under-40",
          evidence: String(zh), relatedIds: [],
        });
      }
    }
    for (const p of scanResidue(blob)) {
      pushFinding(findings, {
        scope: "lecture", id: l.skillId, field: "concept",
        rule: "L06 lecture-suspicious-machine-residue",
        evidence: p, relatedIds: [],
      });
    }
    for (const ch of scanSimplified(blob)) {
      pushFinding(findings, {
        scope: "lecture", id: l.skillId, field: "concept",
        rule: "L07 lecture-simplified-character",
        evidence: ch, relatedIds: [],
      });
    }
  }

  sortFindings(findings);
  return findings;
}

function sha256File(filePath) {
  const h = crypto.createHash("sha256");
  h.update(fs.readFileSync(filePath));
  return h.digest("hex");
}

function writePack({ questions, lectures }) {
  fs.mkdirSync(OUT, { recursive: true });

  const dossier = buildDossier(questions);
  fs.writeFileSync(
    path.join(OUT, "u08-review-dossier.jsonl"),
    dossier.map((r) => JSON.stringify(r)).join("\n") + "\n",
    "utf8"
  );

  fs.writeFileSync(path.join(OUT, "u08-distractor-review.md"), buildDistractorReview(questions), "utf8");
  fs.writeFileSync(path.join(OUT, "u08-qa-samples.md"), buildQaSamples(questions), "utf8");

  const lectureRows = buildLectureReview(lectures);
  fs.writeFileSync(
    path.join(OUT, "u08-lecture-review.jsonl"),
    lectureRows.map((r) => JSON.stringify(r)).join("\n") + "\n",
    "utf8"
  );

  const findings = buildFindings(questions, lectures);
  fs.writeFileSync(
    path.join(OUT, "u08-quality-findings.jsonl"),
    findings.map((r) => JSON.stringify(r)).join("\n") + (findings.length ? "\n" : ""),
    "utf8"
  );
}

function main() {
  const { questions, lectures } = loadU08();
  writePack({ questions, lectures });
  const hashes = Object.fromEntries(
    ARTIFACTS.map((f) => [f, sha256File(path.join(OUT, f))])
  );
  console.log("generate-u08-review-pack: OK");
  for (const f of ARTIFACTS) console.log(`${f}\t${hashes[f]}`);
}

main();
