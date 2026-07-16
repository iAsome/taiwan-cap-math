const UNIT_ID = "ENG_R4_U31";

function lecture(id, skillId, content) {
  return { id, skillId, ...content, sections: content.sections.map((section, index) => ({ id: id + "_SEC_" + String(index + 1).padStart(2, "0"), ...section })) };
}

const DIFFICULTIES = ["foundation", "foundation", "foundation", "standard", "standard", "standard", "standard", "advanced", "advanced", "advanced", "transfer", "transfer"];

function skillQuestions(skillNumber, values) {
  if (values.length !== 12) throw new Error("ENG_R4_S" + skillNumber + ": expected 12 authored questions");
  return values.map((value, index) => ({ id: "ENG_R4_Q_" + skillNumber + "_" + String(index + 1).padStart(2, "0"), skillId: "ENG_R4_S" + skillNumber, difficulty: DIFFICULTIES[index], ...value }));
}

function q(stem, options, answerIndex, reasons, reviews, cognitiveProcess, representationType, misconceptionTargets) {
  return { stem, options, answerIndex, reasons, reviews, cognitiveProcess, representationType, misconceptionTargets };
}

export const ENGLISH_U31_LECTURES = [
  lecture("ENG_R4_L_S211", "ENG_R4_S211", {
    objectives: ["能由標示中的物品、服務與動作推斷場所。", "能區分場所名稱、標示功能與讀者下一步行動。"],
    sections: [
      { title: "關鍵字要合起來看", content: "單一字常不足以決定場所。books 可能出現在書店或圖書館，但 return books、quiet reading area 和 library card 合起來，才支持圖書館。先圈出物品、服務與動作，再找能同時解釋這些線索的場所。" },
      { title: "場所和標示用途是兩個問題", content: "Lost and Found 可能設在學校、車站或商場，主要用途都是協助找回遺失物。題目若問 Where would you see this? 才選場所；若問 What is this notice for? 則回答它要提供的服務。" },
      { title: "讀者身分會限制答案", content: "Workers Only 指向工作人員，Visitors Please Sign In 指向訪客。兩個標示都可能在同一棟建築裡，卻要求不同的人採取不同動作，因此不能只靠背景地點判斷。" },
      { title: "不加入標示沒有說的細節", content: "標示寫 Pick up your medicine here，只能推知這裡提供領藥服務；不能自行認定醫師也在此看診。會考閱讀重視可由文字支持的結論，合理但未寫出的資訊仍不能當答案。" },
    ],
    workedExamples: [
      { id: "ENG_R4_L_S211_EX_01", prompt: "Return books here. Library cards ready in five minutes.", steps: ["找出 books 和 library cards。", "辨認 return 與領卡服務。", "選擇同時提供兩項服務的場所。"], answer: "A library service desk.", why: "return books 和 library cards 都直接連到圖書館服務，desk 則指出辦理區。文字沒有提到買書或付款，因此不能判成書店櫃檯。" },
      { id: "ENG_R4_L_S211_EX_02", prompt: "Lost a bag? Ask at the desk beside Gate 3.", steps: ["辨認 lost a bag 的問題。", "找出 ask at the desk 的解決方式。", "以 Gate 3 判斷是大型交通場所。"], answer: "A lost-and-found service near a gate.", why: "這則標示引導遺失物品的人到服務桌詢問，Gate 3 只協助定位。它沒有保證袋子已找到，也沒有要求旅客到第三個登機門搭機。" },
      { id: "ENG_R4_L_S211_EX_03", prompt: "Fresh bread every morning. Cakes made for special days.", steps: ["找出 bread 與 cakes。", "注意 made 和 fresh 描述販售食品。", "推斷最符合的商店類型。"], answer: "A bakery.", why: "每天的新鮮麵包和為特別日子製作的蛋糕，都是麵包店的核心商品。標示沒有提到完整餐點、桌位或服務生，所以不應推成餐廳。" },
    ],
    misconceptions: [
      { belief: "看到 books 就直接選 bookstore。", whyWrong: "圖書館也有書，且 return、borrow、library card 等動作更能決定場所。", correction: "同時比對物品、動作與服務，不用單一名詞下結論。" },
      { belief: "標示在車站出現，答案就一定是搭車。", whyWrong: "車站裡也有失物招領、洗手間與服務櫃檯。", correction: "回答標示實際提供的服務，而不是整棟建築的一般用途。" },
      { belief: "把可能存在的服務都當成文字已證實。", whyWrong: "合理常識不能取代標示中的明確證據。", correction: "答案只能保留關鍵字直接支持的資訊。" },
      { belief: "把 Workers Only 解讀為所有人都能進入的入口。", whyWrong: "Workers 限定了可進入者的身分。", correction: "先找對象限制，再判斷讀者是否符合。" },
    ],
    checks: [
      { prompt: "標示同時寫 borrow books 和 reading room，最可能在哪裡？", answer: "圖書館", reason: "借書和閱覽空間共同支持圖書館。" },
      { prompt: "Lost and Found 的重點是場所名稱還是服務功能？", answer: "服務功能", reason: "它可出現在不同場所，功能都是處理遺失物。" },
      { prompt: "Visitors Please Sign In 要誰採取行動？", answer: "訪客", reason: "Visitors 明確限定公告對象。" },
    ], assets: [],
  }),
  lecture("ENG_R4_L_S212", "ENG_R4_S212", {
    objectives: ["能把禁止、警告與指示標誌轉成正確行動。", "能分辨危險提醒、設備狀態與方向資訊。"],
    sections: [
      { title: "先辨認標誌的功能", content: "No、Do not 和 Keep off 多表示禁止；Be careful、Danger、Watch your step 提醒危險；Exit、Push、Use other door 則提供方向或操作。先分類功能，再回答應做或不應做的動作。" },
      { title: "禁止和警告不完全相同", content: "No swimming 是明確禁止游泳，Wet floor 則告知地面濕滑，讀者仍可小心通過。若把警告誤讀成全面禁止，會加入原文沒有的限制；若把禁止只當提醒，也會忽略規則。" },
      { title: "否定範圍要完整", content: "Do not use this door after 8 p.m. 只限制晚上八點後使用這扇門，不代表全天關閉。No food or drinks 同時涵蓋食物與飲料，不能只遵守其中一半。" },
      { title: "方向字要配合位置與箭頭", content: "Exit left 表示出口在左側，Keep right 要求靠右行進，Push 與 Pull 則告訴開門方式。文字與箭頭同時出現時，要確認兩者指向一致，不憑熟悉的圖案猜測。" },
    ],
    workedExamples: [
      { id: "ENG_R4_L_S212_EX_01", prompt: "BE CAREFUL: Wet floor.", steps: ["Be careful 表示要提高注意。", "wet floor 指出危險來源。", "選擇小心行走而非加入全面封鎖。"], answer: "Walk carefully.", why: "標示提醒地板濕滑，合理行動是放慢並小心通過。它沒有寫 Closed，因此不能斷言這個區域完全禁止進入。" },
      { id: "ENG_R4_L_S212_EX_02", prompt: "PLEASE STAY OFF THE GRASS", steps: ["Stay off 表示不要踏入。", "the grass 是禁止進入的範圍。", "將行動改為使用步道。"], answer: "Do not walk on the grass.", why: "off 要求人離開草地範圍，所以應走其他路線。它不是提醒草地很遠，也不是要求在草地上保持安靜。" },
      { id: "ENG_R4_L_S212_EX_03", prompt: "OUT OF ORDER — Use the machine downstairs.", steps: ["out of order 表示設備不能正常使用。", "破折號後提供替代方案。", "選擇到樓下使用另一台機器。"], answer: "Use another machine downstairs.", why: "第一部分說目前設備故障，第二部分明確引導使用樓下的機器。標示沒有要求學生自行修理，也沒有說整棟樓的機器都停用。" },
    ],
    misconceptions: [
      { belief: "所有警告標示都代表完全禁止進入。", whyWrong: "警告常要求提高注意，不一定封閉空間。", correction: "檢查是否有 No、Closed 或 Do not 等明確禁止語。" },
      { belief: "看到 No 就只否定緊接著的第一個名詞。", whyWrong: "No food or drinks 的否定同時涵蓋並列項目。", correction: "確認連接詞所涵蓋的完整範圍。" },
      { belief: "Out of order 表示設備已修好並可使用。", whyWrong: "它表示設備目前無法正常運作。", correction: "尋找標示提供的替代設備或服務位置。" },
      { belief: "Push 與 Pull 都只是叫人開門，方式不重要。", whyWrong: "使用相反動作會讓門無法順利開啟。", correction: "把操作字直接轉成推或拉的具體動作。" },
    ],
    checks: [
      { prompt: "Do not enter 是警告可能有危險，還是禁止進入？", answer: "禁止進入", reason: "Do not enter 直接否定進入行動。" },
      { prompt: "Mind the step 要讀者注意什麼？", answer: "高低差或階梯", reason: "step 是容易絆倒的地面變化。" },
      { prompt: "Use other door 是否表示所有出口都關閉？", answer: "不是", reason: "它只要求改用另一扇門。" },
    ], assets: [],
  }),
  lecture("ENG_R4_L_S213", "ENG_R4_S213", {
    objectives: ["能整合星期、時刻、日期與例外說明判斷是否可使用服務。", "能區分開始時間、截止時間、最後入場與有效期限。"],
    sections: [
      { title: "先確認日期屬於哪一天", content: "Hours: Mon–Fri 9:00–17:00 表示星期一到五適用同一時段。Saturday 10:00–14:00 若另列一行，就不能沿用平日時段；Closed Sunday 則排除星期日。" },
      { title: "open 和最後入場回答不同問題", content: "The museum closes at 5:00, last time to enter 4:30 表示館舍五點關門，但訪客最晚四點半入場。題目若問 arrive at 4:45，不可只看到 closes at 5:00 就判定能進入。" },
      { title: "期限字決定邊界", content: "by Friday 通常表示最晚星期五完成，before Friday 則要求在星期五以前。Can be used through June 30 包含六月三十日；若只寫 until，實際邊界仍需配合完整標示，不自行延長。" },
      { title: "例外條件優先核對", content: "Closed on public holidays、except Tuesday 或 school days only 都會改變一般時段。先讀主要時間，再找星號、括號或 except 後的例外，才能避免用常態規則回答特殊日期。" },
    ],
    workedExamples: [
      { id: "ENG_R4_L_S213_EX_01", prompt: "Mon–Fri 9:00–17:00; Sat 10:00–14:00; Sun closed. Can Mia visit at 3 p.m. Saturday?", steps: ["Saturday 使用第二行時段。", "3 p.m. 等於 15:00。", "15:00 晚於 14:00。"], answer: "No.", why: "星期六只開到下午兩點，三點到達已超過該日時段。平日五點關門的資訊不能套到星期六。" },
      { id: "ENG_R4_L_S213_EX_02", prompt: "Doors close 18:00. Last time to enter: 17:30. Leo arrives at 17:40.", steps: ["分辨關門與最後入場。", "比較 17:40 和 17:30。", "判斷已錯過入場期限。"], answer: "Leo cannot enter.", why: "雖然門到十八點才關，但最後入場是十七點三十分。Leo 晚到十分鐘，因此不能用尚未關門作為可入場的理由。" },
      { id: "ENG_R4_L_S213_EX_03", prompt: "Use this card by May 12. Today is May 12.", steps: ["by 表示不晚於所列日期。", "今天正是五月十二日。", "確認尚未超過期限。"], answer: "The card can still be used today.", why: "by May 12 把五月十二日列為最後可用日期，今天使用仍在期限內。若標示寫 before May 12，五月十二日就已太晚。" },
    ],
    misconceptions: [
      { belief: "看到建築尚未關門，就一定還能入場。", whyWrong: "last time to enter 可能早於 closing time。", correction: "分別比較抵達時間與最後入場、離場時間。" },
      { belief: "週末自動沿用星期一到五的營業時間。", whyWrong: "週六、週日常有獨立時段或休館。", correction: "先定位星期，再讀同一列的開始與結束時間。" },
      { belief: "before Friday 和 by Friday 都包含星期五整天。", whyWrong: "before 通常排除所列時間點，by 則把它當最後期限。", correction: "用一條時間線標出是否包含邊界。" },
      { belief: "忽略星號後的 holiday 或 except 說明。", whyWrong: "例外可能使一般開放時段在當天不適用。", correction: "讀完所有附註後再判斷。" },
    ],
    checks: [
      { prompt: "Last order 8:30 p.m. 是關門時間嗎？", answer: "不一定", reason: "它只表示最後點餐時間，餐廳可能更晚關門。" },
      { prompt: "before June 1 是否包含六月一日？", answer: "不包含", reason: "before 要求在該日期以前。" },
      { prompt: "Closed Monday except school holidays 中，例外在哪裡？", answer: "學校假日期間", reason: "except 後指出星期一休息規則不適用的情況。" },
    ], assets: [],
  }),
  lecture("ENG_R4_L_S214", "ENG_R4_S214", {
    objectives: ["能讀取票券上的日期、座位、次數與使用限制。", "能依簡短標籤及步驟完成正確使用順序。"],
    sections: [
      { title: "先找票券提供的核心權利", content: "One ride、Seat B12、Adult、Can be used on July 6 分別限制搭乘次數、座位、票種與日期。題目常把其中一項換掉，必須逐欄核對，不能只看到票價或活動名稱。" },
      { title: "條件字決定能否使用", content: "Can be used only on the date on the ticket 表示只能在票面日期使用；Not for sale 表示不可轉售；Keep this ticket until the end 要求使用者保留票券。only、not、until 都會改變行動限制。" },
      { title: "標籤先辨認對象再讀指令", content: "Shake well before use、Keep in a cool place、Use once a day 等說明，分別涉及使用前動作、保存位置和頻率。不要把三種資訊混成同一項要求。" },
      { title: "多步驟說明依編號執行", content: "1. Open the cover. 2. Put in the card. 3. Push Start. 若順序被打亂，設備可能無法運作。閱讀時先找動詞，再確認每一步的受詞與先後關係。" },
    ],
    workedExamples: [
      { id: "ENG_R4_L_S214_EX_01", prompt: "Bus Pass — One ride — Use on July 8 only.", steps: ["找出 ride 次數。", "確認有效日期。", "把 only 套到 July 8。"], answer: "It can be used once on July 8.", why: "票券同時限制一次搭乘與七月八日當天，兩項都要符合。它不能在七月九日使用，也不能因當天仍有效就搭乘兩次。" },
      { id: "ENG_R4_L_S214_EX_02", prompt: "Row C, Seat 14. Please enter through Door 2.", steps: ["Row C 和 Seat 14 指定座位。", "Door 2 指定入口。", "分開處理入場與就座資訊。"], answer: "Use Door 2 and sit in C14.", why: "Door 2 是進場路線，不是座位號；C14 才是座位位置。若把兩個數字互換，會從錯誤入口或坐到錯誤位置。" },
      { id: "ENG_R4_L_S214_EX_03", prompt: "1. Wash your hands. 2. Open the bag. 3. Put on the gloves.", steps: ["依編號確認先後。", "找出 open the bag 前的動作。", "回答 wash your hands。"], answer: "Wash your hands first.", why: "編號一明確要求先洗手，之後才開袋並戴手套。題目不需要推測洗多久，也不能把最後一步因較重要而移到最前面。" },
    ],
    misconceptions: [
      { belief: "票券日期只是印製資訊，任何一天都能使用。", whyWrong: "only 或 use by 會把日期變成使用條件。", correction: "確認日期旁的限制字，再比對實際使用日。" },
      { belief: "Door 4 和 Seat 4 表示同一個位置。", whyWrong: "入口與座位屬於不同欄位。", correction: "保留欄位名稱，不用相同數字合併資訊。" },
      { belief: "看到 one ride 就以為一天可以無限搭乘。", whyWrong: "one 直接限制使用次數。", correction: "把次數限制和日期限制分別記錄。" },
      { belief: "說明步驟可依個人喜好任意交換。", whyWrong: "有些操作必須先完成前一步才能安全或正確進行。", correction: "依編號和 first、then、finally 排出順序。" },
    ],
    checks: [
      { prompt: "For two people 限制的是日期還是人數？", answer: "人數", reason: "two people 明確指出可使用的人數。" },
      { prompt: "Keep away from heat 是使用頻率嗎？", answer: "不是", reason: "它說明保存環境。" },
      { prompt: "Seat A7 中的 A 和 7 都能省略嗎？", answer: "不能", reason: "字母與數字共同指定完整座位。" },
    ], assets: [],
  }),
  lecture("ENG_R4_L_S215", "ENG_R4_S215", {
    objectives: ["能依英文欄位名稱填入正確類型的個人資料。", "能區分姓名、聯絡方式、日期與簽名等相近欄位。"],
    sections: [
      { title: "欄位名稱決定資料類型", content: "First name、Last name、Birthday、Address、Phone number 和 E-mail 各要求不同資料。先把欄位翻成要填的資訊類型，再從資料卡找值，不憑欄位順序猜答案。" },
      { title: "姓名欄要分清前後", content: "英文表格常把 first name 和 last name 分開。以 Amy Chen 為例，Amy 是 first name，Chen 是 last name；若表格寫 Full name，才填入完整姓名。" },
      { title: "聯絡人不等於填表者", content: "Contact person name 和 Contact person phone 要填緊急時可聯絡之人的資料，不是再次填自己的姓名和電話。Who this person is to you 則說明聯絡人與填表者的關係，例如 mother、father 或 friend。" },
      { title: "格式要求也屬於題目資訊", content: "MM/DD/YYYY、Please print、Check one box 或 Sign here 都指定填寫方式。即使資料內容正確，若把日期順序顛倒、勾了兩個互斥選項，仍不符合表格要求。" },
    ],
    workedExamples: [
      { id: "ENG_R4_L_S215_EX_01", prompt: "Name: Lily Wang. What belongs in 'Last name'?", steps: ["把完整姓名分成個人名與家族名。", "辨認 Wang 位於姓名後。", "填入 last name 欄。"], answer: "Wang.", why: "在 Lily Wang 這個英文排列中，Lily 是 first name，Wang 是 last name。題目只要求一個欄位，因此不應再抄完整姓名。" },
      { id: "ENG_R4_L_S215_EX_02", prompt: "Contact person: Ken Lee, 0912-345-678. Which number should enter the form?", steps: ["確認欄位指向 contact person。", "在資料卡找到 Ken Lee 的電話。", "保留原有數字順序。"], answer: "0912-345-678.", why: "表格要的是緊急聯絡人的電話，資料卡已把這個號碼連到 Ken Lee。不能改填學生自己的號碼，也不能把電話誤當日期。" },
      { id: "ENG_R4_L_S215_EX_03", prompt: "Birthday (MM/DD/YYYY): March 5, 2012.", steps: ["MM 代表月份。", "DD 代表日期。", "依指定順序組成年份格式。"], answer: "03/05/2012.", why: "March 是第三個月，所以月份寫 03；日期五日寫 05，最後放四位年份 2012。若寫 05/03/2012，就把月和日交換了。" },
    ],
    misconceptions: [
      { belief: "First name 是寫在中文姓名最前面的姓。", whyWrong: "英文 first name 指個人名，不是中文排列中的第一個字。", correction: "依表格定義區分 given name 與 family name。" },
      { belief: "Contact person 欄再填一次自己的資料。", whyWrong: "該欄要找緊急時可聯絡的另一個人。", correction: "先確認資料卡中誰被標為 contact。" },
      { belief: "日期只要三個數字都正確，順序可以任意。", whyWrong: "MM/DD/YYYY 和 DD/MM/YYYY 代表不同排列。", correction: "逐一對照格式中的月、日、年位置。" },
      { belief: "Sign here 欄可以填電話或電子郵件。", whyWrong: "Sign here 要求本人簽名，功能是確認身分或同意。", correction: "辨認欄位功能，不因空格大小選資料。" },
    ],
    checks: [
      { prompt: "Full name 要填一部分還是完整姓名？", answer: "完整姓名", reason: "full 表示姓名各部分都要寫。" },
      { prompt: "Who is this person to you: mother 是聯絡人的姓名嗎？", answer: "不是", reason: "它說明聯絡人和填表者的關係。" },
      { prompt: "Check one box 可以勾兩格嗎？", answer: "不可以", reason: "one 明確限制只能選一項。" },
    ], assets: [],
  }),
  lecture("ENG_R4_L_S216", "ENG_R4_S216", {
    objectives: ["能先定位表格欄位，再交叉讀取同一資料列。", "能比較多列資料並處理最低、最早、同時符合等條件。"],
    sections: [
      { title: "先讀標題列再找資料列", content: "表格上方的 Time、Place、Price、Day 等標題決定每一欄代表什麼。先找到題目指定的人、活動或班次所在列，再沿同一列移動到目標欄，避免把相鄰列的資料接在一起。" },
      { title: "相同數字可能代表不同量", content: "表格中的 8 可能是八點、八元、八人或八號。欄位名稱和單位才決定數字意義，因此抄答案時要保留 a.m.、p.m.、dollars、minutes 等必要資訊。" },
      { title: "比較題要先建立條件", content: "first、cheapest、longest 或 after 3 p.m. 都需要比較多列。先排除不符合限制的列，再在剩下資料中找最早、最低或最長，不能只選表格第一列。" },
      { title: "多條件題找交集", content: "A class that is on Friday and costs less than $10 同時限制日期與價格。可先篩選 Friday，再比較 price；若沒有任何一列同時符合，就應回答 none，而不是放寬其中一個條件。" },
    ],
    workedExamples: [
      { id: "ENG_R4_L_S216_EX_01", prompt: "Art: Tue, 4 p.m., Room 2. Music: Wed, 5 p.m., Room 4. Where is Music?", steps: ["定位 Music 資料列。", "沿同一列找到 Place。", "讀出 Room 4。"], answer: "Room 4.", why: "Music 那一列的地點欄是 Room 4；Room 2 屬於 Art。不能因 Room 2 較先出現，就把另一列的時間和地點混在一起。" },
      { id: "ENG_R4_L_S216_EX_02", prompt: "Bus A: 8:10, $30. Bus B: 8:30, $25. Which is cheaper?", steps: ["只比較 Price 欄。", "30 大於 25。", "選擇 Bus B。"], answer: "Bus B.", why: "cheaper 問價格，不問出發時間。Bus B 雖然較晚出發，但票價二十五元低於 Bus A 的三十元，因此符合條件。" },
      { id: "ENG_R4_L_S216_EX_03", prompt: "Movie A: 90 min, starts 2 p.m. Movie B: 70 min, starts 3 p.m. Which lasts longer?", steps: ["定位 Time 資訊。", "比較 90 與 70。", "不把開始時間當片長。"], answer: "Movie A.", why: "lasts longer 要比較分鐘數，Movie A 的九十分鐘比 Movie B 的七十分鐘長。二點和三點只是開始時間，不能直接用來判斷片長。" },
    ],
    misconceptions: [
      { belief: "表格第一列通常就是答案。", whyWrong: "答案取決於題目條件，不取決於排列位置。", correction: "先定位名稱或條件，再讀目標欄位。" },
      { belief: "橫向讀表時可以跨到下一列找較近的數字。", whyWrong: "不同列屬於不同人物或項目。", correction: "用手指或視線固定同一列後再移動。" },
      { belief: "看到最大數字就選，不必看欄位單位。", whyWrong: "數字可能分別代表時間、價格或人數。", correction: "比較前先確認量的種類和單位一致。" },
      { belief: "多條件題只符合其中一項也可以。", whyWrong: "and 表示所有限制必須同時成立。", correction: "逐項打勾，最後只保留條件交集。" },
    ],
    checks: [
      { prompt: "問 cheapest 時，需要比較 Time 欄嗎？", answer: "不需要", reason: "cheapest 只要求價格最低。" },
      { prompt: "同一列的資料通常描述同一個什麼？", answer: "人物、活動或項目", reason: "資料列把同一對象的各欄資訊放在一起。" },
      { prompt: "Friday and under $10 是一個還是兩個條件？", answer: "兩個", reason: "日期與價格都必須符合。" },
    ], assets: [],
  }),
  lecture("ENG_R4_L_S217", "ENG_R4_S217", {
    objectives: ["能辨認公告的目標讀者、必要行動與截止時間。", "能區分一般資訊、參加資格、變更與例外。"],
    sections: [
      { title: "公告先回答三個核心問題", content: "Who is it for? What must they do? By when? 先找對象、行動與期限，可避免只記住活動名稱。Students in Grade 9、return the form、by Thursday 分別回答這三個問題。" },
      { title: "must、may、can 表示不同強度", content: "must 或 need to 表示必要行動，may 和 can 常表示允許或選擇。若公告寫 Members may bring one guest，就不能推成每位會員都必須帶客人。" },
      { title: "變更公告要比較新舊資訊", content: "The meeting has moved from Room 3 to Room 8 表示地點改變，時間若未提及就維持原安排。Canceled 表示活動不舉行，moved to a later day 則是延後，兩者後續行動不同。" },
      { title: "資格和期限缺一不可", content: "Only students with a school card may join before Friday 同時限制身分、證件與時間。即使某人符合資格，逾期仍不能參加；在期限內但沒有證件也不符合。" },
    ],
    workedExamples: [
      { id: "ENG_R4_L_S217_EX_01", prompt: "Grade 8 students: Return the trip form to Room 5 by Wednesday.", steps: ["Grade 8 students 是對象。", "return the trip form 是行動。", "Wednesday 是截止日。"], answer: "Grade 8 students must return the form by Wednesday.", why: "公告只要求八年級學生把校外活動表交到第五教室，期限是星期三。其他年級和表格內容都沒有被列為本則公告的行動對象。" },
      { id: "ENG_R4_L_S217_EX_02", prompt: "CHANGE: Friday's game will begin at 4:30, not 4:00.", steps: ["Change 提醒原資訊已更新。", "比較 4:30 與 4:00。", "保留未被更改的 Friday。"], answer: "The game starts thirty minutes later.", why: "日期仍是星期五，只有開始時間從四點改為四點半，所以延後三十分鐘。公告沒有說比賽取消或換到另一天。" },
      { id: "ENG_R4_L_S217_EX_03", prompt: "Club members may bring one guest. Please write the guest's name by Monday.", steps: ["members 是公告讀者。", "may 表示可選擇帶一位客人。", "若帶客人，星期一前要填姓名。"], answer: "A member who brings a guest must give the name by Monday.", why: "帶客人本身不是強制，但一旦選擇帶人，就要在星期一前提供姓名。把 may 誤讀成 must，會錯誤要求所有會員都帶客人。" },
    ],
    misconceptions: [
      { belief: "公告提到某活動，所有學生都一定是對象。", whyWrong: "Grade、members、parents 等詞可能限定讀者。", correction: "先圈出冒號前或開頭的對象名稱。" },
      { belief: "may 和 must 都表示一定要做。", whyWrong: "may 多表示允許或可能，must 才是必要。", correction: "依情態動詞判斷行動是否可選。" },
      { belief: "地點變更表示日期和時間也一起改變。", whyWrong: "公告未提到的安排通常不能自行改動。", correction: "只更新明確以 from...to... 或 not...but... 改寫的欄位。" },
      { belief: "符合參加資格後，截止日期就不再重要。", whyWrong: "資格和期限是兩個同時成立的條件。", correction: "分別核對身分、文件與時間。" },
    ],
    checks: [
      { prompt: "Parents of new students 是公告對象還是活動地點？", answer: "公告對象", reason: "它指出哪些家長需要閱讀。" },
      { prompt: "moved to a later day 和 canceled 意思相同嗎？", answer: "不同", reason: "前者延後，後者取消。" },
      { prompt: "by noon Friday 最晚何時完成？", answer: "星期五中午", reason: "by 把該時刻設為截止點。" },
    ], assets: [],
  }),
];

export const ENGLISH_U31_QUESTIONS = [
  ...skillQuestions("211", [
    q("RETURN BOOKS HERE\nLibrary cards are ready at the next desk. Where would you most likely see this sign?", ["At a library", "At a bakery", "At a hospital", "At a bus stop"], 0, ["還書與領圖書證都是圖書館服務。", "麵包店不辦理還書或圖書證。", "醫院提供醫療服務，不處理圖書證。", "公車站會標示班次，但不辦圖書證。"], ["兩項服務共同指向圖書館櫃檯。", "其餘場所都無法同時解釋兩個線索。"], ["u31-s211-infer-library-from-return-and-card-services", "combine-two-place-clues"], "public-sign-place-inference", ["choose-place-from-one-common-word"]),
    q("Fresh bread at 7 a.m.\nOrder a cake for your special day. What kind of shop posted this?", ["A shoe shop", "A bakery", "A book store", "A bike shop"], 1, ["標示沒有鞋類商品。", "新鮮麵包與訂製蛋糕都是麵包店商品。", "內容沒有提到書籍。", "標示也沒有自行車或維修服務。"], ["兩種食品線索共同決定商店類型。", "早上七點描述出爐時間，不是交通班次。"], ["u31-s211-identify-bakery-from-bread-and-cake", "distinguish-product-clues-from-time-clue"], "shop-sign-place-inference", ["treat-any-morning-time-as-transport"]),
    q("Platform 3\nTrain to Green City — 10:20. Where is a traveler reading this?", ["At a hotel", "At a park", "At a train station", "At a school office"], 2, ["旅館不會用月臺編號公告火車。", "公園可能有步道，卻沒有火車月臺與發車時間。", "月臺、目的地和時間共同指向火車站。", "學校辦公室不公告火車班次。"], ["三項資訊都支持目前位於火車站。", "綠城是目的地，不是讀者現在的位置。"], ["u31-s211-locate-traveler-at-station-from-platform", "separate-destination-from-current-location"], "transport-sign-place-inference", ["choose-destination-as-current-place"]),
    q("VISITOR DESK\nMaps, directions, and day passes. What is the desk mainly for?", ["Cooking lunch", "Fixing computers", "Selling school books", "Helping visitors"], 3, ["清單中沒有供餐服務。", "內容沒有電腦維修。", "地圖與通行證不是學校書籍。", "地圖、方向與一日證都用來協助訪客。"], ["題目問櫃檯用途，而不是建築名稱。", "列出的三項服務都以訪客為對象。"], ["u31-s211-infer-visitor-desk-purpose-from-services", "answer-function-instead-of-location"], "service-sign-purpose", ["name-a-building-when-purpose-is-asked"]),
    q("LOST AND FOUND\nAsk here about bags, keys, or coats. Who should use this desk?", ["People looking for lost things", "People buying new coats", "Workers making keys", "Drivers paying for parking"], 0, ["這個櫃檯協助人們詢問遺失物。", "外套是可能遺失的物品，不是待售商品。", "鑰匙也是遺失物例子，不表示配鎖服務。", "停車付款和公告內容無關。"], ["標題直接指出服務對象是遺失物品的人。", "袋子、鑰匙與外套都是可能遺失的物品。"], ["u31-s211-identify-users-of-lost-and-found", "interpret-example-list-by-service-heading"], "service-user-inference", ["read-example-object-as-product-for-sale"]),
    q("WORKERS ONLY\nUse the front door for all visits. What should a visitor do?", ["Wait for a worker", "Use the front door", "Enter through this door", "Cancel the visit"], 1, ["公告沒有要求等候工作人員。", "第二行明確提供訪客可使用的入口。", "第一行限制這扇門只供工作人員。", "已有另一個入口，不必取消拜訪。"], ["訪客必須同時遵守兩行資訊。", "前門是替代入口，不是整棟建築關閉。"], ["u31-s211-route-visitor-away-from-staff-door", "combine-access-limit-with-alternative"], "access-sign-action", ["ignore-staff-only-restriction"]),
    q("Animal Care Center\nHealth checks and help for sick pets. Which person would most likely come here?", ["A student returning a novel", "A traveler buying a train ticket", "A dog owner seeking help", "A cook ordering fresh bread"], 2, ["還小說應前往圖書館。", "購買火車票應到車站或售票處。", "生病的寵物與健康檢查符合狗主人需求。", "訂購新鮮麵包應到麵包店。"], ["中心服務寵物及照顧牠們的人。", "答案只採用公告寫出的健康協助，沒有擴大服務。"], ["u31-s211-match-pet-care-service-to-dog-owner", "select-user-by-stated-need"], "place-user-scenario", ["match-place-by-person-job-only"]),
    q("GATE 6\nFlight 218 to South Island\nBoarding ends 14:10. What is this sign helping passengers find?", ["A hotel room", "A bus seat", "A hospital bed", "Their boarding place"], 3, ["登機門和航班資訊不會指出旅館房間。", "標示寫的是航班，不是公車。", "內容沒有醫療服務。", "登機門編號告訴旅客在哪裡登機。"], ["旅客必須在登機截止前找到第六號門。", "南島是目的地，不是登機門位置。"], ["u31-s211-infer-boarding-place-from-flight-gate-sign", "distinguish-gate-from-destination"], "airport-sign-purpose", ["treat-flight-destination-as-current-location"]),
    q("QUIET READING AREA\nPhones on silent. Which activity best fits this place?", ["Reading a magazine quietly", "Playing loud music", "Calling a friend", "Practicing a team cheer"], 0, ["安靜閱讀同時符合區域名稱與手機規定。", "大聲播放音樂違反安靜要求。", "打電話不能讓手機保持無聲。", "練習隊呼會打擾閱讀者。"], ["可接受活動必須同時符合兩個線索。", "標示限制聲音，不限制閱讀材料種類。"], ["u31-s211-select-activity-for-quiet-reading-area", "apply-place-purpose-and-behavior-rule"], "place-rule-application", ["use-place-for-unrelated-active-task"]),
    q("Buy tickets, see show times, and get snacks here. Which place offers all three?", ["A bank", "A movie theater", "A post office", "A doctor's office"], 1, ["銀行不會同時提供場次與零食。", "電影院會售票、列場次並販售零食。", "郵局處理郵件，不提供電影場次。", "醫師診間提供醫療服務。"], ["三項服務必須同時符合一個場所。", "只有票券仍太廣，場次資訊使答案更明確。"], ["u31-s211-integrate-ticket-showtime-snack-clues", "avoid-answering-from-ticket-alone"], "multi-clue-place-inference", ["select-any-place-that-uses-tickets"]),
    q("Pick up your medicine here after the doctor sends the order. What is true?", ["Doctors see every patient at this desk", "All medicine is free", "The desk gives medicine that has been ordered", "Customers may order lunch here"], 2, ["標示沒有說醫師在此看診。", "內容沒有價格資訊，不能推論免費。", "領取與醫師送出的處方共同支持此結論。", "領藥櫃檯不是訂午餐服務。"], ["結論只使用標示明確提供的證據。", "沒有自行加入診療或價格資訊。"], ["u31-s211-draw-bounded-conclusion-from-medicine-pickup", "reject-unstated-service-and-price"], "service-sign-bounded-inference", ["add-common-but-unstated-service"]),
    q("Town Center\nRoom A: Dance\nRoom B: Cooking\nRoom C: Homework Help\nWhere should a student go for help with math?", ["The dance room", "The kitchen store", "The front gate", "Room C"], 3, ["舞蹈活動不提供課業協助。", "公告沒有列出廚具商店。", "入口沒有被指定為課程場所。", "第三教室提供包含數學在內的課業協助。"], ["房間清單直接把服務對應到地點。", "答案使用廣義課業協助，沒有杜撰數學專班。"], ["u31-s211-route-student-through-community-center-directory", "map-need-to-listed-room"], "directory-application", ["choose-room-by-letter-order"]),
  ]),
  ...skillQuestions("212", [
    q("NO FOOD OR DRINKS", ["Eat only fruit here.", "Bring water but no food.", "Keep both food and drinks outside.", "Leave only hot drinks outside."], 2, ["標示沒有讓水果例外。", "飲料也在禁止範圍內。", "否定同時涵蓋食物與飲料。", "飲料溫度不會改變規則。"], ["完整禁止範圍包含兩個並列名詞。", "標示沒有提供任何例外。"], ["u31-s212-apply-no-food-or-drinks-to-both-items", "resolve-negative-scope-over-or"], "prohibition-scope", ["apply-no-to-first-noun-only"]),
    q("BE CAREFUL: WET FLOOR", ["Walk carefully.", "Run across quickly.", "Take off your shoes.", "Close the building."], 0, ["小心行走能回應滑倒危險。", "奔跑會增加滑倒可能。", "標示沒有要求脫鞋。", "提醒小心不等於整棟建築關閉。"], ["這是危險提醒，不是全面封鎖。", "文字能支持的安全行動是小心行走。"], ["u31-s212-respond-to-wet-floor-warning", "distinguish-warning-from-closure"], "warning-action", ["turn-caution-into-unstated-ban"]),
    q("OUT OF ORDER\nPlease use the machine on Floor 2.", ["Repair this machine now.", "Wait beside this machine all day.", "Use this machine only once.", "Go to Floor 2 for another machine."], 3, ["使用者沒有被要求維修。", "原地等候不是公告提供的方案。", "故障表示現在不能使用，不是限用一次。", "第二行明確提供樓下的替代機器。"], ["設備問題和替代方案都有明確文字。", "二樓是使用地點，不是故障程度。"], ["u31-s212-follow-out-of-order-alternative", "connect-status-to-replacement-action"], "equipment-status-instruction", ["interpret-out-of-order-as-limited-use"]),
    q("KEEP OFF THE GRASS", ["Water the grass.", "Do not walk on the grass.", "Sit on the grass quietly.", "Cut the grass today."], 1, ["公告沒有澆水任務。", "這個片語要求人留在草地範圍外。", "安靜坐下仍然進入草地。", "這是訪客規則，不是割草行程。"], ["第二項完整改述禁止行動。", "即使保持安靜，也不能進入草地。"], ["u31-s212-paraphrase-keep-off-grass", "reject-permitted-manner-inside-banned-area"], "prohibition-paraphrase", ["treat-quiet-behavior-as-exception"]),
    q("FIRE EXIT\nUse only when there is a fire. When may this door be used?", ["During a fire", "When the main door is busy", "Only before lunch", "For every daily visit"], 0, ["標示允許在火災時使用。", "主要入口忙碌不等於發生火災。", "內容沒有午餐時間限制。", "限定字排除一般日常使用。"], ["使用許可只連到一項條件。", "答案沒有把火災出口擴大成方便通行。"], ["u31-s212-identify-emergency-exit-condition", "apply-only-to-event-condition"], "conditional-instruction", ["treat-emergency-exit-as-normal-shortcut"]),
    q("PLEASE PUSH", ["Pull the door toward you.", "Wait for the door to open itself.", "Move the door away from you.", "Lock the door."], 2, ["拉是相反方向的動作。", "標示要求讀者主動開門。", "推門就是讓門離身體更遠。", "內容沒有要求上鎖。"], ["指示的重點是開門方向。", "第三項把標示轉成具體動作。"], ["u31-s212-translate-push-sign-into-door-action", "distinguish-opposite-door-motions"], "operation-sign-action", ["confuse-push-and-pull"]),
    q("NO LEFT TURN\n7–9 a.m.", ["Drivers may never turn left here.", "Drivers may not turn left during the stated morning hours.", "Only buses may turn left all morning.", "The road is closed from seven to nine."], 1, ["時間限制表示規則不是全天。", "早上七點到九點不得左轉。", "標示沒有公車例外。", "禁止左轉不等於整條道路封閉。"], ["答案保留動作和時間兩個範圍。", "沒有把限制擴張到標示之外。"], ["u31-s212-apply-time-limited-no-left-turn", "preserve-prohibition-boundary"], "time-bounded-road-sign", ["expand-timed-rule-to-all-day"]),
    q("BRIDGE CLOSED DURING HEAVY RAIN", ["The bridge closes every night.", "People should cross faster in rain.", "Only bikes may cross in rain.", "Heavy rain closes the bridge."], 3, ["標示沒有提到夜間。", "內容寫封閉，不是加速通過。", "沒有自行車例外。", "大雨期間就是橋梁封閉的條件。"], ["答案把封閉狀態連到指定天氣。", "沒有誤判橋梁永遠關閉。"], ["u31-s212-infer-weather-condition-for-bridge-closure", "separate-conditional-from-permanent-status"], "weather-condition-sign", ["ignore-during-condition"]),
    q("DO NOT TOUCH\nThis part is hot", ["It may burn a hand.", "It is too cold to move.", "Touch it only with one finger.", "It needs cleaning."], 0, ["高溫部位可能造成燙傷。", "標示寫的是熱，不是冷。", "禁止觸碰沒有單指例外。", "內容沒有要求清潔。"], ["危險原因直接來自第二行。", "答案說明危險但不杜撰設備細節。"], ["u31-s212-connect-do-not-touch-to-heat-risk", "use-warning-reason-as-inference"], "prohibition-reason", ["invent-exception-to-absolute-command"]),
    q("SILENCE YOUR PHONE BEFORE ENTERING", ["Turn off all lights.", "Make sure the phone will not ring.", "Leave the phone at home.", "Call someone at the door."], 1, ["燈光和手機無聲無關。", "靜音能避免進入後響鈴。", "標示沒有禁止攜帶手機。", "打電話會產生聲音，和要求相反。"], ["要求的結果是室內不出現手機聲響。", "不必擴大成把手機留在家裡。"], ["u31-s212-interpret-silence-phone-before-entry", "avoid-overstating-device-ban"], "pre-entry-instruction", ["replace-silence-with-leave-behind"]),
    q("WATCH YOUR STEP\nFloor level changes ahead. What danger does the sign show?", ["A low ceiling", "A loud room", "A change in floor height", "A missing wall"], 2, ["標示談地面，不是天花板。", "內容沒有聲音資訊。", "第二行明確說明地板高度改變。", "沒有牆面資訊。"], ["解釋行直接指出實際危險。", "這是腳步安全提醒，不是禁止通行。"], ["u31-s212-identify-level-change-from-watch-step", "map-explanation-to-risk-type"], "warning-risk-identification", ["read-watch-as-looking-at-an-object"]),
    q("EXIT →\nKEEP RIGHT IN THE HALL", ["Turn left and stop.", "Use any side while running.", "Stop and wait in the hall.", "Move toward the exit on the right side."], 3, ["箭頭與靠右規定都不支持往左。", "標示指定右側，也沒有允許奔跑。", "內容沒有要求停下等候。", "兩項方向資訊共同要求靠右前往出口。"], ["兩個指示必須同時遵守。", "答案沒有混淆走廊行進規則和出口方向。"], ["u31-s212-integrate-exit-arrow-and-keep-right", "combine-direction-and-movement-rule"], "compound-direction-sign", ["follow-only-one-of-two-instructions"]),
  ]),
  ...skillQuestions("213", [
    q("OPEN\nMon–Fri 9:00–17:00\nSat 10:00–14:00\nSun closed\nCan a visitor enter at 3 p.m. Saturday?", ["Yes, until 5 p.m.", "No, Saturday hours end at 2 p.m.", "Yes, because it is the weekend.", "No, the place is closed every Saturday."], 1, ["五點關門只適用平日。", "星期六下午三點已超過兩點結束時間。", "週末身分不會取消列出的時段。", "星期六有營業時間，不是全天休息。"], ["星期六必須對應自己的時段。", "答案區分太晚到達與整天未營業。"], ["u31-s213-check-saturday-visit-against-own-hours", "avoid-borrowing-weekday-closing-time"], "hours-schedule-application", ["apply-weekday-hours-to-saturday"]),
    q("Museum closes 5:00 p.m.\nLast time to enter: 4:30 p.m.\nNina arrives at 4:40. What happens?", ["She cannot enter.", "She has twenty minutes to enter.", "She may enter because the museum is open.", "She must wait until 5:00."], 0, ["她在最後入場時間後十分鐘到達。", "剩餘開館時間不會改變入場截止。", "最後入場後，即使場館尚未關門也不能進入。", "五點是關門，不是重新開放。"], ["真正要比較的邊界是最後入場時間。", "答案沒有混淆入場截止與關門。"], ["u31-s213-compare-arrival-with-last-entry", "separate-admission-deadline-from-closing"], "last-entry-boundary", ["use-closing-time-as-entry-time"]),
    q("Sign up by Friday. Today is Friday morning. Can a student still sign up?", ["No, it ended Thursday.", "Only after noon.", "Yes, Friday is the final day.", "Only next week."], 2, ["這是星期五以前才會成立的解讀。", "公告沒有中午限制。", "星期五以前完成包含星期五這個最後期限日。", "公告沒有把登記移到下週。"], ["期限介系詞決定星期五是否包含。", "星期五上午仍在最後一天內。"], ["u31-s213-interpret-by-friday-as-inclusive-deadline", "contrast-by-with-before"], "deadline-word-interpretation", ["treat-by-as-before"]),
    q("The ticket can be used through June 30. Which day is included?", ["July 1", "July 30", "June 29 only", "June 30"], 3, ["七月一日已超過結束日期。", "七月三十日晚了一個月。", "票券不是只限六月二十九日。", "表示延續到某日的介系詞包含該日。"], ["題目檢查使用日期是否包含邊界。", "第四項就是票券最後可用日。"], ["u31-s213-identify-through-date-inclusive-boundary", "reject-neighboring-dates"], "validity-date-boundary", ["exclude-final-day-from-through"]),
    q("Classes: Tuesday and Thursday, 6–7 p.m. How many classes are there each week, and how long is each one?", ["Two classes; one hour each", "One class; two hours", "Two classes; seven hours each", "Five classes; one hour each"], 0, ["兩個指定日期各有一小時課程。", "星期四也有課，而且每次只有一小時。", "七點是結束時間，不是課程長度。", "清單只列兩個平日。"], ["課表同時提供每週次數與每次長度。", "第一項完整保留日期與六點到七點時段。"], ["u31-s213-summarize-two-day-one-hour-class-schedule", "combine-day-count-and-duration"], "recurring-schedule-summary", ["read-two-days-as-two-hour-duration"]),
    q("Pool hours: 8 a.m.–6 p.m.\nClosed 12–1 p.m. for cleaning. When can Omar swim?", ["12:30 p.m.", "6:30 p.m.", "11:30 a.m.", "7:30 a.m."], 2, ["十二點半正在清潔停用時段。", "六點半已超過每日關閉時間。", "十一點半在開放時間內，也早於清潔。", "七點半早於泳池開放。"], ["正確時間同時通過主要時段與例外檢查。", "三個錯誤時間各自違反不同邊界。"], ["u31-s213-find-time-outside-midday-closure", "apply-main-hours-and-exception"], "hours-with-closure-exception", ["ignore-midday-exception"]),
    q("Orders before 2 p.m. leave today. Later orders leave tomorrow. An order arrives at 2:10 p.m. When will it leave?", ["This morning", "At 2 p.m.", "Today before noon", "Tomorrow"], 3, ["訂單在上午之後才送達。", "它不是兩點整收到。", "送達時間也晚於中午。", "兩點十分已超過當日出貨截止。"], ["送達時間必須和出貨邊界比較。", "較晚收到的訂單依規則延至明日。"], ["u31-s213-apply-order-cutoff-to-late-arrival", "map-post-cutoff-event-to-next-day"], "service-cutoff-application", ["treat-close-time-as-inclusive-after-boundary"]),
    q("Use this sale card before August 1. On which date is it too late?", ["August 1", "July 31", "July 20", "June 30"], 0, ["八月一日不在八月一日以前。", "七月三十一日仍在期限前。", "七月二十日更早。", "六月三十日也更早。"], ["題目要找第一個被排除的日期。", "表示以前與表示最晚在某日的介系詞不能混為一談。"], ["u31-s213-locate-first-too-late-date-after-before-limit", "exclude-named-boundary"], "exclusive-date-deadline", ["include-date-after-before"]),
    q("Office open weekdays 8:30–16:30, except public holidays. Monday is a public holiday. What is true on that Monday?", ["The office opens at 8:30 as usual.", "The office stays open later.", "The office is closed that Monday.", "Only students may enter."], 2, ["例外條件使一般平日時段不適用。", "公告沒有延長開放時間。", "星期一是公共假日，明確落在排除條件。", "內容沒有指定訪客身分。"], ["例外條款優先於一般星期一時段。", "結論只限該公共假日。"], ["u31-s213-apply-public-holiday-exception-to-weekday-hours", "prioritize-explicit-exception"], "schedule-exception", ["ignore-except-clause"]),
    q("Breakfast served 6:30–10:00. Last order 9:45. A guest sits down at 9:50. What is the problem?", ["Breakfast begins too late.", "The last-order time has passed.", "The guest arrived before the hotel opened.", "The meal ended at 9:45."], 1, ["早餐在六點半已開始。", "九點五十分比最後點餐晚五分鐘。", "題目沒有提供旅館開門時間。", "供餐到十點，但點餐更早停止。"], ["答案指出實際錯過的是點餐截止。", "沒有把最後點餐和供餐結束混在一起。"], ["u31-s213-diagnose-arrival-after-last-order", "distinguish-order-cutoff-from-service-end"], "last-order-scenario", ["equate-last-order-with-closing"]),
    q("The pass can be used from September 3 to September 7. Which day is too early?", ["September 4", "September 7", "September 3", "September 2"], 3, ["九月四日在日期範圍內。", "九月七日是包含在內的結束日。", "九月三日就是開始日。", "九月二日早於開始日期。"], ["使用區間的兩端都已核對。", "第四項違反的是開始邊界。"], ["u31-s213-detect-date-before-validity-range", "evaluate-both-range-boundaries"], "date-range-application", ["check-only-ending-date"]),
    q("Library service desk\nWeekdays 9–6\nWednesday workers' meeting 1–2\nSaturday 9–12\nWhen is the desk closed?", ["Tuesday at 1:30", "Wednesday at 1:30", "Wednesday at 3:00", "Saturday at 10:00"], 1, ["星期二該時段沒有列出關閉。", "星期三一點到兩點的會議使櫃檯暫停。", "三點已在會議結束後。", "星期六十點在開放時段內。"], ["特殊時段同時對應到正確星期與時間。", "只檢查一般營業時間不足以作答。"], ["u31-s213-integrate-weekly-meeting-exception", "cross-check-day-time-and-special-closure"], "multi-line-hours-inference", ["apply-special-closure-to-wrong-day"]),
  ]),
  ...skillQuestions("214", [
    q("BUS TICKET\nOne ride\nUse today only. What does the ticket allow?", ["One bus ride today", "Any number of rides today", "One ride any day", "A free ride next week"], 0, ["搭乘次數與使用日期都符合。", "一次搭乘排除不限次數。", "限今日使用排除其他日期。", "沒有免費或未來使用的資訊。"], ["答案完整保留兩項獨立限制。", "第一項是唯一同時符合日期與次數的選擇。"], ["u31-s214-combine-one-ride-and-today-only", "apply-count-and-date-limits"], "ticket-limit-summary", ["follow-only-one-ticket-condition"]),
    q("MUSIC SHOW TICKET\nRow D — Seat 18\nEnter at Door 3. Where should the ticket holder sit?", ["Door 18", "Row 3", "Seat D3", "D18"], 3, ["這把入口和座位數字混在一起。", "三代表入口，不是排數。", "字母是排，但三仍是入口編號。", "第四項正確組合排數與座位十八。"], ["座位資訊必須和入場資訊分開。", "答案同時使用正確的排與座位。"], ["u31-s214-build-seat-location-from-row-and-seat", "separate-door-number-from-seat-number"], "ticket-field-integration", ["merge-unrelated-numbered-fields"]),
    q("CHILD TICKET\nAges 6–12. Who may use it?", ["A five-year-old child", "A ten-year-old child", "A thirteen-year-old child", "Any adult with a child"], 1, ["五歲低於票券年齡範圍。", "十歲位於六到十二歲之間。", "十三歲高於上限。", "票券限制使用者年齡，不是陪同者。"], ["年齡區間直接決定使用資格。", "票面沒有成人陪同例外。"], ["u31-s214-check-age-range-on-child-ticket", "apply-inclusive-user-range"], "ticket-user-eligibility", ["ignore-age-boundary"]),
    q("KEEP THIS TICKET UNTIL YOU LEAVE", ["Throw it away after entering.", "Give it to another visitor.", "Keep it during the whole visit.", "Buy a second ticket inside."], 2, ["要求保留到離開，所以入場後仍不能丟棄。", "票券持有人沒有被要求轉交。", "整段參觀期間保留票券符合時間條件。", "內容沒有要求再買一張。"], ["時間連接詞決定票券要保留多久。", "答案沒有自行杜撰保留票券的原因。"], ["u31-s214-interpret-keep-ticket-until-leaving", "translate-until-into-duration"], "ticket-retention-instruction", ["treat-entry-as-end-of-ticket-use"]),
    q("Shake well before use.", ["Move the bottle before using it.", "Keep the bottle still at all times.", "Drink the whole bottle at once.", "Open it only after one week."], 0, ["使用前搖動能混合瓶內內容物。", "保持不動與搖勻相反。", "說明沒有提供飲用量。", "內容沒有一週等待期。"], ["動作與發生時間都有明確文字。", "答案沒有加入未寫出的用量。"], ["u31-s214-paraphrase-shake-before-use", "avoid-inventing-amount-or-delay"], "label-pre-use-action", ["add-unstated-dose"]),
    q("Use this medicine after dinner once each day. How often should it be used?", ["Once a week", "Before every meal", "Once each day", "Only when hungry"], 2, ["說明寫每天，不是每週。", "要求晚餐後，不是每餐前。", "每天一次就是每日使用一次。", "飢餓不是使用條件。"], ["使用頻率和一天中的時間分開判讀。", "答案沒有把一次改成多次使用。"], ["u31-s214-read-daily-frequency-from-label", "separate-frequency-from-meal-timing"], "usage-frequency", ["count-meals-instead-of-days"]),
    q("1. Open the cover.\n2. Put in the card.\n3. Push Start. What happens right before the Start button is pushed?", ["Closing the cover", "Putting in the card", "Taking out the card", "Turning off the machine"], 1, ["步驟沒有要求關上外蓋。", "第二步正好在第三步之前。", "取出卡片不在清單中。", "最後動作是開始，不是關機。"], ["編號順序直接決定答案。", "緊接在前指的是上一個編號步驟。"], ["u31-s214-find-step-before-press-start", "use-numbered-procedure-order"], "procedure-sequence", ["select-first-step-instead-of-previous-step"]),
    q("Special offer: Save $5 when you spend $30 or more. Mia spends $28. What is true about Mia?", ["She saves $5.", "She receives $30.", "She may use two offers.", "She does not pay enough to save $5."], 3, ["二十八元低於所需三十元。", "優惠降低價格，不會支付三十元。", "沒有可使用兩次的規則。", "消費金額尚未達到門檻。"], ["實際金額已和最低門檻比較。", "結論沒有假設另一種折扣。"], ["u31-s214-compare-purchase-with-coupon-minimum", "apply-or-more-threshold"], "coupon-condition", ["treat-near-threshold-as-enough"]),
    q("Day Pass\nCan be used on city buses. Cannot be used on trains. Which trip can use the pass?", ["A train trip", "A city bus trip", "Any trip outside the city", "A taxi ride"], 1, ["第一行明確排除火車。", "市區公車是明確允許的交通方式。", "市外交通不在使用範圍內。", "計程車不是市區公車。"], ["允許與禁止的交通方式都已核對。", "答案沒有超出指定交通系統。"], ["u31-s214-select-transport-allowed-by-day-pass", "contrast-valid-and-not-valid-lines"], "pass-scope", ["assume-day-pass-covers-all-transport"]),
    q("Bag card\nName: Eric Wu\nFlight: 503\nTo: North City. What does 503 mean?", ["The bag's price", "The owner's age", "The flight number", "The city gate"], 2, ["沒有金錢符號或價格欄。", "卡片沒有年齡欄。", "欄名直接把五○三連到航班。", "北城是目的地，沒有登機門資訊。"], ["欄位名稱決定數字代表的資料類型。", "答案沒有混淆目的地與航班。"], ["u31-s214-map-number-to-flight-field-on-label", "use-field-heading-to-type-number"], "label-field-meaning", ["guess-number-type-without-heading"]),
    q("Return by April 20\nDo not take this card off. A borrower returns the item on April 21. Which rule was broken?", ["The item came back after April 20.", "The card was too large.", "The item needed a new owner.", "The return place was wrong."], 0, ["四月二十一日比期限晚一天。", "卡片大小沒有被討論。", "借用不表示要更換所有人。", "公告沒有指定歸還地點。"], ["情境只有證據證明日期規則被違反。", "沒有說借用者拿掉卡片。"], ["u31-s214-identify-broken-return-date-rule", "avoid-claiming-unmentioned-label-removal"], "label-rule-violation", ["choose-any-printed-rule-without-scenario-evidence"]),
    q("Event Pass\nMorning program: Hall A\nAfternoon program: Hall C\nLunch: Room 6\nWhere should a visitor go after lunch for the afternoon program?", ["Hall A", "Room 6", "The ticket office", "Hall C"], 3, ["第一會堂屬於上午活動。", "第六教室只供午餐使用。", "流程沒有列出售票處。", "下午活動明確安排在第三會堂。"], ["時段資訊用來選擇正確一行。", "午餐後要找下午活動，不是停留在用餐地點。"], ["u31-s214-route-pass-holder-to-afternoon-hall", "link-day-part-to-location-line"], "multi-line-pass-application", ["choose-most-recent-location-instead-of-next-event"]),
  ]),
  ...skillQuestions("215", [
    q("Name: Amy Chen\nWhat belongs in the 'First name' box?", ["Amy", "Chen", "Amy Chen", "Ms. Chen"], 0, ["這是個人名字。", "這是姓氏。", "欄位只要求名字的一部分，不是全名。", "稱謂加姓氏不能回答個人名。"], ["姓名依欄位標題拆分。", "只有第一項單獨提供所需部分。"], ["u31-s215-select-first-name-from-full-name", "distinguish-name-parts"], "form-name-field", ["treat-first-written-part-as-family-name-rule"]),
    q("Name: David Lin\nWhat should David write for 'Last name'?", ["David Lin", "Mr.", "David", "Lin"], 3, ["這是完整姓名。", "這是稱謂。", "這是個人名。", "Lin 是這個姓名中的姓氏。"], ["題目要求一個姓名欄位。", "答案不包含稱謂，也不重複兩個名字。"], ["u31-s215-select-last-name-from-full-name", "exclude-title-and-full-name"], "form-name-field", ["fill-full-name-in-last-name-box"]),
    q("Birthday (MM/DD/YYYY)\nJune 9, 2011", ["09/06/2011", "06/09/2011", "2011/06/09", "06/2011/09"], 1, ["這把日期放在月份前。", "六月是零六、日期是零九，最後是年份。", "這採用年份在前，不合指定順序。", "年份被錯放在中間。"], ["每個符號都已對應到格式標題。", "月份與日期使用兩位數，順序清楚。"], ["u31-s215-format-birth-date-as-mm-dd-yyyy", "map-date-components-to-explicit-order"], "form-date-format", ["ignore-date-format-heading"]),
    q("Home: 18 Lake Road, West Town\nWhere should this information go?", ["Address", "Phone number", "E-mail", "Sign here"], 0, ["道路與城鎮組成住址。", "電話欄應填聯絡號碼。", "電子郵件包含帳號與符號。", "簽名是本人寫下的姓名或識別。"], ["先辨認資料類型，再選填寫位置。", "只有第一項是位置資料。"], ["u31-s215-match-home-location-to-address-field", "classify-form-data-type"], "form-field-matching", ["choose-field-by-space-size"]),
    q("Phone: 0912-345-678\nE-mail: joy@example.com\nWhat belongs in the E-mail box?", ["0912-345-678", "Joy's home address", "joy@example.com", "example"], 2, ["這是電話號碼。", "資料卡沒有提供住址。", "帶有郵件符號的完整值就是電子郵件。", "這只是郵件地址的一部分。"], ["兩種聯絡資料必須分開。", "完整郵件值不能漏掉任何一段。"], ["u31-s215-select-email-from-contact-card", "distinguish-phone-and-email-fields"], "form-contact-field", ["copy-nearest-contact-value"]),
    q("Contact person\nName: Rosa Lee\nPhone: 0988-222-111\nWhat should go in 'Contact person name'?", ["0988-222-111", "Rosa Lee", "Contact", "The student's name"], 1, ["這是聯絡人的電話。", "姓名行指出聯絡人的名字。", "這是欄位用途，不是人名。", "表格要填另一位聯絡人，不是學生本人。"], ["子欄位要求姓名而非電話。", "答案使用明確標示為聯絡人的人物。"], ["u31-s215-fill-emergency-contact-name-subfield", "separate-contact-person-from-contact-number"], "form-emergency-contact", ["repeat-student-data-in-contact-field"]),
    q("Contact person: Mr. Ho\nWho is this person to the student: uncle. What does 'uncle' tell us?", ["Where Mr. Ho lives", "How Mr. Ho knows the student", "Mr. Ho's phone number", "The student's last name"], 1, ["內容沒有住址。", "這一欄說明兩人的親屬連結。", "叔叔不是電話號碼。", "它也不能指出任一人的姓氏。"], ["欄位名稱決定這個字的功能。", "答案描述關係，不是另一項聯絡資料。"], ["u31-s215-interpret-relationship-field-value", "distinguish-relationship-from-identity-data"], "form-field-function", ["read-relationship-as-name"]),
    q("Check ONE box:\n□ Bus  □ Train  □ Walk\nA student checks Bus and Train. What must be fixed?", ["Add Walk too.", "Start a new form.", "Write a phone number.", "Leave only one choice checked."], 3, ["再勾一格會使錯誤更嚴重。", "不必重填整張表格。", "欄位問交通方式，不是電話。", "大寫單字明確限制只能留一格。"], ["指示控制可選項目的數量。", "修正只處理實際發生的問題。"], ["u31-s215-enforce-one-box-selection", "apply-form-response-count-limit"], "form-instruction-violation", ["treat-checkboxes-as-unlimited"]),
    q("Please print your name. What is the form asking the writer to do?", ["Write each letter clearly.", "Draw a picture.", "Send the form to a printer.", "Write only the first letter."], 0, ["表格中的這個動詞表示把每個字母清楚寫出。", "題目沒有要求圖畫。", "這裡談手寫方式，不是使用機器。", "仍要寫完整姓名，不是首字母。"], ["依表格情境選擇正確詞義。", "答案沒有把書寫動詞誤認為辦公設備操作。"], ["u31-s215-interpret-print-name-in-form-context", "disambiguate-common-word-by-document-use"], "form-instruction-meaning", ["choose-machine-meaning-of-print"]),
    q("Sign here: __________\nWhy is this line different from 'Full name'?", ["It asks for a home address.", "It asks for a date.", "It asks the person to sign.", "It asks for a family member."], 2, ["住址有自己的欄位。", "日期也使用另一類欄位。", "簽名欄要求本人寫下識別簽名。", "內容沒有提到其他家人。"], ["回應由欄位功能決定，不由空格長度決定。", "答案區分簽名與抄寫全名。"], ["u31-s215-distinguish-signature-from-full-name", "identify-form-authentication-field"], "form-signature-function", ["treat-all-name-like-lines-as-full-name"]),
    q("Student card\nName: Ben Yu\nBorn: 2012\nForm asks: 'Year born.' What should Ben write?", ["Ben", "Yu", "Student", "2012"], 3, ["Ben 是學生的個人名。", "Yu 是學生卡上的姓氏。", "這是人物身分。", "四位數值就是出生年份。"], ["欄位只要求年份。", "答案沒有加入資料卡未提供的月與日。"], ["u31-s215-extract-year-of-birth-from-card", "select-data-by-field-type"], "form-data-extraction", ["copy-prominent-name-instead-of-requested-number"]),
    q("Club form: Name / Grade / Favorite activity.\nKim / Grade 8 / Swimming. What goes in the last box?", ["Kim", "Grade 8", "Swimming", "Club form"], 2, ["這個值填姓名欄。", "這個值填年級欄。", "游泳就是列出的最喜愛活動。", "這是文件類型，不是個人資料。"], ["先配對欄位語意，再依順序找最後一欄。", "最後一欄要求活動，不是身分。"], ["u31-s215-map-profile-values-to-three-form-fields", "identify-final-field-by-semantic-type"], "multi-field-form-mapping", ["copy-last-visible-heading-instead-of-value"]),
  ]),
  ...skillQuestions("216", [
    q("Class | Day | Room\nArt | Tue | 2\nMusic | Wed | 5\nWhere does Music meet?", ["Room 2", "Tuesday", "Wednesday", "Room 5"], 3, ["第二教室屬於美術課。", "星期二是美術課日期，不是教室。", "星期三是音樂課日期，不是地點。", "音樂課和第五教室位於同一列。"], ["從音樂課資料列移到教室欄即可定位。", "答案保留教室名稱與數字。"], ["u31-s216-cross-music-row-to-room-column", "avoid-adjacent-row-mixing"], "simple-table-lookup", ["take-first-room-value"]),
    q("Bus | Leaves | Price\nA | 8:10 | $30\nB | 8:30 | $25\nWhich bus is cheaper?", ["Bus A", "Bus B", "Both cost $30", "The table does not show prices"], 1, ["三十元高於二十五元。", "第二班公車票價較低。", "兩個價格並不相同。", "表格有明確價格欄。"], ["詢問較便宜時只比較價格欄。", "較早發車不會決定票價。"], ["u31-s216-compare-bus-prices-not-departures", "select-minimum-in-target-column"], "table-comparison", ["choose-earliest-when-asked-cheapest"]),
    q("Movie | Starts | Time\nSun Road | 2:00 | 90 min\nBlue Sea | 3:00 | 70 min\nWhich movie lasts longer?", ["Sun Road", "Blue Sea", "Both last three hours", "Blue Sea by twenty minutes"], 0, ["九十分鐘長於七十分鐘。", "藍海雖較晚開始，片長仍較短。", "開始時刻不是播放長度。", "藍海短二十分鐘，不是長二十分鐘。"], ["要比較片長欄，不是時鐘時間。", "二十分鐘的差距支持第一部電影。"], ["u31-s216-compare-movie-length-column", "separate-start-time-from-duration"], "table-duration-comparison", ["compare-clock-numbers-as-length"]),
    q("Meal | Price\nRice | $45\nNoodles | $50\nSoup | $30\nA student has $40. What can the student buy?", ["Rice", "Noodles", "Soup", "Rice and soup together"], 2, ["飯超出預算五元。", "麵超出預算十元。", "湯為三十元，在四十元預算內。", "飯和湯合計七十五元。"], ["每個價格都已和四十元上限比較。", "第三項是唯一買得起的列出餐點。"], ["u31-s216-apply-budget-to-menu-table", "compare-all-options-with-maximum"], "table-budget-application", ["choose-nearest-price-over-budget"]),
    q("Club | Day | Cost\nChess | Mon | $5\nDance | Fri | $12\nPhoto | Fri | $8\nWhich Friday club costs less than $10?", ["Chess", "Dance", "Photo", "Both Friday clubs"], 2, ["西洋棋便宜但在星期一。", "舞蹈在星期五但超過十元。", "攝影同時符合星期五與低於十元。", "舞蹈不符合價格條件。"], ["答案是日期與價格兩個限制的交集。", "兩項條件都沒有被省略。"], ["u31-s216-filter-table-by-day-and-price", "find-multi-condition-row"], "table-multi-condition-filter", ["accept-row-that-meets-one-condition"]),
    q("Train | Leaves | Arrives\nK1 | 9:00 | 10:20\nK2 | 9:30 | 10:15\nWhich train arrives first?", ["K1, because it leaves first", "K1 at 9:00", "Both at 10:20", "K2 at 10:15"], 3, ["較早出發不代表本表中較早抵達。", "九點是第一班車出發時間。", "第二班車抵達時間不同。", "十點十五分比十點二十分早五分鐘。"], ["比較依據是抵達欄。", "出發順序是具吸引力但錯誤的捷徑。"], ["u31-s216-find-earliest-arrival-despite-later-departure", "compare-correct-time-column"], "table-arrival-comparison", ["equate-earliest-departure-with-earliest-arrival"]),
    q("Student | Books read\nAva | 4\nLeo | 7\nMina | 5\nHow many more books did Leo read than Ava?", ["2", "3", "4", "11"], 1, ["七減五是在比較另一位學生。", "七減四等於三。", "四是閱讀總數，不是差。", "十一是相加，不是多出多少。"], ["指定兩列提供七本與四本。", "詢問多多少需要相減。"], ["u31-s216-calculate-difference-across-named-rows", "distinguish-difference-from-sum"], "table-derived-value", ["subtract-wrong-row-or-add-values"]),
    q("Room | Opens | Closes\nStudy | 8:00 | 18:00\nMusic | 10:00 | 16:00\nAt 9 a.m., which room is open?", ["The Study room only", "The Music room only", "Both rooms", "Neither room"], 0, ["九點在自習室時段內，但早於音樂室開放。", "音樂室十點才開。", "兩個空間開放時間不同。", "自習室已經開放。"], ["同一時刻分別代入兩個時段。", "只有自習室的範圍包含九點。"], ["u31-s216-test-one-time-against-two-room-ranges", "evaluate-range-membership-per-row"], "table-time-range", ["look-only-at-closing-times"]),
    q("Package | Weight | Cost\nP | 2 kg | $80\nQ | 3 kg | $90\nR | 5 kg | $140\nWhich package is 3 kg?", ["P", "Q", "R", "P and Q"], 1, ["第一件重兩公斤。", "第二件重量正好三公斤。", "第三件重五公斤。", "只有第二件符合。"], ["直接讀重量欄，不使用價格判斷。", "公斤單位確認三代表重量。"], ["u31-s216-locate-package-by-weight-value", "use-unit-to-select-column"], "table-value-lookup", ["choose-row-by-similar-price-number"]),
    q("Activity | Start | End\nRead | 4:00 | 4:30\nCook | 4:20 | 5:10\nWalk | 5:20 | 5:50\nWhich activities happen at the same time for part of their periods?", ["Read and Cook", "Cook and Walk", "Read and Walk", "All three"], 0, ["閱讀和烹飪在四點二十分到四點半重疊。", "烹飪結束後散步才開始。", "閱讀遠早於散步開始就結束。", "散步沒有和兩項較早活動重疊。"], ["開始與結束欄都要當成時間區間比較。", "重疊只發生在兩項指定活動。"], ["u31-s216-find-overlap-between-table-time-intervals", "reason-across-start-and-end-columns"], "table-interval-inference", ["compare-start-times-only"]),
    q("Day | High | Low\nMon | 24°C | 18°C\nTue | 21°C | 16°C\nWed | 23°C | 19°C\nWhich day has the smallest change from high to low?", ["Monday", "Tuesday", "Wednesday", "Monday and Tuesday"], 2, ["星期一相差六度。", "星期二相差五度。", "星期三相差四度，是最小差值。", "前兩天的差值不相等。"], ["每一列先計算高低溫差。", "只看最低溫本身不能回答變化最小。"], ["u31-s216-compare-high-low-differences-by-day", "derive-and-rank-row-differences"], "table-derived-comparison", ["choose-smallest-low-instead-of-smallest-change"]),
    q("Team | Won | Lost\nRed | 5 | 2\nBlue | 4 | 1\nGreen | 6 | 3\nWhich team won more games than Red?", ["Blue", "No team", "Blue and Green", "Green"], 3, ["藍隊四勝，少於紅隊五勝。", "綠隊六勝，所以並非沒有隊伍勝場較多。", "只有綠隊超過紅隊。", "六勝確實比五勝多。"], ["所有隊伍都回到勝場欄比較。", "答案沒有混入敗場數。"], ["u31-s216-evaluate-four-statements-against-team-table", "verify-complete-propositions"], "table-proposition-check", ["compare-values-from-different-columns"]),
  ]),
  ...skillQuestions("217", [
    q("Grade 8 students: Return the trip form to Room 5 by Wednesday. Who must act?", ["All parents", "Grade 8 students", "Room 5 teachers only", "Every visitor"], 1, ["公告沒有點名家長。", "開頭直接指出八年級學生。", "第五教室是繳交地點，不是對象。", "訪客不在公告範圍內。"], ["冒號前的文字就是目標讀者。", "地點資訊沒有被誤認成人群。"], ["u31-s217-identify-grade-eight-notice-audience", "separate-audience-from-destination"], "notice-audience", ["choose-person-associated-with-location"]),
    q("Library members: Bring your card when you borrow a book. What must members bring?", ["A library card", "A new book", "Money for every visit", "A family member"], 0, ["公告明確要求借書時攜帶圖書證。", "要借的書由圖書館提供。", "內容沒有收費資訊。", "也沒有要求家人陪同。"], ["必要物品直接來自公告動作。", "答案沒有加入常見但未寫出的圖書館規則。"], ["u31-s217-extract-required-item-from-member-notice", "reject-unstated-requirements"], "notice-required-action", ["add-common-context-assumption"]),
    q("CHANGE: Friday's game starts at 4:30, not 4:00. What changed?", ["The day", "The teams", "The place", "The starting time"], 3, ["星期五保持不變。", "沒有隊伍名稱被更改。", "公告沒有地點。", "開始時間從四點改成四點半。"], ["只有明確對比的欄位發生變更。", "答案沒有假設整份行程都改了。"], ["u31-s217-identify-start-time-change", "preserve-unchanged-notice-fields"], "notice-change-identification", ["assume-all-event-details-changed"]),
    q("Club members may bring one guest. What may a member choose to do?", ["Become a club member", "Bring one guest", "Write the club rules", "Hold the meeting"], 1, ["公告對象已經是會員。", "表示允許的情態動詞使帶客人成為選擇。", "內容沒有寫規則的任務。", "舉行會議也不是會員義務。"], ["情態動詞決定這項行動可自行選擇。", "一位客人的上限不會使帶客人成為必須。"], ["u31-s217-interpret-may-as-optional-guest-action", "separate-permission-from-duty"], "notice-modal-force", ["treat-may-as-must"]),
    q("Photo Show\nFor students ages 12–15\nSend one photo by May 8. Who may enter?", ["A fourteen-year-old student", "Any adult", "A ten-year-old student", "A student who sends three photos"], 0, ["十四歲位於指定年齡範圍。", "成人不在學生年齡範圍內。", "十歲低於最低年齡。", "公告限制每人一張照片。"], ["參加者與投稿數量規則都已核對。", "第一項是唯一完整符合資格的情況。"], ["u31-s217-apply-age-and-entry-count-eligibility", "evaluate-multiple-notice-conditions"], "notice-eligibility", ["meet-age-but-ignore-entry-rule"]),
    q("School band practice has moved from Music Room 1 to the Hall. The time is still 3:30. Where should students go?", ["Music Room 1", "The Hall", "Home", "The school gate"], 1, ["這是原本的舊地點。", "移動到之後接的是新地點。", "練習沒有取消。", "公告沒有校門資訊。"], ["套用地點變更，同時保留原時間。", "表示起點與終點的介系詞方向已正確判讀。"], ["u31-s217-follow-from-to-location-change", "retain-explicitly-unchanged-time"], "notice-location-change", ["choose-old-location-after-from"]),
    q("NOTICE: The clean-up day will be on a later day because of rain. A new date will be shared tomorrow. What should readers understand now?", ["The event is happening today inside.", "The event will never happen.", "The event is on a later day, but no one knows the new date yet.", "Tomorrow is the clean-up day."], 2, ["公告沒有室內活動。", "延後不代表永久取消。", "活動延後，而且新日期尚未公布。", "明天是公布日期的時間，不一定是活動日。"], ["延後狀態和未來更新要合併判讀。", "答案沒有把資訊公布日誤認為活動日。"], ["u31-s217-interpret-postponed-with-date-pending", "separate-update-time-from-event-time"], "notice-status-inference", ["equate-postponed-with-canceled-or-tomorrow"]),
    q("Parents of new students: Join the Internet meeting Thursday at 7 p.m. The link will be sent by e-mail. What is still needed to join?", ["A bus number", "The student's lunch choice", "A room number", "The e-mail link"], 3, ["會議在網路上舉行，不需要公車。", "午餐選擇和加入會議無關。", "此網路會議不需要實體教室號碼。", "公告說進入連結會由電子郵件寄出。"], ["活動形式決定尚缺的資訊。", "對象與時間都已經提供。"], ["u31-s217-identify-needed-link-for-online-meeting", "combine-event-mode-with-access-instruction"], "notice-action-preparation", ["seek-physical-location-for-online-event"]),
    q("Return sports clothes by noon Friday. Ken returns them Friday at 1 p.m. How late is Ken?", ["He is on time.", "One day early", "One hour late", "The time is not given"], 2, ["下午一點已晚於中午。", "這是同一天較晚，不是早一天。", "歸還發生在截止後一小時。", "公告已提供星期五中午這個明確期限。"], ["比較的是同一天的兩個時刻。", "答案也正確算出遲到時間。"], ["u31-s217-calculate-lateness-after-noon-deadline", "apply-by-to-hour-boundary"], "notice-deadline-application", ["treat-any-friday-time-as-on-time"]),
    q("Only students with a school card may enter the science room. What must they have?", ["A school card", "A coat from home", "A parent", "A lunch ticket"], 0, ["學生證是明確列出的進入條件。", "公告沒有衣物規定。", "沒有要求成人陪同。", "午餐券和科學教室進入無關。"], ["限定字引出必要條件。", "答案沒有加入可能存在但未寫出的安全規則。"], ["u31-s217-extract-entry-requirement-after-only", "avoid-adding-contextual-safety-rule"], "notice-access-condition", ["invent-unstated-condition"]),
    q("People needed to help Saturday, 9–11 a.m. Sign up at the office before Thursday. Lina goes to the office Thursday afternoon. What went wrong?", ["Saturday is not a weekend day.", "The event lasts too long.", "She signed up too late.", "People who help cannot visit an office."], 2, ["星期六是週末。", "公告沒有說兩小時過長。", "星期四以前不包含星期四下午。", "辦公室正是報名地點。"], ["實際報名時間已和排除邊界比較。", "活動時段與報名截止保持分開。"], ["u31-s217-diagnose-signup-after-before-thursday", "separate-registration-deadline-from-event-schedule"], "notice-registration-deadline", ["assume-event-date-is-signup-deadline"]),
    q("Town dinner\nFamilies may join for free. Please tell us how many people will come by Tuesday. What must a family do if it plans to join?", ["Pay before Tuesday", "Cook all the food", "Bring every family member", "Report the number of people by Tuesday"], 3, ["活動明確免費。", "公告沒有分配烹飪工作。", "家庭可決定哪些人參加，不必全員到場。", "最後一句提供要回報的資訊與期限。"], ["可選擇參加和參加後要回報的資料分開判讀。", "答案保留要做什麼與何時以前完成。"], ["u31-s217-combine-optional-attendance-with-reporting-duty", "distinguish-event-permission-from-followup-requirement"], "notice-conditional-duty", ["treat-free-as-no-response-needed"]),
  ]),
];

export const ENGLISH_UNIT_SOURCE = {
  unitId: UNIT_ID,
  lectures: ENGLISH_U31_LECTURES,
  questions: ENGLISH_U31_QUESTIONS,
  vocabularyPolicy: {
    capQuestionBasis: "appendix-5-table-1",
    additionalLearningTerms: ["activity", "add", "address", "adult", "board", "cancel", "ceiling", "chess", "contact", "customer", "daily", "danger", "direction", "downstairs", "event", "exit", "final", "fit", "flight", "form", "guest", "hall", "include", "information", "link", "lock", "magazine", "neither", "none", "novel", "passenger", "patient", "period", "platform", "print", "printer", "receive", "repair", "return", "seek", "serve", "silence", "silent", "state", "step", "toward", "travel", "usual", "weekday", "weight", "whole"],
    properNames: ["Amy", "Ava", "Ben", "Chen", "David", "Eric", "Ho", "Joy", "Ken", "Kim", "Lee", "Leo", "Lily", "Lin", "Lina", "Mia", "Mina", "Nina", "Omar", "Rosa", "Wang", "Wu", "Yu"],
    grammarNotation: ["a", "A", "B", "C", "D", "DD", "Fri", "K", "kg", "min", "MM", "Mon", "Q", "Tue", "Wed", "YYYY", "com"],
    malformedDistractors: [],
  },
};
