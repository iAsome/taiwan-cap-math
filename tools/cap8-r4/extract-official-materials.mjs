import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFileSync } from "node:fs";
import {
  lstat,
  mkdir,
  readFile,
  readdir,
  rm,
  writeFile,
} from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import mupdf from "mupdf";
import { sha256 } from "./r4-core.mjs";
import {
  createOfficialMaterialLedgerIndex,
  loadOfficialSourceRegister,
} from "./ledger/official-material-ledger.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const DEFAULT_INDEX = path.join(HERE, "evidence", "official", "official-extraction-index.json");
const HASH = /^[a-f0-9]{64}$/;
const RENDER_SCALE = 1.25;

function compareText(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

function posixPath(value) {
  return value.split(path.sep).join("/");
}

function sourceCacheRoot(register) {
  return path.resolve(
    process.env[register.externalCache.environmentVariable]
      || path.join(REPO_ROOT, "..", register.externalCache.defaultSiblingDirectory),
  );
}

export function derivedCacheRoot() {
  return path.resolve(
    process.env.CAP8_R4_DERIVED_CACHE
      || path.join(REPO_ROOT, "..", "taiwan-cap-math-cap8-r4-derived-cache"),
  );
}

function assertChild(root, target) {
  const relative = path.relative(root, target);
  assert(relative && !relative.startsWith("..") && !path.isAbsolute(relative), `unsafe derived path: ${target}`);
}

export function assertSafeArchiveEntry(entry) {
  assert(typeof entry === "string" && entry && !entry.includes("\0"), "invalid archive entry");
  const clean = entry.replaceAll("\\", "/");
  assert(!clean.startsWith("/") && !/^[A-Za-z]:/.test(clean), `absolute archive entry: ${entry}`);
  assert(!clean.split("/").includes(".."), `archive path traversal: ${entry}`);
  return clean;
}

export function detectFileKind(bytes, filename = "") {
  if (bytes.subarray(0, 4).toString("ascii") === "%PDF") return "pdf";
  if (bytes.subarray(0, 2).toString("hex") === "504b") return "zip";
  if (/\.(mp3|m4a|wav|ogg)$/i.test(filename)) return "audio";
  return "other";
}

async function walkFiles(root, current = root) {
  const output = [];
  for (const entry of await readdir(current, { withFileTypes: true })) {
    const absolute = path.join(current, entry.name);
    if (entry.isSymbolicLink()) throw new Error(`archive symbolic link is not allowed: ${absolute}`);
    if (entry.isDirectory()) output.push(...await walkFiles(root, absolute));
    else if (entry.isFile()) output.push({ absolute, relative: posixPath(path.relative(root, absolute)) });
  }
  return output.sort((a, b) => compareText(a.relative, b.relative));
}

async function writeDerivedFile(materialRoot, relative, bytes) {
  const absolute = path.join(materialRoot, ...relative.split("/"));
  assertChild(materialRoot, absolute);
  await mkdir(path.dirname(absolute), { recursive: true });
  await writeFile(absolute, bytes);
  return {
    path: relative,
    bytes: Buffer.byteLength(bytes),
    sha256: sha256(bytes),
  };
}

async function extractPdf(bytes, materialRoot, documentId, memberPath) {
  const document = mupdf.Document.openDocument(bytes, "application/pdf");
  const pages = [];
  for (let index = 0; index < document.countPages(); index += 1) {
    const page = document.loadPage(index);
    const structured = page.toStructuredText();
    const text = structured.asText();
    const layout = structured.asJSON(1);
    const png = page
      .toPixmap(mupdf.Matrix.scale(RENDER_SCALE, RENDER_SCALE), mupdf.ColorSpace.DeviceRGB, false)
      .asPNG();
    const stem = `documents/${documentId}/page-${String(index + 1).padStart(4, "0")}`;
    const textFile = await writeDerivedFile(materialRoot, `${stem}.txt`, text);
    const layoutFile = await writeDerivedFile(materialRoot, `${stem}.json`, layout);
    const renderFile = await writeDerivedFile(materialRoot, `${stem}.png`, png);
    pages.push({
      pageNumber: index + 1,
      textCharacters: Array.from(text).length,
      textExtractionStatus: text.length === 0 ? "none" : Array.from(text).length < 40 ? "low" : "available",
      textFile,
      layoutFile,
      renderFile,
    });
  }
  return {
    documentId,
    memberPath,
    sha256: sha256(bytes),
    bytes: bytes.length,
    pageCount: pages.length,
    pages,
  };
}

async function extractZip(sourcePath, materialRoot) {
  const listed = execFileSync("tar", ["-tf", sourcePath], { encoding: "utf8", maxBuffer: 16 * 1024 * 1024 })
    .split(/\r?\n/)
    .filter(Boolean);
  for (const entry of listed) assertSafeArchiveEntry(entry);

  const archiveRoot = path.join(materialRoot, "archive");
  assertChild(materialRoot, archiveRoot);
  await mkdir(archiveRoot, { recursive: true });
  execFileSync("tar", ["-xf", sourcePath, "-C", archiveRoot], { stdio: "pipe" });

  const members = [];
  const documents = [];
  for (const [index, file] of (await walkFiles(archiveRoot)).entries()) {
    const stat = await lstat(file.absolute);
    assert(stat.isFile(), `archive member is not a regular file: ${file.relative}`);
    const bytes = await readFile(file.absolute);
    const kind = detectFileKind(bytes, file.relative);
    const member = { memberPath: file.relative, kind, bytes: bytes.length, sha256: sha256(bytes) };
    members.push(member);
    if (kind === "pdf") {
      documents.push(await extractPdf(bytes, materialRoot, `member-${String(index + 1).padStart(4, "0")}`, file.relative));
    }
  }
  return { members, documents };
}

function resolveSourcePath(register, file) {
  return file.repositoryPath
    ? path.resolve(REPO_ROOT, file.repositoryPath)
    : path.resolve(sourceCacheRoot(register), ...file.cacheRelativePath.split("/"));
}

async function extractMaterial(register, file, material) {
  const sourcePath = resolveSourcePath(register, file);
  const sourceBytes = await readFile(sourcePath);
  assert.equal(sha256(sourceBytes), file.sha256, `${material.materialId}: source hash drift`);
  const sourceKind = detectFileKind(sourceBytes, file.filename);
  assert(["pdf", "zip"].includes(sourceKind), `${material.materialId}: unsupported source kind ${sourceKind}`);

  const root = derivedCacheRoot();
  const materialRoot = path.join(root, String(material.year), material.materialId);
  assertChild(root, materialRoot);
  await rm(materialRoot, { recursive: true, force: true });
  await mkdir(materialRoot, { recursive: true });

  let archiveMembers = [];
  let documents = [];
  if (sourceKind === "pdf") documents = [await extractPdf(sourceBytes, materialRoot, "source", null)];
  else ({ members: archiveMembers, documents } = await extractZip(sourcePath, materialRoot));

  return {
    materialId: material.materialId,
    year: material.year,
    title: material.title,
    materialKind: material.materialKind,
    subjectAreas: material.subjectAreas,
    itemizationRequired: material.itemizationRequired,
    sourceSha256: file.sha256,
    sourceKind,
    sourceBytes: sourceBytes.length,
    archiveMembers,
    documents,
    reviewStatus: "extracted-unreviewed",
  };
}

function totals(materials) {
  const documents = materials.flatMap((material) => material.documents);
  const pages = documents.flatMap((document) => document.pages);
  const members = materials.flatMap((material) => material.archiveMembers);
  return {
    materials: materials.length,
    pdfSources: materials.filter((material) => material.sourceKind === "pdf").length,
    zipSources: materials.filter((material) => material.sourceKind === "zip").length,
    archiveMembers: members.length,
    audioMembers: members.filter((member) => member.kind === "audio").length,
    pdfDocuments: documents.length,
    pages: pages.length,
    renderedPages: pages.filter((page) => page.renderFile).length,
    zeroTextPages: pages.filter((page) => page.textExtractionStatus === "none").length,
    lowTextPages: pages.filter((page) => page.textExtractionStatus === "low").length,
    textCharacters: pages.reduce((sum, page) => sum + page.textCharacters, 0),
  };
}

export async function buildOfficialExtractionIndex() {
  const snapshot = await loadOfficialSourceRegister();
  const ledgerIndex = createOfficialMaterialLedgerIndex(snapshot);
  const files = new Map(snapshot.register.files.map((file) => [file.sha256, file]));
  const materials = [];
  for (const ledger of ledgerIndex.years) {
    for (const material of ledger.materials) {
      materials.push(await extractMaterial(snapshot.register, files.get(material.sourceSha256), { ...material, year: ledger.year }));
      console.error(`extracted ${material.materialId}: ${material.title}`);
    }
  }
  return {
    schemaVersion: "cap8-r4-official-extraction-index-v1",
    sourceRegisterSha256: snapshot.sha256,
    protocol: {
      extractor: "mupdf-plus-bsdtar",
      mupdfVersion: JSON.parse(readFileSync(path.join(REPO_ROOT, "node_modules", "mupdf", "package.json"), "utf8")).version,
      renderScale: RENDER_SCALE,
      renderColorSpace: "DeviceRGB",
      derivedCacheEnvironmentVariable: "CAP8_R4_DERIVED_CACHE",
      defaultDerivedCacheDirectory: "taiwan-cap-math-cap8-r4-derived-cache",
    },
    status: "extracted-unreviewed",
    totals: totals(materials),
    materials,
  };
}

async function verifyDerivedFile(materialRoot, descriptor) {
  assert(descriptor && typeof descriptor.path === "string");
  assert.match(descriptor.sha256, HASH);
  const absolute = path.join(materialRoot, ...descriptor.path.split("/"));
  assertChild(materialRoot, absolute);
  const bytes = await readFile(absolute);
  assert.equal(bytes.length, descriptor.bytes, `${descriptor.path}: byte length drift`);
  assert.equal(sha256(bytes), descriptor.sha256, `${descriptor.path}: hash drift`);
}

export async function validateOfficialExtractionIndex(index, { verifyFiles = false } = {}) {
  const snapshot = await loadOfficialSourceRegister();
  const ledgerIndex = createOfficialMaterialLedgerIndex(snapshot);
  assert.equal(index.schemaVersion, "cap8-r4-official-extraction-index-v1");
  assert.equal(index.sourceRegisterSha256, snapshot.sha256);
  assert.equal(index.status, "extracted-unreviewed");
  assert.equal(index.protocol.mupdfVersion, "1.28.0");
  const expected = ledgerIndex.years.flatMap((ledger) => ledger.materials.map((material) => ({ ledger, material })));
  assert.equal(index.materials.length, expected.length);
  for (let i = 0; i < expected.length; i += 1) {
    const { ledger, material } = expected[i];
    const actual = index.materials[i];
    assert.equal(actual.materialId, material.materialId);
    assert.equal(actual.year, ledger.year);
    assert.equal(actual.sourceSha256, material.sourceSha256);
    assert.equal(actual.itemizationRequired, material.itemizationRequired);
    assert.equal(actual.reviewStatus, "extracted-unreviewed");
    assert(actual.documents.length > 0 || actual.sourceKind === "zip", `${actual.materialId}: no extracted document`);
    const memberPaths = actual.archiveMembers.map((member) => member.memberPath);
    assert.deepEqual(memberPaths, [...memberPaths].sort(compareText), `${actual.materialId}: archive member order`);
    for (const member of actual.archiveMembers) assert.match(member.sha256, HASH);
    const materialRoot = path.join(derivedCacheRoot(), String(actual.year), actual.materialId);
    for (const document of actual.documents) {
      assert.match(document.sha256, HASH);
      assert.equal(document.pageCount, document.pages.length);
      assert(document.pages.length > 0, `${actual.materialId}/${document.documentId}: PDF has no pages`);
      for (const [pageIndex, page] of document.pages.entries()) {
        assert.equal(page.pageNumber, pageIndex + 1);
        assert(["none", "low", "available"].includes(page.textExtractionStatus));
        assert.equal(
          page.textExtractionStatus,
          page.textCharacters === 0 ? "none" : page.textCharacters < 40 ? "low" : "available",
        );
        for (const file of [page.textFile, page.layoutFile, page.renderFile]) {
          assert.match(file.sha256, HASH);
          if (verifyFiles) await verifyDerivedFile(materialRoot, file);
        }
      }
    }
  }
  assert.deepEqual(index.totals, totals(index.materials));
  return index.totals;
}

async function main() {
  const verifyOnly = process.argv.includes("--verify");
  const index = verifyOnly
    ? JSON.parse(await readFile(DEFAULT_INDEX, "utf8"))
    : await buildOfficialExtractionIndex();
  const result = await validateOfficialExtractionIndex(index, { verifyFiles: true });
  if (!verifyOnly) await writeFile(DEFAULT_INDEX, `${JSON.stringify(index, null, 2)}\n`, "utf8");
  console.log(`official-material-extraction: OK - ${result.materials} materials, ${result.pages} rendered pages`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
