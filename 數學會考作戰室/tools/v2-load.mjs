import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const v2 = path.join(root, "v2");

const CORE_FILES = [
  "math-units-v2.js",
  "math-syllabus-v2.js",
  "math-question-schema-v2.js",
  "math-migration-map.js",
  "math-quiz-blueprints-v2.js",
  "math-engine-v2.js"
];

/** Optional bank/lecture files — missing units (u05+) do not fail load */
function discoverOptionalBankLectureFiles() {
  const optional = [];
  for (let i = 1; i <= 23; i++) {
    const uid = `u${String(i).padStart(2, "0")}`;
    const bank = `math-question-bank-v2-${uid}.js`;
    const lec = `math-lecture-v2-${uid}.js`;
    if (fs.existsSync(path.join(v2, bank))) optional.push(bank);
    if (fs.existsSync(path.join(v2, lec))) optional.push(lec);
  }
  return optional;
}

export function loadV2Context(extraFiles = []) {
  const ctx = vm.createContext({ window: {}, console, globalThis: {} });
  const files = [...CORE_FILES, ...discoverOptionalBankLectureFiles(), ...extraFiles];
  for (const f of files) {
    const p = path.join(v2, f);
    if (!fs.existsSync(p)) throw new Error(`missing ${f}`);
    vm.runInContext(fs.readFileSync(p, "utf8"), ctx, { filename: f });
  }
  return ctx.window;
}

export function loadV1Taxonomy() {
  const ctx = vm.createContext({ window: {} });
  vm.runInContext(fs.readFileSync(path.join(root, "quiz-taxonomy.js"), "utf8"), ctx);
  return ctx.window.QUIZ_TAXONOMY;
}

export const OLD_TEMPLATE_RE = /小考中此題型固定出現|種子碼決定 10 組凍結變體/;
export const IMAGE_RE = /<img\b|<svg\b|canvas|!\[[^\]]*\]\([^)]+\)/i;
export const FIGURE_RE = /請看下圖|如下圖|如圖所示|見圖|附圖|圖中|如圖(?!形)/;

/** Units with generated question banks (for validators) */
export function loadedBankUnits() {
  const units = [];
  for (let i = 1; i <= 23; i++) {
    const uid = `u${String(i).padStart(2, "0")}`;
    if (fs.existsSync(path.join(v2, `math-question-bank-v2-${uid}.js`))) units.push(uid);
  }
  return units;
}
