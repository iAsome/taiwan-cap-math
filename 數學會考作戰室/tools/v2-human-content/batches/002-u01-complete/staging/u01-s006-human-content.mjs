// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u01-s006-lecture-r1",
  "unitId": "u01",
  "topicId": "u01-integer-basics",
  "skillId": "integer-absolute-value-basic",
  "title": "絕對值的基本意義：只看離 0 多遠",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能把絕對值解釋為到 0 的距離。",
    "能計算正數、負數與 0 的絕對值。",
    "能區分絕對值與原數。",
    "能解出 |x|=a 的整數解。",
    "能正確處理絕對值外的負號。"
  ],
  "prerequisites": [
    {
      "skillId": "integer-opposite-number",
      "requiredLevel": "能辨認相反數與原點對稱，並區分方向和距離大小。"
    }
  ],
  "glossary": [
    {
      "term": "絕對值",
      "definition": "一個數在數線上到 0 的距離。"
    },
    {
      "term": "距離",
      "definition": "兩位置間的長度，不帶負號。"
    },
    {
      "term": "絕對值符號",
      "definition": "以兩條直線包住數或算式，例如 |-7|。"
    },
    {
      "term": "等距點",
      "definition": "到同一基準距離相同的點。"
    }
  ],
  "notation": [
    {
      "symbol": "|a|",
      "meaning": "a 到 0 的距離。"
    },
    {
      "symbol": "|a|≥0",
      "meaning": "任何數的絕對值都不小於 0。"
    },
    {
      "symbol": "|x|=k",
      "meaning": "x 到 0 的距離是 k；k>0 時通常有正負兩個解。"
    }
  ],
  "conceptNarrative": [
    "一個數的絕對值是它在數線上到原點的距離。距離沒有正負方向，所以絕對值一定大於或等於零；正數與它的相反數到原點等距，因此兩者絕對值相同。",
    "計算單一整數的絕對值時，正數與零保持原值，負數則得到對應的正距離。若絕對值直條外還有負號，必須先算直條內，再處理外部取負。",
    "方程式中絕對值等於正數代表原點左右各有一個等距位置，通常有正負兩解；絕對值不等式則可轉成到原點距離的區間。溫差、誤差與變化幅度都以絕對值表達相差多少。"
  ],
  "formalDefinitions": [
    {
      "name": "絕對值",
      "statement": "|a| 是 a 與 0 在數線上的距離。"
    },
    {
      "name": "非負性",
      "statement": "對任何 a，|a|≥0。"
    },
    {
      "name": "分段規則",
      "statement": "a≥0 時 |a|=a；a<0 時 |a|=-a。"
    }
  ],
  "formulas": [
    {
      "formula": "|a|=a（a≥0）",
      "conditions": [
        "a 為非負數"
      ],
      "meaning": "右側或原點位置的距離等於坐標本身。"
    },
    {
      "formula": "|a|=-a（a<0）",
      "conditions": [
        "a 為負數"
      ],
      "meaning": "把負坐標改成正距離。"
    }
  ],
  "nonApplicableCases": [
    "距離不能是負數，因此 |x|=-3 無解。",
    "|a| 不一定等於 a；只有 a≥0 時成立。",
    "|a+b| 通常不等於 |a|+|b|。",
    "絕對值符號外的運算必須在取絕對值後再做。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先確認絕對值直條涵蓋的完整算式，只在直條內部先做必要運算。",
      "check": "區分直條內外的負號，外部符號不可提前被絕對值消去。"
    },
    {
      "step": 2,
      "instruction": "把直條內結果解讀為到原點的距離，正數與零不變，負數改成對應正值。",
      "check": "單純絕對值的結果必為非負數；若得到負值，表示尚未正確取距離。"
    },
    {
      "step": 3,
      "instruction": "絕對值算完後，再依原式處理直條外的負號、加減或比較符號。",
      "check": "重抄化簡後的完整式子，避免漏掉外部運算。"
    },
    {
      "step": 4,
      "instruction": "遇到絕對值等於正數時，在原點左右列出兩個等距候選，再套用附加條件篩選。",
      "check": "代回每個候選，確認絕對值符合，並檢查是否因正負條件排除其中一個。"
    },
    {
      "step": 5,
      "instruction": "遇到絕對值不等式或情境差距時，改寫成以原點或目標值為中心的距離區間。",
      "check": "嚴格小於不含端點，不大於則含端點；情境答案要附單位且不帶方向符號。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "u01-s006-example-a",
      "prompt": "計算負十八的絕對值。",
      "answer": "十八。",
      "why": "負十八在數線原點左側十八個單位，絕對值只計算位置到原點的距離，不保留向左的方向。因此距離為十八，結果必須是非負的十八。"
    },
    {
      "exampleId": "u01-s006-example-b",
      "prompt": "計算負的負九絕對值。",
      "answer": "負九。",
      "why": "先算直條內負九的絕對值，得到到原點的距離九；原式直條外還有一個負號，接著對九取負才得到負九，不能把外部負號一併消去。"
    },
    {
      "exampleId": "u01-s006-example-c",
      "prompt": "解方程式甲的絕對值等於六。",
      "answer": "甲等於六或負六。",
      "why": "絕對值等於六表示甲到原點距離為六。數線上原點右側六個單位是正六，左側六個單位是負六，兩者代回後絕對值都等於六。"
    },
    {
      "exampleId": "u01-s006-ex04-r4",
      "prompt": "計算 -|-7|。",
      "answer": "-7。",
      "why": "先處理絕對值直條內的 -7，到零距離是 7，所以 |-7|=7；最前面的負號位於直條外仍須保留，最後得到 -7，而不是 7，兩層運算的順序不能互換。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "認為絕對值就是一律把數字前的負號刪掉。",
      "correction": "先用到原點距離理解直條內容；直條外的負號仍須在絕對值之後處理。"
    },
    {
      "mistake": "把絕對值等於正數只寫出正的一個原數。",
      "correction": "距離原點同樣遠的位置通常有左右兩個，應列出正負兩解再套條件。"
    },
    {
      "mistake": "認為零的絕對值必須是正數而不是零。",
      "correction": "零就在原點，到原點距離為零；絕對值是非負，不是一定為正。"
    },
    {
      "mistake": "比較絕對值時直接比較原本帶號數的大小。",
      "correction": "先分別算出每個到零的非負距離，再比較所得距離，不能跳過取絕對值。"
    },
    {
      "mistake": "把嚴格小於與不大於的端點處理成相同。",
      "correction": "小於不含距離恰等於界限的點，不大於則包含兩側端點，列整數時尤其要核對。"
    },
    {
      "mistake": "把直條外的負號也一起消去，將 -|-7| 算成 7。",
      "correction": "絕對值只作用在直條內；先算出內部距離 7，再由外部負號取其相反數。"
    }
  ],
  "selfCheck": [
    "絕對值是否代表距離？",
    "答案是否非負？",
    "外層符號是否另行處理？",
    "|x|=正數時是否有兩個方向？",
    "我是否先算符號內部？"
  ],
  "summary": [
    "|a| 是 a 到 0 的距離。",
    "絕對值永遠不小於 0。",
    "負數取絕對值後成為正距離。",
    "|x|=k（k>0）有 x=±k。"
  ],
  "connections": {
    "previous": "先備技能是相反數，需知道對稱點與方向相反。",
    "next": [
      "絕對值與距離會把基準從 0 推廣到任意兩點。",
      "整數加減可用絕對值比較變化量大小。",
      "大小比較不能只看絕對值，仍須保留原數方向。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u01-s006-v001",
      "u01-s006-v002",
      "u01-s006-v003",
      "u01-s006-v004",
      "u01-s006-v005",
      "u01-s006-v006",
      "u01-s006-v007",
      "u01-s006-v008",
      "u01-s006-v009",
      "u01-s006-v010",
      "u01-s006-v011",
      "u01-s006-v012"
    ],
    "constructedResponseIds": [
      "u01-s006-cr001",
      "u01-s006-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐項檢查絕對值先算內部、結果非負及外層負號；含 |x|=a 的雙解與 a=0 邊界。",
    "reviewVersion": "human-lecture-review-r2.1",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "e36473a43435782b2b07d8503ce7501f9bea5a5f36f6dcbe95f6cad6a589fa0b",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
};

export const QUESTIONS = [
  {
    "questionId": "u01-s006-v001",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "|-8| 的值是多少？",
    "choices": [
      "8",
      "-8",
      "0",
      "16"
    ],
    "answerIndex": 0,
    "explanation": "絕對值表示一個數在數線上到原點的距離，距離不帶方向且不會是負數。負八到原點相隔八個單位，所以負八的絕對值等於八。",
    "steps": [
      "在數線上定位負八，位於原點左側八個單位。",
      "取到原點的距離，只保留八個單位而不保留左向符號。",
      "寫出負八的絕對值為八，並檢查結果非負。"
    ],
    "optionAnalysis": [
      {
        "choice": "8",
        "truth": true,
        "reason": "|-8|=8。"
      },
      {
        "choice": "-8",
        "truth": false,
        "reason": "-8是坐標，不是距離。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "-8不在原點。"
      },
      {
        "choice": "16",
        "truth": false,
        "reason": "16是-8與8的距離。"
      }
    ],
    "commonMistake": "把絕對值直條當成括號，照抄負八而得到負的距離。",
    "concept": "負數的絕對值是對應正距離。",
    "tags": [
      "數與量",
      "絕對值基本意義",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-opposite-number"
    ],
    "authoringIntent": "計算負整數的絕對值。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "2cadc47e4523913e214375bca2aa09e382f0a779f3918c692bea23d582c2351c",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s006-v002",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "|0| 的值是多少？",
    "choices": [
      "不存在",
      "0",
      "-1",
      "1"
    ],
    "answerIndex": 1,
    "explanation": "零就在數線原點上，因此零到原點的距離是零個單位。依絕對值的距離定義，零的絕對值等於零；它既不需改成正數，也不可能變成負數。",
    "steps": [
      "定位零的位置，確認它與原點是同一點。",
      "計算該點到原點的距離為零。",
      "依距離定義寫出零的絕對值為零，並確認結果非負。"
    ],
    "optionAnalysis": [
      {
        "choice": "不存在",
        "truth": false,
        "reason": "0有絕對值。"
      },
      {
        "choice": "0",
        "truth": true,
        "reason": "0到0距離0，答案0。"
      },
      {
        "choice": "-1",
        "truth": false,
        "reason": "|-1|=1，不是0。"
      },
      {
        "choice": "1",
        "truth": false,
        "reason": "|1|=1，不是0。"
      }
    ],
    "commonMistake": "誤認絕對值一定要大於零，因而把零的絕對值寫成一或其他正數。",
    "concept": "0的絕對值是0。",
    "tags": [
      "數與量",
      "絕對值基本意義",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-opposite-number"
    ],
    "authoringIntent": "辨認絕對值的零值邊界。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ff4c677db87437d7e957f9b974c317390b4641e15a204710e624596ebb63c19a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s006-v003",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "下列哪一個等式正確？",
    "choices": [
      "|-5|=-5",
      "|4|=-4",
      "|-5|=5",
      "|0|=1"
    ],
    "answerIndex": 2,
    "explanation": "負五到原點的距離是五，所以負五的絕對值等於五。絕對值的結果必為非負數，不能保留原本負號；其餘不符合距離定義的等式都應排除。",
    "steps": [
      "把負五解讀為原點左側五個單位的位置。",
      "取該位置到原點的距離，得到五。",
      "檢查等式右側為非負的五，選出負五的絕對值等於五。"
    ],
    "optionAnalysis": [
      {
        "choice": "|-5|=-5",
        "truth": false,
        "reason": "絕對值不為負。"
      },
      {
        "choice": "|4|=-4",
        "truth": false,
        "reason": "正數4的絕對值是4。"
      },
      {
        "choice": "|-5|=5",
        "truth": true,
        "reason": "只有|-5|=5成立。"
      },
      {
        "choice": "|0|=1",
        "truth": false,
        "reason": "0到0距離為0。"
      }
    ],
    "commonMistake": "以為絕對值只是把數放進直條中，未把負五轉成到原點的正距離五。",
    "concept": "絕對值必為非負。",
    "tags": [
      "數與量",
      "絕對值基本意義",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-opposite-number"
    ],
    "authoringIntent": "從多個敘述辨認絕對值規則。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "87dfd9751aef3fba29f055417412779778b0253fab0cd846c64467c59d14e59a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s006-v004",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 |x|=5，則 x 的可能值為何？",
    "choices": [
      "只有 5",
      "只有 -5",
      "0 或 5",
      "5 或 -5"
    ],
    "answerIndex": 3,
    "explanation": "絕對值等於五表示 x 到原點的距離是五。數線上距離原點五個單位有左右兩個位置，分別是正五與負五，因此 x 可能是五或負五，不能只取正的一個。",
    "steps": [
      "把 x 的絕對值等於五翻成 x 到原點距離為五。",
      "在原點右側五個單位得到 x 等於五。",
      "在原點左側五個單位得到 x 等於負五，合併為兩個解。"
    ],
    "optionAnalysis": [
      {
        "choice": "只有 5",
        "truth": false,
        "reason": "漏掉左側解。"
      },
      {
        "choice": "只有 -5",
        "truth": false,
        "reason": "漏掉右側解。"
      },
      {
        "choice": "0 或 5",
        "truth": false,
        "reason": "0距離不是5。"
      },
      {
        "choice": "5 或 -5",
        "truth": true,
        "reason": "x=±5。"
      }
    ],
    "commonMistake": "只記得絕對值結果是正數，便漏掉原數可以位於原點左側的負五。",
    "concept": "|x|=正數通常有一對相反數解。",
    "tags": [
      "數與量",
      "絕對值基本意義",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-opposite-number"
    ],
    "authoringIntent": "由固定絕對值找兩個整數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "6c0a52b4fe98c9d1a47c42dd2d1146f068ab661a9343eb9503d5de982c6b3ed7",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s006-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "比較 |-9| 與 |6|，下列何者正確？",
    "choices": [
      "|-9|>|6|",
      "|-9|<|6|",
      "|-9|=|6|",
      "無法比較"
    ],
    "answerIndex": 0,
    "explanation": "先分別計算絕對值：負九到原點距離是九，而六到原點距離是六。比較兩個非負距離可得九大於六，所以負九的絕對值大於六的絕對值。",
    "steps": [
      "計算負九的絕對值，得到九。",
      "計算六的絕對值，得到六。",
      "比較九與六，將結果寫回原式得到大於關係。"
    ],
    "optionAnalysis": [
      {
        "choice": "|-9|>|6|",
        "truth": true,
        "reason": "9>6，因此第一項。"
      },
      {
        "choice": "|-9|<|6|",
        "truth": false,
        "reason": "方向相反。"
      },
      {
        "choice": "|-9|=|6|",
        "truth": false,
        "reason": "9不等於6。"
      },
      {
        "choice": "無法比較",
        "truth": false,
        "reason": "兩值皆可算。"
      }
    ],
    "commonMistake": "直接比較原數負九與六，沒有先各自取絕對值便錯選小於。",
    "concept": "比較絕對值就是比較到0的距離。",
    "tags": [
      "數與量",
      "絕對值基本意義",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-opposite-number"
    ],
    "authoringIntent": "先取絕對值再比較。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d9247626d59b578486daa2d0448cfb030ad210d976345eba6d06f57f15a88ca5",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s006-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "-|-4| 的值是多少？",
    "choices": [
      "4",
      "-4",
      "0",
      "-8"
    ],
    "answerIndex": 1,
    "explanation": "運算順序要先算絕對值直條內的負四，得到正四；再處理直條外的負號，表示取四的相反數，因此最後結果是負四。外面的負號不在絕對值內。",
    "steps": [
      "先計算負四的絕對值，得到四。",
      "保留原式最外面的負號，式子化為負的四。",
      "得到負四，並檢查沒有誤把外部負號一併消去。"
    ],
    "optionAnalysis": [
      {
        "choice": "4",
        "truth": false,
        "reason": "漏掉外層負號。"
      },
      {
        "choice": "-4",
        "truth": true,
        "reason": "-|-4|=-(4)=-4。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "不是相反數相加。"
      },
      {
        "choice": "-8",
        "truth": false,
        "reason": "把4加倍。"
      }
    ],
    "commonMistake": "把直條外的負號也包進絕對值，因而只留下正四而漏算最後取負。",
    "concept": "絕對值外的負號是另一個運算。",
    "tags": [
      "數與量",
      "絕對值基本意義",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-opposite-number"
    ],
    "authoringIntent": "區分符號內外的運算順序。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f9fb3cc79ad7ee59ddd7315b4cfabc186a910d6229dd4e446e83d616cdc83114",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s006-v007",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "已知 a<0 且 |a|=3，則 a 等於多少？",
    "choices": [
      "3 或 -3",
      "0",
      "-3",
      "3"
    ],
    "answerIndex": 2,
    "explanation": "a 的絕對值是三，表示 a 到原點距離三，因此候選為正三或負三。題目另給 a 小於零，排除正三，只剩位於原點左側的負三。",
    "steps": [
      "由 a 的絕對值等於三列出 a 可能是三或負三。",
      "使用 a 小於零的附加條件，排除正三。",
      "保留負三並代回，確認其絕對值為三且確實小於零。"
    ],
    "optionAnalysis": [
      {
        "choice": "3 或 -3",
        "truth": false,
        "reason": "未使用負數條件。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "絕對值不為3。"
      },
      {
        "choice": "-3",
        "truth": true,
        "reason": "候選±3，負數條件選-3。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "不符合a<0。"
      }
    ],
    "commonMistake": "只由絕對值等於三回答正負三兩個值，忽略題目已限定 a 是負數。",
    "concept": "附加符號條件可從一對相反數解中選一個。",
    "tags": [
      "數與量",
      "絕對值基本意義",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-opposite-number"
    ],
    "authoringIntent": "結合絕對值方程與不等條件。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "7c0fcf3f7626e2aa2e1751cdf4c7ee71ea72956c2607fbc248bbb1bb29e3b849",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s006-v008",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "整數 x 滿足 |x|<2，共有幾個可能值？",
    "choices": [
      "1 個",
      "2 個",
      "4 個",
      "3 個"
    ],
    "answerIndex": 3,
    "explanation": "x 的絕對值小於二表示 x 到原點距離嚴格少於二。介於負二與二之間的整數只有負一、零、一，共三個；端點負二與二因為是不包含的嚴格不等式，不能計入。",
    "steps": [
      "把絕對值小於二改寫成負二小於 x 且 x 小於二。",
      "列出開區間內的整數負一、零與一。",
      "確認負二與二的絕對值等於二不合條件，因此總數為三。"
    ],
    "optionAnalysis": [
      {
        "choice": "1 個",
        "truth": false,
        "reason": "只算0。"
      },
      {
        "choice": "2 個",
        "truth": false,
        "reason": "漏掉0或一側。"
      },
      {
        "choice": "4 個",
        "truth": false,
        "reason": "錯把端點納入。"
      },
      {
        "choice": "3 個",
        "truth": true,
        "reason": "x∈{-1,0,1}，3個。"
      }
    ],
    "commonMistake": "把小於看成小於或等於，將兩個端點也列入而算成五個整數。",
    "concept": "|x|<k表示x位於-k與k之間。",
    "tags": [
      "數與量",
      "絕對值基本意義",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-opposite-number"
    ],
    "authoringIntent": "把絕對值不等條件轉成整數區間。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e04eb7b5d9594fdc36e3aedf6475e48f01e9877312ab1cd4e24521f2bb964eed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s006-v009",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "|-7|-|2| 的值是多少？",
    "choices": [
      "5",
      "-5",
      "9",
      "-9"
    ],
    "answerIndex": 0,
    "explanation": "先算兩個絕對值，負七到原點距離為七，正二到原點距離為二。原式因此化為七減二，結果是五；不能把負七直接拿去減二。",
    "steps": [
      "計算負七的絕對值為七。",
      "計算二的絕對值為二，原式變成七減二。",
      "完成減法得到五，並檢查兩個直條都已先處理。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": true,
        "reason": "7-2=5。"
      },
      {
        "choice": "-5",
        "truth": false,
        "reason": "把減法次序反轉。"
      },
      {
        "choice": "9",
        "truth": false,
        "reason": "把兩值相加。"
      },
      {
        "choice": "-9",
        "truth": false,
        "reason": "保留錯誤負號。"
      }
    ],
    "commonMistake": "保留負七的負號後算成負九，忘記絕對值先把距離轉為非負數。",
    "concept": "分開的絕對值符號要各自計算，再做外部運算。",
    "tags": [
      "數與量",
      "絕對值基本意義",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-opposite-number"
    ],
    "authoringIntent": "處理兩個絕對值的差。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "cdd74b2432c5f9a875f22914488e88a76bc83e52db00b6db80b4845f582f4755",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s006-v010",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "機器目標溫度為 250°C，實際溫度為 243°C。若只問「與目標相差多少」，答案為何？",
    "choices": [
      "-7°C",
      "7°C",
      "243°C",
      "493°C"
    ],
    "answerIndex": 1,
    "explanation": "與目標值的差距只問相差多少，不問高低方向，所以取實際值二百四十三減目標值二百五十的絕對值。差為負七，絕對值是七度，表示相差七度。",
    "steps": [
      "用實際值減目標值，列出二百四十三減二百五十等於負七。",
      "對差值取絕對值，將方向差負七轉成距離七。",
      "補上題目單位，答案為七度並核對不帶負號。"
    ],
    "optionAnalysis": [
      {
        "choice": "-7°C",
        "truth": false,
        "reason": "-7是帶號偏差，不是無方向差距。"
      },
      {
        "choice": "7°C",
        "truth": true,
        "reason": "|243-250|=7°C。"
      },
      {
        "choice": "243°C",
        "truth": false,
        "reason": "是實際溫度。"
      },
      {
        "choice": "493°C",
        "truth": false,
        "reason": "把兩溫度相加。"
      }
    ],
    "commonMistake": "把實際值較低理解成差距也要寫負七，忽略相差多少代表非負距離。",
    "concept": "絕對值把帶號偏差轉成無方向差距。",
    "tags": [
      "數與量",
      "絕對值基本意義",
      "literacy"
    ],
    "estimatedTimeSec": "80",
    "prerequisiteSkillIds": [
      "integer-opposite-number"
    ],
    "authoringIntent": "區分偏差方向與允差大小。",
    "literacyContextNecessity": "目標值、實際值與問題用語「相差多少」共同決定是否取絕對值。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f077835ca9fe612f071ead5a11b9c986d482c99fe382b2d3587e69f9a3876971",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s006-v011",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "甲隊分數變化為 -12，乙隊為 +5。兩隊變化量的「大小」相差多少？",
    "choices": [
      "17",
      "-7",
      "7",
      "-17"
    ],
    "answerIndex": 2,
    "explanation": "變化量負十二的幅度是十二，正五的幅度是五；幅度只比較到零的距離，所以分別取絕對值。兩個幅度相差十二減五等於七，答案為七。",
    "steps": [
      "取負十二的絕對值得到第一個變化幅度十二。",
      "取正五的絕對值得到第二個變化幅度五。",
      "以較大幅度減較小幅度，十二減五得到七。"
    ],
    "optionAnalysis": [
      {
        "choice": "17",
        "truth": false,
        "reason": "17是兩原值距離，不是大小差。"
      },
      {
        "choice": "-7",
        "truth": false,
        "reason": "差距不帶負號。"
      },
      {
        "choice": "7",
        "truth": true,
        "reason": "12與5相差7。"
      },
      {
        "choice": "-17",
        "truth": false,
        "reason": "錯誤負號。"
      }
    ],
    "commonMistake": "直接用負十二減正五得到負十七，混淆帶方向的變化量與變化幅度。",
    "concept": "「變化量的大小」先各取絕對值，再比較。",
    "tags": [
      "數與量",
      "絕對值基本意義",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-opposite-number"
    ],
    "authoringIntent": "辨認原值距離與絕對值大小差的不同問題。",
    "literacyContextNecessity": "隊伍、帶號變化與「大小相差」這個措辭都不可刪除。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "7fe185ae201d61eae6b47bf09f9e94d64d8e3770aac11e7fb9e179899a12a0e8",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s006-v012",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "感測器規定偏差的絕對值不得超過 4。四次偏差依序為 3、-4、0、-5，哪一次超出規定？",
    "choices": [
      "第一次",
      "第二次",
      "第三次",
      "第四次"
    ],
    "answerIndex": 3,
    "explanation": "逐筆取偏差的絕對值，可得三、四、零、五。題目要求絕對值不大於四，前三筆都符合，第四筆的五超過四，因此不符合的是第四筆。",
    "steps": [
      "把四筆偏差三、負四、零、負五分別取絕對值。",
      "得到三、四、零、五，逐一與上限四比較。",
      "只有第四筆的五大於四，所以選擇第四筆。"
    ],
    "optionAnalysis": [
      {
        "choice": "第一次",
        "truth": false,
        "reason": "3未超過4。"
      },
      {
        "choice": "第二次",
        "truth": false,
        "reason": "4等於上限，未超過。"
      },
      {
        "choice": "第三次",
        "truth": false,
        "reason": "0未超過。"
      },
      {
        "choice": "第四次",
        "truth": true,
        "reason": "正確，|-5|=5。"
      }
    ],
    "commonMistake": "只檢查原偏差是否大於四，因負五本身小於四而錯把第四筆判為合格。",
    "concept": "允差通常比較絕對偏差，不比較原偏差大小。",
    "tags": [
      "數與量",
      "絕對值基本意義",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-opposite-number"
    ],
    "authoringIntent": "依絕對值上限篩選異常紀錄。",
    "literacyContextNecessity": "允差規則與四筆偏差都參與判斷，等於上限不算超過。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d1c03fba5c40116e12a18dd1a322c09bcf223d91098f62fbf6fa405d15454077",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u01-s006-cr001",
    "unitId": "u01",
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "計算並說明：|-13|、|0|、-|7|、-|-6|。每一項都要指出絕對值符號內外的處理順序。",
    "requiredWork": [
      "四項都需有過程。",
      "外層負號必須在取絕對值後處理。"
    ],
    "fullCreditSolution": [
      "先算每個絕對值：負十三到原點距離為十三，所以負十三的絕對值是十三；零的絕對值仍是零。",
      "七的絕對值為七，再保留外面的負號得到負七；負六的絕對值為六，再保留外面的負號得到負六。",
      "四個結果依序為十三、零、負七、負六。關鍵是先算直條內的距離，再處理直條外的負號，不能一次消去。"
    ],
    "alternativeSolutions": [
      "可用「距離」說明前兩項，用運算順序說明後兩項。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "四項答案與內外順序說明全部正確。"
      },
      {
        "score": 2,
        "criteria": "四項答案正確但說明略缺；或一項符號小錯。"
      },
      {
        "score": 1,
        "criteria": "至少兩項正確且知道絕對值非負。"
      },
      {
        "score": 0,
        "criteria": "大多把外層負號消去或認為絕對值可負。"
      }
    ],
    "scoringNotes": [
      "-|7|與-|-6|的結果都為負，不可因絕對值而刪除外層負號。"
    ],
    "commonErrors": [
      "把負十三的負號保留在絕對值結果中，錯把距離寫成負十三。",
      "將直條外的負號也納入絕對值，因而把負七與負六錯寫成正數。",
      "未逐項依先絕對值後外部符號的順序計算，導致多層符號互相混淆。"
    ],
    "independentReview": {
      "derivedResult": "13、0、-7、-6。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "819a3b52f298bce3db134cc86479c8df6c8d932dff222a99679e1e23743a6963",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reasoningSteps": [
      "逐項先處理絕對值直條，得到十三、零、七與六。",
      "只對原式直條外另有負號的後兩項取負，得到負七與負六。",
      "依題目原順序寫出十三、零、負七、負六，並檢查絕對值本身皆非負。"
    ]
  },
  {
    "questionId": "u01-s006-cr002",
    "unitId": "u01",
    "topicId": "u01-integer-basics",
    "skillId": "integer-absolute-value-basic",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "列出所有滿足 |x|≤3 的整數 x，並求這些整數的總和。請用數線對稱解釋總和。",
    "requiredWork": [
      "端點±3包含。",
      "只列整數。",
      "解釋相反數配對。"
    ],
    "fullCreditSolution": [
      "x 的絕對值不大於三，表示 x 到原點的距離最多三個單位，等價於負三小於或等於 x 且 x 小於或等於三。",
      "在這個閉區間內逐一列出整數為負三、負二、負一、零、一、二、三，兩個端點因為可以等於而都要保留。",
      "成對相加負三與三、負二與二、負一與一都抵消為零，再加中央的零，因此全部整數總和為零。"
    ],
    "alternativeSolutions": [
      "可直接逐項相加，但須補充對稱解釋才得滿分。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "七個整數、總和0與對稱配對說明完整。"
      },
      {
        "score": 2,
        "criteria": "七個整數與總和正確但對稱說明不完整。"
      },
      {
        "score": 1,
        "criteria": "列出大部分正確整數或知道總和因對稱為0。"
      },
      {
        "score": 0,
        "criteria": "端點與範圍理解錯誤，無有效結果。"
      }
    ],
    "scoringNotes": [
      "≤包含-3與3。"
    ],
    "commonErrors": [
      "把不大於看成小於，錯誤排除負三與三而少列兩個整數。",
      "只列正整數與零，忘記同距離的負整數也符合絕對值條件。",
      "逐項相加時符號出錯，沒有利用正負三、正負二、正負一成對抵消。"
    ],
    "independentReview": {
      "derivedResult": "x=-3至3的所有整數，總和0。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "972d7b9df35052d95534855a374e27b382840b293da583085586a0501dc65b3d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reasoningSteps": [
      "把絕對值不等式改寫為包含端點的區間負三到三。",
      "依序列出區間內七個整數，確認沒有漏掉零或兩個端點。",
      "利用相反數成對抵消，三組和皆為零，最後總和仍是零。"
    ]
  }
];

export const DRAWING_SPECS = [];
