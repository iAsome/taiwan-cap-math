import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url)); const root=path.resolve(here,'..');
const slots=Array.from({length:12},(_,i)=>`s${String(i+1).padStart(3,'0')}`);
const locked=[
['s001','u21-basics','quadratic-function-graph',[]],['s002','u21-graphs','quadratic-vertex',['quadratic-function-graph']],
['s003','u21-graphs','quadratic-standard-to-graph',['quadratic-vertex']],['s004','u21-graphs','quadratic-graph-forms',['quadratic-standard-to-graph']],
['s005','u21-graphs','quadratic-opening',['quadratic-graph-forms']],['s006','u21-graphs','quadratic-axis-symmetry',['quadratic-opening']],
['s007','u21-graphs','quadratic-vertex-form-basic',['quadratic-axis-symmetry']],['s008','u21-graphs','quadratic-table-graph',['quadratic-vertex-form-basic']],
['s009','u21-applications','quadratic-max-min',['quadratic-table-graph']],['s010','u21-applications','quadratic-application-area',['quadratic-max-min']],
['s011','u21-literacy','quadratic-function-literacy',['quadratic-application-area']],['s012','u21-transformations','quadratic-shift',['quadratic-function-literacy']]];
const AUTH='CHATGPT_HUMAN_AUTHORED_R1'; const fail=m=>{throw new Error(m)};
const rj=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const rjl=p=>fs.readFileSync(path.join(root,p),'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
const norm=v=>Array.isArray(v)?v.map(norm):(v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,norm(v[k])])):v);
const hashRec=r=>{const c=structuredClone(r); delete c.contentSha256; return crypto.createHash('sha256').update(JSON.stringify(norm(c))).digest('hex')};
const normPrompt=t=>t.toLowerCase().replace(/[-+]?\d+(?:\.\d+)?/g,'<n>').replace(/\s+/g,'').replace(/[，。；：、！？（）()\[\]{}]/g,'');
const simp=/[这为与于个们来时会说对开关问学数图点顶义体实从无两长宽边围栏过还进应经将写读间后发见线条样选项题证据错误较区围变记录资测预设总当]/u;
const allQ=[],allCR=[],allR=[],allL=[],allF=[]; const ids=new Set(),figRefs=new Set(); const dGlobal={basic:0,standard:0,advanced:0,literacy:0},aGlobal=[0,0,0,0];
for(let i=0;i<slots.length;i++){
 const slot=slots[i], [ls,topic,skill,prereqs]=locked[i]; if(slot!==ls) fail('slot lock'); const base=`units/u21/${slot}`;
 const l=rj(`${base}/lecture.json`), q=rjl(`${base}/mc-questions.jsonl`), cr=rjl(`${base}/constructed-response.jsonl`), rev=rjl(`${base}/semantic-reviews.jsonl`), draw=rjl(`${base}/drawing-specs.jsonl`);
 if(l.unitId!=='u21'||l.topicId!==topic||l.skillId!==skill) fail(`${slot}: lecture lock mismatch`);
 if(JSON.stringify(l.prerequisites.map(x=>x.skillId))!==JSON.stringify(prereqs)) fail(`${slot}: prerequisite mismatch`);
 if(q.length!==12||cr.length<2||rev.length!==12||draw.length<1) fail(`${slot}: count mismatch`);
 if(l.contentAuthority!==AUTH||l.replacementMarker?.legacyContentImported!==false) fail(`${slot}: authority/isolation`);
 if(l.title.includes('、')||l.lockedTitle?.includes('、')) fail(`${slot}: title punctuation`);
 if(!Array.isArray(l.workedExamples)||l.workedExamples.length<4||!Array.isArray(l.commonMistakes)||l.commonMistakes.length<5) fail(`${slot}: lecture depth`);
 if(!l.lectureReview?.reviewNote||l.lectureReview.reviewNote.length<45||l.lectureReview.mathematicalCorrectness!=='pass') fail(`${slot}: lecture review`);
 if(hashRec(l)!==l.contentSha256) fail(`${slot}: lecture hash`); if(simp.test(JSON.stringify(l))||JSON.stringify(l).includes('隻')) fail(`${slot}: simplified Chinese or wrong Taiwan classifier in lecture`);
 const localD={basic:0,standard:0,advanced:0,literacy:0},localA=[0,0,0,0]; const revMap=new Map(rev.map(x=>[x.questionId,x]));
 for(const item of q){
  if(ids.has(item.questionId)) fail(`${item.questionId}: duplicate id`); ids.add(item.questionId); allQ.push(item);
  if(item.unitId!=='u21'||item.topicId!==topic||item.skillId!==skill||item.type!=='mc'||item.contentAuthority!==AUTH) fail(`${item.questionId}: identity/authority`);
  if(item.choices.length!==4||new Set(item.choices).size!==4||item.optionAnalysis.length!==4) fail(`${item.questionId}: choices`);
  if(item.answerIndex<0||item.answerIndex>3||item.optionAnalysis.filter(x=>x.truth).length!==1||!item.optionAnalysis[item.answerIndex].truth) fail(`${item.questionId}: correct choice`);
  if(item.optionAnalysis.some((o,j)=>o.choice!==item.choices[j]||!o.reason||o.reason.length<5)) fail(`${item.questionId}: option analysis`);
  if(!item.independentSolution||item.independentSolution===item.explanation||!item.steps?.length||!item.ambiguityAndBoundaryAudit?.domainBoundary) fail(`${item.questionId}: independent/audit`);
  if(!item.unitCheck||!item.roundingCheck||!item.difficultyReason||!item.prerequisiteCheck) fail(`${item.questionId}: review fields`);
  if(item.difficulty==='literacy'&&(!item.literacyContextNecessity||item.literacyContextNecessity.length<25)) fail(`${item.questionId}: literacy necessity`);
  if(hashRec(item)!==item.contentSha256) fail(`${item.questionId}: content hash`); if(simp.test(JSON.stringify(item))||JSON.stringify(item).includes('隻')) fail(`${item.questionId}: simplified Chinese or wrong Taiwan classifier`);
  const r=revMap.get(item.questionId); if(!r||r.contentSha256!==item.contentSha256||!r.answerMatch||!r.uniqueCorrectAnswer||r.reviewerDecision!=='pass') fail(`${item.questionId}: semantic review`);
  if(r.derivedAnswer!==item.choices[item.answerIndex]||r.storedAnswer!==item.choices[item.answerIndex]) fail(`${item.questionId}: answer mismatch`);
  if(JSON.stringify(r.optionTruth)!==JSON.stringify(item.optionAnalysis.map(o=>o.truth))) fail(`${item.questionId}: option truth mismatch`);
  if(!r.reviewerNote.includes(r.independentSolution)||r.reviewerNote.length<150||Object.values(r.ambiguityChecks||{}).some(x=>typeof x!=='string'||x.length<35)) fail(`${item.questionId}: review specificity`);
  if(simp.test(JSON.stringify(r))||JSON.stringify(r).includes('隻')) fail(`${item.questionId}: simplified Chinese review`);
  if(item.figureId) figRefs.add(item.figureId); localD[item.difficulty]++; dGlobal[item.difficulty]++; localA[item.answerIndex]++; aGlobal[item.answerIndex]++;
 }
 if(Object.values(localD).some(x=>x!==3)||localA.some(x=>x!==3)) fail(`${slot}: local 3/3/3/3 distribution ${JSON.stringify(localD)} ${localA}`);
 for(const item of cr){
  if(ids.has(item.questionId)) fail(`${item.questionId}: duplicate id`); ids.add(item.questionId); allCR.push(item);
  if(item.unitId!=='u21'||item.skillId!==skill||item.type!=='constructed-response'||item.contentAuthority!==AUTH) fail(`${item.questionId}: CR identity`);
  if(hashRec(item)!==item.contentSha256) fail(`${item.questionId}: CR hash`);
  if(item.rubric.length!==4||item.rubric.map(x=>x.score).sort().join(',')!=='0,1,2,3') fail(`${item.questionId}: rubric`);
  if(item.requiredWork.length<3||item.fullCreditSolution.length<2||!item.followThroughPolicy||!item.answerOnlyPolicy||!item.unitAndNotationRules?.length) fail(`${item.questionId}: CR depth`);
  if(item.independentReview?.decision!=='pass'||!item.independentReview.derivedResult) fail(`${item.questionId}: CR review`); if(simp.test(JSON.stringify(item))||JSON.stringify(item).includes('隻')) fail(`${item.questionId}: simplified Chinese CR`);
  if(item.figureId) figRefs.add(item.figureId);
 }
 for(const f of draw){
  allF.push(f); if(ids.has(f.figureId)) fail(`${f.figureId}: duplicate figure id`); ids.add(f.figureId);
  if(f.unitId!=='u21'||f.skillId!==skill||f.contentAuthority!==AUTH||hashRec(f)!==f.contentSha256) fail(`${f.figureId}: drawing identity/hash`);
  if(!f.altText||f.altText.length<30||Object.keys(f.drawingSpec||{}).length<10||f.figureReview?.decision!=='pass'||f.figureReview.reviewNote.length<50) fail(`${f.figureId}: drawing depth/review`);
  const sp=path.join(root,f.svgPath); if(!fs.existsSync(sp)) fail(`${f.figureId}: missing SVG`); const svg=fs.readFileSync(sp,'utf8');
  for(const token of f.svgAssertions) if(!svg.includes(token)) fail(`${f.figureId}: SVG token ${token}`); if(simp.test(svg)||svg.includes('隻')) fail(`${f.figureId}: simplified Chinese SVG`);
 }
 for(const f of l.figureReferences||[]) figRefs.add(f); allL.push(l); allR.push(...rev);
}
if(allL.length!==12||allQ.length!==144||allCR.length!==24||allR.length!==144||allF.length!==12) fail('global counts');
if(Object.values(dGlobal).some(x=>x!==36)||aGlobal.some(x=>x!==36)) fail(`global distribution ${JSON.stringify(dGlobal)} ${aGlobal}`);
if(new Set(allQ.map(x=>x.prompt)).size!==144||new Set(allCR.map(x=>x.prompt)).size!==24) fail('exact duplicate prompts');
const np=allQ.map(x=>normPrompt(x.prompt)); if(new Set(np).size!==np.length) fail('near-identical normalized MC prompts');
const ncr=allCR.map(x=>normPrompt(x.prompt)); if(new Set(ncr).size!==ncr.length) fail('near-identical normalized CR prompts');
if(new Set(allR.map(x=>x.independentSolution)).size!==144||new Set(allR.map(x=>x.reviewerNote)).size!==144||new Set(allL.map(x=>x.lectureReview.reviewNote)).size!==12) fail('repeated review evidence');
const figIds=new Set(allF.map(x=>x.figureId)); for(const f of figRefs) if(!figIds.has(f)) fail(`unresolved figure ${f}`);
const iso=rj('manifest/legacy-content-isolation.json'); if(iso.legacyContentImported!==false||iso.legacySemanticEvidenceAccepted!==false||iso.oldProductionRuntimeModified!==false||iso.deleteLegacyNow!==false||iso.finalRetirementRequired!==true||iso.productionActivationAllowed!==false) fail('legacy isolation contract');
const pm=rj('manifest/project-manifest.json'); if(pm.syllabusLockSha256!=='930dbdbbb70818b461ba6ad28620dfed69442716b653be91a9025ebe92d353fc'||pm.counts.skillCount!==12||pm.productionActivationAllowed!==false) fail('project manifest');
const cm=rj('manifest/content-sha256.json'); if(cm.recordCount!==336) fail(`content manifest count ${cm.recordCount}`);
const fm=rj('manifest/file-sha256.json'); const listed=new Map(fm.files.map(x=>[x.path,x.sha256]));
const walk=d=>fs.readdirSync(d,{withFileTypes:true}).flatMap(e=>{const p=path.join(d,e.name); return e.isDirectory()?walk(p):[p]});
const actual=walk(root).map(p=>path.relative(root,p).replaceAll('\\','/')).filter(p=>p!=='manifest/file-sha256.json'&&!p.startsWith('staging/')).sort();
if(actual.length!==listed.size||actual.some(p=>!listed.has(p))) fail('file manifest path set');
for(const p of actual){const h=crypto.createHash('sha256').update(fs.readFileSync(path.join(root,p))).digest('hex'); if(h!==listed.get(p)) fail(`file hash ${p}`);}
const staging=path.join(root,'staging'); let emitted=0; if(fs.existsSync(staging)) emitted=fs.readdirSync(staging).filter(x=>/^u21-s\d{3}-human-content\.mjs$/.test(x)).length;
if(fs.existsSync(staging)&&emitted!==12) fail(`staging module count ${emitted}`);
console.log(JSON.stringify({status:'PASS',unitId:'u21',lockedSkillCount:12,lectureCount:12,mcQuestionCount:144,constructedResponseCount:24,semanticReviewCount:144,figureCount:12,difficultyCounts:dGlobal,answerIndexCounts:aGlobal,contentHashesVerified:true,fileManifestVerified:true,figureReferencesVerified:true,svgGeometryAssertionsVerified:true,traditionalChineseVerified:true,unitDuplicateScanVerified:true,questionSpecificReviewEvidenceVerified:true,skillSpecificLectureReviewVerified:true,legacyContentImported:false,productionActivationAllowed:false,stagingPresent:fs.existsSync(staging),emittedModuleCount:emitted},null,2));
