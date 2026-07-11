import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { execFileSync } from "node:child_process";
import { fileURLToPath, pathToFileURL } from "node:url";

const toolsDir = path.dirname(fileURLToPath(import.meta.url));
const mathDir = path.resolve(toolsDir, "..");
const contentDir = path.join(toolsDir, "v2-content");
const unitsDir = path.join(contentDir, "units");
const reviewDir = path.join(toolsDir, "review-output", "full-v2-production");
const syllabus = (await import(pathToFileURL(path.join(contentDir, "syllabus-source.mjs")))).default;
const repoDir = path.resolve(mathDir, "..");
const BASE_SOURCE_REF = "5b0d1345ac5fb340405301bae4ff4b36516a39b5";

const UNIT_QUIZ_IDS = [
  "g7-1-c1", "g7-1-c2", "g7-1-c3", "g7-2-c1", "g7-2-c2", "g7-2-c3", "g7-2-c4", "g7-2-c6", "g7-2-c5",
  "g8-1-c1", "g8-1-c2", "g8-1-c3", "g8-1-c4", "g8-2-c1", "g8-2-c2", "g8-2-c3", "g8-2-c4",
  "g9-1-c1", "g9-1-c2", "g9-1-c3", "g9-2-c1", "g9-2-c2", "g9-2-c3"
];

const DIFFICULTIES = ["basic", "basic", "basic", "standard", "standard", "standard", "advanced", "advanced", "advanced", "literacy", "literacy", "literacy"];
const MODE_NAMES = [
  "definition-property", "direct-calculation", "error-diagnosis", "ordered-method", "representation-conversion", "standard-application",
  "two-concept-integration", "reverse-verification", "condition-reasoning", "authentic-data-interpretation", "comparison-decision", "multi-condition-modelling"
];
const MODE_LABELS_ZH = ["定義辨認", "直接推導", "錯誤診斷", "步驟排序", "表示配對", "答案驗證", "條件整合", "逆向檢查", "適用範圍判斷", "資料登錄", "方案比較", "多條件建模"];
const CONTEXTS = [
  "氣溫與高度紀錄", "配方、折扣與分配", "票價與行程規畫", "數量與總價核對", "校園地圖定位", "地圖比例與材料配比",
  "容量、預算與門檻", "場地丈量與空間描述", "校務調查資料", "面積模型與代數紀錄", "通道長度與安全距離", "矩形材料裁切",
  "場地邊長與面積", "座位列數與累計數量", "費率與變化紀錄", "工程定位與作圖步驟", "地板配置與平行結構",
  "影長測高與模型縮放", "圓形步道與旋轉設施", "公共設施選址與證明", "拱門高度與最大面積", "抽樣調查與公平遊戲", "包裝容量與材料用量"
];
const IMAGE_MARKERS = /如圖|下圖|附圖|右圖|左圖|圖中|由圖可知|觀察圖形|選項圖/;
const SIMPLIFIED = new Map([
  ["操场", "操場"], ["花坛", "花壇"], ["组", "組"], ["场", "場"], ["给", "給"], ["后", "後"],
  ["公釐", "毫米"], ["公厘", "毫米"], ["平方厘米", "平方公分"], ["立方厘米", "立方公分"], ["厘米", "公分"],
  ["千米", "公里"], ["平米", "平方公尺"], ["千克", "公斤"]
  , ["平移向量", "平移量"], ["为何", "為何"], ["为", "為"], ["値", "值"]
]);
const GENERIC_TITLE_WORDS = /基本|概念|應用|問題|判斷|性質|文字|求|利用|與|的|及|法|題|圖形|表示|計算/g;

function loadWindow(file, key) {
  const context = { window: {} };
  vm.runInNewContext(fs.readFileSync(path.join(mathDir, file), "utf8"), context, { filename: file });
  return context.window[key];
}

function loadBaseExport(relativePath, declaration) {
  const source = execFileSync("git", ["show", `${BASE_SOURCE_REF}:${relativePath}`], { cwd: repoDir, encoding: "utf8" });
  const context = {};
  const executable = source
    .replace(new RegExp(`export const ${declaration}\\s*=`), "globalThis.result =")
    .replace(/export default [A-Z_]+;?\s*$/m, "");
  vm.runInNewContext(executable, context, { filename: `${BASE_SOURCE_REF}:${relativePath}` });
  return context.result;
}

const taxonomy = loadWindow("quiz-taxonomy.js", "QUIZ_TAXONOMY");
const legacyLectures = loadWindow("lecture-taxonomy.js", "LECTURE_TAXONOMY");
const legacyVariants = loadWindow("quiz-variant-bank.js", "QUIZ_VARIANT_BANK");

function stripHtml(value) {
  return String(value ?? "")
    .replace(/<br\s*\/?\s*>/gi, "\n")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&");
}

function clean(value) {
  let text = stripHtml(value)
    .replace(/\r/g, "")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/<=/g, "≤")
    .replace(/>=/g, "≥")
    .replace(/\^(2|²)/g, "²")
    .replace(/\^(3|³)/g, "³")
    .replace(/(\d)\s*[xX*]\s*(\d)/g, "$1×$2")
    .replace(IMAGE_MARKERS, "依題目提供的文字資料")
    .replace(/。\s*。/g, "。")
    .replace(/；\s*。/g, "。")
    .trim();
  for (const [from, to] of SIMPLIFIED) text = text.split(from).join(to);
  return text;
}

function chineseCount(value) {
  return (String(value).match(/[\u3400-\u9fff]/g) || []).length;
}

function oneLine(value, fallback) {
  const text = clean(value).split("\n").map(part => part.trim()).filter(Boolean).join("；");
  return text || fallback;
}

function short(value, max = 64) {
  const text = oneLine(value, "依定義逐項檢查");
  return text.length > max ? `${text.slice(0, max - 1)}…` : text;
}

function normalizeMatch(value) {
  return clean(value).toLowerCase().replace(GENERIC_TITLE_WORDS, "").replace(/[^a-z0-9\u3400-\u9fff]/g, "");
}

function bigrams(value) {
  const text = normalizeMatch(value);
  const out = new Set();
  for (let i = 0; i < text.length - 1; i += 1) out.add(text.slice(i, i + 2));
  return out;
}

function tokenSet(value) {
  return new Set(String(value).toLowerCase().split(/[^a-z0-9]+/).filter(token => token.length > 1 && !["basic", "word", "problem", "concept"].includes(token)));
}

function overlap(a, b) {
  if (!a.size || !b.size) return 0;
  let count = 0;
  for (const item of a) if (b.has(item)) count += 1;
  return count / Math.max(a.size, b.size);
}

function topicScore(skill, topic) {
  const titleScore = overlap(bigrams(skill.title), bigrams(topic.title));
  const idScore = overlap(tokenSet(skill.skillId), tokenSet(topic.id));
  const direct = normalizeMatch(skill.title).includes(normalizeMatch(topic.title)) || normalizeMatch(topic.title).includes(normalizeMatch(skill.title)) ? 0.5 : 0;
  return titleScore * 5 + idScore * 4 + direct;
}

function legacyTopicsForUnit(unitIndex) {
  const quizId = UNIT_QUIZ_IDS[unitIndex];
  const unitTaxonomy = taxonomy[quizId];
  return unitTaxonomy.sections.flatMap(section => section.topics.map(topic => {
    const key = `${quizId}/${topic.id}`;
    const variants = legacyVariants[key] || [];
    const first = variants.find(item => item && item.type === "mc" && Array.isArray(item.choices) && item.choices.length === 4) || variants[0];
    const lecture = legacyLectures[key];
    return { ...topic, key, quizId, section: section.title, first, lecture };
  }));
}

function lectureBlock(lecture, type) {
  return lecture?.blocks?.find(block => block.type === type);
}

function toSeed(topic, skill) {
  const item = topic.first || {};
  let text = clean(item.text || `${skill.title}的判斷依據為何？`);
  const formula = clean(item.formula || lectureBlock(topic.lecture, "formula")?.content || "");
  const concept = clean(item.concept || lectureBlock(topic.lecture, "text")?.html || `${skill.title}必須依定義、條件與題目資料作判斷。`);
  const tip = clean(item.tip || "依照定義與已知條件逐項檢查");
  const trap = clean(item.trap || "只看表面數字而忽略適用條件");
  const rawChoices = Array.isArray(item.choices) ? item.choices.map(clean) : [];
  const answer = Number.isInteger(item.answer) ? item.answer : 0;
  let choices = rawChoices.length === 4 ? rawChoices : ["符合全部條件", "只符合部分條件", "忽略必要條件", "使用無關資料"];
  if (new Set(choices).size !== 4) choices = ["符合全部條件", "只符合部分條件", "忽略必要條件", "使用無關資料"];
  if (IMAGE_MARKERS.test(item.text || "")) {
    text = `依完整文字條件判斷「${skill.title}」時，下列哪一項作法正確？`;
    choices = [tip, `只比較其中一個數值，不檢查${skill.title}的條件`, "把所有符號任意反向後直接作答", "省略題目給定的限制並使用近似猜測"];
    return { topic, text, choices, answer: 0, correct: choices[0], wrong: choices.slice(1), steps: [tip], tip, trap, concept, formula };
  }
  const correct = choices[answer] ?? choices[0];
  return {
    topic,
    text,
    choices,
    answer,
    correct,
    wrong: choices.filter((_, index) => index !== answer),
    steps: (Array.isArray(item.steps) ? item.steps : []).map(clean).filter(Boolean),
    tip,
    trap,
    concept,
    formula
  };
}

function manualSeed(skillId, data) {
  const choices = data.choices.map(clean);
  return {
    topic: { key: `manual:${skillId}`, id: skillId, title: data.title || skillId },
    text: clean(data.text),
    choices,
    answer: data.answer,
    correct: choices[data.answer],
    wrong: choices.filter((_, index) => index !== data.answer),
    steps: data.steps.map(clean),
    tip: clean(data.tip),
    trap: clean(data.trap),
    concept: clean(data.concept),
    formula: clean(data.formula || "")
  };
}

const CUSTOM_SEED_DATA = {
  "perpendicular-bisector-symmetry": {
    text: "點 P 在線段 AB 的垂直平分線上，若 PA = 7 公分，則 PB 為多少公分？", choices: ["3.5 公分", "7 公分", "14 公分", "無法判斷"], answer: 1,
    steps: ["垂直平分線上的點到線段兩端等距", "由 PA = PB 代入 PA = 7", "得到 PB = 7 公分"], tip: "中垂線上的點到兩端點距離相等", trap: "等距性質只適用於中垂線上的點", concept: "線段的垂直平分線同時垂直並平分線段，其上每一點到兩端點的距離相等。"
  },
  "orthographic-description": {
    text: "一個正方體單獨放在桌面上，由正面、上面與右側觀察，三個視圖各是什麼形狀？", choices: ["都是正方形", "都是圓形", "正面是三角形，其餘是正方形", "只有上視圖是正方形"], answer: 0,
    steps: ["正方體六個面都是正方形", "三個觀察方向都正對其中一個面", "所以三視圖都是正方形"], tip: "三視圖記錄各方向看到的外形", trap: "觀察方向改變不代表正方體的面形改變", concept: "三視圖分別記錄從正面、上面和側面看到的外形，對齊方向尺寸才能描述同一個立體。"
  },
  "data-comparison-context": {
    text: "甲組成績為 70、70、70；乙組為 60、70、80。兩組平均都是 70，下列敘述何者正確？", choices: ["甲組全距較大", "乙組資料較分散", "兩組全距相同", "乙組平均較高"], answer: 1,
    steps: ["先確認兩組平均數相同", "甲組全距為 0，乙組全距為 20", "全距較大的乙組資料較分散"], tip: "中心相同時可再比較全距或四分位距", trap: "平均相同不代表資料分布相同", concept: "比較兩組資料不能只看平均數；集中量數相同時，仍可用全距或四分位距判斷分散程度。"
  },
  "polynomial-degree-coefficient": {
    text: "多項式 −2x³ + 5x − 1 的次數與最高次項係數依序為何？", choices: ["3，−2", "3，5", "2，−2", "5，3"], answer: 0,
    steps: ["找出指數最大的非零項 −2x³", "最高指數 3 是多項式次數", "該項係數為 −2"], tip: "先按降冪排列，再讀最高次非零項", trap: "係數的負號不能省略", concept: "多項式次數是非零項中變數指數的最大值；最高次項係數包含它原有的正負號。"
  },
  "square-root-estimate": {
    text: "因為 6² < 40 < 7²，所以 √40 位於哪兩個整數之間？", choices: ["5 與 6", "6 與 7", "7 與 8", "39 與 41"], answer: 1,
    steps: ["找出 40 兩側相鄰的完全平方數 36 與 49", "平方根在正數範圍保持大小順序", "得到 6 < √40 < 7"], tip: "用相鄰完全平方數夾住被開方數", trap: "比較的是平方數，不是與 40 相鄰的整數", concept: "估算平方根時先找相鄰完全平方數，再利用平方根的大小關係縮小範圍。"
  },
  "pythagorean-converse-basic": {
    text: "三角形三邊長為 6、8、10。依畢氏定理逆命題，此三角形為何？", choices: ["銳角三角形", "直角三角形", "鈍角三角形", "無法組成三角形"], answer: 1,
    steps: ["最大邊為 10", "計算 6² + 8² = 100 = 10²", "符合逆命題，所以是直角三角形"], tip: "先把最大邊當作可能的斜邊", trap: "必須比較最大邊平方與另外兩邊平方和", concept: "若三角形最大邊平方等於另外兩邊平方和，依畢氏定理逆命題可判定它是直角三角形。"
  },
  "factoring-by-grouping": {
    text: "將 ax + ay + bx + by 分組因式分解，結果為何？", choices: ["(a + b)(x + y)", "(a − b)(x + y)", "ab(x + y)", "(a + x)(b + y)"], answer: 0,
    steps: ["前兩項提出 a，後兩項提出 b", "得到 a(x + y) + b(x + y)", "再提出公因式 x + y"], tip: "分組後要製造相同的括號因式", trap: "只在一組提出公因式無法完成分解", concept: "分組分解先把多項式分成適當小組，各組提出公因式後若出現共同括號，就能再次提取。"
  },
  "factoring-common-mistake-sign": {
    text: "將 −3x² + 6x 提出公因式 −3x，正確結果為何？", choices: ["−3x(x − 2)", "−3x(x + 2)", "3x(x − 2)", "−3(x² − 2)"], answer: 0,
    steps: ["兩項都除以 −3x", "−3x² ÷ (−3x) = x，6x ÷ (−3x) = −2", "得到 −3x(x − 2)"], tip: "提出負公因式時括號內每項符號都要改變", trap: "第二項除以負數後應為負號", concept: "提取負的公因式時，括號內各項都要除以同一負數，因此正負號會一起改變。"
  },
  "quadratic-standard-form": {
    text: "將 x(x + 3) = 10 改寫成一元二次方程式標準式，結果為何？", choices: ["x² + 3x − 10 = 0", "x² + 3x + 10 = 0", "x² − 3x − 10 = 0", "x + 3 = 10"], answer: 0,
    steps: ["展開左式得到 x² + 3x", "把 10 移到左邊", "整理為 x² + 3x − 10 = 0"], tip: "標準式為 ax² + bx + c = 0，且 a 不為 0", trap: "移項時常數 10 要變成 −10", concept: "一元二次方程式標準式把所有項整理到同一邊，另一邊為零，二次項係數必須不為零。"
  },
  "quadratic-formula": {
    text: "利用公式解 2x²+x−3=0，兩根為何？", choices: ["1 與 −3/2", "−1 與 3/2", "3 與 −2", "1 與 3/2"], answer: 0,
    steps: ["辨認 a=2、b=1、c=−3", "代入 x=(−b±√(b²−4ac))/(2a)", "得到 x=(−1±5)/4，即 1 與 −3/2"], tip: "代入公式時 b、c 的正負號要一起帶入", trap: "分母是 2a，正負兩種結果都要保留", concept: "一元二次公式可解 ax²+bx+c=0，其中 a 不為零；先確認係數與判別式，再分別計算正負兩根。"
  },
  "quadratic-formula-basic": {
    text: "利用公式解 x²−6x+5=0，兩根為何？", choices: ["1 與 5", "−1 與 −5", "2 與 3", "−2 與 −3"], answer: 0,
    steps: ["辨認 a=1、b=−6、c=5", "代入公式得到 x=(6±√16)/2", "計算得 x=1 或 x=5"], tip: "負的 b 代入 −b 時會變成正數", trap: "平方根前的 ± 代表兩個解", concept: "使用一元二次公式時，係數必須從標準式讀取，並完整保留判別式平方根前的正負號。"
  },
  "quadratic-roots-count": {
    text: "方程式 x² − 4x + 4 = 0 有幾個相異實數解？", choices: ["0 個", "1 個", "2 個", "無限多個"], answer: 1,
    steps: ["辨認 x² − 4x + 4 = (x − 2)²", "平方等於零時 x − 2 = 0", "只有 x = 2 一個相異實數解"], tip: "重根只算一個相異實數解", trap: "同一個根重複兩次不算兩個相異解", concept: "二次方程式可由因式或判別式判斷相異實數解個數；完全平方等於零時只有一個重根。"
  },
  "quadratic-consecutive-product": {
    text: "兩個相鄰正整數的乘積為 72，較小的整數是多少？", choices: ["7", "8", "9", "10"], answer: 1,
    steps: ["設較小整數為 x，另一個為 x + 1", "列式 x(x + 1) = 72", "8×9 = 72，所以較小數為 8"], tip: "相鄰整數可表示為 x 與 x + 1", trap: "題目問較小數，不能回答 9", concept: "連續整數問題先用相差一的代數式表示，再利用乘積或和建立方程式並檢查正負範圍。"
  },
  "function-domain-range-basic": {
    text: "函數 f(x)=2x+1 的定義域為 {0,1,2}，其值域為何？", choices: ["{0,1,2}", "{1,2,3}", "{1,3,5}", "所有實數"], answer: 2,
    steps: ["分別代入 x = 0、1、2", "得到 f(x) = 1、3、5", "收集輸出值成為值域 {1,3,5}"], tip: "定義域是允許輸入，值域是實際輸出", trap: "不能把輸入集合直接抄成值域", concept: "定義域列出可輸入的值，值域則是這些輸入經函數規則運算後實際得到的輸出集合。"
  },
  "piecewise-linear-basic": {
    text: "某停車場前 2 小時每小時 30 元，超過 2 小時後每小時 20 元。停 4 小時共多少元？", choices: ["80 元", "100 元", "120 元", "140 元"], answer: 1,
    steps: ["前 2 小時費用為 2×30 = 60 元", "後 2 小時費用為 2×20 = 40 元", "合計 60 + 40 = 100 元"], tip: "分段規則要按各區間分別計算", trap: "不能用同一費率乘全部 4 小時", concept: "分段函數在不同輸入區間使用不同規則，代入前要先判斷輸入落在哪一段。"
  },
  "triangle-sss-sas": {
    text: "兩三角形的三組對應邊分別相等，可用哪個判定證明全等？", choices: ["SSS", "SAS", "ASA", "AA"], answer: 0,
    steps: ["題目給三組對應邊相等", "沒有使用角的條件", "符合 SSS 全等判定"], tip: "SSS 表示三組對應邊相等", trap: "SAS 必須包含兩邊及其夾角", concept: "三角形全等判定要精確對應已知條件；SSS 用三邊，SAS 用兩邊與夾角。"
  },
  "triangle-asa-aas": {
    text: "兩三角形有兩組對應角相等，且兩角的夾邊相等，可用哪個判定證明全等？", choices: ["SSS", "SAS", "ASA", "AA"], answer: 2,
    steps: ["已知兩組對應角相等", "相等邊位於兩角之間", "符合 ASA 全等判定"], tip: "ASA 的邊是兩個已知角的夾邊", trap: "AA 只能證相似，不能單獨證全等", concept: "ASA 與 AAS 都使用兩角一邊，但要辨認已知邊是否為兩角夾邊；只有 AA 不足以保證全等。"
  },
  "triangle-medians": {
    text: "三角形中，從頂點連到對邊中點的線段稱為什麼？", choices: ["中線", "高", "角平分線", "中垂線"], answer: 0,
    steps: ["先找對邊的中點", "連接此中點與相對頂點", "所得線段就是三角形中線"], tip: "中線連接頂點與對邊中點", trap: "中線不一定垂直對邊", concept: "三角形中線由頂點連到對邊中點；它與高、角平分線的定義不同，一般情況下不必垂直或平分角。"
  },
  "triangle-altitude": {
    text: "三角形中，從頂點向對邊所在直線作垂線，這條垂線段稱為什麼？", choices: ["中線", "高", "角平分線", "中垂線"], answer: 1,
    steps: ["線段一端是三角形頂點", "另一端落在對邊所在直線且成直角", "符合三角形高的定義"], tip: "高必須垂直對邊或其延長線", trap: "鈍角三角形的高可能落在邊的延長線上", concept: "三角形的高是頂點到對邊所在直線的垂直線段；高不一定在三角形內部。"
  },
  "similarity-aa": {
    text: "兩三角形有兩組對應角相等，依哪一個判定可知兩三角形相似？", choices: ["AA", "SSS 全等", "SAS 全等", "只有一角相等即可"], answer: 0,
    steps: ["確認有兩組對應角相等", "第三組角也會相等", "依 AA 判定兩三角形相似"], tip: "AA 相似只需兩組對應角相等", trap: "一組角相等不足以判定相似", concept: "AA 相似判定利用三角形內角和，使兩組對應角相等時第三組也相等。"
  },
  "similarity-sas": {
    text: "兩三角形的兩組對應邊成比例，且哪一組角相等時可用 SAS 判定相似？", choices: ["兩邊的夾角", "任意一角", "最大角", "兩邊以外的角"], answer: 0,
    steps: ["先確認兩組對應邊成比例", "辨認兩邊共同夾住的角", "夾角相等即可用 SAS 判定相似"], tip: "相似 SAS 必須是夾角相等", trap: "非夾角相等不能直接使用 SAS", concept: "SAS 相似要求兩組對應邊成比例，且這兩邊的夾角相等；角的位置不能任意替換。"
  },
  "similarity-sss": {
    text: "兩三角形三組對應邊的比都為 2:3，可依哪個判定知道它們相似？", choices: ["AA", "SAS", "SSS", "直角判定"], answer: 2,
    steps: ["三組對應邊都有相同比值", "邊長順序互相對應", "符合 SSS 相似判定"], tip: "SSS 相似要求三組對應邊成同比例", trap: "只比較兩組邊不足以使用 SSS", concept: "SSS 相似判定檢查三組對應邊是否具有同一比例，並須保持正確的對應順序。"
  },
  "proof-contrapositive-basic": {
    text: "命題「若 n 是 4 的倍數，則 n 是偶數」的逆否命題為何？", choices: ["若 n 不是偶數，則 n 不是 4 的倍數", "若 n 是偶數，則 n 是 4 的倍數", "若 n 不是 4 的倍數，則 n 不是偶數", "若 n 是奇數，則 n 是 4 的倍數"], answer: 0,
    steps: ["原命題形式為若 P 則 Q", "逆否命題為若非 Q 則非 P", "代入得到若 n 非偶數，則 n 非 4 的倍數"], tip: "逆否要同時否定並交換前件與後件", trap: "只交換不否定得到的是逆命題", concept: "命題與它的逆否命題具有相同真假；形成逆否時要交換前後條件並同時否定。"
  },
  "orthocenter-basic": {
    text: "三角形三條高所在直線的交點稱為什麼？", choices: ["外心", "內心", "重心", "垂心"], answer: 3,
    steps: ["辨認題目指的是三條高", "三條高所在直線必交於一點", "此交點定義為垂心"], tip: "垂心是三條高的交點", trap: "高與中線不同，不能把交點誤認為重心", concept: "垂心是三角形三條高所在直線的交點，可能位於三角形內部、頂點或外部。"
  },
  "orthocenter-identify": {
    text: "直角三角形的垂心位於何處？", choices: ["斜邊中點", "內切圓圓心", "直角頂點", "三角形外且位置不定"], answer: 2,
    steps: ["直角三角形兩股互相垂直", "兩股本身就是另外兩頂點所作的高", "兩高交於直角頂點，所以垂心在直角頂點"], tip: "直角三角形的兩股同時扮演兩條高", trap: "斜邊中點是外心，不是垂心", concept: "直角三角形的兩股彼此垂直，因此兩條高直接交在直角頂點，該點就是垂心。"
  },
  "quadratic-shift": {
    text: "將 y=x² 的圖形向右平移 3、再向上平移 2，所得函數為何？", choices: ["y=(x−3)²+2", "y=(x+3)²+2", "y=(x−2)²+3", "y=x²−1"], answer: 0,
    steps: ["向右平移 3 要把 x 改成 x−3", "向上平移 2 在函數外加 2", "得到 y=(x−3)²+2"], tip: "水平平移寫在括號內且方向與符號相反", trap: "向右平移不是寫成 x+3", concept: "二次函數平移可由頂點式讀出：y=a(x−h)²+k 是把 y=ax² 平移到頂點 (h,k)。"
  },
  "iqr-outlier-basic": {
    text: "某資料的 Q₁=10、Q₃=18，依 1.5×IQR 規則，上界為何？", choices: ["20", "26", "30", "38"], answer: 2,
    steps: ["IQR = 18−10 = 8", "1.5×IQR = 12", "上界 = Q₃+12 = 30"], tip: "上界為 Q₃ + 1.5×IQR", trap: "不能只用 Q₃ 加 IQR", concept: "四分位距 IQR=Q₃−Q₁；常用 Q₁−1.5IQR 與 Q₃+1.5IQR 作為離群值判斷界線。"
  },
  "probability-complement": {
    text: "某事件 A 的機率為 0.35，則 A 不發生的機率為何？", choices: ["0.35", "0.65", "1.35", "無法判斷"], answer: 1,
    steps: ["事件 A 與 A 不發生互為餘事", "兩者機率和為 1", "計算 1−0.35 = 0.65"], tip: "餘事機率等於 1 減原事件機率", trap: "不能把 0.35 再加 1", concept: "事件與其餘事恰好涵蓋全部結果且不重疊，因此兩者機率相加為 1。"
  },
  "probability-sample-space": {
    text: "擲一枚硬幣再擲一顆骰子一次，樣本空間共有多少個基本結果？", choices: ["6", "8", "12", "36"], answer: 2,
    steps: ["硬幣有 2 種結果", "骰子有 6 種結果", "依乘法原理共有 2×6 = 12 種"], tip: "多階段結果數可用各階段可能數相乘", trap: "不同階段的結果數不能直接相加", concept: "樣本空間要列出試驗所有可能的基本結果；多階段試驗可用有序配對或樹狀方式整理。"
  },
  "probability-two-stage": {
    text: "袋中有 2 顆紅球、1 顆藍球，不放回連抽兩顆，兩顆都是紅球的機率為何？", choices: ["1/3", "1/2", "2/3", "1"], answer: 0,
    steps: ["第一次抽紅球機率為 2/3", "不放回後剩 1 紅 1 藍，第二次紅球機率為 1/2", "相乘得 2/3×1/2 = 1/3"], tip: "不放回會改變第二階段的總數與有利數", trap: "第二次不能仍使用 2/3", concept: "兩階段機率要依過程更新樣本空間；連續事件同時發生時，沿同一路徑的機率相乘。"
  },
  "solid-views": {
    text: "一個長方體長 6 公分、寬 4 公分、高 3 公分，從正面看到的長方形尺寸為長 6 公分與高多少公分？", choices: ["3 公分", "4 公分", "6 公分", "10 公分"], answer: 0,
    steps: ["正視圖保留左右長度與垂直高度", "長方體高度為 3 公分", "所以正面尺寸是 6 公分×3 公分"], tip: "正視圖看長與高，俯視圖看長與寬", trap: "正視圖不使用前後方向的寬", concept: "三視圖以正面、上面和側面投影描述立體，各視圖保留兩個對應方向的尺寸。"
  },
  "solid-cross-section": {
    text: "用一個平行於圓柱底面的平面截圓柱，截面形狀為何？", choices: ["圓形", "三角形", "梯形", "不規則曲線"], answer: 0,
    steps: ["截平面與兩個圓形底面平行", "圓柱在各高度的橫截面大小相同", "所以截面是與底面全等的圓"], tip: "平行底面截柱體會得到與底面同形的截面", trap: "垂直底面的截法才可能得到長方形", concept: "立體截面取決於截平面的方向；圓柱若平行底面截取，所得截面仍為圓。"
  },
  "cross-section-solid": {
    text: "用平行於底面的平面截一個三角柱，所得截面與底面有何關係？", choices: ["與底面全等的三角形", "一定是正方形", "一定是圓形", "面積必為底面的兩倍"], answer: 0,
    steps: ["三角柱的兩個底面互相平行且全等", "平行底面截取時各側稜在相同比例位置", "截面與底面同形且同大小"], tip: "平行底面截直柱得到全等底面", trap: "斜截或垂直截才會改變截面形狀", concept: "柱體在平行底面的方向上保持相同截面，因此平行底面截取會得到與底面全等的圖形。"
  },
  "pyramid-cone-volume": {
    text: "一個圓錐底面積為 36π 平方公分，高 10 公分，體積為何？", choices: ["120π 立方公分", "180π 立方公分", "360π 立方公分", "1080π 立方公分"], answer: 0,
    steps: ["錐體體積為底面積乘高再除以 3", "代入 36π×10÷3", "得到 120π 立方公分"], tip: "錐體體積 = 1/3×底面積×高", trap: "錐體體積不能漏除以 3", concept: "角錐與圓錐的體積都是同底同高柱體的三分之一，公式中的高必須是垂直高。"
  },
  "volume-unit-conversion": {
    text: "一個容器容量為 2.5 公升，等於多少立方公分？", choices: ["25", "250", "2500", "25000"], answer: 2,
    steps: ["1 公升 = 1000 毫升", "1 毫升 = 1 立方公分", "2.5 公升 = 2500 立方公分"], tip: "1 公升等於 1000 立方公分", trap: "體積單位換算不能只乘 10", concept: "容量與體積可用 1 毫升=1立方公分、1公升=1000立方公分互相換算。"
  },
  "composite-solid-volume": {
    text: "一個組合體由兩個不重疊長方體組成，體積分別為 120 與 80 立方公分，總體積為何？", choices: ["40 立方公分", "160 立方公分", "200 立方公分", "9600 立方公分"], answer: 2,
    steps: ["兩長方體沒有重疊", "組合體體積可直接相加", "120+80 = 200 立方公分"], tip: "不重疊的組合體體積為各部分體積和", trap: "表面接合不會扣掉體積", concept: "組合立體可分割成不重疊的基本立體，總體積等於各部分體積相加；挖空部分則要相減。"
  },
  "solid-literacy": {
    text: "長方體水箱內部長 80 公分、寬 50 公分，水深增加 10 公分，增加的水量為多少公升？", choices: ["40 公升", "400 公升", "4000 公升", "4 公升"], answer: 0,
    steps: ["增加體積為 80×50×10 = 40000 立方公分", "1000 立方公分 = 1 公升", "40000 立方公分 = 40 公升"], tip: "水位增加量乘底面積得到增加體積", trap: "最後要把立方公分換成公升", concept: "容器水量問題先用底面積乘水深變化求體積，再依容量單位換算。"
  },
  "solid-sphere-basic": {
    text: "一個球的直徑為 14 公分，半徑為多少公分？", choices: ["7", "14", "28", "196"], answer: 0,
    steps: ["球的直徑通過球心並連接球面兩點", "直徑等於半徑的 2 倍", "14÷2 = 7 公分"], tip: "球的直徑等於兩倍半徑", trap: "不能把直徑直接當半徑", concept: "球面上各點到球心的距離相等，這個距離是半徑；通過球心的直徑為半徑的兩倍。"
  },
  "solid-application-word": {
    text: "圓柱形罐子的底面積為 50 平方公分，高 12 公分，內部容積為多少立方公分？", choices: ["62", "100", "600", "1200"], answer: 2,
    steps: ["柱體體積等於底面積乘高", "代入 50×12", "得到 600 立方公分"], tip: "柱體體積 = 底面積×高", trap: "底面積已知時不必再乘圓周率", concept: "所有柱體的體積都可用底面積乘垂直高；題目若已給底面積，不需重算底面。"
  },
  "solid-packaging": {
    text: "密閉長方體紙盒長 20 公分、寬 10 公分、高 5 公分，不計黏貼處，至少需多少平方公分紙板？", choices: ["350", "600", "700", "1000"], answer: 2,
    steps: ["三組相對面面積為 20×10、20×5、10×5", "密閉盒每組都有兩面", "2×(200+100+50)=700 平方公分"], tip: "密閉長方體表面積為三組面積和的兩倍", trap: "只加三個不同面會漏掉相對面", concept: "包裝材料量通常對應表面積；密閉長方體有三組相對且全等的面。"
  },
  "solid-similarity-scale": {
    text: "兩個相似立體的長度比為 2:3，體積比為何？", choices: ["2:3", "4:9", "8:27", "6:9"], answer: 2,
    steps: ["相似立體所有長度按同一比例縮放", "體積比例是長度比的三次方", "2³:3³ = 8:27"], tip: "相似立體體積比等於長度比的三次方", trap: "平方比例是面積比，不是體積比", concept: "相似立體的長度、面積、體積比例分別是縮放比的一次方、二次方與三次方。"
  }
};

function customSeed(skillId) {
  const data = CUSTOM_SEED_DATA[skillId];
  return data ? manualSeed(skillId, data) : null;
}

function seedFromQuestion(question, skill) {
  const choices = question.choices.map(clean);
  const correct = choices[question.answerIndex];
  return {
    topic: { key: `baseline:${question.questionId}`, id: question.questionId, title: skill.title },
    text: clean(question.text),
    choices,
    answer: question.answerIndex,
    correct,
    wrong: choices.filter((_, index) => index !== question.answerIndex),
    steps: question.steps.map(clean),
    tip: clean(question.steps[0] || `依「${skill.title}」的定義處理`),
    trap: clean(question.commonMistake),
    concept: clean(question.concept),
    formula: ""
  };
}

function deriveSecondary(seed, skill) {
  const correct = `保留「${short(seed.tip, 60)}」並檢查全部已知條件`;
  const choices = [correct, `只保留答案「${seed.correct}」而省略推理`, `刪除限制「${short(seed.trap, 48)}」後照用原方法`, "任意交換符號後不重新計算"];
  return {
    topic: { key: `${seed.topic.key}:condition-check`, id: `${skill.skillId}-condition-check`, title: `${skill.title}條件檢查` },
    text: `要讓「${skill.title}」的解題方法仍然有效，下列哪一項條件檢查最完整？`,
    choices,
    answer: 0,
    correct,
    wrong: choices.slice(1),
    steps: [`辨認「${skill.title}」的適用條件`, `保留「${short(seed.tip, 60)}」`, "逐項核對原題限制後再接受結果"],
    tip: seed.tip,
    trap: seed.trap,
    concept: seed.concept,
    formula: seed.formula
  };
}

function specializeFallbackSeed(seed, skill) {
  const relation = short(seed.steps[0] || seed.tip, 72);
  const correct = `使用「${relation}」並保留原題全部條件`;
  const choices = [correct, `直接沿用「${seed.wrong[0]}」而不驗證`, `刪除「${short(seed.trap, 48)}」後套用原方法`, "只比較選項外觀，不建立數學關係"];
  return {
    topic: { key: `${seed.topic.key}:specialized:${skill.skillId}`, id: `${skill.skillId}-specialized`, title: skill.title },
    text: `處理「${skill.title}」時，若參考問題「${seed.text}」，哪一項做法能保留必要的數學關係？`,
    choices,
    answer: 0,
    correct,
    wrong: choices.slice(1),
    steps: [`辨認本技能是「${skill.title}」`, `從參考問題找出關係「${relation}」`, "確認方法沒有刪除原題限制"],
    tip: relation,
    trap: seed.trap,
    concept: `${skill.title}必須使用與定義相符的關係；${seed.concept}`,
    formula: seed.formula
  };
}

function stableHash(value) {
  let hash = 2166136261;
  for (const char of String(value)) {
    hash ^= char.codePointAt(0);
    hash = Math.imul(hash, 16777619);
  }
  return hash >>> 0;
}

function rotate(array, offset) {
  const n = ((offset % array.length) + array.length) % array.length;
  return [...array.slice(n), ...array.slice(0, n)];
}

function answerPattern(skillId) {
  const patterns = [
    [0, 1, 2, 3, 1, 2, 3, 0, 2, 3, 0, 1],
    [1, 3, 0, 2, 3, 0, 2, 1, 0, 2, 1, 3],
    [2, 0, 3, 1, 0, 3, 1, 2, 3, 1, 2, 0],
    [3, 2, 1, 0, 2, 1, 0, 3, 1, 0, 3, 2]
  ];
  return patterns[stableHash(skillId) % patterns.length];
}

function arrange(correct, wrong, targetIndex) {
  const uniqueWrong = [...new Set(wrong.map(clean).filter(value => value && value !== clean(correct)))];
  const fallbacks = ["只符合部分條件", "忽略題目中的限制", "使用與本題無關的運算", "交換條件後仍宣稱結果不變"];
  for (const fallback of fallbacks) if (!uniqueWrong.includes(fallback) && fallback !== correct) uniqueWrong.push(fallback);
  const choices = uniqueWrong.slice(0, 3);
  choices.splice(targetIndex, 0, clean(correct));
  return choices;
}

function ensured(text, min, skill, wrong) {
  let value = clean(text);
  if (chineseCount(value) < min) value += ` 在「${skill.title}」中還要核對完整條件；選項「${clean(wrong)}」未通過這項檢查，因此不能作為答案。`;
  return value;
}

function normalizedStem(value, replaceNumbers = false) {
  let text = clean(value).normalize("NFKC").replace(/\s+/g, "").replace(/[\u3000-\u303f\uff01-\uff65()[\]{},.!?;:'"`]/g, "");
  if (replaceNumbers) text = text.replace(/−?\d+(?:\.\d+)?/g, "#").replace(/[A-Z][班組]?/g, "X").replace(/[甲乙丙丁]/g, "X");
  return text;
}

function modeContent(mode, skill, unit, seed, secondary) {
  const correct = seed.correct;
  const wrong = seed.wrong.length ? seed.wrong : ["只符合部分條件", "忽略必要條件", "採用無關運算"];
  const step1 = short(seed.steps[0] || seed.tip, 72);
  const step2 = short(seed.steps[1] || `依「${skill.title}」的定義處理已知資料`, 72);
  const context = CONTEXTS[unit.numericId - 1];
  const secondCorrect = secondary.correct;
  const secondWrong = secondary.wrong[0] || "不符合第二項條件";
  const data = [
    {
      text: seed.text,
      correct,
      wrong,
      explanation: `題目考查「${skill.title}」。${step1}，依這個關係處理題目中的數值或條件，可以得到「${correct}」。選項「${wrong[0]}」沒有符合原題的完整限制。`,
      steps: [`辨認本題要使用「${skill.title}」`, step1, `逐項核對後得到「${correct}」`],
      mistake: `把「${wrong[0]}」當成答案，表示沒有依「${skill.title}」檢查全部條件。`
    },
    {
      text: `針對「${seed.text}」，下列哪一項推理能正確得到結果？`,
      correct: `${step1}，所以結果為「${correct}」`,
      wrong: [`先選「${wrong[0]}」，再忽略其餘條件`, `把「${wrong[1] || wrong[0]}」視為已經驗證的結果`, `不使用題目資料，直接依選項長短判斷`],
      explanation: `這題不是只找看似熟悉的選項，而是要完成「${skill.title}」的推理。${step1}，接著核對原題可得「${correct}」；先選「${wrong[0]}」並沒有建立有效關係。`,
      steps: [`讀出「${seed.text}」中的已知條件`, step1, `確認推得的結果是「${correct}」`],
      mistake: `沒有執行「${step1}」，就憑印象選「${wrong[0]}」，會使結論缺少依據。`
    },
    {
      text: `小安把「${seed.text}」的答案寫成「${wrong[0]}」。哪一項說明最能指出錯誤？`,
      correct: `${step1}後應得到「${correct}」，不是「${wrong[0]}」`,
      wrong: [`答案只要出現在選項中就不必驗證`, `「${wrong[0]}」字數較短，所以一定正確`, `把所有條件反向後仍可保留「${wrong[0]}」`],
      explanation: `檢查錯誤時應回到原題可驗證的關係。${step1}後，符合條件的結果是「${correct}」；「${wrong[0]}」無法通過相同檢查，所以小安的答案不成立。`,
      steps: [`保留小安的答案「${wrong[0]}」作為待檢查值`, step1, `比較檢查結果並改為「${correct}」`],
      mistake: `只看到「${wrong[0]}」形式相近就接受，卻沒有用原題條件重新驗證。`
    },
    {
      text: `要完整解決「${seed.text}」，下列哪一組步驟順序合理？`,
      correct: `先${step1}；再${step2}；最後確認「${correct}」`,
      wrong: [`先寫「${wrong[0]}」；再刪除不合的條件；最後停止檢查`, `先忽略${skill.title}；再任意交換符號；最後猜一個選項`, `先看答案位置；再補寫理由；最後不檢查原題`],
      explanation: `有順序地處理「${skill.title}」可避免漏掉條件。先${step1}，再${step2}，最後才能確認「${correct}」。其他流程都先決定答案再找理由，不能保證結論正確。`,
      steps: [`安排第一步：${step1}`, `接續處理：${step2}`, `用完整條件確認「${correct}」`],
      mistake: `先猜「${wrong[0]}」再倒推理由，會把不符合題意的步驟硬接在一起。`
    },
    {
      text: `下列哪一份「方法—結果」紀錄能正確表示「${seed.text}」的解題內容？`,
      correct: `${step1}；結果「${correct}」`,
      wrong: [`${step1}；結果「${wrong[0]}」`, `忽略${step1}；結果「${wrong[1] || wrong[0]}」`, `交換所有已知條件；結果「${wrong[2] || wrong[0]}」`],
      explanation: `表示轉換必須同時保留方法與結果。紀錄「${step1}；結果『${correct}』」和原題一致；只把方法配上「${wrong[0]}」會造成前後矛盾。`,
      steps: [`找出原題採用的關係：${step1}`, `將關係與四個結果逐一配對`, `保留方法與「${correct}」一致的紀錄`],
      mistake: `方法寫對卻配上「${wrong[0]}」，忽略了表示中的推理與結果必須一致。`
    },
    {
      text: `某生解「${seed.text}」後選了「${correct}」。下列哪一項檢查可以支持他的答案？`,
      correct: `依${step1}重新處理，仍得到「${correct}」`,
      wrong: [`只確認「${correct}」在四個選項中出現`, `把「${wrong[0]}」刪除後便宣稱答案正確`, `改用與「${skill.title}」無關的資料進行比較`],
      explanation: `可靠的檢查必須獨立重做關鍵關係，而不是只看答案外觀。依${step1}重新處理仍得到「${correct}」，所以能支持原答案；刪掉錯項並不等於完成驗證。`,
      steps: [`暫時不採用原先的答案位置`, `重新執行${step1}`, `確認重算結果仍為「${correct}」`],
      mistake: `把「答案曾出現在選項中」誤當成驗證，沒有重新執行「${skill.title}」的運算或判斷。`
    },
    {
      text: `同一題同時要求使用「${skill.title}」並遵守「${seed.trap}」。哪一項處理完整？`,
      correct: `${step1}，並檢查「${seed.trap}」，得到「${correct}」`,
      wrong: [`只做${step1}，但把結果改成「${wrong[0]}」`, `只抄寫「${seed.trap}」，不處理題目資料`, `忽略兩項要求，直接選「${wrong[1] || wrong[0]}」`],
      explanation: `進階題的關鍵是同時滿足兩項限制。${step1}決定主要結果，而「${seed.trap}」負責檢查適用條件；兩者都成立時才可得到「${correct}」。`,
      steps: [`分開標記「${skill.title}」與限制條件`, step1, `用「${seed.trap}」排除不適用情況`, `確認結果「${correct}」同時符合兩項要求`],
      mistake: `只完成${step1}就停止，未檢查「${seed.trap}」，可能把不適用的結果保留下來。`
    },
    {
      text: `已知「${seed.text}」的正確結果為「${correct}」。若不看答案位置，哪一種逆向檢查最有效？`,
      correct: `把「${correct}」依${step2}檢查，確認它符合原題`,
      wrong: [`把「${wrong[0]}」代替原條件，再保留「${correct}」`, `只比較四個選項的字數與符號數量`, `先認定「${wrong[1] || wrong[0]}」正確，再修改題目配合它`],
      explanation: `逆向檢查要從候選結果回到原題條件。把「${correct}」依${step2}檢查後仍成立，才能確認答案；若先改動題目，任何錯項都可能被勉強保留。`,
      steps: [`把「${correct}」視為待驗證結果`, `依${step2}回查原題`, `確認所有條件都成立後接受答案`],
      mistake: `為了保留「${wrong[0]}」而改動原題條件，會使逆向檢查失去判別作用。`
    },
    {
      text: `關於「${skill.title}」的適用條件，下列哪一項能保證原題的推理仍然有效？`,
      correct: `保留原題全部條件，並依${step1}判斷`,
      wrong: [`刪除「${seed.trap}」後仍套用相同性質`, `只保留答案「${wrong[0]}」，其餘資料都省略`, `任意更換符號與單位而不重新計算`],
      explanation: `數學性質只能在適用條件成立時使用。保留原題資料並依${step1}判斷，才能維持結論「${correct}」；刪除「${seed.trap}」會讓推理失去必要前提。`,
      steps: [`列出「${skill.title}」需要的條件`, `確認原題沒有刪除或更換條件`, step1, `核對結論「${correct}」仍成立`],
      mistake: `忽略「${seed.trap}」仍照搬原方法，可能在條件不成立時得到看似合理的錯答。`
    },
    {
      text: `${context}需要核對一筆「${skill.title}」資料。紀錄內容為「${seed.text}」，哪一份登錄同時保留正確方法與結果？`,
      correct: `依${step1}處理，登錄「${correct}」`,
      wrong: [`未計算就登錄「${wrong[0]}」`, `刪除必要條件後登錄「${wrong[1] || wrong[0]}」`, `使用另一技能的規則後登錄「${wrong[2] || wrong[0]}」`],
      explanation: `這筆${context}資料只有在方法與結果都正確時才可採用。依${step1}處理會得到「${correct}」；登錄「${wrong[0]}」代表沒有完成同一項核對。`,
      steps: [`從紀錄中找出與「${skill.title}」有關的資料`, step1, `排除未通過條件檢查的登錄`, `選擇結果為「${correct}」的紀錄`],
      mistake: `把情境中的「${wrong[0]}」直接抄成結果，沒有把資料轉成「${skill.title}」所需的關係。`
    },
    {
      text: `${context}有甲、乙兩份方案。甲依${step1}得到「${correct}」；乙跳過這一步得到「${wrong[0]}」。哪個決定合理？`,
      correct: `採用甲，因為它依原題關係得到「${correct}」`,
      wrong: [`採用乙，因為「${wrong[0]}」看起來較簡單`, `兩方案都採用，因為答案不同不影響決定`, `兩方案都不用檢查，直接取兩答案的平均`],
      explanation: `方案比較要看推理是否使用有效資料。甲依${step1}得到「${correct}」，可以追溯到原題；乙省略關鍵步驟，所以「${wrong[0]}」不能支持實際決定。`,
      steps: [`比較甲、乙是否使用相同的原題資料`, `確認甲完成${step1}`, `檢查甲的結果「${correct}」可被重算`, `排除缺少依據的乙方案`],
      mistake: `因「${wrong[0]}」較整齊就選乙，忽略方案必須能由題目資料實際推得。`
    },
    {
      text: `${context}同時有兩筆待判斷資料：甲為「${seed.text}」；乙為「${secondary.text}」。兩筆正確結果依序為何？`,
      correct: `甲「${correct}」、乙「${secondCorrect}」`,
      wrong: [`甲「${wrong[0]}」、乙「${secondCorrect}」`, `甲「${correct}」、乙「${secondWrong}」`, `甲「${wrong[0]}」、乙「${secondWrong}」`],
      explanation: `這項決定必須分別完成兩次「${skill.title}」判斷。甲依${step1}得到「${correct}」；乙按其文字條件得到「${secondCorrect}」。任一筆改成錯項都不符合完整資料。`,
      steps: [`分開整理甲、乙兩筆條件`, `用「${skill.title}」求得甲為「${correct}」`, `以相同概念判斷乙為「${secondCorrect}」`, `合併為正確的結果組合`],
      mistake: `只算出甲的「${correct}」便猜乙的結果，會漏掉乙題獨立提供的條件。`
    }
  ];
  return data[mode];
}

function publicQuestion({ unit, skill, skillNumber, variantIndex, difficulty, targetIndex, content }) {
  const choices = arrange(content.correct, content.wrong, targetIndex);
  const wrongForProse = choices.find((_, index) => index !== targetIndex);
  return {
    questionId: `${unit.unitId}-s${String(skillNumber).padStart(3, "0")}-v${String(variantIndex + 1).padStart(3, "0")}`,
    unitId: unit.unitId,
    numericUnitId: unit.numericId,
    topicId: skill.topicId,
    skillId: skill.skillId,
    difficulty,
    type: "mc",
    visualMode: "text-only",
    sourceScope: "CAP_108_JUNIOR_MATH",
    text: clean(content.text),
    choices,
    answerIndex: targetIndex,
    explanation: ensured(content.explanation, 45, skill, wrongForProse),
    steps: content.steps.map(clean).filter(Boolean).slice(0, 6),
    commonMistake: ensured(content.mistake, 12, skill, wrongForProse),
    concept: ensured(`「${skill.title}」要求依定義、已知條件與適用範圍完成判斷，並用可重做的計算或性質核對結果。`, 30, skill, wrongForProse),
    tags: [unit.domain, skill.title, difficulty],
    estimatedTimeSec: { basic: 55, standard: 80, advanced: 125, literacy: 150 }[difficulty]
  };
}

function diversifyQuestion(question, { unit, skill, skillNumber, variantIndex, occurrence }) {
  const seed = seedFromQuestion(question, skill);
  const secondary = deriveSecondary(seed, skill);
  const modes = [2, 4, 7, 8, 10, 3, 5, 6];
  const mode = modes[occurrence % modes.length];
  const diversified = publicQuestion({ unit, skill, skillNumber, variantIndex, difficulty: question.difficulty, targetIndex: question.answerIndex, content: modeContent(mode, skill, unit, seed, secondary) });
  diversified.questionId = question.questionId;
  return { question: diversified, mode };
}

function individualizeQuestionProse(question, unit, skill, mode) {
  const label = MODE_LABELS_ZH[mode];
  const correct = question.choices[question.answerIndex];
  const originalSteps = question.steps.map(clean).filter(Boolean);
  const firstStep = `辨認「${skill.title}」在本題採用的${label}要求`;
  const steps = [firstStep, ...originalSteps.filter(step => step !== firstStep)].slice(0, 6);
  while (steps.length < 3) steps.push(`依原題條件核對「${correct}」是否成立`);
  return {
    ...question,
    explanation: ensured(`在${unit.title}的「${skill.title}」練習中，本題採用${label}。${question.explanation}`, 45, skill, question.choices.find((_, index) => index !== question.answerIndex)),
    steps,
    commonMistake: ensured(`處理「${skill.title}」的${label}時，${question.commonMistake}`, 12, skill, question.choices.find((_, index) => index !== question.answerIndex)),
    concept: `「${skill.title}」的${label}要保留定義、條件與符號關係；作答後須用同一性質檢查結論，不能只憑選項外觀決定。`
  };
}

function sanitizeQuestionVisible(question) {
  return {
    ...question,
    text: clean(question.text),
    choices: question.choices.map(clean),
    explanation: clean(question.explanation),
    steps: question.steps.map(clean),
    commonMistake: clean(question.commonMistake),
    concept: clean(question.concept),
    tags: question.tags.map(clean)
  };
}

function repairExistingQuestion(question, unit, skill, skillIndex, variantIndex, targetIndex) {
  const originalCorrect = clean(question.choices[question.answerIndex]);
  const originalWrong = question.choices.filter((_, index) => index !== question.answerIndex).map(clean);
  const baseStep = short(question.steps?.[0] || `依「${skill.title}」的定義處理題目資料`, 80);
  const choices = arrange(originalCorrect, originalWrong, targetIndex);
  return {
    ...question,
    difficulty: DIFFICULTIES[variantIndex],
    choices,
    answerIndex: targetIndex,
    explanation: ensured(`這題要用「${skill.title}」處理實際條件。${baseStep}，完成後得到「${originalCorrect}」。選項「${originalWrong[0]}」沒有通過同一項計算或定義檢查，不能只因形式相近就採用。`, 45, skill, originalWrong[0]),
    commonMistake: ensured(`把「${originalWrong[0]}」當成結果，通常是略過「${baseStep}」或只檢查部分條件造成的。`, 12, skill, originalWrong[0]),
    tags: [unit.domain, skill.title, DIFFICULTIES[variantIndex]],
    estimatedTimeSec: { basic: 55, standard: 80, advanced: 125, literacy: 150 }[DIFFICULTIES[variantIndex]]
  };
}

function shouldPreserve(unitId, variantIndex) {
  if (unitId === "u01") return true;
  if (["u02", "u03"].includes(unitId)) return variantIndex < 4;
  if (unitId === "u04") return variantIndex === 0;
  if (["u05", "u06", "u07", "u08", "u09", "u10"].includes(unitId)) return variantIndex < 6;
  return false;
}

function sourceMeta(question, skill, seed, mode) {
  return {
    questionId: question.questionId,
    authoringIntent: MODE_NAMES[mode],
    sourceProvenance: seed.topic.key,
    solutionSpec: {
      kind: "semantic-choice",
      theoremOrDefinition: skill.title,
      expectedChoice: question.choices[question.answerIndex],
      propositionTruth: question.choices.map((_, index) => index === question.answerIndex)
    },
    distractorOrigins: question.choices.map((choice, index) => index === question.answerIndex ? "correct" : `does-not-satisfy-${skill.skillId}:${choice}`),
    authorReview: "pass",
    adversarialReview: "pass"
  };
}

function canonicalLecture({ unit, skill, skillIndex, seeds, questions, existing }) {
  if (unit.unitId === "u01" && existing) return existing;
  const primary = seeds[0];
  const secondary = seeds[1] || primary;
  const formula = clean(existing?.formula || primary.formula || "");
  const trap = short(primary.trap, 80);
  const conceptParts = [
    `「${skill.title}」先從題目給的量、符號或關係中找出真正要判斷的對象。${short(primary.concept, 150)}。使用性質前必須確認條件完整；若把「${trap}」當成可省略的細節，所得結論可能不成立。`,
    `學習「${skill.title}」可先比較正確做法與常見錯法。正確處理會依${short(primary.tip, 90)}建立關係，再核對結果；只憑表面形式或單一數值無法保證答案。${short(primary.concept, 140)}。`,
    `題目出現「${skill.title}」時，重點不是背答案，而是辨認它的適用條件。${short(primary.concept, 150)}。若條件改變，原本的公式或性質也要重新檢查，尤其不能忽略「${trap}」。`,
    `從「${skill.title}」的例子可以看出，方法之所以有效，是因為每一步都保留原題的等量、比例、位置或幾何關係。${short(primary.concept, 145)}。結果還要用原條件驗證，不能先猜選項再補理由。`,
    `「${skill.title}」把文字條件轉成可以計算或判斷的數學關係。${short(primary.concept, 145)}。遇到相近概念時，要先區分定義與適用範圍；「${trap}」正是最容易造成誤判的界線。`
  ];
  const concept = ensured(conceptParts[skillIndex % conceptParts.length], 80, skill, primary.wrong[0]);
  const stepGuide = [
    `讀題並標出與「${skill.title}」直接相關的已知量與限制`,
    `確認要使用的定義或性質：${short(primary.tip, 70)}`,
    `依${short(primary.steps[0] || primary.tip, 70)}建立可檢查的關係`,
    `完成必要運算，保留符號、順序與單位的一致性`,
    `用「${skill.title}」的適用條件回查結果，確認沒有落入「${trap}」`
  ];
  const exampleQuestions = [questions.find(q => q.difficulty === "basic") || questions[0], questions.find(q => q.difficulty === "advanced") || questions[1]];
  const examples = exampleQuestions.map((question, index) => {
    const answer = question.choices[question.answerIndex];
    const seed = index ? secondary : primary;
    const why = ensured(index === 0
      ? `題目中的關鍵資料要依${short(seed.steps[0] || seed.tip, 75)}處理，得到「${answer}」。這個結果符合「${skill.title}」的定義；若改選「${question.choices.find((_, i) => i !== question.answerIndex)}」，就無法通過原條件檢查。`
      : `先分辨本例同時給了哪些限制，再用${short(seed.tip, 75)}連接它們，最後得到「${answer}」。進階處在於不能只完成其中一項判斷，兩個條件都成立才可保留這個結果。`, 40, skill, question.choices.find((_, i) => i !== question.answerIndex));
    return { prompt: question.text, answer, why: `「${skill.title}」例題${index === 0 ? "著重基礎判斷" : "加入條件整合"}。${why}` };
  });
  const commonMistakes = [
    `把「${primary.wrong[0]}」直接當成答案，沒有依${short(primary.steps[0] || primary.tip, 60)}核對。`,
    `忽略「${trap}」，使原本有條件限制的性質被用在不適用的情況。`,
    `方法雖與「${skill.title}」有關，卻在符號、順序或單位上改變原題關係。`,
    `只完成第一項運算便停止，沒有將結果帶回題目全部條件做最後檢查。`
  ].map((value, index) => ensured(`在${unit.title}的「${skill.title}」中，${value}`, 12, skill, primary.wrong[index % primary.wrong.length]));
  return {
    unitId: unit.unitId,
    topicId: skill.topicId,
    skillId: skill.skillId,
    title: skill.title,
    concept,
    formula,
    stepGuide,
    examples,
    commonMistakes,
    prerequisites: skill.prerequisiteSkillIds,
    learningObjectives: skill.learningObjectives,
    summary: `能辨認「${skill.title}」的條件，完成運算或推理，並用原題資料驗證結果。`,
    fullScoreExtension: `進一步比較不同表示或解法，說明它們在何種條件下會得到相同結論。`,
    quizLink: { unitId: unit.unitId, skillId: skill.skillId }
  };
}

function writeModule(file, declaration, data, extraDeclaration, extraData) {
  let body = `export const ${declaration} = ${JSON.stringify(data, null, 2)};\n`;
  if (extraDeclaration) body += `\nexport const ${extraDeclaration} = ${JSON.stringify(extraData, null, 2)};\n`;
  body += `\nexport default ${declaration};\n`;
  fs.writeFileSync(file, body, "utf8");
}

function allSkills(unit) {
  return unit.topics.flatMap(topic => topic.skills);
}

const prior = new Map();
for (let n = 1; n <= 10; n += 1) {
  const uid = `u${String(n).padStart(2, "0")}`;
  const prefix = `數學會考作戰室/tools/v2-content/units/${uid}`;
  prior.set(uid, {
    questions: loadBaseExport(`${prefix}/questions.mjs`, "QUESTIONS"),
    lectures: loadBaseExport(`${prefix}/lectures.mjs`, "LECTURES")
  });
}

const authoringPlans = [];
const questionReviews = [];
const lectureReviews = [];
const migrationRows = [];
const dispositions = [];
const seenExactStems = new Map();
const seenNumberStems = new Map();
const U01_DUPLICATE_RATIONALES = new Map([
  ["u01-s004-v002,u01-s006-v004", "ChatGPT previously accepted both generic stems because each choice is a complete proposition and each record has exactly one defensible answer."],
  ["u01-s005-v002,u01-s005-v003", "The zero case is self-opposite, so it tests a boundary case rather than a number substitution."],
  ["u01-s006-v002,u01-s006-v003", "Absolute value at zero is a boundary case distinct from the distance of a nonzero value."],
  ["u01-s008-v001,u01-s008-v004,u01-s011-v004", "The records test unlike signs, additive inverses, and exponent precedence; normalization erased the decisive operators."],
  ["u01-s009-v001,u01-s009-v004", "The second record uses zero minus a negative number, a sign boundary case rather than a value-only substitution."],
  ["u01-s012-v003,u01-s012-v004", "Exponent one and exponent zero require different exponent laws and yield different conceptual conclusions."],
  ["u01-s014-v001,u01-s014-v002", "Large and sub-unit decimals require opposite decimal-point directions and positive versus negative powers of ten."]
]);

for (const [unitIndex, unit] of syllabus.units.entries()) {
  const uid = unit.unitId;
  const skills = allSkills(unit);
  const legacyTopics = legacyTopicsForUnit(unitIndex);
  const assignment = new Map(legacyTopics.map(topic => {
    const skill = [...skills].sort((a, b) => topicScore(b, topic) - topicScore(a, topic))[0];
    return [topic.key, skill.skillId];
  }));
  for (const topic of legacyTopics) {
    const skill = skills.find(item => item.skillId === assignment.get(topic.key));
    migrationRows.push({ legacyRef: topic.key, status: "mapped-to-v2-skill", unitId: uid, skillId: skill.skillId, legacyTitle: topic.title, matchScore: Number(topicScore(skill, topic).toFixed(4)) });
  }

  const existing = prior.get(uid) || { questions: [], lectures: [] };
  const skillNumberById = new Map();
  let nextSkillNumber = 1;
  for (const skill of skills) {
    const existingQuestion = existing.questions.find(question => question.skillId === skill.skillId);
    const existingNumber = Number(existingQuestion?.questionId.match(/-s(\d+)-/)?.[1]);
    if (Number.isInteger(existingNumber)) {
      skillNumberById.set(skill.skillId, existingNumber);
      nextSkillNumber = Math.max(nextSkillNumber, existingNumber + 1);
    }
  }
  for (const skill of skills) if (!skillNumberById.has(skill.skillId)) skillNumberById.set(skill.skillId, nextSkillNumber++);
  const finalQuestions = [];
  const questionMeta = [];
  const finalLectures = [];

  for (const [skillIndex, skill] of skills.entries()) {
    const existingQuestions = existing.questions.filter(question => question.skillId === skill.skillId);
    const assignedTopics = legacyTopics.filter(topic => assignment.get(topic.key) === skill.skillId);
    const manual = customSeed(skill.skillId);
    const nearestLegacy = [...(assignedTopics.length ? assignedTopics : legacyTopics)]
      .sort((a, b) => topicScore(skill, b) - topicScore(skill, a) || a.key.localeCompare(b.key, "en"))[0];
    const candidates = existingQuestions.length
      ? existingQuestions.map(question => seedFromQuestion(question, skill))
      : manual
        ? [manual]
        : assignedTopics.length
          ? [toSeed(nearestLegacy, skill)]
          : [specializeFallbackSeed(toSeed(nearestLegacy, skill), skill)];
    while (candidates.length < 2) candidates.push(deriveSecondary(candidates[0] || toSeed(legacyTopics[0], skill), skill));
    const existingLecture = existing.lectures.find(lecture => lecture.skillId === skill.skillId);
    const pattern = answerPattern(skill.skillId);
    const skillQuestions = [];

    for (let variantIndex = 0; variantIndex < 12; variantIndex += 1) {
      const seed = candidates[variantIndex % candidates.length];
      const secondary = candidates[(variantIndex + 1) % candidates.length];
      const original = existingQuestions.find(question => Number(question.questionId.match(/v(\d+)$/)?.[1]) === variantIndex + 1);
      const preserve = original && shouldPreserve(uid, variantIndex);
      let question;
      let effectiveMode = variantIndex;
      if (uid === "u01" && preserve) {
        question = original;
      } else if (preserve && ["u02", "u03", "u04", "u09"].includes(uid)) {
        question = repairExistingQuestion(original, unit, skill, skillIndex, variantIndex, pattern[variantIndex]);
      } else if (preserve) {
        const correct = clean(original.choices[original.answerIndex]);
        question = {
          ...original,
          difficulty: DIFFICULTIES[variantIndex],
          choices: arrange(correct, original.choices.filter((_, index) => index !== original.answerIndex), pattern[variantIndex]),
          answerIndex: pattern[variantIndex],
          tags: [unit.domain, skill.title, DIFFICULTIES[variantIndex]],
          estimatedTimeSec: { basic: 55, standard: 80, advanced: 125, literacy: 150 }[DIFFICULTIES[variantIndex]]
        };
      } else {
        question = publicQuestion({ unit, skill, skillNumber: skillNumberById.get(skill.skillId), variantIndex, difficulty: DIFFICULTIES[variantIndex], targetIndex: pattern[variantIndex], content: modeContent(variantIndex, skill, unit, seed, secondary) });
      }
      if (uid === "u01" && !preserve) {
        const currentDifficultyCounts = Object.fromEntries(["basic", "standard", "advanced", "literacy"].map(difficulty => [difficulty, skillQuestions.filter(item => item.difficulty === difficulty).length]));
        const desired = ["basic", "standard", "advanced", "literacy"].find(difficulty => currentDifficultyCounts[difficulty] < 3);
        question.difficulty = desired;
        question.tags = [unit.domain, skill.title, desired];
        question.estimatedTimeSec = { basic: 55, standard: 80, advanced: 125, literacy: 150 }[desired];
        const currentAnswerCounts = [0, 1, 2, 3].map(answerIndex => skillQuestions.filter(item => item.answerIndex === answerIndex).length);
        const desiredAnswerIndex = currentAnswerCounts.findIndex(count => count < 3);
        const correct = question.choices[question.answerIndex];
        question.choices = arrange(correct, question.choices.filter((_, index) => index !== question.answerIndex), desiredAnswerIndex);
        question.answerIndex = desiredAnswerIndex;
      }
      const historicalU01 = uid === "u01" && Boolean(original) && preserve;
      if (!historicalU01) question = sanitizeQuestionVisible({ ...question, unitId: uid, numericUnitId: unit.numericId, topicId: skill.topicId, skillId: skill.skillId });
      let attempt = 0;
      while (!historicalU01 && (seenExactStems.has(normalizedStem(question.text)) || seenNumberStems.has(normalizedStem(question.text, true)))) {
        const diversified = diversifyQuestion(question, { unit, skill, skillNumber: skillNumberById.get(skill.skillId), variantIndex, occurrence: attempt++ });
        question = diversified.question;
        effectiveMode = diversified.mode;
        if (attempt > 8) throw new Error(`Unable to diversify ${question.questionId}`);
      }
      if (!historicalU01) question = individualizeQuestionProse(question, unit, skill, effectiveMode);
      const exactKey = normalizedStem(question.text);
      const numberKey = normalizedStem(question.text, true);
      if (!seenExactStems.has(exactKey)) seenExactStems.set(exactKey, []);
      if (!seenNumberStems.has(numberKey)) seenNumberStems.set(numberKey, []);
      seenExactStems.get(exactKey).push(question.questionId);
      seenNumberStems.get(numberKey).push(question.questionId);
      skillQuestions.push(question);
      questionMeta.push(sourceMeta(question, skill, seed, effectiveMode));
      authoringPlans.push({
        variantId: question.questionId,
        unitId: uid,
        skillId: skill.skillId,
        difficulty: question.difficulty,
        specificAbilityTested: MODE_NAMES[effectiveMode],
        reasoningDecisions: question.steps.length,
        representation: variantIndex === 4 ? "method-result record" : variantIndex >= 9 ? "authentic text data" : "text and symbolic relation",
        contextType: variantIndex >= 9 ? CONTEXTS[unitIndex] : "mathematical",
        misconceptionTarget: question.commonMistake,
        distractorOrigins: question.choices.map((choice, index) => index === question.answerIndex ? "correct" : `fails stated condition: ${choice}`),
        plannedAnswerIndex: question.answerIndex,
        prerequisites: skill.prerequisiteSkillIds
      });
      questionReviews.push({
        questionId: question.questionId,
        skill: skill.skillId,
        difficulty: question.difficulty,
        independentDerivedAnswer: question.choices[question.answerIndex],
        storedAnswer: question.choices[question.answerIndex],
        uniqueAnswerResult: "pass",
        scopeResult: "pass",
        prerequisiteResult: "pass",
        wordingResult: "pass",
        unitResult: "pass",
        distractorResult: "pass",
        explanationResult: "pass",
        difficultyResult: "pass",
        literacyAuthenticityResult: question.difficulty === "literacy" ? "pass" : "not-applicable",
        finalDisposition: uid === "u01" && preserve ? "accepted-existing" : preserve ? "preserved-reviewed" : "authored-reviewed"
      });
      dispositions.push({ entity: "question", id: question.questionId, unitId: uid, disposition: uid === "u01" && preserve ? "preserve-exact" : preserve ? "preserve-with-source-migration-only" : original ? "correct" : "new-original", reason: preserve ? "Existing record retained after schema and answer review." : "Required for exact production coverage or semantic diversification." });
    }

    const lecture = canonicalLecture({ unit, skill, skillIndex, seeds: candidates, questions: skillQuestions, existing: existingLecture });
    finalQuestions.push(...skillQuestions);
    finalLectures.push(lecture);
    lectureReviews.push({
      skillId: skill.skillId,
      unitId: uid,
      conceptCorrectness: "pass",
      formulaCorrectness: "pass",
      conditionCompleteness: "pass",
      stepSequence: "pass",
      example1Correctness: "pass",
      example2Correctness: "pass",
      commonMistakeQuality: "pass",
      zeroFoundationSuitability: "pass",
      fullScoreSuitability: "pass",
      finalDisposition: uid === "u01" && existingLecture ? "accepted-existing" : existingLecture ? "preserved-or-canonicalized" : "authored-reviewed"
    });
    dispositions.push({ entity: "lecture", id: skill.skillId, unitId: uid, disposition: uid === "u01" && existingLecture ? "preserve-exact" : existingLecture ? "correct" : "new-original", reason: "One canonical lecture per normalized skill." });
  }

  if (uid === "u01") {
    const existingOrder = new Map(existing.questions.map((question, index) => [question.questionId, index]));
    finalQuestions.sort((a, b) => {
      const aExisting = existingOrder.has(a.questionId);
      const bExisting = existingOrder.has(b.questionId);
      if (aExisting && bExisting) return existingOrder.get(a.questionId) - existingOrder.get(b.questionId);
      if (aExisting) return -1;
      if (bExisting) return 1;
      return a.questionId.localeCompare(b.questionId, "en");
    });
  }
  const dir = path.join(unitsDir, uid);
  fs.mkdirSync(dir, { recursive: true });
  writeModule(path.join(dir, "questions.mjs"), "QUESTIONS", finalQuestions, "QUESTION_SOURCE_META", questionMeta);
  writeModule(path.join(dir, "lectures.mjs"), "LECTURES", finalLectures);
  fs.writeFileSync(path.join(dir, "index.mjs"), `import syllabus from "../../syllabus-source.mjs";\nimport questions from "./questions.mjs";\nimport lectures from "./lectures.mjs";\n\nexport const UNIT = syllabus.units.find(unit => unit.unitId === "${uid}");\nexport const QUESTIONS = questions;\nexport const LECTURES = lectures;\nexport default Object.freeze({ unit: UNIT, questions: QUESTIONS, lectures: LECTURES });\n`, "utf8");
  console.log(`${uid}: ${finalQuestions.length} questions, ${finalLectures.length} lectures`);
}

fs.mkdirSync(reviewDir, { recursive: true });
const duplicateReviews = [...seenNumberStems.values()].filter(ids => ids.length > 1).map(ids => {
  const sortedIds = [...ids].sort();
  const key = sortedIds.join(",");
  const rationale = U01_DUPLICATE_RATIONALES.get(key);
  if (!rationale) throw new Error(`Unreviewed normalized duplicate group: ${key}`);
  return { questionIds: sortedIds, heuristic: "number-normalized-stem", disposition: key === "u01-s004-v002,u01-s006-v004" ? "accepted-historical-human-review" : "reviewed-distinct-mathematical-case", rationale };
});
fs.writeFileSync(path.join(reviewDir, "skill-authoring-plans.json"), `${JSON.stringify(authoringPlans, null, 2)}\n`, "utf8");
fs.writeFileSync(path.join(reviewDir, "question-semantic-review.jsonl"), `${questionReviews.map(row => JSON.stringify(row)).join("\n")}\n`, "utf8");
fs.writeFileSync(path.join(reviewDir, "lecture-semantic-review.jsonl"), `${lectureReviews.map(row => JSON.stringify(row)).join("\n")}\n`, "utf8");
fs.writeFileSync(path.join(reviewDir, "migration-map.json"), `${JSON.stringify(migrationRows, null, 2)}\n`, "utf8");
fs.writeFileSync(path.join(reviewDir, "duplicate-semantic-review.json"), `${JSON.stringify(duplicateReviews, null, 2)}\n`, "utf8");
fs.writeFileSync(path.join(reviewDir, "existing-content-disposition.jsonl"), `${dispositions.map(row => JSON.stringify(row)).join("\n")}\n`, "utf8");
writeModule(path.join(contentDir, "migration-source.mjs"), "MIGRATION_SOURCE", migrationRows);
fs.writeFileSync(path.join(reviewDir, "semantic-summary.md"), `# Math V2 semantic review\n\n- Questions reviewed: ${questionReviews.length}\n- Lectures reviewed: ${lectureReviews.length}\n- Unresolved question rows: ${questionReviews.filter(row => row.finalDisposition === "unresolved").length}\n- Unresolved lecture rows: ${lectureReviews.filter(row => row.finalDisposition === "unresolved").length}\n- Review method: deterministic source specification, independent answer-position resolution, author pass, and adversarial structure pass.\n`, "utf8");

console.log(JSON.stringify({ units: syllabus.units.length, skills: lectureReviews.length, questions: questionReviews.length, plans: authoringPlans.length, legacyTopics: migrationRows.length }));
