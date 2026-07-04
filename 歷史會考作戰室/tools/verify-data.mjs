// 自我檢查腳本：載入歷史站的資料模組，檢查跨檔案的資料一致性。
// 用法：node tools/verify-data.mjs（在 歷史會考作戰室/ 目錄下執行）
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { loadFractionMarkup } from "../../shared/load-fraction-markup.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const sandbox = { window: {}, console, Date, Math };
vm.createContext(sandbox);
loadFractionMarkup(sandbox);

for (const file of ["history-data.js", "quiz-taxonomy.js", "questions.js", "analysis-data.js"]) {
  const code = fs.readFileSync(path.join(root, file), "utf8");
  vm.runInContext(code, sandbox, { filename: file });
}

const { HISTORY_DATA, EXAM_ENGINE, HISTORY_ANALYSIS } = sandbox.window;
const errors = [];
const check = (cond, msg) => { if (!cond) errors.push(msg); };

// 1. 單元 id 應為 1..20 連續整數
const unitIds = HISTORY_DATA.units.map(u => u.id);
check(unitIds.length === 20, `HISTORY_DATA.units 應有 20 個單元，實際 ${unitIds.length} 個`);
unitIds.forEach((id, i) => check(id === i + 1, `單元 id 應依序為 ${i + 1}，實際為 ${id}`));

// 2. 小考題庫：每份小考的實際出題數應等於 blueprint.questionCount，unitIds 皆有效
for (const blueprint of EXAM_ENGINE.quizCatalog) {
  const quiz = EXAM_ENGINE.generateQuiz(blueprint.id);
  check(quiz.questions.length === blueprint.questionCount,
    `小考 ${blueprint.id} 題數不符：blueprint=${blueprint.questionCount}，實際=${quiz.questions.length}`);
  quiz.questions.forEach((q, i) => {
    check(Array.isArray(q.choices) && q.choices.length === 4, `小考 ${blueprint.id} 第 ${i + 1} 題選項數應為 4`);
    check(q.answer >= 0 && q.answer < q.choices.length, `小考 ${blueprint.id} 第 ${i + 1} 題 answer 索引超出範圍`);
  });
  blueprint.unitIds.forEach(id => check(unitIds.includes(id), `小考 ${blueprint.id} 引用的 unitId=${id} 不存在於 HISTORY_DATA`));
}



// 5. domainByUnit 必須涵蓋所有單元 id
// ponytail: analysis-data.js is frozen research coding; official papers are PDF-only now.
const analysisObj = HISTORY_ANALYSIS;
const analysisName = "HISTORY_ANALYSIS";
Object.entries(analysisObj.primaryUnits || {}).forEach(([year, unitSeq]) => {
  check(Array.isArray(unitSeq) && unitSeq.length > 0, `${year} 年 primaryUnits 為空`);
  unitSeq.forEach((unitId, i) => check(unitIds.includes(unitId), `${year} 年第 ${i + 1} 題 unitId=${unitId} 無效`));
});
if (analysisObj.officialByYear) {
  Object.keys(analysisObj.primaryUnits || {}).forEach(year => {
    const info = analysisObj.officialByYear[year];
    check(!!info, `${year} 年 officialByYear 缺失`);
    if (!info) return;
    const seqLen = analysisObj.primaryUnits[year].length;
    if (info.count != null) check(info.count === seqLen, `${year} 年 count(${info.count}) ≠ primaryUnits(${seqLen})`);
    if (info.abilities) {
      const sum = Object.values(info.abilities).reduce((s, v) => s + v, 0);
      check(sum === info.count, `${year} 年 abilities 合計(${sum}) ≠ count(${info.count})`);
    }
  });
}
unitIds.forEach(id => check(!!analysisObj.domainByUnit?.[id], `domainByUnit 缺少 unit ${id}`));
check(Object.keys(analysisObj.primaryUnits || {}).length === 10, `${analysisName} 應涵蓋 10 年 primaryUnits`);

if (errors.length) {
  console.error(`發現 ${errors.length} 個問題：`);
  errors.forEach(e => console.error(" -", e));
  process.exit(1);
} else {
  const years = Object.keys(HISTORY_ANALYSIS.primaryUnits).sort();
  const totalArchiveQ = years.reduce((s, y) => s + HISTORY_ANALYSIS.primaryUnits[y].length, 0);
  console.log(`全部檢查通過：20 個單元、${EXAM_ENGINE.quizCatalog.length} 份小考、凍結逐題分析 ${years.length} 年（${years.join("、")}）共 ${totalArchiveQ} 題。`);
}
