// DETERMINISTIC SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u07-s012-lecture-r1",
  "unitId": "u07",
  "topicId": "u07-literacy",
  "skillId": "inequality-literacy",
  "title": "不等式素養題：整合表格和規則與單位及多重限制",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能從較長文字或表格擷取必要數據。",
    "能判斷分段規則適用的區間。",
    "能建立一元一次不等式並加入多重限制。",
    "能解釋答案、比較方案並檢查邊界。"
  ],
  "prerequisites": [
    {
      "skillId": "inequality-budget",
      "requiredLevel": "能處理固定費、單價、優惠與預算上限。"
    }
  ],
  "prerequisiteBridge": {
    "inequality-budget": "能處理固定費、單價、優惠與預算上限。"
  },
  "glossary": [
    {
      "term": "素養題",
      "definition": "需要從真實或模擬情境中選取資訊、建立模型並解釋結果的題型。"
    },
    {
      "term": "分段規則",
      "definition": "數量落在不同範圍時使用不同計算方式。"
    },
    {
      "term": "必要資訊",
      "definition": "會影響模型或答案的數據與條件。"
    },
    {
      "term": "冗餘資訊",
      "definition": "題目提供但不影響所問結果的資料。"
    },
    {
      "term": "可行區間",
      "definition": "同時符合所有規則的未知量範圍。"
    }
  ],
  "notation": [
    {
      "symbol": "規則條件 ∧ 預算條件",
      "meaning": "兩種限制要同時成立。"
    },
    {
      "symbol": "min(A,B)",
      "meaning": "兩個上限同時存在時，較小上限決定可行範圍；本單元以中文理解即可。"
    }
  ],
  "conceptNarrative": [
    "不等式素養題先讀問題，再整理資料。先標出所求是最大值、最小值、範圍或方案比較，接著辨認變數單位、固定量、每單位變化量與邊界詞。表格中的資料不一定全都使用，只有會影響模型或驗算的資訊才是必要資訊。",
    "遇到分段收費或分段規則，必須先提出候選分段，再用該段公式求解。算出的答案若不在公式適用區間，代表模型與結果不自洽，必須改用另一段重新計算；不能直接接受，也不能任意把答案改成門檻值。",
    "容量上限、最低需求、預算上限與整數條件常同時出現。每一條限制先各自翻譯成不等式，再以且取交集；至少與最多通常包含端點。若解集為整數範圍，應清楚列出上下界並用題目單位解釋。",
    "方案比較要在相同用量與相同服務條件下比較完整總費用，而不是只比固定費或單價。解出臨界值後，還要檢查等號是否包含、相鄰用量的費用順序，以及情境是否另有限制，才能回答從多少用量起或哪個方案較合適。"
  ],
  "formalDefinitions": [
    {
      "name": "資料擷取",
      "statement": "先辨認變數、單位、邊界詞與方案規則，再建立式子。"
    },
    {
      "name": "分段一致性",
      "statement": "使用某段公式求得的答案，必須落在該段適用範圍。"
    },
    {
      "name": "多重限制模型",
      "statement": "可行解集是各條件解集的共同部分。"
    }
  ],
  "formulas": [
    {
      "formula": "固定費＋單價×x≤預算",
      "conditions": [
        "所選方案與費率段正確"
      ],
      "meaning": "常見素養情境核心模型。"
    },
    {
      "formula": "下限≤x≤上限",
      "conditions": [
        "需求與容量同時存在"
      ],
      "meaning": "多重限制交集。"
    }
  ],
  "nonApplicableCases": [
    "不能把表格所有數字全部相加。",
    "不能在未檢查適用區間前套用較便宜的分段單價。",
    "圖表若數值為估計或四捨五入，需依題目精度處理。",
    "答案若跨越方案門檻，應重新用新規則計算。",
    "素養情境不得取代數學推理；每個情境資訊都應影響模型或驗證。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先圈出問題所求與答案單位。",
      "check": "題目問最大、最少、範圍還是臨界點？"
    },
    {
      "step": 2,
      "instruction": "從文字或表格擷取必要資料與邊界詞。",
      "check": "哪些數字真正影響所求，哪些只是背景？"
    },
    {
      "step": 3,
      "instruction": "判斷分段、方案與公式的適用範圍。",
      "check": "選用的規則與候選答案位於同一段嗎？"
    },
    {
      "step": 4,
      "instruction": "逐條建立不等式並依正確規則求解。",
      "check": "固定量、變動量、單位換算是否正確？"
    },
    {
      "step": 5,
      "instruction": "加入整數、非負、容量與最低需求後取交集。",
      "check": "所有條件是否同時成立，端點是否包含？"
    },
    {
      "step": 6,
      "instruction": "以臨界值和相鄰值回到原規則驗算。",
      "check": "是否跨段、超支、超容量或未達最低需求？"
    },
    {
      "step": 7,
      "instruction": "用完整句子回答情境問題。",
      "check": "答案是否包含數值、單位與可行性說明？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "u07-s012-example-a",
      "prompt": "表格列出健身方案固定費 150 元、每次 25 元。預算 425 元時，最多使用幾次？",
      "solutionSteps": [
        "列 150+25x≤425。",
        "得到 25x≤275，所以 x≤11。",
        "十一次剛好四百二十五元。"
      ],
      "answer": "最多十一次。",
      "why": "從表格只擷取固定費、每次費與預算三項必要資訊；模型保留一次固定費，所得整數十一代回恰達上限，完整回應最大次數。"
    },
    {
      "exampleId": "u07-s012-example-b",
      "prompt": "遊覽車最多載 42 人，至少 26 人才出發，已有 4 位領隊，學生人數 s 的範圍為何？",
      "solutionSteps": [
        "總容量給 4+s≤42，所以 s≤38。",
        "最低出發人數給 4+s≥26，所以 s≥22。",
        "取交集得 22≤s≤38。"
      ],
      "answer": "學生可為二十二至三十八人。",
      "why": "領隊同時占容量也計入最低總人數，兩條限制都必須保留；各自求得學生上下界後取交集，才能得到真正可行的人數範圍。"
    },
    {
      "exampleId": "u07-s012-example-c",
      "prompt": "停車前 1 小時 50 元，超過後每半小時 20 元。預算 130 元，最多停多久？",
      "solutionSteps": [
        "剩餘預算為 130−50=80 元。",
        "可買四個額外半小時，也就是兩小時。",
        "加回前一小時，共三小時；下一時段需一百五十元。"
      ],
      "answer": "最多三小時。",
      "why": "先確認預算足以進入第二段，再把額外半小時換成小時並加回前段；驗算下一個半小時超支，也確認答案仍符合所用分段。"
    },
    {
      "exampleId": "u07-s012-example-d",
      "prompt": "方案甲為 90+14x，方案乙為 150+8x。使用量至少多少時，乙不比甲貴？",
      "solutionSteps": [
        "列 150+8x≤90+14x。",
        "得到 60≤6x，所以 x≥10。",
        "十單位時兩方案都為二百三十元。"
      ],
      "answer": "至少十單位。",
      "why": "以相同使用量比較完整總費用，臨界點十包含等號；九單位時乙仍較貴，十單位相等，之後乙的較低單價才形成優勢。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "看到表格就把所有數字都放進算式。",
      "why": "沒有依問題判斷資料是否必要。",
      "correction": "先寫所求量，再選會影響模型與驗算的資訊。"
    },
    {
      "mistake": "使用某段公式算出跨段答案仍直接接受。",
      "why": "忽略公式有適用區間。",
      "correction": "把候選答案代回分段條件，不符就改用另一段。"
    },
    {
      "mistake": "把至少與最多兩個限制用或連接。",
      "why": "誤解兩項規則必須同時成立。",
      "correction": "分別求解後以且取共同範圍。"
    },
    {
      "mistake": "只比較兩方案的每單位價格。",
      "why": "較低單價可能伴隨較高固定費。",
      "correction": "在相同用量下比較兩個完整總費用。"
    },
    {
      "mistake": "算出 x≥10 只回答十。",
      "why": "把臨界值誤當唯一解。",
      "correction": "說明十及以上符合，再套用情境中的其他上限。"
    },
    {
      "mistake": "半小時時段數直接當成小時數。",
      "why": "沒有完成時間單位換算。",
      "correction": "每兩個半小時才是一小時，並加回前段時間。"
    }
  ],
  "selfCheck": [
    "我是否先確認規則適用區間？",
    "所有使用的數據都真的必要嗎？",
    "多重限制是否取交集？",
    "答案是否跨越分段門檻？",
    "最終句子是否回應情境問題？"
  ],
  "summary": [
    "素養題重點是擷取、建模、求解、驗證與解釋。",
    "分段公式的答案必須落在適用區間。",
    "多重限制取共同部分。",
    "方案比較要比較完整總量而非單一費率。"
  ],
  "connections": {
    "previous": "整合 U07 前十一技能。",
    "next": [
      "本節完成 U07，後續單元會在更複雜代數與幾何情境中沿用建模與邊界檢查。"
    ]
  },
  "figureReferences": [],
  "practiceLinks": {
    "mcQuestionIds": [
      "u07-s012-v001",
      "u07-s012-v002",
      "u07-s012-v003",
      "u07-s012-v004",
      "u07-s012-v005",
      "u07-s012-v006",
      "u07-s012-v007",
      "u07-s012-v008",
      "u07-s012-v009",
      "u07-s012-v010",
      "u07-s012-v011",
      "u07-s012-v012"
    ],
    "constructedResponseIds": [
      "u07-s012-cr001",
      "u07-s012-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "人工檢查表格擷取、容量交集、分段一致性與方案比較四種素養結構；每例均保留情境不可刪除的數學功能，並未以換名換數方式重複一般應用題。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "contentSha256": "8757e542a83d455f9a8370d97dc9160884cf486ae88450f247e03ed4a147e9f3"
};

export const QUESTIONS = [
  {
    "questionId": "u07-s012-v001",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "表格顯示方案 A：固定費 100 元、每單位 20 元。若使用 x 單位，總費用式為何？",
    "givenConditions": "x 為非負使用量。",
    "target": "從表格建立一次式",
    "choices": [
      "100x+20",
      "100+20x",
      "20+x",
      "120x"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "當 x=0 時仍應付 100，只有 100+20x 保留固定費；每增加 1 單位增加 20，也符合。",
      "result": "100+20x",
      "answerIndexVerified": 1
    },
    "explanation": "固定費一百元不隨用量改變，所以只加一次；每單位二十元，使用 x 單位就是 20x 元，總費用為 100+20x。令 x=0 時仍需付一百元，且每增加一單位總費增加二十元，兩項都符合表格。",
    "steps": [
      "從表格辨認一百元是與用量無關的固定費。",
      "把每單位二十元乘上用量 x，得到變動費 20x。",
      "相加得 100+20x，再用零用量與增加一單位檢查。"
    ],
    "optionAnalysis": [
      {
        "choice": "100x+20",
        "truth": false,
        "reason": "把固定費乘用量。"
      },
      {
        "choice": "100+20x",
        "truth": true,
        "reason": "獨立重算得到「100+20x」，此選項與完整解答一致。"
      },
      {
        "choice": "20+x",
        "truth": false,
        "reason": "漏掉乘法與固定費結構。"
      },
      {
        "choice": "120x",
        "truth": false,
        "reason": "把固定費與單價相加後全乘。"
      }
    ],
    "misconceptionTarget": "把固定費乘上用量，沒有分清一次性費用與每單位費用。",
    "prerequisiteCheck": "需理解一次式模型。",
    "estimatedTimeSec": "45",
    "unitAndRoundingCheck": "金額元。",
    "ambiguityAndBoundaryAudit": "固定費不隨 x 變動，唯一式為 100+20x。",
    "difficultyReason": "素養資料擷取基礎。",
    "literacyContextNecessity": "表格中的兩種費用角色決定式子結構。",
    "tags": [
      "代數",
      "一元一次不等式",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "7db27522c008aec64f383bc80ae669912dd4cf547200f01a992bf67d47c1c519"
  },
  {
    "questionId": "u07-s012-v002",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "教室規則為至少 18 人、最多 30 人。若 n 為人數，正確範圍為何？",
    "givenConditions": "n 為整數。",
    "target": "建立容量可行區間",
    "choices": [
      "18<n<30",
      "n≤18 或 n≥30",
      "18≤n≤30",
      "18≤n<30"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "n≥18 且 n≤30，合併成 18≤n≤30。",
      "result": "18≤n≤30",
      "answerIndexVerified": 2
    },
    "explanation": "至少十八人表示 n≥18，最多三十人表示 n≤30；兩條規則必須同時成立，所以取交集為 18≤n≤30。兩個端點都包含：十八人已達最低要求，三十人也沒有超過容量，因此不能寫成嚴格不等號。",
    "steps": [
      "把至少十八人翻譯成下界 n≥18。",
      "把最多三十人翻譯成上界 n≤30。",
      "以且取共同範圍，合併成 18≤n≤30 並檢查端點。"
    ],
    "optionAnalysis": [
      {
        "choice": "18<n<30",
        "truth": false,
        "reason": "選項「18<n<30」錯排兩端。，與獨立解得的「18≤n≤30」不一致。"
      },
      {
        "choice": "n≤18 或 n≥30",
        "truth": false,
        "reason": "把且誤成或。"
      },
      {
        "choice": "18≤n≤30",
        "truth": true,
        "reason": "獨立重算得到「18≤n≤30」，此選項與完整解答一致。"
      },
      {
        "choice": "18≤n<30",
        "truth": false,
        "reason": "錯排除 30。"
      }
    ],
    "misconceptionTarget": "把至少或最多的等號漏掉，或用或連接兩個必須同時成立的限制。",
    "prerequisiteCheck": "需理解至少、最多、且。",
    "estimatedTimeSec": "45",
    "unitAndRoundingCheck": "單位人。",
    "ambiguityAndBoundaryAudit": "18 與 30 均允許。",
    "difficultyReason": "基本多重限制。",
    "literacyContextNecessity": "教室最低與最大人數同時決定可行區間。",
    "tags": [
      "代數",
      "一元一次不等式",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "1567e4f71cda0e14260226b9462d98d9ecaefc48dd3fd1a8000feb8a4acfb4df"
  },
  {
    "questionId": "u07-s012-v003",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "某方案只適用於用量 x≤5。使用此方案公式算得 x=7，最合理的判斷為何？",
    "givenConditions": "已知此公式適用 x≤5。",
    "target": "檢查分段模型自洽",
    "choices": [
      "結果超出公式適用範圍，必須改用其他規則",
      "直接接受 x=7",
      "把 7 改成 5",
      "答案一定無解"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "代入適用條件：7≤5 為假，所以用該公式得到的 7 不能作為最終答案；需查看另一段規則。",
      "result": "結果超出公式適用範圍，必須改用其他規則",
      "answerIndexVerified": 0
    },
    "explanation": "該公式的前提是 x≤5，但算出的七不滿足 7≤5，因此這個結果與所用分段自相矛盾，不能直接接受，也不能任意改成五。正確做法是查找 x>5 時適用的另一段規則，再重新建立模型與求解。",
    "steps": [
      "把算得的 x=7 代入原公式適用條件 x≤5。",
      "判定七不在該分段內，因此拒絕這個分段產生的候選答案。",
      "改用超過五時的規則重新計算，而不是自行截成邊界五。"
    ],
    "optionAnalysis": [
      {
        "choice": "結果超出公式適用範圍，必須改用其他規則",
        "truth": true,
        "reason": "獨立重算得到「結果超出公式適用範圍，必須改用其他規則」，此選項與完整解答一致。"
      },
      {
        "choice": "直接接受 x=7",
        "truth": false,
        "reason": "選項「直接接受 x=7」違反前提。，與獨立解得的「結果超出公式適用範圍，必須改用其他規則」不一致。"
      },
      {
        "choice": "把 7 改成 5",
        "truth": false,
        "reason": "不能任意截斷答案。"
      },
      {
        "choice": "答案一定無解",
        "truth": false,
        "reason": "其他分段可能有解。"
      }
    ],
    "misconceptionTarget": "只完成公式運算就接受答案，沒有檢查結果是否仍落在公式適用區間。",
    "prerequisiteCheck": "需理解條件範圍。",
    "estimatedTimeSec": "55",
    "unitAndRoundingCheck": "無單位。",
    "ambiguityAndBoundaryAudit": "7 明確不在 x≤5，需重新建模。",
    "difficultyReason": "分段素養核心。",
    "literacyContextNecessity": "方案適用範圍是判斷公式能否使用的必要情境資訊。",
    "tags": [
      "代數",
      "一元一次不等式",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "359822bc72de2aa1888183985996b8412679368edc6da43f650c197690ab0bf1"
  },
  {
    "questionId": "u07-s012-v004",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "方案 A 費用為 80+12x，預算 200 元。完整整數用量最多為何？",
    "givenConditions": "x 為非負整數。",
    "target": "從方案規則求最大整數用量",
    "choices": [
      "8",
      "9",
      "11",
      "10"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "可用變動費 120 元，每單位 12 元，120÷12=10。",
      "result": "10",
      "answerIndexVerified": 3
    },
    "explanation": "方案總費用為 80+12x，預算限制給 80+12x≤200。扣除固定費八十元後，12x≤120，再除以正數十二得 x≤10；用量為完整整數，十單位費用剛好二百元，十一單位需二百一十二元，所以最多十。",
    "steps": [
      "把方案費用與預算合併成 80+12x≤200。",
      "移去固定費並除以十二，求得 x≤10。",
      "代入十與十一，確認十可行而十一超支。"
    ],
    "optionAnalysis": [
      {
        "choice": "8",
        "truth": false,
        "reason": "8、9 可行但非最多。"
      },
      {
        "choice": "9",
        "truth": false,
        "reason": "9 可行但非最多。"
      },
      {
        "choice": "11",
        "truth": false,
        "reason": "11 費用 212。"
      },
      {
        "choice": "10",
        "truth": true,
        "reason": "獨立重算得到「10」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "只用二百元除以十二而漏掉固定費，或沒有判斷題目要求最大整數。",
    "prerequisiteCheck": "需會固定費預算。",
    "estimatedTimeSec": "65",
    "unitAndRoundingCheck": "金額元。",
    "ambiguityAndBoundaryAudit": "10 費用 200，11 超支。",
    "difficultyReason": "表格模型標準題。",
    "literacyContextNecessity": "方案公式與預算共同決定用量上界。",
    "tags": [
      "代數",
      "一元一次不等式",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "973562ae181ab567a4d72712704623203bdba4b4e3401b566e1897c285ebed1c"
  },
  {
    "questionId": "u07-s012-v005",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "方案 A：50+15x；方案 B：110+9x。當 x 為整數時，從多少單位起 B 不比 A 貴？",
    "givenConditions": "x 為非負整數。",
    "target": "比較兩方案臨界用量",
    "choices": [
      "8",
      "9",
      "10",
      "11"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "B−A=(110−50)+(9−15)x=60−6x。要求 B−A≤0，即 x≥10。",
      "result": "10",
      "answerIndexVerified": 2
    },
    "explanation": "B 不比 A 貴表示 110+9x≤50+15x。兩邊同減 50+9x，得到 60≤6x，因此 x≥10；在十單位時兩方案都為二百元，九單位時 A 為一百八十五元、B 為一百九十一元，所以確實從十單位起。",
    "steps": [
      "把不比 A 貴翻譯成 B 的完整總費用不大於 A。",
      "整理 110+9x≤50+15x，得到 x≥10。",
      "比較九與十單位的兩方案總價，確認臨界點包含等號。"
    ],
    "optionAnalysis": [
      {
        "choice": "8",
        "truth": false,
        "reason": "x=8 時 B=182、A=170，B較貴。"
      },
      {
        "choice": "9",
        "truth": false,
        "reason": "x=9 時 B=191、A=185。"
      },
      {
        "choice": "10",
        "truth": true,
        "reason": "正確，x=10 兩者 200。"
      },
      {
        "choice": "11",
        "truth": false,
        "reason": "可行但不是最早。"
      }
    ],
    "misconceptionTarget": "只看到 B 的單位費較低就立即選 B，忽略 B 較高的固定費與臨界用量。",
    "prerequisiteCheck": "需會兩邊含 x 的不等式。",
    "estimatedTimeSec": "85",
    "unitAndRoundingCheck": "金額元。",
    "ambiguityAndBoundaryAudit": "x=10 恰相等且「不比」包含等於；x=9 尚較貴。",
    "difficultyReason": "方案比較。",
    "literacyContextNecessity": "兩方案固定費與單價相反，必須用完整函數找交叉點。",
    "tags": [
      "代數",
      "一元一次不等式",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "643b2edad9cd2a7b5738087dd9b9566be6029b6bb8b44bcbd22c06b738d69aaf"
  },
  {
    "questionId": "u07-s012-v006",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "表格提供：場地容量 40 人、最低開課 24 人、目前報名 19 人。若每組新增 3 人，最少再招募幾組才能開課且不超容量？",
    "givenConditions": "g 為非負整數。",
    "target": "多重限制下的最少招募量",
    "choices": [
      "2 組",
      "1 組",
      "7 組",
      "8 組"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "還差 5 人；一組 3 人不夠，兩組增 6 人到 25，且 25≤40，所以最少 2 組。",
      "result": "2 組",
      "answerIndexVerified": 0
    },
    "explanation": "目前十九人，每組新增三人。要達最低二十四人需 19+3g≥24，得 g≥5÷3，最小整數為二組；新增兩組後共有二十五人，不超過四十人容量，而一組只有二十二人仍不足，所以最少二組且可行。",
    "steps": [
      "由最低開課人數列 19+3g≥24。",
      "解出 g≥5÷3，依整組招募向上取最小整數二。",
      "驗算一組未達標、兩組為二十五人且不超過容量四十。"
    ],
    "optionAnalysis": [
      {
        "choice": "2 組",
        "truth": true,
        "reason": "正確，新增後 25 人。"
      },
      {
        "choice": "1 組",
        "truth": false,
        "reason": "1 組只有 22 人。"
      },
      {
        "choice": "7 組",
        "truth": false,
        "reason": "可行但非最少。"
      },
      {
        "choice": "8 組",
        "truth": false,
        "reason": "新增後 43 人超容量。"
      }
    ],
    "misconceptionTarget": "只滿足最低人數卻未檢查容量，或把一點多組錯誤向下取成一組。",
    "prerequisiteCheck": "需會固定量與且。",
    "estimatedTimeSec": "80",
    "unitAndRoundingCheck": "單位人、組；每組 3 人。",
    "ambiguityAndBoundaryAudit": "2 組後 25 介於 24 與 40。",
    "difficultyReason": "資料擷取與交集。",
    "literacyContextNecessity": "最低開課、容量、目前人數及每組增量四項都影響答案。",
    "tags": [
      "代數",
      "一元一次不等式",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "f71c588efa602e518fc9bf329b7ed8f31733dc193cb10bf3bbf5b44513d03d00"
  },
  {
    "questionId": "u07-s012-v007",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "計程車前 3 公里固定 90 元，超過 3 公里後每公里加 25 元。預算 240 元，最多可搭幾公里？",
    "givenConditions": "d≥0，且解出的 9 落在 d>3 段。",
    "target": "分段計費模型",
    "choices": [
      "6 公里",
      "8 公里",
      "10 公里",
      "9 公里"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "超額里程可花 240−90=150 元，每公里 25，可多搭 6 公里；加前 3 公里共 9。",
      "result": "9 公里",
      "answerIndexVerified": 3
    },
    "explanation": "超過三公里後，前段九十元已包含前三公里，只對超出的 d−3 公里加費。因此 90+25(d−3)≤240，得 d−3≤6，所以 d≤9；九公里費二百四十元，十公里費二百六十五元，最多九公里且仍在第二段。",
    "steps": [
      "辨認答案會超過三公里，選用第二段費用公式。",
      "列 90+25(d−3)≤240，解得 d≤9。",
      "驗算九公里剛好符合、十公里超支，且九公里確實大於三。"
    ],
    "optionAnalysis": [
      {
        "choice": "6 公里",
        "truth": false,
        "reason": "6 可行但非最多。"
      },
      {
        "choice": "8 公里",
        "truth": false,
        "reason": "8 可行但非最多。"
      },
      {
        "choice": "10 公里",
        "truth": false,
        "reason": "10 公里費 265。"
      },
      {
        "choice": "9 公里",
        "truth": true,
        "reason": "獨立重算得到「9 公里」，此選項與完整解答一致。"
      }
    ],
    "misconceptionTarget": "把每公里二十五元乘全部里程再加九十元，重複計收前三公里。",
    "prerequisiteCheck": "需會分段式與括號。",
    "estimatedTimeSec": "105",
    "unitAndRoundingCheck": "金額元、距離公里。",
    "ambiguityAndBoundaryAudit": "9 公里費 240，10 公里超支；分段自洽。",
    "difficultyReason": "含基礎里程的分段素養。",
    "literacyContextNecessity": "前 3 公里固定費與超額里程規則不可簡化成單一單價。",
    "tags": [
      "代數",
      "一元一次不等式",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "1b631c8d936f35cba494e9bd8b09ab3ad1a7eade42d806c1c5988cb7a135388f"
  },
  {
    "questionId": "u07-s012-v008",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "某電費規則：前 100 度每度 2 元；超過 100 度的部分每度 3 元。預算 260 元，最多可用幾度？",
    "givenConditions": "用量為非負整數度。",
    "target": "累進分段費率",
    "choices": [
      "110 度",
      "120 度",
      "130 度",
      "100 度"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "100 度先花 200；剩 60 能買 60÷3=20 度超額量，總用量 120。",
      "result": "120 度",
      "answerIndexVerified": 1
    },
    "explanation": "前一百度先按每度二元計費，共二百元；預算還剩六十元。超過一百度的部分每度三元，所以可再用 60÷3=20 度，總量為一百二十度；再多一度要二百六十三元，故最大值正確。",
    "steps": [
      "先算前一百度的累積費用為二百元。",
      "用剩餘六十元除以第二段單價三元，得到二十度超額量。",
      "把兩段用量相加為一百二十度，再檢查下一度會超支。"
    ],
    "optionAnalysis": [
      {
        "choice": "110 度",
        "truth": false,
        "reason": "110 度只花 230，非最多。"
      },
      {
        "choice": "120 度",
        "truth": true,
        "reason": "正確，總費 260。"
      },
      {
        "choice": "130 度",
        "truth": false,
        "reason": "130 度需 290。"
      },
      {
        "choice": "100 度",
        "truth": false,
        "reason": "未用完預算。"
      }
    ],
    "misconceptionTarget": "把所有用電量都套第二段費率，或算出超額二十度後忘記加回前一百度。",
    "prerequisiteCheck": "需會分段累積。",
    "estimatedTimeSec": "105",
    "unitAndRoundingCheck": "金額元、用量度。",
    "ambiguityAndBoundaryAudit": "120 度剛好 260，121 度 263 超支。",
    "difficultyReason": "兩段費率整合。",
    "literacyContextNecessity": "前段與超額段採不同費率，情境規則是計算核心。",
    "tags": [
      "代數",
      "一元一次不等式",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "0868035f9d22485ce947a958dde52d1e169a60f093f02a720a580bbf6b14f9b9"
  },
  {
    "questionId": "u07-s012-v009",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "一場活動有兩項限制：總時間不超過 180 分鐘，固定流程 45 分鐘，每個單元 22 分鐘；另規定至少安排 5 個單元。可安排的整數單元數範圍為何？",
    "givenConditions": "n 為整數。",
    "target": "時間預算與最低需求交集",
    "choices": [
      "5≤n≤6",
      "n≤6",
      "5≤n≤7",
      "無解"
    ],
    "answerIndex": 0,
    "independentSolution": {
      "derivation": "最多 floor((180−45)/22)=floor(135/22)=6；至少 5，所以 n 只能 5 或 6。",
      "result": "5≤n≤6",
      "answerIndexVerified": 0
    },
    "explanation": "時間限制為 45+22n≤180，化簡得 n≤135÷22，約為 6.13；整數單元數至多六個。再與至少五個單元的 n≥5 取交集，得到 5≤n≤6；五、六個都可行，七個則需一百九十九分鐘而超時。",
    "steps": [
      "由固定流程與每單元時間列出 45+22n≤180。",
      "解得整數上界六個單元。",
      "與 n≥5 取交集，並以七個單元總時間驗證上界。"
    ],
    "optionAnalysis": [
      {
        "choice": "5≤n≤6",
        "truth": true,
        "reason": "獨立重算得到「5≤n≤6」，此選項與完整解答一致。"
      },
      {
        "choice": "n≤6",
        "truth": false,
        "reason": "選項「n≤6」漏下界。，與獨立解得的「5≤n≤6」不一致。"
      },
      {
        "choice": "5≤n≤7",
        "truth": false,
        "reason": "7 單元時間 199 分鐘。"
      },
      {
        "choice": "無解",
        "truth": false,
        "reason": "5、6 均可行。"
      }
    ],
    "misconceptionTarget": "只列時間上限而漏掉至少五個單元，或把六點多向上取成七。",
    "prerequisiteCheck": "需會固定時間模型與且。",
    "estimatedTimeSec": "110",
    "unitAndRoundingCheck": "時間均為分鐘。",
    "ambiguityAndBoundaryAudit": "5 單元 155 分鐘、6 單元 177、7 單元 199。",
    "difficultyReason": "多重限制與邊界驗證。",
    "literacyContextNecessity": "固定流程、單元時長、總時限與最低單元數共同決定兩個可行值。",
    "tags": [
      "代數",
      "一元一次不等式",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "3b4d176200895a68fdffa20e44af39ed5adcbb0a2a42648311ffd367a0235d10"
  },
  {
    "questionId": "u07-s012-v010",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "資料方案表：A 月租 199 元、每 GB 40 元；B 月租 319 元、每 GB 20 元。預計用量至少多少 GB 時，B 的總費用不高於 A？",
    "givenConditions": "g 為非負整數 GB。",
    "target": "由方案表求費用交叉點",
    "choices": [
      "4 GB",
      "5 GB",
      "7 GB",
      "6 GB"
    ],
    "answerIndex": 3,
    "independentSolution": {
      "derivation": "B比A多固定費 120，但每 GB 省 20；需 120÷20=6 GB 才抵銷，之後 B 不高於 A。",
      "result": "6 GB",
      "answerIndexVerified": 3
    },
    "explanation": "B 的總費用不高於 A 應列 319+20g≤199+40g。整理得 120≤20g，所以 g≥6；六 GB 時兩方案都為四百三十九元，五 GB 時 B 為四百一十九元而 A 為三百九十九元，故至少六 GB 才成立。",
    "steps": [
      "以相同用量 g 寫出兩個方案的完整總費用。",
      "解 319+20g≤199+40g，得到 g≥6。",
      "代入五與六 GB 比較總價，確認等號臨界值包含六。"
    ],
    "optionAnalysis": [
      {
        "choice": "4 GB",
        "truth": false,
        "reason": "4、5 GB 時 B 仍較貴。"
      },
      {
        "choice": "5 GB",
        "truth": false,
        "reason": "5 GB 時 A=399、B=419。"
      },
      {
        "choice": "7 GB",
        "truth": false,
        "reason": "7 可行但不是最少。"
      },
      {
        "choice": "6 GB",
        "truth": true,
        "reason": "正確，6 GB 兩者皆 439。"
      }
    ],
    "misconceptionTarget": "只比較每 GB 單價，忽略較高月租需要足夠用量才能抵銷。",
    "prerequisiteCheck": "需會兩邊有未知數的移項。",
    "estimatedTimeSec": "95",
    "unitAndRoundingCheck": "金額元、流量 GB。",
    "ambiguityAndBoundaryAudit": "g=6 相等且「不高於」允許；g=5 B 較高。",
    "difficultyReason": "表格比較素養。",
    "literacyContextNecessity": "兩方案固定費與單價的取捨必須保留，使用量決定優劣。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "6b3b53790b42f857f6dce05091f4762f5d666d4ece9bce582e299f3eef55b563"
  },
  {
    "questionId": "u07-s012-v011",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "一個倉庫最多存 500 箱，現有 365 箱。卡車每趟送 28 箱，但最後一趟也必須整車卸下。最多可再收幾趟？",
    "givenConditions": "t 為非負整數趟。",
    "target": "容量與批次離散化",
    "choices": [
      "3 趟",
      "4 趟",
      "5 趟",
      "6 趟"
    ],
    "answerIndex": 1,
    "independentSolution": {
      "derivation": "剩餘容量 135 箱；4 趟送 112，仍可收；5 趟送 140，超過 135。因此最多 4 趟。",
      "result": "4 趟",
      "answerIndexVerified": 1
    },
    "explanation": "倉庫剩餘容量為 500−365=135 箱，每趟必須整車卸下二十八箱。由 365+28t≤500 得 t≤135÷28，約為 4.82；四趟送一百一十二箱可收，五趟送一百四十箱超過剩餘容量，故最多四趟。",
    "steps": [
      "用總容量減現有箱數，求得剩餘一百三十五箱。",
      "列 28t≤135，得到趟數上界約為 4.82。",
      "依完整趟數向下取四，並驗算第五趟會超過容量。"
    ],
    "optionAnalysis": [
      {
        "choice": "3 趟",
        "truth": false,
        "reason": "3 可行但非最多。"
      },
      {
        "choice": "4 趟",
        "truth": true,
        "reason": "正確，總數 477。"
      },
      {
        "choice": "5 趟",
        "truth": false,
        "reason": "5 趟會到 505。"
      },
      {
        "choice": "6 趟",
        "truth": false,
        "reason": "選項「6 趟」更超量。，與獨立解得的「4 趟」不一致。"
      }
    ],
    "misconceptionTarget": "把四點八二四捨五入成五趟，忽略最後一趟也必須完整卸下。",
    "prerequisiteCheck": "需會容量模型與取整。",
    "estimatedTimeSec": "85",
    "unitAndRoundingCheck": "單位箱、趟；每趟 28 箱。",
    "ambiguityAndBoundaryAudit": "4 趟可收、5 趟超容量。",
    "difficultyReason": "情境型最大整數。",
    "literacyContextNecessity": "整車卸下規則使 4.82 不能拆成部分趟，情境必要。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "4e87e0a593b8cfa495ff6d474b0456ebbb2e2c27773e8981a2780c0376da58a3"
  },
  {
    "questionId": "u07-s012-v012",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_JUNIOR_HIGH_CAP_MATH",
    "text": "閱讀規則：前 2 小時收費 100 元；超過 2 小時後，每 30 分鐘加 35 元。小安有 240 元，最多可使用幾小時？時間以完整 30 分鐘計。",
    "givenConditions": "時間超過 2 小時後按完整 30 分鐘。",
    "target": "分段時間計費與單位轉換",
    "choices": [
      "3 小時",
      "3.5 小時",
      "4 小時",
      "4.5 小時"
    ],
    "answerIndex": 2,
    "independentSolution": {
      "derivation": "240−100=140，140÷35=4 個額外半小時，共 2 小時；加原 2 小時得 4 小時。",
      "result": "4 小時",
      "answerIndexVerified": 2
    },
    "explanation": "前兩小時先付一百元，預算剩一百四十元；每個完整半小時三十五元，恰可買四個時段，也就是額外兩小時。加回原先兩小時得總共四小時；下一個半小時需二百七十五元，因此最多四小時。",
    "steps": [
      "先扣除前兩小時的一百元固定費用。",
      "以剩餘一百四十元除三十五，得到四個完整半小時。",
      "把四個半小時換成兩小時並加回前段，再驗算下一時段。"
    ],
    "optionAnalysis": [
      {
        "choice": "3 小時",
        "truth": false,
        "reason": "3 小時只用 2 個額外時段，非最多。"
      },
      {
        "choice": "3.5 小時",
        "truth": false,
        "reason": "3.5 小時可行但非最多。"
      },
      {
        "choice": "4 小時",
        "truth": true,
        "reason": "4 小時正確。"
      },
      {
        "choice": "4.5 小時",
        "truth": false,
        "reason": "4.5 小時需 5 個額外時段共 275 元。"
      }
    ],
    "misconceptionTarget": "把半小時時段誤當整小時，或忘記把超額時間加回原有兩小時。",
    "prerequisiteCheck": "需會分段、整數時段與時間換算。",
    "estimatedTimeSec": "115",
    "unitAndRoundingCheck": "35 元／30 分鐘；4 個時段=2 小時。",
    "ambiguityAndBoundaryAudit": "4 小時總費 240，4.5 小時 275，邊界明確。",
    "difficultyReason": "分段規則與時間單位整合。",
    "literacyContextNecessity": "前段包時、額外半小時計費及完整時段限制均影響答案。",
    "tags": [
      "代數",
      "一元一次不等式",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "b5960f62ae00afbb3e2167d640e3581bb28aec8f689c4f3f7d6f191f35acfb27"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u07-s012-cr001",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "type": "constructed-response",
    "prompt": "某共享空間收費如下：前 2 小時 120 元；超過 2 小時後，每完整 30 分鐘加收 40 元。小美有 360 元。求最多可使用多久，並寫出分段判斷與邊界驗算。",
    "requiredWork": [
      "判斷答案落在超過 2 小時的分段",
      "扣除前段費用",
      "求完整半小時時段數",
      "換算總時間",
      "檢查下一時段"
    ],
    "fullCreditSolution": [
      "小美的三百六十元足以支付前兩小時一百二十元，因此最大使用時間必須檢查超過兩小時的第二段規則。",
      "設超過前段的完整半小時時段數為 n，可列 120+40n≤360，解得 n≤6；所以最多六個完整半小時。",
      "六個半小時合計三小時，加回前兩小時，總使用時間為五小時。",
      "五小時的費用是 120+6×40=360 元；五點五小時需七個加價時段，共四百元，故最多五小時。"
    ],
    "alternativeMethod": [
      "可設超額半小時時段數 n：120+40n≤360，得 n≤6，再用總時間 2+0.5n。"
    ],
    "reasoningSteps": [
      "先用預算與前段價格判斷答案落在超過兩小時的分段。",
      "扣除前段費用，求可支付的完整三十分鐘時段數。",
      "把六個半小時換算為三小時，再加回前段兩小時。",
      "比較五小時與下一個五點五小時的費用，驗證唯一最大值。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整判斷第二段，算出 6 個半小時、總計 5 小時，並驗證 5 可行、5.5 超支。"
      },
      {
        "score": 2,
        "criteria": "答案 5 小時與主要計算正確，但缺少分段說明或下一時段驗算。"
      },
      {
        "score": 1,
        "criteria": "知道先扣 120 或算出 6 個時段，但時間換算或總時間相加錯誤。"
      },
      {
        "score": 0,
        "criteria": "把 360 全部除以 40 或重複計費前 2 小時，且無合理修正。"
      }
    ],
    "partialCreditRules": "若把 6 個半小時誤換成 6 小時，保留前段與時段數計算分；若忘記加前 2 小時，屬總時間解讀錯。",
    "followThroughPolicy": "前段算術錯誤後若仍正確以完整 30 分鐘向下取整，可給程序分；分段適用性須另評。",
    "unitAndNotationRules": "金額元、時間小時；30 分鐘=0.5 小時。最終寫 5 小時。",
    "answerOnlyPolicy": "只寫 5 小時，最多 1 分。",
    "commonErrors": [
      "把每三十分鐘加收四十元誤讀成每一小時才加收四十元。",
      "算出六個半小時後直接回答三小時，忘記加回前段兩小時。",
      "將全部三百六十元直接除以四十，重複忽略前段收費規則。"
    ],
    "figureId": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "最多 5 小時。",
      "ambiguity": "「每完整 30 分鐘」明確限定離散時段，前段與超額段界線清楚。",
      "scope": "國中分段計費不等式素養。",
      "reviewNote": "獨立扣除 120 得 240，可買 6 個半小時即 3 小時；總 5 小時，下一個半小時使費用 400，故最大值唯一。"
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "79db9aaed005eb8a5109c8d2e6dc6fe79b5b2bb27670de9f9c53338bd8bbc7f0"
  },
  {
    "questionId": "u07-s012-cr002",
    "unitId": "u07",
    "numericUnitId": 7,
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "type": "constructed-response",
    "prompt": "活動規則：場地最多容納 72 人；已確定 18 位工作人員；每組參加者 6 人；至少要有 7 組才成行。設組數為 g。建立所有限制，求可行整數範圍，並說明是否能安排 10 組。",
    "requiredWork": [
      "建立容量上限",
      "建立最低組數",
      "取且的交集",
      "求整數範圍",
      "代入 10 組驗證"
    ],
    "fullCreditSolution": [
      "容量限制必須包含十八位工作人員，故 18+6g≤72。化簡得 6g≤54，所以 g≤9。",
      "成行條件是至少七組，因此另有 g≥7，而且 g 必須是整數。",
      "兩個限制同時成立，取交集得到 7≤g≤9，也就是可安排七、八或九組。",
      "若安排十組，總人數為 18+6×10=78 人，超過七十二人的容量，所以十組不可行。"
    ],
    "alternativeMethod": [
      "也可先算參加者容量 72−18=54，人數可容納 54÷6=9 組，再與至少 7 組合併。"
    ],
    "reasoningSteps": [
      "從題目擷取固定工作人員、每組人數與場地容量。",
      "建立容量不等式並求出最多九組。",
      "加入至少七組的下界，以且取整數交集。",
      "將十組代回總人數，明確判斷其超過容量。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確列出 18+6g≤72 與 g≥7，得到整數範圍 7≤g≤9，並證明 10 組不可行。"
      },
      {
        "score": 2,
        "criteria": "範圍與 10 組判斷正確，但其中一個原始限制未清楚列式；或只漏寫 g 為整數。"
      },
      {
        "score": 1,
        "criteria": "能求出上限 9 或下限 7，但未正確取交集。"
      },
      {
        "score": 0,
        "criteria": "忽略工作人員或把至少 7 寫成 g≤7，無有效共同範圍。"
      }
    ],
    "partialCreditRules": "只列 g=7、8、9 也可視為正確整數範圍；但需展示兩項限制。",
    "followThroughPolicy": "若把 72−18 算錯但仍正確形成容量模型與且的交集，可給程序分。",
    "unitAndNotationRules": "g 的單位為組且為非負整數；人數單位為人。",
    "answerOnlyPolicy": "只回答「不能 10 組」而無範圍，最多 1 分。",
    "commonErrors": [
      "只用七十二除以每組六人，完全忽略十八位工作人員也占容量。",
      "把至少七組誤寫成 g≤7，導致下界方向顛倒。",
      "分別得到上下界後用或連接，沒有取同時成立的共同範圍。"
    ],
    "figureId": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "7≤g≤9，10 組不可行。",
      "ambiguity": "容量、固定工作人員、每組人數與最低組數均明示，所有限制須同時成立。",
      "scope": "國中多條件不等式素養。",
      "reviewNote": "獨立算可供參加者 54 人，最多 9 組；與至少 7 組交集得 7、8、9。10 組總人數 78，超過 72。"
    },
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_OLD_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "db13face357bb4ccf4e9b3dc036c2d6591c13f31d0d0197f73f2371473bf7f05"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u07-s012-v001-semantic-r1",
    "questionId": "u07-s012-v001",
    "unitId": "u07",
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "contentSha256": "7db27522c008aec64f383bc80ae669912dd4cf547200f01a992bf67d47c1c519",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "當 x=0 時仍應付 100，只有 100+20x 保留固定費；每增加 1 單位增加 20，也符合。",
    "derivedAnswer": "100+20x",
    "storedAnswer": "100+20x",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「從表格建立一次式」，給定條件「x 為非負使用量。」足以決定唯一數學任務。",
      "boundary": "固定費不隨 x 變動，唯一式為 100+20x。",
      "units": "金額元。",
      "scope": "本題只使用 不等式素養題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "素養資料擷取基礎。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：當 x=0 時仍應付 100，只有 100+20x 保留固定費；每增加 1 單位增加 20，也符合。 所得「100+20x」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：固定費不隨 x 變動，唯一式為 100+20x。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s012-v002-semantic-r1",
    "questionId": "u07-s012-v002",
    "unitId": "u07",
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "contentSha256": "1567e4f71cda0e14260226b9462d98d9ecaefc48dd3fd1a8000feb8a4acfb4df",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "n≥18 且 n≤30，合併成 18≤n≤30。",
    "derivedAnswer": "18≤n≤30",
    "storedAnswer": "18≤n≤30",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「建立容量可行區間」，給定條件「n 為整數。」足以決定唯一數學任務。",
      "boundary": "18 與 30 均允許。",
      "units": "單位人。",
      "scope": "本題只使用 不等式素養題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "基本多重限制。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：n≥18 且 n≤30，合併成 18≤n≤30。 所得「18≤n≤30」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：18 與 30 均允許。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s012-v003-semantic-r1",
    "questionId": "u07-s012-v003",
    "unitId": "u07",
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "contentSha256": "359822bc72de2aa1888183985996b8412679368edc6da43f650c197690ab0bf1",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "代入適用條件：7≤5 為假，所以用該公式得到的 7 不能作為最終答案；需查看另一段規則。",
    "derivedAnswer": "結果超出公式適用範圍，必須改用其他規則",
    "storedAnswer": "結果超出公式適用範圍，必須改用其他規則",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「檢查分段模型自洽」，給定條件「已知此公式適用 x≤5。」足以決定唯一數學任務。",
      "boundary": "7 明確不在 x≤5，需重新建模。",
      "units": "無單位。",
      "scope": "本題只使用 不等式素養題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "分段素養核心。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：代入適用條件：7≤5 為假，所以用該公式得到的 7 不能作為最終答案；需查看另一段規則。 所得「結果超出公式適用範圍，必須改用其他規則」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：7 明確不在 x≤5，需重新建模。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s012-v004-semantic-r1",
    "questionId": "u07-s012-v004",
    "unitId": "u07",
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "contentSha256": "973562ae181ab567a4d72712704623203bdba4b4e3401b566e1897c285ebed1c",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "可用變動費 120 元，每單位 12 元，120÷12=10。",
    "derivedAnswer": "10",
    "storedAnswer": "10",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「從方案規則求最大整數用量」，給定條件「x 為非負整數。」足以決定唯一數學任務。",
      "boundary": "10 費用 200，11 超支。",
      "units": "金額元。",
      "scope": "本題只使用 不等式素養題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "表格模型標準題。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：可用變動費 120 元，每單位 12 元，120÷12=10。 所得「10」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：10 費用 200，11 超支。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s012-v005-semantic-r1",
    "questionId": "u07-s012-v005",
    "unitId": "u07",
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "contentSha256": "643b2edad9cd2a7b5738087dd9b9566be6029b6bb8b44bcbd22c06b738d69aaf",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "B−A=(110−50)+(9−15)x=60−6x。要求 B−A≤0，即 x≥10。",
    "derivedAnswer": "10",
    "storedAnswer": "10",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「比較兩方案臨界用量」，給定條件「x 為非負整數。」足以決定唯一數學任務。",
      "boundary": "x=10 恰相等且「不比」包含等於；x=9 尚較貴。",
      "units": "金額元。",
      "scope": "本題只使用 不等式素養題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "方案比較。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：B−A=(110−50)+(9−15)x=60−6x。要求 B−A≤0，即 x≥10。 所得「10」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：x=10 恰相等且「不比」包含等於；x=9 尚較貴。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s012-v006-semantic-r1",
    "questionId": "u07-s012-v006",
    "unitId": "u07",
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "contentSha256": "f71c588efa602e518fc9bf329b7ed8f31733dc193cb10bf3bbf5b44513d03d00",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "還差 5 人；一組 3 人不夠，兩組增 6 人到 25，且 25≤40，所以最少 2 組。",
    "derivedAnswer": "2 組",
    "storedAnswer": "2 組",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「多重限制下的最少招募量」，給定條件「g 為非負整數。」足以決定唯一數學任務。",
      "boundary": "2 組後 25 介於 24 與 40。",
      "units": "單位人、組；每組 3 人。",
      "scope": "本題只使用 不等式素養題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "資料擷取與交集。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：還差 5 人；一組 3 人不夠，兩組增 6 人到 25，且 25≤40，所以最少 2 組。 所得「2 組」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：2 組後 25 介於 24 與 40。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s012-v007-semantic-r1",
    "questionId": "u07-s012-v007",
    "unitId": "u07",
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "contentSha256": "1b631c8d936f35cba494e9bd8b09ab3ad1a7eade42d806c1c5988cb7a135388f",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "超額里程可花 240−90=150 元，每公里 25，可多搭 6 公里；加前 3 公里共 9。",
    "derivedAnswer": "9 公里",
    "storedAnswer": "9 公里",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「分段計費模型」，給定條件「d≥0，且解出的 9 落在 d>3 段。」足以決定唯一數學任務。",
      "boundary": "9 公里費 240，10 公里超支；分段自洽。",
      "units": "金額元、距離公里。",
      "scope": "本題只使用 不等式素養題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "含基礎里程的分段素養。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：超額里程可花 240−90=150 元，每公里 25，可多搭 6 公里；加前 3 公里共 9。 所得「9 公里」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：9 公里費 240，10 公里超支；分段自洽。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s012-v008-semantic-r1",
    "questionId": "u07-s012-v008",
    "unitId": "u07",
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "contentSha256": "0868035f9d22485ce947a958dde52d1e169a60f093f02a720a580bbf6b14f9b9",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "100 度先花 200；剩 60 能買 60÷3=20 度超額量，總用量 120。",
    "derivedAnswer": "120 度",
    "storedAnswer": "120 度",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「累進分段費率」，給定條件「用量為非負整數度。」足以決定唯一數學任務。",
      "boundary": "120 度剛好 260，121 度 263 超支。",
      "units": "金額元、用量度。",
      "scope": "本題只使用 不等式素養題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "兩段費率整合。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：100 度先花 200；剩 60 能買 60÷3=20 度超額量，總用量 120。 所得「120 度」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：120 度剛好 260，121 度 263 超支。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s012-v009-semantic-r1",
    "questionId": "u07-s012-v009",
    "unitId": "u07",
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "contentSha256": "3b4d176200895a68fdffa20e44af39ed5adcbb0a2a42648311ffd367a0235d10",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "最多 floor((180−45)/22)=floor(135/22)=6；至少 5，所以 n 只能 5 或 6。",
    "derivedAnswer": "5≤n≤6",
    "storedAnswer": "5≤n≤6",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「時間預算與最低需求交集」，給定條件「n 為整數。」足以決定唯一數學任務。",
      "boundary": "5 單元 155 分鐘、6 單元 177、7 單元 199。",
      "units": "時間均為分鐘。",
      "scope": "本題只使用 不等式素養題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "多重限制與邊界驗證。",
    "literacyNecessityCheck": "非素養分級題，未以可刪除的故事包裝難度。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：最多 floor((180−45)/22)=floor(135/22)=6；至少 5，所以 n 只能 5 或 6。 所得「5≤n≤6」與儲存答案一致。四個選項逐項檢查後只有索引 0 為真；邊界審核：5 單元 155 分鐘、6 單元 177、7 單元 199。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s012-v010-semantic-r1",
    "questionId": "u07-s012-v010",
    "unitId": "u07",
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "contentSha256": "6b3b53790b42f857f6dce05091f4762f5d666d4ece9bce582e299f3eef55b563",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "B比A多固定費 120，但每 GB 省 20；需 120÷20=6 GB 才抵銷，之後 B 不高於 A。",
    "derivedAnswer": "6 GB",
    "storedAnswer": "6 GB",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「由方案表求費用交叉點」，給定條件「g 為非負整數 GB。」足以決定唯一數學任務。",
      "boundary": "g=6 相等且「不高於」允許；g=5 B 較高。",
      "units": "金額元、流量 GB。",
      "scope": "本題只使用 不等式素養題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "表格比較素養。",
    "literacyNecessityCheck": "兩方案固定費與單價的取捨必須保留，使用量決定優劣。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：B比A多固定費 120，但每 GB 省 20；需 120÷20=6 GB 才抵銷，之後 B 不高於 A。 所得「6 GB」與儲存答案一致。四個選項逐項檢查後只有索引 3 為真；邊界審核：g=6 相等且「不高於」允許；g=5 B 較高。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s012-v011-semantic-r1",
    "questionId": "u07-s012-v011",
    "unitId": "u07",
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "contentSha256": "4e87e0a593b8cfa495ff6d474b0456ebbb2e2c27773e8981a2780c0376da58a3",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "剩餘容量 135 箱；4 趟送 112，仍可收；5 趟送 140，超過 135。因此最多 4 趟。",
    "derivedAnswer": "4 趟",
    "storedAnswer": "4 趟",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「容量與批次離散化」，給定條件「t 為非負整數趟。」足以決定唯一數學任務。",
      "boundary": "4 趟可收、5 趟超容量。",
      "units": "單位箱、趟；每趟 28 箱。",
      "scope": "本題只使用 不等式素養題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "情境型最大整數。",
    "literacyNecessityCheck": "整車卸下規則使 4.82 不能拆成部分趟，情境必要。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：剩餘容量 135 箱；4 趟送 112，仍可收；5 趟送 140，超過 135。因此最多 4 趟。 所得「4 趟」與儲存答案一致。四個選項逐項檢查後只有索引 1 為真；邊界審核：4 趟可收、5 趟超容量。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u07-s012-v012-semantic-r1",
    "questionId": "u07-s012-v012",
    "unitId": "u07",
    "topicId": "u07-literacy",
    "skillId": "inequality-literacy",
    "contentSha256": "b5960f62ae00afbb3e2167d640e3581bb28aec8f689c4f3f7d6f191f35acfb27",
    "reviewVersion": "human-review-r4.0",
    "reviewedAt": "2026-07-12",
    "independentSolution": "240−100=140，140÷35=4 個額外半小時，共 2 小時；加原 2 小時得 4 小時。",
    "derivedAnswer": "4 小時",
    "storedAnswer": "4 小時",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹目標為「分段時間計費與單位轉換」，給定條件「時間超過 2 小時後按完整 30 分鐘。」足以決定唯一數學任務。",
      "boundary": "4 小時總費 240，4.5 小時 275，邊界明確。",
      "units": "35 元／30 分鐘；4 個時段=2 小時。",
      "scope": "本題只使用 不等式素養題 與其已鎖定先備技能，不需要二次不等式或高中集合技巧。"
    },
    "difficultyReason": "分段規則與時間單位整合。",
    "literacyNecessityCheck": "前段包時、額外半小時計費及完整時段限制均影響答案。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：240−100=140，140÷35=4 個額外半小時，共 2 小時；加原 2 小時得 4 小時。 所得「4 小時」與儲存答案一致。四個選項逐項檢查後只有索引 2 為真；邊界審核：4 小時總費 240，4.5 小時 275，邊界明確。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
