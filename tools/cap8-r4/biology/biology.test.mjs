import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { fileURLToPath } from "node:url";
import { buildBiology } from "./build-biology.mjs";
import { buildOfficialMapping } from "./build-official-mapping.mjs";
import { BIOLOGY_ASSET_SOURCES } from "./biology-assets.mjs";
import { assertDistractorQuality, assertNoLongCopiedText, assertNoRepeatedEdgeScaffold, assertQuestionLanguage, assertQuestionQuality, assertTextQuality, essenceQuestionKey, validateBiology } from "./validate-biology.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..", "..");
const SUBJECT_ROOT = path.join(REPO_ROOT, "生物會考作戰室");

async function treeHash(root) {
  const hash = createHash("sha256");
  async function visit(directory) {
    const entries = (await readdir(directory, { withFileTypes: true })).sort((a, b) => a.name.localeCompare(b.name, "en"));
    for (const entry of entries) {
      const absolute = path.join(directory, entry.name);
      if (entry.isDirectory()) await visit(absolute);
      else {
        hash.update(path.relative(root, absolute).replaceAll("\\", "/"));
        hash.update(await readFile(absolute));
      }
    }
  }
  await visit(root);
  return hash.digest("hex");
}

test("official reviews are accounted for without forced one-to-one skill coverage", async () => {
  assert.deepEqual(await buildOfficialMapping(), { candidates: 220, primary: 191, crossSubject: 29 });
  const ledger = JSON.parse(await readFile(path.join(HERE, "official-item-mapping.json"), "utf8"));
  const expected = {
    "biomagnification-food-chain-order": "BIO_R4_S208",
    "de-novo-mutation-parent-genotypes": "BIO_R4_S138",
    "dominant-trait-pedigree-inference": "BIO_R4_S135",
    "enzyme-protein-composition": "BIO_R4_S044",
    "food-chain-energy-pyramid": "BIO_R4_S190",
    "fungus-taxonomic-relatedness": "BIO_R4_S154",
    "microscope-type-selection": "BIO_R4_S009",
    "nitrogen-transfer-food-chain": "BIO_R4_S193",
    "photosynthesis-rate-measurement": "BIO_R4_S176",
    "plant-cell-osmosis-plasmolysis": "BIO_R4_S028",
    "plant-cell-wall-osmosis": "BIO_R4_S028",
    "sensory-perception-and-brain-judgment": "BIO_R4_S085",
    "venom-circulation-tissue-diffusion": "BIO_R4_S067",
    "wildlife-overexploitation": "BIO_R4_S200",
  };
  for (const [officialSkill, skillId] of Object.entries(expected)) {
    const record = ledger.records.find((item) => item.officialSkill === officialSkill);
    assert.equal(record?.skillId, skillId, officialSkill);
    assert.equal(record?.mappingBasis, "reviewed-exact-skill-override", officialSkill);
  }
});

test("Traditional Chinese validation does not reject script-invariant biology words", () => {
  assert.doesNotThrow(() => assertTextQuality("fixture", "植物會利用光合作用製造養分。"));
  assert.throws(() => assertTextQuality("fixture", "细胞是生物體的基本單位。"), /simplified-Chinese/u);
  assert.throws(() => assertTextQuality("fixture", "每隔十分钟記錄一次溫度。"), /simplified-Chinese/u);
  assert.throws(() => assertTextQuality("fixture", "正確答案的陣列索引為二。"), /prohibited or out-of-scope/u);
  assert.throws(() => assertTextQuality("fixture", "資料後方混入 tokens truncated 工具標記。"), /prohibited or out-of-scope/u);
  assert.throws(() => assertQuestionLanguage({
    id: "fixture-position-language",
    optionRationales: [{ reason: "第一個選項中的構造符合題意。" }],
    independentReviews: [],
  }), /machine-like answer language/u);
  assert.throws(() => assertQuestionLanguage({
    id: "fixture-group-summary",
    optionRationales: [{ reason: "其餘三項都不符合題目提供的生物特徵。" }],
    independentReviews: [],
  }), /machine-like answer language/u);
});

test("question gate rejects hidden diagrams and duplicated independent evidence", () => {
  const fixture = {
    id: "BIO_R4_Q_FIXTURE",
    stem: "依下圖判斷哪一項生物構造敘述正確？",
    options: ["甲構造", "乙構造", "丙構造", "丁構造"],
    answerIndex: 0,
    optionRationales: [
      { optionIndex: 0, isCorrect: true, reason: "甲構造符合題幹所列的完整功能條件。" },
      { optionIndex: 1, isCorrect: false, reason: "乙構造執行的是另一種不同生理功能。" },
      { optionIndex: 2, isCorrect: false, reason: "丙構造的位置與題述條件不能互相對應。" },
      { optionIndex: 3, isCorrect: false, reason: "丁構造缺少題幹要求的關鍵構造特徵。" },
    ],
    independentReviews: [
      { evidence: "依構造所在位置核對，只有甲符合題幹的全部條件。" },
      { evidence: "逐項比較生理功能，也只有甲能產生題述結果。" },
    ],
    assets: [],
  };
  assert.throws(() => assertQuestionQuality(fixture), /image-dependent wording/u);
  fixture.assets = ["BIO_R4_ASSET_FIXTURE"];
  assert.doesNotThrow(() => assertQuestionQuality(fixture));
  fixture.independentReviews[1].evidence = fixture.independentReviews[0].evidence;
  assert.throws(() => assertQuestionQuality(fixture), /distinct evidence/u);
  fixture.independentReviews[1].evidence = "從細胞功能逐項比較，甲構造能產生題幹所描述的完整結果。";
  fixture.independentReviews[0].evidence = "機制核對：甲構造符合題幹所列的全部功能條件。";
  assert.throws(() => assertQuestionQuality(fixture), /generated review scaffold/u);
});

test("distractor gate rejects decoration and extreme answer-length cues", () => {
  assert.throws(() => assertDistractorQuality({
    id: "fixture-decoration",
    options: ["儀器品牌名稱", "相同溫度下的反應速率", "處理前的起始濃度", "每組的獨立樣本數"],
    answerIndex: 1,
  }), /decorative distractor/u);
  assert.throws(() => assertDistractorQuality({
    id: "fixture-length-cue",
    options: ["沒有影響", "資料相同", "結果錯誤", "控制溫度與起始濃度並設對照組重複量測反應速率"],
    answerIndex: 3,
  }), /answer length is an extreme outlier/u);
  assert.doesNotThrow(() => assertDistractorQuality({
    id: "fixture-balanced",
    options: ["只控制溫度但改變起始濃度", "只設對照組但每組僅有單一樣本", "同時改變溫度與處理時間", "控制溫度與起始濃度並設對照組重複量測反應速率"],
    answerIndex: 3,
  }));
});

test("student explanations cannot reuse a long opening or ending scaffold", () => {
  const repeatedEnding = [
    { id: "one", text: "甲項缺少控制條件，因此這段共同尾句不能反覆用來填補說明" },
    { id: "two", text: "乙項誤讀觀察結果，因此這段共同尾句不能反覆用來填補說明" },
    { id: "three", text: "丙項顛倒因果方向，因此這段共同尾句不能反覆用來填補說明" },
  ];
  assert.throws(() => assertNoRepeatedEdgeScaffold(repeatedEnding, "fixture", 14), /repeated ending scaffold/u);
  assert.doesNotThrow(() => assertNoRepeatedEdgeScaffold(repeatedEnding.slice(0, 2), "fixture", 14));
});

test("question essence ignores label, quantity, and measurement-unit substitutions", () => {
  const scaleA = { stem: "甲細胞的實際長度估算為多少？", options: ["十微米", "二十微米", "四十微米", "一百微米"] };
  const scaleB = { stem: "乙細胞的實際長度估算為多少？", options: ["十五微米", "三十微米", "六十微米", "一百五十微米"] };
  const conversionA = { stem: "在生命尺度單位換算中，一微米等於多少奈米？", options: ["十奈米", "一千奈米", "一萬奈米", "一百萬奈米"] };
  const conversionB = { stem: "在生命尺度換算中，一毫米等於多少微米？", options: ["一千微米", "一百微米", "十微米", "一萬微米"] };
  assert.equal(essenceQuestionKey(scaleA), essenceQuestionKey(scaleB));
  assert.equal(essenceQuestionKey(conversionA), essenceQuestionKey(conversionB));
  assert.notEqual(essenceQuestionKey(scaleA), essenceQuestionKey(conversionA));
});

test("service worker preserves downloaded biology content cache", async () => {
  const source = await readFile(path.join(SUBJECT_ROOT, "sw.js"), "utf8");
  assert.match(source, /const CONTENT_VERSION = "4\.0\.0"/u);
  assert.match(source, /CONTENT_CACHE = `cap8-r4-biology-content-\$\{CACHE_TAG\}`/u);
  assert.match(source, /!\[CACHE, CONTENT_CACHE\]\.includes\(key\)/u);
});

test("experiment graph points match its accessible data table", () => {
  const graph = BIOLOGY_ASSET_SOURCES.find((source) => source.asset.id === "BIO_R4_ASSET_EXPERIMENT_GRAPH");
  assert(graph);
  assert.deepEqual(graph.asset.dataFallback.rows, [["10", "4"], ["20", "9"], ["30", "15"], ["40", "7"], ["50", "1"]]);
  for (const [x, y] of [[210, 350], [310, 250], [410, 130], [510, 290], [610, 410]]) {
    assert.match(graph.svg, new RegExp(`<circle cx="${x}" cy="${y}"`, "u"));
  }
});

test("originality gate detects long verbatim reuse but allows independently written text", () => {
  const corpus = "研究者每天在相同時間記錄葉片長度與環境溫度，連續觀察十天。";
  assert.throws(() => assertNoLongCopiedText([{ id: "copied", strings: [corpus] }], corpus, 16, "fixture"), /copied passage/u);
  assert.doesNotThrow(() => assertNoLongCopiedText([{ id: "original", strings: ["每日固定時段量測葉長，並把氣溫另列成表格。"] }], corpus, 16, "fixture"));
});

test("biology build is deterministic and passes the subject gate", async () => {
  const first = await buildBiology();
  const firstHash = await treeHash(path.join(SUBJECT_ROOT, "r4", "runtime"));
  const firstManifest = await readFile(path.join(SUBJECT_ROOT, "content-manifest-v4.json"), "utf8");
  const second = await buildBiology();
  const secondHash = await treeHash(path.join(SUBJECT_ROOT, "r4", "runtime"));
  const secondManifest = await readFile(path.join(SUBJECT_ROOT, "content-manifest-v4.json"), "utf8");
  assert.deepEqual(second, first);
  assert.equal(secondHash, firstHash);
  assert.equal(secondManifest, firstManifest);
  const validated = await validateBiology();
  assert.deepEqual(validated.counts, { authority: 80, skills: 220, lectures: 220, skillQuestions: 2640, stimulusQuestions: 660, stimuli: 220, assets: 7 });
});
