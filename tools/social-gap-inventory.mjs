// Inventory missing 歷史/地理/公民 archive questions vs exam.txt + tmp_answers.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const years = [106, 107, 108, 109, 110, 111, 112, 113, 114, 115];

const SUBJECTS = [
  { id: "歷史", dir: "歷史會考作戰室", files: ["history-data.js", "archive-exams.js"] },
  { id: "地理", dir: "地理會考作戰室", files: ["geography-data.js", "archive-exams.js"] },
  { id: "公民", dir: "公民會考作戰室", files: ["civics-data.js", "archive-exams.js"] },
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
    const text = examText.slice(pos, end).trim();
    if (!/\([A-D]\)/.test(text)) continue;
    const choices = [];
    for (const cm of text.matchAll(/\([A-D]\)\s*([^\n(]+)/g)) choices.push(cm[1].trim());
    if (choices.length !== 4) continue;
    const stem = text.replace(/^\d+\.\s*/, "").replace(/\([A-D]\)[\s\S]*/, "").trim();
    sections.push({ num, text, stem, choices });
  }
  return sections;
}

function stemFingerprint(text) {
  return norm(text.replace(/^【題組：[^】]+】\n?/, "").slice(0, 48));
}

function matchOfficialNum(sections, q) {
  const want = q.choices.map(norm);
  const stem = stemFingerprint(q.text);
  let hits = sections.filter(sec => want.every(c => norm(sec.text).includes(c)));
  if (hits.length > 1 && stem.length >= 12) {
    const refined = hits.filter(sec => norm(sec.text).includes(stem.slice(0, 24)));
    if (refined.length) hits = refined;
    hits.sort((a, b) => {
      const score = s => {
        const t = norm(s.text);
        let n = 0;
        for (let i = 0; i + 8 <= stem.length; i += 8) if (t.includes(stem.slice(i, i + 8))) n++;
        return n;
      };
      return score(b) - score(a);
    });
  }
  if (hits.length >= 1) return hits[0].num;
  const key = [...want].sort((a, b) => b.length - a.length)[0];
  const byChoice = sections.filter(sec => norm(sec.text).includes(key));
  if (byChoice.length === 1) return byChoice[0].num;
  return null;
}

function loadArchive(subject) {
  const dir = path.join(root, subject.dir);
  const sandbox = { window: {}, console, Date, Math };
  vm.createContext(sandbox);
  for (const file of subject.files) {
    vm.runInContext(fs.readFileSync(path.join(dir, file), "utf8"), sandbox, { filename: file });
  }
  return sandbox.window.ARCHIVE_EXAMS;
}

function parseOmittedCount(note) {
  if (!note) return 0;
  const vague = [...note.matchAll(/另有\s*(\d+)\s*題/g)].map(m => +m[1]);
  return vague.length ? Math.max(...vague) : 0;
}

const HIST_KW = /朝代|世紀|戰爭|革命|條約|帝國|王朝|統治|殖民|開國|亡國|文物|史料|考古|石器|青銅|鐵器|農耕|游牧|絲路|鄭和|蒙古|漢朝|唐朝|宋朝|元朝|明朝|清朝|日治|荷蘭|西班牙|鄭氏|開港|開墾|械鬥|原住民|漢人|移民|開發|光復|二二八|白色恐怖|民主化|冷戰|世界大戰|納粹|法西斯|共產|資本|工業革命|啟蒙|文藝復興|宗教改革|大航海|三角貿易|奴隸|獨立|憲法|議會|君主|專制|封建|郡縣|科舉|太平天國|義和團|鴉片|甲午|八國|辛亥革命|國共|內戰|改革開放|改革|運動|政權|開國|滅亡|歷史|古代|近代|現代|傳統|古典|史前|石器|新石器|舊石器|青銅器|鐵器|農業|游牧|絲綢|絲路|絲綢之路|絲綢之路|絲綢之路/;
const GEO_KW = /地形|氣候|水文|人口|聚落|產業|交通|都市|鄉村|環境|資源|能源|地震|颱風|季風|鋒面|等雨量|等高線|地圖|經緯|緯度|經度|板塊|斷層|火山|河流|海岸|三角洲|沖積|侵蚀|風化|土壤|植被|森林|沙漠|綠洲|冰川|冰河|溫度|降水|雨量|乾燥|潮濕|熱帶|溫帶|寒帶|季風|洋流|貿易|出口|進口|觀光|農業|漁業|牧業|工業|商業|服務|第一級|第二級|第三級|第四級|人口金字塔|出生率|死亡率|移民|移出|移入|都市化|全球化|區域|自然|人文|地理|位置|分布|分布圖|衛星|航照|航照圖|衛星影像|比例尺|圖例|方位|方向|東南|西北|海拔|高度|坡度|傾斜|峽谷|平原|高原|盆地|丘陵|山地|島嶼|群島|半島|海峽|運河|港口|港埠|設廠|選址|選擇設廠|設廠地點|設廠位置|設廠選址|設廠選擇|設廠選擇地點|設廠選擇位置|設廠選擇地點位置/;
const CIV_KW = /法律|權利|義務|憲法|民主|選舉|投票|政黨|政府|國會|立法院|行政|司法|三權|分立|制衡|人權|平等|自由|正義|公平|公益|私益|市場|供需|價格|競爭|壟斷|消費|生產|所得|分配|稅|預算|財政|貨幣|通膨|失業|經濟|GDP|成長|貿易|進出口|匯率|金融|銀行|股票|投資|儲蓄|借貸|利息|契約|侵權|犯罪|刑罰|民事|刑事|告訴|訴訟|法院|檢察|警察|國家|社會|團體|家庭|學校|同儕|規範|道德|風俗|宗教|媒體|輿論|監督|參與|自治|地方|中央|聯邦|單一|共和|君主|專制|獨裁|威權|自由民主|法治|人權|兒童|少年|勞工|性別|族群|多元|包容|歧視|偏見|刻板|刻板印象|公民|公共|私領域|公領域|社群|網路|隱私|個資|資訊|智慧財產|著作權|智慧財產權|智慧財產權保護|智慧財產權侵害|智慧財產權保護法|智慧財產權保護法規|智慧財產權保護法規範|智慧財產權保護法規範制度|智慧財產權保護法規範制度體系|智慧財產權保護法規範制度體系架構|智慧財產權保護法規範制度體系架構設計|智慧財產權保護法規範制度體系架構設計規劃|智慧財產權保護法規範制度體系架構設計規劃方案|智慧財產權保護法規範制度體系架構設計規劃方案實施|智慧財產權保護法規範制度體系架構設計規劃方案實施執行|智慧財產權保護法規範制度體系架構設計規劃方案實施執行管理|智慧財產權保護法規範制度體系架構設計規劃方案實施執行管理監督|智慧財產權保護法規範制度體系架構設計規劃方案實施執行管理監督評估|智慧財產權保護法規範制度體系架構設計規劃方案實施執行管理監督評估改進/;

function scoreSubject(stem, choices) {
  const blob = stem + choices.join("");
  const scores = {
    歷史: (blob.match(HIST_KW) || []).length,
    地理: (blob.match(GEO_KW) || []).length,
    公民: (blob.match(CIV_KW) || []).length,
  };
  const max = Math.max(...Object.values(scores));
  if (max === 0) return null;
  const top = Object.entries(scores).filter(([, v]) => v === max).map(([k]) => k);
  return top.length === 1 ? top[0] : null;
}

const archives = Object.fromEntries(SUBJECTS.map(s => [s.id, loadArchive(s)]));
const report = { years: {} };

for (const year of years) {
  const examPath = path.join(root, "歷史會考作戰室", "official-data", String(year), `${year}-exam.txt`);
  const sections = examSections(fs.readFileSync(examPath, "utf8"));
  const assigned = {}; // qNum -> subject
  const archived = { 歷史: [], 地理: [], 公民: [] };

  for (const sub of SUBJECTS) {
    const archive = archives[sub.id][year];
    for (let i = 0; i < archive.questions.length; i++) {
      const q = archive.questions[i];
      const num = matchOfficialNum(sections, q);
      if (num != null) {
        assigned[num] = sub.id;
        archived[sub.id].push(num);
      }
    }
  }

  const missing = { 歷史: [], 地理: [], 公民: [], _unclassified: [] };
  for (const sec of sections) {
    if (assigned[sec.num]) continue;
    const guess = scoreSubject(sec.stem, sec.choices);
    if (guess) missing[guess].push(sec);
    else missing._unclassified.push(sec);
  }

  const targets = {};
  for (const sub of SUBJECTS) {
    const exam = archives[sub.id][year];
    targets[sub.id] = exam.questions.length + parseOmittedCount(exam.omittedNote);
  }

  report.years[year] = {
    sections: sections.length,
    archived,
    assigned: { ...assigned },
    targets,
    gaps: Object.fromEntries(SUBJECTS.map(s => [s.id, targets[s.id] - archives[s.id][year].questions.length])),
    missingCounts: Object.fromEntries(SUBJECTS.map(s => [s.id, missing[s.id].length])),
    unclassified: missing._unclassified.map(s => s.num),
  };
}

console.log(JSON.stringify(report, null, 2));
