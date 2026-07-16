import assert from "node:assert/strict";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { validateAuthoringRecord } from "../authoring-validator.mjs";
import { BIOLOGY_COUNTS, BIOLOGY_DIFFICULTY_DISTRIBUTION, canonicalJson, sha256 } from "./biology-core.mjs";
import { BIOLOGY_ASSET_SOURCES } from "./biology-assets.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..", "..");
const SUBJECT_ROOT = path.join(REPO_ROOT, "生物會考作戰室");
const OFFICIAL_REVIEW_ROOT = path.join(REPO_ROOT, "tools", "cap8-r4", "ledger", "reviews", "items");
const PROHIBITED_TEXT = [
  "TODO", "FIXME", "TBD", "lorem ipsum", "placeholder", "待補", "之後補", "暫時文字", "�",
  "tokens truncated", "Script completed", "tool output",
  "陣列", "索引", "選項零",
  "生物因為想要", "生物為了適應而產生", "個體努力演化", "需要某性狀所以產生",
  "卡爾文循環", "檸檬酸循環", "哈溫平衡", "轉錄因子", "操縱子",
];
const SIMPLIFIED_TOKENS = ["细胞", "组织", "器官系统", "发育", "遗传", "变异", "环境", "选择", "实验", "数据", "图表", "关系", "显微镜", "浓度", "动物", "细菌", "营养", "体内", "调节", "分钟", "个", "显"];
const GENERIC_OPTION_TOKENS = ["以上皆是", "以上皆非", "全部正確", "都不正確", "無法判斷"];
const HIDDEN_VISUAL_MARKERS = /(?:下圖|上圖|左圖|右圖|附圖|依圖|如圖|圖中|圖一|圖二)/u;
const PROHIBITED_TEXT_PATTERNS = [/(?:答案|正確)位置/u];
const GENERIC_QUESTION_ANSWER_LANGUAGE = /(?:正確答案|唯一答案|答案唯一|答案明確|第[一二三四](?:項|個選項)|答案[為是][零一二三四](?=$|[\s，。；、：:！？!?）)])|其餘[三四]項|另外三項|前三項|其他[三四]項|其餘選項)/u;

function repositoryPath(relative) {
  const absolute = path.resolve(REPO_ROOT, ...relative.split("/"));
  assert(absolute.startsWith(`${REPO_ROOT}${path.sep}`), `manifest path escapes repository: ${relative}`);
  return absolute;
}

async function readJson(file) {
  return JSON.parse(await readFile(file, "utf8"));
}

async function readJsonDirectory(directory) {
  const files = (await readdir(directory, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
    .map((entry) => path.join(directory, entry.name))
    .sort((a, b) => a.localeCompare(b, "en"));
  return Promise.all(files.map(readJson));
}

export function normalizedQuestionKey(question) {
  const normalize = (value) => value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[\s\p{P}\p{S}]+/gu, "")
    .replace(/\d+(?:\.\d+)?/gu, "#");
  return canonicalJson([normalize(question.stem), question.options.map(normalize).sort()]);
}

export function essenceQuestionKey(question) {
  const units = /(?:平方公分|平方公尺|立方公分|立方公尺|攝氏度|百分比|奈米|微米|毫米|公分|公尺|公里|毫升|公升|毫克|公克|公斤|分鐘|小時|秒|天|週|月|年|倍)/gu;
  const quantities = /[零〇一二三四五六七八九十百千萬億兩點]+(?=(?:平方公分|平方公尺|立方公分|立方公尺|攝氏度|百分比|奈米|微米|毫米|公分|公尺|公里|毫升|公升|毫克|公克|公斤|分鐘|小時|秒|天|週|月|年|倍))/gu;
  const normalize = (value) => value
    .normalize("NFKC")
    .toLowerCase()
    .replace(/[甲乙丙丁戊己庚辛壬癸]/gu, "X")
    .replace(quantities, "#")
    .replace(/\d+(?:\.\d+)?/gu, "#")
    .replace(units, "U")
    .replace(/單位/gu, "")
    .replace(/[\s\p{P}\p{S}]+/gu, "");
  return canonicalJson([normalize(question.stem), question.options.map(normalize).sort()]);
}

function ngrams(value, size = 4) {
  const normalized = value.normalize("NFKC").toLowerCase().replace(/[\s\p{P}\p{S}\d]+/gu, "");
  const result = new Set();
  for (let index = 0; index <= normalized.length - size; index += 1) result.add(normalized.slice(index, index + size));
  return result;
}

export function jaccardSimilarity(left, right) {
  const a = ngrams(left);
  const b = ngrams(right);
  return jaccardSets(a, b);
}

function jaccardSets(a, b) {
  if (!a.size && !b.size) return 1;
  let intersection = 0;
  for (const value of a) if (b.has(value)) intersection += 1;
  return intersection / (a.size + b.size - intersection);
}

function studentText(value) {
  if (typeof value === "string") return value;
  if (Array.isArray(value)) return value.map(studentText).join("\n");
  if (value && typeof value === "object") return Object.values(value).map(studentText).join("\n");
  return "";
}

function visibleStrings(value) {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value.flatMap(visibleStrings);
  if (value && typeof value === "object") return Object.values(value).flatMap(visibleStrings);
  return [];
}

function originalityText(value) {
  return value.normalize("NFKC").toLowerCase().replace(/[\s\p{P}\p{S}]+/gu, "");
}

export function assertNoLongCopiedText(records, corpusText, minimumLength, label) {
  const corpus = originalityText(corpusText);
  const windows = new Set();
  for (let index = 0; index <= corpus.length - minimumLength; index += 1) windows.add(corpus.slice(index, index + minimumLength));
  for (const record of records) {
    for (const value of record.strings) {
      const normalized = originalityText(value);
      for (let index = 0; index <= normalized.length - minimumLength; index += 1) {
        const excerpt = normalized.slice(index, index + minimumLength);
        assert(!windows.has(excerpt), `${record.id}: ${label} contains a ${minimumLength}-character copied passage (${excerpt})`);
      }
    }
  }
}

export function assertTextQuality(id, value) {
  const text = studentText(value);
  for (const token of PROHIBITED_TEXT) assert(!text.includes(token), `${id}: prohibited or out-of-scope text ${token}`);
  for (const token of SIMPLIFIED_TOKENS) assert(!text.includes(token), `${id}: simplified-Chinese token ${token}`);
  for (const pattern of PROHIBITED_TEXT_PATTERNS) assert(!pattern.test(text), `${id}: student-visible answer-position language ${pattern}`);
  assert(!/[\u2500-\u257f]{4,}/u.test(text), `${id}: box-drawing residue found`);
}

export function assertQuestionLanguage(question) {
  const fields = [
    ...question.optionRationales.map((item) => ["option rationale", item.reason]),
    ...question.independentReviews.map((item) => ["independent review", item.evidence]),
  ];
  for (const [field, text] of fields) assert(!GENERIC_QUESTION_ANSWER_LANGUAGE.test(text), `${question.id}: ${field} uses machine-like answer language`);
}

function assertLanguageGateFixtures() {
  assert.throws(() => assertQuestionLanguage({
    id: "fixture-generic-review",
    optionRationales: [{ reason: "正確答案已經明確指出植物會進行光合作用。" }],
    independentReviews: [{ evidence: "依照選項內容可知答案唯一，不會產生其他解釋。" }],
  }), /machine-like answer language/u);
  assert.doesNotThrow(() => assertQuestionLanguage({
    id: "fixture-natural-review",
    optionRationales: [{ reason: "第一個判準是是否具有葉綠體；答案為二氧化碳濃度下降，表示碳被固定。" }],
    independentReviews: [{ evidence: "第一層為生產者，光照後澱粉增加，符合光合作用的產物檢驗。" }],
  }));
  for (const [index, phrase] of ["第一項指出葉綠體會吸收光能。", "第二個選項提到細胞壁。", "依題意可知答案為三。", "交叉比對後答案是四"].entries()) {
    assert.throws(() => assertQuestionLanguage({
      id: `fixture-position-language-${index + 1}`,
      optionRationales: [{ reason: index % 2 === 0 ? phrase : "葉綠體能吸收光能並形成有機養分。" }],
      independentReviews: [{ evidence: index % 2 === 1 ? phrase : "題示光照後澱粉增加，符合光合作用的產物檢驗。" }],
    }), /machine-like answer language/u);
  }
  assert.doesNotThrow(() => assertTextQuality("fixture-lecture-scope", "講義可以討論第三個選項這個概念，但題目理由不可使用。"));
  assert.throws(() => assertTextQuality("fixture-simplified", "两个显性版本"), /simplified-Chinese token/u);
  assert.doesNotThrow(() => assertTextQuality("fixture-traditional", "兩個顯性版本"));
}

function difficultyCounts(questions) {
  return Object.fromEntries(Object.keys(BIOLOGY_DIFFICULTY_DISTRIBUTION).map((level) => [level, questions.filter((question) => question.difficulty === level).length]));
}

export function assertQuestionQuality(question) {
  assert([...question.stem].length >= 12, `${question.id}: stem is too thin`);
  assert(question.options.every((option) => [...option].length >= 2), `${question.id}: option is too thin`);
  assert(!question.options.some((option) => GENERIC_OPTION_TOKENS.some((token) => option.includes(token))), `${question.id}: generic all/none option is forbidden`);
  assert(question.optionRationales.every((item) => [...item.reason].length >= 12), `${question.id}: option rationale is too thin`);
  assert(question.independentReviews.every((review) => [...review.evidence].length >= 18), `${question.id}: independent review evidence is too thin`);
  assert.equal(new Set(question.optionRationales.map((item) => item.reason)).size, 4, `${question.id}: option rationales must be independently authored`);
  assert.equal(new Set(question.independentReviews.map((item) => item.evidence)).size, 2, `${question.id}: independent reviews must use distinct evidence`);
  assert.equal(question.optionRationales.filter((item) => item.isCorrect).length, 1, `${question.id}: exactly one rationale must be correct`);
  assert.equal(question.optionRationales.find((item) => item.isCorrect).optionIndex, question.answerIndex, `${question.id}: rationale answer mismatch`);
  assert(!HIDDEN_VISUAL_MARKERS.test(question.stem) || question.assets.length > 0, `${question.id}: image-dependent wording has no declared asset`);
  assertQuestionLanguage(question);
}

async function officialBiologyCandidates() {
  const files = (await readdir(OFFICIAL_REVIEW_ROOT)).filter((name) => name.endsWith("integrated-natural.json")).sort();
  const records = [];
  for (const file of files) {
    const review = await readJson(path.join(OFFICIAL_REVIEW_ROOT, file));
    for (const item of review.items ?? review.records ?? []) {
      if ([item.primarySubject, ...(item.secondarySubjects ?? [])].includes("biology")) records.push(item);
    }
  }
  return records.sort((left, right) => left.candidateId.localeCompare(right.candidateId, "en"));
}

function groupBy(values, selector) {
  const groups = new Map();
  for (const value of values) {
    const key = selector(value);
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key).push(value);
  }
  return groups;
}

function assertUniqueText(values, label) {
  const seen = new Map();
  for (const { id, text } of values) {
    assert.match(text, /\S/u, `${id}: empty ${label}`);
    assert(!seen.has(text), `${id}: exact ${label} duplicate of ${seen.get(text)}`);
    seen.set(text, id);
  }
}

export function assertNoRepeatedEdgeScaffold(values, label, minimumLength = 16) {
  const openings = new Map();
  const endings = new Map();
  for (const { id, text } of values) {
    const characters = [...text.normalize("NFKC").replace(/[\s\p{P}\p{S}]+/gu, "")];
    if (characters.length < minimumLength) continue;
    const opening = characters.slice(0, minimumLength).join("");
    const ending = characters.slice(-minimumLength).join("");
    if (!openings.has(opening)) openings.set(opening, []);
    if (!endings.has(ending)) endings.set(ending, []);
    openings.get(opening).push(id);
    endings.get(ending).push(id);
  }
  for (const [scaffold, ids] of openings) assert(ids.length < 3, `${label}: repeated opening scaffold ${scaffold} (${ids.join(", ")})`);
  for (const [scaffold, ids] of endings) assert(ids.length < 3, `${label}: repeated ending scaffold ${scaffold} (${ids.join(", ")})`);
}

function assertNoQuestionDuplicates(questions, skills) {
  const exact = new Map();
  const normalized = new Map();
  const essence = new Map();
  for (const question of questions) {
    const exactKey = canonicalJson([question.stem, [...question.options].sort()]);
    assert(!exact.has(exactKey), `${question.id}: exact visible duplicate of ${exact.get(exactKey)}`);
    exact.set(exactKey, question.id);
    const key = normalizedQuestionKey(question);
    assert(!normalized.has(key), `${question.id}: normalized duplicate of ${normalized.get(key)}`);
    normalized.set(key, question.id);
    const essenceKey = essenceQuestionKey(question);
    assert(!essence.has(essenceKey), `${question.id}: same-essence duplicate of ${essence.get(essenceKey)}`);
    essence.set(essenceKey, question.id);
  }
  const bySkill = groupBy(questions, (question) => question.skillIds[0]);
  const gramsById = new Map(questions.map((question) => [question.id, ngrams(`${question.stem}\n${question.options.join("\n")}`)]));
  for (const [skillId, bank] of bySkill) {
    for (let left = 0; left < bank.length; left += 1) {
      for (let right = left + 1; right < bank.length; right += 1) {
        const score = jaccardSets(gramsById.get(bank[left].id), gramsById.get(bank[right].id));
        assert(score < 0.82, `${skillId}: near-duplicate ${bank[left].id}/${bank[right].id} (${score.toFixed(3)})`);
      }
    }
  }
  const unitBySkill = new Map(skills.map((skill) => [skill.id, skill.unitId]));
  const byUnit = groupBy(questions, (question) => unitBySkill.get(question.skillIds[0]));
  for (const [unitId, bank] of byUnit) {
    for (let left = 0; left < bank.length; left += 1) {
      for (let right = left + 1; right < bank.length; right += 1) {
        if (bank[left].skillIds[0] === bank[right].skillIds[0]) continue;
        const score = jaccardSets(gramsById.get(bank[left].id), gramsById.get(bank[right].id));
        assert(score < 0.88, `${unitId}: cross-skill near-duplicate ${bank[left].id}/${bank[right].id} (${score.toFixed(3)})`);
      }
    }
  }
  const optionRationales = questions.flatMap((question) => question.optionRationales.map((item) => ({ id: `${question.id}/option-${item.optionIndex}`, text: item.reason })));
  const independentReviews = questions.flatMap((question) => question.independentReviews.map((item, index) => ({ id: `${question.id}/review-${index + 1}`, text: item.evidence })));
  assertUniqueText(optionRationales, "option rationale");
  assertUniqueText(independentReviews, "independent-review evidence");
  assertNoRepeatedEdgeScaffold(optionRationales, "option rationale");
  assertNoRepeatedEdgeScaffold(independentReviews, "independent-review evidence");
}

function assertLectureQuality(lectures) {
  for (const lecture of lectures) {
    assert.equal(lecture.sections.length >= 4, true, `${lecture.id}: at least four sections required`);
    assert.equal(lecture.workedExamples.length >= 3, true, `${lecture.id}: at least three worked examples required`);
    assert.equal(lecture.misconceptions.length, 4, `${lecture.id}: exactly four misconceptions required`);
    assert.equal(lecture.checks.length >= 3, true, `${lecture.id}: diagnostic/practice/transfer checks required`);
    assert(lecture.sections.every((section) => [...section.content].length >= 45), `${lecture.id}: lecture section is too thin`);
    assert(lecture.workedExamples.every((example) => example.steps.length >= 2 && [...example.why].length >= 30), `${lecture.id}: worked example lacks derivation`);
    assert(new Set(lecture.misconceptions.map((item) => item.belief)).size === 4, `${lecture.id}: repeated misconception`);
    assert(lecture.misconceptions.every((item) => [...item.whyWrong].length >= 18 && [...item.correction].length >= 18), `${lecture.id}: misconception analysis is too thin`);
    assert(lecture.checks.every((item) => [...item.reason].length >= 18), `${lecture.id}: check explanation is too thin`);
    assertTextQuality(lecture.id, lecture);
  }
  const sectionText = lectures.flatMap((lecture) => lecture.sections.map((section) => section.content));
  const exampleWhy = lectures.flatMap((lecture) => lecture.workedExamples.map((example) => example.why));
  assert.equal(new Set(sectionText).size, sectionText.length, "lecture sections must not reuse an exact prose block");
  assert.equal(new Set(exampleWhy).size, exampleWhy.length, "worked examples must not reuse an exact explanation");
  assertNoRepeatedEdgeScaffold(lectures.flatMap((lecture) => lecture.sections.map((section) => ({ id: section.id, text: section.content }))), "lecture section");
  assertNoRepeatedEdgeScaffold(lectures.flatMap((lecture) => lecture.workedExamples.map((example) => ({ id: example.id, text: example.why }))), "worked-example explanation");
  assertUniqueText(lectures.flatMap((lecture) => lecture.misconceptions.map((item, index) => ({ id: `${lecture.id}/misconception-${index + 1}`, text: item.belief }))), "misconception belief");
  assertUniqueText(lectures.flatMap((lecture) => lecture.misconceptions.map((item, index) => ({ id: `${lecture.id}/misconception-${index + 1}`, text: item.whyWrong }))), "misconception analysis");
  assertUniqueText(lectures.flatMap((lecture) => lecture.misconceptions.map((item, index) => ({ id: `${lecture.id}/misconception-${index + 1}`, text: item.correction }))), "misconception correction");
  assertUniqueText(lectures.flatMap((lecture) => lecture.checks.map((item, index) => ({ id: `${lecture.id}/check-${index + 1}`, text: item.reason }))), "check explanation");
  assertNoRepeatedEdgeScaffold(lectures.flatMap((lecture) => lecture.misconceptions.map((item, index) => ({ id: `${lecture.id}/misconception-${index + 1}`, text: item.belief }))), "misconception belief");
  assertNoRepeatedEdgeScaffold(lectures.flatMap((lecture) => lecture.misconceptions.map((item, index) => ({ id: `${lecture.id}/misconception-${index + 1}`, text: item.whyWrong }))), "misconception analysis");
  assertNoRepeatedEdgeScaffold(lectures.flatMap((lecture) => lecture.misconceptions.map((item, index) => ({ id: `${lecture.id}/misconception-${index + 1}`, text: item.correction }))), "misconception correction");
  assertNoRepeatedEdgeScaffold(lectures.flatMap((lecture) => lecture.checks.map((item, index) => ({ id: `${lecture.id}/check-${index + 1}`, text: item.reason }))), "check explanation");
}

function assertStimulusQuality(stimuli, stimulusQuestions) {
  const byStimulus = groupBy(stimulusQuestions, (question) => question.stimulusId);
  for (const stimulus of stimuli) {
    assert.equal(byStimulus.get(stimulus.id)?.length, 3, `${stimulus.id}: exactly three linked questions required`);
    assert.equal(stimulus.accessibility.colorIndependent, true, `${stimulus.id}: color-independent presentation required`);
    assert(stimulus.accessibility.dataFallback?.columns?.length >= 2, `${stimulus.id}: nonvisual data fallback required`);
    assert(stimulus.accessibility.dataFallback?.rows?.length >= 2, `${stimulus.id}: at least two fallback rows required`);
    assert(stimulus.accessibility.dataFallback.rows.every((row) => row.length === stimulus.accessibility.dataFallback.columns.length), `${stimulus.id}: data fallback width mismatch`);
    assert(Array.isArray(stimulus.calibrationRefs), `${stimulus.id}: calibration references must be an array`);
    assert([...studentText(stimulus.content)].length >= 50, `${stimulus.id}: stimulus context is too thin`);
    assertTextQuality(stimulus.id, stimulus);
  }
  assert.equal(new Set(stimuli.map((stimulus) => canonicalJson(stimulus.content))).size, stimuli.length, "stimulus content must be unique");
}

export function assertBiologyAssetSources() {
  assert.equal(BIOLOGY_ASSET_SOURCES.length, 7, "biology must ship exactly seven reviewed SVG assets");
  assert.equal(new Set(BIOLOGY_ASSET_SOURCES.map((source) => source.asset.id)).size, BIOLOGY_ASSET_SOURCES.length, "biology asset IDs must be unique");
  const allowedColors = new Set(["#111", "#777", "#fff", "none"]);
  for (const source of BIOLOGY_ASSET_SOURCES) {
    const asset = source.asset;
    assert.match(asset.caption, /\S/u, `${asset.id}: caption required`);
    assert.match(asset.altText, /\S/u, `${asset.id}: alt text required`);
    assert([...asset.longDescription].length >= 30, `${asset.id}: long description is too thin`);
    assert.equal(asset.accessibility.colorIndependent, true, `${asset.id}: color-independent flag required`);
    assert.equal(asset.accessibility.printSafe, true, `${asset.id}: print-safe flag required`);
    assert(asset.dataFallback?.columns?.length >= 2 && asset.dataFallback?.rows?.length >= 2, `${asset.id}: data fallback required`);
    assert(asset.dataFallback.rows.every((row) => row.length === asset.dataFallback.columns.length), `${asset.id}: data fallback width mismatch`);
    assert.match(source.svg, /<svg\b[^>]*role="img"[^>]*aria-labelledby=/u, `${asset.id}: SVG image semantics missing`);
    assert.match(source.svg, /<title\b[^>]*>[^<]+<\/title>/u, `${asset.id}: SVG title missing`);
    assert.match(source.svg, /<desc\b[^>]*>[^<]+<\/desc>/u, `${asset.id}: SVG description missing`);
    for (const [, color] of source.svg.matchAll(/(?:fill|stroke)="([^"]+)"/gu)) assert(allowedColors.has(color.toLowerCase()), `${asset.id}: non-monochrome SVG color ${color}`);
    const accessibleText = [asset.caption, asset.altText, asset.longDescription, JSON.stringify(asset.dataFallback), source.svg].join("\n");
    for (const label of asset.technical.labels ?? []) {
      for (const token of label.split(/\s+/u)) assert(accessibleText.includes(token), `${asset.id}: technical label ${label} is absent from visual and accessible descriptions`);
    }
  }
}

async function assertStaticSources() {
  const sourceRoot = path.join(SUBJECT_ROOT, "r4", "source", "units");
  const files = (await readdir(sourceRoot)).filter((name) => name.endsWith(".mjs")).sort();
  assert.equal(files.length, 30, "exactly 30 biology unit sources required");
  const forbidden = [/Math\.random/u, /new Function/u, /eval\s*\(/u, /generateQuestion/u, /questionTemplate/u, /\bfor\s*\(/u, /Array\.from\s*\(/u, /\.(?:map|flatMap|reduce)\s*\(/u, /\$\{/u];
  for (const file of files) {
    const source = await readFile(path.join(sourceRoot, file), "utf8");
    for (const pattern of forbidden) assert(!pattern.test(source), `${file}: procedural student-content construction is forbidden (${pattern})`);
  }
}

async function assertLegacyIsolation() {
  const index = await readFile(path.join(SUBJECT_ROOT, "index.html"), "utf8");
  const app = await readFile(path.join(SUBJECT_ROOT, "r4", "ui", "app.js"), "utf8");
  const styles = await readFile(path.join(SUBJECT_ROOT, "r4", "ui", "styles.css"), "utf8");
  const serviceWorker = await readFile(path.join(SUBJECT_ROOT, "sw.js"), "utf8");
  for (const legacy of ["questions.js", "quiz-taxonomy.js", "data.js", "analysis-data.js", "app.js"]) {
    assert(!new RegExp(`[\"'](?:\\./)?${legacy.replace(".", "\\.")}`, "u").test(index), `legacy runtime remains reachable from index: ${legacy}`);
  }
  assert.match(index, /r4\/ui\/app\.js/u, "R4 app is not active");
  assert(!/localStorage\.setItem\(["'`]capBio\./u.test(app), "R4 app must not write legacy capBio keys");
  assert.match(app, /type="radio"/u, "R4 choices must use native radio semantics");
  assert.match(app, /reviewQueue/u, "R4 spaced-review queue missing");
  assert.match(app, /MASTERY_THRESHOLD/u, "R4 mastery threshold missing");
  assert.match(styles, /\.figure-wrap details:not\(\[open\]\)/u, "printable asset alternatives missing");
  const appVersion = app.match(/const CONTENT_VERSION = "([^"]+)"/u)?.[1];
  const workerVersion = serviceWorker.match(/const CONTENT_VERSION = "([^"]+)"/u)?.[1];
  assert(appVersion && appVersion === workerVersion, "app and service-worker content cache versions must match");
  assertTextQuality("BIO_R4_UI", [index, app]);
  for (const relative of ["r4/ui/app.js", "r4/ui/styles.css", "sw.js"]) {
    assert((await stat(path.join(SUBJECT_ROOT, relative)).catch(() => null))?.isFile(), `${relative}: required R4 UI file missing`);
  }
}

export async function validateBiologyStaticUiAssets() {
  assertLanguageGateFixtures();
  assertBiologyAssetSources();
  await assertLegacyIsolation();
  return { assets: BIOLOGY_ASSET_SOURCES.length };
}

function assertFoundationLinks(authority, skills) {
  const authorityIds = new Set(authority.map((record) => record.id));
  const skillIds = new Set(skills.map((record) => record.id));
  const usedAuthority = new Set(skills.flatMap((skill) => skill.authorityRefs));
  assert.deepEqual([...usedAuthority].sort(), [...authorityIds].sort(), "biology authority graph has an orphan or foreign node");
  const prerequisites = new Map(skills.map((skill) => [skill.id, skill.prerequisites]));
  for (const skill of skills) {
    assert(skill.prerequisites.every((id) => skillIds.has(id)), `${skill.id}: prerequisite outside biology skill graph`);
    assert(!skill.prerequisites.includes(skill.id), `${skill.id}: self prerequisite`);
  }
  const complete = new Set();
  const active = new Set();
  function visit(skillId) {
    if (complete.has(skillId)) return;
    assert(!active.has(skillId), `${skillId}: prerequisite cycle`);
    active.add(skillId);
    for (const prerequisite of prerequisites.get(skillId)) visit(prerequisite);
    active.delete(skillId);
    complete.add(skillId);
  }
  for (const skill of skills) visit(skill.id);
}

function assertCatalog(catalog, skills, lectures, skillQuestions, stimuli, stimulusQuestions, assetCount) {
  assert.equal(catalog.schemaVersion, "cap8-r4-biology-catalog-v1");
  assert.equal(catalog.subject, "biology");
  assert.deepEqual(catalog.counts, { ...BIOLOGY_COUNTS, assets: assetCount });
  assert.equal(catalog.units.length, 30, "catalog must expose all 30 biology units");
  assert.equal(catalog.skills.length, skills.length, "catalog skill count mismatch");
  assert.equal(new Set(catalog.units.map((unit) => unit.unitId)).size, 30, "duplicate catalog unit");
  assert.equal(new Set(catalog.skills.map((skill) => skill.id)).size, skills.length, "duplicate catalog skill");
  const runtimeSkillIds = skills.map((skill) => skill.id).sort();
  assert.deepEqual(catalog.skills.map((skill) => skill.id).sort(), runtimeSkillIds, "catalog skill set drift");
  const catalogUnitSkills = catalog.units.flatMap((unit) => unit.skillIds);
  assert.deepEqual([...catalogUnitSkills].sort(), runtimeSkillIds, "catalog units must partition all biology skills");
  assert.equal(new Set(catalogUnitSkills).size, skills.length, "catalog skill appears in more than one unit");
  for (const item of catalog.skills) {
    const skill = skills.find((value) => value.id === item.id);
    assert.equal(item.unitId, skill.unitId, `${item.id}: catalog unit mismatch`);
    assert.deepEqual(item.prerequisites, skill.prerequisites, `${item.id}: catalog prerequisites mismatch`);
    assert.equal(item.lectureId, lectures.find((lecture) => lecture.skillId === item.id)?.id, `${item.id}: catalog lecture mismatch`);
    assert.deepEqual(item.questionIds, skillQuestions.filter((question) => question.skillIds[0] === item.id).map((question) => question.id), `${item.id}: catalog skill-question mismatch`);
    const stimulus = stimuli.find((value) => value.skillId === item.id);
    assert.equal(item.stimulusId, stimulus?.id, `${item.id}: catalog stimulus mismatch`);
    assert.deepEqual(item.stimulusQuestionIds, stimulusQuestions.filter((question) => question.stimulusId === stimulus?.id).map((question) => question.id), `${item.id}: catalog stimulus-question mismatch`);
  }
}

async function assertOfficialMapping(skills, stimuli, skillQuestions) {
  const official = await officialBiologyCandidates();
  const ledger = await readJson(path.join(HERE, "official-item-mapping.json"));
  const calibrationMap = await readJson(path.join(HERE, "official-calibration-map.json"));
  assert.equal(official.length, 220, "official biology calibration inventory drift");
  assert.equal(ledger.schemaVersion, "cap8-r4-biology-official-mapping-v1");
  assert.equal(ledger.records.length, official.length, "official mapping ledger must account for every candidate");
  assert.deepEqual(ledger.records.map((record) => record.candidateId), official.map((record) => record.candidateId), "official mapping ledger order or coverage drift");
  const skillIds = new Set(skills.map((skill) => skill.id));
  const officialById = new Map(official.map((record) => [record.candidateId, record]));
  for (const record of ledger.records) {
    const source = officialById.get(record.candidateId);
    assert(source, `${record.candidateId}: unknown official candidate`);
    if (source.primarySubject === "biology") {
      assert.equal(record.status, "mapped-primary", `${record.candidateId}: primary biology item must be mapped`);
      assert(skillIds.has(record.skillId), `${record.candidateId}: mapped skill does not exist`);
    } else {
      assert.equal(record.status, "cross-subject-reference", `${record.candidateId}: secondary biology item must remain cross-subject`);
      assert.equal(record.skillId, null, `${record.candidateId}: cross-subject item must not claim primary biology calibration`);
    }
    assert.match(record.reviewNote, /\S/u, `${record.candidateId}: review note required`);
  }
  assert.deepEqual(Object.keys(calibrationMap).sort(), [...skillIds].sort(), "calibration map must include every biology skill key");
  const expectedMap = Object.fromEntries([...skillIds].sort().map((skillId) => [skillId, ledger.records.filter((record) => record.skillId === skillId).map((record) => record.candidateId)]));
  assert.deepEqual(calibrationMap, expectedMap, "skill calibration map must be derived from the reviewed candidate ledger");
  for (const stimulus of stimuli) assert.deepEqual(stimulus.calibrationRefs, calibrationMap[stimulus.skillId], `${stimulus.id}: calibration references drifted from ledger`);
  for (const question of skillQuestions) {
    const expected = calibrationMap[question.skillIds[0]];
    assert(expected.every((candidateId) => question.provenance.sourceRefs.includes(candidateId)), `${question.id}: official calibration provenance missing`);
  }
  return official.length;
}

async function assertOriginality(lectures, questions, stimuli) {
  const officialCorpus = (await Promise.all(Array.from({ length: 10 }, (_, index) => 106 + index).map((year) => readFile(path.join(SUBJECT_ROOT, "official-data", String(year), `${year}-exam.txt`), "utf8")))).join("\n");
  const itemRecords = [
    ...questions.map((question) => ({ id: question.id, strings: [question.stem, ...question.options] })),
    ...stimuli.map((stimulus) => ({ id: stimulus.id, strings: visibleStrings(stimulus.content) })),
  ];
  assertNoLongCopiedText(itemRecords, officialCorpus, 28, "official CAP comparison");

  const legacyCorpus = (await Promise.all(["data.js", "questions.js", "quiz-taxonomy.js", "analysis-data.js"].map((name) => readFile(path.join(SUBJECT_ROOT, name), "utf8")))).join("\n");
  const allAuthoredRecords = [
    ...itemRecords,
    ...lectures.map((lecture) => ({
      id: lecture.id,
      strings: [
        ...lecture.objectives,
        ...lecture.sections.flatMap((section) => visibleStrings(section)),
        ...lecture.workedExamples.flatMap((example) => visibleStrings(example)),
        ...lecture.misconceptions.flatMap((item) => visibleStrings(item)),
        ...lecture.checks.flatMap((item) => visibleStrings(item)),
      ],
    })),
  ];
  assertNoLongCopiedText(allAuthoredRecords, legacyCorpus, 36, "legacy-runtime comparison");
}

export async function validateBiology({ repoRoot = REPO_ROOT } = {}) {
  assert.equal(path.resolve(repoRoot), REPO_ROOT, "biology validator currently requires repository root");
  const manifestPath = path.join(SUBJECT_ROOT, "content-manifest-v4.json");
  const manifest = await readJson(manifestPath);
  assert.equal(manifest.subjectId, "biology");
  assert.equal(manifest.schemaVersion, "cap8-content-manifest-v4");
  assert.deepEqual(manifest.counts, { ...BIOLOGY_COUNTS, assets: manifest.counts.assets });
  const { buildSha256, ...manifestBase } = manifest;
  assert.equal(buildSha256, sha256(canonicalJson(manifestBase)), "manifest build hash mismatch");
  const graphBytes = await readFile(path.join(REPO_ROOT, "tools", "cap8-r4", "authority", "frozen-authority-graph.json"));
  assert.equal(manifest.authorityGraphSha256, sha256(graphBytes), "manifest authority graph hash mismatch");
  assert.equal(new Set(manifest.artifacts.map((item) => item.id)).size, manifest.artifacts.length, "duplicate manifest ID");
  assert.equal(new Set(manifest.artifacts.map((item) => item.path)).size, manifest.artifacts.length, "duplicate manifest path");
  for (const descriptor of manifest.artifacts) {
    const bytes = await readFile(repositoryPath(descriptor.path));
    assert.equal(sha256(bytes), descriptor.sha256, `${descriptor.id}: manifest hash mismatch`);
  }
  const runtime = path.join(SUBJECT_ROOT, "r4", "runtime");
  const [authority, skills, lectures, questions, stimuli, assets] = await Promise.all([
    readJsonDirectory(path.join(runtime, "authority")),
    readJsonDirectory(path.join(runtime, "skills")),
    readJsonDirectory(path.join(runtime, "lectures")),
    readJsonDirectory(path.join(runtime, "questions")),
    readJsonDirectory(path.join(runtime, "stimuli")),
    readJsonDirectory(path.join(runtime, "assets")),
  ]);
  const catalog = await readJson(path.join(runtime, "catalog.json"));
  const skillQuestions = questions.filter((question) => question.stimulusId === null);
  const stimulusQuestions = questions.filter((question) => question.stimulusId !== null);
  assert.equal(authority.length, BIOLOGY_COUNTS.authorityNodes);
  assert.equal(skills.length, BIOLOGY_COUNTS.skills);
  assert.equal(lectures.length, BIOLOGY_COUNTS.lectures);
  assert.equal(skillQuestions.length, BIOLOGY_COUNTS.skillQuestions);
  assert.equal(stimulusQuestions.length, BIOLOGY_COUNTS.stimulusQuestions);
  assert.equal(stimuli.length, BIOLOGY_COUNTS.stimuli);
  for (const record of authority) await validateAuthoringRecord("authority", record);
  for (const record of skills) await validateAuthoringRecord("skill", record);
  for (const record of lectures) await validateAuthoringRecord("lecture", record);
  for (const record of questions) await validateAuthoringRecord("question", record);
  for (const record of assets) {
    await validateAuthoringRecord("asset", record);
    assertTextQuality(record.id, record);
    const source = BIOLOGY_ASSET_SOURCES.find((item) => item.asset.id === record.id);
    assert(source, `${record.id}: runtime asset is absent from reviewed source bank`);
    const { sha256: renderedHash, ...runtimeMetadata } = record;
    assert.deepEqual(runtimeMetadata, source.asset, `${record.id}: runtime metadata differs from reviewed source`);
    const renderedSvg = await readFile(repositoryPath(record.path), "utf8");
    assertTextQuality(`${record.id}_SVG`, renderedSvg);
    assert.equal(renderedSvg, `${source.svg}\n`, `${record.id}: rendered SVG differs from reviewed source`);
    assert.equal(sha256(renderedSvg), renderedHash, `${record.id}: rendered asset hash mismatch`);
    assert.equal(record.accessibility.colorIndependent, true, `${record.id}: asset must not rely on color`);
    assert.equal(record.accessibility.printSafe, true, `${record.id}: asset must be print safe`);
  }
  assert.equal(assets.length, BIOLOGY_ASSET_SOURCES.length, "reviewed biology asset-bank count mismatch");
  assert.equal(assets.length, manifest.counts.assets, "asset count mismatch");
  assert.equal(manifest.artifacts.filter((item) => item.type === "asset").length, assets.length, "asset manifest count mismatch");
  const skillIds = new Set(skills.map((skill) => skill.id));
  assert.equal(skillIds.size, skills.length);
  assertFoundationLinks(authority, skills);
  assertCatalog(catalog, skills, lectures, skillQuestions, stimuli, stimulusQuestions, assets.length);
  for (const skill of skills) {
    const bank = skillQuestions.filter((question) => question.skillIds[0] === skill.id);
    assert.equal(bank.length, 12, `${skill.id}: expected 12 skill questions`);
    assert.deepEqual(difficultyCounts(bank), BIOLOGY_DIFFICULTY_DISTRIBUTION, `${skill.id}: difficulty distribution drift`);
    const answerCounts = [0, 1, 2, 3].map((index) => bank.filter((question) => question.answerIndex === index).length);
    assert.deepEqual(answerCounts, [3, 3, 3, 3], `${skill.id}: answer positions must be balanced`);
  }
  const unitBySkill = new Map(skills.map((skill) => [skill.id, skill.unitId]));
  for (const unit of catalog.units) {
    const bank = stimulusQuestions.filter((question) => unitBySkill.get(question.skillIds[0]) === unit.unitId);
    const answerCounts = [0, 1, 2, 3].map((index) => bank.filter((question) => question.answerIndex === index).length);
    assert(Math.max(...answerCounts) - Math.min(...answerCounts) <= 1, `${unit.unitId}: stimulus answer positions are imbalanced (${answerCounts.join(",")})`);
  }
  const stimulusAnswerCounts = [0, 1, 2, 3].map((index) => stimulusQuestions.filter((question) => question.answerIndex === index).length);
  assert.deepEqual(stimulusAnswerCounts, [165, 165, 165, 165], "biology stimulus answer positions must be globally balanced");
  assertNoQuestionDuplicates(questions, skills);
  assertLectureQuality(lectures);
  assertStimulusQuality(stimuli, stimulusQuestions);
  for (const question of questions) {
    assertQuestionQuality(question);
    assertTextQuality(question.id, question);
  }
  const officialCount = await assertOfficialMapping(skills, stimuli, skillQuestions);
  await assertOriginality(lectures, questions, stimuli);
  await assertStaticSources();
  await validateBiologyStaticUiAssets();
  return {
    counts: { authority: authority.length, skills: skills.length, lectures: lectures.length, skillQuestions: skillQuestions.length, stimulusQuestions: stimulusQuestions.length, stimuli: stimuli.length, assets: assets.length },
    manifestSha256: sha256(await readFile(manifestPath)),
    officialCalibrationItems: officialCount,
  };
}

async function main() {
  if (process.argv.includes("--static-only")) {
    const result = await validateBiologyStaticUiAssets();
    console.log(`validate-biology: static UI/assets OK - ${result.assets} assets`);
    return;
  }
  const result = await validateBiology();
  console.log(`validate-biology: OK - ${JSON.stringify(result.counts)}, 106-115 calibration ${result.officialCalibrationItems}/220`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
