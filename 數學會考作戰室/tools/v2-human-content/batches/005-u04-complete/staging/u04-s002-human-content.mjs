// SERIALIZATION OF REVIEWED CHATGPT_HUMAN_AUTHORED_R1 CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u04-s002-lecture-r1",
  "unitId": "u04",
  "numericUnitId": 4,
  "topicId": "u04-system-basics",
  "skillId": "system-ordered-pair-solution-check",
  "lockedSkillTitle": "有序數對與解的判斷",
  "title": "有序數對與解的判斷：順序正確才能代入",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "exactSkillIdentity": {
    "unitTitle": "二元一次聯立方程式",
    "skillTitle": "有序數對與解的判斷",
    "scope": "依照 x、y 的順序代入，判斷有序數對是否滿足方程式。"
  },
  "prerequisiteBridge": "先備技能 system-two-variable-equation-definition 已建立必要基礎；本節將其用於「依照 x、y 的順序代入，判斷有序數對是否滿足方程式。」",
  "learningGoals": [
    "理解 (x,y) 的第一個數對應 x、第二個數對應 y。",
    "能代入方程式左右兩邊檢驗。",
    "能由已知一個座標求另一個座標。",
    "能辨認交換順序後可能不再成立。"
  ],
  "vocabulary": [
    {
      "term": "有序數對",
      "definition": "依固定順序排列的兩個數，寫成 (x,y)。"
    },
    {
      "term": "解",
      "definition": "代入後使方程式成立的未知數值。"
    },
    {
      "term": "代入",
      "definition": "用指定數值取代未知數。"
    },
    {
      "term": "檢驗",
      "definition": "分別算左右兩邊，確認是否相等。"
    }
  ],
  "notation": [
    {
      "symbol": "(a,b)",
      "meaning": "表示 x=a、y=b，不可任意交換。"
    },
    {
      "symbol": "LHS",
      "meaning": "等號左邊的值。"
    },
    {
      "symbol": "RHS",
      "meaning": "等號右邊的值。"
    }
  ],
  "conceptDevelopment": [
    "二元一次方程式通常有許多組解；每一組解都以有序數對記錄。",
    "檢驗不是把兩個數隨便放入，而是嚴格依照變數順序。",
    "只要代入後左右相等，該數對就是方程式的解；不必先把所有解列完。"
  ],
  "definitions": [
    {
      "name": "方程式的一組解",
      "statement": "使等式成立的一組有序數對。"
    },
    {
      "name": "順序性",
      "statement": "一般而言 (a,b) 與 (b,a) 是不同的有序數對。"
    }
  ],
  "formulas": [
    {
      "formula": "把 x=a、y=b 代入 ax+by=c",
      "conditions": [
        "a、b 在此處是數對分量，須按題目變數順序代入。"
      ],
      "meaning": "比較代入後左值與右值。"
    }
  ],
  "invalidUseCases": [
    "不可只代入其中一個未知數就下結論。",
    "不可因為兩個數的和相同就忽略係數。",
    "若題目寫 (y,x)，順序必須跟括號前的標示一致。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "讀清楚數對順序",
      "check": "通常是 (x,y)。"
    },
    {
      "step": 2,
      "instruction": "以第一個數取代 x",
      "check": "括號也要保留負號。"
    },
    {
      "step": 3,
      "instruction": "以第二個數取代 y",
      "check": "分數或小數照原值代入。"
    },
    {
      "step": 4,
      "instruction": "分別計算左右兩邊",
      "check": "先乘除後加減。"
    },
    {
      "step": 5,
      "instruction": "比較是否相等",
      "check": "相等才是解。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "u04-s002-example-a",
      "prompt": "說明有序數對 (-4,7) 對 x、y 的意義。",
      "solutionSteps": [
        "讀取第一分量 -4，指定給 x。",
        "讀取第二分量 7，指定給 y。"
      ],
      "answer": "x=-4、y=7。",
      "why": "有序數對依位置而不是依數值正負分配變數。第一分量的負四必須完整給 x，第二分量七給 y；交換後會成為另一個不同數對。"
    },
    {
      "exampleId": "u04-s002-example-b",
      "prompt": "檢驗 (2,-1) 是否為 2x+3y=1 的解。",
      "solutionSteps": [
        "代入 x=2、y=-1，得到 2×2+3×(-1)。",
        "計算 4-3=1，與右邊相等。"
      ],
      "answer": "是這個方程式的一組解。",
      "why": "負一要用括號代入，三乘負一為負三；左邊最後等於一，與右邊完全相同，因此符合方程式解的定義，而非只看數對外觀。"
    },
    {
      "exampleId": "u04-s002-example-c",
      "prompt": "若 (k,4) 是 3x-y=11 的解，求 k。",
      "solutionSteps": [
        "依順序代入 x=k、y=4，得到 3k-4=11。",
        "整理 3k=15，求得 k=5。"
      ],
      "answer": "k=5。",
      "why": "未知字母位於第一分量，所以它代入 x 而不是 y。由一元方程式求得五後，回代可驗算 3×5-4=11，確定分量與計算皆正確。"
    },
    {
      "exampleId": "u04-s002-example-d",
      "prompt": "資料欄為 (輸入,輸出)，檢查 (6,14) 是否符合 y=2x+2。",
      "solutionSteps": [
        "依欄位讀出 x=6、y=14。",
        "計算右側 2×6+2=14，與 y 相等。"
      ],
      "answer": "符合這個輸入輸出模型。",
      "why": "欄位順序指定六是輸入 x、十四是輸出 y。代入後模型預測值十四與紀錄輸出相同，因此資料成立；若交換欄位便會得到不同結論。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "將 (a,b) 讀成 x=b、y=a。",
      "why": "忽略有序數對的固定位置規則。",
      "correction": "每次先標記第一分量給 x、第二分量給 y。"
    },
    {
      "mistake": "負分量代入時漏掉負號。",
      "why": "沒有用括號保留數值本身的符號。",
      "correction": "負數一律連同負號放在括號內代入。"
    },
    {
      "mistake": "只看數對就猜它是解。",
      "why": "沒有使用等式左右相等的定義。",
      "correction": "計算方程式左邊並與右邊逐一比較。"
    },
    {
      "mistake": "把係數與分量相加。",
      "why": "誤讀代數式中省略的乘號。",
      "correction": "先寫出乘號，再依乘法優先順序計算。"
    },
    {
      "mistake": "求未知分量後沒有回代。",
      "why": "可能保留移項或符號錯誤而未發現。",
      "correction": "將完整數對代回原方程式驗證。"
    },
    {
      "mistake": "資料表欄位順序全都視為 x、y。",
      "why": "忽略情境可能另行定義兩個分量。",
      "correction": "代入前先閱讀欄名、單位及數對順序。"
    }
  ],
  "selfCheck": [
    {
      "prompt": "(0,3) 是否滿足 2x+y=3？",
      "answer": "是。"
    },
    {
      "prompt": "(3,0) 是否也滿足？",
      "answer": "否，左邊為 6。"
    },
    {
      "prompt": "若 (t,2) 滿足 x+2y=7，t 是多少？",
      "answer": "3。"
    },
    {
      "prompt": "交換數對順序一定仍為解嗎？",
      "answer": "不一定，要重新代入。"
    }
  ],
  "summary": [
    "有序數對的順序不可交換。",
    "代入後左右相等才是解。",
    "一個二元一次方程式通常有許多組解。"
  ],
  "connections": {
    "previous": "先備技能 system-two-variable-equation-definition 已建立必要基礎；本節將其用於「依照 x、y 的順序代入，判斷有序數對是否滿足方程式。」",
    "next": "下一技能「聯立方程式解的意義」會延伸目前能力。"
  },
  "figureReferences": [],
  "accessibilityNote": "本講義不需要圖形；所有關係均以文字、等式與逐步運算完整呈現，避擴音前使用 U05 坐標圖形。",
  "lectureReview": {
    "decision": "pass",
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "capBoundary": "pass",
    "skillSpecificEvidence": "重新計算每個示例的左右兩邊，確認順序錯置與負號括號均有具體示範；內容只要求代入檢驗，未提前教授聯立消去。",
    "reviewNote": "重新計算每個示例的左右兩邊，確認順序錯置與負號括號均有具體示範；內容只要求代入檢驗，未提前教授聯立消去。",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
  "contentSha256": "075863ae02992a65006284038a8764b6bf115d453417d745ad66568d9927e0ee",
  "conceptNarrative": [
    "有序數對寫成 (x,y)，第一分量固定對應 x，第二分量固定對應 y。順序是數對的一部分，所以 (3,-2) 與 (-2,3) 代表不同代入值，即使使用相同兩個數也不能交換。",
    "若把有序數對代入二元一次方程式後，等式左右兩邊數值相等，這個數對就是方程式的一組解。判斷必須實際計算，不能只看數值大小或方程式外觀。",
    "二元一次方程式通常有許多組解；給定其中一個分量時，可以依數對順序代入，將原式化為一元一次方程式，再求另一分量。負數與分數代入時要用括號保留作用範圍。",
    "資料表或情境中的欄位名稱決定分量意義，例如 (時間,溫度) 與 (成人票,學生票)。代入前先核對欄位定義與單位，才不會因同一組數字在不同脈絡中對應錯誤。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "讀取題目指定的欄位或變數順序，建立第一分量對應 x、第二分量對應 y。",
      "check": "分量位置與欄位名稱一致，負號及單位均完整保留。"
    },
    {
      "step": 2,
      "instruction": "將兩個分量以括號代入方程式左邊的所有對應位置。",
      "check": "同一未知數的每一處都已代入，係數與分量之間按乘法處理。"
    },
    {
      "step": 3,
      "instruction": "依運算順序計算左邊，必要時先處理負數或分數乘法。",
      "check": "帶號數、分數係數與括號的計算符號均正確。"
    },
    {
      "step": 4,
      "instruction": "將算出的左邊數值與等號右邊比較，明確寫出相等或不相等。",
      "check": "不是憑直覺判定，等式兩邊都有確切計算結果。"
    },
    {
      "step": 5,
      "instruction": "若有未知分量，先列出代入後的一元方程式，求解後再回代檢查。",
      "check": "所得分量放回原數對的正確位置，代回原式確實成立。"
    }
  ]
};

export const QUESTIONS = [
  {
    "questionId": "u04-s002-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "有序數對 (3,-2) 表示什麼？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "讀取有序數對分量",
    "choices": [
      "x=-2，y=3",
      "x=3，y=-2",
      "x=3，y=2",
      "x=-3，y=2"
    ],
    "answerIndex": 1,
    "independentSolution": "標準記法 (x,y) 中第一個數是 x，第二個數是 y，因此 x=3、y=-2。",
    "explanation": "有序數對的第一分量固定對應 x，第二分量固定對應 y，因此 (3,-2) 表示 x=3、y=-2。括號中的順序不能交換，第二分量的負號也屬於數值本身，必須完整保留。",
    "steps": [
      "讀取第一分量 3，指定給 x。",
      "讀取第二分量 -2，指定給 y。",
      "寫成 x=3、y=-2 並再次核對順序與負號。"
    ],
    "optionAnalysis": [
      {
        "choice": "x=-2，y=3",
        "truth": false,
        "reason": "把順序交換。"
      },
      {
        "choice": "x=3，y=-2",
        "truth": true,
        "reason": "第一分量對應 x，第二分量對應 y。"
      },
      {
        "choice": "x=3，y=2",
        "truth": false,
        "reason": "漏掉 y 的負號。"
      },
      {
        "choice": "x=-3，y=2",
        "truth": false,
        "reason": "同時改變兩個符號。"
      }
    ],
    "misconceptionTarget": "把兩個分量交換，或讀第二分量時遺漏負二的負號。",
    "prerequisiteCheck": "只需先備 system-two-variable-equation-definition，並使用本技能「有序數對與解的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「讀取有序數對分量」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "只需直接讀取標準記法。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "fdab3e184bf58cbe6f72f482f9df3c452b0f524c0d5aeaa3ce40f2250d932aa8"
  },
  {
    "questionId": "u04-s002-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "(2,1) 是否為方程式 3x+y=7 的解？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "代入整數數對檢驗",
    "choices": [
      "否，左邊是 5",
      "否，左邊是 8",
      "是",
      "無法判斷"
    ],
    "answerIndex": 2,
    "independentSolution": "代入得 3×2+1=7，與右邊相等。",
    "explanation": "依有序數對順序代入 x=2、y=1，方程式左邊為 3×2+1=7，與右邊七相等。因此 (2,1) 確實使方程式成立，是 3x+y=7 的一組解。第一、第二分量的對應不可交換。",
    "steps": [
      "由 (2,1) 讀出 x=2、y=1。",
      "代入左邊，計算 3×2+1=7。",
      "比較左右兩邊同為七，判定是解。"
    ],
    "optionAnalysis": [
      {
        "choice": "否，左邊是 5",
        "truth": false,
        "reason": "3×2+1 不是 5。"
      },
      {
        "choice": "否，左邊是 8",
        "truth": false,
        "reason": "加法計算錯誤。"
      },
      {
        "choice": "是",
        "truth": true,
        "reason": "代入後左右同為 7。"
      },
      {
        "choice": "無法判斷",
        "truth": false,
        "reason": "代入即可判斷。"
      }
    ],
    "misconceptionTarget": "只看數對中的數字似乎合理，沒有實際代入並比較等式兩邊。",
    "prerequisiteCheck": "只需先備 system-two-variable-equation-definition，並使用本技能「有序數對與解的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「代入整數數對檢驗」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "一次直接代入與比較。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "4b1c5bff2acece7eba3ed9346190938c82875e9cd0239175c332f228b65288ce"
  },
  {
    "questionId": "u04-s002-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "下列哪一組是 x+y=0 的解？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "找出滿足簡單方程式的數對",
    "choices": [
      "(4,4)",
      "(-4,-4)",
      "(0,4)",
      "(4,-4)"
    ],
    "answerIndex": 3,
    "independentSolution": "檢查各組分量和，4+(-4)=0。",
    "explanation": "方程式 x+y=0 要求兩個分量相加為零，也就是兩數互為相反數。代入 (4,-4) 得 4+(-4)=0；其他三組的和分別不為零，所以只有第四組成立。",
    "steps": [
      "依序把各選項第一、第二分量代入 x、y。",
      "分別計算兩個分量的和。",
      "找出 4+(-4)=0 的有序數對。"
    ],
    "optionAnalysis": [
      {
        "choice": "(4,4)",
        "truth": false,
        "reason": "和為 8。"
      },
      {
        "choice": "(-4,-4)",
        "truth": false,
        "reason": "和為 -8。"
      },
      {
        "choice": "(0,4)",
        "truth": false,
        "reason": "和為 4。"
      },
      {
        "choice": "(4,-4)",
        "truth": true,
        "reason": "4+(-4)=0，等式成立。"
      }
    ],
    "misconceptionTarget": "忽略負號，誤以為相同的兩個數或含零的數對一定相加為零。",
    "prerequisiteCheck": "只需先備 system-two-variable-equation-definition，並使用本技能「有序數對與解的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「找出滿足簡單方程式的數對」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需比較四組候選。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "9b0eddbd2b4e7b06bf5d08d653c8686ad655db7fa11f67488b6c9d5063126027"
  },
  {
    "questionId": "u04-s002-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "若 (5,k) 是 2x-y=3 的解，k 為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "由解的條件求缺少分量",
    "choices": [
      "7",
      "13",
      "-7",
      "3"
    ],
    "answerIndex": 0,
    "independentSolution": "代入 x=5、y=k 得 10-k=3，所以 k=7。",
    "explanation": "(5,k) 的第一分量是 x=5，第二分量是 y=k。代入 2x-y=3 得 2×5-k=3，即 10-k=3；兩邊同減十後為 -k=-7，所以 k=7。回代後 10-7=3，與原方程式一致，證明分量位置與符號都正確。",
    "steps": [
      "按順序代入 x=5、y=k，得到 10-k=3。",
      "在等式兩邊同減十，得到 -k=-7。",
      "兩邊同乘負一，求得 k=7。"
    ],
    "optionAnalysis": [
      {
        "choice": "7",
        "truth": true,
        "reason": "10-7=3，確實成立。"
      },
      {
        "choice": "13",
        "truth": false,
        "reason": "把 -k 移項方向錯誤。"
      },
      {
        "choice": "-7",
        "truth": false,
        "reason": "求得大小後符號錯。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "直接抄等號右邊。"
      }
    ],
    "misconceptionTarget": "處理 -k 時直接把三減十寫成正七，造成移項與符號同時出錯。",
    "prerequisiteCheck": "只需先備 system-two-variable-equation-definition，並使用本技能「有序數對與解的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「由解的條件求缺少分量」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需要代入後解一元式。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "bf00e522c632c1f9f783b00e859ec0f8082ed2e1f11479dd622bcef88f3e9964"
  },
  {
    "questionId": "u04-s002-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "(1,3) 與 (3,1) 中，哪一組滿足 2x+y=5？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "比較交換順序的數對",
    "choices": [
      "只有 (3,1)",
      "兩組都滿足",
      "只有 (1,3)",
      "兩組都不滿足"
    ],
    "answerIndex": 2,
    "independentSolution": "(1,3)：2×1+3=5；(3,1)：2×3+1=7。",
    "explanation": "代入 (1,3) 時左邊為 2×1+3=5，等於右邊；代入 (3,1) 時則為 2×3+1=7，不等於五。由於 x、y 的係數不同，交換分量會改變代入值，只有 (1,3) 滿足。兩組必須各自完整驗算，不能視為同一答案。",
    "steps": [
      "把 (1,3) 代入，算得 2×1+3=5。",
      "把 (3,1) 代入，算得 2×3+1=7。",
      "比較兩次結果，判定只有第一組成立。"
    ],
    "optionAnalysis": [
      {
        "choice": "只有 (3,1)",
        "truth": false,
        "reason": "代入得 7，不是 5。"
      },
      {
        "choice": "兩組都滿足",
        "truth": false,
        "reason": "第二組不成立。"
      },
      {
        "choice": "只有 (1,3)",
        "truth": true,
        "reason": "第一組代入為 5，第二組為 7。"
      },
      {
        "choice": "兩組都不滿足",
        "truth": false,
        "reason": "第一組左邊為 5。"
      }
    ],
    "misconceptionTarget": "認為兩個數相同只是順序互換，所以兩個有序數對必定同時成立。",
    "prerequisiteCheck": "只需先備 system-two-variable-equation-definition，並使用本技能「有序數對與解的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「比較交換順序的數對」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需做兩次代入並比較。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "8a0026807348e8bf37dfc976a22b4b8526a4efeb0436a215ba7ceca64e392ddd"
  },
  {
    "questionId": "u04-s002-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "若 x=-2，方程式 3x+2y=4 中 y 應為何值？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "由已知 x 求 y",
    "choices": [
      "-5",
      "1",
      "7",
      "5"
    ],
    "answerIndex": 3,
    "independentSolution": "代入 x=-2 得 -6+2y=4，2y=10，y=5。",
    "explanation": "把 x=-2 代入 3x+2y=4，須寫成 3×(-2)+2y=4，因此 -6+2y=4。兩邊同加六得 2y=10，再除以二得到 y=5，負數代入時括號不可省略。回驗 -6+10=4，等式確實成立，也證明 y 的正負號無誤。",
    "steps": [
      "代入 x=-2，寫成 3×(-2)+2y=4。",
      "計算並移除常數，得到 2y=10。",
      "兩邊同除以二，求得 y=5。"
    ],
    "optionAnalysis": [
      {
        "choice": "-5",
        "truth": false,
        "reason": "忽略 3x=-6 後移項。"
      },
      {
        "choice": "1",
        "truth": false,
        "reason": "把 -6+2y=4 解錯。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "將 4 與 -6 直接相加後未除 2。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "代入 y=5 時 -6+10=4。"
      }
    ],
    "misconceptionTarget": "負二代入時未加括號或把三乘負二算成正六。",
    "prerequisiteCheck": "只需先備 system-two-variable-equation-definition，並使用本技能「有序數對與解的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「由已知 x 求 y」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "包含負值與兩步移項。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "91d3b324e204428c5d56c0c857f071fd6140ee0cfb995670f635065a70aee1a6"
  },
  {
    "questionId": "u04-s002-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "哪一組有序數對滿足 (1/2)x-y=2？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "檢驗含分數係數的方程式",
    "choices": [
      "(2,1)",
      "(6,1)",
      "(4,2)",
      "(-2,-1)"
    ],
    "answerIndex": 1,
    "independentSolution": "對 (6,1)，1/2×6-1=3-1=2。",
    "explanation": "將 (6,1) 代入可得 (1/2)×6-1=3-1=2，正好等於右邊。其餘選項代入後都不等於二；(1/2)x 表示 x 的二分之一，不是 1 除以 2x。分數係數仍要先與第一分量相乘。",
    "steps": [
      "依序將每組第一分量代入 x、第二分量代入 y。",
      "對 (6,1) 計算 (1/2)×6-1=2。",
      "比較右邊二，確認 (6,1) 是解。"
    ],
    "optionAnalysis": [
      {
        "choice": "(2,1)",
        "truth": false,
        "reason": "左邊 1-1=0。"
      },
      {
        "choice": "(6,1)",
        "truth": true,
        "reason": "3-1=2，唯一成立。"
      },
      {
        "choice": "(4,2)",
        "truth": false,
        "reason": "左邊 2-2=0。"
      },
      {
        "choice": "(-2,-1)",
        "truth": false,
        "reason": "左邊 -1+1=0。"
      }
    ],
    "misconceptionTarget": "把 (1/2)x 誤讀為 1/(2x)，改變分數係數的作用範圍。",
    "prerequisiteCheck": "只需先備 system-two-variable-equation-definition，並使用本技能「有序數對與解的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「檢驗含分數係數的方程式」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需正確處理分數係數與多組比較。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "ff75351b7b2cd73f0a5d2aac411c305ab8c3d682eb4b42036718ec5882d3fd91"
  },
  {
    "questionId": "u04-s002-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "已知 (a,2) 與 (1,b) 都是 x+2y=7 的解，a+b 等於多少？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "由兩組解反求兩個分量",
    "choices": [
      "6",
      "3",
      "8",
      "12"
    ],
    "answerIndex": 0,
    "independentSolution": "(a,2)：a+4=7，a=3；(1,b)：1+2b=7，b=3；所以 a+b=6。",
    "explanation": "(a,2) 代入 x+2y=7 得 a+4=7，所以 a=3；(1,b) 代入則得 1+2b=7，所以 b=3。兩個未知數分別求出後相加，得到 a+b=6。兩組數對都可回代驗得左邊等於七，答案前後一致。",
    "steps": [
      "代入 (a,2)，由 a+4=7 求得 a=3。",
      "代入 (1,b)，由 1+2b=7 求得 b=3。",
      "計算 a+b=3+3=6。"
    ],
    "optionAnalysis": [
      {
        "choice": "6",
        "truth": true,
        "reason": "a=3、b=3，所以總和為 6。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "只求出其中一個值。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "把第二式的 2b 誤當 b。"
      },
      {
        "choice": "12",
        "truth": false,
        "reason": "把兩個未知分量直接視為 6。"
      }
    ],
    "misconceptionTarget": "把 a、b 都當作同一分量，或未分別代入兩個不同的有序數對。",
    "prerequisiteCheck": "只需先備 system-two-variable-equation-definition，並使用本技能「有序數對與解的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「由兩組解反求兩個分量」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需要兩次一元求解再整合。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "8d90546b517fb7d035ce8c9b5797af2e0d1cf3f42c31f56bd3198cf0dc138b9c"
  },
  {
    "questionId": "u04-s002-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "若 (t,t-1) 是 4x-y=10 的解，t 為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "檢驗含參數分量的數對",
    "choices": [
      "11/3",
      "9/5",
      "-3",
      "3"
    ],
    "answerIndex": 3,
    "independentSolution": "代入得 4t-(t-1)=10，即 3t+1=10，所以 t=3。",
    "explanation": "有序數對 (t,t-1) 表示 x=t、y=t-1。代入 4x-y=10 得 4t-(t-1)=10，去括號為 4t-t+1=10，所以 3t=9，求得 t=3。此時數對是 (3,2)，代回可得 12-2=10，確認減號已正確分配，第二分量也確為二，結果唯一。",
    "steps": [
      "依分量寫出 x=t、y=t-1。",
      "代入並展開 4t-(t-1)=4t-t+1。",
      "解 3t+1=10，得到 t=3。"
    ],
    "optionAnalysis": [
      {
        "choice": "11/3",
        "truth": false,
        "reason": "展開負號錯誤。"
      },
      {
        "choice": "9/5",
        "truth": false,
        "reason": "把 4t-(t-1) 寫成 5t-1。"
      },
      {
        "choice": "-3",
        "truth": false,
        "reason": "最後符號錯誤。"
      },
      {
        "choice": "3",
        "truth": true,
        "reason": "t=3 時數對 (3,2) 代入得 12-2=10。"
      }
    ],
    "misconceptionTarget": "去除 -(t-1) 的括號時沒有把負一變成正一。",
    "prerequisiteCheck": "只需先備 system-two-variable-equation-definition，並使用本技能「有序數對與解的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「檢驗含參數分量的數對」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需處理代數式分量與括號。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "8bd42dc0b4988811beaad402b3412b0473323a2b762141b0556345ee2f0387f3"
  },
  {
    "questionId": "u04-s002-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "感測器資料以 (時間,溫度) 記錄。紀錄 (4,18) 代入模型 2x+y=26 是否成立？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "依資料欄位順序檢驗模型",
    "choices": [
      "不成立，左邊 22",
      "不成立，左邊 40",
      "成立",
      "順序不明所以不能判斷"
    ],
    "answerIndex": 2,
    "independentSolution": "依題目順序 x=4、y=18，2×4+18=26。",
    "explanation": "資料欄位順序是時間、溫度，所以 (4,18) 對應 x=4、y=18。代入模型左邊得 2×4+18=8+18=26，與右邊二十六相等，因此這筆紀錄符合模型。欄名決定分量對應，不能依數值大小交換。",
    "steps": [
      "依欄位順序讀出 x=4、y=18。",
      "代入模型，計算 2×4+18=26。",
      "核對左右相等，判定紀錄成立。"
    ],
    "optionAnalysis": [
      {
        "choice": "不成立，左邊 22",
        "truth": false,
        "reason": "漏算 2×4。"
      },
      {
        "choice": "不成立，左邊 40",
        "truth": false,
        "reason": "把 4 與 18 相乘。"
      },
      {
        "choice": "成立",
        "truth": true,
        "reason": "按指定順序代入後等式成立。"
      },
      {
        "choice": "順序不明所以不能判斷",
        "truth": false,
        "reason": "題幹已明示 (時間,溫度)。"
      }
    ],
    "misconceptionTarget": "忽略資料欄位定義而交換時間與溫度，導致代入位置顛倒。",
    "prerequisiteCheck": "只需先備 system-two-variable-equation-definition，並使用本技能「有序數對與解的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "模型中的數值按題目已標準化，無跨單位相加疑義。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「依資料欄位順序檢驗模型」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "資料欄名決定每個分量的變數角色。",
    "literacyContextNecessity": "「時間,溫度」的欄位順序不可刪除，否則無法正確代入。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "c627f0f7d19d7e94304416c633326d7acdc10d48aebb9d84679767f8fc722f34"
  },
  {
    "questionId": "u04-s002-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "某表格列出 (成人票張數,學生票張數)。哪一列符合 200x+120y=7600？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "從表格列找出符合收入方程式的數對",
    "choices": [
      "(20,30)",
      "(30,20)",
      "(10,40)",
      "(25,25)"
    ],
    "answerIndex": 0,
    "independentSolution": "20×200+30×120=4000+3600=7600。",
    "explanation": "表格第一欄是成人票 x，第二欄是學生票 y。將 (20,30) 代入，收入為 200×20+120×30=4000+3600=7600，恰與總額相同，所以這一列通過檢驗。兩項票款的單位都是元，才能直接相加比較總額。",
    "steps": [
      "由 (20,30) 指定成人票 x=20、學生票 y=30。",
      "分別算票款 4000 元與 3600 元。",
      "相加得 7600 元，確認符合方程式。"
    ],
    "optionAnalysis": [
      {
        "choice": "(20,30)",
        "truth": true,
        "reason": "代入後總收入正好 7600 元。"
      },
      {
        "choice": "(30,20)",
        "truth": false,
        "reason": "總額 8400 元。"
      },
      {
        "choice": "(10,40)",
        "truth": false,
        "reason": "總額 6800 元。"
      },
      {
        "choice": "(25,25)",
        "truth": false,
        "reason": "總額 8000 元。"
      }
    ],
    "misconceptionTarget": "只把票數相加，或將成人與學生的票價配到錯誤欄位。",
    "prerequisiteCheck": "只需先備 system-two-variable-equation-definition，並使用本技能「有序數對與解的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "張×元/張=元，總額單位一致。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「從表格列找出符合收入方程式的數對」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "表格欄位與票價配對是核心。",
    "literacyContextNecessity": "成人與學生欄位名稱決定 200、120 的配對，情境不可省略。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "78d40fa32d2d0f1ac7f287851621f4a76c122096f1db13294b4f43b8da060da2"
  },
  {
    "questionId": "u04-s002-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "機器校正規則為 3x-2y=1，資料列標為 (輸入值,修正值)。若輸入 5，哪個修正值可使資料列成為解？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "依校正模型求缺少資料欄",
    "choices": [
      "5",
      "7",
      "8",
      "-7"
    ],
    "answerIndex": 1,
    "independentSolution": "3×5-2y=1，15-2y=1，y=7。",
    "explanation": "輸入值是第一分量，所以令 x=5。代入 3x-2y=1 得 15-2y=1，兩邊同減十五為 -2y=-14，再除以負二得到 y=7；修正值應為七。代回可驗得 15-14=1，符合機器校正規則。",
    "steps": [
      "依資料順序將輸入五代入 x。",
      "由 15-2y=1 整理成 -2y=-14。",
      "兩邊同除以 -2，求得修正值 y=7。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": false,
        "reason": "15-10=5。"
      },
      {
        "choice": "7",
        "truth": true,
        "reason": "資料列 (5,7) 使 15-14=1。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "15-16=-1。"
      },
      {
        "choice": "-7",
        "truth": false,
        "reason": "15+14=29。"
      }
    ],
    "misconceptionTarget": "把輸入值代入第二分量，或在解 -2y=-14 時漏掉兩個負號。",
    "prerequisiteCheck": "只需先備 system-two-variable-equation-definition，並使用本技能「有序數對與解的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「依校正模型求缺少資料欄」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "資料規則使反求具有實際必要性。",
    "literacyContextNecessity": "輸入值與修正值的欄位角色決定代入順序，不能改成純數字故事。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "9b23695eb33205985893b712c96123cc1126e3d014da76ea22d69999e3e05801"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u04-s002-cr001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "difficulty": "standard",
    "itemType": "constructed-response",
    "prompt": "對方程式 2x-3y=7，檢驗 (5,1)、(2,-1)、(-1,-3) 是否為解，寫出每次代入。",
    "requiredWork": [
      "三組都要按 (x,y) 順序代入。",
      "分別比較左邊與 7。"
    ],
    "standardSolution": [
      "代入 (5,1)：2×5-3×1=10-3=7，等於右邊，所以 (5,1) 是方程式的一組解。",
      "代入 (2,-1)：2×2-3×(-1)=4+3=7，等於右邊，所以 (2,-1) 也是一組解。",
      "代入 (-1,-3)：2×(-1)-3×(-3)=-2+9=7，仍與右邊相等，所以三組有序數對全都是解。"
    ],
    "alternativeMethods": [
      "可先整理 y=(2x-7)/3，再檢查每組 y 是否對應。"
    ],
    "reasoningSteps": [
      "依有序數對順序，把第一分量代入 x、第二分量代入 y。",
      "負數一律以括號代入，逐組計算方程式左邊的確切數值。",
      "把每一個左邊結果與右邊七比較，分別記錄是否成立。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "三組代入與結論全部正確，負數括號清楚。"
      },
      {
        "score": 2,
        "criteria": "兩組完整正確，第三組僅一處算術錯。"
      },
      {
        "score": 1,
        "criteria": "至少一組完整正確且顯示正確代入順序。"
      },
      {
        "score": 0,
        "criteria": "順序全顛倒或沒有任何有效代入。"
      }
    ],
    "partialCreditRules": [
      "每組一分；同一類型的重複算術錯可依後續一致性保留部分。"
    ],
    "followThroughPolicy": "若學生把某組左值算錯，但明確以算得左值與 7 比較，給該組步驟分不給結論分。",
    "unitNotationRules": "本題無單位；有序數對逗號與負號必須清楚。",
    "answerOnlyPolicy": "只寫「三組都是」無代入，最高 1 分。",
    "figureId": null,
    "drawingSpecId": null,
    "independentReview": {
      "derivedResult": "三組都是解。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "獨立重算三組左值均為 7，尤其確認 -3(-1)=+3 與 -3(-3)=+9。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "347fecd3d6bfafa1755fbb1c4004ca8094dcbd34224fbeb1b9b4077d237e9ae8",
    "commonErrors": [
      "交換 x、y 的分量位置，使原本成立的數對被錯誤判成不成立。",
      "計算減去負數時漏掉負負得正，特別是第二、三組的代入。",
      "只檢驗第一組就把結論套用到其餘數對，沒有逐組實際計算。"
    ]
  },
  {
    "questionId": "u04-s002-cr002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "difficulty": "advanced",
    "itemType": "constructed-response",
    "prompt": "已知 (a,2) 與 (1,b) 都是 x+2y=7 的解。求 a、b 與 a+b，並說明有序數對順序。",
    "requiredWork": [
      "分別代入兩組。",
      "最終給 a、b、a+b。"
    ],
    "standardSolution": [
      "(a,2) 的第一分量對應 x、第二分量對應 y，代入 x+2y=7 得 a+2×2=7，所以 a=3。",
      "(1,b) 代入同一方程式得 1+2b=7，故 2b=6，求得 b=3。",
      "因此 a+b=3+3=6；兩個數對雖都含未知字母，仍須按第一分量為 x、第二分量為 y 的固定順序代入。"
    ],
    "alternativeMethods": [
      "可由 y=(7-x)/2 分別代入 x=a 與 x=1。"
    ],
    "reasoningSteps": [
      "先將 (a,2) 依序代入並解出第一分量 a。",
      "再將 (1,b) 依序代入，獨立解出第二分量 b。",
      "計算指定的 a+b，最後回到兩個原數對核對分量順序。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "a=3、b=3、總和 6，且說明順序。"
      },
      {
        "score": 2,
        "criteria": "數值全正確但未說明順序，或一處輕微算術書寫缺漏。"
      },
      {
        "score": 1,
        "criteria": "正確求出 a 或 b，並顯示正確代入。"
      },
      {
        "score": 0,
        "criteria": "將兩組分量順序全部交換，導致無有效結論。"
      }
    ],
    "partialCreditRules": [
      "a、b各一分，順序/總和整合一分。"
    ],
    "followThroughPolicy": "若 a 或 b 早期算錯，a+b 依其結果正確相加可保留後續分。",
    "unitNotationRules": "本題無單位；(a,2) 不可讀成 x=2。",
    "answerOnlyPolicy": "只答 3、3、6 而無代入，最高 2 分。",
    "figureId": null,
    "drawingSpecId": null,
    "independentReview": {
      "derivedResult": "a=3、b=3、a+b=6。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "重新代入確認兩組分別為 (3,2) 與 (1,3)，都滿足 x+2y=7。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "1e94cb40fcec1cf21f0f1fb0ed33ed67dd33680891fdc2c221f580141c86cde9",
    "commonErrors": [
      "把 (a,2) 讀成 x=2、y=a，造成 a 的方程式完全顛倒。",
      "代入 (1,b) 時漏掉 y 的係數二，誤寫成一加 b 等於七。",
      "只求得 a 或 b 便停止，沒有完成題目要求的 a+b。"
    ]
  }
];

export const DRAWING_SPECS = [];
