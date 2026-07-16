// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
// CONTENT AUTHORITY: CHATGPT_HUMAN_AUTHORED_R1
// OLD GENERATED CONTENT MUST NOT BE IMPORTED OR MERGED.
export const LECTURE = {
  "lectureId": "u03-s014-lecture-r1",
  "unitId": "u03",
  "topicId": "u03-linear-equation-reasoning",
  "skillId": "linear-equation-plan-comparison",
  "title": "方案比較問題：建立兩個總費用式並找同價點",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能為兩方案分別建立線性費用式。",
    "能求兩方案同價的使用量。",
    "能判斷同價點前後哪個方案較便宜。",
    "能辨認永不相交或差額固定的情況。"
  ],
  "prerequisites": [
    {
      "skillId": "linear-equation-reasonableness",
      "requiredLevel": "能先求代數解，再檢查整數、正值、單位和題目限制。"
    }
  ],
  "glossary": [
    {
      "term": "基本費",
      "definition": "不論使用量多少都先收取的固定金額。"
    },
    {
      "term": "單位費",
      "definition": "每增加一單位使用量增加的費用。"
    },
    {
      "term": "同價點",
      "definition": "兩方案總費用相同時的使用量。"
    },
    {
      "term": "損益平衡量",
      "definition": "方案比較中使兩總成本相等的數量。"
    }
  ],
  "notation": [
    {
      "symbol": "A(x)=a+px",
      "meaning": "方案A的基本費a加每單位p元。"
    },
    {
      "symbol": "A(x)=B(x)",
      "meaning": "求兩方案同價點。"
    }
  ],
  "conceptNarrative": [
    "方案比較先為每個方案獨立列式。",
    "同價點必須令兩個完整總費用式相等後求得，不能只比較基本費或單價。",
    "交點前後的便宜方案可代入測試值，或比較單位費增幅。",
    "若兩方案單位費相同，費用差固定，除非基本費也相同，否則不會同價。"
  ],
  "formalDefinitions": [
    {
      "name": "線性費用式",
      "statement": "總費用=基本費+單位費×使用量。"
    },
    {
      "name": "同價方程式",
      "statement": "a+px=b+qx。"
    }
  ],
  "formulas": [
    {
      "formula": "x=(b-a)/(p-q)",
      "conditions": [
        "p≠q"
      ],
      "meaning": "兩線性費用的同價點。"
    },
    {
      "formula": "A(x)-B(x)=(a-b)+(p-q)x",
      "conditions": [
        "同一使用量x"
      ],
      "meaning": "比較差額。"
    }
  ],
  "nonApplicableCases": [
    "同價點若為負數，可能不在實際使用範圍。",
    "使用次數若需整數，分數交點需再判斷附近整數。",
    "不能只比較基本費。",
    "不能只比較單位費而忽略同價點位置。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "列出兩方案的基本費與單位費。",
      "check": "固定與變動項是否分清？"
    },
    {
      "step": 2,
      "instruction": "建立A(x)與B(x)。",
      "check": "同一x代表相同使用量？"
    },
    {
      "step": 3,
      "instruction": "令A(x)=B(x)求同價點。",
      "check": "移項與除法是否正確？"
    },
    {
      "step": 4,
      "instruction": "判斷交點前後。",
      "check": "可代入0或交點旁的值？"
    },
    {
      "step": 5,
      "instruction": "檢查使用量範圍與整數性。",
      "check": "答案是否可實際使用？"
    }
  ],
  "workedExamples": [
    {
      "prompt": "A=150+5x，B=30+9x。",
      "answer": "30次同價。",
      "solutionSteps": [
        "令兩個完整費用式相等：150+5x=30+9x。",
        "移項得 120=4x，所以 x=30。",
        "代入三十次，A 與 B 均為 300 元。"
      ],
      "why": "同價點必須比較兩方案的完整總費用，不能只用基本費差除以某一個單價。這裡基本費差是一百二十元，每次費用差是四元，所以需三十次才抵消；代入兩式同得三百元，證明是精確交點。"
    },
    {
      "prompt": "A=80+6x，B=120+6x。",
      "answer": "A永遠便宜40元。",
      "solutionSteps": [
        "比較兩方案每次費，都是 6 元。",
        "相減 B-A=(120+6x)-(80+6x)=40。",
        "因差額與 x 無關，判定 A 在任何使用量都便宜 40 元。"
      ],
      "why": "兩方案的單位費完全相同，所以使用量每增加一次，兩者都增加六元，費用差不會改變。從基本費可看出 A 已比 B 少四十元；x 項相減後消去，證明兩條費用線平行，不存在同價點。"
    },
    {
      "prompt": "A=300元不限次，B=50x。",
      "answer": "6次同價。",
      "solutionSteps": [
        "方案 A 為固定 300 元，方案 B 使用 x 次為 50x 元。",
        "令 300=50x，兩邊除以 50 得 x=6。",
        "驗算 B 使用 6 次為 50×6=300 元，與 A 相同。"
      ],
      "why": "「不限次」表示方案 A 的總費用不隨次數改變，而方案 B 每使用一次增加五十元。因此同價就是讓 B 的累計費用達到三百元，五十乘六正好是三百；這也說明六次以下 B 較便宜，超過六次 A 較便宜。"
    },
    {
      "prompt": "兩方案在20次同價，A每次增加4元、B增加7元。",
      "answer": "x>20選A。",
      "solutionSteps": [
        "以 20 次為兩方案費用相等的基準點。",
        "超過 20 次後，每多一次，B 比 A 多增加 7-4=3 元。",
        "因此 x>20 時 A 較便宜；x=20 時仍同價。"
      ],
      "why": "既然二十次時兩方案已知同價，判斷交點之後只需比較每次增加量，不再需要基本費。B 的增幅每次比 A 多三元，所以從第二十一次起，B 的總費用會逐次高於 A；因此超過二十次應選 A。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "只看基本費選方案。",
      "why": "使用量大時單位費可能主導。",
      "correction": "建立完整總費用式。"
    },
    {
      "mistake": "只看單位費選方案。",
      "why": "忽略固定費差。",
      "correction": "先求同價點。"
    },
    {
      "mistake": "兩方案使用不同未知數。",
      "why": "無法比較同一用量。",
      "correction": "兩式共用x。"
    },
    {
      "mistake": "求到同價點後不判斷區間。",
      "why": "題目常問更多或更少時。",
      "correction": "代入交點旁測試值。"
    },
    {
      "mistake": "平行費用式硬求交點。",
      "why": "單位費相同導致未知數消去。",
      "correction": "比較固定差。"
    },
    {
      "mistake": "分數使用次數直接接受。",
      "why": "次數可能需整數。",
      "correction": "依題意判斷鄰近整數成本。"
    }
  ],
  "selfCheck": [
    "兩方案是否各自完整列式？",
    "同一x是否代表同一用量？",
    "同價方程式是否正確？",
    "交點前後是否判斷？",
    "用量範圍與整數性是否合理？"
  ],
  "summary": [
    "總費用=基本費+單位費×用量。",
    "同價點由兩式相等求得。",
    "交點前後比較增幅。",
    "相同單位費時差額固定。"
  ],
  "connections": {
    "previous": "需要會解兩邊含未知數的一元一次方程式並檢查合理性。",
    "next": [
      "綜合素養題會把方案比較與預算、用量限制結合。",
      "最終總審查會檢查方案情境是否真正影響解題。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u03-s014-v001",
      "u03-s014-v002",
      "u03-s014-v003",
      "u03-s014-v004",
      "u03-s014-v005",
      "u03-s014-v006",
      "u03-s014-v007",
      "u03-s014-v008",
      "u03-s014-v009",
      "u03-s014-v010",
      "u03-s014-v011",
      "u03-s014-v012"
    ],
    "constructedResponseIds": [
      "u03-s014-cr001",
      "u03-s014-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "四例代回核對：A(30)=B(30)=300、平行方案差40、50×6=300、交點後B每次比A多增3元；並檢查用量非負。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "8c24293f78e3fab5e713f7ef5e07e69bed79d287c932fb91fe235cf1be90608d",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "legacyContentDisposition": "replace-old-lecture-at-final-integration"
};

export const QUESTIONS = [
  {
    "questionId": "u03-s014-v001",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-plan-comparison",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "方案 A 費用為 100＋10x 元，方案 B 為 40＋15x 元。使用幾次時兩方案同價？",
    "choices": [
      "12",
      "8",
      "10",
      "14"
    ],
    "answerIndex": 0,
    "explanation": "令兩費用相等；移項得60=5x；解得12次。所以答案是「12」。 將兩方案完整費用相減可得基本費差 60 元、每次費差 5 元，所以 60÷5=12。代入 x=12 時，A 與 B 都是 220 元，確認同價。",
    "steps": [
      "令兩費用相等",
      "移項得60=5x",
      "解得12次"
    ],
    "optionAnalysis": [
      {
        "choice": "12",
        "truth": true,
        "reason": "100+10x=40+15x，60=5x，所以x=12。 因此此選項符合題目。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "代入8時費用不同。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "代入10時A=200、B=190。"
      },
      {
        "choice": "14",
        "truth": false,
        "reason": "代入14時A較便宜。"
      }
    ],
    "commonMistake": "只比較兩方案的基本費差六十元，忽略每次費用也相差五元。",
    "concept": "同價點由兩費用式相等求得。",
    "tags": [
      "代數",
      "方案比較問題",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-reasonableness"
    ],
    "authoringIntent": "以等價條件建立方程式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "cb8903bfeb045d771b3070926c96ff214138541ef0d51b59452933152c74b81e",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s014-v002",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-plan-comparison",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "方案 A 為 500＋2x 元，方案 B 為 200＋5x 元。何時同價？",
    "choices": [
      "60",
      "100",
      "150",
      "300"
    ],
    "answerIndex": 1,
    "explanation": "兩式相等；基本費差300；單價差3得100。所以答案是「100」。 移項後基本費差是 300 元，單位費差是 3 元，因此 x=100。代入後 A=500+200=700，B=200+500=700，兩方案確實同價，而 x 的單位是使用次數。",
    "steps": [
      "兩式相等",
      "基本費差300",
      "單價差3得100"
    ],
    "optionAnalysis": [
      {
        "choice": "60",
        "truth": false,
        "reason": "只用300÷5。"
      },
      {
        "choice": "100",
        "truth": true,
        "reason": "500+2x=200+5x，300=3x，所以x=100。 因此此選項符合題目。"
      },
      {
        "choice": "150",
        "truth": false,
        "reason": "把基本費與單價相加。"
      },
      {
        "choice": "300",
        "truth": false,
        "reason": "300是費用差不是次數。"
      }
    ],
    "commonMistake": "移項時漏掉其中一方案的每次費，誤用三百直接除以五。",
    "concept": "同價條件仍需完整方程式。",
    "tags": [
      "代數",
      "方案比較問題",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-reasonableness"
    ],
    "authoringIntent": "用基本費差除單位費差。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "39f6bbf48262e9ca006b1f4c48701a0556a6b33fc77785e1df5fc102b6b25865",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s014-v003",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-plan-comparison",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "方案 A：80＋6x 元；方案 B：20＋9x 元。使用 20 次時哪個較便宜？",
    "choices": [
      "方案A便宜30元",
      "方案B便宜30元",
      "兩方案同價",
      "方案A便宜60元"
    ],
    "answerIndex": 2,
    "explanation": "代入x=20計算A；計算B；比較皆200。所以答案是「兩方案同價」。 必須把二十次同時代入兩個完整費用式。A=80+6×20=200，B=20+9×20=200，差額為零，所以不是任一方便宜三十或六十元。",
    "steps": [
      "代入x=20計算A",
      "計算B",
      "比較皆200"
    ],
    "optionAnalysis": [
      {
        "choice": "方案A便宜30元",
        "truth": false,
        "reason": "兩者沒有30元差。"
      },
      {
        "choice": "方案B便宜30元",
        "truth": false,
        "reason": "兩者沒有30元差。"
      },
      {
        "choice": "兩方案同價",
        "truth": true,
        "reason": "A=80+120=200；B=20+180=200，所以同價。 因此此選項符合題目。"
      },
      {
        "choice": "方案A便宜60元",
        "truth": false,
        "reason": "基本費差60被錯當總差。"
      }
    ],
    "commonMistake": "只看 A 與 B 的基本費相差六十元，沒有加上二十次的各自變動費用。",
    "concept": "分別代入同一x。",
    "tags": [
      "代數",
      "方案比較問題",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-reasonableness"
    ],
    "authoringIntent": "在指定用量下比較兩方案。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "cad8b577c8d9b82efd9e4535ba1f34590fd5dd7522274c415ecad7bf1579fc6f",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s014-v004",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-plan-comparison",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "方案 A：120＋4x 元；方案 B：60＋7x 元。當 x＞20 時哪個較便宜？",
    "choices": [
      "方案B",
      "永遠同價",
      "無法判斷",
      "方案 A"
    ],
    "answerIndex": 3,
    "explanation": "先求同價點20；比較超過交點後的單位費；A增幅較小。所以答案是「方案 A」。 在二十次之後，每再增加一次，A 只增加 4 元，B 卻增加 7 元，所以 B 每次會多出 3 元。因此 x>20 時 A 的總費用必較低。",
    "steps": [
      "先求同價點20",
      "比較超過交點後的單位費",
      "A增幅較小"
    ],
    "optionAnalysis": [
      {
        "choice": "方案B",
        "truth": false,
        "reason": "B單位費較高。"
      },
      {
        "choice": "永遠同價",
        "truth": false,
        "reason": "只在x=20同價。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "已有完整費率可判斷。"
      },
      {
        "choice": "方案 A",
        "truth": true,
        "reason": "同價點120+4x=60+7x得x=20；超過20後A每單位增加4元，B增加7元，所以A較便宜。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "只看 B 的基本費較低就選 B，忽略超過交點後 B 的單位費增加得更快。",
    "concept": "超過同價點後單位費低者較便宜。",
    "tags": [
      "代數",
      "方案比較問題",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-reasonableness"
    ],
    "authoringIntent": "由交點與增幅判斷區間。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "91072bac778908f3b6410e44abeafd5e87eb9d4f6df4ebfc6b7f7eeca2a783ce",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s014-v005",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-plan-comparison",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "方案 A 每月 200 元另加每次 8 元；方案 B 每次 16 元且無月費。兩方案同價時使用次數為何？",
    "choices": [
      "12.5",
      "25",
      "16",
      "32"
    ],
    "answerIndex": 1,
    "explanation": "令總費用相等；移項得200=8x；x=25。所以答案是「25」。 同價時不是用 200 除以任一方的單價，而是用基本費 200 除以兩方案每次費差 16-8=8，得 25 次。驗算兩方都是 400 元。",
    "steps": [
      "令總費用相等",
      "移項得200=8x",
      "x=25"
    ],
    "optionAnalysis": [
      {
        "choice": "12.5",
        "truth": false,
        "reason": "把200÷16。"
      },
      {
        "choice": "25",
        "truth": true,
        "reason": "200+8x=16x，200=8x，所以x=25。 因此此選項符合題目。"
      },
      {
        "choice": "16",
        "truth": false,
        "reason": "把每次費16當次數。"
      },
      {
        "choice": "32",
        "truth": false,
        "reason": "把兩單價相加。"
      }
    ],
    "commonMistake": "只把月費二百元除以方案 B 的每次十六元，忽略方案 A 也有每次八元費用。",
    "concept": "固定費由單價差補回。",
    "tags": [
      "代數",
      "方案比較問題",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-reasonableness"
    ],
    "authoringIntent": "比較有固定費與無固定費方案。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3f456763259d821251f1fa3f8980f217c3aba20bfb11c13a41c28aa05fada7ab",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s014-v006",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-plan-comparison",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "方案 A：80＋4x 元；方案 B：100＋4x 元。下列何者正確？",
    "choices": [
      "使用5次後同價",
      "方案B永遠便宜20元",
      "方案 A 永遠便宜 20 元",
      "費用大小隨x改變"
    ],
    "answerIndex": 2,
    "explanation": "比較相同斜率4；只剩基本費差20；A永遠便宜。所以答案是「方案 A 永遠便宜 20 元」。 相減得 B-A=(100+4x)-(80+4x)=20，x 項完全抵消。因此不論使用多少次，B 都比 A 多 20 元；兩條費用線平行，不會相交。",
    "steps": [
      "比較相同斜率4",
      "只剩基本費差20",
      "A永遠便宜"
    ],
    "optionAnalysis": [
      {
        "choice": "使用5次後同價",
        "truth": false,
        "reason": "平行費用式不會相交。"
      },
      {
        "choice": "方案B永遠便宜20元",
        "truth": false,
        "reason": "基本費B較高。"
      },
      {
        "choice": "方案 A 永遠便宜 20 元",
        "truth": true,
        "reason": "兩方案的每次費相同，B基本費多20元，所以任何x下B都多20元。 因此此選項符合題目。"
      },
      {
        "choice": "費用大小隨x改變",
        "truth": false,
        "reason": "差額固定不隨x變。"
      }
    ],
    "commonMistake": "看到兩方案就一定設等求交點。",
    "concept": "相同單位費使差額固定。",
    "tags": [
      "代數",
      "方案比較問題",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-reasonableness"
    ],
    "authoringIntent": "辨認沒有同價點的平行費用式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a60ad48bf42e1bf83fc8ab946c0f0fe1e5597645e1f747cc80472a1e068c2142",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s014-v007",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-plan-comparison",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "方案 A：150＋6x 元；方案 B：11x 元。使用幾次時同價？",
    "choices": [
      "20",
      "25",
      "50",
      "30"
    ],
    "answerIndex": 3,
    "explanation": "令兩方案費用相等；移項得150=5x；解得30次。所以答案是「30」。 移項時應比較兩方案的每次費差 11-6=5，所以基本費 150 需用 30 次才抵消。代入後 A=150+180=330，B=330，結果一致。",
    "steps": [
      "令兩方案費用相等",
      "移項得150=5x",
      "解得30次"
    ],
    "optionAnalysis": [
      {
        "choice": "20",
        "truth": false,
        "reason": "代入20時A=270、B=220。"
      },
      {
        "choice": "25",
        "truth": false,
        "reason": "代入25時A=300、B=275。"
      },
      {
        "choice": "50",
        "truth": false,
        "reason": "代入50時A=450、B=550。"
      },
      {
        "choice": "30",
        "truth": true,
        "reason": "150+6x=11x，150=5x，所以x=30。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "把方案 A 的基本費一百五十元直接除以 B 的十一元單價，未使用單價差。",
    "concept": "同價時兩總費用式相等。",
    "tags": [
      "代數",
      "方案比較問題",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-reasonableness"
    ],
    "authoringIntent": "求另一組固定費與單位費方案的同價點。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "86d271918dd35ff4ed512beb6cf391acd7ea8b994b8838510acbe45776f09fd4",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s014-v008",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-plan-comparison",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某方案在 x＝18 時同價；方案 A 每增加一次多 5 元，方案 B 每增加一次多 9 元。當 x≥19 時哪個較便宜？",
    "choices": [
      "方案 A",
      "方案B",
      "仍然同價",
      "需知道基本費才可判斷"
    ],
    "answerIndex": 0,
    "explanation": "以同價點18為基準；比較每增加一次的費用；A增幅少4元。所以答案是「方案 A」。 已知交點是十八次，就足以由交點後的增幅判斷。從十九次起，B 每多一次就比 A 多增 4 元，所以 A 必較便宜，無需再知基本費。",
    "steps": [
      "以同價點18為基準",
      "比較每增加一次的費用",
      "A增幅少4元"
    ],
    "optionAnalysis": [
      {
        "choice": "方案 A",
        "truth": true,
        "reason": "在18次同價後，每多一次A只增5元、B增9元，因此從19次起A較便宜。 因此此選項符合題目。"
      },
      {
        "choice": "方案B",
        "truth": false,
        "reason": "B每次增加較多。"
      },
      {
        "choice": "仍然同價",
        "truth": false,
        "reason": "只有18次同價。"
      },
      {
        "choice": "需知道基本費才可判斷",
        "truth": false,
        "reason": "已知交點與增幅足夠。"
      }
    ],
    "commonMistake": "認為缺基本費必然無法判斷。",
    "concept": "交點後比較變動費。",
    "tags": [
      "代數",
      "方案比較問題",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-reasonableness"
    ],
    "authoringIntent": "不必重建基本費即可判斷交點後區間。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "51e70b48d630cba67b58228160eb37e2923a05ccd4f581398f38056cce87aff6",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s014-v009",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-plan-comparison",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "方案 A 基本費 300 元，每件 5 元；方案 B 基本費 120 元，每件 8 元。訂購幾件時同價？",
    "choices": [
      "36",
      "45",
      "60",
      "90"
    ],
    "answerIndex": 2,
    "explanation": "基本費差180；單件費差3；180÷3=60。所以答案是「60」。 同價方程式移項後，基本費差為 180 元，每件費差為 3 元，所以 x=60。代入六十件時，A=300+300=600，B=120+480=600，同價無誤。",
    "steps": [
      "基本費差180",
      "單件費差3",
      "180÷3=60"
    ],
    "optionAnalysis": [
      {
        "choice": "36",
        "truth": false,
        "reason": "只用180÷5。"
      },
      {
        "choice": "45",
        "truth": false,
        "reason": "把基本費平均。"
      },
      {
        "choice": "60",
        "truth": true,
        "reason": "300+5x=120+8x，180=3x，所以x=60。 因此此選項符合題目。"
      },
      {
        "choice": "90",
        "truth": false,
        "reason": "把兩單價相加。"
      }
    ],
    "commonMistake": "只用基本費差除以某一方案的單價，沒有以兩個每件費用的差額計算。",
    "concept": "同價件數由固定差與變動差決定。",
    "tags": [
      "代數",
      "方案比較問題",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-reasonableness"
    ],
    "authoringIntent": "由兩種費率差求損益平衡量。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "bb1ab9f5c5a27d9bd1a00710ce537936cd0d876a802336bd4ebe5d040caf90b7",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s014-v010",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-plan-comparison",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "svg",
    "figureId": "fig-u03-s014-v010",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "依圖表，方案 P 基本費 120 元、每次 8 元；方案 Q 基本費 40 元、每次 12 元。使用幾次時同價？",
    "choices": [
      "10",
      "16",
      "40",
      "20"
    ],
    "answerIndex": 3,
    "explanation": "從圖表讀兩組費率；列同價方程式；解得20次。所以答案是「20」。 將圖表中兩個基本費與每次費用同時納入，移項得 80=4x，x=20。代入時 P=120+160=280，Q=40+240=280，所以二十次是精確同價點。",
    "steps": [
      "從圖表讀兩組費率",
      "列同價方程式",
      "解得20次"
    ],
    "optionAnalysis": [
      {
        "choice": "10",
        "truth": false,
        "reason": "只用基本費差除8。"
      },
      {
        "choice": "16",
        "truth": false,
        "reason": "把120-40除5。"
      },
      {
        "choice": "40",
        "truth": false,
        "reason": "把基本費差當次數。"
      },
      {
        "choice": "20",
        "truth": true,
        "reason": "由圖表列120+8x=40+12x；80=4x，所以x=20。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "只讀出圖表的基本費，沒有同時使用 P、Q 每次八元與十二元的費用。",
    "concept": "圖表資料直接決定兩個費用式。",
    "tags": [
      "代數",
      "方案比較問題",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-reasonableness"
    ],
    "authoringIntent": "從資料表提取固定費與變動費。",
    "literacyContextNecessity": "必須從方案表格讀取四個費率資料才能建立方程式，圖表不是裝飾。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "060acef8f14ed28b6dfbaf2e5e3720ec7801ec57d5139d071930889b203f4459",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s014-v011",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-plan-comparison",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "健身方案 A 月費 900 元不限次數；方案 B 每次 150 元。每月使用幾次時同價？",
    "choices": [
      "6",
      "5",
      "7",
      "150"
    ],
    "answerIndex": 0,
    "explanation": "A費用固定900；B費用150x；解得6次。所以答案是「6」。 方案 A 的九百元與次數無關，方案 B 則是 150x。令兩者相等得 900=150x，x=6。驗算 B 使用六次為 900 元，恰好與 A 月費相同。",
    "steps": [
      "A費用固定900",
      "B費用150x",
      "解得6次"
    ],
    "optionAnalysis": [
      {
        "choice": "6",
        "truth": true,
        "reason": "900=150x，x=6。 因此此選項符合題目。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "5次B只750元。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "7次B為1050元。"
      },
      {
        "choice": "150",
        "truth": false,
        "reason": "150是單次費。"
      }
    ],
    "commonMistake": "把方案 B 的每次一百五十元直接當成所求的每月使用次數。",
    "concept": "同價點是固定費除單次費。",
    "tags": [
      "代數",
      "方案比較問題",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-reasonableness"
    ],
    "authoringIntent": "比較固定總價與按次計費。",
    "literacyContextNecessity": "不限次月費與按次費屬不同計價方式，情境決定900=150x。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "cdd993981f33ab69dacd1de0e4ac6feabfc4d342c0dd0d027c9f809f84826b62",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s014-v012",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-plan-comparison",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "運送方案 A 收基本費 60 元，每公斤 4 元；方案 B 收基本費 20 元，每公斤 6 元。幾公斤時同價？",
    "choices": [
      "10",
      "20",
      "15",
      "40"
    ],
    "answerIndex": 1,
    "explanation": "列兩方案總費用；移項得40=2x；解得20公斤。所以答案是「20」。 移項後基本費差為 40 元，每公斤費用差為 2 元，所以需 20 公斤才抵消。代入後 A=60+80=140，B=20+120=140，單位也是公斤，同價點正確。",
    "steps": [
      "列兩方案總費用",
      "移項得40=2x",
      "解得20公斤"
    ],
    "optionAnalysis": [
      {
        "choice": "10",
        "truth": false,
        "reason": "只把40除4。"
      },
      {
        "choice": "20",
        "truth": true,
        "reason": "60+4x=20+6x，40=2x，所以x=20公斤。 因此此選項符合題目。"
      },
      {
        "choice": "15",
        "truth": false,
        "reason": "代入15仍不同。"
      },
      {
        "choice": "40",
        "truth": false,
        "reason": "40是基本費差。"
      }
    ],
    "commonMistake": "把兩方案的基本費差四十元直接當成公斤數，忽略每公斤費用差二元。",
    "concept": "重量可為連續量，但本題交點恰為20。",
    "tags": [
      "代數",
      "方案比較問題",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-reasonableness"
    ],
    "authoringIntent": "在重量計費中求同價重量。",
    "literacyContextNecessity": "兩家運送商的基本費與每公斤費率共同決定同價重量，計價情境不可省略。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "c4e0743435bee0ec8445afd4b2fe40d642abacaa58e6f3ba323f4282721f9e82",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u03-s014-cr001",
    "unitId": "u03",
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-plan-comparison",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "租借方案 A 收基本費 240 元，每小時 30 元；方案 B 不收基本費，每小時 50 元。求同價時間，並判斷超過該時間哪個較便宜。",
    "requiredWork": [
      "建立兩個費用式。",
      "令兩式相等求交點。",
      "比較交點後單位費。"
    ],
    "fullCreditSolution": [
      "設租借時間為 x 小時。方案 A 的總費用為 240+30x 元，方案 B 不收基本費，總費用為 50x 元。",
      "同價時令 240+30x=50x，移項得 20x=240，所以 x=12 小時；代入後兩方案均為 600 元。",
      "超過 12 小時後，A 每多一小時只增加 30 元，B 卻增加 50 元，所以超過同價點時方案 A 較便宜。"
    ],
    "alternativeSolutions": [
      "可在x=13代入驗證A=630、B=650。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "兩式、交點與區間判斷完整。"
      },
      {
        "score": 2,
        "criteria": "交點正確但未判斷後續，或區間正確但一處計算錯。"
      },
      {
        "score": 1,
        "criteria": "能列240+30x=50x。"
      },
      {
        "score": 0,
        "criteria": "兩方案費用結構混淆。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "只用基本費 240 除以 B 的每小時 50 元，漏掉 A 也有每小時 30 元費用。",
      "看到 A 有基本費就說 A 永遠較貴，沒有比較超過交點後兩方案的單位費。"
    ],
    "independentReview": {
      "derivedResult": "12小時同價；超過12小時選A",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "6c6a6e501249a4dff0568b9f925e89c740931610d5f48990431666aa11b40c77",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s014-cr002",
    "unitId": "u03",
    "topicId": "u03-linear-equation-reasoning",
    "skillId": "linear-equation-plan-comparison",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "兩家影印店收費如下：甲店基本費 80 元，每張 2 元；乙店基本費 20 元，每張 3 元。小組預計印 90 張。請先求同價張數，再判斷90張選哪家及省多少。",
    "requiredWork": [
      "列兩方案式。",
      "求同價點。",
      "代入90或比較交點後並算差額。"
    ],
    "fullCreditSolution": [
      "設影印 x 張。甲店總費用為 80+2x 元，乙店總費用為 20+3x 元，兩式中的 x 表示同一張數。",
      "令 80+2x=20+3x，移項得 x=60，所以六十張時兩店同為 200 元。",
      "影印 90 張時，甲店費用 80+2×90=260 元，乙店費用 20+3×90=290 元。因此選甲店，可省 290-260=30 元。"
    ],
    "alternativeSolutions": [
      "因90>60且甲單價較低，可先判甲較便宜，再算差額。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "同價點、90張費用與省額全部正確。"
      },
      {
        "score": 2,
        "criteria": "方案選擇正確但省額或交點有一處錯。"
      },
      {
        "score": 1,
        "criteria": "能列出兩個費用式並判斷90張甲較便宜。"
      },
      {
        "score": 0,
        "criteria": "未建立完整方案費用。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "只比較基本費，看到乙店只收 20 元就直接選乙，未計算九十張的變動費。",
      "正確求出六十張同價後就停止，沒有再使用題目給定的九十張計算方案與差額。"
    ],
    "independentReview": {
      "derivedResult": "60張同價；90張選甲，省30元",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "27d33a732787ba8d1c6d2dbb950f43648a5f1a65f1b9c40ece3aaaeeecb92c97",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "fig-u03-s014-v010",
    "unitId": "u03",
    "skillId": "linear-equation-plan-comparison",
    "altText": "三欄收費表。方案 P 的基本費為一百二十元、每次八元；方案 Q 的基本費為四十元、每次十二元。",
    "drawingSpec": {
      "canvas": {
        "width": 900,
        "height": 390,
        "viewBox": "0 0 900 390"
      },
      "table": {
        "x": 110,
        "y": 65,
        "width": 680,
        "height": 245,
        "columns": [
          200,
          240,
          240
        ],
        "rows": [
          60,
          90,
          95
        ]
      },
      "headers": [
        "方案",
        "基本費",
        "每次費用"
      ],
      "rowP": [
        "P",
        "120 元",
        "8 元"
      ],
      "rowQ": [
        "Q",
        "40 元",
        "12 元"
      ],
      "lines": {
        "outer": "4px實線",
        "inner": "3px實線"
      },
      "footer": "總費用＝基本費＋每次費用×使用次數",
      "scaleNote": "表格是資料來源，不使用圖形比例。",
      "accessibility": "title與desc逐項重述四個費率。",
      "mobile": "欄寬可容納25px文字，不重疊。"
    },
    "svgPath": "figures/u03/fig-u03-s014-v010.svg",
    "svgAssertions": [
      "方案 P 與方案 Q 收費表",
      "120 元",
      "12 元"
    ],
    "figureReview": {
      "decision": "pass",
      "questionFigureConsistency": "pass",
      "accessibility": "pass",
      "mobileReadability": "pass",
      "answerLeakage": "pass",
      "reviewNote": "逐格核對P為120與8、Q為40與12；表格未列同價次數，學生必須自行建立120+8x=40+12x。",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "066bb690da5787cd7a7b65df7b9532208bb8b99314ff4457ab87edb6bcd57124",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "new-human-authored-figure"
  }
];
