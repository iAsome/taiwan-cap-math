import fs from "node:fs";
import path from "node:path";
import http from "node:http";
import net from "node:net";
import { parseArgs,readJson,writeJson,assert,runGitResult,runGit } from "./lib/common.mjs";
import { launchBrowser,waitUntil } from "./lib/cdp.mjs";
const a=parseArgs(process.argv.slice(2));assert(a.repo&&a.root&&a.scratch,"Usage --repo --root --scratch");const repo=path.resolve(a.repo),root=path.resolve(a.root),scratch=path.resolve(a.scratch),ex=readJson(path.join(root,"tooling/EXPECTED-RESULTS.json"));assert(!fs.existsSync(scratch),"scratch exists");
let add=runGitResult(repo,["worktree","add","--detach",scratch,ex.preCutoverTag]);assert(add.status===0,add.stderr);let server,browser;
try{
 assert(runGit(scratch,["rev-parse","HEAD"])===ex.preCutoverTagTarget,"tag checkout target mismatch");
 const port=await new Promise((r,j)=>{const s=net.createServer();s.once("error",j);s.listen(0,"127.0.0.1",()=>{const{port}=s.address();s.close(()=>r(port))})});
 const mime=new Map([[".html","text/html; charset=utf-8"],[".js","text/javascript; charset=utf-8"],[".mjs","text/javascript; charset=utf-8"],[".json","application/json; charset=utf-8"],[".css","text/css; charset=utf-8"],[".svg","image/svg+xml; charset=utf-8"],[".jpg","image/jpeg"]]);
 server=http.createServer((req,res)=>{const rel=decodeURIComponent((req.url||"/").split("?")[0]).replace(/^\/+/,"")||"index.html";const f=path.resolve(scratch,rel);if(!f.startsWith(scratch+path.sep)||!fs.existsSync(f)){res.writeHead(404);res.end();return}const p=fs.statSync(f).isDirectory()?path.join(f,"index.html"):f;res.writeHead(200,{"content-type":mime.get(path.extname(p))||"application/octet-stream","cache-control":"no-store"});fs.createReadStream(p).pipe(res)});await new Promise((r,j)=>{server.once("error",j);server.listen(port,"127.0.0.1",r)});browser=await launchBrowser();
 async function open(url){const p=await browser.newPage("about:blank");await p.send("Page.enable");await p.send("Runtime.enable");const loaded=p.waitFor("Page.loadEventFired",30000);const nav=await p.send("Page.navigate",{url});await loaded.catch(()=>{});assert(!nav.errorText,nav.errorText||"nav");return p}
 const base=`http://127.0.0.1:${port}/數學會考作戰室/index.html`;let p=await open(base);await waitUntil(p,`document.documentElement.dataset.mathEngine==="v2"&&window.EXAM_ENGINE`,120000);p.close();p=await open(`${base}?legacy=1`);await waitUntil(p,`document.documentElement.dataset.mathEngine==="v1-rollback"&&document.getElementById("mainNav")`,120000);p.close();
 const out={status:"PASS_PRECUTOVER_TAG_CHECKOUT_AND_REBUILD_R1",tag:ex.preCutoverTag,target:ex.preCutoverTagTarget,generatedV2DefaultAtTag:true,v1RollbackAtTag:true,scratchClean:runGit(scratch,["status","--short","--untracked-files=all"])==="",oldDatabaseDeletionAllowed:false};writeJson(path.join(root,"evidence/precutover-tag-rebuild.json"),out);console.log(JSON.stringify(out,null,2));
}finally{if(browser)await browser.close();if(server)await new Promise(r=>server.close(r));runGitResult(repo,["worktree","remove","--force",scratch]);runGitResult(repo,["worktree","prune"]);try{fs.rmSync(scratch,{recursive:true,force:true})}catch{}}
