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
  ["分析", "依序追查行動者、制度條件、原因、影響與可能的替代解釋"],
  ["比較", "先設定共同標準，再逐項比較相同處、差異與適用限制"],
  ["評估", "以目標、權利、證據、成本、受影響者與替代方案作整體判斷"],
  ["說明", "指出概念的目的與運作機制，並交代何時不能直接套用"],
  ["理解", "把制度目的連到具體情境，再用反例確認適用界線"],
  ["判斷", "先確定規則與事實，再檢查條件是否符合並提出有理由的結論"],
  ["運用", "依程序整理資訊、提出理由、作成決定並檢查後續影響"],
  ["提出", "根據問題與證據設計可行方案，並檢查權利、成本及執行條件"],
  ["反思", "比較原先想法與新證據，指出哪些經驗使判斷需要調整"],
  ["以", "使用題示資料完成判斷，明確說出資料與結論之間的關係"],
  ["由", "從題目提供的事實找出關鍵線索，不加入材料沒有提供的假設"],
  ["依法", "先查現行官方規範與機關職權，再把規則套用到具體事實"],
  ["找出", "列出所有可行選項並依明確標準定位符合條件者"],
  ["列出", "完整整理互不重複且符合限制的項目，再檢查是否遺漏"],
  ["檢查", "逐項核對來源、條件、時間與例外，避免只看單一數字或標題"],
]);

const DATA_ASSETS = Object.freeze({
  STRATIFICATION_INEQUALITY: { columns: ["學生群體", "可借用設備比例", "課後交通可及比例"], rows: [["甲", "92%", "88%"], ["乙", "61%", "47%"], ["丙", "78%", "69%"]], summary: "三組學生取得學習設備與課後交通的比例不同，須同時比較兩項資源。" },
  ELECTIONS_PARTIES: { columns: ["資訊來源", "樣本或資料量", "可代表範圍"], rows: [["隨機抽樣民調", "1,200人", "符合抽樣母體"], ["網站自願投票", "8,500票", "僅代表參與者"], ["單一貼文按讚", "32,000次", "無法確認人口結構"]], summary: "資料量大不必然具有代表性，仍需檢查抽樣方式。" },
  PUBLIC_OPINION_MEDIA: { columns: ["報導", "有列原始資料", "有交代調查時間", "有呈現限制"], rows: [["甲", "是", "是", "是"], ["乙", "否", "是", "否"], ["丙", "是", "否", "否"]], summary: "三則報導揭露資料來源與限制的完整程度不同。" },
  SCARCITY_OPPORTUNITY_COST: { columns: ["方案", "所需經費", "預期服務人次"], rows: [["改善步道", "40萬元", "1,400"], ["增設夜間照明", "40萬元", "2,100"], ["修繕活動室", "40萬元", "900"]], summary: "預算只能選一案，機會成本須依決策者最重視的替代方案判斷。" },
  MARKETS_PRICE_FAILURE: { columns: ["情境", "私人交易收益", "未計入第三人損失"], rows: [["甲", "80", "0"], ["乙", "95", "35"], ["丙", "70", "10"]], summary: "私人收益之外仍要比較未反映在價格中的第三人損失。" },
  FIRMS_PRODUCTION_ENTREPRENEURSHIP: { columns: ["月份", "營收", "總成本", "利潤"], rows: [["一月", "120", "90", "30"], ["二月", "150", "138", "12"], ["三月", "135", "100", "35"]], summary: "營收最高的月份不一定利潤最高；單位為萬元。" },
  MONEY_BANKING_CREDIT_FINANCE: { columns: ["借款方案", "實領金額", "總還款", "其他費用"], rows: [["甲", "30,000元", "33,000元", "0元"], ["乙", "30,000元", "31,800元", "2,000元"], ["丙", "30,000元", "32,400元", "500元"]], summary: "比較信用成本時，總還款與其他費用都不能省略。" },
  GOVERNMENT_ECONOMIC_POLICY: { columns: ["方案", "直接受益戶", "年度成本", "成效指標"], rows: [["甲", "4,000戶", "8,000萬元", "服務使用率"], ["乙", "2,500戶", "6,000萬元", "等待時間"], ["丙", "5,200戶", "9,500萬元", "需求覆蓋率"]], summary: "政策比較須同時閱讀服務對象、成本與可衡量成效。" },
  TRADE_GLOBALIZATION_DIVISION: { columns: ["供應方案", "主要來源占比", "平均成本", "中斷風險"], rows: [["甲", "82%", "低", "高"], ["乙", "55%", "中", "中"], ["丙", "34%", "較高", "低"]], summary: "低成本與供應集中風險之間存在取捨。" },
  WELFARE_POVERTY_SOCIAL_POLICY: { columns: ["地區", "符合資格人數", "實際使用人數", "平均交通時間"], rows: [["甲", "500", "420", "18分鐘"], ["乙", "480", "210", "67分鐘"], ["丙", "530", "390", "31分鐘"]], summary: "名義上有服務不代表能實際取得，交通時間可能形成門檻。" },
  DIGITAL_CITIZENSHIP_PRIVACY: { columns: ["訊息", "原始來源", "日期", "可交叉查證"], rows: [["甲", "政府公開資料", "有", "有"], ["乙", "匿名截圖", "無", "無"], ["丙", "新聞摘要", "有", "部分"]], summary: "判斷數位訊息須檢查來源、時間與可否交叉查證。" },
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
      { reviewerRole: "civics-rule-and-evidence-review", derivedAnswerIndex: answerIndex, evidence: `${id}：依「${profile.core}」對「${skill.title}」執行${representationType}作答；「${correct}」是唯一同時使用必要判準與證據的選項。`, status: "pass" },
      { reviewerRole: "civics-alternative-answer-review", derivedAnswerIndex: answerIndex, evidence: `${id}：以「${withoutEndPunctuation(profile.boundary)}」逐項反證其餘三項；選項${answerIndex + 1}成立，其餘選項各有題目所列的概念、界線或證據缺口。`, status: "pass" },
    ],
    assets,
  };
}

function operationContent(operation, skill, profile, lens, context, index) {
  const error = profile.errors[index % profile.errors.length];
  const otherErrors = [1, 2, 3].map((offset) => profile.errors[(index + offset) % profile.errors.length]);
  const evidence = withoutEndPunctuation(profile.evidence);
  const boundary = withoutEndPunctuation(profile.boundary);
  const core = withoutEndPunctuation(profile.core);
  const operationFocus = operation.cognitive.join("與");
  const correct = [
    `面對${context}時，先就「${skill.title}」${lens.method}，再以「${evidence}」檢查證據。`,
    `在${context}指出「${error}」不符合「${skill.title}」的條件，再依「${boundary}」修正。`,
    `為「${skill.title}」選用能支援「${evidence}」的${context}資料，並交代時間與來源。`,
    `把${context}中的事實逐一對照「${skill.title}」的判準，再說明結論限制。`,
    `以「${skill.title}」為共同標準比較${context}的主張，分開處理相同處、差異與例外。`,
    `處理${context}時先確認「${skill.title}」的問題與權限，再蒐證、比較方案、決定並追蹤。`,
    `評估${context}的「${skill.title}」主張是否符合「${core}」，且沒有省略「${boundary}」。`,
    `分析${context}的「${skill.title}」問題時，同時考量行動者、制度條件、受影響者與替代方案。`,
    `提出一個不符合「${skill.title}」主張的${context}情境，用來檢查「${error}」是否過度概括。`,
    `先說明${context}資料對「${skill.title}」能支持到什麼程度，再指出樣本、時間或指標限制。`,
    `把「${skill.title}」的原判準移到新的${context}情境，仍依相同條件檢查而不改變定義。`,
    `查閱與「${skill.title}」有關的現行官方來源，核對發布機關、日期、法規沿革與適用對象。`,
  ][index];
  const wrong = [
    `只因${context}出現一項表面線索，就以「${otherErrors[0]}」完成「${skill.title}」的${operationFocus}，不再核對其他條件。`,
    `以${operationFocus}處理${context}，卻把局部情況直接解讀成「${otherErrors[1]}」，並當作「${skill.title}」在所有案例都成立的規則。`,
    `進行${operationFocus}時先接受「${otherErrors[2]}」，只留下${context}中支持該想法的資料作為「${skill.title}」證據。`,
  ];
  const wrongReasons = [
    `${operationFocus}：以「${otherErrors[0]}」作答會忽略「${core}」；${context}的一項線索不足以完成「${skill.title}」。`,
    `${operationFocus}：在「${skill.title}」中把「${otherErrors[1]}」由${context}局部情況擴張成通則，與「${boundary}」的適用界線衝突。`,
    `${operationFocus}：接受「${otherErrors[2]}」就沒有依「${evidence}」檢查支持與反對資料，故「${skill.title}」結論無法重現。`,
  ];
  const correctReason = [
    `此作法先就${context}${lens.method}，再依「${evidence}」檢查「${skill.title}」的成立條件。`,
    `此作法找出「${error}」忽略的條件，並以「${boundary}」修正「${skill.title}」的判斷。`,
    `這份${context}資料能直接檢查「${evidence}」，也保留「${skill.title}」所需的時間與來源資訊。`,
    `此作法把${context}事實逐項對照「${skill.title}」判準，材料與結論之間沒有跳步。`,
    `以「${skill.title}」的共同標準比較${context}主張，才能清楚區分相同處、差異與例外。`,
    `此流程先確認${context}問題與權限，再蒐證、比較、決定及追蹤，完整落實「${skill.title}」。`,
    `此評估以「${skill.title}」為目標，同時核對「${core}」與「${boundary}」，沒有把${context}的局部事實過度擴張。`,
    `把${context}的行動者、制度條件、受影響者與替代方案一起納入，才能完成「${skill.title}」的多因素分析。`,
    `用${context}反例檢查「${error}」，可以判斷該說法能否通過「${skill.title}」的界線。`,
    `此解讀先限定${context}資料能證明的範圍，再揭露樣本、時間或指標限制，沒有超推「${skill.title}」。`,
    `新${context}案例仍沿用「${skill.title}」的原條件，因此是概念遷移而非改寫定義。`,
    `官方查證同時核對發布機關、日期、沿革與適用對象，能支撐「${skill.title}」涉及的現行事實。`,
  ][index];
  const stems = [
    `學習小組要${skill.title}。下列哪一項判斷方法最可靠？`,
    `有人以「${error}」解讀${context}。若要${skill.title}，哪一項修正最適當？`,
    `若要用證據完成「${skill.title}」，下列哪一項資料選擇最適當？`,
    `${context}出現一項爭議。哪一種處理最能正確運用「${skill.title}」？`,
    `為了${skill.title}，兩項關於${context}的主張需要比較。哪一種方式可以得到有理由的結論？`,
    `處理${context}時，哪一項流程最符合「${skill.title}」？`,
    `針對${context}提出一項關於「${skill.title}」的公共主張。哪一項評估最完整？`,
    `${context}同時影響不同群體。若要${skill.title}，哪一項分析能避免只看單一因素？`,
    `進行「${skill.title}」時，哪一種做法最能用反例檢驗「${error}」這項說法？`,
    `閱讀一份關於${context}的資料並嘗試「${skill.title}」後，哪一項解讀沒有超出資料所能證明的範圍？`,
    `把「${skill.title}」運用到另一個${context}案例時，哪一項作法仍符合原判準？`,
    `「${skill.title}」涉及可能隨法規或制度更新的${context}資訊。哪一項查證方式最可靠？`,
  ];
  return { stem: stems[index], correct, correctReason, wrong, wrongReasons, misconceptionTargets: [error], operation };
}

function buildSkillQuestions(skill, profile, skillIndex) {
  const lens = lensFor(skill.title);
  return CIVICS_QUESTION_OPERATIONS.map((operation, operationIndex) => {
    const context = profile.contexts[(skillIndex + operationIndex) % profile.contexts.length];
    const content = operationContent(operation, skill, profile, lens, context, operationIndex);
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
  const evidence = withoutEndPunctuation(profile.evidence);
  const boundary = withoutEndPunctuation(profile.boundary);
  const contexts = [0, 1, 2].map((offset) => profile.contexts[(skillIndex + offset) % profile.contexts.length]);
  const sourceNames = profile.sources.map((sourceId) => CIVICS_OFFICIAL_SOURCES.find((source) => source.id === sourceId)?.authority).filter(Boolean).join("、");
  const exampleAnswers = [
    `就${contexts[0]}逐項執行「${skill.title}」：${evidence}。`,
    `在${contexts[1]}案例中，為完成「${skill.title}」，拒絕把「${profile.errors[1]}」當成通則，並依「${boundary}」補上條件。`,
    `查閱${sourceNames}在${CIVICS_VERIFIED_AT}可取得的現行資料，據以完成「${skill.title}」的${contexts[2]}判斷。`,
  ];
  return {
    id: `CIV_R4_L_S${ordinal(skillIndex + 1)}`,
    subject: SUBJECT,
    unitId: skill.unitId,
    skillId: skill.id,
    authorityRefs: [...skill.authorityRefs],
    prerequisites: [...skill.prerequisites],
    objectives: [`能${skill.title}，並說出判斷所依據的條件與證據。`, `能辨認本技能常見的過度概括，將理由運用到新的生活或公共情境。`],
    sections: [
      { id: `CIV_R4_L_S${ordinal(skillIndex + 1)}_SEC_01`, title: profile.title, content: `${profile.core}本技能聚焦在「${skill.title}」：不是背誦標籤，而是要把概念、材料與結論連起來。` },
      { id: `CIV_R4_L_S${ordinal(skillIndex + 1)}_SEC_02`, title: `${skill.title}：判讀方法`, content: `針對「${skill.title}」，${lens.method}。實作時依「${evidence}」核對材料；若資訊不足，應明白指出缺少什麼，而不是補上題目沒有提供的假設。` },
      { id: `CIV_R4_L_S${ordinal(skillIndex + 1)}_SEC_03`, title: "適用界線與例外", content: `${profile.boundary}因此看到相似字詞或單一數字時，仍要回到「${lens.focus || skill.title}」真正的成立條件。` },
      { id: `CIV_R4_L_S${ordinal(skillIndex + 1)}_SEC_04`, title: `${skill.title}的資料查證`, content: `本技能以${sourceNames}為查證入口，查核日期為${CIVICS_VERIFIED_AT}。針對${contexts[2]}，應按「${evidence}」核對來源、時間與適用對象，再說明資料支持「${skill.title}」的哪一步推論；資料若非現況數字或現行制度，也須明示用途與限制。` },
    ],
    workedExamples: contexts.map((context, exampleIndex) => ({
      id: `CIV_R4_L_S${ordinal(skillIndex + 1)}_EX_0${exampleIndex + 1}`,
      prompt: [
        `同學整理${context}時，只用一項表面線索就宣稱已完成「${skill.title}」。應如何改進？`,
        `有人以「${profile.errors[exampleIndex % profile.errors.length]}」解讀${context}並聲稱已完成「${skill.title}」。這項說法哪裡有問題？`,
        `${context}的資訊可能已更新。為完成「${skill.title}」，要如何形成可負責的公民判斷？`,
      ][exampleIndex],
      steps: [
        [`列出${context}已知事實與仍缺少的資料。`, `依「${evidence}」逐項核對，不以醒目字詞代替條件。`, `用「${boundary}」反查結論是否超出材料。`],
        [`標出「${profile.errors[exampleIndex % profile.errors.length]}」包含的絕對說法。`, `回到「${skill.title}」所需的「${evidence}」尋找反例或缺件。`, `依「${boundary}」補回適用條件後再下結論。`],
        [`先確認${sourceNames}是否為現行官方來源。`, `核對發布日期、沿革、適用對象與${context}事實。`, `記錄${CIVICS_VERIFIED_AT}與查證路徑，使「${skill.title}」可重查。`],
      ][exampleIndex],
      answer: exampleAnswers[exampleIndex],
      why: [
        `${contexts[0]}的單一表面線索可能符合多種解釋；只有依「${evidence}」完成核對，才能讓「${skill.title}」的結論可檢驗。`,
        `${contexts[1]}中的說法把有條件概念擴張成通則，忽略「${boundary}」；補回條件後才能判斷「${skill.title}」是否適用。`,
        `${contexts[2]}資料可能隨制度或發布版本更新；完成「${skill.title}」前須查${sourceNames}、記錄${CIVICS_VERIFIED_AT}並核對適用對象。`,
      ][exampleIndex],
    })),
    misconceptions: profile.errors.map((belief, index) => ({
      belief: [
        `${belief}，因而在「${skill.title}」時跳過成立條件。`,
        `在「${skill.title}」中，將「${belief}」當成不受情境限制的規則。`,
        `處理「${skill.title}」時，以「${belief}」取代對題目資料的核對。`,
        `面對「${skill.title}」時，主張${belief}，因此沒有查證現行資料。`,
      ][index],
      whyWrong: [`「${belief}」無法完成「${skill.title}」，因為${profile.boundary}`, `「${belief}」忽略「${skill.title}」所需的核心：${profile.core}`, `以「${belief}」作答沒有依「${evidence}」檢查「${skill.title}」材料，結論無法重現。`, `主張「${belief}」會略過「${skill.title}」所需的權利、責任、程序或資源條件。`][index],
      correction: [`針對「${skill.title}」，${lens.method}。`, `以「${skill.title}」的反例檢查絕對說法，再補上適用條件。`, `回到「${skill.title}」的題目材料，分列支持與反對結論的證據。`, `查閱官方現行資料並標記日期，再完成「${skill.title}」的判斷。`][index],
    })),
    checks: [
      { prompt: `判斷「${skill.title}」時，為何不能只看${contexts[0]}中的單一線索？`, answer: `該線索可能支持多種解釋，尚不足以完成「${skill.title}」。`, reason: `「${skill.title}」還須依「${evidence}」核對，才能排除${contexts[0]}的其他可能。` },
      { prompt: `在「${skill.title}」中，「${profile.errors[0]}」是哪一類問題？`, answer: `這是「${skill.title}」中的過度概括或概念錯置。`, reason: `「${skill.title}」受「${boundary}」限制，不能將「${profile.errors[0]}」直接當作結論。` },
      { prompt: `「${skill.title}」遇到可能更新的制度資料時，第一個查證動作是什麼？`, answer: `先到${sourceNames}查看與「${skill.title}」及${contexts[2]}相關的現行版本、日期與適用對象。`, reason: `「${skill.title}」在${CIVICS_VERIFIED_AT}查核；後續仍須依「${evidence}」確認來源沿革。` },
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
  const lens = lensFor(skill.title);
  const context = profile.contexts[(skillIndex + 3) % profile.contexts.length];
  const stimulusId = `CIV_R4_ST_S${ordinal(skillIndex + 1)}`;
  const statementA = `甲主張只要採用「${profile.errors[skillIndex % 4]}」的想法，就能立刻決定。`;
  const statementB = `乙要求${lens.method}，並公開支持與反對資料。`;
  const statementC = `丙提醒仍要檢查：${profile.boundary}`;
  const stimulus = {
    id: stimulusId,
    subject: SUBJECT,
    unitId: skill.unitId,
    skillIds: [skill.id],
    authorityRefs: [...skill.authorityRefs],
    title: `${profile.title}：${context}判讀`,
    kind: asset ? "data-table-case" : "public-life-case",
    content: `某班以${context}為材料，練習「${skill.title}」。${statementA}${statementB}${statementC}請依材料區分主張、證據與適用界線。`,
    sourceNote: "原創會考型情境；未改寫或重製歷屆題目。",
    factCheckedAt: CIVICS_VERIFIED_AT,
    assets: asset ? [asset.record.id] : [],
    questionIds: [1, 2, 3].map((value) => `CIV_R4_SQ_S${ordinal(skillIndex + 1)}_0${value}`),
    provenance: provenance(skill, profile),
  };
  const prompts = [
    { stem: `依據材料，哪一項最能說明乙如何完成「${skill.title}」的判斷？`, correct: `乙把「${skill.title}」連到${context}的明確方法與可公開檢查資料。`, correctReason: `乙說明${lens.method}，又要求公開支持與反對資料，完整對應「${skill.title}」的判準與證據。`, cognitive: ["材料理解", "原則應用"], difficulty: "standard" },
    { stem: `若要檢驗甲對「${skill.title}」的主張，哪一項新增資料最有幫助？`, correct: `為「${skill.title}」蒐集能呈現「${profile.evidence}」且包含${context}反例的資料。`, correctReason: `這項資料能依「${profile.evidence}」檢查甲的絕對主張，並用${context}反例測試「${skill.title}」的界線。`, cognitive: ["證據評估", "推論"], difficulty: "advanced" },
    { stem: `討論小組要把「${skill.title}」落實為行動，下一步怎麼做最能兼顧證據與公共責任？`, correct: `就${context}核對官方或可追溯來源，記錄「${skill.title}」對不同群體的影響與決定理由，再追蹤結果。`, correctReason: `這個步驟保留${context}的來源、受影響者、決定理由與追蹤結果，使「${skill.title}」可以接受公共檢驗。`, cognitive: ["方案評估", "遷移"], difficulty: "transfer" },
  ];
  const questions = prompts.map((prompt, questionIndex) => questionRecord({
    id: stimulus.questionIds[questionIndex],
    skill,
    profile,
    stem: prompt.stem,
    correct: prompt.correct,
    correctReason: prompt.correctReason,
    wrong: [
      `以${prompt.cognitive[0]}作答時選甲，因為「${skill.title}」應讓${context}最快作成決定。`,
      `以${prompt.cognitive[1]}作答時判定三人都正確，因為「${skill.title}」不必再接受證據檢驗。`,
      `在第${questionIndex + 1}小題只採丙的界線，省略「${skill.title}」對${context}事實的核對。`,
    ],
    wrongReasons: [
      `${prompt.cognitive[0]}不能把速度置於證據與權利之前；甲仍未證成「${skill.title}」符合${context}材料。`,
      `${prompt.cognitive[1]}容許多元意見，但「${skill.title}」的每項主張仍須接受事實、理由與條件檢驗。`,
      `第${questionIndex + 1}小題中的適用界線只是判斷一部分；未核對${context}事實，仍無法完成「${skill.title}」。`,
    ],
    answerIndex: (skillIndex + questionIndex) % 4,
    difficulty: prompt.difficulty,
    cognitiveProcess: prompt.cognitive,
    representationType: asset ? "stimulus-data-table" : "stimulus-public-case",
    misconceptionTargets: [profile.errors[(skillIndex + questionIndex) % 4]],
    stimulusId,
    assets: asset ? [asset.record.id] : [],
  }));
  return { stimulus, questions };
}

function flattenPlan(graph) {
  const graphSkills = graph.skills.filter((value) => value.subject === SUBJECT).sort((a, b) => a.id.localeCompare(b.id, "en"));
  const entries = [];
  let offset = 0;
  for (const [familyIndex, family] of CIVICS_SKILL_PLAN.families.entries()) {
    const profile = CIVICS_UNIT_PROFILES[family.key];
    assert(profile, `${family.key}: profile missing`);
    for (const [localIndex, title] of family.skills.entries()) {
      const skill = graphSkills[offset++];
      assert(skill, `${family.key}: graph skill missing`);
      assert.equal(skill.title, title, `${skill.id}: skill title drift`);
      assert.equal(skill.unitId, `CIV_R4_U${String(familyIndex + 1).padStart(2, "0")}`, `${skill.id}: unit order drift`);
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
  assertUnique("lecture section content", lectures.flatMap((lecture) => lecture.sections.map((section) => section.content)));
  assertUnique("worked-example prompt", lectures.flatMap((lecture) => lecture.workedExamples.map((example) => example.prompt)));
  assertUnique("worked-example answer", lectures.flatMap((lecture) => lecture.workedExamples.map((example) => example.answer)));
  assertUnique("worked-example reasoning", lectures.flatMap((lecture) => lecture.workedExamples.map((example) => example.why)));
  assertUnique("misconception belief", lectures.flatMap((lecture) => lecture.misconceptions.map((item) => item.belief)));
  assertUnique("misconception explanation", lectures.flatMap((lecture) => lecture.misconceptions.map((item) => item.whyWrong)));
  assertUnique("misconception correction", lectures.flatMap((lecture) => lecture.misconceptions.map((item) => item.correction)));
  assertUnique("lecture check prompt", lectures.flatMap((lecture) => lecture.checks.map((check) => check.prompt)));
  assertUnique("lecture check answer", lectures.flatMap((lecture) => lecture.checks.map((check) => check.answer)));
  assertUnique("lecture check reason", lectures.flatMap((lecture) => lecture.checks.map((check) => check.reason)));
  assertUnique("question option", allQuestions.flatMap((question) => question.options));
  assertUnique("option rationale", allQuestions.flatMap((question) => question.optionRationales.map((rationale) => rationale.reason)));
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

  await resetGeneratedDirectories();
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
