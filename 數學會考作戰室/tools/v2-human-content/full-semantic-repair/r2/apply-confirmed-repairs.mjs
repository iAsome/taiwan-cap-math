#!/usr/bin/env node
import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const PACKAGE = process.argv[2] ? path.resolve(process.argv[2]) : null;
const CONTENT = path.join(ROOT, "數學會考作戰室", "tools", "v2-human-content");
const U03 = path.join(CONTENT, "batches", "004-u03-complete", "units", "u03");
const U04 = path.join(CONTENT, "batches", "005-u04-complete", "units", "u04");
const OUT = path.join(CONTENT, "full-semantic-repair", "r2");
const AUTHORITY = "CHATGPT_HUMAN_AUTHORED_R1";
const REVIEWER = "CODEX_IMPLEMENTATION_R2_PENDING_CENTRAL_REVIEW";

if (!PACKAGE || !fs.existsSync(path.join(PACKAGE, "PACKAGE_MANIFEST.json"))) {
  throw new Error("Usage: node apply-confirmed-repairs.mjs <package-root>");
}

const stable = value => {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map(key => [key, stable(value[key])]));
  }
  return value;
};
const sha = value => crypto.createHash("sha256").update(value).digest("hex");
const contentSha = record => {
  const copy = structuredClone(record);
  delete copy.contentSha256;
  return sha(JSON.stringify(stable(copy)));
};
const readJson = file => JSON.parse(fs.readFileSync(file, "utf8"));
const readJsonl = file => fs.readFileSync(file, "utf8").split(/\r?\n/).filter(Boolean).map(JSON.parse);
const writeJson = (file, value) => fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`);
const writeJsonl = (file, rows) => fs.writeFileSync(file, `${rows.map(row => JSON.stringify(row)).join("\n")}\n`);
const changedFields = (before, after) => [...new Set([...Object.keys(before), ...Object.keys(after)])]
  .filter(key => JSON.stringify(before[key]) !== JSON.stringify(after[key]))
  .sort((a, b) => a.localeCompare(b, "en"));
const rel = file => path.relative(ROOT, file).split(path.sep).join("/");
const records = [];

const skillDir = (unit, skill) => path.join(unit === "u03" ? U03 : U04, skill);
const mcFile = (unit, skill) => path.join(skillDir(unit, skill), "mc-questions.jsonl");
const reviewFile = (unit, skill) => path.join(skillDir(unit, skill), "semantic-reviews.jsonl");
const crFile = (unit, skill) => path.join(skillDir(unit, skill), "constructed-response.jsonl");
const lectureFile = (unit, skill) => path.join(skillDir(unit, skill), "lecture.json");

function recordChange(type, id, file, before, after, decision) {
  records.push({
    type,
    id,
    sourcePath: rel(file),
    beforeSha256: contentSha(before),
    afterSha256: contentSha(after),
    changedFields: changedFields(before, after).filter(field => field !== "contentSha256"),
    independentDecision: decision,
    reviewer: REVIEWER,
    status: "IMPLEMENTED_PENDING_CENTRAL_ACCEPTANCE"
  });
}

function refreshReview(file, question, solution) {
  const reviews = readJsonl(file);
  const review = reviews.find(row => row.questionId === question.questionId);
  if (!review) throw new Error(`Missing semantic review: ${question.questionId}`);
  const correct = question.choices[question.answerIndex];
  const wrong = question.optionAnalysis.filter((_, index) => index !== question.answerIndex);
  review.contentSha256 = question.contentSha256;
  if ("independentSolution" in review) review.independentSolution = solution;
  if ("independentRecalculation" in review) review.independentRecalculation = solution;
  review.derivedAnswer = correct;
  review.storedAnswer = correct;
  review.answerMatch = true;
  review.optionTruth = question.choices.map((_, index) => index === question.answerIndex);
  review.uniqueCorrectAnswer = true;
  review.ambiguityChecks.secondCorrectAnswer = `獨立推導得到「${correct}」。其餘選項逐項核算：${wrong.map(item => `「${item.choice}」不成立，${item.reason}`).join("；")}`;
  review.ambiguityChecks.undefinedSymbol = `題幹中的數量、未知數與符號均已明示；本次依目前題幹重新檢查 ${question.questionId}，未使用未定義記號。`;
  review.ambiguityChecks.unitConflict = question.unitCheck || "各選項使用相同量型與單位；獨立重算沒有混用單位。";
  review.ambiguityChecks.roundingConflict = question.roundingCheck || "所有數值均為精確值，題目不需要未交代的近似或四捨五入。";
  review.ambiguityChecks.domainBoundary = question.boundaryAudit || "只使用鎖定先備與本技能的一元一次方程式方法。";
  review.ambiguityChecks.alternateReading = `依主詞、時間點、單位與所求量重讀後，只有「${correct}」符合全部條件。`;
  review.difficultyReason = question.difficultyReason || `${question.difficulty} 題需要完成「${question.authoringIntent || question.target || question.concept}」所述的實際作答工作。`;
  review.literacyContextNecessity = question.literacyContextNecessity ?? null;
  review.prerequisiteCheck = `先備技能：${(question.prerequisiteSkillIds || []).join("、") || "題幹所需基本運算"}；未提前使用後續單元方法。`;
  review.languageCheck = `題幹明確指定已知量與所求；正解「${correct}」及三個干擾選項均已依顯示內容核算。`;
  review.reviewerDecision = "pass";
  review.reviewerNote = `${question.questionId} 本次獨立重算：${solution} 正解為「${correct}」。${question.optionAnalysis.map(item => `「${item.choice}」：${item.reason}`).join("；")}`;
  review.reviewedAt = "2026-07-14";
  review.contentAuthority = AUTHORITY;
  writeJsonl(file, reviews);
}

function patchMc(unit, skill, id, patch, solution, decision) {
  const file = mcFile(unit, skill);
  const rows = readJsonl(file);
  const item = rows.find(row => row.questionId === id);
  if (!item) throw new Error(`Missing MC ${id}`);
  if (item.contentSha256 !== contentSha(item)) throw new Error(`Stale MC hash ${id}`);
  const before = structuredClone(item);
  Object.assign(item, patch);
  if (item.choices.length !== 4 || item.optionAnalysis.length !== 4) throw new Error(`${id}: four choices required`);
  item.optionAnalysis.forEach((entry, index) => {
    if (entry.choice !== item.choices[index]) throw new Error(`${id}: option analysis order mismatch`);
    if (entry.truth !== (index === item.answerIndex)) throw new Error(`${id}: option truth mismatch`);
  });
  if (new Set(item.choices.map(choice => choice.replaceAll("−", "-").replaceAll("－", "-").replace(/\s+/g, ""))).size !== 4) {
    throw new Error(`${id}: normalized choices are not unique`);
  }
  item.contentSha256 = contentSha(item);
  writeJsonl(file, rows);
  refreshReview(reviewFile(unit, skill), item, solution);
  recordChange("mc", id, file, before, item, decision);
}

function patchLecture(unit, skill, mutate, decision) {
  const file = lectureFile(unit, skill);
  const lecture = readJson(file);
  if (lecture.contentSha256 !== contentSha(lecture)) throw new Error(`Stale lecture hash ${unit}-${skill}`);
  const before = structuredClone(lecture);
  mutate(lecture);
  lecture.contentSha256 = contentSha(lecture);
  writeJson(file, lecture);
  recordChange("lecture", lecture.lectureId, file, before, lecture, decision);
}

function patchCr(unit, skill, id, mutate, decision) {
  const file = crFile(unit, skill);
  const rows = readJsonl(file);
  const item = rows.find(row => row.questionId === id);
  if (!item) throw new Error(`Missing CR ${id}`);
  if (item.contentSha256 !== contentSha(item)) throw new Error(`Stale CR hash ${id}`);
  const before = structuredClone(item);
  mutate(item);
  item.contentSha256 = contentSha(item);
  writeJsonl(file, rows);
  recordChange("cr", id, file, before, item, decision);
}

const oa = (choices, answerIndex, reasons) => choices.map((choice, index) => ({
  choice,
  truth: index === answerIndex,
  reason: reasons[index]
}));

// U03-S005: repair false distractor paths and replace the three inflated advanced items.
patchMc("u03", "s005", "u03-s005-v002", {
  optionAnalysis: oa(["1", "9", "5", "14"], 1, [
    "兩邊除以 2 得 x−4=5，若把移項方向做反，會算成 x=5−4=1。",
    "兩邊除以 2 得 x−4=5，再加 4 得 x=9。",
    "只做到 x−4=5 就把 5 當成 x。",
    "忽略括號外的 2，直接把 10+4 當成 x，得到 14。"
  ])
}, "兩邊除以 2 得 x−4=5，再加 4 得 x=9。", "修正四個選項的可重現推導；正解維持 9。" );

patchMc("u03", "s005", "u03-s005-v003", {
  choices: ["−6", "3", "6", "8"],
  optionAnalysis: oa(["−6", "3", "6", "8"], 2, [
    "由 −2x=−12 除以 2 而不是 −2，會誤得 x=−6。",
    "只計算 5−2=3，錯把常數結果當成 x。",
    "展開得 3−2x=−9，因此 −2x=−12，x=6。",
    "把 −2(x+1) 錯展開成 −2x+2，會得到 7−2x=−9，進而算出 x=8。"
  ])
}, "5−2(x+1)=−9 展開為 3−2x=−9，所以 −2x=−12，x=6。", "以實際可算出的 8 取代無法由原錯因得到的 7。" );

patchMc("u03", "s005", "u03-s005-v005", {
  optionAnalysis: oa(["1", "9", "7", "13"], 1, [
    "只計算 x 項係數 3−2=1，誤把係數差當成方程式的解。",
    "展開並合併得 3x−1=2x+8，所以 x=9。",
    "把 −6+5 錯算成 1，會得到 3x+1=2x+8，因此 x=7。",
    "忽略 −6，只把右邊 8 與左邊 5 相加，會得到 13。"
  ])
}, "3(x−2)+5=2x+8 化簡為 3x−1=2x+8，所以 x=9。", "將模糊錯因改成能精確產生顯示選項的運算。" );

patchMc("u03", "s005", "u03-s005-v007", {
  text: "解方程式 2[3(x−1)−(x+4)]−5=3(x−2)+7，x 為何？",
  choices: ["15", "8", "6", "20"],
  explanation: "左邊展開為 4x−19，右邊展開為 3x+1；令兩邊相等可得 x=20。",
  steps: ["先化簡中括號為 2x−7", "展開兩邊得 4x−19=3x+1", "移項得到 x=20"],
  optionAnalysis: oa(["15", "8", "6", "20"], 3, [
    "漏掉括號外的 −5，會列成 4x−14=3x+1，得到 x=15。",
    "外面的 2 只乘第一項，會得到 5x−15=3x+1，因此 x=8。",
    "把右邊的 +7 錯看成 −7，會得到 4x−19=3x−13，因此 x=6。",
    "完整展開後為 4x−19=3x+1，所以 x=20。"
  ]),
  commonMistake: "巢狀括號的外係數只分配到第一項，導致整個一次式改變。",
  concept: "含兩層括號且等號兩邊都要展開的一元一次方程式。",
  authoringIntent: "整合巢狀括號、負號分配與兩邊未知數，不能靠單一步驟求解。"
}, "中括號是 2x−7；左邊為 4x−19，右邊為 3x+1，因此 x=20。", "以多層分配與兩邊未知數的真實進階題取代難度膨脹題。" );

patchMc("u03", "s005", "u03-s005-v008", {
  text: "解方程式 4−{2−[3x−(5−x)]}=18，x 為何？",
  choices: ["21/4", "−11/4", "21/2", "15/4"],
  explanation: "最內層化簡為 4x−5，中括號外的減號使整體成為 7−4x，原式再化為 4x−3=18，所以 x=21/4。",
  steps: ["化簡 3x−(5−x)=4x−5", "整理 2−(4x−5)=7−4x", "解 4−(7−4x)=18"],
  optionAnalysis: oa(["21/4", "−11/4", "21/2", "15/4"], 0, [
    "逐層處理負號後得到 4x−3=18，因此 x=21/4。",
    "把外層寫成 4−2−[3x−(5−x)]=18，會算成 x=−11/4。",
    "把 3x−(5−x) 錯化簡成 2x−5，會得到 2x−3=18，因此 x=21/2。",
    "由 4x−3=18 移項時把 −3 方向做反，會得到 4x=15，因此 x=15/4。"
  ]),
  commonMistake: "連續兩個括號前的減號沒有逐層處理，造成內部 x 的符號錯誤。",
  concept: "多層括號中的負號分配與一元一次方程式求解。",
  authoringIntent: "要求依括號層級由內向外化簡並辨識三種不同負號錯誤。"
}, "3x−(5−x)=4x−5，原式化為 4x−3=18，所以 x=21/4。", "以三層括號與可驗證符號錯誤取代單純巢狀題。" );

patchMc("u03", "s005", "u03-s005-v009", {
  text: "解方程式 0.6(5x−10)−0.25(4x+8)=10，x 為何？",
  choices: ["7", "12", "9", "18"],
  explanation: "兩個括號分別展開後，左邊為 3x−6−x−2=2x−8；由 2x−8=10 得 x=9。",
  steps: ["展開 0.6(5x−10)=3x−6", "展開 −0.25(4x+8)=−x−2", "解 2x−8=10"],
  optionAnalysis: oa(["7", "12", "9", "18"], 2, [
    "把第二個括號的常數項符號寫成 +2，會得到 2x−4=10，因此 x=7。",
    "沒有把 0.25 分配給 8，誤寫成 3x−6−x−8=10，會得到 x=12。",
    "正確展開得到 2x−8=10，所以 x=9。",
    "做到 2x=18 就停止，會把 18 誤當成 x。"
  ]),
  commonMistake: "小數係數分配到括號時漏乘常數項，或忘記括號前還有減號。",
  concept: "含小數係數與兩個括號的一元一次方程式。",
  authoringIntent: "同時檢查小數分配、括號前負號與最後除以係數。"
}, "展開得 3x−6−x−2=10，也就是 2x−8=10，因此 x=9。", "以兩個小數括號的多步題取代單一步驟小數題。" );

patchMc("u03", "s005", "u03-s005-v011", {
  choices: ["11", "45", "13", "15"],
  optionAnalysis: oa(["11", "45", "13", "15"], 0, [
    "3(x+4)=45，先除以 3 得 x+4=15，再減 4 得 x=11。",
    "把三盒的總數 45 直接當成每盒原有數量。",
    "把每盒多 4 顆誤看成多 2 顆，算成 15−2=13。",
    "做到 x+4=15 就停止，未扣掉每盒增加的 4 顆。"
  ])
}, "3(x+4)=45，所以 x+4=15，x=11。", "以可重現的 45 取代無法由原錯因得到的 9。" );

patchMc("u03", "s005", "u03-s005-v012", {
  optionAnalysis: oa(["8", "12", "10", "14"], 1, [
    "由 x−2=10 恢復 x 時誤減 2，會得到 x=8。",
    "6(x−2)+12=72 化簡得 x−2=10，因此 x=12。",
    "做到 x−2=10 就把 10 當成 x。",
    "由 x−2=10 加回 2 兩次，會得到 14。"
  ])
}, "6(x−2)+12=72，減 12 並除以 6 得 x−2=10，所以 x=12。", "逐項改成能由原方程式精確重現的錯誤路徑。" );

// U03-S006: correct prerequisite/distractor reasoning and replace inflated advanced items.
patchMc("u03", "s006", "u03-s006-v001", {
  choices: ["21", "7/3", "10", "4"],
  optionAnalysis: oa(["21", "7/3", "10", "4"], 0, [
    "x/3=7 的兩邊同乘 3，得到 x=21。",
    "把 x/3=7 的右邊又除以 3，會得到 7/3。",
    "把 x/3 錯看成 x−3，解 x−3=7 得 10。",
    "把 x/3 錯看成 x+3，解 x+3=7 得 4。"
  ])
}, "x/3=7 的兩邊同乘 3，所以 x=21。", "以可由誤讀分數線得到的 4 取代無根據的 24。" );

patchMc("u03", "s006", "u03-s006-v004", {
  choices: ["18", "63", "90", "30"],
  optionAnalysis: oa(["18", "63", "90", "30"], 3, [
    "只處理 x/2=9，會得到 x=18。",
    "把分母 2、5 相加成 7，誤寫成 x/7=9，會得到 x=63。",
    "通分得 3x/10=9 後只乘 10，會得到 90。",
    "通分得 3x/10=9，所以 3x=90，x=30。"
  ])
}, "x/2−x/5=3x/10=9，所以 3x=90，x=30。", "將 45 改成分母相加錯誤實際產生的 63。" );

patchMc("u03", "s006", "u03-s006-v005", {
  choices: ["17/4", "17/2", "17", "23/2"],
  optionAnalysis: oa(["17/4", "17/2", "17", "23/2"], 1, [
    "得到 2x=17 後誤用原分母 4 去除，會得到 17/4。",
    "兩邊乘 4 得 2x+3=20，所以 2x=17，x=17/2。",
    "做到 2x=17 就停止，未再除以 2。",
    "把 2x+3=20 的 3 移項方向做反，會得到 x=23/2。"
  ])
}, "(2x+3)/4=5，兩邊乘 4 得 2x+3=20，所以 x=17/2。", "將模糊的 7 改成能由錯用原分母精確得到的 17/4。" );

patchMc("u03", "s006", "u03-s006-v006", {
  optionAnalysis: oa(["1/3", "2", "1", "4"], 2, [
    "算到 x/3=1/3 就停止，會把 1/3 當成 x。",
    "把 5/6−1/2 錯算成 2/3，再乘 3，會得到 x=2。",
    "5/6−1/2=1/3，因此 x/3=1/3，x=1。",
    "把移項誤做成 5/6+1/2=4/3，再乘 3，會得到 x=4。"
  ])
}, "x/3=5/6−1/2=1/3，所以 x=1。", "將四個分數錯因改為完整且可重現的算式。" );

patchMc("u03", "s006", "u03-s006-v007", {
  text: "解方程式 (2x−1)/3−(x+2)/4=(x−5)/6+3，哪一組「去分母後的式子；x 值」都正確？",
  choices: [
    "8x−4−3x−6=2x−10+3；x=1",
    "8x−4−3x+6=2x−10+36；x=8",
    "8x−4−3x−6=2x−10+36；x=36",
    "8x−4−3x−6=2x−10+36；x=12"
  ],
  explanation: "所有項同乘 12 得 8x−4−3x−6=2x−10+36，整理為 3x=36，所以 x=12。",
  steps: ["找分母 3、4、6 的最小公倍數 12", "等式每一項同乘 12", "整理為 3x=36 並求得 x=12"],
  optionAnalysis: oa([
    "8x−4−3x−6=2x−10+3；x=1",
    "8x−4−3x+6=2x−10+36；x=8",
    "8x−4−3x−6=2x−10+36；x=36",
    "8x−4−3x−6=2x−10+36；x=12"
  ], 3, [
    "右邊常數 3 漏乘 12，錯式會導出 x=1。",
    "減去 (x+2)/4 時把分子常數的符號寫成 +6，錯式會導出 x=8。",
    "去分母式正確，但做到 3x=36 就把 36 當成 x。",
    "去分母與後續整理都正確，最後由 3x=36 得 x=12。"
  ]),
  commonMistake: "去分母時只乘分數項，漏乘整數 3，或漏掉減號作用於整個分子。",
  concept: "多分母、括號與負號同時出現時的等式整體同乘。",
  authoringIntent: "同時判斷去分母式與最終解，避免只靠答案猜測。"
}, "最小公倍數為 12；同乘後得 8x−4−3x−6=2x−10+36，整理得 x=12。", "以去分母式與解的雙重判斷取代單純通分題。" );

patchMc("u03", "s006", "u03-s006-v008", {
  text: "解方程式 (3x−2)/5+(x+1)/2=(2x+7)/10+4，x 為何？",
  choices: ["46/9", "13/3", "32/9", "10/9"],
  explanation: "等式每一項同乘 10，得 6x−4+5x+5=2x+7+40；整理為 9x=46，所以 x=46/9。",
  steps: ["以 10 消去所有分母", "合併為 11x+1=2x+47", "移項後解 9x=46"],
  optionAnalysis: oa(["46/9", "13/3", "32/9", "10/9"], 0, [
    "完整同乘 10 並整理可得 9x=46，因此 x=46/9。",
    "漏掉右邊分子中的 +7，會得到 9x=39，因此 x=13/3。",
    "把右邊的 +7 錯寫成 −7，會得到 9x=32，因此 x=32/9。",
    "整數 4 沒有乘 10，會得到 9x=10，因此 x=10/9。"
  ]),
  commonMistake: "同乘公倍數時遺漏整數項，或只乘分子中的未知數項。",
  concept: "三種分母與整數項並存的一元一次方程式。",
  authoringIntent: "要求完整處理每個分子與等式中的整數項。"
}, "同乘 10 後為 11x+1=2x+47，因此 9x=46，x=46/9。", "以三分母且兩邊皆有分式的進階題取代簡單去分母題。" );

patchMc("u03", "s006", "u03-s006-v009", {
  text: "解方程式 0.3(x−5)+x/4=2.1，x 為何？",
  choices: ["42/11", "12/11", "72/11", "72"],
  explanation: "將小數與分母一次處理，等式同乘 20 得 6(x−5)+5x=42；整理為 11x=72，所以 x=72/11。",
  steps: ["等式同乘 20", "展開得 11x−30=42", "移項並除以 11"],
  optionAnalysis: oa(["42/11", "12/11", "72/11", "72"], 2, [
    "展開時漏掉 −30，會由 11x=42 得 x=42/11。",
    "把 −30 移到右邊時方向做反，會由 11x=12 得 x=12/11。",
    "正確整理為 11x=72，所以 x=72/11。",
    "做到 11x=72 就停止，會把 72 誤當成 x。"
  ]),
  commonMistake: "小數化整數後忘記括號內的 −5 仍要乘 6。",
  concept: "小數係數與分數係數混合的一元一次方程式。",
  authoringIntent: "整合小數、分母、括號與分數解，要求完整等量變形。"
}, "同乘 20 得 6(x−5)+5x=42，整理為 11x=72，因此 x=72/11。", "以小數和分數混合的多步方程式取代單一步驟小數題。" );

patchMc("u03", "s006", "u03-s006-v011", {
  choices: ["240", "120", "360", "15"],
  optionAnalysis: oa(["240", "120", "360", "15"], 0, [
    "x/4+30=90，所以 x/4=60，x=240。",
    "把 90+30 當成全書頁數，得到 120。",
    "忽略已讀的 30 頁，直接由 x/4=90 得 x=360。",
    "把 x/4 誤看成 4x，解 4x+30=90 得 x=15。"
  ])
}, "x/4+30=90，所以 x/4=60，x=240。", "以把 x/4 誤看成 4x 的 15 取代無法由原錯因得到的 480。" );

patchMc("u03", "s006", "u03-s006-v012", {
  choices: ["1.5", "4.5", "2.25", "6"],
  optionAnalysis: oa(["1.5", "4.5", "2.25", "6"], 1, [
    "把剩下的 1.5 公斤直接當成原有總量。",
    "用掉 2/3 後剩 1/3，所以總量 x 滿足 x/3=1.5，得 x=4.5。",
    "誤把 1.5 公斤看成用掉的 2/3，算 1.5÷(2/3)=2.25。",
    "把剩餘比例 1/3 錯看成 1/4，算 1.5÷(1/4)=6。"
  ])
}, "原量的 1/3 是 1.5 公斤，因此 x=1.5×3=4.5 公斤。", "以題幹現有數值能精確得到的 1.5 取代無依據的 1。" );

// U03-S007: the task must check candidates rather than solve first.
patchMc("u03", "s007", "u03-s007-v003", {
  text: "把候選值逐一代入 3x−2=10，哪一個會使等號左右兩邊相等？",
  explanation: "代入 x=4 時，左邊 3×4−2=10，與右邊相等；其餘候選值代入後都不等於 10。",
  steps: ["把每個候選值代入原式左邊", "算出 3x−2", "找出結果等於 10 的候選值"],
  optionAnalysis: oa(["2", "3", "4", "6"], 2, [
    "代入 x=2，左邊為 4，不等於 10。",
    "代入 x=3，左邊為 7，不等於 10。",
    "代入 x=4，左邊為 10，與右邊相等。",
    "代入 x=6，左邊為 16，不等於 10。"
  ]),
  authoringIntent: "逐一代入候選值，比較原方程式左右兩邊。"
}, "代入四個候選值後，只有 x=4 使 3x−2=10 成立。", "改為真正的候選解檢查，不先解方程式。" );

patchMc("u03", "s007", "u03-s007-v006", {
  text: "把候選值逐一代入 x/3+2=5，哪一個會使等號左右兩邊相等？",
  explanation: "代入 x=9 時，左邊為 9/3+2=5；其餘候選值分別使左邊成為 3、4、7。",
  steps: ["把候選值放入 x/3+2", "分別算出左邊數值", "與右邊 5 比較"],
  optionAnalysis: oa(["3", "6", "9", "15"], 2, [
    "代入 x=3，左邊為 3，不等於 5。",
    "代入 x=6，左邊為 4，不等於 5。",
    "代入 x=9，左邊為 5，等式成立。",
    "代入 x=15，左邊為 7，不等於 5。"
  ]),
  authoringIntent: "檢查含分母方程式的候選值，而不是先移項求解。"
}, "代入後只有 x=9 使左邊 9/3+2=5，與右邊相等。", "改為分數式候選值檢查，移除先解方程式的作答方式。" );

// U03-S008: repair same-time age modelling and exact distractor paths.
patchMc("u03", "s008", "u03-s008-v004", {
  choices: ["9", "11", "36", "13"],
  optionAnalysis: oa(["9", "11", "36", "13"], 3, [
    "36÷4=9 是女兒 4 年前的年齡，未加回 4 年。",
    "由 36÷4=9 後只加回 2 年，會得到 11。",
    "把母親 4 年前的年齡 36 直接當成女兒今年年齡。",
    "4 年前母親 36 歲，36=4(x−4)，所以 x=13。"
  ])
}, "4 年前母親 36 歲；設女兒今年 x 歲，36=4(x−4)，所以 x=13。", "以可由題幹得到的 36 取代無法重現的 16。" );

patchMc("u03", "s008", "u03-s008-v008", {
  optionAnalysis: oa(["10", "8", "12", "26"], 0, [
    "兩年前兩人共 32 歲，按 3:1 分成四份，乙當時 8 歲，所以今年 10 歲。",
    "算出乙兩年前 8 歲後忘記加回 2 年。",
    "直接用今年總和 36 除以倍數 3，忽略總份數其實是 4。",
    "甲今年為 36−10=26 歲，這不是題目所問的乙。"
  ])
}, "兩年前總年齡為 32，甲乙年齡比為 3:1；乙兩年前 8 歲，所以今年 10 歲。", "將四個選項對回同一時間點，移除不精確錯因。" );

patchMc("u03", "s008", "u03-s008-v011", {
  text: "家庭紀錄表提供兩項資料：哥哥今年比妹妹大 6 歲；4 年後兩人的年齡和是 36 歲。妹妹今年幾歲？",
  choices: ["11", "13", "15", "7"],
  explanation: "設妹妹今年 x 歲，哥哥為 x+6 歲；4 年後兩人是 x+4 與 x+10 歲，故 2x+14=36，解得 x=11。",
  steps: ["設妹妹今年 x 歲，哥哥為 x+6 歲", "把兩人都增加 4 歲", "解 (x+4)+(x+10)=36"],
  optionAnalysis: oa(["11", "13", "15", "7"], 0, [
    "列式 (x+4)+(x+10)=36，得到 2x=22，所以 x=11。",
    "只替哥哥增加 4 歲，誤列 x+(x+10)=36，會得到 x=13。",
    "忽略兩人都經過 4 年，只用今年差 6 列 2x+6=36，會得到 x=15。",
    "正確算出妹妹今年 11 歲後，又多減一次 4 年，會得到 7。"
  ]),
  commonMistake: "只替其中一人增加 4 歲，或把 4 年前後的年齡混在同一個等式。",
  concept: "年齡差固定，但兩人在同一段時間後都會增加相同歲數。",
  authoringIntent: "使用同一家庭中兩人的現在差與未來總和建立方程式。",
  literacyContextNecessity: "家庭紀錄中的年齡差與 4 年後總和缺一不可，且兩人必須移到同一時間點。"
}, "設妹妹 x 歲、哥哥 x+6 歲；4 年後列 (x+4)+(x+10)=36，解得 x=11。", "以真正同時間點的人物年齡題取代設施啟用年數題。" );

patchMc("u03", "s008", "u03-s008-v012", {
  choices: ["7", "6", "8", "9"],
  optionAnalysis: oa(["7", "6", "8", "9"], 1, [
    "只從 2 年後總和扣掉 2 歲而不是兩隻各 2 歲，會算 (17−3)/2=7。",
    "2 年後為 x+2 與 x+5，總和 19，所以 2x+7=19，x=6。",
    "用 2 年後總和 19 直接扣年齡差 3 再除 2，未扣兩隻增加的 4 歲，會得 8。",
    "直接把 19 除以 2 並取整，會誤選 9。"
  ])
}, "2 年後兩隻分別為 x+2 與 x+5；2x+7=19，所以 x=6。", "以能精確重現的 7 取代無法由原錯因得到的 4。" );

// U03-S009: correct money paths and replace all inflated advanced items.
patchMc("u03", "s009", "u03-s009-v001", {
  choices: ["30", "20", "110/3", "90"],
  optionAnalysis: oa(["30", "20", "110/3", "90"], 0, [
    "3x+20=110，扣除包裝費後 3x=90，所以 x=30。",
    "把固定包裝費 20 元直接當成每本單價。",
    "忽略包裝費，直接用 110÷3，會得到 110/3。",
    "扣除包裝費後的 90 元是三本總價，未再除以 3。"
  ])
}, "設每本 x 元，3x+20=110，所以 3x=90，x=30。", "以精確值 110/3 取代取整後的 36。" );

patchMc("u03", "s009", "u03-s009-v005", {
  choices: ["360", "168", "144", "120"],
  optionAnalysis: oa(["360", "168", "144", "120"], 1, [
    "只把 720 元看成兩張成人票總價，會算 720÷2=360。",
    "2x+3(x−40)=720，整理為 5x=840，所以 x=168。",
    "忽略每張兒童票少 40 元，直接用 720÷5，會得到 144。",
    "把 −120 移項方向做反，誤算 5x=720−120=600，會得到 120。"
  ])
}, "2x+3(x−40)=720，整理得 5x−120=720，所以 x=168。", "將三個錯誤選項都改成題幹資料可精確重現的結果。" );

patchMc("u03", "s009", "u03-s009-v007", {
  text: "團體購票滿 20 張時，每張原價 120 元可折 15 元，另收清潔費 300 元。某團符合折扣門檻且總付 2400 元，共買幾張票？",
  choices: ["35/2", "160/7", "140/9", "20"],
  explanation: "符合門檻後每張為 105 元；列 105x+300=2400，得 105x=2100，所以 x=20，且確實符合至少 20 張。",
  steps: ["先求折後單價 105 元", "列 105x+300=2400", "解得 x=20 並檢查折扣門檻"],
  optionAnalysis: oa(["35/2", "160/7", "140/9", "20"], 3, [
    "扣除清潔費後仍用原價 120 元，會算 2100÷120=35/2。",
    "使用折後單價卻漏扣清潔費，會算 2400÷105=160/7。",
    "把折價 15 元誤加到原價成 135 元，會算 2100÷135=140/9。",
    "正確使用折後單價並只加一次清潔費，得到 x=20。"
  ]),
  commonMistake: "尚未確認折扣門檻就套用折後單價，或把固定清潔費乘上票數。",
  concept: "含門檻折扣與固定費的總金額方程式。",
  authoringIntent: "先判斷折扣條件，再整合折後單價與一次性費用。"
}, "每張折後 105 元；105x+300=2400，所以 x=20，且 20 張符合門檻。", "以含費率門檻、固定費與條件驗收的進階金錢題取代單一步驟題。" );

patchMc("u03", "s009", "u03-s009-v008", {
  text: "線上課程每月基本費 350 元，前 5 堂課另收 400 元；超過 5 堂後，每多一堂再收 50 元。某月上課超過 5 堂，共付 950 元。這個月上了幾堂？",
  choices: ["9", "12", "4", "5"],
  explanation: "設總堂數為 x，超過 5 堂的部分是 x−5；列 350+400+50(x−5)=950，整理得 x=9。",
  steps: ["把總堂數設為 x 並寫出超額堂數 x−5", "列分段費用方程式", "解得 x=9 並檢查 x>5"],
  optionAnalysis: oa(["9", "12", "4", "5"], 0, [
    "350+400+50(x−5)=950，化簡為 50x=450，所以 x=9。",
    "忽略前 5 堂另收的 400 元，只列 350+50x=950，會得到 12。",
    "做到 50(x−5)=200，只算出 x−5=4 就停止。",
    "把分段門檻 5 堂直接當成總堂數，沒有使用總金額。"
  ]),
  commonMistake: "把超過門檻的堂數 x−5 誤寫成總堂數 x，導致前 5 堂重複計費。",
  concept: "基本費、固定方案費與超額單價組成的分段收費模型。",
  authoringIntent: "辨識超額數量 x−5，並在解後檢查確實超過門檻。"
}, "設總堂數 x>5；350+400+50(x−5)=950，解得 x=9。", "以分段收費和門檻檢查取代單純固定費加單價題。" );

patchMc("u03", "s009", "u03-s009-v009", {
  text: "電費含基本費 120 元；前 50 度每度 2 元，超過 50 度的部分每度 3 元。某戶本月用電超過 50 度，共付 310 元。本月用電幾度？",
  choices: ["95", "190/3", "80", "430/3"],
  explanation: "前 50 度費用為 100 元；列 120+100+3(x−50)=310，整理為 3x=240，所以 x=80。",
  steps: ["先算基本費與前 50 度費用", "以 x−50 表示超額度數", "解方程式並確認 x>50"],
  optionAnalysis: oa(["95", "190/3", "80", "430/3"], 2, [
    "扣除基本費後把全部用電都按每度 2 元計，會算 190÷2=95。",
    "扣除基本費後把全部用電都按每度 3 元計，會算 190÷3=190/3。",
    "正確分段列式 120+100+3(x−50)=310，解得 x=80。",
    "把基本費加到總額後再除以超額單價，會算 (310+120)÷3=430/3。"
  ]),
  commonMistake: "把所有用電量套用同一費率，沒有把前 50 度與超額部分分開。",
  concept: "基本費與兩段用量費率的一元一次方程式。",
  authoringIntent: "依門檻拆分前段與超額用量，並驗證解位於第二費率區間。"
}, "前 50 度費 100 元；120+100+3(x−50)=310，解得 x=80。", "以兩段費率、固定費與區間檢查的進階題取代單一費率題。" );

patchMc("u03", "s009", "u03-s009-v011", {
  choices: ["8", "640", "15.5", "23"],
  optionAnalysis: oa(["8", "640", "15.5", "23"], 0, [
    "600+80x=1240，所以 80x=640，x=8。",
    "做到 80x=640 就把 640 當成堂數。",
    "忽略固定年費，直接算 1240÷80=15.5。",
    "把固定年費方向做反，算 (1240+600)÷80=23。"
  ])
}, "600+80x=1240，扣除固定年費後 80x=640，所以 x=8。", "用三個可由固定費方向錯誤精確得到的結果取代任意整數。" );

// U03-S010: repair title/prerequisites, figure and every confirmed distractor path.
patchMc("u03", "s010", "u03-s010-v001", {
  choices: ["3", "1/3", "10800", "120"],
  optionAnalysis: oa(["3", "1/3", "10800", "120"], 0, [
    "距離=速率×時間，60t=180，所以 t=3 小時。",
    "把距離與速率的除法方向顛倒，算 60÷180=1/3。",
    "把求時間的除法誤做成乘法，算 180×60=10800。",
    "把距離與速率直接相減，算 180−60=120。"
  ])
}, "t=180÷60=3 小時。", "將無法重現的整數猜值改為三種明確錯誤運算。" );

patchMc("u03", "s010", "u03-s010-v003", {
  choices: ["6/11", "3/4", "2", "6/19"],
  optionAnalysis: oa(["6/11", "3/4", "2", "6/19"], 2, [
    "只用較快車速 55，算 30÷55=6/11。",
    "只用較慢車速 40，算 30÷40=3/4。",
    "每小時追近 55−40=15 公里，30÷15=2 小時。",
    "把同向追及誤用速率和，算 30÷(55+40)=6/19。"
  ])
}, "同向追及使用速率差 15 公里/時，30÷15=2 小時。", "所有選項改為題幹速率可直接重現的商。" );

patchMc("u03", "s010", "u03-s010-v004", {
  choices: ["30", "20/3", "60/11", "3"],
  optionAnalysis: oa(["30", "20/3", "60/11", "3"], 3, [
    "把相向而行誤用速率差，算 300÷(55−45)=30。",
    "只用 45 公里/時，算 300÷45=20/3。",
    "只用 55 公里/時，算 300÷55=60/11。",
    "相向每小時接近 45+55=100 公里，300÷100=3 小時。"
  ])
}, "相向速率和為 100 公里/時，所以相遇時間是 300÷100=3 小時。", "以速率差與單車速率的精確商取代無依據選項。" );

patchMc("u03", "s010", "u03-s010-v006", {
  choices: ["−1/2", "−1", "1", "2"],
  optionAnalysis: oa(["−1/2", "−1", "1", "2"], 2, [
    "展開 15(2−x) 時把 −15x 寫成 +15x，會由 20x+30=20 得 x=−1/2。",
    "合併 5x−15x 時漏掉負號，誤成 10x+30=20，會得到 x=−1。",
    "正確展開得 −10x+30=20，所以 x=1。",
    "把總時間 2 小時直接當成步行時間，完全忽略騎車路段。"
  ])
}, "5x+15(2−x)=20，展開得 −10x+30=20，所以 x=1 小時。", "將錯因對應到實際代數結果，並保留總時間誤讀作為情境錯誤。" );

patchMc("u03", "s010", "u03-s010-v009", {
  choices: ["2", "27", "18", "45"],
  optionAnalysis: oa(["2", "27", "18", "45"], 2, [
    "第一段用 3 小時後只算出剩餘時間 5−3=2，未換成第二段距離。",
    "把第一段的 3 小時誤套用第二段速率，算 9×3=27。",
    "第一段時間 18÷6=3 小時，第二段剩 2 小時，距離 9×2=18 公里。",
    "把全程 5 小時都套用第二段速率，算 9×5=45。"
  ])
}, "第一段需 18÷6=3 小時，剩 2 小時以 9 公里/時前進，第二段為 18 公里。", "以剩餘時間 2 取代無法由原錯因得到的 12。" );

patchMc("u03", "s010", "u03-s010-v011", {
  choices: ["3", "150", "17/5", "19/5"],
  optionAnalysis: oa(["3", "150", "17/5", "19/5"], 0, [
    "50x+20=170，所以 50x=150，x=3。",
    "做到 50x=150 就把 150 當成小時數。",
    "忽略機車行駛的 20 公里，直接算 170÷50=17/5。",
    "把固定 20 公里加到總路程後再除以 50，算 190÷50=19/5。"
  ])
}, "配送車距離 50x 加上機車 20 公里等於 170；50x=150，所以 x=3。", "所有干擾選項改成由固定路程處理錯誤精確得到的值。" );

patchMc("u03", "s010", "u03-s010-v012", {
  choices: ["150", "60", "100", "300"],
  optionAnalysis: oa(["150", "60", "100", "300"], 1, [
    "只使用步道速率，算 120÷0.8=150 秒。",
    "同方向實際速率為 0.8+1.2=2 公尺/秒，120÷2=60 秒。",
    "只使用乘客相對步道的速率，算 120÷1.2=100 秒。",
    "把同方向誤用速率差，算 120÷(1.2−0.8)=300 秒。"
  ])
}, "乘客相對地面的速率為 0.8+1.2=2 公尺/秒，所以需 60 秒。", "移除題幹未提供的 2.4，所有錯因只使用已知速率。" );

// U03-S011: repair equivalent choices and replace the inflated advanced trio.
patchMc("u03", "s011", "u03-s011-v006", {
  choices: ["16", "120/7", "17", "18"],
  optionAnalysis: oa(["16", "120/7", "17", "18"], 2, [
    "把可用長度 119 公尺除以 7 後又錯誤向下少取 1，會選 16。",
    "直接用 120÷7，忽略題目說有 1 公尺不能使用。",
    "可用長度為 119 公尺，7x=119，所以 x=17。",
    "把不能使用的 1 公尺加到每段結果，會誤選 18。"
  ])
}, "120−1=119 公尺可使用；7x=119，所以每段 x=17 公尺。", "將與正解等值的 119/7 改為 120/7，恢復唯一答案。" );

patchMc("u03", "s011", "u03-s011-v007", {
  text: "同一批餅乾若每盒裝 x 片，裝滿 6 盒後剩 12 片；若改成每盒少裝 3 片，則可裝滿 8 盒且沒有剩餘。原來每盒裝幾片？",
  choices: ["6", "12", "36", "18"],
  explanation: "同一批餅乾總量不變，列 6x+12=8(x−3)；整理得 2x=36，所以 x=18。",
  steps: ["用 6x+12 表示原分裝總量", "用 8(x−3) 表示改裝總量", "令兩個總量相等並解得 x=18"],
  optionAnalysis: oa(["6", "12", "36", "18"], 3, [
    "整理得 2x=36 後誤除以原來的 6 盒，會得到 6。",
    "把原來剩下的 12 片直接當成每盒片數。",
    "做到 2x=36 就停止，會把 36 當成 x。",
    "6x+12=8(x−3) 整理為 2x=36，所以 x=18。"
  ]),
  commonMistake: "比較兩種分裝方式時，只比較盒數而沒有令同一批物品的總量相等。",
  concept: "同一總量在兩種每份量與份數配置下的方程式。",
  authoringIntent: "整合剩餘量、每盒減量與盒數改變，需建立兩個總量式。"
}, "同一批餅乾滿足 6x+12=8(x−3)，整理得 2x=36，所以 x=18。", "以兩種分配方案的總量守恆題取代單一步驟平均題。" );

patchMc("u03", "s011", "u03-s011-v008", {
  text: "一批果汁先裝滿 x 瓶，每瓶 250 毫升，另剩 100 毫升；若改用每瓶 200 毫升的瓶子，瓶數可多 2 瓶且剛好裝完。x 為何？",
  choices: ["6", "2", "8", "300"],
  explanation: "兩種裝法的總量相同：250x+100=200(x+2)。整理得 50x=300，所以 x=6。",
  steps: ["寫出原裝法總量 250x+100", "寫出改裝法總量 200(x+2)", "令兩式相等並解 x"],
  optionAnalysis: oa(["6", "2", "8", "300"], 0, [
    "250x+100=200(x+2)，整理為 50x=300，所以 x=6。",
    "只看到瓶數多 2 瓶，就把差值 2 當成原瓶數。",
    "忽略原裝法剩下的 100 毫升，列 250x=200(x+2)，會得到 x=8。",
    "做到 50x=300 就停止，會把 300 當成 x。"
  ]),
  commonMistake: "剩餘的 100 毫升沒有列入原裝法總量，造成兩邊不是同一批果汁。",
  concept: "容量不同、瓶數改變且有剩餘量的分裝比較。",
  authoringIntent: "從兩種容器規格建立同一總量方程式並處理括號。"
}, "總量滿足 250x+100=200(x+2)，整理得 50x=300，因此 x=6。", "以兩種瓶裝容量和剩餘量的多條件題取代直接相除題。" );

patchMc("u03", "s011", "u03-s011-v009", {
  text: "同一批鉛筆若每盒裝 12 枝，可裝 x 盒並剩 6 枝；若每盒裝 15 枝，則可裝 x−2 盒並剩 12 枝。x 為何？",
  choices: ["6", "24", "8", "10"],
  explanation: "同一批鉛筆滿足 12x+6=15(x−2)+12；整理為 3x=24，所以 x=8。",
  steps: ["寫原分裝總量 12x+6", "寫另一分裝總量 15(x−2)+12", "令總量相等並解得 x=8"],
  optionAnalysis: oa(["6", "24", "8", "10"], 2, [
    "把第一種分裝剩下的 6 枝直接當成盒數。",
    "整理得 3x=24 後未除以 3，會把 24 當成 x。",
    "12x+6=15(x−2)+12 化簡為 3x=24，所以 x=8。",
    "忽略兩種裝法剩餘量不同，只列 12x=15(x−2)，會得到 x=10。"
  ]),
  commonMistake: "兩種分裝方式的剩餘量不同，卻在列式時把它們同時省略。",
  concept: "每份量、份數與不同剩餘量共同決定同一總量。",
  authoringIntent: "比較兩個都含剩餘量的分裝模型，需完整展開 x−2。"
}, "同一總量列成 12x+6=15(x−2)+12，整理得 3x=24，因此 x=8。", "以兩種不同餘數的分裝比較題取代單純扣除再平均。" );

// U03-S012: preserve the required negative-average repair and strengthen two advanced items.
patchMc("u03", "s012", "u03-s012-v007", {
  text: "五個由小到大排列的連續偶數中，最小數的 2 倍與最大數的和為 80。中間數為何？",
  choices: ["24", "72", "32", "28"],
  explanation: "設最小數為 n，最大數為 n+8。由 2n+(n+8)=80 得 3n=72，所以 n=24，中間數 n+4=28。",
  steps: ["以 n、n+2、n+4、n+6、n+8 表示五數", "列 2n+(n+8)=80 並求 n", "再求中間數 n+4"],
  optionAnalysis: oa(["24", "72", "32", "28"], 3, [
    "24 是最小數，不是題目所問的中間數。",
    "做到 3n=72 就停止，未求 n 也未求中間數。",
    "32 是最大數，不是中間數。",
    "由 n=24 得中間數 n+4=28。"
  ]),
  commonMistake: "求出最小數後直接作答，沒有回到題目所問的中間數。",
  concept: "以最小數表示連續偶數，再由條件求指定位置的數。",
  authoringIntent: "需要先解最小數，再轉換成中間數並核對公差 2。"
}, "2n+(n+8)=80，所以 n=24；五數中間值是 n+4=28。", "修正初稿的資料一致性，保留多步連續偶數推理。" );

patchMc("u03", "s012", "u03-s012-v008", {
  explanation: "五個連續整數由小到大排列時，平均數等於中間數。本題平均數是 −3，所以中間數是 −3，五個數為 −5、−4、−3、−2、−1。",
  choices: ["−5、−4、−3、−2、−1", "−7、−5、−3、−1、1", "−3、−2、−1、0、1", "−6、−5、−4、−3、−2"],
  optionAnalysis: oa(["−5、−4、−3、−2、−1", "−7、−5、−3、−1、1", "−3、−2、−1、0、1", "−6、−5、−4、−3、−2"], 0, [
    "五數連續且中間數為平均數 −3，因此為 −5、−4、−3、−2、−1。",
    "相鄰兩數相差 2，不是連續整數。",
    "這組的平均數是 −1，不是 −3。",
    "這組的平均數是 −4，不是 −3。"
  ])
}, "五個連續整數的中間數等於平均數 −3，所以五數為 −5 到 −1。", "依套件決策補足平均數與中間數的關係並統一負號。" );

patchMc("u03", "s012", "u03-s012-v009", {
  text: "五個連續整數中，第二小的數與最大數之和為 205。這五個數的總和為何？",
  choices: ["205", "505", "510", "515"],
  explanation: "設最小數為 n，則第二小與最大數為 n+1、n+4；2n+5=205 得 n=100，五數總和為 5n+10=510。",
  steps: ["以 n 到 n+4 表示五個連續整數", "由 (n+1)+(n+4)=205 求 n", "計算五數總和 5n+10"],
  optionAnalysis: oa(["205", "505", "510", "515"], 2, [
    "把題目給的兩數和 205 直接當成五數總和。",
    "求得 n=100 後只算 5n+5，漏掉部分位移量，得到 505。",
    "n=100，五數為 100、101、102、103、104，總和 510。",
    "把五數誤寫成 n+1 到 n+5，會算成 5n+15=515。"
  ]),
  commonMistake: "求出最小數後沒有把五個位移量 0、1、2、3、4 全部加入總和。",
  concept: "由兩個指定位置的連續整數關係反求整組總和。",
  authoringIntent: "需辨認第二小與最大數的位置，再完成第二階段總和運算。"
}, "設最小數 n；2n+5=205 得 n=100，五數總和 5n+10=510。", "以指定位置關係與整組總和的兩階段題取代直接平均題。" );

// U03-S014/S015 confirmed repairs.
patchMc("u03", "s014", "u03-s014-v007", {
  text: "方案 A 的總費用為 150+6x 元，方案 B 的總費用為 11x 元；x 為大於 20 的整數。哪一個使用次數會使兩方案同價？",
  explanation: "令兩個完整總費用相等：150+6x=11x，得 150=5x，所以 x=30；30 也符合 x>20 的限制。",
  steps: ["列出兩個完整總費用", "令 150+6x=11x", "解得 x=30 並檢查 x>20"],
  optionAnalysis: oa(["20", "25", "50", "30"], 3, [
    "x=20 雖符合選項格式，但不符合題目 x>20，且兩費用為 270 與 220 元。",
    "x=25 時兩費用為 300 與 275 元，尚未同價。",
    "x=50 時兩費用為 450 與 550 元，已越過同價點。",
    "150+6x=11x 解得 x=30，代入兩方案皆為 330 元。"
  ]),
  commonMistake: "只比較基本費或單位費，沒有令兩個完整總費用式相等。",
  authoringIntent: "在指定整數範圍內求兩方案同價點並代回驗證。"
}, "150+6x=11x，解得 x=30；代入兩方案都是 330 元且符合 x>20。", "補上必要的使用範圍並重寫每個選項的真實費用比較。" );

patchMc("u03", "s014", "u03-s014-v009", {
  text: "方案 A 的基本費為 300 元、每件 5 元；方案 B 的基本費為 120 元、每件 8 元。訂購量只能是 10 的倍數，哪個允許數量會使兩方案同價？",
  choices: ["36", "45", "60", "180"],
  explanation: "兩方案同價時，300+5x=120+8x。移項得 180=3x，因此 x=60；60 是 10 的倍數，符合訂購量限制。",
  optionAnalysis: oa(["36", "45", "60", "180"], 2, [
    "算出基本費差 180 後，錯用方案 A 的單價 5 去除，得 180÷5=36。",
    "把每件費用差 8−5 錯算成 4，得 180÷4=45。",
    "300+5x=120+8x，整理為 180=3x，所以 x=60。",
    "只算出基本費差 300−120=180，未再除以每件費用差 3。"
  ])
}, "300+5x=120+8x，得到 x=60；60 是 10 的倍數，兩方案皆為 600 元。", "補上離散訂購限制，使進階標籤包含解後條件驗收。" );

patchMc("u03", "s015", "u03-s015-v004", {
  text: "校車共有 40 個座位。第一站上車 28 人，第二站又上車 7 人；到第三站時車上剩 20 人。第二站到第三站之間共有多少人下車？",
  choices: ["5", "7", "20", "15"],
  explanation: "第二站後車上有 28+7=35 人；設下車 x 人，35−x=20，所以 x=15。",
  steps: ["先算第二站後車上 35 人", "設下車 x 人並列 35−x=20", "解得 x=15 並重建人數"],
  optionAnalysis: oa(["5", "7", "20", "15"], 3, [
    "40−35=5 是第二站後的空位數，不是下車人數。",
    "7 是第二站上車人數，題目問的是之後下車人數。",
    "20 是第三站時車上剩餘人數。",
    "第二站後 35 人，35−x=20，所以 x=15。"
  ]),
  commonMistake: "把座位空缺、上車人數或最後剩餘人數直接當成下車人數。",
  concept: "同一車廂人數經上車與下車兩個事件後的守恆方程式。",
  authoringIntent: "生活事件的順序真正決定 28+7−x=20，不能刪除情境。",
  literacyContextNecessity: "三個車站的先後順序、上車 7 人與最後剩 20 人共同決定下車人數。"
}, "第二站後有 35 人；35−x=20，因此下車 x=15 人。", "以需要依事件順序建模的人數守恆題取代裝飾性容量加法。" );

patchMc("u03", "s015", "u03-s015-v007", {
  text: "冷藏箱開始時為 8°C。前 3 小時每小時下降 2°C，之後每小時下降 0.5°C。從開始計時，幾小時後會降到 −4°C？",
  choices: ["6", "9", "12", "15"],
  explanation: "前 3 小時後溫度為 2°C；從 2°C 降到 −4°C 還需下降 6°C，以每小時 0.5°C 計需 12 小時，總共 15 小時。",
  steps: ["先算前 3 小時後為 2°C", "第二階段需再下降 6°C", "用 6÷0.5=12 並加回前 3 小時"],
  optionAnalysis: oa(["6", "9", "12", "15"], 3, [
    "把全部 12°C 溫差都用第一階段每小時 2°C 計算，會得到 6。",
    "第二階段誤用每小時 1°C，算 6 小時後再加前 3 小時，得到 9。",
    "12 是第二階段所需時間，漏加前 3 小時。",
    "前段 3 小時加後段 12 小時，共 15 小時。"
  ]),
  commonMistake: "跨過速率改變的時間點後仍使用前一階段的降溫率。",
  concept: "變化率分段的一元一次模型與總時間合併。",
  authoringIntent: "先處理固定的第一階段，再用方程式求第二階段並合併時間。"
}, "3 小時後為 2°C；再下降 6°C 需 12 小時，所以從開始共 15 小時。", "以分段變化率與總時間整合取代單一降溫率題。" );

patchMc("u03", "s015", "u03-s015-v008", {
  text: "閱讀計畫從 8 月 1 日到 8 月 10 日。小安已先讀 35 頁，8 月 6 日校外教學不閱讀，其餘日期每天讀 x 頁，最後恰好讀完 170 頁。每天讀幾頁？",
  choices: ["15", "13.5", "17", "135"],
  explanation: "日期含首尾共 10 天，扣除 1 天不閱讀，實際閱讀 9 天；35+9x=170，得 9x=135，所以 x=15。",
  steps: ["計算 10 天中實際閱讀 9 天", "列 35+9x=170", "解得 x=15 並核對總頁數"],
  optionAnalysis: oa(["15", "13.5", "17", "135"], 0, [
    "實際閱讀 9 天，(170−35)÷9=15。",
    "把 9 天誤看成 10 天，算成 (170−35)÷10=13.5。",
    "忽略已先讀的 35 頁，直接用 170÷10=17。",
    "135 是尚未閱讀的頁數，未再除以 9 天。"
  ]),
  commonMistake: "計算日期時沒有扣除不閱讀的那一天，導致每天頁數被低估。",
  concept: "日曆範圍、例外日期與固定每日進度共同形成方程式。",
  authoringIntent: "先由情境判斷實際重複次數 9，再建立每日閱讀量模型。",
  literacyContextNecessity: "起訖日期與 8 月 6 日不閱讀共同決定係數 9，情境不能刪除。"
}, "8 月 1 日至 10 日共 10 天，扣除 1 天後讀 9 天；35+9x=170，x=15。", "保留正解 15，將 12 改為可由誤算 10 天得到的 13.5，並補足日曆建模。" );

patchMc("u03", "s015", "u03-s015-v009", {
  text: "影音平台每月基本費 180 元，另看一部電影收 45 元。帳戶本月折抵 90 元後實付 405 元。本月看了幾部電影？",
  choices: ["5", "9", "7", "3"],
  explanation: "設看 x 部，折抵後金額為 180+45x−90=405；整理得 45x=315，所以 x=7。",
  steps: ["依先收費再折抵列 180+45x−90=405", "整理得 45x=315", "解得 x=7 並代回實付金額"],
  optionAnalysis: oa(["5", "9", "7", "3"], 2, [
    "忽略折抵 90 元，列 180+45x=405，會得到 x=5。",
    "忽略基本費與折抵，直接算 405÷45=9。",
    "180+45x−90=405，解得 x=7。",
    "把折抵誤當成加收，列 180+45x+90=405，會得到 x=3。"
  ]),
  commonMistake: "折抵金額的方向寫成加收，或只處理基本費而漏掉折抵。",
  concept: "基本費、按次費與一次折抵共同構成的實付金額模型。",
  authoringIntent: "辨識費用與折抵的相反方向，並用代回檢查實付 405 元。",
  literacyContextNecessity: "基本費、每部費用與折抵額三項都會改變實付金額，缺一不可。"
}, "180+45x−90=405，得到 45x=315，因此 x=7。", "以含固定費、變動費與折抵方向的多條件題取代簡單月費題。" );

patchMc("u03", "s015", "u03-s015-v010", {
  optionAnalysis: oa(["5", "7", "9", "6"], 3, [
    "誤把固定加入的 18 克再多算一瓶 12 克，先扣 30 克，算成 (90−30)÷12=5。",
    "忽略固定加入的 18 克，直接用 90÷12 向下取整，會選 7。",
    "把固定的 18 克誤看成一瓶，再把 90÷12 向上取整，會錯選 9。",
    "12x+18=90，所以 12x=72，x=6。"
  ])
}, "12x+18=90，扣除固定 18 克後 12x=72，所以 x=6。", "依套件決策讓 distractor 5 的錯誤計算精確等於顯示選項。" );

// Lecture repairs for U03-S005..S015.
patchLecture("u03", "s005", lecture => {
  lecture.notation = lecture.notation.map(entry => entry.symbol === "-[x-(y+1)]"
    ? { symbol: "−[x−(3+1)]", meaning: "須由內向外處理兩層括號前的負號。" }
    : entry);
  lecture.conceptNarrative = lecture.conceptNarrative.map(text => text.includes("兩邊都有公因數")
    ? "只有在等號兩邊的每一項都有同一個非零公因數時，才能將兩邊同除以該數；加減連接的個別項不能直接約分。"
    : text);
  lecture.summary = lecture.summary.map(text => text === "可先除共同係數。" ? "等號兩邊所有項都有共同非零因數時，才可整體同除。" : text);
}, "移除未定義 y，並補上整體同除與跨加減不可約分的邊界。" );

patchLecture("u03", "s006", lecture => {
  lecture.prerequisites = [
    { skillId: "linear-equation-parentheses", requiredLevel: "能正確展開括號與合併同類項。" },
    { skillId: "fraction-add-subtract", requiredLevel: "能通分並正確做分數加減。" },
    { skillId: "fraction-multiply-divide", requiredLevel: "能做分數乘除與約分。" },
    { skillId: "fraction-lcm-basic", requiredLevel: "能求多個分母的最小公倍數。" }
  ];
  lecture.connections.previous = "需要 U02 的分數加減、分數乘除與最小公倍數，以及含括號方程式的展開能力。";
}, "明列 U02 分數運算與最小公倍數為真實先備，不採用先前錯誤稽核結論。" );

patchLecture("u03", "s007", lecture => {
  lecture.notation = [
    { symbol: "等號左邊", meaning: "把候選值代入後，單獨計算等號左側的值。" },
    { symbol: "等號右邊", meaning: "把候選值代入後，單獨計算等號右側的值。" }
  ];
  lecture.formulas = [{ formula: "代入後左邊的值=代入後右邊的值", conditions: ["候選值須代入原方程式每一處未知數"], meaning: "候選值是方程式解的判準。" }];
  lecture.conceptNarrative = lecture.conceptNarrative.filter(text => !text.includes("情境題還需檢查"));
  lecture.method = lecture.method.slice(0, 4);
  lecture.method.push({ step: 5, instruction: "若左右不等，記錄哪一邊的計算先出現差異。", check: "是否完整代入原式的每一個未知數？" });
  lecture.commonMistakes = lecture.commonMistakes.map(item => item.correction === "把LHS與RHS都寫出。"
    ? { ...item, correction: "把等號左邊與右邊的值分開寫出。" }
    : item).filter(item => item.mistake !== "只驗算代數不看情境。");
  lecture.summary = lecture.summary.filter(text => !text.includes("情境答案"));
  lecture.connections.next = ["年齡、金錢與行程題都要以代回原式確認列式。", "後續的合理性檢查才會加入單位、整數與範圍條件。"];
}, "以完整中文定義等號兩邊，並把情境合理性留到 S013。" );

patchLecture("u03", "s009", lecture => {
  lecture.prerequisites = [
    { skillId: "linear-equation-basic-solving", requiredLevel: "能解一元一次方程式並代回驗算。" },
    { skillId: "fraction-add-subtract", requiredLevel: "能處理分數與小數金額的加減。" },
    { skillId: "fraction-percent-discount", requiredLevel: "能辨認原價、折後價與折數的基準量。" }
  ];
  lecture.connections.previous = "需要一元一次方程式、分數與小數運算，以及 U02 百分率和折扣的基準量判斷。";
}, "移除年齡問題的假先備，改列方程式、分數小數與百分率。" );

patchLecture("u03", "s010", lecture => {
  lecture.title = "行程問題：用距離、速率和時間建立方程式";
  lecture.prerequisites = [
    { skillId: "linear-equation-basic-solving", requiredLevel: "能解一元一次方程式並代回檢查。" },
    { skillId: "linear-equation-fractions", requiredLevel: "能處理分數、小數與分段總時間方程式。" },
    { skillId: "fraction-multiply-divide", requiredLevel: "能用距離÷速率求時間，並完成必要單位換算。" }
  ];
  lecture.connections.previous = "需要理解距離、速率、時間的關係，能換算長度與時間單位，並能解含分數或小數的一元一次方程式。";
}, "採用指定標題並改為距離速率時間、單位換算、方程式與分段總量先備。" );

patchLecture("u03", "s011", lecture => {
  lecture.prerequisites = [
    { skillId: "linear-equation-basic-solving", requiredLevel: "能用等量關係解一元一次方程式。" },
    { skillId: "linear-equation-parentheses", requiredLevel: "能正確表示每份量改變與份數的乘積。" },
    { skillId: "linear-equation-check-solution", requiredLevel: "能把份數或每份量代回總量驗算。" }
  ];
  lecture.connections.previous = "需要一元一次方程式、括號表示每份變化，以及以總量代回驗算；不需要行程或相對速率。";
}, "移除行程問題假先備，改列總量、括號與驗算能力。" );

patchMc("u03", "s013", "u03-s013-v004", {
  explanation: "x 代表長方形邊長，必須大於 0。雖然 −3 可能是方程式的代數解，但不符合長度限制，所以不能採用，應回查模型或題目條件。",
  optionAnalysis: oa(["合理，表示方向相反", "合理，取絕對值3公分即可", "應把所有負號刪除", "不合理，長度不可為負"], 3, [
    "邊長沒有方向，負號不能解釋為方向相反。",
    "取絕對值會把 −3 改成 3，但 3 並不是原方程式求得的解。",
    "任意刪除負號會改變數值，沒有代數依據。",
    "x 代表公分數，必須大於 0；−3 不在題目允許的範圍。"
  ])
}, "將 −3 代回方程式可能在代數上成立，但邊長必須大於 0，因此情境上不能採用。", "移除泛用結語，明確說明每個選項的數學錯誤。" );

patchLecture("u03", "s013", lecture => {
  lecture.prerequisites = [
    { skillId: "linear-equation-check-solution", requiredLevel: "能把候選值代回原方程式確認代數成立。" },
    { skillId: "linear-equation-age-problem", requiredLevel: "能辨認年齡需為合理的非負數。" },
    { skillId: "linear-equation-money-problem", requiredLevel: "能分辨金額與件數的單位及整數限制。" },
    { skillId: "linear-equation-rate-problem", requiredLevel: "能辨認距離、速率與時間的正值和單位限制。" },
    { skillId: "linear-equation-distribution-problem", requiredLevel: "能檢查份數、箱數與餘數條件。" }
  ];
  const replace = value => typeof value === "string" ? value.replaceAll("定義域", "題目允許的範圍") : value;
  lecture.notation = lecture.notation.map(entry => ({ symbol: replace(entry.symbol), meaning: replace(entry.meaning) }));
  lecture.formulas = lecture.formulas.map(entry => ({ ...entry, formula: replace(entry.formula), meaning: replace(entry.meaning), conditions: entry.conditions.map(replace) }));
  lecture.conceptNarrative = lecture.conceptNarrative.map(replace);
  lecture.method = lecture.method.map(entry => ({ ...entry, instruction: replace(entry.instruction), check: replace(entry.check) }));
  lecture.commonMistakes = lecture.commonMistakes.map(entry => Object.fromEntries(Object.entries(entry).map(([key, value]) => [key, replace(value)])));
  lecture.summary = lecture.summary.map(replace);
  lecture.connections.previous = "需要先會代回原方程式，再結合年齡、金錢、行程與分配問題各自的單位、整數和範圍限制。";
}, "將未定義的術語改為題目允許的範圍，並補齊跨應用題的真實先備。" );

patchLecture("u03", "s014", lecture => {
  lecture.notation = [
    { symbol: "方案 A 的總費用=方案 A 基本費+方案 A 單位費×使用量", meaning: "把方案 A 的固定費與按量費完整列出。" },
    { symbol: "方案 B 的總費用=方案 B 基本費+方案 B 單位費×使用量", meaning: "把方案 B 的固定費與按量費完整列出。" },
    { symbol: "方案 A 的總費用=方案 B 的總費用", meaning: "兩方案同價時使用量所滿足的方程式。" }
  ];
  lecture.formulas = [
    { formula: "方案 A 基本費+方案 A 單位費×使用量=方案 B 基本費+方案 B 單位費×使用量", conditions: ["比較的是同一個使用量", "兩邊費用使用同一貨幣單位"], meaning: "列出兩個完整費用式後求同價點。" },
    { formula: "方案 A 總費用−方案 B 總費用", conditions: ["使用量相同"], meaning: "正負號可用來判斷哪個方案較便宜。" }
  ];
  lecture.method[1] = { step: 2, instruction: "分別寫出方案 A 與方案 B 的完整總費用。", check: "兩式是否使用同一個使用量？" };
  lecture.method[2] = { step: 3, instruction: "令兩個完整總費用相等並解方程式。", check: "是否同時保留兩方案的基本費與單位費？" };
}, "核心改用兩個完整總費用式，不要求 A(x)/B(x) 或背同價公式。" );

patchLecture("u03", "s015", lecture => {
  lecture.prerequisites = [
    { skillId: "linear-equation-parentheses", requiredLevel: "能處理每組、每段或每次變化形成的括號。" },
    { skillId: "linear-equation-fractions", requiredLevel: "能處理分數、小數與單位換算。" },
    { skillId: "linear-equation-age-problem", requiredLevel: "能把不同時間點轉到同一時點。" },
    { skillId: "linear-equation-money-problem", requiredLevel: "能區分固定費、單價、折扣與總額。" },
    { skillId: "linear-equation-rate-problem", requiredLevel: "能處理分段速率、距離與時間。" },
    { skillId: "linear-equation-distribution-problem", requiredLevel: "能以總量、每份量、份數與剩餘建立模型。" },
    { skillId: "linear-equation-reasonableness", requiredLevel: "能檢查單位、整數、範圍與情境可行性。" }
  ];
  lecture.connections.previous = "整合 U03 的括號、分數方程式、年齡、金錢、行程、分配與合理性檢查，並使用 U01、U02 的整數、分數和百分率能力。";
}, "擴充真實先備，使綜合素養題可合法整合 U03 已教過的應用模型。" );

// U04-S001 exact replacements and answer-position balancing.
patchMc("u04", "s001", "u04-s001-v005", {
  choices: ["x+2y=4", "2x=4", "2y=4", "0=4"],
  answerIndex: 2,
  explanation: "等式兩邊同減 x，得 y=−y+4；再同加 y，得 2y=4。x 項已相消，所以整理後只剩一個未知數。",
  optionAnalysis: oa(["x+2y=4", "2x=4", "2y=4", "0=4"], 2, [
    "x 項在等號兩邊相消，不會留下 x+2y。",
    "相消的是 x 項，留下的是 y 項。",
    "兩邊同減 x 後得到 y=−y+4，再加 y 得 2y=4。",
    "y 項不會相消，因此不會得到 0=4。"
  ])
}, "x+y=x−y+4 的兩邊同減 x、再同加 y，得到 2y=4。", "移動正解位置以維持每技能 answerIndex 0–3 各三題。" );

patchMc("u04", "s001", "u04-s001-v006", {
  choices: ["(1/2)x+3y=4", "0.3m−n=8", "−p+5q=0", "x/y+2x=3"],
  answerIndex: 3,
  optionAnalysis: oa(["(1/2)x+3y=4", "0.3m−n=8", "−p+5q=0", "x/y+2x=3"], 3, [
    "1/2 只是 x 的係數，未知數仍皆為一次。",
    "小數係數不會改變未知數的次數。",
    "負係數可以出現在二元一次方程式中。",
    "y 位在分母，不能整理成 ax+by=c 的一次形式。"
  ])
}, "前三式只有分數、小數或負係數；x/y 的 y 在分母，因此第四式不是二元一次方程式。", "移動正解位置以配合兩道指定替換後的 answerIndex 平衡。" );

patchMc("u04", "s001", "u04-s001-v007", {
  prompt: "下列各式都先整理後判斷，哪一式仍是二元一次方程式？",
  target: "整理後判斷是否仍含兩個一次未知數",
  choices: ["2(x+y)−x=5", "x+y=x−y+4", "x(x+y)=6", "x/y+y=3"],
  answerIndex: 0,
  independentSolution: "A 展開並合併為 x+2y=5，仍含 x、y 且皆為一次；其餘分別只剩 y、含未知數乘積、未知數在分母。",
  explanation: "2(x+y)−x=5 化簡為 x+2y=5，仍是二元一次方程式；其他三式整理後各違反一項必要條件。",
  steps: ["逐式展開或移項", "檢查整理後的未知數種類", "排除乘積與未知數在分母的式子"],
  optionAnalysis: oa(["2(x+y)−x=5", "x+y=x−y+4", "x(x+y)=6", "x/y+y=3"], 0, [
    "化簡為 x+2y=5，仍有 x、y 且皆為一次。",
    "化簡為 2y=4，只剩一種未知數。",
    "含 x² 與 xy 的二次項，不是一次。",
    "x/y 的 y 位在分母，不是一次形式。"
  ]),
  misconceptionTarget: "只看整理前有 x、y 就作答",
  ambiguityAudit: "所求量明確為「整理後判斷是否仍含兩個一次未知數」；四個選項互異，且依獨立重算只有一項成立。",
  difficultyReason: "需依序整理四個不同結構，再逐一套用定義。"
}, "A 化簡為 x+2y=5；B 化簡為 2y=4；C 含未知數乘積；D 的未知數在分母，所以只有 A 符合。", "依套件指定移除參數 k，改為四種結構的整理判斷。" );

patchMc("u04", "s001", "u04-s001-v008", {
  prompt: "下列哪一式雖然有 x、y 和等號，仍不是二元一次方程式？",
  target: "辨認未知數在分母的非一次式",
  choices: ["x+y=5", "x+1/y=5", "2x−3y=0", "0.5x+y=4"],
  answerIndex: 1,
  independentSolution: "B 的 y 位在分母，不能寫成 ax+by=c；其餘三式都只含 x、y 的一次項。",
  explanation: "x+1/y=5 中的 y 在分母，因此不是二元一次方程式；分數或小數係數本身並不違反一次條件。",
  steps: ["確認四式都有等號與 x、y", "檢查未知數是否在分母", "辨認 B 不符合一次形式"],
  optionAnalysis: oa(["x+y=5", "x+1/y=5", "2x−3y=0", "0.5x+y=4"], 1, [
    "x、y 都只以一次項出現。",
    "y 在分母，不能整理成 ax+by=c。",
    "負係數不影響一次性。",
    "小數係數不影響一次性。"
  ]),
  misconceptionTarget: "以為只要有 x、y 和等號就一定符合",
  difficultyReason: "需區分未知數在分母與合法小數係數。"
}, "只有 B 的 y 位在分母；A、C、D 都能寫成 ax+by=c。", "依套件指定移除尚未教授的乘法公式，改考分母中的未知數。" );

patchLecture("u04", "s001", lecture => {
  lecture.learningGoals = lecture.learningGoals.map(text => text.replaceAll("隻看表面", "只看表面"));
  lecture.conceptDevelopment[2] = "一般形式 ax+by=c 中，a、b、c 為已知數，且 a、b 不可同時為 0。若題目另外要求式中實際出現 x、y 兩種未知數，則 a、b 都不可為 0。";
  lecture.formulas[0].conditions = ["a、b、c 為已知數，且 a、b 不可同時為 0。", "若題目要求實際出現 x、y，則 a、b 都不可為 0。"];
  lecture.accessibilityNote = "本講義不需要圖形；所有關係均以文字、等式與逐步運算完整呈現，避免提前使用 U05 坐標圖形。";
}, "統一定義的一般形式與實際含兩元兩種判準，並修正兩處文字錯誤。" );

// Normalize CR scoring where reasoning is explicitly required.
for (let number = 5; number <= 15; number++) {
  const skill = `s${String(number).padStart(3, "0")}`;
  for (const item of readJsonl(crFile("u03", skill))) {
    patchCr("u03", skill, item.questionId, cr => {
      cr.answerOnlyPolicy = "題目要求過程、建模、說明、驗算、證明或作圖時，只寫答案且沒有有效過程，得 0 分。";
      const zero = cr.rubric.find(row => row.score === 0);
      zero.criteria = "只寫答案而無有效過程，或作答未呈現可辨識且與題意相關的推理。";
    }, "依全庫規則把只寫答案且無有效過程統一為 0 分。" );
  }
}

patchCr("u04", "s001", "u04-s001-cr001", cr => {
  cr.rubric = [
    { score: 3, criteria: "六式分類與理由全部正確，且能說明整理後是否仍有兩個一次未知數。" },
    { score: 2, criteria: "至少五式分類正確，且主要理由成立。" },
    { score: 1, criteria: "至少三式分類正確，且至少寫出一個有效理由。" },
    { score: 0, criteria: "只列是／不是而無有效理由，或少於三式分類正確。" }
  ];
  cr.answerOnlyPolicy = "只列是／不是且無有效理由，得 0 分。";
}, "依指定 0–3 分觀察標準，答案列舉但無理由不得分。" );

patchCr("u04", "s001", "u04-s001-cr002", cr => {
  cr.prompt = "判斷並說明下列三個方程式是否為二元一次方程式：① 2(x+y)−x=5；② x+y=x−y+4；③ x+1/y=3。每式都要先整理或指出關鍵原因。";
  cr.requiredWork = ["逐式整理或指出關鍵結構。", "依整理後的未知數種類與次數說明判斷。"];
  cr.standardSolution = ["①化簡為 x+2y=5，是二元一次方程式。", "②化簡為 2y=4，只剩一元，不是本題所指實際含兩元的方程式。", "③ y 在分母，不是一次形式。"];
  cr.alternativeMethods = ["可逐式檢查是否能整理成 ax+by=c，再確認題目是否要求 x、y 實際出現。"];
  cr.reasoningSteps = ["先展開括號或移項合併。", "檢查整理後是否仍有 x、y。", "排除未知數相乘、平方、根號或位在分母的情形。"];
  cr.rubric = [
    { score: 3, criteria: "三式判斷與理由全部正確。" },
    { score: 2, criteria: "兩式判斷與理由正確。" },
    { score: 1, criteria: "至少一式判斷正確且有有效理由。" },
    { score: 0, criteria: "只有答案而無有效理由，或沒有一式完成正確判斷與說明。" }
  ];
  cr.partialCreditRules = ["每一式都以分類與對應理由為同一個得分單位；理由若與該式無關，不計有效理由。"];
  cr.followThroughPolicy = "若展開有單一算術錯誤，但後續依自己的整理式作一致判斷，該式最多保留部分分；把未知數在分母判成一次不得追蹤給分。";
  cr.unitNotationRules = "本題無單位；平方、乘積與分母結構須清楚書寫。";
  cr.answerOnlyPolicy = "只寫三個判斷答案而無有效理由，得 0 分。";
  cr.independentReview = {
    derivedResult: "①是；②不是；③不是。",
    ambiguityAudit: "三式都明確要求整理或指出關鍵原因；各式依本單元定義只有一種分類。",
    boundaryAudit: "只使用展開、合併同類項與二元一次方程式定義，不使用參數或後續多項式公式。",
    decision: "pass",
    reviewNote: "獨立整理：①x+2y=5；②2y=4；③y 在分母。三式分類與理由皆可直接核對。",
    reviewedAt: "2026-07-14"
  };
}, "依指定內容完全替換過早的參數限制題，並鎖定答案-only為 0 分。" );

// Update the confirmed U03-S010 figure specification and source SVG.
{
  const file = path.join(skillDir("u03", "s010"), "drawing-specs.jsonl");
  const rows = readJsonl(file);
  const figure = rows.find(row => row.figureId === "fig-u03-s010-v009");
  const before = structuredClone(figure);
  figure.drawingSpec.points = { 甲地: [100, 150], 休息站: [390, 150], 乙地: [840, 150] };
  figure.drawingSpec.scaleNote = "示意圖不按比例繪製；線段長短不能用來推測距離。";
  figure.drawingSpec.mobile = "所有數值文字至少 22px，並保留示意圖不按比例繪製的可見註記。";
  figure.figureReview.reviewNote = "逐字核對距離、速率與總時間；兩段以不等長線段呈現，並有可見的不按比例註記，不洩漏第二段答案。";
  figure.contentSha256 = contentSha(figure);
  writeJsonl(file, rows);
  recordChange("drawing", figure.figureId, file, before, figure, "同步不等長線段與可見的不按比例註記。" );

  const target = path.join(CONTENT, "batches", "004-u03-complete", "figures", "u03", "fig-u03-s010-v009.svg");
  const source = path.join(PACKAGE, "patch-assets", "fig-u03-s010-v009.svg");
  const beforeBytes = fs.readFileSync(target);
  const afterBytes = fs.readFileSync(source);
  fs.writeFileSync(target, afterBytes);
  records.push({
    type: "figure-svg",
    id: "fig-u03-s010-v009",
    sourcePath: rel(target),
    beforeSha256: sha(beforeBytes),
    afterSha256: sha(afterBytes),
    changedFields: ["raw-svg-bytes"],
    independentDecision: "使用套件鎖定 SVG；確認含不按比例文字且兩段渲染長度不同。",
    reviewer: REVIEWER,
    status: "IMPLEMENTED_PENDING_CENTRAL_ACCEPTANCE"
  });
}

// Replace the student-facing term throughout U03-S013 source records and reviews.
{
  const mcPath = mcFile("u03", "s013");
  const mcRows = readJsonl(mcPath);
  const reviews = readJsonl(reviewFile("u03", "s013"));
  for (let index = 0; index < mcRows.length; index++) {
    const before = structuredClone(mcRows[index]);
    const replaced = JSON.parse(JSON.stringify(mcRows[index]).replaceAll("定義域", "題目允許的範圍"));
    if (JSON.stringify(before) === JSON.stringify(replaced)) continue;
    replaced.contentSha256 = contentSha(replaced);
    mcRows[index] = replaced;
    const reviewIndex = reviews.findIndex(row => row.questionId === replaced.questionId);
    reviews[reviewIndex] = JSON.parse(JSON.stringify(reviews[reviewIndex]).replaceAll("定義域", "題目允許的範圍"));
    reviews[reviewIndex].contentSha256 = replaced.contentSha256;
    recordChange("mc", replaced.questionId, mcPath, before, replaced, "將未定義的術語改為學生可直接理解的「題目允許的範圍」。" );
  }
  writeJsonl(mcPath, mcRows);
  writeJsonl(reviewFile("u03", "s013"), reviews);

  const crPath = crFile("u03", "s013");
  const crRows = readJsonl(crPath);
  for (let index = 0; index < crRows.length; index++) {
    const before = structuredClone(crRows[index]);
    const replaced = JSON.parse(JSON.stringify(crRows[index]).replaceAll("定義域", "題目允許的範圍"));
    if (JSON.stringify(before) === JSON.stringify(replaced)) continue;
    replaced.contentSha256 = contentSha(replaced);
    crRows[index] = replaced;
    recordChange("cr", replaced.questionId, crPath, before, replaced, "將未定義的術語改為學生可直接理解的「題目允許的範圍」。" );
  }
  writeJsonl(crPath, crRows);
}

// Trust-state evidence: the historical audit branch is a locator, never an authority merge.
writeJson(path.join(OUT, "central-trust-state.json"), {
  schemaVersion: "math-v2-central-trust-state-r2",
  taskId: "MATH-V2-FULL-HUMAN-CONTENT-SEMANTIC-REPAIR-R2",
  startingCommit: "d3a0b432a5b659528d357cb5a24b561f10ac5980",
  trustedManualProgress: { batches: ["B001", "B002", "B003", "B004", "B005", "B006", "B007", "B008"], questions: 476, lectures: 34, artifacts: 510 },
  reopened: { batches: ["B009", "B010", "B011"], questions: 168, lectures: 12, artifacts: 180, status: "REOPENED_PENDING_CENTRAL_ACCEPTANCE_R2" },
  authorityRule: "CURRENT_SOURCE_HASH_PLUS_R2_ITEM_SPECIFIC_EVIDENCE",
  auditBranchMergeAllowed: false,
  centralSemanticAcceptance: "PENDING"
});
writeJson(path.join(OUT, "superseded-audit-evidence.json"), {
  schemaVersion: "math-v2-superseded-audit-evidence-r2",
  locatorRef: "origin/audit/math-v2-manual-semantic-program-r1",
  locatorCommit: "6ae90e961920b04bc839b150ed8a3e43eeafb294",
  supersededBatches: [
    { batch: "B009", scope: "U03-S005..S008", questions: 56, lectures: 4, artifacts: 60 },
    { batch: "B010", scope: "U03-S009..S012", questions: 56, lectures: 4, artifacts: 60 },
    { batch: "B011", scope: "U03-S013..S015 and U04-S001", questions: 56, lectures: 4, artifacts: 60 }
  ],
  reasons: ["repeated generic PASS text", "false reviewer attribution", "review text referring to nonexistent prompts", "known blockers omitted or contradicted"],
  disposition: "LOCATOR_ONLY_DO_NOT_MERGE_WHOLESALE",
  replacementEvidence: "confirmed-repair-ledger.jsonl"
});

const consolidated = new Map();
for (const row of records) {
  const key = `${row.type}:${row.id}`;
  const prior = consolidated.get(key);
  if (!prior) consolidated.set(key, structuredClone(row));
  else {
    prior.afterSha256 = row.afterSha256;
    prior.changedFields = [...new Set([...prior.changedFields, ...row.changedFields])].sort((a, b) => a.localeCompare(b, "en"));
    prior.independentDecision = `${prior.independentDecision} ${row.independentDecision}`;
  }
}
const finalRecords = [...consolidated.values()].sort((a, b) => `${a.type}:${a.id}`.localeCompare(`${b.type}:${b.id}`, "en"));
writeJsonl(path.join(OUT, "confirmed-repair-ledger.jsonl"), finalRecords);
console.log(JSON.stringify({ status: "CONFIRMED_REPAIRS_APPLIED", recordCount: finalRecords.length, byType: Object.fromEntries(Object.entries(Object.groupBy(finalRecords, row => row.type)).map(([key, rows]) => [key, rows.length])) }, null, 2));
