window.MATH_LECTURE_V2_U05 = [
  {
    "unitId": "u05",
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-point-reading",
    "title": "坐標讀法與點的位置",
    "concept": "平面直角坐標系用有序數對 (x, y) 表示點的位置：x 描述左右（正向右、負向左），y 描述上下（正向上、負向下）。讀坐標時一定先 x 後 y，不能把 (3, 5) 與 (5, 3) 看成同一點。會考題常以文字描述「向右幾單位、向上幾單位」，要先把方向轉成正負號再寫成坐標。",
    "formula": "坐標 (x, y)：x 管左右，y 管上下",
    "stepGuide": [
      "先確認 x 軸、y 軸正方向（通常向右、向上）。",
      "讀題把「左右」換成 x、「上下」換成 y。",
      "正方向用正數，反方向用負數。",
      "先寫 x 再寫 y，組成 (x, y)。",
      "可用原點移動描述自我檢查。"
    ],
    "examples": [
      {
        "question": "點 (2, -3) 在哪裡？",
        "explanation": "x = 2 表示在原點右方 2 個單位；y = -3 表示在 x 軸下方 3 個單位。描述位置時用「右 2、下 3」最清楚，不必硬說象限。練習時先方向、後數字，寫成有序數對。"
      },
      {
        "question": "向左 5、向上 1 的坐標？",
        "explanation": "向左 5 使 x = -5；向上 1 使 y = 1，所以坐標是 (-5, 1)。寫成 (5, 1) 是忘了左方要取負 x。練習時先方向、後數字，寫成有序數對。讀坐標時先看 x 正負對應左右，再看 y 正負對應上下。"
      }
    ],
    "commonMistakes": [
      "把 (a, b) 寫成 (b, a)",
      "向下仍寫 y 為正",
      "x = 0 仍說在象限內",
      "只看數字大小不看正負"
    ],
    "quizLink": {
      "unitId": "u05",
      "skillId": "coordinate-point-reading"
    }
  },
  {
    "unitId": "u05",
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-quadrant",
    "title": "象限判斷",
    "concept": "坐標平面被 x 軸、y 軸分成四個象限：第一象限 (x>0, y>0) 右上；第二象限 (x<0, y>0) 左上；第三象限 (x<0, y<0) 左下；第四象限 (x>0, y<0) 右下。判斷時分別看 x、y 正負，與數字大小無關。在 x 軸、y 軸或原點上的點不屬於任何象限，這是常見陷阱。 記法：第一象限正正、第二負正、第三負負、第四正負；在坐標軸上的點不屬任何象限。",
    "formula": "第一 (+,+)；第二 (-,+)；第三 (-,-)；第四 (+,-)",
    "stepGuide": [
      "分別讀 x、y 的正負。",
      "對照四象限符號表。",
      "x=0 或 y=0 時改判在軸上。",
      "不要用絕對值大小判斷。",
      "畫原點與四區域輔助記憶。"
    ],
    "examples": [
      {
        "question": "(-3, -2) 在第幾象限？",
        "explanation": "x = -3 < 0、y = -2 < 0，左下方為第三象限。判斷象限只需正負，-3 與 -2 誰的絕對值大不影響結果。練習時先方向、後數字，寫成有序數對。"
      },
      {
        "question": "(4, 0) 在第幾象限？",
        "explanation": "y = 0 表示點在 x 軸上，不在任何象限內。即使 x = 4 > 0，也不能因為 x 正就歸第一或第四象限。練習時先方向、後數字，寫成有序數對。"
      }
    ],
    "commonMistakes": [
      "x=0 仍歸入象限",
      "只看 y 正負",
      "用數字大小判斷",
      "第三、四象限符號搞混"
    ],
    "quizLink": {
      "unitId": "u05",
      "skillId": "coordinate-quadrant"
    }
  },
  {
    "unitId": "u05",
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-axis-points",
    "title": "坐標軸上的點",
    "concept": "在 x 軸上的點滿足 y = 0，在 y 軸上的點滿足 x = 0，原點 (0, 0) 是兩軸交點。這些點都不屬於任何象限，會考常設陷阱讓學生看到 x 或 y 為正就硬歸象限。判斷時先看哪個坐標為 0，再描述在正半軸或負半軸。 原點兩坐標都是零；到 x 軸距離是 y 的絕對值，到 y 軸距離是 x 的絕對值。",
    "formula": "x 軸：y=0；y 軸：x=0；原點：(0,0)",
    "stepGuide": [
      "先看 x 是否為 0 → y 軸。",
      "再看 y 是否為 0 → x 軸。",
      "兩者皆 0 → 原點。",
      "軸上點不屬於象限。",
      "正負半軸看非零坐標的正負。"
    ],
    "examples": [
      {
        "question": "(-2, 0) 在哪？",
        "explanation": "y = 0 表示在 x 軸上，x = -2 < 0 所以在 x 軸負半軸。這個點不在第二或第三象限，因為 y 不是正或負而是 0。練習時先方向、後數字，寫成有序數對。"
      },
      {
        "question": "(0, 3) 在第幾象限？",
        "explanation": "x = 0 表示在 y 軸上，不屬於任何象限。即使 y = 3 > 0，也不能因為 y 正就歸第一象限。練習時先方向、後數字，寫成有序數對。"
      }
    ],
    "commonMistakes": [
      "x=0 說在 x 軸",
      "軸上點歸入象限",
      "原點寫 (1,0)",
      "距原點距離放錯軸"
    ],
    "quizLink": {
      "unitId": "u05",
      "skillId": "coordinate-axis-points"
    }
  },
  {
    "unitId": "u05",
    "topicId": "u05-coordinate-basics",
    "skillId": "coordinate-plot-description",
    "title": "描點與對稱",
    "concept": "描點時先沿 x 軸方向移動到對應 x，再沿 y 方向移動到對應 y。對稱關係：關於 x 軸對稱則 y 變號；關於 y 軸對稱則 x 變號；關於原點對稱則 x、y 都變號。到坐標軸的距離等於該坐標的絕對值。會考常以文字描述對稱或距離，要先把條件翻譯成坐標正負。",
    "formula": "x 軸對稱 (a,b)→(a,-b)；y 軸對稱 (a,b)→(-a,b)；原點對稱 (a,b)→(-a,-b)",
    "stepGuide": [
      "描點：先 x 後 y。",
      "對稱：判斷對哪條軸或原點。",
      "決定哪個坐標變號。",
      "到 x 軸距離 = |y|。",
      "到 y 軸距離 = |x|。"
    ],
    "examples": [
      {
        "question": "(3, -2) 關於 y 軸對稱點？",
        "explanation": "y 軸對稱 x 變號、y 不變，(3, -2) → (-3, -2)。常錯是把 y 也變號變成 (-3, 2)，那是先 y 軸再 x 軸的組合而非單一 y 軸對稱。練習時先方向、後數字，寫成有序數對。"
      },
      {
        "question": "到 x 軸距離 4 的點 y 坐標？",
        "explanation": "到 x 軸距離為 |y|，若距離 4 則 y = 4 或 y = -4。只寫 y = 4 漏掉下方另一組解。練習時先方向、後數字，寫成有序數對。比較兩點時先看 x 是否相反、再看 y 是否相反。"
      }
    ],
    "commonMistakes": [
      "描點先 y 後 x",
      "原點對稱只變一軸",
      "y 軸對稱 y 也變號",
      "距離只取正半軸"
    ],
    "quizLink": {
      "unitId": "u05",
      "skillId": "coordinate-plot-description"
    }
  },
  {
    "unitId": "u05",
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-translation",
    "title": "坐標平移",
    "concept": "平移只改變位置不改變形狀：向右 a 則 x 加 a，向左 a 則 x 減 a；向上 b 則 y 加 b，向下 b 則 y 減 b。水平平移只動 x，垂直平移只動 y。連續平移可合併成一次等效平移。已知終點求原點時要做逆平移，方向與正平移相反。 連續平移可把 x、y 的變化分別合併；反推原點時方向與平移相反。",
    "formula": "右移 x+a；左移 x-a；上移 y+b；下移 y-b",
    "stepGuide": [
      "判斷水平或垂直。",
      "水平改 x，垂直改 y。",
      "正方向用加，反方向用減。",
      "連續平移合併代數和。",
      "逆問題用減去平移量。"
    ],
    "examples": [
      {
        "question": "(2, 5) 左 2 下 3？",
        "explanation": "左 2：x 變 0；下 3：y 變 2，可得 (0, 2)。向下是 y 減 3 不是加 3，5 - 3 = 2。練習時先方向、後數字，寫成有序數對。連續平移可把 x、y 變化分別合併。"
      },
      {
        "question": "平移後 (4,1)→(1,1)？",
        "explanation": "y 不變、x 由 4 變 1，差 -3，向左 3 個單位。不是向下 3，因為 y 沒有改變。練習時先方向、後數字，寫成有序數對。連續平移可把 x、y 變化分別合併。"
      }
    ],
    "commonMistakes": [
      "左移 x 加 a",
      "下移 y 加 b",
      "逆平移加減反",
      "平移改變 x、y 都動"
    ],
    "quizLink": {
      "unitId": "u05",
      "skillId": "coordinate-translation"
    }
  },
  {
    "unitId": "u05",
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-horizontal-vertical-distance",
    "title": "水平與鉛直距離",
    "concept": "國中坐標距離分兩種：同一水平線（y 相同）的兩點，距離為 x 坐標差的絕對值；同一鉛直線（x 相同）的兩點，距離為 y 坐標差的絕對值。距離恆非負。若兩點既不同 x 也不同 y，不能直接把 x 差或 y 差當距離，會考此單元不要求斜線根號公式。",
    "formula": "水平：|x2-x1|（y 相同）；鉛直：|y2-y1|（x 相同）",
    "stepGuide": [
      "先判 y 是否相同 → 水平。",
      "或判 x 是否相同 → 鉛直。",
      "用絕對值相減。",
      "距離非負。",
      "不同 x、y 時不能直接用。"
    ],
    "examples": [
      {
        "question": "(3,1) 與 (3,8) 距離？",
        "explanation": "x 相同，鉛直距離 |8-1| = 7。不是 |3-3|，因為 x 差為 0 不能代表鉛直距離以外的斜距。練習時先方向、後數字，寫成有序數對。"
      },
      {
        "question": "(-2,5) 與 (4,5) 距離？",
        "explanation": "y 相同，水平距離 |4-(-2)| = 6。若寫 4-2=2 就漏了 -2 的負號。練習時先方向、後數字，寫成有序數對。水平距離用 x 坐標差，垂直距離用 y 坐標差。"
      }
    ],
    "commonMistakes": [
      "距離為負",
      "任意兩點用 x 差",
      "含負坐標不算絕對值",
      "斜線硬用 x 差"
    ],
    "quizLink": {
      "unitId": "u05",
      "skillId": "coordinate-horizontal-vertical-distance"
    }
  },
  {
    "unitId": "u05",
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-rectangle-area",
    "title": "坐標平面上的長方形面積",
    "concept": "邊平行坐標軸的長方形，可用頂點坐標求寬高：水平邊長為 x 坐標差的絕對值，鉛直邊長為 y 坐標差的絕對值，面積 = 寬 × 高。先確認四點確實圍成長方形（兩組平行邊），再分別算寬高，不要把坐標值直接相乘。",
    "formula": "面積 = |x2-x1| × |y2-y1|",
    "stepGuide": [
      "確認邊平行坐標軸。",
      "算水平寬 |x 差|。",
      "算鉛直高 |y 差|。",
      "寬×高得面積。",
      "含負坐標用絕對值。"
    ],
    "examples": [
      {
        "question": "(0,0)(3,0)(3,4)(0,4) 面積？",
        "explanation": "寬 3、高 4，面積 12。不要算成 3+4=7，那是半周長概念不是面積。練習時先方向、後數字，寫成有序數對。寬高取坐標差的絕對值，面積是寬乘高。"
      },
      {
        "question": "x 從 -2 到 1，y 從 0 到 3？",
        "explanation": "寬 |1-(-2)|=3，高 3，面積 9。x 含負數時寬仍用絕對值差。練習時先方向、後數字，寫成有序數對。寬高取坐標差的絕對值，面積是寬乘高。"
      }
    ],
    "commonMistakes": [
      "面積用周長",
      "寬高相加",
      "坐標值直接乘",
      "負坐標不算絕對值"
    ],
    "quizLink": {
      "unitId": "u05",
      "skillId": "coordinate-rectangle-area"
    }
  },
  {
    "unitId": "u05",
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-linear-equation-graph",
    "title": "二元一次方程式圖形",
    "concept": "二元一次方程式 ax+by=c 的圖形是直線。描點常用截距法：令 x=0 得 y 截距，令 y=0 得 x 截距。y=常數 是平行 x 軸的直線，x=常數 是平行 y 軸的直線。x 的係數 k 表示 x 每增 1 時 y 的變化量，k>0 向右上，k<0 向右下。 y 等於常數是水平線，x 等於常數是垂直線；截距法可快速描出直線。",
    "formula": "ax + by = c → 直線；y = 常數 → 水平線；x = 常數 → 垂直線",
    "stepGuide": [
      "確認是一次方程式。",
      "令 x=0 求 y 截距。",
      "令 y=0 求 x 截距。",
      "兩點連線。",
      "判平行 y 軸：x=常數。"
    ],
    "examples": [
      {
        "question": "x+y=5 的兩截距？",
        "explanation": "x=0 得 y=5；y=0 得 x=5。兩截距分別是 (0,5) 與 (5,0)，不要寫成截距都是 5 而忽略在哪條軸。練習時先方向、後數字，寫成有序數對。代入 x=0 或 y=0 可求截距。"
      },
      {
        "question": "y=-x 過原點嗎？",
        "explanation": "x=0 時 y=0，帶入成立，過原點。係數 -1 只表x 的係數，不影響是否過原點。練習時先方向、後數字，寫成有序數對。代入 x=0 或 y=0 可求截距。"
      }
    ],
    "commonMistakes": [
      "一次式圖形非直線",
      "x/y 截距搞混",
      "y=常數平行 y 軸",
      "x 的係數正負看反"
    ],
    "quizLink": {
      "unitId": "u05",
      "skillId": "coordinate-linear-equation-graph"
    }
  },
  {
    "unitId": "u05",
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-point-on-line",
    "title": "點在直線上的判斷",
    "concept": "要判斷點 (x₀, y₀) 是否在直線 ax+by=c 上，把 x₀、y₀ 帶入方程式，若左邊等於右邊則在線上，否則不在。已知 x 求 y 或已知 y 求 x 也是同一原理。會考常給參數 a、b、k，先帶入再解一次方程式。 帶入時 x、y 順序不可對調；同一條直線上可有無限多組解。",
    "formula": "點 (x₀,y₀) 在線上 ⟺ 帶入後等式成立",
    "stepGuide": [
      "讀點坐標。",
      "帶入方程式左邊。",
      "計算是否等於右邊。",
      "相等 → 在線上。",
      "不等 → 不在。"
    ],
    "examples": [
      {
        "question": "(2,1) 在 x-y=1 上嗎？",
        "explanation": "2-1=1 成立，所以在線上。若只檢查 x=2 就下結論，可能忽略 y 也要符合。練習時先方向、後數字，寫成有序數對。把 x、y 代入方程式，看等式是否成立。"
      },
      {
        "question": "(0,k) 在 y=2x+3 上，k=?",
        "explanation": "x=0 時 y=3，所以 k=3。不要寫 k=0 因為 x 為 0。練習時先方向、後數字，寫成有序數對。把 x、y 代入方程式，看等式是否成立。把 x、y 代入方程式，看等式是否成立。"
      }
    ],
    "commonMistakes": [
      "只帶 x 不帶 y",
      "符號運算錯",
      "未驗證就猜",
      "參數與坐標混淆"
    ],
    "quizLink": {
      "unitId": "u05",
      "skillId": "coordinate-point-on-line"
    }
  },
  {
    "unitId": "u05",
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-intercepts",
    "title": "截距值與截距點",
    "concept": "x 截距是直線與 x 軸交點的 x 坐標數值（令 y=0 求 x）；y 截距是與 y 軸交點的 y 坐標數值（令 x=0 求 y）。截距「值」是一個數；截距「點」是 (x,0) 或 (0,y) 的坐標。會考常混問截距值或交點坐標，要先讀清題目。 問截距值答數字，問截距點才寫成與坐標軸相交的坐標。",
    "formula": "x 截距：y=0 求 x；y 截距：x=0 求 y",
    "stepGuide": [
      "讀清要值還是要坐標。",
      "x 截距令 y=0。",
      "y 截距令 x=0。",
      "值是單一數字。",
      "點寫成 (x,0) 或 (0,y)。"
    ],
    "examples": [
      {
        "question": "y=2x+4 的 y 截距值？",
        "explanation": "x=0 時 y=4，截距值是 4 不是 (0,4)。若題目問交點坐標才寫 (0,4)。練習時先方向、後數字，寫成有序數對。截距值是數字，截距點才寫成坐標。"
      },
      {
        "question": "x+y=6 的 x 截距點？",
        "explanation": "y=0 得 x=6，截距點 (6,0)。截距值是 6，不要答 (6,0) 當截距值。練習時先方向、後數字，寫成有序數對。截距值是數字，截距點才寫成坐標。"
      }
    ],
    "commonMistakes": [
      "截距值寫坐標",
      "x/y 截距搞混",
      "常數項當截距",
      "過原點截距非 0 誤判"
    ],
    "quizLink": {
      "unitId": "u05",
      "skillId": "coordinate-intercepts"
    }
  },
  {
    "unitId": "u05",
    "topicId": "u05-linear-graph",
    "skillId": "coordinate-line-intersection",
    "title": "兩直線交點",
    "concept": "兩直線交點坐標即聯立方程式的解。x 的係數相同且截距不同 → 平行，無交點；兩式完全相同 → 重合，無限多交點；x 的係數不同 → 唯一交點。水平線 y=常數 與鉛直線 x=常數 的交點為 (x常數, y常數)。 驗證交點必須同時代入兩條方程式；平行線沒有交點。",
    "formula": "交點 = 聯立解；平行：x 係數同且常數異",
    "stepGuide": [
      "化簡兩方程式。",
      "比x 的係數判平行或重合。",
      "非平行則聯立。",
      "消去一未知數。",
      "回代求交點。"
    ],
    "examples": [
      {
        "question": "y=x 與 y=-x+4 交點？",
        "explanation": "x=-x+4，2x=4，x=2，y=2，交點 (2,2)。不要只算 x 就把 2 當交點坐標。練習時先方向、後數字，寫成有序數對。交點坐標要同時滿足兩條方程式。"
      },
      {
        "question": "y=2x 與 y=2x+1？",
        "explanation": "x 的係數同、截距異，平行無交點。不要硬解聯立得矛盾就說交於原點。練習時先方向、後數字，寫成有序數對。"
      }
    ],
    "commonMistakes": [
      "平行仍硬解",
      "重合說無交",
      "交點 x y 寫反",
      "只驗一條線"
    ],
    "quizLink": {
      "unitId": "u05",
      "skillId": "coordinate-line-intersection"
    }
  },
  {
    "unitId": "u05",
    "topicId": "u05-coordinate-literacy",
    "skillId": "coordinate-literacy-context",
    "title": "坐標素養應用",
    "concept": "坐標素養題把真實情境對應到坐標平面：地圖方向、路程、費用、方案比較都可寫成坐標或 y=kx+b。先建立原點與正方向，再把資料轉成點或直線方程式，最後用截距、交點、水平鉛直距離解題。國中不要求斜線畢氏距離。",
    "formula": "情境 → 原點與軸 → 坐標或一次式 y=ax+b",
    "stepGuide": [
      "讀清原點與正方向。",
      "把位置轉成 (x,y)。",
      "費用、行程轉成一次式。",
      "用截距、交點、距離解題。",
      "確認問方向還是距離。"
    ],
    "examples": [
      {
        "question": "起跳 70 元每公里 15 元？",
        "explanation": "y=15x+70。70 是起跳常數項，15 是 x 係數，不要寫 y=70x+15。練習時先方向、後數字，寫成有序數對。情境題先確認原點與 x、y 正向。情境題先確認原點與 x、y 正向。"
      },
      {
        "question": "(0,0) 與 (0,5) 同街距？",
        "explanation": "x 相同，鉛直距 5，不是斜線距離。兩點在同一條平行 y 軸的線上。練習時先方向、後數字，寫成有序數對。情境題先確認原點與 x、y 正向。"
      }
    ],
    "commonMistakes": [
      "方向題用畢氏",
      "常數項意義搞混",
      "不等式方向反",
      "水平距用斜線"
    ],
    "quizLink": {
      "unitId": "u05",
      "skillId": "coordinate-literacy-context"
    }
  }
];
