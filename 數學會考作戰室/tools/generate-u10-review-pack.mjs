#!/usr/bin/env node
/** U10-QA0: deterministic report-only review pack (read bank + lecture only). */
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { countZh } from "./v2-quality.mjs";

const tools = path.dirname(fileURLToPath(import.meta.url));
const root = path.dirname(tools);
const v2 = path.join(root, "v2");
const outDir = process.argv.includes("--out-dir")
  ? path.resolve(process.argv[process.argv.indexOf("--out-dir") + 1])
  : path.join(tools, "review-output");

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

const SIMPLIFIED_CHARS = "却这为从与应还后里对达无发过别数学类组图题问结选错较范围简复个间体据计显进时给";

const NUMBER_TOKEN_RE = /\d+(?:\.\d+)?/g;

function loadPack() {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(v2, "math-question-bank-v2-u10.js"), "utf8"), ctx, {
    filename: "math-question-bank-v2-u10.js",
  });
  vm.runInContext(fs.readFileSync(path.join(v2, "math-lecture-v2-u10.js"), "utf8"), ctx, {
    filename: "math-lecture-v2-u10.js",
  });
  return {
    questions: ctx.window.MATH_QUESTION_BANK_V2_U10,
    lectures: ctx.window.MATH_LECTURE_V2_U10,
  };
}

function dossierRecord(q) {
  return {
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
  };
}

function splitSentences(text) {
  return text.split(/(?<=。)/).map((s) => s.trim()).filter(Boolean);
}

function normalizeTextStructure(text) {
  return text.normalize("NFKC").toLowerCase()
    .replace(/\d+(?:\.\d+)?/g, "#")
    .replace(/\s+/g, "");
}

function normalizeStep(step) {
  let s = step.trim();
  if (s.endsWith("。")) s = s.slice(0, -1);
  return s;
}

function collectNumberTokens(text) {
  return [...new Set((text.match(NUMBER_TOKEN_RE) || []))];
}

function scanResidue(text) {
  const hits = [];
  for (const sub of MACHINE_RESIDUE) {
    if (text.includes(sub)) hits.push(sub);
  }
  return hits;
}

function scanSimplified(text) {
  const hits = [];
  for (const ch of SIMPLIFIED_CHARS) {
    if (text.includes(ch)) hits.push(ch);
  }
  return hits;
}

function pushFinding(findings, rec) {
  findings.push({
    scope: rec.scope,
    id: rec.id,
    field: rec.field,
    rule: rec.rule,
    evidence: rec.evidence,
    relatedIds: rec.relatedIds || [],
  });
}

function sortFindings(findings) {
  findings.sort((a, b) => {
    for (const k of ["scope", "id", "rule", "field", "evidence"]) {
      const c = a[k].localeCompare(b[k], "en");
      if (c) return c;
    }
    return 0;
  });
}

function buildFindings(questions, lectures) {
  const findings = [];

  for (const q of questions) {
    const zh = countZh(q.explanation);
    if (zh < 30) {
      pushFinding(findings, {
        scope: "question", id: q.questionId, field: "explanation",
        rule: "Q01 explanation-zh-under-30", evidence: `count=${zh}`,
      });
    }
    const cm = countZh(q.commonMistake);
    if (cm < 12) {
      pushFinding(findings, {
        scope: "question", id: q.questionId, field: "commonMistake",
        rule: "Q02 commonMistake-zh-under-12", evidence: `count=${cm}`,
      });
    }
    if ((q.steps || []).length < 3) {
      pushFinding(findings, {
        scope: "question", id: q.questionId, field: "steps",
        rule: "Q03 fewer-than-3-steps", evidence: `count=${(q.steps || []).length}`,
      });
    }
    const parts = splitSentences(q.explanation);
    const seen = new Set();
    for (const p of parts) {
      if (seen.has(p)) {
        pushFinding(findings, {
          scope: "question", id: q.questionId, field: "explanation",
          rule: "Q04 duplicate-sentence-inside-explanation", evidence: p.slice(0, 80),
        });
        break;
      }
      seen.add(p);
    }
    for (const sub of scanResidue(q.explanation + q.commonMistake)) {
      pushFinding(findings, {
        scope: "question", id: q.questionId, field: "explanation",
        rule: "Q08 suspicious-machine-residue", evidence: sub,
      });
    }
    const blob = q.explanation + q.commonMistake + q.text + (q.choices || []).join("");
    for (const ch of scanSimplified(blob)) {
      pushFinding(findings, {
        scope: "question", id: q.questionId, field: "text",
        rule: "Q09 simplified-character", evidence: ch,
      });
    }
    const inPrompt = collectNumberTokens(q.text + (q.choices || []).join(""));
    const inExpl = collectNumberTokens(q.explanation);
    const onlyExpl = inExpl.filter((t) => !inPrompt.includes(t));
    if (onlyExpl.length) {
      pushFinding(findings, {
        scope: "question", id: q.questionId, field: "explanation",
        rule: "Q10 explanation-new-number-token", evidence: `tokens=${onlyExpl.join(",")}`,
      });
    }
  }

  const explGroups = new Map();
  for (const q of questions) {
    const key = q.explanation;
    if (!explGroups.has(key)) explGroups.set(key, []);
    explGroups.get(key).push(q.questionId);
  }
  for (const ids of explGroups.values()) {
    if (ids.length < 2) continue;
    ids.sort();
    for (const id of ids) {
      pushFinding(findings, {
        scope: "question", id, field: "explanation",
        rule: "Q05 exact-explanation-shared-across-questions",
        evidence: `groupSize=${ids.length}`,
        relatedIds: ids.filter((x) => x !== id),
      });
    }
  }

  const textGroups = new Map();
  for (const q of questions) {
    const key = normalizeTextStructure(q.text);
    if (!textGroups.has(key)) textGroups.set(key, []);
    textGroups.get(key).push(q.questionId);
  }
  for (const ids of textGroups.values()) {
    if (ids.length < 3) continue;
    ids.sort();
    for (const id of ids) {
      pushFinding(findings, {
        scope: "question", id, field: "text",
        rule: "Q06 normalized-text-structure-group-size-at-least-3",
        evidence: `groupSize=${ids.length}`,
        relatedIds: ids.filter((x) => x !== id),
      });
    }
  }

  const stepGroups = new Map();
  for (const q of questions) {
    for (const step of q.steps || []) {
      const key = normalizeStep(step);
      if (!stepGroups.has(key)) stepGroups.set(key, new Set());
      stepGroups.get(key).add(q.questionId);
    }
  }
  for (const [step, idSet] of stepGroups) {
    const ids = [...idSet].sort();
    if (ids.length < 3) continue;
    for (const id of ids) {
      pushFinding(findings, {
        scope: "question", id, field: "steps",
        rule: "Q07 exact-step-shared-by-at-least-3-questionIds",
        evidence: step.slice(0, 80),
        relatedIds: ids.filter((x) => x !== id),
      });
    }
  }

  for (const l of lectures) {
    const czh = countZh(l.concept || "");
    if (czh < 80) {
      pushFinding(findings, {
        scope: "lecture", id: l.skillId, field: "concept",
        rule: "L01 concept-zh-under-80", evidence: `count=${czh}`,
      });
    }
    if ((l.stepGuide || []).length < 5) {
      pushFinding(findings, {
        scope: "lecture", id: l.skillId, field: "stepGuide",
        rule: "L02 fewer-than-5-stepGuide", evidence: `count=${(l.stepGuide || []).length}`,
      });
    }
    if ((l.examples || []).length < 2) {
      pushFinding(findings, {
        scope: "lecture", id: l.skillId, field: "examples",
        rule: "L03 fewer-than-2-examples", evidence: `count=${(l.examples || []).length}`,
      });
    }
    if ((l.commonMistakes || []).length < 4) {
      pushFinding(findings, {
        scope: "lecture", id: l.skillId, field: "commonMistakes",
        rule: "L04 fewer-than-4-commonMistakes", evidence: `count=${(l.commonMistakes || []).length}`,
      });
    }
    for (const ex of l.examples || []) {
      const w = countZh(ex.why || "");
      if (w < 40) {
        pushFinding(findings, {
          scope: "lecture", id: l.skillId, field: "examples",
          rule: "L05 example-why-zh-under-40", evidence: `count=${w}; prompt=${(ex.prompt || "").slice(0, 40)}`,
        });
      }
    }
    const lblob = JSON.stringify(l);
    for (const sub of scanResidue(lblob)) {
      pushFinding(findings, {
        scope: "lecture", id: l.skillId, field: "concept",
        rule: "L06 lecture-suspicious-machine-residue", evidence: sub,
      });
    }
    for (const ch of scanSimplified(lblob)) {
      pushFinding(findings, {
        scope: "lecture", id: l.skillId, field: "concept",
        rule: "L07 lecture-simplified-character", evidence: ch,
      });
    }
  }

  sortFindings(findings);
  return findings;
}

function formatQuestionSection(q) {
  const lines = [
    `### ${q.questionId}`,
    "",
    `- skillId: ${q.skillId}`,
    `- difficulty: ${q.difficulty}`,
    `- text: ${q.text}`,
    `- choices:`,
    ...q.choices.map((c, i) => `  - ${i}: ${c}`),
    `- answerIndex: ${q.answerIndex}`,
    `- correctChoice: ${q.choices[q.answerIndex]}`,
    `- explanation: ${q.explanation}`,
    `- steps:`,
    ...(q.steps || []).map((s) => `  - ${s}`),
    `- commonMistake: ${q.commonMistake}`,
    "",
  ];
  return lines.join("\n");
}

function lectureRecord(l) {
  return {
    skillId: l.skillId,
    title: l.title ?? "",
    concept: l.concept ?? "",
    conceptZh: l.conceptZh ?? l.concept ?? "",
    formula: l.formula ?? "",
    stepGuide: l.stepGuide ?? [],
    examples: l.examples ?? [],
    commonMistakes: l.commonMistakes ?? [],
    exampleWhyZh: (l.examples || []).map((ex) => countZh(ex.why || "")),
  };
}

function expectedSampleIds(questions) {
  const skills = [...new Set(questions.map((q) => q.skillId))];
  const ids = [];
  for (const skill of skills) {
    const rows = questions.filter((q) => q.skillId === skill);
    ids.push(rows[0].questionId, rows[1].questionId);
  }
  return ids;
}

function writeOutputs({ questions, lectures }) {
  fs.mkdirSync(outDir, { recursive: true });

  const dossierPath = path.join(outDir, "u10-review-dossier.jsonl");
  fs.writeFileSync(
    dossierPath,
    questions.map((q) => JSON.stringify(dossierRecord(q))).join("\n") + "\n"
  );

  const distractorPath = path.join(outDir, "u10-distractor-review.md");
  fs.writeFileSync(
    distractorPath,
    `${NOTICE}\n\n${questions.map(formatQuestionSection).join("\n")}`
  );

  const sampleIds = new Set(expectedSampleIds(questions));
  const samples = questions.filter((q) => sampleIds.has(q.questionId));
  const qaPath = path.join(outDir, "u10-qa-samples.md");
  fs.writeFileSync(
    qaPath,
    `${NOTICE}\n\n${samples.map(formatQuestionSection).join("\n")}`
  );

  const lecturePath = path.join(outDir, "u10-lecture-review.jsonl");
  fs.writeFileSync(
    lecturePath,
    lectures.map((l) => JSON.stringify(lectureRecord(l))).join("\n") + "\n"
  );

  const findingsPath = path.join(outDir, "u10-quality-findings.jsonl");
  const findings = buildFindings(questions, lectures);
  fs.writeFileSync(
    findingsPath,
    findings.map((f) => JSON.stringify(f)).join("\n") + (findings.length ? "\n" : "")
  );

  return { dossierPath, distractorPath, qaPath, lecturePath, findingsPath, findings };
}

const pack = loadPack();
const result = writeOutputs(pack);
console.log("generate-u10-review-pack: OK");
console.log(`  questions: ${pack.questions.length}`);
console.log(`  lectures: ${pack.lectures.length}`);
console.log(`  findings: ${result.findings.length}`);
console.log(`  outDir: ${outDir}`);
