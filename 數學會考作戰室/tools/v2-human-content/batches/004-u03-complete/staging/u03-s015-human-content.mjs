// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
// CONTENT AUTHORITY: CHATGPT_HUMAN_AUTHORED_R1
// OLD GENERATED CONTENT MUST NOT BE IMPORTED OR MERGED.
export const LECTURE = {
  "lectureId": "u03-s015-lecture-r1",
  "unitId": "u03",
  "topicId": "u03-linear-equation-reasoning",
  "skillId": "linear-equation-literacy-context",
  "title": "一元一次方程式綜合素養題：從真實規則建立可驗證模型",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能從多段文字、表格或圖示找出已知量與未知量。",
    "能區分初始量、固定變化、按量變化與剩餘量。",
    "能建立一元一次方程式並說明每一項來源。",
    "能以單位、範圍與原情境完成最終驗證。"
  ],
  "prerequisites": [
    {
      "skillId": "linear-equation-plan-comparison",
      "requiredLevel": "能為兩種方案建立總費用式，求同價點並判斷區間。"
    }
  ],
  "glossary": [
    {
      "term": "數學模型",
      "definition": "用式子或方程式表達真實情境中的數量關係。"
    },
    {
      "term": "初始量",
      "definition": "變化開始前已存在的數量。"
    },
    {
      "term": "變化率",
      "definition": "每一單位時間或數量造成的固定增減。"
    },
    {
      "term": "限制條件",
      "definition": "答案必須符合的容量、整數、非負或範圍規則。"
    }
  ],
  "notation": [
    {
      "symbol": "A+rx=T",
      "meaning": "初始量A加每單位變化r乘次數x等於目標T。"
    },
    {
      "symbol": "A-rx=T",
      "meaning": "初始量隨x個單位固定減少後達到T。"
    }
  ],
  "conceptNarrative": [
    "素養題不是在計算題前加故事，而是情境規則真正決定方程式結構。",
    "先把資料依角色分類：初始量、每次變化、固定費、總量、剩餘量。",
    "多階段情境要判斷哪些變化重複x次、哪些只發生一次。",
    "解完後用原情境逐項重建結果，檢查單位、容量與整數性。"
  ],
  "formalDefinitions": [
    {
      "name": "線性累積模型",
      "statement": "目標量=初始量+每次變化×次數。"
    },
    {
      "name": "多層費用模型",
      "statement": "總額=固定部分+按量部分±折抵或剩餘。"
    }
  ],
  "formulas": [
    {
      "formula": "A+rx=T",
      "conditions": [
        "每次變化固定",
        "x為同一單位的次數"
      ],
      "meaning": "固定增加。"
    },
    {
      "formula": "A-rx=T",
      "conditions": [
        "每次減少固定且不跨越題目限制"
      ],
      "meaning": "固定減少。"
    }
  ],
  "nonApplicableCases": [
    "情境中的費率若分段，不能強行用單一線性式。",
    "不同單位未換算前不能放入同一方程式。",
    "資料不足時應判定不能唯一求解。",
    "素養題答案仍需在國中一元一次範圍內，不用高階模型。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "閱讀題目後先寫所求量與單位。",
      "check": "未知數代表什麼？"
    },
    {
      "step": 2,
      "instruction": "將資料分類為初始、固定、變動、目標。",
      "check": "每個數量作用一次或多次？"
    },
    {
      "step": 3,
      "instruction": "用一句話說明等號兩邊代表什麼。",
      "check": "方程式是否符合情境流程？"
    },
    {
      "step": 4,
      "instruction": "解方程式並保留精確單位。",
      "check": "運算是否仍是一元一次？"
    },
    {
      "step": 5,
      "instruction": "回到情境重建總量。",
      "check": "容量、整數與範圍是否通過？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "已有250公斤物資，每天增加18公斤，幾天後達430公斤？",
      "solutionSteps": [
        "250+18x=430。",
        "18x=180。",
        "x=10。"
      ],
      "answer": "10天。"
    },
    {
      "exampleId": "L2",
      "prompt": "水槽160公升，每分鐘淨流出5公升，降到85公升需多久？",
      "solutionSteps": [
        "160-5t=85。",
        "5t=75。",
        "t=15。"
      ],
      "answer": "15分鐘。"
    },
    {
      "exampleId": "L3",
      "prompt": "活動收入每人120元，固定支出1800元，淨收入3000元。",
      "solutionSteps": [
        "120x-1800=3000。",
        "120x=4800。",
        "x=40。"
      ],
      "answer": "40人。"
    },
    {
      "exampleId": "L4",
      "prompt": "方案含10單位，超過每單位25元，超額費150元。",
      "solutionSteps": [
        "超過量150÷25=6。",
        "總量10+6。"
      ],
      "answer": "16單位。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "看到數字就全部相加。",
      "why": "未辨認角色與方向。",
      "correction": "先分類資料。"
    },
    {
      "mistake": "每次變化只算一次。",
      "why": "漏乘時間或次數。",
      "correction": "寫成rx。"
    },
    {
      "mistake": "固定費也乘次數。",
      "why": "混淆固定與變動。",
      "correction": "固定項放在括號外。"
    },
    {
      "mistake": "分段費率當單一費率。",
      "why": "忽略門檻。",
      "correction": "先判斷使用量落在哪一段。"
    },
    {
      "mistake": "解出數字未附單位。",
      "why": "無法確認未知數意義。",
      "correction": "從設未知數開始標示單位。"
    },
    {
      "mistake": "未回到情境驗證。",
      "why": "可能接受超容量或小數人數。",
      "correction": "重建原總量並檢查限制。"
    }
  ],
  "selfCheck": [
    "未知數與單位是否先寫清楚？",
    "每個資料的角色是否分類？",
    "重複變化是否乘次數？",
    "等號兩邊是否代表同一總量？",
    "答案是否回到情境驗證？"
  ],
  "summary": [
    "真正的素養情境決定列式。",
    "初始量與變化率要分開。",
    "每份與整體層級不可混淆。",
    "解後需用情境限制驗收。"
  ],
  "connections": {
    "previous": "整合U03前十四個技能，並使用U01、U02的整數、分數與百分率能力。",
    "next": [
      "下一單元將把未知數擴充為兩個，建立二元一次聯立方程式。",
      "最終模考會以多來源資料與完整作答要求綜合評量。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u03-s015-v001",
      "u03-s015-v002",
      "u03-s015-v003",
      "u03-s015-v004",
      "u03-s015-v005",
      "u03-s015-v006",
      "u03-s015-v007",
      "u03-s015-v008",
      "u03-s015-v009",
      "u03-s015-v010",
      "u03-s015-v011",
      "u03-s015-v012"
    ],
    "constructedResponseIds": [
      "u03-s015-cr001",
      "u03-s015-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "四例分別驗算250+18×10=430、160-5×15=85、120×40-1800=3000、10+150÷25=16；逐項核對初始量、變化率、固定支出與超額門檻。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "0a89ef4bc770df947113a432389e3bf2c8c5d531f9deade4ef45e8018a12d781",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "legacyContentDisposition": "replace-old-lecture-at-final-integration"
};

export const QUESTIONS = [
  {
    "questionId": "u03-s015-v001",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-literacy-context",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "學校原本每天用水 x 噸，節水後每天少用 3 噸，連續 20 天共少用後的用水量為 140 噸。原本每天用水多少噸？",
    "choices": [
      "10",
      "7",
      "13",
      "143"
    ],
    "answerIndex": 0,
    "explanation": "辨認節水後每日量x-3；列20(x-3)=140；解得原每日10噸。所以答案是「10」。",
    "steps": [
      "辨認節水後每日量x-3",
      "列20(x-3)=140",
      "解得原每日10噸"
    ],
    "optionAnalysis": [
      {
        "choice": "10",
        "truth": true,
        "reason": "節水後每天x-3噸，20(x-3)=140，x-3=7，所以x=10。 因此此選項符合題目。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "7是節水後每日量。"
      },
      {
        "choice": "13",
        "truth": false,
        "reason": "把少3噸加到20天總量一次。"
      },
      {
        "choice": "143",
        "truth": false,
        "reason": "把140+3當每日量。"
      }
    ],
    "commonMistake": "總共只減3噸。",
    "concept": "每天減少量要放在乘天數的括號內。",
    "tags": [
      "代數",
      "一元一次方程式綜合素養題",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-plan-comparison"
    ],
    "authoringIntent": "從多日累積量回推節水前每日量。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "71962b3358401595614981225a894a9bd9b29d8d9faf41670696e990491cd369",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s015-v002",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-literacy-context",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "手機方案含 5 GB，超過部分每 GB 30 元。某月帳單超額費 210 元，總用量多少 GB？",
    "choices": [
      "7",
      "12",
      "10",
      "35"
    ],
    "answerIndex": 1,
    "explanation": "超額用量為總量減5；列30(x-5)=210；解得12GB。所以答案是「12」。",
    "steps": [
      "超額用量為總量減5",
      "列30(x-5)=210",
      "解得12GB"
    ],
    "optionAnalysis": [
      {
        "choice": "7",
        "truth": false,
        "reason": "7只是超過量。"
      },
      {
        "choice": "12",
        "truth": true,
        "reason": "超過量設x-5，30(x-5)=210，x-5=7，所以總量x=12GB。 因此此選項符合題目。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "把210÷30後再加3。"
      },
      {
        "choice": "35",
        "truth": false,
        "reason": "把含量5乘單價。"
      }
    ],
    "commonMistake": "把全部用量都按30元計費。",
    "concept": "付費量只計超過5GB部分。",
    "tags": [
      "代數",
      "一元一次方程式綜合素養題",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-plan-comparison"
    ],
    "authoringIntent": "處理免費額度與超額單價。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c879f23d6f5de0c0728bf6e1bd4e56e29ab1dc51d7848d2a274fd1fade799518",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s015-v003",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-literacy-context",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "園遊會門票每張 80 元，場地固定支出 2400 元。若淨收入 5600 元，售出幾張票？",
    "choices": [
      "70",
      "80",
      "100",
      "130"
    ],
    "answerIndex": 2,
    "explanation": "列80x-2400=5600；加回固定支出得8000；除80得100。所以答案是「100」。",
    "steps": [
      "列80x-2400=5600",
      "加回固定支出得8000",
      "除80得100"
    ],
    "optionAnalysis": [
      {
        "choice": "70",
        "truth": false,
        "reason": "只用5600÷80。"
      },
      {
        "choice": "80",
        "truth": false,
        "reason": "把支出當票數。"
      },
      {
        "choice": "100",
        "truth": true,
        "reason": "淨收入=票款-支出，80x-2400=5600，80x=8000，所以x=100。 因此此選項符合題目。"
      },
      {
        "choice": "130",
        "truth": false,
        "reason": "把收入與支出相加後除錯。"
      }
    ],
    "commonMistake": "把淨收入當總票款。",
    "concept": "淨收入需先加回固定支出得到票款。",
    "tags": [
      "代數",
      "一元一次方程式綜合素養題",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-plan-comparison"
    ],
    "authoringIntent": "由淨收入回推銷售量。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "65a800d57bdc907a3f6fdff2bda7cfc60b435514da2dc67aa93e88f494a19697",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s015-v004",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-literacy-context",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "校車原有 x 個座位，已坐 28 人，再上車 7 人後還空 5 位。校車共有幾個座位？",
    "choices": [
      "30",
      "35",
      "45",
      "40"
    ],
    "answerIndex": 3,
    "explanation": "算上車後35人；座位數=已坐+空位；得到40。所以答案是「40」。",
    "steps": [
      "算上車後35人",
      "座位數=已坐+空位",
      "得到40"
    ],
    "optionAnalysis": [
      {
        "choice": "30",
        "truth": false,
        "reason": "只把28+2。"
      },
      {
        "choice": "35",
        "truth": false,
        "reason": "35是已坐人數。"
      },
      {
        "choice": "45",
        "truth": false,
        "reason": "把空位重複加兩次。"
      },
      {
        "choice": "40",
        "truth": true,
        "reason": "已坐28+7=35人，空5位，所以x=35+5=40。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "把空位當成應扣除。",
    "concept": "總容量=使用量+剩餘量。",
    "tags": [
      "代數",
      "一元一次方程式綜合素養題",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-plan-comparison"
    ],
    "authoringIntent": "由已使用與剩餘容量求總容量。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "042af4cda636667d8a3507b9e92b8971cece45d5d3f9d432f13b7db1fbe0d1d9",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s015-v005",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-literacy-context",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "水槽初有 120 公升，每分鐘流入 8 公升，同時流出 3 公升。幾分鐘後有 220 公升？",
    "choices": [
      "10",
      "20",
      "12.5",
      "44"
    ],
    "answerIndex": 1,
    "explanation": "先求淨流量8-3=5；列120+5t=220；解得20分鐘。所以答案是「20」。",
    "steps": [
      "先求淨流量8-3=5",
      "列120+5t=220",
      "解得20分鐘"
    ],
    "optionAnalysis": [
      {
        "choice": "10",
        "truth": false,
        "reason": "只用總差除流入8。"
      },
      {
        "choice": "20",
        "truth": true,
        "reason": "每分鐘淨增加5公升，120+5t=220，5t=100，所以t=20。 因此此選項符合題目。"
      },
      {
        "choice": "12.5",
        "truth": false,
        "reason": "未處理流出。"
      },
      {
        "choice": "44",
        "truth": false,
        "reason": "把220÷5。"
      }
    ],
    "commonMistake": "把兩個流量相加。",
    "concept": "淨變化率=流入率-流出率。",
    "tags": [
      "代數",
      "一元一次方程式綜合素養題",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-plan-comparison"
    ],
    "authoringIntent": "由同時流入流出建立淨變化。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3645fbe6bdb7f90ea85058c49facbfc90bdf5c2e70a68f499498391abb9a9451",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s015-v006",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-literacy-context",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "回收活動已有 180 公斤，之後每天增加 x 公斤，12 天後達 420 公斤。每天增加多少公斤？",
    "choices": [
      "15",
      "25",
      "20",
      "35"
    ],
    "answerIndex": 2,
    "explanation": "扣除已有180；12天新增240；每天20公斤。所以答案是「20」。",
    "steps": [
      "扣除已有180",
      "12天新增240",
      "每天20公斤"
    ],
    "optionAnalysis": [
      {
        "choice": "15",
        "truth": false,
        "reason": "240÷16。"
      },
      {
        "choice": "25",
        "truth": false,
        "reason": "直接420÷12。"
      },
      {
        "choice": "20",
        "truth": true,
        "reason": "180+12x=420，12x=240，所以x=20。 因此此選項符合題目。"
      },
      {
        "choice": "35",
        "truth": false,
        "reason": "把已有量平均進每天。"
      }
    ],
    "commonMistake": "忽略起始已有量。",
    "concept": "總量=初始+天數×每日量。",
    "tags": [
      "代數",
      "一元一次方程式綜合素養題",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-plan-comparison"
    ],
    "authoringIntent": "由初始累積量與每日增加量求速率。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "9525c3aedb669404f9613aec4e110cd7322973ba72d1c669a0df430aeb6fe10d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s015-v007",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-literacy-context",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "冷藏室起始溫度 8°C，每小時下降 1.5°C。經過幾小時會降到－4°C？",
    "choices": [
      "4",
      "6",
      "12",
      "8"
    ],
    "answerIndex": 3,
    "explanation": "列溫度變化式；兩邊減8得-12；除-1.5得8小時。所以答案是「8」。",
    "steps": [
      "列溫度變化式",
      "兩邊減8得-12",
      "除-1.5得8小時"
    ],
    "optionAnalysis": [
      {
        "choice": "4",
        "truth": false,
        "reason": "只算溫差12÷3。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "把下降率當2。"
      },
      {
        "choice": "12",
        "truth": false,
        "reason": "把溫差直接當時間。"
      },
      {
        "choice": "8",
        "truth": true,
        "reason": "8-1.5t=-4，-1.5t=-12，所以t=8。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "負溫度使時間也判成負。",
    "concept": "下降用負變化率。",
    "tags": [
      "代數",
      "一元一次方程式綜合素養題",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-plan-comparison"
    ],
    "authoringIntent": "由線性溫度變化求時間。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0c62300d8bdf152fb555a3e655a69e33520fc5b86f3c56256bef15603d332f48",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s015-v008",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-literacy-context",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "讀書計畫先讀 35 頁，之後每天讀 x 頁，9 天後累計 170 頁。每天讀多少頁？",
    "choices": [
      "15",
      "12",
      "18",
      "22.5"
    ],
    "answerIndex": 0,
    "explanation": "扣除先讀35頁；9天共讀135頁；每天15頁。所以答案是「15」。",
    "steps": [
      "扣除先讀35頁",
      "9天共讀135頁",
      "每天15頁"
    ],
    "optionAnalysis": [
      {
        "choice": "15",
        "truth": true,
        "reason": "35+9x=170，9x=135，所以x=15。 因此此選項符合題目。"
      },
      {
        "choice": "12",
        "truth": false,
        "reason": "135÷11。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "把170÷9。"
      },
      {
        "choice": "22.5",
        "truth": false,
        "reason": "把35頁再加進每日量。"
      }
    ],
    "commonMistake": "把起始頁數平均到每天。",
    "concept": "先讀部分只計一次。",
    "tags": [
      "代數",
      "一元一次方程式綜合素養題",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-plan-comparison"
    ],
    "authoringIntent": "由起始進度與每日進度求每日量。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b70e6222e3049a589b8a8379257effb6834156177f9bcc74cb6d376f2c34d4df",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s015-v009",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-literacy-context",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "影音平台方案每月 180 元，另購電影每部 45 元。某月共付 405 元，購買幾部？",
    "choices": [
      "3",
      "6",
      "5",
      "9"
    ],
    "answerIndex": 2,
    "explanation": "扣月費180；電影費225；225÷45=5部。所以答案是「5」。",
    "steps": [
      "扣月費180",
      "電影費225",
      "225÷45=5部"
    ],
    "optionAnalysis": [
      {
        "choice": "3",
        "truth": false,
        "reason": "225÷75。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "直接405÷45。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "180+45x=405，45x=225，所以x=5。 因此此選項符合題目。"
      },
      {
        "choice": "9",
        "truth": false,
        "reason": "把月費當電影部數。"
      }
    ],
    "commonMistake": "總費用直接除單價。",
    "concept": "先扣固定費再求離散部數。",
    "tags": [
      "代數",
      "一元一次方程式綜合素養題",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-plan-comparison"
    ],
    "authoringIntent": "固定訂閱費與按部計費。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f932f6efb5d2b120fa953d5104097d3bb88ae4b327ade12eb963c565bf56e9fe",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s015-v010",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-literacy-context",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "營養飲每瓶含 12 克蛋白質，另加一份 18 克蛋白粉。若總蛋白質 90 克，需要幾瓶飲料？",
    "choices": [
      "5",
      "7",
      "9",
      "6"
    ],
    "answerIndex": 3,
    "explanation": "扣蛋白粉18克；飲料提供72克；72÷12=6瓶。所以答案是「6」。",
    "steps": [
      "扣蛋白粉18克",
      "飲料提供72克",
      "72÷12=6瓶"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": false,
        "reason": "72÷14。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "直接90÷12向下取整。"
      },
      {
        "choice": "9",
        "truth": false,
        "reason": "把18克算成一瓶。"
      },
      {
        "choice": "6",
        "truth": true,
        "reason": "12x+18=90，12x=72，所以x=6。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "把固定添加量平均後任意取整。",
    "concept": "蛋白粉只加一次。",
    "tags": [
      "代數",
      "一元一次方程式綜合素養題",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-plan-comparison"
    ],
    "authoringIntent": "由固定添加量回推瓶數。",
    "literacyContextNecessity": "瓶裝蛋白質與單次蛋白粉來源不同，情境決定12x+18而非30x。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ccf6e00371c3a1b6a4497658c9db0876f6e2cbdceeca0387033d661e564f4df4",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s015-v011",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-literacy-context",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "社區目前每月排放 960 公斤碳，計畫每月固定減少 x 公斤，8 個月後降到 600 公斤。每月減少多少公斤？",
    "choices": [
      "45",
      "30",
      "40",
      "120"
    ],
    "answerIndex": 0,
    "explanation": "總減少量960-600=360；分8個月；每月45公斤。所以答案是「45」。",
    "steps": [
      "總減少量960-600=360",
      "分8個月",
      "每月45公斤"
    ],
    "optionAnalysis": [
      {
        "choice": "45",
        "truth": true,
        "reason": "960-8x=600，8x=360，所以x=45。 因此此選項符合題目。"
      },
      {
        "choice": "30",
        "truth": false,
        "reason": "360÷12。"
      },
      {
        "choice": "40",
        "truth": false,
        "reason": "把600÷15。"
      },
      {
        "choice": "120",
        "truth": false,
        "reason": "把總減少量當每月量。"
      }
    ],
    "commonMistake": "只減一次x。",
    "concept": "每月減量累積8次。",
    "tags": [
      "代數",
      "一元一次方程式綜合素養題",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-plan-comparison"
    ],
    "authoringIntent": "由目標差額求固定每月減量。",
    "literacyContextNecessity": "起始排放、目標排放與月份數共同決定960-8x=600，環境目標資料不可刪除。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "314f89966bffd337ac92a3efb9e40376baa4c7cd5c517d24c3c6b1fec68adb96",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s015-v012",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-literacy-context",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "活動預算 5000 元，場租 1200 元，材料每組 190 元。若付款後必須保留 190 元，恰好可購買幾組材料？",
    "choices": [
      "18",
      "19",
      "20",
      "21"
    ],
    "answerIndex": 1,
    "explanation": "先扣場租後有3800元；保留190元所以材料費3610元；3610÷190=19組。所以答案是「19」。",
    "steps": [
      "先扣場租後有3800元",
      "保留190元所以材料費3610元",
      "3610÷190=19組"
    ],
    "optionAnalysis": [
      {
        "choice": "18",
        "truth": false,
        "reason": "18組會剩380元。"
      },
      {
        "choice": "19",
        "truth": true,
        "reason": "5000-1200-190x=190，3800-190x=190，190x=3610，所以x=19。 因此此選項符合題目。"
      },
      {
        "choice": "20",
        "truth": false,
        "reason": "20組只剩0元。"
      },
      {
        "choice": "21",
        "truth": false,
        "reason": "21組超出預算。"
      }
    ],
    "commonMistake": "把「最多」理解成直接整除可用金額而忽略指定餘額。",
    "concept": "餘額是方程式右邊而非可全部使用。",
    "tags": [
      "代數",
      "一元一次方程式綜合素養題",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-plan-comparison"
    ],
    "authoringIntent": "整合總預算、固定費、單價與指定餘額。",
    "literacyContextNecessity": "總預算、固定場租、每組單價與指定剩餘190元四項資料共同決定唯一組數，情境不可簡化。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "36557d50b1eef26e681b7b4d393ff8957289b01822c0b914163c7b6710c85e89",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u03-s015-cr001",
    "unitId": "u03",
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-literacy-context",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "社區蓄水池原有 600 公升，白天每小時流入 35 公升、流出 15 公升。若目標為 900 公升，需幾小時？請說明每一項在方程式中的意義。",
    "requiredWork": [
      "計算淨流量。",
      "建立初始量加累積變化等於目標。",
      "附時間單位並驗算。"
    ],
    "fullCreditSolution": [
      "每小時淨增加35-15=20公升。",
      "600+20t=900。",
      "20t=300，t=15小時；600+20×15=900。"
    ],
    "alternativeSolutions": [
      "也可列600+35t-15t=900後合併。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "方程式各項解釋、解15小時與驗算完整。"
      },
      {
        "score": 2,
        "criteria": "列式與答案正確但項目說明或驗算不足。"
      },
      {
        "score": 1,
        "criteria": "能求出淨流量20並列600+20t=900。"
      },
      {
        "score": 0,
        "criteria": "流量方向或初始量錯誤。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "把流入與流出相加。",
      "忽略初始600公升。"
    ],
    "independentReview": {
      "derivedResult": "15小時",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "966bb2d4fa1feeff113ca90d78a643c1e4a0e872043135056f10c38506d2b620",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s015-cr002",
    "unitId": "u03",
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-literacy-context",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "校慶販售餐券，每張 75 元。固定支出 2700 元，另每張需支付 15 元食材費。若希望淨收入達 4500 元，至少需售出多少張？本題方程式恰有整數解。",
    "requiredWork": [
      "收入與每張變動成本都乘張數。",
      "固定支出只扣一次。",
      "解方程並檢查至少條件。"
    ],
    "fullCreditSolution": [
      "淨收入75x-15x-2700=4500。",
      "60x=7200，x=120。",
      "售120張時淨收入4500元，因此至少120張。"
    ],
    "alternativeSolutions": [
      "可先算每張淨貢獻60元，再加回固定支出。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整模型、解120並核對至少條件。"
      },
      {
        "score": 2,
        "criteria": "答案正確但變動成本或驗算說明少一項。"
      },
      {
        "score": 1,
        "criteria": "能列60x-2700=4500。"
      },
      {
        "score": 0,
        "criteria": "固定與逐張成本層級混淆。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "只扣固定支出，漏掉每張食材費。",
      "把2700乘張數。"
    ],
    "independentReview": {
      "derivedResult": "至少120張",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "a518121adde2643a1db8cf5ee53e576fe18a95860a7c9b5e1c27bcf25113bdfb",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const DRAWING_SPECS = [];
