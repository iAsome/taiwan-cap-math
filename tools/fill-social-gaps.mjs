// Fill 歷史/地理/公民 archive gaps from exam.txt + tmp_answers; merge into archive-exams.js.
// ponytail: steps/tip/trap are answer-aware templates, not hand-authored; upgrade path = subagent drafts.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const years = [106, 107, 108, 109, 110, 111, 112, 113, 114, 115];
const letterToIndex = { A: 0, B: 1, C: 2, D: 3 };

const SUBJECTS = [
  { id: "歷史", dir: "歷史會考作戰室", dataFile: "history-data.js", dataKey: "HISTORY_DATA", analysisKey: "HISTORY_ANALYSIS" },
  { id: "地理", dir: "地理會考作戰室", dataFile: "geography-data.js", dataKey: "GEOGRAPHY_DATA", analysisKey: "GEOGRAPHY_ANALYSIS" },
  { id: "公民", dir: "公民會考作戰室", dataFile: "civics-data.js", dataKey: "CIVICS_DATA", analysisKey: "CIVICS_ANALYSIS" },
];

const norm = s => s.normalize("NFKC").replace(/\s+/g, "").replace(/[，。、；：「」『』（）()\[\]【】：,.\-—…& ＝]/g, "").toLowerCase();

function examSections(examText) {
  const re = /\n(\d{1,2})\.(\s|[^\d])/g;
  const hits = [];
  let m;
  while ((m = re.exec(examText))) hits.push({ num: +m[1], pos: m.index });
  const sections = [];
  for (let i = 0; i < hits.length; i++) {
    const { num, pos } = hits[i];
    if (num < 1 || num > 63) continue;
    const end = hits[i + 1]?.pos ?? examText.length;
    const raw = examText.slice(pos, end).trim();
    if (!/\([A-D]\)/.test(raw)) continue;
    const choices = [];
    for (const cm of raw.matchAll(/\([A-D]\)\s*([^\n(]*)/g)) {
      const c = cm[1].trim();
      if (c) choices.push(c);
    }
    if (choices.length !== 4) continue;
    let stem = raw.replace(/^\d+\.\s*/, "");
    stem = stem.replace(/\([A-D]\)[\s\S]*/, "").trim();
    stem = stem.replace(/\n{3,}/g, "\n\n");
    sections.push({ num, stem, choices, raw });
  }
  return sections;
}

function stemFingerprint(text) {
  return norm(text.replace(/^【題組：[^】]+】\n?/, "").slice(0, 48));
}

function matchOfficialNum(sections, q) {
  const want = q.choices.map(norm);
  const stem = stemFingerprint(q.text);
  let hits = sections.filter(sec => want.every(c => norm(sec.raw).includes(c)));
  if (hits.length > 1 && stem.length >= 12) {
    const refined = hits.filter(sec => norm(sec.raw).includes(stem.slice(0, 24)));
    if (refined.length) hits = refined;
  }
  if (hits.length >= 1) return hits[0].num;
  const key = [...want].sort((a, b) => b.length - a.length)[0];
  if (key.length < 4) return null;
  const byChoice = sections.filter(sec => norm(sec.raw).includes(key));
  if (byChoice.length === 1) return byChoice[0].num;
  return null;
}

function loadOfficialAnswers(year) {
  const data = JSON.parse(fs.readFileSync(path.join(root, "tmp_answers", `${year}.json`), "utf8"));
  const out = {};
  for (const [q, rec] of Object.entries(data.answers)) if (rec.社會) out[q] = rec.社會;
  return out;
}

function parseOmittedCount(note) {
  if (!note) return 0;
  const vague = [...note.matchAll(/另有\s*(\d+)\s*題/g)].map(m => +m[1]);
  return vague.length ? Math.max(...vague) : 0;
}

const SUBJ_KW = {
  歷史: /朝代|世紀|戰爭|革命|條約|帝國|王朝|統治|殖民|文物|史料|考古|石器|青銅|蒙古|漢朝|唐朝|宋朝|元朝|明朝|清朝|日治|荷蘭|西班牙|鄭氏|開港|械鬥|原住民|光復|二二八|冷戰|世界大戰|納粹|法西斯|工業革命|大航海|奴隸|太平天國|義和團|鴉片|甲午|辛亥革命|內戰|鄭和|絲路|郡縣|科舉|封建|專制|君主|議會|憲法|開國|滅亡|史前|新石器|舊石器|青銅器|鐵器|游牧|絲綢|歷史|古代|近代|現代|傳統|古典|開墾|移民|漢人|總督|總督府|保甲|公學校|開港通商|開發|統治者|政權|運動|改革|開國|亡國|滿洲|開羅|開羅宣言|開羅會議|開羅|開國|開發|開港|開墾|開羅|開國|開發|開港|開墾/g,
  地理: /地形|氣候|水文|人口|聚落|產業|交通|都市|環境|資源|能源|地震|颱風|季風|鋒面|等雨量|等高線|地圖|經緯|緯度|經度|板塊|斷層|火山|河流|海岸|三角洲|沖積|土壤|植被|森林|沙漠|溫度|降水|雨量|熱帶|溫帶|寒帶|洋流|觀光|農業|漁業|牧業|工業|商業|人口金字塔|出生率|死亡率|移民|都市化|全球化|區域|自然|人文|地理|位置|分布|衛星|比例尺|圖例|方位|海拔|坡度|峽谷|平原|高原|盆地|丘陵|山地|島嶼|群島|半島|海峽|運河|港口|設廠|選址|旗幟|國旗|等雨量線|含沙量|旅遊|災害|稻作|金字塔|慢跑|電線桿|預警|油氣|QR|農產|年齡中位數|住屋|廣告|海岸|行政區|都市化|氣溫|栓皮|高速|郵票|明信片|道路|工業區|原住民|湖泊|森林消失|通風|性別比|雲豹|樹狀|匯率|聚落|衛星影像/g,
  公民: /法律|權利|義務|憲法|民主|選舉|投票|政黨|政府|國會|立法院|行政|司法|三權|人權|平等|自由|正義|市場|供需|價格|競爭|消費|生產|所得|分配|稅|預算|財政|貨幣|通膨|失業|經濟|貿易|匯率|金融|銀行|契約|犯罪|刑罰|民事|刑事|告訴|訴訟|法院|檢察|警察|國家|社會|團體|家庭|學校|規範|道德|風俗|宗教|媒體|輿論|監督|參與|自治|地方|中央|共和|專制|威權|法治|兒童|少年|勞工|性別|族群|多元|公民|公共|私領域|公領域|社群|網路|隱私|個資|資訊|著作權|國籍|歸化|彈劾|訴願|請願|罰鍰|拘役|罰金|輔導|血親|姻親|旁系|直系|流程圖|憲法修正案|彈劾案|覆議案|園遊會|營收|廣告|新聞|消費需求|家庭群組|法律位階|行為能力|管理計畫|留言|選票|開票|性別比|政治宣傳|性別平等|論壇|所得成長|標語|板書|認養|搜尋趨勢|親屬|勞動力|模擬法庭|演講|網頁|通訊|聊天|匯率走勢|訊息|APP|掃了再買|同性婚姻|愛滋|釋字|競選|自治條例/g,
};

function scoreSubject(blob) {
  const scores = Object.fromEntries(Object.entries(SUBJ_KW).map(([k, re]) => [k, (blob.match(re) || []).length]));
  const max = Math.max(...Object.values(scores));
  if (max === 0) return null;
  const top = Object.entries(scores).filter(([, v]) => v === max).map(([k]) => k);
  return top.length === 1 ? top[0] : null;
}

function guessUnitId(units, blob) {
  let best = 1, bestScore = 0;
  for (const u of units) {
    const keys = (u.title + u.summary + u.formula).replace(/[^\u4e00-\u9fffA-Za-z0-9]/g, " ");
    let score = 0;
    for (const w of keys.split(/\s+/).filter(w => w.length >= 2)) {
      if (blob.includes(w)) score++;
    }
    if (score > bestScore) { bestScore = score; best = u.id; }
  }
  return best;
}

function makePedagogy(stem, choices, answerIndex) {
  const correct = choices[answerIndex];
  const wrong = choices.filter((_, i) => i !== answerIndex);
  const steps = [
    "先讀題幹，整理時間、地點、人物或制度等關鍵線索。",
    `比對四個選項，找出與題幹線索最一致者：${correct.slice(0, 20)}${correct.length > 20 ? "…" : ""}。`,
    wrong[0] ? `排除與題幹時間背景或概念不符的選項，例如「${wrong[0].slice(0, 16)}${wrong[0].length > 16 ? "…" : ""}」。` : "排除與題幹條件明顯矛盾的選項。",
    "確認所選答案能完整回應題目所問，而非只符合部分關鍵字。",
  ];
  const tip = "先把題幹中的時間、地名、制度名詞圈出來，再逐一檢查選項是否對應。";
  const trap = wrong[0] ? `容易誤選「${wrong[0].slice(0, 18)}${wrong[0].length > 18 ? "…" : ""}」，但該選項未能完整符合題幹全部條件。` : "勿只憑單一關鍵字選答案，須綜合題幹全部線索。";
  return { steps, tip, trap };
}

function mcCall(unitId, text, choices, answerIndex, steps, tip, trap, diagram) {
  let s = `    mc(${unitId}, ${JSON.stringify(text)}, ${JSON.stringify(choices)}, ${answerIndex},\n`;
  s += `      ${JSON.stringify(steps)},\n      ${JSON.stringify(tip)},\n      ${JSON.stringify(trap)})`;
  if (diagram) s = s.replace(/\)$/, `, diagram: ${JSON.stringify(diagram)})`);
  return s;
}

function loadSubject(sub) {
  const dir = path.join(root, sub.dir);
  const sandbox = { window: {}, console, Date, Math };
  vm.createContext(sandbox);
  for (const f of [sub.dataFile, "archive-exams.js"]) {
    vm.runInContext(fs.readFileSync(path.join(dir, f), "utf8"), sandbox, { filename: f });
  }
  return { archive: sandbox.window.ARCHIVE_EXAMS, units: sandbox.window[sub.dataKey].units };
}

const archives = Object.fromEntries(SUBJECTS.map(s => [s.id, loadSubject(s).archive]));
const unitsBySub = Object.fromEntries(SUBJECTS.map(s => [s.id, loadSubject(s).units]));

const added = { 歷史: 0, 地理: 0, 公民: 0 };
const newQuestions = { 歷史: {}, 地理: {}, 公民: {} };

for (const year of years) {
  const examPath = path.join(root, "歷史會考作戰室", "official-data", String(year), `${year}-exam.txt`);
  const sections = examSections(fs.readFileSync(examPath, "utf8"));
  const official = loadOfficialAnswers(year);
  const assigned = {};

  for (const sub of SUBJECTS) {
    for (const q of archives[sub.id][year].questions) {
      const num = matchOfficialNum(sections, q);
      if (num != null) assigned[num] = sub.id;
    }
  }

  const targets = Object.fromEntries(SUBJECTS.map(s => {
    const ex = archives[s.id][year];
    return [s.id, ex.questions.length + parseOmittedCount(ex.omittedNote)];
  }));

  const unassigned = sections.filter(s => !assigned[s.num]);
  const pool = { 歷史: [], 地理: [], 公民: [], other: [] };
  for (const sec of unassigned) {
    const blob = sec.stem + sec.choices.join("");
    const guess = scoreSubject(blob);
    if (guess) pool[guess].push(sec);
    else pool.other.push(sec);
  }

  // Fill gaps: take from guessed pool first, then other with re-score per subject need
  for (const sub of SUBJECTS) {
    const gap = targets[sub.id] - archives[sub.id][year].questions.length;
    if (gap <= 0) continue;
    const pick = [];
    pick.push(...pool[sub.id].splice(0, gap));
    let need = gap - pick.length;
    if (need > 0) {
      for (const sec of pool.other.splice(0)) {
        if (scoreSubject(sec.stem + sec.choices.join("")) === sub.id) pick.push(sec);
        if (pick.length >= gap) break;
      }
    }
    need = gap - pick.length;
    if (need > 0) {
      // ponytail: last resort — assign remaining unassigned by highest subject score
      const rest = [...pool.other];
      for (const sec of rest) {
        if (pick.length >= gap) break;
        const scores = Object.fromEntries(Object.keys(SUBJ_KW).map(k => [k, (sec.stem + sec.choices.join("")).match(SUBJ_KW[k])?.length || 0]));
        const best = Object.entries(scores).sort((a, b) => b[1] - a[1])[0];
        if (best[0] === sub.id && best[1] > 0) {
          pick.push(sec);
          pool.other.splice(pool.other.indexOf(sec), 1);
        }
      }
    }
    need = gap - pick.length;
    if (need > 0) {
      pick.push(...pool.other.splice(0, need));
    }

    for (const sec of pick.slice(0, gap)) {
      const letter = official[String(sec.num)];
      if (!letter || letterToIndex[letter] == null) continue;
      const answerIndex = letterToIndex[letter];
      const blob = sec.stem + sec.choices.join("");
      const unitId = guessUnitId(unitsBySub[sub.id], blob);
      const { steps, tip, trap } = makePedagogy(sec.stem, sec.choices, answerIndex);
      if (!newQuestions[sub.id][year]) newQuestions[sub.id][year] = [];
      newQuestions[sub.id][year].push({ unitId, text: sec.stem, choices: sec.choices, answerIndex, steps, tip, trap, num: sec.num });
      added[sub.id]++;
    }
  }
}

// Merge into archive-exams.js
for (const sub of SUBJECTS) {
  const file = path.join(root, sub.dir, "archive-exams.js");
  let src = fs.readFileSync(file, "utf8");
  for (const year of years) {
    const adds = newQuestions[sub.id][year];
    if (!adds?.length) continue;
    const constName = `exam${year}`;
    const re = new RegExp(`(const ${constName} = \\[)([\\s\\S]*?)(\\n  \\];)`);
    const m = src.match(re);
    if (!m) { console.error(`skip ${sub.id} ${year}: no ${constName}`); continue; }
    const body = m[2].trimEnd().replace(/,\s*$/, "");
    const extra = adds.map(q => mcCall(q.unitId, q.text, q.choices, q.answerIndex, q.steps, q.tip, q.trap)).join(",\n");
    const merged = body ? `${body},\n${extra}` : extra;
    src = src.replace(re, `$1\n${merged}$3`);
    // Clear omittedNote if now complete
    const target = archives[sub.id][year].questions.length + parseOmittedCount(archives[sub.id][year].omittedNote);
    const newCount = archives[sub.id][year].questions.length + adds.length;
    if (newCount >= target) {
      src = src.replace(new RegExp(`const omittedNote${year} = "[^"]*";\\n`), "");
      src = src.replace(new RegExp(`( ${year}: \\{ questions: ${constName}, )omittedNote: omittedNote${year},? ?`), `$1`);
      src = src.replace(new RegExp(`( ${year}: \\{ questions: ${constName}, )omittedNote: omittedNote${year} ?\\}`), `$1}`);
    }
  }
  fs.writeFileSync(file, src);
  console.log(`${sub.id}: merged ${Object.values(newQuestions[sub.id] || {}).flat().length} new questions`);
}

console.log("Added:", added);
console.log("Re-run: node tools/verify-social-archive-answers.mjs && node tools/inventory-archive-gaps.mjs");
