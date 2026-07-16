import fs from "node:fs";
import path from "node:path";
import process from "node:process";
import { createHash } from "node:crypto";
import { fileURLToPath, pathToFileURL } from "node:url";

import { HUMAN_PRODUCTION_CONFIG } from "../../human-runtime/config.mjs";
import { HumanProductionRuntime } from "../../human-runtime/engine.mjs";

const mathDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const runtimeDir = path.join(mathDir, "human-runtime");
const args = new Map(process.argv.slice(2).map((value, index, all) => value.startsWith("--") ? [value, all[index + 1]] : null).filter(Boolean));
const unitIds = String(args.get("--units") || "").split(",").filter(value => /^u(?:0[1-9]|1[0-9]|2[0-3])$/.test(value));
if (!unitIds.length) throw new Error("--units requires comma-separated u01..u23 values");

const loadJson = async url => JSON.parse(fs.readFileSync(fileURLToPath(url), "utf8"));
const runtime = await new HumanProductionRuntime({
  manifestUrl: pathToFileURL(path.join(runtimeDir, "content/manifest.json")),
  syllabusLockUrl: pathToFileURL(path.join(runtimeDir, "content/syllabus-lock.json")),
  blueprintUrl: pathToFileURL(path.join(runtimeDir, "release-blueprint-r1.json")),
  expectedContentVersion: HUMAN_PRODUCTION_CONFIG.expectedContentVersion,
  loadJson
}).initialize();

const findings = [];
const add = (severity, rule, id, field, evidence) => findings.push({ severity, rule, id, field, evidence: String(evidence).slice(0, 180) });
const reviewCandidates = [];
const addCandidate = (rule, id, field, evidence, resolution = "requires-manual-review") => reviewCandidates.push({ rule, id, field, evidence: String(evidence).slice(0, 180), resolution });
const duplicateReviewPath = path.join(mathDir, "tools/cap8-r4-math-audit/results/final-duplicate-reference-audit.json");
const duplicateReview = fs.existsSync(duplicateReviewPath) ? JSON.parse(fs.readFileSync(duplicateReviewPath, "utf8")) : null;
const duplicateReviewComplete = duplicateReview?.status === "PASS"
  && duplicateReview?.duplicateAudit?.nearPairCandidates?.reviewedCount === duplicateReview?.duplicateAudit?.nearPairCandidates?.rawCount
  && duplicateReview?.duplicateAudit?.normalizedPromptCandidateGroups?.reviewedCount === duplicateReview?.duplicateAudit?.normalizedPromptCandidateGroups?.rawCount
  && duplicateReview?.trueIssues?.length === 0;
const hanLength = value => (String(value || "").match(/\p{Script=Han}/gu) || []).length;
const hasChromaticColor = svg => {
  const hexColors = [...svg.matchAll(/#([0-9a-f]{3,8})\b/gi)].map(match => {
    let value = match[1];
    if (value.length === 3 || value.length === 4) value = [...value].map(char => char + char).join("");
    return value.slice(0, 6).match(/../g)?.map(channel => Number.parseInt(channel, 16)) || [];
  });
  const rgbColors = [...svg.matchAll(/rgba?\(\s*(\d+(?:\.\d+)?)\D+(\d+(?:\.\d+)?)\D+(\d+(?:\.\d+)?)/gi)]
    .map(match => match.slice(1, 4).map(Number));
  const chromaticHsl = [...svg.matchAll(/hsla?\([^,]+,\s*(\d+(?:\.\d+)?)%/gi)].some(match => Number(match[1]) > 0);
  return chromaticHsl || [...hexColors, ...rgbColors].some(([red, green, blue]) => red !== green || green !== blue);
};
const hasFigureReview = spec => {
  const review = spec.figureReview || {};
  const reviewed = spec.reviewStatus === "independently-reviewed" || review.decision === "pass";
  const visualEvidence = spec.mobileReadability || spec.mobileReadabilityReview || spec.manualVisualInspection
    || review.manualVisualInspection || review.manualRenderedInspection || review.manualRenderInspected || review.manualInspectionCompleted
    || review.mobileReadable || review.mobileReadability || review.mobileCheck;
  return Boolean(reviewed && visualEvidence);
};
const prohibited = new Map([
  ["\u516c\u91d0", "\u6beb\u7c73"], ["\u516c\u5398", "\u6beb\u7c73"], ["\u5398\u7c73", "\u516c\u5206"], ["\u5343\u7c73", "\u516c\u91cc"],
  ["\u5e73\u65b9\u5398\u7c73", "\u5e73\u65b9\u516c\u5206"], ["\u7acb\u65b9\u5398\u7c73", "\u7acb\u65b9\u516c\u5206"], ["\u5e73\u7c73", "\u5e73\u65b9\u516c\u5c3a"], ["\u5343\u514b", "\u516c\u65a4"], ["\u516c\u88e1", "\u516c\u91cc"]
]);
const simplified = "\u8fb9\u7ebf\u70b9\u5706\u4f53\u957f\u5e94\u9898\u8bc1\u4e3a\u4e0e\u8fdb\u8fd9\u8fd8\u56fe\u6807\u5173\u5f00\u95e8\u95ee\u8bef\u9009\u9879\u51b3\u4fa7\u5374\u8f6e\u8651\u76d6\u955c\u753b\u5934";
const scanText = (id, field, value) => {
  const text = JSON.stringify(value ?? "");
  for (const [token, replacement] of prohibited) if (text.includes(token)) add("HIGH", "prohibited-taiwan-unit", id, field, `${token} -> ${replacement}`);
  if (/(?:^|[^<])<=|(?:^|[^>])>=/.test(text)) add("HIGH", "prohibited-visible-notation", id, field, text.match(/.{0,35}(?:<=|>=).{0,35}/)?.[0] || text);
  if (/\^/.test(text)) add("HIGH", "prohibited-visible-caret", id, field, text.match(/.{0,35}\^.{0,35}/)?.[0] || text);
  for (const token of simplified) if (text.includes(token)) add("HIGH", "simplified-chinese", id, field, token);
};
const signature = q => `${q.text}\u0000${[...q.choices].sort().join("\u0001")}`;
const essence = q => signature(q).normalize("NFKC").toLowerCase().replace(/\u2212?\d+(?:\.\d+)?/g, "#").replace(/[\p{P}\p{S}\s]/gu, "");
const seen = new Map();
const seenEssence = new Map();
const counts = { units: unitIds.length, skills: 0, lectures: 0, mc: 0, cr: 0, figures: 0 };

for (const unitId of unitIds) {
  const unit = await runtime.loadUnit(unitId);
  counts.skills += unit.skills.length;
  for (const skill of unit.skills) {
    counts.lectures++;
    const lecture = runtime.lectureForApp(skill);
    scanText(skill.skillId, "lecture", lecture);
    if (!lecture.title || !lecture.concept || !lecture.summary) add("HIGH", "rendered-lecture-field-empty", skill.skillId, "lecture", "title, concept, and summary must render");
    if (hanLength(lecture.concept) < 80) add("MEDIUM", "lecture-concept-short", skill.skillId, "concept", hanLength(lecture.concept));
    if (lecture.stepGuide.length < 5) add("MEDIUM", "rendered-lecture-steps-short", skill.skillId, "stepGuide", lecture.stepGuide.length);
    if (lecture.examples.length < 2) add("MEDIUM", "rendered-lecture-examples-short", skill.skillId, "examples", lecture.examples.length);
    if (lecture.commonMistakes.length < 4) add("MEDIUM", "rendered-lecture-mistakes-short", skill.skillId, "commonMistakes", lecture.commonMistakes.length);
    lecture.examples.forEach((example, index) => {
      if (hanLength(example.why) < 40) add("MEDIUM", "lecture-example-why-short", skill.skillId, `examples[${index}].why`, hanLength(example.why));
    });

    for (const raw of skill.mcQuestions) {
      counts.mc++;
      const q = runtime.adaptMc(raw);
      const id = q.questionId;
      scanText(id, "question", { text: q.text, choices: q.choices, explanation: q.explanation, steps: q.steps, optionAnalysis: q.optionAnalysis, formula: q.formula, tip: q.tip, trap: q.trap });
      if (!q.text) add("BLOCKER", "rendered-question-empty", id, "text", "empty after runtime adaptation");
      if (q.choices?.length !== 4) add("BLOCKER", "choice-count", id, "choices", q.choices?.length);
      if (!Number.isInteger(q.answerIndex) || q.answerIndex < 0 || q.answerIndex >= q.choices.length) add("BLOCKER", "answer-index", id, "answerIndex", q.answerIndex);
      const truth = (q.optionAnalysis || []).map((item, index) => item?.truth === true ? index : -1).filter(index => index >= 0);
      if (truth.length !== 1 || truth[0] !== q.answerIndex) add("BLOCKER", "option-truth-mismatch", id, "optionAnalysis", `${truth.join(",")} / ${q.answerIndex}`);
      if ((q.optionAnalysis || []).some((item, index) => item?.choice !== q.choices[index])) add("HIGH", "option-analysis-choice-mismatch", id, "optionAnalysis", "choice echo differs");
      if (!Array.isArray(q.steps) || !q.steps.length) add("HIGH", "rendered-solution-steps-missing", id, "steps", raw.solutionSteps ? "source has solutionSteps but runtime exposes no steps" : "no rendered steps");
      if (hanLength(q.explanation) < 45) add("MEDIUM", "question-explanation-short", id, "explanation", hanLength(q.explanation));
      if (!Array.isArray(q.steps) || q.steps.length < 3) add("MEDIUM", "question-steps-short", id, "steps", q.steps?.length || 0);
      if (hanLength(q.trap) < 12) add("MEDIUM", "question-common-mistake-short", id, "trap", hanLength(q.trap));
      if (!raw.commonMistake && raw.misconceptionTarget && q.trap === "\u6ce8\u610f\u984c\u76ee\u689d\u4ef6\u8207\u7b26\u865f\u3002") add("MEDIUM", "rendered-specific-misconception-lost", id, "trap", raw.misconceptionTarget);
      if (q.figureId && !q.figureAlt) add("HIGH", "rendered-figure-alt-missing", id, "figureAlt", q.figureId);
      const exact = signature(q); const prior = seen.get(exact); if (prior) add("HIGH", "exact-question-duplicate", id, "text+choices", prior); else seen.set(exact, id);
      const base = essence(q); const related = seenEssence.get(base); if (related) {
        addCandidate("question-essence-candidate", id, "text+choices", related, duplicateReviewComplete ? "adjudicated-legitimate" : "requires-manual-review");
      } else seenEssence.set(base, id);
    }

    for (const raw of skill.constructedResponses) {
      counts.cr++;
      const q = runtime.adaptCr(raw);
      scanText(q.questionId, "constructedResponse", { text: q.text, steps: q.steps, rubric: q.rubric, explanation: q.explanation, formula: q.formula, trap: q.trap });
      if (!q.text || !q.steps?.length || !q.rubric?.length) add("BLOCKER", "rendered-constructed-response-incomplete", q.questionId, "constructedResponse", "prompt, solution, or rubric missing");
      if (hanLength(q.explanation) < 45) add("MEDIUM", "constructed-response-explanation-short", q.questionId, "explanation", hanLength(q.explanation));
      if (!Array.isArray(q.steps) || q.steps.length < 3) add("MEDIUM", "constructed-response-steps-short", q.questionId, "steps", q.steps?.length || 0);
      if (hanLength(q.trap) < 12) add("MEDIUM", "constructed-response-common-mistake-short", q.questionId, "trap", hanLength(q.trap));
      if (q.figureId && !q.figureAlt) add("HIGH", "rendered-figure-alt-missing", q.questionId, "figureAlt", q.figureId);
    }

    for (const spec of skill.drawingSpecs || []) {
      counts.figures++;
      const id = spec.figureId;
      const figure = runtime.figureMetadata(id, spec);
      if (!figure.figureAlt || !figure.figureDescription || figure.figureAlt === figure.figureDescription) add("HIGH", "figure-description-incomplete", id, "drawingSpec", "distinct alt text and long description required");
      const svgPath = runtime.manifest.figureIndex?.[id]?.sourcePath;
      const svgFile = svgPath && path.join(mathDir, svgPath.replace(/^.*?human-runtime[\\/]/, "human-runtime/"));
      if (!svgFile || !fs.existsSync(svgFile)) add("BLOCKER", "figure-file-missing", id, "svg", svgPath || "not indexed");
      else {
        const svg = fs.readFileSync(svgFile, "utf8");
        if (!/<title\b/.test(svg) || !/<desc\b/.test(svg) || !/role=["']img["']/.test(svg) || !/aria-labelledby=/.test(svg)) add("HIGH", "svg-accessibility-metadata", id, "svg", "title, desc, role, or aria-labelledby missing");
        if (hasChromaticColor(svg) && !/currentColor/.test(svg) && !hasFigureReview(spec)) {
          addCandidate("svg-color-independence-review", id, "svg", "chromatic colors require print/color-independence review");
        }
      }
    }
  }
}

findings.sort((a, b) => a.severity.localeCompare(b.severity) || a.rule.localeCompare(b.rule) || a.id.localeCompare(b.id));
const result = {
  schemaVersion: "cap8-r4-math-normalized-batch-audit-r1",
  contentVersion: runtime.manifest.contentVersion,
  units: unitIds,
  counts,
  findingCounts: Object.fromEntries(["BLOCKER", "HIGH", "MEDIUM", "LOW"].map(severity => [severity, findings.filter(item => item.severity === severity).length])),
  findings,
  reviewCandidateCounts: Object.fromEntries([...new Set(reviewCandidates.map(item => item.rule))].sort().map(rule => [rule, reviewCandidates.filter(item => item.rule === rule).length])),
  unresolvedReviewCandidateCounts: Object.fromEntries([...new Set(reviewCandidates.map(item => item.rule))].sort().map(rule => [rule, reviewCandidates.filter(item => item.rule === rule && item.resolution === "requires-manual-review").length])),
  reviewCandidates,
  semanticReviewComplete: duplicateReviewComplete && reviewCandidates.every(item => item.resolution !== "requires-manual-review"),
  semanticReviewEvidence: duplicateReviewComplete ? path.relative(mathDir, duplicateReviewPath).replaceAll("\\", "/") : null,
  semanticDisclaimer: "Mechanical normalization checks do not prove mathematical or pedagogical correctness; review candidates require separate human adjudication."
};
const json = `${JSON.stringify(result, null, 2)}\n`;
const output = args.get("--output");
if (output) {
  const target = path.resolve(mathDir, output);
  fs.mkdirSync(path.dirname(target), { recursive: true });
  fs.writeFileSync(target, json, "utf8");
  fs.writeFileSync(`${target}.sha256`, `${createHash("sha256").update(json).digest("hex")}  ${path.basename(target)}\n`, "utf8");
}
console.log(JSON.stringify({ units: unitIds, counts, findingCounts: result.findingCounts, reviewCandidateCounts: result.reviewCandidateCounts, unresolvedReviewCandidateCounts: result.unresolvedReviewCandidateCounts, semanticReviewComplete: result.semanticReviewComplete, output: output || null }, null, 2));
