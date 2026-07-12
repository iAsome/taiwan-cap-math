import fs from "node:fs";import path from "node:path";import { fileURLToPath } from "node:url";import{fileHash,readJson,assert}from"./lib/common.mjs";
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),".."),expected=readJson(path.join(root,"EXPECTED-RESULTS.json"));
const required=["templates/math-bootstrap.js","templates/human-runtime/config.mjs","templates/human-runtime/storage-migration.mjs","templates/human-runtime/bootstrap.mjs","templates/human-runtime/human-production-bootstrap.js","templates/ops/apply-staged-cutover.mjs","templates/ops/rollback-to-precutover-tag.mjs"];
for(const rel of required)assert(fs.existsSync(path.join(root,rel)),`missing ${rel}`);
const loader=fs.readFileSync(path.join(root,"templates/math-bootstrap.js"),"utf8");
for(const marker of["human-runtime/human-production-bootstrap.js","generated=1","legacy=1","human-production-r1"])assert(loader.includes(marker),`loader marker missing ${marker}`);
console.log(JSON.stringify({status:"PASS_TOOLING_SELF_TEST",requiredTemplateCount:required.length,loaderSha256:fileHash(path.join(root,"templates/math-bootstrap.js")),contentVersion:expected.contentVersion,productionActivationAllowed:false,oldDatabaseDeletionAllowed:false},null,2));
