import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const EVIDENCE_ROOT = path.join(HERE, "evidence", "official");
const HTML_ROOT = path.join(EVIDENCE_ROOT, "html");
const REGISTER_PATH = path.join(EVIDENCE_ROOT, "official-source-register.json");
const FILE_ROOT = process.env.CAP8_R4_OFFICIAL_CACHE
  ? path.resolve(process.env.CAP8_R4_OFFICIAL_CACHE)
  : path.resolve(REPO_ROOT, "..", "taiwan-cap-math-cap8-r4-official-cache");
const RETRIEVED_DATE = "2026-07-14";
const YEARS = Array.from({ length: 10 }, (_, index) => 106 + index);
const STATIC_PAGES = [
  ["CAP-STRUCTURE", "https://cap.rcpet.edu.tw/test2.html"],
  ["CAP-PRINCIPLES", "https://cap.rcpet.edu.tw/test3.html"],
  ["CAP-WRITING", "https://cap.rcpet.edu.tw/test4-1.html"],
  ["CAP-CHINESE", "https://cap.rcpet.edu.tw/test4-2.html"],
  ["CAP-ENGLISH", "https://cap.rcpet.edu.tw/test4-3.html"],
  ["CAP-MATH", "https://cap.rcpet.edu.tw/test4-4.html"],
  ["CAP-SOCIAL", "https://cap.rcpet.edu.tw/test4-5.html"],
  ["CAP-NATURAL", "https://cap.rcpet.edu.tw/test4-6.html"],
  ["CAP-PAST", "https://cap.rcpet.edu.tw/examination.html"],
];
const REUSABLE_EXTENSIONS = new Set([
  ".aac",
  ".doc",
  ".docx",
  ".html",
  ".jpeg",
  ".jpg",
  ".m4a",
  ".mp3",
  ".mp4",
  ".ods",
  ".pdf",
  ".png",
  ".wav",
  ".xls",
  ".xlsx",
  ".zip",
]);

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

function normalizeSpace(value) {
  return value.replace(/<[^>]*>/g, " ").replace(/&nbsp;|&#160;/gi, " ").replace(/\s+/g, " ").trim();
}

function extractAnchors(html, baseUrl) {
  const anchors = [];
  for (const match of html.matchAll(/<a\b[^>]*href=["']([^"']+)["'][^>]*>([\s\S]*?)<\/a>/gi)) {
    const href = match[1].trim();
    if (!href || href.startsWith("javascript:") || href.startsWith("#")) continue;
    anchors.push({
      title: normalizeSpace(match[2]),
      url: new URL(href, baseUrl).href,
    });
  }
  return anchors;
}

function driveId(url) {
  return new URL(url).pathname.match(/\/file\/d\/([^/]+)/)?.[1] ?? null;
}

function contentDispositionFilename(value) {
  if (!value) return null;
  const utf8 = value.match(/filename\*=UTF-8''([^;]+)/i)?.[1];
  if (utf8) return decodeURIComponent(utf8);
  const plain = value.match(/filename="([^"]+)"/i)?.[1] ?? value.match(/filename=([^;]+)/i)?.[1];
  return plain ? repairHeaderText(plain.trim()) : null;
}

export function repairHeaderText(value) {
  if (!value || [...value].some((character) => character.codePointAt(0) > 255)) return value;
  const repaired = Buffer.from(value, "latin1").toString("utf8");
  return repaired.includes("�") || !/[\u3400-\u9fff]/u.test(repaired) ? value : repaired;
}

function safeFilename(value, fallback) {
  const cleaned = (value || fallback)
    .normalize("NFC")
    .replace(/[<>:"/\\|?*\u0000-\u001f]/g, "_")
    .replace(/[. ]+$/g, "")
    .slice(0, 180);
  return cleaned || fallback;
}

async function fetchBytes(url, attempts = 4) {
  let lastError;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, {
        redirect: "follow",
        headers: { "user-agent": "taiwan-cap-math-cap8-r4-source-audit/1.0" },
      });
      if (!response.ok) throw new Error(`${response.status} ${response.statusText}`);
      return {
        bytes: Buffer.from(await response.arrayBuffer()),
        contentDisposition: response.headers.get("content-disposition"),
        contentType: response.headers.get("content-type") || "application/octet-stream",
        finalUrl: response.url,
      };
    } catch (error) {
      lastError = error;
      if (attempt < attempts) await new Promise((resolve) => setTimeout(resolve, 250 * attempt));
    }
  }
  throw new Error(`Unable to fetch ${url}: ${lastError?.message}`);
}

async function walk(root, current = root) {
  const output = [];
  for (const entry of await readdir(current, { withFileTypes: true })) {
    if (entry.name === ".git" || entry.name === "node_modules" || entry.name === "cap8-r4") continue;
    const absolute = path.join(current, entry.name);
    if (entry.isDirectory()) output.push(...(await walk(root, absolute)));
    else if (entry.isFile() && REUSABLE_EXTENSIONS.has(path.extname(entry.name).toLowerCase())) {
      output.push(absolute);
    }
  }
  return output;
}

async function existingHashIndex() {
  const index = new Map();
  for (const absolute of await walk(REPO_ROOT)) {
    const digest = sha256(await readFile(absolute));
    const relative = path.relative(REPO_ROOT, absolute).replaceAll("\\", "/");
    if (!index.has(digest)) index.set(digest, relative);
  }
  return index;
}

async function acquire() {
  await mkdir(HTML_ROOT, { recursive: true });
  await mkdir(FILE_ROOT, { recursive: true });

  const pages = [];
  for (const [id, url] of STATIC_PAGES) {
    const result = await fetchBytes(url);
    const filename = `${id.toLowerCase()}.html`;
    await writeFile(path.join(HTML_ROOT, filename), result.bytes);
    pages.push({
      id,
      url,
      finalUrl: result.finalUrl,
      repositoryPath: path.relative(REPO_ROOT, path.join(HTML_ROOT, filename)).replaceAll("\\", "/"),
      bytes: result.bytes.length,
      sha256: sha256(result.bytes),
    });
  }

  const yearlyPages = [];
  const linkedFiles = [];
  for (const year of YEARS) {
    const pageUrl = `https://cap.rcpet.edu.tw/exam/${year}/${year}exam.html`;
    const result = await fetchBytes(pageUrl);
    const filename = `cap-${year}-exam.html`;
    await writeFile(path.join(HTML_ROOT, filename), result.bytes);
    const html = result.bytes.toString("utf8");
    const anchors = extractAnchors(html, pageUrl);
    yearlyPages.push({
      year,
      url: pageUrl,
      repositoryPath: path.relative(REPO_ROOT, path.join(HTML_ROOT, filename)).replaceAll("\\", "/"),
      bytes: result.bytes.length,
      sha256: sha256(result.bytes),
      anchorCount: anchors.length,
    });
    for (const anchor of anchors) {
      const id = driveId(anchor.url);
      if (id) linkedFiles.push({ year, title: anchor.title, sourceUrl: anchor.url, driveId: id });
      else if (anchor.url.startsWith("https://cap.rcpet.edu.tw/") && /doubt\.html$/i.test(anchor.url)) {
        const doubt = await fetchBytes(anchor.url);
        const doubtName = `cap-${year}-doubt.html`;
        await writeFile(path.join(HTML_ROOT, doubtName), doubt.bytes);
        pages.push({
          id: `CAP-${year}-DOUBT`,
          url: anchor.url,
          finalUrl: doubt.finalUrl,
          repositoryPath: path.relative(REPO_ROOT, path.join(HTML_ROOT, doubtName)).replaceAll("\\", "/"),
          bytes: doubt.bytes.length,
          sha256: sha256(doubt.bytes),
        });
      }
    }
  }

  const existing = await existingHashIndex();
  const files = [];
  for (let index = 0; index < linkedFiles.length; index += 1) {
    const linked = linkedFiles[index];
    const downloadUrl = `https://drive.usercontent.google.com/download?id=${linked.driveId}&export=download&confirm=t`;
    const result = await fetchBytes(downloadUrl);
    const digest = sha256(result.bytes);
    let repositoryPath = existing.get(digest) || null;
    let cacheRelativePath = null;
    let reused = Boolean(repositoryPath);
    const fallback = `${linked.year}-${String(index + 1).padStart(3, "0")}-${linked.driveId}`;
    const filename = safeFilename(contentDispositionFilename(result.contentDisposition), fallback);
    if (!repositoryPath) {
      const yearRoot = path.join(FILE_ROOT, String(linked.year));
      await mkdir(yearRoot, { recursive: true });
      const output = path.join(yearRoot, filename);
      await writeFile(output, result.bytes);
      cacheRelativePath = path.relative(FILE_ROOT, output).replaceAll("\\", "/");
      reused = false;
    }
    files.push({
      year: linked.year,
      title: linked.title,
      sourceUrl: linked.sourceUrl,
      driveId: linked.driveId,
      finalUrl: result.finalUrl,
      filename,
      contentType: result.contentType,
      bytes: result.bytes.length,
      sha256: digest,
      repositoryPath,
      cacheRelativePath,
      reusedExistingRepositoryFile: reused,
    });
    process.stderr.write(`official-source ${index + 1}/${linkedFiles.length}: ${linked.year} ${linked.title}\n`);
  }

  const uniqueDriveIds = new Set(files.map((entry) => entry.driveId));
  assert.equal(uniqueDriveIds.size, files.length, "duplicate Drive file IDs found in official year pages");
  return {
    schemaVersion: "cap8-r4-official-source-register-v1",
    retrievedDate: RETRIEVED_DATE,
    authority: "CAP official",
    yearRange: [YEARS[0], YEARS.at(-1)],
    externalCache: {
      environmentVariable: "CAP8_R4_OFFICIAL_CACHE",
      defaultSiblingDirectory: "taiwan-cap-math-cap8-r4-official-cache",
      committedToRepository: false
    },
    pages: pages.sort((a, b) => a.id.localeCompare(b.id, "en")),
    yearlyPages,
    files: files.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title, "zh-Hant")),
  };
}

async function repairExistingMetadata() {
  const register = JSON.parse(await readFile(REGISTER_PATH, "utf8"));
  let repaired = 0;
  for (const file of register.files) {
    const filename = repairHeaderText(file.filename);
    if (filename !== file.filename) {
      file.filename = filename;
      repaired += 1;
    }
  }
  await writeFile(REGISTER_PATH, `${JSON.stringify(register, null, 2)}\n`, "utf8");
  return repaired;
}

async function main() {
  if (process.argv[2] === "--repair-metadata") {
    const repaired = await repairExistingMetadata();
    process.stdout.write(`acquire-official-sources: repaired ${repaired} metadata filenames without changing source bytes\n`);
    return;
  }
  assert.equal(process.argv.length, 2, "Usage: node acquire-official-sources.mjs [--repair-metadata]");
  const result = await acquire();
  const output = REGISTER_PATH;
  process.stdout.write(
    `${JSON.stringify({ pages: result.pages.length, yearlyPages: result.yearlyPages.length, files: result.files.length, output: path.relative(REPO_ROOT, output).replaceAll("\\", "/") })}\n`,
  );
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  await main();
}
