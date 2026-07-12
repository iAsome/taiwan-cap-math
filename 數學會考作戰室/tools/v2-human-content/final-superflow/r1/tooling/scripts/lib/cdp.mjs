import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import net from "node:net";
import { spawn, execFileSync } from "node:child_process";
const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
function commandPath(command){try{const tool=process.platform==="win32"?"where":"which";return execFileSync(tool,[command],{encoding:"utf8",stdio:["ignore","pipe","ignore"]}).split(/\r?\n/).map(x=>x.trim()).find(Boolean)||null}catch{return null}}
export function findBrowser(){
  const candidates=[process.env.CHROME_PATH,process.env.EDGE_PATH,
    process.env.LOCALAPPDATA&&path.join(process.env.LOCALAPPDATA,"Google/Chrome/Application/chrome.exe"),
    process.env.LOCALAPPDATA&&path.join(process.env.LOCALAPPDATA,"Microsoft/Edge/Application/msedge.exe"),
    process.env.PROGRAMFILES&&path.join(process.env.PROGRAMFILES,"Google/Chrome/Application/chrome.exe"),
    process.env.PROGRAMFILES&&path.join(process.env.PROGRAMFILES,"Microsoft/Edge/Application/msedge.exe"),
    process.env["PROGRAMFILES(X86)"]&&path.join(process.env["PROGRAMFILES(X86)"],"Microsoft/Edge/Application/msedge.exe"),
    "/usr/bin/google-chrome","/usr/bin/google-chrome-stable","/usr/bin/chromium",
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    commandPath("chrome"),commandPath("google-chrome"),commandPath("chromium"),commandPath("msedge")].filter(Boolean);
  const found=candidates.find(x=>fs.existsSync(x));if(!found)throw new Error("No Chrome/Edge found; set CHROME_PATH or EDGE_PATH");return found;
}
async function freePort(){return new Promise((r,j)=>{const s=net.createServer();s.once("error",j);s.listen(0,"127.0.0.1",()=>{const{port}=s.address();s.close(()=>r(port))})})}
async function waitJson(url,t=15000){const start=Date.now();while(Date.now()-start<t){try{const x=await fetch(url);if(x.ok)return x.json()}catch{}await delay(100)}throw new Error(`Timed out ${url}`)}
class Session{
  constructor(ws){this.i=1;this.p=new Map();this.l=new Map();this.ws=new WebSocket(ws)}
  async open(){await new Promise((r,j)=>{const t=setTimeout(()=>j(new Error("CDP open timeout")),10000);this.ws.addEventListener("open",()=>{clearTimeout(t);r()},{once:true});this.ws.addEventListener("error",e=>{clearTimeout(t);j(new Error(e.message||"CDP error"))},{once:true})});this.ws.addEventListener("message",e=>{const m=JSON.parse(String(e.data));if(m.id){const p=this.p.get(m.id);if(!p)return;this.p.delete(m.id);m.error?p.j(new Error(m.error.message)):p.r(m.result||{})}else if(m.method)for(const h of this.l.get(m.method)||[])h(m.params||{})});return this}
  send(method,params={}){const id=this.i++;return new Promise((r,j)=>{this.p.set(id,{r,j});this.ws.send(JSON.stringify({id,method,params}))})}
  on(method,h){const a=this.l.get(method)||[];a.push(h);this.l.set(method,a)}
  waitFor(method,t=15000){return new Promise((r,j)=>{const timer=setTimeout(()=>j(new Error(`Timed out ${method}`)),t);const h=p=>{clearTimeout(timer);this.l.set(method,(this.l.get(method)||[]).filter(v=>v!==h));r(p)};this.on(method,h)})}
  async evaluate(expression){const x=await this.send("Runtime.evaluate",{expression,awaitPromise:true,returnByValue:true,userGesture:true});if(x.exceptionDetails)throw new Error(x.exceptionDetails.exception?.description||x.exceptionDetails.text);return x.result?.value}
  async screenshot(file){const x=await this.send("Page.captureScreenshot",{format:"jpeg",quality:82,captureBeyondViewport:false,fromSurface:true});fs.mkdirSync(path.dirname(file),{recursive:true});fs.writeFileSync(file,Buffer.from(x.data,"base64"))}
  close(){try{this.ws.close()}catch{}}
}
export async function launchBrowser(){
  if(typeof WebSocket!=="function")throw new Error("Node.js global WebSocket required");
  const executable=findBrowser(),port=await freePort(),dir=fs.mkdtempSync(path.join(os.tmpdir(),"math-v2-final-superflow-"));
  const child=spawn(executable,[`--remote-debugging-port=${port}`,`--user-data-dir=${dir}`,"--headless=new","--no-first-run","--disable-background-networking","--disable-extensions","--disable-gpu","--no-proxy-server","--proxy-bypass-list=*","--no-sandbox","about:blank"],{stdio:["ignore","ignore","pipe"]});
  const version=await waitJson(`http://127.0.0.1:${port}/json/version`);
  return{executable,browserVersion:version.Browser||"unknown",async newPage(url="about:blank"){const r=await fetch(`http://127.0.0.1:${port}/json/new?${encodeURIComponent(url)}`,{method:"PUT"});if(!r.ok)throw new Error(`new page ${r.status}`);const j=await r.json();return new Session(j.webSocketDebuggerUrl).open()},async close(){try{child.kill("SIGTERM")}catch{}await delay(300);try{fs.rmSync(dir,{recursive:true,force:true})}catch{}}}
}
export async function waitUntil(s,e,t=120000){const start=Date.now();let last;while(Date.now()-start<t){last=await s.evaluate(e);if(last)return last;await delay(100)}throw new Error(`waitUntil failed ${e}; last=${JSON.stringify(last)}`)}
