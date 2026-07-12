import fs from "node:fs";
import path from "node:path";
import { parseArgs,readJson,writeJson,assert } from "./lib/common.mjs";
import { launchBrowser,waitUntil } from "./lib/cdp.mjs";
const a=parseArgs(process.argv.slice(2));assert(a.output,"Usage --output");
const output=path.resolve(a.output),merge=readJson(path.join(output,"final-merge.json"));
const base=String(merge.pages.htmlUrl).replace(/\/$/,"")+"/數學會考作戰室/";
let browser,page,lastError=null,result=null;
const delay=ms=>new Promise(resolve=>setTimeout(resolve,ms));
try{
  browser=await launchBrowser();page=await browser.newPage("about:blank");
  await page.send("Page.enable");await page.send("Runtime.enable");await page.send("Network.enable");
  for(let attempt=1;attempt<=30;attempt++){
    try{
      const loaded=page.waitFor("Page.loadEventFired",60000);
      const nav=await page.send("Page.navigate",{url:`${base}?deployAttempt=${attempt}`});
      await loaded.catch(()=>{});
      if(nav.errorText)throw new Error(nav.errorText);
      await waitUntil(page,`document.documentElement.dataset.mathEngine==="human-production-r1"&&window.__HUMAN_PRODUCTION_APP_READY__===true`,30000);
      result=await page.evaluate(`({title:document.title,engine:document.documentElement.dataset.mathEngine,units:window.__HUMAN_PRODUCTION_R1__.runtime.manifest.unitCount,skills:window.__HUMAN_PRODUCTION_R1__.runtime.manifest.skillCount,version:window.__HUMAN_PRODUCTION_R1__.runtime.manifest.contentVersion,oldRuntimesRetired:window.__MATH_HUMAN_PRODUCTION_LOADER_R1__.oldRuntimesRetired})`);
      if(result.units===23&&result.skills===339&&result.oldRuntimesRetired===true)break;
      throw new Error(`Unexpected deployed result ${JSON.stringify(result)}`);
    }catch(error){lastError=String(error.message||error);result=null;if(attempt<30)await delay(10000);}
  }
  assert(result,`Deployment did not reach final release: ${lastError}`);
  const out={status:"PASS_GITHUB_PAGES_HUMAN_RUNTIME_DEPLOYMENT_R1",url:base,browserVersion:browser.browserVersion,result,lastError:null};
  writeJson(path.join(output,"final-deployment.json"),out);console.log(JSON.stringify(out,null,2));
}finally{if(page)page.close();if(browser)await browser.close()}
