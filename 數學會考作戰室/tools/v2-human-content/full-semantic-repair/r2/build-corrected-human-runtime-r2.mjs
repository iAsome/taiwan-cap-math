#!/usr/bin/env node
"use strict";

import crypto from "node:crypto";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const AUTHORITY = "CHATGPT_HUMAN_AUTHORED_R1";
const MANIFEST_SCHEMA = "math-v2-human-runtime-production-content-semantic-hotfix-r1";
const UNIT_SCHEMA = "math-v2-human-runtime-production-unit-r1";
const EXPECTED = { units: 23, skills: 339, lectures: 339, mc: 4068, cr: 678, figures: 178 };

const sha = bytes => crypto.createHash("sha256").update(bytes).digest("hex");
const readJson = file => JSON.parse(fs.readFileSync(file, "utf8"));
const writeJson = (file, value) => fs.writeFileSync(file, `${JSON.stringify(value, null, 2)}\n`, "utf8");
const posix = file => file.split(path.sep).join("/");
const arg = (args, name) => {
  const index = args.indexOf(name);
  return index >= 0 ? args[index + 1] : null;
};

function filesUnder(root) {
  const result = [];
  const stack = [root];
  while (stack.length) {
    const current = stack.pop();
    if (!fs.existsSync(current)) continue;
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const item = path.join(current, entry.name);
      if (entry.isDirectory()) stack.push(item);
      else result.push(item);
    }
  }
  return result.sort((a, b) => posix(path.relative(root, a)).localeCompare(posix(path.relative(root, b)), "en"));
}

function cleanGeneratedSubtree(outputRoot, name) {
  const resolvedRoot = path.resolve(outputRoot);
  const target = path.resolve(resolvedRoot, name);
  if (path.dirname(target) !== resolvedRoot || !["content", "figures"].includes(path.basename(target))) {
    throw new Error(`Refusing to clean unexpected output path: ${target}`);
  }
  fs.rmSync(target, { recursive: true, force: true });
  fs.mkdirSync(target, { recursive: true });
}

function syncRuntimeVersionFiles(outputRoot, contentVersion) {
  const configFile = path.join(outputRoot, "config.mjs");
  const blueprintFile = path.join(outputRoot, "release-blueprint-r1.json");
  const present = [configFile, blueprintFile].filter(fs.existsSync);
  if (!present.length) return [];
  if (present.length !== 2) throw new Error("Runtime config and release blueprint must either both exist or both be absent");

  const config = fs.readFileSync(configFile, "utf8");
  const marker = /expectedContentVersion:\s*"[0-9a-f]{64}"/g;
  if ([...config.matchAll(marker)].length !== 1) throw new Error("Runtime config must contain exactly one expectedContentVersion");
  fs.writeFileSync(configFile, config.replace(marker, `expectedContentVersion: "${contentVersion}"`), "utf8");

  const blueprint = readJson(blueprintFile);
  blueprint.contentVersion = contentVersion;
  writeJson(blueprintFile, blueprint);
  return [configFile, blueprintFile].map(file => {
    const bytes = fs.readFileSync(file);
    return { path: posix(path.relative(outputRoot, file)), bytes: bytes.length, sha256: sha(bytes) };
  });
}

function outputSummary(outputRoot, manifest, runtimeVersionFiles = []) {
  const generatedFiles = ["content", "figures"].flatMap(name => filesUnder(path.join(outputRoot, name)));
  const files = generatedFiles
  .sort((a, b) => posix(path.relative(outputRoot, a)).localeCompare(posix(path.relative(outputRoot, b)), "en"))
  .map(file => {
    const bytes = fs.readFileSync(file);
    return { path: posix(path.relative(outputRoot, file)), bytes: bytes.length, sha256: sha(bytes) };
  });
  const treeSha256 = sha(Buffer.from(files.map(file => `${file.path}\0${file.sha256}`).join("\n")));
  const result = {
    status: "BUILT_CORRECTED_HUMAN_RUNTIME_R2_PENDING_CENTRAL_ACCEPTANCE",
    counts: {
      units: manifest.unitCount,
      skills: manifest.skillCount,
      lectures: manifest.lectureCount,
      mc: manifest.mcQuestionCount,
      cr: manifest.constructedResponseCount,
      figures: manifest.figureCount,
      files: files.length
    },
    contentVersion: manifest.contentVersion,
    manifestSha256: files.find(file => file.path === "content/manifest.json")?.sha256,
    syllabusLockSha256: files.find(file => file.path === "content/syllabus-lock.json")?.sha256,
    treeSha256,
    units: manifest.units.map(unit => ({ unitId: unit.unitId, bytes: unit.bytes, sha256: unit.sha256 })),
    files
  };
  if (runtimeVersionFiles.length) result.runtimeVersionFiles = runtimeVersionFiles;
  return result;
}

export function buildCorrectedHumanRuntime({ repoRoot, outputRoot, summaryPath = null }) {
  const repo = path.resolve(repoRoot);
  const output = path.resolve(outputRoot);
  const subjectRoot = path.join(repo, "數學會考作戰室");
  const humanRoot = path.join(subjectRoot, "tools", "v2-human-content");
  const previewBuilder = path.join(humanRoot, "global-readiness", "r1", "tooling", "scripts", "build-human-runtime-preview.mjs");
  const lockFile = path.join(humanRoot, "authoring", "authoring-syllabus-lock-r2.json");
  if (!fs.existsSync(previewBuilder) || !fs.existsSync(lockFile)) throw new Error("Controlled preview builder or syllabus lock is missing");

  const previewRoot = fs.mkdtempSync(path.join(os.tmpdir(), "math-v2-runtime-r2-preview-"));
  try {
    execFileSync(process.execPath, [previewBuilder, "--repo", repo, "--output", previewRoot], { cwd: repo, encoding: "utf8" });
    const previewManifest = readJson(path.join(previewRoot, "manifest.json"));
    if (previewManifest.unitCount !== EXPECTED.units || previewManifest.skillCount !== EXPECTED.skills ||
        previewManifest.mcQuestionCount !== EXPECTED.mc || previewManifest.constructedResponseCount !== EXPECTED.cr ||
        previewManifest.figureCount !== EXPECTED.figures) {
      throw new Error(`Preview inventory mismatch: ${JSON.stringify(previewManifest)}`);
    }

    cleanGeneratedSubtree(output, "content");
    cleanGeneratedSubtree(output, "figures");
    fs.mkdirSync(path.join(output, "content", "units"), { recursive: true });

    const units = [];
    let lectureCount = 0;
    for (const entry of previewManifest.units) {
      const unit = readJson(path.join(previewRoot, entry.path));
      delete unit.previewOnly;
      delete unit.productionActivationAllowed;
      unit.schemaVersion = UNIT_SCHEMA;
      unit.productionRuntime = true;
      unit.contentAuthority = AUTHORITY;
      const bytes = Buffer.from(JSON.stringify(unit));
      const target = path.join(output, "content", "units", `${entry.unitId}.json`);
      fs.writeFileSync(target, bytes);
      lectureCount += entry.counts.lectures;
      units.push({ ...entry, path: `units/${entry.unitId}.json`, bytes: bytes.length, sha256: sha(bytes) });
    }
    if (lectureCount !== EXPECTED.lectures) throw new Error(`Lecture count mismatch: ${lectureCount}`);

    const figureIndex = {};
    for (const [figureId, item] of Object.entries(previewManifest.figureIndex || {})) {
      const sourcePath = String(item.sourcePath).replaceAll("\\", "/");
      const source = path.join(repo, ...sourcePath.split("/"));
      if (!fs.existsSync(source)) throw new Error(`Missing source figure ${figureId}: ${sourcePath}`);
      const filename = `${figureId}.svg`;
      const target = path.join(output, "figures", filename);
      fs.copyFileSync(source, target);
      const bytes = fs.readFileSync(target);
      figureIndex[figureId] = {
        ...item,
        sourcePath: `數學會考作戰室/human-runtime/figures/${filename}`,
        bytes: bytes.length,
        sha256: sha(bytes)
      };
    }
    if (Object.keys(figureIndex).length !== EXPECTED.figures) throw new Error(`Figure count mismatch: ${Object.keys(figureIndex).length}`);

    const manifest = {
      schemaVersion: MANIFEST_SCHEMA,
      productionRuntime: true,
      contentAuthority: AUTHORITY,
      contentVersion: previewManifest.contentVersion,
      unitCount: EXPECTED.units,
      skillCount: EXPECTED.skills,
      lectureCount,
      mcQuestionCount: EXPECTED.mc,
      constructedResponseCount: EXPECTED.cr,
      figureCount: EXPECTED.figures,
      units,
      figureIndex
    };
    writeJson(path.join(output, "content", "manifest.json"), manifest);

    let syllabusLock = fs.readFileSync(lockFile, "utf8").replace(/\r\n/g, "\n");
    syllabusLock = syllabusLock.replace(
      "數學會考作戰室/tools/v2-content/syllabus-source.mjs",
      "數學會考作戰室/tools/v2-human-content/authoring/authoring-syllabus-lock-r2.json"
    );
    fs.writeFileSync(path.join(output, "content", "syllabus-lock.json"), syllabusLock, "utf8");

    const runtimeVersionFiles = syncRuntimeVersionFiles(output, manifest.contentVersion);
    const result = outputSummary(output, manifest, runtimeVersionFiles);
    if (summaryPath) writeJson(path.resolve(summaryPath), result);
    return result;
  } finally {
    fs.rmSync(previewRoot, { recursive: true, force: true });
  }
}

const isDirect = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isDirect) {
  const args = process.argv.slice(2);
  const output = arg(args, "--output");
  if (!output) throw new Error("Usage: node build-corrected-human-runtime-r2.mjs --output <directory> [--repo <repository>] [--summary <file>]");
  const result = buildCorrectedHumanRuntime({
    repoRoot: arg(args, "--repo") || process.cwd(),
    outputRoot: output,
    summaryPath: arg(args, "--summary")
  });
  console.log(JSON.stringify({ ...result, files: undefined }, null, 2));
}
