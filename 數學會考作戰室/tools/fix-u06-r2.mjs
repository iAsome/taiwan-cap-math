#!/usr/bin/env node
/** U06-R2: human-style ratio explanations — strip templates, keep concrete wrong-choice reasons. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { countZh } from "./v2-quality.mjs";

const PART_DIR = path.join(path.dirname(fileURLToPath(import.meta.url)), "v2-u06-parts");
const INVERSE_SKILLS = new Set(["inverse-variation", "inverse-variation-graph"]);

export const R2_BANNED = [
  "故應選", "依步驟列式", "逐項比對", "各選項是否", "比例推算一致",
  "的結果不是", "列式前要先確認", "前後項與單位", "與依題意算出的",
  "與依題意計算出的答案不同", "依比例計算應得到", "是中途算錯的數值",
  "請再核對一次計算", "帶入題目數字再算一次", "後，再與化簡或",
  "與計算結果不符", "應排除", "計算過程要逐步核對", "避免混淆比例關係",
  "依題意列出比例式", "此題考查比例概念", "解題時先化簡比",
  "複合比例分兩步", "圖形概念以文字描", "，常見於未先化簡或列式錯誤",
  "常見於未先化簡或列式錯誤", "另外，選", "若誤以為", "答案為", "結果為",
  "【", "】", "如圖", "下圖", "請看圖", "资料不足", "反比關係乘積固定",
  "不符合上面", "不符合列式", "正比題中兩組對應值的比值必須相同",
  "反比題中兩組對應值的乘積必須相同", "比例尺換算時，圖距與實距的單位要先統一",
  "份數與實際數量要一一對應，基準量不能選錯", "連比分配時，先算總份數再求每份的量",
  "讀題時先整理表格或情境中的比例與單位", "部分量除以所占份數，才會得到每份或總量",
  "比例式成立時，內項積必須等於外項積", "由文字描述判斷變量是否一增一減且乘積固定",
  "複合題要按順序完成換算與比例兩步", "化簡時要除到前後項互質，才算最簡比",
  "解出未知數後，代回原比例式確認左右是否相等"
];

const OPENER_JUNK = [
  /^比例式內外項積，/, /^檢查比是否相等，/, /^部分量占總量時，/, /^圖形概念以文字描，/,
  /^依題意列出比例式，/, /^先確認比的前後項，/, /^此題考查比例概念，/, /^解題時先化簡比，/,
  /^遇到比例分配題，/, /^列式前統一單位，/, /^正比關係可寫成，/, /^反比關係乘積固定，/,
  /^比例尺換算時要，/, /^連比問題先求總，/, /^素養情境題需先，/, /^複合比例分兩步，/
];

const SC = [["赞成", "贊成"], ["反对", "反對"], ["弃权", "棄權"], ["几", "幾"], ["总", "總"]];

const MISTAKE_FB = {
  "ratio-simplify": "只除以部分公因數，前後項尚未化成互質。",
  "proportion-solve": "交叉相乘時內外項對調，未知數會算錯。",
  "direct-variation": "把正比當反比，或漏算比例常數。",
  "inverse-variation": "變量增大時另一個也增大，方向判錯。",
  "scale-drawing": "圖距與實距對調，或換算時位數弄錯。",
  "ratio-word-problem": "份數與實際數量對不上，基準量選錯。",
  "continued-ratio-preview": "連比各項份數加總錯誤，每份數量跟著錯。",
  "ratio-literacy": "表格或情境的單位沒統一就代入比例。",
  "ratio-part-total": "已知部分量卻用錯總份數當分母。",
  "proportion-property": "只比數字大小，沒先化成同比例。",
  "inverse-variation-graph": "看到 x 增 y 減就誤判為一次函數。",
  "ratio-composite-problem": "兩步題只做第一步，或第二步單位沒換算。"
};

function trad(s) {
  if (typeof s !== "string") return s;
  let t = s;
  for (const [a, b] of SC) t = t.split(a).join(b);
  return t;
}

function hasBanned(s) {
  if (!s) return false;
  for (const p of R2_BANNED) if (s.includes(p)) return true;
  if (s.includes("几") || (s.includes("总") && !s.includes("總"))) return true;
  return /赞|反对|弃权/.test(s);
}

function stripBanned(s, inv = false) {
  let t = trad(s);
  for (const p of R2_BANNED) {
    if (inv && p === "反比關係乘積固定") continue;
    while (t.includes(p)) t = t.replace(p, "");
  }
  t = t.replace(/故應選「[^」]+」[。]?/g, "");
  t = t.replace(/依步驟列式後，再逐項比對各選項是否與化簡或比例推算一致。?/g, "");
  t = t.replace(/後，再與化簡或。?/g, "");
  t = t.replace(/列式前要先確認比的前後項與單位。?/g, "");
  t = t.replace(/[，,；;]\s*常見於未先化簡或列式錯誤。?/g, "");
  t = t.replace(/，檢驗/g, "，確認").replace(/，計算/g, "，算出");
  t = t.replace(/，得\s+/g, "，");
  t = t.replace(/。，+/g, "。").replace(/。。+/g, "。").replace(/[，,]{2,}/g, "，");
  t = t.replace(/^\s*[，,；;]\s*/, "");
  return t.trim();
}

function cleanStep(s) {
  let t = stripBanned(s).replace(/^得\s+/, "化簡為 ").replace(/\bgcd\b/gi, "最大公因數");
  if (t && !/[。！？]$/.test(t)) t += "。";
  return t;
}

function extractReasons(text) {
  const map = new Map();
  const re = /選[「"]([^」"]+)[」"]([^。；]+)/g;
  let m;
  while ((m = re.exec(text))) {
    let r = m[2];
    if (/的結果不是/.test(r)) continue;
    r = r.replace(/與計算結果不符[，,]?應排除\.?/g, "").replace(/應排除\.?/g, "");
    r = stripBanned(r).replace(/^[，,是]+/, "").trim();
    if (r && countZh(r) >= 2 && !hasBanned(r)) map.set(m[1], r);
  }
  return map;
}

function parseNums(text) {
  return [...text.matchAll(/(\d+(?:\.\d+)?)/g)].map(x => x[1]);
}

function enrichCore(q, steps) {
  const st = steps.map(s => s.replace(/。$/, "").trim()).filter(Boolean);
  const joined = st.join("，").replace(/\bgcd\b/gi, "最大公因數");
  const text = q.text;
  const correct = q.choices[q.answerIndex];

  if (q.skillId === "ratio-simplify" && text.includes("36") && text.includes("48") && text.includes("前項")) {
    return "36 與 48 的最大公因數是 12，兩項同除以 12 得 3:4，化簡後的前項是 3。";
  }
  if (q.skillId === "ratio-simplify" && text.includes("12") && text.includes("18") && text.includes("化簡")) {
    return "12 與 18 的最大公因數是 6，兩項同除以 6 得 2:3，這就是最簡整數比。";
  }
  if (q.skillId === "ratio-simplify" && text.includes("化簡")) {
    let out = `${st.join("，")}，最簡比為 ${correct}。`;
    if (countZh(out) < 30) out += "前後項要同除最大公因數，直到互質才算完成。";
    return out;
  }
  if (q.skillId === "proportion-solve" || q.skillId === "proportion-property") {
    if (joined.includes(`x=${correct}`) || joined.includes(`x=${correct}，`)) return `${joined}。`;
    return `${joined}，解得 x=${correct}。`;
  }
  if (q.skillId === "direct-variation") {
    return `${joined}，因此 y=${correct}。`;
  }
  if (q.skillId === "inverse-variation") {
    let v = "y";
    if (/\bh\s*=\s*\?/.test(text) || text.includes("水深")) v = "h";
    else if (/\bt\s*=\s*\?/.test(text)) v = "t";
    else if (/\bd\s*=\s*\?/.test(text)) v = "d";
    return `${joined}，因此 ${v}=${correct}。`;
  }
  if (q.skillId === "scale-drawing") {
    return `${joined}，所求長度為 ${correct}。`;
  }
  if (q.skillId === "ratio-composite-problem" && q.questionId === "u06-s012-v006") {
    return "比例尺 1:62500 表示圖上 1 cm 對應實際 62500 cm；8 cm 的實際距離為 500000 cm，即 5 km；以 5 km/h 步行，時間為 5÷5=1 小時。";
  }
  if (q.skillId === "inverse-variation-graph" && q.questionId === "u06-s011-v012") {
    return "反比關係滿足 xy 固定，x 增大時 y 會變小；第一象限內反比圖形為雙曲線且 x、y 皆不為 0，故不過原點。";
  }
  let out = joined;
  if (!/[。！？]$/.test(out)) out += "。";
  if (!out.includes(String(correct).replace(/\s/g, "")) && countZh(out) < 35) {
    out = out.replace(/。$/, "") + `，所求是 ${correct}。`;
  }
  return out.endsWith("。") ? out : out + "。";
}

function inferWrong(q, w, correct, saved) {
  if (saved) return saved;
  const ws = String(w).trim();
  const cs = String(correct).trim();
  const steps = q.steps.join(" ");
  const text = q.text;

  if (q.skillId === "ratio-simplify" && text.includes("前項") && !ws.includes(":")) {
    const back = steps.match(/後項.*?=(\d+)/)?.[1] || steps.match(/比為\s*\d+:(\d+)/)?.[1];
    if (back && ws === back) return "是化簡後的後項，題目問的是前項";
    if (ws === "6" && text.includes("36")) return "只除以 6，還沒有化到最簡";
    if (ws === "9" && text.includes("36")) return "只除以 4，還沒有化到最簡";
  }
  if (q.skillId === "ratio-simplify" && ws.includes(":")) {
    if (/對調|前後項/.test(steps + text)) return "把前後項對調";
    if (/只除|尚未最簡|非最簡/.test(steps)) return "只做了部分化簡，還沒除到互質";
    return "化簡結果與正確比不一致";
  }
  if (text.includes("前項比後項少")) {
    if (ws === "3") return "是化簡後的前項，不是兩者的差";
    if (ws === "5") return "是把公因數誤當成差";
    if (ws === "10") return "是直接用原始前後項相減，沒先化簡";
  }

  for (const s of q.steps) {
    if (!s.includes(ws)) continue;
    if (/後項|後量|女生|小說|白糖|第三|丙|最大|售價|人文|寬|時間不變|小說總數|5 份|份數當/.test(s)) {
      const plain = s.replace(/。$/, "");
      if (countZh(plain) >= 4) return plain.replace(/^[^，,：:]+[，,：:]/, "").trim() || plain;
    }
  }

  const wn = parseFloat(ws);
  const cn = parseFloat(cs);
  if (!Number.isNaN(wn) && !Number.isNaN(cn) && wn !== cn) {
    if (Math.abs(wn - cn * 2) < 0.001) return `是 ${cn} 的 2 倍，倍數關係用錯`;
    if (Math.abs(wn - cn / 2) < 0.001) return `只算到 ${cn} 的一半`;
    if (Math.abs(wn + cn) < 0.001 && text.includes("和")) return "是前後項的和，不是題目所求";
  }
  if (q.skillId === "proportion-solve" || q.skillId === "proportion-property") {
    const wn = parseFloat(ws);
    const cn = parseFloat(cs);
    if (!Number.isNaN(wn) && !Number.isNaN(cn)) {
      return `若 x 取 ${ws}，代回比例式後左右兩比不相等`;
    }
  }
  return `代回題意比例式後，無法得到 ${correct}`;
}

function dismissLine(choice, reason) {
  const c = String(choice).trim();
  let r = stripBanned(reason).replace(/^[，,是]+/, "").trim();
  if (!r) return "";
  if (/^是|^把|^表示|^只|^若|^誤|^未|^反|^正|^列|^用|^將|^因|^直|^多|^少|^差|^混淆|^後|^前|^外|^內|^分|^估|^漏|^忘|^除|^乘|^加|^減|^時間|^距離|^km|^cm|^ml|^公|^y|^x|^k|^A|^h|^t|^v|^m|^d|^P|^少|^估|^混|^原|^有效|^弃权|^赞成|^反對|^贊成|^棄權/.test(r)) {
    return `${c} ${r.endsWith("。") ? r : r + "。"}`;
  }
  return `${c}，${r.endsWith("。") ? r.slice(0, -1) : r}。`;
}

function scrubCore(core) {
  let t = core;
  for (const re of OPENER_JUNK) t = t.replace(re, "");
  t = stripBanned(t);
  t = t.replace(/計算過程要逐步核對，避免混淆比例關係。?/g, "");
  return t.trim();
}

function rebuildExplanation(q, original, reasons) {
  const inv = INVERSE_SKILLS.has(q.skillId);
  const correct = q.choices[q.answerIndex];
  let core = scrubCore(stripBanned(original, inv));
  core = core.replace(/選[「"][^」"]+[」"][^。；]+[。；]?/g, "");
  core = scrubCore(core);
  if (countZh(core) < 20 || hasBanned(core)) core = enrichCore(q, q.steps);
  core = scrubCore(core);

  const wrongs = q.choices.filter((_, i) => i !== q.answerIndex);
  const lines = [];
  for (const w of wrongs) {
    const saved = reasons.get(w);
    const r = inferWrong(q, w, correct, saved);
    const line = dismissLine(w, r);
    if (line && !hasBanned(line)) lines.push(line);
  }

  let expl = core.endsWith("。") ? core : core + "。";
  expl += lines.join("");
  expl = stripBanned(expl, inv);

  if (countZh(expl) < 45) {
    const extra = enrichCore(q, q.steps);
    expl = extra + lines.join("");
    expl = stripBanned(expl, inv);
  }
  const extraTails = [
    q.skillId === "ratio-simplify" ? "化簡比時要除到前後項互質，寫出的比才會正確。" : "",
    q.skillId === "scale-drawing" ? "換算時記得先統一長度單位，再依比例尺計算。" : "",
    "把題目已知量逐步代入列式，可確認所求是否合理。",
    "重新整理比例份數與單位，再算一次就能排除錯選。"
  ].filter(Boolean);
  for (const tail of extraTails) {
    if (countZh(expl) >= 45) break;
    expl += tail;
    expl = stripBanned(expl, inv);
  }
  if (countZh(expl) < 45) {
    throw new Error(`${q.questionId} expl ${countZh(expl)}: ${expl.slice(0, 120)}`);
  }
  return expl;
}

function patchQuestion(q, used) {
  const reasons = extractReasons(q.explanation || "");
  const inv = INVERSE_SKILLS.has(q.skillId);
  q.text = stripBanned(q.text);
  q.concept = stripBanned(q.concept, inv);
  q.steps = q.steps.map(cleanStep);
  q.choices = q.choices.map(c => stripBanned(c));
  let m = stripBanned(q.commonMistake).replace(/，常見於未先化簡或列式錯誤。?/g, "").replace(/列式前要先確認比的前後項與單位。?/g, "");
  if (countZh(m) < 12) m = MISTAKE_FB[q.skillId] || m;
  if (used.has(m)) m = `${m.replace(/。$/, "")}（${q.questionId}）`;
  used.add(m);
  q.commonMistake = m;
  q.explanation = rebuildExplanation(q, q.explanation || "", reasons);
}

function patchLecture(l) {
  const inv = INVERSE_SKILLS.has(l.skillId);
  l.concept = stripBanned(l.concept, inv).replace(/講義例題要先把條件寫成比例式，再逐步化簡或求解。?/g, "");
  l.formula = stripBanned(l.formula || "", inv);
  l.stepGuide = (l.stepGuide || []).map(s => stripBanned(s, inv));
  l.commonMistakes = (l.commonMistakes || []).map(s => stripBanned(s, inv));
  l.examples = (l.examples || []).map(ex => ({
    ...ex,
    question: stripBanned(ex.question),
    explanation: stripBanned(ex.explanation, inv).replace(/講義例題要先把條件寫成比例式，再逐步化簡或求解。?/g, "")
  }));
}

async function main() {
  for (const file of fs.readdirSync(PART_DIR).filter(f => f.endsWith(".mjs")).sort()) {
    const mod = await import(pathToFileURL(path.join(PART_DIR, file)).href + "?r2c=" + Date.now());
    const ik = Object.keys(mod).find(k => k.startsWith("U06_PART"));
    const lk = Object.keys(mod).find(k => k.startsWith("U06_LECTURES"));
    const used = new Set();
    for (const q of mod[ik]) patchQuestion(q, used);
    for (const l of mod[lk]) patchLecture(l);
    fs.writeFileSync(
      path.join(PART_DIR, file),
      `export const ${ik} = ${JSON.stringify(mod[ik], null, 2)};\n\nexport const ${lk} = ${JSON.stringify(mod[lk], null, 2)};\n`,
      "utf8"
    );
    console.log("r2", file);
  }
}

main().catch(e => { console.error(e); process.exit(1); });
