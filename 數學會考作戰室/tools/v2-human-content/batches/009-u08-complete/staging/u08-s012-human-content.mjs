// SERIALIZATION OF REVIEWED HUMAN CONTENT.

// CENTRAL_COORDINATOR_APPROVAL_REQUIRED.

// DO NOT EDIT, REPAIR OR ACTIVATE THIS MODULE DIRECTLY.

export const LECTURE = {
  "lectureId": "u08-s012-lecture-r1",
  "unitId": "u08",
  "numericUnitId": 8,
  "topicId": "u08-views",
  "skillId": "solid-views-basic",
  "lockedSkillTitle": "三視圖基本判讀",
  "title": "三視圖基本判讀：正視和俯視與側視各保留兩個方向",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能說明正視圖、俯視圖與側視圖的觀察方向。",
    "能判斷各視圖顯示長、寬、高中的哪兩個方向。",
    "能判讀長方體的三視圖尺寸。",
    "能理解單一視圖通常不能唯一決定立體。"
  ],
  "prerequisiteBridge": {
    "prerequisiteSkillIds": [
      "unit-conversion-geometry"
    ],
    "bridgeExplanation": "先確保長、寬、高的單位一致，再學習從不同方向把立體投影成平面視圖。"
  },
  "prerequisites": [
    {
      "skillId": "unit-conversion-geometry",
      "requiredLevel": "能區分長度方向與單位，並比較不同方向的尺寸。"
    }
  ],
  "glossary": [
    {
      "term": "正視圖",
      "definition": "從物體正面沿垂直於正面的方向觀看所得投影。"
    },
    {
      "term": "俯視圖",
      "definition": "從上方向下觀看所得投影。"
    },
    {
      "term": "側視圖",
      "definition": "從物體側面觀看所得投影，通常題目會指定左視或右視。"
    },
    {
      "term": "投影",
      "definition": "把物體沿固定觀察方向映到平面上。"
    },
    {
      "term": "遮蔽",
      "definition": "同一視線方向上前方部分可能擋住後方部分。"
    }
  ],
  "notation": [
    {
      "symbol": "長×高",
      "meaning": "常為正視圖呈現的兩方向。"
    },
    {
      "symbol": "長×寬",
      "meaning": "常為俯視圖呈現的兩方向。"
    },
    {
      "symbol": "寬×高",
      "meaning": "常為側視圖呈現的兩方向。"
    }
  ],
  "conceptDevelopment": [
    "三視圖不是把立體旋轉成三張照片，而是從互相垂直的方向做正投影。每個視圖只保留兩個方向，第三個方向沿視線被壓縮。",
    "對長方體而言，正視圖常是長×高，俯視圖是長×寬，側視圖是寬×高。題目若另定正面，依題目方向。",
    "相同輪廓的視圖可能來自不同深度配置，因此一張視圖通常不夠；三視圖合併可提供更多限制，但某些複雜立體仍可能不唯一。",
    "判讀堆疊方塊時，俯視圖顯示哪些底面位置有方塊；正視或側視常顯示各欄最高高度，而看不到被遮住的內部細節。"
  ],
  "formalDefinitions": [
    {
      "name": "正投影",
      "statement": "投影線彼此平行且垂直於投影面。"
    },
    {
      "name": "輪廓",
      "statement": "從某方向可見的外部邊界。"
    },
    {
      "name": "欄高",
      "statement": "方塊堆疊在某平面位置上的方塊數。"
    }
  ],
  "formulas": [
    {
      "formula": "正視：長與高",
      "conditions": [
        "正面定義為長高面"
      ],
      "meaning": "深度被壓縮。"
    },
    {
      "formula": "俯視：長與寬",
      "conditions": [
        "由上往下"
      ],
      "meaning": "高度被壓縮。"
    },
    {
      "formula": "側視：寬與高",
      "conditions": [
        "側面定義固定"
      ],
      "meaning": "長度被壓縮。"
    }
  ],
  "invalidUseCases": [
    "正視圖中的水平長度不一定是物體最長邊，取決於正面定義。",
    "俯視圖看不到高度數值，除非另有標註。",
    "側視圖不一定與正視圖相同。",
    "不能用單一視圖推定所有隱藏結構。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "先固定正面、上方與側面方向。",
      "check": "題目若指定箭頭或觀看者位置，依該定義。"
    },
    {
      "step": 2,
      "instruction": "列出每個視圖保留的兩方向。",
      "check": "正視長高、俯視長寬、側視寬高。"
    },
    {
      "step": 3,
      "instruction": "對方塊堆疊，先由俯視確定占用位置。",
      "check": "再用正視與側視限制各列或各欄最高高度。"
    },
    {
      "step": 4,
      "instruction": "檢查是否有遮蔽與不唯一性。",
      "check": "只在條件足夠時下唯一結論。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "長方體長 8、寬 5、高 3 公分，正面是長×高面。正視圖尺寸？",
      "solutionSteps": [
        "正視保留長與高。",
        "尺寸為 8×3 公分。"
      ],
      "answer": "8 公分×3 公分。"
    },
    {
      "exampleId": "L2",
      "prompt": "同一長方體的俯視圖尺寸？",
      "solutionSteps": [
        "俯視保留長與寬。",
        "尺寸為 8×5 公分。"
      ],
      "answer": "8 公分×5 公分。"
    },
    {
      "exampleId": "L3",
      "prompt": "同一長方體的右側視圖尺寸？",
      "solutionSteps": [
        "側視保留寬與高。",
        "尺寸為 5×3 公分。"
      ],
      "answer": "5 公分×3 公分。"
    },
    {
      "exampleId": "L4",
      "prompt": "某方塊組合俯視圖顯示 4 個占用位置，能否只由此確定總方塊數？",
      "solutionSteps": [
        "俯視只知道每個位置至少一塊。",
        "各位置可能堆疊不同高度。"
      ],
      "answer": "不能；只能確定至少 4 塊。"
    }
  ],
  "levelConnections": {
    "basic": "辨認三個觀看方向。",
    "standard": "配對長方體三視圖尺寸。",
    "advanced": "從方塊占用位置與欄高限制判斷可能性。",
    "literacy": "工程圖、家具組裝與建築圖面用多視圖避免單張外觀造成深度誤判。"
  },
  "commonMistakes": [
    {
      "mistake": "把俯視圖當成長×高。",
      "why": "忘記從上看時高度被壓縮。",
      "correction": "俯視保留長與寬。"
    },
    {
      "mistake": "正視圖一定取最大面。",
      "why": "把正面與面積大小混淆。",
      "correction": "正面由題目指定。"
    },
    {
      "mistake": "俯視有四格就說共四塊。",
      "why": "忽略每格可向上堆疊。",
      "correction": "只能說至少四塊。"
    },
    {
      "mistake": "正視輪廓看見兩欄就認為深度只有一層。",
      "why": "深度沿視線被遮蔽。",
      "correction": "需結合俯視或側視。"
    },
    {
      "mistake": "左視與右視方向混用。",
      "why": "未固定觀察側。",
      "correction": "題目指定哪一側就按該側投影。"
    },
    {
      "mistake": "把視圖尺寸當面積直接相乘後回答長度。",
      "why": "量的種類混淆。",
      "correction": "題目問尺寸就保留兩個長度，問面積才相乘。"
    }
  ],
  "selfCheckItems": [
    "正面由誰定義？",
    "每個視圖保留哪兩個方向？",
    "俯視圖是否只表示占用位置？",
    "目前資訊足以唯一決定立體嗎？"
  ],
  "conciseSummary": [
    "正視、俯視、側視是三個互相垂直方向的正投影。",
    "長方體常對應長高、長寬、寬高。",
    "沿視線方向的資訊被壓縮。",
    "單一視圖通常不足以唯一決定立體。"
  ],
  "connections": {
    "previous": "上一技能確保三個方向的尺寸單位可比較。",
    "next": [
      "下一技能將不用圖片，只靠文字描述三視圖輪廓、欄高與相容性。"
    ]
  },
  "figureReferences": [
    "u08-s012-fig001"
  ],
  "accessibilityNote": "本技能依鎖定範圍採全文字敘述；方向、位置與視圖關係均以明確語句表達，不要求由未提供的圖形推測。",
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "u08 locked CAP text-only boundary",
    "examplesNotCopiedFromLegacyOrProductionBank": true,
    "skillSpecificEvidence": "以長 8、寬 5、高 3 的長方體逐一核對正視 8×3、俯視 8×5、側視 5×3；方塊例題只推出至少四塊，未由俯視誤推總數。",
    "manualSymbolAndUnitCheck": true,
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "57af5693af9519ebf8ccfc6d1df7f140aa4a3d6207783982bf94f9e2cce88c1d"
};

export const QUESTIONS = [
  {
    "questionId": "u08-s012-v001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "solid-views-basic",
    "lockedSkillTitle": "三視圖基本判讀",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "長方體的正面定為長×高的面。正視圖會呈現哪兩個方向？",
    "givenConditions": [
      "正面明確定為長×高面。"
    ],
    "target": "辨認正視圖保留的方向",
    "choices": [
      "長與寬",
      "寬與高",
      "只呈現高",
      "長與高"
    ],
    "answerIndex": 3,
    "independentSolution": "正視圖呈現長與高。",
    "explanation": "依正面定義判斷兩方向。",
    "steps": [
      "固定正面為長×高。",
      "列出保留長、高。"
    ],
    "optionAnalysis": [
      {
        "choice": "長與寬",
        "truth": false,
        "reason": "這是俯視圖常呈現的方向。"
      },
      {
        "choice": "寬與高",
        "truth": false,
        "reason": "這是側視圖常呈現的方向。"
      },
      {
        "choice": "只呈現高",
        "truth": false,
        "reason": "正投影仍保留平面上的兩個方向。"
      },
      {
        "choice": "長與高",
        "truth": true,
        "reason": "從正面看時，沿寬的方向被壓縮，保留長與高。"
      }
    ],
    "misconceptionTarget": "把正視與俯視方向混淆。",
    "prerequisiteCheck": "能區分長、寬、高。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及數值單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "基礎方向對應。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "92c673e6c322f7f3369ffb95b718818383ec96d6972f319431f4f41c0be290cb"
  },
  {
    "questionId": "u08-s012-v002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "solid-views-basic",
    "lockedSkillTitle": "三視圖基本判讀",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "從物體上方向下觀看所得的視圖稱為何者？",
    "givenConditions": [
      "觀察者位於物體上方。"
    ],
    "target": "辨認俯視圖的觀察方向",
    "choices": [
      "正視圖",
      "側視圖",
      "俯視圖",
      "透視圖"
    ],
    "answerIndex": 2,
    "independentSolution": "名稱為俯視圖。",
    "explanation": "依觀察方向命名。",
    "steps": [
      "辨認觀察位置在上方。"
    ],
    "optionAnalysis": [
      {
        "choice": "正視圖",
        "truth": false,
        "reason": "正視圖從正面觀看。"
      },
      {
        "choice": "側視圖",
        "truth": false,
        "reason": "側視圖從左或右側觀看。"
      },
      {
        "choice": "俯視圖",
        "truth": true,
        "reason": "從上往下的正投影是俯視圖。"
      },
      {
        "choice": "透視圖",
        "truth": false,
        "reason": "三視圖使用正投影，不是透視表現。"
      }
    ],
    "misconceptionTarget": "把上方視角誤稱正視。",
    "prerequisiteCheck": "不需額外先備。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及數值單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "單一定義辨認。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "7391e7d88d179a8a1e6e5d1992f8b7a22a5062a7de720b61745e618a7c1240d9"
  },
  {
    "questionId": "u08-s012-v003",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "solid-views-basic",
    "lockedSkillTitle": "三視圖基本判讀",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "長方體長 9 公分、寬 4 公分、高 6 公分，正面為長×高面。俯視圖尺寸為何？",
    "givenConditions": [
      "長 9、寬 4、高 6 公分。",
      "正面方向已指定。"
    ],
    "target": "判讀長方體俯視圖尺寸",
    "choices": [
      "9 公分×4 公分",
      "9 公分×6 公分",
      "4 公分×6 公分",
      "9 公分×4 公分×6 公分"
    ],
    "answerIndex": 0,
    "independentSolution": "9 公分×4 公分。",
    "explanation": "高度沿由上往下的視線被壓縮。",
    "steps": [
      "俯視保留長、寬。",
      "代入 9、4。"
    ],
    "optionAnalysis": [
      {
        "choice": "9 公分×4 公分",
        "truth": true,
        "reason": "俯視圖保留長與寬，尺寸為 9×4。"
      },
      {
        "choice": "9 公分×6 公分",
        "truth": false,
        "reason": "這是正視圖尺寸。"
      },
      {
        "choice": "4 公分×6 公分",
        "truth": false,
        "reason": "這是側視圖尺寸。"
      },
      {
        "choice": "9 公分×4 公分×6 公分",
        "truth": false,
        "reason": "視圖是二維，不列三個尺寸。"
      }
    ],
    "misconceptionTarget": "把高度帶入俯視圖。",
    "prerequisiteCheck": "能辨認俯視方向。",
    "estimatedTimeSec": 90,
    "unitCheck": "兩個視圖尺寸均以公分表示，不計面積。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "直接尺寸配對。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "42e6beb72921ce53f9a81cf1011ab0b4def6fa172d20c997f2e64934aa866b20"
  },
  {
    "questionId": "u08-s012-v004",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "solid-views-basic",
    "lockedSkillTitle": "三視圖基本判讀",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "svg",
    "figureId": "u08-s012-fig001",
    "drawingSpecRef": "u08-s012-draw001",
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_HUMAN_AUTHORED_FIGURE",
    "text": "同一長方體長 9 公分、寬 4 公分、高 6 公分，其右側視圖尺寸為何？",
    "givenConditions": [
      "長 9、寬 4、高 6 公分。"
    ],
    "target": "判讀長方體側視圖尺寸",
    "choices": [
      "9 公分×6 公分",
      "4 公分×6 公分",
      "9 公分×4 公分",
      "6 公分×6 公分"
    ],
    "answerIndex": 1,
    "independentSolution": "4 公分×6 公分。",
    "explanation": "側視圖尺寸為寬×高。",
    "steps": [
      "保留寬 4。",
      "保留高 6。"
    ],
    "optionAnalysis": [
      {
        "choice": "9 公分×6 公分",
        "truth": false,
        "reason": "這是正視圖。"
      },
      {
        "choice": "4 公分×6 公分",
        "truth": true,
        "reason": "右側看時長方向被壓縮，保留寬與高。"
      },
      {
        "choice": "9 公分×4 公分",
        "truth": false,
        "reason": "這是俯視圖。"
      },
      {
        "choice": "6 公分×6 公分",
        "truth": false,
        "reason": "沒有兩個高度方向。"
      }
    ],
    "misconceptionTarget": "把長誤當側視水平尺寸。",
    "prerequisiteCheck": "能辨認長寬高。",
    "estimatedTimeSec": 90,
    "unitCheck": "尺寸單位公分。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "標準方向配對。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "4167fbece6292410d5b6c5f56c3797bfbe543ff893099eca8cb4dbc9d0823693"
  },
  {
    "questionId": "u08-s012-v005",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "solid-views-basic",
    "lockedSkillTitle": "三視圖基本判讀",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一個方塊堆疊的俯視圖文字描述有 5 個占用格。關於總方塊數，下列何者一定正確？",
    "givenConditions": [
      "俯視有 5 個占用格。",
      "未提供高度。"
    ],
    "target": "由俯視占用格判斷方塊數下限",
    "choices": [
      "至少有 5 塊",
      "恰有 5 塊",
      "至多有 5 塊",
      "無法得知任何下限"
    ],
    "answerIndex": 0,
    "independentSolution": "只能確定至少 5 塊。",
    "explanation": "俯視不顯示高度。",
    "steps": [
      "5 個位置各至少 1 塊。",
      "總數下限 5。"
    ],
    "optionAnalysis": [
      {
        "choice": "至少有 5 塊",
        "truth": true,
        "reason": "俯視每個占用格代表該位置至少一塊，所以總數至少 5。"
      },
      {
        "choice": "恰有 5 塊",
        "truth": false,
        "reason": "每格可能向上堆疊多塊。"
      },
      {
        "choice": "至多有 5 塊",
        "truth": false,
        "reason": "堆疊高度可大於 1。"
      },
      {
        "choice": "無法得知任何下限",
        "truth": false,
        "reason": "每個占用格至少有一塊。"
      }
    ],
    "misconceptionTarget": "把占用格數直接當總塊數。",
    "prerequisiteCheck": "能理解俯視壓縮高度。",
    "estimatedTimeSec": 90,
    "unitCheck": "答案以「塊」計數。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需區分下限與唯一值。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "f5729af3567313ea65819cd83e0ebdba6f980dbd60b18279c59ad867d3606038"
  },
  {
    "questionId": "u08-s012-v006",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "solid-views-basic",
    "lockedSkillTitle": "三視圖基本判讀",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "某長方體的正視圖是 8 公分×5 公分，俯視圖是 8 公分×3 公分。若共同的 8 公分方向為長，則高與寬分別為多少？",
    "givenConditions": [
      "正視 8×5。",
      "俯視 8×3。",
      "共同 8 是長。"
    ],
    "target": "由兩視圖恢復長方體尺寸",
    "choices": [
      "高 3 公分，寬 5 公分",
      "高 5 公分，寬 3 公分",
      "高 8 公分，寬 5 公分",
      "高 5 公分，寬 8 公分"
    ],
    "answerIndex": 1,
    "independentSolution": "高 5 公分、寬 3 公分。",
    "explanation": "共同長度對齊後讀取剩餘方向。",
    "steps": [
      "正視第二尺寸=高 5。",
      "俯視第二尺寸=寬 3。"
    ],
    "optionAnalysis": [
      {
        "choice": "高 3 公分，寬 5 公分",
        "truth": false,
        "reason": "把兩視圖的第二方向互換。"
      },
      {
        "choice": "高 5 公分，寬 3 公分",
        "truth": true,
        "reason": "正視圖長×高給高 5；俯視圖長×寬給寬 3。"
      },
      {
        "choice": "高 8 公分，寬 5 公分",
        "truth": false,
        "reason": "共同 8 已指定為長。"
      },
      {
        "choice": "高 5 公分，寬 8 公分",
        "truth": false,
        "reason": "俯視第二尺寸才是寬。"
      }
    ],
    "misconceptionTarget": "未對齊共同方向。",
    "prerequisiteCheck": "能判讀正視與俯視尺寸。",
    "estimatedTimeSec": 90,
    "unitCheck": "所有尺寸以公分表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需整合兩張視圖。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "e7ca4b1d71d36dbaa966a932d9f9141960a24f814a554fbb258117f9e31243d4"
  },
  {
    "questionId": "u08-s012-v007",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "solid-views-basic",
    "lockedSkillTitle": "三視圖基本判讀",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "一個正方體從任何正面、上方或側面觀看，輪廓最可能是何者？",
    "givenConditions": [
      "物體為正方體。",
      "沿三個面正方向觀看。"
    ],
    "target": "判斷正方體基本三視圖輪廓",
    "choices": [
      "長方形但一定長寬不同",
      "圓形",
      "正方形",
      "三角形"
    ],
    "answerIndex": 2,
    "independentSolution": "輪廓為正方形。",
    "explanation": "三個基本視圖相同。",
    "steps": [
      "正方體三方向尺寸相等。",
      "投影面為正方形。"
    ],
    "optionAnalysis": [
      {
        "choice": "長方形但一定長寬不同",
        "truth": false,
        "reason": "正方體各面都是正方形。"
      },
      {
        "choice": "圓形",
        "truth": false,
        "reason": "正方體沒有圓形面。"
      },
      {
        "choice": "正方形",
        "truth": true,
        "reason": "正方體各面皆為正方形，沿面法線觀看得到正方形。"
      },
      {
        "choice": "三角形",
        "truth": false,
        "reason": "正投影輪廓不是三角形。"
      }
    ],
    "misconceptionTarget": "認為不同視向一定產生不同形狀。",
    "prerequisiteCheck": "能辨認正方體各面。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及數值單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "基本立體性質應用。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "acfd1531d6d4722139ec6b2782947659745844f1e5db9a3eb3fbc10192629517"
  },
  {
    "questionId": "u08-s012-v008",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "solid-views-basic",
    "lockedSkillTitle": "三視圖基本判讀",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "只知道某物體正視圖為一個正方形，能否確定物體是正方體？",
    "givenConditions": [
      "只提供正視輪廓為正方形。"
    ],
    "target": "判斷單一視圖是否足以確定立體",
    "choices": [
      "能，正方形視圖只可能來自正方體",
      "能，只要四邊相等即可",
      "不能，因為正方體的正視圖不是正方形",
      "不能，圓柱或不同深度的柱體等也可能有正方形正視輪廓"
    ],
    "answerIndex": 3,
    "independentSolution": "不能唯一判定正方體。",
    "explanation": "需要其他視圖或尺寸。",
    "steps": [
      "指出深度資訊缺失。",
      "舉出不同立體反例。"
    ],
    "optionAnalysis": [
      {
        "choice": "能，正方形視圖只可能來自正方體",
        "truth": false,
        "reason": "單一投影無法顯示深度。"
      },
      {
        "choice": "能，只要四邊相等即可",
        "truth": false,
        "reason": "那只描述投影，不是立體全部面。"
      },
      {
        "choice": "不能，因為正方體的正視圖不是正方形",
        "truth": false,
        "reason": "正方體正視圖確實可以是正方形。"
      },
      {
        "choice": "不能，圓柱或不同深度的柱體等也可能有正方形正視輪廓",
        "truth": true,
        "reason": "單一視圖只保留兩方向，第三方向未知；多種立體可有相同正視輪廓。"
      }
    ],
    "misconceptionTarget": "由單一輪廓過度推論完整立體。",
    "prerequisiteCheck": "能理解投影資訊遺失。",
    "estimatedTimeSec": 90,
    "unitCheck": "本題不涉及數值單位。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "資訊充分性進階題。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "f6cda7426394f593add4111695710b2e2b908e8d62812ccefcb979c2555962ff"
  },
  {
    "questionId": "u08-s012-v009",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "solid-views-basic",
    "lockedSkillTitle": "三視圖基本判讀",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "某方塊組合正視圖有三欄，顯示最高高度依序為 2、4、1。下列敘述何者一定正確？",
    "givenConditions": [
      "正視三欄高度 [2,4,1]。"
    ],
    "target": "由正視高度序列推出必要存在的堆高",
    "choices": [
      "總共有 7 塊",
      "組合中至少有一堆高度為 4",
      "每個深度位置高度都分別是 2、4、1",
      "俯視圖一定只有 3 格"
    ],
    "answerIndex": 1,
    "independentSolution": "至少一堆高度 4。",
    "explanation": "輪廓值是最大高度。",
    "steps": [
      "讀第二欄最大值 4。",
      "最大值必由至少一個實際堆疊達到。"
    ],
    "optionAnalysis": [
      {
        "choice": "總共有 7 塊",
        "truth": false,
        "reason": "2+4+1 只是各欄最高值，不一定是總數。"
      },
      {
        "choice": "組合中至少有一堆高度為 4",
        "truth": true,
        "reason": "第二欄正視高度 4，表示該欄某個深度位置至少有一堆高度 4。"
      },
      {
        "choice": "每個深度位置高度都分別是 2、4、1",
        "truth": false,
        "reason": "正視圖只顯示各欄最大值。"
      },
      {
        "choice": "俯視圖一定只有 3 格",
        "truth": false,
        "reason": "每欄可能有多個深度位置。"
      }
    ],
    "misconceptionTarget": "把最高值序列加總成總塊數。",
    "prerequisiteCheck": "能理解遮蔽與最大值。",
    "estimatedTimeSec": 90,
    "unitCheck": "高度以方塊層數計數。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "需從最大值條件推必要存在性。",
    "literacyContextNecessity": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "728986ac9f3637445a2d940130fda3f8943e6e026bc7424ff078a1cf7df4d8ee"
  },
  {
    "questionId": "u08-s012-v010",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "solid-views-basic",
    "lockedSkillTitle": "三視圖基本判讀",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "家具設計圖標示一個櫃體長 120 公分、深 45 公分、高 80 公分，正面是長×高面。俯視圖的外框尺寸應為何？",
    "givenConditions": [
      "櫃體長 120、深 45、高 80 公分。",
      "正面為長×高。"
    ],
    "target": "由家具尺寸判讀俯視圖",
    "choices": [
      "120 公分×45 公分",
      "120 公分×80 公分",
      "45 公分×80 公分",
      "120 公分×45 公分×80 公分"
    ],
    "answerIndex": 0,
    "independentSolution": "俯視外框 120×45 公分。",
    "explanation": "家具術語中的深對應寬方向。",
    "steps": [
      "長 120。",
      "深 45。",
      "組成俯視 120×45。"
    ],
    "optionAnalysis": [
      {
        "choice": "120 公分×45 公分",
        "truth": true,
        "reason": "從上方看保留長與深，壓縮高度。"
      },
      {
        "choice": "120 公分×80 公分",
        "truth": false,
        "reason": "這是正視圖。"
      },
      {
        "choice": "45 公分×80 公分",
        "truth": false,
        "reason": "這是側視圖。"
      },
      {
        "choice": "120 公分×45 公分×80 公分",
        "truth": false,
        "reason": "俯視圖是二維圖。"
      }
    ],
    "misconceptionTarget": "把高度帶入俯視圖。",
    "prerequisiteCheck": "能將深度對應到寬方向。",
    "estimatedTimeSec": 90,
    "unitCheck": "兩尺寸均以公分表示。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "工程圖中的三尺寸是必要資訊。",
    "literacyContextNecessity": "家具能否放入空間通常看俯視占地，必須使用長與深而非高度。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "a6d8f029718ed5c7d49bdddf912a2b4867f3f939693d1a8fcb1a67aad56ff2ca"
  },
  {
    "questionId": "u08-s012-v011",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "solid-views-basic",
    "lockedSkillTitle": "三視圖基本判讀",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "包裝盒正視圖尺寸為 30×20 公分，側視圖尺寸為 12×20 公分。若共同的 20 公分為高度，包裝盒底面積是多少？",
    "givenConditions": [
      "正視 30×20。",
      "側視 12×20。",
      "共同 20 為高。"
    ],
    "target": "由正側視圖恢復包裝盒底面積",
    "choices": [
      "600 平方公分",
      "240 平方公分",
      "720 平方公分",
      "360 平方公分"
    ],
    "answerIndex": 3,
    "independentSolution": "底面積 360 平方公分。",
    "explanation": "先由共同高度恢復底面兩方向。",
    "steps": [
      "辨認長 30。",
      "辨認寬 12。",
      "30×12=360。"
    ],
    "optionAnalysis": [
      {
        "choice": "600 平方公分",
        "truth": false,
        "reason": "用正視面積 30×20。"
      },
      {
        "choice": "240 平方公分",
        "truth": false,
        "reason": "用側視面積 12×20。"
      },
      {
        "choice": "720 平方公分",
        "truth": false,
        "reason": "把兩視圖面積相加後誤算。"
      },
      {
        "choice": "360 平方公分",
        "truth": true,
        "reason": "正視提供長 30、高 20；側視提供寬 12、高 20，底面積=30×12=360。"
      }
    ],
    "misconceptionTarget": "直接用任一視圖面積當底面積。",
    "prerequisiteCheck": "能整合兩視圖與面積。",
    "estimatedTimeSec": 90,
    "unitCheck": "長、寬為公分，乘積平方公分。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "實際包裝占地需從不同視圖抽取尺寸。",
    "literacyContextNecessity": "倉儲占地取決於盒底長與寬，這兩個尺寸分散在正視與側視圖中，不能只看單一視圖。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "d199975354883a410b01fb548472dd498e7dba4e50a899346022953d19d13f78"
  },
  {
    "questionId": "u08-s012-v012",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "solid-views-basic",
    "lockedSkillTitle": "三視圖基本判讀",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_MATH_U08_LOCKED_TEXT_ONLY",
    "text": "倉庫堆疊的俯視圖有 6 個占用格，正視圖最高為 3 層，側視圖最高也為 3 層。下列哪一個總方塊數一定不可能？",
    "givenConditions": [
      "俯視有6個占用格。",
      "兩方向最高皆3層。"
    ],
    "target": "以俯視占用數判定不可能的總數",
    "choices": [
      "8 塊",
      "10 塊",
      "5 塊",
      "14 塊"
    ],
    "answerIndex": 2,
    "independentSolution": "總方塊數≥6，故選5塊；其餘數量都可由每堆1至3層的配置達成。",
    "explanation": "先由俯視占用數得到最直接的總數下界；最高3層不會降低此下界。",
    "steps": [
      "每個占用格至少1塊。",
      "6格至少6塊。",
      "因此5塊不可能。"
    ],
    "optionAnalysis": [
      {
        "choice": "8 塊",
        "truth": false,
        "reason": "可有一堆3層，其餘五格中四格1層、另一格1層，總數可達8。"
      },
      {
        "choice": "10 塊",
        "truth": false,
        "reason": "可配置兩堆3層與四堆1層，總數10且最高仍為3。"
      },
      {
        "choice": "5 塊",
        "truth": true,
        "reason": "六個占用格各至少有一塊，所以總數至少6；5塊一定不可能。"
      },
      {
        "choice": "14 塊",
        "truth": false,
        "reason": "可配置四堆3層與兩堆1層，總數14且最高仍為3。"
      }
    ],
    "misconceptionTarget": "只看最高層數，忽略每個占用格至少一塊。",
    "prerequisiteCheck": "需能由俯視格數求最低方塊數。",
    "estimatedTimeSec": 120,
    "unitCheck": "答案為方塊個數，層數只作上限與可行性檢查。",
    "roundingCheck": "全部資料為精確值，不涉及四捨五入。",
    "ambiguityBoundaryAudit": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "difficultyReason": "情境同時給占用與輪廓資料，需先選出最強的基本下界。",
    "literacyContextNecessity": "倉庫盤點需由俯視占用格推最低存量，再用兩向最高層數檢查其他候選是否可實現。",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "8ac5cdf6f677cd3c017544c9000523bf5775f3f1243e925d64dd904861a0f6fb"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u08-s012-cr001",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "solid-views-basic",
    "lockedSkillTitle": "三視圖基本判讀",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "一個長方體長 10 公分、寬 6 公分、高 4 公分，指定長×高的面為正面。請寫出正視圖、俯視圖與右側視圖的尺寸，並指出每個視圖被壓縮的方向。",
    "requiredWork": [
      "三個視圖尺寸完整。",
      "說明正視、俯視、側視各忽略哪一方向。",
      "單位一致。"
    ],
    "standardSolution": [
      "正視圖保留長與高，尺寸10×4公分，寬被壓縮。",
      "俯視圖保留長與寬，尺寸10×6公分，高被壓縮。",
      "右側視圖保留寬與高，尺寸6×4公分，長被壓縮。"
    ],
    "alternativeMethods": [
      "可用三個方向配對表：正視長高、俯視長寬、側視寬高。"
    ],
    "reasoningSteps": [
      "固定正面為長高面。",
      "逐一刪除視線方向。",
      "保留另外兩個尺寸。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "三個尺寸與三個壓縮方向全部正確。"
      },
      {
        "score": 2,
        "criteria": "三個尺寸正確但少一個方向說明；或只有一組尺寸顛倒但概念完整。"
      },
      {
        "score": 1,
        "criteria": "至少兩個視圖尺寸正確，或一個尺寸與壓縮方向完整。"
      },
      {
        "score": 0,
        "criteria": "三個視圖均用相同尺寸，或未依指定正面。"
      }
    ],
    "partialCreditRules": [
      "10×4與4×10視為同一矩形尺寸，但應說明哪一方向是水平或垂直時才要求順序。"
    ],
    "followThroughPolicy": "單一視圖錯誤不連帶扣其他視圖分，各方向獨立評分。",
    "unitAndNotationRules": "所有長度用公分；尺寸用「×」連接。",
    "answerOnlyPolicy": "只列三個尺寸無壓縮方向最高2分。",
    "commonErrors": [
      "把正視圖寫成長×寬。",
      "認為投影尺寸相乘成體積。"
    ],
    "independentReview": {
      "derivedResult": "正視10×4、俯視10×6、側視6×4公分。",
      "ambiguityAudit": "正面指定清楚，右側方向不影響長方體矩形尺寸。",
      "reviewNote": "獨立依每個視線方向刪除一維，三組尺寸覆蓋長、寬、高的三種配對。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [
      "unit-conversion-geometry"
    ],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "90b42e8526e572e8bba74c610b533c2d1adf93ea9bcc82821aca56b3c6b5cf5b"
  },
  {
    "questionId": "u08-s012-cr002",
    "unitId": "u08",
    "numericUnitId": 8,
    "topicId": "u08-views",
    "skillId": "solid-views-basic",
    "lockedSkillTitle": "三視圖基本判讀",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "drawingSpecRef": null,
    "prompt": "某單位方塊模型的俯視圖有 5 個占用位置，正視圖最高為 4 層，側視圖最高也為 4 層。求模型最少可能有多少個方塊，並說明為何只看俯視圖不能確定實際總數。",
    "requiredWork": [
      "由占用位置與最高堆求最小值。",
      "提供可達配置。",
      "說明俯視不顯示高度。"
    ],
    "standardSolution": [
      "五個占用位置各至少1塊，先有5塊。",
      "至少一堆須高4，因此該堆比底層多3塊；同一高堆可同時造成正視與側視最高4。",
      "最少為5+3=8塊，可用高度4、1、1、1、1達成。",
      "俯視只顯示哪些位置占用，不顯示每堆高度，所以總數可能大於8。"
    ],
    "alternativeMethods": [
      "可直接寫最省高度總和4+1+1+1+1=8。"
    ],
    "reasoningSteps": [
      "用俯視得到五堆正高度。",
      "用兩視圖共同最高值放置一個4高堆。",
      "構造8塊配置。",
      "說明高度資訊在俯視被壓縮。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "最少8塊、可達配置與俯視資訊不足說明全部完整。"
      },
      {
        "score": 2,
        "criteria": "答案8與主要下界正確，但配置或俯視說明少一項。"
      },
      {
        "score": 1,
        "criteria": "知道至少5塊或至少有一堆4高，並有合理加總。"
      },
      {
        "score": 0,
        "criteria": "答5塊或20塊且無投影推理，或認為俯視可唯一決定總數。"
      }
    ],
    "partialCreditRules": [
      "不要求給出具體座標，只需說明4高堆位於任一占用位置且兩方向都能看到最高4。"
    ],
    "followThroughPolicy": "若5+3算錯但下界分解與高度資訊說明正確，最多2分。",
    "unitAndNotationRules": "方塊數用「塊」或「個」，高度用層。",
    "answerOnlyPolicy": "只答8塊最高1分，因題目要求兩項說明。",
    "commonErrors": [
      "把五個位置都設成4層。",
      "把正視最高4與側視最高4視為兩個不同高堆的必要條件。"
    ],
    "independentReview": {
      "derivedResult": "最少8塊；俯視不能確定每處高度。",
      "ambiguityAudit": "同一個全域最高堆可同時滿足兩方向最高值，因此無需強迫兩個4高堆。",
      "reviewNote": "獨立由下界5+3與構造4,1,1,1,1雙向驗證最小值。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "prerequisiteSkillIds": [
      "unit-conversion-geometry"
    ],
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "noTemplateDeclaration": true,
    "reviewStatus": "independently-reviewed",
    "contentSha256": "e6ddf790714641f0204a680300cc017d6fc742001df4f1ce4849af475f98e421"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u08-s012-v001",
    "unitId": "u08",
    "skillId": "solid-views-basic",
    "contentSha256": "92c673e6c322f7f3369ffb95b718818383ec96d6972f319431f4f41c0be290cb",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "第三方向寬沿視線消失。",
    "derivedAnswer": "長與高",
    "storedAnswer": "長與高",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「長與高」符合目標「辨認正視圖保留的方向」。其餘選項分別違反：這是俯視圖常呈現的方向。；這是側視圖常呈現的方向。；正投影仍保留平面上的兩個方向。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三視圖基本判讀」講義已定義範圍；本題特別使用：正面明確定為長×高面。",
      "unitConflict": "本題不涉及數值單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「辨認正視圖保留的方向」重新讀題，並針對誤解「把正視與俯視方向混淆。」排除另一解讀。"
    },
    "difficultyReason": "基礎方向對應。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能區分長、寬、高。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「辨認正視圖保留的方向」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：第三方向寬沿視線消失。 正確選項為「長與高」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "50c1145903e2e05f044bc7639e4f0c9d33ee269648791b17bb77b25abf914d43"
  },
  {
    "questionId": "u08-s012-v002",
    "unitId": "u08",
    "skillId": "solid-views-basic",
    "contentSha256": "7391e7d88d179a8a1e6e5d1992f8b7a22a5062a7de720b61745e618a7c1240d9",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "上方觀看唯一對應俯視。",
    "derivedAnswer": "俯視圖",
    "storedAnswer": "俯視圖",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「俯視圖」符合目標「辨認俯視圖的觀察方向」。其餘選項分別違反：正視圖從正面觀看。；側視圖從左或右側觀看。；三視圖使用正投影，不是透視表現。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三視圖基本判讀」講義已定義範圍；本題特別使用：觀察者位於物體上方。",
      "unitConflict": "本題不涉及數值單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「辨認俯視圖的觀察方向」重新讀題，並針對誤解「把上方視角誤稱正視。」排除另一解讀。"
    },
    "difficultyReason": "單一定義辨認。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "不需額外先備。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「辨認俯視圖的觀察方向」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：上方觀看唯一對應俯視。 正確選項為「俯視圖」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "e6075e0be897d09ff6360bbc01ec73ccea957f451c3e5c568369df3972243e08"
  },
  {
    "questionId": "u08-s012-v003",
    "unitId": "u08",
    "skillId": "solid-views-basic",
    "contentSha256": "42e6beb72921ce53f9a81cf1011ab0b4def6fa172d20c997f2e64934aa866b20",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "由長方體頂面尺寸重查。",
    "derivedAnswer": "9 公分×4 公分",
    "storedAnswer": "9 公分×4 公分",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「9 公分×4 公分」符合目標「判讀長方體俯視圖尺寸」。其餘選項分別違反：這是正視圖尺寸。；這是側視圖尺寸。；視圖是二維，不列三個尺寸。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三視圖基本判讀」講義已定義範圍；本題特別使用：長 9、寬 4、高 6 公分。",
      "unitConflict": "兩個視圖尺寸均以公分表示，不計面積。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「判讀長方體俯視圖尺寸」重新讀題，並針對誤解「把高度帶入俯視圖。」排除另一解讀。"
    },
    "difficultyReason": "直接尺寸配對。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能辨認俯視方向。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「判讀長方體俯視圖尺寸」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：由長方體頂面尺寸重查。 正確選項為「9 公分×4 公分」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "5e2c2f632d956a7e84823b20004fdb1b5ff8385a7777c40a43913de347d5b04a"
  },
  {
    "questionId": "u08-s012-v004",
    "unitId": "u08",
    "skillId": "solid-views-basic",
    "contentSha256": "4167fbece6292410d5b6c5f56c3797bfbe543ff893099eca8cb4dbc9d0823693",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "從右側觀看時，長方向沿視線被壓縮，只留下寬4與高6，所以輪廓為4×6。",
    "derivedAnswer": "4 公分×6 公分",
    "storedAnswer": "4 公分×6 公分",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐項代回後只有「4 公分×6 公分」成立；其他三項分別因：這是正視圖。；這是俯視圖。；沒有兩個高度方向。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三視圖基本判讀」講義已定義範圍；本題特別使用：長 9、寬 4、高 6 公分。",
      "unitConflict": "尺寸單位公分。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "題幹明確要求「判讀長方體側視圖尺寸」，沒有第二種合理所求。；已逐一對照題幹、圖示與四個選項，確認不會形成第二個合理答案。"
    },
    "difficultyReason": "標準方向配對。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能辨認長寬高。",
    "languageCheck": "使用臺灣繁體中文；條件、所求量與選項比較基準均明示。",
    "reviewerDecision": "pass",
    "reviewerNote": "u08-s012-v004 的中央獨立審查使用另一條推導路徑：從右側觀看時，長方向沿視線被壓縮，只留下寬4與高6，所以輪廓為4×6。 這段推導不依賴儲存答案；再將四個選項逐一代回題幹與圖示，確認只有儲存答案符合，並檢查單位、比例、未按比例警語與第二種解讀。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "dc7098ddcd4597f0b75fcb55654fd1381f27c8044e83969a8ef376dd4d6ea049"
  },
  {
    "questionId": "u08-s012-v005",
    "unitId": "u08",
    "skillId": "solid-views-basic",
    "contentSha256": "f5729af3567313ea65819cd83e0ebdba6f980dbd60b18279c59ad867d3606038",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "若每格一塊總數 5；提高任一格會更多。",
    "derivedAnswer": "至少有 5 塊",
    "storedAnswer": "至少有 5 塊",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「至少有 5 塊」符合目標「由俯視占用格判斷方塊數下限」。其餘選項分別違反：每格可能向上堆疊多塊。；堆疊高度可大於 1。；每個占用格至少有一塊。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三視圖基本判讀」講義已定義範圍；本題特別使用：俯視有 5 個占用格。",
      "unitConflict": "答案以「塊」計數。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由俯視占用格判斷方塊數下限」重新讀題，並針對誤解「把占用格數直接當總塊數。」排除另一解讀。"
    },
    "difficultyReason": "需區分下限與唯一值。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能理解俯視壓縮高度。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由俯視占用格判斷方塊數下限」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：若每格一塊總數 5；提高任一格會更多。 正確選項為「至少有 5 塊」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "546dd8f1dcd9ede3f7a4fe9d7d055856b1abf3953d75f6168b0b6f931d515792"
  },
  {
    "questionId": "u08-s012-v006",
    "unitId": "u08",
    "skillId": "solid-views-basic",
    "contentSha256": "e7ca4b1d71d36dbaa966a932d9f9141960a24f814a554fbb258117f9e31243d4",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "三尺寸為長 8、寬 3、高 5。",
    "derivedAnswer": "高 5 公分，寬 3 公分",
    "storedAnswer": "高 5 公分，寬 3 公分",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「高 5 公分，寬 3 公分」符合目標「由兩視圖恢復長方體尺寸」。其餘選項分別違反：把兩視圖的第二方向互換。；共同 8 已指定為長。；俯視第二尺寸才是寬。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三視圖基本判讀」講義已定義範圍；本題特別使用：正視 8×5。",
      "unitConflict": "所有尺寸以公分表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由兩視圖恢復長方體尺寸」重新讀題，並針對誤解「未對齊共同方向。」排除另一解讀。"
    },
    "difficultyReason": "需整合兩張視圖。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能判讀正視與俯視尺寸。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由兩視圖恢復長方體尺寸」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：三尺寸為長 8、寬 3、高 5。 正確選項為「高 5 公分，寬 3 公分」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "a0ea3253579f018d1841df7ba5a01f0c198476acff5a2bcc54a6d24a632c3db6"
  },
  {
    "questionId": "u08-s012-v007",
    "unitId": "u08",
    "skillId": "solid-views-basic",
    "contentSha256": "acfd1531d6d4722139ec6b2782947659745844f1e5db9a3eb3fbc10192629517",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "任一面尺寸 s×s。",
    "derivedAnswer": "正方形",
    "storedAnswer": "正方形",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「正方形」符合目標「判斷正方體基本三視圖輪廓」。其餘選項分別違反：正方體各面都是正方形。；正方體沒有圓形面。；正投影輪廓不是三角形。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三視圖基本判讀」講義已定義範圍；本題特別使用：物體為正方體。",
      "unitConflict": "本題不涉及數值單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「判斷正方體基本三視圖輪廓」重新讀題，並針對誤解「認為不同視向一定產生不同形狀。」排除另一解讀。"
    },
    "difficultyReason": "基本立體性質應用。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能辨認正方體各面。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「判斷正方體基本三視圖輪廓」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：任一面尺寸 s×s。 正確選項為「正方形」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "be6ccb1f2ee552f52a3c43e79e48f2fc126d0319b93ee6f9ae671e78bbac315a"
  },
  {
    "questionId": "u08-s012-v008",
    "unitId": "u08",
    "skillId": "solid-views-basic",
    "contentSha256": "f6cda7426394f593add4111695710b2e2b908e8d62812ccefcb979c2555962ff",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "例如長寬高為 5、2、5 的長方體也可在 5×5 面作正面。",
    "derivedAnswer": "不能，圓柱或不同深度的柱體等也可能有正方形正視輪廓",
    "storedAnswer": "不能，圓柱或不同深度的柱體等也可能有正方形正視輪廓",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「不能，圓柱或不同深度的柱體等也可能有正方形正視輪廓」符合目標「判斷單一視圖是否足以確定立體」。其餘選項分別違反：單一投影無法顯示深度。；那只描述投影，不是立體全部面。；正方體正視圖確實可以是正方形。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三視圖基本判讀」講義已定義範圍；本題特別使用：只提供正視輪廓為正方形。",
      "unitConflict": "本題不涉及數值單位。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「判斷單一視圖是否足以確定立體」重新讀題，並針對誤解「由單一輪廓過度推論完整立體。」排除另一解讀。"
    },
    "difficultyReason": "資訊充分性進階題。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能理解投影資訊遺失。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「判斷單一視圖是否足以確定立體」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：例如長寬高為 5、2、5 的長方體也可在 5×5 面作正面。 正確選項為「不能，圓柱或不同深度的柱體等也可能有正方形正視輪廓」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "5274e79cb46e38c564231d34b32f41c83661e2edfcf8c33b87e308c5f33bd0f6"
  },
  {
    "questionId": "u08-s012-v009",
    "unitId": "u08",
    "skillId": "solid-views-basic",
    "contentSha256": "728986ac9f3637445a2d940130fda3f8943e6e026bc7424ff078a1cf7df4d8ee",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "其餘總數與占用格數仍不確定。",
    "derivedAnswer": "組合中至少有一堆高度為 4",
    "storedAnswer": "組合中至少有一堆高度為 4",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「組合中至少有一堆高度為 4」符合目標「由正視高度序列推出必要存在的堆高」。其餘選項分別違反：2+4+1 只是各欄最高值，不一定是總數。；正視圖只顯示各欄最大值。；每欄可能有多個深度位置。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三視圖基本判讀」講義已定義範圍；本題特別使用：正視三欄高度 [2,4,1]。",
      "unitConflict": "高度以方塊層數計數。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由正視高度序列推出必要存在的堆高」重新讀題，並針對誤解「把最高值序列加總成總塊數。」排除另一解讀。"
    },
    "difficultyReason": "需從最大值條件推必要存在性。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "能理解遮蔽與最大值。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由正視高度序列推出必要存在的堆高」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：其餘總數與占用格數仍不確定。 正確選項為「組合中至少有一堆高度為 4」。四選項逐項核對後真值序列為 [False, True, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "21b36fa48410490ed32f682047d718edbd13a4f8b3311ed6a634bf72165e2c6e"
  },
  {
    "questionId": "u08-s012-v010",
    "unitId": "u08",
    "skillId": "solid-views-basic",
    "contentSha256": "a6d8f029718ed5c7d49bdddf912a2b4867f3f939693d1a8fcb1a67aad56ff2ca",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "由櫃體頂面尺寸確認。",
    "derivedAnswer": "120 公分×45 公分",
    "storedAnswer": "120 公分×45 公分",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「120 公分×45 公分」符合目標「由家具尺寸判讀俯視圖」。其餘選項分別違反：這是正視圖。；這是側視圖。；俯視圖是二維圖。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三視圖基本判讀」講義已定義範圍；本題特別使用：櫃體長 120、深 45、高 80 公分。",
      "unitConflict": "兩尺寸均以公分表示。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由家具尺寸判讀俯視圖」重新讀題，並針對誤解「把高度帶入俯視圖。」排除另一解讀。"
    },
    "difficultyReason": "工程圖中的三尺寸是必要資訊。",
    "literacyContextNecessity": "家具能否放入空間通常看俯視占地，必須使用長與深而非高度。",
    "prerequisiteCheck": "能將深度對應到寬方向。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由家具尺寸判讀俯視圖」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：由櫃體頂面尺寸確認。 正確選項為「120 公分×45 公分」。四選項逐項核對後真值序列為 [True, False, False, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "c0a2184af2aa76f9f050df8c88f80654eda14c682b2e806cbc3f52adfd0154e8"
  },
  {
    "questionId": "u08-s012-v011",
    "unitId": "u08",
    "skillId": "solid-views-basic",
    "contentSha256": "d199975354883a410b01fb548472dd498e7dba4e50a899346022953d19d13f78",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "俯視圖應為 30×12。",
    "derivedAnswer": "360 平方公分",
    "storedAnswer": "360 平方公分",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「360 平方公分」符合目標「由正側視圖恢復包裝盒底面積」。其餘選項分別違反：用正視面積 30×20。；用側視面積 12×20。；把兩視圖面積相加後誤算。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三視圖基本判讀」講義已定義範圍；本題特別使用：正視 30×20。",
      "unitConflict": "長、寬為公分，乘積平方公分。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「由正側視圖恢復包裝盒底面積」重新讀題，並針對誤解「直接用任一視圖面積當底面積。」排除另一解讀。"
    },
    "difficultyReason": "實際包裝占地需從不同視圖抽取尺寸。",
    "literacyContextNecessity": "倉儲占地取決於盒底長與寬，這兩個尺寸分散在正視與側視圖中，不能只看單一視圖。",
    "prerequisiteCheck": "能整合兩視圖與面積。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「由正側視圖恢復包裝盒底面積」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：俯視圖應為 30×12。 正確選項為「360 平方公分」。四選項逐項核對後真值序列為 [False, False, False, True]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "0275a5432ebba264c0dd21c4166398a5ee711522b6f6721a62d67d6ba8e8a2f1"
  },
  {
    "questionId": "u08-s012-v012",
    "unitId": "u08",
    "skillId": "solid-views-basic",
    "contentSha256": "8ac5cdf6f677cd3c017544c9000523bf5775f3f1243e925d64dd904861a0f6fb",
    "reviewVersion": "human-review-r4.0",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "independentSolution": "獨立檢查可行性：8=3+1+1+1+1+1，10=3+3+1+1+1+1，14=3+3+3+3+1+1，皆可安排最高3；只有5低於六格下界。",
    "derivedAnswer": "5 塊",
    "storedAnswer": "5 塊",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "逐一代回題意後，只有「5 塊」符合目標「以俯視占用數判定不可能的總數」。其餘選項分別違反：可有一堆3層，其餘五格中四格1層、另一格1層，總數可達8。；可配置兩堆3層與四堆1層，總數10且最高仍為3。；可配置四堆3層與兩堆1層，總數14且最高仍為3。",
      "undefinedSymbol": "題幹中的符號與名詞均屬技能「三視圖基本判讀」講義已定義範圍；本題特別使用：俯視有6個占用格。",
      "unitConflict": "答案為方塊個數，層數只作上限與可行性檢查。",
      "roundingConflict": "全部資料為精確值，不涉及四捨五入。",
      "domainBoundary": "只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
      "alternateReading": "已以所求量「以俯視占用數判定不可能的總數」重新讀題，並針對誤解「只看最高層數，忽略每個占用格至少一塊。」排除另一解讀。"
    },
    "difficultyReason": "情境同時給占用與輪廓資料，需先選出最強的基本下界。",
    "literacyContextNecessity": "倉庫盤點需由俯視占用格推最低存量，再用兩向最高層數檢查其他候選是否可實現。",
    "prerequisiteCheck": "需能由俯視格數求最低方塊數。",
    "languageCheck": "題幹明示必要條件與所求量；關鍵詞為「以俯視占用數判定不可能的總數」，沒有依未提供圖形或比例推論。",
    "reviewerDecision": "pass",
    "reviewerNote": "獨立重算：獨立檢查可行性：8=3+1+1+1+1+1，10=3+3+1+1+1+1，14=3+3+3+3+1+1，皆可安排最高3；只有5低於六格下界。 正確選項為「5 塊」。四選項逐項核對後真值序列為 [False, False, True, False]；邊界檢查：只使用 U08 鎖定技能與題幹明示條件，不依示意圖外觀推論。",
    "reviewedAt": "2026-07-12",
    "reviewSha256": "5543cae54275eda10ca4dc22590f13ee1093f1492800756e9c174c4ad926af0e"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u08-s012-fig001",
    "drawingSpecId": "u08-s012-draw001",
    "unitId": "u08",
    "skillSlot": "s012",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "purpose": "長方體標出長9、寬4、高6與右側觀察箭頭",
    "svgPath": "figures/u08/u08-s012-fig001.svg",
    "canvas": {
      "width": 820,
      "height": 430,
      "viewBox": "0 0 820 430"
    },
    "drawingSpec": {
      "coordinateSystem": "SVG 左上為原點，所有關鍵點與標籤位置固定於對應 SVG。",
      "visibleLineRules": "主要輪廓使用至少3px實線；標籤使用18px以上文字。",
      "hiddenLineRules": "本圖不使用隱藏線；不可由未畫出的邊推論。",
      "labelsAndPositions": "所有點名、角度、尺寸與觀察方向均固定在 SVG 內。",
      "tickMarksUnitsArrowsSymbols": "角弧、箭頭、度數與公分單位依題目需要完整標示。",
      "scaleStatus": "not-to-scale",
      "visualInferenceWarning": "示意圖未按比例，作答必須依題幹與標示資料。"
    },
    "altText": "長方體由右側觀看，保留寬與高。",
    "svgTitle": "長方體標出長9、寬4、高6與右側觀察箭頭",
    "svgDescription": "長方體由右側觀看，保留寬與高。",
    "mobileReadabilityReview": "在360px寬螢幕縮放後，主要標籤仍保持可辨識；不依顏色傳遞必要資訊。",
    "answerLeakageReview": "只呈現題幹已知結構與數值，不標示答案或計算結果。",
    "svgAssertions": [
      "<title",
      "<desc",
      "role=\"img\"",
      "未按比例"
    ],
    "figureReview": {
      "decision": "pass",
      "manualRenderedInspection": true,
      "reviewNote": "u08-s012-fig001 已核對線段、標籤、題幹資料、縮放警語與答案不外洩。",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "53ba24a975e66ae9eefe0f46a385c3da49d97d8daf67a9862b3b9c8b84ae9bdd"
  }
];

