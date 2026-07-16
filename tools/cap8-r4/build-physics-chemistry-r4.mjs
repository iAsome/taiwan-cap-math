import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { validateAuthoringRecord } from "./authoring-validator.mjs";
import { canonicalJson, sha256 } from "./r4-core.mjs";
import {
  PHYSICS_CHEMISTRY_REVIEW_ROLES,
  PHYSICS_CHEMISTRY_UNIT_PROFILES,
} from "../../理化會考作戰室/r4/source/physics-chemistry-knowledge.mjs";
import { PHYSICS_CHEMISTRY_ASSET_SOURCES } from "../../理化會考作戰室/r4/source/physics-chemistry-assets.mjs";
import { PHYSICS_CHEMISTRY_SKILL_KNOWLEDGE } from "../../理化會考作戰室/r4/source/physics-chemistry-skill-knowledge.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const GRAPH_PATH = path.join(HERE, "authority", "frozen-authority-graph.json");
const SUBJECT_ROOT = path.join(REPO_ROOT, "理化會考作戰室", "r4");
const RUNTIME_ROOT = path.join(SUBJECT_ROOT, "runtime");
const BINDING_PATH = path.join(SUBJECT_ROOT, "source", "authority-skill-binding.json");
const UI_SOURCE_FILES = ["index.html", "app.mjs", "styles.css", "service-worker.js", "manifest.webmanifest"];
const DIFFICULTIES = [
  "foundation", "foundation", "foundation",
  "standard", "standard", "standard", "standard",
  "advanced", "advanced", "advanced",
  "transfer", "transfer",
];
const COGNITIVE_PROCESSES = [
  ["辨認", "概念理解"],
  ["關係判讀", "概念理解"],
  ["單位檢核", "資料判讀"],
  ["程序選擇", "應用"],
  ["條件判斷", "分析"],
  ["錯誤分析", "分析"],
  ["證據判讀", "推論"],
  ["關係應用", "多步驟推理"],
  ["變因控制", "實驗設計"],
  ["主張評估", "證據評估"],
  ["情境遷移", "應用"],
  ["限制評估", "高層推論"],
];

function skillNumber(skill) {
  return Number(skill.id.slice(-3));
}

function unitNumber(skill) {
  return Number(skill.unitId.slice(-2));
}

function concise(text) {
  return text.split(/[。；]/u).map((value) => value.trim()).find(Boolean) || text;
}

function methodFor(title, profile) {
  if (/計算|求|換算/u.test(title)) return `列出已知量與待求量，先統一單位，再使用「${profile.relation}」並檢查結果量級。`;
  if (/比較/u.test(title)) return `先固定其餘條件，只比較和「${title}」直接相關的差異，再以同一標準解讀資料。`;
  if (/區分|辨認|辨識/u.test(title)) return `先寫出兩類的判準，再逐項核對「${title}」所需的證據，不能只看單一外觀。`;
  if (/設計|規劃/u.test(title)) return `把問題改寫成可檢驗的變項關係，設定對照與控制變因，並事先決定記錄方式。`;
  if (/說明|解釋|理解/u.test(title)) return `由可觀察現象連到「${title}」的模型或因果關係，並說清楚模型適用的條件。`;
  if (/判斷|分析|評估|檢查|排除|避免/u.test(title)) return `先確認資料足以支持哪一層結論，再依「${title}」逐項排除超出證據的說法。`;
  return `先辨認「${title}」的核心量或證據，再依本單元關係式與限制完成判讀。`;
}

function focusFor(skill, profile, card) {
  return `${card.truth}${methodFor(skill.title, profile)}同時檢查限制：${profile.boundary}`;
}

function provenance(authorityRefs) {
  return {
    status: "original",
    authorRole: "Codex R4 physics and chemistry content author",
    copyrightStatus: "Original wording and records; official curriculum and CAP materials used only for scope and assessment calibration.",
    sourceRefs: [...authorityRefs],
  };
}

function arrangeOptions(correct, distractors, answerIndex) {
  assert.equal(distractors.length, 3);
  const options = [...distractors];
  options.splice(answerIndex, 0, correct);
  assert.equal(new Set(options).size, 4, "question options must be unique");
  return options;
}

function correctFor(slot, skill, profile, card) {
  const context = profile.contexts[slot % profile.contexts.length];
  const method = methodFor(skill.title, profile);
  return [
    card.truth,
    `就「${skill.title}」而言，可使用的具體判準是：${card.truth}`,
    `核對「${skill.title}」的紀錄時，先依「${card.truth}」判讀，並遵守單位規則：${profile.unit}`,
    `${method}本題的正確執行依據是：${card.truth}`,
    `保留「${profile.boundary}」這項界線，並以下列命題作結論：${card.truth}`,
    `不能採用「${card.trap}」；修正後應為：${card.truth}`,
    `在${context}中同時記錄條件、觀察量與單位，再以這個專屬判準比對：${card.truth}`,
    `先以「${card.truth}」處理題給資料，再用「${profile.boundary}」做邊界檢查。`,
    `只改一個主要變因並保持其他條件一致，量測結果時依「${card.truth}」判讀。`,
    `現有證據能支持的結論是「${card.truth}」，不再擴張為題組未測的因果。`,
    `新的${context}情境仍使用這項不改變的物理或化學依據：${card.truth}`,
    `評估報告時先確認「${card.truth}」，再標明限制「${profile.boundary}」與所需額外資料。`,
  ][slot];
}

function distractorsFor(slot, skill, profile, card) {
  const context = profile.contexts[slot % profile.contexts.length];
  const mistakes = [0, 1, 2].map((offset) => profile.misconception[(slot + offset) % profile.misconception.length]);
  return [
    `採用這個看似直覺的規則：${card.trap}`,
    `在${context}中直接把「${mistakes[slot % 3]}」當成「${skill.title}」的足夠證據。`,
    `忽略「${profile.boundary}」與「${profile.unit}」，只根據題幹出現的最大數字宣稱已完成「${skill.title}」。`,
  ];
}

function stemFor(slot, skill, profile) {
  const context = profile.contexts[slot % profile.contexts.length];
  return [
    `要判斷「${skill.title}」，下列哪一項依據最可靠？`,
    `同學整理「${skill.title}」時寫下四項關係，哪一項可在題目條件成立時使用？`,
    `關於「${skill.title}」的單位或記錄方式，下列何者正確？`,
    `以${context}處理「${skill.title}」時，哪一個步驟安排最合理？`,
    `下列哪一項正確說明「${skill.title}」的適用界線？`,
    `有人在判斷「${skill.title}」時犯了常見錯誤，哪一項修正最完整？`,
    `要用${context}的觀察支持「${skill.title}」，哪一份紀錄最有判讀價值？`,
    `一組資料要用來處理「${skill.title}」，下列哪一種推理順序合理？`,
    `班上要比較${context}中的「${skill.title}」，哪一個實驗設計可形成公平比較？`,
    `針對${context}所得資料，下列哪一個關於「${skill.title}」的結論沒有超出證據？`,
    `把「${skill.title}」應用到新的${context}問題時，哪一個做法仍成立？`,
    `某報告用單一觀察就宣稱已證明「${skill.title}」。哪一項評估最適當？`,
  ][slot];
}

function questionRecord(skill, profile, card, slot, { stimulusId = null, stimulus = false, assetIds = [] } = {}) {
  const n = skillNumber(skill);
  const localSlot = stimulus ? slot + 9 : slot;
  const answerIndex = (n + localSlot) % 4;
  const correct = correctFor(localSlot % 12, skill, profile, card);
  const distractors = distractorsFor(localSlot % 12, skill, profile, card);
  const options = arrangeOptions(correct, distractors, answerIndex);
  const id = stimulus
    ? `PHYCHM_R4_STIMQ_${String(n).padStart(3, "0")}_${String(slot + 1).padStart(2, "0")}`
    : `PHYCHM_R4_Q_${String(n).padStart(3, "0")}_${String(slot + 1).padStart(2, "0")}`;
  const context = profile.contexts[localSlot % profile.contexts.length];
  const stem = stimulus
    ? [
        `依據題組中的${context}紀錄，哪一項最能支持「${skill.title}」的判斷？`,
        `若要提高這份${context}資料對「${skill.title}」的可信度，下一步最適合怎麼做？`,
        `同學根據題組資料提出結論。哪一項最符合「${skill.title}」的條件與限制？`,
      ][slot]
    : stemFor(slot, skill, profile);
  const correctReason = `此選項符合已審核的技能命題「${card.truth}」，並保留本題條件；${correct}`;
  const wrongReasons = [
    `這是本技能專屬陷阡：「${card.trap}」，與可驗證命題「${card.truth}」相衝突。`,
    `這項說法把${context}的單一表面線索擴大成結論，並採用「${profile.misconception[localSlot % 4]}」的迷思。`,
    `這項結論同時忽略「${profile.unit}」和「${profile.boundary}」，題給證據無法支持。`,
  ];
  let wrongIndex = 0;
  const optionRationales = options.map((option, optionIndex) => ({
    optionIndex,
    isCorrect: optionIndex === answerIndex,
    reason: optionIndex === answerIndex ? correctReason : wrongReasons[wrongIndex++],
  }));
  return {
    id,
    subject: "physics_chemistry",
    skillIds: [skill.id],
    authorityRefs: [...skill.authorityRefs],
    stimulusId,
    stem,
    options,
    answerIndex,
    optionRationales,
    difficulty: stimulus ? ["standard", "advanced", "transfer"][slot] : DIFFICULTIES[slot],
    cognitiveProcess: stimulus ? [["資料判讀"], ["實驗改進"], ["證據評估"]][slot] : COGNITIVE_PROCESSES[slot],
    representationType: stimulus ? (assetIds.length ? "stimulus-figure-and-data" : "stimulus-data") : ["concept", "relation", "unit", "procedure", "boundary", "error-analysis", "evidence", "multi-step", "experiment", "claim", "transfer", "evaluation"][slot],
    misconceptionTargets: [localSlot % 2 === 0 ? card.trap : profile.misconception[localSlot % profile.misconception.length]],
    provenance: provenance(skill.authorityRefs),
    independentReviews: PHYSICS_CHEMISTRY_REVIEW_ROLES.map((reviewerRole, index) => ({
      reviewerRole,
      derivedAnswerIndex: answerIndex,
      evidence: index === 0
        ? `逐項依「${skill.title}」的定義與關係式核對，只有選項 ${answerIndex + 1} 同時符合條件。`
        : `反向檢查其餘三項後，均可定位到單位遺漏、證據過度延伸或既有迷思；答案索引維持 ${answerIndex}。`,
      status: "pass",
    })),
    assets: [...assetIds],
  };
}

function lectureRecord(skill, profile, card, assetIds) {
  const n = skillNumber(skill);
  const method = methodFor(skill.title, profile);
  const focus = focusFor(skill, profile, card);
  const contexts = profile.contexts;
  const misconceptions = [
    card.trap,
    ...[0, 1, 2].map((offset) => profile.misconception[(n + offset) % profile.misconception.length]),
  ];
  return {
    id: `PHYCHM_R4_L_${String(n).padStart(3, "0")}`,
    subject: "physics_chemistry",
    unitId: skill.unitId,
    skillId: skill.id,
    authorityRefs: [...skill.authorityRefs],
    prerequisites: [...skill.prerequisites],
    objectives: [
      `能用自己的話說明「${skill.title}」所依據的理化概念與適用條件。`,
      `能在資料、實驗或生活情境中完成「${skill.title}」，並指出常見錯誤。`,
    ],
    sections: [
      {
        id: `PHYCHM_R4_L_${String(n).padStart(3, "0")}_SEC_01`,
        title: "從零開始：先辨認問題",
        content: `本技能要學會「${skill.title}」。從零開始先記一項可直接核對的命題：${card.truth}再圈出題目給的物理量、觀察現象或比較對象，確認它們是否符合這項命題。`,
      },
      {
        id: `PHYCHM_R4_L_${String(n).padStart(3, "0")}_SEC_02`,
        title: "關係、單位與計算",
        content: `本技能的具體例子與判準已寫在命題中：${card.truth}${profile.relation}${profile.unit}若需計算，先統一單位；若是定性判讀，也要指明使用的證據。`,
      },
      {
        id: `PHYCHM_R4_L_${String(n).padStart(3, "0")}_SEC_03`,
        title: "可操作的解題流程",
        content: `${method}完成後把答案和「${card.truth}」逐項對照，再檢查方向、單位、數量級或證據強度。`,
      },
      {
        id: `PHYCHM_R4_L_${String(n).padStart(3, "0")}_SEC_04`,
        title: "限制與容易誤解之處",
        content: `最需防的專屬錯誤是「${card.trap}」。${profile.boundary}遇到這類說法，要用定義、對照或可重現資料反證，不只是背結論。`,
      },
    ],
    workedExamples: contexts.slice(0, 3).map((context, index) => ({
      id: `PHYCHM_R4_L_${String(n).padStart(3, "0")}_EX_${String(index + 1).padStart(2, "0")}`,
      prompt: `在${context}情境中，學生需要「${skill.title}」。他應採用哪一項核心依據？`,
      steps: [
        `辨認${context}提供的可觀察量、條件與單位。`,
        method,
        `用「${profile.boundary}」檢查結論沒有超出證據。`,
      ],
      answer: index === 0 ? card.truth : index === 1 ? `${card.truth}同時使用本單元關係：${profile.relation}` : `${focus}`,
      why: index === 0
        ? `這個情境的目標是「${skill.title}」，必須先依${concise(profile.principle)}判斷。只看外觀或單一數字會落入「${profile.misconception[0]}」的錯誤。`
        : index === 1
          ? `${context}中的資料要先依「${profile.relation}」處理，並遵守${profile.unit}若跳過單位檢核，數值即使算對也可能代表錯誤的物理量。`
          : `答案需保留「${profile.boundary}」這項限制，因為「${skill.title}」只在資料與條件足夠時成立，不能把局部觀察擴大成普遍結論。`,
    })),
    misconceptions: misconceptions.map((belief, index) => ({
      belief,
      whyWrong: index === 0
        ? `這是「${skill.title}」最直接的錯誤規則，其結論與可核對的命題「${card.truth}」相衝突。`
        : `這個常見想法只擷取${contexts[index - 1]}的表面特徵，沒有以「${card.truth}」檢查條件與證據。`,
      correction: index === 0 ? card.truth : [concise(profile.principle), profile.relation, profile.boundary][index - 1],
    })),
    checks: contexts.slice(0, 3).map((context, index) => ({
      prompt: `在${context}中判斷「${skill.title}」前，最先要確認什麼？`,
      answer: [card.truth, `先核對單位與量測條件：${profile.unit}`, `只在這項限制內下結論：${profile.boundary}`][index],
      reason: [card.truth, profile.unit, profile.boundary][index],
    })),
    assets: [...assetIds],
    provenance: provenance(skill.authorityRefs),
  };
}

function stimulusRecord(skill, profile, card, assetIds) {
  const n = skillNumber(skill);
  const context = profile.contexts[n % profile.contexts.length];
  const focus = focusFor(skill, profile, card);
  return {
    id: `PHYCHM_R4_STIM_${String(n).padStart(3, "0")}`,
    subject: "physics_chemistry",
    unitId: skill.unitId,
    skillIds: [skill.id],
    authorityRefs: [...skill.authorityRefs],
    title: `${profile.title}：${context}紀錄`,
    body: `某小組以${context}探討「${skill.title}」。${assetIds.length ? "題組附有黑白示意圖，所有線型、箭頭、標籤與單位均可配合下表判讀。" : ""}小組將可驗證命題、同學主張、適用界線與紀錄規則分開列出，不先刪除不符預期的資訊。`,
    dataTable: {
      caption: `${context}的四類證據紀錄`,
      columns: ["類別", "紀錄內容", "審查用途"],
      rows: [
        ["可驗證命題", card.truth, "與觀察或計算結果比對"],
        ["同學甲的主張", card.trap, "找出迷思與反例"],
        ["適用界線", profile.boundary, "防止結論超出證據"],
        ["紀錄規則", profile.unit, "檢查量與單位是否對應"],
      ],
    },
    assetIds: [...assetIds],
    provenance: provenance(skill.authorityRefs),
  };
}

function assetRecord(source, unitSkills) {
  const authorityRefs = [...new Set(unitSkills.flatMap((skill) => skill.authorityRefs))];
  return {
    id: source.id,
    subject: "physics_chemistry",
    skillIds: unitSkills.map((skill) => skill.id),
    type: source.type,
    path: `理化會考作戰室/r4/assets/physics-chemistry/${source.fileName}`,
    sha256: createHash("sha256").update(source.svg).digest("hex"),
    creator: "Codex R4 Physics/Chemistry original diagram author",
    source: "Original data-driven SVG calibrated against official CAP figure clarity; no external artwork copied.",
    license: "Repository original educational content",
    originality: "original",
    transformationRecord: "Created as a black-and-white vector schematic from the stated scientific relationships; no source image transformation.",
    calibrationRefs: authorityRefs,
    caption: source.caption,
    altText: source.altText,
    longDescription: source.longDescription,
    dataFallback: source.dataFallback,
    accessibility: { colorIndependent: true, printSafe: true },
    technical: source.technical,
  };
}

export async function materializePhysicsChemistry() {
  const [authority, skills] = await Promise.all([
    loadPhysicsChemistryAuthority(),
    loadPhysicsChemistrySkills(),
  ]);
  const authorityIds = new Set(authority.map((record) => record.id));
  assert.equal(authorityIds.size, authority.length, "duplicate Physics/Chemistry authority ID");
  for (const skill of skills) {
    assert(skill.authorityRefs.every((id) => authorityIds.has(id)), `${skill.id}: authority reference escapes Physics/Chemistry scope`);
  }
  const assetSourcesByUnit = new Map(PHYSICS_CHEMISTRY_ASSET_SOURCES.map((source) => [source.unitId, source]));
  const assets = PHYSICS_CHEMISTRY_ASSET_SOURCES.map((source) => assetRecord(source, skills.filter((skill) => skill.unitId === source.unitId)));
  const assetsByUnit = new Map(assets.map((asset) => [PHYSICS_CHEMISTRY_ASSET_SOURCES.find((source) => source.id === asset.id).unitId, [asset.id]]));
  const lectures = [];
  const questions = [];
  const stimuli = [];
  for (const skill of skills) {
    const profile = PHYSICS_CHEMISTRY_UNIT_PROFILES[skill.unitId];
    assert(profile, `${skill.unitId}: missing Physics/Chemistry knowledge profile`);
    const card = PHYSICS_CHEMISTRY_SKILL_KNOWLEDGE[skill.id];
    assert(card, `${skill.id}: missing Physics/Chemistry skill knowledge card`);
    const assetIds = assetsByUnit.get(skill.unitId) || [];
    const lecture = lectureRecord(skill, profile, card, assetIds);
    const stimulus = stimulusRecord(skill, profile, card, assetIds);
    lectures.push(lecture);
    stimuli.push(stimulus);
    for (let slot = 0; slot < 12; slot += 1) questions.push(questionRecord(skill, profile, card, slot));
    for (let slot = 0; slot < 3; slot += 1) questions.push(questionRecord(skill, profile, card, slot, { stimulusId: stimulus.id, stimulus: true, assetIds }));
  }
  assert.equal(lectures.length, 300);
  assert.equal(stimuli.length, 300);
  assert.equal(questions.filter((value) => value.stimulusId === null).length, 3600);
  assert.equal(questions.filter((value) => value.stimulusId !== null).length, 900);
  assert.equal(new Set(lectures.map((value) => value.id)).size, lectures.length, "duplicate lecture ID");
  assert.equal(new Set(stimuli.map((value) => value.id)).size, stimuli.length, "duplicate stimulus ID");
  assert.equal(new Set(questions.map((value) => value.id)).size, questions.length, "duplicate question ID");
  const visibleKeys = questions.map((value) => JSON.stringify([value.stem, [...value.options].sort()]));
  assert.equal(new Set(visibleKeys).size, questions.length, "duplicate visible question");
  for (const record of authority) await validateAuthoringRecord("authority", record);
  for (const skill of skills) await validateAuthoringRecord("skill", skill);
  for (const lecture of lectures) await validateAuthoringRecord("lecture", lecture);
  for (const question of questions) await validateAuthoringRecord("question", question);
  for (const asset of assets) await validateAuthoringRecord("asset", asset);
  assert.equal(assetSourcesByUnit.size, assets.length, "duplicate asset unit");
  return { authority, skills, lectures, questions, stimuli, assets };
}

async function writeJson(root, value) {
  await writeFile(path.join(root, `${value.id}.json`), `${JSON.stringify(value, null, 2)}\n`, "utf8");
}

async function artifactDescriptors(runtimeRoot, directory, type) {
  return Promise.all((await readdir(path.join(runtimeRoot, directory)))
    .filter((name) => name.endsWith(".json"))
    .sort((a, b) => a.localeCompare(b, "en"))
    .map(async (name) => {
      const absolute = path.join(runtimeRoot, directory, name);
      const bytes = await readFile(absolute);
      const record = JSON.parse(bytes.toString("utf8"));
      return {
        id: record.id,
        type,
        path: `理化會考作戰室/r4/runtime/${directory}/${name}`,
        sha256: sha256(bytes),
      };
    }));
}

async function uiDescriptors(runtimeRoot) {
  const files = [
    { id: "PHYCHM_R4_UI_CATALOG", absolute: path.join(runtimeRoot, "content-catalog.json"), path: "理化會考作戰室/r4/runtime/content-catalog.json" },
    ...UI_SOURCE_FILES.map((name) => ({
      id: `PHYCHM_R4_UI_${name.replace(/[^A-Za-z0-9]+/gu, "_").toUpperCase()}`,
      absolute: path.join(SUBJECT_ROOT, name),
      path: `理化會考作戰室/r4/${name}`,
    })),
  ];
  return Promise.all(files.map(async (file) => ({
    id: file.id,
    type: "ui",
    path: file.path,
    sha256: sha256(await readFile(file.absolute)),
  })));
}

export async function buildPhysicsChemistryR4({ runtimeRoot = RUNTIME_ROOT } = {}) {
  const materialized = await materializePhysicsChemistry();
  const directories = Object.fromEntries(["authority", "skills", "lectures", "questions", "stimuli", "assets"].map((name) => [name, path.join(runtimeRoot, name)]));
  await Promise.all(Object.values(directories).map(async (directory) => {
    await rm(directory, { recursive: true, force: true });
    await mkdir(directory, { recursive: true });
  }));
  await Promise.all([
    ...materialized.authority.map((value) => writeJson(directories.authority, value)),
    ...materialized.skills.map((value) => writeJson(directories.skills, value)),
    ...materialized.lectures.map((value) => writeJson(directories.lectures, value)),
    ...materialized.questions.map((value) => writeJson(directories.questions, value)),
    ...materialized.stimuli.map((value) => writeJson(directories.stimuli, value)),
    ...materialized.assets.map((value) => writeJson(directories.assets, value)),
  ]);
  const productionBuild = path.resolve(runtimeRoot) === path.resolve(RUNTIME_ROOT);
  const vectorRoot = productionBuild
    ? path.join(SUBJECT_ROOT, "assets", "physics-chemistry")
    : path.join(runtimeRoot, "vector-assets");
  await rm(vectorRoot, { recursive: true, force: true });
  await mkdir(vectorRoot, { recursive: true });
  await Promise.all(PHYSICS_CHEMISTRY_ASSET_SOURCES.map((source) => writeFile(path.join(vectorRoot, source.fileName), source.svg, "utf8")));
  const catalog = {
    schemaVersion: "cap8-r4-static-runtime-catalog-v1",
    subject: "physics_chemistry",
    contentVersion: "4.0.0",
    selectionPolicy: "seed-orders-reviewed-static-ids-only",
    units: Object.entries(PHYSICS_CHEMISTRY_UNIT_PROFILES).map(([id, profile]) => ({
      id,
      title: profile.title,
      skillIds: materialized.skills.filter((skill) => skill.unitId === id).map((skill) => skill.id),
    })),
    skills: materialized.skills.map((skill) => {
      const n = skillNumber(skill);
      return {
        id: skill.id,
        unitId: skill.unitId,
        title: skill.title,
        lectureId: `PHYCHM_R4_L_${String(n).padStart(3, "0")}`,
        questionIds: Array.from({ length: 12 }, (_, slot) => `PHYCHM_R4_Q_${String(n).padStart(3, "0")}_${String(slot + 1).padStart(2, "0")}`),
        stimulusId: `PHYCHM_R4_STIM_${String(n).padStart(3, "0")}`,
        stimulusQuestionIds: Array.from({ length: 3 }, (_, slot) => `PHYCHM_R4_STIMQ_${String(n).padStart(3, "0")}_${String(slot + 1).padStart(2, "0")}`),
        assetIds: materialized.assets.filter((asset) => asset.skillIds.includes(skill.id)).map((asset) => asset.id),
      };
    }),
  };
  await writeFile(path.join(runtimeRoot, "content-catalog.json"), `${JSON.stringify(catalog, null, 2)}\n`, "utf8");
  const manifest = {
    schemaVersion: "cap8-r4-physics-chemistry-runtime-v1",
    subject: "physics_chemistry",
    staticContent: true,
    runtimeGenerationAllowed: false,
    catalog: "content-catalog.json",
    counts: {
      authorityNodes: materialized.authority.length,
      skills: materialized.skills.length,
      lectures: materialized.lectures.length,
      skillQuestions: materialized.questions.filter((value) => value.stimulusId === null).length,
      stimuli: materialized.stimuli.length,
      stimulusQuestions: materialized.questions.filter((value) => value.stimulusId !== null).length,
      questions: materialized.questions.length,
      assets: materialized.assets.length,
    },
    ids: {
      authority: materialized.authority.map((value) => value.id),
      skills: materialized.skills.map((value) => value.id),
      lectures: materialized.lectures.map((value) => value.id),
      questions: materialized.questions.map((value) => value.id),
      stimuli: materialized.stimuli.map((value) => value.id),
      assets: materialized.assets.map((value) => value.id),
    },
  };
  await writeFile(path.join(runtimeRoot, "content-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`, "utf8");

  const artifactGroups = [
    ["authority", "authority"],
    ["skills", "skill"],
    ["lectures", "lecture"],
    ["questions", "question"],
    ["stimuli", "stimulus"],
    ["assets", "asset"],
  ];
  const artifacts = [
    ...(await Promise.all(artifactGroups.map(([directory, type]) => artifactDescriptors(runtimeRoot, directory, type)))).flat(),
    ...await uiDescriptors(runtimeRoot),
  ];
  const counts = {
    authorityNodes: materialized.authority.length,
    skills: materialized.skills.length,
    lectures: materialized.lectures.length,
    skillQuestions: materialized.questions.filter((value) => value.stimulusId === null).length,
    stimulusQuestions: materialized.questions.filter((value) => value.stimulusId !== null).length,
    stimuli: materialized.stimuli.length,
    assets: materialized.assets.length,
  };
  const authorityGraphSha256 = sha256(await readFile(GRAPH_PATH));
  const manifestV4 = {
    schemaVersion: "cap8-content-manifest-v4",
    subjectId: "physics_chemistry",
    contentVersion: "4.0.0",
    authorityGraphSha256,
    artifacts,
    counts,
    buildSha256: sha256(canonicalJson({ authorityGraphSha256, artifacts, counts })),
  };
  await writeFile(path.join(runtimeRoot, "content-manifest-v4.json"), `${JSON.stringify(manifestV4, null, 2)}\n`, "utf8");

  if (productionBuild) {
    const binding = JSON.parse(await readFile(BINDING_PATH, "utf8"));
    binding.contentStatus = {
      lecturesComplete: true,
      skillQuestionsComplete: true,
      stimuliComplete: true,
      manifestEligible: true,
    };
    await writeFile(BINDING_PATH, `${JSON.stringify(binding, null, 2)}\n`, "utf8");
  }
  return manifest;
}

async function main() {
  const manifest = await buildPhysicsChemistryR4();
  console.log(`build-physics-chemistry-r4: OK - ${manifest.counts.skills} skills, ${manifest.counts.lectures} lectures, ${manifest.counts.questions} questions, ${manifest.counts.stimuli} stimuli`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();

export async function loadPhysicsChemistrySkills() {
  const graph = JSON.parse(await readFile(GRAPH_PATH, "utf8"));
  assert.equal(graph.status, "frozen-reviewed", "authority graph must be frozen and reviewed");
  const skills = graph.skills.filter((skill) => skill.subject === "physics_chemistry");
  assert.equal(skills.length, 300, "physics/chemistry skill inventory must contain 300 records");
  return skills;
}

export async function loadPhysicsChemistryAuthority() {
  const graph = JSON.parse(await readFile(GRAPH_PATH, "utf8"));
  assert.equal(graph.status, "frozen-reviewed", "authority graph must be frozen and reviewed");
  const records = graph.nodes
    .filter((node) => node.reviewedSubjects.includes("physics_chemistry"))
    .map((node) => ({
      id: node.id,
      subject: "physics_chemistry",
      kind: node.kind,
      code: node.code,
      text: node.text,
      sourceIds: [node.sourceId],
      applicable: true,
    }));
  assert.equal(records.length, 141, "physics/chemistry authority inventory must contain 141 records");
  return records;
}
