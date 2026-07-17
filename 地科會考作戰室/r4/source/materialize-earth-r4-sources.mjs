import assert from "node:assert/strict";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { EARTH_SCIENCE_SKILL_PLAN } from "../../../tools/cap8-r4/authority/skill-plans/earth-science.mjs";
import { EARTH_R4_FAMILY_CONTENT } from "./earth-r4-catalog.mjs";

const HERE = path.dirname(fileURLToPath(import.meta.url));
const GRAPH = path.resolve(HERE, "../../../tools/cap8-r4/authority/frozen-authority-graph.json");
const OUTPUT = path.join(HERE, "units");
const DIFFICULTIES = [
  "foundation", "foundation", "foundation",
  "standard", "standard", "standard", "standard",
  "advanced", "advanced", "advanced",
  "transfer", "transfer",
];
const PROCESSES = [
  ["recognize-supported-claim"],
  ["distinguish-concept-boundary"],
  ["match-evidence-to-explanation"],
  ["apply-observation-rule"],
  ["select-investigation-method"],
  ["evaluate-model-limit"],
  ["compare-source-reliability"],
  ["order-reasoning-steps"],
  ["apply-to-local-scenario"],
  ["interpret-structured-data"],
  ["diagnose-misconception"],
  ["transfer-evidence-chain"],
];
const REPRESENTATIONS = [
  "concept-statement", "comparison", "evidence-claim", "observation-scenario",
  "investigation-plan", "model-evaluation", "source-evaluation", "procedure",
  "local-context", "data-table", "error-diagnosis", "transfer-scenario",
];
const SKILL_FOCUS_OVERRIDES = Object.freeze({
  EARTH_R4_S002: "太陽輻射是地表系統主要能量來源，能驅動大氣與水循環，最後多以紅外線向外傳遞",
  EARTH_R4_S006: "比較證據來源時要核對資料出處、觀測方法、時間範圍與不確定性，不能只看是否符合預期",
  EARTH_R4_S007: "地球系統模型能凸顯重要關係，但會省略次要細節，因此只能在設定的範圍內解釋現象",
  EARTH_R4_S008: "檢核媒體中的地球科學主張時，要追查原始資料、比較替代解釋，並確認結論沒有超出證據",
  EARTH_R4_S012: "解理是礦物沿晶體構造弱面規則裂開，斷口則是不沿解理面形成的不規則破裂",
  EARTH_R4_S013: "磁性與稀酸反應可補充礦物鑑定，但仍須和條痕、硬度或解理等性質交叉比對",
  EARTH_R4_S016: "礦物鑑定紀錄要保留樣本、方法與各項結果，並說明雜質、風化及單一測試的限制",
  EARTH_R4_S018: "岩漿冷卻較慢時晶體通常較大，冷卻較快時晶粒通常較細或來不及形成明顯晶體",
  EARTH_R4_S019: "層理、圓磨顆粒或化石是沉積岩常見線索，但仍要綜合組成與其他構造判讀",
  EARTH_R4_S021: "比較岩石時要分開記錄礦物組成、晶粒大小與排列等特徵，不能把岩名當成單一性質",
  EARTH_R4_S022: "岩石的硬度、耐磨、劈裂與外觀等性質會影響建材或日常用途，選用時也要考慮加工與安全",
  EARTH_R4_S026: "岩石風化成碎屑後可被搬運、沉積，再經壓密與膠結形成沉積岩",
  EARTH_R4_S029: "岩石循環圖的每支箭頭都應標示冷卻、風化搬運沉積、成岩、變質或熔融等實際過程",
  EARTH_R4_S030: "同一岩石可能依後續環境先風化、變質或熔融，岩石循環沒有唯一固定路徑",
  EARTH_R4_S035: "P 波可在固體與液體中傳播，S 波只能在固體中傳播，且 P 波通常較早到達",
  EARTH_R4_S036: "同一地震中，測站的 P、S 波到時差通常隨震源距離增加而變大，可用來估計距離",
  EARTH_R4_S039: "板塊是岩石圈的一部分；岩石圈包含地殼與最上部地函，並在較具塑性的軟流圈上運動",
  EARTH_R4_S044: "聚合邊界可能發生海洋板塊隱沒或大陸碰撞，形成海溝、火山弧或造山帶",
  EARTH_R4_S049: "震源是地下破裂起點，震央是震源在地表的投影，震源深度是震源到地表的垂直距離",
  EARTH_R4_S052: "同一地震的波抵達較遠測站通常較晚，且 P、S 波到時差通常較大",
  EARTH_R4_S053: "等震度圖顯示各地搖晃差異，判讀時要同時考慮距離、震源深度與場址地質",
  EARTH_R4_S056: "地震前要固定物品並準備避難，搖晃時趴下、掩護、穩住，停止後依官方資訊疏散",
  EARTH_R4_S061: "熔岩、火山灰與火山氣體可直接造成危害，之後也可能引發火山泥流、水質或交通等環境影響",
  EARTH_R4_S063: "火山暫時休眠不代表永久停止活動，仍須依地震、形變與氣體等多項監測判讀",
  EARTH_R4_S065: "未翻轉的沉積地層通常下層較老、上層較新，但使用疊置原理前要先檢查是否翻轉或受擾動",
  EARTH_R4_S066: "斷層或岩脈若截切其他地層或構造，通常比被截切者晚形成",
  EARTH_R4_S072: "地球歷史跨越極長時間尺度，岩層與化石只能排列部分事件，不能用人類一生的時間感直接類比",
  EARTH_R4_S079: "內營力可造成抬升、褶皺或斷層，外營力再以風化、侵蝕、搬運與沉積共同改造地貌",
  EARTH_R4_S080: "地貌變化可由連續影像或長期量測追蹤，不能把多年累積的侵蝕或沉積誤判為瞬間完成",
  EARTH_R4_S081: "地表逕流大致沿坡面由高處往低處流，判讀時可用等高線找出最陡下降方向與集水區",
  EARTH_R4_S084: "水入滲後可補注地下水；地下水面以上為未飽和帶，能儲存並傳導水的地層稱為含水層",
  EARTH_R4_S085: "地表逕流可在降雨後較快改變，地下水補注與深層水位反應通常較慢",
  EARTH_R4_S087: "水資源方案要同時控制取用、保護補注與水質，並以節水、再生水等方式降低供需風險",
  EARTH_R4_S088: "一般情況下海水鹽度增加會使密度增加，溫度降低也常使密度增加，判讀時仍須核對兩個變因",
  EARTH_R4_S093: "波浪接近海岸時受水深與海岸方向影響，能量集中處較易侵蝕，沿岸流也會搬運並沉積砂粒",
  EARTH_R4_S100: "臭氧較集中於平流層，能吸收部分有害紫外線，但臭氧並不是大氣的主要成分",
  EARTH_R4_S103: "溫度計量氣溫、氣壓計量氣壓、濕度計量濕度，儀器必須放在合適位置並用正確單位讀值",
  EARTH_R4_S104: "風向表示風的來向，風速表示空氣移動快慢，雨量則記錄一定時間內累積的降水深度",
  EARTH_R4_S113: "白天陸地升溫較快，近地面海風常由海吹向陸；夜間陸地降溫較快，局部環流可反轉",
  EARTH_R4_S115: "氣壓與風向資料若符合等壓線梯度、半球偏轉與近地面摩擦，才支持所畫的環流模型",
  EARTH_R4_S117: "冷鋒以三角形、暖鋒以半圓表示移動方向，滯留鋒的三角與半圓位在鋒線兩側",
  EARTH_R4_S120: "地面天氣圖以等壓線連接同氣壓位置，閉合數值可判斷高低壓中心，疏密可比較氣壓梯度",
  EARTH_R4_S125: "颱風眼內可能短暫較平靜，最強風雨通常在眼牆附近，雨帶也可在離中心較遠處造成豪雨",
  EARTH_R4_S127: "東北季風主要影響臺灣秋冬，西南季風主要影響夏季，地形會使各地風雨不同",
  EARTH_R4_S128: "梅雨與滯留鋒相關，寒潮常在冬季冷氣團南下時發生，乾旱則與一段時間降水不足及用水需求有關",
  EARTH_R4_S133: "太陽高度角較大時，同量太陽能分布在較小地表面積，單位面積獲得的能量通常較多",
  EARTH_R4_S134: "水的比熱較陸地物質大，因此海洋升降溫較慢，沿海地區的溫度變化通常較受調節",
  EARTH_R4_S135: "臺灣區域降水受季風、迎背風坡與地形抬升影響，必須比較相同期間的觀測資料",
  EARTH_R4_S140: "地震搖晃是直接危害，山崩、土壤液化、海嘯或火災等則可能是地震引發的次生災害",
  EARTH_R4_S144: "地球自轉是繞自身轉軸，地球公轉是繞太陽運行，月球公轉則是繞地球運行",
  EARTH_R4_S148: "自轉是天體繞自身轉軸，公轉是天體沿軌道繞另一個天體運行，兩者不可混為同一運動",
  EARTH_R4_S152: "同一日期且緯度相近時，位置較東的地區通常較早因地球自轉進入日照而見到日出",
  EARTH_R4_S153: "地軸傾斜配合公轉使同一地點的白晝長度隨季節改變，南北半球的季節變化相反",
  EARTH_R4_S161: "日食發生時月球位於太陽與地球之間，且三者要接近成一直線",
  EARTH_R4_S162: "月食發生時地球位於太陽與月球之間，月球進入地球影子",
  EARTH_R4_S163: "潮汐來自日月引潮力與地球自轉造成的週期性海面升降，各地實際時刻與潮差會受海岸地形影響",
  EARTH_R4_S165: "太陽占太陽系絕大部分質量並提供主要光與熱，是行星等天體繞行的中心",
  EARTH_R4_S166: "行星共同繞太陽公轉，並有足夠質量使自身接近球形，但軌道與物理性質各不相同",
  EARTH_R4_S167: "類地行星主要由岩石與金屬組成且體積較小，但大氣、表面溫度與是否有液態水等環境並不相同",
  EARTH_R4_S177: "恆星由星際物質形成並進入主序階段，離開主序後的演化與最終狀態主要取決於初始質量",
  EARTH_R4_S182: "螺旋、橢圓與不規則是常見星系外形分類，但影像投影不能單獨決定星系全部性質",
  EARTH_R4_S190: "星圖要配合緯度、日期、時間與方位使用，觀測暗天體還要避開雲層與光害",
  EARTH_R4_S192: "望遠鏡與新波段儀器能提供肉眼看不到的細節與訊息，使天文模型隨新證據修正",
  EARTH_R4_S193: "人造衛星由人類製造並發射入軌，自然衛星則是自然形成並繞行星或矮行星運動",
  EARTH_R4_S195: "衛星遙測可重複觀測廣大範圍，地面觀測可提供局部細節與校正，兩者適合互相驗證",
  EARTH_R4_S199: "查核太空新聞時要確認資料來源、發布與觀測日期、使用儀器、原始證據及不確定性",
  EARTH_R4_S201: "碳會經光合作用、呼吸、分解、海氣交換、風化、沉積與燃燒等過程在大氣、海洋、生物和岩石圈間流動",
  EARTH_R4_S204: "升溫可透過海水熱膨脹、陸冰融化與水循環改變，連鎖影響海平面及部分極端降水風險",
  EARTH_R4_S205: "減緩著重降低溫室氣體排放或增加移除，調適則著重降低已發生或預期氣候衝擊",
  EARTH_R4_S208: "面對地震、颱風、洪水或山崩要依官方警報與現地危害採取掩護、疏散或避開危險區等行動",
  EARTH_R4_S211: "永續資源使用通常優先減量與再利用，再處理回收；綠能可降低對化石燃料的依賴但仍有環境取捨",
  EARTH_R4_S214: "整合地圖、剖面、衛星圖與時間序列前，要先對齊位置、時間、尺度、解析度與單位",
  EARTH_R4_S218: "模型預測與觀測有偏差時，要同時檢查量測誤差、解析度、初始條件與模型遺漏的過程",
  EARTH_R4_S220: "探究結果要用標題、圖例、單位、文字解釋與資料來源完整呈現，並標示限制與不確定性",
});

function number(value) {
  return String(value).padStart(3, "0");
}

function topicText(skill) {
  return skill.title.replace(/^(?:辨認|追蹤|說明|區分|比較|評估|使用|辨識|選擇|記錄|連結|判斷|解釋|避免|閱讀|提出|判讀|整合|讀取|排除|排列|考量|分析|查核|結合|規劃|依|以|由|用|從|把)+/u, "");
}

function rotateCandidates(candidates, answerIndex) {
  const [answer, ...distractors] = candidates;
  const result = [...distractors];
  result.splice(answerIndex, 0, answer);
  return result;
}

function reviewEvidence(answer, profile, context, needsCorrection = false) {
  if (needsCorrection) return [
    `「${answer}」正是需要修正的敘述；它與查核依據不符：${shortClause(profile.evidence)}。`,
    `其餘三項都有相應觀測支持；作答時還要注意資料限制：${shortClause(profile.boundary)}。`,
  ];
  return [
    `逐項核對「${context}」的條件後，「${answer}」符合題目資料；查核依據為：${shortClause(profile.evidence)}。`,
    `其餘三項至少違反一項觀測或資料限制；本題採用的限制是「${shortClause(profile.boundary)}」。`,
  ];
}

function candidate(text, valid, reason) {
  return { text, valid, reason };
}

function bigrams(value) {
  const normalized = value.replace(/[「」、，；：。與及的之由以把用從在]/gu, "");
  return Array.from({ length: Math.max(0, normalized.length - 1) }, (_, index) => normalized.slice(index, index + 2));
}

function skillFocus(skill, profile) {
  if (SKILL_FOCUS_OVERRIDES[skill.id]) return SKILL_FOCUS_OVERRIDES[skill.id];
  const wanted = new Set(bigrams(skill.title));
  const clauses = [profile.core, profile.evidence, profile.method, profile.boundary, ...profile.claims]
    .flatMap((value) => value.split(/[；。]/u))
    .map((value) => value.trim())
    .filter(Boolean);
  return clauses
    .map((value, index) => ({ value, index, score: bigrams(value).filter((item) => wanted.has(item)).length }))
    .sort((a, b) => b.score - a.score || a.index - b.index)[0].value;
}

function shortClause(value) {
  return value.split(/[，；。]/u)[0].trim();
}

function contextualTrap(profile, index, context) {
  const trap = profile.traps[index % profile.traps.length];
  return [
    `僅憑「${context}」就斷定${trap}`,
    `未核對「${context}」的觀測時間與範圍便認定${trap}`,
    `把「${context}」的一次局部觀察擴大為「${trap}」`,
    `忽略反例後宣稱${trap}`,
  ][index % 4];
}

function factCandidates(profile, focus, context, seed, topic) {
  return [
    candidate(focus, true, `「${focus}」可由${shortClause(profile.evidence)}查核。`),
    ...[0, 1, 2].map((offset) => {
      const trapIndex = seed + offset;
      const trap = profile.traps[trapIndex % profile.traps.length];
      const correction = profile.claims[trapIndex % profile.claims.length];
      const text = `判讀${topic}時，${contextualTrap(profile, trapIndex, context)}`;
      return candidate(text, false, `「${trap}」與「${context}」所需的查核依據不符；可對照「${correction}」。`);
    }),
  ];
}

function tableCandidates(profile, seed, topic, context) {
  const { columns, rows } = profile.table;
  const rowIndex = seed % rows.length;
  const row = rows[rowIndex];
  const valueColumn = 1 + (seed % (columns.length - 1));
  const lead = `在「${context}」的${topic}資料中，`;
  const correct = `${lead}當${columns[0]}為${row[0]}時，${columns[valueColumn]}為${row[valueColumn]}。`;
  const choices = [candidate(correct, true, `逐欄讀值可直接得到「${columns[valueColumn]}為${row[valueColumn]}」。`)];
  const alternatives = [...new Set(rows.map((value) => value[valueColumn]).filter((value) => value !== row[valueColumn]))];
  for (const [index, value] of alternatives.slice(0, 3).entries()) {
    const text = `${lead}當${columns[0]}為${row[0]}時，${columns[valueColumn]}為${value}。`;
    choices.push(candidate(text, false, `「${value}」來自其他資料列；本列記錄的是「${row[valueColumn]}」。`));
  }
  if (choices.length < 4) {
    const text = `${lead}附表找不到${columns[0]}為${row[0]}的紀錄。`;
    choices.push(candidate(text, false, `表中第${rowIndex + 1}列已列出「${row[0]}」，不能說沒有記錄。`));
  }
  if (choices.length < 4) {
    const text = `${lead}有${columns[0]}為${row[0]}的紀錄，但沒有${columns[valueColumn]}欄。`;
    choices.push(candidate(text, false, `欄名已明列「${columns[valueColumn]}」，可直接查到數值。`));
  }
  if (choices.length < 4) {
    const text = `${lead}第${rowIndex + 1}列不是${columns[0]}為${row[0]}的資料。`;
    choices.push(candidate(text, false, `第${rowIndex + 1}列的首欄正是「${row[0]}」。`));
  }
  return choices;
}

function misconceptionCandidates(profile, seed, topic, context, focus) {
  const trap = profile.traps[seed % profile.traps.length];
  return [
    candidate(`解釋${topic}時宣稱「${trap}」`, true, `「${trap}」與資料限制衝突：${shortClause(profile.boundary)}。`),
    candidate(focus, false, `「${focus}」是本技能可由證據支持的判讀。`),
    candidate(`判讀${topic}時仍要依「${shortClause(profile.evidence)}」檢查證據`, false, `核對證據是「${context}」形成結論的必要步驟。`),
    candidate(`「${context}」的結論須註明限制：${shortClause(profile.boundary)}`, false, "交代適用範圍可避免把局部觀察過度延伸。"),
  ];
}

function authoredCandidates(skill, profile, questionIndex, focus, context, skillNumber) {
  const topic = topicText(skill);
  const claim = focus;
  const trap = (offset) => contextualTrap(profile, skillNumber + questionIndex + offset, context);
  if (questionIndex === 0) return factCandidates(profile, focus, context, skillNumber, topic);
  if (questionIndex === 1) return [
    candidate(`具日期、位置與單位的${profile.table.columns.join("、")}紀錄`, true, `這組資料能直接查核${topic}，且保留量測脈絡。`),
    candidate(`只留下支持「${profile.traps[skillNumber % 4]}」的紀錄並刪除反例`, false, `只挑符合預期的紀錄會造成確認偏誤，不能查核${topic}。`),
    candidate(`研究${topic}時用未標日期與位置的截圖，再以印象補足缺值`, false, `缺少日期、位置與原始讀值，無法確認資料是否適用於${context}。`),
    candidate(`用一次「${context}」概括所有時地且不記量測方法`, false, `單一情境不能取代不同時間、位置的比較資料。`),
  ];
  if (questionIndex === 2) return factCandidates(profile, claim, context, skillNumber + 1, topic);
  if (questionIndex === 3) return [
    candidate(focus, true, `結論使用情境中的可觀測資訊，且沒有超出${profile.boundary}`),
    ...[0, 1, 2].map((offset) => {
      const text = `判讀${topic}時，${trap(offset)}`;
      return candidate(text, false, `「${text}」沒有通過${shortClause(profile.evidence)}的檢查。`);
    }),
  ];
  if (questionIndex === 4) return [
    candidate(shortClause(profile.method), true, `此程序先處理變因和證據，再對${context}形成結論。`),
    candidate(`探討${topic}時先寫答案，再挑一筆相符資料`, false, `先定答案再選「${context}」資料會造成確認偏誤。`),
    candidate(`探討${topic}時只看${profile.table.columns[0]}顏色，不讀單位`, false, `顏色不能取代${profile.table.columns.join("、")}的實際讀值。`),
    candidate(`用「${context}」的一次觀察代表${topic}在所有時間與地點的情形`, false, `「${context}」的一次觀察不足以代表所有條件。`),
  ];
  if (questionIndex === 5) return [
    candidate(`分析${topic}時須註明：${shortClause(profile.boundary)}`, true, `這項限制可防止把${context}的資料過度延伸。`),
    candidate(`判斷${topic}時，資料列多便可忽略不確定性`, false, `資料列數不會消除「${context}」的量測誤差或取樣限制。`),
    candidate(`判讀${topic}時認為圖形較大就代表實際尺度較大`, false, `示意圖未必按比例，仍需查看「${context}」的尺度說明。`),
    candidate(`「${context}」的${topic}結論符合預期便可省略資料來源`, false, `可追溯來源是「${context}」科學判讀的必要條件。`),
  ];
  if (questionIndex === 6) return [
    candidate(`查核${topic}時採用有日期、位置與單位的${shortClause(profile.evidence)}`, true, `資料具備來源與量測條件，可重現${context}的判讀。`),
    candidate(`查核${topic}只需一張來源不明的網路圖片`, false, `來源、時間與尺度不明，不能驗證「${context}」的條件。`),
    candidate(`刪除與${focus}不一致的資料後再判讀`, false, `刪除反例會扭曲證據分布。`),
    candidate(`以個人印象取代${profile.table.columns.join("、")}紀錄`, false, `主觀印象不能取代可檢核觀測。`),
  ];
  if (questionIndex === 7) return [
    candidate(`判讀${topic}時先${shortClause(profile.method)}，再檢查反例`, true, `順序保留從觀測、比較到結論的可檢核鏈。`),
    candidate(`先公布${topic}結論，再決定量哪個變因`, false, `在「${context}」前先公布結論會影響後續選擇資料。`),
    candidate(`解讀「${context}」時把${profile.table.columns[0]}與${profile.table.columns.at(-1)}直接相減`, false, `不同變因或單位不能直接運算。`),
    candidate(`判斷${topic}時只保留「${context}」最符合預期的一次觀察`, false, `忽略「${context}」的變異與反例會高估結論強度。`),
  ];
  if (questionIndex === 8) return [
    candidate(claim, true, `「${claim}」屬於本單元可由證據支持的關係。`),
    candidate(`判讀${topic}時只抄地名，不讀變因`, false, `地名沒有指出${profile.table.columns.join("、")}之間的關係。`),
    candidate(`用「${context}」的一筆局部資料推論各地${topic}都相同`, false, `結論超出「${context}」資料的空間範圍。`),
    candidate(`先選好${topic}答案，再刪除「${context}」中不一致的觀測`, false, `選擇性刪除「${context}」資料會破壞證據鏈。`),
  ];
  if (questionIndex === 9) return tableCandidates(profile, skillNumber, topic, context);
  if (questionIndex === 10) return misconceptionCandidates(profile, skillNumber, topic, context, focus);
  return [
    candidate(`把判讀移到「${profile.contexts[2]}」時，仍先${shortClause(profile.method)}`, true, `新情境保留相同變因、證據與適用範圍。`),
    candidate(`改看「${profile.contexts[2]}」後，只採用支持原想法的一筆紀錄`, false, `換情境仍須比較完整資料與替代解釋。`),
    candidate(`改看「${profile.contexts[2]}」後，省略所有單位`, false, `跨情境比較更需要一致單位。`),
    candidate(`只寫${topic}的概念名稱，不記錄「${profile.contexts[2]}」的觀測`, false, `概念名稱不能取代實際資料。`),
  ];
}

function questionStem(skill, profile, index, context) {
  const topic = topicText(skill);
  return [
    `檢查「${context}」時，關於${topic}的哪一項判讀較合理？`,
    `若要查核${topic}，下列哪一組資料最有用？`,
    `整理「${context}」的筆記時，哪一項敘述可以保留？`,
    `分析「${context}」的資料時，哪一項${topic}判讀原則較適當？`,
    `小組要探討${topic}，哪一項規劃最能避免確認偏誤？`,
    `以模型分析${topic}時，哪一項限制必須註明？`,
    `研究「${context}」中的${topic}時，哪一種資料來源較可靠？`,
    `處理${topic}的資料時，哪一個推理順序較完整？`,
    `把觀測結果用於「${context}」中的${topic}時，哪一項解釋較合理？`,
    `依附表判讀${topic}，哪一項讀值正確？`,
    `下列哪一種說法用來解釋${topic}時需要修正？`,
    `把${topic}的判準移到另一個情境時，哪一項作法較適當？`,
  ][index];
}

function makeQuestion(skill, profile, skillNumber, index, stimulusId = null) {
  const focus = skillFocus(skill, profile);
  const context = profile.contexts[(skillNumber + (stimulusId === null ? index : 0)) % profile.contexts.length];
  const raw = stimulusId === null
    ? authoredCandidates(skill, profile, index, focus, context, skillNumber)
    : stimulusCandidates(skill, profile, index, focus, context, skillNumber);
  const authored = raw;
  assert.equal(authored.filter((value) => value.valid).length, 1);
  const answerIndex = (skillNumber + index) % 4;
  const options = rotateCandidates(authored, answerIndex);
  const answer = options[answerIndex].text;
  return {
    id: stimulusId === null
      ? `EARTH_R4_Q_${number(skillNumber)}_${String(index + 1).padStart(2, "0")}`
      : `EARTH_R4_SQ_${number(skillNumber)}_${String(index + 1).padStart(2, "0")}`,
    skillId: skill.id,
    stimulusId,
    stem: stimulusId === null
      ? questionStem(skill, profile, index, context)
      : `閱讀「${context}」的資料後，為了釐清${topicText(skill)}，${["哪一項讀值正確？", "哪一項限制最需要寫入報告？", "哪一項後續檢驗最適當？"][index]}`,
    options: options.map((value) => value.text),
    answerIndex,
    reasons: options.map((value) => value.reason),
    reviews: reviewEvidence(answer, profile, context),
    difficulty: stimulusId === null ? DIFFICULTIES[index] : ["standard", "advanced", "transfer"][index],
    cognitiveProcess: stimulusId === null ? PROCESSES[index] : [["derive-from-shared-data"], ["evaluate-shared-data-limit"], ["design-follow-up-check"]][index],
    representationType: stimulusId === null ? REPRESENTATIONS[index] : "shared-data-table",
    misconceptionTargets: [profile.traps[index % profile.traps.length]],
    assets: [...profile.assets],
  };
}

function stimulusCandidates(skill, profile, index, focus, context, skillNumber) {
  const topic = topicText(skill);
  if (index === 0) return tableCandidates(profile, skillNumber + 1, topic, context);
  if (index === 1) return [
    candidate(`分析${topic}時，報告需註明：${shortClause(profile.boundary)}`, true, `這項限制界定「${context}」的資料可支持到哪裡。`),
    candidate(`分析${topic}時，有${profile.table.rows.length}列資料就沒有不確定性`, false, `資料列數不會消除量測與取樣不確定性。`),
    candidate(`電腦繪製的「${context}」表格可保證來源正確`, false, `製圖工具不會自動保證「${context}」的來源可靠。`),
    candidate(`${topic}結果符合預期便不必檢查反例`, false, `符合「${focus}」仍須檢查替代解釋與反例。`),
  ];
  return [
    candidate(`針對「${context}」再${shortClause(profile.method)}`, true, `後續檢驗保留${topic}的變因、資料與結論間的可重現關係。`),
    candidate(`同時換掉${topic}的全部變因後只測一次`, false, `同時改變多個變因且無重複，不能判斷「${context}」的原因。`),
    candidate(`刪除「${context}」中不合預期的資料後重畫圖`, false, `未說明便刪除資料會造成偏誤。`),
    candidate(`只詢問同意「${focus}」的人`, false, `意見調查不是獨立觀測或公平檢驗。`),
  ];
}

function lecture(skill, profile, skillNumber) {
  const id = `EARTH_R4_L_S${number(skillNumber)}`;
  const focus = skillFocus(skill, profile);
  const topic = topicText(skill);
  const foundation = profile.core.includes(focus)
    ? profile.core
    : `${profile.core} 本節的判讀重點是「${focus}」。`;
  return {
    id,
    skillId: skill.id,
    objectives: [
      `能以自己的話說明「${focus}」，並指出至少一項可檢核證據。`,
      `能從${profile.table.columns.join("、")}判讀${topic}，同時說明結論限制。`,
    ],
    sections: [
      { id: `${id}_SEC_01`, title: "零基礎起點", content: `先掌握可觀察的對象：${foundation} 遇到新情境時，先圈出時間、位置、變因與單位。` },
      { id: `${id}_SEC_02`, title: "概念與證據", content: `${profile.evidence} 判讀${topic}時，必須讓觀測、模型與結論彼此對得上。` },
      { id: `${id}_SEC_03`, title: "可重現的判讀程序", content: `處理${topic}時，${profile.method} 每一步都要能回答「我用了哪一筆資料」以及「若條件改變，結論是否仍成立」。` },
      { id: `${id}_SEC_04`, title: "邊界、反例與不確定性", content: `解釋${topic}時要注意：${profile.boundary} 若證據只能支持可能性，就使用「支持」或「較符合」，不要寫成「證明必然」。` },
      { id: `${id}_SEC_05`, title: "圖表與無障礙讀法", content: `判讀${topic}圖表時，先讀標題、圖例、方向、尺度、時間、座標軸與單位，再以文字重述趨勢。這一組資料的關鍵欄位是${profile.table.columns.join("、")}。` },
    ],
    workedExamples: profile.contexts.map((context, index) => ({
      id: `${id}_EX_${String(index + 1).padStart(2, "0")}`,
      prompt: `${context}。如何用觀測資料判斷${topic}？`,
      steps: [
        `判讀${topic}時，先找出「${profile.table.columns[index % profile.table.columns.length]}」的實際紀錄，確認時間、位置與單位。`,
        `針對「${context}」判讀${topic}時，${profile.method}`,
        `用「${focus}」檢查「${profile.traps[index % profile.traps.length]}」是否符合資料。`,
      ],
      answer: `在「${context}」中，應以「${focus}」為判讀原則，並核對${profile.table.columns[index % profile.table.columns.length]}。`,
      why: `「${context}」的資料可用來檢查${topic}；同時仍須注意：${profile.boundary}`,
    })),
    misconceptions: profile.traps.map((belief, index) => ({
      belief: `談到${topic}時，${belief}`,
      whyWrong: `以「${belief}」解釋${topic}，沒有通過${shortClause(profile.evidence)}的檢查，而且忽略了${shortClause(profile.boundary)}。`,
      correction: `「${belief}」應改為以「${focus}」判讀；結論還要附上時間、位置與資料來源。`,
    })),
    checks: [
      { prompt: `診斷：要判斷${topic}，第一個要確認什麼？`, answer: `確認${topic}的觀測對象、時間、位置、變因與單位`, reason: `先確定${topic}資料的語意，才能選擇合適的比較方式。` },
      { prompt: `提取：用一句話說出「${focus}」的查核程序。`, answer: `判讀${topic}時，${profile.method}`, reason: `${topic}程序把觀測、比較與結論串成可重現證據鏈。` },
      { prompt: `練習：${profile.contexts[1]}時，哪個迷思要先排除？`, answer: `談到${topic}時，不可主張「${profile.traps[1]}」`, reason: `判讀${topic}時要注意：${profile.boundary}` },
      { prompt: `遷移：${profile.contexts[2]}時，如何保留科學不確定性？`, answer: `說明${topic}資料的支持程度、替代解釋與模型限制`, reason: `${topic}結論的強度不能超過證據。` },
    ],
    assets: [...profile.assets],
  };
}

function unitSource(family, profile, skills, startNumber) {
  const lectures = [];
  const questions = [];
  const stimuli = [];
  const stimulusQuestions = [];
  skills.forEach((skill, offset) => {
    const skillNumber = startNumber + offset;
    const focus = skillFocus(skill, profile);
    const topic = topicText(skill);
    const stimulusId = `EARTH_R4_ST_${number(skillNumber)}`;
    lectures.push(lecture(skill, profile, skillNumber));
    for (let index = 0; index < 12; index += 1) questions.push(makeQuestion(skill, profile, skillNumber, index));
    stimuli.push({
      id: stimulusId,
      skillId: skill.id,
      type: profile.assets.length ? "accessible-figure-and-data" : "data-table-and-scenario",
      content: {
        title: `${profile.contexts[skillNumber % profile.contexts.length]}：${topic}觀測紀錄`,
        scenario: profile.contexts[skillNumber % profile.contexts.length],
        table: profile.table,
        readingGuide: "先讀欄位、單位、時間與資料範圍；圖形資訊均有下列資料表替代。",
        skillSpecificCriterion: `判讀重點為「${focus}」；結論不得超出資料的時間、位置與量測範圍。`,
      },
      accessibility: {
        textAlternative: `${profile.contexts[skillNumber % profile.contexts.length]}資料表，欄位為${profile.table.columns.join("、")}，共有${profile.table.rows.length}列。${profile.boundary}`,
        colorIndependent: true,
        printSafe: true,
      },
      assets: [...profile.assets],
    });
    for (let index = 0; index < 3; index += 1) stimulusQuestions.push(makeQuestion(skill, profile, skillNumber, index, stimulusId));
  });
  return { unitId: skills[0].unitId, familyKey: family.key, lectures, questions, stimuli, stimulusQuestions, assets: [] };
}

export async function materializeEarthR4Sources() {
  const graph = JSON.parse(await readFile(GRAPH, "utf8"));
  assert.equal(graph.status, "frozen-reviewed");
  const earthSkills = graph.skills.filter((skill) => skill.subject === "earth_science");
  assert.equal(earthSkills.length, 220);
  assert.equal(EARTH_SCIENCE_SKILL_PLAN.families.length, 30);
  await mkdir(OUTPUT, { recursive: true });
  const written = [];
  let startNumber = 1;
  for (const [index, family] of EARTH_SCIENCE_SKILL_PLAN.families.entries()) {
    const unitId = `EARTH_R4_U${String(index + 1).padStart(2, "0")}`;
    const profile = EARTH_R4_FAMILY_CONTENT[family.key];
    assert(profile, `${family.key}: missing reviewed content profile`);
    const skills = earthSkills.filter((skill) => skill.unitId === unitId);
    assert.equal(skills.length, family.skills.length, `${unitId}: skill-plan drift`);
    const source = unitSource(family, profile, skills, startNumber);
    const file = path.join(OUTPUT, `${unitId}.mjs`);
    await writeFile(file, `export const EARTH_SCIENCE_UNIT_SOURCE = Object.freeze(${JSON.stringify(source, null, 2)});\n`, "utf8");
    written.push({ unitId, skills: skills.length, questions: source.questions.length + source.stimulusQuestions.length });
    startNumber += skills.length;
  }
  assert.equal(startNumber, 221);
  return written;
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const written = await materializeEarthR4Sources();
  console.log(`materialize-earth-r4-sources: OK - ${written.length} static unit snapshots, ${written.reduce((sum, value) => sum + value.questions, 0)} questions`);
}
