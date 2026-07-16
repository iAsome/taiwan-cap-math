// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u02-s009-lecture-r1",
  "unitId": "u02",
  "topicId": "u02-fraction-ops",
  "skillId": "fraction-add-subtract",
  "title": "分數加減：先統一單位分數，再處理符號和括號與剩餘量",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能完成同分母與異分母加減。",
    "能處理負分數與減去負分數。",
    "能計算含括號的多步分數式。",
    "能把完成、使用與剩餘情境翻成正確加減。"
  ],
  "prerequisites": [
    {
      "skillId": "fraction-compare",
      "requiredLevel": "能找共同分母並理解等值分數。"
    }
  ],
  "glossary": [
    {
      "term": "公分母",
      "definition": "能被各分母整除的共同分母。"
    },
    {
      "term": "通分",
      "definition": "把分數改寫成相同分母。"
    },
    {
      "term": "約分",
      "definition": "分子分母同除公因數化簡。"
    },
    {
      "term": "相反數",
      "definition": "與原數相加為0的數。"
    }
  ],
  "notation": [
    {
      "symbol": "a/b±c/d",
      "meaning": "先找bd或更小公分母。"
    }
  ],
  "conceptNarrative": [
    "分母表示單位分數大小，異分母分數不能直接合併；加減前要先找公分母並等值通分。通分時分子與分母必須同乘相同倍數，分數值才保持不變。",
    "通分後只加減帶號分子，公分母保持不變，再以最大公因數約分。減去負分數等於加上它的相反數；含多層括號時要由最內層向外逐層計算。",
    "情境題先確定每一分率是否都以同一整體為基準。使用或扣除寫減法，補入或增加寫加法；問剩餘量時，通常要用整體一減去已完成或已使用的累計比例。"
  ],
  "formalDefinitions": [
    {
      "name": "異分母加減",
      "statement": "改寫成同分母後加減分子，分母不變。"
    },
    {
      "name": "最簡分數",
      "statement": "分子分母最大公因數為1。"
    }
  ],
  "formulas": [
    {
      "formula": "a/b+c/d=(ad+bc)/bd",
      "conditions": [
        "b、d非0"
      ],
      "meaning": "通用加法公式。"
    },
    {
      "formula": "a/b-c/d=(ad-bc)/bd",
      "conditions": [
        "b、d非0"
      ],
      "meaning": "通用減法公式。"
    }
  ],
  "nonApplicableCases": [
    "分母不能直接相加或相減。",
    "通分後分母保持共同分母。",
    "帶分數若需借位要先統一分母。",
    "情境中的『剩下』通常要用1或總量減去已用量。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "依題意辨認加減方向與括號層次，將減去負數先改寫成加相反數。",
      "check": "使用、補入、剩餘等詞與算式符號一致，最內層括號已先標出。"
    },
    {
      "step": 2,
      "instruction": "求各分母的最小公倍數作公分母，或選擇容易計算的共同倍數。",
      "check": "公分母能被每個原分母整除，沒有把分母直接相加。"
    },
    {
      "step": 3,
      "instruction": "每個分數的分子分母同乘適當倍數，完成等值通分。",
      "check": "用約分或交叉乘積確認通分前後分數值相等。"
    },
    {
      "step": 4,
      "instruction": "同分母後依整數規則加減帶號分子，分母保持不變。",
      "check": "負號跟著分子，減負已轉成加正，括號外符號沒有遺漏。"
    },
    {
      "step": 5,
      "instruction": "用 GCD 約成最簡分數，必要時化帶分數並放回情境單位。",
      "check": "結果大小符合增加、使用或剩餘方向，問句每一部分都已回答。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "u02-s009-example-a",
      "prompt": "計算 5/6-1/9。",
      "solutionSteps": [
        "取公分母十八，通分為 15/18-2/18。",
        "同分母相減得 13/18，十三與十八互質。"
      ],
      "answer": "13/18。",
      "why": "六與九的最小公倍數是十八，通分後六分之五化為十八分之十五，九分之一化為十八分之二。相減分子十五減二得十三，所以結果為十八分之十三。"
    },
    {
      "exampleId": "u02-s009-example-b",
      "prompt": "計算 -7/10+2/5。",
      "solutionSteps": [
        "把 2/5 通分成 4/10，原式成 -7/10+4/10。",
        "帶號分子 -7+4=-3，得到 -3/10。"
      ],
      "answer": "-3/10。",
      "why": "先將五分之二通分成十分之四，再與負十分之七相加。帶號分子負七加四等於負三，公分母十保持不變，因此得到負十分之三。"
    },
    {
      "exampleId": "u02-s009-example-c",
      "prompt": "水箱原有 4/5，用掉 1/3，再補入 1/10，最後比例多少？",
      "solutionSteps": [
        "依使用與補入列式 4/5-1/3+1/10。",
        "通分為 24/30-10/30+3/30，合併得 17/30。"
      ],
      "answer": "17/30。",
      "why": "三個分率都以總容量為基準，列式五分之四減三分之一加十分之一。通分為三十分母後是二十四減十再加三，得到三十分之十七。"
    },
    {
      "exampleId": "u02-s009-example-d",
      "prompt": "計算 -2/3+5/12。",
      "solutionSteps": [
        "取公分母十二，將 -2/3 通分為 -8/12。",
        "計算 -8/12+5/12=-3/12，再約分為 -1/4。"
      ],
      "answer": "-1/4。",
      "why": "三與十二的公分母取十二，負三分之二化為負十二分之八。帶號分子負八加五得負三，再以三約分，結果為負四分之一。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "異分母加減時把分子、分母分別直接相加減。",
      "correction": "先等值通分成相同單位分數，之後只處理帶號分子。"
    },
    {
      "mistake": "通分時只乘分母，分子保持不變。",
      "correction": "分子分母必須同乘相同非零倍數，才能保持原分數值。"
    },
    {
      "mistake": "減去負分數後仍保留兩個負號。",
      "correction": "減去負數等於加上其相反數，先改寫再通分計算。"
    },
    {
      "mistake": "多層括號由外向內計算，造成外部符號提早作用。",
      "correction": "先完成最內層括號，每一步把其餘算式原樣抄回。"
    },
    {
      "mistake": "題目問未完成或缺少量，卻只算已完成或現有量。",
      "correction": "先標明問句方向，剩餘用整體減累計部分，缺少用需要量減現有量。"
    },
    {
      "mistake": "得到分子分母仍有公因數的結果後直接作答。",
      "correction": "完成加減後再求分子分母最大公因數，約成最簡分數。"
    }
  ],
  "selfCheck": [
    "公分母選得正確嗎？",
    "每個分子是否同步放大？",
    "負號與括號是否保留？",
    "結果是否約分？",
    "情境結果是否介於合理範圍？"
  ],
  "summary": [
    "分數加減先統一分母。",
    "通分不改變值。",
    "負號依整數規則處理。",
    "剩餘量通常需要用整體減已用量。"
  ],
  "connections": {
    "previous": "先備技能為 fraction-compare，需能完成其基本判斷與計算。",
    "next": [
      "分數的乘法和除法不需要通分。",
      "帶分數加減會增加借位與進位。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u02-s009-v001",
      "u02-s009-v002",
      "u02-s009-v003",
      "u02-s009-v004",
      "u02-s009-v005",
      "u02-s009-v006",
      "u02-s009-v007",
      "u02-s009-v008",
      "u02-s009-v009",
      "u02-s009-v010",
      "u02-s009-v011",
      "u02-s009-v012"
    ],
    "constructedResponseIds": [
      "u02-s009-cr001",
      "u02-s009-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "以共同分母重新計算四個例題，並用小數估值檢查結果方向；負號、括號與整體1的角色均獨立核對。",
    "reviewVersion": "human-lecture-review-r3.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "b20ddf4bae6d83b37103b873fe8044fc9a7cd14093c601401fadb8b28182d448",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
};

export const QUESTIONS = [
  {
    "questionId": "u02-s009-v001",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "1/3+1/6 等於多少？",
    "choices": [
      "1/2",
      "2/9",
      "1/9",
      "2/3"
    ],
    "answerIndex": 0,
    "explanation": "三分之一與六分之一的單位分數不同，先把三分之一通分成六分之二。再相加 2/6+1/6=3/6，最後約分得到 1/2。約分後也符合兩個正分數相加應大於任一原加數。",
    "steps": [
      "以 6 為公分母，將 1/3 改寫為 2/6。",
      "同分母相加得到 2/6+1/6=3/6。",
      "用 3 約分 3/6，得到最簡分數 1/2。"
    ],
    "optionAnalysis": [
      {
        "choice": "1/2",
        "truth": true,
        "reason": "通分後得1/2。"
      },
      {
        "choice": "2/9",
        "truth": false,
        "reason": "分子分母分別相加的錯誤。"
      },
      {
        "choice": "1/9",
        "truth": false,
        "reason": "把1/3減1/6。"
      },
      {
        "choice": "2/3",
        "truth": false,
        "reason": "未約分且數值過大。"
      }
    ],
    "commonMistake": "把分子與分母分別相加成九分之二，未先統一單位分數。",
    "concept": "異分母分數先通分再加減。",
    "tags": [
      "數與量",
      "分數加減",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-compare"
    ],
    "authoringIntent": "基本異分母加法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "abca77ce9fe9e1dfe00b92ff9fc7de120a835ecad5bc36aeb39725b20a217943",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s009-v002",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "5/8-1/4 等於多少？",
    "choices": [
      "1/8",
      "3/8",
      "4/4",
      "1/2"
    ],
    "answerIndex": 1,
    "explanation": "先將四分之一改寫成八分之二，才能與八分之五使用相同單位。計算 5/8-2/8=3/8，分子三與分母八互質，所以答案已最簡，且結果小於原來的八分之五。",
    "steps": [
      "選公分母 8，把 1/4 通分為 2/8。",
      "同分母相減 5/8-2/8=3/8。",
      "確認 gcd(3,8)=1，結果不需再約分。"
    ],
    "optionAnalysis": [
      {
        "choice": "1/8",
        "truth": false,
        "reason": "只減分子得到4/8後又錯約。"
      },
      {
        "choice": "3/8",
        "truth": true,
        "reason": "3/8正確。"
      },
      {
        "choice": "4/4",
        "truth": false,
        "reason": "分母不能相減成4。"
      },
      {
        "choice": "1/2",
        "truth": false,
        "reason": "5/8-2/8不是4/8。"
      }
    ],
    "commonMistake": "只把原分子五減一而保留八，或把兩個分母也相減，皆未正確通分。",
    "concept": "同分母後只加減分子。",
    "tags": [
      "數與量",
      "分數加減",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-compare"
    ],
    "authoringIntent": "基本分數減法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "45c6a1225e94ad8da9b87da25929c8b782482d860f0937e23fc6955353f96193",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s009-v003",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "-2/5+1/5 等於多少？",
    "choices": [
      "3/5",
      "-3/5",
      "-1/5",
      "1/5"
    ],
    "answerIndex": 2,
    "explanation": "兩個分數分母同為五，可直接把帶號分子相加。負二加一等於負一，因此結果是 -1/5；正的一份只能抵消負的兩份中的一份。",
    "steps": [
      "確認兩分數分母同為 5，不需通分。",
      "計算帶號分子 -2+1=-1。",
      "保留分母 5，得到 -1/5。"
    ],
    "optionAnalysis": [
      {
        "choice": "3/5",
        "truth": false,
        "reason": "把符號忽略後相加。"
      },
      {
        "choice": "-3/5",
        "truth": false,
        "reason": "把+1誤作-1。"
      },
      {
        "choice": "-1/5",
        "truth": true,
        "reason": "-1/5正確。"
      },
      {
        "choice": "1/5",
        "truth": false,
        "reason": "只取正數方向。"
      }
    ],
    "commonMistake": "忽略負二的符號，把兩個分子當正數相加而得到正五分之三。",
    "concept": "同分母帶號分數按整數規則合併分子。",
    "tags": [
      "數與量",
      "分數加減",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-compare"
    ],
    "authoringIntent": "處理帶負號的分數加法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8222034e1191c941795f177778f8ebbf84155fb2512a4b8882c97523b1736efd",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s009-v004",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "3/4-(1/2-1/8) 等於多少？",
    "choices": [
      "1/8",
      "1/4",
      "7/8",
      "3/8"
    ],
    "answerIndex": 3,
    "explanation": "先算括號內 1/2-1/8=4/8-1/8=3/8。外層 3/4=6/8，再計算 6/8-3/8=3/8，所以原式等於八分之三。由內向外每次只處理一層，可防止外部減號被錯誤分配，也便於逐步核對。",
    "steps": [
      "由內向外先算括號，得到 1/2-1/8=3/8。",
      "將外層 3/4 通分為 6/8。",
      "完成 6/8-3/8=3/8。"
    ],
    "optionAnalysis": [
      {
        "choice": "1/8",
        "truth": false,
        "reason": "把3/4與括號首項直接相減。"
      },
      {
        "choice": "1/4",
        "truth": false,
        "reason": "錯把括號內算成1/2。"
      },
      {
        "choice": "7/8",
        "truth": false,
        "reason": "錯把減括號當加括號。"
      },
      {
        "choice": "3/8",
        "truth": true,
        "reason": "3/8正確。"
      }
    ],
    "commonMistake": "未先算括號便把外面的減號分配錯誤，導致八分之一的符號改錯。",
    "concept": "有括號的分數運算先處理括號。",
    "tags": [
      "數與量",
      "分數加減",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-compare"
    ],
    "authoringIntent": "含括號的加減。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "9424d626669e9fcb7b2b581079f824637e77f4c589d83f7bad21921057610455",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s009-v005",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "-3/4+5/6 等於多少？",
    "choices": [
      "1/12",
      "-1/12",
      "19/12",
      "-19/12"
    ],
    "answerIndex": 0,
    "explanation": "四與六的最小公倍數是十二，通分得 -3/4=-9/12、5/6=10/12。帶號分子相加 -9+10=1，因此結果為正的 1/12。正六分之五的絕對值較大，抵消後保留一份正方向。",
    "steps": [
      "取公分母 12，通分為 -9/12 與 10/12。",
      "計算帶號分子 -9+10=1。",
      "保留分母 12，得到最簡分數 1/12。"
    ],
    "optionAnalysis": [
      {
        "choice": "1/12",
        "truth": true,
        "reason": "-9+10=1，得1/12。"
      },
      {
        "choice": "-1/12",
        "truth": false,
        "reason": "符號方向相反。"
      },
      {
        "choice": "19/12",
        "truth": false,
        "reason": "把絕對值相加。"
      },
      {
        "choice": "-19/12",
        "truth": false,
        "reason": "相加後保留負號。"
      }
    ],
    "commonMistake": "把兩個分數絕對值直接相加成十二分之十九，沒有處理異號抵消。",
    "concept": "通分後依整數加法處理分子。",
    "tags": [
      "數與量",
      "分數加減",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-compare"
    ],
    "authoringIntent": "異號分數相加。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "7206877c16f4fe3643e397e135b4e2ce84a151d9f32674a3fffcd3fb768ce638",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s009-v006",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "2又1/3+1又5/6 等於多少？",
    "choices": [
      "3又1/6",
      "4又1/6",
      "4又5/6",
      "3又5/6"
    ],
    "answerIndex": 1,
    "explanation": "整數部分先合為三，分數部分 1/3=2/6，所以 2/6+5/6=7/6=1又1/6。把進位的一加回整數三，得到 4又1/6。分數和超過一，進位步驟不能省略，答案也已化簡。",
    "steps": [
      "通分分數部分，將 1/3 改寫為 2/6。",
      "分數相加 2/6+5/6=7/6=1又1/6。",
      "整數部分 2+1 再加進位 1，得到 4又1/6。"
    ],
    "optionAnalysis": [
      {
        "choice": "3又1/6",
        "truth": false,
        "reason": "漏掉分數進位。"
      },
      {
        "choice": "4又1/6",
        "truth": true,
        "reason": "4又1/6正確。"
      },
      {
        "choice": "4又5/6",
        "truth": false,
        "reason": "分數相加錯誤。"
      },
      {
        "choice": "3又5/6",
        "truth": false,
        "reason": "沒有進位且分數錯。"
      }
    ],
    "commonMistake": "分數部分超過一後沒有進位，只把整數相加而答成三又六分之七。",
    "concept": "帶分數加法需處理分數部分的進位。",
    "tags": [
      "數與量",
      "分數加減",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-compare"
    ],
    "authoringIntent": "帶分數加法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "bfc255bd5c20ffac757825d290f81733326a9cc95dd742f8f69fb270d3e36591",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s009-v007",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 x=5/12-(-7/18)，則 x 等於多少？",
    "choices": [
      "1/36",
      "1/18",
      "29/36",
      "-29/36"
    ],
    "answerIndex": 2,
    "explanation": "減去負十八分之七等於加上正十八分之七。以三十六為公分母，5/12=15/36、7/18=14/36，相加得到 29/36。兩個正分數相加後結果為正，也符合符號檢查。",
    "steps": [
      "先把 5/12-(-7/18) 改寫為 5/12+7/18。",
      "通分為 15/36+14/36。",
      "相加分子得到 x=29/36，且已是最簡分數。"
    ],
    "optionAnalysis": [
      {
        "choice": "1/36",
        "truth": false,
        "reason": "把分子相減。"
      },
      {
        "choice": "1/18",
        "truth": false,
        "reason": "通分或符號處理錯。"
      },
      {
        "choice": "29/36",
        "truth": true,
        "reason": "29/36正確。"
      },
      {
        "choice": "-29/36",
        "truth": false,
        "reason": "結果應為正。"
      }
    ],
    "commonMistake": "看到兩個負號仍做分子相減，沒有先將減去負數轉成加上相反數。",
    "concept": "減去負分數等於加上其相反數。",
    "tags": [
      "數與量",
      "分數加減",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-compare"
    ],
    "authoringIntent": "處理減負分數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "20096ba60816776167ad9a4e26a136f92c1982bbc3f058885f9b7e8a2b8b8ce7",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s009-v008",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "計算 1-［2/3-(1/4+1/6)］。",
    "choices": [
      "1/4",
      "5/12",
      "7/12",
      "3/4"
    ],
    "answerIndex": 3,
    "explanation": "由最內層開始，1/4+1/6=5/12；接著 2/3-5/12=8/12-5/12=1/4。最後算 1-1/4=3/4，所以結果為四分之三。三層運算依序收合，外層的一直到最後才參與計算，因此不會漏項。",
    "steps": [
      "先算小括號 1/4+1/6=5/12。",
      "再算中括號 2/3-5/12=1/4。",
      "最後計算 1-1/4=3/4。"
    ],
    "optionAnalysis": [
      {
        "choice": "1/4",
        "truth": false,
        "reason": "這是中括號內的值。"
      },
      {
        "choice": "5/12",
        "truth": false,
        "reason": "通分或最後一步錯。"
      },
      {
        "choice": "7/12",
        "truth": false,
        "reason": "漏減一部分。"
      },
      {
        "choice": "3/4",
        "truth": true,
        "reason": "3/4正確。"
      }
    ],
    "commonMistake": "從最外層先算一減三分之二，破壞括號指定的由內向外順序。",
    "concept": "多層括號由內而外計算。",
    "tags": [
      "數與量",
      "分數加減",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-compare"
    ],
    "authoringIntent": "多層分數加減。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e8e4c2fc1facfa94677b5b65c906297e8f9169121165c6621968c2e8841a1557",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s009-v009",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "a=7/10、b=-3/5，則 a-b 的值為何？",
    "choices": [
      "13/10",
      "1/10",
      "-13/10",
      "4/10"
    ],
    "answerIndex": 0,
    "explanation": "代入後 a-b=7/10-(-3/5)，減去負數改為加上正數。將 3/5 通分成 6/10，得到 7/10+6/10=13/10。結果大於一，與正數減負數後數值增加而非減少的方向一致，且符號正確。",
    "steps": [
      "代入 a=7/10、b=-3/5，列出 7/10-(-3/5)。",
      "改寫為 7/10+3/5，再將 3/5 通分成 6/10。",
      "相加得到 13/10。"
    ],
    "optionAnalysis": [
      {
        "choice": "13/10",
        "truth": true,
        "reason": "減負得加，13/10正確。"
      },
      {
        "choice": "1/10",
        "truth": false,
        "reason": "把-3/5直接加成-6/10。"
      },
      {
        "choice": "-13/10",
        "truth": false,
        "reason": "a-b是減去負數，結果應為正；-13/10的符號錯誤。"
      },
      {
        "choice": "4/10",
        "truth": false,
        "reason": "只做7-3。"
      }
    ],
    "commonMistake": "把 b 的負號忽略，直接計算十分之七減五分之三而得到十分之一。",
    "concept": "代數式中的減法也要保留括號與符號。",
    "tags": [
      "數與量",
      "分數加減",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-compare"
    ],
    "authoringIntent": "分數代入與減法。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "2a89a3f80e22b31887b32cb58f7980f148d4db73393fc79b36a4a24c62eed1bf",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s009-v010",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "水箱原有全容量的 3/5，上午用掉 1/4 全容量，下午補進 1/10 全容量。最後有全容量的多少？",
    "choices": [
      "7/20",
      "9/20",
      "11/20",
      "13/20"
    ],
    "answerIndex": 1,
    "explanation": "最後水量以全容量為共同基準，列式 3/5-1/4+1/10。通分為二十分母後是 12/20-5/20+2/20=9/20。上午用掉使水量減少，下午補入再增加，運算方向與情境一致。",
    "steps": [
      "依先用掉再補入列式 3/5-1/4+1/10。",
      "通分為 12/20-5/20+2/20。",
      "由左到右計算得到 9/20 的全容量。"
    ],
    "optionAnalysis": [
      {
        "choice": "7/20",
        "truth": false,
        "reason": "漏算補水。"
      },
      {
        "choice": "9/20",
        "truth": true,
        "reason": "9/20正確。"
      },
      {
        "choice": "11/20",
        "truth": false,
        "reason": "把用掉當加。"
      },
      {
        "choice": "13/20",
        "truth": false,
        "reason": "把所有量相加。"
      }
    ],
    "commonMistake": "只計算上午用掉後的二十分之七，漏掉下午補進的十分之一。",
    "concept": "情境變化要先決定正負再通分。",
    "tags": [
      "數與量",
      "分數加減",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-compare"
    ],
    "authoringIntent": "水量的分數加減。",
    "literacyContextNecessity": "初始水量、用掉與補進三筆相對全容量的資料都參與最後量計算。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "27535f8938e5d5d8d2bd118f567406b8063f70026db6a439cb9e51ee3d923780",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s009-v011",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一段路第一天完成 2/7，第二天完成 3/14。兩天後尚未完成的比例是多少？",
    "choices": [
      "5/14",
      "6/14",
      "7/14",
      "9/14"
    ],
    "answerIndex": 2,
    "explanation": "兩天已完成比例是 2/7+3/14=4/14+3/14=7/14。未完成部分用整體一減已完成，14/14-7/14=7/14，也就是二分之一。已完成與未完成恰好各占整體一半，兩者合計仍為一。",
    "steps": [
      "先通分並相加兩天完成量，得到 7/14。",
      "用整體 14/14 減去已完成 7/14。",
      "得到尚未完成 7/14，與選項表示一致。"
    ],
    "optionAnalysis": [
      {
        "choice": "5/14",
        "truth": false,
        "reason": "5/14是錯誤差值。"
      },
      {
        "choice": "6/14",
        "truth": false,
        "reason": "6/14少算一天。"
      },
      {
        "choice": "7/14",
        "truth": true,
        "reason": "7/14正確。"
      },
      {
        "choice": "9/14",
        "truth": false,
        "reason": "9/14大於剩餘。"
      }
    ],
    "commonMistake": "只算兩天完成比例便直接作答，沒有依問句再用整體一扣除已完成量。",
    "concept": "剩餘比例=1-累計完成比例。",
    "tags": [
      "數與量",
      "分數加減",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-compare"
    ],
    "authoringIntent": "求工作剩餘比例。",
    "literacyContextNecessity": "兩天完成比例與『尚未完成』要求共同決定先加後補至1的兩步運算。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ac800d2e0e6ee9612829b1cfe031a4c51e7a1321478ae51ef05b073bb3caaf99",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s009-v012",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "食譜需要 2又1/4 杯麵粉，現有 1又2/3 杯，還缺多少杯？",
    "choices": [
      "5/12 杯",
      "3/4 杯",
      "11/12 杯",
      "7/12 杯"
    ],
    "answerIndex": 3,
    "explanation": "缺少量等於需要量減現有量。將帶分數化為假分數，2又1/4=9/4、1又2/3=5/3；通分後 27/12-20/12=7/12 杯。正的差值也符合現有麵粉少於需要量，所得差額合理。",
    "steps": [
      "依缺少量列式 2又1/4-1又2/3。",
      "化為 9/4-5/3，再通分成 27/12-20/12。",
      "相減得到還缺 7/12 杯。"
    ],
    "optionAnalysis": [
      {
        "choice": "5/12 杯",
        "truth": false,
        "reason": "差少2/12。"
      },
      {
        "choice": "3/4 杯",
        "truth": false,
        "reason": "3/4杯比正確差額多。"
      },
      {
        "choice": "11/12 杯",
        "truth": false,
        "reason": "接近一杯但不符。"
      },
      {
        "choice": "7/12 杯",
        "truth": true,
        "reason": "7/12杯正確。"
      }
    ],
    "commonMistake": "把現有量減需要量導致負值，沒有先依情境確定較大需要量應放在前面。",
    "concept": "帶分數可化假分數後通分相減。",
    "tags": [
      "數與量",
      "分數加減",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-compare"
    ],
    "authoringIntent": "食譜缺量計算。",
    "literacyContextNecessity": "需求量與現有量都以杯為單位，『還缺』明確指定以需求減現有。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "cd6f0da3aa7e141200deecbe7dc8b7639c869f0f4f4752827e4b03f1bb80601b",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u02-s009-cr001",
    "unitId": "u02",
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "計算 2又3/4-［1又1/6-(5/8-1/3)］，寫出每一步。",
    "requiredWork": [
      "由內向外。",
      "通分與約分完整。"
    ],
    "fullCreditSolution": [
      "先算最內層，將八分之五與三分之一通分後相減，得到二十四分之七。",
      "一又六分之一化為二十四分之二十八，所以中括號相減得二十四分之二十一，約成八分之七。",
      "二又四分之三化成八分之二十二，最後減八分之七得八分之十五，也就是一又八分之七。"
    ],
    "alternativeSolutions": [
      "也可全式通分24後計算。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "每層括號與答案1又7/8正確。"
      },
      {
        "score": 2,
        "criteria": "方法正確但一處算術小錯。"
      },
      {
        "score": 1,
        "criteria": "能正確完成最內層並建立後續。"
      },
      {
        "score": 0,
        "criteria": "忽略括號或分母直接相加。"
      }
    ],
    "scoringNotes": [
      "最終可寫15/8。"
    ],
    "commonErrors": [
      "從最外層先減一又六分之一，沒有遵守括號由內向外。",
      "將一又六分之一錯換為二十八分之二十四，混淆整數與分母。",
      "最後得到八分之十五後沒有辨認分子分母位置，或未化回一又八分之七。"
    ],
    "independentReview": {
      "derivedResult": "1又7/8。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "108eee73ba92c970fb0b940eb809c92b7e4dbc820b2a8412db2adf1f90de8a0e",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reasoningSteps": [
      "依括號由內向外，先完成八分之五減三分之一。",
      "將中括號兩項通分後相減並約成八分之七。",
      "把外層帶分數化成假分數，通分相減後再化回帶分數。"
    ]
  },
  {
    "questionId": "u02-s009-cr002",
    "unitId": "u02",
    "topicId": "u02-fraction-ops",
    "skillId": "fraction-add-subtract",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "水箱初有容量的 7/10，先用掉容量的 1/4，再補入容量的 2/15。求最後比例，並判斷是否超過 3/5。",
    "requiredWork": [
      "三項以總容量為同一基準。",
      "計算最後比例。",
      "與3/5比較。"
    ],
    "fullCreditSolution": [
      "三項都以水箱總容量為基準，最後比例列為 7/10-1/4+2/15。",
      "以六十為公分母，帶號分子四十二減十五再加八得三十五，約分後最後比例為 7/12。",
      "比較 7/12 與 3/5：交叉積 7×5=35<36=3×12，所以未超過 3/5。"
    ],
    "alternativeSolutions": [
      "可先算7/10-1/4=9/20，再加2/15。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "7/12及未超過3/5均正確。"
      },
      {
        "score": 2,
        "criteria": "最後比例正確但比較說明不足。"
      },
      {
        "score": 1,
        "criteria": "列式正確但算術未完成。"
      },
      {
        "score": 0,
        "criteria": "把用掉當加或基準誤讀。"
      }
    ],
    "scoringNotes": [
      "題目三比例均明確佔總容量。"
    ],
    "commonErrors": [
      "把補入十五分之二理解成剩餘水量的十五分之二，擅自改變題目共同基準。",
      "只算出最後比例十二分之七，沒有繼續回應是否超過五分之三。",
      "比較時只看分子七大於三便判超過，忽略兩個分母不同。"
    ],
    "independentReview": {
      "derivedResult": "最後7/12，未超過3/5。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "f2f66e0386a5e3db64162203c2f3e31517598a894960fe35f9e7cfb0992e98f2",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reasoningSteps": [
      "依使用與補入方向建立同一總容量基準的加減式。",
      "通分後由左到右計算最後水量比例並約分。",
      "用交叉相乘精確比較最後比例與五分之三，完整回答是否超過。"
    ]
  }
];

export const DRAWING_SPECS = [];
