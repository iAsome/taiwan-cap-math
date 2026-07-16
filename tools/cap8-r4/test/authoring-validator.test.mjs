import assert from "node:assert/strict";
import test from "node:test";
import { validateAuthoringRecord } from "../authoring-validator.mjs";

function question(overrides = {}) {
  return {
    id: "EN_Q_000001",
    subject: "english",
    skillIds: ["EN_SKILL_001"],
    authorityRefs: ["EN_AUTH_001"],
    stimulusId: null,
    stem: "Would you like some tea?",
    options: ["Yes, please.", "At six.", "On the desk."],
    answerIndex: 0,
    optionRationales: [
      { optionIndex: 0, isCorrect: true, reason: "It accepts the offer naturally." },
      { optionIndex: 1, isCorrect: false, reason: "It gives a time instead of answering the offer." },
      { optionIndex: 2, isCorrect: false, reason: "It gives a place instead of answering the offer." }
    ],
    difficulty: "foundation",
    cognitiveProcess: ["apply"],
    representationType: "dialogue",
    misconceptionTargets: ["communication-function"],
    provenance: {
      status: "original",
      authorRole: "R4 content author",
      copyrightStatus: "original wording",
      sourceRefs: ["CAP_ENGLISH"]
    },
    independentReviews: [
      { reviewerRole: "solver-a", derivedAnswerIndex: 0, evidence: "The response accepts an offer.", status: "pass" },
      { reviewerRole: "solver-b", derivedAnswerIndex: 0, evidence: "The other choices answer time or place.", status: "pass" }
    ],
    assets: [],
    ...overrides
  };
}

function mapAsset(overrides = {}) {
  return {
    id: "GEO_R4_ASSET_001",
    subject: "geography",
    skillIds: ["GEO_R4_S001"],
    type: "map",
    path: "地理會考作戰室/r4/runtime/assets/GEO_R4_ASSET_001.svg",
    sha256: "a".repeat(64),
    creator: "R4 content author",
    source: "Original map based on reviewed public data",
    license: "CC0 original project asset",
    originality: "original",
    transformationRecord: "Redrawn as an original data-driven SVG; no source artwork copied.",
    calibrationRefs: ["CAP_GEO_106_115"],
    caption: "臺灣主要河川位置圖",
    altText: "臺灣輪廓圖標出四條主要河川及其流向，北方朝上。",
    longDescription: "地圖以相同線寬標示四條河川，並用箭頭與文字指出流向；所有作答資訊也列在下方資料表。",
    dataFallback: {
      summary: "四條河川的起點、終點與流向",
      columns: ["河川", "起點", "終點"],
      rows: [["甲河", "中央山地", "臺灣海峽"]],
    },
    accessibility: { colorIndependent: true, printSafe: true },
    technical: {
      scale: "比例尺 1:2,000,000",
      orientation: "北箭頭朝上",
      legend: "實線為河川，箭頭為流向",
      projection: "TWD97 / TM2 zone 121",
      mapContext: "contemporary",
    },
    ...overrides,
  };
}

test("authoring records do not require a premature final audit", async () => {
  assert.equal(await validateAuthoringRecord("question", question()), true);
});

test("authoring validation rejects an independent answer disagreement", async () => {
  const value = question();
  value.independentReviews[1].derivedAnswerIndex = 1;
  await assert.rejects(validateAuthoringRecord("question", value), /independent review disagrees/);
});

test("authoring validation ties every rationale to one option", async () => {
  const value = question();
  value.optionRationales[2].optionIndex = 1;
  await assert.rejects(validateAuthoringRecord("question", value), /option rationale indices mismatch/);
});

test("CAP-quality map authoring metadata passes", async () => {
  assert.equal(await validateAuthoringRecord("asset", mapAsset()), true);
});

test("visual assets require a complete nonvisual data fallback", async () => {
  const value = mapAsset();
  delete value.dataFallback;
  await assert.rejects(validateAuthoringRecord("asset", value), /must have required property 'dataFallback'/);
});

test("historical maps require date and uncertainty metadata", async () => {
  const value = mapAsset({ technical: { ...mapAsset().technical, mapContext: "historical" } });
  await assert.rejects(validateAuthoringRecord("asset", value), /historical map needs a date or year/);
});

test("asset meaning cannot depend on color alone", async () => {
  const value = mapAsset({ accessibility: { colorIndependent: false, printSafe: true } });
  await assert.rejects(validateAuthoringRecord("asset", value), /must be equal to constant/);
});

test("alt text must add information beyond the caption", async () => {
  const value = mapAsset({ altText: "臺灣主要河川位置圖" });
  await assert.rejects(validateAuthoringRecord("asset", value), /alt text must describe more than the caption/);
});

test("graphs require axes, units, precision, variables, legend, and data source", async () => {
  const value = mapAsset({
    type: "graph",
    technical: {
      axes: ["時間（秒）", "距離（公尺）"],
      units: ["s", "m"],
      legend: "實線表示甲車",
      significantFigures: "距離取至整數公尺",
      controlledVariables: ["同一路段"],
      dataSource: "R4 original experiment data",
    },
  });
  assert.equal(await validateAuthoringRecord("asset", value), true);
  delete value.technical.axes;
  await assert.rejects(validateAuthoringRecord("asset", value), /must have required property 'axes'/);
});

test("science diagrams declare schematic status and visible labels", async () => {
  const value = mapAsset({
    type: "science-diagram",
    technical: {
      drawingMode: "schematic",
      labels: ["光源", "植物", "氧氣"],
      units: [],
      controlledVariables: ["光照時間", "水量"],
    },
  });
  assert.equal(await validateAuthoringRecord("asset", value), true);
  delete value.technical.drawingMode;
  await assert.rejects(validateAuthoringRecord("asset", value), /must have required property 'drawingMode'/);
});

test("listening audio requires a locked transcript and production metadata", async () => {
  const value = mapAsset({
    id: "ENG_R4_AUDIO_001",
    subject: "english",
    skillIds: ["ENG_R4_S001"],
    type: "audio",
    path: "英文會考作戰室/r4/runtime/audio/ENG_R4_AUDIO_001.mp3",
    caption: "Listening dialogue 1",
    altText: "Two speakers discuss when to meet after school.",
    longDescription: "The written transcript gives the complete two-speaker conversation and identifies every pause used in the recording.",
    transcript: "A: When can we meet? B: At four after school.",
    technical: {
      scriptSha256: "b".repeat(64),
      voice: "en_US-lessac-medium and en_GB-alba-medium",
      rate: "curriculum-calibrated 0.95x",
      pausePattern: "one-second turn pause; two-second replay pause",
    },
  });
  delete value.dataFallback;
  assert.equal(await validateAuthoringRecord("asset", value), true);
  delete value.transcript;
  await assert.rejects(validateAuthoringRecord("asset", value), /must have required property 'transcript'/);
});
