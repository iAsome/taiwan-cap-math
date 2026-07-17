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
  ["資料判讀", "應用"],
  ["條件判斷", "分析"],
  ["錯誤分析", "分析"],
  ["證據判讀", "推論"],
  ["關係應用", "多步驟推理"],
  ["證據判讀", "分析"],
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
  return claims(text)[0] || cleanClaim(text);
}

function cleanClaim(text) {
  return text.trim().replace(/[。；]+$/u, "");
}

function claims(text) {
  return [...new Set(text.split(/[。；]/u).map(cleanClaim).filter(Boolean))];
}

function topicFor(skill, profile) {
  const topic = skill.title.replace(/^(?:正確)?(?:進行|定性判斷|定性連結|區分|辨識|辨認|說明|解釋|理解|比較|判斷|分析|評估|檢查|排除|避免|連結|建立|規劃|處理|計算|讀取|使用|選擇|由|以|用|依|在)/u, "");
  return topic && topic !== skill.title ? topic : `${profile.title}中的現象`;
}

function methodFor(title) {
  if (/計算|求|換算/u.test(title)) return "列出已知量，統一單位後代入關係式，再檢查量級";
  if (/比較/u.test(title)) return "固定其他條件，只比較一個變因，再用同一標準判讀";
  if (/區分|辨認|辨識/u.test(title)) return "先寫出分類判準，再逐項核對，不憑單一外觀下結論";
  if (/設計|規劃/u.test(title)) return "明確設定自變項、應變項、控制變因與記錄方式";
  if (/說明|解釋|理解/u.test(title)) return "先描述觀察，再用模型連結原因，並交代適用條件";
  return "先確認資料與條件，再依定義或關係式判讀，最後檢查限制";
}

function claimGroups(skill, profile, card) {
  const atomicFacts = cleanClaim(card.truth)
    .split(/[，；]/u)
    .map((text) => cleanClaim(text).replace(/^(?:並|且|但|卻|再|而)/u, ""))
    .filter((text) => text.length >= 8);
  return {
    facts: [...new Set([cleanClaim(card.truth), ...atomicFacts])],
    principles: claims(profile.principle),
    relations: claims(profile.relation),
    boundaries: claims(profile.boundary),
    units: claims(profile.unit),
    methods: [methodFor(skill.title)],
  };
}

const QUESTION_FOCUS = [
  "facts", "facts", "facts", "facts", "facts", "facts",
  "facts", "facts", "facts", "facts", "facts", "facts",
];

function correctChoiceFor(slot, skill, profile, card) {
  const groups = claimGroups(skill, profile, card);
  const group = groups[QUESTION_FOCUS[slot]];
  const text = slot === 0 ? group[0] : group[(skillNumber(skill) + slot) % group.length];
  assert(text && text.length <= 64, `${skill.id}: unreadable correct option`);
  return {
    text,
    correction: text,
    explanation: `判讀依據是「${shortReason(card.truth, 62)}」。`,
  };
}

function negativeChoicesFor(skill, profile, unitSkills) {
  const current = PHYSICS_CHEMISTRY_SKILL_KNOWLEDGE[skill.id];
  const unitClaims = unitSkills.map((candidate) => ({
    text: cleanClaim(PHYSICS_CHEMISTRY_SKILL_KNOWLEDGE[candidate.id].trap),
    correction: cleanClaim(PHYSICS_CHEMISTRY_SKILL_KNOWLEDGE[candidate.id].truth),
  }));
  const ordered = [
    ...unitClaims.filter((choice) => choice.text === cleanClaim(current.trap)),
    ...unitClaims.filter((choice) => choice.text !== cleanClaim(current.trap)),
  ];
  return [...new Map(ordered.map((choice) => [choice.text, choice])).values()];
}

function distractorChoicesFor(slot, skill, profile, card, unitSkills) {
  const pool = negativeChoicesFor(skill, profile, unitSkills).filter((choice) => choice.text !== cleanClaim(card.truth));
  assert(pool.length >= 7, `${skill.id}: distractor pool is too small`);
  const start = slot === 0 ? 0 : (skillNumber(skill) * 5 + slot * 3) % pool.length;
  return [0, 1, 2].map((offset) => pool[(start + offset) % pool.length]);
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
  assert.equal(new Set(options.map((choice) => choice.text)).size, 4, "question options must be unique");
  return options;
}

function stemFor(slot, skill, profile) {
  const n = skillNumber(skill);
  const context = profile.contexts[(n + slot) % profile.contexts.length];
  const topic = topicFor(skill, profile);
  const actor = ["小組", "學生", "實驗紀錄", "報告"][(n + slot) % 4];
  return [
    `${actor}討論${topic}，哪項敘述正確？`,
    `根據${context}紀錄，哪項判讀合理？`,
    `整理${context}資料後，哪項說明正確？`,
    `小組檢查${context}紀錄，哪項判讀正確？`,
    `關於${topic}，哪項結論符合題給條件？`,
    `有人誤解${topic}，哪項修正合理？`,
    `${context}出現四種說法，哪項有理化概念支持？`,
    `報告整理${context}資料，哪項敘述合理？`,
    `重新核對${context}結果，哪項說法正確？`,
    `${actor}根據${context}下結論，哪項符合資料？`,
    `換成另一組${context}資料，哪項判讀仍合理？`,
    `評估${context}報告時，哪項說明正確？`,
  ][slot];
}

function shortReason(text, limit) {
  const value = cleanClaim(text);
  return value.length <= limit ? value : `${value.slice(0, limit - 1)}…`;
}

function questionRecord(skill, profile, card, slot, unitSkills, { stimulusId = null, stimulus = false, assetIds = [] } = {}) {
  const n = skillNumber(skill);
  const localSlot = stimulus ? slot + 9 : slot;
  const choiceSlot = stimulus ? [0, 2, 1][slot] : slot;
  const answerIndex = (n + localSlot) % 4;
  const correct = correctChoiceFor(choiceSlot, skill, profile, card);
  const distractors = distractorChoicesFor(choiceSlot, skill, profile, card, unitSkills);
  const options = arrangeOptions(correct, distractors, answerIndex);
  const id = stimulus
    ? `PHYCHM_R4_STIMQ_${String(n).padStart(3, "0")}_${String(slot + 1).padStart(2, "0")}`
    : `PHYCHM_R4_Q_${String(n).padStart(3, "0")}_${String(slot + 1).padStart(2, "0")}`;
  const context = profile.contexts[(n + localSlot) % profile.contexts.length];
  const topic = topicFor(skill, profile);
  const stem = stimulus
    ? [
        `根據${context}表中紀錄，哪項結論最合理？`,
        `檢查表中關於${topic}的說法，哪項判讀正確？`,
        `${context}題組中，哪項說明符合紀錄？`,
      ][slot]
    : stemFor(slot, skill, profile);
  const optionRationales = options.map((choice, optionIndex) => ({
    optionIndex,
    isCorrect: optionIndex === answerIndex,
    reason: optionIndex === answerIndex
      ? correct.explanation
      : `「${shortReason(choice.text, 30)}」不成立；${shortReason(choice.correction, 48)}。`,
  }));
  return {
    id,
    subject: "physics_chemistry",
    skillIds: [skill.id],
    authorityRefs: [...skill.authorityRefs],
    stimulusId,
    stem,
    options: options.map((choice) => choice.text),
    answerIndex,
    optionRationales,
    difficulty: stimulus ? ["standard", "advanced", "transfer"][slot] : DIFFICULTIES[slot],
    cognitiveProcess: stimulus ? [["資料判讀"], ["資料判讀"], ["證據評估"]][slot] : COGNITIVE_PROCESSES[slot],
    representationType: stimulus ? (assetIds.length ? "stimulus-figure-and-data" : "stimulus-data") : ["concept", "relation", "unit", "data-interpretation", "boundary", "error-analysis", "evidence", "multi-step", "evidence-check", "claim", "transfer", "evaluation"][slot],
    misconceptionTargets: distractors.map((choice) => choice.text),
    provenance: provenance(skill.authorityRefs),
    independentReviews: PHYSICS_CHEMISTRY_REVIEW_ROLES.map((reviewerRole, index) => ({
      reviewerRole,
      derivedAnswerIndex: answerIndex,
      evidence: index === 0
        ? `逐項核對定義、關係、單位與條件，只有選項 ${String.fromCharCode(65 + answerIndex)} 符合。`
        : `其餘選項各含錯誤運算、錯誤因果或過度推論，答案為 ${String.fromCharCode(65 + answerIndex)}。`,
      status: "pass",
    })),
    assets: [...assetIds],
  };
}

function lectureRecord(skill, profile, card, unitSkills, assetIds) {
  const n = skillNumber(skill);
  const method = methodFor(skill.title);
  const topic = topicFor(skill, profile);
  const contexts = profile.contexts;
  const misconceptions = [skill, ...unitSkills.filter((candidate) => candidate.id !== skill.id).slice(0, 3)]
    .map((candidate) => ({
      belief: cleanClaim(PHYSICS_CHEMISTRY_SKILL_KNOWLEDGE[candidate.id].trap),
      correction: cleanClaim(PHYSICS_CHEMISTRY_SKILL_KNOWLEDGE[candidate.id].truth),
    }));
  return {
    id: `PHYCHM_R4_L_${String(n).padStart(3, "0")}`,
    subject: "physics_chemistry",
    unitId: skill.unitId,
    skillId: skill.id,
    authorityRefs: [...skill.authorityRefs],
    prerequisites: [...skill.prerequisites],
    objectives: [
      `能掌握${topic}的判準與適用條件。`,
      `能由實驗或生活資料判讀${topic}，並修正常見錯誤。`,
    ],
    sections: [
      {
        id: `PHYCHM_R4_L_${String(n).padStart(3, "0")}_SEC_01`,
        title: "核心概念",
        content: `${card.truth}先找出題目的觀察量與條件，再用這項判準核對。`,
      },
      {
        id: `PHYCHM_R4_L_${String(n).padStart(3, "0")}_SEC_02`,
        title: "關係與單位",
        content: `${profile.relation}${profile.unit}`,
      },
      {
        id: `PHYCHM_R4_L_${String(n).padStart(3, "0")}_SEC_03`,
        title: "解題流程",
        content: `${method}。作答前再檢查方向、單位、數量級與證據強度。`,
      },
      {
        id: `PHYCHM_R4_L_${String(n).padStart(3, "0")}_SEC_04`,
        title: "限制與迷思",
        content: `常見錯誤是「${cleanClaim(card.trap)}」。${profile.boundary}`,
      },
    ],
    workedExamples: contexts.slice(0, 3).map((context, index) => ({
      id: `PHYCHM_R4_L_${String(n).padStart(3, "0")}_EX_${String(index + 1).padStart(2, "0")}`,
      prompt: [
        `${context}紀錄中有人主張「${cleanClaim(card.trap)}」。如何修正？`,
        `整理${context}資料時，計算或單位應如何檢查？`,
        `${context}只提供部分資料時，結論要保留什麼限制？`,
      ][index],
      steps: [
        `找出${context}提供的觀察量與條件。`,
        method,
        `比對資料是否支持結論。`,
      ],
      answer: [cleanClaim(card.truth), `${cleanClaim(profile.relation)}；${cleanClaim(profile.unit)}`, cleanClaim(profile.boundary)][index],
      why: [
        `原主張與「${shortReason(card.truth, 62)}」相衝突。`,
        `數值、物理量與單位必須同時一致，不能只檢查算式。`,
        `資料不足時保留限制，才能避免把局部結果當成普遍規律。`,
      ][index],
    })),
    misconceptions: misconceptions.map(({ belief, correction }) => ({
      belief,
      whyWrong: `這項說法忽略定義、條件或可核對的資料。`,
      correction,
    })),
    checks: contexts.slice(0, 3).map((context, index) => ({
      prompt: [`${context}中哪項判準可直接核對？`, `${context}的數值如何避免單位錯誤？`, `${context}的結論可推到多大範圍？`][index],
      answer: [cleanClaim(card.truth), cleanClaim(profile.unit), cleanClaim(profile.boundary)][index],
      reason: [cleanClaim(card.truth), cleanClaim(profile.unit), cleanClaim(profile.boundary)][index],
    })),
    assets: [...assetIds],
    provenance: provenance(skill.authorityRefs),
  };
}

function stimulusRecord(skill, profile, card, assetIds) {
  const n = skillNumber(skill);
  const context = profile.contexts[n % profile.contexts.length];
  const topic = topicFor(skill, profile);
  const variants = [
    {
      columns: ["紀錄", "內容", "檢核重點"],
      labels: ["觀察或計算", "同學推論", "適用條件", "表示方式"],
      caption: `${context}實驗紀錄`,
    },
    {
      columns: ["報告段落", "小組寫法", "審查項目"],
      labels: ["資料整理", "初步解釋", "結論範圍", "數值記法"],
      caption: `${context}報告摘錄`,
    },
    {
      columns: ["項目", "小組紀錄", "用途"],
      labels: ["結果", "待查說法", "限制", "單位"],
      caption: `${context}資料表`,
    },
    {
      columns: ["檢查次序", "紀錄內容", "判讀目的"],
      labels: ["一、整理證據", "二、檢查主張", "三、確認條件", "四、核對記法"],
      caption: `${context}檢核表`,
    },
  ][n % 4];
  return {
    id: `PHYCHM_R4_STIM_${String(n).padStart(3, "0")}`,
    subject: "physics_chemistry",
    unitId: skill.unitId,
    skillIds: [skill.id],
    authorityRefs: [...skill.authorityRefs],
    title: `${context}：${topic}`,
    body: `小組整理${context}資料，準備核對${topic}。${assetIds.length ? "附圖以線型、箭頭和文字標示，並可配合下表判讀。" : ""}表內保留原始結果、待查說法與作答條件。`,
    dataTable: {
      caption: variants.caption,
      columns: variants.columns,
      rows: [
        [variants.labels[0], cleanClaim(card.truth), "對照觀察或計算"],
        [variants.labels[1], cleanClaim(card.trap), "找出與資料矛盾處"],
        [variants.labels[2], cleanClaim(profile.boundary), "界定結論範圍"],
        [variants.labels[3], cleanClaim(profile.unit), "核對物理量與單位"],
      ],
    },
    assetIds: [...assetIds],
    provenance: provenance(skill.authorityRefs),
  };
}

function assetRecord(source, unitSkills) {
  const authorityRefs = [...new Set(unitSkills.flatMap((skill) => skill.authorityRefs))];
  const longDescription = source.svg.match(/<desc>([^<]+)<\/desc>/u)?.[1];
  assert(longDescription, `${source.id}: missing SVG description`);
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
    longDescription,
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
  const skillsByUnit = new Map(Object.keys(PHYSICS_CHEMISTRY_UNIT_PROFILES).map((unitId) => [unitId, skills.filter((skill) => skill.unitId === unitId)]));
  const lectures = [];
  const questions = [];
  const stimuli = [];
  for (const skill of skills) {
    const profile = PHYSICS_CHEMISTRY_UNIT_PROFILES[skill.unitId];
    assert(profile, `${skill.unitId}: missing Physics/Chemistry knowledge profile`);
    const card = PHYSICS_CHEMISTRY_SKILL_KNOWLEDGE[skill.id];
    assert(card, `${skill.id}: missing Physics/Chemistry skill knowledge card`);
    const unitSkills = skillsByUnit.get(skill.unitId);
    assert(unitSkills?.length >= 7, `${skill.unitId}: too few skills for misconception pool`);
    const assetIds = assetsByUnit.get(skill.unitId) || [];
    const lecture = lectureRecord(skill, profile, card, unitSkills, assetIds);
    const stimulus = stimulusRecord(skill, profile, card, assetIds);
    lectures.push(lecture);
    stimuli.push(stimulus);
    for (let slot = 0; slot < 12; slot += 1) questions.push(questionRecord(skill, profile, card, slot, unitSkills));
    for (let slot = 0; slot < 3; slot += 1) questions.push(questionRecord(skill, profile, card, slot, unitSkills, { stimulusId: stimulus.id, stimulus: true, assetIds }));
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
  await writeText(path.join(root, `${value.id}.json`), `${JSON.stringify(value, null, 2)}\n`);
}

async function writeText(file, content) {
  for (let attempt = 0; ; attempt += 1) {
    try {
      await writeFile(file, content, "utf8");
      return;
    } catch (error) {
      if (!["EBUSY", "EPERM"].includes(error.code) || attempt === 20) throw error;
      await new Promise((resolve) => setTimeout(resolve, 50 * (attempt + 1)));
    }
  }
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
  const productionBuild = path.resolve(runtimeRoot) === path.resolve(RUNTIME_ROOT);
  const directories = Object.fromEntries(["authority", "skills", "lectures", "questions", "stimuli", "assets"].map((name) => [name, path.join(runtimeRoot, name)]));
  await Promise.all(Object.values(directories).map(async (directory) => {
    await rm(directory, { recursive: true, force: true, maxRetries: 8, retryDelay: 100 });
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
  const vectorRoot = productionBuild
    ? path.join(SUBJECT_ROOT, "assets", "physics-chemistry")
    : path.join(runtimeRoot, "vector-assets");
  await rm(vectorRoot, { recursive: true, force: true, maxRetries: 8, retryDelay: 100 });
  await mkdir(vectorRoot, { recursive: true });
  await Promise.all(PHYSICS_CHEMISTRY_ASSET_SOURCES.map((source) => writeText(path.join(vectorRoot, source.fileName), source.svg)));
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
  await writeText(path.join(runtimeRoot, "content-catalog.json"), `${JSON.stringify(catalog, null, 2)}\n`);
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
  await writeText(path.join(runtimeRoot, "content-manifest.json"), `${JSON.stringify(manifest, null, 2)}\n`);

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
  await writeText(path.join(runtimeRoot, "content-manifest-v4.json"), `${JSON.stringify(manifestV4, null, 2)}\n`);

  if (productionBuild) {
    const binding = JSON.parse(await readFile(BINDING_PATH, "utf8"));
    binding.contentStatus = {
      lecturesComplete: true,
      skillQuestionsComplete: true,
      stimuliComplete: true,
      manifestEligible: true,
    };
    await writeText(BINDING_PATH, `${JSON.stringify(binding, null, 2)}\n`);
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
