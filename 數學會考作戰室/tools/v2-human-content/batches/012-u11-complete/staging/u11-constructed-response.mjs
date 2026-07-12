// Deterministically emitted from reviewed source. Do not edit.
export default [
  {
    "questionId": "u11-s001-cr001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-meaning",
    "lockedSkillOrder": 1,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "求 100 的所有實數平方根，並說明為何答案不只一個。",
    "requiredWork": [
      "列出所有候選值",
      "以平方驗算正負兩值"
    ],
    "fullCreditSolution": [
      "10²=100。",
      "(-10)²=100。",
      "因此兩者都符合平方根定義。"
    ],
    "standardAnswer": "10 與 -10。",
    "alternativeMethod": "也可由 x²-100=(x-10)(x+10)=0 得 x=±10。",
    "reasoningSteps": [
      "10²=100。",
      "(-10)²=100。",
      "因此兩者都符合平方根定義。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：正確列出10與-10；至少驗算一個平方；說明正負兩值平方相同，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：正確列出10與-10；至少驗算一個平方；說明正負兩值平方相同。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「正確列出10與-10」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「正確列出10與-10」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「正確列出10與-10」但後續失誤，可依證據給1分。",
      "若完成「正確列出10與-10」與「至少驗算一個平方」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "依題意保留正確單位與根式或近似符號。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "只寫10",
      "把±100當答案"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "10 與 -10。",
      "recomputation": "10²=100。；(-10)²=100。；因此兩者都符合平方根定義。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「說明正負兩值平方相同」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "046745b322fb8870a076fbc2b4bce1cd9480cae09b4314e99a7eff993dbb6463"
  },
  {
    "questionId": "u11-s001-cr002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-meaning",
    "lockedSkillOrder": 1,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "某正方形面積為 288 平方公分。求邊長的精確值，並解釋為何不取負值。",
    "requiredWork": [
      "建立邊長平方等於面積",
      "化簡根式",
      "說明長度限制"
    ],
    "fullCreditSolution": [
      "設邊長s>0，s²=288。",
      "s=√288=√(144×2)=12√2。",
      "負根不符合實際長度。"
    ],
    "standardAnswer": "12√2 公分。",
    "alternativeMethod": "可先求代數解s=±12√2，再依s>0篩選。",
    "reasoningSteps": [
      "設邊長s>0，s²=288。",
      "s=√288=√(144×2)=12√2。",
      "負根不符合實際長度。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：寫出s²=288；化簡為12√2；明確以長度排除負根，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：寫出s²=288；化簡為12√2；明確以長度排除負根。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「寫出s²=288」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「寫出s²=288」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「寫出s²=288」但後續失誤，可依證據給1分。",
      "若完成「寫出s²=288」與「化簡為12√2」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "平方公分開平方後為公分。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "把面積除以2",
      "保留±"
    ],
    "figureId": "fig-u11-s001-square-area",
    "drawingSpecReference": "units/u11/s001/drawing-specs.jsonl#fig-u11-s001-square-area",
    "independentReview": {
      "decision": "pass",
      "derivedResult": "12√2 公分。",
      "recomputation": "設邊長s>0，s²=288。；s=√288=√(144×2)=12√2。；負根不符合實際長度。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「明確以長度排除負根」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "0caaac585c3258fd5623dca00a52409b40da3e8ea7d8400baa58ce9fa7e72efc"
  },
  {
    "questionId": "u11-s002-cr001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-simplify",
    "lockedSkillOrder": 2,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "將 √768 化成最簡根式，寫出分解過程。",
    "requiredWork": [
      "找完全平方因數",
      "正確開平方",
      "確認最簡"
    ],
    "fullCreditSolution": [
      "768=256×3。",
      "√768=√256×√3=16√3。",
      "3不含大於1的平方因數。"
    ],
    "standardAnswer": "16√3。",
    "alternativeMethod": "也可逐步提出：768=4×192=4²×48=…，最後仍得16√3。",
    "reasoningSteps": [
      "768=256×3。",
      "√768=√256×√3=16√3。",
      "3不含大於1的平方因數。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：正確分解768；提出16；根號內最後為3，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：正確分解768；提出16；根號內最後為3。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「正確分解768」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「正確分解768」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「正確分解768」但後續失誤，可依證據給1分。",
      "若完成「正確分解768」與「提出16」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "依題意保留正確單位與根式或近似符號。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "把256直接提出",
      "停在8√12"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "16√3。",
      "recomputation": "768=256×3。；√768=√256×√3=16√3。；3不含大於1的平方因數。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「根號內最後為3」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "b48bbab672a9d842400148cf0ff2b9e59a885a76350e13142a209efdb1090025"
  },
  {
    "questionId": "u11-s002-cr002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-simplify",
    "lockedSkillOrder": 2,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "一個正方形面積為 243 平方公尺。求邊長的最簡根式。",
    "requiredWork": [
      "使用正方形面積關係",
      "化簡√243",
      "保留單位"
    ],
    "fullCreditSolution": [
      "邊長=√243。",
      "243=81×3。",
      "所以邊長=9√3公尺。"
    ],
    "standardAnswer": "9√3 公尺。",
    "alternativeMethod": "用質因數243=3⁵，提出3²得到9√3。",
    "reasoningSteps": [
      "邊長=√243。",
      "243=81×3。",
      "所以邊長=9√3公尺。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：建立開平方；化簡係數9；單位公尺正確，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：建立開平方；化簡係數9；單位公尺正確。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「建立開平方」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「建立開平方」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「建立開平方」但後續失誤，可依證據給1分。",
      "若完成「建立開平方」與「化簡係數9」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "平方公尺開平方為公尺。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "答121.5公尺",
      "答81√3"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "9√3 公尺。",
      "recomputation": "邊長=√243。；243=81×3。；所以邊長=9√3公尺。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「單位公尺正確」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "d8d43ad5f40e409b1362ed9d08cd24a773aa90dd56baac3ffbe8c33c806b09a2"
  },
  {
    "questionId": "u11-s003-cr001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-arithmetic",
    "lockedSkillOrder": 3,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "計算 2√27-√12+√75，結果化成最簡根式。",
    "requiredWork": [
      "逐項化簡",
      "正確處理減號",
      "合併同類根式"
    ],
    "fullCreditSolution": [
      "2√27=6√3。",
      "√12=2√3，√75=5√3。",
      "6√3-2√3+5√3=9√3。"
    ],
    "standardAnswer": "9√3。",
    "alternativeMethod": "可先把各被開方數寫成3乘平方數，再一次合併係數2×3-2+5。",
    "reasoningSteps": [
      "2√27=6√3。",
      "√12=2√3，√75=5√3。",
      "6√3-2√3+5√3=9√3。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：三項化簡正確；符號與係數合併正確；結果9√3，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：三項化簡正確；符號與係數合併正確；結果9√3。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「三項化簡正確」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「三項化簡正確」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「三項化簡正確」但後續失誤，可依證據給1分。",
      "若完成「三項化簡正確」與「符號與係數合併正確」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "依題意保留正確單位與根式或近似符號。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "直接算√(27-12+75)",
      "漏掉前係數2"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "9√3。",
      "recomputation": "2√27=6√3。；√12=2√3，√75=5√3。；6√3-2√3+5√3=9√3。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「結果9√3」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "fb1488691f3aa7d98c6310fbe6b0ed58efbe04bf59f944ec0f480b505fa647d9"
  },
  {
    "questionId": "u11-s003-cr002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-arithmetic",
    "lockedSkillOrder": 3,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "計算 (√13+√5)(√13-√5)+√20。",
    "requiredWork": [
      "使用平方差",
      "化簡√20",
      "合併結果"
    ],
    "fullCreditSolution": [
      "共軛乘積=13-5=8。",
      "√20=2√5。",
      "總和=8+2√5。"
    ],
    "standardAnswer": "8+2√5。",
    "alternativeMethod": "逐項展開也會使±√65抵消。",
    "reasoningSteps": [
      "共軛乘積=13-5=8。",
      "√20=2√5。",
      "總和=8+2√5。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：平方差得8；√20化為2√5；保留不同類項，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：平方差得8；√20化為2√5；保留不同類項。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「平方差得8」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「平方差得8」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「平方差得8」但後續失誤，可依證據給1分。",
      "若完成「平方差得8」與「√20化為2√5」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "依題意保留正確單位與根式或近似符號。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "把平方差算成18",
      "把8與2√5硬合併"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "8+2√5。",
      "recomputation": "共軛乘積=13-5=8。；√20=2√5。；總和=8+2√5。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「保留不同類項」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "e37bedd73d425636332168796c16ec6349543c3225d9dfff3a408ecdf0cf428c"
  },
  {
    "questionId": "u11-s004-cr001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-estimate",
    "lockedSkillOrder": 4,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "不用計算機，將 √115 估到小數第一位，寫出判斷進位的依據。",
    "requiredWork": [
      "先夾整數範圍",
      "檢查十分位或中點平方",
      "使用近似符號"
    ],
    "fullCreditSolution": [
      "10²<115<11²。",
      "10.7²=114.49，10.8²=116.64。",
      "10.75²=115.5625>115，所以√115<10.75，取一位為10.7。"
    ],
    "standardAnswer": "√115≈10.7。",
    "alternativeMethod": "可比較10.7與真值差、10.8與真值差，但仍須以平方支持。",
    "reasoningSteps": [
      "10²<115<11²。",
      "10.7²=114.49，10.8²=116.64。",
      "10.75²=115.5625>115，所以√115<10.75，取一位為10.7。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：整數夾估；進位界線判斷；近似記號與一位小數，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：整數夾估；進位界線判斷；近似記號與一位小數。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「整數夾估」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「整數夾估」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「整數夾估」但後續失誤，可依證據給1分。",
      "若完成「整數夾估」與「進位界線判斷」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "依題意保留正確單位與根式或近似符號。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "只寫10",
      "寫等號10.7"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "√115≈10.7。",
      "recomputation": "10²<115<11²。；10.7²=114.49，10.8²=116.64。；10.75²=115.5625>115，所以√115<10.75，取一位為10.7。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「近似記號與一位小數」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "da083ed60a9c001788250670adf282975800c7bf0e9047f78714abf2c1488b33"
  },
  {
    "questionId": "u11-s004-cr002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "square-root-estimate",
    "lockedSkillOrder": 4,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "某正方形場地面積為 155 平方公尺。工程表將邊長取到小數第一位，求填表值。",
    "requiredWork": [
      "由面積建立平方根",
      "估算",
      "四捨五入與單位"
    ],
    "fullCreditSolution": [
      "邊長=√155公尺。",
      "12.4²=153.76，12.5²=156.25。",
      "12.45²=155.0025>155，所以邊長略小於12.45，填12.4公尺。"
    ],
    "standardAnswer": "12.4 公尺。",
    "alternativeMethod": "可用線性近似從√156.25=12.5向下微調，但須說明誤差。",
    "reasoningSteps": [
      "邊長=√155公尺。",
      "12.4²=153.76，12.5²=156.25。",
      "12.45²=155.0025>155，所以邊長略小於12.45，填12.4公尺。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：寫√155；判定小於12.45；填12.4公尺，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：寫√155；判定小於12.45；填12.4公尺。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「寫√155」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「寫√155」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「寫√155」但後續失誤，可依證據給1分。",
      "若完成「寫√155」與「判定小於12.45」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "平方公尺轉公尺；近似到小數第一位。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "把155除2",
      "填12.5未檢查中點"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "12.4 公尺。",
      "recomputation": "邊長=√155公尺。；12.4²=153.76，12.5²=156.25。；12.45²=155.0025>155，所以邊長略小於12.45，填12.4公尺。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「填12.4公尺」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "e1d6789cdce4b04be1b7fa6443178264417c594ec40caf2c3e211584833dcb97"
  },
  {
    "questionId": "u11-s005-cr001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-notation",
    "lockedSkillOrder": 5,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "說明 √49 與「49 的平方根」有何不同，並分別寫出答案。",
    "requiredWork": [
      "說明主平方根",
      "列出所有平方根",
      "以平方驗算"
    ],
    "fullCreditSolution": [
      "√49是非負平方根，所以等於7。",
      "49的平方根是所有x使x²=49，故為7與-7。"
    ],
    "standardAnswer": "√49=7；49 的平方根為±7。",
    "alternativeMethod": "用函數單值與方程解集合的觀點說明。",
    "reasoningSteps": [
      "√49是非負平方根，所以等於7。",
      "49的平方根是所有x使x²=49，故為7與-7。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：√49單值7；所有根±7；差異說明清楚，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：√49單值7；所有根±7；差異說明清楚。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「√49單值7」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「√49單值7」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「√49單值7」但後續失誤，可依證據給1分。",
      "若完成「√49單值7」與「所有根±7」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "依題意保留正確單位與根式或近似符號。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "兩者都寫±7",
      "兩者都只寫7"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "√49=7；49 的平方根為±7。",
      "recomputation": "√49是非負平方根，所以等於7。；49的平方根是所有x使x²=49，故為7與-7。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「差異說明清楚」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "59da4a200dbfde9fc35ebba5408c103edfd58f9512bfbd604093b06951d8089f"
  },
  {
    "questionId": "u11-s005-cr002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-notation",
    "lockedSkillOrder": 5,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "已知 a<0，化簡 √(a²)，並說明理由。",
    "requiredWork": [
      "使用絕對值關係",
      "套用a<0條件",
      "確認結果非負"
    ],
    "fullCreditSolution": [
      "√(a²)=|a|。",
      "因a<0，所以|a|=-a。",
      "-a>0，符合主平方根非負。"
    ],
    "standardAnswer": "-a。",
    "alternativeMethod": "分情況：平方後失去符號，而非負根必等於a的相反數。",
    "reasoningSteps": [
      "√(a²)=|a|。",
      "因a<0，所以|a|=-a。",
      "-a>0，符合主平方根非負。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：寫出|a|；由a<0得-a；說明非負性，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：寫出|a|；由a<0得-a；說明非負性。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「寫出|a|」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「寫出|a|」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「寫出|a|」但後續失誤，可依證據給1分。",
      "若完成「寫出|a|」與「由a<0得-a」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "依題意保留正確單位與根式或近似符號。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "直接約成a",
      "寫±a"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "-a。",
      "recomputation": "√(a²)=|a|。；因a<0，所以|a|=-a。；-a>0，符合主平方根非負。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「說明非負性」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "75bc9a9534588739d67446d3b3f1a7e9fa9de86b5c92bc99fbf1eca1890a3282"
  },
  {
    "questionId": "u11-s006-cr001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-perfect-square",
    "lockedSkillOrder": 6,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "列出 200 到 500（含）之間所有完全平方數，並說明如何確定沒有遺漏。",
    "requiredWork": [
      "找底數上下界",
      "列出平方數",
      "處理端點"
    ],
    "fullCreditSolution": [
      "14²=196<200，所以從15²開始。",
      "22²=484≤500，而23²=529>500。",
      "15²至22²為225、256、289、324、361、400、441、484。"
    ],
    "standardAnswer": "共8個：225、256、289、324、361、400、441、484。",
    "alternativeMethod": "可先求√200與√500的整數界線，得到底數15至22。",
    "reasoningSteps": [
      "14²=196<200，所以從15²開始。",
      "22²=484≤500，而23²=529>500。",
      "15²至22²為225、256、289、324、361、400、441、484。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：底數範圍15至22；八個值全部正確；說明23²超界，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：底數範圍15至22；八個值全部正確；說明23²超界。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「底數範圍15至22」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「底數範圍15至22」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「底數範圍15至22」但後續失誤，可依證據給1分。",
      "若完成「底數範圍15至22」與「八個值全部正確」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "依題意保留正確單位與根式或近似符號。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "從14²開始",
      "漏掉22²"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "共8個：225、256、289、324、361、400、441、484。",
      "recomputation": "14²=196<200，所以從15²開始。；22²=484≤500，而23²=529>500。；15²至22²為225、256、289、324、361、400、441、484。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「說明23²超界」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "7f8ddfacaa7034b58c4dac36b5bd20cf9d1bd40cc924a463d896f501f4413985"
  },
  {
    "questionId": "u11-s006-cr002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-perfect-square",
    "lockedSkillOrder": 6,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "一個正方形方陣共有 676 人。求每列人數，並驗算。",
    "requiredWork": [
      "建立n²=676",
      "求正整數根",
      "乘法驗算"
    ],
    "fullCreditSolution": [
      "設每列n人，共n列，所以n²=676。",
      "26²=676，n=26。",
      "26×26=676。"
    ],
    "standardAnswer": "每列26人。",
    "alternativeMethod": "利用(25+1)²=625+50+1=676。",
    "reasoningSteps": [
      "設每列n人，共n列，所以n²=676。",
      "26²=676，n=26。",
      "26×26=676。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：建立平方關係；求26；驗算與人數正值，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：建立平方關係；求26；驗算與人數正值。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「建立平方關係」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「建立平方關係」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「建立平方關係」但後續失誤，可依證據給1分。",
      "若完成「建立平方關係」與「求26」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "人數為正整數，單位為人。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "答338",
      "寫±26人"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "每列26人。",
      "recomputation": "設每列n人，共n列，所以n²=676。；26²=676，n=26。；26×26=676。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「驗算與人數正值」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "26f140dc0d02c23b70e4f76c61c8213ff58b2a48e303b3b25cab0409b5567dd2"
  },
  {
    "questionId": "u11-s007-cr001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-rationalize-simple",
    "lockedSkillOrder": 7,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "將 12/(5√3) 分母有理化並化成最簡形式。",
    "requiredWork": [
      "分子分母同乘√3",
      "形成有理分母",
      "約分"
    ],
    "fullCreditSolution": [
      "原式乘√3/√3。",
      "得到12√3/(5×3)=12√3/15。",
      "約分為4√3/5。"
    ],
    "standardAnswer": "4√3/5。",
    "alternativeMethod": "先把12/15約成4/5後理解為(4/5)√3。",
    "reasoningSteps": [
      "原式乘√3/√3。",
      "得到12√3/(5×3)=12√3/15。",
      "約分為4√3/5。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：同乘正確；分母成15；約成4√3/5，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：同乘正確；分母成15；約成4√3/5。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「同乘正確」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「同乘正確」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「同乘正確」但後續失誤，可依證據給1分。",
      "若完成「同乘正確」與「分母成15」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "依題意保留正確單位與根式或近似符號。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "只改分母",
      "停在12√3/15"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "4√3/5。",
      "recomputation": "原式乘√3/√3。；得到12√3/(5×3)=12√3/15。；約分為4√3/5。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「約成4√3/5」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "299002783d71a530c58a6e050b694863e83ac1ae8f040987a687c240964b1ae6"
  },
  {
    "questionId": "u11-s007-cr002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-rationalize-simple",
    "lockedSkillOrder": 7,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "化簡 A=2/√8+3/√18，要求分母有理化。",
    "requiredWork": [
      "先化簡分母",
      "分別有理化",
      "合併同類根式"
    ],
    "fullCreditSolution": [
      "√8=2√2，所以2/√8=1/√2=√2/2。",
      "√18=3√2，所以3/√18=1/√2=√2/2。",
      "A=√2。"
    ],
    "standardAnswer": "√2。",
    "alternativeMethod": "先觀察兩項都等於1/√2，合併成2/√2，再化簡為√2。",
    "reasoningSteps": [
      "√8=2√2，所以2/√8=1/√2=√2/2。",
      "√18=3√2，所以3/√18=1/√2=√2/2。",
      "A=√2。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：辨認兩項皆1/√2；正確有理化；合併為√2，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：辨認兩項皆1/√2；正確有理化；合併為√2。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「辨認兩項皆1/√2」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「辨認兩項皆1/√2」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「辨認兩項皆1/√2」但後續失誤，可依證據給1分。",
      "若完成「辨認兩項皆1/√2」與「正確有理化」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "依題意保留正確單位與根式或近似符號。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "分母直接相加",
      "漏做第二項化簡"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "√2。",
      "recomputation": "√8=2√2，所以2/√8=1/√2=√2/2。；√18=3√2，所以3/√18=1/√2=√2/2。；A=√2。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「合併為√2」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "10fec4f459233c72d16c78fb855eea8a4acb605b8f374b3a742ec5169f4e9c86"
  },
  {
    "questionId": "u11-s008-cr001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-comparison",
    "lockedSkillOrder": 8,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "不用小數，證明 3√5>√44。",
    "requiredWork": [
      "確認兩邊非負",
      "比較平方",
      "寫出結論"
    ],
    "fullCreditSolution": [
      "兩邊皆為正。",
      "(3√5)²=45，(√44)²=44。",
      "45>44，所以3√5>√44。"
    ],
    "standardAnswer": "3√5>√44。",
    "alternativeMethod": "把3√5寫成√45，再比較√45與√44。",
    "reasoningSteps": [
      "兩邊皆為正。",
      "(3√5)²=45，(√44)²=44。",
      "45>44，所以3√5>√44。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：非負性；平方45與44；正確大小結論，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：非負性；平方45與44；正確大小結論。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「非負性」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「非負性」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「非負性」但後續失誤，可依證據給1分。",
      "若完成「非負性」與「平方45與44」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "依題意保留正確單位與根式或近似符號。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "只比較5與44",
      "未確認正值就平方"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "3√5>√44。",
      "recomputation": "兩邊皆為正。；(3√5)²=45，(√44)²=44。；45>44，所以3√5>√44。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「正確大小結論」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "c6886bd60a52cbd41a7276388b475da2d38e54e7fb50cf38394b46929d598b2b"
  },
  {
    "questionId": "u11-s008-cr002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-square-root",
    "skillId": "sqrt-comparison",
    "lockedSkillOrder": 8,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "將 -√12、-3、-2√2 由小到大排列，說明負號如何影響順序。",
    "requiredWork": [
      "先比較正值",
      "處理根式化簡或平方",
      "反轉負值次序"
    ],
    "fullCreditSolution": [
      "√12=2√3，約3.464；3；2√2約2.828。",
      "正值大小為√12>3>2√2。",
      "取負後順序反轉。"
    ],
    "standardAnswer": "-√12<-3<-2√2。",
    "alternativeMethod": "不用小數：比較平方12、9、8，再取相反數反轉。",
    "reasoningSteps": [
      "√12=2√3，約3.464；3；2√2約2.828。",
      "正值大小為√12>3>2√2。",
      "取負後順序反轉。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：正值排序12>9>8；說明反轉；負值排序正確，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：正值排序12>9>8；說明反轉；負值排序正確。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「正值排序12>9>8」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「正值排序12>9>8」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「正值排序12>9>8」但後續失誤，可依證據給1分。",
      "若完成「正值排序12>9>8」與「說明反轉」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "依題意保留正確單位與根式或近似符號。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "負號後仍保持原順序",
      "把-√12化成-√6"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "-√12<-3<-2√2。",
      "recomputation": "√12=2√3，約3.464；3；2√2約2.828。；正值大小為√12>3>2√2。；取負後順序反轉。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「負值排序正確」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "8de8a7f1c98be4be4d0b8ed9e62ae329efaf6257a635913485ab3ffb6d6846f0"
  },
  {
    "questionId": "u11-s009-cr001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-theorem",
    "lockedSkillOrder": 9,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "一直角三角形兩股為 9 公分與 40 公分。求斜邊並完整寫出公式。",
    "requiredWork": [
      "辨認兩股與斜邊",
      "代入平方和",
      "開正根與單位"
    ],
    "fullCreditSolution": [
      "設斜邊c。",
      "c²=9²+40²=81+1600=1681。",
      "c=√1681=41。"
    ],
    "standardAnswer": "41 公分。",
    "alternativeMethod": "辨認9-40-41畢氏數組可直接驗算。",
    "reasoningSteps": [
      "設斜邊c。",
      "c²=9²+40²=81+1600=1681。",
      "c=√1681=41。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：公式角色正確；平方和1681；斜邊41公分，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：公式角色正確；平方和1681；斜邊41公分。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「公式角色正確」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「公式角色正確」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「公式角色正確」但後續失誤，可依證據給1分。",
      "若完成「公式角色正確」與「平方和1681」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "答案為公分。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "答49",
      "算到1681停止"
    ],
    "figureId": "fig-u11-s009-right-triangle",
    "drawingSpecReference": "units/u11/s009/drawing-specs.jsonl#fig-u11-s009-right-triangle",
    "independentReview": {
      "decision": "pass",
      "derivedResult": "41 公分。",
      "recomputation": "設斜邊c。；c²=9²+40²=81+1600=1681。；c=√1681=41。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「斜邊41公分」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "1aa91747fd9658f5aed393db060cb25e9fa2f356fd94c292d237176e6c2911c2"
  },
  {
    "questionId": "u11-s009-cr002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-theorem",
    "lockedSkillOrder": 9,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "等腰直角三角形兩股皆為 a（a>0）。證明斜邊為 a√2。",
    "requiredWork": [
      "寫畢氏關係",
      "代數化簡",
      "使用a>0"
    ],
    "fullCreditSolution": [
      "設斜邊c。",
      "c²=a²+a²=2a²。",
      "c=√(2a²)=a√2，因a>0。"
    ],
    "standardAnswer": "a√2。",
    "alternativeMethod": "由相似比例可知所有等腰直角三角形斜邊與股比固定為√2。",
    "reasoningSteps": [
      "設斜邊c。",
      "c²=a²+a²=2a²。",
      "c=√(2a²)=a√2，因a>0。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：c²=2a²；開根處理正值；結論a√2，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：c²=2a²；開根處理正值；結論a√2。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「c²=2a²」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「c²=2a²」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「c²=2a²」但後續失誤，可依證據給1分。",
      "若完成「c²=2a²」與「開根處理正值」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "依題意保留正確單位與根式或近似符號。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "寫2a",
      "漏用a>0而寫|a|"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "a√2。",
      "recomputation": "設斜邊c。；c²=a²+a²=2a²。；c=√(2a²)=a√2，因a>0。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「結論a√2」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "e28934630e10f96df23cd3e2d2224187a4eec7ef7cc943d525b5080ab696e1d2"
  },
  {
    "questionId": "u11-s010-cr001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-application",
    "lockedSkillOrder": 10,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "一把 25 公尺梯子靠在垂直牆上，梯腳離牆 15 公尺。求梯頂高度，並指出哪一邊是斜邊。",
    "requiredWork": [
      "指出梯子為斜邊",
      "使用平方差",
      "單位"
    ],
    "fullCreditSolution": [
      "梯子跨越牆與地面，是斜邊25。",
      "高度²=25²-15²=625-225=400。",
      "高度=20。"
    ],
    "standardAnswer": "20 公尺。",
    "alternativeMethod": "使用15-20-25比例。",
    "reasoningSteps": [
      "梯子跨越牆與地面，是斜邊25。",
      "高度²=25²-15²=625-225=400。",
      "高度=20。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：邊角色；平方差400；高度20公尺，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：邊角色；平方差400；高度20公尺。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「邊角色」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「邊角色」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「邊角色」但後續失誤，可依證據給1分。",
      "若完成「邊角色」與「平方差400」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "答案為公尺。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "把15與25直接相減",
      "把高度當斜邊"
    ],
    "figureId": "fig-u11-s010-ladder",
    "drawingSpecReference": "units/u11/s010/drawing-specs.jsonl#fig-u11-s010-ladder",
    "independentReview": {
      "decision": "pass",
      "derivedResult": "20 公尺。",
      "recomputation": "梯子跨越牆與地面，是斜邊25。；高度²=25²-15²=625-225=400。；高度=20。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「高度20公尺」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "794e9984173b6ccb9634e7f3cc8e81de966472b21de843345e57486d92ec7f2c"
  },
  {
    "questionId": "u11-s010-cr002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-application",
    "lockedSkillOrder": 10,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "長方體長 6、寬 8、高 24 公分。求相對兩頂點間的空間對角線。",
    "requiredWork": [
      "先求底面對角線",
      "再與高度用畢氏",
      "完成根式"
    ],
    "fullCreditSolution": [
      "底面對角線=√(6²+8²)=10。",
      "空間對角線=√(10²+24²)=√676=26。"
    ],
    "standardAnswer": "26 公分。",
    "alternativeMethod": "直接使用√(6²+8²+24²)=√676，但需說明三方向互相垂直。",
    "reasoningSteps": [
      "底面對角線=√(6²+8²)=10。",
      "空間對角線=√(10²+24²)=√676=26。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：底面對角10；第二次平方和676；結果26公分，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：底面對角10；第二次平方和676；結果26公分。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「底面對角10」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「底面對角10」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「底面對角10」但後續失誤，可依證據給1分。",
      "若完成「底面對角10」與「第二次平方和676」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "答案為公分。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "只求底面10",
      "三邊直接相加38"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "26 公分。",
      "recomputation": "底面對角線=√(6²+8²)=10。；空間對角線=√(10²+24²)=√676=26。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「結果26公分」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "78f75841b12b1222ce7a1bfe73d1accfe6960d2ea554d7fe4219d558d651172c"
  },
  {
    "questionId": "u11-s011-cr001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "coordinate-distance-pythagorean",
    "lockedSkillOrder": 11,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "求 A(-3,2) 與 B(5,8) 的距離，寫出坐標差。",
    "requiredWork": [
      "計算Δx與Δy",
      "套距離公式",
      "化簡"
    ],
    "fullCreditSolution": [
      "Δx=5-(-3)=8。",
      "Δy=8-2=6。",
      "距離=√(8²+6²)=√100=10。"
    ],
    "standardAnswer": "10 個座標單位。",
    "alternativeMethod": "以絕對差8與6建立6-8-10直角三角形。",
    "reasoningSteps": [
      "Δx=5-(-3)=8。",
      "Δy=8-2=6。",
      "距離=√(8²+6²)=√100=10。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：坐標差8與6；平方和100；距離10，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：坐標差8與6；平方和100；距離10。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「坐標差8與6」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「坐標差8與6」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「坐標差8與6」但後續失誤，可依證據給1分。",
      "若完成「坐標差8與6」與「平方和100」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "依題意保留正確單位與根式或近似符號。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "把水平差算2",
      "使用8+6=14"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "10 個座標單位。",
      "recomputation": "Δx=5-(-3)=8。；Δy=8-2=6。；距離=√(8²+6²)=√100=10。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「距離10」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "a0a0493ed7447f31ecac1d117569775f0b7b5bff1860193b2da59841cb0d395d"
  },
  {
    "questionId": "u11-s011-cr002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "coordinate-distance-pythagorean",
    "lockedSkillOrder": 11,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "點 P(1,4) 到 Q(x,4) 的距離為 9。求所有可能的 x。",
    "requiredWork": [
      "利用同水平線",
      "建立絕對值方程",
      "列雙解"
    ],
    "fullCreditSolution": [
      "兩點y相同，距離=|x-1|。",
      "|x-1|=9。",
      "x-1=9或-9，所以x=10或-8。"
    ],
    "standardAnswer": "x=10 或 x=-8。",
    "alternativeMethod": "在數線上從1向左右各移9單位。",
    "reasoningSteps": [
      "兩點y相同，距離=|x-1|。",
      "|x-1|=9。",
      "x-1=9或-9，所以x=10或-8。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：|x-1|=9；兩個方向；x=10,-8，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：|x-1|=9；兩個方向；x=10,-8。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「|x-1|=9」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「|x-1|=9」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「|x-1|=9」但後續失誤，可依證據給1分。",
      "若完成「|x-1|=9」與「兩個方向」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "依題意保留正確單位與根式或近似符號。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "只寫10",
      "寫±9未平移中心"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "x=10 或 x=-8。",
      "recomputation": "兩點y相同，距離=|x-1|。；|x-1|=9。；x-1=9或-9，所以x=10或-8。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「x=10,-8」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "c7dc7ea89ddff1e079f4c4e390b4d8fa61de2881a27e3090795fa66c26f11bf3"
  },
  {
    "questionId": "u11-s012-cr001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-find-leg",
    "lockedSkillOrder": 12,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "直角三角形斜邊 37 公分，一股 12 公分。求另一股，鼓勵使用平方差。",
    "requiredWork": [
      "確認斜邊",
      "計算37²-12²",
      "開根"
    ],
    "fullCreditSolution": [
      "未知股平方=37²-12²。",
      "=(37-12)(37+12)=25×49=1225。",
      "未知股=√1225=35。"
    ],
    "standardAnswer": "35 公分。",
    "alternativeMethod": "直接計算1369-144=1225。",
    "reasoningSteps": [
      "未知股平方=37²-12²。",
      "=(37-12)(37+12)=25×49=1225。",
      "未知股=√1225=35。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：平方差1225；開根35；單位公分，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：平方差1225；開根35；單位公分。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「平方差1225」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「平方差1225」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「平方差1225」但後續失誤，可依證據給1分。",
      "若完成「平方差1225」與「開根35」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "答案為公分。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "直接37-12=25",
      "答1225"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "35 公分。",
      "recomputation": "未知股平方=37²-12²。；=(37-12)(37+12)=25×49=1225。；未知股=√1225=35。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「單位公分」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "0304d2428b9543c6ccd111fe38ab0e4b3da7b366c989e23d91165f69c7a3bea4"
  },
  {
    "questionId": "u11-s012-cr002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-find-leg",
    "lockedSkillOrder": 12,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "一直角三角形兩股比為 7:24，斜邊長 50。求兩股。",
    "requiredWork": [
      "由比例求斜邊份數",
      "計算縮放倍數",
      "求兩股"
    ],
    "fullCreditSolution": [
      "設兩股7k、24k。",
      "斜邊=√(49+576)k=25k。",
      "25k=50得k=2，所以兩股14與48。"
    ],
    "standardAnswer": "14 與 48。",
    "alternativeMethod": "辨認7-24-25數組後直接放大2倍。",
    "reasoningSteps": [
      "設兩股7k、24k。",
      "斜邊=√(49+576)k=25k。",
      "25k=50得k=2，所以兩股14與48。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：建立25k；k=2；兩股14與48，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：建立25k；k=2；兩股14與48。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「建立25k」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「建立25k」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「建立25k」但後續失誤，可依證據給1分。",
      "若完成「建立25k」與「k=2」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "依題意保留正確單位與根式或近似符號。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "把兩股寫7與24",
      "把50分成7+24"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "14 與 48。",
      "recomputation": "設兩股7k、24k。；斜邊=√(49+576)k=25k。；25k=50得k=2，所以兩股14與48。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「兩股14與48」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "62f015b593df41c9472dbdde315f33ba9c3ef0a2b3b85902c4991c08945644c9"
  },
  {
    "questionId": "u11-s013-cr001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-word",
    "lockedSkillOrder": 13,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "一人向東走 12 公里，再向北走 5 公里，接著沿直線返回起點。求全程路程。",
    "requiredWork": [
      "區分去程與回程",
      "求直線返回距離",
      "相加"
    ],
    "fullCreditSolution": [
      "去程路程=12+5=17公里。",
      "返回直線=√(12²+5²)=13公里。",
      "全程=17+13=30公里。"
    ],
    "standardAnswer": "30 公里。",
    "alternativeMethod": "以5-12-13數組直接得返回距離13。",
    "reasoningSteps": [
      "去程路程=12+5=17公里。",
      "返回直線=√(12²+5²)=13公里。",
      "全程=17+13=30公里。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：去程17；回程13；總路程30公里，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：去程17；回程13；總路程30公里。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「去程17」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「去程17」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「去程17」但後續失誤，可依證據給1分。",
      "若完成「去程17」與「回程13」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "答案為公里。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "只答13",
      "把三段直接12+5+√17"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "30 公里。",
      "recomputation": "去程路程=12+5=17公里。；返回直線=√(12²+5²)=13公里。；全程=17+13=30公里。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「總路程30公里」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "a2fa60413781b614b4cf4fa23062de8c36fa46081522a572286336a4b165b5ef"
  },
  {
    "questionId": "u11-s013-cr002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-word",
    "lockedSkillOrder": 13,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "一棵樹在離地 8 公尺處折斷，樹梢落在距樹根 15 公尺處。求樹原高。",
    "requiredWork": [
      "求折斷段",
      "加未折斷段",
      "說明直角"
    ],
    "fullCreditSolution": [
      "折點垂直高度8，地面距離15，形成直角三角形。",
      "折斷段=√(8²+15²)=17。",
      "原高=8+17=25。"
    ],
    "standardAnswer": "25 公尺。",
    "alternativeMethod": "辨認8-15-17數組。",
    "reasoningSteps": [
      "折點垂直高度8，地面距離15，形成直角三角形。",
      "折斷段=√(8²+15²)=17。",
      "原高=8+17=25。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：折斷段17；再加8；原高25公尺，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：折斷段17；再加8；原高25公尺。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「折斷段17」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「折斷段17」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「折斷段17」但後續失誤，可依證據給1分。",
      "若完成「折斷段17」與「再加8」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "答案為公尺。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "只答17",
      "直接8+15=23"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "25 公尺。",
      "recomputation": "折點垂直高度8，地面距離15，形成直角三角形。；折斷段=√(8²+15²)=17。；原高=8+17=25。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「原高25公尺」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "ec3afa5b0d2f874ebe0f0d84f2afd3f6a792e69851bdb2c46a823bc788b608b7"
  },
  {
    "questionId": "u11-s014-cr001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "right-triangle-identify",
    "lockedSkillOrder": 14,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "判定邊長 20、21、29 的三角形是否為直角三角形，寫出完整判定。",
    "requiredWork": [
      "排序與成三角形",
      "比較平方",
      "下結論與直角位置"
    ],
    "fullCreditSolution": [
      "20+21>29，可成三角形。",
      "20²+21²=400+441=841。",
      "29²=841，故依逆命題為直角三角形，29所對角為直角。"
    ],
    "standardAnswer": "是直角三角形。",
    "alternativeMethod": "可辨認20-21-29畢氏數組，但仍需寫平方驗證。",
    "reasoningSteps": [
      "20+21>29，可成三角形。",
      "20²+21²=400+441=841。",
      "29²=841，故依逆命題為直角三角形，29所對角為直角。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：可成三角形；平方等式841；結論與角位置，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：可成三角形；平方等式841；結論與角位置。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「可成三角形」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「可成三角形」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「可成三角形」但後續失誤，可依證據給1分。",
      "若完成「可成三角形」與「平方等式841」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "依題意保留正確單位與根式或近似符號。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "只檢查20+21>29",
      "把29²算错"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "是直角三角形。",
      "recomputation": "20+21>29，可成三角形。；20²+21²=400+441=841。；29²=841，故依逆命題為直角三角形，29所對角為直角。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「結論與角位置」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "9a19bf057d261aed385c08326152735d932fef8599ee8a5b7bfd2f0404ae1156"
  },
  {
    "questionId": "u11-s014-cr002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "right-triangle-identify",
    "lockedSkillOrder": 14,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "三角形三邊為 √12、√25、√37。判定是否為直角三角形。",
    "requiredWork": [
      "找最長邊",
      "檢查三角形與平方",
      "下結論"
    ],
    "fullCreditSolution": [
      "最長邊√37。",
      "√12+√25>√37，可成三角形。",
      "兩短邊平方和12+25=37，等於最長邊平方。"
    ],
    "standardAnswer": "是直角三角形。",
    "alternativeMethod": "化簡√12=2√3、√25=5後再判定，結果相同。",
    "reasoningSteps": [
      "最長邊√37。",
      "√12+√25>√37，可成三角形。",
      "兩短邊平方和12+25=37，等於最長邊平方。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：辨認最長邊；精確平方關係；正確結論，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：辨認最長邊；精確平方關係；正確結論。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「辨認最長邊」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「辨認最長邊」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「辨認最長邊」但後續失誤，可依證據給1分。",
      "若完成「辨認最長邊」與「精確平方關係」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "依題意保留正確單位與根式或近似符號。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "先取小數造成誤差",
      "只因12+25=37未說邊平方"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "是直角三角形。",
      "recomputation": "最長邊√37。；√12+√25>√37，可成三角形。；兩短邊平方和12+25=37，等於最長邊平方。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「正確結論」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "108513374332dfa01812eea76943c04cc0bc173b6b7ac5c0f9a6a437de1a4008"
  },
  {
    "questionId": "u11-s015-cr001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-converse-basic",
    "lockedSkillOrder": 15,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "用自己的話分別寫出畢氏定理與其逆命題，並指出兩者條件和結論如何交換。",
    "requiredWork": [
      "寫原命題",
      "寫逆命題",
      "比較條件結論"
    ],
    "fullCreditSolution": [
      "原命題：若三角形是直角三角形，則兩股平方和等於斜邊平方。",
      "逆命題：若同一三角形兩短邊平方和等於最長邊平方，則它是直角三角形。",
      "原命題由角推出邊；逆命題由邊推出角。"
    ],
    "standardAnswer": "兩命題方向相反但各有完整前提。",
    "alternativeMethod": "可用「P⇒Q」與「Q⇒P」表示，但需把P、Q內容寫清。",
    "reasoningSteps": [
      "原命題：若三角形是直角三角形，則兩股平方和等於斜邊平方。",
      "逆命題：若同一三角形兩短邊平方和等於最長邊平方，則它是直角三角形。",
      "原命題由角推出邊；逆命題由邊推出角。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：原命題完整；逆命題完整；交換方向說明，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：原命題完整；逆命題完整；交換方向說明。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「原命題完整」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「原命題完整」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「原命題完整」但後續失誤，可依證據給1分。",
      "若完成「原命題完整」與「逆命題完整」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "依題意保留正確單位與根式或近似符號。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "兩句都寫原命題",
      "逆命題漏掉最長邊"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "兩命題方向相反但各有完整前提。",
      "recomputation": "原命題：若三角形是直角三角形，則兩股平方和等於斜邊平方。；逆命題：若同一三角形兩短邊平方和等於最長邊平方，則它是直角三角形。；原命題由角推出邊；逆命題由邊推出角。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「交換方向說明」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "73cc994f73303bdcfd0f9a35be1fb9782a40f2c66a5bc018a6976aca3fa0ae75"
  },
  {
    "questionId": "u11-s015-cr002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-pythagorean",
    "skillId": "pythagorean-converse-basic",
    "lockedSkillOrder": 15,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "某程式輸入三邊後不排序，直接檢查 first²+second²=third²。說明此設計可能出錯的原因，並提出修正。",
    "requiredWork": [
      "指出最長邊角色",
      "給反例或說明",
      "提出排序流程"
    ],
    "fullCreditSolution": [
      "逆命題要求等式右側是最長邊平方。",
      "例如輸入順序5,13,12時，5²+13²≠12²，程式會誤判；但排序成5,12,13後成立。",
      "修正為先由小到大排序，再檢查前兩邊平方和是否等於最大邊平方。"
    ],
    "standardAnswer": "先排序再檢查。",
    "alternativeMethod": "也可找最大值作c，另外兩值作a,b，不必真的重排陣列。",
    "reasoningSteps": [
      "逆命題要求等式右側是最長邊平方。",
      "例如輸入順序5,13,12時，5²+13²≠12²，程式會誤判；但排序成5,12,13後成立。",
      "修正為先由小到大排序，再檢查前兩邊平方和是否等於最大邊平方。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：解釋最長邊；具體錯誤情境；可靠修正流程，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：解釋最長邊；具體錯誤情境；可靠修正流程。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「解釋最長邊」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「解釋最長邊」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「解釋最長邊」但後續失誤，可依證據給1分。",
      "若完成「解釋最長邊」與「具體錯誤情境」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "依題意保留正確單位與根式或近似符號。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "只說程式不好",
      "建議任意交換直到成立而不驗三角形"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "先排序再檢查。",
      "recomputation": "逆命題要求等式右側是最長邊平方。；例如輸入順序5,13,12時，5²+13²≠12²，程式會誤判；但排序成5,12,13後成立。；修正為先由小到大排序，再檢查前兩邊平方和是否等於最大邊平方。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「可靠修正流程」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "43c5bc347d98539030736d82c11da2f404661132170651d4a1354bdf0bc1dd51"
  },
  {
    "questionId": "u11-s016-cr001",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-literacy",
    "skillId": "root-literacy",
    "lockedSkillOrder": 16,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "公園兩端水平相差 9 公里、垂直相差 12 公里。方案甲沿兩方向鋪路，每公里成本 1 單位；方案乙鋪直線，每公里成本 1.35 單位。比較總成本並選方案。",
    "requiredWork": [
      "算甲路長與成本",
      "算乙直線長與成本",
      "比較並下決策"
    ],
    "fullCreditSolution": [
      "甲路長=9+12=21，成本21。",
      "乙路長=√(9²+12²)=15，成本=15×1.35=20.25。",
      "20.25<21，所以乙成本較低。"
    ],
    "standardAnswer": "選方案乙，少0.75成本單位。",
    "alternativeMethod": "可比較乙每公里倍率的臨界值21/15=1.4；1.35<1.4，所以乙較低。",
    "reasoningSteps": [
      "甲路長=9+12=21，成本21。",
      "乙路長=√(9²+12²)=15，成本=15×1.35=20.25。",
      "20.25<21，所以乙成本較低。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：甲成本21；乙成本20.25；決策乙且比較差額，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：甲成本21；乙成本20.25；決策乙且比較差額。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「甲成本21」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「甲成本21」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「甲成本21」但後續失誤，可依證據給1分。",
      "若完成「甲成本21」與「乙成本20.25」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "成本使用相對單位；距離為公里。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "只比較15與21",
      "忘記乘1.35"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "選方案乙，少0.75成本單位。",
      "recomputation": "甲路長=9+12=21，成本21。；乙路長=√(9²+12²)=15，成本=15×1.35=20.25。；20.25<21，所以乙成本較低。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「決策乙且比較差額」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "b2a53a3fd786182e38673cf8be649cda37e98ac38072523ac7ca30a6a195beb1"
  },
  {
    "questionId": "u11-s016-cr002",
    "unitId": "u11",
    "numericUnitId": 11,
    "topicId": "u11-literacy",
    "skillId": "root-literacy",
    "lockedSkillOrder": 16,
    "difficulty": "constructed-response",
    "type": "constructed-response",
    "prompt": "矩形門框寬 1.2 公尺、高 2.1 公尺。直桿長 2.4 公尺，忽略厚度且只在門框平面內轉動。判斷是否可通過，並說明模型限制。",
    "requiredWork": [
      "求門框對角線",
      "與桿長比較",
      "寫出理想化限制"
    ],
    "fullCreditSolution": [
      "最大平面直線長為對角線√(1.2²+2.1²)=√5.85。",
      "2.4²=5.76<5.85，所以2.4<√5.85，理想模型下可通過。",
      "結論不考慮桿粗、門框厚度與平面外轉動空間。"
    ],
    "standardAnswer": "在題定理想模型下可通過。",
    "alternativeMethod": "可估√5.85≈2.419，再與2.4比較；精確平方比較更可靠。",
    "reasoningSteps": [
      "最大平面直線長為對角線√(1.2²+2.1²)=√5.85。",
      "2.4²=5.76<5.85，所以2.4<√5.85，理想模型下可通過。",
      "結論不考慮桿粗、門框厚度與平面外轉動空間。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "完整達成三項：對角線√5.85；平方比較5.76<5.85；可行結論與限制，結論與單位正確。"
      },
      {
        "score": 2,
        "criteria": "核心方法正確，且至少達成其中兩項：對角線√5.85；平方比較5.76<5.85；可行結論與限制。可有一處非核心算術或格式失誤。"
      },
      {
        "score": 1,
        "criteria": "能辨認部分關係，例如「對角線√5.85」，但後續平方、開根、判定或結論未完成；僅抄題不給分。"
      },
      {
        "score": 0,
        "criteria": "未使用與本題相關的核心關係，或答案與推理矛盾；只寫錯誤結果且無可辨識的「對角線√5.85」證據。"
      }
    ],
    "partialCreditRules": [
      "正確完成「對角線√5.85」但後續失誤，可依證據給1分。",
      "若完成「對角線√5.85」與「平方比較5.76<5.85」且僅末步格式錯，可給2分。"
    ],
    "followThroughPolicy": "若前段算術錯誤但後續方法與該錯誤值一致，後續方法分可保留；違反核心定義或選錯模型者不適用。",
    "unitAndNotationRules": "所有長度以公尺。",
    "answerOnlyPolicy": "只有正確答案而無任何計算或理由，最高1分；若題目明確要求說明或證明而未提供，不能給滿分。",
    "commonErrors": [
      "只比較寬或高",
      "未寫模型限制"
    ],
    "figureId": null,
    "drawingSpecReference": null,
    "independentReview": {
      "decision": "pass",
      "derivedResult": "在題定理想模型下可通過。",
      "recomputation": "最大平面直線長為對角線√(1.2²+2.1²)=√5.85。；2.4²=5.76<5.85，所以2.4<√5.85，理想模型下可通過。；結論不考慮桿粗、門框厚度與平面外轉動空間。",
      "ambiguity": "所求、條件與答案形式均由題幹限定；以「可行結論與限制」完成唯一結論。",
      "reviewedAt": "2026-07-12"
    },
    "replacementPolicy": {
      "replacesLegacyOnlyAtFinalIntegration": true,
      "productionActivationAllowed": false
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "noTemplateDeclaration": true,
    "contentSha256": "36d505d1efe9876c3254b40147c0d54da2bfa291cca08553a03e981b0b9edded"
  }
];
