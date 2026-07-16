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
      "prompt": "以每小時八十四公里行駛二百九十四公里，需要多久？",
      "solutionSteps": [
        "用時間等於距離除以速率，列 t＝294÷84。",
        "約分計算得 t＝3.5，並以八十四乘三點五驗回距離。"
      ],
      "answer": "三點五小時。",
      "why": "距離與速率單位分別是公里及公里每小時，相除後單位為小時。二百九十四除以八十四等於三點五；乘回速率可得原距離，且正時間符合情境。"
    },
    {
      "prompt": "兩車相距三百六十公里，以每小時五十二與六十八公里相向而行，多久相遇？",
      "solutionSteps": [
        "相向時速率相加，得到每小時共同接近一百二十公里。",
        "列 120t＝360，解得 t＝3，並核對兩車路程和。"
      ],
      "answer": "三小時後相遇。",
      "why": "兩車相向而行會共同縮短間距，所以使用速率和而不是差。三小時內兩車分別走一百五十六與二百零四公里，合計三百六十公里。"
    },
    {
      "prompt": "快車每小時七十二公里，慢車每小時五十四公里，慢車先行四十五公里，快車多久追上？",
      "solutionSteps": [
        "同向追及使用快減慢，求相對速率為每小時十八公里。",
        "列 18t＝45，得到 t＝2.5，分別計算兩車新增路程驗算。"
      ],
      "answer": "二點五小時。",
      "why": "追趕期間慢車仍在前進，快車每小時只能追回十八公里。四十五除以十八為二點五；此時快車走一百八十公里，慢車新增一百三十五公里，差正好四十五公里。"
    },
    {
      "prompt": "單程一百二十公里，去程每小時四十八公里、回程每小時八十公里，求來回總時間。",
      "solutionSteps": [
        "去程時間為 120÷48＝2.5 小時。",
        "回程時間為 120÷80＝1.5 小時，兩段相加得四小時。"
      ],
      "answer": "來回共四小時。",
      "why": "去回程距離相同，但速率不同，所以必須分段用距離除以各自速率。兩段時間二點五與一點五相加為四小時，不能先平均兩個速率再計算。"
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
  "contentSha256": "7a448a54ba1ab6ee549350f1073e6f8e7be79a0f444adc4a0172dfcbefc7d64e",
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
    "explanation": "距離等於速率乘時間。設行駛 t 小時，以每小時 60 公里走 180 公里，列 60t＝180；兩邊同除以 60，得 t＝3。驗算三小時所走距離為六十乘三等於一百八十公里，單位也由公里除以公里每小時得到小時。",
    "steps": [
      "設行駛時間為 t 小時，列 60t＝180。",
      "等式兩邊同除以 60，求得 t＝3。",
      "用速率乘三小時，核對距離為一百八十公里。"
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
    "commonMistake": "把距離一百八十減速率六十，會混用不同單位，也不符合距離等於速率乘時間。",
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
    "contentSha256": "d4f87e940c31d05c60434bf7887ced54a1e43db53228e96e857c4c66209d5825",
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
    "explanation": "平均速率等於總距離除以總時間。設速率為 v 公里每小時，列 2.5v＝150，所以 v＝150÷2.5＝60。驗算每小時六十公里行駛二點五小時，距離為一百五十公里；答案的單位必須是公里每小時。",
    "steps": [
      "用距離等於速率乘時間列 2.5v＝150。",
      "兩邊同除以二點五，得到 v＝60。",
      "以六十乘二點五驗回一百五十公里。"
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
    "commonMistake": "把距離乘時間得到三百七十五，混淆求速率時應使用距離除以時間。",
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
    "contentSha256": "acb311e5687b62578a5cc5b88f9f1043c13828ec8bdcd62704217fa628316f56",
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
    "explanation": "甲車已有 30 公里領先距離，乙車每小時比甲車快 55－40＝15 公里，因此每小時可追近十五公里。設追上需 t 小時，列 15t＝30，解得 t＝2。兩小時後甲再走八十公里，乙走一百一十公里，正好補回三十公里差距。",
    "steps": [
      "先算同向追及的相對速率為十五公里每小時。",
      "以相對速率乘時間等於領先距離，列 15t＝30。",
      "解得兩小時，分別計算兩車新增路程驗算。"
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
    "commonMistake": "直接用領先距離除以乙車速率，忽略甲車在追趕期間仍以每小時四十公里前進。",
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
    "contentSha256": "aa20d9d99b06da4ad0f2982fae9a309c7fb945e0d2f03559de616dadf1d42c69",
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
    "explanation": "兩車相向而行時，兩地間距每小時縮短 45＋55＝100 公里。設 t 小時後相遇，列 100t＝300，解得 t＝3。三小時內兩車分別走一百三十五與一百六十五公里，路程和為三百公里，正好填滿原先間距。",
    "steps": [
      "將相向兩車速率相加，得到每小時接近一百公里。",
      "列相對速率乘時間等於間距：100t＝300。",
      "求得三小時，核對兩車路程和為三百公里。"
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
    "commonMistake": "相向問題誤用兩速率之差，會把間距縮短速度算成每小時十公里。",
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
    "contentSha256": "30211c8c21f908435f317e4393488ba9a8873047f75b766954856f006748dcf5",
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
    "explanation": "全程由先行 30 公里與後段每小時 70 公里行駛 x 小時組成，所以列 30＋70x＝240。兩邊減 30 得 70x＝210，再除以 70 得 x＝3。驗算後段三小時走二百一十公里，加前段三十公里正好二百四十公里。",
    "steps": [
      "用 70x 表示後段行駛距離。",
      "依總路程列 30＋70x＝240。",
      "解得三小時，將兩段路程相加驗算。"
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
    "commonMistake": "直接用全程二百四十公里除以七十，忽略其中三十公里是在後段計時前已完成。",
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
    "contentSha256": "8b614c63fac60f83dddb7f07bad4863e9838feebdcc3d42d78cfc2c93df0a583",
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
    "explanation": "總時間兩小時中，步行 x 小時，騎車便是 2－x 小時。兩段路程和為 5x＋15(2－x)＝20。展開得 5x＋30－15x＝20，即－10x＝－10，所以 x＝1。此時步行五公里、騎車十五公里，合計二十公里且總時兩小時。",
    "steps": [
      "以 x 與 2－x 表示步行和騎車時間。",
      "依兩段路程和列 5x＋15(2－x)＝20。",
      "解得步行一小時，核對兩段時間與路程。"
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
    "commonMistake": "把騎車時間二減 x 錯寫成二 x，或把兩段時間都設為 x，會違反總時間兩小時。",
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
    "contentSha256": "0ed6726fb385f4a57c48d46df2094facec15d786b4089000a13e82326a23cf6a",
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
    "explanation": "逆流時水流方向與船前進方向相反，對地速率為靜水速率減水流速率，即 12－3＝9 公里每小時。行駛 45 公里所需時間為 45÷9＝5 小時。驗算逆流五小時走九乘五等於四十五公里，方向與單位都正確。",
    "steps": [
      "先用靜水速率減流速，求逆流速率九公里每小時。",
      "以距離除以逆流速率，計算 45÷9。",
      "得到五小時，乘回速率驗算路程。"
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
    "commonMistake": "逆流時仍把船速與流速相加，會錯用順流速率並低估所需時間。",
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
    "contentSha256": "931fafabf6c32527dd42db25fe0cc1819b1be1071513098af88556179be4ca0b",
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
    "explanation": "設單程距離為 x 公里，去程時間是 x/60 小時，回程時間是 x/40 小時；來回共五小時，列 x/60＋x/40＝5。分母最小公倍數是一百二十，同乘後得 2x＋3x＝600，所以 x＝120。驗算去程兩小時、回程三小時。",
    "steps": [
      "以 x/60 與 x/40 表示去回程時間。",
      "依總時間列 x/60＋x/40＝5。",
      "消分母解得單程一百二十公里，核對兩段時間。"
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
    "commonMistake": "把六十與四十直接取算術平均再乘五小時，忽略去回程距離相同但所用時間不同。",
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
    "contentSha256": "acbe1089232c7730d8958a6c36c1f043c4d9a973a73bbf63a3ba9474cb2daf53",
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
    "text": "依圖，甲地到休息站 18 公里，以 6 公里/時行走；休息站到乙地以 9 公里/時前進。全程共 5 小時，休息站到乙地多少公里？（示意圖不按比例，線段長短不代表實際距離。）",
    "choices": [
      "12",
      "27",
      "18",
      "45"
    ],
    "answerIndex": 2,
    "explanation": "第一段距離 18 公里、速率每小時 6 公里，所以先走 18÷6＝3 小時。全程五小時，第二段剩 5－3＝2 小時；以每小時 9 公里前進，距離為 9×2＝18 公里。圖形只是資料位置示意，不能從線段長短或比例推測未知距離。",
    "steps": [
      "由第一段距離除以速率，求得三小時。",
      "用全程五小時減第一段時間，得第二段兩小時。",
      "以九乘兩求得十八公里，只依數值計算而不量圖。"
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
    "commonMistake": "把圖上線段的視覺長短當成實際距離比例，或直接把五小時全乘第二段速率，都會外洩或誤算答案。",
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
    "contentSha256": "47098f3dceea30c45461998e6c02ecb3b0a37c121db3065ed579e62463ae8237",
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
    "explanation": "原訂以每小時 70 公里走 210 公里，原訂時間為 210÷70＝3 小時。實際多花 0.5 小時，所以實際時間是 3.5 小時；實際平均速率為 210÷3.5＝60 公里每小時。因時間增加而距離不變，速率低於原訂七十也合理。",
    "steps": [
      "先以距離除原訂速率，求原訂三小時。",
      "加入延遲的零點五小時，得實際三點五小時。",
      "以二百一十除以三點五，求得每小時六十公里。"
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
    "commonMistake": "把多花零點五小時直接換成速率減少某個固定數，忽略速率要用距離除以完整時間。",
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
    "contentSha256": "61c42275366f9a1f62f104cc0dbea0830f4fcaa5941986e3016727f978089af0",
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
    "explanation": "配送車以每小時 50 公里行駛 x 小時，路程是 50x 公里；機車每小時 20 公里行駛一小時，路程固定為 20 公里。依總路程列 50x＋20＝170，解得 50x＝150、x＝3。驗算兩段路程一百五十與二十公里，合計一百七十。",
    "steps": [
      "分別表示配送車路程 50x 與機車路程二十公里。",
      "依總路程列 50x＋20＝170。",
      "解得配送車三小時，核對兩段路程和。"
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
    "commonMistake": "把機車的一小時也設成 x，會改變題目已明定的固定時間並得到錯誤方程式。",
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
    "contentSha256": "e4407bb45584bad515655642cad55821914c0e923f6261b4ae4df2c946886877",
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
    "explanation": "乘客與自動步道同方向，乘客相對地面的速率是步道每秒 0.8 公尺加相對步道每秒 1.2 公尺，共每秒 2 公尺。設通過需 t 秒，列 2t＝120，得 t＝60。驗算六十秒乘每秒二公尺正好一百二十公尺。",
    "steps": [
      "同方向合成速率，計算 0.8＋1.2＝2 公尺每秒。",
      "依距離等於速率乘時間列 2t＝120。",
      "解得六十秒，乘回合成速率驗算步道長度。"
    ],
    "optionAnalysis": [
      {
        "choice": "50",
        "truth": false,
        "reason": "50 秒來自把乘客的 1.2 公尺/秒重複計入，誤用 2.4 公尺/秒；正確合速是 2。"
      },
      {
        "choice": "60",
        "truth": true,
        "reason": "同方向實際速率0.8+1.2=2公尺/秒，2t=120，所以t=60秒。 因此此選項符合題目。"
      },
      {
        "choice": "100",
        "truth": false,
        "reason": "100 秒是只用乘客相對步道的 1.2 公尺/秒計算 120÷1.2，漏加步道的 0.8。"
      },
      {
        "choice": "150",
        "truth": false,
        "reason": "把兩速率相減。"
      }
    ],
    "commonMistake": "只使用乘客相對步道的速率，或只使用步道速率，會漏掉同方向兩種運動的合成。",
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
    "contentSha256": "0a8cd63d15e401def27fe4d6f62fad4a7919a47c9ba817c5180390240948c3ea",
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
      "設相遇時間為 t 小時。兩車相向而行，每小時共同縮短的距離是 50＋60＝110 公里。",
      "依原間距列 (50＋60)t＝330，即 110t＝330，兩邊除以 110 得 t＝3 小時。",
      "速率五十的車走 50×3＝150 公里，速率六十的車走 60×3＝180 公里。",
      "兩車路程和為 150＋180＝330 公里，正好等於甲乙兩地距離，驗算成立。"
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
      "相向而行卻使用兩車速率差，會把間距縮短速率判斷成每小時十公里。",
      "求出三小時便停止，漏答題目要求的兩車各自行駛路程。",
      "把兩車都用同一速率計算路程，忽略題目給定每小時五十與六十公里。"
    ],
    "independentReview": {
      "derivedResult": "3小時；150公里與180公里",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "8072aa34f0896e397922f6591cae3ae7ce81b73771c66f6484b81e32a5be6ee8",
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
      "設步行 x 小時，總時間三小時，所以騎車時間為 3－x 小時；兩段時間都應介於零與三之間。",
      "步行路程為 4x 公里，騎車路程為 12(3－x) 公里，依總路程列 4x＋12(3－x)＝20。",
      "展開得 4x＋36－12x＝20，所以－8x＝－16，解得 x＝2。",
      "步行兩小時、騎車一小時；路程分別八與十二公里，合計二十公里且時間合計三小時。"
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
      "把步行與騎車時間都設成 x，沒有使用兩段總時間為三小時的條件。",
      "以四與十二的算術平均直接乘三小時，忽略兩種速率所占時間不同。",
      "只回答步行兩小時，沒有由三減二求出騎車一小時或核對兩段路程。"
    ],
    "independentReview": {
      "derivedResult": "步行2小時、騎車1小時",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "db301efc34e1ab1eb14756cc97b64619b4d30f7f3dc9907627b37b1e9fa22ca4",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "fig-u03-s010-v009",
    "unitId": "u03",
    "skillId": "linear-equation-rate-problem",
    "altText": "不按比例的折線路線示意圖：甲地到休息站十八公里、速率每小時六公里；休息站到乙地距離為 x 公里、速率每小時九公里；全程五小時。線段長短不得用來推測距離。",
    "drawingSpec": {
      "canvas": {
        "width": 940,
        "height": 320,
        "viewBox": "0 0 940 320"
      },
      "points": {
        "甲地": [
          100,
          145
        ],
        "休息站": [
          385,
          100
        ],
        "乙地": [
          840,
          175
        ]
      },
      "segments": [
        {
          "from": "甲地",
          "to": "休息站",
          "distance": "18 公里",
          "speed": "6 公里/時",
          "line": "5px實線箭頭；幾何長度刻意不按資料比例"
        },
        {
          "from": "休息站",
          "to": "乙地",
          "distance": "x 公里",
          "speed": "9 公里/時",
          "line": "5px實線箭頭；幾何長度刻意不按資料比例"
        }
      ],
      "timeBox": {
        "text": "全程時間：5 小時",
        "position": [
          100,
          255,
          260,
          42
        ]
      },
      "notToScaleLabel": {
        "text": "示意圖不按比例；線段長短不得用來推測距離",
        "position": [
          650,
          283
        ]
      },
      "labels": {
        "place": "各點上方並依折線避讓",
        "distance": "各段鄰近位置第一列",
        "speed": "各段鄰近位置第二列"
      },
      "scaleNote": "兩段刻意畫成不等長折線，且明示不按比例；不得從幾何長度、斜率或位置推測未知距離。",
      "hiddenLines": "無虛線、無等長記號、無比例尺。",
      "accessibility": "desc列出全部已知距離、速率、總時間與不按比例警語；未知段只標 x 公里。",
      "mobile": "所有數值與不按比例警語至少22px，黑白列印仍可辨識。"
    },
    "svgPath": "figures/u03/fig-u03-s010-v009.svg",
    "svgAssertions": [
      "18 公里",
      "x 公里",
      "全程時間：5 小時",
      "示意圖不按比例"
    ],
    "figureReview": {
      "decision": "pass",
      "questionFigureConsistency": "pass",
      "accessibility": "pass",
      "mobileReadability": "pass",
      "answerLeakage": "pass",
      "reviewNote": "第二段保持 x 公里且不呈現答案；兩段改為明顯不等長折線，題文、可見標籤與 desc 都聲明不按比例，不能以等長或比例外洩十八公里。",
      "reviewedAt": "2026-07-16"
    },
    "contentSha256": "486c6c685869f877393c61e38ba7eb56d473059a12d6f6bd88b31ad9781b0eb6",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "new-human-authored-figure"
  }
];
