import fs from "node:fs";
import path from "node:path";
import { parseArgs,assert,runGit } from "./lib/common.mjs";
const a=parseArgs(process.argv.slice(2));assert(a.repo&&a.root&&a.archive,"Usage --repo --root --archive");const repo=path.resolve(a.repo),root=path.resolve(a.root),archive=path.resolve(a.archive);
runGit(repo,["restore","--source=HEAD","--","數學會考作戰室/human-runtime/engine.mjs","數學會考作戰室/human-runtime/bootstrap.mjs","數學會考作戰室/human-runtime/app-human.js"]);
if(fs.existsSync(root)){fs.mkdirSync(path.dirname(archive),{recursive:true});fs.renameSync(root,archive)}
const status=runGit(repo,["status","--short","--untracked-files=all"]);if(status)throw new Error(`not clean after abort\n${status}`);
console.log(JSON.stringify({status:"ABORTED_STABILITY_REPAIR_AND_RESTORED_CUTOVER_COMMIT",productionStillActivated:true,oldDatabaseDeleted:false,evidenceArchive:archive,repositoryClean:true},null,2));
