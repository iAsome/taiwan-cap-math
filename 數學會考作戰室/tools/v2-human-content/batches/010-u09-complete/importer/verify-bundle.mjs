#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const root = path.resolve(process.argv[2] || process.cwd());
const errors = [];
const warnings = [];
const expected = [
  ["s001","data-table-reading","u09-display"],
  ["s002","frequency-table","u09-display"],
  ["s003","bar-chart-text","u09-display"],
  ["s004","line-chart-text","u09-display"],
  ["s005","pie-chart-percent","u09-display"],
  ["s006","histogram-read","u09-display"],
  ["s007","cumulative-frequency","u09-display"],
  ["s008","contingency-table","u09-display"],
  ["s009","mean-basic","u09-summary"],
  ["s010","median-basic","u09-summary"],
  ["s011","mode-range-basic","u09-summary"],
  ["s012","weighted-average-basic","u09-summary"],
  ["s013","mean-from-table","u09-summary"],
  ["s014","data-comparison-context","u09-comparison"],
  ["s015","misleading-statistics-basic","u09-comparison"],
  ["s016","statistics-literacy-context","u09-literacy"]
];
const expectedSlots = expected.map(x=>x[0]);
const authority = "CHATGPT_HUMAN_AUTHORED_R1";

function fail(msg){ errors.push(msg); }
function exists(rel){ return fs.existsSync(path.join(root, rel)); }
function readText(rel){
  try { return fs.readFileSync(path.join(root,rel),"utf8"); }
  catch(e){ fail(`missing or unreadable ${rel}: ${e.message}`); return ""; }
}
function readJSON(rel){
  const text=readText(rel); if(!text) return null;
  try{return JSON.parse(text);}catch(e){fail(`invalid JSON ${rel}: ${e.message}`); return null;}
}
function readJSONL(rel){
  const text=readText(rel); if(!text) return [];
  const lines=text.split(/\r?\n/).filter(x=>x.trim().length);
  return lines.map((line,i)=>{try{return JSON.parse(line);}catch(e){fail(`invalid JSONL ${rel}:${i+1}: ${e.message}`);return null;}}).filter(Boolean);
}
function canonical(value){
  if(Array.isArray(value)) return `[${value.map(canonical).join(",")}]`;
  if(value && typeof value==="object"){
    return `{${Object.keys(value).sort().map(k=>`${JSON.stringify(k)}:${canonical(value[k])}`).join(",")}}`;
  }
  return JSON.stringify(value);
}
function recordHash(obj){
  const copy={...obj}; delete copy.contentSha256;
  return crypto.createHash("sha256").update(canonical(copy),"utf8").digest("hex");
}
function fileHash(abs){return crypto.createHash("sha256").update(fs.readFileSync(abs)).digest("hex");}
function countBy(arr,key){const out={};for(const x of arr){const k=String(x[key]);out[k]=(out[k]||0)+1;}return out;}
function sameCounts(a,b){return JSON.stringify(Object.fromEntries(Object.entries(a).sort()))===JSON.stringify(Object.fromEntries(Object.entries(b).sort()));}
function normalizePrompt(s){
  return String(s).normalize("NFKC").toLowerCase()
    .replace(/\d+(?:\.\d+)?/g,"#")
    .replace(/[甲乙丙丁戊己庚辛壬癸abcd]/g,"@")
    .replace(/公克|公斤|公尺|公里|分鐘|小時|人|本|杯|件|分|元|度|天|週|月|年|%/g,"U")
    .replace(/\s+/g,"")
    .replace(/[，。！？：；、,.!?;:'"「」『』（）()\[\]【】]/g,"");
}
function grams(s,n=3){const out=new Set();for(let i=0;i<=s.length-n;i++)out.add(s.slice(i,i+n));return out;}
function jaccard(a,b){let inter=0;for(const x of a)if(b.has(x))inter++;const union=a.size+b.size-inter;return union?inter/union:1;}
function assertRecordHash(obj,label){
  if(!obj || !/^[0-9a-f]{64}$/.test(obj.contentSha256||"")) return fail(`${label}: missing contentSha256`);
  const actual=recordHash(obj); if(actual!==obj.contentSha256) fail(`${label}: content hash mismatch`);
}
function checkTraditional(obj,label){
  const text=JSON.stringify(obj);
  const forbidden=["这","个","们","为","后","图","数","据","书","线","级","题","误","结","统","计","频","权","组","总","质","应","过","与","达","标","体","从","类","显","间","实","处","发"];
  const hits=[...new Set(forbidden.filter(ch=>text.includes(ch)))];
  if(hits.length) fail(`${label}: simplified-character audit hit ${hits.join("")}`);
}
function walk(dir){
  const out=[];
  for(const ent of fs.readdirSync(dir,{withFileTypes:true})){
    const p=path.join(dir,ent.name);
    if(ent.isDirectory()) out.push(...walk(p)); else out.push(p);
  }
  return out;
}

const manifest=readJSON("manifest/project-manifest.json");
const legacy=readJSON("manifest/legacy-content-isolation.json");
const contentManifest=readJSON("manifest/content-sha256.json");
const fileManifest=readJSON("manifest/file-sha256.json");
if(manifest){
  if(manifest.unit?.unitId!=="u09" || manifest.unit?.numericUnitId!==9) fail("project manifest unit identity mismatch");
  if(manifest.productionActivationAllowed!==false) fail("project manifest permits production activation");
  if(manifest.contentAuthority!==authority) fail("project manifest authority mismatch");
  if(manifest.expectedBaseHead!=="__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__") fail("expected HEAD placeholder changed");
  if(manifest.skills?.length!==16) fail("manifest locked skill count is not 16");
  const actual=manifest.skills?.map(x=>[x.slot,x.skillId,x.topicId]);
  if(JSON.stringify(actual)!==JSON.stringify(expected)) fail("manifest skill IDs, topics or order differ from U09 lock");
  if(manifest.counts?.lectureCount!==16 || manifest.counts?.mcQuestionCount!==192 || manifest.counts?.constructedResponseCount!==32 || manifest.counts?.semanticReviewCount!==192 || manifest.counts?.figureCount!==7) fail("manifest counts mismatch");
}
if(legacy){
  const contract={legacyContentImported:false,legacySemanticEvidenceAccepted:false,oldProductionRuntimeModified:false,deleteLegacyNow:false,finalRetirementRequired:true,productionActivationAllowed:false};
  for(const [k,v] of Object.entries(contract)) if(legacy[k]!==v) fail(`legacy isolation contract mismatch: ${k}`);
}
for(const forbidden of ["production","legacy-import","old-database","compiled-bank"]) if(exists(forbidden)) fail(`forbidden package path present: ${forbidden}`);

const allLectures=[], allMC=[], allCR=[], allReviews=[], allSpecs=[];
const ids=new Set(), reviewByQuestion=new Map(), specByFigure=new Map();
const perSkill={};
for(const [slot,skillId,topicId] of expected){
  const base=`units/u09/${slot}`;
  const lecture=readJSON(`${base}/lecture.json`);
  const mc=readJSONL(`${base}/mc-questions.jsonl`);
  const cr=readJSONL(`${base}/constructed-response.jsonl`);
  const reviews=readJSONL(`${base}/semantic-reviews.jsonl`);
  const specs=readJSONL(`${base}/drawing-specs.jsonl`);
  perSkill[slot]={lecture,mc,cr,reviews,specs};
  if(!lecture) continue;
  allLectures.push(lecture); allMC.push(...mc); allCR.push(...cr); allReviews.push(...reviews); allSpecs.push(...specs);
  if(lecture.unitId!=="u09"||lecture.skillId!==skillId||lecture.topicId!==topicId) fail(`${slot}: lecture identity mismatch`);
  if(lecture.contentAuthority!==authority) fail(`${slot}: lecture authority mismatch`);
  if((lecture.title||"").includes("、")||(lecture.lockedTitle||"").includes("、")) fail(`${slot}: title contains forbidden delimiter`);
  if(!Array.isArray(lecture.learningGoals)||lecture.learningGoals.length<3) fail(`${slot}: insufficient learning goals`);
  if(!Array.isArray(lecture.vocabulary)||!lecture.vocabulary.length) fail(`${slot}: missing vocabulary`);
  if(!Array.isArray(lecture.conceptDevelopment)||lecture.conceptDevelopment.length<3) fail(`${slot}: insufficient concept development`);
  if(!Array.isArray(lecture.workedExamples)||lecture.workedExamples.length<3) fail(`${slot}: insufficient worked examples`);
  if(!Array.isArray(lecture.commonMistakes)||lecture.commonMistakes.length<3) fail(`${slot}: insufficient common mistakes`);
  if(!lecture.lectureReview?.skillSpecificEvidence||lecture.lectureReview?.decision!=="pass") fail(`${slot}: missing skill-specific lecture review`);
  assertRecordHash(lecture,`${slot} lecture`);
  checkTraditional(lecture,`${slot} lecture`);

  if(mc.length!==12) fail(`${slot}: expected 12 MC, found ${mc.length}`);
  if(reviews.length!==12) fail(`${slot}: expected 12 semantic reviews, found ${reviews.length}`);
  if(cr.length<2) fail(`${slot}: expected at least 2 constructed responses, found ${cr.length}`);
  if(!sameCounts(countBy(mc,"difficulty"),{basic:3,standard:3,advanced:3,literacy:3})) fail(`${slot}: difficulty distribution mismatch`);
  if(!sameCounts(countBy(mc,"answerIndex"),{"0":3,"1":3,"2":3,"3":3})) fail(`${slot}: answer-index distribution mismatch`);

  for(const q of mc){
    if(ids.has(q.questionId)) fail(`duplicate question ID ${q.questionId}`); ids.add(q.questionId);
    if(q.unitId!=="u09"||q.skillId!==skillId||q.topicId!==topicId||q.itemType!=="mc") fail(`${q.questionId}: identity mismatch`);
    if(q.contentAuthority!==authority||q.replacementMarker!=="REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION") fail(`${q.questionId}: authority or replacement marker mismatch`);
    if(!Array.isArray(q.choices)||q.choices.length!==4||new Set(q.choices).size!==4) fail(`${q.questionId}: choices are not four unique strings`);
    if(!Number.isInteger(q.answerIndex)||q.answerIndex<0||q.answerIndex>3) fail(`${q.questionId}: invalid answer index`);
    if(!q.independentSolution?.work||q.independentSolution?.trustStoredAnswer!==false) fail(`${q.questionId}: missing independent solution`);
    if(!Array.isArray(q.optionAnalysis)||q.optionAnalysis.length!==4) fail(`${q.questionId}: missing four-option analysis`);
    else{
      const truths=q.optionAnalysis.filter(x=>x.truth===true);
      if(truths.length!==1||q.optionAnalysis[q.answerIndex]?.truth!==true) fail(`${q.questionId}: not exactly one analyzed correct choice`);
      q.optionAnalysis.forEach((x,i)=>{if(x.choice!==q.choices[i]||!x.reason)fail(`${q.questionId}: option analysis ${i} misaligned`);});
    }
    for(const field of ["misconceptionTarget","unitAndRoundingCheck","ambiguityAndBoundaryAudit","difficultyReason"]) if(!q[field]) fail(`${q.questionId}: missing ${field}`);
    if(q.difficulty==="literacy"&&!q.literacyNecessityReason) fail(`${q.questionId}: missing literacy necessity`);
    assertRecordHash(q,q.questionId); checkTraditional(q,q.questionId);
  }
  for(const r of reviews){
    if(reviewByQuestion.has(r.questionId)) fail(`duplicate semantic review for ${r.questionId}`);
    reviewByQuestion.set(r.questionId,r);
    if(r.unitId!=="u09"||r.skillId!==skillId||r.contentAuthority!==authority||r.decision!=="pass") fail(`${r.reviewId}: review identity/status mismatch`);
    if(!r.independentRecalculation||!r.singleCorrectAnswerEvidence||!r.ambiguityDecision||!Array.isArray(r.distractorAudit)||r.distractorAudit.length!==3) fail(`${r.reviewId}: incomplete question-specific evidence`);
    assertRecordHash(r,r.reviewId); checkTraditional(r,r.reviewId);
  }
  for(const q of cr){
    if(ids.has(q.questionId)) fail(`duplicate question ID ${q.questionId}`); ids.add(q.questionId);
    if(q.unitId!=="u09"||q.skillId!==skillId||q.topicId!==topicId||q.itemType!=="constructed-response") fail(`${q.questionId}: CR identity mismatch`);
    if(q.contentAuthority!==authority) fail(`${q.questionId}: CR authority mismatch`);
    for(const field of ["prompt","target","followThroughPolicy","unitAndNotationRules","answerOnlyPolicy"]) if(!q[field]) fail(`${q.questionId}: missing ${field}`);
    for(const field of ["requiredWork","standardSolution","reasoningSteps","partialCreditRules"]) if(!Array.isArray(q[field])||!q[field].length) fail(`${q.questionId}: missing ${field}`);
    const scores=(q.rubric||[]).map(x=>x.score).sort((a,b)=>a-b);
    if(JSON.stringify(scores)!==JSON.stringify([0,1,2,3])||q.rubric.some(x=>!x.criteria)) fail(`${q.questionId}: invalid 0-3 rubric`);
    if(!q.independentReview?.independentDerivation||q.independentReview?.decision!=="pass") fail(`${q.questionId}: missing independent review`);
    assertRecordHash(q,q.questionId); checkTraditional(q,q.questionId);
  }
  for(const spec of specs){
    if(specByFigure.has(spec.figureId)) fail(`duplicate figure ID ${spec.figureId}`);
    specByFigure.set(spec.figureId,spec);
    if(spec.unitId!=="u09"||spec.skillId!==skillId||spec.contentAuthority!==authority) fail(`${spec.drawingSpecId}: drawing identity mismatch`);
    for(const field of ["canvas","coordinateSystem","elements","labels","scale","altText","mobileReadability","answerLeakage","assertions"]) if(spec[field]==null) fail(`${spec.drawingSpecId}: missing ${field}`);
    assertRecordHash(spec,spec.drawingSpecId); checkTraditional(spec,spec.drawingSpecId);
  }
}
if(allLectures.length!==16||allMC.length!==192||allCR.length!==32||allReviews.length!==192||allSpecs.length!==7) fail("global source counts mismatch");
if(!sameCounts(countBy(allMC,"difficulty"),{basic:48,standard:48,advanced:48,literacy:48})) fail("global difficulty totals mismatch");
if(!sameCounts(countBy(allMC,"answerIndex"),{"0":48,"1":48,"2":48,"3":48})) fail("global answer-index totals mismatch");
for(const q of allMC) if(!reviewByQuestion.has(q.questionId)) fail(`missing semantic review for ${q.questionId}`);

const exactPrompts=new Map();
for(const q of [...allMC,...allCR]){
  const key=q.prompt.normalize("NFKC").replace(/\s+/g," ").trim();
  if(exactPrompts.has(key)) fail(`duplicate prompt: ${q.questionId} and ${exactPrompts.get(key)}`); else exactPrompts.set(key,q.questionId);
}
function nearDuplicateAudit(items,label){
  const normalized=items.map(x=>({id:x.questionId,s:normalizePrompt(x.prompt)}));
  const seen=new Map();
  for(const x of normalized){
    if(seen.has(x.s)) fail(`${label} number/name/unit-only variant: ${x.id} and ${seen.get(x.s)}`); else seen.set(x.s,x.id);
  }
  for(let i=0;i<normalized.length;i++) for(let j=i+1;j<normalized.length;j++){
    const a=normalized[i],b=normalized[j];
    if(Math.min(a.s.length,b.s.length)<35) continue;
    const ratio=Math.min(a.s.length,b.s.length)/Math.max(a.s.length,b.s.length);
    if(ratio<0.92) continue;
    if(jaccard(grams(a.s),grams(b.s))>0.975) fail(`${label} near-duplicate: ${a.id} and ${b.id}`);
  }
}
nearDuplicateAudit(allMC,"MC");
nearDuplicateAudit(allCR,"CR");
const lectureBodies=new Map();
for(const l of allLectures){
  const body=normalizePrompt([...(l.conceptDevelopment||[]),...(l.summary||[])].join(" "));
  if(lectureBodies.has(body)) fail(`duplicate lecture body ${l.lectureId} and ${lectureBodies.get(body)}`); else lectureBodies.set(body,l.lectureId);
}
const reviewBodies=new Map();
for(const r of allReviews){
  const body=normalizePrompt([r.independentRecalculation,r.singleCorrectAnswerEvidence,r.ambiguityDecision,r.difficultyEvidence].join(" "));
  if(reviewBodies.has(body)) fail(`repeated generic semantic evidence ${r.reviewId} and ${reviewBodies.get(body)}`); else reviewBodies.set(body,r.reviewId);
}

const figureRefs=[];
for(const q of [...allMC,...allCR]) if(q.figureId){
  figureRefs.push(q.figureId);
  const spec=specByFigure.get(q.figureId);
  if(!spec) fail(`${q.questionId}: unresolved figure ${q.figureId}`);
  else if(q.drawingSpecId!==spec.drawingSpecId) fail(`${q.questionId}: drawing spec mismatch`);
}
for(const [fid,spec] of specByFigure){
  const abs=path.join(root,spec.file);
  if(!fs.existsSync(abs)) fail(`${fid}: SVG missing at ${spec.file}`);
  else{
    const svg=fs.readFileSync(abs,"utf8");
    if(!/<title[\s>]/.test(svg)||!/<desc[\s>]/.test(svg)||!/\bviewBox=/.test(svg)) fail(`${fid}: SVG lacks title, desc or viewBox`);
    if(!svg.includes("Noto Sans CJK TC")) fail(`${fid}: SVG lacks Traditional Chinese font fallback`);
  }
}
if(new Set(figureRefs).size!==7) fail("not all seven figures are referenced");
const figReviews=readJSONL("review/figure-reviews.jsonl");
if(figReviews.length!==7) fail("expected seven figure reviews");
for(const r of figReviews){
  if(r.contentAuthority!==authority||r.decision!=="pass"||!r.manualVisualInspection?.rendered) fail(`${r.figureId}: incomplete figure review`);
  assertRecordHash(r,`${r.figureId} figure review`);
}

if(contentManifest){
  const actual=[];
  for(const l of allLectures) actual.push(["lecture",l.lectureId,l.contentSha256]);
  for(const q of allMC) actual.push(["mc",q.questionId,q.contentSha256]);
  for(const q of allCR) actual.push(["constructed-response",q.questionId,q.contentSha256]);
  for(const r of allReviews) actual.push(["semantic-review",r.reviewId,r.contentSha256]);
  for(const s of allSpecs) actual.push(["drawing-spec",s.drawingSpecId,s.contentSha256]);
  for(const r of figReviews) actual.push(["figure-review",r.figureId,r.contentSha256]);
  const listed=(contentManifest.entries||[]).map(x=>[x.type,x.id,x.sha256]);
  actual.sort(); listed.sort();
  if(contentManifest.entryCount!==446||JSON.stringify(actual)!==JSON.stringify(listed)) fail("content-sha256 manifest does not exactly match content records");
}

if(fileManifest){
  const allFiles=walk(root).map(p=>path.relative(root,p).split(path.sep).join("/"))
    .filter(rel=>rel!=="manifest/file-sha256.json"&&!rel.startsWith("staging/")).sort();
  const listed=(fileManifest.files||[]).map(x=>x.path).sort();
  if(JSON.stringify(allFiles)!==JSON.stringify(listed)) fail("file manifest path set mismatch");
  for(const entry of fileManifest.files||[]){
    const abs=path.join(root,entry.path);
    if(!fs.existsSync(abs)) continue;
    const st=fs.statSync(abs);
    if(st.size!==entry.bytes) fail(`file size mismatch ${entry.path}`);
    if(fileHash(abs)!==entry.sha256) fail(`file SHA-256 mismatch ${entry.path}`);
  }
}

const stagingDir=path.join(root,"staging");
let emittedModuleCount=0;
if(fs.existsSync(stagingDir)){
  const modules=walk(stagingDir).filter(p=>p.endsWith(".mjs"));
  emittedModuleCount=modules.length;
  if(emittedModuleCount!==17) fail(`staging module count expected 17, found ${emittedModuleCount}`);
  for(const slot of expectedSlots) if(!exists(`staging/u09/${slot}.mjs`)) fail(`staging missing ${slot}.mjs`);
  if(!exists("staging/u09/unit-index.mjs")) fail("staging missing unit-index.mjs");
}

const result={
  pass:errors.length===0,
  packageId:manifest?.packageId||null,
  unitId:"u09",
  counts:{skills:allLectures.length,lectures:allLectures.length,mc:allMC.length,constructedResponse:allCR.length,semanticReviews:allReviews.length,figures:allSpecs.length},
  difficultyCounts:countBy(allMC,"difficulty"),
  answerIndexCounts:countBy(allMC,"answerIndex"),
  contentHashEntries:contentManifest?.entryCount||0,
  fileHashEntries:fileManifest?.files?.length||0,
  stagingPresent:fs.existsSync(stagingDir),
  emittedModuleCount,
  warnings,
  errors
};
console.log(JSON.stringify(result,null,2));
if(errors.length) process.exit(1);
