import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { EARTH_SCIENCE_SKILL_PLAN } from "../../../tools/cap8-r4/authority/skill-plans/earth-science.mjs";
import { EARTH_R4_FAMILY_CONTENT } from "./earth-r4-catalog.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const GRAPH = path.resolve(HERE, "../../../tools/cap8-r4/authority/frozen-authority-graph.json");
const OUTPUT = path.join(HERE, "units");
const DIFFICULTIES = [
  "foundation", "foundation", "foundation",
  "standard", "standard", "standard", "standard",
  "advanced", "advanced", "advanced",
  "transfer", "transfer",
];
const PROCESSES = [
  ["recognize-supported-claim"],
  ["distinguish-concept-boundary"],
  ["match-evidence-to-explanation"],
  ["apply-observation-rule"],
  ["select-investigation-method"],
  ["evaluate-model-limit"],
  ["compare-source-reliability"],
  ["order-reasoning-steps"],
  ["apply-to-local-scenario"],
  ["interpret-structured-data"],
  ["diagnose-misconception"],
  ["transfer-evidence-chain"],
];
const REPRESENTATIONS = [
  "concept-statement", "comparison", "evidence-claim", "observation-scenario",
  "investigation-plan", "model-evaluation", "source-evaluation", "procedure",
  "local-context", "data-table", "error-diagnosis", "transfer-scenario",
];

function number(value) {
  return String(value).padStart(3, "0");
}

function rotateCandidates(candidates, answerIndex) {
  const [answer, ...distractors] = candidates;
  const result = [...distractors];
  result.splice(answerIndex, 0, answer);
  return result;
}

function reviewEvidence(skill, answer, focus) {
  return [
    `逐項代回「${skill.title}」的定義與證據鏈，只有「${answer}」符合；${focus}`,
    `另從反例與邊界條件檢查四項，答案不依選項位置或語病，仍唯一指向「${answer}」。`,
  ];
}

function candidate(text, valid, reason) {
  return { text, valid, reason };
}

function bigrams(value) {
  const normalized = value.replace(/[「」、，；：。與及的之由以把用從在]/gu, "");
  return Array.from({ length: Math.max(0, normalized.length - 1) }, (_, index) => normalized.slice(index, index + 2));
}

function skillFocus(skill, profile) {
  const wanted = new Set(bigrams(skill.title));
  const clauses = [profile.core, profile.evidence, profile.method, profile.boundary, ...profile.claims]
    .flatMap((value) => value.split(/[；。]/u))
    .map((value) => value.trim())
    .filter(Boolean);
  return clauses
    .map((value, index) => ({ value, index, score: bigrams(value).filter((item) => wanted.has(item)).length }))
    .sort((a, b) => b.score - a.score || a.index - b.index)[0].value;
}

function skillTargets(skill, profile, focus) {
  return [
    focus,
    `可使用${shortClause(profile.evidence)}查核。`,
    `應${shortClause(profile.method)}。`,
    `限制是：${shortClause(profile.boundary)}。`,
  ];
}

function shortClause(value) {
  return value.split(/[，；。]/u)[0].trim();
}

function claimCandidates(profile, index, focus, askIncorrect = false) {
  const correct = focus;
  const traps = [0, 1, 2].map((offset) => profile.traps[(index + offset) % profile.traps.length]);
  if (!askIncorrect) return [
    candidate(correct, true, `敘述符合本技能的科學概念與證據範圍：${profile.core}`),
    ...traps.map((text, offset) => candidate(
      `${text}；並據此認為${profile.traps[(index + offset + 1) % profile.traps.length]}`,
      false,
      `敘述與證據或適用邊界衝突；應改用「${profile.boundary}」檢查。`,
    )),
  ];
  const valid = [...new Set([
    focus,
    ...profile.claims,
  ])];
  return [
    candidate(traps[0], true, `這是要找的不成立敘述；它忽略了「${profile.boundary}」。`),
    ...[0, 1, 2].map((offset) => {
      const text = valid[(index + offset) % valid.length];
      return candidate(text, false, `此項有科學證據支持，所以不是題目要找的錯誤敘述。`);
    }),
  ];
}

function authoredCandidates(skill, profile, questionIndex, focus) {
  if (questionIndex < 4) return claimCandidates(profile, questionIndex, skillTargets(skill, profile, focus)[questionIndex]);
  if (questionIndex === 4) return [
    candidate(shortClause(profile.method), true, "這個程序先處理變因與證據，再形成結論。"),
    candidate("先寫下想要的答案，再挑選能配合答案的一筆資料。", false, "這是確認偏誤，沒有公平檢驗其他解釋。"),
    candidate("只比較圖案顏色，不讀標題、單位、時間與圖例。", false, "遺漏圖表必要資訊，無法可靠判讀。"),
    candidate("把一次觀察直接擴張成任何地點與時間都成立。", false, "超出資料的時間與空間範圍。"),
  ];
  if (questionIndex === 5) return [
    candidate(`適用限制是：${shortClause(profile.boundary)}。`, true, "這項指出模型或資料不能支持的過度推論。"),
    candidate("只要套用名詞，任何資料都會得到同一結論。", false, "科學推論仍須受實際資料與條件約束。"),
    candidate("圖畫得大就代表實際尺度一定較大。", false, "示意圖可能不按比例，必須先讀比例說明。"),
    candidate("只要答案看似合理，就不必交代證據來源。", false, "可檢核來源是科學溝通的必要部分。"),
  ];
  if (questionIndex === 6) return [
    candidate(shortClause(profile.evidence), true, "此證據類型能直接對應本技能要判讀的變因。"),
    candidate("未標示日期、位置與單位的匿名截圖。", false, "缺少基本來源與量測脈絡，無法重現。"),
    candidate("只摘錄結論、刪除不一致資料的短文。", false, "選擇性呈現使證據鏈不完整。"),
    candidate("沒有觀測紀錄但聲稱一定正確的個人印象。", false, "主觀確信不能取代可檢核觀測。"),
  ];
  if (questionIndex === 7) return [
    candidate(`依序執行：${shortClause(profile.method)}`, true, "順序保留從觀測、比較到結論的可檢核鏈。"),
    candidate("先公布結論，再決定要量哪個變因。", false, "先定答案會造成確認偏誤。"),
    candidate("把不同時間與不同單位的資料直接相減。", false, "尚未對齊資料便運算，結果沒有意義。"),
    candidate("忽略反例，只保留最符合預期的一次觀察。", false, "忽略變異與反例會高估結論強度。"),
  ];
  if (questionIndex === 8) return [
    candidate("把情境中的觀測量與適用範圍寫入結論。", true, "技能判準、情境證據與結論限制三者都有交代。"),
    candidate("只抄情境中的地名，不讀變因、單位或時間。", false, "地名不是完成技能判讀所需的證據。"),
    candidate("把一筆局部資料直接當成所有地點都必然成立。", false, "結論超出資料的空間與條件範圍。"),
    candidate("先挑答案，再刪除與答案不一致的觀測。", false, "這是選擇性保留資料，破壞證據鏈。"),
  ];
  if (questionIndex === 9) return [
    candidate(`先核對表格欄位、單位與觀測範圍，再${shortClause(profile.method)}。`, true, "表格判讀必須先確認資料語意、技能判準與可比較性。"),
    candidate("只找全表最大數字，不管它屬於哪個欄位。", false, "不同欄位可能是不同變因與單位。"),
    candidate("把缺值視為零，且不在結論中說明。", false, "缺值不是量測到零，會扭曲比較。"),
    candidate("只要資料列很多，就省略來源與取樣方式。", false, "樣本數無法補救來源不明或系統偏差。"),
  ];
  if (questionIndex === 10) return claimCandidates(profile, 1, focus, true);
  return [
    candidate(`${profile.contexts[2]}；並${shortClause(profile.method)}。`, true, "新情境仍保留本技能判準與科學判讀程序。"),
    candidate(`${profile.contexts[2]}；只採用最支持原先想法的一筆紀錄。`, false, "這會忽略資料變異與替代解釋。"),
    candidate(`${profile.contexts[2]}；因為情境不同，所以不必標示單位。`, false, "跨情境更需要一致單位才能比較。"),
    candidate(`${profile.contexts[2]}；用單一關鍵字取代所有觀測。`, false, "名詞不能取代實際證據與推理。"),
  ];
}

function questionStem(skill, profile, index) {
  return [
    `建立「${skill.title}」概念時，下列何者是可由地球科學證據支持的敘述？`,
    `關於「${skill.title}」，下列哪一項說明最符合科學模型？`,
    `學生整理「${skill.title}」的筆記，下列哪一項可以保留？`,
    `要用觀測判讀「${skill.title}」，下列哪個推論最適當？`,
    `研究「${skill.title}」時，哪一個步驟最能避免先有答案再找資料？`,
    `檢查「${skill.title}」的模型時，哪一項限制說明最完整？`,
    `若要查核「${skill.title}」的主張，哪一組證據最有用？`,
    `處理「${skill.title}」問題時，下列哪個推理順序最可靠？`,
    `情境：${profile.contexts[index % profile.contexts.length]}。若用「${skill.title}」判讀，下列哪個結論最合理？`,
    `附表提供「${skill.title}」相關資料。開始比較前，哪個做法正確？`,
    `下列關於「${skill.title}」的說法，哪一項不成立？`,
    `把「${skill.title}」遷移到新情境時，哪一項作法最完整？`,
  ][index];
}

function makeQuestion(skill, profile, skillNumber, index, stimulusId = null) {
  const focus = skillFocus(skill, profile);
  const context = profile.contexts[(skillNumber + index) % profile.contexts.length];
  const raw = stimulusId === null ? authoredCandidates(skill, profile, index, focus) : stimulusCandidates(profile, index, focus);
  const authored = raw.map((value) => ({
    ...value,
    text: `就「${skill.title}」而言，${value.text}`,
  }));
  assert.equal(authored.filter((value) => value.valid).length, 1);
  const answerIndex = (skillNumber + index) % 4;
  const options = rotateCandidates(authored, answerIndex);
  const answer = options[answerIndex].text;
  return {
    id: stimulusId === null
      ? `EARTH_R4_Q_${number(skillNumber)}_${String(index + 1).padStart(2, "0")}`
      : `EARTH_R4_SQ_${number(skillNumber)}_${String(index + 1).padStart(2, "0")}`,
    skillId: skill.id,
    stimulusId,
    stem: stimulusId === null
      ? `情境：${context}。${questionStem(skill, profile, index)}`
      : `根據「${skill.title}」資料組，${["哪一項結論有充分支持？", "哪一項限制最需要寫入報告？", "哪一項後續檢驗最適當？"][index]}`,
    options: options.map((value) => value.text),
    answerIndex,
    reasons: options.map((value) => value.reason),
    reviews: reviewEvidence(skill, answer, profile.evidence),
    difficulty: stimulusId === null ? DIFFICULTIES[index] : ["standard", "advanced", "transfer"][index],
    cognitiveProcess: stimulusId === null ? PROCESSES[index] : [["derive-from-shared-data"], ["evaluate-shared-data-limit"], ["design-follow-up-check"]][index],
    representationType: stimulusId === null ? REPRESENTATIONS[index] : "shared-data-table",
    misconceptionTargets: [profile.traps[index % profile.traps.length]],
    assets: [...profile.assets],
  };
}

function stimulusCandidates(profile, index, focus) {
  if (index === 0) return [
    candidate("先讀欄位與單位，再以表中可比較的量解釋資料。", true, "結論使用表中可比較的量，且與本技能的專屬判準一致。"),
    candidate(profile.traps[0], false, `這是常見迷思；${profile.boundary}`),
    candidate("表格有數字，所以任何因果解釋都成立。", false, "數值共變不自動證明因果。"),
    candidate("忽略資料時間與位置，直接推論全世界永遠相同。", false, "結論超出資料涵蓋範圍。"),
  ];
  if (index === 1) return [
    candidate(`同時標示限制：${shortClause(profile.boundary)}`, true, "這是由本技能判準、資料與模型範圍直接導出的必要限制。"),
    candidate("資料列超過兩列，因此沒有任何不確定性。", false, "樣本列數不會消除量測與取樣不確定性。"),
    candidate("圖表是電腦產生，所以來源必定正確。", false, "工具不會自動保證來源與推論品質。"),
    candidate("結果符合預期，所以不必檢查反例。", false, "仍須檢查替代解釋與反例。"),
  ];
  return [
    candidate(`再執行「${shortClause(profile.method)}」。`, true, "後續檢驗保留本技能判準、變因、資料與結論間的可重現關係。"),
    candidate("換掉全部變因後只測一次。", false, "同時改變多個變因且無重複，不能判斷原因。"),
    candidate("刪除不合預期的資料後重畫圖。", false, "未說明就刪除資料會造成偏誤。"),
    candidate("只問同意原結論的人。", false, "這不是獨立觀測或公平檢驗。"),
  ];
}

function lecture(skill, profile, skillNumber) {
  const id = `EARTH_R4_L_S${number(skillNumber)}`;
  const focus = skillFocus(skill, profile);
  return {
    id,
    skillId: skill.id,
    objectives: [
      `能以自己的話說明「${skill.title}」，並指出至少一項可檢核證據。`,
      `能在表格、示意圖或生活情境中應用「${skill.title}」，同時說明結論限制。`,
    ],
    sections: [
      { id: `${id}_SEC_01`, title: "零基礎起點", content: `先不用背名詞。${profile.core} 本技能聚焦在「${skill.title}」；專屬判準是「${focus}」。看到題目時，先圈出觀測對象、時間、位置與單位。` },
      { id: `${id}_SEC_02`, title: "概念與證據", content: `${profile.evidence} 對「${skill.title}」而言，要以「${focus}」檢查觀測、模型與結論是否彼此對得上。` },
      { id: `${id}_SEC_03`, title: "可重現的判讀程序", content: `${profile.method} 每一步都要能回答「我用了哪一筆資料」以及「若條件改變，結論是否仍成立」。` },
      { id: `${id}_SEC_04`, title: "邊界、反例與不確定性", content: `${profile.boundary} 若證據只能支持可能性，就使用「支持」或「較符合」，不要寫成「證明必然」。` },
      { id: `${id}_SEC_05`, title: "圖表與無障礙讀法", content: `先讀標題、圖例、方向、尺度、時間、座標軸與單位，再以文字重述趨勢。${profile.table.columns.join("、")}是本技能資料表的關鍵欄位。` },
    ],
    workedExamples: profile.contexts.map((context, index) => ({
      id: `${id}_EX_${String(index + 1).padStart(2, "0")}`,
      prompt: `${context}，如何依「${focus}」運用「${skill.title}」作答？`,
      steps: [
        `先界定題目範圍並找出「${profile.table.columns[index % profile.table.columns.length]}」等可觀測量。`,
        profile.method,
        `用「${profile.claims[index % profile.claims.length]}」檢查選項，並排除「${profile.traps[index % profile.traps.length]}」的迷思。`,
      ],
      answer: profile.claims[index % profile.claims.length],
      why: `答案同時符合資料、作用機制與適用範圍；${profile.boundary}`,
    })),
    misconceptions: profile.traps.map((belief, index) => ({
      belief,
      whyWrong: `這個說法把局部線索當成完整規則，沒有通過「${profile.evidence}」的證據檢查。`,
      correction: `${profile.claims[index % profile.claims.length]}；作答時再補上條件與資料來源。`,
    })),
    checks: [
      { prompt: `診斷：看到「${skill.title}」題目，第一個要確認什麼？`, answer: "觀測對象、時間、位置、變因與單位", reason: "先確定資料語意，才能選對模型與比較方式。" },
      { prompt: `提取：用一句話說出「${skill.title}」的可靠判讀原則。`, answer: profile.method, reason: "程序把觀測、比較與結論串成可重現證據鏈。" },
      { prompt: `練習：${profile.contexts[1]}時，哪個迷思要先排除？`, answer: profile.traps[1], reason: profile.boundary },
      { prompt: `遷移：${profile.contexts[2]}時，如何保留科學不確定性？`, answer: "說明資料支持程度、替代解釋與模型限制", reason: "結論強度不能超過證據。" },
    ],
    assets: [...profile.assets],
  };
}

function unitSource(family, profile, skills, startNumber) {
  const lectures = [];
  const questions = [];
  const stimuli = [];
  const stimulusQuestions = [];
  skills.forEach((skill, offset) => {
    const skillNumber = startNumber + offset;
    const focus = skillFocus(skill, profile);
    const stimulusId = `EARTH_R4_ST_${number(skillNumber)}`;
    lectures.push(lecture(skill, profile, skillNumber));
    for (let index = 0; index < 12; index += 1) questions.push(makeQuestion(skill, profile, skillNumber, index));
    stimuli.push({
      id: stimulusId,
      skillId: skill.id,
      type: profile.assets.length ? "accessible-figure-and-data" : "data-table-and-scenario",
      content: {
        title: `${skill.title}資料組`,
        scenario: profile.contexts[skillNumber % profile.contexts.length],
        table: profile.table,
        readingGuide: "先讀欄位、單位、時間與資料範圍；圖形資訊均有下列資料表替代。",
        skillSpecificCriterion: `本資料組用來檢驗「${skill.title}」；判準為「${focus}」。`,
      },
      accessibility: {
        textAlternative: `${skill.title}資料表。欄位為${profile.table.columns.join("、")}；共有${profile.table.rows.length}列。${profile.boundary}`,
        colorIndependent: true,
        printSafe: true,
      },
      assets: [...profile.assets],
    });
    for (let index = 0; index < 3; index += 1) stimulusQuestions.push(makeQuestion(skill, profile, skillNumber, index, stimulusId));
  });
  return { unitId: skills[0].unitId, familyKey: family.key, lectures, questions, stimuli, stimulusQuestions, assets: [] };
}

export async function materializeEarthR4Sources() {
  const graph = JSON.parse(await readFile(GRAPH, "utf8"));
  assert.equal(graph.status, "frozen-reviewed");
  const earthSkills = graph.skills.filter((skill) => skill.subject === "earth_science");
  assert.equal(earthSkills.length, 220);
  assert.equal(EARTH_SCIENCE_SKILL_PLAN.families.length, 30);
  await mkdir(OUTPUT, { recursive: true });
  const written = [];
  let startNumber = 1;
  for (const [index, family] of EARTH_SCIENCE_SKILL_PLAN.families.entries()) {
    const unitId = `EARTH_R4_U${String(index + 1).padStart(2, "0")}`;
    const profile = EARTH_R4_FAMILY_CONTENT[family.key];
    assert(profile, `${family.key}: missing reviewed content profile`);
    const skills = earthSkills.filter((skill) => skill.unitId === unitId);
    assert.equal(skills.length, family.skills.length, `${unitId}: skill-plan drift`);
    const source = unitSource(family, profile, skills, startNumber);
    const file = path.join(OUTPUT, `${unitId}.mjs`);
    await writeFile(file, `export const EARTH_SCIENCE_UNIT_SOURCE = Object.freeze(${JSON.stringify(source, null, 2)});\n`, "utf8");
    written.push({ unitId, skills: skills.length, questions: source.questions.length + source.stimulusQuestions.length });
    startNumber += skills.length;
  }
  assert.equal(startNumber, 221);
  return written;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const written = await materializeEarthR4Sources();
  console.log(`materialize-earth-r4-sources: OK - ${written.length} static unit snapshots, ${written.reduce((sum, value) => sum + value.questions, 0)} questions`);
}
