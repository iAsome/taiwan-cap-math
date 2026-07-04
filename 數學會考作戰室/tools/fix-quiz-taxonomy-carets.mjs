import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.dirname(path.dirname(fileURLToPath(import.meta.url)));
const file = path.join(root, "quiz-taxonomy.js");
let text = fs.readFileSync(file, "utf8");

const context = vm.createContext({ window: {}, console });
vm.runInContext(fs.readFileSync(path.join(root, "math-text-sanitize.js"), "utf8"), context);
const { caretToSuperscript } = context.window.MATH_TEXT_SANITIZE;

const header = `const _SUP = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻" };
const sup = v => String(v).replace(/[\\d-]/g, c => _SUP[c] || c);
const pow = (b, e) => \`\${b}\${sup(e)}\`;

`;

if (!text.startsWith("const _SUP")) {
  text = header + text;
}

text = text.replace(/\$\{([^}]+)\}\^\(\$\{([^}]+)\}\+\$\{([^}]+)\}-\$\{([^}]+)\}\)/g, "${pow($1, `${$2}+${$3}-${$4}`)}");
text = text.replace(/\$\{([^}]+)\}\^\(\$\{([^}]+)\}\+\$\{([^}]+)\}\)/g, "${pow($1, `${$2}+${$3}`)}");
text = text.replace(/\$\{([^}]+)\}\^\$\{([^}]+)\}/g, "${pow($1, $2)}");
text = text.replace(/×10\^\$\{([^}]+)\}/g, "×10${sup($1)}");
text = text.replace(/2\^\$\{([^}]+)\}/g, "2${sup($1)}");
text = text.replace(/x\^\$\{([^}]+)\}/g, "x${sup($1)}");

text = text.replace(/"([^"\\]*(?:\\.[^"\\]*)*)"/g, (m, inner) => `"${caretToSuperscript(inner)}"`);
text = text.replace(/`([^`\\]*(?:\\.[^`\\]|\\`|\\|\$(?!\{)[^`\\]*)*)`/g, (m, inner) => {
  if (!/\^/.test(inner)) return m;
  return "`" + caretToSuperscript(inner) + "`";
});

const bad = [];
text.split("\n").forEach((line, i) => {
  if (!/\^/.test(line)) return;
  if (/\*\*/.test(line)) {
    const withoutPow = line.replace(/\*\*/g, "");
    if (/\^/.test(withoutPow)) bad.push(`L${i + 1}: ${line.trim().slice(0, 140)}`);
  } else {
    bad.push(`L${i + 1}: ${line.trim().slice(0, 140)}`);
  }
});

if (bad.length) {
  console.error(`Residual ^ in quiz-taxonomy.js (${bad.length} lines):`);
  bad.forEach(l => console.error(" ", l));
  process.exit(1);
}

text = text.replace(/const sup = v => String\(v\)\.replace\(\/\[\\d-\]\/g/, "const sup = v => String(v).replace(/[\\d-]/g");
fs.writeFileSync(file, text, "utf8");
console.log("quiz-taxonomy.js: caret notation converted to superscripts.");
