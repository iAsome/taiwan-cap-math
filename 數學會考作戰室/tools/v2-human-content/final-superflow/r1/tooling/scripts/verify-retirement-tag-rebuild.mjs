import fs from "node:fs";
import path from "node:path";
import { parseArgs,readJson,writeJson,assert,runGitResult,runGit } from "./lib/common.mjs";
const a=parseArgs(process.argv.slice(2));assert(a.repo&&a.root&&a.scratch,"Usage --repo --root --scratch");const repo=path.resolve(a.repo),root=path.resolve(a.root),scratch=path.resolve(a.scratch),ex=readJson(path.join(root,"tooling/EXPECTED-RESULTS.json"));assert(!fs.existsSync(scratch),"scratch exists");
const add=runGitResult(repo,["worktree","add","--detach",scratch,ex.preRetirementTag]);assert(add.status===0,add.stderr);
try{
 assert(runGit(scratch,["rev-parse","HEAD"])===ex.requiredStartingHead,"retirement tag target mismatch");
 for(const rel of["數學會考作戰室/v2","數學會考作戰室/tools/v2-content","數學會考作戰室/questions.js","數學會考作戰室/human-runtime"])assert(fs.existsSync(path.join(scratch,rel)),`tag rebuild missing ${rel}`);
 const out={status:"PASS_PRE_RETIREMENT_TAG_REBUILD_R1",tag:ex.preRetirementTag,target:ex.requiredStartingHead,oldGeneratedV2Present:true,oldV1Present:true,humanProductionPresent:true,scratchClean:runGit(scratch,["status","--short","--untracked-files=all"])==="",rollbackCapabilityPreserved:true};
 writeJson(path.join(root,"evidence/pre-retirement-tag-rebuild.json"),out);console.log(JSON.stringify(out,null,2));
}finally{runGitResult(repo,["worktree","remove","--force",scratch]);runGitResult(repo,["worktree","prune"]);try{fs.rmSync(scratch,{recursive:true,force:true})}catch{}}
