import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const subjects = fs.readdirSync(root).filter(d => d.endsWith("會考作戰室")).sort();
const hubHtml = fs.readFileSync(path.join(root, "index.html"), "utf8");
const expectedCache = hubHtml.match(/\?v=(202607\d+[a-z])/g)?.[0]?.slice(3);
if (!expectedCache) throw new Error("hub index.html: missing ?v= cache token");

const domIds = ["paperHistoryToolbar", "paperHistoryPager", "paperHistoryStats", "paperHistoryList"];
const sharedScripts = ["fraction-markup.js", "paper-history-ui.js", "exam-choice-ui.js", "text-only-policy.js"];
const cssMarkers = [".picked-right", ".picked-wrong", ".is-answer", ".choice-mark"];
const appMarkers = ["PAPER_HISTORY_UI", "EXAM_CHOICE_UI", "paperDateFilter", "paperHistoryPage"];
const removedLectureQuizMarkers = ["30 秒觀念測驗", "quiz-reveal", "quiz-answer", "quiz-box"];
const formulaSubjects = new Set(["數學會考作戰室", "生物會考作戰室", "理化會考作戰室"]);

let failed = 0;
function fail(msg) {
  console.error(`FAIL ${msg}`);
  failed++;
}

for (const dir of subjects) {
  const base = path.join(root, dir);
  const html = fs.readFileSync(path.join(base, "index.html"), "utf8");
  const caches = [...new Set([...html.matchAll(/\?v=(202607\d+[a-z])/g)].map(m => m[1]))];
  if (caches.length !== 1 || caches[0] !== expectedCache) {
    fail(`${dir} index.html cache ${caches.join(",")} (expected ${expectedCache})`);
  }
  for (const script of sharedScripts) {
    if (!html.includes(script)) fail(`${dir} index.html missing ${script}`);
  }
  for (const id of domIds) {
    if (!html.includes(`id="${id}"`)) fail(`${dir} index.html missing #${id}`);
  }

  const app = fs.readFileSync(path.join(base, "app.js"), "utf8");
  for (const marker of removedLectureQuizMarkers) {
    if (app.includes(marker)) fail(`${dir} app.js still contains removed lecture quiz marker ${marker}`);
  }
  for (const marker of appMarkers) {
    if (!app.includes(marker)) fail(`${dir} app.js missing ${marker}`);
  }
  for (const marker of ["renderHistoryCardInfo", "examKindEyebrow"]) {
    if (!app.includes(marker)) fail(`${dir} app.js missing ${marker}`);
  }
  if (dir === "數學會考作戰室") {
    if (!app.includes("renderScoreMath")) fail(`${dir} app.js missing renderScoreMath`);
  } else if (!app.includes("renderScorePercent")) {
    fail(`${dir} app.js missing renderScorePercent`);
  }
  if (/kindBadge|esc\(state\.exam\.id\)|eyebrow">\$\{kindBadge/.test(app)) {
    fail(`${dir} app.js still exposes internal id/kindBadge in UI`);
  }
  if (formulaSubjects.has(dir) && !app.includes('procedure: "公式運算"')) {
    fail(`${dir} app.js missing procedure 公式運算 label`);
  }

  const css = fs.readFileSync(path.join(base, "styles.css"), "utf8");
  for (const marker of removedLectureQuizMarkers.slice(1)) {
    if (css.includes(marker)) fail(`${dir} styles.css still contains removed lecture quiz marker ${marker}`);
  }
  for (const marker of cssMarkers) {
    if (!css.includes(marker)) fail(`${dir} styles.css missing ${marker}`);
  }
  if (dir === "數學會考作戰室" && !css.includes(".paper-history-scores")) {
    fail(`${dir} styles.css missing .paper-history-scores`);
  }
  if (!html.includes('id="examEyebrow">模擬考')) {
    fail(`${dir} index.html examEyebrow default should be 模擬考`);
  }
  const readmePath = path.join(base, "README.md");
  if (fs.existsSync(readmePath) && /30\s*秒觀念測驗/.test(fs.readFileSync(readmePath, "utf8"))) {
    fail(`${dir} README.md still advertises 30 秒觀念測驗`);
  }
}

const repoText = subjects.flatMap(dir => [
  fs.readFileSync(path.join(root, dir, "app.js"), "utf8"),
  fs.readFileSync(path.join(root, dir, "index.html"), "utf8"),
]).join("\n");
if (repoText.includes("程序執行")) fail("found legacy label 程序執行 in subject files");

if (failed) {
  console.error(`\nsite-sync: ${failed} check(s) failed`);
  process.exit(1);
}
console.log(`OK: site-sync ${subjects.length} subjects aligned at cache ${expectedCache}`);
