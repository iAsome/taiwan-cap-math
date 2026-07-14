import assert from "node:assert/strict";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { sha256 } from "../r4-core.mjs";
import { derivedCacheRoot, validateOfficialExtractionIndex } from "../extract-official-materials.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const EXTRACTION_INDEX = path.join(HERE, "..", "evidence", "official", "official-extraction-index.json");
const OUTPUT = path.join(HERE, "official-item-candidates.json");
const PAPERS_WITH_LISTENING = Object.freeze([
  "chinese",
  "english_reading",
  "english_listening",
  "math_mc",
  "integrated_social",
  "integrated_natural",
]);
const PAPER_TITLES = Object.freeze({
  chinese: "國文科",
  english_reading: "英語（閱讀）",
  math_mc: "數學科",
  integrated_social: "社會科",
  integrated_natural: "自然科",
  chinese_writing: "寫作測驗",
});

function compareText(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

function paperId(value) {
  return value.toUpperCase().replaceAll("_", "-");
}

function materialRoot(material) {
  return path.join(derivedCacheRoot(), String(material.year), material.materialId);
}

async function pageText(material, page) {
  return readFile(path.join(materialRoot(material), ...page.textFile.path.split("/")), "utf8");
}

async function documentLines(material, document) {
  const output = [];
  for (const page of document.pages) {
    const layout = JSON.parse(await readFile(path.join(materialRoot(material), ...page.layoutFile.path.split("/")), "utf8"));
    let ordinal = 0;
    for (const block of layout.blocks) {
      for (const line of block.lines ?? []) {
        output.push({
          ...line,
          page: page.pageNumber,
          ordinal: ordinal++,
          position: page.pageNumber * 1e9 + line.y * 1e6 + line.x * 1e3 + ordinal,
        });
      }
    }
  }
  return output;
}

function clusterCoordinates(values, tolerance = 10) {
  const clusters = [];
  for (const value of [...values].sort((a, b) => a - b)) {
    let cluster = clusters.find((candidate) => Math.abs(value - candidate.mean) < tolerance);
    if (!cluster) {
      cluster = { sum: 0, count: 0, mean: value };
      clusters.push(cluster);
    }
    cluster.sum += value;
    cluster.count += 1;
    cluster.mean = cluster.sum / cluster.count;
  }
  return clusters.sort((a, b) => a.mean - b.mean);
}

export async function parseOfficialAnswerColumns(material, document) {
  const lines = await documentLines(material, document);
  const answers = lines.filter((line) => /^[A-D]\s*$/.test(line.text));
  const clusters = clusterCoordinates(answers.map((line) => line.x));
  assert([5, 6].includes(clusters.length), `${material.materialId}: expected five or six answer columns`);
  const papers = clusters.length === 6
    ? PAPERS_WITH_LISTENING
    : PAPERS_WITH_LISTENING.filter((paper) => paper !== "english_listening");
  const columns = clusters.map((cluster, index) => ({ paper: papers[index], x: cluster.mean, answers: new Map() }));

  for (const pageNumber of document.pages.map((page) => page.pageNumber)) {
    const pageLines = lines.filter((line) => line.page === pageNumber);
    const rows = pageLines
      .filter((line) => /^\d{1,2}\s*$/.test(line.text) && line.x < 130)
      .map((line) => ({ itemNumber: Number(line.text.trim()), y: line.y }));
    for (const line of pageLines.filter((candidate) => /^[A-D]\s*$/.test(candidate.text))) {
      const row = rows
        .map((candidate) => ({ ...candidate, distance: Math.abs(candidate.y - line.y) }))
        .sort((a, b) => a.distance - b.distance)[0];
      assert(row && row.distance <= 3, `${material.materialId}: answer row could not be resolved`);
      const column = columns.reduce(
        (best, candidate) => Math.abs(candidate.x - line.x) < Math.abs(best.x - line.x) ? candidate : best,
        columns[0],
      );
      assert(!column.answers.has(row.itemNumber), `${material.materialId}: duplicate ${column.paper} answer ${row.itemNumber}`);
      column.answers.set(row.itemNumber, {
        answer: line.text.trim(),
        page: line.page,
        x: line.x,
        y: line.y,
        lineSha256: sha256(line.text),
      });
    }
  }

  return columns.map((column) => {
    const itemNumbers = [...column.answers.keys()].sort((a, b) => a - b);
    assert.deepEqual(itemNumbers, Array.from({ length: itemNumbers.length }, (_, index) => index + 1));
    return { paper: column.paper, answers: itemNumbers.map((itemNumber) => column.answers.get(itemNumber)) };
  });
}

function questionNumber(line, listening) {
  let match = listening
    ? line.text.match(/^\s*第\s*(\d{1,3})\s*題/u)
    : line.text.match(/^\s*(\d{1,3})\s*[.．]\s*/u);
  if (!match && !listening && line.x < 160) match = line.text.match(/^\s*(\d{1,3})\s*$/u);
  return match ? Number(match[1]) : null;
}

export async function locateSelectionItems(material, document, expectedCount, { listening = false } = {}) {
  const candidates = (await documentLines(material, document))
    .filter((line) => line.page > 1)
    .map((line) => ({ ...line, itemNumber: questionNumber(line, listening) }))
    .filter((line) => line.itemNumber >= 1 && line.itemNumber <= expectedCount);
  let best = null;
  for (const first of candidates.filter((candidate) => candidate.itemNumber === 1)) {
    const sequence = [first];
    let previous = first.position;
    let score = 0;
    for (let itemNumber = 2; itemNumber <= expectedCount; itemNumber += 1) {
      const next = candidates
        .filter((candidate) => candidate.itemNumber === itemNumber && candidate.position > previous)
        .sort((a, b) => a.position - b.position)[0];
      if (!next) break;
      score += Math.log1p(next.position - previous);
      sequence.push(next);
      previous = next.position;
    }
    if (sequence.length === expectedCount && (!best || score < best.score)) best = { score, sequence };
  }
  assert(best, `${material.materialId}/${document.documentId}: could not locate ${expectedCount} ordered items`);
  return best.sequence;
}

function sourceLocator(material, document, line) {
  const page = document.pages[line.page - 1];
  assert(page && page.pageNumber === line.page);
  return {
    page: line.page,
    x: line.x,
    y: line.y,
    lineSha256: sha256(line.text),
    pageTextSha256: page.textFile.sha256,
    pageRenderSha256: page.renderFile.sha256,
    textExtractionStatus: page.textExtractionStatus,
  };
}

function answerLocator(answerMaterial, answerDocument, answer) {
  const page = answerDocument.pages[answer.page - 1];
  return {
    materialId: answerMaterial.materialId,
    sourceSha256: answerMaterial.sourceSha256,
    documentId: answerDocument.documentId,
    memberPath: answerDocument.memberPath,
    page: answer.page,
    x: answer.x,
    y: answer.y,
    lineSha256: answer.lineSha256,
    pageRenderSha256: page.renderFile.sha256,
  };
}

function selectionDocument(extractionIndex, year, administration, packageMaterial, paper) {
  if (administration === "main") {
    if (paper === "english_listening") {
      const material = extractionIndex.materials.find((entry) => entry.year === year && entry.materialKind === "listening-package");
      assert(material, `${year}: listening package missing`);
      const documents = material.documents.filter((document) => /Listening/i.test(document.memberPath ?? ""));
      assert(documents.length > 0, `${year}: listening paper missing from package`);
      return { material, document: documents.sort((a, b) => compareText(a.memberPath, b.memberPath))[0] };
    }
    const material = extractionIndex.materials.find((entry) => entry.year === year && entry.title === PAPER_TITLES[paper]);
    assert(material, `${year}: ${paper} main paper missing`);
    assert.equal(material.documents.length, 1);
    return { material, document: material.documents[0] };
  }

  const patterns = {
    chinese: /Chinese/i,
    english_reading: /English/i,
    english_listening: /Listening/i,
    math_mc: /Math/i,
    integrated_social: /Society/i,
    integrated_natural: /Nature/i,
  };
  const document = packageMaterial.documents.find((candidate) => {
    if (!patterns[paper].test(candidate.memberPath ?? "")) return false;
    return paper !== "english_reading" || !/Listening/i.test(candidate.memberPath ?? "");
  });
  assert(document, `${year}: ${paper} alternate paper missing`);
  return { material: packageMaterial, document };
}

function audioFor(material, itemNumber) {
  const pattern = new RegExp(`第\\s*0*${itemNumber}\\s*題`, "u");
  const matches = material.archiveMembers.filter((member) => member.kind === "audio" && pattern.test(member.memberPath));
  assert.equal(matches.length, 1, `${material.materialId}: expected one audio file for listening item ${itemNumber}`);
  return { memberPath: matches[0].memberPath, sha256: matches[0].sha256 };
}

async function constructedResponseItems(exam, material, document, lastSelectionPage) {
  const pages = [];
  for (const page of document.pages) pages.push({ page, text: await pageText(material, page) });
  const section = pages.find(({ page, text }) => page.pageNumber >= lastSelectionPage && text.includes("非選擇題"));
  assert(section, `${exam.examId}: math constructed-response section missing`);
  const lines = (await documentLines(material, document)).filter((line) => line.page >= section.page.pageNumber);
  const starts = [];
  let previousPosition = -1;
  for (const itemNumber of [1, 2]) {
    const line = lines.find((candidate) => {
      if (candidate.position <= previousPosition) return false;
      return questionNumber(candidate, false) === itemNumber;
    });
    assert(line, `${exam.examId}: math constructed-response item ${itemNumber} missing`);
    starts.push(line);
    previousPosition = line.position;
  }
  return starts.map((line, index) => ({
    candidateId: `${exam.examId}-MATH-CONSTRUCTED-${String(index + 1).padStart(2, "0")}`,
    year: exam.year,
    administration: exam.administration,
    paper: "math_constructed",
    itemNumber: index + 1,
    officialAnswer: null,
    sourceMaterialId: material.materialId,
    sourceSha256: material.sourceSha256,
    sourceDocumentId: document.documentId,
    sourceMemberPath: document.memberPath,
    sourceLocator: sourceLocator(material, document, line),
    answerSourceLocator: null,
    audio: null,
    reviewStatus: "locator-extracted-unreviewed",
  }));
}

async function writingItem(exam, material, document) {
  const pages = [];
  for (const page of document.pages) pages.push({ page, text: await pageText(material, page) });
  const promptPage = pages.find(({ page, text }) => (
    page.pageNumber > 1
    && (/完成一篇(?:作文|文章)/u.test(text) || /題意要求寫作/u.test(text))
  ));
  assert(promptPage, `${exam.examId}: writing prompt page missing`);
  return {
    candidateId: `${exam.examId}-CHINESE-WRITING-01`,
    year: exam.year,
    administration: exam.administration,
    paper: "chinese_writing",
    itemNumber: 1,
    officialAnswer: null,
    sourceMaterialId: material.materialId,
    sourceSha256: material.sourceSha256,
    sourceDocumentId: document.documentId,
    sourceMemberPath: document.memberPath,
    sourceLocator: {
      page: promptPage.page.pageNumber,
      x: null,
      y: null,
      lineSha256: null,
      pageTextSha256: promptPage.page.textFile.sha256,
      pageRenderSha256: promptPage.page.renderFile.sha256,
      textExtractionStatus: promptPage.page.textExtractionStatus,
    },
    answerSourceLocator: null,
    audio: null,
    reviewStatus: "locator-extracted-unreviewed",
  };
}

async function buildExam(extractionIndex, year, administration, packageMaterial = null) {
  const exam = {
    examId: `CAP-${year}-${administration === "main" ? "MAIN" : "ALTERNATE"}`,
    year,
    administration,
    items: [],
  };
  const answerMaterial = administration === "main"
    ? extractionIndex.materials.find((material) => material.year === year && material.materialKind === "answer-key" && material.sourceKind === "pdf")
    : packageMaterial;
  assert(answerMaterial, `${exam.examId}: answer material missing`);
  const answerDocument = administration === "main"
    ? answerMaterial.documents[0]
    : answerMaterial.documents.find((document) => /Answer/i.test(document.memberPath ?? ""));
  assert(answerDocument, `${exam.examId}: answer document missing`);
  const columns = await parseOfficialAnswerColumns(answerMaterial, answerDocument);

  let mathSource = null;
  let lastMathSelectionPage = null;
  for (const column of columns) {
    const source = selectionDocument(extractionIndex, year, administration, packageMaterial, column.paper);
    const starts = await locateSelectionItems(source.material, source.document, column.answers.length, {
      listening: column.paper === "english_listening",
    });
    for (const [index, line] of starts.entries()) {
      const answer = column.answers[index];
      exam.items.push({
        candidateId: `${exam.examId}-${paperId(column.paper)}-${String(index + 1).padStart(3, "0")}`,
        year,
        administration,
        paper: column.paper,
        itemNumber: index + 1,
        officialAnswer: answer.answer,
        sourceMaterialId: source.material.materialId,
        sourceSha256: source.material.sourceSha256,
        sourceDocumentId: source.document.documentId,
        sourceMemberPath: source.document.memberPath,
        sourceLocator: sourceLocator(source.material, source.document, line),
        answerSourceLocator: answerLocator(answerMaterial, answerDocument, answer),
        audio: column.paper === "english_listening" ? audioFor(source.material, index + 1) : null,
        reviewStatus: "locator-extracted-unreviewed",
      });
    }
    if (column.paper === "math_mc") {
      mathSource = source;
      lastMathSelectionPage = starts.at(-1).page;
    }
  }

  assert(mathSource);
  exam.items.push(...await constructedResponseItems(exam, mathSource.material, mathSource.document, lastMathSelectionPage));
  const writingSource = administration === "main"
    ? selectionDocument(extractionIndex, year, administration, packageMaterial, "chinese_writing")
    : {
        material: packageMaterial,
        document: packageMaterial.documents.find((document) => /Writing/i.test(document.memberPath ?? "")),
      };
  assert(writingSource.document, `${exam.examId}: writing document missing`);
  exam.items.push(await writingItem(exam, writingSource.material, writingSource.document));
  return exam;
}

function candidateTotals(exams) {
  const items = exams.flatMap((exam) => exam.items);
  return {
    exams: exams.length,
    items: items.length,
    selectionItems: items.filter((item) => item.officialAnswer !== null).length,
    constructedResponseItems: items.filter((item) => item.paper === "math_constructed").length,
    writingItems: items.filter((item) => item.paper === "chinese_writing").length,
    listeningItems: items.filter((item) => item.paper === "english_listening").length,
    mainItems: items.filter((item) => item.administration === "main").length,
    alternateItems: items.filter((item) => item.administration === "alternate").length,
  };
}

export async function buildOfficialItemCandidates(extractionIndex) {
  await validateOfficialExtractionIndex(extractionIndex);
  const exams = [];
  for (let year = 106; year <= 115; year += 1) {
    exams.push(await buildExam(extractionIndex, year, "main"));
    const alternate = extractionIndex.materials.find((material) => material.year === year && material.materialKind === "supplemental-exam-package");
    if (alternate) exams.push(await buildExam(extractionIndex, year, "alternate", alternate));
  }
  return {
    schemaVersion: "cap8-r4-official-item-candidates-v1",
    extractionIndexSha256: sha256(`${JSON.stringify(extractionIndex, null, 2)}\n`),
    status: "item-locators-extracted-unreviewed",
    totals: candidateTotals(exams),
    exams,
  };
}

export async function validateOfficialItemCandidates(index, extractionIndex) {
  assert.equal(index.schemaVersion, "cap8-r4-official-item-candidates-v1");
  assert.equal(index.extractionIndexSha256, sha256(`${JSON.stringify(extractionIndex, null, 2)}\n`));
  assert.equal(index.status, "item-locators-extracted-unreviewed");
  assert.equal(index.exams.length, 13);
  const expectedExamIds = [];
  for (let year = 106; year <= 115; year += 1) {
    expectedExamIds.push(`CAP-${year}-MAIN`);
    if ([109, 110, 112].includes(year)) expectedExamIds.push(`CAP-${year}-ALTERNATE`);
  }
  assert.deepEqual(index.exams.map((exam) => exam.examId), expectedExamIds);
  const materialById = new Map(extractionIndex.materials.map((material) => [material.materialId, material]));
  const ids = new Set();
  for (const exam of index.exams) {
    for (const item of exam.items) {
      assert(!ids.has(item.candidateId), `duplicate candidate ID: ${item.candidateId}`);
      ids.add(item.candidateId);
      assert.equal(item.year, exam.year);
      assert.equal(item.administration, exam.administration);
      assert.equal(item.reviewStatus, "locator-extracted-unreviewed");
      const material = materialById.get(item.sourceMaterialId);
      assert(material, `${item.candidateId}: source material missing`);
      assert.equal(item.sourceSha256, material.sourceSha256);
      assert(item.sourceLocator.page > 1, `${item.candidateId}: cover-page locator is invalid`);
      assert.match(item.sourceLocator.pageRenderSha256, /^[a-f0-9]{64}$/);
      if (item.officialAnswer !== null) assert.match(item.officialAnswer, /^[A-D]$/);
      if (item.paper === "english_listening") {
        assert(item.audio && item.audio.memberPath && /^[a-f0-9]{64}$/.test(item.audio.sha256));
      } else assert.equal(item.audio, null);
    }
  }
  assert.deepEqual(index.totals, candidateTotals(index.exams));
  return index.totals;
}

async function main() {
  const extractionIndex = JSON.parse(await readFile(EXTRACTION_INDEX, "utf8"));
  const index = await buildOfficialItemCandidates(extractionIndex);
  const result = await validateOfficialItemCandidates(index, extractionIndex);
  await writeFile(OUTPUT, `${JSON.stringify(index, null, 2)}\n`, "utf8");
  console.log(`official-item-candidates: OK - ${result.exams} exams, ${result.items} item locators; semantic review pending`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
