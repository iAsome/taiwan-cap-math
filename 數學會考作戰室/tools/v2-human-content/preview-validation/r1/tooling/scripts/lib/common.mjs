import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { execFileSync } from "node:child_process";

export const sha256 = buffer => crypto.createHash("sha256").update(buffer).digest("hex");
export const gitBlobSha = buffer => crypto.createHash("sha1").update(Buffer.from(`blob ${buffer.length}\0`)).update(buffer).digest("hex");
export const readJson = file => JSON.parse(fs.readFileSync(file, "utf8"));
export const writeJson = (file, value) => {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, JSON.stringify(value, null, 2) + "\n", "utf8");
};
export const normalize = value => value.split(path.sep).join("/");
export const repoRelative = (repo, file) => normalize(path.relative(repo, file));
export const runGit = (repo, args) => execFileSync("git", args, { cwd: repo, encoding: "utf8" }).trim();
export const collectFiles = root => {
  const out = [];
  const visit = current => {
    if (!fs.existsSync(current)) return;
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) visit(full);
      else if (entry.isFile()) out.push(full);
    }
  };
  visit(root);
  return out.sort();
};
export const fileRecord = (root, file) => {
  const bytes = fs.readFileSync(file);
  return { path: normalize(path.relative(root, file)), bytes: bytes.length, sha256: sha256(bytes) };
};
export const assert = (condition, message) => { if (!condition) throw new Error(message); };
export const parseArgs = argv => {
  const out = {};
  for (let i = 0; i < argv.length; i++) {
    const token = argv[i];
    if (!token.startsWith("--")) continue;
    const key = token.slice(2);
    const next = argv[i + 1];
    if (next && !next.startsWith("--")) { out[key] = next; i++; }
    else out[key] = true;
  }
  return out;
};
export const treeDigest = (root, paths) => {
  const records = [];
  for (const item of paths) {
    const target = path.resolve(root, item);
    if (!fs.existsSync(target)) {
      records.push({ path: normalize(item), missing: true });
      continue;
    }
    const stat = fs.statSync(target);
    if (stat.isFile()) {
      const data = fs.readFileSync(target);
      records.push({ path: normalize(item), bytes: data.length, sha256: sha256(data) });
    } else {
      for (const file of collectFiles(target)) {
        const data = fs.readFileSync(file);
        records.push({ path: repoRelative(root, file), bytes: data.length, sha256: sha256(data) });
      }
    }
  }
  records.sort((a, b) => a.path.localeCompare(b.path));
  const digest = sha256(Buffer.from(records.map(record => JSON.stringify(record)).join("\n"), "utf8"));
  return { fileCount: records.filter(record => !record.missing).length, missingCount: records.filter(record => record.missing).length, sha256: digest };
};
