import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import mupdf from "mupdf";
import { canonicalJson, sha256 } from "./r4-core.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const SOURCE_URL = "https://textbooks.naer.edu.tw/DownLoadFile.aspx?ASParam=TUZIRSs3NSUyNjglMjQlN2QlMWIlMDR1eSUwZWdocCU3ZWZ3JTExd20lMWN1JTBiJTBjJTFiZm4lMDAlMTIlN2V3ZnQlMDMlMWVwJTBiJTBjJTA2JTFkJTFldg==";
const SOURCE_SHA256 = "a2de4a4efa1ddbb45503e92d689e00e0b493e40d999b088c0f6c64164f4e5d52";
const PDF_PATH = path.join(REPO_ROOT, "tools", "cap8-r4", "evidence", "publisher", "naer-115-approved-textbooks.pdf");
const JSON_PATH = path.join(REPO_ROOT, "tools", "cap8-r4", "evidence", "publisher", "naer-115-approved-textbooks.json");
const LEDGER_PATH = path.join(REPO_ROOT, "tools", "cap8-r4", "ledger", "publisher-reference-ledger.csv");

const VOLUME_NUMBER = Object.freeze({
  第一冊: 1,
  第二冊: 2,
  第三冊: 3,
  第四冊: 4,
  第五冊: 5,
  第六冊: 6,
});

const EXPECTED_COUNTS = Object.freeze({
  chinese: 18,
  english: 18,
  math: 18,
  integrated_social: 23,
  integrated_natural: 18,
});

function normalize(value) {
  return value.normalize("NFKC").replaceAll(/\s+/g, "");
}

function field(lines, minimumX, maximumX = Infinity) {
  return normalize(lines
    .filter((line) => line.bbox.x >= minimumX && line.bbox.x < maximumX)
    .sort((a, b) => a.bbox.y - b.bbox.y || a.bbox.x - b.bbox.x)
    .map((line) => line.text)
    .join(""));
}

function pageRows(page) {
  const structured = JSON.parse(page.toStructuredText().asJSON(1));
  const lines = structured.blocks.flatMap((block) => block.lines ?? []);
  const anchors = lines
    .filter((line) => line.bbox.x < 50 && line.bbox.y > 95 && /^\d+$/.test(normalize(line.text)))
    .sort((a, b) => a.bbox.y - b.bbox.y);
  return anchors.map((anchor, index) => {
    const nextY = anchors[index + 1]?.bbox.y ?? Infinity;
    const row = lines.filter((line) => line.bbox.y >= anchor.bbox.y - 6 && line.bbox.y < nextY - 6);
    return {
      catalogRow: Number(normalize(anchor.text)),
      educationStage: field(row, 50, 90),
      domain: field(row, 90, 135),
      sourceSubject: field(row, 135, 170),
      volumeLabel: field(row, 170, 205),
      grade: Number(field(row, 205, 240)),
      materialType: field(row, 240, 275),
      publisher: field(row, 275, 355),
      licenseNumber: field(row, 355, 432),
      edition: field(row, 432, 469),
      reprintRevision: field(row, 469, 520),
      thirdEditionRevision: field(row, 520),
    };
  });
}

function subjectOf(row) {
  if (row.sourceSubject === "國文") return "chinese";
  if (row.sourceSubject === "英語") return "english";
  if (row.domain === "數學領域") return "math";
  if (row.domain === "社會領域") return "integrated_social";
  if (row.domain === "自然科學領域") return "integrated_natural";
  return null;
}

function countBy(records, fieldName) {
  const result = {};
  for (const record of records) result[record[fieldName]] = (result[record[fieldName]] ?? 0) + 1;
  return Object.fromEntries(Object.entries(result).sort(([a], [b]) => a.localeCompare(b, "en")));
}

export function buildPublisherCatalog(pdfBytes) {
  assert.equal(sha256(pdfBytes), SOURCE_SHA256, "NAER 115 textbook catalog hash mismatch");
  const document = mupdf.Document.openDocument(pdfBytes, "application/pdf");
  assert.equal(document.countPages(), 26);
  const rows = [18, 19, 20, 21, 22].flatMap((pageIndex) => pageRows(document.loadPage(pageIndex)));
  const records = rows.flatMap((row) => {
    const subject = subjectOf(row);
    if (!subject) return [];
    assert.equal(row.educationStage, "國民中學");
    const volume = VOLUME_NUMBER[row.volumeLabel];
    assert(volume, `${row.catalogRow}: unsupported volume ${row.volumeLabel}`);
    assert(row.publisher && row.licenseNumber && row.edition, `${row.catalogRow}: incomplete catalog row`);
    return [{
      id: `NAER115-JH-${String(row.catalogRow).padStart(3, "0")}`,
      subject,
      grade: row.grade,
      semester: volume % 2 === 1 ? 1 : 2,
      volume,
      sourceSubject: row.sourceSubject || row.domain.replace("領域", ""),
      materialType: row.materialType,
      publisher: row.publisher,
      licenseNumber: row.licenseNumber,
      edition: row.edition,
      reprintRevision: row.reprintRevision || null,
      thirdEditionRevision: row.thirdEditionRevision || null,
      catalogRow: row.catalogRow,
    }];
  });
  assert.equal(records.length, 95);
  assert.equal(new Set(records.map((record) => record.id)).size, records.length);
  assert.deepEqual(countBy(records, "subject"), EXPECTED_COUNTS);
  return {
    schemaVersion: "cap8-r4-publisher-approved-catalog-v1",
    status: "official-catalog-metadata-reviewed",
    retrievedAt: "2026-07-14",
    role: "publisher-reference-discovery-only",
    scopeAuthority: false,
    fullTextReviewed: false,
    source: {
      authority: "National Academy for Educational Research",
      title: "115學年度國民小學及國民中學審定本教科用書清冊",
      announcementUpdated: "2026-06-04",
      url: SOURCE_URL,
      sha256: SOURCE_SHA256,
      bytes: pdfBytes.length,
      pages: document.countPages(),
    },
    counts: {
      records: records.length,
      bySubject: countBy(records, "subject"),
      byPublisher: countBy(records, "publisher"),
    },
    records,
  };
}

function csvCell(value) {
  const text = String(value ?? "");
  return /[",\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

export function serializePublisherReferenceLedger(catalog) {
  const columns = [
    "subject", "grade", "semester", "publisher", "resource_title", "edition_or_date",
    "approval_or_catalog_evidence", "url_or_path", "source_hash", "access_level", "copyright_status",
    "curriculum_codes", "teaching_sequence", "terminology", "representations", "examples_or_activities",
    "misconceptions", "production_adoption", "final_audit_status", "notes",
  ];
  const rows = catalog.records.map((record) => [
    record.subject,
    record.grade,
    record.semester,
    record.publisher,
    `115學年度國民中學${record.sourceSubject}第${record.volume}冊${record.materialType}`,
    [record.edition, record.reprintRevision, record.thirdEditionRevision].filter(Boolean).join(" / "),
    `NAER清冊第${record.catalogRow}列；${record.licenseNumber}`,
    catalog.source.url,
    catalog.source.sha256,
    "official catalog metadata only; publisher full text not acquired",
    "modern publisher textbook protected; metadata only",
    "",
    "volume and grade metadata only; no teaching sequence inferred",
    "not reviewed at catalog layer",
    "not reviewed at catalog layer",
    "not copied or reviewed at catalog layer",
    "not reviewed at catalog layer",
    "reference candidate only; official curriculum remains scope authority",
    "pending public-resource review",
    catalog.source.title,
  ]);
  return `${[columns, ...rows].map((row) => row.map(csvCell).join(",")).join("\n")}\n`;
}

export async function validatePublisherCatalog(catalog, pdfBytes) {
  const expected = buildPublisherCatalog(pdfBytes);
  assert.deepEqual(catalog, expected, "checked-in publisher catalog is stale or manually altered");
  assert.equal(catalog.scopeAuthority, false);
  assert.equal(catalog.fullTextReviewed, false);
  assert.equal(catalog.counts.records, 95);
  return catalog.counts;
}

async function main() {
  if (process.argv.includes("--acquire")) {
    const response = await fetch(SOURCE_URL);
    assert(response.ok, `NAER textbook catalog fetch failed: ${response.status}`);
    const bytes = Buffer.from(await response.arrayBuffer());
    assert.equal(sha256(bytes), SOURCE_SHA256, "downloaded NAER catalog hash mismatch");
    await mkdir(path.dirname(PDF_PATH), { recursive: true });
    await writeFile(PDF_PATH, bytes);
  }
  const pdfBytes = await readFile(PDF_PATH);
  const catalog = buildPublisherCatalog(pdfBytes);
  await mkdir(path.dirname(JSON_PATH), { recursive: true });
  await Promise.all([
    writeFile(JSON_PATH, `${JSON.stringify(catalog, null, 2)}\n`, "utf8"),
    writeFile(LEDGER_PATH, serializePublisherReferenceLedger(catalog), "utf8"),
  ]);
  console.log(`publisher-reference-catalog: OK - ${catalog.counts.records} current approved books`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
