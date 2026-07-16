// SERIALIZATION OF REVIEWED HUMAN CONTENT. DO NOT EDIT OR ACTIVATE DIRECTLY.
export const LECTURE = {
  "lectureId": "u02-s007-lecture-r1",
  "unitId": "u02",
  "topicId": "u02-factors-apps",
  "skillId": "fraction-lcm-application",
  "title": "最小公倍數應用：用共同週期處理再次同步與等待時間",
  "audience": "國中零基礎至會考滿分",
  "reviewStatus": "independently-reviewed",
  "learningOutcomes": [
    "能從『再次同時』『下一次共同』辨認LCM模型。",
    "能把LCM分鐘數換成實際時刻。",
    "能計算指定區間內的同步次數。",
    "能處理三個以上週期與不含起點的條件。"
  ],
  "prerequisites": [
    {
      "skillId": "fraction-gcd-application",
      "requiredLevel": "能區分最大分組的GCD模型與共同週期的LCM模型。"
    }
  ],
  "glossary": [
    {
      "term": "週期",
      "definition": "事件每隔固定時間重複一次。"
    },
    {
      "term": "共同起點",
      "definition": "多事件在同一時刻同時發生。"
    },
    {
      "term": "同步",
      "definition": "多個週期在同一時刻重合。"
    },
    {
      "term": "等待時間",
      "definition": "從指定到達時刻到下一同步時刻的差。"
    }
  ],
  "notation": [
    {
      "symbol": "T=lcm(t₁,t₂,…)",
      "meaning": "共同週期T。"
    }
  ],
  "conceptNarrative": [
    "週期事件從共同起點出發後，各自發生在週期的整數倍時刻。要找第一次「再次」同時發生，經過時間必須是所有週期的共同倍數，而且要取最小正值，也就是 LCM。",
    "若題目問實際鐘點，求得分鐘或小時後還要加回起始時刻，並正確處理跨小時、跨中午或隔天。若問某事件在下一次同步前發生幾次，可用共同週期除以該事件週期。",
    "區間計數要特別讀清起點與終點是否包含。『再同時』通常不算第零時刻；終點若包含，只有當它確實是共同週期倍數才計入。列出正倍數比只做除法更能防止邊界錯誤。"
  ],
  "formalDefinitions": [
    {
      "name": "下一同步時刻",
      "statement": "共同起點加上最小正共同週期。"
    },
    {
      "name": "同步次數",
      "statement": "區間中正LCM倍數的個數，依端點規則調整。"
    }
  ],
  "formulas": [
    {
      "formula": "共同週期=lcm(各週期)",
      "conditions": [
        "各週期使用同一時間單位"
      ],
      "meaning": "第一次再次同步的間隔。"
    }
  ],
  "nonApplicableCases": [
    "事件不是固定週期時不能直接用LCM。",
    "起始時刻不同且沒有共同起點時需先建立同餘條件，本節不作深題。",
    "只問某一事件次數時未必需LCM。",
    "分鐘與小時要統一。"
  ],
  "method": [
    {
      "step": 1,
      "instruction": "列出所有事件週期與共同起始時刻，將秒、分鐘、小時或天統一單位。",
      "check": "每個事件都已列入，沒有把起始鐘點誤當成週期。"
    },
    {
      "step": 2,
      "instruction": "求所有週期的最小公倍數，得到第一次再次同步的經過時間。",
      "check": "結果可被每個週期整除，且沒有更小的正共同倍數。"
    },
    {
      "step": 3,
      "instruction": "若問實際時刻，將共同週期加回起始時刻並完成進位或跨日。",
      "check": "六十分鐘換一小時、二十四小時換一天的轉換正確。"
    },
    {
      "step": 4,
      "instruction": "若問區間內次數，從第一個正 LCM 倍數逐一列到終點。",
      "check": "起點是否排除、終點是否包含都依題目文字處理。"
    },
    {
      "step": 5,
      "instruction": "將每個列出的同步時刻分別除以各週期，做整除驗證。",
      "check": "最後一個列入值符合範圍，下一個倍數確實超出範圍。"
    }
  ],
  "workedExamples": [
    {
      "exampleId": "u02-s007-example-a",
      "prompt": "兩個提示音每 9、15 分鐘響一次，現在同時響，何時再同步？",
      "solutionSteps": [
        "計算 lcm(9,15)=45，取得第一次再次同步的經過時間。",
        "驗算 45÷9=5、45÷15=3，兩個週期都在完整次數後重合。"
      ],
      "answer": "45 分鐘後。",
      "why": "再次同步時間必須同時是九與十五的倍數，第一次重合取最小公倍數四十五。四十五除以九得五、除以十五得三，因此兩個提示音都正好回到週期點。"
    },
    {
      "exampleId": "u02-s007-example-b",
      "prompt": "上午 8:20 同時啟動的兩設備每 18、24 分鐘重啟，下次同時重啟是何時？",
      "solutionSteps": [
        "求 lcm(18,24)=72 分鐘，得到再次共同重啟的最短間隔。",
        "將七十二分鐘加到上午八點二十分，先加一小時再加十二分鐘。"
      ],
      "answer": "上午 9:32。",
      "why": "十八與二十四的最小公倍數是七十二分鐘。從八點二十分加一小時十二分鐘，先到九點二十分再加十二分鐘，得到九點三十二分。"
    },
    {
      "exampleId": "u02-s007-example-c",
      "prompt": "每 10、15 分鐘同步一次的事件，在 90 分鐘內含終點、不含起點，共同步幾次？",
      "solutionSteps": [
        "計算共同週期 lcm(10,15)=30 分鐘。",
        "從第一個正倍數列出 30、60、90，排除零且納入符合條件的終點。"
      ],
      "answer": "3 次。",
      "why": "共同週期為三十分鐘。排除第零分鐘後，不超過九十分鐘的正倍數是三十、六十、九十；終點九十本身是共同倍數，所以應計入，共三次。"
    },
    {
      "exampleId": "u02-s007-example-d",
      "prompt": "兩盞燈每 14、21 秒同時閃一次，起點不計，前 100 秒內共重合幾次？",
      "solutionSteps": [
        "求 lcm(14,21)=42 秒，確定共同閃爍間隔。",
        "列出不超過一百的正倍數 42、84，下一個 126 已超出範圍。"
      ],
      "answer": "2 次。",
      "why": "兩盞燈再次重合的最短間隔是四十二秒。起點不計後，前一百秒內只有四十二與八十四兩個正倍數，因此共同閃爍兩次。"
    }
  ],
  "commonMistakes": [
    {
      "mistake": "把各週期相加當成再次同步時間。",
      "correction": "同步時間必須同時被每個週期整除，應求最小公倍數並逐一驗證。"
    },
    {
      "mistake": "直接取最大的週期，沒有檢查它是否也是其他週期的倍數。",
      "correction": "只有較大週期能被其餘週期整除時才可能是 LCM，否則必須繼續找。"
    },
    {
      "mistake": "求得共同分鐘數後，未加回起始鐘點。",
      "correction": "題目問時刻時要做鐘點加法，並處理六十分進位與跨日。"
    },
    {
      "mistake": "把現在的共同起點也算成『再』一次。",
      "correction": "不含起點時從第一個正 LCM 倍數開始列舉。"
    },
    {
      "mistake": "看到終點寫包含就直接計入，未檢查它是否為共同時刻。",
      "correction": "終點只有在是所有週期的共同倍數時才能算一次。"
    },
    {
      "mistake": "秒與分鐘的週期未統一單位便直接求最小公倍數。",
      "correction": "先把所有週期換成同一時間單位，再求共同週期並換回題目所需表示。"
    }
  ],
  "selfCheck": [
    "各事件真的固定週期嗎？",
    "共同起點是何時？",
    "LCM是否除得盡所有週期？",
    "實際時刻是否換算正確？",
    "起點與終點計數規則是否清楚？"
  ],
  "summary": [
    "再次同步的時間差是各週期LCM。",
    "鐘點題要把間隔加回起點。",
    "次數題列LCM的正倍數。",
    "多週期要全部納入。"
  ],
  "connections": {
    "previous": "先備技能為 fraction-gcd-application，需能完成其基本判斷與計算。",
    "next": [
      "分數大小比較將轉入有理數運算。",
      "綜合素養題會結合週期與到場等待。"
    ]
  },
  "practiceLinks": {
    "mcQuestionIds": [
      "u02-s007-v001",
      "u02-s007-v002",
      "u02-s007-v003",
      "u02-s007-v004",
      "u02-s007-v005",
      "u02-s007-v006",
      "u02-s007-v007",
      "u02-s007-v008",
      "u02-s007-v009",
      "u02-s007-v010",
      "u02-s007-v011",
      "u02-s007-v012"
    ],
    "constructedResponseIds": [
      "u02-s007-cr001",
      "u02-s007-cr002"
    ]
  },
  "lectureReview": {
    "mathematicalCorrectness": "pass",
    "zeroFoundationReadability": "pass",
    "scopeCheck": "junior-high CAP scope",
    "examplesNotCopiedFromBank": true,
    "minimumCommonMistakesMet": true,
    "symbolDefinitionsComplete": true,
    "reviewNote": "逐一將共同週期除以每個原週期驗證，並重建所有鐘面時刻與區間端點；180分鐘、48秒倍數與11:00時刻均無提前同步。",
    "reviewVersion": "human-lecture-review-r3.0",
    "reviewedAt": "2026-07-12"
  },
  "contentSha256": "1de320109d5cf1d82bed30b26f6d86d12fa77f3ea537b7adf466cccc036ef3c2",
  "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
};

export const QUESTIONS = [
  {
    "questionId": "u02-s007-v001",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors-apps",
    "skillId": "fraction-lcm-application",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "甲鐘每 4 分鐘響一次，乙鐘每 6 分鐘響一次。現在同時響，幾分鐘後第一次再同時響？",
    "choices": [
      "12 分鐘",
      "10 分鐘",
      "18 分鐘",
      "24 分鐘"
    ],
    "answerIndex": 0,
    "explanation": "再次同時響的經過時間必須同時是四分鐘與六分鐘的倍數，第一次重合要取最小公倍數。四與六的最小公倍數是十二，所以十二分鐘後第一次再同時響。",
    "steps": [
      "把兩個響鈴週期列為 4 分鐘與 6 分鐘。",
      "求 lcm(4,6)=12，確認 12 是兩週期最早的正共同倍數。",
      "因題目問從現在起多久，所以答案為 12 分鐘後。"
    ],
    "optionAnalysis": [
      {
        "choice": "12 分鐘",
        "truth": true,
        "reason": "12是最早共同時刻。"
      },
      {
        "choice": "10 分鐘",
        "truth": false,
        "reason": "10不是4或6共同倍數。"
      },
      {
        "choice": "18 分鐘",
        "truth": false,
        "reason": "18不是4的倍數。"
      },
      {
        "choice": "24 分鐘",
        "truth": false,
        "reason": "24較晚。"
      }
    ],
    "commonMistake": "把兩個週期直接相加成十分鐘，卻未檢查十分鐘不是四的倍數。",
    "concept": "同步時間是週期的 LCM。",
    "tags": [
      "數與量",
      "最小公倍數應用",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-gcd-application"
    ],
    "authoringIntent": "辨認雙週期同步。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "d3119ccd399c92122c6abe8dcbe9000f50f26a7395f51fd9df018d78c56c1a54",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s007-v002",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors-apps",
    "skillId": "fraction-lcm-application",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "A 車每 10 分鐘一班，B 車每 15 分鐘一班，上午 7:00 同時發車。下一次同時發車是何時？",
    "choices": [
      "7:15",
      "7:30",
      "7:45",
      "8:00"
    ],
    "answerIndex": 1,
    "explanation": "兩班車下一次同時發車的等待時間為十與十五的最小公倍數三十分鐘。從上午七時整加三十分鐘得到七時三十分，因此下一次同時發車是七點半。",
    "steps": [
      "求班距 10 與 15 的最小公倍數 lcm(10,15)=30 分鐘。",
      "確認三十分鐘同時是十的三倍與十五的兩倍。",
      "將 30 分鐘加回 7:00，得到 7:30。"
    ],
    "optionAnalysis": [
      {
        "choice": "7:15",
        "truth": false,
        "reason": "15分鐘不是10的倍數。"
      },
      {
        "choice": "7:30",
        "truth": true,
        "reason": "30分鐘後是7:30。"
      },
      {
        "choice": "7:45",
        "truth": false,
        "reason": "45不是10的倍數。"
      },
      {
        "choice": "8:00",
        "truth": false,
        "reason": "60分鐘不是最早。"
      }
    ],
    "commonMistake": "只取較大的十五分鐘，沒有檢查七點十五分並非十分鐘班距的發車時刻。",
    "concept": "求 LCM 後要換算成時刻。",
    "tags": [
      "數與量",
      "最小公倍數應用",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-gcd-application"
    ],
    "authoringIntent": "由週期求下一共同時刻。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "6b1d6c94f1b8a2a0d158e31ab1c12517b71f5bfa3e47b1a0c16382fff8c8cd18",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s007-v003",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors-apps",
    "skillId": "fraction-lcm-application",
    "difficulty": "basic",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "三盞燈分別每 3、4、6 秒閃一次，現在同時閃。最少幾秒後再同時閃？",
    "choices": [
      "6 秒",
      "8 秒",
      "12 秒",
      "24 秒"
    ],
    "answerIndex": 2,
    "explanation": "三盞燈再次同時閃的時間要同時是三、四、六秒的倍數，且題目問最少時間，所以求三數最小公倍數。結果為十二秒，三個週期都能整除十二。",
    "steps": [
      "列出三個閃燈週期 3、4、6 秒。",
      "計算 lcm(3,4,6)=12 秒。",
      "驗算 12÷3=4、12÷4=3、12÷6=2，確定三燈同步。"
    ],
    "optionAnalysis": [
      {
        "choice": "6 秒",
        "truth": false,
        "reason": "6不是4的倍數。"
      },
      {
        "choice": "8 秒",
        "truth": false,
        "reason": "8不是3或6的倍數。"
      },
      {
        "choice": "12 秒",
        "truth": true,
        "reason": "12同時整除三週期。"
      },
      {
        "choice": "24 秒",
        "truth": false,
        "reason": "24較晚。"
      }
    ],
    "commonMistake": "只求三與六的共同時刻六秒，漏看六秒不是四秒週期的倍數。",
    "concept": "三事件同步需三數 LCM。",
    "tags": [
      "數與量",
      "最小公倍數應用",
      "basic"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-gcd-application"
    ],
    "authoringIntent": "辨認三週期同步。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "60160f0ec0d7af8568feffbab789ca155302b673c3cfe4b341a6459da939f6bc",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s007-v004",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors-apps",
    "skillId": "fraction-lcm-application",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "甲每 8 天巡檢一次，乙每 12 天巡檢一次。今天共同巡檢後，48 天內（不含今天）會共同巡檢幾次？",
    "choices": [
      "1 次",
      "3 次",
      "4 次",
      "2 次"
    ],
    "answerIndex": 3,
    "explanation": "共同巡檢週期是八與十二的最小公倍數二十四天。不含今天但包含四十八天內的端點，共同日為第二十四天與第四十八天，因此共有兩次。",
    "steps": [
      "求 lcm(8,12)=24，得到每隔 24 天共同巡檢。",
      "列出不含第 0 天且不超過 48 天的正倍數 24、48。",
      "計數兩個共同日，答案為 2 次。"
    ],
    "optionAnalysis": [
      {
        "choice": "1 次",
        "truth": false,
        "reason": "只算第24天。"
      },
      {
        "choice": "3 次",
        "truth": false,
        "reason": "多算一個不存在時刻。"
      },
      {
        "choice": "4 次",
        "truth": false,
        "reason": "把每12天都算共同。"
      },
      {
        "choice": "2 次",
        "truth": true,
        "reason": "第24與48天，共2次。"
      }
    ],
    "commonMistake": "把今天也算一次，或漏掉題目範圍內的第四十八天端點。",
    "concept": "共同時刻是 LCM 的倍數，需依區間計數。",
    "tags": [
      "數與量",
      "最小公倍數應用",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-gcd-application"
    ],
    "authoringIntent": "計數區間內同步次數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "5da402f2b4e0fbea08a91116accafc7fafee38e46427372eebe4fa0d7c7b46fe",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s007-v005",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors-apps",
    "skillId": "fraction-lcm-application",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "兩個齒輪標記分別每轉 18 齒、24 齒回到起點。至少經過幾齒位置後兩標記再同時回起點？",
    "choices": [
      "72 齒",
      "48 齒",
      "96 齒",
      "144 齒"
    ],
    "answerIndex": 0,
    "explanation": "兩個標記同時回到起點所經齒數要同時是十八與二十四的倍數，最早重合取最小公倍數七十二。七十二分別是十八的四倍、二十四的三倍。",
    "steps": [
      "把兩個回到起點的週期列為 18 齒與 24 齒。",
      "計算 lcm(18,24)=72 齒。",
      "驗算 72÷18=4、72÷24=3，確認兩標記同時回起點。"
    ],
    "optionAnalysis": [
      {
        "choice": "72 齒",
        "truth": true,
        "reason": "72同時為兩週期倍數且最小。"
      },
      {
        "choice": "48 齒",
        "truth": false,
        "reason": "48不是18的倍數。"
      },
      {
        "choice": "96 齒",
        "truth": false,
        "reason": "96不是18的倍數。"
      },
      {
        "choice": "144 齒",
        "truth": false,
        "reason": "144較晚。"
      }
    ],
    "commonMistake": "直接選兩週期中較大的二十四，沒有確認二十四並非十八的倍數。",
    "concept": "機械週期重合仍使用 LCM。",
    "tags": [
      "數與量",
      "最小公倍數應用",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-gcd-application"
    ],
    "authoringIntent": "求旋轉週期重合。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "557e7549ce48fc0f5dab19de7a58884299b9d097476e8ed5d343e240824c9f65",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s007-v006",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors-apps",
    "skillId": "fraction-lcm-application",
    "difficulty": "standard",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "A 活動每 14 天舉行，B 活動每 21 天舉行。兩活動今天同日舉行，下一次同日後，A 共舉行幾次（含下一次同日那次，不含今天）？",
    "choices": [
      "2 次",
      "3 次",
      "4 次",
      "6 次"
    ],
    "answerIndex": 1,
    "explanation": "兩活動下一次同日的等待時間是十四與二十一的最小公倍數四十二天。A 每十四天一次，在第十四、二十八、四十二天舉行，含下一次同日且不含今天，共三次。",
    "steps": [
      "計算 lcm(14,21)=42，得到下一次同日為第 42 天。",
      "列出 A 在這段期間的時刻 14、28、42 天。",
      "依題意不算今天但包含第 42 天，計得 3 次。"
    ],
    "optionAnalysis": [
      {
        "choice": "2 次",
        "truth": false,
        "reason": "只算42前的兩次。"
      },
      {
        "choice": "3 次",
        "truth": true,
        "reason": "第14、28、42天共3次。"
      },
      {
        "choice": "4 次",
        "truth": false,
        "reason": "4次需56天。"
      },
      {
        "choice": "6 次",
        "truth": false,
        "reason": "6次需84天。"
      }
    ],
    "commonMistake": "只數下一次同日前的第十四與二十八天，漏掉題目明確包含第四十二天那次。",
    "concept": "共同週期除以單一週期可求期間發生次數。",
    "tags": [
      "數與量",
      "最小公倍數應用",
      "standard"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-gcd-application"
    ],
    "authoringIntent": "由同步週期求事件次數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "1fb8551d1bae339c0c518b743f587344e31a1ff63bee80dba2eece785a729439",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s007-v007",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors-apps",
    "skillId": "fraction-lcm-application",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "甲機器每 12 分鐘停機檢查，乙每 18 分鐘停機檢查。上午 9:00 同時檢查；到中午 12:00 前（不含12:00），再同時檢查幾次？",
    "choices": [
      "3 次",
      "5 次",
      "4 次",
      "6 次"
    ],
    "answerIndex": 2,
    "explanation": "共同檢查週期為十二與十八的最小公倍數三十六分鐘。九點後在九點三十六、十點十二、十點四十八、十一點二十四共同檢查；十二點整不包含，共四次。",
    "steps": [
      "求 lcm(12,18)=36 分鐘。",
      "列出 9:00 後且早於 12:00 的共同時刻 9:36、10:12、10:48、11:24。",
      "下一個 12:00 被題目排除，因此共有 4 次。"
    ],
    "optionAnalysis": [
      {
        "choice": "3 次",
        "truth": false,
        "reason": "漏算一個時刻。"
      },
      {
        "choice": "5 次",
        "truth": false,
        "reason": "多算12:00或非共同時刻。"
      },
      {
        "choice": "4 次",
        "truth": true,
        "reason": "四個時刻正確。"
      },
      {
        "choice": "6 次",
        "truth": false,
        "reason": "把每30分鐘估算。"
      }
    ],
    "commonMistake": "把十二點整也列入，忽略題目寫明到十二點前且不含十二點。",
    "concept": "同步時刻依共同週期逐一列出。",
    "tags": [
      "數與量",
      "最小公倍數應用",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-gcd-application"
    ],
    "authoringIntent": "區間同步計數。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "8dcd04f78deb945f253fda50ab3ee0ebe33d0e9eb44f52231c83b74aeb2effef",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s007-v008",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors-apps",
    "skillId": "fraction-lcm-application",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "三項維護週期為 20、30、45 天，今天同時維護。最少幾天後再同時維護？",
    "choices": [
      "90 天",
      "120 天",
      "150 天",
      "180 天"
    ],
    "answerIndex": 3,
    "explanation": "三項維護再次同步所需天數是二十、三十、四十五的最小公倍數。質因數最高次方為二平方、三平方與五，相乘得到一百八十天。",
    "steps": [
      "分解 20=2²×5、30=2×3×5、45=3²×5。",
      "各質因數取最高次方，列出 2²×3²×5。",
      "計算得到 lcm(20,30,45)=180 天。"
    ],
    "optionAnalysis": [
      {
        "choice": "90 天",
        "truth": false,
        "reason": "90不是20的倍數。"
      },
      {
        "choice": "120 天",
        "truth": false,
        "reason": "120不是45的倍數。"
      },
      {
        "choice": "150 天",
        "truth": false,
        "reason": "150不是20或45共同倍數。"
      },
      {
        "choice": "180 天",
        "truth": true,
        "reason": "180同時符合。"
      }
    ],
    "commonMistake": "只計算其中兩個週期的最小公倍數，未檢查第三個四十五天週期。",
    "concept": "多週期取所有質因數最大指數。",
    "tags": [
      "數與量",
      "最小公倍數應用",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-gcd-application"
    ],
    "authoringIntent": "求三週期大型同步。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a2a39aff8b0807006cf10fcb336e57ad38413a078429f2a660c1da2665bcf054",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s007-v009",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors-apps",
    "skillId": "fraction-lcm-application",
    "difficulty": "advanced",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "A 每 16 分鐘一次，B 每 24 分鐘一次。兩者同時開始後，在第 240 分鐘以前（含240）共有幾次同時發生？不含起點。",
    "choices": [
      "5 次",
      "4 次",
      "6 次",
      "8 次"
    ],
    "answerIndex": 0,
    "explanation": "共同週期是十六與二十四的最小公倍數四十八分鐘。不含起點且包含第二百四十分鐘，正倍數為四十八、九十六、一百四十四、一百九十二、二百四十，共五次。",
    "steps": [
      "計算 lcm(16,24)=48 分鐘。",
      "列出不超過 240 的正倍數 48、96、144、192、240。",
      "起點第 0 分鐘不計，五個正倍數均符合，所以答案 5 次。"
    ],
    "optionAnalysis": [
      {
        "choice": "5 次",
        "truth": true,
        "reason": "共有5次。"
      },
      {
        "choice": "4 次",
        "truth": false,
        "reason": "漏算240會得4次。"
      },
      {
        "choice": "6 次",
        "truth": false,
        "reason": "把每40分鐘估算會錯。"
      },
      {
        "choice": "8 次",
        "truth": false,
        "reason": "8次不是48的倍數個數。"
      }
    ],
    "commonMistake": "把第二百四十分鐘端點排除，只數前四個共同時刻而少算一次。",
    "concept": "用 floor(上限÷LCM) 可計數，並依題意處理起點。",
    "tags": [
      "數與量",
      "最小公倍數應用",
      "advanced"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-gcd-application"
    ],
    "authoringIntent": "精確計數同步事件。",
    "literacyContextNecessity": null,
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "279e95bc0ddba72cd22a790b0ed1f2c55d52b29efb03b657ca6f7ecbb2b4faad",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s007-v010",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors-apps",
    "skillId": "fraction-lcm-application",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "藥物 A 每 6 小時服一次，B 每 8 小時服一次。早上 6:00 同時服用，下一次同時服用是何時？",
    "choices": [
      "當晚 8:00",
      "隔天早上 6:00",
      "隔天中午 12:00",
      "當晚 10:00"
    ],
    "answerIndex": 1,
    "explanation": "兩種藥物再次同時服用的間隔為六與八小時的最小公倍數二十四小時。早上六點經過完整二十四小時，就是隔天早上六點。",
    "steps": [
      "求 lcm(6,8)=24 小時。",
      "確認二十四小時分別是六小時的四倍、八小時的三倍。",
      "由早上 6:00 加 24 小時，得到隔天早上 6:00。"
    ],
    "optionAnalysis": [
      {
        "choice": "當晚 8:00",
        "truth": false,
        "reason": "14小時後並非共同週期。"
      },
      {
        "choice": "隔天早上 6:00",
        "truth": true,
        "reason": "24小時後正確。"
      },
      {
        "choice": "隔天中午 12:00",
        "truth": false,
        "reason": "30小時不是最早。"
      },
      {
        "choice": "當晚 10:00",
        "truth": false,
        "reason": "16小時只符合8小時週期。"
      }
    ],
    "commonMistake": "只取較大週期八小時，卻未檢查八小時後不符合六小時服藥週期。",
    "concept": "用藥同步需以小時週期 LCM 換算時刻。",
    "tags": [
      "數與量",
      "最小公倍數應用",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-gcd-application"
    ],
    "authoringIntent": "醫療時程同步。",
    "literacyContextNecessity": "服藥間隔、共同起始時刻及下一次要求共同決定24小時後的實際時刻。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "a0c0bd294f590567cf8ad17457962fcf2ed681ada054849314dc62468592e048",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s007-v011",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors-apps",
    "skillId": "fraction-lcm-application",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "自動灑水器 A 每 9 分鐘啟動，B 每 12 分鐘啟動。下午 2:00 同時啟動；下午 3:30 前（含3:30）會再同時啟動幾次？",
    "choices": [
      "1 次",
      "3 次",
      "2 次",
      "4 次"
    ],
    "answerIndex": 2,
    "explanation": "共同啟動週期是九與十二的最小公倍數三十六分鐘。下午兩點後的共同時刻為二點三十六與三點十二；下一次三點四十八已超過三點半，所以共兩次。",
    "steps": [
      "計算 lcm(9,12)=36 分鐘。",
      "從 2:00 起依序加 36 分鐘，得到 2:36、3:12、3:48。",
      "只保留不超過 3:30 的 2:36 與 3:12，共 2 次。"
    ],
    "optionAnalysis": [
      {
        "choice": "1 次",
        "truth": false,
        "reason": "只算第一次。"
      },
      {
        "choice": "3 次",
        "truth": false,
        "reason": "多算3:48。"
      },
      {
        "choice": "2 次",
        "truth": true,
        "reason": "2:36與3:12，共2次。"
      },
      {
        "choice": "4 次",
        "truth": false,
        "reason": "把每18分鐘算共同。"
      }
    ],
    "commonMistake": "把三點四十八也列入，沒有逐一與題目三點半的終點比較。",
    "concept": "先求共同週期，再列實際時刻。",
    "tags": [
      "數與量",
      "最小公倍數應用",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-gcd-application"
    ],
    "authoringIntent": "時段內同步計數。",
    "literacyContextNecessity": "起始時刻、90分鐘區間與兩個灑水週期都參與判斷，不能化成單一無情境算式。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "59586b9da032553a02b4d6f37b69dd3b1032617e1dcf77e1657258665e7ea846",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  },
  {
    "questionId": "u02-s007-v012",
    "unitId": "u02",
    "numericUnitId": 2,
    "topicId": "u02-factors-apps",
    "skillId": "fraction-lcm-application",
    "difficulty": "literacy",
    "type": "mc",
    "visualMode": "text-only",
    "figureId": null,
    "sourceScope": "CAP_108_JUNIOR_MATH",
    "text": "展覽有三段影片，每段分別每 12、15、20 分鐘從頭重播。上午 10:00 同時開始，下一次同時從頭播放是何時？",
    "choices": [
      "10:30",
      "10:40",
      "10:45",
      "11:00"
    ],
    "answerIndex": 3,
    "explanation": "三段影片下一次同時從頭播放的等待時間是十二、十五、二十的最小公倍數六十分鐘。上午十點加六十分鐘等於十一點整。",
    "steps": [
      "計算 lcm(12,15,20)=60 分鐘。",
      "驗算 60 分別是 12 的五倍、15 的四倍、20 的三倍。",
      "將 60 分鐘加回上午 10:00，得到 11:00。"
    ],
    "optionAnalysis": [
      {
        "choice": "10:30",
        "truth": false,
        "reason": "30不是12、20共同倍數。"
      },
      {
        "choice": "10:40",
        "truth": false,
        "reason": "40不是12、15共同倍數。"
      },
      {
        "choice": "10:45",
        "truth": false,
        "reason": "45不是12、20共同倍數。"
      },
      {
        "choice": "11:00",
        "truth": true,
        "reason": "60分鐘後11:00。"
      }
    ],
    "commonMistake": "只看其中兩段影片得到較早時刻，未檢查第三個週期也必須同時整除等待時間。",
    "concept": "三段重播同步使用三數 LCM。",
    "tags": [
      "數與量",
      "最小公倍數應用",
      "literacy"
    ],
    "estimatedTimeSec": "60",
    "prerequisiteSkillIds": [
      "fraction-gcd-application"
    ],
    "authoringIntent": "影音排程同步。",
    "literacyContextNecessity": "三段重播週期與共同起始時間共同決定一小時後的鐘點。",
    "reviewStatus": "independently-reviewed",
    "noTemplateDeclaration": true,
    "contentSha256": "89e46f1b34c33eba81307ef920e557131333f66839eac75b270166e1567693a1",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1"
  }
];

export const CONSTRUCTED_RESPONSES = [
  {
    "questionId": "u02-s007-cr001",
    "unitId": "u02",
    "topicId": "u02-factors-apps",
    "skillId": "fraction-lcm-application",
    "difficulty": "standard",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "三種裝置分別每 12、18、30 分鐘檢查一次，上午 8:00 同時檢查。求下一次同時檢查的時刻。",
    "requiredWork": [
      "求三數LCM。",
      "把分鐘加回8:00。"
    ],
    "fullCreditSolution": [
      "分解週期：12=2²×3、18=2×3²、30=2×3×5。",
      "各質因數取最高次方，LCM=2²×3²×5=180 分鐘，也就是三小時；三個週期都能整除一百八十分鐘。",
      "上午 8:00 加三小時得到 11:00，因此下一次同時檢查是上午十一時。"
    ],
    "alternativeSolutions": [
      "可列倍數交集，但須證明最早。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "LCM=180與11:00均正確。"
      },
      {
        "score": 2,
        "criteria": "共同間隔正確但時刻換算小錯。"
      },
      {
        "score": 1,
        "criteria": "找到共同倍數但非最小。"
      },
      {
        "score": 0,
        "criteria": "只取最大週期30分鐘。"
      }
    ],
    "scoringNotes": [
      "不計8:00本身，因為問下一次。"
    ],
    "commonErrors": [
      "只求其中兩個週期的最小公倍數，沒有確認第三個三十分鐘週期。",
      "把一百八十分鐘錯換成一小時八十分，導致鐘點加法錯誤。",
      "求得一百八十分鐘後直接作答，漏掉題目要求的是實際時刻。"
    ],
    "independentReview": {
      "derivedResult": "上午11:00。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "8cebbcd224689be25ac77e54612a9f6e2e98c0595437e807367e6a087aa33e64",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reasoningSteps": [
      "將三個裝置週期統一為分鐘並做質因數分解。",
      "求三數最小公倍數，得到再次同步的最短經過時間。",
      "把一百八十分鐘正確換成三小時並加回共同起始時刻。"
    ]
  },
  {
    "questionId": "u02-s007-cr002",
    "unitId": "u02",
    "topicId": "u02-factors-apps",
    "skillId": "fraction-lcm-application",
    "difficulty": "advanced",
    "type": "constructed-response",
    "visualMode": "text-only",
    "figureId": null,
    "prompt": "A燈每 16 秒閃一次，B燈每 24 秒閃一次。兩燈在第0秒同時閃。第 1 秒到第 300 秒之間（含300）同時閃幾次？列出時刻。",
    "requiredWork": [
      "求LCM。",
      "列出不超過300的正倍數。",
      "不計第0秒。"
    ],
    "fullCreditSolution": [
      "兩燈共同週期為 lcm(16,24)=48 秒，因此同時閃的正時刻都是四十八的倍數。",
      "第 1 秒至第 300 秒內依序為 48、96、144、192、240、288 秒。",
      "共有 6 次；第 0 秒依題意不計，下一個 336 秒又已超過 300 秒。"
    ],
    "alternativeSolutions": [
      "可用⌊300/48⌋=6，再列出驗證。"
    ],
    "rubric": [
      {
        "score": 3,
        "criteria": "六個時刻與6次完整。"
      },
      {
        "score": 2,
        "criteria": "次數正確但漏列一個時刻。"
      },
      {
        "score": 1,
        "criteria": "LCM正確但區間計數錯。"
      },
      {
        "score": 0,
        "criteria": "以16或24直接計數。"
      }
    ],
    "scoringNotes": [
      "300不是48倍數，不額外計入。"
    ],
    "commonErrors": [
      "把起始第零秒也算成一次，忽略範圍從第一秒開始。",
      "因三百是區間終點就直接列入，沒有檢查三百不是四十八的倍數。",
      "列到二百四十秒便停止，漏掉仍不超過三百秒的二百八十八秒。"
    ],
    "independentReview": {
      "derivedResult": "48、96、144、192、240、288秒，共6次。",
      "ambiguity": "題意與資料足夠，答案唯一。",
      "decision": "pass"
    },
    "contentSha256": "a92db4e8c41e71fcf15a92ba105551c9f76584edc53d12067d9a2bc0802889fc",
    "contentAuthority": "CHATGPT_HUMAN_AUTHORED_R1",
    "reasoningSteps": [
      "先求兩週期的最小公倍數，建立共同閃爍間隔。",
      "從第一個正倍數開始逐項列到不超過三百秒。",
      "按端點規則排除第零秒，並用下一個倍數確認列舉已完整。"
    ]
  }
];

export const DRAWING_SPECS = [];
