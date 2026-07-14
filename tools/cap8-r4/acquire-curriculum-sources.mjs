import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import * as mupdf from "mupdf";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..");
const EVIDENCE_ROOT = path.join(HERE, "evidence", "curriculum");
const HTML_ROOT = path.join(EVIDENCE_ROOT, "html");
const TEXT_ROOT = path.join(EVIDENCE_ROOT, "text");
const CACHE_ROOT = process.env.CAP8_R4_OFFICIAL_CACHE
  ? path.resolve(process.env.CAP8_R4_OFFICIAL_CACHE)
  : path.resolve(REPO_ROOT, "..", "taiwan-cap-math-cap8-r4-official-cache");
const PDF_ROOT = path.join(CACHE_ROOT, "curriculum");
const RETRIEVED_DATE = "2026-07-14";

const DOCUMENTS = [
  {
    id: "NAER-CURRICULUM-CHINESE",
    subjects: ["chinese"],
    url: "https://www.naer.edu.tw/upload/1/16/doc/806/%E5%8D%81%E4%BA%8C%E5%B9%B4%E5%9C%8B%E6%B0%91%E5%9F%BA%E6%9C%AC%E6%95%99%E8%82%B2%E8%AA%B2%E7%A8%8B%E7%B6%B1%E8%A6%81%E5%9C%8B%E6%B0%91%E4%B8%AD%E5%B0%8F%E5%AD%B8%E6%9A%A8%E6%99%AE%E9%80%9A%E5%9E%8B%E9%AB%98%E7%B4%9A%E4%B8%AD%E7%AD%89%E5%AD%B8%E6%A0%A1%28%E8%AA%9E%E6%96%87%E9%A0%98%E5%9F%9F%E2%94%80%E5%9C%8B%E8%AA%9E%E6%96%87%29.pdf",
    odtUrl: "https://www.naer.edu.tw/upload/1/16/doc/806/%E5%8D%81%E4%BA%8C%E5%B9%B4%E5%9C%8B%E6%B0%91%E5%9F%BA%E6%9C%AC%E6%95%99%E8%82%B2%E8%AA%B2%E7%A8%8B%E7%B6%B1%E8%A6%81%E5%9C%8B%E6%B0%91%E4%B8%AD%E5%B0%8F%E5%AD%B8%E6%9A%A8%E6%99%AE%E9%80%9A%E5%9E%8B%E9%AB%98%E7%B4%9A%E4%B8%AD%E7%AD%89%E5%AD%B8%E6%A0%A1%E8%AA%9E%E6%96%87%E9%A0%98%E5%9F%9F-%E5%9C%8B%E8%AA%9E%E6%96%87.odt",
  },
  {
    id: "NAER-CURRICULUM-ENGLISH",
    subjects: ["english"],
    url: "https://www.naer.edu.tw/upload/1/16/doc/812/%28%E7%99%BC%E5%B8%83%E7%89%88%29%E5%9C%8B%E6%B0%91%E4%B8%AD%E5%B0%8F%E5%AD%B8%E6%9A%A8%E6%99%AE%E9%80%9A%E5%9E%8B%E9%AB%98%E7%B4%9A%E4%B8%AD%E7%AD%89%E5%AD%B8%E6%A0%A1-%E8%AA%9E%E6%96%87%E9%A0%98%E5%9F%9F-%E8%8B%B1%E8%AA%9E%E6%96%87%E8%AA%B2%E7%A8%8B%E7%B6%B1%E8%A6%81.pdf",
    odtUrl: "https://www.naer.edu.tw/upload/1/16/doc/812/%E5%8D%81%E4%BA%8C%E5%B9%B4%E5%9C%8B%E6%B0%91%E5%9F%BA%E6%9C%AC%E6%95%99%E8%82%B2%E8%AA%B2%E7%A8%8B%E7%B6%B1%E8%A6%81%E5%9C%8B%E6%B0%91%E4%B8%AD%E5%B0%8F%E5%AD%B8%E6%9A%A8%E6%99%AE%E9%80%9A%E5%9E%8B%E9%AB%98%E7%B4%9A%E4%B8%AD%E7%AD%89%E5%AD%B8%E6%A0%A1%E8%AA%9E%E6%96%87%E9%A0%98%E5%9F%9F%E2%94%80%E8%8B%B1%E8%AA%9E%E6%96%87.odt",
  },
  {
    id: "NAER-CURRICULUM-SOCIAL",
    subjects: ["geography", "history", "civics", "integrated_social"],
    url: "https://www.naer.edu.tw/upload/1/16/doc/819/%E5%8D%81%E4%BA%8C%E5%B9%B4%E5%9C%8B%E6%B0%91%E5%9F%BA%E6%9C%AC%E6%95%99%E8%82%B2%E8%AA%B2%E7%A8%8B%E7%B6%B1%E8%A6%81%E5%9C%8B%E6%B0%91%E4%B8%AD%E5%B0%8F%E5%AD%B8%E6%9A%A8%E6%99%AE%E9%80%9A%E5%9E%8B%E9%AB%98%E7%B4%9A%E4%B8%AD%E7%AD%89%E6%A0%A1-%E7%A4%BE%E6%9C%83%E9%A0%98%E5%9F%9F.pdf",
    odtUrl: "https://www.naer.edu.tw/upload/1/16/doc/819/%E5%8D%81%E4%BA%8C%E5%B9%B4%E5%9C%8B%E6%B0%91%E5%9F%BA%E6%9C%AC%E6%95%99%E8%82%B2%E8%AA%B2%E7%A8%8B%E7%B6%B1%E8%A6%81%E5%9C%8B%E6%B0%91%E4%B8%AD%E5%B0%8F%E5%AD%B8%E6%9A%A8%E6%99%AE%E9%80%9A%E5%9E%8B%E9%AB%98%E7%B4%9A%E4%B8%AD%E7%AD%89%E5%AD%B8%E6%A0%A1%E2%94%80%E7%A4%BE%E6%9C%83%E9%A0%98%E5%9F%9F.odt",
  },
  {
    id: "NAER-CURRICULUM-NATURAL",
    subjects: ["biology", "physics_chemistry", "earth_science", "integrated_natural"],
    url: "https://www.naer.edu.tw/upload/1/16/doc/820/%E5%8D%81%E4%BA%8C%E5%B9%B4%E5%9C%8B%E6%B0%91%E5%9F%BA%E6%9C%AC%E6%95%99%E8%82%B2%E8%AA%B2%E7%A8%8B%E7%B6%B1%E8%A6%81%E5%9C%8B%E6%B0%91%E4%B8%AD%E5%B0%8F%E5%AD%B8%E6%9A%A8%E6%99%AE%E9%80%9A%E5%9E%8B%E9%AB%98%E7%B4%9A%E4%B8%AD%E7%AD%89%E6%A0%A1-%E8%87%AA%E7%84%B6%E7%A7%91%E5%AD%B8%E9%A0%98%E5%9F%9F.pdf",
    odtUrl: "https://www.naer.edu.tw/upload/1/16/doc/820/%E5%8D%81%E4%BA%8C%E5%B9%B4%E5%9C%8B%E6%B0%91%E5%9F%BA%E6%9C%AC%E6%95%99%E8%82%B2%E8%AA%B2%E7%A8%8B%E7%B6%B1%E8%A6%81%E5%9C%8B%E6%B0%91%E4%B8%AD%E5%B0%8F%E5%AD%B8%E6%9A%A8%E6%99%AE%E9%80%9A%E5%9E%8B%E9%AB%98%E7%B4%9A%E4%B8%AD%E7%AD%89%E5%AD%B8%E6%A0%A1%E2%94%80%E8%87%AA%E7%84%B6%E7%A7%91%E5%AD%B8%E9%A0%98%E5%9F%9F.odt",
  },
];

const PAGES = [
  ["NAER-SYLLABUS-INDEX", "https://www.naer.edu.tw/PageSyllabus?fid=177"],
  ["NAER-APPROVED-TEXTBOOKS", "https://www.naer.edu.tw/PageDoc/Detail?fid=26&id=14"],
  ["ROC-LAWS", "https://law.moj.gov.tw/"],
];

function sha256(bytes) {
  return createHash("sha256").update(bytes).digest("hex");
}

async function fetchBytes(url) {
  const response = await fetch(url, {
    redirect: "follow",
    headers: { "user-agent": "taiwan-cap-math-cap8-r4-curriculum-audit/1.0" },
  });
  assert(response.ok, `${url}: ${response.status} ${response.statusText}`);
  return { bytes: Buffer.from(await response.arrayBuffer()), finalUrl: response.url };
}

function decodeXml(value) {
  return value.replace(/&#x([0-9a-f]+);|&#([0-9]+);|&(amp|lt|gt|quot|apos);/gi, (match, hex, decimal, name) => {
    if (hex) return String.fromCodePoint(Number.parseInt(hex, 16));
    if (decimal) return String.fromCodePoint(Number.parseInt(decimal, 10));
    return { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'" }[name.toLowerCase()];
  });
}

function extractOdtText(odtPath) {
  const xml = execFileSync("tar", ["-xOf", odtPath, "content.xml"], {
    encoding: "utf8",
    maxBuffer: 64 * 1024 * 1024,
  });
  const text = decodeXml(
    xml
      .replace(/<text:tab\s*\/>/g, "\t")
      .replace(/<text:line-break\s*\/>/g, "\n")
      .replace(/<\/text:(?:p|h)>/g, "\n")
      .replace(/<[^>]+>/g, ""),
  )
    .replace(/[ \t]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .normalize("NFC")
    .trim();
  assert(text.match(/[\u3400-\u9fff]/gu)?.length > 1000, `${odtPath}: extracted curriculum text is not usable`);
  return `${text}\n`;
}

export async function acquireCurriculumSources() {
  await Promise.all([HTML_ROOT, TEXT_ROOT, PDF_ROOT].map((directory) => mkdir(directory, { recursive: true })));
  const pages = [];
  for (const [id, url] of PAGES) {
    const result = await fetchBytes(url);
    const output = path.join(HTML_ROOT, `${id.toLowerCase()}.html`);
    await writeFile(output, result.bytes);
    pages.push({
      id,
      url,
      finalUrl: result.finalUrl,
      repositoryPath: path.relative(REPO_ROOT, output).replaceAll("\\", "/"),
      bytes: result.bytes.length,
      sha256: sha256(result.bytes),
    });
  }

  const documents = [];
  for (const source of DOCUMENTS) {
    const result = await fetchBytes(source.url);
    const odt = await fetchBytes(source.odtUrl);
    const pdfName = `${source.id.toLowerCase()}.pdf`;
    const odtName = `${source.id.toLowerCase()}.odt`;
    const pdfOutput = path.join(PDF_ROOT, pdfName);
    const odtOutput = path.join(PDF_ROOT, odtName);
    await writeFile(pdfOutput, result.bytes);
    await writeFile(odtOutput, odt.bytes);
    const document = mupdf.Document.openDocument(result.bytes, "application/pdf");
    const textBytes = Buffer.from(extractOdtText(odtOutput), "utf8");
    const textOutput = path.join(TEXT_ROOT, `${source.id.toLowerCase()}.txt`);
    await writeFile(textOutput, textBytes);
    documents.push({
      ...source,
      finalUrl: result.finalUrl,
      authority: "NAER/MOE official",
      role: "binding-scope",
      retrievedDate: RETRIEVED_DATE,
      pageCount: document.countPages(),
      bytes: result.bytes.length,
      sha256: sha256(result.bytes),
      cacheRelativePath: `curriculum/${pdfName}`,
      odtFinalUrl: odt.finalUrl,
      odtBytes: odt.bytes.length,
      odtSha256: sha256(odt.bytes),
      odtCacheRelativePath: `curriculum/${odtName}`,
      extractedTextPath: path.relative(REPO_ROOT, textOutput).replaceAll("\\", "/"),
      extractedTextBytes: textBytes.length,
      extractedTextSha256: sha256(textBytes),
      extractor: "odt-content.xml-v1",
    });
  }

  const register = {
    schemaVersion: "cap8-r4-curriculum-source-register-v1",
    retrievedDate: RETRIEVED_DATE,
    externalCache: {
      environmentVariable: "CAP8_R4_OFFICIAL_CACHE",
      defaultSiblingDirectory: "taiwan-cap-math-cap8-r4-official-cache",
      committedToRepository: false,
    },
    pages,
    documents,
  };
  await writeFile(path.join(EVIDENCE_ROOT, "curriculum-source-register.json"), `${JSON.stringify(register, null, 2)}\n`);
  return register;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const result = await acquireCurriculumSources();
  console.log(`acquire-curriculum-sources: OK - ${result.documents.length} official curricula, ${result.pages.length} authority pages`);
}
