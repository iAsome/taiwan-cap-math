const HEAD = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 420" role="img"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#111"/></marker><style>text{font-family:Arial,'Noto Sans TC',sans-serif;fill:#111;font-size:18px}.small{font-size:15px}.line{fill:none;stroke:#111;stroke-width:3}.thin{fill:none;stroke:#111;stroke-width:2}.dash{fill:none;stroke:#111;stroke-width:2;stroke-dasharray:8 6}.arrow{fill:none;stroke:#111;stroke-width:3;marker-end:url(#arrow)}.box{fill:#fff;stroke:#111;stroke-width:3}</style></defs>`;

function wrap(title, description, body) {
  return `${HEAD}<title>${title}</title><desc>${description}</desc><rect x="1" y="1" width="718" height="418" fill="#fff" stroke="#111" stroke-width="2"/>${body}</svg>\n`;
}

const SVG = {
  "laboratory-setup": wrap(
    "加熱試管安全裝置",
    "試管由夾具固定並斜向上，管口朝向無人處；酒精燈位在液面下方，操作者戴護目鏡並站在側面。",
    `<text x="32" y="38">加熱試管安全示意圖（非依比例）</text><line class="line" x1="90" y1="335" x2="640" y2="335"/><line class="line" x1="205" y1="320" x2="250" y2="105"/><line class="line" x1="250" y1="105" x2="475" y2="170"/><line class="line" x1="258" y1="118" x2="478" y2="182"/><path class="thin" d="M285 143 L430 185"/><text x="455" y="145" class="small">管口朝無人處</text><path class="arrow" d="M455 150 L520 170"/><rect class="box" x="270" y="270" width="70" height="60"/><path class="thin" d="M290 270 Q305 220 320 270"/><text x="245" y="365" class="small">熱源在液面下方</text><circle class="box" cx="125" cy="105" r="35"/><path class="line" d="M95 140 L70 255 M155 140 L175 255 M105 255 L80 330 M150 255 L175 330"/><text x="35" y="65" class="small">護目鏡</text><path class="arrow" d="M95 70 L112 90"/>`,
  ),
  "wave-graph": wrap(
    "繩波的空間波形",
    "橫軸為位置公尺，縱軸為位移公分。波峰位於一與五公尺，兩峰距離四公尺；振幅二公分。",
    `<text x="32" y="38">繩波空間圖</text><line class="arrow" x1="90" y1="330" x2="660" y2="330"/><line class="arrow" x1="100" y1="370" x2="100" y2="70"/><text x="620" y="365">位置 (m)</text><text x="20" y="85">位移 (cm)</text><path class="line" d="M100 330 C150 210 200 210 250 330 S350 450 400 330 S500 210 550 330 S650 450 700 330"/><line class="dash" x1="175" y1="210" x2="175" y2="330"/><line class="dash" x1="475" y1="210" x2="475" y2="330"/><path class="arrow" d="M185 185 L465 185"/><text x="275" y="170">波長 λ = 4 m</text><path class="arrow" d="M135 330 L135 215"/><text x="145" y="270">振幅 2 cm</text>`,
  ),
  "sound-waveforms": wrap(
    "兩個聲音波形比較",
    "波形甲與乙使用相同時間軸；甲的振幅較大但週期相同，用來比較響度，不能由此宣稱聲速不同。",
    `<text x="32" y="38">聲音波形（同一時間尺度）</text><text x="35" y="135">甲</text><line class="arrow" x1="80" y1="140" x2="665" y2="140"/><path class="line" d="M80 140 Q120 65 160 140 T240 140 T320 140 T400 140 T480 140 T560 140 T640 140"/><text x="35" y="305">乙</text><line class="arrow" x1="80" y1="310" x2="665" y2="310"/><path class="line" d="M80 310 Q120 275 160 310 T240 310 T320 310 T400 310 T480 310 T560 310 T640 310"/><text x="570" y="365">時間 (ms)</text><text x="500" y="90" class="small">甲振幅較大</text><path class="arrow" d="M520 95 L470 115"/>`,
  ),
  "reflection-diagram": wrap(
    "平面鏡反射光路",
    "水平鏡面上有一條垂直虛線法線。入射線由左上射向交點，反射線由交點射向右上，入射角與反射角都標為四十度。",
    `<text x="32" y="38">平面鏡反射（角度由法線量起）</text><line class="line" x1="80" y1="315" x2="650" y2="315"/><line class="dash" x1="365" y1="75" x2="365" y2="380"/><text x="380" y="90">法線</text><path class="arrow" d="M120 90 L355 305"/><path class="arrow" d="M375 305 L610 90"/><text x="130" y="90">入射線</text><text x="545" y="90">反射線</text><path class="thin" d="M365 230 A75 75 0 0 0 310 264"/><path class="thin" d="M420 264 A75 75 0 0 0 365 230"/><text x="300" y="235">40°</text><text x="405" y="235">40°</text><text x="570" y="345">鏡面</text>`,
  ),
  "lens-ray-diagram": wrap(
    "凸透鏡成倒立實像光路",
    "主軸水平，凸透鏡在中央，左右各標焦點。物體在左側兩倍焦距外，兩條代表光線通過透鏡後在右側交會，形成倒立實像。",
    `<text x="32" y="38">凸透鏡光線圖（示意）</text><line class="line" x1="55" y1="230" x2="675" y2="230"/><path class="line" d="M365 70 Q325 230 365 390 Q405 230 365 70"/><circle cx="265" cy="230" r="5" fill="#111"/><circle cx="465" cy="230" r="5" fill="#111"/><text x="255" y="260">F</text><text x="455" y="260">F</text><path class="arrow" d="M120 230 L120 115"/><text x="82" y="105">物</text><path class="arrow" d="M120 115 L365 115 L560 300"/><path class="arrow" d="M120 115 L365 230 L560 300"/><path class="arrow" d="M560 230 L560 300"/><text x="570" y="315">倒立實像</text>`,
  ),
  "color-vision-diagram": wrap(
    "白光、物體反射與眼睛看見顏色",
    "白光箭頭射向紅色物體，圖中以文字標示物體主要反射紅光並吸收其他色光，反射光再進入眼睛；圖形不用顏色區分資訊。",
    `<text x="32" y="38">物體顏色來自進入眼睛的反射光</text><rect class="box" x="60" y="145" width="130" height="90"/><text x="92" y="195">白光光源</text><path class="arrow" d="M190 190 L320 190"/><text x="215" y="175" class="small">白光</text><rect class="box" x="320" y="120" width="130" height="140"/><text x="342" y="180">紅色物體</text><text x="338" y="210" class="small">反射紅光</text><text x="338" y="235" class="small">吸收其他色光</text><path class="arrow" d="M450 165 L565 115"/><text x="480" y="105" class="small">反射光</text><path class="line" d="M570 115 Q625 70 665 115 Q625 160 570 115"/><circle cx="625" cy="115" r="17" fill="#fff" stroke="#111" stroke-width="3"/><text x="570" y="205">只有進入眼睛的光</text><text x="570" y="230">能形成視覺</text>`,
  ),
  "motion-graphs": wrap(
    "位置時間圖",
    "橫軸為時間秒，縱軸為位置公尺。圖線先由零上升到十公尺，再維持水平，最後下降回四公尺，分別代表向正方向移動、靜止與向負方向移動。",
    `<text x="32" y="38">位置—時間圖</text><line class="arrow" x1="100" y1="350" x2="660" y2="350"/><line class="arrow" x1="100" y1="365" x2="100" y2="70"/><text x="595" y="385">時間 (s)</text><text x="25" y="85">位置 (m)</text><polyline class="line" points="100,350 270,135 430,135 610,265"/><text x="165" y="205">向正方向</text><text x="325" y="120">靜止</text><text x="500" y="190">向負方向</text><line class="dash" x1="270" y1="135" x2="270" y2="350"/><line class="dash" x1="430" y1="135" x2="430" y2="350"/>`,
  ),
  "velocity-time-graph": wrap(
    "速度時間圖與加速度",
    "橫軸為時間秒，縱軸為速度公尺每秒。速度由零線性增加到八，再維持八，最後線性降到零。",
    `<text x="32" y="38">速度—時間圖</text><line class="arrow" x1="100" y1="350" x2="660" y2="350"/><line class="arrow" x1="100" y1="365" x2="100" y2="70"/><text x="595" y="385">時間 (s)</text><text x="15" y="85">速度 (m/s)</text><polyline class="line" points="100,350 270,130 430,130 610,350"/><text x="145" y="215">正加速度</text><text x="320" y="115">加速度為 0</text><text x="480" y="215">負加速度</text>`,
  ),
  "force-diagram": wrap(
    "水平面上方塊的受力圖",
    "方塊受到向上的正向力 N、向下的重量 W、向右的推力 F 與向左的摩擦力 f。每支箭頭都從方塊出發並標示名稱。",
    `<text x="32" y="38">方塊受力圖（箭頭長度僅示意）</text><rect class="box" x="290" y="175" width="140" height="100"/><text x="345" y="230">物體</text><path class="arrow" d="M360 175 L360 70"/><text x="375" y="95">N</text><path class="arrow" d="M360 275 L360 375"/><text x="375" y="360">W</text><path class="arrow" d="M430 225 L580 225"/><text x="555" y="210">F</text><path class="arrow" d="M290 225 L140 225"/><text x="145" y="210">f</text><line class="line" x1="75" y1="277" x2="650" y2="277"/>`,
  ),
  "friction-circular-force": wrap(
    "車輛轉彎時的速度與向心合力",
    "俯視圓形道路，車位於圓周右側；速度箭頭沿切線向上，向心合力箭頭由車指向圓心，兩者互相垂直。",
    `<text x="32" y="38">等速轉彎的方向關係（俯視）</text><circle class="line" cx="330" cy="235" r="135"/><circle cx="330" cy="235" r="7" fill="#111"/><text x="305" y="265">圓心</text><rect class="box" x="445" y="205" width="80" height="55"/><text x="464" y="240">車</text><path class="arrow" d="M485 205 L485 85"/><text x="500" y="105">速度 v</text><path class="arrow" d="M445 232 L345 232"/><text x="365" y="215">向心合力</text>`,
  ),
  "pressure-diagram": wrap(
    "相同作用力下接觸面積不同的壓力比較",
    "兩個相同方塊都受向下六十牛頓作用力；甲以寬面接觸，面積零點零三平方公尺，乙以窄面接觸，面積零點零一平方公尺。",
    `<text x="32" y="38">相同作用力、不同接觸面積</text><text x="150" y="95">甲</text><rect class="box" x="90" y="195" width="200" height="95"/><path class="arrow" d="M190 80 L190 185"/><text x="205" y="125">60 N</text><text x="105" y="325">面積 0.03 m²</text><text x="510" y="95">乙</text><rect class="box" x="490" y="125" width="90" height="165"/><path class="arrow" d="M535 80 L535 120"/><text x="550" y="105">60 N</text><text x="465" y="325">面積 0.01 m²</text><line class="line" x1="45" y1="292" x2="665" y2="292"/>`,
  ),
  "buoyancy-diagram": wrap(
    "浸沒物體的浮力與重量",
    "方塊完全浸在液體中，向上箭頭標浮力 B，向下箭頭標重量 W；方塊下表面壓力箭頭比上表面長。",
    `<text x="32" y="38">浸沒物體受力與液體壓力</text><rect class="box" x="100" y="95" width="520" height="265"/><path class="thin" d="M100 145 Q230 125 360 145 T620 145"/><text x="115" y="125">液面</text><rect class="box" x="295" y="195" width="130" height="95"/><path class="arrow" d="M360 195 L360 80"/><text x="375" y="105">浮力 B</text><path class="arrow" d="M360 290 L360 385"/><text x="375" y="370">重量 W</text><path class="arrow" d="M270 215 L300 215"/><path class="arrow" d="M450 215 L420 215"/><path class="arrow" d="M245 275 L300 275"/><path class="arrow" d="M475 275 L420 275"/><text x="465" y="250" class="small">深處壓力較大</text>`,
  ),
  "lever-pulley-diagram": wrap(
    "槓桿的支點、施力與抗力",
    "水平槓桿由中間偏右的三角支點支撐，左端有向下施力四十牛頓，右端有向下抗力六十牛頓，兩側力臂分別標一點五公尺與一公尺。",
    `<text x="32" y="38">槓桿平衡示意圖</text><line class="line" x1="75" y1="225" x2="645" y2="225"/><path class="line" d="M420 225 L375 315 L465 315 Z"/><text x="395" y="345">支點</text><path class="arrow" d="M110 90 L110 215"/><text x="125" y="125">施力 40 N</text><path class="arrow" d="M610 90 L610 215"/><text x="485" y="125">抗力 60 N</text><path class="thin" d="M110 265 L420 265"/><path class="thin" d="M420 265 L610 265"/><text x="235" y="295">1.5 m</text><text x="500" y="295">1.0 m</text>`,
  ),
  "circuit-diagram": wrap(
    "安培計與伏特計的正確接法",
    "電池、開關、安培計與電阻串成主回路；伏特計跨接在電阻兩端。所有導線交接點以實心圓標示。",
    `<text x="32" y="38">量測電阻電流與電壓的電路</text><path class="line" d="M105 110 L105 315 L610 315 L610 110 L105 110"/><line class="line" x1="165" y1="90" x2="165" y2="130"/><line class="line" x1="185" y1="75" x2="185" y2="145"/><text x="135" y="65">電池</text><circle class="box" cx="305" cy="110" r="36"/><text x="294" y="117">A</text><rect class="box" x="425" y="90" width="95" height="40"/><text x="450" y="118">電阻</text><path class="line" d="M425 110 L425 220 L520 220 L520 110"/><circle class="box" cx="472" cy="220" r="36"/><text x="461" y="227">V</text><circle cx="425" cy="110" r="6" fill="#111"/><circle cx="520" cy="110" r="6" fill="#111"/><text x="270" y="170" class="small">安培計串聯</text><text x="515" y="240" class="small">伏特計並聯</text>`,
  ),
  "magnetic-field-diagram": wrap(
    "條形磁鐵外部磁場方向",
    "條形磁鐵左端為北極、右端為南極，外部磁力線箭頭由北極指向南極；越靠近兩極線條越密。",
    `<text x="32" y="38">條形磁鐵磁場（磁力線為模型）</text><rect class="box" x="260" y="175" width="200" height="75"/><line class="line" x1="360" y1="175" x2="360" y2="250"/><text x="305" y="220">N</text><text x="405" y="220">S</text><path class="arrow" d="M260 190 C110 60 610 60 460 190"/><path class="arrow" d="M260 235 C90 370 630 370 460 235"/><path class="arrow" d="M260 205 C170 125 550 125 460 205"/><path class="arrow" d="M260 220 C170 300 550 300 460 220"/><text x="470" y="155" class="small">磁鐵外部 N → S</text><text x="245" y="395" class="small">線條疏密表示相對強弱；磁力線不是物質線條</text>`,
  ),
  "electromagnetic-device": wrap(
    "發電機的能量與裝置關係",
    "手搖把手帶動線圈在磁場中轉動，線圈兩側有北南磁極，導線連接燈泡；箭頭標示力學能輸入與電能輸出。",
    `<text x="32" y="38">簡化發電機：力學能轉為電能</text><rect class="box" x="120" y="135" width="90" height="150"/><text x="153" y="215">N</text><rect class="box" x="480" y="135" width="90" height="150"/><text x="513" y="215">S</text><rect class="box" x="290" y="145" width="110" height="130"/><path class="arrow" d="M345 315 C245 315 245 105 345 105"/><text x="250" y="90">線圈轉動</text><path class="line" d="M290 210 L235 210 L235 350 L455 350 L455 210 L400 210"/><circle class="box" cx="345" cy="350" r="35"/><path class="thin" d="M325 350 Q345 320 365 350 Q345 380 325 350"/><text x="385" y="390">燈泡（電能輸出）</text><path class="arrow" d="M80 330 L205 330"/><text x="35" y="310">手搖力學能</text>`,
  ),
};

const TECHNICAL_METADATA = {
  "laboratory-setup": {
    controlledVariables: ["同一試管與裝液量", "熱源位於液面下方", "管口始終朝向無人處"],
  },
  "wave-graph": {
    axes: ["橫軸：位置 x（m）", "縱軸：位移 y（cm）"],
    significantFigures: "圖示讀值以整數呈現：波長 4 m、振幅 2 cm。",
    controlledVariables: ["同一時間截面", "同一條繩與傳播介質"],
    dataSource: "原創示意數據；依波長 4 m、振幅 2 cm 的正弦波關係繪製。",
  },
  "sound-waveforms": {
    axes: ["橫軸：時間 t（ms）", "縱軸：相對位移（共用任意尺度）"],
    significantFigures: "振幅只作相對比較，不提供可外推的絕對數值。",
    controlledVariables: ["相同時間尺度", "相同週期與介質", "僅改變相對振幅"],
    dataSource: "原創示意波形；甲、乙週期相同，甲振幅較大。",
  },
  "reflection-diagram": {
    controlledVariables: ["光線位於同一均勻介質", "鏡面保持水平", "入射角與反射角都由法線量起"],
  },
  "lens-ray-diagram": {
    controlledVariables: ["同一薄凸透鏡與焦距", "採近軸光線模型", "物體位於兩倍焦距外"],
  },
  "color-vision-diagram": {
    controlledVariables: ["使用白光照明", "同一物體表面", "只追蹤進入眼睛的反射光"],
  },
  "motion-graphs": {
    axes: ["橫軸：時間 t（s）", "縱軸：位置 x（m）"],
    significantFigures: "折線只呈現斜率正負與零，不提供可計算速率的刻度值。",
    controlledVariables: ["同一物體", "同一位置原點與正方向", "時間連續增加"],
    dataSource: "原創分段位置—時間示意資料：正斜率、零斜率、負斜率各一段。",
  },
  "velocity-time-graph": {
    axes: ["橫軸：時間 t（s）", "縱軸：速度 v（m/s）"],
    significantFigures: "圖示最高速度標為 8 m/s；其餘只判讀斜率與區段。",
    controlledVariables: ["同一物體", "同一速度正方向", "各區段採等加速度或等速度模型"],
    dataSource: "原創分段速度—時間示意資料：加速、等速、減速各一段。",
  },
  "force-diagram": {
    controlledVariables: ["物體置於水平面", "只畫作用在物體上的力", "箭頭長度僅示意"],
  },
  "friction-circular-force": {
    controlledVariables: ["俯視水平圓形道路", "車速大小不變", "合力只標示向心方向"],
  },
  "pressure-diagram": {
    controlledVariables: ["兩物體所受作用力皆為 60 N", "物體材質相同", "只改變接觸面積"],
  },
  "buoyancy-diagram": {
    controlledVariables: ["同一物體完全浸沒", "同一靜止液體", "比較同一物體上下表面深度"],
  },
  "lever-pulley-diagram": {
    controlledVariables: ["槓桿視為剛體", "支點位置固定", "力皆垂直作用於槓桿"],
  },
  "circuit-diagram": {
    controlledVariables: ["同一電池與電阻", "安培計串聯", "伏特計並聯且導線節點固定"],
  },
  "magnetic-field-diagram": {
    controlledVariables: ["同一條形磁鐵", "磁鐵外部磁力線方向由 N 極指向 S 極", "線條疏密只表示相對強弱"],
  },
  "electromagnetic-device": {
    controlledVariables: ["線圈在固定 N、S 磁場中轉動", "導線連接同一燈泡", "只追蹤力學能轉為電能"],
  },
};

const META = [
  ["PHYCHM_R4_U18", "laboratory-setup", "science-diagram", "加熱試管的安全裝置", ["試管", "管口", "夾具", "熱源", "護目鏡"], []],
  ["PHYCHM_R4_U21", "wave-graph", "graph", "繩波的波長與振幅", ["波峰", "波長", "振幅", "位置", "位移"], ["m", "cm"]],
  ["PHYCHM_R4_U22", "sound-waveforms", "graph", "相同頻率、不同振幅的聲音波形", ["甲", "乙", "時間", "振幅"], ["ms"]],
  ["PHYCHM_R4_U23", "reflection-diagram", "science-diagram", "平面鏡的入射線、法線與反射線", ["鏡面", "法線", "入射線", "反射線", "40°"], ["°"]],
  ["PHYCHM_R4_U24", "lens-ray-diagram", "science-diagram", "凸透鏡形成倒立實像的光線圖", ["主軸", "凸透鏡", "焦點", "物", "實像"], []],
  ["PHYCHM_R4_U25", "color-vision-diagram", "science-diagram", "照明光、物體反射與眼睛成像", ["白光光源", "紅色物體", "反射光", "眼睛"], []],
  ["PHYCHM_R4_U27", "motion-graphs", "graph", "包含移動、靜止與折返的位置時間圖", ["位置", "時間", "移動", "靜止", "折返"], ["m", "s"]],
  ["PHYCHM_R4_U28", "velocity-time-graph", "graph", "加速、等速與減速的速度時間圖", ["速度", "時間", "正加速度", "零加速度", "負加速度"], ["m/s", "s"]],
  ["PHYCHM_R4_U29", "force-diagram", "science-diagram", "水平面上物體的四力受力圖", ["正向力", "重量", "推力", "摩擦力"], ["N"]],
  ["PHYCHM_R4_U30", "friction-circular-force", "science-diagram", "轉彎車輛的切線速度與向心合力", ["圓心", "車", "速度", "向心合力"], []],
  ["PHYCHM_R4_U31", "pressure-diagram", "science-diagram", "相同作用力在不同接觸面積上的壓力比較", ["甲", "乙", "作用力", "接觸面積"], ["N", "m²"]],
  ["PHYCHM_R4_U32", "buoyancy-diagram", "science-diagram", "浸沒方塊的浮力、重量與壓力差", ["液面", "浮力", "重量", "壓力"], ["N"]],
  ["PHYCHM_R4_U34", "lever-pulley-diagram", "science-diagram", "槓桿平衡中的支點、施力與抗力", ["支點", "施力", "抗力", "力臂"], ["N", "m"]],
  ["PHYCHM_R4_U36", "circuit-diagram", "science-diagram", "安培計串聯與伏特計並聯的量測電路", ["電池", "安培計", "伏特計", "電阻", "節點"], ["A", "V", "Ω"]],
  ["PHYCHM_R4_U38", "magnetic-field-diagram", "science-diagram", "條形磁鐵外部磁場方向與疏密", ["N 極", "S 極", "磁力線", "方向"], []],
  ["PHYCHM_R4_U39", "electromagnetic-device", "science-diagram", "線圈在磁場中轉動的簡化發電機", ["N 極", "S 極", "線圈", "燈泡", "能量方向"], []],
];

export const PHYSICS_CHEMISTRY_ASSET_SOURCES = META.map(([unitId, key, type, caption, labels, units], index) => ({
  id: `PHYCHM_R4_ASSET_${String(index + 1).padStart(3, "0")}`,
  unitId,
  key,
  type,
  fileName: `${key}.svg`,
  svg: SVG[key],
  caption,
  altText: `${caption}；圖內以文字、線型、箭頭與位置共同標示，不需依靠顏色辨認。`,
  longDescription: `${caption}。所有必要元件與方向均以黑色線條和文字標籤呈現，圖形為原創示意圖且未依真實尺寸比例繪製；詳細數據可由替代表格讀取。`,
  dataFallback: {
    summary: `${caption}的文字資料替代`,
    columns: ["項目", "圖中資訊"],
    rows: labels.map((label) => [label, `圖上明確標示：${label}`]),
  },
  technical: {
    drawingMode: "schematic",
    labels,
    units,
    scale: "非依比例；只呈現題目所需相對位置與方向",
    orientation: "橫式 720×420 viewBox",
    legend: "實線表示元件或主要路徑，虛線表示法線或輔助線，箭頭表示方向。",
    ...TECHNICAL_METADATA[key],
  },
}));
