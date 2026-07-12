#!/usr/bin/env node
import fs from 'node:fs';import path from 'node:path';import {spawnSync} from 'node:child_process';
const args=process.argv.slice(2);const arg=n=>{const i=args.indexOf(n);return i>=0?args[i+1]:null};
const repo=path.resolve(arg('--repo')||process.cwd());const output=path.resolve(arg('--output')||path.join(repo,'數學會考作戰室','tools','v2-human-content','global-readiness','r1','evidence'));
const human=path.join(repo,'數學會考作戰室','tools','v2-human-content');const auditOut=path.join(output,'global-audit-r2');const scanner=path.join(human,'global-audit','r1','tooling','scripts','run-global-audit.mjs');
const r=spawnSync(process.execPath,[scanner,'--repo',repo,'--output',auditOut],{encoding:'utf8'});if(r.status!==0){process.stderr.write(r.stderr);process.stdout.write(r.stdout);process.exit(r.status||1)}
const report=JSON.parse(fs.readFileSync(path.join(auditOut,'global-audit-report.json'),'utf8'));const adj=JSON.parse(fs.readFileSync(path.join(human,'global-repair','wave-1b','evidence','duplicate-adjudication-report.json'),'utf8'));
const issues=[];const c=report.counts;
if(report.status!=='PASS_GLOBAL_STRUCTURE')issues.push(`global audit status ${report.status}`);
for(const [k,v] of Object.entries({skillDirectories:339,lectures:339,mcQuestions:4068,constructedResponses:678,semanticReviews:4068,drawingSpecs:178,svgFigures:178}))if(c[k]!==v)issues.push(`${k}=${c[k]} expected ${v}`);
if(report.criticalBlockers.length)issues.push('critical blockers remain');
if(report.duplicates.exactMcPromptGroups.length!==0)issues.push('exact MC prompt groups remain');
if(report.duplicates.crossUnitPromptSkeletonGroups.length!==0)issues.push('cross-unit skeleton groups remain');
if(report.duplicates.exactConstructedResponseGroups.length!==0)issues.push('exact CR groups remain');
if(report.duplicates.numberSwapCandidateGroups.length!==22)issues.push('number-swap candidate count differs from adjudicated 22');
if(adj.status!=='PASS_DUPLICATE_ADJUDICATION'||adj.unresolvedGroupCount!==0||adj.retainedGroupCount!==22)issues.push('adjudication evidence invalid');
const result={status:issues.length?'FAIL':'PASS_GLOBAL_AUDIT_R2',counts:c,criticalBlockers:report.criticalBlockers,rawDuplicateCounts:{exactMcPromptGroups:report.duplicates.exactMcPromptGroups.length,crossUnitPromptSkeletonGroups:report.duplicates.crossUnitPromptSkeletonGroups.length,numberSwapCandidateGroups:report.duplicates.numberSwapCandidateGroups.length,exactConstructedResponseGroups:report.duplicates.exactConstructedResponseGroups.length},adjudicatedRetainedNumberSwapGroups:adj.retainedGroupCount,unresolvedDuplicateGroups:adj.unresolvedGroupCount,issues,productionActivationAllowed:false,oldDatabaseDeletionAllowed:false};
fs.mkdirSync(output,{recursive:true});fs.writeFileSync(path.join(output,'global-audit-r2-validation.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result,null,2));if(issues.length)process.exit(1);
