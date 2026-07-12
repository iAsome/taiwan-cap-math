import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import net from "node:net";
import { assert, parseArgs, sha256, writeJson } from "./lib/common.mjs";
import { launchBrowser, waitUntil } from "./lib/cdp.mjs";

const args = parseArgs(process.argv.slice(2));
assert(args.repo && args.root, "Usage: --repo <repo> --root <validation-root>");
const repo = path.resolve(args.repo);
const root = path.resolve(args.root);
const evidence = path.join(root, "evidence");
const screenshots = path.join(evidence, "screenshots");
fs.mkdirSync(screenshots, { recursive: true });

const mime = new Map([
  [".html", "text/html; charset=utf-8"], [".js", "text/javascript; charset=utf-8"], [".mjs", "text/javascript; charset=utf-8"],
  [".json", "application/json; charset=utf-8"], [".css", "text/css; charset=utf-8"], [".svg", "image/svg+xml; charset=utf-8"],
  [".png", "image/png"], [".jpg", "image/jpeg"], [".jpeg", "image/jpeg"], [".pdf", "application/pdf"]
]);

const freePort = () => new Promise((resolve, reject) => {
  const server = net.createServer();
  server.once("error", reject);
  server.listen(0, "127.0.0.1", () => { const { port } = server.address(); server.close(() => resolve(port)); });
});

function safePath(urlPath) {
  const decoded = decodeURIComponent(urlPath.split("?")[0]);
  const normalized = path.posix.normalize(decoded).replace(/^\/+/, "");
  if (normalized.includes("..")) throw new Error("Path traversal rejected");
  return normalized || "index.html";
}

async function startServer() {
  const port = await freePort();
  const requests = [];
  const server = http.createServer((request, response) => {
    try {
      const rel = safePath(request.url || "/");
      const file = path.resolve(repo, rel);
      if (!file.startsWith(repo + path.sep) && file !== repo) throw new Error("Outside repository");
      const resolved = fs.existsSync(file) && fs.statSync(file).isDirectory() ? path.join(file, "index.html") : file;
      const exists = fs.existsSync(resolved) && fs.statSync(resolved).isFile();
      requests.push({ method: request.method, url: request.url, relativePath: path.relative(repo, resolved).split(path.sep).join("/"), status: exists ? 200 : 404 });
      if (!exists) { response.writeHead(404, { "content-type": "text/plain; charset=utf-8" }); response.end("Not found"); return; }
      response.writeHead(200, {
        "content-type": mime.get(path.extname(resolved).toLowerCase()) || "application/octet-stream",
        "cache-control": "no-store",
        "x-content-type-options": "nosniff"
      });
      fs.createReadStream(resolved).pipe(response);
    } catch (error) {
      response.writeHead(400, { "content-type": "text/plain; charset=utf-8" });
      response.end(String(error.message || error));
    }
  });
  await new Promise((resolve, reject) => { server.once("error", reject); server.listen(port, "127.0.0.1", resolve); });
  return { port, requests, close: () => new Promise(resolve => server.close(resolve)) };
}

const unitSkillCounts = {u01:15,u02:15,u03:15,u04:14,u05:12,u06:12,u07:12,u08:14,u09:16,u10:13,u11:16,u12:10,u13:15,u14:12,u15:13,u16:18,u17:18,u18:16,u19:18,u20:15,u21:12,u22:18,u23:20};
const tests = [];
const record = (name, pass, details = {}) => { tests.push({ name, pass: Boolean(pass), ...details }); assert(pass, `${name} failed: ${JSON.stringify(details)}`); };

let server;
let browser;
let page;
const consoleErrors = [];
const networkErrors = [];
const runtimeExceptions = [];

try {
  console.error("[browser-ui] start server");
  server = await startServer();
  console.error("[browser-ui] launch browser");
  browser = await launchBrowser();
  console.error("[browser-ui] browser launched", browser.browserVersion);
  const previewUrl = `http://127.0.0.1:${server.port}/數學會考作戰室/human-preview.html`;
  console.error("[browser-ui] creating page");
  page = await browser.newPage("about:blank");
  console.error("[browser-ui] page created");
  await page.send("Page.enable");
  await page.send("Runtime.enable");
  await page.send("Network.enable");
  await page.send("Log.enable");
  page.on("Runtime.consoleAPICalled", event => {
    if (["error", "assert"].includes(event.type)) consoleErrors.push(event.args?.map(arg => arg.value || arg.description).join(" ") || event.type);
  });
  page.on("Runtime.exceptionThrown", event => runtimeExceptions.push(event.exceptionDetails?.exception?.description || event.exceptionDetails?.text || "runtime exception"));
  page.on("Network.loadingFailed", event => networkErrors.push({ type: "loadingFailed", url: event.requestId, errorText: event.errorText }));
  page.on("Network.responseReceived", event => { if (event.response?.status >= 400) networkErrors.push({ type: "http", url: event.response.url, status: event.response.status }); });

  console.error("[browser-ui] navigate preview");
  let activePreviewUrl = previewUrl;
  let navigationError = null;
  for (const candidate of [previewUrl, previewUrl.replace("127.0.0.1", "localhost")]) {
    const loaded = page.waitFor("Page.loadEventFired", 30000);
    const navigation = await page.send("Page.navigate", { url: candidate });
    await loaded.catch(() => {});
    if (!navigation.errorText) { activePreviewUrl = candidate; navigationError = null; break; }
    navigationError = navigation.errorText;
  }
  if (navigationError) throw new Error(`Local browser navigation was blocked: ${navigationError}. Check browser policy or set CHROME_PATH/EDGE_PATH to an unrestricted local browser.`);
  console.error("[browser-ui] preview document loaded", activePreviewUrl);
  await waitUntil(page, `document.getElementById("runtimeStatus")?.textContent === "PREVIEW READY"`, 60000);
  console.error("[browser-ui] preview ready");

  const desktopBase = await page.evaluate(`(() => ({
    title: document.title,
    noindex: document.querySelector('meta[name="robots"]')?.content,
    unitOptions: document.querySelectorAll('#unitSelect option').length,
    catalogCards: document.querySelectorAll('.unit-card').length,
    defaultSkillOptions: document.querySelectorAll('#skillSelect option').length,
    contentVersion: document.getElementById('contentVersion').textContent,
    status: document.getElementById('runtimeStatus').textContent,
    previewLinks: [...document.querySelectorAll('.topbar a')].map(a => a.getAttribute('href')),
    mainHasPreviewLink: false,
    heading: document.querySelector('#contentPanel h2')?.textContent || '',
    storageKeys: Object.keys(localStorage)
  }))()`);
  record("desktop-initial-render", desktopBase.unitOptions === 23 && desktopBase.catalogCards === 23 && desktopBase.defaultSkillOptions === 15 && desktopBase.status === "PREVIEW READY", desktopBase);
  record("preview-metadata", desktopBase.noindex === "noindex,nofollow" && desktopBase.contentVersion === "d402487b40bca04f3278b231262abfb3aa7fd1d1448454e877ff8c76af25082f", desktopBase);
  record("rollback-links-present", desktopBase.previewLinks.includes("index.html") && desktopBase.previewLinks.includes("index.html?legacy=1"), { links: desktopBase.previewLinks });
  await page.screenshot(path.join(screenshots, "desktop-initial.jpg"));
  console.error("[browser-ui] desktop initial");

  const lectureCompleteness = await page.evaluate(`(() => {
    const headings=[...document.querySelectorAll('#contentPanel h3')].map(x=>x.textContent.trim());
    const required=['學習目標','前置知識','名詞與符號','觀念建立','正式定義','分類與對照','公式與條件','不適用情況','解題方法','完整例題','常見錯誤','自我檢查','重點總結','前後連結'];
    return {headings,missing:required.filter(x=>!headings.includes(x)),tableCount:document.querySelectorAll('#contentPanel table').length};
  })()`);
  record("complete-lecture-field-rendering", lectureCompleteness.missing.length === 0 && lectureCompleteness.tableCount >= 6, lectureCompleteness);

  const allUnitResults = [];
  for (const [unitId, expected] of Object.entries(unitSkillCounts)) {
    await page.evaluate(`(() => { const select=document.getElementById('unitSelect'); select.value=${JSON.stringify(unitId)}; select.dispatchEvent(new Event('change',{bubbles:true})); return true; })()`);
    await waitUntil(page, `document.querySelectorAll('#skillSelect option').length === ${expected} && document.querySelector('#contentPanel article.lecture')?.dataset.skillId`, 30000);
    const result = await page.evaluate(`(() => ({ unit:document.getElementById('unitSelect').value, skills:document.querySelectorAll('#skillSelect option').length, title:document.querySelector('#contentPanel h2')?.textContent || '' }))()`);
    allUnitResults.push(result);
  }
  console.error("[browser-ui] all units navigated");
  record("all-23-unit-catalog-navigation", allUnitResults.length === 23 && allUnitResults.every(item => item.skills === unitSkillCounts[item.unit] && item.title), { units: allUnitResults });

  await page.evaluate(`(() => { const select=document.getElementById('unitSelect'); select.value='u01'; select.dispatchEvent(new Event('change',{bubbles:true})); })()`);
  await waitUntil(page, `document.querySelectorAll('#skillSelect option').length === 15`, 30000);
  await page.evaluate(`document.getElementById('unitQuizButton').click()`);
  await waitUntil(page, `document.querySelectorAll('#contentPanel article.question[data-question-type="mc"]').length === 15`, 30000);
  const quizResult = await page.evaluate(`(() => ({
    count:document.querySelectorAll('#contentPanel article.question[data-question-type="mc"]').length,
    first:document.querySelector('#contentPanel article.question h3')?.textContent || '',
    last:[...document.querySelectorAll('#contentPanel article.question h3')].at(-1)?.textContent || '',
    ids:[...document.querySelectorAll('#contentPanel article.question')].map(x=>x.dataset.questionId),
    answerTables:document.querySelectorAll('#contentPanel .answer table').length
  }))()`);
  record("unit-quiz-browser-render", quizResult.count === 15 && /^1\./.test(quizResult.first) && /^15\./.test(quizResult.last) && new Set(quizResult.ids).size === 15 && quizResult.answerTables === 15, quizResult);
  await page.screenshot(path.join(screenshots, "desktop-unit-quiz.jpg"));
  console.error("[browser-ui] quiz rendered");

  await page.evaluate(`document.getElementById('mockButton').click()`);
  await waitUntil(page, `document.querySelectorAll('#contentPanel article.question').length === 27`, 60000);
  const mockResult = await page.evaluate(`(() => {
    const mc=[...document.querySelectorAll('#contentPanel article.question[data-question-type="mc"] h3')].map(x=>x.textContent.trim());
    const cr=[...document.querySelectorAll('#contentPanel article.question[data-question-type="constructed-response"] h3')].map(x=>x.textContent.trim());
    return {mcCount:mc.length,crCount:cr.length,firstMc:mc[0],lastMc:mc.at(-1),firstCr:cr[0],lastCr:cr.at(-1),rubricTables:document.querySelectorAll('[data-question-type="constructed-response"] table').length};
  })()`);
  record("engineering-mock-browser-render", mockResult.mcCount === 25 && mockResult.crCount === 2 && /^1\./.test(mockResult.firstMc) && /^25\./.test(mockResult.lastMc) && /^非選 1\./.test(mockResult.firstCr) && /^非選 2\./.test(mockResult.lastCr) && mockResult.rubricTables === 2, mockResult);
  await page.screenshot(path.join(screenshots, "desktop-engineering-mock.jpg"));
  console.error("[browser-ui] mock rendered");

  await page.evaluate(`document.getElementById('selfCheckButton').click()`);
  await waitUntil(page, `document.getElementById('runtimeStatus')?.textContent === 'SELF-CHECK PASS'`, 60000);
  record("browser-deterministic-self-check", true, { status: "SELF-CHECK PASS" });

  const seedContract = await page.evaluate(`(async()=>{
    const api=window.__HUMAN_PREVIEW_R1__;
    const first=await api.runtime.generateFullMock(11527);
    const repeat=await api.runtime.generateFullMock(11527);
    const different=await api.runtime.generateFullMock(11528);
    const signature=items=>items.map(item=>item.questionId).join('|');
    const unitResults=[];
    for(const [unitId,expected] of Object.entries(${JSON.stringify(unitSkillCounts)})){
      const a=await api.runtime.generateUnitQuiz(unitId,11527);
      const b=await api.runtime.generateUnitQuiz(unitId,11527);
      unitResults.push({unitId,expected,actual:a.questions.length,deterministic:signature(a.questions)===signature(b.questions)});
    }
    return {
      sameSeedDeterministic:signature(first.mcQuestions)===signature(repeat.mcQuestions)&&signature(first.constructedResponses)===signature(repeat.constructedResponses),
      differentSeedVaries:signature(first.mcQuestions)!==signature(different.mcQuestions)||signature(first.constructedResponses)!==signature(different.constructedResponses),
      unitResults
    };
  })()`);
  record("browser-seed-contract-and-23-unit-quizzes", seedContract.sameSeedDeterministic && seedContract.differentSeedVaries && seedContract.unitResults.length === 23 && seedContract.unitResults.every(item => item.actual === item.expected && item.deterministic), seedContract);

  const figureResult = await page.evaluate(`(async()=>{
    const manifest=await fetch('./tools/v2-human-content/global-readiness/r1/runtime-preview/manifest.json',{cache:'no-store'}).then(r=>r.json());
    const marker='數學會考作戰室/';
    const entries=Object.values(manifest.figureIndex||{});
    const failures=[];
    await Promise.all(entries.map(entry=>new Promise(resolve=>{
      const relative=entry.sourcePath.includes(marker)?entry.sourcePath.split(marker).slice(1).join(marker):entry.sourcePath;
      const image=new Image();
      image.onload=()=>{if(!(image.naturalWidth>0&&image.naturalHeight>0))failures.push({id:entry.figureId,reason:'zero-dimension'});resolve();};
      image.onerror=()=>{failures.push({id:entry.figureId,reason:'load-error'});resolve();};
      image.src=new URL('./'+relative,location.href).href;
    })));
    return {count:entries.length,failures};
  })()`);
  console.error("[browser-ui] figures decoded", figureResult.count, figureResult.failures.length);
  record("all-178-svg-browser-decode", figureResult.count === 178 && figureResult.failures.length === 0, figureResult);

  const accessibility = await page.evaluate(`(() => {
    const visible=e=>{const s=getComputedStyle(e);const r=e.getBoundingClientRect();return s.display!=='none'&&s.visibility!=='hidden'&&r.width>0&&r.height>0};
    const focusables=[...document.querySelectorAll('a,button,input,select,summary,[tabindex]')].filter(visible);
    const nameless=focusables.filter(e=>!(e.getAttribute('aria-label')||e.textContent?.trim()||e.closest('label')?.textContent?.trim())).map(e=>e.outerHTML.slice(0,120));
    const emptyAlt=[...document.querySelectorAll('img')].filter(img=>!img.alt.trim()).length;
    const h=[...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].map(x=>Number(x.tagName.slice(1)));
    const jumps=h.filter((level,index)=>index&&level-h[index-1]>1).length;
    return {focusableCount:focusables.length,nameless,emptyAlt,headingJumps:jumps,htmlLang:document.documentElement.lang};
  })()`);
  record("basic-accessibility-contract", accessibility.focusableCount >= 10 && accessibility.nameless.length === 0 && accessibility.emptyAlt === 0 && accessibility.headingJumps === 0 && accessibility.htmlLang === "zh-Hant", accessibility);

  const storageResult = await page.evaluate(`(() => {
    localStorage.setItem('capMath.v2.sentinel','generated-preserved');
    localStorage.setItem('capMath.completed','legacy-preserved');
    const select=document.getElementById('skillSelect');
    select.value=String(Math.min(1,select.options.length-1));
    select.dispatchEvent(new Event('change',{bubbles:true}));
    const keys=Object.keys(localStorage).sort();
    return {keys,generated:localStorage.getItem('capMath.v2.sentinel'),legacy:localStorage.getItem('capMath.completed'),previewKeys:keys.filter(k=>k.startsWith('capMath.humanPreview.r1.')),unexpected:keys.filter(k=>!k.startsWith('capMath.humanPreview.r1.')&&!['capMath.v2.sentinel','capMath.completed'].includes(k))};
  })()`);
  record("localstorage-namespace-isolation", storageResult.generated === "generated-preserved" && storageResult.legacy === "legacy-preserved" && storageResult.previewKeys.length >= 1 && storageResult.unexpected.length === 0, storageResult);

  await page.send("Emulation.setDeviceMetricsOverride", { width: 390, height: 844, deviceScaleFactor: 1, mobile: true, screenWidth: 390, screenHeight: 844 });
  await page.evaluate(`window.scrollTo(0,0)`);
  const mobileInitial = await page.evaluate(`(() => ({clientWidth:document.documentElement.clientWidth,scrollWidth:document.documentElement.scrollWidth,buttonWidths:[...document.querySelectorAll('.controls button')].map(x=>Math.round(x.getBoundingClientRect().width)),viewport:innerWidth}))()`);
  record("mobile-no-horizontal-overflow-initial", mobileInitial.scrollWidth <= mobileInitial.clientWidth + 2 && mobileInitial.buttonWidths.every(width => width >= 300), mobileInitial);
  await page.screenshot(path.join(screenshots, "mobile-initial.jpg"));
  console.error("[browser-ui] mobile initial");

  await page.evaluate(`document.getElementById('mockButton').click()`);
  await waitUntil(page, `document.querySelectorAll('#contentPanel article.question').length === 27`, 60000);
  const mobileMock = await page.evaluate(`(() => ({clientWidth:document.documentElement.clientWidth,scrollWidth:document.documentElement.scrollWidth,questionCount:document.querySelectorAll('#contentPanel article.question').length,maxImage:[...document.images].reduce((m,x)=>Math.max(m,x.getBoundingClientRect().width),0)}))()`);
  record("mobile-engineering-mock-layout", mobileMock.questionCount === 27 && mobileMock.scrollWidth <= mobileMock.clientWidth + 2 && mobileMock.maxImage <= mobileMock.clientWidth, mobileMock);
  await page.screenshot(path.join(screenshots, "mobile-engineering-mock.jpg"));
  console.error("[browser-ui] mobile mock");

  const mainRouteIsolation = await page.evaluate(`(async()=>{
    const html=await fetch('./index.html',{cache:'no-store'}).then(r=>r.text());
    const loader=await fetch('./math-bootstrap.js',{cache:'no-store'}).then(r=>r.text());
    return {mainLinksPreview:html.includes('human-preview'),loaderLinksPreview:loader.includes('human-preview'),generatedDefault:loader.includes('v2/math-production-bootstrap.js'),legacyQuery:loader.includes('legacy=1')};
  })()`);
  record("student-route-isolation", !mainRouteIsolation.mainLinksPreview && !mainRouteIsolation.loaderLinksPreview && mainRouteIsolation.generatedDefault && mainRouteIsolation.legacyQuery, mainRouteIsolation);

  record("no-browser-runtime-errors", consoleErrors.length === 0 && runtimeExceptions.length === 0 && networkErrors.length === 0, { consoleErrors, runtimeExceptions, networkErrors });

  const screenshotRecords = fs.readdirSync(screenshots).sort().map(name => {
    const file = path.join(screenshots, name);
    const data = fs.readFileSync(file);
    return { path: `screenshots/${name}`, bytes: data.length, sha256: sha256(data) };
  });
  console.error("[browser-ui] finalizing report");
  const report = {
    status: "PASS_HUMAN_PREVIEW_BROWSER_UI_VALIDATION",
    browserExecutable: browser.executable,
    browserVersion: browser.browserVersion,
    testCount: tests.length,
    passed: tests.filter(test => test.pass).length,
    failed: tests.filter(test => !test.pass).length,
    tests,
    screenshots: screenshotRecords,
    httpRequestCount: server.requests.length,
    consoleErrors,
    runtimeExceptions,
    networkErrors,
    counts: { units: 23, skills: 339, mcQuestions: 4068, constructedResponses: 678, svgFigures: 178 },
    contentVersion: "d402487b40bca04f3278b231262abfb3aa7fd1d1448454e877ff8c76af25082f",
    defaultStudentRouteChanged: false,
    productionActivationAllowed: false,
    oldDatabaseDeletionAllowed: false
  };
  writeJson(path.join(evidence, "browser-ui-validation.json"), report);
  writeJson(path.join(evidence, "browser-http-request-log.json"), { requests: server.requests });
  console.log(JSON.stringify(report, null, 2));
} finally {
  try { page?.close(); } catch {}
  if (browser) await browser.close();
  if (server) await server.close();
}
