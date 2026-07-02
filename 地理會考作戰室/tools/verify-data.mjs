// 自我檢查腳本：載入地理站的資料模組，檢查跨檔案的資料一致性。
// 用法：node tools/verify-data.mjs（在 地理會考作戰室/ 目錄下執行）
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const sandbox = { window: {}, console, Date, Math };
vm.createContext(sandbox);

for (const file of ["geography-data.js", "questions.js", "analysis-data.js", "archive-exams.js"]) {
  const code = fs.readFileSync(path.join(root, file), "utf8");
  vm.runInContext(code, sandbox, { filename: file });
}

const { GEOGRAPHY_DATA, EXAM_ENGINE, GEOGRAPHY_ANALYSIS, ARCHIVE_EXAMS } = sandbox.window;
const errors = [];
const check = (cond, msg) => { if (!cond) errors.push(msg); };

// 1. 單元 id 應為 1..20 連續整數
const unitIds = GEOGRAPHY_DATA.units.map(u => u.id);
check(unitIds.length === 20, `GEOGRAPHY_DATA.units 應有 20 個單元，實際 ${unitIds.length} 個`);
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
  blueprint.unitIds.forEach(id => check(unitIds.includes(id), `小考 ${blueprint.id} 引用的 unitId=${id} 不存在於 GEOGRAPHY_DATA`));
}

// 3. 考卷典藏：unitId 有效、四選項、answer 索引有效、steps/tip/trap 齊全
Object.entries(ARCHIVE_EXAMS).forEach(([year, exam]) => {
  exam.questions.forEach((q, i) => {
    check(unitIds.includes(q.unitId), `archive-exams ${year} 第 ${i + 1} 題 unitId=${q.unitId} 不存在於 GEOGRAPHY_DATA`);
    check(Array.isArray(q.choices) && q.choices.length === 4, `archive-exams ${year} 第 ${i + 1} 題選項數應為 4`);
    check(q.answer >= 0 && q.answer < 4, `archive-exams ${year} 第 ${i + 1} 題 answer 索引超出範圍`);
    check(Array.isArray(q.steps) && q.steps.length > 0, `archive-exams ${year} 第 ${i + 1} 題缺少 steps`);
    check(!!q.tip && !!q.trap, `archive-exams ${year} 第 ${i + 1} 題缺少 tip 或 trap`);
  });
});

// 4. analysis-data 的 primaryUnits[year] 必須與 archive-exams[year] 逐題對應（數量與 unitId 順序一致），
//    officialByYear[year] 的題數與能力向度總和也必須與 archive-exams 一致
Object.entries(GEOGRAPHY_ANALYSIS.primaryUnits).forEach(([year, unitSeq]) => {
  const exam = ARCHIVE_EXAMS[year];
  check(!!exam, `analysis-data primaryUnits 有 ${year} 年，但 archive-exams 沒有對應年度`);
  if (!exam) return;
  check(unitSeq.length === exam.questions.length,
    `${year} 年 primaryUnits 長度(${unitSeq.length}) 與 archive-exams 題數(${exam.questions.length}) 不一致`);
  unitSeq.forEach((unitId, i) => {
    const actual = exam.questions[i]?.unitId;
    check(unitId === actual, `${year} 年第 ${i + 1} 題 primaryUnits 記錄 unitId=${unitId}，但 archive-exams 實際 unitId=${actual}`);
  });
  const info = GEOGRAPHY_ANALYSIS.officialByYear[year];
  check(!!info, `analysis-data officialByYear 缺少 ${year} 年`);
  if (!info) return;
  check(info.count === exam.questions.length, `${year} 年 officialByYear.count(${info.count}) 與 archive-exams 題數(${exam.questions.length}) 不一致`);
  const abilitySum = Object.values(info.abilities).reduce((s, v) => s + v, 0);
  check(abilitySum === info.count, `${year} 年 abilities 總和(${abilitySum}) 與 count(${info.count}) 不一致`);
});
Object.keys(ARCHIVE_EXAMS).forEach(year => check(!!GEOGRAPHY_ANALYSIS.primaryUnits[year], `archive-exams 有 ${year} 年，但 analysis-data primaryUnits 沒有登記`));

// 5. domainByUnit 必須涵蓋所有單元 id
unitIds.forEach(id => check(!!GEOGRAPHY_ANALYSIS.domainByUnit[id], `analysis-data domainByUnit 缺少單元 ${id}`));

if (errors.length) {
  console.error(`發現 ${errors.length} 個問題：`);
  errors.forEach(e => console.error(" -", e));
  process.exit(1);
} else {
  const years = Object.keys(ARCHIVE_EXAMS).sort();
  const totalArchiveQ = Object.values(ARCHIVE_EXAMS).reduce((s, e) => s + e.questions.length, 0);
  console.log(`全部檢查通過：20 個單元、${EXAM_ENGINE.quizCatalog.length} 份小考、考卷典藏 ${years.length} 年（${years.join("、")}）共 ${totalArchiveQ} 題。`);
}
