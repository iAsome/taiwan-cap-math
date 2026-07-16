// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
// CONTENT AUTHORITY: CHATGPT_HUMAN_AUTHORED_R1
// OLD GENERATED CONTENT MUST NOT BE IMPORTED OR MERGED.
export const LECTURE = {
  "lectureId": "u03-s011-lecture-r1",
  "unitId": "u03",
  "topicId": "u03-linear-equation-apps",
  "skillId": "linear-equation-distribution-problem",
  "title": "分配問題：總量等於每份量乘份數再加剩餘",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能區分總量、每份量、份數與剩餘量。",
    "能處理完整組與不完整末組。",
    "能判斷每份變化與整體變化的層級。",
    "能檢查份數與件數的整數性。"
  ],
  "prerequisites": [
    {
      "skillId": "linear-equation-rate-problem",
      "requiredLevel": "能使用距離＝速率×時間，並處理分段與相對速率。"
    }
  ],
  "glossary": [
    {
      "term": "總量",
      "definition": "分配前全部物品或人數。"
    },
    {
      "term": "每份量",
      "definition": "每一組、每箱或每人分到的數量。"
    },
    {
      "term": "份數",
      "definition": "組、箱、袋或人的數目。"
    },
    {
      "term": "剩餘量",
      "definition": "完成整份分配後未被分入的部分。"
    }
  ],
  "notation": [
    {
      "symbol": "T=qx+r",
      "meaning": "總量T=每份量q×份數x+剩餘r。"
    },
    {
      "symbol": "x-1",
      "meaning": "若最後一組不完整，完整組數可能是總組數減1。"
    }
  ],
  "conceptNarrative": [
    "分配題的核心結構是每份量乘份數。",
    "若有剩餘，要先判斷剩餘是在分配後留下，還是事先保留。",
    "最後一組不完整時，不能把所有組都當成相同大小。",
    "箱數、組數與人數通常必須是非負整數。",
    "解完後應以每份量乘份數，再加回剩餘或額外量，檢查是否精確還原題目總量。"
  ],
  "formalDefinitions": [
    {
      "name": "整除分配",
      "statement": "沒有剩餘時T=qx。"
    },
    {
      "name": "有餘分配",
      "statement": "有剩餘r時T=qx+r，且通常0≤r<q。"
    }
  ],
  "formulas": [
    {
      "formula": "T=qx+r",
      "conditions": [
        "q>0",
        "份數x通常為非負整數"
      ],
      "meaning": "一般分配模型。"
    },
    {
      "formula": "q(x-1)+s=T",
      "conditions": [
        "最後一組有s個且0<s<q"
      ],
      "meaning": "不完整末組。"
    }
  ],
  "nonApplicableCases": [
    "剩餘量不可大於或等於每份量而仍稱為最終餘數。",
    "題目若要求完整箱數，不能接受小數解。",
    "每箱都增加的量要放在括號內。",
    "整批額外量只加一次。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "標出總量、每份量、份數、剩餘。",
      "check": "未知數是哪一項？"
    },
    {
      "step": 2,
      "instruction": "判斷所有份是否完整。",
      "check": "最後一組是否例外？"
    },
    {
      "step": 3,
      "instruction": "建立T=qx+r或變形。",
      "check": "剩餘方向是加回總量嗎？"
    },
    {
      "step": 4,
      "instruction": "解方程式。",
      "check": "是否得到整數份數？"
    },
    {
      "step": 5,
      "instruction": "乘回並加剩餘驗算。",
      "check": "是否重建原總量？"
    }
  ],
  "workedExamples": [
    {
      "prompt": "84顆球每袋7顆，可裝幾袋？",
      "answer": "12袋。",
      "solutionSteps": [
        "設可裝 x 袋，依每袋 7 顆列 7x=84。",
        "兩邊同除以 7，得 x=12。",
        "以 7×12=84 驗算，沒有剩餘。"
      ],
      "why": "題目是沒有剩餘的整除分配，因此總量必須等於每袋量乘袋數。七乘十二正好是八十四，所以十二袋不僅來自除法，也能完整重建原總數。"
    },
    {
      "prompt": "每盒9個，裝5盒後剩4個。",
      "answer": "49個。",
      "solutionSteps": [
        "先算五盒已裝的數量 9×5=45。",
        "將箱外剩餘 4 個加回，得 45+4=49。",
        "檢查剩餘 4 小於每盒 9 個，無法再裝滿一盒。"
      ],
      "why": "九乘五只代表已經裝入完整盒的數量，題目說還剩四個，這四個仍屬於原總量，所以必須加回而非扣除。剩餘小於每盒量，也符合最終餘數條件。"
    },
    {
      "prompt": "總共61人，除最後一組5人外，其餘每組8人。",
      "answer": "8組。",
      "solutionSteps": [
        "設總組數為 x，前面完整組共 x-1 組。",
        "依總人數列 8(x-1)+5=61，化簡得 8x=64。",
        "解得 x=8，驗算前七組 56 人加末組 5 人為 61 人。"
      ],
      "why": "未知數 x 表示包含末組在內的總組數，所以完整八人組只有 x-1 組。若直接用 8x+5，就會把末組同時當成完整組與五人組而重複計數；回代可確認八組正確。"
    },
    {
      "prompt": "10箱每箱原有x瓶，每箱取出2瓶後剩80瓶。",
      "answer": "每箱原有10瓶。",
      "solutionSteps": [
        "每箱取出 2 瓶後，每箱剩 x-2 瓶。",
        "十箱合計列 10(x-2)=80，得 x-2=8。",
        "加回 2 得 x=10，驗算 10×(10-2)=80。"
      ],
      "why": "「每箱取出兩瓶」的變化在每一箱都發生，所以 x-2 必須整體放在十倍括號內。若寫成 10x-2，只扣一次兩瓶，會錯把逐箱變化當成整批變化；回代可證明每箱原有十瓶。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "總量除每份量後忽略剩餘。",
      "why": "把有餘分配當整除。",
      "correction": "先扣或加回剩餘。"
    },
    {
      "mistake": "把剩餘從原總量再加一次。",
      "why": "方向判斷錯。",
      "correction": "總量=已分+剩餘。"
    },
    {
      "mistake": "最後不完整組也乘完整每組量。",
      "why": "未區分x-1。",
      "correction": "完整組數另列。"
    },
    {
      "mistake": "每箱減2寫成10x-2。",
      "why": "把每份變化當整體一次。",
      "correction": "寫10(x-2)。"
    },
    {
      "mistake": "箱數解為小數仍接受。",
      "why": "未檢查離散量。",
      "correction": "確認完整箱數需整數。"
    },
    {
      "mistake": "餘數大於每份量。",
      "why": "尚可再組成完整一份。",
      "correction": "檢查0≤r<q。"
    }
  ],
  "selfCheck": [
    "四個角色是否分清？",
    "最後一組是否完整？",
    "剩餘量方向是否正確？",
    "每份變化放在括號內嗎？",
    "份數解是否為非負整數？"
  ],
  "summary": [
    "總量=每份量×份數+剩餘。",
    "末組例外要用x-1。",
    "每份與整體變化不可混淆。",
    "離散份數需檢查整數性。"
  ],
  "connections": {
    "previous": "需要能處理括號方程式與行程題中的分段層級。",
    "next": [
      "連續整數問題會把多個相鄰數表示成同一未知數的變形。",
      "合理性檢查會判斷箱數與人數是否可接受。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u03-s011-v001",
      "u03-s011-v002",
      "u03-s011-v003",
      "u03-s011-v004",
      "u03-s011-v005",
      "u03-s011-v006",
      "u03-s011-v007",
      "u03-s011-v008",
      "u03-s011-v009",
      "u03-s011-v010",
      "u03-s011-v011",
      "u03-s011-v012"
    ],
    "constructedResponseIds": [
      "u03-s011-cr001",
      "u03-s011-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "四例乘回驗證：7×12=84、9×5+4=49、8×7+5=61、10×(10-2)=80；並核對餘數小於每份量及份數皆為整數。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "e875fe292e64b0dc7f342d28c8b8a814f7b2a53d7e27f7de5c33966ea28e8ea9",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "legacyContentDisposition": "replace-old-lecture-at-final-integration"
};

export const QUESTIONS = [
  {
    "questionId": "u03-s011-v001",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-distribution-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "48 顆糖平均分給每人 4 顆，可分給幾人？",
    "choices": [
      "12",
      "8",
      "16",
      "192"
    ],
    "answerIndex": 0,
    "explanation": "設可分給 x 人，每人 4 顆且全部分完，所以總數關係為 4x=48。兩邊同除以 4 得 x=12；回代 4×12=48，恰好用完全部糖果，因此答案是 12 人。 所求的商與人數單位相符。",
    "steps": [
      "以 x 表示可分給的人數。",
      "用每人 4 顆寫出 4x=48。",
      "解得 x=12，再以 4×12=48 驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "12",
        "truth": true,
        "reason": "設人數x，4x=48，所以x=12。 因此此選項符合題目。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "48÷6。"
      },
      {
        "choice": "16",
        "truth": false,
        "reason": "把48÷3。"
      },
      {
        "choice": "192",
        "truth": false,
        "reason": "把4與48相乘。"
      }
    ],
    "commonMistake": "把每人四顆與人數的角色顫倒，或誤把四與四十八相乘。",
    "concept": "每份量×份數=總量。",
    "tags": [
      "代數",
      "分配問題",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-rate-problem"
    ],
    "authoringIntent": "把平均分配寫成乘法方程式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "23281f679c8d79de7b38449752dec687d8b7cb726b822a13193675a7ceb78fd8",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s011-v002",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-distribution-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "有 x 顆蘋果，每人分 6 顆，分給 7 人後還剩 5 顆。原有多少顆？",
    "choices": [
      "37",
      "47",
      "42",
      "72"
    ],
    "answerIndex": 1,
    "explanation": "已分出的蘋果為每人 6 顆乘 7 人，共 42 顆。題目說分完後還剩 5 顆，所以原數 x=42+5=47。回代 47-6×7=5，剩餘數量完全符合題意。 剩餘量的方向應是加回原總數。",
    "steps": [
      "先算 6×7=42，得到已分出的蘋果數。",
      "將剩餘 5 顆加回，列 x=42+5。",
      "算得 x=47，並驗算分完後確實剩 5 顆。"
    ],
    "optionAnalysis": [
      {
        "choice": "37",
        "truth": false,
        "reason": "把剩餘5從42扣除。"
      },
      {
        "choice": "47",
        "truth": true,
        "reason": "x=6×7+5=42+5=47。 因此此選項符合題目。"
      },
      {
        "choice": "42",
        "truth": false,
        "reason": "只算已分數量。"
      },
      {
        "choice": "72",
        "truth": false,
        "reason": "把7與5相加再乘6。"
      }
    ],
    "commonMistake": "把分配後剩下的五顆誤從已分數量扣除，導致總數方向相反。",
    "concept": "總量=每份×份數+剩餘。",
    "tags": [
      "代數",
      "分配問題",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-rate-problem"
    ],
    "authoringIntent": "由已分量與餘數回推總量。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "be7e4999d6b327801c74482786ffc8bde599ab577bbf9f81bf5b7db3c820c1ec",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s011-v003",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-distribution-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "90 本書平均放在 x 個書架，每架 15 本。x 為多少？",
    "choices": [
      "5",
      "15",
      "6",
      "75"
    ],
    "answerIndex": 2,
    "explanation": "以 x 表示書架數，每架 15 本，因此全部書本數為 15x，列式 15x=90。兩邊同除以 15 得 x=6；六個書架各放十五本，6×15=90，沒有遗漏或剩餘。 所求單位是書架個數，不是每架本數。",
    "steps": [
      "設書架數為 x，每架固定放 15 本。",
      "建立總數方程式 15x=90。",
      "解得 x=6，以 15×6=90 回代檢查。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": false,
        "reason": "90÷18。"
      },
      {
        "choice": "15",
        "truth": false,
        "reason": "把每架本數當架數。"
      },
      {
        "choice": "6",
        "truth": true,
        "reason": "15x=90，x=6。 因此此選項符合題目。"
      },
      {
        "choice": "75",
        "truth": false,
        "reason": "90-15。"
      }
    ],
    "commonMistake": "直接把每架十五本當成書架數，沒有用總本數除以每架本數。",
    "concept": "份數=總量÷每份量。",
    "tags": [
      "代數",
      "分配問題",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-rate-problem"
    ],
    "authoringIntent": "由總量與每份量求份數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a94125ad542a58f61e24e554943c2b24688fd28e443bffca3422d99c81ee22d5",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s011-v004",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-distribution-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某班分組：除最後一組外，每組 8 人；最後一組 5 人，共 53 人。共有幾組？",
    "choices": [
      "6",
      "8",
      "9",
      "7"
    ],
    "answerIndex": 3,
    "explanation": "設總組數為 x，最後一組只有 5 人，所以完整的 8 人組有 x-1 組。列 8(x-1)+5=53，化簡得 8x=56，x=7。回代前 6 組共 48 人，加末組 5 人恰為 53 人。 最後的不完整組也必須計入總組數。",
    "steps": [
      "設共 x 組，判斷完整組數是 x-1。",
      "依人數建立 8(x-1)+5=53。",
      "解得 x=7，再檢查 8×6+5=53。"
    ],
    "optionAnalysis": [
      {
        "choice": "6",
        "truth": false,
        "reason": "只算53÷8向下取整。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "把最後5人也當完整一組。"
      },
      {
        "choice": "9",
        "truth": false,
        "reason": "把x-1寫成x+1。"
      },
      {
        "choice": "7",
        "truth": true,
        "reason": "設共有x組，前x-1組共8(x-1)人，加最後5人：8(x-1)+5=53，解8x-3=53，x=7。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "直接用五十三除以八，把只有五人的末組也當成完整八人組。",
    "concept": "完整組數是總組數減1。",
    "tags": [
      "代數",
      "分配問題",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-rate-problem"
    ],
    "authoringIntent": "處理一個不完整末組的分配問題。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3312cff8255ce22b1d8eaf31545559f9ff6ff1c63ca1bc2524895d471e7041f8",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s011-v005",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-distribution-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "5 個箱子每箱有 x 件，再另有 3 件散裝，共 48 件。每箱多少件？",
    "choices": [
      "5",
      "9",
      "10",
      "45"
    ],
    "answerIndex": 1,
    "explanation": "五個箱子內的件數是 5x，散裝 3 件只在箱外加一次，因此 5x+3=48。先扣除散裝得 5x=45，再除以 5 得 x=9。驗算 5×9+3=48，箱內與散裝合計無誤。 箱外散裝的三件在總量中只計算一次。",
    "steps": [
      "以 x 表示每箱件數，箱內總數為 5x。",
      "把散裝 3 件只加一次，列 5x+3=48。",
      "解得 x=9，再用 45+3=48 驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": false,
        "reason": "48÷9。"
      },
      {
        "choice": "9",
        "truth": true,
        "reason": "5x+3=48，5x=45，所以x=9。 因此此選項符合題目。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "忽略散裝件。"
      },
      {
        "choice": "45",
        "truth": false,
        "reason": "45是箱內總數。"
      }
    ],
    "commonMistake": "沒有先扣除箱外散裝的三件，就把全部四十八件平均分入五箱。",
    "concept": "先扣不在箱內的物品。",
    "tags": [
      "代數",
      "分配問題",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-rate-problem"
    ],
    "authoringIntent": "固定份數加散裝量。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "da5b04a62584e7c87306a6f2598b58cb719c8adacef73fac009f5f033f4a4c38",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s011-v006",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-distribution-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一條 120 公尺繩子切成 7 段等長繩，另剩 1 公尺不能使用。每段多長？",
    "choices": [
      "16",
      "119",
      "17",
      "18"
    ],
    "answerIndex": 2,
    "explanation": "不可使用的 1 公尺必須先從總長 120 公尺扣除，可平均分配的長度是 119 公尺。以 x 表示每段長，7x+1=120，得 x=17。七段合計 119 公尺，加剩餘 1 公尺正好還原總長。",
    "steps": [
      "先扣除不可用的 1 公尺，得可分長度 119 公尺。",
      "設每段長 x 公尺，列 7x=119。",
      "解得 x=17，以 7×17+1=120 驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "16",
        "truth": false,
        "reason": "誤把 120÷7 的整數部分算成 16；實際整數部分為 17，且還要精確處理剩餘。"
      },
      {
        "choice": "119",
        "truth": false,
        "reason": "119 公尺是扣除不可用部分後的可分繩長總量，不是每段長度。"
      },
      {
        "choice": "17",
        "truth": true,
        "reason": "7x+1=120，所以 7x=119、x=17；七段共 119 公尺，再加剩餘 1 公尺恰為 120 公尺。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "若每段 18 公尺，七段已需 126 公尺，超過原繩長度。"
      }
    ],
    "commonMistake": "直接將總長除段數忽略餘量。",
    "concept": "可用總長=段數×段長+餘量。",
    "tags": [
      "代數",
      "分配問題",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-rate-problem"
    ],
    "authoringIntent": "有剩餘量的等長分割。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f3b2ae2aaeddda3b27c8312849c0f40eb1ea0605fac3aeaabe9f933bfa303fe4",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s011-v007",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-distribution-problem",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "四個班原本各有 x 人，今天共 6 人請假，實到 130 人。每班原有多少人？",
    "choices": [
      "31",
      "32",
      "136",
      "34"
    ],
    "answerIndex": 3,
    "explanation": "四個班原有人數合計 4x，今天全體共 6 人請假，所以實到人數是 4x-6。列 4x-6=130，加回 6 得 4x=136，再除以 4 得 x=34。四班原共 136 人，扣六人正好實到 130 人。",
    "steps": [
      "以 x 表示每班原有人數，四班合計 4x。",
      "全體只扣一次 6 名請假者，列 4x-6=130。",
      "解得 x=34，以 4×34-6=130 驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "31",
        "truth": false,
        "reason": "把130÷4後取整。"
      },
      {
        "choice": "32",
        "truth": false,
        "reason": "把請假6人平均後錯算。"
      },
      {
        "choice": "136",
        "truth": false,
        "reason": "136是四班總數。"
      },
      {
        "choice": "34",
        "truth": true,
        "reason": "4x-6=130，4x=136，所以x=34。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "把全體共六人請假誤看成每班都有六人請假，寫成四倍的扣除量。",
    "concept": "請假量作用於總人數。",
    "tags": [
      "代數",
      "分配問題",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-rate-problem"
    ],
    "authoringIntent": "由實到人數回推各班原人數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "959cd32ae78ef5cb76bd44a7796e47549d660532bc9302763d9660a3ca5441fe",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s011-v008",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-distribution-problem",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "2400 元平均分給 x 人，每人 300 元。x 為多少？",
    "choices": [
      "8",
      "6",
      "10",
      "720000"
    ],
    "answerIndex": 0,
    "explanation": "設分到錢的人數為 x，每人 300 元，所以分出的總金額為 300x，列 300x=2400。兩邊同除以 300 得 x=8。回代八人每人三百元，8×300=2400，金額完全分完。 所得八人為符合情境的非負整數。",
    "steps": [
      "以 x 表示人數，每人固定分得 300 元。",
      "建立總金額關係 300x=2400。",
      "解得 x=8，並以 300×8=2400 驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "8",
        "truth": true,
        "reason": "300x=2400，所以x=8。 因此此選項符合題目。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "2400÷400。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "把2400÷240。"
      },
      {
        "choice": "720000",
        "truth": false,
        "reason": "把金額相乘。"
      }
    ],
    "commonMistake": "把金額單位與人數相乘方向弄錯。",
    "concept": "每份金額×人數=總額。",
    "tags": [
      "代數",
      "分配問題",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-rate-problem"
    ],
    "authoringIntent": "金額平均分配中的份數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a4f2f14d5c8d36d279f16cec6da7859c20df225106883041761766f18996080d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s011-v009",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-distribution-problem",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "有 156 個飯糰，每包 6 個，先保留 12 個不包裝。可裝成幾包？",
    "choices": [
      "22",
      "26",
      "24",
      "28"
    ],
    "answerIndex": 2,
    "explanation": "十二個飯糰是事先保留，不能納入包裝，因此可包裝數量為 156-12=144 個。每包 6 個，可裝包數 144÷6=24。回代 24×6+12=156，包裝數與保留數合計正確。",
    "steps": [
      "先從 156 個扣除保留的 12 個。",
      "得到可包裝 144 個，再以每包 6 個分組。",
      "算得 24 包，並驗算 24×6+12=156。"
    ],
    "optionAnalysis": [
      {
        "choice": "22",
        "truth": false,
        "reason": "把156÷7。"
      },
      {
        "choice": "26",
        "truth": false,
        "reason": "未扣保留量。"
      },
      {
        "choice": "24",
        "truth": true,
        "reason": "可包裝數156-12=144，144÷6=24包。 因此此選項符合題目。"
      },
      {
        "choice": "28",
        "truth": false,
        "reason": "把保留量當包數。"
      }
    ],
    "commonMistake": "把全部一百五十六個直接除以每包六個，完全忽略事先保留的數量。",
    "concept": "只有可用數量參與分包。",
    "tags": [
      "代數",
      "分配問題",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-rate-problem"
    ],
    "authoringIntent": "先排除保留量再平均包裝。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ea1b0ea1726207cf547f531d15d5b0561c438882fceffd24e225a2c26556fa64",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s011-v010",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-distribution-problem",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "禮堂有 9 排，每排原有 x 張座椅，其中 5 張損壞不能使用，可用座位共 148 張。每排原有幾張？",
    "choices": [
      "16",
      "18",
      "153",
      "17"
    ],
    "answerIndex": 3,
    "explanation": "九排原有座椅共 9x 張，損壞的 5 張是全場總數，只扣一次，因此 9x-5=148。加回 5 得 9x=153，再除以 9 得 x=17。驗算 9×17-5=148，每排原有 17 張。 153÷9=17 沒有餘數，每排座椅數也是整數。",
    "steps": [
      "以 x 表示每排原有座椅數，原總數為 9x。",
      "將全場損壞的 5 張只扣一次，列 9x-5=148。",
      "解得 x=17，用 153-5=148 回代。"
    ],
    "optionAnalysis": [
      {
        "choice": "16",
        "truth": false,
        "reason": "把 148÷9 的商向下取整為 16，而且沒有先加回全場損壞的 5 張座椅。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "把全場共 5 張損壞座椅錯當成每一排都損壞 5 張。"
      },
      {
        "choice": "153",
        "truth": false,
        "reason": "153 是加回損壞座椅後的原總座位數，不是每排座椅數。"
      },
      {
        "choice": "17",
        "truth": true,
        "reason": "9x-5=148，所以 9x=153、x=17；九排原共 153 張，扣 5 張後恰為 148 張。"
      }
    ],
    "commonMistake": "把5張損壞誤成每排都損壞5張。",
    "concept": "損壞數量從總量一次扣除。",
    "tags": [
      "代數",
      "分配問題",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-rate-problem"
    ],
    "authoringIntent": "處理總量中少數不可用物品。",
    "literacyContextNecessity": "排數與全場損壞座位數位於不同層級，情境決定9x-5而非9(x-5)。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0920572409d777c7f839a36f10bf61323e62f3853b95230fa3f944c0d314bfcc",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s011-v011",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-distribution-problem",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "印製 12 本小冊，每本正文 x 頁；封面與封底合計另印 24 頁。總印量 504 頁。每本正文幾頁？",
    "choices": [
      "40",
      "38",
      "42",
      "44"
    ],
    "answerIndex": 0,
    "explanation": "封面與封底合計 24 頁是整批額外印量，只扣一次。正文總印量為 504-24=480 頁，十二本平均分配，x=480÷12=40。回代 12×40+24=504，所以每本正文 40 頁。 所求是每本正文頁數，不包含整批額外頁數。",
    "steps": [
      "先從總印量 504 頁扣除整批封面與封底 24 頁。",
      "得正文總量 480 頁，再除以 12 本。",
      "每本正文 40 頁，並以 12×40+24=504 驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "40",
        "truth": true,
        "reason": "12x+24=504，12x=480，所以x=40。 因此此選項符合題目。"
      },
      {
        "choice": "38",
        "truth": false,
        "reason": "把24頁平均後直接扣2。"
      },
      {
        "choice": "42",
        "truth": false,
        "reason": "直接504÷12。"
      },
      {
        "choice": "44",
        "truth": false,
        "reason": "把480除錯。"
      }
    ],
    "commonMistake": "把整批合計二十四頁的封面與封底，誤看成每本都要另加二十四頁。",
    "concept": "封面封底總量只加一次。",
    "tags": [
      "代數",
      "分配問題",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-rate-problem"
    ],
    "authoringIntent": "分離逐本頁數與整批額外頁數。",
    "literacyContextNecessity": "正文逐本重複、封面封底則是整批另印24頁，情境層級決定12x+24的式子。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b90d305b9b49f7193246348e1e1f636e3e3356a6446be8be8c619b104619ddec",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s011-v012",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-distribution-problem",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "每箱有 24 瓶水，運來 x 箱；分發 500 瓶後剩 4 瓶。共運來幾箱？",
    "choices": [
      "20",
      "21",
      "22",
      "24"
    ],
    "answerIndex": 1,
    "explanation": "分發 500 瓶後還剩 4 瓶，所以原本運來的總數是 500+4=504 瓶。每箱 24 瓶，以 x 表示箱數，列 24x=504，解得 x=21。二十一箱共 24×21=504 瓶，分發後正好剩 4 瓶。 二十一箱是符合實際包裝的正整數。",
    "steps": [
      "將已分發的 500 瓶與剩下 4 瓶相加，得原總數 504 瓶。",
      "設運來 x 箱，依每箱 24 瓶列 24x=504。",
      "解得 x=21，並驗算 24×21-500=4。"
    ],
    "optionAnalysis": [
      {
        "choice": "20",
        "truth": false,
        "reason": "只用500÷25。"
      },
      {
        "choice": "21",
        "truth": true,
        "reason": "總瓶數500+4=504，24x=504，所以x=21。 因此此選項符合題目。"
      },
      {
        "choice": "22",
        "truth": false,
        "reason": "把剩4瓶扣除。"
      },
      {
        "choice": "24",
        "truth": false,
        "reason": "把24當箱數。"
      }
    ],
    "commonMistake": "把分發後剩下的四瓶從五百瓶扣除，而非加回以還原原始總數。",
    "concept": "原總量=已用+剩餘。",
    "tags": [
      "代數",
      "分配問題",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-rate-problem"
    ],
    "authoringIntent": "由分發與剩餘回推箱數。",
    "literacyContextNecessity": "分發數與剩餘數共同決定原總量504，箱裝規格再決定24x=504。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b83369ae01bff9e391d21a26fa75b0a8e702bce7d3acc27b4df85804a84831ba",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u03-s011-cr001",
    "unitId": "u03",
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-distribution-problem",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "有 173 顆球，每袋裝 8 顆，裝滿若干袋後剩 5 顆。可裝滿幾袋？請列方程式並驗算。",
    "requiredWork": [
      "使用總量=每袋量×袋數+剩餘。",
      "求袋數並檢查餘數小於8。"
    ],
    "fullCreditSolution": [
      "設可裝滿 x 袋。每袋 8 顆，裝滿後剩 5 顆，因此依「總量＝已裝量＋剩餘量」列 8x+5=173。",
      "兩邊同減 5，得 8x=168；再同除以 8，得 x=21，所以可裝滿 21 袋。",
      "以 8×21+5=168+5=173 驗算，並檢查剩餘 5 顆小於每袋 8 顆，所以不能再裝滿一袋。"
    ],
    "alternativeSolutions": [
      "可先算173-5=168，再除8。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "列式、解21袋並完成餘數檢查。"
      },
      {
        "score": 2,
        "criteria": "答案正確但未驗算或未說明餘數。"
      },
      {
        "score": 1,
        "criteria": "能算出168或列8x+5=173。"
      },
      {
        "score": 0,
        "criteria": "總量與剩餘方向錯誤。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "把剩下的 5 顆當成要再加到 173 顆上，將方程式誤列為 8x=178。",
      "直接計算 173÷8 後只寫小數或商，沒有說明 21 個完整袋與剩餘 5 顆。"
    ],
    "independentReview": {
      "derivedResult": "21袋",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "e731a277fc706838f3a1d14bc40ef82d3d98afd5ced32c9b0f72dd7c4f55eea3",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s011-cr002",
    "unitId": "u03",
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-distribution-problem",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某班分成若干組，除最後一組有 4 人外，其餘每組 7 人，全班共 53 人。共有幾組？",
    "requiredWork": [
      "以x表示總組數。",
      "完整組數寫成x-1。",
      "求解並以組別人數驗算。"
    ],
    "fullCreditSolution": [
      "設總組數為 x。最後一組只有 4 人，所以前面的完整 7 人組數是 x-1，依總人數列 7(x-1)+4=53。",
      "展開得 7x-7+4=53，化簡為 7x-3=53。兩邊加 3 得 7x=56，再除以 7 得 x=8 組。",
      "當總組數為 8 時，前 7 組共有 7×7=49 人，加上末組 4 人正好是 53 人，組數也是正整數。"
    ],
    "alternativeSolutions": [
      "可先扣最後4人，49人分成7個完整組，再加末組1組。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確使用x-1、解8組並驗算。"
      },
      {
        "score": 2,
        "criteria": "方法正確但展開或計算一處錯。"
      },
      {
        "score": 1,
        "criteria": "能判斷完整組有x-1組。"
      },
      {
        "score": 0,
        "criteria": "未區分最後不完整組。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "把全部 x 組都當成 7 人組，列成 7x+4=53，重複計入最後一組。",
      "先算出 49÷7=7 個完整組後，忘記最後 4 人也要另算一組，誤答 7 組。"
    ],
    "independentReview": {
      "derivedResult": "8組",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "0053b2d7874da4d27a8c123b214a4bf9f7f209a546612f7e5636da6d1f32a2a3",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const DRAWING_SPECS = [];
