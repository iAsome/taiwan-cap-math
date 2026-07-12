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
      "exampleId": "L1",
      "prompt": "檢驗 (2,1) 是否為 3x+y=7 的解。",
      "solutionSteps": [
        "代入 x=2、y=1。",
        "左邊 3×2+1=7。",
        "右邊為 7。"
      ],
      "answer": "是。"
    },
    {
      "exampleId": "L2",
      "prompt": "檢驗 (1,2) 是否為 3x+y=7 的解。",
      "solutionSteps": [
        "左邊 3×1+2=5。",
        "5≠7。"
      ],
      "answer": "不是。"
    },
    {
      "exampleId": "L3",
      "prompt": "若 (4,k) 是 2x-y=3 的解，求 k。",
      "solutionSteps": [
        "代入得 8-k=3。",
        "所以 k=5。"
      ],
      "answer": "k=5。"
    },
    {
      "exampleId": "L4",
      "prompt": "找出 x+y=0 的兩組整數解。",
      "solutionSteps": [
        "任取 x，再令 y=-x。",
        "取 x=2 得 y=-2；取 x=-3 得 y=3。"
      ],
      "answer": "例如 (2,-2)、(-3,3)。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把 (2,-1) 代成 x=-1、y=2",
      "correction": "忽略有序數對的順序。"
    },
    {
      "mistake": "只算左邊不和右邊比較",
      "correction": "檢驗需要確認等號成立。"
    },
    {
      "mistake": "負數代入未加括號",
      "correction": "容易造成乘法符號錯誤。"
    },
    {
      "mistake": "以為一個方程式只有一組解",
      "correction": "二元一次方程式通常有無限多組解。"
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
  "contentSha256": "c3b16d7c7e1d5edda6f003eddce08c1d2aa4685d5a64762919374fa5156e617a"
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
    "explanation": "有序數對的分量位置固定。",
    "steps": [
      "讀第一分量。",
      "讀第二分量並保留負號。"
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
    "misconceptionTarget": "交換順序或漏負號",
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
    "contentSha256": "698321ee32a9dac3d0f026bd90e403714a844de4b3d41073a910ae07f450325b"
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
    "explanation": "左右相等，因此是解。",
    "steps": [
      "代入 x=2。",
      "代入 y=1。",
      "比較 7=7。"
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
    "misconceptionTarget": "只看數對未實算",
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
    "contentSha256": "975904613f0c783c11a43735ffecafa5a5210dd7e774efd8de2a2427cbc12a5b"
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
    "explanation": "互為相反數的兩個數相加為 0。",
    "steps": [
      "依序代入 x、y。",
      "計算 x+y。",
      "找出和為 0 的選項。"
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
    "misconceptionTarget": "忽略負號",
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
    "contentSha256": "cac4873b580a36884d6f165b9f70aa3cc013ebf10df316e99cdeab17791689a5"
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
    "explanation": "已知一個分量時，可代入解一元一次方程式。",
    "steps": [
      "代入 x=5。",
      "解 10-k=3。",
      "得到 k=7。"
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
    "misconceptionTarget": "負號前未知數移項錯誤",
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
    "contentSha256": "6c0f2bf7915034900c17fc1e4564335f90b80e7d8de8b81dd280063c35bbca69"
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
    "explanation": "交換順序後，因係數不同，結果可能改變。",
    "steps": [
      "分別代入兩組。",
      "比較左值 5 與 7。"
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
    "misconceptionTarget": "認為分量相同就必然同解",
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
    "contentSha256": "2bd07cc1d6bbbdbcf3f7bfd31ab3c6737e65327a71096014dff43b483d5e959d"
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
    "explanation": "負數代入乘法後再解一元式。",
    "steps": [
      "計算 3(-2)=-6。",
      "解 -6+2y=4。",
      "除以 2。"
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
    "misconceptionTarget": "負數代入未加括號",
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
    "contentSha256": "c61931aacc4204c0bf328b97835fa2d5fb82312d0797a1b34426cf2d52561cae"
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
    "explanation": "分數係數仍按順序代入。",
    "steps": [
      "逐組計算 x 的一半。",
      "再減 y。",
      "找出結果為 2。"
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
    "misconceptionTarget": "把 (1/2)x 誤讀為 1/(2x)",
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
    "contentSha256": "66e859e4d767425cf204d8d08547c0f1f9b0b6f11d403238f3db433d1c7f5893"
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
    "explanation": "分別利用兩個解條件求 a、b，再相加。",
    "steps": [
      "代入第一組求 a=3。",
      "代入第二組求 b=3。",
      "計算 a+b=6。"
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
    "misconceptionTarget": "只完成其中一次代入",
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
    "contentSha256": "b05c02b4300e47e2618e7762a949c298cb237edbd074aea374ec06cf9a2dc5a1"
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
    "explanation": "數對分量含代數式時，第二分量要完整加括號代入。",
    "steps": [
      "代入 x=t、y=t-1。",
      "展開負號。",
      "解 3t+1=10。"
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
    "misconceptionTarget": "減去括號時未變號",
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
    "contentSha256": "f7fbc42dfa704a89f5acaee2e943b507024506a4eb62e5df51b7d41f83fa1b76"
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
    "explanation": "欄位順序是代入的必要資訊。",
    "steps": [
      "讀取資料欄位順序。",
      "代入模型。",
      "比較 26=26。"
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
    "misconceptionTarget": "忽略題幹自訂分量順序",
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
    "contentSha256": "24fabf4739d62d4f555166743887076f4abfe69e0cb8521caf6fe78efe39ed8d"
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
    "explanation": "逐列依票種順序計算總額。",
    "steps": [
      "確認第一欄是成人票。",
      "分別乘票價。",
      "加總比較 7600。"
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
    "misconceptionTarget": "交換票種欄位",
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
    "contentSha256": "3cee7b5363c5c27ce5ab4d58e3ebcb596b8a22e97b9d030722166badc0d22389"
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
    "explanation": "由模型與已知輸入值反求第二欄。",
    "steps": [
      "代入輸入 x=5。",
      "解 15-2y=1。",
      "得到 y=7。"
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
    "misconceptionTarget": "把修正值符號或係數處理錯",
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
    "contentSha256": "c40be177f135b27f602f51e89153d156044ed3f826a5f6e8b8e83f43ee795473"
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
      "(5,1)：10-3=7，是。",
      "(2,-1)：4-3(-1)=7，是。",
      "(-1,-3)：-2-3(-3)=7，是。"
    ],
    "alternativeMethods": [
      "可先整理 y=(2x-7)/3，再檢查每組 y 是否對應。"
    ],
    "reasoningSteps": [
      "保留負數括號。",
      "逐組計算。"
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
    "contentSha256": "c8d67f89af52427db6e618628ebd075ab617cf49a0f9c9f74bb387f0e59a635f"
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
      "(a,2)：a+4=7，所以 a=3。",
      "(1,b)：1+2b=7，所以 b=3。",
      "a+b=6。",
      "第一分量對應 x，第二分量對應 y。"
    ],
    "alternativeMethods": [
      "可由 y=(7-x)/2 分別代入 x=a 與 x=1。"
    ],
    "reasoningSteps": [
      "按順序解釋每組。",
      "各解一個一元式。",
      "合併結果。"
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
    "contentSha256": "a0ba8cc0ce4eb5ac25229f28a42d048da03fc81f6bb3138cfad3f1600b4eb54b"
  }
];

export const DRAWING_SPECS = [];
