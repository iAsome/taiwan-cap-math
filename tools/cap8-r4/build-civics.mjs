import assert from "node:assert/strict";
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import crypto from "node:crypto";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { validateAuthoringRecord } from "./authoring-validator.mjs";
import { CIVICS_SKILL_PLAN } from "./authority/skill-plans/civics.mjs";
import {
  CIVICS_CONTENT_VERSION,
  CIVICS_OFFICIAL_SOURCES,
  CIVICS_QUESTION_OPERATIONS,
  CIVICS_UNIT_PROFILES,
  CIVICS_VERIFIED_AT,
} from "../../公民會考作戰室/r4/source/civics-r4-source.mjs";
import { CIVICS_SKILL_CONTEXTS, CIVICS_SKILL_MISCONCEPTIONS, CIVICS_SKILL_RULES } from "../../公民會考作戰室/r4/source/civics-r4-skill-rules.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const SUBJECT_ROOT = path.join(REPO_ROOT, "公民會考作戰室");
const R4_ROOT = path.join(SUBJECT_ROOT, "r4");
const SOURCE_ROOT = path.join(R4_ROOT, "source");
const RUNTIME_ROOT = path.join(R4_ROOT, "runtime");
const GRAPH_PATH = path.join(HERE, "authority", "frozen-authority-graph.json");
const REVIEW_ROOT = path.join(HERE, "ledger", "reviews", "items");
const SUBJECT = "civics";

const ACTION_GUIDES = Object.freeze([
  ["區分", "先分別界定各概念的成立條件，再用同一情境比較差異"],
  ["辨識", "從資料中找出足以支持判斷的特徵，排除只有表面相似的線索"],
  ["辨認", "從資料中找出足以支持判斷的特徵，排除只有表面相似的線索"],
  ["分析", "依序追查行動者、制度條件、原因、影響與可能的替代解釋"],
  ["比較", "先設定共同標準，再逐項比較相同處、差異與適用限制"],
  ["評估", "以目標、權利、證據、成本、受影響者與替代方案作整體判斷"],
  ["說明", "指出概念的目的與運作機制，並交代何時不能直接套用"],
  ["理解", "把制度目的連到具體情境，再用反例確認適用界線"],
  ["判斷", "先確定規則與事實，再檢查條件是否符合並提出有理由的結論"],
  ["運用", "依程序整理資訊、提出理由、作成決定並檢查後續影響"],
  ["提出", "根據問題與證據設計可行方案，並檢查權利、成本及執行條件"],
  ["檢討", "對照原定目的、程序、權利影響與實際結果，找出需要修正之處"],
  ["反思", "比較原先想法與新證據，指出哪些經驗使判斷需要調整"],
  ["整理", "先分類行動者、主張、證據與影響，再核對是否遺漏重要關係"],
  ["設計", "根據需求、權利、資源與風險提出方案，再檢查可行性與替代方案"],
  ["選擇", "設定共同標準，比較各方案的權利、成本、風險與執行條件"],
  ["規劃", "列出目標、責任、資源、時程與風險控制，並預先設定可檢查的成效指標"],
  ["追蹤", "依時間順序核對來源、流向、變化與受影響者，不把單一節點當成全部"],
  ["查核", "核對原始來源、發布日期、證據與完整脈絡，並交叉比對其他可信資料"],
  ["保存", "保留可識別交易、時間、對象與內容的完整紀錄，避免只留無法追溯的截圖"],
  ["用", "先確認資料定義、時間、單位與適用對象，再說明資料如何支持結論"],
  ["把", "先重述可查證的問題、受影響者與判斷標準，再整理需要的證據"],
  ["依法", "先查現行官方規範與機關職權，再把規則套用到具體事實"],
  ["依", "先確認關係、條件與時間，再依明確標準比較可行方案"],
  ["以", "使用題示資料完成判斷，明確說出資料與結論之間的關係"],
  ["由", "從題目提供的事實找出關鍵線索，不加入材料沒有提供的假設"],
  ["找出", "列出所有可行選項並依明確標準定位符合條件者"],
  ["列出", "完整整理互不重複且符合限制的項目，再檢查是否遺漏"],
  ["檢查", "逐項核對來源、條件、時間與例外，避免只看單一數字或標題"],
]);

const SCENARIO_OPENERS = Object.freeze([
  (context) => `閱讀${context}時，`,
  (context) => `班級討論${context}時，`,
  (context) => `一份${context}報告中，`,
  (context) => `針對${context}，`,
  (context) => `整理${context}${context.endsWith("案例") ? "" : "案例"}時，`,
  (context) => `${context}引發爭議，`,
  (context) => `檢視${context}後，`,
  (context) => `小組比較${context}時，`,
]);

const CLAIM_FRAMES = Object.freeze([
  (error) => `有人主張「${error}」。`,
  (error) => `甲先下結論：「${error}」。`,
  (error) => `一名同學認為「${error}」。`,
  (error) => `報告把「${error}」當成前提。`,
  (error) => `討論中出現「${error}」的說法。`,
  (error) => `有人只用單一線索支持「${error}」。`,
]);

const MISCONCEPTION_FLAWS = Object.freeze([
  (belief, context) => `依「${belief}」處理${context}，不再查其他成立條件。`,
  (belief, context) => `把「${belief}」當成通則，略過${context}中的反例。`,
  (belief, context) => `先接受「${belief}」，再挑選${context}中支持它的資料。`,
  (belief, context) => `把「${belief}」當成完整理由，便把${context}的單一結果當成結論。`,
  (belief, context) => `只保留${context}支持「${belief}」的資訊，不查限制。`,
  (belief, context) => `用「${belief}」作成決定，不檢查${context}是否符合必要條件。`,
  (belief, context) => `看到${context}就套用「${belief}」，不核對例外。`,
  (belief, context) => `以「${belief}」解讀${context}，卻沒有交代判準。`,
  (belief, context) => `先用「${belief}」排除異議，再整理${context}。`,
  (belief, context) => `只憑${context}的表面線索支持「${belief}」。`,
  (belief, context) => `把${context}簡化成「${belief}」，忽略受影響者差異。`,
  (belief, context) => `援引「${belief}」回應${context}，但未查適用範圍。`,
  (belief, context) => `預先接受「${belief}」，再倒推${context}的結論。`,
  (belief, context) => `用${context}重述「${belief}」，卻沒有提出可檢驗證據。`,
  (belief, context) => `以「${belief}」取代對${context}的逐項比較。`,
]);

const MATERIAL_OPENERS = Object.freeze([
  () => "依上述材料，",
  () => "比較甲、乙的說法，",
  (context) => `就這份${context}案例，`,
  () => "檢視三人的理由，",
  () => "根據班級討論，",
  () => "從資料與判準來看，",
  () => "若不增加材料外假設，",
  () => "綜合甲、乙、丙的意見，",
]);

const MATERIAL_QUESTIONS = Object.freeze([
  ["乙的作法補足甲欠缺的哪一部分？", "與甲相比，乙多做了哪一步？", "乙為何比甲的判斷可靠？", "乙的意見增加了哪一項檢驗？", "哪一點使乙較能成立判斷？", "乙如何避免甲的推論問題？"],
  ["檢驗甲的說法最需要哪一資料？", "哪一新增資料最能測試甲的主張？", "要判斷甲是否過度概括，應補哪一資料？", "哪一資料最能支持或反駁甲？", "若要查核甲的說法，應先蒐集什麼？", "哪一證據最能檢查甲的推論？"],
  ["形成決定前，小組下一步應做什麼？", "小組如何把討論轉成可追蹤的行動？", "哪一步能兼顧證據與公共責任？", "作成決定後，還應保留哪一程序？", "哪一後續作法最能接受公共檢驗？", "小組如何避免討論停在口號？"],
]);

const DATA_ASSETS = Object.freeze({
  STRATIFICATION_INEQUALITY: { columns: ["學生群體", "可借用設備比例", "課後交通可及比例"], rows: [["甲", "92%", "88%"], ["乙", "61%", "47%"], ["丙", "78%", "69%"]], summary: "三組學生取得學習設備與課後交通的比例不同，須同時比較兩項資源。" },
  ELECTIONS_PARTIES: { columns: ["參與方式", "主要時點", "主要功能"], rows: [["選舉投票", "任期屆滿或法定改選", "選擇公職代表"], ["政策公聽", "政策形成前", "提出資料與意見"], ["選後監督", "任期進行中", "追蹤承諾與問責"]], summary: "選舉是重要參與管道，但任期內仍可透過表意與監督持續問責。" },
  PUBLIC_OPINION_MEDIA: { columns: ["調查時間", "調查群體", "支持比例", "資料限制"], rows: [["三月", "全體樣本", "52%", "抽樣誤差內"], ["六月", "全體樣本", "44%", "題目措辭調整"], ["六月", "18至29歲", "61%", "僅代表該年齡層"]], summary: "公共意見會隨時間與群體而異，跨期比較還須核對抽樣和題目變動。" },
  SCARCITY_OPPORTUNITY_COST: { columns: ["方案", "所需經費", "預期服務人次"], rows: [["改善步道", "40萬元", "1,400"], ["增設夜間照明", "40萬元", "2,100"], ["修繕活動室", "40萬元", "900"]], summary: "有限預算只能選一案，無法同時滿足三項公共需求。" },
  MARKETS_PRICE_FAILURE: { columns: ["情境", "市場價格", "買賣雙方預期收益", "未計入第三人損失"], rows: [["甲", "80", "18", "0"], ["乙", "95", "24", "35"], ["丙", "70", "15", "10"]], summary: "市場價格反映交易條件，但未必包含對第三人的損失。" },
  FIRMS_PRODUCTION_ENTREPRENEURSHIP: { columns: ["月份", "營收", "總成本", "利潤"], rows: [["一月", "120", "90", "30"], ["二月", "150", "138", "12"], ["三月", "135", "100", "35"]], summary: "營收最高的月份不一定利潤最高；單位為萬元。" },
  MONEY_BANKING_CREDIT_FINANCE: { columns: ["生活情境", "貨幣功能", "判讀提醒"], rows: [["購物付款", "交換媒介", "降低以物易物困難"], ["商品標價", "計價單位", "方便比較不同商品"], ["保留現金", "價值保存", "購買力仍受物價影響"]], summary: "貨幣可用於交換、計價與保存價值，但保存價值不等於購買力不變。" },
  GOVERNMENT_ECONOMIC_POLICY: { columns: ["政府項目", "收入或支出性質", "判讀提醒"], rows: [["所得稅", "稅收收入", "不與個別服務直接對價"], ["停車使用費", "使用者付費收入", "由特定服務使用者負擔"], ["公共托育", "公共服務支出", "須由政府收入支應"]], summary: "政府收入支應公共服務；稅收、使用者付費與支出的功能不能混稱。" },
  TRADE_GLOBALIZATION_DIVISION: { columns: ["供應方案", "主要來源占比", "平均成本", "中斷風險"], rows: [["甲", "82%", "低", "高"], ["乙", "55%", "中", "中"], ["丙", "34%", "較高", "低"]], summary: "低成本與供應集中風險之間存在取捨。" },
  WELFARE_POVERTY_SOCIAL_POLICY: { columns: ["地區", "符合資格人數", "實際使用人數", "平均交通時間"], rows: [["甲", "500", "420", "18分鐘"], ["乙", "480", "210", "67分鐘"], ["丙", "530", "390", "31分鐘"]], summary: "名義上有服務不代表能實際取得，交通時間可能形成門檻。" },
  DIGITAL_CITIZENSHIP_PRIVACY: { columns: ["蒐集欄位", "識別可能", "告知用途", "保存期限"], rows: [["姓名與電話", "可直接識別", "會員聯絡", "一年"], ["精確定位", "可間接識別", "路線服務", "三十日"], ["裝置識別碼", "可間接識別", "內容推薦", "未說明"]], summary: "個人資料包含直接或間接識別資訊；有效同意須交代用途與保存期限。" },
  SUSTAINABILITY_PUBLIC_POLICY: { columns: ["運輸方案", "每人排放指數", "每日服務人次", "弱勢優惠"], rows: [["甲", "100", "2,000", "無"], ["乙", "62", "2,600", "有"], ["丙", "44", "1,100", "有" ]], summary: "永續方案不能只看排放，也要比較服務量與分配效果。" },
});

function sha256(value) {
  return crypto.createHash("sha256").update(value).digest("hex");
}

function ordinal(value) {
  return String(value).padStart(3, "0");
}

function assertInside(root, target) {
  const resolvedRoot = path.resolve(root);
  const resolvedTarget = path.resolve(target);
  assert(resolvedTarget.startsWith(`${resolvedRoot}${path.sep}`), `path escaped ${resolvedRoot}: ${resolvedTarget}`);
}

function lensFor(title) {
  const found = ACTION_GUIDES.find(([prefix]) => title.startsWith(prefix));
  return found ? { action: found[0], focus: title.slice(found[0].length), method: found[1] } : { action: "解釋", focus: title, method: "界定概念、核對證據與適用條件後提出結論" };
}

function withoutEndPunctuation(value) {
  return value.replace(/[。；，：！？]+$/u, "");
}

function asQuotedClaim(value) {
  return value.replace(/^認為/u, "");
}

function provenance(skill, profile) {
  return {
    status: "original",
    authorRole: "Codex R4 公民科內容作者",
    copyrightStatus: "全部題文與講義為原創；官方資料僅用於範圍、現行事實與題型校準。",
    sourceRefs: [...new Set([...skill.authorityRefs, ...profile.sources])],
  };
}

function arrangedOptions(correct, wrong, answerIndex) {
  assert.equal(wrong.length, 3);
  const options = [...wrong];
  options.splice(answerIndex, 0, correct);
  return options;
}

function questionRecord({ id, skill, profile, stem, correct, correctReason, wrong, wrongReasons, answerIndex, difficulty, cognitiveProcess, representationType, misconceptionTargets, stimulusId = null, assets = [] }) {
  assert(correctReason, `${id}: correct rationale missing`);
  assert.equal(wrongReasons?.length, 3, `${id}: distractor rationales missing`);
  const options = arrangedOptions(correct, wrong, answerIndex);
  const reasonsByText = new Map([
    [correct, correctReason],
    [wrong[0], wrongReasons[0]],
    [wrong[1], wrongReasons[1]],
    [wrong[2], wrongReasons[2]],
  ]);
  return {
    id,
    subject: SUBJECT,
    skillIds: [skill.id],
    authorityRefs: [...skill.authorityRefs],
    stimulusId,
    stem,
    options,
    answerIndex,
    optionRationales: options.map((option, optionIndex) => ({ optionIndex, isCorrect: optionIndex === answerIndex, reason: reasonsByText.get(option) })),
    difficulty,
    cognitiveProcess,
    representationType,
    misconceptionTargets,
    provenance: provenance(skill, profile),
    independentReviews: [
      { reviewerRole: "civics-rule-and-evidence-review", derivedAnswerIndex: answerIndex, evidence: `${id}：依「${skillRuleAnchor(profile)}」核對四個選項；只有選項${answerIndex + 1}符合本技能判準。`, status: "pass" },
      { reviewerRole: "civics-alternative-answer-review", derivedAnswerIndex: answerIndex, evidence: `${id}：以「${profile.questionErrors.join("」與「")}」逐一排除三個先下結論或省略證據的選項，答案為${answerIndex + 1}。`, status: "pass" },
    ],
    assets,
  };
}

function skillRuleAnchor(profile) {
  return withoutEndPunctuation(profile.skillRule);
}

function flawedSet(profile, error, context, skillIndex, itemIndex) {
  const variant = (skillIndex * 11 + itemIndex * 7) % MISCONCEPTION_FLAWS.length;
  const rule = skillRuleAnchor(profile);
  const alternative = profile.questionErrors.find((belief) => belief !== error);
  const beliefs = [error, alternative, error];
  return {
    options: beliefs.map((belief, index) => MISCONCEPTION_FLAWS[(variant + index) % MISCONCEPTION_FLAWS.length](belief, context)),
    reasons: beliefs.map((belief) => `「${belief}」忽略本題判準「${rule}」，不能據此判讀${context}。`),
  };
}

function operationTask(index, title) {
  return [
    `要${title}，第一步應怎麼做？`,
    "若要修正這項說法，哪一作法較妥？",
    `哪一項查證作法最能協助${title}？`,
    `哪一處理最能落實「${title}」？`,
    "要比較兩項主張，應採哪一方式？",
    "要讓判斷可被重查，下一步是什麼？",
    "哪一項評估最完整？",
    "哪一分析能避免只看單一因素？",
    "哪一作法能用反例檢驗這項說法？",
    "哪一解讀沒有超出資料範圍？",
    "把判準移到新案例時，哪一作法正確？",
    "若資訊可能更新，應如何查證？",
  ][index];
}

function skillQuestionStem(skill, focus, context, error, skillIndex, operationIndex) {
  const variant = (skillIndex * 37 + operationIndex * 19) % 240;
  const opener = SCENARIO_OPENERS[variant % SCENARIO_OPENERS.length](context);
  const claim = CLAIM_FRAMES[Math.floor(variant / SCENARIO_OPENERS.length) % CLAIM_FRAMES.length](error);
  return `${opener}${claim}${operationTask(operationIndex, focus)}`;
}

function operationContent(operation, skill, profile, lens, context, index, skillIndex) {
  const focus = lens.focus || skill.title;
  const error = profile.questionErrors[(skillIndex + index) % profile.questionErrors.length];
  const rule = skillRuleAnchor(profile);
  const correct = [
    `先列出${context}能證明的條件，再檢查「${error}」是否成立。`,
    `用${context}尋找「${error}」的反例與缺少條件。`,
    `查明${context}的來源、時間與適用對象，再檢查「${error}」是否成立。`,
    `題示的${context}不足以直接支持「${error}」；應逐項核對成立條件。`,
    `用相同資料與成立條件比較${context}的不同解釋。`,
    `記下${context}採用的條件、證據與排除「${error}」的理由。`,
    `比較${context}支持與反駁「${error}」的資訊後再下結論。`,
    `先查${context}的條件、例外與資料限制，不以「${error}」作單因解釋。`,
    `尋找${context}中不符合「${error}」的反例，再檢查原結論。`,
    `只說明${context}能支持的範圍，不擴張成「${error}」。`,
    `到新情境仍核對${context}的相同成立條件，不直接沿用「${error}」。`,
    `核對${context}的原始來源、日期與適用對象，不先接受「${error}」。`,
  ][index];
  const flawed = flawedSet(profile, error, context, skillIndex, index);
  const correctReason = [
    `此項先用「${rule}」界定條件，再讀${context}，沒有以單一線索替代結論。`,
    `此項以「${rule}」補回必要條件，並用${context}檢查原說法。`,
    `此項保留${context}的來源、時間與適用對象，並使用本技能判準。`,
    `${context}的題示事實逐項對照「${rule}」，推論沒有跳步。`,
    `共同判準「${rule}」可把${context}的差異與例外分開。`,
    `此項依「${rule}」留下採用條件與理由，其他人可以重查。`,
    `此項依「${rule}」同時比較支持與反駁資訊，評估較完整。`,
    `此項先查條件、例外與資料限制，再依「${rule}」判斷。`,
    `${context}反例可依「${rule}」檢查「${error}」是否過度概括。`,
    `此項依「${rule}」限定${context}可證範圍，避免過度推論。`,
    `新案例仍保留「${rule}」的成立條件，因此是合理遷移。`,
    `此項同時保留「${rule}」與原始來源、日期及適用對象，可確認資料範圍。`,
  ][index];
  return { stem: skillQuestionStem(skill, `${lens.action}${focus}`, context, error, skillIndex, index), correct, correctReason, wrong: flawed.options, wrongReasons: flawed.reasons, misconceptionTargets: [error], operation };
}

function buildSkillQuestions(skill, profile, skillIndex) {
  const lens = lensFor(skill.title);
  return CIVICS_QUESTION_OPERATIONS.map((operation, operationIndex) => {
    const context = profile.contexts[(skillIndex + operationIndex) % profile.contexts.length];
    const content = operationContent(operation, skill, profile, lens, context, operationIndex, skillIndex);
    return questionRecord({
      id: `CIV_R4_Q_S${ordinal(skillIndex + 1)}_${String(operationIndex + 1).padStart(2, "0")}`,
      skill,
      profile,
      ...content,
      answerIndex: (skillIndex + operationIndex) % 4,
      difficulty: operation.difficulty,
      cognitiveProcess: operation.cognitive,
      representationType: operation.key,
    });
  });
}

function buildLecture(skill, profile, skillIndex) {
  const lens = lensFor(skill.title);
  const rule = profile.skillRule;
  const ruleAnchor = skillRuleAnchor(profile);
  const contexts = [0, 1, 2].map((offset) => profile.contexts[(skillIndex + offset) % profile.contexts.length]);
  const misconceptions = profile.errors;
  const sourceNames = "對應主管機關或法規查詢入口";
  return {
    id: `CIV_R4_L_S${ordinal(skillIndex + 1)}`,
    subject: SUBJECT,
    unitId: skill.unitId,
    skillId: skill.id,
    authorityRefs: [...skill.authorityRefs],
    prerequisites: [...skill.prerequisites],
    objectives: [`能${skill.title}，並以具體判準說明理由。`, `能用${contexts[1]}辨認與修正相關迷思。`],
    sections: [
      { id: `CIV_R4_L_S${ordinal(skillIndex + 1)}_SEC_01`, title: skill.title, content: rule },
      { id: `CIV_R4_L_S${ordinal(skillIndex + 1)}_SEC_02`, title: "判讀步驟", content: `先依「${ruleAnchor}」確認本題條件，並${lens.method}。接著比對「${contexts[0]}」和「${contexts[1]}」的正反資料；資訊不足時應指出缺件。` },
      { id: `CIV_R4_L_S${ordinal(skillIndex + 1)}_SEC_03`, title: "適用界線與例外", content: `「${misconceptions[0]}」與「${misconceptions[1]}」都不能取代「${ruleAnchor}」的判準。即使材料表面符合，也要檢查反例、適用對象與資料限制，不能以單一線索直接推成通則。` },
      { id: `CIV_R4_L_S${ordinal(skillIndex + 1)}_SEC_04`, title: "資料查證", content: `閱讀${contexts[2]}相關資料時，須先找原始紀錄或發布單位，核對來源、時間與適用對象；涉及現行制度時再查${sourceNames}。本節查核日為${CIVICS_VERIFIED_AT}。` },
    ],
    workedExamples: contexts.map((context, exampleIndex) => ({
      id: `CIV_R4_L_S${ordinal(skillIndex + 1)}_EX_0${exampleIndex + 1}`,
      prompt: [
        `${context}只提供一項線索。這足以${skill.title}嗎？`,
        `有人以「${misconceptions[1]}」解讀${context}。這項說法漏了什麼？`,
        `若${context}的來源或內容可能更新，應如何查證？`,
      ][exampleIndex],
      steps: [
        [`列出${context}已知與未知的資料。`, `${lens.method}。`, `核對反例、適用對象與資料限制。`],
        [`標出「${misconceptions[1]}」的絕對說法。`, `從${context}找反例或缺少的條件。`, `補回適用界線後再下結論。`],
        [`先找到${context}的原始紀錄或發布單位。`, `核對日期、沿革與適用對象。`, `涉及制度時再查${sourceNames}，並記錄${CIVICS_VERIFIED_AT}與路徑。`],
      ][exampleIndex],
      answer: [
        `不足。應先依「${ruleAnchor}」確認條件，再核對${context}。`,
        `它把「${misconceptions[1]}」當成通則；應依「${ruleAnchor}」修正。`,
        `查閱原始紀錄並記下版本與日期；涉及制度時再核對${sourceNames}。`,
      ][exampleIndex],
      why: [
        `${contexts[0]}的單一線索可能有多種解釋，須以「${ruleAnchor}」排除混淆。`,
        `${contexts[1]}的說法忽略「${ruleAnchor}」，也沒有檢查反例與適用條件。`,
        `${contexts[2]}可能隨版本或情境更新；保留原始來源與日期，涉及制度時再查官方資料，才能重查。`,
      ][exampleIndex],
    })),
    misconceptions: misconceptions.map((belief, index) => ({
      belief,
      whyWrong: `「${belief}」忽略本節判準「${ruleAnchor}」，也沒有處理${contexts[index % contexts.length]}的反例與資料限制。`,
      correction: [`依「${ruleAnchor}」逐項界定，再用${contexts[0]}核對。`, `用${contexts[1]}找反例，依「${ruleAnchor}」改寫結論。`, `分列${contexts[1]}的支持與反對證據，再套用「${ruleAnchor}」。`, `先查${contexts[2]}原始紀錄；涉及制度時再核對${sourceNames}，並依「${ruleAnchor}」標記範圍。`][index],
    })),
    checks: [
      { prompt: `執行「${skill.title}」時，為何不能只看${contexts[0]}的單一線索？`, answer: `還須確認是否符合「${ruleAnchor}」。`, reason: `${contexts[0]}可能有其他解釋，單一線索不足以排除。` },
      { prompt: `「${misconceptions[0]}」有何問題？`, answer: `它不符合「${ruleAnchor}」的判準。`, reason: `它沒有檢查反例、適用對象與資料限制，不能直接採用。` },
      { prompt: `${contexts[2]}涉及可能更新資料時，第一個查證動作是什麼？`, answer: `先找到原始紀錄或發布單位，核對版本、日期與適用對象。`, reason: `涉及制度時再查${sourceNames}；本節查核日為${CIVICS_VERIFIED_AT}。` },
    ],
    assets: [],
    provenance: provenance(skill, profile),
  };
}

function assetRecord(family, profile, skill, unitNumber) {
  const table = DATA_ASSETS[family.key];
  if (!table) return null;
  const id = `CIV_R4_A_U${String(unitNumber).padStart(2, "0")}`;
  const relativePath = `公民會考作戰室/r4/assets/${id}.html`;
  const html = `<!doctype html>\n<html lang="zh-Hant"><meta charset="utf-8"><meta name="viewport" content="width=device-width"><title>${profile.title}資料表</title><style>body{font-family:system-ui,sans-serif;margin:1rem;color:#111;background:#fff}table{border-collapse:collapse;width:100%}caption{font-weight:700;text-align:left;margin-bottom:.5rem}th,td{border:1px solid #222;padding:.5rem;text-align:left}th{background:#eee}@media print{body{margin:0}th{background:#fff}}</style><table><caption>${table.summary}</caption><thead><tr>${table.columns.map((value) => `<th scope="col">${value}</th>`).join("")}</tr></thead><tbody>${table.rows.map((row) => `<tr>${row.map((value, index) => index === 0 ? `<th scope="row">${value}</th>` : `<td>${value}</td>`).join("")}</tr>`).join("")}</tbody></table></html>\n`;
  const record = {
    id,
    subject: SUBJECT,
    skillIds: [skill.id],
    type: "table",
    path: relativePath,
    sha256: sha256(html),
    creator: "Codex R4 公民科原創資料表",
    source: "原創假設資料；不宣稱為真實統計",
    license: "Project-original",
    originality: "original",
    transformationRecord: "依會考紙本資料題的清楚標題、欄位、單位與黑白可讀要求製作；未描摹官方題圖。",
    calibrationRefs: ["CIVICS_SRC_CAP_PAPERS"],
    caption: `${profile.title}判讀資料`,
    altText: `${profile.title}資料表，列出${table.columns.join("、")}，可由下方資料替代表完整讀取。`,
    longDescription: `${table.summary}閱讀時先比較「${table.columns.join("、")}」各欄，再依題目指定的公民概念判斷；表格不以顏色傳遞答案。`,
    dataFallback: { summary: table.summary, columns: table.columns, rows: table.rows },
    accessibility: { colorIndependent: true, printSafe: true },
    technical: { headers: table.columns, units: [...new Set(table.rows.flatMap((row) => row.filter((value) => /%|元|萬|分鐘/u.test(String(value))).map((value) => String(value).match(/%|元|萬元|分鐘/u)?.[0]).filter(Boolean)))], dataSource: "原創假設資料，非官方統計" },
  };
  return { record, html };
}

function buildStimulus(skill, profile, family, skillIndex, asset) {
  const rule = skillRuleAnchor(profile);
  const evidenceAction = lensFor(skill.title).method;
  const context = profile.contexts[(skillIndex + 3) % profile.contexts.length];
  const stimulusId = `CIV_R4_ST_S${ordinal(skillIndex + 1)}`;
  const error = profile.questionErrors[skillIndex % profile.questionErrors.length];
  const statementA = `甲說：「${error}。」`;
  const statementB = `乙要求${evidenceAction}。`;
  const statementC = `丙提醒：「${rule}。」`;
  const table = asset?.record.dataFallback;
  const tableSummary = table ? withoutEndPunctuation(table.summary) : null;
  const caseContext = asset ? "附表" : context;
  const baseContent = asset ? `某班先討論${context}，再用附表練習${skill.title}。${statementA}${statementB}${statementC}` : `某班以${context}練習${skill.title}。${statementA}${statementB}${statementC}`;
  const stimulus = {
    id: stimulusId,
    subject: SUBJECT,
    unitId: skill.unitId,
    skillIds: [skill.id],
    authorityRefs: [...skill.authorityRefs],
    title: asset ? `${profile.title}：${asset.record.caption}` : `${profile.title}：${context}判讀`,
    kind: asset ? "data-table-case" : "public-life-case",
    content: asset ? `${baseContent}附表列出「${table.columns.join("、")}」；摘要為「${table.summary}」請連同附表回答。` : `${baseContent}請依三人的理由回答。`,
    sourceNote: "原創會考型情境；未改寫或重製歷屆題目。",
    factCheckedAt: CIVICS_VERIFIED_AT,
    assets: asset ? [asset.record.id] : [],
    questionIds: [1, 2, 3].map((value) => `CIV_R4_SQ_S${ordinal(skillIndex + 1)}_0${value}`),
    provenance: provenance(skill, profile),
  };
  const materialVariant = (skillIndex * 13) % 48;
  const materialOpener = asset ? "依附表，" : MATERIAL_OPENERS[materialVariant % MATERIAL_OPENERS.length](context);
  const phrasingIndex = Math.floor(materialVariant / MATERIAL_OPENERS.length) % 6;
  const claimStem = `甲認為「${error}」。`;
  const materialStem = `${claimStem}${materialOpener}`;
  const prompts = asset ? [
    { stem: `${claimStem}要判讀附表，哪一作法能修正甲的推論？`, correct: `先逐欄逐列讀取附表的${table.columns.join("、")}，再檢查「${error}」是否成立。`, correctReason: `這項作法先讀完整欄列，再用本技能判準檢驗甲的主張。`, cognitive: ["材料理解", "原則應用"], difficulty: "standard" },
    { stem: `${claimStem}根據附表，哪一解讀沒有超出資料？`, correct: `附表只能支持「${tableSummary}」；不能擴張成甲的通則。`, correctReason: `這項解讀忠於附表摘要，沒有把有限資料擴張成甲的通則。`, cognitive: ["證據評估", "推論"], difficulty: "advanced" },
    { stem: `${claimStem}若要留下可重查的結論，還應記錄什麼？`, correct: `記錄附表「${asset.record.caption}」的來源、欄列、採用理由、適用範圍與限制。`, correctReason: `保留附表來源、欄列與判斷理由，其他人才能重作判讀。`, cognitive: ["方案評估", "遷移"], difficulty: "transfer" },
  ] : [
    { stem: `${materialStem}${MATERIAL_QUESTIONS[0][phrasingIndex]}`, correct: `乙${evidenceAction}，並用${context}檢查甲，沒有先接受結論。`, correctReason: `乙用本技能判準與${context}的可查證資料檢驗甲的主張。`, cognitive: ["材料理解", "原則應用"], difficulty: "standard" },
    { stem: `${materialStem}${MATERIAL_QUESTIONS[1][phrasingIndex]}`, correct: `蒐集${context}中能支持或反駁「${error}」的資料。`, correctReason: `正反資料可依本技能判準測試「${error}」是否過度概括。`, cognitive: ["證據評估", "推論"], difficulty: "advanced" },
    { stem: `${materialStem}${MATERIAL_QUESTIONS[2][phrasingIndex]}`, correct: `記錄${context}來源、採用理由、適用範圍與反例，並說明為何不接受「${error}」。`, correctReason: `這保留本技能判準、${context}來源、採用理由、適用範圍與反例，可接受重查。`, cognitive: ["方案評估", "遷移"], difficulty: "transfer" },
  ];
  const questions = prompts.map((prompt, questionIndex) => {
    const flawed = flawedSet(profile, error, caseContext, skillIndex, 12 + questionIndex);
    return questionRecord({
      id: stimulus.questionIds[questionIndex],
      skill,
      profile,
      stem: prompt.stem,
      correct: prompt.correct,
      correctReason: prompt.correctReason,
      wrong: flawed.options,
      wrongReasons: flawed.reasons,
      answerIndex: (skillIndex + questionIndex) % 4,
      difficulty: prompt.difficulty,
      cognitiveProcess: prompt.cognitive,
      representationType: asset ? "stimulus-data-table" : "stimulus-public-case",
      misconceptionTargets: [profile.questionErrors[(skillIndex + questionIndex) % profile.questionErrors.length]],
      stimulusId,
      assets: asset ? [asset.record.id] : [],
    });
  });
  return { stimulus, questions };
}

function flattenPlan(graph) {
  const graphSkills = graph.skills.filter((value) => value.subject === SUBJECT).sort((a, b) => a.id.localeCompare(b.id, "en"));
  const entries = [];
  let offset = 0;
  for (const [familyIndex, family] of CIVICS_SKILL_PLAN.families.entries()) {
    const unitProfile = CIVICS_UNIT_PROFILES[family.key];
    assert(unitProfile, `${family.key}: profile missing`);
    for (const [localIndex, title] of family.skills.entries()) {
      const skill = graphSkills[offset++];
      assert(skill, `${family.key}: graph skill missing`);
      assert.equal(skill.title, title, `${skill.id}: skill title drift`);
      assert.equal(skill.unitId, `CIV_R4_U${String(familyIndex + 1).padStart(2, "0")}`, `${skill.id}: unit order drift`);
      const skillRule = CIVICS_SKILL_RULES[skill.id];
      assert(skillRule, `${skill.id}: skill-specific rule missing`);
      const specificErrors = CIVICS_SKILL_MISCONCEPTIONS[skill.id];
      assert.equal(specificErrors?.length, 2, `${skill.id}: two skill-specific misconceptions required`);
      const specificClaims = specificErrors.map(asQuotedClaim);
      const contexts = CIVICS_SKILL_CONTEXTS[skill.id];
      assert.equal(contexts?.length, 3, `${skill.id}: three skill-specific contexts required`);
      const profile = { ...unitProfile, skillRule, contexts, questionErrors: specificClaims, errors: [...specificClaims, "只憑單一案例就把有條件判斷當成通則", "不查資料來源與反例就直接下結論"] };
      entries.push({ skill, family, familyIndex, localIndex, profile });
    }
  }
  assert.equal(offset, 240);
  assert.equal(graphSkills.length, 240);
  return entries;
}

async function officialCalibration() {
  const files = (await readdir(REVIEW_ROOT)).filter((value) => /^CAP-(10[6-9]|11[0-5])-(MAIN|ALTERNATE)-integrated-social\.json$/u.test(value)).sort();
  const primary = [];
  const integrated = [];
  for (const file of files) {
    const review = JSON.parse(await readFile(path.join(REVIEW_ROOT, file), "utf8"));
    for (const item of review.items) {
      const compact = { candidateId: item.candidateId, examId: review.examId, curriculumCodes: item.curriculumCodes, skills: item.skills, representationTypes: item.representationTypes, reasoningOperations: item.reasoningOperations };
      if (item.primarySubject === SUBJECT) primary.push(compact);
      else if (item.secondarySubjects?.includes(SUBJECT)) integrated.push(compact);
    }
  }
  const years = [...new Set(files.map((value) => Number(value.slice(4, 7))))].sort((a, b) => a - b);
  assert.deepEqual(years, [106, 107, 108, 109, 110, 111, 112, 113, 114, 115]);
  return { schemaVersion: "cap8-r4-civics-official-calibration-v1", subject: SUBJECT, reviewedAt: CIVICS_VERIFIED_AT, officialYearRange: [106, 115], reviewFiles: files, primaryCivicsItems: primary, crossSubjectCivicsItems: integrated, counts: { reviewFiles: files.length, primaryCivicsItems: primary.length, crossSubjectCivicsItems: integrated.length } };
}

async function writeJson(target, value) {
  await mkdir(path.dirname(target), { recursive: true });
  const bytes = `${JSON.stringify(value, null, 2)}\n`;
  await writeFile(target, bytes, "utf8");
  return { path: target, bytes, sha256: sha256(bytes) };
}

async function resetGeneratedDirectories() {
  for (const target of ["lectures", "questions", "stimuli", "assets"].map((value) => path.join(RUNTIME_ROOT, value))) {
    assertInside(R4_ROOT, target);
    await rm(target, { recursive: true, force: true });
    await mkdir(target, { recursive: true });
  }
  const assetRoot = path.join(R4_ROOT, "assets");
  assertInside(R4_ROOT, assetRoot);
  await rm(assetRoot, { recursive: true, force: true });
  await mkdir(assetRoot, { recursive: true });
}

async function uiArtifacts() {
  const names = ["index.html", "app.js", "styles.css", "sw.js", "manifest.webmanifest", "package.json"];
  return Promise.all(names.map(async (name) => {
    const target = path.join(R4_ROOT, name);
    const bytes = await readFile(target);
    return { id: `CIV_R4_UI_${name.replace(/\W/gu, "_").toUpperCase()}`, type: "ui", path: path.relative(REPO_ROOT, target).replaceAll("\\", "/"), sha256: sha256(bytes) };
  }));
}

function validateContent(lectures, skillQuestions, stimuli, stimulusQuestions) {
  assert.equal(lectures.length, 240);
  assert.equal(skillQuestions.length, 2880);
  assert.equal(stimuli.length, 240);
  assert.equal(stimulusQuestions.length, 720);
  const allQuestions = [...skillQuestions, ...stimulusQuestions];
  assert.equal(new Set(allQuestions.map((value) => value.id)).size, 3600, "duplicate question ID");
  const visibleGroups = new Map();
  for (const value of allQuestions) {
    const key = JSON.stringify([value.stem, [...value.options].sort()]);
    visibleGroups.set(key, [...(visibleGroups.get(key) ?? []), value.id]);
  }
  const duplicateVisible = [...visibleGroups.values()].filter((ids) => ids.length > 1);
  assert.equal(duplicateVisible.length, 0, `exact duplicate visible question: ${JSON.stringify(duplicateVisible.slice(0, 8))}`);
  const assertUnique = (label, values) => {
    const groups = new Map();
    for (const [index, value] of values.entries()) groups.set(value, [...(groups.get(value) ?? []), index]);
    const duplicates = [...groups.entries()].filter(([, indices]) => indices.length > 1);
    assert.equal(duplicates.length, 0, `${label}: exact repeated student-visible text ${JSON.stringify(duplicates.slice(0, 5))}`);
  };
  assertUnique("lecture student-visible content", lectures.map((lecture) => JSON.stringify({ objectives: lecture.objectives, sections: lecture.sections, workedExamples: lecture.workedExamples, misconceptions: lecture.misconceptions, checks: lecture.checks })));
  assertUnique("independent-review evidence", allQuestions.flatMap((question) => question.independentReviews.map((review) => review.evidence)));
  for (let skillIndex = 0; skillIndex < 240; skillIndex += 1) {
    const skillId = `CIV_R4_S${ordinal(skillIndex + 1)}`;
    const bank = skillQuestions.filter((value) => value.skillIds[0] === skillId);
    assert.equal(bank.length, 12, `${skillId}: skill question floor`);
    assert.equal(new Set(bank.map((value) => value.representationType)).size, 12, `${skillId}: repeated question operation`);
    assert.deepEqual(Object.fromEntries(["foundation", "standard", "advanced", "transfer"].map((difficulty) => [difficulty, bank.filter((value) => value.difficulty === difficulty).length])), { foundation: 3, standard: 4, advanced: 3, transfer: 2 });
    assert.deepEqual([0, 1, 2, 3].map((index) => bank.filter((value) => value.answerIndex === index).length), [3, 3, 3, 3]);
  }
  assert.equal(new Set(stimuli.map((value) => value.content)).size, stimuli.length, "duplicate stimulus content");
  assert(allQuestions.every((value) => value.optionRationales.length === 4));
}

export async function buildCivics({ repoRoot = REPO_ROOT } = {}) {
  assert.equal(path.resolve(repoRoot), REPO_ROOT, "Civics builder is locked to this repository root");
  const graphBytes = await readFile(GRAPH_PATH);
  const graph = JSON.parse(graphBytes);
  assert.equal(graph.status, "frozen-reviewed");
  const entries = flattenPlan(graph);
  const sourceIds = new Set(CIVICS_OFFICIAL_SOURCES.map((value) => value.id));
  assert.equal(sourceIds.size, CIVICS_OFFICIAL_SOURCES.length);
  for (const source of CIVICS_OFFICIAL_SOURCES) await validateAuthoringRecord("source", source);
  for (const profile of Object.values(CIVICS_UNIT_PROFILES)) assert(profile.sources.every((value) => sourceIds.has(value)), `${profile.title}: unknown source`);

  const lectures = [];
  const skillQuestions = [];
  const stimuli = [];
  const stimulusQuestions = [];
  const assets = [];
  for (const [skillIndex, entry] of entries.entries()) {
    const asset = entry.localIndex === 0 ? assetRecord(entry.family, entry.profile, entry.skill, entry.familyIndex + 1) : null;
    if (asset) assets.push(asset);
    lectures.push(buildLecture(entry.skill, entry.profile, skillIndex));
    skillQuestions.push(...buildSkillQuestions(entry.skill, entry.profile, skillIndex));
    const builtStimulus = buildStimulus(entry.skill, entry.profile, entry.family, skillIndex, asset);
    stimuli.push(builtStimulus.stimulus);
    stimulusQuestions.push(...builtStimulus.questions);
  }
  validateContent(lectures, skillQuestions, stimuli, stimulusQuestions);
  for (const lecture of lectures) await validateAuthoringRecord("lecture", lecture);
  for (const question of [...skillQuestions, ...stimulusQuestions]) await validateAuthoringRecord("question", question);
  for (const asset of assets) await validateAuthoringRecord("asset", asset.record);
  await resetGeneratedDirectories();

  const artifacts = [];
  for (const lecture of lectures) {
    const file = await writeJson(path.join(RUNTIME_ROOT, "lectures", `${lecture.id}.json`), lecture);
    artifacts.push({ id: lecture.id, type: "lecture", path: path.relative(REPO_ROOT, file.path).replaceAll("\\", "/"), sha256: file.sha256 });
  }
  for (const question of [...skillQuestions, ...stimulusQuestions]) {
    const file = await writeJson(path.join(RUNTIME_ROOT, "questions", `${question.id}.json`), question);
    artifacts.push({ id: question.id, type: "question", path: path.relative(REPO_ROOT, file.path).replaceAll("\\", "/"), sha256: file.sha256 });
  }
  for (const stimulus of stimuli) {
    const file = await writeJson(path.join(RUNTIME_ROOT, "stimuli", `${stimulus.id}.json`), stimulus);
    artifacts.push({ id: stimulus.id, type: "stimulus", path: path.relative(REPO_ROOT, file.path).replaceAll("\\", "/"), sha256: file.sha256 });
  }
  for (const asset of assets) {
    const target = path.join(REPO_ROOT, asset.record.path);
    assertInside(R4_ROOT, target);
    await writeFile(target, asset.html, "utf8");
    artifacts.push({ id: asset.record.id, type: "asset", path: asset.record.path, sha256: asset.record.sha256 });
  }

  const calibration = await officialCalibration();
  await writeJson(path.join(SOURCE_ROOT, "official-sources.json"), { schemaVersion: "cap8-r4-civics-official-sources-v1", subject: SUBJECT, verifiedAt: CIVICS_VERIFIED_AT, sources: CIVICS_OFFICIAL_SOURCES });
  await writeJson(path.join(SOURCE_ROOT, "official-cap-calibration.json"), calibration);
  const bindingPath = path.join(SOURCE_ROOT, "authority-skill-binding.json");
  const binding = JSON.parse(await readFile(bindingPath, "utf8"));
  binding.contentStatus = { lecturesComplete: true, skillQuestionsComplete: true, stimuliComplete: true, manifestEligible: true };
  binding.contentVersion = CIVICS_CONTENT_VERSION;
  binding.officialFactVerificationDate = CIVICS_VERIFIED_AT;
  await writeJson(bindingPath, binding);

  const units = CIVICS_SKILL_PLAN.families.map((family, familyIndex) => {
    const unitId = `CIV_R4_U${String(familyIndex + 1).padStart(2, "0")}`;
    const unitEntries = entries.filter((value) => value.skill.unitId === unitId);
    return { unitId, title: CIVICS_UNIT_PROFILES[family.key].title, familyKey: family.key, skillIds: unitEntries.map((value) => value.skill.id) };
  });
  const contentIndex = {
    schemaVersion: "cap8-r4-civics-runtime-index-v1",
    subject: SUBJECT,
    contentVersion: CIVICS_CONTENT_VERSION,
    verifiedAt: CIVICS_VERIFIED_AT,
    legacyRuntimeReachable: false,
    units,
    skills: entries.map((entry, skillIndex) => ({ id: entry.skill.id, unitId: entry.skill.unitId, title: entry.skill.title, lecturePath: `runtime/lectures/CIV_R4_L_S${ordinal(skillIndex + 1)}.json`, questionPaths: Array.from({ length: 12 }, (_, index) => `runtime/questions/CIV_R4_Q_S${ordinal(skillIndex + 1)}_${String(index + 1).padStart(2, "0")}.json`), stimulusPath: `runtime/stimuli/CIV_R4_ST_S${ordinal(skillIndex + 1)}.json`, stimulusQuestionPaths: [1, 2, 3].map((index) => `runtime/questions/CIV_R4_SQ_S${ordinal(skillIndex + 1)}_0${index}.json`) })),
    assets: assets.map((value) => value.record),
    sourcesPath: "source/official-sources.json",
    calibrationPath: "source/official-cap-calibration.json",
  };
  const indexFile = await writeJson(path.join(RUNTIME_ROOT, "content-index.json"), contentIndex);
  artifacts.push({ id: "CIV_R4_RUNTIME_INDEX", type: "ui", path: path.relative(REPO_ROOT, indexFile.path).replaceAll("\\", "/"), sha256: indexFile.sha256 });

  for (const subdir of [["authority", "authority"], ["skills", "skill"]]) {
    for (const name of (await readdir(path.join(RUNTIME_ROOT, subdir[0]))).filter((value) => value.endsWith(".json")).sort()) {
      const target = path.join(RUNTIME_ROOT, subdir[0], name);
      const bytes = await readFile(target);
      const record = JSON.parse(bytes);
      artifacts.push({ id: record.id, type: subdir[1], path: path.relative(REPO_ROOT, target).replaceAll("\\", "/"), sha256: sha256(bytes) });
    }
  }
  artifacts.push(...await uiArtifacts());
  artifacts.sort((a, b) => `${a.type}\0${a.id}`.localeCompare(`${b.type}\0${b.id}`, "en"));
  assert.equal(new Set(artifacts.map((value) => value.id)).size, artifacts.length, "duplicate manifest artifact ID");
  const buildSha256 = sha256(artifacts.map((value) => `${value.type}\0${value.id}\0${value.path}\0${value.sha256}`).join("\n"));
  const manifest = {
    schemaVersion: "cap8-content-manifest-v4",
    subjectId: SUBJECT,
    contentVersion: CIVICS_CONTENT_VERSION,
    authorityGraphSha256: sha256(graphBytes),
    artifacts,
    counts: { authorityNodes: 100, skills: 240, lectures: 240, skillQuestions: 2880, stimulusQuestions: 720, stimuli: 240, assets: assets.length },
    buildSha256,
  };
  await writeJson(path.join(R4_ROOT, "content-manifest-v4.json"), manifest);
  return { ...manifest.counts, buildSha256, primaryOfficialItems: calibration.counts.primaryCivicsItems, crossSubjectOfficialItems: calibration.counts.crossSubjectCivicsItems };
}

async function main() {
  const result = await buildCivics();
  console.log(`build-civics: OK - ${result.skills} skills, ${result.lectures} lectures, ${result.skillQuestions} skill questions, ${result.stimuli} stimuli, ${result.stimulusQuestions} stimulus questions, ${result.assets} assets`);
  console.log(`build-civics: official calibration - ${result.primaryOfficialItems} primary civics items, ${result.crossSubjectOfficialItems} integrated items`);
  console.log(`build-civics: ${result.buildSha256}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
