window.MATH_LECTURE_V2_U04 = [
  {
    "unitId": "u04",
    "topicId": "u04-system-basics",
    "skillId": "system-two-variable-equation-definition",
    "title": "二元一次方程式的判斷",
    "concept": "判斷二元一次方程式時，先數未知數個數是否為兩個，再檢查 x 與 y 是否都只出現一次、沒有相乘或平方，也不能把未知數寫在分母。化簡後若只剩一個未知數，就不是二元一次方程式",
    "formula": "ax + by = c（a、b 不全為 0）",
    "stepGuide": [
      "確認方程式中有兩個未知數",
      "檢查 x、y 是否各只有一次，無 xy 或 x²",
      "排除分母含未知數的分式型",
      "必要時先化簡再判斷"
    ],
    "examples": [
      {
        "question": "下列哪一個是二元一次方程式？",
        "explanation": "第一例：判斷時先確認未知數個數，再檢查是否只有一次項。2x + 3y = 7 兩個未知數且各一次，是最典型的二元一次方程式。"
      },
      {
        "question": "下列哪一個不是二元一次方程式？",
        "explanation": "第二例：x² + y = 1 的 x 是平方，最高次數超過 1，因此不是二元一次。其餘三個式子未知數各只出現一次，沒有 xy 或分母含未知數，都是二元一次方程式。"
      }
    ],
    "commonMistakes": [
      "看到兩個字母就當二元一次，忽略 xy 項",
      "把 x² 或 y² 誤當一次",
      "未化簡就判斷，其實只剩一個未知數"
    ],
    "quizLink": {
      "unitId": "u04",
      "skillId": "system-two-variable-equation-definition"
    }
  },
  {
    "unitId": "u04",
    "topicId": "u04-system-basics",
    "skillId": "system-ordered-pair-solution-check",
    "title": "有序數對與解的判斷",
    "concept": "檢查 (x,y) 是否為解，就是把第一個數代入 x、第二個數代入 y，分別算等號左、右是否相等。若題目給 (y,x) 順序，結果通常不同，不能把兩個數對調。代入時每一項的係數都要算進去",
    "formula": "代入 x=a、y=b，若左式=右式則 (a,b) 是解",
    "stepGuide": [
      "確認有序數對順序：第一個是 x、第二個是 y",
      "把數值代入方程式左邊",
      "計算右邊或比較原式兩側",
      "左右相等才是解"
    ],
    "examples": [
      {
        "question": "(2, 3) 是否為 x + y = 5 的解？",
        "explanation": "第一例：檢查解時把第一個數當 x、第二個當 y 代入。(2, 3) 是否為 x + y = 5 的解 的答案為 是，關鍵是算準左邊每一項，再與右邊常數比較是否相等。"
      },
      {
        "question": "(1, 4) 是否為 2x + y = 7 的解？",
        "explanation": "第二例：代 x=1、y=4 到 2x+y=7：左邊 2×1+4=6，右邊是 7，兩邊不相等，所以 (1,4) 不是這個方程式的解。檢查時一定要把第一個數當 x、第二個當 y，每一項係數都要乘進去。"
      }
    ],
    "commonMistakes": [
      "把 (3,2) 與 (2,3) 當相同",
      "只代入一個未知數",
      "算錯正負號導致誤判",
      "漏乘係數就判斷成立"
    ],
    "quizLink": {
      "unitId": "u04",
      "skillId": "system-ordered-pair-solution-check"
    }
  },
  {
    "unitId": "u04",
    "topicId": "u04-system-basics",
    "skillId": "system-solution-meaning",
    "title": "聯立方程式解的意義",
    "concept": "聯立解不能只求一式成立：必須代入兩個方程式都相等。若只滿足其中一式，那只是該直線上的點，不一定是交點。由解反推參數時，把解代入兩式應同時成立",
    "formula": "解 (x,y) 須同時滿足第一式與第二式",
    "stepGuide": [
      "把候選 (x,y) 代入第一式檢查",
      "再代入第二式檢查",
      "兩式都成立才是聯立解",
      "只成立一式則不是聯立解"
    ],
    "examples": [
      {
        "question": "聯立方程式 {x+y=5, x−y=1} 的解 (3,2) 表示？",
        "explanation": "第一例：聯立方程式的解要兩式都成立。聯立方程式 {x+y=5, x−y=1} 的解 (3,2) 表示 的答案是 同時滿足兩式，幾何上對應兩直線交點坐標，缺一式成立都不算聯立解。"
      },
      {
        "question": "(2, 1) 是否同時滿足 x+y=3 與 x−y=1？",
        "explanation": "第二例：聯立方程式的解要兩式都成立。(2, 1) 是否同時滿足 x+y=3 與 x−y=1 的答案是 是，幾何上對應兩直線交點坐標，缺一式成立都不算聯立解。"
      }
    ],
    "commonMistakes": [
      "只驗一個方程式",
      "把滿足第一式的點直接當解",
      "忽略無解或無限多解的型態"
    ],
    "quizLink": {
      "unitId": "u04",
      "skillId": "system-solution-meaning"
    }
  },
  {
    "unitId": "u04",
    "topicId": "u04-system-methods",
    "skillId": "system-substitution-method",
    "title": "代入消去法",
    "concept": "代入法適合某未知數已單獨在一邊或係數為 1 的題型。關鍵是整個式子代入，不可只代一部分；解出一個未知數後必須回代，不可只寫一半答案。括號要保留，回代後再化簡",
    "formula": "由 y=ax+b 代入另一式消去 y",
    "stepGuide": [
      "選係數簡單的一式表達 x 或 y",
      "把整個式子代入另一方程式",
      "解出剩下的未知數",
      "回代求另一未知數並檢查"
    ],
    "examples": [
      {
        "question": "解 {y = x + 1, 2x + y = 7}，代入第二式得？",
        "explanation": "第一例：代入法要把整式代入另一方程式，不可只代一部分。解 {y = x + 1, 2x + y = 7}，代入第二式得 算完得 2x + (x + 1) = 7，記得回代第二式驗算另一未知數。"
      },
      {
        "question": "解 {x = 2y, x + y = 9}，2y + y = 9，y = ?",
        "explanation": "第二例：解 {x = 2y, x + y = 9}，2y + y = 9，y = 。用代入消去整理後得 3。若誤以為 2，多半是代入順序對調或漏乘係數。4 也未滿足等式兩側相等。把每個未知數的係數分開計算，再與右邊比較，就不易搞混。"
      }
    ],
    "commonMistakes": [
      "只代一部分項",
      "解出 y 就停，沒回代求 x",
      "代入時括號處理錯誤"
    ],
    "quizLink": {
      "unitId": "u04",
      "skillId": "system-substitution-method"
    }
  },
  {
    "unitId": "u04",
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-method",
    "title": "加減消去法",
    "concept": "係數相同就相減、係數相反就相加，可消去 x 或 y。消去前若係數不同但成比例，需先放大；消出單未知數後一定要回代第二式求另一未知數，不能只寫一個答案",
    "formula": "兩式 ± 消去一未知數",
    "stepGuide": [
      "對齊 x、y 與常數項",
      "選擇消 x 或消 y",
      "係數相同相減、相反相加",
      "解出後回代求另一未知數"
    ],
    "examples": [
      {
        "question": "解 {x + y = 7, x − y = 3}，相加得 2x = 10，x = ?",
        "explanation": "第一例：解 {x + y = 7, x − y = 3}，相加得 2x = 10，x = 。加減消去後結果為 5。若誤以為 4，多半是代入順序對調或漏乘係數。3 也未滿足等式兩側相等。把每個未知數的係數分開計算，再與右邊比較，就不易搞混。"
      },
      {
        "question": "解 {2x + y = 8, x − y = 1}，相加消 y，x = ?",
        "explanation": "第二例：解 {2x + y = 8, x − y = 1}，相加消 y，x = 。加減消去後結果為 3。若誤以為 2，多半是代入順序對調或漏乘係數。4 也未滿足等式兩側相等。把每個未知數的係數分開計算，再與右邊比較，就不易搞混。"
      }
    ],
    "commonMistakes": [
      "該加卻減",
      "消去後忘記回代",
      "常數項未一起加減"
    ],
    "quizLink": {
      "unitId": "u04",
      "skillId": "system-elimination-method"
    }
  },
  {
    "unitId": "u04",
    "topicId": "u04-system-methods",
    "skillId": "system-elimination-scaling",
    "title": "係數放大後消去",
    "concept": "放大係數時，方程式兩邊每一項都要乘同一倍數，不能只乘含 x 的項。目標是讓 x 或 y 係數相等或互為相反數，才能用加減消去。消去後若出現 0=0 或 0=常數，要改判解的型態",
    "formula": "m×(式1) ± n×(式2) 消去未知數",
    "stepGuide": [
      "決定消 x 還是消 y",
      "計算兩式要乘的倍數",
      "整式兩邊同乘倍數",
      "加減消去後解出並回代"
    ],
    "examples": [
      {
        "question": "解 {2x + 3y = 12, 3x + 2y = 13}，第一式乘 3、第二式乘 2 可消去？",
        "explanation": "第一例：放大係數時整式兩邊每一項都要乘同一倍數。解 {2x + 3y = 12, 3x + 2y = 13}，第一式乘 3、第二式乘 2 可消去 的答案為 x，倍數選對才能順利消去。"
      },
      {
        "question": "解 {x + 2y = 7, 3x + 4y = 15}，第一式乘 3 再減第二式，x = ?",
        "explanation": "第二例：放大係數時整式兩邊每一項都要乘同一倍數。解 {x + 2y = 7, 3x + 4y = 15}，第一式乘 3 再減第二式，x =  的答案為 1，倍數選對才能順利消去。"
      }
    ],
    "commonMistakes": [
      "只乘某一項",
      "兩邊只乘一邊",
      "倍數算錯導致無法消去"
    ],
    "quizLink": {
      "unitId": "u04",
      "skillId": "system-elimination-scaling"
    }
  },
  {
    "unitId": "u04",
    "topicId": "u04-system-methods",
    "skillId": "system-special-cases",
    "title": "無解、唯一解、無限多解",
    "concept": "加減消去後若未知數全消去，只剩常數比較：0=0 代表兩式等價、無限多解；0=5 代表矛盾、無解。若仍有一未知數一次式，則有唯一解，再回代即可。幾何上平行無交點、重合有無限交點",
    "formula": "0=0 → 無限多解；0=k(k≠0) → 無解",
    "stepGuide": [
      "照常加減消去",
      "觀察消去後的式子",
      "0=0 判無限多解、0≠0 判無解",
      "有唯一未知數則解出並回代"
    ],
    "examples": [
      {
        "question": "消去後得 0 = 0，聯立方程式？",
        "explanation": "第一例：消去後若只剩 0=0 或 0=常數，要判斷解的型態。消去後得 0 = 0，聯立方程式 對應 無限多解，平行線無交點即無解，重合即無限多解。"
      },
      {
        "question": "消去後得 0 = 5，聯立方程式？",
        "explanation": "第二例：消去後若只剩 0=0 或 0=常數，要判斷解的型態。消去後得 0 = 5，聯立方程式 對應 無解，平行線無交點即無解，重合即無限多解。"
      }
    ],
    "commonMistakes": [
      "0=0 仍硬解 x",
      "0=5 說成唯一解",
      "未化簡就判斷型態"
    ],
    "quizLink": {
      "unitId": "u04",
      "skillId": "system-special-cases"
    }
  },
  {
    "unitId": "u04",
    "topicId": "u04-system-apps",
    "skillId": "system-word-setup-basic",
    "title": "情境列聯立方程式",
    "concept": "列聯立式前一定要說明 x、y 的意義。通常一條件列一式：例如總人數 x+y=40，總價 3x+2y=70。單位要一致，兩個條件要獨立，不可把兩個關係寫在同一式，否則無法解出唯一答案",
    "formula": "依題意列兩個獨立關係式",
    "stepGuide": [
      "設未知數並註明意義",
      "找第一個數量關係列式",
      "找第二個關係（總價、差額等）列式",
      "檢查單位與次數是否正確"
    ],
    "examples": [
      {
        "question": "蘋果 x 元、香蕉 y 元，3 蘋果 2 香蕉 70 元，列式？",
        "explanation": "第一例：應用題列式前先定義未知數代表的量。蘋果 x 元、香蕉 y 元，3 蘋果 2 香蕉 70 元，列式 應列 3x + 2y = 70，係數對應各物品的數量或倍數，常數對應總價或總量。"
      },
      {
        "question": "男生 x 人、女生 y 人，全班 40 人，列式？",
        "explanation": "第二例：應用題列式前先定義未知數代表的量。男生 x 人、女生 y 人，全班 40 人，列式 應列 x + y = 40，係數對應各物品的數量或倍數，常數對應總價或總量。"
      }
    ],
    "commonMistakes": [
      "沒說明 x、y 代表什麼",
      "兩個關係寫成同一式",
      "把總價式當人數式"
    ],
    "quizLink": {
      "unitId": "u04",
      "skillId": "system-word-setup-basic"
    }
  },
  {
    "unitId": "u04",
    "topicId": "u04-system-apps",
    "skillId": "system-chicken-rabbit-problem",
    "title": "雞兔同籠問題",
    "concept": "頭數只算一次，所以 x+y=總頭數。腳數要依動物種類：雞 2 腳、兔 4 腳，腳數式寫成 2x+4y=總腳數。解出後要檢查是否為非負整數，負數或半隻都不合理，這是應用題的基本要求",
    "formula": "x+y=頭數；2x+4y=腳數",
    "stepGuide": [
      "設 x 雞、y 兔",
      "列頭數式 x+y=總頭",
      "列腳數式 2x+4y=總腳",
      "解聯立並確認整數且非負"
    ],
    "examples": [
      {
        "question": "雞兔共 10 隻、腳 28 隻，設雞 x 兔 y，頭數式？",
        "explanation": "第一例：雞兔共 10 隻、腳 28 隻，設雞 x 兔 y，頭數式。答案為 x + y = 10。若誤以為 2x + 4y = 10，多半是代入順序對調或漏乘係數。x + y = 28 也未滿足等式兩側相等。把每個未知數的係數分開計算，再與右邊比較，就不易搞混。"
      },
      {
        "question": "雞兔共 10 隻、腳 28 隻，腳數式？",
        "explanation": "第二例：雞兔共 10 隻、腳 28 隻，腳數式。答案為 2x + 4y = 28。若誤以為 x + y = 28，多半是代入順序對調或漏乘係數。4x + 2y = 28 也未滿足等式兩側相等。把每個未知數的係數分開計算，再與右邊比較，就不易搞混。"
      }
    ],
    "commonMistakes": [
      "腳數式係數都寫 2",
      "頭數與腳數混淆",
      "解出負數仍當答案"
    ],
    "quizLink": {
      "unitId": "u04",
      "skillId": "system-chicken-rabbit-problem"
    }
  },
  {
    "unitId": "u04",
    "topicId": "u04-system-apps",
    "skillId": "system-ticket-price-problem",
    "title": "票價問題",
    "concept": "票價問題常見兩條件：各票種張數加總、各票種金額加總。先設 x 為成人票價、y 為學生票價（或反過來但需一致），再依購買組合列兩式，張數要當係數乘在票價上",
    "formula": "px+qy=總價；必要時 x+y=總張",
    "stepGuide": [
      "設票價未知數並標明票種",
      "依張數組合列總價式",
      "依第二組購買列另一總價式",
      "解聯立求各票價"
    ],
    "examples": [
      {
        "question": "成人 x 元、學生 y 元，3 成人 2 學生 700 元，列式？",
        "explanation": "第一例：票價題分張數加總與金額加總兩條關係。成人 x 元、學生 y 元，3 成人 2 學生 700 元，列式 解得 3x + 2y = 700，列式時張數要當係數乘在票價上。"
      },
      {
        "question": "成人 2 張、學生 5 張 650 元，列式？",
        "explanation": "第二例：票價題分張數加總與金額加總兩條關係。成人 2 張、學生 5 張 650 元，列式 解得 2x + 5y = 650，列式時張數要當係數乘在票價上。"
      }
    ],
    "commonMistakes": [
      "張數與金額混在同一式",
      "係數對調",
      "差價正負寫反"
    ],
    "quizLink": {
      "unitId": "u04",
      "skillId": "system-ticket-price-problem"
    }
  },
  {
    "unitId": "u04",
    "topicId": "u04-system-apps",
    "skillId": "system-quantity-price-problem",
    "title": "數量與總價問題",
    "concept": "數量與總價問題常同時給兩種購買組合。每一組合各列一條總價式，未知數是單價；件數已知則直接當係數。兩式必須來自不同組合才能解出唯一單價",
    "formula": "單價×數量相加=總價",
    "stepGuide": [
      "設兩商品單價 x、y",
      "依第一組購買列總價式",
      "依第二組購買列第二式",
      "解出單價並檢查合理性"
    ],
    "examples": [
      {
        "question": "蘋果 x 元/個、橘子 y 元/個，4 蘋果 3 橘子 38 元，列式？",
        "explanation": "第一例：數量總價題每組購買各列一條總價式。蘋果 x 元/個、橘子 y 元/個，4 蘋果 3 橘子 38 元，列式 的答案為 4x + 3y = 38，兩式需來自不同購買組合才能解出單價。"
      },
      {
        "question": "共 10 個、60 元，x + y = 10 且 3x + 5y = 60，y = ?",
        "explanation": "第二例：數量總價題每組購買各列一條總價式。共 10 個、60 元，x + y = 10 且 3x + 5y = 60，y =  的答案為 6，兩式需來自不同購買組合才能解出單價。"
      }
    ],
    "commonMistakes": [
      "件數當單價",
      "兩式列成相同組合",
      "總價係數加錯"
    ],
    "quizLink": {
      "unitId": "u04",
      "skillId": "system-quantity-price-problem"
    }
  },
  {
    "unitId": "u04",
    "topicId": "u04-system-apps",
    "skillId": "system-rate-problem",
    "title": "速率與行程問題",
    "concept": "行程問題先統一單位（km/h 配 h）。分段列 2x+3y=總距 這類式子時，x、y 是各段速率，係數是時間。相向時速率相加，同向追及時相減，每段路程都要用 vt 計算後再加總才會正確",
    "formula": "s = vt；總路程=各段路程和",
    "stepGuide": [
      "設速率或時間未知數",
      "統一距離與時間單位",
      "依各段列 s=vt 並加總",
      "解聯立求未知速率或時間"
    ],
    "examples": [
      {
        "question": "x km/h 走 2 h、y km/h 走 3 h，總 19 km，列式？",
        "explanation": "第一例：x km/h 走 2 h、y km/h 走 3 h，總 19 km，列式。答案為 2x + 3y = 19。若誤以為 x + y = 19，多半是代入順序對調或漏乘係數。5(x + y) = 19 也未滿足等式兩側相等。把每個未知數的係數分開計算，再與右邊比較，就不易搞混。"
      },
      {
        "question": "甲 4、乙 6 km/h 同向 2 h，路程差 4 km，列式？",
        "explanation": "第二例：行程問題先確認是相加還是相減。甲 4、乙 6 km/h 同向 2 h，路程差 4 km，列式 解得 (6 − 4) × 2 = 4，記得每段路程都要用速率乘對應時間。"
      }
    ],
    "commonMistakes": [
      "時間單位未統一",
      "相向卻用減法",
      "漏乘時間"
    ],
    "quizLink": {
      "unitId": "u04",
      "skillId": "system-rate-problem"
    }
  },
  {
    "unitId": "u04",
    "topicId": "u04-system-apps",
    "skillId": "system-mixture-basic",
    "title": "基礎混合問題",
    "concept": "國中混合題以總量守恆與溶質守恆（或總價守恆）列兩式。濃度要化成同一基準：30% 的 200 g 含溶質 0.3×200。只做會考基本二元一次，不做高中交叉法或過度複雜的推算",
    "formula": "x+y=總量；c1x+c2y=混合後溶質",
    "stepGuide": [
      "設兩來源量 x、y",
      "列總量式 x+y=混合量",
      "列溶質或總價守恆式",
      "解出並檢查非負"
    ],
    "examples": [
      {
        "question": "40% 糖水 x g、20% 糖水 y g，混合 300 g 得 30%，x = ?",
        "explanation": "第一例：40% 糖水 x g、20% 糖水 y g，混合 300 g 得 30%，x = 。結果為 150 g。若誤以為 100 g，多半是代入順序對調或漏乘係數。200 g 也未滿足等式兩側相等。把每個未知數的係數分開計算，再與右邊比較，就不易搞混。"
      },
      {
        "question": "5% 200 g 與 15% 混合得 10% 共 400 g，需 15% 加？",
        "explanation": "第二例：5% 200 g 與 15% 混合得 10% 共 400 g，需 15% 加。結果為 150 g。若誤以為 100 g，多半是代入順序對調或漏乘係數。200 g 也未滿足等式兩側相等。把每個未知數的係數分開計算，再與右邊比較，就不易搞混。"
      }
    ],
    "commonMistakes": [
      "濃度未乘溶液量",
      "只列總量不列溶質",
      "百分率未化小數"
    ],
    "quizLink": {
      "unitId": "u04",
      "skillId": "system-mixture-basic"
    }
  },
  {
    "unitId": "u04",
    "topicId": "u04-system-apps",
    "skillId": "system-literacy-context",
    "title": "聯立方程式素養題",
    "concept": "素養題文字較長，但核心仍是設未知數、找兩條獨立關係。表格資料要對應正確列與欄，活動費用、採購、租車等情境都可能是兩組未知係數的線性關係",
    "formula": "依情境列兩式再解聯立",
    "stepGuide": [
      "讀懂情境並設 x、y",
      "從表格或敘述找第一關係",
      "找第二組獨立資料列第二式",
      "解聯立並回應題意"
    ],
    "examples": [
      {
        "question": "葷 x 元、素 y 元，20 葷 15 素 1150 元，25 葷 10 素 1250 元，x = ?",
        "explanation": "第一例：素養題核心仍是兩條獨立線性關係。葷 x 元、素 y 元，20 葷 15 素 1150 元，25 葷 10 素 1250 元，x =  解得 50，答案要對應題意的單位與情境。"
      },
      {
        "question": "租車前 2 h x 元、之後 y 元/h，3 h 150 元、5 h 230 元，x = ?",
        "explanation": "第二例：租車前 2 h x 元、之後 y 元/h，3 h 150 元、5 h 230 元，x = 。解聯立得 70。若誤以為 60，多半是代入順序對調或漏乘係數。80 也未滿足等式兩側相等。把每個未知數的係數分開計算，再與右邊比較，就不易搞混。"
      }
    ],
    "commonMistakes": [
      "只讀一半表格",
      "兩式其實相同",
      "答案未對應題意單位"
    ],
    "quizLink": {
      "unitId": "u04",
      "skillId": "system-literacy-context"
    }
  }
];
