import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const v2 = path.join(root, "v2");

export function loadV2Context(extraFiles = []) {
  const ctx = vm.createContext({ window: {}, console, globalThis: {} });
  const files = [
    "math-units-v2.js",
    "math-syllabus-v2.js",
    "math-question-schema-v2.js",
    "math-migration-map.js",
    "math-question-bank-v2-u01.js",
    "math-question-bank-v2-u02.js",
    "math-question-bank-v2-u03.js",
    "math-lecture-v2-u01.js",
    "math-lecture-v2-u02.js",
    "math-lecture-v2-u03.js",
    "math-quiz-blueprints-v2.js",
    "math-engine-v2.js",
    ...extraFiles
  ];
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
