// Deterministically serialized reviewed U06 content. Do not edit.
export default {
  "lecture": {
    "lectureId": "u06-s007-lecture-r1",
    "unitId": "u06",
    "numericUnitId": 6,
    "topicId": "u06-variation",
    "skillId": "inverse-variation-graph",
    "lockedSkillTitle": "反比圖形概念",
    "title": "反比圖形概念：不碰座標軸的彎曲分支",
    "audience": "臺灣國中零基礎至國中教育會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "skillIdentity": {
      "unitTitle": "比例式",
      "topicTitle": "正比與反比",
      "skillOrder": 7,
      "lockedPrerequisiteSkillIds": [
        "inverse-variation"
      ],
      "capBoundary": "以國中程度辨認 y=k/x 的點、象限與趨勢；不討論漸近線極限、微分或正式雙曲線理論。"
    },
    "prerequisiteBridge": "已知反比資料滿足 xy=k。把每組 (x,y) 標在座標平面，就能觀察乘積固定所形成的圖形。",
    "learningOutcomes": [
      "能判斷點是否在 y=k/x 圖形上。",
      "能依 k 的正負判斷圖形所在象限。",
      "能說明圖形不通過 x 軸或 y 軸。",
      "能從圖形或資料判讀 x 增大時 y 的變化，但不靠比例尺猜答案。"
    ],
    "glossary": [
      {
        "term": "座標點",
        "definition": "用 (x,y) 表示平面上一個位置。"
      },
      {
        "term": "象限",
        "definition": "x 軸與 y 軸把平面分成的四個區域。"
      },
      {
        "term": "分支",
        "definition": "反比圖形在不同象限中彼此不相連的部分。"
      },
      {
        "term": "不按比例繪製",
        "definition": "圖形只呈現結構，不能用目測距離取代計算。"
      }
    ],
    "notation": [
      {
        "symbol": "(x,y)",
        "meaning": "先讀橫座標 x，再讀縱座標 y。"
      },
      {
        "symbol": "y=k/x",
        "meaning": "x≠0，且點需滿足 xy=k。"
      },
      {
        "symbol": "k>0 或 k<0",
        "meaning": "決定 x、y 同號或異號，進而決定象限。"
      }
    ],
    "conceptNarrative": [
      "每個圖上點都必須滿足 xy=k，因此可用乘積檢查，不必依賴目測。",
      "k>0 時 x、y 同號，圖形在第一、第三象限；k<0 時異號，在第二、第四象限。",
      "因 x 不能為 0，圖形不碰 y 軸；若 k≠0，y 也不會為 0，所以不碰 x 軸。",
      "在第一象限且 k>0 時，x 增大，y 會減小，但曲線不是直線。",
      "圖形靠近座標軸不代表碰到座標軸；國中階段只需理解『不通過』，不使用極限語言。"
    ],
    "formalDefinitions": [
      {
        "name": "反比圖形",
        "statement": "所有滿足 y=k/x、x≠0 的點集合。"
      },
      {
        "name": "象限判斷",
        "statement": "k=xy；k>0 表示 x、y 同號，k<0 表示異號。"
      }
    ],
    "formulas": [
      {
        "formula": "點 (a,b) 在圖上 ⇔ ab=k",
        "conditions": [
          "a≠0"
        ],
        "meaning": "以乘積判點。"
      },
      {
        "formula": "k>0：第一與第三象限；k<0：第二與第四象限",
        "conditions": [
          "k≠0"
        ],
        "meaning": "由符號判分支位置。"
      }
    ],
    "nonApplicableCases": [
      "反比圖形不是一條通過原點的直線。",
      "曲線看似接近座標軸，不能說與座標軸相交。",
      "只看圖上高度猜 k，應使用標示座標計算。",
      "k 的正負不能由單一未標座標的草圖可靠判定。",
      "x=0 或 y=0 不屬於 k≠0 的反比圖形。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "先讀清楚關係式中的非零反比常數k，不用曲線外觀代替資料。",
        "check": "題目與所用圖形的k必須一致。"
      },
      {
        "step": 2,
        "instruction": "判斷點時直接計算xy，或把x代入y=k/x。",
        "check": "乘積須精確等於k。"
      },
      {
        "step": 3,
        "instruction": "用k的正負列出x、y同號或異號，判定兩個象限。",
        "check": "完整代數圖形含兩個分支。"
      },
      {
        "step": 4,
        "instruction": "由x≠0及k≠0推出y≠0，說明圖形不碰兩軸。",
        "check": "靠近座標軸不等於相交。"
      },
      {
        "step": 5,
        "instruction": "遇到不按比例圖，只採標示座標與關係式完成驗算。",
        "check": "沒有用像素距離或目測曲率讀答案。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "點(3,4)是否在y=12/x上？",
        "solutionSteps": [
          "計算3×4=12。",
          "比較乘積與k=12。",
          "再代入12÷3=4確認。"
        ],
        "answer": "在圖形上。",
        "why": "點是否在反比圖形上由代數關係決定，不需要也不應依靠示意圖目測。這個點的兩座標乘積正好是十二，代入關係式也得到縱坐標四，因此判斷有雙重驗證。"
      },
      {
        "exampleId": "L2",
        "prompt": "y=-8/x的圖形在哪些象限？",
        "solutionSteps": [
          "由k=-8<0判斷x、y異號。",
          "列(-,+)與(+,-)兩種組合。",
          "對應到第二、第四象限。"
        ],
        "answer": "第二與第四象限。",
        "why": "乘積為負時兩因數必須異號，負的x與正的y落在第二象限，正的x與負的y落在第四象限。反比圖有兩個分支，所以兩個象限都必須寫出。"
      },
      {
        "exampleId": "L3",
        "prompt": "在y=24/x第一象限分支上，x從4變8，y如何變？",
        "solutionSteps": [
          "代入x=4得y=6。",
          "代入x=8得y=3。",
          "比較得y由6減為3，且乘積都為24。"
        ],
        "answer": "由6變3。",
        "why": "指定第一象限排除了符號混淆，但精確數值仍應代入式子而非從曲線量取。x加倍後y減半，使兩個數對的乘積都保持二十四，符合反比。"
      },
      {
        "exampleId": "L4",
        "prompt": "反比圖形能否經過(0,5)？",
        "solutionSteps": [
          "注意該點的x=0。",
          "代入y=k/0會遇到除以零。",
          "因此任何x=0的點都不在圖形上。"
        ],
        "answer": "不能。",
        "why": "反比式的分母不能為零，所以y軸上的任何點都排除在定義域外。這不是曲線畫得夠不夠遠的問題，而是代數關係根本沒有對應值，因而不可能相交。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把反比圖畫成負斜率直線。",
        "why": "只注意一增一減。",
        "correction": "用多組乘積固定點看出彎曲。"
      },
      {
        "mistake": "k>0 卻選第二、第四象限。",
        "why": "忽略乘積正表示同號。",
        "correction": "列同號組合 (+,+)、(-,-)。"
      },
      {
        "mistake": "認為圖形通過原點。",
        "why": "套用正比圖形特徵。",
        "correction": "x=0 時無定義。"
      },
      {
        "mistake": "點 (2,5) 因靠近曲線就判在 y=12/x 上。",
        "why": "以目測取代計算。",
        "correction": "2×5=10≠12。"
      },
      {
        "mistake": "只檢查 x+y。",
        "why": "反比常數是乘積。",
        "correction": "計算 xy。"
      },
      {
        "mistake": "未限定象限便說 x 越大 y 越小。",
        "why": "負值區間的語句可能混亂。",
        "correction": "說明在第一象限或指定分支。"
      }
    ],
    "selfCheck": [
      "我用 xy=k 判點嗎？",
      "k 的正負與象限一致嗎？",
      "是否排除 x=0、y=0？",
      "我描述的是曲線而非直線嗎？",
      "是否避免從不按比例圖形直接量答案？"
    ],
    "summary": [
      "反比圖形由 xy=k 的點組成。",
      "k>0 在第一、第三象限；k<0 在第二、第四象限。",
      "圖形彎曲且不通過座標軸。",
      "判點與求值都應計算，不依賴目測。"
    ],
    "connections": {
      "previous": "乘積固定提供每個圖上點的代數檢查。",
      "next": [
        "比例尺將圖上距離與實際距離建立正比。",
        "素養題常要從圖表辨別正比與反比。"
      ]
    },
    "figureReferences": [
      "u06-fig-inverse-graph-01"
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u06-s007-v001",
        "u06-s007-v002",
        "u06-s007-v003",
        "u06-s007-v004",
        "u06-s007-v005",
        "u06-s007-v006",
        "u06-s007-v007",
        "u06-s007-v008",
        "u06-s007-v009",
        "u06-s007-v010",
        "u06-s007-v011",
        "u06-s007-v012"
      ],
      "constructedResponseIds": [
        "u06-s007-cr001",
        "u06-s007-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "contentAuthorityConfirmed": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "以 xy=12 逐點核對圖中 (2,6)、(3,4)、(4,3)、(6,2)，並檢查曲線未碰兩軸、標題與替代文字未洩漏題目答案；象限敘述限制在 k 的正負與國中範圍。",
      "reviewVersion": "human-lecture-review-u06-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "31b2f8fae68a66973f8e040c2530269e0d9d1c3a1d8b800cda8363af66103702"
  },
  "mcQuestions": [
    {
      "questionId": "u06-s007-v001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation-graph",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "點 (3,4) 是否在 y=12/x 的圖形上？",
      "text": "點 (3,4) 是否在 y=12/x 的圖形上？",
      "givenConditions": "x=3≠0。",
      "target": "判斷點是否在反比圖形",
      "choices": [
        "是，因為3+4=7",
        "否，因為3≠4",
        "是，因為3×4=12",
        "否，因為圖形不含正座標"
      ],
      "answerIndex": 2,
      "independentSolution": "代入y=12/3=4。",
      "mainExplanation": "用乘積而非目測判點。",
      "explanation": "判斷點是否在反比圖形上必須代入關係式，不能依示意圖目測。將x=3代入y=12/x，得到y=12÷3=4，恰好等於該點的縱坐標；等價地3×4=12，所以(3,4)確實在圖形上。",
      "steps": [
        "把點的x=3代入y=12/x。",
        "計算12÷3=4，與點的y相同。",
        "再以3×4=12檢查固定乘積。"
      ],
      "optionAnalysis": [
        {
          "choice": "是，因為3+4=7",
          "truth": false,
          "reason": "加法不是判準。"
        },
        {
          "choice": "否，因為3≠4",
          "truth": false,
          "reason": "座標不必相等。"
        },
        {
          "choice": "是，因為3×4=12",
          "truth": true,
          "reason": "反比圖形上的點需滿足xy=12，3×4=12。"
        },
        {
          "choice": "否，因為圖形不含正座標",
          "truth": false,
          "reason": "k>0時第一象限有圖形。"
        }
      ],
      "misconceptionTarget": "用座標相加、比較兩座標是否相等，或依圖形外觀猜測點是否在線上。",
      "prerequisiteCheck": {
        "skillIds": [
          "inverse-variation"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['inverse-variation'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 55,
      "unitCheck": "座標無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "點座標明確。",
      "difficultyReason": "需從圖上指定點檢查乘積，屬於反比圖形的基礎辨識。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "bfd136f55e0927e47edca0faa65486ef2e4c8c3e86697001931c783cc9d0195c"
    },
    {
      "questionId": "u06-s007-v002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation-graph",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "y=−8/x 的圖形位於哪些象限？",
      "text": "y=−8/x 的圖形位於哪些象限？",
      "givenConditions": "k=-8非0。",
      "target": "由k符號判象限",
      "choices": [
        "第二與第四象限",
        "第一與第三象限",
        "第一與第二象限",
        "第三與第四象限"
      ],
      "answerIndex": 0,
      "independentSolution": "選點(2,-4)、(-2,4)驗證。",
      "mainExplanation": "由乘積xy=−8判斷符號組合。",
      "explanation": "y=-8/x等價於xy=-8，乘積為負表示x、y異號。x<0、y>0的點位於第二象限；x>0、y<0的點位於第四象限。取(-2,4)與(2,-4)代入都成立，因此圖形位於第二、第四象限。",
      "steps": [
        "由xy=-8判斷兩座標必須異號。",
        "列出(-,+)在第二象限、(+,-)在第四象限。",
        "以(-2,4)和(2,-4)驗證兩個分支。"
      ],
      "optionAnalysis": [
        {
          "choice": "第二與第四象限",
          "truth": true,
          "reason": "k<0，x、y異號，所以在第二與第四象限。"
        },
        {
          "choice": "第一與第三象限",
          "truth": false,
          "reason": "同號乘積為正。"
        },
        {
          "choice": "第一與第二象限",
          "truth": false,
          "reason": "第一象限乘積為正。"
        },
        {
          "choice": "第三與第四象限",
          "truth": false,
          "reason": "第三象限乘積為正。"
        }
      ],
      "misconceptionTarget": "把k為負誤配到同號象限，或只寫出其中一個圖形分支。",
      "prerequisiteCheck": {
        "skillIds": [
          "inverse-variation"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['inverse-variation'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 60,
      "unitCheck": "座標無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "四象限定義固定。",
      "difficultyReason": "基礎符號判斷。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ba90dcfe4b8e0a357dc3eaa1b08290d33b3801688fe369d74776f05327d954cb"
    },
    {
      "questionId": "u06-s007-v003",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation-graph",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "反比圖形 y=5/x 是否會經過原點？",
      "text": "反比圖形 y=5/x 是否會經過原點？",
      "givenConditions": "k=5≠0。",
      "target": "判斷座標軸交點",
      "choices": [
        "會",
        "只有k>0會",
        "只有x為正時會",
        "不會"
      ],
      "answerIndex": 3,
      "independentSolution": "xy=5在(0,0)時乘積0，不等於5。",
      "mainExplanation": "檢查原點代入關係式。",
      "explanation": "反比式y=5/x中的分母x不能為0，所以圖形不可能有x=0的點，也就不會經過原點。從乘積看，原點使xy=0，與非零常數5不同；因此不論從定義域或固定乘積判斷，答案都是不會。",
      "steps": [
        "檢查原點的x=0會使5/x無定義。",
        "另算原點乘積0，不等於反比常數5。",
        "確認圖形不經過原點或任一座標軸。"
      ],
      "optionAnalysis": [
        {
          "choice": "會",
          "truth": false,
          "reason": "把正比特徵套入反比。"
        },
        {
          "choice": "只有k>0會",
          "truth": false,
          "reason": "k正負不改變x=0無定義。"
        },
        {
          "choice": "只有x為正時會",
          "truth": false,
          "reason": "原點的x=0，不屬正值範圍。"
        },
        {
          "choice": "不會",
          "truth": true,
          "reason": "x=0時5/x無定義，因此原點不在圖形上。"
        }
      ],
      "misconceptionTarget": "把正比直線通過原點的特徵錯套到反比圖形，忽略除以零無定義。",
      "prerequisiteCheck": {
        "skillIds": [
          "inverse-variation"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['inverse-variation'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 55,
      "unitCheck": "座標無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "原點定義明確。",
      "difficultyReason": "基礎定義域。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "17e7053a4415da46b30ffff07d5b3757f231000a41086c8beac0ae6e0dbd1fb8"
    },
    {
      "questionId": "u06-s007-v004",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation-graph",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "在 y=24/x 的第一象限分支上，x 由 4 增加到 8，y 如何變化？",
      "text": "在 y=24/x 的第一象限分支上，x 由 4 增加到 8，y 如何變化？",
      "givenConditions": "限定第一象限。",
      "target": "讀取反比圖形上的變化",
      "choices": [
        "由3增為6",
        "由6減為3",
        "由6增為12",
        "由4減為2"
      ],
      "answerIndex": 1,
      "independentSolution": "x加倍時y減半，乘積仍24。",
      "mainExplanation": "分別代入兩個x值。",
      "explanation": "題目給的是y=24/x，應以式子計算而不依不相容的共用示意圖讀值。x=4時y=24÷4=6；x=8時y=24÷8=3。因此x加倍時y減半，由6減為3，兩個數對的乘積都等於24。",
      "steps": [
        "代入x=4，算得y=6。",
        "代入x=8，算得y=3。",
        "比較兩值並以4×6=8×3=24驗算。"
      ],
      "optionAnalysis": [
        {
          "choice": "由3增為6",
          "truth": false,
          "reason": "順序反了。"
        },
        {
          "choice": "由6減為3",
          "truth": true,
          "reason": "x=4時y=6；x=8時y=3。"
        },
        {
          "choice": "由6增為12",
          "truth": false,
          "reason": "誤用正比。"
        },
        {
          "choice": "由4減為2",
          "truth": false,
          "reason": "把y誤當x的一半。"
        }
      ],
      "misconceptionTarget": "從別的反比常數圖形讀值，或只依曲線下降外觀猜數字而未代入。",
      "prerequisiteCheck": {
        "skillIds": [
          "inverse-variation"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['inverse-variation'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 75,
      "unitCheck": "座標無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "兩個x值均非0。",
      "difficultyReason": "標準變化判讀。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7b532ff419e442bebce59a0c8a59b21e15992f3a53c2b7d2d858e1ae200fdd81"
    },
    {
      "questionId": "u06-s007-v005",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation-graph",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "下列哪個點不在 y=18/x 的圖形上？",
      "text": "下列哪個點不在 y=18/x 的圖形上？",
      "givenConditions": "所有x非0。",
      "target": "判斷不符合的點",
      "choices": [
        "(6,4)",
        "(2,9)",
        "(3,6)",
        "(9,2)"
      ],
      "answerIndex": 0,
      "independentSolution": "代入x=6應得y=3，不是4。",
      "mainExplanation": "逐點檢查xy。",
      "explanation": "圖形y=18/x上的每個點都要滿足xy=18。四個選項的乘積依序為24、18、18、18，只有(6,4)的乘積不是18；也可代入x=6求得y應為3而不是4，因此它唯一不在圖形上。",
      "steps": [
        "把每個選項的x、y相乘。",
        "得到24、18、18、18。",
        "確認(6,4)乘積不符，並以18÷6=3反查。"
      ],
      "optionAnalysis": [
        {
          "choice": "(6,4)",
          "truth": true,
          "reason": "6×4=24≠18。"
        },
        {
          "choice": "(2,9)",
          "truth": false,
          "reason": "2×9=18。"
        },
        {
          "choice": "(3,6)",
          "truth": false,
          "reason": "3×6=18。"
        },
        {
          "choice": "(9,2)",
          "truth": false,
          "reason": "9×2=18。"
        }
      ],
      "misconceptionTarget": "只看點的座標大小是否接近曲線，沒有逐點檢查xy是否等於18。",
      "prerequisiteCheck": {
        "skillIds": [
          "inverse-variation"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['inverse-variation'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 75,
      "unitCheck": "座標無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "題目問不在圖上的點。",
      "difficultyReason": "多選項驗證。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "bdb03fd2bf48b4f656a5dc1c4f0dba3a5ca531058e7425c300f321b24eeb8101"
    },
    {
      "questionId": "u06-s007-v006",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation-graph",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "若反比圖形通過 (−4,3)，則關係式為何？",
      "text": "若反比圖形通過 (−4,3)，則關係式為何？",
      "givenConditions": "x=-4非0。",
      "target": "由圖上一點求反比式",
      "choices": [
        "y=12/x",
        "y=−x/12",
        "y=−12/x",
        "y=−4x+3"
      ],
      "answerIndex": 2,
      "independentSolution": "代入x=-4得y=3。",
      "mainExplanation": "由一個非零點求k。",
      "explanation": "反比圖形通過(-4,3)，所以反比常數k=xy=(-4)×3=-12。標準式為y=k/x，因此關係式是y=-12/x。代入x=-4可得y=(-12)÷(-4)=3，與已知點一致，也排除直線式、倒數式與符號錯誤。",
      "steps": [
        "用點的乘積求k=(-4)×3=-12。",
        "把k代入y=k/x，寫成y=-12/x。",
        "以x=-4代回得到y=3。"
      ],
      "optionAnalysis": [
        {
          "choice": "y=12/x",
          "truth": false,
          "reason": "符號錯。"
        },
        {
          "choice": "y=−x/12",
          "truth": false,
          "reason": "把k放在分母。"
        },
        {
          "choice": "y=−12/x",
          "truth": true,
          "reason": "k=xy=(−4)×3=−12。"
        },
        {
          "choice": "y=−4x+3",
          "truth": false,
          "reason": "以直線連點。"
        }
      ],
      "misconceptionTarget": "把座標相加求常數、漏掉負號，或誤把彎曲反比圖形寫成一次函數。",
      "prerequisiteCheck": {
        "skillIds": [
          "inverse-variation"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['inverse-variation'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 80,
      "unitCheck": "座標無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "已明示為反比圖形。",
      "difficultyReason": "標準求式。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "80521ca59f92c799268e3ca6bb2f722852de32eb8e81450edc56e2b39c5fb4de"
    },
    {
      "questionId": "u06-s007-v007",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation-graph",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "關於 y=12/x 的圖形，下列敘述何者正確？",
      "text": "關於 y=12/x 的圖形，下列敘述何者正確？",
      "givenConditions": "採完整代數圖形，不限生活正值。",
      "target": "綜合描述圖形特徵",
      "choices": [
        "圖形是一條通過原點的直線",
        "圖形在第一、第三象限且不碰座標軸",
        "圖形在第二、第四象限",
        "圖形只存在第一象限"
      ],
      "answerIndex": 1,
      "independentSolution": "選點(3,4)、(-3,-4)證明兩分支。",
      "mainExplanation": "同時使用象限與定義域判斷。",
      "explanation": "y=12/x的反比常數為正，所以xy>0，x、y必須同號，完整代數圖形位於第一、第三象限。又因x不能為0且12不為0時y也不會為0，圖形不與兩座標軸相交；它是兩條彎曲分支而非直線。",
      "steps": [
        "由k=12>0判斷x、y同號。",
        "把同號組合對應到第一、第三象限。",
        "用x≠0、y≠0說明兩分支不碰座標軸。"
      ],
      "optionAnalysis": [
        {
          "choice": "圖形是一條通過原點的直線",
          "truth": false,
          "reason": "反比圖形彎曲且不過原點。"
        },
        {
          "choice": "圖形在第一、第三象限且不碰座標軸",
          "truth": true,
          "reason": "k>0所以x、y同號，且x、y不為0。"
        },
        {
          "choice": "圖形在第二、第四象限",
          "truth": false,
          "reason": "異號象限對應k<0。"
        },
        {
          "choice": "圖形只存在第一象限",
          "truth": false,
          "reason": "代數範圍也有負值分支。"
        }
      ],
      "misconceptionTarget": "只看生活情境的正值分支，或把反比圖形誤認為通過原點的直線。",
      "prerequisiteCheck": {
        "skillIds": [
          "inverse-variation"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['inverse-variation'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 100,
      "unitCheck": "座標無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "敘述中的『不碰』指沒有座標軸交點。",
      "difficultyReason": "多特徵整合。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "c71e9b4da568b5a27b6d419021e10ffbc909313c857995b659fec9c872064f9a"
    },
    {
      "questionId": "u06-s007-v008",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation-graph",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "反比圖形 y=k/x 通過 (2,6) 與 (a,3)。a 為何？",
      "text": "反比圖形 y=k/x 通過 (2,6) 與 (a,3)。a 為何？",
      "givenConditions": "a≠0。",
      "target": "由兩個圖上點求未知座標",
      "choices": [
        "1",
        "6",
        "12",
        "4"
      ],
      "answerIndex": 3,
      "independentSolution": "(4,3)乘積12。",
      "mainExplanation": "同一圖形上的每點乘積相同。",
      "explanation": "由點(2,6)可得反比常數k=2×6=12。同一圖形上的點(a,3)也要滿足3a=12，所以a=4。代回(4,3)的乘積為12，與第一點一致，因此4是唯一可能值，其他選項都無法維持相同乘積。",
      "steps": [
        "利用(2,6)算得k=12。",
        "對點(a,3)列3a=12。",
        "解得a=4並檢查4×3=12。"
      ],
      "optionAnalysis": [
        {
          "choice": "1",
          "truth": false,
          "reason": "a=1使乘積3。"
        },
        {
          "choice": "6",
          "truth": false,
          "reason": "6把第一點y值直接當a。"
        },
        {
          "choice": "12",
          "truth": false,
          "reason": "12忘記除3。"
        },
        {
          "choice": "4",
          "truth": true,
          "reason": "k=2×6=12，再由3a=12得a=4。"
        }
      ],
      "misconceptionTarget": "把兩個數對的同位置座標直接設相等，或用座標和代替固定乘積。",
      "prerequisiteCheck": {
        "skillIds": [
          "inverse-variation"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['inverse-variation'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 95,
      "unitCheck": "座標無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "兩點位於同一反比圖形。",
      "difficultyReason": "兩階段乘積推理。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "355a1af8bcdac66b889527ff7c05d3e8cfed478bf5b6c1e97bfcecac884b0da8"
    },
    {
      "questionId": "u06-s007-v009",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation-graph",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "在 k>0 的反比圖形第一象限分支上，若點 P 的 x 座標小於點 Q 的 x 座標，則何者必然成立？",
      "text": "在 k>0 的反比圖形第一象限分支上，若點 P 的 x 座標小於點 Q 的 x 座標，則何者必然成立？",
      "givenConditions": "k>0且兩點在第一象限。",
      "target": "以圖形趨勢做符號推理",
      "choices": [
        "P的y座標也小於Q",
        "P的y座標大於Q的y座標",
        "兩點y座標相等",
        "無法比較"
      ],
      "answerIndex": 1,
      "independentSolution": "例k=12，x=2時y=6，x=4時y=3。",
      "mainExplanation": "可設0<xP<xQ，取倒數後1/xP>1/xQ。",
      "explanation": "第一象限中xP、xQ皆為正，且0<xP<xQ。正數取倒數後不等號反向，所以1/xP>1/xQ；再乘正數k仍得k/xP>k/xQ，也就是P的y座標大於Q的y座標。此結論依賴第一象限與k為正兩項限制。",
      "steps": [
        "寫出0<xP<xQ且k>0。",
        "取倒數得到1/xP>1/xQ。",
        "乘以k，推出yP>yQ。"
      ],
      "optionAnalysis": [
        {
          "choice": "P的y座標也小於Q",
          "truth": false,
          "reason": "同向增加是正比。"
        },
        {
          "choice": "P的y座標大於Q的y座標",
          "truth": true,
          "reason": "第一象限k>0時y=k/x，x較小則商較大。"
        },
        {
          "choice": "兩點y座標相等",
          "truth": false,
          "reason": "不同x不會有相同y，否則乘積不同。"
        },
        {
          "choice": "無法比較",
          "truth": false,
          "reason": "條件足以比較。"
        }
      ],
      "misconceptionTarget": "未使用第一象限與k為正的限制，就把正比的同向大小關係套到反比。",
      "prerequisiteCheck": {
        "skillIds": [
          "inverse-variation"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['inverse-variation'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 120,
      "unitCheck": "座標無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "限定條件避免跨分支歧義。",
      "difficultyReason": "抽象趨勢推理。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "7d48b4d3163d177a47015fa36b88c16cf0c1768cfc6b75cf496eb5b371c4da26"
    },
    {
      "questionId": "u06-s007-v010",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation-graph",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "某反比圖顯示四個標示點 A(2,6)、B(3,4)、C(4,3)、D(6,2)。若圖未按比例繪製，哪項判斷仍可靠？",
      "text": "某反比圖顯示四個標示點 A(2,6)、B(3,4)、C(4,3)、D(6,2)。若圖未按比例繪製，哪項判斷仍可靠？",
      "givenConditions": "座標標示為準。",
      "target": "讀取不按比例的反比示意圖",
      "choices": [
        "A到x軸的距離是B的兩倍",
        "B與C在圖上距離相等",
        "曲線與x軸會在圖外相交",
        "四點皆滿足xy=12"
      ],
      "answerIndex": 3,
      "independentSolution": "四點均在y=12/x。",
      "mainExplanation": "不按比例時只能依標示座標與關係式。",
      "explanation": "題幹已列出四點座標，即使示意圖未按比例，仍可直接計算乘積：2×6、3×4、4×3、6×2全都等於12。距離與線段外觀不能可靠量測，反比曲線也不會在圖外與x軸相交，因此只有固定乘積的判斷成立。",
      "steps": [
        "忽略不按比例圖形的視覺距離。",
        "逐點計算xy，四個結果皆為12。",
        "依反比不碰座標軸排除交點敘述，選固定乘積。"
      ],
      "optionAnalysis": [
        {
          "choice": "A到x軸的距離是B的兩倍",
          "truth": false,
          "reason": "A的y=6、B的y=4，並非兩倍。"
        },
        {
          "choice": "B與C在圖上距離相等",
          "truth": false,
          "reason": "圖上距離需比例尺與計算。"
        },
        {
          "choice": "曲線與x軸會在圖外相交",
          "truth": false,
          "reason": "反比圖不碰x軸。"
        },
        {
          "choice": "四點皆滿足xy=12",
          "truth": true,
          "reason": "座標數值可計算，四點乘積都是12；目測距離不可靠。"
        }
      ],
      "misconceptionTarget": "把未按比例示意圖的視覺距離當成數學證據，或認為曲線延伸後會碰座標軸。",
      "prerequisiteCheck": {
        "skillIds": [
          "inverse-variation"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['inverse-variation'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 105,
      "unitCheck": "座標無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "明示圖未按比例，排除目測。",
      "difficultyReason": "圖形素養。",
      "literacyContextNecessity": "不按比例警告使座標計算成為唯一可靠依據。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9f733d95daa2bd15ecb54c2ceeba8df3431569fa65916cf08be581ee0b1fd332"
    },
    {
      "questionId": "u06-s007-v011",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation-graph",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "感測器顯示壓力 P 與體積 V 的資料點落在 PV=240 的反比曲線上。當 V=15 時，P 應為何？",
      "text": "感測器顯示壓力 P 與體積 V 的資料點落在 PV=240 的反比曲線上。當 V=15 時，P 應為何？",
      "givenConditions": "模型指定PV=240。",
      "target": "由情境反比圖求值",
      "choices": [
        "12",
        "15",
        "16",
        "3600"
      ],
      "answerIndex": 2,
      "independentSolution": "15×16=240。",
      "mainExplanation": "圖形資訊等價於乘積固定。",
      "explanation": "資料點符合PV=240，所以壓力與體積的乘積固定。將V=15代入，得到15P=240，故P=240÷15=16。反算15×16=240，符合曲線所代表的關係；不能只從曲線下降趨勢估讀。",
      "steps": [
        "由PV=240寫15P=240。",
        "計算P=240÷15=16。",
        "以15×16=240驗證資料點。"
      ],
      "optionAnalysis": [
        {
          "choice": "12",
          "truth": false,
          "reason": "12對應V=20。"
        },
        {
          "choice": "15",
          "truth": false,
          "reason": "把P等同V。"
        },
        {
          "choice": "16",
          "truth": true,
          "reason": "P=240/15=16。"
        },
        {
          "choice": "3600",
          "truth": false,
          "reason": "把兩量相乘而非解未知數。"
        }
      ],
      "misconceptionTarget": "只依曲線下降方向猜壓力值，沒有使用圖形明示的固定乘積方程。",
      "prerequisiteCheck": {
        "skillIds": [
          "inverse-variation"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['inverse-variation'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 85,
      "unitCheck": "若P、V有單位，乘積單位由情境決定。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "不需物理定律延伸，只用給定關係。",
      "difficultyReason": "情境圖形轉代數。",
      "literacyContextNecessity": "PV=240 是圖上點的必要規則，情境提供變數意義。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "57984552d80606a6ecb2815b5a895571c86cd1330dab1c74498707e7e70d606e"
    },
    {
      "questionId": "u06-s007-v012",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation-graph",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "某網站以曲線呈現固定總量下「每組人數 x」與「組數 y」的關係，並標出 (5,24)。若每組改為 8 人，完整分組且不剩時組數為何？",
      "text": "某網站以曲線呈現固定總量下「每組人數 x」與「組數 y」的關係，並標出 (5,24)。若每組改為 8 人，完整分組且不剩時組數為何？",
      "givenConditions": "總人數固定且每人只屬一組。",
      "target": "從反比圖讀生活限制",
      "choices": [
        "15組",
        "10組",
        "19組",
        "38.4組"
      ],
      "answerIndex": 0,
      "independentSolution": "8×15=120且無剩餘。",
      "mainExplanation": "曲線代表xy固定，且完整分組要求整數。",
      "explanation": "點(5,24)表示總人數為5×24=120人。若每組8人，組數=120÷8=15組；8×15=120且沒有剩餘，符合完整分組條件。38.4雖來自錯誤倍率，且非整數，也不可能是完整組數。",
      "steps": [
        "由(5,24)算總人數5×24=120。",
        "計算120÷8=15組。",
        "用8×15=120並檢查整數與無剩餘條件。"
      ],
      "optionAnalysis": [
        {
          "choice": "15組",
          "truth": true,
          "reason": "總人數5×24=120，120÷8=15。"
        },
        {
          "choice": "10組",
          "truth": false,
          "reason": "10組只分80人。"
        },
        {
          "choice": "19組",
          "truth": false,
          "reason": "19組不符乘積。"
        },
        {
          "choice": "38.4組",
          "truth": false,
          "reason": "38.4把比例方向反。"
        }
      ],
      "misconceptionTarget": "只看圖形下降趨勢估值，或忽略完整分組要求組數必須是非負整數。",
      "prerequisiteCheck": {
        "skillIds": [
          "inverse-variation"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['inverse-variation'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 105,
      "unitCheck": "人/組×組=人。",
      "roundingCheck": "結果正好整數，無取整。",
      "ambiguityBoundaryAudit": "題意明示完整分組且不剩。",
      "difficultyReason": "圖形與離散情境整合。",
      "literacyContextNecessity": "完整分組條件限制答案必須是整數，情境不可刪除。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "18e1240e40bb12f7011b6e30f676d4fc10126f708ddfc5a00e6fd0e01249fdaa"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u06-s007-cr001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation-graph",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "已知反比關係 y=12/x，並給四點 A(2,6)、B(3,4)、C(4,3)、D(6,2)。說明四點為何都滿足此關係，並說明圖形為何不經過座標軸。",
      "target": "反比圖形點與座標軸",
      "requiredWork": [
        "逐點或概括驗證乘積。",
        "說明x=0無定義。",
        "說明k≠0時y也不為0。"
      ],
      "fullCreditSolution": [
        "逐點計算可得2×6=12、3×4=12、4×3=12、6×2=12，所以A、B、C、D都滿足xy=12，也就是y=12/x。",
        "若點在y軸上，x=0，但12÷0沒有定義，因此圖形不會與y軸相交。",
        "若點在x軸上，y=0，則xy=0，不可能等於非零常數12，因此也不會與x軸相交。",
        "兩條座標軸的排除理由不同，均由反比定義而非圖形外觀得到。"
      ],
      "alternativeSolutions": [
        "可逐一代入y=12/x，得到6、4、3、2。"
      ],
      "reasoningSteps": [
        "計算四點乘積並確認全為12。",
        "由x=0時除法無定義排除y軸。",
        "由y=0會使乘積為0排除x軸。",
        "整理成不依賴目測的完整說明。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "驗證四點乘積並完整說明不經x軸與y軸。"
        },
        {
          "score": 2,
          "criteria": "四點驗證正確，軸線理由只完成一條。"
        },
        {
          "score": 1,
          "criteria": "知道乘積固定或x不能為0，但說明不完整。"
        },
        {
          "score": 0,
          "criteria": "僅以目測說四點在線上，或說曲線經原點。"
        }
      ],
      "partialCreditRules": [
        "圖形不按比例，目測不算證據。",
        "兩條座標軸理由均屬滿分要求。"
      ],
      "followThroughPolicy": "若漏驗證一點但明確說所有點xy=12，可視為概括驗證；若乘積有單一算術錯，最多2分。",
      "unitNotationRules": "座標無單位；使用x軸、y軸名稱需正確。",
      "answerOnlyPolicy": "只寫『因為是反比』最多1分。",
      "commonErrors": [
        "只說四點看起來在線上，沒有用座標乘積提供證據。",
        "認為曲線靠近座標軸最後就會相交，或只說明其中一條座標軸。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "四點乘積皆12，且曲線不經兩軸。",
        "ambiguity": "圖示座標明確，無需量測。",
        "scope": "U06 locked skill only; no future-unit method required.",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "1f50552f0f87d924f31b1a446257c04a5827a52307b4c9e72e870923b3f18ce8"
    },
    {
      "questionId": "u06-s007-cr002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation-graph",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "反比圖形y=k/x通過P(−6,4)。求k，判斷圖形所在象限，並找出圖上x=8的點。",
      "target": "由反比圖上一點完成綜合判讀",
      "requiredWork": [
        "由P求k。",
        "由k符號判象限。",
        "代入x=8求y。"
      ],
      "fullCreditSolution": [
        "點P(-6,4)在y=k/x上，所以k=xy=(-6)×4=-24，非零常數由這個已知點唯一決定。",
        "因k<0，x、y必須異號，完整圖形位於第二與第四象限，兩個分支都不能遺漏。",
        "當x=8時，y=-24÷8=-3，因此所求點依(x,y)順序寫為(8,-3)。",
        "驗算8×(-3)=-24，與P點的乘積一致，證明新點在同一反比圖形上。"
      ],
      "alternativeSolutions": [
        "可先寫y=−24/x，再分別回答象限與座標。"
      ],
      "reasoningSteps": [
        "由P點求反比常數k=-24。",
        "用k的負號判斷兩座標異號及象限。",
        "代入x=8求y=-3。",
        "以新點乘積核對k。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "k=−24、第二第四象限、點(8,−3)三項皆正確且有理由。"
        },
        {
          "score": 2,
          "criteria": "三項中兩項正確，或答案完整但象限理由不足。"
        },
        {
          "score": 1,
          "criteria": "只正確求k，或符號錯但後續依錯誤k一致。"
        },
        {
          "score": 0,
          "criteria": "把關係寫成正比直線或無有效過程。"
        }
      ],
      "partialCreditRules": [
        "象限必須同時寫第二與第四。",
        "座標順序需為(x,y)。"
      ],
      "followThroughPolicy": "k計算若只漏負號，後續以k=24一致得到第一第三象限與(8,3)，可給1分；若自行修正，依正確答案評分。",
      "unitNotationRules": "座標寫(8,−3)，負號清楚。",
      "answerOnlyPolicy": "只寫三個答案無過程最多2分。",
      "commonErrors": [
        "計算負數乘積時漏掉負號，連帶選錯第一、第三象限。",
        "把所求點寫成(-3,8)，顛倒題目指定的x、y坐標順序。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "k=−24；第二、第四象限；(8,−3)。",
        "ambiguity": "P的x非0，所有要求唯一。",
        "scope": "U06 locked skill only; no future-unit method required.",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "d670b080d51f452b06214050f408e76070265d7ca914ab7e428d340582c36480"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u06-s007-v001-semantic-review-r1",
      "questionId": "u06-s007-v001",
      "unitId": "u06",
      "skillId": "inverse-variation-graph",
      "contentSha256": "bfd136f55e0927e47edca0faa65486ef2e4c8c3e86697001931c783cc9d0195c",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "代入y=12/3=4。",
      "derivedAnswer": "是，因為3×4=12",
      "storedAnswer": "是，因為3×4=12",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "加法不是判準。",
        "座標不必相等。",
        "反比圖形上的點需滿足xy=12，3×4=12。",
        "k>0時第一象限有圖形。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「判斷點是否在反比圖形」，已明示必要條件：x=3≠0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：座標無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：點座標明確。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "需從圖上指定點檢查乘積，屬於反比圖形的基礎辨識。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：代入y=12/3=4。 正確選項為「是，因為3×4=12」。逐項檢查後，唯一為真的理由是「反比圖形上的點需滿足xy=12，3×4=12。」；其餘三項分別因「加法不是判準。」、「座標不必相等。」、「k>0時第一象限有圖形。」而排除。邊界與語意再檢查：點座標明確。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s007-v002-semantic-review-r1",
      "questionId": "u06-s007-v002",
      "unitId": "u06",
      "skillId": "inverse-variation-graph",
      "contentSha256": "ba90dcfe4b8e0a357dc3eaa1b08290d33b3801688fe369d74776f05327d954cb",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "選點(2,-4)、(-2,4)驗證。",
      "derivedAnswer": "第二與第四象限",
      "storedAnswer": "第二與第四象限",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "k<0，x、y異號，所以在第二與第四象限。",
        "同號乘積為正。",
        "第一象限乘積為正。",
        "第三象限乘積為正。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「由k符號判象限」，已明示必要條件：k=-8非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：座標無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：四象限定義固定。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "基礎符號判斷。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：選點(2,-4)、(-2,4)驗證。 正確選項為「第二與第四象限」。逐項檢查後，唯一為真的理由是「k<0，x、y異號，所以在第二與第四象限。」；其餘三項分別因「同號乘積為正。」、「第一象限乘積為正。」、「第三象限乘積為正。」而排除。邊界與語意再檢查：四象限定義固定。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s007-v003-semantic-review-r1",
      "questionId": "u06-s007-v003",
      "unitId": "u06",
      "skillId": "inverse-variation-graph",
      "contentSha256": "17e7053a4415da46b30ffff07d5b3757f231000a41086c8beac0ae6e0dbd1fb8",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "xy=5在(0,0)時乘積0，不等於5。",
      "derivedAnswer": "不會",
      "storedAnswer": "不會",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "把正比特徵套入反比。",
        "k正負不改變x=0無定義。",
        "原點的x=0，不屬正值範圍。",
        "x=0時5/x無定義，因此原點不在圖形上。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「判斷座標軸交點」，已明示必要條件：k=5≠0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：座標無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：原點定義明確。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "基礎定義域。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：xy=5在(0,0)時乘積0，不等於5。 正確選項為「不會」。逐項檢查後，唯一為真的理由是「x=0時5/x無定義，因此原點不在圖形上。」；其餘三項分別因「把正比特徵套入反比。」、「k正負不改變x=0無定義。」、「原點的x=0，不屬正值範圍。」而排除。邊界與語意再檢查：原點定義明確。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s007-v004-semantic-review-r1",
      "questionId": "u06-s007-v004",
      "unitId": "u06",
      "skillId": "inverse-variation-graph",
      "contentSha256": "7b532ff419e442bebce59a0c8a59b21e15992f3a53c2b7d2d858e1ae200fdd81",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "x加倍時y減半，乘積仍24。",
      "derivedAnswer": "由6減為3",
      "storedAnswer": "由6減為3",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "順序反了。",
        "x=4時y=6；x=8時y=3。",
        "誤用正比。",
        "把y誤當x的一半。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「讀取反比圖形上的變化」，已明示必要條件：限定第一象限。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：座標無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：兩個x值均非0。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "標準變化判讀。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：x加倍時y減半，乘積仍24。 正確選項為「由6減為3」。逐項檢查後，唯一為真的理由是「x=4時y=6；x=8時y=3。」；其餘三項分別因「順序反了。」、「誤用正比。」、「把y誤當x的一半。」而排除。邊界與語意再檢查：兩個x值均非0。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s007-v005-semantic-review-r1",
      "questionId": "u06-s007-v005",
      "unitId": "u06",
      "skillId": "inverse-variation-graph",
      "contentSha256": "bdb03fd2bf48b4f656a5dc1c4f0dba3a5ca531058e7425c300f321b24eeb8101",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "代入x=6應得y=3，不是4。",
      "derivedAnswer": "(6,4)",
      "storedAnswer": "(6,4)",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "6×4=24≠18。",
        "2×9=18。",
        "3×6=18。",
        "9×2=18。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「判斷不符合的點」，已明示必要條件：所有x非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：座標無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：題目問不在圖上的點。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "多選項驗證。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：代入x=6應得y=3，不是4。 正確選項為「(6,4)」。逐項檢查後，唯一為真的理由是「6×4=24≠18。」；其餘三項分別因「2×9=18。」、「3×6=18。」、「9×2=18。」而排除。邊界與語意再檢查：題目問不在圖上的點。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s007-v006-semantic-review-r1",
      "questionId": "u06-s007-v006",
      "unitId": "u06",
      "skillId": "inverse-variation-graph",
      "contentSha256": "80521ca59f92c799268e3ca6bb2f722852de32eb8e81450edc56e2b39c5fb4de",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "代入x=-4得y=3。",
      "derivedAnswer": "y=−12/x",
      "storedAnswer": "y=−12/x",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "符號錯。",
        "把k放在分母。",
        "k=xy=(−4)×3=−12。",
        "以直線連點。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「由圖上一點求反比式」，已明示必要條件：x=-4非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：座標無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：已明示為反比圖形。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "標準求式。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：代入x=-4得y=3。 正確選項為「y=−12/x」。逐項檢查後，唯一為真的理由是「k=xy=(−4)×3=−12。」；其餘三項分別因「符號錯。」、「把k放在分母。」、「以直線連點。」而排除。邊界與語意再檢查：已明示為反比圖形。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s007-v007-semantic-review-r1",
      "questionId": "u06-s007-v007",
      "unitId": "u06",
      "skillId": "inverse-variation-graph",
      "contentSha256": "c71e9b4da568b5a27b6d419021e10ffbc909313c857995b659fec9c872064f9a",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "選點(3,4)、(-3,-4)證明兩分支。",
      "derivedAnswer": "圖形在第一、第三象限且不碰座標軸",
      "storedAnswer": "圖形在第一、第三象限且不碰座標軸",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "反比圖形彎曲且不過原點。",
        "k>0所以x、y同號，且x、y不為0。",
        "異號象限對應k<0。",
        "代數範圍也有負值分支。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「綜合描述圖形特徵」，已明示必要條件：採完整代數圖形，不限生活正值。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：座標無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：敘述中的『不碰』指沒有座標軸交點。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "多特徵整合。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：選點(3,4)、(-3,-4)證明兩分支。 正確選項為「圖形在第一、第三象限且不碰座標軸」。逐項檢查後，唯一為真的理由是「k>0所以x、y同號，且x、y不為0。」；其餘三項分別因「反比圖形彎曲且不過原點。」、「異號象限對應k<0。」、「代數範圍也有負值分支。」而排除。邊界與語意再檢查：敘述中的『不碰』指沒有座標軸交點。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s007-v008-semantic-review-r1",
      "questionId": "u06-s007-v008",
      "unitId": "u06",
      "skillId": "inverse-variation-graph",
      "contentSha256": "355a1af8bcdac66b889527ff7c05d3e8cfed478bf5b6c1e97bfcecac884b0da8",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "(4,3)乘積12。",
      "derivedAnswer": "4",
      "storedAnswer": "4",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "a=1使乘積3。",
        "6把第一點y值直接當a。",
        "12忘記除3。",
        "k=2×6=12，再由3a=12得a=4。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「由兩個圖上點求未知座標」，已明示必要條件：a≠0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：座標無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：兩點位於同一反比圖形。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "兩階段乘積推理。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：(4,3)乘積12。 正確選項為「4」。逐項檢查後，唯一為真的理由是「k=2×6=12，再由3a=12得a=4。」；其餘三項分別因「a=1使乘積3。」、「6把第一點y值直接當a。」、「12忘記除3。」而排除。邊界與語意再檢查：兩點位於同一反比圖形。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s007-v009-semantic-review-r1",
      "questionId": "u06-s007-v009",
      "unitId": "u06",
      "skillId": "inverse-variation-graph",
      "contentSha256": "7d48b4d3163d177a47015fa36b88c16cf0c1768cfc6b75cf496eb5b371c4da26",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "例k=12，x=2時y=6，x=4時y=3。",
      "derivedAnswer": "P的y座標大於Q的y座標",
      "storedAnswer": "P的y座標大於Q的y座標",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "同向增加是正比。",
        "第一象限k>0時y=k/x，x較小則商較大。",
        "不同x不會有相同y，否則乘積不同。",
        "條件足以比較。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「以圖形趨勢做符號推理」，已明示必要條件：k>0且兩點在第一象限。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：座標無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：限定條件避免跨分支歧義。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "抽象趨勢推理。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：例k=12，x=2時y=6，x=4時y=3。 正確選項為「P的y座標大於Q的y座標」。逐項檢查後，唯一為真的理由是「第一象限k>0時y=k/x，x較小則商較大。」；其餘三項分別因「同向增加是正比。」、「不同x不會有相同y，否則乘積不同。」、「條件足以比較。」而排除。邊界與語意再檢查：限定條件避免跨分支歧義。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s007-v010-semantic-review-r1",
      "questionId": "u06-s007-v010",
      "unitId": "u06",
      "skillId": "inverse-variation-graph",
      "contentSha256": "9f733d95daa2bd15ecb54c2ceeba8df3431569fa65916cf08be581ee0b1fd332",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "四點均在y=12/x。",
      "derivedAnswer": "四點皆滿足xy=12",
      "storedAnswer": "四點皆滿足xy=12",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "A的y=6、B的y=4，並非兩倍。",
        "圖上距離需比例尺與計算。",
        "反比圖不碰x軸。",
        "座標數值可計算，四點乘積都是12；目測距離不可靠。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「讀取不按比例的反比示意圖」，已明示必要條件：座標標示為準。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：座標無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：明示圖未按比例，排除目測。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "圖形素養。",
      "literacyNecessity": "不按比例警告使座標計算成為唯一可靠依據。",
      "reviewerNote": "獨立重算：四點均在y=12/x。 正確選項為「四點皆滿足xy=12」。逐項檢查後，唯一為真的理由是「座標數值可計算，四點乘積都是12；目測距離不可靠。」；其餘三項分別因「A的y=6、B的y=4，並非兩倍。」、「圖上距離需比例尺與計算。」、「反比圖不碰x軸。」而排除。邊界與語意再檢查：明示圖未按比例，排除目測。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s007-v011-semantic-review-r1",
      "questionId": "u06-s007-v011",
      "unitId": "u06",
      "skillId": "inverse-variation-graph",
      "contentSha256": "57984552d80606a6ecb2815b5a895571c86cd1330dab1c74498707e7e70d606e",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "15×16=240。",
      "derivedAnswer": "16",
      "storedAnswer": "16",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "12對應V=20。",
        "把P等同V。",
        "P=240/15=16。",
        "把兩量相乘而非解未知數。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「由情境反比圖求值」，已明示必要條件：模型指定PV=240。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：若P、V有單位，乘積單位由情境決定。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：不需物理定律延伸，只用給定關係。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "情境圖形轉代數。",
      "literacyNecessity": "PV=240 是圖上點的必要規則，情境提供變數意義。",
      "reviewerNote": "獨立重算：15×16=240。 正確選項為「16」。逐項檢查後，唯一為真的理由是「P=240/15=16。」；其餘三項分別因「12對應V=20。」、「把P等同V。」、「把兩量相乘而非解未知數。」而排除。邊界與語意再檢查：不需物理定律延伸，只用給定關係。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s007-v012-semantic-review-r1",
      "questionId": "u06-s007-v012",
      "unitId": "u06",
      "skillId": "inverse-variation-graph",
      "contentSha256": "18e1240e40bb12f7011b6e30f676d4fc10126f708ddfc5a00e6fd0e01249fdaa",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "8×15=120且無剩餘。",
      "derivedAnswer": "15組",
      "storedAnswer": "15組",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "總人數5×24=120，120÷8=15。",
        "10組只分80人。",
        "19組不符乘積。",
        "38.4把比例方向反。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「從反比圖讀生活限制」，已明示必要條件：總人數固定且每人只屬一組。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：人/組×組=人。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：題意明示完整分組且不剩。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：結果正好整數，無取整。。"
      },
      "difficultyReason": "圖形與離散情境整合。",
      "literacyNecessity": "完整分組條件限制答案必須是整數，情境不可刪除。",
      "reviewerNote": "獨立重算：8×15=120且無剩餘。 正確選項為「15組」。逐項檢查後，唯一為真的理由是「總人數5×24=120，120÷8=15。」；其餘三項分別因「10組只分80人。」、「19組不符乘積。」、「38.4把比例方向反。」而排除。邊界與語意再檢查：題意明示完整分組且不剩。",
      "reviewerDecision": "pass"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u06-fig-inverse-graph-01",
      "unitId": "u06",
      "topicId": "u06-variation",
      "skillId": "inverse-variation-graph",
      "purpose": "呈現正數範圍內反比圖形的遞減、靠近兩軸而不相交，以及各標示點乘積相同的特徵。",
      "svgPath": "figures/u06/u06-fig-inverse-graph-01.svg",
      "canvas": {
        "width": 720,
        "height": 520,
        "viewBox": "0 0 720 520"
      },
      "drawingSpec": {
        "xAxis": "from (80,440) to (660,440), arrow at positive end",
        "yAxis": "from (80,440) to (80,50), arrow at positive end",
        "origin": "label 0 at (58,463)",
        "curvePath": "M126 116 C140 190,155 250,172 278 C188 304,203 323,218 332 C234 343,249 353,264 359 C294 372,327 381,356 386 C420 398,500 408,580 416",
        "markedPoints": [
          [
            1,
            12,
            126,
            116
          ],
          [
            2,
            6,
            172,
            278
          ],
          [
            3,
            4,
            218,
            332
          ],
          [
            4,
            3,
            264,
            359
          ],
          [
            6,
            2,
            356,
            386
          ]
        ],
        "visibleLines": "兩座標軸及一條黑色平滑曲線",
        "hiddenLines": "無輔助投影線，避免誤讀未標刻度",
        "labels": "x、y、0、五組座標以及 y＝12÷x",
        "scaleStatus": "not-to-scale conceptual graph"
      },
      "labelsAndPositions": [
        "x 在 x 軸箭頭右側",
        "y 在 y 軸箭頭上方",
        "五個座標標籤均偏右上，避免遮住點",
        "警語置於圖底部"
      ],
      "ticksUnitsArrows": "座標軸只有正向箭頭，無等距刻度與物理單位；點座標直接標示。",
      "toScale": false,
      "visualInferenceWarning": "曲線為概念示意，未標示的座標值不得靠視覺估讀；應使用 xy＝12 計算。",
      "altText": "第一象限座標示意圖：黑色遞減曲線靠近但不接觸兩軸，曲線上標出(1,12)、(2,6)、(3,4)、(4,3)、(6,2)，圖下提醒不可由外觀估讀未標數值。",
      "svgTitle": "反比關係 y 等於 12 除以 x 的第一象限示意圖",
      "svgDesc": "第一象限座標示意圖：黑色遞減曲線靠近但不接觸兩軸，曲線上標出(1,12)、(2,6)、(3,4)、(4,3)、(6,2)，圖下提醒不可由外觀估讀未標數值。",
      "mobileReadabilityReview": "以360 px寬顯示時，五個座標標籤與曲線保有可辨間距，底部警語可換行且不遮住座標軸或標示點。",
      "answerLeakageReview": "此圖只由講義引用，用於說明第一象限反比分支；題庫題目已移除共用figureId，因此替代文字與座標標籤不會直接揭露任何選項答案。",
      "manualVisualInspection": {
        "status": "pass-after-two-repairs",
        "inspectionNote": "第一次轉譯修正透明背景；第二次轉譯發現點未貼合曲線，重設座標與路徑後，五點均落在線上，標籤不重疊，兩軸箭頭與底部警語完整可見。"
      },
      "svgAssertions": [
        "<title id=\"title\">反比關係 y 等於 12 除以 x 的第一象限示意圖</title>",
        "M 126 116 C 140 190",
        "(1,12)",
        "(6,2)",
        "y＝12÷x"
      ],
      "figureReview": {
        "decision": "pass",
        "reviewNote": "逐項核對SVG與drawing spec的五個座標、曲線、兩軸和警語；alt與desc描述同一第一象限內容，手機及黑白列印均不依賴色彩，且題庫不再引用此講義圖。"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "293755239996657fc0d096ba2b62ee3177259c0d963cbc5bc7c7436f483fa315",
      "printReadabilityReview": "以A4黑白列印並縮至版心寬度時，4 px曲線、3 px座標軸與實心標示點仍可區分；所有資訊不依賴顏色，文字維持可讀對比。"
    }
  ]
};
