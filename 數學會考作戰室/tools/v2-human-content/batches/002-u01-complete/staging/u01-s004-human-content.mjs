// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u01-s004-lecture-r1",
  "unitId": "u01",
  "topicId": "u01-integer-basics",
  "skillId": "integer-number-comparison",
  "title": "數的大小比較：用數線和符號建立正確順序",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能使用數線判斷兩數大小。",
    "能比較兩個負整數。",
    "能把多個整數由小到大或由大到小排列。",
    "能正確使用 >、<、=。",
    "能從情境資料判斷最高、最低與差異方向。"
  ],
  "prerequisites": [
    {
      "skillId": "integer-number-line-position",
      "requiredLevel": "能在數線上定位整數，並知道數線上越靠右的數越大。"
    }
  ],
  "glossary": [
    {
      "term": "大於",
      "definition": "在數線上位於另一數右方。"
    },
    {
      "term": "小於",
      "definition": "在數線上位於另一數左方。"
    },
    {
      "term": "遞增排列",
      "definition": "由小到大排列。"
    },
    {
      "term": "遞減排列",
      "definition": "由大到小排列。"
    },
    {
      "term": "負數比較",
      "definition": "兩負數中，離 0 較近者較大。"
    }
  ],
  "notation": [
    {
      "symbol": ">",
      "meaning": "左邊的數大於右邊的數，開口朝較大者。"
    },
    {
      "symbol": "<",
      "meaning": "左邊的數小於右邊的數，尖端朝較小者。"
    },
    {
      "symbol": "=",
      "meaning": "兩邊表示同一數值。"
    }
  ],
  "conceptNarrative": [
    "整數大小可以放回數線理解：數線由左向右遞增，因此右邊的數永遠比左邊大。零是正數與負數的分界，任何正數都大於零，任何負數都小於零。",
    "比較兩個負數時，不能直接沿用正整數的表面數字大小。負數離零越遠，在數線上越靠左，數值反而越小；例如負十比負四小。",
    "處理多個整數或生活情境時，先把溫度、高度、餘額等量轉成帶正負號的數，再依負數、零、正數分區排序，可避免把大小與絕對值混為一談。"
  ],
  "formalDefinitions": [
    {
      "name": "數線比較原則",
      "statement": "數線上較右方的點所代表的數較大。"
    },
    {
      "name": "負整數順序",
      "statement": "兩個負整數中，絕對值較小者較大。"
    }
  ],
  "formulas": [
    {
      "formula": "正數 > 0 > 負數",
      "conditions": [
        "比較的是實數"
      ],
      "meaning": "先依正負分層。"
    },
    {
      "formula": "若 a、b<0 且 |a|<|b|，則 a>b",
      "conditions": [
        "a、b 都是負數"
      ],
      "meaning": "負數比較時絕對值順序反轉。"
    }
  ],
  "nonApplicableCases": [
    "只有在兩數都為負時，才可用絕對值較小者較大。",
    "比較近似數時必須先確認精確度；本節以整數為主。",
    "不能把不等號當箭頭讀，必須看開口與尖端。",
    "情境中的「較低」若基準不同，先換成同一基準再比較。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先辨認每個數的正負號，並以零把負數、零、正數分成三區。",
      "check": "確認所有負數都排在零左側，所有正數都排在零右側。"
    },
    {
      "step": 2,
      "instruction": "若比較異號數，直接利用正數大於零、零大於負數判斷。",
      "check": "不要因負數的表面數字較大，就誤判它大於正數或零。"
    },
    {
      "step": 3,
      "instruction": "若兩數皆為負數，比較它們到零的距離，距離較遠者數值較小。",
      "check": "用數線位置核對：絕對值較大的負數應在更左邊。"
    },
    {
      "step": 4,
      "instruction": "多數排序先排負數，再接零與正數，並依題目要求選擇由小到大或由大到小。",
      "check": "完成後逐對檢查相鄰兩數的不等號方向是否一致。"
    },
    {
      "step": 5,
      "instruction": "情境題把地點、帳戶或測量名稱換成帶號數完成比較，再把結果翻回原名稱。",
      "check": "答案要回應題目問的最高、最低、最大或最小，並保留正確單位。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "u01-s004-example-a",
      "prompt": "比較負十四與負六的大小。",
      "answer": "負十四小於負六。",
      "why": "兩數都是負數，負十四到零的距離十四比負六的距離六更大，所以負十四在數線上更靠左。數線左邊的數較小，因此負十四小於負六。"
    },
    {
      "exampleId": "u01-s004-example-b",
      "prompt": "將五、負八、零、負三由小到大排列。",
      "answer": "負八小於負三小於零小於五。",
      "why": "先把兩個負數放在零之前，正五放在零之後。負八比負三離零更遠，因此負八較小；依數線由左到右接上零與五，就得到完整順序。"
    },
    {
      "exampleId": "u01-s004-example-c",
      "prompt": "冷凍庫甲為負十二度、乙為負四度，哪一個溫度較高？",
      "answer": "乙的溫度較高。",
      "why": "溫度較高就是帶號數較大。負四比負十二更接近零，在數線上位於負十二右側，所以負四度較高；不能因十二的表面數字較大便選甲。"
    },
    {
      "exampleId": "u01-s004-ex04-r4",
      "prompt": "甲帳戶餘額為 -250 元，乙帳戶餘額為 -80 元，哪一個餘額較大？",
      "answer": "乙帳戶的 -80 元較大。",
      "why": "兩個餘額都是負數，先比較到零的距離；八十比二百五十小，所以負八十在數線上較靠右，原數較大，表示乙帳戶欠款較少。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "去掉負號後直接比較表面數字，認為負十二大於負四。",
      "correction": "兩個負數要看數線位置；離零越遠越靠左，原數反而越小。"
    },
    {
      "mistake": "把原數大小與絕對值大小混在一起。",
      "correction": "原數比較看左右位置，絕對值只表示到零距離，兩者問題不同。"
    },
    {
      "mistake": "排序時未確認題目要求由小到大或由大到小。",
      "correction": "先在草稿標示方向，排完後逐對讀出不等號以核對順序。"
    },
    {
      "mistake": "把零當成正數，忽略它是正負數的分界。",
      "correction": "零本身既非正數也非負數，但大於所有負數且小於所有正數。"
    },
    {
      "mistake": "情境題只比較沒有正負號的量值，漏看低於零或欠款的方向。",
      "correction": "先把每筆資料完整寫成帶號數，再依整數規則比較並換回情境名稱。"
    },
    {
      "mistake": "看到金額的絕對值 250 較大，就判定 -250 元的餘額較大。",
      "correction": "餘額大小比較的是帶號數，不是欠款量；負數離零越遠，在數線上反而越小。"
    }
  ],
  "selfCheck": [
    "我先分辨正、零、負了嗎？",
    "兩個負數是否用數線思考？",
    "不等號開口朝較大者嗎？",
    "排列方向符合題目嗎？",
    "情境基準一致嗎？"
  ],
  "summary": [
    "數線越右數值越大。",
    "正數>0>負數。",
    "兩負數中離 0 較近者較大。",
    "不等號開口朝較大數。"
  ],
  "connections": {
    "previous": "先備技能是數線位置，需能判斷左右與坐標。",
    "next": [
      "相反數會比較關於 0 對稱的兩數。",
      "絕對值能描述與 0 的距離，但不能單獨取代原數大小。",
      "整數運算結果可用大小關係估算是否合理。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u01-s004-v001",
      "u01-s004-v002",
      "u01-s004-v003",
      "u01-s004-v004",
      "u01-s004-v005",
      "u01-s004-v006",
      "u01-s004-v007",
      "u01-s004-v008",
      "u01-s004-v009",
      "u01-s004-v010",
      "u01-s004-v011",
      "u01-s004-v012"
    ],
    "constructedResponseIds": [
      "u01-s004-cr001",
      "u01-s004-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "以數線順序重新檢查正數、0 和負數，特別核對兩個負數的反向絕對值規則與不等號方向。",
    "reviewVersion": "human-lecture-review-r2.1",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "927b5394d09a881d97695bee606cc52df98738cf60fb5c39027aebe2c6ac09bd",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
};

export const QUESTIONS = [
  {
    "questionId": "u01-s004-v001",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-comparison",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一個關係正確？",
    "choices": [
      "-2<3",
      "-2>3",
      "3<0",
      "0<-2"
    ],
    "answerIndex": 0,
    "explanation": "在數線上，負數位於零的左側，正數位於零的右側，所以任何負數都小於任何正數。由於負二是負數而三是正數，可判定負二小於三，其餘關係都與數線位置矛盾。",
    "steps": [
      "先辨認負二在零的左側，而三在零的右側。",
      "套用數線上右邊的數大於左邊的數，得到三大於負二。",
      "把關係改寫為負二小於三，並核對這正是所選選項。"
    ],
    "optionAnalysis": [
      {
        "choice": "-2<3",
        "truth": true,
        "reason": "-2在0左、3在0右，故-2<3。"
      },
      {
        "choice": "-2>3",
        "truth": false,
        "reason": "負數不大於正數。"
      },
      {
        "choice": "3<0",
        "truth": false,
        "reason": "正數3不小於0。"
      },
      {
        "choice": "0<-2",
        "truth": false,
        "reason": "0大於-2。"
      }
    ],
    "commonMistake": "只看到二小於三便忽略負號，未用零分隔正數與負數來判斷。",
    "concept": "正數>0>負數。",
    "tags": [
      "數與量",
      "數的大小比較",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-line-position"
    ],
    "authoringIntent": "直接比較一正一負。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d21a1c6a85aa83f3b3bd81f8844fec24f25b0d31ec49c6f85c8f93372a610e49",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s004-v002",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-comparison",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "-8、-3、-11、-5 中，最大的數是哪一個？",
    "choices": [
      "-8",
      "-3",
      "-11",
      "-5"
    ],
    "answerIndex": 1,
    "explanation": "四個數都是負數，越靠近零的數越大。它們到零的距離依序為八、三、十一、五，其中負三距離零最近，因此負三最大，而不是絕對值最大的負十一。",
    "steps": [
      "確認四個候選數全都小於零，不能用正數的表面數字直接比較。",
      "比較它們與零的距離，三是八、三、十一、五之中的最小值。",
      "負數距離零越近越大，所以選擇負三。"
    ],
    "optionAnalysis": [
      {
        "choice": "-8",
        "truth": false,
        "reason": "小於-3。"
      },
      {
        "choice": "-3",
        "truth": true,
        "reason": "數線順序-11<-8<-5<-3，最大-3。"
      },
      {
        "choice": "-11",
        "truth": false,
        "reason": "最小而非最大。"
      },
      {
        "choice": "-5",
        "truth": false,
        "reason": "小於-3。"
      }
    ],
    "commonMistake": "把負號暫時去掉後直接選十一，錯把絕對值最大當成原數最大。",
    "concept": "兩負數中絕對值較小者較大。",
    "tags": [
      "數與量",
      "數的大小比較",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-line-position"
    ],
    "authoringIntent": "從多個負整數中找最大值。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "39da7164e666527be69157b9c4e556a10faeff5dfc34273f567d0b2868b89481",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s004-v003",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-comparison",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "將 -7、0、-1 由小到大排列，何者正確？",
    "choices": [
      "0<-1<-7",
      "-1<-7<0",
      "-7<-1<0",
      "-7<0<-1"
    ],
    "answerIndex": 2,
    "explanation": "由小到大就是依數線由左向右排列。負七比負一離零更遠，故負七在負一左邊；兩個負數又都在零左邊，所以完整順序為負七、負一、零。",
    "steps": [
      "先把零視為正負數的分界，兩個負數一定排在零之前。",
      "在負七與負一之間比較，負七距離零較遠，因此較小。",
      "依序寫成負七小於負一小於零，並檢查方向是由小到大。"
    ],
    "optionAnalysis": [
      {
        "choice": "0<-1<-7",
        "truth": false,
        "reason": "方向全部錯。"
      },
      {
        "choice": "-1<-7<0",
        "truth": false,
        "reason": "-1與-7順序錯。"
      },
      {
        "choice": "-7<-1<0",
        "truth": true,
        "reason": "-7最左，-1次之，0最右。"
      },
      {
        "choice": "-7<0<-1",
        "truth": false,
        "reason": "0與-1順序錯。"
      }
    ],
    "commonMistake": "把七大於一直接搬到負數比較，因而誤認負七會大於負一。",
    "concept": "利用數線由左到右排列。",
    "tags": [
      "數與量",
      "數的大小比較",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-line-position"
    ],
    "authoringIntent": "排列兩個負數與0。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ea9d5c286578b70c851c4cd89386323d371f6176c185a83aca57d42a9a79e246",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s004-v004",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-comparison",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "將 4、-6、0、-2 由小到大排列，何者正確？",
    "choices": [
      "4<0<-2<-6",
      "-2<-6<0<4",
      "-6<0<-2<4",
      "-6<-2<0<4"
    ],
    "answerIndex": 3,
    "explanation": "先依數線分成負數、零、正數三區，負數都在零之前，正四在零之後。兩個負數中，負六比負二更靠左，因此由小到大是負六、負二、零、四。",
    "steps": [
      "把負六與負二放在零左側，正四放在零右側。",
      "比較兩個負數，負六離零較遠，所以負六小於負二。",
      "接上零與正四，得到負六小於負二小於零小於四。"
    ],
    "optionAnalysis": [
      {
        "choice": "4<0<-2<-6",
        "truth": false,
        "reason": "順序反向。"
      },
      {
        "choice": "-2<-6<0<4",
        "truth": false,
        "reason": "兩負數順序錯。"
      },
      {
        "choice": "-6<0<-2<4",
        "truth": false,
        "reason": "0與-2順序錯。"
      },
      {
        "choice": "-6<-2<0<4",
        "truth": true,
        "reason": "數線由左到右為-6,-2,0,4。"
      }
    ],
    "commonMistake": "只按六、二、零、四的表面大小排序，沒有先處理負號與零的位置。",
    "concept": "多數排序先分正、零、負。",
    "tags": [
      "數與量",
      "數的大小比較",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-line-position"
    ],
    "authoringIntent": "排列正負整數與0。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "17b5a47973cc57b9fdc4054aecd0ff9c8a126da674f070cc95cc217601fbd1ed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s004-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-comparison",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "svg",
    "figureId": "fig-u01-s004-v005",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "依圖判斷 A、B 的大小關係。",
    "choices": [
      "B>A",
      "A>B",
      "A=B",
      "無法比較"
    ],
    "answerIndex": 0,
    "explanation": "圖上點 A 代表負五，點 B 代表負一。數線由左向右數值遞增，負一位在負五右側，所以 B 所代表的數大於 A 所代表的數，應寫成 B 大於 A。",
    "steps": [
      "由圖讀出 A 的位置是負五，B 的位置是負一。",
      "觀察 B 在 A 的右方，套用數線右邊的數較大。",
      "把位置關係轉成代數關係，得到 B 大於 A。"
    ],
    "optionAnalysis": [
      {
        "choice": "B>A",
        "truth": true,
        "reason": "-1>-5，因此B>A。"
      },
      {
        "choice": "A>B",
        "truth": false,
        "reason": "與數線位置相反。"
      },
      {
        "choice": "A=B",
        "truth": false,
        "reason": "坐標不同。"
      },
      {
        "choice": "無法比較",
        "truth": false,
        "reason": "圖中刻度充分。"
      }
    ],
    "commonMistake": "只比較標記名稱或到零的格數，沒有先讀出兩點在數線上的實際位置。",
    "concept": "數線越右的數越大。",
    "tags": [
      "數與量",
      "數的大小比較",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-line-position"
    ],
    "authoringIntent": "從數線圖比較兩個負數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0348c98702adfb6fbce0edc886e77371e9a94db1e970dd9502b6f1365ee451f5",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s004-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-comparison",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一個不等式正確？",
    "choices": [
      "-9<-12",
      "-12<-9",
      "-4>2",
      "0<-1"
    ],
    "answerIndex": 1,
    "explanation": "負十二與負九都是負數；在負數範圍內，距離零越遠的數越小。負十二比負九多向左三個單位，因此負十二小於負九，這個不等式符合數線次序。",
    "steps": [
      "確認要比較的是負十二與負九，兩者都在零左側。",
      "比較到零的距離，十二大於九，所以負十二的位置更靠左。",
      "依左小右大寫出負十二小於負九，選出正確不等式。"
    ],
    "optionAnalysis": [
      {
        "choice": "-9<-12",
        "truth": false,
        "reason": "方向相反。"
      },
      {
        "choice": "-12<-9",
        "truth": true,
        "reason": "-12<-9，其他三項均違反正負順序。"
      },
      {
        "choice": "-4>2",
        "truth": false,
        "reason": "負數-4不大於正數2。"
      },
      {
        "choice": "0<-1",
        "truth": false,
        "reason": "0大於-1。"
      }
    ],
    "commonMistake": "看到十二大於九就直接寫負十二大於負九，忽略負數的次序相反。",
    "concept": "負數越遠離0越小。",
    "tags": [
      "數與量",
      "數的大小比較",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-line-position"
    ],
    "authoringIntent": "辨認唯一正確不等式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "45bfa0ba18ad06825eaf6e4e226c1c934c711e8bb1d4f687522d2e60e778ff17",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s004-v007",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-comparison",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "已知 a<0 且 b>0，下列何者一定成立？",
    "choices": [
      "a>b",
      "a=b",
      "b>a",
      "|a|<b"
    ],
    "answerIndex": 2,
    "explanation": "已知 a 小於零，表示 a 是負數；b 大於零，表示 b 是正數。任何正數都大於任何負數，因此無論兩數離零多遠，b 一定大於 a；兩者絕對值則無法由題目比較。",
    "steps": [
      "由 a 小於零判定 a 位於數線零的左側。",
      "由 b 大於零判定 b 位於數線零的右側。",
      "利用右側數大於左側數，確定 b 大於 a 且不需知道實際數值。"
    ],
    "optionAnalysis": [
      {
        "choice": "a>b",
        "truth": false,
        "reason": "與正負順序相反。"
      },
      {
        "choice": "a=b",
        "truth": false,
        "reason": "正負數不可能相等。"
      },
      {
        "choice": "b>a",
        "truth": true,
        "reason": "一定成立。"
      },
      {
        "choice": "|a|<b",
        "truth": false,
        "reason": "例如a=-100,b=1時不成立。"
      }
    ],
    "commonMistake": "自行假設兩數與零的距離，誤把無法確定的絕對值關係當成必然成立。",
    "concept": "只靠符號可確定正數大於負數，但不能確定絕對值。",
    "tags": [
      "數與量",
      "數的大小比較",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-line-position"
    ],
    "authoringIntent": "從條件判斷必然關係。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d0e71197a5af0251eb10d4415f636106ea5e6bed97fbda6e00c4dedac15a0a48",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s004-v008",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-comparison",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "在 -5、-2、-4、-3 四個數中，第二大的數是哪一個？",
    "choices": [
      "-5",
      "-2",
      "-4",
      "-3"
    ],
    "answerIndex": 3,
    "explanation": "四個數皆為負數，越接近零越大。由大到小排列為負二、負三、負四、負五，因此排在第二位的是負三；題目問第二大，不能改成找絕對值第二大。",
    "steps": [
      "比較四數到零的距離，分別是五、二、四、三。",
      "按負數距離零越近越大的規則排成負二、負三、負四、負五。",
      "從由大到小順序取第二個，得到負三。"
    ],
    "optionAnalysis": [
      {
        "choice": "-5",
        "truth": false,
        "reason": "在 -5、-2、-4、-3 中，-5 位於數線最左側，因此不是由大到小排列的第二個數。"
      },
      {
        "choice": "-2",
        "truth": false,
        "reason": "-2 是四個數中最大者，應排第一位，不是第二位。"
      },
      {
        "choice": "-4",
        "truth": false,
        "reason": "第三大。"
      },
      {
        "choice": "-3",
        "truth": true,
        "reason": "-2>-3>-4>-5，第二大-3。"
      }
    ],
    "commonMistake": "把絕對值由大到小排列後取第二個，因而把負號下的大小次序弄反。",
    "concept": "負數排序與絕對值順序相反。",
    "tags": [
      "數與量",
      "數的大小比較",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-line-position"
    ],
    "authoringIntent": "完成全排序後選定名次。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e336e1164febb35c5e57cdd77453c18d6200abb598a36eb7c1daac90d58b53e7",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s004-v009",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-comparison",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "比較 -2026 與 -2025，下列何者正確？",
    "choices": [
      "-2026<-2025",
      "-2026>-2025",
      "兩數相等",
      "無法比較"
    ],
    "answerIndex": 0,
    "explanation": "兩數都是負數，而且負二千零二十六比負二千零二十五離零多一個單位，在數線上更靠左。數線左邊的數較小，所以負二千零二十六小於負二千零二十五。",
    "steps": [
      "確認兩數只有末位相差一，並且都帶負號。",
      "比較到零的距離，二千零二十六較大，故其原數更靠左。",
      "依左小右大寫成負二千零二十六小於負二千零二十五。"
    ],
    "optionAnalysis": [
      {
        "choice": "-2026<-2025",
        "truth": true,
        "reason": "數線上-2026在-2025左方。"
      },
      {
        "choice": "-2026>-2025",
        "truth": false,
        "reason": "方向錯。"
      },
      {
        "choice": "兩數相等",
        "truth": false,
        "reason": "數值不同。"
      },
      {
        "choice": "無法比較",
        "truth": false,
        "reason": "整數可直接比較。"
      }
    ],
    "commonMistake": "忽略共同的負號，沿用正整數比較結果而把不等號方向寫反。",
    "concept": "大絕對值的負數反而較小。",
    "tags": [
      "數與量",
      "數的大小比較",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-number-line-position"
    ],
    "authoringIntent": "比較數值接近的大負整數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3a2a0b9fa813fe3bf94bce82a5d0c49b31c160a3884ff1c594b3bdefde7924fb",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s004-v010",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-comparison",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "四個測站的最低溫依序為甲 -4°C、乙 -9°C、丙 2°C、丁 0°C。哪個測站的最低溫最高？",
    "choices": [
      "甲",
      "丙",
      "乙",
      "丁"
    ],
    "answerIndex": 1,
    "explanation": "最高溫就是溫度數值最大的紀錄。四個溫度中，二度是正數，零度次之，負四度與負九度都更低，因此丙的二度最大，丙所記錄的溫度最高。",
    "steps": [
      "把四筆溫度視為整數負四、負九、二與零。",
      "依正數大於零、零大於負數，先判定二是最大值。",
      "對照二度所屬的紀錄者，得到丙的溫度最高。"
    ],
    "optionAnalysis": [
      {
        "choice": "甲",
        "truth": false,
        "reason": "-4小於2。"
      },
      {
        "choice": "丙",
        "truth": true,
        "reason": "最大值2°C屬丙。"
      },
      {
        "choice": "乙",
        "truth": false,
        "reason": "-9最低。"
      },
      {
        "choice": "丁",
        "truth": false,
        "reason": "0小於2。"
      }
    ],
    "commonMistake": "把負九的九看成最大數字，未把負號代表低於零度納入比較。",
    "concept": "情境中的「最高」仍是比較數值最大。",
    "tags": [
      "數與量",
      "數的大小比較",
      "literacy"
    ],
    "estimatedTimeSec": "80",
    "prerequisiteSkillIds": [
      "integer-number-line-position"
    ],
    "authoringIntent": "判讀多站最低溫資料。",
    "literacyContextNecessity": "測站名稱與各自溫度資料決定比較對象，不能刪除表意。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8111c4f99a21b5bbe12acb5e31b60a698ca0c4b3d020798a6f2f55dbfefc0257",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s004-v011",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-comparison",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "三個帳戶餘額為甲 -1,200 元、乙 -800 元、丙 300 元。下列敘述何者正確？",
    "choices": [
      "甲餘額最大",
      "乙比丙多 1,100 元",
      "丙餘額最大，甲餘額最小",
      "甲與乙都比丙大"
    ],
    "answerIndex": 2,
    "explanation": "帳戶餘額依數值比較，正三百大於所有負餘額，所以丙最大。負一千二百與負八百相比，負一千二百離零較遠而更小，所以甲最小，敘述為丙最大且甲最小。",
    "steps": [
      "先分辨丙為正餘額，甲與乙為負餘額，故丙一定最大。",
      "比較兩個負餘額的欠款程度，負一千二百比負八百更小。",
      "將最大與最小的帳戶名稱合併核對，得到丙最大、甲最小。"
    ],
    "optionAnalysis": [
      {
        "choice": "甲餘額最大",
        "truth": false,
        "reason": "甲最小。"
      },
      {
        "choice": "乙比丙多 1,100 元",
        "truth": false,
        "reason": "乙比丙少1100。"
      },
      {
        "choice": "丙餘額最大，甲餘額最小",
        "truth": true,
        "reason": "300>-800>-1200，故丙最大甲最小。"
      },
      {
        "choice": "甲與乙都比丙大",
        "truth": false,
        "reason": "兩個負餘額都小於丙。"
      }
    ],
    "commonMistake": "用欠款金額的絕對值判斷餘額大小，誤把欠得最多的甲說成最大。",
    "concept": "帳戶餘額依帶號數比較，不依債務絕對值。",
    "tags": [
      "數與量",
      "數的大小比較",
      "literacy"
    ],
    "estimatedTimeSec": "85",
    "prerequisiteSkillIds": [
      "integer-number-line-position"
    ],
    "authoringIntent": "在財務語境中比較負餘額與正餘額。",
    "literacyContextNecessity": "帳戶餘額的正負與三個持有者資料共同決定最大最小。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "aae3c2464708787bf50f2c9d593af9b5b633dcabdd6e54ed211492b27f69c22a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s004-v012",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-comparison",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "地形測量得到河床 -25 公尺、隧道 -18 公尺、地下月台 -3 公尺、山丘 12 公尺。由低到高排列何者正確？",
    "choices": [
      "山丘、月台、隧道、河床",
      "河床、月台、隧道、山丘",
      "隧道、河床、月台、山丘",
      "河床、隧道、月台、山丘"
    ],
    "answerIndex": 3,
    "explanation": "由低到高等同把高度數值由小排到大。負二十五小於負十八，兩者又都小於負三，負三仍小於正十二，因此依序是河床、隧道、月台、山丘。",
    "steps": [
      "把各地點高度寫成負二十五、負十八、負三與正十二。",
      "先排三個負數，距離零越遠越低，順序為負二十五、負十八、負三。",
      "最後接上正十二並換回地點名稱，得到完整由低到高次序。"
    ],
    "optionAnalysis": [
      {
        "choice": "山丘、月台、隧道、河床",
        "truth": false,
        "reason": "由高到低。"
      },
      {
        "choice": "河床、月台、隧道、山丘",
        "truth": false,
        "reason": "-3與-18順序錯。"
      },
      {
        "choice": "隧道、河床、月台、山丘",
        "truth": false,
        "reason": "-18與-25順序錯。"
      },
      {
        "choice": "河床、隧道、月台、山丘",
        "truth": true,
        "reason": "-25<-18<-3<12，對應第四項。"
      }
    ],
    "commonMistake": "把負高度的絕對值由小排到大，造成河床、隧道與月台的順序顛倒。",
    "concept": "海拔可用帶號數直接排序。",
    "tags": [
      "數與量",
      "數的大小比較",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-number-line-position"
    ],
    "authoringIntent": "依帶號高程完成地形順序。",
    "literacyContextNecessity": "四種地形名稱與相對高程都需要參與排序。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e208626208beb44f8ba01f68b0a599b12b1661184444b76583233940dd8e107c",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u01-s004-cr001",
    "unitId": "u01",
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-comparison",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "將 -12、5、0、-3、-9 由小到大排列，並用一句話說明兩個負數比較的規則。",
    "requiredWork": [
      "寫出完整不等式鏈。",
      "規則須能解釋 -12、-9、-3 的順序。"
    ],
    "fullCreditSolution": [
      "先以零為分界：負十二、負三、負九都小於零，零小於正五，所以三個負數排在最前面。",
      "比較三個負數到零的距離，十二最大、九次之、三最小；負數離零越遠，數值反而越小。",
      "因此由小到大排列為負十二、負九、負三、零、五，亦即負十二小於負九小於負三小於零小於五。"
    ],
    "alternativeSolutions": [
      "可畫數線說明，但仍須寫出排列。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "排列完全正確且負數規則清楚。"
      },
      {
        "score": 2,
        "criteria": "排列正確但規則不完整；或只有一個相鄰次序錯但規則正確。"
      },
      {
        "score": 1,
        "criteria": "能正確分出正、零、負，或正確排列三個負數。"
      },
      {
        "score": 0,
        "criteria": "排列大多錯且無有效規則。"
      }
    ],
    "scoringNotes": [
      "不等號方向須與「由小到大」一致。"
    ],
    "commonErrors": [
      "直接按十二、九、三的正數大小排列負數，造成三個負數次序完全相反。",
      "把零放在正五之後，忽略零小於任何正數且大於任何負數。",
      "只寫排列答案卻沒有說明負數離零越遠數值越小的比較理由。"
    ],
    "independentReview": {
      "derivedResult": "-12<-9<-3<0<5。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "0437aa6355579dd1a1faf63a03757107a3789e74bf345764a61bd7e9fb09be49",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reasoningSteps": [
      "先把負數、零與正數分區，確定負數在前、正五在最後。",
      "在負數中按到零距離由大到小排成負十二、負九、負三。",
      "接上零與正五，並以數線由左到右遞增檢查完整次序。"
    ]
  },
  {
    "questionId": "u01-s004-cr002",
    "unitId": "u01",
    "topicId": "u01-integer-basics",
    "skillId": "integer-number-comparison",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "已知整數 x 滿足 -6<x<-1。請列出所有可能的 x，指出其中最大值與最小值，並說明為什麼端點 -6、-1 不包含。",
    "requiredWork": [
      "只列整數。",
      "嚴格不等號端點不得列入。",
      "指出最大、最小。"
    ],
    "fullCreditSolution": [
      "不等式負六小於 x 且 x 小於負一，表示 x 嚴格位在數線負六與負一之間，兩個端點都不包含。",
      "依數線逐一列出區間內整數為負五、負四、負三、負二，沒有其他整數落在相鄰端點之間。",
      "在這四個整數中，最靠右的負二最大，最靠左的負五最小；負六與負一因嚴格不等號不得列入。"
    ],
    "alternativeSolutions": [
      "可用數線空心點表示端點。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "四個整數、最大最小與端點理由全部正確。"
      },
      {
        "score": 2,
        "criteria": "四個整數正確，但最大最小或端點理由有一項缺漏。"
      },
      {
        "score": 1,
        "criteria": "列出至少三個正確整數並理解端點不含。"
      },
      {
        "score": 0,
        "criteria": "把端點大量納入或無法列出區間內整數。"
      }
    ],
    "scoringNotes": [
      "順序不影響得分，但不得重複或漏值。"
    ],
    "commonErrors": [
      "把嚴格小於誤讀成小於或等於，錯把負六或負一列入答案。",
      "列舉時漏掉負三，沒有按相鄰整數由左向右逐項檢查。",
      "認為絕對值較大的負五也較大，因而把最大值與最小值對調。"
    ],
    "independentReview": {
      "derivedResult": "x=-5,-4,-3,-2；最大-2，最小-5。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "6c6bdde07fd2ba646348fc54c31d4a83d45c25aa1944ef5851474125bb00956a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reasoningSteps": [
      "先把雙重不等式畫成負六與負一之間的開區間。",
      "由左向右列出負五、負四、負三、負二四個整數。",
      "讀取最左與最右元素，得到最小負五、最大負二，並排除兩端點。"
    ]
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "fig-u01-s004-v005",
    "unitId": "u01",
    "skillId": "integer-number-comparison",
    "altText": "數線上 A 位於 -5，B 位於 -1；B 在 A 的右方。",
    "drawingSpec": {
      "canvas": "720×220，viewBox 0 0 720 220",
      "axis": "水平數線 -6 到 2，每格 1，左右箭頭",
      "points": "A 在 -5，B 在 -1；兩點皆以實心圓表示",
      "labels": "A、B 在點上方；整數刻度在下方",
      "lineStyle": "軸與刻度皆黑色實線，無輔助虛線",
      "comparisonRule": "數線越右的數越大",
      "accessibility": "A 坐標 -5，B 坐標 -1，所以 B 大於 A"
    },
    "svgPath": "figures/u01/fig-u01-s004-v005.svg",
    "reviewStatus": "independently-reviewed",
    "svgAssertions": [
      "<circle cx=\"150\" cy=\"110\"",
      ">A</text>",
      "<circle cx=\"430\" cy=\"110\"",
      ">B</text>"
    ],
    "figureReview": {
      "reviewVersion": "human-figure-review-r2.1",
      "coordinateAndScaleCheck": "pass",
      "labelPlacementCheck": "pass",
      "solidDashedLineCheck": "pass",
      "questionConsistencyCheck": "pass",
      "answerLeakCheck": "pass",
      "mobileReadabilityCheck": "pass at 360 CSS px width",
      "accessibilityCheck": "pass: SVG title, desc, role=img and equivalent altText present",
      "reviewNote": "A 與 -5 刻度同在 x=150，B 與 -1 刻度同在 x=430；B 明確位於 A 右方，圖形只提供比較所需位置。",
      "reviewedAt": "2026-07-12",
      "decision": "pass"
    },
    "contentSha256": "cf773a6bb7ec41dc61eecc19932491156f152e28fcc7f1d84aa24617902db732",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];
