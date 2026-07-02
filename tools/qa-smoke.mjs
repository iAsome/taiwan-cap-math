// Automated smoke for Phase 1–3 acceptance: hub links, 9 views × 9 subjects,
// full quiz catalog generation, mock exams, archive explain fields.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";
import { execSync } from "node:child_process";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const errors = [];
const ok = (cond, msg) => { if (!cond) errors.push(msg); };

const VIEWS = ["home", "exam", "quiz", "papers", "handbook", "atlas", "analysis", "sources", "archive"];
const SUBJECT_DIRS = [
  "國文會考作戰室", "數學會考作戰室", "英文會考作戰室",
  "地科會考作戰室", "理化會考作戰室", "生物會考作戰室",
  "歷史會考作戰室", "地理會考作戰室", "公民會考作戰室",
];
const MOCK_COUNTS = {
  "國文會考作戰室": 42,
  "數學會考作戰室": 27,
  "英文會考作戰室": 30,
  "地科會考作戰室": 30,
  "生物會考作戰室": 30,
};

function scriptsFromIndex(dir) {
  const html = fs.readFileSync(path.join(root, dir, "index.html"), "utf8");
  return [...html.matchAll(/<script src="([^"?]+\.js)/g)]
    .map(m => m[1])
    .filter(f => f !== "app.js");
}

function loadSubject(dir) {
  const sandbox = { window: {}, console, Date, Math, localStorage: { getItem: () => null, setItem: () => {} } };
  vm.createContext(sandbox);
  for (const file of scriptsFromIndex(dir)) {
    vm.runInContext(fs.readFileSync(path.join(root, dir, file), "utf8"), sandbox, { filename: file });
  }
  return sandbox.window;
}

// Phase 1
try {
  execSync("node tools/verify-hub-links.js", { cwd: root, stdio: "pipe" });
} catch {
  errors.push("Phase 1: verify-hub-links.js failed");
}

// Phase 1–2
for (const dir of SUBJECT_DIRS) {
  const indexPath = path.join(root, dir, "index.html");
  ok(fs.existsSync(indexPath), `Phase 1: missing ${dir}/index.html`);
  if (!fs.existsSync(indexPath)) continue;
  const html = fs.readFileSync(indexPath, "utf8");
  for (const view of VIEWS) ok(html.includes(`data-view="${view}"`), `Phase 2: ${dir} missing data-view="${view}"`);
  ok(fs.existsSync(path.join(root, dir, "app.js")), `Phase 2: ${dir} missing app.js`);
  ok(fs.readdirSync(path.join(root, dir)).some(f => f.endsWith(".cmd")), `Phase 1: ${dir} missing .cmd launcher`);
}

// Phase 3 + 4–5 structure
let quizTotal = 0;
let archiveTotal = 0;

for (const dir of SUBJECT_DIRS) {
  let w;
  try { w = loadSubject(dir); } catch (e) {
    errors.push(`Phase 3: ${dir} failed to load scripts: ${e.message}`);
    continue;
  }
  const engine = w.EXAM_ENGINE;
  ok(!!engine?.generate, `Phase 3: ${dir} EXAM_ENGINE.generate missing`);

  if (engine?.quizCatalog) {
    for (const bp of engine.quizCatalog) {
      quizTotal++;
      const quiz = engine.generateQuiz(bp.id);
      ok(quiz.questions.length === bp.questionCount,
        `Phase 3 quiz: ${dir} ${bp.id} expected ${bp.questionCount} got ${quiz.questions.length}`);
      for (const q of quiz.questions) {
        ok(q.answer >= 0 && q.answer < q.choices.length, `Phase 3 quiz: ${dir} ${bp.id} bad answer index`);
        ok(Array.isArray(q.steps) && q.steps.length > 0, `Phase 3 quiz: ${dir} ${bp.id} missing steps`);
      }
    }
  }

  if (engine?.generate) {
    const mock = engine.generate(Date.now() % 100000);
    ok(mock.questions.length > 0, `Phase 3 mock: ${dir} generate() returned 0 questions`);
    const expect = MOCK_COUNTS[dir];
    if (expect != null) ok(mock.questions.length === expect, `Phase 3 mock: ${dir} expected ${expect} got ${mock.questions.length}`);
      for (const q of mock.questions) {
        if (q.type === "cr" || !Array.isArray(q.choices)) {
          ok(typeof q.answer === "string" && q.answer.length > 0, `Phase 3 mock: ${dir} CR question missing answer`);
        } else {
          ok(q.answer >= 0 && q.answer < q.choices.length, `Phase 3 mock: ${dir} invalid answer index`);
        }
        ok(Array.isArray(q.steps) && q.steps.length > 0, `Phase 3 mock: ${dir} question missing steps`);
      }
  }

  const archive = w.ARCHIVE_EXAMS;
  if (archive) {
    for (const [year, exam] of Object.entries(archive)) {
      for (let i = 0; i < exam.questions.length; i++) {
        archiveTotal++;
        const q = exam.questions[i];
        if (q.type === "cr" || !Array.isArray(q.choices)) {
          ok(typeof q.answer === "string" && q.answer.length > 0, `Phase 4 archive: ${dir} ${year} #${i + 1} CR missing answer`);
        } else {
          ok(q.answer >= 0 && q.answer < 4, `Phase 4 archive: ${dir} ${year} #${i + 1} bad answer`);
        }
        ok(Array.isArray(q.steps) && q.steps.length > 0, `Phase 5 archive: ${dir} ${year} #${i + 1} missing steps`);
        ok(!!q.tip && !!q.trap, `Phase 5 archive: ${dir} ${year} #${i + 1} missing tip/trap`);
      }
    }
  }
}

console.log(`Phase 3: ${quizTotal} quizzes, ${SUBJECT_DIRS.length} mock exams smoke-tested`);
console.log(`Phase 4–5: ${archiveTotal} archive questions structure-checked`);

if (errors.length) {
  console.error(`FAIL: ${errors.length} issues`);
  errors.slice(0, 30).forEach(e => console.error(" -", e));
  if (errors.length > 30) console.error(` … +${errors.length - 30} more`);
  process.exit(1);
}
console.log("OK: qa-smoke passed (hub, views, quizzes, mocks, archive explain fields)");
process.exit(0);
