#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const errors = [];
const warnings = [
  "Cross-unit duplicate reconciliation is not possible inside this isolated parallel package and remains a central coordinator responsibility."
];
const authority = "CHATGPT_HUMAN_AUTHORED_R1";
const expectedSkills = [
  ["s001","geometry-proof-basic","u20-proof"],
  ["s002","geometry-proof-steps","u20-proof"],
  ["s003","geometry-proof-reason","u20-proof"],
  ["s004","proof-fill-reason","u20-proof"],
  ["s005","proof-contrapositive-basic","u20-proof"],
  ["s006","circumcenter","u20-centers"],
  ["s007","incenter","u20-centers"],
  ["s008","centroid","u20-centers"],
  ["s009","orthocenter-basic","u20-centers"],
  ["s010","circumcenter-property","u20-centers"],
  ["s011","incenter-property","u20-centers"],
  ["s012","centroid-property","u20-centers"],
  ["s013","orthocenter-identify","u20-centers"],
  ["s014","triangle-center-word","u20-centers"],
  ["s015","proof-literacy","u20-literacy"]
];

function readJson(rel) {
  try { return JSON.parse(fs.readFileSync(path.join(root, rel), "utf8")); }
  catch (e) { errors.push(`Cannot parse ${rel}: ${e.message}`); return null; }
}
function readJsonl(rel) {
  try {
    const text = fs.readFileSync(path.join(root, rel), "utf8").trim();
    return text ? text.split(/\r?\n/).map((line,i) => {
      try { return JSON.parse(line); }
      catch(e) { errors.push(`Cannot parse ${rel} line ${i+1}: ${e.message}`); return null; }
    }).filter(Boolean) : [];
  } catch(e) { errors.push(`Cannot read ${rel}: ${e.message}`); return []; }
}
function stable(value) {
  if (Array.isArray(value)) return value.map(stable);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map(k => [k, stable(value[k])]));
  }
  return value;
}
function shaText(text) { return crypto.createHash("sha256").update(text).digest("hex"); }
function canonicalHash(obj, ownField) {
  const copy = structuredClone(obj);
  delete copy[ownField];
  return shaText(JSON.stringify(stable(copy)));
}
function normalize(text) {
  return String(text).normalize("NFKC").toLowerCase()
    .replace(/[，。！？；：、,.!?;:「」『』（）()\[\]【】\s]/g, "");
}
function abstractPrompt(text) {
  return normalize(text)
    .replace(/\d+(?:\.\d+)?/g, "<n>")
    .replace(/[a-z](?=[^a-z]|$)/g, "<x>")
    .replace(/(平方公尺|公尺|公分|公里|分鐘|秒|元|度)/g, "<u>");
}
function walk(dir) {
  let out=[];
  for (const ent of fs.readdirSync(dir,{withFileTypes:true})) {
    const p=path.join(dir,ent.name);
    if(ent.isDirectory()) out=out.concat(walk(p)); else out.push(p);
  }
  return out;
}
function assert(cond,msg) { if(!cond) errors.push(msg); }

const manifest = readJson("manifest/project-manifest.json");
const isolation = readJson("manifest/legacy-content-isolation.json");
const contentManifest = readJson("manifest/content-sha256.json");
const fileManifest = readJson("manifest/file-sha256.json");
const fingerprints = readJson("review/unit-content-fingerprints.json");

if (manifest) {
  assert(manifest.packageId === "math-v2-human-content-batch-021-u20-complete","Wrong packageId");
  assert(manifest.unitId === "u20" && manifest.numericUnitId === 20,"Wrong unit identity");
  assert(manifest.expectedBaseHead === "__CENTRAL_COORDINATOR_WILL_SUPPLY_EXPECTED_HEAD__","Expected HEAD placeholder changed");
  assert(manifest.productionActivationAllowed === false,"Production activation must be false");
  assert(manifest.centralCoordinatorApprovalRequired === true,"Central coordinator approval flag missing");
  assert(JSON.stringify(manifest.skillSlots) === JSON.stringify(expectedSkills.map(x=>x[0])),"Locked skill slots/order mismatch");
}
if (isolation) {
  const exact = {
    legacyContentImported:false,
    legacySemanticEvidenceAccepted:false,
    oldProductionRuntimeModified:false,
    deleteLegacyNow:false,
    finalRetirementRequired:true,
    productionActivationAllowed:false
  };
  for (const [k,v] of Object.entries(exact)) assert(isolation[k]===v,`Isolation contract mismatch: ${k}`);
}

const allIds = new Set();
const promptMap = new Map();
const abstractWithinSkill = new Map();
const reviewNotes = new Set();
const lectureBodies = new Set();
const figureRefs = new Set();
const allQuestions = [];
const allReviews = [];
const allCR = [];
const allLectures = [];
const difficultyTotals = {basic:0,standard:0,advanced:0,literacy:0};
const answerTotals = [0,0,0,0];

for (const [slot, skillId, topicId] of expectedSkills) {
  const base = `units/u20/${slot}`;
  const lecture = readJson(`${base}/lecture.json`);
  const mc = readJsonl(`${base}/mc-questions.jsonl`);
  const cr = readJsonl(`${base}/constructed-response.jsonl`);
  const reviews = readJsonl(`${base}/semantic-reviews.jsonl`);
  const drawings = readJsonl(`${base}/drawing-specs.jsonl`);
  if (!lecture) continue;
  allLectures.push(lecture);
  assert(lecture.skillSlot===slot && lecture.skillId===skillId && lecture.topicId===topicId,`${slot}: lecture identity mismatch`);
  assert(lecture.unitId==="u20" && lecture.contentAuthority===authority,`${slot}: lecture authority/identity mismatch`);
  assert(!String(lecture.title).includes("、"),`${slot}: lecture title contains forbidden internal separator`);
  assert(Array.isArray(lecture.learningOutcomes)&&lecture.learningOutcomes.length>=3,`${slot}: lecture outcomes incomplete`);
  assert(Array.isArray(lecture.glossary)&&lecture.glossary.length>=2,`${slot}: lecture glossary incomplete`);
  assert(Array.isArray(lecture.conceptNarrative)&&lecture.conceptNarrative.length>=3,`${slot}: lecture narrative incomplete`);
  assert(Array.isArray(lecture.nonApplicableCases)&&lecture.nonApplicableCases.length>=2,`${slot}: invalid-use cases incomplete`);
  assert(Array.isArray(lecture.method)&&lecture.method.length>=3,`${slot}: method incomplete`);
  assert(Array.isArray(lecture.workedExamples)&&lecture.workedExamples.length>=2,`${slot}: examples incomplete`);
  assert(Array.isArray(lecture.commonMistakes)&&lecture.commonMistakes.length>=3,`${slot}: common mistakes incomplete`);
  assert(lecture.lectureReview?.skillSpecificEvidence?.length>20,`${slot}: skill-specific lecture review missing`);
  assert(canonicalHash(lecture,"contentSha256")===lecture.contentSha256,`${slot}: lecture content hash mismatch`);
  const lectureFingerprint=shaText(normalize(JSON.stringify({
    outcomes:lecture.learningOutcomes,narrative:lecture.conceptNarrative,examples:lecture.workedExamples,mistakes:lecture.commonMistakes
  })));
  assert(!lectureBodies.has(lectureFingerprint),`${slot}: duplicate lecture body fingerprint`);
  lectureBodies.add(lectureFingerprint);

  assert(mc.length===12,`${slot}: expected 12 MC, found ${mc.length}`);
  assert(cr.length>=2,`${slot}: expected at least 2 CR, found ${cr.length}`);
  assert(reviews.length===12,`${slot}: expected 12 semantic reviews, found ${reviews.length}`);
  const dc={basic:0,standard:0,advanced:0,literacy:0};
  const ac=[0,0,0,0];
  const localAbstract=new Set();
  const reviewById=new Map(reviews.map(r=>[r.questionId,r]));
  assert(reviewById.size===reviews.length,`${slot}: duplicate semantic review questionId`);

  for (const q of mc) {
    allQuestions.push(q);
    assert(q.skillSlot===slot && q.skillId===skillId && q.topicId===topicId && q.unitId==="u20",`${q.questionId}: identity mismatch`);
    assert(q.contentAuthority===authority && q.legacyContentUsed===false,`${q.questionId}: authority or legacy marker mismatch`);
    assert(!allIds.has(q.questionId),`${q.questionId}: duplicate item ID`); allIds.add(q.questionId);
    assert(["basic","standard","advanced","literacy"].includes(q.difficulty),`${q.questionId}: invalid difficulty`);
    if (dc[q.difficulty]!==undefined) { dc[q.difficulty]++; difficultyTotals[q.difficulty]++; }
    assert(Number.isInteger(q.answerIndex)&&q.answerIndex>=0&&q.answerIndex<4,`${q.questionId}: invalid answerIndex`);
    if (Number.isInteger(q.answerIndex)&&q.answerIndex>=0&&q.answerIndex<4) { ac[q.answerIndex]++; answerTotals[q.answerIndex]++; }
    assert(Array.isArray(q.choices)&&q.choices.length===4&&new Set(q.choices).size===4,`${q.questionId}: choices must be four unique values`);
    assert(Array.isArray(q.optionAnalysis)&&q.optionAnalysis.length===4,`${q.questionId}: four option analyses required`);
    if (Array.isArray(q.optionAnalysis)&&q.optionAnalysis.length===4) {
      const truths=q.optionAnalysis.map(x=>x.truth===true);
      assert(truths.filter(Boolean).length===1 && truths[q.answerIndex]===true,`${q.questionId}: unique-correct truth audit failed`);
      q.optionAnalysis.forEach((x,i)=>assert(x.choice===q.choices[i]&&String(x.reason).length>=3,`${q.questionId}: option ${i} analysis mismatch`));
    }
    assert(q.independentSolution?.derivation?.length>=12 && q.independentSolution?.result===q.choices[q.answerIndex],`${q.questionId}: independent solution incomplete/mismatch`);
    assert(Array.isArray(q.steps)&&q.steps.length>=2,`${q.questionId}: solution steps incomplete`);
    for(const fld of ["unitCheck","roundingCheck","ambiguityAndBoundaryAudit","difficultyReason","prerequisiteCheck"]) assert(String(q[fld]??"").length>=4,`${q.questionId}: ${fld} incomplete`);
    if(q.difficulty==="literacy") assert(String(q.literacyContextNecessity??"").length>=12,`${q.questionId}: literacy necessity missing`);
    if(q.figureId) figureRefs.add(q.figureId);
    assert(canonicalHash(q,"contentSha256")===q.contentSha256,`${q.questionId}: content hash mismatch`);
    const np=normalize(q.prompt);
    assert(!promptMap.has(np),`${q.questionId}: normalized prompt duplicates ${promptMap.get(np)}`);
    promptMap.set(np,q.questionId);
    const ap=abstractPrompt(q.prompt);
    assert(!localAbstract.has(ap),`${q.questionId}: within-skill number/name/unit-swapped prompt`);
    localAbstract.add(ap);
    const rv=reviewById.get(q.questionId);
    assert(Boolean(rv),`${q.questionId}: missing semantic review`);
    if(rv) {
      allReviews.push(rv);
      assert(rv.contentAuthority===authority,`${q.questionId}: review authority mismatch`);
      assert(rv.contentSha256===q.contentSha256,`${q.questionId}: review points to wrong content hash`);
      assert(rv.answerMatch===true && rv.uniqueCorrectAnswer===true,`${q.questionId}: review answer/uniqueness not passed`);
      assert(Array.isArray(rv.optionTruth)&&rv.optionTruth.length===4,`${q.questionId}: review option truth incomplete`);
      assert(rv.independentSolution===q.independentSolution.derivation,`${q.questionId}: independent review derivation mismatch`);
      assert(String(rv.reviewerNote).includes(q.prompt)&&String(rv.reviewerNote).length>80,`${q.questionId}: question-specific reviewer evidence missing`);
      assert(!reviewNotes.has(rv.reviewerNote),`${q.questionId}: duplicate generic review evidence`);
      reviewNotes.add(rv.reviewerNote);
      assert(canonicalHash(rv,"reviewSha256")===rv.reviewSha256,`${q.questionId}: review hash mismatch`);
    }
  }
  assert(JSON.stringify(dc)==='{"basic":3,"standard":3,"advanced":3,"literacy":3}',`${slot}: difficulty distribution must be 3/3/3/3`);
  assert(JSON.stringify(ac)==='[3,3,3,3]',`${slot}: answer-index distribution must be 3/3/3/3`);

  const crPrompts=new Set();
  for(const item of cr) {
    allCR.push(item);
    assert(item.skillSlot===slot && item.skillId===skillId && item.topicId===topicId && item.unitId==="u20",`${item.questionId}: CR identity mismatch`);
    assert(item.contentAuthority===authority && item.legacyContentUsed===false,`${item.questionId}: CR authority or legacy marker mismatch`);
    assert(!allIds.has(item.questionId),`${item.questionId}: duplicate item ID`); allIds.add(item.questionId);
    assert(!crPrompts.has(normalize(item.prompt)),`${item.questionId}: duplicate CR prompt`); crPrompts.add(normalize(item.prompt));
    assert(Array.isArray(item.requiredWork)&&item.requiredWork.length>=2,`${item.questionId}: required work incomplete`);
    assert(Array.isArray(item.standardSolution)&&item.standardSolution.length>=1,`${item.questionId}: solution incomplete`);
    assert(Array.isArray(item.reasoningSteps)&&item.reasoningSteps.length>=1,`${item.questionId}: reasoning incomplete`);
    assert(Array.isArray(item.rubric)&&item.rubric.length===4,`${item.questionId}: rubric incomplete`);
    if(Array.isArray(item.rubric)) assert(JSON.stringify([...item.rubric.map(x=>x.score)].sort())==="[0,1,2,3]",`${item.questionId}: rubric must cover 0-3`);
    for(const fld of ["followThroughPolicy","unitRules","notationRules","answerOnlyPolicy"]) assert(String(item[fld]??"").length>=4,`${item.questionId}: ${fld} missing`);
    assert(item.independentReview?.decision==="pass"&&String(item.independentReview?.derivedResult??"").length>=8,`${item.questionId}: independent CR review missing`);
    if(item.figureId) figureRefs.add(item.figureId);
    assert(canonicalHash(item,"contentSha256")===item.contentSha256,`${item.questionId}: CR content hash mismatch`);
  }
  for(const d of drawings) {
    assert(d.ownerSkillSlot===slot,`${d.figureId}: drawing owner mismatch`);
    assert(d.canvas?.width===480&&d.canvas?.height===320&&d.canvas?.viewBox==="0 0 480 320",`${d.figureId}: canvas mismatch`);
    assert(Array.isArray(d.geometryAssertions)&&d.geometryAssertions.length>=2,`${d.figureId}: geometry assertions missing`);
    assert(String(d.altText).length>=20&&String(d.svgTitle).length>0&&String(d.svgDesc).length>=20,`${d.figureId}: accessibility text incomplete`);
    assert(String(d.manualVisualInspection).startsWith("pass:"),`${d.figureId}: manual visual inspection not passed`);
  }
}

assert(allLectures.length===15,"Expected 15 lectures");
assert(allQuestions.length===180,"Expected 180 MC");
assert(allCR.length===30,"Expected exactly 30 CR");
assert(allReviews.length===180,"Expected 180 semantic reviews");
assert(JSON.stringify(difficultyTotals)==='{"basic":45,"standard":45,"advanced":45,"literacy":45}',"Unit difficulty totals mismatch");
assert(JSON.stringify(answerTotals)==='[45,45,45,45]',"Unit answer-index totals mismatch");

// Figure and SVG checks
const figureFiles=fs.readdirSync(path.join(root,"figures/u20")).filter(x=>x.endsWith(".svg")).sort();
assert(figureFiles.length===16,`Expected 16 SVG figures, found ${figureFiles.length}`);
const figureIds=new Set(figureFiles.map(x=>x.slice(0,-4)));
for(const ref of figureRefs) assert(figureIds.has(ref),`Missing referenced figure ${ref}`);
for(const file of figureFiles) {
  const id=file.slice(0,-4);
  const svg=fs.readFileSync(path.join(root,"figures/u20",file),"utf8");
  assert(svg.includes("<title")&&svg.includes("<desc"),`${id}: SVG title/desc missing`);
  assert(svg.includes('viewBox="0 0 480 320"'),`${id}: SVG viewBox mismatch`);
  assert(svg.includes(`aria-labelledby="${id}-title ${id}-desc"`),`${id}: SVG accessibility linkage missing`);
}

// Traditional Chinese and title policy
const sourceText=walk(path.join(root,"units")).filter(p=>fs.statSync(p).isFile()).map(p=>fs.readFileSync(p,"utf8")).join("\n");
const unambiguousSimplified=["边","线","点","圆","体","长","应","题","证","为","与","进","这","还","图","标","关","开","门","问","误","选项"];
for(const ch of unambiguousSimplified) if(sourceText.includes(ch)) errors.push(`Simplified Chinese character detected: ${ch}`);

// Fingerprint manifest checks
if(fingerprints) {
  assert(fingerprints.unitId==="u20"&&fingerprints.crossUnitCompared===false,"Fingerprint cross-unit status mismatch");
  assert(fingerprints.mcPrompts?.length===180,"Fingerprint MC count mismatch");
  assert(fingerprints.constructedResponsePrompts?.length===30,"Fingerprint CR count mismatch");
  assert(fingerprints.lectureBodies?.length===15,"Fingerprint lecture count mismatch");
  assert(fingerprints.semanticReviewEvidence?.length===180,"Fingerprint review count mismatch");
  assert(fingerprints.figures?.length===16,"Fingerprint figure count mismatch");
}

// Content hash manifest
if(contentManifest) {
  assert(contentManifest.recordCount===405&&contentManifest.records?.length===405,"Content hash record count mismatch");
  const actual = new Map();
  for(const x of allLectures) actual.set(x.lectureId,x.contentSha256);
  for(const x of allQuestions) actual.set(x.questionId,x.contentSha256);
  for(const x of allCR) actual.set(x.questionId,x.contentSha256);
  for(const x of allReviews) actual.set(`review:${x.questionId}`,x.reviewSha256);
  for(const rec of contentManifest.records??[]) {
    const key=rec.kind==="semantic-review"?`review:${rec.id}`:rec.id;
    assert(actual.get(key)===rec.sha256,`Content manifest mismatch: ${rec.kind} ${rec.id}`);
  }
}

// File hash manifest: all immutable source files except the manifest itself and generated staging.
if(fileManifest) {
  const expectedFiles=walk(root).filter(p=>!p.includes(`${path.sep}staging${path.sep}`) && path.relative(root,p)!=="manifest/file-sha256.json")
    .map(p=>path.relative(root,p).split(path.sep).join("/")).sort();
  const listed=(fileManifest.files??[]).map(x=>x.path).sort();
  assert(JSON.stringify(expectedFiles)===JSON.stringify(listed),"File hash manifest path set mismatch");
  for(const rec of fileManifest.files??[]) {
    const p=path.join(root,rec.path);
    assert(fs.existsSync(p),`File manifest missing path ${rec.path}`);
    if(fs.existsSync(p)) assert(shaText(fs.readFileSync(p))===rec.sha256,`File hash mismatch: ${rec.path}`);
  }
}

const stagingDir=path.join(root,"staging");
let phase="source-only";
let emittedModuleCount=0;
if(fs.existsSync(stagingDir)) {
  phase="source-plus-staging";
  const mods=walk(stagingDir).filter(p=>p.endsWith(".mjs"));
  emittedModuleCount=mods.length;
  assert(emittedModuleCount===16,`Expected 16 emitted modules, found ${emittedModuleCount}`);
  for(const [slot] of expectedSkills) assert(fs.existsSync(path.join(stagingDir,"u20",`${slot}.mjs`)),`Missing emitted module ${slot}.mjs`);
  assert(fs.existsSync(path.join(stagingDir,"u20","index.mjs")),"Missing emitted index.mjs");
}

const result={
  status:errors.length?"fail":"pass",
  phase,
  packageId:"math-v2-human-content-batch-021-u20-complete",
  counts:{
    skills:allLectures.length,
    lectures:allLectures.length,
    mcQuestions:allQuestions.length,
    constructedResponses:allCR.length,
    semanticReviews:allReviews.length,
    figures:figureFiles.length,
    difficultyTotals,
    answerIndexTotals:answerTotals,
    emittedModuleCount
  },
  errors,
  warnings
};
console.log(JSON.stringify(result));
process.exitCode=errors.length?1:0;
