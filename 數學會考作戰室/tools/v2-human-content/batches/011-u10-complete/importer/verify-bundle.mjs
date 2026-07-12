#!/usr/bin/env node
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';

const root=path.resolve(process.argv[2]||'.');
const errors=[]; const warnings=[];
const expectedSlots=Array.from({length:13},(_,i)=>`s${String(i+1).padStart(3,'0')}`);
const difficulties=['basic','standard','advanced','literacy'];
const AUTH='CHATGPT_HUMAN_AUTHORED_R1';
function err(code,message){errors.push({code,message});}
function readJson(rel){return JSON.parse(fs.readFileSync(path.join(root,rel),'utf8'));}
function readJsonl(rel){const p=path.join(root,rel); const t=fs.readFileSync(p,'utf8').trim(); return t? t.split(/\r?\n/).map((x,i)=>{try{return JSON.parse(x)}catch(e){err('JSONL_PARSE',`${rel}:${i+1} ${e.message}`);return null}}).filter(Boolean):[];}
function stable(v){if(v===null||typeof v!=='object')return JSON.stringify(v);if(Array.isArray(v))return '['+v.map(stable).join(',')+']';return '{'+Object.keys(v).sort().map(k=>JSON.stringify(k)+':'+stable(v[k])).join(',')+'}';}
function contentHash(obj){const c={...obj};delete c.contentSha256;return crypto.createHash('sha256').update(stable(c)).digest('hex');}
function fileHash(p){return crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');}
function norm(s){return String(s).normalize('NFKC').toLowerCase().replace(/\s+/g,'').replace(/[，。！？；：、,.!?;:]/g,'');}
function masked(s){return norm(s).replace(/[0-9０-９]+(?:\.[0-9]+)?/g,'#').replace(/(公尺|公分|平方公尺|平方公分|元|件|枝|公里|小時|天|人)/g,'[UNIT]');}
function walk(dir){let out=[];for(const ent of fs.readdirSync(dir,{withFileTypes:true})){const p=path.join(dir,ent.name);if(ent.isDirectory())out=out.concat(walk(p));else out.push(p)}return out;}
function mustFields(obj,fields,where){for(const f of fields)if(obj[f]===undefined||obj[f]===null||obj[f]==='')err('MISSING_FIELD',`${where} missing ${f}`)}

let manifest,lock,isolation,fileManifest;
try{manifest=readJson('manifest/project-manifest.json');lock=readJson('manifest/locked-u10.json');isolation=readJson('manifest/legacy-content-isolation.json');fileManifest=readJson('manifest/file-sha256.json');}catch(e){err('CORE_MANIFEST',e.message)}
if(manifest){
 if(manifest.unitId!=='u10'||manifest.numericUnitId!==10)err('UNIT_ID','manifest unit mismatch');
 if(manifest.productionActivationAllowed!==false)err('ACTIVATION','production activation must be false');
 if(manifest.expectedBaseHead!=='__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__')err('HEAD_PLACEHOLDER','expected HEAD placeholder changed');
 if(manifest.centralCoordinatorApprovalRequired!==true)err('APPROVAL','central approval flag missing');
}
if(lock){
 const skills=lock.topics.flatMap(t=>t.skills);if(skills.length!==13)err('LOCK_COUNT',`locked skills ${skills.length}`);
 if(skills.map(s=>s.slot).join(',')!==expectedSlots.join(','))err('LOCK_ORDER','skill slot order mismatch');
 if(lock.syllabusLockSha256!=='930dbdbbb70818b461ba6ad28620dfed69442716b653be91a9025ebe92d353fc')err('LOCK_SHA','syllabus lock SHA mismatch');
}
if(isolation){for(const [k,v] of Object.entries({legacyContentImported:false,legacySemanticEvidenceAccepted:false,oldProductionRuntimeModified:false,deleteLegacyNow:false,finalRetirementRequired:true,productionActivationAllowed:false,legacySourceUsedAsInspiration:false}))if(isolation[k]!==v)err('LEGACY_ISOLATION',`${k} expected ${v}`)}

const rootUnit=path.join(root,'units','u10');
if(!fs.existsSync(rootUnit))err('UNIT_DIR','units/u10 missing');
const actualSlots=fs.existsSync(rootUnit)?fs.readdirSync(rootUnit,{withFileTypes:true}).filter(x=>x.isDirectory()).map(x=>x.name).sort():[];
if(actualSlots.join(',')!==expectedSlots.join(','))err('SLOT_DIRS',`slots ${actualSlots.join(',')}`);
let lectureCount=0,mcCount=0,crCount=0,reviewCount=0,figureSpecCount=0;
const globalDiff=Object.fromEntries(difficulties.map(d=>[d,0])); const globalAns=[0,0,0,0];
const ids=new Set(),promptNorm=new Map(),maskedMap=new Map(),reviewNotes=new Set(),lectureBodies=new Set(),figureRefs=new Set();
const simplified=/[项系数为后这与从个还发长门体应总边号图]/;
for(const slot of expectedSlots){
 const base=`units/u10/${slot}`;
 let lecture,qs,crs,revs,specs;
 try{lecture=readJson(`${base}/lecture.json`);qs=readJsonl(`${base}/mc-questions.jsonl`);crs=readJsonl(`${base}/constructed-response.jsonl`);revs=readJsonl(`${base}/semantic-reviews.jsonl`);specs=readJsonl(`${base}/drawing-specs.jsonl`)}catch(e){err('SKILL_READ',`${slot}: ${e.message}`);continue}
 lectureCount++;
 mustFields(lecture,['lectureId','skillId','title','learningOutcomes','glossary','notation','conceptNarrative','formalDefinitions','formulas','nonApplicableCases','method','workedExamples','commonMistakes','selfCheck','summary','connections','lectureReview','contentAuthority','contentSha256'],`${slot} lecture`);
 if(lecture.contentAuthority!==AUTH)err('AUTH',`${slot} lecture authority`);
 if(lecture.title.includes('、')||lecture.lockedTitle?.includes('、'))err('TITLE_PUNCT',`${slot} title contains 、`);
 if(lecture.contentSha256!==contentHash(lecture))err('CONTENT_HASH',`${slot} lecture hash`);
 if(!lecture.lectureReview?.reviewNote||lecture.lectureReview.reviewNote.length<30)err('LECTURE_REVIEW',`${slot} lecture review not specific`);
 const lb=stable({...lecture,lectureId:'',skillId:'',contentSha256:''});if(lectureBodies.has(lb))err('DUP_LECTURE',`${slot} repeated lecture body`);lectureBodies.add(lb);
 if(qs.length!==12)err('MC_COUNT',`${slot} has ${qs.length}`);if(crs.length<2)err('CR_COUNT',`${slot} has ${crs.length}`);if(revs.length!==12)err('REVIEW_COUNT',`${slot} has ${revs.length}`);
 const diff=Object.fromEntries(difficulties.map(d=>[d,0]));const ans=[0,0,0,0];
 const revByQ=new Map(revs.map(r=>[r.questionId,r]));
 for(const q of qs){mcCount++;globalDiff[q.difficulty]=(globalDiff[q.difficulty]||0)+1;diff[q.difficulty]=(diff[q.difficulty]||0)+1;
  if(Number.isInteger(q.answerIndex)&&q.answerIndex>=0&&q.answerIndex<4){ans[q.answerIndex]++;globalAns[q.answerIndex]++}else err('ANSWER_INDEX',q.questionId);
  mustFields(q,['questionId','unitId','topicId','skillId','difficulty','prompt','givenConditions','target','choices','answerIndex','independentSolution','explanation','steps','optionAnalysis','misconceptionTarget','prerequisiteCheck','estimatedTimeSec','unitCheck','roundingCheck','ambiguityAudit','boundaryAudit','difficultyReason','contentAuthority','contentSha256'],q.questionId);
  if(ids.has(q.questionId))err('DUP_ID',q.questionId);ids.add(q.questionId);
  if(q.contentAuthority!==AUTH)err('AUTH',q.questionId);if(q.contentSha256!==contentHash(q))err('CONTENT_HASH',q.questionId);
  if(!Array.isArray(q.choices)||q.choices.length!==4)err('CHOICES',q.questionId);
  if(!Array.isArray(q.optionAnalysis)||q.optionAnalysis.length!==4)err('OPTION_ANALYSIS',q.questionId);
  const truths=(q.optionAnalysis||[]).filter(x=>x.truth===true);if(truths.length!==1||q.optionAnalysis?.[q.answerIndex]?.truth!==true)err('UNIQUE_CORRECT',q.questionId);
  if((q.optionAnalysis||[]).some(x=>!x.reason||x.reason.length<4))err('OPTION_REASON',q.questionId);
  if(!q.independentSolution?.didNotTrustStoredAnswer||!q.independentSolution?.derivation)err('INDEPENDENT',q.questionId);
  if(q.independentSolution?.derivedChoice!==q.choices?.[q.answerIndex])err('DERIVED_CHOICE',q.questionId);
  if(q.difficulty==='literacy'&&!q.literacyContextNecessity)err('LITERACY_NECESSITY',q.questionId);
  if(q.figureId)figureRefs.add(q.figureId);
  const n=norm(q.prompt);if(promptNorm.has(n))err('DUP_PROMPT',`${q.questionId} and ${promptNorm.get(n)}`);promptNorm.set(n,q.questionId);
  const m=masked(q.prompt);if(maskedMap.has(m))err('NEAR_DUP_PROMPT',`${q.questionId} and ${maskedMap.get(m)}`);maskedMap.set(m,q.questionId);
  const rev=revByQ.get(q.questionId);if(!rev)err('MISSING_REVIEW',q.questionId);else{
    if(rev.questionContentSha256!==q.contentSha256)err('REVIEW_HASH_LINK',q.questionId);
    if(rev.contentAuthority!==AUTH)err('AUTH',rev.reviewId);
    if(rev.contentSha256!==contentHash(rev))err('CONTENT_HASH',rev.reviewId);
    if(!rev.uniqueCorrectAnswer||!rev.answerMatch||rev.derivedAnswer!==q.choices[q.answerIndex])err('REVIEW_ANSWER',q.questionId);
    if(reviewNotes.has(rev.reviewerNote))err('DUP_REVIEW_EVIDENCE',rev.reviewId);reviewNotes.add(rev.reviewerNote);
  }
 }
 for(const d of difficulties)if(diff[d]!==3)err('DIFFICULTY_DISTRIBUTION',`${slot} ${d}=${diff[d]}`);
 for(let i=0;i<4;i++)if(ans[i]!==3)err('ANSWER_DISTRIBUTION',`${slot} index ${i}=${ans[i]}`);
 for(const c of crs){crCount++;mustFields(c,['questionId','prompt','requiredWork','standardSolution','alternativeMethods','reasoningSteps','rubric','partialCreditRules','followThroughPolicy','unitAndNotationRules','answerOnlyPolicy','independentReview','contentAuthority','contentSha256'],c.questionId);if(ids.has(c.questionId))err('DUP_ID',c.questionId);ids.add(c.questionId);if(c.contentAuthority!==AUTH)err('AUTH',c.questionId);if(c.contentSha256!==contentHash(c))err('CONTENT_HASH',c.questionId);const scores=(c.rubric||[]).map(x=>x.score).sort().join(',');if(scores!=='0,1,2,3')err('RUBRIC',c.questionId);if(!c.followThroughPolicy||!c.answerOnlyPolicy)err('CR_SCORING',c.questionId);if(c.figureId)figureRefs.add(c.figureId);const n=norm(c.prompt);if(promptNorm.has(n))err('DUP_PROMPT',`${c.questionId} and ${promptNorm.get(n)}`);promptNorm.set(n,c.questionId)}
 reviewCount+=revs.length;figureSpecCount+=specs.length;
 for(const s of specs){if(s.contentAuthority!==AUTH)err('AUTH',s.figureId);if(s.contentSha256!==contentHash(s))err('CONTENT_HASH',s.figureId);mustFields(s,['figureId','canvas','viewBox','exactCoordinates','altText','svgTitle','svgDesc','mobileReadabilityReview','answerLeakageReview','geometryTokenAssertions'],s.figureId);const svg=path.join(root,s.svgPath||'');if(!fs.existsSync(svg))err('FIGURE_MISSING',s.figureId);else{const txt=fs.readFileSync(svg,'utf8');if(!/<title[ >]/.test(txt)||!/<desc[ >]/.test(txt))err('SVG_ACCESSIBILITY',s.figureId);if(!/viewBox=/.test(txt))err('SVG_VIEWBOX',s.figureId)}}
}
if(lectureCount!==13)err('TOTAL_LECTURES',String(lectureCount));if(mcCount!==156)err('TOTAL_MC',String(mcCount));if(crCount<26)err('TOTAL_CR',String(crCount));if(reviewCount!==156)err('TOTAL_REVIEWS',String(reviewCount));if(figureSpecCount!==4)err('TOTAL_FIGURES',String(figureSpecCount));
for(const d of difficulties)if(globalDiff[d]!==39)err('TOTAL_DIFFICULTY',`${d}=${globalDiff[d]}`);for(let i=0;i<4;i++)if(globalAns[i]!==39)err('TOTAL_ANSWER',`${i}=${globalAns[i]}`);
for(const fid of figureRefs){if(!fs.existsSync(path.join(root,'figures','u10',`${fid}.svg`)))err('FIGURE_REF',fid)}
const allText=walk(root).filter(p=>/\.(json|jsonl|md)$/.test(p)&&!p.includes(`${path.sep}importer${path.sep}`)&&!p.includes(`${path.sep}schemas${path.sep}`)).map(p=>fs.readFileSync(p,'utf8')).join('\n');
if(/contentAuthority"?\s*:\s*"(?!CHATGPT_HUMAN_AUTHORED_R1)/.test(allText))err('AUTH_SCAN','non-authorized content marker');
if(/productionActivationAllowed"?\s*:\s*true/.test(allText))err('ACTIVATION_SCAN','true activation flag found');
if(/legacyContentImported"?\s*:\s*true/.test(allText))err('LEGACY_SCAN','legacy import true found');
if(simplified.test(allText))warnings.push({code:'LANGUAGE_HEURISTIC',message:'Heuristic found characters that may also occur in valid Traditional Chinese context; manual language review remains authoritative.'});
if(fileManifest){
 const actual=walk(root).filter(p=>!p.includes(`${path.sep}staging${path.sep}`)&&path.relative(root,p)!=='manifest/file-sha256.json');
 const listed=Object.keys(fileManifest.files).sort();const rels=actual.map(p=>path.relative(root,p).split(path.sep).join('/')).sort();
 if(listed.join('\n')!==rels.join('\n'))err('FILE_MANIFEST_SET','file set differs');
 for(const rel of listed){const p=path.join(root,rel);if(!fs.existsSync(p)||fileHash(p)!==fileManifest.files[rel])err('FILE_HASH',rel)}
}
const staging=path.join(root,'staging','u10');let emitted=0;if(fs.existsSync(staging)){emitted=walk(staging).filter(p=>p.endsWith('.mjs')).length;if(emitted!==14)err('EMITTED_MODULES',String(emitted));for(const slot of expectedSlots)if(!fs.existsSync(path.join(staging,`${slot}.mjs`)))err('EMITTED_SKILL',slot);if(!fs.existsSync(path.join(staging,'index.mjs')))err('EMITTED_INDEX','missing')}
const result={pass:errors.length===0,packageId:manifest?.packageId||null,unitId:'u10',counts:{skills:13,lectures:lectureCount,mcQuestions:mcCount,constructedResponses:crCount,semanticReviews:reviewCount,figures:figureSpecCount,difficulty:globalDiff,answerIndices:globalAns},stagingPresent:fs.existsSync(path.join(root,'staging')),emittedModuleCount:emitted,legacyIsolation:isolation||null,errors,warnings};
console.log(JSON.stringify(result,null,2));if(errors.length)process.exit(1);
