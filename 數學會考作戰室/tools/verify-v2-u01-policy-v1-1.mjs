#!/usr/bin/env node
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import vm from "node:vm";
import policy from "./v2-qa/policies/math-tw-v1.mjs";
import { hashPolicy } from "./v2-qa/policies/policy-hash.mjs";
import { auditQuestionBank, auditLectureBank, mergeAuditResults } from "./v2-qa/checkers/content-standard.mjs";
import { analyzeU01SemanticDiversity, U01_PROHIBITED_PROSE } from "./check-u01-policy-v1-1-content-diff.mjs";
import { U01_POLICY_V1_1_REQUIRED_QUESTIONS, U01_POLICY_V1_1_REQUIRED_LECTURES } from "./u01-policy-v1-1-content-manifest.mjs";

const mathRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const toolsRoot = path.dirname(fileURLToPath(import.meta.url));
function load(name, key) { const c = { window: {} }; vm.runInNewContext(readFileSync(path.join(mathRoot, "v2", name), "utf8"), c); return c.window[key]; }

const U01_CHATGPT_COMMON_MISTAKES = {
  "u01-s001-v001": "把負號當成非整數標記，會錯把 -7 排除在整數之外。",
  "u01-s001-v002": "只看符號外觀而不檢查能否寫成整數比，會漏選有理數 -3/4。",
  "u01-s001-v003": "把整數或分數誤當無理數，會錯選 -5、0 或 3/8 而忽略 √2。",
  "u01-s001-v004": "把 0 誤分為正整數或負整數，會忽略它只屬於整數而不具正負性。",
  "u01-s002-v001": "只記溫差 5 而漏寫方向，會把低於 0°C 誤記成 +5°C。",
  "u01-s002-v002": "把海面下的 20 公尺只當距離，會漏掉負號而寫成正 20 公尺。",
  "u01-s002-v003": "把透支誤解成仍有存款，會把 -300 元錯寫成 +300 元。",
  "u01-s002-v004": "把地下樓層的數字直接寫成正數，會把地下 2 樓誤記為 +2 樓。",
  "u01-s003-v001": "只寫到原點的距離 4 而不寫方向，會把左側坐標誤成 +4。",
  "u01-s003-v002": "把數線右側誤認為負方向，會把 B 的坐標 7 錯寫成 -7。",
  "u01-s003-v003": "只比較絕對值 3 和 5 而忽略正負位置，可能把 B 誤判在 A 左側。",
  "u01-s003-v004": "把左右方向的符號顛倒，會把正確的 -2 與 6 寫成 2 與 -6。",
  "u01-s004-v001": "直接比較 8 與 3 而不考慮兩數皆為負，會誤判 -8 大於 -3。",
  "u01-s004-v002": "只比較 1 和 5 的大小而忽略兩數都是負數，會誤判 -5 比 -1 大。",
  "u01-s004-v003": "去掉負號後才排序，會把 -12 與 -7 的先後順序顛倒。",
  "u01-s004-v004": "只比較負數的絕對值而忽略正數 3，會錯把 0 或負數選成最大值。",
  "u01-s005-v001": "把相反數誤作倒數，會把 -6 的相反數寫成 -1/6 而不是 6。",
  "u01-s005-v002": "取相反數時沒有改變符號，會把 7 的相反數仍寫成 7。",
  "u01-s005-v003": "認為 0 沒有正負方向就沒有相反數，會漏掉 0 本身就是答案。",
  "u01-s005-v004": "代入 a=-4 時省略括號，會把 -(-4) 錯算成 -4。",
  "u01-s006-v001": "把絕對值符號當普通括號，會保留負號而將 |-9| 算成 -9。",
  "u01-s006-v002": "誤以為取絕對值一定要變號，會把 |5| 錯寫成 -5。",
  "u01-s006-v003": "把絕對值誤當成固定變成 1，會把原點到自己的距離 0 算錯。",
  "u01-s006-v004": "認為絕對值保留負號，會誤選 |-3|=-3 這個負距離。",
  "u01-s007-v001": "把減去 -2 誤算成減 2，會將距離 7 錯算成 3。",
  "u01-s007-v002": "只完成 -4-3=-7 而未取絕對值，會得到不可能的負距離。",
  "u01-s007-v003": "把 |-1| 與 |-8| 直接相加，會把同側兩點的距離 7 高估成 9。",
  "u01-s007-v004": "只找原點右側的點，會漏掉同樣距離 6 的負坐標 -6。",
  "u01-s008-v001": "異號相加仍把 3 與 8 直接相加，會把正確結果 5 錯算成 11。",
  "u01-s008-v002": "把兩個負數相加當成絕對值相減，會將 -9 錯算成 -5。",
  "u01-s008-v003": "只看第一個加數 4 的正號，會忽略 |-9| 較大而把結果符號判錯。",
  "u01-s008-v004": "沒有辨認 -1 與 1 互為相反數，會把完全抵消的和算成非零。",
  "u01-s009-v001": "把減去負 3 當成減 3，會將 5-(-3) 錯算成 2。",
  "u01-s009-v002": "把 (-4)-6 當成絕對值相減，會錯得 2 或 -2 而不是 -10。",
  "u01-s009-v003": "減去負 7 時沒有改成加 7，會把結果 5 錯算成 -9。",
  "u01-s009-v004": "認為 0 減任何數仍是 0，會忽略減去 -5 其實等於加 5。",
  "u01-s010-v001": "只算 3×4 的絕對值而漏判異號，會把 -12 錯寫成 12。",
  "u01-s010-v002": "看到負數就判乘積為負，會把兩個負數相乘的 10 錯寫成 -10。",
  "u01-s010-v003": "完成 12÷3 後漏掉異號規則，會把商 -4 錯寫成 4。",
  "u01-s010-v004": "把負數除以負數仍判為負，會將正確的 2 錯寫成 -2。",
  "u01-s011-v001": "從左到右先算 6+2，會破壞乘法優先的結構並得到錯誤結果。",
  "u01-s011-v002": "把 2+10 提前相加再乘 -4，會改變原式運算順序而得到錯誤答案。",
  "u01-s011-v003": "把 15-(-6) 仍算成 15-6，會因漏掉減負得正而錯選 9。",
  "u01-s011-v004": "忽略括號使負號不參與平方，會把 (-2)² 錯算成 -4 並選 -3。",
  "u01-s012-v001": "把指數 3 當成普通乘數，會把 2³ 誤解成 2×3 而選錯。",
  "u01-s012-v002": "忽略負號位於括號內，會把 (-3)² 誤算成 -9。",
  "u01-s012-v003": "把一次方與零次方混淆，會把 5¹ 誤算成 1 而不是保留底數 5。",
  "u01-s012-v004": "把指數 0 直接當作運算結果，會把 10⁰ 誤算成 0 而不是 1。",
  "u01-s013-v001": "同底數相乘時把底數也相乘，會把 2³×2² 錯寫成 4⁵。",
  "u01-s013-v002": "同底數相除仍把指數相加，會把 5⁴÷5² 錯寫成 5⁶。",
  "u01-s013-v003": "把冪的乘方誤算成指數相加，會將 (3²)³ 錯寫成 3⁵。",
  "u01-s013-v004": "把負指數看成負號，會把 2⁻² 誤算成 -4 或 -1/4。",
  "u01-s014-v001": "只求等值形式而未檢查係數範圍，會把 36×10⁵ 當成標準科學記號。",
  "u01-s014-v002": "把小數點移動方向判反，會將 0.00052 寫成 5.2×10⁴ 的大數。",
  "u01-s014-v003": "將正三次方誤作小數點左移，會把 4.2×10³ 錯寫成 0.0042。",
  "u01-s014-v004": "少移或多移一位小數點，會把 1.5×10⁻² 誤寫成 0.15 或 0.0015。",
  "u01-s015-v001": "把 3 與 4 直接相減而忽略最低溫是 -4°C，會把溫差 7°C 算成 -1°C。",
  "u01-s015-v002": "看到上升就認為位置必為正，會把仍在海面下的 -7 公尺錯寫成 7 公尺。",
  "u01-s015-v003": "把存入與支出直接相加，會把餘額 -300 元誤算成 1300 元。",
  "u01-s015-v004": "忽略起點的負號而計算 5-2，會把實際上升 7 層誤算成 3 層。"
};

function assertChatGptPayload(questions, lectures) {
  for (const [id, expected] of Object.entries(U01_CHATGPT_COMMON_MISTAKES)) {
    const q = questions.find(x => x.questionId === id);
    assert.equal(q.commonMistake, expected, id);
  }
  assert.equal(new Set(Object.values(U01_CHATGPT_COMMON_MISTAKES)).size, 60);
  const overrides = {
    "u01-s002-v004": { text: "以地面層為 0 樓，地下 2 樓可記為？", explanation: "題目把地面層定為 0 樓，地下方向用負號表示；地下 2 樓距離基準兩層，因此記為 -2 樓。+2 樓與 +3 樓都在基準上方，-3 樓則比題目位置再低一層。", steps: ["確認地面層被定為 0 樓。", "地下方向記為負數，地面以上記為正數。", "地下 2 樓距離基準兩層，所以坐標是 -2 樓。"] },
    "u01-s004-v002": { explanation: "-1 比 -5 更靠近 0，也位在 -5 的右側，所以 -1＞-5。選項「-1＜-5」把負數大小顛倒；-5 和 -1 都是負數，因此「-5＞0」與「-1＞0」也不成立。四個敘述逐一比較後，只有最後一項正確。" },
    "u01-s005-v001": { explanation: "-6 的相反數是 6，因為 -6+6=0。-6 是原數本身，0 與 -6 相加仍是 -6；1/6 既沒有位在原點另一側，也不是 -6 的倒數（倒數應為 -1/6），因此只有 6 符合定義。" },
    "u01-s007-v003": { explanation: "A、B 的距離為 |-1-(-8)|=7。兩點都在原點左側，不能把 |-1| 與 |-8| 相加；只有兩點分居原點兩側時，才可將各自到原點的距離相加。選項 9 正是把同側問題誤當成異側。" },
    "u01-s011-v001": { explanation: "依運算順序先算 2×(-3)=-6，再算 6+(-6)=0。選 24 必須同時犯下先算 6+2 並漏掉負號兩個錯誤；-12 和 12 也都不是依原式順序所得，因此只有 0 正確。" },
    "u01-s012-v002": { explanation: "括號表示底數是 -3，平方就是 (-3)×(-3)=9。-9 會出現在負號不屬於平方範圍時；6 與 -6 則把指數 2 誤當成普通乘數，分別算成 3×2 或 (-3)×2，沒有展開成兩個 -3 相乘。" },
    "u01-s012-v003": { explanation: "任何數的一次方只有一個底數因子，所以 5¹=5。選 1 是把指數本身當成結果；25 是誤算成平方；0 則既不是一次方，也不是非零數的零次方結果。原底數 5 不應改變。" },
    "u01-s013-v002": { explanation: "同底數相除可將分子與分母中的相同因數約去，所以 5⁴÷5²=5^(4-2)=5²。5⁶ 是把指數誤加，5⁸ 是把指數誤乘；25²=625，而原式等於 25，因此也不相等。" },
    "u01-s013-v003": { text: "將 (3²)³ 化為以 3 為底的指數形式，結果為何？", explanation: "冪的乘方要把兩層指數相乘，所以 (3²)³=3^(2×3)=3⁶。9³ 的數值也等於 729，但它的底數是 9，不符合題目要求的「以 3 為底」；3⁵ 與 3⁸ 則都不是 2×3 的結果。", steps: ["辨認這是冪的乘方，底數維持為 3。", "將內層指數 2 與外層指數 3 相乘，得到 2×3=6。", "因此 (3²)³=3⁶，結果仍是以 3 為底的指數形式。"] },
    "u01-s015-v004": { text: "在以地面層為 0 樓的樓層數線上，電梯從 -2 樓到 5 樓共上升幾層？", explanation: "在題目規定的樓層數線上，上升層數等於終點減起點：5-(-2)=7，因此共上升 7 層。3 層來自把 -2 當成 +2；5 層和 2 層只是端點數值，並不是兩位置的間隔。", steps: ["把起點記為 -2，終點記為 5。", "上升層數用終點減起點：5-(-2)。", "減去負數等於加 2，因此 5+2=7 層。"] }
  };
  for (const [id, fields] of Object.entries(overrides)) {
    const q = questions.find(x => x.questionId === id);
    for (const [k, v] of Object.entries(fields)) assert.deepEqual(structuredClone(q[k]), v, `${id}.${k}`);
  }
  const s013 = questions.find(x => x.questionId === "u01-s013-v003");
  assert.deepEqual(structuredClone(s013.choices), ["3⁶", "3⁵", "9³", "3⁸"]); assert.equal(s013.answerIndex, 0);
  for (const id of ["u01-s013-v001", "u01-s013-v002", "u01-s013-v003", "u01-s013-v004"]) {
    assert.equal(questions.find(x => x.questionId === id).concept, "同底數指數運算：相乘時指數相加、相除時指數相減；冪的乘方則將指數相乘");
  }
  assert.equal(questions.filter(x => x.text.includes("(3²)³ 可化簡為？")).length, 0);
  assert.equal(questions.filter(x => x.text.includes("化為以 3 為底的指數形式")).length, 1);
  const absBasic = lectures.find(x => x.skillId === "integer-absolute-value-basic");
  assert.equal(absBasic.concept.includes("兩條直線當成單純的變號符號"), false);
  assert.equal(absBasic.concept.includes("兩條豎線當成單純的變號符號"), true);
  const absDist = lectures.find(x => x.skillId === "integer-absolute-value-distance");
  assert(absDist.formula.includes("k≥0"));
  const expLaws = lectures.find(x => x.skillId === "integer-exponent-laws");
  assert(expLaws.formula.includes("(aᵐ)ⁿ=a^(m×n)")); assert.equal(expLaws.stepGuide[2], "冪的乘方則將指數相乘");
  const opp = lectures.find(x => x.skillId === "integer-opposite-number");
  assert.equal(opp.examples[0].prompt, "-6 的相反數為？");
  assert.equal(opp.examples[0].why, "相反數與原數的和應為零；-6+6=0，所以答案是 6。選項 1/6 既不與 -6 相加為零，也不是 -6 的倒數；真正的倒數是 -1/6，這兩種概念不能混用。");
  const mix = lectures.find(x => x.skillId === "integer-mixed-operations");
  assert.equal(mix.examples[0].prompt, "計算 6 + 2 × (-3)。");
  assert.equal(mix.examples[0].why, "原式先算 2×(-3)=-6，再算 6+(-6)=0。若錯把 6+2 提前相加，會得到 -24；題目中的 24 還另外漏掉了負號，因此不能只用一個錯誤解釋該選項。");
  const line = lectures.find(x => x.skillId === "integer-number-line-position");
  assert.equal(line.commonMistakes[3], "未先確認每格代表多少單位，就把格數直接當坐標，會在非單位刻度的數線上讀錯位置。");
  const sci = lectures.find(x => x.skillId === "integer-scientific-notation");
  assert.equal(sci.concept, "對正數，科學記號寫成 a×10ⁿ，其中係數必須滿足 1≤a<10，n 是整數。把小數點移到第一個非零數字之後可得到係數；原數大於或等於十時指數為正，介於零與一之間時指數為負。移動幾位才決定指數大小，不能只數零；36×10⁵ 即使等值，也不是標準寫法。");
  assert.equal(sci.stepGuide[3], "確認係數 a 滿足 1≤a<10");
  assert.equal(sci.stepGuide[4], "反向移動小數點還原原數，檢查位數與指數正負是否一致。");
  const u01Text = [readFileSync(path.join(toolsRoot, "v2-u01-pilot-source.mjs"), "utf8"), readFileSync(path.join(mathRoot, "v2/math-question-bank-v2-u01.js"), "utf8"), readFileSync(path.join(toolsRoot, "u01-policy-v1-1-content-manifest.mjs"), "utf8")].join("");
  assert.equal((u01Text.match(/幂/g) ?? []).length, 0);
  assert.equal(Object.values(U01_POLICY_V1_1_REQUIRED_QUESTIONS).filter(x => x.explanation).length, 51);
  assert.equal(Object.keys(U01_POLICY_V1_1_REQUIRED_QUESTIONS).length, 60);
  assert.equal(Object.values(U01_POLICY_V1_1_REQUIRED_QUESTIONS).filter(x => x.commonMistake).length, 60);
}

export function verifyU01Policy() {
  assert.equal(policy.id, "math-content-standard-tw"); assert.equal(policy.version, "1.1.0"); assert.equal(hashPolicy(), "72384ef7b0a3ab549d676c8e9f4af044aa694807d1ee36d3b016d8a3ce13d271");
  const allQuestions = load("math-question-bank-v2-u01.js", "MATH_QUESTION_BANK_V2_U01"), lectures = load("math-lecture-v2-u01.js", "MATH_LECTURE_V2_U01");
  assert.equal(allQuestions.length, 89);
  const appendedQuestionCount = allQuestions.length - 60;
  assert.equal(appendedQuestionCount, 29);
  const questions = allQuestions.slice(0, 60);
  assert.equal(questions.length, 60); assert.equal(lectures.length, 15); assert.equal(new Set(questions.map(x => x.questionId)).size, 60); assert.equal(new Set(lectures.map(x => x.skillId)).size, 15); assert.equal(new Set(questions.map(x => x.skillId)).size, 15);
  assert.deepEqual([0, 1, 2, 3].map(index => questions.filter(x => x.answerIndex === index).length), [15, 15, 15, 15]);
  assert.deepEqual(Object.fromEntries(["basic", "standard", "literacy", "advanced"].map(level => [level, questions.filter(x => x.difficulty === level).length])), { basic: 28, standard: 30, literacy: 2, advanced: 0 });
  for (const skillId of new Set(questions.map(x => x.skillId))) { const skill = questions.filter(x => x.skillId === skillId); assert.equal(skill.length, 4); assert.deepEqual([0, 1, 2, 3].map(index => skill.filter(x => x.answerIndex === index).length), [1, 1, 1, 1]); }
  const audit = mergeAuditResults([auditQuestionBank({ unit: "U01", path: "question", questions, policy }), auditLectureBank({ unit: "U01", path: "lecture", lectures, policy })]);
  const rules = audit.mechanical.reduce((m, x) => m.set(x.rule, (m.get(x.rule) ?? 0) + 1), new Map());
  assert.deepEqual(Object.fromEntries(rules), { "missing-advanced-coverage": 15, "missing-literacy-coverage": 14 });
  assert.deepEqual(audit.requiresHumanReview.map(x => [x.recordId, x.rule]), [["u01-s004-v002", "generic-stem-review"], ["u01-s006-v004", "generic-stem-review"]]);
  const diversity = analyzeU01SemanticDiversity(questions, lectures), text = JSON.stringify({ questions, lectures });
  for (const phrase of U01_PROHIBITED_PROSE) assert.equal(text.includes(phrase), false, phrase);
  assert.equal(new Set(diversity.explanations.map(x => x.text)).size, 51); assert.equal(diversity.explanations.length, 51); assert.equal(new Set(diversity.concepts.map(x => x.text)).size, 15); assert.equal(new Set(diversity.fifths.map(x => x.text)).size, 15); assert.equal(new Set(diversity.whys.map(x => x.text)).size, 30); assert.equal(new Set(diversity.mistakes.map(x => x.text)).size, 60);
  assert.equal(diversity.repeatedFragments.explanations.length + diversity.repeatedFragments.whys.length + diversity.repeatedFragments.concepts.length, 0);
  assertChatGptPayload(questions, lectures);
  return { questions: 60, lectures: 15, skills: 15, mechanical: Object.fromEntries(rules), targeted: 2, topSimilarityPairs: diversity.topPairs, totalQuestions: allQuestions.length, appendedQuestionCount };
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) console.log(JSON.stringify(verifyU01Policy()));
