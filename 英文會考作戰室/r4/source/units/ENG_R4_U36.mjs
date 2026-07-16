import { defineEnglishUnit } from "../define-unit.mjs";

const STEMS = [
  "Which choice is the best answer?", "What is the text mainly about?", "Which statement best covers the whole paragraph?", "What should a careful reader choose?",
  "Which idea connects all the sentences?", "What is the writer's main point?", "Which answer is supported by the full text?", "Which choice gives the central idea?",
  "What does the paragraph as a whole show?", "Which summary keeps the right focus?", "Which option is neither too narrow nor too broad?", "What would be the best answer after reading every sentence?",
];

function casesToQuestions(cases, { type, operation, misconception }) {
  return cases.map(([passage, correct, correctReason, distractors], index) => {
    const choices = [{ value: correct, reason: correctReason, correct: true }, ...distractors.map(([value, reason]) => ({ value, reason, correct: false }))];
    const shift = index % 4;
    const rotated = [...choices.slice(shift), ...choices.slice(0, shift)];
    const answerIndex = rotated.findIndex((choice) => choice.correct);
    return [
      `${passage}\n${STEMS[index]}`,
      rotated.map((choice) => choice.value),
      answerIndex,
      rotated[answerIndex].reason,
      rotated.filter((choice) => !choice.correct).map((choice) => choice.reason),
      type,
      operation,
      misconception,
    ];
  });
}

const skills = [
  {
    id: "ENG_R4_S243", process: "distinguish-topic-from-detail", evidence: "能涵蓋多句的共同對象，而非只出現一次的細節",
    objectives: ["區分文章持續談論的主題與支持細節。", "以涵蓋句數檢查候選主題。", "排除醒目但只服務單一句子的名稱、數字與例子。"],
    sections: [
      ["主題回答談什麼", "主題通常可用短名詞片語表示，如 a school garden。細節則回答何時、多少、誰做了什麼。先問每一句是否都能連回候選主題。"],
      ["醒目不等於中心", "人名、價格與日期容易吸引注意，但若後文未再發展，它們只是細節。真正主題會被代名詞、同義詞或相關行動反覆承接。"],
      ["做涵蓋測試", "把候選寫在段落上方，逐句問『這句是否在說明它？』能涵蓋大多數句且不需硬拉關係者，才有資格成為主題。"],
      ["主題與主旨不同", "主題是文章談的對象；主旨還包含作者對該對象說了什麼。先抓對主題，再進一步判斷中心訊息。"],
    ],
    examples: [
      ["A library added long tables, bright lights, and more chairs.", ["tables、lights、chairs 都是細節。", "三者共同描述 library 的改變。", "用短語概括。"], "changes in a library", "只選 chairs 會漏掉另外兩項。"],
      ["The text names May 3 once, then explains a beach clean-up in four sentences.", ["日期只定位時間。", "清理活動被持續發展。", "比較涵蓋句數。"], "the beach clean-up", "May 3 是活動細節，不是跨句主題。"],
      ["A passage says Mia bought a bike for $80 and then describes how she rides it to school each day.", ["價格只出現一次。", "bike 與 riding 跨句承接。", "選能涵蓋使用情形的主題。"], "Mia's bike", "$80 不能解釋每天騎車的後文。"],
    ],
    misconceptions: [
      ["最具體的數字一定是主題。", "數字常只是支持細節。", "檢查後文是否持續發展該數字。"],
      ["第一句最後一個名詞就是主題。", "後文可能轉而發展第一句中的另一概念。", "用整段涵蓋率決定。"],
      ["提到人名，文章主題就一定是那個人的一生。", "文章可能只談他的一次行動。", "將範圍限制在本文實際內容。"],
      ["主題必須是一個完整句。", "主題常是名詞片語。", "主旨才通常以完整命題表達。"],
    ],
    checks: [
      ["只出現一次的 7:30 最可能是什麼？", "時間細節", "除非整段都比較時間。"],
      ["主題候選應能連回多少句？", "大多數或全部句子", "跨句涵蓋是核心檢查。"],
      ["a new park 是主題還是完整主旨？", "較可能是主題", "它只指出談論對象，尚未說中心訊息。"],
    ],
    questions: casesToQuestions([
      ["A new bus stop opened near the school. It has a roof, a bench, and a bright light. Students now wait there after class.", "the new bus stop", "三句都介紹、描述或使用同一個新站牌。", [["the bright light", "只抓到站牌的一項設備。"], ["all transport in the city", "原文只談一個校旁站牌，沒有涵蓋全市交通。"], ["students' homework", "after class 不是在談作業。"]]],
      ["On June 5, the class planted flowers beside the gate. They watered the plants every morning. By July, the entrance was full of color.", "the class flower project", "種花、澆水與最後成果形成同一活動。", [["June 5", "日期只標示活動開始時間。"], ["every school project", "文章沒有談其他類型的學校計畫。"], ["how to paint a gate", "color 來自花朵，不是油漆。"]]],
      ["Nora found an old camera in a box. She cleaned it and learned how to use it. Soon she was taking pictures for the school paper.", "Nora's old camera", "相機從被發現、清理到實際使用，貫穿全文。", [["the box", "箱子只出現在發現相機的位置。"], ["the history of all cameras", "原文沒有介紹相機歷史。"], ["writing for a newspaper", "Nora 拍照而非撰寫報導。"]]],
      ["The town pool now opens at seven. It also offers a morning class and a quiet lane for older swimmers. These changes have brought more people before work.", "new morning choices at the town pool", "開放時間、晨間課與泳道都在說明泳池新增的早晨選擇。", [["seven o'clock", "只涵蓋第一項開放時間。"], ["every sports center", "文章沒有談其他運動中心。"], ["why people avoid water", "後文說更多人來，而非避開。"]]],
      ["Ben keeps a small bag by the door. Inside are a light, water, and a radio. His family can take it quickly when a storm comes.", "Ben's storm bag", "袋中物品與使用時機都圍繞防災袋。", [["the radio", "radio 只是袋內三項物品之一。"], ["all kinds of weather", "原文只給 storm 情境。"], ["a school lunch", "袋中用途是風災準備，不是午餐。"]]],
      ["A cafe began using cups that customers can return. The shop washes each cup and uses it again. This has cut its daily waste.", "the cafe's returnable cups", "三句說明杯子制度、重複使用與減廢結果。", [["washing dishes", "清洗只是制度的一個步驟。"], ["waste in every restaurant", "原文只談這家 cafe。"], ["how to make coffee", "內容沒有說製作咖啡。"]]],
      ["Leo practices the guitar for fifteen minutes each day. He starts with easy songs and then works on one hard part. His playing has become smoother.", "Leo's guitar practice", "時間、方法與進步都承接每日練琴。", [["fifteen minutes", "時間長度只是練習細節。"], ["the lives of famous musicians", "原文沒有名人或生涯。"], ["repairing a guitar", "works on a hard part 指練曲段，不是修琴。"]]],
      ["The school garden attracts bees and birds. Its trees give shade, and students grow vegetables there. Teachers also use the area for science lessons.", "uses and benefits of the school garden", "動物、遮蔭、種菜與上課都呈現花園的多種價值。", [["science lessons", "只涵蓋最後一句的一項用途。"], ["all wild animals", "文章只提 garden 內兩類動物。"], ["building a classroom", "老師在花園上課，不是建教室。"]]],
      ["Mia's dog waits by the window at four. When the school bus appears, it runs to the door. It greets Mia with a toy.", "Mia's dog waiting for her", "三句追蹤狗等待、看到車與迎接 Mia。", [["the school bus", "公車只觸發狗的動作，不是全文主角。"], ["how all pets behave", "原文只描述 Mia 的狗。"], ["a lost toy", "玩具用來迎接，沒有遺失。"]]],
      ["A river path was dark after sunset. The town added lights along two kilometers of it. Evening walkers now say they feel safer.", "new lights on the river path", "黑暗問題、加燈處理與安全結果構成同一主題。", [["two kilometers", "長度只是加燈範圍。"], ["every danger at night", "原文只處理河道照明。"], ["a daytime race", "情境是 sunset 後的 walkers。"]]],
      ["Jay's class collected coats in November. Families brought clean coats to school, and students sorted them by size. A local group gave them to people in need.", "the class coat drive", "收集、分類與捐出外套是同一公益活動流程。", [["November", "月份只標示活動時間。"], ["all local groups", "原文只提一個協助發送的團體。"], ["buying school clothes", "外套由家庭捐入，不是購買。"]]],
      ["The old market has narrow paths, small food stands, and a music stage. Visitors come for dinner but often stay for the evening shows.", "the old market experience", "場地、食物與表演共同描述市場提供的體驗。", [["the music stage", "只涵蓋市場的一個區域。"], ["the history of every market", "文章未談歷史或其他市場。"], ["a quiet place to study", "市場有餐飲與表演，非安靜自習地。"]]],
    ], { type: "topic-detail-reading", operation: "apply-whole-paragraph-coverage", misconception: "choose-salient-detail" }),
  },
  {
    id: "ENG_R4_S244", process: "infer-gist-from-repeated-concepts", evidence: "多句以重複、同義或因果方式回到的共同概念",
    objectives: ["合併重複詞與同義改寫，歸納段落大意。", "將多個例子提升為不過度的共同概念。", "避免只抄第一句或最後一句。"],
    sections: [
      ["把詞鏈合併", "同一概念可能以 help、support、give a hand 出現。先圈出反覆回來的詞鏈，再問它們共同說明什麼。"],
      ["從例子往上一層", "若段落列出帶自己的杯子、關燈、步行，不能只選其中一項；應歸納成 daily actions that help the environment，但也不能擴到所有全球問題。"],
      ["加入作者說了什麼", "大意不只命名主題，還要包含核心訊息。例如主題是 school lunch，大意可能是 students helped improve the lunch，而非只寫 lunch。"],
      ["用刪句測試", "若拿掉某一個例子，正確大意仍應成立；若拿掉所有重複概念後候選就失去支持，表示它確實抓到段落共同核心。"],
    ],
    examples: [
      ["Bring a cup. Use both sides of paper. Turn off lights.", ["三句都是日常行動。", "共同結果是減少資源浪費。", "歸納而不列舉。"], "Small daily choices can reduce waste.", "涵蓋三例且沒有擴張到未談政策。"],
      ["Neighbors cooked, carried boxes, and cleaned after the event.", ["三個動詞主詞相同。", "都是協助活動。", "提升為共同概念。"], "Neighbors helped make the event work.", "不只重述其中一項工作。"],
      ["The first and last sentence both mention safer streets; middle sentences explain lights and signs.", ["重複概念為 safer。", "中間提供方法。", "組成大意。"], "Lights and signs made the streets safer.", "方法與核心結果都被保留。"],
    ],
    misconceptions: [
      ["把例子全部抄進答案才完整。", "大意應壓縮共同概念。", "保留上位訊息與必要結果。"],
      ["同一字出現最多就直接拿來當大意。", "需要說明作者對它的中心訊息。", "將主題與主要動作或評價結合。"],
      ["任何環保例子都能推到全球氣候。", "那會超出段落範圍。", "只提升到能涵蓋原例的最近上位概念。"],
      ["最後一句永遠是大意。", "最後一句可能只是最後一例。", "用全段詞鏈核對。"],
    ],
    checks: [
      ["三個不同節水例子應如何歸納？", "節水的多種日常方法", "上位概念涵蓋所有例子。"],
      ["正確大意拿掉一個例子後應仍成立嗎？", "應", "它描述共同核心而非單一細節。"],
      ["只寫 school garden 足以成為大意嗎？", "通常不足", "還需說明文章對花園的主要訊息。"],
    ],
    questions: casesToQuestions([
      ["Students brought bottles they could use again. The cafe stopped giving plastic forks. Teachers printed less paper. Together, these changes cut school waste.", "Several school changes reduced waste", "三個不同改變都由末句統整為減少廢棄物。", [["Students brought bottles", "只重述第一個例子。"], ["Every school has ended all waste", "原文只說這所學校減少，沒有完全歸零。"], ["Teachers stopped teaching", "printed less paper 不等於停止教學。"]]],
      ["Every Saturday, neighbors check on older people, carry heavy bags, and share hot meals. The visits help everyone feel connected.", "Weekend visits help neighbors support one another", "多個協助行動與 connected 結果共同支持鄰里互助。", [["People carry bags", "只涵蓋一項協助。"], ["All older people live alone", "文章沒有說所有長者獨居。"], ["Saturday is the longest day", "星期六只是活動時間。"]]],
      ["The new signs show drivers where to slow down. Bright lines help walkers cross, and lights make the corner easy to see. Fewer people now feel unsafe there.", "Road changes made the corner safer", "標誌、線條與燈光都導向安全改善。", [["The signs tell drivers to slow", "只抓到第一項設施。"], ["No road can ever be dangerous again", "原文只說該路口改善。"], ["Walkers prefer dark corners", "與 bright lines、lights 和 safer 結果相反。"]]],
      ["Mia reads the question twice, circles time words, and checks every choice in the sentence. This routine has reduced her small mistakes.", "A careful checking routine improves Mia's work", "三個閱讀檢查步驟共同導向少犯錯。", [["Mia circles time words", "只保留一個步驟。"], ["Reading twice solves every test problem", "原文只說減少 small mistakes，沒有保證全解。"], ["Mia finishes without checking", "與 routine 內容相反。"]]],
      ["The club put herbs near the kitchen, flowers by the gate, and trees beside the field. Each plant was placed where it would be most useful.", "The club planned where different plants should go", "三個配置例共同說明依用途安排植物。", [["Flowers are by the gate", "只重述一個位置。"], ["All plants grow well everywhere", "末句強調依適合位置安排，不是任何處都好。"], ["The club removed the field", "原文只在 field 旁種樹。"]]],
      ["Ben walks short trips, takes the bus across town, and shares a ride when carrying boxes. He chooses travel by what each trip needs.", "Ben uses different travel choices for different needs", "三種方式由最後一句歸納為依需求選擇。", [["Ben walks short trips", "只涵蓋第一種方式。"], ["One kind of travel is best for everyone", "原文顯示方式隨需求改變。"], ["Ben never travels with boxes", "末句前明說 carrying boxes 時共乘。"]]],
      ["The museum added seats beside long displays, printed larger words, and opened a quiet room. More visitors can now enjoy the visit comfortably.", "The museum made visits more comfortable for more people", "多項改變共同服務末句的可用性與舒適。", [["The museum printed larger words", "只涵蓋一項改變。"], ["Every museum must use the same rooms", "原文沒有普遍規定。"], ["The displays became shorter", "文章只說旁邊增設 seats。"]]],
      ["Nora first learned two easy songs. She practiced a hard part slowly and recorded herself each week. After a month, she could hear clear progress.", "Regular, focused practice helped Nora improve", "學簡曲、慢練難段與錄音追蹤都構成有方法的持續練習。", [["Nora recorded one song", "錄音是每週且只是方法之一。"], ["Everyone becomes a musician in one month", "原文只描述 Nora 的進步。"], ["Nora stopped when the music was hard", "她反而慢慢練困難部分。"]]],
      ["A farm keeps rainwater for dry days, uses old leaves to improve soil, and sells food nearby. These choices save resources and reduce long travel.", "The farm uses resources carefully", "三項做法都被末句統整為節省資源與縮短運送。", [["The farm sells food nearby", "只抓到最後一例。"], ["Farms can control all weather", "儲雨水不等於控制天氣。"], ["Old leaves must be burned", "原文用 leaves 改善 soil。"]]],
      ["The class asked students what games they wanted, tested two ideas, and changed the rules after feedback. The final activity worked well for more students.", "Student feedback helped improve the class activity", "詢問、測試與修改都圍繞回饋改善活動。", [["The class tested two ideas", "只抓到流程中一步。"], ["Every game needs the same rules", "原文明說依 feedback 改規則。"], ["Students were not allowed to speak", "第一句正是詢問學生。"]]],
      ["Jay puts tomorrow's books by the door, checks the weather, and sets an alarm. His short evening routine makes mornings easier.", "Evening preparation helps Jay have easier mornings", "三個準備動作與末句結果形成完整大意。", [["Jay sets an alarm", "只重述一個準備。"], ["All morning problems are caused by books", "原文有多種準備且沒有談所有問題。"], ["Jay checks weather after school starts", "動作在 evening routine 中。"]]],
      ["The town repaired a path, added signs, and planted shade trees. Walkers, bike riders, and families now use the river area more often.", "Improvements brought more people to the river area", "三項建設與多類使用者增加共同支持改善效果。", [["The town planted trees", "只涵蓋一項改善。"], ["The river area is the largest in the country", "原文沒有大小比較。"], ["People stopped using the path", "與 more often 相反。"]]],
    ], { type: "gist-reading", operation: "generalize-repeated-concepts", misconception: "copy-one-example" }),
  },
  {
    id: "ENG_R4_S245", process: "confirm-center-with-opening-and-ending", evidence: "開頭設定的問題或主題與結尾給出的結果互相呼應",
    objectives: ["從開頭辨認文章提出的對象、問題或目標。", "從結尾辨認作者最後確認的結果或看法。", "將首尾共同訊息與中段證據整合為全文中心。"],
    sections: [
      ["開頭設定閱讀問題", "首句常介紹人物目標、現況或問題。先把它改寫成一個問題，如 How can the town make the park safer?，讀中段時找回答。"],
      ["結尾通常收束", "末句可能報告結果、給建議或回到開頭概念。它不是自動答案，但能確認中段例子最後要支持什麼。"],
      ["做首尾握手測試", "把開頭與結尾並排：若同一關鍵概念在不同措辭中再次出現，這條連線常是全文中心。中段細節應能解釋兩者如何相連。"],
      ["防止只讀首尾", "首尾是框架，不代表可跳過中間。若中段發生轉折，結尾可能修正開頭預期；必須用全部內容確認。"],
    ],
    examples: [
      ["Opening: Few people used the park at night. Ending: Now families stay after sunset.", ["開頭是夜間少人。", "結尾是夜間人增加。", "中段應解釋改善。"], "Changes made the park more welcoming at night.", "首尾以夜間使用的前後差異框住中心。"],
      ["Opening: Mia feared speaking. Ending: She volunteered to introduce the show.", ["開頭設定害怕。", "結尾顯示主動說話。", "中心是克服與進步。"], "Mia became more confident speaking.", "不能只寫 show，因首尾核心是 Mia 的改變。"],
      ["Opening asks how to cut lunch waste; ending says the new plan cut it by half.", ["問題與結果使用同一 waste 概念。", "中段是方法。", "整合成問題—方案—成效。"], "A new plan successfully reduced lunch waste.", "首尾直接確認方案目標與結果。"],
    ],
    misconceptions: [
      ["首句一定就是完整主旨。", "首句可能只提出問題。", "用結尾與中段補足作者的回答。"],
      ["末句一定可單獨當摘要。", "末句可能只呈現結果。", "把結果連回開頭目標。"],
      ["首尾用字不同就沒有關聯。", "同義改寫也能呼應。", "追蹤概念而非完全相同字形。"],
      ["只讀首尾就能忽略中段。", "中段可能提供關鍵轉折與方法。", "首尾提出假設，再以全段驗證。"],
    ],
    checks: [
      ["開頭提出問題，結尾通常可提供什麼？", "回答或結果", "兩端共同框定中心。"],
      ["首尾概念相反一定無關嗎？", "不一定", "可能呈現前後改變。"],
      ["首尾測試後還要讀哪裡？", "中段", "確認方法與轉折是否支持。"],
    ],
    questions: casesToQuestions([
      ["At first, few students used the reading room after school. The library added group tables and kept the room open later. By spring, every table was busy each afternoon.", "Library changes increased use of the reading room", "開頭的少人使用與結尾的滿座由中段兩項改變連接。", [["The library added group tables", "只保留中段一項方法。"], ["All students everywhere prefer libraries", "原文只談一校 reading room。"], ["Spring made the tables smaller", "spring 只是結果時間，沒有桌子變小。"]]],
      ["Mia once stayed silent during group reports. She began practicing one short part with a friend. Last week, she clearly presented the opening by herself.", "Practice helped Mia become more confident speaking", "首尾從沉默到獨自報告，中段練習解釋轉變。", [["Mia has one friend", "朋友只是練習方式的細節。"], ["Every quiet person should give long talks", "原文只描述 Mia 且部分很短。"], ["Mia stopped joining reports", "結尾明說她完成 opening。"]]],
      ["The town wanted to reduce plastic at its summer fair. Sellers changed to returnable cups and paper bags. After the fair, plastic waste was less than half of last year's amount.", "New fair practices greatly reduced plastic waste", "開頭目標與結尾減量結果由中段方法連接。", [["Sellers used paper bags", "只涵蓋兩項方法之一。"], ["The town ended every kind of waste", "原文只量 plastic 且仍有剩餘。"], ["Last year's fair had no sellers", "沒有這項資訊。"]]],
      ["Ben could not keep his plant healthy. A neighbor showed him how to check the soil before adding water. Two months later, the plant had six new leaves.", "Learning when to water helped Ben's plant grow", "開頭問題與結尾新葉由 soil-checking 方法解決。", [["The plant had six leaves", "漏掉學習方法與前後改變。"], ["Every plant needs water every hour", "原文強調先檢查 soil。"], ["The neighbor took the plant away", "只是示範，plant 仍由 Ben 照顧。"]]],
      ["Drivers often missed the small sign near the bridge. Workers moved it higher and added a light. Since then, cars have slowed before reaching the narrow road.", "A clearer sign helped drivers slow down", "開頭看不到與結尾減速由移高加燈連接。", [["Workers added a light", "只保留改善中的一項。"], ["All bridges have narrow roads", "原文只談該處。"], ["Cars now move faster", "與 slowed 相反。"]]],
      ["Nora wanted classmates to join the coat drive, but her first note was unclear. She rewrote it with a date, place, and list of needed items. The next morning, the collection box was full.", "A clearer message made the coat drive successful", "首段招募問題與結尾滿箱由重寫資訊連接。", [["The note listed a date", "只抓到新訊息的一項內容。"], ["Every written message fills a box", "結論只適用本活動。"], ["Classmates could not understand the second note", "滿箱結果顯示訊息有效。"]]],
      ["The river path used to end at a busy road. The town built a short bridge over the traffic. Now riders can reach the park without leaving the bike path.", "A bridge made the bike route safer and more complete", "開頭路線中斷與結尾連到公園由橋解決。", [["The bridge is short", "長度只是設備細節。"], ["No rider ever uses a road", "原文只談這一路線的新選擇。"], ["The park moved across town", "改變的是路線，不是公園位置。"]]],
      ["Jay's mornings were often rushed. He began packing his bag and preparing breakfast at night. He now reaches the bus stop with time to spare.", "Evening preparation made Jay's mornings easier", "開頭匆忙與結尾從容由前晚準備解釋。", [["Jay packs a bag", "只保留準備的一項。"], ["Everyone must eat breakfast at night", "他是晚上 preparing，不是一定晚上吃。"], ["Jay stopped taking the bus", "結尾仍到 bus stop。"]]],
      ["The museum noticed that children quickly left a long history display. It added touchable models and a short game. Surveys now show that young visitors stay twice as long.", "Interactive additions kept children interested longer", "開頭快速離開與結尾停留加倍由模型和遊戲連接。", [["The museum added a game", "只保留一項新設計。"], ["All history displays should remove words", "原文沒有移除文字或普遍主張。"], ["Surveys made children leave", "survey 是測量結果，不是離開原因。"]]],
      ["A cafe threw away many unsold sandwiches each night. It began offering them at a lower price before closing. At the end of the month, food waste had fallen by seventy percent.", "A late discount sharply reduced the cafe's food waste", "開頭浪費與結尾下降由打折方案連接。", [["The cafe closes at night", "營業時間只是方案背景。"], ["No cafe ever wastes food", "原文只報告一店減少且未說歸零。"], ["Higher prices sold more sandwiches", "方案是 lower price。"]]],
      ["The class pet was often left without water over weekends. Students made a schedule with one name for each day. After that, the bowl was never empty.", "A care schedule solved the pet's water problem", "開頭缺水與結尾不再空由輪值表解決。", [["The bowl holds water", "物件功能不是中心改變。"], ["Every student got a new pet", "原文只有 class pet。"], ["Weekends were removed", "改變的是照顧安排。"]]],
      ["People once avoided the empty lot because it was dark and full of waste. Neighbors cleaned it, planted grass, and added lights. It is now a popular place for evening walks.", "Neighbors changed an unsafe empty lot into a useful public space", "開頭被避開與結尾受歡迎由清理、種草和照明連接。", [["Neighbors planted grass", "只保留改造中的一項。"], ["Every empty lot should become a sports field", "原文只說 evening walks，未提運動場。"], ["People still avoid the lot", "與 popular 相反。"]]],
    ], { type: "opening-ending-reading", operation: "connect-initial-state-to-final-result", misconception: "copy-opening-or-ending-alone" }),
  },
  {
    id: "ENG_R4_S246", process: "select-bounded-main-idea", evidence: "涵蓋全文但不加入未被原文支持的人、時間、因果或普遍結論",
    objectives: ["以全文涵蓋與範圍邊界選主旨。", "辨認含 always、everyone 等過度字眼的擴張選項。", "分開排除過窄、過廣、因果顛倒與主題偏移。"],
    sections: [
      ["主旨的兩道門", "第一道問是否涵蓋全文，第二道問是否只說原文有證據的範圍。只通過其中一道仍不是答案。"],
      ["警覺絕對語氣", "always、never、everyone、the only way 常把有限觀察放大成普遍規則。除非原文明確證明，應視為過度延伸。"],
      ["保留限定範圍", "文章若談 one town、this class、during the test，主旨也要保留相近範圍，不能擴成 every city、all students、for life。"],
      ["檢查因果強度", "原文只說 two things happened together，答案不能擅自說 A caused B。選用 helped、may、was linked to 等符合證據強度的表達。"],
    ],
    examples: [
      ["One class tried a no-phone lunch and talked more.", ["範圍是一個班級一次嘗試。", "結果是交談增加。", "避免推成全國規定。"], "A no-phone lunch helped one class talk more.", "保留 one class 與 helped 的有限因果。"],
      ["Three riders said the new path felt safer.", ["證據只有三人感受。", "不能說所有人。", "不能說事故歸零。"], "Some riders felt safer on the new path.", "some 與 felt 都符合證據。"],
      ["A passage lists two benefits and one problem of online study.", ["全文有正反兩面。", "不能只選好處。", "也不能宣稱全面最好。"], "Online study has benefits and a challenge.", "範圍與平衡都吻合。"],
    ],
    misconceptions: [
      ["語氣越強越像主旨。", "強語氣常超過證據。", "讓答案強度與原文一致。"],
      ["涵蓋很多就算正確。", "過廣答案可涵蓋但也加入未談內容。", "要求既完整又有邊界。"],
      ["作者舉一例就支持普遍規則。", "單一案例只證明該案例。", "保留 one、some 或 may 等限定。"],
      ["同時發生就可寫造成。", "相關不一定因果。", "除非有因果證據，避免 caused。"],
    ],
    checks: [
      ["原文說 some，答案可改 everyone 嗎？", "不可", "範圍被不當擴張。"],
      ["主旨只重述一個例子有何問題？", "過窄", "不能涵蓋全文其他證據。"],
      ["原文只觀察同時變化，可直接寫 caused 嗎？", "不可", "因果強度超出證據。"],
    ],
    questions: casesToQuestions([
      ["Five students tried studying for twenty minutes before checking their phones. Four said they finished homework faster, while one saw no change.", "Most students in this small group reported faster homework", "Most 與 small group 保留樣本與一人無變化的證據。", [["One student saw no change", "只重述少數細節，漏掉主要結果。"], ["Phones always stop every student from learning", "always、every 超過五人觀察且忽略一人無變化。"], ["The study proved that phones cause all slow homework", "小型自述未證明所有作業的普遍因果。"]]],
      ["A town added a Sunday bus. Shops near the route reported more visitors, but ticket sales did not yet cover the bus cost.", "The Sunday bus brought a benefit but still had a cost problem", "同時涵蓋來客增加與票收不足。", [["Shops saw more visitors", "只保留好處，漏掉成本問題。"], ["Every town should run free buses", "文章沒有提出普遍政策或免費。"], ["The bus had no useful effect", "與 shops reported more visitors 相反。"]]],
      ["Nora grew herbs on a sunny window. The leaves were small at first, but regular water and more space helped them grow.", "Better care helped Nora's herbs grow", "保留 Nora 個案與水、空間改善的中心。", [["The window was sunny", "只是種植環境的一項細節。"], ["All plants can grow in any window", "原文只談 Nora 的 herbs 且需照顧。"], ["Small leaves always mean a plant is dead", "後文顯示葉子之後成長。"]]],
      ["Two classes used a new reading game for a month. Both read more books, though the report did not test whether the game was the only reason.", "Reading increased during the game, but the cause is not certain", "保留觀察結果與報告的因果限制。", [["Both classes read more books", "只保留結果，漏掉重要限制。"], ["The game is the only way to make anyone read", "原文明說未測試唯一原因。"], ["The classes read fewer books because of the game", "方向與 more books 相反。"]]],
      ["The school garden gives vegetables to the kitchen, a place for science lessons, and shade at lunch. It also needs weekly care during summer.", "The garden offers several benefits and requires regular care", "完整保留三項價值與照顧需求。", [["The garden gives shade", "只抓一項好處。"], ["School gardens solve every food and science problem", "every 與 solve 擴張過度。"], ["The garden needs no work in summer", "與 weekly care 相反。"]]],
      ["A cafe asked customers to bring cups for one week. Cup waste fell, but workers spent extra time checking cup sizes.", "The cup plan reduced waste and created extra work", "包含一正一負且保留一週試行。", [["Cup waste fell", "只涵蓋好處。"], ["Returnable cups have no problems anywhere", "原文有額外工作且只是一店一週。"], ["Workers refused every customer", "文章只說檢查尺寸花時間。"]]],
      ["Leo listened to English on the bus for ten days. He felt more comfortable with common sounds, but his test score was not measured.", "Short daily listening made Leo feel more comfortable, though score effects are unknown", "保留主觀進步並不虛構測驗成效。", [["Leo listened on the bus", "只交代地點與行動。"], ["Ten days of listening guarantees a high score", "未測 score，guarantees 超出證據。"], ["Listening made Leo less comfortable", "與 felt more comfortable 相反。"]]],
      ["The town closed one street to cars on Saturday afternoon. Families enjoyed walking there, while some drivers reported longer trips.", "The car-free afternoon pleased walkers but inconvenienced some drivers", "同時涵蓋兩群人的不同結果。", [["Families enjoyed walking", "只說一方反應。"], ["Cars should be banned from every street forever", "原文只有 one street、Saturday afternoon。"], ["All drivers enjoyed shorter trips", "與 some drivers reported longer trips 相反。"]]],
      ["A survey of thirty riders found that twenty preferred the new bike path. The survey did not ask people who never ride bikes.", "Most surveyed riders preferred the path, but the survey was limited", "使用 surveyed riders 並保留未訪問非騎士的限制。", [["Twenty riders preferred the path", "只重述數字，未呈現比例與限制。"], ["Everyone in town prefers biking", "樣本只含三十位 riders。"], ["The survey proved nobody likes cars", "未詢問汽車偏好，也排除非騎士。"]]],
      ["Mia used a paper list and a phone list for two trips. The phone was easier to change, but the paper worked when the battery was low.", "Each kind of list helped in a different situation", "兩次經驗呈現 phone 可改與 paper 不需電的互補。", [["The phone list was easy to change", "只涵蓋其中一項優點。"], ["Paper is always better than every phone", "文章呈現各有用途，不支持 always。"], ["Neither list was useful", "兩者各有明確好處。"]]],
      ["A class tried standing for short parts of lessons. Some students felt more awake, while others found it hard to write.", "Standing during lessons had mixed effects for the class", "mixed effects 同時涵蓋清醒與書寫困難。", [["Some students felt awake", "漏掉 others 的困難。"], ["All students should stand through every lesson", "some/others 的結果不支持普遍規定。"], ["Standing made writing easy for everyone", "與 found it hard 相反。"]]],
      ["The museum's free evening drew more local visitors than usual. The report covered only one evening and did not compare other months.", "One free evening was linked to higher local attendance", "one 與 linked 保持時間及因果邊界。", [["More local visitors came", "漏掉單次觀察限制。"], ["Free entry always increases every museum's visitors", "單一晚不能推到所有博物館與永遠。"], ["The report showed fewer visitors in every month", "未比較其他月份且當晚更多。"]]],
    ], { type: "bounded-main-idea", operation: "match-claim-scope-to-evidence", misconception: "choose-overgeneralized-claim" }),
  },
  {
    id: "ENG_R4_S247", process: "select-appropriate-title", evidence: "標題能指出全文核心而不劇透單一局部或誇大範圍",
    objectives: ["選擇能提示全文核心的精簡標題。", "排除只命名開頭、結尾或單一例子的標題。", "避免過度聳動、洩漏局部答案或加入作者未有的評價。"],
    sections: [
      ["標題是入口不是摘要", "好標題通常短，讓讀者知道核心對象或問題，但不必列出每項結果。它要比細節寬，又比空泛詞如 Life 窄。"],
      ["全文覆蓋仍是底線", "標題雖短，仍需能罩住開頭、中段與結尾。若只對應最後一句的驚喜，會把前面大部分內容留在外面。"],
      ["不靠誇張吸睛", "The Best Plan Ever 這類標題若原文只是一次成功嘗試，就加入未被證明的評價。正式閱讀題偏好準確而非廣告式語氣。"],
      ["文類會影響標題", "故事標題可抓人物目標或關鍵轉變；說明文標題常命名主題與功能；公告標題要清楚活動或規則。先辨認文類再選。"],
    ],
    examples: [
      ["A story follows a lost dog that finds its way home by following familiar sounds.", ["人物是 dog。", "核心問題是回家。", "聲音是關鍵方法。"], "Sounds That Led a Dog Home", "涵蓋故事主線而非只寫 One Loud Bell。"],
      ["A text explains three ways libraries help people who cannot visit.", ["文類是說明。", "主題是 library service。", "共同功能是遠距協助。"], "Library Help beyond the Building", "不需列出三種方法。"],
      ["An announcement gives time, place, and items for a river clean-up.", ["文類是活動公告。", "核心活動是 clean-up。", "標題直接清楚。"], "River Clean-up Day", "比 A Pair of Gloves 更能涵蓋全文。"],
    ],
    misconceptions: [
      ["標題越神祕越好。", "考題要求適切，不能隱去核心。", "讓讀者知道文章主要談什麼。"],
      ["把結局完整寫出最準確。", "可能只抓局部並洩漏故事效果。", "概括主線而不塞入所有結果。"],
      ["出現一次的有趣物件最適合當標題。", "醒目細節未必控制全文。", "用全文覆蓋測試。"],
      ["加入 best、perfect 會更吸引人。", "未經證明的評價會誇大。", "保持與作者證據同強度。"],
    ],
    checks: [
      ["標題需列出所有例子嗎？", "不需", "應壓縮成核心概念。"],
      ["只對應末句的標題有何風險？", "過窄", "可能漏掉全文主線。"],
      ["原文無比較，可用 The Best 嗎？", "不宜", "加入未證明的最高級評價。"],
    ],
    questions: casesToQuestions([
      ["A boy finds an injured bird, calls a local helper, and later watches the healthy bird fly away.", "Helping a Bird Fly Again", "涵蓋發現、求助與恢復飛行的故事主線。", [["One Phone Call", "只抓到中間求助的一步。"], ["The Greatest Animal Rescue in History", "原文沒有歷史比較或 greatest 證據。"], ["Why Birds Never Need People", "與受傷鳥獲救相反。"]]],
      ["A short article explains how shade, water, and rest help walkers stay safe on very hot days.", "Walking Safely in Hot Weather", "命名活動、情境與全文共同目的。", [["A Bottle of Water", "只涵蓋三項方法之一。"], ["How to Control the Weather", "原文只談因應，不能控制天氣。"], ["The Coldest Walk Ever", "與 very hot days 相反且誇張。"]]],
      ["A school notice asks families to return library books before Friday and lists three return boxes.", "Friday Library Book Return", "清楚指出公告任務與期限。", [["The Box by the Gate", "只抓其中一個可能的 return box。"], ["Every Book in the World", "範圍遠超學校圖書。"], ["A New Reading Contest", "公告是還書，不是比賽。"]]],
      ["Neighbors turn an empty lot into a garden, share the work, and hold their first meal there.", "A Garden Built Together", "涵蓋共同改造與社區使用。", [["The First Tomato", "原文未以單一番茄為主線。"], ["The Perfect Garden for Everyone", "perfect/everyone 超過一次社區經驗。"], ["Why Neighbors Stopped Meeting", "結尾反而共同用餐。"]]],
      ["A girl tries several ways to wake up early and discovers that preparing at night helps most.", "A Better Start Begins at Night", "抓住早起目標與前晚準備的關鍵發現。", [["The Red Alarm Clock", "原文核心不是特定鬧鐘。"], ["The Only Way Anyone Can Wake Up", "一次個人經驗不能推出 only/anyone。"], ["Sleeping through Every Morning", "故事重點是改善起床。"]]],
      ["An article compares paper maps and phone maps, giving one useful situation for each.", "Two Maps for Different Needs", "保留比較雙方與各有用途的中心。", [["When a Battery Is Low", "只抓 paper map 的一種情境。"], ["Phones Are Always Better", "與 each useful situation 的平衡相反。"], ["A History of Every Map", "原文是功能比較，不是歷史。"]]],
      ["A cafe collects clean jars, fills them with soup, and lets customers return them the next day.", "Soup Jars That Come Back", "涵蓋容器重複使用的完整循環。", [["Tuesday's Soup", "日期不是全文核心。"], ["The End of All Food Waste", "原文只談 jars，未宣稱消除全部浪費。"], ["Why Customers Keep Every Jar", "顧客隔天 return，與標題相反。"]]],
      ["A narrative follows a class whose outdoor show faces rain but succeeds after moving into the hall.", "A Show Saved from the Rain", "概括問題、調整與成功主線。", [["Fifty Chairs", "chairs 充其量是場地細節。"], ["The Best Show the Town Has Ever Seen", "沒有跨表演比較。"], ["Why the Class Canceled", "故事中 show 成功而非取消。"]]],
      ["A science text describes how bees carry material between flowers and help plants form fruit.", "How Bees Help Flowers Make Fruit", "準確命名過程與功能。", [["One Yellow Flower", "只是一個可能例子。"], ["Bees Control Every Plant", "help 不等於控制所有植物。"], ["Why Fruit Keeps Bees Away", "方向與文章功能相反。"]]],
      ["A town survey asks riders where bike racks are needed and then adds racks at the two most requested places.", "From Rider Answers to New Bike Racks", "涵蓋調查與依回饋行動的兩階段。", [["The Rack near the Station", "只涵蓋一個地點。"], ["A Plan That Solved All Travel Problems", "原文只處理 bike racks。"], ["Why the Town Ignored Riders", "新增於最需要處顯示採納意見。"]]],
      ["A boy borrows a coat, finds a note in its pocket, and returns both note and coat to the owner.", "The Note in a Borrowed Coat", "note 是推動借衣、發現與歸還的關鍵物件，仍保留主線。", [["A Blue Button", "原文沒有以 button 為核心。"], ["The Most Valuable Note Ever Found", "沒有價值比較。"], ["Keeping What Is Not Yours", "男孩最後歸還，並未占有。"]]],
      ["An informational text gives simple changes that make signs easier to read: larger words, clear spacing, and strong light-dark difference.", "Making Signs Easier to Read", "涵蓋三種設計方法與共同目的。", [["Larger Words", "只涵蓋第一項方法。"], ["The Perfect Sign for Every Reader", "perfect/every 超過原文簡單建議。"], ["Why Signs Should Be Hidden", "與 easier to read 相反。"]]],
    ], { type: "title-selection", operation: "match-title-to-whole-text", misconception: "choose-catchy-detail-title" }),
  },
  {
    id: "ENG_R4_S248", process: "identify-emphasized-claim-after-contrast", evidence: "轉折標記後的修正、限制或作者真正採納的立場",
    objectives: ["辨認 but、however、although 等轉折位置。", "分開背景期待與轉折後主要主張。", "避免把轉折前的讓步或舊觀點誤當作者結論。"],
    sections: [
      ["轉折會調整預期", "A but B 通常先承認 A，再把讀者注意力轉向 B。主旨不一定只等於 B，但作者最終判斷常由 B 決定。"],
      ["however 可跨句改方向", "前句看似給出結論，However 後可能加入限制。讀到標記時要暫停，重新評估作者是否修正、反駁或平衡先前說法。"],
      ["although 子句常是讓步背景", "Although A, B 中 A 是承認的困難或反面事實，B 是仍然成立的主要命題。不要因 A 在句首就把它當中心。"],
      ["轉折後仍要看全段", "有些文章在最後再次轉回。每遇一個轉折都更新立場，最後以整段結論與證據確認作者真正強調的主張。"],
    ],
    examples: [
      ["The room is small, but it works well for short meetings.", ["small 是限制。", "but 改變負面預期。", "後半給出作者實際評價。"], "The room is useful for short meetings despite its size.", "中心保留限制，但強調仍有用途。"],
      ["Many liked the plan. However, it cost more than expected.", ["先給正面反應。", "However 引入重要問題。", "作者提醒成本限制。"], "The plan was popular but had a cost problem.", "不能只選 popular。"],
      ["Although the walk was long, the signs made it easy to follow.", ["長是讓步背景。", "主要子句在逗點後。", "強調路線仍易走。"], "Clear signs made a long walk easy to follow.", "主張落在 although 子句之外。"],
    ],
    misconceptions: [
      ["第一個觀點一定是作者結論。", "轉折後可能修正。", "讀到 but/however 後更新判斷。"],
      ["but 後內容完全取消前文。", "常是保留 A 同時強調 B。", "主旨可整合限制與主要結論。"],
      ["although 子句因為較長所以更重要。", "句長不決定篇章焦點。", "辨認主要子句。"],
      ["看到一個轉折就不用讀後面。", "後文可能再平衡或收束。", "追蹤到全文結尾。"],
    ],
    checks: [
      ["A but B 通常把較強焦點放在哪裡？", "B", "but 後修正原先預期。"],
      ["Although A, B 的主要子句是哪一部分？", "B", "A 是讓步子句。"],
      ["轉折後可完全忽略前文嗎？", "不可", "主旨可能同時保留限制與結論。"],
    ],
    questions: casesToQuestions([
      ["The new park is farther from the center, but families like its safe paths and large play area.", "Families value the new park despite its location", "but 後的喜愛與兩項理由修正較遠的缺點。", [["The park is farther away", "只保留轉折前限制。"], ["Every family prefers distant parks", "原文只談此公園且不是因距離而喜愛。"], ["The paths are unsafe", "與 safe paths 相反。"]]],
      ["The phone app is free. However, it needs internet and uses a great deal of battery power.", "The free app has important practical limits", "However 後兩項限制是作者要補充的核心。", [["The app is free", "只抓轉折前優點。"], ["All free apps are useless", "從一個 app 過度推到全部且原文未說 useless。"], ["The app saves battery power", "與 uses a great deal 相反。"]]],
      ["Although the first test failed, the team learned why and built a working model the next week.", "The team used failure to reach a working result", "although 將失敗設為背景，主要句強調學習與成功。", [["The first test failed", "只抓讓步背景。"], ["Failure always guarantees success", "原文還有 learned why 與 rebuilt，非自動保證。"], ["The team stopped after one test", "與 built a working model 相反。"]]],
      ["The market is crowded on weekends, but its fresh food and friendly sellers keep Nora coming back.", "Nora returns because the market's strengths outweigh the crowd", "but 後給出持續回訪的真正理由。", [["The market is crowded", "只保留缺點，無法解釋 coming back。"], ["Crowds make every shopper happy", "Nora 回來是因 food/sellers，不是 crowd。"], ["Nora never visits twice", "keep coming back 表反覆到訪。"]]],
      ["The class collected fewer books than planned. Still, every child at the center received one.", "The drive met the children's need despite missing its number goal", "Still 後的實際成效修正收集數不足。", [["The class missed its number goal", "只重述前句不足。"], ["Every book drive reaches every child everywhere", "範圍擴到所有活動與地點。"], ["No child received a book", "與 every child received one 相反。"]]],
      ["The route looks short on the map. In fact, a steep hill makes it take nearly an hour.", "The route takes longer than its map length suggests", "In fact 修正從短距離形成的快速預期。", [["The route looks short", "只保留初步外觀。"], ["All hills take exactly one hour", "原文只談此 route 且 nearly。"], ["The route has no hill", "與 steep hill 相反。"]]],
      ["Ben did not win the race, yet he cut two minutes from his best time.", "Ben made personal progress even without winning", "yet 後的個人進步是正面重點。", [["Ben did not win", "只保留轉折前比賽名次。"], ["Losing always matters more than improvement", "作者以 yet 強調 improvement。"], ["Ben became two minutes slower", "cut two minutes 表更快。"]]],
      ["While online maps are easy to update, a paper map still works when a phone has no power.", "Paper maps retain a useful advantage", "while 承認線上優點，主要句強調紙圖在無電時仍可用。", [["Online maps are easy to update", "只抓讓步部分。"], ["Paper maps are better in every situation", "原文只指出 no power 情境優勢。"], ["Phones never need power", "與 no power 問題相反。"]]],
      ["The hall has only fifty seats. Even so, it is the best available place because it has a stage and safe exits.", "The hall is the best available choice despite limited seats", "Even so 後給出選用理由並保留座位限制。", [["The hall has fifty seats", "只抓限制，漏掉選擇結論。"], ["The hall is perfect for every event", "best available 不等於普遍 perfect。"], ["The hall lacks a stage", "與 has a stage 相反。"]]],
      ["At first, the extra rules seemed troublesome. After one week, however, players said the game was fairer and easier to follow.", "Players came to see benefits in the new rules", "however 後的使用後評價修正初始負面印象。", [["The rules first seemed troublesome", "只保留初始感受。"], ["More rules always improve every game", "一週個案不能推成 always/every。"], ["Players found the game less fair", "與 fairer 相反。"]]],
      ["The tree lost several branches in the storm, but experts say its main trunk is healthy and it should recover.", "The damaged tree is expected to recover", "but 後專家判斷修正枝條受損帶來的悲觀預期。", [["The tree lost branches", "只抓受損細節。"], ["No storm can harm any tree", "原文明說受損且只談一棵。"], ["Experts expect the tree to die", "與 should recover 相反。"]]],
      ["The survey had only forty answers, so it cannot represent the whole town. Nevertheless, it clearly shows what these forty riders need most.", "The survey is limited but useful for understanding its respondents", "Nevertheless 後保留對四十位受訪者的有限用途。", [["The survey cannot represent the town", "只保留限制，漏掉仍有用途。"], ["Forty answers prove what everyone wants", "作者明確否定代表 whole town。"], ["The survey tells us nothing", "與 clearly shows 相反。"]]],
    ], { type: "contrast-emphasis-reading", operation: "prioritize-post-contrast-claim", misconception: "stop-before-contrast" }),
  },
];

export const ENGLISH_UNIT_SOURCE = defineEnglishUnit({
  unitId: "ENG_R4_U36",
  skills,
  vocabularyPolicy: {
    capQuestionBasis: "appendix-5-table-1",
    additionalLearningTerms: ["activity", "add", "alarm", "alone", "amount", "anywhere", "available", "avoid", "behave", "beyond", "branch", "broad", "cancel", "cause", "central", "certain", "compare", "complete", "confident", "control", "create", "crowd", "crowded", "customer", "daily", "damage", "danger", "describe", "difference", "discover", "distant", "empty", "entrance", "environment", "event", "everywhere", "exit", "extra", "fair", "fear", "final", "focus", "form", "goal", "greet", "hall", "ignore", "improve", "increase", "introduce", "kilometer", "lack", "limit", "link", "local", "measure", "message", "mix", "model", "musician", "narrow", "neither", "nor", "path", "perfect", "personal", "print", "progress", "project", "receive", "record", "recover", "refuse", "regular", "repair", "result", "return", "roof", "rush", "score", "seem", "silent", "solve", "storm", "succeed", "success", "suggest", "support", "travel", "usual", "valuable", "value", "waste", "whole", "wild"],
    contextualizedAboveRangeTerms: ["addition", "advantage", "announcement", "app", "article", "attendance", "attract", "awake", "ban", "battery", "benefit", "cafe", "challenge", "collection", "comfortably", "connect", "contest", "daytime", "despite", "discount", "display", "effect", "entry", "exact", "expert", "failure", "familiar", "farther", "feedback", "field", "forever", "guarantee", "harm", "herb", "hidden", "improvement", "inconvenience", "informational", "injured", "interactive", "jar", "lane", "largest", "length", "location", "material", "mention", "narrative", "nearby", "nevertheless", "online", "option", "outdoor", "outweigh", "paragraph", "passage", "percent", "plastic", "practical", "prefer", "preparation", "prove", "rack", "rainwater", "rebuild", "reduce", "remove", "represent", "request", "require", "rescue", "resource", "respondent", "retain", "returnable", "rewrite", "route", "routine", "schedule", "shade", "shopper", "situation", "smooth", "soil", "sort", "spare", "stage", "statement", "steep", "strength", "summary", "sunset", "survey", "swimmer", "text", "touchable", "transport", "troublesome", "trunk", "unclear", "unknown", "unsafe", "unsold", "update", "useless", "volunteer"],
    properNames: ["Ben", "Jay", "Leo", "Mia", "Nora"],
    grammarNotation: ["A", "B"],
    malformedDistractors: [],
  },
});
