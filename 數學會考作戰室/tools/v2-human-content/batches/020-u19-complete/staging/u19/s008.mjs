export const u19_s008 = {
  "lecture": {
    "lectureId": "u19-s008-lecture-r1",
    "unitId": "u19",
    "numericUnitId": 19,
    "topicId": "u19-angles",
    "skillId": "arc-length-formula",
    "title": "弧長公式",
    "unitTitle": "圓",
    "audience": "臺灣國中零基礎至國中教育會考滿分",
    "reviewStatus": "independently-reviewed",
    "skillIdentity": {
      "slot": "s008",
      "lockedSkillId": "arc-length-formula",
      "lockedOrder": 8,
      "scope": "正確套用 L=(θ/360°)×2πr 並反求未知量。"
    },
    "learningOutcomes": [
      "能套用一般弧長公式。",
      "能反求半徑或圓心角。",
      "能依題意保留π或取近似值。"
    ],
    "prerequisites": [
      {
        "skillId": "central-angle-arc",
        "requiredLevel": "能使用「圓心角與弧」的核心定義與基本運算，並辨認其適用條件。"
      }
    ],
    "prerequisiteBridge": "先由前一技能「圓心角與弧」的結論，連接到本技能「弧長公式」所需的新判斷。",
    "glossary": [
      {
        "term": "θ",
        "definition": "弧所對圓心角的度數。"
      },
      {
        "term": "比例因子 θ/360°",
        "definition": "弧占整圓的比例。"
      },
      {
        "term": "精確值",
        "definition": "保留π等符號、不先取小數近似的值。"
      }
    ],
    "notation": [
      {
        "symbol": "O",
        "meaning": "圓心。"
      },
      {
        "symbol": "∠ABC",
        "meaning": "頂點是B的角。"
      },
      {
        "symbol": "π",
        "meaning": "圓周率；題目未要求近似時保留π。"
      }
    ],
    "conceptNarrative": [
      "一般弧長公式只是「整圓周長乘弧所占比例」。",
      "θ 必須使用度數且與指定弧一致，r 必須是半徑。",
      "反求時把未知量保留在等式中，最後再檢查角度是否介於0°與360°。"
    ],
    "formalDefinitions": [
      {
        "name": "θ",
        "statement": "弧所對圓心角的度數。"
      },
      {
        "name": "比例因子 θ/360°",
        "statement": "弧占整圓的比例。"
      },
      {
        "name": "精確值",
        "statement": "保留π等符號、不先取小數近似的值。"
      }
    ],
    "formulas": [
      {
        "formula": "L=(θ/360°)×2πr",
        "conditions": [
          "0°<θ≤360°，r>0"
        ],
        "meaning": "弧長公式"
      },
      {
        "formula": "θ=360°L/(2πr)",
        "conditions": [
          "L、r已知"
        ],
        "meaning": "反求圓心角"
      }
    ],
    "nonApplicableCases": [
      "把直徑直接當 r 會得到兩倍答案。",
      "θ 若是圓周角，需先乘2得到所對弧的圓心角。",
      "題目要求精確值時不應把π先換成3.14。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "確認半徑與中心角。",
        "check": "完成此步後，確認仍在「弧長公式」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 2,
        "instruction": "算 θ/360 的最簡分率。",
        "check": "完成此步後，確認仍在「弧長公式」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 3,
        "instruction": "乘2πr並約分。",
        "check": "完成此步後，確認仍在「弧長公式」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 4,
        "instruction": "依題意處理π與單位。",
        "check": "完成此步後，確認仍在「弧長公式」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 5,
        "instruction": "代回整圓比例檢查。",
        "check": "完成此步後，確認仍在「弧長公式」的CAP範圍且沒有只憑圖形目測。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "s008-L1",
        "prompt": "r=9，θ=80°。",
        "solutionSteps": [
          "80/360=2/9。",
          "L=(2/9)×18π=4π。"
        ],
        "answer": "4π。",
        "level": "basic"
      },
      {
        "exampleId": "s008-L2",
        "prompt": "r=12，L=6π。求θ。",
        "solutionSteps": [
          "整圓周長24π。",
          "6π/24π=1/4，θ=90°。"
        ],
        "answer": "90°。",
        "level": "standard"
      },
      {
        "exampleId": "s008-L3",
        "prompt": "直徑14，θ=180°。",
        "solutionSteps": [
          "r=7。",
          "L=1/2×14π=7π。"
        ],
        "answer": "7π。",
        "level": "advanced"
      },
      {
        "exampleId": "s008-L4",
        "prompt": "r=10，θ=72°，π取3.14。",
        "solutionSteps": [
          "72/360=1/5。",
          "L=1/5×20×3.14=12.56。"
        ],
        "answer": "12.56。",
        "level": "connection"
      }
    ],
    "difficultyConnections": {
      "basic": "辨認「弧長公式」的定義、符號與單一步驟關係。",
      "standard": "把「弧長公式」與前置技能、比例或一次代數連接。",
      "advanced": "在多段弧、複合邊界、反求或條件篩選中使用「弧長公式」。",
      "literacy": "把真實尺寸、旋轉、施工或觀測情境轉成「弧長公式」的數學模型。"
    },
    "commonMistakes": [
      {
        "mistake": "θ直接除以180",
        "why": "誤把半圓比例當一般公式",
        "correction": "一般分母是360"
      },
      {
        "mistake": "直徑未除2",
        "why": "半徑辨認錯",
        "correction": "先寫r=d/2"
      },
      {
        "mistake": "圓周角直接代θ",
        "why": "公式中的θ是圓心角",
        "correction": "圓周角先乘2"
      },
      {
        "mistake": "過早把π取3.14",
        "why": "造成精確值或連續計算誤差",
        "correction": "題目要求才近似"
      }
    ],
    "selfCheck": [
      "我是否先確認「弧長公式」的適用條件？",
      "我是否分清半徑、直徑、弦、弧與角的角色？",
      "我是否寫出必要單位，並在最後才取近似值？",
      "我是否用定理或公式驗證，而不是依圖形外觀猜測？"
    ],
    "summary": [
      "弧長等於圓周長乘θ/360。",
      "公式中的θ是圓心角。",
      "反求後要檢查角度與單位。"
    ],
    "connections": {
      "previous": "承接「圓心角與弧」。",
      "next": "下一技能為「內接角應用」。"
    },
    "figureReferences": [
      {
        "figureId": "u19-s008-fig001",
        "purpose": "圓 O 顯示半徑 r、中心角 θ 與對應粗弧 L，三個公式量均清楚標示。",
        "altText": "圓 O 顯示半徑 r、中心角 θ 與對應粗弧 L，三個公式量均清楚標示。，不可按比例目測。"
      }
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u19-s008-v001",
        "u19-s008-v002",
        "u19-s008-v003",
        "u19-s008-v004",
        "u19-s008-v005",
        "u19-s008-v006",
        "u19-s008-v007",
        "u19-s008-v008",
        "u19-s008-v009",
        "u19-s008-v010",
        "u19-s008-v011",
        "u19-s008-v012"
      ],
      "constructedResponseIds": [
        "u19-s008-cr001",
        "u19-s008-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段回讀「弧長公式」講義，確認所有符號先定義、公式均附條件，並以四個不同目的例題檢查定義辨認、標準運算、進階邊界與實際連結；特別核對：正確套用 L=(θ/360°)×2πr 並反求未知量。",
      "reviewVersion": "human-lecture-review-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "feda68e18a02e1901514b562d2e711128f897363f06a90d688641d6686a45bfd"
  },
  "questions": [
    {
      "questionId": "u19-s008-v001",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length-formula",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "figure-supported",
      "figureId": "u19-s008-fig001",
      "drawingSpecId": "u19-s008-fig001",
      "prompt": "半徑 9 cm、中心角 80°。小安計算弧長時列出 (80/360)×2π×9=4π cm。下列判斷何者正確？",
      "text": "半徑 9 cm、中心角 80°。小安計算弧長時列出 (80/360)×2π×9=4π cm。下列判斷何者正確？",
      "givenConditions": "半徑 9 cm；中心角 80°；小安的列式與結果如題。",
      "target": "檢查弧長公式的比例、圓周與計算結果。",
      "choices": [
        "列式錯，應使用 (80/180)×2π×9",
        "列式錯，應改用 (80/360)×π×9²",
        "列式與結果都正確",
        "列式正確，但結果應為 8π cm"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存判斷，重新計算：80/360=2/9，整圓周為2π×9=18π，因此弧長=(2/9)×18π=4π cm。小安的列式與結果皆正確。",
      "explanation": "弧長等於中心角占整周的比例乘以圓周長；重新計算得到 4π cm，所以第三項正確。",
      "steps": [
        "確認比例應是 80/360。",
        "計算圓周 2π×9=18π。",
        "取 2/9 得 4π cm。"
      ],
      "optionAnalysis": [
        {
          "choice": "列式錯，應使用 (80/180)×2π×9",
          "truth": false,
          "reason": "中心角應和 360° 比較，不是和 180° 比較。"
        },
        {
          "choice": "列式錯，應改用 (80/360)×π×9²",
          "truth": false,
          "reason": "πr² 是面積公式，不能用來求弧長。"
        },
        {
          "choice": "列式與結果都正確",
          "truth": true,
          "reason": "(80/360)×18π=(2/9)×18π=4π cm。"
        },
        {
          "choice": "列式正確，但結果應為 8π cm",
          "truth": false,
          "reason": "把 80/360 約分或乘法計算錯誤，正確是 4π。"
        }
      ],
      "misconceptionTarget": "把弧長公式與扇形面積公式混用，或把中心角比例的分母寫成 180°。",
      "prerequisiteCheck": "需先能使用「圓心角與弧」；本題未使用後續技能。",
      "estimatedTimeSec": 65,
      "unitCheck": "題目求弧長，正確結果與相關選項皆使用 cm；含 cm² 的面積式被明確排除。",
      "roundingCheck": "答案保留 π 的精確值，不涉及近似。",
      "ambiguityAudit": "題目問的是對既有列式和結果的判斷；四個選項分別對應比例、公式種類與運算結果，只有一項可成立。",
      "boundaryAudit": "只使用國中會考範圍的弧長公式和基本分數運算。",
      "difficultyReason": "basic：學生必須同時檢查角度比例、圓周公式和最後計算，而不是直接套入另一組數字。",
      "literacyContextNecessity": null,
      "authoringIntent": "以錯誤診斷方式檢查弧長公式的完整結構，取代與前一 skill 重複的直接代值題。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "60033874a62d7b00083a68677ff2312de516ffe1a5d1ae1514a38cfbc9a59e84"
    },
    {
      "questionId": "u19-s008-v002",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length-formula",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "某一段弧占整個圓周長的 1/4。若該圓周長為 24π m，這段弧長為何？",
      "text": "某一段弧占整個圓周長的 1/4。若該圓周長為 24π m，這段弧長為何？",
      "givenConditions": "弧長占整圓周的 1/4；整圓周長 24π m。",
      "target": "由圓周比例求弧長。",
      "choices": [
        "6π m",
        "3π m",
        "12π m",
        "24π m"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接以比例重算：弧長=(1/4)×24π=6π m。",
      "explanation": "弧占整個圓周的四分之一，所以弧長是 24π 的四分之一，即 6π m。",
      "steps": [
        "把弧長寫成 (1/4)×圓周長。",
        "計算 24π÷4=6π m。"
      ],
      "optionAnalysis": [
        {
          "choice": "6π m",
          "truth": true,
          "reason": "24π×1/4=6π m。"
        },
        {
          "choice": "3π m",
          "truth": false,
          "reason": "把四分之一又多除以 2。"
        },
        {
          "choice": "12π m",
          "truth": false,
          "reason": "這是整圓周的一半，不是四分之一。"
        },
        {
          "choice": "24π m",
          "truth": false,
          "reason": "這是完整圓周長，沒有取指定比例。"
        }
      ],
      "misconceptionTarget": "知道角度或比例，卻沒有把弧長視為整圓周長的相同比例。",
      "prerequisiteCheck": "需先能使用「圓心角與弧」；本題未使用後續技能。",
      "estimatedTimeSec": 55,
      "unitCheck": "四個選項皆為長度 m，沒有使用面積單位。",
      "roundingCheck": "保留 π 的精確值，不需近似；已確認不會因四捨五入產生第二答案。",
      "ambiguityAudit": "題目直接給出弧占整圓周的 1/4，且整圓周長唯一為 24π m，不涉及優弧或劣弧的另一選擇。",
      "boundaryAudit": "只使用分數比例與圓周長，屬國中會考範圍。",
      "difficultyReason": "basic：從弧與整圓的比例直接取得弧長，資訊形式不同於半徑加中心角的代值題。",
      "literacyContextNecessity": null,
      "authoringIntent": "檢查學生能否辨認弧長和圓周長的比例關係，而非重複套入半徑與角度。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "3cf75ef99cd17a828b9bbe443733095bd0e97c41abf4a5c06ce20f5ef23a0cb4"
    },
    {
      "questionId": "u19-s008-v003",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length-formula",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "一個圓的直徑為 14 cm，取 180° 的弧。小傑算出弧長 14π cm。下列哪個修正正確？",
      "text": "一個圓的直徑為 14 cm，取 180° 的弧。小傑算出弧長 14π cm。下列哪個修正正確？",
      "givenConditions": "直徑 14 cm；中心角 180°；小傑誤把直徑當半徑。",
      "target": "診斷直徑與半徑在弧長公式中的使用錯誤。",
      "choices": [
        "半徑是 7 cm，正確弧長為 7π cm",
        "直徑可直接當半徑，所以 14π cm 正確",
        "應改用面積公式，答案 49π cm",
        "弧長應寫成 7π cm²"
      ],
      "answerIndex": 0,
      "independentSolution": "先不看選項，直徑 14 cm 表示半徑 7 cm。180° 弧是半圓弧，弧長=πr=7π cm，因此第一個修正正確。",
      "explanation": "弧長公式使用半徑，不是直徑。半徑為 7 cm，半圓弧長為 7π cm。",
      "steps": [
        "由直徑 14 cm 求半徑 7 cm。",
        "180° 占整圓一半，弧長=(1/2)×2π×7=7π cm。"
      ],
      "optionAnalysis": [
        {
          "choice": "半徑是 7 cm，正確弧長為 7π cm",
          "truth": true,
          "reason": "直徑除以 2 得半徑 7，再取半圓弧得到 7π cm。"
        },
        {
          "choice": "直徑可直接當半徑，所以 14π cm 正確",
          "truth": false,
          "reason": "弧長公式中的 r 必須是半徑，不能直接代入直徑。"
        },
        {
          "choice": "應改用面積公式，答案 49π cm",
          "truth": false,
          "reason": "πr² 求的是面積，而且 49π 的單位應為 cm²。"
        },
        {
          "choice": "弧長應寫成 7π cm²",
          "truth": false,
          "reason": "數值雖為 7π，但弧長是長度，單位應是 cm。"
        }
      ],
      "misconceptionTarget": "把直徑直接代入半徑位置，或混淆弧長與面積單位。",
      "prerequisiteCheck": "需先能使用「圓心角與弧」；本題未使用後續技能。",
      "estimatedTimeSec": 60,
      "unitCheck": "正確答案是長度 7π cm；面積公式和 cm² 選項均被排除。",
      "roundingCheck": "保留 π 的精確值；已確認不會因四捨五入產生第二答案。",
      "ambiguityAudit": "180° 明確表示半圓弧；直徑 14 cm 唯一對應半徑 7 cm，不存在優弧或反角歧義。",
      "boundaryAudit": "只使用直徑半徑關係與弧長公式，符合國中會考範圍。",
      "difficultyReason": "basic：重點是診斷直徑、半徑及單位，而不是再做一次同型數字代入。",
      "literacyContextNecessity": null,
      "authoringIntent": "以學生錯誤診斷檢查公式符號和單位意義。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "8e9d84105334b4e7cc04993be9b61a78dda3affeedd6548a8e916323834ae16a"
    },
    {
      "questionId": "u19-s008-v004",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length-formula",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "半徑 10 cm 的圓中，弧長為 5π cm。其中心角為何？",
      "text": "半徑 10 cm 的圓中，弧長為 5π cm。其中心角為何？",
      "givenConditions": "r=10 cm；L=5π cm。",
      "target": "求θ。",
      "choices": [
        "45°",
        "90°",
        "100°",
        "180°"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「r=10 cm；L=5π cm。」重算：整圓周長20π，弧占1/4，所以中心角90°。",
      "explanation": "整圓周長20π，弧占1/4，所以中心角90°。 因此唯一正確選項是「90°」。",
      "steps": [
        "5π/20π=1/4。",
        "360×1/4=90°。"
      ],
      "optionAnalysis": [
        {
          "choice": "45°",
          "truth": false,
          "reason": "把比例再除2。"
        },
        {
          "choice": "90°",
          "truth": true,
          "reason": "依題目條件重新計算：整圓周長20π，弧占1/4，所以中心角90°。"
        },
        {
          "choice": "100°",
          "truth": false,
          "reason": "用長度數值直接當角。"
        },
        {
          "choice": "180°",
          "truth": false,
          "reason": "錯認為半圓。"
        }
      ],
      "misconceptionTarget": "反求角度時比例基準錯。",
      "prerequisiteCheck": "需先能使用「圓心角與弧」；本題未使用後續技能。",
      "estimatedTimeSec": 80,
      "unitCheck": "u19-s008-v004 已核對所求量「求θ。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由弧長反求中心角。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s008-v004。",
      "difficultyReason": "standard：由弧長反求中心角。 解題需完成「5π/20π=1/4。；360×1/4=90°。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由弧長反求中心角。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "6588b591bdda1d06b7b9fe8633d376f75eb3bf31c022a9e219219b82b7d71bf9"
    },
    {
      "questionId": "u19-s008-v005",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length-formula",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "中心角 120° 的弧長為 8π cm，求半徑。",
      "text": "中心角 120° 的弧長為 8π cm，求半徑。",
      "givenConditions": "θ=120°；L=8π cm。",
      "target": "求r。",
      "choices": [
        "12 cm",
        "6 cm",
        "8 cm",
        "24 cm"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「θ=120°；L=8π cm。」重算：8π=(120/360)×2πr=(2πr)/3，所以r=12。",
      "explanation": "8π=(120/360)×2πr=(2πr)/3，所以r=12。 因此唯一正確選項是「12 cm」。",
      "steps": [
        "比例1/3。",
        "8π=2πr/3。",
        "r=12。"
      ],
      "optionAnalysis": [
        {
          "choice": "12 cm",
          "truth": true,
          "reason": "依題目條件重新計算：8π=(120/360)×2πr=(2πr)/3，所以r=12。"
        },
        {
          "choice": "6 cm",
          "truth": false,
          "reason": "少乘2。"
        },
        {
          "choice": "8 cm",
          "truth": false,
          "reason": "把弧長係數當半徑。"
        },
        {
          "choice": "24 cm",
          "truth": false,
          "reason": "多乘2。"
        }
      ],
      "misconceptionTarget": "反求半徑時漏掉圓周的2。",
      "prerequisiteCheck": "需先能使用「圓心角與弧」；本題未使用後續技能。",
      "estimatedTimeSec": 90,
      "unitCheck": "u19-s008-v005 已核對所求量「求r。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由弧長反求半徑。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s008-v005。",
      "difficultyReason": "standard：由弧長反求半徑。 解題需完成「比例1/3。；8π=2πr/3。；r=12。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由弧長反求半徑。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "9163009c5082e7bc9f38bbc13f18fa9eeaacecf6eefaa39cf8e491ef4240df77"
    },
    {
      "questionId": "u19-s008-v006",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length-formula",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "半徑 5 m、中心角 72°，取 π=3.14，弧長約為何？",
      "text": "半徑 5 m、中心角 72°，取 π=3.14，弧長約為何？",
      "givenConditions": "r=5 m；θ=72°；π=3.14。",
      "target": "求近似L。",
      "choices": [
        "3.14 m",
        "6.28 m",
        "12.56 m",
        "31.4 m"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「r=5 m；θ=72°；π=3.14。」重算：72/360=1/5，整圓周長31.4 m，取1/5得6.28 m。",
      "explanation": "72/360=1/5，整圓周長31.4 m，取1/5得6.28 m。 因此唯一正確選項是「6.28 m」。",
      "steps": [
        "求比例1/5。",
        "2×3.14×5=31.4。",
        "31.4÷5=6.28。"
      ],
      "optionAnalysis": [
        {
          "choice": "3.14 m",
          "truth": false,
          "reason": "多除2。"
        },
        {
          "choice": "6.28 m",
          "truth": true,
          "reason": "依題目條件重新計算：72/360=1/5，整圓周長31.4 m，取1/5得6.28 m。"
        },
        {
          "choice": "12.56 m",
          "truth": false,
          "reason": "取2/5。"
        },
        {
          "choice": "31.4 m",
          "truth": false,
          "reason": "未乘比例。"
        }
      ],
      "misconceptionTarget": "近似計算比例錯。",
      "prerequisiteCheck": "需先能使用「圓心角與弧」；本題未使用後續技能。",
      "estimatedTimeSec": 80,
      "unitCheck": "u19-s008-v006 已核對所求量「求近似L。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "題目明確指定近似常數或百分比，僅於最後一步取近似。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「依指定π求弧長近似值。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s008-v006。",
      "difficultyReason": "standard：依指定π求弧長近似值。 解題需完成「求比例1/5。；2×3.14×5=31.4。；31.4÷5=6.28。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "依指定π求弧長近似值。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "6a4c4ea1523d59d10e8e5cd436b9850171e6ba220d4c21338c9be67371980d91"
    },
    {
      "questionId": "u19-s008-v007",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length-formula",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "figure-supported",
      "figureId": "u19-s008-fig001",
      "drawingSpecId": "u19-s008-fig001",
      "prompt": "同一圓中，弧甲中心角為 3x°、長 6π；弧乙中心角為 (x+30)°、長 4π。求 x。",
      "text": "同一圓中，弧甲中心角為 3x°、長 6π；弧乙中心角為 (x+30)°、長 4π。求 x。",
      "givenConditions": "同一圓；兩弧長6π與4π。",
      "target": "求x。",
      "choices": [
        "15",
        "20",
        "30",
        "45"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「同一圓；兩弧長6π與4π。」重算：同圓弧長比等於中心角比：6π:4π=3x:(x+30)。3/2=3x/(x+30)，得3(x+30)=6x，x=30。",
      "explanation": "同圓弧長比等於中心角比：6π:4π=3x:(x+30)。3/2=3x/(x+30)，得3(x+30)=6x，x=30。 因此唯一正確選項是「30」。",
      "steps": [
        "列3/2=3x/(x+30)。",
        "交叉相乘3x+90=6x。",
        "x=30。"
      ],
      "optionAnalysis": [
        {
          "choice": "15",
          "truth": false,
          "reason": "回代角45°與45°卻弧長不同比。"
        },
        {
          "choice": "20",
          "truth": false,
          "reason": "回代60°與50°比不符3:2。"
        },
        {
          "choice": "30",
          "truth": true,
          "reason": "依題目條件重新計算：同圓弧長比等於中心角比：6π:4π=3x:(x+30)。3/2=3x/(x+30)，得3(x+30)=6x，x=30。"
        },
        {
          "choice": "45",
          "truth": false,
          "reason": "回代135°與75°比不符。"
        }
      ],
      "misconceptionTarget": "比例式交叉相乘錯。",
      "prerequisiteCheck": "需先能使用「圓心角與弧」；本題未使用後續技能。",
      "estimatedTimeSec": 125,
      "unitCheck": "u19-s008-v007 已核對所求量「求x。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「用同圓弧長比反求角參數。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s008-v007。",
      "difficultyReason": "advanced：用同圓弧長比反求角參數。 解題需完成「列3/2=3x/(x+30)。；交叉相乘3x+90=6x。；x=30。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "用同圓弧長比反求角參數。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "8a8649effcaa1c073bd388c400ce6e944ae7f59b6408e3369f8b2e5ed02ae80c"
    },
    {
      "questionId": "u19-s008-v008",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length-formula",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "某弧長為 10π cm，半徑為 15 cm。中心角為何？",
      "text": "某弧長為 10π cm，半徑為 15 cm。中心角為何？",
      "givenConditions": "L=10π cm；r=15 cm。",
      "target": "求θ。",
      "choices": [
        "60°",
        "180°",
        "240°",
        "120°"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「L=10π cm；r=15 cm。」重算：整圓周長30π，弧占1/3，中心角120°。",
      "explanation": "整圓周長30π，弧占1/3，中心角120°。 因此唯一正確選項是「120°」。",
      "steps": [
        "10π/30π=1/3。",
        "360×1/3=120。"
      ],
      "optionAnalysis": [
        {
          "choice": "60°",
          "truth": false,
          "reason": "錯取一半。"
        },
        {
          "choice": "180°",
          "truth": false,
          "reason": "錯認半圓。"
        },
        {
          "choice": "240°",
          "truth": false,
          "reason": "錯把比例乘720。"
        },
        {
          "choice": "120°",
          "truth": true,
          "reason": "依題目條件重新計算：整圓周長30π，弧占1/3，中心角120°。"
        }
      ],
      "misconceptionTarget": "反求比例後角度換算錯。",
      "prerequisiteCheck": "需先能使用「圓心角與弧」；本題未使用後續技能。",
      "estimatedTimeSec": 95,
      "unitCheck": "u19-s008-v008 已核對所求量「求θ。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由一般弧長反求角度。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s008-v008。",
      "difficultyReason": "advanced：由一般弧長反求角度。 解題需完成「10π/30π=1/3。；360×1/3=120。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由一般弧長反求角度。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "ab2b81f50d0559eae58bdf661bffc42f021439027faea13329f478d8bd1ad5bd"
    },
    {
      "questionId": "u19-s008-v009",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length-formula",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "半徑增加 20%，中心角不變時，弧長如何改變？",
      "text": "半徑增加 20%，中心角不變時，弧長如何改變？",
      "givenConditions": "θ固定；r增加20%。",
      "target": "判斷L變化率。",
      "choices": [
        "增加44%",
        "不變",
        "增加20%",
        "減少20%"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「θ固定；r增加20%。」重算：L=(θ/360)2πr，θ固定時L與r成正比，所以半徑乘1.2，弧長也乘1.2。",
      "explanation": "L=(θ/360)2πr，θ固定時L與r成正比，所以半徑乘1.2，弧長也乘1.2。 因此唯一正確選項是「增加20%」。",
      "steps": [
        "固定θ與π。",
        "辨認L正比於r。"
      ],
      "optionAnalysis": [
        {
          "choice": "增加44%",
          "truth": false,
          "reason": "44%是面積平方比例。"
        },
        {
          "choice": "不變",
          "truth": false,
          "reason": "忽略半徑影響。"
        },
        {
          "choice": "增加20%",
          "truth": true,
          "reason": "依題目條件重新計算：L=(θ/360)2πr，θ固定時L與r成正比，所以半徑乘1.2，弧長也乘1.2。"
        },
        {
          "choice": "減少20%",
          "truth": false,
          "reason": "方向相反。"
        }
      ],
      "misconceptionTarget": "把面積的平方比例套到弧長。",
      "prerequisiteCheck": "需先能使用「圓心角與弧」；本題未使用後續技能。",
      "estimatedTimeSec": 105,
      "unitCheck": "u19-s008-v009 已核對所求量「判斷L變化率。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "題目明確指定近似常數或百分比，僅於最後一步取近似。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「分析弧長對半徑的比例變化。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s008-v009。",
      "difficultyReason": "advanced：分析弧長對半徑的比例變化。 解題需完成「固定θ與π。；辨認L正比於r。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "分析弧長對半徑的比例變化。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "1b28b857b3868591d3d2790e96d31b709a833e27fba32280e11c59fc1abd6dfd"
    },
    {
      "questionId": "u19-s008-v010",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length-formula",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "機械手臂長 0.8 m，旋轉 135°，末端沿圓弧移動多長？",
      "text": "機械手臂長 0.8 m，旋轉 135°，末端沿圓弧移動多長？",
      "givenConditions": "臂長即半徑0.8 m；轉角135°。",
      "target": "求末端路徑。",
      "choices": [
        "0.3π m",
        "0.6π m",
        "1.2π m",
        "1.6π m"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「臂長即半徑0.8 m；轉角135°。」重算：L=(135/360)×2π×0.8=(3/8)×1.6π=0.6π m。",
      "explanation": "L=(135/360)×2π×0.8=(3/8)×1.6π=0.6π m。 因此唯一正確選項是「0.6π m」。",
      "steps": [
        "135/360=3/8。",
        "2πr=1.6π。",
        "相乘0.6π。"
      ],
      "optionAnalysis": [
        {
          "choice": "0.3π m",
          "truth": false,
          "reason": "比例少一半。"
        },
        {
          "choice": "0.6π m",
          "truth": true,
          "reason": "依題目條件重新計算：L=(135/360)×2π×0.8=(3/8)×1.6π=0.6π m。"
        },
        {
          "choice": "1.2π m",
          "truth": false,
          "reason": "多一倍。"
        },
        {
          "choice": "1.6π m",
          "truth": false,
          "reason": "整圓周長。"
        }
      ],
      "misconceptionTarget": "小數半徑與分率相乘錯。",
      "prerequisiteCheck": "需先能使用「圓心角與弧」；本題未使用後續技能。",
      "estimatedTimeSec": 95,
      "unitCheck": "u19-s008-v010 已核對所求量「求末端路徑。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「把旋轉臂末端路徑建模為弧長。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s008-v010。",
      "difficultyReason": "literacy：把旋轉臂末端路徑建模為弧長。 解題需完成「135/360=3/8。；2πr=1.6π。；相乘0.6π。」。",
      "literacyContextNecessity": "末端固定距離繞軸旋轉，路徑必為指定角度圓弧。",
      "authoringIntent": "把旋轉臂末端路徑建模為弧長。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "4901eae01baf923e1d03e4dfc905d14e99c9fad23f940a6d54035416f9b8db0a"
    },
    {
      "questionId": "u19-s008-v011",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length-formula",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "一扇半徑 90 cm 的旋轉門轉過 100°。門外端掃過的弧長為何？",
      "text": "一扇半徑 90 cm 的旋轉門轉過 100°。門外端掃過的弧長為何？",
      "givenConditions": "門寬90 cm；轉角100°。",
      "target": "求外端弧長。",
      "choices": [
        "25π cm",
        "90π cm",
        "100π cm",
        "50π cm"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「門寬90 cm；轉角100°。」重算：L=(100/360)×2π×90=(5/18)×180π=50π cm。",
      "explanation": "L=(100/360)×2π×90=(5/18)×180π=50π cm。 因此唯一正確選項是「50π cm」。",
      "steps": [
        "100/360=5/18。",
        "整圓周長180π。",
        "相乘得50π。"
      ],
      "optionAnalysis": [
        {
          "choice": "25π cm",
          "truth": false,
          "reason": "少一半。"
        },
        {
          "choice": "90π cm",
          "truth": false,
          "reason": "錯把半徑係數當答案。"
        },
        {
          "choice": "100π cm",
          "truth": false,
          "reason": "角度數直接配π。"
        },
        {
          "choice": "50π cm",
          "truth": true,
          "reason": "依題目條件重新計算：L=(100/360)×2π×90=(5/18)×180π=50π cm。"
        }
      ],
      "misconceptionTarget": "中心角分率化簡錯。",
      "prerequisiteCheck": "需先能使用「圓心角與弧」；本題未使用後續技能。",
      "estimatedTimeSec": 90,
      "unitCheck": "u19-s008-v011 已核對所求量「求外端弧長。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「計算旋轉門端點行程。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s008-v011。",
      "difficultyReason": "literacy：計算旋轉門端點行程。 解題需完成「100/360=5/18。；整圓周長180π。；相乘得50π。」。",
      "literacyContextNecessity": "門外端到轉軸距離固定，行程由轉角與半徑共同決定。",
      "authoringIntent": "計算旋轉門端點行程。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "d16f1c17acdf4de9a274260dc5f4ae79bc4ff55c9d6f2ac18de14ebacc3f287c"
    },
    {
      "questionId": "u19-s008-v012",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length-formula",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "圓形軌道半徑 25 m，一段弧長為 10π m。這段軌道占整圈的幾分之幾？",
      "text": "圓形軌道半徑 25 m，一段弧長為 10π m。這段軌道占整圈的幾分之幾？",
      "givenConditions": "r=25 m；弧長10π m。",
      "target": "求占比。",
      "choices": [
        "1/10",
        "2/5",
        "1/2",
        "1/5"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「r=25 m；弧長10π m。」重算：整圓周長50π m，10π÷50π=1/5。",
      "explanation": "整圓周長50π m，10π÷50π=1/5。 因此唯一正確選項是「1/5」。",
      "steps": [
        "求整圓周長50π。",
        "弧長除以周長得1/5。"
      ],
      "optionAnalysis": [
        {
          "choice": "1/10",
          "truth": false,
          "reason": "多除2。"
        },
        {
          "choice": "2/5",
          "truth": false,
          "reason": "比例倒置或倍增。"
        },
        {
          "choice": "1/2",
          "truth": false,
          "reason": "錯認半圈。"
        },
        {
          "choice": "1/5",
          "truth": true,
          "reason": "依題目條件重新計算：整圓周長50π m，10π÷50π=1/5。"
        }
      ],
      "misconceptionTarget": "用半徑直接除弧長。",
      "prerequisiteCheck": "需先能使用「圓心角與弧」；本題未使用後續技能。",
      "estimatedTimeSec": 85,
      "unitCheck": "u19-s008-v012 已核對所求量「求占比。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由軌道弧長求整圈占比。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s008-v012。",
      "difficultyReason": "literacy：由軌道弧長求整圈占比。 解題需完成「求整圓周長50π。；弧長除以周長得1/5。」。",
      "literacyContextNecessity": "占比用於安排軌道維修區段，必須比較弧長與完整周長。",
      "authoringIntent": "由軌道弧長求整圈占比。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "b7796f67ff44dd515424860e202a071360b960bd11ca575751c59d52fac16e34"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u19-s008-cr001",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length-formula",
      "difficulty": "advanced",
      "type": "constructed-response",
      "itemType": "constructed-response",
      "visualMode": "figure-supported",
      "figureId": "u19-s008-fig001",
      "drawingSpecId": "u19-s008-fig001",
      "prompt": "半徑 15 cm 的圓有一段弧長 10π cm。求中心角，並驗證弧長占整圓周長的比例。",
      "requiredWork": [
        "求整圓周長。",
        "求弧占比。",
        "轉成中心角。"
      ],
      "standardSolution": [
        "整圓周長=30π cm。",
        "弧占比=10π/30π=1/3。",
        "中心角=360°×1/3=120°。"
      ],
      "fullCreditSolution": [
        "整圓周長=30π cm。",
        "弧占比=10π/30π=1/3。",
        "中心角=360°×1/3=120°。"
      ],
      "alternativeSolutions": [
        "可直接列10π=(θ/360)×30π求θ。"
      ],
      "reasoningSteps": [
        "整圓周長=30π cm。",
        "弧占比=10π/30π=1/3。",
        "中心角=360°×1/3=120°。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "周長30π、比例1/3、角120°完整。"
        },
        {
          "score": 2,
          "criteria": "角正確但驗證不完整。"
        },
        {
          "score": 1,
          "criteria": "建立正確公式。"
        },
        {
          "score": 0,
          "criteria": "把弧長當面積。"
        }
      ],
      "partialCreditRules": [
        "公式或比例任一正確可得部分分。"
      ],
      "followThroughPolicy": "若周長算錯，後續依錯誤周長正確求比例可保留1分。",
      "unitNotationRules": "長度用cm，角用°。",
      "answerOnlyPolicy": "只寫120°給2分。",
      "commonErrors": [
        "半徑當直徑。",
        "比例倒置。"
      ],
      "independentReview": {
        "derivedResult": "中心角120°，弧占整周1/3。",
        "ambiguity": "所有量明確，唯一。",
        "decision": "pass",
        "reviewNote": "u19-s008-cr001 由題目條件另行推導得到「中心角120°，弧占整周1/3。」；評分規準逐步對應本題所需的定理、列式、運算與單位。",
        "reviewedAt": "2026-07-12"
      },
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "7ad52e4f0c557a5177dcb53264f9488bdad884de940d0875edbfcd30c9e0c8bf"
    },
    {
      "questionId": "u19-s008-cr002",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-angles",
      "skillId": "arc-length-formula",
      "difficulty": "advanced",
      "type": "constructed-response",
      "itemType": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "一段 150° 圓弧長為 5π cm。求圓的半徑。",
      "requiredWork": [
        "套用L=(θ/360)2πr。",
        "解r並檢查正值。"
      ],
      "standardSolution": [
        "5π=(150/360)2πr=(5/12)2πr=5πr/6。",
        "所以r=6 cm。"
      ],
      "fullCreditSolution": [
        "5π=(150/360)2πr=(5/12)2πr=5πr/6。",
        "所以r=6 cm。"
      ],
      "alternativeSolutions": [
        "也可先求整圓周長：5π÷(5/12)=12π，再由2πr=12π得r=6。"
      ],
      "reasoningSteps": [
        "5π=(150/360)2πr=(5/12)2πr=5πr/6。",
        "所以r=6 cm。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "公式與r=6 cm完整。"
        },
        {
          "score": 2,
          "criteria": "答案正確但化簡略。"
        },
        {
          "score": 1,
          "criteria": "建立正確比例式。"
        },
        {
          "score": 0,
          "criteria": "把150直接當半徑。"
        }
      ],
      "partialCreditRules": [
        "任何一種正確方法皆可滿分。"
      ],
      "followThroughPolicy": "若比例化簡錯但公式結構正確，給1分。",
      "unitNotationRules": "半徑用cm且取正值。",
      "answerOnlyPolicy": "只寫6 cm給2分。",
      "commonErrors": [
        "150/360約分錯。",
        "漏掉2π。"
      ],
      "independentReview": {
        "derivedResult": "r=6 cm。",
        "ambiguity": "正半徑唯一。",
        "decision": "pass",
        "reviewNote": "u19-s008-cr002 由題目條件另行推導得到「r=6 cm。」；評分規準逐步對應本題所需的定理、列式、運算與單位。",
        "reviewedAt": "2026-07-12"
      },
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "6c9ef9cfce61fcaca4ae33971cb49f5d17543de5c7ba6ab8e00fcf83198351dd"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u19-s008-v001",
      "contentSha256": "60033874a62d7b00083a68677ff2312de516ffe1a5d1ae1514a38cfbc9a59e84",
      "reviewVersion": "central-human-review-r1.1",
      "independentSolution": "不採用儲存判斷，重新計算：80/360=2/9，整圓周為2π×9=18π，因此弧長=(2/9)×18π=4π cm。小安的列式與結果皆正確。",
      "derivedAnswer": "列式與結果都正確",
      "storedAnswer": "列式與結果都正確",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算後只有「列式與結果都正確」符合。其餘三項分別因「中心角應和 360° 比較，不是和 180° 比較。；πr² 是面積公式，不能用來求弧長。；把 80/360 約分或乘法計算錯誤，正確是 4π。」而排除。",
        "undefinedSymbol": "u19-s008-v001 所用圓心、圓周、弧、角、直徑、半徑或 π 均已在 U19 先備講義中定義，沒有未說明符號。",
        "unitConflict": "題目求弧長，正確結果與相關選項皆使用 cm；含 cm² 的面積式被明確排除。",
        "roundingConflict": "答案保留 π 的精確值，不涉及近似。",
        "domainBoundary": "只使用國中會考範圍的弧長公式和基本分數運算。",
        "alternateReading": "題目問的是對既有列式和結果的判斷；四個選項分別對應比例、公式種類與運算結果，只有一項可成立。"
      },
      "difficultyReason": "basic：學生必須同時檢查角度比例、圓周公式和最後計算，而不是直接套入另一組數字。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "需先能使用「圓心角與弧」；本題未使用後續技能。",
      "languageCheck": "題幹「半徑 9 cm、中心角 80°。小安計算弧長時列出 (80/360)×2π×9=4π cm。下列判斷何者正確？」採臺灣繁體中文，條件、所求量與比較基準均完整。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s008-v001 中央人工重算：不採用儲存判斷，重新計算：80/360=2/9，整圓周為2π×9=18π，因此弧長=(2/9)×18π=4π cm。小安的列式與結果皆正確。 正確選項為「列式與結果都正確」，四項真值與每個干擾項錯因均已重新核對。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "roundingConflict": null
    },
    {
      "questionId": "u19-s008-v002",
      "contentSha256": "3cf75ef99cd17a828b9bbe443733095bd0e97c41abf4a5c06ce20f5ef23a0cb4",
      "reviewVersion": "central-human-review-r1.1",
      "independentSolution": "不採用儲存答案，直接以比例重算：弧長=(1/4)×24π=6π m。",
      "derivedAnswer": "6π m",
      "storedAnswer": "6π m",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算後只有「6π m」符合。其餘三項分別因「把四分之一又多除以 2。；這是整圓周的一半，不是四分之一。；這是完整圓周長，沒有取指定比例。」而排除。",
        "undefinedSymbol": "u19-s008-v002 所用圓心、圓周、弧、角、直徑、半徑或 π 均已在 U19 先備講義中定義，沒有未說明符號。",
        "unitConflict": "四個選項皆為長度 m，沒有使用面積單位。",
        "roundingConflict": "保留 π 的精確值，不需近似；已確認不會因四捨五入產生第二答案。",
        "domainBoundary": "只使用分數比例與圓周長，屬國中會考範圍。",
        "alternateReading": "題目直接給出弧占整圓周的 1/4，且整圓周長唯一為 24π m，不涉及優弧或劣弧的另一選擇。"
      },
      "difficultyReason": "basic：從弧與整圓的比例直接取得弧長，資訊形式不同於半徑加中心角的代值題。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "需先能使用「圓心角與弧」；本題未使用後續技能。",
      "languageCheck": "題幹「某一段弧占整個圓周長的 1/4。若該圓周長為 24π m，這段弧長為何？」採臺灣繁體中文，條件、所求量與比較基準均完整。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s008-v002 中央人工重算：不採用儲存答案，直接以比例重算：弧長=(1/4)×24π=6π m。 正確選項為「6π m」，四項真值與每個干擾項錯因均已重新核對。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "roundingConflict": null
    },
    {
      "questionId": "u19-s008-v003",
      "contentSha256": "8e9d84105334b4e7cc04993be9b61a78dda3affeedd6548a8e916323834ae16a",
      "reviewVersion": "central-human-review-r1.1",
      "independentSolution": "先不看選項，直徑 14 cm 表示半徑 7 cm。180° 弧是半圓弧，弧長=πr=7π cm，因此第一個修正正確。",
      "derivedAnswer": "半徑是 7 cm，正確弧長為 7π cm",
      "storedAnswer": "半徑是 7 cm，正確弧長為 7π cm",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算後只有「半徑是 7 cm，正確弧長為 7π cm」符合。其餘三項分別因「弧長公式中的 r 必須是半徑，不能直接代入直徑。；πr² 求的是面積，而且 49π 的單位應為 cm²。；數值雖為 7π，但弧長是長度，單位應是 cm。」而排除。",
        "undefinedSymbol": "u19-s008-v003 所用圓心、圓周、弧、角、直徑、半徑或 π 均已在 U19 先備講義中定義，沒有未說明符號。",
        "unitConflict": "正確答案是長度 7π cm；面積公式和 cm² 選項均被排除。",
        "roundingConflict": "保留 π 的精確值；已確認不會因四捨五入產生第二答案。",
        "domainBoundary": "只使用直徑半徑關係與弧長公式，符合國中會考範圍。",
        "alternateReading": "180° 明確表示半圓弧；直徑 14 cm 唯一對應半徑 7 cm，不存在優弧或反角歧義。"
      },
      "difficultyReason": "basic：重點是診斷直徑、半徑及單位，而不是再做一次同型數字代入。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "需先能使用「圓心角與弧」；本題未使用後續技能。",
      "languageCheck": "題幹「一個圓的直徑為 14 cm，取 180° 的弧。小傑算出弧長 14π cm。下列哪個修正正確？」採臺灣繁體中文，條件、所求量與比較基準均完整。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s008-v003 中央人工重算：先不看選項，直徑 14 cm 表示半徑 7 cm。180° 弧是半圓弧，弧長=πr=7π cm，因此第一個修正正確。 正確選項為「半徑是 7 cm，正確弧長為 7π cm」，四項真值與每個干擾項錯因均已重新核對。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "roundingConflict": null
    },
    {
      "questionId": "u19-s008-v004",
      "contentSha256": "6588b591bdda1d06b7b9fe8633d376f75eb3bf31c022a9e219219b82b7d71bf9",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=10 cm；L=5π cm。」重算：整圓周長20π，弧占1/4，所以中心角90°。",
      "derivedAnswer": "90°",
      "storedAnswer": "90°",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「90°」符合；三個干擾項分別因「把比例再除2。；用長度數值直接當角。；錯認為半圓。」而排除。",
        "undefinedSymbol": "u19-s008-v004 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弧長公式」講義定義。",
        "unitConflict": "題目所求為「求θ。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由弧長反求中心角。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=10 cm；L=5π cm。」重讀，所求「求θ。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是由弧長反求中心角。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴central-angle-arc，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「半徑 10 cm 的圓中，弧長為 5π cm。其中心角為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s008-v004 人工重算：整圓周長20π，弧占1/4，所以中心角90°。 正確選項為「90°」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s008-v005",
      "contentSha256": "9163009c5082e7bc9f38bbc13f18fa9eeaacecf6eefaa39cf8e491ef4240df77",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「θ=120°；L=8π cm。」重算：8π=(120/360)×2πr=(2πr)/3，所以r=12。",
      "derivedAnswer": "12 cm",
      "storedAnswer": "12 cm",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「12 cm」符合；三個干擾項分別因「少乘2。；把弧長係數當半徑。；多乘2。」而排除。",
        "undefinedSymbol": "u19-s008-v005 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弧長公式」講義定義。",
        "unitConflict": "題目所求為「求r。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由弧長反求半徑。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「θ=120°；L=8π cm。」重讀，所求「求r。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是由弧長反求半徑。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴central-angle-arc，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「中心角 120° 的弧長為 8π cm，求半徑。」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s008-v005 人工重算：8π=(120/360)×2πr=(2πr)/3，所以r=12。 正確選項為「12 cm」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s008-v006",
      "contentSha256": "6a4c4ea1523d59d10e8e5cd436b9850171e6ba220d4c21338c9be67371980d91",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=5 m；θ=72°；π=3.14。」重算：72/360=1/5，整圓周長31.4 m，取1/5得6.28 m。",
      "derivedAnswer": "6.28 m",
      "storedAnswer": "6.28 m",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「6.28 m」符合；三個干擾項分別因「多除2。；取2/5。；未乘比例。」而排除。",
        "undefinedSymbol": "u19-s008-v006 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弧長公式」講義定義。",
        "unitConflict": "題目所求為「求近似L。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "近似規則由題幹指定，未在中途重複捨入。",
        "domainBoundary": "本題僅測「依指定π求弧長近似值。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=5 m；θ=72°；π=3.14。」重讀，所求「求近似L。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是依指定π求弧長近似值。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴central-angle-arc，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「半徑 5 m、中心角 72°，取 π=3.14，弧長約為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s008-v006 人工重算：72/360=1/5，整圓周長31.4 m，取1/5得6.28 m。 正確選項為「6.28 m」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s008-v007",
      "contentSha256": "8a8649effcaa1c073bd388c400ce6e944ae7f59b6408e3369f8b2e5ed02ae80c",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「同一圓；兩弧長6π與4π。」重算：同圓弧長比等於中心角比：6π:4π=3x:(x+30)。3/2=3x/(x+30)，得3(x+30)=6x，x=30。",
      "derivedAnswer": "30",
      "storedAnswer": "30",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「30」符合；三個干擾項分別因「回代角45°與45°卻弧長不同比。；回代60°與50°比不符3:2。；回代135°與75°比不符。」而排除。",
        "undefinedSymbol": "u19-s008-v007 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弧長公式」講義定義。",
        "unitConflict": "題目所求為「求x。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「用同圓弧長比反求角參數。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「同一圓；兩弧長6π與4π。」重讀，所求「求x。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是用同圓弧長比反求角參數。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴central-angle-arc，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「同一圓中，弧甲中心角為 3x°、長 6π；弧乙中心角為 (x+30)°、長 4π。求 x。」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s008-v007 人工重算：同圓弧長比等於中心角比：6π:4π=3x:(x+30)。3/2=3x/(x+30)，得3(x+30)=6x，x=30。 正確選項為「30」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s008-v008",
      "contentSha256": "ab2b81f50d0559eae58bdf661bffc42f021439027faea13329f478d8bd1ad5bd",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「L=10π cm；r=15 cm。」重算：整圓周長30π，弧占1/3，中心角120°。",
      "derivedAnswer": "120°",
      "storedAnswer": "120°",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「120°」符合；三個干擾項分別因「錯取一半。；錯認半圓。；錯把比例乘720。」而排除。",
        "undefinedSymbol": "u19-s008-v008 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弧長公式」講義定義。",
        "unitConflict": "題目所求為「求θ。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由一般弧長反求角度。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「L=10π cm；r=15 cm。」重讀，所求「求θ。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是由一般弧長反求角度。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴central-angle-arc，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「某弧長為 10π cm，半徑為 15 cm。中心角為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s008-v008 人工重算：整圓周長30π，弧占1/3，中心角120°。 正確選項為「120°」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s008-v009",
      "contentSha256": "1b28b857b3868591d3d2790e96d31b709a833e27fba32280e11c59fc1abd6dfd",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「θ固定；r增加20%。」重算：L=(θ/360)2πr，θ固定時L與r成正比，所以半徑乘1.2，弧長也乘1.2。",
      "derivedAnswer": "增加20%",
      "storedAnswer": "增加20%",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「增加20%」符合；三個干擾項分別因「44%是面積平方比例。；忽略半徑影響。；方向相反。」而排除。",
        "undefinedSymbol": "u19-s008-v009 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弧長公式」講義定義。",
        "unitConflict": "題目所求為「判斷L變化率。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "近似規則由題幹指定，未在中途重複捨入。",
        "domainBoundary": "本題僅測「分析弧長對半徑的比例變化。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「θ固定；r增加20%。」重讀，所求「判斷L變化率。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是分析弧長對半徑的比例變化。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴central-angle-arc，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「半徑增加 20%，中心角不變時，弧長如何改變？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s008-v009 人工重算：L=(θ/360)2πr，θ固定時L與r成正比，所以半徑乘1.2，弧長也乘1.2。 正確選項為「增加20%」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s008-v010",
      "contentSha256": "4901eae01baf923e1d03e4dfc905d14e99c9fad23f940a6d54035416f9b8db0a",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「臂長即半徑0.8 m；轉角135°。」重算：L=(135/360)×2π×0.8=(3/8)×1.6π=0.6π m。",
      "derivedAnswer": "0.6π m",
      "storedAnswer": "0.6π m",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「0.6π m」符合；三個干擾項分別因「比例少一半。；多一倍。；整圓周長。」而排除。",
        "undefinedSymbol": "u19-s008-v010 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弧長公式」講義定義。",
        "unitConflict": "題目所求為「求末端路徑。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「把旋轉臂末端路徑建模為弧長。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「臂長即半徑0.8 m；轉角135°。」重讀，所求「求末端路徑。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是把旋轉臂末端路徑建模為弧長。，而非只依題序標示。",
      "literacyContextNecessity": "末端固定距離繞軸旋轉，路徑必為指定角度圓弧。",
      "prerequisiteCheck": "只依賴central-angle-arc，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「機械手臂長 0.8 m，旋轉 135°，末端沿圓弧移動多長？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s008-v010 人工重算：L=(135/360)×2π×0.8=(3/8)×1.6π=0.6π m。 正確選項為「0.6π m」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s008-v011",
      "contentSha256": "d16f1c17acdf4de9a274260dc5f4ae79bc4ff55c9d6f2ac18de14ebacc3f287c",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「門寬90 cm；轉角100°。」重算：L=(100/360)×2π×90=(5/18)×180π=50π cm。",
      "derivedAnswer": "50π cm",
      "storedAnswer": "50π cm",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「50π cm」符合；三個干擾項分別因「少一半。；錯把半徑係數當答案。；角度數直接配π。」而排除。",
        "undefinedSymbol": "u19-s008-v011 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弧長公式」講義定義。",
        "unitConflict": "題目所求為「求外端弧長。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「計算旋轉門端點行程。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「門寬90 cm；轉角100°。」重讀，所求「求外端弧長。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是計算旋轉門端點行程。，而非只依題序標示。",
      "literacyContextNecessity": "門外端到轉軸距離固定，行程由轉角與半徑共同決定。",
      "prerequisiteCheck": "只依賴central-angle-arc，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「一扇半徑 90 cm 的旋轉門轉過 100°。門外端掃過的弧長為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s008-v011 人工重算：L=(100/360)×2π×90=(5/18)×180π=50π cm。 正確選項為「50π cm」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s008-v012",
      "contentSha256": "b7796f67ff44dd515424860e202a071360b960bd11ca575751c59d52fac16e34",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=25 m；弧長10π m。」重算：整圓周長50π m，10π÷50π=1/5。",
      "derivedAnswer": "1/5",
      "storedAnswer": "1/5",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「1/5」符合；三個干擾項分別因「多除2。；比例倒置或倍增。；錯認半圈。」而排除。",
        "undefinedSymbol": "u19-s008-v012 使用的圓心、弧、角、半徑、直徑、切線或π均已在「弧長公式」講義定義。",
        "unitConflict": "題目所求為「求占比。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由軌道弧長求整圈占比。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=25 m；弧長10π m。」重讀，所求「求占比。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是由軌道弧長求整圈占比。，而非只依題序標示。",
      "literacyContextNecessity": "占比用於安排軌道維修區段，必須比較弧長與完整周長。",
      "prerequisiteCheck": "只依賴central-angle-arc，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓形軌道半徑 25 m，一段弧長為 10π m。這段軌道占整圈的幾分之幾？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s008-v012 人工重算：整圓周長50π m，10π÷50π=1/5。 正確選項為「1/5」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u19-s008-fig001",
      "unitId": "u19",
      "topicId": "u19-angles",
      "skillId": "arc-length-formula",
      "svgPath": "figures/u19/u19-s008-fig001.svg",
      "canvas": {
        "width": 360,
        "height": 240,
        "viewBox": "0 0 360 240"
      },
      "drawingSpec": {
        "purpose": "支援「弧長公式」中需要辨認點、線、弧、角或邊界的題目。",
        "coordinateSystem": "SVG x向右、y向下；所有座標以360×240畫布為準。",
        "geometry": "圓 O 顯示半徑 r、中心角 θ 與對應粗弧 L，三個公式量均清楚標示。",
        "visibleLines": "所有作答所需實線均以2px以上深色描邊；強調弧以5px描邊。",
        "hiddenLines": "只有內部共邊或量測輔助線使用虛線；未指定者不得自行添加。",
        "labels": "標籤位置已在SVG以固定座標給定，避免遮住交點、角弧或刻痕。",
        "symbols": "直角符號、等長刻痕、箭頭及角度符號僅在數學條件需要時出現。",
        "scalePolicy": "示意圖不保證按實際長度或角度比例繪製。",
        "visualInferenceWarning": "不得以目測長短、角度或對稱性取代題目條件與定理。",
        "mobileReadability": "360×240檢視下文字至少16px，關鍵線至少2px，無微小數值標籤。",
        "answerLeakage": "圖中不標示任何題目要求計算的最終數值或正確選項。"
      },
      "altText": "圓 O 顯示半徑 r、中心角 θ 與對應粗弧 L，三個公式量均清楚標示。 圖形僅協助辨認結構，不可依比例目測答案。",
      "svgTitle": "弧長公式量測圖",
      "svgDescription": "圓 O 顯示半徑 r、中心角 θ 與對應粗弧 L，三個公式量均清楚標示。",
      "svgAssertions": [
        "role=\"img\"",
        "<title",
        "<desc",
        "viewBox=\"0 0 360 240\"",
        ">r</text>",
        ">θ</text>",
        ">L</text>"
      ],
      "figureReview": {
        "decision": "pass",
        "manualRenderInspected": true,
        "mobileReadable": true,
        "answerLeakageFound": false,
        "reviewNote": "已逐項檢查 u19-s008-fig001 的點位、線段、弧線、標籤與輔助符號；此圖專門呈現「弧長公式」的結構，未包含可直接推得題庫答案的數值。",
        "reviewVersion": "human-figure-review-r1.0",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "bb21d7c54435372edc2e70bcd7f73ae720b33e1a9532f965610984ed96ac091a"
    }
  ]
};
export default u19_s008;
