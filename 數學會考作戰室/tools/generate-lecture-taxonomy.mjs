import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const context = vm.createContext({ window: {}, console });
for (const file of ["data.js", "quiz-taxonomy.js", "quiz-variant-bank.js"]) {
  vm.runInContext(fs.readFileSync(path.join(root, file), "utf8"), context, { filename: file });
}

const taxonomy = context.window.QUIZ_TAXONOMY || {};
const bank = context.window.QUIZ_VARIANT_BANK || {};
const units = context.window.MATH_DATA.units;
const letters = ["A", "B", "C", "D"];

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

function formatExample(q, label) {
  const correct = q.choices?.[q.answer] ?? "";
  const steps = Array.isArray(q.steps) ? q.steps.map((s, i) => `${i + 1}. ${s}`).join("\n") : "";
  return {
    q: `${label}：${q.text}`,
    a: `正確答案：${letters[q.answer] ?? ""} — ${correct}\n${steps}`
  };
}

function topicDefinition(title, section, unit) {
  return `<p><strong>${title}</strong>是「${section}」的核心題型之一。解題時先對照 ${unit.title} 的觀念：${unit.core.split("。")[0]}。</p><p>小考中此題型固定出現 1 題；種子碼決定 10 組凍結變體中的哪一組。</p>`;
}

const lectures = {};
let count = 0;

for (const [quizId, chapter] of Object.entries(taxonomy)) {
  const unit = unitForQuiz(quizId);
  for (const section of chapter.sections || []) {
    for (const topic of section.topics || []) {
      const key = `${quizId}/${topic.id}`;
      const presets = bank[key];
      if (!presets?.length) throw new Error(`缺少變體題庫 ${key}`);
      const ex1 = formatExample(presets[0], "例題一");
      const ex2 = presets[1].text !== presets[0].text ? formatExample(presets[1], "例題二") : null;
      const blocks = [
        { type: "text", html: topicDefinition(topic.title, section.title, unit) },
        { type: "formula", content: unit.formula.split("\n").slice(0, 2).join("\n") || unit.formula },
        { type: "text", html: `<h4>解題流程</h4><ol>${unit.steps.slice(0, 4).map(s => `<li>${s}</li>`).join("")}</ol>` },
        { type: "example", q: ex1.q, a: ex1.a }
      ];
      if (ex2) blocks.push({ type: "example", q: ex2.q, a: ex2.a });
      // ponytail: no guessed lecture figures; add a verified diagram block only when it matches this exact topic/example.
      blocks.push(
        { type: "pitfall", html: `<p><strong>易錯：</strong>${presets[0].trap || unit.tips[0]}</p><p><strong>快解：</strong>${presets[0].tip || unit.tips[1] || unit.tips[0]}</p>` },
        { type: "text", html: `<p><strong>與小考對應：</strong>章節 ${quizId} — 題型 ${topic.id} — 變體索引 0–9 由種子碼展開。</p>` }
      );
      lectures[key] = { title: topic.title, chapter: chapterTitle(quizId), section: section.title, quizId, topicId: topic.id, blocks };
      count += 1;
    }
  }
}

fs.writeFileSync(path.join(root, "lecture-taxonomy.js"), `window.LECTURE_TAXONOMY = ${JSON.stringify(lectures, null, 2)};\n`, "utf8");
console.log(`Generated ${count} detailed lecture entries → lecture-taxonomy.js`);
