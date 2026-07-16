// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u12-s009-lecture-r1",
  "unitId": "u12",
  "numericUnitId": 12,
  "topicId": "u12-applications",
  "skillId": "factoring-word-area",
  "lockedSkillTitle": "面積式因式分解",
  "title": "面積式因式分解：從共同邊長讀出長乘寬",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能把長方形面積寫成長乘寬。",
    "能由分割面積找共同邊長。",
    "能由面積多項式求另一邊的代數式。",
    "能檢查邊長正值條件。",
    "能由因式求周長或比較設計。"
  ],
  "prerequisites": [
    {
      "skillId": "factoring-check-expand",
      "requiredLevel": "能運用前一技能並以展開驗證結果；本講義會重新連接必要步驟。"
    }
  ],
  "prerequisiteBridge": "先備技能為 factoring-check-expand；先確認能完成前一方法並保留所有符號，再進入本技能。",
  "glossary": [
    {
      "term": "面積模型",
      "definition": "用長方形分割表示分配律與因式分解。"
    },
    {
      "term": "共同邊長",
      "definition": "相鄰區塊共享的同一方向長度。"
    },
    {
      "term": "總面積",
      "definition": "各分區面積相加，也等於整體長乘寬。"
    },
    {
      "term": "尺寸限制",
      "definition": "實際長度必須大於 0。"
    }
  ],
  "notation": [
    {
      "symbol": "A=L×W",
      "meaning": "長方形面積等於長乘寬。"
    },
    {
      "symbol": "wx+wy=w(x+y)",
      "meaning": "兩區共享寬 w，總長為 x+y。"
    }
  ],
  "conceptNarrative": [
    "面積相加對應展開；把總面積寫成長乘寬對應因式分解。",
    "若各區共享高度，就可把高度提出，括號內是各區寬度的總和。",
    "二次三項式分解成兩個一次式時，可把兩因式解讀為整體長與寬。",
    "圖若未按比例，不能靠視覺判斷哪邊較長，必須依標示式子。",
    "面積多項式的因式分解可解讀為把總面積改寫成長乘寬：分割圖中共享的邊長就是公因式，括號則表示另一方向各段長度的和。若三項式分解成兩個一次因式，必須展開核對交叉項，不能只配首項與常數。得到尺寸後還要處理題目真正所求，例如周長或比較方案，並檢查每個邊長嚴格為正；面積用平方單位，邊長與周長則用長度單位。"
  ],
  "formalDefinitions": [
    {
      "name": "面積式因式分解",
      "statement": "將面積多項式分解為可作為長與寬的因式，並檢查其正值條件。"
    }
  ],
  "formulas": [
    {
      "formula": "A=L×W",
      "conditions": [
        "L>0、W>0"
      ],
      "meaning": "長方形面積。"
    },
    {
      "formula": "wx+wy=w(x+y)",
      "conditions": [
        "兩區共享邊長 w"
      ],
      "meaning": "分割面積合併。"
    }
  ],
  "nonApplicableCases": [
    "因式為負時不能直接當實際長度。",
    "圖形未按比例時不能用目測取代代數。",
    "不同方向的邊長不能誤當共同邊長提出。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "確認每個面積項對應哪一塊。",
      "check": "標出共享方向。"
    },
    {
      "step": 2,
      "instruction": "找所有區塊共同邊長。",
      "check": "它是可提出的因式。"
    },
    {
      "step": 3,
      "instruction": "把各區另一邊相加。",
      "check": "形成括號。"
    },
    {
      "step": 4,
      "instruction": "若為三項式，選擇能乘回面積的兩因式。",
      "check": "核對交叉項。"
    },
    {
      "step": 5,
      "instruction": "檢查邊長正值並回答周長等後續問題。",
      "check": "不要停在分解式。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "兩區面積為8x²與12x，共同高4x，求總寬。",
      "solutionSteps": [
        "第一區寬為8x²除以4x，得到2x。",
        "第二區寬為12x除以4x，得到3。",
        "兩區並排，總寬為2x＋3。"
      ],
      "answer": "總寬2x＋3",
      "why": "共同高度4x是兩個面積項的公因式，提出後括號直接表示兩段寬的和；面積除以高度得到的是長度，不能把整個乘積當成寬。"
    },
    {
      "exampleId": "L2",
      "prompt": "面積x²＋7x＋10可對應哪些邊長？",
      "solutionSteps": [
        "列出常數十的正因數配對。",
        "選取乘積為10且和為7的2與5。",
        "寫成(x＋2)(x＋5)並展開回查。"
      ],
      "answer": "邊長可為x＋2與x＋5",
      "why": "常數因數的乘積只決定常數項，兩數的和還必須符合一次項係數；展開回查三個係數，才能確認尺寸乘積確實等於面積。"
    },
    {
      "exampleId": "L3",
      "prompt": "面積6x²＋13x＋6可對應哪些整數係數邊長？",
      "solutionSteps": [
        "將首項配為3x與2x，常數配為2與3。",
        "交叉項為9x與4x，合併為13x。",
        "因此分解為(3x＋2)(2x＋3)。"
      ],
      "answer": "邊長可為3x＋2與2x＋3",
      "why": "非首一三項式必須同時配首項、常數與交叉項；交叉和九x加四x恰為十三x，展開後才與原面積逐項吻合。"
    },
    {
      "exampleId": "L4",
      "prompt": "面積2x²－8且一邊為2(x－2)，求另一邊與可行範圍。",
      "solutionSteps": [
        "分解2x²－8＝2(x－2)(x＋2)。",
        "對照已知因式，另一邊為x＋2。",
        "由2(x－2)＞0得x＞2，此時另一邊也為正。"
      ],
      "answer": "另一邊x＋2，且x＞2",
      "why": "代數約分只能排除x等於二，但長方形還要求已知邊嚴格大於零，因此限制要加強為x大於二，並以公尺作邊長單位。"
    }
  ],
  "difficultyConnections": {
    "basic": "辨認單一結構並完成直接分解。",
    "standard": "結合符號、係數或兩步驟方法。",
    "advanced": "比較策略、處理參數或驗證限制。",
    "literacy": "從必要情境建立或解讀乘積結構。"
  },
  "commonMistakes": [
    {
      "mistake": "把面積項直接相加當邊長。",
      "why": "混淆面積與長度。",
      "correction": "先除以共同邊長。"
    },
    {
      "mistake": "忽略單位平方。",
      "why": "面積單位與長度不同。",
      "correction": "面積用平方單位，邊長用長度單位。"
    },
    {
      "mistake": "因式負也當長度。",
      "why": "只做代數不查情境。",
      "correction": "加入變數範圍。"
    },
    {
      "mistake": "依圖目測因式。",
      "why": "圖可能不按比例。",
      "correction": "依標示運算。"
    },
    {
      "mistake": "只找首尾乘積。",
      "why": "中間面積不吻合。",
      "correction": "展開查交叉項。"
    },
    {
      "mistake": "求周長時只加兩邊。",
      "why": "忘記相對邊。",
      "correction": "周長為 2(L+W)。"
    }
  ],
  "selfCheck": [
    "我是否先判斷可用的方法？",
    "每一項、每個符號與外層因式都保留了嗎？",
    "我是否把結果展開回原式？",
    "情境中的單位與變數限制是否合理？"
  ],
  "summary": [
    "面積和對應展開，長乘寬對應因式分解。",
    "共同邊長是公因式。",
    "實際尺寸要檢查正值與單位。"
  ],
  "connections": {
    "previous": "承接 factoring-check-expand。",
    "next": "依鎖定順序銜接下一技能；本單元不提前使用一元二次方程式解根。"
  },
  "figureReferences": [
    {
      "figureId": "u12-fig-common-area",
      "purpose": "由共同邊長讀出另一尺寸。",
      "altText": "共享高度的兩個面積區塊。"
    },
    {
      "figureId": "u12-fig-group-wall",
      "purpose": "由四區面積還原整體長寬。",
      "altText": "四區拼接長方形。"
    }
  ],
  "practiceLinks": {
    "mcQuestionIds": [
      "u12-s009-v001",
      "u12-s009-v002",
      "u12-s009-v003",
      "u12-s009-v004",
      "u12-s009-v005",
      "u12-s009-v006",
      "u12-s009-v007",
      "u12-s009-v008",
      "u12-s009-v009",
      "u12-s009-v010",
      "u12-s009-v011",
      "u12-s009-v012"
    ],
    "constructedResponseIds": [
      "u12-s009-cr001",
      "u12-s009-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "四個面積例分別以除法與展開重算，並檢查長度正值、平方單位和不按比例警告；圖形資訊不洩漏答案。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
  "contentSha256": "d06dca55dbf9022f23e4ab88f812e5272f7e2fa2a4eb270bad11fa2dc7f547fc"
};

export const QUESTIONS = [
  {
    "questionId": "u12-s009-v001",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-word-area",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "長方形面積為 12x²+18x 平方公分，高為 6x 公分。寬為何？",
    "givenConditions": [
      "x>0。"
    ],
    "target": "提出共同高度並讀出另一因式。",
    "choices": [
      "2x+3 公分",
      "6x+30 公分",
      "2x+18 公分",
      "12x+18 公分"
    ],
    "answerIndex": 0,
    "independentSolution": "6x(2x+3)=原面積。",
    "explanation": "總面積除以高 6x，得到 2x+3。 長方形面積等於高乘寬，因此將12x²＋18x提出共同因式6x，可得6x(2x＋3)。題目已給高為6x，所以另一因式2x＋3就是寬，單位由平方公分除以公分成為公分。",
    "steps": [
      "提出 6x。",
      "逐項相除。",
      "檢查長度單位。"
    ],
    "optionAnalysis": [
      {
        "choice": "2x+3 公分",
        "truth": true,
        "reason": "12x²+18x=6x(2x+3)。"
      },
      {
        "choice": "6x+30 公分",
        "truth": false,
        "reason": "除法錯誤。"
      },
      {
        "choice": "2x+18 公分",
        "truth": false,
        "reason": "第二項 18x÷6x=3。"
      },
      {
        "choice": "12x+18 公分",
        "truth": false,
        "reason": "把面積係數直接當長度。"
      }
    ],
    "misconceptionTarget": "把面積項直接相加成邊長。 把兩個面積項直接相加當作邊長，沒有除以共同高度。",
    "prerequisiteCheck": "需會提公因式與面積公式。",
    "estimatedTimeSec": 75,
    "unitAndRoundingChecks": "平方公分÷公分=公分；x>0 避免高為 0。",
    "ambiguityAndBoundaryAudit": "圖形不需按比例，依代數標示。",
    "difficultyReason": "基本共同邊長模型。",
    "literacyContextNecessity": null,
    "authoringIntent": "由面積求寬。",
    "concept": "面積除以共同邊",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "面積式因式分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "c4a09e06ee242a65acaa0e8489f0ed825d35c6655a8726c7c4dc78fbf0877af4"
  },
  {
    "questionId": "u12-s009-v002",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-word-area",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "面積 x²+6x+8 平方公尺可表示為哪兩個邊長的乘積？",
    "givenConditions": [
      "x>0。"
    ],
    "target": "分解首一二次三項式。",
    "choices": [
      "x+1 與 x+8 公尺",
      "x-2 與 x-4 公尺",
      "x+3 與 x+3 公尺",
      "x+2 與 x+4 公尺"
    ],
    "answerIndex": 3,
    "independentSolution": "兩邊相乘回原面積。",
    "explanation": "x²+6x+8=(x+2)(x+4)。 要分解x²＋6x＋8，找乘積為8且和為6的兩數，得到2與4，所以面積可寫成(x＋2)(x＋4)。兩因式可解讀為邊長，乘回後三個係數都與原式一致。",
    "steps": [
      "找 8 的因數。",
      "選和為 6 的 2、4。",
      "檢查正值。"
    ],
    "optionAnalysis": [
      {
        "choice": "x+1 與 x+8 公尺",
        "truth": false,
        "reason": "中間項為 9x。"
      },
      {
        "choice": "x-2 與 x-4 公尺",
        "truth": false,
        "reason": "中間項為 -6x。"
      },
      {
        "choice": "x+3 與 x+3 公尺",
        "truth": false,
        "reason": "面積為 x²+6x+9，常數多 1。"
      },
      {
        "choice": "x+2 與 x+4 公尺",
        "truth": true,
        "reason": "2·4=8，2+4=6。"
      }
    ],
    "misconceptionTarget": "只看常數乘積為八，沒有同時檢查兩數相加必須等於六。",
    "prerequisiteCheck": "需會首一分解。",
    "estimatedTimeSec": 75,
    "unitAndRoundingChecks": "邊長公尺，面積平方公尺。",
    "ambiguityAndBoundaryAudit": "長寬交換視為同一組，四個選項中只有 x+2、x+4 的乘積吻合。",
    "difficultyReason": "基礎面積三項式。",
    "literacyContextNecessity": null,
    "authoringIntent": "由面積找尺寸。",
    "concept": "三項式尺寸",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "面積式因式分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "85cd39f1de7de3b29402d6f8a84fd1fe97d10496a2f9abea8150a3f87e834697"
  },
  {
    "questionId": "u12-s009-v003",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-word-area",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "一長方形由兩個並排區塊組成，共同高為 5 公分，兩區寬分別為 x、3 公分。總面積的因式形式為何？",
    "givenConditions": [
      "x>0。"
    ],
    "target": "用共同高乘總寬。",
    "choices": [
      "5x+3 平方公分",
      "5(x+3) 平方公分",
      "5x+15x 平方公分",
      "(5+x)3 平方公分"
    ],
    "answerIndex": 1,
    "independentSolution": "因式形式直接顯示整體高與總寬。",
    "explanation": "兩區面積 5x、15，相加為 5x+15=5(x+3)。 左區面積是共同高5乘寬x，右區面積是5乘3，因此總面積為5x＋15。提出共同高度5後得到5(x＋3)，括號中的x＋3正是兩區並排後的總寬。",
    "steps": [
      "算各區面積。",
      "相加。",
      "提出共同高 5。"
    ],
    "optionAnalysis": [
      {
        "choice": "5x+3 平方公分",
        "truth": false,
        "reason": "第二區面積應為 15。"
      },
      {
        "choice": "5(x+3) 平方公分",
        "truth": true,
        "reason": "共同高 5 乘總寬 x+3。"
      },
      {
        "choice": "5x+15x 平方公分",
        "truth": false,
        "reason": "把第二區固定寬 3 誤乘成 3x。"
      },
      {
        "choice": "(5+x)3 平方公分",
        "truth": false,
        "reason": "改變了幾何尺寸。"
      }
    ],
    "misconceptionTarget": "把高度只乘第一區。 共同高度只乘第一區寬，遺漏右區的十五平方公分面積。",
    "prerequisiteCheck": "需知道長方形面積。",
    "estimatedTimeSec": 75,
    "unitAndRoundingChecks": "5 與 x+3 為公分，乘積平方公分。",
    "ambiguityAndBoundaryAudit": "四選項互異，只有共同高乘總寬的形式正確。",
    "difficultyReason": "從分割圖建立分配律。",
    "literacyContextNecessity": null,
    "authoringIntent": "把圖形分割翻成因式。",
    "concept": "分配律面積模型",
    "tags": [
      "代數",
      "因式分解",
      "basic",
      "面積式因式分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "fba9e6fc4a6369600fe43f9fbe781cbd972528fb1114f5fa79ea629ca8231188"
  },
  {
    "questionId": "u12-s009-v004",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-word-area",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "長方形面積為 6x²+13x+6 平方公尺，其整數係數邊長可能為何？",
    "givenConditions": [
      "x>0。"
    ],
    "target": "非首一二次式分解。",
    "choices": [
      "6x+1 與 x+6 公尺",
      "3x+3 與 2x+2 公尺",
      "3x+2 與 2x+3 公尺",
      "6x+3 與 x+2 公尺"
    ],
    "answerIndex": 2,
    "independentSolution": "兩邊乘回面積式。",
    "explanation": "6x²+13x+6=(3x+2)(2x+3)。 首項6x²可配成3x與2x，常數6配成2與3；交叉項為9x＋4x＝13x，所以(3x＋2)(2x＋3)展開後恰為6x²＋13x＋6，三個係數全部吻合，兩因式可作為長方形的兩個實際邊長。",
    "steps": [
      "配首項 3x、2x。",
      "配常數 2、3。",
      "核對交叉和。"
    ],
    "optionAnalysis": [
      {
        "choice": "6x+1 與 x+6 公尺",
        "truth": false,
        "reason": "中間項 37x。"
      },
      {
        "choice": "3x+3 與 2x+2 公尺",
        "truth": false,
        "reason": "中間項 12x，常數 6。"
      },
      {
        "choice": "3x+2 與 2x+3 公尺",
        "truth": true,
        "reason": "交叉和與首末乘積都正確。"
      },
      {
        "choice": "6x+3 與 x+2 公尺",
        "truth": false,
        "reason": "展開中間項為 15x，且兩因式有共同 3 的配置不符。"
      }
    ],
    "misconceptionTarget": "只配出首項與常數，沒有核對兩個交叉乘積的和是否為十三x。",
    "prerequisiteCheck": "需會十字交乘。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "邊長公尺，面積平方公尺。",
    "ambiguityAndBoundaryAudit": "長寬可交換但只列同一組一次；其餘乘積係數不同。",
    "difficultyReason": "標準非首一面積尺寸。",
    "literacyContextNecessity": null,
    "authoringIntent": "由非首一面積式找邊長。",
    "concept": "非首一面積",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "面積式因式分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "85f22d3e5ca5c640a3d4dfff73fb4ec93debdd8888dd87d96c8d8673f677035a"
  },
  {
    "questionId": "u12-s009-v005",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-word-area",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "面積 2x²-8 平方公尺，已知一邊為 2(x-2) 公尺，另一邊為何？",
    "givenConditions": [
      "x>2。"
    ],
    "target": "完整分解平方差並約出已知邊。",
    "choices": [
      "x+2 公尺",
      "x-2 公尺",
      "2x+2 公尺",
      "x²+4 公尺"
    ],
    "answerIndex": 0,
    "independentSolution": "x>2 使兩邊均正。",
    "explanation": "把面積分解為已知邊 2(x-2) 乘 x+2。 先提出公因式2，得2(x²－4)，再用平方差分解為2(x－2)(x＋2)。已知一邊是2(x－2)，因此另一邊為x＋2公尺；實際長方形還需x大於2。",
    "steps": [
      "先提 2。",
      "套平方差。",
      "對照已知因式。"
    ],
    "optionAnalysis": [
      {
        "choice": "x+2 公尺",
        "truth": true,
        "reason": "2x²-8=2(x²-4)=2(x-2)(x+2)。"
      },
      {
        "choice": "x-2 公尺",
        "truth": false,
        "reason": "會得到 2(x-2)²。"
      },
      {
        "choice": "2x+2 公尺",
        "truth": false,
        "reason": "多出係數 2。"
      },
      {
        "choice": "x²+4 公尺",
        "truth": false,
        "reason": "未形成正確乘積。"
      }
    ],
    "misconceptionTarget": "平方差或係數 2 遺失。 套平方差時把x加二因式漏掉，或把外面的公因式二遺失。",
    "prerequisiteCheck": "需會提公因式與平方差。",
    "estimatedTimeSec": 105,
    "unitAndRoundingChecks": "平方公尺除以公尺得公尺；無近似。",
    "ambiguityAndBoundaryAudit": "x>2 明確排除零或負邊長。",
    "difficultyReason": "兩步分解並檢查尺寸限制。",
    "literacyContextNecessity": null,
    "authoringIntent": "從已知一邊求另一邊。",
    "concept": "平方差尺寸",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "面積式因式分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "00c1ebbd6cf24f8c1ba4d6b7e205c8192be0d246974508b50af426a04d25d36e"
  },
  {
    "questionId": "u12-s009-v006",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-word-area",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "長方形邊長為 x+3 與 x+7 公尺，若只給展開面積，應是哪一式？",
    "givenConditions": [
      "x>0。"
    ],
    "target": "展開作反向檢查。",
    "choices": [
      "x²+21x+10",
      "x²+4x+21",
      "x²+7x+21 平方公尺",
      "x²+10x+21 平方公尺"
    ],
    "answerIndex": 3,
    "independentSolution": "反向分解也可由 3+7=10、3·7=21 確認。",
    "explanation": "(x+3)(x+7)=x²+10x+21。 長方形面積為兩邊相乘：(x＋3)(x＋7)＝x²＋7x＋3x＋21＝x²＋10x＋21。一次項係數來自3與7的和，常數21來自兩常數的乘積，最後答案應使用面積單位平方公尺。",
    "steps": [
      "展開四項。",
      "合併一次項。",
      "附面積單位。"
    ],
    "optionAnalysis": [
      {
        "choice": "x²+21x+10",
        "truth": false,
        "reason": "把和與積對調。"
      },
      {
        "choice": "x²+4x+21",
        "truth": false,
        "reason": "把邊長差當中間係數。"
      },
      {
        "choice": "x²+7x+21 平方公尺",
        "truth": false,
        "reason": "漏掉另一個交叉項 3x。"
      },
      {
        "choice": "x²+10x+21 平方公尺",
        "truth": true,
        "reason": "交叉項 7x+3x=10x，常數 21。"
      }
    ],
    "misconceptionTarget": "把常數和與積顛倒。 把三與七的和、積對調，造成一次項係數或常數項錯置。",
    "prerequisiteCheck": "需會展開。",
    "estimatedTimeSec": 90,
    "unitAndRoundingChecks": "邊長公尺相乘為平方公尺。",
    "ambiguityAndBoundaryAudit": "四個面積式互異，只有一次項係數 10、常數 21 同時吻合。",
    "difficultyReason": "連接邊長乘積與面積三項式。",
    "literacyContextNecessity": null,
    "authoringIntent": "從尺寸生成面積式。",
    "concept": "尺寸展開",
    "tags": [
      "代數",
      "因式分解",
      "standard",
      "面積式因式分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "60a658dee3953e247d752b86e6b96575326dcd9577dcf227ff54896492afe1b5"
  },
  {
    "questionId": "u12-s009-v007",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-word-area",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某長方形面積為 x²+9x+20，周長應以哪個式子表示？",
    "givenConditions": [
      "x>0；邊長為整數常數偏移的一次式。"
    ],
    "target": "先分解面積再求周長。",
    "choices": [
      "2x+9 公尺",
      "4x+18 公尺",
      "4x+9 公尺",
      "2x+20 公尺"
    ],
    "answerIndex": 1,
    "independentSolution": "周長單位為公尺，不是平方公尺。",
    "explanation": "20 因數 4、5，和 9；邊長 x+4、x+5。 面積式分解為(x＋4)(x＋5)，所以兩邊長為x＋4與x＋5。周長是兩倍的長寬和，故2[(x＋4)＋(x＋5)]＝2(2x＋9)＝4x＋18公尺；結果是長度而不是面積，單位應使用公尺。",
    "steps": [
      "分解面積。",
      "求長寬和 2x+9。",
      "乘 2 得周長。"
    ],
    "optionAnalysis": [
      {
        "choice": "2x+9 公尺",
        "truth": false,
        "reason": "只算長寬和，漏乘 2。"
      },
      {
        "choice": "4x+18 公尺",
        "truth": true,
        "reason": "面積=(x+4)(x+5)，周長 2[(x+4)+(x+5)]=4x+18。"
      },
      {
        "choice": "4x+9 公尺",
        "truth": false,
        "reason": "常數部分漏倍增。"
      },
      {
        "choice": "2x+20 公尺",
        "truth": false,
        "reason": "把面積常數直接放入周長。"
      }
    ],
    "misconceptionTarget": "分解後停在邊長或漏周長倍數。 分解出兩個邊長後便停止，或求周長時忘記長寬和還要乘二。",
    "prerequisiteCheck": "需會面積分解與周長公式。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "面積平方公尺，邊長與周長公尺。",
    "ambiguityAndBoundaryAudit": "x>0 使邊長正；長寬交換不影響周長。",
    "difficultyReason": "多步幾何應用。",
    "literacyContextNecessity": null,
    "authoringIntent": "由面積推周長。",
    "concept": "面積到周長",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "面積式因式分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "2d4f45f657cf476d7acfa4d7036573b2b80e9444e3635dece607c0761d6694c4"
  },
  {
    "questionId": "u12-s009-v008",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-word-area",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "面積式 3x²-12x 可分解為 3x(x-4)。若要作為長方形兩邊，x 的範圍至少應滿足何者？",
    "givenConditions": [
      "以 3x 與 x-4 為邊長。"
    ],
    "target": "使兩個邊長都為正。",
    "choices": [
      "x>0",
      "x≥4",
      "x>4",
      "x<0"
    ],
    "answerIndex": 2,
    "independentSolution": "x>4 同時滿足兩條件。",
    "explanation": "實際長方形邊長必須嚴格大於 0。 兩個邊長因式是3x與x－4。實際長方形要求兩邊都嚴格大於零：3x＞0給x＞0，x－4＞0給x＞4，取共同範圍後得到x＞4，零邊長不可接受。",
    "steps": [
      "列 3x>0。",
      "列 x-4>0。",
      "取共同範圍 x>4。"
    ],
    "optionAnalysis": [
      {
        "choice": "x>0",
        "truth": false,
        "reason": "不足以保證 x-4 正。"
      },
      {
        "choice": "x≥4",
        "truth": false,
        "reason": "x=4 時一邊為 0，不成長方形。"
      },
      {
        "choice": "x>4",
        "truth": true,
        "reason": "3x>0 要 x>0；x-4>0 要 x>4，合併得 x>4。"
      },
      {
        "choice": "x<0",
        "truth": false,
        "reason": "3x 為負。"
      }
    ],
    "misconceptionTarget": "只檢查一個因式，或允許零邊長。 只檢查三x為正，或把x等於四造成的零邊長也列為可行。",
    "prerequisiteCheck": "需理解正長度與簡單不等式。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "邊長公尺；不涉及近似。",
    "ambiguityAndBoundaryAudit": "嚴格大於 0，邊界 x=4 明確排除。",
    "difficultyReason": "將代數因式轉為尺寸不等式。",
    "literacyContextNecessity": null,
    "authoringIntent": "檢查因式的幾何可行範圍。",
    "concept": "尺寸定義域",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "面積式因式分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "e98aa6623fb112cd544a79e9e44fc9ad9add5e6ad90575f6ba20820c9fae10e3"
  },
  {
    "questionId": "u12-s009-v009",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-word-area",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩個長方形面積都為 2x²+7x+3。甲標示邊長 (2x+1)、(x+3)；乙標示 (2x+3)、(x+1)。哪個標示正確？",
    "givenConditions": [
      "x>0。"
    ],
    "target": "分別展開比對面積。",
    "choices": [
      "只有甲正確",
      "只有乙正確",
      "兩者都正確",
      "兩者都不正確"
    ],
    "answerIndex": 0,
    "independentSolution": "只有甲的尺寸乘積符合面積。",
    "explanation": "甲=(2x+1)(x+3)=2x²+7x+3；乙=2x²+5x+3。 甲展開為2x²＋6x＋x＋3＝2x²＋7x＋3，完全符合面積；乙展開為2x²＋2x＋3x＋3＝2x²＋5x＋3，一次項係數不符，所以只有甲的尺寸標示正確，不能只核對首項與常數。",
    "steps": [
      "展開甲。",
      "展開乙。",
      "逐項比對。"
    ],
    "optionAnalysis": [
      {
        "choice": "只有甲正確",
        "truth": true,
        "reason": "甲中間項 6x+x=7x；乙中間項 2x+3x=5x。"
      },
      {
        "choice": "只有乙正確",
        "truth": false,
        "reason": "乙展開不符。"
      },
      {
        "choice": "兩者都正確",
        "truth": false,
        "reason": "兩組交叉和不同。"
      },
      {
        "choice": "兩者都不正確",
        "truth": false,
        "reason": "甲完全吻合。"
      }
    ],
    "misconceptionTarget": "只看首項與常數相同就判兩者都對。 只比較二次項與常數項相同，就誤認兩組尺寸都符合面積。",
    "prerequisiteCheck": "需會展開驗證。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "邊長公尺、面積平方公尺。",
    "ambiguityAndBoundaryAudit": "x>0 保證候選尺寸正，但不影響係數判斷。",
    "difficultyReason": "比較兩個相近尺寸配置。",
    "literacyContextNecessity": null,
    "authoringIntent": "審核尺寸標示。",
    "concept": "尺寸方案比較",
    "tags": [
      "代數",
      "因式分解",
      "advanced",
      "面積式因式分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "7cad28ace18a1759d1e06abc972962a55263150fd70b602916387a4dfa8016c8"
  },
  {
    "questionId": "u12-s009-v010",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-word-area",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "svg",
    "figureId": "u12-fig-common-area",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "校園花圃由中央長方形與側邊區組成，總面積為 8x²+20x 平方公尺，共同高度為 4x 公尺。若 x>0，總寬為何？",
    "givenConditions": [
      "兩區並排；共同高度 4x。"
    ],
    "target": "提出共同高度。",
    "choices": [
      "4x(2x+5) 公尺",
      "8x+20 公尺",
      "4x+5 公尺",
      "2x+5 公尺"
    ],
    "answerIndex": 3,
    "independentSolution": "圖示共享高，使公因式有明確幾何意義。",
    "explanation": "8x²+20x=4x(2x+5)，括號是總寬。 總面積8x²＋20x可提出共同高度4x，得到4x(2x＋5)。依面積等於高乘寬，括號中的2x＋5就是花圃總寬；面積單位除以高度公尺後，答案單位為公尺。",
    "steps": [
      "找共同高因式。",
      "逐區求寬。",
      "合併為總寬。"
    ],
    "optionAnalysis": [
      {
        "choice": "4x(2x+5) 公尺",
        "truth": false,
        "reason": "這是面積形式且單位錯。"
      },
      {
        "choice": "8x+20 公尺",
        "truth": false,
        "reason": "未除以高度。"
      },
      {
        "choice": "4x+5 公尺",
        "truth": false,
        "reason": "第一區寬應為 2x，不是 4x。"
      },
      {
        "choice": "2x+5 公尺",
        "truth": true,
        "reason": "8x²÷4x=2x，20x÷4x=5。"
      }
    ],
    "misconceptionTarget": "把總面積乘積當寬。 把整個面積乘積4x(2x＋5)直接當成寬，混淆面積與長度。",
    "prerequisiteCheck": "需會面積公式。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "平方公尺÷公尺=公尺。",
    "ambiguityAndBoundaryAudit": "選項互異；共同高 4x 由題幹指定，總寬唯一。",
    "difficultyReason": "文字與圖形共同決定因式意義。",
    "literacyContextNecessity": "共同高度是求總寬必要資訊，情境不可刪除。",
    "authoringIntent": "求花圃總寬。",
    "concept": "共同高花圃",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "面積式因式分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "69b85d8ec051fb0b54b539087111fad2a7222e66a01196bfa8c882fc710b06f0"
  },
  {
    "questionId": "u12-s009-v011",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-word-area",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "展覽攤位面積為 x²+12x+35 平方公尺，規格要求兩邊差 2 公尺。哪組尺寸符合？",
    "givenConditions": [
      "x>0。"
    ],
    "target": "分解並核對邊長差。",
    "choices": [
      "x+1 與 x+35 公尺",
      "x+5 與 x+7 公尺",
      "x+3 與 x+9 公尺",
      "x+6 與 x+6 公尺"
    ],
    "answerIndex": 1,
    "independentSolution": "代數與規格雙重確認。",
    "explanation": "面積分解為 (x+5)(x+7)，規格差值也吻合。 常數35的因數配對中，5與7的和為12，因此面積分解為(x＋5)(x＋7)。兩個邊長相差2公尺，也符合規格；面積條件與邊差條件必須同時通過。",
    "steps": [
      "列 35 因數配對。",
      "找和為 12 的 5、7。",
      "核對差 2。"
    ],
    "optionAnalysis": [
      {
        "choice": "x+1 與 x+35 公尺",
        "truth": false,
        "reason": "中間項 36x，差 34。"
      },
      {
        "choice": "x+5 與 x+7 公尺",
        "truth": true,
        "reason": "5·7=35、5+7=12，且差 2。"
      },
      {
        "choice": "x+3 與 x+9 公尺",
        "truth": false,
        "reason": "面積常數 27，且邊差 6。"
      },
      {
        "choice": "x+6 與 x+6 公尺",
        "truth": false,
        "reason": "面積常數 36，差 0。"
      }
    ],
    "misconceptionTarget": "只滿足面積或只滿足邊差。 只找到乘積為三十五的因數，沒有再檢查和為十二及邊長差為二。",
    "prerequisiteCheck": "需會首一分解。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "邊長公尺，面積平方公尺。",
    "ambiguityAndBoundaryAudit": "唯一同時滿足面積三項式與邊差 2 的尺寸組為 x+5、x+7。",
    "difficultyReason": "需同時使用面積式與額外尺寸限制。",
    "literacyContextNecessity": "規格「差 2」用來驗證分解所得尺寸是否符合實務需求。",
    "authoringIntent": "依面積與規格選尺寸。",
    "concept": "攤位規格",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "面積式因式分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "6c5b1f6754f9f9e547ba0455ee346d5f462a3745b43a10732764e1f32abe6313"
  },
  {
    "questionId": "u12-s009-v012",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-word-area",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "某地板設計面積為 4x²-25 平方公尺，想以兩個長方形尺寸因子呈現。何者正確？",
    "givenConditions": [
      "x>2.5，使 2x-5>0。"
    ],
    "target": "使用平方差。",
    "choices": [
      "4x+5 與 x-5 公尺",
      "2x-5 與 2x-5 公尺",
      "2x+5 與 2x-5 公尺",
      "4x-5 與 x+5 公尺"
    ],
    "answerIndex": 2,
    "independentSolution": "兩因式乘回原面積。",
    "explanation": "兩平方相減，取平方根 2x、5。 面積4x²－25可看成(2x)²－5²，依平方差公式分解為(2x＋5)(2x－5)。兩因式相乘會消去一次項並回到原面積；若作實際邊長，還需2x－5＞0。",
    "steps": [
      "辨認 (2x)²-5²。",
      "套平方差。",
      "用 x>2.5 檢查正長度。"
    ],
    "optionAnalysis": [
      {
        "choice": "4x+5 與 x-5 公尺",
        "truth": false,
        "reason": "交叉項不抵消。"
      },
      {
        "choice": "2x-5 與 2x-5 公尺",
        "truth": false,
        "reason": "會得到 4x²-20x+25。"
      },
      {
        "choice": "2x+5 與 2x-5 公尺",
        "truth": true,
        "reason": "平方差分解且兩邊在條件下為正。"
      },
      {
        "choice": "4x-5 與 x+5 公尺",
        "truth": false,
        "reason": "展開會出現一次項且首項係數為 4。"
      }
    ],
    "misconceptionTarget": "把平方差當差的平方。 把平方差誤寫成兩個相同因式，或將四x平方的平方根看成四x。",
    "prerequisiteCheck": "需會平方差。",
    "estimatedTimeSec": 120,
    "unitAndRoundingChecks": "邊長公尺相乘為平方公尺。",
    "ambiguityAndBoundaryAudit": "長寬交換屬同一組；其餘選項展開不符。",
    "difficultyReason": "情境中還需檢查較短邊正值。",
    "literacyContextNecessity": "地板尺寸必為正，題幹範圍讓代數因式可作實際邊長。",
    "authoringIntent": "用平方差呈現地板尺寸。",
    "concept": "平方差地板",
    "tags": [
      "代數",
      "因式分解",
      "literacy",
      "面積式因式分解"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "29731c4baf67b0477fdc4d7807561329cf240f6032df812daa2743d077373faf"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u12-s009-cr001",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-word-area",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "一長方形總面積為 12x²+30x 平方公尺，高為 6x 公尺，x>0。求寬與周長，並檢查單位。",
    "requiredWork": [
      "用因式分解求寬。",
      "使用周長公式。",
      "說明 x>0 的作用。",
      "正確標示公尺與平方公尺。"
    ],
    "fullCreditSolution": [
      "將總面積提出已知高度：12x²＋30x＝6x(2x＋5)，因此寬為2x＋5公尺。",
      "周長為兩倍的高寬和：2[6x＋(2x＋5)]＝2(8x＋5)＝16x＋10公尺。",
      "因x＞0，高6x為正且寬2x＋5也為正；面積使用平方公尺，寬、高與周長使用公尺。"
    ],
    "alternativeSolutions": [
      "可先分別以面積兩項除以 6x 求寬 2x+5，再求周長。"
    ],
    "reasoningSteps": [
      "用面積除以已知高度，辨認括號中的另一因式為寬。",
      "將高與寬代入周長公式2(長＋寬)，再合併同類項。",
      "檢查x的正值條件與面積、長度兩種單位是否正確。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "寬 2x+5、公尺；周長 16x+10、公尺；因式與單位、正值檢查完整。"
      },
      {
        "score": 2,
        "criteria": "寬正確且周長有一處算術或倍數小錯；或單位說明不完整。"
      },
      {
        "score": 1,
        "criteria": "能由面積提出 6x 求出寬，但未完成周長。"
      },
      {
        "score": 0,
        "criteria": "把面積式直接當寬，或周長使用平方單位且方法不可辨認。"
      }
    ],
    "partialCreditRules": [
      "周長若寫 2(8x+5) 亦正確。",
      "只求寬未回答周長最高 1 分。"
    ],
    "followThroughPolicy": "若寬因早期除法小錯，後續周長依其寬正確套 2(h+w)，可給跟隨分；單位仍獨立評分。",
    "unitAndNotationRules": [
      "面積：平方公尺。",
      "高、寬、周長：公尺。"
    ],
    "answerOnlyPolicy": "只給兩個答案無過程最高 2 分。",
    "commonErrors": [
      "周長只算高加寬，忘記相對兩邊所以沒有乘二。",
      "把由面積求得的寬仍寫成平方公尺，混淆面積與長度單位。"
    ],
    "independentReview": {
      "derivedResult": "寬 2x+5 公尺，周長 16x+10 公尺。",
      "ambiguity": "x>0 足以保證尺寸正，無需額外限制。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "81d6b59758a6f4b822f9e6787b69b972f069f8c891fa3545c7d74ae7967b6178"
  },
  {
    "questionId": "u12-s009-cr002",
    "unitId": "u12",
    "numericUnitId": 12,
    "topicId": "u12-applications",
    "skillId": "factoring-word-area",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "一長方形面積為 2x²-18 平方公尺，其中一邊標示為 2(x-3) 公尺。求另一邊，並找出 x 的可行範圍。",
    "requiredWork": [
      "完整分解面積。",
      "對照已知邊。",
      "求另一邊。",
      "使兩邊都大於 0。"
    ],
    "fullCreditSolution": [
      "先分解面積：2x²－18＝2(x²－9)＝2(x－3)(x＋3)。",
      "對照已知一邊2(x－3)，另一邊為x＋3公尺；將兩邊相乘可回到原面積。",
      "實際邊長都要大於零。2(x－3)＞0給x＞3，此時x＋3也為正，所以可行範圍是x＞3。"
    ],
    "alternativeSolutions": [
      "可先以面積除以 2(x-3)，在 x≠3 下約分得到 x+3，再把長度條件加強為 x>3。"
    ],
    "reasoningSteps": [
      "提出公因式二，再以平方差分解剩下的x平方減九。",
      "對照已知因式並約去後，確定另一邊為x加三。",
      "分別檢查兩個邊長嚴格為正，取交集得到可行範圍。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "得到另一邊 x+3 公尺，並清楚推得 x>3，完整區分分解與尺寸限制。"
      },
      {
        "score": 2,
        "criteria": "邊長正確但只寫 x≠3 或未完整說明正值；或有一處小錯。"
      },
      {
        "score": 1,
        "criteria": "能分解為 2(x-3)(x+3)，但未完成邊長與範圍。"
      },
      {
        "score": 0,
        "criteria": "寫成 2(x-3)² 或接受 x=3。"
      }
    ],
    "partialCreditRules": [
      "若只答 x≠3，代數約分合理但幾何限制不足，最高 2 分。",
      "另一邊單位必須為公尺。"
    ],
    "followThroughPolicy": "若平方差符號小錯但後續正值分析方法可辨認，可給 1 分；把零邊長視為可行不給範圍完整分。",
    "unitAndNotationRules": [
      "面積平方公尺，邊長公尺。",
      "範圍使用嚴格不等號。"
    ],
    "answerOnlyPolicy": "只答 x+3 且 x>3，無過程最高 2 分。",
    "commonErrors": [
      "只寫代數約分條件x不等於三，沒有加上實際邊長必須為正的限制。",
      "只檢查另一邊x加三為正，漏掉已知邊二乘x減三也要為正。"
    ],
    "independentReview": {
      "derivedResult": "另一邊 x+3 公尺，可行 x>3。",
      "ambiguity": "不要求解方程式，只處理尺寸不等式。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_ONLY_DURING_FINAL_INTEGRATION",
    "contentSha256": "de18a046c5441fb969a3c5240832d76bc663c7d60dd89a4bfc72f342c76a0fed"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u12-s009-v001",
    "unitId": "u12",
    "skillId": "factoring-word-area",
    "contentSha256": "c4a09e06ee242a65acaa0e8489f0ed825d35c6655a8726c7c4dc78fbf0877af4",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "6x(2x+3)=原面積。",
    "derivedAnswer": "2x+3 公分",
    "storedAnswer": "2x+3 公分",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「長方形面積為 12x²+18x 平方公分，高為 6x 公分。寬為何？」逐一展開或回代；正解「2x+3 公分」成立。「6x+30 公分」不成立：除法錯誤。；「2x+18 公分」不成立：第二項 18x÷6x=3。；「12x+18 公分」不成立：把面積係數直接當長度。",
      "undefinedSymbol": "題幹已給條件為「x>0。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「提出共同高度並讀出另一因式。」。",
      "unitConflict": "本題單位審查：平方公分÷公分=公分；x>0 避免高為 0。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；平方公分÷公分=公分；x>0 避免高為 0。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：圖形不需按比例，依代數標示。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「提出共同高度並讀出另一因式。」閱讀後，常見誤讀為「把面積項直接相加成邊長。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "基本共同邊長模型。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會提公因式與面積公式。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s009-v001：6x(2x+3)=原面積。 因此導出「2x+3 公分」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「提出共同高度並讀出另一因式。」，並特別排除「把面積項直接相加成邊長。」。難度理由是「基本共同邊長模型。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s009-v002",
    "unitId": "u12",
    "skillId": "factoring-word-area",
    "contentSha256": "85cd39f1de7de3b29402d6f8a84fd1fe97d10496a2f9abea8150a3f87e834697",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "兩邊相乘回原面積。",
    "derivedAnswer": "x+2 與 x+4 公尺",
    "storedAnswer": "x+2 與 x+4 公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「面積 x²+6x+8 平方公尺可表示為哪兩個邊長的乘積？」逐一展開或回代；正解「x+2 與 x+4 公尺」成立。「x+1 與 x+8 公尺」不成立：中間項為 9x。；「x-2 與 x-4 公尺」不成立：中間項為 -6x。；「x+3 與 x+3 公尺」不成立：面積為 x²+6x+9，常數多 1。",
      "undefinedSymbol": "題幹已給條件為「x>0。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「分解首一二次三項式。」。",
      "unitConflict": "本題單位審查：邊長公尺，面積平方公尺。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；邊長公尺，面積平方公尺。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：長寬交換視為同一組，四個選項中只有 x+2、x+4 的乘積吻合。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「分解首一二次三項式。」閱讀後，常見誤讀為「選項有重複正解，將修正。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "基礎面積三項式。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會首一分解。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s009-v002：兩邊相乘回原面積。 因此導出「x+2 與 x+4 公尺」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「分解首一二次三項式。」，並特別排除「選項有重複正解，將修正。」。難度理由是「基礎面積三項式。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s009-v003",
    "unitId": "u12",
    "skillId": "factoring-word-area",
    "contentSha256": "fba9e6fc4a6369600fe43f9fbe781cbd972528fb1114f5fa79ea629ca8231188",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "因式形式直接顯示整體高與總寬。",
    "derivedAnswer": "5(x+3) 平方公分",
    "storedAnswer": "5(x+3) 平方公分",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「一長方形由兩個並排區塊組成，共同高為 5 公分，兩區寬分別為 x、3 公分。總面積的因式形式為何？」逐一展開或回代；正解「5(x+3) 平方公分」成立。「5x+3 平方公分」不成立：第二區面積應為 15。；「5x+15x 平方公分」不成立：把第二區固定寬 3 誤乘成 3x。；「(5+x)3 平方公分」不成立：改變了幾何尺寸。",
      "undefinedSymbol": "題幹已給條件為「x>0。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「用共同高乘總寬。」。",
      "unitConflict": "本題單位審查：5 與 x+3 為公分，乘積平方公分。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；5 與 x+3 為公分，乘積平方公分。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：四選項互異，只有共同高乘總寬的形式正確。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「用共同高乘總寬。」閱讀後，常見誤讀為「把高度只乘第一區。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "從分割圖建立分配律。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需知道長方形面積。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s009-v003：因式形式直接顯示整體高與總寬。 因此導出「5(x+3) 平方公分」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「用共同高乘總寬。」，並特別排除「把高度只乘第一區。」。難度理由是「從分割圖建立分配律。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s009-v004",
    "unitId": "u12",
    "skillId": "factoring-word-area",
    "contentSha256": "85f22d3e5ca5c640a3d4dfff73fb4ec93debdd8888dd87d96c8d8673f677035a",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "兩邊乘回面積式。",
    "derivedAnswer": "3x+2 與 2x+3 公尺",
    "storedAnswer": "3x+2 與 2x+3 公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「長方形面積為 6x²+13x+6 平方公尺，其整數係數邊長可能為何？」逐一展開或回代；正解「3x+2 與 2x+3 公尺」成立。「6x+1 與 x+6 公尺」不成立：中間項 37x。；「3x+3 與 2x+2 公尺」不成立：中間項 12x，常數 6。；「6x+3 與 x+2 公尺」不成立：展開中間項為 15x，且兩因式有共同 3 的配置不符。",
      "undefinedSymbol": "題幹已給條件為「x>0。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「非首一二次式分解。」。",
      "unitConflict": "本題單位審查：邊長公尺，面積平方公尺。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；邊長公尺，面積平方公尺。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：長寬可交換但只列同一組一次；其餘乘積係數不同。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「非首一二次式分解。」閱讀後，常見誤讀為「選項含重複正解，將修正。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "標準非首一面積尺寸。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會十字交乘。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s009-v004：兩邊乘回面積式。 因此導出「3x+2 與 2x+3 公尺」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「非首一二次式分解。」，並特別排除「選項含重複正解，將修正。」。難度理由是「標準非首一面積尺寸。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s009-v005",
    "unitId": "u12",
    "skillId": "factoring-word-area",
    "contentSha256": "00c1ebbd6cf24f8c1ba4d6b7e205c8192be0d246974508b50af426a04d25d36e",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "x>2 使兩邊均正。",
    "derivedAnswer": "x+2 公尺",
    "storedAnswer": "x+2 公尺",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「面積 2x²-8 平方公尺，已知一邊為 2(x-2) 公尺，另一邊為何？」逐一展開或回代；正解「x+2 公尺」成立。「x-2 公尺」不成立：會得到 2(x-2)²。；「2x+2 公尺」不成立：多出係數 2。；「x²+4 公尺」不成立：未形成正確乘積。",
      "undefinedSymbol": "題幹已給條件為「x>2。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「完整分解平方差並約出已知邊。」。",
      "unitConflict": "本題單位審查：平方公尺除以公尺得公尺；無近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；平方公尺除以公尺得公尺；無近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：x>2 明確排除零或負邊長。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「完整分解平方差並約出已知邊。」閱讀後，常見誤讀為「平方差或係數 2 遺失。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "兩步分解並檢查尺寸限制。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會提公因式與平方差。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s009-v005：x>2 使兩邊均正。 因此導出「x+2 公尺」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「完整分解平方差並約出已知邊。」，並特別排除「平方差或係數 2 遺失。」。難度理由是「兩步分解並檢查尺寸限制。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s009-v006",
    "unitId": "u12",
    "skillId": "factoring-word-area",
    "contentSha256": "60a658dee3953e247d752b86e6b96575326dcd9577dcf227ff54896492afe1b5",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "反向分解也可由 3+7=10、3·7=21 確認。",
    "derivedAnswer": "x²+10x+21 平方公尺",
    "storedAnswer": "x²+10x+21 平方公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「長方形邊長為 x+3 與 x+7 公尺，若只給展開面積，應是哪一式？」逐一展開或回代；正解「x²+10x+21 平方公尺」成立。「x²+21x+10」不成立：把和與積對調。；「x²+4x+21」不成立：把邊長差當中間係數。；「x²+7x+21 平方公尺」不成立：漏掉另一個交叉項 3x。",
      "undefinedSymbol": "題幹已給條件為「x>0。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「展開作反向檢查。」。",
      "unitConflict": "本題單位審查：邊長公尺相乘為平方公尺。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；邊長公尺相乘為平方公尺。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：四個面積式互異，只有一次項係數 10、常數 21 同時吻合。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「展開作反向檢查。」閱讀後，常見誤讀為「把常數和與積顛倒。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "連接邊長乘積與面積三項式。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會展開。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s009-v006：反向分解也可由 3+7=10、3·7=21 確認。 因此導出「x²+10x+21 平方公尺」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「展開作反向檢查。」，並特別排除「把常數和與積顛倒。」。難度理由是「連接邊長乘積與面積三項式。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s009-v007",
    "unitId": "u12",
    "skillId": "factoring-word-area",
    "contentSha256": "2d4f45f657cf476d7acfa4d7036573b2b80e9444e3635dece607c0761d6694c4",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "周長單位為公尺，不是平方公尺。",
    "derivedAnswer": "4x+18 公尺",
    "storedAnswer": "4x+18 公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「某長方形面積為 x²+9x+20，周長應以哪個式子表示？」逐一展開或回代；正解「4x+18 公尺」成立。「2x+9 公尺」不成立：只算長寬和，漏乘 2。；「4x+9 公尺」不成立：常數部分漏倍增。；「2x+20 公尺」不成立：把面積常數直接放入周長。",
      "undefinedSymbol": "題幹已給條件為「x>0；邊長為整數常數偏移的一次式。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「先分解面積再求周長。」。",
      "unitConflict": "本題單位審查：面積平方公尺，邊長與周長公尺。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；面積平方公尺，邊長與周長公尺。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：x>0 使邊長正；長寬交換不影響周長。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「先分解面積再求周長。」閱讀後，常見誤讀為「分解後停在邊長或漏周長倍數。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "多步幾何應用。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會面積分解與周長公式。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s009-v007：周長單位為公尺，不是平方公尺。 因此導出「4x+18 公尺」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「先分解面積再求周長。」，並特別排除「分解後停在邊長或漏周長倍數。」。難度理由是「多步幾何應用。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s009-v008",
    "unitId": "u12",
    "skillId": "factoring-word-area",
    "contentSha256": "e98aa6623fb112cd544a79e9e44fc9ad9add5e6ad90575f6ba20820c9fae10e3",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "x>4 同時滿足兩條件。",
    "derivedAnswer": "x>4",
    "storedAnswer": "x>4",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「面積式 3x²-12x 可分解為 3x(x-4)。若要作為長方形兩邊，x 的範圍至少應滿足何者？」逐一展開或回代；正解「x>4」成立。「x>0」不成立：不足以保證 x-4 正。；「x≥4」不成立：x=4 時一邊為 0，不成長方形。；「x<0」不成立：3x 為負。",
      "undefinedSymbol": "題幹已給條件為「以 3x 與 x-4 為邊長。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「使兩個邊長都為正。」。",
      "unitConflict": "本題單位審查：邊長公尺；不涉及近似。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；邊長公尺；不涉及近似。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：嚴格大於 0，邊界 x=4 明確排除。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「使兩個邊長都為正。」閱讀後，常見誤讀為「只檢查一個因式，或允許零邊長。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "將代數因式轉為尺寸不等式。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需理解正長度與簡單不等式。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s009-v008：x>4 同時滿足兩條件。 因此導出「x>4」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「使兩個邊長都為正。」，並特別排除「只檢查一個因式，或允許零邊長。」。難度理由是「將代數因式轉為尺寸不等式。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s009-v009",
    "unitId": "u12",
    "skillId": "factoring-word-area",
    "contentSha256": "7cad28ace18a1759d1e06abc972962a55263150fd70b602916387a4dfa8016c8",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "只有甲的尺寸乘積符合面積。",
    "derivedAnswer": "只有甲正確",
    "storedAnswer": "只有甲正確",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「兩個長方形面積都為 2x²+7x+3。甲標示邊長 (2x+1)、(x+3)；乙標示 (2x+3)、(x+1)。哪個標示正確？」逐一展開或回代；正解「只有甲正確」成立。「只有乙正確」不成立：乙展開不符。；「兩者都正確」不成立：兩組交叉和不同。；「兩者都不正確」不成立：甲完全吻合。",
      "undefinedSymbol": "題幹已給條件為「x>0。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「分別展開比對面積。」。",
      "unitConflict": "本題單位審查：邊長公尺、面積平方公尺。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；邊長公尺、面積平方公尺。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：x>0 保證候選尺寸正，但不影響係數判斷。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「分別展開比對面積。」閱讀後，常見誤讀為「只看首項與常數相同就判兩者都對。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "比較兩個相近尺寸配置。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會展開驗證。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s009-v009：只有甲的尺寸乘積符合面積。 因此導出「只有甲正確」。再逐項檢查四選項真值為 [True, False, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「分別展開比對面積。」，並特別排除「只看首項與常數相同就判兩者都對。」。難度理由是「比較兩個相近尺寸配置。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s009-v010",
    "unitId": "u12",
    "skillId": "factoring-word-area",
    "contentSha256": "69b85d8ec051fb0b54b539087111fad2a7222e66a01196bfa8c882fc710b06f0",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "圖示共享高，使公因式有明確幾何意義。",
    "derivedAnswer": "2x+5 公尺",
    "storedAnswer": "2x+5 公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「校園花圃由中央長方形與側邊區組成，總面積為 8x²+20x 平方公尺，共同高度為 4x 公尺。若 x>0，總寬為何？」逐一展開或回代；正解「2x+5 公尺」成立。「4x(2x+5) 公尺」不成立：這是面積形式且單位錯。；「8x+20 公尺」不成立：未除以高度。；「4x+5 公尺」不成立：第一區寬應為 2x，不是 4x。",
      "undefinedSymbol": "題幹已給條件為「兩區並排；共同高度 4x。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「提出共同高度。」。",
      "unitConflict": "本題單位審查：平方公尺÷公尺=公尺。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；平方公尺÷公尺=公尺。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：選項互異；共同高 4x 由題幹指定，總寬唯一。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「提出共同高度。」閱讀後，常見誤讀為「把總面積乘積當寬。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "文字與圖形共同決定因式意義。",
    "literacyContextNecessity": "共同高度是求總寬必要資訊，情境不可刪除。",
    "prerequisiteCheck": "需會面積公式。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s009-v010：圖示共享高，使公因式有明確幾何意義。 因此導出「2x+5 公尺」。再逐項檢查四選項真值為 [False, False, False, True]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「提出共同高度。」，並特別排除「把總面積乘積當寬。」。難度理由是「文字與圖形共同決定因式意義。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s009-v011",
    "unitId": "u12",
    "skillId": "factoring-word-area",
    "contentSha256": "6c5b1f6754f9f9e547ba0455ee346d5f462a3745b43a10732764e1f32abe6313",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "代數與規格雙重確認。",
    "derivedAnswer": "x+5 與 x+7 公尺",
    "storedAnswer": "x+5 與 x+7 公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「展覽攤位面積為 x²+12x+35 平方公尺，規格要求兩邊差 2 公尺。哪組尺寸符合？」逐一展開或回代；正解「x+5 與 x+7 公尺」成立。「x+1 與 x+35 公尺」不成立：中間項 36x，差 34。；「x+3 與 x+9 公尺」不成立：面積常數 27，且邊差 6。；「x+6 與 x+6 公尺」不成立：面積常數 36，差 0。",
      "undefinedSymbol": "題幹已給條件為「x>0。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「分解並核對邊長差。」。",
      "unitConflict": "本題單位審查：邊長公尺，面積平方公尺。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；邊長公尺，面積平方公尺。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：唯一同時滿足面積三項式與邊差 2 的尺寸組為 x+5、x+7。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「分解並核對邊長差。」閱讀後，常見誤讀為「只滿足面積或只滿足邊差。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "需同時使用面積式與額外尺寸限制。",
    "literacyContextNecessity": "規格「差 2」用來驗證分解所得尺寸是否符合實務需求。",
    "prerequisiteCheck": "需會首一分解。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s009-v011：代數與規格雙重確認。 因此導出「x+5 與 x+7 公尺」。再逐項檢查四選項真值為 [False, True, False, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「分解並核對邊長差。」，並特別排除「只滿足面積或只滿足邊差。」。難度理由是「需同時使用面積式與額外尺寸限制。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u12-s009-v012",
    "unitId": "u12",
    "skillId": "factoring-word-area",
    "contentSha256": "29731c4baf67b0477fdc4d7807561329cf240f6032df812daa2743d077373faf",
    "reviewVersion": "human-review-r4.0",
    "independentSolution": "兩因式乘回原面積。",
    "derivedAnswer": "2x+5 與 2x-5 公尺",
    "storedAnswer": "2x+5 與 2x-5 公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "針對題目「某地板設計面積為 4x²-25 平方公尺，想以兩個長方形尺寸因子呈現。何者正確？」逐一展開或回代；正解「2x+5 與 2x-5 公尺」成立。「4x+5 與 x-5 公尺」不成立：交叉項不抵消。；「2x-5 與 2x-5 公尺」不成立：會得到 4x²-20x+25。；「4x-5 與 x+5 公尺」不成立：展開會出現一次項且首項係數為 4。",
      "undefinedSymbol": "題幹已給條件為「x>2.5，使 2x-5>0。」；所用變數、平方、括號與乘法均由本技能講義定義，目標是「使用平方差。」。",
      "unitConflict": "本題單位審查：邊長公尺相乘為平方公尺。 選項中的單位依同一所求量比較，未把長度與面積或計數混算。",
      "roundingConflict": "本題計算屬精確代數或整數運算；邊長公尺相乘為平方公尺。 題幹沒有近似值、有效位數或四捨五入競爭答案。",
      "domainBoundary": "邊界審查結果：長寬交換屬同一組；其餘選項展開不符。 只使用因式分解、展開、整除或基本尺寸限制，未使用下一單元解一元二次方程式。",
      "alternateReading": "重新依所求「使用平方差。」閱讀後，常見誤讀為「把平方差當差的平方。」；題幹條件足以排除該誤讀。"
    },
    "difficultyReason": "情境中還需檢查較短邊正值。",
    "literacyContextNecessity": "地板尺寸必為正，題幹範圍讓代數因式可作實際邊長。",
    "prerequisiteCheck": "需會平方差。",
    "languageCheck": "採臺灣繁體中文；所求、條件、正負號作用範圍與單位均明示，未用未定義代名詞。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立審查 u12-s009-v012：兩因式乘回原面積。 因此導出「2x+5 與 2x-5 公尺」。再逐項檢查四選項真值為 [False, False, True, False]；錯誤選項分別由展開係數、符號、單位或情境限制排除。題目目標為「使用平方差。」，並特別排除「把平方差當差的平方。」。難度理由是「情境中還需檢查較短邊正值。」。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
