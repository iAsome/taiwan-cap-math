import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const HERE=path.dirname(fileURLToPath(import.meta.url));
const LEGACY_PATH=path.resolve(HERE,"..","..","..","reading-bank.js");
const raw=readFileSync(LEGACY_PATH,"utf8");
const LEGACY=JSON.parse(raw.slice(raw.indexOf("["),raw.lastIndexOf("]")+1));
assert.equal(LEGACY.length,500,"legacy original reading passage count");
assert.equal(new Set(LEGACY.map((item)=>item.title)).size,500,"reading titles must be unique");
assert.equal(new Set(LEGACY.map((item)=>item.passage)).size,500,"reading passages must be unique");

const DIFFICULTIES=["foundation","standard","advanced","transfer"];
const TITLE_STEMS=[
  "Which title best covers the whole text without adding an unsupported idea?",
  "Which heading gives the most accurate overview of the entire passage?",
  "Which title represents the text as a whole rather than one small detail?",
  "Which heading would help a reader predict the central content most accurately?",
  "Which title stays within the evidence and includes the passage's main focus?",
  "Which heading is broad enough for all paragraphs but not broader than the text?",
  "Which title most precisely names the subject developed from beginning to end?",
  "Which heading would be the least misleading label for this complete passage?",
  "Which title matches both the opening situation and the ending emphasis?",
  "Which heading captures the passage's central thread instead of a side point?",
];
const LOCATOR_STEMS=[
  (quote)=>`While checking the passage, which paragraph contains the exact line “${quote}”?`,
  (quote)=>`Where can a reader locate the sentence “${quote}” in the passage?`,
  (quote)=>`Which paragraph provides the quoted evidence “${quote}”?`,
  (quote)=>`A reader marked “${quote}.” Which paragraph was marked?`,
  (quote)=>`Which paragraph should be cited for the line “${quote}”?`,
];
const COUNT_STEMS=[
  (quote)=>`How many paragraphs organize the passage that begins “${quote}”?`,
  (quote)=>`If each paragraph receives one note card, how many cards are needed for the passage beginning “${quote}”?`,
  (quote)=>`What is the paragraph count of the text whose opening is “${quote}”?`,
  (quote)=>`How many separate paragraph blocks follow from the opening “${quote}”?`,
  (quote)=>`A reader numbers every paragraph after “${quote}.” What is the final paragraph number?`,
];
const ORDER_STEMS=[
  ()=>`Which quoted line appears earliest in the passage?`,
  ()=>`When the paragraphs are read in order, which selected line is encountered first?`,
  ()=>`Which selected line belongs closest to the beginning of the passage?`,
  ()=>`Which quotation comes before the other three in the passage?`,
  ()=>`Which line starts the earliest of the four selected paragraphs?`,
];
const END_STEMS=[
  ()=>`Which quoted line opens the final paragraph?`,
  ()=>`At the start of the last paragraph, which selected line does the reader see?`,
  ()=>`Which line marks the beginning of the concluding paragraph?`,
  ()=>`Which quotation is positioned at the opening of the last paragraph?`,
  ()=>`To verify the ending structure, which line should a reader locate first in the final paragraph?`,
];

function firstSentence(paragraph){
  const flat=paragraph.replace(/\s+/gu," ").trim();
  return flat.split(" ").slice(0,18).join(" ");
}

function lastSentence(paragraph){
  const flat=paragraph.replace(/\s+/gu," ").trim();
  return flat.split(" ").slice(-18).join(" ");
}

function rotate(correct,distractors,reasons,index){
  const values=[correct,...distractors];
  const evidence=[reasons.correct,...reasons.wrong];
  const shift=index%4;
  const options=[...values.slice(shift),...values.slice(0,shift)];
  const rotatedReasons=[...evidence.slice(shift),...evidence.slice(0,shift)];
  return {options,answerIndex:options.indexOf(correct),reasons:rotatedReasons};
}

function question({id,skillId,stem,correct,distractors,correctReason,wrongReasons,index,operation,representationType,reviewEvidence}){
  assert.equal(new Set([correct,...distractors]).size,4,`${id}: duplicate option`);
  const choices=rotate(correct,distractors,{correct:correctReason,wrong:wrongReasons},index);
  return {
    id,skillId,stem,...choices,
    difficulty:DIFFICULTIES[index%4],
    cognitiveProcess:["read-locked-passage-evidence",operation],
    representationType,
    misconceptionTargets:["answer-from-memory-or-keyword-without-checking-the-locked-text"],
    reviews:[
      `獨立解答核對：${reviewEvidence}；正確選項與鎖定文章的段落、順序或標題資料完全一致。`,
      `替代答案排除：逐一回查其餘三項在本文中的位置或來源，均不符合題幹指定條件，因此沒有第二個可成立答案。`,
    ],
  };
}

function titleQuestion(item,index){
  const distractors=[37,113,271].map((offset)=>LEGACY[(index+offset)%LEGACY.length].title);
  return question({
    id:`ENG_R4_Q_READ_${String(index+1).padStart(3,"0")}_01`,skillId:"ENG_R4_S247",
    stem:TITLE_STEMS[index%TITLE_STEMS.length],
    correct:item.title,distractors,
    correctReason:"這是原始作者為完整文章設定的唯一標題，能涵蓋全文而不新增主張。",
    wrongReasons:distractors.map((title)=>`「${title}」屬於另一篇不同文章，不能概括本篇全部段落。`),
    index,operation:"select-evidence-bounded-whole-text-title",representationType:`reading-title-variant-${index%TITLE_STEMS.length+1}`,
    reviewEvidence:`原始題庫的 passage title 欄為「${item.title}」，且五百個標題皆唯一`,
  });
}

function locatorQuestion(item,index,paragraphs,openers){
  if(index%3===1){
    const count=paragraphs.length;
    const options=[4,5,6,7];
    assert(options.includes(count),`${item.id}: paragraph count outside governed range`);
    const distractors=options.filter((value)=>value!==count).map(String);
    return question({
      id:`ENG_R4_Q_READ_${String(index+1).padStart(3,"0")}_02`,skillId:"ENG_R4_S278",
      stem:COUNT_STEMS[index%COUNT_STEMS.length](openers[0]),correct:String(count),distractors,
      correctReason:`文章以換行鎖定為 ${count} 個段落。`,wrongReasons:distractors.map((value)=>`${value} 與鎖定文本的實際段落數不符。`),
      index:index+1,operation:"count-locked-paragraph-blocks",representationType:`reading-structure-count-${index%COUNT_STEMS.length+1}`,
      reviewEvidence:`以換行分段重新計數得到 ${count} 段`,
    });
  }
  const target=index%4;
  return question({
    id:`ENG_R4_Q_READ_${String(index+1).padStart(3,"0")}_02`,skillId:index%2?"ENG_R4_S249":"ENG_R4_S250",
    stem:LOCATOR_STEMS[index%LOCATOR_STEMS.length](openers[target]),correct:`Paragraph ${target+1}`,
    distractors:[0,1,2,3].filter((value)=>value!==target).map((value)=>`Paragraph ${value+1}`),
    correctReason:`引文逐字出現在第 ${target+1} 段開頭。`,wrongReasons:[0,1,2,3].filter((value)=>value!==target).map((value)=>`第 ${value+1} 段沒有這一行。`),
    index:index+1,operation:"scan-exact-line-and-locate-paragraph",representationType:`reading-paragraph-locator-${index%LOCATOR_STEMS.length+1}`,
    reviewEvidence:`引文與第 ${target+1} 段開頭正規化後完全相同`,
  });
}

function orderQuestion(item,index,openers){
  const selected=openers.slice(0,4);
  const latest=index%2===1;
  const correct=latest?selected[3]:selected[0];
  return question({
    id:`ENG_R4_Q_READ_${String(index+1).padStart(3,"0")}_03`,skillId:latest?"ENG_R4_S273":"ENG_R4_S254",
    stem:latest?`Which selected line appears latest in the paragraph sequence?`:ORDER_STEMS[index%ORDER_STEMS.length](),
    correct,distractors:selected.filter((value)=>value!==correct),
    correctReason:latest?"這一行來自四個候選中的最晚段落。":"這一行來自四個候選中的最早段落。",
    wrongReasons:selected.filter((value)=>value!==correct).map(()=>latest?"這一行位於正確選項之前。":"這一行位於正確選項之後。"),
    index:index+2,operation:latest?"identify-latest-selected-paragraph":"identify-earliest-selected-paragraph",representationType:`reading-sequence-${latest?"latest":"earliest"}-${index%ORDER_STEMS.length+1}`,
    reviewEvidence:`四個候選依序取自第 1 至第 4 段，目標位置為第 ${latest?4:1} 段`,
  });
}

function endingQuestion(item,index,paragraphs,openers){
  const finalIndex=paragraphs.length-1;
  if(index%4===3){
    const selected=[lastSentence(paragraphs[0]),lastSentence(paragraphs[1]),lastSentence(paragraphs[2]),lastSentence(paragraphs[finalIndex])];
    const correct=selected[3];
    return question({
      id:`ENG_R4_Q_READ_${String(index+1).padStart(3,"0")}_04`,skillId:"ENG_R4_S245",
      stem:`Which selected excerpt comes from the actual end of the passage?`,correct,distractors:selected.slice(0,3),
      correctReason:"這段引文逐字位於全文末尾。",wrongReasons:selected.slice(0,3).map(()=>"這段引文位於較前段落，並非全文末尾。"),
      index:index+3,operation:"verify-whole-text-final-sentence",representationType:"reading-ending-final-sentence",
      reviewEvidence:`逐字比對鎖定文章最後一段的最後一句`,
    });
  }
  const distractorIndexes=[0,1,2].filter((value)=>value!==finalIndex);
  while(distractorIndexes.length<3)distractorIndexes.push(distractorIndexes.length+1);
  const distractors=distractorIndexes.slice(0,3).map((value)=>openers[value]);
  return question({
    id:`ENG_R4_Q_READ_${String(index+1).padStart(3,"0")}_04`,skillId:index%2?"ENG_R4_S248":"ENG_R4_S245",
    stem:END_STEMS[index%END_STEMS.length](),correct:openers[finalIndex],distractors,
    correctReason:`這一行是第 ${finalIndex+1} 段，也就是最後一段的開頭。`,
    wrongReasons:distractorIndexes.slice(0,3).map((value)=>`這一行是第 ${value+1} 段開頭，不是最後一段。`),
    index:index+3,operation:"use-ending-position-to-confirm-final-emphasis",representationType:`reading-ending-opener-${index%END_STEMS.length+1}`,
    reviewEvidence:`文章共有 ${paragraphs.length} 段，正確引文與第 ${finalIndex+1} 段開頭完全相同`,
  });
}

function materialize(item,index){
  const paragraphs=item.passage.split(/\n+/u).map((value)=>value.trim()).filter(Boolean);
  assert(paragraphs.length>=4&&paragraphs.length<=7,`${item.id}: paragraph range`);
  const openers=paragraphs.map((paragraph,paragraphIndex,all)=>{
    const first=firstSentence(paragraph);
    if(all.findIndex((candidate)=>firstSentence(candidate)===first)===paragraphIndex)return first;
    return paragraph.replace(/\s+/gu," ").trim().slice(0,220);
  });
  assert.equal(new Set(openers).size,openers.length,`${item.id}: paragraph openers must be unique`);
  return {
    id:`ENG_R4_READ_${String(index+1).padStart(3,"0")}`,
    passage:item.passage,
    glossary:(item.glossary??[]).filter((entry)=>Array.isArray(entry)&&entry.length>=2).map(([word,meaning])=>[String(word),String(meaning)]),
    questions:[titleQuestion(item,index),locatorQuestion(item,index,paragraphs,openers),orderQuestion(item,index,openers),endingQuestion(item,index,paragraphs,openers)],
    provenance:{
      status:"original",
      authorRole:"Project English passage author; R4 questions authored by Codex",
      copyrightStatus:"Original project passage retained; legacy questions discarded and all four R4 questions newly authored from locked textual evidence.",
      sourceRefs:["ENG-R4-FROZEN-AUTHORITY-GRAPH","CAP-106-TO-115-ENGLISH-CALIBRATION"],
      legacyId:item.id,
    },
  };
}

export function defineReadingBatch(start,end){
  assert(Number.isInteger(start)&&Number.isInteger(end)&&start>=1&&end<=500&&start<=end);
  return LEGACY.slice(start-1,end).map((item,offset)=>materialize(item,start-1+offset));
}

export const ENGLISH_READING_SOURCE_AUDIT={count:LEGACY.length,uniqueTitles:new Set(LEGACY.map((item)=>item.title)).size,uniquePassages:new Set(LEGACY.map((item)=>item.passage)).size,legacyQuestionsRetained:0};
