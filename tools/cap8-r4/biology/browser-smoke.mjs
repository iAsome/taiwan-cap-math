import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium, firefox, webkit } from "playwright";
import AxeBuilder from "@axe-core/playwright";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..", "..", "..", "生物會考作戰室");
const TYPES = { ".html": "text/html; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".json": "application/json; charset=utf-8", ".css": "text/css; charset=utf-8", ".svg": "image/svg+xml", ".pdf": "application/pdf" };
const STORAGE_KEY = "cap8.r4.biology.progress.v1";
const RECOVERY_KEY = "cap8.r4.biology.invalidProgressBackup.v1";
const SEED_KEY = "cap8.r4.biology.examSeed.v1";
const ASSET_CASES = [
  ["BIO_R4_ASSET_MICROSCOPE", "BIO_R4_S009"],
  ["BIO_R4_ASSET_CELL_COMPARE", "BIO_R4_S018"],
  ["BIO_R4_ASSET_CIRCULATION", "BIO_R4_S065"],
  ["BIO_R4_ASSET_GENETICS", "BIO_R4_S131"],
  ["BIO_R4_ASSET_PLANT_TRANSPORT", "BIO_R4_S165"],
  ["BIO_R4_ASSET_ENERGY_PYRAMID", "BIO_R4_S186"],
  ["BIO_R4_ASSET_EXPERIMENT_GRAPH", "BIO_R4_S003"],
];

function server() {
  return createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
      const requested = path.resolve(ROOT, `.${pathname === "/" ? "/index.html" : pathname}`);
      assert(requested.startsWith(`${ROOT}${path.sep}`));
      const file = (await stat(requested)).isDirectory() ? path.join(requested, "index.html") : requested;
      response.writeHead(200, { "content-type": TYPES[path.extname(file)] ?? "application/octet-stream", "cache-control": "no-store" });
      response.end(await readFile(file));
    } catch {
      response.writeHead(404).end("Not found");
    }
  });
}

async function loadQuestions(page, ids) {
  return page.evaluate(async (questionIds) => Promise.all(questionIds.map(async (id) => await (await fetch(`r4/runtime/questions/${id}.json`)).json())), ids);
}

async function answerWithKeyboard(page, questions, { correct = true, incorrectIds = [] } = {}) {
  for (const question of questions) {
    const target = correct && !incorrectIds.includes(question.id) ? question.answerIndex : (question.answerIndex + 1) % 4;
    const inputs = page.locator(`.question-box[data-question-id="${question.id}"] input[type="radio"]`);
    assert.equal(await inputs.count(), 4, `${question.id}: four native radio choices`);
    await inputs.first().focus();
    await page.keyboard.press("Space");
    for (let index = 0; index < target; index += 1) await page.keyboard.press("ArrowDown");
    assert(await inputs.nth(target).isChecked(), `${question.id}: radio arrow-key selection failed`);
  }
  await page.locator("#submitAnswers").focus();
  await page.keyboard.press("Enter");
}

async function legacySnapshot(page) {
  return page.evaluate(() => Object.fromEntries(Object.keys(localStorage).filter((key) => key.startsWith("capBio")).sort().map((key) => [key, localStorage.getItem(key)])));
}

async function runBrowser(name, engine, baseUrl) {
  const browser = await engine.launch({ headless: true });
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();
  const errors = [];
  const resources = [];
  page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("request", (request) => resources.push(request.url()));
  await page.goto(baseUrl, { waitUntil: "networkidle" });
  await page.locator("h1").waitFor();
  assert.equal(await page.locator(".dashboard-item").count(), 30, `${name}: unit dashboard`);
  assert(!resources.some((url) => /\/(?:data|analysis-data|quiz-taxonomy|questions|app)\.js(?:\?|$)/u.test(url) && !url.includes("/r4/ui/app.js")), `${name}: legacy runtime loaded`);
  await page.goto(`${baseUrl}?quiz=g7-c1`, { waitUntil: "networkidle" });
  await page.locator("h1").waitFor();
  await page.goto(`${baseUrl}?legacy=1`, { waitUntil: "networkidle" });
  await page.locator("h1").waitFor();
  await page.keyboard.press("Tab");
  assert(await page.evaluate(() => document.activeElement !== document.body), `${name}: keyboard focus missing`);
  const { violations } = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
  assert.deepEqual(violations.map((violation) => violation.id), [], `${name}: accessibility violations`);
  const catalog = await page.evaluate(async () => await (await fetch("r4/runtime/catalog.json")).json());
  const firstSkill = catalog.skills.find((skill) => skill.prerequisites.length === 0);
  const dependentSkill = catalog.skills.find((skill) => skill.prerequisites.length > 0);
  assert(firstSkill && dependentSkill, `${name}: prerequisite fixtures missing`);
  await page.goto(`${baseUrl}?view=practice&skill=${dependentSkill.id}`, { waitUntil: "networkidle" });
  assert.equal(await page.locator(".question-box").count(), 0, `${name}: prerequisite practice was not gated`);
  assert(await page.locator("#prerequisiteHeading").isVisible(), `${name}: prerequisite remediation missing`);

  await page.goto(`${baseUrl}?view=diagnostic&skill=${firstSkill.id}`, { waitUntil: "networkidle" });
  assert.equal(await page.locator(".question-box").count(), 3, `${name}: diagnostic question count`);
  const diagnosticQuestions = await loadQuestions(page, firstSkill.questionIds.slice(0, 3));
  assert(await page.locator(".question-box").first().locator("fieldset").count(), `${name}: native radio group fieldset missing`);
  await answerWithKeyboard(page, diagnosticQuestions, { correct: false });
  assert(await page.locator(`#result a[href="?view=lecture&skill=${firstSkill.id}"]`).isVisible(), `${name}: diagnostic remediation lecture link`);
  const diagnosticState = await page.evaluate(([storageKey, skillId]) => {
    const progress = JSON.parse(localStorage.getItem(storageKey));
    return { attempt: progress.attempts[`diagnostic:${skillId}`].at(-1), review: progress.reviewQueue.find((item) => item.skillId === skillId) };
  }, [STORAGE_KEY, firstSkill.id]);
  assert.equal(diagnosticState.attempt.answers.length, 3, `${name}: diagnostic answers not recorded`);
  assert(diagnosticState.attempt.answers.every((answer) => !answer.correct), `${name}: diagnostic error records incorrect`);
  assert(diagnosticState.attempt.mistakeTypes.length > 0, `${name}: diagnostic errors not classified`);
  assert(new Date(diagnosticState.review.dueAt).getTime() > Date.now(), `${name}: spaced review was not deferred`);

  await page.locator(`#result a[href="?view=lecture&skill=${firstSkill.id}"]`).click();
  await page.locator("h1").waitFor();
  await page.goto(`${baseUrl}?view=practice&skill=${firstSkill.id}`, { waitUntil: "networkidle" });
  assert.equal(await page.locator(".question-box").count(), 12, `${name}: practice question count`);
  const practiceQuestions = await loadQuestions(page, firstSkill.questionIds);
  await answerWithKeyboard(page, practiceQuestions, { incorrectIds: [practiceQuestions[0].id] });
  assert(await page.locator("#result .success").isVisible(), `${name}: mastery success missing`);
  assert((await page.evaluate((storageKey) => JSON.parse(localStorage.getItem(storageKey)).completedSkills, STORAGE_KEY)).includes(firstSkill.id), `${name}: mastery did not complete skill`);
  assert.equal(await page.locator(".question-box").first().locator(".rationales a").getAttribute("href"), `?view=lecture&skill=${firstSkill.id}`, `${name}: remediation lecture link`);
  const practiceReviewIds = await page.evaluate(([storageKey, skillId]) => JSON.parse(localStorage.getItem(storageKey)).reviewQueue.find((item) => item.skillId === skillId).questionIds, [STORAGE_KEY, firstSkill.id]);
  assert.deepEqual(practiceReviewIds, [practiceQuestions[0].id], `${name}: mastered error was not classified for review`);

  await page.goto(`${baseUrl}?view=review&skill=${firstSkill.id}`, { waitUntil: "networkidle" });
  assert.equal(await page.locator(".question-box").count(), 0, `${name}: future review opened early`);
  await page.evaluate(([storageKey, skillId]) => {
    const progress = JSON.parse(localStorage.getItem(storageKey));
    progress.reviewQueue.find((item) => item.skillId === skillId).dueAt = new Date(0).toISOString();
    localStorage.setItem(storageKey, JSON.stringify(progress));
  }, [STORAGE_KEY, firstSkill.id]);
  await page.reload({ waitUntil: "networkidle" });
  const reviewQuestions = await loadQuestions(page, practiceReviewIds);
  assert.equal(await page.locator(".question-box").count(), reviewQuestions.length, `${name}: due review question count`);
  await answerWithKeyboard(page, reviewQuestions);
  assert.equal(await page.evaluate(([storageKey, skillId]) => JSON.parse(localStorage.getItem(storageKey)).reviewQueue.some((item) => item.skillId === skillId), [STORAGE_KEY, firstSkill.id]), false, `${name}: passed review was not cleared`);

  await page.goto(`${baseUrl}?view=stimulus&skill=${firstSkill.id}`, { waitUntil: "networkidle" });
  assert.equal(await page.locator(".question-box").count(), 3, `${name}: stimulus question count`);
  await page.goto(`${baseUrl}?view=stimulus&skill=BIO_R4_S081`, { waitUntil: "networkidle" });
  assert.equal(await page.locator(".stimulus .data-table").count(), 1, `${name}: root-level stimulus table`);
  assert.equal(await page.locator(".stimulus .data-table tbody tr").count(), 3, `${name}: root-level stimulus table rows`);
  await page.goto(`${baseUrl}?view=stimulus&skill=BIO_R4_S041`, { waitUntil: "networkidle" });
  assert.equal(await page.locator(".stimulus .data-table").count(), 1, `${name}: fallback stimulus table`);
  assert.equal(await page.locator(".stimulus .data-table tbody tr").count(), 3, `${name}: fallback stimulus table rows`);

  for (const [assetId, skillId] of ASSET_CASES) {
    const metadata = await page.evaluate(async (id) => await (await fetch(`r4/runtime/assets/${id}.json`)).json(), assetId);
    await page.goto(`${baseUrl}?view=lecture&skill=${skillId}`, { waitUntil: "networkidle" });
    const figure = page.locator("figure").filter({ has: page.locator(`img[src$="${path.posix.basename(metadata.path)}"]`) });
    assert.equal(await figure.count(), 1, `${name}: ${assetId} figure missing`);
    const image = figure.locator("img");
    assert(await image.evaluate((item) => item.complete && item.naturalWidth > 0), `${name}: ${assetId} image failed to render`);
    assert.equal(await image.getAttribute("alt"), metadata.altText, `${name}: ${assetId} alt mismatch`);
    assert.equal((await figure.locator("figcaption").textContent()).trim(), metadata.caption, `${name}: ${assetId} caption mismatch`);
    assert.equal((await figure.locator("details p").textContent()).trim(), metadata.longDescription, `${name}: ${assetId} long description mismatch`);
    assert.equal(await figure.locator("tbody tr").count(), metadata.dataFallback.rows.length, `${name}: ${assetId} fallback rows mismatch`);
    await page.emulateMedia({ media: "print" });
    assert(await figure.locator("details p").evaluate((item) => getComputedStyle(item).display !== "none"), `${name}: print hides ${assetId} long description`);
    assert(await figure.locator("details table").evaluate((item) => getComputedStyle(item).display !== "none"), `${name}: print hides ${assetId} data fallback`);
    await page.emulateMedia({ media: "screen" });
  }

  await page.evaluate(() => {
    localStorage.setItem("capBio.lastSeed", "legacy-seed");
    localStorage.setItem("capBio.smokeSentinel", "legacy-bytes-must-not-change");
  });
  const legacyBeforeExam = await legacySnapshot(page);
  await page.goto(`${baseUrl}?view=exam&skill=${firstSkill.id}&seed=12345`, { waitUntil: "networkidle" });
  assert.match(await page.locator(".page-heading p").textContent(), /不是正式會考自然科的完整模擬卷/u, `${name}: biology-only exam disclosure`);
  await page.locator("#examForm button").click();
  await page.locator(".question-box").nth(49).waitFor();
  assert.equal(await page.locator(".question-box").count(), 50, `${name}: exam question count`);
  const examSkillIds = await page.locator(".question-box").evaluateAll((boxes) => boxes.map((box) => box.dataset.skillId));
  const skillUnits = new Map(catalog.skills.map((item) => [item.id, item.unitId]));
  assert.equal(new Set(examSkillIds.map((id) => skillUnits.get(id))).size, 30, `${name}: exam must cover all 30 units`);
  assert.deepEqual(await page.locator("#examPaper > .stimulus > h2").allTextContents(), Array.from({ length: 10 }, (_, index) => `題組 ${index + 1}`), `${name}: reading group numbering`);
  assert.deepEqual(await legacySnapshot(page), legacyBeforeExam, `${name}: R4 seed changed legacy bytes`);
  assert.equal(await page.evaluate((seedKey) => localStorage.getItem(seedKey), SEED_KEY), "12345", `${name}: R4 seed was not saved separately`);
  await page.goto(`${baseUrl}?view=official`, { waitUntil: "networkidle" });
  assert.equal(await page.locator("h1").textContent(), "歷屆自然科官方題本", `${name}: official route heading`);
  assert.equal(await page.title(), "歷屆自然科官方題本 | 生物會考作戰室", `${name}: official route title`);
  assert(await page.locator("#offlineButton").isDisabled(), `${name}: official route offline button enabled`);
  assert.equal(await page.locator("a[download]").count(), 20, `${name}: official download count`);
  await page.emulateMedia({ media: "print" });
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1), true, `${name}: print overflow`);
  if (name === "chromium") {
    await page.emulateMedia({ media: "screen" });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    assert(await page.locator(".unit-button").first().isVisible(), "chromium: mobile unit navigation hidden");
    assert(await page.locator("#offlineButton").isDisabled(), "chromium: home route offline button enabled");
    assert.equal(await page.locator("#offlineButton").textContent(), "請先進入單元", "chromium: home route offline guidance missing");
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1), true, "chromium: mobile overflow");
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1), true, "chromium: tablet overflow");
    await page.evaluate((storageKey) => localStorage.setItem(storageKey, JSON.stringify({
      schemaVersion: 1,
      contentVersion: "old",
      completedSkills: ["BIO_R4_S001", "BIO_R4_S999", "BIO_R4_S001"],
      attempts: {},
    })), STORAGE_KEY);
    await page.reload({ waitUntil: "networkidle" });
    assert.deepEqual(await page.evaluate((storageKey) => JSON.parse(localStorage.getItem(storageKey)).completedSkills, STORAGE_KEY), ["BIO_R4_S001"], "chromium: stale progress skill IDs were not normalized");
    const partialProgress = '{"schemaVersion":1,"completedSkills":["BIO_R4_S001"]}';
    await page.evaluate(([storageKey, recoveryKey, raw]) => {
      localStorage.setItem(storageKey, raw);
      localStorage.removeItem(recoveryKey);
    }, [STORAGE_KEY, RECOVERY_KEY, partialProgress]);
    await page.reload({ waitUntil: "networkidle" });
    assert.equal(await page.evaluate((recoveryKey) => JSON.parse(localStorage.getItem(recoveryKey)).raw, RECOVERY_KEY), partialProgress, "chromium: partial R4 progress was not preserved before recovery");
    assert.equal(await page.evaluate((storageKey) => Array.isArray(JSON.parse(localStorage.getItem(storageKey)).attempts), STORAGE_KEY), false, "chromium: partial R4 progress did not recover to a valid attempts record");

    const malformedProgress = '{"schemaVersion":1,"completedSkills":[';
    await page.evaluate(([storageKey, recoveryKey, raw]) => {
      localStorage.setItem(storageKey, raw);
      localStorage.removeItem(recoveryKey);
    }, [STORAGE_KEY, RECOVERY_KEY, malformedProgress]);
    await page.reload({ waitUntil: "networkidle" });
    assert.equal(await page.evaluate((recoveryKey) => JSON.parse(localStorage.getItem(recoveryKey)).raw, RECOVERY_KEY), malformedProgress, "chromium: malformed R4 JSON was not backed up verbatim");

    const arrayAttempts = JSON.stringify({ schemaVersion: 1, completedSkills: [], attempts: [] });
    await page.evaluate(([storageKey, recoveryKey, raw]) => {
      localStorage.setItem(storageKey, raw);
      localStorage.removeItem(recoveryKey);
    }, [STORAGE_KEY, RECOVERY_KEY, arrayAttempts]);
    await page.reload({ waitUntil: "networkidle" });
    assert.equal(await page.evaluate((recoveryKey) => JSON.parse(localStorage.getItem(recoveryKey)).raw, RECOVERY_KEY), arrayAttempts, "chromium: array attempts were not rejected and backed up");
    assert.equal(await page.evaluate((storageKey) => Array.isArray(JSON.parse(localStorage.getItem(storageKey)).attempts), STORAGE_KEY), false, "chromium: array attempts were not repaired");
    await page.evaluate(() => {
      localStorage.setItem("capBio.completed", "[1,2]");
      localStorage.setItem("capBio.quizSignatures.g7-c1", "[\"legacy-signature\"]");
      localStorage.removeItem("cap8.r4.biology.legacyBackup.v1");
      localStorage.removeItem("cap8.r4.biology.progress.v1");
    });
    const legacyBeforeMigration = await legacySnapshot(page);
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    assert.deepEqual(await legacySnapshot(page), legacyBeforeMigration, "chromium: legacy migration changed source bytes");
    const backup = await page.evaluate(() => JSON.parse(localStorage.getItem("cap8.r4.biology.legacyBackup.v1")));
    assert.equal(backup.raw["capBio.completed"], "[1,2]");
    assert.equal(backup.raw["capBio.quizSignatures.g7-c1"], "[\"legacy-signature\"]");
    const mappedProgress = await page.evaluate(() => JSON.parse(localStorage.getItem("cap8.r4.biology.progress.v1")));
    assert(mappedProgress.completedSkills.includes("BIO_R4_S017"));
    assert(mappedProgress.completedSkills.includes("BIO_R4_S041"));
    assert.deepEqual(mappedProgress.legacy.mappedCompletedSkills, mappedProgress.completedSkills);
    const largeLength = await page.evaluate(() => {
      const value = JSON.stringify([{ payload: "x".repeat(3_300_000) }]);
      localStorage.setItem("capBio.paperHistory", value);
      localStorage.setItem("capBio.completed", "{broken-json");
      localStorage.removeItem("cap8.r4.biology.legacyBackup.v1");
      localStorage.removeItem("cap8.r4.biology.progress.v1");
      return value.length;
    });
    await page.reload({ waitUntil: "networkidle" });
    const largeMigration = await page.evaluate(() => ({
      backup: JSON.parse(localStorage.getItem("cap8.r4.biology.legacyBackup.v1")),
      progress: JSON.parse(localStorage.getItem("cap8.r4.biology.progress.v1")),
      originalLength: localStorage.getItem("capBio.paperHistory").length,
    }));
    assert.equal(largeMigration.originalLength, largeLength);
    assert.equal(largeMigration.backup.preservedInPlace, true);
    assert.equal(largeMigration.progress.legacy.paperHistoryCount, 1);
    assert.deepEqual(largeMigration.progress.legacy.completed, []);
    const backupBeforeRepeat = JSON.stringify(largeMigration.backup);
    await page.reload({ waitUntil: "networkidle" });
    assert.equal(await page.evaluate(() => localStorage.getItem("cap8.r4.biology.legacyBackup.v1")), backupBeforeRepeat);
    const offlineContext = await browser.newContext({ reducedMotion: "reduce" });
    const offlinePage = await offlineContext.newPage();
    offlinePage.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
    offlinePage.on("pageerror", (error) => errors.push(error.message));
    await offlinePage.goto(`${baseUrl}?view=lecture&skill=BIO_R4_S009`, { waitUntil: "domcontentloaded" });
    await offlinePage.locator("h1").waitFor();
    await offlinePage.locator("#offlineButton:not([disabled])").waitFor();
    assert(await offlinePage.locator("#offlineButton").isEnabled(), "chromium: unit route offline button disabled");
    assert.equal(await offlinePage.locator("#offlineButton").textContent(), "下載本單元", "chromium: unit download label missing");
    assert.match(await offlinePage.locator("#offlineButton").getAttribute("aria-label"), /下載「.+」供離線使用/u, "chromium: unit download accessible label missing");
    await offlinePage.locator("#offlineButton").click();
    await offlinePage.locator("#status").filter({ hasText: "已可離線使用" }).waitFor({ timeout: 15_000 });
    const contentCache = `cap8-r4-biology-content-${catalog.contentVersion.replaceAll(".", "-")}`;
    const offlineKeys = await offlinePage.evaluate(async (cacheName) => (await (await caches.open(cacheName)).keys()).map((request) => new URL(request.url).pathname), contentCache);
    assert(offlineKeys.some((url) => url.endsWith("/r4/runtime/assets/BIO_R4_ASSET_MICROSCOPE.json")), "chromium: offline asset metadata missing");
    assert(offlineKeys.some((url) => url.endsWith("/r4/assets/microscope.svg")), "chromium: offline diagram missing");
    await offlineContext.setOffline(true);
    await offlinePage.reload({ waitUntil: "domcontentloaded" });
    await offlinePage.locator("h1").waitFor();
    assert(await offlinePage.locator("figure img").first().evaluate((image) => image.complete && image.naturalWidth > 0), "chromium: offline diagram did not render");
    await offlineContext.close();
    const denied = await browser.newContext();
    await denied.addInitScript(() => {
      Storage.prototype.getItem = () => { throw new DOMException("denied", "SecurityError"); };
      Storage.prototype.setItem = () => { throw new DOMException("denied", "SecurityError"); };
      Storage.prototype.key = () => { throw new DOMException("denied", "SecurityError"); };
    });
    const deniedPage = await denied.newPage();
    await deniedPage.goto(baseUrl, { waitUntil: "networkidle" });
    await deniedPage.locator("h1").waitFor();
    assert.equal(await deniedPage.locator(".dashboard-item").count(), 30, "chromium: app failed when storage access was denied");
    await denied.close();
  }
  assert(!resources.some((url) => /\/(?:data|analysis-data|quiz-taxonomy|questions|app)\.js(?:\?|$)/u.test(url) && !url.includes("/r4/ui/app.js")), `${name}: legacy runtime became reachable`);
  assert.deepEqual(errors, [], `${name}: browser errors`);
  await browser.close();
}

const http = server();
await new Promise((resolve) => http.listen(0, "127.0.0.1", resolve));
try {
  const { port } = http.address();
  const baseUrl = `http://127.0.0.1:${port}/`;
  for (const [name, engine] of [["chromium", chromium], ["firefox", firefox], ["webkit", webkit]]) await runBrowser(name, engine, baseUrl);
  console.log("browser-smoke: OK - Chromium, Firefox, WebKit, WCAG, print, offline, migration");
} finally {
  await new Promise((resolve) => http.close(resolve));
}
