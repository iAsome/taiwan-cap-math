import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import net from "node:net";
import { parseArgs, readJson, writeJson, assert } from "./lib/common.mjs";
import { launchBrowser, waitUntil } from "./lib/cdp.mjs";

const args = parseArgs(process.argv.slice(2));
assert(args.repo && args.root, "Usage: --repo --root");
const repo = path.resolve(args.repo);
const root = path.resolve(args.root);
const expected = readJson(path.join(root, "tooling/EXPECTED-RESULTS.json"));
const evidence = path.join(root, "evidence");

const mime = new Map([
  [".html","text/html; charset=utf-8"],[".js","text/javascript; charset=utf-8"],
  [".mjs","text/javascript; charset=utf-8"],[".json","application/json; charset=utf-8"],
  [".css","text/css; charset=utf-8"],[".svg","image/svg+xml; charset=utf-8"],
  [".jpg","image/jpeg"],[".png","image/png"],[".pdf","application/pdf"]
]);
const freePort = () => new Promise((resolve, reject) => {
  const server = net.createServer();
  server.once("error", reject);
  server.listen(0, "127.0.0.1", () => {
    const { port } = server.address();
    server.close(() => resolve(port));
  });
});

let server;
let browser;
const consoleErrors = [];
const runtimeExceptions = [];
const networkErrors = [];
const tests = [];
const record = (name, pass, details = {}) => {
  tests.push({ name, pass: Boolean(pass), ...details });
  assert(pass, `${name}: ${JSON.stringify(details)}`);
};

try {
  const port = await freePort();
  server = http.createServer((request, response) => {
    try {
      const pathname = decodeURIComponent((request.url || "/").split("?")[0]);
      const relative = path.posix.normalize(pathname).replace(/^\/+/, "") || "index.html";
      if (relative.includes("..")) throw new Error("Traversal rejected");
      const candidate = path.resolve(repo, relative);
      if (!candidate.startsWith(repo + path.sep)) throw new Error("Outside repository");
      const file = fs.existsSync(candidate) && fs.statSync(candidate).isDirectory()
        ? path.join(candidate, "index.html")
        : candidate;
      if (!fs.existsSync(file) || !fs.statSync(file).isFile()) {
        response.writeHead(404);
        response.end("Not found");
        return;
      }
      response.writeHead(200, {
        "content-type": mime.get(path.extname(file).toLowerCase()) || "application/octet-stream",
        "cache-control": "no-store"
      });
      fs.createReadStream(file).pipe(response);
    } catch (error) {
      response.writeHead(400);
      response.end(String(error.message || error));
    }
  });
  await new Promise((resolve, reject) => {
    server.once("error", reject);
    server.listen(port, "127.0.0.1", resolve);
  });

  browser = await launchBrowser();
  async function open(url) {
    const page = await browser.newPage();
    await page.send("Page.enable");
    await page.send("Runtime.enable");
    await page.send("Network.enable");
    page.on("Runtime.consoleAPICalled", event => {
      if (["error","assert"].includes(event.type)) {
        consoleErrors.push({ url, text: event.args?.map(item => item.value || item.description).join(" ") });
      }
    });
    page.on("Runtime.exceptionThrown", event => {
      runtimeExceptions.push({ url, text: event.exceptionDetails?.exception?.description || event.exceptionDetails?.text });
    });
    page.on("Network.loadingFailed", event => networkErrors.push({ url, errorText: event.errorText }));
    page.on("Network.responseReceived", event => {
      if (event.response?.status >= 400) networkErrors.push({ url: event.response.url, status: event.response.status });
    });
    const loaded = page.waitFor("Page.loadEventFired", 30000);
    const navigation = await page.send("Page.navigate", { url });
    await loaded.catch(() => {});
    assert(!navigation.errorText, navigation.errorText || "Navigation failed");
    return page;
  }

  const base = `http://127.0.0.1:${port}/數學會考作戰室/index.html`;

  let page = await open(`http://127.0.0.1:${port}/semantic-hotfix-storage-seed.html`);
  await page.evaluate(`(() => {
    localStorage.clear();
    localStorage.setItem("capMath.human.r1.contentVersion", ${JSON.stringify(expected.oldContentVersion)});
    localStorage.setItem("capMath.human.r1.paperHistory", JSON.stringify([{id:"old-human-paper",exam:{contentVersion:${JSON.stringify(expected.oldContentVersion)}}}]));
    return true;
  })()`);
  page.close();

  page = await open(base);
  await waitUntil(page, `document.documentElement.dataset.mathEngine === "human-production-r1" && window.__HUMAN_PRODUCTION_APP_READY__ === true && window.__HUMAN_PRODUCTION_R1__`, 120000);

  const core = await page.evaluate(`(async () => {
    const api = window.__HUMAN_PRODUCTION_R1__;
    const u01 = api.runtime.getSkill("integer-number-classification");
    const u02 = api.runtime.getSkill("fraction-complex-fraction-basic");
    const quiz1 = await window.EXAM_ENGINE.generateQuiz("u01-human-r1", 11527);
    const quiz2 = await window.EXAM_ENGINE.generateQuiz("u02-human-r1", 11527);
    return {
      contentVersion: api.runtime.manifest.contentVersion,
      counts: {
        units: api.runtime.manifest.unitCount,
        skills: api.runtime.manifest.skillCount,
        lectures: api.runtime.manifest.lectureCount,
        mcQuestions: api.runtime.manifest.mcQuestionCount,
        constructedResponses: api.runtime.manifest.constructedResponseCount,
        figures: api.runtime.manifest.figureCount
      },
      u01: {
        title: u01.title,
        lectureTitle: u01.lecture.title,
        mc: u01.mcQuestions.length,
        cr: u01.constructedResponses.length,
        serialized: JSON.stringify(u01)
      },
      u02: {
        title: u02.title,
        lectureTitle: u02.lecture.title,
        mc: u02.mcQuestions.length,
        cr: u02.constructedResponses.length,
        serialized: JSON.stringify(u02)
      },
      quiz1Ids: quiz1.questions.map(question => question.id),
      quiz2Ids: quiz2.questions.map(question => question.id),
      renderer: {
        prose: window.FRACTION_MARKUP.slashToFracMarkup("用了2/5剩下"),
        mixed: window.FRACTION_MARKUP.slashToFracMarkup("2又1/3"),
        expression: window.FRACTION_MARKUP.slashToFracMarkup("(√36-8)/2，則"),
        nested: window.FRACTION_MARKUP.slashToFracMarkup("(1/2)/(3/4)"),
        date: window.FRACTION_MARKUP.slashToFracMarkup("2026/7/13")
      },
      migration: JSON.parse(localStorage.getItem("capMath.human.r1.contentVersionMigration." + ${JSON.stringify(expected.newContentVersion)}) || "null"),
      currentHistory: JSON.parse(localStorage.getItem("capMath.human.r1.paperHistory") || "[]"),
      archivedHistory: JSON.parse(localStorage.getItem("capMath.human.r1.paperHistoryBackup." + ${JSON.stringify(expected.oldContentVersion)}) || "[]"),
      storedVersion: localStorage.getItem("capMath.human.r1.contentVersion")
    };
  })()`);

  record("human-runtime-version-and-counts",
    core.contentVersion === expected.newContentVersion &&
    core.counts.units === 23 && core.counts.skills === 339 && core.counts.lectures === 339 &&
    core.counts.mcQuestions === 4068 && core.counts.constructedResponses === 678 && core.counts.figures === 178,
    core.counts
  );
  record("u01-s001-reviewed-content",
    core.u01.title === "數的分類入門：整數、分數與有限小數" &&
    core.u01.mc === 12 && core.u01.cr === 2 &&
    !/[√π]|循環小數|無理數/.test(core.u01.serialized),
    { title: core.u01.title, lectureTitle: core.u01.lectureTitle }
  );
  record("u02-s012-reviewed-content",
    core.u02.title.startsWith("分數四則混合運算與括號") &&
    core.u02.mc === 12 && core.u02.cr === 2 &&
    !core.u02.serialized.includes("繁分數"),
    { title: core.u02.title, lectureTitle: core.u02.lectureTitle }
  );
  record("unit-quiz-includes-reviewed-skills",
    core.quiz1Ids.some(id => id.startsWith("u01-s001-")) && core.quiz2Ids.some(id => id.startsWith("u02-s012-")),
    { u01Count: core.quiz1Ids.length, u02Count: core.quiz2Ids.length }
  );
  record("safe-fraction-renderer",
    core.renderer.prose === "用了[[frac:2|5]]剩下" &&
    core.renderer.mixed === "2又[[frac:1|3]]" &&
    core.renderer.expression === "(√36-8)/2，則" &&
    core.renderer.nested === "([[frac:1|2]])/([[frac:3|4]])" &&
    core.renderer.date === "2026/7/13",
    core.renderer
  );
  record("content-version-history-archive",
    core.migration?.status === "COMPLETE" &&
    core.currentHistory.length === 0 &&
    core.archivedHistory[0]?.id === "old-human-paper" &&
    core.storedVersion === expected.newContentVersion,
    { migration: core.migration, archivedCount: core.archivedHistory.length }
  );

  await page.evaluate(`document.querySelector('[data-view="handbook"]')?.click()`);
  await waitUntil(page, `document.body.innerText.includes("數的分類入門：整數、分數與有限小數")`, 60000);
  const visibleText = await page.evaluate(`document.body.innerText`);
  record("visible-text-clean",
    visibleText.includes("數的分類入門：整數、分數與有限小數") &&
    !visibleText.includes("繁分數基本化簡"),
    {}
  );

  await page.send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
  const mobile = await page.evaluate(`({scrollWidth: document.documentElement.scrollWidth, clientWidth: document.documentElement.clientWidth})`);
  record("mobile-no-horizontal-overflow", mobile.scrollWidth <= mobile.clientWidth + 1, mobile);
  page.close();

  for (const query of ["?generated=1", "?legacy=1"]) {
    page = await open(base + query);
    await waitUntil(page, `document.documentElement.dataset.mathEngine === "human-production-r1" && window.__HUMAN_PRODUCTION_APP_READY__ === true`, 120000);
    record(`retired-query-still-human-${query.slice(1)}`, true, {});
    page.close();
  }

  assert(consoleErrors.length === 0, JSON.stringify(consoleErrors));
  assert(runtimeExceptions.length === 0, JSON.stringify(runtimeExceptions));
  assert(networkErrors.length === 0, JSON.stringify(networkErrors));

  const report = {
    status: "PASS_REVIEWED_SEMANTIC_HOTFIX_BROWSER_R1",
    browserExecutable: browser.executable,
    browserVersion: browser.browserVersion,
    tests,
    passed: tests.length,
    failed: 0,
    consoleErrors,
    runtimeExceptions,
    networkErrors,
    fullReleaseAuthorized: false,
    pendingManual: expected.pendingQuestionCountAfterHotfix
  };
  writeJson(path.join(evidence, "browser-gate.json"), report);
  console.log(JSON.stringify(report, null, 2));
} finally {
  if (browser) await browser.close();
  if (server) await new Promise(resolve => server.close(resolve));
}
