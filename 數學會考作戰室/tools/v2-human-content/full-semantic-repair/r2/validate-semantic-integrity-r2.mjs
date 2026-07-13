#!/usr/bin/env node
"use strict";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
const ROOT=process.cwd();
const SRC=path.join(ROOT,"數學會考作戰室","tools","v2-human-content","batches");
const LOCK=path.join(ROOT,"數學會考作戰室","tools","v2-human-content","authoring","authoring-syllabus-lock-r2.json");
const MANIFEST=path.join(ROOT,"數學會考作戰室","human-runtime","content","manifest.json");
const FIGDIR=path.join(ROOT,"數學會考作戰室","human-runtime","figures");
const OUTDIR=path.join(ROOT,"數學會考作戰室","tools","v2-human-content","full-semantic-repair","r2");
const EXPECT={units:23,skills:339,lectures:339,mc:4068,cr:678,figures:178,lock:"930dbdbbb70818b461ba6ad28620dfed69442716b653be91a9025ebe92d353fc"};
const errors=[],warnings=[],ids=new Map(),questions=new Map(),lectures=new Map(),rows=[];
const walk=d=>{const out=[],stack=[d];while(stack.length){const x=stack.pop();if(!fs.existsSync(x))continue;for(const e of fs.readdirSync(x,{withFileTypes:true})){const f=path.join(x,e.name);e.isDirectory()?stack.push(f):out.push(f)}}return out.sort()};
const sha=f=>crypto.createHash("sha256").update(fs.readFileSync(f)).digest("hex");
const json=f=>{try{return JSON.parse(fs.readFileSync(f,"utf8"))}catch(e){errors.push({code:"JSON_PARSE",file:f,message:e.message});return null}};
const jsonl=f=>fs.readFileSync(f,"utf8").split(/\r?\n/).filter(Boolean).flatMap((s,i)=>{try{return[JSON.parse(s)]}catch(e){errors.push({code:"JSONL_PARSE",file:f,line:i+1,message:e.message});return[]}});
const rid=(o,t,f)=>{const id=o.questionId||o.lectureId||o.figureId||o.drawingSpecId||o.id;if(!id)return null;if(ids.has(id))errors.push({code:"DUPLICATE_ID",id,first:ids.get(id),second:f});else ids.set(id,{type:t,file:f});return id};
const gcd=(a,b)=>{a=a<0n?-a:a;b=b<0n?-b:b;while(b)[a,b]=[b,a%b];return a||1n};
const rat=(n,d=1n)=>{if(!d)return null;if(d<0n){n=-n;d=-d}const g=gcd(n,d);return[n/g,d/g]};
const num=s=>{s=String(s).trim().replace(/[−－]/g,"-").replace(/,/g,"");let m=s.match(/^([+-]?\d+)\s*\/\s*(\d+)$/);if(m)return rat(BigInt(m[1]),BigInt(m[2]));m=s.match(/^([+-]?)(\d+)(?:\.(\d+))?%?$/);if(!m)return null;const frac=m[3]||"",den=10n**BigInt(frac.length),sign=m[1]==="-"?-1n:1n;let r=rat(sign*BigInt(m[2]+frac),den);if(s.endsWith("%"))r=rat(r[0],r[1]*100n);return r};
const norm=c=>{const s=String(c).trim().replace(/\s+/g," "),m=s.match(/^(.+?)(公里|公尺|公分|毫米|平方公尺|平方公分|立方公尺|立方公分|公升|毫升|公斤|公克|毫克|小時|分鐘|秒|人|個|件|本|張|元|歲|組|箱|袋|瓶|頁|次|包)?$/);if(!m)return"T:"+s;const r=num(m[1]);return r?`N:${r[0]}/${r[1]}|${m[2]||""}`:"T:"+s};
const strings=o=>JSON.stringify(o);
for(const f of walk(SRC)){
 if(f.endsWith("lecture.json")){const o=json(f);if(o){const l=o.lecture||o,id=rid(l,"lecture",f);lectures.set(id,l);rows.push({type:"lecture",o:l,f})}}
 if(f.endsWith("mc-questions.jsonl"))for(const o of jsonl(f)){const id=rid(o,"mc",f);questions.set(id,o);rows.push({type:"mc",o,f});const cs=o.choices||[];if(cs.length!==4)errors.push({code:"MC_CHOICE_COUNT",id,file:f,found:cs.length});if(!Number.isInteger(o.answerIndex)||o.answerIndex<0||o.answerIndex>=cs.length)errors.push({code:"ANSWER_INDEX",id,file:f});const g={};cs.forEach((c,i)=>(g[norm(c)]??=[]).push({i,c}));for(const v of Object.values(g))if(v.length>1)errors.push({code:"EQUIVALENT_CHOICES",id,file:f,choices:v});if(Array.isArray(o.optionAnalysis)&&o.optionAnalysis.filter(x=>x?.truth===true).length!==1)errors.push({code:"OPTION_TRUTH_COUNT",id,file:f})}
 if(f.endsWith("constructed-response.jsonl"))for(const o of jsonl(f)){const id=rid(o,"cr",f);questions.set(id,o);rows.push({type:"cr",o,f});const prompt=o.prompt||o.text||"";if(/說明|列式|過程|驗算|證明|推理|作圖|理由|步驟/.test(prompt)){const z=[...(o.rubric||[]).filter(x=>Number(x?.score)===0).map(x=>x.criteria||""),o.answerOnlyPolicy||""].join(" ");if(!/只.*答案/.test(z)||!/0|零分|不得分/.test(z))errors.push({code:"CR_ANSWER_ONLY_ZERO",id,file:f})}const scores=new Set((o.rubric||[]).map(x=>Number(x?.score)));for(const s of[0,1,2,3])if(!scores.has(s))errors.push({code:"CR_RUBRIC_SCORE",id,file:f,score:s})}
 if(f.endsWith("drawing-specs.jsonl"))for(const o of jsonl(f)){rid(o,"figure",f);rows.push({type:"figure",o,f})}
}
const counts={units:new Set(rows.map(x=>(x.o.unitId||x.o.lecture?.unitId)).filter(Boolean)).size,skills:new Set(rows.map(x=>(x.o.skillId||x.o.lecture?.skillId)).filter(Boolean)).size,lectures:rows.filter(x=>x.type==="lecture").length,mc:rows.filter(x=>x.type==="mc").length,cr:rows.filter(x=>x.type==="cr").length};
for(const k of["units","skills","lectures","mc","cr"])if(counts[k]!==EXPECT[k])errors.push({code:"COUNT",key:k,expected:EXPECT[k],actual:counts[k]});
if(!fs.existsSync(LOCK)||sha(LOCK)!==EXPECT.lock)errors.push({code:"LOCK_SHA",actual:fs.existsSync(LOCK)?sha(LOCK):null});
const skill=new Map();for(const r of rows.filter(x=>["lecture","mc","cr"].includes(x.type))){const s=r.o.skillId||r.o.lecture?.skillId;if(!s)continue;const v=skill.get(s)||{lecture:0,mc:0,cr:0,d:{}};v[r.type]++;if(r.type==="mc")v.d[r.o.difficulty]=(v.d[r.o.difficulty]||0)+1;skill.set(s,v)}for(const[s,v]of skill){if(v.lecture!==1||v.mc!==12||v.cr!==2)errors.push({code:"PER_SKILL_COUNT",skillId:s,found:v});for(const d of["basic","standard","advanced","literacy"])if((v.d[d]||0)!==3)errors.push({code:"DIFFICULTY_DISTRIBUTION",skillId:s,d,actual:v.d[d]||0})}
for(const r of rows){const t=strings(r.o);for(const x of["隻看表面","避擴音前使用","组","场","花坛","给定","之后","后项","厘米","千米","平方厘米","立方厘米","平米","千克"])if(t.includes(x))errors.push({code:"LANGUAGE_OR_TYPO",file:r.f,token:x})}
const q=id=>questions.get(id),p=o=>o?.prompt||o?.text||"";
if((q("u03-s011-v006")?.choices||[]).some(x=>String(x).replace(/\s/g,"")==="119/7"))errors.push({code:"KNOWN_REPAIR",id:"u03-s011-v006"});
if(/公園|圖書館|啟用/.test(p(q("u03-s008-v011"))))errors.push({code:"KNOWN_REPAIR",id:"u03-s008-v011"});
if(!strings(q("u03-s012-v008")||{}).includes("平均數等於中間數"))errors.push({code:"KNOWN_REPAIR",id:"u03-s012-v008"});
if(/\bk\b|參數/.test(p(q("u04-s001-v007"))))errors.push({code:"KNOWN_REPAIR",id:"u04-s001-v007"});
if(/\(x[+＋]y\)\(x[-−－]y\)/.test(p(q("u04-s001-v008"))))errors.push({code:"KNOWN_REPAIR",id:"u04-s001-v008"});
if(/\bk\b|參數/.test(p(q("u04-s001-cr002"))))errors.push({code:"KNOWN_REPAIR",id:"u04-s001-cr002"});
if(!strings(lectures.get("u03-s010-lecture-r1")||{}).includes("用距離、速率和時間建立方程式"))errors.push({code:"KNOWN_REPAIR",id:"u03-s010-lecture-r1"});
if(!strings(lectures.get("u03-s013-lecture-r1")||{}).includes("題目允許的範圍"))errors.push({code:"KNOWN_REPAIR",id:"u03-s013-lecture-r1"});
const manifest=json(MANIFEST);if(manifest){for(const[k,v]of Object.entries({unitCount:23,skillCount:339,lectureCount:339,mcQuestionCount:4068,constructedResponseCount:678,figureCount:178}))if(manifest[k]!==v)errors.push({code:"MANIFEST_COUNT",key:k,expected:v,actual:manifest[k]})}
const svgs=walk(FIGDIR).filter(x=>x.endsWith(".svg"));if(svgs.length!==178)errors.push({code:"FIGURE_COUNT",actual:svgs.length});for(const f of svgs){const t=fs.readFileSync(f,"utf8");if(!/<title\b/i.test(t))errors.push({code:"SVG_TITLE",file:f});if(!/<desc\b/i.test(t))errors.push({code:"SVG_DESC",file:f})}const jf=svgs.find(x=>path.basename(x)==="fig-u03-s010-v009.svg");if(jf&&!fs.readFileSync(jf,"utf8").includes("示意圖不按比例繪製"))errors.push({code:"KNOWN_REPAIR",id:"fig-u03-s010-v009"});
fs.mkdirSync(OUTDIR,{recursive:true});const result={schemaVersion:"math-v2-semantic-integrity-r2",generatedAt:new Date().toISOString(),counts,errorCount:errors.length,warningCount:warnings.length,errors,warnings,status:errors.length?"FAIL":"PASS_CODEX_IMPLEMENTATION_CANDIDATE_R2_PENDING_CENTRAL_ACCEPTANCE"};fs.writeFileSync(path.join(OUTDIR,"semantic-integrity-r2.json"),JSON.stringify(result,null,2)+"\n");console.log(JSON.stringify({status:result.status,counts,errors:errors.length},null,2));if(errors.length)process.exit(1);
