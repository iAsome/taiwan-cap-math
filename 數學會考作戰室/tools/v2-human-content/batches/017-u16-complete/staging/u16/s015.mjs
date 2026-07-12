// Deterministically emitted from reviewed CHATGPT_HUMAN_AUTHORED_R1 source.
// Do not edit this staging module by hand.
export const skillData={
  "slot": "s015",
  "lecture": {
    "lectureId": "u16-s015-lecture-r1",
    "unitId": "u16",
    "numericUnitId": 16,
    "topicId": "u16-properties",
    "skillId": "exterior-angle-sum",
    "skillOrder": 15,
    "originalLockedTitle": "多邊形外角和",
    "title": "多邊形外角和：沿邊繞行一圈總轉向 360°",
    "audience": "臺灣國中零基礎至國中教育會考數學滿分",
    "reviewStatus": "independently-reviewed",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
    "learningOutcomes": [
      "能說明凸多邊形每頂點取同方向外角時總和為 360°。",
      "能由內角與相鄰外角互補求單一外角。",
      "能求正多邊形每個外角與邊數。",
      "能辨認選取方向不一致或重複頂點造成的錯誤。"
    ],
    "prerequisiteBridge": "上一個外角技能處理三角形單一頂點。現在把行走方向固定，沿多邊形每一邊前進，在每個頂點轉一次；回到原方向恰好轉一整圈。",
    "prerequisites": [
      {
        "skillId": "triangle-side-angle-relation",
        "requiredLevel": "能使用先備技能「邊角關係」的核心定義與基本運算，並能說明其與本節的連結。"
      }
    ],
    "glossary": [
      {
        "term": "多邊形外角",
        "definition": "沿一邊前進後，在頂點由延長方向轉向下一邊所形成的角。"
      },
      {
        "term": "同方向選取",
        "definition": "每個頂點都取順時針或都取逆時針的外角。"
      },
      {
        "term": "外角和",
        "definition": "凸多邊形每頂點各取一個同方向外角的總和。"
      },
      {
        "term": "正多邊形",
        "definition": "各邊相等且各內角相等的多邊形。"
      },
      {
        "term": "轉向角",
        "definition": "行走時為沿下一邊前進而改變方向的角。"
      }
    ],
    "notation": [
      {
        "symbol": "Σ外角=360°",
        "meaning": "凸多邊形同方向外角總和。"
      },
      {
        "symbol": "單一外角=180°−內角",
        "meaning": "同頂點內角與外角互補。"
      },
      {
        "symbol": "正 n 邊形每個外角=360°÷n",
        "meaning": "所有外角相等。"
      }
    ],
    "conceptNarrative": [
      "沿凸多邊形邊界走一圈，每到頂點轉向一次；回到起點時方向也回到原方向，總轉向是一整圈 360°。",
      "因此外角和不隨邊數改變：三角形、四邊形或十邊形皆為 360°，前提是每頂點各取一個同方向外角。",
      "內角與相鄰外角成一直線，所以和為 180°。這可在已知內角時求外角。",
      "正多邊形的外角全相等，故每個外角為 360°÷n；反過來 n=360°÷每個外角。",
      "若計算出的 n 不是大於等於 3 的整數，就不存在具有該固定外角的正多邊形。"
    ],
    "formalDefinitions": [
      {
        "name": "凸多邊形外角和定理",
        "statement": "凸多邊形在每一頂點各取一個同方向外角，其總和為 360°。"
      },
      {
        "name": "正多邊形單一外角",
        "statement": "正 n 邊形每個外角為 360°/n。"
      }
    ],
    "formulas": [
      {
        "formula": "外角和=360°",
        "conditions": [
          "凸多邊形",
          "每頂點一次",
          "方向一致"
        ],
        "meaning": "與邊數無關。"
      },
      {
        "formula": "e=360°/n",
        "conditions": [
          "正 n 邊形"
        ],
        "meaning": "每個外角 e。"
      },
      {
        "formula": "n=360°/e",
        "conditions": [
          "所有外角相等且 e>0"
        ],
        "meaning": "由外角求邊數。"
      }
    ],
    "nonApplicableCases": [
      "每個頂點取兩個外角會重複計數。",
      "一部分取內側、一部分取外側或方向不一致，不能直接相加為 360°。",
      "非正多邊形的每個外角不一定相等，不能用 360°÷n 求個別角。",
      "把內角和 (n−2)×180° 誤當外角和。",
      "若題目涉及凹多邊形而使用普通正角外角圖示，需明確處理轉向方向；本課會考基礎以凸多邊形為主。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "確認是凸多邊形且每頂點取同方向外角。",
        "check": "是否有漏頂點、重複或方向混合？"
      },
      {
        "step": 2,
        "instruction": "若求總和，直接使用 360°。",
        "check": "不要乘邊數。"
      },
      {
        "step": 3,
        "instruction": "若給內角，先用 180°−內角求相鄰外角。",
        "check": "內外角是否同頂點且鄰補？"
      },
      {
        "step": 4,
        "instruction": "若為正多邊形，使用 360°÷n。",
        "check": "題目是否明確保證各外角相等？"
      },
      {
        "step": 5,
        "instruction": "由外角求邊數時檢查整數性。",
        "check": "n 是否為至少 3 的整數？"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "凸七邊形同方向外角和是多少？",
        "solutionSteps": [
          "外角和與邊數無關。"
        ],
        "answer": "360°。"
      },
      {
        "exampleId": "L2",
        "prompt": "正九邊形每個外角是多少？",
        "solutionSteps": [
          "360°÷9=40°。"
        ],
        "answer": "40°。"
      },
      {
        "exampleId": "L3",
        "prompt": "正多邊形每個外角 24°，求邊數。",
        "solutionSteps": [
          "n=360÷24。",
          "360÷24=15。"
        ],
        "answer": "15 邊形。"
      },
      {
        "exampleId": "L4",
        "prompt": "某凸五邊形四個外角為 60°、80°、95°、70°，求第五個。",
        "solutionSteps": [
          "已知和為 305°。",
          "第五角=360°−305°。"
        ],
        "answer": "55°。"
      },
      {
        "exampleId": "L5",
        "prompt": "正多邊形每個內角 150°，求邊數。",
        "solutionSteps": [
          "外角=180°−150°=30°。",
          "n=360°÷30°。"
        ],
        "answer": "12 邊形。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "外角和算成 n×360°。",
        "why": "把每繞一圈誤分配到每個頂點。",
        "correction": "整條路徑總轉向只有一整圈 360°。"
      },
      {
        "mistake": "使用 (n−2)×180°。",
        "why": "混淆內角和公式。",
        "correction": "外角和固定 360°。"
      },
      {
        "mistake": "非正多邊形也把 360°平均。",
        "why": "未確認各外角相等。",
        "correction": "只有正多邊形可直接平均。"
      },
      {
        "mistake": "內角直接代入 360°÷角度。",
        "why": "公式需要外角。",
        "correction": "先算 e=180°−內角。"
      },
      {
        "mistake": "所得邊數不是整數仍接受。",
        "why": "忽略邊數離散。",
        "correction": "邊數必須是至少 3 的整數。"
      },
      {
        "mistake": "外角取向有的順時針有的逆時針。",
        "why": "未固定行走方向。",
        "correction": "每頂點按同一繞行方向取角。"
      }
    ],
    "selfCheck": [
      "每頂點是否只取一個同方向外角？",
      "總和是否固定為 360°？",
      "只有正多邊形才平均嗎？",
      "內角是否先轉成 180°−內角？",
      "求得邊數是否為至少 3 的整數？"
    ],
    "summary": [
      "凸多邊形同方向外角和固定為 360°。",
      "正 n 邊形每個外角為 360°÷n。",
      "內角與相鄰外角和為 180°。",
      "方向一致與正多邊形條件是套公式關鍵。"
    ],
    "connections": {
      "previous": "單一三角形外角定理處理局部角和。",
      "next": [
        "中線與高線將回到三角形內部的特殊線段。",
        "素養題可把外角解讀成機器人或車輛的轉向。"
      ]
    },
    "figureReferences": [
      "u16-fig-015-polygon-turns"
    ],
    "accessibilityNotes": [
      "u16-fig-015-polygon-turns 的替代文字與結構描述收錄於本技能 drawing-specs.jsonl。"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u16-s015-v001",
        "u16-s015-v002",
        "u16-s015-v003",
        "u16-s015-v004",
        "u16-s015-v005",
        "u16-s015-v006",
        "u16-s015-v007",
        "u16-s015-v008",
        "u16-s015-v009",
        "u16-s015-v010",
        "u16-s015-v011",
        "u16-s015-v012"
      ],
      "constructedResponseIds": [
        "u16-s015-cr001",
        "u16-s015-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "Taiwan junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "針對「多邊形外角和」逐段核對定義、適用條件與反例；重新演算5個例題，確認未使用後續單元才引入的平行線或四邊形定理，並檢查圖形標記不取代文字條件。",
      "reviewVersion": "human-lecture-review-u16-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "8cb9b33a8f0016055ba8670e740d5d34455717c5876af03c4d9dd20e323a3e3a"
  },
  "mcQuestions": [
    {
      "questionId": "u16-s015-v001",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "exterior-angle-sum",
      "skillOrder": 15,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-015-polygon-turns",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "任意凸多邊形每個頂點各取一個同方向外角，這些外角的和是多少？",
      "givenConditions": [
        "沿邊界同方向繞行一周"
      ],
      "target": "記憶多邊形外角和",
      "choices": [
        "180°",
        "(n−2)×180°",
        "360°",
        "n×180°"
      ],
      "answerIndex": 2,
      "independentSolution": "不論邊數，一組同方向外角和皆為360°。",
      "explanation": "沿多邊形繞行一周，方向總共轉360°。 把每個外角視為轉向角。 一周總轉向為360°。",
      "steps": [
        "把每個外角視為轉向角。",
        "一周總轉向為360°。"
      ],
      "optionAnalysis": [
        {
          "choice": "180°",
          "truth": false,
          "reason": "混用三角形內角和。"
        },
        {
          "choice": "(n−2)×180°",
          "truth": false,
          "reason": "這是n邊形內角和。"
        },
        {
          "choice": "360°",
          "truth": true,
          "reason": "沿多邊形繞行一周，方向總共轉360°。"
        },
        {
          "choice": "n×180°",
          "truth": false,
          "reason": "未扣除轉向關係。"
        }
      ],
      "misconceptionTarget": "把外角和誤認會隨邊數增加。",
      "prerequisiteCheck": "知道完整一周為360°。",
      "estimatedTimeSec": "55",
      "unitAndRoundingCheck": "角度精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "限定每頂點一個且同方向，避免取角不一致。",
      "difficultyReason": "基礎題，直接辨認外角和。",
      "literacyContextNecessity": null,
      "authoringIntent": "辨認固定總和。",
      "tags": [
        "空間與形狀",
        "多邊形外角和",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "22896c1bdf7139a7d06fbaae1559ac648bd4bb82cbaec75ce03e4e338d1ba63d"
    },
    {
      "questionId": "u16-s015-v002",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "exterior-angle-sum",
      "skillOrder": 15,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "正九邊形每一個外角是多少度？",
      "givenConditions": [
        "正多邊形各外角相等"
      ],
      "target": "由外角和求單一外角",
      "choices": [
        "20°",
        "40°",
        "140°",
        "162°"
      ],
      "answerIndex": 1,
      "independentSolution": "每個外角為40°。",
      "explanation": "360°÷9=40°。 外角和360°。 除以9個相等外角。",
      "steps": [
        "外角和360°。",
        "除以9個相等外角。"
      ],
      "optionAnalysis": [
        {
          "choice": "20°",
          "truth": false,
          "reason": "把360除以18。"
        },
        {
          "choice": "40°",
          "truth": true,
          "reason": "360°÷9=40°。"
        },
        {
          "choice": "140°",
          "truth": false,
          "reason": "把180−40後取成內角。"
        },
        {
          "choice": "162°",
          "truth": false,
          "reason": "誤用正十邊形內角。"
        }
      ],
      "misconceptionTarget": "以內角和除以邊數。",
      "prerequisiteCheck": "會做除法。",
      "estimatedTimeSec": "60",
      "unitAndRoundingCheck": "角度精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "正九邊形保證九個外角相等。",
      "difficultyReason": "基礎題，單步平均。",
      "literacyContextNecessity": null,
      "authoringIntent": "計算正多邊形外角。",
      "tags": [
        "空間與形狀",
        "多邊形外角和",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "3f2024ae898d24c14b316a599ce122451f5ede578351ec46ab156722292a024c"
    },
    {
      "questionId": "u16-s015-v003",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "exterior-angle-sum",
      "skillOrder": 15,
      "difficulty": "basic",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "正多邊形的一個外角為 30°，它有幾邊？",
      "givenConditions": [
        "外角取同方向的小轉角"
      ],
      "target": "由單一外角反求邊數",
      "choices": [
        "6",
        "10",
        "30",
        "12"
      ],
      "answerIndex": 3,
      "independentSolution": "360÷30=12，所以是正十二邊形。",
      "explanation": "邊數n=360°÷30°=12。 利用n個相等外角和為360°。 求n。",
      "steps": [
        "利用n個相等外角和為360°。",
        "求n。"
      ],
      "optionAnalysis": [
        {
          "choice": "6",
          "truth": false,
          "reason": "用180÷30。"
        },
        {
          "choice": "10",
          "truth": false,
          "reason": "誤認外角36°。"
        },
        {
          "choice": "30",
          "truth": false,
          "reason": "把角度值當邊數。"
        },
        {
          "choice": "12",
          "truth": true,
          "reason": "邊數n=360°÷30°=12。"
        }
      ],
      "misconceptionTarget": "用180°而非360°作總和。",
      "prerequisiteCheck": "會由平均反求個數。",
      "estimatedTimeSec": "60",
      "unitAndRoundingCheck": "邊數為整數。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "30°能整除360°，正多邊形存在。",
      "difficultyReason": "基礎題，直接反算邊數。",
      "literacyContextNecessity": null,
      "authoringIntent": "由外角求邊數。",
      "tags": [
        "空間與形狀",
        "多邊形外角和",
        "basic"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "101e597117bf3e582d3051ee23de1ff61b9976d9173d5b589f65e244a51db082"
    },
    {
      "questionId": "u16-s015-v004",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "exterior-angle-sum",
      "skillOrder": 15,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "一個五邊形的四個同方向外角為 68°、75°、92°、61°，第五個外角是多少度？",
      "givenConditions": [
        "每頂點取一個外角"
      ],
      "target": "利用外角和補缺角",
      "choices": [
        "56°",
        "116°",
        "64°",
        "296°"
      ],
      "answerIndex": 2,
      "independentSolution": "360−296=64。",
      "explanation": "已知和=68+75+92+61=296，缺角=360−296=64°。 加總四個外角。 由360°扣除。",
      "steps": [
        "加總四個外角。",
        "由360°扣除。"
      ],
      "optionAnalysis": [
        {
          "choice": "56°",
          "truth": false,
          "reason": "加總已知角錯誤。"
        },
        {
          "choice": "116°",
          "truth": false,
          "reason": "取64°的補角。"
        },
        {
          "choice": "64°",
          "truth": true,
          "reason": "已知和=68+75+92+61=296，缺角=360−296=64°。"
        },
        {
          "choice": "296°",
          "truth": false,
          "reason": "只給出已知四角和。"
        }
      ],
      "misconceptionTarget": "以540°的五邊形內角和補角。",
      "prerequisiteCheck": "會做多項加減。",
      "estimatedTimeSec": "80",
      "unitAndRoundingCheck": "角度精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "五角均按同向選取，缺角唯一且為正。",
      "difficultyReason": "標準題，需正確加總與補缺。",
      "literacyContextNecessity": null,
      "authoringIntent": "求缺少外角。",
      "tags": [
        "空間與形狀",
        "多邊形外角和",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "e3db5ceeb2c2a8cd2100cd2dfbbbb888ba69665c44180e0446ded74b9a6a5b0f"
    },
    {
      "questionId": "u16-s015-v005",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "exterior-angle-sum",
      "skillOrder": 15,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "正多邊形的每一內角為 150°，此多邊形有幾邊？",
      "givenConditions": [
        "正多邊形內外角互補"
      ],
      "target": "由內角轉外角再求邊數",
      "choices": [
        "5",
        "12",
        "10",
        "15"
      ],
      "answerIndex": 1,
      "independentSolution": "每個外角30°，共有12個。",
      "explanation": "外角=180°−150°=30°，邊數=360°÷30°=12。 先求外角30°。 再用外角和反求邊數。",
      "steps": [
        "先求外角30°。",
        "再用外角和反求邊數。"
      ],
      "optionAnalysis": [
        {
          "choice": "5",
          "truth": false,
          "reason": "誤用150÷30。"
        },
        {
          "choice": "12",
          "truth": true,
          "reason": "外角=180°−150°=30°，邊數=360°÷30°=12。"
        },
        {
          "choice": "10",
          "truth": false,
          "reason": "誤認外角36°。"
        },
        {
          "choice": "15",
          "truth": false,
          "reason": "用180−165的錯誤外角。"
        }
      ],
      "misconceptionTarget": "直接以360除內角。",
      "prerequisiteCheck": "已會線性對角。",
      "estimatedTimeSec": "85",
      "unitAndRoundingCheck": "角度精確，邊數整數。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "正多邊形條件使內角一致。",
      "difficultyReason": "標準題，兩步轉換。",
      "literacyContextNecessity": null,
      "authoringIntent": "由內角推邊數。",
      "tags": [
        "空間與形狀",
        "多邊形外角和",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "93a75d2ec4e76adf81fd6e0a9ef9971a2cebf302dc6cfbb8c09d6cad40fff290"
    },
    {
      "questionId": "u16-s015-v006",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "exterior-angle-sum",
      "skillOrder": 15,
      "difficulty": "standard",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "某凸六邊形的外角比為 1：2：3：4：5：3，最小外角是多少度？",
      "givenConditions": [
        "六個外角同方向且皆為正"
      ],
      "target": "按比值分配360°",
      "choices": [
        "10°",
        "18°",
        "30°",
        "20°"
      ],
      "answerIndex": 3,
      "independentSolution": "最小外角對一份，為20°。",
      "explanation": "比值總和18，最小角=360°÷18=20°。 加比值1+2+3+4+5+3=18。 一份為20°。",
      "steps": [
        "加比值1+2+3+4+5+3=18。",
        "一份為20°。"
      ],
      "optionAnalysis": [
        {
          "choice": "10°",
          "truth": false,
          "reason": "把比值總和誤算成36。"
        },
        {
          "choice": "18°",
          "truth": false,
          "reason": "用360÷20。"
        },
        {
          "choice": "30°",
          "truth": false,
          "reason": "把比值總和誤算成12。"
        },
        {
          "choice": "20°",
          "truth": true,
          "reason": "比值總和18，最小角=360°÷18=20°。"
        }
      ],
      "misconceptionTarget": "把邊數6當作比值總和。",
      "prerequisiteCheck": "會做比例分配。",
      "estimatedTimeSec": "90",
      "unitAndRoundingCheck": "角度精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "所有外角均小於180°，可構成凸多邊形角資料。",
      "difficultyReason": "標準題，使用比例分配固定總和。",
      "literacyContextNecessity": null,
      "authoringIntent": "外角比例。",
      "tags": [
        "空間與形狀",
        "多邊形外角和",
        "standard"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "c44589c488421ff8f3bb740778ced231e547c6978e4f238c3266d9755fe74ddd"
    },
    {
      "questionId": "u16-s015-v007",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "exterior-angle-sum",
      "skillOrder": 15,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "一個凸多邊形中，有 7 個外角各為 40°，其餘外角各為 20°。若所有外角同方向，這個多邊形共有幾邊？",
      "givenConditions": [
        "每個頂點恰取一個外角"
      ],
      "target": "由分組外角和求未知個數",
      "choices": [
        "11",
        "9",
        "10",
        "14"
      ],
      "answerIndex": 0,
      "independentSolution": "280+4×20=360，所以有11邊。",
      "explanation": "7×40°=280°，剩80°；80°÷20°=4個，總邊數7+4=11。 算已知七角總和。 求剩餘角個數。 加總頂點數。",
      "steps": [
        "算已知七角總和。",
        "求剩餘角個數。",
        "加總頂點數。"
      ],
      "optionAnalysis": [
        {
          "choice": "11",
          "truth": true,
          "reason": "7×40°=280°，剩80°；80°÷20°=4個，總邊數7+4=11。"
        },
        {
          "choice": "9",
          "truth": false,
          "reason": "只把剩餘80°除以40°。"
        },
        {
          "choice": "10",
          "truth": false,
          "reason": "漏算一個20°外角。"
        },
        {
          "choice": "14",
          "truth": false,
          "reason": "把7個40°誤當半圈。"
        }
      ],
      "misconceptionTarget": "只求出其餘外角個數未加7。",
      "prerequisiteCheck": "會解整數個數問題。",
      "estimatedTimeSec": "105",
      "unitAndRoundingCheck": "角度精確，個數為整數。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "外角皆正且小於180°，總和條件唯一決定個數。",
      "difficultyReason": "進階題，需先分配剩餘總角再計數。",
      "literacyContextNecessity": null,
      "authoringIntent": "由兩種轉角求邊數。",
      "tags": [
        "空間與形狀",
        "多邊形外角和",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "39a456bf09e20aaa66cd24e03089dff8eec51bd01eb9a049651b001c012c57c2"
    },
    {
      "questionId": "u16-s015-v008",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "exterior-angle-sum",
      "skillOrder": 15,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "某凸多邊形的外角依序為 x°、2x°、2x°、3x°、4x°。最大內角是多少度？",
      "givenConditions": [
        "外角皆取小於180°的同方向角"
      ],
      "target": "由外角比例求最大內角",
      "choices": [
        "150°",
        "30°",
        "120°",
        "240°"
      ],
      "answerIndex": 0,
      "independentSolution": "五個外角為30、60、60、90、120，最大內角150°。",
      "explanation": "外角和12x=360，x=30。最大內角對最小外角x，為180−30=150°。 求比值總和12。 得x=30°。 最小外角對最大內角。",
      "steps": [
        "求比值總和12。",
        "得x=30°。",
        "最小外角對最大內角。"
      ],
      "optionAnalysis": [
        {
          "choice": "150°",
          "truth": true,
          "reason": "外角和12x=360，x=30。最大內角對最小外角x，為180−30=150°。"
        },
        {
          "choice": "30°",
          "truth": false,
          "reason": "這是最小外角，不是最大內角。"
        },
        {
          "choice": "120°",
          "truth": false,
          "reason": "把2x的補角當最大。"
        },
        {
          "choice": "240°",
          "truth": false,
          "reason": "未使用內外角互補。"
        }
      ],
      "misconceptionTarget": "以最大外角配最大內角。",
      "prerequisiteCheck": "已會內外角互補。",
      "estimatedTimeSec": "115",
      "unitAndRoundingCheck": "角度精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "外角皆介於0與180，凸性一致。",
      "difficultyReason": "進階題，需理解內角與外角反向排序。",
      "literacyContextNecessity": null,
      "authoringIntent": "比例、補角與極值整合。",
      "tags": [
        "空間與形狀",
        "多邊形外角和",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "53a030b1e0de2dc6b1df0e42d684b758b5b46a16d1eca5b4cf8e94b8332c87fc"
    },
    {
      "questionId": "u16-s015-v009",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "exterior-angle-sum",
      "skillOrder": 15,
      "difficulty": "advanced",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "一名學生計算正十五邊形的外角時寫：『內角和=(15−2)×180°=2340°，所以每個外角=2340°÷15=156°。』錯誤在哪裡？",
      "givenConditions": [
        "正十五邊形"
      ],
      "target": "分析錯把內角當外角的推理",
      "choices": [
        "內角和公式錯了",
        "2340÷15應為154",
        "156°是每一內角，外角應為24°",
        "外角應為360°−156°=204°"
      ],
      "answerIndex": 2,
      "independentSolution": "錯在把每一內角命名為外角，正確外角為24°。",
      "explanation": "2340÷15求得的是平均內角；外角=180−156=24，也等於360÷15。 確認內角和計算。 辨認156°的身分。 轉成外角24°。",
      "steps": [
        "確認內角和計算。",
        "辨認156°的身分。",
        "轉成外角24°。"
      ],
      "optionAnalysis": [
        {
          "choice": "內角和公式錯了",
          "truth": false,
          "reason": "公式與2340°均正確。"
        },
        {
          "choice": "2340÷15應為154",
          "truth": false,
          "reason": "實際確為156。"
        },
        {
          "choice": "156°是每一內角，外角應為24°",
          "truth": true,
          "reason": "2340÷15求得的是平均內角；外角=180−156=24，也等於360÷15。"
        },
        {
          "choice": "外角應為360°−156°=204°",
          "truth": false,
          "reason": "單一內外角互補用180°，不是360°。"
        }
      ],
      "misconceptionTarget": "只檢查算術而未檢查量的意義。",
      "prerequisiteCheck": "理解內角與外角。",
      "estimatedTimeSec": "120",
      "unitAndRoundingCheck": "角度精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題目要求指出概念錯誤，唯一完整評析包含24°。",
      "difficultyReason": "進階題，要求審查一段看似正確的計算。",
      "literacyContextNecessity": null,
      "authoringIntent": "診斷推理錯誤。",
      "tags": [
        "空間與形狀",
        "多邊形外角和",
        "advanced"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "5e6c6db14d5a9c2e17296b05cee297b22eb335547a0aee4542afa5f6a4e6edbf"
    },
    {
      "questionId": "u16-s015-v010",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "exterior-angle-sum",
      "skillOrder": 15,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-015-polygon-turns",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "巡檢機器人沿凸多邊形倉庫外牆順時針走一圈，每到轉角都按較小角右轉。前五次轉向為 50°、72°、65°、48°、55°，最後一次要轉多少度才會回到原方向？",
      "givenConditions": [
        "路線只繞一圈",
        "所有轉向同為順時針"
      ],
      "target": "把轉向資料視為外角",
      "choices": [
        "70°",
        "20°",
        "110°",
        "290°"
      ],
      "answerIndex": 0,
      "independentSolution": "50+72+65+48+55=290，剩70。",
      "explanation": "一圈總轉向360°；已知和290°，最後轉70°。 加總前五次轉向。 由360°扣除。",
      "steps": [
        "加總前五次轉向。",
        "由360°扣除。"
      ],
      "optionAnalysis": [
        {
          "choice": "70°",
          "truth": true,
          "reason": "一圈總轉向360°；已知和290°，最後轉70°。"
        },
        {
          "choice": "20°",
          "truth": false,
          "reason": "誤以180°減已知和。"
        },
        {
          "choice": "110°",
          "truth": false,
          "reason": "取70°的補角。"
        },
        {
          "choice": "290°",
          "truth": false,
          "reason": "只給已知轉向總和。"
        }
      ],
      "misconceptionTarget": "把牆面內角當機器人的轉向角。",
      "prerequisiteCheck": "知道完整轉向一圈。",
      "estimatedTimeSec": "100",
      "unitAndRoundingCheck": "角度以度表示且精確。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "順時針同向和一圈條件排除正負號歧義。",
      "difficultyReason": "素養題，需將機器人轉向翻成多邊形外角。",
      "literacyContextNecessity": "機器人控制使用的是每次轉向而不是建物內角；情境決定外角模型與方向。",
      "authoringIntent": "規劃巡檢轉向。",
      "tags": [
        "空間與形狀",
        "多邊形外角和",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "78a1fb9e133e9a1d77a51f6e4be50c13ab865c5a18f38de5d558dffd3c133f48"
    },
    {
      "questionId": "u16-s015-v011",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "exterior-angle-sum",
      "skillOrder": 15,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "園區環形步道是正多邊形。行走者每到一個路口都向左轉 24°，走完一圈回到起點。步道共有幾段直線道路？",
      "givenConditions": [
        "每個路口轉角相同",
        "不重複繞圈"
      ],
      "target": "由固定轉角求道路段數",
      "choices": [
        "7",
        "15",
        "12",
        "24"
      ],
      "answerIndex": 1,
      "independentSolution": "360÷24=15，所以有15段。",
      "explanation": "每次轉24°，一圈360°，次數=360÷24=15；路口數等於道路段數。 將左轉角視為外角。 求轉向次數。 對應道路段數。",
      "steps": [
        "將左轉角視為外角。",
        "求轉向次數。",
        "對應道路段數。"
      ],
      "optionAnalysis": [
        {
          "choice": "7",
          "truth": false,
          "reason": "用180÷24後取整。"
        },
        {
          "choice": "15",
          "truth": true,
          "reason": "每次轉24°，一圈360°，次數=360÷24=15；路口數等於道路段數。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "誤用30°的正十二邊形。"
        },
        {
          "choice": "24",
          "truth": false,
          "reason": "把轉角度數當段數。"
        }
      ],
      "misconceptionTarget": "忽略『走完一圈』而使用內角和。",
      "prerequisiteCheck": "會由轉向次數對應邊數。",
      "estimatedTimeSec": "95",
      "unitAndRoundingCheck": "角度精確，除法整除。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題幹說正多邊形且每次同向，答案唯一。",
      "difficultyReason": "素養題，路線導航資料直接提供外角。",
      "literacyContextNecessity": "道路段數無法從裸角24°直接理解，必須利用走一圈及每路口轉向的情境。",
      "authoringIntent": "由導航轉角推道路數。",
      "tags": [
        "空間與形狀",
        "多邊形外角和",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "85c4345ba7c1823000f59ecceebf3671166d2d6225d99e5be0a49753b7a9fc58"
    },
    {
      "questionId": "u16-s015-v012",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "exterior-angle-sum",
      "skillOrder": 15,
      "difficulty": "literacy",
      "type": "mc",
      "visualMode": "text-only",
      "figureId": null,
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "text": "無人機依序沿五條直線航段圍成凸五邊形巡航，前四個同向轉角為 84°、66°、73°、59°。控制器把最後轉角設為 82°。此設定會產生什麼結果？",
      "givenConditions": [
        "忽略風力",
        "每次轉角視為精確"
      ],
      "target": "檢核閉合航線的總轉向",
      "choices": [
        "可以閉合，因五角相加為360°",
        "無法閉合，最後轉角應為82°的補角98°",
        "可以閉合，只要五條航段長度相等",
        "無法以同一方向閉合，最後轉角應為78°"
      ],
      "answerIndex": 3,
      "independentSolution": "282+82=364，不是360，因此方向多轉4°而不能依指定五段閉合。",
      "explanation": "前四角和282°，閉合一圈須360°，故最後應78°；設82°會多轉4°。 加前四轉角。 算缺角78°。 比較控制器設定。",
      "steps": [
        "加前四轉角。",
        "算缺角78°。",
        "比較控制器設定。"
      ],
      "optionAnalysis": [
        {
          "choice": "可以閉合，因五角相加為360°",
          "truth": false,
          "reason": "84+66+73+59+82=364°。"
        },
        {
          "choice": "無法閉合，最後轉角應為82°的補角98°",
          "truth": false,
          "reason": "補角不是缺少的總轉向。"
        },
        {
          "choice": "可以閉合，只要五條航段長度相等",
          "truth": false,
          "reason": "邊長相等不能修正總轉向錯誤。"
        },
        {
          "choice": "無法以同一方向閉合，最後轉角應為78°",
          "truth": true,
          "reason": "前四角和282°，閉合一圈須360°，故最後應78°；設82°會多轉4°。"
        }
      ],
      "misconceptionTarget": "只看設定接近正確就接受。",
      "prerequisiteCheck": "會使用外角和。",
      "estimatedTimeSec": "120",
      "unitAndRoundingCheck": "角度精確，不能以誤差容許。",
      "notationCheck": "符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
      "ambiguityAndBoundaryAudit": "題目只判斷方向閉合；航段長度另需配合，但錯誤轉向已足以否決。",
      "difficultyReason": "素養題，需像控制器驗證一樣查核資料一致性。",
      "literacyContextNecessity": "控制器的轉角總和是閉合必要條件；實務設定與理論缺角的比較構成不可刪除的任務。",
      "authoringIntent": "驗證無人機航線。",
      "tags": [
        "空間與形狀",
        "多邊形外角和",
        "literacy"
      ],
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "d65275521891cc0330aab9f3c1c1816b7af1c55a4e7bf14b163bf2669aabb9d9"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u16-s015-cr001",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "exterior-angle-sum",
      "skillOrder": 15,
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "figure-supported",
      "figureId": "u16-fig-015-polygon-turns",
      "prompt": "一個凸六邊形的六個同方向外角比為 1：2：2：3：4：6。求每個外角，並檢查是否符合凸多邊形條件。",
      "requiredWork": [
        "利用外角和360°。",
        "按比例分配。",
        "檢查每角介於0°與180°之間。"
      ],
      "fullCreditSolution": [
        "比值總和18，一份=360°÷18=20°。",
        "六角依序為20°、40°、40°、60°、80°、120°。",
        "每個外角皆大於0°且小於180°，符合凸多邊形外角的必要角度範圍。"
      ],
      "alternativeSolutions": [
        "也可先設六角為k、2k、2k、3k、4k、6k，列18k=360。"
      ],
      "reasoningSteps": [
        "比值總和18，一份=360°÷18=20°。",
        "六角依序為20°、40°、40°、60°、80°、120°。",
        "每個外角皆大於0°且小於180°，符合凸多邊形外角的必要角度範圍。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "六角完整正確，並明確檢查0<外角<180。"
        },
        {
          "score": 2,
          "criteria": "比例與大多數角正確，但漏一角或凸性檢查簡略。"
        },
        {
          "score": 1,
          "criteria": "求得一份20°但未列完整六角。"
        },
        {
          "score": 0,
          "criteria": "使用內角和720°分配、比值總和錯且無合理後續。"
        }
      ],
      "partialCreditRules": [
        "比例與大多數角正確，但漏一角或凸性檢查簡略。",
        "求得一份20°但未列完整六角。"
      ],
      "followThroughPolicy": "若一份算錯但六角依正確比例列出並做合理範圍檢查，最高2分。",
      "unitAndNotationRules": "角度須附°；外角順序依題示比例。",
      "answerOnlyPolicy": "只答20°最多1分。",
      "notationRules": "全等式須依對應順序書寫；角度標示 °，長度與面積單位須分清。",
      "commonErrors": [
        "把六邊形內角和當外角和。",
        "最大外角120°誤判超過90°就非凸。"
      ],
      "independentReview": {
        "derivedResult": "20°、40°、40°、60°、80°、120°，角度範圍符合凸性。",
        "ambiguity": "角度條件是必要且與題設相容；題目不要求實際尺規構造。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "b75f978dd016f52c61029a07bcd4a84263267b1b2ae051fd20d543016c1c8a5f"
    },
    {
      "questionId": "u16-s015-cr002",
      "unitId": "u16",
      "numericUnitId": 16,
      "topicId": "u16-properties",
      "skillId": "exterior-angle-sum",
      "skillOrder": 15,
      "difficulty": "standard",
      "type": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "prompt": "巡檢車沿一個正多邊形外圍行駛，每到頂點向右轉24°。它走完一圈共行駛15段，每段80 m。驗證『15段』是否與轉角相容，並求總路程。",
      "requiredWork": [
        "由360÷24求轉向次數。",
        "與15段比較。",
        "計算15×80。"
      ],
      "fullCreditSolution": [
        "一圈同方向總轉向360°，所需頂點數=360÷24=15，與15段相容。",
        "總路程=15×80=1200 m。"
      ],
      "alternativeSolutions": [
        "可先算15×24=360驗證，再計算周長。"
      ],
      "reasoningSteps": [
        "一圈同方向總轉向360°，所需頂點數=360÷24=15，與15段相容。",
        "總路程=15×80=1200 m。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "正確驗證15×24=360並得總路程1200 m。"
        },
        {
          "score": 2,
          "criteria": "驗證與路程之一完整，另一部分有單一算術錯。"
        },
        {
          "score": 1,
          "criteria": "只完成轉角相容或只算路程。"
        },
        {
          "score": 0,
          "criteria": "使用內角156°作轉向總和、判斷不相容或無作答。"
        }
      ],
      "partialCreditRules": [
        "驗證與路程之一完整，另一部分有單一算術錯。",
        "只完成轉角相容或只算路程。"
      ],
      "followThroughPolicy": "若把80抄成其他值但相容性驗證完整，至少1分、依後續一致最高2分。",
      "unitAndNotationRules": "角度°、長度m；總路程可寫1.2 km但須正確換算。",
      "answerOnlyPolicy": "只答1200 m無驗證，最多1分。",
      "notationRules": "全等式須依對應順序書寫；角度標示 °，長度與面積單位須分清。",
      "commonErrors": [
        "把頂點數與邊數判成不同。",
        "360÷24算錯。"
      ],
      "independentReview": {
        "derivedResult": "15段相容；總路程1200 m。",
        "ambiguity": "正多邊形每頂點一次轉向，頂點數等於邊數。",
        "decision": "pass"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "e2f3bd6895e101ceae85ed27cdbdfa5460d23d4257567f98a6e383d72a76cf97"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u16-s015-v001",
      "unitId": "u16",
      "skillId": "exterior-angle-sum",
      "contentSha256": "22896c1bdf7139a7d06fbaae1559ac648bd4bb82cbaec75ce03e4e338d1ba63d",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "不論邊數，一組同方向外角和皆為360°。",
      "derivedAnswer": "360°",
      "storedAnswer": "360°",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「360°」；另外三個選項逐一排除：「180°」：混用三角形內角和。；「(n−2)×180°」：這是n邊形內角和。；「n×180°」：未扣除轉向關係。",
        "undefinedSymbol": "題幹符號與詞語已在「多邊形外角和」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度精確。",
        "roundingConflict": "依精確資料獨立推導為「360°」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "限定每頂點一個且同方向，避免取角不一致。",
        "alternateReading": "若採常見誤讀「把外角和誤認會隨邊數增加。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，直接辨認外角和。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "知道完整一周為360°。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「記憶多邊形外角和」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「任意凸多邊形每個頂點各取一個同方向外角，這些外角的和是多少？」獨立重算：不論邊數，一組同方向外角和皆為360°。 正確選項「360°」。四選項核對：180°=假，混用三角形內角和。；(n−2)×180°=假，這是n邊形內角和。；360°=真，沿多邊形繞行一周，方向總共轉360°。；n×180°=假，未扣除轉向關係。 邊界：限定每頂點一個且同方向，避免取角不一致。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s015-v002",
      "unitId": "u16",
      "skillId": "exterior-angle-sum",
      "contentSha256": "3f2024ae898d24c14b316a599ce122451f5ede578351ec46ab156722292a024c",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "每個外角為40°。",
      "derivedAnswer": "40°",
      "storedAnswer": "40°",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「40°」；另外三個選項逐一排除：「20°」：把360除以18。；「140°」：把180−40後取成內角。；「162°」：誤用正十邊形內角。",
        "undefinedSymbol": "題幹符號與詞語已在「多邊形外角和」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度精確。",
        "roundingConflict": "依精確資料獨立推導為「40°」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "正九邊形保證九個外角相等。",
        "alternateReading": "若採常見誤讀「以內角和除以邊數。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，單步平均。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會做除法。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「由外角和求單一外角」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「正九邊形每一個外角是多少度？」獨立重算：每個外角為40°。 正確選項「40°」。四選項核對：20°=假，把360除以18。；40°=真，360°÷9=40°。；140°=假，把180−40後取成內角。；162°=假，誤用正十邊形內角。 邊界：正九邊形保證九個外角相等。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s015-v003",
      "unitId": "u16",
      "skillId": "exterior-angle-sum",
      "contentSha256": "101e597117bf3e582d3051ee23de1ff61b9976d9173d5b589f65e244a51db082",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "360÷30=12，所以是正十二邊形。",
      "derivedAnswer": "12",
      "storedAnswer": "12",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「12」；另外三個選項逐一排除：「6」：用180÷30。；「10」：誤認外角36°。；「30」：把角度值當邊數。",
        "undefinedSymbol": "題幹符號與詞語已在「多邊形外角和」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "邊數為整數。",
        "roundingConflict": "依精確資料獨立推導為「12」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "30°能整除360°，正多邊形存在。",
        "alternateReading": "若採常見誤讀「用180°而非360°作總和。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "基礎題，直接反算邊數。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會由平均反求個數。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「由單一外角反求邊數」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「正多邊形的一個外角為 30°，它有幾邊？」獨立重算：360÷30=12，所以是正十二邊形。 正確選項「12」。四選項核對：6=假，用180÷30。；10=假，誤認外角36°。；30=假，把角度值當邊數。；12=真，邊數n=360°÷30°=12。 邊界：30°能整除360°，正多邊形存在。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s015-v004",
      "unitId": "u16",
      "skillId": "exterior-angle-sum",
      "contentSha256": "e3db5ceeb2c2a8cd2100cd2dfbbbb888ba69665c44180e0446ded74b9a6a5b0f",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "360−296=64。",
      "derivedAnswer": "64°",
      "storedAnswer": "64°",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「64°」；另外三個選項逐一排除：「56°」：加總已知角錯誤。；「116°」：取64°的補角。；「296°」：只給出已知四角和。",
        "undefinedSymbol": "題幹符號與詞語已在「多邊形外角和」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度精確。",
        "roundingConflict": "依精確資料獨立推導為「64°」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "五角均按同向選取，缺角唯一且為正。",
        "alternateReading": "若採常見誤讀「以540°的五邊形內角和補角。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，需正確加總與補缺。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會做多項加減。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「利用外角和補缺角」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一個五邊形的四個同方向外角為 68°、75°、92°、61°，第五個外角是多少度？」獨立重算：360−296=64。 正確選項「64°」。四選項核對：56°=假，加總已知角錯誤。；116°=假，取64°的補角。；64°=真，已知和=68+75+92+61=296，缺角=360−296=64°。；296°=假，只給出已知四角和。 邊界：五角均按同向選取，缺角唯一且為正。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s015-v005",
      "unitId": "u16",
      "skillId": "exterior-angle-sum",
      "contentSha256": "93a75d2ec4e76adf81fd6e0a9ef9971a2cebf302dc6cfbb8c09d6cad40fff290",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "每個外角30°，共有12個。",
      "derivedAnswer": "12",
      "storedAnswer": "12",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「12」；另外三個選項逐一排除：「5」：誤用150÷30。；「10」：誤認外角36°。；「15」：用180−165的錯誤外角。",
        "undefinedSymbol": "題幹符號與詞語已在「多邊形外角和」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度精確，邊數整數。",
        "roundingConflict": "依精確資料獨立推導為「12」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "正多邊形條件使內角一致。",
        "alternateReading": "若採常見誤讀「直接以360除內角。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，兩步轉換。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "已會線性對角。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「由內角轉外角再求邊數」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「正多邊形的每一內角為 150°，此多邊形有幾邊？」獨立重算：每個外角30°，共有12個。 正確選項「12」。四選項核對：5=假，誤用150÷30。；12=真，外角=180°−150°=30°，邊數=360°÷30°=12。；10=假，誤認外角36°。；15=假，用180−165的錯誤外角。 邊界：正多邊形條件使內角一致。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s015-v006",
      "unitId": "u16",
      "skillId": "exterior-angle-sum",
      "contentSha256": "c44589c488421ff8f3bb740778ced231e547c6978e4f238c3266d9755fe74ddd",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "最小外角對一份，為20°。",
      "derivedAnswer": "20°",
      "storedAnswer": "20°",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「20°」；另外三個選項逐一排除：「10°」：把比值總和誤算成36。；「18°」：用360÷20。；「30°」：把比值總和誤算成12。",
        "undefinedSymbol": "題幹符號與詞語已在「多邊形外角和」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度精確。",
        "roundingConflict": "依精確資料獨立推導為「20°」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "所有外角均小於180°，可構成凸多邊形角資料。",
        "alternateReading": "若採常見誤讀「把邊數6當作比值總和。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "標準題，使用比例分配固定總和。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會做比例分配。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「按比值分配360°」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某凸六邊形的外角比為 1：2：3：4：5：3，最小外角是多少度？」獨立重算：最小外角對一份，為20°。 正確選項「20°」。四選項核對：10°=假，把比值總和誤算成36。；18°=假，用360÷20。；30°=假，把比值總和誤算成12。；20°=真，比值總和18，最小角=360°÷18=20°。 邊界：所有外角均小於180°，可構成凸多邊形角資料。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s015-v007",
      "unitId": "u16",
      "skillId": "exterior-angle-sum",
      "contentSha256": "39a456bf09e20aaa66cd24e03089dff8eec51bd01eb9a049651b001c012c57c2",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "280+4×20=360，所以有11邊。",
      "derivedAnswer": "11",
      "storedAnswer": "11",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「11」；另外三個選項逐一排除：「9」：只把剩餘80°除以40°。；「10」：漏算一個20°外角。；「14」：把7個40°誤當半圈。",
        "undefinedSymbol": "題幹符號與詞語已在「多邊形外角和」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度精確，個數為整數。",
        "roundingConflict": "依精確資料獨立推導為「11」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "外角皆正且小於180°，總和條件唯一決定個數。",
        "alternateReading": "若採常見誤讀「只求出其餘外角個數未加7。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，需先分配剩餘總角再計數。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "會解整數個數問題。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「由分組外角和求未知個數」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一個凸多邊形中，有 7 個外角各為 40°，其餘外角各為 20°。若所有外角同方向，這個多邊形共有幾邊？」獨立重算：280+4×20=360，所以有11邊。 正確選項「11」。四選項核對：11=真，7×40°=280°，剩80°；80°÷20°=4個，總邊數7+4=11。；9=假，只把剩餘80°除以40°。；10=假，漏算一個20°外角。；14=假，把7個40°誤當半圈。 邊界：外角皆正且小於180°，總和條件唯一決定個數。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s015-v008",
      "unitId": "u16",
      "skillId": "exterior-angle-sum",
      "contentSha256": "53a030b1e0de2dc6b1df0e42d684b758b5b46a16d1eca5b4cf8e94b8332c87fc",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "五個外角為30、60、60、90、120，最大內角150°。",
      "derivedAnswer": "150°",
      "storedAnswer": "150°",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「150°」；另外三個選項逐一排除：「30°」：這是最小外角，不是最大內角。；「120°」：把2x的補角當最大。；「240°」：未使用內外角互補。",
        "undefinedSymbol": "題幹符號與詞語已在「多邊形外角和」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度精確。",
        "roundingConflict": "依精確資料獨立推導為「150°」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "外角皆介於0與180，凸性一致。",
        "alternateReading": "若採常見誤讀「以最大外角配最大內角。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，需理解內角與外角反向排序。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "已會內外角互補。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「由外角比例求最大內角」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某凸多邊形的外角依序為 x°、2x°、2x°、3x°、4x°。最大內角是多少度？」獨立重算：五個外角為30、60、60、90、120，最大內角150°。 正確選項「150°」。四選項核對：150°=真，外角和12x=360，x=30。最大內角對最小外角x，為180−30=150°。；30°=假，這是最小外角，不是最大內角。；120°=假，把2x的補角當最大。；240°=假，未使用內外角互補。 邊界：外角皆介於0與180，凸性一致。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s015-v009",
      "unitId": "u16",
      "skillId": "exterior-angle-sum",
      "contentSha256": "5e6c6db14d5a9c2e17296b05cee297b22eb335547a0aee4542afa5f6a4e6edbf",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "錯在把每一內角命名為外角，正確外角為24°。",
      "derivedAnswer": "156°是每一內角，外角應為24°",
      "storedAnswer": "156°是每一內角，外角應為24°",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「156°是每一內角，外角應為24°」；另外三個選項逐一排除：「內角和公式錯了」：公式與2340°均正確。；「2340÷15應為154」：實際確為156。；「外角應為360°−156°=204°」：單一內外角互補用180°，不是360°。",
        "undefinedSymbol": "題幹符號與詞語已在「多邊形外角和」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度精確。",
        "roundingConflict": "依精確資料獨立推導為「156°是每一內角，外角應為24°」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題目要求指出概念錯誤，唯一完整評析包含24°。",
        "alternateReading": "若採常見誤讀「只檢查算術而未檢查量的意義。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "進階題，要求審查一段看似正確的計算。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "理解內角與外角。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「分析錯把內角當外角的推理」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一名學生計算正十五邊形的外角時寫：『內角和=(15−2)×180°=2340°，所以每個外角=2340°÷15=156°。』錯誤在哪裡？」獨立重算：錯在把每一內角命名為外角，正確外角為24°。 正確選項「156°是每一內角，外角應為24°」。四選項核對：內角和公式錯了=假，公式與2340°均正確。；2340÷15應為154=假，實際確為156。；156°是每一內角，外角應為24°=真，2340÷15求得的是平均內角；外角=180−156=24，也等於360÷15。；外角應為360°−156°=204°=假，單一內外角互補用180°，不是360°。 邊界：題目要求指出概念錯誤，唯一完整評析包含24°。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s015-v010",
      "unitId": "u16",
      "skillId": "exterior-angle-sum",
      "contentSha256": "78a1fb9e133e9a1d77a51f6e4be50c13ab865c5a18f38de5d558dffd3c133f48",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "50+72+65+48+55=290，剩70。",
      "derivedAnswer": "70°",
      "storedAnswer": "70°",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「70°」；另外三個選項逐一排除：「20°」：誤以180°減已知和。；「110°」：取70°的補角。；「290°」：只給已知轉向總和。",
        "undefinedSymbol": "題幹符號與詞語已在「多邊形外角和」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度以度表示且精確。",
        "roundingConflict": "依精確資料獨立推導為「70°」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "順時針同向和一圈條件排除正負號歧義。",
        "alternateReading": "若採常見誤讀「把牆面內角當機器人的轉向角。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，需將機器人轉向翻成多邊形外角。",
      "literacyContextNecessity": "機器人控制使用的是每次轉向而不是建物內角；情境決定外角模型與方向。",
      "prerequisiteCheck": "知道完整轉向一圈。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「把轉向資料視為外角」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「巡檢機器人沿凸多邊形倉庫外牆順時針走一圈，每到轉角都按較小角右轉。前五次轉向為 50°、72°、65°、48°、55°，最後一次要轉多少度才會回到原方向？」獨立重算：50+72+65+48+55=290，剩70。 正確選項「70°」。四選項核對：70°=真，一圈總轉向360°；已知和290°，最後轉70°。；20°=假，誤以180°減已知和。；110°=假，取70°的補角。；290°=假，只給已知轉向總和。 邊界：順時針同向和一圈條件排除正負號歧義。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s015-v011",
      "unitId": "u16",
      "skillId": "exterior-angle-sum",
      "contentSha256": "85c4345ba7c1823000f59ecceebf3671166d2d6225d99e5be0a49753b7a9fc58",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "360÷24=15，所以有15段。",
      "derivedAnswer": "15",
      "storedAnswer": "15",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「15」；另外三個選項逐一排除：「7」：用180÷24後取整。；「12」：誤用30°的正十二邊形。；「24」：把轉角度數當段數。",
        "undefinedSymbol": "題幹符號與詞語已在「多邊形外角和」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度精確，除法整除。",
        "roundingConflict": "依精確資料獨立推導為「15」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題幹說正多邊形且每次同向，答案唯一。",
        "alternateReading": "若採常見誤讀「忽略『走完一圈』而使用內角和。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，路線導航資料直接提供外角。",
      "literacyContextNecessity": "道路段數無法從裸角24°直接理解，必須利用走一圈及每路口轉向的情境。",
      "prerequisiteCheck": "會由轉向次數對應邊數。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「由固定轉角求道路段數」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「園區環形步道是正多邊形。行走者每到一個路口都向左轉 24°，走完一圈回到起點。步道共有幾段直線道路？」獨立重算：360÷24=15，所以有15段。 正確選項「15」。四選項核對：7=假，用180÷24後取整。；15=真，每次轉24°，一圈360°，次數=360÷24=15；路口數等於道路段數。；12=假，誤用30°的正十二邊形。；24=假，把轉角度數當段數。 邊界：題幹說正多邊形且每次同向，答案唯一。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u16-s015-v012",
      "unitId": "u16",
      "skillId": "exterior-angle-sum",
      "contentSha256": "d65275521891cc0330aab9f3c1c1816b7af1c55a4e7bf14b163bf2669aabb9d9",
      "reviewVersion": "human-review-u16-r1.0",
      "independentSolution": "282+82=364，不是360，因此方向多轉4°而不能依指定五段閉合。",
      "derivedAnswer": "無法以同一方向閉合，最後轉角應為78°",
      "storedAnswer": "無法以同一方向閉合，最後轉角應為78°",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "重新解題得到「無法以同一方向閉合，最後轉角應為78°」；另外三個選項逐一排除：「可以閉合，因五角相加為360°」：84+66+73+59+82=364°。；「無法閉合，最後轉角應為82°的補角98°」：補角不是缺少的總轉向。；「可以閉合，只要五條航段長度相等」：邊長相等不能修正總轉向錯誤。",
        "undefinedSymbol": "題幹符號與詞語已在「多邊形外角和」講義定義；特別核對：符號依本技能講義定義，頂點順序與等號方向已逐一核對。",
        "unitConflict": "角度精確，不能以誤差容許。",
        "roundingConflict": "依精確資料獨立推導為「無法以同一方向閉合，最後轉角應為78°」，未以圖形量測或未指定四捨五入改變答案。",
        "domainBoundary": "題目只判斷方向閉合；航段長度另需配合，但錯誤轉向已足以否決。",
        "alternateReading": "若採常見誤讀「只看設定接近正確就接受。」，會違反題目條件或定義，不能形成第二個正解。"
      },
      "difficultyReason": "素養題，需像控制器驗證一樣查核資料一致性。",
      "literacyContextNecessity": "控制器的轉角總和是閉合必要條件；實務設定與理論缺角的比較構成不可刪除的任務。",
      "prerequisiteCheck": "會使用外角和。",
      "languageCheck": "繁體中文與臺灣數學用語已核對；目標「檢核閉合航線的總轉向」之條件、所求量、端點與單位均明確。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「無人機依序沿五條直線航段圍成凸五邊形巡航，前四個同向轉角為 84°、66°、73°、59°。控制器把最後轉角設為 82°。此設定會產生什麼結果？」獨立重算：282+82=364，不是360，因此方向多轉4°而不能依指定五段閉合。 正確選項「無法以同一方向閉合，最後轉角應為78°」。四選項核對：可以閉合，因五角相加為360°=假，84+66+73+59+82=364°。；無法閉合，最後轉角應為82°的補角98°=假，補角不是缺少的總轉向。；可以閉合，只要五條航段長度相等=假，邊長相等不能修正總轉向錯誤。；無法以同一方向閉合，最後轉角應為78°=真，前四角和282°，閉合一圈須360°，故最後應78°；設82°會多轉4°。 邊界：題目只判斷方向閉合；航段長度另需配合，但錯誤轉向已足以否決。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u16-fig-015-polygon-turns",
      "unitId": "u16",
      "slot": "s015",
      "title": "沿多邊形一周的外角轉向",
      "altText": "凸五邊形外側在每個頂點畫順時針轉向箭頭，中央標示總轉向360°。",
      "svgPath": "figures/u16/u16-fig-015-polygon-turns.svg",
      "drawingSpec": {
        "canvas": {
          "width": 360,
          "height": 240,
          "viewBox": "0 0 360 240"
        },
        "coordinateSystem": "左上角為(0,0)，x向右、y向下。",
        "geometry": "五邊形頂點(85,185)、(45,95)、(145,35)、(285,70)、(315,180)；每頂點一個半徑28轉向弧與箭頭。",
        "visibleLineRules": "主要邊線使用2.5px黑色實線；輔助線使用1.5px虛線；弧線不得遮住頂點標籤。",
        "hiddenLineRules": "平面圖無隱藏邊；未畫出的延長線不得由視覺自行推定。",
        "labels": "中央兩行文字不覆蓋邊線。",
        "tickMarksAndSymbols": "相等邊以同數量短刻痕表示；直角以小正方形；相等角以同型圓弧。",
        "units": "示意圖無長度單位，題目另有數值時以題幹為準。",
        "arrows": "只在延長線或行進方向使用箭頭。",
        "toScale": false,
        "notToScaleWarning": "圖形不按比例，請依標記與題目條件判斷。",
        "mobileLayout": "360×240畫布；最小文字14px；標籤與線段保持至少6px間距。",
        "answerLeakageControl": "圖中只呈現已知結構與定義標記，不標示題目所求數值或正確選項。"
      },
      "svgAssertions": [
        "總和 360°",
        "同方向轉一周",
        "M85 185",
        "A28 28"
      ],
      "figureReview": {
        "decision": "pass",
        "mobileReadability": "360px寬預覽下，頂點、刻痕、直角符號與延長線箭頭仍可辨識。",
        "answerLeakage": "未顯示任何題目答案；只保留概念所需結構。",
        "geometryCheck": "已依列出的座標逐項核對端點、交點、刻痕與文字位置。",
        "reviewNote": "沿多邊形一周的外角轉向已逐線檢查：五邊形頂點(85,185)、(45,95)、(145,35)、(285,70)、(315,180)；每頂點一個半徑28轉向弧與箭頭。；標籤配置為中央兩行文字不覆蓋邊線。，未依視覺比例暗示未給定量。",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementMarker": "REPLACE_MATCHING_LEGACY_ONLY_AT_FINAL_INTEGRATION",
      "contentSha256": "eb888eda7f723ba5b5fc4500961bcd8bc8e19e8372282bddac7ce9d70f5b9124"
    }
  ]
};
export default skillData;
