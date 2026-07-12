#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';

const args=process.argv.slice(2); const arg=n=>{const i=args.indexOf(n);return i>=0?args[i+1]:null};
const repo=path.resolve(arg('--repo')||process.cwd());
const here=path.dirname(fileURLToPath(import.meta.url));
const toolingRoot=path.resolve(here,'..');
const data=JSON.parse(fs.readFileSync(path.join(toolingRoot,'approved-question-replacements.json'),'utf8'));
const ledger=JSON.parse(fs.readFileSync(path.join(toolingRoot,'duplicate-adjudication-ledger.json'),'utf8'));
const humanRoot=path.join(repo,'數學會考作戰室','tools','v2-human-content');
const batchesRoot=path.join(humanRoot,'batches');
const candidatePath=path.join(humanRoot,'global-repair','wave-1a','evidence','post-audit','global-duplicate-candidates.json');
const evidenceRoot=path.resolve(arg('--evidence')||path.join(humanRoot,'global-repair','wave-1b','evidence'));
const AUTH='CHATGPT_HUMAN_AUTHORED_R1';
const fail=m=>{throw new Error(m)};
const readJson=f=>JSON.parse(fs.readFileSync(f,'utf8'));
const writeJson=(f,v)=>{fs.mkdirSync(path.dirname(f),{recursive:true});fs.writeFileSync(f,JSON.stringify(v,null,2)+'\n','utf8')};
const readJsonl=f=>{const t=fs.readFileSync(f,'utf8').trim();return t?t.split(/\r?\n/).map(JSON.parse):[]};
const writeJsonl=(f,a)=>fs.writeFileSync(f,a.map(x=>JSON.stringify(x)).join('\n')+(a.length?'\n':''),'utf8');
const sha=x=>crypto.createHash('sha256').update(x).digest('hex');
const shaFile=f=>sha(fs.readFileSync(f));
function stable(x){if(Array.isArray(x))return x.map(stable);if(x&&typeof x==='object')return Object.fromEntries(Object.keys(x).sort().map(k=>[k,stable(x[k])]));return x}
function canonicalHash(record, own='contentSha256', extra=[]){const c=structuredClone(record);delete c[own];for(const k of extra)delete c[k];return sha(JSON.stringify(stable(c)))}
function walk(dir){if(!fs.existsSync(dir))return[];const out=[];for(const e of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,e.name);e.isDirectory()?out.push(...walk(p)):out.push(p)}return out}
function posixRel(root,file){return path.relative(root,file).split(path.sep).join('/')}
function getText(q){return String(q.text||q.prompt||'')}
function normalizeCentral(s){let t=String(s??'').normalize('NFKC');t=t.replace(/(?<![A-Za-z])[-+]?\d+(?:\.\d+)?(?:\/\d+(?:\.\d+)?)?%?/g,'#');t=t.replace(/[A-Za-z]+/g,'x');t=t.replace(/[，。！？、；：,.!?;:「」『』（）()\[\]【】\s]/g,'').toLowerCase();return t}
function normalizeU17(s,numeric=false){let t=String(s??'').toLowerCase().replace(/[^\w\u4e00-\u9fff]+/gu,'');if(numeric)t=t.replace(/\d+(?:\.\d+)?/g,'#');return t}
function findQuestionFile(batchRoot,qid){for(const f of walk(path.join(batchRoot,'units')).filter(x=>x.endsWith('mc-questions.jsonl'))){const rows=readJsonl(f);const idx=rows.findIndex(x=>x.questionId===qid);if(idx>=0)return{file:f,rows,idx}}fail(`Missing question ${qid}`)}
function findReviewFile(qFile,qid){const f=path.join(path.dirname(qFile),'semantic-reviews.jsonl');const rows=readJsonl(f);const idx=rows.findIndex(x=>x.questionId===qid);if(idx<0)fail(`Missing review ${qid}`);return{file:f,rows,idx}}
function updateContentManifest(batchRoot,q,review){const f=path.join(batchRoot,'manifest','content-sha256.json');if(!fs.existsSync(f))return;const m=readJson(f);const qid=q.questionId;const rid=review.reviewId||`${qid}#semantic-review`;
 if(Array.isArray(m.records)){
  for(const e of m.records){if(e.id===qid)e.sha256=q.contentSha256; if(e.id===`${qid}#semantic-review`||e.id===rid){e.sha256=review.reviewSha256||review.reviewEvidenceSha256||review.contentSha256}}
 }else if(m.items&&typeof m.items==='object'){
  if(qid in m.items)m.items[qid]=q.contentSha256;if(rid in m.items)m.items[rid]=review.contentSha256;
 }else if(Array.isArray(m.entries)){
  for(const e of m.entries)if(e.id===qid)e.sha256=q.contentSha256;
 }else fail(`Unsupported content manifest ${f}`);
 writeJson(f,m)}
function updateFingerprint(batchRoot,q){const f=path.join(batchRoot,'review','unit-content-fingerprints.json');if(!fs.existsSync(f))return;const m=readJson(f);const text=getText(q);
 if(Array.isArray(m.records)){
  const e=m.records.find(x=>x.id===q.questionId);if(!e)fail(`Missing fingerprint ${q.questionId}`);const n=normalizeCentral(text);e.normalizedPrompt=n;e.normalizedPromptSha256=sha(n);e.contentSha256=q.contentSha256;
 }else if(Array.isArray(m.questions)){
  const e=m.questions.find(x=>x.id===q.questionId);if(!e)fail(`Missing U17 fingerprint ${q.questionId}`);e.sha256=sha(normalizeU17(text,false));e.numericSkeletonSha256=sha(normalizeU17(text,true));
 }else fail(`Unsupported fingerprint ${f}`);
 writeJson(f,m)}
function updateFileManifest(batchRoot){let f=path.join(batchRoot,'manifest','file-sha256.json');if(!fs.existsSync(f))fail(`Missing file manifest ${batchRoot}`);const m=readJson(f);
 if(Array.isArray(m.files)){
  for(const e of m.files){const p=path.join(batchRoot,...e.path.split('/'));if(!fs.existsSync(p))fail(`Missing manifest file ${p}`);e.bytes=fs.statSync(p).size;e.sha256=shaFile(p)}
  if('fileCount'in m)m.fileCount=m.files.length;
 }else if(m.files&&typeof m.files==='object'){
  const next={};for(const rel of Object.keys(m.files).sort()){const p=path.join(batchRoot,...rel.split('/'));if(!fs.existsSync(p))fail(`Missing manifest file ${p}`);next[rel]=shaFile(p)}m.files=next;if('fileCount'in m)m.fileCount=Object.keys(next).length;
 }else fail(`Unsupported file manifest ${f}`);writeJson(f,m)}

if(!fs.existsSync(candidatePath))fail(`Missing Wave 1A candidate source`);
const candidateSha=shaFile(candidatePath);if(candidateSha!==data.candidateSourceSha256||candidateSha!==ledger.candidateSourceSha256)fail(`Candidate source hash mismatch ${candidateSha}`);
if(data.replacementCount!==12||data.items.length!==12)fail('Expected 12 replacements');
const affected=new Set();const changed=[];
for(const item of data.items){
 const batchRoot=path.join(batchesRoot,item.batch);const qbox=findQuestionFile(batchRoot,item.questionId);const q=qbox.rows[qbox.idx];
 if(getText(q)!==item.expectedOriginalText)fail(`${item.questionId}: original text drift: ${getText(q)}`);
 if(q.answerIndex!==item.expectedAnswerIndex)fail(`${item.questionId}: answer index drift`);
 if(q.contentAuthority!==AUTH)fail(`${item.questionId}: authority missing`);
 Object.assign(q,structuredClone(item.questionPatch));
 if(q.answerIndex!==item.expectedAnswerIndex)fail(`${item.questionId}: patch changed answer index`);
 if(!Array.isArray(q.choices)||q.choices.length!==4)fail(`${item.questionId}: choices invalid`);
 q.contentSha256=canonicalHash(q);
 qbox.rows[qbox.idx]=q;writeJsonl(qbox.file,qbox.rows);
 const rbox=findReviewFile(qbox.file,item.questionId);const r=rbox.rows[rbox.idx];Object.assign(r,structuredClone(item.reviewPatch));
 if('questionContentSha256'in r){r.questionContentSha256=q.contentSha256;r.contentSha256=canonicalHash(r)}
 else r.contentSha256=q.contentSha256;
 if('reviewSha256'in r)r.reviewSha256=canonicalHash(r,'reviewSha256',['contentSha256']);
 if('reviewEvidenceSha256'in r)r.reviewEvidenceSha256=canonicalHash(r,'reviewEvidenceSha256',['contentSha256']);
 rbox.rows[rbox.idx]=r;writeJsonl(rbox.file,rbox.rows);
 updateContentManifest(batchRoot,q,r);updateFingerprint(batchRoot,q);
 affected.add(item.batch);changed.push({questionId:item.questionId,batch:item.batch,from:item.expectedOriginalText,to:getText(q),answerIndex:q.answerIndex,questionSha256:q.contentSha256,reviewEvidenceSha256:r.reviewSha256||r.reviewEvidenceSha256||null});
}
for(const batch of [...affected].sort()){
 const batchRoot=path.join(batchesRoot,batch);updateFileManifest(batchRoot);fs.rmSync(path.join(batchRoot,'staging'),{recursive:true,force:true});
}
fs.mkdirSync(evidenceRoot,{recursive:true});
const report={status:'REPAIR_SOURCE_APPLIED_STAGING_NOT_YET_EMITTED',candidateSourceSha256:candidateSha,replacementCount:changed.length,affectedBatches:[...affected].sort(),changed,retainedNumberSwapGroupCount:ledger.retainedNumberSwapGroups.length,productionActivationAllowed:false,oldDatabaseModified:false};
writeJson(path.join(evidenceRoot,'wave-1b-apply-report.json'),report);
console.log(JSON.stringify({status:report.status,replacementCount:report.replacementCount,affectedBatches:report.affectedBatches,retainedNumberSwapGroupCount:report.retainedNumberSwapGroupCount,productionActivationAllowed:false},null,2));
