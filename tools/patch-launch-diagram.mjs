import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const SUBJECT_CODE = {
  "\u6578\u5b78\u6703\u8003\u4f5c\u6230\u5ba4": "math",
  "\u570b\u6587\u6703\u8003\u4f5c\u6230\u5ba4": "chinese",
  "\u82f1\u6587\u6703\u8003\u4f5c\u6230\u5ba4": "english",
  "\u7406\u5316\u6703\u8003\u4f5c\u6230\u5ba4": "physics-chem",
  "\u751f\u7269\u6703\u8003\u4f5c\u6230\u5ba4": "biology",
  "\u5730\u79d1\u6703\u8003\u4f5c\u6230\u5ba4": "earth",
  "\u6b77\u53f2\u6703\u8003\u4f5c\u6230\u5ba4": "history",
  "\u5730\u7406\u6703\u8003\u4f5c\u6230\u5ba4": "geography",
  "\u516c\u6c11\u6703\u8003\u4f5c\u6230\u5ba4": "civics"
};

const guardLine = code => `    if (window.DIAGRAM_ATTACH?.attachQuestions) assessment.questions = DIAGRAM_ATTACH.attachQuestions(assessment.questions, "${code}");\n`;

for (const [dir, code] of Object.entries(SUBJECT_CODE)) {
  const p = path.join(root, dir, "app.js");
  let s = fs.readFileSync(p, "utf8");
  if (s.includes("DIAGRAM_ATTACH.attachQuestions")) { console.log("skip", dir); continue; }
  s = s.replace(
    /function launchAssessment\(assessment\) \{\n/,
    `function launchAssessment(assessment) {\n${guardLine(code)}`
  );
  fs.writeFileSync(p, s, "utf8");
  console.log("patched", dir);
}
