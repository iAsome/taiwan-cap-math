// One-shot merge: reads the 8 subagent JSON drafts (official-data/<year>/exam-<year>-draft.json),
// validates them against confirmed-nature-answers.json, generates mc(...) call text matching the
// existing exam111/exam114 style, and splices them into archive-exams.js alongside the untouched
// exam111/exam114 blocks. Run once after all drafts exist: node tools/merge-archive.mjs
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";

const root = path.resolve(import.meta.dirname, "..");
const archivePath = path.join(root, "archive-exams.js");
const confirmed = JSON.parse(fs.readFileSync(path.join(root, "official-data/confirmed-nature-answers.json"), "utf8"));
const draftYears = [106, 107, 108, 109, 110, 112, 113, 115];
const letterToIndex = { A: 0, B: 1, C: 2, D: 3 };

function mcCall(q) {
  return `    mc(${q.unitId}, ${q.difficulty}, ${JSON.stringify(q.text)}, ${JSON.stringify(q.choices)}, ${q.answerIndex},\n` +
    `      ${JSON.stringify(q.steps)},\n      ${JSON.stringify(q.tip)},\n      ${JSON.stringify(q.trap)})`;
}

const newConsts = [];
const returnEntries = [];

for (const year of draftYears) {
  const jsDraftPath = path.join(root, `official-data/${year}/exam-${year}-draft.js`);
  const jsonDraftPath = path.join(root, `official-data/${year}/exam-${year}-draft.json`);
  const key = confirmed[String(year)];

  if (fs.existsSync(jsDraftPath)) {
    // Pre-formatted mc() call text (subagent pasted final format directly): validate via vm, keep raw text as-is.
    const raw = fs.readFileSync(jsDraftPath, "utf8");
    const omittedMatch = raw.match(/\/\/ omittedNote: (.*)/);
    const omittedNote = omittedMatch && !/^無/.test(omittedMatch[1]) ? omittedMatch[1].trim() : "";
    const sandbox = { console };
    sandbox.mc = (unitId, difficulty, text, choices, answerIndex, steps, tip, trap) => ({ unitId, difficulty, text, choices, answerIndex, steps, tip, trap });
    vm.createContext(sandbox);
    vm.runInContext(raw + `\nthis.__exam = exam${year};`, sandbox);
    let ok = true;
    for (const q of sandbox.__exam) {
      if (new Set(q.choices).size !== 4) { console.error(`${year}: not 4 distinct choices - ${q.text.slice(0, 20)}`); ok = false; }
      if (q.answerIndex < 0 || q.answerIndex > 3) { console.error(`${year}: bad answerIndex - ${q.text.slice(0, 20)}`); ok = false; }
      if (q.unitId < 1 || q.unitId > 21) { console.error(`${year}: bad unitId ${q.unitId} - ${q.text.slice(0, 20)}`); ok = false; }
    }
    if (!ok) { console.error(`${year}: VALIDATION FAILED, skipping merge for this year`); continue; }
    console.log(`${year}: ${sandbox.__exam.length} questions OK (js draft)`);
    const body = raw.replace(/^\/\/.*\n/, "").replace(/^const exam\d+ = /, `  const exam${year} = `);
    newConsts.push(body.trimEnd() + "\n");
    const omittedLine = omittedNote ? `,\n      omittedNote: ${JSON.stringify(omittedNote)}` : "";
    returnEntries.push({ year, text: `    ${year}: {\n      minutes: 70,\n      questions: [...exam${year}]${omittedLine}\n    }` });
    continue;
  }

  if (!fs.existsSync(jsonDraftPath)) { console.error(`MISSING draft for ${year}: ${jsonDraftPath}`); continue; }
  const draft = JSON.parse(fs.readFileSync(jsonDraftPath, "utf8"));
  let ok = true;
  for (const q of draft.questions) {
    if (new Set(q.choices).size !== 4) { console.error(`${year} Q${q.originalNumber}: not 4 distinct choices`); ok = false; }
    if (q.answerIndex < 0 || q.answerIndex > 3) { console.error(`${year} Q${q.originalNumber}: bad answerIndex`); ok = false; }
    if (q.unitId < 1 || q.unitId > 21) { console.error(`${year} Q${q.originalNumber}: bad unitId ${q.unitId}`); ok = false; }
    const officialLetter = key?.[String(q.originalNumber)];
    if (officialLetter && letterToIndex[officialLetter] !== q.answerIndex) {
      console.error(`${year} Q${q.originalNumber}: answerIndex ${q.answerIndex} != confirmed ${officialLetter}(${letterToIndex[officialLetter]})`);
      ok = false;
    }
  }
  if (!ok) { console.error(`${year}: VALIDATION FAILED, skipping merge for this year`); continue; }
  console.log(`${year}: ${draft.questions.length} questions OK (json draft)`);
  newConsts.push(`  const exam${year} = [\n${draft.questions.map(mcCall).join(",\n")}\n  ];\n`);
  const omittedLine = draft.omittedNote ? `,\n      omittedNote: ${JSON.stringify(draft.omittedNote)}` : "";
  returnEntries.push({ year, text: `    ${year}: {\n      minutes: 70,\n      questions: [...exam${year}]${omittedLine}\n    }` });
}

let src = fs.readFileSync(archivePath, "utf8");
const marker = "\n  return {";
const idx = src.indexOf(marker);
if (idx === -1) throw new Error("could not find return marker in archive-exams.js");
const header = src.slice(0, idx);

const existingReturn = {
  114: `    114: {\n      minutes: 70,\n      questions: [...exam114]\n    }`,
  111: `    111: {\n      minutes: 70,\n      questions: [...exam111],\n      omittedNote: "本卷僅收錄自然科試題中屬於理化（物理＋化學）範圍的題目，共 19 題；生物、地球科學題目不在本站範圍內，一律未收錄。另有 4 題理化題因圖片關鍵資訊無法確實辨識、或題目情境跨領域難以判定歸屬而略過：第30題（鍍銅裝置與鋅銅電池圖中電子流／電流方向箭頭的實際指向無法確實辨識）、第42題（發酵裝置圖橡皮塞位置與集氣瓶正倒放置等圖面細節難以確實辨識）、第43題（氣體檢驗方法合理性判斷之情境屬生物發酵實驗，是否應歸屬理化不確定）、第47題（電路實體接線圖過於複雜，難以確實追蹤導線接法）。"\n    }`
};
for (const { year, text } of returnEntries) existingReturn[year] = text;

const orderedYears = [115, 114, 113, 112, 111, 110, 109, 108, 107, 106].filter(y => existingReturn[y]);
const returnBlock = `\n  return {\n${orderedYears.map(y => existingReturn[y]).join(",\n")}\n  };\n})();\n`;

const finalSrc = header + "\n" + newConsts.join("\n") + returnBlock;
fs.writeFileSync(archivePath, finalSrc, "utf8");
console.log(`\nWrote merged archive-exams.js covering years: ${orderedYears.join(", ")}`);
