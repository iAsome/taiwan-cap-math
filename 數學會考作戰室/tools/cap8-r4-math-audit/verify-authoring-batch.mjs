import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

const here = path.dirname(fileURLToPath(import.meta.url));
const mathDir = path.resolve(here, "../..");
const unitIndex = process.argv.indexOf("--unit");
const unitId = unitIndex >= 0 ? process.argv[unitIndex + 1] : null;
if (!unitId) throw new Error("Usage: node verify-authoring-batch.mjs --unit uXX");
const repairDir = path.join(here, "repairs", unitId);
const ledgerFiles = fs.readdirSync(repairDir).filter(file => file.endsWith(".json")).sort();
const ledgers = ledgerFiles.map(file => JSON.parse(fs.readFileSync(path.join(repairDir, file), "utf8")));
if (!ledgers.length || ledgers.some(ledger => ledger.unitId !== unitId)) {
  throw new Error(`${unitId}: invalid or missing repair ledgers`);
}
const hook = pathToFileURL(path.join(mathDir, "tools/v2-human-content/global-repair/wave-1b/tooling/scripts/windows-posix-relative-hook.mjs")).href;

function run(batchDir, relative, extra = []) {
  const result = spawnSync(process.execPath, ["--import", hook, path.join(batchDir, ...relative.split("/")), ...extra], {
    cwd: batchDir,
    encoding: "utf8"
  });
  let parsed = null;
  try { parsed = JSON.parse(result.stdout.trim()); } catch {}
  return { command: `node ${relative}`, exitCode: result.status, stdout: result.stdout, stderr: result.stderr, parsed };
}

const batches = [...new Set(ledgers.map(ledger => ledger.batch))].sort().map(batch => {
  const batchDir = path.join(mathDir, "tools/v2-human-content/batches", batch);
  const emitterName = fs.existsSync(path.join(batchDir, "importer/emit-unit-modules.mjs"))
    ? "importer/emit-unit-modules.mjs"
    : "importer/emit-skill-module.mjs";
  let source = run(batchDir, "importer/verify-bundle.mjs");
  let stagingSyncEmitter = null;
  if (source.exitCode !== 0 && /forbids staging directory/.test(source.stderr)) {
    source = run(batchDir, "importer/verify-bundle.mjs", ["--expect-staging"]);
  }
  if (source.exitCode !== 0 && /staging parity mismatch/.test(source.stderr)) {
    stagingSyncEmitter = run(batchDir, emitterName);
    if (stagingSyncEmitter.exitCode === 0) source = run(batchDir, "importer/verify-bundle.mjs");
  }
  const stagingPresent = fs.existsSync(path.join(batchDir, "staging"));
  const emitter = source.exitCode === 0
    ? stagingPresent
      ? { command: `node ${emitterName}`, exitCode: 0, stdout: "SKIP_EXISTING_VERIFIED_STAGING", stderr: "", parsed: { skipped: true } }
      : run(batchDir, emitterName)
    : null;
  const emitted = emitter?.exitCode === 0
    ? run(batchDir, "importer/verify-bundle.mjs", batch.startsWith("017-") ? ["--expect-staging"] : [])
    : null;
  const status = (!stagingSyncEmitter || stagingSyncEmitter.exitCode === 0) && source.exitCode === 0 && emitter?.exitCode === 0 && emitted?.exitCode === 0 ? "PASS" : "FAIL";
  return { status, batch, stagingSyncEmitter, source, emitter, emitted };
});
const status = batches.every(batch => batch.status === "PASS") ? "PASS" : "FAIL";
const report = { status, unitId, batches };
fs.writeFileSync(path.join(here, `results/repair-verify-${unitId}.json`), `${JSON.stringify(report, null, 2)}\n`, "utf8");
console.log(JSON.stringify({ status, unitId, batches: batches.map(batch => ({ batch: batch.batch, status: batch.status })) }));
if (status !== "PASS") process.exit(1);
