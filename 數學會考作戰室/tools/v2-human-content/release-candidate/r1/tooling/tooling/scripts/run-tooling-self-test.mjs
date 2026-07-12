import fs from "node:fs"; import path from "node:path"; import { fileURLToPath } from "node:url"; import { assert, sha256 } from "./lib/common.mjs";
const root=path.resolve(path.dirname(fileURLToPath(import.meta.url)),"../..");
const required=["release-blueprint-r1.json","official-spec-lock-r1.json","payload/human-runtime-rc/config.mjs","payload/human-runtime-rc/engine.mjs","payload/human-runtime-rc/bootstrap.mjs","payload/human-runtime-rc/human-rc-bootstrap.js"];
const files=required.map(rel=>{const file=path.join(root,rel);assert(fs.existsSync(file),`missing ${rel}`);const data=fs.readFileSync(file);return{path:rel,bytes:data.length,sha256:sha256(data)};});
const blueprint=JSON.parse(fs.readFileSync(path.join(root,"release-blueprint-r1.json"),"utf8"));assert(Object.values(blueprint.domainCounts).reduce((a,b)=>a+b,0)===25,"domain count sum");for(const c of Object.values(blueprint.difficultyCountsByLevel))assert(Object.values(c).reduce((a,b)=>a+b,0)===25,"difficulty sum");
console.log(JSON.stringify({status:"PASS_TOOLING_SELF_TEST",fileCount:files.length,blueprintProfile:blueprint.profileId,productionActivationAllowed:false,oldDatabaseDeletionAllowed:false,files},null,2));
