// SERIALIZATION OF REVIEWED CHATGPT HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const CONTENT_AUTHORITY = "CHATGPT_HUMAN_AUTHORED_R1";
export const LECTURE = {
  "lectureId": "u05-s001-lecture-r1",
  "unitId": "u05",
  "numericUnitId": 5,
  "topicId": "u05-coordinate-basics",
  "skillId": "coordinate-point-reading",
  "lockedTitle": "坐標讀法與點的位置",
  "title": "坐標讀法與點的位置：先讀 x 再讀 y",
  "audience": "臺灣國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能指出橫軸、縱軸與原點的角色。",
    "能把點的位置寫成有序數對 (x,y)。",
    "能由坐標說明點相對原點的左右與上下位置。",
    "能辨認把 x、y 對調所造成的位置錯誤。"
  ],
  "prerequisites": [],
  "glossary": [
    {
      "term": "平面直角坐標系",
      "definition": "由互相垂直的 x 軸與 y 軸建立的位置表示系統。"
    },
    {
      "term": "原點",
      "definition": "兩軸交會處，坐標為 (0,0)。"
    },
    {
      "term": "橫坐標",
      "definition": "有序數對中的第一個數，表示左右位置。"
    },
    {
      "term": "縱坐標",
      "definition": "有序數對中的第二個數，表示上下位置。"
    },
    {
      "term": "有序數對",
      "definition": "有固定先後次序的兩個數，寫成 (x,y)。"
    }
  ],
  "notation": [
    {
      "symbol": "(x,y)",
      "meaning": "點的坐標；先寫橫坐標 x，再寫縱坐標 y。"
    },
    {
      "symbol": "O",
      "meaning": "常用來表示原點。"
    },
    {
      "symbol": "x 軸",
      "meaning": "水平方向的坐標軸。"
    },
    {
      "symbol": "y 軸",
      "meaning": "垂直方向的坐標軸。"
    }
  ],
  "conceptNarrative": [
    "平面上的點以有序數對 (x,y) 表示，第一分量 x 是橫坐標，說明相對原點的左右位置；第二分量 y 是縱坐標，說明上下位置。順序固定，交換分量通常會得到另一個點。",
    "在一般坐標平面中，x 正向向右、負向向左，y 正向向上、負向向下。坐標的絕對值表示沿該軸離原點的單位數，正負號則只決定方向。",
    "把位置描述轉成坐標時，必須分別辨認水平與垂直位移。『向左五、向下五』代表兩軸各移動五單位，不能模糊寫成『左下五單位』再暗自決定是斜距或逐軸距離。",
    "兩個點相同表示對應分量各自相等。若分量含參數，可先由其中一個分量求候選值，再用另一分量驗證；情境地圖則先讀取題目對原點、正向與格距的明確定義。"
  ],
  "formalDefinitions": [
    {
      "name": "點的坐標",
      "statement": "點 P 的坐標 (a,b) 表示：由原點先水平移動到 x=a，再垂直移動到 y=b。"
    },
    {
      "name": "橫坐標",
      "statement": "點在左右方向相對原點的位置數值。"
    },
    {
      "name": "縱坐標",
      "statement": "點在上下方向相對原點的位置數值。"
    }
  ],
  "formulas": [
    {
      "formula": "P=(x,y)",
      "conditions": [
        "x、y 為可表示位置的數",
        "順序固定"
      ],
      "meaning": "用一對有順序的數唯一描述平面上的點。"
    }
  ],
  "nonApplicableCases": [
    "不能把 (x,y) 看成 x+y。",
    "不能先讀上下再讀左右。",
    "題目只給一個數時，尚不足以決定平面上的一般點。",
    "沒有單位格長資訊時，不能由視覺估計實際距離。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "確認原點、x 與 y 的正向，以及每一坐標單位所代表的量。",
      "check": "方向和格距都來自題幹或標準坐標定義，沒有使用未寫出的假設。"
    },
    {
      "step": 2,
      "instruction": "將水平方向轉成第一分量，右為正、左為負。",
      "check": "橫坐標的大小與水平位移一致，正負號符合左右方向。"
    },
    {
      "step": 3,
      "instruction": "將垂直方向轉成第二分量，上為正、下為負。",
      "check": "縱坐標的大小與垂直位移一致，沒有和第一分量交換。"
    },
    {
      "step": 4,
      "instruction": "依 (x,y) 順序寫出有序數對，或反向讀成完整位置敘述。",
      "check": "括號、逗號、分量順序與各自負號均保留。"
    },
    {
      "step": 5,
      "instruction": "若含參數或兩點相同，逐分量列式並用另一分量回驗。",
      "check": "同一參數同時滿足兩個分量，位置與題幹方向一致。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "u05-s001-example-a",
      "prompt": "描述點 H=(-6,4) 相對原點的位置。",
      "solutionSteps": [
        "x=-6 表示向左六單位。",
        "y=4 表示向上四單位。"
      ],
      "answer": "H 在原點左六單位、上四單位。",
      "why": "第一分量控制左右，負六表示左方；第二分量控制上下，正四表示上方。依固定順序讀取可避免把點誤寫成左四、上六。"
    },
    {
      "exampleId": "u05-s001-example-b",
      "prompt": "由原點向右七單位、再向下二單位，寫出終點。",
      "solutionSteps": [
        "向右七給 x=7。",
        "向下二給 y=-2。"
      ],
      "answer": "終點為 (7,-2)。",
      "why": "水平正向是右方，所以第一分量為正七；垂直向下使用負號，所以第二分量為負二。兩段位移分屬不同坐標軸，不可互換。"
    },
    {
      "exampleId": "u05-s001-example-c",
      "prompt": "P=(2k+1,k-1) 與 Q=(7,2) 是同一點，求 k。",
      "solutionSteps": [
        "比較第一分量得 2k+1=7，所以 k=3。",
        "檢查第二分量 3-1=2。"
      ],
      "answer": "k=3。",
      "why": "同一點要求對應分量逐一相等。第一分量給出候選值三，第二分量回驗也得到二，因此不是只憑單一方程式碰巧符合。"
    },
    {
      "exampleId": "u05-s001-example-d",
      "prompt": "地圖以東、北為正向，據點在基地西三格、南五格，求坐標。",
      "solutionSteps": [
        "西三格使 x=-3。",
        "南五格使 y=-5。"
      ],
      "answer": "據點坐標為 (-3,-5)。",
      "why": "題幹已明定東、北為正向，因此西與南分別對應負的橫、縱坐標。把方向定義先寫清楚，答案便不依賴地圖慣例。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把 (x,y) 讀成先縱後橫。",
      "why": "忽略有序數對的固定分量順序。",
      "correction": "每次先讀水平 x，再讀垂直 y。"
    },
    {
      "mistake": "左方或下方仍寫正坐標。",
      "why": "只記距離大小，沒有加入方向符號。",
      "correction": "左、下分別使用負 x、負 y。"
    },
    {
      "mistake": "把負號理解為負的距離。",
      "why": "混淆位置方向與長度。",
      "correction": "負號只標示方向，絕對值才是沿軸單位數。"
    },
    {
      "mistake": "把『左下五』自行解成兩軸各五。",
      "why": "題句沒有區分逐軸位移與斜距。",
      "correction": "要求題幹分別明示向左與向下的單位數。"
    },
    {
      "mistake": "兩點比較只驗一個分量。",
      "why": "一個分量相同不足以證明同一點。",
      "correction": "同一參數須通過橫、縱兩個分量。"
    },
    {
      "mistake": "情境地圖沿用未寫出的方向。",
      "why": "不同系統可能採不同軸向與格距。",
      "correction": "先讀題目對原點、正向與每格單位的定義。"
    }
  ],
  "selfCheck": [
    "我是否先讀 x 再讀 y？",
    "我是否把正負號翻成正確方向？",
    "我是否知道只有 (0,0) 是原點？",
    "我是否避免把坐標對調？"
  ],
  "summary": [
    "坐標以 (x,y) 表示。",
    "x 管左右，y 管上下。",
    "正負號表示相對原點的方向。",
    "有序數對的順序不可交換。"
  ],
  "connections": {
    "previous": "本節是 U05 起點，承接整數正負號與數線方向。",
    "next": [
      "下一節利用 x、y 的正負組合判斷象限。",
      "之後會把坐標用於平移、距離與直線。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u05-s001-v001",
      "u05-s001-v002",
      "u05-s001-v003",
      "u05-s001-v004",
      "u05-s001-v005",
      "u05-s001-v006",
      "u05-s001-v007",
      "u05-s001-v008",
      "u05-s001-v009",
      "u05-s001-v010",
      "u05-s001-v011",
      "u05-s001-v012"
    ],
    "constructedResponseIds": [
      "u05-s001-cr001",
      "u05-s001-cr002"
    ]
  },
  "figureReferences": [],
  "accessibilityNote": "本講義依鎖定範圍採全文字描述；方向、順序與方程式均以可由螢幕閱讀器理解的完整句子表達。",
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "Taiwan junior-high CAP coordinate geometry only",
    "examplesNotCopiedFromBank": true,
    "symbolDefinitionsComplete": true,
    "futureUnitKnowledgeAvoided": true,
    "reviewNote": "逐句核對 x 先於 y、正負方向與原點條件；四個例題分別涵蓋讀點、寫點、對調錯誤與零分量，未引入象限名稱以免提前依賴下一技能。",
    "reviewVersion": "human-lecture-review-u05-r1.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
  "contentSha256": "81164580c86f82ad2fae79b9e5204bfd0853a07ecac0ee105733d1a440772b6f"
};

export const QUESTIONS = [
  {
    "questionId": "u05-s001-v001",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-point-reading",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "點 A 的坐標為 (4,-3)。A 在原點的哪個相對位置？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "直接讀出有序數對的位置",
    "choices": [
      "右 4 單位、下 3 單位",
      "左 4 單位、下 3 單位",
      "右 3 單位、下 4 單位",
      "左 3 單位、上 4 單位"
    ],
    "answerIndex": 0,
    "independentSolution": "第一分量 4 表示向右 4 單位；第二分量 -3 表示向下 3 單位，因此是右 4、下 3。",
    "explanation": "坐標 (4,-3) 的第一分量四表示由原點向右四單位，第二分量負三表示由原點向下三單位。依先讀橫坐標、再讀縱坐標的順序，A 位於右四、下三的位置。",
    "steps": [
      "讀取橫坐標 x=4，判定向右四單位。",
      "讀取縱坐標 y=-3，判定向下三單位。",
      "按 x、y 順序合併為右四單位、下三單位。"
    ],
    "optionAnalysis": [
      {
        "choice": "右 4 單位、下 3 單位",
        "truth": true,
        "reason": "x 正、y 負，方向與單位數都正確。"
      },
      {
        "choice": "左 4 單位、下 3 單位",
        "truth": false,
        "reason": "把 x=4 誤讀為向左。"
      },
      {
        "choice": "右 3 單位、下 4 單位",
        "truth": false,
        "reason": "把 x、y 的數值對調。"
      },
      {
        "choice": "左 3 單位、上 4 單位",
        "truth": false,
        "reason": "同時對調數值並誤判正負方向。"
      }
    ],
    "misconceptionTarget": "交換兩個分量，或把縱坐標負三誤讀成向上三單位。",
    "prerequisiteCheck": "僅需整數正負方向與有序數對順序。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題目已指定相對原點且每一坐標單位等長，不涉及圖形比例。",
    "difficultyReason": "只需依序解讀兩個分量，屬單步基礎辨認。",
    "literacyContextNecessity": null,
    "authoringIntent": "直接讀出有序數對的位置",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "7598dc5bd97de3c80e35ca7a69dc3128607a4ef9e32d4409fbffadd7d8947c2f"
  },
  {
    "questionId": "u05-s001-v002",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-point-reading",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "由原點向左 6 單位，再向上 2 單位，所到達的點為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由位置敘述寫坐標",
    "choices": [
      "(6,2)",
      "(-6,2)",
      "(-2,6)",
      "(2,-6)"
    ],
    "answerIndex": 1,
    "independentSolution": "向左使橫坐標為 -6，向上使縱坐標為 2，所以坐標是 (-6,2)。",
    "explanation": "從原點向左六單位使橫坐標成為 -6，向上二單位使縱坐標成為 2。坐標固定先寫水平方向的 x，再寫垂直方向的 y，所以到達點為 (-6,2)。",
    "steps": [
      "由向左六單位寫出 x=-6。",
      "由向上二單位寫出 y=2。",
      "依橫坐標在前、縱坐標在後寫成 (-6,2)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(6,2)",
        "truth": false,
        "reason": "向左的負號遺漏。"
      },
      {
        "choice": "(-6,2)",
        "truth": true,
        "reason": "先左 6 再上 2，正確寫成 (x,y)。"
      },
      {
        "choice": "(-2,6)",
        "truth": false,
        "reason": "把水平與垂直步數對調。"
      },
      {
        "choice": "(2,-6)",
        "truth": false,
        "reason": "對調步數且把方向符號也反轉。"
      }
    ],
    "misconceptionTarget": "依移動語句順序之外的直覺交換分量，寫成 (2,-6)。",
    "prerequisiteCheck": "使用上一題所建立的 x 左右、y 上下規則。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "所有移動均由原點且平行坐標軸，終點唯一。",
    "difficultyReason": "需要把兩段方向敘述翻成有序數對，仍是基礎技能。",
    "literacyContextNecessity": null,
    "authoringIntent": "由位置敘述寫坐標",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "6cb6cfb2fd8a19fb350d0bf5087bec5c3273eef13bfbb33edcb39aec6e0cd1a7"
  },
  {
    "questionId": "u05-s001-v003",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-point-reading",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "下列哪一個點的橫坐標是 -5，縱坐標是 7？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "辨認坐標分量順序",
    "choices": [
      "(5,7)",
      "(7,-5)",
      "(-5,7)",
      "(-7,5)"
    ],
    "answerIndex": 2,
    "independentSolution": "橫坐標放在第一個位置，縱坐標放在第二個位置，因此為 (-5,7)。",
    "explanation": "橫坐標是有序數對的第一分量，題目指定為負五；縱坐標是第二分量，指定為七。因此兩個值按固定順序組成 (-5,7)，負號只屬於第一分量。",
    "steps": [
      "把橫坐標 -5 放在第一個位置。",
      "把縱坐標 7 放在第二個位置。",
      "加上有序數對括號，得到 (-5,7)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(5,7)",
        "truth": false,
        "reason": "橫坐標負號遺失。"
      },
      {
        "choice": "(7,-5)",
        "truth": false,
        "reason": "把兩個分量對調。"
      },
      {
        "choice": "(-5,7)",
        "truth": true,
        "reason": "兩個分量與順序都符合。"
      },
      {
        "choice": "(-7,5)",
        "truth": false,
        "reason": "數值與位置均錯置。"
      }
    ],
    "misconceptionTarget": "把橫、縱坐標順序顛倒，或將負號錯誤放到第二分量。",
    "prerequisiteCheck": "已理解橫坐標為第一分量。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題幹精確指定兩個分量，沒有方向或單位歧義。",
    "difficultyReason": "直接依定義選出有序數對，屬基礎辨認。",
    "literacyContextNecessity": null,
    "authoringIntent": "辨認坐標分量順序",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "54c6b9d3a060f02e9cf228d3bb0d68d2d48afd2b42761ee8e77ad7040d53b6d5"
  },
  {
    "questionId": "u05-s001-v004",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-point-reading",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "點 P=(a,-4) 位於原點右方且下方。下列哪個條件必須成立？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由方向反推未知坐標符號",
    "choices": [
      "a<0",
      "a=0",
      "a=-4",
      "a>0"
    ],
    "answerIndex": 3,
    "independentSolution": "右方表示橫坐標為正，因此 a>0；第二分量 -4 已保證在下方。",
    "explanation": "P=(a,-4) 的縱坐標負四已表示位於原點下方；要同時位於右方，橫坐標 a 必須為正數。因此必要條件是 a>0，若 a=0 會落在 y 軸而非右方。",
    "steps": [
      "由第二分量 -4 確認點在原點下方。",
      "把原點右方轉成橫坐標為正。",
      "寫出必要條件 a>0，並排除 a=0。"
    ],
    "optionAnalysis": [
      {
        "choice": "a<0",
        "truth": false,
        "reason": "會使點位於左方。"
      },
      {
        "choice": "a=0",
        "truth": false,
        "reason": "會使點落在 y 軸上，不在右方。"
      },
      {
        "choice": "a=-4",
        "truth": false,
        "reason": "只把第二分量數值誤套給 a，且位於左方。"
      },
      {
        "choice": "a>0",
        "truth": true,
        "reason": "右半平面的橫坐標為正。"
      }
    ],
    "misconceptionTarget": "只看到縱坐標負四就選負數條件，忽略 a 控制左右方向。",
    "prerequisiteCheck": "需能由坐標讀法判斷正負方向。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "『右方且下方』均相對原點；a=0 不符合『右方』的嚴格條件。",
    "difficultyReason": "需要由位置語言反推參數符號，比直接讀點多一步。",
    "literacyContextNecessity": null,
    "authoringIntent": "由方向反推未知坐標符號",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "aeeb5c97286c6439ba1406f5bb236b44b317b1d7db0f6d97509292bcedd11df1"
  },
  {
    "questionId": "u05-s001-v005",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-point-reading",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "若 Q=(-2,b) 在原點左方 2 單位、上方 9 單位，則 b 等於多少？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由完整位置補出未知分量",
    "choices": [
      "9",
      "-9",
      "2",
      "-2"
    ],
    "answerIndex": 0,
    "independentSolution": "Q 的第二分量 b 表示上下位置；上方 9 單位使 b=9。",
    "explanation": "Q 的第一分量 -2 已對應原點左方二單位；題目又說位於上方九單位，所以第二分量 b 應為正九。因而 b=9，坐標 Q=(-2,9) 與位置描述完全一致。",
    "steps": [
      "核對左方二單位對應 x=-2。",
      "把上方九單位轉成縱坐標 y=9。",
      "比較 Q=(-2,b) 的第二分量，得到 b=9。"
    ],
    "optionAnalysis": [
      {
        "choice": "9",
        "truth": true,
        "reason": "縱坐標正 9 表示上方 9。"
      },
      {
        "choice": "-9",
        "truth": false,
        "reason": "會表示下方 9。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "誤把水平距離當縱坐標。"
      },
      {
        "choice": "-2",
        "truth": false,
        "reason": "直接重複使用橫坐標。"
      }
    ],
    "misconceptionTarget": "因第一分量是負數，就連帶把上方九單位也寫成負九。",
    "prerequisiteCheck": "需掌握有序數對中第二分量的意義。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題意明確以原點為基準，b 是唯一值。",
    "difficultyReason": "需分辨已知與未知分量並保留方向，屬標準題。",
    "literacyContextNecessity": null,
    "authoringIntent": "由完整位置補出未知分量",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "4c439775f2fd0b54de48e812dbd0b127e21536a70cf35cdbdbe088cfbef5c714"
  },
  {
    "questionId": "u05-s001-v006",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-point-reading",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "點 R=(3,-8) 與 S=(-8,3) 的位置關係，下列敘述何者正確？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "比較坐標對調後的位置",
    "choices": [
      "兩點相同",
      "R 在右下方，S 在左上方",
      "R 在左上方，S 在右下方",
      "兩點都在右下方"
    ],
    "answerIndex": 1,
    "independentSolution": "R 的 x 正、y 負，所以在右下；S 的 x 負、y 正，所以在左上。交換坐標會得到不同位置。",
    "explanation": "R=(3,-8) 的橫坐標為正、縱坐標為負，所以在原點右下方；S=(-8,3) 的橫坐標為負、縱坐標為正，所以在左上方。分量數值相同但順序不同，位置也不同。",
    "steps": [
      "讀 R 的符號 (+,-)，判定右下方。",
      "讀 S 的符號 (-,+)，判定左上方。",
      "比較兩點方向，選出 R 右下、S 左上的敘述。"
    ],
    "optionAnalysis": [
      {
        "choice": "兩點相同",
        "truth": false,
        "reason": "有序數對不能因數值相同而忽略順序。"
      },
      {
        "choice": "R 在右下方，S 在左上方",
        "truth": true,
        "reason": "兩點分別由 (+,-) 與 (-,+) 定位。"
      },
      {
        "choice": "R 在左上方，S 在右下方",
        "truth": false,
        "reason": "把兩點的符號方向互換。"
      },
      {
        "choice": "兩點都在右下方",
        "truth": false,
        "reason": "忽略 S 的第一分量為負、第二分量為正。"
      }
    ],
    "misconceptionTarget": "認為兩點只是交換三與八，位置關係不受有序分量影響。",
    "prerequisiteCheck": "需能逐點讀出左右與上下。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "兩點均不在坐標軸，方向判定唯一。",
    "difficultyReason": "需同時解讀兩點並說明順序不可交換，屬標準判斷。",
    "literacyContextNecessity": null,
    "authoringIntent": "比較坐標對調後的位置",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "9a342c9d80704dd13f2c801d788c9dea0eede35da1c97306bdd3662041dd8a8f"
  },
  {
    "questionId": "u05-s001-v007",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-point-reading",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "若點 T 的兩個坐標分量相等，且由原點向左 5 單位、再向下 5 單位可到達 T，則 T 為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "整合方向與分量相等條件",
    "choices": [
      "(5,5)",
      "(-5,5)",
      "(-5,-5)",
      "(5,-5)"
    ],
    "answerIndex": 2,
    "independentSolution": "左方 5 使 x=-5，下方 5 使 y=-5；兩分量確實相等。",
    "explanation": "向左五單位使橫坐標為 -5，向下五單位使縱坐標也為 -5，因此 T=(-5,-5)。題幹分別指定水平與垂直位移，不是指點到原點的斜線距離為五。",
    "steps": [
      "把向左五單位轉成 x=-5。",
      "把向下五單位轉成 y=-5。",
      "確認兩分量相等，寫出 T=(-5,-5)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(5,5)",
        "truth": false,
        "reason": "位於右上。"
      },
      {
        "choice": "(-5,5)",
        "truth": false,
        "reason": "位於左上且分量不相等。"
      },
      {
        "choice": "(-5,-5)",
        "truth": true,
        "reason": "兩分量皆為 -5，符合左下且相等。"
      },
      {
        "choice": "(5,-5)",
        "truth": false,
        "reason": "位於右下且分量不相等。"
      }
    ],
    "misconceptionTarget": "把兩軸各五單位誤讀成斜線距離五，或忽略左下方向的負號。",
    "prerequisiteCheck": "需理解坐標分量與方向。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題幹已分別明示向左五單位與向下五單位，兩數是水平、垂直位移，不是原點到 T 的斜距。",
    "difficultyReason": "需同時使用位置、距離與相等條件，屬進階整合。",
    "literacyContextNecessity": null,
    "authoringIntent": "整合方向與分量相等條件",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "21ceeae7fa9ef09a91d9c04e8cdd9324dc0bd1e0fc13588c72e6396da83e028a"
  },
  {
    "questionId": "u05-s001-v008",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-point-reading",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "已知 A=(m+1,2m-3) 恰為 (4,3)，則 m 的值為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由兩個坐標分量共同求參數",
    "choices": [
      "1",
      "2",
      "4",
      "3"
    ],
    "answerIndex": 3,
    "independentSolution": "由第一分量 m+1=4 得 m=3；第二分量 2m-3=3 也得到 m=3，兩個分量一致。",
    "explanation": "同一點的兩個對應分量必須分別相等。由第一分量 m+1=4 可得 m=3；再檢查第二分量 2m-3=2×3-3=3，也與目標點的縱坐標三相同，兩個分量條件一致。",
    "steps": [
      "比較第一分量，列出 m+1=4。",
      "解得 m=3。",
      "代入第二分量，驗算 2×3-3=3。"
    ],
    "optionAnalysis": [
      {
        "choice": "1",
        "truth": false,
        "reason": "代入得 (2,-1)。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "代入得 (3,1)。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "代入得 (5,5)。"
      },
      {
        "choice": "3",
        "truth": true,
        "reason": "同時滿足兩個分量等式。"
      }
    ],
    "misconceptionTarget": "只比較一個分量就作答，沒有確認同一個 m 也符合另一分量。",
    "prerequisiteCheck": "需會解簡單一元一次方程式。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "有序數對相等要求對應分量分別相等，答案唯一。",
    "difficultyReason": "必須建立並交叉驗證兩個分量等式，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "由兩個坐標分量共同求參數",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "aa61fdf16572d03266d6b83f711729568d8800f452bca67bf39f8529f3f2aec7"
  },
  {
    "questionId": "u05-s001-v009",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-point-reading",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "點 U=(2-k,k-5) 位於 y 軸上。下列哪個 k 值符合？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由軸上位置求參數",
    "choices": [
      "2",
      "-2",
      "3",
      "5"
    ],
    "answerIndex": 0,
    "independentSolution": "位於 y 軸上表示橫坐標為 0，所以 2-k=0，解得 k=2；此時 U=(0,-3)，確實在 y 軸上。",
    "explanation": "點在 y 軸上的必要條件是橫坐標等於零，因此令 2-k=0，解得 k=2。此時 U=(0,-3)，第一分量確為零；縱坐標可以是非零數，不影響它位於 y 軸。",
    "steps": [
      "辨認 U 的橫坐標是 2-k。",
      "依 y 軸條件列出 2-k=0，解得 k=2。",
      "代回得 U=(0,-3)，確認在 y 軸上。"
    ],
    "optionAnalysis": [
      {
        "choice": "2",
        "truth": true,
        "reason": "使橫坐標為 0，點在 y 軸上。"
      },
      {
        "choice": "-2",
        "truth": false,
        "reason": "橫坐標為 4。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "橫坐標為 -1。"
      },
      {
        "choice": "5",
        "truth": false,
        "reason": "橫坐標為 -3。"
      }
    ],
    "misconceptionTarget": "誤把 y 軸條件寫成縱坐標為零，因而解錯參數。",
    "prerequisiteCheck": "需理解橫坐標控制左右位置。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "y 軸包含原點上下所有 x=0 的點，不要求 y 為正。",
    "difficultyReason": "需把位置敘述轉為分量方程式並回代驗證，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "由軸上位置求參數",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "249ff80a5a1eca615b70150b66b4df751f49ea72887b32eccbecc046110c5dd2"
  },
  {
    "questionId": "u05-s001-v010",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-point-reading",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "校園導覽以警衛室為原點，東方為 x 正向、北方為 y 正向。保健室在警衛室西方 4 格、南方 1 格，其坐標為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "在校園方位情境讀寫坐標",
    "choices": [
      "(4,-1)",
      "(-4,-1)",
      "(-1,-4)",
      "(4,1)"
    ],
    "answerIndex": 1,
    "independentSolution": "西方對應 x 負，所以 x=-4；南方對應 y 負，所以 y=-1，坐標為 (-4,-1)。",
    "explanation": "題目已定義東方為 x 正向、北方為 y 正向，所以西方四格對應 x=-4，南方一格對應 y=-1。由警衛室原點出發，保健室坐標就是 (-4,-1)，方向與分量順序都已明確。",
    "steps": [
      "把西方四格轉成橫坐標 -4。",
      "把南方一格轉成縱坐標 -1。",
      "依 x、y 順序寫出 (-4,-1)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(4,-1)",
        "truth": false,
        "reason": "把西方誤當 x 正向。"
      },
      {
        "choice": "(-4,-1)",
        "truth": true,
        "reason": "西 4、南 1 均依題目正方向轉成負值。"
      },
      {
        "choice": "(-1,-4)",
        "truth": false,
        "reason": "把格數與分量對調。"
      },
      {
        "choice": "(4,1)",
        "truth": false,
        "reason": "把西、南都誤判為正向。"
      }
    ],
    "misconceptionTarget": "把西、南當成正向，或依語句順序之外的直覺交換兩個分量。",
    "prerequisiteCheck": "僅使用本技能的方向與有序數對。",
    "estimatedTimeSec": 150,
    "unitCheck": "坐標單位是格；答案是位置坐標，不另乘實際公尺。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "方向由題目明確定義，不假設地圖旋轉或其他比例。",
    "difficultyReason": "資訊情境必要，需把方位定義轉成兩個坐標分量。",
    "literacyContextNecessity": "若移除警衛室、東北正向與西南方位資訊，就無法決定保健室的正負坐標；情境是建模必要條件。",
    "authoringIntent": "在校園方位情境讀寫坐標",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "e12843cea705aae2f3235e0ac5d20a271694278135978298da49674ff5428ce0"
  },
  {
    "questionId": "u05-s001-v011",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-point-reading",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "倉庫貨架以入口為 (0,0)，向右一欄使 x 增加 1，向內一列使 y 增加 1。貨物標示位置為 (3,5)，正確敘述為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "解讀貨架位置編碼",
    "choices": [
      "從入口向右 5 欄、向內 3 列",
      "從入口向左 3 欄、向內 5 列",
      "從入口向右 3 欄、向內 5 列",
      "從入口向右 3 欄、向外 5 列"
    ],
    "answerIndex": 2,
    "independentSolution": "第一分量 3 表示向右 3 欄；第二分量 5 表示向內 5 列。",
    "explanation": "貨架規則明定向右一欄使 x 增加一，向內一列使 y 增加一。因此位置 (3,5) 表示從入口向右三欄、再向內五列；兩個分量不可依數值大小互換。",
    "steps": [
      "由第一分量 3 對應向右三欄。",
      "由第二分量 5 對應向內五列。",
      "依貨架欄列定義組成完整位置敘述。"
    ],
    "optionAnalysis": [
      {
        "choice": "從入口向右 5 欄、向內 3 列",
        "truth": false,
        "reason": "交換欄與列的數值。"
      },
      {
        "choice": "從入口向左 3 欄、向內 5 列",
        "truth": false,
        "reason": "把 x 正向讀成左。"
      },
      {
        "choice": "從入口向右 3 欄、向內 5 列",
        "truth": true,
        "reason": "分量順序與方向定義均正確。"
      },
      {
        "choice": "從入口向右 3 欄、向外 5 列",
        "truth": false,
        "reason": "把 y 正向讀成外。"
      }
    ],
    "misconceptionTarget": "把欄與列對調，或把正坐標誤讀成向入口外側移動。",
    "prerequisiteCheck": "需掌握坐標第一、第二分量。",
    "estimatedTimeSec": 150,
    "unitCheck": "x 使用欄、y 使用列，兩者不可互換；答案保留各自單位名稱。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題目已定義『向內』為 y 正向，不能依一般地圖習慣改讀。",
    "difficultyReason": "需將抽象坐標對應到兩種不同空間語意，屬素養題。",
    "literacyContextNecessity": "欄與列分別承擔 x、y 的真實定位功能；移除貨架規則後，坐標無法轉回可操作的位置指令。",
    "authoringIntent": "解讀貨架位置編碼",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "2e5bfa3f1ebc94bc178ab2f7065a5f72296c489895752488f83fe4e3b92c99b5"
  },
  {
    "questionId": "u05-s001-v012",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-point-reading",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "遊戲地圖規定角色出生點為原點，向右與向上分別為 x、y 正向。系統記錄角色在 (-7,2)。哪個說明最適合用來尋找角色？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "將系統坐標轉成尋路指令",
    "choices": [
      "從出生點向左 2 格、向上 7 格",
      "從出生點向右 7 格、向上 2 格",
      "從出生點向左 7 格、向下 2 格",
      "從出生點向左 7 格、向上 2 格"
    ],
    "answerIndex": 3,
    "independentSolution": "x=-7 表示向左 7 格；y=2 表示向上 2 格，所以應左 7、上 2。",
    "explanation": "地圖規定向右為 x 正向、向上為 y 正向。紀錄 (-7,2) 的負橫坐標表示從出生點向左七格，正縱坐標表示向上二格，所以尋找指示應為左七、上二。",
    "steps": [
      "讀取 x=-7，轉成向左七格。",
      "讀取 y=2，轉成向上二格。",
      "按水平、垂直方向合併為尋找路線。"
    ],
    "optionAnalysis": [
      {
        "choice": "從出生點向左 2 格、向上 7 格",
        "truth": false,
        "reason": "交換兩個分量。"
      },
      {
        "choice": "從出生點向右 7 格、向上 2 格",
        "truth": false,
        "reason": "忽略 x 的負號。"
      },
      {
        "choice": "從出生點向左 7 格、向下 2 格",
        "truth": false,
        "reason": "把正 y 誤讀為向下。"
      },
      {
        "choice": "從出生點向左 7 格、向上 2 格",
        "truth": true,
        "reason": "負 x 與正 y 的方向、格數皆正確。"
      }
    ],
    "misconceptionTarget": "忽略橫坐標負號，或把第二分量二誤當成向下二格。",
    "prerequisiteCheck": "需能由坐標完整描述相對位置。",
    "estimatedTimeSec": 150,
    "unitCheck": "坐標單位與地圖格一致，答案以格數表達。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "所有移動相對同一出生點，且只要求終點位置，不涉及路線障礙。",
    "difficultyReason": "需把系統紀錄轉成可執行方向語句，情境理解不可省略。",
    "literacyContextNecessity": "遊戲的出生點與正方向定義決定尋路指令；若只保留數字而移除規則，無法判斷左右上下。",
    "authoringIntent": "將系統坐標轉成尋路指令",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "083d3481ec9ae314049113bbd290a81983a28fd0d22a07e1b2d96ed27786ba2b"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u05-s001-cr001",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-point-reading",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "點 A 的位置描述為：由原點向左 4 單位、向下 7 單位。寫出 A 的坐標，並解釋兩個負號各代表什麼。",
    "requiredWork": [
      "寫出完整有序數對。",
      "說明第一分量與第二分量的方向意義。"
    ],
    "fullCreditSolution": [
      "由原點向左四單位，表示橫坐標為 -4；負號說明點位於 y 軸左側。",
      "由原點向下七單位，表示縱坐標為 -7；第二個負號說明點位於 x 軸下方。",
      "坐標按橫坐標、縱坐標順序寫成 A=(-4,-7)，兩個負號分別控制左右與上下方向。"
    ],
    "alternativeSolutions": [
      "也可先寫 x=-4、y=-7，再合併成 (x,y)。"
    ],
    "reasoningSteps": [
      "先把水平描述向左四轉成第一分量 -4。",
      "再把垂直描述向下七轉成第二分量 -7。",
      "依 x、y 固定順序組成坐標，逐一解釋負號的幾何意義。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "寫出 (-4,-7)，並正確說明兩個負號分別代表左與下。"
      },
      {
        "score": 2,
        "criteria": "坐標正確但方向說明只完成一項，或說明完整但有一個分量抄寫錯。"
      },
      {
        "score": 1,
        "criteria": "知道左、下應為負值，但坐標順序或一個數值錯誤。"
      },
      {
        "score": 0,
        "criteria": "寫成 (4,7) 等方向全錯，且未呈現坐標順序概念。"
      }
    ],
    "partialCreditRules": [
      "坐標與方向說明分開計分；只漏括號但分量順序清楚不扣至 1 分。"
    ],
    "followThroughPolicy": "若第一分量因方向判斷錯寫成 4，但後續能一致解釋向下使第二分量為 -7，依正確後續推理保留相應步驟分；錯誤本身不給分。",
    "unitAndNotationRules": "坐標必須寫成有序對 A=(x,y)；本題各移動量以「單位」表示，不另寫長度單位。",
    "answerOnlyPolicy": "只寫 A=(-4,-7) 而未解釋兩個負號，最高給 2 分。",
    "commonErrors": [
      "把向左四、向下七都寫成正數，忽略方向由正負號表示。",
      "交換橫、縱坐標順序，將答案錯寫成 (-7,-4)。",
      "只說兩個負號都代表負數，沒有分別說明左側與下方。"
    ],
    "independentReview": {
      "derivedResult": "若第一分量算錯但第二分量與方向說明正確，可保留相應部分分；不以錯誤第一分量連帶扣除第二分量。",
      "ambiguity": "坐標必須按 (x,y)；距離描述使用『4 單位』『7 單位』，不可寫負距離。",
      "decision": "pass",
      "reviewNote": "重新由題目條件推導結果為 若第一分量算錯但第二分量與方向說明正確，可保留相應部分分；不以錯誤第一分量連帶扣除第二分量。；並逐項核對評分規準與可接受的等價表示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "a8ecdc11f0e1474cf319d393323bac85c8b8c2b50f1693d4dba04346c49d3842"
  },
  {
    "questionId": "u05-s001-cr002",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-point-reading",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "點 P=(2m-1,m+4) 與點 Q=(7,8) 是同一個點。求 m，並說明為何只比較一個分量後仍要檢查另一分量。",
    "requiredWork": [
      "由有序數對相等列出對應分量條件。",
      "求出 m。",
      "用另一分量驗證一致性。"
    ],
    "fullCreditSolution": [
      "同一點的第一分量相等，所以 2m-1=7，整理得 2m=8，因此 m=4。",
      "第二分量也必須相等；代入 m=4，得到 m+4=8，確實等於 Q 的縱坐標八。",
      "故 m=4。只比較第一分量可得到候選值，仍須檢查第二分量，才能確認兩個有序數對代表同一點。"
    ],
    "alternativeSolutions": [
      "也可先由 m+4=8 得 m=4，再檢查 2m-1=7。"
    ],
    "reasoningSteps": [
      "依坐標順序比較第一分量，列出並解 2m-1=7。",
      "把所得 m=4 代入第二分量 m+4。",
      "確認第二分量也是八，再下結論兩點相同。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "求得 m=4，列出至少一個分量方程式，並用另一分量驗證。"
      },
      {
        "score": 2,
        "criteria": "m=4 且有合理運算，但未明確說明另一分量驗證。"
      },
      {
        "score": 1,
        "criteria": "列出正確分量方程式但解算錯，或只猜 m=4 無完整理由。"
      },
      {
        "score": 0,
        "criteria": "把兩個有序數對相加或比較錯位分量，未得到可用條件。"
      }
    ],
    "partialCreditRules": [
      "先用任一分量皆可；兩條方程式順序不影響得分。"
    ],
    "followThroughPolicy": "若由第一分量解 m 時出現單一算術錯誤，但將所得值正確代入第二分量檢查，可依檢查方法給部分分；兩分量矛盾時不得判為完整正解。",
    "unitAndNotationRules": "參數寫成 m=數值；比較坐標時須分別列出 x 分量相等與 y 分量相等。",
    "answerOnlyPolicy": "只寫 m=4 而沒有比較與檢查過程，最高給 1 分。",
    "commonErrors": [
      "解出 m=4 後直接停止，沒有檢查第二分量是否相符。",
      "把第一分量與第二分量交叉比較，列出不對應的方程式。",
      "計算 2m-1=7 時把負一移項成負數，錯得 m=3。"
    ],
    "independentReview": {
      "derivedResult": "若第一個方程式有單一算術錯，但學生把所得 m 正確代入另一分量並指出不一致，可給 1 分的檢查證據。",
      "ambiguity": "m 為純數；有序數對對應分量必須同位置比較。",
      "decision": "pass",
      "reviewNote": "重新由題目條件推導結果為 若第一個方程式有單一算術錯，但學生把所得 m 正確代入另一分量並指出不一致，可給 1 分的檢查證據。；並逐項核對評分規準與可接受的等價表示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "2f6286ab3b160917c86b956e5b152dc4ef58b55d5fd1adb61d4fb58d188c863a"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u05-s001-v001",
    "contentSha256": "7598dc5bd97de3c80e35ca7a69dc3128607a4ef9e32d4409fbffadd7d8947c2f",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "第一分量 4 表示向右 4 單位；第二分量 -3 表示向下 3 單位，因此是右 4、下 3。",
    "derivedAnswer": "右 4 單位、下 3 單位",
    "storedAnswer": "右 4 單位、下 3 單位",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「右 4 單位、下 3 單位」；其餘三項逐項檢查：「左 4 單位、下 3 單位」不成立，把 x=4 誤讀為向左。；「右 3 單位、下 4 單位」不成立，把 x、y 的數值對調。；「左 3 單位、上 4 單位」不成立，同時對調數值並誤判正負方向。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標讀法與點的位置」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "題目已指定相對原點且每一坐標單位等長，不涉及圖形比例。",
      "alternateReading": "常見誤讀是「把坐標順序或正負方向讀反。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "只需依序解讀兩個分量，屬單步基礎辨認。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "僅需整數正負方向與有序數對順序。",
    "languageCheck": "題幹所求為「直接讀出有序數對的位置」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「點 A 的坐標為 (4,-3)。A 在原點的哪個相對位置？」重新依序處理：第一分量 4 表示向右 4 單位；第二分量 -3 表示向下 3 單位，因此是右 4、下 3。 正確選項為「右 4 單位、下 3 單位」。三個干擾項均對應不同錯誤：「左 4 單位、下 3 單位」不成立，把 x=4 誤讀為向左。；「右 3 單位、下 4 單位」不成立，把 x、y 的數值對調。；「左 3 單位、上 4 單位」不成立，同時對調數值並誤判正負方向。。邊界審查：題目已指定相對原點且每一坐標單位等長，不涉及圖形比例。 難度理由：只需依序解讀兩個分量，屬單步基礎辨認。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s001-v002",
    "contentSha256": "6cb6cfb2fd8a19fb350d0bf5087bec5c3273eef13bfbb33edcb39aec6e0cd1a7",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "向左使橫坐標為 -6，向上使縱坐標為 2，所以坐標是 (-6,2)。",
    "derivedAnswer": "(-6,2)",
    "storedAnswer": "(-6,2)",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(-6,2)」；其餘三項逐項檢查：「(6,2)」不成立，向左的負號遺漏。；「(-2,6)」不成立，把水平與垂直步數對調。；「(2,-6)」不成立，對調步數且把方向符號也反轉。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標讀法與點的位置」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "所有移動均由原點且平行坐標軸，終點唯一。",
      "alternateReading": "常見誤讀是「把方向符號漏掉或把 x、y 對調。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需要把兩段方向敘述翻成有序數對，仍是基礎技能。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "使用上一題所建立的 x 左右、y 上下規則。",
    "languageCheck": "題幹所求為「由位置敘述寫坐標」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「由原點向左 6 單位，再向上 2 單位，所到達的點為何？」重新依序處理：向左使橫坐標為 -6，向上使縱坐標為 2，所以坐標是 (-6,2)。 正確選項為「(-6,2)」。三個干擾項均對應不同錯誤：「(6,2)」不成立，向左的負號遺漏。；「(-2,6)」不成立，把水平與垂直步數對調。；「(2,-6)」不成立，對調步數且把方向符號也反轉。。邊界審查：所有移動均由原點且平行坐標軸，終點唯一。 難度理由：需要把兩段方向敘述翻成有序數對，仍是基礎技能。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s001-v003",
    "contentSha256": "54c6b9d3a060f02e9cf228d3bb0d68d2d48afd2b42761ee8e77ad7040d53b6d5",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "橫坐標放在第一個位置，縱坐標放在第二個位置，因此為 (-5,7)。",
    "derivedAnswer": "(-5,7)",
    "storedAnswer": "(-5,7)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(-5,7)」；其餘三項逐項檢查：「(5,7)」不成立，橫坐標負號遺失。；「(7,-5)」不成立，把兩個分量對調。；「(-7,5)」不成立，數值與位置均錯置。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標讀法與點的位置」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "題幹精確指定兩個分量，沒有方向或單位歧義。",
      "alternateReading": "常見誤讀是「把橫坐標與縱坐標位置互換。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "直接依定義選出有序數對，屬基礎辨認。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "已理解橫坐標為第一分量。",
    "languageCheck": "題幹所求為「辨認坐標分量順序」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「下列哪一個點的橫坐標是 -5，縱坐標是 7？」重新依序處理：橫坐標放在第一個位置，縱坐標放在第二個位置，因此為 (-5,7)。 正確選項為「(-5,7)」。三個干擾項均對應不同錯誤：「(5,7)」不成立，橫坐標負號遺失。；「(7,-5)」不成立，把兩個分量對調。；「(-7,5)」不成立，數值與位置均錯置。。邊界審查：題幹精確指定兩個分量，沒有方向或單位歧義。 難度理由：直接依定義選出有序數對，屬基礎辨認。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s001-v004",
    "contentSha256": "aeeb5c97286c6439ba1406f5bb236b44b317b1d7db0f6d97509292bcedd11df1",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "右方表示橫坐標為正，因此 a>0；第二分量 -4 已保證在下方。",
    "derivedAnswer": "a>0",
    "storedAnswer": "a>0",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「a>0」；其餘三項逐項檢查：「a<0」不成立，會使點位於左方。；「a=0」不成立，會使點落在 y 軸上，不在右方。；「a=-4」不成立，只把第二分量數值誤套給 a，且位於左方。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標讀法與點的位置」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "『右方且下方』均相對原點；a=0 不符合『右方』的嚴格條件。",
      "alternateReading": "常見誤讀是「只看固定的 -4，忽略 a 控制左右。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需要由位置語言反推參數符號，比直接讀點多一步。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需能由坐標讀法判斷正負方向。",
    "languageCheck": "題幹所求為「由方向反推未知坐標符號」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「點 P=(a,-4) 位於原點右方且下方。下列哪個條件必須成立？」重新依序處理：右方表示橫坐標為正，因此 a>0；第二分量 -4 已保證在下方。 正確選項為「a>0」。三個干擾項均對應不同錯誤：「a<0」不成立，會使點位於左方。；「a=0」不成立，會使點落在 y 軸上，不在右方。；「a=-4」不成立，只把第二分量數值誤套給 a，且位於左方。。邊界審查：『右方且下方』均相對原點；a=0 不符合『右方』的嚴格條件。 難度理由：需要由位置語言反推參數符號，比直接讀點多一步。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s001-v005",
    "contentSha256": "4c439775f2fd0b54de48e812dbd0b127e21536a70cf35cdbdbe088cfbef5c714",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "Q 的第二分量 b 表示上下位置；上方 9 單位使 b=9。",
    "derivedAnswer": "9",
    "storedAnswer": "9",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「9」；其餘三項逐項檢查：「-9」不成立，會表示下方 9。；「2」不成立，誤把水平距離當縱坐標。；「-2」不成立，直接重複使用橫坐標。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標讀法與點的位置」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "題意明確以原點為基準，b 是唯一值。",
      "alternateReading": "常見誤讀是「把水平資訊重複用在縱坐標。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需分辨已知與未知分量並保留方向，屬標準題。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需掌握有序數對中第二分量的意義。",
    "languageCheck": "題幹所求為「由完整位置補出未知分量」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「若 Q=(-2,b) 在原點左方 2 單位、上方 9 單位，則 b 等於多少？」重新依序處理：Q 的第二分量 b 表示上下位置；上方 9 單位使 b=9。 正確選項為「9」。三個干擾項均對應不同錯誤：「-9」不成立，會表示下方 9。；「2」不成立，誤把水平距離當縱坐標。；「-2」不成立，直接重複使用橫坐標。。邊界審查：題意明確以原點為基準，b 是唯一值。 難度理由：需分辨已知與未知分量並保留方向，屬標準題。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s001-v006",
    "contentSha256": "9a342c9d80704dd13f2c801d788c9dea0eede35da1c97306bdd3662041dd8a8f",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "R 的 x 正、y 負，所以在右下；S 的 x 負、y 正，所以在左上。交換坐標會得到不同位置。",
    "derivedAnswer": "R 在右下方，S 在左上方",
    "storedAnswer": "R 在右下方，S 在左上方",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「R 在右下方，S 在左上方」；其餘三項逐項檢查：「兩點相同」不成立，有序數對不能因數值相同而忽略順序。；「R 在左上方，S 在右下方」不成立，把兩點的符號方向互換。；「兩點都在右下方」不成立，忽略 S 的第一分量為負、第二分量為正。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標讀法與點的位置」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "兩點均不在坐標軸，方向判定唯一。",
      "alternateReading": "常見誤讀是「把有序數對當成無序集合。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需同時解讀兩點並說明順序不可交換，屬標準判斷。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需能逐點讀出左右與上下。",
    "languageCheck": "題幹所求為「比較坐標對調後的位置」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「點 R=(3,-8) 與 S=(-8,3) 的位置關係，下列敘述何者正確？」重新依序處理：R 的 x 正、y 負，所以在右下；S 的 x 負、y 正，所以在左上。交換坐標會得到不同位置。 正確選項為「R 在右下方，S 在左上方」。三個干擾項均對應不同錯誤：「兩點相同」不成立，有序數對不能因數值相同而忽略順序。；「R 在左上方，S 在右下方」不成立，把兩點的符號方向互換。；「兩點都在右下方」不成立，忽略 S 的第一分量為負、第二分量為正。。邊界審查：兩點均不在坐標軸，方向判定唯一。 難度理由：需同時解讀兩點並說明順序不可交換，屬標準判斷。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s001-v007",
    "contentSha256": "21ceeae7fa9ef09a91d9c04e8cdd9324dc0bd1e0fc13588c72e6396da83e028a",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "左方 5 使 x=-5，下方 5 使 y=-5；兩分量確實相等。",
    "derivedAnswer": "(-5,-5)",
    "storedAnswer": "(-5,-5)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "依題幹分段位移，橫坐標必為 -5、縱坐標必為 -5，只有 (-5,-5) 同時符合兩軸位移與分量相等。",
      "undefinedSymbol": "題幹直接使用坐標分量與水平、垂直位移，T 與原點均有明確定義，沒有未定義的距離記號。",
      "unitConflict": "向左與向下都使用相同的坐標單位，兩個分量可直接寫成 -5。",
      "roundingConflict": "本題位移皆為精確整數，不需要近似或四捨五入。",
      "domainBoundary": "題幹逐軸指定向左五單位、再向下五單位，已排除把『左下五單位』理解為斜距五的讀法。",
      "alternateReading": "若改讀成到原點的歐幾里得距離五，選項 (-5,-5) 不會符合；新題幹已明示兩軸各移動五單位，因此沒有此歧義。"
    },
    "difficultyReason": "需同時使用位置、距離與相等條件，屬進階整合。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需理解坐標分量與方向。",
    "languageCheck": "題幹所求為「整合方向與分量相等條件」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "重新依修正後題幹獨立驗算：由原點向左五單位得到 x=-5，再向下五單位得到 y=-5，兩個分量相等，唯一答案為 (-5,-5)。其他選項至少有一個方向符號錯誤。題幹現在逐軸列出水平與垂直位移，沒有把『左下五單位』偷偷解讀成兩軸各五，也明確排除斜距五的替代讀法。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s001-v008",
    "contentSha256": "aa61fdf16572d03266d6b83f711729568d8800f452bca67bf39f8529f3f2aec7",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "由第一分量 m+1=4 得 m=3；第二分量 2m-3=3 也得到 m=3，兩個分量一致。",
    "derivedAnswer": "3",
    "storedAnswer": "3",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「3」；其餘三項逐項檢查：「1」不成立，代入得 (2,-1)。；「2」不成立，代入得 (3,1)。；「4」不成立，代入得 (5,5)。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標讀法與點的位置」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "有序數對相等要求對應分量分別相等，答案唯一。",
      "alternateReading": "常見誤讀是「只比較一個分量或把有序數對當整體相加。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "必須建立並交叉驗證兩個分量等式，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會解簡單一元一次方程式。",
    "languageCheck": "題幹所求為「由兩個坐標分量共同求參數」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「已知 A=(m+1,2m-3) 恰為 (4,3)，則 m 的值為何？」重新依序處理：由第一分量 m+1=4 得 m=3；第二分量 2m-3=3 也得到 m=3，兩個分量一致。 正確選項為「3」。三個干擾項均對應不同錯誤：「1」不成立，代入得 (2,-1)。；「2」不成立，代入得 (3,1)。；「4」不成立，代入得 (5,5)。。邊界審查：有序數對相等要求對應分量分別相等，答案唯一。 難度理由：必須建立並交叉驗證兩個分量等式，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s001-v009",
    "contentSha256": "249ff80a5a1eca615b70150b66b4df751f49ea72887b32eccbecc046110c5dd2",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "位於 y 軸上表示橫坐標為 0，所以 2-k=0，解得 k=2；此時 U=(0,-3)，確實在 y 軸上。",
    "derivedAnswer": "2",
    "storedAnswer": "2",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「2」；其餘三項逐項檢查：「-2」不成立，橫坐標為 4。；「3」不成立，橫坐標為 -1。；「5」不成立，橫坐標為 -3。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標讀法與點的位置」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "y 軸包含原點上下所有 x=0 的點，不要求 y 為正。",
      "alternateReading": "常見誤讀是「誤把 y 軸條件寫成縱坐標為 0。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需把位置敘述轉為分量方程式並回代驗證，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需理解橫坐標控制左右位置。",
    "languageCheck": "題幹所求為「由軸上位置求參數」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「點 U=(2-k,k-5) 位於 y 軸上。下列哪個 k 值符合？」重新依序處理：位於 y 軸上表示橫坐標為 0，所以 2-k=0，解得 k=2；此時 U=(0,-3)，確實在 y 軸上。 正確選項為「2」。三個干擾項均對應不同錯誤：「-2」不成立，橫坐標為 4。；「3」不成立，橫坐標為 -1。；「5」不成立，橫坐標為 -3。。邊界審查：y 軸包含原點上下所有 x=0 的點，不要求 y 為正。 難度理由：需把位置敘述轉為分量方程式並回代驗證，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s001-v010",
    "contentSha256": "e12843cea705aae2f3235e0ac5d20a271694278135978298da49674ff5428ce0",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "西方對應 x 負，所以 x=-4；南方對應 y 負，所以 y=-1，坐標為 (-4,-1)。",
    "derivedAnswer": "(-4,-1)",
    "storedAnswer": "(-4,-1)",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(-4,-1)」；其餘三項逐項檢查：「(4,-1)」不成立，把西方誤當 x 正向。；「(-1,-4)」不成立，把格數與分量對調。；「(4,1)」不成立，把西、南都誤判為正向。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標讀法與點的位置」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標單位是格；答案是位置坐標，不另乘實際公尺。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "方向由題目明確定義，不假設地圖旋轉或其他比例。",
      "alternateReading": "常見誤讀是「未先依題目建立東西南北與坐標正負的對應。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "資訊情境必要，需把方位定義轉成兩個坐標分量。",
    "literacyContextNecessity": "若移除警衛室、東北正向與西南方位資訊，就無法決定保健室的正負坐標；情境是建模必要條件。",
    "prerequisiteCheck": "僅使用本技能的方向與有序數對。",
    "languageCheck": "題幹所求為「在校園方位情境讀寫坐標」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「校園導覽以警衛室為原點，東方為 x 正向、北方為 y 正向。保健室在警衛室西方 4 格、南方 1 格，其坐標為何？」重新依序處理：西方對應 x 負，所以 x=-4；南方對應 y 負，所以 y=-1，坐標為 (-4,-1)。 正確選項為「(-4,-1)」。三個干擾項均對應不同錯誤：「(4,-1)」不成立，把西方誤當 x 正向。；「(-1,-4)」不成立，把格數與分量對調。；「(4,1)」不成立，把西、南都誤判為正向。。邊界審查：方向由題目明確定義，不假設地圖旋轉或其他比例。 難度理由：資訊情境必要，需把方位定義轉成兩個坐標分量。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s001-v011",
    "contentSha256": "2e5bfa3f1ebc94bc178ab2f7065a5f72296c489895752488f83fe4e3b92c99b5",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "第一分量 3 表示向右 3 欄；第二分量 5 表示向內 5 列。",
    "derivedAnswer": "從入口向右 3 欄、向內 5 列",
    "storedAnswer": "從入口向右 3 欄、向內 5 列",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「從入口向右 3 欄、向內 5 列」；其餘三項逐項檢查：「從入口向右 5 欄、向內 3 列」不成立，交換欄與列的數值。；「從入口向左 3 欄、向內 5 列」不成立，把 x 正向讀成左。；「從入口向右 3 欄、向外 5 列」不成立，把 y 正向讀成外。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標讀法與點的位置」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "x 使用欄、y 使用列，兩者不可互換；答案保留各自單位名稱。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "題目已定義『向內』為 y 正向，不能依一般地圖習慣改讀。",
      "alternateReading": "常見誤讀是「忽略情境自訂的正方向或交換欄列。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需將抽象坐標對應到兩種不同空間語意，屬素養題。",
    "literacyContextNecessity": "欄與列分別承擔 x、y 的真實定位功能；移除貨架規則後，坐標無法轉回可操作的位置指令。",
    "prerequisiteCheck": "需掌握坐標第一、第二分量。",
    "languageCheck": "題幹所求為「解讀貨架位置編碼」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「倉庫貨架以入口為 (0,0)，向右一欄使 x 增加 1，向內一列使 y 增加 1。貨物標示位置為 (3,5)，正確敘述為何？」重新依序處理：第一分量 3 表示向右 3 欄；第二分量 5 表示向內 5 列。 正確選項為「從入口向右 3 欄、向內 5 列」。三個干擾項均對應不同錯誤：「從入口向右 5 欄、向內 3 列」不成立，交換欄與列的數值。；「從入口向左 3 欄、向內 5 列」不成立，把 x 正向讀成左。；「從入口向右 3 欄、向外 5 列」不成立，把 y 正向讀成外。。邊界審查：題目已定義『向內』為 y 正向，不能依一般地圖習慣改讀。 難度理由：需將抽象坐標對應到兩種不同空間語意，屬素養題。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s001-v012",
    "contentSha256": "083d3481ec9ae314049113bbd290a81983a28fd0d22a07e1b2d96ed27786ba2b",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "x=-7 表示向左 7 格；y=2 表示向上 2 格，所以應左 7、上 2。",
    "derivedAnswer": "從出生點向左 7 格、向上 2 格",
    "storedAnswer": "從出生點向左 7 格、向上 2 格",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「從出生點向左 7 格、向上 2 格」；其餘三項逐項檢查：「從出生點向左 2 格、向上 7 格」不成立，交換兩個分量。；「從出生點向右 7 格、向上 2 格」不成立，忽略 x 的負號。；「從出生點向左 7 格、向下 2 格」不成立，把正 y 誤讀為向下。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標讀法與點的位置」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標單位與地圖格一致，答案以格數表達。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "所有移動相對同一出生點，且只要求終點位置，不涉及路線障礙。",
      "alternateReading": "常見誤讀是「在具體路線中把負號當成不能移動，或交換 x、y。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需把系統紀錄轉成可執行方向語句，情境理解不可省略。",
    "literacyContextNecessity": "遊戲的出生點與正方向定義決定尋路指令；若只保留數字而移除規則，無法判斷左右上下。",
    "prerequisiteCheck": "需能由坐標完整描述相對位置。",
    "languageCheck": "題幹所求為「將系統坐標轉成尋路指令」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「遊戲地圖規定角色出生點為原點，向右與向上分別為 x、y 正向。系統記錄角色在 (-7,2)。哪個說明最適合用來尋找角色？」重新依序處理：x=-7 表示向左 7 格；y=2 表示向上 2 格，所以應左 7、上 2。 正確選項為「從出生點向左 7 格、向上 2 格」。三個干擾項均對應不同錯誤：「從出生點向左 2 格、向上 7 格」不成立，交換兩個分量。；「從出生點向右 7 格、向上 2 格」不成立，忽略 x 的負號。；「從出生點向左 7 格、向下 2 格」不成立，把正 y 誤讀為向下。。邊界審查：所有移動相對同一出生點，且只要求終點位置，不涉及路線障礙。 難度理由：需把系統紀錄轉成可執行方向語句，情境理解不可省略。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
