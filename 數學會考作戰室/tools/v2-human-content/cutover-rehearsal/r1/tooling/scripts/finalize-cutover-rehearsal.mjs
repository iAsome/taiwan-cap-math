import fs from "node:fs";
import path from "node:path";
import {
  assert, parseArgs, readJson, writeJson, runGit, runGitResult,
  currentHead, latestSubject, cleanStatus, fileHash, collectFiles, fileManifest
} from "./lib/common.mjs";

const args = parseArgs(process.argv.slice(2));
assert(args.repo && args.root && args.scratch, "Usage: --repo <repo> --root <root> --scratch <scratch>");
const repo=path.resolve(args.repo), root=path.resolve(args.root), scratch=path.resolve(args.scratch);
const tooling=path.join(root,"tooling"), evidence=path.join(root,"evidence");
const expected=readJson(path.join(tooling,"EXPECTED-RESULTS.json"));
const browser=readJson(path.join(evidence,"controlled-cutover-browser-rehearsal.json"));
const baseline=readJson(path.join(evidence,"protected-main-baseline.json"));

assert(browser.status==="PASS_CONTROLLED_CUTOVER_REHEARSAL_BROWSER_R1","Browser rehearsal did not pass");
assert(browser.failed===0 && browser.consoleErrors.length===0 && browser.runtimeExceptions.length===0 && browser.networkErrors.length===0,"Browser rehearsal has failures");
assert(currentHead(repo)===expected.requiredStartingHead,"Main HEAD changed during rehearsal");
assert(latestSubject(repo)===expected.requiredStartingSubject,"Main subject changed during rehearsal");

for(const item of baseline.protectedPaths){
  const target=path.join(repo,item.path);
  if(item.missing){assert(!fs.existsSync(target),`Previously missing protected path now exists: ${item.path}`);continue;}
  if(item.type==="file") assert(fileHash(target)===item.sha256,`Protected file changed: ${item.path}`);
  else assert(runGit(repo,["ls-files","-s","--",item.path])===item.gitIndexDigest,`Protected tree changed: ${item.path}`);
}

if (fs.existsSync(scratch)) assert(cleanStatus(scratch)==="", "Scratch worktree is not clean before removal");
if (fs.existsSync(scratch)) {
  const removed=runGitResult(repo,["worktree","remove","--force",scratch]);
  assert(removed.status===0,`worktree remove failed: ${removed.stderr}`);
}
runGitResult(repo,["worktree","prune"]);
assert(!fs.existsSync(scratch),"Scratch worktree still exists after successful removal");

const summary={
  status:"PASS_CONTROLLED_HUMAN_RUNTIME_CUTOVER_REHEARSAL_R1",
  contentVersion:expected.contentVersion,
  rehearsalPhases:expected.rehearsalPhases,
  browserStatus:browser.status,
  browserTestsPassed:browser.passed,
  generatedV2BaselinePassed:true,
  humanDefaultPassed:true,
  generatedV2QueryRollbackPassed:true,
  v1QueryRollbackPassed:true,
  originalLoaderRestored:true,
  restoredGeneratedV2Passed:true,
  restoredV1RollbackPassed:true,
  temporaryWorktreeRemoved:true,
  protectedMainPathsUnchanged:true,
  productionActivationAllowed:false,
  studentRouteChangeAllowed:false,
  oldDatabaseDeletionAllowed:false,
  mergeAllowed:false,
  nextAuthorizedStage:expected.nextAuthorizedStage,
  issues:[]
};
writeJson(path.join(evidence,"controlled-cutover-rehearsal-r1-summary.json"),summary);

const evidenceFiles=collectFiles(evidence).filter(file=>!file.endsWith("cutover-rehearsal-evidence-sha256.json"));
writeJson(path.join(root,"cutover-rehearsal-evidence-sha256.json"),{
  schemaVersion:"math-v2-controlled-cutover-rehearsal-evidence-r1",
  files:fileManifest(root,evidenceFiles)
});

console.log(JSON.stringify(summary,null,2));
