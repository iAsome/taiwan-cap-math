// SERIALIZATION OF REVIEWED CHATGPT_HUMAN_AUTHORED_R1 CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u04-s001-lecture-r1",
  "unitId": "u04",
  "numericUnitId": 4,
  "topicId": "u04-system-basics",
  "skillId": "system-two-variable-equation-definition",
  "lockedSkillTitle": "二元一次方程式的判斷",
  "title": "二元一次方程式的判斷：看未知數種類與次數",
  "audience": "臺灣國中零基礎至國中教育會考滿分",
  "reviewStatus": "independently-reviewed",
  "exactSkillIdentity": {
    "unitTitle": "二元一次聯立方程式",
    "skillTitle": "二元一次方程式的判斷",
    "scope": "判斷式子是否同時只有兩個未知數，且每個未知數的次數都是 1。"
  },
  "prerequisiteBridge": "本技能是本單元起點；先備只需能讀等號、未知數與一次項。",
  "learningGoals": [
    "能說出二元、一次與方程式三個條件。",
    "能將式子整理後再判斷，而不是隻看表面。",
    "能排除含 xy、平方、未知數在分母等非一次形式。",
    "能辨認缺少某一未知數係數為 0 的特殊寫法。"
  ],
  "vocabulary": [
    {
      "term": "未知數",
      "definition": "尚未確定的數，常用 x、y 表示。"
    },
    {
      "term": "二元",
      "definition": "式中實際出現兩種未知數。"
    },
    {
      "term": "一次",
      "definition": "每一項中未知數的最高次數都是 1，且未知數彼此不相乘。"
    },
    {
      "term": "方程式",
      "definition": "含等號，表示左右兩邊相等的式子。"
    },
    {
      "term": "係數",
      "definition": "乘在未知數前面的數，例如 3x 的係數是 3。"
    }
  ],
  "notation": [
    {
      "symbol": "ax+by=c",
      "meaning": "二元一次方程式的一般形式，其中 a、b 不可同時為 0。"
    },
    {
      "symbol": "x²",
      "meaning": "x 的二次方，因此不是一次。"
    },
    {
      "symbol": "xy",
      "meaning": "兩個未知數相乘，總次數為 2，因此不是一次。"
    }
  ],
  "conceptDevelopment": [
    "判斷時要逐項檢查：有沒有等號、未知數是不是恰有兩種、未知數是否都只出現一次。",
    "式子可先移項與合併同類項。例如 x+y=x-y+4 整理成 2y=4，只剩一種未知數，因此不屬於真正含兩元的方程式。",
    "一般形式 ax+by=c 中，a、b 可以有一個是 0，但若課程要求「實際含兩個未知數」，題目通常需兩個係數皆非 0；本單元採用實際出現兩未知數的判準。"
  ],
  "definitions": [
    {
      "name": "二元一次方程式",
      "statement": "含有兩種未知數，且每一未知數的次數都是 1 的等式。"
    },
    {
      "name": "一次項",
      "statement": "未知數只乘一次，例如 -5y。"
    },
    {
      "name": "常數項",
      "statement": "不含未知數的項，例如 7。"
    }
  ],
  "formulas": [
    {
      "formula": "ax+by=c",
      "conditions": [
        "a、b、c 為已知數，且 a、b 皆非 0 時，式中實際含 x、y 兩元。"
      ],
      "meaning": "用係數與常數表示所有二元一次方程式。"
    }
  ],
  "invalidUseCases": [
    "沒有等號的 3x+2y 只是代數式，不是方程式。",
    "含 x²、xy、1/x、√x 的式子不是二元一次方程式。",
    "整理後若一個未知數消失，要依整理後的實際形式判斷。",
    "未知數名稱不限 x、y，但必須只有兩種。"
  ],
  "stepByStepMethod": [
    {
      "step": 1,
      "instruction": "先找等號",
      "check": "沒有等號立即排除。"
    },
    {
      "step": 2,
      "instruction": "列出未知數種類",
      "check": "確認恰有兩種。"
    },
    {
      "step": 3,
      "instruction": "整理左右兩邊",
      "check": "移項並合併同類項。"
    },
    {
      "step": 4,
      "instruction": "檢查每一項",
      "check": "不可有平方、相乘、分母含未知數或根號。"
    },
    {
      "step": 5,
      "instruction": "檢查兩元是否仍存在",
      "check": "整理後兩種未知數的係數都不可消失。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "u04-s001-example-a",
      "prompt": "判斷 4a-3b=9 是否為二元一次方程式。",
      "solutionSteps": [
        "式中有等號，未知數為 a、b。",
        "a、b 都只以一次項出現，係數皆不為零。"
      ],
      "answer": "是二元一次方程式。",
      "why": "等號、兩種未知數與一次項三項條件都成立；負係數不影響一次性質，也沒有未知數相乘、位於分母或高次項，因此符合完整定義。"
    },
    {
      "exampleId": "u04-s001-example-b",
      "prompt": "判斷 r+s²=10 的類型。",
      "solutionSteps": [
        "確認有 r、s 兩個未知數與等號。",
        "辨認 s² 的最高次數為二。"
      ],
      "answer": "不是二元一次方程式。",
      "why": "雖然式中確實有兩個未知數，但 s 以平方項出現，違反每個未知數最高次數為一的要求。未知數種類正確不足以補救次數錯誤。"
    },
    {
      "exampleId": "u04-s001-example-c",
      "prompt": "先化簡 3(m+n)-2m=7，再判斷類型。",
      "solutionSteps": [
        "展開為 3m+3n-2m=7。",
        "合併為 m+3n=7，再檢查未知數與次數。"
      ],
      "answer": "整理後是二元一次方程式。",
      "why": "括號展開與同類項合併後，m、n 都仍保留，且各自只以一次項出現。判斷整理後形式可避免把括號錯當成非一次的理由。"
    },
    {
      "exampleId": "u04-s001-example-d",
      "prompt": "方程式 (c+1)p-4q=8 要實際含 p、q，c 有何限制？",
      "solutionSteps": [
        "q 的係數 -4 已不為零。",
        "要求 p 的係數 c+1≠0，所以 c≠-1。"
      ],
      "answer": "c 不可等於 -1。",
      "why": "當 c=-1 時，p 的係數變成零，方程式只剩 -4q=8，不再實際包含兩元。其他 c 值保留 p、q，且兩者次數仍為一，這正是參數邊界需要另行檢查的原因。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "只看到兩個不同字母就判定為二元一次。",
      "why": "沒有檢查等號、未知數次數與乘積。",
      "correction": "先化簡，再逐一核對等號、種類及最高次數。"
    },
    {
      "mistake": "把分數係數視為分母含未知數。",
      "why": "混淆數字係數與未知數所在位置。",
      "correction": "確認分母若只是數字，仍可形成合法的一次項。"
    },
    {
      "mistake": "看到括號就判定不是一次。",
      "why": "未使用分配律確認括號展開後的次數。",
      "correction": "完整展開並合併同類項後再分類。"
    },
    {
      "mistake": "忽略等式兩邊相同項可能抵消。",
      "why": "只依原式外觀計算未知數種類。",
      "correction": "把方程式整理到等價的簡式再檢查實際未知數。"
    },
    {
      "mistake": "參數係數為零時仍算該未知數存在。",
      "why": "把符號位置誤當成非零項。",
      "correction": "求出每個參數係數為零的值並排除。"
    },
    {
      "mistake": "因為題目有生活情境就不做代數分類。",
      "why": "把文字背景誤當成方程式性質。",
      "correction": "完成建模後仍依相同的等號、種類與次數判準。"
    }
  ],
  "selfCheck": [
    {
      "prompt": "2a+3b=9 是否符合？",
      "answer": "符合；有兩元且皆一次。"
    },
    {
      "prompt": "m/n+2m=1 是否符合？",
      "answer": "不符合；n 在分母。"
    },
    {
      "prompt": "p+q-p=6 是否符合？",
      "answer": "化簡後 q=6，只剩一元。"
    },
    {
      "prompt": "為何 4x+5y 不算方程式？",
      "answer": "缺少等號。"
    }
  ],
  "summary": [
    "二元指兩種未知數，一次指未知數不平方、不相乘、不在分母。",
    "判斷前先整理。",
    "有等號才是方程式。",
    "ax+by=c 是一般形式。"
  ],
  "connections": {
    "previous": "本技能是本單元起點；先備只需能讀等號、未知數與一次項。",
    "next": "下一技能「有序數對與解的判斷」會延伸目前能力。"
  },
  "figureReferences": [],
  "accessibilityNote": "本講義不需要圖形；所有關係均以文字、等式與逐步運算完整呈現，避擴音前使用 U05 坐標圖形。",
  "lectureReview": {
    "decision": "pass",
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "capBoundary": "pass",
    "skillSpecificEvidence": "逐一核對「等號、未知數種類、化簡後次數」三層判準；特別檢查了 xy、未知數在分母與化簡消去一元等邊界，未引入坐標圖形。",
    "reviewNote": "逐一核對「等號、未知數種類、化簡後次數」三層判準；特別檢查了 xy、未知數在分母與化簡消去一元等邊界，未引入坐標圖形。",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
  "contentSha256": "20aa7171ff4c371ff02be66c1aa94582dd053df7b439ebf1e0da7edf565e85eb",
  "conceptNarrative": [
    "二元一次方程式是含有等號的代數關係，整理後實際包含兩種未知數，而且每個未知數都只以一次項出現。判斷對象是整個方程式化簡後的結構，不是只數表面出現幾個字母。",
    "係數可以是正數、負數、分數、小數或參數；係數形式不會改變一次的性質。但未知數不能相乘、不能出現在分母，也不能有平方等高次項，否則不符合一次方程式。",
    "括號與等式兩邊的同類項可能遮住真正形式，所以應先用分配律展開、合併同類項，再做分類。有時整理後某個未知數完全抵消，原本看似二元的式子就只剩一元。",
    "在本單元採用「實際含兩元」的判準，因此 ax+by=c 中 a、b 都須不為零。若參數使任一係數為零，對應未知數便消失；情境題仍須依相同代數判準，不因文字背景而例外。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先確認式子具有等號，因為沒有等號的代數式不是方程式。",
      "check": "左右兩邊及等號位置都已辨認，沒有把運算符號誤當等號。"
    },
    {
      "step": 2,
      "instruction": "用分配律展開括號並合併等號同側的同類項。",
      "check": "括號外係數已乘每一項，合併後仍維持等式等價。"
    },
    {
      "step": 3,
      "instruction": "必要時在等式兩邊做相同運算，觀察是否有未知數抵消。",
      "check": "沒有只移動單邊項目，整理後未知數種類已確定。"
    },
    {
      "step": 4,
      "instruction": "檢查保留的未知數是否恰有兩種，且最高次數都是一。",
      "check": "已排除平方、未知數乘積與未知數位於分母的情形。"
    },
    {
      "step": 5,
      "instruction": "若係數含參數，再找出會使任一未知數係數為零的邊界值。",
      "check": "所有排除值都已代回確認，結論符合實際含兩元的判準。"
    }
  ]
};

export const QUESTIONS = [
  {
    "questionId": "u04-s001-v001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "下列哪一個是二元一次方程式？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "辨認標準形式的二元一次方程式",
    "choices": [
      "2x+3y=7",
      "2x+3",
      "x²+y=5",
      "xy=6"
    ],
    "answerIndex": 0,
    "independentSolution": "逐項檢查後，只有 2x+3y=7 有等號、兩個未知數且皆為一次。",
    "explanation": "二元一次方程式須有等號、實際包含兩種未知數，且每個未知數的次數都是一。選項 2x+3y=7 同時符合；其餘分別缺等號、含平方項或含未知數乘積，因此只有第一項正確。",
    "steps": [
      "逐項確認是否具有等號。",
      "檢查是否實際含 x、y 兩種未知數。",
      "排除含平方項或 xy 乘積的式子，選出 2x+3y=7。"
    ],
    "optionAnalysis": [
      {
        "choice": "2x+3y=7",
        "truth": true,
        "reason": "同時符合二元、一次與方程式三項條件。"
      },
      {
        "choice": "2x+3",
        "truth": false,
        "reason": "沒有等號，只是代數式。"
      },
      {
        "choice": "x²+y=5",
        "truth": false,
        "reason": "含 x²，x 的次數為 2。"
      },
      {
        "choice": "xy=6",
        "truth": false,
        "reason": "含未知數乘積 xy。"
      }
    ],
    "misconceptionTarget": "只數出兩個字母，卻沒有檢查等號、次數與未知數乘積。",
    "prerequisiteCheck": "只需先備 等號與一次式基本概念，並使用本技能「二元一次方程式的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「辨認標準形式的二元一次方程式」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "直接辨認三個必要條件，計算量最低。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "5013046211ac4c3b003b53a49da501633c5b9e0ae7298efcf48a20bc6297ed5b"
  },
  {
    "questionId": "u04-s001-v002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "式子 5a-2b=9 中，未知數有幾種？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "計數未知數種類",
    "choices": [
      "1 種",
      "2 種",
      "3 種",
      "5 種"
    ],
    "answerIndex": 1,
    "independentSolution": "未知數字母只有 a、b，因此共有 2 種。",
    "explanation": "式中的字母 a 與 b 是待定的未知數，所以共有兩種未知數。數字五、二是係數，九是常數；它們雖然都是方程式的一部分，卻不是未知數，不能一起計入種類數。",
    "steps": [
      "找出式中出現的字母 a、b。",
      "確認 a 與 b 是兩個不同的未知數。",
      "排除係數 5、2 與常數 9，得到兩種。"
    ],
    "optionAnalysis": [
      {
        "choice": "1 種",
        "truth": false,
        "reason": "只數到 a，漏掉 b。"
      },
      {
        "choice": "2 種",
        "truth": true,
        "reason": "a、b 是兩種不同未知數。"
      },
      {
        "choice": "3 種",
        "truth": false,
        "reason": "把常數 9 當未知數。"
      },
      {
        "choice": "5 種",
        "truth": false,
        "reason": "把係數 5 當未知數種類。"
      }
    ],
    "misconceptionTarget": "把係數五、二或等號右邊的常數九也算成未知數。",
    "prerequisiteCheck": "只需先備 等號與一次式基本概念，並使用本技能「二元一次方程式的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「計數未知數種類」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "只需辨認字母角色，屬定義入門。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "d3e8ca2003e9ae5fcccc851624bcd5030cdd64bd1bb10192d3e092bd58661d4c"
  },
  {
    "questionId": "u04-s001-v003",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "basic",
    "itemType": "mc",
    "prompt": "下列哪個原因使 x+y²=4 不是二元一次方程式？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "指出非一次的具體原因",
    "choices": [
      "沒有等號",
      "只有一個未知數",
      "y 的次數是 2",
      "常數項是 4"
    ],
    "answerIndex": 2,
    "independentSolution": "y² 表示 y 的最高次數為 2，違反一次條件。",
    "explanation": "x+y²=4 有等號，也含 x、y 兩種未知數，但 y 的指數為二。二元一次方程式要求每個未知數的最高次數都是一，因此平方項 y² 已使它成為非一次方程式。",
    "steps": [
      "確認式中有等號與 x、y 兩種未知數。",
      "辨認 y² 表示 y 的次數是二。",
      "依一次方程式的次數判準排除這個式子。"
    ],
    "optionAnalysis": [
      {
        "choice": "沒有等號",
        "truth": false,
        "reason": "式中明明有等號。"
      },
      {
        "choice": "只有一個未知數",
        "truth": false,
        "reason": "式中有 x、y 兩個未知數。"
      },
      {
        "choice": "y 的次數是 2",
        "truth": true,
        "reason": "平方項直接違反一次條件。"
      },
      {
        "choice": "常數項是 4",
        "truth": false,
        "reason": "常數項可以是任何數。"
      }
    ],
    "misconceptionTarget": "看到 x、y 兩個未知數就直接判定為二元一次，忽略 y²。",
    "prerequisiteCheck": "只需先備 等號與一次式基本概念，並使用本技能「二元一次方程式的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「指出非一次的具體原因」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需精確指出平方造成的違規。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "28aca66c5f51600dd3678ac4d5443b1941585de54b767e2b8352eb1c13fde507"
  },
  {
    "questionId": "u04-s001-v004",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "將 2(x+y)-x=5 化簡後，判斷其類型。",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "化簡後判斷方程式類型",
    "choices": [
      "是一元一次方程式",
      "不是方程式",
      "是二元二次方程式",
      "是二元一次方程式"
    ],
    "answerIndex": 3,
    "independentSolution": "展開得 2x+2y-x=5，即 x+2y=5，仍含 x、y 且皆一次。",
    "explanation": "先以分配律展開 2(x+y)-x=5，得到 2x+2y-x=5，再合併 x 的同類項為 x+2y=5。整理後有等號、含 x 與 y，兩者皆為一次，所以是二元一次方程式。括號只是運算結構，不會自行提高未知數次數。",
    "steps": [
      "展開括號，寫成 2x+2y-x=5。",
      "合併 x 項，化為 x+2y=5。",
      "檢查兩種未知數皆為一次，判定類型。"
    ],
    "optionAnalysis": [
      {
        "choice": "是一元一次方程式",
        "truth": false,
        "reason": "化簡後仍有 x、y。"
      },
      {
        "choice": "不是方程式",
        "truth": false,
        "reason": "仍有等號。"
      },
      {
        "choice": "是二元二次方程式",
        "truth": false,
        "reason": "沒有平方或乘積項。"
      },
      {
        "choice": "是二元一次方程式",
        "truth": true,
        "reason": "化簡為 x+2y=5，符合定義。"
      }
    ],
    "misconceptionTarget": "未先展開與合併同類項，只憑原式有括號就誤判類型。",
    "prerequisiteCheck": "只需先備 等號與一次式基本概念，並使用本技能「二元一次方程式的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「化簡後判斷方程式類型」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "多一步分配律與同類項整理。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "59dee34ca4ec3b7c6f59eed877052921857d09a652a427f3953369a535a170db"
  },
  {
    "questionId": "u04-s001-v005",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "方程式 x+y=x-y+4 化簡後為何？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "辨認化簡後未知數消失",
    "choices": [
      "2y=4",
      "2x=4",
      "x+2y=4",
      "0=4"
    ],
    "answerIndex": 0,
    "independentSolution": "兩邊同減 x 得 y=-y+4，再兩邊同加 y 得 2y=4。",
    "explanation": "等式 x+y=x-y+4 的兩邊同減 x，可得 y=-y+4；接著兩邊同加 y，得到 2y=4。x 項在合法的等量運算中抵消，所以化簡結果只剩未知數 y。回代 y=2 可再次核對原等式兩邊相等。",
    "steps": [
      "在等式兩邊同減 x，得到 y=-y+4。",
      "在等式兩邊同加 y，得到 y+y=4。",
      "合併同類項，寫成 2y=4。"
    ],
    "optionAnalysis": [
      {
        "choice": "2y=4",
        "truth": true,
        "reason": "等值整理後 x 相消，留下 2y=4。"
      },
      {
        "choice": "2x=4",
        "truth": false,
        "reason": "x 項其實會相消。"
      },
      {
        "choice": "x+2y=4",
        "truth": false,
        "reason": "未把右邊 x 移除。"
      },
      {
        "choice": "0=4",
        "truth": false,
        "reason": "y 項不會全部消失。"
      }
    ],
    "misconceptionTarget": "移項時只改某一邊或漏改符號，因而留下不應存在的 x 項。",
    "prerequisiteCheck": "只需先備 等號與一次式基本概念，並使用本技能「二元一次方程式的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「辨認化簡後未知數消失」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需正確整理左右均含未知數的式子。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "b7575c64488208e99c0730a2ce0b167c0cc5998e1cf55e7f6d0b2a85f40a1cac"
  },
  {
    "questionId": "u04-s001-v006",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "standard",
    "itemType": "mc",
    "prompt": "下列哪一式不是二元一次方程式，即使係數可為分數？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "區分合法分數係數與非線性分式",
    "choices": [
      "(1/2)x+3y=4",
      "x/y+2x=3",
      "0.3m-n=8",
      "-p+5q=0"
    ],
    "answerIndex": 1,
    "independentSolution": "x/y 中 y 位於分母，不能整理成兩未知數皆一次的 ax+by=c。",
    "explanation": "係數可以是整數、分數或小數，因此 (1/2)x+3y=4、0.3m-n=8 與 -p+5q=0 都可為二元一次方程式。x/y+2x=3 把未知數 y 放在分母，不能整理成兩未知數皆一次的形式。",
    "steps": [
      "先接受分數與小數都可作為係數。",
      "逐式檢查未知數是否只以一次項出現。",
      "找出 y 位於分母的 x/y+2x=3。"
    ],
    "optionAnalysis": [
      {
        "choice": "(1/2)x+3y=4",
        "truth": false,
        "reason": "分數只是 x 的係數。"
      },
      {
        "choice": "x/y+2x=3",
        "truth": true,
        "reason": "y 在分母使式子不是一次形式。"
      },
      {
        "choice": "0.3m-n=8",
        "truth": false,
        "reason": "小數係數不影響一次性。"
      },
      {
        "choice": "-p+5q=0",
        "truth": false,
        "reason": "負係數仍可。"
      }
    ],
    "misconceptionTarget": "把分數係數和未知數位於分母混為一談，看到分數線就排除。",
    "prerequisiteCheck": "只需先備 等號與一次式基本概念，並使用本技能「二元一次方程式的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「區分合法分數係數與非線性分式」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需要辨別分母是否含未知數。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "55b9e05375ade3cd9b29706acad62baa7fc3964121d18a10540adcb323685da5"
  },
  {
    "questionId": "u04-s001-v007",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "若 (k-2)x+3y=7 要實際含 x、y 兩元，k 不可等於多少？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "由參數判斷兩元是否消失",
    "choices": [
      "0",
      "3",
      "2",
      "-2"
    ],
    "answerIndex": 2,
    "independentSolution": "x 的係數 k-2 必須非 0；k-2=0 得 k=2。",
    "explanation": "要讓方程式實際包含 x，x 的係數 k-2 必須不為零；y 的係數三已確定不為零。當 k=2 時，k-2=0，x 項消失而只剩 3y=7，所以應排除 k=2。其餘選項都讓 x 係數保持非零。",
    "steps": [
      "辨認 x 的係數是 k-2。",
      "求出使 k-2=0 的數值為 k=2。",
      "確認此時 x 項消失，因此 k 不可等於二。"
    ],
    "optionAnalysis": [
      {
        "choice": "0",
        "truth": false,
        "reason": "k=0 時 x 係數為 -2。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "k=3 時 x 係數為 1。"
      },
      {
        "choice": "2",
        "truth": true,
        "reason": "k=2 時 x 項消失。"
      },
      {
        "choice": "-2",
        "truth": false,
        "reason": "k=-2 時 x 係數為 -4。"
      }
    ],
    "misconceptionTarget": "只看到原式寫有 x、y，沒有檢查參數是否會使 x 係數變成零。",
    "prerequisiteCheck": "只需先備 等號與一次式基本概念，並使用本技能「二元一次方程式的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「由參數判斷兩元是否消失」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需把定義轉成參數限制。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "0ecea71d1672d6f8c4ca757eaa0a501a72b6107013e36e82b9ef9ff8b7f18eb5"
  },
  {
    "questionId": "u04-s001-v008",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "式子 (x+y)(x-y)=5 展開後，為何不屬於二元一次方程式？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "辨認隱藏在乘積中的二次結構",
    "choices": [
      "展開後沒有等號",
      "未知數超過兩種",
      "常數 5 太大",
      "展開後含 x² 與 y²"
    ],
    "answerIndex": 3,
    "independentSolution": "乘法公式得 x²-y²=5，含二次項。",
    "explanation": "利用乘法公式展開 (x+y)(x-y)，結果是 x²-y²，因此原方程式成為 x²-y²=5。雖然每個括號內看似只有一次項，括號相乘後產生平方項，故不是二元一次方程式。",
    "steps": [
      "展開兩個括號的乘積。",
      "整理得 x²-y²=5。",
      "指出 x、y 的最高次數為二，因此排除一次類型。"
    ],
    "optionAnalysis": [
      {
        "choice": "展開後沒有等號",
        "truth": false,
        "reason": "等號仍存在。"
      },
      {
        "choice": "未知數超過兩種",
        "truth": false,
        "reason": "仍只有 x、y。"
      },
      {
        "choice": "常數 5 太大",
        "truth": false,
        "reason": "常數大小與次數無關。"
      },
      {
        "choice": "展開後含 x² 與 y²",
        "truth": true,
        "reason": "乘積展開產生二次項。"
      }
    ],
    "misconceptionTarget": "分別查看括號內都是一次項，卻沒有展開括號相乘後的平方項。",
    "prerequisiteCheck": "只需先備 等號與一次式基本概念，並使用本技能「二元一次方程式的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「辨認隱藏在乘積中的二次結構」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需先展開乘積再判次數。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "e69b2bb401ba7870a7fa978d6c7bfa9cd30f52b427efc4911edaebdb32b4de9f"
  },
  {
    "questionId": "u04-s001-v009",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "advanced",
    "itemType": "mc",
    "prompt": "已知 ax+by=6 是二元一次方程式，哪一組係數一定不符合「實際含兩元」？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "判斷一般形式的係數限制",
    "choices": [
      "a=0，b=5",
      "a=2，b=1",
      "a=-1，b=3",
      "a=1/2，b=-4"
    ],
    "answerIndex": 0,
    "independentSolution": "實際含 x、y 要求 a、b 皆非 0；a=0、b=5 只剩 5y=6。",
    "explanation": "依題目所採的「實際含兩元」判準，x 與 y 的係數都必須不為零。當 a=0、b=5 時，方程式化為 5y=6，x 項完全消失，只剩一個未知數，所以一定不符合。",
    "steps": [
      "把 a=0、b=5 代入一般式 ax+by=6。",
      "化簡為 5y=6，觀察 x 項已消失。",
      "依實際含 x、y 的要求判定這組不符合。"
    ],
    "optionAnalysis": [
      {
        "choice": "a=0，b=5",
        "truth": true,
        "reason": "a=0 使 x 項消失，只剩一元。"
      },
      {
        "choice": "a=2，b=1",
        "truth": false,
        "reason": "兩係數皆非 0，實際含 x、y。"
      },
      {
        "choice": "a=-1，b=3",
        "truth": false,
        "reason": "兩係數皆非 0。"
      },
      {
        "choice": "a=1/2，b=-4",
        "truth": false,
        "reason": "分數與負係數皆可。"
      }
    ],
    "misconceptionTarget": "誤以為一般式中寫了 ax，就算 a=0 仍然實際包含未知數 x。",
    "prerequisiteCheck": "只需先備 等號與一次式基本概念，並使用本技能「二元一次方程式的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「判斷一般形式的係數限制」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "需理解「實際含兩元」的鎖定判準。",
    "literacyContextNecessity": null,
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "cddc19405c0a473f187859cb84720ad706aa34eb58425ca64012e99aea04d0f8"
  },
  {
    "questionId": "u04-s001-v010",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "某社團以 x 表示成人數、y 表示學生數。「每位成人繳 120 元、每位學生繳 80 元，共收 4000 元」應用哪個二元一次方程式表示？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "把收費敘述轉成二元一次方程式",
    "choices": [
      "x+y=4000",
      "120x+80y=4000",
      "120+80=x+y",
      "120xy=4000"
    ],
    "answerIndex": 1,
    "independentSolution": "成人費用為 120x，學生費用為 80y，總收入相加為 4000。",
    "explanation": "成人每人一百二十元且有 x 人，成人費用是 120x；學生每人八十元且有 y 人，學生費用是 80y。兩類費用相加等於總額四千元，所以模型為 120x+80y=4000。",
    "steps": [
      "以單價乘人數，寫出成人費用 120x。",
      "寫出學生費用 80y。",
      "把兩類費用相加並令其等於 4000。"
    ],
    "optionAnalysis": [
      {
        "choice": "x+y=4000",
        "truth": false,
        "reason": "把人數總和誤當金額。"
      },
      {
        "choice": "120x+80y=4000",
        "truth": true,
        "reason": "兩類費用加總正好是 4000 元。"
      },
      {
        "choice": "120+80=x+y",
        "truth": false,
        "reason": "左右單位不相容。"
      },
      {
        "choice": "120xy=4000",
        "truth": false,
        "reason": "把兩類人數相乘。"
      }
    ],
    "misconceptionTarget": "把單價直接相加，或沒有讓成人、學生單價與各自人數正確配對。",
    "prerequisiteCheck": "只需先備 等號與一次式基本概念，並使用本技能「二元一次方程式的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "120 元/人×人與 80 元/人×人皆為元，左右單位一致。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「把收費敘述轉成二元一次方程式」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "收費語境不可刪除，因單價決定係數。",
    "literacyContextNecessity": "成人與學生的不同繳費標準是建立係數 120、80 的必要資訊。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "890f79fdc971f368cca6634b1797d8606d546fc75d9d91f216a2aa80d6095fff"
  },
  {
    "questionId": "u04-s001-v011",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "倉庫紀錄：「A 箱每箱 x 公斤、B 箱每箱 y 公斤；2 箱 A 與 3 箱 B 共 41 公斤。」哪個式子正確？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "由包裝紀錄建立重量方程式",
    "choices": [
      "x+y=41",
      "6xy=41",
      "2x+3y=41",
      "2x+3y"
    ],
    "answerIndex": 2,
    "independentSolution": "2 箱 A 重 2x，3 箱 B 重 3y，合計 41。",
    "explanation": "A 箱每箱重 x 公斤，兩箱的重量是 2x；B 箱每箱重 y 公斤，三箱的重量是 3y。兩批箱子的總重量為四十一公斤，因此應寫成 2x+3y=41。等式左右兩邊的單位都同為公斤。",
    "steps": [
      "用兩箱乘每箱重量，得到 A 箱總重 2x。",
      "用三箱乘每箱重量，得到 B 箱總重 3y。",
      "相加並對應總重，列出 2x+3y=41。"
    ],
    "optionAnalysis": [
      {
        "choice": "x+y=41",
        "truth": false,
        "reason": "漏掉箱數 2 與 3。"
      },
      {
        "choice": "6xy=41",
        "truth": false,
        "reason": "把總重量誤寫成乘積。"
      },
      {
        "choice": "2x+3y=41",
        "truth": true,
        "reason": "2x 與 3y 分別代表兩類箱子的總重量。"
      },
      {
        "choice": "2x+3y",
        "truth": false,
        "reason": "缺少等號與總重量。"
      }
    ],
    "misconceptionTarget": "忽略箱數只寫 x+y，或把兩類重量錯誤相乘成 xy。",
    "prerequisiteCheck": "只需先備 等號與一次式基本概念，並使用本技能「二元一次方程式的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "箱×公斤/箱=公斤，左右皆為公斤。",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「由包裝紀錄建立重量方程式」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "箱數資料直接決定係數，情境不可省略。",
    "literacyContextNecessity": "「2 箱與 3 箱」是係數來源，「41 公斤」是等號右側，均為必要資料。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "a5ed5145bb5c17c67f227ae25930031577ea5b2a0a1141fc86e61fd89d13eeae"
  },
  {
    "questionId": "u04-s001-v012",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "literacy",
    "itemType": "mc",
    "prompt": "一份試算表公式寫成 x+y=30，另一欄寫成 xy=200。若 x、y 是兩種商品數量，哪一欄不是二元一次方程式？",
    "givenConditions": [
      "依題幹所列數值、符號與關係"
    ],
    "target": "從資料公式辨認線性與非線性",
    "choices": [
      "x+y=30",
      "兩欄都是",
      "兩欄都不是",
      "xy=200"
    ],
    "answerIndex": 3,
    "independentSolution": "xy=200 含兩未知數相乘，總次數為 2；x+y=30 是一次。",
    "explanation": "x+y=30 的兩個未知數都只以一次項出現，符合二元一次方程式。xy=200 則含 x 與 y 的乘積，其總次數為二，商品數量的情境不會改變代數結構，所以第二欄不是。",
    "steps": [
      "檢查 x+y=30，確認兩項皆為一次。",
      "辨認 xy=200 含未知數相乘。",
      "依代數結構判定 xy=200 不是二元一次方程式。"
    ],
    "optionAnalysis": [
      {
        "choice": "x+y=30",
        "truth": false,
        "reason": "兩未知數皆為一次且相加。"
      },
      {
        "choice": "兩欄都是",
        "truth": false,
        "reason": "xy 含未知數乘積。"
      },
      {
        "choice": "兩欄都不是",
        "truth": false,
        "reason": "第一欄符合定義。"
      },
      {
        "choice": "xy=200",
        "truth": true,
        "reason": "未知數乘積 xy 不符合一次形式。"
      }
    ],
    "misconceptionTarget": "因為兩欄都描述商品數量，就忽略 xy 是乘積而把兩式視為同類。",
    "prerequisiteCheck": "只需先備 等號與一次式基本概念，並使用本技能「二元一次方程式的判斷」。",
    "estimatedTimeSec": 90,
    "unitCheck": "無單位或題幹單位一致",
    "roundingCheck": "所有數值皆為精確值；題目不需要四捨五入。",
    "ambiguityAudit": "所求量明確為「從資料公式辨認線性與非線性」；四個選項互異，且依獨立重算只有一項成立。",
    "boundaryAudit": "只使用本技能與先備技能；未使用矩陣、三元聯立或高中方法。",
    "difficultyReason": "公式用途不同，xy 的乘積結構是必要判斷點。",
    "literacyContextNecessity": "試算表兩欄的公式型態正是題目要比較的資訊，移除後無法判斷。",
    "figureId": null,
    "drawingSpecId": null,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "6b2fb4d13c92f191e7889588d7cc9750205fe8059211568f28d6d0cf66d1f32a"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u04-s001-cr001",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "standard",
    "itemType": "constructed-response",
    "prompt": "判斷下列各式是否為二元一次方程式，並逐式寫出理由：① 3x-2y=7；② x²+y=4；③ 2a+5b；④ m/n+n=1；⑤ 2(p+q)-p=6；⑥ x+y=x-y+4。",
    "requiredWork": [
      "每式先化簡再判斷。",
      "理由必須指出等號、未知數種類或次數。"
    ],
    "standardSolution": [
      "① 3x-2y=7 是二元一次方程式：具有等號，且 x、y 都只以一次項出現。② x²+y=4 不是，因為 x 的最高次數是二。",
      "③ 2a+5b 不是方程式，因為缺少等號。④ m/n+n=1 不是二元一次方程式，因為未知數 n 出現在分母。",
      "⑤ 2(p+q)-p=6 展開後為 p+2q=6，確實是二元一次方程式。⑥ x+y=x-y+4 化簡為 2y=4，實際只剩一元，因此不符合本單元判準。"
    ],
    "alternativeMethods": [
      "可將所有式子整理成 ax+by=c 再檢查兩係數是否非 0。"
    ],
    "reasoningSteps": [
      "逐式先確認是否有等號，再辨認實際保留的未知數種類。",
      "展開括號、合併同類項與消去等號兩邊的相同項後，再看整理後形式。",
      "檢查未知數是否皆為一次，且沒有平方、未知數乘積或未知數位於分母。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "六式分類與理由全部正確，且⑥說明化簡後一元。"
      },
      {
        "score": 2,
        "criteria": "至少五式正確，或六式分類正確但一處理由不完整。"
      },
      {
        "score": 1,
        "criteria": "至少三式分類正確並有一項具體理由。"
      },
      {
        "score": 0,
        "criteria": "少於三式正確或只寫「是/不是」且無可辨識理由。"
      }
    ],
    "partialCreditRules": [
      "分類與理由各佔判斷依據；⑥若未化簡最高 2 分。"
    ],
    "followThroughPolicy": "若前面化簡有單一符號錯誤，但後續依自己化簡結果判斷合理，可保留該式一半分數。",
    "unitNotationRules": "符號需使用 x²、xy、分母等清楚寫法；本題無單位。",
    "answerOnlyPolicy": "只列六個答案而無理由，最高 1 分。",
    "figureId": null,
    "drawingSpecId": null,
    "independentReview": {
      "derivedResult": "①是、②否、③否、④否、⑤是、⑥否。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "獨立逐式化簡，確認⑤仍含 p、q，⑥的 x 完全消去。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "4800f675ecb1f7723409d5fc2218bfbdc2f2b009b29ee0bf6c0d66236fbb66d6",
    "commonErrors": [
      "看到式中有兩個字母就判定為二元一次，沒有檢查等號與次數。",
      "把未知數位於分母誤當成一般分數係數，因而錯判第四式。",
      "未化簡第五、六式便依原本外觀判斷，忽略未知數可能合併或消失。"
    ]
  },
  {
    "questionId": "u04-s001-cr002",
    "unitId": "u04",
    "numericUnitId": 4,
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "difficulty": "advanced",
    "itemType": "constructed-response",
    "prompt": "方程式 (k-1)x+(k+2)y=6 要在本單元判準下「實際含 x、y 兩元且皆一次」，求 k 的限制，並解釋。",
    "requiredWork": [
      "分別檢查 x、y 係數不可為 0。",
      "答案用不等於條件表示。"
    ],
    "standardSolution": [
      "要實際包含 x，x 的係數 k-1 必須不為零，因此 k-1≠0，可得 k≠1。",
      "要實際包含 y，y 的係數 k+2 也必須不為零，因此 k+2≠0，可得 k≠-2。",
      "兩項限制須同時成立，所以答案是 k≠1 且 k≠-2；其他 k 值都使兩個未知數保留且次數為一。"
    ],
    "alternativeMethods": [
      "可分情況說明 k=1 時只剩 y，k=-2 時只剩 x，其餘均為二元一次。"
    ],
    "reasoningSteps": [
      "把「實際含 x、y 兩元」轉換成兩個未知數的係數皆不為零。",
      "分別解 k-1≠0 與 k+2≠0，得到兩個應排除的參數值。",
      "取兩項限制的交集，並代入邊界值確認各自會使一個未知數消失。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "正確得到並說明 k≠1、-2。"
      },
      {
        "score": 2,
        "criteria": "條件正確但只解釋其中一個係數，或有輕微記號缺失。"
      },
      {
        "score": 1,
        "criteria": "只排除其中一個值，且理由可辨認。"
      },
      {
        "score": 0,
        "criteria": "未把係數為 0 與未知數消失連結。"
      }
    ],
    "partialCreditRules": [
      "兩個排除值各為核心一分，完整解釋為第三分。"
    ],
    "followThroughPolicy": "若把 k+2=0 算成 k=2，但方法正確，最高 2 分。",
    "unitNotationRules": "k 無單位；須寫 k≠1、k≠-2，不可用含糊的“其他值”。",
    "answerOnlyPolicy": "只答兩個數未寫不等於，最高 2 分。",
    "figureId": null,
    "drawingSpecId": null,
    "independentReview": {
      "derivedResult": "k 可為任何實數，但不可等於 1 或 -2。",
      "ambiguityAudit": "題意給定量、變數與所求明確；沒有第二種會改變答案的合理解釋。",
      "boundaryAudit": "只使用本技能與已鎖定先備技能。",
      "decision": "pass",
      "reviewNote": "獨立檢驗 k=1、-2 兩邊界，分別使 x 或 y 項消失。",
      "reviewedAt": "2026-07-12"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "da65de997e5348d44f9b829bb91623386a2e4997c0f53a5cde449b467112a237",
    "commonErrors": [
      "只限制 k-1 不為零，忘記 y 的係數 k+2 也可能等於零。",
      "解 k+2≠0 時把排除值寫成正二，移項符號處理錯誤。",
      "以為 x、y 寫在原式中就一定存在，沒有檢查係數為零的情形。"
    ]
  }
];

export const DRAWING_SPECS = [];
