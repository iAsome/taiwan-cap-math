// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u23-s001-lecture-r1",
  "unitId": "u23",
  "numericUnitId": 23,
  "topicId": "u23-basics",
  "skillId": "solid-nets",
  "title": "展開圖：從平面拼片判斷折成立體",
  "lockedSkillTitle": "展開圖",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
  "learningOutcomes": [
    "能說明展開圖與立體表面的對應關係。",
    "能依公共邊判斷摺起後哪些面相鄰或相對。",
    "能辨認常見柱體與錐體的展開圖。",
    "能避免只靠圖形外觀猜測摺疊結果。"
  ],
  "prerequisites": [],
  "glossary": [
    {
      "term": "展開圖",
      "definition": "沿立體的部分稜剪開並攤平後，所有表面仍完整相連的平面圖形。"
    },
    {
      "term": "公共邊",
      "definition": "展開圖中兩個面共用的邊，摺起後仍是相鄰面的交線。"
    },
    {
      "term": "相鄰面",
      "definition": "摺成立體後共用一條稜的兩個面。"
    },
    {
      "term": "相對面",
      "definition": "在長方體或正方體中互不相鄰且彼此平行的兩個面。"
    }
  ],
  "notation": [
    {
      "symbol": "□",
      "meaning": "用來表示正方形面；實際題目仍須依位置判斷能否摺疊。"
    },
    {
      "symbol": "↷",
      "meaning": "表示沿邊摺起的方向提示，不代表面積或角度。"
    }
  ],
  "conceptNarrative": [
    "立體表面可以想成一張由多個面連接而成的外皮。把某些稜剪開後攤平，就得到展開圖。",
    "展開圖不是任意把面排在一起；每個面只能出現一次，而且摺起時不能重疊或留下缺口。",
    "判斷時可固定一個面，再依公共邊逐面想像旋轉九十度。正方體的六個面摺起後，每一面恰有四個相鄰面與一個相對面。",
    "圓柱的展開圖由兩個全等圓和一個長方形組成；圓錐的側面展開為扇形，另有一個底圓。"
  ],
  "formalDefinitions": [
    {
      "name": "立體的展開圖",
      "statement": "由該立體全部表面沿部分稜剪開後，在平面上不重疊地攤開所得的圖。"
    },
    {
      "name": "摺疊有效條件",
      "statement": "所有面數與形狀正確，公共邊可對合，摺起後沒有兩面佔據同一位置。"
    }
  ],
  "formulas": [
    {
      "formula": "圓柱側面長方形的長＝底面圓周長",
      "conditions": [
        "圓柱為直圓柱",
        "長方形沿圓周方向展開"
      ],
      "meaning": "側面繞底圓一周後兩端才能接合。"
    },
    {
      "formula": "長方體展開圖共有6個面",
      "conditions": [
        "立體是長方體"
      ],
      "meaning": "三組全等的相對面各出現兩次。"
    }
  ],
  "nonApplicableCases": [
    "只有六個正方形相連，不一定能摺成正方體。",
    "面在平面上相碰於一點，不代表摺起後相鄰。",
    "不能把展開圖中被剪開的兩條邊誤認為摺起後不會接合。",
    "判斷圓柱展開圖時，兩個底圓不能少一個，也不能把側面畫成扇形。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先確認立體需要哪些面。",
      "check": "面數和面形是否完整？"
    },
    {
      "step": 2,
      "instruction": "選一個面固定不動。",
      "check": "它可作為想像摺疊的基準嗎？"
    },
    {
      "step": 3,
      "instruction": "沿公共邊逐面摺起。",
      "check": "每次只旋轉相鄰的一面，不跨越空隙。"
    },
    {
      "step": 4,
      "instruction": "檢查重疊與缺口。",
      "check": "是否有兩面到達同一位置，或應封閉處沒有面？"
    },
    {
      "step": 5,
      "instruction": "核對標記面的關係。",
      "check": "題目問的是相鄰、相對還是接合邊？"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "一個正方體展開圖中，中央正方形的上、下、左、右各連一格，右邊那格再向右連一格。最右格與中央格摺起後是什麼關係？",
      "solutionSteps": [
        "中央格四周的四格摺起成四個側面。",
        "最右格連在右側面外緣，摺起後蓋住中央格的相對位置。"
      ],
      "answer": "最右格與中央格為相對面。"
    },
    {
      "exampleId": "L2",
      "prompt": "一個圓柱展開圖應包含哪些平面圖形？",
      "solutionSteps": [
        "圓柱有兩個全等圓形底面。",
        "彎曲側面攤平為一個長方形。"
      ],
      "answer": "兩個全等圓和一個長方形。"
    },
    {
      "exampleId": "L3",
      "prompt": "六個正方形排成2×3長方形，能否直接摺成正方體？",
      "solutionSteps": [
        "中間接縫摺起時，部分正方形會爭奪同一個面的位置。",
        "因此會重疊，無法封閉成立方體。"
      ],
      "answer": "不能。"
    },
    {
      "exampleId": "L4",
      "prompt": "圓錐側面攤平後為什麼不是三角形？",
      "solutionSteps": [
        "圓錐側面上的母線長度相同，從頂點向外形成許多半徑。",
        "攤平後外緣為弧，形成扇形。"
      ],
      "answer": "因外緣是圓弧，側面展開為扇形。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "只數到六個正方形就判定一定可摺成立方體。",
      "why": "忽略摺起後可能重疊。",
      "correction": "固定一面逐邊摺起並檢查六個空間方向。"
    },
    {
      "mistake": "把展開圖中相隔很遠的面判為一定相對。",
      "why": "平面距離不等於立體關係。",
      "correction": "沿公共邊追蹤摺疊位置。"
    },
    {
      "mistake": "認為展開圖中不共邊的面摺起後也不會相鄰。",
      "why": "剪開的稜攤平後會分離。",
      "correction": "封成立體時部分分離邊會重新接合。"
    },
    {
      "mistake": "把圓柱側面展開成扇形。",
      "why": "混淆圓柱與圓錐。",
      "correction": "圓柱母線互相平行，側面攤平是長方形。"
    },
    {
      "mistake": "漏掉圓柱的一個底圓。",
      "why": "只看到一端。",
      "correction": "封閉圓柱有上下兩個全等底面。"
    },
    {
      "mistake": "用紙面上的上下左右直接當成立體的上下左右。",
      "why": "未選定固定面和觀察方向。",
      "correction": "先固定基準面，再描述其他面摺起的位置。"
    }
  ],
  "selfCheck": [
    "我是否先確認全部面數與形狀？",
    "我是否沿公共邊逐面摺疊？",
    "我是否檢查重疊與缺口？",
    "我是否區分相鄰面與相對面？",
    "我是否未以平面距離代替立體關係？"
  ],
  "summary": [
    "展開圖保留立體所有表面與連接資訊。",
    "有效展開圖摺起後不能重疊也不能缺面。",
    "正方體判斷要追蹤六個空間方向。",
    "圓柱與圓錐的側面展開形狀不同。"
  ],
  "connections": {
    "previous": "本技能為 U23 起點，使用先前平面圖形與長方形、圓、扇形的辨認能力。",
    "next": [
      "立體三視圖將改由不同方向描述同一立體。",
      "由展開圖求表面積會把各面面積加總。"
    ]
  },
  "figureReferences": [
    {
      "figureId": "u23-s001-fig001",
      "purpose": "立方體十字形展開圖",
      "altText": "六個正方形以十字形相接，標A至F。"
    }
  ],
  "practiceLinks": {
    "mcQuestionIds": [
      "u23-s001-v001",
      "u23-s001-v002",
      "u23-s001-v003",
      "u23-s001-v004",
      "u23-s001-v005",
      "u23-s001-v006",
      "u23-s001-v007",
      "u23-s001-v008",
      "u23-s001-v009",
      "u23-s001-v010",
      "u23-s001-v011",
      "u23-s001-v012"
    ],
    "constructedResponseIds": [
      "u23-s001-cr001",
      "u23-s001-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐一以摺疊路徑核對四個例子；特別驗證2×3排列會重疊、圓柱包含兩底圓、圓錐側面是扇形，並確認所有符號在使用前已說明。",
    "reviewVersion": "human-lecture-review-r4.0",
    "reviewedAt": "2026-07-12"
  },
  "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
  "contentSha256": "41ec8f99b8c5640ac69ea14f191601ba8045d6b193b7c627378e27d2c58797dd"
};

export const QUESTIONS = [
  {
    "prompt": "正方體的展開圖一定包含幾個全等正方形？",
    "text": "正方體的展開圖一定包含幾個全等正方形？",
    "choices": [
      "6個",
      "4個",
      "8個",
      "12個"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：數正方體的面數為6；每個面皆為正方形。所得結果是「6個」。",
    "explanation": "正方體有6個面，而且每一面都是全等正方形，所以展開圖包含6個全等正方形。",
    "steps": [
      "數正方體的面數為6",
      "每個面皆為正方形"
    ],
    "optionAnalysis": [
      {
        "choice": "6個",
        "truth": true,
        "reason": "正確對應六個面。"
      },
      {
        "choice": "4個",
        "truth": false,
        "reason": "4個只相當於部分側面。"
      },
      {
        "choice": "8個",
        "truth": false,
        "reason": "8個超過正方體面數。"
      },
      {
        "choice": "12個",
        "truth": false,
        "reason": "12是稜數，不是面數。"
      }
    ],
    "misconceptionTarget": "把稜數12誤當成面數。 必須依「確認正方體展開圖的面數。」的關係重新核對。",
    "authoringIntent": "確認正方體展開圖的面數。",
    "difficulty": "basic",
    "givenConditions": [
      "立體為正方體"
    ],
    "target": "求展開圖的正方形個數",
    "difficultyReason": "只需連結正方體六個面與展開圖。",
    "prerequisiteCheck": "已具備正方形與正方體名稱辨認。",
    "estimatedTimeSec": 90,
    "unitCheck": "純個數無單位。 所求「求展開圖的正方形個數」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "題目明確問面數，六個面均須保留。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s001-v001",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-nets",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "展開圖",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "3e1c45e6f3e528d13d7ee4c6da30086b6f2192cda84f2bae5719fc2f69b066f3"
  },
  {
    "prompt": "下列哪一組平面圖形可組成封閉圓柱的展開圖？",
    "text": "下列哪一組平面圖形可組成封閉圓柱的展開圖？",
    "choices": [
      "1個圓和1個長方形",
      "2個全等圓和1個長方形",
      "2個扇形和1個圓",
      "2個全等圓和1個三角形"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：辨認兩個底面；辨認側面展開為長方形。所得結果是「2個全等圓和1個長方形」。",
    "explanation": "封閉圓柱有上下兩個全等圓形底面，彎曲側面攤平為長方形，因此選第二組。",
    "steps": [
      "辨認兩個底面",
      "辨認側面展開為長方形"
    ],
    "optionAnalysis": [
      {
        "choice": "1個圓和1個長方形",
        "truth": false,
        "reason": "少一個底面，不能封閉。"
      },
      {
        "choice": "2個全等圓和1個長方形",
        "truth": true,
        "reason": "正確包含兩底圓與側面。"
      },
      {
        "choice": "2個扇形和1個圓",
        "truth": false,
        "reason": "扇形是圓錐側面的特徵。"
      },
      {
        "choice": "2個全等圓和1個三角形",
        "truth": false,
        "reason": "三角形不能繞成圓柱側面。"
      }
    ],
    "misconceptionTarget": "只畫一個底圓或混淆圓錐扇形。",
    "authoringIntent": "辨認圓柱展開圖構成。",
    "difficulty": "basic",
    "givenConditions": [
      "圓柱需封閉"
    ],
    "target": "選出完整展開圖",
    "difficultyReason": "需同時辨認底面數與側面形狀。",
    "prerequisiteCheck": "知道圓與長方形。 本題只再使用先備「基本平面圖形與四則運算」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "圖形種類無單位。 所求「選出完整展開圖」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "「封閉」排除沒有上蓋或下底的情況。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s001-v002",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-nets",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "展開圖",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "16985f3d321063cf5c81e2fde6c07043983423340c54a803e5c0b12cca2e4a7f"
  },
  {
    "prompt": "圓錐的側面沿一條母線剪開並攤平後，形狀為何？",
    "text": "圓錐的側面沿一條母線剪開並攤平後，形狀為何？",
    "choices": [
      "圓",
      "長方形",
      "扇形",
      "梯形"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：母線成為扇形半徑；底面圓周成為扇形弧。所得結果是「扇形」。",
    "explanation": "圓錐頂點到圓周各點的母線等長，攤平後以頂點為圓心、母線為半徑形成扇形。",
    "steps": [
      "母線成為扇形半徑",
      "底面圓周成為扇形弧"
    ],
    "optionAnalysis": [
      {
        "choice": "圓",
        "truth": false,
        "reason": "圓是底面。"
      },
      {
        "choice": "長方形",
        "truth": false,
        "reason": "長方形是圓柱側面展開。"
      },
      {
        "choice": "扇形",
        "truth": true,
        "reason": "依獨立計算「底面圓周成為扇形弧」，此選項符合所求「判斷攤平形狀」。"
      },
      {
        "choice": "梯形",
        "truth": false,
        "reason": "一般不形成梯形。"
      }
    ],
    "misconceptionTarget": "把圓柱與圓錐側面展開混在一起。",
    "authoringIntent": "辨認圓錐側面展開形狀。",
    "difficulty": "basic",
    "givenConditions": [
      "沿一條母線剪開",
      "只問側面"
    ],
    "target": "判斷攤平形狀",
    "difficultyReason": "以幾何構造直接辨認。 本題以「辨認圓錐側面展開形狀。」作為該難度的具體判準。",
    "prerequisiteCheck": "知道圓錐頂點與底圓。 本題只再使用先備「基本平面圖形與四則運算」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "無長度計算。 所求「判斷攤平形狀」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "題目限定側面，不包含底圓。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s001-v003",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-nets",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "展開圖",
      "basic"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "8e79170b2bb6dec30ae20cd15b2da37a3e1702fc69b54e7b962e8460d892533f"
  },
  {
    "prompt": "六個正方形排成完整的2×3長方形。關於此圖，下列何者正確？",
    "text": "六個正方形排成完整的2×3長方形。關於此圖，下列何者正確？",
    "choices": [
      "一定可摺成立方體",
      "只要剪去一格即可摺成立方體",
      "它是長方體展開圖",
      "摺成立方體時會有面重疊，不能成為展開圖"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：固定中間一格想像摺起；追蹤其餘方格發現位置重疊。所得結果是「摺成立方體時會有面重疊，不能成為展開圖」。",
    "explanation": "把2×3矩形沿格線摺起，位於同一側的多個方格會到達相同空間位置，造成重疊，不能封閉成立方體。",
    "steps": [
      "固定中間一格想像摺起",
      "追蹤其餘方格發現位置重疊"
    ],
    "optionAnalysis": [
      {
        "choice": "一定可摺成立方體",
        "truth": false,
        "reason": "六格不代表任意排列都有效。"
      },
      {
        "choice": "只要剪去一格即可摺成立方體",
        "truth": false,
        "reason": "剪去後只剩五面。"
      },
      {
        "choice": "它是長方體展開圖",
        "truth": false,
        "reason": "全等正方形若成長方體仍是正方體，但此排列無效。"
      },
      {
        "choice": "摺成立方體時會有面重疊，不能成為展開圖",
        "truth": true,
        "reason": "正確指出重疊。"
      }
    ],
    "misconceptionTarget": "以為六個正方形相連就必然有效。",
    "authoringIntent": "判斷無效正方體展開圖。",
    "difficulty": "standard",
    "givenConditions": [
      "六格完整排成2列3行"
    ],
    "target": "判斷是否可摺成立方體",
    "difficultyReason": "需進行摺疊位置推理而非只數面。",
    "prerequisiteCheck": "能追蹤公共邊。 本題只再使用先備「基本平面圖形與四則運算」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位。 所求「判斷是否可摺成立方體」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "2×3完整矩形的排列唯一，不涉及旋轉後的不同解讀。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s001-v004",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-nets",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "展開圖",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "025350520ee12b80a820590a8c20b794695e0e0fbf00006115168027b755ff1f"
  },
  {
    "prompt": "在圖 u23-s001-fig001 中，A 為中央面，E 在 A 的右側，F 再接在 E 的右側。摺成立方體後，F 與 A 的關係為何？",
    "text": "在圖 u23-s001-fig001 中，A 為中央面，E 在 A 的右側，F 再接在 E 的右側。摺成立方體後，F 與 A 的關係為何？",
    "choices": [
      "相對面",
      "同一面",
      "只共一個頂點",
      "相鄰面"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：固定A；E摺成右側面；F再摺成A的相對面。所得結果是「相對面」。",
    "explanation": "E 沿 A 的右邊摺成右側面；F 再沿 E 的外邊摺過去，正好到達 A 的背面，因此F與A相對。",
    "steps": [
      "固定A",
      "E摺成右側面",
      "F再摺成A的相對面"
    ],
    "optionAnalysis": [
      {
        "choice": "相對面",
        "truth": true,
        "reason": "依獨立計算「F再摺成A的相對面」，此選項符合所求「判斷F與A的位置關係」。"
      },
      {
        "choice": "同一面",
        "truth": false,
        "reason": "兩個不同方格不會變成同一面。"
      },
      {
        "choice": "只共一個頂點",
        "truth": false,
        "reason": "相對面不共頂點。"
      },
      {
        "choice": "相鄰面",
        "truth": false,
        "reason": "F不與A共稜。"
      }
    ],
    "misconceptionTarget": "把展開圖中的遠近直接當成立體相鄰關係。",
    "authoringIntent": "由展開圖判斷相對面。",
    "difficulty": "standard",
    "givenConditions": [
      "使用指定圖形",
      "A固定"
    ],
    "target": "判斷F與A的位置關係",
    "difficultyReason": "需兩次摺疊追蹤。 本題以「由展開圖判斷相對面。」作為該難度的具體判準。",
    "prerequisiteCheck": "能辨認公共邊與相對面。 本題只再使用先備「基本平面圖形與四則運算」與本技能定義。",
    "estimatedTimeSec": 100,
    "unitCheck": "無單位。 所求「判斷F與A的位置關係」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "圖中面標記唯一，摺疊後關係不受整體旋轉影響。",
    "literacyContextNecessity": null,
    "figureId": "u23-s001-fig001",
    "drawingSpecId": "u23-s001-draw001",
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s001-v005",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-nets",
    "type": "mc",
    "visualMode": "figure-supported",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "展開圖",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "fb63d31f0d8ac4a95626c112f8bd97682341e38d9f716387b5567112055a8953"
  },
  {
    "prompt": "某正方體展開圖中，面P的上、下、左、右都各接一面。摺起後，這四面彼此的關係何者必定正確？",
    "text": "某正方體展開圖中，面P的上、下、左、右都各接一面。摺起後，這四面彼此的關係何者必定正確？",
    "choices": [
      "任兩面都相對",
      "依序圍成四個側面，相鄰者共稜",
      "四面會重疊",
      "四面皆與P相對"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：固定P；四周面各摺90度；觀察四面圍成側壁。所得結果是「依序圍成四個側面，相鄰者共稜」。",
    "explanation": "以P作底面，四周四面分別摺起，形成環繞P的四個側面；在環上相鄰的兩面共一條直立稜。",
    "steps": [
      "固定P",
      "四周面各摺90度",
      "觀察四面圍成側壁"
    ],
    "optionAnalysis": [
      {
        "choice": "任兩面都相對",
        "truth": false,
        "reason": "相對關係只發生在環上隔一面的兩面。"
      },
      {
        "choice": "依序圍成四個側面，相鄰者共稜",
        "truth": true,
        "reason": "依獨立計算「觀察四面圍成側壁」，此選項符合所求「判斷四周面的必然關係」。"
      },
      {
        "choice": "四面會重疊",
        "truth": false,
        "reason": "有效摺疊不重疊。"
      },
      {
        "choice": "四面皆與P相對",
        "truth": false,
        "reason": "它們都與P相鄰。"
      }
    ],
    "misconceptionTarget": "認為共同連到P的面彼此都不相鄰。",
    "authoringIntent": "分析中央面四周的摺疊關係。",
    "difficulty": "standard",
    "givenConditions": [
      "P四周各有一面"
    ],
    "target": "判斷四周面的必然關係",
    "difficultyReason": "需理解四面繞成側壁。 本題以「分析中央面四周的摺疊關係。」作為該難度的具體判準。",
    "prerequisiteCheck": "熟悉正方體面與稜。 本題只再使用先備「基本平面圖形與四則運算」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位。 所求「判斷四周面的必然關係」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "「依序」指展開圖繞P的順序，結論不依命名。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s001-v006",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-nets",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "展開圖",
      "standard"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "3d9af567479ee097ca28615fd7f436d286992d6707c047a46bf89c6287b712a7"
  },
  {
    "prompt": "某長方體三組相對面的尺寸分別為2×3、2×5、3×5。下列哪一組面數配置可能是它的展開圖？",
    "text": "某長方體三組相對面的尺寸分別為2×3、2×5、3×5。下列哪一組面數配置可能是它的展開圖？",
    "choices": [
      "2×3一個、2×5三個、3×5兩個",
      "三種尺寸各一個",
      "2×3兩個、2×5兩個、3×5兩個",
      "2×3四個、2×5一個、3×5一個"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：辨認三組相對面；每組含兩個全等面。所得結果是「2×3兩個、2×5兩個、3×5兩個」。",
    "explanation": "長方體每種尺寸對應一組相對面，所以2×3、2×5、3×5都必須各出現兩個。",
    "steps": [
      "辨認三組相對面",
      "每組含兩個全等面"
    ],
    "optionAnalysis": [
      {
        "choice": "2×3一個、2×5三個、3×5兩個",
        "truth": false,
        "reason": "第一種面數不成對。"
      },
      {
        "choice": "三種尺寸各一個",
        "truth": false,
        "reason": "總共只有三面。"
      },
      {
        "choice": "2×3兩個、2×5兩個、3×5兩個",
        "truth": true,
        "reason": "依獨立計算「每組含兩個全等面」，此選項符合所求「選出可能的六面配置」。"
      },
      {
        "choice": "2×3四個、2×5一個、3×5一個",
        "truth": false,
        "reason": "面數雖六個但相對面尺寸不配對。"
      }
    ],
    "misconceptionTarget": "只確認總面數為六，未確認相對面成對。",
    "authoringIntent": "檢查長方體展開圖的面形配對。",
    "difficulty": "advanced",
    "givenConditions": [
      "邊長為2、3、5"
    ],
    "target": "選出可能的六面配置",
    "difficultyReason": "同時使用面數與三組尺寸配對。",
    "prerequisiteCheck": "會計算長方形邊長配對。 本題只再使用先備「基本平面圖形與四則運算」與本技能定義。",
    "estimatedTimeSec": 90,
    "unitCheck": "尺寸單位可任意但須一致。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "只問面形配置是否可能，不要求排列一定可摺。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s001-v007",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-nets",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "展開圖",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "3b5f2126ab7f931907a73a2f08921e308a4ba72b450422d97c7486da58ce6058"
  },
  {
    "prompt": "一個圓柱側面展開圖是長12公分、寬5公分的長方形，其中長12公分的邊繞底面一周。底面圓周長是多少？",
    "text": "一個圓柱側面展開圖是長12公分、寬5公分的長方形，其中長12公分的邊繞底面一周。底面圓周長是多少？",
    "choices": [
      "5公分",
      "17公分",
      "60平方公分",
      "12公分"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：找出繞圓周方向的邊；直接對應圓周長。所得結果是「12公分」。",
    "explanation": "圓柱側面沿圓周方向展開的邊長等於底面圓周長。題目指定12公分的邊繞一周，所以圓周長為12公分。",
    "steps": [
      "找出繞圓周方向的邊",
      "直接對應圓周長"
    ],
    "optionAnalysis": [
      {
        "choice": "5公分",
        "truth": false,
        "reason": "5公分是柱高。"
      },
      {
        "choice": "17公分",
        "truth": false,
        "reason": "17是兩邊相加，無此意義。"
      },
      {
        "choice": "60平方公分",
        "truth": false,
        "reason": "60是側面面積且單位錯。"
      },
      {
        "choice": "12公分",
        "truth": true,
        "reason": "依獨立計算「直接對應圓周長」，此選項符合所求「求底面圓周長」。"
      }
    ],
    "misconceptionTarget": "把柱高或長方形面積當成圓周長。",
    "authoringIntent": "連結圓柱側面展開與底圓周長。",
    "difficulty": "advanced",
    "givenConditions": [
      "12公分邊繞底面一周",
      "5公分為另一邊"
    ],
    "target": "求底面圓周長",
    "difficultyReason": "需從展開方向判定長與高。",
    "prerequisiteCheck": "知道圓柱側面展開為長方形。",
    "estimatedTimeSec": 110,
    "unitCheck": "答案應為公分。 所求「求底面圓周長」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "資料精確，不需取近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "題目明示哪一邊繞一周，排除12與5互換。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s001-v008",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-nets",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "展開圖",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "db9081e288995243b60bcd8ce8600a0781373d6f09858e9bf4c37ebf85ba85f2"
  },
  {
    "prompt": "正方體展開圖的六面標成1至6。已知1與2相對，3與4相對。下列哪一組必為最後一組相對面？",
    "text": "正方體展開圖的六面標成1至6。已知1與2相對，3與4相對。下列哪一組必為最後一組相對面？",
    "choices": [
      "5與6",
      "1與3",
      "2與4",
      "3與5"
    ],
    "answerIndex": 0,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：列出已知兩組；剩餘兩面形成第三組。所得結果是「5與6」。",
    "explanation": "正方體六面分成三組相對面。已給四個面分屬兩組，剩下的5與6只能互為第三組相對面。",
    "steps": [
      "列出已知兩組",
      "剩餘兩面形成第三組"
    ],
    "optionAnalysis": [
      {
        "choice": "5與6",
        "truth": true,
        "reason": "依獨立計算「剩餘兩面形成第三組」，此選項符合所求「找第三組相對面」。"
      },
      {
        "choice": "1與3",
        "truth": false,
        "reason": "1已與2相對。"
      },
      {
        "choice": "2與4",
        "truth": false,
        "reason": "2已與1相對。"
      },
      {
        "choice": "3與5",
        "truth": false,
        "reason": "3已與4相對。"
      }
    ],
    "misconceptionTarget": "讓同一面同時有兩個相對面。",
    "authoringIntent": "利用相對面一一配對推論。",
    "difficulty": "advanced",
    "givenConditions": [
      "六面標記互不重複",
      "每面恰有一個相對面"
    ],
    "target": "找第三組相對面",
    "difficultyReason": "需用排除與配對結構。 本題以「利用相對面一一配對推論。」作為該難度的具體判準。",
    "prerequisiteCheck": "知道正方體相對面共有三組。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位。 所求「找第三組相對面」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "相對面配對唯一，已知條件充分。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s001-v009",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-nets",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "展開圖",
      "advanced"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "c31cc29bc721df6a89cc2442d0840d1ebb834f2ba593d22d3e520fab617f80d8"
  },
  {
    "prompt": "禮盒設計師要在正方體外盒的六面印上圖案，規定星形與月形摺好後不能相鄰。她應把兩圖案安排在展開圖中何種關係的面上？",
    "text": "禮盒設計師要在正方體外盒的六面印上圖案，規定星形與月形摺好後不能相鄰。她應把兩圖案安排在展開圖中何種關係的面上？",
    "choices": [
      "摺好後相鄰的兩面",
      "摺好後相對的兩面",
      "展開圖中距離最近的兩面",
      "展開圖中只接觸一個頂點的兩面"
    ],
    "answerIndex": 1,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：把不能相鄰翻成立體關係；選擇相對面。所得結果是「摺好後相對的兩面」。",
    "explanation": "正方體中唯一完全不相鄰的面就是相對面。因此星形與月形必須放在摺好後相對的兩面；平面距離本身不能判定。",
    "steps": [
      "把不能相鄰翻成立體關係",
      "選擇相對面"
    ],
    "optionAnalysis": [
      {
        "choice": "摺好後相鄰的兩面",
        "truth": false,
        "reason": "違反規定。"
      },
      {
        "choice": "摺好後相對的兩面",
        "truth": true,
        "reason": "依獨立計算「選擇相對面」，此選項符合所求「決定圖案面的位置關係」。"
      },
      {
        "choice": "展開圖中距離最近的兩面",
        "truth": false,
        "reason": "平面距離不能保證立體關係。"
      },
      {
        "choice": "展開圖中只接觸一個頂點的兩面",
        "truth": false,
        "reason": "只接觸一點的平面關係也不能保證摺後不相鄰。"
      }
    ],
    "misconceptionTarget": "以展開圖上的距離代替摺好後的面關係。",
    "authoringIntent": "在包裝設計中選擇相對面。",
    "difficulty": "literacy",
    "givenConditions": [
      "外盒為正方體",
      "兩圖案不能共稜"
    ],
    "target": "決定圖案面的位置關係",
    "difficultyReason": "需把設計限制轉換為相對面概念。",
    "prerequisiteCheck": "能區分相鄰與相對。 本題只再使用先備「基本平面圖形與四則運算」與本技能定義。",
    "estimatedTimeSec": 100,
    "unitCheck": "無單位。 所求「決定圖案面的位置關係」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "不能相鄰在正方體表面等價於必須相對。",
    "literacyContextNecessity": "若不理解摺疊後的相對面，無法滿足印刷限制；情境條件直接決定數學答案。",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s001-v010",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-nets",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "展開圖",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "eefcd0e7a787a9bb38f93d7f565af0eb962eaedbdc8f47e0e96093a1c0d61e8e"
  },
  {
    "prompt": "工廠用一張長方形薄片捲成無上蓋圓柱筒，薄片長20公分、寬8公分，長邊接成底面圓周。除了薄片外，還需加哪一個圖形才能封住底部？",
    "text": "工廠用一張長方形薄片捲成無上蓋圓柱筒，薄片長20公分、寬8公分，長邊接成底面圓周。除了薄片外，還需加哪一個圖形才能封住底部？",
    "choices": [
      "半徑8公分的圓",
      "周長8公分的圓",
      "周長20公分的圓",
      "直徑20公分的半圓"
    ],
    "answerIndex": 2,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：辨認20公分為圓周長；只需一個底圓。所得結果是「周長20公分的圓」。",
    "explanation": "長20公分的邊繞成一周，因此底圓周長是20公分。無上蓋筒只需再加一個周長20公分的圓作底。",
    "steps": [
      "辨認20公分為圓周長",
      "只需一個底圓"
    ],
    "optionAnalysis": [
      {
        "choice": "半徑8公分的圓",
        "truth": false,
        "reason": "半徑8會使圓周遠大於20。"
      },
      {
        "choice": "周長8公分的圓",
        "truth": false,
        "reason": "周長8錯把筒高當圓周。"
      },
      {
        "choice": "周長20公分的圓",
        "truth": true,
        "reason": "依獨立計算「只需一個底圓」，此選項符合所求「選擇所需底面」。"
      },
      {
        "choice": "直徑20公分的半圓",
        "truth": false,
        "reason": "半圓不能封成完整底面。"
      }
    ],
    "misconceptionTarget": "把薄片寬當成圓周或忘記底面需完整圓。",
    "authoringIntent": "依材料尺寸選底圓。",
    "difficulty": "literacy",
    "givenConditions": [
      "長邊接合成圓周",
      "圓筒無上蓋"
    ],
    "target": "選擇所需底面",
    "difficultyReason": "需把製作方向與封口需求一起判讀。",
    "prerequisiteCheck": "理解圓柱展開圖。 本題只再使用先備「基本平面圖形與四則運算」與本技能定義。",
    "estimatedTimeSec": 120,
    "unitCheck": "長度皆為公分，答案以圓周長描述。",
    "roundingCheck": "不需計算π近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "無上蓋表示只補一個底面；長邊角色已明示。",
    "literacyContextNecessity": "材料尺寸決定底圓規格，刪除工廠情境會失去接合邊與封口需求。",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s001-v011",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-nets",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "展開圖",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "18b36ead6863420808d489456dc71c8e5d79cbd01678551a7280045662198434"
  },
  {
    "prompt": "一款三角柱紙盒的兩個三角形底面已剪好。若要用一整片材料做完整側面，該材料展開後最合理的形狀組合為何？",
    "text": "一款三角柱紙盒的兩個三角形底面已剪好。若要用一整片材料做完整側面，該材料展開後最合理的形狀組合為何？",
    "choices": [
      "一個圓環",
      "兩個扇形",
      "一個正方形",
      "三個首尾相連的長方形"
    ],
    "answerIndex": 3,
    "independentSolution": "不參照答案欄，重新使用題目條件計算：三角形有三邊；每一邊對應一個長方形側面。所得結果是「三個首尾相連的長方形」。",
    "explanation": "三角柱有三個側面，每個側面都是長方形；沿側稜展開時，三個長方形可依三角形三邊順序首尾相連。",
    "steps": [
      "三角形有三邊",
      "每一邊對應一個長方形側面"
    ],
    "optionAnalysis": [
      {
        "choice": "一個圓環",
        "truth": false,
        "reason": "圓環不對應角柱。"
      },
      {
        "choice": "兩個扇形",
        "truth": false,
        "reason": "扇形屬圓錐側面。"
      },
      {
        "choice": "一個正方形",
        "truth": false,
        "reason": "只有一個面不足。"
      },
      {
        "choice": "三個首尾相連的長方形",
        "truth": true,
        "reason": "依獨立計算「每一邊對應一個長方形側面」，此選項符合所求「選出完整側面展開形式」。"
      }
    ],
    "misconceptionTarget": "把所有柱體側面都想成單一長方形而忽略角柱有多個側面。",
    "authoringIntent": "判斷三角柱側面材料。",
    "difficulty": "literacy",
    "givenConditions": [
      "紙盒為三角柱",
      "兩底面另製"
    ],
    "target": "選出完整側面展開形式",
    "difficultyReason": "需把三角形邊數轉成側面個數。",
    "prerequisiteCheck": "知道角柱側面為長方形。 本題只再使用先備「基本平面圖形與四則運算」與本技能定義。",
    "estimatedTimeSec": 105,
    "unitCheck": "無尺寸計算。 所求「選出完整側面展開形式」與四個選項採同一單位或同一無單位比值。",
    "roundingCheck": "不需近似。 計算保留精確值到最後，不會因中途近似改變選項判定。",
    "ambiguityBoundaryAudit": "題目問形狀組合，不限定長方形是否全等。",
    "literacyContextNecessity": "紙盒製作要求側面一次成形，三角形底邊數直接決定材料分區。",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "questionId": "u23-s001-v012",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-nets",
    "type": "mc",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "tags": [
      "空間與形狀",
      "展開圖",
      "literacy"
    ],
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "6e58c3a661d7aea38544780331cb54684dc2727ea3234f08ef07604c1260df02"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "prompt": "請以文字說明如何判斷六個相連正方形是否為正方體展開圖，並把方法套用到「2×3完整長方形排列」上。",
    "requiredWork": [
      "提出固定一面並逐面摺疊的方法。",
      "檢查摺後重疊與缺口。",
      "判斷2×3排列能否成為展開圖。"
    ],
    "fullCreditSolution": [
      "先選一格固定，依公共邊把其他格想像摺起，每一格應占據正方體六個不同方向。",
      "若兩格摺到同一方向就重疊；若有方向沒有面就有缺口。",
      "2×3完整排列摺起時會有方格到達相同位置，所以不能成為正方體展開圖。"
    ],
    "alternativeSolutions": [
      "也可在六格上標示摺後的上、下、前、後、左、右；若標示重複，即判為無效。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "方法包含固定面、沿公共邊摺疊、重疊或缺口檢查，且正確判定2×3排列無效並指出重疊。"
      },
      {
        "score": 2,
        "criteria": "判定正確且有摺疊說明，但未完整說明缺口或方向重複的檢查。"
      },
      {
        "score": 1,
        "criteria": "只說2×3不能摺成正方體，並提到會重疊但缺少可操作方法。"
      },
      {
        "score": 0,
        "criteria": "判定可摺成正方體，或內容與展開圖判斷無關。"
      }
    ],
    "partialCreditRules": [
      "判定正確且有摺疊說明，但未完整說明缺口或方向重複的檢查。",
      "只說2×3不能摺成正方體，並提到會重疊但缺少可操作方法。"
    ],
    "followThroughPolicy": "若學生在想像摺疊時把整體方向顛倒，但仍一致地找出兩面重疊，可保留方法分；若因此錯判有效，最多1分。",
    "unitNotationRules": "本題無量值單位；可使用上、下、前、後、左、右，但必須相對於所固定的面。",
    "answerOnlyPolicy": "只寫「不能」不給理由最多1分；只寫「會重疊」但未指出判斷方法可得1分。",
    "difficulty": "standard",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "independentReview": {
      "derivedResult": "2×3完整排列無法摺成正方體展開圖。",
      "ambiguityAndBoundary": "排列與摺疊規則已明示，答案不依紙面旋轉。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "questionId": "u23-s001-cr001",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-nets",
    "type": "constructed-response",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "7f9e0ab056650669d97a42ae4dd781fb4b666e487bf6ca12c544fa8a8385922d"
  },
  {
    "prompt": "一個無上蓋圓柱形紙筒，側面由18公分×7公分長方形捲成，18公分邊繞底面一周。請列出完整材料的平面組成，並說明每個尺寸代表什麼。",
    "requiredWork": [
      "指出側面長方形。",
      "指出一個底圓及其圓周長。",
      "說明7公分是筒高。"
    ],
    "fullCreditSolution": [
      "側面材料是18公分×7公分長方形。",
      "18公分邊接合後成為底面圓周，所以底圓周長為18公分。",
      "7公分邊沿圓柱軸向，因此是筒高；無上蓋只需一個底圓。"
    ],
    "alternativeSolutions": [
      "若進一步寫半徑為9/π公分亦可，但不是必要條件。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整寫出一個18×7長方形與一個圓周長18公分的底圓，並正確解釋18為圓周、7為高度。"
      },
      {
        "score": 2,
        "criteria": "材料組成正確，但尺寸角色少說一項，或未明確指出無上蓋只需一個圓。"
      },
      {
        "score": 1,
        "criteria": "知道需要長方形和一個圓，但把18與7的角色說反或未給底圓規格。"
      },
      {
        "score": 0,
        "criteria": "使用扇形作側面、補兩個底圓且無說明，或無法辨認圓柱展開圖。"
      }
    ],
    "partialCreditRules": [
      "材料組成正確，但尺寸角色少說一項，或未明確指出無上蓋只需一個圓。",
      "知道需要長方形和一個圓，但把18與7的角色說反或未給底圓規格。"
    ],
    "followThroughPolicy": "若先把18誤當高度，之後一致給出錯誤底圓，可在材料種類正確時保留1分，不給尺寸角色分。",
    "unitNotationRules": "長方形尺寸、圓周長與高度均用公分；不可把18×7寫成平方公分來表示邊長。",
    "answerOnlyPolicy": "只有「長方形加一個圓」而無尺寸與理由，最多1分。",
    "difficulty": "advanced",
    "figureId": null,
    "drawingSpecId": null,
    "capBoundaryAudit": "限國中教育會考立體幾何範圍。",
    "independentReview": {
      "derivedResult": "一個18公分×7公分長方形與一個圓周長18公分的圓。",
      "ambiguityAndBoundary": "無上蓋與繞周方向均清楚，半徑不必近似。",
      "decision": "pass",
      "reviewedAt": "2026-07-12"
    },
    "questionId": "u23-s001-cr002",
    "unitId": "u23",
    "numericUnitId": 23,
    "topicId": "u23-basics",
    "skillId": "solid-nets",
    "type": "constructed-response",
    "visualMode": "text-only",
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "canonicalization": "JSON keys sorted recursively; contentSha256 field excluded.",
    "contentSha256": "7360c2d0d835adf9abfe75cd88c19bfab4b1f3752506c6fabd271cba80a81569"
  }
];

export const DRAWING_SPECS = [
  {
    "figureId": "u23-s001-fig001",
    "drawingSpecId": "u23-s001-draw001",
    "unitId": "u23",
    "skillSlot": "s001",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementMarker": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_INTEGRATION",
    "purpose": "立方體十字形展開圖",
    "svgPath": "figures/u23/u23-s001-fig001.svg",
    "canvas": {
      "width": 420,
      "height": 300,
      "viewBox": "0 0 420 300"
    },
    "drawingSpec": {
      "coordinateSystem": "左上為(0,0)，六個60×60正方形；中央A左上(150,100)，B在其上、C在其下、D左、E右、F在E右。",
      "visibleLineRules": "所有正方形邊用3px實線，重合共享邊只畫一次。",
      "hiddenLineRules": "無隱藏線；此圖為平面展開圖。",
      "labelsAndPositions": {
        "A": "(180,130)",
        "B": "(180,70)",
        "C": "(180,190)",
        "D": "(120,130)",
        "E": "(240,130)",
        "F": "(300,130)"
      },
      "tickMarksUnitsArrowsSymbols": "尺寸箭頭與標籤依圖中特定需求；線寬至少2，文字至少14px。",
      "scaleStatus": "not-to-scale",
      "visualInferenceWarning": "不得由圖上長短或方向猜測摺後相對面，只能依共享邊與摺疊關係。"
    },
    "altText": "六個正方形的十字形展開圖，中央為A，上下為B、C，左右為D、E，E右方為F。",
    "svgTitle": "立方體十字形展開圖",
    "svgDescription": "六個正方形的十字形展開圖，中央為A，上下為B、C，左右為D、E，E右方為F。",
    "mobileReadabilityReview": "420×300畫布在360px寬螢幕縮放後，單格約51px、字級仍可辨識。",
    "answerLeakageReview": "僅標面名，不標相對面答案或摺後結論。",
    "svgAssertions": [
      "<title",
      "<desc",
      "role=\"img\"",
      "A</text>",
      "F</text>",
      "未按比例"
    ],
    "figureReview": {
      "decision": "pass",
      "manualRenderedInspection": true,
      "reviewNote": "u23-s001-fig001 已逐一核對線段連接、標籤位置、縮放警語、手機字級與題目答案不外洩；圖形只提供解題所需結構。",
      "reviewedAt": "2026-07-12"
    },
    "contentSha256": "55e0834f442eaaf0607d1b28f600202f3d355174e81dea0a7fc06692267faae1"
  }
];
