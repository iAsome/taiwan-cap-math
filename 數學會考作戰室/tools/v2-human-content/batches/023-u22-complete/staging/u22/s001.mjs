// Emitted from reviewed immutable source. Do not edit.
export default {
  "lecture": {
    "lectureId": "u22-s001-lecture-r1",
    "unitId": "u22",
    "numericUnitId": 22,
    "topicId": "u22-quartiles",
    "skillId": "quartile-calculation",
    "lockedSkillOrder": 1,
    "title": "四分位數：以排序後資料的中位數與上下半部中位數求 Q1與Q2與Q3。",
    "originalLockedTitle": "四分位數",
    "audience": "臺灣國中零基礎至國中教育會考數學滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "learningOutcomes": [
      "能先排序資料並求Q1、Q2、Q3。",
      "能依資料筆數奇偶正確切分上下半部。",
      "能說明四分位數是位置量而非固定資料值。",
      "能由四分位數求IQR。"
    ],
    "prerequisiteSkillIds": [],
    "prerequisiteBridge": "承接先前單元的排序、平均與中位數概念。",
    "glossary": [
      {
        "term": "四分位數",
        "definition": "把排序後資料約分成四個等量區段的三個分界位置量。"
      },
      {
        "term": "中位數",
        "definition": "排序後位於中央的值，又稱Q2。"
      },
      {
        "term": "半分法",
        "definition": "先求中位數，再分別求上下半部中位數的方法。"
      },
      {
        "term": "IQR",
        "definition": "Q3與Q1之差，描述中間50%的跨度。"
      }
    ],
    "notation": [
      {
        "symbol": "Q1",
        "meaning": "第一四分位數。"
      },
      {
        "symbol": "Q2",
        "meaning": "第二四分位數，也就是中位數。"
      },
      {
        "symbol": "Q3",
        "meaning": "第三四分位數。"
      },
      {
        "symbol": "IQR=Q3-Q1",
        "meaning": "四分位距。"
      }
    ],
    "conceptNarrative": [
      "四分位數一定先建立在排序上；原始資料出現順序沒有位置意義。",
      "本單元採國中常用半分法：偶數筆直接分成等量兩半；奇數筆先取總中位數，求Q1與Q3時排除該中位數。",
      "上下半部各自仍要依中位數規則處理，所以半部若有偶數筆，要平均中央兩筆。",
      "Q1、Q2、Q3可能不是原始資料中的某一筆，例如中央兩筆平均後得到小數。",
      "四分位數描述位置，不代表剛好有25%的人等於Q1。"
    ],
    "formalDefinitions": [
      {
        "name": "四分位數",
        "statement": "排序後將資料位置分成四部分的分界量。"
      },
      {
        "name": "四分位距",
        "statement": "IQR=Q3-Q1，只看中間一半資料的跨度。"
      }
    ],
    "formulas": [
      {
        "formula": "Q2=(中央左值+中央右值)÷2",
        "conditions": [
          "資料筆數為偶數時。"
        ],
        "meaning": "資料筆數為偶數時。"
      },
      {
        "formula": "IQR=Q3-Q1",
        "conditions": [
          "Q1、Q3已依同一規則求得時。"
        ],
        "meaning": "Q1、Q3已依同一規則求得時。"
      }
    ],
    "nonApplicableCases": [
      "未排序不可直接取位置。",
      "不同教材若另定插值規則，必須依題幹；本批次題目會明定半分法。",
      "不能把最大值與最小值當Q3與Q1。",
      "不能由Q1、Q3直接推得平均數。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "先排序",
        "check": "由小到大列出並核對筆數。"
      },
      {
        "step": 2,
        "instruction": "求Q2",
        "check": "依整組筆數奇偶取中央值或中央平均。"
      },
      {
        "step": 3,
        "instruction": "切上下半部",
        "check": "奇數筆排除Q2，偶數筆直接平分。"
      },
      {
        "step": 4,
        "instruction": "求Q1與Q3",
        "check": "各半部再求中位數。"
      },
      {
        "step": 5,
        "instruction": "回查順序",
        "check": "確認最小值≤Q1≤Q2≤Q3≤最大值。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "資料2、4、6、8、10、12、14、16",
        "solutionSteps": [
          "Q2=(8+10)÷2=9；Q1=(4+6)÷2=5；Q3=(12+14)÷2=13。"
        ],
        "answer": "Q2=(8+10)÷2=9；Q1=(4+6)÷2=5；Q3=(12+14)÷2=13。"
      },
      {
        "exampleId": "L2",
        "prompt": "9筆資料1、3、4、6、8、10、11、15、20",
        "solutionSteps": [
          "Q2=8；排除8後，Q1=(3+4)÷2=3.5，Q3=(11+15)÷2=13。"
        ],
        "answer": "Q2=8；排除8後，Q1=(3+4)÷2=3.5，Q3=(11+15)÷2=13。"
      },
      {
        "exampleId": "L3",
        "prompt": "Q1=12、Q3=19",
        "solutionSteps": [
          "IQR=7。"
        ],
        "answer": "IQR=7。"
      },
      {
        "exampleId": "L4",
        "prompt": "8筆資料中Q2=10且中央右值12",
        "solutionSteps": [
          "中央左值x滿足(x+12)÷2=10，所以x=8。"
        ],
        "answer": "中央左值x滿足(x+12)÷2=10，所以x=8。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "未排序就找第幾筆",
        "why": "位置會錯；先排序再編號。",
        "correction": "位置會錯；先排序再編號。"
      },
      {
        "mistake": "奇數筆把Q2放進上下兩半",
        "why": "會重複中央資料；依本節規則排除。",
        "correction": "會重複中央資料；依本節規則排除。"
      },
      {
        "mistake": "半部為偶數卻只取一筆",
        "why": "應平均該半部中央兩筆。",
        "correction": "應平均該半部中央兩筆。"
      },
      {
        "mistake": "把Q1寫成資料總數的四分之一",
        "why": "四分之一是位置概念，不是資料值。",
        "correction": "四分之一是位置概念，不是資料值。"
      }
    ],
    "selfCheck": [
      "資料是否已排序？",
      "筆數奇偶是否判對？",
      "奇數筆是否依題幹排除總中位數？",
      "五數順序是否非遞減？",
      "IQR是否非負？"
    ],
    "summary": [
      "先排序，再求Q2，再分半求Q1與Q3。",
      "位置規則要一致，遇不同規則以題幹為準。",
      "Q1到Q3涵蓋中間約50%的位置。",
      "IQR只描述中段跨度。"
    ],
    "connections": {
      "previous": "承接先前單元的排序、平均與中位數概念。",
      "next": [
        "下一技能把五數摘要轉成盒狀圖。",
        "後續會用Q1、Q3判斷IQR與離群值。"
      ]
    },
    "figureReferences": [],
    "figureAccessibility": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u22-s001-v001",
        "u22-s001-v002",
        "u22-s001-v003",
        "u22-s001-v004",
        "u22-s001-v005",
        "u22-s001-v006",
        "u22-s001-v007",
        "u22-s001-v008",
        "u22-s001-v009",
        "u22-s001-v010",
        "u22-s001-v011",
        "u22-s001-v012"
      ],
      "constructedResponseIds": [
        "u22-s001-cr001",
        "u22-s001-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "minimumCommonMistakesMet": true,
      "symbolDefinitionsComplete": true,
      "skillSpecificReviewEvidence": "逐例重算奇偶筆數、中央位置與平均；特別核對9筆資料排除中位數後的上下半部，所有四分位數均符合非遞減順序。",
      "futureKnowledgeCheck": "pass; all methods use this skill or declared prerequisites only",
      "contentBoundary": "以排序後資料的中位數與上下半部中位數求 Q1、Q2、Q3。",
      "reviewVersion": "human-lecture-review-u22-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "b179c4c033ae4cef008338849a74476a1a015825c81bfa78ff4dc60cc37367da"
  },
  "mcQuestions": [
    {
      "questionId": "u22-s001-v001",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-calculation",
      "lockedSkillOrder": 1,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "已排序資料為 2、4、6、8、10、12、14、16，其中位數 Q2 是多少？",
      "text": "已排序資料為 2、4、6、8、10、12、14、16，其中位數 Q2 是多少？",
      "givenConditions": [],
      "target": "計算 Q2",
      "choices": [
        "9",
        "8",
        "10",
        "11"
      ],
      "answerIndex": 0,
      "independentSolution": "共有8筆，中央兩筆為8與10，所以 Q2=(8+10)÷2=9。",
      "explanation": "共有8筆，中央兩筆為8與10，所以 Q2=(8+10)÷2=9。",
      "steps": [
        "確認資料已排序且共有8筆。",
        "取第4筆8與第5筆10。",
        "計算平均得9。"
      ],
      "optionAnalysis": [
        {
          "choice": "9",
          "truth": true,
          "reason": "正確。獨立重算：共有8筆，中央兩筆為8與10，所以 Q2=(8+10)÷2=9。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "只取第4筆，忽略偶數筆資料要平均中間兩筆。"
        },
        {
          "choice": "10",
          "truth": false,
          "reason": "只取第5筆，忽略偶數筆資料要平均中間兩筆。"
        },
        {
          "choice": "11",
          "truth": false,
          "reason": "誤把第5、6筆平均。"
        }
      ],
      "misconceptionTarget": "偶數筆資料只取其中一個中央值。",
      "prerequisiteCheck": "本技能為U22起點，使用排序、中位數與基本四則。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "所有資料皆為數值，排序與筆數條件完整。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：求偶數筆資料的中位數",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "求偶數筆資料的中位數",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "4f67edd7ede277dcdeb0ef6377a228eb7dc98c4f0e350d9587bda4f165b48b48"
    },
    {
      "questionId": "u22-s001-v002",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-calculation",
      "lockedSkillOrder": 1,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "資料 1、3、5、7、9、11、13、15 已由小到大排列。依「上下各半再取中位數」的規則，Q1 為何？",
      "text": "資料 1、3、5、7、9、11、13、15 已由小到大排列。依「上下各半再取中位數」的規則，Q1 為何？",
      "givenConditions": [],
      "target": "計算偶數筆資料的 Q1",
      "choices": [
        "3",
        "4",
        "5",
        "6"
      ],
      "answerIndex": 1,
      "independentSolution": "下半部為1、3、5、7，其中位數是(3+5)÷2=4。",
      "explanation": "下半部為1、3、5、7，其中位數是(3+5)÷2=4。",
      "steps": [
        "分出下半部1、3、5、7。",
        "取中央兩筆3與5。",
        "平均得4。"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": false,
          "reason": "只取下半部第2筆，未平均3與5。"
        },
        {
          "choice": "4",
          "truth": true,
          "reason": "正確。獨立重算：下半部為1、3、5、7，其中位數是(3+5)÷2=4。"
        },
        {
          "choice": "5",
          "truth": false,
          "reason": "只取下半部第3筆。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "把整組第3、4筆平均。"
        }
      ],
      "misconceptionTarget": "把 Q1 當成整組資料的第1/4筆直接取值。",
      "prerequisiteCheck": "本技能為U22起點，使用排序、中位數與基本四則。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "採國中常用半分法，資料筆數為8，不涉及插值規則。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：計算偶數筆資料的 Q1",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "計算偶數筆資料的 Q1",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "dfce9bdfa61bb05c943edf8882456144c975ac56ef1409151b6eaa8ec1773e4a"
    },
    {
      "questionId": "u22-s001-v003",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-calculation",
      "lockedSkillOrder": 1,
      "difficulty": "basic",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "已排序的7筆資料為4、6、8、10、12、14、16。依排除總中位數的半分法，Q3是多少？",
      "text": "已排序的7筆資料為4、6、8、10、12、14、16。依排除總中位數的半分法，Q3是多少？",
      "givenConditions": [],
      "target": "計算偶數筆資料的 Q3",
      "choices": [
        "12",
        "13",
        "14",
        "15"
      ],
      "answerIndex": 2,
      "independentSolution": "總中位數是10，排除後上半部為12、14、16；上半部中位數是14，所以Q3=14。",
      "explanation": "總中位數是10，排除後上半部為12、14、16；上半部中位數是14，所以Q3=14。",
      "steps": [
        "找總中位數10並排除。",
        "上半部是12、14、16。",
        "取其中位數14。"
      ],
      "optionAnalysis": [
        {
          "choice": "12",
          "truth": false,
          "reason": "只取上半部第一筆。"
        },
        {
          "choice": "13",
          "truth": false,
          "reason": "誤把12與14平均。"
        },
        {
          "choice": "14",
          "truth": true,
          "reason": "正確。獨立重算：總中位數是10，排除後上半部為12、14、16；上半部中位數是14，所以Q3=14。"
        },
        {
          "choice": "15",
          "truth": false,
          "reason": "誤把14與16平均。"
        }
      ],
      "misconceptionTarget": "奇數筆資料排除總中位數後，仍誤把上半部中央兩值平均。",
      "prerequisiteCheck": "本技能為U22起點，使用排序、中位數與基本四則。",
      "estimatedTimeSec": 75,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "題幹明定排除總中位數；上半部有3筆，因此Q3為單一中央值。",
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：計算奇數筆資料的Q3",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "計算奇數筆資料的Q3",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "40b067a4721c5fc2ef9c5e24eba10367e8c300fe30b2e9230a36d85c8ee65647"
    },
    {
      "questionId": "u22-s001-v004",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-calculation",
      "lockedSkillOrder": 1,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "將資料 12、7、9、5、20、15、11、8 排序後求得 Q1 與 Q3。Q1+Q3 等於多少？",
      "text": "將資料 12、7、9、5、20、15、11、8 排序後求得 Q1 與 Q3。Q1+Q3 等於多少？",
      "givenConditions": [],
      "target": "先排序再計算兩個四分位數",
      "choices": [
        "20",
        "22",
        "23",
        "21"
      ],
      "answerIndex": 3,
      "independentSolution": "排序為5、7、8、9、11、12、15、20。Q1=(7+8)÷2=7.5，Q3=(12+15)÷2=13.5，因此總和21。",
      "explanation": "排序為5、7、8、9、11、12、15、20。Q1=(7+8)÷2=7.5，Q3=(12+15)÷2=13.5，因此總和21。",
      "steps": [
        "先排序資料。",
        "下半部中央平均得7.5。",
        "上半部中央平均得13.5。",
        "相加得21。"
      ],
      "optionAnalysis": [
        {
          "choice": "20",
          "truth": false,
          "reason": "把Q1=7、Q3=13直接相加。"
        },
        {
          "choice": "22",
          "truth": false,
          "reason": "把Q1=8、Q3=14直接相加。"
        },
        {
          "choice": "23",
          "truth": false,
          "reason": "誤取第2筆與第7筆。"
        },
        {
          "choice": "21",
          "truth": true,
          "reason": "正確。獨立重算：排序為5、7、8、9、11、12、15、20。Q1=(7+8)÷2=7.5，Q3=(12+15)÷2=13.5，因此總和21。"
        }
      ],
      "misconceptionTarget": "未先排序就依原出現順序取四分位數。",
      "prerequisiteCheck": "本技能為U22起點，使用排序、中位數與基本四則。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "資料無重複與缺漏，採半分法。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：先排序再計算兩個四分位數",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "先排序再計算兩個四分位數",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "dc8c0d4bb27422be4342544861bb056cfa65638e2d49c987bb323f3b9f4282f3"
    },
    {
      "questionId": "u22-s001-v005",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-calculation",
      "lockedSkillOrder": 1,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "已排序的9筆資料為 2、4、6、8、10、12、14、16、18。求四分位距 IQR=Q3-Q1。計算 Q1、Q3 時不把中位數10放入上下半部。",
      "text": "已排序的9筆資料為 2、4、6、8、10、12、14、16、18。求四分位距 IQR=Q3-Q1。計算 Q1、Q3 時不把中位數10放入上下半部。",
      "givenConditions": [],
      "target": "依指定規則求奇數筆資料的IQR",
      "choices": [
        "10",
        "8",
        "12",
        "14"
      ],
      "answerIndex": 0,
      "independentSolution": "排除中位數10後，下半部2、4、6、8的中位數是5，上半部12、14、16、18的中位數是15，IQR=15-5=10。",
      "explanation": "排除中位數10後，下半部2、4、6、8的中位數是5，上半部12、14、16、18的中位數是15，IQR=15-5=10。",
      "steps": [
        "找Q2=10並排除。",
        "Q1=(4+6)÷2=5。",
        "Q3=(14+16)÷2=15。",
        "IQR=10。"
      ],
      "optionAnalysis": [
        {
          "choice": "10",
          "truth": true,
          "reason": "正確。獨立重算：排除中位數10後，下半部2、4、6、8的中位數是5，上半部12、14、16、18的中位數是15，IQR=15-5=10。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "把Q1誤算成6、Q3誤算成14。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "把端點差的一半當IQR。"
        },
        {
          "choice": "14",
          "truth": false,
          "reason": "以最大值減最小值，算成全距。"
        }
      ],
      "misconceptionTarget": "奇數筆資料把總中位數重複放進上下兩半。",
      "prerequisiteCheck": "本技能為U22起點，使用排序、中位數與基本四則。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "題幹已明定奇數筆時排除中位數，避免不同教材慣例造成歧義。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：依指定規則求奇數筆資料的IQR",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "依指定規則求奇數筆資料的IQR",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "03efcef1b1bcd9e57cb55cce2f342fcbccea242bbda12ca07a46cb1e4583e0bf"
    },
    {
      "questionId": "u22-s001-v006",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-calculation",
      "lockedSkillOrder": 1,
      "difficulty": "standard",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "資料 4、5、6、7、8、9、10、11 的 Q1 與 Q3 分別為何？",
      "text": "資料 4、5、6、7、8、9、10、11 的 Q1 與 Q3 分別為何？",
      "givenConditions": [],
      "target": "同時計算Q1與Q3",
      "choices": [
        "5 與 10",
        "5.5 與 9.5",
        "6 與 9",
        "5.5 與 10"
      ],
      "answerIndex": 1,
      "independentSolution": "下半部4、5、6、7的中位數為5.5；上半部8、9、10、11的中位數為9.5。",
      "explanation": "下半部4、5、6、7的中位數為5.5；上半部8、9、10、11的中位數為9.5。",
      "steps": [
        "分成前4筆與後4筆。",
        "各自取中央兩筆平均。"
      ],
      "optionAnalysis": [
        {
          "choice": "5 與 10",
          "truth": false,
          "reason": "各取下半部、上半部的端點而未平均。"
        },
        {
          "choice": "5.5 與 9.5",
          "truth": true,
          "reason": "正確。獨立重算：下半部4、5、6、7的中位數為5.5；上半部8、9、10、11的中位數為9.5。"
        },
        {
          "choice": "6 與 9",
          "truth": false,
          "reason": "只取靠近中央的兩筆。"
        },
        {
          "choice": "5.5 與 10",
          "truth": false,
          "reason": "Q3只取上半部第三筆。"
        }
      ],
      "misconceptionTarget": "同一題中對Q1與Q3採用不同規則。",
      "prerequisiteCheck": "本技能為U22起點，使用排序、中位數與基本四則。",
      "estimatedTimeSec": 100,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "資料筆數與排序完整。",
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：同時計算Q1與Q3",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "同時計算Q1與Q3",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "7f9244bb08f9c55be1cdce210c14ae28350679901b68e6aa896aa5c338219e0c"
    },
    {
      "questionId": "u22-s001-v007",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-calculation",
      "lockedSkillOrder": 1,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "已排序資料為 2、4、6、x、12、14、16、18，且中位數為10。若 x<12，則 x 等於多少？",
      "text": "已排序資料為 2、4、6、x、12、14、16、18，且中位數為10。若 x<12，則 x 等於多少？",
      "givenConditions": [],
      "target": "由中位數反求未知資料",
      "choices": [
        "6",
        "10",
        "8",
        "12"
      ],
      "answerIndex": 2,
      "independentSolution": "8筆資料的中位數是第4、5筆平均，所以(x+12)÷2=10，解得x=8；也符合6≤x<12的排序。",
      "explanation": "8筆資料的中位數是第4、5筆平均，所以(x+12)÷2=10，解得x=8；也符合6≤x<12的排序。",
      "steps": [
        "列式(x+12)÷2=10。",
        "解得x=8。",
        "回查排序位置。"
      ],
      "optionAnalysis": [
        {
          "choice": "6",
          "truth": false,
          "reason": "把第3筆當作第一個中央值。"
        },
        {
          "choice": "10",
          "truth": false,
          "reason": "把中位數直接當x。"
        },
        {
          "choice": "8",
          "truth": true,
          "reason": "正確。獨立重算：8筆資料的中位數是第4、5筆平均，所以(x+12)÷2=10，解得x=8；也符合6≤x<12的排序。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "忽略x<12且讓中央兩筆相同。"
        }
      ],
      "misconceptionTarget": "只用中位數數值猜未知資料，不列中央平均式。",
      "prerequisiteCheck": "本技能為U22起點，使用排序、中位數與基本四則。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "x必須維持已排序條件，8符合位置限制。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：由中位數反求未知資料",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "由中位數反求未知資料",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "44de1fa148acd60b2d8ff3563ef810e29aecdce2605cbf016a3add066e6d5cc2"
    },
    {
      "questionId": "u22-s001-v008",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-calculation",
      "lockedSkillOrder": 1,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "資料 1、2、4、7、9、10、12、15 的 Q1、Q2、Q3 之和是多少？",
      "text": "資料 1、2、4、7、9、10、12、15 的 Q1、Q2、Q3 之和是多少？",
      "givenConditions": [],
      "target": "整合三個四分位數",
      "choices": [
        "20.5",
        "21",
        "22.5",
        "22"
      ],
      "answerIndex": 3,
      "independentSolution": "Q1=(2+4)÷2=3，Q2=(7+9)÷2=8，Q3=(10+12)÷2=11，總和22。",
      "explanation": "Q1=(2+4)÷2=3，Q2=(7+9)÷2=8，Q3=(10+12)÷2=11，總和22。",
      "steps": [
        "Q1=3。",
        "Q2=8。",
        "Q3=11。",
        "相加得22。"
      ],
      "optionAnalysis": [
        {
          "choice": "20.5",
          "truth": false,
          "reason": "中央值或加總計算錯誤。"
        },
        {
          "choice": "21",
          "truth": false,
          "reason": "把Q3誤算成10。"
        },
        {
          "choice": "22.5",
          "truth": false,
          "reason": "把Q1或Q3多算0.5。"
        },
        {
          "choice": "22",
          "truth": true,
          "reason": "正確。獨立重算：Q1=(2+4)÷2=3，Q2=(7+9)÷2=8，Q3=(10+12)÷2=11，總和22。"
        }
      ],
      "misconceptionTarget": "計算多個位置量時漏掉平均或加總錯誤。",
      "prerequisiteCheck": "本技能為U22起點，使用排序、中位數與基本四則。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "資料排序與半分規則明確。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：整合三個四分位數",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "整合三個四分位數",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "56baf6b46ab916369ec0ad4db6743abaf14cb94198185af89488f78441069391"
    },
    {
      "questionId": "u22-s001-v009",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-calculation",
      "lockedSkillOrder": 1,
      "difficulty": "advanced",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "已排序資料 2、3、5、7、11、13、17、19 刪除最大值19後，依排除總中位數的規則，新資料的 IQR 為多少？",
      "text": "已排序資料 2、3、5、7、11、13、17、19 刪除最大值19後，依排除總中位數的規則，新資料的 IQR 為多少？",
      "givenConditions": [],
      "target": "資料刪除後重新求四分位數",
      "choices": [
        "10",
        "8",
        "12",
        "14"
      ],
      "answerIndex": 0,
      "independentSolution": "刪除後為2、3、5、7、11、13、17，共7筆。中位數7排除後，Q1=3，Q3=13，所以IQR=10。",
      "explanation": "刪除後為2、3、5、7、11、13、17，共7筆。中位數7排除後，Q1=3，Q3=13，所以IQR=10。",
      "steps": [
        "刪除19並重新確認7筆。",
        "排除中位數7。",
        "下半部中位數3，上半部中位數13。",
        "相減得10。"
      ],
      "optionAnalysis": [
        {
          "choice": "10",
          "truth": true,
          "reason": "正確。獨立重算：刪除後為2、3、5、7、11、13、17，共7筆。中位數7排除後，Q1=3，Q3=13，所以IQR=10。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "沿用原資料的Q1與Q3。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "把新全距的一部分當IQR。"
        },
        {
          "choice": "14",
          "truth": false,
          "reason": "以17-3計算，混用端點。"
        }
      ],
      "misconceptionTarget": "資料筆數改變後仍沿用原四分位數位置。",
      "prerequisiteCheck": "本技能為U22起點，使用排序、中位數與基本四則。",
      "estimatedTimeSec": 150,
      "unitCheck": "不涉及單位換算；各數值在同一表示基準下。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "題幹指定排除中位數；刪除後仍保持排序。",
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：資料刪除後重新求四分位數",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "資料刪除後重新求四分位數",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "db17877b364234f7c781b6d19b2f507ff4e9675e3a555b487a8229d47d4001e5"
    },
    {
      "questionId": "u22-s001-v010",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-calculation",
      "lockedSkillOrder": 1,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某班12位學生通學時間（分鐘）為 8、10、12、13、15、16、18、20、22、25、30、36。若把 Q3 解讀為「約有四分之一學生的通學時間不低於此值」，Q3 為多少分鐘？",
      "text": "某班12位學生通學時間（分鐘）為 8、10、12、13、15、16、18、20、22、25、30、36。若把 Q3 解讀為「約有四分之一學生的通學時間不低於此值」，Q3 為多少分鐘？",
      "givenConditions": [],
      "target": "以四分位數解讀通學時間門檻",
      "choices": [
        "22",
        "23.5",
        "25",
        "27.5"
      ],
      "answerIndex": 1,
      "independentSolution": "上半部為18、20、22、25、30、36，其中位數是(22+25)÷2=23.5分鐘。",
      "explanation": "上半部為18、20、22、25、30、36，其中位數是(22+25)÷2=23.5分鐘。",
      "steps": [
        "取後6筆。",
        "找後6筆中央兩值22與25。",
        "平均得23.5分鐘。"
      ],
      "optionAnalysis": [
        {
          "choice": "22",
          "truth": false,
          "reason": "直接取第9筆。"
        },
        {
          "choice": "23.5",
          "truth": true,
          "reason": "正確。獨立重算：上半部為18、20、22、25、30、36，其中位數是(22+25)÷2=23.5分鐘。"
        },
        {
          "choice": "25",
          "truth": false,
          "reason": "直接取第10筆。"
        },
        {
          "choice": "27.5",
          "truth": false,
          "reason": "誤平均25與30。"
        }
      ],
      "misconceptionTarget": "把「後25%」誤解為直接取第9或第10筆。",
      "prerequisiteCheck": "本技能為U22起點，使用排序、中位數與基本四則。",
      "estimatedTimeSec": 180,
      "unitCheck": "所有數值單位皆為分鐘，答案保留分鐘。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "12筆資料已排序；Q3為位置量，不代表恰有每人等於該值。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：以四分位數解讀通學時間門檻",
      "literacyContextNecessity": "通學情境使Q3作為較長通學族群的門檻有實際意義。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "以四分位數解讀通學時間門檻",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "f8b29b9b9bcd84adfa732ff4dd2ede3ffe4ce8d2474d47ba23b403493b224b18"
    },
    {
      "questionId": "u22-s001-v011",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-calculation",
      "lockedSkillOrder": 1,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "一組8次測驗成績排序為 55、62、68、71、76、82、88、96。老師說「中間50%的成績落在 Q1 到 Q3 之間」。這個區間為何？",
      "text": "一組8次測驗成績排序為 55、62、68、71、76、82、88、96。老師說「中間50%的成績落在 Q1 到 Q3 之間」。這個區間為何？",
      "givenConditions": [],
      "target": "用四分位數描述中間一半成績",
      "choices": [
        "62 到 88",
        "68 到 82",
        "65 到 85",
        "71 到 76"
      ],
      "answerIndex": 2,
      "independentSolution": "Q1=(62+68)÷2=65，Q3=(82+88)÷2=85，所以中間50%位置約介於65到85。",
      "explanation": "Q1=(62+68)÷2=65，Q3=(82+88)÷2=85，所以中間50%位置約介於65到85。",
      "steps": [
        "求下半部中位數65。",
        "求上半部中位數85。",
        "以Q1到Q3表示中間50%位置。"
      ],
      "optionAnalysis": [
        {
          "choice": "62 到 88",
          "truth": false,
          "reason": "直接用第2與第7筆當端點。"
        },
        {
          "choice": "68 到 82",
          "truth": false,
          "reason": "直接用第3與第6筆當端點。"
        },
        {
          "choice": "65 到 85",
          "truth": true,
          "reason": "正確。獨立重算：Q1=(62+68)÷2=65，Q3=(82+88)÷2=85，所以中間50%位置約介於65到85。"
        },
        {
          "choice": "71 到 76",
          "truth": false,
          "reason": "只取整組中央兩筆。"
        }
      ],
      "misconceptionTarget": "把箱體端點誤當成資料中一定存在的觀測值。",
      "prerequisiteCheck": "本技能為U22起點，使用排序、中位數與基本四則。",
      "estimatedTimeSec": 180,
      "unitCheck": "成績皆以分表示，端點亦為分。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "「中間50%」是依排序位置描述，端點可不是原始成績。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：用四分位數描述中間一半成績",
      "literacyContextNecessity": "成績情境需要以區間表達班級中段分布。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "用四分位數描述中間一半成績",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "bdfee1ce1a4bfe032cc815ac95155ec6aa2e721edc78cb16fdf87f83142bbe65"
    },
    {
      "questionId": "u22-s001-v012",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-calculation",
      "lockedSkillOrder": 1,
      "difficulty": "literacy",
      "type": "mc",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "prompt": "某地16天降雨量排序後，第4、5筆為 6、8 毫米，第12、13筆為 24、30 毫米。依半分法，Q1 與 Q3 的差是多少毫米？",
      "text": "某地16天降雨量排序後，第4、5筆為 6、8 毫米，第12、13筆為 24、30 毫米。依半分法，Q1 與 Q3 的差是多少毫米？",
      "givenConditions": [],
      "target": "由指定位置資料計算四分位距",
      "choices": [
        "18",
        "22",
        "26",
        "20"
      ],
      "answerIndex": 3,
      "independentSolution": "16筆資料的下半部有8筆，Q1=(第4筆6+第5筆8)÷2=7；上半部有8筆，Q3=(第12筆24+第13筆30)÷2=27；差為20毫米。",
      "explanation": "16筆資料的下半部有8筆，Q1=(第4筆6+第5筆8)÷2=7；上半部有8筆，Q3=(第12筆24+第13筆30)÷2=27；差為20毫米。",
      "steps": [
        "Q1=(6+8)÷2=7。",
        "Q3=(24+30)÷2=27。",
        "27-7=20。"
      ],
      "optionAnalysis": [
        {
          "choice": "18",
          "truth": false,
          "reason": "只用24-6。"
        },
        {
          "choice": "22",
          "truth": false,
          "reason": "只用30-8。"
        },
        {
          "choice": "26",
          "truth": false,
          "reason": "用30-6，混用外側位置。"
        },
        {
          "choice": "20",
          "truth": true,
          "reason": "正確。獨立重算：16筆資料的下半部有8筆，Q1=(第4筆6+第5筆8)÷2=7；上半部有8筆，Q3=(第12筆24+第13筆30)÷2=27；差為20毫米。"
        }
      ],
      "misconceptionTarget": "沒有辨認16筆資料中上下半部的中央位置。",
      "prerequisiteCheck": "本技能為U22起點，使用排序、中位數與基本四則。",
      "estimatedTimeSec": 180,
      "unitCheck": "所有量皆為毫米，差值單位為毫米。",
      "roundingCheck": "使用精確值，不需四捨五入。",
      "ambiguityBoundaryAudit": "僅使用題目提供的必要位置，不需知道其餘降雨量。",
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：由指定位置資料計算四分位距",
      "literacyContextNecessity": "降雨資料常以四分位距比較中段波動，題目提供位置資訊而非完整清單。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "authoringIntent": "由指定位置資料計算四分位距",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "801fe187b1ec87ddf177d753db99c3e8a5a1562aa65479d93d6ab067fd74c175"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u22-s001-cr001",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-calculation",
      "lockedSkillOrder": 1,
      "difficulty": "advanced",
      "type": "constructed-response",
      "prompt": "將資料 14、7、9、20、12、5、11、8、18 排序，依排除總中位數的半分法求 Q1、Q2、Q3 與 IQR。",
      "requiredWork": [
        "寫出排序結果。",
        "標示總中位數及上下半部。",
        "計算四分位數與IQR。"
      ],
      "standardSolution": [
        "排序：5、7、8、9、11、12、14、18、20。",
        "Q2=11。排除11後，下半部5、7、8、9，Q1=(7+8)÷2=7.5；上半部12、14、18、20，Q3=(14+18)÷2=16。",
        "IQR=16-7.5=8.5。"
      ],
      "reasoningSteps": [
        "排序：5、7、8、9、11、12、14、18、20。",
        "Q2=11。排除11後，下半部5、7、8、9，Q1=(7+8)÷2=7.5；上半部12、14、18、20，Q3=(14+18)÷2=16。",
        "IQR=16-7.5=8.5。"
      ],
      "alternativeMethods": [
        "也可先在排序清單上框出第5筆，再分別對前4筆與後4筆取中央平均。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "排序、Q1=7.5、Q2=11、Q3=16、IQR=8.5全部正確，且清楚呈現排除中位數。"
        },
        {
          "score": 2,
          "criteria": "排序正確且四個量中僅一處小算術錯，方法完整。"
        },
        {
          "score": 1,
          "criteria": "能正確排序並至少求對Q2與另一個四分位數。"
        },
        {
          "score": 0,
          "criteria": "未排序或四分位方法不成立，無可採計推理。"
        }
      ],
      "partialCreditRules": [
        "各分數層級依本題具體數值、事件、圖形或推論要求判定，不以篇幅長短取代正確性。",
        "正確方法中的單一算術錯依追蹤政策處理；概念或事件定義錯誤不得靠後續一致性取得滿分。"
      ],
      "followThroughPolicy": "若排序與分半正確，但最後IQR相減錯，可依其正確Q1、Q3後續給分；若分半規則根本錯誤，不接受後續追蹤滿分。",
      "unitNotationRules": "無特殊單位；分數須可辨識且機率介於0與1。",
      "answerOnlyResponseHandling": "只寫正確答案但完全無過程，最高給1分；若題目明確要求說明或作圖，不得給滿分。",
      "commonErrors": [
        "未排序直接取位置。",
        "把11放入上下半部。",
        "Q3只取14或18。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "independentReview": {
        "recomputedResult": "排序：5、7、8、9、11、12、14、18、20。；Q2=11。排除11後，下半部5、7、8、9，Q1=(7+8)÷2=7.5；上半部12、14、18、20，Q3=(14+18)÷2=16。；IQR=16-7.5=8.5。",
        "alternativeMethodCheck": "也可先在排序清單上框出第5筆，再分別對前4筆與後4筆取中央平均。",
        "ambiguityBoundaryCheck": "題目所需規則、母體、抽取方式、端點與單位均已明示；評分規準依本題步驟逐項核對。",
        "rubricSpecificity": "pass",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "2a8dc6528986802f6e61547a7c4c9dddf61a9764562474aa6bc71ab1f3c1099a"
    },
    {
      "questionId": "u22-s001-cr002",
      "unitId": "u22",
      "numericUnitId": 22,
      "topicId": "u22-quartiles",
      "skillId": "quartile-calculation",
      "lockedSkillOrder": 1,
      "difficulty": "advanced",
      "type": "constructed-response",
      "prompt": "8筆已排序資料為 3、6、9、x、15、18、21、30，中位數為12。求x，再求這組資料的Q1與Q3。",
      "requiredWork": [
        "由中位數列式求x。",
        "確認x維持排序。",
        "計算Q1與Q3。"
      ],
      "standardSolution": [
        "(x+15)÷2=12，所以x=9。",
        "資料為3、6、9、9、15、18、21、30，排序條件成立。",
        "Q1=(6+9)÷2=7.5，Q3=(18+21)÷2=19.5。"
      ],
      "reasoningSteps": [
        "(x+15)÷2=12，所以x=9。",
        "資料為3、6、9、9、15、18、21、30，排序條件成立。",
        "Q1=(6+9)÷2=7.5，Q3=(18+21)÷2=19.5。"
      ],
      "alternativeMethods": [
        "可先利用中央兩值和為24，直接得x=9，再分半。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "x=9、Q1=7.5、Q3=19.5均正確並驗證排序。"
        },
        {
          "score": 2,
          "criteria": "x正確且Q1、Q3僅一處平均錯。"
        },
        {
          "score": 1,
          "criteria": "能列出中央平均式並求得x，後續未完成。"
        },
        {
          "score": 0,
          "criteria": "把中位數直接當x或無有效列式。"
        }
      ],
      "partialCreditRules": [
        "各分數層級依本題具體數值、事件、圖形或推論要求判定，不以篇幅長短取代正確性。",
        "正確方法中的單一算術錯依追蹤政策處理；概念或事件定義錯誤不得靠後續一致性取得滿分。"
      ],
      "followThroughPolicy": "若由錯誤中位數算出x但後續依自己資料一致分半，只能給後續方法部分分，不得超過1分。",
      "unitNotationRules": "無特殊單位；分數須可辨識且機率介於0與1。",
      "answerOnlyResponseHandling": "只寫正確答案但完全無過程，最高給1分；若題目明確要求說明或作圖，不得給滿分。",
      "commonErrors": [
        "寫x=12。",
        "解得x但未檢查與前一個9可相等。",
        "Q3誤用15與18。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecReference": null,
      "independentReview": {
        "recomputedResult": "(x+15)÷2=12，所以x=9。；資料為3、6、9、9、15、18、21、30，排序條件成立。；Q1=(6+9)÷2=7.5，Q3=(18+21)÷2=19.5。",
        "alternativeMethodCheck": "可先利用中央兩值和為24，直接得x=9，再分半。",
        "ambiguityBoundaryCheck": "題目所需規則、母體、抽取方式、端點與單位均已明示；評分規準依本題步驟逐項核對。",
        "rubricSpecificity": "pass",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_CENTRAL_INTEGRATION",
      "contentSha256": "4b9c0fb48fc496b67e3fd9536dc14c509c2d4bbedddcc9d59e80299a783fbadf"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u22-s001-v001",
      "unitId": "u22",
      "skillId": "quartile-calculation",
      "contentSha256": "4f67edd7ede277dcdeb0ef6377a228eb7dc98c4f0e350d9587bda4f165b48b48",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "共有8筆，中央兩筆為8與10，所以 Q2=(8+10)÷2=9。",
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
        "secondCorrectAnswer": "獨立重算得到「9」；其餘選項逐項排除：「8」：只取第4筆，忽略偶數筆資料要平均中間兩筆。；「10」：只取第5筆，忽略偶數筆資料要平均中間兩筆。；「11」：誤把第5、6筆平均。",
        "undefinedSymbol": "題幹術語均已在「四分位數」講義定義；實際目標為「求偶數筆資料的中位數」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "所有資料皆為數值，排序與筆數條件完整。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「偶數筆資料只取其中一個中央值。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：求偶數筆資料的中位數",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "本技能為U22起點，使用排序、中位數與基本四則。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「已排序資料為 2、4、6、8、10、12、14、16，其中位數 Q2 是多少？」；獨立解法「共有8筆，中央兩筆為8與10，所以 Q2=(8+10)÷2=9。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s001-v002",
      "unitId": "u22",
      "skillId": "quartile-calculation",
      "contentSha256": "dfce9bdfa61bb05c943edf8882456144c975ac56ef1409151b6eaa8ec1773e4a",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "下半部為1、3、5、7，其中位數是(3+5)÷2=4。",
      "derivedAnswer": "4",
      "storedAnswer": "4",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「4」；其餘選項逐項排除：「3」：只取下半部第2筆，未平均3與5。；「5」：只取下半部第3筆。；「6」：把整組第3、4筆平均。",
        "undefinedSymbol": "題幹術語均已在「四分位數」講義定義；實際目標為「計算偶數筆資料的 Q1」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "採國中常用半分法，資料筆數為8，不涉及插值規則。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把 Q1 當成整組資料的第1/4筆直接取值。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：計算偶數筆資料的 Q1",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "本技能為U22起點，使用排序、中位數與基本四則。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「資料 1、3、5、7、9、11、13、15 已由小到大排列。依「上下各半再取中位數」的規則，Q1 為何？」；獨立解法「下半部為1、3、5、7，其中位數是(3+5)÷2=4。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s001-v003",
      "unitId": "u22",
      "skillId": "quartile-calculation",
      "contentSha256": "40b067a4721c5fc2ef9c5e24eba10367e8c300fe30b2e9230a36d85c8ee65647",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "總中位數是10，排除後上半部為12、14、16；上半部中位數是14，所以Q3=14。",
      "derivedAnswer": "14",
      "storedAnswer": "14",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「14」；其餘選項逐項排除：「12」：只取上半部第一筆。；「13」：誤把12與14平均。；「15」：誤把14與16平均。",
        "undefinedSymbol": "題幹術語均已在「四分位數」講義定義；實際目標為「計算奇數筆資料的Q3」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "題幹明定排除總中位數；上半部有3筆，因此Q3為單一中央值。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「奇數筆資料排除總中位數後，仍誤把上半部中央兩值平均。」不會形成第二正解。"
      },
      "difficultyReason": "單一定義辨認或一步計算。 本題能力：計算奇數筆資料的Q3",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "本技能為U22起點，使用排序、中位數與基本四則。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「已排序的7筆資料為4、6、8、10、12、14、16。依排除總中位數的半分法，Q3是多少？」；獨立解法「總中位數是10，排除後上半部為12、14、16；上半部中位數是14，所以Q3=14。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s001-v004",
      "unitId": "u22",
      "skillId": "quartile-calculation",
      "contentSha256": "dc8c0d4bb27422be4342544861bb056cfa65638e2d49c987bb323f3b9f4282f3",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "排序為5、7、8、9、11、12、15、20。Q1=(7+8)÷2=7.5，Q3=(12+15)÷2=13.5，因此總和21。",
      "derivedAnswer": "21",
      "storedAnswer": "21",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「21」；其餘選項逐項排除：「20」：把Q1=7、Q3=13直接相加。；「22」：把Q1=8、Q3=14直接相加。；「23」：誤取第2筆與第7筆。",
        "undefinedSymbol": "題幹術語均已在「四分位數」講義定義；實際目標為「先排序再計算兩個四分位數」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "資料無重複與缺漏，採半分法。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「未先排序就依原出現順序取四分位數。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：先排序再計算兩個四分位數",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "本技能為U22起點，使用排序、中位數與基本四則。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「將資料 12、7、9、5、20、15、11、8 排序後求得 Q1 與 Q3。Q1+Q3 等於多少？」；獨立解法「排序為5、7、8、9、11、12、15、20。Q1=(7+8)÷2=7.5，Q3=(12+15)÷2=13.5，因此總和21。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s001-v005",
      "unitId": "u22",
      "skillId": "quartile-calculation",
      "contentSha256": "03efcef1b1bcd9e57cb55cce2f342fcbccea242bbda12ca07a46cb1e4583e0bf",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "排除中位數10後，下半部2、4、6、8的中位數是5，上半部12、14、16、18的中位數是15，IQR=15-5=10。",
      "derivedAnswer": "10",
      "storedAnswer": "10",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「10」；其餘選項逐項排除：「8」：把Q1誤算成6、Q3誤算成14。；「12」：把端點差的一半當IQR。；「14」：以最大值減最小值，算成全距。",
        "undefinedSymbol": "題幹術語均已在「四分位數」講義定義；實際目標為「依指定規則求奇數筆資料的IQR」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "題幹已明定奇數筆時排除中位數，避免不同教材慣例造成歧義。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「奇數筆資料把總中位數重複放進上下兩半。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：依指定規則求奇數筆資料的IQR",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "本技能為U22起點，使用排序、中位數與基本四則。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「已排序的9筆資料為 2、4、6、8、10、12、14、16、18。求四分位距 IQR=Q3-Q1。計算 Q1、Q3 時不把中位數10放入上下半部。」；獨立解法「排除中位數10後，下半部2、4、6、8的中位數是5，上半部12、14、16、18的中位數是15，IQR=15-5=10。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s001-v006",
      "unitId": "u22",
      "skillId": "quartile-calculation",
      "contentSha256": "7f9244bb08f9c55be1cdce210c14ae28350679901b68e6aa896aa5c338219e0c",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "下半部4、5、6、7的中位數為5.5；上半部8、9、10、11的中位數為9.5。",
      "derivedAnswer": "5.5 與 9.5",
      "storedAnswer": "5.5 與 9.5",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「5.5 與 9.5」；其餘選項逐項排除：「5 與 10」：各取下半部、上半部的端點而未平均。；「6 與 9」：只取靠近中央的兩筆。；「5.5 與 10」：Q3只取上半部第三筆。",
        "undefinedSymbol": "題幹術語均已在「四分位數」講義定義；實際目標為「同時計算Q1與Q3」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "資料筆數與排序完整。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「同一題中對Q1與Q3採用不同規則。」不會形成第二正解。"
      },
      "difficultyReason": "需連結定義與兩個以上步驟。 本題能力：同時計算Q1與Q3",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "本技能為U22起點，使用排序、中位數與基本四則。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「資料 4、5、6、7、8、9、10、11 的 Q1 與 Q3 分別為何？」；獨立解法「下半部4、5、6、7的中位數為5.5；上半部8、9、10、11的中位數為9.5。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s001-v007",
      "unitId": "u22",
      "skillId": "quartile-calculation",
      "contentSha256": "44de1fa148acd60b2d8ff3563ef810e29aecdce2605cbf016a3add066e6d5cc2",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "8筆資料的中位數是第4、5筆平均，所以(x+12)÷2=10，解得x=8；也符合6≤x<12的排序。",
      "derivedAnswer": "8",
      "storedAnswer": "8",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「8」；其餘選項逐項排除：「6」：把第3筆當作第一個中央值。；「10」：把中位數直接當x。；「12」：忽略x<12且讓中央兩筆相同。",
        "undefinedSymbol": "題幹術語均已在「四分位數」講義定義；實際目標為「由中位數反求未知資料」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "x必須維持已排序條件，8符合位置限制。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「只用中位數數值猜未知資料，不列中央平均式。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：由中位數反求未知資料",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "本技能為U22起點，使用排序、中位數與基本四則。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「已排序資料為 2、4、6、x、12、14、16、18，且中位數為10。若 x<12，則 x 等於多少？」；獨立解法「8筆資料的中位數是第4、5筆平均，所以(x+12)÷2=10，解得x=8；也符合6≤x<12的排序。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s001-v008",
      "unitId": "u22",
      "skillId": "quartile-calculation",
      "contentSha256": "56baf6b46ab916369ec0ad4db6743abaf14cb94198185af89488f78441069391",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "Q1=(2+4)÷2=3，Q2=(7+9)÷2=8，Q3=(10+12)÷2=11，總和22。",
      "derivedAnswer": "22",
      "storedAnswer": "22",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「22」；其餘選項逐項排除：「20.5」：中央值或加總計算錯誤。；「21」：把Q3誤算成10。；「22.5」：把Q1或Q3多算0.5。",
        "undefinedSymbol": "題幹術語均已在「四分位數」講義定義；實際目標為「整合三個四分位數」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "資料排序與半分規則明確。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「計算多個位置量時漏掉平均或加總錯誤。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：整合三個四分位數",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "本技能為U22起點，使用排序、中位數與基本四則。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「資料 1、2、4、7、9、10、12、15 的 Q1、Q2、Q3 之和是多少？」；獨立解法「Q1=(2+4)÷2=3，Q2=(7+9)÷2=8，Q3=(10+12)÷2=11，總和22。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s001-v009",
      "unitId": "u22",
      "skillId": "quartile-calculation",
      "contentSha256": "db17877b364234f7c781b6d19b2f507ff4e9675e3a555b487a8229d47d4001e5",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "刪除後為2、3、5、7、11、13、17，共7筆。中位數7排除後，Q1=3，Q3=13，所以IQR=10。",
      "derivedAnswer": "10",
      "storedAnswer": "10",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「10」；其餘選項逐項排除：「8」：沿用原資料的Q1與Q3。；「12」：把新全距的一部分當IQR。；「14」：以17-3計算，混用端點。",
        "undefinedSymbol": "題幹術語均已在「四分位數」講義定義；實際目標為「資料刪除後重新求四分位數」。",
        "unitConflict": "不涉及單位換算；各數值在同一表示基準下。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "題幹指定排除中位數；刪除後仍保持排序。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「資料筆數改變後仍沿用原四分位數位置。」不會形成第二正解。"
      },
      "difficultyReason": "需反推、整合條件或檢查邊界。 本題能力：資料刪除後重新求四分位數",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "本技能為U22起點，使用排序、中位數與基本四則。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「已排序資料 2、3、5、7、11、13、17、19 刪除最大值19後，依排除總中位數的規則，新資料的 IQR 為多少？」；獨立解法「刪除後為2、3、5、7、11、13、17，共7筆。中位數7排除後，Q1=3，Q3=13，所以IQR=10。」；四選項真值為真,假,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s001-v010",
      "unitId": "u22",
      "skillId": "quartile-calculation",
      "contentSha256": "f8b29b9b9bcd84adfa732ff4dd2ede3ffe4ce8d2474d47ba23b403493b224b18",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "上半部為18、20、22、25、30、36，其中位數是(22+25)÷2=23.5分鐘。",
      "derivedAnswer": "23.5",
      "storedAnswer": "23.5",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「23.5」；其餘選項逐項排除：「22」：直接取第9筆。；「25」：直接取第10筆。；「27.5」：誤平均25與30。",
        "undefinedSymbol": "題幹術語均已在「四分位數」講義定義；實際目標為「以四分位數解讀通學時間門檻」。",
        "unitConflict": "所有數值單位皆為分鐘，答案保留分鐘。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "12筆資料已排序；Q3為位置量，不代表恰有每人等於該值。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把「後25%」誤解為直接取第9或第10筆。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：以四分位數解讀通學時間門檻",
      "literacyContextNecessity": "通學情境使Q3作為較長通學族群的門檻有實際意義。",
      "prerequisiteCheck": "本技能為U22起點，使用排序、中位數與基本四則。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某班12位學生通學時間（分鐘）為 8、10、12、13、15、16、18、20、22、25、30、36。若把 Q3 解讀為「約有四分之一學生的通學時間不低於此值」，Q3 為多少分鐘？」；獨立解法「上半部為18、20、22、25、30、36，其中位數是(22+25)÷2=23.5分鐘。」；四選項真值為假,真,假,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s001-v011",
      "unitId": "u22",
      "skillId": "quartile-calculation",
      "contentSha256": "bdfee1ce1a4bfe032cc815ac95155ec6aa2e721edc78cb16fdf87f83142bbe65",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "Q1=(62+68)÷2=65，Q3=(82+88)÷2=85，所以中間50%位置約介於65到85。",
      "derivedAnswer": "65 到 85",
      "storedAnswer": "65 到 85",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「65 到 85」；其餘選項逐項排除：「62 到 88」：直接用第2與第7筆當端點。；「68 到 82」：直接用第3與第6筆當端點。；「71 到 76」：只取整組中央兩筆。",
        "undefinedSymbol": "題幹術語均已在「四分位數」講義定義；實際目標為「用四分位數描述中間一半成績」。",
        "unitConflict": "成績皆以分表示，端點亦為分。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "「中間50%」是依排序位置描述，端點可不是原始成績。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「把箱體端點誤當成資料中一定存在的觀測值。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：用四分位數描述中間一半成績",
      "literacyContextNecessity": "成績情境需要以區間表達班級中段分布。",
      "prerequisiteCheck": "本技能為U22起點，使用排序、中位數與基本四則。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「一組8次測驗成績排序為 55、62、68、71、76、82、88、96。老師說「中間50%的成績落在 Q1 到 Q3 之間」。這個區間為何？」；獨立解法「Q1=(62+68)÷2=65，Q3=(82+88)÷2=85，所以中間50%位置約介於65到85。」；四選項真值為假,假,真,假。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    },
    {
      "questionId": "u22-s001-v012",
      "unitId": "u22",
      "skillId": "quartile-calculation",
      "contentSha256": "801fe187b1ec87ddf177d753db99c3e8a5a1562aa65479d93d6ab067fd74c175",
      "reviewVersion": "human-semantic-review-u22-r1.0",
      "independentSolution": "16筆資料的下半部有8筆，Q1=(第4筆6+第5筆8)÷2=7；上半部有8筆，Q3=(第12筆24+第13筆30)÷2=27；差為20毫米。",
      "derivedAnswer": "20",
      "storedAnswer": "20",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "獨立重算得到「20」；其餘選項逐項排除：「18」：只用24-6。；「22」：只用30-8。；「26」：用30-6，混用外側位置。",
        "undefinedSymbol": "題幹術語均已在「四分位數」講義定義；實際目標為「由指定位置資料計算四分位距」。",
        "unitConflict": "所有量皆為毫米，差值單位為毫米。",
        "roundingConflict": "使用精確值，不需四捨五入。",
        "domainBoundary": "僅使用題目提供的必要位置，不需知道其餘降雨量。",
        "alternateReading": "已依題幹的排序、端點、放回、等可能或抽樣條件重新解讀；誤解「沒有辨認16筆資料中上下半部的中央位置。」不會形成第二正解。"
      },
      "difficultyReason": "情境資訊是建立分母、事件或推論限制的必要條件。 本題能力：由指定位置資料計算四分位距",
      "literacyContextNecessity": "降雨資料常以四分位距比較中段波動，題目提供位置資訊而非完整清單。",
      "prerequisiteCheck": "本技能為U22起點，使用排序、中位數與基本四則。",
      "languageCheck": "繁體中文用語與臺灣國中統計機率慣例一致；必要端點及條件均明示。",
      "reviewerDecision": "pass",
      "reviewerNote": "題目「某地16天降雨量排序後，第4、5筆為 6、8 毫米，第12、13筆為 24、30 毫米。依半分法，Q1 與 Q3 的差是多少毫米？」；獨立解法「16筆資料的下半部有8筆，Q1=(第4筆6+第5筆8)÷2=7；上半部有8筆，Q3=(第12筆24+第13筆30)÷2=27；差為20毫米。」；四選項真值為假,假,假,真。",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "reviewedAt": "2026-07-12"
    }
  ],
  "drawingSpecs": []
};
