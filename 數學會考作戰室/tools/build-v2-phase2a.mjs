import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { skill, topic, unit, mkQuestion, mkLecture, writeJs } from "./v2-shared.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const v2Dir = path.join(root, "v2");

const OLD_TEMPLATE = /小考中此題型固定出現|種子碼決定 10 組凍結變體/;

const PILOT = {
  u01: {
    numericId: 1,
    domain: "數與量",
    topics: [
      topic("u01-integer-basics", "正負數、數線與絕對值", [
        skill("integer-number-classification", "數的分類", "u01-integer-basics", ["g7-1-c1/number-classification"]),
        skill("integer-positive-negative-meaning", "正負數的意義", "u01-integer-basics", ["g7-1-c1/signed-number-concept"]),
        skill("integer-number-line-position", "數線位置", "u01-integer-basics", ["g7-1-c1/number-line"]),
        skill("integer-number-comparison", "數的大小比較", "u01-integer-basics", ["g7-1-c1/opposite-and-absolute-overview"]),
        skill("integer-opposite-number", "相反數", "u01-integer-basics", ["g7-1-c1/opposite-number-concept"]),
        skill("integer-absolute-value-basic", "絕對值基本意義", "u01-integer-basics", ["g7-1-c1/absolute-value-concept"]),
        skill("integer-absolute-value-distance", "絕對值與距離", "u01-integer-basics", ["g7-1-c1/absolute-difference-distance"])
      ]),
      topic("u01-integer-arithmetic", "整數四則運算", [
        skill("integer-addition", "整數加法", "u01-integer-arithmetic", ["g7-1-c1/addition-operation"]),
        skill("integer-subtraction", "整數減法", "u01-integer-arithmetic", ["g7-1-c1/subtraction-operation"]),
        skill("integer-multiplication-division", "整數乘除", "u01-integer-arithmetic", ["g7-1-c1/multiplication-division-operation"]),
        skill("integer-mixed-operations", "整數四則混合", "u01-integer-arithmetic", ["g7-1-c1/four-operations"])
      ]),
      topic("u01-integer-exponents", "指數律與科學記號", [
        skill("integer-exponent-meaning", "指數意義", "u01-integer-exponents", ["g7-1-c1/exponent-notation"]),
        skill("integer-exponent-laws", "指數律", "u01-integer-exponents", ["g7-1-c1/exponent-laws"]),
        skill("integer-scientific-notation", "科學記號", "u01-integer-exponents", ["g7-1-c1/scientific-notation"])
      ]),
      topic("u01-integer-literacy", "整數素養應用", [
        skill("integer-literacy-context", "整數素養題", "u01-integer-literacy", ["g7-1-c1/arithmetic-application"], { questionTarget: 8, difficultyBands: ["standard", "literacy"] })
      ])
    ]
  },
  u02: {
    numericId: 2,
    domain: "數與量",
    topics: [
      topic("u02-factors", "因數、倍數與 GCD/LCM", [
        skill("fraction-factor-multiple", "因數與倍數", "u02-factors", ["g7-1-c2/factor-and-multiple"]),
        skill("fraction-prime-composite", "質數與合數", "u02-factors", ["g7-1-c2/prime-and-composite"]),
        skill("fraction-prime-factorization", "質因數分解", "u02-factors", ["g7-1-c2/prime-factorization-standard"]),
        skill("fraction-gcd-basic", "最大公因數", "u02-factors", ["g7-1-c2/find-gcd-and-lcm"]),
        skill("fraction-lcm-basic", "最小公倍數", "u02-factors", ["g7-1-c2/find-gcd-and-lcm"])
      ]),
      topic("u02-factors-apps", "GCD/LCM 應用", [
        skill("fraction-gcd-application", "最大公因數應用", "u02-factors-apps", ["g7-1-c2/gcd-application"]),
        skill("fraction-lcm-application", "最小公倍數應用", "u02-factors-apps", ["g7-1-c2/lcm-application"])
      ]),
      topic("u02-fraction-ops", "分數運算", [
        skill("fraction-compare", "分數大小比較", "u02-fraction-ops", ["g7-1-c2/positive-fraction-compare"]),
        skill("fraction-add-subtract", "分數加減", "u02-fraction-ops", ["g7-1-c2/fraction-add-subtract"]),
        skill("fraction-multiply-divide", "分數乘除", "u02-fraction-ops", ["g7-1-c2/fraction-multiply-divide"]),
        skill("fraction-mixed-number", "帶分數與假分數", "u02-fraction-ops", ["g7-1-c2/fraction-basics"]),
        skill("fraction-complex-fraction-basic", "繁分數基本化簡", "u02-fraction-ops", ["g7-1-c2/fraction-four-operations"])
      ]),
      topic("u02-fraction-ratio", "百分率與基準量", [
        skill("fraction-percent-discount", "百分率、折扣、成數", "u02-fraction-ratio", ["g7-1-c2/fraction-compare-application"]),
        skill("fraction-base-quantity", "基準量判斷", "u02-fraction-ratio", ["g7-1-c2/fraction-four-ops-application"])
      ]),
      topic("u02-fraction-literacy", "分數素養應用", [
        skill("fraction-literacy-context", "分數素養題", "u02-fraction-literacy", ["g7-1-c2/fraction-four-ops-application"], { questionTarget: 8, difficultyBands: ["standard", "literacy"] })
      ])
    ]
  },
  u03: {
    numericId: 3,
    domain: "代數",
    topics: [
      topic("u03-linear-expression", "一元一次式", [
        skill("linear-expression-substitution", "文字式與代入求值", "u03-linear-expression", ["g7-1-c3/linear-expression-value"]),
        skill("linear-expression-simplify", "一元一次式化簡", "u03-linear-expression", ["g7-1-c3/linear-expression-simplify"])
      ]),
      topic("u03-linear-equation-solving", "一元一次方程式解法", [
        skill("linear-equation-balance-property", "等量公理", "u03-linear-equation-solving", ["g7-1-c3/balance-and-transposition"]),
        skill("linear-equation-basic-solving", "一元一次方程式基本解法", "u03-linear-equation-solving", ["g7-1-c3/solve-linear-equation"]),
        skill("linear-equation-parentheses", "含括號的一元一次方程式", "u03-linear-equation-solving", ["g7-1-c3/solve-linear-equation"]),
        skill("linear-equation-fractions", "含分母的一元一次方程式", "u03-linear-equation-solving", ["g7-1-c3/solve-linear-equation"]),
        skill("linear-equation-check-solution", "方程式解的檢查", "u03-linear-equation-solving", ["g7-1-c3/linear-equation-solution"])
      ]),
      topic("u03-linear-equation-apps", "一元一次方程式應用", [
        skill("linear-equation-age-problem", "年齡問題", "u03-linear-equation-apps", ["g7-1-c3/linear-expression-application"]),
        skill("linear-equation-money-problem", "金錢問題", "u03-linear-equation-apps", ["g7-1-c3/shopping-problem"]),
        skill("linear-equation-rate-problem", "行程問題", "u03-linear-equation-apps", ["g7-1-c3/word-problem-steps"]),
        skill("linear-equation-distribution-problem", "分配問題", "u03-linear-equation-apps", ["g7-1-c3/distribution-problem"]),
        skill("linear-equation-consecutive-integers", "連續整數問題", "u03-linear-equation-apps", ["g7-1-c3/linear-equation-word-setup"])
      ]),
      topic("u03-linear-equation-reasoning", "合理性與素養", [
        skill("linear-equation-reasonableness", "合理性檢查", "u03-linear-equation-reasoning", ["g7-1-c3/linear-equation-solution"]),
        skill("linear-equation-plan-comparison", "方案比較問題", "u03-linear-equation-reasoning", ["g7-1-c3/plan-comparison-problem"]),
        skill("linear-equation-literacy-context", "一元一次方程式素養題", "u03-linear-equation-reasoning", ["g7-1-c3/water-saving-problem"], { questionTarget: 8, difficultyBands: ["standard", "literacy"] })
      ])
    ]
  }
};

// ponytail: syllabus-only U04–U23 use representative skill sets; Phase B may refine legacyRefs against live taxonomy IDs.
const SYLLABUS_ONLY = [
  unit("u04", "二元一次聯立方程式", [
    topic("u04-system-expression", "二元一次式", [
      skill("system-two-variable-expression", "二元一次式", "u04-system-expression", ["g7-2-c1/two-variable-linear-expression"]),
      skill("system-expression-simplify", "二元一次式化簡", "u04-system-expression", ["g7-2-c1/two-variable-expression-simplify"]),
      skill("system-expression-value", "二元一次式求值", "u04-system-expression", ["g7-2-c1/two-variable-expression-value"])
    ]),
    topic("u04-system-solving", "聯立方程式解法", [
      skill("system-substitution", "代入消去法", "u04-system-solving", ["g7-2-c1/solve-linear-system"]),
      skill("system-elimination", "加減消去法", "u04-system-solving", ["g7-2-c1/solve-linear-system"]),
      skill("system-special-cases", "無解與無限多解", "u04-system-solving", ["g7-2-c1/special-linear-system"]),
      skill("system-solution-check", "聯立方程式解的檢查", "u04-system-solving", ["g7-2-c1/system-solution-parameter"])
    ]),
    topic("u04-system-apps", "聯立方程式應用", [
      skill("system-word-setup", "聯立方程式列式", "u04-system-apps", ["g7-2-c1/system-word-problem-steps"]),
      skill("system-rate-problem", "速率問題", "u04-system-apps", ["g7-2-c1/system-rate-problem"]),
      skill("system-digit-problem", "數字問題", "u04-system-apps", ["g7-2-c1/system-digit-problem"]),
      skill("system-literacy", "聯立方程式素養題", "u04-system-apps", [], { questionTarget: 8 })
    ])
  ]),
  unit("u05", "平面直角坐標系", [
    topic("u05-coordinate-basics", "坐標平面", [
      skill("coordinate-quadrant", "象限與坐標", "u05-coordinate-basics", ["g7-2-c2/coordinate-plane"]),
      skill("coordinate-plot", "描點與坐標讀取", "u05-coordinate-basics", ["g7-2-c2/coordinate-plane"]),
      skill("coordinate-distance", "兩點距離", "u05-coordinate-basics", ["g7-2-c2/distance-formula"]),
      skill("coordinate-midpoint", "中點坐標", "u05-coordinate-basics", ["g7-2-c2/midpoint-formula"])
    ]),
    topic("u05-linear-graph", "直線圖形", [
      skill("linear-graph-slope", "斜率概念", "u05-linear-graph", ["g7-2-c2/slope-concept"]),
      skill("linear-graph-equation", "直線方程式", "u05-linear-graph", ["g7-2-c2/linear-equation-graph"]),
      skill("linear-graph-intersection", "兩直線交點", "u05-linear-graph", ["g7-2-c2/linear-system-graph"]),
      skill("coordinate-literacy", "坐標素養題", "u05-linear-graph", [], { questionTarget: 8 })
    ])
  ]),
  unit("u06", "比例式", [
    topic("u06-ratio-basics", "比與比例", [
      skill("ratio-simplify", "比的化簡", "u06-ratio-basics", ["g7-2-c3/ratio-simplify"]),
      skill("proportion-solve", "比例式求解", "u06-ratio-basics", ["g7-2-c3/proportion-solve"]),
      skill("direct-variation", "正比", "u06-ratio-basics", ["g7-2-c3/direct-variation"]),
      skill("inverse-variation", "反比", "u06-ratio-basics", ["g7-2-c3/inverse-variation"])
    ]),
    topic("u06-ratio-apps", "比例應用", [
      skill("scale-drawing", "比例尺", "u06-ratio-apps", ["g7-2-c3/scale-drawing"]),
      skill("ratio-word-problem", "比例應用題", "u06-ratio-apps", ["g7-2-c3/ratio-word-problem"]),
      skill("continued-ratio-preview", "連比預備", "u06-ratio-apps", ["g7-2-c3/ratio-word-problem"]),
      skill("ratio-literacy", "比例素養題", "u06-ratio-apps", [], { questionTarget: 8 })
    ])
  ]),
  unit("u07", "一元一次不等式", [
    topic("u07-inequality-basics", "不等式概念", [
      skill("inequality-symbol", "不等號與數線", "u07-inequality-basics", ["g7-2-c4/inequality-concept"]),
      skill("inequality-solve-basic", "一元一次不等式解法", "u07-inequality-basics", ["g7-2-c4/solve-inequality"]),
      skill("inequality-transposition", "不等式移項", "u07-inequality-basics", ["g7-2-c4/solve-inequality"])
    ]),
    topic("u07-inequality-apps", "不等式應用", [
      skill("inequality-integer-solutions", "不等式整數解", "u07-inequality-apps", ["g7-2-c4/inequality-integer-solutions"]),
      skill("inequality-word-problem", "不等式應用題", "u07-inequality-apps", ["g7-2-c4/inequality-word-problem"]),
      skill("inequality-reasonableness", "不等式合理性", "u07-inequality-apps", ["g7-2-c4/inequality-word-problem"]),
      skill("inequality-literacy", "不等式素養題", "u07-inequality-apps", [], { questionTarget: 8 })
    ])
  ]),
  unit("u08", "平面幾何圖形與三視圖", [
    topic("u08-basic-figures", "基本圖形", [
      skill("angle-types", "角的種類", "u08-basic-figures", ["g7-2-c6/angle-types"]),
      skill("line-relationships", "線的關係", "u08-basic-figures", ["g7-2-c6/line-relationships"]),
      skill("polygon-basics", "多邊形基本性質", "u08-basic-figures", ["g7-2-c6/polygon-basics"]),
      skill("angle-sum-triangle", "三角形內角和", "u08-basic-figures", ["g7-2-c6/polygon-basics"])
    ]),
    topic("u08-construction-symmetry", "作圖與對稱", [
      skill("perpendicular-bisector", "垂直平分線", "u08-construction-symmetry", ["g7-2-c6/perpendicular-bisector"]),
      skill("line-symmetry", "線對稱", "u08-construction-symmetry", ["g7-2-c6/line-symmetry"]),
      skill("compass-steps", "尺規作圖步驟", "u08-construction-symmetry", ["g7-2-c6/perpendicular-bisector"])
    ]),
    topic("u08-orthographic", "三視圖", [
      skill("orthographic-views", "三視圖判讀", "u08-orthographic", ["g7-2-c6/orthographic-views"]),
      skill("orthographic-description", "三視圖文字描述", "u08-orthographic", ["g7-2-c6/orthographic-views"]),
      skill("geometry-literacy", "幾何素養題", "u08-orthographic", [], { questionTarget: 8 })
    ])
  ]),
  unit("u09", "統計圖表與資料處理", [
    topic("u09-data-display", "資料呈現", [
      skill("frequency-table", "次數分配表", "u09-data-display", ["g7-2-c5/frequency-table"]),
      skill("bar-chart", "長條圖", "u09-data-display", ["g7-2-c5/bar-chart"]),
      skill("circle-graph", "圓形圖", "u09-data-display", ["g7-2-c5/circle-graph"]),
      skill("line-graph", "折線圖", "u09-data-display", ["g7-2-c5/line-graph"])
    ]),
    topic("u09-central-tendency", "集中量數", [
      skill("mean-calculation", "平均數", "u09-central-tendency", ["g7-2-c5/mean-calculation"]),
      skill("median-mode", "中位數與眾數", "u09-central-tendency", ["g7-2-c5/median-mode"]),
      skill("weighted-mean-basic", "加權平均基本", "u09-central-tendency", ["g7-2-c5/mean-calculation"]),
      skill("stats-literacy", "統計素養題", "u09-central-tendency", [], { questionTarget: 8 })
    ])
  ]),
  unit("u10", "乘法公式與多項式", [
    topic("u10-multiplication-formulas", "乘法公式", [
      skill("square-formula", "完全平方公式", "u10-multiplication-formulas", ["g8-1-c1/square-formula"]),
      skill("difference-of-squares", "平方差公式", "u10-multiplication-formulas", ["g8-1-c1/difference-of-squares"]),
      skill("cube-formula-basic", "立方公式基本", "u10-multiplication-formulas", ["g8-1-c1/square-formula"])
    ]),
    topic("u10-polynomial-ops", "多項式運算", [
      skill("polynomial-add-subtract", "多項式加減", "u10-polynomial-ops", ["g8-1-c1/polynomial-add-subtract"]),
      skill("polynomial-multiply", "多項式乘法", "u10-polynomial-ops", ["g8-1-c1/polynomial-multiply"]),
      skill("polynomial-divide", "多項式除法", "u10-polynomial-ops", ["g8-1-c1/polynomial-divide"]),
      skill("polynomial-literacy", "多項式素養題", "u10-polynomial-ops", [], { questionTarget: 8 })
    ])
  ]),
  unit("u11", "平方根與畢氏定理", [
    topic("u11-square-root", "平方根", [
      skill("square-root-meaning", "平方根意義", "u11-square-root", ["g8-1-c2/square-root-meaning"]),
      skill("square-root-simplify", "根式化簡", "u11-square-root", ["g8-1-c2/square-root-simplify"]),
      skill("square-root-arithmetic", "根式四則", "u11-square-root", ["g8-1-c2/square-root-arithmetic"]),
      skill("square-root-estimate", "平方根估算", "u11-square-root", ["g8-1-c2/square-root-meaning"])
    ]),
    topic("u11-pythagorean", "畢氏定理", [
      skill("pythagorean-theorem", "畢氏定理", "u11-pythagorean", ["g8-1-c2/pythagorean-theorem"]),
      skill("pythagorean-application", "畢氏定理應用", "u11-pythagorean", ["g8-1-c2/pythagorean-application"]),
      skill("coordinate-distance-pythagorean", "坐標平面距離", "u11-pythagorean", ["g8-1-c2/coordinate-distance"]),
      skill("root-literacy", "平方根素養題", "u11-pythagorean", [], { questionTarget: 8 })
    ])
  ]),
  unit("u12", "因式分解", [
    topic("u12-factoring-methods", "因式分解方法", [
      skill("factoring-common", "提公因式", "u12-factoring-methods", ["g8-1-c3/factoring-common"]),
      skill("factoring-formula", "公式法", "u12-factoring-methods", ["g8-1-c3/factoring-formula"]),
      skill("factoring-cross", "十字交乘法", "u12-factoring-methods", ["g8-1-c3/factoring-cross"])
    ]),
    topic("u12-factoring-apps", "因式分解應用", [
      skill("factoring-application", "因式分解應用", "u12-factoring-apps", ["g8-1-c3/factoring-application"]),
      skill("factoring-literacy", "因式分解素養題", "u12-factoring-apps", [], { questionTarget: 8 })
    ])
  ]),
  unit("u13", "一元二次方程式", [
    topic("u13-quadratic-solving", "解法", [
      skill("quadratic-factor", "因式分解法", "u13-quadratic-solving", ["g8-1-c4/quadratic-factor"]),
      skill("quadratic-completing-square", "配方法", "u13-quadratic-solving", ["g8-1-c4/quadratic-completing-square"]),
      skill("quadratic-formula", "公式解", "u13-quadratic-solving", ["g8-1-c4/quadratic-formula"]),
      skill("quadratic-discriminant", "判別式", "u13-quadratic-solving", ["g8-1-c4/quadratic-discriminant"])
    ]),
    topic("u13-quadratic-apps", "應用", [
      skill("quadratic-word-problem", "二次方程式應用", "u13-quadratic-apps", ["g8-1-c4/quadratic-word-problem"]),
      skill("quadratic-root-coefficient-basic", "根與係數基本", "u13-quadratic-apps", ["g8-1-c4/quadratic-discriminant"]),
      skill("quadratic-literacy", "二次方程式素養題", "u13-quadratic-apps", [], { questionTarget: 8 })
    ])
  ]),
  unit("u14", "數列與等差級數", [
    topic("u14-sequences", "數列", [
      skill("sequence-pattern", "數列規律", "u14-sequences", ["g8-2-c1/sequence-pattern"]),
      skill("arithmetic-sequence-nth", "等差數列第 n 項", "u14-sequences", ["g8-2-c1/arithmetic-sequence-nth"]),
      skill("arithmetic-sequence-common-diff", "等差公差", "u14-sequences", ["g8-2-c1/arithmetic-sequence-nth"])
    ]),
    topic("u14-series", "等差級數", [
      skill("arithmetic-series-sum", "等差級數和", "u14-series", ["g8-2-c1/arithmetic-series-sum"]),
      skill("geometric-basic", "等比數列基本", "u14-series", ["g8-2-c1/geometric-basic"]),
      skill("sequence-literacy", "數列素養題", "u14-series", [], { questionTarget: 8 })
    ])
  ]),
  unit("u15", "函數及其圖形", [
    topic("u15-function-basics", "函數概念", [
      skill("function-definition", "函數定義", "u15-function-basics", ["g8-2-c2/function-definition"]),
      skill("function-value", "函數值", "u15-function-basics", ["g8-2-c2/function-value"]),
      skill("function-table-graph", "函數表與圖形", "u15-function-basics", ["g8-2-c2/function-definition"])
    ]),
    topic("u15-linear-function", "線型函數", [
      skill("linear-function-graph", "線型函數圖形", "u15-linear-function", ["g8-2-c2/linear-function-graph"]),
      skill("linear-function-application", "線型函數應用", "u15-linear-function", ["g8-2-c2/linear-function-application"]),
      skill("function-literacy", "函數素養題", "u15-linear-function", [], { questionTarget: 8 })
    ])
  ]),
  unit("u16", "三角形的性質與尺規作圖", [
    topic("u16-triangle-congruence", "全等三角形", [
      skill("triangle-congruence", "全等判定", "u16-triangle-congruence", ["g8-2-c3/triangle-congruence"]),
      skill("triangle-congruence-proof", "全等證明", "u16-triangle-congruence", ["g8-2-c3/triangle-congruence-proof"]),
      skill("isosceles-equilateral", "等腰與等邊三角形", "u16-triangle-congruence", ["g8-2-c3/triangle-congruence"])
    ]),
    topic("u16-construction", "尺規作圖", [
      skill("compass-construction", "尺規作圖步驟", "u16-construction", ["g8-2-c3/compass-construction"]),
      skill("triangle-inequality", "三角形邊長關係", "u16-construction", ["g8-2-c3/triangle-inequality"]),
      skill("triangle-literacy", "三角形素養題", "u16-construction", [], { questionTarget: 8 })
    ])
  ]),
  unit("u17", "平行與四邊形", [
    topic("u17-parallel-lines", "平行線", [
      skill("parallel-angle", "平行線截角", "u17-parallel-lines", ["g8-2-c4/parallel-angle"]),
      skill("parallel-properties", "平行線性質", "u17-parallel-lines", ["g8-2-c4/parallel-properties"]),
      skill("parallel-proof-basic", "平行線證明基本", "u17-parallel-lines", ["g8-2-c4/parallel-properties"])
    ]),
    topic("u17-quadrilateral", "四邊形", [
      skill("parallelogram-properties", "平行四邊形", "u17-quadrilateral", ["g8-2-c4/parallelogram-properties"]),
      skill("special-quadrilateral", "特殊四邊形", "u17-quadrilateral", ["g8-2-c4/special-quadrilateral"]),
      skill("quadrilateral-area", "四邊形面積", "u17-quadrilateral", ["g8-2-c4/quadrilateral-area"]),
      skill("quadrilateral-literacy", "四邊形素養題", "u17-quadrilateral", [], { questionTarget: 8 })
    ])
  ]),
  unit("u18", "連比與相似形", [
    topic("u18-continued-ratio", "連比", [
      skill("continued-ratio", "連比化簡", "u18-continued-ratio", ["g9-1-c1/continued-ratio"]),
      skill("continued-ratio-application", "連比應用", "u18-continued-ratio", ["g9-1-c1/continued-ratio-application"]),
      skill("proportion-segment", "比例線段", "u18-continued-ratio", ["g9-1-c1/continued-ratio-application"])
    ]),
    topic("u18-similarity", "相似形", [
      skill("similar-triangles", "相似三角形", "u18-similarity", ["g9-1-c1/similar-triangles"]),
      skill("similar-ratio-perimeter", "相似比與周長比", "u18-similarity", ["g9-1-c1/similar-ratio-perimeter"]),
      skill("similar-ratio-area", "相似比與面積比", "u18-similarity", ["g9-1-c1/similar-ratio-area"]),
      skill("similarity-literacy", "相似形素養題", "u18-similarity", [], { questionTarget: 8 })
    ])
  ]),
  unit("u19", "圓", [
    topic("u19-circle-angles", "圓周角", [
      skill("central-inscribed-angle", "圓心角與圓周角", "u19-circle-angles", ["g9-1-c2/central-inscribed-angle"]),
      skill("arc-angle", "弧與角", "u19-circle-angles", ["g9-1-c2/arc-angle"]),
      skill("inscribed-quadrilateral", "圓內接四邊形", "u19-circle-angles", ["g9-1-c2/central-inscribed-angle"])
    ]),
    topic("u19-circle-measure", "弧長與扇形", [
      skill("arc-length", "弧長", "u19-circle-measure", ["g9-1-c2/arc-length"]),
      skill("sector-area", "扇形面積", "u19-circle-measure", ["g9-1-c2/sector-area"]),
      skill("circle-composite-area", "圓複合面積", "u19-circle-measure", ["g9-1-c2/sector-area"])
    ]),
    topic("u19-circle-tangent", "切線", [
      skill("tangent-properties", "切線性質", "u19-circle-tangent", ["g9-1-c2/tangent-properties"]),
      skill("circle-literacy", "圓素養題", "u19-circle-tangent", [], { questionTarget: 8 })
    ])
  ]),
  unit("u20", "推理證明與三角形的心", [
    topic("u20-proof", "幾何證明", [
      skill("geometry-proof-basic", "幾何證明基本", "u20-proof", ["g9-2-c1/geometry-proof-basic"]),
      skill("geometry-proof-steps", "證明步驟", "u20-proof", ["g9-2-c1/geometry-proof-steps"]),
      skill("geometry-proof-reason", "理由選擇", "u20-proof", ["g9-2-c1/geometry-proof-steps"])
    ]),
    topic("u20-triangle-centers", "三角形的心", [
      skill("circumcenter", "外心", "u20-triangle-centers", ["g9-2-c1/circumcenter"]),
      skill("incenter", "內心", "u20-triangle-centers", ["g9-2-c1/incenter"]),
      skill("centroid", "重心", "u20-triangle-centers", ["g9-2-c1/centroid"]),
      skill("orthocenter-basic", "垂心基本", "u20-triangle-centers", ["g9-2-c1/circumcenter"]),
      skill("proof-literacy", "幾何證明素養題", "u20-triangle-centers", [], { questionTarget: 8 })
    ])
  ]),
  unit("u21", "二次函數", [
    topic("u21-quadratic-function", "二次函數圖形", [
      skill("quadratic-function-graph", "拋物線圖形", "u21-quadratic-function", ["g9-2-c3/quadratic-function-graph"]),
      skill("quadratic-vertex", "頂點與對稱軸", "u21-quadratic-function", ["g9-2-c3/quadratic-vertex"]),
      skill("quadratic-max-min", "最大最小值", "u21-quadratic-function", ["g9-2-c3/quadratic-max-min"]),
      skill("quadratic-function-literacy", "二次函數素養題", "u21-quadratic-function", [], { questionTarget: 8 })
    ])
  ]),
  unit("u22", "統計與機率", [
    topic("u22-quartile", "四分位數與盒狀圖", [
      skill("quartile-calculation", "四分位數", "u22-quartile", ["g9-2-c2/quartile-calculation"]),
      skill("box-plot", "盒狀圖", "u22-quartile", ["g9-2-c2/box-plot"]),
      skill("box-plot-interpret", "盒狀圖判讀", "u22-quartile", ["g9-2-c2/box-plot"])
    ]),
    topic("u22-probability", "機率", [
      skill("probability-basic", "古典機率", "u22-probability", ["g9-2-c2/probability-basic"]),
      skill("probability-complement", "餘事機率", "u22-probability", ["g9-2-c2/probability-complement"]),
      skill("probability-tree-basic", "樹狀圖基本", "u22-probability", ["g9-2-c2/probability-basic"]),
      skill("probability-literacy", "機率素養題", "u22-probability", [], { questionTarget: 8 })
    ])
  ]),
  unit("u23", "立體幾何圖形", [
    topic("u23-solid-basics", "立體圖形", [
      skill("solid-nets", "展開圖", "u23-solid-basics", ["g9-2-c4/solid-nets"]),
      skill("solid-views", "立體三視圖", "u23-solid-basics", ["g9-2-c4/solid-views"]),
      skill("solid-cross-section", "截面概念", "u23-solid-basics", ["g9-2-c4/solid-views"])
    ]),
    topic("u23-solid-measure", "表面積與體積", [
      skill("prism-surface-area", "柱體表面積", "u23-solid-measure", ["g9-2-c4/prism-surface-area"]),
      skill("prism-volume", "柱體體積", "u23-solid-measure", ["g9-2-c4/prism-volume"]),
      skill("pyramid-cone-volume", "錐體體積", "u23-solid-measure", ["g9-2-c4/pyramid-cone-volume"]),
      skill("solid-literacy", "立體幾何素養題", "u23-solid-measure", [], { questionTarget: 8 })
    ])
  ])
];

function loadUnitsMeta() {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(v2Dir, "math-units-v2.js"), "utf8"), ctx);
  return ctx.window.MATH_UNITS_V2;
}

function flattenSkills(unitDef) {
  const out = [];
  for (const t of unitDef.topics) for (const s of t.skills) out.push({ ...s, topicId: t.topicId, topicTitle: t.title });
  return out;
}

function buildSyllabus(unitsMeta) {
  return {
    version: "2.0.0-draft",
    sourceScope: "CAP_108_JUNIOR_MATH",
    units: unitsMeta.map(u => {
      const pilot = PILOT[u.unitId];
      if (pilot) return { unitId: u.unitId, title: u.title, topics: pilot.topics };
      const only = SYLLABUS_ONLY.find(x => x.unitId === u.unitId);
      return { unitId: u.unitId, title: u.title, topics: only?.topics ?? [] };
    })
  };
}

// --- Question templates: 4 per pilot skill ---
const Q = {
  "integer-number-classification": [
    ["下列哪一個數是整數？", ["-7", "1/2", "0.333…", "√2"], 0, "整數包含正整數、0、負整數。-7 是負整數。"],
    ["下列哪一個數是有理數？", ["-3/4", "π", "√5", "√7"], 0, "-3/4 可寫成兩整數比，是有理數。"],
    ["下列哪一個數不是有理數？", ["√2", "-5", "0", "3/8"], 0, "√2 無法寫成兩整數比，是無理數。"],
    ["0 屬於下列哪一類？", ["整數", "正整數", "負整數", "無理數"], 0, "0 是整數，但不是正整數或負整數。"]
  ],
  "integer-positive-negative-meaning": [
    ["某地氣溫比 0°C 低 5°C，應記為？", ["-5°C", "+5°C", "0°C", "10°C"], 0, "低於 0 用負數表示。"],
    ["潛水艇在海平面下 20 公尺，以海平面為基準可記為？", ["-20 公尺", "+20 公尺", "0 公尺", "20 公尺"], 0, "海平面下為負方向。"],
    ["帳戶透支 300 元，以 0 元為基準可記為？", ["-300 元", "+300 元", "0 元", "600 元"], 0, "透支表示比 0 少，用負數。"],
    ["電梯從 1 樓下降 3 層到地下 2 樓，地下 2 樓可記為？", ["-2 樓", "+2 樓", "-3 樓", "+3 樓"], 0, "地下樓層以負數表示。"]
  ],
  "integer-number-line-position": [
    ["數線上 A 在原點左側 4 單位，A 的坐標為？", ["-4", "4", "-3", "0"], 0, "左側為負，距離 4 即 -4。"],
    ["數線上 B 在原點右側 7 單位，B 的坐標為？", ["7", "-7", "0", "14"], 0, "右側為正。"],
    ["A(-3)、B(5) 在數線上，B 在 A 的哪一側？", ["右側", "左側", "重合", "無法判斷"], 0, "5 > -3，B 在右側。"],
    ["原點左側 2 單位、右側 6 單位的兩點坐標依序為？", ["-2 與 6", "2 與 -6", "-6 與 2", "2 與 6"], 0, "左負右正。"]
  ],
  "integer-number-comparison": [
    ["比較 -8 與 -3 的大小。", ["-8 < -3", "-8 > -3", "-8 = -3", "無法比較"], 0, "負數絕對值越大，數值越小。"],
    ["下列何者正確？", ["-1 > -5", "-1 < -5", "-5 > 0", "-1 > 0"], 0, "-1 在數線上較右。"],
    ["-12、-7、0 由小到大排列為？", ["-12, -7, 0", "-7, -12, 0", "0, -7, -12", "-12, 0, -7"], 0, "越左越小。"],
    ["下列哪一個數最大？", ["3", "-2", "-9", "0"], 0, "正數大於 0 與負數。"]
  ],
  "integer-opposite-number": [
    ["-6 的相反數為？", ["6", "-6", "0", "1/6"], 0, "相反數改變正負。"],
    ["7 的相反數為？", ["-7", "7", "0", "1/7"], 0, "a 的相反數是 -a。"],
    ["0 的相反數為？", ["0", "1", "-1", "無"], 0, "0 的相反數仍是 0。"],
    ["若 a = -4，則 -a 為？", ["4", "-4", "0", "8"], 0, "-(-4)=4。"]
  ],
  "integer-absolute-value-basic": [
    ["|-9| 的值為？", ["9", "-9", "0", "18"], 0, "絕對值是到原點距離。"],
    ["|5| 的值為？", ["5", "-5", "0", "10"], 0, "正數的絕對值是自己。"],
    ["|0| 的值為？", ["0", "1", "-1", "無"], 0, "原點距離為 0。"],
    ["下列何者正確？", ["|-3| = 3", "|-3| = -3", "|3| = -3", "|-3| = 0"], 0, "絕對值非負。"]
  ],
  "integer-absolute-value-distance": [
    ["數線上 -2 與 5 的距離為？", ["7", "3", "-7", "10"], 0, "距離 = |5-(-2)|=7。"],
    ["| -4 - 3 | 表示兩點距離，其值為？", ["7", "1", "-7", "12"], 0, "|-7|=7。"],
    ["A(-8)、B(-1) 的距離為？", ["7", "9", "-9", "8"], 0, "|-1-(-8)|=7。"],
    ["到原點距離為 6 的點可表示為？", ["6 或 -6", "只有 6", "只有 -6", "0"], 0, "|x|=6 → x=±6。"]
  ],
  "integer-addition": [
    ["計算 (-3) + 8。", ["5", "-5", "11", "-11"], 0, "從 -3 向右 8 單位得 5。"],
    ["計算 (-7) + (-2)。", ["-9", "9", "-5", "5"], 0, "同號相加，絕對值相加再取負。"],
    ["計算 4 + (-9)。", ["-5", "5", "13", "-13"], 0, "異號相減，取絕對值較大者的符號。"],
    ["計算 (-1) + 1。", ["0", "2", "-2", "1"], 0, "相反數相加為 0。"]
  ],
  "integer-subtraction": [
    ["計算 5 - (-3)。", ["8", "2", "-8", "-2"], 0, "減負等於加正：5+3=8。"],
    ["計算 (-4) - 6。", ["-10", "10", "2", "-2"], 0, "(-4)+(-6)=-10。"],
    ["計算 (-2) - (-7)。", ["5", "-5", "9", "-9"], 0, "(-2)+7=5。"],
    ["計算 0 - (-5)。", ["5", "-5", "0", "10"], 0, "0+5=5。"]
  ],
  "integer-multiplication-division": [
    ["計算 (-3) × 4。", ["-12", "12", "-7", "7"], 0, "異號相乘為負。"],
    ["計算 (-5) × (-2)。", ["10", "-10", "7", "-7"], 0, "同號相乘為正。"],
    ["計算 (-12) ÷ 3。", ["-4", "4", "-9", "9"], 0, "異號相除為負。"],
    ["計算 (-8) ÷ (-4)。", ["2", "-2", "4", "-4"], 0, "同號相除為正。"]
  ],
  "integer-mixed-operations": [
    ["計算 6 + 2 × (-3)。", ["0", "24", "-12", "12"], 0, "先乘後加：6+(-6)=0。"],
    ["計算 (-4) × 2 + 10。", ["2", "-2", "18", "-18"], 0, "(-8)+10=2。"],
    ["計算 15 - 3 × (-2)。", ["21", "9", "27", "6"], 0, "15-(-6)=21。"],
    ["計算 (-2)² + 1。", ["5", "-3", "3", "-5"], 0, "(-2)²=4，4+1=5。"]
  ],
  "integer-exponent-meaning": [
    ["2 × 2 × 2 可記成？", ["2³", "2×3", "3²", "2+3"], 0, "同底連乘 3 次。"],
    ["(-3)² 的值為？", ["9", "-9", "6", "-6"], 0, "負數平方為正。"],
    ["5¹ 的值為？", ["5", "1", "0", "25"], 0, "任何數的 1 次方是自己。"],
    ["10⁰ 的值為？", ["1", "0", "10", "100"], 0, "a≠0 時 a⁰=1。"]
  ],
  "integer-exponent-laws": [
    ["2³ × 2² 可化簡為？", ["2⁵", "2⁶", "4⁵", "2¹"], 0, "同底相乘指數加。"],
    ["5⁴ ÷ 5² 可化簡為？", ["5²", "5⁶", "5⁸", "25²"], 0, "同底相除指數減。"],
    ["(3²)³ 可化簡為？", ["3⁶", "3⁵", "9³", "3⁸"], 0, "幂的幂指數相乘。"],
    ["2⁻² 的值為？", ["1/4", "4", "-4", "-1/4"], 0, "負指數取倒數。"]
  ],
  "integer-scientific-notation": [
    ["3600000 的科學記號為？", ["3.6×10⁶", "36×10⁵", "3.6×10⁵", "0.36×10⁷"], 0, "係數須 1≤a<10。"],
    ["0.00052 的科學記號為？", ["5.2×10⁻⁴", "52×10⁻⁵", "5.2×10⁴", "0.52×10⁻³"], 0, "小數點右移 4 位。"],
    ["4.2×10³ 表示的數為？", ["4200", "420", "42000", "0.0042"], 0, "小數點右移 3 位。"],
    ["1.5×10⁻² 表示的數為？", ["0.015", "0.15", "150", "0.0015"], 0, "負指數向左移。"]
  ],
  "integer-literacy-context": [
    ["某市週一最高溫 3°C、最低溫 -4°C，溫差為？", ["7°C", "1°C", "-1°C", "4°C"], 0, "溫差 = |3-(-4)|=7。"],
    ["潛水艇在海面下 15 公尺，上升 8 公尺後位置為？", ["-7 公尺", "-23 公尺", "7 公尺", "-8 公尺"], 0, "-15+8=-7。"],
    ["某帳戶存 500 元後支出 800 元，餘額為？", ["-300 元", "300 元", "1300 元", "-1300 元"], 0, "500-800=-300。"],
    ["電梯從 -2 樓到 5 樓共上升幾層？", ["7 層", "3 層", "5 層", "2 層"], 0, "5-(-2)=7。"]
  ],
  "fraction-factor-multiple": [
    ["24 的因數中，下列何者正確？", ["6 是 24 的因數", "24 是 6 的因數", "6 不是 24 的倍數", "24 不是 6 的倍數"], 0, "24÷6=4 為整數。"],
    ["下列哪一個是 15 的倍數？", ["45", "10", "8", "7"], 0, "45÷15=3。"],
    ["18 與 6 的關係為？", ["6 是 18 的因數", "18 是 6 的因數", "無關", "互為質數"], 0, "18=6×3。"],
    ["30 的所有正因數個數為？", ["8 個", "6 個", "4 個", "10 個"], 0, "1,2,3,5,6,10,15,30 共 8 個。"]
  ],
  "fraction-prime-composite": [
    ["下列何者是質數？", ["29", "21", "1", "39"], 0, "29 只有 1 與 29 兩個正因數。"],
    ["下列何者是合數？", ["35", "2", "13", "17"], 0, "35=5×7 還有其他因數。"],
    ["1 的敘述何者正確？", ["1 既不是質數也不是合數", "1 是質數", "1 是合數", "1 是最小質數"], 0, "1 只有一個正因數。"],
    ["最小的質數是？", ["2", "3", "1", "0"], 0, "2 是唯一的偶質數。"]
  ],
  "fraction-prime-factorization": [
    ["36 的標準分解式為？", ["2²×3²", "6²", "2×18", "4×9"], 0, "36=4×9=2²×3²。"],
    ["60 的標準分解式為？", ["2²×3×5", "6×10", "2×30", "4×15"], 0, "60=4×15=2²×3×5。"],
    ["72 的質因數中一定包含？", ["2", "5", "7", "11"], 0, "72 是偶數，含質因數 2。"],
    ["90 的標準分解式為？", ["2×3²×5", "9×10", "2×45", "3×30"], 0, "90=2×9×5=2×3²×5。"]
  ],
  "fraction-gcd-basic": [
    ["12 與 18 的最大公因數為？", ["6", "3", "36", "2"], 0, "公因數 1,2,3,6，最大為 6。"],
    ["24 與 36 的最大公因數為？", ["12", "6", "72", "4"], 0, "24=2³×3，36=2²×3²，GCD=2²×3=12。"],
    ["15 與 28 的最大公因數為？", ["1", "3", "5", "7"], 0, "15 與 28 互質。"],
    ["48 與 60 的最大公因數為？", ["12", "6", "240", "24"], 0, "48=2⁴×3，60=2²×3×5，GCD=2²×3=12。"]
  ],
  "fraction-lcm-basic": [
    ["4 與 6 的最小公倍數為？", ["12", "24", "2", "10"], 0, "4=2²，6=2×3，LCM=2²×3=12。"],
    ["8 與 12 的最小公倍數為？", ["24", "48", "4", "96"], 0, "LCM=2³×3=24。"],
    ["5 與 7 的最小公倍數為？", ["35", "12", "1", "70"], 0, "互質時 LCM=乘積。"],
    ["9 與 15 的最小公倍數為？", ["45", "135", "3", "30"], 0, "9=3²，15=3×5，LCM=3²×5=45。"]
  ],
  "fraction-gcd-application": [
    ["48 與 36 公分長的繩子剪成等長且無剩，每段最長幾公分？", ["12 公分", "6 公分", "24 公分", "18 公分"], 0, "求 GCD(48,36)=12。"],
    ["30 與 45 個蘋果分組，每組數相同且最多，每組幾個？", ["15 個", "5 個", "3 個", "90 個"], 0, "GCD(30,45)=15。"],
    ["42 與 56 面積相同且無剩的正方形瓷磚，邊長最大幾公分？", ["14 公分", "7 公分", "28 公分", "21 公分"], 0, "GCD(42,56)=14。"],
    ["24 與 18 本書要分成若干堆，每堆本數相同且盡可能多，每堆幾本？", ["6 本", "3 本", "2 本", "12 本"], 0, "GCD(24,18)=6。"]
  ],
  "fraction-lcm-application": [
    ["4 與 6 分鐘各響一次，同時響後再同時響至少幾分鐘？", ["12 分鐘", "24 分鐘", "10 分鐘", "2 分鐘"], 0, "LCM(4,6)=12。"],
    ["6 與 8 公尺長的路燈等距排列，間距最大幾公尺？", ["2 公尺", "14 公尺", "48 公尺", "4 公尺"], 0, "GCD(6,8)=2。"],
    ["3 與 5 天各發一次信，同一天發信後再同時發至少幾天？", ["15 天", "8 天", "30 天", "2 天"], 0, "LCM(3,5)=15。"],
    ["12 與 18 人排成相同列數且列數最多，可排幾列？", ["6 列", "3 列", "2 列", "36 列"], 0, "GCD(12,18)=6。"]
  ],
  "fraction-compare": [
    ["比較 3/4 與 5/6 的大小。", ["3/4 < 5/6", "3/4 > 5/6", "3/4 = 5/6", "無法比較"], 0, "通分：3/4=9/12，5/6=10/12。"],
    ["下列何者最大？", ["7/8", "2/3", "5/9", "1/2"], 0, "7/8 最接近 1。"],
    ["-1/2 與 -3/4 何者較大？", ["-1/2", "-3/4", "相等", "無法比較"], 0, "負分數絕對值小者較大。"],
    ["0.75 與 2/3 何者較大？", ["0.75", "2/3", "相等", "無法比較"], 0, "0.75=3/4 > 2/3。"]
  ],
  "fraction-add-subtract": [
    ["計算 1/3 + 1/6。", ["1/2", "2/9", "2/6", "1/9"], 0, "通分：2/6+1/6=3/6=1/2。"],
    ["計算 5/8 − 1/4。", ["3/8", "4/8", "1/4", "6/8"], 0, "1/4=2/8，5/8−2/8=3/8。"],
    ["計算 2/5 + 3/10。", ["7/10", "5/15", "1/2", "6/10"], 0, "4/10+3/10=7/10。"],
    ["計算 1 − 2/3。", ["1/3", "2/3", "1/2", "−1/3"], 0, "1=3/3，3/3−2/3=1/3。"]
  ],
  "fraction-multiply-divide": [
    ["計算 2/3 × 3/4。", ["1/2", "6/7", "5/7", "2/4"], 0, "分子乘分子、分母乘分母：6/12=1/2。"],
    ["計算 3/5 ÷ 2/3。", ["9/10", "6/15", "5/6", "2/5"], 0, "除以分數 = 乘倒數：3/5×3/2=9/10。"],
    ["計算 4/7 × 14。", ["8", "4", "56/7", "2"], 0, "4/7×14=4×2=8。"],
    ["計算 5/6 ÷ 5。", ["1/6", "25/6", "1/5", "5/30"], 0, "5/6×1/5=1/6。"]
  ],
  "fraction-mixed-number": [
    ["1 3/4 化成假分數為？", ["7/4", "4/7", "13/4", "3/4"], 0, "1×4+3=7，得 7/4。"],
    ["11/4 化成帶分數為？", ["2 3/4", "1 3/4", "2 1/4", "3 1/4"], 0, "11÷4=2 餘 3。"],
    ["2 1/2 + 1 1/2 等於？", ["4", "3", "3 1/2", "4 1/2"], 0, "2+1+1/2+1/2=4。"],
    ["下列何者是帶分數？", ["2 1/3", "5/3", "0.333…", "3/2"], 0, "帶分數含整數與真分數部分。"]
  ],
  "fraction-complex-fraction-basic": [
    ["化簡 (1/2)/(1/4)。", ["2", "1/8", "1/2", "4"], 0, "(1/2)÷(1/4)=1/2×4=2。"],
    ["化簡 (3/4)/(1/2)。", ["3/2", "3/8", "6/4", "1/2"], 0, "3/4×2=3/2。"],
    ["化簡 (2/3)/(4/5)。", ["5/6", "8/15", "6/5", "10/12"], 0, "2/3×5/4=10/12=5/6。"],
    ["(1/3)/(2) 等於？", ["1/6", "2/3", "3/2", "1/5"], 0, "1/3÷2=1/3×1/2=1/6。"]
  ],
  "fraction-percent-discount": [
    ["原價 400 元打 8 折，售價為？", ["320 元", "380 元", "80 元", "480 元"], 0, "400×80%=320。"],
    ["某商品漲價 20%，原價 500 元，新價為？", ["600 元", "520 元", "100 元", "580 元"], 0, "500×120%=600。"],
    ["8 折表示售價是原價的百分之幾？", ["80%", "8%", "20%", "88%"], 0, "8 折 = 原價的 80%。"],
    ["成數 7 成表示？", ["70%", "7%", "0.7 倍原價的 10 倍", "700%"], 0, "1 成 = 10%，7 成 = 70%。"]
  ],
  "fraction-base-quantity": [
    ["某數的 25% 是 30，某數為？", ["120", "7.5", "55", "750"], 0, "30÷25%=120。"],
    ["原價打 9 折後 450 元，原價為？", ["500 元", "405 元", "490 元", "540 元"], 0, "450÷90%=500。"],
    ["比較量 60 是基準量 240 的百分之幾？", ["25%", "40%", "15%", "4%"], 0, "60÷240=25%。"],
    ["基準量未知時，應先判斷？", ["題目中的「全部」「原價」通常為基準量", "比較量一定是基準量", "百分率是分母", "基準量永遠較小"], 0, "基準量是百分率對應的「整體」。"]
  ],
  "fraction-literacy-context": [
    ["一桶水 24 公升，上午用 1/3，下午用 1/4 桶，剩幾公升？", ["10 公升", "8 公升", "12 公升", "6 公升"], 0, "上午 8 公升、下午 6 公升，24−8−6=10。"],
    ["三人分 120 元，甲得 1/3、乙得 1/4，丙得其餘，丙得幾元？", ["50 元", "40 元", "30 元", "60 元"], 0, "甲 40、乙 30，丙 120−70=50。"],
    ["某班 40 人，1/5 參加籃球、1/4 參加排球，兩項都未參加幾人？", ["22 人", "18 人", "24 人", "16 人"], 0, "8+10=18 人參加，剩 22 人。"],
    ["長 3 1/2 公尺的繩子剪去 3/4 公尺，剩幾公尺？", ["2 3/4 公尺", "2 1/2 公尺", "3 公尺", "2 1/4 公尺"], 0, "3.5−0.75=2.75=2 3/4。"]
  ],
  "linear-expression-substitution": [
    ["當 x = 3 時，2x + 5 的值為？", ["11", "10", "8", "13"], 0, "2×3+5=11。"],
    ["當 x = −2 時，x − 7 的值為？", ["−9", "9", "−5", "5"], 0, "−2−7=−9。"],
    ["某數為 x，其 3 倍減 4 可記為？", ["3x − 4", "3 − 4x", "x − 12", "3(x − 4)"], 0, "先 3 倍再減 4。"],
    ["當 x = 4 時，5x − 3x 的值為？", ["8", "2", "20", "12"], 0, "5×4−3×4=20−12=8。"]
  ],
  "linear-expression-simplify": [
    ["化簡 3x + 2x − 5。", ["5x − 5", "6x − 5", "5x + 5", "x − 5"], 0, "合併 x 項得 5x。"],
    ["化簡 7x + 4 − 2x + 1。", ["5x + 5", "9x + 5", "5x + 3", "9x + 3"], 0, "5x+5。"],
    ["化簡 2(x + 3) + x。", ["3x + 6", "2x + 6", "3x + 3", "2x + 3"], 0, "2x+6+x=3x+6。"],
    ["化簡 4x − (2x − 1)。", ["2x + 1", "2x − 1", "6x − 1", "2x + 2"], 0, "4x−2x+1=2x+1。"]
  ],
  "linear-equation-balance-property": [
    ["若 a = b，則 a + 5 與 b + 5 的關係為？", ["相等", "a + 5 較大", "b + 5 較大", "不一定"], 0, "等量公理：同加仍相等。"],
    ["解 x + 8 = 15。", ["x = 7", "x = 23", "x = −7", "x = 8"], 0, "移項 x=15−8=7。"],
    ["解 x − 4 = −1。", ["x = 3", "x = −5", "x = 5", "x = −3"], 0, "x=−1+4=3。"],
    ["下列哪一步符合等量公理？", ["等式兩邊同減 3", "只有左邊減 3", "兩邊加不同數", "只除一邊"], 0, "兩邊須做相同運算。"]
  ],
  "linear-equation-basic-solving": [
    ["解 2x = 10。", ["x = 5", "x = 20", "x = 8", "x = 12"], 0, "x=10÷2=5。"],
    ["解 3x + 6 = 0。", ["x = −2", "x = 2", "x = −6", "x = 6"], 0, "3x=−6，x=−2。"],
    ["解 5x − 3 = 12。", ["x = 3", "x = 9", "x = 15", "x = 2"], 0, "5x=15，x=3。"],
    ["解 −4x = 20。", ["x = −5", "x = 5", "x = −20", "x = 24"], 0, "x=20÷(−4)=−5。"]
  ],
  "linear-equation-parentheses": [
    ["解 2(x + 3) = 10。", ["x = 2", "x = 5", "x = 4", "x = 1"], 0, "x+3=5，x=2。"],
    ["解 3(2x − 1) = 9。", ["x = 2", "x = 1", "x = 3", "x = 4"], 0, "2x−1=3，2x=4，x=2。"],
    ["解 5 − 2(x − 1) = 11。", ["x = −2", "x = 2", "x = −4", "x = 4"], 0, "−2(x−1)=6，x−1=−3，x=−2。"],
    ["解 4x + 2(3 − x) = 8。", ["x = 1", "x = 2", "x = 0", "x = 4"], 0, "4x+6−2x=8，2x=2，x=1。"]
  ],
  "linear-equation-fractions": [
    ["解 x/2 = 5。", ["x = 10", "x = 7", "x = 2.5", "x = 5"], 0, "x=10。"],
    ["解 (x + 1)/3 = 4。", ["x = 11", "x = 13", "x = 3", "x = 12"], 0, "x+1=12，x=11。"],
    ["解 (2x − 1)/5 = 3。", ["x = 8", "x = 7", "x = 9", "x = 6"], 0, "2x−1=15，2x=16，x=8。"],
    ["解 x/4 + 2 = 5。", ["x = 12", "x = 28", "x = 8", "x = 20"], 0, "x/4=3，x=12。"]
  ],
  "linear-equation-check-solution": [
    ["x = 4 是否為 2x + 1 = 9 的解？", ["是", "否", "無法判斷", "條件不足"], 0, "2×4+1=9。"],
    ["x = −3 是否為 x − 5 = −8 的解？", ["是", "否", "無法判斷", "條件不足"], 0, "−3−5=−8。"],
    ["檢驗解時應做什麼？", ["代入方程式看兩邊是否相等", "只算左邊", "只算右邊", "比較係數"], 0, "代入後兩邊相等才是解。"],
    ["x = 2 是否為 3x − 4 = 2 的解？", ["是", "否", "無法判斷", "條件不足"], 0, "3×2−4=2，兩邊相等。"]
  ],
  "linear-equation-age-problem": [
    ["小明今年 x 歲，3 年後 15 歲，x 為？", ["12", "18", "15", "3"], 0, "x+3=15，x=12。"],
    ["爸爸 40 歲，兒子 x 歲，5 年後爸爸是兒子 3 倍，x 為？", ["5", "10", "15", "8"], 1, "40+5=3(x+5)，解得 x=10。"],
    ["姐姐比弟弟大 4 歲，兩人年齡和 20 歲，弟弟幾歲？", ["8 歲", "12 歲", "10 歲", "6 歲"], 0, "2x+4=20，x=8。"],
    ["5 年前媽媽年齡是女兒 4 倍，現在女兒 10 歲，媽媽現在幾歲？", ["35 歲", "40 歲", "45 歲", "30 歲"], 0, "5 年前女兒 5、媽 20，現在 35。"]
  ],
  "linear-equation-money-problem": [
    ["付 100 元買 3 本同價書，找零 16 元，每本幾元？", ["28 元", "32 元", "84 元", "24 元"], 0, "3x=84，x=28。"],
    ["小明有 x 元，買 45 元午餐後剩 12 元，x 為？", ["57 元", "33 元", "45 元", "12 元"], 0, "x−45=12，x=57。"],
    ["2 支筆與 1 本筆記本共 85 元，筆每支 20 元，筆記本幾元？", ["45 元", "65 元", "25 元", "40 元"], 0, "85−40=45。"],
    ["存 500 元後共有 780 元，原本有多少？", ["280 元", "1280 元", "500 元", "780 元"], 0, "x+500=780。"]
  ],
  "linear-equation-rate-problem": [
    ["以每小時 60 公里走 3 小時，共走幾公里？", ["180 公里", "63 公里", "20 公里", "120 公里"], 0, "60×3=180。"],
    ["120 公里以 40 公里/時前進，需幾小時？", ["3 小時", "4 小時", "2 小時", "80 小時"], 0, "120÷40=3。"],
    ["甲乙相距 90 公里同向而行，甲 50 公里/時、乙 35 公里/時，甲追上乙需幾小時？", ["6 小時", "3 小時", "2 小時", "90 小時"], 0, "90÷(50−35)=6。"],
    ["某車 2 小時走 130 公里，平均速率？", ["65 公里/時", "132 公里/時", "128 公里/時", "260 公里/時"], 0, "130÷2=65。"]
  ],
  "linear-equation-distribution-problem": [
    ["糖果分 6 人，每人 8 顆剩 3 顆，共幾顆？", ["51 顆", "48 顆", "54 顆", "45 顆"], 0, "6×8+3=51。"],
    ["書分 5 堆每堆 12 本，剩 4 本，共幾本？", ["64 本", "60 本", "56 本", "68 本"], 0, "5×12+4=64。"],
    ["x 個蘋果分 4 人每人 7 個，剩 2 個，x 為？", ["30", "28", "26", "32"], 0, "4×7+2=30。"],
    ["分配問題列式時，剩餘應？", ["加在總數關係中", "忽略", "當作減數", "當作除數"], 0, "總數 = 每人×人數 + 剩餘。"]
  ],
  "linear-equation-consecutive-integers": [
    ["三連續整數和 24，最小者為？", ["7", "8", "9", "6"], 0, "x+(x+1)+(x+2)=24，x=7。"],
    ["兩連續偶數和 26，較小者為？", ["12", "14", "13", "10"], 0, "x+(x+2)=26，x=12。"],
    ["某數的 2 倍加 1 等於下一個整數，某數為？", ["0", "1", "−1", "2"], 0, "2x+1=x+1，解得 x=0。"],
    ["四連續整數和 38，最大者為？", ["11", "10", "12", "9"], 0, "x+(x+1)+(x+2)+(x+3)=38，x=8，最大 11。"]
  ],
  "linear-equation-reasonableness": [
    ["解得 x = −5 表示長度 5 公分，是否合理？", ["不合理，長度通常取正值", "一定合理", "無法判斷", "只看代數"], 0, "幾何量需檢查是否合理。"],
    ["年齡解得 x = −3，是否合理？", ["不合理", "合理", "無法判斷", "看題目"], 0, "年齡不可為負。"],
    ["解應用題最後一步應？", ["檢查解是否符合題意", "直接寫答案", "只驗算代數", "改題目"], 0, "合理性檢查不可少。"],
    ["人數解得 2.5 人，是否合理？", ["不合理，人數應為整數", "合理", "看情況", "可四捨五入"], 0, "人數通常需為正整數。"]
  ],
  "linear-equation-plan-comparison": [
    ["方案 A：月租 300 元 + 每通 2 元；方案 B：月租 500 元 + 每通 1 元。通話 150 次時哪較省？", ["方案 A", "方案 B", "相同", "無法比"], 0, "A=600 元，B=650 元。"],
    ["同一商品甲店 2 件 500 元、乙店 3 件 720 元，買 6 件哪較省？", ["乙店", "甲店", "相同", "無法比"], 0, "甲 1500 元、乙 1440 元。"],
    ["月租 399 元 vs 499 元，若用量少，通常？", ["月租較低較省", "月租較高較省", "一定相同", "與用量無關"], 0, "用量少時固定費低較有利。"],
    ["比較方案應？", ["依相同使用量計算總費用", "只看單價", "只看月租", "隨機選"], 0, "要在相同條件下比總成本。"]
  ],
  "linear-equation-literacy-context": [
    ["某校節水 20%，原每天 500 公升，現在每天？", ["400 公升", "100 公升", "520 公升", "480 公升"], 0, "500×80%=400。"],
    ["某班捐書，第一天捐 x 本，第二天比第一天多 5 本，共 45 本，x 為？", ["20", "25", "15", "22"], 0, "x+(x+5)=45，x=20。"],
    ["長方形長比寬多 3，周長 26，寬為？", ["5", "8", "10", "13"], 0, "2(x+x+3)=26，x=5。"],
    ["某活動參加費每人 150 元，已有 20 人報名，再 x 人報名後總收入 7500 元，x 為？", ["30", "50", "25", "35"], 0, "150(20+x)=7500，20+x=50，x=30。"]
  ]
};

const COMMON_MISTAKE = {
  "integer-number-classification": "不要看到小數點就當無理數；有限小數仍是有理數。",
  "integer-positive-negative-meaning": "「低於基準」要用負號，不是把數字變小而已。",
  "integer-number-line-position": "左側坐標必須加負號，距離不能直接當坐標。",
  "integer-number-comparison": "兩負數比大小時，絕對值大者反而較小。",
  "integer-opposite-number": "相反數不是倒數，也不是絕對值。",
  "integer-absolute-value-basic": "絕對值結果不會是負數。",
  "integer-absolute-value-distance": "距離用 |a−b|，結果必非負。",
  "integer-addition": "異號相加時看絕對值差，不是直接相加。",
  "integer-subtraction": "減一個負數等於加它的相反數。",
  "integer-multiplication-division": "符號規則：同號正、異號負。",
  "integer-mixed-operations": "先乘除後加減，不要從左到右一路算。",
  "integer-exponent-meaning": "指數表示連乘次數，不是相乘底數與指數。",
  "integer-exponent-laws": "同底數運算只動指數，不要把底數相乘。",
  "integer-scientific-notation": "科學記號係數必須 1≤a<10。",
  "integer-literacy-context": "情境題先定正負方向再列式。",
  "fraction-factor-multiple": "因數較小、倍數較大，不要搞反。",
  "fraction-prime-composite": "1 既不是質數也不是合數。",
  "fraction-prime-factorization": "標準分解式只用質因數連乘。",
  "fraction-gcd-basic": "GCD 取各質因數較小次方。",
  "fraction-lcm-basic": "LCM 取各質因數較大次方。",
  "fraction-gcd-application": "分組無剩、每組最多 → 求 GCD。",
  "fraction-lcm-application": "同時再次發生 → 求 LCM。",
  "fraction-compare": "異分母比大小要先通分。",
  "fraction-add-subtract": "分數加減一定要通分。",
  "fraction-multiply-divide": "除法要乘除數的倒數。",
  "fraction-mixed-number": "帶分數化假分數：整數×分母+分子。",
  "fraction-complex-fraction-basic": "繁分數化簡 = 除以分母分數。",
  "fraction-percent-discount": "打折是乘百分率，不是直接減去折數。",
  "fraction-base-quantity": "先找基準量（整體），再列比例。",
  "fraction-literacy-context": "「用去幾分之幾桶」要換算成實際量。",
  "linear-expression-substitution": "代入時要遵守運算順序。",
  "linear-expression-simplify": "只能合併同類項。",
  "linear-equation-balance-property": "移項要變號，且兩邊同運算。",
  "linear-equation-basic-solving": "係數化為 1 時別漏除每一項。",
  "linear-equation-parentheses": "去括號時括號外係數要分配到每一項。",
  "linear-equation-fractions": "去分母時兩邊都要乘。",
  "linear-equation-check-solution": "檢驗要算兩邊，不是只看一邊。",
  "linear-equation-age-problem": "「幾年後」兩人都要加同一年數。",
  "linear-equation-money-problem": "找零 = 付錢 − 花費。",
  "linear-equation-rate-problem": "距離 = 速率 × 時間。",
  "linear-equation-distribution-problem": "剩餘要加回總數。",
  "linear-equation-consecutive-integers": "連續整數差 1，連續偶數差 2。",
  "linear-equation-reasonableness": "解要符合實際意義（正數、整數等）。",
  "linear-equation-plan-comparison": "比方案要在相同使用量下算總費。",
  "linear-equation-literacy-context": "節省百分比是乘 (1−率)，不是直接減百分點當公升。"
};

function defaultSteps(explanation) {
  return ["依題意整理已知條件。", explanation.replace(/。$/, "") + "。"];
}

function buildQuestionsForUnit(unitId, pilotDef) {
  const skills = flattenSkills(pilotDef);
  const questions = [];
  skills.forEach((s, i) => {
    const templates = Q[s.skillId];
    if (!templates || templates.length !== 4) throw new Error(`Need 4 questions for ${s.skillId}`);
    templates.forEach((t, vi) => {
      const [text, choices, answerIndex, explanation] = t;
      const diff = s.skillId.includes("literacy") ? (vi % 2 ? "literacy" : "standard") : (vi < 2 ? "basic" : "standard");
      questions.push(mkQuestion({
        unitId,
        numericUnitId: pilotDef.numericId,
        topicId: s.topicId,
        skillId: s.skillId,
        skillSeq: i + 1,
        variant: vi + 1,
        difficulty: diff,
        text,
        choices,
        answerIndex,
        explanation,
        steps: defaultSteps(explanation),
        commonMistake: COMMON_MISTAKE[s.skillId] || "仔細審題並逐步檢查。",
        concept: explanation.split("。")[0] + "。",
        tags: [pilotDef.domain, s.title, diff === "basic" ? "基礎概念" : "應用"],
        estimatedTimeSec: diff === "literacy" ? 75 : 45
      }));
    });
  });
  return questions;
}

function buildLecturesForUnit(unitId, pilotDef) {
  const skills = flattenSkills(pilotDef);
  return skills.map(s => {
    const qs = Q[s.skillId].map(([q, , , exp]) => ({ question: q, explanation: exp }));
    return mkLecture({
      unitId,
      topicId: s.topicId,
      skillId: s.skillId,
      title: s.title,
      concept: `${s.title}：${qs[0].explanation}`,
      formula: s.skillId.includes("scientific") ? "a×10ⁿ（1≤a<10）" : s.skillId.includes("pythagorean") ? "a²+b²=c²" : "",
      stepGuide: ["先讀懂題目中的數學關係。", "依公式或運算規則逐步計算。", "最後檢查答案是否合理。"],
      examples: qs.slice(0, 2),
      commonMistakes: [COMMON_MISTAKE[s.skillId] || "計算時漏看符號或運算順序。"],
      quizLink: { unitId, skillId: s.skillId }
    });
  });
}

function loadV1Taxonomy() {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(root, "quiz-taxonomy.js"), "utf8"), ctx);
  return ctx.window.QUIZ_TAXONOMY;
}

// Complete g7-1-c1～c3 topic → v2 skill fallback (Phase 2A detailed map)
const V1_TOPIC_FALLBACK = {
  "g7-1-c1/number-classification": "integer-number-classification",
  "g7-1-c1/number-line": "integer-number-line-position",
  "g7-1-c1/opposite-and-absolute-overview": "integer-number-comparison",
  "g7-1-c1/signed-number-concept": "integer-positive-negative-meaning",
  "g7-1-c1/opposite-number-concept": "integer-opposite-number",
  "g7-1-c1/absolute-value-concept": "integer-absolute-value-basic",
  "g7-1-c1/opposite-and-absolute-evaluation": "integer-absolute-value-basic",
  "g7-1-c1/absolute-value-position": "integer-absolute-value-distance",
  "g7-1-c1/addition-operation": "integer-addition",
  "g7-1-c1/subtraction-operation": "integer-subtraction",
  "g7-1-c1/multiplication-division-operation": "integer-multiplication-division",
  "g7-1-c1/operation-rules": "integer-mixed-operations",
  "g7-1-c1/four-operations": "integer-mixed-operations",
  "g7-1-c1/distance-and-midpoint": "integer-absolute-value-distance",
  "g7-1-c1/integer-arithmetic": "integer-mixed-operations",
  "g7-1-c1/distributive-law": "integer-mixed-operations",
  "g7-1-c1/commutative-associative-law": "integer-mixed-operations",
  "g7-1-c1/operation-order": "integer-mixed-operations",
  "g7-1-c1/absolute-difference-distance": "integer-absolute-value-distance",
  "g7-1-c1/arithmetic-application": "integer-literacy-context",
  "g7-1-c1/exponent-notation": "integer-exponent-meaning",
  "g7-1-c1/zero-negative-exponent": "integer-exponent-meaning",
  "g7-1-c1/exponent-comparison": "integer-exponent-laws",
  "g7-1-c1/exponent-laws": "integer-exponent-laws",
  "g7-1-c1/scientific-notation": "integer-scientific-notation",
  "g7-1-c1/scientific-notation-digits": "integer-scientific-notation",
  "g7-1-c1/scientific-notation-comparison": "integer-scientific-notation",
  "g7-1-c1/exponent-arithmetic": "integer-exponent-laws",
  "g7-1-c1/exponent-law-calculation": "integer-exponent-laws",
  "g7-1-c1/exponent-size-comparison": "integer-exponent-laws",
  "g7-1-c2/factor-and-multiple": "fraction-factor-multiple",
  "g7-1-c2/divisibility-rules": "fraction-factor-multiple",
  "g7-1-c2/prime-and-composite": "fraction-prime-composite",
  "g7-1-c2/prime-factor": "fraction-prime-factorization",
  "g7-1-c2/prime-factorization-standard": "fraction-prime-factorization",
  "g7-1-c2/factor-identification-application": "fraction-factor-multiple",
  "g7-1-c2/multiple-identification-application": "fraction-factor-multiple",
  "g7-1-c2/prime-composite-identification": "fraction-prime-composite",
  "g7-1-c2/standard-form-application": "fraction-prime-factorization",
  "g7-1-c2/factor-multiple-standard-form": "fraction-prime-factorization",
  "g7-1-c2/common-factor-gcd": "fraction-gcd-basic",
  "g7-1-c2/coprime-concept": "fraction-gcd-basic",
  "g7-1-c2/common-multiple-lcm": "fraction-lcm-basic",
  "g7-1-c2/coprime-identification": "fraction-gcd-basic",
  "g7-1-c2/find-gcd-and-lcm": "fraction-gcd-basic",
  "g7-1-c2/gcd-compare-size": "fraction-gcd-basic",
  "g7-1-c2/lcm-find-dividend": "fraction-lcm-basic",
  "g7-1-c2/gcd-application": "fraction-gcd-application",
  "g7-1-c2/lcm-application": "fraction-lcm-application",
  "g7-1-c2/gcd-lcm-evaluation": "fraction-lcm-basic",
  "g7-1-c2/fraction-basics": "fraction-mixed-number",
  "g7-1-c2/positive-fraction-compare": "fraction-compare",
  "g7-1-c2/fraction-add-subtract": "fraction-add-subtract",
  "g7-1-c2/fraction-multiply-divide": "fraction-multiply-divide",
  "g7-1-c2/fraction-four-operations": "fraction-complex-fraction-basic",
  "g7-1-c2/fraction-compare-application": "fraction-percent-discount",
  "g7-1-c2/fraction-four-ops-application": "fraction-literacy-context",
  "g7-1-c3/literal-expression-setup": "linear-expression-substitution",
  "g7-1-c3/multiplication-shorthand": "linear-expression-substitution",
  "g7-1-c3/linear-expression-concept": "linear-expression-simplify",
  "g7-1-c3/linear-expression-operation": "linear-expression-simplify",
  "g7-1-c3/linear-expression-value": "linear-expression-substitution",
  "g7-1-c3/linear-expression-simplify": "linear-expression-simplify",
  "g7-1-c3/linear-expression-word-setup": "linear-expression-substitution",
  "g7-1-c3/linear-expression-setup-and-evaluate": "linear-expression-substitution",
  "g7-1-c3/linear-expression-application": "linear-equation-age-problem",
  "g7-1-c3/linear-equation-concept": "linear-equation-basic-solving",
  "g7-1-c3/linear-equation-solution": "linear-equation-check-solution",
  "g7-1-c3/balance-and-transposition": "linear-equation-balance-property",
  "g7-1-c3/solve-linear-equation": "linear-equation-basic-solving",
  "g7-1-c3/word-problem-steps": "linear-equation-rate-problem",
  "g7-1-c3/balance-property-concept": "linear-equation-balance-property",
  "g7-1-c3/solution-and-parameter": "linear-equation-check-solution",
  "g7-1-c3/linear-equation-word-setup": "linear-equation-consecutive-integers",
  "g7-1-c3/distribution-problem": "linear-equation-distribution-problem",
  "g7-1-c3/water-saving-problem": "linear-equation-literacy-context",
  "g7-1-c3/shopping-problem": "linear-equation-money-problem",
  "g7-1-c3/plan-comparison-problem": "linear-equation-plan-comparison",
  "g7-1-c3/discount-problem": "linear-equation-money-problem"
};

function skillMeta(syllabus, skillId) {
  for (const u of syllabus.units) for (const t of u.topics) for (const s of t.skills) {
    if (s.skillId === skillId) return { v2UnitId: u.unitId, v2TopicId: t.topicId, v2SkillId: s.skillId };
  }
  return null;
}

function buildMigrationMap(syllabus, v1Tax) {
  const unitMap = {
    "1": ["u01"], "2": ["u01"], "3": ["u02"], "4": ["u02"], "5": ["u03"],
    "6": ["u04"], "7": ["u05"], "8": ["u06"], "9": ["u07"], "10": ["u09"],
    "11": ["u08"], "12": ["u10"], "13": ["u11"], "14": ["u12"], "15": ["u13"],
    "16": ["u14"], "17": ["u15"], "18": ["u16"], "19": ["u17"], "20": ["u22"],
    "21": ["u18"], "22": ["u19"], "23": ["u20"], "24": ["u21"], "25": ["u22"],
    "26": ["u23"], "28": ["u09"]
  };
  const skillByLegacy = new Map();
  for (const u of syllabus.units) {
    for (const t of u.topics) for (const s of t.skills) {
      for (const ref of s.legacyRefs || []) skillByLegacy.set(ref, { v2UnitId: u.unitId, v2TopicId: t.topicId, v2SkillId: s.skillId });
    }
  }
  const topicMap = {};
  const detailedQuizzes = new Set(["g7-1-c1", "g7-1-c2", "g7-1-c3"]);
  for (const [quizId, chapter] of Object.entries(v1Tax)) {
    for (const sec of chapter.sections) for (const tp of sec.topics) {
      const key = `${quizId}/${tp.id}`;
      let hit = skillByLegacy.get(key);
      if (!hit && V1_TOPIC_FALLBACK[key]) hit = skillMeta(syllabus, V1_TOPIC_FALLBACK[key]);
      if (detailedQuizzes.has(quizId) && hit) {
        topicMap[key] = { ...hit, action: "reuse-after-schema-conversion", notes: "概念可沿用，但需轉成 v2 schema。" };
      } else if (hit) {
        topicMap[key] = { ...hit, action: "reuse-after-schema-conversion", status: "pending-detailed-review", notes: "粗略對應，待 Phase B 細審。" };
      }
    }
  }
  topicMap["g8-1-c5/*"] = { v2UnitId: "u09", v2TopicId: "u09-data-display", v2SkillId: "frequency-table", action: "rewrite-required", reason: "no-v1-taxonomy", notes: "g8-1-c5 無 v1 taxonomy，需重寫。" };
  return {
    version: "2.0.0-draft",
    unitMap,
    topicMap,
    unmappedLegacyTopics: [],
    deprecatedLegacyTopics: [{ legacyUnitId: 27, title: "綜合情境建模與非選擇題表達", action: "strategy-literacy-tags-only", notes: "不作 v2 正式單元，改為全站 strategy/literacy tags。" }]
  };
}

function main() {
  const unitsMeta = loadUnitsMeta();
  const syllabus = buildSyllabus(unitsMeta);
  fs.writeFileSync(path.join(v2Dir, "math-syllabus-v2.js"), writeJs("MATH_SYLLABUS_V2", syllabus));

  for (const uid of ["u01", "u02", "u03"]) {
    const pilot = PILOT[uid];
    const questions = buildQuestionsForUnit(uid, pilot);
    const lectures = buildLecturesForUnit(uid, pilot);
    fs.writeFileSync(path.join(v2Dir, `math-question-bank-v2-${uid}.js`), writeJs(`MATH_QUESTION_BANK_V2_${uid.toUpperCase()}`, questions));
    fs.writeFileSync(path.join(v2Dir, `math-lecture-v2-${uid}.js`), writeJs(`MATH_LECTURE_V2_${uid.toUpperCase()}`, lectures));
    console.log(uid, questions.length, "questions", lectures.length, "lectures");
  }

  const v1Tax = loadV1Taxonomy();
  const migration = buildMigrationMap(syllabus, v1Tax);
  fs.writeFileSync(path.join(v2Dir, "math-migration-map.js"), writeJs("MATH_MIGRATION_MAP", migration));
  console.log("migration topicMap", Object.keys(migration.topicMap).length);
}

main();
