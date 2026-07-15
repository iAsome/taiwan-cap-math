import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { sha256 } from "./r4-core.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REVIEW_PATH = path.join(HERE, "ledger", "reviews", "official-source-reviews.json");
const EXTRACTION_PATH = path.join(HERE, "evidence", "official", "official-extraction-index.json");
const OUTPUT_PATH = path.join(HERE, "ledger", "chinese-writing-calibration.json");

const OFFICIAL_PAGES = Object.freeze([
  {
    id: "cap-writing-content",
    url: "https://cap.rcpet.edu.tw/test4-1.html",
    path: path.join(HERE, "evidence", "official", "html", "cap-writing.html"),
    sha256: "0c5ad8c85b5e40d713c8b9813757b499d53b42743df8ac575ba54bae7184983f",
    acquiredByThisTool: false,
    canonicalization: "none",
  },
  {
    id: "cap-writing-faq",
    url: "https://cap.rcpet.edu.tw/test5-1.html",
    path: path.join(HERE, "evidence", "official", "html", "cap-writing-faq.html"),
    sha256: "1379a4a174c90823b91954f609de66e7b2c4ff0033ff4835975032abbef86f06",
    acquiredByThisTool: true,
    canonicalization: "cloudflare-email-token-redacted",
  },
  {
    id: "cap-writing-rubric",
    url: "https://cap.rcpet.edu.tw/exam3-1.html",
    path: path.join(HERE, "evidence", "official", "html", "cap-writing-rubric.html"),
    sha256: "5fd52973ec9d8cda91a60ae3f3ac1ca567e44404e15243bc8d8b96e768d8c097",
    acquiredByThisTool: true,
    canonicalization: "cloudflare-email-token-redacted",
  },
]);

const LEVEL_BY_TITLE = Object.freeze({
  一級分: 1,
  二級分: 2,
  三級分: 3,
  四級分: 4,
  五級分: 5,
  六級分: 6,
});

const NUMBER_WORDS = Object.freeze({
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
  ten: 10,
});

const EXPECTED_RESPONSES = Object.freeze({ 1: 15, 2: 16, 3: 27, 4: 46, 5: 51, 6: 85 });

const SCORE_PROFILES = Object.freeze([
  {
    level: 0,
    officialSummary: "無法由作答判斷寫作能力。",
    boundaries: ["完全離題", "只訂題目", "僅抄寫題目或題幹", "使用詩歌體", "空白卷"],
    observedPattern: "零級分是特定不可評情況，不等同於文章很短、錯字很多或寫得不完整。",
    nextStep: "先完整讀懂寫作任務，至少提出一個直接回應題意的主旨與相關材料。",
  },
  {
    level: 1,
    officialSummary: "僅約略解釋題意或提及主題，材料過於簡略，難以辨認文章結構，語句與書寫控制有極嚴重問題。",
    dimensions: {
      ideaAndMaterial: "只解釋題目、簡略提及主題，或無法選出相關材料繼續發展。",
      organization: "沒有明顯結構；即使只有一段，也看不出內容層次。",
      dictionAndSyntax: "用詞極不恰當、錯誤很多，或句子破碎而難以理解。",
      mechanics: "格式與標點掌握極弱，錯別字很多。",
    },
    observedPattern: "106至114樣卷多半碰到題意，卻只命名觀點或列出極少材料，無法形成持續發展；因此完全離題應判零級分，不能誤列為一級分。",
    nextStep: "把一句主張擴成一個具體事件、觀察或例子，說清楚它和題意的關係。",
  },
  {
    level: 2,
    officialSummary: "嘗試運用材料但不足，或大量引述題幹而發展有限；結構不完整，遣詞、格式、標點與錯別字問題明顯。",
    dimensions: {
      ideaAndMaterial: "有嘗試選材，但材料不足、重複，或過度抄用題幹而沒有自己的發展。",
      organization: "結構不完整；單一段落雖可略分層次，仍缺少完整推進。",
      dictionAndSyntax: "遣詞造句經常出錯，影響表達。",
      mechanics: "格式與標點不熟練，錯別字頗多。",
    },
    observedPattern: "跨年樣卷常見列舉、重複主張或只有簡短理由；即使分成數段，段落若沒有不同功能，仍不能視為組織完整。",
    nextStep: "替材料安排清楚順序，補出原因、過程或結果，使每一段真正承擔不同功能。",
  },
  {
    level: 3,
    officialSummary: "已有相關材料與基本作答方向，但統整或發展不充分，結構鬆散或不連貫，語句與書寫錯誤會妨礙理解。",
    dimensions: {
      ideaAndMaterial: "能找到相關材料，但選擇、統整或說明仍不夠適當、充分。",
      organization: "內容鬆散，前後關係或段落連接不清楚。",
      dictionAndSyntax: "用詞有不當或錯誤，冗詞贅句偏多。",
      mechanics: "錯字、格式或標點問題已造成部分理解困難。",
    },
    observedPattern: "題材相關不等於論述完成；常缺少例證、因果、轉折、限定或由經驗回扣主旨的關係。",
    nextStep: "找出文章最重要的缺口，補足例證與因果，並用轉折或回扣讓材料共同支持主旨。",
  },
  {
    level: 4,
    officialSummary: "能統整並運用材料，尚能說明主旨；結構大致完整，但連貫、轉折、精簡度或句型變化仍有不穩定處。",
    dimensions: {
      ideaAndMaterial: "能統整相關材料，主旨可以辨認，也有基本闡述。",
      organization: "整體大致完整，但局部不連貫或轉折不夠清楚。",
      dictionAndSyntax: "用詞大致正確、文意清楚，但可能冗長且句型變化有限。",
      mechanics: "有若干錯字、格式或標點錯誤，但通常不致嚴重妨礙理解。",
    },
    observedPattern: "跨年樣卷已有可辨識主旨與大致完整結構，主要差距在材料連接、轉折清楚度、贅語、口語化及語言控制。",
    nextStep: "精修段落之間的邏輯，刪除重複內容，並讓句型和用詞更準確而有變化。",
  },
  {
    level: 5,
    officialSummary: "能適當統整材料並闡述主旨，結構完整，語詞正確、句子通順；少量錯字或標點問題不影響文意。",
    dimensions: {
      ideaAndMaterial: "能適當選擇、統整並運用材料，充分說明主旨。",
      organization: "結構完整，僅偶有轉折不夠流暢。",
      dictionAndSyntax: "語詞使用正確，能運用不同句型使文句通順。",
      mechanics: "錯字、格式與標點錯誤很少，且不影響文意。",
    },
    observedPattern: "多數樣卷能把具體事件或觀察連到原因、結果與反思，文章整體完整流暢，但局部轉折、字詞或標點仍可能不完美。",
    nextStep: "深化材料背後的關係或意義，並精修少數不順轉折，使全文脈絡更集中、精確。",
  },
  {
    level: 6,
    officialSummary: "能適切統整材料並深入闡述主旨，結構完整、脈絡分明且前後連貫，語詞精確並能有效運用多種句型。",
    dimensions: {
      ideaAndMaterial: "能依任務適切統整材料，進一步闡述並凸顯主旨。",
      organization: "結構完整，脈絡清楚，內容前後連貫。",
      dictionAndSyntax: "語詞精確，句型運用有效，文句流暢。",
      mechanics: "幾乎沒有錯字、格式與標點錯誤。",
    },
    observedPattern: "106至115樣卷採用的題材、立場與結構高度多樣；共同點是材料精準、發展持續、關係清楚且反思有依據，而不是固定文體、華麗詞藻或特定價值立場。",
    observedApproaches: ["敘事後反思", "說明與分析", "比較對照", "主張與限定", "材料整合", "象徵或寓意延伸"],
    nextStep: "維持內容深度與語言精確度，再逐項核對事實、錯字、格式與標點，不以堆疊修辭取代思考。",
  },
]);

function responseCount(review) {
  const evidence = review.scopeObservations.join(" ");
  const match = evidence.match(/\b(one|two|three|four|five|six|seven|eight|nine|ten|\d+) complete\b/i);
  assert(match, `${review.materialId}: reviewed response count is missing`);
  return NUMBER_WORDS[match[1].toLowerCase()] ?? Number(match[1]);
}

async function readJson(filePath) {
  const bytes = await readFile(filePath);
  return { bytes, value: JSON.parse(bytes) };
}

async function sourcePageEvidence() {
  return Promise.all(OFFICIAL_PAGES.map(async (source) => {
    const bytes = await readFile(source.path);
    assert.equal(sha256(bytes), source.sha256, `${source.id}: official page hash drift`);
    return {
      id: source.id,
      url: source.url,
      repositoryPath: path.relative(path.resolve(HERE, "..", ".."), source.path).replaceAll("\\", "/"),
      sha256: source.sha256,
      bytes: bytes.length,
      canonicalization: source.canonicalization,
    };
  }));
}

export async function buildChineseWritingCalibration() {
  const [{ bytes: extractionBytes, value: extraction }, { bytes: reviewBytes, value: reviews }, pages] = await Promise.all([
    readJson(EXTRACTION_PATH),
    readJson(REVIEW_PATH),
    sourcePageEvidence(),
  ]);
  const reviewById = new Map(reviews.reviews.map((review) => [review.materialId, review]));
  const samples = extraction.materials.filter((material) => material.materialKind === "writing-scoring-sample");
  assert.equal(samples.length, 55, "expected 55 official scoring-sample files");
  const byLevel = Object.fromEntries([1, 2, 3, 4, 5, 6].map((level) => [level, []]));
  for (const material of samples) {
    const level = LEVEL_BY_TITLE[material.title];
    assert(level, `${material.materialId}: unknown score title ${material.title}`);
    const review = reviewById.get(material.materialId);
    assert(review, `${material.materialId}: semantic source review missing`);
    assert.equal(review.reviewStatus, "complete-rendered-semantic-review");
    const expectedPages = material.documents.reduce((sum, document) => sum + document.pages.length, 0);
    const reviewedPages = review.documents.reduce((sum, document) => sum + document.renderedPages.length, 0);
    assert.equal(reviewedPages, expectedPages, `${material.materialId}: rendered-page review gap`);
    byLevel[level].push({ materialId: material.materialId, year: material.year, responses: responseCount(review) });
  }
  const profiles = SCORE_PROFILES.map((profile) => {
    if (profile.level === 0) return { ...profile, evidence: { materials: 0, reviewedResponses: 0, materialIds: [] } };
    const evidence = byLevel[profile.level];
    const reviewedResponses = evidence.reduce((sum, item) => sum + item.responses, 0);
    assert.equal(reviewedResponses, EXPECTED_RESPONSES[profile.level], `level ${profile.level}: response count drift`);
    return {
      ...profile,
      evidence: {
        materials: evidence.length,
        reviewedResponses,
        years: [...new Set(evidence.map((item) => item.year))],
        materialIds: evidence.map((item) => item.materialId),
      },
    };
  });
  return {
    schemaVersion: "cap8-r4-chinese-writing-calibration-v1",
    status: "official-rubric-and-rendered-samples-reviewed",
    reviewedAt: "2026-07-14",
    authority: "國中教育會考官方寫作測驗頁、問答、評分規準與106至115年官方樣卷評語",
    sources: {
      pages,
      extractionIndexSha256: sha256(extractionBytes),
      sourceReviewsSha256: sha256(reviewBytes),
    },
    scoring: {
      method: "整體性評分",
      fixedDimensionWeights: false,
      perErrorPointDeduction: false,
      dimensions: ["立意取材", "結構組織", "遣詞造句", "錯別字、格式與標點符號"],
      profiles,
    },
    examConstraints: {
      mode: "引導寫作",
      mustCompletePromptSpecificTask: true,
      poetryFormAllowed: false,
      privateIdentityDisclosureAllowed: false,
      titleRequirementDependsOnPrompt: true,
      copyingPromptAloneIsZero: true,
    },
    calibratedEvidence: {
      years: [106, 107, 108, 109, 110, 111, 112, 113, 114, 115],
      materials: samples.length,
      reviewedResponses: Object.values(EXPECTED_RESPONSES).reduce((sum, count) => sum + count, 0),
      allRenderedPagesReviewed: true,
      sampleTextCopied: false,
    },
    nonRules: [
      "官方規準沒有統一最低字數、固定段數或一律適用的文體公式；仍須完成當次題目明示的任務，且不可使用詩歌體。",
      "成語、諺語、名言或華麗修辭不是高級分必要條件；只有在準確、自然且服務主旨時才可能改善表達。",
      "級分不取決於是否同意題幹立場，也不取決於題材新奇、正向或感人。",
      "錯別字與標點不逐字扣固定分，必須和全文四向度整體判斷；高分卷仍可能有少量局部錯誤。",
      "樣卷中的文化、法律、科學、健康或時事敘述不是事實權威，引用於新內容前必須另向第一手來源查證。",
    ],
    productionContract: {
      sidebarCategory: "作文",
      staticOriginalWritingTasks: 120,
      requiredLearningModules: ["審題與任務拆解", "取材與發展", "結構與連貫", "遣詞造句", "格式標點與修訂", "六級分校準"],
      copiedOfficialSampleProseAllowed: false,
      automaticScorePromiseAllowed: false,
      feedbackMustUseFourDimensions: true,
    },
  };
}

export async function validateChineseWritingCalibration(value) {
  const expected = await buildChineseWritingCalibration();
  assert.deepEqual(value, expected, "checked-in Chinese writing calibration is stale or manually altered");
  assert.deepEqual(value.scoring.profiles.map((profile) => profile.level), [0, 1, 2, 3, 4, 5, 6]);
  assert.equal(value.calibratedEvidence.reviewedResponses, 240);
  assert.equal(value.scoring.fixedDimensionWeights, false);
  assert.equal(value.scoring.perErrorPointDeduction, false);
  assert.equal(value.calibratedEvidence.sampleTextCopied, false);
  assert.equal(value.productionContract.staticOriginalWritingTasks, 120);
  return {
    levels: value.scoring.profiles.length,
    materials: value.calibratedEvidence.materials,
    reviewedResponses: value.calibratedEvidence.reviewedResponses,
  };
}

async function acquirePages() {
  for (const source of OFFICIAL_PAGES.filter((item) => item.acquiredByThisTool)) {
    const response = await fetch(source.url);
    assert(response.ok, `${source.id}: fetch failed ${response.status}`);
    const html = await response.text();
    const bytes = Buffer.from(html
      .replace(/\/cdn-cgi\/l\/email-protection#[0-9a-f]+/gi, "/cdn-cgi/l/email-protection#REDACTED")
      .replace(/data-cfemail="[0-9a-f]+"/gi, "data-cfemail=\"REDACTED\""));
    assert.equal(sha256(bytes), source.sha256, `${source.id}: downloaded page hash drift`);
    await mkdir(path.dirname(source.path), { recursive: true });
    await writeFile(source.path, bytes);
  }
}

async function main() {
  if (process.argv.includes("--acquire")) await acquirePages();
  const calibration = await buildChineseWritingCalibration();
  await writeFile(OUTPUT_PATH, `${JSON.stringify(calibration, null, 2)}\n`, "utf8");
  console.log(`chinese-writing-calibration: OK - ${calibration.calibratedEvidence.reviewedResponses} reviewed responses`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
