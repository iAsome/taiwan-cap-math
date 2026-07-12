#!/usr/bin/env node
import fs from 'node:fs'; import path from 'node:path'; import crypto from 'node:crypto';
const root=path.resolve(process.argv[2]||'.'); const errors=[]; const warnings=[];
const expectedSkills=[{"slot":"s001","topicId":"u22-quartiles","skillId":"quartile-calculation","order":1},{"slot":"s002","topicId":"u22-quartiles","skillId":"box-plot","order":2},{"slot":"s003","topicId":"u22-quartiles","skillId":"box-plot-interpret","order":3},{"slot":"s004","topicId":"u22-quartiles","skillId":"quartile-position","order":4},{"slot":"s005","topicId":"u22-quartiles","skillId":"box-plot-components","order":5},{"slot":"s006","topicId":"u22-quartiles","skillId":"iqr-outlier-basic","order":6},{"slot":"s007","topicId":"u22-quartiles","skillId":"ogive-read","order":7},{"slot":"s008","topicId":"u22-quartiles","skillId":"range-iqr-compare","order":8},{"slot":"s009","topicId":"u22-quartiles","skillId":"box-plot-compare","order":9},{"slot":"s010","topicId":"u22-probability","skillId":"probability-basic","order":10},{"slot":"s011","topicId":"u22-probability","skillId":"probability-complement","order":11},{"slot":"s012","topicId":"u22-probability","skillId":"probability-tree-basic","order":12},{"slot":"s013","topicId":"u22-probability","skillId":"probability-sample-space","order":13},{"slot":"s014","topicId":"u22-probability","skillId":"probability-equally-likely","order":14},{"slot":"s015","topicId":"u22-probability","skillId":"probability-two-stage","order":15},{"slot":"s016","topicId":"u22-probability","skillId":"probability-word","order":16},{"slot":"s017","topicId":"u22-literacy","skillId":"probability-literacy","order":17},{"slot":"s018","topicId":"u22-literacy","skillId":"statistics-probability-literacy","order":18}]; const AUTH='CHATGPT_HUMAN_AUTHORED_R1';
const readJson=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const readJsonl=p=>fs.readFileSync(path.join(root,p),'utf8').trim().split(/\n/).filter(Boolean).map((x,i)=>{try{return JSON.parse(x)}catch(e){errors.push(`${p}:${i+1} invalid JSON`);return null}}).filter(Boolean);
const stable=x=>Array.isArray(x)?x.map(stable):(x&&typeof x==='object'?Object.fromEntries(Object.keys(x).sort().map(k=>[k,stable(x[k])])):x);
const canonical=o=>JSON.stringify(stable(Object.fromEntries(Object.entries(o).filter(([k])=>k!=='contentSha256'))));
const sha=s=>crypto.createHash('sha256').update(s).digest('hex'); const fileSha=p=>sha(fs.readFileSync(p));
const norm=s=>String(s).toLowerCase().replace(/[\s，。！？；：、,.!?;:（）()「」『』【】\[\]“”"'`]/g,'');
const structural=s=>norm(s).replace(/\d+(?:\.\d+)?/g,'<n>');
const manifest=readJson('manifest/project-manifest.json'); const isolation=readJson('manifest/legacy-content-isolation.json');
if(manifest.productionActivationAllowed!==false) errors.push('production activation must be false');
for(const [k,v] of Object.entries({legacyContentImported:false,legacySemanticEvidenceAccepted:false,oldProductionRuntimeModified:false,deleteLegacyNow:false,finalRetirementRequired:true,productionActivationAllowed:false})) if(isolation[k]!==v) errors.push(`legacy isolation ${k} mismatch`);
if(JSON.stringify(manifest.lockedSkillIds)!==JSON.stringify(expectedSkills.map(x=>x.skillId))) errors.push('locked skill IDs/order mismatch');
let lectures=[],mc=[],cr=[],reviews=[],drawing=[]; const ids=new Set(); const prompts=new Map(); const structuralMap=new Map();
for(const s of expectedSkills){
 const base=`units/u22/${s.slot}`; const L=readJson(`${base}/lecture.json`), M=readJsonl(`${base}/mc-questions.jsonl`), C=readJsonl(`${base}/constructed-response.jsonl`), R=readJsonl(`${base}/semantic-reviews.jsonl`), D=readJsonl(`${base}/drawing-specs.jsonl`);
 lectures.push(L); mc.push(...M); cr.push(...C); reviews.push(...R); drawing.push(...D);
 if(L.skillId!==s.skillId||L.topicId!==s.topicId||L.lockedSkillOrder!==s.order) errors.push(`${s.slot} lecture identity mismatch`);
 if(L.contentAuthority!==AUTH) errors.push(`${L.lectureId} authority`); if(L.title.includes('、')) errors.push(`${L.lectureId} title contains 頓號`);
 if(!L.lectureReview?.skillSpecificReviewEvidence||L.lectureReview.skillSpecificReviewEvidence.length<25) errors.push(`${L.lectureId} nonspecific review`);
 if(L.contentSha256!==sha(canonical(L))) errors.push(`${L.lectureId} content hash`);
 if(M.length!==12) errors.push(`${s.slot} MC count ${M.length}`); if(C.length<2) errors.push(`${s.slot} CR count ${C.length}`); if(R.length!==M.length) errors.push(`${s.slot} semantic count`);
 const dc={basic:0,standard:0,advanced:0,literacy:0}, ac=[0,0,0,0];
 for(const q of M){
  dc[q.difficulty]=(dc[q.difficulty]||0)+1; ac[q.answerIndex]=(ac[q.answerIndex]||0)+1;
  if(q.skillId!==s.skillId||q.topicId!==s.topicId) errors.push(`${q.questionId} identity`); if(q.contentAuthority!==AUTH) errors.push(`${q.questionId} authority`);
  if(!Array.isArray(q.choices)||q.choices.length!==4||new Set(q.choices).size!==4) errors.push(`${q.questionId} choices`);
  if(!Number.isInteger(q.answerIndex)||q.answerIndex<0||q.answerIndex>3) errors.push(`${q.questionId} answerIndex`);
  if(!Array.isArray(q.optionAnalysis)||q.optionAnalysis.length!==4||q.optionAnalysis.filter(x=>x.truth).length!==1||!q.optionAnalysis[q.answerIndex]?.truth) errors.push(`${q.questionId} option truth`);
  if(!q.independentSolution||q.independentSolution.length<12) errors.push(`${q.questionId} independent solution`);
  if(!q.ambiguityBoundaryAudit||!q.difficultyReason||q.unitCheck==null||q.roundingCheck==null) errors.push(`${q.questionId} audit fields`);
  if(q.difficulty==='literacy'&&!q.literacyContextNecessity) errors.push(`${q.questionId} literacy necessity`);
  if(q.contentSha256!==sha(canonical(q))) errors.push(`${q.questionId} content hash`);
  const n=norm(q.prompt); if(prompts.has(n)) errors.push(`duplicate normalized MC prompt ${q.questionId}/${prompts.get(n)}`); prompts.set(n,q.questionId);
  const st=structural(q.prompt); if(structuralMap.has(st)) errors.push(`number/name/unit swapped near duplicate ${q.questionId}/${structuralMap.get(st)}`); structuralMap.set(st,q.questionId);
  if(ids.has(q.questionId)) errors.push(`duplicate id ${q.questionId}`); ids.add(q.questionId);
 }
 if(Object.values(dc).some(x=>x!==3)) errors.push(`${s.slot} difficulty distribution ${JSON.stringify(dc)}`); if(ac.some(x=>x!==3)) errors.push(`${s.slot} answer distribution ${ac}`);
 for(const q of C){
  if(q.contentAuthority!==AUTH||q.skillId!==s.skillId) errors.push(`${q.questionId} identity/authority`);
  if(q.contentSha256!==sha(canonical(q))) errors.push(`${q.questionId} content hash`);
  const scores=(q.rubric||[]).map(x=>x.score).sort().join(','); if(scores!=='0,1,2,3') errors.push(`${q.questionId} rubric`);
  if(!q.followThroughPolicy||!q.unitNotationRules||!q.answerOnlyResponseHandling||!q.independentReview) errors.push(`${q.questionId} CR policy`);
  const n=norm(q.prompt); if(prompts.has(n)) errors.push(`duplicate normalized CR prompt ${q.questionId}/${prompts.get(n)}`); prompts.set(n,q.questionId);
  if(ids.has(q.questionId)) errors.push(`duplicate id ${q.questionId}`); ids.add(q.questionId);
 }
 const rmap=new Map(R.map(x=>[x.questionId,x])); for(const q of M){const r=rmap.get(q.questionId); if(!r)continue; if(r.contentSha256!==q.contentSha256||r.derivedAnswer!==q.choices[q.answerIndex]||!r.answerMatch||!r.uniqueCorrectAnswer||r.reviewerDecision!=='pass') errors.push(`${q.questionId} semantic mismatch`); if(!r.reviewerNote.includes(q.prompt.slice(0,Math.min(12,q.prompt.length)))) errors.push(`${q.questionId} generic semantic evidence`);}
}
if(lectures.length!==18||mc.length!==216||cr.length!==36||reviews.length!==216) errors.push(`global counts L${lectures.length} M${mc.length} C${cr.length} R${reviews.length}`);
const diff={basic:0,standard:0,advanced:0,literacy:0}, ans=[0,0,0,0]; for(const q of mc){diff[q.difficulty]++;ans[q.answerIndex]++;}
if(Object.values(diff).some(x=>x!==54)) errors.push(`global difficulty ${JSON.stringify(diff)}`); if(ans.some(x=>x!==54)) errors.push(`global answer ${ans}`);
const figDir=path.join(root,'figures/u22'); const figFiles=fs.readdirSync(figDir).filter(x=>x.endsWith('.svg')); const figIds=new Set(figFiles.map(x=>x.slice(0,-4))); const drawIds=new Set();
for(const d of drawing){if(drawIds.has(d.figureId))errors.push(`duplicate figure spec ${d.figureId}`);drawIds.add(d.figureId);if(d.manualVisualInspection?.toString().startsWith('pass')!==true)errors.push(`${d.figureId} no visual inspection`);}
for(const f of figFiles){const t=fs.readFileSync(path.join(figDir,f),'utf8');if(!/<title[ >]/.test(t)||!/<desc[ >]/.test(t)||!/<svg[^>]+viewBox=/.test(t))errors.push(`${f} SVG tokens`);}
for(const q of [...mc,...cr,...lectures]) for(const f of ([q.figureId,...(q.figureReferences||[])].filter(Boolean))){if(!figIds.has(f))errors.push(`${q.questionId||q.lectureId} missing figure ${f}`);if(!drawIds.has(f))errors.push(`${q.questionId||q.lectureId} missing drawing spec ${f}`);}
if(figIds.size!==drawIds.size) errors.push(`figure/spec count mismatch ${figIds.size}/${drawIds.size}`);
const forbidden=['仅','为什麽','数据','概率','样本','问题','学习','数线','转换','这','个别','万','与其馀'];
for(const p of fs.readdirSync(path.join(root,'units/u22')).flatMap(slot=>['lecture.json','mc-questions.jsonl','constructed-response.jsonl','semantic-reviews.jsonl'].map(f=>path.join(root,'units/u22',slot,f)))){const t=fs.readFileSync(p,'utf8');for(const bad of forbidden)if(t.includes(bad))errors.push(`${path.relative(root,p)} contains non-Taiwan form ${bad}`);if(/[\u0590-\u05ff]/.test(t))errors.push(`${path.relative(root,p)} contains Hebrew token`);}
const fh=readJson('manifest/file-sha256.json'); const listed=new Set(Object.keys(fh.files));
function walk(dir){let out=[];for(const e of fs.readdirSync(dir,{withFileTypes:true})){if(e.name==='staging')continue;const p=path.join(dir,e.name);if(e.isDirectory())out.push(...walk(p));else out.push(p);}return out;}
for(const p of walk(root)){const rel=path.relative(root,p).split(path.sep).join('/');if(rel==='manifest/file-sha256.json')continue;if(!listed.has(rel))errors.push(`file missing from manifest ${rel}`);else if(fileSha(p)!==fh.files[rel])errors.push(`file hash ${rel}`);}
for(const rel of listed)if(!fs.existsSync(path.join(root,rel)))errors.push(`manifest lists missing file ${rel}`);
const staging=path.join(root,'staging'); let emitted=0;if(fs.existsSync(staging))emitted=walk(staging).filter(x=>x.endsWith('.mjs')).length;
const result={ok:errors.length===0,packageId:manifest.packageId,unitId:'u22',skillCount:lectures.length,lectureCount:lectures.length,mcQuestionCount:mc.length,constructedResponseCount:cr.length,semanticReviewCount:reviews.length,figureCount:figIds.size,difficultyCounts:diff,answerIndexCounts:ans,stagingPresent:fs.existsSync(staging),emittedModuleCount:emitted,errors,warnings};
console.log(JSON.stringify(result,null,2));if(errors.length)process.exit(1);
