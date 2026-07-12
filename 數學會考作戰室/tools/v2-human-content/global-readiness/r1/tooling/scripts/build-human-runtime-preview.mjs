#!/usr/bin/env node
import fs from 'node:fs';import path from 'node:path';import crypto from 'node:crypto';
const args=process.argv.slice(2);const arg=n=>{const i=args.indexOf(n);return i>=0?args[i+1]:null};
const repo=path.resolve(arg('--repo')||process.cwd());const output=path.resolve(arg('--output')||path.join(repo,'數學會考作戰室','tools','v2-human-content','global-readiness','r1','runtime-preview'));
const batchesRoot=path.join(repo,'數學會考作戰室','tools','v2-human-content','batches');const AUTH='CHATGPT_HUMAN_AUTHORED_R1';
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));const readl=p=>{const t=fs.readFileSync(p,'utf8').trim();return t?t.split(/\r?\n/).map(JSON.parse):[]};const sha=b=>crypto.createHash('sha256').update(b).digest('hex');const posix=p=>p.split(path.sep).join('/');
const dirs=p=>fs.existsSync(p)?fs.readdirSync(p,{withFileTypes:true}).filter(x=>x.isDirectory()).map(x=>path.join(p,x.name)).sort():[];const walk=p=>{if(!fs.existsSync(p))return[];const out=[];for(const e of fs.readdirSync(p,{withFileTypes:true})){const q=path.join(p,e.name);e.isDirectory()?out.push(...walk(q)):out.push(q)}return out};
const units=new Map(),seenSkills=new Set(),seenQuestions=new Set(),seenCr=new Set(),contentHashes=[];const figureIndex={};
for(const batch of dirs(batchesRoot)){
 const batchName=path.basename(batch);let meta={};const mp=path.join(batch,'manifest','project-manifest.json');if(fs.existsSync(mp))try{meta=read(mp)}catch{}
 for(const svg of walk(path.join(batch,'figures')).filter(x=>x.endsWith('.svg'))){const id=path.basename(svg,'.svg');if(figureIndex[id])throw new Error(`Duplicate SVG figure id ${id}`);figureIndex[id]={figureId:id,sourcePath:posix(path.relative(repo,svg)),sha256:sha(fs.readFileSync(svg)),bytes:fs.statSync(svg).size};}
 for(const unitDir of dirs(path.join(batch,'units'))){const unitId=path.basename(unitDir);if(!units.has(unitId))units.set(unitId,{unitId,numericUnitId:Number(unitId.slice(1)),title:meta.unitTitle||meta.title||unitId,gradeBand:meta.gradeBand||null,domain:meta.domain||null,skills:[],sourceBatches:[]});const unit=units.get(unitId);if(!unit.sourceBatches.includes(batchName))unit.sourceBatches.push(batchName);
  for(const skillDir of dirs(unitDir)){
   const slot=path.basename(skillDir);const lecture=read(path.join(skillDir,'lecture.json'));const mc=readl(path.join(skillDir,'mc-questions.jsonl'));const cr=readl(path.join(skillDir,'constructed-response.jsonl'));const drawings=readl(path.join(skillDir,'drawing-specs.jsonl'));
   if(seenSkills.has(lecture.skillId))throw new Error(`Duplicate skill ${lecture.skillId}`);seenSkills.add(lecture.skillId);
   for(const x of [lecture,...mc,...cr,...drawings])if(x.contentAuthority!==AUTH)throw new Error(`Authority missing in ${lecture.skillId}`);
   for(const q of mc){if(seenQuestions.has(q.questionId))throw new Error(`Duplicate MC ${q.questionId}`);seenQuestions.add(q.questionId);contentHashes.push(q.contentSha256)}
   for(const q of cr){if(seenCr.has(q.questionId))throw new Error(`Duplicate CR ${q.questionId}`);seenCr.add(q.questionId);contentHashes.push(q.contentSha256)}
   contentHashes.push(lecture.contentSha256);
   unit.skills.push({slot,skillId:lecture.skillId,topicId:lecture.topicId||mc[0]?.topicId||null,title:lecture.title,lecture,mcQuestions:mc,constructedResponses:cr,drawingSpecs:drawings,sourceBatch:batchName,sourcePath:posix(path.relative(repo,skillDir))});
  }
 }
}
fs.rmSync(output,{recursive:true,force:true});fs.mkdirSync(path.join(output,'units'),{recursive:true});
const unitRows=[];for(const unit of [...units.values()].sort((a,b)=>a.numericUnitId-b.numericUnitId)){unit.skills.sort((a,b)=>a.slot.localeCompare(b.slot));const data={schemaVersion:'math-v2-human-runtime-preview-unit-r1',previewOnly:true,productionActivationAllowed:false,...unit,counts:{skills:unit.skills.length,lectures:unit.skills.length,mcQuestions:unit.skills.reduce((n,s)=>n+s.mcQuestions.length,0),constructedResponses:unit.skills.reduce((n,s)=>n+s.constructedResponses.length,0),drawingSpecs:unit.skills.reduce((n,s)=>n+s.drawingSpecs.length,0)}};const rel=`units/${unit.unitId}.json`;const bytes=Buffer.from(JSON.stringify(data)+'\n');fs.writeFileSync(path.join(output,rel),bytes);unitRows.push({unitId:unit.unitId,path:rel,bytes:bytes.length,sha256:sha(bytes),counts:data.counts});}
const manifest={schemaVersion:'math-v2-human-runtime-preview-r1',previewOnly:true,studentRouteChanged:false,productionActivationAllowed:false,oldDatabaseDeletionAllowed:false,contentAuthority:AUTH,contentVersion:sha(Buffer.from(contentHashes.filter(Boolean).sort().join('\n'))),unitCount:unitRows.length,skillCount:seenSkills.size,mcQuestionCount:seenQuestions.size,constructedResponseCount:seenCr.size,figureCount:Object.keys(figureIndex).length,units:unitRows,figureIndex};
fs.writeFileSync(path.join(output,'manifest.json'),JSON.stringify(manifest,null,2)+'\n');console.log(JSON.stringify({status:'BUILT_RUNTIME_PREVIEW',outputRoot:output,unitCount:manifest.unitCount,skillCount:manifest.skillCount,mcQuestionCount:manifest.mcQuestionCount,constructedResponseCount:manifest.constructedResponseCount,figureCount:manifest.figureCount,contentVersion:manifest.contentVersion,productionActivationAllowed:false},null,2));
