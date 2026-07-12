import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
const here=path.dirname(fileURLToPath(import.meta.url));
const root=path.resolve(here,'..');
const readJson=p=>JSON.parse(fs.readFileSync(path.join(root,p),'utf8'));
const readJsonl=p=>fs.readFileSync(path.join(root,p),'utf8').split(/\r?\n/).filter(Boolean).map(JSON.parse);
const normalize=value=>{
 if(Array.isArray(value)) return value.map(normalize);
 if(value&&typeof value==='object') return Object.fromEntries(Object.keys(value).sort().map(k=>[k,normalize(value[k])]));
 return value;
};
const contentHash=record=>{
 const clone=structuredClone(record); delete clone.contentSha256;
 return crypto.createHash('sha256').update(JSON.stringify(normalize(clone))).digest('hex');
};
const questions=readJsonl('units/u01/s001/mc-questions.jsonl');
const reviews=readJsonl('units/u01/s001/semantic-reviews.jsonl');
const cr=readJsonl('units/u01/s001/constructed-response.jsonl');
const lecture=readJson('units/u01/s001/lecture.json');
const hashes=readJson('manifest/content-sha256.json');
const fail=m=>{throw new Error(m)};
if(questions.length!==12) fail(`Expected 12 MC questions, got ${questions.length}`);
if(reviews.length!==12) fail(`Expected 12 reviews, got ${reviews.length}`);
if(cr.length!==2) fail(`Expected 2 constructed responses, got ${cr.length}`);
if(new Set(questions.map(q=>q.questionId)).size!==12) fail('Duplicate question IDs');
if(new Set(questions.map(q=>q.text)).size!==12) fail('Duplicate question text');
const counts={basic:0,standard:0,advanced:0,literacy:0};
const answerCounts=[0,0,0,0];
for(const q of questions){
 if(q.type!=='mc'||q.choices.length!==4||q.optionAnalysis.length!==4) fail(`${q.questionId}: invalid MC shape`);
 if(!Number.isInteger(q.answerIndex)||q.answerIndex<0||q.answerIndex>3) fail(`${q.questionId}: invalid answerIndex`);
 if(contentHash(q)!==q.contentSha256) fail(`${q.questionId}: content SHA-256 mismatch`);
 counts[q.difficulty]=(counts[q.difficulty]||0)+1; answerCounts[q.answerIndex]++;
 if(q.optionAnalysis.filter(x=>x.truth).length!==1) fail(`${q.questionId}: expected exactly one true option`);
 if(!q.optionAnalysis[q.answerIndex].truth) fail(`${q.questionId}: answerIndex does not point to true option`);
 const r=reviews.find(x=>x.questionId===q.questionId); if(!r) fail(`${q.questionId}: missing review`);
 if(r.contentSha256!==q.contentSha256) fail(`${q.questionId}: review hash mismatch`);
 if(!r.answerMatch||!r.uniqueCorrectAnswer||r.reviewerDecision!=='pass') fail(`${q.questionId}: review not passed`);
 if(JSON.stringify(r.optionTruth)!==JSON.stringify(q.optionAnalysis.map(x=>x.truth))) fail(`${q.questionId}: option truth mismatch`);
 if(r.derivedAnswer!==q.choices[q.answerIndex]||r.storedAnswer!==q.choices[q.answerIndex]) fail(`${q.questionId}: answer evidence mismatch`);
 if(q.difficulty==='literacy'&&!q.literacyContextNecessity) fail(`${q.questionId}: literacy context necessity missing`);
}
for(const [k,v] of Object.entries(counts)) if(v!==3) fail(`Difficulty ${k} expected 3, got ${v}`);
if(answerCounts.some(n=>n!==3)) fail(`Answer positions not balanced: ${answerCounts.join(',')}`);
if(contentHash(lecture)!==lecture.contentSha256) fail('Lecture content SHA-256 mismatch');
if(lecture.workedExamples.length<4||lecture.commonMistakes.length<6) fail('Lecture depth requirements not met');
for(const item of cr){
 if(contentHash(item)!==item.contentSha256) fail(`${item.questionId}: content SHA-256 mismatch`);
 if(item.rubric.length!==4) fail(`${item.questionId}: rubric must have 4 score levels`);
 const scores=[...item.rubric].map(x=>x.score).sort().join(','); if(scores!=='0,1,2,3') fail(`${item.questionId}: rubric must cover 0-3`);
 if(item.independentReview?.decision!=='pass') fail(`${item.questionId}: independent review missing`);
}
for(const entry of hashes.files){
 const p=path.join(root,entry.path); if(!fs.existsSync(p)) fail(`Missing hashed file: ${entry.path}`);
 const actual=crypto.createHash('sha256').update(fs.readFileSync(p)).digest('hex');
 if(actual!==entry.sha256) fail(`File hash mismatch: ${entry.path}`);
}
console.log(JSON.stringify({status:'PASS',lectureCount:1,mcQuestionCount:12,constructedResponseCount:2,semanticReviewCount:12,difficultyCounts:counts,answerIndexCounts:answerCounts,contentHashesVerified:true,fileManifestVerified:true,productionActivationAllowed:false},null,2));
