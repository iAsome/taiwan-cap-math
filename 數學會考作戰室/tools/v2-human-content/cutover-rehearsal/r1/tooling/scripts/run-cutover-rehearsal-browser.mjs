import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import net from "node:net";
import {
  assert, parseArgs, readJson, writeJson, fileHash, cleanStatus
} from "./lib/common.mjs";
import { launchBrowser, waitUntil } from "./lib/cdp.mjs";

const args = parseArgs(process.argv.slice(2));
assert(args.repo && args.root && args.scratch, "Usage: --repo <repo> --root <root> --scratch <scratch>");
const repo = path.resolve(args.repo);
const root = path.resolve(args.root);
const scratch = path.resolve(args.scratch);
const tooling = path.join(root, "tooling");
const evidence = path.join(root, "evidence");
const screenshots = path.join(evidence, "screenshots");
const expected = readJson(path.join(tooling, "EXPECTED-RESULTS.json"));
fs.mkdirSync(screenshots, { recursive: true });

const loaderPath = path.join(scratch, "數學會考作戰室/math-bootstrap.js");
const payloadPath = path.join(tooling, "payload/rehearsal-math-bootstrap.js");
const originalLoader = fs.readFileSync(loaderPath);
const originalLoaderSha256 = fileHash(loaderPath);
const payload = fs.readFileSync(payloadPath);
const payloadSha256 = fileHash(payloadPath);

const mime = new Map([
  [".html","text/html; charset=utf-8"],[".js","text/javascript; charset=utf-8"],[".mjs","text/javascript; charset=utf-8"],
  [".json","application/json; charset=utf-8"],[".css","text/css; charset=utf-8"],[".svg","image/svg+xml; charset=utf-8"],
  [".jpg","image/jpeg"],[".jpeg","image/jpeg"],[".png","image/png"],[".pdf","application/pdf"]
]);
const freePort = () => new Promise((resolve,reject) => {
  const server = net.createServer(); server.once("error", reject);
  server.listen(0,"127.0.0.1",()=>{const {port}=server.address(); server.close(()=>resolve(port));});
});
const safePath = urlPath => {
  const decoded = decodeURIComponent((urlPath || "/").split("?")[0]);
  const normalized = path.posix.normalize(decoded).replace(/^\/+/,"");
  if (normalized.includes("..")) throw new Error("Path traversal rejected");
  return normalized || "index.html";
};
async function startServer() {
  const port = await freePort(); const requests = [];
  const server = http.createServer((request,response) => {
    try {
      const rel = safePath(request.url);
      const candidate = path.resolve(scratch, rel);
      if (!candidate.startsWith(scratch + path.sep) && candidate !== scratch) throw new Error("Outside scratch");
      const resolved = fs.existsSync(candidate) && fs.statSync(candidate).isDirectory() ? path.join(candidate,"index.html") : candidate;
      const exists = fs.existsSync(resolved) && fs.statSync(resolved).isFile();
      requests.push({ url: request.url, status: exists ? 200 : 404, path: path.relative(scratch,resolved).split(path.sep).join("/") });
      if (!exists) { response.writeHead(404,{"content-type":"text/plain; charset=utf-8"}); response.end("Not found"); return; }
      response.writeHead(200,{"content-type":mime.get(path.extname(resolved).toLowerCase())||"application/octet-stream","cache-control":"no-store","x-content-type-options":"nosniff"});
      fs.createReadStream(resolved).pipe(response);
    } catch (error) { response.writeHead(400); response.end(String(error.message||error)); }
  });
  await new Promise((resolve,reject)=>{server.once("error",reject);server.listen(port,"127.0.0.1",resolve);});
  return {port,requests,close:()=>new Promise(resolve=>server.close(resolve))};
}

const tests = [];
const record = (phase, name, pass, details={}) => {
  const result = {phase,name,pass:Boolean(pass),...details}; tests.push(result);
  assert(pass, `${phase}/${name} failed: ${JSON.stringify(details)}`);
};

let server, browser;
const consoleErrors=[], runtimeExceptions=[], networkErrors=[];
async function openPage(url) {
  const page = await browser.newPage("about:blank");
  await page.send("Page.enable"); await page.send("Runtime.enable"); await page.send("Network.enable"); await page.send("Log.enable");
  page.on("Runtime.consoleAPICalled", event => {
    if (["error","assert"].includes(event.type)) consoleErrors.push({url,type:event.type,text:event.args?.map(x=>x.value||x.description).join(" ")});
  });
  page.on("Runtime.exceptionThrown", event => runtimeExceptions.push({url,text:event.exceptionDetails?.exception?.description||event.exceptionDetails?.text}));
  page.on("Network.loadingFailed", event => networkErrors.push({url,type:"loadingFailed",errorText:event.errorText}));
  page.on("Network.responseReceived", event => { if (event.response?.status >= 400) networkErrors.push({url:event.response.url,type:"http",status:event.response.status}); });
  const loaded = page.waitFor("Page.loadEventFired",30000);
  const nav = await page.send("Page.navigate",{url});
  await loaded.catch(()=>{});
  assert(!nav.errorText, `Navigation failed: ${nav.errorText}`);
  return page;
}
async function validateGenerated(url, phase) {
  const page = await openPage(url);
  await waitUntil(page, `document.documentElement.dataset.mathEngine === ${JSON.stringify(phase.startsWith("RESTORED") ? "v2" : phase === "GENERATED_V2_BASELINE" ? "v2" : "v2-rehearsal-rollback")} && window.EXAM_ENGINE && document.getElementById("mainNav")`,90000);
  const details = await page.evaluate(`(() => ({
    engine:document.documentElement.dataset.mathEngine,
    hasExamEngine:Boolean(window.EXAM_ENGINE),
    humanMode:Boolean(window.MATH_HUMAN_RC_MODE),
    unitCount:Array.isArray(window.EXAM_ENGINE?.units)?window.EXAM_ENGINE.units.length:null,
    title:document.title
  }))()`);
  record(phase,"generated-v2-route-ready",details.hasExamEngine && !details.humanMode,details);
  await page.screenshot(path.join(screenshots,`${phase.toLowerCase()}-home.jpg`));
  page.close();
}
async function validateLegacy(url, phase) {
  const page = await openPage(url);
  await waitUntil(page, `document.documentElement.dataset.mathEngine === "v1-rollback" && document.getElementById("mainNav")`,90000);
  const details = await page.evaluate(`(() => ({
    engine:document.documentElement.dataset.mathEngine,
    humanMode:Boolean(window.MATH_HUMAN_RC_MODE),
    title:document.title,
    mainReady:Boolean(document.getElementById("main"))
  }))()`);
  record(phase,"v1-route-ready",details.engine==="v1-rollback" && !details.humanMode && details.mainReady,details);
  page.close();
}
async function validateHuman(url) {
  const phase="HUMAN_DEFAULT";
  const page = await openPage(url);
  await waitUntil(page, `document.documentElement.dataset.mathEngine === "human-rc-r1" && window.__HUMAN_RC_R1__ && window.__HUMAN_RC_BOOTSTRAP_READY__ === true`,120000);
  const runtime = await page.evaluate(`(async()=> {
    const api=window.__HUMAN_RC_R1__;
    const mock=await window.EXAM_ENGINE.generate(11527,2);
    const quiz=await window.EXAM_ENGINE.generateQuiz(api.quizCatalog[0].quizId,11527);
    return {
      engine:document.documentElement.dataset.mathEngine,
      contentVersion:api.runtime.manifest.contentVersion,
      units:api.runtime.manifest.unitCount,
      skills:api.runtime.manifest.skillCount,
      mcSource:api.runtime.manifest.mcQuestionCount,
      crSource:api.runtime.manifest.constructedResponseCount,
      figures:api.runtime.manifest.figureCount,
      mockMc:mock.questions.filter(x=>x.type==="mc").length,
      mockCr:mock.questions.filter(x=>x.type!=="mc").length,
      mockMinutes:mock.minutes,
      quizCount:quiz.questions.length,
      storageKeys:Object.keys(localStorage),
      rehearsalMode:window.__MATH_CUTOVER_REHEARSAL_R1__?.mode
    };
  })()`);
  record(phase,"human-runtime-counts",
    runtime.contentVersion===expected.contentVersion && runtime.units===23 && runtime.skills===339 &&
    runtime.mcSource===4068 && runtime.crSource===678 && runtime.figures===178,runtime);
  record(phase,"human-release-mock-contract",runtime.mockMc===25 && runtime.mockCr===2 && runtime.mockMinutes===80,runtime);
  record(phase,"human-unit-quiz-contract",runtime.quizCount>0,runtime);
  record(phase,"rehearsal-loader-mode",runtime.rehearsalMode==="human-rc-r1",runtime);
  const forbiddenStorage = runtime.storageKeys.filter(key => !key.startsWith("capMath.humanRc.r1."));
  record(phase,"human-storage-isolation",forbiddenStorage.length===0,{keys:runtime.storageKeys,forbiddenStorage});
  await page.evaluate(`document.querySelector('[data-view="exam"]')?.click()`);
  await waitUntil(page, `document.getElementById("generateExam")`,30000);
  await page.evaluate(`document.getElementById("generateExam").click()`);
  await waitUntil(page, `document.querySelectorAll("#paper article.question").length === 27`,120000);
  const ui = await page.evaluate(`(() => ({
    questionCount:document.querySelectorAll("#paper article.question").length,
    mcCount:document.querySelectorAll("#paper article.question:not(.constructed-question)").length,
    crCount:document.querySelectorAll("#paper article.constructed-question").length,
    timer:document.getElementById("timer")?.textContent,
    scrollWidth:document.documentElement.scrollWidth,
    clientWidth:document.documentElement.clientWidth
  }))()`);
  record(phase,"human-default-ui",ui.questionCount===27 && ui.crCount===2 && ui.timer==="80:00",ui);
  await page.screenshot(path.join(screenshots,"human-default-exam.jpg"));
  page.close();
}

try {
  assert(cleanStatus(scratch)==="", "Scratch must be clean before browser rehearsal");
  server=await startServer(); browser=await launchBrowser();
  const base=`http://127.0.0.1:${server.port}/數學會考作戰室/index.html`;

  await validateGenerated(`${base}?phase=baseline`, "GENERATED_V2_BASELINE");
  await validateLegacy(`${base}?legacy=1&phase=baseline`, "V1_BASELINE");

  fs.writeFileSync(loaderPath,payload);
  assert(fileHash(loaderPath)===payloadSha256,"Scratch rehearsal loader hash mismatch");

  await validateHuman(`${base}?phase=human`);
  await validateGenerated(`${base}?generated=1&phase=generated-rollback`, "GENERATED_V2_QUERY_ROLLBACK");
  await validateLegacy(`${base}?legacy=1&phase=v1-rollback`, "V1_QUERY_ROLLBACK");

  fs.writeFileSync(loaderPath,originalLoader);
  assert(fileHash(loaderPath)===originalLoaderSha256,"Original loader restoration failed");

  await validateGenerated(`${base}?phase=restored`, "RESTORED_GENERATED_V2_DEFAULT");
  await validateLegacy(`${base}?legacy=1&phase=restored`, "RESTORED_V1_ROLLBACK");

  const expectedPhases=new Set(expected.rehearsalPhases);
  const completedPhases=new Set(tests.map(test=>test.phase));
  for(const phase of expectedPhases) assert(completedPhases.has(phase),`Missing phase ${phase}`);
  assert(consoleErrors.length===0,`Console errors: ${JSON.stringify(consoleErrors)}`);
  assert(runtimeExceptions.length===0,`Runtime exceptions: ${JSON.stringify(runtimeExceptions)}`);
  assert(networkErrors.length===0,`Network errors: ${JSON.stringify(networkErrors)}`);
  assert(fileHash(loaderPath)===originalLoaderSha256,"Scratch loader not restored at end");
  assert(cleanStatus(scratch)==="","Scratch worktree not clean after loader restoration");

  const report={
    status:"PASS_CONTROLLED_CUTOVER_REHEARSAL_BROWSER_R1",
    browserExecutable:browser.executable,browserVersion:browser.browserVersion,
    scratchWorktree:scratch,originalLoaderSha256,payloadSha256,
    tests,passed:tests.filter(x=>x.pass).length,failed:tests.filter(x=>!x.pass).length,
    consoleErrors,runtimeExceptions,networkErrors,httpRequestCount:server.requests.length,
    scratchLoaderRestored:true,scratchClean:true,
    productionRouteChanged:false,oldDatabaseDeletionAllowed:false
  };
  writeJson(path.join(evidence,"controlled-cutover-browser-rehearsal.json"),report);
  console.log(JSON.stringify(report,null,2));
} finally {
  try {
    if(fs.existsSync(loaderPath) && fileHash(loaderPath)!==originalLoaderSha256) fs.writeFileSync(loaderPath,originalLoader);
  } catch {}
  if(browser) await browser.close();
  if(server) await server.close();
}
