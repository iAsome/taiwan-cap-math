#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath,pathToFileURL} from 'node:url';
const args=process.argv.slice(2);const arg=n=>{const i=args.indexOf(n);return i>=0?args[i+1]:null};
const repo=path.resolve(arg('--repo')||process.cwd());
const output=path.resolve(arg('--output')||path.join(repo,'數學會考作戰室','tools','v2-human-content','global-readiness','r1','evidence'));
const batchesRoot=path.join(repo,'數學會考作戰室','tools','v2-human-content','batches');
const hook=pathToFileURL(path.join(path.dirname(fileURLToPath(import.meta.url)),'windows-posix-relative-hook.mjs')).href;
const dirs=fs.readdirSync(batchesRoot,{withFileTypes:true}).filter(x=>x.isDirectory()).map(x=>path.join(batchesRoot,x.name)).filter(p=>fs.existsSync(path.join(p,'importer','verify-bundle.mjs'))).sort();
const results=[];
for(const batch of dirs){
  const name=path.basename(batch);const script=path.join(batch,'importer','verify-bundle.mjs');
  const stagingPresent=fs.existsSync(path.join(batch,'staging'));
  const extra=name.startsWith('017-')&&stagingPresent?['--expect-staging']:[];
  const r=spawnSync(process.execPath,['--import',hook,script,...extra],{cwd:batch,encoding:'utf8',env:{...process.env}});
  let parsed=null;try{parsed=JSON.parse(r.stdout.trim())}catch{}
  results.push({batch:name,exitCode:r.status,signal:r.signal,pass:r.status===0,parsed,stdout:r.stdout,stderr:r.stderr});
}
fs.mkdirSync(output,{recursive:true});
const matrix={status:results.every(x=>x.pass)&&results.length===24?'PASS':'FAIL',batchCount:results.length,passed:results.filter(x=>x.pass).length,failed:results.filter(x=>!x.pass).length,results};
const out=path.join(output,'batch-verifier-matrix-r2.json');fs.writeFileSync(out,JSON.stringify(matrix,null,2)+'\n','utf8');
console.log(JSON.stringify({status:matrix.status,batchCount:matrix.batchCount,passed:matrix.passed,failed:results.filter(x=>!x.pass).map(x=>x.batch),outputFile:out},null,2));
if(matrix.status!=='PASS')process.exit(1);
