import fs from "node:fs";
import path from "node:path";
import { parseArgs,readJson,writeJson,assert,runGit,fileHash } from "./lib/common.mjs";
const a=parseArgs(process.argv.slice(2));assert(a.repo&&a.root,"Usage --repo --root");
const repo=path.resolve(a.repo),root=path.resolve(a.root),ev=path.join(root,"evidence"),ex=readJson(path.join(root,"tooling/EXPECTED-RESULTS.json"));
assert(runGit(repo,["branch","--show-current"])==="chatgpt/math-v2-human-authoring-r1","branch mismatch");
assert(runGit(repo,["rev-parse","HEAD"])===ex.requiredStartingHead,"HEAD mismatch");
assert(runGit(repo,["log","-1","--format=%s"])===ex.requiredStartingSubject,"subject mismatch");
assert(runGit(repo,["rev-parse","origin/chatgpt/math-v2-human-authoring-r1"])===ex.requiredStartingHead,"remote mismatch");
assert(runGit(repo,["status","--short","--untracked-files=all"])==="","repo not clean");
const cutover=readJson(path.join(repo,"數學會考作戰室/tools/v2-human-content/controlled-production-cutover/r1/evidence/controlled-production-cutover-r1-summary.json"));
assert(cutover.status===ex.requiredCutoverStatus&&cutover.nextAuthorizedStage===ex.requiredCutoverNextStage,"cutover gate mismatch");
assert(cutover.contentVersion===ex.contentVersion&&cutover.productionActivated===true,"cutover state mismatch");
assert(runGit(repo,["rev-list","-n","1",ex.preCutoverTag])===ex.preCutoverTagTarget,"precutover tag mismatch");
const blobs={};
for(const [rel,sha] of Object.entries(ex.preRepairGitBlobs)){const file=path.join(repo,rel);assert(fs.existsSync(file),`missing ${rel}`);const actual=runGit(repo,["hash-object","--",rel]);assert(actual===sha,`pre-repair blob mismatch ${rel}: ${actual}`);blobs[rel]=actual}
const out={status:"PASS_POST_CUTOVER_STABILITY_BASELINE_R1",head:ex.requiredStartingHead,cutoverStatus:cutover.status,preCutoverTag:ex.preCutoverTag,preCutoverTagTarget:ex.preCutoverTagTarget,preRepairGitBlobs:blobs,productionActivated:true,oldDatabaseDeletionAllowed:false};
writeJson(path.join(ev,"stability-baseline.json"),out);console.log(JSON.stringify(out,null,2));
