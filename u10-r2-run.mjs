#!/usr/bin/env node
import { execSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repo = path.dirname(fileURLToPath(import.meta.url));
const math = path.join(repo, "數學會考作戰室");

execSync("git checkout -f math-v2/u10-polynomial-formulas", { cwd: repo, stdio: "inherit" });

execSync("node tools/u10-r2-apply.mjs", { cwd: math, stdio: "inherit" });

const verifyPath = path.join(math, "tools/verify-v2-u10-pack.mjs");
let verify = fs.readFileSync(verifyPath, "utf8");
const R2_BANS = [
  "只有字母與指數完全相同的項才能合併",
  "合併時字母與指數不變，只動係數",
  "交叉相乘四項都要寫出，再合併同類項",
  "二項式展開要四項相乘再合併同類項",
];
for (const b of R2_BANS) {
  if (!verify.includes(`"${b}"`)) {
    verify = verify.replace(
      '"整理時把同次項分組，較不容易漏項或合併錯",',
      `"整理時把同次項分組，較不容易漏項或合併錯",\n  "${b}",`
    );
  }
}
fs.writeFileSync(verifyPath, verify);

execSync("node tools/v2-u10-generate-all.mjs", { cwd: math, stdio: "inherit" });
execSync("node tools/build-u10-pack.mjs", { cwd: math, stdio: "inherit" });
execSync("node tools/verify-v2-u10-pack.mjs", { cwd: math, stdio: "inherit" });
execSync("node tools/verify-chapter-quizzes.js", { cwd: math, stdio: "inherit" });
execSync("node tools/print-v2-u10-samples.mjs", { cwd: math, stdio: "inherit" });
console.log("u10-r2-run: complete");
