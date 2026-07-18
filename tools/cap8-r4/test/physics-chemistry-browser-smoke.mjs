import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";
import { createServer } from "node:http";
import path from "node:path";
import { fileURLToPath } from "node:url";
import AxeBuilder from "@axe-core/playwright";
import { chromium, firefox, webkit } from "playwright";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(HERE, "..", "..", "..", "理化會考作戰室");
const STORAGE_KEY = "capR4.physicsChemistry.progress.v4";
const BACKUP_KEY = "capR4.physicsChemistry.migrationBackup.v1";
const TYPES = {
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".webmanifest": "application/manifest+json",
};

function server() {
  return createServer(async (request, response) => {
    try {
      const pathname = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
      const requested = path.resolve(ROOT, `.${pathname === "/" ? "/index.html" : pathname}`);
      assert(requested.startsWith(`${ROOT}${path.sep}`));
      const file = (await stat(requested)).isDirectory() ? path.join(requested, "index.html") : requested;
      response.writeHead(200, {
        "cache-control": "no-store",
        "content-type": TYPES[path.extname(file)] ?? "application/octet-stream",
      });
      response.end(await readFile(file));
    } catch {
      response.writeHead(404).end("Not found");
    }
  });
}

async function waitForContent(page) {
  await page.locator("#unitSelect:not([disabled])").waitFor();
  await page.locator("#appStatus").filter({ hasText: "已載入" }).waitFor();
}

async function chooseSkill(page, catalog, skillId) {
  const skill = catalog.skills.find((value) => value.id === skillId);
  assert(skill, `${skillId}: missing catalog skill`);
  await page.locator("#unitSelect").selectOption(skill.unitId);
  await page.locator("#skillSelect").selectOption(skill.id);
  await page.locator("#appStatus").filter({ hasText: `${skill.id}「${skill.title}」已載入` }).waitFor();
  return skill;
}

async function chooseMode(page, value) {
  await page.locator(`input[name="mode"][value="${value}"]`).check();
  await page.locator("#appStatus").filter({ hasText: value === "practice" ? "技能練習" : value === "stimulus" ? "資料題組" : "講義" }).waitFor();
}

async function answerPracticeWithKeyboard(page, questions) {
  for (const question of questions) {
    const inputs = page.locator(`[data-question-id="${question.id}"] input[type="radio"]`);
    assert.equal(await inputs.count(), 4, `${question.id}: four native radio choices`);
    await inputs.first().focus();
    await page.keyboard.press("Space");
    for (let index = 0; index < question.answerIndex; index += 1) await page.keyboard.press("ArrowDown");
    assert(await inputs.nth(question.answerIndex).isChecked(), `${question.id}: arrow-key choice failed`);
  }
  const submit = page.locator(".submit-row button");
  await submit.focus();
  await page.keyboard.press("Enter");
}

async function runBrowser(name, engine, baseUrl) {
  const browser = await engine.launch({ headless: true });
  try {
    const context = await browser.newContext({ reducedMotion: "reduce" });
    const page = await context.newPage();
    const errors = [];
    page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
    page.on("pageerror", (error) => errors.push(error.message));
    await page.goto(baseUrl, { waitUntil: "networkidle" });
    await waitForContent(page);

    const catalog = await page.evaluate(async () => await (await fetch("runtime/content-catalog.json")).json());
    assert.equal(await page.locator("#unitSelect option").count(), 40, `${name}: unit count`);
    assert.equal(catalog.skills.length, 300, `${name}: catalog skill count`);
    await page.keyboard.press("Tab");
    assert.notEqual(await page.evaluate(() => document.activeElement), null, `${name}: keyboard focus`);
    const { violations } = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa", "wcag22aa"]).analyze();
    assert.deepEqual(violations.map((value) => value.id), [], `${name}: WCAG violations`);

    const first = catalog.skills[0];
    await chooseMode(page, "practice");
    assert.equal(await page.locator(".question-card").count(), 12, `${name}: practice count`);
    const questions = await page.evaluate(async (ids) => Promise.all(ids.map(async (id) => await (await fetch(`runtime/questions/${id}.json`)).json())), first.questionIds);
    await answerPracticeWithKeyboard(page, questions);
    await page.locator("#scoreResult").filter({ hasText: "答對 12/12" }).waitFor();
    const stored = await page.evaluate((key) => JSON.parse(localStorage.getItem(key)), STORAGE_KEY);
    assert.equal(stored.attempts[first.id].practice.best, 12, `${name}: practice progress`);

    await chooseMode(page, "stimulus");
    assert.equal(await page.locator(".question-card").count(), 3, `${name}: stimulus count`);
    assert(await page.locator(".stimulus-card table caption").textContent(), `${name}: table caption`);
    assert(await page.locator(".stimulus-card tbody tr").count(), `${name}: stimulus rows`);

    if (name === "chromium") {
      const figureSkill = await chooseSkill(page, catalog, "PHYCHM_R4_S243");
      await chooseMode(page, "stimulus");
      const image = page.locator("figure img");
      await image.waitFor();
      assert(await image.evaluate((value) => value.complete && value.naturalWidth > 0), "chromium: governed figure failed to render");
      const metadata = await page.evaluate(async (id) => await (await fetch(`runtime/assets/${id}.json`)).json(), figureSkill.assetIds[0]);
      assert.equal(await image.getAttribute("alt"), metadata.altText, "chromium: figure alt mismatch");
      assert.equal((await page.locator("figure figcaption").textContent()).trim(), metadata.caption, "chromium: figure caption mismatch");
      assert.equal((await page.locator("figure details p").textContent()).trim(), metadata.longDescription, "chromium: figure long description mismatch");

      await page.emulateMedia({ media: "print" });
      assert(await page.locator("figure details p").evaluate((value) => getComputedStyle(value).display !== "none"), "chromium: print hides long description");
      assert(await page.locator("figure details table").evaluate((value) => getComputedStyle(value).display !== "none"), "chromium: print hides data alternative");
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1), "chromium: print overflow");
      await page.emulateMedia({ media: "screen" });

      await page.setViewportSize({ width: 390, height: 844 });
      assert(await page.evaluate(() => document.documentElement.scrollWidth <= document.documentElement.clientWidth + 1), "chromium: mobile overflow");
      await page.setViewportSize({ width: 1280, height: 900 });

      await page.evaluate(async () => await navigator.serviceWorker.ready);
      await page.reload({ waitUntil: "networkidle" });
      await waitForContent(page);
      await chooseSkill(page, catalog, "PHYCHM_R4_S243");
      await chooseMode(page, "stimulus");
      await image.waitFor();
      await context.setOffline(true);
      await page.reload({ waitUntil: "domcontentloaded" });
      await waitForContent(page);
      await chooseSkill(page, catalog, "PHYCHM_R4_S243");
      await chooseMode(page, "stimulus");
      assert(await image.evaluate((value) => value.complete && value.naturalWidth > 0), "chromium: offline figure failed to render");
      await context.setOffline(false);

      const legacyRaw = "legacy-bytes-must-not-change";
      const invalidRaw = "{invalid-json";
      await page.evaluate(([storageKey, backupKey, legacy, invalid]) => {
        localStorage.setItem("capScience.smoke", legacy);
        localStorage.setItem(storageKey, invalid);
        localStorage.removeItem(backupKey);
      }, [STORAGE_KEY, BACKUP_KEY, legacyRaw, invalidRaw]);
      await page.reload({ waitUntil: "networkidle" });
      await waitForContent(page);
      const migration = await page.evaluate(([storageKey, backupKey]) => ({
        backup: JSON.parse(localStorage.getItem(backupKey)),
        legacy: localStorage.getItem("capScience.smoke"),
        progress: JSON.parse(localStorage.getItem(storageKey)),
      }), [STORAGE_KEY, BACKUP_KEY]);
      assert.equal(migration.backup.r4Raw, invalidRaw, "chromium: invalid progress bytes not backed up");
      assert.equal(migration.backup.legacy["capScience.smoke"], legacyRaw, "chromium: legacy snapshot missing");
      assert.equal(migration.legacy, legacyRaw, "chromium: legacy storage mutated");
      assert.deepEqual(migration.progress.completedSkillIds, [], "chromium: recovered progress is not fresh");
    }

    assert.deepEqual(errors, [], `${name}: browser errors`);
    await context.close();
  } finally {
    await browser.close();
  }
}

const http = server();
await new Promise((resolve) => http.listen(0, "127.0.0.1", resolve));
try {
  const { port } = http.address();
  const baseUrl = `http://127.0.0.1:${port}/r4/`;
  for (const [name, engine] of [["chromium", chromium], ["firefox", firefox], ["webkit", webkit]]) {
    await runBrowser(name, engine, baseUrl);
  }
  console.log("physics-chemistry-browser-smoke: OK - Chromium, Firefox, WebKit, WCAG, keyboard, print, offline, migration/storage");
} finally {
  await new Promise((resolve) => http.close(resolve));
}
