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
      "因此兩者都符合平方根定義。",
      "設 x²=100，因 100=10²，所以 x=10 或 x=-10；逐一驗算 10×10 與 (-10)×(-10) 都等於 100，兩個不同實數都符合平方根定義，因此答案不能只列正值。"
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
      "把『一百的平方根』當成根號記號 √100，只寫非負的十。",
      "把被開方數一百加上正負號寫成 ±100，沒有將候選值平方驗算。"
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
    "contentSha256": "a792223a5e8c9652845b2ee24d04705016fa07fc31cf90faf65d7c19bf784b7e"
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
      "負根不符合實際長度。",
      "由正方形面積公式 s²=288，代數候選為 ±√288；將 288 分解成 144×2 得 √288=12√2。因 s 是邊長，必須取正的 12√2 公分，負值不具幾何意義。"
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
      "把面積二百八十八除以二，未使用邊長平方等於面積。",
      "正確化簡出 12√2 後仍寫 ±12√2 公分，忽略邊長非負。"
    ],
    "figureId": null,
    "drawingSpecReference": null,
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
    "contentSha256": "409837c46bcf534f3dac62b34cae0238ea8e62c219542f26b36af48e7b6c8a0a"
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
      "3不含大於1的平方因數。",
      "選最大完全平方因數二百五十六，可寫 768=256×3；因此 √768=√256×√3=16√3。再檢查根號內三沒有大於一的平方因數，且平方 16√3 可回到七百六十八。"
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
      "把完全平方因數二百五十六原樣提出，錯寫成 256√3。",
      "只提出六十四而停在 8√12，沒有將根號內十二再化簡。"
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
    "contentSha256": "54ba6d83d63f9cbe4afc51f608d9ae49de8fd0653b225e762147c0371c0fbd09"
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
      "所以邊長=9√3公尺。",
      "設邊長 s>0，則 s²=243，所以 s=√243；因 243=81×3，化簡得 s=9√3 公尺。長度只取非負值，且平方 (9√3)²=243 可完成驗算。",
      "也可以先估算邊長介於十五與十六之間，以此排除將二百四十三直接當成邊長的錯誤。"
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
      "把面積二百四十三除以二得到一百二十一點五，未使用平方關係。",
      "抽出平方因數八十一時未開平方，錯寫成 81√3 公尺。"
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
    "contentSha256": "ae35e268ade1e54e0bb94bf7de32527a179782dfa12ddd19c131f705643054be"
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
      "6√3-2√3+5√3=9√3。",
      "先分別化簡：2√27=2×3√3=6√3、√12=2√3、√75=5√3；三項成為同類根式後依原符號合併係數 6-2+5=9，因此結果為 9√3，不能把被開方數直接加減。",
      "回代原式時，三個根式化簡後的被開方數都是三，這正是只能合併外部係數的理由。"
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
      "把原式改成 √(27-12+75)，錯把根式加減當作根號內運算。",
      "化簡 √27 後漏乘前面的係數二，或忽略中間負號。"
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
    "contentSha256": "62fa56163cdc9d873b163fddb5faa9262f39796ecbd73ff9a7596220df767952"
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
      "總和=8+2√5。",
      "前兩因式互為共軛，乘積用平方差得 13-5=8；再將 √20 化簡成 2√5。八是有理數項，2√5 是根式項，兩者不是同類項，所以最終答案為 8+2√5。"
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
      "把共軛乘積誤算成十三加五，得到十八。",
      "得到八與 2√5 後強行合併成單一根式，忽略兩項不同類。"
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
    "contentSha256": "85ed0bf9a7d96bf3b15b57ed7c2370be48c60ed1c78e51e7eb27a33fa624b1d1"
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
      "10.75²=115.5625>115，所以√115<10.75，取一位為10.7。",
      "先由 10²<115<11² 確定整數區間，再比較一位小數中點 10.75；因 10.75²=115.5625>115，所以 √115<10.75，且已知大於 10.7，故取到小數第一位為 10.7，近似記號應寫 ≈。"
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
      "只寫整數下界十，沒有完成題目要求的小數第一位。",
      "把近似結果寫成 √115=10.7，未用約等於符號或未檢查中點。"
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
    "contentSha256": "c97f521432f8588828a0b3ccfcb4bcda9fd231d0b53681f498ef963bbbba2f7d"
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
      "12.45²=155.0025>155，所以邊長略小於12.45，填12.4公尺。",
      "正方形邊長 s=√155 公尺。十二點四與十二點五的平方分別夾住一百五十五；再算中點 12.45²=155.0025 略大於 155，故 √155 略小於十二點四五，取到小數第一位填 12.4 公尺。"
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
      "把面積一百五十五除以二，未由邊長平方等於面積建立根式。",
      "只看到數值介於十二點四與十二點五就填十二點五，沒有檢查中點平方。"
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
    "contentSha256": "bd2ec2fdb902f4837d287d425ed58e8dfb12bff49e4c63fa30837a26f40f1e1c"
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
      "49的平方根是所有x使x²=49，故為7與-7。",
      "根號記號 √49 是非負主平方根，因此單值為七；『49 的平方根』則是解 x²=49，正七與負七平方都等於四十九，故為 ±7。兩個問法一個是函數值、一個是全部解。"
    ],
    "standardAnswer": "√49=7；49 的平方根為±7。",
    "alternativeMethod": "用函數單值與方程解集合的觀點說明。",
    "reasoningSteps": [
      "√49是非負平方根，所以等於7。",
      "49的平方根是所有x使x²=49，故為7與-7。",
      "分別用主平方根的非負定義與平方方程的全部解檢查，確認兩種答案形式不可互換。"
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
      "把 √49 也寫成 ±7，忽略根號記號本身是單值非負。",
      "把四十九的所有平方根只寫七，遺漏平方相同的負七。"
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
    "contentSha256": "12696f7787b7d5de4b2da6bced018cb7bde620a25d3481fabc0d5e215e13a192"
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
      "-a>0，符合主平方根非負。",
      "一般而言 √(a²)=|a|，因主平方根必非負；題設 a<0，所以 |a|=-a，且 -a>0，正符合主平方根符號限制。若直接寫 a，結果反而是負數。"
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
      "機械消去根號與平方直接寫 a，未檢查 a 為負。",
      "把單值主平方根寫成 ±a，混淆函數值與平方方程解。"
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
    "contentSha256": "787e4f880a9c8af9bdc9fee0666ad6280e39d842493b8227c4bdbf8be0800cc9"
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
      "15²至22²為225、256、289、324、361、400、441、484。",
      "先找底數界線：14²=196 低於二百，所以從十五開始；22²=484 仍不超過五百，而 23²=529 已超過。故連續列出 15² 到 22² 共八個值，端點檢查證明前後都沒有遺漏。"
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
      "把十四平方一百九十六也列入，忽略範圍下界二百。",
      "列到二十一平方四百四十一便停止，漏掉仍不超過五百的二十二平方。"
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
    "contentSha256": "7aa33a4419d6339124c0ade123a6eda0883c9f3292b72d7ba02a54a1fa24e82f"
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
      "26×26=676。",
      "設每列 n 人，正方形方陣也有 n 列，所以 n²=676。因 26²=676 且人數為正，取 n=26；最後以 26×26=676 回代驗算，與總人數完全一致。",
      "二十五平方只有六百二十五，二十七平方則是七百二十九，也可據此確認整數邊長唯一。"
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
      "把六百七十六除以二得到三百三十八，沒有使用列數等於每列人數。",
      "寫成正負二十六人，忽略人數與列長皆為非負整數。"
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
    "contentSha256": "711662c49bc3188c3aa4477af0c3e214f24bfca8a031b6e6539b2751fd901589"
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
      "約分為4√3/5。",
      "同乘 √3/√3 是乘以一，因此保持原值；分母成十五後仍須將十二與十五同除以三，最後 4√3/5 的分母為有理數且係數互質。"
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
      "只將分母 5√3 改成十五，卻沒有同步將分子十二乘 √3。",
      "得到 12√3/15 後停止，沒有再以公因數三約成最簡形式。"
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
    "contentSha256": "933a6cd8300653a913e4093cf44d4161f99c3ac9cef5be6b7eb6c4b42dccf73d"
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
      "A=√2。",
      "兩個分母先各自提出平方因數後都化為 2√2 或 3√2，使兩項各等於 √2/2；相加為 √2，結果分母已是有理數且根式最簡。"
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
      "直接把 √8 與 √18 相加成共同分母，沒有先分別化簡每一項。",
      "只將第一項有理化，第二項仍保留根號分母便進行相加。"
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
    "contentSha256": "9181f43c4e3f47734b5b407057854310a99ed56cedc986fc6f1ad64a06b8a353"
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
      "45>44，所以3√5>√44。",
      "因兩數皆非負，平方函數在此範圍保持大小；四十五大於四十四便可反推原正值 3√5 大於 √44，過程是精確比較而非小數估算。"
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
      "只比較被開方數五與四十四，漏掉外係數三平方後會乘九。",
      "未先確認兩數皆非負便任意平方比較，沒有交代平方不改變順序的條件。"
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
    "contentSha256": "c157ec26ee7da2ebb8721902f65514fb0e0bb783a5ef4b30f1c54e4e1db8d0d7"
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
      "取負後順序反轉。",
      "可用平方精確驗證正值順序：12>9>8，所以 √12>3>2√2；三者同取負號後數線方向反轉，故由小到大為 -√12、-3、-2√2。"
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
      "比較完正值後直接加負號而維持原方向，忘記乘負一會反轉不等號。",
      "把 √12 錯化成 2√6，或用不充分的小數位數造成錯誤排序。"
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
    "contentSha256": "6e8c79add84899f58618eb594623d4b8a71798b602eca502401aeb85d7e639f4"
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
      "c=√1681=41。",
      "圖中的九、四十為直角兩股，c 在直角對面才是斜邊；平方和一千六百八十一開正平方根為四十一，並應保留長度單位公分。"
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
      "把兩股九與四十直接相加得到四十九，沒有使用平方和。",
      "算到 c²=1681 就停止，將斜邊平方誤當斜邊長或漏寫公分。"
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
    "contentSha256": "6d56d8c42fa5bae6c6e8109585f55610094634484a91d355ef0ea51828523613"
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
      "c=√(2a²)=a√2，因a>0。",
      "由 c²=2a² 得 c=√2·√(a²)=√2·|a|；題設 a>0，所以 |a|=a，故斜邊唯一為 a√2，而不是正負兩值。",
      "代回所得斜邊平方為 2a²，與兩股平方和完全一致，且 a√2 為正並大於每一股 a。"
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
      "把兩股 a 直接相加成 2a，忽略畢氏定理使用平方和。",
      "由 √(a²)=a 未引用 a>0；一般情況應為 |a|，長度條件才可化成 a。"
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
    "contentSha256": "836d6028ad010df80beb8f864e386f04cead4b455e0c72c9ae7bdbb2786dca47"
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
      "高度=20。",
      "牆與地面形成直角，梯子連接兩股端點且最長，因此是斜邊；以斜邊平方減水平股平方求得四百，開正平方根為二十公尺。"
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
      "把梯長二十五與離牆十五直接相減得到十，沒有使用平方差。",
      "把未知高度當斜邊而列 15²+25²，忽略梯子才位於直角對面。"
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
    "contentSha256": "b585c0c550308b0595232f98b32b08aec9abf88ed3819db832088d9b205aeceb"
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
      "空間對角線=√(10²+24²)=√676=26。",
      "底面對角線十與高二十四互相垂直，第二次使用畢氏定理得空間對角線平方六百七十六，開正根為二十六公分；此線長大於長、寬、高各邊。"
    ],
    "standardAnswer": "26 公分。",
    "alternativeMethod": "直接使用√(6²+8²+24²)=√676，但需說明三方向互相垂直。",
    "reasoningSteps": [
      "底面對角線=√(6²+8²)=10。",
      "空間對角線=√(10²+24²)=√676=26。",
      "以底面對角線十為一股、高二十四為另一股，開正根並附公分單位。"
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
      "只完成底面六八十三角形便回答十，漏掉高度二十四。",
      "把長寬高直接相加得三十八，沒有分兩個直角三角形求空間距離。"
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
    "contentSha256": "f164ed9f5bbe6c845ec57d61266ecfe8de8389125fe3d4e33afaf8ebfdbd7ee5"
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
      "距離=√(8²+6²)=√100=10。",
      "水平差八、垂直差六不受取點順序影響，平方後距離為 √(64+36)=10；答案是兩點直線距離，使用座標單位而非把差值相加。"
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
      "計算 5-(-3) 時漏掉括號而得二，造成水平差錯誤。",
      "直接使用水平差八加垂直差六得十四，求成折線而非直線距離。"
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
    "contentSha256": "a8a0a107c45e141d49ad28eedf8fad06de264f89591091bc9510be3607d10c53"
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
      "x-1=9或-9，所以x=10或-8。",
      "兩點位於同一水平線，Q 可在 P 的右側九單位或左側九單位，所以 x 相對中心一有兩個對稱解；代回十與負八都使 |x-1|=9。"
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
      "只解 x-1=9 而漏掉 x-1=-9，因此只寫 x=10。",
      "直接寫 x=±9，沒有把兩個位移解加回中心坐標一。"
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
    "contentSha256": "84f8b8beb0d8272464997e1129d86867e0100c1bb1dc5941da3e391210c83553"
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
    "contentSha256": "09987f63a369d55db3f1519b2874af2c892edeb419aecae0f255e608daeafede",
    "standardSolution": [
      "設另一股為b公分，由畢氏定理得b²＝37²−12²，因為斜邊平方應等於兩股平方和。",
      "利用平方差，b²＝(37−12)(37＋12)＝25×49＝1225，可減少大數平方的計算量。",
      "因b是實際長度，只取正平方根b＝35公分；最後驗算12²＋35²＝37²，三邊角色與數值都符合。"
    ],
    "commonErrorTargets": [
      "直接以37−12＝25作為另一股，沒有使用三邊平方關係。",
      "算得1225後未開根，或忘記股長只取正值而寫成正負35。"
    ]
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
    "contentSha256": "7779279c40c511b790eb5651694cdc0059cb04487aca97b1bdf898e0301c0087",
    "standardSolution": [
      "設兩股為7k、24k，先用勾股定理補出斜邊比例，得√[(7k)²＋(24k)²]＝25k。",
      "由實際斜邊25k＝50得k＝2，所以兩股必須同步放大，分別為14與48。",
      "驗算14²＋48²＝196＋2304＝2500＝50²，兩股皆為正且斜邊最大，答案符合題目全部條件。"
    ],
    "commonErrorTargets": [
      "把斜邊50直接按7比24分配，忽略畢氏數組的斜邊比例25。",
      "求得k＝2後只報一股，或把24k誤算成46而未回代驗算。"
    ]
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
    "contentSha256": "b7030b536b039d98143fbf82183d7eea109755986aa5cc26fa34b6cd52b2325b",
    "standardSolution": [
      "向東十二公里與向北五公里互相垂直，返程直線是直角三角形的斜邊。",
      "返程距離為√(12²＋5²)＝√169＝13公里。",
      "全程路程為12＋5＋13＝30公里，所以答案是三十公里。"
    ],
    "commonErrorTargets": [
      "只算返程十三公里，未把向東與向北的去程一起計入全程。",
      "把十二與五相加成十七並當成返程，混淆折線路程與直線距離。"
    ]
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
    "contentSha256": "5f8c58599f8b1b5e3c2db3110820c18ccd0fab634aea0ee07f2d9a78fd3081c2",
    "standardSolution": [
      "折斷處高八公尺，樹梢離樹根十五公尺，兩段形成直角三角形的兩股。",
      "折斷部分長√(8²＋15²)＝√289＝17公尺。",
      "原樹高為仍直立的八公尺加折斷的十七公尺，共25公尺。"
    ],
    "commonErrorTargets": [
      "只答折斷部分十七公尺，忘記原樹高還包含直立的八公尺。",
      "把八與十五直接相加成二十三，沒有用勾股定理求折斷部分。"
    ]
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
      "把29²算錯"
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
    "contentSha256": "b01fa518b95ad28f58a105ed975cb5fa885175caf71b97c93f589cb60df95a46",
    "standardSolution": [
      "先比較三邊，二十九最長，因此若為直角三角形，二十九必須是斜邊。",
      "計算20²＋21²＝400＋441＝841，同時29²＝841。",
      "兩者相等，所以三邊組成直角三角形，直角是二十九所對的角。"
    ],
    "commonErrorTargets": [
      "沒有先確定二十九是最長邊，誤把二十或二十一放在平方等式右側。",
      "只寫等式成立卻未說明結論，或把直角錯誤標在二十九所在的端點。"
    ]
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
    "contentSha256": "def848d451ea2d717d41696ff71bfd2bc0dc6e5195ed42432397b2a58b60b937",
    "standardSolution": [
      "三邊為√12、√25、√37，其中√37最大，應作為候選斜邊，另兩邊則是候選兩股。",
      "較短兩邊平方和為(√12)²＋(√25)²＝12＋25＝37，全程保留精確根式。",
      "又(√37)²＝37，所以平方關係精確成立，依逆敘述可判定此三角形是直角三角形。"
    ],
    "commonErrorTargets": [
      "把根號數平方後仍保留根號，導致無法正確比較平方關係。",
      "只比較十二、二十五與三十七，卻未說明√37是最長邊及判定結論。"
    ]
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
    "contentSha256": "4010a4c10f3b21ac56c2f95975e144889d5bfc8e81b447e4b09bef0466dff8bf",
    "standardSolution": [
      "勾股定理：若三角形是直角三角形，兩股平方和等於斜邊平方。",
      "逆敘述：若同一三角形三邊a≤b≤c且a²＋b²＝c²，則c所對的角為直角。",
      "兩者交換條件與結論；原定理由直角推邊長關係，逆敘述由邊長關係判定直角。"
    ],
    "commonErrorTargets": [
      "把定理與逆敘述寫成完全相同方向，沒有交換條件與結論。",
      "逆敘述漏寫c為最長邊或三邊屬於同一三角形，使判定條件不完整。"
    ]
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
    "contentSha256": "4a848f8428de7d99c141ca3f9d0296f2a45b0a52d6123956ee91c05404e536df",
    "standardSolution": [
      "程式不能假設輸入順序已把斜邊放在最後，應先將三個正邊長由小到大排序為a≤b≤c。",
      "接著先檢查a＋b＞c確能成三角形，再比較a²＋b²是否等於c²。",
      "例如輸入5、13、12，排序後為5、12、13，且25＋144＝169，因此應判定為直角三角形。"
    ],
    "commonErrorTargets": [
      "直接用第三個輸入值當最長邊，使5、13、12這類不同順序得到錯誤結果。",
      "只檢查平方等式而不驗證正邊長與三角形不等式，忽略輸入邊界。"
    ]
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
    "contentSha256": "fa00fab210e121ca87cc2f2ae6a9aa7e8a62dc84d166acc6f227102c2f5e1a2a",
    "standardSolution": [
      "路線A沿兩垂直方向走，距離為9＋12＝21公里；每公里成本一，總成本21。",
      "路線B為直線，距離√(9²＋12²)＝15公里；每公里成本1.35，總成本15×1.35＝20.25。",
      "因20.25＜21，所以選路線B，且比路線A少0.75個成本單位。"
    ],
    "commonErrorTargets": [
      "只比較十五與二十一公里就選路線B，沒有把不同的每公里成本計入。",
      "把1.35加到十五而非相乘，導致路線B總成本計算錯誤。"
    ]
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
    "contentSha256": "2d24720ed2114ae404b0cd6dfcfffc6b60db475063416c2d085b2e7fbf885c4b",
    "standardSolution": [
      "門框對角線平方為1.2²＋2.1²＝1.44＋4.41＝5.85，所以對角線為√5.85公尺。",
      "細桿長2.4公尺，其平方5.76小於5.85，因此2.4＜√5.85，理想化判斷為可以通過。",
      "此模型假設門框與桿在同一平面、桿無厚度且沒有門檻或五金阻擋；實際仍需保留間隙。"
    ],
    "commonErrorTargets": [
      "只比較桿長二點四與門高二點一，未利用門框對角線判斷。",
      "宣稱實際一定可通過，沒有說明平面、無厚度與無障礙物等模型限制。"
    ]
  }
];
