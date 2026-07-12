import fs from "node:fs";
import path from "node:path";
import { parseArgs,readJson,assert,runGit } from "./lib/common.mjs";
const a=parseArgs(process.argv.slice(2));assert(a.repo&&a.root&&a.archive,"Usage --repo --root --archive");const repo=path.resolve(a.repo),root=path.resolve(a.root),archive=path.resolve(a.archive),ex=readJson(path.join(root,"tooling/EXPECTED-RESULTS.json"));
runGit(repo,["reset","--hard",ex.preRetirementTag]);runGit(repo,["clean","-fd"]);
if(fs.existsSync(root)){fs.mkdirSync(path.dirname(archive),{recursive:true});fs.renameSync(root,archive)}
const status=runGit(repo,["status","--short","--untracked-files=all"]);if(status)throw new Error(`not clean after abort\n${status}`);
console.log(JSON.stringify({status:"ABORTED_AND_RESTORED_PRE_RETIREMENT_TAG_R1",tag:ex.preRetirementTag,head:runGit(repo,["rev-parse","HEAD"]),repositoryClean:true,oldRuntimeRestored:true},null,2));
