const HEAD = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 420" role="img"><defs><marker id="arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M 0 0 L 10 5 L 0 10 z" fill="#111"/></marker><style>text{font-family:Arial,'Noto Sans TC',sans-serif;fill:#111;font-size:18px}.small{font-size:15px}.line{fill:none;stroke:#111;stroke-width:3}.thin{fill:none;stroke:#111;stroke-width:2}.dash{fill:none;stroke:#111;stroke-width:2;stroke-dasharray:8 6}.arrow{fill:none;stroke:#111;stroke-width:3;marker-end:url(#arrow)}.box{fill:#fff;stroke:#111;stroke-width:3}</style></defs>`;

function wrap(title, description, body) {
  return `${HEAD}<title>${title}</title><desc>${description}</desc><rect x="1" y="1" width="718" height="418" fill="#fff" stroke="#111" stroke-width="2"/>${body}</svg>\n`;
}

const SVG = {
  "laboratory-setup": wrap(
    "加熱試管安全裝置",
    "試管由夾具固定，封閉端較低、管口斜向右上並朝向無人處。灰色液體不超過試管容量三分之一，酒精燈位在液體部分下方；操作者戴護目鏡並站在封閉端側面，視線不在管口延長線上。",
    `<text x="32" y="38">加熱試管安全示意圖（非依比例）</text><line class="line" x1="70" y1="335" x2="650" y2="335"/><line class="line" x1="205" y1="320" x2="250" y2="105"/><path class="line" d="M270 195 Q252 191 257 175 L500 105 M270 195 L505 122"/><path d="M257 175 Q252 191 270 195 L354 170 L274 170 Z" fill="#ddd" stroke="#111" stroke-width="2"/><line class="thin" x1="500" y1="105" x2="505" y2="122"/><path class="line" d="M225 155 L307 161 M225 177 L322 171"/><text x="185" y="205" class="small">試管夾</text><text x="455" y="88" class="small">管口朝無人處</text><path class="arrow" d="M520 92 L500 110"/><text x="300" y="215" class="small">液體不超過試管容量 1/3</text><path class="arrow" d="M390 205 L330 176"/><rect class="box" x="275" y="275" width="72" height="55"/><path class="thin" d="M294 275 Q311 218 328 275"/><text x="250" y="365" class="small">熱源對準液體部分</text><circle class="box" cx="115" cy="105" r="38"/><ellipse class="thin" cx="102" cy="101" rx="14" ry="10"/><ellipse class="thin" cx="130" cy="101" rx="14" ry="10"/><path class="thin" d="M88 97 Q75 102 78 112 M144 97 Q157 102 154 112"/><path class="line" d="M87 144 L62 255 M143 144 L165 255 M96 255 L72 330 M140 255 L165 330"/><text x="28" y="65" class="small">護目鏡</text><path class="arrow" d="M82 68 L99 91"/><text x="30" y="385" class="small">人站側面，避開管口延長線</text>`,
  ),
  "wave-graph": wrap(
    "繩波的空間波形",
    "橫軸表示位置 x，縱軸表示相對平衡線的位移 y。虛線通過兩個相鄰波峰，兩峰的水平距離以波長 λ 標示；平衡線到波峰的垂直距離以振幅 A 標示。此圖只表示相對幾何關係，不提供數值刻度。",
    `<text x="32" y="38">繩波空間圖（示意）</text><line class="arrow" x1="90" y1="230" x2="675" y2="230"/><line class="arrow" x1="100" y1="365" x2="100" y2="70"/><text x="610" y="265">位置 x</text><text x="25" y="85">位移 y</text><path class="line" d="M140 230 Q200 110 260 230 T380 230 T500 230 T620 230"/><line class="dash" x1="200" y1="110" x2="200" y2="230"/><line class="dash" x1="440" y1="110" x2="440" y2="230"/><path class="arrow" d="M210 90 L430 90"/><text x="295" y="78">波長 λ</text><path class="arrow" d="M125 230 L125 115"/><text x="110" y="105">A（振幅）</text>`,
  ),
  "sound-waveforms": wrap(
    "兩個聲音波形比較",
    "波形甲與乙使用相同時間軸；甲的振幅較大但週期相同，用來比較響度，不能由此宣稱聲速不同。",
    `<text x="32" y="38">聲音波形（同一時間尺度）</text><text x="35" y="135">甲</text><line class="arrow" x1="80" y1="140" x2="665" y2="140"/><path class="line" d="M80 140 Q120 65 160 140 T240 140 T320 140 T400 140 T480 140 T560 140 T640 140"/><text x="35" y="305">乙</text><line class="arrow" x1="80" y1="310" x2="665" y2="310"/><path class="line" d="M80 310 Q120 275 160 310 T240 310 T320 310 T400 310 T480 310 T560 310 T640 310"/><text x="570" y="365">時間 (ms)</text><text x="500" y="90" class="small">甲振幅較大</text><path class="arrow" d="M520 95 L470 115"/>`,
  ),
  "reflection-diagram": wrap(
    "平面鏡反射光路",
    "水平鏡面上有一條垂直虛線法線。入射線由左上射向交點，反射線由交點射向右上，入射角與反射角都標為四十度。",
    `<text x="32" y="38">平面鏡反射（角度由法線量起）</text><line class="line" x1="80" y1="315" x2="650" y2="315"/><line class="dash" x1="365" y1="75" x2="365" y2="380"/><text x="380" y="90">法線</text><path class="arrow" d="M176 90 L365 315"/><path class="arrow" d="M365 315 L554 90"/><text x="135" y="88">入射線</text><text x="535" y="88">反射線</text><path class="thin" d="M365 240 A75 75 0 0 0 317 258"/><path class="thin" d="M413 258 A75 75 0 0 0 365 240"/><text x="300" y="235">40°</text><text x="407" y="235">40°</text><text x="570" y="345">鏡面</text>`,
  ),
  "lens-ray-diagram": wrap(
    "凸透鏡成倒立實像光路",
    "主軸水平，薄凸透鏡位於中央；左右焦點 F 與兩倍焦距 2F 都有標示。物體位於左側 2F 外，物頂發出的平行主軸光線折射後通過右焦點，通過光心的光線保持直線，兩線在右側 F 與 2F 之間交會，形成較小的倒立實像。",
    `<text x="32" y="38">凸透鏡光線圖（示意）</text><line class="line" x1="55" y1="230" x2="675" y2="230"/><path class="line" d="M365 70 Q325 230 365 390 Q405 230 365 70"/><circle cx="265" cy="230" r="5" fill="#111"/><circle cx="465" cy="230" r="5" fill="#111"/><line class="thin" x1="165" y1="222" x2="165" y2="238"/><line class="thin" x1="565" y1="222" x2="565" y2="238"/><text x="255" y="260">F</text><text x="455" y="260">F</text><text x="150" y="260">2F</text><text x="550" y="260">2F</text><path class="arrow" d="M120 230 L120 115"/><text x="82" y="105">物</text><path class="line" d="M120 115 L365 115 L535 310"/><path class="line" d="M120 115 L365 230 L535 310"/><path class="arrow" d="M220 115 L300 115"/><path class="arrow" d="M195 150 L270 185"/><path class="arrow" d="M535 230 L535 310"/><text x="548" y="325">倒立實像</text>`,
  ),
  "color-vision-diagram": wrap(
    "白光、物體反射與眼睛看見顏色",
    "白光箭頭射向紅色物體，圖中以文字標示物體主要反射紅光並吸收其他色光，反射光再進入眼睛；圖形不用顏色區分資訊。",
    `<text x="32" y="38">物體顏色來自進入眼睛的反射光</text><rect class="box" x="50" y="150" width="130" height="90"/><text x="82" y="200">白光光源</text><path class="arrow" d="M180 195 L300 195"/><text x="215" y="180" class="small">白光</text><rect class="box" x="300" y="125" width="150" height="140"/><text x="330" y="180">紅色物體</text><text x="320" y="215" class="small">反射紅光</text><text x="320" y="240" class="small">吸收其他色光</text><path class="arrow" d="M450 165 L555 125"/><text x="470" y="112" class="small">反射紅光</text><path class="line" d="M560 125 Q610 82 660 125 Q610 168 560 125"/><circle cx="610" cy="125" r="17" fill="#fff" stroke="#111" stroke-width="3"/><text x="510" y="215" class="small">紅光進入眼睛</text><text x="510" y="240" class="small">形成紅色視覺</text>`,
  ),
  "motion-graphs": wrap(
    "位置時間圖",
    "橫軸為時間秒，縱軸為位置公尺。折線第一段斜率為正，表示物體向正方向移動；第二段水平，表示位置不變而靜止；第三段斜率為負，表示物體向負方向移動。圖中不提供可計算速率的數值刻度。",
    `<text x="32" y="38">位置—時間圖（示意）</text><line class="arrow" x1="100" y1="350" x2="660" y2="350"/><line class="arrow" x1="100" y1="365" x2="100" y2="70"/><text x="595" y="385">時間 (s)</text><text x="25" y="85">位置 (m)</text><polyline class="line" points="100,350 270,135 430,135 610,265"/><text x="165" y="205">向正方向</text><text x="325" y="120">靜止</text><text x="500" y="190">向負方向</text><line class="dash" x1="270" y1="135" x2="270" y2="350"/><line class="dash" x1="430" y1="135" x2="430" y2="350"/>`,
  ),
  "velocity-time-graph": wrap(
    "速度時間圖與加速度",
    "橫軸為時間秒，縱軸為速度公尺每秒。折線先上升、再水平、最後下降回速度零線，依序表示正加速度、零加速度與負加速度；圖中不提供可計算加速度的數值刻度。",
    `<text x="32" y="38">速度—時間圖（示意）</text><line class="arrow" x1="100" y1="350" x2="660" y2="350"/><line class="arrow" x1="100" y1="365" x2="100" y2="70"/><text x="595" y="385">時間 (s)</text><text x="15" y="85">速度 (m/s)</text><polyline class="line" points="100,350 270,130 430,130 610,350"/><text x="145" y="215">正加速度</text><text x="320" y="115">加速度為 0</text><text x="480" y="215">負加速度</text>`,
  ),
  "force-diagram": wrap(
    "水平面上方塊的受力圖",
    "方塊受到向上的正向力 N、向下的重量 W、向右的推力 F 與向左的摩擦力 f。四支黑色箭頭都從方塊邊緣沿作用方向伸出；箭頭長度只供辨認方向，不代表力的大小。",
    `<text x="32" y="38">方塊受力圖（箭頭長度僅示意）</text><rect class="box" x="290" y="175" width="140" height="100"/><text x="345" y="230">物體</text><path class="arrow" d="M360 175 L360 70"/><text x="375" y="92">N 正向力</text><path class="arrow" d="M360 275 L360 375"/><text x="375" y="360">W 重量</text><path class="arrow" d="M430 225 L580 225"/><text x="520" y="205">F 推力</text><path class="arrow" d="M290 225 L140 225"/><text x="80" y="205">f 摩擦力</text><line class="line" x1="75" y1="277" x2="650" y2="277"/>`,
  ),
  "friction-circular-force": wrap(
    "車輛轉彎時的速度與向心合力",
    "俯視圓形道路，車位於圓周右側；速度箭頭沿切線向上，向心合力箭頭由車指向圓心，兩者互相垂直。",
    `<text x="32" y="38">等速轉彎的方向關係（俯視）</text><circle class="line" cx="330" cy="235" r="135"/><circle cx="330" cy="235" r="7" fill="#111"/><text x="305" y="265">圓心</text><rect class="box" x="445" y="205" width="80" height="55"/><text x="464" y="240">車</text><path class="arrow" d="M485 205 L485 85"/><text x="500" y="105">速度 v</text><path class="arrow" d="M445 232 L345 232"/><text x="365" y="215">向心合力</text>`,
  ),
  "pressure-diagram": wrap(
    "相同作用力下接觸面積不同的壓力比較",
    "兩個相同方塊都受向下六十牛頓作用力；甲以寬面接觸，面積零點零三平方公尺，乙以窄面接觸，面積零點零一平方公尺。",
    `<text x="32" y="38">相同作用力、不同接觸面積</text><text x="150" y="95">甲</text><rect class="box" x="100" y="202" width="180" height="90"/><path class="arrow" d="M190 80 L190 192"/><text x="205" y="125">60 N</text><text x="105" y="325">面積 0.03 m²</text><text x="510" y="95">乙</text><rect class="box" x="500" y="112" width="90" height="180"/><path class="arrow" d="M545 65 L545 107"/><text x="560" y="90">60 N</text><text x="465" y="325">面積 0.01 m²</text><line class="line" x1="45" y1="292" x2="665" y2="292"/>`,
  ),
  "buoyancy-diagram": wrap(
    "浸沒物體的浮力與重量",
    "方塊完全浸在液體中。上表面有兩支較短的向下壓力箭頭，下表面有兩支較長的向上壓力箭頭；左右同深度的水平壓力互相抵消，因此液體壓力的垂直合力為向上的浮力 B。另以向下箭頭標示重量 W。",
    `<text x="32" y="38">浸沒物體受力與液體壓力</text><rect class="box" x="70" y="80" width="580" height="300"/><path class="thin" d="M70 130 Q215 112 360 130 T650 130"/><text x="85" y="108">液面</text><rect class="box" x="285" y="195" width="150" height="90"/><path class="arrow" d="M315 155 L315 191"/><path class="arrow" d="M405 155 L405 191"/><text x="260" y="150" class="small">上表面壓力（較小）</text><path class="arrow" d="M315 335 L315 289"/><path class="arrow" d="M405 335 L405 289"/><text x="260" y="355" class="small">下表面壓力（較大）</text><path class="arrow" d="M245 220 L281 220"/><path class="arrow" d="M475 220 L439 220"/><path class="arrow" d="M225 260 L281 260"/><path class="arrow" d="M495 260 L439 260"/><text x="82" y="235" class="small">同深度水平分量</text><text x="82" y="258" class="small">大小相等、方向相反</text><path class="arrow" d="M555 285 L555 145"/><text x="570" y="170">浮力 B</text><text x="570" y="192" class="small">壓力的垂直合力</text><path class="arrow" d="M360 240 L360 330"/><text x="375" y="325">重量 W</text>`,
  ),
  "lever-pulley-diagram": wrap(
    "槓桿的支點、施力與抗力",
    "水平槓桿由中間偏右的三角支點支撐，左端有向下施力四十牛頓，右端有向下抗力六十牛頓，兩側力臂分別標一點五公尺與一公尺。",
    `<text x="32" y="38">槓桿平衡示意圖</text><line class="line" x1="75" y1="225" x2="645" y2="225"/><path class="line" d="M410 225 L365 315 L455 315 Z"/><text x="385" y="345">支點</text><path class="arrow" d="M110 90 L110 215"/><text x="125" y="125">施力 40 N</text><path class="arrow" d="M610 90 L610 215"/><text x="485" y="125">抗力 60 N</text><path class="thin" d="M110 265 L610 265 M110 255 L110 275 M410 255 L410 275 M610 255 L610 275"/><text x="235" y="295">1.5 m</text><text x="490" y="295">1.0 m</text>`,
  ),
  "circuit-diagram": wrap(
    "安培計與伏特計的正確接法",
    "電池長線端為正極、短線端為負極。傳統電流由正極沿上方導線向右，依序通過安培計與電阻，再由下方導線回到負極；安培計正端接近電池正極。伏特計跨接電阻兩端，正端接電阻的高電位左端、負端接右端；四個分接點以實心圓標示。",
    `<text x="32" y="38">量測電阻電流與電壓的電路</text><path class="line" d="M105 110 L165 110 M185 110 L269 110 M341 110 L425 110 M520 110 L610 110 L610 315 L105 315 L105 110"/><line class="line" x1="165" y1="90" x2="165" y2="130"/><line class="line" x1="185" y1="75" x2="185" y2="145"/><text x="135" y="65">電池</text><text x="156" y="82">−</text><text x="182" y="68">＋</text><path class="arrow" d="M205 110 L250 110"/><text x="215" y="95" class="small">I</text><circle class="box" cx="305" cy="110" r="36"/><text x="294" y="117">A</text><text x="268" y="82" class="small">＋</text><text x="332" y="82" class="small">−</text><rect class="box" x="425" y="90" width="95" height="40"/><text x="450" y="118">電阻</text><path class="line" d="M425 110 L425 220 L436 220 M508 220 L520 220 L520 110"/><circle class="box" cx="472" cy="220" r="36"/><text x="461" y="227">V</text><text x="420" y="205" class="small">＋</text><text x="512" y="205" class="small">−</text><circle cx="425" cy="110" r="6" fill="#111"/><circle cx="520" cy="110" r="6" fill="#111"/><text x="270" y="170" class="small">安培計串聯</text><text x="515" y="240" class="small">伏特計並聯</text>`,
  ),
  "magnetic-field-diagram": wrap(
    "條形磁鐵外部磁場方向",
    "條形磁鐵左端為北極、右端為南極，外部磁力線箭頭由北極指向南極；越靠近兩極線條越密。",
    `<text x="32" y="38">條形磁鐵磁場（磁力線為模型）</text><rect class="box" x="260" y="175" width="200" height="75"/><line class="line" x1="360" y1="175" x2="360" y2="250"/><text x="305" y="220">N</text><text x="405" y="220">S</text><path class="arrow" d="M260 190 C110 60 610 60 460 190"/><path class="arrow" d="M260 235 C90 370 630 370 460 235"/><path class="arrow" d="M260 205 C170 125 550 125 460 205"/><path class="arrow" d="M260 220 C170 300 550 300 460 220"/><text x="470" y="155" class="small">磁鐵外部 N → S</text><text x="245" y="395" class="small">線條疏密表示相對強弱；磁力線不是物質線條</text>`,
  ),
  "electromagnetic-device": wrap(
    "發電機的能量與裝置關係",
    "北極在左、南極在右，磁場中的矩形線圈由上方手搖曲柄帶動，繞中央轉軸旋轉。線圈兩端接至兩個滑環，固定電刷再以封閉導線連接燈泡；線圈轉動時輸出交流電，兩端極性隨轉動週期交替。能量由手搖機械能轉為電能，最後由燈泡轉為光與內能。",
    `<text x="32" y="38">簡化發電機：機械能轉為電能</text><rect class="box" x="70" y="120" width="130" height="170"/><text x="125" y="210">N</text><rect class="box" x="520" y="120" width="130" height="170"/><text x="575" y="210">S</text><path class="line" d="M348 275 L290 275 L290 135 L430 135 L430 275 L372 275"/><text x="325" y="210">轉動線圈</text><line class="dash" x1="360" y1="70" x2="360" y2="300"/><path class="line" d="M360 70 L315 70"/><circle class="box" cx="300" cy="70" r="10"/><text x="205" y="118" class="small">手搖曲柄（機械能輸入）</text><path class="arrow" d="M405 95 A65 65 0 0 0 315 95"/><line class="thin" x1="348" y1="275" x2="348" y2="297"/><line class="thin" x1="372" y1="275" x2="372" y2="314"/><ellipse class="thin" cx="348" cy="305" rx="18" ry="8"/><ellipse class="thin" cx="372" cy="322" rx="18" ry="8"/><line class="line" x1="290" y1="305" x2="330" y2="305"/><line class="line" x1="390" y1="322" x2="430" y2="322"/><path class="line" d="M290 305 L250 305 L250 365 L325 365 M395 365 L470 365 L470 322 L430 322"/><circle class="box" cx="360" cy="365" r="35"/><path class="thin" d="M340 365 Q360 335 380 365 Q360 395 340 365"/><text x="445" y="300" class="small">滑環與固定電刷</text><text x="425" y="395" class="small">燈泡：光與內能輸出</text><text x="455" y="345" class="small">交流，極性交替</text>`,
  ),
};

const TECHNICAL_METADATA = {
  "laboratory-setup": {
    controlledVariables: ["同一試管與裝液量", "熱源位於液面下方", "管口始終朝向無人處"],
  },
  "wave-graph": {
    axes: ["橫軸：位置 x（無數值刻度）", "縱軸：位移 y（無數值刻度）"],
    significantFigures: "不提供數值讀值；只標示波長 λ 與振幅 A 的幾何定義。",
    controlledVariables: ["同一時間截面", "同一條繩與傳播介質"],
    dataSource: "原創示意波形；不對應任一刺激表格的特定數值。",
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
    significantFigures: "折線只呈現斜率為正、零、負，不提供可計算速率的刻度值。",
    controlledVariables: ["同一物體", "同一位置原點與正方向", "時間連續增加"],
    dataSource: "原創分段位置—時間示意資料：正斜率、零斜率、負斜率各一段。",
  },
  "velocity-time-graph": {
    axes: ["橫軸：時間 t（s）", "縱軸：速度 v（m/s）"],
    significantFigures: "折線只呈現斜率為正、零、負，不提供可計算加速度的刻度值。",
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
    controlledVariables: ["同一電池與電阻", "安培計串聯且正端接近電池正極", "伏特計並聯且正端接電阻高電位端"],
  },
  "magnetic-field-diagram": {
    controlledVariables: ["同一條形磁鐵", "磁鐵外部磁力線方向由 N 極指向 S 極", "線條疏密只表示相對強弱"],
  },
  "electromagnetic-device": {
    controlledVariables: ["線圈在固定 N、S 磁場中轉動", "滑環與電刷維持燈泡閉合回路", "輸出為極性交替的交流電"],
  },
};

const TEXT_ALTERNATIVES = {
  "laboratory-setup": {
    altText: "加熱試管斜向右上，管口朝無人處；液量、熱源、護目鏡與站位都有文字標示。",
    rows: [
      ["試管方向", "封閉端在左下、管口在右上，管口朝向無人處。"],
      ["裝液量", "灰色液體位於封閉端，未超過試管容量三分之一。"],
      ["熱源", "酒精燈位在液體部分下方。"],
      ["操作者", "戴護目鏡並站在封閉端側面，視線避開管口延長線。"],
    ],
  },
  "wave-graph": {
    altText: "繩波空間示意圖，以位置與位移軸標出相鄰波峰間的波長及平衡線到波峰的振幅。",
    rows: [
      ["座標", "橫軸為位置 x，縱軸為相對平衡線的位移 y；兩軸無數值刻度。"],
      ["波長 λ", "兩條虛線通過相鄰波峰，λ 為兩峰間的水平距離。"],
      ["振幅 A", "A 為平衡線到波峰的垂直距離。"],
    ],
  },
  "sound-waveforms": {
    altText: "甲乙兩個聲音波形共用毫秒時間軸，週期相同，甲的相對振幅明顯大於乙。",
    rows: [
      ["時間軸", "甲、乙共用由左向右增加的時間軸，單位為 ms。"],
      ["週期", "甲、乙相鄰波峰的水平距離相同，所以週期相同。"],
      ["相對振幅", "甲的波峰、波谷離平衡線較遠，振幅大於乙。"],
      ["判讀限制", "圖只比較相對振幅與週期，不提供絕對位移或聲速。"],
    ],
  },
  "reflection-diagram": {
    altText: "水平鏡面與垂直法線交於一點，入射線及反射線分居兩側，和法線都夾四十度。",
    rows: [
      ["鏡面與法線", "鏡面水平；法線以垂直虛線通過入射點。"],
      ["入射線", "光由左上射向鏡面入射點，入射角由法線量起為 40°。"],
      ["反射線", "光由入射點射向右上，反射角由法線量起為 40°。"],
      ["關係", "入射角等於反射角。"],
    ],
  },
  "lens-ray-diagram": {
    altText: "物體位於凸透鏡左側兩倍焦距外，兩條代表光線在右側交會成較小倒立實像。",
    rows: [
      ["基準", "凸透鏡位於中央，主軸水平，左右都標示 F 與 2F。"],
      ["物體位置", "物體位於左側 2F 外。"],
      ["平行光線", "物頂平行主軸的光線通過透鏡後折向右焦點 F。"],
      ["光心光線", "物頂通過光心的光線保持直線。"],
      ["成像", "兩線在右側 F 與 2F 之間交會，形成較小的倒立實像。"],
    ],
  },
  "color-vision-diagram": {
    altText: "白光照向紅色物體，物體吸收其他色光並反射紅光，紅光進入眼睛形成紅色視覺。",
    rows: [
      ["照明", "白光由左側光源射向物體。"],
      ["物體作用", "紅色物體反射紅光並吸收其他色光。"],
      ["進入眼睛的光", "由物體反射的紅光沿箭頭進入右側眼睛。"],
      ["視覺結果", "進入眼睛的紅光形成紅色視覺；圖不靠實際顏色傳遞資訊。"],
    ],
  },
  "motion-graphs": {
    altText: "位置時間折線先上升、再水平、最後下降，依序表示向正方向移動、靜止與向負方向移動。",
    rows: [
      ["座標", "橫軸為時間 t（s），縱軸為位置 x（m）；無數值刻度。"],
      ["第一段", "位置隨時間增加，斜率為正，表示向正方向移動。"],
      ["第二段", "位置保持不變，斜率為零，表示靜止。"],
      ["第三段", "位置隨時間減少，斜率為負，表示向負方向移動。"],
    ],
  },
  "velocity-time-graph": {
    altText: "速度時間折線先上升、再水平、最後下降回零，依序表示正、零與負加速度。",
    rows: [
      ["座標", "橫軸為時間 t（s），縱軸為速度 v（m/s）；無數值刻度。"],
      ["第一段", "速度隨時間線性增加，斜率為正，表示正加速度。"],
      ["第二段", "速度保持不變，斜率為零，表示加速度為 0。"],
      ["第三段", "速度隨時間線性下降到 0，斜率為負，表示負加速度。"],
    ],
  },
  "force-diagram": {
    altText: "水平面方塊受正向力向上、重量向下、推力向右、摩擦力向左，四力都有名稱與符號。",
    rows: [
      ["正向力 N", "由方塊向上。"],
      ["重量 W", "由方塊向下。"],
      ["推力 F", "由方塊向右。"],
      ["摩擦力 f", "由方塊向左。"],
      ["箭頭尺度", "箭頭長度只表示方向，不代表力的大小。"],
    ],
  },
  "friction-circular-force": {
    altText: "俯視車輛位於圓周右側，速度沿切線向上，向心合力由車指向左方圓心。",
    rows: [
      ["視角", "俯視水平圓形道路，車位於圓周右側。"],
      ["速度 v", "速度箭頭沿圓的切線向上。"],
      ["向心合力", "合力箭頭由車向左指向圓心。"],
      ["方向關係", "速度與向心合力互相垂直。"],
    ],
  },
  "pressure-diagram": {
    altText: "甲乙受力都為六十牛頓；甲接觸面積零點零三平方公尺，乙為零點零一平方公尺。",
    rows: [
      ["共同作用力", "甲、乙都受到向下 60 N 的作用力。"],
      ["甲", "寬面接觸水平面，接觸面積為 0.03 m²。"],
      ["乙", "窄面接觸水平面，接觸面積為 0.01 m²。"],
      ["比較", "作用力相同時，乙的接觸面積較小。"],
    ],
  },
  "buoyancy-diagram": {
    altText: "浸沒方塊上表面壓力較小、下表面壓力較大；水平分量抵消，浮力向上、重量向下。",
    rows: [
      ["物體狀態", "方塊完全浸沒在靜止液體中。"],
      ["上下表面壓力", "上表面有較短向下箭頭；下表面有較長向上箭頭。"],
      ["水平分量", "左右同深度的壓力大小相等、方向相反，彼此抵消。"],
      ["浮力 B", "液體壓力的垂直合力向上。"],
      ["重量 W", "重量箭頭由方塊中央向下。"],
    ],
  },
  "lever-pulley-diagram": {
    altText: "槓桿左側四十牛頓力臂一點五公尺，右側六十牛頓力臂一公尺，支點固定。",
    rows: [
      ["支點", "位於槓桿中央偏右，位置固定。"],
      ["左側施力", "向下 40 N，至支點的垂直力臂為 1.5 m。"],
      ["右側抗力", "向下 60 N，至支點的垂直力臂為 1.0 m。"],
      ["力矩", "左側 40 N×1.5 m 與右側 60 N×1.0 m 都為 60 N·m。"],
    ],
  },
  "circuit-diagram": {
    altText: "電池、安培計與電阻串聯，伏特計跨接電阻；電池與兩電表正負端及傳統電流方向均標示。",
    rows: [
      ["電池極性", "長線為正極、短線為負極。"],
      ["主回路", "傳統電流由正極向右，依序通過安培計與電阻，再沿下方導線回負極。"],
      ["安培計 A", "串聯在主回路中，正端接近電池正極、負端接近電阻。"],
      ["伏特計 V", "並聯在電阻兩端，正端接電阻左側高電位端、負端接右側。"],
      ["節點", "電阻兩端的分接處以實心圓標示。"],
    ],
  },
  "magnetic-field-diagram": {
    altText: "條形磁鐵左端為北極、右端為南極，四條外部磁力線的箭頭都由北極指向南極。",
    rows: [
      ["磁極", "條形磁鐵左端為 N 極，右端為 S 極。"],
      ["外部方向", "磁鐵外部四條磁力線都由 N 極指向 S 極。"],
      ["相對強弱", "磁力線在兩極附近較密，只表示相對磁場強弱。"],
      ["模型限制", "磁力線是表示磁場的模型，不是物質線條。"],
    ],
  },
  "electromagnetic-device": {
    altText: "手搖曲柄帶動南北磁極間的線圈旋轉，滑環與電刷連成燈泡回路並輸出交流電。",
    rows: [
      ["磁場", "左側為 N 極、右側為 S 極，線圈位於兩極之間。"],
      ["機械輸入", "上方手搖曲柄帶動矩形線圈繞中央轉軸旋轉。"],
      ["電路連接", "線圈兩端接兩個滑環，固定電刷再以封閉導線連接燈泡。"],
      ["輸出極性", "線圈轉動時輸出交流電，兩端極性隨轉動週期交替。"],
      ["能量", "手搖機械能轉為電能，燈泡再輸出光與內能。"],
    ],
  },
};

const META = [
  ["PHYCHM_R4_U18", "laboratory-setup", "science-diagram", "加熱試管的安全裝置", ["試管", "管口", "夾具", "熱源", "護目鏡"], []],
  ["PHYCHM_R4_U21", "wave-graph", "graph", "繩波的波長與振幅", ["波峰", "波長", "振幅", "位置", "位移"], []],
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
  altText: TEXT_ALTERNATIVES[key].altText,
  longDescription: SVG[key].match(/<desc>([^<]+)<\/desc>/u)[1],
  dataFallback: {
    summary: `${caption}的文字資料替代`,
    columns: ["項目", "文字／數據替代"],
    rows: TEXT_ALTERNATIVES[key].rows,
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
