import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { materializeAllEnglishUnits, materializeEnglishQuestion } from "./build-english-unit.mjs";
import { validateAuthoringRecord } from "./authoring-validator.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const ENGLISH_FOLDER = "英文會考作戰室";
const GRAPH_PATH = path.join(HERE, "authority", "frozen-authority-graph.json");
const CONTENT_VERSION = "4.0.0";
const READING_EXPORT = "ENGLISH_READING_STIMULI";
const LISTENING_EXPORT = "ENGLISH_LISTENING_STIMULI";

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function jsonBytes(value) {
  return Buffer.from(`${JSON.stringify(value, null, 2)}\n`, "utf8");
}

function normalized(value) {
  return value.normalize("NFKC").toLowerCase().replace(/\s+/gu, " ").trim();
}

function assertUnique(values, label) {
  assert.equal(new Set(values).size, values.length, `duplicate ${label}`);
}

async function loadStimulusBatches(kind, exportName, { repoRoot = REPO_ROOT } = {}) {
  const folder = path.join(repoRoot, ENGLISH_FOLDER, "r4", "source", "stimuli", kind);
  let files;
  try {
    files = (await readdir(folder)).filter((file) => file.endsWith(".mjs")).sort();
  } catch (error) {
    if (error.code === "ENOENT") throw new Error(`English ${kind} source folder is missing: ${folder}`);
    throw error;
  }
  assert(files.length > 0, `English ${kind} source folder has no .mjs batches`);
  const batches = [];
  for (const file of files) {
    const values = (await import(pathToFileURL(path.join(folder, file)).href))[exportName];
    assert(Array.isArray(values), `${kind}/${file}: ${exportName} array export missing`);
    assert(values.length > 0, `${kind}/${file}: empty batch`);
    batches.push(...values);
  }
  return batches;
}

function skillNumber(skillId) {
  const match = /^ENG_R4_S(\d{3})$/.exec(skillId);
  assert(match, `invalid English skill ID: ${skillId}`);
  return Number(match[1]);
}

async function materializeStimulusQuestion(value, stimulusId, skillById, { listening = false, audioId = null, visualAssetId = null } = {}) {
  const skill = skillById.get(value.skillId);
  assert(skill, `${value.id}: unknown English skill ${value.skillId}`);
  const number = skillNumber(skill.id);
  assert(number >= (listening ? 309 : 231) && number <= (listening ? 320 : 308), `${value.id}: skill does not match stimulus kind`);
  const question = materializeEnglishQuestion(value, skill, { stimulusId, assets: [audioId, visualAssetId].filter(Boolean) });
  assert.equal(question.options.length, 4, `${question.id}: stimulus question must have four choices`);
  await validateAuthoringRecord("question", question);
  return question;
}

async function materializeReading(values, skillById) {
  assert.equal(values.length, 500, "English reading passage total mismatch");
  const result = [];
  for (const value of values) {
    assert.match(value.id, /^ENG_R4_READ_\d{3}$/);
    assert(value.passage?.trim(), `${value.id}: passage missing`);
    assert(Array.isArray(value.glossary), `${value.id}: glossary array missing`);
    assert.equal(value.questions?.length, 4, `${value.id}: four reading questions required`);
    const questions = [];
    for (const question of value.questions) questions.push(await materializeStimulusQuestion(question, value.id, skillById));
    result.push({ id: value.id, passage: value.passage, glossary: value.glossary, questions, provenance: value.provenance });
  }
  assertUnique(result.map((value) => value.id), "reading stimulus ID");
  assertUnique(result.map((value) => normalized(value.passage)), "normalized reading passage");
  return result;
}

async function materializeListening(values, skillById, assetById) {
  assert.equal(values.length, 300, "English listening stimulus total mismatch");
  const result = [];
  for (const value of values) {
    assert.match(value.id, /^ENG_R4_LISTEN_\d{3}$/);
    assert(["picture", "response", "discourse"].includes(value.section), `${value.id}: invalid listening section`);
    assert(value.transcript?.trim(), `${value.id}: transcript missing`);
    assert(value.spokenText?.trim(), `${value.id}: spokenText missing`);
    assert(value.audioDescription?.trim(), `${value.id}: audioDescription missing`);
    assert.equal(value.questions?.length, 3, `${value.id}: three listening questions required`);
    const visualAsset=value.visualAssetId?assetById.get(value.visualAssetId):null;
    assert(value.section!=="picture"||visualAsset,`${value.id}: picture listening set requires a governed visual asset`);
    const audioId = value.id.replace("_LISTEN_", "_AUDIO_");
    const questions = [];
    for (const question of value.questions) questions.push(await materializeStimulusQuestion(question, value.id, skillById, { listening: true, audioId, visualAssetId:value.visualAssetId??null }));
    result.push({
      id: value.id,
      section: value.section,
      transcript: value.transcript,
      spokenText: value.spokenText,
      audioDescription: value.audioDescription,
      pauseMs: value.pauseMs ?? 3_000,
      voiceProfile: value.voiceProfile ?? { voice: "Microsoft Zira Desktop", rate: -1 },
      audioId,
      audioPath: `runtime/audio/${audioId}.wav`,
      visualAssets: visualAsset ? [visualAsset.metadata] : [],
      questions,
      provenance: value.provenance,
    });
  }
  assertUnique(result.map((value) => value.id), "listening stimulus ID");
  assertUnique(result.map((value) => normalized(value.transcript)), "normalized listening transcript");
  return result;
}

export function synthesizeWave(text, { voice, rate }) {
  assert.equal(voice, "Microsoft Zira Desktop", `unsupported installed voice: ${voice}`);
  assert(Number.isInteger(rate) && rate >= -4 && rate <= 2, `invalid speech rate: ${rate}`);
  const encodedText = Buffer.from(text, "utf8").toString("base64");
  const script = [
    "Add-Type -AssemblyName System.Speech",
    `$text=[Text.Encoding]::UTF8.GetString([Convert]::FromBase64String('${encodedText}'))`,
    "$speaker=New-Object System.Speech.Synthesis.SpeechSynthesizer",
    `$speaker.SelectVoice('${voice}')`,
    `$speaker.Rate=${rate}`,
    "$stream=New-Object IO.MemoryStream",
    "$speaker.SetOutputToWaveStream($stream)",
    "$speaker.Speak($text)",
    "$speaker.Dispose()",
    "$bytes=$stream.ToArray()",
    "[Console]::OpenStandardOutput().Write($bytes,0,$bytes.Length)",
  ].join(";");
  const encodedCommand = Buffer.from(script, "utf16le").toString("base64");
  return new Promise((resolve, reject) => {
    const child = spawn("powershell.exe", ["-NoProfile", "-NonInteractive", "-EncodedCommand", encodedCommand], { windowsHide: true, stdio: ["ignore", "pipe", "pipe"] });
    const stdout = [];
    const stderr = [];
    child.stdout.on("data", (chunk) => stdout.push(chunk));
    child.stderr.on("data", (chunk) => stderr.push(chunk));
    child.on("error", reject);
    child.on("close", (code) => {
      if (code !== 0) return reject(new Error(`audio synthesis failed (${code}): ${Buffer.concat(stderr).toString("utf8")}`));
      const bytes = Buffer.concat(stdout);
      assert(bytes.length > 44, "synthesized WAV is empty");
      assert.equal(bytes.subarray(0, 4).toString("ascii"), "RIFF", "synthesized audio lacks RIFF header");
      assert.equal(bytes.subarray(8, 12).toString("ascii"), "WAVE", "synthesized audio lacks WAVE header");
      resolve(bytes);
    });
  });
}

async function prepareAudio(listening, { concurrency = 4 } = {}) {
  const prepared = new Array(listening.length);
  let cursor = 0;
  async function worker() {
    while (cursor < listening.length) {
      const index = cursor++;
      const value = listening[index];
      const bytes = await synthesizeWave(value.spokenText, value.voiceProfile);
      const metadata = {
        id: value.audioId,
        subject: "english",
        skillIds: [...new Set(value.questions.flatMap((question) => question.skillIds))],
        type: "audio",
        path: `${ENGLISH_FOLDER}/r4/${value.audioPath}`,
        sha256: sha256(bytes),
        creator: "Codex R4 English content author using the locally installed Microsoft Zira Desktop voice",
        source: "Original locked script synthesized locally; no third-party recording copied.",
        license: "Original project asset; generated from original project-authored script.",
        originality: "original",
        transformationRecord: "Deterministic local text-to-speech rendering of the locked transcript.",
        calibrationRefs: [...new Set(value.questions.flatMap((question) => question.authorityRefs))],
        caption: `Listening set ${value.id.slice(-3)}`,
        altText: value.audioDescription,
        longDescription: `The locked transcript is: ${value.transcript}`,
        accessibility: { colorIndependent: true, printSafe: true },
        transcript: value.transcript,
        technical: {
          scriptSha256: sha256(Buffer.from(value.spokenText, "utf8")),
          voice: value.voiceProfile.voice,
          rate: `System.Speech rate ${value.voiceProfile.rate}`,
          pausePattern: `Set replay pause ${value.pauseMs} ms; the interface plays the same locked recording twice.`,
        },
      };
      await validateAuthoringRecord("asset", metadata);
      prepared[index] = { id: value.audioId, bytes, metadata };
    }
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, listening.length) }, worker));
  return prepared;
}

function assertGlobalQuestionUniqueness(questions) {
  assertUnique(questions.map((value) => value.id), "English question ID");
  assertUnique(questions.map((value) => JSON.stringify([
    normalized(value.stem),
    value.options.map(normalized).sort(),
  ])), "normalized English visible question");
}

export async function materializeEnglishCorpus({ repoRoot = REPO_ROOT, synthesizeAudio = true } = {}) {
  const skillCorpus = await materializeAllEnglishUnits({ repoRoot });
  const skillById = new Map(skillCorpus.skills.map((skill) => [skill.id, skill]));
  const assetById = new Map(skillCorpus.assets.map((asset) => [asset.metadata.id, asset]));
  const [readingSource, listeningSource] = await Promise.all([
    loadStimulusBatches("reading", READING_EXPORT, { repoRoot }),
    loadStimulusBatches("listening", LISTENING_EXPORT, { repoRoot }),
  ]);
  const [reading, listening] = await Promise.all([
    materializeReading(readingSource, skillById),
    materializeListening(listeningSource, skillById, assetById),
  ]);
  const stimulusQuestions = [...reading, ...listening].flatMap((value) => value.questions);
  assert.equal(stimulusQuestions.length, 2_900, "English stimulus-question total mismatch");
  assertGlobalQuestionUniqueness([...skillCorpus.questions, ...stimulusQuestions]);
  const audio = synthesizeAudio ? await prepareAudio(listening) : [];
  if (synthesizeAudio) assert.equal(audio.length, 300, "English audio total mismatch");
  return { ...skillCorpus, reading, listening, stimulusQuestions, audio };
}

async function outputFiles(corpus, repoRoot) {
  assert.equal(corpus.audio.length, 300, "write requires fully prepared in-memory audio");
  const graphBytes = await readFile(GRAPH_PATH);
  const graph = JSON.parse(graphBytes.toString("utf8"));
  const graphUnits = new Map(graph.units.filter((unit) => unit.subject === "english").map((unit) => [unit.id, unit]));
  const files = new Map();
  const putJson = (relative, value) => files.set(relative.replaceAll("\\", "/"), jsonBytes(value));
  for (const unit of corpus.units) {
    const info = graphUnits.get(unit.unitId);
    assert(info, `${unit.unitId}: frozen unit metadata missing`);
    putJson(`${ENGLISH_FOLDER}/r4/runtime/bundles/${unit.unitId}.json`, { unitId: unit.unitId, skills: unit.skills, lectures: unit.lectures, questions: unit.questions, assets: unit.assets.map((value) => value.metadata) });
  }
  for (const value of corpus.lectures) putJson(`${ENGLISH_FOLDER}/r4/runtime/lectures/${value.id}.json`, value);
  for (const value of [...corpus.questions, ...corpus.stimulusQuestions]) putJson(`${ENGLISH_FOLDER}/r4/runtime/questions/${value.id}.json`, value);
  for (const value of [...corpus.reading, ...corpus.listening]) putJson(`${ENGLISH_FOLDER}/r4/runtime/stimuli/${value.id}.json`, value);
  putJson(`${ENGLISH_FOLDER}/r4/runtime/reading.json`, corpus.reading);
  putJson(`${ENGLISH_FOLDER}/r4/runtime/listening.json`, corpus.listening.map(({ spokenText, voiceProfile, audioDescription, ...value }) => value));
  for (const value of corpus.audio) files.set(`${ENGLISH_FOLDER}/r4/runtime/audio/${value.id}.wav`, value.bytes);
  for (const value of corpus.assets) files.set(value.metadata.path, Buffer.from(value.content, "utf8"));
  const units = corpus.units.map((unit) => {
    const info = graphUnits.get(unit.unitId);
    return {
      id: unit.unitId,
      title: info.title,
      skills: unit.skills.map(({ id, title }) => ({ id, title })),
      questionCount: unit.questions.length,
      bundle: `runtime/bundles/${unit.unitId}.json`,
      languageComponent: Number(unit.unitId.slice(-2)) <= 33,
    };
  });
  putJson(`${ENGLISH_FOLDER}/r4/runtime/catalog.json`, {
    schemaVersion: "cap8-r4-english-runtime-v1",
    contentVersion: CONTENT_VERSION,
    counts: { skills: 320, skillQuestions: 3_840, readingPassages: 500, listeningStimuli: 300, stimulusQuestions: 2_900 },
    units,
    reading: { bundle: "runtime/reading.json" },
    listening: { bundle: "runtime/listening.json" },
    audioPaths: corpus.audio.map((value) => `runtime/audio/${value.id}.wav`),
  });
  return { files, graphBytes };
}

function descriptor(id, type, relative, bytes) {
  return { id, type, path: relative.replaceAll("\\", "/"), sha256: sha256(bytes) };
}

async function manifestFor(corpus, files, graphBytes, repoRoot) {
  const artifacts = [];
  const trackedKinds = [
    ["authority", path.join(repoRoot, ENGLISH_FOLDER, "r4", "runtime", "authority")],
    ["skill", path.join(repoRoot, ENGLISH_FOLDER, "r4", "runtime", "skills")],
  ];
  for (const [type, folder] of trackedKinds) {
    for (const file of (await readdir(folder)).filter((value) => value.endsWith(".json")).sort()) {
      const bytes = await readFile(path.join(folder, file));
      const value = JSON.parse(bytes.toString("utf8"));
      artifacts.push(descriptor(value.id, type, `${ENGLISH_FOLDER}/r4/runtime/${type === "skill" ? "skills" : "authority"}/${file}`, bytes));
    }
  }
  for (const [relative, bytes] of files) {
    if (relative.includes("/runtime/lectures/")) artifacts.push(descriptor(path.basename(relative, ".json"), "lecture", relative, bytes));
    else if (relative.includes("/runtime/questions/")) artifacts.push(descriptor(path.basename(relative, ".json"), "question", relative, bytes));
    else if (relative.includes("/runtime/stimuli/")) artifacts.push(descriptor(path.basename(relative, ".json"), "stimulus", relative, bytes));
    else if (relative.includes("/runtime/audio/")) artifacts.push(descriptor(path.basename(relative, ".wav"), "asset", relative, bytes));
    else if (relative.includes("/runtime/assets/")) artifacts.push(descriptor(path.basename(relative, path.extname(relative)), "asset", relative, bytes));
  }
  const uiRelatives = ["index.html", "styles.css", "app.mjs", "service-worker.js", "manifest.webmanifest"];
  for (const name of uiRelatives) {
    const relative = `${ENGLISH_FOLDER}/r4/${name}`;
    const bytes = await readFile(path.join(repoRoot, relative));
    artifacts.push(descriptor(`ENG_R4_UI_${name.replace(/[^A-Za-z0-9]+/g, "_").toUpperCase()}`, "ui", relative, bytes));
  }
  for (const [relative, bytes] of files) {
    if (relative.endsWith("/runtime/catalog.json") || relative.endsWith("/runtime/reading.json") || relative.endsWith("/runtime/listening.json") || relative.includes("/runtime/bundles/")) {
      artifacts.push(descriptor(`ENG_R4_UI_${path.basename(relative, ".json").replace(/[^A-Za-z0-9]+/g, "_").toUpperCase()}`, "ui", relative, bytes));
    }
  }
  assertUnique(artifacts.map((value) => value.id), "manifest artifact ID");
  assertUnique(artifacts.map((value) => value.path), "manifest artifact path");
  const buildSha256 = sha256(Buffer.from(JSON.stringify(artifacts), "utf8"));
  return {
    schemaVersion: "cap8-content-manifest-v4",
    subjectId: "english",
    contentVersion: CONTENT_VERSION,
    authorityGraphSha256: sha256(graphBytes),
    artifacts,
    counts: {
      authorityNodes: 116,
      skills: 320,
      lectures: 320,
      skillQuestions: 3_840,
      stimulusQuestions: 2_900,
      stimuli: 800,
      assets: 300 + corpus.assets.length,
      readingPassages: 500,
      listeningStimuli: 300,
    },
    buildSha256,
  };
}

export async function buildEnglishCorpus({ repoRoot = REPO_ROOT, write = false } = {}) {
  const corpus = await materializeEnglishCorpus({ repoRoot, synthesizeAudio: true });
  if (!write) return corpus;
  const { files, graphBytes } = await outputFiles(corpus, repoRoot);
  files.set(`${ENGLISH_FOLDER}/r4/content-manifest-v4.json`, jsonBytes(await manifestFor(corpus, files, graphBytes, repoRoot)));
  for (const [relative, bytes] of files) {
    const target = path.join(repoRoot, relative);
    await mkdir(path.dirname(target), { recursive: true });
    await writeFile(target, bytes);
  }
  return corpus;
}

async function main() {
  const command = process.argv[2] ?? "--check";
  assert(["--check", "--write"].includes(command), "usage: node tools/cap8-r4/build-english-corpus.mjs --check|--write");
  const result = await buildEnglishCorpus({ write: command === "--write" });
  console.log(`build-english-corpus: OK - ${result.lectures.length} lectures, ${result.questions.length} skill questions, ${result.reading.length} reading passages, ${result.listening.length} listening stimuli, ${result.stimulusQuestions.length} stimulus questions, ${result.audio.length} audio files${command === "--check" ? " (memory only)" : ""}`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
