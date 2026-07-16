import assert from "node:assert/strict";
import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { sha256 } from "../r4-core.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(HERE, "..", "..", "..");
const REVIEW_ROOT = path.join(HERE, "..", "ledger", "reviews", "items");
const OUTPUT = path.join(HERE, "earth-official-106-115-calibration.json");

export async function collectEarthCalibration({ reviewRoot = REVIEW_ROOT, repoRoot = REPO_ROOT } = {}) {
  const names = (await readdir(reviewRoot)).filter((name) => /^CAP-\d{3}-(?:MAIN|ALTERNATE)-integrated-natural\.json$/u.test(name)).sort();
  const papers = [];
  for (const name of names) {
    const review = JSON.parse(await readFile(path.join(reviewRoot, name), "utf8"));
    const items = review.items.filter((item) => item.primarySubject === "earth_science" || item.secondarySubjects.includes("earth_science"));
    papers.push({
      examId: review.examId,
      reviewStatus: review.reviewStatus,
      items: items.map((item) => ({
        candidateId: item.candidateId,
        role: item.primarySubject === "earth_science" ? "primary" : "secondary",
        sharedStimulusId: item.sharedStimulusId,
        curriculumCodes: item.curriculumCodes,
        skills: item.skills,
        representationTypes: item.representationTypes,
        reasoningOperations: item.reasoningOperations,
        derivedAnswer: item.derivedAnswer,
      })),
    });
  }
  const mainCount = papers.filter((paper) => paper.examId.endsWith("-MAIN")).reduce((sum, paper) => sum + paper.items.length, 0);
  const alternateCount = papers.filter((paper) => paper.examId.endsWith("-ALTERNATE")).reduce((sum, paper) => sum + paper.items.length, 0);
  assert.equal(mainCount, 131, "official 106-115 Earth main-paper calibration count changed");
  assert.equal(alternateCount, 37, "official Earth alternate-paper calibration count changed");
  const yearsCovered = [...new Set(papers.filter((paper) => paper.examId.endsWith("-MAIN")).map((paper) => Number(paper.examId.split("-")[1])))].sort();
  assert.deepEqual(yearsCovered, Array.from({ length: 10 }, (_, index) => 106 + index), "official main-paper year coverage");
  assert(papers.every((paper) => paper.reviewStatus === "complete-rendered-semantic-review"), "all calibration papers require completed rendered review");
  const officialFiles = [];
  for (const year of yearsCovered) {
    for (const role of ["exam", "answer", "guide"]) {
      const repositoryPath = `地科會考作戰室/official-data/${year}/${year}-${role}.pdf`;
      const bytes = await readFile(path.join(repoRoot, ...repositoryPath.split("/")));
      officialFiles.push({ year, role, repositoryPath, sha256: sha256(bytes), bytes: bytes.length });
    }
  }
  assert.equal(officialFiles.length, 30);
  const representationCounts = {};
  for (const item of papers.flatMap((paper) => paper.items)) {
    for (const type of item.representationTypes) representationCounts[type] = (representationCounts[type] ?? 0) + 1;
  }
  const sharedStimulusCount = new Set(papers.flatMap((paper) => paper.items.map((item) => item.sharedStimulusId).filter(Boolean))).size;
  const publisherBytes = await readFile(path.join(repoRoot, "tools", "cap8-r4", "evidence", "publisher", "naer-115-approved-textbooks.json"));
  const publisherCatalog = JSON.parse(publisherBytes);
  const naturalTextbooks = publisherCatalog.records.filter((record) => record.subject === "integrated_natural");
  assert.equal(naturalTextbooks.length, 18);
  return {
    schemaVersion: "cap8-r4-earth-official-calibration-v1",
    authority: "Official CAP rendered item reviews; use for form and cognitive-demand calibration, never for copying item wording.",
    mainCount,
    alternateCount,
    yearsCovered,
    sharedStimulusCount,
    representationCounts: Object.fromEntries(Object.entries(representationCounts).sort(([a], [b]) => a.localeCompare(b, "en"))),
    authoritySources: [
      { id: "NAER-CURRICULUM-NATURAL", role: "binding-scope", url: "https://www.naer.edu.tw/upload/1/16/doc/820/%E5%8D%81%E4%BA%8C%E5%B9%B4%E5%9C%8B%E6%B0%91%E5%9F%BA%E6%9C%AC%E6%95%99%E8%82%B2%E8%AA%B2%E7%A8%8B%E7%B6%B1%E8%A6%81%E5%9C%8B%E6%B0%91%E4%B8%AD%E5%B0%8F%E5%AD%B8%E6%9A%A8%E6%99%AE%E9%80%9A%E5%9E%8B%E9%AB%98%E7%B4%9A%E4%B8%AD%E7%AD%89%E6%A0%A1-%E8%87%AA%E7%84%B6%E7%A7%91%E5%AD%B8%E9%A0%98%E5%9F%9F.pdf", sha256: "f39ef4fc343e86db3e11174c1900563715816280b004c05e0e0bad22709c40ca" },
      { id: "CAP-NATURAL-SCOPE", role: "assessment-scope", url: "https://cap.rcpet.edu.tw/test2.html" },
      { id: "CAP-NATURAL-ABILITY", role: "assessment-calibration", url: "https://cap.rcpet.edu.tw/test4-6.html" },
      { id: "CAP-PAST-PAPERS", role: "official-ten-year-papers", url: "https://cap.rcpet.edu.tw/examination.html" },
    ],
    officialFiles,
    publisherReference: {
      role: "discovery-and-omission-check-only; never expands official scope or licenses textbook wording",
      catalogSha256: sha256(publisherBytes),
      recordCount: naturalTextbooks.length,
      publishers: [...new Set(naturalTextbooks.map((record) => record.publisher))].sort(),
      recordIds: naturalTextbooks.map((record) => record.id),
    },
    papers,
  };
}

async function main() {
  const result = await collectEarthCalibration();
  await writeFile(OUTPUT, `${JSON.stringify(result, null, 2)}\n`, "utf8");
  console.log(`build-official-calibration: OK - ${result.mainCount} main and ${result.alternateCount} alternate Earth items`);
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) await main();
