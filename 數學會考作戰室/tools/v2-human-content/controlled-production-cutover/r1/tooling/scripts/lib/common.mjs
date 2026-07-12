import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { execFileSync, spawnSync } from "node:child_process";

export const sha256 = value => crypto.createHash("sha256").update(value).digest("hex");
export const fileHash = file => sha256(fs.readFileSync(file));
export const readJson = file => JSON.parse(fs.readFileSync(file, "utf8"));
export const writeJson = (file, value) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(value, null, 2) + "\n", "utf8");
};
export const assert = (condition, message) => { if (!condition) throw new Error(message); };
export const parseArgs = argv => {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (!token.startsWith("--")) continue;
    const key = token.slice(2), next = argv[i + 1];
    if (next && !next.startsWith("--")) { out[key] = next; i++; }
    else out[key] = true;
  }
  return out;
};
export const runGit = (repo, args, encoding = "utf8") =>
  execFileSync("git", ["-c", "core.quotepath=false", ...args], { cwd: repo, encoding }).trim();
export const runGitResult = (repo, args) => {
  const result = spawnSync("git", ["-c", "core.quotepath=false", ...args], { cwd: repo, encoding: "utf8" });
  return { status: result.status, stdout: result.stdout || "", stderr: result.stderr || "" };
};
export const normalize = value => value.split(path.sep).join("/");
export const collectFiles = root => {
  const files = [];
  const walk = current => {
    if (!fs.existsSync(current)) return;
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) walk(full);
      else if (entry.isFile()) files.push(full);
    }
  };
  walk(root);
  return files.sort();
};
export const fileManifest = (root, files) => files.map(file => {
  const bytes = fs.readFileSync(file);
  return { path: normalize(path.relative(root, file)), bytes: bytes.length, sha256: sha256(bytes) };
}).sort((a, b) => a.path.localeCompare(b.path));
export const statusPaths = repo => runGit(repo, ["status", "--short", "--untracked-files=all"])
  .split(/\r?\n/).filter(Boolean).map(line => line.replace(/^..\s*/, "").trim().replaceAll("\\", "/"));
