import { geographyLecture, geographyQuestion, geographyStimulus } from "../../../../tools/cap8-r4/geography-source-helpers.mjs";

const L = geographyLecture;
const Q = geographyQuestion;
const ST = geographyStimulus;

const lectureS001 = L({
  id: "GEO_R4_L_S001",
  skillId: "GEO_R4_S001",
  objectives: ["能把生活中的地點差異改寫成可蒐集證據回答的地理問題", "能在問題中指出現象、地點、時間與比較方式"],
  sections: [
    { id: "GEO_R4_L_S001_SEC01", title: "從好奇到問題", content: "地理探究從可觀察的空間現象出發，例如同一條街兩側的行人數不同。可探究問題要說清楚研究的現象、範圍與時間，並能用地圖、數據、觀察或訪查取得證據；只問喜不喜歡、好不好看，通常還不能直接形成地理探究。" },
    { id: "GEO_R4_L_S001_SEC02", title: "四個必要成分", content: "檢查問題是否包含：要研究什麼、在哪裡、何時或哪段期間，以及要比較或解釋什麼。問題不一定每次都把四項寫成固定句型，但讀者應能據此決定資料蒐集方式。" },
    { id: "GEO_R4_L_S001_SEC03", title: "可回答與可驗證", content: "好問題的範圍要在現有時間與能力內完成，答案也不能只靠猜測。『為什麼全世界所有城市都塞車』範圍過大；改成『本校周邊三個路口在上學日七時三十分至八時的車流量有何差異』，就能設計觀察。" },
    { id: "GEO_R4_L_S001_SEC04", title: "地理性在哪裡", content: "地理問題關心位置、分布、人地互動或隨時間產生的空間變化。若題目只問個人偏好，可以加入地點差異、環境條件或移動關係，使探究與空間證據相連。" },
  ],
  workedExamples: [
    { id: "GEO_R4_L_S001_EX01", prompt: "把『公園很熱嗎』改成可探究問題。", steps: ["指出要比較的地點", "固定觀測時段", "選定可量測的氣溫或遮蔭比例"], answer: "公園內樹蔭區與無遮蔭廣場在中午十二時的氣溫有何差異？", why: "答案限定同一座公園、同一時刻與兩種環境，能以溫度計重複量測；『很熱』則缺少比較標準。" },
    { id: "GEO_R4_L_S001_EX02", prompt: "社區居民說公車不方便，應如何形成探究問題？", steps: ["將不方便拆成可觀察指標", "限定社區與平日時段", "決定比較站點或路線"], answer: "平日早上七至九時，甲社區各站班距與居民步行到站時間是否不同？", why: "班距和步行時間都有明確資料，且地點與時段固定，能檢查不方便究竟來自候車或到站距離。" },
    { id: "GEO_R4_L_S001_EX03", prompt: "『哪裡最適合增設飲水機』是否能探究？", steps: ["設定候選位置", "界定使用者與時段", "蒐集人流、既有設施及距離資料"], answer: "可以，但須改為比較候選點的尖峰人流、與既有飲水機距離及供水條件。", why: "『最適合』需要事先公布判準；有了相同指標後，才可用證據比較，而不是憑印象選地點。" },
  ],
  misconceptions: [
    { belief: "題目寫了地名就一定是地理問題。", whyWrong: "地名可能只是背景，若沒有位置、分布或人地關係，仍可能只是偏好詢問。", correction: "檢查是否需要空間資料才能回答。" },
    { belief: "範圍愈大，探究就愈有價值。", whyWrong: "過大的地區與期間常無法取得可比資料，也難以判定差異來源。", correction: "依時間、人力與資料可得性縮小範圍。" },
    { belief: "先決定答案，再找支持它的資料。", whyWrong: "只挑符合預設的證據會造成偏誤，無法公平檢驗問題。", correction: "先訂問題與蒐集規則，再完整記錄結果。" },
    { belief: "任何『為什麼』都能直接量測。", whyWrong: "原因可能很多，若沒有可觀察條件，資料無法分辨各種解釋。", correction: "把原因拆成可比較的環境或人文條件。" },
  ],
  checks: [
    { prompt: "『哪一個校門比較多人使用』還缺少哪項重要條件？", answer: "觀察的日期或時段。", reason: "不同上下課時段的人流差很多，未固定時間就不能公平比較。" },
    { prompt: "『我最喜歡哪座公園』是不是地理探究問題？", answer: "不是。", reason: "它只反映個人偏好，不需要空間證據；可改問設施或可達性的地點差異。" },
    { prompt: "可探究問題為何要限定範圍？", answer: "讓資料可取得、可比較並能回答同一問題。", reason: "範圍不清會混入不同地點或時段的條件。" },
  ],
  assets: [],
});

const questionsS001 = [
  Q({ id: "GEO_R4_Q_S001_01", skillId: "GEO_R4_S001", stem: "下列哪一項最適合作為校園地理探究問題？", options: ["哪一個校門的顏色最好看", "三個校門在上學時段的進校人數有何差異", "我今天想不想走路上學", "校長最喜歡哪一棟建築"], answerIndex: 1, reasons: ["顏色好看屬主觀偏好，沒有可檢驗的空間現象。", "地點、時段與可計數的人流都明確，可以實地觀察比較。", "個人當日意願不是地點分布或人地互動問題。", "詢問個人偏好不需要地理資料。"], reviews: ["逐項檢查地點、時段與可觀察指標，只有第二項三者齊全。", "反向檢查其餘選項皆以個人審美或意願作答，不存在第二個可調查答案。"], difficulty: "foundation", cognitiveProcess: ["辨識", "分類"], representationType: "text", misconceptionTargets: ["有地名就是地理問題"], assets: [] }),
  Q({ id: "GEO_R4_Q_S001_02", skillId: "GEO_R4_S001", stem: "要調查市場周邊的交通問題，下列哪個問題最容易蒐集證據回答？", options: ["市場附近是不是很亂", "大家為什麼都不守規則", "週六上午各入口前違規停車數量如何分布", "哪一種交通工具最討厭"], answerIndex: 2, reasons: ["『很亂』沒有明確指標。", "『大家』與『不守規則』範圍不清，也預設了結論。", "日期、地點與計數項目明確，可依同一規則記錄。", "『討厭』是價值偏好，不能由空間觀察直接判定。"], reviews: ["第三項可設計入口分區計數表，答案能由現場紀錄產生。", "其他三項都缺少操作定義或把主觀感受當成資料，故無競爭答案。"], difficulty: "foundation", cognitiveProcess: ["辨識可探究性"], representationType: "text", misconceptionTargets: ["模糊形容詞可直接量測"], assets: [] }),
  Q({ id: "GEO_R4_Q_S001_03", skillId: "GEO_R4_S001", stem: "一個可執行的地理問題最需要具備哪項特徵？", options: ["答案一定符合原先猜測", "範圍與觀察指標可以明確界定", "研究地區必須涵蓋全世界", "只能使用一種資料"], answerIndex: 1, reasons: ["探究可能否定原先猜測，不能預設答案。", "明確範圍與指標才能決定如何蒐集並比較證據。", "全球範圍通常超出學生可執行的資料能力。", "地圖、統計與訪查可互相補充，不限單一資料。"], reviews: ["可執行性的核心是能把問題轉成具體蒐集步驟，因此選第二項。", "若選全球範圍、單一資料或預定答案，都會降低可檢驗性，排除其餘三項。"], difficulty: "foundation", cognitiveProcess: ["理解"], representationType: "text", misconceptionTargets: ["範圍愈大愈好"], assets: [] }),
  Q({ id: "GEO_R4_Q_S001_04", skillId: "GEO_R4_S001", stem: "學生想知道河濱步道哪一段最需要遮蔭。下列哪個問題寫得最完整？", options: ["河濱步道熱不熱", "遊客喜歡樹嗎", "七月晴天中午，甲至丁四段的遮蔭比例與地表溫度有何差異", "河濱步道未來會不會更漂亮"], answerIndex: 2, reasons: ["沒有時段、分段與量測標準。", "只問偏好，不能指出哪一段需要遮蔭。", "期間、空間單元及兩項可量測指標完整。", "『漂亮』主觀且沒有可驗證的時間條件。"], reviews: ["題意要判斷路段需求，第三項同時提供分段比較與熱環境證據。", "逐一嘗試設計觀察表，只有第三項能直接建立路段、遮蔭率、溫度三欄。"], difficulty: "standard", cognitiveProcess: ["評估問題品質"], representationType: "text", misconceptionTargets: ["主觀形容詞等同指標"], assets: [] }),
  Q({ id: "GEO_R4_Q_S001_05", skillId: "GEO_R4_S001", stem: "『本市早餐店為何都集中在學校旁』最需要先修正哪個問題？", options: ["把『都』改成可由分布資料檢驗的說法", "刪除地點，改問早餐是否好吃", "先認定學校一定是唯一原因", "把本市擴大為全臺灣"], answerIndex: 0, reasons: ["『都』是未經檢驗的絕對說法，應先畫出店家與學校位置再判斷集中程度。", "刪除地點後失去空間問題。", "原因要由證據比較，不能預先鎖定。", "擴大範圍會增加資料負擔，沒有解決原句偏誤。"], reviews: ["原句的首要缺陷是把待驗證的分布當成既定事實，因此應修正絕對語氣。", "其餘做法不是移除地理性、就是增加預設或擴大範圍，均不能改善可探究性。"], difficulty: "standard", cognitiveProcess: ["診斷", "修正"], representationType: "text", misconceptionTargets: ["把假設當結論"], assets: [] }),
  Q({ id: "GEO_R4_Q_S001_06", skillId: "GEO_R4_S001", stem: "要比較兩座公園的使用情況，下列哪項設計最公平？", options: ["甲園在週日午後觀察，乙園在雨天清晨觀察", "兩園都在同一個晴天的相同時段記錄人數與活動", "只詢問住在甲園旁的一戶居民", "看網路照片後估計全年人數"], answerIndex: 1, reasons: ["天氣與時段不同，差異未必來自公園。", "控制日期、天氣與時段後，兩地資料較可比較。", "單一且偏向一地的受訪者不能代表兩座公園。", "照片的拍攝時間與取樣方式不明，無法推估全年。"], reviews: ["比較研究需要讓非研究條件盡量一致，第二項符合相同時段與天氣。", "檢查資料偏誤，第一、三、四項分別有條件不一、樣本偏斜與來源不明問題。"], difficulty: "standard", cognitiveProcess: ["設計比較"], representationType: "text", misconceptionTargets: ["不同條件資料可直接比較"], assets: [] }),
  Q({ id: "GEO_R4_Q_S001_07", skillId: "GEO_R4_S001", stem: "研究『捷運站出口與周邊店家分布的關係』時，下列哪一項是研究現象而不是資料來源？", options: ["各出口五十公尺內的店家數量", "市府開放資料網站", "商圈訪查紀錄表", "街道底圖"], answerIndex: 0, reasons: ["店家數量是要描述與比較的現象。", "網站是取得資料的管道。", "訪查紀錄表是蒐集資料的工具。", "底圖是呈現位置的資料載體。"], reviews: ["題目區分『研究什麼』與『從哪裡取得』，只有第一項是被測量的變項。", "將後三項代入來源欄皆合理，不能作為研究現象本身，因此答案唯一。"], difficulty: "standard", cognitiveProcess: ["區分概念"], representationType: "text", misconceptionTargets: ["把工具當現象"], assets: [] }),
  Q({ id: "GEO_R4_Q_S001_08", skillId: "GEO_R4_S001", stem: "社區想探究豪雨後積水是否與地勢及排水孔阻塞有關。下列哪組資料最能直接檢驗這個問題？", options: ["居民對雨天的喜好與雨具顏色", "積水點位置、地面高程、排水孔狀況與同次降雨量", "全臺年平均雨量與社區人口", "一張晴天拍攝的街景照片"], answerIndex: 1, reasons: ["喜好與顏色無法檢驗積水成因。", "資料同時對應積水分布、地勢、排水狀態並控制降雨事件。", "全臺尺度與社區積水點不相符。", "單一晴天影像沒有積水與排水狀態的比較。"], reviews: ["問題提出兩個可能條件，第二項逐一提供對應變項及同次降雨控制。", "其餘資料或與成因無關、或尺度錯置、或缺少雨後狀態，不能形成替代答案。"], difficulty: "advanced", cognitiveProcess: ["變項配對", "證據評估"], representationType: "text", misconceptionTargets: ["資料愈多即愈適合"], assets: [] }),
  Q({ id: "GEO_R4_Q_S001_09", skillId: "GEO_R4_S001", stem: "學生只有兩天可完成調查。下列哪個問題最符合可行性？", options: ["近百年全球所有海岸線如何改變", "本校午休時不同樓層的飲水機排隊時間有何差異", "臺灣每一條河川的污染來源為何", "世界各國人口移動的全部原因"], answerIndex: 1, reasons: ["時間與範圍遠超過兩天可完成。", "地點集中、時段固定，能在兩天內重複觀察。", "河川數量與污染來源調查規模過大。", "全球人口移動成因複雜且資料量龐大。"], reviews: ["以兩天、人力與可到達地點評估，只有校內排隊觀察能實際完成。", "另外三項都涉及全臺、全球或長期資料，不因題目重要就具備可行性。"], difficulty: "advanced", cognitiveProcess: ["限制條件評估"], representationType: "text", misconceptionTargets: ["研究價值等於執行可行"], assets: [] }),
  Q({ id: "GEO_R4_Q_S001_10", skillId: "GEO_R4_S001", stem: "某組寫下問題：『新設自行車道後，沿線居民的通勤方式是否改變？』下列哪項補充最能提升可驗證性？", options: ["先宣告自行車道一定成功", "指定沿線範圍，並比較設置前後同季節的通勤方式調查", "只訪問每天騎車的一位學生", "把『改變』改成『變得非常棒』"], answerIndex: 1, reasons: ["預定成功會造成確認偏誤。", "空間範圍、前後時點與可分類的通勤方式均明確。", "樣本太少且只代表既有騎車者。", "『非常棒』比『改變』更主觀。"], reviews: ["要檢驗變遷，需有可比的前後資料；第二項還控制季節並界定沿線。", "第一項預設結論，第三項取樣偏斜，第四項移除可量測性，均被排除。"], difficulty: "advanced", cognitiveProcess: ["研究設計改進"], representationType: "text", misconceptionTargets: ["前後比較不用控制條件"], assets: [] }),
  Q({ id: "GEO_R4_Q_S001_11", skillId: "GEO_R4_S001", stem: "地方政府考慮調整夜市垃圾桶位置。哪一個探究問題最能支援決策？", options: ["夜市的食物是不是最好吃", "遊客覺得垃圾桶顏色如何", "各時段垃圾集中點、人流動線與現有垃圾桶距離有何關係", "哪位攤商最常抱怨"], answerIndex: 2, reasons: ["食物評價不能指出設置位置。", "顏色偏好不是本次空間配置的主要證據。", "垃圾、人流與距離資料能直接比較候選位置。", "單一抱怨者無法呈現整體空間需求。"], reviews: ["決策目標是配置地點，第三項的三種空間資料都能轉成位置判準。", "以『能否改變垃圾桶座標』反查四項，只有第三項提供可操作證據。"], difficulty: "transfer", cognitiveProcess: ["決策轉譯", "整合證據"], representationType: "text", misconceptionTargets: ["意見聲量等於位置需求"], assets: [] }),
  Q({ id: "GEO_R4_Q_S001_12", skillId: "GEO_R4_S001", stem: "學校要了解高溫日哪些通學路線風險較高。下列研究問題何者最周延？", options: ["哪條路看起來最熱", "同一高溫時段，各通學路段的遮蔭、路面溫度與步行暴露時間如何不同", "學生是否喜歡夏天", "全市哪裡永遠不會熱"], answerIndex: 1, reasons: ["『看起來』缺少量測與比較條件。", "同時界定時段、路段及三項與熱暴露直接相關的指標。", "季節偏好不能辨識路線風險。", "『永遠不會』是不切實際的絕對條件且範圍過大。"], reviews: ["風險需結合強度與暴露時間，第二項提供溫度、遮蔭及步行時間。", "其餘選項無法產生路段排序，或提出無法驗證的絕對命題，答案明確。"], difficulty: "transfer", cognitiveProcess: ["風險問題建構"], representationType: "text", misconceptionTargets: ["單一感受可代表風險"], assets: [] }),
  Q({ id: "GEO_R4_Q_S001_ST01", skillId: "GEO_R4_S001", stimulusId: "GEO_R4_ST001", stem: "依調查目的，哪個研究問題最恰當？", options: ["哪個校門比較漂亮", "三個校門在相同上學時段的進校人數與等候時間有何差異", "學生最喜歡哪位導護老師", "所有校門是否永遠都會擁擠"], answerIndex: 1, reasons: ["外觀偏好與通行效率無關。", "地點、時段、人數與等候時間均與目的相符。", "人物喜好不能回答校門通行狀況。", "『永遠』無法由三天資料支持。"], reviews: ["材料記錄三個校門的人數與等候，第二項正好對應可用欄位。", "把每個選項與調查表比對，只有第二項能由表中數據直接回答。"], difficulty: "standard", cognitiveProcess: ["問題與資料對應"], representationType: "table", misconceptionTargets: ["研究問題超出資料"], assets: [] }),
  Q({ id: "GEO_R4_Q_S001_ST02", skillId: "GEO_R4_S001", stimulusId: "GEO_R4_ST001", stem: "這份調查設計最重要的優點是什麼？", options: ["三個校門在相同日期與時段觀察", "只記錄使用人數最多的校門", "先假定東門一定最擁擠", "用不同單位記錄各校門等候時間"], answerIndex: 0, reasons: ["同時觀察可減少日期與時段差異造成的干擾。", "材料完整保留三門資料，且只記一門無法比較。", "調查表沒有預設結果，預設會造成偏誤。", "表中都以分鐘記錄，統一單位才可比較。"], reviews: ["三門比較的公平性來自同日同時段，第一項指出真正控制條件。", "後三項分別是刪除比較、預設答案與混用單位，皆不是設計優點。"], difficulty: "advanced", cognitiveProcess: ["評估研究設計"], representationType: "table", misconceptionTargets: ["有數字就可直接比較"], assets: [] }),
  Q({ id: "GEO_R4_Q_S001_ST03", skillId: "GEO_R4_S001", stimulusId: "GEO_R4_ST001", stem: "若要探究等候時間差異的可能原因，最值得補充哪項資料？", options: ["只量各門通道寬度，不記錄到校人流", "各門通道寬度與鄰近道路到校人流", "只記各門鄰近道路人流，不量通道寬度", "另一天只重測平均等候時間"], answerIndex: 1, reasons: ["通道寬度只呈現供給，未記到校人流就無法比較需求。", "通道寬度影響容量，鄰近人流影響需求，兩者可解釋等候。", "道路人流只呈現需求，未量通道寬度就無法比較容量。", "重測可確認結果是否穩定，卻不能指出排隊形成的原因。"], reviews: ["等候由進入需求與通道容量共同影響，第二項涵蓋兩端。", "逐項建立因果途徑後，只有通道寬度及人流能合理連到等候時間。"], difficulty: "transfer", cognitiveProcess: ["提出解釋", "選擇補充證據"], representationType: "table", misconceptionTargets: ["無關資料也能解釋差異"], assets: [] }),
];

const stimulusS001 = ST({
  id: "GEO_R4_ST001", skillId: "GEO_R4_S001", type: "table",
  content: { title: "三個校門通行調查", prompt: "學生連續三個上學日，在七時三十分至七時五十分同時記錄各校門平均進校人數與平均等候時間。", columns: ["校門", "平均進校人數（人）", "平均等候時間（分鐘）"], rows: [["東門", 286, 4.2], ["南門", 174, 1.8], ["西門", 231, 3.1]], sourceNote: "原創虛構教學資料；數值只用於練習研究問題建構。" },
  accessibility: { summary: "三個校門同時段的人數與等候時間表。", longDescription: "東門平均二百八十六人、等候四點二分鐘；南門一百七十四人、一點八分鐘；西門二百三十一人、三點一分鐘。三組資料來自相同三天與相同二十分鐘時段。" }, assets: [],
});

// S002: location, distribution, interaction, and change
const lectureS002 = L({
  id: "GEO_R4_L_S002", skillId: "GEO_R4_S002",
  objectives: ["能判斷地理問題主要關注位置、分布、互動或變遷", "能說明同一現象可能從不同角度提出問題"],
  sections: [
    { id: "GEO_R4_L_S002_SEC01", title: "位置問題", content: "位置問題回答『在哪裡』或『相對於什麼地方』，可用地址、座標、方位與距離表達。它先確定現象所在，未必解釋為何在那裡。" },
    { id: "GEO_R4_L_S002_SEC02", title: "分布問題", content: "分布關心多個現象在空間中的排列，例如集中、分散、沿線或成帶狀。判讀分布不能只看單一地點，必須比較一組位置。" },
    { id: "GEO_R4_L_S002_SEC03", title: "互動問題", content: "互動探討人與環境、地區與地區之間如何相互影響，例如道路改善帶動商店增加，或坡地開發提高逕流。僅同時出現不等於已證明互動。" },
    { id: "GEO_R4_L_S002_SEC04", title: "變遷問題", content: "變遷問題比較同一空間在不同時間的狀態。資料的年份、季節與範圍要可比，否則看到的差異可能來自量測方式，而不是現象真的改變。" },
  ],
  workedExamples: [
    { id: "GEO_R4_L_S002_EX01", prompt: "『便利商店多位於主要道路交叉口附近』屬於哪一類？", steps: ["確認涉及多家店的位置", "觀察其排列與道路關係", "判斷主要在描述空間分布"], answer: "分布問題。", why: "句子比較多個店址是否集中於交叉口；若進一步問道路人流如何影響營收，才轉為互動。" },
    { id: "GEO_R4_L_S002_EX02", prompt: "『水庫完工前後，下游農地面積如何改變』屬於哪一類？", steps: ["固定下游範圍", "找出完工前後兩個時點", "比較同一指標"], answer: "變遷問題。", why: "核心是同一地區在工程前後的農地面積差異；工程可能是原因，但題目首先要求時間比較。" },
    { id: "GEO_R4_L_S002_EX03", prompt: "『聚落距離車站多遠』與『車站設置後聚落如何擴張』有何不同？", steps: ["辨認第一題的距離關係", "辨認第二題的前後影響", "分別標出位置與互動變遷"], answer: "前者是相對位置，後者結合互動與變遷。", why: "距離只描述空間關係；車站設置與聚落擴張則要比較時間，並分析交通與土地利用的作用。" },
  ],
  misconceptions: [
    { belief: "只要問『哪裡』就已經在談分布。", whyWrong: "單一地點只能表示位置，分布需要多個地點的排列。", correction: "先看研究對象是一個還是一群。" },
    { belief: "兩個現象出現在同一地區就一定互相造成。", whyWrong: "共同分布可能由第三項條件造成，不能直接推論因果。", correction: "找時間順序、作用機制與對照證據。" },
    { belief: "不同年份的任何地圖都能直接判斷變遷。", whyWrong: "分類、邊界或比例尺不同也會製造表面差異。", correction: "先確認資料定義與空間範圍一致。" },
    { belief: "每個問題只能屬於一種地理角度。", whyWrong: "實際議題常同時含分布、互動與變遷，只是主要作答任務不同。", correction: "依題目要求的核心證據判斷主類型。" },
  ],
  checks: [
    { prompt: "『公車站在哪一個路口』主要是哪類問題？", answer: "位置。", reason: "它要確認單一站點所在，而非多站排列。" },
    { prompt: "『十年間商圈由車站向東擴展』包含哪兩個角度？", answer: "分布與變遷。", reason: "內容同時描述空間延伸方向與時間差異。" },
    { prompt: "兩項資料同向變化能否直接證明互動？", answer: "不能。", reason: "仍須排除共同原因並提出作用機制。" },
  ], assets: [],
});

const questionsS002 = [
  Q({ id: "GEO_R4_Q_S002_01", skillId: "GEO_R4_S002", stem: "『醫院位於火車站西北方約兩公里』主要描述哪一種地理概念？", options: ["位置", "分布", "互動", "變遷"], answerIndex: 0, reasons: ["句子以方位與距離說明醫院相對位置。", "沒有比較多家醫院的排列。", "未描述兩地相互影響。", "沒有前後時間比較。"], reviews: ["西北方與兩公里都是相對位置要素，因此第一項成立。", "把句子改問多點、影響或前後都需增加資料，現有文字只足以支持位置。"], difficulty: "foundation", cognitiveProcess: ["辨識"], representationType: "text", misconceptionTargets: ["位置與分布混淆"], assets: [] }),
  Q({ id: "GEO_R4_Q_S002_02", skillId: "GEO_R4_S002", stem: "『咖啡店多集中在捷運站出口周邊』主要呈現哪一類問題？", options: ["位置", "分布", "互動", "變遷"], answerIndex: 1, reasons: ["不是尋找單一店址。", "比較多家店的集中排列，屬分布。", "句子沒有證明捷運造成店家設址。", "未比較不同年份。"], reviews: ["『多集中』明確指向一群店家的空間型態，答案為分布。", "雖提到捷運站，但沒有作用過程或時間證據，不能改判互動或變遷。"], difficulty: "foundation", cognitiveProcess: ["分類"], representationType: "text", misconceptionTargets: ["共同出現等於互動"], assets: [] }),
  Q({ id: "GEO_R4_Q_S002_03", skillId: "GEO_R4_S002", stem: "下列哪一題主要探討空間變遷？", options: ["市場在郵局的哪一方", "各里人口密度如何分布", "河堤興建如何影響沿岸土地使用", "近二十年海岸線位置如何移動"], answerIndex: 3, reasons: ["方位屬位置。", "同一時點各里的排列屬分布。", "著重工程與土地使用的互動。", "比較二十年間海岸線位置，核心是變遷。"], reviews: ["第四項具有明確時間跨度與同一現象的前後位置比較。", "第三項雖可能含時間，但問法要求作用關係；其餘兩項分別是位置與分布。"], difficulty: "foundation", cognitiveProcess: ["分類"], representationType: "text", misconceptionTargets: ["互動與變遷混淆"], assets: [] }),
  Q({ id: "GEO_R4_Q_S002_04", skillId: "GEO_R4_S002", stem: "研究者畫出同一年全市超商位置，想知道是否沿幹道成帶狀排列。這是在分析什麼？", options: ["絕對位置的誤差", "空間分布型態", "十年間的變遷", "居民與店員的互動"], answerIndex: 1, reasons: ["題目不在檢查座標誤差。", "多個店址是否沿線排列正是分布型態。", "資料只有同一年，無法比較十年。", "沒有人的互動資料。"], reviews: ["『全市超商位置』和『成帶狀』共同指向多點分布。", "時間只有單一截面，且沒有行為資料，排除變遷與人際互動。"], difficulty: "standard", cognitiveProcess: ["判讀研究任務"], representationType: "text", misconceptionTargets: ["單一年份也能判變遷"], assets: [] }),
  Q({ id: "GEO_R4_Q_S002_05", skillId: "GEO_R4_S002", stem: "『灌溉渠道通水後，沿線農民改種需水量較高的作物』最主要呈現哪種關係？", options: ["單一地點定位", "隨機分布", "環境設施與人類活動的互動", "經緯度變化"], answerIndex: 2, reasons: ["內容不只是指出渠道位置。", "沒有證據說作物排列隨機。", "供水條件改變後生產選擇隨之調整，呈現互動。", "地點的經緯度不會因通水改變。"], reviews: ["事件包含渠道供水條件與農業選擇的連動，第三項最完整。", "將各選項對照句中前因後果，只有環境設施和活動互動能解釋。"], difficulty: "standard", cognitiveProcess: ["解釋關係"], representationType: "text", misconceptionTargets: ["把互動只理解為人際往來"], assets: [] }),
  Q({ id: "GEO_R4_Q_S002_06", skillId: "GEO_R4_S002", stem: "要證明某地商店分布在五年間向新車站移動，至少需要哪組資料？", options: ["五年前與現在採相同範圍及分類的店址圖", "現在一位店主的訪談", "五年前的氣溫與現在的人口", "新車站的建築照片"], answerIndex: 0, reasons: ["同範圍、同分類的兩期店址可直接比較分布重心。", "單一現在訪談沒有過去空間基準。", "兩項不同指標不能表示店址移動。", "照片只能呈現車站外觀。"], reviews: ["變遷判斷需同一現象的兩個可比時點，第一項符合。", "後三項缺店址的前後位置資料，不足以產生同等結論。"], difficulty: "standard", cognitiveProcess: ["選擇證據"], representationType: "text", misconceptionTargets: ["任何前後資料都能證明變遷"], assets: [] }),
  Q({ id: "GEO_R4_Q_S002_07", skillId: "GEO_R4_S002", stem: "下列哪個問題同時需要『分布』與『互動』證據？", options: ["消防隊的門牌號碼是什麼", "各區公園分布是否影響居民步行到綠地的距離", "今年人口總數是多少", "十年前的市界畫在哪裡"], answerIndex: 1, reasons: ["門牌只表示位置。", "要先看公園排列，再分析它與居民可達性的關係。", "單一總數沒有空間分布。", "只問過去界線的位置。"], reviews: ["第二項把多個公園的配置和居民移動條件連結，需兩類證據。", "其餘選項都能用單一位置或數值回答，不涉及分布與作用關係的結合。"], difficulty: "standard", cognitiveProcess: ["整合分類"], representationType: "text", misconceptionTargets: ["一題只能有一種角度"], assets: [] }),
  Q({ id: "GEO_R4_Q_S002_08", skillId: "GEO_R4_S002", stem: "某圖顯示甲區人口多、商店也多。僅憑這張圖，最合理的敘述是什麼？", options: ["人口增加必然造成商店增加", "商店增加必然吸引所有人口", "兩者在甲區呈現共同集中的分布，因果仍需其他證據", "兩者完全沒有任何關係"], answerIndex: 2, reasons: ["共同集中不能證明人口是唯一原因。", "也不能反向斷言商店必然造成所有人口集中。", "先忠實描述分布，再保留因果檢驗，是證據所能支持的程度。", "圖上有共同空間型態，不能說完全無關。"], reviews: ["單張分布圖只能支持共現，第三項正確限制推論強度。", "第一、二項都把關聯說成必然因果，第四項又否定已觀察到的共同集中。"], difficulty: "advanced", cognitiveProcess: ["限制推論", "證據判讀"], representationType: "text", misconceptionTargets: ["相關等於因果"], assets: [] }),
  Q({ id: "GEO_R4_Q_S002_09", skillId: "GEO_R4_S002", stem: "甲圖用舊里界統計人口，乙圖用改制後里界統計。兩圖人口色塊不同，最先應檢查什麼？", options: ["是否使用相同顏色", "行政區邊界與統計單元是否一致", "地圖紙張是否同樣大小", "圖名是否同樣長"], answerIndex: 1, reasons: ["顏色可不同，只要分級意義清楚。", "邊界改變會讓人口被重新分組，造成表面分布差異。", "紙張大小不決定統計值。", "圖名字數與人口分布無關。"], reviews: ["題幹明示舊里界與新里界，應優先控制空間單元。", "即使配色與版面完全相同，分區不同仍不能直接比較，故第二項唯一。"], difficulty: "advanced", cognitiveProcess: ["資料適切性檢查"], representationType: "text", misconceptionTargets: ["地圖看似相同即可比"], assets: [] }),
  Q({ id: "GEO_R4_Q_S002_10", skillId: "GEO_R4_S002", stem: "要研究海岸聚落因道路開通而產生的改變，下列哪個分析順序最完整？", options: ["只標出新道路的位置", "比較開通前後聚落與店家分布，再檢查道路可達性如何改變", "訪問一位遊客是否喜歡海景", "只計算道路全長"], answerIndex: 1, reasons: ["只有位置，沒有聚落變遷或作用證據。", "先建立前後分布，再分析交通條件，能結合變遷與互動。", "個人海景偏好與道路影響不對應。", "道路長度不能代表聚落反應。"], reviews: ["題目要求『因道路而改變』，需前後基準及作用機制，第二項兩者兼備。", "第一、四項只描述道路，第三項的資料與聚落變化無直接連結。"], difficulty: "advanced", cognitiveProcess: ["規劃分析"], representationType: "text", misconceptionTargets: ["只看設施即可解釋變遷"], assets: [] }),
  Q({ id: "GEO_R4_Q_S002_11", skillId: "GEO_R4_S002", stem: "颱風後部分山區道路中斷，生鮮配送改走其他城市。這個案例最適合從哪兩個地理角度分析？", options: ["位置與命名", "分布與經度", "互動與變遷", "緯度與海拔"], answerIndex: 2, reasons: ["地名與位置不能完整說明配送調整。", "經度不是本案主要變項。", "災害、交通與城市供應互相作用，路線也在事件前後改變。", "緯度與海拔不足以呈現配送網路反應。"], reviews: ["案例同時有地區間供應互動和事件前後路線變遷，選第三項。", "其餘配對雖可能描述背景，卻無法涵蓋道路中斷後改道的核心。"], difficulty: "transfer", cognitiveProcess: ["情境分類", "整合"], representationType: "text", misconceptionTargets: ["地理角度只等於座標"], assets: [] }),
  Q({ id: "GEO_R4_Q_S002_12", skillId: "GEO_R4_S002", stem: "研究共享單車站點時，哪個敘述把四種角度連結得最完整？", options: ["只記錄每站名稱", "定位站點、描述其集中區、分析與大眾運輸的關係，並比較增設前後使用量", "只詢問車身顏色", "只列出今日總租借次數"], answerIndex: 1, reasons: ["名稱不等於位置分析。", "依序包含位置、分布、互動與變遷。", "顏色偏好沒有四種地理關係。", "單一總數缺少空間與時間比較。"], reviews: ["第二項四個動詞分別對應定位、集中、關係與前後比較。", "其餘選項只有單一描述，無法涵蓋題目要求的四種分析角度。"], difficulty: "transfer", cognitiveProcess: ["綜合應用"], representationType: "text", misconceptionTargets: ["單一總量代表完整地理分析"], assets: [] }),
  Q({ id: "GEO_R4_Q_S002_ST01", skillId: "GEO_R4_S002", stimulusId: "GEO_R4_ST002", stem: "表中『三區站點數不同』主要屬於哪種資訊？", options: ["位置", "分布", "互動", "變遷"], answerIndex: 1, reasons: ["表中不是找單一站點座標。", "比較三區站點數呈現空間配置差異。", "尚未說明站點與人口如何互相影響。", "資料只有同一年。"], reviews: ["區與區之間的數量排列就是分布資料，答案為第二項。", "沒有前後時點、作用過程或精確單點描述，排除另外三類。"], difficulty: "standard", cognitiveProcess: ["表格分類"], representationType: "table", misconceptionTargets: ["區域數量當成位置"], assets: [] }),
  Q({ id: "GEO_R4_Q_S002_ST02", skillId: "GEO_R4_S002", stimulusId: "GEO_R4_ST002", stem: "若要判斷站點設置是否與人口有關，最合宜的初步結論是什麼？", options: ["人口愈多一定使站點愈多", "三區資料完全證明人口是唯一原因", "站點數大致隨人口增加，但仍要檢查面積與交通等條件", "人口與站點不可能有關"], answerIndex: 2, reasons: ["『一定』超過三筆觀察能支持的程度。", "未排除面積、運輸需求等其他原因。", "忠實描述同向關係並保留其他解釋。", "表中呈同向變化，不能斷言不可能有關。"], reviews: ["甲乙丙人口與站點都遞增，僅可提出待驗證關聯，第三項推論強度適當。", "第一、二項誇大因果，第四項否定資料型態，沒有第二個合理答案。"], difficulty: "advanced", cognitiveProcess: ["解讀互動證據"], representationType: "table", misconceptionTargets: ["三筆資料即可證明因果"], assets: [] }),
  Q({ id: "GEO_R4_Q_S002_ST03", skillId: "GEO_R4_S002", stimulusId: "GEO_R4_ST002", stem: "若明年再以同一分區與定義調查，最適合新增哪個問題？", options: ["站名哪個最好聽", "各區站點數與租借量如何變化", "調查員喜歡哪一區", "哪個數字寫得最整齊"], answerIndex: 1, reasons: ["站名偏好不是空間變遷。", "相同單元與定義的兩期資料可分析變遷。", "個人喜好不能反映站點使用改變。", "書寫外觀與資料意義無關。"], reviews: ["題幹新增可比的明年資料，第二項正確轉為前後變遷問題。", "其餘三項都不使用新增時點的可比數值，無法回答變化。"], difficulty: "transfer", cognitiveProcess: ["延伸研究"], representationType: "table", misconceptionTargets: ["有第二年資料卻不做可比分析"], assets: [] }),
];

const stimulusS002 = ST({
  id: "GEO_R4_ST002", skillId: "GEO_R4_S002", type: "table",
  content: { title: "三區共享單車概況", prompt: "某市以相同分區定義整理同一年資料。", columns: ["分區", "人口（萬人）", "共享單車站點（站）", "平均每日租借（次）"], rows: [["甲區", 6, 18, 920], ["乙區", 11, 31, 1680], ["丙區", 17, 44, 2460]], sourceNote: "原創虛構教學資料；「三區共享單車概況」不代表任何真實城市。" },
  accessibility: { summary: "三區人口、站點及租借量比較表。", longDescription: "甲區六萬人、十八站、每日九百二十次；乙區十一萬人、三十一站、一千六百八十次；丙區十七萬人、四十四站、二千四百六十次。三項數值由甲至丙皆增加。" }, assets: [],
});

// S003: spatial scale
const lectureS003 = L({
  id: "GEO_R4_L_S003", skillId: "GEO_R4_S003",
  objectives: ["能依問題選擇街區、行政區、全臺或全球等適當尺度", "能解釋尺度改變如何影響看見的分布與結論"],
  sections: [
    { id: "GEO_R4_L_S003_SEC01", title: "尺度是觀察範圍", content: "空間尺度指研究涵蓋的範圍與分析單元。街角、社區與里屬較小範圍；縣市、全臺與全球逐漸擴大。尺度不是題目難度，也不是只看地圖紙張大小。" },
    { id: "GEO_R4_L_S003_SEC02", title: "問題決定尺度", content: "找危險路口要看街道細節；比較各縣市人口老化可用縣市；研究跨國供應鏈則要放到國家與全球。選得太大會看不見細節，選得太小又可能漏掉完整系統。" },
    { id: "GEO_R4_L_S003_SEC03", title: "分析單元會改變圖像", content: "同一批資料按里、區或縣市彙整，呈現出的高低值可能不同。大單元的平均值會掩蓋內部差異，不能把縣市平均直接當成每個社區的情況。" },
    { id: "GEO_R4_L_S003_SEC04", title: "多尺度互相補充", content: "有些問題要先在大尺度找出區域型態，再到小尺度查原因。例如先比較全市淹水熱點，再選兩個街區檢查排水與地勢。結論必須說明適用尺度，避免不當推廣。" },
  ],
  workedExamples: [
    { id: "GEO_R4_L_S003_EX01", prompt: "研究校門前行人過街安全，應用哪種尺度？", steps: ["找出決策對象是路口", "確認需要車道與號誌細節", "選擇街區或路口尺度"], answer: "路口或街區尺度。", why: "安全判斷需要斑馬線、轉彎車流與號誌位置；全市平均無法顯示這些細節。" },
    { id: "GEO_R4_L_S003_EX02", prompt: "比較臺灣各縣市高齡人口比例，應如何分區？", steps: ["確認比較對象是縣市", "使用同一年人口統計", "保留縣市為分析單元"], answer: "全臺範圍、縣市單元。", why: "研究目的就是縣市差異；若只看全臺單一平均會失去分布，若細到每條街則超出問題所需。" },
    { id: "GEO_R4_L_S003_EX03", prompt: "全區平均綠地很多，能否推論每個里都容易到公園？", steps: ["辨認平均值的分區尺度", "檢查區內是否可能不均", "要求里級分布與步行距離"], answer: "不能。", why: "區級總量可能集中在少數里；居民可達性要在更小尺度比較公園位置與人口。" },
  ],
  misconceptions: [
    { belief: "研究範圍愈大，結論一定愈準確。", whyWrong: "大範圍常把重要的地方差異平均掉。", correction: "依問題所需細節選尺度，不以大小判優劣。" },
    { belief: "行政區平均值代表區內每個地點。", whyWrong: "同一行政區內仍可能有明顯差異。", correction: "必要時查看更小分析單元或原始位置。" },
    { belief: "同一資料換分區後，結論應完全相同。", whyWrong: "彙整邊界與單元大小會改變比例和群聚外觀。", correction: "比較時固定空間單元並說明尺度限制。" },
    { belief: "只能選一種尺度完成整個探究。", whyWrong: "跨尺度能同時掌握區域型態與地方機制。", correction: "先大範圍篩選，再小範圍查證。" },
  ],
  checks: [
    { prompt: "尋找校園積水點應優先使用哪種尺度？", answer: "校園內的局部尺度。", reason: "需要看排水口、坡向與鋪面等細節。" },
    { prompt: "縣市平均薪資能代表每位居民嗎？", answer: "不能。", reason: "平均值隱藏縣市內職業與地區差異。" },
    { prompt: "研究國際航運網路為何不宜只看一座港區？", answer: "網路跨越多國與多港，地方尺度會漏掉連結。", reason: "系統範圍必須涵蓋主要節點與路線。" },
  ], assets: [],
});

const questionsS003 = [
  Q({ id: "GEO_R4_Q_S003_01", skillId: "GEO_R4_S003", stem: "要找出校園內午後最熱的角落，最適合採用哪種空間尺度？", options: ["全球", "全臺", "校園分區", "縣市"], answerIndex: 2, reasons: ["全球尺度沒有校園角落細節。", "全臺範圍遠大於研究對象。", "校園分區能比較建物、樹蔭與鋪面位置。", "縣市平均也會掩蓋校內差異。"], reviews: ["研究對象是校園角落，需要最接近現地細節的校園分區。", "其餘尺度皆把校園合併成無法辨識的小點，不能回答位置差異。"], difficulty: "foundation", cognitiveProcess: ["選擇尺度"], representationType: "text", misconceptionTargets: ["範圍大較準"], assets: [] }),
  Q({ id: "GEO_R4_Q_S003_02", skillId: "GEO_R4_S003", stem: "比較各國二氧化碳排放總量時，最基本的分析單元是什麼？", options: ["教室座位", "街道路口", "國家", "單一住家"], answerIndex: 2, reasons: ["教室不對應國家統計。", "路口尺度過小。", "題目明確要求各國比較，應以國家為單元。", "住家資料無法代表國家總量。"], reviews: ["『各國』直接指定國家單元，第三項與問題一致。", "其他三項都屬地方個體，無法直接承接國家排放總量。"], difficulty: "foundation", cognitiveProcess: ["辨識分析單元"], representationType: "text", misconceptionTargets: ["研究範圍與單元脫節"], assets: [] }),
  Q({ id: "GEO_R4_Q_S003_03", skillId: "GEO_R4_S003", stem: "將里級人口資料合併為全市一個數值，最可能失去什麼？", options: ["市內人口分布差異", "全市人口總數", "統計年份", "城市名稱"], answerIndex: 0, reasons: ["合併後看不到哪些里人口較多或較少。", "各里加總仍可保留全市總數。", "年份可在資料說明中保留。", "城市名稱不因彙整而消失。"], reviews: ["從多個里縮成單一總值，直接損失的是內部分布。", "總數、年份與名稱都可隨彙整保存，只有第一項必然被平均或隱藏。"], difficulty: "foundation", cognitiveProcess: ["理解尺度效果"], representationType: "text", misconceptionTargets: ["總量等於分布"], assets: [] }),
  Q({ id: "GEO_R4_Q_S003_04", skillId: "GEO_R4_S003", stem: "研究夜市周邊行人與車輛衝突，哪一組尺度配置最合理？", options: ["全球範圍、國家單元", "全臺範圍、縣市單元", "夜市周邊範圍、路口單元", "全市範圍、只用人口總數"], answerIndex: 2, reasons: ["全球與國家單元無法呈現路口衝突。", "縣市單元仍過大。", "路口單元能記錄轉向、號誌與人流。", "人口總數不含衝突位置與行為。"], reviews: ["行車衝突發生在具體路口，第三項同時界定適當範圍與單元。", "另外三項無法保留道路幾何和行人動線，故不能回答。"], difficulty: "standard", cognitiveProcess: ["匹配問題與尺度"], representationType: "text", misconceptionTargets: ["用總人口回答交通細節"], assets: [] }),
  Q({ id: "GEO_R4_Q_S003_05", skillId: "GEO_R4_S003", stem: "某區綠地率為全市最高，但區內西側居民仍反映缺少公園。最合理的解釋是什麼？", options: ["綠地率一定計算錯誤", "區級高值可能集中在東側，掩蓋里內可達性差異", "所有居民都不喜歡綠地", "全市尺度比街區尺度更能決定步行距離"], answerIndex: 1, reasons: ["高綠地率與局部缺乏可同時成立，不必先假定算錯。", "總量集中會使區平均高，但西側距離仍遠。", "材料沒有居民偏好的證據。", "步行距離需要較小尺度。"], reviews: ["區平均與西側經驗的矛盾可由內部分布不均解釋，第二項成立。", "不需推翻統計或臆測偏好；大尺度也無法取代居民到公園的實際距離。"], difficulty: "standard", cognitiveProcess: ["解釋尺度落差"], representationType: "text", misconceptionTargets: ["平均值代表每一地點"], assets: [] }),
  Q({ id: "GEO_R4_Q_S003_06", skillId: "GEO_R4_S003", stem: "要分析颱風對臺灣各地農作物的影響，下列哪種作法最能兼顧整體與地方差異？", options: ["只看全臺損失總額", "只訪問一戶農民", "先比較各縣市損失，再選受災差異大的鄉鎮查作物與風雨", "只記錄颱風名稱"], answerIndex: 2, reasons: ["總額無法顯示區域差異。", "單戶資料不能代表整體。", "先大尺度辨識型態，再小尺度查成因，兩者互補。", "名稱不包含空間影響。"], reviews: ["第三項採跨尺度設計，符合整體分布與地方機制兩個目標。", "第一、二項各偏一端，第四項沒有損失或環境證據。"], difficulty: "standard", cognitiveProcess: ["設計跨尺度分析"], representationType: "text", misconceptionTargets: ["只能用一種尺度"], assets: [] }),
  Q({ id: "GEO_R4_Q_S003_07", skillId: "GEO_R4_S003", stem: "兩份人口密度圖一份以縣市分區，一份以鄉鎮分區。解讀時應注意什麼？", options: ["鄉鎮圖一定錯", "縣市圖一定比較精確", "不同分區會呈現不同細節，不宜直接比較色塊數量", "只要顏色相同就能完全互換"], answerIndex: 2, reasons: ["鄉鎮圖只是較細，不代表錯誤。", "縣市圖較概括，未必更精確。", "分析單元大小不同會改變平均值與分布外觀。", "配色相同不能消除分區差異。"], reviews: ["兩圖的主要差別是空間單元，第三項正確指出可比性限制。", "精細與正確不是同義，顏色也不能讓不同邊界的數值互換。"], difficulty: "standard", cognitiveProcess: ["比較地圖尺度"], representationType: "text", misconceptionTargets: ["細分圖必然較真實"], assets: [] }),
  Q({ id: "GEO_R4_Q_S003_08", skillId: "GEO_R4_S003", stem: "全市平均通勤時間下降，但部分外圍里增加。下列哪個結論最恰當？", options: ["每一里通勤時間都下降", "全市平均與里級變化可能不同，需同時報告尺度", "外圍里資料必定錯誤", "平均值不能用於任何研究"], answerIndex: 1, reasons: ["平均下降不代表每個里同方向。", "大尺度總體與小尺度局部可並存，應明示分析單元。", "局部增加是可能的，不可直接判錯。", "平均仍可描述整體，只是有侷限。"], reviews: ["題幹已提供總體下降與局部上升，第二項能同時保留兩項真實。", "第一項違反資料，第三項無證據，第四項過度否定統計用途。"], difficulty: "advanced", cognitiveProcess: ["整合尺度結論"], representationType: "text", misconceptionTargets: ["平均推廣至每個單元"], assets: [] }),
  Q({ id: "GEO_R4_Q_S003_09", skillId: "GEO_R4_S003", stem: "研究河川污染若只取下游一個測站，最可能漏掉哪項資訊？", options: ["上游不同支流的污染來源差異", "測站當日的水質數值", "河川名稱", "採樣時間"], answerIndex: 0, reasons: ["下游混合水體難以分辨哪條上游支流貢獻污染。", "該測站仍能量得當日數值。", "河川名稱可在紀錄中保存。", "採樣時間也可記錄。"], reviews: ["單點尺度的核心限制是無法定位上游來源，第一項符合。", "後三項都能在單站紀錄表保留，不是空間取樣不足必然造成的缺漏。"], difficulty: "advanced", cognitiveProcess: ["辨識尺度限制"], representationType: "text", misconceptionTargets: ["單點可代表整個流域"], assets: [] }),
  Q({ id: "GEO_R4_Q_S003_10", skillId: "GEO_R4_S003", stem: "某研究以『縣市』分析房價，卻用一個社區的結果推論整個縣市。主要錯誤是什麼？", options: ["年份一定太新", "把小尺度樣本不當推廣到大尺度", "房價不能使用數字", "縣市沒有行政邊界"], answerIndex: 1, reasons: ["問題沒有指出年份不適當。", "單一社區不足以代表縣市內多樣市場。", "房價本來可量化。", "縣市具有明確行政範圍。"], reviews: ["推論範圍大於資料涵蓋範圍，是典型尺度錯置，選第二項。", "其餘說法與行政事實或量化方法不符，無法解釋研究缺陷。"], difficulty: "advanced", cognitiveProcess: ["診斷推論"], representationType: "text", misconceptionTargets: ["局部案例代表全區"], assets: [] }),
  Q({ id: "GEO_R4_Q_S003_11", skillId: "GEO_R4_S003", stem: "要規劃跨縣市自行車路網，哪個尺度組合最有效？", options: ["只看單一路口號誌", "先看區域路網連續性，再檢查各路段安全細節", "只看全臺人口總數", "只比較各縣市面積"], answerIndex: 1, reasons: ["單一路口無法決定跨縣連續路線。", "區域尺度安排連接，小尺度檢查工程與安全，目的相符。", "總人口缺少路線位置。", "面積不能表示道路可連接性。"], reviews: ["跨縣規劃同時需要網路與路段兩層證據，第二項是完整的尺度配置。", "其餘資料都缺少至少一個決策層次，不能形成同等方案。"], difficulty: "transfer", cognitiveProcess: ["多尺度決策"], representationType: "text", misconceptionTargets: ["單尺度足以處理網路規劃"], assets: [] }),
  Q({ id: "GEO_R4_Q_S003_12", skillId: "GEO_R4_S003", stem: "衛生單位發現全市疾病率穩定，但兩個里快速上升。下一步最合理的是什麼？", options: ["因全市穩定而忽略兩里", "以里級資料定位變化，再調查當地環境與人口條件", "刪除兩里資料讓平均一致", "只改用全國平均"], answerIndex: 1, reasons: ["全市平均可能掩蓋重要局部風險。", "小尺度定位後可檢查具體條件。", "刪除異常值會隱藏需調查的現象。", "更大尺度會進一步掩蓋差異。"], reviews: ["題幹指出局部上升，應縮小尺度查明位置與原因，第二項合理。", "另外三項都擴大或消除差異，與風險監測目的相反。"], difficulty: "transfer", cognitiveProcess: ["異常辨識", "研究規劃"], representationType: "text", misconceptionTargets: ["大尺度穩定代表處處安全"], assets: [] }),
  Q({ id: "GEO_R4_Q_S003_ST01", skillId: "GEO_R4_S003", stimulusId: "GEO_R4_ST003", stem: "若只看全區平均公園面積，最容易忽略什麼？", options: ["各里公園分布不均", "全區共有三個里", "資料以平方公尺表示", "公園面積可以相加"], answerIndex: 0, reasons: ["平均值會掩蓋甲乙丙里的明顯差距。", "里數仍列在表中。", "單位可在平均中保留。", "能否相加不是本題尺度限制。"], reviews: ["表中三里人均公園面積差異大，合併後會先失去里級分布。", "其餘三項不是從里資料彙整到全區必然消失的資訊。"], difficulty: "standard", cognitiveProcess: ["讀表", "辨識尺度"], representationType: "table", misconceptionTargets: ["平均值代表各里"], assets: [] }),
  Q({ id: "GEO_R4_Q_S003_ST02", skillId: "GEO_R4_S003", stimulusId: "GEO_R4_ST003", stem: "要處理居民步行到公園的不便，應優先深入調查哪一里？", options: ["甲里", "乙里", "丙里", "三里完全相同"], answerIndex: 1, reasons: ["甲里人均面積最高、步行時間最短。", "乙里人均公園面積最低，平均步行時間最長。", "丙里兩項指標介於甲乙之間。", "表中數值明顯不同。"], reviews: ["把需求判準設為公園少且步行久，乙里同時最不利。", "逐欄排名後甲最有利、丙居中，只有乙里符合優先調查條件。"], difficulty: "advanced", cognitiveProcess: ["多指標比較"], representationType: "table", misconceptionTargets: ["只看全區總量"], assets: [] }),
  Q({ id: "GEO_R4_Q_S003_ST03", skillId: "GEO_R4_S003", stimulusId: "GEO_R4_ST003", stem: "若要從里級問題進一步找出乙里內部的服務缺口，下一層最適合的資料是什麼？", options: ["全國公園總面積", "乙里各街廓人口、入口位置與步行路網", "全市年度預算總額", "三里的名稱由來"], answerIndex: 1, reasons: ["全國尺度比現有資料更粗。", "街廓與路網可顯示乙里內哪些居民距離最遠。", "總預算沒有服務位置。", "名稱由來不能定位可達性。"], reviews: ["研究要找里內缺口，應縮小到街廓並保留人口及實際步行連線。", "其他選項不是尺度過大，就是欠缺公園可達性的空間證據。"], difficulty: "transfer", cognitiveProcess: ["尺度深化"], representationType: "table", misconceptionTargets: ["更大範圍能解決局部問題"], assets: [] }),
];

const stimulusS003 = ST({
  id: "GEO_R4_ST003", skillId: "GEO_R4_S003", type: "table",
  content: { title: "同一行政區的里級公園條件", prompt: "某區以同一年資料比較三個里。", columns: ["里別", "每人公園面積（平方公尺）", "到最近公園平均步行時間（分鐘）"], rows: [["甲里", 9.2, 6], ["乙里", 2.1, 18], ["丙里", 5.4, 11]], sourceNote: "原創虛構教學資料；「同一行政區的里級公園條件」的條件與數值皆為本題設定。" },
  accessibility: { summary: "三里的人均公園面積與步行時間比較。", longDescription: "甲里每人九點二平方公尺、步行六分鐘；乙里二點一平方公尺、十八分鐘；丙里五點四平方公尺、十一分鐘。乙里公園最少且步行最久。" }, assets: [],
});

// S004: choosing evidence
const lectureS004 = L({
  id: "GEO_R4_L_S004", skillId: "GEO_R4_S004",
  objectives: ["能依研究問題選擇地圖、統計、觀察或訪查資料", "能以多種資料互相補充而不混淆其功能"],
  sections: [
    { id: "GEO_R4_L_S004_SEC01", title: "地圖回答空間位置", content: "地圖適合呈現地點、範圍、距離、方向與分布。選圖時要看比例尺、圖例、年份與繪製目的；一張行政區圖不一定能顯示街道路況。" },
    { id: "GEO_R4_L_S004_SEC02", title: "統計比較數量", content: "統計表與圖能比較人口、產量、比例或時間變化，但數值必須有單位、年份、定義與空間單元。總量和比率回答不同問題，不可互相替代。" },
    { id: "GEO_R4_L_S004_SEC03", title: "觀察與訪查各有用途", content: "實地觀察能記錄現場狀態與行為，訪談或問卷則能取得經驗、選擇原因及感受。受訪者說法不能取代客觀位置量測，現場照片也不能自動代表長期狀況。" },
    { id: "GEO_R4_L_S004_SEC04", title: "三角檢證", content: "同一結論若能由不同資料支持，可信度較高。例如用路線圖量步行距離、現場計時，再訪問居民說明障礙。資料結果衝突時應查定義與取樣，不可只挑支持預設的部分。" },
  ],
  workedExamples: [
    { id: "GEO_R4_L_S004_EX01", prompt: "要找近五年新增建物的位置，應選什麼資料？", steps: ["確認要比較地表變化", "固定相同季節與範圍", "選擇兩期航空影像或建物圖層"], answer: "同範圍、可比日期的兩期影像或建物圖。", why: "兩期空間資料能直接定位新增區；單一年人口統計只能說數量，無法指出建物在哪裡。" },
    { id: "GEO_R4_L_S004_EX02", prompt: "要了解居民不搭公車的原因，應用什麼資料？", steps: ["用路線與班距資料掌握服務", "設計涵蓋不同居民的訪查", "把說法和實際服務條件比對"], answer: "公車服務資料搭配居民訪查。", why: "路線與班距說明客觀供給，訪查補足轉乘、照護或安全等選擇原因，兩者不能互相取代。" },
    { id: "GEO_R4_L_S004_EX03", prompt: "想比較各區人口壓力，總人口還是人口密度較適合？", steps: ["確認是否比較單位面積負荷", "取得同年人口與面積", "計算或使用人口密度"], answer: "人口密度較適合，但仍應視問題保留總人口。", why: "面積差很大的區只比總人口會誤判擁擠程度；密度把人口除以面積，能進行較公平的空間比較。" },
  ],
  misconceptions: [
    { belief: "有地圖就能回答所有地理問題。", whyWrong: "地圖常缺少原因、感受或精確時序。", correction: "依問題搭配統計、觀察或訪查。" },
    { belief: "受訪者說的話一定比統計真實。", whyWrong: "訪談反映經驗，可能受記憶與樣本影響。", correction: "查樣本並和可觀察資料交叉檢證。" },
    { belief: "資料數量愈多就愈適合。", whyWrong: "大量但年份、範圍或定義不符的資料仍不能回答問題。", correction: "先看問題與資料欄位是否對應。" },
    { belief: "總量與比率可以任意替換。", whyWrong: "兩者的分母與解讀不同，可能產生相反排名。", correction: "依要比較規模或相對程度選指標。" },
  ],
  checks: [
    { prompt: "查店家位置最直接使用哪類資料？", answer: "店址點位圖或可定位的地址資料。", reason: "問題要回答空間位置。" },
    { prompt: "了解搬家原因只看戶籍遷移數夠嗎？", answer: "不夠。", reason: "數量看得出變動，原因需訪查或其他證據。" },
    { prompt: "為何地圖要確認年份？", answer: "地表與行政邊界會改變。", reason: "舊圖可能不符合研究時點。" },
  ], assets: [],
});

const questionsS004 = [
  Q({ id: "GEO_R4_Q_S004_01", skillId: "GEO_R4_S004", stem: "要知道公共自行車站分布在哪些街區，最直接需要哪項資料？", options: ["站點位置圖", "居民最愛的顏色", "全市年雨量", "市長演講稿"], answerIndex: 0, reasons: ["站點位置圖能呈現每站座標與街區分布。", "顏色偏好與位置無關。", "雨量不能指出站點。", "演講內容不是站點空間資料。"], reviews: ["研究動詞是『分布在哪些街區』，應使用可定位的站點圖。", "其餘三項沒有站點位置欄位，無法回答同一問題。"], difficulty: "foundation", cognitiveProcess: ["資料選擇"], representationType: "text", misconceptionTargets: ["任何官方資料都適用"], assets: [] }),
  Q({ id: "GEO_R4_Q_S004_02", skillId: "GEO_R4_S004", stem: "想了解學生選擇通學方式的原因，哪種資料最能補足統計表？", options: ["學生訪查", "世界地形圖", "昨日衛星雲圖", "校徽圖案"], answerIndex: 0, reasons: ["訪查可取得安全、時間與費用等選擇理由。", "世界地形圖尺度與通學原因不符。", "單日雲圖不能解釋平常選擇。", "校徽不含交通資訊。"], reviews: ["『原因』涉及行為考量，第一項能直接詢問並分類。", "另外三項沒有受訪者選擇依據，也無法替代訪查。"], difficulty: "foundation", cognitiveProcess: ["資料功能辨識"], representationType: "text", misconceptionTargets: ["只用地圖回答原因"], assets: [] }),
  Q({ id: "GEO_R4_Q_S004_03", skillId: "GEO_R4_S004", stem: "比較兩區人口擁擠程度時，下列哪個指標較合適？", options: ["人口密度", "區名長度", "人口總數但不看面積", "里長年齡"], answerIndex: 0, reasons: ["人口密度同時考慮人口與面積。", "區名字數沒有空間負荷意義。", "面積不同時只比總數不公平。", "里長年齡與擁擠程度無直接關聯。"], reviews: ["擁擠是單位面積的人口程度，因此選人口密度。", "排除不相關欄位後，總人口仍缺分母，不能與第一項競爭。"], difficulty: "foundation", cognitiveProcess: ["指標選擇"], representationType: "text", misconceptionTargets: ["總量等於密度"], assets: [] }),
  Q({ id: "GEO_R4_Q_S004_04", skillId: "GEO_R4_S004", stem: "要比較河岸十年間土地利用改變，哪組資料最適合？", options: ["同範圍、同分類的兩期土地利用圖", "今年一次居民聚會紀錄", "兩張不同城市的觀光照片", "全國人口總數"], answerIndex: 0, reasons: ["兩期可比地圖能定位各類土地的增減。", "聚會紀錄沒有過去土地位置。", "城市不同，無法比較同一河岸。", "全國總數與河岸土地利用不對應。"], reviews: ["題目要求同地區十年變化，第一項同時滿足時間與空間可比。", "其他資料缺少至少一個必要時點或研究區域，答案唯一。"], difficulty: "standard", cognitiveProcess: ["時間資料配對"], representationType: "text", misconceptionTargets: ["不同地點照片可判變遷"], assets: [] }),
  Q({ id: "GEO_R4_Q_S004_05", skillId: "GEO_R4_S004", stem: "研究公車站可達性，下列哪組資料最完整？", options: ["站點、步行路網、人口分布與班距", "只有車輛顏色", "只有全市總人口", "只有一張公車照片"], answerIndex: 0, reasons: ["包含服務位置、實際路徑、需求分布與時間供給。", "顏色不影響可達性。", "總人口缺少居民位置。", "照片沒有距離或班距。"], reviews: ["可達性同時包含到站距離與服務頻率，第一項涵蓋必要資料。", "後三項都不能計算居民到站或候車條件，無第二解。"], difficulty: "standard", cognitiveProcess: ["整合資料"], representationType: "text", misconceptionTargets: ["單一站點圖等於完整可達性"], assets: [] }),
  Q({ id: "GEO_R4_Q_S004_06", skillId: "GEO_R4_S004", stem: "地圖顯示甲區事故多於乙區。要比較事故風險，還應優先取得什麼？", options: ["兩區交通量或人口等暴露資料", "兩區名稱的由來", "地圖印刷紙張重量", "警察制服數量"], answerIndex: 0, reasons: ["風險需將事故數和可能暴露人次相對比較。", "名稱由來不影響事故率。", "紙張重量與資料無關。", "制服數量不是道路使用暴露量。"], reviews: ["只看事故總數可能把交通量大的地區判為較危險，應補充分母。", "其餘三項無法把事故數轉成可比較風險。"], difficulty: "standard", cognitiveProcess: ["補充指標"], representationType: "text", misconceptionTargets: ["事件總數等於風險"], assets: [] }),
  Q({ id: "GEO_R4_Q_S004_07", skillId: "GEO_R4_S004", stem: "訪查居民對新公園的看法時，哪種取樣較能減少偏誤？", options: ["只問公園開幕活動參加者", "涵蓋不同距離、年齡與使用頻率的居民", "只問提出計畫的官員", "只採用一則網路留言"], answerIndex: 1, reasons: ["活動參加者可能較支持或常使用。", "涵蓋多種位置與使用者能呈現不同經驗。", "官員不是居民樣本。", "單一留言不能代表整體。"], reviews: ["題目目標是居民看法，第二項明確降低距離與使用頻率的樣本偏斜。", "其餘樣本都過窄或身分不符，不能提供同等代表性。"], difficulty: "standard", cognitiveProcess: ["評估訪查"], representationType: "text", misconceptionTargets: ["方便取得的樣本就代表全體"], assets: [] }),
  Q({ id: "GEO_R4_Q_S004_08", skillId: "GEO_R4_S004", stem: "某組以手機定位軌跡研究步行路線，但只收集運動社團成員。最主要的限制是什麼？", options: ["定位資料不能呈現路線", "樣本可能偏向體能較好者，不能代表全校", "手機沒有時間資料", "軌跡一定比訪談不準"], answerIndex: 1, reasons: ["定位軌跡正可呈現路線。", "樣本族群單一，步行距離與選擇可能偏離全校。", "多數軌跡包含時間，題目也未說缺失。", "兩種資料功能不同，不能斷言一定較不準。"], reviews: ["資料工具適合，但取樣對象偏斜；第二項精準指出外推限制。", "第一、三項違反定位資料功能，第四項是無根據的絕對比較。"], difficulty: "advanced", cognitiveProcess: ["方法評估"], representationType: "text", misconceptionTargets: ["科技資料自動無偏"], assets: [] }),
  Q({ id: "GEO_R4_Q_S004_09", skillId: "GEO_R4_S004", stem: "兩份統計對『青年』分別定義為15至24歲與18至29歲。最妥當的處理是什麼？", options: ["直接比較百分比", "先統一或重新計算年齡範圍，再比較", "選數字較大的那份", "刪除資料來源說明"], answerIndex: 1, reasons: ["分母族群不同，百分比不能直接相比。", "統一定義才能使指標指向同一人口。", "數值大小不代表定義正確。", "刪除說明會隱藏差異。"], reviews: ["核心是分類定義不一致，第二項修正後才具可比性。", "直接比、挑大值或刪除註記都未解決人口範圍不同。"], difficulty: "advanced", cognitiveProcess: ["檢查操作定義"], representationType: "text", misconceptionTargets: ["同名指標必定同定義"], assets: [] }),
  Q({ id: "GEO_R4_Q_S004_10", skillId: "GEO_R4_S004", stem: "現場觀察顯示巷口常塞車，官方日平均車流卻不高。下一步最合理的是什麼？", options: ["只保留符合原先想法的觀察", "檢查官方資料時段，並在尖峰與非尖峰重複計數", "認定官方資料一定造假", "把塞車改寫成個人喜好"], answerIndex: 1, reasons: ["選擇性保留資料會造成偏誤。", "日平均可能掩蓋短時尖峰，分時觀察可解釋差異。", "資料衝突不等於造假。", "塞車是可觀察現象，不需改成偏好。"], reviews: ["兩資料的時間尺度可能不同，第二項先核對定義再補充分時證據。", "其餘做法或排斥證據、無據指控，或離開研究問題。"], difficulty: "advanced", cognitiveProcess: ["處理證據衝突"], representationType: "text", misconceptionTargets: ["資料衝突時任選其一"], assets: [] }),
  Q({ id: "GEO_R4_Q_S004_11", skillId: "GEO_R4_S004", stem: "社區想評估增設無障礙坡道的位置，哪種證據組合最能支援決策？", options: ["階梯與高差測量、通行路線觀察、行動不便者訪查", "建築外牆顏色與社區名稱", "全國平均降雨與一張海報", "只問從未到過現場的人"], answerIndex: 0, reasons: ["客觀障礙、實際動線與使用者經驗彼此補充。", "外觀資訊不能判斷通行。", "全國雨量與坡道位置關係薄弱。", "沒有現場經驗者不足以提供需求證據。"], reviews: ["坡道選址需同時知道物理限制和使用者路徑，第一項完整。", "後三項均缺少高差、動線或目標使用者，無法形成可執行判斷。"], difficulty: "transfer", cognitiveProcess: ["多源證據整合"], representationType: "text", misconceptionTargets: ["只量高差即可決策"], assets: [] }),
  Q({ id: "GEO_R4_Q_S004_12", skillId: "GEO_R4_S004", stem: "要判斷海岸遊憩人潮是否造成垃圾增加，哪個設計最周延？", options: ["只在連假後拍一張垃圾照片", "同地點分平日與假日記錄人數、垃圾量，並核對清運時段", "只問遊客是否愛護環境", "比較兩個不同縣市、不同季節的照片"], answerIndex: 1, reasons: ["單張照片沒有基準且受清運時間影響。", "控制地點並比較人潮與垃圾，還排除清運時點干擾。", "態度回答不能取代實際垃圾量。", "地點與季節同時不同，難以歸因。"], reviews: ["第二項讓人潮、垃圾與清運三項資料在同地可比，最能檢驗關係。", "其他方案缺前後基準、只測態度，或混入多個差異條件。"], difficulty: "transfer", cognitiveProcess: ["研究設計", "控制變項"], representationType: "text", misconceptionTargets: ["單次照片足以證明因果"], assets: [] }),
  Q({ id: "GEO_R4_Q_S004_ST01", skillId: "GEO_R4_S004", stimulusId: "GEO_R4_ST004", stem: "若要找出最需要改善公車服務的地區，表中哪兩欄最直接？", options: ["人口與平均候車時間", "區名與表格順序", "資料年份與欄位數", "區名與人口"], answerIndex: 0, reasons: ["人口代表需求規模，候車時間反映服務不足。", "名稱和順序不是服務指標。", "年份重要但不能單獨排序需求。", "人口 alone 缺服務狀況。"], reviews: ["目的同時包含需求與服務，第一項恰好各提供一個指標。", "其他組合都少了候車表現或只有表格形式資訊。"], difficulty: "standard", cognitiveProcess: ["選取欄位"], representationType: "table", misconceptionTargets: ["單一總量足以判需求"], assets: [] }),
  Q({ id: "GEO_R4_Q_S004_ST02", skillId: "GEO_R4_S004", stimulusId: "GEO_R4_ST004", stem: "若丁區人口不多但候車最久，還應補充哪項資料以判斷原因？", options: ["班次、路線與尖峰乘車人數", "丁區每日總搭乘人次", "四區公車站點密度", "少數非尖峰乘客的單次訪談"], answerIndex: 0, reasons: ["供給班次、路線及實際需求能解釋候車。", "每日總人次未區分尖峰時段與轉乘路線，不能解釋長候車。", "站點密度未提供班次、轉乘與尖峰需求，仍無法判斷候車原因。", "少數非尖峰訪談缺乏代表性，也未核對實際班次。"], reviews: ["候車時間可能來自供給少或尖峰需求高，第一項能區分。", "後三項沒有與公車到站機制相連的變項。"], difficulty: "advanced", cognitiveProcess: ["提出補充證據"], representationType: "table", misconceptionTargets: ["人口少就不會候車久"], assets: [] }),
  Q({ id: "GEO_R4_Q_S004_ST03", skillId: "GEO_R4_S004", stimulusId: "GEO_R4_ST004", stem: "訪查顯示丁區居民常因轉乘錯過班車。下列結論何者最合宜？", options: ["只要人口少就不必改善", "長候車可能與轉乘銜接及班次共同有關，應再比對時刻表", "訪查可以取代表中所有數據", "居民說法證明每班車都誤點"], answerIndex: 1, reasons: ["人口不是唯一服務判準。", "訪查提出機制，時刻表可進一步檢驗。", "主觀經驗與客觀數據功能不同。", "『常錯過』不等於每班誤點。"], reviews: ["第二項把訪查當線索並要求客觀時刻驗證，推論強度恰當。", "其他選項忽略需求、取消多源檢證或把部分經驗誇大為全稱。"], difficulty: "transfer", cognitiveProcess: ["整合統計與訪查"], representationType: "table", misconceptionTargets: ["訪查可直接證明全部班次"], assets: [] }),
];

const stimulusS004 = ST({
  id: "GEO_R4_ST004", skillId: "GEO_R4_S004", type: "table",
  content: { title: "四區公車服務初步資料", prompt: "同一月份平日尖峰調查如下；候車時間以分鐘計。", columns: ["分區", "人口（萬人）", "平均候車時間（分鐘）"], rows: [["甲區", 14, 8], ["乙區", 9, 12], ["丙區", 18, 10], ["丁區", 6, 19]], sourceNote: "原創虛構教學資料；「四區公車服務初步資料」的條件與數值皆為本題設定。" },
  accessibility: { summary: "四區人口與平均候車時間表。", longDescription: "甲區十四萬人、候車八分鐘；乙區九萬人、十二分鐘；丙區十八萬人、十分鐘；丁區六萬人、十九分鐘。丁區人口最少但候車最久。" }, assets: [],
});

// S005: source date and spatial fit
const lectureS005 = L({
  id: "GEO_R4_L_S005", skillId: "GEO_R4_S005",
  objectives: ["能檢查資料年份、期間、空間範圍與分區是否對應研究問題", "能辨識邊界、定義與更新頻率造成的不可比性"],
  sections: [
    { id: "GEO_R4_L_S005_SEC01", title: "先讀資料說明", content: "使用資料前先讀年份、調查期間、空間範圍、統計單元、單位與定義。圖看起來相似不代表可直接比較；資料說明就是判斷適切性的入口。" },
    { id: "GEO_R4_L_S005_SEC02", title: "時間要對準現象", content: "研究某次豪雨應用該事件前後資料，不能用多年平均代替當次雨量。季節性現象也要比較相同季節，避免把季節循環誤認為長期變化。" },
    { id: "GEO_R4_L_S005_SEC03", title: "空間要同範圍同單元", content: "行政邊界調整、測站位置不同或分區層級不同，都會影響數值。比較前可重整為共同邊界，或清楚註明只能做有限度的趨勢觀察。" },
    { id: "GEO_R4_L_S005_SEC04", title: "定義與更新也要一致", content: "同名指標可能採不同分母或分類，例如『都市人口』的界定可能改變。若無法統一，不能硬算成同一序列；應保留原定義並限制結論。" },
  ],
  workedExamples: [
    { id: "GEO_R4_L_S005_EX01", prompt: "用2010年道路圖分析2025年新捷運站可達性是否適合？", steps: ["確認研究時點", "檢查道路與捷運更新", "尋找接近2025年的路網"], answer: "不適合直接使用。", why: "十五年間道路與站點可能改變，舊圖無法代表研究時點；除非目的就是比較變遷。" },
    { id: "GEO_R4_L_S005_EX02", prompt: "兩年人口資料的里界不同，如何比較？", steps: ["取得兩期邊界", "辨認分割或合併區", "轉換成共同空間單元或限制比較"], answer: "先統一邊界後再比較。", why: "里界改變會讓居民被重新分組；即使人口不變，地圖色塊也可能改變。" },
    { id: "GEO_R4_L_S005_EX03", prompt: "以年雨量解釋某日下午積水是否足夠？", steps: ["對準積水事件時間", "取得短時降雨強度", "搭配排水與地勢資料"], answer: "不足。", why: "積水常受短時強降雨影響，全年總量無法表示該時段雨勢，也不能單獨說明排水條件。" },
  ],
  misconceptions: [
    { belief: "資料來自官方就一定適合任何問題。", whyWrong: "官方資料也有特定年份、範圍與定義。", correction: "依研究問題檢查中介資料說明。" },
    { belief: "年份相同即可直接比較。", whyWrong: "同年資料仍可能使用不同邊界、單位或調查期間。", correction: "時間與空間條件都要核對。" },
    { belief: "多年平均能代表每一次事件。", whyWrong: "平均會平滑極端值與短時變化。", correction: "事件研究應使用相符時段資料。" },
    { belief: "行政區名稱相同，邊界就一定沒變。", whyWrong: "同名行政區也可能調整界線。", correction: "核對邊界版本與面積。" },
  ],
  checks: [
    { prompt: "研究2024年人口，使用2000年資料合適嗎？", answer: "不合適，除非研究變遷且另有2024年可比資料。", reason: "單一舊年份不能代表新時點。" },
    { prompt: "兩圖都標2020年便可直接比較嗎？", answer: "不一定。", reason: "還要核對範圍、分區、單位與定義。" },
    { prompt: "事件資料為何不能只用年平均？", answer: "年平均會掩蓋事件發生時的強度。", reason: "時間尺度與問題不相符。" },
  ], assets: [],
});

const questionsS005 = [
  Q({ id: "GEO_R4_Q_S005_01", skillId: "GEO_R4_S005", stem: "研究今年新開通捷運線周邊店家分布，哪份底圖最適合？", options: ["今年更新並含新站出口的街道圖", "二十年前的行政區圖", "沒有日期的世界地圖", "去年全國雨量圖"], answerIndex: 0, reasons: ["時點、範圍與街道細節皆符合。", "年代過舊且細節不足。", "範圍過大且無法確認時點。", "主題與店家位置不符。"], reviews: ["研究今年新站，第一項是唯一含最新站口及周邊街道的資料。", "其他選項在年份、尺度或主題至少一項不符合，不能替代。"], difficulty: "foundation", cognitiveProcess: ["適切性判斷"], representationType: "text", misconceptionTargets: ["任何地圖都可用"], assets: [] }),
  Q({ id: "GEO_R4_Q_S005_02", skillId: "GEO_R4_S005", stem: "比較兩年各里人口前，最應先確認哪件事？", options: ["里界與人口定義是否一致", "兩年全市總人口是否相近", "先把兩年資料各自換算成里人口密度", "直接以各年的里數作分母比較"], answerIndex: 0, reasons: ["分區與定義直接影響人口歸屬與可比性。", "全市總量相近不代表里界與人口口徑可直接比較。", "若里界或人口定義不同，換算密度仍建立在不可比單元上。", "里數不是人口分布的共同分母，且不能修正邊界變動。"], reviews: ["人口比較需同一空間單元和統計口徑，第一項是必要檢查。", "其餘都是版面或檔名特徵，不會解決人口被重新分組的問題。"], difficulty: "foundation", cognitiveProcess: ["辨識檢查項目"], representationType: "text", misconceptionTargets: ["外觀相同等於資料相容"], assets: [] }),
  Q({ id: "GEO_R4_Q_S005_03", skillId: "GEO_R4_S005", stem: "要解釋某次午後暴雨造成積水，哪項時間資料最合適？", options: ["該日下午逐時雨量", "全國十年平均年雨量", "明年的月平均雨量", "沒有日期的氣候介紹"], answerIndex: 0, reasons: ["逐時資料對應積水事件的短時強度。", "多年年平均會掩蓋當次雨勢。", "未來資料不能解釋已發生事件。", "缺日期與數值，無法對準事件。"], reviews: ["積水是短時事件，第一項的時間解析度與發生時段一致。", "其他三項或過度平均、時序錯誤，或沒有可核對時間。"], difficulty: "foundation", cognitiveProcess: ["時間尺度配對"], representationType: "text", misconceptionTargets: ["平均代表事件"], assets: [] }),
  Q({ id: "GEO_R4_Q_S005_04", skillId: "GEO_R4_S005", stem: "甲資料統計一月至十二月，乙資料只統計七、八月。可以直接比較總降雨量嗎？", options: ["可以，因為都用毫米", "不可以，統計期間不同", "可以，只要資料來自同一網站", "不可以，因為降雨不能量化"], answerIndex: 1, reasons: ["單位相同不能消除期間長短差異。", "全年與兩個月總量的時間範圍不一致。", "來源相同也可能有不同統計期間。", "降雨量可以用毫米量化。"], reviews: ["總量比較要求相同累積期間，第二項指出決定性問題。", "第一、三項忽略時間分母，第四項否定基本測量事實。"], difficulty: "standard", cognitiveProcess: ["資料可比性"], representationType: "text", misconceptionTargets: ["單位相同即可比"], assets: [] }),
  Q({ id: "GEO_R4_Q_S005_05", skillId: "GEO_R4_S005", stem: "同一縣市2015年有20里，2025年改為24里。比較里級人口色塊時應如何處理？", options: ["直接數深色里數", "先轉成共同邊界或使用可比單元", "把新增四里當作人口增加", "刪除年份"], answerIndex: 1, reasons: ["里數不同，深色塊數量不能直接比較。", "共同邊界可避免行政調整造成假變化。", "新增行政區不等於新增人口。", "年份是理解變遷的必要資訊。"], reviews: ["題幹的差異來自分區變動，第二項是唯一修正空間單元的方法。", "其餘作法把邊界變化誤當人口變化或隱藏關鍵資料。"], difficulty: "standard", cognitiveProcess: ["邊界調整"], representationType: "text", misconceptionTargets: ["行政區增加等於人口增加"], assets: [] }),
  Q({ id: "GEO_R4_Q_S005_06", skillId: "GEO_R4_S005", stem: "研究校園午間熱環境，使用清晨六時衛星地表溫度的主要問題是什麼？", options: ["空間範圍一定太大", "觀測時段與午間問題不相符", "衛星資料不能表示溫度", "清晨沒有任何地表"], answerIndex: 1, reasons: ["衛星資料可裁切校園範圍，空間不一定是主要問題。", "清晨與午間日照條件不同，不能代表午間熱環境。", "衛星可估測地表溫度。", "清晨仍有地表，只是熱狀況不同。"], reviews: ["研究時段是午間，而資料時點是清晨，第二項最直接。", "其餘說法誇大或錯誤否定衛星量測功能，無替代答案。"], difficulty: "standard", cognitiveProcess: ["時間匹配"], representationType: "text", misconceptionTargets: ["同日任何時段都可代表"], assets: [] }),
  Q({ id: "GEO_R4_Q_S005_07", skillId: "GEO_R4_S005", stem: "比較兩國『都市人口比例』時，除年份外還要核對什麼？", options: ["兩國如何定義都市人口", "兩國總人口是否相等", "只把比例換算成都市人口數", "兩國首都的人口密度"], answerIndex: 0, reasons: ["都市範圍或人口門檻不同會影響比例。", "總人口不必相等；關鍵是都市人口的分類口徑是否可比。", "若都市定義不同，換算成人數仍無法公平比較。", "首都人口密度不能代表全國都市人口的分類方式。"], reviews: ["同名指標跨國可能口徑不同，第一項是可比性關鍵。", "另外三項均不參與分子或分母定義。"], difficulty: "standard", cognitiveProcess: ["定義核對"], representationType: "text", misconceptionTargets: ["同名指標同口徑"], assets: [] }),
  Q({ id: "GEO_R4_Q_S005_08", skillId: "GEO_R4_S005", stem: "一張2024年土地利用圖使用2020年航空照片更新，應如何描述？", options: ["可視為2024年完整現況", "資料標示年份與實際影像年份不同，需查更新範圍", "航空照片沒有時間", "年份差四年一定毫無用途"], answerIndex: 1, reasons: ["若未全面更新，不能宣稱全為2024現況。", "應辨明製圖年、影像年及哪些區域另行更新。", "航空照片有拍攝日期。", "舊資料可作基準，但用途要受限，不是全無價值。"], reviews: ["第二項區分標示年與原始觀測年，處理最嚴謹。", "第一項過度信任標題，第三項錯誤，第四項又過度否定歷史資料。"], difficulty: "advanced", cognitiveProcess: ["中介資料判讀"], representationType: "text", misconceptionTargets: ["出版年等於觀測年"], assets: [] }),
  Q({ id: "GEO_R4_Q_S005_09", skillId: "GEO_R4_S005", stem: "甲測站在河川上游，乙測站在河口。用兩站水質比較時間變化時，哪個風險最大？", options: ["把空間位置差異誤當成時間變化", "水質不能有數字", "河川沒有上下游", "測站名稱不同就不能記錄"], answerIndex: 0, reasons: ["若不同年份採不同站點，水質差可能來自位置而非時間。", "水質可用多項指標量測。", "河川具有上下游。", "名稱不同不是不能記錄，而是位置須控制。"], reviews: ["題目以不同位置代表不同時點，第一項指出混淆變項。", "其餘選項違反基本地理與測量常識，答案唯一。"], difficulty: "advanced", cognitiveProcess: ["辨識時空混淆"], representationType: "text", misconceptionTargets: ["不同測站可當時間序列"], assets: [] }),
  Q({ id: "GEO_R4_Q_S005_10", skillId: "GEO_R4_S005", stem: "兩城市房價資料一份以每坪、一份以每平方公尺表示。最合宜的做法是什麼？", options: ["直接比較數字大小", "統一面積單位後再比較", "只保留較大的數字", "因單位不同而永久不能比較"], answerIndex: 1, reasons: ["數值受面積單位影響。", "換算成同一面積基準後才公平。", "挑大值沒有分析依據。", "單位可換算，不必放棄資料。"], reviews: ["這是可處理的單位不一致，第二項能建立共同尺度。", "第一與第三項會誤讀數值，第四項忽略合法換算。"], difficulty: "advanced", cognitiveProcess: ["資料標準化"], representationType: "text", misconceptionTargets: ["數字可脫離單位比較"], assets: [] }),
  Q({ id: "GEO_R4_Q_S005_11", skillId: "GEO_R4_S005", stem: "評估新防洪工程成效時，哪個比較最可靠？", options: ["工程前乾季與工程後颱風日", "工程前後相近雨量事件、相同淹水範圍與深度定義", "工程前居民訪談與工程後地圖", "兩個不同流域的單次照片"], answerIndex: 1, reasons: ["降雨條件差太大，無法歸因工程。", "事件強度、空間範圍與指標一致，前後可比。", "資料形式與指標不同。", "流域和時間都不同。"], reviews: ["成效比較需控制降雨並固定淹水定義，第二項滿足。", "其他方案同時改變季節、資料型態或地區，不能分離工程影響。"], difficulty: "transfer", cognitiveProcess: ["建立可比基準"], representationType: "text", misconceptionTargets: ["任何前後資料皆能評估政策"], assets: [] }),
  Q({ id: "GEO_R4_Q_S005_12", skillId: "GEO_R4_S005", stem: "想比較疫情前後商圈人流，但前期以人工計數、後期以手機訊號估算。應如何處理？", options: ["直接把兩數相減", "先檢驗兩方法的涵蓋對象與校正關係", "後期科技較新所以一定正確", "刪除方法說明"], answerIndex: 1, reasons: ["不同方法的涵蓋率可能不同。", "了解取樣與校正後才知道能否形成時間序列。", "新技術仍有持機者與演算法偏差。", "隱藏方法會讓誤差無法評估。"], reviews: ["題幹的主要斷點是量測方法改變，第二項先建立方法間可比性。", "直接相減、偏信新技術或刪除說明都會掩蓋系統誤差。"], difficulty: "transfer", cognitiveProcess: ["方法一致性評估"], representationType: "text", misconceptionTargets: ["科技資料天然可比"], assets: [] }),
  Q({ id: "GEO_R4_Q_S005_ST01", skillId: "GEO_R4_S005", stimulusId: "GEO_R4_ST005", stem: "若要比較2018與2024年各里的高齡人口比例，表中最主要的阻礙是什麼？", options: ["兩年里界版本不同", "人口都以人數記錄", "兩年都位於同一城市", "資料都有年份"], answerIndex: 0, reasons: ["里界調整會改變人口歸屬，不能直接逐里比較。", "統一人數單位反而有利。", "同一城市不保證里界一致。", "有年份是必要資訊，不是阻礙。"], reviews: ["2018舊里界與2024新里界是表中明示的結構差異，第一項正確。", "其他條件不會造成不可比，且不能消除邊界調整。"], difficulty: "standard", cognitiveProcess: ["讀取中介資料"], representationType: "table", misconceptionTargets: ["同城市即可逐區比"], assets: [] }),
  Q({ id: "GEO_R4_Q_S005_ST02", skillId: "GEO_R4_S005", stimulusId: "GEO_R4_ST005", stem: "下列哪個處理最能建立可比資料？", options: ["把兩期人口重整到共同邊界", "只比較里名相同者，不查邊界", "把2024年新增里的人口當成新增人口", "刪掉2018年資料"], answerIndex: 0, reasons: ["共同邊界讓兩期人口落在相同空間單元。", "同名里仍可能改界。", "新增行政區不表示人口憑空增加。", "刪除前期就無法分析變化。"], reviews: ["第一項直接修正空間分母，是標準可比化方法。", "其餘做法忽略改界、誤讀新增分區或取消時間比較。"], difficulty: "advanced", cognitiveProcess: ["資料重整"], representationType: "table", misconceptionTargets: ["同名即同界"], assets: [] }),
  Q({ id: "GEO_R4_Q_S005_ST03", skillId: "GEO_R4_S005", stimulusId: "GEO_R4_ST005", stem: "若無法取得共同邊界，最負責任的結論方式是什麼？", options: ["宣稱每一里變化都精確無誤", "清楚說明邊界限制，只比較可支持的全市或較大共同範圍", "任意把數字分給新里", "選擇看起來最合理的地圖"], answerIndex: 1, reasons: ["資料限制不允許精確逐里結論。", "改用共同較大範圍並揭露限制，可避免假精確。", "任意分配會製造不存在的資料。", "外觀看來合理不能取代方法。"], reviews: ["無法標準化時應縮小主張範圍，第二項符合證據界線。", "其餘選項隱藏或虛構不確定性，不能接受。"], difficulty: "transfer", cognitiveProcess: ["限制結論"], representationType: "table", misconceptionTargets: ["資料不足仍可精確推論"], assets: [] }),
];

const stimulusS005 = ST({
  id: "GEO_R4_ST005", skillId: "GEO_R4_S005", type: "table",
  content: { title: "兩期人口資料說明", prompt: "研究者準備比較某市高齡人口。", columns: ["資料", "統計日期", "空間單元", "年齡定義"], rows: [["甲", "2018-12-31", "2018年里界（20里）", "65歲以上"], ["乙", "2024-12-31", "2024年里界（24里）", "65歲以上"]], sourceNote: "原創虛構教學資料；「兩期人口資料說明」的行政邊界與人口口徑僅供比較練習。" },
  accessibility: { summary: "同市兩期高齡人口資料的日期、里界和定義表。", longDescription: "兩份資料都以六十五歲以上為高齡人口；甲為二零一八年、二十里舊界，乙為二零二四年、二十四里新界。年齡定義一致，但空間單元不同。" }, assets: [],
});

// S006: evidence-based natural-human explanation
const lectureS006 = L({
  id: "GEO_R4_L_S006", skillId: "GEO_R4_S006",
  objectives: ["能以具體證據連結自然條件與人文現象", "能區分關聯、機制與因果結論的證據強度"],
  sections: [
    { id: "GEO_R4_L_S006_SEC01", title: "自然與人文不是單向決定", content: "地形、氣候與水源會影響人類選擇，但技術、制度、交通與文化也會改變人如何利用環境。『山地一定沒有人居住』或『所有港口都因天然條件成功』都是過度簡化。" },
    { id: "GEO_R4_L_S006_SEC02", title: "從共同分布找線索", content: "把兩種現象放在同一空間單元比較，可以發現關聯，例如灌溉區與水田重疊。但重疊只提供線索，仍需確認時間先後、作用過程與其他可能條件。" },
    { id: "GEO_R4_L_S006_SEC03", title: "建立作用機制", content: "好的解釋要能說明中間過程：坡度陡使施工成本增加，因而道路較少；穩定水源降低灌溉風險，農民才可能種植需水作物。中間步驟必須可由資料或常識查證。" },
    { id: "GEO_R4_L_S006_SEC04", title: "用反例與對照修正", content: "若相似自然條件下出現不同人文結果，應尋找政策、技術或歷史等差異。結論可用『在其他條件相近時』、『可能增加』等有條件語句，避免把一項因素說成唯一原因。" },
  ],
  workedExamples: [
    { id: "GEO_R4_L_S006_EX01", prompt: "山坡較陡的地區道路密度較低，能如何解釋？", steps: ["確認坡度與道路分布關聯", "提出施工成本和安全機制", "檢查人口與政策等替代因素"], answer: "陡坡可能提高施工與維護成本，使道路較少，但不是唯一原因。", why: "坡度提供自然限制，成本是中間機制；人口需求與工程技術仍可能讓部分陡坡地區建路。" },
    { id: "GEO_R4_L_S006_EX02", prompt: "河谷聚落較密集，是否表示河流必然造成聚落？", steps: ["描述聚落與河谷共同分布", "檢查水源、平地與交通條件", "避免使用必然因果"], answer: "只能說河谷條件可能有利聚落，需更多證據。", why: "河谷常同時提供水源與較平坦土地，但洪水風險、道路與歷史也會影響實際聚落位置。" },
    { id: "GEO_R4_L_S006_EX03", prompt: "兩個雨量相近地區農作不同，應如何追查？", steps: ["確認雨量資料可比", "比較土壤、地形與市場", "檢查灌溉技術和政策"], answer: "加入其他自然與人文條件後再解釋。", why: "雨量相近排除一項差異，卻不能證明氣候無關；作物選擇還受市場、技術與土地條件共同影響。" },
  ],
  misconceptions: [
    { belief: "自然環境完全決定人類活動。", whyWrong: "技術與制度可降低或改變環境限制。", correction: "用『影響』而非『決定』，並列出人文條件。" },
    { belief: "兩張分布圖重疊就證明因果。", whyWrong: "兩者可能都受第三因素影響。", correction: "補時間、機制、對照與反例。" },
    { belief: "提出很多可能原因就是完整解釋。", whyWrong: "若沒有對應證據，只是原因清單。", correction: "逐項連結可觀察證據與作用過程。" },
    { belief: "有一個反例就表示整體關聯不存在。", whyWrong: "反例可能揭示條件限制，而非推翻所有趨勢。", correction: "修正結論適用範圍並查差異因素。" },
  ],
  checks: [
    { prompt: "共同分布能直接證明因果嗎？", answer: "不能。", reason: "仍可能有第三因素或相反的作用方向。" },
    { prompt: "自然與人文關係為何常需有條件描述？", answer: "因多項因素共同作用。", reason: "同一自然條件下可能因技術或制度而有不同結果。" },
    { prompt: "作用機制在解釋中有何功能？", answer: "說明一項條件如何導致觀察到的結果。", reason: "它連接證據與結論，避免只並列現象。" },
  ], assets: [],
});

const questionsS006 = [
  Q({ id: "GEO_R4_Q_S006_01", skillId: "GEO_R4_S006", stem: "某地坡度較陡、道路較少。下列哪個敘述最恰當？", options: ["坡度可能提高建路成本，但還要檢查人口與技術", "陡坡永遠不能修路", "道路少一定只因居民懶惰", "兩項資料完全無關"], answerIndex: 0, reasons: ["指出合理機制並保留其他條件。", "工程可在陡坡進行，只是成本與風險通常較高。", "沒有居民行為證據且把原因單一化。", "兩者有可檢驗的地形與工程關係。"], reviews: ["第一項把坡度連到施工成本，且沒有誇張成必然。", "其他選項使用絕對語氣、無據歸因或否定合理關聯，均不成立。"], difficulty: "foundation", cognitiveProcess: ["選擇解釋"], representationType: "text", misconceptionTargets: ["環境決定論"], assets: [] }),
  Q({ id: "GEO_R4_Q_S006_02", skillId: "GEO_R4_S006", stem: "灌溉渠道附近水田較多，這項觀察首先能支持什麼？", options: ["渠道與水田呈空間關聯", "渠道必然是水田唯一原因", "所有渠道旁都只能種稻", "水田造成渠道自然形成"], answerIndex: 0, reasons: ["共同分布可先建立關聯。", "尚未排除土壤、市場等因素。", "作物選擇不具必然性。", "渠道是人造設施，不會由水田自然形成。"], reviews: ["題目只有分布觀察，最穩健結論是第一項的空間關聯。", "其餘三項都超過證據，或顛倒人造設施與農地的關係。"], difficulty: "foundation", cognitiveProcess: ["證據強度辨識"], representationType: "text", misconceptionTargets: ["重疊等於唯一因果"], assets: [] }),
  Q({ id: "GEO_R4_Q_S006_03", skillId: "GEO_R4_S006", stem: "要解釋海港附近工業集中，下列哪項是合理的中間機制？", options: ["港口降低大宗原料運輸成本", "港名比較響亮", "海水顏色吸引所有工廠", "經度決定公司名稱"], answerIndex: 0, reasons: ["原料與產品可由海運大量進出，成本機制清楚。", "名稱聲響不是工業區位條件。", "沒有產業機制且使用絕對語氣。", "經度與公司命名無直接關係。"], reviews: ["第一項連接港口功能和工業區位，能由貨運資料查證。", "後三項都缺乏自然或經濟作用途徑，不能解釋集中。"], difficulty: "foundation", cognitiveProcess: ["辨識作用機制"], representationType: "text", misconceptionTargets: ["原因只要同地出現即可"], assets: [] }),
  Q({ id: "GEO_R4_Q_S006_04", skillId: "GEO_R4_S006", stem: "甲乙兩地雨量相近，甲地種茶、乙地種稻。最合理的下一步是什麼？", options: ["判定雨量資料沒有用", "比較地形、土壤、灌溉與市場條件", "認定作物完全隨機", "只比較地名"], answerIndex: 1, reasons: ["雨量仍是重要條件，只是不能單獨解釋。", "加入其他自然與人文因素可區分差異。", "作物選擇有多種可研究條件。", "地名本身不是生產機制。"], reviews: ["控制雨量後應找其他差異變項，第二項涵蓋主要候選機制。", "其他選項放棄解釋或使用無關資料，無法回答。"], difficulty: "standard", cognitiveProcess: ["提出替代解釋"], representationType: "text", misconceptionTargets: ["單一因素未解釋即毫無作用"], assets: [] }),
  Q({ id: "GEO_R4_Q_S006_05", skillId: "GEO_R4_S006", stem: "河谷聚落多於山脊，下列哪組證據最能解釋差異？", options: ["河谷較易取水且可利用平地較多", "河谷名稱字數較少", "山脊一定沒有陽光", "所有居民都怕看遠景"], answerIndex: 0, reasons: ["水源與地形提供可驗證的人地機制。", "名稱字數不影響聚落。", "山脊通常不缺陽光，且『一定』錯誤。", "沒有居民偏好證據。"], reviews: ["第一項將自然條件連到居住資源，符合聚落區位機制。", "其餘選項不是無關，就是與自然事實不符或憑空臆測。"], difficulty: "standard", cognitiveProcess: ["證據解釋"], representationType: "text", misconceptionTargets: ["用無關特徵解釋分布"], assets: [] }),
  Q({ id: "GEO_R4_Q_S006_06", skillId: "GEO_R4_S006", stem: "沿海風強的地區風力發電機較多，能否直接說風強是唯一原因？", options: ["能，因兩者同地出現", "不能，還要考慮電網、土地、政策與環評", "能，因任何發電都只看風", "不能，因風完全不影響發電"], answerIndex: 1, reasons: ["共同分布不足以證明唯一因果。", "風資源重要，但設置還受多項人文條件。", "風機區位不只看風。", "風速明顯影響發電潛力，不能否定。"], reviews: ["第二項保留風力機制並加入必要的人文限制，結論最完整。", "第一、三項過度單因，第四項又否認基本能源條件。"], difficulty: "standard", cognitiveProcess: ["限制因果"], representationType: "text", misconceptionTargets: ["單因解釋"], assets: [] }),
  Q({ id: "GEO_R4_Q_S006_07", skillId: "GEO_R4_S006", stem: "新道路開通後觀光客增加。哪項資料最能強化道路造成影響的解釋？", options: ["開通前後到達時間與旅客來源、數量變化", "道路名稱與旅館招牌顏色", "另一國家的年雨量", "一位居民小時候的照片"], answerIndex: 0, reasons: ["時間順序、可達性機制與旅客變化相互對應。", "名稱與顏色不是運輸機制。", "不同國家雨量無關。", "單張舊照不能建立道路影響。"], reviews: ["第一項同時檢驗事件前後、交通成本與結果，最接近因果鏈。", "後三項不能證明道路改變遊客到達條件。"], difficulty: "standard", cognitiveProcess: ["因果證據評估"], representationType: "text", misconceptionTargets: ["只需前後同時發生"], assets: [] }),
  Q({ id: "GEO_R4_Q_S006_08", skillId: "GEO_R4_S006", stem: "兩區都靠海，只有甲區發展大型港口。下列哪個解釋最周延？", options: ["靠海就必然有大型港口", "比較水深、避風條件、腹地交通與政策投資", "甲區名稱比較適合", "乙區居民一定不喜歡船"], answerIndex: 1, reasons: ["海岸只是必要背景，不保證港口規模。", "自然港灣與人文網路共同影響發展。", "名稱不是港口條件。", "沒有居民態度證據且過度概括。"], reviews: ["相同靠海但結果不同，應找自然和人文差異，第二項完整。", "其他選項不是把背景當決定因素，就是使用無關或臆測理由。"], difficulty: "advanced", cognitiveProcess: ["反例分析", "多因解釋"], representationType: "text", misconceptionTargets: ["靠海決定港口"], assets: [] }),
  Q({ id: "GEO_R4_Q_S006_09", skillId: "GEO_R4_S006", stem: "資料顯示樹蔭率高的街道行人較多。要檢驗是否由樹蔭影響，哪個對照最重要？", options: ["比較相似商業與交通條件、但樹蔭率不同的街道", "比較街道名稱", "只選行人最多的一天", "刪除沒有樹的街道"], answerIndex: 0, reasons: ["控制其他吸引行人的條件，較能分離樹蔭作用。", "名稱不是行人機制。", "單日極值可能受活動影響。", "刪除對照會失去比較。"], reviews: ["第一項建立條件相近的對照，只讓樹蔭率形成主要差異。", "後三項沒有控制混淆因素，甚至移除必要對照。"], difficulty: "advanced", cognitiveProcess: ["設計對照"], representationType: "text", misconceptionTargets: ["相關即可證明因果"], assets: [] }),
  Q({ id: "GEO_R4_Q_S006_10", skillId: "GEO_R4_S006", stem: "某山村人口減少與坡度陡同時存在，但十年前新道路改線。最合宜的解釋是什麼？", options: ["人口減少一定只因坡度", "道路可達性改變可能與坡度共同影響，需比較遷移與交通資料", "道路與人口永遠無關", "只看現在坡度即可確定十年變化"], answerIndex: 1, reasons: ["單因結論忽略道路變化。", "提出多因素及相應的時間證據。", "交通會影響就業與服務可達性。", "坡度未隨時間變，不能單獨解釋變化時點。"], reviews: ["題幹加入道路改線，第二項把穩定自然條件與變動人文條件一起檢驗。", "第一、四項無法解釋時間節點，第三項又不符可達性機制。"], difficulty: "advanced", cognitiveProcess: ["時間因果推理"], representationType: "text", misconceptionTargets: ["穩定自然條件解釋短期變化"], assets: [] }),
  Q({ id: "GEO_R4_Q_S006_11", skillId: "GEO_R4_S006", stem: "城市高溫區多為建物密集區，但一處密集區溫度較低。下列哪項最值得檢查？", options: ["該區綠地、水體、建材與通風條件", "該區名稱是否較短", "居民是否都喜歡冬天", "把低溫值直接刪除"], answerIndex: 0, reasons: ["這些條件可形成降溫反例機制。", "名稱長短不影響熱環境。", "偏好不改變量測溫度。", "反例可能揭示重要條件，不應任意刪除。"], reviews: ["例外地點能用綠地、水體與通風解釋，第一項最有證據價值。", "其餘選項無關或刻意排除反例，不能修正原假設。"], difficulty: "transfer", cognitiveProcess: ["反例利用"], representationType: "text", misconceptionTargets: ["反例應刪除"], assets: [] }),
  Q({ id: "GEO_R4_Q_S006_12", skillId: "GEO_R4_S006", stem: "某島缺乏淡水卻有大量觀光旅館。這個案例最能提醒我們什麼？", options: ["自然限制可被供水技術與管理部分改變", "缺水地區必然沒有任何人類活動", "觀光與水資源完全無關", "所有島嶼條件都相同"], answerIndex: 0, reasons: ["海水淡化、運水與節水可改變限制，但也有成本。", "案例本身就是反例。", "旅館用水使兩者有明顯關係。", "島嶼的氣候、面積與技術不同。"], reviews: ["第一項同時承認自然限制與人文調適，符合案例。", "其他選項皆為被案例否定的絕對化敘述。"], difficulty: "transfer", cognitiveProcess: ["概念遷移"], representationType: "text", misconceptionTargets: ["自然環境完全決定"], assets: [] }),
  Q({ id: "GEO_R4_Q_S006_ST01", skillId: "GEO_R4_S006", stimulusId: "GEO_R4_ST006", stem: "表中最直接支持哪項觀察？", options: ["坡度較高地區道路密度一定較高", "三地坡度增加時，道路密度呈下降趨勢", "人口是唯一影響道路的因素", "三地道路密度完全相同"], answerIndex: 1, reasons: ["資料呈相反方向。", "甲乙丙的坡度遞增，道路密度遞減。", "表中沒有列人口，不能判唯一原因。", "三個數值不同。"], reviews: ["逐列比較可見十八、三十六、五十四度對應十二、七、三公里，第二項忠實描述。", "其餘選項或違反方向、超出欄位，或否定明顯差異。"], difficulty: "standard", cognitiveProcess: ["讀表", "描述關聯"], representationType: "table", misconceptionTargets: ["趨勢方向判反"], assets: [] }),
  Q({ id: "GEO_R4_Q_S006_ST02", skillId: "GEO_R4_S006", stimulusId: "GEO_R4_ST006", stem: "要把關聯發展成較完整解釋，還需要哪項證據？", options: ["施工與維護成本、人口需求及地質資料", "只增加三地道路密度的年份序列", "只訪談坡度最低地區的居民", "改比較道路總長，但不控制地區面積"], answerIndex: 0, reasons: ["可檢查坡度影響道路的機制及其他條件。", "年份序列可確認趨勢，仍缺施工成本、需求與地質等作用機制。", "單一低坡地訪談缺少不同坡度地區的對照，無法分辨坡度作用。", "道路總長未控制面積，不能與原本的道路密度公平比較。"], reviews: ["第一項同時提供機制與替代因素，能避免單因推論。", "其餘資料沒有可驗證的道路建設作用途徑。"], difficulty: "advanced", cognitiveProcess: ["補充因果證據"], representationType: "table", misconceptionTargets: ["關聯表即完整因果"], assets: [] }),
  Q({ id: "GEO_R4_Q_S006_ST03", skillId: "GEO_R4_S006", stimulusId: "GEO_R4_ST006", stem: "若丁地坡度50度但道路密度達每平方公里11公里，最合理的研究反應是什麼？", options: ["刪除丁地以保留原趨勢", "調查丁地是否有人口集中、特殊工程或交通樞紐", "宣稱坡度從不影響道路", "把11改成3"], answerIndex: 1, reasons: ["反例可能揭示條件，不應任意刪除。", "高需求或技術可抵銷部分坡度限制。", "一個反例不必然推翻所有趨勢。", "竄改資料不符合探究倫理。"], reviews: ["丁地是有價值的反例，第二項用人文條件檢驗其形成機制。", "其他選項隱藏、誇大或改造證據，均不是負責任分析。"], difficulty: "transfer", cognitiveProcess: ["反例探究"], representationType: "table", misconceptionTargets: ["例外值應刪除"], assets: [] }),
];

const stimulusS006 = ST({
  id: "GEO_R4_ST006", skillId: "GEO_R4_S006", type: "table",
  content: { title: "三個山區的坡度與道路密度", prompt: "三地採相同年份、相同面積計算方式。", columns: ["地區", "平均坡度（度）", "道路密度（公里／平方公里）"], rows: [["甲地", 18, 12], ["乙地", 36, 7], ["丙地", 54, 3]], sourceNote: "原創虛構教學資料；僅用於練習關聯與因果界線。" },
  accessibility: { summary: "三地平均坡度與道路密度比較。", longDescription: "甲地平均坡度十八度、道路密度十二；乙地三十六度、道路密度七；丙地五十四度、道路密度三。坡度增加時道路密度下降。" }, assets: [],
});

// S007: conditional geographic decisions
const lectureS007 = L({
  id: "GEO_R4_L_S007", skillId: "GEO_R4_S007",
  objectives: ["能依多項判準比較地理方案並說明取捨", "能提出附帶條件、適用對象與限制的判斷"],
  sections: [
    { id: "GEO_R4_L_S007_SEC01", title: "先說清楚目標", content: "方案沒有脫離目標的『最好』。同一地點對縮短路程可能最佳，對保護棲地卻未必。比較前要把目標轉成可檢查的判準。" },
    { id: "GEO_R4_L_S007_SEC02", title: "使用同一組判準", content: "候選方案應用相同資料比較，例如成本、服務人口、環境風險與施工時間。不能對喜歡的方案列優點，卻只列其他方案的缺點。" },
    { id: "GEO_R4_L_S007_SEC03", title: "權衡與利害關係人", content: "地理決策常同時有受益者與承擔成本者。評估不只加總數字，也要看風險集中在哪些地點與族群，並說明判準權重由誰決定。" },
    { id: "GEO_R4_L_S007_SEC04", title: "寫出有條件結論", content: "負責任的判斷會指出『若優先降低淹水風險，選甲；若預算最受限制，選乙』，並列出資料限制和後續監測。這不是模稜兩可，而是讓決策依據可檢驗。" },
  ],
  workedExamples: [
    { id: "GEO_R4_L_S007_EX01", prompt: "甲公車方案服務多人但成本高，乙成本低但服務少，如何判斷？", steps: ["設定服務與成本判準", "用相同單位比較兩案", "依政策優先順序寫條件結論"], answer: "若優先擴大服務選甲；若預算上限無法支應則選乙或調整甲案。", why: "兩案各有優勢，結論必須連到目標與預算限制，不能只說某案『整體較好』。" },
    { id: "GEO_R4_L_S007_EX02", prompt: "自行車道最短路線穿過生態敏感區，應如何評估？", steps: ["比較路程節省", "查敏感區影響與替代路線", "納入減輕措施與不可接受門檻"], answer: "不能只按最短選線；若生態影響無法降低，應採較長替代線。", why: "距離是交通效益，棲地是環境成本；敏感區可能構成必須優先避開的限制。" },
    { id: "GEO_R4_L_S007_EX03", prompt: "防災中心A近多數居民但位於淹水區，B較遠但地勢高，何者較適合？", steps: ["區分平時便利與災時可用性", "估算不同災害情境", "確認聯外道路與服務涵蓋"], answer: "若主要任務是洪災避難，B較可靠；仍須改善其可達性。", why: "避難設施在災時不能失效，安全門檻高於平時距離；選B後仍需處理弱勢居民交通。" },
  ],
  misconceptions: [
    { belief: "數字最高的方案就是唯一最佳方案。", whyWrong: "不同指標方向與重要性可能不同。", correction: "先定目標、單位與權重。" },
    { belief: "折衷就是把所有指標平均。", whyWrong: "安全或法律限制可能不能用其他優點抵銷。", correction: "先設不可接受門檻，再比較可行方案。" },
    { belief: "只要多數人受益就不必看少數成本。", whyWrong: "風險可能集中於特定地區或弱勢族群。", correction: "呈現受益與負擔的空間分布。" },
    { belief: "有條件結論表示研究沒有答案。", whyWrong: "條件式判斷清楚說明不同目標下的選擇。", correction: "把條件、證據與方案連成可驗證句子。" },
  ],
  checks: [
    { prompt: "為何比較方案前要先定目標？", answer: "不同目標會改變判準與最佳選擇。", reason: "方案優劣不是脫離用途的固定屬性。" },
    { prompt: "安全門檻可以被低成本完全抵銷嗎？", answer: "通常不可以。", reason: "不符合基本安全的方案不應只因便宜而採用。" },
    { prompt: "條件式結論應包含什麼？", answer: "優先目標、支持證據、適用條件與限制。", reason: "讀者才能知道何時應改變選擇。" },
  ], assets: [],
});

const questionsS007 = [
  Q({ id: "GEO_R4_Q_S007_01", skillId: "GEO_R4_S007", stem: "比較兩個設站方案前，第一步應做什麼？", options: ["明確設定服務目標與判準", "先選自己喜歡的地點", "只看其中一案優點", "把所有資料刪除"], answerIndex: 0, reasons: ["目標決定哪些資料代表好壞。", "個人偏好不是共同判準。", "單邊比較不公平。", "沒有資料無法決策。"], reviews: ["方案比較需先定義『好』，第一項是後續蒐集和權衡的基礎。", "其餘做法預設答案、偏列證據或取消證據，皆不合理。"], difficulty: "foundation", cognitiveProcess: ["決策程序辨識"], representationType: "text", misconceptionTargets: ["先選方案再找理由"], assets: [] }),
  Q({ id: "GEO_R4_Q_S007_02", skillId: "GEO_R4_S007", stem: "下列哪個結論屬於有條件的地理判斷？", options: ["甲案永遠最好", "若優先服務步行困難者，應選距醫院較近的乙案", "我比較喜歡丙案的名字", "所有方案完全相同"], answerIndex: 1, reasons: ["『永遠』沒有說明適用目標。", "清楚連結優先對象、距離證據與方案。", "名稱偏好不是服務判準。", "題目未提供相同證據。"], reviews: ["第二項用『若』指出條件，再以醫院距離支撐選擇。", "其餘選項不是絕對化、主觀偏好，就是無據宣稱。"], difficulty: "foundation", cognitiveProcess: ["辨識條件結論"], representationType: "text", misconceptionTargets: ["有條件等於沒有立場"], assets: [] }),
  Q({ id: "GEO_R4_Q_S007_03", skillId: "GEO_R4_S007", stem: "方案成本最低，但位於已知崩塌高風險區。最恰當的處理是什麼？", options: ["因便宜而直接採用", "先檢查安全門檻，無法降低風險則排除", "把風險資料藏起來", "只詢問承包商喜好"], answerIndex: 1, reasons: ["低成本不能抵銷不可接受的安全風險。", "安全可作先決門檻，再比較其他方案。", "隱藏資料違反決策透明。", "單一利害關係人的偏好不足。"], reviews: ["崩塌風險關乎設施可用與生命安全，第二項正確設為門檻。", "其餘選項讓價格或偏好凌駕證據，或刻意隱瞞。"], difficulty: "foundation", cognitiveProcess: ["門檻判斷"], representationType: "text", misconceptionTargets: ["所有指標都可互相抵銷"], assets: [] }),
  Q({ id: "GEO_R4_Q_S007_04", skillId: "GEO_R4_S007", stem: "甲案服務一萬人、成本八千萬元；乙案服務八千人、成本四千萬元。只按每服務一人成本，哪案較低？", options: ["甲案，每人八千元", "乙案，每人五千元", "甲案，每人八萬元", "兩案完全相同"], answerIndex: 1, reasons: ["甲案每人八千元，高於乙案。", "四千萬元除以八千人等於每人五千元。", "單位換算多了一個十倍。", "兩案單位成本不同。"], reviews: ["分別計算8000萬÷10000=8000、4000萬÷8000=5000，乙較低。", "以相同分母比較後答案唯一；第三項為位值錯誤，第四項不符計算。"], difficulty: "standard", cognitiveProcess: ["計算比較"], representationType: "text", misconceptionTargets: ["只看總成本"], assets: [] }),
  Q({ id: "GEO_R4_Q_S007_05", skillId: "GEO_R4_S007", stem: "規劃垃圾轉運站時，哪組判準較完整？", options: ["只看土地最便宜", "運輸距離、居民暴露、環境風險與成本", "只看站名", "只看施工速度"], answerIndex: 1, reasons: ["便宜土地可能使運輸或居民負擔增加。", "同時涵蓋效率、分配、環境與財務。", "名稱沒有空間決策意義。", "速度只是一項條件。"], reviews: ["轉運站有多重外部影響，第二項提供必要的多準則架構。", "另外三項都把單一指標當整體，無法公平比較地點。"], difficulty: "standard", cognitiveProcess: ["建立判準"], representationType: "text", misconceptionTargets: ["單一指標決策"], assets: [] }),
  Q({ id: "GEO_R4_Q_S007_06", skillId: "GEO_R4_S007", stem: "某防洪方案降低市中心風險，卻把水流導向下游村落。評估時最不能忽略什麼？", options: ["風險在不同地區間的轉移", "方案名稱", "簡報頁數", "市中心建築顏色"], answerIndex: 0, reasons: ["方案可能把負擔集中給下游居民。", "名稱不影響洪水路徑。", "頁數不是防洪成效。", "建築顏色與水流無關。"], reviews: ["題幹明示上游受益、下游承擔，第一項是環境正義與空間風險核心。", "其餘都是與水文及居民暴露無關的表面資料。"], difficulty: "standard", cognitiveProcess: ["分配效果評估"], representationType: "text", misconceptionTargets: ["總風險下降即可忽略轉移"], assets: [] }),
  Q({ id: "GEO_R4_Q_S007_07", skillId: "GEO_R4_S007", stem: "兩條自行車路線：甲較短但坡陡，乙較長但平緩。若主要服務日常通勤初學者，較合理的判斷是什麼？", options: ["一律選最短的甲", "優先評估乙，並確認增加路程是否仍可接受", "因乙較長所以必定危險", "無需調查使用者"], answerIndex: 1, reasons: ["初學者可能受坡度影響，不能只看距離。", "平緩符合對象需求，但仍需檢查時間成本。", "路線長不等於危險。", "目標使用者是判準來源。"], reviews: ["第二項把服務對象、坡度與額外距離一起納入，結論有條件。", "第一與第三項皆單因決定，第四項忽略需求證據。"], difficulty: "standard", cognitiveProcess: ["情境權衡"], representationType: "text", misconceptionTargets: ["最短路徑必定最佳"], assets: [] }),
  Q({ id: "GEO_R4_Q_S007_08", skillId: "GEO_R4_S007", stem: "方案評分表中，甲案總分較高，但飲用水安全項目未達最低標準。應如何判斷？", options: ["總分高即可通過", "安全門檻未達，應先排除或修正甲案", "刪除安全欄後重算", "把最低標準改到甲案能通過"], answerIndex: 1, reasons: ["不可接受風險不能被其他加分抵銷。", "先處理門檻，再比較剩餘可行方案。", "刪欄會隱藏核心風險。", "為特定方案改標準會造成偏誤。"], reviews: ["飲水安全是先決條件，第二項符合門檻式決策。", "其餘做法都讓加總或事後改規則取代安全要求。"], difficulty: "advanced", cognitiveProcess: ["多準則決策"], representationType: "text", misconceptionTargets: ["總分能抵銷安全失敗"], assets: [] }),
  Q({ id: "GEO_R4_Q_S007_09", skillId: "GEO_R4_S007", stem: "居民支持率：甲案70%，乙案55%；但甲案受訪者只來自受益區。最合理的處理是什麼？", options: ["直接依70%選甲", "補訪可能承擔成本的地區，再比較支持與影響", "刪除乙案", "認定未受訪者都支持甲"], answerIndex: 1, reasons: ["樣本偏向受益者，比例可能高估。", "納入受影響區可呈現利害分布。", "刪除方案沒有解決取樣。", "不能替未受訪者臆測立場。"], reviews: ["支持率的空間樣本不平衡，第二項是直接修正方式。", "其他選項沿用偏誤、移除比較或虛構意見。"], difficulty: "advanced", cognitiveProcess: ["取樣與公平評估"], representationType: "text", misconceptionTargets: ["多數比例不看樣本位置"], assets: [] }),
  Q({ id: "GEO_R4_Q_S007_10", skillId: "GEO_R4_S007", stem: "甲水庫方案供水穩定但淹沒農地；乙方案供水較少但影響小。下列結論何者最負責任？", options: ["水量最大者必然最好", "依供水缺口、農地損失與替代措施比較，並說明權重", "影響農地不需詢問農民", "兩案沒有任何差別"], answerIndex: 1, reasons: ["最大水量忽略社會與環境成本。", "多項可量化影響與權重透明，能形成條件判斷。", "受影響者經驗與權益必須納入。", "兩案供水與損失明顯不同。"], reviews: ["第二項同時處理效益、成本與權重，是完整的方案比較。", "其餘選項單看供水、排除利害關係人或否定差異。"], difficulty: "advanced", cognitiveProcess: ["權衡與透明度"], representationType: "text", misconceptionTargets: ["效益最大即最佳"], assets: [] }),
  Q({ id: "GEO_R4_Q_S007_11", skillId: "GEO_R4_S007", stem: "地方要在兩處設避難所：甲近人口中心但在土石流潛勢區，乙較遠且安全。若無法降低甲的風險，應如何選？", options: ["選甲，因距離永遠優先", "選乙並規劃接駁與弱勢協助", "兩處都不需設置", "隱藏甲的風險資料"], answerIndex: 1, reasons: ["災時設施不能位於不可接受風險。", "乙符合安全門檻，接駁可減輕距離缺點。", "仍有避難需求，不能取消。", "隱藏風險違反安全與透明。"], reviews: ["安全門檻排除甲後，第二項同時處理乙的可達性限制。", "第一項顛倒避難目的，第三與第四都無法保護居民。"], difficulty: "transfer", cognitiveProcess: ["災害決策"], representationType: "text", misconceptionTargets: ["距離可抵銷災害風險"], assets: [] }),
  Q({ id: "GEO_R4_Q_S007_12", skillId: "GEO_R4_S007", stem: "某島考慮限制遊客量。哪個方案判斷最符合條件式思考？", options: ["遊客愈多永遠愈好", "若旺季用水超過安全供給，先設上限；淡季可依監測調整", "全年使用同一上限但不看水量", "只聽一家旅館決定"], answerIndex: 1, reasons: ["忽略環境承載與居民用水。", "把季節供水、監測與彈性規則連結。", "固定上限不一定回應季節差異。", "單一業者不是完整利害關係人。"], reviews: ["第二項明定觸發條件與調整依據，能隨環境容量決策。", "其餘方案使用絕對口號、忽略資料或由單一利益決定。"], difficulty: "transfer", cognitiveProcess: ["適應性管理"], representationType: "text", misconceptionTargets: ["政策只能固定不變"], assets: [] }),
  Q({ id: "GEO_R4_Q_S007_ST01", skillId: "GEO_R4_S007", stimulusId: "GEO_R4_ST007", stem: "若安全門檻規定淹水風險不得為高，哪個方案先被排除？", options: ["甲案", "乙案", "丙案", "三案都不會"], answerIndex: 0, reasons: ["甲案風險欄為高，未達門檻。", "乙案風險低。", "丙案風險中，未被題設的高風險門檻排除。", "至少甲案必須排除。"], reviews: ["按題設門檻逐列檢查，只有甲標示高風險。", "乙與丙未達排除條件，因此第一項是唯一答案。"], difficulty: "standard", cognitiveProcess: ["套用門檻"], representationType: "table", misconceptionTargets: ["總分取代安全門檻"], assets: [] }),
  Q({ id: "GEO_R4_Q_S007_ST02", skillId: "GEO_R4_S007", stimulusId: "GEO_R4_ST007", stem: "排除甲案後，若目標是服務最多居民，應優先選哪案？", options: ["乙案", "丙案", "兩案服務人數相同", "無法由表判斷"], answerIndex: 0, reasons: ["乙服務一萬二千人，高於丙。", "丙服務八千人。", "兩案相差四千人。", "表中明列服務人口。"], reviews: ["在可行方案中比較服務人口，乙12000大於丙8000。", "題目已指定目標且數據完整，不存在資訊不足或平手。"], difficulty: "advanced", cognitiveProcess: ["條件篩選", "數據比較"], representationType: "table", misconceptionTargets: ["忘記先排除不安全方案"], assets: [] }),
  Q({ id: "GEO_R4_Q_S007_ST03", skillId: "GEO_R4_S007", stimulusId: "GEO_R4_ST007", stem: "若預算上限為五千萬元，且不接受高淹水風險，最合宜的結論是什麼？", options: ["選甲案", "選乙案", "選丙案", "三案都符合"], answerIndex: 2, reasons: ["甲雖低於預算，但風險高。", "乙安全但成本六千萬元，超過上限。", "丙成本四千八百萬元、風險中，同時符合兩條件。", "甲與乙各有一項不符。"], reviews: ["依序套用風險與預算兩個門檻，只有丙保留下來。", "反查各案：甲敗在風險、乙敗在成本，第三項答案唯一。"], difficulty: "transfer", cognitiveProcess: ["多條件決策"], representationType: "table", misconceptionTargets: ["只檢查一個條件"], assets: [] }),
];

const stimulusS007 = ST({
  id: "GEO_R4_ST007", skillId: "GEO_R4_S007", type: "table",
  content: { title: "三個防災服務站方案", prompt: "規劃者以相同方法估算成本、服務人口與淹水風險。", columns: ["方案", "成本（萬元）", "服務人口（人）", "淹水風險"], rows: [["甲案", 4200, 15000, "高"], ["乙案", 6000, 12000, "低"], ["丙案", 4800, 8000, "中"]], sourceNote: "原創虛構教學資料；風險等級僅供本題比較。" },
  accessibility: { summary: "三個防災服務站方案的成本、人口與風險表。", longDescription: "甲案四千二百萬元、服務一萬五千人、淹水風險高；乙案六千萬元、一萬二千人、風險低；丙案四千八百萬元、八千人、風險中。" }, assets: [],
});

export const GEOGRAPHY_UNIT_SOURCE = {
  unitId: "GEO_R4_U01",
  lectures: [lectureS001, lectureS002, lectureS003, lectureS004, lectureS005, lectureS006, lectureS007],
  questions: [...questionsS001, ...questionsS002, ...questionsS003, ...questionsS004, ...questionsS005, ...questionsS006, ...questionsS007],
  stimuli: [stimulusS001, stimulusS002, stimulusS003, stimulusS004, stimulusS005, stimulusS006, stimulusS007],
  assets: [],
};
