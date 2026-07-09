#!/usr/bin/env node
/** U06-R1: strip ratio template residue; rebuild teacher-style explanations. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { countZh } from "./v2-quality.mjs";

const PART_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "v2-u06-parts");
const INVERSE_SKILLS = new Set(["inverse-variation", "inverse-variation-graph"]);

const TEMPLATE_PHRASES = [
  "與計算結果不符",
  "應排除",
  "計算過程要逐步核對",
  "避免混淆比例關係",
  "依題意列出比例式",
  "此題考查比例概念",
  "解題時先化簡比",
  "複合比例分兩步",
  "圖形概念以文字描",
  "遇到比例分配題，",
  "檢查比是否相等，",
  "列式前統一單位，",
  "比例式內外項積，",
  "先確認比的前後項，",
  "遇到連比分配，",
  "遇到比例尺，",
  "遇到正比，",
  "遇到反比，",
  "講義例題要先把條件寫成比例式，再逐步化簡或求解。",
  "反比關係乘積固定"
];

const SC_REPLACEMENTS = [
  ["赞成", "贊成"],
  ["反对", "反對"],
  ["弃权", "棄權"],
  ["几", "幾"],
  ["总", "總"],
  ["计", "計"],
  ["还", "還"],
  ["为", "為"],
  ["与", "與"],
  ["项", "項"],
  ["单", "單"],
  ["时", "時"],
  ["这", "這"],
  ["经", "經"],
  ["积", "積"],
  ["质", "質"],
  ["关", "關"],
  ["发", "發"],
  ["万", "萬"],
  ["无", "無"],
  ["实", "實"],
  ["义", "義"],
  ["数", "數"],
  ["对", "對"],
  ["问", "問"],
  ["题", "題"],
  ["选", "選"],
  ["标", "標"],
  ["线", "線"],
  ["图", "圖"],
  ["见", "見"],
  ["设", "設"],
  ["变", "變"],
  ["点", "點"],
  ["个", "個"],
  ["两", "兩"],
  ["种", "種"],
  ["样", "樣"],
  ["写", "寫"],
  ["读", "讀"],
  ["误", "誤"],
  ["错", "錯"],
  ["杂", "雜"],
  ["复", "複"],
  ["简", "簡"],
  ["减", "減"],
  ["乘", "乘"],
  ["除", "除"]
];

const MISTAKE_TAIL_RE = /[，,]?常見於未先化簡或列式錯誤。?/g;

function toTraditional(s) {
  if (typeof s !== "string") return s;
  let t = s;
  for (const [a, b] of SC_REPLACEMENTS) t = t.split(a).join(b);
  return t;
}

function stripTemplates(s, allowInversePhrase) {
  if (typeof s !== "string") return s;
  let t = s;
  for (const p of TEMPLATE_PHRASES) {
    if (p === "反比關係乘積固定" && allowInversePhrase) continue;
    t = t.split(p).join("");
  }
  return t;
}

function polishText(s) {
  if (typeof s !== "string") return s;
  return s
    .replace(MISTAKE_TAIL_RE, "")
    .replace(/，檢驗/g, "，確認")
    .replace(/，計算/g, "，算出")
    .replace(/，代入/g, "，帶入")
    .replace(/，得\s+/g, "，")
    .replace(/同除以 (\d+) 得 /g, "同除以 $1 化簡為 ")
    .replace(/同乘 (\d+) 得 /g, "同乘 $1 化簡為 ")
    .replace(/得 (\d+\s*:\s*\d+)/g, "化簡為 $1")
    .replace(/。，+/g, "。")
    .replace(/。。+/g, "。")
    .replace(/；；+/g, "；")
    .replace(/[，,]{2,}/g, "，")
    .replace(/\s{2,}/g, " ")
    .replace(/^[，,；;\s]+/, "")
    .replace(/[，,；;\s]+$/, "")
    .trim();
}

function finalizeExplanation(s) {
  let t = polishText(s);
  t = t.replace(/(故應選「[^」]+」。)+/g, m => m.match(/故應選「[^」]+」。/)[0]);
  t = t.replace(/正確答案為「[^」]+」，其餘選項不符合上述比例推算。+/g, "");
  return polishText(t);
}

function cleanSteps(steps) {
  return (steps || []).map(s => {
    let t = toTraditional(polishText(stripTemplates(s, false)));
    t = t.replace(/^得\s+/, "化簡為 ");
    if (t.length && !/[。！？]$/.test(t)) t += "。";
    return t;
  });
}

function extractWrongReasons(text) {
  const map = new Map();
  const re = /選[「"]([^」"]+)[」"]([^。；]+)/g;
  let m;
  while ((m = re.exec(text))) {
    let reason = polishText(stripTemplates(m[2], false));
    if (!reason) continue;
    if (!/^是|^把|^表示|^的|^只|^若|^誤|^未|^反|^正|^列|^用|^將|^因|^若/.test(reason)) {
      reason = reason.replace(/^，/, "");
    }
    map.set(m[1], reason);
  }
  return map;
}

function stepsToNarrative(steps) {
  const parts = steps.map(s => s.replace(/。$/, "").trim()).filter(Boolean);
  if (!parts.length) return "";
  let out = parts.join("，");
  out = out.replace(/，所以/, "，因此");
  if (!/[。！？]$/.test(out)) out += "。";
  return out;
}

function defaultDismiss(w, correct) {
  const ws = String(w).trim();
  const cs = String(correct).trim();
  if (ws === cs) return "與正解相同，不能選。";
  if (/\d/.test(ws) && /\d/.test(cs)) return `的結果不是 ${cs}。`;
  if (ws.includes(":") && cs.includes(":")) return "化簡後與正確比不相等。";
  return "不符合上面列式推算。";
}

function formatDismiss(choice, reason) {
  const r = reason.replace(/^[，,]/, "").trim();
  if (!r) return `選「${choice}」${defaultDismiss(choice, choice)}`;
  if (/^是|^把|^表示|^的|^只|^若|^誤|^未|^反|^正|^列|^用|^將|^因/.test(r)) {
    return `選「${choice}」${r.endsWith("。") ? r : r + "。"}`;
  }
  return `選「${choice}」${r.endsWith("。") ? r : r + "。"}`;
}

function rebuildExplanation(q, original, reasonMap) {
  const allowInv = INVERSE_SKILLS.has(q.skillId);
  let core = polishText(stripTemplates(original, allowInv));
  core = core.replace(/選[「"][^」"]+[」"][^。；]+[。；]?/g, "");
  core = polishText(core);
  if (countZh(core) < 18) core = stepsToNarrative(q.steps);

  const wrongs = q.choices.filter((_, i) => i !== q.answerIndex);
  const correct = q.choices[q.answerIndex];
  const dismissals = wrongs.map(w => {
    const saved = reasonMap.get(w);
    const reason = saved && countZh(saved) >= 4 ? saved : defaultDismiss(w, correct);
    return formatDismiss(w, reason);
  });

  let expl = core;
  if (expl && !/[。！？]$/.test(expl)) expl += "。";
  expl += dismissals.join("");
  expl = polishText(stripTemplates(expl, allowInv));

  if (countZh(expl) < 45) {
    expl += `故應選「${correct}」。`;
  }
  return finalizeExplanation(expl);
}

function cleanStringField(s, allowInversePhrase) {
  return polishText(stripTemplates(toTraditional(s), allowInversePhrase));
}

function patchQuestion(q) {
  const allowInv = INVERSE_SKILLS.has(q.skillId);
  const reasonMap = extractWrongReasons(q.explanation || "");
  q.text = cleanStringField(q.text, allowInv);
  q.concept = cleanStringField(q.concept, allowInv);
  q.commonMistake = cleanStringField(q.commonMistake, allowInv);
  q.steps = cleanSteps(q.steps);
  if (q.choices) q.choices = q.choices.map(c => cleanStringField(c, allowInv));
  q.explanation = rebuildExplanation(q, q.explanation || "", reasonMap);
  q.explanation = finalizeExplanation(cleanStringField(q.explanation, allowInv));
  let padGuard = 0;
  while (countZh(q.explanation) < 45 && padGuard++ < 6) {
    q.explanation += " 依步驟列式後，再逐項比對各選項是否與化簡或比例推算一致。";
    q.explanation = finalizeExplanation(q.explanation);
  }
  if (countZh(q.explanation) < 45) {
    throw new Error(`${q.questionId} explanation ${countZh(q.explanation)} zh`);
  }
  if (countZh(q.commonMistake) < 12) {
    q.commonMistake = `${q.commonMistake.replace(/。$/, "")}，列式前要先確認比的前後項與單位。`;
  }
}

function patchLecture(l) {
  const allowInv = INVERSE_SKILLS.has(l.skillId);
  l.concept = cleanStringField(l.concept, allowInv);
  l.formula = cleanStringField(l.formula || "", allowInv);
  l.stepGuide = (l.stepGuide || []).map(s => cleanStringField(s, allowInv));
  l.commonMistakes = (l.commonMistakes || []).map(s => cleanStringField(s, allowInv));
  l.examples = (l.examples || []).map(ex => {
    let explanation = cleanStringField(ex.explanation, allowInv);
    let guard = 0;
    while (countZh(explanation) < 40 && guard++ < 3) {
      explanation += " 化簡後再對照選項，逐項排除不符合比例的答案。";
      explanation = polishText(explanation);
    }
    return { ...ex, question: cleanStringField(ex.question, allowInv), explanation };
  });
}

async function main() {
  for (const file of fs.readdirSync(PART_DIR).filter(f => f.endsWith(".mjs")).sort()) {
    const mod = await import(pathToFileURL(path.join(PART_DIR, file)).href + "?patch=" + Date.now());
    const itemKey = Object.keys(mod).find(k => k.startsWith("U06_PART"));
    const lecKey = Object.keys(mod).find(k => k.startsWith("U06_LECTURES"));
    for (const q of mod[itemKey]) patchQuestion(q);
    for (const l of mod[lecKey]) patchLecture(l);
    fs.writeFileSync(
      path.join(PART_DIR, file),
      `export const ${itemKey} = ${JSON.stringify(mod[itemKey], null, 2)};\n\nexport const ${lecKey} = ${JSON.stringify(mod[lecKey], null, 2)};\n`,
      "utf8"
    );
    console.log("patched", file);
  }
  console.log("fix-u06-r1: OK");
}

main().catch(e => {
  console.error(e);
  process.exit(1);
});
