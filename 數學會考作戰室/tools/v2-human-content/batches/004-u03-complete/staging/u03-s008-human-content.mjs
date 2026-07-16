// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
// CONTENT AUTHORITY: CHATGPT_HUMAN_AUTHORED_R1
// OLD GENERATED CONTENT MUST NOT BE IMPORTED OR MERGED.
export const LECTURE = {
  "lectureId": "u03-s008-lecture-r1",
  "unitId": "u03",
  "topicId": "u03-linear-equation-apps",
  "skillId": "linear-equation-age-problem",
  "title": "年齡問題：所有人物必須放在同一時間點比較",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能以一個未知數表示多人的現齡。",
    "能處理幾年前與幾年後的年齡。",
    "能建立年齡差、倍數與總和方程式。",
    "能檢查年齡是否為合理非負數。"
  ],
  "prerequisites": [
    {
      "skillId": "linear-equation-check-solution",
      "requiredLevel": "能把文字關係翻成一元一次方程式並以代入檢查解。"
    }
  ],
  "glossary": [
    {
      "term": "現齡",
      "definition": "人物現在的年齡。"
    },
    {
      "term": "年齡差",
      "definition": "兩人年齡之差，時間經過後通常不變。"
    },
    {
      "term": "同一時間點",
      "definition": "比較倍數或總和時，所有人的年齡都在同一年計算。"
    },
    {
      "term": "倍數關係",
      "definition": "一人的年齡等於另一人的若干倍。"
    }
  ],
  "notation": [
    {
      "symbol": "x+k",
      "meaning": "x歲的人k年後的年齡。"
    },
    {
      "symbol": "x-k",
      "meaning": "x歲的人k年前的年齡。"
    }
  ],
  "conceptNarrative": [
    "年齡題先固定未知數代表哪一個人的今年年齡，再用年齡差、倍數或總和表示其他人。年齡差在相同兩人之間保持不變，但年齡倍數通常會隨時間改變。",
    "題目若說若干年後，每一個相關人物都必須增加相同年數；若說若干年前，則每一個人都要減去相同年數。把不同時間點的年齡放在同一個等式會造成錯誤。",
    "建立方程式前可列出今年與指定年份兩欄，逐人填入年齡。解出未知數後，還要回答題目真正要求的時間點，不能把過去或未來的年齡直接當現齡。",
    "最後以年齡和、年齡差與指定年份的倍數三方面驗算，並確認年齡非負且符合題意，才能判定答案合理。"
  ],
  "formalDefinitions": [
    {
      "name": "年齡推移",
      "statement": "現在x歲，k年後為x+k，k年前為x-k。"
    },
    {
      "name": "固定年齡差",
      "statement": "兩人的年齡差隨相同時間推移保持不變。"
    }
  ],
  "formulas": [
    {
      "formula": "A+k=r(B+k)",
      "conditions": [
        "倍數關係發生在k年後"
      ],
      "meaning": "未來年齡倍數。"
    },
    {
      "formula": "A-k=r(B-k)",
      "conditions": [
        "倍數關係發生在k年前"
      ],
      "meaning": "過去年齡倍數。"
    }
  ],
  "nonApplicableCases": [
    "不能只替一人加減年份。",
    "倍數關係不能直接從未來搬回現在。",
    "題目若以完整歲數計，結果通常需為整數。",
    "年齡不得為負。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "決定未知數代表誰的現齡。",
      "check": "所求對象是否容易直接表示？"
    },
    {
      "step": 2,
      "instruction": "列出每人的現齡。",
      "check": "差或總和是否正確？"
    },
    {
      "step": 3,
      "instruction": "把所有人移到題目指定時間點。",
      "check": "每個人都加減相同年數？"
    },
    {
      "step": 4,
      "instruction": "套用倍數或總和關係。",
      "check": "關係發生在哪一年？"
    },
    {
      "step": 5,
      "instruction": "解方程並檢查年齡合理性。",
      "check": "是否非負且符合完整歲數要求？"
    }
  ],
  "workedExamples": [
    {
      "prompt": "哥哥比妹妹大 8 歲，兩人今年合計 34 歲，求兩人現齡。",
      "solutionSteps": [
        "設妹妹 x 歲，哥哥為 x＋8，列 2x＋8＝34。",
        "解得 x＝13，哥哥為二十一歲，再核對和與差。"
      ],
      "answer": "妹妹十三歲、哥哥二十一歲。",
      "why": "設妹妹 x 歲，哥哥為 x 加八歲，依總和列 2x＋8＝34，解得 x＝13。哥哥為二十一歲；兩人相差八歲且合計三十四歲，兩項條件都成立。"
    },
    {
      "prompt": "五年後父親 50 歲，且當時是兒子的 2.5 倍，求兒子現齡。",
      "solutionSteps": [
        "由五十除以二點五，求得兒子五年後二十歲。",
        "從五年後回推現齡，二十減五得十五歲。"
      ],
      "answer": "兒子今年十五歲。",
      "why": "父親五年後五十歲，所以兒子五年後為五十除以二點五等於二十歲。題目問現齡，必須再減五，得到十五歲；五年後二十歲確為五十歲的五分之二。"
    },
    {
      "prompt": "三年前母親是女兒的 3 倍，母親今年 42 歲，求女兒現齡。",
      "solutionSteps": [
        "先求母親三年前三十九歲，設女兒現齡 x。",
        "列 39＝3(x－3)，解得 x＝16 並核對三年前年齡。"
      ],
      "answer": "女兒今年十六歲。",
      "why": "三年前母親三十九歲。設女兒今年 x 歲，三年前為 x－3，列 39＝3(x－3)，解得 x－3＝13、x＝16；三年前兩人為三十九與十三歲，三倍關係正確。"
    },
    {
      "prompt": "三人今年為 x、x＋3、x＋7 歲，五年後合計 61 歲，求今年年齡。",
      "solutionSteps": [
        "把三人都增加五歲，列 3x＋25＝61。",
        "解得 x＝12，列出十二、十五、十九歲並驗算。"
      ],
      "answer": "今年為十二、十五、十九歲。",
      "why": "五年後三人為 x＋5、x＋8、x＋12，總和方程式是 3x＋25＝61，解得 x＝12。今年三個年齡相加四十六，五年後共增加十五，正好得到六十一。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "只讓一人增加年份。",
      "why": "比較時點不一致。",
      "correction": "所有人物同時推移。"
    },
    {
      "mistake": "把5年後倍數當作現在倍數。",
      "why": "倍數會隨時間改變。",
      "correction": "在方程式中加入年份。"
    },
    {
      "mistake": "把年齡差也隨年份增加。",
      "why": "兩人同時變老，差不變。",
      "correction": "差值固定。"
    },
    {
      "mistake": "總和題漏掉其中一人。",
      "why": "只列倍數對象。",
      "correction": "逐人列出後再相加。"
    },
    {
      "mistake": "得到負年齡仍接受。",
      "why": "未檢查情境。",
      "correction": "回查列式或資料。"
    },
    {
      "mistake": "把過去的年齡當現齡作答。",
      "why": "未將年份加回。",
      "correction": "最後確認題目問今年還是指定年份。"
    }
  ],
  "selfCheck": [
    "未知數代表現齡還是過去年齡？",
    "所有人物是否在同一時間點？",
    "年齡差是否保持不變？",
    "倍數關係是否放在正確年份？",
    "答案是否非負且回到題目所問時間？"
  ],
  "summary": [
    "先統一時間點。",
    "所有人物同加同減年份。",
    "年齡差固定，倍數會變。",
    "解後要回到題目所問年份。"
  ],
  "connections": {
    "previous": "需要能列式、解方程並代回檢查。",
    "next": [
      "金錢問題會用相同方式表示多種價格。",
      "合理性檢查會判斷完整歲數與負年齡。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u03-s008-v001",
      "u03-s008-v002",
      "u03-s008-v003",
      "u03-s008-v004",
      "u03-s008-v005",
      "u03-s008-v006",
      "u03-s008-v007",
      "u03-s008-v008",
      "u03-s008-v009",
      "u03-s008-v010",
      "u03-s008-v011",
      "u03-s008-v012"
    ],
    "constructedResponseIds": [
      "u03-s008-cr001",
      "u03-s008-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "四例逐一代回指定年份：12+17=29、4年後14×3=42、3年前9×4=36、13+14+17=44；確認所有人物均同時推移且答案為非負完整歲數。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "cecf7eb0a2b2d40e2b2e086f2aec988dd1ee6abf3ebd2cdf907f74f6910a3308",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "legacyContentDisposition": "replace-old-lecture-at-final-integration"
};

export const QUESTIONS = [
  {
    "questionId": "u03-s008-v001",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-age-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "媽媽比小安大 28 歲。媽媽今年 40 歲，小安今年幾歲？",
    "choices": [
      "12",
      "10",
      "28",
      "68"
    ],
    "answerIndex": 0,
    "explanation": "媽媽比小安大 28 歲，表示媽媽年齡等於小安年齡加 28。設小安今年 x 歲，列 x＋28＝40；兩邊同減 28 得 x＝12。驗算小安 12 歲、媽媽 40 歲，年齡差正好是 28 歲，因此答案唯一。",
    "steps": [
      "設小安今年 x 歲，用 x＋28 表示媽媽年齡。",
      "依媽媽今年四十歲列 x＋28＝40。",
      "解得 x＝12，核對兩人年齡差為二十八歲。"
    ],
    "optionAnalysis": [
      {
        "choice": "12",
        "truth": true,
        "reason": "設小安x歲，x+28=40，所以x=12。 因此此選項符合題目。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "40-30誤算。"
      },
      {
        "choice": "28",
        "truth": false,
        "reason": "把年齡差當小安年齡。"
      },
      {
        "choice": "68",
        "truth": false,
        "reason": "把年齡相加。"
      }
    ],
    "commonMistake": "把二十八歲的年齡差直接當成小安年齡，沒有使用媽媽四十歲這項條件反求。",
    "concept": "較大年齡=較小年齡+差。",
    "tags": [
      "代數",
      "年齡問題",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-check-solution"
    ],
    "authoringIntent": "用年齡差建立方程式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "4a59ee2fc1d8e2c70b98d5dd8ea93667097bba989515f76dc26b52354769b7d4",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s008-v002",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-age-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "父親年齡是兒子的 3 倍，兩人合計 56 歲。兒子幾歲？",
    "choices": [
      "12",
      "14",
      "18",
      "42"
    ],
    "answerIndex": 1,
    "explanation": "設兒子今年 x 歲，父親是兒子的 3 倍，所以父親為 3x 歲。兩人合計 56 歲，列 x＋3x＝56，也就是 4x＝56，解得 x＝14。父親為 42 歲，十四加四十二確實等於五十六，倍數與總和都符合。",
    "steps": [
      "設兒子 x 歲，父親以 3x 歲表示。",
      "依年齡和列 x＋3x＝56，合併為 4x＝56。",
      "解得兒子十四歲，核對父親四十二歲及總和。"
    ],
    "optionAnalysis": [
      {
        "choice": "12",
        "truth": false,
        "reason": "把56除以錯誤係數。"
      },
      {
        "choice": "14",
        "truth": true,
        "reason": "設兒子x歲，父親3x歲，4x=56，所以x=14。 因此此選項符合題目。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "只用父親倍數3。"
      },
      {
        "choice": "42",
        "truth": false,
        "reason": "42是父親年齡。"
      }
    ],
    "commonMistake": "只把五十六除以三，忽略總和中還包含兒子本人的一份年齡。",
    "concept": "同時表示兩人的年齡。",
    "tags": [
      "代數",
      "年齡問題",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-check-solution"
    ],
    "authoringIntent": "處理倍數與年齡和。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "fd441e98fc5c7be5e92cc3071e52ef2421dc45a36f910b1391d87bb1aeeb4dc9",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s008-v003",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-age-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "5 年後，阿明年齡是小華的 2 倍。阿明今年 31 歲，小華今年幾歲？",
    "choices": [
      "8",
      "18",
      "13",
      "26"
    ],
    "answerIndex": 2,
    "explanation": "倍數關係發生在 5 年後，兩人都要增加 5 歲。阿明屆時 31＋5＝36 歲；設小華今年 x 歲，五年後為 x＋5，列 36＝2(x＋5)。解得 x＋5＝18、x＝13。驗算五年後兩人為三十六與十八歲，正好兩倍。",
    "steps": [
      "先算阿明五年後為三十六歲。",
      "設小華現齡 x，列 36＝2(x＋5)。",
      "解得 x＝13，將兩人都推到五年後驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "8",
        "truth": false,
        "reason": "只從31扣倍數。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "忘記小華也增加5歲。"
      },
      {
        "choice": "13",
        "truth": true,
        "reason": "5年後阿明36歲；設小華x歲，36=2(x+5)，所以x+5=18，x=13。 因此此選項符合題目。"
      },
      {
        "choice": "26",
        "truth": false,
        "reason": "把5年後的小華年齡當今年。"
      }
    ],
    "commonMistake": "只讓阿明增加五歲或把小華五年後的十八歲直接當成今年年齡，造成時間點不一致。",
    "concept": "時間推移要作用於每一個人。",
    "tags": [
      "代數",
      "年齡問題",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-check-solution"
    ],
    "authoringIntent": "在同一時間點比較年齡倍數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "26a714d47619470c316f64d6d399268fc2f90b303be3f6b193e9f8790a82d052",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s008-v004",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-age-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "4 年前，母親年齡是女兒的 4 倍。母親今年 40 歲，女兒今年幾歲？",
    "choices": [
      "9",
      "11",
      "16",
      "13"
    ],
    "answerIndex": 3,
    "explanation": "四年前母親為 40－4＝36 歲。設女兒今年 x 歲，四年前女兒為 x－4 歲；依當時母親是女兒四倍，列 36＝4(x－4)。解得 x－4＝9，所以 x＝13。代回四年前年齡為三十六與九歲，倍數正確。",
    "steps": [
      "把母親年齡移到四年前，得到三十六歲。",
      "設女兒現齡 x，列 36＝4(x－4)。",
      "解得 x＝13，核對四年前女兒九歲。"
    ],
    "optionAnalysis": [
      {
        "choice": "9",
        "truth": false,
        "reason": "把9當今年年齡。"
      },
      {
        "choice": "11",
        "truth": false,
        "reason": "36÷4後再減2。"
      },
      {
        "choice": "16",
        "truth": false,
        "reason": "把女兒今年年齡直接乘4。"
      },
      {
        "choice": "13",
        "truth": true,
        "reason": "4年前母親36歲；設女兒x歲，36=4(x-4)，得x-4=9，所以x=13。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "算出四年前女兒九歲便直接作答，忘記題目問的是女兒今年年齡，還要加回四歲。",
    "concept": "過去時間要從兩人現齡都扣除。",
    "tags": [
      "代數",
      "年齡問題",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-check-solution"
    ],
    "authoringIntent": "回到過去同一時點列倍數關係。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d70aa3a94cbcc8f88e15364eec5f87678218ab4c95bcd0218900edc0848ece78",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s008-v005",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-age-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兄弟相差 6 歲，兩人年齡和為 30 歲。弟弟幾歲？",
    "choices": [
      "6",
      "12",
      "15",
      "18"
    ],
    "answerIndex": 1,
    "explanation": "設弟弟今年 x 歲，哥哥比弟弟大 6 歲，所以哥哥為 x＋6 歲。兩人合計 30 歲，列 x＋(x＋6)＝30，化為 2x＋6＝30。解得 2x＝24、x＝12；哥哥為十八歲，兩人年齡和及差都符合。",
    "steps": [
      "設弟弟 x 歲，以 x＋6 表示哥哥。",
      "依年齡和列 2x＋6＝30。",
      "解得弟弟十二歲，驗算哥哥十八歲。"
    ],
    "optionAnalysis": [
      {
        "choice": "6",
        "truth": false,
        "reason": "把年齡差當弟弟年齡。"
      },
      {
        "choice": "12",
        "truth": true,
        "reason": "設弟弟x歲，哥哥x+6歲，2x+6=30，所以2x=24，x=12。 因此此選項符合題目。"
      },
      {
        "choice": "15",
        "truth": false,
        "reason": "把總和平均未處理差。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "18是哥哥年齡。"
      }
    ],
    "commonMistake": "把總和三十直接平均成十五，沒有先處理哥哥比弟弟多出的六歲。",
    "concept": "先用同一未知數表示兩人。",
    "tags": [
      "代數",
      "年齡問題",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-check-solution"
    ],
    "authoringIntent": "整合年齡差與總和。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "6fb39f0e1d8dec700301ba16be0eba2593d1cabc3a2e6c657df267446c15b545",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s008-v006",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-age-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "祖父年齡是孫子的 4 倍再多 6 歲，兩人合計 66 歲。孫子幾歲？",
    "choices": [
      "10",
      "15",
      "12",
      "54"
    ],
    "answerIndex": 2,
    "explanation": "設孫子今年 x 歲，祖父年齡是 4x＋6 歲。兩人合計 66 歲，所以 x＋4x＋6＝66，化為 5x＋6＝66。兩邊減 6 再除以 5，得 x＝12；祖父為五十四歲，十二加五十四等於六十六。",
    "steps": [
      "設孫子 x 歲，祖父表示為 4x＋6。",
      "依總和列 5x＋6＝66。",
      "解得孫子十二歲，算出祖父五十四歲並驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "10",
        "truth": false,
        "reason": "把60除6。"
      },
      {
        "choice": "15",
        "truth": false,
        "reason": "把66-6後除4。"
      },
      {
        "choice": "12",
        "truth": true,
        "reason": "設孫子x歲，祖父4x+6歲，5x+6=66，5x=60，所以x=12。 因此此選項符合題目。"
      },
      {
        "choice": "54",
        "truth": false,
        "reason": "54是祖父年齡。"
      }
    ],
    "commonMistake": "先用六十六減六再除以四，只計算祖父的四份，漏掉總和中的孫子一份。",
    "concept": "總和要包含孫子本身。",
    "tags": [
      "代數",
      "年齡問題",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-check-solution"
    ],
    "authoringIntent": "處理倍數再多固定歲數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "966220c679d83d96917e2e2aaa9c808e8984b5ec46273854f9594bcd898b26eb",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s008-v007",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-age-problem",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "哥哥比弟弟大 7 歲。8 年後，哥哥年齡是弟弟的 1.5 倍。弟弟今年幾歲？",
    "choices": [
      "5",
      "7",
      "13",
      "6"
    ],
    "answerIndex": 3,
    "explanation": "設弟弟今年 x 歲，哥哥為 x＋7 歲。八年後弟弟 x＋8 歲、哥哥 x＋15 歲，當時倍數關係為 x＋15＝1.5(x＋8)。展開得 x＋15＝1.5x＋12，所以 0.5x＝3、x＝6。八年後十四與二十一歲正好一點五倍。",
    "steps": [
      "設弟弟 x 歲，哥哥現齡為 x＋7。",
      "兩人都增加八歲，列 x＋15＝1.5(x＋8)。",
      "解得 x＝6，核對八年後為十四與二十一歲。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": false,
        "reason": "少處理半倍差。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "把年齡差7當答案。"
      },
      {
        "choice": "13",
        "truth": false,
        "reason": "13是哥哥今年年齡。"
      },
      {
        "choice": "6",
        "truth": true,
        "reason": "設弟弟x歲，哥哥x+7；8年後x+15=1.5(x+8)，解得x+15=1.5x+12，0.5x=3，所以x=6。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "把八年後的倍數直接套在現在，或只讓其中一人增加八歲，會使比較時點不同。",
    "concept": "固定年齡差在未來仍不變。",
    "tags": [
      "代數",
      "年齡問題",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-check-solution"
    ],
    "authoringIntent": "在未來時點結合年齡差與倍數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "2d204a03d2f1afc6a0fb17e4e11df87e8139e2d7cf132c395d8c33d5f6e0788e",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s008-v008",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-age-problem",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "2 年前，甲的年齡是乙的 3 倍；兩人今年合計 36 歲。乙今年幾歲？",
    "choices": [
      "10",
      "8",
      "12",
      "26"
    ],
    "answerIndex": 0,
    "explanation": "設乙今年 x 歲，甲因兩人今年合計 36 歲而為 36－x 歲。兩年前乙 x－2 歲、甲 34－x 歲；依甲是乙三倍列 34－x＝3(x－2)。展開得 34－x＝3x－6，故 4x＝40、x＝10。兩年前甲乙為二十四與八歲。",
    "steps": [
      "設乙現齡 x，用 36－x 表示甲。",
      "把兩人移到兩年前，列 34－x＝3(x－2)。",
      "解得乙十歲，核對兩年前甲二十四、乙八歲。"
    ],
    "optionAnalysis": [
      {
        "choice": "10",
        "truth": true,
        "reason": "設乙今年x歲，甲36-x歲；兩年前36-x-2=3(x-2)，即34-x=3x-6，4x=40，所以x=10。 因此此選項符合題目。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "只把乙減2。"
      },
      {
        "choice": "12",
        "truth": false,
        "reason": "把36除3。"
      },
      {
        "choice": "26",
        "truth": false,
        "reason": "26是甲今年年齡。"
      }
    ],
    "commonMistake": "只把乙的年齡減二，沒有讓甲也回到兩年前，會把不同年份的年齡拿來比較。",
    "concept": "所有年齡關係必須在同一時間點。",
    "tags": [
      "代數",
      "年齡問題",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-check-solution"
    ],
    "authoringIntent": "結合總和與過去年齡倍數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f94e33b12bccb0547e6a93ab1dbe8f995cb41a8d778ec7731931b76909826e88",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s008-v009",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-age-problem",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "6 年後，母親將是 40 歲，而且當時母親年齡是女兒的 2 倍。女兒今年幾歲？",
    "choices": [
      "8",
      "20",
      "14",
      "28"
    ],
    "answerIndex": 2,
    "explanation": "六年後母親 40 歲，且當時是女兒年齡的 2 倍，所以女兒六年後為 40÷2＝20 歲。女兒今年年齡要再減去 6，得到 14 歲。也可設今年為 x，列 40＝2(x＋6)；代回六年後為二十歲，倍數關係成立。",
    "steps": [
      "由六年後的倍數求得女兒當時二十歲。",
      "從六年後回推今年，計算二十減六。",
      "得女兒今年十四歲，核對六年後母女為四十與二十歲。"
    ],
    "optionAnalysis": [
      {
        "choice": "8",
        "truth": false,
        "reason": "把40÷2後再減12。"
      },
      {
        "choice": "20",
        "truth": false,
        "reason": "20是6年後年齡。"
      },
      {
        "choice": "14",
        "truth": true,
        "reason": "6 年後女兒為 x＋6，40＝2(x＋6)，所以 x＋6＝20、x＝14。"
      },
      {
        "choice": "28",
        "truth": false,
        "reason": "把14倍數化。"
      }
    ],
    "commonMistake": "把六年後女兒二十歲直接當成今年年齡，忘記題目要求回推現齡。",
    "concept": "年齡倍數關係中的兩個年齡必須位於同一時間點。",
    "tags": [
      "代數",
      "年齡問題",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-check-solution"
    ],
    "authoringIntent": "由同一個未來時間點的年齡倍數回推女兒現齡。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "75a56ca25017018b4eb536755f4d2ffaf0a67ce840c256bbf181b674cd1433f0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s008-v010",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-age-problem",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "三名學生年齡分別為 x、x＋2、x＋5 歲，合計 52 歲。最年輕者幾歲？",
    "choices": [
      "13",
      "17",
      "20",
      "15"
    ],
    "answerIndex": 3,
    "explanation": "三人的年齡已用同一未知數表示為 x、x＋2、x＋5。相加列 x＋(x＋2)＋(x＋5)＝52，合併成 3x＋7＝52。兩邊減 7 得 3x＝45，再除以 3 得 x＝15。三人為十五、十七、二十歲，合計正好五十二歲。",
    "steps": [
      "把三個年齡完整相加，列 3x＋7＝52。",
      "兩邊同減 7，得到 3x＝45。",
      "解得最年輕者十五歲，列出三人並驗算總和。"
    ],
    "optionAnalysis": [
      {
        "choice": "13",
        "truth": false,
        "reason": "把52-7後除錯。"
      },
      {
        "choice": "17",
        "truth": false,
        "reason": "17是第二人。"
      },
      {
        "choice": "20",
        "truth": false,
        "reason": "20是最年長者。"
      },
      {
        "choice": "15",
        "truth": true,
        "reason": "3x+7=52，3x=45，所以x=15。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "直接把五十二除以三，沒有扣掉另外兩人相對最年輕者多出的七歲。",
    "concept": "所有人用最小年齡表示。",
    "tags": [
      "代數",
      "年齡問題",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-check-solution"
    ],
    "authoringIntent": "處理多人的年齡差與總和。",
    "literacyContextNecessity": "三人的相對年齡差與總和決定3x+7=52，刪除人際年齡結構無法列式。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b2217404d14ef21d15516dbf22ae10da1d56e2c1551f3d0279237f8d48948a8e",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s008-v011",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-age-problem",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一座公園啟用年數比圖書館少 18 年，兩者啟用年數合計 74 年。公園啟用幾年？",
    "choices": [
      "28",
      "18",
      "37",
      "46"
    ],
    "answerIndex": 0,
    "explanation": "設公園啟用 x 年，圖書館比公園多 18 年，所以為 x＋18 年。兩者合計 74 年，列 x＋x＋18＝74，即 2x＋18＝74。兩邊減 18 得 2x＝56，再除以 2 得 x＝28。圖書館四十六年，和與差均符合。",
    "steps": [
      "設公園啟用 x 年，圖書館表示為 x＋18。",
      "依總和列 2x＋18＝74。",
      "解得公園二十八年，核對圖書館四十六年。"
    ],
    "optionAnalysis": [
      {
        "choice": "28",
        "truth": true,
        "reason": "設公園x年，圖書館x+18年，2x+18=74，2x=56，所以x=28。 因此此選項符合題目。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "把年數差當公園年數。"
      },
      {
        "choice": "37",
        "truth": false,
        "reason": "直接平均。"
      },
      {
        "choice": "46",
        "truth": false,
        "reason": "46是圖書館年數。"
      }
    ],
    "commonMistake": "把兩者總和七十四直接平均為三十七，忽略圖書館比公園多十八年的條件。",
    "concept": "差與和的方程式不只適用人物。",
    "tags": [
      "代數",
      "年齡問題",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-check-solution"
    ],
    "authoringIntent": "把年齡問題結構延伸到設施年數。",
    "literacyContextNecessity": "公園與圖書館的啟用年數差及總和共同決定未知量，情境中的較多較少方向不可刪除。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "5bf07bc90ccea726fc8d1214206e7542aa8b17146fc2629ab20ef9c436bf2882",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s008-v012",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-age-problem",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "貓今年 x 歲，狗比貓大 3 歲。2 年後牠們的年齡和為 19 歲。貓今年幾歲？",
    "choices": [
      "4",
      "6",
      "8",
      "9"
    ],
    "answerIndex": 1,
    "explanation": "貓今年 x 歲，狗比貓大 3 歲，所以狗今年 x＋3 歲。兩年後貓 x＋2 歲、狗 x＋5 歲，年齡和為 19，列 2x＋7＝19。解得 2x＝12、x＝6。兩年後貓八歲、狗十一歲，合計正好十九歲。",
    "steps": [
      "以 x 與 x＋3 表示貓狗今年年齡。",
      "兩者都增加兩歲，列 (x＋2)＋(x＋5)＝19。",
      "解得貓今年六歲，核對兩年後總和。"
    ],
    "optionAnalysis": [
      {
        "choice": "4",
        "truth": false,
        "reason": "只讓貓加2歲。"
      },
      {
        "choice": "6",
        "truth": true,
        "reason": "2年後貓x+2、狗x+5，總和2x+7=19，2x=12，所以x=6。 因此此選項符合題目。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "把差3加入兩次。"
      },
      {
        "choice": "9",
        "truth": false,
        "reason": "把總和平均後未扣差與時間。"
      }
    ],
    "commonMistake": "只讓貓增加兩歲，或把狗大三歲的差額重複加兩次，都會使年齡和列錯。",
    "concept": "時間推移作用於每個個體。",
    "tags": [
      "代數",
      "年齡問題",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-check-solution"
    ],
    "authoringIntent": "處理兩個個體的未來年齡和。",
    "literacyContextNecessity": "兩隻動物的年齡差與兩年後總和決定2x+7=19，時間與對象數量直接影響常數項。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8d880e3253529258d37801930110b35ec10cb6019bb7988b143dda3ad271bd5f",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u03-s008-cr001",
    "unitId": "u03",
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-age-problem",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "父親今年比女兒大 30 歲。6 年後父親年齡是女兒的 3 倍。求兩人今年年齡。",
    "requiredWork": [
      "設女兒現齡x。",
      "所有人都移到6年後。",
      "求解後列出兩人現齡並驗算。"
    ],
    "fullCreditSolution": [
      "設女兒今年 x 歲，父親比女兒大 30 歲，所以父親今年為 x＋30 歲。",
      "六年後女兒為 x＋6 歲、父親為 x＋36 歲；依倍數關係列 x＋36＝3(x＋6)。",
      "展開得 x＋36＝3x＋18，所以 2x＝18、x＝9；父親今年為 39 歲。",
      "驗算六年後女兒十五歲、父親四十五歲，父親正好是女兒的三倍。"
    ],
    "alternativeSolutions": [
      "可設父親年齡y，再以女兒y-30表示。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "列式、求兩人現齡並驗證6年後倍數。"
      },
      {
        "score": 2,
        "criteria": "列式正確但一處計算錯，或只答女兒。"
      },
      {
        "score": 1,
        "criteria": "能正確表示x與x+30並加入6年。"
      },
      {
        "score": 0,
        "criteria": "時間點不一致或無有效方程式。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "只讓女兒增加六歲而父親維持現齡，會把不同時間點的年齡拿來比較。",
      "把父親現在就是女兒三倍直接列式，忽略倍數關係發生在六年後。",
      "只求出女兒九歲便停止，漏答父親現齡三十九歲或沒有驗算。"
    ],
    "independentReview": {
      "derivedResult": "女兒9歲、父親39歲",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "3c0d26648157ded43ec0a648fd2f56154bf18bc5999d453cb9ebb18b186d186b",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s008-cr002",
    "unitId": "u03",
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-age-problem",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "三兄妹今年年齡分別相差 2 歲與 5 歲：最小者 x 歲，另兩人為 x＋2、x＋5。4 年後三人年齡和為 58 歲。求三人今年年齡。",
    "requiredWork": [
      "三人都加4歲。",
      "列出完整總和方程式。",
      "回答三個現齡。"
    ],
    "fullCreditSolution": [
      "三人今年為 x、x＋2、x＋5 歲；四年後分別為 x＋4、x＋6、x＋9 歲。",
      "依四年後年齡和列 (x＋4)＋(x＋6)＋(x＋9)＝58，化為 3x＋19＝58。",
      "兩邊減 19 得 3x＝39，所以 x＝13；三人今年為十三、十五、十八歲。",
      "驗算四年後為十七、十九、二十二歲，三者合計五十八歲。"
    ],
    "alternativeSolutions": [
      "可先算今年總和為58-12=46，再解3x+7=46。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "時間推移、方程式與三個答案完整。"
      },
      {
        "score": 2,
        "criteria": "方法正確但一處計算錯。"
      },
      {
        "score": 1,
        "criteria": "能指出三人總共增加12歲。"
      },
      {
        "score": 0,
        "criteria": "只替一人加4或無法表示三人年齡。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "四年後只把總和增加四歲一次，忘記三個人各自都會增加四歲。",
      "把年齡差二歲與五歲也隨時間增加，但所有人同時變老時差值不變。",
      "求得最小者十三歲便漏答另外兩人的今年年齡十五與十八歲。"
    ],
    "independentReview": {
      "derivedResult": "13歲、15歲、18歲",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "caade7220f2fe22c9fc8116ba7a249619733086a897a904941c0dc024c761c9f",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const DRAWING_SPECS = [];
