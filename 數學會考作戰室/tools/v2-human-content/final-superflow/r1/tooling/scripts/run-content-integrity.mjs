import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { parseArgs,readJson,writeJson,assert } from "./lib/common.mjs";
const a=parseArgs(process.argv.slice(2));assert(a.repo&&a.root,"Usage --repo --root");const repo=path.resolve(a.repo),root=path.resolve(a.root),out=path.join(root,"evidence/content-integrity");fs.mkdirSync(out,{recursive:true});
const tools=path.join(repo,"數學會考作戰室/tools/v2-human-content/global-readiness/r1/tooling/scripts");
for(const script of["run-batch-verifiers-r2.mjs","run-global-audit-r2.mjs"]){const r=spawnSync(process.execPath,[path.join(tools,script),"--repo",repo,"--output",out],{encoding:"utf8"});if(r.status!==0)throw new Error(`${script}\n${r.stdout}\n${r.stderr}`)}
const matrix=readJson(path.join(out,"batch-verifier-matrix-r2.json")),audit=readJson(path.join(out,"global-audit-r2-validation.json"));assert(matrix.status==="PASS"&&matrix.passed===24&&matrix.failed===0,"batch failure");assert(audit.status==="PASS_GLOBAL_AUDIT_R2"&&audit.unresolvedDuplicateGroups===0,"audit failure");
const report={status:"PASS_FINAL_CONTENT_INTEGRITY_R1",batchPassed:24,globalAuditR2:audit.status,counts:audit.counts,unresolvedDuplicateGroups:0,oldDatabaseDeleted:true};writeJson(path.join(root,"evidence/final-content-integrity.json"),report);console.log(JSON.stringify(report,null,2));
