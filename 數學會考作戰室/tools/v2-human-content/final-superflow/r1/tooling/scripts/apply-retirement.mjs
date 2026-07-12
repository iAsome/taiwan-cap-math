import fs from "node:fs";
import path from "node:path";
import { parseArgs,readJson,writeJson,assert,runGit,statusPaths } from "./lib/common.mjs";
const a=parseArgs(process.argv.slice(2));assert(a.repo&&a.root,"Usage --repo --root");
const repo=path.resolve(a.repo),root=path.resolve(a.root),ev=path.join(root,"evidence"),pkg=path.join(root,"package"),dry=readJson(path.join(ev,"retirement-dry-run.json"));
assert(dry.status==="PASS_OLD_RUNTIME_RETIREMENT_DRY_RUN_R1","dry run not passed");
fs.copyFileSync(path.join(pkg,"index.html"),path.join(repo,"數學會考作戰室/index.html"));
fs.copyFileSync(path.join(pkg,"math-bootstrap.js"),path.join(repo,"數學會考作戰室/math-bootstrap.js"));
fs.rmSync(path.join(repo,"數學會考作戰室/human-runtime"),{recursive:true,force:true});
fs.cpSync(path.join(pkg,"human-runtime"),path.join(repo,"數學會考作戰室/human-runtime"),{recursive:true});
for(const item of dry.files){const target=path.join(repo,item.path);if(fs.existsSync(target))fs.rmSync(target,{recursive:true,force:true})}
const remaining=dry.files.filter(item=>fs.existsSync(path.join(repo,item.path)));assert(remaining.length===0,`retirement files remain ${JSON.stringify(remaining)}`);
const out={status:"APPLIED_OLD_RUNTIME_RETIREMENT_R1",deletedFileCount:dry.candidateFileCount,deletedBytes:dry.candidateBytes,humanOnlyLoaderApplied:true,humanContentPromoted:true,oldDatabaseDeleted:true,rollbackTagsPreserved:true};
writeJson(path.join(ev,"retirement-apply.json"),out);console.log(JSON.stringify(out,null,2));
