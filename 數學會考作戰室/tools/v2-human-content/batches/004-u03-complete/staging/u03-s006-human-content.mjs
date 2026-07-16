// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
// CONTENT AUTHORITY: CHATGPT_HUMAN_AUTHORED_R1
// OLD GENERATED CONTENT MUST NOT BE IMPORTED OR MERGED.
export const LECTURE = {
  "lectureId": "u03-s006-lecture-r1",
  "unitId": "u03",
  "topicId": "u03-linear-equation-solving",
  "skillId": "linear-equation-fractions",
  "title": "含分母的一元一次方程式：用最小公倍數一次消除分母",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能解單一分母與多分母的一元一次方程式。",
    "能選擇所有分母的最小公倍數。",
    "能在消分母時乘到等式中的每一項。",
    "能保留分數解並代回原式。"
  ],
  "prerequisites": [
    {
      "skillId": "linear-equation-parentheses",
      "requiredLevel": "能正確展開括號與合併同類項，熟悉分數通分和最小公倍數。"
    }
  ],
  "glossary": [
    {
      "term": "分母",
      "definition": "分數線下方的數，表示平均分成的份數。"
    },
    {
      "term": "最小公倍數",
      "definition": "可同時被所有分母整除的最小正整數。"
    },
    {
      "term": "消分母",
      "definition": "等式兩邊同乘分母的公倍數，使分數項化為整數係數。"
    },
    {
      "term": "精確解",
      "definition": "以整數或最簡分數表示，不任意取近似值。"
    }
  ],
  "notation": [
    {
      "symbol": "(ax+b)/m",
      "meaning": "整個分子ax+b都除以m。"
    },
    {
      "symbol": "LCM(m,n)",
      "meaning": "m與n的最小公倍數。"
    }
  ],
  "conceptNarrative": [
    "含分母方程式仍只使用等量公理。",
    "最穩定方法是找所有分母的最小公倍數，讓等式每一項都乘上它。",
    "若分子有括號，消分母後仍須完整保留分子結構。",
    "解是分數並不表示錯誤；只要代回原式左右相等即可。"
  ],
  "formalDefinitions": [
    {
      "name": "消分母原理",
      "statement": "若等式兩邊同乘非零數M，等式仍成立。"
    },
    {
      "name": "最小公倍數策略",
      "statement": "M取所有分母的最小公倍數，可避免多餘大係數。"
    }
  ],
  "formulas": [
    {
      "formula": "x/m=a ⇒ x=am",
      "conditions": [
        "m≠0"
      ],
      "meaning": "單一分母方程式。"
    },
    {
      "formula": "A/m+B/n=C",
      "conditions": [
        "m、n皆非0"
      ],
      "meaning": "可同乘LCM(m,n)。"
    }
  ],
  "nonApplicableCases": [
    "分母為0的式子沒有定義。",
    "不能只乘含未知數的分數項而漏乘常數或等式右邊。",
    "不能把分母直接搬到另一邊卻改成加減。",
    "若小數可化成分數或同乘10，也可精確消除。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "列出等式中所有分母。",
      "check": "括號整體是否位於分子？"
    },
    {
      "step": 2,
      "instruction": "求最小公倍數。",
      "check": "是否同時整除每個分母？"
    },
    {
      "step": 3,
      "instruction": "等式每一項都乘該公倍數。",
      "check": "右邊與常數項是否漏乘？"
    },
    {
      "step": 4,
      "instruction": "展開、合併並解基本方程式。",
      "check": "負號與括號是否正確？"
    },
    {
      "step": 5,
      "instruction": "代回原分數式。",
      "check": "左右是否精確相等？"
    }
  ],
  "workedExamples": [
    {
      "prompt": "解 x/7＝6，並代回原式驗算。",
      "solutionSteps": [
        "等式兩邊同乘 7，得到 x＝6×7＝42。",
        "把 42 代回原式，計算 42/7＝6。"
      ],
      "answer": "x＝42。",
      "why": "未知數被七除，逆運算是讓等式兩邊同乘七，所以 x＝六乘七等於四十二。代回原式，四十二除以七確實等於六；若再除七會把逆運算方向做反。"
    },
    {
      "prompt": "解 (x＋5)/4＝9，說明分數線的作用範圍。",
      "solutionSteps": [
        "兩邊同乘 4，完整保留分子，得到 x＋5＝36。",
        "兩邊同減 5 得 x＝31，再代回 36/4＝9。"
      ],
      "answer": "x＝31。",
      "why": "分數線作用在整個 x 加五，兩邊同乘四後得到 x＋5＝36，再同減五得 x＝31。代回時分子為三十六，除以四等於九，不能只讓 x 除以四。"
    },
    {
      "prompt": "解 x/8＋x/12＝5。",
      "solutionSteps": [
        "用最小公倍數 24 同乘每一項，得到 3x＋2x＝120。",
        "合併為 5x＝120，解得 x＝24 並代回驗算。"
      ],
      "answer": "x＝24。",
      "why": "八與十二的最小公倍數是二十四。等式每一項同乘二十四，得到 3x＋2x＝120，因此 5x＝120、x＝24；代回三加二正好等於五，左右精確相等。"
    },
    {
      "prompt": "解 (3x－2)/4－(x＋1)/6＝5。",
      "solutionSteps": [
        "用最小公倍數 12 同乘，得到 3(3x－2)－2(x＋1)＝60。",
        "展開成 7x－8＝60，解得 x＝68/7 並代回原式。"
      ],
      "answer": "x＝68/7。",
      "why": "四與六的最小公倍數是十二。同乘後得 3(3x－2)－2(x＋1)＝60，展開為 7x－8＝60，所以 x＝68/7；代回原式左右相等，精確答案應保留六十八分之七。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "最小公倍數只乘左邊。",
      "why": "破壞等量關係。",
      "correction": "等式兩邊每一項都乘。"
    },
    {
      "mistake": "消分母時漏乘常數項。",
      "why": "只注意含x的分數。",
      "correction": "逐項標記乘數。"
    },
    {
      "mistake": "把(x+2)/3寫成x+2/3。",
      "why": "誤解分數線作用範圍。",
      "correction": "保留完整分子括號。"
    },
    {
      "mistake": "多個分母直接相乘後算錯。",
      "why": "未找較小公倍數且係數過大。",
      "correction": "優先使用最小公倍數。"
    },
    {
      "mistake": "分數解擅自取整。",
      "why": "預設情境答案一定整數。",
      "correction": "先代回，再依情境判斷。"
    },
    {
      "mistake": "代回時使用消分母後的式子而非原式。",
      "why": "無法檢查消分母步驟。",
      "correction": "一定代回最初方程式。"
    }
  ],
  "selfCheck": [
    "所有分母是否非零？",
    "最小公倍數是否正確？",
    "每一項是否都被乘到？",
    "括號與負號是否保留？",
    "答案是否代回原分數式？"
  ],
  "summary": [
    "消分母是等量公理的應用。",
    "最小公倍數可簡化係數。",
    "每一項都必須同乘。",
    "分數解可完全正確。"
  ],
  "connections": {
    "previous": "需要熟悉括號方程式、分數通分與最小公倍數。",
    "next": [
      "方程式解的檢查將直接把候選值代回原分數式。",
      "後續應用題可能產生分數或小數解，需再檢查情境。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u03-s006-v001",
      "u03-s006-v002",
      "u03-s006-v003",
      "u03-s006-v004",
      "u03-s006-v005",
      "u03-s006-v006",
      "u03-s006-v007",
      "u03-s006-v008",
      "u03-s006-v009",
      "u03-s006-v010",
      "u03-s006-v011",
      "u03-s006-v012"
    ],
    "constructedResponseIds": [
      "u03-s006-cr001",
      "u03-s006-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "四例分別代回原式：30/6=5、(17+4)/3=7、12/4+12/6=5、(2×34/5-1)/3-(34/5+2)/4=2；並確認所有分母非零及等式每項皆同乘。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "d2037cf1f44384004d1a229ac0b43f390677bdfaa53a2aa98eba2812546deb56",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "legacyContentDisposition": "replace-old-lecture-at-final-integration"
};

export const QUESTIONS = [
  {
    "questionId": "u03-s006-v001",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-fractions",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解 x/3＝7。",
    "choices": [
      "21",
      "7/3",
      "10",
      "24"
    ],
    "answerIndex": 0,
    "explanation": "方程式 x/3＝7 表示 x 的三分之一是 7。依等量公理，等式兩邊同乘 3，得到 x＝7×3＝21。把 21 代回原式，21/3＝7，左右相等，所以 21 是唯一正確答案；同乘非零數沒有改變等式的解。",
    "steps": [
      "辨認未知數 x 被 3 除，逆運算應乘 3。",
      "等式兩邊同乘 3，得到 x＝7×3。",
      "算得 x＝21，代回 21/3＝7 驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "21",
        "truth": true,
        "reason": "兩邊同乘3，x=21。 因此此選項符合題目。"
      },
      {
        "choice": "7/3",
        "truth": false,
        "reason": "把7再除3。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "把3加到7。"
      },
      {
        "choice": "24",
        "truth": false,
        "reason": "把3與7相加後再乘。"
      }
    ],
    "commonMistake": "把分母三看成還要再除一次，會得到七分之三，沒有維持等式兩邊相等。",
    "concept": "乘分母可消去除法。",
    "tags": [
      "代數",
      "含分母的一元一次方程式",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-parentheses"
    ],
    "authoringIntent": "解最基本分母型方程式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "3ba476ddeb9158db305c40f720b92a8b20d5797070796a3ef390be8331579581",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s006-v002",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-fractions",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解 x/4＋2＝5。",
    "choices": [
      "3",
      "12",
      "7",
      "20"
    ],
    "answerIndex": 1,
    "explanation": "先消去 x/4 外加的 2，等式兩邊同減 2，得到 x/4＝3。再把兩邊同乘 4，得到 x＝12。代回原式可得 12/4＋2＝3＋2＝5，與右邊相等，因此答案是 12；先處理加二再消除分母，運算層次才正確。",
    "steps": [
      "等式兩邊同減 2，得到 x/4＝3。",
      "等式兩邊同乘 4，得到 x＝12。",
      "代回計算 12/4＋2＝5，確認成立。"
    ],
    "optionAnalysis": [
      {
        "choice": "3",
        "truth": false,
        "reason": "把3當答案。"
      },
      {
        "choice": "12",
        "truth": true,
        "reason": "兩邊減2得x/4=3，再乘4得x=12。 因此此選項符合題目。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "把4加到3。"
      },
      {
        "choice": "20",
        "truth": false,
        "reason": "直接5×4。"
      }
    ],
    "commonMistake": "直接用右邊五乘四而漏掉常數二，會把尚未移項的總值誤當成 x/4。",
    "concept": "先消常數再消分母。",
    "tags": [
      "代數",
      "含分母的一元一次方程式",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-parentheses"
    ],
    "authoringIntent": "兩步解含分母方程式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "00edb81f81fbfbe9ce8eba8e0672eb950c5e04a3d64e8053300547f7084e609e",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s006-v003",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-fractions",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解 (x－1)/5＝3。",
    "choices": [
      "14",
      "15",
      "16",
      "20"
    ],
    "answerIndex": 2,
    "explanation": "分數線作用在整個 x－1。等式兩邊同乘 5，可得 x－1＝15；接著兩邊同加 1，得到 x＝16。把 16 代回，(16－1)/5＝15/5＝3，正好等於右邊，所以第三個選項正確；括號範圍前後保持一致。",
    "steps": [
      "保留分子括號，兩邊同乘 5 得 x－1＝15。",
      "等式兩邊同加 1，解得 x＝16。",
      "代回原分數式，確認 15/5＝3。"
    ],
    "optionAnalysis": [
      {
        "choice": "14",
        "truth": false,
        "reason": "把15減1。"
      },
      {
        "choice": "15",
        "truth": false,
        "reason": "算到15停止。"
      },
      {
        "choice": "16",
        "truth": true,
        "reason": "兩邊乘5得x-1=15，再加1得x=16。 因此此選項符合題目。"
      },
      {
        "choice": "20",
        "truth": false,
        "reason": "把3+1再乘5。"
      }
    ],
    "commonMistake": "只讓 x 除以五而忽略分子中的減一，會改變分數線原本作用的完整範圍。",
    "concept": "先乘分母再解括號內。",
    "tags": [
      "代數",
      "含分母的一元一次方程式",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-parentheses"
    ],
    "authoringIntent": "整個分子視為被5除。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a2712725fd41915462791f7570348b6490c7b104850fb68a032f35c1765c9a21",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s006-v004",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-fractions",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解 x/2－x/5＝9。",
    "choices": [
      "18",
      "45",
      "90",
      "30"
    ],
    "answerIndex": 3,
    "explanation": "將 x/2 與 x/5 通分到分母 10，左邊成為 5x/10－2x/10＝3x/10。由 3x/10＝9，兩邊同乘 10 得 3x＝90，再除以 3 得 x＝30。代回 15－6＝9，驗算成立。也可直接讓全式同乘十，仍會得到相同的一次方程式與唯一解。",
    "steps": [
      "把兩個分數通分，化為 3x/10＝9。",
      "等式兩邊同乘 10，得到 3x＝90。",
      "兩邊同除以 3 得 x＝30，並代回驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "18",
        "truth": false,
        "reason": "只把9乘2。"
      },
      {
        "choice": "45",
        "truth": false,
        "reason": "把分母相加成7。"
      },
      {
        "choice": "90",
        "truth": false,
        "reason": "乘10後忘記除3。"
      },
      {
        "choice": "30",
        "truth": true,
        "reason": "通分得(5x-2x)/10=9，即3x/10=9；兩邊乘10再除3，x=30。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "把分母二與五直接相減或相加，沒有先通分，就無法正確合併兩個 x 的分數項。",
    "concept": "通分後再解係數。",
    "tags": [
      "代數",
      "含分母的一元一次方程式",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-parentheses"
    ],
    "authoringIntent": "合併同一未知數的分數係數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "57dd755899eee5f7087bd2540058d02a6632cc335a24d7272acf61473f2aa07b",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s006-v005",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-fractions",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解 (2x＋3)/4＝5。",
    "choices": [
      "7",
      "17/2",
      "17",
      "23/2"
    ],
    "answerIndex": 1,
    "explanation": "分子 2x＋3 整體除以 4，因此先讓等式兩邊同乘 4，得到 2x＋3＝20。兩邊同減 3 得 2x＝17，再同除以 2 得 x＝17/2。代回時分子為 20，20/4＝5，故分數解完全正確，不必取成整數。",
    "steps": [
      "等式兩邊同乘 4，保留完整分子得 2x＋3＝20。",
      "兩邊同減 3，得到 2x＝17。",
      "兩邊同除以 2 得 17/2，代回原式驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "7",
        "truth": false,
        "reason": "把17除以錯誤係數。"
      },
      {
        "choice": "17/2",
        "truth": true,
        "reason": "兩邊乘4得2x+3=20，減3得2x=17，所以x=17/2。 因此此選項符合題目。"
      },
      {
        "choice": "17",
        "truth": false,
        "reason": "算到2x=17即停止。"
      },
      {
        "choice": "23/2",
        "truth": false,
        "reason": "把20+3後除2。"
      }
    ],
    "commonMistake": "看到答案不是整數便擅自取整或四捨五入，會使代回原方程式時左右不再相等。",
    "concept": "解可為非整數，應保留精確分數。",
    "tags": [
      "代數",
      "含分母的一元一次方程式",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-parentheses"
    ],
    "authoringIntent": "接受含分數解的分母方程式。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8e508b1f78b25d991ba425769e215f9a84730059244eaa3110632b981a13e08b",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s006-v006",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-fractions",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解 x/3＋1/2＝5/6。",
    "choices": [
      "1/3",
      "2",
      "1",
      "4"
    ],
    "answerIndex": 2,
    "explanation": "先把常數分數移到右邊：x/3＝5/6－1/2。將 1/2 通分成 3/6，可得 x/3＝2/6＝1/3。等式兩邊同乘 3，所以 x＝1。代回 1/3＋1/2＝2/6＋3/6＝5/6，左右相等。通分只改寫分數形式，不會改變原有數值。",
    "steps": [
      "兩邊同減 1/2，寫成 x/3＝5/6－1/2。",
      "通分計算右邊，得到 x/3＝1/3。",
      "兩邊同乘 3 得 x＝1，再代回驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "1/3",
        "truth": false,
        "reason": "把x/3當作x。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "把1/2移項後加。"
      },
      {
        "choice": "1",
        "truth": true,
        "reason": "兩邊減1/2：x/3=5/6-3/6=1/3，因此x=1。 因此此選項符合題目。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "分數相減錯誤。"
      }
    ],
    "commonMistake": "把不同分母的分子與分母分別相減，會錯算五分之六減二分之一，應先通分。",
    "concept": "先精確通分再消分母。",
    "tags": [
      "代數",
      "含分母的一元一次方程式",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-parentheses"
    ],
    "authoringIntent": "處理常數分數與未知數分數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "4dc0b0ebd13c61798d1c52fac0d35e777c39b70fb3ce387eb63610783dbe47ff",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s006-v007",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-fractions",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解 (x－2)/3＋(x＋1)/6＝4。",
    "choices": [
      "7",
      "8",
      "11",
      "9"
    ],
    "answerIndex": 3,
    "explanation": "分母 3 與 6 的最小公倍數是 6。等式每一項同乘 6，得到 2(x－2)＋(x＋1)＝24；展開為 2x－4＋x＋1＝24，也就是 3x－3＝24。解得 3x＝27、x＝9，代回兩分數和為 4。右邊也必須乘六，等量關係才會保持。",
    "steps": [
      "等式每一項同乘 6，得到 2(x－2)＋(x＋1)＝24。",
      "展開並合併為 3x－3＝24。",
      "解得 x＝9，代回原式確認等於 4。"
    ],
    "optionAnalysis": [
      {
        "choice": "7",
        "truth": false,
        "reason": "展開常數錯誤。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "把3x-3=24解成8。"
      },
      {
        "choice": "11",
        "truth": false,
        "reason": "漏掉第二個分子。"
      },
      {
        "choice": "9",
        "truth": true,
        "reason": "兩邊乘6得2(x-2)+(x+1)=24，化簡3x-3=24，所以x=9。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "消分母時漏乘第二個分子或等式右邊，會破壞等量關係並得到錯誤的係數。",
    "concept": "每一項都要乘6。",
    "tags": [
      "代數",
      "含分母的一元一次方程式",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-parentheses"
    ],
    "authoringIntent": "以最小公倍數一次消除多個分母。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "e89a13c9e528676ada43c84996e106746d5fc78dcc1c1663ecff8aad85f9d0bc",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s006-v008",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-fractions",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解 (3x－1)/5－(x＋2)/2＝1。",
    "choices": [
      "22",
      "12",
      "18",
      "24"
    ],
    "answerIndex": 0,
    "explanation": "等式同乘分母 5 與 2 的最小公倍數 10，得到 2(3x－1)－5(x＋2)＝10。展開時負號作用於整個括號，左邊為 6x－2－5x－10＝x－12。因此 x－12＝10，解得 x＝22；代回原式確為 1，負號分配也可由此核對。",
    "steps": [
      "等式每項同乘 10，寫成 2(3x－1)－5(x＋2)＝10。",
      "正確分配負號並合併，得到 x－12＝10。",
      "兩邊同加 12 得 x＝22，代回原式驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "22",
        "truth": true,
        "reason": "兩邊乘10得2(3x-1)-5(x+2)=10；化簡6x-2-5x-10=10，得x=22。 因此此選項符合題目。"
      },
      {
        "choice": "12",
        "truth": false,
        "reason": "把常數-12移項方向錯。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "把6x-5x算錯。"
      },
      {
        "choice": "24",
        "truth": false,
        "reason": "漏乘右邊的1。"
      }
    ],
    "commonMistake": "把負五乘括號展開成負五 x 加十，漏了負號也要乘常數二，會使常數項符號錯誤。",
    "concept": "消分母後仍須正確分配負號。",
    "tags": [
      "代數",
      "含分母的一元一次方程式",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-parentheses"
    ],
    "authoringIntent": "處理兩個分母與括號前負號。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ccd6f8037f77a9e3bc7455ffe0702c5b4159f048ee510ce5286d53822ca17f9d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s006-v009",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-fractions",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "解 x/0.4＝15。",
    "choices": [
      "3.75",
      "15.4",
      "6",
      "37.5"
    ],
    "answerIndex": 2,
    "explanation": "x/0.4＝15 表示 x 除以 0.4 的結果是 15。依除法的逆運算，等式兩邊同乘 0.4，得到 x＝15×0.4＝6。驗算 6÷0.4＝15，左右相等；因除以小於 1 的正數會變大，x 小於 15 也合理。",
    "steps": [
      "辨認 x 是被 0.4 除的數。",
      "等式兩邊同乘 0.4，得到 x＝15×0.4。",
      "算得 x＝6，代回 6÷0.4＝15。"
    ],
    "optionAnalysis": [
      {
        "choice": "3.75",
        "truth": false,
        "reason": "再用15除0.4。"
      },
      {
        "choice": "15.4",
        "truth": false,
        "reason": "把0.4加到15。"
      },
      {
        "choice": "6",
        "truth": true,
        "reason": "兩邊乘0.4，x=15×0.4=6。 因此此選項符合題目。"
      },
      {
        "choice": "37.5",
        "truth": false,
        "reason": "把15×0.4小數點放錯。"
      }
    ],
    "commonMistake": "看到除號就又用十五除以零點四，會把逆運算方向做反並得到三十七點五。",
    "concept": "除以0.4的逆運算是乘0.4。",
    "tags": [
      "代數",
      "含分母的一元一次方程式",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-parentheses"
    ],
    "authoringIntent": "理解小數分母的逆運算。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "4e829bd1ba2a63af0d319ff8ef1d2031853935c686b05d004b4ae338428e42b8",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s006-v010",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-fractions",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某水槽預定在 3 分鐘內等量流入 x 公升。流入 1 分鐘後，另加入 4 公升備用水，此時槽內新增水量共 16 公升。預定 3 分鐘的流入總量 x 是多少？",
    "choices": [
      "12",
      "20",
      "48",
      "36"
    ],
    "answerIndex": 3,
    "explanation": "預定 3 分鐘等量流入 x 公升，所以每分鐘流入 x/3 公升。第一分鐘的流入量再加備用水 4 公升後共有 16 公升，故 x/3＋4＝16。先減 4 得 x/3＝12，再乘 3 得 x＝36 公升；其中 12 只是每分鐘流量。",
    "steps": [
      "由三分鐘總量 x 寫出每分鐘流入 x/3 公升。",
      "依第一分鐘加備用水列 x/3＋4＝16。",
      "同減 4 再同乘 3，求得三分鐘總量 x＝36 公升。"
    ],
    "optionAnalysis": [
      {
        "choice": "12",
        "truth": false,
        "reason": "12 是流入 1 分鐘的水量，不是預定 3 分鐘的總流入量。"
      },
      {
        "choice": "20",
        "truth": false,
        "reason": "把 16 與 4 相加，沒有依題意先扣除另加的備用水。"
      },
      {
        "choice": "48",
        "truth": false,
        "reason": "直接計算 16×3，錯把另加的 4 公升也重複計入三次。"
      },
      {
        "choice": "36",
        "truth": true,
        "reason": "x/3＋4＝16，所以 x/3＝12，三分鐘總量 x＝36 公升。"
      }
    ],
    "commonMistake": "求出每分鐘十二公升便停止，沒有再乘三換回題目所問的三分鐘預定總流入量。",
    "concept": "總量平均分成 3 分鐘時，每分鐘量為 x/3；另加入的 4 公升只出現一次。",
    "tags": [
      "代數",
      "含分母的一元一次方程式",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-parentheses"
    ],
    "authoringIntent": "由三分鐘總量建立每分鐘量，並區分固定另加量。",
    "literacyContextNecessity": "三分鐘總量、等量流入、一分鐘已流入量與另加4公升共同決定方程式 x/3＋4＝16；任一資料刪除都無法求出總量。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "2c93a5343aa1f8f9b2180041adad1c315eda699ffb644b0b65b4f2e49b14481d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s006-v011",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-fractions",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一本書讀完四分之一後，再讀 30 頁，累計讀了 90 頁。全書有 x 頁，求 x。",
    "choices": [
      "240",
      "120",
      "360",
      "480"
    ],
    "answerIndex": 0,
    "explanation": "設全書有 x 頁，先讀完四分之一就是 x/4 頁，再讀 30 頁後累計 90 頁，因此列 x/4＋30＝90。兩邊同減 30 得 x/4＝60，再同乘 4 得 x＝240。驗算四分之一為 60 頁，加 30 頁正好 90 頁。",
    "steps": [
      "用 x/4 表示先讀完的頁數，列 x/4＋30＝90。",
      "等式兩邊同減 30，得到 x/4＝60。",
      "兩邊同乘 4 得 x＝240 頁，並依累計頁數驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "240",
        "truth": true,
        "reason": "x/4+30=90；x/4=60，所以x=240。 因此此選項符合題目。"
      },
      {
        "choice": "120",
        "truth": false,
        "reason": "把90+30當全書。"
      },
      {
        "choice": "360",
        "truth": false,
        "reason": "把90×4未扣30。"
      },
      {
        "choice": "480",
        "truth": false,
        "reason": "把四分之一誤成除2。"
      }
    ],
    "commonMistake": "把後來再讀的三十頁也乘四，會誤認為三十頁屬於每一個四分之一區段。",
    "concept": "四分之一全書用x/4表示。",
    "tags": [
      "代數",
      "含分母的一元一次方程式",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-parentheses"
    ],
    "authoringIntent": "由部分量與固定頁數回推總量。",
    "literacyContextNecessity": "先讀全書四分之一再讀固定30頁的順序與量型決定x/4+30=90，情境不可省略。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "817adee1f35bde74e2134536f6e747b7876cc741bb57ac2a8f869b6f9d43c546",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s006-v012",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-fractions",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一桶麵粉用掉總量的 2/3，剩下 1.5 公斤。原有多少公斤？",
    "choices": [
      "1",
      "4.5",
      "2.25",
      "6"
    ],
    "answerIndex": 1,
    "explanation": "用掉總量的 2/3 後，剩餘比例是 1－2/3＝1/3。設原有 x 公斤，便有 x/3＝1.5；兩邊同乘 3，得到 x＝4.5 公斤。驗算原量的三分之二是 3 公斤，4.5－3＝1.5 公斤，完整符合題意。",
    "steps": [
      "先求剩餘比例為 1/3。",
      "設原量 x 公斤，列 x/3＝1.5。",
      "兩邊同乘 3 得 4.5 公斤，並核對用掉量。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "把剩餘量當總量。"
      },
      {
        "choice": "4.5",
        "truth": true,
        "reason": "剩下的是總量1/3；設x公斤，x-2x/3=1.5，即x/3=1.5，所以x=4.5。 因此此選項符合題目。"
      },
      {
        "choice": "2.25",
        "truth": false,
        "reason": "只用1.5÷(2/3)。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "把1.5乘4。"
      }
    ],
    "commonMistake": "把已用掉的三分之二當成剩餘比例，會用一點五除以三分之二而求錯原量。",
    "concept": "總量減用量後才等於剩餘量。",
    "tags": [
      "代數",
      "含分母的一元一次方程式",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-parentheses"
    ],
    "authoringIntent": "由用掉比例判斷剩餘比例。",
    "literacyContextNecessity": "使用比例與剩餘重量共同決定剩餘是全量的1/3，若刪除「用掉」方向就會得到不同方程式。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d8e277112e2dff9bb3b4318eda74d3105cfae84dbd6dd2a0e6b238f5b4a49b20",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u03-s006-cr001",
    "unitId": "u03",
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-fractions",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "解 (x－3)/4＋(x＋1)/6＝5，完整寫出消分母過程並驗算。",
    "requiredWork": [
      "找分母4與6的最小公倍數12。",
      "等式每一項同乘12。",
      "解答後代回原式。"
    ],
    "fullCreditSolution": [
      "分母 4 與 6 的最小公倍數是 12。等式每一項同乘 12，得到 3(x－3)＋2(x＋1)＝60。",
      "展開並合併同類項：3x－9＋2x＋2＝60，所以 5x－7＝60。",
      "兩邊同加 7 得 5x＝67，再同除以 5，求得 x＝67/5。",
      "代回原式：(67/5－3)/4＋(67/5＋1)/6＝13/5＋12/5＝5，左右相等。"
    ],
    "alternativeSolutions": [
      "可先通分左邊再解，但不得漏乘任何一項。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "消分母、化簡、求得67/5並完成驗算。"
      },
      {
        "score": 2,
        "criteria": "方法正確但一處算術錯，或無驗算。"
      },
      {
        "score": 1,
        "criteria": "知道同乘12且能寫出部分展開。"
      },
      {
        "score": 0,
        "criteria": "消分母破壞等式或無有效步驟。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "同乘十二時只乘含 x 的分數項，漏乘右邊五，會破壞原等式。",
      "展開 3(x－3) 或 2(x＋1) 時漏乘常數，導致常數項合併錯誤。",
      "因答案不是整數便擅自取近似值，沒有以六十七分之五精確代回驗算。"
    ],
    "independentReview": {
      "derivedResult": "x=67/5",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "441c82b1b9aa57b7c3b0c6888ec6fe2ee2d6913e7b9f7ac0e79975da5a00c723",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s006-cr002",
    "unitId": "u03",
    "topicId": "u03-linear-equation-solving",
    "skillId": "linear-equation-fractions",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某桶果汁的 3/5 倒入容器後，再補入 2 公升，容器內共有 14 公升。原桶有 x 公升，求 x。",
    "requiredWork": [
      "列3x/5+2=14。",
      "消分母或先移常數。",
      "附公升並檢查正值。"
    ],
    "fullCreditSolution": [
      "設原桶有 x 公升，倒入容器的是原量的 3/5，再補入 2 公升，因此列 3x/5＋2＝14。",
      "等式兩邊同減 2，得到 3x/5＝12；再同乘 5，得到 3x＝60。",
      "兩邊同除以 3，求得 x＝20 公升。原量五分之三是 12 公升，加 2 公升正好 14 公升。"
    ],
    "alternativeSolutions": [
      "可由14-2=12是原量的3/5，算12÷3×5。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "列式、解20公升並說明比例方向。"
      },
      {
        "score": 2,
        "criteria": "列式正確但一處運算錯。"
      },
      {
        "score": 1,
        "criteria": "能指出12公升是原量的3/5。"
      },
      {
        "score": 0,
        "criteria": "比例與補入量方向皆錯。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "把倒入的五分之三誤當成桶內剩餘比例，會建立與容器水量不符的方程式。",
      "把補入的二公升也乘五，卻沒有讓等式所有項同步運算，破壞等量關係。",
      "求得倒入量十二公升便停止，沒有用五分之三反求原桶的完整容量。"
    ],
    "independentReview": {
      "derivedResult": "20公升",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "e620a7056232bb936329b8acb4162c52faca5d3b1009c00e07f293048f33703d",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const DRAWING_SPECS = [];
