#!/usr/bin/env node
/**
 * U09-R3: strip global filler tails and append question-specific endings.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const toolsDir = path.dirname(fileURLToPath(import.meta.url));
const partsDir = path.join(toolsDir, "v2-u09-parts");

const R3_STRIP = [
  "列式要用題目全部已知數字再作答，不能跳步。",
  "列式要用題目全部已知數字再作答。",
  "結論必須依題目所給資料計算得到。",
  "不能跳步。"
];

/** Misplaced R2 template fragments that don't belong on this question */
const WRONG_TEMPLATE_RES = [
  /六個數的中位是第3、4兩數80與85的平均。?/g,
  /五個數排序後正中央第3個才是中位數。?/g,
  /未排序就取中位會選錯，要先排成3、4、5、6、8。?/g,
  /平均80乘30人得2400分，不能用錯誤的個數。?/g,
  /設原人數n，列\(75n\+80\)÷\(n\+1\)=76，解得n=4。?/g,
  /蘋果40%減香蕉30%，差10個百分點。?/g,
  /花生與杏仁總價1600元除以500g，不能對單價直接平均。?/g,
  /兩班總分相加再除以50人，不能對75與85直接平均。?/g,
  /要把每段相鄰差算出來，4到5月增6件才是最大。?/g,
  /題目指定3月與1月，要用15減10，不能用其他月份。?/g
];

const FULL = {
  "u09-s001-v007":
    "B班平均84分，A班平均78分，題目問兩班平均相差幾分，所以直接算84−78=6。4與10都不是由84和78相減得到；這題比較的是兩個平均值的差，不需要再除以班級人數。"
};

function countZh(t) {
  return (t.match(/[\u4e00-\u9fff]/g) || []).length;
}

function stripR3(text) {
  let s = text;
  for (const p of R3_STRIP) while (s.includes(p)) s = s.replace(p, "");
  for (const re of WRONG_TEMPLATE_RES) s = s.replace(re, "");
  return s.replace(/\s{2,}/g, " ").replace(/。+/g, "。").trim();
}

function dedupe(e) {
  const parts = e.split("。").filter(Boolean);
  const seen = new Set();
  const out = [];
  for (const p of parts) {
    const k = p.trim();
    if (k && !seen.has(k)) {
      seen.add(k);
      out.push(k);
    }
  }
  return out.length ? out.join("。") + "。" : e;
}

function tailOk(q, tail) {
  const plain = q.text.replace(/\s+/g, "");
  for (let len = 9; len <= Math.min(plain.length, 24); len++) {
    for (let i = 0; i <= plain.length - len; i++) {
      const sub = plain.slice(i, i + len);
      if (/^[\u4e00-\u9fff？?，,、：:]+$/.test(sub) && tail.includes(sub)) return false;
    }
  }
  return true;
}

function pickTail(q, options) {
  for (const t of options) if (tailOk(q, t)) return t;
  return "答案只能由題幹已列出的數字依題意計算，不能改用其他資料。";
}

function craftTail(q) {
  const t = q.text;
  const skill = q.skillId;

  if (skill === "data-table-reading") {
    if (/B班.*A班|A班.*B班/.test(t) && /平均/.test(t))
      return pickTail(q, [
        "這題比較兩個已給的平均分，直接相減即可，不必再除以人數。",
        "兩個平均值的差距用減法，不需要再除以班級人數。"
      ]);
    if (/共植|共.*幾|總.*幾|全班共/.test(t))
      return pickTail(q, ["每一組資料都要加總，漏掉一組就會得到偏小的總量。"]);
    if (/週一|週二|週三|週四|週五/.test(t) && /差|多|少/.test(t))
      return pickTail(q, ["只能拿題幹指定的兩個時點相減，不能換成其他日期。"]);
    if (/女生|男生|男.*女/.test(t))
      return pickTail(q, ["兩性人數相減時以大減小，單位仍為人。"]);
    if (/平均每月|月平均|每個月/.test(t))
      return pickTail(q, ["須先把各期資料全部相加，再除以期數個數。"]);
    if (/百分之幾|占.*%|占比/.test(t))
      return pickTail(q, ["占比的分母必須是全部類別的總和，不能只用部分資料。"]);
    if (/全距|最高.*最低/.test(t))
      return pickTail(q, ["先找最大與最小，再相減得全距。"]);
    if (/成長.*百分之|比.*成長/.test(t))
      return pickTail(q, ["成長率要以基準年數值當分母，不能用成長後的數字。"]);
    if (/增加率|比.*多.*%/.test(t))
      return pickTail(q, ["增加率要清楚基準量，再用增加量除以基準。"]);
    if (/C品比A、B平均|比A、B平均/.test(t))
      return pickTail(q, ["須先算兩類平均，再用第三類減去這個平均。"]);
  }

  if (skill === "frequency-table") {
    if (/總人數|總.*多少/.test(t))
      return pickTail(q, ["各組次數都要相加，漏組就會少算。"]);
    if (/最多|哪一組/.test(t))
      return pickTail(q, ["要比較各組次數大小，不是看區間寬窄。"]);
    if (/以上|以下|至少|或以上/.test(t))
      return pickTail(q, ["須依邊界用語決定要加哪些組別。"]);
    if (/百分之幾|占/.test(t))
      return pickTail(q, ["占比分子是該類次數，分母是全部次數之和。"]);
    if (/比.*多幾人|相差/.test(t))
      return pickTail(q, ["兩組次數直接相減，不用再加總或平均。"]);
  }

  if (skill === "bar-chart-text") {
    if (/總.*幾|共.*幾/.test(t))
      return pickTail(q, ["各類人數或件數都要加總。"]);
    if (/最多|最少|相差|差幾/.test(t))
      return pickTail(q, ["先找最大與最小兩類，再相減。"]);
    if (/比.*多|比.*少|成長/.test(t))
      return pickTail(q, ["鎖定題幹指定的兩類或兩期再相減。"]);
    if (/最高|最低|哪類/.test(t))
      return pickTail(q, ["須把各類數值都比較過，不能只看排列順序。"]);
    if (/平均/.test(t))
      return pickTail(q, ["全部資料加總後再除以個數。"]);
    if (/不到|超過|是否/.test(t))
      return pickTail(q, ["文字結論要配合實際計算出的平均或總量。"]);
  }

  if (skill === "line-chart-text") {
    if (/增幅|增加.*最大|相鄰/.test(t))
      return pickTail(q, ["須逐段算相鄰差，下降段不能當增幅最大。"]);
    if (/平均|均值/.test(t))
      return pickTail(q, ["各時點全部加總後除以時點個數。"]);
    if (/全距|相差/.test(t))
      return pickTail(q, ["先找最高與最低時點再相減。"]);
    if (/比.*多|比.*少|比.*高|比.*低|增|減|升降/.test(t))
      return pickTail(q, ["用後期減前期看正負，並鎖定指定月份。"]);
    if (/總.*幾|共.*分鐘|總量/.test(t))
      return pickTail(q, ["各時點數值都要加總，不能漏掉任一天。"]);
    if (/合理|持續|趨勢/.test(t))
      return pickTail(q, ["要看各段升降，不能只看起點與終點。"]);
  }

  if (skill === "pie-chart-percent") {
    if (/百分點|多多少|少多少/.test(t))
      return pickTail(q, ["兩部分占比直接相減得百分點差，不是把占比相加。"]);
    if (/多少人|幾人|幾票/.test(t))
      return pickTail(q, ["用總人數或總票數乘該類占比換算。"]);
    if (/百分之幾|占.*%/.test(t) && !/百分點/.test(t))
      return pickTail(q, ["相關部分占比相加或單獨讀取，須對準類別。"]);
    if (/總.*幾|全部/.test(t))
      return pickTail(q, ["已知部分占比與人數時，總數等於部分除以占比。"]);
    if (/合理|超過.*成|過半/.test(t))
      return pickTail(q, ["文字用語要對照百分比，不能超過實際比例。"]);
    if (/增加率|基準/.test(t))
      return pickTail(q, ["增加率基準要清楚，百分點差不能直接當增加率。"]);
  }

  if (skill === "mean-basic") {
    if (/原幾人|原.*人|加入後/.test(t))
      return pickTail(q, ["用平均列方程，把加入前後總分寫成等式。"]);
    if (/去掉|刪去|最低|最高.*去掉/.test(t))
      return pickTail(q, ["去掉極值後要重算剩餘資料的總和與個數。"]);
    if (/加入.*後.*平均|新平均/.test(t))
      return pickTail(q, ["加入新資料後總和與個數都要更新再除。"]);
    if (/男.*女|分組|兩班/.test(t))
      return pickTail(q, ["分組平均要用各組總分相加再除以總人數。"]);
    if (/總和|總分|總額/.test(t))
      return pickTail(q, ["總量等於平均乘個數，不能把平均當總和。"]);
    if (/缺.*數|未知|原.*數/.test(t))
      return pickTail(q, ["先用平均乘個數得總和，再減已知各數。"]);
    if (/平均.*多少|約多少/.test(t))
      return pickTail(q, ["全部資料加總後除以個數，不能挑部分估算。"]);
  }

  if (skill === "median-basic") {
    if (/相同|相等/.test(t))
      return pickTail(q, ["這組資料可計算比較平均與中位，結果視資料而定。"]);
    if (/加入|變動|更新/.test(t))
      return pickTail(q, ["資料變動後要重新排序再找中位。"]);
    if (/報告|代表|薪資|極端/.test(t))
      return pickTail(q, ["有極端值時中位較能描述多數人的水準。"]);
    return pickTail(q, ["中位數須先排序再取中間位置。"]);
  }

  if (skill === "mode-range-basic") {
    if (/眾數|無眾數/.test(t))
      return pickTail(q, ["須數各數出現次數，全部不同時可能沒有眾數。"]);
    if (/全距/.test(t))
      return pickTail(q, ["全距是最大值減最小值，不能與平均數混淆。"]);
    return pickTail(q, ["先找最大最小或出現次數，再依題意作答。"]);
  }

  if (skill === "weighted-average-basic") {
    if (/混合|花生|杏仁|堅果/.test(t))
      return pickTail(q, ["混合平均用總價除以總重量，不能對單價直接平均。"]);
    if (/分組|兩班|男.*女|件數/.test(t))
      return pickTail(q, ["不同件數或人數的組別要用總額除以總量。"]);
    if (/權重|占比|成績.*%/.test(t))
      return pickTail(q, ["各項分數乘權重或占比後相加，再除以權重總和。"]);
    if (/反推|未知|缺/.test(t))
      return pickTail(q, ["加權總和減已知加權部分可得未知項。"]);
    return pickTail(q, ["加權平均須用總和除以權重或總量。"]);
  }

  if (skill === "statistics-literacy-context") {
    if (/一般水準|代表/.test(t))
      return pickTail(q, ["有極端值時中位較適合描述多數人的水準。"]);
    if (/樣本|調查|支持率/.test(t))
      return pickTail(q, ["樣本太小時不宜過度推論或立刻做決策。"]);
    if (/評論|可靠|可信/.test(t))
      return pickTail(q, ["樣本較大時平均或評價通常較穩定。"]);
    if (/偏好|時段|類別/.test(t))
      return pickTail(q, ["類別資料用眾數找最多偏好，平均不適用。"]);
  }

  return pickTail(q, ["答案須直接由題幹數字依統計量定義計算。"]);
}

function fixExplanation(q) {
  if (FULL[q.questionId]) return FULL[q.questionId];
  const hadFiller = R3_STRIP.some(p => q.explanation.includes(p));
  let e = stripR3(q.explanation);
  e = dedupe(e);
  if (hadFiller || countZh(e) < 45) {
    const tail = craftTail(q);
    if (!e.endsWith("。")) e += "。";
    if (!e.includes(tail.slice(0, 10))) e += tail;
    e = dedupe(stripR3(e));
  }
  let guard = 0;
  while (countZh(e) < 45 && guard++ < 5) {
    const extras = ["須依題意選對統計量再代入已列數字。"];
    let added = false;
    for (const extra of extras) {
      if (tailOk(q, extra) && !e.includes(extra.slice(0, 8))) {
        e += extra;
        added = true;
        break;
      }
    }
    if (!added) e += "。";
  }
  return e;
}

function writePart(file, partName, items, lectures) {
  fs.writeFileSync(
    file,
    `export const ${partName} = ${JSON.stringify(items, null, 2)};\n\nexport const ${partName.replace("PART", "LECTURES")} = ${JSON.stringify(lectures, null, 2)};\n`,
    "utf8"
  );
}

const batches = [
  ["s001-s003.mjs", "U09_PART_S001_S003", "U09_LECTURES_S001_S003"],
  ["s004-s006.mjs", "U09_PART_S004_S006", "U09_LECTURES_S004_S006"],
  ["s007-s009.mjs", "U09_PART_S007_S009", "U09_LECTURES_S007_S009"],
  ["s010-s012.mjs", "U09_PART_S010_S012", "U09_LECTURES_S010_S012"]
];

for (const [fn, partName, lecName] of batches) {
  const mod = await import(pathToFileURL(path.join(partsDir, fn)).href);
  const items = mod[partName].map(q => ({ ...q, explanation: fixExplanation(q) }));
  writePart(path.join(partsDir, fn), partName, items, mod[lecName]);
}

console.log("fix-u09-r3: parts updated");
