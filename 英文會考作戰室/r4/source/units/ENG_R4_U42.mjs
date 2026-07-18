import { defineChoiceQuestions as questions, defineEnglishUnit } from "../define-unit.mjs";

const skillIds = Array.from({ length: 6 }, (_, index) => `ENG_R4_S${279 + index}`);
const x = (value) => String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

const cards = [
  { title: "Harbor Day", schedule: [["09:10", "Pier", "ON TIME"], ["10:40", "Museum", "DELAY 10 MIN"], ["12:00", "Market", "FULL"]], menu: [["Bean Wrap", "$4", "VEGAN"], ["Fish Roll", "$6", "CONTAINS FISH"], ["Fruit Cup", "$3", "NUT-FREE"]], legend: [["TRIANGLE", "Workshop", "3"], ["SQUARE", "Help Desk", "1"], ["CIRCLE", "Water Point", "2"]], chart: { type: "bar", title: "Visitors by Hour", unit: "people", labels: ["9 AM", "10 AM", "11 AM"], values: [20, 35, 30] }, note: "Workshop booking closes at 10:20." },
  { title: "Hill Walk", schedule: [["08:30", "East Gate", "OPEN"], ["09:15", "Lake Trail", "CLOSED"], ["10:05", "Peak Bus", "5 SEATS"]], menu: [["Oat Bowl", "$5", "CONTAINS NUTS"], ["Rice Box", "$7", "VEGAN"], ["Soup", "$4", "HOT"]], legend: [["DOT", "Rest Area", "2"], ["STRIPE", "Steep Path", "1"], ["CROSS", "First Aid", "1"]], chart: { type: "line", title: "Walkers by Day", unit: "people", labels: ["Mon", "Tue", "Wed"], values: [18, 24, 12] }, note: "Children under 12 need an adult." },
  { title: "Book Fair", schedule: [["10:00", "Hall A", "OPEN"], ["11:30", "Hall B", "AUTHOR TALK"], ["13:00", "Hall C", "FULL"]], menu: [["Tea", "$2", "HOT"], ["Sandwich", "$5", "VEGETARIAN"], ["Cookie", "$3", "CONTAINS NUTS"]], legend: [["BOOK", "New Title", "4"], ["MIC", "Talk", "2"], ["STAR", "Signing", "1"]], chart: { type: "pie", title: "Books Sold by Genre", unit: "%", labels: ["Mystery", "Science", "Travel"], values: [40, 25, 35] }, note: "The signing line closes at 12:40." },
  { title: "Green Market", schedule: [["07:45", "North Stall", "OPEN"], ["09:00", "Demo Tent", "START"], ["10:30", "Farm Tour", "FULL"]], menu: [["Apple Bag", "$4", "LOCAL"], ["Herb Pot", "$6", "KEEP UPRIGHT"], ["Bread", "$5", "CONTAINS GLUTEN"]], legend: [["LEAF", "Organic Stall", "3"], ["JAR", "Refill Point", "2"], ["BASKET", "Pickup Desk", "1"]], chart: { type: "bar", title: "Waste by Day", unit: "kg", labels: ["Fri", "Sat", "Sun"], values: [12, 8, 5] }, note: "Refill jars must be clean." },
  { title: "Sports Day", schedule: [["08:00", "Track", "CHECK IN"], ["09:20", "Court", "MATCH"], ["11:00", "Pool", "CANCELLED"]], menu: [["Water", "$2", "COLD"], ["Veg Box", "$6", "VEGAN"], ["Yogurt", "$3", "CONTAINS MILK"]], legend: [["FLAG", "Event", "4"], ["WHISTLE", "Coach", "2"], ["CROSS", "First Aid", "1"]], chart: { type: "line", title: "Team Points", unit: "points", labels: ["Red", "Blue", "Gold"], values: [18, 24, 21] }, note: "Court players report 15 minutes early." },
  { title: "Art Night", schedule: [["16:30", "Gallery", "OPEN"], ["17:15", "Studio", "WORKSHOP"], ["18:40", "Roof", "FULL"]], menu: [["Juice", "$3", "COLD"], ["Pie", "$5", "CONTAINS NUTS"], ["Salad", "$6", "VEGAN"]], legend: [["FRAME", "Exhibit", "5"], ["HANDS", "Activity", "2"], ["STAR", "Vote Point", "1"]], chart: { type: "pie", title: "Visitor Votes", unit: "%", labels: ["Clay", "Photo", "Print"], values: [30, 45, 25] }, note: "Workshop aprons are provided." },
  { title: "River Cleanup", schedule: [["07:30", "Dock", "MEET"], ["08:10", "East Bank", "TEAM A"], ["09:00", "West Bank", "TEAM B"]], menu: [["Banana", "$2", "FRESH"], ["Soup", "$4", "HOT"], ["Wrap", "$5", "VEGAN"]], legend: [["BAG", "Waste Bags", "6"], ["GLOVE", "Glove Station", "2"], ["CROSS", "First Aid", "1"]], chart: { type: "bar", title: "Bags Collected", unit: "bags", labels: ["Zone A", "Zone B", "Zone C"], values: [14, 20, 11] }, note: "Boots are required at West Bank." },
  { title: "Music Picnic", schedule: [["14:00", "Lawn Gate", "OPEN"], ["15:10", "Small Stage", "DUO"], ["16:30", "Main Stage", "DELAY 20 MIN"]], menu: [["Lemonade", "$3", "COLD"], ["Rice Ball", "$4", "VEGAN"], ["Brownie", "$4", "CONTAINS NUTS"]], legend: [["NOTE", "Performance", "3"], ["CHAIR", "Seating Area", "2"], ["DROP", "Water Point", "1"]], chart: { type: "line", title: "Audience by Style", unit: "people", labels: ["Folk", "Jazz", "Pop"], values: [50, 35, 65] }, note: "Chairs may not enter the front zone." },
  { title: "Science Club", schedule: [["15:30", "Lab A", "OPEN"], ["16:20", "Lab B", "DEMO"], ["17:10", "Yard", "CANCELLED"]], menu: [["Milk Tea", "$4", "CONTAINS MILK"], ["Veg Roll", "$5", "VEGAN"], ["Nut Bar", "$3", "CONTAINS NUTS"]], legend: [["FLASK", "Experiment", "4"], ["GEAR", "Build Area", "2"], ["EYE", "Safety Check", "1"]], chart: { type: "pie", title: "Experiment Success Share", unit: "%", labels: ["Solar", "Water", "Wind"], values: [30, 40, 30] }, note: "Goggles are required in Lab B." },
  { title: "Night Bus", schedule: [["19:05", "Central", "ON TIME"], ["20:15", "River", "DELAY 15 MIN"], ["21:40", "Hill", "LAST BUS"]], menu: [["Noodles", "$6", "HOT"], ["Salad", "$5", "VEGAN"], ["Cake", "$4", "CONTAINS MILK"]], legend: [["BUS", "Route", "3"], ["MOON", "Night Stop", "2"], ["HOUSE", "Shelter", "1"]], chart: { type: "bar", title: "Riders by Route", unit: "people", labels: ["Route A", "Route B", "Route C"], values: [22, 16, 28] }, note: "The last bus accepts exact fare only." },
  { title: "Museum Day", schedule: [["09:30", "East Door", "OPEN"], ["10:50", "Room 2", "TOUR"], ["12:20", "Garden", "CLOSED"]], menu: [["Tea", "$3", "HOT"], ["Veg Soup", "$5", "VEGAN"], ["Muffin", "$4", "CONTAINS NUTS"]], legend: [["VASE", "History Room", "4"], ["TREE", "Garden Point", "2"], ["HEADSET", "Audio Desk", "1"]], chart: { type: "line", title: "Visits by Gallery", unit: "visits", labels: ["Ancient", "Nature", "Design"], values: [32, 48, 40] }, note: "The audio desk closes at 11:45." },
  { title: "Community Class", schedule: [["13:00", "Room 1", "ENGLISH"], ["14:30", "Room 2", "COOKING"], ["16:00", "Room 3", "FULL"]], menu: [["Tea", "$2", "HOT"], ["Rice Box", "$6", "VEGAN"], ["Cookie", "$3", "CONTAINS NUTS"]], legend: [["PENCIL", "Study Activity", "3"], ["PAN", "Cooking Activity", "2"], ["MUSIC", "Movement Activity", "1"]], chart: { type: "pie", title: "Class Seat Share", unit: "%", labels: ["English", "Cooking", "Dance"], values: [30, 20, 50] }, note: "Cooking class requires registration before noon." },
];

function pie(chart) {
  let angle = -90;
  return chart.values.map((value, index) => {
    const next = angle + value * 3.6;
    const point = (a) => [470 + 66 * Math.cos(a * Math.PI / 180), 352 + 66 * Math.sin(a * Math.PI / 180)];
    const [x1, y1] = point(angle); const [x2, y2] = point(next);
    const path = `<path d="M470 352 L${x1.toFixed(2)} ${y1.toFixed(2)} A66 66 0 ${value > 50 ? 1 : 0} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} Z" fill="url(#p${index})" stroke="#000" stroke-width="2"/>`;
    angle = next;
    return path;
  }).join("");
}

function chartSvg(chart) {
  if (chart.type === "pie") return `${pie(chart)}${chart.labels.map((label, i) => `<rect x="555" y="${300 + i * 38}" width="22" height="22" fill="url(#p${i})" stroke="#000"/><text x="585" y="${317 + i * 38}" font-size="14" font-family="sans-serif">${x(label)} ${chart.values[i]}%</text>`).join("")}`;
  const max = Math.max(...chart.values);
  const points = chart.values.map((value, i) => [430 + i * 105, 420 - value / max * 110]);
  const marks = chart.type === "bar"
    ? points.map(([px, py], i) => `<rect x="${px - 24}" y="${py}" width="48" height="${420 - py}" fill="url(#p${i})" stroke="#000"/><text x="${px}" y="${py - 7}" text-anchor="middle" font-size="14">${chart.values[i]}</text>`).join("")
    : `<polyline points="${points.map((p) => p.join(",")).join(" ")}" fill="none" stroke="#000" stroke-width="4"/>${points.map(([px, py], i) => `<circle cx="${px}" cy="${py}" r="7" fill="url(#p${i})" stroke="#000"/><text x="${px}" y="${py - 10}" text-anchor="middle" font-size="14">${chart.values[i]}</text>`).join("")}`;
  return `<path d="M395 285v135h300" fill="none" stroke="#000" stroke-width="3"/>${marks}${chart.labels.map((label, i) => `<text x="${430 + i * 105}" y="442" text-anchor="middle" font-size="13">${x(label)}</text>`).join("")}<text x="390" y="275" font-size="13">${x(chart.unit)}</text>`;
}

function asset(card, index) {
  const id = `ENG_R4_FIG_42_${String(index + 1).padStart(2, "0")}`;
  const rows = [
    ...card.schedule.map(([time, place, status]) => ["Schedule", `${time} ${place}`, status]),
    ...card.menu.map(([item, price, tag]) => ["Menu", item, `${price}; ${tag}`]),
    ...card.legend.map(([code, meaning, count]) => ["Legend", code, `${meaning}; count ${count}`]),
    ...card.chart.labels.map((label, i) => ["Chart", label, `${card.chart.values[i]} ${card.chart.unit}`]),
    ["Note", "Rule", card.note],
  ];
  const schedule = card.schedule.map((row, i) => `<text x="28" y="${92 + i * 28}" font-size="14">${x(row[0])}</text><text x="95" y="${92 + i * 28}" font-size="14">${x(row[1])}</text><text x="220" y="${92 + i * 28}" font-size="14">${x(row[2])}</text>`).join("");
  const menu = card.menu.map((row, i) => `<text x="382" y="${92 + i * 28}" font-size="14">${x(row[0])}</text><text x="505" y="${92 + i * 28}" font-size="14">${x(row[1])}</text><text x="545" y="${92 + i * 28}" font-size="13">${x(row[2])}</text>`).join("");
  const legend = card.legend.map((row, i) => `<rect x="28" y="${292 + i * 38}" width="25" height="25" fill="url(#p${i})" stroke="#000"/><text x="63" y="${310 + i * 38}" font-size="13">${x(row[0])}: ${x(row[1])} (${x(row[2])})</text>`).join("");
  const altText = `${card.title} 黑白資訊頁：左上時刻表、右上菜單、左下圖例、右下 ${card.chart.title} ${card.chart.type} 圖，底部另有規則附註。`;
  const longDescription = `${card.title} 的完整資訊頁。時刻表三列為 ${card.schedule.map((r) => r.join("、")).join("；")}。菜單為 ${card.menu.map((r) => r.join("、")).join("；")}。圖例為 ${card.legend.map((r) => r.join("、")).join("；")}。${card.chart.title} 數值為 ${card.chart.labels.map((label, i) => `${label} ${card.chart.values[i]} ${card.chart.unit}`).join("；")}。附註：${card.note}`;
  return {
    id, skillIds, type: "graph", path: `英文會考作戰室/r4/runtime/assets/${id}.svg`,
    content: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 520" role="img" aria-labelledby="title desc"><title id="title">${x(card.title)} information sheet</title><desc id="desc">${x(altText)}</desc><defs><pattern id="p0" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M0 8L8 0" stroke="#000"/></pattern><pattern id="p1" width="8" height="8" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.2" fill="#000"/></pattern><pattern id="p2" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M0 0L10 10M10 0L0 10" stroke="#000" stroke-width="1"/></pattern></defs><rect x="4" y="4" width="712" height="512" fill="#fff" stroke="#000" stroke-width="3"/><g font-family="sans-serif" fill="#000"><text x="20" y="32" font-size="23" font-weight="700">${x(card.title)}</text><rect x="18" y="48" width="335" height="130" fill="#fff" stroke="#000"/><text x="28" y="70" font-size="15" font-weight="700">TIME</text><text x="95" y="70" font-size="15" font-weight="700">PLACE</text><text x="220" y="70" font-size="15" font-weight="700">STATUS</text>${schedule}<rect x="370" y="48" width="332" height="130" fill="#fff" stroke="#000"/><text x="382" y="70" font-size="15" font-weight="700">ITEM</text><text x="505" y="70" font-size="15" font-weight="700">PRICE</text><text x="545" y="70" font-size="15" font-weight="700">LABEL</text>${menu}<rect x="18" y="250" width="335" height="180" fill="#fff" stroke="#000"/><text x="28" y="276" font-size="16" font-weight="700">MAP LEGEND</text>${legend}<rect x="370" y="250" width="332" height="205" fill="#fff" stroke="#000"/><text x="385" y="276" font-size="16" font-weight="700">${x(card.chart.title)}</text>${chartSvg(card.chart)}<rect x="18" y="468" width="684" height="34" fill="#fff" stroke="#000" stroke-width="2"/><text x="28" y="490" font-size="15" font-weight="700">NOTE: ${x(card.note)}</text></g></svg>`,
    caption: `${card.title} 活動資訊頁`, altText, longDescription,
    dataFallback: { summary: longDescription, columns: ["區塊", "項目", "內容"], rows },
    technical: { axes: card.chart.type === "pie" ? ["category labels", "share"] : ["category", "value"], units: [card.chart.unit], legend: "Different hatch patterns and printed labels identify all categories without color.", significantFigures: "All displayed values are authored whole numbers.", controlledVariables: ["same event and measurement definition"], dataSource: "R4 original authored information-sheet data" },
  };
}

const assets = cards.map(asset);
const a = (number) => [`ENG_R4_FIG_42_${String(number).padStart(2, "0")}`];

const misconceptionsBySkill = {
  ENG_R4_S279: [
    ["看到相同時間就把不同列的地點與狀態接在一起。", "每列才代表一筆完整行程，跨列會製造不存在的安排。", "沿目標列核對 TIME、PLACE 與 STATUS。"],
    ["把 DELAY 10 MIN 解讀成活動改到十點。", "10 MIN 是延後的分鐘數，不是新的鐘點。", "在表定時間上加十分鐘。"],
    ["把 FULL 或 CANCELLED 當成時間資訊。", "這兩個詞都是狀態，分別表示額滿與取消。", "先辨認欄名，再解讀欄內文字。"],
    ["只看地點名稱，不確認題目指定的時間。", "同一張時刻表可能列出相近地點或多個時段。", "用時間與地點兩個條件鎖定同一列。"],
  ],
  ENG_R4_S280: [
    ["只挑最便宜的品項，忽略題目的飲食限制。", "低價品若標示 CONTAINS NUTS，仍不適合堅果過敏者。", "先用標籤篩選，再比較價格。"],
    ["把 VEGAN 當成一定是 NUT-FREE。", "純素與不含堅果是兩項不同條件。", "只依菜單明示的實際標籤判斷。"],
    ["把相鄰品項的價格接到另一個品名。", "ITEM、PRICE 與 LABEL 必須沿同一列閱讀。", "逐列核對品名、價格與標示。"],
    ["計算總價時漏掉重複購買的數量。", "two Bananas 表示香蕉價格要計算兩次。", "列出各品項的數量與小計，再檢查預算。"],
  ],
  ENG_R4_S281: [
    ["看見三角形就自行猜它代表山或危險。", "圖形代碼的意義由這張圖的圖例決定。", "在 MAP LEGEND 找同一符號與名稱。"],
    ["把 Workshop (3) 解讀成第三號工作坊。", "括號數字在這張圖表示標記出現的數量。", "分清代碼名稱與出現次數。"],
    ["只靠顏色辨認地圖標記。", "列印或色覺差異可能使顏色失去辨識力。", "同時使用文字、形狀與紋理。"],
    ["把不同圖例項目的數量互相配錯。", "每個數字只屬於同列的符號與服務。", "沿圖例同一列讀代碼、意義與數量。"],
  ],
  ENG_R4_S282: [
    ["看到最高的圖形就直接作答，不先讀單位。", "圖高只在同一尺度下有意義，kg、people 與 % 不能混用。", "先讀標題、標籤與單位。"],
    ["把折線往下看成數值增加。", "線段方向要配合由左到右的時間順序判讀。", "依標籤順序逐點比較數值。"],
    ["把圓餅圖的 40% 當成四十人。", "百分比表示全體中的比例，不等於人數。", "保留 % 單位再敘述資料。"],
    ["計算差值時用較小值減較大值。", "how many more 要求正的相差量。", "用大值減小值，並核對結果的單位。"],
  ],
  ENG_R4_S283: [
    ["把圖中數值接到錯誤的類別主詞。", "每個值只屬於同一標籤，錯接後整句就與圖表不符。", "先配對主詞與資料，再寫完整句子。"],
    ["數值下降卻使用 rose。", "rose 與 fell 的方向必須符合前後資料。", "比較相鄰資料點後再選動詞。"],
    ["看到最高值就寫成 every 或 always。", "單張圖只支持顯示期間與類別內的結論。", "使用 largest、during the three days 等有限表述。"],
    ["把百分比差寫成人數差。", "百分點與人數是不同的量。", "沿用圖上的單位，準確寫出比較。"],
  ],
  ENG_R4_S284: [
    ["找到主表中符合的一列就忽略 NOTE。", "附註可能加入截止、資格或用品限制。", "作答前把 NOTE 套回候選方案。"],
    ["只確認時間，不核對地點與狀態。", "完整方案必須同時滿足題目指定的所有欄位。", "把需求拆成時間、地點、狀態與附註。"],
    ["把 DELAY 或 early report 原樣當成實際時間。", "兩者都需要在表定時間上加減分鐘。", "算出實際時間後再判斷是否可行。"],
    ["用資訊頁的無關數字替代規則證據。", "同一頁的表格、圖例與附註各自回答不同問題。", "只引用能直接支持該條件的區塊。"],
  ],
};

const skills = [
  {
    id: "ENG_R4_S279", process: "read-timetable-row-and-column", evidence: "TIME、PLACE、STATUS 三欄同一列與延誤標示共同決定實際資訊",
    objectives: ["辨認時刻表欄名與列的對齊關係。", "區分表定時間、延誤時間與狀態。", "依問題鎖定一列而不跨列拼接。"],
    sections: [["先找欄再找列", "先看問題要 TIME、PLACE 或 STATUS，再沿同一列讀完。表格線與欄名比單字位置更可靠。"], ["延誤要做一次運算", "DELAY 10 MIN 表示在表定時間加十分鐘，不是延誤到十點。CANCELLED、FULL 則是狀態，不可當時間。"], ["同名地點仍要看時間", "一個地點可能有多項活動。用時間與狀態一起縮小，不要只看到 place 就停止。"], ["用一句話回填", "選完後讀成 At 10:50, the bus reaches the museum。若時間、地點、狀態不能共存，就是跨列。"]],
    examples: [["Museum 10:40 DELAY 10 MIN", ["定位 Museum 列。", "10:40 加十分鐘。", "保留同列地點。"], "10:50", "延誤時間需由表定時間加上分鐘數。"], ["Pool 11:00 CANCELLED", ["找 Pool。", "讀 STATUS。", "不把 11:00 當成仍會舉行。"], "The pool event will not take place.", "CANCELLED 直接否定活動。"], ["Room 2 / 14:30 / COOKING", ["由 COOKING 找狀態欄。", "橫讀到 Room 2。", "再核對 14:30。"], "Cooking is in Room 2 at 14:30.", "三格來自同一列。"]],
    misconceptions: misconceptionsBySkill.ENG_R4_S279,
    checks: [["DELAY 15 MIN 要如何處理？", "在表定時間加十五分鐘", "delay 數字是增加量。"], ["FULL 是時間嗎？", "不是，是狀態", "它表示名額已滿。"], ["何時可以橫跨兩列組合？", "題目明示比較兩列時", "查單一活動不可混列。"]],
    questions: questions([
      ["The Museum trip is delayed. What is its new time?", "10:50", "Museum 列為 10:40，延誤十分鐘後是 10:50。", [["10:30", "把延誤誤算成提前。"], ["10:40", "忽略延誤。"], ["12:10", "誤用 Market 列。"]], a(1)],
      ["What is the status of the Lake Trail at 09:15?", "It is closed.", "09:15 與 Lake Trail 同列的狀態是 CLOSED。", [["It is open.", "OPEN 屬 East Gate。"], ["It has five seats.", "5 SEATS 屬 Peak Bus。"], ["It starts at 10:05.", "跨到 Peak Bus 時間。"]], a(2)],
      ["Where is the author talk scheduled for 11:30?", "Hall B", "11:30、Hall B、AUTHOR TALK 位於同一列。", [["Hall A", "Hall A 的狀態是 OPEN。"], ["Hall C", "Hall C 在 13:00 且已滿。"], ["the signing line", "這是附註活動，不是 PLACE 欄。"]], a(3)],
      ["At what time does the event at the Demo Tent start?", "09:00", "Demo Tent 列的 TIME 是 09:00。", [["07:45", "這是 North Stall。"], ["10:30", "這是 Farm Tour。"], ["09:30", "表中沒有此時間。"]], a(4)],
      ["Which scheduled event will not take place?", "the pool event at 11:00", "Pool 列明示 CANCELLED。", [["track check-in at 08:00", "其狀態是 CHECK IN。"], ["the court match at 09:20", "MATCH 表會舉行。"], ["the Blue team at 24", "這是圖表數值，不是時刻表活動。"]], a(5)],
      ["A visitor wants the Studio workshop. Which entry should the visitor follow?", "17:15 — Studio — WORKSHOP", "三項完全來自第二列。", [["16:30 — Studio — OPEN", "把 Gallery 的時間狀態拼入。"], ["18:40 — Roof — WORKSHOP", "把 Roof 與 Studio 狀態混合。"], ["17:15 — Gallery — FULL", "同時跨兩列。"]], a(6)],
      ["When and where does Team B begin work?", "09:00 at West Bank", "TEAM B 同列為 09:00、West Bank。", [["07:30 at Dock", "這是集合。"], ["08:10 at East Bank", "這是 Team A。"], ["09:00 at East Bank", "地點跨列。"]], a(7)],
      ["The Main Stage is delayed by twenty minutes. When should it begin?", "16:50", "16:30 加二十分鐘為 16:50。", [["16:10", "反向相減。"], ["16:30", "未套用 delay。"], ["15:30", "表中沒有此開始時間。"]], a(8)],
      ["Which room has a demonstration at 16:20?", "Lab B", "16:20、Lab B、DEMO 同列。", [["Lab A", "Lab A 於 15:30 開放。"], ["the Yard", "Yard 於 17:10 取消。"], ["Room B", "表中名稱是 Lab B。"]], a(9)],
      ["The River bus leaves fifteen minutes late. What time does it leave?", "20:30", "20:15 加十五分鐘為 20:30。", [["20:00", "把延誤誤算成提早。"], ["20:15", "忽略延誤。"], ["21:55", "誤用 last bus 時間。"]], a(10)],
      ["Which entry correctly describes the museum tour?", "10:50 — Room 2 — TOUR", "三格來自 Room 2 同一列。", [["09:30 — Room 2 — OPEN", "時間狀態屬 East Door。"], ["12:20 — Garden — TOUR", "Garden 狀態是 CLOSED。"], ["10:50 — East Door — CLOSED", "跨三列拼接。"]], a(11)],
      ["What happens in Room 2 at 14:30?", "a cooking class", "第二列表明 14:30、Room 2、COOKING。", [["an English class", "English 在 13:00 Room 1。"], ["a full dance class", "Room 3 於 16:00 才是 FULL。"], ["a study activity count", "圖例不是時刻表事件。"]], a(12)],
    ], { type: "timetable", operation: "bind-row-column-and-status", misconception: "combine-cells-from-different-rows" }),
  },
  {
    id: "ENG_R4_S281", process: "decode-infographic-legend", evidence: "圖例代碼、意義與數量三項對照後指向唯一設施或活動",
    objectives: ["由圖例代碼找到對應意義。", "區分代碼種類與出現數量。", "使用文字與紋理而非顏色辨識。"],
    sections: [["先讀圖例，不猜圖形", "代碼本身不保證意思；TRIANGLE 可能代表任何事物。先在 MAP LEGEND 找同一代碼，再讀右側服務名稱。"], ["括號數字是數量", "Workshop (3) 表示三個工作坊標記，不是第三號工作坊。問題若問 how many，回答括號數字。"], ["比較要保持同一單位", "比較 Experiment 與 Build Area 時都使用圖例 count。不要把活動時間或價格拿來比較。"], ["替代資料與圖例等價", "黑白紋理、印出的代碼與 fallback 表格都保留代碼、意義、數量；任何方式都應得到同一答案。"]],
    examples: [["TRIANGLE: Workshop (3)", ["找 TRIANGLE。", "讀冒號後意義。", "讀括號數量。"], "TRIANGLE means Workshop, and there are 3.", "代碼、意義、數量完整對齊。"], ["CROSS: First Aid (1)", ["不要把 cross 當取消。", "以圖例定義 First Aid。", "確認數量一。"], "one First Aid point", "圖例會覆蓋日常符號猜測。"], ["FLASK 4; GEAR 2", ["兩者單位皆為 count。", "計算 4 - 2。", "保留服務名稱。"], "There are 2 more Experiment points.", "同單位比較才能相減。"]],
    misconceptions: misconceptionsBySkill.ENG_R4_S281,
    checks: [["圖例代碼可只靠形狀猜意思嗎？", "不可", "需讀明示對照。"], ["括號中的 3 通常表示什麼？", "該代碼的數量", "不是時間或價格。"], ["黑白列印時靠什麼辨識？", "代碼、文字、形狀與紋理", "不依賴顏色。"]],
    questions: questions([
      ["Which code marks workshops, and how many are shown?", "TRIANGLE, 3", "圖例明示 TRIANGLE: Workshop (3)。", [["SQUARE, 1", "這是 Help Desk。"], ["CIRCLE, 2", "這是 Water Point。"], ["TRIANGLE, 1", "意義正確但數量錯。"]], a(1)],
      ["If each CROSS marks a First Aid station, how many such stations are listed?", "one", "Hill Walk 圖例的 CROSS 對應 First Aid (1)。", [["two", "Rest Area 才是二。"], ["three", "沒有三個 First Aid。"], ["five", "誤取 Peak Bus seats。"]], a(2)],
      ["Which symbol identifies the only signing point?", "STAR", "STAR 對應 Signing，數量一。", [["BOOK", "BOOK 是 New Title。"], ["MIC", "MIC 是 Talk。"], ["CIRCLE", "本頁無此代碼。"]], a(3)],
      ["A shopper needs the refill service. What should the shopper follow?", "a JAR marker", "JAR 的圖例意義是 Refill Point。", [["a LEAF marker", "LEAF 是 Organic Stall。"], ["a BASKET marker", "BASKET 是 Pickup Desk。"], ["a CROSS marker", "本頁沒有 CROSS。"]], a(4)],
      ["Which statement correctly reads the Sports Day legend?", "Two WHISTLE markers show coaches.", "WHISTLE 對應 Coach (2)。", [["Four WHISTLE markers show events.", "Event (4) 的代碼是 FLAG。"], ["One FLAG marks First Aid.", "First Aid (1) 是 CROSS。"], ["Two CROSS markers show coaches.", "代碼與意義對調。"]], a(5)],
      ["A visitor wants to cast a choice. Which least frequent marker is relevant?", "STAR for the Vote Point", "Vote Point (1) 是最少且與投票相關。", [["FRAME for Exhibit", "Exhibit 有五個且不是投票點。"], ["HANDS for Activity", "Activity 有兩個。"], ["STAR for Exhibit", "STAR 的意義不是 Exhibit。"]], a(6)],
      ["How many glove stations does the cleanup map provide?", "two", "GLOVE 對應 Glove Station (2)。", [["one", "First Aid 才是一。"], ["six", "Waste Bags 是六。"], ["nine", "誤用 Team B 時間。"]], a(7)],
      ["The DROP code appears once. What does it mark?", "a Water Point", "DROP 圖例對應 Water Point (1)。", [["a Performance", "Performance 用 NOTE。"], ["a Seating Area", "Seating Area 用 CHAIR。"], ["a rain delay", "圖例沒有此意義。"]], a(8)],
      ["How many more Experiment markers are there than Build Area markers?", "two more", "FLASK Experiment 四個，GEAR Build Area 兩個，相差二。", [["one more", "差值不是一。"], ["four more", "這是 Experiment 本身數量。"], ["six more", "把兩數相加。"]], a(9)],
      ["Which code leads to the least common facility on the Night Bus map?", "HOUSE", "HOUSE 對應 Shelter (1)，少於 Route 三與 Night Stop 二。", [["BUS", "Route 有三個。"], ["MOON", "Night Stop 有兩個。"], ["CAKE", "是菜單品項，不是圖例代碼。"]], a(10)],
      ["An audio-guide user should look for which marker?", "HEADSET", "HEADSET 對應 Audio Desk (1)。", [["VASE", "VASE 是 History Room。"], ["TREE", "TREE 是 Garden Point。"], ["MIC", "本頁沒有 MIC。"]], a(11)],
      ["How does the number of PAN markers compare with MUSIC markers?", "There are twice as many PAN markers.", "PAN 有二，MUSIC 有一，因此前者是兩倍。", [["They are equal.", "二不等於一。"], ["There are three fewer PAN markers.", "方向與差值都錯。"], ["There are twice as many MUSIC markers.", "倍數方向顛倒。"]], a(12)],
    ], { type: "infographic-legend", operation: "map-code-meaning-and-count", misconception: "guess-symbol-meaning-without-legend" }),
  },
  {
    id: "ENG_R4_S282", process: "compare-chart-values", evidence: "圖表標籤、數值與單位支持排序、差值、總和或比例",
    objectives: ["讀取長條、折線與圓餅圖標示值。", "以相同單位比較差值、總和或倍數。", "區分最高值、增減方向與比例點差。"],
    sections: [["先讀標題與單位", "people、kg、% 不可互換。圓餅圖的 10 表示十個百分點，不一定是十人。"], ["標籤與數值成對", "沿著長條、折線點或圓餅圖例讀值。不要把相鄰類別的數字交換。"], ["把比較詞翻成運算", "how many more 用大減小，total 用加法，twice 表乘二。先寫兩個原值再運算。"], ["折線只描述已給區間", "由 Mon 到 Tue 上升，只能描述這段資料；不能推成每天都會繼續上升。"]],
    examples: [["10 AM 35; 9 AM 20", ["單位都是 people。", "用 35 - 20。", "保留時間標籤。"], "15 more people", "同圖同單位可直接相減。"], ["Mystery 40%; Science 25%", ["確認百分比。", "40 - 25 = 15。", "稱 percentage points。"], "15 percentage points", "百分比相減得到百分點差。"], ["Tue 24; Wed 12", ["比較 24 與 12。", "24 = 2 × 12。", "寫倍數方向。"], "Tuesday is twice Wednesday.", "兩值皆為 walkers。"]],
    misconceptions: misconceptionsBySkill.ENG_R4_S282,
    checks: [["40% 減 25% 得到什麼？", "15 個百分點", "這是比例之差。"], ["how many more 使用哪個運算？", "大值減小值", "差值回答多多少。"], ["折線上升可保證未來也上升嗎？", "不可", "只能描述資料區間。"]],
    questions: questions([
      ["How many more visitors came at 10 AM than at 9 AM?", "15", "10 AM 三十五人減 9 AM 二十人為十五。", [["5", "誤比 10 AM 與 11 AM。"], ["20", "這是 9 AM 原值。"], ["55", "把兩值相加。"]], a(1)],
      ["Which comparison between Tuesday and Wednesday is correct?", "Tuesday had twice as many walkers.", "24 是 12 的兩倍。", [["Wednesday had twice as many walkers.", "倍數方向顛倒。"], ["They differed by 24 walkers.", "差值是十二。"], ["They had the same number.", "數值不同。"]], a(2)],
      ["By how many percentage points did Mystery exceed Science?", "15 percentage points", "40% 減 25% 為十五百分點。", [["5 percentage points", "這是 Mystery 與 Travel 差。"], ["25 percentage points", "這是 Science 原值。"], ["65 percentage points", "把兩比例相加。"]], a(3)],
      ["How much did waste decrease from Friday to Sunday?", "7 kg", "Friday 12 kg 減 Sunday 5 kg 為 7 kg。", [["3 kg", "這是 Saturday 到 Sunday。"], ["5 kg", "這是 Sunday 原值。"], ["17 kg", "把兩天相加。"]], a(4)],
      ["Which team earned the highest number of points?", "Blue", "Blue 二十四分高於 Gold 二十一與 Red 十八。", [["Red", "十八是最低。"], ["Gold", "二十一低於二十四。"], ["All teams", "三值不相等。"]], a(5)],
      ["Which art choice received the largest share of votes?", "Photo", "Photo 45% 是三者最高。", [["Clay", "Clay 30%。"], ["Print", "Print 25%。"], ["Clay and Print equally", "兩者比例不同。"]], a(6)],
      ["What is the difference between Zone B and Zone C?", "9 bags", "20 袋減 11 袋為 9 袋。", [["6 bags", "誤比 Zone B 與 A。"], ["11 bags", "這是 Zone C 原值。"], ["31 bags", "把兩區相加。"]], a(7)],
      ["How many more people chose Pop than Folk?", "15 people", "Pop 六十五人減 Folk 五十人為十五。", [["30 people", "誤比 Pop 與 Jazz。"], ["50 people", "這是 Folk 原值。"], ["115 people", "把兩值相加。"]], a(8)],
      ["How far above Solar is Water in the success-share chart?", "10 percentage points", "Water 40% 減 Solar 30% 為十百分點。", [["30 percentage points", "這是 Solar 原值。"], ["40 percentage points", "這是 Water 原值。"], ["70 percentage points", "把兩比例相加。"]], a(9)],
      ["Route C has how many more riders than Route B?", "12", "28 減 16 為十二。", [["6", "誤比 Route C 與 A。"], ["16", "這是 Route B 原值。"], ["44", "把兩路線相加。"]], a(10)],
      ["What is the combined number of Nature and Design visits?", "88", "Nature 四十八加 Design 四十為八十八。", [["8", "只算差值。"], ["48", "只算 Nature。"], ["120", "把 Ancient 也加入。"]], a(11)],
      ["How does Dance compare with Cooking in class-seat share?", "Dance is 30 percentage points higher.", "50% 減 20% 為三十百分點。", [["Dance is 20 percentage points higher.", "把 Cooking 原值當差。"], ["Cooking is 30 percentage points higher.", "方向顛倒。"], ["They have equal shares.", "兩比例不同。"]], a(12)],
    ], { type: "bar-line-pie-chart", operation: "read-label-unit-and-compute-comparison", misconception: "compare-unmatched-labels-or-units" }),
  },
  {
    id: "ENG_R4_S283", process: "verbalize-chart-evidence", evidence: "英文句中的主詞、比較方向、數值與範圍全部對應圖表",
    objectives: ["把圖表值轉述為語法完整的英文句。", "選擇與資料強度一致的比較語句。", "避免把局部資料擴張成永遠或所有情況。"],
    sections: [["主詞先對標籤", "句子主詞必須是圖中類別。10 AM had 35 visitors 的 35 不可接到 9 AM。"], ["動詞選擇符合圖型", "長條圖可用 had、was；折線有時間順序時可用 rose 或 fell；圓餅圖用 accounted for 或 had a share of。"], ["比較方向不能顛倒", "higher than 前是大值，lower than 前是小值。先寫原值，再決定比較詞。"], ["只說資料支持的範圍", "圖只涵蓋三天，就說 during the three days；不能使用 always、never 或 every future day。"]],
    examples: [["Fri 12 kg; Sat 8 kg; Sun 5 kg", ["依時間讀三值。", "數值持續下降。", "限制在 Friday to Sunday。"], "Waste fell each day from Friday to Sunday.", "方向與範圍都符合。"], ["Photo 45%; Clay 30%; Print 25%", ["找最高值 Photo。", "保留 45%。", "不用 every visitor。"], "Photo received the largest share, at 45%.", "largest 與數值皆正確。"], ["Nature 48; Design 40", ["主詞 Nature 對 48。", "比較方向為高。", "差值八非必要。"], "Nature had more visits than Design.", "句子不增加圖外原因。"]],
    misconceptions: misconceptionsBySkill.ENG_R4_S283,
    checks: [["圖表只有三天，可說 always 嗎？", "不可", "範圍超出資料。"], ["higher than 前放哪個值？", "較大值的類別", "比較方向由主詞決定。"], ["圓餅圖 45% 可說 every visitor 嗎？", "不可", "45% 不是全部。"]],
    questions: questions([
      ["Which sentence accurately reports the visitor chart?", "The 10 AM count was the highest at 35.", "10 AM 的三十五高於另外兩時段。", [["Only 9 AM had visitors.", "其餘時段也有數值。"], ["The count fell from 9 AM to 10 AM.", "20 到 35 是上升。"], ["Every hour had 35 visitors.", "三個值不同。"]], a(1)],
      ["Choose the best description of the walking data.", "Tuesday had more walkers than both Monday and Wednesday.", "Tuesday 24 高於 Monday 18 與 Wednesday 12。", [["Wednesday was the busiest day.", "Wednesday 最低。"], ["The number never changed.", "三天數值不同。"], ["Monday had twice Tuesday's count.", "十八不是二十四的兩倍。"]], a(2)],
      ["Which statement matches the genre shares?", "Mystery accounted for 40%, the largest share.", "Mystery 的 40% 最大。", [["Science accounted for most sales at 25%.", "25% 最低。"], ["Travel and Mystery were equal.", "35% 與 40% 不同。"], ["All books were Mystery titles.", "40% 不等於全部。"]], a(3)],
      ["Which English sentence preserves the waste trend?", "Waste dropped from 12 kg on Friday to 5 kg on Sunday.", "句子正確對應起終值與下降方向。", [["Waste rose to 12 kg on Sunday.", "Sunday 是 5 kg。"], ["Waste stayed at 8 kg every day.", "只有 Saturday 是 8。"], ["Sunday produced more waste than Friday.", "方向相反。"]], a(4)],
      ["Select the true report about team points.", "Blue led with 24 points, followed by Gold with 21.", "Blue 24 最高，Gold 21 次高。", [["Red led with 24 points.", "Red 是 18。"], ["Gold scored fewer points than Red.", "21 高於 18。"], ["All three teams tied.", "數值不同。"]], a(5)],
      ["Which sentence correctly describes the vote chart?", "Photo received 45% of the votes.", "Photo 圖例對應 45%。", [["Print received 45% of the votes.", "Print 是 25%。"], ["Clay received fewer votes than Print.", "Clay 30 高於 Print 25。"], ["Photo received every vote.", "45% 不是 100%。"]], a(6)],
      ["Which summary is supported by the cleanup chart?", "Zone B collected the most bags.", "Zone B 二十袋為最高。", [["Zone C collected 20 bags.", "Zone C 是 11。"], ["Zone A collected fewer bags than Zone C.", "14 高於 11。"], ["Every zone collected the same amount.", "三值不同。"]], a(7)],
      ["Pick the sentence that accurately states the audience data.", "Pop drew 65 people, more than Folk or Jazz.", "Pop 65 高於 Folk 50 與 Jazz 35。", [["Jazz drew the largest audience.", "Jazz 最低。"], ["Folk and Pop each drew 50 people.", "Pop 是 65。"], ["No one attended the Pop program.", "與 65 相反。"]], a(8)],
      ["Which sentence is faithful to the experiment chart?", "Water had the largest success share at 40%.", "Water 40% 高於另兩項各 30%。", [["Solar alone had a 40% share.", "Solar 是 30%。"], ["Wind had no successful results.", "Wind 是 30%。"], ["Water represented all successes.", "40% 不是全部。"]], a(9)],
      ["Choose an accurate statement about bus riders.", "Route C carried the most riders, with 28.", "Route C 28 為最高。", [["Route B carried 28 riders.", "Route B 是 16。"], ["Route A carried fewer riders than Route B.", "22 高於 16。"], ["All routes carried 22 riders.", "只有 Route A 是 22。"]], a(10)],
      ["Which sentence correctly restates the gallery data?", "Nature had 48 visits, eight more than Design.", "Nature 48，Design 40，差八。", [["Design had eight more visits than Nature.", "方向顛倒。"], ["Ancient had 48 visits.", "Ancient 是 32。"], ["Nature and Design together had 48 visits.", "合計是 88。"]], a(11)],
      ["Which description matches the class-seat shares?", "Dance had half of all seats, the largest share.", "Dance 是 50%，也是最高。", [["Cooking had half of all seats.", "Cooking 是 20%。"], ["English had a larger share than Dance.", "30% 低於 50%。"], ["All classes had equal shares.", "三比例不同。"]], a(12)],
    ], { type: "chart-to-sentence", operation: "align-subject-comparison-value-and-scope", misconception: "overstate-or-reverse-chart-trend" }),
  },
  {
    id: "ENG_R4_S284", process: "solve-with-chart-and-note", evidence: "主表或圖表提供的數值與 NOTE 限制同時套用後只剩一個可行方案",
    objectives: ["整合不同區塊的互補資訊。", "把附註轉為資格、截止或用品限制。", "用最小充分步驟解決生活情境。"],
    sections: [["先把需求拆成條件", "人物可能同時有時間、預算、地點與資格。把每項寫成勾選框，再逐區塊找證據。"], ["NOTE 是硬條件", "closes、required、may not 等字會排除方案。它不是背景裝飾，必須在最後決策中出現。"], ["延誤與提前報到要算實際時間", "DELAY 加上分鐘，report early 則從開始時間倒推。運算方向由語意決定。"], ["答案只處理題目目標", "若問能否參加，回答可否與關鍵原因即可；不要加入未提供的交通、天氣或人物。"]],
    examples: [["Court match 09:20; report 15 minutes early", ["活動開始 09:20。", "early 表往前算。", "減十五分鐘。"], "Report at 09:05.", "表格與附註共同決定。"], ["Lab B demo 16:20; goggles required", ["定位 Lab B。", "核對 DEMO。", "套用 required。"], "Arrive for 16:20 with goggles.", "缺任一資訊都不完整。"], ["Cooking 14:30; register before noon", ["課程尚未開始不等於能加入。", "before noon 是截止。", "未登記且下午才到已太晚。"], "The unregistered visitor cannot join.", "資格截止壓過尚有時間的直覺。"]],
    misconceptions: misconceptionsBySkill.ENG_R4_S284,
    checks: [["report 15 minutes early 是加還是減？", "從開始時間減十五分鐘", "early 表較早。"], ["required 可當建議嗎？", "不可", "它表示必要條件。"], ["主表可行但 NOTE 不合，能選嗎？", "不能", "所有條件需同時滿足。"]],
    questions: questions([
      ["Mia reaches Harbor Day at 10:50 without a workshop booking. Can she still make a booking?", "No, booking closed at 10:20.", "實際抵達 10:50 晚於附註截止 10:20。", [["Yes, because the Museum time was 10:40.", "忽略延誤與截止。"], ["Yes, because three workshop markers exist.", "數量不取消預約截止。"], ["No, because the Market is full.", "Market 狀態與 workshop booking 無關。"]], a(1)],
      ["An eleven-year-old arrives alone for the Lake Trail at 09:15. May the child use it?", "No; the trail is closed, and the child also needs an adult.", "時刻表 CLOSED 與 under 12 need adult 兩條都不合。", [["Yes, because the East Gate is open.", "跨列且忽略年齡。"], ["Yes, because two rest areas exist.", "設施數量不改變限制。"], ["No, only because the soup is hot.", "菜單與步道資格無關。"]], a(2)],
      ["Jay reaches the signing line at 12:45. What is the result?", "He is five minutes too late to join the line.", "附註說 12:40 關閉，12:45 晚五分鐘。", [["He is five minutes early.", "時間方向相反。"], ["He can join because Hall C starts at 13:00.", "Hall C 與 signing line 不同。"], ["He must buy a $3 Cookie first.", "菜單不是參加條件。"]], a(3)],
      ["A customer brings a dirty jar to a refill point. What should happen first?", "The jar should be cleaned.", "附註要求 refill jars must be clean。", [["The customer should join the Farm Tour.", "Farm Tour 與容器要求無關。"], ["The jar should be kept dirty.", "與 must be clean 相反。"], ["The customer should pay $6 for an Herb Pot.", "不是 refill 資格。"]], a(4)],
      ["What time should a court player report for the 09:20 match?", "09:05", "09:20 往前十五分鐘為 09:05。", [["09:20", "未提前。"], ["09:35", "錯誤往後加。"], ["08:45", "提前三十五分鐘。"]], a(5)],
      ["Eva joins the 17:15 Studio workshop. Which item does she not need to bring?", "an apron", "附註明示 workshop aprons are provided。", [["a workshop booking", "頁面未說免預約。"], ["a Roof ticket", "Roof 與 Studio workshop 不同。"], ["a nut-free pie", "Pie 明示含堅果且非用品。"]], a(6)],
      ["Ben is assigned to Team B. What plan meets both the schedule and location rule?", "Meet at West Bank at 09:00 and wear boots.", "Team B 時刻表指向 09:00 West Bank，附註要求 boots。", [["Meet at East Bank at 08:10 without boots.", "這是 Team A 且少用品。"], ["Meet at Dock at 09:00 in sandals.", "時間地點跨列且不合 boots。"], ["Buy six waste bags instead of reporting.", "圖例數量不是個人任務。"]], a(7)],
      ["A guest brings a chair for the delayed Main Stage show. Which plan follows all information?", "Attend at 16:50 and keep the chair outside the front zone.", "延誤後 16:50 開始，且椅子不得進 front zone。", [["Attend at 16:30 with the chair in the front zone.", "同時忽略延誤與禁令。"], ["Attend at 15:10 because the Main Stage has a duo.", "15:10 DUO 在 Small Stage。"], ["Skip the show because chairs are forbidden everywhere.", "只禁止 front zone，非 everywhere。"]], a(8)],
      ["Nora plans to watch the Lab B demonstration. What complete instruction fits?", "Go to Lab B at 16:20 and wear goggles.", "表格給 16:20 DEMO，附註要求 goggles。", [["Go to Lab A at 16:20 without goggles.", "地點錯且缺必需品。"], ["Go to the Yard at 17:10.", "Yard 活動取消。"], ["Buy a Nut Bar to enter Lab B.", "菜單品項不是資格。"]], a(9)],
      ["Leo boards the 21:40 last bus. What payment condition must he meet?", "He must have the exact fare.", "21:40 是 LAST BUS，附註規定只收 exact fare。", [["He must pay with a credit card.", "頁面未提供此方式。"], ["He may ask for change on the bus.", "與 exact fare only 相反。"], ["He must take the delayed River bus instead.", "不是 last bus 的付款條件。"]], a(10)],
      ["Can a 10:50 tour visitor get an audio guide before the desk closes?", "Yes, the tour begins 55 minutes before the 11:45 closing time.", "10:50 到 11:45 相差五十五分鐘，仍在關閉前。", [["No, the desk closes at 10:45.", "附註是 11:45。"], ["No, the Garden is closed at 12:20.", "Garden 狀態不影響較早 audio desk。"], ["Yes, because Nature has 48 visits.", "圖表數值不是開放依據。"]], a(11)],
      ["Sam arrives at 13:00 without registering for the 14:30 cooking class. Can Sam join?", "No, registration was required before noon.", "雖尚未到 14:30，但登記截止已過。", [["Yes, because the class starts later.", "忽略 before noon 截止。"], ["Yes, because Room 1 is open at 13:00.", "13:00 是 English 且房間不同。"], ["No, because the Rice Box costs $6.", "價格不是報名條件。"]], a(12)],
    ], { type: "integrated-information-sheet", operation: "apply-table-chart-and-note-constraints", misconception: "ignore-note-after-finding-table-match" }),
  },
  {
    id: "ENG_R4_S280", process: "integrate-menu-price-and-restriction", evidence: "同一菜單列的品項、價格與標籤同時符合預算或飲食限制",
    objectives: ["沿同一列整合品項、價格與標籤。", "辨認 VEGAN、NUT-FREE 與 CONTAINS 等限制詞。", "計算簡單合計並檢查預算。"],
    sections: [["限制先於喜好", "若題目說 must avoid nuts，先刪除 CONTAINS NUTS，再比較價格。不能因最便宜而忽略安全標籤。"], ["價格要跟著品項", "ITEM、PRICE、LABEL 是同一列資訊。沿表格橫讀，避免把便宜價格接到另一個品項。"], ["合計逐項列式", "買兩樣時先寫每項價格，再做加法。若 under $8，答案必須小於八，不包含八。"], ["沒有標示就不自行保證", "VEGAN 不自動等於 NUT-FREE；表格只支持明示標籤。對未標示條件保留未知。"]],
    examples: [["Fruit Cup $3 NUT-FREE", ["先找 nut 限制。", "同列確認 NUT-FREE。", "再讀價格。"], "The $3 Fruit Cup fits.", "限制與價格均由同列提供。"], ["Tea $2 + Sandwich $5", ["列出 2 與 5。", "相加得 7。", "比較 $8 預算。"], "$7, so it is under $8.", "under 表嚴格小於。"], ["Pie $5 CONTAINS NUTS", ["看到 contains。", "確認受限成分 nuts。", "即使在預算內也排除。"], "Do not choose the pie for a nut allergy.", "安全限制優先。"]],
    misconceptions: misconceptionsBySkill.ENG_R4_S280,
    checks: [["CONTAINS NUTS 對堅果過敏者表示什麼？", "不可選", "標籤明示含有過敏原。"], ["under $5 包含 $5 嗎？", "不包含", "under 是嚴格小於。"], ["VEGAN 一定代表無堅果嗎？", "不一定", "需另有 NUT-FREE 資訊。"]],
    questions: questions([
      ["Which item is both nut-free and the least expensive?", "Fruit Cup for $3", "Fruit Cup 同列明示 NUT-FREE，且價格三元最低。", [["Bean Wrap for $4", "雖 vegan，但未標 nut-free。"], ["Fish Roll for $6", "價格較高且標示魚類。"], ["Fruit Cup for $6", "品項正確但價格跨列。"]], a(1)],
      ["A hiker wants a vegan meal. What should the hiker buy?", "Rice Box for $7", "Rice Box 同列標示 VEGAN。", [["Oat Bowl for $5", "含堅果且未標 vegan。"], ["Soup for $4", "只標 HOT。"], ["Rice Box for $4", "價格誤接 Soup。"]], a(2)],
      ["How much do one Tea and one Sandwich cost together?", "$7", "Tea 兩元加 Sandwich 五元等於七元。", [["$5", "只算 Sandwich。"], ["$8", "誤把 Cookie 三元加 Sandwich。"], ["$10", "沒有相應組合。"]], a(3)],
      ["A shopper buys an Apple Bag and Bread. What is the total?", "$9", "Apple Bag 四元加 Bread 五元為九元。", [["$10", "誤用 Herb Pot 六元。"], ["$11", "把 Bread 與 Herb Pot 相加。"], ["$4", "只算一項。"]], a(4)],
      ["Which listed lunch is vegan?", "Veg Box for $6", "Veg Box 同列標 VEGAN。", [["Water for $2", "是飲料且只標 cold。"], ["Yogurt for $3", "含 milk。"], ["Veg Box for $3", "價格誤接 Yogurt。"]], a(5)],
      ["Nora avoids nuts and wants a meal rather than a drink. Which choice is supported?", "Salad for $6", "Salad 是餐點且標 VEGAN；Pie 明示含堅果。", [["Pie for $5", "CONTAINS NUTS 不合。"], ["Juice for $3", "是飲料，不合 meal。"], ["Salad for $3", "價格跨到 Juice。"]], a(6)],
      ["What is the cost of two Bananas and one Soup?", "$8", "兩根香蕉四元，加湯四元，共八元。", [["$6", "少算一根香蕉。"], ["$9", "誤用 Wrap 五元。"], ["$12", "把單價錯當數量。"]], a(7)],
      ["Ben must avoid nuts. Which solid food can he choose for $4?", "Rice Ball", "Rice Ball 四元且標 VEGAN；Brownie 同價但含堅果。", [["Brownie", "CONTAINS NUTS。"], ["Lemonade", "是飲料。"], ["Rice Ball and Brownie", "包含不安全品項且超過四元。"]], a(8)],
      ["Which option matches both the item and its dietary label?", "Veg Roll — $5 — VEGAN", "三格都在 Veg Roll 同列。", [["Milk Tea — $4 — VEGAN", "Milk Tea 標含奶。"], ["Nut Bar — $3 — NUT-FREE", "實際標含堅果。"], ["Veg Roll — $3 — CONTAINS MILK", "跨列拼接。"]], a(9)],
      ["A customer orders Noodles and Cake. How much is the bill?", "$10", "Noodles 六元加 Cake 四元等於十元。", [["$9", "把 Salad 五元誤入。"], ["$6", "只算麵。"], ["$15", "重複加價。"]], a(10)],
      ["Which hot item is also vegan?", "Veg Soup for $5", "Veg Soup 的名稱與 VEGAN 標籤支持，且 soup 為熱食情境。", [["Tea for $3", "只標 HOT，未標 vegan。"], ["Muffin for $4", "含堅果。"], ["Veg Soup for $3", "價格誤接 Tea。"]], a(11)],
      ["Which item costs less than $3 and has no nut warning?", "Tea", "Tea 兩元，低於三元且無 nut warning。", [["Cookie", "三元不低於三元且含堅果。"], ["Rice Box", "六元。"], ["Tea and Cookie", "包含不合條件的 Cookie。"]], a(12)],
    ], { type: "menu-table", operation: "filter-label-then-compute-price", misconception: "choose-price-without-dietary-check" }),
  },
];

export const ENGLISH_UNIT_SOURCE = defineEnglishUnit({
  unitId: "ENG_R4_U42",
  skills: skills.toSorted((left, right) => left.id.localeCompare(right.id)),
  assets,
  vocabularyPolicy: {
    capQuestionBasis: "appendix-5-table-1",
    additionalLearningTerms: ["activity", "adult", "alone", "amount", "ancient", "avoid", "ball", "bill", "board", "cancel", "chart", "coach", "compare", "complete", "court", "credit", "customer", "decrease", "describe", "design", "difference", "earn", "equal", "event", "everywhere", "exist", "fit", "flag", "gold", "guest", "guide", "hall", "information", "jazz", "leaf", "match", "nut", "pan", "print", "produce", "provide", "rather", "receive", "result", "roof", "score", "select", "state", "success", "such", "support", "symbol", "tent", "title", "travel", "triangle", "vote", "waste"],
    contextualizedAboveRangeTerms: ["accounted", "accurate", "accurately", "aid", "allergy", "apron", "aprons", "assigned", "attend", "attended", "audience", "audio", "author", "bar", "boots", "brownie", "busiest", "cast", "clay", "cleanup", "code", "combined", "comparison", "condition", "contains", "data", "delay", "delayed", "demo", "demonstration", "description", "dietary", "differed", "dock", "duo", "entry", "exact", "exceed", "exhibit", "experiment", "facility", "faithful", "fallback", "fare", "flask", "folk", "forbidden", "frame", "frequent", "gallery", "gear", "genre", "goggles", "harbor", "headset", "herb", "identifies", "instead", "instruction", "jar", "jars", "lab", "largest", "lemonade", "location", "mic", "muffin", "mystery", "oat", "option", "organic", "payment", "peak", "percentage", "performance", "pickup", "preserves", "refill", "register", "registering", "registration", "relevant", "represented", "required", "restates", "route", "routes", "sandals", "schedule", "scheduled", "shelter", "shopper", "skip", "solar", "solid", "stage", "stall", "statement", "studio", "summary", "tour", "track", "trail", "trend", "unregistered", "user", "vase", "veg", "vegan", "warning", "whistle", "workshop", "workshops", "wrap", "yogurt", "zone"],
    properNames: ["Ben", "Eva", "Jay", "Leo", "Mia", "Nora", "Sam"],
    grammarNotation: ["A", "B", "C", "NOTE", "STATUS", "TIME", "PLACE", "ITEM", "PRICE", "LABEL", "MAP LEGEND", "kg", "min", "Fri", "Mon", "Tue", "Wed"],
    malformedDistractors: [],
  },
});
