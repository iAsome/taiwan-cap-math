import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
const dir = path.dirname(fileURLToPath(import.meta.url));
const file = path.join(dir, "verify-v2-u06-pack.mjs");
let v = fs.readFileSync(file, "utf8");
v = v.replace("  hasU05BannedText,", "  findU05BannedPhrase,");
const block = `
const U06_SC_BANNED = ["赞", "反对", "弃权"];
const INVERSE_SKILLS = new Set(["inverse-variation", "inverse-variation-graph"]);
function hasU05BannedLocal(textOrArray) {
  const parts = Array.isArray(textOrArray) ? textOrArray : [textOrArray];
  for (const part of parts) {
    const hit = findU05BannedPhrase(part);
    if (hit) return hit;
  }
  return null;
}
function hasU06ScBanned(text) {
  if (typeof text !== "string") return null;
  for (const p of U06_SC_BANNED) if (text.includes(p)) return p;
  if (/几/.test(text)) return "几";
  if (/总/.test(text) && !/總/.test(text)) return "总";
  return null;
}
`;
v = v.replace("const U06_EXTRA_BANNED = [", block + "const U06_EXTRA_BANNED = [");
v = v.replace(/const U06_EXTRA_BANNED = \[[\s\S]*?\];/, `const U06_EXTRA_BANNED = ${JSON.stringify([
  "與計算結果不符","應排除","計算過程要逐步核對","避免混淆比例關係",
  "依題意列出比例式","此題考查比例概念","解題時先化簡比","複合比例分兩步",
  "圖形概念以文字描","，常見於未先化簡或列式錯誤","常見於未先化簡或列式錯誤",
  "講義例題要先把條件寫成比例式","反比關係乘積固定"
], null, 2)};`);
v = v.replace("function hasU06Banned(textOrArray) {", "function hasU06Banned(textOrArray, skillId) {");
v = v.replace("    const u05 = hasU05BannedText(part);", "    const u05 = hasU05BannedLocal(part);");
v = v.replace(
  `    for (const p of U06_EXTRA_BANNED) {
      if (part.includes(p)) return p;
    }`,
  `    for (const p of U06_EXTRA_BANNED) {
      if (p === "反比關係乘積固定" && skillId && INVERSE_SKILLS.has(skillId)) continue;
      if (part.includes(p)) return p;
    }
    const sc = hasU06ScBanned(part);
    if (sc) return \`SC: \${sc}\`;`
);
v = v.replace(
  "  const ban = hasU06Banned([q.explanation, q.text, ...q.steps, q.commonMistake, q.concept, ...q.choices]);",
  "  const ban = hasU06Banned([q.explanation, q.text, ...q.steps, q.commonMistake, q.concept, ...q.choices], q.skillId);"
);
v = v.replace(
  "  const ban = hasU06Banned([l.concept, l.formula, ...l.stepGuide, ...l.commonMistakes, ...l.examples.flatMap(e => [e.question, e.explanation])]);",
  "  const ban = hasU06Banned([l.concept, l.formula, ...l.stepGuide, ...l.commonMistakes, ...l.examples.flatMap(e => [e.question, e.explanation])], l.skillId);"
);
fs.writeFileSync(file, v);
console.log("ok", v.includes("hasU05BannedLocal"));
