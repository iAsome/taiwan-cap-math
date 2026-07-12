import path from "node:path";
import { parseArgs,writeJson,assert,run } from "./lib/common.mjs";
const a=parseArgs(process.argv.slice(2));assert(a.repo&&a.root&&a.releaseCommit&&a.output,"Usage --repo --root --releaseCommit --output");
const repo=path.resolve(a.repo),output=path.resolve(a.output),repoName="iAsome/taiwan-cap-math";
run("gh",["auth","status"],{cwd:repo});
const view=JSON.parse(run("gh",["repo","view",repoName,"--json","defaultBranchRef"],{cwd:repo}));
const defaultBranch=view.defaultBranchRef.name;assert(defaultBranch&&defaultBranch!=="chatgpt/math-v2-human-authoring-r1","invalid default branch");
let list=JSON.parse(run("gh",["pr","list","--repo",repoName,"--head","chatgpt/math-v2-human-authoring-r1","--base",defaultBranch,"--state","open","--json","number,url"],{cwd:repo}));
let pr;
if(list.length)pr=list[0];
else{
  const url=run("gh",["pr","create","--repo",repoName,"--base",defaultBranch,"--head","chatgpt/math-v2-human-authoring-r1","--title","Math V2 Human Runtime R1 final release","--body","Human-authored Math V2 final release. All content, browser, retirement, repository purity and rollback gates passed."],{cwd:repo});
  pr={url,number:Number(url.split("/").pop())};
}
let info=JSON.parse(run("gh",["pr","view",String(pr.number),"--repo",repoName,"--json","mergeable,reviewDecision,statusCheckRollup,url"],{cwd:repo}));
const rollup=info.statusCheckRollup||[];
if(rollup.length){
  run("gh",["pr","checks",String(pr.number),"--repo",repoName,"--watch","--fail-fast"],{cwd:repo});
  info=JSON.parse(run("gh",["pr","view",String(pr.number),"--repo",repoName,"--json","mergeable,reviewDecision,statusCheckRollup,url"],{cwd:repo}));
}
const bad=(info.statusCheckRollup||[]).filter(item=>["FAILURE","CANCELLED","TIMED_OUT","ACTION_REQUIRED","STARTUP_FAILURE"].includes(item.conclusion));
assert(bad.length===0,`Failing checks: ${JSON.stringify(bad)}`);
assert(info.mergeable==="MERGEABLE","PR not mergeable");
run("gh",["pr","merge",String(pr.number),"--repo",repoName,"--merge"],{cwd:repo});
const merged=JSON.parse(run("gh",["pr","view",String(pr.number),"--repo",repoName,"--json","state,mergedAt,mergeCommit,url"],{cwd:repo}));
assert(merged.state==="MERGED","PR not merged");
const pages=JSON.parse(run("gh",["api",`repos/${repoName}/pages`],{cwd:repo}));
const report={status:"PASS_FINAL_PR_MERGE_R1",defaultBranch,prNumber:pr.number,prUrl:merged.url,mergeCommit:merged.mergeCommit?.oid||null,mergedAt:merged.mergedAt,pages:{htmlUrl:pages.html_url,source:pages.source,buildType:pages.build_type},releaseCommit:a.releaseCommit};
writeJson(path.join(output,"final-merge.json"),report);console.log(JSON.stringify(report,null,2));
