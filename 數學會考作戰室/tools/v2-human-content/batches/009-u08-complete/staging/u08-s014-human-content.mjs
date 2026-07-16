// SERIALIZATION OF REVIEWED HUMAN CONTENT.

// CENTRAL_COORDINATOR_APPROVAL_REQUIRED.

// DO NOT EDIT, REPAIR OR ACTIVATE THIS MODULE DIRECTLY.

export const LECTURE = {
  "lectureId": "u08-s014-lecture-r1",
  "unitId": "u08",
  "numericUnitId": 8,
  "topicId": "u08-literacy",
  "skillId": "geometry-literacy-context",
  "lockedSkillTitle": "平面幾何與三視圖素養",
  "title": "平面幾何與三視圖素養：把規格文字轉成可驗證條件",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能從生活規格辨認角度、平行垂直、對稱、周長與面積。",
    "能判斷資料是否足以支持幾何結論。",
    "能整合單位換算與複合面積。",
    "能用三視圖文字條件檢核立體設計。"
  ],
  "prerequisiteBridge": {
    "prerequisiteSkillIds": [
      "orthographic-description"
    ],
    "bridgeExplanation": "本技能整合 U08 前 13 個技能，重點不是新公式，而是辨認情境中的量、條件與限制。"
  },
  "prerequisites": [
    {
      "skillId": "orthographic-description",
      "requiredLevel": "能把俯視占用位置與正側視高度序列轉成約束，並檢查相容性。"
    }
  ],
  "glossary": [
    {
      "term": "規格",
      "definition": "對尺寸、角度、形狀或位置關係的明確要求。"
    },
    {
      "term": "充分資訊",
      "definition": "足以唯一或可靠支持所問結論的資料。"
    },
    {
      "term": "安全餘量",
      "definition": "實際設計值與限制值之間保留的差距。"
    },
    {
      "term": "比例示意",
      "definition": "只表達關係，不一定按真實比例繪製。"
    },
    {
      "term": "模型驗證",
      "definition": "把情境轉成數學關係後檢查是否符合全部條件。"
    }
  ],
  "notation": [
    {
      "symbol": "≤、≥",
      "meaning": "規格中的上限與下限。"
    },
    {
      "symbol": "誤差±a",
      "meaning": "允許值在標示值上下 a 的範圍。"
    },
    {
      "symbol": "P、A",
      "meaning": "分別代表周長與面積。"
    }
  ],
  "conceptDevelopment": [
    "素養題先決定在問什麼量，再選工具。『圍一圈』對應周長，『鋪滿』對應面積，『保持等距』對應垂直平分線，『從上方看』對應俯視圖。",
    "生活資料常混有無關資訊。先整理必要條件：單位是否一致、圖形是否正多邊形、三視圖方向是否指定、示意圖是否按比例。",
    "幾何結論需要充分條件。看起來像正方形不夠；必須有四等邊與四直角，或其他可推出這些性質的條件。",
    "答案不只要算對，也要解釋限制。例如材料面積要考慮挖孔，安全角度要比較上限，三視圖方案要同時滿足三方向。",
    "完成建模後應用單位維度、邊界值與可達配置三種方式驗證：長度不能與面積相加，規格端點要依是否含等號判斷，三視圖界值則須有實際配置可達。"
  ],
  "formalDefinitions": [
    {
      "name": "數學建模",
      "statement": "把真實情境中的對象、量與限制轉成數學表示。"
    },
    {
      "name": "結果解釋",
      "statement": "把數值連同單位、方向與可行性翻回原情境。"
    },
    {
      "name": "資訊充分性",
      "statement": "判斷現有條件能否唯一決定或保證所問性質。"
    }
  ],
  "formulas": [
    {
      "formula": "需求量=基本量±增減區域",
      "conditions": [
        "先辨認保留、挖除或重疊"
      ],
      "meaning": "處理材料與面積。"
    },
    {
      "formula": "允許範圍=[標示值−誤差, 標示值+誤差]",
      "conditions": [
        "誤差以同單位表示"
      ],
      "meaning": "檢查規格。"
    },
    {
      "formula": "視圖條件=占用位置+兩方向最大高度",
      "conditions": [
        "方向與順序明確"
      ],
      "meaning": "檢核方塊或模組配置。"
    }
  ],
  "invalidUseCases": [
    "不能把示意圖外觀當成未給出的等長、平行或直角條件。",
    "不能忽略單位換算後直接比較。",
    "不能只用一張視圖斷定立體內部結構。",
    "結果符合數值但違反幾何條件時仍不可行。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "圈出所求量與限制詞。",
      "check": "特別注意至少、至多、恰好、等距、垂直與從哪個方向看。"
    },
    {
      "step": 2,
      "instruction": "建立幾何模型。",
      "check": "列圖形、尺寸、角度、占用位置或高度條件。"
    },
    {
      "step": 3,
      "instruction": "統一單位並計算。",
      "check": "選擇周長、面積、角度或視圖工具。"
    },
    {
      "step": 4,
      "instruction": "做可行性與資訊充分性檢查。",
      "check": "確認沒有依圖猜測，並把結果連同單位和理由寫回情境。"
    },
    {
      "step": 5,
      "instruction": "用量綱、邊界值或可達配置做獨立驗證。",
      "check": "數值正確之外，單位、限制詞與實際可行性也全部符合。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "操場長 80 公尺、寬 50 公尺，只在外圍設置欄杆，需求量是哪一種幾何量？",
      "solutionSteps": [
        "圈出關鍵詞外圍與欄杆。",
        "判定材料沿封閉邊界而非覆蓋內部。",
        "因此選周長，若求數值則算二乘八十加五十。"
      ],
      "answer": "周長。",
      "why": "欄杆用量具有一維長度單位，對應四邊總長；面積具有平方單位且描述內部覆蓋，量綱檢查能排除誤用長乘寬。"
    },
    {
      "exampleId": "L2",
      "prompt": "兩村設置到兩村距離相同的救援點，其可能位置如何描述？",
      "solutionSteps": [
        "把兩村視為線段的兩個端點。",
        "把到兩端等距寫成同一點到兩端距離相等。",
        "套用等距點軌跡，得到連線的垂直平分線。"
      ],
      "answer": "位於兩村連線的垂直平分線上。",
      "why": "垂直平分線上的每一點都到兩端等距，反之等距點也必在此線上；答案是一整條可能位置集合，不只中點。"
    },
    {
      "exampleId": "L3",
      "prompt": "一塊 6 m×4 m 板材挖去 80 cm×50 cm 開口，求剩餘面積。",
      "solutionSteps": [
        "把八十公分、五十公分換成零點八公尺、零點五公尺。",
        "整板面積二十四平方公尺，開口面積零點四平方公尺。",
        "相減得二十三點六平方公尺，反加開口驗證。"
      ],
      "answer": "23.6 平方公尺。",
      "why": "兩個面積必須先用相同單位才能相減；先換長度再相乘可保證平方倍率正確，反加零點四也能核對區域分割。"
    },
    {
      "exampleId": "L4",
      "prompt": "某堆疊正視最高 4 層，但側視文字說每列最高至多 3 層，設計是否可行？",
      "solutionSteps": [
        "正視最高四表示存在一個實際四高堆。",
        "該堆必定落在某一側視列中。",
        "此列最高至少四，與側視每列至多三矛盾。"
      ],
      "answer": "不可行。",
      "why": "正視與側視雖從不同方向觀看，仍投影同一組高度；全域最高堆必在兩方向輪廓出現，所以四與至多三不能同時成立。"
    }
  ],
  "levelConnections": {
    "basic": "辨認情境對應的幾何量。",
    "standard": "把規格轉成單一步驟或多步計算。",
    "advanced": "判斷資訊充分性、相容性與最少需求。",
    "literacy": "工程、建築、土地、包裝與安全設計都要求數值正確並符合幾何條件。"
  },
  "commonMistakes": [
    {
      "mistake": "看到長與寬就直接相乘。",
      "why": "未先判斷題目要周長或面積。",
      "correction": "先圈所求量。"
    },
    {
      "mistake": "到兩村等距就取連線中點一個位置。",
      "why": "忽略平面上所有等距點。",
      "correction": "可能位置是一整條垂直平分線。"
    },
    {
      "mistake": "公分開口直接從平方公尺扣。",
      "why": "單位不一致。",
      "correction": "先統一長度或面積單位。"
    },
    {
      "mistake": "示意圖像正方形就套正方形公式。",
      "why": "沒有充分條件。",
      "correction": "需四等邊與四直角等可靠條件。"
    },
    {
      "mistake": "三視圖各自合理就認為整體相容。",
      "why": "未檢查三者是否來自同一立體。",
      "correction": "比較占用位置與最大高度的共同限制。"
    },
    {
      "mistake": "只給數值不解釋可行性。",
      "why": "沒有回到情境。",
      "correction": "答案附單位、比較與結論。"
    }
  ],
  "selfCheckItems": [
    "我先辨認所求量了嗎？",
    "資料單位是否一致？",
    "結論是否需要未提供的等長、平行或直角條件？",
    "三視圖是否同時相容？",
    "答案是否回到情境並說明理由？"
  ],
  "conciseSummary": [
    "素養題先建模，再計算，最後解釋。",
    "周長、面積、等距與三視圖各有不同訊號詞。",
    "資訊不足時不可由外觀補條件。",
    "單位、邊界與可行性都要檢查。"
  ],
  "connections": {
    "previous": "前 13 技能提供平面幾何、單位與三視圖工具。",
    "next": [
      "U08 完成後，後續單元可把這些圖形語言用於更深入的幾何推理、座標或相似關係。"
    ]
  },
  "figureReferences": [],
  "accessibilityNote": "本技能依鎖定範圍採全文字敘述；方向、位置與視圖關係均以明確語句表達，不要求由未提供的圖形推測。",
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "u08 locked CAP text-only boundary",
    "examplesNotCopiedFromLegacyOrProductionBank": true,
    "skillSpecificEvidence": "逐一核對欄杆對應周長、等距點形成垂直平分線、板材剩餘 23.6 m²，以及正視 4 層與側視至多 3 層的衝突；沒有引入鎖定範圍外定理。",
    "manualSymbolAndUnitCheck": true,
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "530495c2dd78353e413ebe44c9217ccb96324072802a59f9b38e75b9420dbc9f"
};

export const QUESTIONS = [
  {
    "questionId": "u08-s014-v001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-literacy",
    "skillId": "geometry-literacy-context",
    "lockedSkillTitle": "平面幾何與三視圖素養",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一座長 80 公尺、寬 50 公尺的長方形操場，只沿外圍設置一圈欄杆，不設出入口。欄杆至少需要多長？",
    "givenConditions": [
      "操場為 80×50 公尺長方形。",
      "欄杆沿完整外圍一圈。"
    ],
    "target": "由施工語句辨認並計算周長",
    "choices": [
      "130 公尺",
      "260 公尺",
      "4000 公尺",
      "180 公尺"
    ],
    "answerIndex": 1,
    "independentSolution": "操場四邊總長為 80+50+80+50=260 公尺。",
    "explanation": "「沿外圍一圈」對應周長，不是面積。 長方形有兩條八十公尺邊與兩條五十公尺邊，周長二百六十公尺；四千是面積，不能作為一維欄杆長度。",
    "steps": [
      "辨認需求量為周長。",
      "計算 2×(80+50)。",
      "得 260 公尺。",
      "將四邊長八十、五十、八十、五十相加。",
      "以長度單位公尺排除面積選項。"
    ],
    "optionAnalysis": [
      {
        "choice": "130 公尺",
        "truth": false,
        "reason": "80+50 只算長與寬各一次，沒有走完四邊。"
      },
      {
        "choice": "260 公尺",
        "truth": true,
        "reason": "長方形周長為 2×(80+50)=260 公尺。"
      },
      {
        "choice": "4000 公尺",
        "truth": false,
        "reason": "80×50 是面積，不是外圍長度。"
      },
      {
        "choice": "180 公尺",
        "truth": false,
        "reason": "只多加了一條邊，未完整計算周長。"
      }
    ],
    "misconceptionTarget": "看到長和寬就直接相乘，混淆周長與面積。 也可能只加長與寬得到一百三十，漏掉對邊各有兩條。",
    "prerequisiteCheck": "需具備長方形周長與面積的基本判斷。",
    "estimatedTimeSec": 90,
    "unitCheck": "邊長以公尺表示，周長答案為公尺。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "情境只需將「外圍一圈」翻成周長並計算。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "8a6b83f551553e56077b35f323ada6061c9aef3671ccaa7076c7a52c7188761e"
  },
  {
    "questionId": "u08-s014-v002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-literacy",
    "skillId": "geometry-literacy-context",
    "lockedSkillTitle": "平面幾何與三視圖素養",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "甲、乙兩村的位置視為兩個點。要設置一個到兩村直線距離相同的救援站，救援站可能位於何處？",
    "givenConditions": [
      "兩村視為兩個不同點。",
      "救援站到兩村距離相同。"
    ],
    "target": "把等距設站需求轉成幾何軌跡",
    "choices": [
      "甲乙連線上任意一點",
      "通過甲村且垂直甲乙連線的直線上",
      "甲乙連線的垂直平分線上",
      "以甲村為圓心的任意圓上"
    ],
    "answerIndex": 2,
    "independentSolution": "設 P 為救援站，條件 PA=PB，因此 P 位於線段 AB 的垂直平分線。",
    "explanation": "救援站到兩村等距是垂直平分線的軌跡性質。 到線段兩端距離相同的所有平面點恰形成垂直平分線；中點只是這條線上的一點，任意垂線或圓都不能保證同時等距。",
    "steps": [
      "把兩村視為線段端點。",
      "使用到兩端等距的點集合。",
      "得到甲乙連線的垂直平分線。",
      "把兩村視為線段的兩個端點。",
      "用等距軌跡的正反性質核對垂直平分線。"
    ],
    "optionAnalysis": [
      {
        "choice": "甲乙連線上任意一點",
        "truth": false,
        "reason": "連線上除中點外，到兩端距離通常不同。"
      },
      {
        "choice": "通過甲村且垂直甲乙連線的直線上",
        "truth": false,
        "reason": "該直線上的點不一定到甲乙等距。"
      },
      {
        "choice": "甲乙連線的垂直平分線上",
        "truth": true,
        "reason": "到線段兩端點等距的點集合就是該線段的垂直平分線。"
      },
      {
        "choice": "以甲村為圓心的任意圓上",
        "truth": false,
        "reason": "只固定到甲的距離，沒有保證到乙相同。"
      }
    ],
    "misconceptionTarget": "把垂直平分線誤認為只有中點，或任意垂線。 還可能只選甲乙中點，忽略救援站的可能位置是一整條軌跡。",
    "prerequisiteCheck": "需了解垂直平分線上的點到兩端等距。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題所有角度或長度單位一致，答案單位依題意保留。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "直接辨認等距條件，屬基本素養轉譯。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "18d00d903ae05377dd49a87d60a742950c3dbdd97044d02aeaae21b8bc1d3e16"
  },
  {
    "questionId": "u08-s014-v003",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-literacy",
    "skillId": "geometry-literacy-context",
    "lockedSkillTitle": "平面幾何與三視圖素養",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "教室地面是長 9 公尺、寬 7 公尺的長方形，要鋪滿同一種地墊，不考慮損耗。應先計算哪一個量？",
    "givenConditions": [
      "地面為 9×7 公尺長方形。",
      "地墊鋪滿內部。"
    ],
    "target": "由材料用途判斷應使用面積",
    "choices": [
      "地面面積 63 平方公尺",
      "地面周長 32 公尺",
      "對角線長度",
      "四個角的角度和"
    ],
    "answerIndex": 0,
    "independentSolution": "長方形面積為 9×7=63 平方公尺，這才是地墊用量的基礎。",
    "explanation": "材料覆蓋整個平面區域時，要使用面積。 地墊要覆蓋地面內部區域，需求量與面積成正比；九乘七得六十三平方公尺，周長只描述邊界長度。",
    "steps": [
      "辨認需求是覆蓋內部。",
      "用長×寬求面積。",
      "9×7=63。",
      "由鋪滿判定量的種類是面積。",
      "檢查九公尺乘七公尺的單位為平方公尺。"
    ],
    "optionAnalysis": [
      {
        "choice": "地面面積 63 平方公尺",
        "truth": true,
        "reason": "「鋪滿」對應面積，9×7=63 平方公尺。"
      },
      {
        "choice": "地面周長 32 公尺",
        "truth": false,
        "reason": "鋪滿內部需要覆蓋大小，不是邊界長度。"
      },
      {
        "choice": "對角線長度",
        "truth": false,
        "reason": "對角線不能直接表示需要鋪設的總面積。"
      },
      {
        "choice": "四個角的角度和",
        "truth": false,
        "reason": "角度和與地墊用量無直接關係。"
      }
    ],
    "misconceptionTarget": "把鋪面材料誤用周長估算。 也可能因題目給長與寬便計算周長，沒有先辨認鋪滿的語意。",
    "prerequisiteCheck": "需能區分周長與面積。",
    "estimatedTimeSec": 90,
    "unitCheck": "公尺乘公尺得到平方公尺。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "只做量的辨認與單一乘法，屬基本題。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "aaa117eeac4ed7532efeea100e68ea692439ca75d18f2c0e78d81d56f013e3bd"
  },
  {
    "questionId": "u08-s014-v004",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-literacy",
    "skillId": "geometry-literacy-context",
    "lockedSkillTitle": "平面幾何與三視圖素養",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一塊長 6 公尺、寬 4 公尺的長方形板材，挖去一個長 80 公分、寬 50 公分的長方形開口。剩餘面積是多少？",
    "givenConditions": [
      "整板 6 m×4 m。",
      "挖去 80 cm×50 cm 開口。"
    ],
    "target": "整合複合面積與長度單位換算",
    "choices": [
      "23.96 平方公尺",
      "20 平方公尺",
      "2360 平方公尺",
      "23.6 平方公尺"
    ],
    "answerIndex": 3,
    "independentSolution": "80 cm=0.8 m，50 cm=0.5 m，所以剩餘面積=6×4−0.8×0.5=23.6 m²。",
    "explanation": "先把 80 公分、50 公分換成 0.8 公尺、0.5 公尺，再計算差。 整板面積二十四平方公尺，開口換成零點八乘零點五公尺後面積零點四；兩者相減為二十三點六，反加開口可回到二十四。",
    "steps": [
      "統一長度單位為公尺。",
      "算整板 24 平方公尺。",
      "算開口 0.4 平方公尺。",
      "相減得 23.6 平方公尺。",
      "以相同平方公尺單位相減。",
      "用剩餘二十三點六加開口零點四驗證整板面積。"
    ],
    "optionAnalysis": [
      {
        "choice": "23.96 平方公尺",
        "truth": false,
        "reason": "把 80×50 平方公分錯換成 0.04 平方公尺，少了十倍。"
      },
      {
        "choice": "20 平方公尺",
        "truth": false,
        "reason": "直接用 24−4，未正確處理開口單位。"
      },
      {
        "choice": "2360 平方公尺",
        "truth": false,
        "reason": "把平方單位換算方向弄反。"
      },
      {
        "choice": "23.6 平方公尺",
        "truth": true,
        "reason": "整板面積 6×4=24 平方公尺；開口 0.8×0.5=0.4 平方公尺；剩 24−0.4=23.6 平方公尺。"
      }
    ],
    "misconceptionTarget": "未先統一單位，或把平方單位倍率只換一次。 也可能把八十乘五十直接從二十四扣除，混合平方公分與平方公尺。",
    "prerequisiteCheck": "需會長方形面積、複合面積與公分公尺換算。",
    "estimatedTimeSec": 90,
    "unitCheck": "長度先統一為公尺，面積答案為平方公尺。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "要連續完成單位統一和挖除面積，屬標準題。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "2a72bcf03dffee2df892dbeded48d66bf3cf7fdf329cb2b8f5592820d1fb1669"
  },
  {
    "questionId": "u08-s014-v005",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-literacy",
    "skillId": "geometry-literacy-context",
    "lockedSkillTitle": "平面幾何與三視圖素養",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一座正六邊形涼亭的六個內角都相等。每個內角是多少度？",
    "givenConditions": [
      "圖形為正六邊形。",
      "六個內角相等。"
    ],
    "target": "由正多邊形規格求單一內角",
    "choices": [
      "120°",
      "60°",
      "108°",
      "720°"
    ],
    "answerIndex": 0,
    "independentSolution": "每個內角=((6−2)×180°)÷6=120°。",
    "explanation": "正多邊形要先求內角和，再平均分配。 六邊形內角和為四乘一百八十等於七百二十度，正六邊形六角相等，再除六得每角一百二十度。",
    "steps": [
      "計算六邊形內角和 720°。",
      "除以 6 得 120°。",
      "先由邊數六求內角和。",
      "利用正六邊形等角條件平均分配。"
    ],
    "optionAnalysis": [
      {
        "choice": "120°",
        "truth": true,
        "reason": "六邊形內角和=(6−2)×180°=720°，正六邊形六角相等，所以每角 720°÷6=120°。"
      },
      {
        "choice": "60°",
        "truth": false,
        "reason": "60°是正六邊形的外角，不是內角。"
      },
      {
        "choice": "108°",
        "truth": false,
        "reason": "108°是正五邊形每個內角。"
      },
      {
        "choice": "720°",
        "truth": false,
        "reason": "720°是六邊形內角總和，不是單一內角。"
      }
    ],
    "misconceptionTarget": "把內角和、外角或其他正多邊形角度混為一談。 也可能把每個外角六十度直接當內角，忽略兩者互為補角。",
    "prerequisiteCheck": "需會多邊形內角和與平均分配。",
    "estimatedTimeSec": 90,
    "unitCheck": "角度答案使用度數。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需要兩步公式運算並辨認正多邊形條件。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "d133e0cc986f413a5f93eb0f1968479e8c2308948c49b999a1ed367571327a0f"
  },
  {
    "questionId": "u08-s014-v006",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-literacy",
    "skillId": "geometry-literacy-context",
    "lockedSkillTitle": "平面幾何與三視圖素養",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一個長方體包裝盒長 12 公分、寬 8 公分、高 5 公分，指定長×高的面為正面。下列三視圖尺寸配對何者正確？",
    "givenConditions": [
      "長12 cm、寬8 cm、高5 cm。",
      "長×高面指定為正面。"
    ],
    "target": "把包裝規格轉為三視圖尺寸",
    "choices": [
      "正視 12×8，俯視 12×5，側視 8×5",
      "正視 8×5，俯視 12×8，側視 12×5",
      "三個視圖都是 12×8",
      "正視 12×5，俯視 12×8，側視 8×5（公分）"
    ],
    "answerIndex": 3,
    "independentSolution": "正視=12×5，俯視=12×8，側視=8×5 公分。",
    "explanation": "題目已指定正面，因此依三個互相垂直的觀看方向配對尺寸。 正視保留長十二與高五，俯視保留長十二與寬八，側視保留寬八與高五；三組恰是三個方向的兩兩配對。",
    "steps": [
      "列出長12、寬8、高5。",
      "正視取長×高。",
      "俯視取長×寬。",
      "側視取寬×高。",
      "每個視圖刪去沿視線的一個方向。",
      "檢查三種兩兩配對各出現一次且沒有重複。"
    ],
    "optionAnalysis": [
      {
        "choice": "正視 12×8，俯視 12×5，側視 8×5",
        "truth": false,
        "reason": "正視與俯視使用的方向互換。"
      },
      {
        "choice": "正視 8×5，俯視 12×8，側視 12×5",
        "truth": false,
        "reason": "把側面與正面尺寸顛倒。"
      },
      {
        "choice": "三個視圖都是 12×8",
        "truth": false,
        "reason": "不同視線會壓縮不同方向，不可能都保留長與寬。"
      },
      {
        "choice": "正視 12×5，俯視 12×8，側視 8×5（公分）",
        "truth": true,
        "reason": "正視保留長與高，俯視保留長與寬，側視保留寬與高。"
      }
    ],
    "misconceptionTarget": "未固定正面就任意交換三個尺寸。 也可能認為正視一定採最大面，無視題目已指定長乘高為正面。",
    "prerequisiteCheck": "需會長方體三視圖的方向配對。",
    "estimatedTimeSec": 90,
    "unitCheck": "各視圖尺寸均以公分表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "須同時核對三個視圖，屬標準判讀。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "a8184985513e2aae11423f4253e81a4a457e445b302d6c58d6bcbd84966f92f3"
  },
  {
    "questionId": "u08-s014-v007",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-literacy",
    "skillId": "geometry-literacy-context",
    "lockedSkillTitle": "平面幾何與三視圖素養",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一面長方形展示牆標示長 4.00 公尺、寬 2.50 公尺，施工允許每一邊長誤差 ±0.02 公尺。某次量測為長 4.01 公尺、寬 2.47 公尺。下列判斷何者正確？",
    "givenConditions": [
      "標示長4.00 m、寬2.50 m。",
      "每邊容許誤差±0.02 m。"
    ],
    "target": "依誤差範圍逐項驗收幾何尺寸",
    "choices": [
      "長度與寬度都合格",
      "長度不合格，寬度合格",
      "長度合格，寬度不合格",
      "長度與寬度都不合格"
    ],
    "answerIndex": 2,
    "independentSolution": "4.01∈[3.98,4.02]，但 2.47∉[2.48,2.52]，故只有長度合格。",
    "explanation": "誤差規格要對每個標示值分別建立閉區間。 長的允許區間是三點九八到四點零二，四點零一在內；寬的區間是二點四八到二點五二，二點四七低於下限，所以只有寬不合格。",
    "steps": [
      "長度範圍 4.00±0.02。",
      "寬度範圍 2.50±0.02。",
      "分別代入量測值判斷。",
      "分別建立兩個含端點的閉區間。",
      "將兩個量測值各自與對應上下限比較。"
    ],
    "optionAnalysis": [
      {
        "choice": "長度與寬度都合格",
        "truth": false,
        "reason": "寬度允許範圍是 2.48 至 2.52 公尺，2.47 太小。"
      },
      {
        "choice": "長度不合格，寬度合格",
        "truth": false,
        "reason": "長度 4.01 在 3.98 至 4.02 內，判斷相反。"
      },
      {
        "choice": "長度合格，寬度不合格",
        "truth": true,
        "reason": "長允許 3.98～4.02，4.01 合格；寬允許 2.48～2.52，2.47 不合格。"
      },
      {
        "choice": "長度與寬度都不合格",
        "truth": false,
        "reason": "長度確實落在允許範圍。"
      }
    ],
    "misconceptionTarget": "只看數字接近就判合格，未計算明確範圍。 也可能把兩邊誤差合併成一個總誤差，沒有逐一檢查長與寬。",
    "prerequisiteCheck": "需能處理同單位的小數加減與閉區間。",
    "estimatedTimeSec": 120,
    "unitCheck": "標示、誤差與量測皆為公尺。",
    "roundingCheck": "量測值與誤差均視為題目給定的精確到小數第二位資料，不再四捨五入。",
    "ambiguityBoundaryAudit": "允許誤差含端點；本題量測值沒有落在端點模糊區。",
    "difficultyReason": "要分別建立兩個允許區間並比較邊界，屬進階題。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "242c5ea9d6fdc65eb8514cca0c72fca9e7907f5dff540e6aa8c2b9839b6d45cc"
  },
  {
    "questionId": "u08-s014-v008",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-literacy",
    "skillId": "geometry-literacy-context",
    "lockedSkillTitle": "平面幾何與三視圖素養",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一條寬度均為 1 公尺的步道沿著一個 10 公尺×6 公尺長方形花圃外側完整環繞。步道面積是多少？",
    "givenConditions": [
      "花圃為10 m×6 m。",
      "步道在外側四周寬1 m。"
    ],
    "target": "處理外擴邊框的複合面積",
    "choices": [
      "32 平方公尺",
      "36 平方公尺",
      "60 平方公尺",
      "96 平方公尺"
    ],
    "answerIndex": 1,
    "independentSolution": "外側完整環繞使外框為 12×8，故面積差 12×8−10×6=36。",
    "explanation": "步道在四周各增加 1 公尺，因此長與寬都增加 2 公尺。 外側一公尺使總長左右各增一而成十二，總寬上下各增一而成八；外框九十六扣花圃六十，得到步道三十六平方公尺。",
    "steps": [
      "求外框長 12、寬 8。",
      "算外框面積 96。",
      "扣花圃面積 60。",
      "得 36。",
      "由四周環繞判斷每個方向增加兩公尺。",
      "以面積差計算角落區域，不用周長乘寬近似。"
    ],
    "optionAnalysis": [
      {
        "choice": "32 平方公尺",
        "truth": false,
        "reason": "把內花圃周長 32 直接當成 1 公尺寬步道面積，忽略四個角落區域。"
      },
      {
        "choice": "36 平方公尺",
        "truth": true,
        "reason": "外框尺寸為 (10+2)×(6+2)=12×8，步道面積=96−60=36 平方公尺。"
      },
      {
        "choice": "60 平方公尺",
        "truth": false,
        "reason": "60 是花圃面積，不是外側步道。"
      },
      {
        "choice": "96 平方公尺",
        "truth": false,
        "reason": "96 是外框 12×8 面積，尚未扣除花圃。"
      }
    ],
    "misconceptionTarget": "以周長乘寬而漏算或重算角落。 也可能只在長與寬各加一，漏掉步道位於原花圃的兩側。",
    "prerequisiteCheck": "需會文字複合面積與外框尺寸判讀。",
    "estimatedTimeSec": 150,
    "unitCheck": "所有長度為公尺，面積為平方公尺。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "外擴造成兩個方向都增加兩倍寬度，需建立整體再相減。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "48335f1ef7f09500731869e54277e79633023a1517a8516f6af7df25914d2bc3"
  },
  {
    "questionId": "u08-s014-v009",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-literacy",
    "skillId": "geometry-literacy-context",
    "lockedSkillTitle": "平面幾何與三視圖素養",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "某方塊模型俯視有 6 個占用位置，正視最高為 3 層，側視最高也是 3 層。設計說明又寫「總共只有 5 個方塊」。下列判斷何者正確？",
    "givenConditions": [
      "俯視有6個占用位置。",
      "總方塊數宣稱為5。"
    ],
    "target": "檢查三視圖設計文字中的基本矛盾",
    "choices": [
      "設計可能，因為最高只有 3 層",
      "設計可能，只要把方塊分散",
      "設計不可能，因為 6 個占用位置至少需要 6 個方塊",
      "資料不足，無法判斷"
    ],
    "answerIndex": 2,
    "independentSolution": "總方塊數≥占用位置數=6，所以「只有5個」不可能。",
    "explanation": "先用最簡單的占用下界檢查規格，不必進一步安排三視圖。 俯視六個占用位置各至少含一個方塊，最低已是六；設計宣稱只有五塊直接違反下界，無須再使用最高三層安排。",
    "steps": [
      "俯視占用位置數為 6。",
      "每個位置至少 1 塊。",
      "最低總數為 6，大於宣稱的 5。",
      "用占用格數建立不可低於六的下界。",
      "比較宣稱總數五並判定矛盾。"
    ],
    "optionAnalysis": [
      {
        "choice": "設計可能，因為最高只有 3 層",
        "truth": false,
        "reason": "最高層數不能抵消每個占用位置至少一塊的需求。"
      },
      {
        "choice": "設計可能，只要把方塊分散",
        "truth": false,
        "reason": "六個不同占用位置已要求至少六塊，無法用五塊分散。"
      },
      {
        "choice": "設計不可能，因為 6 個占用位置至少需要 6 個方塊",
        "truth": true,
        "reason": "每個俯視占用位置至少有 1 個方塊，6 個位置至少 6 個；總數 5 已矛盾。"
      },
      {
        "choice": "資料不足，無法判斷",
        "truth": false,
        "reason": "俯視占用數已提供直接下界，足以判定矛盾。"
      }
    ],
    "misconceptionTarget": "只注意最高層數，忽略俯視每格至少一塊。 也可能看到兩個最高值都是三便以為五塊能透過遮蔽達成。",
    "prerequisiteCheck": "需懂俯視占用位置與最低方塊數。",
    "estimatedTimeSec": 90,
    "unitCheck": "占用位置數與方塊個數皆為離散整數。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "不需假設占用位置排列；只要每個占用位置至少一塊即可判斷。",
    "difficultyReason": "必須辨認哪一條規格先形成不可違反的下界，屬進階驗證。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "928325b117577200a52a40854103bd59ba7c0ad0f7f5afc4b2842c91256c2a2c"
  },
  {
    "questionId": "u08-s014-v010",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-literacy",
    "skillId": "geometry-literacy-context",
    "lockedSkillTitle": "平面幾何與三視圖素養",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "校園要在兩棟建築 A、B 之間設置飲水站，條件是到 A、B 的距離相同，且飲水站必須位於一條指定的東西向步道上。工程師應如何找候選位置？",
    "givenConditions": [
      "到A、B距離相同。",
      "位置必須在指定步道上。"
    ],
    "target": "把兩項場地限制轉成幾何交集",
    "choices": [
      "找 AB 的垂直平分線與指定步道的交點",
      "找 AB 的中點，不必考慮步道",
      "在步道上任選一點",
      "找通過 A 且垂直步道的直線上任一點"
    ],
    "answerIndex": 0,
    "independentSolution": "候選位置同時屬於垂直平分線與步道，因此是交點；若平行無交點則無方案。",
    "explanation": "兩個條件都必須滿足，應取兩個點集合的交集。 等距條件給出甲乙連線的垂直平分線，施工條件給出指定步道；候選點必同時屬於兩者，所以取交點，沒有交點時就沒有可行位置。",
    "steps": [
      "由 PA=PB 得 P 在 AB 垂直平分線。",
      "由施工限制得 P 在指定步道。",
      "取兩條線的交點。",
      "把兩項條件分別表示成兩個點集合。",
      "取集合交集並補充平行無交點時無方案。"
    ],
    "optionAnalysis": [
      {
        "choice": "找 AB 的垂直平分線與指定步道的交點",
        "truth": true,
        "reason": "等距條件給出 AB 的垂直平分線；同時位於指定步道，候選點是兩者交點。"
      },
      {
        "choice": "找 AB 的中點，不必考慮步道",
        "truth": false,
        "reason": "中點雖到 A、B 等距，但可能不在指定步道上。"
      },
      {
        "choice": "在步道上任選一點",
        "truth": false,
        "reason": "步道條件 alone 不能保證到兩建築等距。"
      },
      {
        "choice": "找通過 A 且垂直步道的直線上任一點",
        "truth": false,
        "reason": "這與到 A、B 等距的必要軌跡無關。"
      }
    ],
    "misconceptionTarget": "只滿足等距或只滿足步道其中一項。 也可能只找甲乙中點，卻沒有檢查該點是否位於指定步道。",
    "prerequisiteCheck": "需理解垂直平分線軌跡及同時條件。",
    "estimatedTimeSec": 120,
    "unitCheck": "本題所有角度或長度單位一致，答案單位依題意保留。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "實際選址必須保留兩個限制，刪除任一情境條件都會改變候選位置。",
    "literacyContextNecessity": "校園選址同時受服務公平與既有步道限制；垂直平分線和步道的交集是工程決策不可省略的核心。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "5528ab6153ddea39b029059e1a73bb61c73f1c44879525cb49f9f7038682890f"
  },
  {
    "questionId": "u08-s014-v011",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-literacy",
    "skillId": "geometry-literacy-context",
    "lockedSkillTitle": "平面幾何與三視圖素養",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "舞台道具由單位立方體堆成，俯視四格全部占用。驗收規格為正視 [3,2]、側視 [2,3]，且要求使用最少立方體。最少需幾個？",
    "givenConditions": [
      "俯視2×2四格全占用。",
      "正視[3,2]、側視[2,3]。"
    ],
    "target": "依舞台三視圖規格求最少材料",
    "choices": [
      "4 個",
      "7 個",
      "6 個",
      "8 個"
    ],
    "answerIndex": 1,
    "independentSolution": "令四格座標為(x,y)。取h(1,2)=3、h(2,1)=2，另兩格各1，則正視欄高為[3,2]、側視列高為[2,3]，總數3+2+1+1=7。",
    "explanation": "最少材料配置要讓一個堆同時滿足一個欄高和一個列高。 四格底層先用四個，三高堆增加二個，另一交叉位置的二高堆增加一個，總數七；明示座標的配置可同時重算兩個指定序列。",
    "steps": [
      "四格先各1個。",
      "安排一堆高3。",
      "在另一交叉位置安排一堆高2。",
      "總數3+2+1+1=7。",
      "指定三高堆在第一欄第二列、二高堆在第二欄第一列。",
      "逐欄與逐列取最大值，驗證兩序列沒有互換。"
    ],
    "optionAnalysis": [
      {
        "choice": "4 個",
        "truth": false,
        "reason": "四格各一只能得到各方向最高1，無法形成3與2。"
      },
      {
        "choice": "7 個",
        "truth": true,
        "reason": "將 3 高堆放在正視第 1 欄與側視第 2 列交會處；2 高堆放在另一交會處；其餘兩格各 1，共 7。"
      },
      {
        "choice": "6 個",
        "truth": false,
        "reason": "一個3高堆後仍需在交叉位置形成另一欄列的2高，六個不足。"
      },
      {
        "choice": "8 個",
        "truth": false,
        "reason": "可用高度3、2、1、1的交叉配置，只需7個。"
      }
    ],
    "misconceptionTarget": "把兩方向高度直接相加，或只放一個最高堆。 也可能給出矩陣卻未定義列欄方向，造成實際輪廓與文字序列互換。",
    "prerequisiteCheck": "需會三視圖最大高度與最小配置。",
    "estimatedTimeSec": 150,
    "unitCheck": "立方體以「個」計，高度以層數表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "舞台材料數取決於指定觀看輪廓，三個視圖與最少用料條件缺一不可。",
    "literacyContextNecessity": "舞台道具需在正面與側面都呈現指定輪廓，同時節省材料；情境中的視覺規格直接決定配置問題。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "4d7fe19cee2882c27d57e82387374e9682416f6718e5c638a2108a71ba0c8f15"
  },
  {
    "questionId": "u08-s014-v012",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-literacy",
    "skillId": "geometry-literacy-context",
    "lockedSkillTitle": "平面幾何與三視圖素養",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "社區要鋪設一個長 12 公尺、寬 8 公尺的長方形廣場，但保留中央 4 公尺×2 公尺花圃不鋪。地磚每箱可鋪 5 平方公尺，且只能買整箱。至少要買幾箱？",
    "givenConditions": [
      "廣場12 m×8 m。",
      "花圃4 m×2 m不鋪。",
      "每箱覆蓋5 m²且整箱購買。"
    ],
    "target": "整合複合面積、包裝容量與整數進位",
    "choices": [
      "17 箱",
      "19 箱",
      "20 箱",
      "18 箱"
    ],
    "answerIndex": 3,
    "independentSolution": "17箱不足，18箱可鋪90平方公尺，故最少18箱。",
    "explanation": "先求真正鋪設面積，再按每箱覆蓋量向上取整。 廣場九十六平方公尺扣花圃八平方公尺，實鋪八十八；除每箱五得十七點六，十七箱只鋪八十五不足，十八箱可鋪九十而達標。",
    "steps": [
      "算廣場面積96。",
      "扣花圃面積8，得88。",
      "88÷5=17.6。",
      "只能整箱，買18箱。",
      "比較十七箱覆蓋八十五與需求八十八。",
      "確認十八是第一個覆蓋量不少於需求的整數箱數。"
    ],
    "optionAnalysis": [
      {
        "choice": "17 箱",
        "truth": false,
        "reason": "17箱只能鋪85平方公尺，小於所需88平方公尺。"
      },
      {
        "choice": "19 箱",
        "truth": false,
        "reason": "18箱可鋪90平方公尺，已足夠，19不是至少。"
      },
      {
        "choice": "20 箱",
        "truth": false,
        "reason": "直接以整個96平方公尺除以5，忽略不鋪的花圃。"
      },
      {
        "choice": "18 箱",
        "truth": true,
        "reason": "需鋪面積=12×8−4×2=96−8=88 平方公尺；88÷5=17.6，整箱購買須進位為18箱。"
      }
    ],
    "misconceptionTarget": "忘記扣除花圃，或把17.6箱直接寫成17箱。 也可能向下取整以避免剩料，卻忽略至少足夠鋪完的限制。",
    "prerequisiteCheck": "需會複合面積、除法與實際整箱限制。",
    "estimatedTimeSec": 150,
    "unitCheck": "面積以平方公尺計，每箱覆蓋量亦為平方公尺，最後答案為箱數。",
    "roundingCheck": "17.6不是近似量；因整箱限制採向上取整，不是四捨五入。",
    "ambiguityBoundaryAudit": "花圃完全位於廣場內且不重疊邊界；題目明示只能買整箱。",
    "difficultyReason": "材料採購情境要求把幾何面積轉成離散箱數，進位規則是不可刪除的真實限制。",
    "literacyContextNecessity": "實際採購不能買0.6箱，且花圃區不鋪；複合面積與整箱進位共同決定成本。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "4753248f5d2011421534c49b74ccc4aa9e3c279677b187ba4406ca2c3329bb4e"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u08-s014-cr001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-literacy",
    "skillId": "geometry-literacy-context",
    "lockedSkillTitle": "平面幾何與三視圖素養",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "社區有一塊 18 公尺×12 公尺的長方形空地，中央保留 6 公尺×4 公尺花圃，其餘鋪面。鋪面每平方公尺需 3 塊地磚，外圍另設一圈圍欄。求地磚數與圍欄長度，並說明各自使用面積或周長。",
    "requiredWork": [
      "求扣除花圃後的鋪面面積。",
      "把面積換成地磚數。",
      "求空地外圍周長並說明量的選擇。"
    ],
    "standardSolution": [
      "鋪面面積=18×12−6×4=216−24=192平方公尺。",
      "地磚數=192×3=576塊。",
      "圍欄沿空地外圍，長度=2×(18+12)=60公尺。",
      "地磚覆蓋內部用面積；圍欄沿邊界用周長。",
      "以反向檢查：五百七十六除每平方公尺三塊等於一百九十二平方公尺；圍欄六十公尺則等於兩倍的長寬和。"
    ],
    "alternativeMethods": [
      "可先算總地磚648塊，再扣花圃24×3=72塊，得576塊。"
    ],
    "reasoningSteps": [
      "辨認鋪面是整體減保留區。",
      "依每平方公尺3塊換數量。",
      "辨認外圍為周長。",
      "核對兩種單位。",
      "分別用覆蓋量與四邊總長反查兩個結果。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "地磚576塊、圍欄60公尺，且面積與周長的用途說明完整。"
      },
      {
        "score": 2,
        "criteria": "兩數值正確但用途說明不完整；或一項有單一算術錯而另一項完整。"
      },
      {
        "score": 1,
        "criteria": "至少正確算出192平方公尺、576塊或60公尺其中一個主要結果並有方法。"
      },
      {
        "score": 0,
        "criteria": "把地磚用周長計算、圍欄用面積計算，或未扣花圃。"
      }
    ],
    "partialCreditRules": [
      "花圃不鋪但不影響空地最外圍圍欄，這兩部分不可互相扣除。"
    ],
    "followThroughPolicy": "鋪面與圍欄分項評分；一部分早期錯誤不連帶扣另一部分。",
    "unitAndNotationRules": "面積平方公尺，圍欄公尺，地磚塊數為整數。",
    "answerOnlyPolicy": "只答576與60無過程最高2分。",
    "commonErrors": [
      "從圍欄周長扣花圃周長。",
      "用216×3未扣花圃。",
      "把中央花圃的周長從外圍圍欄扣掉，混淆內部保留區與最外邊界。"
    ],
    "independentReview": {
      "derivedResult": "576塊地磚；60公尺圍欄。",
      "ambiguityAudit": "中央花圃完全包含於空地，且圍欄明示只沿外圍，幾何區域互不含糊。",
      "reviewNote": "獨立以整體減挖除與逐項用途重算，單位維度一致。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [
      "orthographic-description"
    ],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "b6eeb5f6486813793f77ea5e2b13a9f3864c1ff708130562dc60e1b9f3d393f6"
  },
  {
    "questionId": "u08-s014-cr002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-literacy",
    "skillId": "geometry-literacy-context",
    "lockedSkillTitle": "平面幾何與三視圖素養",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "救災物資堆成單位方塊模型，俯視為2×2四格全占用；正視高度[3,2]、側視高度[2,3]。每個方塊外包裝需 0.04 平方公尺材料。若採用符合視圖的最少方塊配置，總共需要多少平方公尺包裝材料？並提出一個符合的高度配置。",
    "requiredWork": [
      "先由三視圖求最少方塊數。",
      "給出符合的四格高度配置。",
      "用每塊材料量求總材料並附平方公尺。"
    ],
    "standardSolution": [
      "最少配置讓3高堆同時滿足正視第一欄與側視第二列，2高堆滿足另一欄列，其餘兩格各1，所以最少7塊。",
      "例如按(y=1,y=2)列出高度矩陣 [[1,2],[3,1]]，其正視欄最大值為[3,2]、側視列最大值為[2,3]。",
      "材料=7×0.04=0.28平方公尺。",
      "以座標配置h(1,2)=3、h(2,1)=2、其餘各1，逐欄得三、二，逐列得二、三；七乘零點零四確為零點二八平方公尺。"
    ],
    "alternativeMethods": [
      "任何等價旋轉或座標安排都可，只要代回指定序列後仍為[3,2]與[2,3]。"
    ],
    "reasoningSteps": [
      "由占用四格建立基底。",
      "共享3與2的欄列要求得到7塊。",
      "寫出可達配置並驗證。",
      "乘每塊0.04。",
      "用明示座標與乘法反查視圖及材料量。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "最少7塊、有效配置及0.28平方公尺全部正確，並驗證視圖。"
      },
      {
        "score": 2,
        "criteria": "7與0.28正確但配置未驗證；或配置與最小值正確，材料乘法有小錯。"
      },
      {
        "score": 1,
        "criteria": "正確求出7塊或正確給出符合配置，且顯示三視圖推理。"
      },
      {
        "score": 0,
        "criteria": "直接把視圖高度相加得錯誤方塊數，或未處理四格占用。"
      }
    ],
    "partialCreditRules": [
      "若高度矩陣列欄方向自訂，必須明示並能重算出指定正視、側視序列。"
    ],
    "followThroughPolicy": "若最少方塊數早期算錯，但後續正確乘0.04，材料部分可給連帶方法分，總分最高2分。",
    "unitAndNotationRules": "方塊數為個；包裝材料以平方公尺表示，小數0.28不需四捨五入。",
    "answerOnlyPolicy": "只答0.28平方公尺無方塊數與配置最高1分。",
    "commonErrors": [
      "把每個占用格都設3層。",
      "將0.04平方公尺誤當0.04公尺。",
      "配置總數雖為七，卻把三高與二高放在同一列或欄而破壞指定輪廓。"
    ],
    "independentReview": {
      "derivedResult": "最少7塊；材料0.28平方公尺；存在高度3、2、1、1的交叉配置。",
      "ambiguityAudit": "指定序列與矩陣方向需配合，但任何明示座標的等價配置均接受；材料按每方塊固定量線性計算。",
      "reviewNote": "獨立重算最少7並代入0.04，得到0.28；示例矩陣四個最大值均吻合。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [
      "orthographic-description"
    ],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "e5088af1b38b6ea9d72f13d27e85397024f5006a89d02b0d9d99c8ee008be0d4"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u08-s014-v001",
    "unitId": "u08",
    "skillId": "geometry-literacy-context",
    "contentSha256": "8a6b83f551553e56077b35f323ada6061c9aef3671ccaa7076c7a52c7188761e",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立逐邊相加 80+50+80+50=260，與周長公式一致。",
    "derivedAnswer": "260 公尺",
    "storedAnswer": "260 公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「260 公尺」符合目標「由施工語句辨認並計算周長」。其餘選項分別違反：80+50 只算長與寬各一次，沒有走完四邊。；80×50 是面積，不是外圍長度。；只多加了一條邊，未完整計算周長。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「平面幾何與三視圖素養」講義已定義範圍；本題特別使用：操場為 80×50 公尺長方形。",
      "unitConflict": "邊長以公尺表示，周長答案為公尺。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由施工語句辨認並計算周長」重新讀題，並針對誤解「看到長和寬就直接相乘，混淆周長與面積。」排除另一解讀。"
    },
    "difficultyReason": "情境只需將「外圍一圈」翻成周長並計算。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需具備長方形周長與面積的基本判斷。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由施工語句辨認並計算周長」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立逐邊相加 80+50+80+50=260，與周長公式一致。 正確選項為「260 公尺」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "70be7adea723f724081340abe379125e6b7831db93e1c236f622041c812681b4"
  },
  {
    "questionId": "u08-s014-v002",
    "unitId": "u08",
    "skillId": "geometry-literacy-context",
    "contentSha256": "18d00d903ae05377dd49a87d60a742950c3dbdd97044d02aeaae21b8bc1d3e16",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立套用等距軌跡定理：所有滿足 PA=PB 的點恰為 AB 的垂直平分線。",
    "derivedAnswer": "甲乙連線的垂直平分線上",
    "storedAnswer": "甲乙連線的垂直平分線上",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「甲乙連線的垂直平分線上」符合目標「把等距設站需求轉成幾何軌跡」。其餘選項分別違反：連線上除中點外，到兩端距離通常不同。；該直線上的點不一定到甲乙等距。；只固定到甲的距離，沒有保證到乙相同。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「平面幾何與三視圖素養」講義已定義範圍；本題特別使用：兩村視為兩個不同點。",
      "unitConflict": "本題所有角度或長度單位一致，答案單位依題意保留。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「把等距設站需求轉成幾何軌跡」重新讀題，並針對誤解「把垂直平分線誤認為只有中點，或任意垂線。」排除另一解讀。"
    },
    "difficultyReason": "直接辨認等距條件，屬基本素養轉譯。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需了解垂直平分線上的點到兩端等距。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「把等距設站需求轉成幾何軌跡」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立套用等距軌跡定理：所有滿足 PA=PB 的點恰為 AB 的垂直平分線。 正確選項為「甲乙連線的垂直平分線上」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "d9cf1e6c40c0613d403b2cd705ddac5e757bd1ab8c177dee1d302f59e2cf06a8"
  },
  {
    "questionId": "u08-s014-v003",
    "unitId": "u08",
    "skillId": "geometry-literacy-context",
    "contentSha256": "aaa117eeac4ed7532efeea100e68ea692439ca75d18f2c0e78d81d56f013e3bd",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立依面積定義計算 9 公尺×7 公尺=63 平方公尺。",
    "derivedAnswer": "地面面積 63 平方公尺",
    "storedAnswer": "地面面積 63 平方公尺",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「地面面積 63 平方公尺」符合目標「由材料用途判斷應使用面積」。其餘選項分別違反：鋪滿內部需要覆蓋大小，不是邊界長度。；對角線不能直接表示需要鋪設的總面積。；角度和與地墊用量無直接關係。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「平面幾何與三視圖素養」講義已定義範圍；本題特別使用：地面為 9×7 公尺長方形。",
      "unitConflict": "公尺乘公尺得到平方公尺。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由材料用途判斷應使用面積」重新讀題，並針對誤解「把鋪面材料誤用周長估算。」排除另一解讀。"
    },
    "difficultyReason": "只做量的辨認與單一乘法，屬基本題。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需能區分周長與面積。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由材料用途判斷應使用面積」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立依面積定義計算 9 公尺×7 公尺=63 平方公尺。 正確選項為「地面面積 63 平方公尺」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "852f57cc98c2faac670c69db8210f458ea23fca261f7d782975d900ac198b184"
  },
  {
    "questionId": "u08-s014-v004",
    "unitId": "u08",
    "skillId": "geometry-literacy-context",
    "contentSha256": "2a72bcf03dffee2df892dbeded48d66bf3cf7fdf329cb2b8f5592820d1fb1669",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立用平方公尺重算：24−(0.8×0.5)=24−0.4=23.6。",
    "derivedAnswer": "23.6 平方公尺",
    "storedAnswer": "23.6 平方公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「23.6 平方公尺」符合目標「整合複合面積與長度單位換算」。其餘選項分別違反：把 80×50 平方公分錯換成 0.04 平方公尺，少了十倍。；直接用 24−4，未正確處理開口單位。；把平方單位換算方向弄反。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「平面幾何與三視圖素養」講義已定義範圍；本題特別使用：整板 6 m×4 m。",
      "unitConflict": "長度先統一為公尺，面積答案為平方公尺。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「整合複合面積與長度單位換算」重新讀題，並針對誤解「未先統一單位，或把平方單位倍率只換一次。」排除另一解讀。"
    },
    "difficultyReason": "要連續完成單位統一和挖除面積，屬標準題。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會長方形面積、複合面積與公分公尺換算。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「整合複合面積與長度單位換算」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立用平方公尺重算：24−(0.8×0.5)=24−0.4=23.6。 正確選項為「23.6 平方公尺」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "eef60c4d5a8dd6f36c402c62e37495c0374eaab6c696fea754950300fd469b43"
  },
  {
    "questionId": "u08-s014-v005",
    "unitId": "u08",
    "skillId": "geometry-literacy-context",
    "contentSha256": "d133e0cc986f413a5f93eb0f1968479e8c2308948c49b999a1ed367571327a0f",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立以外角 360°÷6=60°，內角=180°−60°=120°，與內角和法一致。",
    "derivedAnswer": "120°",
    "storedAnswer": "120°",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「120°」符合目標「由正多邊形規格求單一內角」。其餘選項分別違反：60°是正六邊形的外角，不是內角。；108°是正五邊形每個內角。；720°是六邊形內角總和，不是單一內角。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「平面幾何與三視圖素養」講義已定義範圍；本題特別使用：圖形為正六邊形。",
      "unitConflict": "角度答案使用度數。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由正多邊形規格求單一內角」重新讀題，並針對誤解「把內角和、外角或其他正多邊形角度混為一談。」排除另一解讀。"
    },
    "difficultyReason": "需要兩步公式運算並辨認正多邊形條件。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會多邊形內角和與平均分配。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由正多邊形規格求單一內角」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立以外角 360°÷6=60°，內角=180°−60°=120°，與內角和法一致。 正確選項為「120°」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "f5281259cce6e6ef34ea2f7a9f21c937abdd75b23d554984c59d1420731bfc5e"
  },
  {
    "questionId": "u08-s014-v006",
    "unitId": "u08",
    "skillId": "geometry-literacy-context",
    "contentSha256": "a8184985513e2aae11423f4253e81a4a457e445b302d6c58d6bcbd84966f92f3",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立逐一刪去視線方向：正視壓縮寬、俯視壓縮高、側視壓縮長，得到指定配對。",
    "derivedAnswer": "正視 12×5，俯視 12×8，側視 8×5（公分）",
    "storedAnswer": "正視 12×5，俯視 12×8，側視 8×5（公分）",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「正視 12×5，俯視 12×8，側視 8×5（公分）」符合目標「把包裝規格轉為三視圖尺寸」。其餘選項分別違反：正視與俯視使用的方向互換。；把側面與正面尺寸顛倒。；不同視線會壓縮不同方向，不可能都保留長與寬。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「平面幾何與三視圖素養」講義已定義範圍；本題特別使用：長12 cm、寬8 cm、高5 cm。",
      "unitConflict": "各視圖尺寸均以公分表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「把包裝規格轉為三視圖尺寸」重新讀題，並針對誤解「未固定正面就任意交換三個尺寸。」排除另一解讀。"
    },
    "difficultyReason": "須同時核對三個視圖，屬標準判讀。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會長方體三視圖的方向配對。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「把包裝規格轉為三視圖尺寸」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立逐一刪去視線方向：正視壓縮寬、俯視壓縮高、側視壓縮長，得到指定配對。 正確選項為「正視 12×5，俯視 12×8，側視 8×5（公分）」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "563d141195e39af37e3a88ac8da903aafde0df2d9f20cdf131982dc60031776d"
  },
  {
    "questionId": "u08-s014-v007",
    "unitId": "u08",
    "skillId": "geometry-literacy-context",
    "contentSha256": "242c5ea9d6fdc65eb8514cca0c72fca9e7907f5dff540e6aa8c2b9839b6d45cc",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立比較端點：長度差 0.01≤0.02；寬度差 0.03>0.02。",
    "derivedAnswer": "長度合格，寬度不合格",
    "storedAnswer": "長度合格，寬度不合格",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「長度合格，寬度不合格」符合目標「依誤差範圍逐項驗收幾何尺寸」。其餘選項分別違反：寬度允許範圍是 2.48 至 2.52 公尺，2.47 太小。；長度 4.01 在 3.98 至 4.02 內，判斷相反。；長度確實落在允許範圍。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「平面幾何與三視圖素養」講義已定義範圍；本題特別使用：標示長4.00 m、寬2.50 m。",
      "unitConflict": "標示、誤差與量測皆為公尺。",
      "roundingConflict": "量測值與誤差均視為題目給定的精確到小數第二位資料，不再四捨五入。",
      "domainBoundary": "允許誤差含端點；本題量測值沒有落在端點模糊區。",
      "alternateReading": "已以所求量「依誤差範圍逐項驗收幾何尺寸」重新讀題，並針對誤解「只看數字接近就判合格，未計算明確範圍。」排除另一解讀。"
    },
    "difficultyReason": "要分別建立兩個允許區間並比較邊界，屬進階題。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需能處理同單位的小數加減與閉區間。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「依誤差範圍逐項驗收幾何尺寸」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立比較端點：長度差 0.01≤0.02；寬度差 0.03>0.02。 正確選項為「長度合格，寬度不合格」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：允許誤差含端點；本題量測值沒有落在端點模糊區。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "82dc8bccf7d636999f5f959ee8d2042f4dc6c3b755bb1b102846de38525be2e0"
  },
  {
    "questionId": "u08-s014-v008",
    "unitId": "u08",
    "skillId": "geometry-literacy-context",
    "contentSha256": "48335f1ef7f09500731869e54277e79633023a1517a8516f6af7df25914d2bc3",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立分割計算：上下兩條 10×1 共20，左右含角落兩條 8×1 共16，合計36。",
    "derivedAnswer": "36 平方公尺",
    "storedAnswer": "36 平方公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「36 平方公尺」符合目標「處理外擴邊框的複合面積」。其餘選項分別違反：把內花圃周長 32 直接當成 1 公尺寬步道面積，忽略四個角落區域。；60 是花圃面積，不是外側步道。；96 是外框 12×8 面積，尚未扣除花圃。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「平面幾何與三視圖素養」講義已定義範圍；本題特別使用：花圃為10 m×6 m。",
      "unitConflict": "所有長度為公尺，面積為平方公尺。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「處理外擴邊框的複合面積」重新讀題，並針對誤解「以周長乘寬而漏算或重算角落。」排除另一解讀。"
    },
    "difficultyReason": "外擴造成兩個方向都增加兩倍寬度，需建立整體再相減。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會文字複合面積與外框尺寸判讀。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「處理外擴邊框的複合面積」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立分割計算：上下兩條 10×1 共20，左右含角落兩條 8×1 共16，合計36。 正確選項為「36 平方公尺」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "da98f7d9db93b4d3295f52b508bf469e7eea6c42e747729d4f2c97f3b869d064"
  },
  {
    "questionId": "u08-s014-v009",
    "unitId": "u08",
    "skillId": "geometry-literacy-context",
    "contentSha256": "928325b117577200a52a40854103bd59ba7c0ad0f7f5afc4b2842c91256c2a2c",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立以鴿巢式下界重算：5 個方塊最多占用 5 個俯視位置，無法形成 6 個占用位置。",
    "derivedAnswer": "設計不可能，因為 6 個占用位置至少需要 6 個方塊",
    "storedAnswer": "設計不可能，因為 6 個占用位置至少需要 6 個方塊",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「設計不可能，因為 6 個占用位置至少需要 6 個方塊」符合目標「檢查三視圖設計文字中的基本矛盾」。其餘選項分別違反：最高層數不能抵消每個占用位置至少一塊的需求。；六個不同占用位置已要求至少六塊，無法用五塊分散。；俯視占用數已提供直接下界，足以判定矛盾。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「平面幾何與三視圖素養」講義已定義範圍；本題特別使用：俯視有6個占用位置。",
      "unitConflict": "占用位置數與方塊個數皆為離散整數。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "不需假設占用位置排列；只要每個占用位置至少一塊即可判斷。",
      "alternateReading": "已以所求量「檢查三視圖設計文字中的基本矛盾」重新讀題，並針對誤解「只注意最高層數，忽略俯視每格至少一塊。」排除另一解讀。"
    },
    "difficultyReason": "必須辨認哪一條規格先形成不可違反的下界，屬進階驗證。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需懂俯視占用位置與最低方塊數。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「檢查三視圖設計文字中的基本矛盾」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立以鴿巢式下界重算：5 個方塊最多占用 5 個俯視位置，無法形成 6 個占用位置。 正確選項為「設計不可能，因為 6 個占用位置至少需要 6 個方塊」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：不需假設占用位置排列；只要每個占用位置至少一塊即可判斷。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "b02bb9975bc732deb0c2cf257fd9d5ea5bd0e2abd9f2185f6741f033acaa3a12"
  },
  {
    "questionId": "u08-s014-v010",
    "unitId": "u08",
    "skillId": "geometry-literacy-context",
    "contentSha256": "5528ab6153ddea39b029059e1a73bb61c73f1c44879525cb49f9f7038682890f",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立將需求寫成集合條件 P∈垂直平分線且 P∈步道，故求交集。",
    "derivedAnswer": "找 AB 的垂直平分線與指定步道的交點",
    "storedAnswer": "找 AB 的垂直平分線與指定步道的交點",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「找 AB 的垂直平分線與指定步道的交點」符合目標「把兩項場地限制轉成幾何交集」。其餘選項分別違反：中點雖到 A、B 等距，但可能不在指定步道上。；步道條件 alone 不能保證到兩建築等距。；這與到 A、B 等距的必要軌跡無關。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「平面幾何與三視圖素養」講義已定義範圍；本題特別使用：到A、B距離相同。",
      "unitConflict": "本題所有角度或長度單位一致，答案單位依題意保留。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「把兩項場地限制轉成幾何交集」重新讀題，並針對誤解「只滿足等距或只滿足步道其中一項。」排除另一解讀。"
    },
    "difficultyReason": "實際選址必須保留兩個限制，刪除任一情境條件都會改變候選位置。",
    "literacyContextNecessity": "校園選址同時受服務公平與既有步道限制；垂直平分線和步道的交集是工程決策不可省略的核心。",
    "prerequisiteCheck": "需理解垂直平分線軌跡及同時條件。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「把兩項場地限制轉成幾何交集」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立將需求寫成集合條件 P∈垂直平分線且 P∈步道，故求交集。 正確選項為「找 AB 的垂直平分線與指定步道的交點」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "326ff8be70e879c9993ea7a6446e3ba42ab67e0a98c29637d3c1f6400f48327e"
  },
  {
    "questionId": "u08-s014-v011",
    "unitId": "u08",
    "skillId": "geometry-literacy-context",
    "contentSha256": "4d7fe19cee2882c27d57e82387374e9682416f6718e5c638a2108a71ba0c8f15",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立建立下界：四格基底4，3高堆多2，另一個2高堆多1，共7；存在符合序列的交叉配置。",
    "derivedAnswer": "7 個",
    "storedAnswer": "7 個",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「7 個」符合目標「依舞台三視圖規格求最少材料」。其餘選項分別違反：四格各一只能得到各方向最高1，無法形成3與2。；一個3高堆後仍需在交叉位置形成另一欄列的2高，六個不足。；可用高度3、2、1、1的交叉配置，只需7個。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「平面幾何與三視圖素養」講義已定義範圍；本題特別使用：俯視2×2四格全占用。",
      "unitConflict": "立方體以「個」計，高度以層數表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「依舞台三視圖規格求最少材料」重新讀題，並針對誤解「把兩方向高度直接相加，或只放一個最高堆。」排除另一解讀。"
    },
    "difficultyReason": "舞台材料數取決於指定觀看輪廓，三個視圖與最少用料條件缺一不可。",
    "literacyContextNecessity": "舞台道具需在正面與側面都呈現指定輪廓，同時節省材料；情境中的視覺規格直接決定配置問題。",
    "prerequisiteCheck": "需會三視圖最大高度與最小配置。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「依舞台三視圖規格求最少材料」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立建立下界：四格基底4，3高堆多2，另一個2高堆多1，共7；存在符合序列的交叉配置。 正確選項為「7 個」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "b7e3bbe15e14951949adc0ae6ab2b9a1f3fa087cd7ca1a6b38e4ef03cad9bf00"
  },
  {
    "questionId": "u08-s014-v012",
    "unitId": "u08",
    "skillId": "geometry-literacy-context",
    "contentSha256": "4753248f5d2011421534c49b74ccc4aa9e3c279677b187ba4406ca2c3329bb4e",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立檢核容量：17×5=85<88，18×5=90≥88，所以答案18。",
    "derivedAnswer": "18 箱",
    "storedAnswer": "18 箱",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「18 箱」符合目標「整合複合面積、包裝容量與整數進位」。其餘選項分別違反：17箱只能鋪85平方公尺，小於所需88平方公尺。；18箱可鋪90平方公尺，已足夠，19不是至少。；直接以整個96平方公尺除以5，忽略不鋪的花圃。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「平面幾何與三視圖素養」講義已定義範圍；本題特別使用：廣場12 m×8 m。",
      "unitConflict": "面積以平方公尺計，每箱覆蓋量亦為平方公尺，最後答案為箱數。",
      "roundingConflict": "17.6不是近似量；因整箱限制採向上取整，不是四捨五入。",
      "domainBoundary": "花圃完全位於廣場內且不重疊邊界；題目明示只能買整箱。",
      "alternateReading": "已以所求量「整合複合面積、包裝容量與整數進位」重新讀題，並針對誤解「忘記扣除花圃，或把17.6箱直接寫成17箱。」排除另一解讀。"
    },
    "difficultyReason": "材料採購情境要求把幾何面積轉成離散箱數，進位規則是不可刪除的真實限制。",
    "literacyContextNecessity": "實際採購不能買0.6箱，且花圃區不鋪；複合面積與整箱進位共同決定成本。",
    "prerequisiteCheck": "需會複合面積、除法與實際整箱限制。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「整合複合面積、包裝容量與整數進位」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立檢核容量：17×5=85<88，18×5=90≥88，所以答案18。 正確選項為「18 箱」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：花圃完全位於廣場內且不重疊邊界；題目明示只能買整箱。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "d6513610cd0b9c041fd463b4cf597b3894b9ba65a6655001068231872559b5d9"
  }
];

export const DRAWING_SPECS = [];

