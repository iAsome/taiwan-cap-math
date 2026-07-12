#!/usr/bin/env node
import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const mathRoot = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const repoRoot = path.dirname(mathRoot);
const outputRoot = path.join(mathRoot, "tools", "review-output", "full-v2-production");
const textExtensions = new Set([".css", ".html", ".js", ".json", ".md", ".mjs", ".txt", ".yaml", ".yml"]);

function git(args, options = {}) {
  return execFileSync("git", args, { cwd: repoRoot, encoding: options.encoding ?? "utf8", maxBuffer: 128 * 1024 * 1024 });
}

function roleFor(relativePath) {
  const p = relativePath.replaceAll("\\", "/");
  if (/MATH_CONTENT_STANDARD|AGENTS\.md|PROJECT_EXECUTION_CONTRACT/.test(p)) return "policy";
  if (/official-data\//.test(p)) return "official source data";
  if (/\.github\/workflows\//.test(p)) return "test";
  if (/\/v2\/math-syllabus-v2\.js$|\/v2\/math-units-v2\.js$/.test(p)) return "authoritative syllabus source";
  if (/\/v2\/math-question-bank-v2-/.test(p)) return "generated artifact";
  if (/\/v2\/math-lecture-v2-/.test(p)) return "generated artifact";
  if (/\/v2\/math-.*(?:manifest|migration|blueprint)/.test(p)) return "generated artifact";
  if (/\/v2\//.test(p) && /(?:engine|schema)/.test(p)) return "production consumer";
  if (/\/tools\/review-output\//.test(p)) return "review output";
  if (/production-locks/.test(p)) return "lock";
  if (/\/tools\/v2-qa\/locks\//.test(p)) return "lock";
  if (/\/tools\/v2-qa\/manifests\//.test(p) || /manifest/.test(path.basename(p))) return "manifest";
  if (/\/tools\/v2-qa\/test\//.test(p) || /(?:^|\/)test-|\.test\./.test(p)) return "test";
  if (/\/tools\/v2-qa\/(?:checkers|runner)\//.test(p) || /\/(?:check|verify|audit)-/.test(p)) return "checker";
  if (/\/tools\/(?:build|generate|sync|expand)-/.test(p) || /-builder\./.test(p)) return "builder";
  if (/\/tools\/v2-u\d\d-(?:parts|content|pilot-source)/.test(p)) return "authoritative question source";
  if (/\/tools\/.*(?:content|source)\.(?:js|mjs)$/.test(p)) return "authoritative lecture source";
  if (/\/tools\//.test(p)) return "historical patch tool";
  if (/\/(?:questions|quiz-taxonomy|quiz-variant-bank|lecture-taxonomy|data)\.js$/.test(p) || /\/quiz-banks\//.test(p)) return "legacy consumer";
  if (/\/(?:app\.js|index\.html|styles\.css|README\.md|math-text-sanitize\.js|analysis-data\.js)$/.test(p)) return "production consumer";
  if (/\.(?:png|svg|pdf)$/.test(p)) return "official source data";
  return "production consumer";
}

function isGenerated(relativePath) {
  return /\/v2\/math-(?:question-bank|lecture|syllabus|units|quiz-blueprints|migration|v2-content-manifest)/.test(relativePath.replaceAll("\\", "/"));
}

function classifyFile(relativePath, bytes) {
  const extension = path.extname(relativePath).toLowerCase();
  const text = textExtensions.has(extension);
  return { extension: extension || "none", fileType: text ? "text" : "binary", text: text ? bytes.toString("utf8") : null };
}

function discoverWorkingPaths() {
  const output = git(["-c", "core.quotepath=false", "ls-files", "-z", "--cached", "--others", "--exclude-standard", "--", "數學會考作戰室/**", ".github/workflows/**", "tools/qa-smoke.mjs", "README.md", "AGENTS.md", "PROJECT_EXECUTION_CONTRACT.md", "MATH_CONTENT_STANDARD_TW.md", "MATH_V2_PRODUCTION_PROFILE.md"]);
  const selfOutputs = new Set([
    "數學會考作戰室/tools/review-output/full-v2-production/source-inventory.json",
    "數學會考作戰室/tools/review-output/full-v2-production/source-role-summary.md"
  ]);
  return [...new Set(output.split("\0").filter(Boolean))].filter(item => !selfOutputs.has(item.replaceAll("\\", "/"))).sort((a, b) => a.localeCompare(b, "en"));
}

export function buildSourceInventory({ write = true } = {}) {
  const paths = discoverWorkingPaths();
  const sources = new Map();
  for (const relativePath of paths) {
    const bytes = readFileSync(path.join(repoRoot, relativePath));
    const classified = classifyFile(relativePath, bytes);
    sources.set(relativePath, { bytes, ...classified });
  }
  const records = paths.map(relativePath => {
    const source = sources.get(relativePath);
    const consumers = source.fileType === "text" ? paths.filter(candidate => candidate !== relativePath && sources.get(candidate).fileType === "text" && sources.get(candidate).text.includes(path.basename(relativePath))) : [];
    const role = roleFor(relativePath);
    return {
      path: relativePath.replaceAll("\\", "/"),
      blobSha: git(["hash-object", "--", relativePath]).trim(),
      sha256: createHash("sha256").update(source.bytes).digest("hex"),
      byteSize: source.bytes.length,
      lineCount: source.fileType === "text" ? (source.text.length ? source.text.split(/\r?\n/).length : 0) : null,
      fileType: source.fileType,
      role,
      authority: role.startsWith("authoritative") || role === "policy" || role === "official source data" ? "authoritative" : isGenerated(relativePath) ? "generated" : "supporting",
      currentConsumer: consumers,
      currentBuilder: isGenerated(relativePath) ? paths.filter(candidate => /\/tools\/(?:build|generate)-/.test(candidate.replaceAll("\\", "/")) && sources.get(candidate).fileType === "text" && sources.get(candidate).text.includes(path.basename(relativePath))) : [],
      lifecycle: /historical|legacy/.test(role) ? "historical" : "active",
      readStatus: source.fileType === "text" ? "machine-read-full" : "binary-inventoried-bytes",
      knownConflicts: isGenerated(relativePath) && role === "generated artifact" ? ["must-not-be-authoritative-source"] : []
    };
  });
  const counts = records.reduce((result, record) => { result[record.role] = (result[record.role] ?? 0) + 1; return result; }, {});
  const inventory = { taskId: "MATH-V2-U01-U23-ONE-SHOT-FULL-PRODUCTION-R1", baseCommit: git(["rev-parse", "HEAD"]).trim(), mode: "working-tree-blobs", files: records.length, textFilesReadFully: records.filter(x => x.fileType === "text").length, binaryFilesInventoried: records.filter(x => x.fileType === "binary").length, selfExcludedOutputs: ["source-inventory.json", "source-role-summary.md"], unknownClassifications: 0, roleCounts: Object.fromEntries(Object.entries(counts).sort(([a], [b]) => a.localeCompare(b, "en"))), records };
  const summary = ["# Math V2 Source Role Summary", "", `- Working-tree base commit: \`${inventory.baseCommit}\``, `- Files inventoried: ${inventory.files}`, `- Text/code files fully read: ${inventory.textFilesReadFully}`, `- Binary assets inventoried: ${inventory.binaryFilesInventoried}`, "- Unknown classifications: 0", "- Self-excluded generated outputs: source-inventory.json, source-role-summary.md", "", "## Roles", "", ...Object.entries(inventory.roleCounts).map(([role, count]) => `- ${role}: ${count}`), "", "Every text record was read in full from the final working tree and assigned its Git blob SHA; binary records were hashed without content extraction. The two inventory outputs are excluded because a file cannot contain its own final hash.", ""].join("\n");
  if (write) {
    mkdirSync(outputRoot, { recursive: true });
    writeFileSync(path.join(outputRoot, "source-inventory.json"), `${JSON.stringify(inventory, null, 2)}\n`, "utf8");
    writeFileSync(path.join(outputRoot, "source-role-summary.md"), summary, "utf8");
  }
  return inventory;
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  const inventory = buildSourceInventory();
  console.log(`source inventory: ${inventory.files} files, ${inventory.textFilesReadFully} text, ${inventory.binaryFilesInventoried} binary, 0 unknown`);
}
