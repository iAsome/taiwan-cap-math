// Deterministically serialized reviewed U06 content. Do not edit.
export default {
  "lecture": {
    "lectureId": "u06-s006-lecture-r1",
    "unitId": "u06",
    "numericUnitId": 6,
    "topicId": "u06-variation",
    "skillId": "inverse-variation",
    "lockedSkillTitle": "反比",
    "title": "反比：乘積固定的兩量關係",
    "audience": "臺灣國中零基礎至國中教育會考滿分",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
    "reviewStatus": "independently-reviewed",
    "skillIdentity": {
      "unitTitle": "比例式",
      "topicTitle": "正比與反比",
      "skillOrder": 6,
      "lockedPrerequisiteSkillIds": [
        "direct-variation"
      ],
      "capBoundary": "處理 xy=k 的反比判斷、數值求解與常見工作效率情境；不使用微積分或高中函數理論。"
    },
    "prerequisiteBridge": "正比以比值固定描述同倍變化；反比則在總量固定時，一量放大，另一量按相反倍數縮小。",
    "learningOutcomes": [
      "能以 xy 固定或 y=k/x 判斷反比。",
      "能由一組非零資料求反比常數。",
      "能用相反倍數或乘積解未知數。",
      "能辨別總工作量固定與效率固定等必要條件。"
    ],
    "glossary": [
      {
        "term": "反比",
        "definition": "兩個非零變數滿足xy=k或y=k/x，且反比常數k≠0。"
      },
      {
        "term": "反比常數",
        "definition": "各組對應值的固定非零乘積k=xy。"
      },
      {
        "term": "固定總量",
        "definition": "比較過程中不改變的路程、工作量、面積或資料量。"
      },
      {
        "term": "相反倍數",
        "definition": "一量乘r倍時，另一量乘1/r倍，使乘積不變。"
      }
    ],
    "notation": [
      {
        "symbol": "y∝1/x",
        "meaning": "y 與 x 成反比。"
      },
      {
        "symbol": "xy=k",
        "meaning": "x、y 的乘積固定。"
      },
      {
        "symbol": "y=k/x",
        "meaning": "x≠0 時的反比關係式。"
      }
    ],
    "conceptNarrative": [
      "國中數學所稱反比，是兩個非零變數滿足xy=k或y=k/x，其中反比常數k必須不等於0；若k=0，便不能形成反比的兩個分支。",
      "反比不是看到一量增加、另一量減少就成立，而是每一組對應資料的乘積都等於同一個非零常數。",
      "固定路程時速度×時間等於路程；固定工作量且每人效率相同時，人數×天數等於總人日，這些才可建立反比。",
      "一量乘r倍時，另一量要除以r，乘積才不變；若情境有整數趟次或完整人數限制，應在理論值後依題意取整。",
      "因k≠0且x不能為0，y也不會為0；生活情境還常把x、y限制為正數，但代數反比可以位於其他象限。"
    ],
    "formalDefinitions": [
      {
        "name": "反比關係",
        "statement": "存在固定非零或指定常數 k，使每組非零資料滿足 xy=k。"
      },
      {
        "name": "反比常數",
        "statement": "每組成對資料的固定乘積。"
      }
    ],
    "formulas": [
      {
        "formula": "xy=k",
        "conditions": [
          "x、y 在關係中不取使式子失去情境意義的值"
        ],
        "meaning": "反比乘積形式。"
      },
      {
        "formula": "x1y1=x2y2",
        "conditions": [
          "同一固定總量與相同條件"
        ],
        "meaning": "兩組反比資料比較。"
      }
    ],
    "nonApplicableCases": [
      "只看到 x 增加、y 減少便判反比。",
      "工作題中每人效率不同時不能直接用人數×天數。",
      "總路程改變時，速度與時間的乘積不再同一常數。",
      "x=0 時 y=k/x 沒有定義。",
      "有固定準備時間的總耗時不一定與機器數成反比。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "先找出題目明示不變的總量與模型條件。",
        "check": "工作題確認同效率，速率題確認固定資料或路程。"
      },
      {
        "step": 2,
        "instruction": "以非零數對計算k=xy，並確認k≠0。",
        "check": "沒有誤用y÷x的正比判準。"
      },
      {
        "step": 3,
        "instruction": "寫成xy=k或y=k/x，再代入新的已知量。",
        "check": "分母x不是零。"
      },
      {
        "step": 4,
        "instruction": "解出未知量，保留精確分數，最後才依情境處理整數限制。",
        "check": "至少完成等條件應向上取整而非四捨五入。"
      },
      {
        "step": 5,
        "instruction": "用新數對重算乘積，並檢查變化方向是否相反。",
        "check": "新舊乘積相同且單位合理。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "L1",
        "prompt": "x、y成反比，x=6、y=8，求k。",
        "solutionSteps": [
          "由反比寫k=xy且k≠0。",
          "代入得到k=6×8=48。",
          "以y=48÷6=8驗算。"
        ],
        "answer": "48。",
        "why": "反比常數是兩個非零對應值的乘積，不是它們的比值。六乘八得到四十八，且把四十八除以六會回到八，因此原數對確實滿足同一反比關係。"
      },
      {
        "exampleId": "L2",
        "prompt": "承上，x=12時求y。",
        "solutionSteps": [
          "沿用乘積xy=48。",
          "列12y=48，解得y=4。",
          "驗算12×4=48。"
        ],
        "answer": "4。",
        "why": "x由六變十二是放大兩倍，反比中的y應由八縮成四，才會保持乘積四十八。代數解與相反倍數的判斷一致，可排除把y也放大兩倍的錯誤。"
      },
      {
        "exampleId": "L3",
        "prompt": "資料(2,18)、(3,12)、(6,7)是否反比？",
        "solutionSteps": [
          "計算三個乘積36、36、42。",
          "比較發現第三組不等於前兩組。",
          "因此所有資料無法共用同一非零k。"
        ],
        "answer": "不是反比。",
        "why": "多組資料必須每一組乘積都相同，前兩組成立不能代表第三組也成立。六乘七等於四十二而不是三十六，所以不存在一個反比常數同時描述三組資料。"
      },
      {
        "exampleId": "L4",
        "prompt": "同效率8人做15天的工作，改12人需幾天？",
        "solutionSteps": [
          "以8×15算得120人日。",
          "列12×天數=120。",
          "解得10天並驗算12×10=120。"
        ],
        "answer": "10天。",
        "why": "同效率與總工作固定使人數乘天數保持一百二十人日。人數由八增加到十二後，天數必須下降；算得十天後重新相乘仍是一百二十，符合反比模型。"
      }
    ],
    "commonMistakes": [
      {
        "mistake": "把反比常數算成 y/x。",
        "why": "混用正比判準。",
        "correction": "反比檢查 xy。"
      },
      {
        "mistake": "人數加倍，天數也加倍。",
        "why": "倍數方向弄反。",
        "correction": "總工作固定時天數減半。"
      },
      {
        "mistake": "不同效率工人仍用人數×天數。",
        "why": "忽略模型條件。",
        "correction": "先換成相同效率或總工作率。"
      },
      {
        "mistake": "只用一組資料宣稱反比。",
        "why": "一組資料無法辨別關係。",
        "correction": "需有規則或多組資料。"
      },
      {
        "mistake": "接受 x=0 的反比點。",
        "why": "除法無定義。",
        "correction": "反比圖形不通過座標軸。"
      },
      {
        "mistake": "固定路程題把速度相加。",
        "why": "應保持速度×時間。",
        "correction": "列 v1t1=v2t2。"
      }
    ],
    "selfCheck": [
      "固定的是乘積而不是比值嗎？",
      "比較條件與總量相同嗎？",
      "x 乘倍數後 y 有按相反倍數變化嗎？",
      "是否排除 0？",
      "人數或件數答案需要整數嗎？"
    ],
    "summary": [
      "反比的本質是 xy 固定。",
      "一量乘 r 倍，另一量除以 r。",
      "工作、速度情境必須先確認總量與效率條件。",
      "一增一減只是表面，乘積檢查才是判準。"
    ],
    "connections": {
      "previous": "正比以比值固定，反比以乘積固定。",
      "next": [
        "反比圖形將不同的成對資料呈現在座標平面。",
        "複合應用會同時出現正比與反比步驟。"
      ]
    },
    "figureReferences": [],
    "practiceLinks": {
      "mcQuestionIds": [
        "u06-s006-v001",
        "u06-s006-v002",
        "u06-s006-v003",
        "u06-s006-v004",
        "u06-s006-v005",
        "u06-s006-v006",
        "u06-s006-v007",
        "u06-s006-v008",
        "u06-s006-v009",
        "u06-s006-v010",
        "u06-s006-v011",
        "u06-s006-v012"
      ],
      "constructedResponseIds": [
        "u06-s006-cr001",
        "u06-s006-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "contentAuthorityConfirmed": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "重新計算三組資料乘積 36、36、42，確認不能因前兩組成立就忽略第三組；工作例以 120 人日驗算，並明列同效率與總工作固定兩項必要假設。",
      "reviewVersion": "human-lecture-review-u06-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "529fb2ee8d20ba120af09cf80277efb1039a5dc322428e1466e7a4bd7b67978c"
  },
  "mcQuestions": [
    {
      "questionId": "u06-s006-v001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "x、y 成反比，x=6、y=8。反比常數 k 為何？",
      "text": "x、y 成反比，x=6、y=8。反比常數 k 為何？",
      "givenConditions": "x、y非0。",
      "target": "求反比常數",
      "choices": [
        "14",
        "48",
        "3/4",
        "4/3"
      ],
      "answerIndex": 1,
      "independentSolution": "代入y=48/x，x=6時y=8。",
      "mainExplanation": "反比常數是乘積。",
      "explanation": "反比關係可寫成xy=k，其中k不為零。把x=6、y=8代入，得到k=6×8=48。再用y=48/x檢查：x=6時y=48÷6=8，與題目相符，因此反比常數是48而不是兩量的和或比值，定義與驗算互相一致。",
      "steps": [
        "由成反比寫出xy=k且k≠0。",
        "代入x=6、y=8，計算k=48。",
        "用y=48÷6=8驗算原數對。"
      ],
      "optionAnalysis": [
        {
          "choice": "14",
          "truth": false,
          "reason": "14是和。"
        },
        {
          "choice": "48",
          "truth": true,
          "reason": "k=xy=6×8=48。"
        },
        {
          "choice": "3/4",
          "truth": false,
          "reason": "3/4是x/y。"
        },
        {
          "choice": "4/3",
          "truth": false,
          "reason": "4/3是y/x。"
        }
      ],
      "misconceptionTarget": "把反比常數誤算成y÷x，或把兩量相加而沒有檢查固定乘積。",
      "prerequisiteCheck": {
        "skillIds": [
          "direct-variation"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['direct-variation'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 45,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "單組資料加反比條件足以定k。",
      "difficultyReason": "基礎乘積。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "ccdd52dea9824645d96b840f608a6417ca816f9818637a7b31f85f1c1e517289"
    },
    {
      "questionId": "u06-s006-v002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "y=36/x。當 x=9 時，y 為何？",
      "text": "y=36/x。當 x=9 時，y 為何？",
      "givenConditions": "x=9≠0。",
      "target": "由反比式求值",
      "choices": [
        "3",
        "27",
        "45",
        "4"
      ],
      "answerIndex": 3,
      "independentSolution": "只使用題幹所給關係式：把x=9代入y=36/x，得y=36÷9=4；再算9×4=36，驗證固定乘積。",
      "mainExplanation": "直接代入反比式。",
      "explanation": "題目已給y=36/x，不需要虛構其他數對。直接把x=9代入，得到y=36÷9=4；用9×4=36反算，乘積與式中的非零常數36一致，所以4是唯一正確值，全部推論都來自題幹資料。",
      "steps": [
        "讀出反比常數k=36。",
        "將x=9代入y=36/x，算得y=4。",
        "檢查9×4=36，確認乘積固定。"
      ],
      "optionAnalysis": [
        {
          "choice": "3",
          "truth": false,
          "reason": "3是36÷12。"
        },
        {
          "choice": "27",
          "truth": false,
          "reason": "27是36-9。"
        },
        {
          "choice": "45",
          "truth": false,
          "reason": "45是36+9。"
        },
        {
          "choice": "4",
          "truth": true,
          "reason": "y=36÷9=4。"
        }
      ],
      "misconceptionTarget": "自行加入題幹沒有提供的數對，或把三十六除以九錯做成加減運算。",
      "prerequisiteCheck": {
        "skillIds": [
          "direct-variation"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['direct-variation'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 45,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "關係式完整。",
      "difficultyReason": "先辨認 xy 固定，再以 12÷3 求 y，屬於反比基礎代入。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "bfd7afde252a1e3d744632e1b33a4e9e495fde96ec2483e20375875f8eede85d"
    },
    {
      "questionId": "u06-s006-v003",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation",
      "difficulty": "basic",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "下列哪組資料呈反比？",
      "text": "下列哪組資料呈反比？",
      "givenConditions": "各x、y非0。",
      "target": "從表格判斷反比",
      "choices": [
        "(2,18)、(3,13)、(6,6)",
        "(2,5)、(4,7)、(6,9)",
        "(2,18)、(3,12)、(6,6)",
        "(3,4)、(6,8)、(9,12)"
      ],
      "answerIndex": 2,
      "independentSolution": "可寫y=36/x。",
      "mainExplanation": "逐組計算xy。",
      "explanation": "判斷反比要逐組計算xy。第三個選項的乘積依序為2×18=36、3×12=36、6×6=36，全都固定且不為零，因此可寫成y=36/x。其他選項至少有一個乘積不同，不能只憑一增一減的外觀判斷。",
      "steps": [
        "分別計算各選項中每個數對的xy。",
        "第三項三個乘積都等於36。",
        "確認其餘選項乘積不全相同，第三項唯一成立。"
      ],
      "optionAnalysis": [
        {
          "choice": "(2,18)、(3,13)、(6,6)",
          "truth": false,
          "reason": "第二組乘積39。"
        },
        {
          "choice": "(2,5)、(4,7)、(6,9)",
          "truth": false,
          "reason": "差值固定2但乘積不同。"
        },
        {
          "choice": "(2,18)、(3,12)、(6,6)",
          "truth": true,
          "reason": "乘積皆為36。"
        },
        {
          "choice": "(3,4)、(6,8)、(9,12)",
          "truth": false,
          "reason": "比值固定4/3。"
        }
      ],
      "misconceptionTarget": "只看到x增大、y減小就判反比，沒有逐組檢查乘積是否固定。",
      "prerequisiteCheck": {
        "skillIds": [
          "direct-variation"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['direct-variation'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 75,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "成對順序明確。",
      "difficultyReason": "多組乘積檢查。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "068454a4b512819c317c70d7dd38bec325205901dea90379e60f3069bcc4e757"
    },
    {
      "questionId": "u06-s006-v004",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "x、y 成反比，x=4 時 y=15。當 x=10 時，y 為何？",
      "text": "x、y 成反比，x=4 時 y=15。當 x=10 時，y 為何？",
      "givenConditions": "x非0。",
      "target": "由一組反比資料求另一組",
      "choices": [
        "6",
        "3",
        "9",
        "37.5"
      ],
      "answerIndex": 0,
      "independentSolution": "10×6=60。",
      "mainExplanation": "保持乘積4×15=10×y。",
      "explanation": "由x=4、y=15可得固定乘積k=4×15=60。當x=10時，10y=60，所以y=6。驗算10×6=60，與原來的4×15相同；x放大2.5倍時y縮成原來的1/2.5，也符合反比，而不是讓兩量一起跟著放大。",
      "steps": [
        "計算反比常數k=4×15=60。",
        "列10y=60，解得y=6。",
        "比較10×6與4×15，確認乘積相同。"
      ],
      "optionAnalysis": [
        {
          "choice": "6",
          "truth": true,
          "reason": "k=60，y=60/10=6。"
        },
        {
          "choice": "3",
          "truth": false,
          "reason": "3把15除5。"
        },
        {
          "choice": "9",
          "truth": false,
          "reason": "9是15-6。"
        },
        {
          "choice": "37.5",
          "truth": false,
          "reason": "37.5把反比當正比。"
        }
      ],
      "misconceptionTarget": "把x的放大倍率也乘到y，誤把反比當成同向變化的正比。",
      "prerequisiteCheck": {
        "skillIds": [
          "direct-variation"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['direct-variation'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 75,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "正值解唯一。",
      "difficultyReason": "先求反比常數再換算新 y，兩步都必須保留乘積不變。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "5237d0b2686690bc4efdef619e27016e4dde80ed55a8bcf3ced887965b08d2d8"
    },
    {
      "questionId": "u06-s006-v005",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "若 x、y 成反比，x 變為原來的 3 倍，y 會如何？",
      "text": "若 x、y 成反比，x 變為原來的 3 倍，y 會如何？",
      "givenConditions": "x、y非0。",
      "target": "判斷倍數變化",
      "choices": [
        "變為原來的3倍",
        "增加3",
        "減少3",
        "變為原來的1/3"
      ],
      "answerIndex": 3,
      "independentSolution": "新乘積3x×y/3=xy。",
      "mainExplanation": "令xy=k，(3x)y'=k，因此y'=y/3。",
      "explanation": "設原數對滿足xy=k且k≠0。x變成3x後，若新值為y'，則(3x)y'=xy；兩邊除以3x得到y'=y/3。因此一量乘3倍，另一量必須除以3，乘積才維持不變，變化方向與正比恰好相反。",
      "steps": [
        "寫原關係xy=k。",
        "將新關係寫成(3x)y'=k。",
        "比較兩式得y'=y/3，並驗證乘積仍為xy。"
      ],
      "optionAnalysis": [
        {
          "choice": "變為原來的3倍",
          "truth": false,
          "reason": "同倍變化是正比。"
        },
        {
          "choice": "增加3",
          "truth": false,
          "reason": "固定差不是反比。"
        },
        {
          "choice": "減少3",
          "truth": false,
          "reason": "減少3取決於原值。"
        },
        {
          "choice": "變為原來的1/3",
          "truth": true,
          "reason": "乘積固定，所以y需除以3。"
        }
      ],
      "misconceptionTarget": "把反比誤當正比使兩量同乘三，或把縮為三分之一說成減少三。",
      "prerequisiteCheck": {
        "skillIds": [
          "direct-variation"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['direct-variation'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 70,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "題目問倍率而非差量。",
      "difficultyReason": "概念推理。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "89c3f77479dd7019bcca917b98c65544e2849268fd25b784cbf7690e0a6ef4f7"
    },
    {
      "questionId": "u06-s006-v006",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation",
      "difficulty": "standard",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "正數 x、y 成反比，且 x:y=2:9、xy=72。x 為何？",
      "text": "正數 x、y 成反比，且 x:y=2:9、xy=72。x 為何？",
      "givenConditions": "x、y為正。",
      "target": "結合比與反比常數",
      "choices": [
        "2",
        "4",
        "8",
        "18"
      ],
      "answerIndex": 1,
      "independentSolution": "4×18=72且4:18=2:9。",
      "mainExplanation": "比例與乘積共同決定實際值。",
      "explanation": "因x:y=2:9且兩量皆為正，可設x=2t、y=9t，其中t>0。代入固定乘積七十二後，可求得共同倍數t=2。於是x=2×2=4、y=18；檢查4×18=72且4:18=2:9，乘積與比例兩項條件都同時成立。",
      "steps": [
        "依正數比設x=2t、y=9t且t>0。",
        "由18t²=72求得t=2。",
        "算x=4並以4×18=72、4:18=2:9驗算。"
      ],
      "optionAnalysis": [
        {
          "choice": "2",
          "truth": false,
          "reason": "2是份數。"
        },
        {
          "choice": "4",
          "truth": true,
          "reason": "令x=2k、y=9k，18k²=72，k=2，x=4。"
        },
        {
          "choice": "8",
          "truth": false,
          "reason": "8不是x。"
        },
        {
          "choice": "18",
          "truth": false,
          "reason": "18是份數乘積。"
        }
      ],
      "misconceptionTarget": "求得t²後忘記正值條件，或把比例中的份數2直接當成實際x。",
      "prerequisiteCheck": {
        "skillIds": [
          "direct-variation"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['direct-variation'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 125,
      "unitCheck": "無單位。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "正值排除負根。",
      "difficultyReason": "多條件求值。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "4fcc92ec1b3247430a77e7b594558bf9708b5a0911360fd546521f2d8c1f0108"
    },
    {
      "questionId": "u06-s006-v007",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "同一路程下，車速由 60 公里/時提高到 75 公里/時，原需 5 小時，新時間為何？",
      "text": "同一路程下，車速由 60 公里/時提高到 75 公里/時，原需 5 小時，新時間為何？",
      "givenConditions": "路程相同且速度穩定。",
      "target": "固定路程速度時間反比",
      "choices": [
        "4小時",
        "3小時",
        "6.25小時",
        "7.5小時"
      ],
      "answerIndex": 0,
      "independentSolution": "75×4=300。",
      "mainExplanation": "用v1t1=v2t2。",
      "explanation": "同一路程下速度與時間的乘積固定。原路程為60×5=300公里；速度提高到75公里/時後，所需時間為300÷75=4小時。用75×4=300公里驗算，確實完成相同路程。",
      "steps": [
        "由原速度與時間算路程60×5=300公里。",
        "用300÷75求新時間4小時。",
        "以75×4=300公里核對固定路程。"
      ],
      "optionAnalysis": [
        {
          "choice": "4小時",
          "truth": true,
          "reason": "固定路程60×5=300公里，新時間300÷75=4。"
        },
        {
          "choice": "3小時",
          "truth": false,
          "reason": "直接減2。"
        },
        {
          "choice": "6.25小時",
          "truth": false,
          "reason": "把時間乘75/60。"
        },
        {
          "choice": "7.5小時",
          "truth": false,
          "reason": "把速度增加量加到時間。"
        }
      ],
      "misconceptionTarget": "看到速度增加就把時間也增加，忽略固定路程下兩者為反向倍數。",
      "prerequisiteCheck": {
        "skillIds": [
          "direct-variation"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['direct-variation'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 90,
      "unitCheck": "公里/時×時=公里。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "不計停車。",
      "difficultyReason": "情境反比建模。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "91f05e6e47cf1f8b72392253e298e0a3253ac0491ae1176aa3b2cdc6d6efefac"
    },
    {
      "questionId": "u06-s006-v008",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "同效率工人完成固定工作，8 人需 15 天。若 12 人工作，需幾天？",
      "text": "同效率工人完成固定工作，8 人需 15 天。若 12 人工作，需幾天？",
      "givenConditions": "每人效率與每日工時相同。",
      "target": "工作量固定反比",
      "choices": [
        "6天",
        "18天",
        "10天",
        "22.5天"
      ],
      "answerIndex": 2,
      "independentSolution": "12×10=120人日。",
      "mainExplanation": "人數×天數固定。",
      "explanation": "每位工人的效率相同且工作總量固定，所以人數×天數等於總人日。原工作量是8×15=120人日；改由12人工作，需要120÷12=10天。反算12×10=120人日，與原工作量一致。",
      "steps": [
        "計算固定總工作量8×15=120人日。",
        "用120÷12求得10天。",
        "以12×10=120人日驗算。"
      ],
      "optionAnalysis": [
        {
          "choice": "6天",
          "truth": false,
          "reason": "直接減人數差。"
        },
        {
          "choice": "18天",
          "truth": false,
          "reason": "誤用正比。"
        },
        {
          "choice": "10天",
          "truth": true,
          "reason": "總人日8×15=120，120÷12=10。"
        },
        {
          "choice": "22.5天",
          "truth": false,
          "reason": "把15乘1.5。"
        }
      ],
      "misconceptionTarget": "沒有確認同效率與固定工作量，就直接套用人數和天數的反比公式。",
      "prerequisiteCheck": {
        "skillIds": [
          "direct-variation"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['direct-variation'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 85,
      "unitCheck": "人×天。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "結果為整天。",
      "difficultyReason": "標準工作反比。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "9614f499404bdf3420f893e98dae5550181d79e3a68b77b273fc0d44aaf39a6b"
    },
    {
      "questionId": "u06-s006-v009",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation",
      "difficulty": "advanced",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "矩形面積固定為 96 平方公分。長由 12 公分改為 16 公分，寬變為多少？",
      "text": "矩形面積固定為 96 平方公分。長由 12 公分改為 16 公分，寬變為多少？",
      "givenConditions": "面積固定。",
      "target": "固定面積反比",
      "choices": [
        "6公分",
        "4公分",
        "8公分",
        "12公分"
      ],
      "answerIndex": 0,
      "independentSolution": "16×6=96。",
      "mainExplanation": "固定面積下長×寬=96。",
      "explanation": "矩形面積固定為96平方公分，所以長與寬的乘積必須保持96。長改為16公分時，寬=96÷16=6公分；驗算16×6=96平方公分，與原來12×8的面積相同。",
      "steps": [
        "依固定面積寫長×寬=96。",
        "把長16代入，算寬=96÷16=6公分。",
        "用16×6=96平方公分驗算。"
      ],
      "optionAnalysis": [
        {
          "choice": "6公分",
          "truth": true,
          "reason": "寬=96÷16=6。"
        },
        {
          "choice": "4公分",
          "truth": false,
          "reason": "面積64。"
        },
        {
          "choice": "8公分",
          "truth": false,
          "reason": "8是原寬。"
        },
        {
          "choice": "12公分",
          "truth": false,
          "reason": "面積192。"
        }
      ],
      "misconceptionTarget": "把長增加四公分就令寬減四公分，錯用固定差而非固定面積。",
      "prerequisiteCheck": {
        "skillIds": [
          "direct-variation"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['direct-variation'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 90,
      "unitCheck": "公分×公分。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "長寬正。",
      "difficultyReason": "幾何情境反比。",
      "literacyContextNecessity": null,
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "93389fa25d2c3d4bf0bb33b803360bbac15785134a56572a74f6bf4e9d7a0df4"
    },
    {
      "questionId": "u06-s006-v010",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "24 公升水箱由相同流量水龍頭注水。3 個水龍頭需 8 分鐘，4 個需多久？",
      "text": "24 公升水箱由相同流量水龍頭注水。3 個水龍頭需 8 分鐘，4 個需多久？",
      "givenConditions": "起始狀態相同、各龍頭流量相同。",
      "target": "設備數與時間反比",
      "choices": [
        "5分鐘",
        "8分鐘",
        "6分鐘",
        "10又2/3分鐘"
      ],
      "answerIndex": 2,
      "independentSolution": "固定工作量為3個水龍頭×8分鐘=24龍頭分鐘；改用4個水龍頭時，時間=24÷4=6分鐘。",
      "mainExplanation": "每個水龍頭流量相同且同時開啟。",
      "explanation": "水箱容量固定，且每個水龍頭流量相同並同時開啟，因此水龍頭數×時間固定。原來是3×8=24龍頭分鐘；改用4個時，時間=24÷4=6分鐘。驗算4×6=24。",
      "steps": [
        "確認水箱容量與單一水龍頭流量固定。",
        "計算總量指標3×8=24龍頭分鐘。",
        "用24÷4=6分鐘並以4×6驗算。"
      ],
      "optionAnalysis": [
        {
          "choice": "5分鐘",
          "truth": false,
          "reason": "不足總流量。"
        },
        {
          "choice": "8分鐘",
          "truth": false,
          "reason": "未考慮多一個。"
        },
        {
          "choice": "6分鐘",
          "truth": true,
          "reason": "水龍頭數×時間固定，3×8=4t，t=6。"
        },
        {
          "choice": "10又2/3分鐘",
          "truth": false,
          "reason": "方向反了。"
        }
      ],
      "misconceptionTarget": "忽略各水龍頭必須同流量且同時開啟，或讓龍頭增加而時間也增加。",
      "prerequisiteCheck": {
        "skillIds": [
          "direct-variation"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['direct-variation'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 90,
      "unitCheck": "分鐘。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "不含延遲。",
      "difficultyReason": "生活條件判讀。",
      "literacyContextNecessity": "水箱容量固定且每個水龍頭流量相同，設備數增加會直接改變完成時間，情境條件是判斷反比不可刪除的核心。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "f00e8340f39e24724e4e8d7230df41e8f9ae892d9d94fb343a66b478cf6b00f9"
    },
    {
      "questionId": "u06-s006-v011",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "固定 600 MB 資料，速率 12 MB/s 需 50 秒。速率 20 MB/s 時，理想時間多少？",
      "text": "固定 600 MB 資料，速率 12 MB/s 需 50 秒。速率 20 MB/s 時，理想時間多少？",
      "givenConditions": "無延遲與速率波動。",
      "target": "固定資料量反比",
      "choices": [
        "20秒",
        "30秒",
        "38秒",
        "83又1/3秒"
      ],
      "answerIndex": 1,
      "independentSolution": "20×30=600。",
      "mainExplanation": "速率×時間固定。",
      "explanation": "在理想傳輸且資料量固定的假設下，速率×時間=600MB。速率改為20MB/s時，時間=600÷20=30秒。驗算20MB/s×30秒=600MB，單位相消後確實回到固定資料量，也符合速率較快、時間較短的方向。",
      "steps": [
        "列出固定資料量600MB。",
        "計算600MB÷20MB/s=30秒。",
        "用20×30=600驗算速率與時間。"
      ],
      "optionAnalysis": [
        {
          "choice": "20秒",
          "truth": false,
          "reason": "直接減速率差。"
        },
        {
          "choice": "30秒",
          "truth": true,
          "reason": "資料量12×50=600，600÷20=30。"
        },
        {
          "choice": "38秒",
          "truth": false,
          "reason": "線性減法。"
        },
        {
          "choice": "83又1/3秒",
          "truth": false,
          "reason": "比例方向反。"
        }
      ],
      "misconceptionTarget": "速率提高後仍算出更久時間，或忽略題目限定的是理想固定資料量。",
      "prerequisiteCheck": {
        "skillIds": [
          "direct-variation"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['direct-variation'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 95,
      "unitCheck": "MB/s×s。",
      "roundingCheck": "無近似。",
      "ambiguityBoundaryAudit": "題目明示理想。",
      "difficultyReason": "科技情境。",
      "literacyContextNecessity": "固定資料量與理想條件是必要資訊。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "6fa84a0c62e6b3767194b70fa4fb366d2297d1df0695e2eca590b1c132cc03ff"
    },
    {
      "questionId": "u06-s006-v012",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation",
      "difficulty": "literacy",
      "itemType": "multiple-choice",
      "type": "mc",
      "prompt": "同一批貨用相同容量貨車運送。6 輛各跑 5 趟可完成；改用 8 輛，至少各跑幾趟？",
      "text": "同一批貨用相同容量貨車運送。6 輛各跑 5 趟可完成；改用 8 輛，至少各跑幾趟？",
      "givenConditions": "容量相同、貨量固定、趟數整數。",
      "target": "反比結合向上取整",
      "choices": [
        "3趟",
        "3.75趟",
        "5趟",
        "4趟"
      ],
      "answerIndex": 3,
      "independentSolution": "8×4=32≥30，8×3=24<30。",
      "mainExplanation": "先算理論值，再套整數限制。",
      "explanation": "總運量相當於6×5=30輛次。改用8輛時，理論上每輛需30÷8=3.75趟，但每一趟不可分割且題目問至少幾趟，所以必須向上取整為4趟。8×4=32足夠，8×3=24不足。",
      "steps": [
        "計算固定總需求6×5=30輛次。",
        "求理論值30÷8=3.75趟。",
        "依完整趟次限制向上取整為4，並比較32與24。"
      ],
      "optionAnalysis": [
        {
          "choice": "3趟",
          "truth": false,
          "reason": "24車趟不足。"
        },
        {
          "choice": "3.75趟",
          "truth": false,
          "reason": "不能跑0.75趟。"
        },
        {
          "choice": "5趟",
          "truth": false,
          "reason": "足夠但非至少。"
        },
        {
          "choice": "4趟",
          "truth": true,
          "reason": "總車趟30，30÷8=3.75；趟數須整數且至少完成，向上取整4。"
        }
      ],
      "misconceptionTarget": "把三點七五直接四捨五入，沒有依至少完成且趟次為整數的條件向上取整。",
      "prerequisiteCheck": {
        "skillIds": [
          "direct-variation"
        ],
        "evidence": "本題只使用已鎖定前置技能 ['direct-variation'] 與本技能定義；解法未引用後續單元技巧。"
      },
      "estimatedTimeSec": 120,
      "unitCheck": "車趟。",
      "roundingCheck": "因至少需向上取整。",
      "ambiguityBoundaryAudit": "各車可跑相同上限趟數。",
      "difficultyReason": "素養反比。",
      "literacyContextNecessity": "整趟與至少條件會改變純比例答案。",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "sourceScope": "CAP_108_JUNIOR_MATH",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "contentSha256": "802cd278c243d01252032a026455b56e273164d880ffcc2bc5af4b9ddab00d20"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u06-s006-cr001",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation",
      "difficulty": "standard",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "x、y 成反比，x=5時y=18。求關係式與x=12時的y。",
      "target": "建立反比式",
      "requiredWork": [
        "求固定乘積k。",
        "寫y=k/x。",
        "代入並驗算。"
      ],
      "fullCreditSolution": [
        "反比定義為xy=k且k≠0；由x=5、y=18算得k=5×18=90，這個非零乘積決定唯一關係。",
        "因此關係式為y=90/x，定義域須有x≠0，且所得y也不會等於零。",
        "當x=12時，y=90÷12=15/2，也就是7.5。",
        "以12×(15/2)=90驗算，乘積與原資料5×18相同，前後兩組資料都滿足反比。"
      ],
      "alternativeSolutions": [
        "可用5×18=12y直接求y=15/2。"
      ],
      "reasoningSteps": [
        "由已知非零數對求固定乘積90。",
        "寫出y=90/x並註明x不能為零。",
        "代入x=12求y=15/2。",
        "用新舊數對的乘積完成驗算。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "k=90、關係式y=90/x、y=15/2且驗算乘積。"
        },
        {
          "score": 2,
          "criteria": "關係式與求值正確但漏驗算。"
        },
        {
          "score": 1,
          "criteria": "知道乘積固定並列5×18=12y，但算術錯。"
        },
        {
          "score": 0,
          "criteria": "使用y/x固定或得到同向倍數。"
        }
      ],
      "partialCreditRules": [
        "分數15/2或7.5皆可。",
        "關係式需包含x≠0的理解。"
      ],
      "followThroughPolicy": "乘積方程正確後的除法錯誤可給1分；若錯用正比，不採跟隨。",
      "unitNotationRules": "無單位；可註明x≠0。",
      "answerOnlyPolicy": "只寫7.5最多1分。",
      "commonErrors": [
        "把反比常數算成18÷5，混用了正比的固定比值。",
        "x變大時也讓y變大，或把90÷12錯誤約分而未用乘積回查。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "y=90/x；x=12時y=15/2。",
        "ambiguity": "反比條件與非零資料足以唯一決定。",
        "scope": "U06 locked skill only; no future-unit method required.",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "33ddeacea90041d2d4e5810ac80025c26de60050c61e03bee1b1e05b317e820a"
    },
    {
      "questionId": "u06-s006-cr002",
      "unitId": "u06",
      "numericUnitId": 6,
      "topicId": "u06-variation",
      "skillId": "inverse-variation",
      "difficulty": "advanced",
      "itemType": "constructed-response",
      "type": "constructed-response",
      "prompt": "同效率的10人原預計12天完成工作。做了4天後，有2人離開。還需幾天完成？",
      "target": "分段工作反比",
      "requiredWork": [
        "以人日表示總工作量。",
        "扣除前4天完成量。",
        "用剩餘8人求剩餘天數。"
      ],
      "fullCreditSolution": [
        "每人效率相同且總工作量固定，所以原計畫的工作量為10×12=120人日。",
        "前四天仍有10人工作，已完成10×4=40人日，因此剩下120-40=80人日。",
        "兩人離開後剩8人，完成剩餘工作需80÷8=10天。",
        "題目問的是離開後還需多久，所以答案為10天；若問總工期才是4+10=14天。"
      ],
      "alternativeSolutions": [
        "也可用完成比例：前4天完成1/3，剩2/3；原總120人日的2/3為80。"
      ],
      "reasoningSteps": [
        "以人日算出全部工作量120。",
        "扣除前四天完成的40人日。",
        "用剩餘八人分擔80人日，求得10天。",
        "區分還需天數與總工期並核對題意。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "完整得到總120、已做40、剩80與還需10天。"
        },
        {
          "score": 2,
          "criteria": "答案10天正確且主要分段過程成立，但漏一個中間量。"
        },
        {
          "score": 1,
          "criteria": "正確算出剩80人日，但最後除法或人數使用有錯。"
        },
        {
          "score": 0,
          "criteria": "直接把12按10:8放大而忽略已做4天。"
        }
      ],
      "partialCreditRules": [
        "題目問『還需』，不是總工期；若答總14天但有過程，可依是否同時指出還需10天評分。"
      ],
      "followThroughPolicy": "若總工作量算術錯，後續一致扣除與除以8可給1分；若忽略分段，不給跟隨。",
      "unitNotationRules": "單位需區分人日與天；最後答10天。",
      "answerOnlyPolicy": "只寫10天最多2分。",
      "commonErrors": [
        "直接用八人完成全部120人日，忽略前四天已完成的工作。",
        "算出總工期十四天後直接作答，沒有回應題目所問的還需十天。"
      ],
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecRef": null,
      "independentReview": {
        "derivedResult": "還需10天。",
        "ambiguity": "每人效率與每日工時固定，離開發生在4天後，條件充分。",
        "scope": "U06 locked skill only; no future-unit method required.",
        "decision": "pass",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_AT_FINAL_INTEGRATION",
      "reviewStatus": "independently-reviewed",
      "contentSha256": "3f3dc76981cb9d0a72c8064d406221b45b6bdc0a6f9f8acc6353e44f95c98d78"
    }
  ],
  "semanticReviews": [
    {
      "reviewId": "u06-s006-v001-semantic-review-r1",
      "questionId": "u06-s006-v001",
      "unitId": "u06",
      "skillId": "inverse-variation",
      "contentSha256": "ccdd52dea9824645d96b840f608a6417ca816f9818637a7b31f85f1c1e517289",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "代入y=48/x，x=6時y=8。",
      "derivedAnswer": "48",
      "storedAnswer": "48",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "14是和。",
        "k=xy=6×8=48。",
        "3/4是x/y。",
        "4/3是y/x。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「求反比常數」，已明示必要條件：x、y非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：單組資料加反比條件足以定k。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "基礎乘積。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：代入y=48/x，x=6時y=8。 正確選項為「48」。逐項檢查後，唯一為真的理由是「k=xy=6×8=48。」；其餘三項分別因「14是和。」、「3/4是x/y。」、「4/3是y/x。」而排除。邊界與語意再檢查：單組資料加反比條件足以定k。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s006-v002-semantic-review-r1",
      "questionId": "u06-s006-v002",
      "unitId": "u06",
      "skillId": "inverse-variation",
      "contentSha256": "bfd7afde252a1e3d744632e1b33a4e9e495fde96ec2483e20375875f8eede85d",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "只使用題幹所給關係式：把x=9代入y=36/x，得y=36÷9=4；再算9×4=36，驗證固定乘積。",
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
        "3是36÷12。",
        "27是36-9。",
        "45是36+9。",
        "y=36÷9=4。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「由反比式求值」，已明示必要條件：x=9≠0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：關係式完整。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "先辨認 xy 固定，再以 12÷3 求 y，屬於反比基礎代入。",
      "literacyNecessity": null,
      "reviewerNote": "只使用題幹所給關係式：把x=9代入y=36/x，得y=36÷9=4；再算9×4=36，驗證固定乘積。正確選項為「4」；3、27、45分別來自錯用其他除數或把除法改成減法、加法，均不符合反比式，因此沒有第二個正確答案。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s006-v003-semantic-review-r1",
      "questionId": "u06-s006-v003",
      "unitId": "u06",
      "skillId": "inverse-variation",
      "contentSha256": "068454a4b512819c317c70d7dd38bec325205901dea90379e60f3069bcc4e757",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "可寫y=36/x。",
      "derivedAnswer": "(2,18)、(3,12)、(6,6)",
      "storedAnswer": "(2,18)、(3,12)、(6,6)",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "第二組乘積39。",
        "差值固定2但乘積不同。",
        "乘積皆為36。",
        "比值固定4/3。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「從表格判斷反比」，已明示必要條件：各x、y非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：成對順序明確。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "多組乘積檢查。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：可寫y=36/x。 正確選項為「(2,18)、(3,12)、(6,6)」。逐項檢查後，唯一為真的理由是「乘積皆為36。」；其餘三項分別因「第二組乘積39。」、「差值固定2但乘積不同。」、「比值固定4/3。」而排除。邊界與語意再檢查：成對順序明確。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s006-v004-semantic-review-r1",
      "questionId": "u06-s006-v004",
      "unitId": "u06",
      "skillId": "inverse-variation",
      "contentSha256": "5237d0b2686690bc4efdef619e27016e4dde80ed55a8bcf3ced887965b08d2d8",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "10×6=60。",
      "derivedAnswer": "6",
      "storedAnswer": "6",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "k=60，y=60/10=6。",
        "3把15除5。",
        "9是15-6。",
        "37.5把反比當正比。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「由一組反比資料求另一組」，已明示必要條件：x非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：正值解唯一。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "先求反比常數再換算新 y，兩步都必須保留乘積不變。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：10×6=60。 正確選項為「6」。逐項檢查後，唯一為真的理由是「k=60，y=60/10=6。」；其餘三項分別因「3把15除5。」、「9是15-6。」、「37.5把反比當正比。」而排除。邊界與語意再檢查：正值解唯一。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s006-v005-semantic-review-r1",
      "questionId": "u06-s006-v005",
      "unitId": "u06",
      "skillId": "inverse-variation",
      "contentSha256": "89c3f77479dd7019bcca917b98c65544e2849268fd25b784cbf7690e0a6ef4f7",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "新乘積3x×y/3=xy。",
      "derivedAnswer": "變為原來的1/3",
      "storedAnswer": "變為原來的1/3",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "同倍變化是正比。",
        "固定差不是反比。",
        "減少3取決於原值。",
        "乘積固定，所以y需除以3。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「判斷倍數變化」，已明示必要條件：x、y非0。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：題目問倍率而非差量。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "概念推理。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：新乘積3x×y/3=xy。 正確選項為「變為原來的1/3」。逐項檢查後，唯一為真的理由是「乘積固定，所以y需除以3。」；其餘三項分別因「同倍變化是正比。」、「固定差不是反比。」、「減少3取決於原值。」而排除。邊界與語意再檢查：題目問倍率而非差量。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s006-v006-semantic-review-r1",
      "questionId": "u06-s006-v006",
      "unitId": "u06",
      "skillId": "inverse-variation",
      "contentSha256": "4fcc92ec1b3247430a77e7b594558bf9708b5a0911360fd546521f2d8c1f0108",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "4×18=72且4:18=2:9。",
      "derivedAnswer": "4",
      "storedAnswer": "4",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "2是份數。",
        "令x=2k、y=9k，18k²=72，k=2，x=4。",
        "8不是x。",
        "18是份數乘積。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「結合比與反比常數」，已明示必要條件：x、y為正。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：無單位。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：正值排除負根。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "多條件求值。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：4×18=72且4:18=2:9。 正確選項為「4」。逐項檢查後，唯一為真的理由是「令x=2k、y=9k，18k²=72，k=2，x=4。」；其餘三項分別因「2是份數。」、「8不是x。」、「18是份數乘積。」而排除。邊界與語意再檢查：正值排除負根。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s006-v007-semantic-review-r1",
      "questionId": "u06-s006-v007",
      "unitId": "u06",
      "skillId": "inverse-variation",
      "contentSha256": "91f05e6e47cf1f8b72392253e298e0a3253ac0491ae1176aa3b2cdc6d6efefac",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "75×4=300。",
      "derivedAnswer": "4小時",
      "storedAnswer": "4小時",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "固定路程60×5=300公里，新時間300÷75=4。",
        "直接減2。",
        "把時間乘75/60。",
        "把速度增加量加到時間。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「固定路程速度時間反比」，已明示必要條件：路程相同且速度穩定。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公里/時×時=公里。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：不計停車。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "情境反比建模。",
      "literacyNecessity": "同一路程是乘積不變的必要條件。",
      "reviewerNote": "獨立重算：75×4=300。 正確選項為「4小時」。逐項檢查後，唯一為真的理由是「固定路程60×5=300公里，新時間300÷75=4。」；其餘三項分別因「直接減2。」、「把時間乘75/60。」、「把速度增加量加到時間。」而排除。邊界與語意再檢查：不計停車。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s006-v008-semantic-review-r1",
      "questionId": "u06-s006-v008",
      "unitId": "u06",
      "skillId": "inverse-variation",
      "contentSha256": "9614f499404bdf3420f893e98dae5550181d79e3a68b77b273fc0d44aaf39a6b",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "12×10=120人日。",
      "derivedAnswer": "10天",
      "storedAnswer": "10天",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "直接減人數差。",
        "誤用正比。",
        "總人日8×15=120，120÷12=10。",
        "把15乘1.5。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「工作量固定反比」，已明示必要條件：每人效率與每日工時相同。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：人×天。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：結果為整天。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "標準工作反比。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：12×10=120人日。 正確選項為「10天」。逐項檢查後，唯一為真的理由是「總人日8×15=120，120÷12=10。」；其餘三項分別因「直接減人數差。」、「誤用正比。」、「把15乘1.5。」而排除。邊界與語意再檢查：結果為整天。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s006-v009-semantic-review-r1",
      "questionId": "u06-s006-v009",
      "unitId": "u06",
      "skillId": "inverse-variation",
      "contentSha256": "93389fa25d2c3d4bf0bb33b803360bbac15785134a56572a74f6bf4e9d7a0df4",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "16×6=96。",
      "derivedAnswer": "6公分",
      "storedAnswer": "6公分",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "optionEvidence": [
        "寬=96÷16=6。",
        "面積64。",
        "8是原寬。",
        "面積192。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「固定面積反比」，已明示必要條件：面積固定。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：公分×公分。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：長寬正。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "幾何情境反比。",
      "literacyNecessity": null,
      "reviewerNote": "獨立重算：16×6=96。 正確選項為「6公分」。逐項檢查後，唯一為真的理由是「寬=96÷16=6。」；其餘三項分別因「面積64。」、「8是原寬。」、「面積192。」而排除。邊界與語意再檢查：長寬正。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s006-v010-semantic-review-r1",
      "questionId": "u06-s006-v010",
      "unitId": "u06",
      "skillId": "inverse-variation",
      "contentSha256": "f00e8340f39e24724e4e8d7230df41e8f9ae892d9d94fb343a66b478cf6b00f9",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "固定工作量為3個水龍頭×8分鐘=24龍頭分鐘；改用4個水龍頭時，時間=24÷4=6分鐘。",
      "derivedAnswer": "6分鐘",
      "storedAnswer": "6分鐘",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "optionEvidence": [
        "不足總流量。",
        "未考慮多一個。",
        "水龍頭數×時間固定，3×8=4t，t=6。",
        "方向反了。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「設備數與時間反比」，已明示必要條件：起始狀態相同、各龍頭流量相同。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：分鐘。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：不含延遲。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "生活條件判讀。",
      "literacyNecessity": "水箱容量固定且每個水龍頭流量相同，設備數增加會直接改變完成時間，情境條件是判斷反比不可刪除的核心。",
      "reviewerNote": "獨立重算：固定工作量為3個水龍頭×8分鐘=24龍頭分鐘；改用4個水龍頭時，時間=24÷4=6分鐘。 正確選項為「6分鐘」。逐項核對四個選項後，只有該選項符合題幹全部條件；其餘選項的排除理由依序為：不足總流量。；未考慮多一個。；方向反了。。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s006-v011-semantic-review-r1",
      "questionId": "u06-s006-v011",
      "unitId": "u06",
      "skillId": "inverse-variation",
      "contentSha256": "6fa84a0c62e6b3767194b70fa4fb366d2297d1df0695e2eca590b1c132cc03ff",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "20×30=600。",
      "derivedAnswer": "30秒",
      "storedAnswer": "30秒",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "optionEvidence": [
        "直接減速率差。",
        "資料量12×50=600，600÷20=30。",
        "線性減法。",
        "比例方向反。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「固定資料量反比」，已明示必要條件：無延遲與速率波動。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：MB/s×s。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：題目明示理想。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：無近似。。"
      },
      "difficultyReason": "科技情境。",
      "literacyNecessity": "固定資料量與理想條件是必要資訊。",
      "reviewerNote": "獨立重算：20×30=600。 正確選項為「30秒」。逐項檢查後，唯一為真的理由是「資料量12×50=600，600÷20=30。」；其餘三項分別因「直接減速率差。」、「線性減法。」、「比例方向反。」而排除。邊界與語意再檢查：題目明示理想。",
      "reviewerDecision": "pass"
    },
    {
      "reviewId": "u06-s006-v012-semantic-review-r1",
      "questionId": "u06-s006-v012",
      "unitId": "u06",
      "skillId": "inverse-variation",
      "contentSha256": "802cd278c243d01252032a026455b56e273164d880ffcc2bc5af4b9ddab00d20",
      "reviewVersion": "human-review-u06-r1.0",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "independentSolution": "8×4=32≥30，8×3=24<30。",
      "derivedAnswer": "4趟",
      "storedAnswer": "4趟",
      "answerMatch": true,
      "uniqueCorrectAnswer": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "optionEvidence": [
        "24車趟不足。",
        "不能跑0.75趟。",
        "足夠但非至少。",
        "總車趟30，30÷8=3.75；趟數須整數且至少完成，向上取整4。"
      ],
      "ambiguityChecks": {
        "wording": "題幹中的所求量為「反比結合向上取整」，已明示必要條件：容量相同、貨量固定、趟數整數。，不存在需猜測的隱藏量。",
        "units": "單位審查結果：車趟。；因此選項可在同一基準下比較。",
        "boundary": "範圍審查結果：各車可跑相同上限趟數。，未超出 U06 鎖定技能邊界。",
        "rounding": "近似與取整審查：因至少需向上取整。。"
      },
      "difficultyReason": "素養反比。",
      "literacyNecessity": "整趟與至少條件會改變純比例答案。",
      "reviewerNote": "獨立重算：8×4=32≥30，8×3=24<30。 正確選項為「4趟」。逐項檢查後，唯一為真的理由是「總車趟30，30÷8=3.75；趟數須整數且至少完成，向上取整4。」；其餘三項分別因「24車趟不足。」、「不能跑0.75趟。」、「足夠但非至少。」而排除。邊界與語意再檢查：各車可跑相同上限趟數。",
      "reviewerDecision": "pass"
    }
  ],
  "drawingSpecs": []
};
