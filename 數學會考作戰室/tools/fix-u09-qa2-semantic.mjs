#!/usr/bin/env node
/** U09-QA2: required explanations + semantic tail dedupe for R7_REWRITE. */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { countZh } from "./v2-quality.mjs";
import { findSemanticDuplicatePairs, splitExplanationSentences } from "./u09-semantic-audit.mjs";
import { R7_REWRITE as BASE } from "./fix-u09-r7-rewrites.mjs";

const toolsDir = path.dirname(fileURLToPath(import.meta.url));

const REQUIRED = {
  "u09-s002-v007":
    "21分鐘以上包含21−30與31−40兩組，14+8=22人。18漏加31−40的8人；26誤把11−20的9人算入；14只算21−30。因題目從21分鐘起算，應把21−30與31−40兩組次數合計；18與14都漏掉其中一組。",
  "u09-s002-v008":
    "有養寵物者為8+15+5=28人，全班共有12+8+15+5=40人，因此28÷40×100=70%。60是把分子誤算成24；65與55則使用了錯誤的分子或分母；沒養寵物12人不能算進分子，分母也必須是全班40人。",
  "u09-s002-v010":
    "數學15人、英文9人，15−9=6人。8是誤拿社會科7人計算；4不是15與9相減的結果；10則把比較題誤當成加總題；社會科7人與本題兩科比較無關。",
  "u09-s002-v011":
    "睡7小時或以上包含7小時12人、8小時10人及9小時以上3人，共12+10+3=25人。22漏加9小時以上的3人；30誤把6小時的8人算入；15只計入部分組別。",
  "u09-s003-v001":
    "A班40人、B班55人、C班35人，合計40+55+35=130人。120或125都漏算了部分班級；140則多加10人。求三班總數必須把A、B、C三個班級全部納入；漏算C班35人常得120或125。"
};

/** Post-dedupe hand fixes when tail removal drops below 45 zh or twin rules remain. */
const POST_DEDUPE = {
  "u09-s002-v006":
    "總次數18+12+8+7=45，蘋果18次，18÷45×100=40%。36是18÷50誤用錯誤分母50；45把總次數45當成百分比本身；50是18÷36之類亂除。算占比時分母要用全部45次，分子是蘋果18次。",
  "u09-s003-v002":
    "週一120件、週二95件，120−95=25件。15像110−95用了週三110這個錯誤數字；30像120−90；20則不是週一減週二。折線圖比較兩天只能拿週一120與週二95相減，不能混入週三110。",
  "u09-s003-v010":
    "紅茶60杯、奶茶55杯，60−55=5杯。10像60−50用了錯誤數字；15像55−40用了咖啡40；20則不是這兩類相減。這題只比較紅茶60與奶茶55兩類杯數差，咖啡40與本題無關。",
  "u09-s004-v001":
    "3月15度、1月10度，15−10=5度。3、2、4用了其他月份組合，不是3月減1月。2月8度未列入本題比較。折線圖比較兩時點時，要鎖定3月15度與1月10度再相減。",
  "u09-s004-v006":
    "最高95分、最低88分，95−88=7分。5、8、4都不是95與88相減。88是最低點不是最高點。5誤把相鄰分數相減。折線圖求分差時，先找最高95與最低88兩點再相減得7分。",
  "u09-s004-v009":
    "五天30+45+40+50+35=200分鐘。180漏加第4天50分鐘；210多加10分鐘；190少加10分鐘。180常因漏算第4天才少20分鐘。五天讀書分鐘都要列入，漏任一天總和就會少算。",
  "u09-s005-v002":
    "圓形圖文字直接讀出單車占35%。25是步行占比；30是公車占比；65則把35與30兩類相加。65把公車30%也加進單車。這題只問單車占比，直接讀35%即可。",
  "u09-s009-v003":
    "總價2×50+3×40=220元，總重5公斤，220÷5=44元/公斤。45是(50+40)÷2兩單價直接平均；46、42是220÷5算錯。45未把2公斤與3公斤重量納入。混合單價要用總價220除以總重5公斤。",
  "u09-s009-v004":
    "80×30%+90×50%+70×20%=24+45+14=83分。84、85是乘法或加總錯；82少加態度70×20%=14這一項。三項作業、段考、態度都要分別乘占比；84可能漏乘某項占比，85則把三項分數直接相加。",
  "u09-s009-v009":
    "85×20%+90×50%+80×30%=17+45+24=86分。85像只算平時85漏段考與期末；87、84是乘法加總錯。85若只算平時會少段考50%與期末30%兩項。平時、段考、期末三項都要乘各自占比再加總。"
};

function dedupeExplanation(id, text) {
  let sents = splitExplanationSentences(text.endsWith("。") ? text : `${text}。`);
  let changed = true;
  while (changed) {
    changed = false;
    for (let j = sents.length - 1; j >= 1; j--) {
      for (let i = 0; i < j; i++) {
        if (findSemanticDuplicatePairs(`${sents[i]}。${sents[j]}`, id).length) {
          sents.splice(j, 1);
          changed = true;
          break;
        }
      }
      if (changed) break;
    }
  }
  return `${sents.join("。")}。`.replace(/。+$/, "。");
}

const out = { ...BASE, ...REQUIRED };
const changed = [];

for (const id of Object.keys(out)) {
  if (REQUIRED[id]) {
    out[id] = REQUIRED[id];
  } else {
    const before = out[id];
    out[id] = dedupeExplanation(id, before);
    if (POST_DEDUPE[id]) out[id] = POST_DEDUPE[id];
    if (out[id] !== before) changed.push(id);
  }
  if (countZh(out[id]) < 45) throw new Error(`${id} too short: ${countZh(out[id])}`);
  const pairs = findSemanticDuplicatePairs(out[id], id);
  if (pairs.length) throw new Error(`${id} semantic dup: ${pairs[0].a} / ${pairs[0].b}`);
}

const lines = Object.entries(out)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([k, v]) => `  "${k}":\n    ${JSON.stringify(v)},`)
  .join("\n");

fs.writeFileSync(
  path.join(toolsDir, "fix-u09-r7-rewrites.mjs"),
  `/** U09-R7 final: ${Object.keys(out).length} question-specific explanations (no generic filler). */\nexport const R7_REWRITE = {\n${lines}\n};\n`,
  "utf8"
);
console.log("rewrites ok", Object.keys(out).length, "deduped", changed.length, changed.join(","));
