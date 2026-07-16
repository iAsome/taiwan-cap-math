// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u01-s012-lecture-r1",
  "unitId": "u01",
  "topicId": "u01-integer-exponents",
  "skillId": "integer-exponent-meaning",
  "title": "指數的意義：用冪表示重複乘法",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能辨認底數、指數與冪。",
    "能把重複乘法改寫成指數形式。",
    "能展開並計算正、負底數的冪。",
    "能分辨 -aⁿ 與 (-a)ⁿ。",
    "能用 10 的冪描述位值。"
  ],
  "prerequisites": [
    {
      "skillId": "integer-mixed-operations",
      "requiredLevel": "能依運算順序處理整數乘法，並辨認相同因數的重複出現。"
    }
  ],
  "glossary": [
    {
      "term": "底數",
      "definition": "被重複相乘的數。"
    },
    {
      "term": "指數",
      "definition": "表示底數作為因數出現幾次的數。"
    },
    {
      "term": "冪",
      "definition": "底數與指數組成的表示及其值，例如 2³=8。"
    },
    {
      "term": "平方",
      "definition": "二次方，表示同一數乘自己兩次。"
    },
    {
      "term": "立方",
      "definition": "三次方，表示同一數相乘三次。"
    }
  ],
  "notation": [
    {
      "symbol": "aⁿ",
      "meaning": "n 個 a 相乘；本節 n 為正整數。"
    },
    {
      "symbol": "(-a)ⁿ",
      "meaning": "底數是整個負數 -a。"
    },
    {
      "symbol": "-aⁿ",
      "meaning": "先算 aⁿ，再在外面取負；沒有括號時底數是 a。"
    }
  ],
  "conceptNarrative": [
    "冪用來簡寫相同因數的重複乘法。式子 aⁿ 中，a 是底數，表示重複的因數；n 是指數，表示該因數出現幾次。指數不是一般乘數，因此三的四次方不是三乘四。",
    "負號是否屬於底數由括號決定。(-2)⁴ 的底數是負二，有四個負因數；-2⁴ 的底數只有二，前方負號在冪之外。負底數的偶次方為正、奇次方為負，源自負因數個數的奇偶。",
    "指數也能描述成長與幾何結構：每階段固定倍增可寫成同一倍率的冪，正方形面積是邊長平方，十的 n 次方則是一後面接 n 個零。使用前要先確認重複的是乘法而非加法。"
  ],
  "formalDefinitions": [
    {
      "name": "正整數指數",
      "statement": "n 為正整數時，aⁿ=a×a×…×a，共 n 個 a。"
    },
    {
      "name": "負底數奇偶性",
      "statement": "負底數的偶次方為正，奇次方為負。"
    }
  ],
  "formulas": [
    {
      "formula": "aⁿ＝n 個 a 相乘",
      "conditions": [
        "n 為正整數"
      ],
      "meaning": "指數的定義。"
    },
    {
      "formula": "10ⁿ＝1 後接 n 個 0",
      "conditions": [
        "n 為正整數"
      ],
      "meaning": "十進位位值。"
    }
  ],
  "nonApplicableCases": [
    "本節不把指數當作與底數相乘。",
    "沒有括號時，-2⁴ 與 (-2)⁴ 不同。",
    "0 的 0 次方不在本節範圍。",
    "指數律尚未學習前，不能任意把加法中的冪合併。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先看括號範圍，圈出完整底數，確認負號是在底數內還是冪之外。",
      "check": "能明確說出底數是負數或正數，沒有只憑表面符號猜測。"
    },
    {
      "step": 2,
      "instruction": "讀取指數，將它解釋為底數作為因數重複出現的次數。",
      "check": "展開後因數個數與指數相同，底數與指數角色沒有顛倒。"
    },
    {
      "step": 3,
      "instruction": "必要時完整展開重複乘法，或用分組乘法逐步計算冪值。",
      "check": "沒有用底數乘指數或重複加法取代重複乘法。"
    },
    {
      "step": 4,
      "instruction": "負底數先按指數奇偶判定符號，再計算底數絕對值的冪。",
      "check": "偶數個負因數得正，奇數個得負；外層負號最後另行處理。"
    },
    {
      "step": 5,
      "instruction": "情境題辨認每階段倍率或相同長度因數，建立冪後再附回數量或面積單位。",
      "check": "起始階段與倍增次數一致，面積使用平方單位，十的冪零的個數正確。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "u01-s012-example-a",
      "prompt": "計算 6³。",
      "answer": "216。",
      "why": "六的三次方表示三個六相乘，展開為六乘六乘六。先算六乘六等於三十六，再乘六得到二百一十六；指數三不是把六乘三。"
    },
    {
      "exampleId": "u01-s012-example-b",
      "prompt": "計算 (-4)³。",
      "answer": "-64。",
      "why": "括號表示底數是完整的負四，三次方展開後有三個負因數。奇數個負因數使結果為負，絕對值四乘四乘四等於六十四，所以答案為負六十四。"
    },
    {
      "exampleId": "u01-s012-example-c",
      "prompt": "比較 -5² 與 (-5)²。",
      "answer": "-5²=-25，(-5)²=25。",
      "why": "沒有括號時先算五的平方再套用外層負號，得到負二十五；有括號時底數是負五，兩個負因數相乘得正二十五，因此兩式不相等。"
    },
    {
      "exampleId": "u01-s012-ex04-r4",
      "prompt": "某培養皿起初有 3 個菌落，每一輪數量都變成前一輪的 2 倍，5 輪後有多少個？",
      "answer": "96 個。",
      "why": "五輪各乘一次 2，累積倍率是 2⁵=32；起初的 3 個不能省略，因此總數為 3×32=96。指數只表示五次倍增，不包含初始數量。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把底數與指數直接相乘，例如將二的五次方算成十。",
      "correction": "指數表示相同底數作為因數出現五次，應展開五個二相乘。"
    },
    {
      "mistake": "展開時顛倒底數與指數，將三的四次方寫成三個四相乘。",
      "correction": "底數三才是重複因數，指數四只負責指定四個三。"
    },
    {
      "mistake": "忽略括號，認為 -2⁴ 與 (-2)⁴ 的底數完全相同。",
      "correction": "前者底數為二且負號在外，後者底數為負二，計算順序與結果不同。"
    },
    {
      "mistake": "只記得負數平方為正，推廣成負底數任何次方都為正。",
      "correction": "數負因數個數；偶次方為正，奇次方仍為負。"
    },
    {
      "mistake": "把同步倍增或多層容量結構改用固定加法計算。",
      "correction": "先確認每一階段或每一層都在乘同一倍率，再用冪表示重複乘法。"
    },
    {
      "mistake": "看到五輪倍增就只算 2⁵，忘記還要乘起初的 3 個菌落。",
      "correction": "2⁵ 是相對於初始量的倍率；題目求實際總數時，仍須用初始量乘倍率。"
    }
  ],
  "selfCheck": [
    "底數包含負號嗎？",
    "指數代表幾個因數？",
    "括號是否改變底數？",
    "負底數次方的奇偶判對嗎？",
    "我是否誤把冪當乘法係數？"
  ],
  "summary": [
    "aⁿ 是 n 個 a 相乘。",
    "指數不是與底數相乘。",
    "負底數偶次方正、奇次方負。",
    "括號決定負號是否屬於底數。"
  ],
  "connections": {
    "previous": "先備技能是整數乘法與四則混合。",
    "next": [
      "指數律會用規則合併同底數的乘除。",
      "科學記號以 10 的整數次方表示位值。",
      "面積與體積公式會使用平方與立方。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u01-s012-v001",
      "u01-s012-v002",
      "u01-s012-v003",
      "u01-s012-v004",
      "u01-s012-v005",
      "u01-s012-v006",
      "u01-s012-v007",
      "u01-s012-v008",
      "u01-s012-v009",
      "u01-s012-v010",
      "u01-s012-v011",
      "u01-s012-v012"
    ],
    "constructedResponseIds": [
      "u01-s012-cr001",
      "u01-s012-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐一展開正底數、負底數與外層負號；確認括號範圍、奇偶指數和 10 的正整數次方均正確。",
    "reviewVersion": "human-lecture-review-r2.1",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "40a1b963bf0bd8f6e76f48215ceb04f5c6d9d0b128a18c62aea834637582b201",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
};

export const QUESTIONS = [
  {
    "questionId": "u01-s012-v001",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-meaning",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "3⁴ 的值是多少？",
    "choices": [
      "81",
      "12",
      "64",
      "7"
    ],
    "answerIndex": 0,
    "explanation": "三的四次方表示底數三連續作為四個因數相乘，不是三乘四。展開為 3×3×3×3，可先配成兩個九，再算九乘九等於八十一。",
    "steps": [
      "依指數四展開成四個底數相乘：3×3×3×3。",
      "先算前兩個三與後兩個三，各得到 9。",
      "計算 9×9=81，確認不是把底數與指數直接相乘。"
    ],
    "optionAnalysis": [
      {
        "choice": "81",
        "truth": true,
        "reason": "3×3×3×3=81。"
      },
      {
        "choice": "12",
        "truth": false,
        "reason": "把底數乘指數。"
      },
      {
        "choice": "64",
        "truth": false,
        "reason": "把底數換4。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "把底數與指數相加。"
      }
    ],
    "commonMistake": "把指數四誤當普通乘數，計算三乘四等於十二而非四個三相乘。",
    "concept": "指數表示底數重複相乘次數。",
    "tags": [
      "數與量",
      "指數的意義",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-mixed-operations"
    ],
    "authoringIntent": "計算正底數四次方。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "83300d5d1fdb34f9217f0aa590236a8fb99e440ca10271e04d6b8edda0e660ac",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s012-v002",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-meaning",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(-2)³ 的值是多少？",
    "choices": [
      "8",
      "-8",
      "-6",
      "6"
    ],
    "answerIndex": 1,
    "explanation": "括號表示底數是完整的負二，三次方需展開成三個負二相乘。三個負因數是奇數個，所以結果為負；絕對值二乘二乘二等於八，故答案是負八。",
    "steps": [
      "由括號辨認底數為 -2，指數三表示三個相同因數。",
      "展開 (-2)×(-2)×(-2)，判定三個負因數使結果為負。",
      "計算絕對值 2×2×2=8，合併得 -8。"
    ],
    "optionAnalysis": [
      {
        "choice": "8",
        "truth": false,
        "reason": "忽略奇數個負號。"
      },
      {
        "choice": "-8",
        "truth": true,
        "reason": "(-2)(-2)(-2)=-8。"
      },
      {
        "choice": "-6",
        "truth": false,
        "reason": "把底數乘指數。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "大小與符號錯。"
      }
    ],
    "commonMistake": "只記得兩個負數相乘為正，便誤認任何負底數的次方都會是正數。",
    "concept": "負底數奇次方為負。",
    "tags": [
      "數與量",
      "指數的意義",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-mixed-operations"
    ],
    "authoringIntent": "計算負底數奇次方。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "1f3f0c892b41e35c6669418118c09ba008776f5d6a76413440e130e3d6d0854f",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s012-v003",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-meaning",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "-2⁴ 的值是多少？",
    "choices": [
      "16",
      "8",
      "-16",
      "-8"
    ],
    "answerIndex": 2,
    "explanation": "式中沒有括號把負號包進底數，所以指數四只作用在二上。先計算 2⁴=16，再處理前方外層負號，得到 -16；這與底數為負二的四次方不同。",
    "steps": [
      "觀察沒有括號，判定冪的底數是 2，前方負號在冪之外。",
      "計算 2⁴=2×2×2×2=16。",
      "最後套用外層負號得到 -16，並與 (-2)⁴ 區分。"
    ],
    "optionAnalysis": [
      {
        "choice": "16",
        "truth": false,
        "reason": "這是(-2)⁴的值。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "把指數當乘數。"
      },
      {
        "choice": "-16",
        "truth": true,
        "reason": "-(2⁴)=-16。"
      },
      {
        "choice": "-8",
        "truth": false,
        "reason": "算術錯。"
      }
    ],
    "commonMistake": "把沒有括號的負二四次方看成以負二為底數，因而錯算為正十六。",
    "concept": "次方優先於前置負號，括號決定底數。",
    "tags": [
      "數與量",
      "指數的意義",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-mixed-operations"
    ],
    "authoringIntent": "區分負號是否屬於底數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "eeab06693e4a26ef4c5f4bf57c182ed93d41bfc5c6c623149e44c518adaa6fb8",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s012-v004",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-meaning",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "(-5)×(-5)×(-5)×(-5) 可寫成哪一個指數形式？",
    "choices": [
      "-5⁴",
      "4⁵",
      "(-4)⁵",
      "(-5)⁴"
    ],
    "answerIndex": 3,
    "explanation": "重複出現的完整因數是負五，而且一共出現四次，因此底數應寫成括號內的負五，指數寫四，得到 (-5)⁴。若漏掉括號，負號便不屬於底數，意義會改變。",
    "steps": [
      "找出每個重複因數都是完整的 (-5)。",
      "數出相同因數共四個，因此指數為 4。",
      "用括號保留負號屬於底數，寫成 (-5)⁴。"
    ],
    "optionAnalysis": [
      {
        "choice": "-5⁴",
        "truth": false,
        "reason": "沒有括號，底數是5且外層負。"
      },
      {
        "choice": "4⁵",
        "truth": false,
        "reason": "底數與指數顛倒。"
      },
      {
        "choice": "(-4)⁵",
        "truth": false,
        "reason": "重複因數不是-4。"
      },
      {
        "choice": "(-5)⁴",
        "truth": true,
        "reason": "四個(-5)相乘= (-5)⁴。"
      }
    ],
    "commonMistake": "只寫成負五的四次方卻省略括號，使負號變成冪運算外的符號。",
    "concept": "負底數必須用括號包住。",
    "tags": [
      "數與量",
      "指數的意義",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-mixed-operations"
    ],
    "authoringIntent": "把負因數重複乘法改寫成冪。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "4e3d31a55fdb285272dbebf45813c0ab288f8bae4916556fd5b1aa3593085a1a",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s012-v005",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-meaning",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "10⁶ 等於多少？",
    "choices": [
      "1,000,000",
      "60",
      "100,000",
      "10,000,000"
    ],
    "answerIndex": 0,
    "explanation": "十的六次方表示六個十相乘。從一開始，每乘一次十就在十進位表示中增加一個零，因此結果是一後面接六個零，也就是一百萬或 1,000,000。",
    "steps": [
      "把 10⁶ 解讀成六個 10 連續相乘。",
      "利用十進位位值，確認一後方應有六個零。",
      "寫成 1,000,000，並數位數核對沒有少零或多零。"
    ],
    "optionAnalysis": [
      {
        "choice": "1,000,000",
        "truth": true,
        "reason": "10×10×10×10×10×10=1,000,000。"
      },
      {
        "choice": "60",
        "truth": false,
        "reason": "把10乘6。"
      },
      {
        "choice": "100,000",
        "truth": false,
        "reason": "只有5個0。"
      },
      {
        "choice": "10,000,000",
        "truth": false,
        "reason": "有7個0。"
      }
    ],
    "commonMistake": "把指數六當成乘數，將十的六次方誤算為十乘六等於六十。",
    "concept": "10的正整數次方對應十進位位值。",
    "tags": [
      "數與量",
      "指數的意義",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-mixed-operations"
    ],
    "authoringIntent": "由10的冪還原大數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "621242ef71c2f4fbb68f3e59ce0e3fb92f96d0739866e9105fe16623226393ad",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s012-v006",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-meaning",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "比較 (-3)² 與 -3²，下列何者正確？",
    "choices": [
      "兩者相等",
      "(-3)²>-3²",
      "(-3)²<-3²",
      "兩者都為負"
    ],
    "answerIndex": 1,
    "explanation": "有括號的 (-3)² 以負三為底數，兩個負因數相乘得正九。沒有括號的 -3² 則先算 3²=9，再加外層負號成負九；正九大於負九，括號確實改變了底數範圍。",
    "steps": [
      "計算有括號者 (-3)²=(-3)×(-3)=9。",
      "計算無括號者 -3²=-(3²)=-9。",
      "比較 9 與 -9，得到 (-3)²>-3²。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩者相等",
        "truth": false,
        "reason": "9不等於-9。"
      },
      {
        "choice": "(-3)²>-3²",
        "truth": true,
        "reason": "9>-9。"
      },
      {
        "choice": "(-3)²<-3²",
        "truth": false,
        "reason": "方向錯。"
      },
      {
        "choice": "兩者都為負",
        "truth": false,
        "reason": "第一個為正。"
      }
    ],
    "commonMistake": "忽略括號對底數範圍的作用，把兩個式子都當成負三的平方而判為相等。",
    "concept": "括號決定負號是否參與次方。",
    "tags": [
      "數與量",
      "指數的意義",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-mixed-operations"
    ],
    "authoringIntent": "比較兩種負號位置的平方。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d9ea1b150fc10c75faa038731d3053979395cedefbf8a292ed26d7d4b32e9e3b",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s012-v007",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-meaning",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "2⁵ 的展開式與值何者正確？",
    "choices": [
      "2×5=10",
      "5×5=25",
      "2×2×2×2×2=32",
      "2+2+2+2+2=10"
    ],
    "answerIndex": 2,
    "explanation": "二的五次方中，二是底數，五表示底數作為因數出現五次。因此展開為 2×2×2×2×2，依序相乘得到四、八、十六、三十二，正確值為三十二。",
    "steps": [
      "依指數五寫出五個底數：2×2×2×2×2。",
      "由左到右逐次相乘，得到 4、8、16、32。",
      "核對展開式與結果同時正確，選擇等於 32 的選項。"
    ],
    "optionAnalysis": [
      {
        "choice": "2×5=10",
        "truth": false,
        "reason": "把指數當乘數。"
      },
      {
        "choice": "5×5=25",
        "truth": false,
        "reason": "底數錯。"
      },
      {
        "choice": "2×2×2×2×2=32",
        "truth": true,
        "reason": "2×2×2×2×2=32。"
      },
      {
        "choice": "2+2+2+2+2=10",
        "truth": false,
        "reason": "把重複乘法改成加法。"
      }
    ],
    "commonMistake": "用五個二相加或直接算二乘五，混淆重複乘法與重複加法。",
    "concept": "冪是重複乘法，不是重複加法。",
    "tags": [
      "數與量",
      "指數的意義",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-mixed-operations"
    ],
    "authoringIntent": "同時檢查展開形式與數值。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "974a35b234a3b8ee433ca0f6167015a2751d3d38b140d677a156ee606f8e6e85",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s012-v008",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-meaning",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "4³ 的值是多少？",
    "choices": [
      "12",
      "16",
      "48",
      "64"
    ],
    "answerIndex": 3,
    "explanation": "四的三次方表示三個四相乘，展開為 4×4×4。先算前兩個四得十六，再用十六乘四得到六十四，所以三次方不是只算兩個因數的平方。",
    "steps": [
      "由指數三展開成 4×4×4。",
      "先計算 4×4=16，仍保留第三個因數 4。",
      "再算 16×4=64，得到 4³ 的正確值。"
    ],
    "optionAnalysis": [
      {
        "choice": "12",
        "truth": false,
        "reason": "把4乘3。"
      },
      {
        "choice": "16",
        "truth": false,
        "reason": "只算平方。"
      },
      {
        "choice": "48",
        "truth": false,
        "reason": "算術錯。"
      },
      {
        "choice": "64",
        "truth": true,
        "reason": "4×4×4=64。"
      }
    ],
    "commonMistake": "把三次方只展開成兩個四相乘，停在十六而漏掉第三個因數。",
    "concept": "指數3代表三個底數因數。",
    "tags": [
      "數與量",
      "指數的意義",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-mixed-operations"
    ],
    "authoringIntent": "計算較大底數的立方。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d1601c52405ad8966a7c6e25618c83ab6ba14896c5483c5a484ff7fe26fa3720",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s012-v009",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-meaning",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "若 a=-2，則 a⁴-a³ 的值是多少？",
    "choices": [
      "24",
      "8",
      "-24",
      "0"
    ],
    "answerIndex": 0,
    "explanation": "先把 a 的值連同負號完整代入兩個冪。代入 a=-2 後，a⁴ 是四個負二相乘，偶數個負因數得到十六；a³ 是三個負二相乘，得到負八。因此 a⁴-a³=16-(-8)=24。",
    "steps": [
      "代入 a=-2，計算 a⁴=(-2)⁴=16。",
      "計算 a³=(-2)³=-8，保留奇次方的負號。",
      "代回原式 16-(-8)=16+8=24。"
    ],
    "optionAnalysis": [
      {
        "choice": "24",
        "truth": true,
        "reason": "16-(-8)=24。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "漏掉減負。"
      },
      {
        "choice": "-24",
        "truth": false,
        "reason": "符號全錯。"
      },
      {
        "choice": "0",
        "truth": false,
        "reason": "誤認兩冪相等。"
      }
    ],
    "commonMistake": "把負底數的三次方算成正八，導致後面的減負關係與最終數值都錯誤。",
    "concept": "負底數的奇偶次方符號不同。",
    "tags": [
      "數與量",
      "指數的意義",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "integer-mixed-operations"
    ],
    "authoringIntent": "代入負底數並組合兩個冪。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f40142bb2145ef21b1e0f7ed4b2bddfca6fd01afe2aab47157a1750fbffd5d7f",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s012-v010",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-meaning",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一個細胞每小時分裂成 2 個，假設從 1 個開始且每個小時全部同步分裂。8 小時後共有多少個？",
    "choices": [
      "16 個",
      "256 個",
      "64 個",
      "512 個"
    ],
    "answerIndex": 1,
    "explanation": "每個小時所有細胞都同步分裂成兩個，表示總數每小時乘二，而不是固定增加二個。從一個開始經過八次倍增為 1×2⁸，計算得到二百五十六個。",
    "steps": [
      "辨認同步分裂使總數每小時乘 2，起始數量為 1。",
      "八小時共有八次倍增，列式 1×2⁸。",
      "計算 2⁸=256，得到八小時後共 256 個。"
    ],
    "optionAnalysis": [
      {
        "choice": "16 個",
        "truth": false,
        "reason": "把2乘8。"
      },
      {
        "choice": "256 個",
        "truth": true,
        "reason": "2⁸=256。"
      },
      {
        "choice": "64 個",
        "truth": false,
        "reason": "只分裂6次。"
      },
      {
        "choice": "512 個",
        "truth": false,
        "reason": "多分裂一次。"
      }
    ],
    "commonMistake": "把同步倍增解讀成每小時只固定增加兩個，因而用加法取代八次乘二。",
    "concept": "連續倍增可用2的次方表示。",
    "tags": [
      "數與量",
      "指數的意義",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-mixed-operations"
    ],
    "authoringIntent": "把同步分裂模型轉成指數。",
    "literacyContextNecessity": "起始數量、倍增規則與經過小時數共同決定指數。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "5576e487a7f6d4f7cffdb01818727d5cc22989fd315184a37bac98bfd6b676c3",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s012-v011",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-meaning",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "正方形地磚邊長為 12 公分。它的面積用指數表示並計算，何者正確？",
    "choices": [
      "12×2=24 平方公分",
      "12³=1,728 平方公分",
      "12²=144 平方公分",
      "2¹²=4,096 平方公分"
    ],
    "answerIndex": 2,
    "explanation": "正方形面積是邊長乘邊長，邊長十二公分要重複作為兩個因數，因此可寫成 12²。計算十二乘十二得一百四十四，面積單位是平方公分。",
    "steps": [
      "套用正方形面積等於邊長乘邊長。",
      "將 12×12 改寫成指數形式 12²。",
      "計算 12²=144，並附上面積單位平方公分。"
    ],
    "optionAnalysis": [
      {
        "choice": "12×2=24 平方公分",
        "truth": false,
        "reason": "把平方當乘2且單位錯。"
      },
      {
        "choice": "12³=1,728 平方公分",
        "truth": false,
        "reason": "立方用於三個相同因數。"
      },
      {
        "choice": "12²=144 平方公分",
        "truth": true,
        "reason": "12×12=12²=144平方公分。"
      },
      {
        "choice": "2¹²=4,096 平方公分",
        "truth": false,
        "reason": "底數與指數角色錯。"
      }
    ],
    "commonMistake": "把平方誤解為邊長乘二，既算錯面積數值，也沒有表達兩個邊長相乘。",
    "concept": "平方表示同一長度相乘兩次。",
    "tags": [
      "數與量",
      "指數的意義",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-mixed-operations"
    ],
    "authoringIntent": "把幾何面積連結到二次方。",
    "literacyContextNecessity": "地磚形狀與邊長決定使用平方，單位須為平方公分。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f09dd62980bd0a91d45f978423ff37759caf274b4df0fee44a8ea22561961f8c",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u01-s012-v012",
    "unitId": "u01",
    "numericUnitId": 1,
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-meaning",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一個展示架每層有 10 格，每格可放 10 盒，共有 10 層。總共可放多少盒？",
    "choices": [
      "30 盒",
      "100 盒",
      "300 盒",
      "1,000 盒"
    ],
    "answerIndex": 3,
    "explanation": "總盒數要把層數、每層格數與每格盒數相乘，三個量的數值都是十，因此列式為 10×10×10=10³。計算可得一千盒，這是三層結構相乘而非三項相加。",
    "steps": [
      "依結構列出 10 層×每層 10 格×每格 10 盒。",
      "辨認有三個相同因數 10，改寫為 10³。",
      "計算 10³=1,000，得到總容量 1,000 盒。"
    ],
    "optionAnalysis": [
      {
        "choice": "30 盒",
        "truth": false,
        "reason": "把三個10相加。"
      },
      {
        "choice": "100 盒",
        "truth": false,
        "reason": "只算兩個10。"
      },
      {
        "choice": "300 盒",
        "truth": false,
        "reason": "錯誤乘積。"
      },
      {
        "choice": "1,000 盒",
        "truth": true,
        "reason": "10×10×10=1000。"
      }
    ],
    "commonMistake": "看到三個十就相加成三十，沒有依層、格、盒的乘法結構計算總量。",
    "concept": "三層相同倍數結構可用三次方。",
    "tags": [
      "數與量",
      "指數的意義",
      "literacy"
    ],
    "estimatedTimeSec": "90",
    "prerequisiteSkillIds": [
      "integer-mixed-operations"
    ],
    "authoringIntent": "由三層容量結構辨認10³。",
    "literacyContextNecessity": "層數、每層格數與每格盒數三個層級都必要。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f2fa11234ff2172e9a392aa50a6548938ae1197dc099f8dd280443c56dcbfd33",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u01-s012-cr001",
    "unitId": "u01",
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-meaning",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "將下列各式展開並計算：(-3)⁴、-3⁴、(-3)³。請比較三個結果。",
    "requiredWork": [
      "每式寫出底數是否含負號。",
      "展開或說明負因數個數。"
    ],
    "fullCreditSolution": [
      "(-3)⁴ 的底數包含負號，展開為四個負三相乘；負因數有偶數個，所以結果為 81。",
      "-3⁴ 沒有括號，底數只有 3；先算 3⁴=81，再套用外層負號，結果為 -81。",
      "(-3)³ 的底數是負三，三個負因數為奇數個，因此展開計算得到 -27。",
      "比較一正兩負三個結果，81 最大；負數中 -27 比 -81 靠近零，所以 81>-27>-81。"
    ],
    "alternativeSolutions": [
      "可直接用奇偶判符號，但需清楚說明括號差異。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "三值與比較全部正確且括號解釋完整。"
      },
      {
        "score": 2,
        "criteria": "三值正確但比較或解釋略缺；或一處小錯。"
      },
      {
        "score": 1,
        "criteria": "至少正確區分(-3)⁴與-3⁴。"
      },
      {
        "score": 0,
        "criteria": "三式均視為同值。"
      }
    ],
    "scoringNotes": [
      "次方先於外層負號。"
    ],
    "commonErrors": [
      "忽略第二式沒有括號，把外層負號納入底數而將 -3⁴ 算成正八十一。",
      "認為負底數做任何次方都為正，錯把三個負因數的乘積寫成正二十七。",
      "比較兩個負數時只看絕對值，誤認負八十一大於負二十七。"
    ],
    "independentReview": {
      "derivedResult": "81、-81、-27；81>-27>-81。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "fc98ee079151f8bc83a521eedeb608895488ca8c014dd2a0ff10105f692d4b05",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reasoningSteps": [
      "逐式先由括號判斷負號是否屬於底數，再依指數展開相同因數。",
      "用負因數個數的奇偶決定符號，分別算出 81、-81、-27。",
      "最後依數線位置比較三數，正數先於兩個負數，再比較兩負數大小。"
    ]
  },
  {
    "questionId": "u01-s012-cr002",
    "unitId": "u01",
    "topicId": "u01-integer-exponents",
    "skillId": "integer-exponent-meaning",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某圖樣第 1 階段有 3 個小格；之後每一階段把每個小格替換成 3 個小格。請用指數表示第 5 階段的小格數並求值，說明指數為什麼是 5。",
    "requiredWork": [
      "明確採用第1階段=3。",
      "每階段乘3。",
      "說明共出現五個3因數。"
    ],
    "fullCreditSolution": [
      "依題目定義，第 1 階段已有 3 個小格，可寫成 3¹；每進入下一階段，小格總數都再乘 3。",
      "因此第 2、3、4、5 階段依序為 3²、3³、3⁴、3⁵，第 5 階段共有五個 3 因數，指數是 5。",
      "計算 3⁵=3×3×3×3×3=243，所以第 5 階段有 243 個小格。"
    ],
    "alternativeSolutions": [
      "可列3、9、27、81、243驗證。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "3⁵、243與階段指數說明完整。"
      },
      {
        "score": 2,
        "criteria": "答案正確但指數理由略缺。"
      },
      {
        "score": 1,
        "criteria": "知道每階段乘3並列出部分序列。"
      },
      {
        "score": 0,
        "criteria": "把第5階段寫3×5。"
      }
    ],
    "scoringNotes": [
      "若把起始階段當第0階段會得3⁶，但不符合題目明定。"
    ],
    "commonErrors": [
      "把每階段乘三誤解成階段數乘三，直接算三乘五等於十五。",
      "從第零階段開始計數，少算一次替換而把第五階段寫成三的四次方。",
      "在第一階段已有三個小格的前提下又多乘一次，錯寫成三的六次方。"
    ],
    "independentReview": {
      "derivedResult": "3⁵=243。",
      "ambiguity": "none",
      "decision": "pass"
    },
    "contentSha256": "29382283af8b0a7612fe3df8f19bc5e140d0480ff5ce0e729d737e7fca6a09c1",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reasoningSteps": [
      "先固定階段編號起點：第一階段就是三的一次方，而不是零次方。",
      "逐階段乘三並列出指數遞增，確認到第五階段恰有五個三相乘。",
      "展開或逐次乘算三的五次方，得到二百四十三並附上小格單位。"
    ]
  }
];

export const DRAWING_SPECS = [];
