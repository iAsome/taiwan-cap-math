import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';

const args = process.argv.slice(2);
const arg = name => { const i=args.indexOf(name); return i>=0 ? args[i+1] : null; };
const repo = path.resolve(arg('--repo') || process.cwd());
const humanRoot = path.join(repo,'數學會考作戰室','tools','v2-human-content');
const batchesRoot = path.join(humanRoot,'batches');
const outputRoot = path.resolve(arg('--output') || path.join(humanRoot,'global-audit','r1'));
const POSIX = p => p.split(path.sep).join('/');
const readJson = p => JSON.parse(fs.readFileSync(p,'utf8'));
const readJsonl = p => fs.readFileSync(p,'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
const sha256 = data => crypto.createHash('sha256').update(data).digest('hex');
const normSpace = s => String(s??'').normalize('NFKC').replace(/\s+/g,'').replace(/[，。！？、；：,.!?;:「」『』（）()\[\]【】]/g,'').toLowerCase();
const normNumbers = s => normSpace(String(s??'')
  .replace(/(?<![A-Za-z])[-+]?\d+(?:\.\d+)?(?:\/\d+(?:\.\d+)?)?%?/g,'<N>')
  .replace(/[零一二三四五六七八九十百千萬億兩]+/g,'<C>'));
const getMcText = d => String(d.text || d.prompt || '').trim();
const getCrText = d => String(d.prompt || d.text || '').trim();
const stable = x => JSON.stringify(x,Object.keys(x||{}).sort());
const ensureDir = p => fs.mkdirSync(p,{recursive:true});
const listDirs = p => fs.existsSync(p) ? fs.readdirSync(p,{withFileTypes:true}).filter(x=>x.isDirectory()).map(x=>path.join(p,x.name)) : [];

if (!fs.existsSync(batchesRoot)) throw new Error(`Missing batches root: ${batchesRoot}`);

function loadExpectedSkills(){
  const lockPath=path.join(humanRoot,'authoring','authoring-syllabus-lock-r2.json');
  if(fs.existsSync(lockPath)){
    const lock=readJson(lockPath); const out=[];
    for(const unit of lock.units||[]){
      for(const topic of unit.topics||[]){
        for(const skill of topic.skills||[]){ out.push({unitId:unit.unitId,topicId:topic.topicId,skillId:skill.skillId}); }
      }
    }
    if(out.length) return {source:POSIX(path.relative(repo,lockPath)),skills:out};
  }
  const invCandidates=[...listDirs(batchesRoot)].flatMap(b=>[
    path.join(b,'inventory','all-skill-id-inventory.json')
  ]).filter(fs.existsSync);
  if(!invCandidates.length) throw new Error('No syllabus lock or all-skill inventory found.');
  const inv=readJson(invCandidates[0]);
  return {source:POSIX(path.relative(repo,invCandidates[0])),skills:inv.skills};
}

const expected=loadExpectedSkills();
const expectedMap=new Map(expected.skills.map(x=>[x.skillId,x]));
const batches=listDirs(batchesRoot).filter(b=>fs.existsSync(path.join(b,'units'))).sort();
const records={lectures:[],mc:[],cr:[],reviews:[],drawings:[]};
const batchInfo=[];
const parseErrors=[];

for(const batch of batches){
  const batchName=path.basename(batch);
  const units=listDirs(path.join(batch,'units'));
  let skillDirs=0;
  for(const unitDir of units){
    const unitId=path.basename(unitDir);
    for(const skillDir of listDirs(unitDir).sort()){
      skillDirs++;
      const slot=path.basename(skillDir);
      const lecturePath=path.join(skillDir,'lecture.json');
      try{const d=readJson(lecturePath); Object.assign(d,{_batch:batchName,_path:POSIX(path.relative(repo,lecturePath)),_slot:slot}); records.lectures.push(d);}catch(e){parseErrors.push({path:POSIX(path.relative(repo,lecturePath)),error:String(e)});}
      for(const [kind,file] of [['mc','mc-questions.jsonl'],['cr','constructed-response.jsonl'],['reviews','semantic-reviews.jsonl'],['drawings','drawing-specs.jsonl']]){
        const p=path.join(skillDir,file);
        try{for(const [idx,d] of readJsonl(p).entries()){Object.assign(d,{_batch:batchName,_path:POSIX(path.relative(repo,p)),_line:idx+1,_slot:slot});records[kind].push(d);}}catch(e){parseErrors.push({path:POSIX(path.relative(repo,p)),error:String(e)});}
      }
    }
  }
  const svgCount=fs.existsSync(path.join(batch,'figures')) ? walk(path.join(batch,'figures')).filter(p=>p.endsWith('.svg')).length : 0;
  const isolation=walk(batch).find(p=>p.endsWith('legacy-content-isolation.json')) || null;
  batchInfo.push({batch:batchName,skillDirs,svgCount,legacyIsolationPath:isolation?POSIX(path.relative(repo,isolation)):null,legacyIsolation:isolation?readJson(isolation):null});
}

function walk(root){
  if(!fs.existsSync(root)) return [];
  const out=[]; const stack=[root];
  while(stack.length){const p=stack.pop();for(const e of fs.readdirSync(p,{withFileTypes:true})){const q=path.join(p,e.name);if(e.isDirectory())stack.push(q);else out.push(q);}}
  return out;
}
function counts(list,key){const m={};for(const x of list){const v=String(x[key]);m[v]=(m[v]||0)+1;}return m;}
function duplicateIds(list,key){const m=new Map();for(const x of list){const id=x[key];if(!m.has(id))m.set(id,[]);m.get(id).push(x);}return [...m].filter(([id,v])=>id!=null&&v.length>1).map(([id,v])=>({id,count:v.length,paths:v.map(x=>x._path)}));}
function groupBySignature(list,textFn,sigFn){const m=new Map();for(const d of list){const text=textFn(d);if(!text)continue;const sig=sigFn(d,text);if(!m.has(sig))m.set(sig,[]);m.get(sig).push(d);}return [...m.values()].filter(g=>g.length>1);}
function itemRef(d){return {id:d.questionId||d.lectureId||d.figureId,unitId:d.unitId||null,skillId:d.skillId||null,batch:d._batch,path:d._path,line:d._line||null,text:getMcText(d)||getCrText(d)||d.title||''};}

const expectedIds=new Set(expected.skills.map(x=>x.skillId));
const actualLectureSkills=records.lectures.map(x=>x.skillId);
const actualIds=new Set(actualLectureSkills);
const missingSkills=[...expectedIds].filter(x=>!actualIds.has(x)).sort();
const unexpectedSkills=[...actualIds].filter(x=>!expectedIds.has(x)).sort();

const mcBySkill=new Map(); const crBySkill=new Map(); const reviewsByQuestion=new Map();
for(const d of records.mc){if(!mcBySkill.has(d.skillId))mcBySkill.set(d.skillId,[]);mcBySkill.get(d.skillId).push(d);}
for(const d of records.cr){if(!crBySkill.has(d.skillId))crBySkill.set(d.skillId,[]);crBySkill.get(d.skillId).push(d);}
for(const d of records.reviews){if(!reviewsByQuestion.has(d.questionId))reviewsByQuestion.set(d.questionId,[]);reviewsByQuestion.get(d.questionId).push(d);}
const perSkillIssues=[];
for(const exp of expected.skills){
  const mc=mcBySkill.get(exp.skillId)||[], cr=crBySkill.get(exp.skillId)||[];
  const diff=counts(mc,'difficulty'), ans=counts(mc,'answerIndex');
  const reviewCount=mc.reduce((n,q)=>n+(reviewsByQuestion.get(q.questionId)||[]).length,0);
  if(mc.length!==12||cr.length<2||reviewCount!==12||diff.basic!==3||diff.standard!==3||diff.advanced!==3||diff.literacy!==3||ans['0']!==3||ans['1']!==3||ans['2']!==3||ans['3']!==3){
    perSkillIssues.push({skillId:exp.skillId,unitId:exp.unitId,mc:mc.length,cr:cr.length,reviews:reviewCount,difficulty:diff,answerIndex:ans});
  }
}

const authorityGaps=[];
for(const kind of Object.keys(records))for(const d of records[kind])if(d.contentAuthority!=='CHATGPT_HUMAN_AUTHORED_R1')authorityGaps.push({kind,...itemRef(d),observed:d.contentAuthority??null});
const isolationIssues=[];
for(const b of batchInfo){
  const x=b.legacyIsolation;
  if(!x){isolationIssues.push({batch:b.batch,issue:'missing legacy-content-isolation.json'});continue;}
  for(const [k,v] of Object.entries({legacyContentImported:false,legacySemanticEvidenceAccepted:false,oldProductionRuntimeModified:false,deleteLegacyNow:false,finalRetirementRequired:true,productionActivationAllowed:false})){
    if(x[k]!==v) isolationIssues.push({batch:b.batch,field:k,expected:v,observed:x[k]??null});
  }
}

const titlePunctuationIssues=records.lectures.filter(d=>String(d.title||'').includes('、')).map(d=>({id:d.lectureId,unitId:d.unitId,skillId:d.skillId,title:d.title,path:d._path}));
const simplifiedMap={'这':'這','为':'為','个':'個','们':'們','学':'學','义':'義','点':'點','线':'線','图':'圖','边':'邊','长':'長','体':'體','积':'積','圆':'圓','径':'徑','轴':'軸','题':'題','应':'應','变':'變','与':'與','从':'從','后':'後','还':'還','进':'進','过':'過','间':'間','时':'時','现':'現','并':'並','关':'關','则':'則','让':'讓','选':'選','称':'稱','质':'質','类':'類','简':'簡','运':'運','优':'優','节':'節','总':'總','证':'證','显':'顯','视':'視','标':'標','写':'寫','读':'讀','认':'認','实':'實','单':'單','无':'無','对':'對','错':'錯','规':'規','层':'層','级':'級','张':'張','页':'頁','组':'組','条':'條','辆':'輛','门':'門','发':'發','国':'國','开':'開','闭':'閉','达':'達','远':'遠','员':'員','师':'師','块':'塊','种':'種','权':'權','据':'據','将':'將','属':'屬','压':'壓','仅':'僅','当':'當','来':'來','处':'處','误':'誤','确':'確','机':'機','关':'關','烟':'煙','囱':'囪','凭':'憑'};
const simplifiedIssues=[];
function scanStrings(obj,cb,prefix=''){
  if(Array.isArray(obj))return obj.forEach((v,i)=>scanStrings(v,cb,`${prefix}[${i}]`));
  if(obj&&typeof obj==='object')return Object.entries(obj).filter(([k])=>!k.startsWith('_')).forEach(([k,v])=>scanStrings(v,cb,prefix?`${prefix}.${k}`:k));
  if(typeof obj==='string')cb(obj,prefix);
}
for(const kind of Object.keys(records))for(const d of records[kind])scanStrings(d,(s,field)=>{for(const ch of new Set([...s]))if(simplifiedMap[ch])simplifiedIssues.push({kind,...itemRef(d),field,char:ch,replacement:simplifiedMap[ch],value:s});});

const exactPromptGroups=groupBySignature(records.mc,getMcText,(d,t)=>normSpace(t)).map(g=>g.map(itemRef));
const numberSwapGroups=groupBySignature(records.mc,getMcText,(d,t)=>normNumbers([t,...(d.choices||[])].join('||'))).map(g=>g.map(itemRef));
const crossUnitPromptSkeletons=groupBySignature(records.mc,getMcText,(d,t)=>normNumbers(t)).filter(g=>new Set(g.map(x=>x.unitId)).size>1).map(g=>g.map(itemRef));
const exactCrGroups=groupBySignature(records.cr,getCrText,(d,t)=>normSpace(t)).map(g=>g.map(itemRef));

const mcStructuralIssues=[];
for(const q of records.mc){
  if(!Array.isArray(q.choices)||q.choices.length!==4) mcStructuralIssues.push({id:q.questionId,issue:'choices must have length 4',path:q._path});
  if(!Number.isInteger(q.answerIndex)||q.answerIndex<0||q.answerIndex>3) mcStructuralIssues.push({id:q.questionId,issue:'answerIndex out of range',path:q._path});
  const rs=reviewsByQuestion.get(q.questionId)||[];
  if(rs.length!==1) mcStructuralIssues.push({id:q.questionId,issue:`semantic review count ${rs.length}`,path:q._path});
  else{
    const r=rs[0];
    const linkedQuestionHash=r.questionContentSha256||r.reviewedContentSha256||r.questionSha256||(!r.reviewId?r.contentSha256:null);
    if(linkedQuestionHash&&q.contentSha256&&linkedQuestionHash!==q.contentSha256) mcStructuralIssues.push({id:q.questionId,issue:'review linked question hash mismatch',path:r._path});
    if(r.answerMatch===false) mcStructuralIssues.push({id:q.questionId,issue:'answerMatch false',path:r._path});
    if(r.uniqueCorrectAnswer===false) mcStructuralIssues.push({id:q.questionId,issue:'uniqueCorrectAnswer false',path:r._path});
    if(Array.isArray(r.optionTruth)&&r.optionTruth.filter(Boolean).length!==1) mcStructuralIssues.push({id:q.questionId,issue:'optionTruth does not contain exactly one true',path:r._path});
  }
}

const idDuplicates={
  lecture:duplicateIds(records.lectures,'lectureId'),
  mc:duplicateIds(records.mc,'questionId'),
  cr:duplicateIds(records.cr,'questionId'),
  review:duplicateIds(records.reviews,'questionId'),
  figure:duplicateIds(records.drawings,'figureId')
};
const contentHashDuplicates={};
for(const kind of ['lectures','mc','cr']){
  const m=new Map();for(const d of records[kind]){if(!d.contentSha256)continue;if(!m.has(d.contentSha256))m.set(d.contentSha256,[]);m.get(d.contentSha256).push(d);}
  contentHashDuplicates[kind]=[...m.entries()].filter(([,v])=>v.length>1).map(([hash,v])=>({hash,items:v.map(itemRef)}));
}

const critical=[];
if(parseErrors.length)critical.push('parse-errors');
if(missingSkills.length||unexpectedSkills.length||records.lectures.length!==339||records.mc.length!==4068||records.cr.length<678||records.reviews.length!==4068)critical.push('global-completeness');
if(perSkillIssues.length)critical.push('per-skill-counts-distribution');
if(Object.values(idDuplicates).some(x=>x.length))critical.push('duplicate-identifiers');
if(mcStructuralIssues.length)critical.push('mc-review-structure');
if(authorityGaps.length)critical.push('content-authority-gaps');
if(isolationIssues.length)critical.push('legacy-isolation-gaps');
if(simplifiedIssues.length)critical.push('simplified-chinese');
if(titlePunctuationIssues.length)critical.push('title-punctuation');
if(contentHashDuplicates.mc.length||contentHashDuplicates.cr.length)critical.push('duplicate-content-hashes');
const status=critical.length?'BLOCKED_BEFORE_PRODUCTION':'PASS_GLOBAL_STRUCTURE';

const report={
  schemaVersion:'math-v2-global-human-content-audit-r1',
  status,
  generatedAt:new Date().toISOString(),
  repository:POSIX(repo),
  expectedSkillSource:expected.source,
  batchCount:batches.length,
  counts:{skillDirectories:records.lectures.length,lectures:records.lectures.length,mcQuestions:records.mc.length,constructedResponses:records.cr.length,semanticReviews:records.reviews.length,drawingSpecs:records.drawings.length,svgFigures:batchInfo.reduce((n,b)=>n+b.svgCount,0)},
  expected:{units:23,skills:339,lectures:339,mcQuestions:4068,constructedResponsesMinimum:678,semanticReviews:4068},
  completeness:{missingSkills,unexpectedSkills,perSkillIssues},
  idDuplicates,
  contentHashDuplicates,
  mcStructuralIssues,
  contentAuthority:{required:'CHATGPT_HUMAN_AUTHORED_R1',gapCount:authorityGaps.length,gaps:authorityGaps},
  legacyIsolation:{issueCount:isolationIssues.length,issues:isolationIssues},
  language:{simplifiedIssueCount:simplifiedIssues.length,simplifiedIssues,titlePunctuationIssueCount:titlePunctuationIssues.length,titlePunctuationIssues},
  duplicates:{exactMcPromptGroups:exactPromptGroups,numberSwapCandidateGroups:numberSwapGroups,crossUnitPromptSkeletonGroups:crossUnitPromptSkeletons,exactConstructedResponseGroups:exactCrGroups},
  batchInfo,
  parseErrors,
  criticalBlockers:critical,
  productionActivationAllowed:false,
  oldDatabaseDeletionAllowed:false,
  notes:[
    'Number-swap groups are review candidates, not automatic mathematical-error findings.',
    'Exact generic stems may be acceptable when choices and capabilities differ; central human review is required.',
    'Passing this audit does not replace manual mathematical review or the final runtime release gate.'
  ]
};

ensureDir(outputRoot);
fs.writeFileSync(path.join(outputRoot,'global-audit-report.json'),JSON.stringify(report,null,2)+'\n','utf8');
fs.writeFileSync(path.join(outputRoot,'global-duplicate-candidates.json'),JSON.stringify(report.duplicates,null,2)+'\n','utf8');
fs.writeFileSync(path.join(outputRoot,'global-repair-backlog.json'),JSON.stringify({status,criticalBlockers:critical,contentAuthorityGaps:authorityGaps,legacyIsolationIssues:isolationIssues,simplifiedIssues,titlePunctuationIssues,crossUnitPromptSkeletonGroups:crossUnitPromptSkeletons},null,2)+'\n','utf8');
const md=`# Math V2 Global Human Content Audit R1\n\n- Status: **${status}**\n- Batches: ${batches.length}\n- Skills / lectures: ${records.lectures.length} / 339\n- MC: ${records.mc.length} / 4068\n- Constructed response: ${records.cr.length} / >=678\n- Semantic reviews: ${records.reviews.length} / 4068\n- SVG figures: ${report.counts.svgFigures}\n\n## Blocking categories\n\n${critical.length?critical.map(x=>`- ${x}`).join('\n'):'- None'}\n\n## Key issue counts\n\n- Content-authority gaps: ${authorityGaps.length}\n- Legacy-isolation issues: ${isolationIssues.length}\n- Simplified-character occurrences: ${simplifiedIssues.length}\n- Title punctuation issues: ${titlePunctuationIssues.length}\n- Cross-unit prompt-skeleton candidate groups: ${crossUnitPromptSkeletons.length}\n- Number-swap candidate groups: ${numberSwapGroups.length}\n\nProduction activation remains prohibited. Old database deletion remains prohibited.\n`;
fs.writeFileSync(path.join(outputRoot,'global-audit-summary.md'),md,'utf8');
const files=walk(outputRoot).filter(p=>path.basename(p)!=='audit-file-sha256.json').sort();
fs.writeFileSync(path.join(outputRoot,'audit-file-sha256.json'),JSON.stringify(files.map(p=>({path:POSIX(path.relative(outputRoot,p)),bytes:fs.statSync(p).size,sha256:sha256(fs.readFileSync(p))})),null,2)+'\n','utf8');
console.log(JSON.stringify({status,outputRoot:POSIX(outputRoot),counts:report.counts,criticalBlockers:critical,contentAuthorityGapCount:authorityGaps.length,legacyIsolationIssueCount:isolationIssues.length,simplifiedIssueCount:simplifiedIssues.length,titlePunctuationIssueCount:titlePunctuationIssues.length,crossUnitPromptSkeletonGroupCount:crossUnitPromptSkeletons.length,numberSwapCandidateGroupCount:numberSwapGroups.length,productionActivationAllowed:false},null,2));
