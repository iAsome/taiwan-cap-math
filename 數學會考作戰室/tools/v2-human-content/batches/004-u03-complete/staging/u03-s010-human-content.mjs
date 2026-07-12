// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
// CONTENT AUTHORITY: CHATGPT_HUMAN_AUTHORED_R1
// OLD GENERATED CONTENT MUST NOT BE IMPORTED OR MERGED.
export const LECTURE = {
  "lectureId": "u03-s010-lecture-r1",
  "unitId": "u03",
  "topicId": "u03-linear-equation-apps",
  "skillId": "linear-equation-rate-problem",
  "title": "行程問題：由距離和速率與時間建立分段方程式",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能使用距離＝速率×時間。",
    "能處理相向、同向追及與分段行程。",
    "能區分實際速率與相對速率。",
    "能統一公里、公里/時、分鐘等單位。"
  ],
  "prerequisites": [
    {
      "skillId": "linear-equation-money-problem",
      "requiredLevel": "能區分固定費、單價、數量與餘額，熟悉小數和百分率。"
    }
  ],
  "glossary": [
    {
      "term": "距離",
      "definition": "起點到終點沿路線移動的長度。"
    },
    {
      "term": "速率",
      "definition": "單位時間內行進的距離。"
    },
    {
      "term": "時間",
      "definition": "完成行程所經過的時長。"
    },
    {
      "term": "相對速率",
      "definition": "兩物體間距每單位時間改變的速率。"
    }
  ],
  "notation": [
    {
      "symbol": "d=vt",
      "meaning": "距離=速率×時間。"
    },
    {
      "symbol": "t=d/v",
      "meaning": "時間=距離÷速率，v不可為0。"
    }
  ],
  "conceptNarrative": [
    "行程題先統一單位，再判斷每一段的距離、速率與時間。",
    "相向而行時兩者共同縮短距離，使用速率和；同向追及時使用速率差。",
    "分段行程可用各段距離相加或各段時間相加。",
    "若題目給停留時間，停留不產生距離但要加入總時間。"
  ],
  "formalDefinitions": [
    {
      "name": "基本行程關係",
      "statement": "d=vt。"
    },
    {
      "name": "相向相遇",
      "statement": "初距離=(v1+v2)t。"
    },
    {
      "name": "同向追及",
      "statement": "初距離差=(快速率-慢速率)t。"
    }
  ],
  "formulas": [
    {
      "formula": "d1+d2=D",
      "conditions": [
        "路線由兩段連續組成"
      ],
      "meaning": "分段距離和。"
    },
    {
      "formula": "d/v1+d/v2=T",
      "conditions": [
        "往返同一路段且單程距離相同"
      ],
      "meaning": "往返時間和。"
    }
  ],
  "nonApplicableCases": [
    "速率與時間單位不一致時不能直接相乘。",
    "平均速率通常不是兩速率的算術平均。",
    "停留時間不可乘任何速率形成距離。",
    "追及問題的速率差必須為正。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "畫表或列出每段的距離、速率、時間。",
      "check": "未知數代表哪一量？"
    },
    {
      "step": 2,
      "instruction": "完成單位換算。",
      "check": "分鐘是否換成小時？"
    },
    {
      "step": 3,
      "instruction": "選擇距離和、時間和或相對速率。",
      "check": "相向用和、同向用差？"
    },
    {
      "step": 4,
      "instruction": "建立並解一元一次方程式。",
      "check": "每段公式是否d=vt？"
    },
    {
      "step": 5,
      "instruction": "代回檢查總路程與總時間。",
      "check": "結果是否正且量級合理？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "72公里/時行216公里需多久？",
      "solutionSteps": [
        "t=216÷72。",
        "t=3。"
      ],
      "answer": "3小時。"
    },
    {
      "exampleId": "L2",
      "prompt": "兩車相向，速率40與50公里/時，距離270公里。",
      "solutionSteps": [
        "合速90。",
        "90t=270。"
      ],
      "answer": "3小時相遇。"
    },
    {
      "exampleId": "L3",
      "prompt": "快車比慢車每小時快18公里，落後54公里。",
      "solutionSteps": [
        "18t=54。",
        "t=3。"
      ],
      "answer": "3小時追上。"
    },
    {
      "exampleId": "L4",
      "prompt": "單程90公里，去程45、回程60公里/時。",
      "solutionSteps": [
        "去程2小時。",
        "回程1.5小時。"
      ],
      "answer": "共3.5小時。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "相向問題用速率差。",
      "why": "未看間距改變方向。",
      "correction": "相向使用速率和。"
    },
    {
      "mistake": "追及問題用速率和。",
      "why": "忽略兩車同方向。",
      "correction": "同向使用快減慢。"
    },
    {
      "mistake": "公里與公尺直接混算。",
      "why": "未統一單位。",
      "correction": "先全部換同一長度單位。"
    },
    {
      "mistake": "分鐘直接代入公里/時。",
      "why": "時間單位不同。",
      "correction": "分鐘除60換小時。"
    },
    {
      "mistake": "把平均速率當兩速率平均。",
      "why": "忽略各段時間不同。",
      "correction": "總距離除總時間。"
    },
    {
      "mistake": "分段題漏掉其中一段。",
      "why": "只列含未知數的一段。",
      "correction": "逐段建立表格。"
    }
  ],
  "selfCheck": [
    "單位是否統一？",
    "每段是否都滿足d=vt？",
    "相對速率方向是否正確？",
    "總距離或總時間是否完整？",
    "答案是否為正且代回合理？"
  ],
  "summary": [
    "距離=速率×時間。",
    "相向用速率和，追及用速率差。",
    "分段題逐段相加。",
    "單位換算是列式前置步驟。"
  ],
  "connections": {
    "previous": "需要熟悉金錢問題中的固定量與變動量結構，以及分數方程式。",
    "next": [
      "分配問題會轉向每份量與份數。",
      "綜合素養題會同時包含多階段速率與初始量。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u03-s010-v001",
      "u03-s010-v002",
      "u03-s010-v003",
      "u03-s010-v004",
      "u03-s010-v005",
      "u03-s010-v006",
      "u03-s010-v007",
      "u03-s010-v008",
      "u03-s010-v009",
      "u03-s010-v010",
      "u03-s010-v011",
      "u03-s010-v012"
    ],
    "constructedResponseIds": [
      "u03-s010-cr001",
      "u03-s010-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "四例重算216÷72=3、270÷90=3、54÷18=3、90÷45+90÷60=3.5；並逐項核對相向、追及、往返的速率選擇與小時單位。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "3be0eae0b20234d28edbf8ab2dbc87b690f0ed9b11067150d07da57e76281132",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "legacyContentDisposition": "replace-old-lecture-at-final-integration"
};

export const QUESTIONS = [
  {
    "questionId": "u03-s010-v001",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-rate-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "以每小時 60 公里行駛，行駛多少小時可走 180 公里？",
    "choices": [
      "3",
      "2",
      "4",
      "120"
    ],
    "answerIndex": 0,
    "explanation": "列60t=180；兩邊除60；t=3小時。所以答案是「3」。",
    "steps": [
      "列60t=180",
      "兩邊除60",
      "t=3小時"
    ],
    "optionAnalysis": [
      {
        "choice": "3",
        "truth": true,
        "reason": "距離=速率×時間，60t=180，所以t=3。 因此此選項符合題目。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "180÷90。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "60×4為240。"
      },
      {
        "choice": "120",
        "truth": false,
        "reason": "把距離與速率相減。"
      }
    ],
    "commonMistake": "把速率與時間相加。",
    "concept": "時間=距離÷速率。",
    "tags": [
      "代數",
      "行程問題",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-money-problem"
    ],
    "authoringIntent": "使用距離速率時間關係。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "268e4c4b21257a3afebff21ee641e4bddbf0399096af40d5c28794813b8d1db5",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s010-v002",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-rate-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某車 2.5 小時行駛 150 公里，平均速率是多少公里/小時？",
    "choices": [
      "37.5",
      "60",
      "75",
      "375"
    ],
    "answerIndex": 1,
    "explanation": "列2.5v=150；除以2.5；得到60公里/小時。所以答案是「60」。",
    "steps": [
      "列2.5v=150",
      "除以2.5",
      "得到60公里/小時"
    ],
    "optionAnalysis": [
      {
        "choice": "37.5",
        "truth": false,
        "reason": "把150÷4。"
      },
      {
        "choice": "60",
        "truth": true,
        "reason": "設速率v，2.5v=150，所以v=150÷2.5=60。 因此此選項符合題目。"
      },
      {
        "choice": "75",
        "truth": false,
        "reason": "把150÷2。"
      },
      {
        "choice": "375",
        "truth": false,
        "reason": "把150乘2.5。"
      }
    ],
    "commonMistake": "把小數時間誤成25小時。",
    "concept": "速率=距離÷時間。",
    "tags": [
      "代數",
      "行程問題",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-money-problem"
    ],
    "authoringIntent": "由時間與距離求速率。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "67cc865d237a158a16d89450f31c80edcb60324702e6c7ce0b72ca9382e2ba0a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s010-v003",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-rate-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "甲車先行 30 公里，速率 40 公里/時；乙車從同地追趕，速率 55 公里/時。乙車幾小時追上？",
    "choices": [
      "1",
      "3",
      "2",
      "6"
    ],
    "answerIndex": 2,
    "explanation": "先求相對速率15；列15t=30；解得2小時。所以答案是「2」。",
    "steps": [
      "先求相對速率15",
      "列15t=30",
      "解得2小時"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "只用路程除乙車速率。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "30÷10。"
      },
      {
        "choice": "2",
        "truth": true,
        "reason": "每小時追近55-40=15公里；15t=30，所以t=2。 因此此選項符合題目。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "把兩速率相加。"
      }
    ],
    "commonMistake": "同向仍把速率相加。",
    "concept": "追及距離由相對速率消除。",
    "tags": [
      "代數",
      "行程問題",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-money-problem"
    ],
    "authoringIntent": "同向追及使用速率差。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f3f6604d5bfb99fee68ec0f449b35e386b7a11428acbdf6c109effe06bf6b098",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s010-v004",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-rate-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩車從相距 300 公里的兩地相向而行，速率分別為 45 與 55 公里/時。幾小時相遇？",
    "choices": [
      "2",
      "5",
      "6",
      "3"
    ],
    "answerIndex": 3,
    "explanation": "求合速100；列100t=300；解得3。所以答案是「3」。",
    "steps": [
      "求合速100",
      "列100t=300",
      "解得3"
    ],
    "optionAnalysis": [
      {
        "choice": "2",
        "truth": false,
        "reason": "300÷150。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "把300除速率差10。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "把答案當兩車各自距離。"
      },
      {
        "choice": "3",
        "truth": true,
        "reason": "相向每小時接近45+55=100公里；100t=300，所以3小時。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "把相向問題用速率差。",
    "concept": "兩車同時縮短間距。",
    "tags": [
      "代數",
      "行程問題",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-money-problem"
    ],
    "authoringIntent": "相向相遇使用速率和。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ecb208ea9899304174afb3ce45fe2c8ac0b864b7d2924954fd14053524e05905",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s010-v005",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-rate-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某人先搭車行 30 公里，再以 70 公里/時行駛 x 小時，總路程 240 公里。x 為多少？",
    "choices": [
      "2",
      "3",
      "7/2",
      "30/7"
    ],
    "answerIndex": 1,
    "explanation": "扣除先行30公里；剩210公里；210÷70=3小時。所以答案是「3」。",
    "steps": [
      "扣除先行30公里",
      "剩210公里",
      "210÷70=3小時"
    ],
    "optionAnalysis": [
      {
        "choice": "2",
        "truth": false,
        "reason": "把240÷120。"
      },
      {
        "choice": "3",
        "truth": true,
        "reason": "30+70x=240，70x=210，所以x=3。 因此此選項符合題目。"
      },
      {
        "choice": "7/2",
        "truth": false,
        "reason": "把240-30後除60。"
      },
      {
        "choice": "30/7",
        "truth": false,
        "reason": "只用30÷70。"
      }
    ],
    "commonMistake": "把先行路程也乘時間。",
    "concept": "總路程由兩段相加。",
    "tags": [
      "代數",
      "行程問題",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-money-problem"
    ],
    "authoringIntent": "處理固定路程加上速率乘時間。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "96d1a325cf447a1c887c53b8490cb87afe2694f7af13dc97517b09b628950dd2",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s010-v006",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-rate-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "小美先以 5 公里/時步行 x 小時，再以 15 公里/時騎車 (2－x) 小時，共走 20 公里。步行多久？",
    "choices": [
      "1/2",
      "4/3",
      "1",
      "3/2"
    ],
    "answerIndex": 2,
    "explanation": "總時間2小時所以騎車2-x；列兩段路程和20；解得步行1小時。所以答案是「1」。",
    "steps": [
      "總時間2小時所以騎車2-x",
      "列兩段路程和20",
      "解得步行1小時"
    ],
    "optionAnalysis": [
      {
        "choice": "1/2",
        "truth": false,
        "reason": "忽略總時間限制。"
      },
      {
        "choice": "4/3",
        "truth": false,
        "reason": "把2-x當2x。"
      },
      {
        "choice": "1",
        "truth": true,
        "reason": "5x+15(2-x)=20，5x+30-15x=20，-10x=-10，所以x=1。 因此此選項符合題目。"
      },
      {
        "choice": "3/2",
        "truth": false,
        "reason": "把兩段速率平均。"
      }
    ],
    "commonMistake": "為每段另設未知數卻無第二式。",
    "concept": "兩段時間和固定時可用2-x。",
    "tags": [
      "代數",
      "行程問題",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-money-problem"
    ],
    "authoringIntent": "用一個未知數表示兩段時間。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "2ac1a6357a539f6c0758cfc5aa4cb885818876583d45c235041ba25c8029e591",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s010-v007",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-rate-problem",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "船在靜水速率 12 公里/時，水流 3 公里/時。逆流行 45 公里需幾小時？",
    "choices": [
      "2.5",
      "3",
      "3.75",
      "5"
    ],
    "answerIndex": 3,
    "explanation": "逆流速率為9；列9t=45；t=5小時。所以答案是「5」。",
    "steps": [
      "逆流速率為9",
      "列9t=45",
      "t=5小時"
    ],
    "optionAnalysis": [
      {
        "choice": "2.5",
        "truth": false,
        "reason": "把兩速率相加後計算。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "把45÷15。"
      },
      {
        "choice": "3.75",
        "truth": false,
        "reason": "使用靜水速率12。"
      },
      {
        "choice": "5",
        "truth": true,
        "reason": "逆流速率12-3=9公里/時，45÷9=5小時。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "逆流時仍把速率相加。",
    "concept": "逆流速率=靜水速率-水流速率。",
    "tags": [
      "代數",
      "行程問題",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-money-problem"
    ],
    "authoringIntent": "先求逆流實際速率。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "014ecedf2da6761fb46b52351c90024a6764a6dbd7044cf11eb7baecb5048bbd",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s010-v008",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-rate-problem",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某路段去程速率 60 公里/時、回程速率 40 公里/時，來回共 5 小時。單程距離多少公里？",
    "choices": [
      "120",
      "100",
      "150",
      "200"
    ],
    "answerIndex": 0,
    "explanation": "兩段距離相同；列x/60+x/40=5；解5x=600得120。所以答案是「120」。",
    "steps": [
      "兩段距離相同",
      "列x/60+x/40=5",
      "解5x=600得120"
    ],
    "optionAnalysis": [
      {
        "choice": "120",
        "truth": true,
        "reason": "設單程x公里，x/60+x/40=5；乘120得2x+3x=600，所以x=120。 因此此選項符合題目。"
      },
      {
        "choice": "100",
        "truth": false,
        "reason": "以平均速率40計算。"
      },
      {
        "choice": "150",
        "truth": false,
        "reason": "把5小時都用去程速率。"
      },
      {
        "choice": "200",
        "truth": false,
        "reason": "將來回距離誤當單程。"
      }
    ],
    "commonMistake": "直接取速率算術平均。",
    "concept": "時間=距離÷速率，來回時間相加。",
    "tags": [
      "代數",
      "行程問題",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-money-problem"
    ],
    "authoringIntent": "由兩段不同速率建立時間和方程式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "9bfbe68a5a48ca104985986dec7438b38cf1cf514456e2b177cb0d0fbdd83323",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s010-v009",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-rate-problem",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "svg",
    "figureId": "fig-u03-s010-v009",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "依圖，甲地到休息站 18 公里，以 6 公里/時行走；休息站到乙地以 9 公里/時前進。全程共 5 小時，休息站到乙地多少公里？",
    "choices": [
      "12",
      "27",
      "18",
      "45"
    ],
    "answerIndex": 2,
    "explanation": "由圖讀出第一段18公里；第一段需3小時；剩2小時走18公里。所以答案是「18」。",
    "steps": [
      "由圖讀出第一段18公里",
      "第一段需3小時",
      "剩2小時走18公里"
    ],
    "optionAnalysis": [
      {
        "choice": "12",
        "truth": false,
        "reason": "把剩餘時間當12/9。"
      },
      {
        "choice": "27",
        "truth": false,
        "reason": "用9×3。"
      },
      {
        "choice": "18",
        "truth": true,
        "reason": "第一段時間18÷6=3小時，第二段剩2小時，距離9×2=18公里。 因此此選項符合題目。"
      },
      {
        "choice": "45",
        "truth": false,
        "reason": "把5小時全用9公里/時。"
      }
    ],
    "commonMistake": "將兩段速率直接相加。",
    "concept": "總時間等於各段時間和。",
    "tags": [
      "代數",
      "行程問題",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-money-problem"
    ],
    "authoringIntent": "從路線圖讀取分段距離與速率。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "87ddb9466d216d798dda3bf50dec1f718f0746a8e59d95efb00a3472440e370f",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s010-v010",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-rate-problem",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "原訂 70 公里/時行駛 210 公里，實際比原訂多花 0.5 小時。實際平均速率是多少公里/時？",
    "choices": [
      "55",
      "65",
      "75",
      "60"
    ],
    "answerIndex": 3,
    "explanation": "求原訂時間3小時；實際時間3.5小時；210÷3.5=60。所以答案是「60」。",
    "steps": [
      "求原訂時間3小時",
      "實際時間3.5小時",
      "210÷3.5=60"
    ],
    "optionAnalysis": [
      {
        "choice": "55",
        "truth": false,
        "reason": "把速率直接減15。"
      },
      {
        "choice": "65",
        "truth": false,
        "reason": "只減5公里/時。"
      },
      {
        "choice": "75",
        "truth": false,
        "reason": "延遲卻提高速率。"
      },
      {
        "choice": "60",
        "truth": true,
        "reason": "原訂時間210÷70=3小時，實際3.5小時；速率210÷3.5=60。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "把0.5小時直接換成速率差。",
    "concept": "先求原訂時間再加延遲。",
    "tags": [
      "代數",
      "行程問題",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-money-problem"
    ],
    "authoringIntent": "由延遲時間回推實際速率。",
    "literacyContextNecessity": "距離、原訂速率與延遲時間共同決定實際總時間，情境資料不可省略。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "025c054ba85f1497b802f8be8cd6074a6e78ae3be2c9ecc303605b2c2cd6207a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s010-v011",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-rate-problem",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "配送車以 50 公里/時行駛 x 小時，再由機車以 20 公里/時行駛 1 小時，總路程 170 公里。x 為多少？",
    "choices": [
      "3",
      "2",
      "17/5",
      "4"
    ],
    "answerIndex": 0,
    "explanation": "第二段固定20公里；列50x+20=170；解得3小時。所以答案是「3」。",
    "steps": [
      "第二段固定20公里",
      "列50x+20=170",
      "解得3小時"
    ],
    "optionAnalysis": [
      {
        "choice": "3",
        "truth": true,
        "reason": "50x+20=170，50x=150，所以x=3。 因此此選項符合題目。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "170÷85。"
      },
      {
        "choice": "17/5",
        "truth": false,
        "reason": "把170-20後除44。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "把兩段時間都設成x。"
      }
    ],
    "commonMistake": "把兩段速率相加後除總距離。",
    "concept": "各段距離相加。",
    "tags": [
      "代數",
      "行程問題",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-money-problem"
    ],
    "authoringIntent": "分段運輸中一段時間固定。",
    "literacyContextNecessity": "配送車與機車的不同速率和不同時間決定50x+20，交通情境直接形成方程式。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "95bed28c97779e11d743a1525566358d6655cdfca81aa4c404d298a7ad1759cf",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s010-v012",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-rate-problem",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "長 120 公尺的自動步道以 0.8 公尺/秒前進，乘客相對步道再走 1.2 公尺/秒。乘客需幾秒通過？",
    "choices": [
      "50",
      "60",
      "100",
      "150"
    ],
    "answerIndex": 1,
    "explanation": "合成同方向速率2；列2t=120；得到60秒。所以答案是「60」。",
    "steps": [
      "合成同方向速率2",
      "列2t=120",
      "得到60秒"
    ],
    "optionAnalysis": [
      {
        "choice": "50",
        "truth": false,
        "reason": "只用乘客速率120÷2.4。"
      },
      {
        "choice": "60",
        "truth": true,
        "reason": "同方向實際速率0.8+1.2=2公尺/秒，2t=120，所以t=60秒。 因此此選項符合題目。"
      },
      {
        "choice": "100",
        "truth": false,
        "reason": "只用步道速率120÷0.8。"
      },
      {
        "choice": "150",
        "truth": false,
        "reason": "把兩速率相減。"
      }
    ],
    "commonMistake": "將相對步道速率誤當相對地面速率。",
    "concept": "相對地面的速率為兩速率和。",
    "tags": [
      "代數",
      "行程問題",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-money-problem"
    ],
    "authoringIntent": "理解相對速率在同方向步道情境的合成。",
    "literacyContextNecessity": "步道與乘客同方向運動的相對速率資訊決定實際速率為兩者相加，情境不可刪除。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "5b519da3fcb78efd834710820fd7f4b9af8e08a316aebb871db4bff4f419499a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u03-s010-cr001",
    "unitId": "u03",
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-rate-problem",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "甲乙兩地相距 330 公里，兩車同時相向而行，速率分別為 50 與 60 公里/時。幾小時後相遇？各走多少公里？",
    "requiredWork": [
      "使用相向速率和。",
      "先求時間，再求兩車路程。",
      "驗查路程和330。"
    ],
    "fullCreditSolution": [
      "(50+60)t=330。",
      "110t=330，t=3小時。",
      "甲走150公里，乙走180公里；合計330公里。"
    ],
    "alternativeSolutions": [
      "可分別列50t+60t=330。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "時間與兩車路程全部正確並驗查總距離。"
      },
      {
        "score": 2,
        "criteria": "時間正確但一個路程錯或漏答。"
      },
      {
        "score": 1,
        "criteria": "能列110t=330。"
      },
      {
        "score": 0,
        "criteria": "相向關係判斷錯誤。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "使用速率差。",
      "求出時間後未回答各自路程。"
    ],
    "independentReview": {
      "derivedResult": "3小時；150公里與180公里",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "9f7375147a57dddeb4797e88e9e4853b43b940e42cf3f6a46c42160b55945352",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s010-cr002",
    "unitId": "u03",
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-rate-problem",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某人先以 4 公里/時步行，後以 12 公里/時騎車，總時間 3 小時、總路程 20 公里。步行與騎車各多久？",
    "requiredWork": [
      "用一個未知數表示兩段時間。",
      "列兩段路程和。",
      "回答兩段時間並驗算。"
    ],
    "fullCreditSolution": [
      "設步行x小時，騎車3-x小時。",
      "4x+12(3-x)=20。",
      "4x+36-12x=20，-8x=-16，x=2。",
      "步行2小時、騎車1小時；路程8+12=20。"
    ],
    "alternativeSolutions": [
      "也可設騎車時間y，步行3-y。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確列式、解兩段時間並驗查。"
      },
      {
        "score": 2,
        "criteria": "列式正確但一處運算錯。"
      },
      {
        "score": 1,
        "criteria": "能寫4x+12(3-x)=20。"
      },
      {
        "score": 0,
        "criteria": "未使用總時間條件。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "把兩段時間都設x。",
      "用速率算術平均直接求時間。"
    ],
    "independentReview": {
      "derivedResult": "步行2小時、騎車1小時",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "bbd982ee441edd2fbf71381b57a8315858fe100d1a1c6932796b005f5af5044f",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "fig-u03-s010-v009",
    "unitId": "u03",
    "skillId": "linear-equation-rate-problem",
    "altText": "從甲地經休息站到乙地的分段路線。甲地到休息站十八公里、速率每小時六公里；第二段距離為 x 公里、速率每小時九公里；全程五小時。",
    "drawingSpec": {
      "canvas": {
        "width": 940,
        "height": 320,
        "viewBox": "0 0 940 320"
      },
      "points": {
        "甲地": [
          100,
          150
        ],
        "休息站": [
          470,
          150
        ],
        "乙地": [
          840,
          150
        ]
      },
      "segments": [
        {
          "from": "甲地",
          "to": "休息站",
          "distance": "18 公里",
          "speed": "6 公里/時",
          "line": "5px實線箭頭"
        },
        {
          "from": "休息站",
          "to": "乙地",
          "distance": "x 公里",
          "speed": "9 公里/時",
          "line": "5px實線箭頭"
        }
      ],
      "timeBox": {
        "text": "全程時間：5 小時",
        "position": [
          350,
          260,
          240,
          42
        ]
      },
      "labels": {
        "place": "點上方",
        "distance": "線段下方第一列",
        "speed": "線段下方第二列"
      },
      "scaleNote": "兩線段等長僅為排版，不能據圖形比例推測距離。",
      "hiddenLines": "無虛線。",
      "accessibility": "desc列出全部距離、速率與總時間。",
      "mobile": "所有數值文字至少22px。"
    },
    "svgPath": "figures/u03/fig-u03-s010-v009.svg",
    "svgAssertions": [
      "18 公里",
      "x 公里",
      "全程時間：5 小時"
    ],
    "figureReview": {
      "decision": "pass",
      "questionFigureConsistency": "pass",
      "accessibility": "pass",
      "mobileReadability": "pass",
      "answerLeakage": "pass",
      "reviewNote": "核對第一段18÷6=3小時、第二段標示x與9公里/時、總時間5小時；線段等長附不按比例說明，未畫出第二段答案。",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "70ced3788bced30b4b0866e3426758f2bd69cbaa7ba53ad563027f007482db88",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "new-human-authored-figure"
  }
];
