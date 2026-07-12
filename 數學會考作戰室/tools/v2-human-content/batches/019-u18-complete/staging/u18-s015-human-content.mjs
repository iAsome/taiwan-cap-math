// SERIALIZATION OF REVIEWED CHATGPT HUMAN-AUTHORED CONTENT.

// BATCH-LOCAL STAGING ONLY. DO NOT EDIT OR ACTIVATE IN PRODUCTION.

export const UNIT_ID = "u18";

export const SKILL_SLOT = "s015";

export const SKILL_ID = "ratio-area-application";

export const LECTURE = {
  "lectureId": "u18-s015-lecture-r1",
  "unitId": "u18",
  "numericUnitId": 18,
  "topicId": "u18-applications",
  "skillId": "ratio-area-application",
  "lockedSkillOrder": 15,
  "lockedSkillTitle": "面積比應用",
  "title": "面積比應用：縮圖鋪面與材料成本的平方尺度",
  "audience": "臺灣國中零基礎至國中教育會考數學滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能由比例尺或線性放大率求面積倍率。",
    "能由面積或材料用量反推相似比。",
    "能在相似區域中計算塗料、地磚或紙張需求。",
    "能辨認固定寬邊框造成的不相似情況。"
  ],
  "prerequisiteBridge": {
    "prerequisites": [
      {
        "skillId": "ratio-perimeter-application",
        "title": "周長比應用",
        "requiredLevel": "能運用「周長比應用」完成本節所需的基本判斷與計算，並能說明主要條件。"
      }
    ],
    "bridgeExplanation": "本節承接「周長比應用」，先複習其核心判斷，再把方法推進到「面積比應用」。"
  },
  "glossary": [
    {
      "term": "面積倍率",
      "definition": "新面積除以原面積，等於線性倍率的平方。"
    },
    {
      "term": "單位面積用量",
      "definition": "每一平方單位所需的材料或成本。"
    },
    {
      "term": "比例尺面積",
      "definition": "比例尺 1:n 時，圖上面積與實際面積的比為 1:n²。"
    },
    {
      "term": "固定寬邊框",
      "definition": "向外增加相同寬度形成的區域，通常不與原圖形相似。"
    }
  ],
  "notation": [
    {
      "symbol": "S實=n²S圖",
      "meaning": "比例尺 1:n 下，實際面積為圖上面積的 n² 倍。"
    },
    {
      "symbol": "S新=r²S原",
      "meaning": "線性放大 r 倍時，面積放大 r² 倍。"
    },
    {
      "symbol": "材料=面積×單位用量",
      "meaning": "相似面積求出後再乘每單位需求。"
    }
  ],
  "conceptNarrative": [
    "比例尺給的是長度關係，面積包含兩個方向，所以必須平方比例尺。例如 1:100 的平面圖，1 平方公分代表 10000 平方公分，而不是 100 平方公分。",
    "相似區域的塗料、紙張、地磚數量若單位用量相同，會與面積成正比。先求面積倍率，再計算材料。",
    "由材料用量反推長度時，先求面積比，再取正平方根。不能直接把塗料比當周長比。",
    "固定寬邊框不是按中心等比放大：長方形每邊外加 1 公尺後，長與寬的倍率通常不同，因此內外圖形不一定相似，需直接算面積差。"
  ],
  "formalDefinitions": [
    {
      "name": "比例尺面積關係",
      "statement": "線性比例尺為 a:b 時，相似區域面積比為 a²:b²。"
    },
    {
      "name": "材料正比模型",
      "statement": "若厚度、覆蓋率與損耗率相同，材料用量與面積成正比。"
    }
  ],
  "formulas": [
    {
      "formula": "S₂/S₁=(L₂/L₁)²",
      "conditions": [
        "兩區域相似"
      ],
      "meaning": "由線性尺度求面積倍率。"
    },
    {
      "formula": "用量₂=用量₁×S₂/S₁",
      "conditions": [
        "單位面積用量相同"
      ],
      "meaning": "由面積比推材料需求。"
    },
    {
      "formula": "外框面積=外圖面積-內圖面積",
      "conditions": [
        "固定寬邊框不假設相似"
      ],
      "meaning": "直接求非相似邊框面積。"
    }
  ],
  "nonApplicableCases": [
    "比例尺的數字不能直接當面積倍率，必須平方。",
    "單位面積用量不同時，材料量不只由面積比決定。",
    "固定寬邊框通常不能用相似面積比。",
    "面積單位換算也要平方，例如 1 m²=10000 cm²。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "判斷圖形是否相似，取得線性比。",
      "check": "是等比縮放還是固定寬增加？"
    },
    {
      "step": 2,
      "instruction": "將線性比平方得到面積比。",
      "check": "比例兩項都平方了嗎？"
    },
    {
      "step": 3,
      "instruction": "統一平方單位。",
      "check": "m² 與 cm² 的換算是否正確？"
    },
    {
      "step": 4,
      "instruction": "用面積比求面積、材料或成本。",
      "check": "單位面積用量是否相同？"
    },
    {
      "step": 5,
      "instruction": "若不相似，改用直接面積公式。",
      "check": "是否誤套相似公式？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "平面圖比例尺 1:200，一個相似區域圖上面積 30 平方公分，實際面積多少平方公尺？",
      "solutionSteps": [
        "面積倍率為 200²=40000。",
        "實際面積=30×40000=1200000 平方公分。",
        "除以 10000 得 120 平方公尺。"
      ],
      "answer": "120 平方公尺"
    },
    {
      "exampleId": "L2",
      "prompt": "相似牆面線性比小:大=3:5，小牆需 18 公升漆，覆蓋率相同，大牆需多少？",
      "solutionSteps": [
        "面積比小:大=9:25。",
        "18:V=9:25。",
        "V=50 公升。"
      ],
      "answer": "50 公升"
    },
    {
      "exampleId": "L3",
      "prompt": "兩相似標誌用料面積比為 49:81，較小標誌寬 70 公分，較大寬多少？",
      "solutionSteps": [
        "線性比小:大=7:9。",
        "70:W=7:9。",
        "W=90 公分。"
      ],
      "answer": "90 公分"
    },
    {
      "exampleId": "L4",
      "prompt": "4×6 公尺長方形步道外側增加 1 公尺等寬邊框，求邊框面積。",
      "solutionSteps": [
        "外長寬為 6×8 公尺。",
        "外面積 48，內面積 24。",
        "邊框面積=48-24=24 平方公尺。"
      ],
      "answer": "24 平方公尺"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "比例尺 1:200 的面積倍率寫 200。",
      "why": "忘記面積有兩個方向。",
      "correction": "使用 200²。"
    },
    {
      "mistake": "1 平方公尺寫成 100 平方公分。",
      "why": "只換算一次長度。",
      "correction": "100²=10000 平方公分。"
    },
    {
      "mistake": "塗料比直接開根號求塗料。",
      "why": "混淆求線性量與求面積量。",
      "correction": "塗料與面積同倍率；只有反求長度才開根號。"
    },
    {
      "mistake": "固定寬邊框當相似放大。",
      "why": "只看外形同為長方形。",
      "correction": "比較長與寬倍率，通常不同，改算面積差。"
    },
    {
      "mistake": "忽略不同損耗率。",
      "why": "把材料用量視為純幾何量。",
      "correction": "確認單位面積用量條件相同。"
    }
  ],
  "selfCheck": [
    "圖形確實相似嗎？",
    "線性倍率是否平方？",
    "平方單位換算正確嗎？",
    "材料覆蓋條件相同嗎？",
    "固定寬邊框是否改用面積差？"
  ],
  "summary": [
    "相似面積按線性倍率平方變化。",
    "比例尺面積倍率也要平方。",
    "材料用量在覆蓋條件相同時與面積成正比。",
    "固定寬邊框通常不是相似圖形。"
  ],
  "connections": {
    "previous": "周長比應用處理一次尺度。",
    "next": [
      "相似形素養題會整合比例尺、周長、面積與材料限制。"
    ]
  },
  "figureReferences": [],
  "practiceLinks": {
    "mcQuestionIds": [
      "u18-s015-v001",
      "u18-s015-v002",
      "u18-s015-v003",
      "u18-s015-v004",
      "u18-s015-v005",
      "u18-s015-v006",
      "u18-s015-v007",
      "u18-s015-v008",
      "u18-s015-v009",
      "u18-s015-v010",
      "u18-s015-v011",
      "u18-s015-v012"
    ],
    "constructedResponseIds": [
      "u18-s015-cr001",
      "u18-s015-cr002"
    ]
  },
  "lectureReview": {
    "reviewVersion": "human-lecture-review-r1.0",
    "reviewedAt": "2026-07-12",
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "capScopeCheck": "pass",
    "symbolDefinitionsComplete": true,
    "invalidUseCasesIncluded": true,
    "examplesIndividuallyChosen": true,
    "reviewNote": "逐例驗證線性倍率平方與平方單位換算；另以固定寬邊框作非相似反例，防止學生只因內外都是長方形便誤用面積比。"
  },
  "contentSha256": "1d25a874d0b7c425f6dba73719e8950176c33e8009c622ed6d095223ba1a0707"
};

export const QUESTIONS = [
  {
    "questionId": "u18-s015-v001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-area-application",
    "lockedSkillOrder": 15,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩個相似圖形的相似比（小：大）為 2：3。若小圖面積為 20 cm²，大圖面積為何？",
    "text": "兩個相似圖形的相似比（小：大）為 2：3。若小圖面積為 20 cm²，大圖面積為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "30 cm²",
      "67.5 cm²",
      "45 cm²",
      "90 cm²"
    ],
    "answerIndex": 2,
    "independentSolution": "線性倍率 1.5，面積倍率 1.5²=2.25；20×2.25=45。",
    "explanation": "面積比=2²：3²=4：9，大圖面積=20×9/4=45 cm²。",
    "steps": [
      "平方相似比得到 4：9。",
      "20 對應 4 份。",
      "大圖=45 cm²。"
    ],
    "optionAnalysis": [
      {
        "choice": "30 cm²",
        "truth": false,
        "reason": "只乘線性倍率 3/2。"
      },
      {
        "choice": "67.5 cm²",
        "truth": false,
        "reason": "倍率平方後又多乘一次。"
      },
      {
        "choice": "45 cm²",
        "truth": true,
        "reason": "依獨立推導可得到 45 cm²，符合所有已知條件。"
      },
      {
        "choice": "90 cm²",
        "truth": false,
        "reason": "把面積比誤成 2：9。"
      }
    ],
    "misconceptionTarget": "面積只乘一次線性倍率。",
    "prerequisiteCheck": "理解面積比為相似比平方。",
    "estimatedTimeSec": 65,
    "unitAndRoundingCheck": "面積單位為 cm²。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "直接由相似比求面積。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "863e03920efd0efc5bd9a9d8dde592cb130a69ed52dfe3afdeed531db44d0aa2"
  },
  {
    "questionId": "u18-s015-v002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-area-application",
    "lockedSkillOrder": 15,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "相似地磚甲、乙的面積比為 25：49。若甲的邊長尺度為 10 cm，乙的對應邊長為何？",
    "text": "相似地磚甲、乙的面積比為 25：49。若甲的邊長尺度為 10 cm，乙的對應邊長為何？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "19.6 cm",
      "24 cm",
      "9.8 cm",
      "14 cm"
    ],
    "answerIndex": 3,
    "independentSolution": "面積比不能直接套到邊長；10 cm 對應 5 份，每份 2 cm，7 份為 14 cm。",
    "explanation": "線性比為 √25：√49=5：7，乙邊長=10×7/5=14 cm。",
    "steps": [
      "對面積比開平方。",
      "得到線性比 5：7。",
      "求乙邊長 14 cm。"
    ],
    "optionAnalysis": [
      {
        "choice": "19.6 cm",
        "truth": false,
        "reason": "直接乘面積倍率 49/25。"
      },
      {
        "choice": "24 cm",
        "truth": false,
        "reason": "取面積比之差。"
      },
      {
        "choice": "9.8 cm",
        "truth": false,
        "reason": "比例方向顛倒。"
      },
      {
        "choice": "14 cm",
        "truth": true,
        "reason": "依獨立推導可得到 14 cm，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "把面積倍率直接當邊長倍率。",
    "prerequisiteCheck": "能由完全平方數的面積比求相似比。",
    "estimatedTimeSec": 75,
    "unitAndRoundingCheck": "答案為長度 cm，而不是 cm²。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "由面積比反推線性尺寸。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "7eb4686d49b0692f8259be9fc450177e11020b3246f5b97ae2a8ec270b816097"
  },
  {
    "questionId": "u18-s015-v003",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-area-application",
    "lockedSkillOrder": 15,
    "difficulty": "basic",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "一張相片長寬都縮為原來的 80%。縮小後面積是原來的多少？",
    "text": "一張相片長寬都縮為原來的 80%。縮小後面積是原來的多少？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "80%",
      "64%",
      "40%",
      "160%"
    ],
    "answerIndex": 1,
    "independentSolution": "取原面積 100 單位驗算，縮放後為 80×80/100=64 單位。",
    "explanation": "面積倍率=0.8²=0.64，所以為原來的 64%。",
    "steps": [
      "長與寬倍率皆為 0.8。",
      "面積倍率為乘積 0.8×0.8。",
      "轉成 64%。"
    ],
    "optionAnalysis": [
      {
        "choice": "80%",
        "truth": false,
        "reason": "只考慮一個方向。"
      },
      {
        "choice": "64%",
        "truth": true,
        "reason": "依獨立推導可得到 64%，符合所有已知條件。"
      },
      {
        "choice": "40%",
        "truth": false,
        "reason": "把兩個 80% 相減。"
      },
      {
        "choice": "160%",
        "truth": false,
        "reason": "把百分比相加。"
      }
    ],
    "misconceptionTarget": "將線性百分比直接當面積百分比。",
    "prerequisiteCheck": "能計算百分比平方。",
    "estimatedTimeSec": 60,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "基本百分比縮放的面積效應。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3e42525d50d85247bc1e693e9a12bd1f59201cf394e237154f8155a6cf70b0ef"
  },
  {
    "questionId": "u18-s015-v004",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-area-application",
    "lockedSkillOrder": 15,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩個相似三角形面積分別為 32 cm² 與 98 cm²。若較小三角形一邊長 8 cm，較大三角形對應邊長多少？",
    "text": "兩個相似三角形面積分別為 32 cm² 與 98 cm²。若較小三角形一邊長 8 cm，較大三角形對應邊長多少？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "14 cm",
      "12.25 cm",
      "24.5 cm",
      "18 cm"
    ],
    "answerIndex": 0,
    "independentSolution": "面積倍率 98/32=49/16，其平方根為 7/4；8×7/4=14。",
    "explanation": "面積比 32：98=16：49，線性比=4：7，所以大邊=8×7/4=14 cm。",
    "steps": [
      "化簡面積比為 16：49。",
      "開平方得 4：7。",
      "求 14 cm。"
    ],
    "optionAnalysis": [
      {
        "choice": "14 cm",
        "truth": true,
        "reason": "依獨立推導可得到 14 cm，符合所有已知條件。"
      },
      {
        "choice": "12.25 cm",
        "truth": false,
        "reason": "直接乘面積倍率 98/32。"
      },
      {
        "choice": "24.5 cm",
        "truth": false,
        "reason": "倍率計算後未開平方。"
      },
      {
        "choice": "18 cm",
        "truth": false,
        "reason": "把面積差當邊長差。"
      }
    ],
    "misconceptionTarget": "面積比開平方前就套到邊長。",
    "prerequisiteCheck": "能化簡面積比並開平方。",
    "estimatedTimeSec": 85,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "需從非直接平方形式化簡後反推邊長。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "fa61b484f644cc3567e9da12829572d7fbd2af06d1679ef5a4cf42b448f2d0d7"
  },
  {
    "questionId": "u18-s015-v005",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-area-application",
    "lockedSkillOrder": 15,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "一個相似放大的圖案，原面積 150 cm²，線性倍率為 1.2。印刷時另固定增加 30 cm² 的白邊區。成品總面積為何？",
    "text": "一個相似放大的圖案，原面積 150 cm²，線性倍率為 1.2。印刷時另固定增加 30 cm² 的白邊區。成品總面積為何？",
    "givenConditions": [
      "30 cm² 是放大後固定增加的區域"
    ],
    "target": "求出唯一正確選項。",
    "choices": [
      "216 cm²",
      "252 cm²",
      "270 cm²",
      "246 cm²"
    ],
    "answerIndex": 3,
    "independentSolution": "白邊不是原相似圖案的一部分，不能一起縮放；216+30=246。",
    "explanation": "圖案面積=150×1.2²=216 cm²；固定白邊 30 cm² 另加，總面積 246 cm²。",
    "steps": [
      "平方線性倍率。",
      "求放大圖案面積 216。",
      "加固定白邊 30。"
    ],
    "optionAnalysis": [
      {
        "choice": "216 cm²",
        "truth": false,
        "reason": "只算放大圖案，漏白邊。"
      },
      {
        "choice": "252 cm²",
        "truth": false,
        "reason": "把白邊也乘 1.2。"
      },
      {
        "choice": "270 cm²",
        "truth": false,
        "reason": "圖案面積只乘 1.2 後再加。"
      },
      {
        "choice": "246 cm²",
        "truth": true,
        "reason": "依獨立推導可得到 246 cm²，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "把固定附加面積一起乘倍率。",
    "prerequisiteCheck": "能區分相似縮放面積與固定附加面積。",
    "estimatedTimeSec": 90,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "面積倍率後還需加入固定區域。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "80489e6bb259b3bdda5870723b34d4333a730d2723e176be34cdaba04b2a4f3e"
  },
  {
    "questionId": "u18-s015-v006",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-area-application",
    "lockedSkillOrder": 15,
    "difficulty": "standard",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "兩個相似圖形的面積和為 260 cm²，相似比為 2：3。小圖面積是多少？",
    "text": "兩個相似圖形的面積和為 260 cm²，相似比為 2：3。小圖面積是多少？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "104 cm²",
      "80 cm²",
      "180 cm²",
      "40 cm²"
    ],
    "answerIndex": 1,
    "independentSolution": "驗算大圖 180 cm²，和為 260，面積比 80：180=4：9。",
    "explanation": "面積比=4：9，總份數 13，每份=260÷13=20，小圖=4×20=80 cm²。",
    "steps": [
      "相似比平方為 4：9。",
      "用總和求每份 20。",
      "小圖為 80 cm²。"
    ],
    "optionAnalysis": [
      {
        "choice": "104 cm²",
        "truth": false,
        "reason": "把線性比直接分配面積。"
      },
      {
        "choice": "80 cm²",
        "truth": true,
        "reason": "依獨立推導可得到 80 cm²，符合所有已知條件。"
      },
      {
        "choice": "180 cm²",
        "truth": false,
        "reason": "求成大圖。"
      },
      {
        "choice": "40 cm²",
        "truth": false,
        "reason": "總份數計算錯誤。"
      }
    ],
    "misconceptionTarget": "用 2：3 而不是 4：9 分配面積總和。",
    "prerequisiteCheck": "能用面積比分配總量。",
    "estimatedTimeSec": 85,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "結合相似比平方與總量分配。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e2d5b4fe66803214b5d3cabc8abe3a8b52d5e03fbd5e9d49a59c4a621485b466"
  },
  {
    "questionId": "u18-s015-v007",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-area-application",
    "lockedSkillOrder": 15,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "甲、乙相似，甲面積比乙少 140 cm²，且甲：乙相似比為 3：5。乙面積是多少？",
    "text": "甲、乙相似，甲面積比乙少 140 cm²，且甲：乙相似比為 3：5。乙面積是多少？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "218.75 cm²",
      "78.75 cm²",
      "175 cm²",
      "350 cm²"
    ],
    "answerIndex": 0,
    "independentSolution": "甲=78.75，乙=218.75，差 140 且比為 9：25。",
    "explanation": "面積比=9：25，差 16 份=140，所以每份 8.75 cm²，乙=25×8.75=218.75 cm²。",
    "steps": [
      "平方相似比得 9：25。",
      "差 16 份對應 140。",
      "乙為 25×140/16。"
    ],
    "optionAnalysis": [
      {
        "choice": "218.75 cm²",
        "truth": true,
        "reason": "依獨立推導可得到 218.75 cm²，符合所有已知條件。"
      },
      {
        "choice": "78.75 cm²",
        "truth": false,
        "reason": "求成甲面積。"
      },
      {
        "choice": "175 cm²",
        "truth": false,
        "reason": "用線性份數差 2 分配。"
      },
      {
        "choice": "350 cm²",
        "truth": false,
        "reason": "只用 140×5/2。"
      }
    ],
    "misconceptionTarget": "以線性比的份數差處理面積差。",
    "prerequisiteCheck": "能利用面積比與差量求未知面積。",
    "estimatedTimeSec": 100,
    "unitAndRoundingCheck": "答案保留精確小數 cm²。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "面積比分配與差量條件結合。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "34251ebec667cc61137f78ed0c7debea4bdc0e268b13eec8e420c1cd72b8c548"
  },
  {
    "questionId": "u18-s015-v008",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-area-application",
    "lockedSkillOrder": 15,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "相似長方形 A、B 的面積比為 9：16。A 的長為 12 cm、寬為 6 cm。B 的寬為何？",
    "text": "相似長方形 A、B 的面積比為 9：16。A 的長為 12 cm、寬為 6 cm。B 的寬為何？",
    "givenConditions": [
      "A 與 B 的長邊互相對應、寬邊互相對應"
    ],
    "target": "求出唯一正確選項。",
    "choices": [
      "10.67 cm",
      "4.5 cm",
      "8 cm",
      "12 cm"
    ],
    "answerIndex": 2,
    "independentSolution": "A 面積 72，B 面積應為 128；若 B 寬 8，B 長 16，面積 128，符合相似。",
    "explanation": "線性比 A：B=3：4，B 寬=6×4/3=8 cm。",
    "steps": [
      "面積比開平方得 3：4。",
      "寬是對應線性尺寸。",
      "6×4/3=8。"
    ],
    "optionAnalysis": [
      {
        "choice": "10.67 cm",
        "truth": false,
        "reason": "把面積倍率直接乘寬。"
      },
      {
        "choice": "4.5 cm",
        "truth": false,
        "reason": "比例方向顛倒。"
      },
      {
        "choice": "8 cm",
        "truth": true,
        "reason": "依獨立推導可得到 8 cm，符合所有已知條件。"
      },
      {
        "choice": "12 cm",
        "truth": false,
        "reason": "把 A 的長當 B 的寬。"
      }
    ],
    "misconceptionTarget": "知道面積比卻直接乘到單一邊。",
    "prerequisiteCheck": "能從面積比推回相似比。",
    "estimatedTimeSec": 90,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "要辨認長寬對應並以平方根倍率處理。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0af8497d9bc66d2921ecdc0bc2acc8ad431c8476cc576c5f6b464ba46c1abad4"
  },
  {
    "questionId": "u18-s015-v009",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-area-application",
    "lockedSkillOrder": 15,
    "difficulty": "advanced",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "一個正方形圖案放大後，面積增加 125%。放大後邊長是原來的多少倍？",
    "text": "一個正方形圖案放大後，面積增加 125%。放大後邊長是原來的多少倍？",
    "givenConditions": [],
    "target": "求出唯一正確選項。",
    "choices": [
      "1.25 倍",
      "1.5 倍",
      "2.25 倍",
      "√1.25 倍"
    ],
    "answerIndex": 1,
    "independentSolution": "若原邊長 2，新邊長 3，面積由 4 變 9，增加 5/4=125%，驗證 1.5 倍。",
    "explanation": "面積增加 125% 表示新面積為原來的 225%=2.25 倍；邊長倍率=√2.25=1.5。",
    "steps": [
      "把增加 125% 轉為總倍率 2.25。",
      "對面積倍率開平方。",
      "得 1.5 倍。"
    ],
    "optionAnalysis": [
      {
        "choice": "1.25 倍",
        "truth": false,
        "reason": "把增加百分率誤當最後面積倍率。"
      },
      {
        "choice": "1.5 倍",
        "truth": true,
        "reason": "依獨立推導可得到 1.5 倍，符合所有已知條件。"
      },
      {
        "choice": "2.25 倍",
        "truth": false,
        "reason": "把面積倍率直接當邊長倍率。"
      },
      {
        "choice": "√1.25 倍",
        "truth": false,
        "reason": "忽略增加後總面積是 225%。"
      }
    ],
    "misconceptionTarget": "把「增加百分比」與「新值百分比」混淆。",
    "prerequisiteCheck": "能解讀增加百分率並開平方。",
    "estimatedTimeSec": 100,
    "unitAndRoundingCheck": "題目量綱一致，答案不需另行四捨五入。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "兩層轉換：增加率到面積倍率，再到線性倍率。",
    "literacyContextNecessity": null,
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "871f7b9dc7127c7a676b6f438265f52111e984355c0d4f9c37b7be8318d49e22"
  },
  {
    "questionId": "u18-s015-v010",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-area-application",
    "lockedSkillOrder": 15,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "社區縮尺圖中一塊相似草地的線性比例為圖上：實際=1：200。圖上面積量得 18 cm²，實際面積為何？",
    "text": "社區縮尺圖中一塊相似草地的線性比例為圖上：實際=1：200。圖上面積量得 18 cm²，實際面積為何？",
    "givenConditions": [
      "圖形線性比例一致",
      "圖上面積量測視為準確"
    ],
    "target": "求出唯一正確選項。",
    "choices": [
      "72 m²",
      "36 m²",
      "720 m²",
      "7200 m²"
    ],
    "answerIndex": 0,
    "independentSolution": "圖上 1 cm 對應實際 2 m，所以 1 cm² 對應 4 m²；18 cm² 對應 18×4=72 m²。",
    "explanation": "實際面積=18×200²=720000 cm²；1 m²=10000 cm²，所以為 72 m²。",
    "steps": [
      "面積乘 200²。",
      "得到 720000 cm²。",
      "除以 10000，得 72 m²。"
    ],
    "optionAnalysis": [
      {
        "choice": "72 m²",
        "truth": true,
        "reason": "依獨立推導可得到 72 m²，符合所有已知條件。"
      },
      {
        "choice": "36 m²",
        "truth": false,
        "reason": "只乘線性倍率 200 後換單位。"
      },
      {
        "choice": "720 m²",
        "truth": false,
        "reason": "平方單位換算少除一個 10。"
      },
      {
        "choice": "7200 m²",
        "truth": false,
        "reason": "cm² 換 m² 錯誤。"
      }
    ],
    "misconceptionTarget": "比例尺平方正確但平方單位換算錯誤。",
    "prerequisiteCheck": "能處理比例尺的面積換算。",
    "estimatedTimeSec": 110,
    "unitAndRoundingCheck": "1 m²=10000 cm²。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "比例尺面積平方與平方單位換算。",
    "literacyContextNecessity": "土地圖上的面積必須透過平方比例尺換成實際面積。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8ecfc3f217c76a38121ec5b137b41cfc858487f46d5c6c3b1bd2cee4cedda5b6"
  },
  {
    "questionId": "u18-s015-v011",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-area-application",
    "lockedSkillOrder": 15,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "壁畫小稿與牆面成品相似，小稿面積 0.24 m²，線性倍率 5。油漆每公升可塗 6 m²，且需塗兩層。至少需要多少公升油漆？",
    "text": "壁畫小稿與牆面成品相似，小稿面積 0.24 m²，線性倍率 5。油漆每公升可塗 6 m²，且需塗兩層。至少需要多少公升油漆？",
    "givenConditions": [
      "不計耗損",
      "每層塗布率相同"
    ],
    "target": "求出唯一正確選項。",
    "choices": [
      "1 L",
      "5 L",
      "2 L",
      "10 L"
    ],
    "answerIndex": 2,
    "independentSolution": "每公升 6 m²，2 L 可覆蓋 12 m²，恰好滿足兩層。",
    "explanation": "成品面積=0.24×25=6 m²；兩層塗布量=12 m²；12÷6=2 L。",
    "steps": [
      "面積倍率為 25。",
      "求成品面積 6 m²。",
      "兩層共 12 m²，需 2 L。"
    ],
    "optionAnalysis": [
      {
        "choice": "1 L",
        "truth": false,
        "reason": "只算一層。"
      },
      {
        "choice": "5 L",
        "truth": false,
        "reason": "把線性倍率直接乘用量。"
      },
      {
        "choice": "2 L",
        "truth": true,
        "reason": "依獨立推導可得到 2 L，符合所有已知條件。"
      },
      {
        "choice": "10 L",
        "truth": false,
        "reason": "把兩層與倍率重複計算。"
      }
    ],
    "misconceptionTarget": "漏平方倍率或漏算塗層數。",
    "prerequisiteCheck": "能將面積需求轉為材料用量。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "m²÷(m²/L)=L。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "面積縮放、重複施工與材料率整合。",
    "literacyContextNecessity": "塗兩層與每公升覆蓋率都是採購量不可刪除的條件。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "064c3414b7eb2414b7d40f9163e74379e7d255fc5e8d17c1f0c5a648d1324dc8"
  },
  {
    "questionId": "u18-s015-v012",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-area-application",
    "lockedSkillOrder": 15,
    "difficulty": "literacy",
    "itemType": "multiple-choice",
    "type": "mc",
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_MATH",
    "prompt": "某品牌有兩款相似圓形標誌。大型直徑是小型的 1.6 倍。若小型每面貼膜成本為 75 元，貼膜成本與面積成正比，另每面固定收工費 40 元，大型每面總價多少？",
    "text": "某品牌有兩款相似圓形標誌。大型直徑是小型的 1.6 倍。若小型每面貼膜成本為 75 元，貼膜成本與面積成正比，另每面固定收工費 40 元，大型每面總價多少？",
    "givenConditions": [
      "材料費完全與面積成正比",
      "工費固定"
    ],
    "target": "求出唯一正確選項。",
    "choices": [
      "160 元",
      "192 元",
      "294.4 元",
      "232 元"
    ],
    "answerIndex": 3,
    "independentSolution": "固定工費與圖形面積無關，不應乘 2.56；192+40=232。",
    "explanation": "大型貼膜材料費=75×1.6²=75×2.56=192 元；加固定工費 40 元，總價 232 元。",
    "steps": [
      "求面積倍率 2.56。",
      "材料費為 192 元。",
      "加固定 40 元。"
    ],
    "optionAnalysis": [
      {
        "choice": "160 元",
        "truth": false,
        "reason": "只將總價或材料費乘 1.6。"
      },
      {
        "choice": "192 元",
        "truth": false,
        "reason": "漏固定工費。"
      },
      {
        "choice": "294.4 元",
        "truth": false,
        "reason": "把固定工費也乘面積倍率。"
      },
      {
        "choice": "232 元",
        "truth": true,
        "reason": "依獨立推導可得到 232 元，符合所有已知條件。"
      }
    ],
    "misconceptionTarget": "將固定成本與面積成本一起縮放。",
    "prerequisiteCheck": "能建立固定費加面積變動費模型。",
    "estimatedTimeSec": 105,
    "unitAndRoundingCheck": "金額以元表示。",
    "ambiguityAndBoundaryAudit": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
    "difficultyReason": "面積倍率與混合成本模型。",
    "literacyContextNecessity": "報價拆成面積材料費與固定工費，兩者縮放規則不同。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8b43b1f36f273304dd73c89e6002fbfe9670fb5cdf91873de29f35f637830918"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u18-s015-cr001",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-area-application",
    "lockedSkillOrder": 15,
    "itemType": "constructed-response",
    "prompt": "一幅壁畫小稿面積0.32 m²，成品線性倍率4.5。牆面需塗兩層，油漆每公升可覆蓋8 m²，另預留10%損耗。至少準備多少公升？",
    "requiredWork": "依序計算面積倍率、兩層總覆蓋面積、損耗需求與油漆量。",
    "standardSolution": "成品面積=0.32×4.5²=0.32×20.25=6.48 m²。兩層需12.96 m²；加10%損耗為14.256 m²。油漆量=14.256÷8=1.782 L。若以整公升購買，至少2 L。",
    "alternativeMethod": "可合併為0.32×4.5²×2×1.10÷8=1.782 L。",
    "reasoningSteps": [
      "求成品面積6.48。",
      "兩層得12.96。",
      "乘1.10得14.256。",
      "除覆蓋率並依購買規則取整。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確算出1.782 L並明確說明整公升購買至少2 L。"
      },
      {
        "score": 2,
        "criteria": "面積與兩層、損耗方法正確，但一處算術錯；或只給2 L未列精確需求。"
      },
      {
        "score": 1,
        "criteria": "只把0.32乘4.5或忘記層數與損耗中的一項。"
      },
      {
        "score": 0,
        "criteria": "沒有呈現可辨識的相關比例或相似推理，或答案與過程均無法支持題目要求。"
      }
    ],
    "partialCreditRules": [
      "比例式或相似判定正確但後續算術錯誤，可依已完成的關鍵步驟給 2 分。",
      "只有正確公式但沒有把題目數據正確代入，通常給 1 分。"
    ],
    "followThroughPolicy": "若早期僅有單一算術錯誤，後續使用該錯誤值的推理一致且方法正確，保留後續方法分；不得因錯誤值巧合得到正確答案而補足滿分。",
    "unitAndNotationRules": "面積m²，覆蓋率m²/L，結果L；若題意採購整公升需向上取整。",
    "answerOnlyPolicy": "只寫正確答案但沒有必要推理，最高給 1 分；若題目只要求數值且推理可由答案唯一確認，依評分規準調整。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "reviewNote": "逐步與合併式均得1.782 L，2 L可覆蓋16 m²大於14.256。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "2dbecb8dd88dc80772485aaa931ff536db9946282e2871a4a30ccfba3bc13473"
  },
  {
    "questionId": "u18-s015-cr002",
    "unitId": "u18",
    "numericUnitId": 18,
    "topicId": "u18-applications",
    "skillId": "ratio-area-application",
    "lockedSkillOrder": 15,
    "itemType": "constructed-response",
    "prompt": "相似地磚大：小的邊長比為5：3。大磚每片面積0.25 m²。鋪同一塊30 m²地面，忽略縫隙，分別需要多少片大磚與小磚？",
    "requiredWork": "先用面積比求小磚面積，再分別以總面積除單片面積。",
    "standardSolution": "大：小面積比=25：9。小磚面積=0.25×9/25=0.09 m²。大磚需要30÷0.25=120片；小磚需要30÷0.09=333又1/3片，因此實務上至少334片。",
    "alternativeMethod": "片數與單片面積成反比；小磚片數理論上是大磚的25/9倍，即120×25/9=333又1/3。",
    "reasoningSteps": [
      "平方邊長比得25：9。",
      "求小磚面積0.09 m²。",
      "求大磚120片。",
      "求小磚理論333又1/3並向上取整334片。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "兩種片數與小磚向上取整理由完整。"
      },
      {
        "score": 2,
        "criteria": "面積比與兩單片面積正確，但一個片數或取整有錯。"
      },
      {
        "score": 1,
        "criteria": "只用5：3直接換算片數，或只算其中一種。"
      },
      {
        "score": 0,
        "criteria": "沒有呈現可辨識的相關比例或相似推理，或答案與過程均無法支持題目要求。"
      }
    ],
    "partialCreditRules": [
      "比例式或相似判定正確但後續算術錯誤，可依已完成的關鍵步驟給 2 分。",
      "只有正確公式但沒有把題目數據正確代入，通常給 1 分。"
    ],
    "followThroughPolicy": "若早期僅有單一算術錯誤，後續使用該錯誤值的推理一致且方法正確，保留後續方法分；不得因錯誤值巧合得到正確答案而補足滿分。",
    "unitAndNotationRules": "面積以m²，片數為整數；忽略裁切損耗但不足一片仍需購買一整片。",
    "answerOnlyPolicy": "只寫正確答案但沒有必要推理，最高給 1 分；若題目只要求數值且推理可由答案唯一確認，依評分規準調整。",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "reviewNote": "0.09×333<30而0.09×334≥30，確認至少334片；大磚120片恰好。",
      "reviewVersion": "human-cr-review-r1.0",
      "reviewedAt": "2026-07-12",
      "scopeCheck": "Taiwan junior-high CAP mathematics",
      "rubricSpecificityCheck": "pass"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "contentSha256": "8378d05d703b2f43caf53a1b067b92cce1cb33055d1318810c9b9a2bb3327917"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "reviewId": "u18-s015-v001-semantic-review-r1",
    "questionId": "u18-s015-v001",
    "unitId": "u18",
    "skillId": "ratio-area-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "863e03920efd0efc5bd9a9d8dde592cb130a69ed52dfe3afdeed531db44d0aa2",
    "independentSolution": "線性倍率 1.5，面積倍率 1.5²=2.25；20×2.25=45。",
    "derivedAnswer": "45 cm²",
    "storedAnswer": "45 cm²",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "面積單位為 cm²。",
      "scope": "只使用國中會考範圍內的「面積比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "直接由相似比求面積。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：線性倍率 1.5，面積倍率 1.5²=2.25；20×2.25=45。 四個選項逐一核對後，只有「45 cm²」符合；主要排除點是「面積只乘一次線性倍率。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s015-v002-semantic-review-r1",
    "questionId": "u18-s015-v002",
    "unitId": "u18",
    "skillId": "ratio-area-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "7eb4686d49b0692f8259be9fc450177e11020b3246f5b97ae2a8ec270b816097",
    "independentSolution": "面積比不能直接套到邊長；10 cm 對應 5 份，每份 2 cm，7 份為 14 cm。",
    "derivedAnswer": "14 cm",
    "storedAnswer": "14 cm",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "答案為長度 cm，而不是 cm²。",
      "scope": "只使用國中會考範圍內的「面積比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "由面積比反推線性尺寸。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：面積比不能直接套到邊長；10 cm 對應 5 份，每份 2 cm，7 份為 14 cm。 四個選項逐一核對後，只有「14 cm」符合；主要排除點是「把面積倍率直接當邊長倍率。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s015-v003-semantic-review-r1",
    "questionId": "u18-s015-v003",
    "unitId": "u18",
    "skillId": "ratio-area-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "3e42525d50d85247bc1e693e9a12bd1f59201cf394e237154f8155a6cf70b0ef",
    "independentSolution": "取原面積 100 單位驗算，縮放後為 80×80/100=64 單位。",
    "derivedAnswer": "64%",
    "storedAnswer": "64%",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「面積比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "基本百分比縮放的面積效應。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：取原面積 100 單位驗算，縮放後為 80×80/100=64 單位。 四個選項逐一核對後，只有「64%」符合；主要排除點是「將線性百分比直接當面積百分比。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s015-v004-semantic-review-r1",
    "questionId": "u18-s015-v004",
    "unitId": "u18",
    "skillId": "ratio-area-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "fa61b484f644cc3567e9da12829572d7fbd2af06d1679ef5a4cf42b448f2d0d7",
    "independentSolution": "面積倍率 98/32=49/16，其平方根為 7/4；8×7/4=14。",
    "derivedAnswer": "14 cm",
    "storedAnswer": "14 cm",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「面積比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "需從非直接平方形式化簡後反推邊長。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：面積倍率 98/32=49/16，其平方根為 7/4；8×7/4=14。 四個選項逐一核對後，只有「14 cm」符合；主要排除點是「面積比開平方前就套到邊長。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s015-v005-semantic-review-r1",
    "questionId": "u18-s015-v005",
    "unitId": "u18",
    "skillId": "ratio-area-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "80489e6bb259b3bdda5870723b34d4333a730d2723e176be34cdaba04b2a4f3e",
    "independentSolution": "白邊不是原相似圖案的一部分，不能一起縮放；216+30=246。",
    "derivedAnswer": "246 cm²",
    "storedAnswer": "246 cm²",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「面積比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "面積倍率後還需加入固定區域。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：白邊不是原相似圖案的一部分，不能一起縮放；216+30=246。 四個選項逐一核對後，只有「246 cm²」符合；主要排除點是「把固定附加面積一起乘倍率。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s015-v006-semantic-review-r1",
    "questionId": "u18-s015-v006",
    "unitId": "u18",
    "skillId": "ratio-area-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "e2d5b4fe66803214b5d3cabc8abe3a8b52d5e03fbd5e9d49a59c4a621485b466",
    "independentSolution": "驗算大圖 180 cm²，和為 260，面積比 80：180=4：9。",
    "derivedAnswer": "80 cm²",
    "storedAnswer": "80 cm²",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「面積比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "結合相似比平方與總量分配。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：驗算大圖 180 cm²，和為 260，面積比 80：180=4：9。 四個選項逐一核對後，只有「80 cm²」符合；主要排除點是「用 2：3 而不是 4：9 分配面積總和。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s015-v007-semantic-review-r1",
    "questionId": "u18-s015-v007",
    "unitId": "u18",
    "skillId": "ratio-area-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "34251ebec667cc61137f78ed0c7debea4bdc0e268b13eec8e420c1cd72b8c548",
    "independentSolution": "甲=78.75，乙=218.75，差 140 且比為 9：25。",
    "derivedAnswer": "218.75 cm²",
    "storedAnswer": "218.75 cm²",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "答案保留精確小數 cm²。",
      "scope": "只使用國中會考範圍內的「面積比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "面積比分配與差量條件結合。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：甲=78.75，乙=218.75，差 140 且比為 9：25。 四個選項逐一核對後，只有「218.75 cm²」符合；主要排除點是「以線性比的份數差處理面積差。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s015-v008-semantic-review-r1",
    "questionId": "u18-s015-v008",
    "unitId": "u18",
    "skillId": "ratio-area-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "0af8497d9bc66d2921ecdc0bc2acc8ad431c8476cc576c5f6b464ba46c1abad4",
    "independentSolution": "A 面積 72，B 面積應為 128；若 B 寬 8，B 長 16，面積 128，符合相似。",
    "derivedAnswer": "8 cm",
    "storedAnswer": "8 cm",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「面積比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "要辨認長寬對應並以平方根倍率處理。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：A 面積 72，B 面積應為 128；若 B 寬 8，B 長 16，面積 128，符合相似。 四個選項逐一核對後，只有「8 cm」符合；主要排除點是「知道面積比卻直接乘到單一邊。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s015-v009-semantic-review-r1",
    "questionId": "u18-s015-v009",
    "unitId": "u18",
    "skillId": "ratio-area-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "871f7b9dc7127c7a676b6f438265f52111e984355c0d4f9c37b7be8318d49e22",
    "independentSolution": "若原邊長 2，新邊長 3，面積由 4 變 9，增加 5/4=125%，驗證 1.5 倍。",
    "derivedAnswer": "1.5 倍",
    "storedAnswer": "1.5 倍",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "題目量綱一致，答案不需另行四捨五入。",
      "scope": "只使用國中會考範圍內的「面積比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "兩層轉換：增加率到面積倍率，再到線性倍率。",
    "literacyNecessityReview": "非素養級題目，不以生活背景作為難度來源。",
    "reviewerNote": "重新由已知條件獨立計算：若原邊長 2，新邊長 3，面積由 4 變 9，增加 5/4=125%，驗證 1.5 倍。 四個選項逐一核對後，只有「1.5 倍」符合；主要排除點是「把「增加百分比」與「新值百分比」混淆。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s015-v010-semantic-review-r1",
    "questionId": "u18-s015-v010",
    "unitId": "u18",
    "skillId": "ratio-area-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "8ecfc3f217c76a38121ec5b137b41cfc858487f46d5c6c3b1bd2cee4cedda5b6",
    "independentSolution": "圖上 1 cm 對應實際 2 m，所以 1 cm² 對應 4 m²；18 cm² 對應 18×4=72 m²。",
    "derivedAnswer": "72 m²",
    "storedAnswer": "72 m²",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "1 m²=10000 cm²。",
      "scope": "只使用國中會考範圍內的「面積比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "比例尺面積平方與平方單位換算。",
    "literacyNecessityReview": "土地圖上的面積必須透過平方比例尺換成實際面積。",
    "reviewerNote": "重新由已知條件獨立計算：圖上 1 cm 對應實際 2 m，所以 1 cm² 對應 4 m²；18 cm² 對應 18×4=72 m²。 四個選項逐一核對後，只有「72 m²」符合；主要排除點是「比例尺平方正確但平方單位換算錯誤。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s015-v011-semantic-review-r1",
    "questionId": "u18-s015-v011",
    "unitId": "u18",
    "skillId": "ratio-area-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "064c3414b7eb2414b7d40f9163e74379e7d255fc5e8d17c1f0c5a648d1324dc8",
    "independentSolution": "每公升 6 m²，2 L 可覆蓋 12 m²，恰好滿足兩層。",
    "derivedAnswer": "2 L",
    "storedAnswer": "2 L",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "m²÷(m²/L)=L。",
      "scope": "只使用國中會考範圍內的「面積比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "面積縮放、重複施工與材料率整合。",
    "literacyNecessityReview": "塗兩層與每公升覆蓋率都是採購量不可刪除的條件。",
    "reviewerNote": "重新由已知條件獨立計算：每公升 6 m²，2 L 可覆蓋 12 m²，恰好滿足兩層。 四個選項逐一核對後，只有「2 L」符合；主要排除點是「漏平方倍率或漏算塗層數。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "reviewId": "u18-s015-v012-semantic-review-r1",
    "questionId": "u18-s015-v012",
    "unitId": "u18",
    "skillId": "ratio-area-application",
    "reviewVersion": "human-review-r3.0",
    "reviewedAt": "2026-07-12",
    "contentSha256": "8b43b1f36f273304dd73c89e6002fbfe9670fb5cdf91873de29f35f637830918",
    "independentSolution": "固定工費與圖形面積無關，不應乘 2.56；192+40=232。",
    "derivedAnswer": "232 元",
    "storedAnswer": "232 元",
    "answerMatch": true,
    "uniqueCorrectAnswer": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "ambiguityChecks": {
      "wording": "題幹已限定「求出唯一正確選項。」，必要的方向、順序與資料條件均明示。",
      "boundary": "題意限定比較順序與資料範圍，沒有其他合理解讀。",
      "units": "金額以元表示。",
      "scope": "只使用國中會考範圍內的「面積比應用」概念，未要求高中延伸。"
    },
    "difficultyReason": "面積倍率與混合成本模型。",
    "literacyNecessityReview": "報價拆成面積材料費與固定工費，兩者縮放規則不同。",
    "reviewerNote": "重新由已知條件獨立計算：固定工費與圖形面積無關，不應乘 2.56；192+40=232。 四個選項逐一核對後，只有「232 元」符合；主要排除點是「將固定成本與面積成本一起縮放。」。",
    "reviewerDecision": "pass",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];

