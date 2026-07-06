// Shared symbol/stem clarity rules for math quiz audit gates.
export const WATCH = "xyhrlmnkabc";

const STEM_DEFINE = {
  r: /半徑\s*r|r\s*為半徑|r\s*代表|半徑設為\s*r|半徑\s*r\s*[=＝]/,
  h: /高\s*h|高\s*度\s*h|h\s*為高|h\s*代表|高設為\s*h|高\s*h\s*[=＝]/,
  l: /母線\s*l|斜高\s*l|l\s*為母線|l\s*代表|母線\s*l\s*[=＝]/,
  m: /斜率\s*m|m\s*為斜率|m\s*代表|斜率\s*m\s*[=＝]|y\s*[=＝]\s*m/,
  x: /設\s*x\s*為|未知數\s*x|x\s*為|x\s*代表|橫坐標\s*x|橫軸\s*x|x\s*軸|變數\s*x|當\s*x\s*[=＝]|若\s*x\s*[=＝]|令\s*x\s*[=＝]|已知\s*x|\S+為\s*x|長\s*x|寬\s*x/,
  y: /設\s*y\s*為|未知數\s*y|y\s*為|y\s*代表|縱坐標\s*y|縱軸\s*y|y\s*軸|變數\s*y|當\s*y\s*[=＝]|若\s*y\s*[=＝]|令\s*y\s*[=＝]|已知\s*y|\S+為\s*y|票數為\s*y|數為\s*y/,
  a: /設\s*a\s*為|係數\s*a|a\s*為|a\s*代表|首項\s*a|常數\s*a|連比|比例\s*a|a\s*:\s*b/,
  b: /設\s*b\s*為|係數\s*b|b\s*為|b\s*代表|截距\s*b|常數\s*b|連比|比例\s*b|a\s*:\s*b/,
  c: /設\s*c\s*為|係數\s*c|c\s*為|c\s*代表|斜邊\s*c|常數\s*c|連比|比例\s*c|:\s*c\s*:/,
  n: /設\s*n\s*為|項數\s*n|n\s*為|n\s*代表|個數\s*n|第\s*n\s*項/,
  k: /設\s*k\s*為|比例常數\s*k|k\s*為|k\s*代表|k\s*[=＝]/
};

const ASSIGN_RE = new RegExp(`(^|[^A-Za-z∠°∠])([${WATCH}])\\s*[=＝]\\s*(-?\\d+(?:\\.\\d+)?)`, "g");
const SOLVE_RE = new RegExp(`求\\s*([${WATCH}])(?![A-Za-z0-9])`, "g");
const POINT_SELF = /[A-Z]\s*點在(?:原點)?(?:左|右)側\s*\d+/;
const RATIO_NOTATION = /[abc]\s*:\s*[abc](?:\s*:\s*[abc])?\s*=/;
const ANGLE_NOTATION = /∠[A-Z]+|角[A-Z]/;
const INEQUALITY_VAR = /[xy]\s*[+＋−\-]\s*\d+[^=]*[><≥≤＞＜]/;
const EQUATION_Y = /(?:方程式|直線|函數|二次函數|拋物線)[^。?？]{0,20}y\s*[=＝]/;
const VAR_CONST_Q = /變數|常數|方程式/;
const LECTURE_PREFIX = /^例題[一二三四五六七八九十\d]+[：:]\s*/;

export const examBlob = q => {
  const raw = [q?.text, ...(q?.choices || [])].filter(Boolean).join(" ");
  return raw.replace(LECTURE_PREFIX, "");
};

export function lettersNeedingDefinition(q, blob = examBlob(q)) {
  const text = String(blob || "");
  if (POINT_SELF.test(text)) return [];
  if (RATIO_NOTATION.test(text)) return [];
  if (ANGLE_NOTATION.test(text)) return [];
  if (INEQUALITY_VAR.test(text)) return [];
  if (VAR_CONST_Q.test(text) && /y\s*[=＝]\s*\d/.test(text)) return [];
  if (EQUATION_Y.test(text)) return [];
  if (/y\s*=\s*[^。?？]{0,60}[x\d(（-]/.test(text)) return [];
  if (/y\s*=\s*[^。?？]{0,40}與\s*y\s*=/.test(text)) return [];
  if (/x\s*[+＋]\s*y\s*[=＝]|x²\s*[+＋]\s*y²|xy\s*[=＝]/.test(text)) return [];
  if (/成反比|成正比|反比例|反比/.test(text)) return [];
  // 乘法公式代數：邊長 (a+b)，且 a=…、b=… 已代入
  if (/\([ab][+＋−\-][ab]\)/.test(text) && /a\s*[=＝]\s*\d/.test(text) && /b\s*[=＝]\s*\d/.test(text)) return [];

  const need = new Set();
  for (const m of text.matchAll(ASSIGN_RE)) need.add(m[2].toLowerCase());
  for (const m of text.matchAll(SOLVE_RE)) need.add(m[1].toLowerCase());

  // 代入求值：當 x = 5 時…
  for (const letter of WATCH) {
    if (new RegExp(`(?:當|若|令)\\s*${letter}\\s*[=＝]\\s*\\d`).test(text)) need.delete(letter);
  }
  // 二元一次代入：若 x = 2、y = 3
  if (/[xy]\s*[=＝]\s*\d+[^。?？]{0,12}[、,，]\s*[xy]\s*[=＝]\s*\d+/.test(text)) {
    need.delete("x");
    need.delete("y");
  }

  return [...need];
}

export function stemDefinesLetter(letter, blob) {
  const re = STEM_DEFINE[letter];
  return re ? re.test(blob) : false;
}

export function symbolNotesCover(letter, notes = []) {
  const low = letter.toLowerCase();
  return notes.some(n => {
    const s = String(n);
    return s.startsWith(`${low} `) || s.startsWith(`${low}：`) || s.startsWith(`${low}代表`) || s.includes(`${low} 代表`);
  });
}

export function symbolStemOk(q, attachOut) {
  if (attachOut?.visualTextStatus === "needs-text") {
    return { ok: false, reason: "needs-text", letters: [] };
  }
  const blob = examBlob(q);
  const letters = lettersNeedingDefinition(q, blob);
  if (!letters.length) return { ok: true, reason: "no-watch-letters", letters: [] };

  const notes = attachOut?.symbolNotes || [];
  const missing = letters.filter(l => !stemDefinesLetter(l, blob) && !symbolNotesCover(l, notes));
  return missing.length
    ? { ok: false, reason: "missing-definition", letters: missing }
    : { ok: true, reason: "defined", letters };
}

export function auditQuestion(q, attachFn) {
  const out = attachFn({ ...q }, "math");
  const result = symbolStemOk(q, out);
  return { out, ...result };
}
