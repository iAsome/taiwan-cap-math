import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { skill, topic, unit, writeJs } from "./v2-shared.mjs";
import { buildAllPilotContent } from "./v2-pilot-generators.mjs";
import { buildU04Content } from "./v2-u04-generators.mjs";
import { buildU05Content } from "./v2-u05-generators.mjs";
import {
  SKILL_MINIMUMS,
  EXTRA_SKILLS,
  sanitizeSkillLegacyRefs,
  expandSyllabusUnit
} from "./v2-syllabus-expand.mjs";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const v2Dir = path.join(root, "v2");

const PILOT = {
  u01: {
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

const CAP_U04 = "限國中會考二元一次聯立方程式；不含矩陣、行列式、三元以上、高中消去法。";
const CAP_U05 = "限國中會考平面直角坐標系；全文字描述，不用圖片；不含三角函數、向量、矩陣、圓錐曲線、高中解析幾何。";
const skill12 = (skillId, title, topicId, legacyRefs = [], extra = {}) =>
  skill(skillId, title, topicId, legacyRefs, {
    questionTarget: 12,
    difficultyBands: ["basic", "standard", "advanced", "literacy"],
    capBoundary: extra.capBoundary ?? CAP_U04,
    notes: extra.notes ?? "會考二元一次聯立方程式基礎範圍。",
    ...extra
  });
const skill12Coord = (skillId, title, topicId, legacyRefs = [], extra = {}) =>
  skill(skillId, title, topicId, legacyRefs, {
    questionTarget: 12,
    difficultyBands: ["basic", "standard", "advanced", "literacy"],
    capBoundary: CAP_U05,
    notes: extra.notes ?? "會考坐標平面基礎；以文字描述點、線、距離與圖形。",
    ...extra
  });

/** Phase 2B: full bank units (12 questions/skill) */
const FULL_BANK = {
  u04: {
    topics: [
      topic("u04-system-basics", "二元一次方程式基礎", [
        skill12("system-two-variable-equation-definition", "二元一次方程式的判斷", "u04-system-basics",
          ["g7-2-c1/two-variable-linear-equation"], { notes: "判斷是否為二元一次方程式；排除 xy、x²、1/x 等非一次形式。" }),
        skill12("system-ordered-pair-solution-check", "有序數對與解的判斷", "u04-system-basics",
          ["g7-2-c1/two-variable-equation-solution"], { notes: "代入 (x,y) 檢驗是否為方程式的解；注意順序。" }),
        skill12("system-solution-meaning", "聯立方程式解的意義", "u04-system-basics",
          ["g7-2-c1/linear-system-solution-concept"], { notes: "解須同時滿足兩式；可反求參數。" })
      ]),
      topic("u04-system-methods", "解聯立方程式", [
        skill12("system-substitution-method", "代入消去法", "u04-system-methods",
          ["g7-2-c1/special-linear-system"], { notes: "先解出單一未知數再代入另一式。" }),
        skill12("system-elimination-method", "加減消去法", "u04-system-methods",
          ["g7-2-c1/solve-linear-system"], { notes: "係數相同相減、相反相加消去一未知數。" }),
        skill12("system-elimination-scaling", "係數放大後消去", "u04-system-methods",
          [], { notes: "兩式同乘適當倍數使係數可消去；整式每一項都要乘。" }),
        skill12("system-special-cases", "無解、唯一解、無限多解", "u04-system-methods",
          ["g7-2-c1/special-linear-system"], { notes: "消去後 0=0 表無限多解；0=非0 表無解。" })
      ]),
      topic("u04-system-apps", "聯立方程式應用", [
        skill12("system-word-setup-basic", "情境列聯立方程式", "u04-system-apps",
          ["g7-2-c1/system-word-problem-steps"], { notes: "設 x、y 並依總數、總價、差額列兩式。" }),
        skill12("system-chicken-rabbit-problem", "雞兔同籠問題", "u04-system-apps",
          ["g7-2-c1/system-quantity-problem"], { notes: "頭數一式、腳數一式；解須為非負整數。" }),
        skill12("system-ticket-price-problem", "票價問題", "u04-system-apps",
          [], { notes: "成人票、學生票；張數總和與金額總和各列一式。" }),
        skill12("system-quantity-price-problem", "數量與總價問題", "u04-system-apps",
          ["g7-2-c1/two-variable-expression-word-setup"], { notes: "兩種商品數量與單價；總數量、總金額。" }),
        skill12("system-rate-problem", "速率與行程問題", "u04-system-apps",
          ["g7-2-c1/system-rate-problem"], { notes: "路程=速率×時間；相向或同向須分清楚。" }),
        skill12("system-mixture-basic", "基礎混合問題", "u04-system-apps",
          [], { notes: "會考基本混合（重量、價格、濃度文字題）；不做高中化學計量。" }),
        skill12("system-literacy-context", "聯立方程式素養題", "u04-system-apps",
          [], { notes: "生活情境、表格、活動費用；仍須可列二元一次聯立。", difficultyBands: ["standard", "literacy"] })
      ])
    ]
  },
  u05: {
    topics: [
      topic("u05-coordinate-basics", "坐標平面基礎", [
        skill12Coord("coordinate-point-reading", "坐標讀法與點的位置", "u05-coordinate-basics",
          ["g7-2-c2/coordinate-plane"], { notes: "坐標 (x,y) 讀法；x 左右、y 上下；順序不可對調。" }),
        skill12Coord("coordinate-quadrant", "象限判斷", "u05-coordinate-basics",
          ["g7-2-c2/coordinate-plane"], { notes: "四象限正負號；坐標軸上的點不屬任何象限。" }),
        skill12Coord("coordinate-axis-points", "坐標軸上的點", "u05-coordinate-basics",
          ["g7-2-c2/distance-to-axes"], { notes: "x 軸 y=0、y 軸 x=0；點到坐標軸距離為 |x| 或 |y|。" }),
        skill12Coord("coordinate-plot-description", "描點與位置描述", "u05-coordinate-basics",
          ["g7-2-c2/point-coordinates"], { notes: "文字描述移動路線；網格步數；坐標順序。" })
      ]),
      topic("u05-coordinate-ops", "坐標平面運算", [
        skill12Coord("coordinate-translation", "點的平移", "u05-coordinate-ops",
          ["g7-2-c2/coordinate-plane"], { notes: "左右改 x、上下改 y；多步平移與反推原點。" }),
        skill12Coord("coordinate-horizontal-vertical-distance", "水平距離與垂直距離", "u05-coordinate-ops",
          ["g7-2-c2/point-coordinates"], { notes: "同 y 求水平距 |x1-x2|；同 x 求垂直距 |y1-y2|；不用根號公式。" }),
        skill12Coord("coordinate-rectangle-area", "坐標平面中的長方形與面積", "u05-coordinate-ops",
          [], { notes: "軸平行長方形；寬高由坐標差；面積與周長。" })
      ]),
      topic("u05-linear-graph", "直線與方程式", [
        skill12Coord("coordinate-linear-equation-graph", "二元一次方程式圖形", "u05-linear-graph",
          ["g7-2-c2/coordinate-plane"], { notes: "二元一次方程式圖形是直線；x=常數垂直、y=常數水平。" }),
        skill12Coord("coordinate-point-on-line", "判斷點是否在直線上", "u05-linear-graph",
          ["g7-2-c2/point-coordinates"], { notes: "將 (x,y) 代入方程式；左右相等則在直線上。" }),
        skill12Coord("coordinate-intercepts", "x 截距與 y 截距", "u05-linear-graph",
          [], { notes: "x 截距令 y=0；y 截距令 x=0；區分截距值與截距點坐標。" }),
        skill12Coord("coordinate-line-intersection", "兩直線交點與聯立方程式", "u05-linear-graph",
          ["g7-2-c2/coordinate-plane"], { notes: "交點坐標同時滿足兩式；平行無交點、重合無限多解。" })
      ]),
      topic("u05-coordinate-literacy", "坐標素養", [
        skill12Coord("coordinate-literacy-context", "坐標素養題", "u05-coordinate-literacy",
          [], { notes: "地圖格線、座位表、校園方位、棋盤移動；全文字描述。", difficultyBands: ["standard", "literacy"] })
      ])
    ]
  }
};

// Base U05–U23 from existing syllabus (preserves UTF-8 titles); expanded at build time
function loadBaseSyllabusOnly() {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(v2Dir, "math-syllabus-v2.js"), "utf8"), ctx);
  return ctx.window.MATH_SYLLABUS_V2.units.filter(u => !["u01", "u02", "u03", "u04", "u05"].includes(u.unitId));
}

function loadUnitsMeta() {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(v2Dir, "math-units-v2.js"), "utf8"), ctx);
  return ctx.window.MATH_UNITS_V2;
}

function loadV1TopicKeys() {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(root, "quiz-taxonomy.js"), "utf8"), ctx);
  const keys = new Set();
  for (const [quizId, chapter] of Object.entries(ctx.window.QUIZ_TAXONOMY)) {
    for (const sec of chapter.sections) for (const tp of sec.topics) keys.add(`${quizId}/${tp.id}`);
  }
  return keys;
}

function loadV1Taxonomy() {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(root, "quiz-taxonomy.js"), "utf8"), ctx);
  return ctx.window.QUIZ_TAXONOMY;
}

function sanitizeUnitTopics(unitDef, v1Keys, invalidCollector) {
  return {
    ...unitDef,
    topics: unitDef.topics.map(t => ({
      ...t,
      skills: sanitizeSkillLegacyRefs(t.skills, v1Keys, invalidCollector)
    }))
  };
}

function dedupeUnitSkills(unitDef) {
  const seen = new Set();
  return {
    ...unitDef,
    topics: unitDef.topics.map(t => ({
      ...t,
      skills: t.skills.filter(s => {
        if (seen.has(s.skillId)) return false;
        seen.add(s.skillId);
        return true;
      })
    }))
  };
}

function buildSyllabus(unitsMeta, v1Keys) {
  const invalidLegacyRefs = [];
  const units = unitsMeta.map(u => {
    if (PILOT[u.unitId]) {
      const def = sanitizeUnitTopics({ unitId: u.unitId, title: u.title, topics: PILOT[u.unitId].topics }, v1Keys, invalidLegacyRefs);
      return def;
    }
    if (FULL_BANK[u.unitId]) {
      const def = sanitizeUnitTopics({ unitId: u.unitId, title: u.title, topics: FULL_BANK[u.unitId].topics }, v1Keys, invalidLegacyRefs);
      return def;
    }
    const base = dedupeUnitSkills(loadBaseSyllabusOnly().find(x => x.unitId === u.unitId));
    if (!base) throw new Error(`missing base syllabus for ${u.unitId}`);
    const expanded = expandSyllabusUnit(base, EXTRA_SKILLS[u.unitId] || []);
    const def = sanitizeUnitTopics({ unitId: u.unitId, title: u.title, topics: expanded.topics }, v1Keys, invalidLegacyRefs);
    return def;
  });
  return {
    version: "2.0.0-draft-r1-u05",
    sourceScope: "CAP_108_JUNIOR_MATH",
    units,
    invalidLegacyRefs
  };
}

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
  "g7-1-c3/discount-problem": "linear-equation-money-problem",
  "g7-2-c1/two-variable-linear-equation": "system-two-variable-equation-definition",
  "g7-2-c1/two-variable-linear-expression": "system-two-variable-equation-definition",
  "g7-2-c1/two-variable-equation-solution": "system-ordered-pair-solution-check",
  "g7-2-c1/two-variable-equation-solution-evaluate": "system-ordered-pair-solution-check",
  "g7-2-c1/linear-system-concept": "system-solution-meaning",
  "g7-2-c1/linear-system-solution-concept": "system-solution-meaning",
  "g7-2-c1/solve-linear-system": "system-elimination-method",
  "g7-2-c1/special-linear-system": "system-substitution-method",
  "g7-2-c1/system-word-problem-steps": "system-word-setup-basic",
  "g7-2-c1/system-quantity-problem": "system-chicken-rabbit-problem",
  "g7-2-c1/system-rate-problem": "system-rate-problem",
  "g7-2-c1/system-solution-parameter": "system-solution-meaning",
  "g7-2-c1/two-variable-expression-word-setup": "system-quantity-price-problem",
  "g7-2-c1/two-variable-equation-word-application": "system-word-setup-basic",
  "g7-2-c1/two-variable-linear-expression": "system-two-variable-equation-definition",
  "g7-2-c1/two-variable-expression-simplify": "system-two-variable-equation-definition",
  "g7-2-c1/two-variable-expression-value": "system-ordered-pair-solution-check",
  "g7-2-c1/two-variable-expression-setup-evaluate": "system-ordered-pair-solution-check",
  "g7-2-c1/two-variable-equation-solution-evaluate": "system-ordered-pair-solution-check",
  "g7-2-c1/two-variable-integer-solutions": "system-ordered-pair-solution-check",
  "g7-2-c1/linear-system-concept": "system-solution-meaning",
  "g7-2-c1/system-discount-problem": "system-quantity-price-problem",
  "g7-2-c1/system-digit-problem": "system-word-setup-basic",
  "g7-2-c2/coordinate-plane": "coordinate-point-reading",
  "g7-2-c2/point-coordinates": "coordinate-plot-description",
  "g7-2-c2/distance-to-axes": "coordinate-axis-points"
};

function skillMeta(syllabus, skillId) {
  for (const u of syllabus.units) {
    for (const t of u.topics) for (const s of t.skills) {
      if (s.skillId === skillId) return { v2UnitId: u.unitId, v2TopicId: t.topicId, v2SkillId: s.skillId };
    }
  }
  return null;
}

function buildMigrationMap(syllabus, v1Tax) {
  const { invalidLegacyRefs, units, ...rest } = syllabus;
  const cleanSyllabus = { ...rest, units };
  const unitMap = {
    "1": ["u01"], "2": ["u01"], "3": ["u02"], "4": ["u02"], "5": ["u03"],
    "6": ["u04"], "7": ["u05"], "8": ["u06"], "9": ["u07"], "10": ["u09"],
    "11": ["u08"], "12": ["u10"], "13": ["u11"], "14": ["u12"], "15": ["u13"],
    "16": ["u14"], "17": ["u15"], "18": ["u16"], "19": ["u17"], "20": ["u22"],
    "21": ["u18"], "22": ["u19"], "23": ["u20"], "24": ["u21"], "25": ["u22"],
    "26": ["u23"], "28": ["u09"]
  };
  const skillByLegacy = new Map();
  for (const u of units) {
    for (const t of u.topics) for (const s of t.skills) {
      for (const ref of s.legacyRefs || []) skillByLegacy.set(ref, { v2UnitId: u.unitId, v2TopicId: t.topicId, v2SkillId: s.skillId });
    }
  }
  const topicMap = {};
  const detailedQuizzes = new Set(["g7-1-c1", "g7-1-c2", "g7-1-c3", "g7-2-c1"]);
  for (const [quizId, chapter] of Object.entries(v1Tax)) {
    for (const sec of chapter.sections) for (const tp of sec.topics) {
      const key = `${quizId}/${tp.id}`;
      let hit = skillByLegacy.get(key);
      if (!hit && V1_TOPIC_FALLBACK[key]) hit = skillMeta(cleanSyllabus, V1_TOPIC_FALLBACK[key]);
      if (detailedQuizzes.has(quizId) && hit) {
        topicMap[key] = { ...hit, action: "reuse-after-schema-conversion", notes: "概念可沿用，但需轉成 v2 schema。" };
      } else if (hit) {
        topicMap[key] = { ...hit, action: "reuse-after-schema-conversion", status: "pending-detailed-review", notes: "粗略對應，待 Phase B 細審。" };
      }
    }
  }
  topicMap["g8-1-c5/*"] = {
    v2UnitId: "u09", v2TopicId: "u09-data-display", v2SkillId: "histogram-read",
    action: "rewrite-required", reason: "no-v1-taxonomy", notes: "g8-1-c5 無 v1 taxonomy，需重寫。"
  };
  return {
    version: "2.0.0-draft-r1-u05",
    unitMap,
    topicMap,
    invalidLegacyRefs,
    unmappedLegacyTopics: [],
    deprecatedLegacyTopics: [{ legacyUnitId: 27, title: "綜合情境建模與非選擇題表達", action: "strategy-literacy-tags-only", notes: "不作 v2 正式單元，改為全站 strategy/literacy tags。" }]
  };
}

function writeGapReport(syllabus) {
  const lines = ["# v2 Syllabus Gap Report (Phase 2A-R1)", "", "| unitId | 目前 skill 數 | 最低要求 | 達標 | 備註 |", "|--------|--------------|----------|------|------|"];
  let total = 0;
  for (const u of syllabus.units) {
    const n = u.topics.reduce((a, t) => a + t.skills.length, 0);
    total += n;
    const min = SKILL_MINIMUMS[u.unitId] || 0;
    const ok = n >= min ? "是" : "否";
    const bank = ["u01", "u02", "u03"].includes(u.unitId) ? "pilot 4 題/skill"
      : ["u04", "u05"].includes(u.unitId) ? "full 12 題/skill" : "待 Phase 2B 生成";
    lines.push(`| ${u.unitId} | ${n} | ${min} | ${ok} | ${bank} |`);
  }
  lines.push("", `**總 skill 數：${total}**（最低要求 330）`, "", "## 超範圍禁止", "- 高中微積分、複數、排列組合 nPr/nCr、三角函數深題", "- 圖片/SVG/canvas 題", "- 非選擇手寫作答", "", "## invalidLegacyRefs 已自 syllabus 移除", `${(syllabus.invalidLegacyRefs || []).length} 條`, "");
  fs.writeFileSync(path.join(v2Dir, "math-syllabus-v2-gap-report.md"), lines.join("\n"));
}

function main() {
  const unitsMeta = loadUnitsMeta();
  const v1Keys = loadV1TopicKeys();
  const syllabusFull = buildSyllabus(unitsMeta, v1Keys);
  const { invalidLegacyRefs, ...syllabusPublic } = syllabusFull;
  fs.writeFileSync(path.join(v2Dir, "math-syllabus-v2.js"), writeJs("MATH_SYLLABUS_V2", syllabusPublic));
  fs.writeFileSync(path.join(v2Dir, "math-migration-invalid-legacy-refs.json"), JSON.stringify(invalidLegacyRefs, null, 2));

  const pilot = buildAllPilotContent();
  for (const uid of ["u01", "u02", "u03"]) {
    fs.writeFileSync(path.join(v2Dir, `math-question-bank-v2-${uid}.js`), writeJs(`MATH_QUESTION_BANK_V2_${uid.toUpperCase()}`, pilot.questionsByUnit[uid]));
    fs.writeFileSync(path.join(v2Dir, `math-lecture-v2-${uid}.js`), writeJs(`MATH_LECTURE_V2_${uid.toUpperCase()}`, pilot.lecturesByUnit[uid]));
    console.log(uid, pilot.questionsByUnit[uid].length, "questions", pilot.lecturesByUnit[uid].length, "lectures");
  }

  const u04 = buildU04Content();
  fs.writeFileSync(path.join(v2Dir, "math-question-bank-v2-u04.js"), writeJs("MATH_QUESTION_BANK_V2_U04", u04.questions));
  fs.writeFileSync(path.join(v2Dir, "math-lecture-v2-u04.js"), writeJs("MATH_LECTURE_V2_U04", u04.lectures));
  console.log("u04", u04.questions.length, "questions", u04.lectures.length, "lectures");

  const u05 = buildU05Content();
  fs.writeFileSync(path.join(v2Dir, "math-question-bank-v2-u05.js"), writeJs("MATH_QUESTION_BANK_V2_U05", u05.questions));
  fs.writeFileSync(path.join(v2Dir, "math-lecture-v2-u05.js"), writeJs("MATH_LECTURE_V2_U05", u05.lectures));
  console.log("u05", u05.questions.length, "questions", u05.lectures.length, "lectures");

  const migration = buildMigrationMap(syllabusFull, loadV1Taxonomy());
  fs.writeFileSync(path.join(v2Dir, "math-migration-map.js"), writeJs("MATH_MIGRATION_MAP", migration));
  writeGapReport(syllabusFull);
  const skillCount = syllabusPublic.units.reduce((a, u) => a + u.topics.reduce((b, t) => b + t.skills.length, 0), 0);
  console.log("syllabus skills", skillCount, "invalidLegacyRefs", invalidLegacyRefs.length);
}

main();
