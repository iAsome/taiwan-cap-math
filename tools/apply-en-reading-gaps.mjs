// Insert remaining English reading gap questions (107–115) into archive-exams.js.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const archivePath = path.join(path.dirname(path.dirname(fileURLToPath(import.meta.url))), "英文會考作戰室", "archive-exams.js");
let s = fs.readFileSync(archivePath, "utf8");

function once(find, repl, label) {
  if (s.includes(repl.trim().slice(0, 50))) { console.log("skip", label); return; }
  const n = s.indexOf(find);
  if (n < 0) throw new Error("anchor missing: " + label);
  s = s.slice(0, n) + repl + s.slice(n + find.length);
  console.log("ok", label);
}

function rmNote(y, mins = null) {
  const m = mins ?? (y >= 111 ? 70 : 60);
  s = s.replace(
    new RegExp(`window\\.__ENG_TRANSCRIBED_${y} = \\{\\s*minutes: \\d+,\\s*omittedNote:[^]+?,\\s*questions:`),
    `window.__ENG_TRANSCRIBED_${y} = {\n  minutes: ${m},\n  questions:`);
}

// 107 Q1
once(
  `const exam107 = [\n  mc(17, 1, "The ___ is so strong`,
  `const exam107 = [\n  withDiagram(mc(17, 1, "Look at the picture.  The girl is ____ the clothes.",
    ["making", "packing", "showing", "washing"], 1,
    ["圖中女孩正在把衣物放進行李箱，動作是打包整理。", "packing 正確；making、showing、washing 與圖示動作不符。"],
    "看圖選字題先描述圖中動作，再選最貼切的動詞。",
    "容易誤選 washing，因為題幹有 clothes，但圖示是打包而非清洗。"), imgDiagram("107", "q1.png", "第1題圖")),\n  mc(17, 1, "The ___ is so strong`,
  "107-q1");

// 107 Q31
once(
  `    "容易把『狗甩水比洗衣機厲害』這個比喻誤解成『洗衣機的靈感來自狗甩水』的因果關係，但文章其實只是在做效果上的比較，並未提及發明的由來。"),\n];\n\n// (32-34) Josh 與 Eric 討論「待用咖啡」計畫的對話`,
  `    "容易把『狗甩水比洗衣機厲害』這個比喻誤解成『洗衣機的靈感來自狗甩水』的因果關係，但文章其實只是在做效果上的比較，並未提及發明的由來。"),
  withDiagram(mc(16, 4, "The four pictures below show how fast tigers, cats and mice can shake.  From the reading, which picture is most likely correct?",
    ["(A)", "(B)", "(C)", "(D)"], 1,
    ["文章指出體型愈小的動物必須甩得愈快；老鼠一秒 18 次、狗 6 次、熊 4 次。", "圖 (B) 中老鼠甩動頻率最高、大型動物較慢，符合文中大小與速度的對比。"],
    "圖表題先整理文章給的數字或大小對比，再對照選項圖示。",
    "容易忽略『小動物要甩更快』這條規則，誤選大型動物頻率較高的圖。"), imgDiagram("107", "q31.png", "第31題甩水速度圖")),
];\n\n// (32-34) Josh 與 Eric 討論「待用咖啡」計畫的對話`,
  "107-q31");
rmNote(107);

// 108 Q1
once(
  `const exam108 = [\n  mc(9, 1, "Ms. Liu usually gives`,
  `const exam108 = [\n  withDiagram(mc(17, 1, "Look at the picture.  The mother duck is ____ the baby ducks across the street.",
    ["carrying", "leading", "pushing", "watching"], 1,
    ["圖中母鴨在斑馬線上帶領小鴨前進。", "leading 正確；carrying、pushing、watching 與圖示不符。"],
    "看圖選字題先確認主詞（母鴨）對小鴨做了什麼動作。",
    "容易誤選 carrying，但小鴨是自己走路，並非被抱著。"), imgDiagram("108", "q1.png", "第1題圖")),\n  mc(9, 1, "Ms. Liu usually gives`,
  "108-q1");

// 108 Q31 between Q30 otherwise and Q32 four people
once(
  `    "不要以為 otherwise 表示「沒有想法」，其實它明確表達「不同的、相反的看法」。"),
  mc(16, 3, "Four people read the news`,
  `    "不要以為 otherwise 表示「沒有想法」，其實它明確表達「不同的、相反的看法」。"),
  withDiagram(mc(16, 3, "The picture below shows how the cortisol levels rise and fall during the day.  From the news, which is a good time for coffee?",
    ["A.", "B.", "C.", "D."], 3,
    ["文章建議在可體松濃度「下降」時喝咖啡，而非濃度高峰。", "圖中 D 點位於可體松下降段，符合報告建議。"],
    "結合文章「等濃度下降再喝」的建議，對照曲線圖上各標記點所在區段。",
    "容易選高峰附近的 A/B，但文章明確說高峰時喝咖啡效果最差。"), imgDiagram("108", "q31-chart.png", "第31題可體松曲線圖")),
  mc(16, 3, "Four people read the news`,
  "108-q31");

// 108 Q35
once(
  `    "「不如去年同期」這句話是用來形容週末晚上的生意，容易被誤植到選項中形容平日生意。"),\n];\nattach(exam108Shopping`,
  `    "「不如去年同期」這句話是用來形容週末晚上的生意，容易被誤植到選項中形容平日生意。"),
  withDiagram(mc(16, 3, "Which picture is most likely used in the report?",
    ["(A)", "(B)", "(C)", "(D)"], 1,
    ["報告討論週末下午最忙、建議把特賣從週六晚上改到下午，並增加接駁車。", "圓餅圖 (B) 的版面與比例最能對應報告中週末／平日業績分布的說明。"],
    "圖表選項題要回到報告文字找出最可能被視覺化的數據重點。",
    "四張圓餅圖看似相近，須對照報告強調的時段占比而非隨意猜測。"), imgDiagram("108", "q35.png", "第35題圓餅圖選項")),
];\nattach(exam108Shopping`,
  "108-q35");
rmNote(108);

// 109 Q1
once(
  `const exam109 = [\n  mc(17, 1, "The boy is`,
  `const exam109 = [\n  withDiagram(mc(17, 1, "Look at the picture.  The man is holding one of the ____.",
    ["bowls", "glasses", "plates", "spoons"], 1,
    ["圖中男子手持的是玻璃杯。", "glasses 正確；bowls、plates、spoons 與圖示不符。"],
    "看圖選字題先確認手持物品的形狀與用途。",
    "容易誤選 plates，但圖中物品明顯是杯子而非盤子。"), imgDiagram("109", "q1.png", "第1題圖")),\n  mc(17, 1, "The boy is`,
  "109-q1");

// 109 Q22 - insert before exam109FoodTruck (after chocolate set)
once(
  `attach(exam109Chocolate, "109-chocolate-bain-marie"`,
  `withDiagram(mc(15, 2, "Which is the right way to work with chocolate in a \"bain-marie\"?",
    ["(A)", "(B)", "(C)", "(D)"], 1,
    ["隔水加熱應是小鍋置於大鍋上方，且水面不超過 50°C、不可讓水濺入巧克力。", "選項 (B) 的裝置與步驟符合文中描述。"],
    "圖示題對照文中隔水加熱的器材配置與注意事項。",
    "容易忽略「水不可進入小鍋」這條規則而選錯步驟圖。"), imgDiagram("109", "q22.png", "第22題隔水加熱步驟圖")),

attach(exam109Chocolate, "109-chocolate-bain-marie"`,
  "109-q22");
rmNote(109);

// 110 Q1, Q17, Q20
once(
  `const exam110Singles = [\n  mc(1, 2, "Listen!  The baby`,
  `const exam110Singles = [\n  withDiagram(mc(17, 1, "In the picture, the boy is ____ the old man.",
    ["smiling at", "dancing with", "cheering for", "bowing to"], 3,
    ["圖中男孩向老先生鞠躬行禮。", "bowing to 正確描述敬禮動作。"],
    "看圖選字題先辨識人物間的禮貌動作。",
    "容易誤選 smiling at，但圖示是鞠躬而非微笑。"), imgDiagram("110", "q1.png", "第1題圖")),\n  mc(1, 2, "Listen!  The baby`,
  "110-q1");

once(
  `], "110-set-17-18", passage18, "Joey 與 Lynn 談 Caldron 餐廳（第17題因需觀看照片選項，無法轉錄，故省略）");`,
  `  withDiagram(mc(16, 3, "Lynn took some photos at Tom's party.  Which is most likely one of them?",
    ["(A)", "(B)", "(C)", "(D)"], 1,
    ["對話中 Lynn 說她拍了很多照片，題目要選最可能的一張。", "依對話情境與派對照片選項，(B) 最合理。"],
    "對話題先整理說話者提到的活動（拍照片），再對照選項圖片。",
    "不要選與派對情境明顯不符的照片。"), imgDiagram("110", "q17.png", "第17題照片選項")),
], "110-set-17-18", passage18, "Joey 與 Lynn 談 Caldron 餐廳");`,
  "110-q17");

once(
  `], "110-set-19-21", passage1921, "Katie 的日記：關於綿羊 Woollie（第20題因需辨認照片選項，無法轉錄，故省略）");`,
  `  withDiagram(mc(16, 3, "Which picture of Woollie and Ms. Clark did Katie talk about in her diary?",
    ["(A)", "(B)", "(C)", "(D)"], 2,
    ["日記提到 Woollie 曾與 Ms. Clark 會面，甚至一起喝茶。", "選項 (C) 的合照最符合日記描述。"],
    "細節題回到日記中描述 Woollie 與 Ms. Clark 互動的句子，再對照照片選項。",
    "容易選只出現 Woollie 而沒有 Ms. Clark 的照片。"), imgDiagram("110", "q20.png", "第20題合照選項")),
], "110-set-19-21", passage1921, "Katie 的日記：關於綿羊 Woollie");`,
  "110-q20");
rmNote(110);

fs.writeFileSync(archivePath, s);
console.log("107-110 patches written; run part2 for 111-115");
