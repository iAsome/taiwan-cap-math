import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, readdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

import {
  CROSS_DOMAIN_SETS,
  INTEGRATED_SOCIAL_VERSION,
  OFFICIAL_CALIBRATION,
  SINGLE_QUESTION_IDS,
} from "../../社會會考作戰室/source/catalog.mjs";

const repoRoot = join(dirname(fileURLToPath(import.meta.url)), "..", "..");
const outputDir = join(repoRoot, "社會會考作戰室");

const subjectManifestPaths = {
  geography: "地理會考作戰室/r4/content-manifest-v4.json",
  history: "歷史會考作戰室/r4/content-manifest-v4.json",
  civics: "公民會考作戰室/r4/content-manifest-v4.json",
};

const manifestFiles = [
  ["source", "社會會考作戰室/source/catalog.mjs"],
  ["runtime", "社會會考作戰室/runtime/catalog.json"],
  ["runtime", "社會會考作戰室/runtime.js"],
  ["ui", "社會會考作戰室/app.js"],
  ["ui", "社會會考作戰室/index.html"],
  ["ui", "社會會考作戰室/styles.css"],
  ["ui", "社會會考作戰室/sw.js"],
  ["ui", "社會會考作戰室/manifest.webmanifest"],
  ["ui", "社會會考作戰室/package.json"],
];

function sha256(value) {
  return createHash("sha256").update(value).digest("hex");
}

function readJson(path) {
  return JSON.parse(readFileSync(path, "utf8"));
}

function stableJson(value) {
  return `${JSON.stringify(value, null, 2)}\n`;
}

function subjectForSkill(id) {
  if (id.startsWith("GEO_")) return "geography";
  if (id.startsWith("HIS_")) return "history";
  if (id.startsWith("CIV_")) return "civics";
  throw new Error(`${id}: unknown social skill prefix`);
}

function loadSubject(subject) {
  const manifestPath = subjectManifestPaths[subject];
  const absoluteManifestPath = join(repoRoot, manifestPath);
  const manifestBytes = readFileSync(absoluteManifestPath);
  const manifest = JSON.parse(manifestBytes.toString("utf8"));
  if (manifest.subjectId !== subject) throw new Error(`${manifestPath}: subjectId 不符`);
  const artifacts = new Map(manifest.artifacts.map((artifact) => [artifact.id, artifact]));
  return {
    subject,
    manifest,
    manifestPath,
    manifestSha256: sha256(manifestBytes),
    artifacts,
  };
}

function loadArtifact(source, id, type) {
  const artifact = source.artifacts.get(id);
  if (!artifact) throw new Error(`${source.subject}: 找不到 ${id}`);
  if (artifact.type !== type) throw new Error(`${id}: 預期 ${type}，實際為 ${artifact.type}`);
  const bytes = readFileSync(join(repoRoot, artifact.path));
  const actualSha256 = sha256(bytes);
  if (actualSha256 !== artifact.sha256) throw new Error(`${id}: 來源雜湊不符`);
  return {
    record: JSON.parse(bytes.toString("utf8")),
    sourceArtifact: { path: artifact.path.replaceAll("\\", "/"), sha256: actualSha256 },
  };
}

function validateQuestion(question, expectedSubject, expectedStimulusId = null) {
  if (question.subject !== expectedSubject) throw new Error(`${question.id}: 科目不符`);
  if (typeof question.stem !== "string" || !question.stem.trim()) throw new Error(`${question.id}: 題幹空白`);
  if (!Array.isArray(question.options) || question.options.length !== 4) throw new Error(`${question.id}: 必須有四個選項`);
  if (question.options.some((option) => typeof option !== "string" || !option.trim()) || new Set(question.options).size !== 4) throw new Error(`${question.id}: 選項空白或重複`);
  if (!Number.isInteger(question.answerIndex) || question.answerIndex < 0 || question.answerIndex > 3) throw new Error(`${question.id}: answerIndex 無效`);
  if (question.stimulusId !== expectedStimulusId) throw new Error(`${question.id}: stimulusId 不符`);
  if (!Array.isArray(question.optionRationales) || question.optionRationales.length !== 4) throw new Error(`${question.id}: 缺少逐選項理由`);
  if (new Set(question.optionRationales.map((item) => item.optionIndex)).size !== 4) throw new Error(`${question.id}: 選項理由索引重複`);
  const rationaleByIndex = new Map(question.optionRationales.map((item) => [item.optionIndex, item]));
  if (question.optionRationales.some((item) => typeof item.reason !== "string" || !item.reason.trim())) throw new Error(`${question.id}: 選項理由空白`);
  if (question.optionRationales.filter((item) => item.isCorrect).length !== 1 || !rationaleByIndex.get(question.answerIndex)?.isCorrect) throw new Error(`${question.id}: 正解理由不一致`);
  if (!Array.isArray(question.skillIds) || question.skillIds.length === 0) throw new Error(`${question.id}: 缺少技能 ID`);
  if (!Array.isArray(question.authorityRefs) || question.authorityRefs.length === 0 || question.authorityRefs.some((ref) => !ref.startsWith("AUTH-SOCIAL-"))) throw new Error(`${question.id}: 課綱 authority refs 無效`);
  if (question.assets?.length) throw new Error(`${question.id}: 本模式未納入跨目錄圖像資產`);
  if (!question.provenance || question.provenance.status !== "original") throw new Error(`${question.id}: 必須明確標示原創來源`);
  if (!Array.isArray(question.independentReviews) || question.independentReviews.length < 2 || question.independentReviews.some((review) => review.status !== "pass" || review.derivedAnswerIndex !== question.answerIndex)) {
    throw new Error(`${question.id}: 獨立答案核對不足`);
  }
}

function loadOfficialCalibration() {
  const reviewDir = join(repoRoot, "tools", "cap8-r4", "ledger", "reviews", "items");
  const files = readdirSync(reviewDir).filter((name) => name.endsWith("-integrated-social.json")).sort();
  const papers = files.map((name) => {
    const review = readJson(join(reviewDir, name));
    if (review.reviewStatus !== "complete-rendered-semantic-review") throw new Error(`${name}: 官方題本審查未完成`);
    const subjectCounts = { geography: 0, history: 0, civics: 0 };
    const sharedStimulusIds = new Set();
    let crossDomainQuestions = 0;
    for (const item of review.items) {
      if (!(item.primarySubject in subjectCounts)) throw new Error(`${name}: 未知社會科分類 ${item.primarySubject}`);
      subjectCounts[item.primarySubject] += 1;
      if (item.sharedStimulusId) sharedStimulusIds.add(item.sharedStimulusId);
      if (item.secondarySubjects?.length) crossDomainQuestions += 1;
    }
    return {
      examId: review.examId,
      questionCount: review.items.length,
      subjectCounts,
      crossDomainQuestions,
      sharedSetCount: sharedStimulusIds.size,
      reviewStatus: review.reviewStatus,
    };
  });
  const mainYears = new Set(papers.filter((paper) => paper.examId.endsWith("-MAIN")).map((paper) => Number(paper.examId.slice(4, 7))));
  for (let year = 106; year <= 115; year += 1) if (!mainYears.has(year)) throw new Error(`缺少 ${year} 年社會科官方題本審查`);
  const latest = papers.find((paper) => paper.examId === OFFICIAL_CALIBRATION.latestPaper);
  if (!latest) throw new Error(`缺少最新校準題本 ${OFFICIAL_CALIBRATION.latestPaper}`);
  if (latest.questionCount !== OFFICIAL_CALIBRATION.defaultQuestions) throw new Error("最新題本題數與藍圖不符");
  if (latest.sharedSetCount !== OFFICIAL_CALIBRATION.sharedSetCount) throw new Error("最新題本題組數與藍圖不符");
  for (const subject of Object.keys(OFFICIAL_CALIBRATION.defaultSubjectCounts)) {
    if (latest.subjectCounts[subject] !== OFFICIAL_CALIBRATION.defaultSubjectCounts[subject]) throw new Error(`最新題本 ${subject} 題數與藍圖不符`);
  }
  return { ...OFFICIAL_CALIBRATION, papers };
}

export function buildIntegratedSocialCatalog() {
  const sources = Object.fromEntries(Object.keys(subjectManifestPaths).map((subject) => [subject, loadSubject(subject)]));
  const questions = [];
  const stimuli = [];
  const skillIds = new Set();
  const seenQuestionIds = new Set();
  const crossDomainSets = [];
  const integratedSourcePath = manifestFiles[0][1];
  const integratedSourceArtifact = {
    path: integratedSourcePath,
    sha256: sha256(readFileSync(join(repoRoot, integratedSourcePath))),
  };

  for (const [subject, ids] of Object.entries(SINGLE_QUESTION_IDS)) {
    if (ids.length !== 36 || new Set(ids).size !== 36) throw new Error(`${subject}: 單題候選池必須恰有 36 個唯一 ID`);
    const subjectQuestions = [];
    for (const id of ids) {
      const loaded = loadArtifact(sources[subject], id, "question");
      validateQuestion(loaded.record, subject, null);
      if (!['standard', 'advanced', 'transfer'].includes(loaded.record.difficulty)) throw new Error(`${id}: 模考候選不得使用基礎難度`);
      if (seenQuestionIds.has(id)) throw new Error(`${id}: 題目 ID 重複`);
      seenQuestionIds.add(id);
      loaded.record.skillIds.forEach((skillId) => skillIds.add(skillId));
      questions.push({ ...loaded.record, sourceArtifact: loaded.sourceArtifact, integratedRole: "single" });
      subjectQuestions.push(loaded.record);
    }
    if (new Set(subjectQuestions.flatMap((question) => question.skillIds)).size !== 36) throw new Error(`${subject}: 單題候選必須涵蓋 36 個不同技能`);
    for (const difficulty of ["standard", "advanced", "transfer"]) {
      if (subjectQuestions.filter((question) => question.difficulty === difficulty).length !== 12) throw new Error(`${subject}: ${difficulty} 候選必須恰有 12 題`);
    }
  }

  if (CROSS_DOMAIN_SETS.length !== 12 || new Set(CROSS_DOMAIN_SETS.map((set) => set.id)).size !== 12) throw new Error("跨科題組候選池必須恰有 12 組唯一 ID");
  for (const set of CROSS_DOMAIN_SETS) {
    if (set.domains.length < 2 || !set.domains.includes(set.subject)) throw new Error(`${set.id}: 跨科分類不足`);
    const stimulusId = set.stimulusId ?? set.stimulus?.id;
    const questionIds = set.questionIds ?? set.questions?.map((question) => question.id);
    if (!stimulusId || !Array.isArray(questionIds) || questionIds.length !== 3 || new Set(questionIds).size !== 3) throw new Error(`${set.id}: 題組必須有一份材料與三題唯一 ID`);
    if (!Array.isArray(set.skillIds) || !set.domains.every((domain) => set.skillIds.some((id) => subjectForSkill(id) === domain))) throw new Error(`${set.id}: 題組技能未涵蓋所有標示領域`);
    const stimulus = set.stimulus
      ? { record: set.stimulus, sourceArtifact: integratedSourceArtifact }
      : loadArtifact(sources[set.subject], stimulusId, "stimulus");
    if (stimulus.record.id !== stimulusId || stimulus.record.subject !== set.subject) throw new Error(`${stimulusId}: 題組材料主科或 ID 不符`);
    if (stimulus.record.assets?.length) throw new Error(`${stimulusId}: 本模式未納入跨目錄圖像資產`);
    if (!Array.isArray(stimulus.record.authorityRefs) || stimulus.record.authorityRefs.length === 0 || stimulus.record.authorityRefs.some((ref) => !ref.startsWith("AUTH-SOCIAL-"))) throw new Error(`${stimulusId}: 課綱 authority refs 無效`);
    if (!stimulus.record.provenance || stimulus.record.provenance.status !== "original") throw new Error(`${stimulusId}: 必須明確標示原創來源`);
    const loadedQuestionIds = [];
    const setDifficulties = [];
    for (const id of questionIds) {
      const inlineQuestion = set.questions?.find((question) => question.id === id);
      const loaded = inlineQuestion
        ? { record: inlineQuestion, sourceArtifact: integratedSourceArtifact }
        : loadArtifact(sources[set.subject], id, "question");
      const record = { ...loaded.record, skillIds: [...new Set([...loaded.record.skillIds, ...set.skillIds])] };
      validateQuestion(record, set.subject, stimulusId);
      if (seenQuestionIds.has(id)) throw new Error(`${id}: 題目 ID 重複`);
      seenQuestionIds.add(id);
      record.skillIds.forEach((skillId) => skillIds.add(skillId));
      questions.push({ ...record, sourceArtifact: loaded.sourceArtifact, integratedRole: "cross-domain", integratedSetId: set.id });
      loadedQuestionIds.push(id);
      setDifficulties.push(record.difficulty);
    }
    if (setDifficulties.toSorted().join(",") !== "advanced,standard,transfer") throw new Error(`${set.id}: 題組須含 standard、advanced、transfer 各一題`);
    const content = stimulus.record.content?.table ? {
      ...stimulus.record.content,
      table: {
        ...stimulus.record.content.table,
        caption: stimulus.record.content.table.caption ?? stimulus.record.content.title ?? set.title,
        rowHeader: true,
      },
    } : stimulus.record.content;
    stimuli.push({
      ...stimulus.record,
      content,
      skillIds: [...new Set([...stimulus.record.skillIds, ...set.skillIds])],
      sourceArtifact: stimulus.sourceArtifact,
      integratedSetId: set.id,
      integratedTitle: set.title,
      integratedDomains: set.domains,
      questionIds: loadedQuestionIds,
    });
    crossDomainSets.push({
      id: set.id,
      subject: set.subject,
      title: set.title,
      domains: set.domains,
      skillIds: set.skillIds,
      stimulusId,
      questionIds: loadedQuestionIds,
    });
  }

  const skills = [...skillIds].sort().map((id) => {
    const subject = subjectForSkill(id);
    const loaded = loadArtifact(sources[subject], id, "skill");
    return { ...loaded.record, sourceArtifact: loaded.sourceArtifact };
  });

  const catalog = {
    schemaVersion: "cap8-r4-integrated-social-catalog-v1",
    subjectId: "integrated_social",
    contentVersion: INTEGRATED_SOCIAL_VERSION,
    notice: "本模式為原創練習，不是官方試題；題型與配比依官方公開資料校準。",
    sourceManifests: Object.fromEntries(Object.entries(sources).map(([subject, source]) => [subject, {
      path: source.manifestPath,
      sha256: source.manifestSha256,
      contentVersion: source.manifest.contentVersion,
      buildSha256: source.manifest.buildSha256,
    }])),
    officialCalibration: loadOfficialCalibration(),
    blueprint: {
      singleQuestionIds: SINGLE_QUESTION_IDS,
      crossDomainSets,
    },
    skills,
    stimuli,
    questions,
  };
  return catalog;
}

export function writeIntegratedSocialBuild() {
  const catalog = buildIntegratedSocialCatalog();
  const catalogPath = join(outputDir, "runtime", "catalog.json");
  mkdirSync(dirname(catalogPath), { recursive: true });
  writeFileSync(catalogPath, stableJson(catalog));

  const artifacts = manifestFiles.map(([type, path]) => {
    const bytes = readFileSync(join(repoRoot, path));
    return { id: path, type, path, sha256: sha256(bytes) };
  });
  const manifest = {
    schemaVersion: "cap8-content-manifest-v4",
    subjectId: "integrated_social",
    contentVersion: INTEGRATED_SOCIAL_VERSION,
    sourceCommit: "6d385e76d72652677cb4c6337f6042ae0db4a77a",
    counts: {
      singleQuestionCandidates: Object.values(SINGLE_QUESTION_IDS).flat().length,
      crossDomainSets: CROSS_DOMAIN_SETS.length,
      crossDomainQuestions: catalog.blueprint.crossDomainSets.reduce((sum, set) => sum + set.questionIds.length, 0),
      totalQuestionCandidates: catalog.questions.length,
      referencedSkills: catalog.skills.length,
    },
    artifacts,
    buildSha256: sha256(stableJson({ sourceManifests: catalog.sourceManifests, artifacts })),
  };
  writeFileSync(join(outputDir, "content-manifest-v4.json"), stableJson(manifest));
  return { catalog, manifest };
}

if (import.meta.url === pathToFileURL(process.argv[1] ?? "").href) {
  const { catalog, manifest } = writeIntegratedSocialBuild();
  console.log(`integrated-social-build: ${catalog.questions.length} questions, ${catalog.stimuli.length} sets, ${manifest.counts.referencedSkills} skills`);
}
