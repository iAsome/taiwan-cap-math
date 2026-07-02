// Shared helpers for 地科/理化 natural-exam archive tools.
import * as mupdf from "mupdf";
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

export const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
export const years = [106, 107, 108, 109, 110, 111, 112, 113, 114, 115];
export const letterToIndex = { A: 0, B: 1, C: 2, D: 3 };

export const IMAGE_REF_RE = /如圖|如表|圖\(|表\(|圖（|表（|圖所示|示意圖|分布圖|統計圖|曲線圖|地圖|海報|照片|漫畫|影像|截圖|圖中|圖表|表格|座標圖|電路|裝置圖/i;

export const norm = s => s.normalize("NFKC").replace(/\s+/g, "").replace(/[，。、；：「」『』（）()\[\]【】：,.\-—…& ＝]/g, "").toLowerCase();

export function examSections(examText, maxQ = 54) {
  const pageStarts = [...examText.matchAll(/--- page (\d+) ---/g)].map(m => ({ page: +m[1], pos: examText.indexOf(m[0]) }));
  const re = /\n(\d{1,2})\.(\s|[^\d])/g;
  const hits = [];
  let m;
  while ((m = re.exec(examText))) hits.push({ num: +m[1], pos: m.index });
  const sections = [];
  for (let i = 0; i < hits.length; i++) {
    const { num, pos } = hits[i];
    if (num < 1 || num > maxQ) continue;
    const end = hits[i + 1]?.pos ?? examText.length;
    const raw = examText.slice(pos, end).trim();
    if (!/\([A-D]\)/.test(raw)) continue;
    const choices = [];
    for (const cm of raw.matchAll(/\([A-D]\)\s*([^\n(]*)/g)) choices.push(cm[1].trim());
    if (choices.length !== 4) continue;
    let stem = raw.replace(/^\d+\.\s*/, "").replace(/\([A-D]\)[\s\S]*/, "").trim();
    stem = stem.replace(/\n{3,}/g, "\n\n");
    const page = pageStarts.filter(p => p.pos <= pos).at(-1)?.page ?? 0;
    const imageChoices = choices.every(c => !c || c.length <= 2);
    const needsImage = IMAGE_REF_RE.test(stem + raw) || imageChoices;
    sections.push({ num, stem, choices, raw, page, needsImage, imageChoices });
  }
  return sections;
}

export function stemFingerprint(text) {
  return norm(text.replace(/^【題組：[^】]+】\n?/, "").slice(0, 48));
}

export function matchOfficialNum(sections, q) {
  const want = q.choices.map(norm);
  const stem = stemFingerprint(q.text);
  let hits = sections.filter(sec => want.every(c => norm(sec.raw).includes(c)));
  if (hits.length > 1 && stem.length >= 12) {
    const refined = hits.filter(sec => norm(sec.text ?? sec.raw).includes(stem.slice(0, 24)) || norm(sec.raw).includes(stem.slice(0, 24)));
    if (refined.length) hits = refined;
    hits.sort((a, b) => {
      const score = s => {
        const t = norm(s.raw);
        let n = 0;
        for (let i = 0; i + 8 <= stem.length; i += 8) if (t.includes(stem.slice(i, i + 8))) n++;
        return n;
      };
      return score(b) - score(a);
    });
  }
  if (hits.length >= 1) return hits[0].num;
  const key = [...want].sort((a, b) => b.length - a.length)[0];
  if (key.length < 4) return null;
  const byChoice = sections.filter(sec => norm(sec.raw).includes(key));
  if (byChoice.length === 1) return byChoice[0].num;
  return null;
}

export function matchOfficialNumFallback(sections, q) {
  const direct = matchOfficialNum(sections, q);
  if (direct != null) return direct;
  const stem = stemFingerprint(q.text);
  let best = null, score = 0;
  for (const sec of sections) {
    const t = norm(sec.raw);
    let s = 0;
    for (const c of q.choices) if (c && t.includes(norm(c))) s += 2;
    if (stem.length >= 8) {
      for (let i = 0; i + 8 <= stem.length; i += 8)
        if (t.includes(stem.slice(i, i + 8))) s++;
    }
    if (s > score) { score = s; best = sec.num; }
  }
  return score >= 4 ? best : null;
}

export function needsDiagram(q) {
  return IMAGE_REF_RE.test(q.text) || q.choices.some(c => IMAGE_REF_RE.test(c));
}

export function loadArchive(subjectDir, dataFile) {
  const dir = path.join(root, subjectDir);
  const sandbox = { window: {}, console, Date, Math };
  vm.createContext(sandbox);
  for (const f of [dataFile, "archive-exams.js"]) {
    vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8"), sandbox, { filename: f });
  }
  return sandbox.window.ARCHIVE_EXAMS;
}

function cropBounds(sec, onPage) {
  const p = sec.page;
  const idx = onPage.indexOf(sec.num);
  const n = Math.max(onPage.length, 1);
  const sliceH = Math.min(280, Math.floor(500 / n));
  const yTop = 55 + idx * sliceH;
  if (sec.imageChoices) return { p, x0: 40, y0: 55, x1: 555, y1: Math.min(720, 55 + sliceH * n + 60) };
  return { p, x0: 40, y0: yTop, x1: 555, y1: Math.min(720, yTop + sliceH + 40) };
}

const cropCache = new Map();

export function cropPng(pdfDir, year, sec, onPage) {
  const file = `q${sec.num}.png`;
  const outPath = path.join(pdfDir, String(year), file);
  if (fs.existsSync(outPath)) return file;

  const { p, x0, y0, x1, y1 } = cropBounds(sec, onPage);
  const key = `${pdfDir}:${year}:${p}:${x0},${y0},${x1},${y1}`;
  if (cropCache.has(key)) {
    fs.copyFileSync(cropCache.get(key), outPath);
    return file;
  }

  const pdf = path.join(pdfDir, String(year), `${year}-exam.pdf`);
  if (!fs.existsSync(pdf)) throw new Error(`missing PDF ${pdf}`);
  const Z = 2;
  const doc = mupdf.Document.openDocument(fs.readFileSync(pdf), "application/pdf");
  const page = doc.loadPage(p);
  const matrix = mupdf.Matrix.scale(Z, Z);
  const full = page.toPixmap(matrix, mupdf.ColorSpace.DeviceRGB, false, true);
  const X0 = x0 * Z, Y0 = y0 * Z, X1 = x1 * Z, Y1 = y1 * Z;
  const outW = Math.max(1, Math.round(X1 - X0)), outH = Math.max(1, Math.round(Y1 - Y0));
  const cropped = full.warp([[X0, Y0], [X1, Y0], [X1, Y1], [X0, Y1]], outW, outH);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, cropped.asPNG());
  cropCache.set(key, outPath);
  return file;
}

export function diagramHtml(year, qNum) {
  return `<div class="question-diagram"><img src="official-data/${year}/q${qNum}.png" alt="第${qNum}題圖"></div>`;
}

export function ensureHelpers(src, kind) {
  if (src.includes("const withDiagram")) return src;
  const s = src.replace(/\r\n/g, "\n");
  let out = s;
  if (kind === "earth") {
    out = s.replace(
      /const mc = \(unitId, text, choices, answerIndex, steps, tip, trap, concept, formula\) => \(\{\n    unitId, text, choices, answer: answerIndex, steps, tip, trap,\n    concept: concept \|\| U\[unitId - 1\]\.summary, formula: formula \|\| U\[unitId - 1\]\.formula\n  \}\);/,
      `const mc = (unitId, text, choices, answerIndex, steps, tip, trap, concept, formula) => ({
    unitId, text, choices, answer: answerIndex, steps, tip, trap,
    concept: concept || U[unitId - 1].summary, formula: formula || U[unitId - 1].formula
  });
  const withDiagram = (q, html) => (q.diagram = html, q);
  const imgDiagram = (year, num, alt) =>
    \`<div class="question-diagram"><img src="official-data/\${year}/q\${num}.png" alt="\${alt}"></div>\`;`
    );
  } else {
    out = s.replace(
      /const mc = \(unitId, difficulty, text, choices, answerIndex, steps, tip, trap, concept, formula\) => \(\{\n    type: "mc", unitId, difficulty, text, choices, answer: answerIndex,\n    steps, tip, trap, concept: concept \|\| U\[unitId - 1\]\.summary, formula: formula \|\| U\[unitId - 1\]\.formula\n  \}\);/,
      `const mc = (unitId, difficulty, text, choices, answerIndex, steps, tip, trap, concept, formula) => ({
    type: "mc", unitId, difficulty, text, choices, answer: answerIndex,
    steps, tip, trap, concept: concept || U[unitId - 1].summary, formula: formula || U[unitId - 1].formula
  });
  const withDiagram = (q, html) => (q.diagram = html, q);
  const imgDiagram = (year, num, alt) =>
    \`<div class="question-diagram"><img src="official-data/\${year}/q\${num}.png" alt="\${alt}"></div>\`;`
    );
  }
  return src.includes("\r\n") ? out.replace(/\n/g, "\r\n") : out;
}

export function wrapMcWithDiagram(src, q, year, qNum) {
  const normalized = src.replace(/\r\n/g, "\n");
  const diagram = JSON.stringify(diagramHtml(year, qNum));
  const textKey = JSON.stringify(q.text);
  const idx = normalized.indexOf(textKey);
  if (idx < 0) return { src, ok: false };

  const tip = JSON.stringify(q.tip);
  const trap = JSON.stringify(q.trap);
  const tails = [
    `,\n      ${tip},\n      ${trap})`,
    `,\n      ${tip}, ${trap})`,
    `], ${tip}, ${trap})`,
    `], ${tip}, ${trap}),`,
    `,\n ${tip},\n ${trap})`,
    `,\n ${tip},\n ${trap}),`,
    `],\n ${tip},\n ${trap})`,
    `],\n ${tip},\n ${trap}),`,
  ];
  let tailIdx = -1, tail = "";
  for (const t of tails) {
    const i = normalized.indexOf(t, idx);
    if (i >= 0 && (tailIdx < 0 || i < tailIdx)) { tailIdx = i; tail = t; }
  }
  if (tailIdx < 0) return { src, ok: false };

  const end = tailIdx + tail.length;
  const before = normalized.slice(0, tailIdx);

  const mcStart = before.lastIndexOf("\n    mc(");
  const mcStartCompact = before.lastIndexOf("\n mc(");
  const wdStart = before.lastIndexOf("\n    withDiagram(mc(");
  const wdStartCompact = before.lastIndexOf("\n withDiagram(mc(");
  let start = Math.max(mcStart, wdStart, mcStartCompact, wdStartCompact);
  if (start < 0) return { src, ok: false };
  if (/^\n {0,4}withDiagram\(mc\(/.test(normalized.slice(start, end))) return { src, ok: true };
  let inner = normalized.slice(start, end).replace(/^\n    withDiagram\(mc\(/, "\n    mc(")
    .replace(/^\n withDiagram\(mc\(/, "\n mc(");
  const wrapped = inner.replace(/^\n    mc\(/, `\n    withDiagram(mc(`)
    .replace(/^\n mc\(/, `\n withDiagram(mc(`) + `, ${diagram})`;
  const out = normalized.slice(0, start) + wrapped + normalized.slice(end);
  return { src: src.includes("\r\n") ? out.replace(/\n/g, "\r\n") : out, ok: true };
}

/** Heuristic domain tag for audit (bio / earth / phys). */
export function classifyDomain(stem) {
  const t = stem;
  const bio = /細胞|DNA|RNA|酵素|生態|遺傳|基因|光合作用|呼吸作用|神經|內分泌|顯微|細菌|病毒|植物|動物|食物鏈|族群|演化|有絲分裂|減數分裂|染色體|血型|疫苗|傳染|器官|組織|顯微鏡|發酵|系譜|蛋白質|胺基酸/.test(t);
  const earth = /板塊|地震|震度|震源|潮汐|颱風|鋒面|氣團|大氣|岩石|礦物|火成|沉積|變質|月相|日食|月食|星座|行星|太陽系|宇宙|星體|風化|侵蝕|河川|地下水|水循環|化石|地層|褶皺|斷層|火山|海溝|中洋脊|全球暖化|氣候|天氣|雲|降水|風向|等壓|緯度|季風|風化|地貌|星雲|銀河/.test(t);
  const phys = /密度|電路|電流|電壓|電阻|電池|磁|力矩|摩擦力|牛頓|加速度|速度|功|功率|能量|聲音|超聲|光|折射|反射|透鏡|原子|分子|離子|酸鹼|氧化|還原|電解|莫耳|濃度|化學|元素|化合物|混合物|聚合物|熱|溫度|比熱|壓力|浮力|杠杆|滑輪|電子|質子|中子|溶液|飽和|溶解|指示劑|pH|反應|催化|電解質|結晶|蒸發|凝結|昇華|力學|波動|頻率|振幅|電磁|感應|發電|電功率|電子流|電位|電荷|靜電|電解池|電鍍|氣體|液體|固體|狀態|三態|擴散|滲透|osmosis|滲透壓|天平|量筒|燒杯|試管|滴定|實驗|裝置|電子|電子式|結構式|鍵結|共價|離子鍵|金屬|非金屬|週期表|同位素|放射|核/.test(t);
  const scores = { bio: bio ? 1 : 0, earth: earth ? 1 : 0, phys: phys ? 1 : 0 };
  const top = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
  if (top[1] === 0) return "unknown";
  if (scores.bio && scores.phys) return scores.bio >= scores.phys ? "bio" : "phys";
  if (scores.earth && scores.phys) return scores.earth >= scores.phys ? "earth" : "phys";
  if (scores.bio && scores.earth) return scores.bio >= scores.earth ? "bio" : "earth";
  return top[0];
}
