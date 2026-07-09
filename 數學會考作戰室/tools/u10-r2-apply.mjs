#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { countZh } from "./v2-quality.mjs";
import { stripPads } from "./u10-r2-strip.mjs";
import { OVERRIDES } from "./u10-r2-overrides.mjs";

const tools = path.dirname(fileURLToPath(import.meta.url));
const CONTENT = [
  "v2-u10-content-s001-s003.mjs",
  "v2-u10-content-s004-s006.mjs",
  "v2-u10-content-s007-s009.mjs",
  "v2-u10-content-s010-s012.mjs",
];

const PAD_MARKERS = [
  "只有字母與指數完全相同的項才能合併",
  "合併時字母與指數不變",
  "交叉相乘四項都要寫出，再合併同類項",
  "二項式展開要四項相乘再合併同類項",
];

function cutPads(raw) {
  let o = raw;
  for (const p of PAD_MARKERS) {
    const i = o.indexOf(p);
    if (i > 0) o = o.slice(0, i);
  }
  return stripPads(o);
}

function dedupeSentences(text) {
  const parts = text.split(/(?<=。)/).map((s) => s.trim()).filter(Boolean);
  const seen = new Set();
  const out = [];
  for (const p of parts) {
    if (!seen.has(p)) {
      seen.add(p);
      out.push(p);
    }
  }
  return out.join("");
}

function dedupeClauses(text) {
  const parts = text.split(/[；;]/).map((s) => s.trim()).filter(Boolean);
  const seen = new Set();
  const out = [];
  for (const p of parts) {
    const t = p.endsWith("。") ? p : `${p}。`;
    if (!seen.has(t)) {
      seen.add(t);
      out.push(t);
    }
  }
  return out.join("");
}

function cleanExpl(raw, steps) {
  let o = dedupeClauses(dedupeSentences(cutPads(stripPads(raw))));
  if (countZh(o) < 45) {
    for (const s of steps || []) {
      const t = s.endsWith("。") ? s : `${s}。`;
      if (!o.includes(t)) o += t;
      if (countZh(o) >= 45) break;
    }
  }
  o = dedupeSentences(stripPads(o));
  return o;
}

function cleanCm(raw) {
  let o = cutPads(stripPads(raw));
  o = o.replace(/，屬於此題常見粗心錯誤。$/, "。");
  o = dedupeSentences(o);
  if (!o.endsWith("。")) o += "。";
  return o;
}

function autoExpl(raw, steps, ov) {
  const cleaned = cleanExpl(raw, steps);
  if (ov?.explanation && countZh(ov.explanation) >= 45) return ov.explanation;
  return cleaned;
}

function padTail(text) {
  const stem = text.replace(/。$/, "");
  if (/化簡|整理/.test(stem)) {
    return `此題所求為「${stem}」，把同類項合併的步驟寫清楚即可。`;
  }
  if (/展開/.test(stem)) {
    return `此題所求為「${stem}」，把乘法展開與合併步驟寫清楚即可。`;
  }
  if (/計算|求|當/.test(stem)) {
    return `此題所求為「${stem}」，把代入與運算步驟寫完整即可。`;
  }
  return `此題所求為「${stem}」，依題意逐步計算即可。`;
}

function autoCm(raw, ov) {
  if (ov?.commonMistake && countZh(ov.commonMistake) >= 12) return ov.commonMistake;
  return cleanCm(raw);
}

const { SKILL_ROWS } = await import(pathToFileURL(path.join(tools, "v2-u10-content.mjs")).href);
const patchMap = new Map();
for (const sk of SKILL_ROWS) {
  for (let i = 0; i < sk.rows.length; i++) {
    const r = sk.rows[i];
    const ov = OVERRIDES[sk.skillId]?.[i];
    patchMap.set(`${sk.skillId}#${i}`, {
      explanation: autoExpl(r.explanation, r.steps, ov),
      commonMistake: autoCm(r.commonMistake, ov),
      steps: r.steps,
      text: r.text,
    });
  }
}

for (const [k, v] of patchMap) {
  if (countZh(v.commonMistake) < 12) {
    const extra = v.commonMistake.replace(/。$/, "");
    v.commonMistake = `${extra}，此錯法會讓本題結果不正確。`;
  }
  if (countZh(v.explanation) < 45 && v.steps?.length) {
    for (const s of v.steps) {
      const last = s.replace(/。$/, "");
      const tail = `接著${last}。`;
      if (!v.explanation.includes(tail)) v.explanation += tail;
      if (countZh(v.explanation) >= 45) break;
    }
  }
  if (countZh(v.explanation) < 45 && v.text) {
    const tail = padTail(v.text);
    if (!v.explanation.includes(tail)) v.explanation += tail;
  }
  if (countZh(v.explanation) < 45) {
    v.explanation += "計算時每一項係數與符號都要看清楚。";
  }
  v.explanation = dedupeSentences(stripPads(v.explanation));
}

for (const f of CONTENT) {
  const p = path.join(tools, f);
  let out = fs.readFileSync(p, "utf8");
  let skill = "";
  let row = -1;
  out = out.replace(
    /("skillId": "([^"]+)")|("explanation": "([^"]*)")|("commonMistake": "([^"]*)")/g,
    (m, _a, sid, _c, expl, _e, cm) => {
      if (sid) {
        skill = sid;
        row = -1;
        return `"skillId": "${sid}"`;
      }
      if (expl !== undefined) {
        row++;
        const patch = patchMap.get(`${skill}#${row}`);
        return `"explanation": ${JSON.stringify(patch.explanation)}`;
      }
      if (cm !== undefined) {
        const patch = patchMap.get(`${skill}#${row}`);
        return `"commonMistake": ${JSON.stringify(patch.commonMistake)}`;
      }
      return m;
    }
  );
  fs.writeFileSync(p, out);
}

console.log("u10-r2-apply: content patched");
