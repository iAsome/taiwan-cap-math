import path from "node:path";
import { parseArgs, readJson, writeJson, assert } from "./lib/common.mjs";
import { launchBrowser, waitUntil } from "./lib/cdp.mjs";

const args = parseArgs(process.argv.slice(2));
assert(args.root && args.url, "Usage: --root --url");
const root = path.resolve(args.root);
const expected = readJson(path.join(root, "tooling/EXPECTED-RESULTS.json"));
const output = path.resolve(args.output || path.join(root, "external-deployment-evidence"));
const base = String(args.url);
let browser;
let page;
const errors = [];
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

try {
  browser = await launchBrowser();
  page = await browser.newPage();
  await page.send("Page.enable");
  await page.send("Runtime.enable");
  await page.send("Network.enable");
  page.on("Runtime.exceptionThrown", event => errors.push(event.exceptionDetails?.exception?.description || event.exceptionDetails?.text));
  page.on("Network.loadingFailed", event => errors.push(event.errorText));

  let result = null;
  let lastError = null;
  for (let attempt = 1; attempt <= 30; attempt++) {
    try {
      const loaded = page.waitFor("Page.loadEventFired", 60000);
      const navigation = await page.send("Page.navigate", { url: `${base}${base.includes("?") ? "&" : "?"}semanticHotfixAttempt=${attempt}` });
      await loaded.catch(() => {});
      if (navigation.errorText) throw new Error(navigation.errorText);
      await waitUntil(page, `window.__HUMAN_PRODUCTION_APP_READY__ === true && window.__HUMAN_PRODUCTION_R1__`, 30000);
      result = await page.evaluate(`(() => {
        const api = window.__HUMAN_PRODUCTION_R1__;
        const u01 = api.runtime.getSkill("integer-number-classification");
        const u02 = api.runtime.getSkill("fraction-complex-fraction-basic");
        return {
          engine: document.documentElement.dataset.mathEngine,
          contentVersion: api.runtime.manifest.contentVersion,
          units: api.runtime.manifest.unitCount,
          skills: api.runtime.manifest.skillCount,
          u01Title: u01.title,
          u02Title: u02.title,
          complexFractionVisible: document.body.innerText.includes("繁分數基本化簡"),
          renderer: window.FRACTION_MARKUP.slashToFracMarkup("用了2/5剩下")
        };
      })()`);
      if (
        result.engine === "human-production-r1" &&
        result.contentVersion === expected.newContentVersion &&
        result.units === 23 &&
        result.skills === 339 &&
        result.u01Title === "數的分類入門：整數、分數與有限小數" &&
        result.u02Title.startsWith("分數四則混合運算與括號") &&
        result.complexFractionVisible === false &&
        result.renderer === "用了[[frac:2|5]]剩下"
      ) break;
      throw new Error(`Unexpected deployment result: ${JSON.stringify(result)}`);
    } catch (error) {
      lastError = String(error.message || error);
      result = null;
      if (attempt < 30) await delay(10000);
    }
  }

  assert(result, `Deployment did not reach reviewed hotfix: ${lastError}`);
  assert(errors.length === 0, `Deployment errors: ${JSON.stringify(errors)}`);
  const report = {
    status: "PASS_REVIEWED_SEMANTIC_HOTFIX_DEPLOYMENT_R1",
    url: base,
    browserVersion: browser.browserVersion,
    result,
    errors
  };
  writeJson(path.join(output, "deployment.json"), report);
  console.log(JSON.stringify(report, null, 2));
} finally {
  if (page) page.close();
  if (browser) await browser.close();
}
