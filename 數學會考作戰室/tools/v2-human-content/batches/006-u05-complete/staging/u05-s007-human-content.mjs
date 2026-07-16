// SERIALIZATION OF REVIEWED CHATGPT HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const CONTENT_AUTHORITY = "CHATGPT_HUMAN_AUTHORED_R1";
export const LECTURE = {
  "lectureId": "u05-s007-lecture-r1",
  "unitId": "u05",
  "numericUnitId": 5,
  "topicId": "u05-coordinate-ops",
  "skillId": "coordinate-rectangle-area",
  "lockedTitle": "坐標平面中的長方形與面積",
  "title": "坐標平面中的長方形：由坐標差求邊長與面積",
  "audience": "臺灣國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能辨認邊平行坐標軸的長方形。",
    "能由頂點坐標求寬與高。",
    "能計算周長與面積。",
    "能由三個頂點補出第四個頂點。"
  ],
  "prerequisites": [
    {
      "skillId": "coordinate-horizontal-vertical-distance",
      "requiredLevel": "能說明並正確使用「水平距離與垂直距離」的核心規則，且不混淆坐標分量順序。"
    }
  ],
  "glossary": [
    {
      "term": "軸平行長方形",
      "definition": "四邊分別平行 x 軸或 y 軸的長方形。"
    },
    {
      "term": "寬",
      "definition": "左右兩條垂直邊的 x 坐標差。"
    },
    {
      "term": "高",
      "definition": "上下兩條水平邊的 y 坐標差。"
    },
    {
      "term": "對角頂點",
      "definition": "不在同一邊上的兩個相對頂點。"
    }
  ],
  "notation": [
    {
      "symbol": "寬=|x右-x左|",
      "meaning": "長方形水平方向邊長。"
    },
    {
      "symbol": "高=|y上-y下|",
      "meaning": "長方形垂直方向邊長。"
    },
    {
      "symbol": "A=寬×高",
      "meaning": "長方形面積。"
    },
    {
      "symbol": "P=2(寬+高)",
      "meaning": "長方形周長。"
    }
  ],
  "conceptNarrative": [
    "邊平行坐標軸時，同一條垂直邊上的點有相同 x，同一條水平邊上的點有相同 y。",
    "給對角頂點即可取得兩個不同的 x 值與兩個不同的 y 值，並組成另外兩個頂點。",
    "邊長用絕對差，面積使用平方單位，周長使用長度單位。",
    "若圖形不是軸平行長方形，不能只用 x、y 範圍直接當邊長。"
  ],
  "formalDefinitions": [
    {
      "name": "軸平行長方形邊長",
      "statement": "寬為兩種 x 坐標之差，高為兩種 y 坐標之差。"
    },
    {
      "name": "第四頂點規則",
      "statement": "三個頂點中各出現的兩種 x 與兩種 y 必須各配對兩次。"
    }
  ],
  "formulas": [
    {
      "formula": "面積=|x2-x1|×|y2-y1|",
      "conditions": [
        "(x1,y1)、(x2,y2) 為對角頂點",
        "長方形邊平行坐標軸"
      ],
      "meaning": "由水平與垂直跨度求面積。"
    }
  ],
  "nonApplicableCases": [
    "斜放長方形不直接適用跨度乘積。",
    "面積不可寫成一次單位。",
    "周長不可只算寬+高。",
    "三點若無法形成兩種 x、兩種 y 的配對，未必是軸平行長方形的三頂點。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "先確認題目明定長方形的邊與坐標軸平行，整理兩種x值與兩種y值。",
      "check": "斜放長方形不得直接用水平、垂直跨度當邊長。"
    },
    {
      "step": 2,
      "instruction": "以兩種x的絕對差求寬，以兩種y的絕對差求高。",
      "check": "跨越零時做減去負數，寬高皆為正長度。"
    },
    {
      "step": 3,
      "instruction": "依問句套用面積＝寬×高或周長＝2(寬＋高)。",
      "check": "周長與面積沒有互換，面積標示平方單位。"
    },
    {
      "step": 4,
      "instruction": "缺第四點時，補上尚未出現的x、y配對，並檢查相鄰邊同x或同y。",
      "check": "不引入新的坐標值，也不把邊長當成坐標。"
    },
    {
      "step": 5,
      "instruction": "有比例時把水平、垂直邊長各自換算，再計算實際周長或面積。",
      "check": "面積尺度作用在兩個方向，不是只乘一次比例。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "L1",
      "prompt": "軸平行長方形對角點A=(-2,1)、C=(5,6)，求面積。",
      "solutionSteps": [
        "由橫坐標差求寬5－(-2)＝7。",
        "由縱坐標差求高6－1＝5。",
        "面積為7×5＝35平方單位。"
      ],
      "answer": "35平方單位。",
      "why": "題目已限定軸平行，因此對角點的水平與垂直跨度就是兩條邊長。寬七、高五都以完整坐標差求得，兩者相乘為三十五；面積是二維量，要使用平方單位。"
    },
    {
      "exampleId": "L2",
      "prompt": "寬4、高9的軸平行長方形，求周長。",
      "solutionSteps": [
        "先算寬加高4＋9＝13。",
        "長方形各有兩條寬與高，所以周長乘2。",
        "得到2×13＝26單位。"
      ],
      "answer": "26單位。",
      "why": "繞長方形一周會依序走過兩條寬與兩條高，所以不能只算四加九。周長公式二乘寬加高正好涵蓋四邊，結果二十六是長度，不使用平方單位。"
    },
    {
      "exampleId": "L3",
      "prompt": "A=(1,2)、B=(1,7)、C=(6,7)，求軸平行長方形第四點。",
      "solutionSteps": [
        "整理x值為1、6，y值為2、7。",
        "現有配對是(1,2)、(1,7)、(6,7)。",
        "缺少的配對是(6,2)，並與A同y、C同x。"
      ],
      "answer": "(6,2)。",
      "why": "軸平行長方形的四個頂點就是兩種橫坐標與兩種縱坐標的全部交叉配對。三點已用了其中三組，只需補上六與二的配對；它和相鄰點分別同x、同y。"
    },
    {
      "exampleId": "L4",
      "prompt": "長方形x介於-4與3，y介於-1與5，求面積。",
      "solutionSteps": [
        "水平寬度為3－(-4)＝7。",
        "垂直高度為5－(-1)＝6。",
        "面積為7×6＝42平方單位。"
      ],
      "answer": "42平方單位。",
      "why": "坐標區間的上下界直接給出軸平行長方形的四條邊界。兩個方向都跨越零，需用右界減左界與上界減下界得到七和六，再相乘得到四十二。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把 -4 到 3 的寬算成 -1。",
      "why": "直接做帶號相加。",
      "correction": "使用絕對差 3-(-4)=7。"
    },
    {
      "mistake": "面積寫成 35 單位。",
      "why": "忽略二維量。",
      "correction": "面積用平方單位。"
    },
    {
      "mistake": "周長只算寬+高。",
      "why": "漏掉相對兩邊。",
      "correction": "乘以 2。"
    },
    {
      "mistake": "第四點把 x、y 都取新值。",
      "why": "沒有檢查既有兩種分量。",
      "correction": "第四點只補缺少的組合。"
    },
    {
      "mistake": "任何四個點都用跨度乘積。",
      "why": "忽略軸平行長方形前提。",
      "correction": "先確認同 x、同 y 配邊。"
    }
  ],
  "selfCheck": [
    "我是否先確認軸平行？",
    "寬高是否使用絕對差？",
    "面積與周長單位是否不同？",
    "第四點是否補的是缺少組合？"
  ],
  "summary": [
    "寬由 x 差，高由 y 差。",
    "面積=寬×高。",
    "周長=2(寬+高)。",
    "第四頂點由兩種 x、兩種 y 交叉配對。"
  ],
  "connections": {
    "previous": "承接水平距離與垂直距離。",
    "next": [
      "下一節由點與方程式理解直線圖形。",
      "後續素養題會把地圖區域視為軸平行長方形。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u05-s007-v001",
      "u05-s007-v002",
      "u05-s007-v003",
      "u05-s007-v004",
      "u05-s007-v005",
      "u05-s007-v006",
      "u05-s007-v007",
      "u05-s007-v008",
      "u05-s007-v009",
      "u05-s007-v010",
      "u05-s007-v011",
      "u05-s007-v012"
    ],
    "constructedResponseIds": [
      "u05-s007-cr001",
      "u05-s007-cr002"
    ]
  },
  "figureReferences": [],
  "accessibilityNote": "本講義依鎖定範圍採全文字描述；方向、順序與方程式均以可由螢幕閱讀器理解的完整句子表達。",
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "Taiwan junior-high CAP coordinate geometry only",
    "examplesNotCopiedFromBank": true,
    "symbolDefinitionsComplete": true,
    "futureUnitKnowledgeAvoided": true,
    "reviewNote": "人工核算四例的坐標差、周長倍數、第四點配對與面積單位；範圍只限軸平行長方形，明確排除斜放圖形的錯套。",
    "reviewVersion": "human-lecture-review-u05-r1.0",
    "reviewedAt": "2026-07-12"
  },
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
  "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
  "contentSha256": "5918ae8f5fd976c3c8a956f128248b2739eb6b70419c0ca2c1e9529b18ca2374",
  "concept": "本節只處理邊與坐標軸平行的長方形。兩種橫坐標的絕對差是寬，兩種縱坐標的絕對差是高；周長為二乘寬加高，面積為寬乘高。由三個頂點補第四點時，只需將已出現的兩種x值與兩種y值補成缺少的配對。情境有地圖或螢幕比例時，寬、高都要先換成實際長度，面積才會按兩個方向的尺度相乘；若未明定軸平行，不能僅憑對角點坐標跨度決定面積。"
};

export const QUESTIONS = [
  {
    "questionId": "u05-s007-v001",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-rectangle-area",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "軸平行長方形的對角頂點為 A=(1,2)、C=(6,5)。面積是多少？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由對角點求長方形面積",
    "choices": [
      "8",
      "10",
      "15",
      "30"
    ],
    "answerIndex": 2,
    "independentSolution": "寬=|6-1|=5，高=|5-2|=3，面積=5×3=15。",
    "explanation": "長方形的邊與坐標軸平行，兩個對角點的橫坐標差給寬，縱坐標差給高。寬為六減一等於五，高為五減二等於三，所以面積是5×3＝15平方單位；把五與三相加只會得到半周長。",
    "steps": [
      "由對角點橫坐標求寬|6－1|＝5。",
      "由縱坐標求高|5－2|＝3。",
      "用面積等於寬乘高，計算5×3＝15。"
    ],
    "optionAnalysis": [
      {
        "choice": "8",
        "truth": false,
        "reason": "把寬高相加。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "只用寬乘 2。"
      },
      {
        "choice": "15",
        "truth": true,
        "reason": "5×3 正確。"
      },
      {
        "choice": "30",
        "truth": false,
        "reason": "誤把面積再乘 2。"
      }
    ],
    "misconceptionTarget": "把面積與周長混淆。",
    "prerequisiteCheck": "需會水平垂直距離。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題目明示邊平行坐標軸。",
    "difficultyReason": "直接求兩個坐標差，屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "由對角點求長方形面積",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "35857c8507620bb8b54018cb5405cb53fcd2890834cc3555b8fa6a86f3ae9a46",
    "commonMistake": "把寬與高相加當面積，或求得十五後又誤乘二。"
  },
  {
    "questionId": "u05-s007-v002",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-rectangle-area",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "長方形三個頂點為 (0,1)、(0,6)、(4,6)，第四個頂點為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "補出第四頂點",
    "choices": [
      "(1,4)",
      "(4,0)",
      "(6,4)",
      "(4,1)"
    ],
    "answerIndex": 3,
    "independentSolution": "已有兩種 x：0、4；兩種 y：1、6。缺少的配對是 (4,1)。",
    "explanation": "軸平行長方形的四個頂點由兩種橫坐標零、四與兩種縱坐標一、六交叉配對。已出現(0,1)、(0,6)、(4,6)，唯一缺少的是橫坐標四配縱坐標一，所以第四點為(4,1)。",
    "steps": [
      "整理既有頂點使用的x值0、4與y值1、6。",
      "列出四種交叉配對，找出尚未出現的一組。",
      "補上(4,1)，核對它與兩個相鄰頂點分別同x、同y。"
    ],
    "optionAnalysis": [
      {
        "choice": "(1,4)",
        "truth": false,
        "reason": "交換分量且不使用既有座標值。"
      },
      {
        "choice": "(4,0)",
        "truth": false,
        "reason": "引入未出現的 y=0。"
      },
      {
        "choice": "(6,4)",
        "truth": false,
        "reason": "引入錯誤分量。"
      },
      {
        "choice": "(4,1)",
        "truth": true,
        "reason": "補齊軸平行長方形。"
      }
    ],
    "misconceptionTarget": "把第四點當成兩個邊長組成的坐標。",
    "prerequisiteCheck": "需理解同 x、同 y 配邊。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "三點可形成兩條互相垂直的鄰邊。",
    "difficultyReason": "直接配對分量，屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "補出第四頂點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "dc70fd072571e244446eadcf1ae0343732ce42504ed5c26d7d816d02c7337990",
    "commonMistake": "把邊長或坐標差當成第四點分量，加入原頂點中從未出現的新坐標值。"
  },
  {
    "questionId": "u05-s007-v003",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-rectangle-area",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "一個軸平行長方形的 x 坐標介於 -3 與 2，y 坐標介於 1 與 5。其周長為何？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由坐標範圍求周長",
    "choices": [
      "18",
      "9",
      "20",
      "40"
    ],
    "answerIndex": 0,
    "independentSolution": "寬=2-(-3)=5，高=5-1=4，周長=2(5+4)=18。",
    "explanation": "x坐標從負三到二，寬為二減負三等於五；y坐標從一到五，高為四。長方形周長包含兩條寬與兩條高，所以是2×(5＋4)＝18單位，而九只算了寬加高的一半周長。",
    "steps": [
      "計算水平跨度2－(-3)＝5。",
      "計算垂直跨度5－1＝4。",
      "套用周長2(寬＋高)，得到2×9＝18。"
    ],
    "optionAnalysis": [
      {
        "choice": "18",
        "truth": true,
        "reason": "2×9=18。"
      },
      {
        "choice": "9",
        "truth": false,
        "reason": "只算寬加高。"
      },
      {
        "choice": "20",
        "truth": false,
        "reason": "誤用寬×高當周長。"
      },
      {
        "choice": "40",
        "truth": false,
        "reason": "面積再乘 2。"
      }
    ],
    "misconceptionTarget": "周長漏乘 2 或與面積混淆。",
    "prerequisiteCheck": "需會坐標差。",
    "estimatedTimeSec": 75,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "邊界端點包含與否不影響邊長。",
    "difficultyReason": "兩個坐標差與周長公式，屬基礎。",
    "literacyContextNecessity": null,
    "authoringIntent": "由坐標範圍求周長",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "a79a971bfe766057bd5098bbd337b45f8bb81751afecfc4d985aeea8f67cbb03",
    "commonMistake": "只算寬加高而漏乘二，或把寬乘高的面積二十當作周長。"
  },
  {
    "questionId": "u05-s007-v004",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-rectangle-area",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "對角點為 P=(-4,-2)、R=(3,6) 的軸平行長方形，面積是多少？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "計算跨越原點的長方形面積",
    "choices": [
      "15",
      "56",
      "30",
      "112"
    ],
    "answerIndex": 1,
    "independentSolution": "寬=3-(-4)=7，高=6-(-2)=8，面積=56。",
    "explanation": "對角點跨越兩個坐標軸，水平寬度為三減負四等於七，垂直高度為六減負二等於八。軸平行長方形面積為寬乘高，所以7×8＝56平方單位；跨零時不能只做兩個絕對值相減。",
    "steps": [
      "由橫坐標求寬3－(-4)＝7。",
      "由縱坐標求高6－(-2)＝8。",
      "計算面積7×8＝56平方單位。"
    ],
    "optionAnalysis": [
      {
        "choice": "15",
        "truth": false,
        "reason": "把四個坐標直接相加或差。"
      },
      {
        "choice": "56",
        "truth": true,
        "reason": "7×8=56。"
      },
      {
        "choice": "30",
        "truth": false,
        "reason": "坐標差計算錯。"
      },
      {
        "choice": "112",
        "truth": false,
        "reason": "面積多乘 2。"
      }
    ],
    "misconceptionTarget": "跨越兩軸時把差算成絕對值之差。",
    "prerequisiteCheck": "需會整數減法。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "對角點與軸平行條件充分。",
    "difficultyReason": "需正確處理兩個負坐標，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "計算跨越原點的長方形面積",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "0dfc10ef79e908a7737a27ed98f70250be6a3fa0586170f455b1a238851d5c7d",
    "commonMistake": "跨越坐標軸時把端點絕對值相減，導致寬或高少算一段。"
  },
  {
    "questionId": "u05-s007-v005",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-rectangle-area",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "長方形面積為 48，水平邊端點 x 坐標為 -2 與 6。其高是多少？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由面積反求高",
    "choices": [
      "6",
      "4",
      "8",
      "10"
    ],
    "answerIndex": 0,
    "independentSolution": "寬=6-(-2)=8；高=48÷8=6。",
    "explanation": "水平邊兩端的橫坐標是負二與六，寬為六減負二等於八。面積四十八等於寬八乘高，因此高為48÷8＝6。驗算八乘六回到四十八，且高是正長度。",
    "steps": [
      "先用橫坐標差求寬6－(-2)＝8。",
      "由面積＝寬×高，列8×高＝48。",
      "計算高＝48÷8＝6並乘回驗算。"
    ],
    "optionAnalysis": [
      {
        "choice": "6",
        "truth": true,
        "reason": "8×6=48。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "誤以兩 x 的絕對值差為 4。"
      },
      {
        "choice": "8",
        "truth": false,
        "reason": "把寬直接當高。"
      },
      {
        "choice": "10",
        "truth": false,
        "reason": "把兩 x 絕對值相加後再錯算。"
      }
    ],
    "misconceptionTarget": "由面積反求邊長時沒有先求正確寬。",
    "prerequisiteCheck": "需會除法。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "長方形邊長為正，答案唯一。",
    "difficultyReason": "需逆用面積公式，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "由面積反求高",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "9f6e9de99fa0f16f2553e6c7175b5ad4ebf67bafef3272378a7a59ef3237c513",
    "commonMistake": "沒有先求跨零的正確寬八，就直接把某個橫坐標或坐標差四當成高。"
  },
  {
    "questionId": "u05-s007-v006",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-rectangle-area",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "A=(a,1)、B=(a,7)、C=(5,7)、D=(5,1) 為長方形，周長 20 且 a<5，求 a。",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由周長與頂點參數反求坐標",
    "choices": [
      "0",
      "2",
      "1",
      "4"
    ],
    "answerIndex": 2,
    "independentSolution": "高=6，周長 20 表示寬+高=10，所以寬=4。因 a<5，5-a=4，得 a=1。",
    "explanation": "上下兩邊的縱坐標是一與七，高為六。周長二十表示寬加高等於十，所以寬為四。由a小於五可知左邊在a、右邊在五，寬是5－a＝4，解得a＝1；代回周長為二十。",
    "steps": [
      "由縱坐標差7－1求得高6。",
      "由2(寬＋6)＝20求得寬4。",
      "利用a＜5列5－a＝4，解得a＝1並驗算周長。"
    ],
    "optionAnalysis": [
      {
        "choice": "0",
        "truth": false,
        "reason": "寬 5，周長 22。"
      },
      {
        "choice": "2",
        "truth": false,
        "reason": "寬 3，周長 18。"
      },
      {
        "choice": "1",
        "truth": true,
        "reason": "寬 4、高 6，周長 20。"
      },
      {
        "choice": "4",
        "truth": false,
        "reason": "寬 1，周長 14。"
      }
    ],
    "misconceptionTarget": "把周長 20 直接減高一次，漏掉兩倍。",
    "prerequisiteCheck": "需會一元方程式。",
    "estimatedTimeSec": 100,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "a<5 確定寬為 5-a，不需絕對值分支。",
    "difficultyReason": "需結合周長公式與參數條件，屬標準。",
    "literacyContextNecessity": null,
    "authoringIntent": "由周長與頂點參數反求坐標",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "a3c82590fa64c0dd7148565bac318465d3180a5a528d24899f9c4984a2b412d4",
    "commonMistake": "把周長二十直接減去高六一次，忘記長方形的寬與高各出現兩條。"
  },
  {
    "questionId": "u05-s007-v007",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-rectangle-area",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "三點 A=(-2,3)、B=(4,3)、C=(4,-1) 是軸平行長方形的三個頂點。若面積為 24，下列哪個點是第四頂點？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "利用面積與配對驗證第四點",
    "choices": [
      "(-1,-2)",
      "(-2,-1)",
      "(2,1)",
      "(-4,1)"
    ],
    "answerIndex": 1,
    "independentSolution": "AB 長 6，BC 長 4，面積確為 24；缺少 x=-2、y=-1 的配對。",
    "explanation": "A、B同y形成長六的水平邊，B、C同x形成長四的垂直邊，面積六乘四確為二十四。第四點需與A同x為負二、與C同y為負一，因此是(-2,-1)，不需由面積另造新坐標。",
    "steps": [
      "求AB長|4－(-2)|＝6與BC長|3－(-1)|＝4。",
      "核對6×4＝24，確認三點為相鄰頂點。",
      "配對A的x=-2與C的y=-1，得到第四點(-2,-1)。"
    ],
    "optionAnalysis": [
      {
        "choice": "(-1,-2)",
        "truth": false,
        "reason": "交換並改變分量。"
      },
      {
        "choice": "(-2,-1)",
        "truth": true,
        "reason": "與 A 同 x、與 C 同 y。"
      },
      {
        "choice": "(2,1)",
        "truth": false,
        "reason": "不與既有點形成軸平行邊。"
      },
      {
        "choice": "(-4,1)",
        "truth": false,
        "reason": "引入未出現的 x、y。"
      }
    ],
    "misconceptionTarget": "未檢查第四點需與兩個既有頂點分別同 x、同 y。",
    "prerequisiteCheck": "需會距離與面積。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "三點順序可判定 B 為直角頂點，第四點唯一。",
    "difficultyReason": "除配對外還需核對面積條件，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "利用面積與配對驗證第四點",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "34ef8bf44fd9af2f8bdf48e176b598a0e35fee155f13937ea20acf9c2f7c8710",
    "commonMistake": "沒有檢查第四點必須分別與兩個相鄰頂點同x、同y，反而從面積猜坐標。"
  },
  {
    "questionId": "u05-s007-v008",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-rectangle-area",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "軸平行長方形的左下角為 (m,2)，右上角為 (m+5,2m)。若面積為 30 且 m>1，求 m。",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "含參數長方形面積",
    "choices": [
      "2",
      "3",
      "6",
      "4"
    ],
    "answerIndex": 3,
    "independentSolution": "寬=5，高=2m-2。面積 5(2m-2)=30，得 2m-2=6，m=4。",
    "explanation": "右上角橫坐標m＋5減左下角m，寬固定為五；因m大於一，上方2m高於下方二，高為2m－2。面積條件給5(2m－2)＝30，先得2m－2＝6，再解得m＝4。代回時寬五、高六，面積正好三十且上下位置順序正確。",
    "steps": [
      "計算寬(m＋5)－m＝5。",
      "利用m＞1寫高為2m－2，列5(2m－2)＝30。",
      "解2m－2＝6得m＝4，代回求面積驗證。"
    ],
    "optionAnalysis": [
      {
        "choice": "2",
        "truth": false,
        "reason": "高 2，面積 10。"
      },
      {
        "choice": "3",
        "truth": false,
        "reason": "高 4，面積 20。"
      },
      {
        "choice": "6",
        "truth": false,
        "reason": "高 10，面積 50。"
      },
      {
        "choice": "4",
        "truth": true,
        "reason": "高 6，面積 30。"
      }
    ],
    "misconceptionTarget": "把右上角 y=2m 與左下 y=2 直接相乘。",
    "prerequisiteCheck": "需會一元一次方程式。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "m>1 確保 2m 在 2 上方，高為 2m-2。",
    "difficultyReason": "需建立代數邊長與面積方程式，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "含參數長方形面積",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "de3c88ee6b7dfa6394efdd148eff1cd5d97d4e0332bf90cff5f263a99d54aea5",
    "commonMistake": "把右上角縱坐標二m直接當高，忘記減去左下角的縱坐標二。"
  },
  {
    "questionId": "u05-s007-v009",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-rectangle-area",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "一個軸平行長方形面積為 40，四個頂點的 x 坐標只有 -1 與 7，y 坐標只有 b 與 b+5。下列敘述何者正確？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "辨認平移不改變面積",
    "choices": [
      "只能 b=0",
      "只能 b=5",
      "不存在這樣的長方形",
      "條件一致，任意 b 都可"
    ],
    "answerIndex": 3,
    "independentSolution": "寬=8，高=(b+5)-b=5，面積固定為 40，與 b 的值無關，所以任意 b 都可。",
    "explanation": "兩種橫坐標負一與七的差是八，兩種縱坐標b與b＋5的差永遠是五，所以面積固定為8×5＝40，正好符合條件。b只決定長方形上下位置，不影響高度，因此任意實數b都可。",
    "steps": [
      "由x坐標差7－(-1)求寬8。",
      "由(b＋5)－b求高5，觀察b消去。",
      "算面積8×5＝40，判定條件對任意b皆成立。"
    ],
    "optionAnalysis": [
      {
        "choice": "只能 b=0",
        "truth": false,
        "reason": "面積不要求圖形貼 x 軸。"
      },
      {
        "choice": "只能 b=5",
        "truth": false,
        "reason": "無此限制。"
      },
      {
        "choice": "不存在這樣的長方形",
        "truth": false,
        "reason": "8×5 正好為 40。"
      },
      {
        "choice": "條件一致，任意 b 都可",
        "truth": true,
        "reason": "平移上下位置不改變面積。"
      }
    ],
    "misconceptionTarget": "認為面積會決定長方形在平面上的絕對位置。",
    "prerequisiteCheck": "需理解坐標差消去共同平移量。",
    "estimatedTimeSec": 135,
    "unitCheck": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "b 可為任意實數，長方形仍軸平行且邊長正。",
    "difficultyReason": "需理解參數代表整體垂直平移而非邊長變化，屬進階。",
    "literacyContextNecessity": null,
    "authoringIntent": "辨認平移不改變面積",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "f1fe2f53bec201a45d3e030cb222161b91fb5a9d292f560a3e6e3613fc651340",
    "commonMistake": "認為面積會固定長方形在平面上的絕對高度，擅自令b等於零或五。"
  },
  {
    "questionId": "u05-s007-v010",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-rectangle-area",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "社區花圃是邊與坐標軸平行的長方形，地圖上對角點為(-1,2)與(5,7)，且水平、垂直方向每格皆代表2公尺。花圃實際面積是多少？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "地圖比例下的長方形實際面積",
    "choices": [
      "30 平方公尺",
      "120 平方公尺",
      "60 平方公尺",
      "240 平方公尺"
    ],
    "answerIndex": 1,
    "independentSolution": "地圖寬 6 格、高 5 格。實際寬 12 公尺、高 10 公尺，面積 120 平方公尺。",
    "explanation": "題幹已明定花圃為軸平行長方形，且兩方向每格皆為二公尺。地圖寬六格、高五格，換算後實際寬十二公尺、高十公尺，所以面積為12×10＝120平方公尺，唯一對應第二選項。",
    "steps": [
      "依軸平行前提求地圖寬5－(-1)＝6格、高7－2＝5格。",
      "兩個方向各乘每格2公尺，得實寬12公尺、實高10公尺。",
      "計算實際面積12×10＝120平方公尺。"
    ],
    "optionAnalysis": [
      {
        "choice": "30 平方公尺",
        "truth": false,
        "reason": "只算格數面積。"
      },
      {
        "choice": "120 平方公尺",
        "truth": true,
        "reason": "12×10 正確。"
      },
      {
        "choice": "60 平方公尺",
        "truth": false,
        "reason": "只把面積乘一次 2。"
      },
      {
        "choice": "240 平方公尺",
        "truth": false,
        "reason": "多乘一次 2。"
      }
    ],
    "misconceptionTarget": "面積比例只乘一次，而不是兩個邊長都換算。",
    "prerequisiteCheck": "需會長方形面積與比例。",
    "estimatedTimeSec": 150,
    "unitCheck": "兩邊各乘 2；面積單位為平方公尺。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "每格在兩方向皆為 2 公尺，圖形軸平行。",
    "difficultyReason": "需要平方尺度換算，情境比例不可刪除。",
    "literacyContextNecessity": "每格 2 公尺使面積從 30 格²變為 120 平方公尺，比例資訊直接影響答案。",
    "authoringIntent": "地圖比例下的長方形實際面積",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "c9cec9acbbad160de81cdf279069cfcddf1ee0950eae46ea6fa5b74b87cd19dc",
    "commonMistake": "未確認圖形軸平行就用坐標跨度，或只把格數面積乘一次比例二。"
  },
  {
    "questionId": "u05-s007-v011",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-rectangle-area",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "展覽攤位邊界為 x=-3、x=4、y=1、y=6，每坐標單位 0.5 公尺。要繞攤位一圈需走多少公尺？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "由邊界線求實際周長",
    "choices": [
      "6 公尺",
      "17 公尺",
      "12 公尺",
      "24 公尺"
    ],
    "answerIndex": 2,
    "independentSolution": "格線寬 7、高 5，周長 2(7+5)=24 單位；每單位 0.5 公尺，所以 12 公尺。",
    "explanation": "左右邊界橫坐標負三與四相差七單位，上下邊界縱坐標一與六相差五單位。格線周長是2(7＋5)＝24單位，每單位零點五公尺，所以實際繞一圈為24×0.5＝12公尺。",
    "steps": [
      "由x邊界求寬4－(-3)＝7單位。",
      "由y邊界求高6－1＝5，算格線周長2(7＋5)＝24。",
      "依每單位0.5公尺換算，得到12公尺。"
    ],
    "optionAnalysis": [
      {
        "choice": "6 公尺",
        "truth": false,
        "reason": "少算一半周長。"
      },
      {
        "choice": "17 公尺",
        "truth": false,
        "reason": "把邊界數值直接相加。"
      },
      {
        "choice": "12 公尺",
        "truth": true,
        "reason": "24×0.5=12。"
      },
      {
        "choice": "24 公尺",
        "truth": false,
        "reason": "未換算實際尺度。"
      }
    ],
    "misconceptionTarget": "計算出格線周長後忘記單位比例。",
    "prerequisiteCheck": "需會坐標差與周長。",
    "estimatedTimeSec": 150,
    "unitCheck": "24 坐標單位×0.5 公尺/單位。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "四條界線形成軸平行長方形。",
    "difficultyReason": "需辨認四條邊界、算周長並換算。",
    "literacyContextNecessity": "攤位施工需要實際公尺；0.5 公尺/單位不可省略。",
    "authoringIntent": "由邊界線求實際周長",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "4e04bd4f3074d618151f254be14eb7e682e7c27b4800704dba722b0fdb1742be",
    "commonMistake": "算出格線周長二十四後忘記乘實際尺度，或只算寬加高的一半周長。"
  },
  {
    "questionId": "u05-s007-v012",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-rectangle-area",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "TAIWAN_CAP_JUNIOR_HIGH_COORDINATE_GEOMETRY",
    "text": "螢幕選取框左上角為 (2,9)，右下角為 (10,3)。若每單位代表 20 像素，選取框共有多少平方像素？",
    "givenConditions": [
      "題幹所列坐標、方程式與移動條件均為精確值。"
    ],
    "target": "計算螢幕框的像素面積",
    "choices": [
      "19200 平方像素",
      "48 平方像素",
      "960 平方像素",
      "38400 平方像素"
    ],
    "answerIndex": 0,
    "independentSolution": "寬 8 單位、高 6 單位；實際寬 160 像素、高 120 像素，面積 160×120=19200。",
    "explanation": "左上與右下的橫坐標相差八單位、縱坐標相差六單位。每單位二十像素，所以實際寬為一百六十像素、高為一百二十像素，面積是160×120＝19200平方像素；兩個方向都要換算。",
    "steps": [
      "求坐標寬10－2＝8、高9－3＝6單位。",
      "換算實際寬8×20＝160、高6×20＝120像素。",
      "計算面積160×120＝19200平方像素。"
    ],
    "optionAnalysis": [
      {
        "choice": "19200 平方像素",
        "truth": true,
        "reason": "160×120 正確。"
      },
      {
        "choice": "48 平方像素",
        "truth": false,
        "reason": "只算坐標單位面積。"
      },
      {
        "choice": "960 平方像素",
        "truth": false,
        "reason": "只將 48 乘一次 20。"
      },
      {
        "choice": "38400 平方像素",
        "truth": false,
        "reason": "多乘 2。"
      }
    ],
    "misconceptionTarget": "沒有把兩個方向都換算成像素。",
    "prerequisiteCheck": "需會絕對差與面積。",
    "estimatedTimeSec": 150,
    "unitCheck": "8×20=160 像素，6×20=120 像素，面積平方像素。",
    "roundingCheck": "本題使用精確整數、分數或坐標，不需要四捨五入。",
    "ambiguityBoundaryAudit": "題目只使用坐標差，不依賴螢幕 y 正向方向。",
    "difficultyReason": "需處理畫面 y 方向數值由上到下減少，但邊長仍取絕對差，並做平方尺度換算。",
    "literacyContextNecessity": "像素比例與選取框角點是數位介面中的實際資訊，決定儲存區域大小。",
    "authoringIntent": "計算螢幕框的像素面積",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "322d1103a02086eace100a56071eefcbadcdd10e5a897ab47705dafec2a19f76",
    "commonMistake": "先算四十八平方單位後只乘一次二十，沒有把水平與垂直尺度都換算。"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u05-s007-cr001",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-rectangle-area",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "軸平行長方形的對角頂點為 A=(-3,1)、C=(5,6)。求另外兩個頂點、周長與面積。",
    "requiredWork": [
      "由兩種 x、兩種 y 補點。",
      "求寬、高、周長、面積。"
    ],
    "fullCreditSolution": [
      "軸平行長方形只使用橫坐標負三、五與縱坐標一、六的交叉配對，所以另外兩點是(-3,6)與(5,1)。",
      "水平寬度為|5－(-3)|＝8單位，垂直高度為|6－1|＝5單位。",
      "周長包含兩條寬與兩條高，所以2(8＋5)＝26單位。",
      "面積為寬乘高8×5＝40平方單位；長度與面積單位需分開。"
    ],
    "alternativeSolutions": [
      "另外兩點順序可交換；也可先求寬高再補點。"
    ],
    "reasoningSteps": [
      "由兩個對角點整理出兩種x值與兩種y值，補齊另兩個頂點。",
      "用橫、縱坐標絕對差分別求寬與高。",
      "套用周長公式二乘寬加高。",
      "套用面積公式寬乘高並標示平方單位。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "兩點、周長 26、面積 40 全部正確且單位區分清楚。"
      },
      {
        "score": 2,
        "criteria": "主要邊長正確，但漏一個結果或只有一個算術錯。"
      },
      {
        "score": 1,
        "criteria": "能求出寬 8 或高 5，並呈現長方形概念。"
      },
      {
        "score": 0,
        "criteria": "補點使用新坐標值，且周長面積均無依據。"
      }
    ],
    "partialCreditRules": [
      "兩個補點順序不影響；面積需平方單位。"
    ],
    "followThroughPolicy": "若寬或高因坐標差算錯，後續使用該寬高正確計算周長與面積，可按結果追隨給公式與運算分；頂點仍須獨立判定。",
    "unitAndNotationRules": "頂點以有序對表示；周長單位為「單位」，面積單位為「平方單位」。",
    "answerOnlyPolicy": "只列兩頂點、周長與面積而沒有寬高或公式過程，最高給 2 分。",
    "commonErrors": [
      "把坐標差八、五直接組成新頂點，寫出原分量中不存在的坐標值。",
      "周長只算寬加高十三，或將周長與面積的單位互相混用。"
    ],
    "independentReview": {
      "derivedResult": "若寬或高有早期算術錯，後續周長與面積依該值正確計算，可保留公式方法分。",
      "ambiguity": "周長用長度單位，面積用平方單位。",
      "decision": "pass",
      "reviewNote": "重新由題目條件推導結果為 若寬或高有早期算術錯，後續周長與面積依該值正確計算，可保留公式方法分。；並逐項核對評分規準與可接受的等價表示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "2ce6d4f1a188cdf5b8edcd3c5906613943eb13da71220d8d95b18d3579aeb1fd"
  },
  {
    "questionId": "u05-s007-cr002",
    "unitId": "u05",
    "numericUnitId": 5,
    "topicId": "u05-coordinate-ops",
    "skillId": "coordinate-rectangle-area",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "一個軸平行長方形的左邊在 x=a，右邊在 x=7，下邊在 y=-2，上邊在 y=4。面積為 54 且 a<7。求 a 與周長。",
    "requiredWork": [
      "由 y 邊界求高。",
      "由面積反求寬。",
      "由 a<7 求 a。",
      "求周長。"
    ],
    "fullCreditSolution": [
      "上下邊界為y＝-2與y＝4，高度是4－(-2)＝6單位。",
      "面積五十四等於寬乘高，所以寬為54÷6＝9單位。",
      "題目給a＜7，左邊在a、右邊在七，因此7－a＝9，解得a＝-2。",
      "周長為2(9＋6)＝30單位；代回邊界可得寬九、高六、面積五十四。"
    ],
    "alternativeSolutions": [
      "可直接列 (7-a)×6=54 解 a，再求周長。"
    ],
    "reasoningSteps": [
      "由上下邊界的縱坐標差求高。",
      "用面積除以高，反求正的寬度。",
      "依a小於七決定左右順序，建立7－a＝9並求a。",
      "以寬高計算周長，代回面積驗算。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "a=-2、周長 30，且邊長推導完整。"
      },
      {
        "score": 2,
        "criteria": "a 正確但周長漏算或小錯，或周長正確但 a 方程式說明不足。"
      },
      {
        "score": 1,
        "criteria": "求得高 6 並能建立面積方程式，但解算錯。"
      },
      {
        "score": 0,
        "criteria": "把 a 當面積或忽略 a<7 導致錯誤寬。"
      }
    ],
    "partialCreditRules": [
      "a<7 決定寬為 7-a。"
    ],
    "followThroughPolicy": "若由面積求寬時出現算術錯誤，但後續以 a=7-寬並正確計算周長，可依一致推理給部分分；須仍符合 a<7。",
    "unitAndNotationRules": "a 為直線 x=a 的橫坐標；周長寫成長度單位，面積 54 為平方單位。",
    "answerOnlyPolicy": "只寫 a=-2、周長 30 而沒有由面積求寬的過程，最高給 2 分。",
    "commonErrors": [
      "把四與負二的高度誤算成二，沒有完整計入跨越零的六單位。",
      "求得寬九後直接把a寫成九，或把面積五十四誤當成周長。"
    ],
    "independentReview": {
      "derivedResult": "若 a 算錯但使用自己的正寬正確套周長公式，可給方法分。",
      "ambiguity": "a 為坐標，周長為單位長度。",
      "decision": "pass",
      "reviewNote": "重新由題目條件推導結果為 若 a 算錯但使用自己的正寬正確套周長公式，可給方法分。；並逐項核對評分規準與可接受的等價表示。"
    },
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "replacementPolicy": "REPLACE_MATCHING_LEGACY_RECORD_ONLY_DURING_FINAL_GLOBAL_INTEGRATION",
    "contentSha256": "d25e8135c831b47481bb758f42a77b325a4ca6190654d503e26cdf36a51723eb"
  }
];

export const SEMANTIC_REVIEWS = [
  {
    "questionId": "u05-s007-v001",
    "contentSha256": "35857c8507620bb8b54018cb5405cb53fcd2890834cc3555b8fa6a86f3ae9a46",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "寬=|6-1|=5，高=|5-2|=3，面積=5×3=15。",
    "derivedAnswer": "15",
    "storedAnswer": "15",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「15」；其餘三項逐項檢查：「8」不成立，把寬高相加。；「10」不成立，只用寬乘 2。；「30」不成立，誤把面積再乘 2。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標平面中的長方形與面積」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "題目明示邊平行坐標軸。",
      "alternateReading": "常見誤讀是「把面積與周長混淆。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "直接求兩個坐標差，屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會水平垂直距離。",
    "languageCheck": "題幹所求為「由對角點求長方形面積」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「軸平行長方形的對角頂點為 A=(1,2)、C=(6,5)。面積是多少？」重新依序處理：寬=|6-1|=5，高=|5-2|=3，面積=5×3=15。 正確選項為「15」。三個干擾項均對應不同錯誤：「8」不成立，把寬高相加。；「10」不成立，只用寬乘 2。；「30」不成立，誤把面積再乘 2。。邊界審查：題目明示邊平行坐標軸。 難度理由：直接求兩個坐標差，屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s007-v002",
    "contentSha256": "dc70fd072571e244446eadcf1ae0343732ce42504ed5c26d7d816d02c7337990",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "已有兩種 x：0、4；兩種 y：1、6。缺少的配對是 (4,1)。",
    "derivedAnswer": "(4,1)",
    "storedAnswer": "(4,1)",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(4,1)」；其餘三項逐項檢查：「(1,4)」不成立，交換分量且不使用既有座標值。；「(4,0)」不成立，引入未出現的 y=0。；「(6,4)」不成立，引入錯誤分量。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標平面中的長方形與面積」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "三點可形成兩條互相垂直的鄰邊。",
      "alternateReading": "常見誤讀是「把第四點當成兩個邊長組成的坐標。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "直接配對分量，屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需理解同 x、同 y 配邊。",
    "languageCheck": "題幹所求為「補出第四頂點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「長方形三個頂點為 (0,1)、(0,6)、(4,6)，第四個頂點為何？」重新依序處理：已有兩種 x：0、4；兩種 y：1、6。缺少的配對是 (4,1)。 正確選項為「(4,1)」。三個干擾項均對應不同錯誤：「(1,4)」不成立，交換分量且不使用既有座標值。；「(4,0)」不成立，引入未出現的 y=0。；「(6,4)」不成立，引入錯誤分量。。邊界審查：三點可形成兩條互相垂直的鄰邊。 難度理由：直接配對分量，屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s007-v003",
    "contentSha256": "a79a971bfe766057bd5098bbd337b45f8bb81751afecfc4d985aeea8f67cbb03",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "寬=2-(-3)=5，高=5-1=4，周長=2(5+4)=18。",
    "derivedAnswer": "18",
    "storedAnswer": "18",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「18」；其餘三項逐項檢查：「9」不成立，只算寬加高。；「20」不成立，誤用寬×高當周長。；「40」不成立，面積再乘 2。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標平面中的長方形與面積」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "邊界端點包含與否不影響邊長。",
      "alternateReading": "常見誤讀是「周長漏乘 2 或與面積混淆。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "兩個坐標差與周長公式，屬基礎。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會坐標差。",
    "languageCheck": "題幹所求為「由坐標範圍求周長」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「一個軸平行長方形的 x 坐標介於 -3 與 2，y 坐標介於 1 與 5。其周長為何？」重新依序處理：寬=2-(-3)=5，高=5-1=4，周長=2(5+4)=18。 正確選項為「18」。三個干擾項均對應不同錯誤：「9」不成立，只算寬加高。；「20」不成立，誤用寬×高當周長。；「40」不成立，面積再乘 2。。邊界審查：邊界端點包含與否不影響邊長。 難度理由：兩個坐標差與周長公式，屬基礎。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s007-v004",
    "contentSha256": "0dfc10ef79e908a7737a27ed98f70250be6a3fa0586170f455b1a238851d5c7d",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "寬=3-(-4)=7，高=6-(-2)=8，面積=56。",
    "derivedAnswer": "56",
    "storedAnswer": "56",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「56」；其餘三項逐項檢查：「15」不成立，把四個坐標直接相加或差。；「30」不成立，坐標差計算錯。；「112」不成立，面積多乘 2。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標平面中的長方形與面積」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "對角點與軸平行條件充分。",
      "alternateReading": "常見誤讀是「跨越兩軸時把差算成絕對值之差。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需正確處理兩個負坐標，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會整數減法。",
    "languageCheck": "題幹所求為「計算跨越原點的長方形面積」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「對角點為 P=(-4,-2)、R=(3,6) 的軸平行長方形，面積是多少？」重新依序處理：寬=3-(-4)=7，高=6-(-2)=8，面積=56。 正確選項為「56」。三個干擾項均對應不同錯誤：「15」不成立，把四個坐標直接相加或差。；「30」不成立，坐標差計算錯。；「112」不成立，面積多乘 2。。邊界審查：對角點與軸平行條件充分。 難度理由：需正確處理兩個負坐標，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s007-v005",
    "contentSha256": "9f6e9de99fa0f16f2553e6c7175b5ad4ebf67bafef3272378a7a59ef3237c513",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "寬=6-(-2)=8；高=48÷8=6。",
    "derivedAnswer": "6",
    "storedAnswer": "6",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「6」；其餘三項逐項檢查：「4」不成立，誤以兩 x 的絕對值差為 4。；「8」不成立，把寬直接當高。；「10」不成立，把兩 x 絕對值相加後再錯算。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標平面中的長方形與面積」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "長方形邊長為正，答案唯一。",
      "alternateReading": "常見誤讀是「由面積反求邊長時沒有先求正確寬。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需逆用面積公式，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會除法。",
    "languageCheck": "題幹所求為「由面積反求高」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「長方形面積為 48，水平邊端點 x 坐標為 -2 與 6。其高是多少？」重新依序處理：寬=6-(-2)=8；高=48÷8=6。 正確選項為「6」。三個干擾項均對應不同錯誤：「4」不成立，誤以兩 x 的絕對值差為 4。；「8」不成立，把寬直接當高。；「10」不成立，把兩 x 絕對值相加後再錯算。。邊界審查：長方形邊長為正，答案唯一。 難度理由：需逆用面積公式，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s007-v006",
    "contentSha256": "a3c82590fa64c0dd7148565bac318465d3180a5a528d24899f9c4984a2b412d4",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "高=6，周長 20 表示寬+高=10，所以寬=4。因 a<5，5-a=4，得 a=1。",
    "derivedAnswer": "1",
    "storedAnswer": "1",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「1」；其餘三項逐項檢查：「0」不成立，寬 5，周長 22。；「2」不成立，寬 3，周長 18。；「4」不成立，寬 1，周長 14。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標平面中的長方形與面積」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "a<5 確定寬為 5-a，不需絕對值分支。",
      "alternateReading": "常見誤讀是「把周長 20 直接減高一次，漏掉兩倍。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需結合周長公式與參數條件，屬標準。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會一元方程式。",
    "languageCheck": "題幹所求為「由周長與頂點參數反求坐標」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「A=(a,1)、B=(a,7)、C=(5,7)、D=(5,1) 為長方形，周長 20 且 a<5，求 a。」重新依序處理：高=6，周長 20 表示寬+高=10，所以寬=4。因 a<5，5-a=4，得 a=1。 正確選項為「1」。三個干擾項均對應不同錯誤：「0」不成立，寬 5，周長 22。；「2」不成立，寬 3，周長 18。；「4」不成立，寬 1，周長 14。。邊界審查：a<5 確定寬為 5-a，不需絕對值分支。 難度理由：需結合周長公式與參數條件，屬標準。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s007-v007",
    "contentSha256": "34ef8bf44fd9af2f8bdf48e176b598a0e35fee155f13937ea20acf9c2f7c8710",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "AB 長 6，BC 長 4，面積確為 24；缺少 x=-2、y=-1 的配對。",
    "derivedAnswer": "(-2,-1)",
    "storedAnswer": "(-2,-1)",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「(-2,-1)」；其餘三項逐項檢查：「(-1,-2)」不成立，交換並改變分量。；「(2,1)」不成立，不與既有點形成軸平行邊。；「(-4,1)」不成立，引入未出現的 x、y。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標平面中的長方形與面積」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "三點順序可判定 B 為直角頂點，第四點唯一。",
      "alternateReading": "常見誤讀是「未檢查第四點需與兩個既有頂點分別同 x、同 y。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "除配對外還需核對面積條件，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會距離與面積。",
    "languageCheck": "題幹所求為「利用面積與配對驗證第四點」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「三點 A=(-2,3)、B=(4,3)、C=(4,-1) 是軸平行長方形的三個頂點。若面積為 24，下列哪個點是第四頂點？」重新依序處理：AB 長 6，BC 長 4，面積確為 24；缺少 x=-2、y=-1 的配對。 正確選項為「(-2,-1)」。三個干擾項均對應不同錯誤：「(-1,-2)」不成立，交換並改變分量。；「(2,1)」不成立，不與既有點形成軸平行邊。；「(-4,1)」不成立，引入未出現的 x、y。。邊界審查：三點順序可判定 B 為直角頂點，第四點唯一。 難度理由：除配對外還需核對面積條件，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s007-v008",
    "contentSha256": "de3c88ee6b7dfa6394efdd148eff1cd5d97d4e0332bf90cff5f263a99d54aea5",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "寬=5，高=2m-2。面積 5(2m-2)=30，得 2m-2=6，m=4。",
    "derivedAnswer": "4",
    "storedAnswer": "4",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「4」；其餘三項逐項檢查：「2」不成立，高 2，面積 10。；「3」不成立，高 4，面積 20。；「6」不成立，高 10，面積 50。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標平面中的長方形與面積」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "m>1 確保 2m 在 2 上方，高為 2m-2。",
      "alternateReading": "常見誤讀是「把右上角 y=2m 與左下 y=2 直接相乘。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需建立代數邊長與面積方程式，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需會一元一次方程式。",
    "languageCheck": "題幹所求為「含參數長方形面積」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「軸平行長方形的左下角為 (m,2)，右上角為 (m+5,2m)。若面積為 30 且 m>1，求 m。」重新依序處理：寬=5，高=2m-2。面積 5(2m-2)=30，得 2m-2=6，m=4。 正確選項為「4」。三個干擾項均對應不同錯誤：「2」不成立，高 2，面積 10。；「3」不成立，高 4，面積 20。；「6」不成立，高 10，面積 50。。邊界審查：m>1 確保 2m 在 2 上方，高為 2m-2。 難度理由：需建立代數邊長與面積方程式，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s007-v009",
    "contentSha256": "f1fe2f53bec201a45d3e030cb222161b91fb5a9d292f560a3e6e3613fc651340",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "寬=8，高=(b+5)-b=5，面積固定為 40，與 b 的值無關，所以任意 b 都可。",
    "derivedAnswer": "條件一致，任意 b 都可",
    "storedAnswer": "條件一致，任意 b 都可",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      false,
      true
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「條件一致，任意 b 都可」；其餘三項逐項檢查：「只能 b=0」不成立，面積不要求圖形貼 x 軸。；「只能 b=5」不成立，無此限制。；「不存在這樣的長方形」不成立，8×5 正好為 40。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標平面中的長方形與面積」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "坐標分量、距離或面積單位依題意一致；沒有把點坐標誤寫成單一數值。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "b 可為任意實數，長方形仍軸平行且邊長正。",
      "alternateReading": "常見誤讀是「認為面積會決定長方形在平面上的絕對位置。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需理解參數代表整體垂直平移而非邊長變化，屬進階。",
    "literacyContextNecessity": null,
    "prerequisiteCheck": "需理解坐標差消去共同平移量。",
    "languageCheck": "題幹所求為「辨認平移不改變面積」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「一個軸平行長方形面積為 40，四個頂點的 x 坐標只有 -1 與 7，y 坐標只有 b 與 b+5。下列敘述何者正確？」重新依序處理：寬=8，高=(b+5)-b=5，面積固定為 40，與 b 的值無關，所以任意 b 都可。 正確選項為「條件一致，任意 b 都可」。三個干擾項均對應不同錯誤：「只能 b=0」不成立，面積不要求圖形貼 x 軸。；「只能 b=5」不成立，無此限制。；「不存在這樣的長方形」不成立，8×5 正好為 40。。邊界審查：b 可為任意實數，長方形仍軸平行且邊長正。 難度理由：需理解參數代表整體垂直平移而非邊長變化，屬進階。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s007-v010",
    "contentSha256": "c9cec9acbbad160de81cdf279069cfcddf1ee0950eae46ea6fa5b74b87cd19dc",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "地圖寬 6 格、高 5 格。實際寬 12 公尺、高 10 公尺，面積 120 平方公尺。",
    "derivedAnswer": "120 平方公尺",
    "storedAnswer": "120 平方公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      true,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「120 平方公尺」；其餘三項逐項檢查：「30 平方公尺」不成立，只算格數面積。；「60 平方公尺」不成立，只把面積乘一次 2。；「240 平方公尺」不成立，多乘一次 2。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標平面中的長方形與面積」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "兩邊各乘 2；面積單位為平方公尺。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "題幹明定每格在水平、垂直方向皆為2公尺，且花圃為軸平行長方形。",
      "alternateReading": "常見誤讀是「面積比例只乘一次，而不是兩個邊長都換算。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需要平方尺度換算，情境比例不可刪除。",
    "literacyContextNecessity": "每格 2 公尺使面積從 30 格²變為 120 平方公尺，比例資訊直接影響答案。",
    "prerequisiteCheck": "需會長方形面積與比例。",
    "languageCheck": "題幹所求為「地圖比例下的長方形實際面積」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「社區花圃是邊與坐標軸平行的長方形，地圖上對角點為(-1,2)與(5,7)，且水平、垂直方向每格皆代表2公尺。花圃實際面積是多少？」重新依序處理：地圖寬 6 格、高 5 格。實際寬 12 公尺、高 10 公尺，面積 120 平方公尺。 正確選項為「120 平方公尺」。三個干擾項均對應不同錯誤：「30 平方公尺」不成立，只算格數面積。；「60 平方公尺」不成立，只把面積乘一次 2。；「240 平方公尺」不成立，多乘一次 2。。邊界審查：題幹明定每格在水平、垂直方向皆為2公尺，且花圃為軸平行長方形。 難度理由：需要平方尺度換算，情境比例不可刪除。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s007-v011",
    "contentSha256": "4e04bd4f3074d618151f254be14eb7e682e7c27b4800704dba722b0fdb1742be",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "格線寬 7、高 5，周長 2(7+5)=24 單位；每單位 0.5 公尺，所以 12 公尺。",
    "derivedAnswer": "12 公尺",
    "storedAnswer": "12 公尺",
    "answerMatch": true,
    "optionTruth": [
      false,
      false,
      true,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「12 公尺」；其餘三項逐項檢查：「6 公尺」不成立，少算一半周長。；「17 公尺」不成立，把邊界數值直接相加。；「24 公尺」不成立，未換算實際尺度。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標平面中的長方形與面積」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "24 坐標單位×0.5 公尺/單位。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "四條界線形成軸平行長方形。",
      "alternateReading": "常見誤讀是「計算出格線周長後忘記單位比例。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需辨認四條邊界、算周長並換算。",
    "literacyContextNecessity": "攤位施工需要實際公尺；0.5 公尺/單位不可省略。",
    "prerequisiteCheck": "需會坐標差與周長。",
    "languageCheck": "題幹所求為「由邊界線求實際周長」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「展覽攤位邊界為 x=-3、x=4、y=1、y=6，每坐標單位 0.5 公尺。要繞攤位一圈需走多少公尺？」重新依序處理：格線寬 7、高 5，周長 2(7+5)=24 單位；每單位 0.5 公尺，所以 12 公尺。 正確選項為「12 公尺」。三個干擾項均對應不同錯誤：「6 公尺」不成立，少算一半周長。；「17 公尺」不成立，把邊界數值直接相加。；「24 公尺」不成立，未換算實際尺度。。邊界審查：四條界線形成軸平行長方形。 難度理由：需辨認四條邊界、算周長並換算。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u05-s007-v012",
    "contentSha256": "322d1103a02086eace100a56071eefcbadcdd10e5a897ab47705dafec2a19f76",
    "reviewVersion": "human-review-u05-r1.0",
    "independentSolution": "寬 8 單位、高 6 單位；實際寬 160 像素、高 120 像素，面積 160×120=19200。",
    "derivedAnswer": "19200 平方像素",
    "storedAnswer": "19200 平方像素",
    "answerMatch": true,
    "optionTruth": [
      true,
      false,
      false,
      false
    ],
    "uniqueCorrectAnswer": true,
    "ambiguityChecks": {
      "secondCorrectAnswer": "重新計算得到「19200 平方像素」；其餘三項逐項檢查：「48 平方像素」不成立，只算坐標單位面積。；「960 平方像素」不成立，只將 48 乘一次 20。；「38400 平方像素」不成立，多乘 2。",
      "undefinedSymbol": "本題只使用本技能已介紹的坐標、象限、距離或一次方程式記號；所有記號均在「坐標平面中的長方形與面積」講義中定義，坐標固定以 (x,y) 表示。",
      "unitConflict": "8×20=160 像素，6×20=120 像素，面積平方像素。",
      "roundingConflict": "本題使用精確整數、分數或坐標，不需要四捨五入。",
      "domainBoundary": "題目只使用坐標差，不依賴螢幕 y 正向方向。",
      "alternateReading": "常見誤讀是「沒有把兩個方向都換算成像素。」；依題幹完整條件重算後不會形成另一個正確答案。"
    },
    "difficultyReason": "需處理畫面 y 方向數值由上到下減少，但邊長仍取絕對差，並做平方尺度換算。",
    "literacyContextNecessity": "像素比例與選取框角點是數位介面中的實際資訊，決定儲存區域大小。",
    "prerequisiteCheck": "需會絕對差與面積。",
    "languageCheck": "題幹所求為「計算螢幕框的像素面積」，方向、軸名、截距值或交點坐標均有明確指稱。",
    "reviewerDecision": "pass",
    "reviewerNote": "針對「螢幕選取框左上角為 (2,9)，右下角為 (10,3)。若每單位代表 20 像素，選取框共有多少平方像素？」重新依序處理：寬 8 單位、高 6 單位；實際寬 160 像素、高 120 像素，面積 160×120=19200。 正確選項為「19200 平方像素」。三個干擾項均對應不同錯誤：「48 平方像素」不成立，只算坐標單位面積。；「960 平方像素」不成立，只將 48 乘一次 20。；「38400 平方像素」不成立，多乘 2。。邊界審查：題目只使用坐標差，不依賴螢幕 y 正向方向。 難度理由：需處理畫面 y 方向數值由上到下減少，但邊長仍取絕對差，並做平方尺度換算。",
    "reviewedAt": "2026-07-12",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const DRAWING_SPECS = [];
