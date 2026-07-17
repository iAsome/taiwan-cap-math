import { createHash } from "node:crypto";
import { existsSync } from "node:fs";
import { mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

export const INTEGRATED_NATURAL_BASE_COMMIT = "6d385e76d72652677cb4c6337f6042ae0db4a77a";

const TARGET_DIRECTORY = "自然會考作戰室";
const SUBJECTS = Object.freeze({
  biology: {
    root: "生物會考作戰室/r4",
    questionDirectory: "runtime/questions",
    stimulusDirectory: "runtime/stimuli",
    skillDirectory: "runtime/skills",
    assetDirectory: "runtime/assets",
  },
  physics_chemistry: {
    root: "理化會考作戰室/r4",
    questionDirectory: "runtime/questions",
    stimulusDirectory: "runtime/stimuli",
    skillDirectory: "runtime/skills",
    assetDirectory: "runtime/assets",
  },
  earth_science: {
    root: "地科會考作戰室/r4",
    questionDirectory: "runtime/questions",
    stimulusDirectory: "runtime/stimuli",
    skillDirectory: "runtime/skills",
    assetFile: "runtime/assets.json",
  },
});

function asPath(root, slashPath) {
  return path.join(root, ...slashPath.split("/"));
}

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function stableJson(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

async function parseJson(file) {
  return JSON.parse(await readFile(file, "utf8"));
}

async function indexDirectory(directory) {
  const index = new Map();
  const files = (await readdir(directory, { withFileTypes: true }))
    .filter((entry) => entry.isFile() && entry.name.endsWith(".json"))
    .map((entry) => path.join(directory, entry.name))
    .sort((left, right) => left.localeCompare(right, "en"));
  for (const file of files) {
    const parsed = await parseJson(file);
    for (const record of Array.isArray(parsed) ? parsed : [parsed]) {
      if (!record?.id) continue;
      if (index.has(record.id)) throw new Error(`重複來源 ID：${record.id}`);
      index.set(record.id, { record, file });
    }
  }
  return index;
}

async function indexFile(file) {
  const parsed = await parseJson(file);
  const records = Array.isArray(parsed) ? parsed : [parsed];
  return new Map(records.map((record) => [record.id, { record, file }]));
}

function requireRecord(index, id, kind) {
  const found = index.get(id);
  if (!found) throw new Error(`找不到${kind} ${id}`);
  return found;
}

function stringAssetIds(record) {
  return [...(record?.assetIds || []), ...(record?.assets || [])].filter((value) => typeof value === "string");
}

async function sourceIndexes(repoRoot) {
  const result = {};
  for (const [subject, config] of Object.entries(SUBJECTS)) {
    const subjectRoot = asPath(repoRoot, config.root);
    result[subject] = {
      questions: await indexDirectory(asPath(subjectRoot, config.questionDirectory)),
      stimuli: await indexDirectory(asPath(subjectRoot, config.stimulusDirectory)),
      skills: await indexDirectory(asPath(subjectRoot, config.skillDirectory)),
      assets: config.assetDirectory
        ? await indexDirectory(asPath(subjectRoot, config.assetDirectory))
        : await indexFile(asPath(subjectRoot, config.assetFile)),
    };
  }
  return result;
}

function relativeRepoPath(repoRoot, file) {
  return path.relative(repoRoot, file).split(path.sep).join("/");
}

async function dependencyRecord(repoRoot, file) {
  const bytes = await readFile(file);
  return { path: relativeRepoPath(repoRoot, file), sha256: sha256(bytes) };
}

const SVG_PRESENTATION_REPAIRS = Object.freeze({
  EARTH_R4_ASSET_CARBON: [
    ["M105 340 86 280 295 105", "M105 340 35 300 35 155 295 95"],
    ["<text x=\"210\" y=\"145\">光合作用</text>", "<rect x=\"202\" y=\"128\" width=\"78\" height=\"21\" fill=\"#fff\"/><text x=\"210\" y=\"145\">光合作用</text>"],
    ["<text x=\"237\" y=\"185\">呼吸、分解</text>", "<rect x=\"229\" y=\"168\" width=\"90\" height=\"21\" fill=\"#fff\"/><text x=\"237\" y=\"185\">呼吸、分解</text>"],
    ["<text x=\"505\" y=\"145\">海氣交換</text>", "<rect x=\"497\" y=\"128\" width=\"82\" height=\"21\" fill=\"#fff\"/><text x=\"505\" y=\"145\">海氣交換</text>"],
    ["<text x=\"625\" y=\"306\">沉降</text>", "<rect x=\"617\" y=\"289\" width=\"48\" height=\"21\" fill=\"#fff\"/><text x=\"625\" y=\"306\">沉降</text>"],
    ["<text x=\"355\" y=\"367\">地質作用</text>", "<rect x=\"347\" y=\"350\" width=\"82\" height=\"21\" fill=\"#fff\"/><text x=\"355\" y=\"367\">地質作用</text>"],
    ["<text x=\"180\" y=\"250\">火山與風化</text>", "<rect x=\"174\" y=\"272\" width=\"108\" height=\"21\" fill=\"#fff\"/><text x=\"180\" y=\"288\">火山與風化</text>"],
    ["<text x=\"70\" y=\"300\" font-weight=\"700\">化石燃料燃燒（人為新增）</text>", "<rect x=\"30\" y=\"124\" width=\"224\" height=\"23\" fill=\"#fff\"/><text x=\"38\" y=\"141\" font-weight=\"700\">化石燃料燃燒（人為新增）</text>"],
    ["<rect x=\"25\" y=\"420\" width=\"710\" height=\"23\" fill=\"#f3f3f3\"/><text x=\"38\" y=\"437\" font-size=\"13\">圖例：方框＝碳庫；細箭頭＝自然交換；粗字標示＝人為快速移入大氣。系統邊界為全球長期碳循環。</text>", "<rect x=\"25\" y=\"414\" width=\"710\" height=\"40\" fill=\"#f3f3f3\"/><g font-size=\"13\"><text x=\"38\" y=\"432\">圖例：方框＝碳庫；細箭頭＝自然交換；粗字標示＝人為快速移入大氣。</text><text x=\"38\" y=\"449\">系統邊界為全球長期碳循環。</text></g>"],
  ],
  EARTH_R4_ASSET_CLIMATE_GRAPH: [
    ["<rect x=\"85\" y=\"408\" width=\"590\" height=\"28\" fill=\"#f3f3f3\" stroke=\"#111\"/><text x=\"98\" y=\"428\" font-size=\"13\">圖例：斜線柱＝月降水量（左軸，mm）｜黑色折線＝月均溫（右軸，°C）｜所有數值為原創教學合成。</text>", "<rect x=\"85\" y=\"402\" width=\"590\" height=\"46\" fill=\"#f3f3f3\" stroke=\"#111\"/><g font-size=\"13\"><text x=\"98\" y=\"421\">圖例：斜線柱＝月降水量（左軸，mm）｜黑色折線＝月均溫（右軸，°C）</text><text x=\"98\" y=\"439\">所有數值為原創教學合成。</text></g>"],
  ],
  EARTH_R4_ASSET_PLATE: [
    ["<rect x=\"24\" y=\"382\" width=\"732\" height=\"38\" fill=\"#f3f3f3\" stroke=\"#111\"/><text x=\"37\" y=\"406\" font-size=\"14\">圖例：粗灰帶＝板塊｜箭頭＝相對運動｜●＝震源｜三角錐＝火山；剖面方向依各面板箭頭，不代表固定地理方位。</text>", "<rect x=\"24\" y=\"378\" width=\"732\" height=\"52\" fill=\"#f3f3f3\" stroke=\"#111\"/><g font-size=\"14\"><text x=\"37\" y=\"399\">圖例：粗灰帶＝板塊｜箭頭＝相對運動｜●＝震源｜三角錐＝火山</text><text x=\"37\" y=\"419\">剖面方向依各面板箭頭，不代表固定地理方位。</text></g>"],
  ],
  EARTH_R4_ASSET_SEISMIC: [
    ["<rect x=\"70\" y=\"405\" width=\"640\" height=\"22\" fill=\"#f3f3f3\"/><text x=\"84\" y=\"421\" font-size=\"13\">座標：時間（s）×相對振幅；P–S到時差＝12 s。波形為示意，不能直接當規模或震度。</text>", "<rect x=\"70\" y=\"399\" width=\"640\" height=\"37\" fill=\"#f3f3f3\"/><g font-size=\"13\"><text x=\"84\" y=\"416\">座標：時間（s）×相對振幅；P–S到時差＝12 s。</text><text x=\"84\" y=\"432\">波形為示意，不能直接當規模或震度。</text></g>"],
  ],
  EARTH_R4_ASSET_TIDE: [
    ["<rect x=\"76\" y=\"395\" width=\"590\" height=\"25\" fill=\"#f3f3f3\"/><text x=\"88\" y=\"413\" font-size=\"13\">座標：時間（時）× 潮位（m）；量測間隔1小時，曲線僅連接觀測點；來源：Codex原創教學合成資料。</text>", "<rect x=\"76\" y=\"391\" width=\"590\" height=\"42\" fill=\"#f3f3f3\"/><g font-size=\"13\"><text x=\"88\" y=\"408\">座標：時間（時）× 潮位（m）；量測間隔1小時，曲線僅連接觀測點。</text><text x=\"88\" y=\"426\">來源：Codex 原創教學合成資料。</text></g>"],
  ],
  EARTH_R4_ASSET_WEATHER_MAP: [
    ["<rect x=\"24\" y=\"374\" width=\"672\" height=\"46\" fill=\"#f3f3f3\" stroke=\"#111\"/>", "<rect x=\"24\" y=\"366\" width=\"672\" height=\"69\" fill=\"#f3f3f3\" stroke=\"#111\"/>"],
    ["<text x=\"37\" y=\"394\" font-size=\"14\">圖例：H 高壓｜L 低壓｜線為等壓線（間隔4 hPa）｜▲ 冷鋒移動方向｜⌒ 暖鋒移動方向</text>", "<g font-size=\"14\"><text x=\"37\" y=\"384\">圖例：H 高壓｜L 低壓｜線為等壓線（間隔4 hPa）</text><text x=\"37\" y=\"401\">▲ 冷鋒移動方向｜⌒ 暖鋒移動方向</text></g>"],
    ["<text x=\"37\" y=\"414\" font-size=\"13\">方向：上北；尺度／投影：教學示意，非等距、不可量距；時間：2026-07-16 08:00 教學合成資料</text>", "<g font-size=\"13\"><text x=\"37\" y=\"418\">方向：上北；尺度／投影：教學示意，非等距、不可量距</text><text x=\"37\" y=\"432\">時間：2026-07-16 08:00 教學合成資料</text></g>"],
  ],
});

function repairSvgForIntegratedDisplay(id, sourceText) {
  let result = sourceText;
  for (const [before, after] of SVG_PRESENTATION_REPAIRS[id] || []) {
    if (!result.includes(before)) throw new Error(`整合圖形修復錨點消失：${id}`);
    result = result.replace(before, after);
  }
  return result;
}

async function copyAsset(repoRoot, targetAssetDirectory, source) {
  const sourcePath = asPath(repoRoot, source.record.path);
  const bytes = await readFile(sourcePath);
  const actualHash = sha256(bytes);
  if (source.record.sha256 !== actualHash) throw new Error(`資產雜湊不符：${source.record.id}`);
  const extension = path.extname(sourcePath).toLowerCase() || ".svg";
  const outputName = `${source.record.id}${extension}`;
  const outputPath = path.join(targetAssetDirectory, outputName);
  const sourceText = extension === ".svg" ? bytes.toString("utf8") : null;
  const outputBytes = sourceText === null ? bytes : Buffer.from(repairSvgForIntegratedDisplay(source.record.id, sourceText), "utf8");
  await writeFile(outputPath, outputBytes);
  const presentationRepair = !outputBytes.equals(bytes) ? "integrated-natural-svg-legibility-v1" : undefined;
  return {
    record: {
      ...source.record,
      runtimePath: `assets/${outputName}`,
      runtimeSha256: sha256(outputBytes),
      ...(presentationRepair ? { presentationRepair } : {}),
    },
    sourceFile: source.file,
    sourceAssetFile: sourcePath,
    outputPath,
  };
}

function parseArguments(argv, defaultRepoRoot) {
  const options = { repoRoot: defaultRepoRoot, outputRoot: defaultRepoRoot };
  for (let index = 0; index < argv.length; index += 2) {
    const key = argv[index];
    const value = argv[index + 1];
    if (!value || !["--repo-root", "--output-root"].includes(key)) throw new Error(`不支援的參數：${key || "(空白)"}`);
    if (key === "--repo-root") options.repoRoot = path.resolve(value);
    if (key === "--output-root") options.outputRoot = path.resolve(value);
  }
  return options;
}

export async function buildIntegratedNatural({ repoRoot, outputRoot = repoRoot } = {}) {
  if (!repoRoot) throw new TypeError("repoRoot 為必填。 ");
  const blueprintFile = path.join(repoRoot, TARGET_DIRECTORY, "source-blueprint.json");
  const blueprint = await parseJson(blueprintFile);
  const indexes = await sourceIndexes(repoRoot);
  const dependencies = new Map([[blueprintFile, await dependencyRecord(repoRoot, blueprintFile)]]);
  const questions = [];
  const stimulusIds = new Map();
  const skillIds = new Map();
  const assetIds = new Map();

  for (const entry of blueprint.questionPool) {
    const source = requireRecord(indexes[entry.subject]?.questions || new Map(), entry.questionId, "題目");
    if (source.record.subject !== entry.subject) throw new Error(`題目科別不符：${entry.questionId}`);
    questions.push(source.record);
    dependencies.set(source.file, await dependencyRecord(repoRoot, source.file));
    for (const skillId of source.record.skillIds || []) skillIds.set(skillId, entry.subject);
    if (source.record.stimulusId) stimulusIds.set(source.record.stimulusId, entry.subject);
    for (const assetId of stringAssetIds(source.record)) assetIds.set(assetId, entry.subject);
  }

  const stimuli = [];
  for (const [id, subject] of [...stimulusIds].sort(([left], [right]) => left.localeCompare(right, "en"))) {
    const source = requireRecord(indexes[subject].stimuli, id, "題組");
    stimuli.push(source.record);
    dependencies.set(source.file, await dependencyRecord(repoRoot, source.file));
    for (const skillId of source.record.skillIds || (source.record.skillId ? [source.record.skillId] : [])) skillIds.set(skillId, subject);
    for (const assetId of stringAssetIds(source.record)) assetIds.set(assetId, subject);
  }

  const skills = [];
  for (const [id, subject] of [...skillIds].sort(([left], [right]) => left.localeCompare(right, "en"))) {
    const source = requireRecord(indexes[subject].skills, id, "技能");
    skills.push(source.record);
    dependencies.set(source.file, await dependencyRecord(repoRoot, source.file));
  }

  const targetRoot = path.join(outputRoot, TARGET_DIRECTORY);
  const runtimeDirectory = path.join(targetRoot, "runtime");
  const targetAssetDirectory = path.join(targetRoot, "assets");
  await rm(runtimeDirectory, { recursive: true, force: true });
  await rm(targetAssetDirectory, { recursive: true, force: true });
  await mkdir(runtimeDirectory, { recursive: true });
  await mkdir(targetAssetDirectory, { recursive: true });

  const assets = [];
  const copiedAssets = [];
  for (const [id, subject] of [...assetIds].sort(([left], [right]) => left.localeCompare(right, "en"))) {
    const copied = await copyAsset(repoRoot, targetAssetDirectory, requireRecord(indexes[subject].assets, id, "資產"));
    assets.push(copied.record);
    copiedAssets.push(copied);
    dependencies.set(copied.sourceFile, await dependencyRecord(repoRoot, copied.sourceFile));
    dependencies.set(copied.sourceAssetFile, await dependencyRecord(repoRoot, copied.sourceAssetFile));
  }

  const catalog = {
    schemaVersion: 4,
    id: "CAP8_R4_INTEGRATED_NATURAL_CATALOG",
    contentVersion: blueprint.contentVersion,
    label: "整合自然 CAP R4 原創練習",
    sourceMode: "reviewed-static-id-selection-only",
    exam: blueprint.officialCalibration,
    pool: blueprint.questionPool,
    questions,
    stimuli,
    skills,
    assets,
  };
  const catalogFile = path.join(runtimeDirectory, "catalog.json");
  await writeFile(catalogFile, stableJson(catalog), "utf8");

  const assetCachePaths = assets.map((asset) => `./${asset.runtimePath}`).sort((left, right) => left.localeCompare(right, "en"));
  const precache = [
    "./",
    "./index.html",
    "./styles.css",
    "./app.mjs",
    "./exam-engine.mjs",
    "./migration.mjs",
    "./manifest.webmanifest",
    "./sw.js",
    "./runtime/catalog.json",
    "./runtime/precache.json",
    "./runtime/build-manifest.json",
    ...assetCachePaths,
  ];
  const precacheFile = path.join(runtimeDirectory, "precache.json");
  await writeFile(precacheFile, stableJson(precache), "utf8");

  const artifactFiles = [catalogFile, precacheFile, ...copiedAssets.map((item) => item.outputPath)];
  const artifacts = {};
  for (const file of artifactFiles.sort((left, right) => left.localeCompare(right, "en"))) {
    artifacts[relativeRepoPath(outputRoot, file)] = sha256(await readFile(file));
  }
  const manifest = {
    schemaVersion: 1,
    id: "CAP8_R4_INTEGRATED_NATURAL_BUILD",
    sourceCommit: INTEGRATED_NATURAL_BASE_COMMIT,
    deterministic: true,
    questionCount: questions.length,
    stimulusCount: stimuli.length,
    skillCount: skills.length,
    assetCount: assets.length,
    dependencies: [...dependencies.values()].sort((left, right) => left.path.localeCompare(right.path, "en")),
    artifacts,
  };
  await writeFile(path.join(runtimeDirectory, "build-manifest.json"), stableJson(manifest), "utf8");
  return { catalog, manifest, targetRoot };
}

const defaultRepoRoot = fileURLToPath(new URL("../..", import.meta.url));
if (process.argv[1] && import.meta.url === pathToFileURL(path.resolve(process.argv[1])).href) {
  const options = parseArguments(process.argv.slice(2), defaultRepoRoot);
  if (!existsSync(path.join(options.repoRoot, ".git"))) throw new Error(`不是 Git 工作樹：${options.repoRoot}`);
  const result = await buildIntegratedNatural(options);
  console.log(`integrated-natural-build: OK — ${result.manifest.questionCount} questions, ${result.manifest.stimulusCount} stimuli, ${result.manifest.assetCount} assets`);
}
