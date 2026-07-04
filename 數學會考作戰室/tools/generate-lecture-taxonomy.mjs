import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const context = vm.createContext({ window: {}, console });
for (const file of ["data.js", "quiz-taxonomy.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}

const taxonomy = context.window.QUIZ_TAXONOMY || {};
const units = context.window.MATH_DATA.units;

const diagramKindForTopic = (title = "", section = "") => {
  const text = `${title}${section}`;
  if (/數線|絕對值|相反數|正負數/.test(text)) return { kind: "numberLine", min: -6, max: 6, points: [{ value: -3, label: "A" }, { value: 2, label: "B" }], caption: "數線上標記相反數與距離" };
  if (/坐標|函數圖|線型函數|二次函數|圖形/.test(text)) return { kind: "coordinatePlane", points: [{ x: 0, y: 0, label: "O" }, { x: 2, y: 3, label: "P" }], lines: [{ x1: -3, y1: -2, x2: 3, y2: 4 }], caption: "坐標平面與點、線關係" };
  if (/三角形|全等|相似|畢氏|勾股|心|證明/.test(text)) return { kind: "triangle", caption: "三角形邊角關係示意" };
  if (/平行|四邊形|截角|同位角|內錯角/.test(text)) return { kind: "parallelLines", caption: "平行線被截線所形成的角度" };
  if (/圓|弧|弦|切線/.test(text)) return { kind: "circle", caption: "圓心、半徑與弦" };
  if (/盒狀|四分位|中位數|統計/.test(text)) return { kind: "boxPlot", caption: "資料分布的五數摘要" };
  if (/機率|樹狀|組合/.test(text)) return { kind: "treeDiagram", caption: "逐層列出所有可能結果" };
  if (/長條|折線|圖表|資料/.test(text)) return { kind: "barChart", caption: "類別資料的長度比較" };
  if (/立體|角柱|角錐|表面積|體積|空間/.test(text)) return { kind: "solidPrism", caption: "立體圖形的面與棱" };
  return null;
};

const chapterTitle = quizId => ({
  "g7-1-c1": "國一上｜數與數線", "g7-1-c2": "國一上｜標準分解式與分數", "g7-1-c3": "國一上｜一元一次方程式",
  "g7-2-c1": "國一下｜二元一次聯立方程式", "g7-2-c2": "國一下｜直角坐標", "g7-2-c3": "國一下｜比例",
  "g7-2-c4": "國一下｜一元一次不等式", "g7-2-c5": "國一下｜統計圖表", "g7-2-c6": "國一下｜線對稱與三視圖",
  "g8-1-c1": "國二上｜乘法公式與多項式", "g8-1-c2": "國二上｜平方根與畢氏定理", "g8-1-c3": "國二上｜因式分解",
  "g8-1-c4": "國二上｜一元二次方程式", "g8-2-c1": "國二下｜數列與級數", "g8-2-c2": "國二下｜線型函數",
  "g8-2-c3": "國二下｜三角形的基本性質", "g8-2-c4": "國二下｜平行與四邊形",
  "g9-1-c1": "國三上｜連比與相似形", "g9-1-c2": "國三上｜圓形", "g9-1-c3": "國三上｜推理證明與三角形的心",
  "g9-2-c1": "國三下｜二次函數", "g9-2-c2": "國三下｜統計與機率", "g9-2-c3": "國三下｜立體圖形"
}[quizId] || quizId);

const unitForQuiz = quizId => {
  const map = {
    "g7-1-c1": 1, "g7-1-c2": 3, "g7-1-c3": 5, "g7-2-c1": 6, "g7-2-c2": 7, "g7-2-c3": 8,
    "g7-2-c4": 9, "g7-2-c5": 10, "g7-2-c6": 11, "g8-1-c1": 12, "g8-1-c2": 13, "g8-1-c3": 14,
    "g8-1-c4": 15, "g8-2-c1": 16, "g8-2-c2": 17, "g8-2-c3": 18, "g8-2-c4": 19,
    "g9-1-c1": 21, "g9-1-c2": 22, "g9-1-c3": 23, "g9-2-c1": 24, "g9-2-c2": 25, "g9-2-c3": 26
  };
  return units.find(u => u.id === map[quizId]) || units[0];
};

const lectures = {};
let count = 0;

for (const [quizId, chapter] of Object.entries(taxonomy)) {
  const unit = unitForQuiz(quizId);
  for (const section of chapter.sections || []) {
    for (const topic of section.topics || []) {
      const key = `${quizId}/${topic.id}`;
      const diagram = diagramKindForTopic(topic.title, section.title);
      const blocks = [
        { type: "text", html: `<p><strong>${topic.title}</strong>屬於「${section.title}」。本題型在單元小考中固定出現一題；同一份試卷由<strong>種子碼</strong>決定使用 10 組變體中的哪一組。</p>` },
        { type: "text", html: `<p>${unit.summary}</p>` },
        { type: "formula", content: unit.formula.split("\n")[0] || unit.formula },
        { type: "text", html: `<h4>解題流程</h4><ol>${unit.steps.slice(0, 4).map(s => `<li>${s}</li>`).join("")}</ol>` },
        { type: "example", q: `（例）${topic.title}：先讀題意，再依 ${section.title} 的規則逐步計算或判斷。`, a: `對照選項或計算結果，確認符合 ${topic.title} 的定義與條件。` },
        { type: "pitfall", html: `<p>${unit.tips[0] || "先寫已知、再列式，避免跳步。"}</p><p>${unit.clarify || ""}</p>` }
      ];
      if (diagram) blocks.splice(3, 0, { type: "diagram", spec: diagram });
      lectures[key] = { title: topic.title, chapter: chapterTitle(quizId), section: section.title, quizId, topicId: topic.id, blocks };
      count += 1;
    }
  }
}

const out = `window.LECTURE_TAXONOMY = ${JSON.stringify(lectures, null, 2)};\n`;
fs.writeFileSync(path.join(root, "lecture-taxonomy.js"), out, "utf8");
console.log(`Generated ${count} lecture entries → lecture-taxonomy.js`);
