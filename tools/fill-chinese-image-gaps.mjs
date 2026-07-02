// Fill 國文 archive diagram gaps (106–113): crop PNGs, patch archive-exams.js, update analysis-data.js.
// ponytail: steps/tip/trap are answer-aware templates; upgrade path = hand-authored per question.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import * as mupdf from "mupdf";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const zhDir = path.join(root, "國文會考作戰室");
const dataDir = p => path.join(zhDir, "official-data", p);

const LETTER = { A: 0, B: 1, C: 2, D: 3 };

/** year -> official question numbers to add (includes note-only extras to hit target). */
const GAPS = {
  106: [10, 22, 24, 30],
  107: [4, 20, 36, 39],
  108: [18, 20, 42, 43, 44],
  109: [1, 5, 7, 35, 36],
  110: [3, 6, 13, 16, 33, 38],
  111: [1, 4, 6, 11, 21, 25, 26, 27, 36],
  112: [8, 17, 25, 26, 27, 28, 29, 38],
  113: [1, 5, 10, 20, 31, 32, 33],
};

function parseAnswers(txt) {
  const lines = txt.split(/\r?\n/).map(l => l.trim()).filter(Boolean);
  const ans = {};
  for (let i = 0; i < lines.length; i++) {
    if (/^\d+$/.test(lines[i]) && +lines[i] <= 48) {
      const q = +lines[i];
      const a = lines[i + 1];
      if (LETTER[a] !== undefined) ans[q] = a;
    }
  }
  return ans;
}

function examPageOf(examText, pos) {
  const pages = [...examText.matchAll(/--- page (\d+) ---/g)]
    .filter(m => m.index <= pos)
    .map(m => ({ page: +m[1], pos: m.index }));
  return pages.at(-1)?.page ?? 1;
}

function parseQuestion(examText, num) {
  const re = /\n(\d{1,2})\.(\s|[^\d])/g;
  const hits = [];
  let m;
  while ((m = re.exec(examText))) hits.push({ num: +m[1], pos: m.index });
  const hit = hits.find(h => h.num === num);
  if (!hit) return null;
  const end = hits[hits.indexOf(hit) + 1]?.pos ?? examText.length;
  let raw = examText.slice(hit.pos, end).trim();
  raw = raw.replace(/\n--- page \d+ ---[\s\S]*?(?=\n\d+\.|$)/g, ""); // drop footnote page breaks
  const choices = [];
  for (const cm of raw.matchAll(/\([A-D]\)\s*([^\n(]*)/g)) {
    const c = cm[1].trim().replace(/\s+/g, " ");
    if (c && !/^[音ㄅ-ㄩ]/.test(c) && c.length < 120) choices.push(c);
  }
  let stem = raw.replace(/^\d+\.\s*/, "");
  stem = stem.replace(/\([A-D]\)[\s\S]*/, "").trim();
  stem = stem.replace(/\n{2,}/g, "\n").replace(/\s+/g, " ");
  stem = stem.replace(/[\s\S]*$/, "").trim();
  if (choices.length !== 4) choices.length = 0;
  return { stem, choices, page: examPageOf(examText, hit.pos) };
}

/** Manual fixes where exam.txt OCR mangled image-only stems/choices. */
const OVERRIDE = {
  "106-10": { stem: "「秦漢之間，正體的篆字太過繁複，實際從事書寫的書吏為了記錄的快速，破圓為方，把曲線的筆畫斷開，建立漢字隸書橫平豎直的方形結構。」根據這段文字，下列表格內的敘述何者正確？" },
  "106-22": { stem: "周老師在黑板上寫道：「天下沒有一個人從不羨慕別人，只有少數人從沒被別人羨慕過。」她請學生以圖表來表示這句話，下列哪一張圖表最恰當？" },
  "106-24": { stem: "臺北的王小姐要以右列信封寄信給高雄的陳先生，其中格式有誤，下列修改何者正確？", choices: ["郵票應貼在信封右上角", "左右欄書寫的地址應對調", "左欄的「王緘」二字應改為「王寄」", "中欄的啟封詞「大啟」應改為「敬啟」"] },
  "106-30": { stem: "右列是某小說中的謎語，其中哪一句未使用代詞？", choices: ["古老智慧之謎可解於此", "力助吾輩保伊全家團圓", "聖殿騎士之碑是為關鍵", "阿特巴希為汝真相展現"] },
  "107-20": { stem: "右列詩作中，本詩作者表現出的心態最可能是下列何者？", choices: ["對女性文人不被認同的處境抱屈", "對女性應廣泛學習各類才藝有所堅持", "對自己把青春年華消耗在寫作上感到不值", "對自己能以藝術的手法處理家事感到自豪"] },
  "107-39": { stem: "秦二世封禪石刻所用的字體，與下列何者最接近？" },
  "108-18": { stem: "右列喜帖中，關於這則請柬，下列敘述何者正確？", choices: ["「家嚴」應改為「令尊」", "「聖誕」應改為「壽誕」", "「桃樽」應改為「桃符」", "「謹稟」應改為「叩首」"] },
  "108-20": { stem: "右圖顯示藍水溪及其支流的位置。根據上述文字，圖中甲～丁的標示何者正確？", choices: ["甲：初雲風景區", "乙：高土山", "丙：光明里", "丁：依蘇坪"] },
  "108-42": { stem: "某飛機將在四個機場停留，下表是各機場在該飛機起飛時的環境狀況。在相同載重條件下，根據本文，這架飛機於哪一座機場起飛時所需的跑道可能最短？" },
  "109-1": { stem: "根據這張圖表，下列何者的症狀最可能是中暑？", choices: ["冒汗而體溫正常的小健", "體溫過高不出汗的小康", "大量流汗虛弱頭暈的小平", "心跳加速體溫正常的小安"] },
  "109-5": { stem: "右列社群貼文與留言中，關於這則貼文與留言，下列解讀何者最恰當？", choices: ["小畢認為善惡終有報", "阿文的想法傾向樂觀", "凱哥同意小畢的觀點", "小安的看法近於小畢"] },
  "109-7": { stem: "「宋朝根據房門的位置來確定座次貴賤。面向房門的座位最尊貴，若無長輩就讓它空著。長輩左手的那邊是主人位，右手邊是客人位，長輩對面是副陪的位置，坐在那裡方便傳菜斟酒。」小秦到朋友大蘇家作客，爸爸老蘇和弟弟小蘇同席，下列圖示座次，何者最符合這段文字的敘述？" },
  "110-3": { stem: "這是某相機使用說明書的一部分。根據以上說明，這臺相機在相同的設定下，下列哪一個景物最容易自動對焦？", choices: ["雪地上的雪人", "欄杆後的盆栽", "沙漠中的綠色仙人掌", "花色相同的馬賽克磁磚"] },
  "110-6": { stem: "右列詩作中，這首詩中「盆栽」對生活的態度，與下列何者最接近？", choices: ["安於現狀，隨遇而安", "積極進取，力爭上游", "悲觀消極，自怨自艾", "懷疑批判，拒絕改變"] },
  "110-13": { stem: "小楓在古玩店看到一枚仿古錢幣，仔細一看，發現這是將「唯」、「吾」、「知」、「足」四字字體共用「口」形，所合成的一個圖象。下列圖象何者也是用類似的方式合成？" },
  "110-16": { stem: "根據這張圖表，下列敘述何者錯誤？" },
  "110-33": { stem: "右列茶具圖中，根據本文，下列何者最可能是以前英國勞動階級的喝茶方式？" },
  "110-38": { stem: "某一總家戶數2萬、總人口數10萬的地區發生糧食短缺，根據「糧食安全階段綜合分類」的標準，該區在下列何種狀態時達到「饑荒」的標準？" },
  "111-1": { stem: "右列示意圖最可能在傳達下列何種訊息？", choices: ["透過大量傳播，知識就會變成真理", "與其獨自苦讀，不如多與他人交流", "反覆誦讀，有助於將資訊內化為大腦深層的記憶", "能統整所學並轉述給別人，才算是真正掌握知識"] },
  "111-11": { stem: "右列背包背法示意圖中，根據這則說明，下列做法何者最符合健康概念？" },
  "111-21": { stem: "根據右列表格的說明，下列何者最可能是會意字？" },
  "112-8": { stem: "「陰刻」是在平面上刻出凹陷的立體線條，凹陷下去的字是「陰文」。「陽刻」則是在平面上保留凸出的立體線條，將其餘部分刻除，凸出來的字是「陽文」。據此判斷，下列何者是陽刻隸書章蓋在白紙上顯示出的樣子？" },
  "112-29": { stem: "亞當是奧運跳水個人賽選手，他在比賽時某次的動作難度係數是3.0，當他完成後，評審團給的分數表如下。根據圖文，亞當此次跳水得分的計算方式應是下列何者？" },
  "113-1": { stem: "右列粉絲專頁貼文截圖中，下列敘述何者最恰當？" },
  "113-10": { stem: "〈瑯琊臺刻石〉是秦代的篆刻文字，其特點在於：用筆圓轉，結構勻稱，筆畫粗細均勻。根據字體特徵，下列何者最可能是〈瑯琊臺刻石〉？" },
  "113-20": { stem: "在象形字上附加符號表示抽象概念，是指事的造字方法之一。下列何者屬於這種造字方法？" },
  "113-33": { stem: "根據本文，下列圖表何者最適合用來呈現「人工智慧」、「機器學習」、「深度學習」三者之間的關係？" },
};

function guessUnit(stem) {
  const s = stem;
  if (/六書|象形|指事|會意|形聲|篆|隸|楷|字體|造字|說文/.test(s)) return 3;
  if (/詩|詞|曲|絕句|律詩|宋詞/.test(s)) return 26;
  if (/文言|古代|歷代|《/.test(s)) return 25;
  if (/標點|缺空|填入.*標點/.test(s)) return 11;
  if (/用字|語病|詞語|文句/.test(s)) return 2;
  if (/圖表|統計|資料|推論|調查|報告|海報|請柬|信封|格式|座次|圖示|圖文|圖中|右圖|右列|下表|表格/.test(s)) return 17;
  if (/修辭|比喻|象徵|寫作手法|涵義/.test(s)) return 22;
  if (/應用|說明|新聞|廣告|貼文|社群/.test(s)) return 8;
  return 17;
}

function tpl(answerIdx, choices, stem) {
  const letter = "ABCD"[answerIdx];
  const correct = choices[answerIdx] || `選項${letter}`;
  const steps = [
    `對照題幹與圖表／選項，先鎖定符合官方答案（${letter}）的依據。`,
    choices.length ? `正確選項「${correct.slice(0, 40)}${correct.length > 40 ? "…" : ""}」與題幹要求一致。` : `答案為${letter}，須依圖表或版面細節判讀，不可憑常識臆測。`,
  ];
  const tip = /圖|表|圖表|右列|右圖|下表/.test(stem)
    ? "圖表題先整理題幹關鍵條件，再逐項對照圖中資訊，而不是只看表面相似。"
    : "先掌握題幹核心問題，再逐一檢驗選項是否都有文本或圖示依據。";
  const trap = "圖片題容易選到「看起來合理」但與資料不符的選項，務必回到題幹用語逐字核對。";
  return { steps, tip, trap };
}

function esc(s) {
  return s.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$/g, "\\$");
}

function mcLine(q) {
  const ch = q.choices.length === 4
    ? `[${q.choices.map(c => `"${esc(c)}"`).join(", ")}]`
    : `["(A)", "(B)", "(C)", "(D)"]`;
  const st = q.steps.map(s => `"${esc(s)}"`).join(", ");
  return `withDiagram(mc(${q.unitId}, ${q.difficulty}, "${esc(q.stem)}",\n      ${ch}, ${q.answer},\n      [${st}],\n      "${esc(q.tip)}", "${esc(q.trap)}"),\n      \`<div class="question-diagram"><img src="official-data/${q.year}/q${q.num}.png" alt="第${q.num}題圖"></div>\`)`;
}

/** PDF page index (0-based) and crop [x0,y0,x1,y1] in PDF points. */
const CROPS = {
  // 106
  "106-10": [2, 40, 80, 555, 520],
  "106-22": [4, 40, 80, 555, 420],
  "106-24": [4, 40, 420, 555, 780],
  "106-30": [5, 40, 80, 555, 520],
  // 107
  "107-4": [1, 40, 350, 555, 780],
  "107-20": [3, 40, 80, 555, 280],
  "107-36": [8, 40, 80, 555, 520],
  "107-39": [9, 40, 200, 555, 520],
  // 108
  "108-18": [2, 40, 80, 555, 280],
  "108-20": [3, 40, 80, 555, 320],
  "108-42": [10, 40, 350, 555, 780],
  "108-43": [11, 40, 80, 555, 380],
  "108-44": [11, 40, 380, 555, 620],
  // 109
  "109-1": [1, 40, 120, 555, 420],
  "109-5": [2, 40, 80, 555, 380],
  "109-7": [2, 40, 380, 555, 780],
  "109-35": [8, 40, 80, 555, 420],
  "109-36": [9, 40, 80, 555, 420],
  // 110
  "110-3": [1, 40, 280, 555, 620],
  "110-6": [1, 40, 80, 555, 380],
  "110-13": [2, 40, 80, 555, 420],
  "110-16": [3, 40, 80, 555, 420],
  "110-33": [7, 40, 80, 555, 420],
  "110-38": [9, 40, 80, 555, 520],
  // 111
  "111-1": [1, 40, 120, 555, 420],
  "111-4": [1, 40, 420, 555, 620],
  "111-6": [1, 40, 620, 555, 780],
  "111-11": [2, 40, 80, 555, 420],
  "111-21": [4, 40, 80, 555, 320],
  "111-25": [5, 40, 80, 555, 420],
  "111-26": [6, 40, 80, 555, 420],
  "111-27": [6, 40, 420, 555, 780],
  "111-36": [11, 40, 80, 555, 520],
  // 112
  "112-8": [1, 40, 420, 555, 780],
  "112-17": [3, 40, 80, 555, 520],
  "112-25": [5, 40, 80, 555, 280],
  "112-26": [5, 40, 280, 555, 420],
  "112-27": [7, 40, 80, 555, 280],
  "112-28": [7, 40, 280, 555, 420],
  "112-29": [7, 40, 420, 555, 780],
  "112-38": [11, 40, 80, 555, 520],
  // 113
  "113-1": [1, 40, 120, 555, 420],
  "113-5": [1, 40, 420, 555, 780],
  "113-10": [2, 40, 80, 555, 320],
  "113-20": [4, 40, 80, 555, 320],
  "113-31": [9, 40, 80, 555, 420],
  "113-32": [9, 40, 420, 555, 780],
  "113-33": [10, 40, 80, 555, 420],
};

function cropAll(year, nums) {
  const pdfPath = dataDir(`${year}/${year}-exam.pdf`);
  const doc = mupdf.Document.openDocument(fs.readFileSync(pdfPath), "application/pdf");
  const Z = 2, S = 1.5;
  for (const num of nums) {
    const key = `${year}-${num}`;
    const spec = CROPS[key];
    if (!spec) throw new Error("no crop: " + key);
    const [page, x0, y0, x1, y1] = spec;
    const outPath = dataDir(`${year}/q${num}.png`);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    const pg = doc.loadPage(page);
    const matrix = mupdf.Matrix.scale(Z, Z);
    const full = pg.toPixmap(matrix, mupdf.ColorSpace.DeviceRGB, false, true);
    const X0 = x0 * Z, Y0 = y0 * Z, X1 = x1 * Z, Y1 = y1 * Z;
    const outW = Math.round((X1 - X0) * S), outH = Math.round((Y1 - Y0) * S);
    const points = [[X0, Y0], [X1, Y0], [X1, Y1], [X0, Y1]];
    fs.writeFileSync(outPath, full.warp(points, outW, outH).asPNG());
    console.log("crop", key, outW, "x", outH);
  }
}

// Build question objects
const byYear = {};
for (const [ys, nums] of Object.entries(GAPS)) {
  const year = +ys;
  const examText = fs.readFileSync(dataDir(`${year}/${year}-exam.txt`), "utf8");
  const answers = parseAnswers(fs.readFileSync(dataDir(`${year}/${year}-answer.txt`), "utf8"));
  byYear[year] = [];
  cropAll(year, nums);
  for (const num of nums) {
    const pq = parseQuestion(examText, num) ?? { stem: "", choices: [] };
    const ov = OVERRIDE[`${year}-${num}`] ?? {};
    if (ov.stem) pq.stem = ov.stem;
    if (ov.choices) pq.choices = ov.choices;
    if (!pq.stem) throw new Error(`no stem ${year} Q${num}`);
    const answer = LETTER[answers[num]];
    if (answer === undefined) throw new Error(`no answer ${year} Q${num}`);
    const unitId = guessUnit(pq.stem);
    const { steps, tip, trap } = tpl(answer, pq.choices, pq.stem);
    byYear[year].push({
      year, num, unitId, difficulty: 2, stem: pq.stem,
      choices: pq.choices.length === 4 ? pq.choices : [],
      answer, steps, tip, trap,
    });
  }
}

// Patch archive-exams.js
const archivePath = path.join(zhDir, "archive-exams.js");
let arch = fs.readFileSync(archivePath, "utf8");

for (const year of Object.keys(byYear).map(Number).sort()) {
  const arrName = `exam${year}missing`;
  const body = byYear[year].map(mcLine).join(",\n    ");
  const block = `\n  const ${arrName} = [\n    ${body},\n  ];\n`;

  if (arch.includes(`const ${arrName}`)) {
    arch = arch.replace(new RegExp(`\\n  const ${arrName} = \\[[\\s\\S]*?\\n  \\];`), block.trimStart());
    console.log("replace", arrName);
  } else {
    arch = arch.replace("\n  return {", block + "\n  return {");
    console.log("insert", arrName);
  }

  const examVar = `exam${year}`;
  const yearRe = new RegExp(`${year}:\\s*\\{\\s*minutes:\\s*70,(?:\\s*omittedNote:[^,]+,)?\\s*questions:\\s*\\[([^\\]]+)\\]\\s*\\}`);
  const ym = arch.match(yearRe);
  if (!ym) throw new Error("year match fail " + year);
  let spread = ym[1].trim();
  if (!spread.includes(arrName)) {
    spread = spread.replace(new RegExp(`\\.\\.\\.${examVar}(?!missing)`), `...${examVar}, ...${arrName}`);
  }
  arch = arch.replace(yearRe, `${year}: { minutes: 70, questions: [${spread}] }`);
  console.log("patched year", year);
}

fs.writeFileSync(archivePath, arch);

// Update analysis-data.js officialByYear + primaryUnits from live archive
const sandbox = { window: {}, console, Date, Math };
vm.createContext(sandbox);
for (const f of ["data.js", "archive-exams.js"]) {
  vm.runInContext(fs.readFileSync(path.join(zhDir, f), "utf8"), sandbox, { filename: f });
}
const exams = sandbox.window.ARCHIVE_EXAMS;
const analysisPath = path.join(zhDir, "analysis-data.js");
let analysis = fs.readFileSync(analysisPath, "utf8");

const officialLines = [];
const primaryLines = [];
for (const year of [106, 107, 108, 109, 110, 111, 112, 113, 114, 115]) {
  const count = exams[year].questions.length;
  const prev = analysis.match(new RegExp(`${year}:\\s*\\{[^}]+\\}`))?.[0] ?? "";
  const extra = prev.match(/readingSetItems[^}]*/)?.[0]?.replace(/^\s*,?\s*/, ", ") ?? "";
  officialLines.push(`    ${year}: { mc: ${count}, cr: 0, curriculum: "十二年國教課綱"${extra ? extra : ""} },`);
  const units = exams[year].questions.map(q => q.unitId);
  primaryLines.push(`    ${year}: [${units.join(",")}],`);
}

analysis = analysis.replace(
  /const officialByYear = \{[\s\S]*?\};/,
  `const officialByYear = {\n${officialLines.join("\n")}\n  };`,
);
analysis = analysis.replace(
  /const primaryUnits = \{[\s\S]*?\};/,
  `const primaryUnits = {\n${primaryLines.join("\n")}\n  };`,
);
fs.writeFileSync(analysisPath, analysis);
console.log("\nDone. Run: node tools/inventory-archive-gaps.mjs");
