import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'..');
const AUTH='CHATGPT_HUMAN_AUTHORED_R1';
const slots=['s001','s002','s003','s004','s005','s006','s007','s008','s009','s010','s011','s012','s013','s014'];
const expectedSkills=['system-two-variable-equation-definition','system-ordered-pair-solution-check','system-solution-meaning','system-substitution-method','system-elimination-method','system-elimination-scaling','system-special-cases','system-word-setup-basic','system-chicken-rabbit-problem','system-ticket-price-problem','system-quantity-price-problem','system-rate-problem','system-mixture-basic','system-literacy-context'];
const readJson=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const readJsonl=p=>fs.readFileSync(path.join(root,p),'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
const normalize=v=>Array.isArray(v)?v.map(normalize):(v&&typeof v==='object'?Object.fromEntries(Object.keys(v).sort().map(k=>[k,normalize(v[k])])):v);
const hashRecord=r=>{const c=structuredClone(r);delete c.contentSha256;return crypto.createHash('sha256').update(JSON.stringify(normalize(c))).digest('hex')};
const fail=m=>{throw new Error(m)};
const norm=s=>String(s).normalize('NFKC').replace(/\s+/g,'').replaceAll('，',',').replaceAll('。','').toLowerCase();
const skeleton=s=>norm(s).replace(/-?\d+(?:\.\d+)?(?:\/\d+)?/g,'#');
const bannedSimplified=/[这为与两数题说认错学实价张对开关进还应现当从无总类读写给让条据处变问样并过将种点间车时动较长线组岁万网画达队见别区业专书东叶气风云电头买卖边块场]/u;
const manifest=readJson('manifest/project-manifest.json');
if(manifest.unitId!=='u04'||manifest.counts.skillCount!==14) fail('project manifest scope');
const legacy=readJson('manifest/legacy-content-isolation.json');
for(const k of ['legacyContentImported','legacySemanticEvidenceAccepted','oldProductionRuntimeModified','deleteLegacyNow','productionActivationAllowed']) if(legacy[k]!==false) fail(`legacy isolation ${k}`);
if(legacy.finalRetirementRequired!==true) fail('final retirement flag');
const allQ=[],allR=[],allCR=[],allL=[],allD=[]; const diff={basic:0,standard:0,advanced:0,literacy:0}; const ans=[0,0,0,0];
const ids=new Set(), prompts=new Set(), promptSkeletons=new Map(), crPrompts=new Set(), figureRefs=new Set();
for(let si=0;si<slots.length;si++){
 const slot=slots[si], base=`units/u04/${slot}`;
 const l=readJson(`${base}/lecture.json`), q=readJsonl(`${base}/mc-questions.jsonl`), r=readJsonl(`${base}/semantic-reviews.jsonl`), cr=readJsonl(`${base}/constructed-response.jsonl`), d=readJsonl(`${base}/drawing-specs.jsonl`);
 if(l.skillId!==expectedSkills[si]||l.unitId!=='u04') fail(`${slot}: locked skill/order mismatch`);
 if(q.length!==12||r.length!==12||cr.length<2) fail(`${slot}: record count`);
 if(l.contentAuthority!==AUTH||hashRecord(l)!==l.contentSha256) fail(`${slot}: lecture authority/hash`);
 if(String(l.title).includes('、')) fail(`${slot}: title contains forbidden punctuation`);
 if((l.workedExamples||[]).length<4||(l.commonMistakes||[]).length<4||(l.selfCheck||[]).length<4) fail(`${slot}: lecture depth`);
 if(!l.lectureReview?.reviewNote||l.lectureReview.reviewNote.length<35||l.lectureReview.decision!=='pass') fail(`${slot}: skill-specific lecture review`);
 const localDiff={basic:0,standard:0,advanced:0,literacy:0}, localAns=[0,0,0,0];
 for(const item of q){
  if(item.unitId!=='u04'||item.skillId!==expectedSkills[si]||item.contentAuthority!==AUTH) fail(`${item.questionId}: scope/authority`);
  if(ids.has(item.questionId)) fail(`${item.questionId}: duplicate id`); ids.add(item.questionId);
  if(hashRecord(item)!==item.contentSha256) fail(`${item.questionId}: content hash`);
  if(item.itemType!=='mc'||item.choices?.length!==4||new Set(item.choices).size!==4||item.optionAnalysis?.length!==4) fail(`${item.questionId}: MC shape`);
  const truths=item.optionAnalysis.map(x=>x.truth===true); if(truths.filter(Boolean).length!==1||!truths[item.answerIndex]) fail(`${item.questionId}: unique correct choice`);
  if(item.optionAnalysis.some(x=>x.choice===undefined||!x.reason||x.reason.length<4)) fail(`${item.questionId}: option analysis`);
  if(!item.independentSolution||item.independentSolution===item.explanation||item.independentSolution.length<6) fail(`${item.questionId}: independent solution`);
  if(!item.givenConditions?.length||!item.target||!item.steps?.length||!item.misconceptionTarget||!item.prerequisiteCheck) fail(`${item.questionId}: required teaching evidence`);
  if(!item.unitCheck||!item.roundingCheck||!item.ambiguityAudit||!item.boundaryAudit||!item.difficultyReason) fail(`${item.questionId}: audit fields`);
  if(item.difficulty==='literacy'&&!item.literacyContextNecessity) fail(`${item.questionId}: literacy necessity`);
  const p=norm(item.prompt); if(prompts.has(p)) fail(`${item.questionId}: duplicate normalized prompt`); prompts.add(p);
  const sk=skeleton(item.prompt); if(promptSkeletons.has(sk)) fail(`${item.questionId}: near-identical number-swapped prompt with ${promptSkeletons.get(sk)}`); promptSkeletons.set(sk,item.questionId);
  const review=r.find(x=>x.questionId===item.questionId); if(!review) fail(`${item.questionId}: missing semantic review`);
  if(review.contentAuthority!==AUTH||review.contentSha256!==item.contentSha256||review.reviewerDecision!=='pass'||!review.answerMatch||!review.uniqueCorrectAnswer) fail(`${item.questionId}: review state`);
  if(review.derivedAnswer!==item.choices[item.answerIndex]||review.storedAnswer!==item.choices[item.answerIndex]) fail(`${item.questionId}: reviewed answer mismatch`);
  if(JSON.stringify(review.optionTruth)!==JSON.stringify(truths)) fail(`${item.questionId}: truth-vector mismatch`);
  if(!review.independentRecalculation||review.independentRecalculation===item.explanation||!review.reviewerNote?.includes(review.independentRecalculation)) fail(`${item.questionId}: independent review evidence`);
  if(Object.values(review.ambiguityChecks||{}).some(v=>typeof v!=='string'||v.length<18)) fail(`${item.questionId}: ambiguity evidence`);
  localDiff[item.difficulty]++; diff[item.difficulty]++; localAns[item.answerIndex]++; ans[item.answerIndex]++;
  if(item.figureId) figureRefs.add(item.figureId);
 }
 for(const k of Object.keys(localDiff)) if(localDiff[k]!==3) fail(`${slot}: difficulty ${k}=${localDiff[k]}`);
 if(localAns.some(x=>x!==3)) fail(`${slot}: answer positions ${localAns}`);
 if(new Set(r.map(x=>x.questionId)).size!==12) fail(`${slot}: duplicate/missing reviews`);
 for(const item of cr){
  if(item.unitId!=='u04'||item.skillId!==expectedSkills[si]||item.contentAuthority!==AUTH||hashRecord(item)!==item.contentSha256) fail(`${item.questionId}: CR scope/authority/hash`);
  if(ids.has(item.questionId)) fail(`${item.questionId}: duplicate id`); ids.add(item.questionId);
  const cp=norm(item.prompt); if(crPrompts.has(cp)) fail(`${item.questionId}: duplicate CR prompt`); crPrompts.add(cp);
  if(item.rubric?.length!==4||item.rubric.map(x=>x.score).sort().join(',')!=='0,1,2,3') fail(`${item.questionId}: rubric`);
  if(new Set(item.rubric.map(x=>x.criteria)).size!==4||item.rubric.some(x=>x.criteria.length<8)) fail(`${item.questionId}: question-specific rubric`);
  if(!item.partialCreditRules?.length||!item.followThroughPolicy||!item.unitNotationRules||!item.answerOnlyPolicy) fail(`${item.questionId}: scoring policy`);
  if(!item.standardSolution?.length||!item.reasoningSteps?.length||!item.alternativeMethods?.length||item.independentReview?.decision!=='pass') fail(`${item.questionId}: CR solution/review`);
  if(item.figureId) figureRefs.add(item.figureId);
 }
 for(const item of d){
  if(item.contentAuthority!==AUTH||hashRecord(item)!==item.contentSha256||!item.altText||!item.drawingSpec||Object.keys(item.drawingSpec).length<6) fail(`${item.figureId}: drawing spec`);
  const svg=path.join(root,item.svgPath); if(!fs.existsSync(svg)) fail(`${item.figureId}: missing SVG`);
  const text=fs.readFileSync(svg,'utf8'); if(!text.includes('<title')||!text.includes('<desc')||!text.includes('role="img"')) fail(`${item.figureId}: SVG accessibility`);
  for(const token of item.svgAssertions||[]) if(!text.includes(token)) fail(`${item.figureId}: SVG assertion ${token}`);
  allD.push(item);
 }
 allL.push(l); allQ.push(...q); allR.push(...r); allCR.push(...cr);
}
if(allL.length!==14||allQ.length!==168||allR.length!==168||allCR.length!==28) fail('global counts');
for(const [k,v] of Object.entries(diff)) if(v!==42) fail(`global difficulty ${k}=${v}`); if(ans.some(x=>x!==42)) fail(`global answer indices ${ans}`);
if(new Set(allR.map(x=>x.reviewerNote)).size!==168||new Set(allR.map(x=>x.independentRecalculation)).size!==168) fail('repeated generic semantic review evidence');
if(new Set(allL.map(x=>x.lectureReview.reviewNote)).size!==14||new Set(allL.map(x=>x.contentSha256)).size!==14) fail('repeated lecture bodies/reviews');
const unitText=fs.readdirSync(path.join(root,'units/u04'),{withFileTypes:true}).filter(x=>x.isDirectory()).flatMap(x=>fs.readdirSync(path.join(root,'units/u04',x.name)).map(f=>fs.readFileSync(path.join(root,'units/u04',x.name,f),'utf8'))).join('\n');
if(bannedSimplified.test(unitText)) fail(`Traditional Chinese check found ${unitText.match(bannedSimplified)[0]}`);
for(const bad of ['承上題','型別','引數','報名錶','分割槽','∈','a²-b²','1/2x','1/3y']) if(unitText.includes(bad)) fail(`forbidden residual wording ${bad}`);
if(unitText.includes('同時透過')||unitText.includes('只透過')) fail('ambiguous pass/satisfy wording');
const svgDir=path.join(root,'figures/u04'); const svgFiles=fs.readdirSync(svgDir).filter(x=>x.endsWith('.svg')); if(svgFiles.length!==allD.length) fail('figure file/spec count');
for(const id of figureRefs) if(!svgFiles.includes(`${id}.svg`)) fail(`unresolved figure ${id}`);
const fm=readJson('manifest/file-sha256.json');
for(const e of fm.files){const p=path.join(root,e.path);if(!fs.existsSync(p)) fail(`missing hashed file ${e.path}`);const h=crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');if(h!==e.sha256) fail(`file hash ${e.path}`)}
console.log(JSON.stringify({status:'PASS',unitId:'u04',lockedSkillCount:14,lectureCount:allL.length,mcQuestionCount:allQ.length,constructedResponseCount:allCR.length,semanticReviewCount:allR.length,figureCount:allD.length,difficultyCounts:diff,answerIndexCounts:ans,contentHashesVerified:true,fileManifestVerified:true,duplicateIdsRejected:true,normalizedPromptDuplicatesRejected:true,numberSwapNearDuplicatesRejected:true,questionSpecificReviewEvidenceVerified:true,skillSpecificLectureReviewVerified:true,traditionalChineseVerified:true,legacyContentImported:false,productionActivationAllowed:false},null,2));
