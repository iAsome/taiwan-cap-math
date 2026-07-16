// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
// CONTENT AUTHORITY: CHATGPT_HUMAN_AUTHORED_R1
// OLD GENERATED CONTENT MUST NOT BE IMPORTED OR MERGED.
export const LECTURE = {
  "lectureId": "u03-s009-lecture-r1",
  "unitId": "u03",
  "topicId": "u03-linear-equation-apps",
  "skillId": "linear-equation-money-problem",
  "title": "金錢問題：從固定費與單價建立總金額關係",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能用單價乘數量表示變動費。",
    "能區分固定費與逐件費。",
    "能處理付款、找零、折扣與預算餘額。",
    "能檢查金額與數量的單位及整數限制。"
  ],
  "prerequisites": [
    {
      "skillId": "linear-equation-age-problem",
      "requiredLevel": "能處理年齡差、倍數與同一時間點，並判斷解的合理性。"
    }
  ],
  "glossary": [
    {
      "term": "單價",
      "definition": "一個單位商品的價格。"
    },
    {
      "term": "固定費",
      "definition": "不隨購買數量改變、只收一次的費用。"
    },
    {
      "term": "變動費",
      "definition": "隨數量增加，通常為單價乘數量。"
    },
    {
      "term": "找零",
      "definition": "付款金額減去實際商品總價。"
    }
  ],
  "notation": [
    {
      "symbol": "px+f",
      "meaning": "單價p乘數量x，再加固定費f。"
    },
    {
      "symbol": "B-C",
      "meaning": "預算B扣除支出C後的餘額。"
    }
  ],
  "conceptNarrative": [
    "金錢方程式先判斷哪些費用每件都發生、哪些只收一次。",
    "付款與找零題中，實付商品總價=付款-找零。",
    "折扣題要先確認折數作用於原價還是某一部分。",
    "數量通常需為非負整數，金額則依最小貨幣單位可為小數。"
  ],
  "formalDefinitions": [
    {
      "name": "總價",
      "statement": "總價=單價×數量+固定費。"
    },
    {
      "name": "實付金額",
      "statement": "實付=付款-找零。"
    },
    {
      "name": "折後價",
      "statement": "折後價=原價×折數。"
    }
  ],
  "formulas": [
    {
      "formula": "px+f=T",
      "conditions": [
        "p為單價、f只收一次"
      ],
      "meaning": "固定費加按量計費。"
    },
    {
      "formula": "P-R=px",
      "conditions": [
        "P為付款、R為找零"
      ],
      "meaning": "找零型購物。"
    }
  ],
  "nonApplicableCases": [
    "固定費不能乘購買數量。",
    "每件折價要乘件數，整筆折價只扣一次。",
    "硬幣或票數需為整數。",
    "不能把淨收入當成總營收。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "標出單價、數量、固定費與總額。",
      "check": "每一筆費用作用幾次？"
    },
    {
      "step": 2,
      "instruction": "用px表示同價商品總費。",
      "check": "數量是否為未知數？"
    },
    {
      "step": 3,
      "instruction": "加入或扣除固定金額。",
      "check": "是費用、折價、找零還是餘額？"
    },
    {
      "step": 4,
      "instruction": "解方程式。",
      "check": "金額單位是否一致？"
    },
    {
      "step": 5,
      "instruction": "代回並檢查數量限制。",
      "check": "票數、硬幣數是否為整數？"
    }
  ],
  "workedExamples": [
    {
      "prompt": "八個同價資料夾另付二十四元運費，共三百四十四元，求單價。",
      "solutionSteps": [
        "設單價 x 元，列 8x＋24＝344。",
        "扣運費後除以八，求得 x＝40 並代回。"
      ],
      "answer": "每個四十元。",
      "why": "運費只收一次，設單價 x 元，列 8x＋24＝344。先扣運費得到八個資料夾共三百二十元，再除以八得四十元；代回總額正確。"
    },
    {
      "prompt": "付兩千元買六件同價商品，找回二百六十元，求每件價格。",
      "solutionSteps": [
        "用付款減找零，求六件商品總價一千七百四十元。",
        "用一千七百四十除以六，得到每件二百九十元。"
      ],
      "answer": "每件二百九十元。",
      "why": "商品實付總價是付款減找零，二千減二百六十等於一千七百四十元。六件同價，所以再除以六得二百九十元；六件總價加找零正好回到付款。"
    },
    {
      "prompt": "某商品六折後售價七百二十元，求原價。",
      "solutionSteps": [
        "設原價 x 元，將六折寫成 0.6x＝720。",
        "兩邊除以零點六，求得 x＝1200 並乘回驗算。"
      ],
      "answer": "原價一千二百元。",
      "why": "六折表示售價為原價的百分之六十，設原價 x 元，列零點六 x 等於七百二十。反求原價要除以折數，得到一千二百元，代回六折正好七百二十元。"
    },
    {
      "prompt": "十二枚硬幣中 x 枚五十元，其餘十元，總值四百元，求五十元硬幣數。",
      "solutionSteps": [
        "用 x 與 12－x 表示兩種枚數，列 50x＋10(12－x)＝400。",
        "化簡為 40x＝280，求得 x＝7 並核對枚數與總值。"
      ],
      "answer": "五十元硬幣七枚。",
      "why": "五十元硬幣 x 枚，十元硬幣十二減 x 枚，列 50x＋10(12－x)＝400。化簡得 40x＝280，所以 x＝7；其餘五枚十元，總值三百五十加五十正好為四百。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "固定費也乘數量。",
      "why": "未分清費用層級。",
      "correction": "固定費只加一次。"
    },
    {
      "mistake": "找零加到付款上。",
      "why": "方向顛倒。",
      "correction": "商品價=付款-找零。"
    },
    {
      "mistake": "每件折價只扣一次。",
      "why": "忽略件數。",
      "correction": "每件價差乘件數。"
    },
    {
      "mistake": "折後價再乘折數。",
      "why": "把求原價方向做反。",
      "correction": "原價=折後價÷折數。"
    },
    {
      "mistake": "票數解為小數仍接受。",
      "why": "未檢查離散量。",
      "correction": "確認必須為非負整數。"
    },
    {
      "mistake": "淨收入與營收混用。",
      "why": "漏加回支出。",
      "correction": "淨收入=營收-支出。"
    }
  ],
  "selfCheck": [
    "固定費是否只收一次？",
    "單價是否乘正確數量？",
    "找零與折價方向是否正確？",
    "金額單位是否一致？",
    "數量解是否符合整數條件？"
  ],
  "summary": [
    "總價由固定費與變動費組成。",
    "付款減找零得到商品價。",
    "折數作用方向要明確。",
    "解後檢查貨幣與數量限制。"
  ],
  "connections": {
    "previous": "需要會列一元一次方程式並處理百分率。",
    "next": [
      "行程問題把單價×數量換成速率×時間。",
      "方案比較會同時建立兩個費用式。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u03-s009-v001",
      "u03-s009-v002",
      "u03-s009-v003",
      "u03-s009-v004",
      "u03-s009-v005",
      "u03-s009-v006",
      "u03-s009-v007",
      "u03-s009-v008",
      "u03-s009-v009",
      "u03-s009-v010",
      "u03-s009-v011",
      "u03-s009-v012"
    ],
    "constructedResponseIds": [
      "u03-s009-cr001",
      "u03-s009-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "四例逐項驗算：6×20+12=132、1000-175=5×165、0.75×1200=900、3×20+7×5=95；並核對固定費、找零與硬幣整數性。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "e38bc44c80f0d03fec67fcedf5c097aebed15c807685d9a07da4db8eadbd2417",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "legacyContentDisposition": "replace-old-lecture-at-final-integration"
};

export const QUESTIONS = [
  {
    "questionId": "u03-s009-v001",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-money-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "買 3 本同價筆記本另付 20 元包裝費，共 110 元。每本多少元？",
    "choices": [
      "30",
      "20",
      "36",
      "90"
    ],
    "answerIndex": 0,
    "explanation": "設每本筆記本 x 元，三本同價筆記本為 3x 元，包裝費 20 元只收一次，所以 3x＋20＝110。兩邊減 20 得 3x＝90，再除以 3 得 x＝30。驗算三本九十元加包裝費二十元，總額正好一百一十元。",
    "steps": [
      "設單價 x 元，列三本價錢 3x。",
      "加入一次包裝費，建立 3x＋20＝110。",
      "解得每本三十元，代回總額驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "30",
        "truth": true,
        "reason": "設每本x元，3x+20=110；3x=90，所以x=30。 因此此選項符合題目。"
      },
      {
        "choice": "20",
        "truth": false,
        "reason": "把包裝費當單價。"
      },
      {
        "choice": "36",
        "truth": false,
        "reason": "110÷3未扣固定費。"
      },
      {
        "choice": "90",
        "truth": false,
        "reason": "90是三本總價。"
      }
    ],
    "commonMistake": "直接用總額除以三，把只收一次的包裝費也平均當成每本商品價格的一部分。",
    "concept": "固定費不隨數量增加。",
    "tags": [
      "代數",
      "金錢問題",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-age-problem"
    ],
    "authoringIntent": "由總價與固定費求單價。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "0cd616812fbfd2732659ac5c3f1614877d53389cd368082a8141cb2dee1dc08c",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s009-v002",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-money-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "5 支同價原子筆加一個 15 元橡皮擦，共 90 元。每支筆多少元？",
    "choices": [
      "12",
      "15",
      "18",
      "75"
    ],
    "answerIndex": 1,
    "explanation": "設每支筆 x 元，五支筆共 5x 元，另有一個固定 15 元的橡皮擦，因此列 5x＋15＝90。兩邊同減 15 得 5x＝75，再除以 5 得 x＝15。驗算五支筆七十五元加橡皮擦十五元，總共九十元。",
    "steps": [
      "用 5x 表示五支同價原子筆。",
      "加入一個橡皮擦，列 5x＋15＝90。",
      "解得單價十五元，代回所有商品總額。"
    ],
    "optionAnalysis": [
      {
        "choice": "12",
        "truth": false,
        "reason": "把90-15後除錯。"
      },
      {
        "choice": "15",
        "truth": true,
        "reason": "5x+15=90，5x=75，x=15。 因此此選項符合題目。"
      },
      {
        "choice": "18",
        "truth": false,
        "reason": "直接90÷5。"
      },
      {
        "choice": "75",
        "truth": false,
        "reason": "75是五支筆總價。"
      }
    ],
    "commonMistake": "直接用九十除以五，漏掉橡皮擦的固定價格，會把非筆的費用算進每支筆。",
    "concept": "總價中先分離固定商品。",
    "tags": [
      "代數",
      "金錢問題",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-age-problem"
    ],
    "authoringIntent": "解簡單購物單價問題。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "6970cbdd418cf0c468914d42d0996d305b7d093dbd3ee81bb58b1efdb9e9a0a8",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s009-v003",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-money-problem",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "拿 500 元買 4 個同價水壺，找回 60 元。每個水壺多少元？",
    "choices": [
      "100",
      "120",
      "110",
      "140"
    ],
    "answerIndex": 2,
    "explanation": "付款五百元並找回六十元，表示四個水壺實際總價是 500－60＝440 元。設每個 x 元，列 4x＝440，兩邊除以 4 得 x＝110。驗算四個水壺共四百四十元，從五百元中扣除後正好找回六十元。",
    "steps": [
      "先以付款減找零，求商品總價四百四十元。",
      "設單價 x 元，列 4x＝440。",
      "解得每個一百一十元，依付款與找零驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "100",
        "truth": false,
        "reason": "把500直接除5。"
      },
      {
        "choice": "120",
        "truth": false,
        "reason": "500-60後除錯。"
      },
      {
        "choice": "110",
        "truth": true,
        "reason": "實付500-60=440元，4x=440，所以x=110。 因此此選項符合題目。"
      },
      {
        "choice": "140",
        "truth": false,
        "reason": "把找零加回商品價。"
      }
    ],
    "commonMistake": "把找回的六十元加到付款上，或直接用五百除以四，都沒有先求實際商品總價。",
    "concept": "商品總價=付款-找零。",
    "tags": [
      "代數",
      "金錢問題",
      "basic"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-age-problem"
    ],
    "authoringIntent": "由付款與找零求實付金額。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "ee78945b3776f835eed2d8d3d47f949e651c85b98c6aa5d03f5b311ae420a6b5",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s009-v004",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-money-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一件商品打八折後售價 640 元，原價是多少元？",
    "choices": [
      "512",
      "768",
      "1280",
      "800"
    ],
    "answerIndex": 3,
    "explanation": "八折表示售價是原價的 80%。設原價 x 元，列 0.8x＝640；已知折後價反求原價，要用 640÷0.8，得到 x＝800 元。驗算原價八百元的兩成是一百六十元，折去後剩六百四十元，符合八折。",
    "steps": [
      "把八折轉成倍率零點八。",
      "設原價 x 元，列 0.8x＝640。",
      "除以零點八得八百元，並計算折扣額驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "512",
        "truth": false,
        "reason": "再把640乘0.8。"
      },
      {
        "choice": "768",
        "truth": false,
        "reason": "把折扣20%加回一次。"
      },
      {
        "choice": "1280",
        "truth": false,
        "reason": "把0.8當作除數方向顛倒。"
      },
      {
        "choice": "800",
        "truth": true,
        "reason": "設原價x元，0.8x=640，所以x=640÷0.8=800。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "把折後價再乘零點八，會求到第二次打折的價格，而不是題目所問的原價。",
    "concept": "折後價=原價×折數。",
    "tags": [
      "代數",
      "金錢問題",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-age-problem"
    ],
    "authoringIntent": "用百分率方程式回推原價。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "32106cfb6d35091962bf9f30abce6d5ba58f38303047ef070f6187c1c23f4d82",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s009-v005",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-money-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "成人票每張 x 元，兒童票每張比成人票少 40 元。買 2 張成人票與 3 張兒童票共 720 元。成人票多少元？",
    "choices": [
      "120",
      "168",
      "144",
      "200"
    ],
    "answerIndex": 1,
    "explanation": "成人票每張 x 元，兒童票每張比成人票少 40 元，所以為 x－40 元。兩張成人票與三張兒童票共 720 元，列 2x＋3(x－40)＝720。化簡為 5x－120＝720，得 5x＝840、x＝168。兒童票一百二十八元，總額驗算成立。",
    "steps": [
      "用 x 與 x－40 表示成人票和兒童票單價。",
      "依票數列 2x＋3(x－40)＝720。",
      "解得成人票一百六十八元，算出兒童票並驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "120",
        "truth": false,
        "reason": "把720除6。"
      },
      {
        "choice": "168",
        "truth": true,
        "reason": "2x+3(x-40)=720，5x-120=720，5x=840，所以x=168。 因此此選項符合題目。"
      },
      {
        "choice": "144",
        "truth": false,
        "reason": "折價40只扣一次。"
      },
      {
        "choice": "200",
        "truth": false,
        "reason": "忽略兒童票折價。"
      }
    ],
    "commonMistake": "兒童票有三張卻只扣一次四十元，會漏算另外兩張兒童票各自的價差。",
    "concept": "每張兒童票都少40元。",
    "tags": [
      "代數",
      "金錢問題",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-age-problem"
    ],
    "authoringIntent": "整合兩種票價與價差。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "fd94197bf7b42a4b9992ab81560dfb67feb6978546a2cce452276b02fdc3e5c6",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s009-v006",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-money-problem",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "共有 12 枚硬幣，其中 x 枚是 50 元，其餘是 10 元，總值 360 元。x 是多少？",
    "choices": [
      "4",
      "8",
      "6",
      "9"
    ],
    "answerIndex": 2,
    "explanation": "若 50 元硬幣有 x 枚，其餘 12－x 枚是 10 元硬幣。依總值列 50x＋10(12－x)＝360，展開得 50x＋120－10x＝360，即 40x＝240，故 x＝6。其餘也有六枚，總值三百加六十正好等於三百六十元整。",
    "steps": [
      "用 x 與 12－x 表示兩種硬幣枚數。",
      "依面額總值列 50x＋10(12－x)＝360。",
      "化簡求得 x＝6，核對枚數和與金額和。"
    ],
    "optionAnalysis": [
      {
        "choice": "4",
        "truth": false,
        "reason": "只用360÷90。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "把12枚平均分。"
      },
      {
        "choice": "6",
        "truth": true,
        "reason": "50x+10(12-x)=360，展開40x+120=360，40x=240，所以x=6。 因此此選項符合題目。"
      },
      {
        "choice": "9",
        "truth": false,
        "reason": "忽略10元硬幣的價值。"
      }
    ],
    "commonMistake": "只計五十元硬幣的價值，忽略其餘十元硬幣仍會貢獻總金額。",
    "concept": "其餘數量以總數減未知數表示。",
    "tags": [
      "代數",
      "金錢問題",
      "standard"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-age-problem"
    ],
    "authoringIntent": "用一個未知數表示兩類硬幣。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "f1238854caa8a3eb46276e201884a3626fe7b7461a885cf3d9dcd4da031a525b",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s009-v007",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-money-problem",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "7 人平均分攤餐費，每人原應付 x 元；使用 105 元折價券後共付 595 元。x 是多少？",
    "choices": [
      "70",
      "85",
      "115",
      "100"
    ],
    "answerIndex": 3,
    "explanation": "每人原應付 x 元，七人原餐費是 7x 元。整筆使用一次 105 元折價券後共付 595 元，因此 7x－105＝595。兩邊加 105 得 7x＝700，再除以 7 得 x＝100。驗算原餐費七百元，扣券後確為五百九十五元。",
    "steps": [
      "用 7x 表示七人折價前的總餐費。",
      "整筆折價只扣一次，列 7x－105＝595。",
      "解得每人原應付一百元，代回折價後總額。"
    ],
    "optionAnalysis": [
      {
        "choice": "70",
        "truth": false,
        "reason": "把595÷7未加回折價。"
      },
      {
        "choice": "85",
        "truth": false,
        "reason": "把折價券平均後直接扣。"
      },
      {
        "choice": "115",
        "truth": false,
        "reason": "把105當每人折扣。"
      },
      {
        "choice": "100",
        "truth": true,
        "reason": "7x-105=595，7x=700，所以x=100。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "把一百零五元折價券當成每人都折一百零五元，會把整筆折扣重複七次。",
    "concept": "折價券作用於總額。",
    "tags": [
      "代數",
      "金錢問題",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-age-problem"
    ],
    "authoringIntent": "由折價後總額回推原分攤額。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8932f3ca4bdaa34b172e379f3e9227f3c622e677653a661a55efe0ae0152cf78",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s009-v008",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-money-problem",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "原有 350 元，每週存 x 元，8 週後共有 950 元。每週存多少元？",
    "choices": [
      "75",
      "50",
      "100",
      "162.5"
    ],
    "answerIndex": 0,
    "explanation": "原有 350 元是起始金額，八週每週存 x 元後增加 8x 元，因此列 350＋8x＝950。兩邊減 350 得 8x＝600，再除以 8 得 x＝75。驗算八週共存六百元，加原有三百五十元正好九百五十元。",
    "steps": [
      "用 8x 表示八週新增的存款。",
      "起始金額加新增存款，列 350＋8x＝950。",
      "解得每週七十五元，代回八週總額驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "75",
        "truth": true,
        "reason": "350+8x=950，8x=600，所以x=75。 因此此選項符合題目。"
      },
      {
        "choice": "50",
        "truth": false,
        "reason": "把600除12。"
      },
      {
        "choice": "100",
        "truth": false,
        "reason": "直接950÷8。"
      },
      {
        "choice": "162.5",
        "truth": false,
        "reason": "把原有350平均進每週。"
      }
    ],
    "commonMistake": "把原有三百五十元也平均分進八週，混淆起始金額與每週新增金額。",
    "concept": "總額=初始+週數×每週金額。",
    "tags": [
      "代數",
      "金錢問題",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-age-problem"
    ],
    "authoringIntent": "處理初始金額與固定週期儲蓄。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "6acd9cede5dec5342720b32efceb87e91e04635b1fdcae3091a4ce198ecf1e48",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s009-v009",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-money-problem",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "電費由基本費 120 元加上每度 2.5 元組成。帳單 320 元時，用電量是多少度？",
    "choices": [
      "50",
      "100",
      "80",
      "128"
    ],
    "answerIndex": 2,
    "explanation": "設用電量為 x 度，變動電費是每度 2.5 元乘 x，另加一次基本費 120 元，所以 120＋2.5x＝320。兩邊減 120 得 2.5x＝200，再除以 2.5 得 x＝80。驗算變動費二百元加基本費，帳單為三百二十元。",
    "steps": [
      "用 2.5x 表示依用電量計算的變動費。",
      "加入一次基本費，列 120＋2.5x＝320。",
      "解得八十度，代回兩部分費用驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "50",
        "truth": false,
        "reason": "把200÷4。"
      },
      {
        "choice": "100",
        "truth": false,
        "reason": "直接320÷3.2。"
      },
      {
        "choice": "80",
        "truth": true,
        "reason": "120+2.5x=320，2.5x=200，x=80。 因此此選項符合題目。"
      },
      {
        "choice": "128",
        "truth": false,
        "reason": "把120當用電度數。"
      }
    ],
    "commonMistake": "直接用帳單三百二十元除以每度單價，沒有先扣除不隨度數改變的基本費。",
    "concept": "先扣固定費再除單價。",
    "tags": [
      "代數",
      "金錢問題",
      "advanced"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-age-problem"
    ],
    "authoringIntent": "由固定費與單價求用量。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a3f2fabb869ce2cd753cbb4f4ab62f863ec6d6c04c7710e0f45119dc825e5f24",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s009-v010",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-money-problem",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "租借器材基本費 90 元，每小時 35 元。總費用 300 元時，租了幾小時？",
    "choices": [
      "5",
      "7",
      "8",
      "6"
    ],
    "answerIndex": 3,
    "explanation": "設租借 h 小時，每小時費用為 35h 元，另有一次基本費 90 元，故 90＋35h＝300。兩邊減 90 得 35h＝210，再除以 35 得 h＝6。驗算六小時費用二百一十元，加基本費九十元，總共三百元。",
    "steps": [
      "用 35h 表示按小時計算的租借費。",
      "加入一次基本費，列 90＋35h＝300。",
      "解得六小時，代回總費用驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "5",
        "truth": false,
        "reason": "35×5只有175。"
      },
      {
        "choice": "7",
        "truth": false,
        "reason": "35×7加基本費335。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "把300÷35取整。"
      },
      {
        "choice": "6",
        "truth": true,
        "reason": "90+35h=300，35h=210，所以h=6。 因此此選項符合題目。"
      }
    ],
    "commonMistake": "把總費用直接除以每小時三十五元，忽略其中九十元是只收一次的基本費。",
    "concept": "時間乘單價後再加基本費。",
    "tags": [
      "代數",
      "金錢問題",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-age-problem"
    ],
    "authoringIntent": "解含固定費的租借時間。",
    "literacyContextNecessity": "基本費與小時計費共同決定總費用，租借情境使未知數必須解釋為非負時間。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "dd460e4260677c69a84eec93c12529ae81d85cdd6f5e59f1f0e42527117cf182",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s009-v011",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-money-problem",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "健身課年費 600 元，每堂另收 80 元。全年共付 1240 元，參加幾堂？",
    "choices": [
      "8",
      "6",
      "10",
      "16"
    ],
    "answerIndex": 0,
    "explanation": "設參加 x 堂，每堂另收 80 元，所以課程費為 80x 元；年費 600 元只收一次。列 600＋80x＝1240，兩邊減 600 得 80x＝640，再除以 80 得 x＝8。驗算八堂六百四十元，加年費共一千二百四十元。",
    "steps": [
      "用 80x 表示 x 堂課的課程費。",
      "加入固定年費，列 600＋80x＝1240。",
      "解得八堂，代回年費與課程費總額。"
    ],
    "optionAnalysis": [
      {
        "choice": "8",
        "truth": true,
        "reason": "600+80x=1240，80x=640，x=8。 因此此選項符合題目。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "640÷100。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "直接1240÷80。"
      },
      {
        "choice": "16",
        "truth": false,
        "reason": "把年費當每堂費。"
      }
    ],
    "commonMistake": "直接用全年總額除以每堂八十元，把固定年費誤當成也能換算成上課堂數。",
    "concept": "固定年費不可平均成額外堂數。",
    "tags": [
      "代數",
      "金錢問題",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-age-problem"
    ],
    "authoringIntent": "由年費與單堂費求堂數。",
    "literacyContextNecessity": "固定年費與逐堂收費決定600+80x，堂數還必須為非負整數。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "b50e48b6843cd12e9a6b0b96f7dd41480127808a606278744968b35c680bca84",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s009-v012",
    "unitId": "u03",
    "numericUnitId": 3,
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-money-problem",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某人有 2400 元，買書花了總額的 3/8，再付 x 元交通費，最後剩 1050 元。交通費是多少？",
    "choices": [
      "300",
      "450",
      "600",
      "900"
    ],
    "answerIndex": 1,
    "explanation": "書費是總額 2400 元的 3/8，計算得 900 元。設交通費 x 元，原有金額扣書費與交通費後剩 1050 元，列 2400－900－x＝1050。化簡得 1500－x＝1050，所以 x＝450。驗算兩項支出合計一千三百五十元。",
    "steps": [
      "先算書費 2400×3/8＝900 元。",
      "依餘額列 2400－900－x＝1050。",
      "解得交通費四百五十元，核對總支出與餘額。"
    ],
    "optionAnalysis": [
      {
        "choice": "300",
        "truth": false,
        "reason": "把1050-900。"
      },
      {
        "choice": "450",
        "truth": true,
        "reason": "書費2400×3/8=900；2400-900-x=1050，所以x=450。 因此此選項符合題目。"
      },
      {
        "choice": "600",
        "truth": false,
        "reason": "把2400的1/4當交通費。"
      },
      {
        "choice": "900",
        "truth": false,
        "reason": "把書費900當交通費。"
      }
    ],
    "commonMistake": "把書費九百元直接當成交通費，或從餘額減書費，沒有依原有金額建立收支關係。",
    "concept": "先計算已知比例金額再列餘額式。",
    "tags": [
      "代數",
      "金錢問題",
      "literacy"
    ],
    "estimatedTimeSec": "75",
    "prerequisiteSkillIds": [
      "linear-equation-age-problem"
    ],
    "authoringIntent": "整合比例支出與未知支出。",
    "literacyContextNecessity": "總預算、書費比例與最後餘額三項資料缺一不可，情境直接決定交通費的方程式。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "4b15d78840d4ad0bfe3e4ed85be46bfb12aa86a9fa615e943ba10a5a82beb042",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u03-s009-cr001",
    "unitId": "u03",
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-money-problem",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "某商店買 6 件同價商品，使用整筆 120 元折價券後實付 960 元。求每件原價。",
    "requiredWork": [
      "整筆折價只扣一次。",
      "列6x-120=960。",
      "解並驗算。"
    ],
    "fullCreditSolution": [
      "設每件商品原價 x 元，六件原總價為 6x 元；整筆折價券只扣一次，所以列 6x－120＝960。",
      "等式兩邊同加 120，得到 6x＝1080；再同除以 6，求得 x＝180 元。",
      "驗算六件原總價為 1080 元，使用一次 120 元折價券後實付 960 元，完全符合。"
    ],
    "alternativeSolutions": [
      "可先把折價券加回，原總價1080元，再除6。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "方程式、單價180元與驗算完整。"
      },
      {
        "score": 2,
        "criteria": "答案正確但折價層級說明不足。"
      },
      {
        "score": 1,
        "criteria": "能算出原總價1080元。"
      },
      {
        "score": 0,
        "criteria": "把整筆折價誤乘6。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "把整筆一百二十元折價券視為每件都折一百二十元，會重複扣除六次。",
      "直接用實付九百六十元除以六，漏了應先加回的整筆折價金額。",
      "求到六件原總價一千零八十元便停止，沒有再除以六回答每件單價。"
    ],
    "independentReview": {
      "derivedResult": "180元",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "b54346086d8af2ef4bccbdc47974b8c299a0ae481602603c265257c800ffe08c",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  },
  {
    "questionId": "u03-s009-cr002",
    "unitId": "u03",
    "topicId": "u03-linear-equation-apps",
    "skillId": "linear-equation-money-problem",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "一場活動每張票 150 元，固定成本 3600 元，另有每位觀眾 20 元的材料成本。若淨收入為 4200 元，售出多少張票？",
    "requiredWork": [
      "每位淨貢獻為150-20。",
      "列收入減兩種成本。",
      "檢查票數為整數。"
    ],
    "fullCreditSolution": [
      "設售出 x 張票，票房收入為 150x 元，材料成本隨觀眾人數為 20x 元，另有固定成本 3600 元。",
      "依淨收入列 150x－20x－3600＝4200，合併後得 130x＝7800。",
      "兩邊同除以 130，求得 x＝60 張；票數是非負整數，符合情境。",
      "驗算收入九千元，扣材料一千二百元與固定成本三千六百元，淨收入四千二百元。"
    ],
    "alternativeSolutions": [
      "可先合併每人淨收入130元。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整列式、解60張並以收支驗算。"
      },
      {
        "score": 2,
        "criteria": "方法正確但一項成本漏在驗算。"
      },
      {
        "score": 1,
        "criteria": "能列130x-3600=4200。"
      },
      {
        "score": 0,
        "criteria": "收入與成本方向混亂。"
      }
    ],
    "scoringNotes": [
      "等價且完整的代數步驟可接受。",
      "若前一步算術錯誤但後續方法一致，可依規準給部分分。"
    ],
    "commonErrors": [
      "漏掉每位觀眾二十元材料成本，只用票房收入扣固定成本，會高估淨收入。",
      "把固定成本三千六百元也乘上票數，混淆一次性成本與每人變動成本。",
      "把淨收入四千二百元直接除以票價，沒有先把兩種成本納入收支方程式。"
    ],
    "independentReview": {
      "derivedResult": "60張",
      "ambiguity": "題意、單位與限制條件完整，依指定方法可得到唯一結果。",
      "decision": "pass"
    },
    "contentSha256": "c76a8390daec913f477ade674156a0a191227f30effab0653d766f4938a421b6",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "legacyContentDisposition": "replace-old-record-at-final-integration"
  }
];

export const DRAWING_SPECS = [];
