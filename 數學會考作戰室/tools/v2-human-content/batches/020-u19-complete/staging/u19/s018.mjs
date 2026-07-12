export const u19_s018 = {
  "lecture": {
    "lectureId": "u19-s018-lecture-r1",
    "unitId": "u19",
    "numericUnitId": 19,
    "topicId": "u19-literacy",
    "skillId": "circle-literacy",
    "title": "圓素養題",
    "unitTitle": "圓",
    "audience": "臺灣國中零基礎至國中教育會考滿分",
    "reviewStatus": "independently-reviewed",
    "skillIdentity": {
      "slot": "s018",
      "lockedSkillId": "circle-literacy",
      "lockedOrder": 18,
      "scope": "把輪子、跑道、灑水器與圓形設計轉成圓的模型。"
    },
    "learningOutcomes": [
      "能把生活情境轉成半徑、圓周長、弧長或面積。",
      "能判斷應計算距離、面積或角度。",
      "能處理圈數、比例尺與近似值。"
    ],
    "prerequisites": [
      {
        "skillId": "two-tangent-segments",
        "requiredLevel": "能使用「切線段相等」的核心定義與基本運算，並辨認其適用條件。"
      }
    ],
    "prerequisiteBridge": "先由前一技能「切線段相等」的結論，連接到本技能「圓素養題」所需的新判斷。",
    "glossary": [
      {
        "term": "滾動距離",
        "definition": "輪子無滑動時，圈數乘輪周長。"
      },
      {
        "term": "覆蓋面積",
        "definition": "灑水器或旋轉臂掃過的區域面積。"
      },
      {
        "term": "安全間距",
        "definition": "由半徑、直徑或切線條件決定的最小距離。"
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
      "圓素養題的第一步是決定模型：輪子滾動通常用圓周長，旋轉掃過區域通常用扇形面積，跑道彎道通常用弧長。",
      "情境中的「直徑40公分」與「半徑40公分」會造成兩倍長度、四倍面積差異，必須先整理單位。",
      "近似計算應在最後一步進行，並依題目指定π或四捨五入位數。"
    ],
    "formalDefinitions": [
      {
        "name": "滾動距離",
        "statement": "輪子無滑動時，圈數乘輪周長。"
      },
      {
        "name": "覆蓋面積",
        "statement": "灑水器或旋轉臂掃過的區域面積。"
      },
      {
        "name": "安全間距",
        "statement": "由半徑、直徑或切線條件決定的最小距離。"
      }
    ],
    "formulas": [
      {
        "formula": "滾動距離=圈數×2πr",
        "conditions": [
          "輪子無打滑"
        ],
        "meaning": "輪周長模型"
      },
      {
        "formula": "掃過面積=(θ/360°)πr²",
        "conditions": [
          "旋轉半徑固定"
        ],
        "meaning": "扇形模型"
      }
    ],
    "nonApplicableCases": [
      "輪子若打滑，圈數乘周長不等於實際距離。",
      "只求材料邊框用周長，不用面積。",
      "不同單位未換算不能直接相加。"
    ],
    "method": [
      {
        "step": 1,
        "instruction": "圈出情境中的半徑、直徑、角度與圈數。",
        "check": "完成此步後，確認仍在「圓素養題」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 2,
        "instruction": "判斷所求是長度、面積或角度。",
        "check": "完成此步後，確認仍在「圓素養題」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 3,
        "instruction": "選擇圓周、弧長、扇形或切線模型。",
        "check": "完成此步後，確認仍在「圓素養題」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 4,
        "instruction": "統一單位後計算。",
        "check": "完成此步後，確認仍在「圓素養題」的CAP範圍且沒有只憑圖形目測。"
      },
      {
        "step": 5,
        "instruction": "最後取近似並用情境語句回答。",
        "check": "完成此步後，確認仍在「圓素養題」的CAP範圍且沒有只憑圖形目測。"
      }
    ],
    "workedExamples": [
      {
        "exampleId": "s018-L1",
        "prompt": "直徑70 cm輪子轉10圈。",
        "solutionSteps": [
          "每圈70π cm。",
          "總距離700π cm。"
        ],
        "answer": "700π cm。",
        "level": "basic"
      },
      {
        "exampleId": "s018-L2",
        "prompt": "半徑6 m灑水器轉120°。",
        "solutionSteps": [
          "面積=1/3×36π。"
        ],
        "answer": "12π m²。",
        "level": "standard"
      },
      {
        "exampleId": "s018-L3",
        "prompt": "半徑20 m跑道半圓彎道。",
        "solutionSteps": [
          "弧長=20π m。"
        ],
        "answer": "20π m。",
        "level": "advanced"
      },
      {
        "exampleId": "s018-L4",
        "prompt": "圓形桌直徑1.2 m，桌布半徑需多出0.1 m。",
        "solutionSteps": [
          "桌半徑0.6 m。",
          "桌布半徑0.7 m。"
        ],
        "answer": "0.7 m。",
        "level": "connection"
      }
    ],
    "difficultyConnections": {
      "basic": "辨認「圓素養題」的定義、符號與單一步驟關係。",
      "standard": "把「圓素養題」與前置技能、比例或一次代數連接。",
      "advanced": "在多段弧、複合邊界、反求或條件篩選中使用「圓素養題」。",
      "literacy": "把真實尺寸、旋轉、施工或觀測情境轉成「圓素養題」的數學模型。"
    },
    "commonMistakes": [
      {
        "mistake": "看到圓就一律算面積",
        "why": "未辨認所求量",
        "correction": "距離用周長，覆蓋用面積"
      },
      {
        "mistake": "公分與公尺直接混算",
        "why": "單位不一致",
        "correction": "先統一單位"
      },
      {
        "mistake": "直徑當半徑",
        "why": "讀題疏忽",
        "correction": "明確寫r=d/2"
      },
      {
        "mistake": "中途反覆取3.14",
        "why": "累積誤差",
        "correction": "最後一步才近似"
      }
    ],
    "selfCheck": [
      "我是否先確認「圓素養題」的適用條件？",
      "我是否分清半徑、直徑、弦、弧與角的角色？",
      "我是否寫出必要單位，並在最後才取近似值？",
      "我是否用定理或公式驗證，而不是依圖形外觀猜測？"
    ],
    "summary": [
      "先把生活描述轉成圓的量。",
      "依所求選周長、弧長、面積或切線模型。",
      "統一單位並在最後取近似值。"
    ],
    "connections": {
      "previous": "承接「切線段相等」。",
      "next": "完成U19所有圓性質後進入中央整合與跨單元應用。"
    },
    "figureReferences": [
      {
        "figureId": "u19-s018-fig001",
        "purpose": "左側輪子以箭頭表示滾動一圈，右側灑水器以扇形表示旋轉覆蓋，對比長度與面積模型。",
        "altText": "左側輪子以箭頭表示滾動一圈，右側灑水器以扇形表示旋轉覆蓋，對比長度與面積模型。，不可按比例目測。"
      }
    ],
    "practiceLinks": {
      "mcQuestionIds": [
        "u19-s018-v001",
        "u19-s018-v002",
        "u19-s018-v003",
        "u19-s018-v004",
        "u19-s018-v005",
        "u19-s018-v006",
        "u19-s018-v007",
        "u19-s018-v008",
        "u19-s018-v009",
        "u19-s018-v010",
        "u19-s018-v011",
        "u19-s018-v012"
      ],
      "constructedResponseIds": [
        "u19-s018-cr001",
        "u19-s018-cr002"
      ]
    },
    "lectureReview": {
      "mathematicalCorrectness": "pass",
      "zeroFoundationReadability": "pass",
      "scopeCheck": "junior-high CAP scope",
      "examplesNotCopiedFromBank": true,
      "symbolDefinitionsComplete": true,
      "reviewNote": "逐段回讀「圓素養題」講義，確認所有符號先定義、公式均附條件，並以四個不同目的例題檢查定義辨認、標準運算、進階邊界與實際連結；特別核對：把輪子、跑道、灑水器與圓形設計轉成圓的模型。",
      "reviewVersion": "human-lecture-review-r1.0",
      "reviewedAt": "2026-07-12"
    },
    "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "contentSha256": "9292edeb6f5c52fd88821858fccd3892d99879b7ff04ceff01795f039a871106"
  },
  "questions": [
    {
      "questionId": "u19-s018-v001",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-literacy",
      "skillId": "circle-literacy",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "figure-supported",
      "figureId": "u19-s018-fig001",
      "drawingSpecId": "u19-s018-fig001",
      "prompt": "直徑 70 cm 的車輪無滑動轉 10 圈，前進距離為何？",
      "text": "直徑 70 cm 的車輪無滑動轉 10 圈，前進距離為何？",
      "givenConditions": "d=70 cm；10圈；無滑動。",
      "target": "求前進距離。",
      "choices": [
        "70π cm",
        "350π cm",
        "700π cm",
        "1400π cm"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「d=70 cm；10圈；無滑動。」重算：每圈周長πd=70π cm，10圈為700π cm。",
      "explanation": "每圈周長πd=70π cm，10圈為700π cm。 因此唯一正確選項是「700π cm」。",
      "steps": [
        "求每圈70π。",
        "乘10。"
      ],
      "optionAnalysis": [
        {
          "choice": "70π cm",
          "truth": false,
          "reason": "只算一圈。"
        },
        {
          "choice": "350π cm",
          "truth": false,
          "reason": "把半圈混入。"
        },
        {
          "choice": "700π cm",
          "truth": true,
          "reason": "依題目條件重新計算：每圈周長πd=70π cm，10圈為700π cm。"
        },
        {
          "choice": "1400π cm",
          "truth": false,
          "reason": "把半徑當70。"
        }
      ],
      "misconceptionTarget": "圈數或直徑公式錯。",
      "prerequisiteCheck": "需先能使用「切線段相等」；本題未使用後續技能。",
      "estimatedTimeSec": 60,
      "unitCheck": "u19-s018-v001 已核對所求量「求前進距離。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由車輪圈數求距離。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s018-v001。",
      "difficultyReason": "basic：由車輪圈數求距離。 解題需完成「求每圈70π。；乘10。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由車輪圈數求距離。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "8a86468a2822f5bedf81a49598669b768e4a74df487f0b70336c8017667dd3ee"
    },
    {
      "questionId": "u19-s018-v002",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-literacy",
      "skillId": "circle-literacy",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "一座半徑 6 m 的旋轉灑水器原可灑滿整圓，但牆面遮住連續 60° 的方向，其餘方向皆可灑到。理論可覆蓋面積為何？",
      "text": "一座半徑 6 m 的旋轉灑水器原可灑滿整圓，但牆面遮住連續 60° 的方向，其餘方向皆可灑到。理論可覆蓋面積為何？",
      "givenConditions": "灑水半徑 6 m；被遮住 60°；其餘 300° 無障礙。",
      "target": "由被遮住的角度求實際可覆蓋的扇形面積。",
      "choices": [
        "6π m²",
        "12π m²",
        "36π m²",
        "30π m²"
      ],
      "answerIndex": 3,
      "independentSolution": "不看儲存答案，先求整圓面積 π×6²=36π m²。可灑角度是 360°−60°=300°，占 5/6，所以覆蓋面積=36π×5/6=30π m²。",
      "explanation": "牆面遮住 60°，不是只灑 60°；剩餘 300° 占整圓 5/6，因此可覆蓋 30π m²。",
      "steps": [
        "求可灑角度 360−60=300°。",
        "求整圓面積 36π。",
        "取 300/360=5/6，得到 30π m²。"
      ],
      "optionAnalysis": [
        {
          "choice": "6π m²",
          "truth": false,
          "reason": "把被遮住的 60° 面積誤當成可覆蓋面積。"
        },
        {
          "choice": "12π m²",
          "truth": false,
          "reason": "誤沿用 120° 扇形的 1/3 比例，題目實際可灑 300°。"
        },
        {
          "choice": "36π m²",
          "truth": false,
          "reason": "這是未受遮擋時的整圓面積，沒有扣除牆面遮住區。"
        },
        {
          "choice": "30π m²",
          "truth": true,
          "reason": "36π×(300/360)=36π×5/6=30π m²。"
        }
      ],
      "misconceptionTarget": "把遮住角度當作可用角度，或忘記先取 360° 的補角。",
      "prerequisiteCheck": "需先能使用「切線段相等」；本題未使用後續技能。",
      "estimatedTimeSec": 60,
      "unitCheck": "四個選項皆為面積且使用 m²；結果 30π 小於整圓 36π，符合情境。",
      "roundingCheck": "保留 π 的精確值，不涉及四捨五入。",
      "ambiguityAudit": "題幹明定遮住的是連續 60°，其餘方向全可灑到，因此可用角度唯一為 300°，不涉及重疊區。",
      "boundaryAudit": "只使用圓面積、扇形比例和角度補量，符合國中會考素養範圍。",
      "difficultyReason": "basic：先辨認『遮住』表示取補角，再按扇形比例計算；避免與 U19-s010-v010 完全重複。",
      "literacyContextNecessity": null,
      "authoringIntent": "讓情境中的障礙條件改變可用角度，測試學生是否正確建立圓形覆蓋模型。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "6c89ebfd3ee25b45ed2b75b74651e4a1c020a9b5e3bafcaae0c57d1144995ac7"
    },
    {
      "questionId": "u19-s018-v003",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-literacy",
      "skillId": "circle-literacy",
      "difficulty": "basic",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "一座圓形花圃的直徑是 40 m。管理員沿花圃外緣巡查全周的 3/4，實際走了多長？",
      "text": "一座圓形花圃的直徑是 40 m。管理員沿花圃外緣巡查全周的 3/4，實際走了多長？",
      "givenConditions": "圓形花圃直徑 40 m；沿圓周走 3/4 圈。",
      "target": "由直徑求圓周，再取指定圈數比例。",
      "choices": [
        "30π m",
        "40π m",
        "20π m",
        "120π m"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直徑 40 m 的圓周長是 πd=40π m；走 3/4 圈，所以路程=40π×3/4=30π m。",
      "explanation": "先用直徑求完整圓周 40π m，再取其中 3/4，得到 30π m。",
      "steps": [
        "計算完整圓周 π×40=40π m。",
        "乘以 3/4，得到 30π m。"
      ],
      "optionAnalysis": [
        {
          "choice": "30π m",
          "truth": true,
          "reason": "40π×3/4=30π m，正好是全周的四分之三。"
        },
        {
          "choice": "40π m",
          "truth": false,
          "reason": "這是完整走一圈的距離，沒有乘 3/4。"
        },
        {
          "choice": "20π m",
          "truth": false,
          "reason": "誤把 3/4 圈當成半圈，或把直徑先除以 2 後直接乘 π。"
        },
        {
          "choice": "120π m",
          "truth": false,
          "reason": "把 3/4 誤算成乘 3，沒有除以 4。"
        }
      ],
      "misconceptionTarget": "忽略圈數比例，或把直徑與半徑公式混淆。",
      "prerequisiteCheck": "需先能使用「切線段相等」；本題未使用後續技能。",
      "estimatedTimeSec": 55,
      "unitCheck": "所有選項皆為長度 m；30π 小於完整圓周 40π，符合只走 3/4 圈。",
      "roundingCheck": "答案保留 π，不需近似；已確認不會因四捨五入產生第二答案。",
      "ambiguityAudit": "題幹明確說沿外緣走全周的 3/4，不包含穿越花圃的直線捷徑，因此路徑唯一。",
      "boundaryAudit": "只使用圓周長與分數比例，符合國中會考範圍。",
      "difficultyReason": "basic：以直徑求圓周後取 3/4 圈，和原本重複的半圓彎道題具有不同資訊入口。",
      "literacyContextNecessity": null,
      "authoringIntent": "以巡查圈數模型整合直徑與圓周比例，取代與弧長 skill 完全相同的半圓跑道題。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "5ee79807dc832f479c755480d80e03876f1b323b95993b359878ae107c0271cc"
    },
    {
      "questionId": "u19-s018-v004",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-literacy",
      "skillId": "circle-literacy",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "圓形桌面直徑 1.2 m，桌布邊緣要比桌面半徑多出 0.1 m。桌布半徑為何？",
      "text": "圓形桌面直徑 1.2 m，桌布邊緣要比桌面半徑多出 0.1 m。桌布半徑為何？",
      "givenConditions": "桌d=1.2 m；半徑外加0.1 m。",
      "target": "求桌布r。",
      "choices": [
        "0.6 m",
        "0.7 m",
        "1.3 m",
        "1.4 m"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「桌d=1.2 m；半徑外加0.1 m。」重算：桌面半徑0.6 m，再多0.1 m，桌布半徑0.7 m。",
      "explanation": "桌面半徑0.6 m，再多0.1 m，桌布半徑0.7 m。 因此唯一正確選項是「0.7 m」。",
      "steps": [
        "d÷2=0.6。",
        "加0.1。"
      ],
      "optionAnalysis": [
        {
          "choice": "0.6 m",
          "truth": false,
          "reason": "只求桌面半徑。"
        },
        {
          "choice": "0.7 m",
          "truth": true,
          "reason": "依題目條件重新計算：桌面半徑0.6 m，再多0.1 m，桌布半徑0.7 m。"
        },
        {
          "choice": "1.3 m",
          "truth": false,
          "reason": "把直徑直接加。"
        },
        {
          "choice": "1.4 m",
          "truth": false,
          "reason": "把桌布直徑當半徑。"
        }
      ],
      "misconceptionTarget": "直徑與半徑層級混淆。",
      "prerequisiteCheck": "需先能使用「切線段相等」；本題未使用後續技能。",
      "estimatedTimeSec": 75,
      "unitCheck": "u19-s018-v004 已核對所求量「求桌布r。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「處理圓形覆蓋邊界。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s018-v004。",
      "difficultyReason": "standard：處理圓形覆蓋邊界。 解題需完成「d÷2=0.6。；加0.1。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "處理圓形覆蓋邊界。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "e1b1afa719b86f0d74be857e177e426e5b05c011bdde75e25b45be66d217bb68"
    },
    {
      "questionId": "u19-s018-v005",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-literacy",
      "skillId": "circle-literacy",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "自行車輪半徑 35 cm，行進 22 m，取 π=22/7 且無滑動。輪子轉幾圈？",
      "text": "自行車輪半徑 35 cm，行進 22 m，取 π=22/7 且無滑動。輪子轉幾圈？",
      "givenConditions": "r=35 cm；距離22 m；π=22/7。",
      "target": "求圈數。",
      "choices": [
        "10 圈",
        "5 圈",
        "20 圈",
        "22 圈"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「r=35 cm；距離22 m；π=22/7。」重算：每圈周長2×22/7×35=220 cm=2.2 m；22÷2.2=10圈。",
      "explanation": "每圈周長2×22/7×35=220 cm=2.2 m；22÷2.2=10圈。 因此唯一正確選項是「10 圈」。",
      "steps": [
        "統一為m或cm。",
        "求周長2.2 m。",
        "距離除周長。"
      ],
      "optionAnalysis": [
        {
          "choice": "10 圈",
          "truth": true,
          "reason": "依題目條件重新計算：每圈周長2×22/7×35=220 cm=2.2 m；22÷2.2=10圈。"
        },
        {
          "choice": "5 圈",
          "truth": false,
          "reason": "多除2。"
        },
        {
          "choice": "20 圈",
          "truth": false,
          "reason": "把半徑當直徑。"
        },
        {
          "choice": "22 圈",
          "truth": false,
          "reason": "直接用距離數字。"
        }
      ],
      "misconceptionTarget": "單位未統一或周長公式錯。",
      "prerequisiteCheck": "需先能使用「切線段相等」；本題未使用後續技能。",
      "estimatedTimeSec": 90,
      "unitCheck": "u19-s018-v005 已核對所求量「求圈數。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由距離反求輪圈數。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s018-v005。",
      "difficultyReason": "standard：由距離反求輪圈數。 解題需完成「統一為m或cm。；求周長2.2 m。；距離除周長。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由距離反求輪圈數。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "7b4331b8325f1585e6e95c9d583dbb281bd9222ad6c7a8326945b9d4fa5a4319"
    },
    {
      "questionId": "u19-s018-v006",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-literacy",
      "skillId": "circle-literacy",
      "difficulty": "standard",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "圓形噴水池半徑 4 m，外圍鋪寬 1 m 的環形步道。步道面積為何？",
      "text": "圓形噴水池半徑 4 m，外圍鋪寬 1 m 的環形步道。步道面積為何？",
      "givenConditions": "池r=4；步道寬1。",
      "target": "求步道面積。",
      "choices": [
        "π m²",
        "9π m²",
        "8π m²",
        "25π m²"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「池r=4；步道寬1。」重算：外半徑5，內半徑4，步道面積π(25−16)=9π。",
      "explanation": "外半徑5，內半徑4，步道面積π(25−16)=9π。 因此唯一正確選項是「9π m²」。",
      "steps": [
        "外r=5。",
        "平方差25−16=9。"
      ],
      "optionAnalysis": [
        {
          "choice": "π m²",
          "truth": false,
          "reason": "只用寬度平方。"
        },
        {
          "choice": "9π m²",
          "truth": true,
          "reason": "依題目條件重新計算：外半徑5，內半徑4，步道面積π(25−16)=9π。"
        },
        {
          "choice": "8π m²",
          "truth": false,
          "reason": "錯用2r×寬。"
        },
        {
          "choice": "25π m²",
          "truth": false,
          "reason": "只算外圓。"
        }
      ],
      "misconceptionTarget": "環形步道面積只用寬度線性估計。",
      "prerequisiteCheck": "需先能使用「切線段相等」；本題未使用後續技能。",
      "estimatedTimeSec": 85,
      "unitCheck": "u19-s018-v006 已核對所求量「求步道面積。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由寬度建立圓環。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s018-v006。",
      "difficultyReason": "standard：由寬度建立圓環。 解題需完成「外r=5。；平方差25−16=9。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "由寬度建立圓環。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "22075fa4fd46f9fc48d48df5b0e22b1af715b3e47ff550280b7a2c832293b2a7"
    },
    {
      "questionId": "u19-s018-v007",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-literacy",
      "skillId": "circle-literacy",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "figure-supported",
      "figureId": "u19-s018-fig001",
      "drawingSpecId": "u19-s018-fig001",
      "prompt": "一輛車輪直徑 60 cm，儀表顯示輪子轉 500 圈。實際因打滑只前進理論距離的 96%。取π=3.14，實際前進多少公尺？",
      "text": "一輛車輪直徑 60 cm，儀表顯示輪子轉 500 圈。實際因打滑只前進理論距離的 96%。取π=3.14，實際前進多少公尺？",
      "givenConditions": "d=60 cm；500圈；實際96%；π=3.14。",
      "target": "求實際距離。",
      "choices": [
        "942 m",
        "90.432 m",
        "962.4 m",
        "904.32 m"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「d=60 cm；500圈；實際96%；π=3.14。」重算：理論距離=0.6π×500=300π≈942 m；實際=942×0.96=904.32 m。",
      "explanation": "理論距離=0.6π×500=300π≈942 m；實際=942×0.96=904.32 m。 因此唯一正確選項是「904.32 m」。",
      "steps": [
        "直徑換0.6 m。",
        "理論距離942 m。",
        "乘96%。"
      ],
      "optionAnalysis": [
        {
          "choice": "942 m",
          "truth": false,
          "reason": "未計打滑。"
        },
        {
          "choice": "90.432 m",
          "truth": false,
          "reason": "公尺小數位錯。"
        },
        {
          "choice": "962.4 m",
          "truth": false,
          "reason": "百分比乘法錯。"
        },
        {
          "choice": "904.32 m",
          "truth": true,
          "reason": "依題目條件重新計算：理論距離=0.6π×500=300π≈942 m；實際=942×0.96=904.32 m。"
        }
      ],
      "misconceptionTarget": "忽略打滑條件或單位換算。",
      "prerequisiteCheck": "需先能使用「切線段相等」；本題未使用後續技能。",
      "estimatedTimeSec": 120,
      "unitCheck": "u19-s018-v007 已核對所求量「求實際距離。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "題目明確指定近似常數或百分比，僅於最後一步取近似。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「結合輪周長與效率。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s018-v007。",
      "difficultyReason": "advanced：結合輪周長與效率。 解題需完成「直徑換0.6 m。；理論距離942 m。；乘96%。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "結合輪周長與效率。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "d4dd3be56620c5505bbc262592b092e7eefc6ef5d101b5dbeaacd85eb0815731"
    },
    {
      "questionId": "u19-s018-v008",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-literacy",
      "skillId": "circle-literacy",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "圓形廣場半徑 14 m，設計一條占 90° 的扇形舞台，再從舞台中挖去半徑 7 m、同中心的90°扇形。舞台剩餘面積為何？",
      "text": "圓形廣場半徑 14 m，設計一條占 90° 的扇形舞台，再從舞台中挖去半徑 7 m、同中心的90°扇形。舞台剩餘面積為何？",
      "givenConditions": "同中心；R=14、r=7；角90°。",
      "target": "求剩餘舞台面積。",
      "choices": [
        "49π/4 m²",
        "147π/2 m²",
        "147π/4 m²",
        "196π m²"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「同中心；R=14、r=7；角90°。」重算：剩餘是四分之一圓環：1/4π(14²−7²)=1/4π(196−49)=147π/4。",
      "explanation": "剩餘是四分之一圓環：1/4π(14²−7²)=1/4π(196−49)=147π/4。 因此唯一正確選項是「147π/4 m²」。",
      "steps": [
        "平方差147。",
        "乘1/4。"
      ],
      "optionAnalysis": [
        {
          "choice": "49π/4 m²",
          "truth": false,
          "reason": "只算小扇形。"
        },
        {
          "choice": "147π/2 m²",
          "truth": false,
          "reason": "少除2。"
        },
        {
          "choice": "147π/4 m²",
          "truth": true,
          "reason": "依題目條件重新計算：剩餘是四分之一圓環：1/4π(14²−7²)=1/4π(196−49)=147π/4。"
        },
        {
          "choice": "196π m²",
          "truth": false,
          "reason": "只算大圓。"
        }
      ],
      "misconceptionTarget": "未把同角度扇形差視為部分圓環。",
      "prerequisiteCheck": "需先能使用「切線段相等」；本題未使用後續技能。",
      "estimatedTimeSec": 120,
      "unitCheck": "u19-s018-v008 已核對所求量「求剩餘舞台面積。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「結合扇形與圓環。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s018-v008。",
      "difficultyReason": "advanced：結合扇形與圓環。 解題需完成「平方差147。；乘1/4。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "結合扇形與圓環。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "6949a936b5ce416c33ff443edf48db9a1e7f124cb2c9be016b34e970a8c80e91"
    },
    {
      "questionId": "u19-s018-v009",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-literacy",
      "skillId": "circle-literacy",
      "difficulty": "advanced",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "圓形警戒區半徑 10 km，一條航線到中心距離為 x+2 km。若航線不得進入警戒區但允許恰好相切，x 的範圍為何？",
      "text": "圓形警戒區半徑 10 km，一條航線到中心距離為 x+2 km。若航線不得進入警戒區但允許恰好相切，x 的範圍為何？",
      "givenConditions": "r=10；d=x+2；可相切不可進入。",
      "target": "求x範圍。",
      "choices": [
        "x>8",
        "x≤8",
        "0≤x<8",
        "x≥8"
      ],
      "answerIndex": 3,
      "independentSolution": "不採用儲存答案，直接依「r=10；d=x+2；可相切不可進入。」重算：不得進入且可相切表示d≥r，x+2≥10，所以x≥8。",
      "explanation": "不得進入且可相切表示d≥r，x+2≥10，所以x≥8。 因此唯一正確選項是「x≥8」。",
      "steps": [
        "把條件轉為d≥10。",
        "解x≥8。"
      ],
      "optionAnalysis": [
        {
          "choice": "x>8",
          "truth": false,
          "reason": "排除允許的相切情況。"
        },
        {
          "choice": "x≤8",
          "truth": false,
          "reason": "方向相反。"
        },
        {
          "choice": "0≤x<8",
          "truth": false,
          "reason": "這會進入圓。"
        },
        {
          "choice": "x≥8",
          "truth": true,
          "reason": "依題目條件重新計算：不得進入且可相切表示d≥r，x+2≥10，所以x≥8。"
        }
      ],
      "misconceptionTarget": "「允許相切」的端點是否包含判斷錯。",
      "prerequisiteCheck": "需先能使用「切線段相等」；本題未使用後續技能。",
      "estimatedTimeSec": 110,
      "unitCheck": "u19-s018-v009 已核對所求量「求x範圍。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「把安全規則轉成不等式。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s018-v009。",
      "difficultyReason": "advanced：把安全規則轉成不等式。 解題需完成「把條件轉為d≥10。；解x≥8。」。",
      "literacyContextNecessity": null,
      "authoringIntent": "把安全規則轉成不等式。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "e6c4f2d8b4062b9320ec0a942d2f914c08724e08319ea2984e8a6195617e225d"
    },
    {
      "questionId": "u19-s018-v010",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-literacy",
      "skillId": "circle-literacy",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "圓形披薩直徑 30 cm，切成 6 個中心角相等的扇形。每片面積為何？",
      "text": "圓形披薩直徑 30 cm，切成 6 個中心角相等的扇形。每片面積為何？",
      "givenConditions": "d=30 cm；6等分。",
      "target": "求每片面積。",
      "choices": [
        "15π cm²",
        "37.5π cm²",
        "75π cm²",
        "225π cm²"
      ],
      "answerIndex": 1,
      "independentSolution": "不採用儲存答案，直接依「d=30 cm；6等分。」重算：半徑15，整圓面積225π，六等分每片37.5π。",
      "explanation": "半徑15，整圓面積225π，六等分每片37.5π。 因此唯一正確選項是「37.5π cm²」。",
      "steps": [
        "d÷2=15。",
        "225π÷6=37.5π。"
      ],
      "optionAnalysis": [
        {
          "choice": "15π cm²",
          "truth": false,
          "reason": "半徑未平方。"
        },
        {
          "choice": "37.5π cm²",
          "truth": true,
          "reason": "依題目條件重新計算：半徑15，整圓面積225π，六等分每片37.5π。"
        },
        {
          "choice": "75π cm²",
          "truth": false,
          "reason": "只除3。"
        },
        {
          "choice": "225π cm²",
          "truth": false,
          "reason": "整圓。"
        }
      ],
      "misconceptionTarget": "直徑與等分數同時處理錯。",
      "prerequisiteCheck": "需先能使用「切線段相等」；本題未使用後續技能。",
      "estimatedTimeSec": 80,
      "unitCheck": "u19-s018-v010 已核對所求量「求每片面積。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「計算等分披薩單片面積。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s018-v010。",
      "difficultyReason": "literacy：計算等分披薩單片面積。 解題需完成「d÷2=15。；225π÷6=37.5π。」。",
      "literacyContextNecessity": "份量公平以相等中心角與面積呈現。",
      "authoringIntent": "計算等分披薩單片面積。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "6910248a10b75abfc90c8ae3a5f8caee97a2860b754212ea070a70202a434722"
    },
    {
      "questionId": "u19-s018-v011",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-literacy",
      "skillId": "circle-literacy",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "圓形花圃周長為 20π m，外圍再加寬 2 m 的步道。步道外緣周長為何？",
      "text": "圓形花圃周長為 20π m，外圍再加寬 2 m 的步道。步道外緣周長為何？",
      "givenConditions": "原C=20π；步道寬2。",
      "target": "求外緣周長。",
      "choices": [
        "22π m",
        "40π m",
        "24π m",
        "48π m"
      ],
      "answerIndex": 2,
      "independentSolution": "不採用儲存答案，直接依「原C=20π；步道寬2。」重算：原周長20π=2πr，r=10；外半徑12，外緣周長24π。",
      "explanation": "原周長20π=2πr，r=10；外半徑12，外緣周長24π。 因此唯一正確選項是「24π m」。",
      "steps": [
        "反求原r=10。",
        "外r=12。",
        "求周長24π。"
      ],
      "optionAnalysis": [
        {
          "choice": "22π m",
          "truth": false,
          "reason": "只在係數加2。"
        },
        {
          "choice": "40π m",
          "truth": false,
          "reason": "把直徑誤作20。"
        },
        {
          "choice": "24π m",
          "truth": true,
          "reason": "依題目條件重新計算：原周長20π=2πr，r=10；外半徑12，外緣周長24π。"
        },
        {
          "choice": "48π m",
          "truth": false,
          "reason": "多一倍。"
        }
      ],
      "misconceptionTarget": "步道寬度加在半徑而非周長係數。",
      "prerequisiteCheck": "需先能使用「切線段相等」；本題未使用後續技能。",
      "estimatedTimeSec": 90,
      "unitCheck": "u19-s018-v011 已核對所求量「求外緣周長。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由原周長與步道寬求外周。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s018-v011。",
      "difficultyReason": "literacy：由原周長與步道寬求外周。 解題需完成「反求原r=10。；外r=12。；求周長24π。」。",
      "literacyContextNecessity": "步道寬改變半徑，不能直接加到周長。",
      "authoringIntent": "由原周長與步道寬求外周。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "c853c867682b910884f6211175f593be4fdb528eac10e102c4a49b6548e5b183"
    },
    {
      "questionId": "u19-s018-v012",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-literacy",
      "skillId": "circle-literacy",
      "difficulty": "literacy",
      "type": "mc",
      "itemType": "multiple-choice",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "圓形舞台半徑 8 m，中央旋轉燈掃過 225°。未掃過區域面積為何？",
      "text": "圓形舞台半徑 8 m，中央旋轉燈掃過 225°。未掃過區域面積為何？",
      "givenConditions": "r=8；已掃225°。",
      "target": "求未掃面積。",
      "choices": [
        "24π m²",
        "16π m²",
        "40π m²",
        "64π m²"
      ],
      "answerIndex": 0,
      "independentSolution": "不採用儲存答案，直接依「r=8；已掃225°。」重算：未掃角=135°，占3/8；整圓64π，未掃面積24π。",
      "explanation": "未掃角=135°，占3/8；整圓64π，未掃面積24π。 因此唯一正確選項是「24π m²」。",
      "steps": [
        "360−225=135。",
        "135/360=3/8。",
        "64π×3/8=24π。"
      ],
      "optionAnalysis": [
        {
          "choice": "24π m²",
          "truth": true,
          "reason": "依題目條件重新計算：未掃角=135°，占3/8；整圓64π，未掃面積24π。"
        },
        {
          "choice": "16π m²",
          "truth": false,
          "reason": "角比例錯。"
        },
        {
          "choice": "40π m²",
          "truth": false,
          "reason": "算已掃部分附近。"
        },
        {
          "choice": "64π m²",
          "truth": false,
          "reason": "整圓。"
        }
      ],
      "misconceptionTarget": "求錯區域或角度差錯。",
      "prerequisiteCheck": "需先能使用「切線段相等」；本題未使用後續技能。",
      "estimatedTimeSec": 95,
      "unitCheck": "u19-s018-v012 已核對所求量「求未掃面積。」的角度、長度、面積或無單位比例，四個選項量綱一致。",
      "roundingCheck": "答案使用整數、分數、根式或保留π的精確值，無四捨五入造成第二答案。",
      "ambiguityAudit": "題幹已指定關鍵點位置、弧段方向、中心角、半徑或施工範圍；依「由已掃角度求剩餘面積。」只有一個數學目標。",
      "boundaryAudit": "只使用國中會考圓、比例、一次或基礎二次方程、畢氏定理與單位換算；已檢查幾何長度為正及角度範圍。題號：u19-s018-v012。",
      "difficultyReason": "literacy：由已掃角度求剩餘面積。 解題需完成「360−225=135。；135/360=3/8。；64π×3/8=24π。」。",
      "literacyContextNecessity": "舞台照明規劃關心未覆蓋區域，必須先求補角。",
      "authoringIntent": "由已掃角度求剩餘面積。",
      "reviewStatus": "independently-reviewed",
      "noTemplateDeclaration": true,
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "51bdb0115e72c98b6ea548d6c84bed5012a0963cf4747362c3aeeb6de1d087da"
    }
  ],
  "constructedResponses": [
    {
      "questionId": "u19-s018-cr001",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-literacy",
      "skillId": "circle-literacy",
      "difficulty": "literacy",
      "type": "constructed-response",
      "itemType": "constructed-response",
      "visualMode": "figure-supported",
      "figureId": "u19-s018-fig001",
      "drawingSpecId": "u19-s018-fig001",
      "prompt": "自行車輪直徑 70 cm，無滑動行進 1.1 km。取π=22/7，求輪子轉幾圈。",
      "requiredWork": [
        "統一距離單位。",
        "求一圈周長。",
        "總距離除以周長。"
      ],
      "standardSolution": [
        "一圈周長=πd=(22/7)×70=220 cm。",
        "1.1 km=110000 cm。",
        "圈數=110000÷220=500圈。"
      ],
      "fullCreditSolution": [
        "一圈周長=πd=(22/7)×70=220 cm。",
        "1.1 km=110000 cm。",
        "圈數=110000÷220=500圈。"
      ],
      "alternativeSolutions": [
        "可將220 cm換成2.2 m，1.1 km換1100 m，再相除。"
      ],
      "reasoningSteps": [
        "一圈周長=πd=(22/7)×70=220 cm。",
        "1.1 km=110000 cm。",
        "圈數=110000÷220=500圈。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "單位轉換、周長220 cm與500圈完整。"
        },
        {
          "score": 2,
          "criteria": "答案正確但單位過程略，或一處小錯。"
        },
        {
          "score": 1,
          "criteria": "正確求一圈周長。"
        },
        {
          "score": 0,
          "criteria": "以面積或半徑直接除距離。"
        }
      ],
      "partialCreditRules": [
        "單位、周長、圈數分項。"
      ],
      "followThroughPolicy": "若單位換算錯但後續正確相除，可保留方法分。",
      "unitNotationRules": "距離單位須一致；答案圈。",
      "answerOnlyPolicy": "只寫500圈給2分。",
      "commonErrors": [
        "1.1 km換1100 cm。",
        "把70當半徑。"
      ],
      "independentReview": {
        "derivedResult": "500圈。",
        "ambiguity": "無滑動與π指定，唯一。",
        "decision": "pass",
        "reviewNote": "u19-s018-cr001 由題目條件另行推導得到「500圈。」；評分規準逐步對應本題所需的定理、列式、運算與單位。",
        "reviewedAt": "2026-07-12"
      },
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "db2fe774f1944fab01f62fb2bbec69bcb4ecf515184ff36200c26fd924a29a08"
    },
    {
      "questionId": "u19-s018-cr002",
      "unitId": "u19",
      "numericUnitId": 19,
      "topicId": "u19-literacy",
      "skillId": "circle-literacy",
      "difficulty": "literacy",
      "type": "constructed-response",
      "itemType": "constructed-response",
      "visualMode": "text-only",
      "figureId": null,
      "drawingSpecId": null,
      "prompt": "圓形廣場半徑 12 m，中央灑水器掃過 150°。未掃區域要鋪石材，每平方公尺 40 元，π取3.14。求未掃面積與費用。",
      "requiredWork": [
        "求未掃中心角。",
        "求扇形面積。",
        "乘單價。"
      ],
      "standardSolution": [
        "未掃角=360°−150°=210°。",
        "未掃面積=(210/360)×3.14×12²=(7/12)×452.16=263.76 m²。",
        "費用=263.76×40=10550.4元。"
      ],
      "fullCreditSolution": [
        "未掃角=360°−150°=210°。",
        "未掃面積=(210/360)×3.14×12²=(7/12)×452.16=263.76 m²。",
        "費用=263.76×40=10550.4元。"
      ],
      "alternativeSolutions": [
        "可先求整圓452.16 m²，再乘7/12。"
      ],
      "reasoningSteps": [
        "未掃角=360°−150°=210°。",
        "未掃面積=(210/360)×3.14×12²=(7/12)×452.16=263.76 m²。",
        "費用=263.76×40=10550.4元。"
      ],
      "rubric": [
        {
          "score": 3,
          "criteria": "210°、263.76 m²與10550.4元完整。"
        },
        {
          "score": 2,
          "criteria": "面積與費用正確但過程略，或一處算術小錯。"
        },
        {
          "score": 1,
          "criteria": "正確求未掃比例7/12。"
        },
        {
          "score": 0,
          "criteria": "算已掃150°區域。"
        }
      ],
      "partialCreditRules": [
        "角度、面積、費用分項。"
      ],
      "followThroughPolicy": "若面積算錯，後續正確乘40可保留費用方法分。",
      "unitNotationRules": "角°、面積m²、費用元。",
      "answerOnlyPolicy": "只寫費用正確但無面積，最高2分。",
      "commonErrors": [
        "未先求補角。",
        "面積使用2πr。"
      ],
      "independentReview": {
        "derivedResult": "未掃面積263.76 m²，費用10550.4元。",
        "ambiguity": "掃描互補區域與單價完整指定。",
        "decision": "pass",
        "reviewNote": "u19-s018-cr002 由題目條件另行推導得到「未掃面積263.76 m²，費用10550.4元。」；評分規準逐步對應本題所需的定理、列式、運算與單位。",
        "reviewedAt": "2026-07-12"
      },
      "legacyReplacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "5678fd274b3dccb2f7b5c3d300c8b16b8474db53b43fceb45cce7da1e785ceaa"
    }
  ],
  "semanticReviews": [
    {
      "questionId": "u19-s018-v001",
      "contentSha256": "8a86468a2822f5bedf81a49598669b768e4a74df487f0b70336c8017667dd3ee",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「d=70 cm；10圈；無滑動。」重算：每圈周長πd=70π cm，10圈為700π cm。",
      "derivedAnswer": "700π cm",
      "storedAnswer": "700π cm",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「700π cm」符合；三個干擾項分別因「只算一圈。；把半圈混入。；把半徑當70。」而排除。",
        "undefinedSymbol": "u19-s018-v001 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓素養題」講義定義。",
        "unitConflict": "題目所求為「求前進距離。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由車輪圈數求距離。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「d=70 cm；10圈；無滑動。」重讀，所求「求前進距離。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為basic，核心任務是由車輪圈數求距離。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴two-tangent-segments，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「直徑 70 cm 的車輪無滑動轉 10 圈，前進距離為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s018-v001 人工重算：每圈周長πd=70π cm，10圈為700π cm。 正確選項為「700π cm」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s018-v002",
      "contentSha256": "6c89ebfd3ee25b45ed2b75b74651e4a1c020a9b5e3bafcaae0c57d1144995ac7",
      "reviewVersion": "central-human-review-r1.1",
      "independentSolution": "不看儲存答案，先求整圓面積 π×6²=36π m²。可灑角度是 360°−60°=300°，占 5/6，所以覆蓋面積=36π×5/6=30π m²。",
      "derivedAnswer": "30π m²",
      "storedAnswer": "30π m²",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算後只有「30π m²」符合。其餘三項分別因「把被遮住的 60° 面積誤當成可覆蓋面積。；誤沿用 120° 扇形的 1/3 比例，題目實際可灑 300°。；這是未受遮擋時的整圓面積，沒有扣除牆面遮住區。」而排除。",
        "undefinedSymbol": "u19-s018-v002 所用圓心、圓周、弧、角、直徑、半徑或 π 均已在 U19 先備講義中定義，沒有未說明符號。",
        "unitConflict": "四個選項皆為面積且使用 m²；結果 30π 小於整圓 36π，符合情境。",
        "roundingConflict": "保留 π 的精確值，不涉及四捨五入。",
        "domainBoundary": "只使用圓面積、扇形比例和角度補量，符合國中會考素養範圍。",
        "alternateReading": "題幹明定遮住的是連續 60°，其餘方向全可灑到，因此可用角度唯一為 300°，不涉及重疊區。"
      },
      "difficultyReason": "basic：先辨認『遮住』表示取補角，再按扇形比例計算；避免與 U19-s010-v010 完全重複。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "需先能使用「切線段相等」；本題未使用後續技能。",
      "languageCheck": "題幹「一座半徑 6 m 的旋轉灑水器原可灑滿整圓，但牆面遮住連續 60° 的方向，其餘方向皆可灑到。理論可覆蓋面積為何？」採臺灣繁體中文，條件、所求量與比較基準均完整。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s018-v002 中央人工重算：不看儲存答案，先求整圓面積 π×6²=36π m²。可灑角度是 360°−60°=300°，占 5/6，所以覆蓋面積=36π×5/6=30π m²。 正確選項為「30π m²」，四項真值與每個干擾項錯因均已重新核對。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "roundingConflict": null
    },
    {
      "questionId": "u19-s018-v003",
      "contentSha256": "5ee79807dc832f479c755480d80e03876f1b323b95993b359878ae107c0271cc",
      "reviewVersion": "central-human-review-r1.1",
      "independentSolution": "不採用儲存答案，直徑 40 m 的圓周長是 πd=40π m；走 3/4 圈，所以路程=40π×3/4=30π m。",
      "derivedAnswer": "30π m",
      "storedAnswer": "30π m",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項重算後只有「30π m」符合。其餘三項分別因「這是完整走一圈的距離，沒有乘 3/4。；誤把 3/4 圈當成半圈，或把直徑先除以 2 後直接乘 π。；把 3/4 誤算成乘 3，沒有除以 4。」而排除。",
        "undefinedSymbol": "u19-s018-v003 所用圓心、圓周、弧、角、直徑、半徑或 π 均已在 U19 先備講義中定義，沒有未說明符號。",
        "unitConflict": "所有選項皆為長度 m；30π 小於完整圓周 40π，符合只走 3/4 圈。",
        "roundingConflict": "答案保留 π，不需近似；已確認不會因四捨五入產生第二答案。",
        "domainBoundary": "只使用圓周長與分數比例，符合國中會考範圍。",
        "alternateReading": "題幹明確說沿外緣走全周的 3/4，不包含穿越花圃的直線捷徑，因此路徑唯一。"
      },
      "difficultyReason": "basic：以直徑求圓周後取 3/4 圈，和原本重複的半圓彎道題具有不同資訊入口。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "需先能使用「切線段相等」；本題未使用後續技能。",
      "languageCheck": "題幹「一座圓形花圃的直徑是 40 m。管理員沿花圃外緣巡查全周的 3/4，實際走了多長？」採臺灣繁體中文，條件、所求量與比較基準均完整。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s018-v003 中央人工重算：不採用儲存答案，直徑 40 m 的圓周長是 πd=40π m；走 3/4 圈，所以路程=40π×3/4=30π m。 正確選項為「30π m」，四項真值與每個干擾項錯因均已重新核對。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "roundingConflict": null
    },
    {
      "questionId": "u19-s018-v004",
      "contentSha256": "e1b1afa719b86f0d74be857e177e426e5b05c011bdde75e25b45be66d217bb68",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「桌d=1.2 m；半徑外加0.1 m。」重算：桌面半徑0.6 m，再多0.1 m，桌布半徑0.7 m。",
      "derivedAnswer": "0.7 m",
      "storedAnswer": "0.7 m",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「0.7 m」符合；三個干擾項分別因「只求桌面半徑。；把直徑直接加。；把桌布直徑當半徑。」而排除。",
        "undefinedSymbol": "u19-s018-v004 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓素養題」講義定義。",
        "unitConflict": "題目所求為「求桌布r。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「處理圓形覆蓋邊界。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「桌d=1.2 m；半徑外加0.1 m。」重讀，所求「求桌布r。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是處理圓形覆蓋邊界。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴two-tangent-segments，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓形桌面直徑 1.2 m，桌布邊緣要比桌面半徑多出 0.1 m。桌布半徑為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s018-v004 人工重算：桌面半徑0.6 m，再多0.1 m，桌布半徑0.7 m。 正確選項為「0.7 m」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s018-v005",
      "contentSha256": "7b4331b8325f1585e6e95c9d583dbb281bd9222ad6c7a8326945b9d4fa5a4319",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=35 cm；距離22 m；π=22/7。」重算：每圈周長2×22/7×35=220 cm=2.2 m；22÷2.2=10圈。",
      "derivedAnswer": "10 圈",
      "storedAnswer": "10 圈",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「10 圈」符合；三個干擾項分別因「多除2。；把半徑當直徑。；直接用距離數字。」而排除。",
        "undefinedSymbol": "u19-s018-v005 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓素養題」講義定義。",
        "unitConflict": "題目所求為「求圈數。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由距離反求輪圈數。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=35 cm；距離22 m；π=22/7。」重讀，所求「求圈數。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是由距離反求輪圈數。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴two-tangent-segments，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「自行車輪半徑 35 cm，行進 22 m，取 π=22/7 且無滑動。輪子轉幾圈？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s018-v005 人工重算：每圈周長2×22/7×35=220 cm=2.2 m；22÷2.2=10圈。 正確選項為「10 圈」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s018-v006",
      "contentSha256": "22075fa4fd46f9fc48d48df5b0e22b1af715b3e47ff550280b7a2c832293b2a7",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「池r=4；步道寬1。」重算：外半徑5，內半徑4，步道面積π(25−16)=9π。",
      "derivedAnswer": "9π m²",
      "storedAnswer": "9π m²",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「9π m²」符合；三個干擾項分別因「只用寬度平方。；錯用2r×寬。；只算外圓。」而排除。",
        "undefinedSymbol": "u19-s018-v006 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓素養題」講義定義。",
        "unitConflict": "題目所求為「求步道面積。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由寬度建立圓環。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「池r=4；步道寬1。」重讀，所求「求步道面積。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為standard，核心任務是由寬度建立圓環。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴two-tangent-segments，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓形噴水池半徑 4 m，外圍鋪寬 1 m 的環形步道。步道面積為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s018-v006 人工重算：外半徑5，內半徑4，步道面積π(25−16)=9π。 正確選項為「9π m²」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s018-v007",
      "contentSha256": "d4dd3be56620c5505bbc262592b092e7eefc6ef5d101b5dbeaacd85eb0815731",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「d=60 cm；500圈；實際96%；π=3.14。」重算：理論距離=0.6π×500=300π≈942 m；實際=942×0.96=904.32 m。",
      "derivedAnswer": "904.32 m",
      "storedAnswer": "904.32 m",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「904.32 m」符合；三個干擾項分別因「未計打滑。；公尺小數位錯。；百分比乘法錯。」而排除。",
        "undefinedSymbol": "u19-s018-v007 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓素養題」講義定義。",
        "unitConflict": "題目所求為「求實際距離。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "近似規則由題幹指定，未在中途重複捨入。",
        "domainBoundary": "本題僅測「結合輪周長與效率。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「d=60 cm；500圈；實際96%；π=3.14。」重讀，所求「求實際距離。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是結合輪周長與效率。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴two-tangent-segments，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「一輛車輪直徑 60 cm，儀表顯示輪子轉 500 圈。實際因打滑只前進理論距離的 96%。取π=3.14，實際前進多少公尺？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s018-v007 人工重算：理論距離=0.6π×500=300π≈942 m；實際=942×0.96=904.32 m。 正確選項為「904.32 m」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s018-v008",
      "contentSha256": "6949a936b5ce416c33ff443edf48db9a1e7f124cb2c9be016b34e970a8c80e91",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「同中心；R=14、r=7；角90°。」重算：剩餘是四分之一圓環：1/4π(14²−7²)=1/4π(196−49)=147π/4。",
      "derivedAnswer": "147π/4 m²",
      "storedAnswer": "147π/4 m²",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「147π/4 m²」符合；三個干擾項分別因「只算小扇形。；少除2。；只算大圓。」而排除。",
        "undefinedSymbol": "u19-s018-v008 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓素養題」講義定義。",
        "unitConflict": "題目所求為「求剩餘舞台面積。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「結合扇形與圓環。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「同中心；R=14、r=7；角90°。」重讀，所求「求剩餘舞台面積。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是結合扇形與圓環。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴two-tangent-segments，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓形廣場半徑 14 m，設計一條占 90° 的扇形舞台，再從舞台中挖去半徑 7 m、同中心的90°扇形。舞台剩餘面積為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s018-v008 人工重算：剩餘是四分之一圓環：1/4π(14²−7²)=1/4π(196−49)=147π/4。 正確選項為「147π/4 m²」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s018-v009",
      "contentSha256": "e6c4f2d8b4062b9320ec0a942d2f914c08724e08319ea2984e8a6195617e225d",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=10；d=x+2；可相切不可進入。」重算：不得進入且可相切表示d≥r，x+2≥10，所以x≥8。",
      "derivedAnswer": "x≥8",
      "storedAnswer": "x≥8",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        false,
        true
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「x≥8」符合；三個干擾項分別因「排除允許的相切情況。；方向相反。；這會進入圓。」而排除。",
        "undefinedSymbol": "u19-s018-v009 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓素養題」講義定義。",
        "unitConflict": "題目所求為「求x範圍。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「把安全規則轉成不等式。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=10；d=x+2；可相切不可進入。」重讀，所求「求x範圍。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為advanced，核心任務是把安全規則轉成不等式。，而非只依題序標示。",
      "literacyContextNecessity": null,
      "prerequisiteCheck": "只依賴two-tangent-segments，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓形警戒區半徑 10 km，一條航線到中心距離為 x+2 km。若航線不得進入警戒區但允許恰好相切，x 的範圍為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s018-v009 人工重算：不得進入且可相切表示d≥r，x+2≥10，所以x≥8。 正確選項為「x≥8」。四項真值依序為假,假,假,真；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s018-v010",
      "contentSha256": "6910248a10b75abfc90c8ae3a5f8caee97a2860b754212ea070a70202a434722",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「d=30 cm；6等分。」重算：半徑15，整圓面積225π，六等分每片37.5π。",
      "derivedAnswer": "37.5π cm²",
      "storedAnswer": "37.5π cm²",
      "answerMatch": true,
      "optionTruth": [
        false,
        true,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「37.5π cm²」符合；三個干擾項分別因「半徑未平方。；只除3。；整圓。」而排除。",
        "undefinedSymbol": "u19-s018-v010 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓素養題」講義定義。",
        "unitConflict": "題目所求為「求每片面積。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「計算等分披薩單片面積。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「d=30 cm；6等分。」重讀，所求「求每片面積。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是計算等分披薩單片面積。，而非只依題序標示。",
      "literacyContextNecessity": "份量公平以相等中心角與面積呈現。",
      "prerequisiteCheck": "只依賴two-tangent-segments，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓形披薩直徑 30 cm，切成 6 個中心角相等的扇形。每片面積為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s018-v010 人工重算：半徑15，整圓面積225π，六等分每片37.5π。 正確選項為「37.5π cm²」。四項真值依序為假,真,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s018-v011",
      "contentSha256": "c853c867682b910884f6211175f593be4fdb528eac10e102c4a49b6548e5b183",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「原C=20π；步道寬2。」重算：原周長20π=2πr，r=10；外半徑12，外緣周長24π。",
      "derivedAnswer": "24π m",
      "storedAnswer": "24π m",
      "answerMatch": true,
      "optionTruth": [
        false,
        false,
        true,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「24π m」符合；三個干擾項分別因「只在係數加2。；把直徑誤作20。；多一倍。」而排除。",
        "undefinedSymbol": "u19-s018-v011 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓素養題」講義定義。",
        "unitConflict": "題目所求為「求外緣周長。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由原周長與步道寬求外周。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「原C=20π；步道寬2。」重讀，所求「求外緣周長。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是由原周長與步道寬求外周。，而非只依題序標示。",
      "literacyContextNecessity": "步道寬改變半徑，不能直接加到周長。",
      "prerequisiteCheck": "只依賴two-tangent-segments，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓形花圃周長為 20π m，外圍再加寬 2 m 的步道。步道外緣周長為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s018-v011 人工重算：原周長20π=2πr，r=10；外半徑12，外緣周長24π。 正確選項為「24π m」。四項真值依序為假,假,真,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    },
    {
      "questionId": "u19-s018-v012",
      "contentSha256": "51bdb0115e72c98b6ea548d6c84bed5012a0963cf4747362c3aeeb6de1d087da",
      "reviewVersion": "human-review-r1.0",
      "independentSolution": "不採用儲存答案，直接依「r=8；已掃225°。」重算：未掃角=135°，占3/8；整圓64π，未掃面積24π。",
      "derivedAnswer": "24π m²",
      "storedAnswer": "24π m²",
      "answerMatch": true,
      "optionTruth": [
        true,
        false,
        false,
        false
      ],
      "uniqueCorrectAnswer": true,
      "ambiguityChecks": {
        "secondCorrectAnswer": "逐項核對四選項後，只有「24π m²」符合；三個干擾項分別因「角比例錯。；算已掃部分附近。；整圓。」而排除。",
        "undefinedSymbol": "u19-s018-v012 使用的圓心、弧、角、半徑、直徑、切線或π均已在「圓素養題」講義定義。",
        "unitConflict": "題目所求為「求未掃面積。」，選項單位與題幹資料已逐項核對，沒有長度與面積混算。",
        "roundingConflict": "以精確值重算，π、根式或分數均保留，無近似臨界問題。",
        "domainBoundary": "本題僅測「由已掃角度求剩餘面積。」，未使用高中弧度制、解析幾何切線方程或超出CAP的圓冪定理。",
        "alternateReading": "依給定條件「r=8；已掃225°。」重讀，所求「求未掃面積。」不會因優劣弧、內外邊界或直徑半徑混淆產生另一答案。"
      },
      "difficultyReason": "將題目完整重算後確認難度為literacy，核心任務是由已掃角度求剩餘面積。，而非只依題序標示。",
      "literacyContextNecessity": "舞台照明規劃關心未覆蓋區域，必須先求補角。",
      "prerequisiteCheck": "只依賴two-tangent-segments，未引用後續技能。",
      "languageCheck": "繁體中文用語採臺灣教材慣例；題幹「圓形舞台半徑 8 m，中央旋轉燈掃過 225°。未掃過區域面積為何？」未省略比較基準或所求量。",
      "reviewerDecision": "pass",
      "reviewerNote": "u19-s018-v012 人工重算：未掃角=135°，占3/8；整圓64π，未掃面積24π。 正確選項為「24π m²」。四項真值依序為真,假,假,假；干擾項錯因均已逐一對應。",
      "reviewedAt": "2026-07-12",
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
    }
  ],
  "drawingSpecs": [
    {
      "figureId": "u19-s018-fig001",
      "unitId": "u19",
      "topicId": "u19-literacy",
      "skillId": "circle-literacy",
      "svgPath": "figures/u19/u19-s018-fig001.svg",
      "canvas": {
        "width": 360,
        "height": 240,
        "viewBox": "0 0 360 240"
      },
      "drawingSpec": {
        "purpose": "支援「圓素養題」中需要辨認點、線、弧、角或邊界的題目。",
        "coordinateSystem": "SVG x向右、y向下；所有座標以360×240畫布為準。",
        "geometry": "左側輪子以箭頭表示滾動一圈，右側灑水器以扇形表示旋轉覆蓋，對比長度與面積模型。",
        "visibleLines": "所有作答所需實線均以2px以上深色描邊；強調弧以5px描邊。",
        "hiddenLines": "只有內部共邊或量測輔助線使用虛線；未指定者不得自行添加。",
        "labels": "標籤位置已在SVG以固定座標給定，避免遮住交點、角弧或刻痕。",
        "symbols": "直角符號、等長刻痕、箭頭及角度符號僅在數學條件需要時出現。",
        "scalePolicy": "示意圖不保證按實際長度或角度比例繪製。",
        "visualInferenceWarning": "不得以目測長短、角度或對稱性取代題目條件與定理。",
        "mobileReadability": "360×240檢視下文字至少16px，關鍵線至少2px，無微小數值標籤。",
        "answerLeakage": "圖中不標示任何題目要求計算的最終數值或正確選項。"
      },
      "altText": "左側輪子以箭頭表示滾動一圈，右側灑水器以扇形表示旋轉覆蓋，對比長度與面積模型。 圖形僅協助辨認結構，不可依比例目測答案。",
      "svgTitle": "輪子滾動與扇形覆蓋圖",
      "svgDescription": "左側輪子以箭頭表示滾動一圈，右側灑水器以扇形表示旋轉覆蓋，對比長度與面積模型。",
      "svgAssertions": [
        "role=\"img\"",
        "<title",
        "<desc",
        "viewBox=\"0 0 360 240\"",
        ">滾動：圈數×圓周長</text>",
        ">旋轉：扇形面積</text>",
        ">θ</text>"
      ],
      "figureReview": {
        "decision": "pass",
        "manualRenderInspected": true,
        "mobileReadable": true,
        "answerLeakageFound": false,
        "reviewNote": "已逐項檢查 u19-s018-fig001 的點位、線段、弧線、標籤與輔助符號；此圖專門呈現「圓素養題」的結構，未包含可直接推得題庫答案的數值。",
        "reviewVersion": "human-figure-review-r1.0",
        "reviewedAt": "2026-07-12"
      },
      "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
      "contentSha256": "0172c5f1a65694b77620d4be6fcdc19a8eb829fb3318fd20ff7fdf8f81e27e38"
    }
  ]
};
export default u19_s018;
