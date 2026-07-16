import assert from "node:assert/strict";
import { chromium } from "playwright";

const base = process.env.CHINESE_R4_URL || "http://127.0.0.1:4173/%E5%9C%8B%E6%96%87%E6%9C%83%E8%80%83%E4%BD%9C%E6%88%B0%E5%AE%A4/";
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, serviceWorkers: "allow" });
const page = await context.newPage();
const errors = [];
const normalizeText = (value) => value.replace(/\s+/gu, "");
page.on("console", (message) => { if (message.type() === "error") errors.push(message.text()); });
page.on("pageerror", (error) => errors.push(error.message));

try {
  await page.goto(`${base}?view=r4`, { waitUntil: "networkidle" });
  await page.locator("#r4Lesson h2").waitFor();
  const catalog = await page.evaluate(() => window.CHINESE_R4.catalog);
  const renderedSkills = new Set();
  const renderedAssets = new Set();

  for (const unit of catalog.units) {
    await page.locator("#r4UnitSelect").selectOption(unit.id);
    for (const skillId of unit.skillIds) {
      const skill = catalog.skills.find(({ id }) => id === skillId);
      await page.locator(`[data-r4-skill="${skillId}"]`).click();
      await page.waitForFunction(({ title }) => document.querySelector("#r4Lesson h2")?.textContent?.trim() === title, { title: skill.title });
      assert.equal(await page.locator(".r4-example-list article").count(), 3, `${skillId}: worked examples did not render`);
      assert.equal(await page.locator(".r4-misconceptions article").count(), 4, `${skillId}: misconceptions did not render`);
      assert.equal(await page.locator(".r4-checks details").count(), 3, `${skillId}: checks did not render`);
      assert((await page.locator("#r4Lesson").innerText()).trim().length > 200, `${skillId}: rendered lecture is empty`);
      for (const src of await page.locator(".r4-asset img").evaluateAll((images) => images.map((image) => ({ src: image.getAttribute("src"), alt: image.getAttribute("alt") })))) {
        assert(src.alt?.trim().length >= 40, `${skillId}: incomplete rendered asset alt`);
        renderedAssets.add(src.src.match(/CHI_R4_ASSET_\d{3}/u)?.[0]);
      }
      renderedSkills.add(skillId);
    }
  }
  assert.equal(renderedSkills.size, 320);

  const renderedWriting = new Set();
  for (let index = 0; index < 120; index++) {
    renderedWriting.add((await page.locator(".writing-card small").textContent()).trim());
    assert((await page.locator(".writing-card").innerText()).trim().length > 180, "writing task rendered incompletely");
    if (index < 119) await page.locator("#r4WritingNext").click();
  }
  assert.equal(renderedWriting.size, 120);

  const renderedSkillQuestions = new Set();
  for (const skill of catalog.skills) {
    const seed = 100000 + Number(skill.id.slice(-3));
    await page.goto(`${base}?quiz=r4-skill-${skill.id.slice(-3)}&seed=${seed}`, { waitUntil: "domcontentloaded" });
    await page.locator(".question").first().waitFor();
    assert.equal(await page.locator(".question").count(), 12, `${skill.id}: rendered question count`);
    assert.equal(await page.locator(".choice").count(), 48, `${skill.id}: rendered choice count`);
    for (const asset of await page.locator(".r4-asset img").evaluateAll((images) => images.map((image) => ({ src: image.getAttribute("src"), alt: image.getAttribute("alt") })))) {
      assert(asset.alt?.trim().length >= 40, `${skill.id}: incomplete rendered question-asset alt`);
      renderedAssets.add(asset.src.match(/CHI_R4_ASSET_\d{3}/u)?.[0]);
    }
    const expected = await page.evaluate(({ skillId, seedValue }) => window.CHINESE_R4.skillAssessment(skillId, seedValue), { skillId: skill.id, seedValue: seed });
    const actual = await page.locator(".question-text").allTextContents();
    assert.deepEqual(actual.map(normalizeText), expected.questions.map(({ text }) => normalizeText(text)), `${skill.id}: rendered question order or text drift`);
    expected.questions.forEach(({ staticQuestionId }) => renderedSkillQuestions.add(staticQuestionId));
  }
  assert.equal(renderedSkillQuestions.size, 3840);
  assert.equal(renderedAssets.size, 24);

  await page.goto(`${base}?view=exam`, { waitUntil: "networkidle" });
  const seeds = await page.evaluate(async () => {
    const stimuli = await (await fetch("r4/runtime/stimuli.json")).json();
    const candidates = Array.from({ length: 5000 }, (_, index) => index + 1).map((seed) => ({ seed, ids: window.CHINESE_R4.ordered(stimuli, seed).slice(0, 7).map(({ id }) => id) }));
    const missing = new Set(stimuli.map(({ id }) => id));
    const selected = [];
    while (missing.size) {
      let best;
      let gain = 0;
      for (const candidate of candidates) {
        const nextGain = candidate.ids.filter((id) => missing.has(id)).length;
        if (nextGain > gain) { best = candidate; gain = nextGain; }
      }
      if (!best) throw new Error(`could not cover ${missing.size} stimuli`);
      selected.push(best.seed);
      best.ids.forEach((id) => missing.delete(id));
      candidates.splice(candidates.indexOf(best), 1);
    }
    return selected;
  });
  const renderedStimuli = new Set();
  const renderedStimulusQuestions = new Set();
  for (const seed of seeds) {
    const expected = await page.evaluate((seedValue) => window.CHINESE_R4.mockAssessment(seedValue), seed);
    await page.locator("#seedInput").fill(String(seed));
    await page.locator("#generateExam").click();
    await page.waitForFunction((text) => document.querySelector(".question-text")?.textContent?.replace(/\s+/gu, "") === text, normalizeText(expected.questions[0].text));
    assert.equal(await page.locator(".question").count(), 42, `mock ${seed}: rendered question count`);
    const actual = await page.locator(".question-text").allTextContents();
    assert.deepEqual(actual.map(normalizeText), expected.questions.map(({ text }) => normalizeText(text)), `mock ${seed}: rendered question text drift`);
    expected.questions.filter(({ passageId }) => passageId).forEach(({ passageId, staticQuestionId }) => { renderedStimuli.add(passageId); renderedStimulusQuestions.add(staticQuestionId); });
  }
  assert.equal(renderedStimuli.size, 320);
  assert.equal(renderedStimulusQuestions.size, 1280);
  assert.deepEqual(errors, []);
  console.log(JSON.stringify({ browser: "chromium", renderedSkills: renderedSkills.size, renderedSkillQuestions: renderedSkillQuestions.size, renderedStimuli: renderedStimuli.size, renderedStimulusQuestions: renderedStimulusQuestions.size, renderedWritingTasks: renderedWriting.size, renderedAssets: renderedAssets.size, mockSeeds: seeds.length, consoleErrors: errors.length }));
} finally {
  await browser.close();
}
