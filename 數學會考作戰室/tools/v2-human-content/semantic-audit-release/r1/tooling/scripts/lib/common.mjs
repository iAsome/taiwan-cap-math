import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { execFileSync, spawnSync } from "node:child_process";

export const readJson = file => JSON.parse(fs.readFileSync(file, "utf8"));
export const writeJson = (file, value) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(value, null, 2) + "\n", "utf8");
};
export const assert = (condition, message) => { if (!condition) throw new Error(message); };
export const sha256 = bytes => crypto.createHash("sha256").update(bytes).digest("hex");
export const fileSha256 = file => sha256(fs.readFileSync(file));
export const runGit = (repo, args, encoding = "utf8") =>
  execFileSync("git", ["-c", "core.quotepath=false", ...args], { cwd: repo, encoding }).trim();
export const runGitResult = (repo, args) => {
  const result = spawnSync("git", ["-c", "core.quotepath=false", ...args], { cwd: repo, encoding: "utf8" });
  return { status: result.status, stdout: result.stdout || "", stderr: result.stderr || "" };
};
export const parseArgs = argv => {
  const out = {};
  for (let index = 0; index < argv.length; index++) {
    const token = argv[index];
    if (!token.startsWith("--")) continue;
    const key = token.slice(2);
    const next = argv[index + 1];
    if (next && !next.startsWith("--")) { out[key] = next; index++; }
    else out[key] = true;
  }
  return out;
};
function stableValue(value) {
  if (Array.isArray(value)) return value.map(stableValue);
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map(key => [key, stableValue(value[key])]));
  }
  return value;
}
export const canonicalHash = object => {
  const copy = structuredClone(object);
  delete copy.contentSha256;
  return sha256(Buffer.from(JSON.stringify(stableValue(copy)), "utf8"));
};
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
export const normalize = value => value.split(path.sep).join("/");
