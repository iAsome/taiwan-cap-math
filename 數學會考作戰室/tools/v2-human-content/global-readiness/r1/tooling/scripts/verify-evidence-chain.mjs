#!/usr/bin/env node
import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';
const args=process.argv.slice(2);const arg=n=>{const i=args.indexOf(n);return i>=0?args[i+1]:null};
const repo=path.resolve(arg('--repo')||process.cwd());const output=path.resolve(arg('--output')||path.join(repo,'數學會考作戰室','tools','v2-human-content','global-readiness','r1','evidence'));
const human=path.join(repo,'數學會考作戰室','tools','v2-human-content');const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));const sha=p=>crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
function verifyManifest(root,file){const raw=read(file);const rows=Array.isArray(raw)?raw:(Array.isArray(raw.files)?raw.files:[]);const bad=[];if(!rows.length)return[{path:path.basename(file),issue:'unsupported-or-empty-manifest'}];for(const row of rows){const p=path.join(root,...row.path.split('/'));if(!fs.existsSync(p))bad.push({path:row.path,issue:'missing'});else{const actual=sha(p);if(actual!==row.sha256)bad.push({path:row.path,expected:row.sha256,actual});}}return bad}
const aRoot=path.join(human,'global-repair','wave-1a','evidence');const bRoot=path.join(human,'global-repair','wave-1b','evidence');
const aSummary=read(path.join(aRoot,'wave-1a-final-summary.json'));const bSummary=read(path.join(bRoot,'wave-1b-final-summary.json'));const adjudication=read(path.join(bRoot,'duplicate-adjudication-report.json'));
const aBad=verifyManifest(aRoot,path.join(aRoot,'evidence-file-sha256.json'));const bBad=verifyManifest(bRoot,path.join(bRoot,'evidence-file-sha256.json'));
const issues=[];
if(aSummary.status!=='PASS_WAVE_1A'||aSummary.allBatchVerifierPassed!==24||aSummary.globalAuditStatus!=='PASS_GLOBAL_STRUCTURE')issues.push('Wave 1A summary mismatch');
if(bSummary.status!=='PASS_WAVE_1B'||bSummary.allBatchVerifierPassed!==24||bSummary.replacementCount!==12||bSummary.unresolvedDuplicateGroups!==0)issues.push('Wave 1B summary mismatch');
if(adjudication.status!=='PASS_DUPLICATE_ADJUDICATION'||adjudication.retainedGroupCount!==22||adjudication.unresolvedGroupCount!==0)issues.push('Duplicate adjudication mismatch');
if(aBad.length)issues.push('Wave 1A evidence hash mismatch');if(bBad.length)issues.push('Wave 1B evidence hash mismatch');
const result={status:issues.length?'FAIL':'PASS_EVIDENCE_CHAIN',wave1A:aSummary.status,wave1B:bSummary.status,replacementCount:bSummary.replacementCount,retainedNumberSwapGroups:adjudication.retainedGroupCount,unresolvedDuplicateGroups:adjudication.unresolvedGroupCount,wave1AEvidenceHashIssues:aBad,wave1BEvidenceHashIssues:bBad,issues,productionActivationAllowed:false,oldDatabaseDeletionAllowed:false};
fs.mkdirSync(output,{recursive:true});fs.writeFileSync(path.join(output,'evidence-chain-validation.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));if(issues.length)process.exit(1);
