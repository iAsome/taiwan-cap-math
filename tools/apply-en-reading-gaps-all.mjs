// Insert all remaining English reading gap questions (107–115) into archive-exams.js
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const archivePath = path.join(root, "英文會考作戰室", "archive-exams.js");
const analysisPath = path.join(root, "英文會考作戰室", "analysis-data.js");
let s = fs.readFileSync(archivePath, "utf8").replace(/\r\n/g, "\n");

function once(find, repl, label, skipNeedle) {
  if (skipNeedle && s.includes(skipNeedle)) { console.log("skip", label); return; }
  const n = s.indexOf(find);
  if (n < 0) throw new Error("anchor missing: " + label);
  s = s.slice(0, n) + repl + s.slice(n + find.length);
  console.log("ok", label);
}

function rmNote(y) {
  const m = y >= 111 ? 70 : 60;
  s = s.replace(
    new RegExp(`window\\.__ENG_TRANSCRIBED_${y} = \\{\\s*minutes: \\d+,\\s*omittedNote:[^]+?,\\s*questions:`),
    `window.__ENG_TRANSCRIBED_${y} = {\n  minutes: ${m},\n  questions:`);
}

// ── 107 ──
once(
  `const exam107 = [\n  mc(17, 1, "The ___ is so strong today that my hair keeps blowing in the air."`,
  `const exam107 = [\n  withDiagram(mc(17, 1, "Look at the picture.  The girl is ____ the clothes.",
    ["making", "packing", "showing", "washing"], 1,
    ["圖中女孩正在把衣物放進行李箱，動作是打包整理。", "packing 正確；making、showing、washing 與圖示動作不符。"],
    "看圖選字題先描述圖中動作，再選最貼切的動詞。",
    "容易誤選 washing，因為題幹有 clothes，但圖示是打包而非清洗。"), imgDiagram("107", "q1.png", "第1題圖")),\n  mc(17, 1, "The ___ is so strong today that my hair keeps blowing in the air."`,
  "107-q1", 'imgDiagram("107", "q1.png"');

once(
  `    "容易把『狗甩水比洗衣機厲害』這個比喻誤解成『洗衣機的靈感來自狗甩水』的因果關係，但文章其實只是在做效果上的比較，並未提及發明的由來。"),\n];\n\n// (32-34) Josh 與 Eric 討論「待用咖啡」計畫的對話`,
  `    "容易把『狗甩水比洗衣機厲害』這個比喻誤解成『洗衣機的靈感來自狗甩水』的因果關係，但文章其實只是在做效果上的比較，並未提及發明的由來。"),
  withDiagram(mc(16, 4, "The four pictures below show how fast tigers, cats and mice can shake.  From the reading, which picture is most likely correct?",
    ["(A)", "(B)", "(C)", "(D)"], 1,
    ["文章指出體型愈小的動物必須甩得愈快；老鼠一秒 18 次、狗 6 次、熊 4 次。", "圖 (B) 中老鼠甩動頻率最高、大型動物較慢，符合文中大小與速度的對比。"],
    "圖表題先整理文章給的數字或大小對比，再對照選項圖示。",
    "容易忽略『小動物要甩更快』這條規則，誤選大型動物頻率較高的圖。"), imgDiagram("107", "q31.png", "第31題甩水速度圖")),
];\n\n// (32-34) Josh 與 Eric 討論「待用咖啡」計畫的對話`,
  "107-q31", 'imgDiagram("107", "q31.png"');
rmNote(107);

// ── 108 ──
once(
  `const exam108 = [\n  mc(9, 1, "Ms. Liu usually gives`,
  `const exam108 = [\n  withDiagram(mc(17, 1, "Look at the picture.  The mother duck is ____ the baby ducks across the street.",
    ["carrying", "leading", "pushing", "watching"], 1,
    ["圖中母鴨在斑馬線上帶領小鴨前進。", "leading 正確；carrying、pushing、watching 與圖示不符。"],
    "看圖選字題先確認主詞（母鴨）對小鴨做了什麼動作。",
    "容易誤選 carrying，但小鴨是自己走路，並非被抱著。"), imgDiagram("108", "q1.png", "第1題圖")),\n  mc(9, 1, "Ms. Liu usually gives`,
  "108-q1");

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
  "108-q31", 'imgDiagram("108", "q31-chart.png"');

once(
  `    "「不如去年同期」這句話是用來形容週末晚上的生意，容易被誤植到選項中形容平日生意。"),\n];\nattach(exam108Shopping`,
  `    "「不如去年同期」這句話是用來形容週末晚上的生意，容易被誤植到選項中形容平日生意。"),
  withDiagram(mc(16, 3, "Which picture is most likely used in the report?",
    ["(A)", "(B)", "(C)", "(D)"], 1,
    ["報告討論週末下午最忙、建議把特賣從週六晚上改到下午，並增加接駁車。", "圓餅圖 (B) 的版面與比例最能對應報告中週末／平日業績分布的說明。"],
    "圖表選項題要回到報告文字找出最可能被視覺化的數據重點。",
    "四張圓餅圖看似相近，須對照報告強調的時段占比而非隨意猜測。"), imgDiagram("108", "q35.png", "第35題圓餅圖選項")),
];\nattach(exam108Shopping`,
  "108-q35", 'imgDiagram("108", "q35.png"');
rmNote(108);

// ── 109 ──
once(
  `const exam109 = [\n  mc(17, 1, "My mom puts`,
  `const exam109 = [\n  withDiagram(mc(17, 1, "Look at the picture.  The man is holding one of the ____.",
    ["bowls", "glasses", "plates", "spoons"], 1,
    ["圖中男子手持的是玻璃杯。", "glasses 正確；bowls、plates、spoons 與圖示不符。"],
    "看圖選字題先確認手持物品的形狀與用途。",
    "容易誤選 plates，但圖中物品明顯是杯子而非盤子。"), imgDiagram("109", "q1.png", "第1題圖")),\n  mc(17, 1, "My mom puts`,
  "109-q1");

once(
  `const exam109Chocolate = [\n  mc(16, 2, "What does them mean in the reading?"`,
  `const exam109Chocolate = [\n  withDiagram(mc(15, 2, "From the reading, which picture best shows the \\"bain-marie\\" way of working with chocolate?",
    ["(A)", "(B)", "(C)", "(D)"], 1,
    ["隔水加熱應是小鍋置於大鍋上方，且水面不超過 50°C、不可讓水濺入巧克力。", "選項 (B) 的裝置與步驟符合文中描述。"],
    "圖示題對照文中隔水加熱的器材配置與注意事項。",
    "容易忽略「水不可進入小鍋」這條規則而選錯步驟圖。"), imgDiagram("109", "q22.png", "第22題隔水加熱步驟圖")),
  mc(16, 2, "What does them mean in the reading?"`,
  "109-q22");
rmNote(109);

// ── 110 ──
once(
  `const exam110Singles = [\n  mc(1, 1, "Listen!  The baby`,
  `const exam110Singles = [\n  withDiagram(mc(17, 1, "In the picture, the boy is ____ the old man.",
    ["smiling at", "dancing with", "cheering for", "bowing to"], 3,
    ["圖中男孩向老先生鞠躬行禮。", "bowing to 正確描述敬禮動作。", "其餘選項與圖示動作不符。"],
    "看圖選字題先辨識人物間的禮貌動作。",
    "容易誤選 smiling at，但圖示是鞠躬而非微笑。"), imgDiagram("110", "q1.png", "第1題圖")),\n  mc(1, 1, "Listen!  The baby`,
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

// ── 111 ──
once(
  `const exam111Singles = [\n  mc(9, 1, "The movie starts at two o'clock`,
  `const exam111Singles = [\n  withDiagram(mc(17, 1, "Look at the picture.  The woman is putting ____ on the cake.",
    ["candles", "forks", "plates", "strawberries"], 0,
    ["圖中女子正在把蠟燭插在蛋糕上。", "candles 正確；forks、plates、strawberries 與圖示不符。"],
    "看圖選字題先確認圖中人物對蛋糕做了什麼。", "容易誤選 strawberries，但圖示是蠟燭而非水果。"), imgDiagram("111", "q1.png", "第1題圖")),\n  mc(9, 1, "The movie starts at two o'clock`,
  "111-q1");

once(
  `], "111-set-25-26", passage2526, "Darrell 與 Marina 談 Pinterest");`,
  `const exam111Set2124 = attach([
  withDiagram(mc(15, 2, "What does Tea-Rock celebrate?",
    ["Their sales in 20 countries.", "The coming out of their 20th kind of tea.", "Their 20th year of business.", "The opening of their 20th store in the USA."], 2,
    ["Tea-Rock 20 週年廣告標示 20 years of great tea，慶祝的是創業滿 20 年。", "其餘選項把 20 誤解為國家數、茶種數或展店數，與廣告主題不符。"],
    "看圖廣告題先找最大、最醒目的數字或標語在慶祝什麼。", "不要看到 20 就聯想到 20 種茶或 20 間店。"), imgDiagram("111", "q21-ad.png", "Tea-Rock 20 週年廣告")),
  withDiagram(mc(16, 3, "Here is the postcard Jason is going to send to Tea-Rock 20.  What else does he need to put on the postcard before he sends it?",
    ["His age.", "His address.", "His birthday.", "Another picture of the tea cup."], 2,
    ["明信片上已有祝福文字，但寄信還需要寫上寄件人資訊；題意指向 Jason 仍須補上個人資料。", "官方答案為 (C) His birthday，對應明信片上仍缺的個人資訊欄位。"],
    "明信片題要對照圖中已寫與未寫的欄位，找出寄送前仍須補上的項目。", "不要誤以為還缺地址，應依試題本圖示與官方答案判斷。"), imgDiagram("111", "q22-postcard.png", "Jason 的明信片")),
  withDiagram(mc(16, 3, "What can we learn about sugar from the infographic?",
    ["There are 4 g of sugar in 66 g of ice cream.", "A woman can eat as much sugar a day as a man can.", "Taiwan eats more sugar for each person than the US does.", "400 ml of rice milk has less sugar than 400 ml of grape juice."], 3,
    ["資訊圖表比較各飲品含糖量，400 ml 米漿的糖低於 400 ml 葡萄汁。", "其餘選項與圖表數據或性別建議攝取量不符。"],
    "圖表題逐項核對選項中的數字是否與圖中一致。", "不要憑常識猜測，要以圖表數據為準。"), imgDiagram("111", "q23-infographic.png", "糖攝取資訊圖表")),
  withDiagram(mc(15, 3, "What can be a reason why the list of \\"Sugar that is hidden in foods and drinks\\" is put in the infographic?",
    ["To help us understand how sugar hurts our body.", "To show what kinds of foods and drinks are popular with children.", "To tell us that we often have more sugar than we can without knowing it.", "To let us know how much sugar is enough to make foods and drinks taste good."], 2,
    ["隱藏糖清單的目的在提醒人們常不知不覺攝取過量糖分。", "其餘選項偏離「隱藏糖」這個資訊圖的重點。"],
    "資訊圖各區塊的功能要對照標題用字（hidden）判斷目的。", "不要選只談「糖如何傷身」而忽略「不知不覺過量」這層意思。"), imgDiagram("111", "q24-infographic.png", "隱藏糖清單")),
], "111-set-21-24", "（第21–24題依試題本廣告、明信片與資訊圖作答，見各題 diagram。）", "Tea-Rock 20 週年與糖攝取資訊圖");

], "111-set-25-26", passage2526, "Darrell 與 Marina 談 Pinterest");`,
  "111-set2124");

once(
  `], "111-set-30-31", passage3031, "談「無加班日」為何難以落實（第32題因需圖表數據判讀，無法轉錄，故省略）");`,
  `  withDiagram(mc(16, 4, "What can we learn from Figure 1 and Figure 2?",
    ["Long working hours killed more women than men in 2014.", "Long working hours kills more and more workers every year.", "Men usually have a bigger chance to get paid more and rise higher when they work the same hours as women.", "Men and women have almost the same chance to get paid more and rise higher when they work 2,200 hours."], 3,
    ["Figure 2 顯示工時 2,200 小時時，男女獲加薪升遷的機會幾乎相同。", "其餘選項或與圖表數據不符，或過度延伸。"],
    "雙圖表題要分別讀 Figure 1 與 Figure 2 再對照選項。", "不要混淆兩張圖分別呈現的變項。"), imgDiagram("111", "q32-charts.png", "第32題圖表")),
], "111-set-30-31", passage3031, "談「無加班日」為何難以落實");`,
  "111-q32");

once(
  `const exam111Set3436 = attach([\n  mc(18, 2, "What does resentful mean in the reading?"`,
  `const exam111Set3436 = attach([\n  withDiagram(mc(16, 4, "Which map is most likely the map of Cameroon in 1962?",
    ["(A)", "(B)", "(C)", "(D)"], 3,
    ["1962 年喀麥隆為法、英兩部分合併後的聯邦共和國，須對照分區與官方語言分布。", "選項 (D) 的疆域與分區最符合 1962 年合併後的狀態。"],
    "歷史地圖題結合文章時間點（1960–1962）再選圖。", "不要選只顯示殖民時期或未合併前的地圖。"), imgDiagram("111", "q33-maps.png", "第33題喀麥隆地圖")),
  mc(18, 2, "What does resentful mean in the reading?"`,
  "111-q33");

once(
  `], "111-set-37-38", passage3738, "南岸步道旅遊資訊（第39題因需辨識步道地圖上的路段編號，無法轉錄，故省略）");`,
  `  withDiagram(mc(16, 4, "Kaylen will start his trip from Cove.  He plans to visit one of the old castles.  He also wants to go birdwatching near the river.  Which parts of the trail should Kaylen go on?",
    ["Parts 1 and 2.", "Parts 1 and 2a.", "Parts 2 and 3.", "Parts 4 and 4a."], 0,
    ["從 Cove 出發，要訪城堡且到河邊賞鳥，須走 Parts 1 與 2 的路段。", "其餘組合無法同時滿足城堡與河邊賞鳥路線。"],
    "地圖路線題先標出起點、必訪景點，再對照地圖編號。", "不要忽略 2a、4a 等支線與主線的差別。"), imgDiagram("111", "q39-map.png", "第39題步道地圖")),
], "111-set-37-38", passage3738, "南岸步道旅遊資訊");`,
  "111-q39");

once(
  `], "111-set-40-43", passage4043, "迴文與逆序構詞遊戲（第41題因題目對應文中圖片形式呈現的例字對照表，無法轉錄，故省略）");`,
  `  withDiagram(mc(15, 3, "Choose the best answer for blank (41) in the passage.",
    ["take sit", "Ms Easy", "it makes", "me steak"], 2,
    ["例字對照表顯示 steak 重排字母可得 it makes。", "其餘選項字母無法完全對應 steak。"],
    "逆序構詞克漏字對照例字表，重排字母驗證選項。", "不要只看字面相似而忽略字母數量。"), imgDiagram("111", "q41-table.png", "第41題逆序構詞例字")),
], "111-set-40-43", passage4043, "迴文與逆序構詞遊戲");`,
  "111-q41");

once(
  `    ...exam111Set2526,\n    ...exam111Set2729,\n    ...exam111Set3031,`,
  `    ...exam111Set2124,\n    ...exam111Set2526,\n    ...exam111Set2729,\n    ...exam111Set3031,`,
  "111-questions-order");
rmNote(111);

// ── 112 ──
once(
  `const exam112 = [\n  mc(17, 1, "Dennis enjoys`,
  `const exam112 = [\n  withDiagram(mc(17, 1, "Look at the picture.  The man is holding a ____ of grapes in his hands.",
    ["bag", "basket", "bowl", "box"], 1,
    ["圖中男子雙手捧著裝葡萄的籃子。", "basket 正確；bag、bowl、box 與圖示不符。"],
    "看圖選字題注意容器形狀（有提把的籃子）。", "不要選 bowl，圖示是有提把的籃子而非碗。"), imgDiagram("112", "q1.png", "第1題圖")),\n  mc(17, 1, "Dennis enjoys`,
  "112-q1");

once(
  `const exam112Set1 = [\n  mc(15, 2, "What is the trick that the mosquito uses in rain?"`,
  `const exam112SetMenu = attach([
  withDiagram(mc(16, 4, "Amy went to Four Seasons' Kitchen with her mother after she collected 15 stars.  They ordered two Garden Sandwiches, an Autumn Wind, and a Winter Snow.  After using the stars, how much did they pay for their meals?",
    ["$290.", "$230.", "$220.", "$160."], 1,
    ["依菜單價格與 15 顆星折抵規則計算總價。", "核對後應付 $230，對應選項 (B)。"],
    "菜單題把每道菜價格與集點折抵規則逐項相加。", "不要漏算星數折抵或加點項目。"), imgDiagram("112", "q24-menu.png", "第24–25題菜單")),
  withDiagram(mc(16, 4, "Amy wants to bring her friends to Four Seasons' Kitchen in August.  She looks at her calendar to pick a time to go there.  Which are the time and date she can choose?",
    ["8:30 pm, August 1.", "5:00 pm, August 11.", "3:00 pm, August 13.", "2:00 pm, August 28."], 1,
    ["結合月曆上的公休日與營業時段，排除不可選的日期時間。", "8/11 下午 5:00 符合營業時間且非公休。"],
    "月曆題同時核對營業時間與標示公休／特別日。", "不要只看時間而忽略月曆上打叉的日期。"), imgDiagram("112", "q25-calendar.png", "第25題月曆")),
], "112-set-24-25", "（第24–25題依試題本菜單與月曆作答，見 diagram。）", "Four Seasons' Kitchen 菜單與月曆");

const exam112SetBirds = attach([
  withDiagram(mc(15, 2, "According to the notes, which is the WRONG way to help a baby bird that is out of its nest?",
    ["Feed it before you take it to a hospital.", "Leave it alone if it is not hurt and has feathers.", "Call the animal center if you can't find its nest.", "Put it back in its nest if it is not hurt and has few feathers."], 0,
    ["注意事項未建議先餵食，餵食可能是錯誤做法。", "其餘選項與圖文注意事項一致。"],
    "WRONG 題找出選項中與圖文建議矛盾的項目。", "不要憑善意直覺選餵食。"), imgDiagram("112", "q26-27-birds.png", "離巢幼鳥注意事項")),
  withDiagram(mc(15, 2, "According to the notes, what do birds do if their babies have the smell of people on them?",
    ["They keep taking care of them.", "They push them out of the nest.", "They clean them until the smell goes away.", "They leave them behind and move to a new nest."], 0,
    ["圖文說明鳥類不會因人類氣味而棄養幼鳥。", "其餘選項是常見迷思，與圖文相反。"],
    "細節題直接對照圖文中關於「人類氣味」的說明句。", "不要選民間迷思中「母鳥會棄巢」的說法。"), imgDiagram("112", "q26-27-birds.png", "離巢幼鳥注意事項")),
], "112-set-26-27", "（第26–27題依試題本離巢幼鳥圖文作答。）", "離巢幼鳥處理注意事項");

const exam112SetWaste = attach([
  withDiagram(mc(16, 3, "According to the reading, which is one of the reasons for food waste?",
    ["Stores do not know how to pack food well.", "Farmers do not have enough machines to collect food.", "There is no refrigerator on the truck to keep food fresh.", "Factories do not have enough trucks to carry food to stores."], 2,
    ["圖表說明運送階段因缺少冷藏設備導致食物腐壞浪費。", "其餘選項文中未列為主要原因。"],
    "原因題回到圖表或文字中標示的運送／保存問題。", "不要選看似合理但圖表未提及的原因。"), imgDiagram("112", "q28-29-waste.png", "食物浪費圖表")),
  withDiagram(mc(16, 4, "Which is true about food waste at each stage in the three parts of the world?",
    ["For each area, the highest percentage of food waste happens at Stage 5.", "Europe has a lower percentage of food waste at Stage 3 than the other two areas.", "North America & Oceania has a higher percentage of food waste at Stage 1 than Europe.", "South & Southeast Asia has a higher percentage of food waste at Stage 4 than the other two areas."], 3,
    ["比對三區各階段百分比，南亞及東南亞在 Stage 4 占比高於另兩區。", "其餘選項與圖表數據不符。"],
    "跨區比較題逐區逐階段核對百分比高低。", "不要只讀單一區域就下結論。"), imgDiagram("112", "q28-29-waste.png", "食物浪費圖表")),
], "112-set-28-29", "（第28–29題依試題本各區食物浪費圖表作答。）", "各區食物浪費階段圖表");

const exam112Set1 = [\n  mc(15, 2, "What is the trick that the mosquito uses in rain?"`,
  "112-sets-24-29");

once(
  `    ...exam112,\n    ...attach(exam112Set1`,
  `    ...exam112,\n    ...exam112SetMenu,\n    ...exam112SetBirds,\n    ...exam112SetWaste,\n    ...attach(exam112Set1`,
  "112-questions-order");
rmNote(112);

// ── 113 ──
once(
  `const exam113 = [\n  mc(17, 1, "My ___ hurts so much`,
  `const exam113 = [\n  withDiagram(mc(17, 1, "Look at the picture.  There is ____ under the door.",
    ["a box", "a cat", "a key", "a paper"], 2,
    ["圖中門下露出鑰匙。", "key 正確；box、cat、paper 與圖示不符。"],
    "看圖選字題先確認門下露出的是什麼物品。", "不要選 paper，圖示是鑰匙而非紙張。"), imgDiagram("113", "q1.png", "第1題圖")),\n  mc(17, 1, "My ___ hurts so much`,
  "113-q1");

once(
  `const exam113Set2 = [\n  mc(16, 3, "What kind of people do Yan's and Chang's friends most likely think Yan and Chang are?"`,
  `const exam113SetBakery = attach([
  withDiagram(mc(16, 4, "Kevin is going to buy some fresh bread at Baker's Kitchen.  He loves white bread, his mom likes farm bread, his father enjoys bagels, and his sister eats only challah.  Which is the earliest possible time for him to get all these breads for his family?",
    ["11:00am.", "4:00pm.", "5:00pm.", "7:00pm."], 2,
    ["對照麵包店時刻表，各品項出爐時間不同，取最晚能買齊四種的時段。", "下午 5:00 是四種麵包皆可買到的最早時間。"],
    "時刻表題找出所有品項都可購買的交集時段。", "不要只看第一種麵包出爐時間。"), imgDiagram("113", "q24-25-bakery.png", "麵包店時刻表")),
  withDiagram(mc(15, 2, "What do we know about Baker's Kitchen?",
    ["It is open five days a week.", "Its breads are half price one hour before closing.", "Its croissants and pretzels are sold on weekends.", "Its members can save $100 when they shop on Fridays."], 1,
    ["時刻表或公告寫明打烊前一小時麵包半價。", "其餘選項與圖中營業／優惠規則不符。"],
    "細節題逐條核對選項是否在時刻表文字中出現。", "不要混淆會員優惠與半價時段。"), imgDiagram("113", "q24-25-bakery.png", "麵包店時刻表")),
], "113-set-24-25", "（第24–25題依試題本麵包店時刻表作答。）", "Baker's Kitchen 時刻表");

const exam113SetFestival = attach([
  withDiagram(mc(15, 2, "What is recommended to people who want to visit the festival?",
    ["Using the free festival bus service.", "Visiting the festival on the weekend.", "Entering Satyr's Park from Fox Street.", "Parking in Garden Square and walking to the festival."], 0,
    ["地圖／海報建議搭乘免費接駁巴士前往會場。", "其餘選項與圖中交通建議不符。"],
    "建議題找海報或地圖上標示 recommended 的項目。", "不要選地圖未標示的入口或停車方式。"), imgDiagram("113", "q26-27-map.png", "園遊會地圖")),
  withDiagram(mc(16, 3, "What can we learn about the farmers' market from the map?",
    ["The farmers' market is next to the flower market.", "The farmers' market and the festival are on the same block.", "You can go to the farmers' market by taking Bus No. 157 to Puppy Street.", "The nearest metro station to the farmers' market is the Koala Street Station."], 3,
    ["地圖顯示農夫市集最近的地鐵站為 Koala Street Station。", "其餘選項與地圖位置或路線不符。"],
    "地圖題逐項核對地標相對位置與站名。", "不要混淆不同街道或公車路線。"), imgDiagram("113", "q26-27-map.png", "園遊會地圖")),
], "113-set-26-27", "（第26–27題依試題本園遊會地圖作答。）", "市集園遊會地圖");

const exam113Set2 = [\n  mc(16, 3, "What kind of people do Yan's and Chang's friends most likely think Yan and Chang are?"`,
  "113-sets-24-27");

once(
  `const exam113Set6 = [\n  mc(15, 2, "Though it has been a very popular topic this year, social distancing ___.`,
  `const exam113Set6 = [\n  withDiagram(mc(16, 4, "From the picture, we can see that ____ started social distancing earlier than the other three cities.",
    ["Portland", "New York", "Denver", "Pittsburgh"], 1,
    ["長條圖顯示紐約最早開始社交距離措施。", "其餘城市起始時間較晚。"],
    "圖表題讀取各城市起始時間的早晚。", "不要混淆 Portland 與 Denver 的數據。"), imgDiagram("113", "q41-chart.png", "第41題社交距離長條圖")),
  mc(15, 2, "Though it has been a very popular topic this year, social distancing ___.`,
  "113-q41");

once(
  `"Philip's Night Out"),\n    ...attach(exam113Set2, "113-yan-chang", "Yan lived a good life in a big house.`,
  `"Philip's Night Out"),\n    ...exam113SetBakery,\n    ...exam113SetFestival,\n    ...attach(exam113Set2, "113-yan-chang", "Yan lived a good life in a big house.`,
  "113-questions-order", "...exam113SetBakery");
rmNote(113);

// ── 114 ──
once(
  `const exam114 = [\n  mc(18, 1, "When I was a teenager`,
  `const exam114 = [\n  withDiagram(mc(17, 1, "Look at the picture.  A ____ is flying over the houses.",
    ["bird", "butterfly", "kite", "plane"], 3,
    ["圖中是一架飛機飛越房屋上方。", "plane 正確；bird、butterfly、kite 與圖示不符。"],
    "看圖選字題先確認飛行物種類。", "不要選 bird，圖示明顯是飛機。"), imgDiagram("114", "q1.png", "第1題圖")),\n  mc(18, 1, "When I was a teenager`,
  "114-q1");

const chat114 = `Jenny: Hey guys, guess what? I'm getting married next year!\nLinda: Wow, I'm so happy for you.\nMark: I have good news too! I just got the job I've wanted so much.\nLinda: Come on, Mark. Don't start again.\nLinda: You're stealing Jenny's thunder. Jenny was telling us about her big news. It's very important to her. And you want us to hear about your new job now?\nMark: I didn't mean that. I just...\nJenny: I agree. Last time when we were talking about how delicious Linda's cake was, you started telling us about the chocolate cake you made at home.\nMark: All right, all right, my problem. Sorry, Jenny. I'll never do that again. So do you want to know what job I got?\nLinda: MARK!!`;

once(
  `const examStealThunder23 = [\n  mc(18, 3, "Which is most likely an example of stealing someone's thunder?"`,
  `const examMarkLinda22 = attach([
  withDiagram(mc(16, 3, "What do we know about Mark from the dialogue?",
    ["He made Linda unhappy.", "He is looking for a new job.", "He did not like Linda's cake.", "He is getting married to Jenny."], 0,
    ["Linda 兩次對 Mark 搶話題感到不滿（Don't start again、MARK!!），Mark 的行為讓她不高興。", "Mark 已找到新工作而非正在找；Jenny 說 Linda 的蛋糕好吃，並非 Mark 不喜歡；結婚的是 Jenny 而非 Mark。"],
    "對話題整理各角色對 Mark 的反應，找出最合理的推論。", "不要選 Mark 已達成的事實（找到工作）當作『我們對 Mark 的了解』。"), imgDiagram("114", "q22-23-chat.png", "Mark、Linda 對話截圖")),
], "114-set-22", chat114, "Friends Forever 群組對話");

const examStealThunder23 = [\n  mc(18, 3, "Which is most likely an example of stealing someone's thunder?"`,
  "114-q22");

once(
  `const examWhiteLake24 = [\n  mc(15, 2, "What can you do with a White Lake City Card?"`,
  `const examWhiteLake24 = [\n  withDiagram(mc(16, 4, "Stacy is going to White Lake City and is staying at a hotel near the White Lake Main Station.  She wants to visit the Museum of White Lake City History on Friday and see White Lake on Saturday.  If she plans to buy (a) White Lake City Card(s), which of the four choices will be best for her and cost her the least?",
    ["A 3-day Card for Zone 1.", "A Weekend Card for Zones 1-3.", "A 1-day Card for Zone 1 and a Weekend Card for Zones 1-2.", "A 1-day Card for Zones 1-2 and a Weekend Card for Zones 1-2."], 2,
    ["依地圖分區與週末／平日票種，週五參觀博物館需 Zone 1 一日票，週六看湖需週末票。", "選項 (C) 組合最省且涵蓋兩日行程。"],
    "票種規劃題先標出每日所在分區，再對照地圖與票價表。", "不要選涵蓋過多不必要分區的票種。"), imgDiagram("114", "q25-map.png", "White Lake 分區地圖")),
  mc(15, 2, "What can you do with a White Lake City Card?"`,
  "114-q25");

once(
  `questions: [...exam114, ...examRex2021, ...examStealThunder23,`,
  `questions: [...exam114, ...examRex2021, ...examMarkLinda22, ...examStealThunder23,`,
  "114-questions-order", "...examMarkLinda22");
rmNote(114);

// ── 115 ──
once(
  `const exam115 = [\n  mc(17, 1, "Rita ___ her dogs`,
  `const exam115 = [\n  withDiagram(mc(17, 1, "Look at the picture.  All of the students who are exercising are wearing ____.",
    ["caps", "glasses", "jackets", "pants"], 1,
    ["圖中做運動的學生都戴著眼鏡。", "glasses 正確；caps、jackets、pants 與圖示不符。"],
    "看圖選字題注意所有學生共同的穿戴物。", "不要選 caps，圖中無人戴帽子。"), imgDiagram("115", "q1.png", "第1題圖")),\n  mc(17, 1, "Rita ___ her dogs`,
  "115-q1");

once(
  `const examHawkins2223 = [\n  mc(16, 3, "According to the comics, what kind of person is Hawkins?"`,
  `const exam115SetRecipe = attach([
  withDiagram(mc(16, 3, "Amanda wants to make fruit tea by following The Best Fruit Tea You Can Make at Home.  She has several kinds of fruit in the kitchen: apples, bananas, oranges, papayas, pears, and strawberries.  Which are some of the fruits she can use to make the fruit tea?",
    ["Oranges, papayas and pears.", "Apples, bananas and oranges.", "Apples, oranges and strawberries.", "Bananas, papayas and strawberries."], 2,
    ["食譜圖列可用水果，對照 Amanda 家中有的品項。", "蘋果、柳橙、草莓皆在食譜與 Amanda 清單中，對應 (C)。"],
    "食譜題把圖中允許的水果與題幹清單取交集。", "不要選食譜未列或 Amanda 沒有的水果組合。"), imgDiagram("115", "q20-21-recipe.png", "水果茶食譜")),
  withDiagram(mc(15, 2, "According to the reading, which is correct when we make the fruit tea?",
    ["Boiling water with sugar in it.", "Making sure to take out the fruit.", "Putting in the fruit and the lemon juice at the same time.", "Leaving the teabags in the pot of hot water for 2 to 3 minutes."], 3,
    ["食譜步驟寫明茶包在熱水中浸泡 2–3 分鐘。", "其餘選項與食譜圖示步驟不符。"],
    "步驟題依食譜圖順序逐條核對。", "不要選看似合理但圖中未出現的煮法。"), imgDiagram("115", "q20-21-recipe.png", "水果茶食譜")),
], "115-set-20-21", "（第20–21題依試題本食譜圖作答，見 diagram。）", "The Best Fruit Tea You Can Make at Home");

const examHawkins2223 = [\n  mc(16, 3, "According to the comics, what kind of person is Hawkins?"`,
  "115-set-recipe");

once(
  `    "容易誤選(C)，因為看起來像是關於Rabbit's Temple規定的選項，但規則其實是『進入前要脫鞋』，選項描述的『沒穿鞋進入』恰好符合規定，並不是違規行為，這是文字陷阱。"),\n];\nattach(examMarigolds2425`,
  `    "容易誤選(C)，因為看起來像是關於Rabbit's Temple規定的選項，但規則其實是『進入前要脫鞋』，選項描述的『沒穿鞋進入』恰好符合規定，並不是違規行為，這是文字陷阱。"),
  withDiagram(mc(16, 4, "After shopping at the gift shop of the Main House, Lizzy walks out and sees the Family Library in front of her.  She wants to visit the Rose Garden.  How can she get there?",
    ["Turn left and walk past the Main House, then go straight and turn right at the corner.", "Turn left and walk past Sir Archie's House, then turn right and walk past the Main House.", "Turn right and go straight to the Farmyard, then turn right and go straight, then turn left at the corner.", "Turn right and walk through the Butterfly Garden, then walk past the Rabbit's Temple and the café."], 2,
    ["依場館地圖，從 Main House 禮品店出發到 Rose Garden 的路線為 (C)。", "其餘路線與地圖標示不符或繞遠。"],
    "地圖路線題先標記起點與目的地，再沿地圖試走。", "不要忽略 Farmyard 轉角等關鍵地標。"), imgDiagram("115", "q26-map.png", "Marigolds' Home 地圖")),
];\nattach(examMarigolds2425`,
  "115-q26");

once(
  `questions: [...exam115, ...examHawkins2223,`,
  `questions: [...exam115, ...exam115SetRecipe, ...examHawkins2223,`,
  "115-questions-order", "...exam115SetRecipe");
rmNote(115);

fs.writeFileSync(archivePath, s);
console.log("archive-exams.js patched");

// Sync analysis-data primaryUnits + counts from archive
const sandbox = { window: {}, console, Date, Math };
vm.createContext(sandbox);
for (const f of ["english-data.js", "archive-exams.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, "英文會考作戰室", f), "utf8"), sandbox, { filename: f });
}
const { ARCHIVE_EXAMS } = sandbox.window;
let analysis = fs.readFileSync(analysisPath, "utf8");
const years = Object.keys(ARCHIVE_EXAMS).sort();

function abilityBucket(q) {
  if (!q.passageId) return "knowledge";
  return q.difficulty <= 2 ? "comprehension" : "inquiry";
}

for (const y of years) {
  const qs = ARCHIVE_EXAMS[y].questions;
  const units = qs.map(q => q.unitId);
  const abilities = { knowledge: 0, comprehension: 0, inquiry: 0 };
  for (const q of qs) abilities[abilityBucket(q)]++;
  const unitsStr = units.join(",");
  analysis = analysis.replace(
    new RegExp(`(\\s+${y}: \\[)[^\\]]+(\\],)`),
    `$1${unitsStr}$2`
  );
  analysis = analysis.replace(
    new RegExp(`${y}: \\{ count: \\d+, abilities: \\{ knowledge: \\d+, comprehension: \\d+, inquiry: \\d+ \\} \\}`),
    `${y}: { count: ${qs.length}, abilities: { knowledge: ${abilities.knowledge}, comprehension: ${abilities.comprehension}, inquiry: ${abilities.inquiry} } }`
  );
}
fs.writeFileSync(analysisPath, analysis);
console.log("analysis-data.js synced for", years.join(", "));
