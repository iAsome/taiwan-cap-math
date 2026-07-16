import assert from "node:assert/strict";
import AxeBuilder from "@axe-core/playwright";
import { chromium } from "playwright";

const base = process.env.CHINESE_R4_URL || "http://127.0.0.1:4173/%E5%9C%8B%E6%96%87%E6%9C%83%E8%80%83%E4%BD%9C%E6%88%B0%E5%AE%A4/";
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ serviceWorkers: "allow" });
const page = await context.newPage();
const errors = [];
page.on("console", message => { if (message.type() === "error") errors.push(message.text()); });
page.on("pageerror", error => errors.push(error.message));

try {
  await page.goto(`${base}?view=r4`, { waitUntil: "networkidle" });
  await page.locator("#r4Lesson h2").waitFor();
  assert.equal(await page.locator("#r4UnitSelect option").count(), 48);
  assert.equal(await page.locator("#r4SkillList button").count(), 7);
  assert.equal(await page.locator(".r4-example-list article").count(), 3);
  assert.equal(await page.locator(".r4-misconceptions article").count(), 4);
  assert.equal(await page.locator(".r4-checks details").count(), 3);
  assert.equal(await page.locator(".writing-card").count(), 1);

  await page.locator("#r4UnitSelect").selectOption("CHI_R4_U32");
  await page.locator("#r4Lesson h2").waitFor();

  await page.locator("#r4SkillSearch").fill("圖表");
  assert.ok(await page.locator("#r4SkillList button").count() >= 1);
  await page.locator("#r4SkillSearch").fill("");
  await page.locator("#r4WritingNext").click();
  assert.equal(await page.locator(".writing-card small").textContent(), "CHI_R4_WRITE_002");

  const deterministic = await page.evaluate(async () => {
    const first = await window.CHINESE_R4.unitAssessment("CHI_R4_U01", 12345);
    const second = await window.CHINESE_R4.unitAssessment("CHI_R4_U01", 12345);
    const different = await window.CHINESE_R4.unitAssessment("CHI_R4_U01", 54321);
    return { first: first.questions.map(question => question.staticQuestionId), second: second.questions.map(question => question.staticQuestionId), different: different.questions.map(question => question.staticQuestionId) };
  });
  assert.deepEqual(deterministic.first, deterministic.second);
  assert.notDeepEqual(deterministic.first, deterministic.different);

  await page.goto(`${base}?quiz=r4-skill-218&seed=12345`, { waitUntil: "networkidle" });
  await page.locator(".r4-asset img").first().waitFor();
  assert.equal(await page.locator(".r4-asset img").first().getAttribute("alt")?.then(Boolean), true);
  assert.ok(await page.locator(".r4-asset table").count() >= 1);

  await page.goto(`${base}?quiz=r4-unit-01&seed=12345`, { waitUntil: "networkidle" });
  await page.locator(".question").first().waitFor();
  assert.equal(await page.locator(".question").count(), 12);
  await page.locator(".choice").first().focus();
  await page.keyboard.press("Enter");
  assert.equal(await page.locator("#answeredCount").textContent(), "1");
  const outline = await page.locator("#submitExam").focus().then(() => page.locator("#submitExam").evaluate(element => getComputedStyle(element).outlineWidth));
  assert.notEqual(outline, "0px");

  const quizA11y = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
  assert.deepEqual(quizA11y.violations.map(({ id }) => id), [], JSON.stringify(quizA11y.violations.map(({ id, nodes }) => ({ id, targets: nodes.map(node => node.target) }))));
  await page.emulateMedia({ media: "print" });
  assert.equal(await page.locator("#view-exam").evaluate(element => getComputedStyle(element).display), "block");
  await page.emulateMedia({ media: "screen" });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(`${base}?view=r4`, { waitUntil: "networkidle" });
  await page.locator("#r4Lesson h2").waitFor();
  assert.equal(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth + 1), true);
  const r4A11y = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
  assert.deepEqual(r4A11y.violations.map(({ id }) => id), [], JSON.stringify(r4A11y.violations.map(({ id, nodes }) => ({ id, targets: nodes.map(node => node.target) }))));
  await page.locator("#themeButton").click();
  const darkA11y = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
  assert.deepEqual(darkA11y.violations.map(({ id }) => id), [], JSON.stringify(darkA11y.violations.map(({ id, nodes }) => ({ id, targets: nodes.map(node => node.target) }))));
  await page.locator("#themeButton").click();

  await page.evaluate(() => {
    localStorage.removeItem("capChinese.r4.progress.v1");
    localStorage.setItem("capChinese.r4.completedSkills", JSON.stringify(["CHI_R4_S001", "not-a-skill"]));
  });
  await page.reload({ waitUntil: "networkidle" });
  assert.deepEqual(await page.evaluate(() => window.CHINESE_R4.progress().completedSkills), ["CHI_R4_S001"]);

  await page.evaluate(() => navigator.serviceWorker.ready);
  const offlineReady = await page.evaluate(async () => ({ controlled: Boolean(navigator.serviceWorker.controller), caches: await caches.keys(), indexCached: Boolean(await caches.match("./index.html")), appCached: Boolean(await caches.match("./app.js")) }));
  assert.deepEqual(offlineReady, { controlled: true, caches: ["cap-chinese-r4-v2"], indexCached: true, appCached: true });
  await context.setOffline(true);
  await page.reload({ waitUntil: "domcontentloaded" });
  await page.locator("#r4Lesson h2").waitFor({ timeout: 10000 }).catch(async error => { throw new Error(`${error.message}\n${JSON.stringify({ body: (await page.locator("body").innerText()).slice(0, 500), errors })}`); });
  assert.equal(await page.evaluate(async () => (await window.CHINESE_R4.loadUnit("CHI_R4_U48")).unitId), "CHI_R4_U48");
  await context.setOffline(false);
  assert.deepEqual(errors, []);
  console.log(JSON.stringify({ browser: "chromium", r4Units: 48, skillLesson: "pass", deterministicStaticSelection: "pass", keyboard: "pass", wcagLightDark: "pass", print: "pass", mobile: "pass", migration: "pass", offline: "pass" }));
} finally {
  await browser.close();
}
