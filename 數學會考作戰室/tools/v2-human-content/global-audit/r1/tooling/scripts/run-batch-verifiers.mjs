import fs from 'node:fs';
import path from 'node:path';
import {spawnSync} from 'node:child_process';
import {fileURLToPath} from 'node:url';
const args=process.argv.slice(2);const arg=n=>{const i=args.indexOf(n);return i>=0?args[i+1]:null;};
const repo=path.resolve(arg('--repo')||process.cwd());
const out=path.resolve(arg('--output')||path.join(repo,'數學會考作戰室','tools','v2-human-content','global-audit','r1'));
const batches=path.join(repo,'數學會考作戰室','tools','v2-human-content','batches');
const hook=path.join(path.dirname(fileURLToPath(import.meta.url)),'windows-posix-relative-hook.mjs');
const dirs=fs.readdirSync(batches,{withFileTypes:true}).filter(x=>x.isDirectory()).map(x=>path.join(batches,x.name)).filter(p=>fs.existsSync(path.join(p,'importer','verify-bundle.mjs'))).sort();
const results=[];
for(const batch of dirs){
 const name=path.basename(batch); const script=path.join(batch,'importer','verify-bundle.mjs');
 const extra=name.startsWith('017-')?['--expect-staging']:[];
 const argv=['--import',hook,script,...extra];
 const r=spawnSync(process.execPath,argv,{cwd:batch,encoding:'utf8',env:{...process.env}});
 let parsed=null;try{parsed=JSON.parse(r.stdout.trim());}catch{}
 results.push({batch:name,exitCode:r.status,signal:r.signal,pass:r.status===0,parsed,stdout:r.stdout,stderr:r.stderr});
}
fs.mkdirSync(out,{recursive:true});
fs.writeFileSync(path.join(out,'batch-verifier-matrix.json'),JSON.stringify({status:results.every(x=>x.pass)?'PASS':'FAIL',batchCount:results.length,results},null,2)+'\n','utf8');
console.log(JSON.stringify({status:results.every(x=>x.pass)?'PASS':'FAIL',batchCount:results.length,failed:results.filter(x=>!x.pass).map(x=>x.batch)},null,2));
