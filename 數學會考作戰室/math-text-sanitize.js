window.MATH_TEXT_SANITIZE = (() => {
  const SUP = { "0": "⁰", "1": "¹", "2": "²", "3": "³", "4": "⁴", "5": "⁵", "6": "⁶", "7": "⁷", "8": "⁸", "9": "⁹", "-": "⁻" };

  function superscriptDigits(value) {
    return String(value).replace(/[\d-]/g, c => SUP[c] || c);
  }

  function superscriptExpr(value) {
    const extra = { "+": "⁺", "-": "⁻", "(": "⁽", ")": "⁾", ",": "·", n: "ⁿ", m: "ᵐ", a: "ᵃ", x: "ˣ" };
    return String(value).replace(/[\d+\-(),nmax]/g, c => SUP[c] || extra[c] || c);
  }

  function caretToSuperscript(text) {
    let out = String(text);
    out = out.replace(/(\d+)\^\(([^)]+)\)/g, (_, base, exp) => `${base}⁽${superscriptExpr(exp)}⁾`);
    out = out.replace(/(\d+)\^max\(([^)]+)\)/g, (_, base, exp) => `${base}ᵐᵃˣ⁽${superscriptExpr(exp)}⁾`);
    out = out.replace(/(\d+)\^(\-?\d+)/g, (_, base, exp) => `${base}${superscriptDigits(exp)}`);
    out = out.replace(/([a-zA-Z])\^(\-?\d+)/g, (_, base, exp) => `${base}${superscriptDigits(exp)}`);
    out = out.replace(/10\^n/g, "10ⁿ");
    out = out.replace(/([a-zA-Z])\^([a-z])/g, (_, base, exp) => `${base}${({ m: "ᵐ", n: "ⁿ", x: "ˣ" }[exp] || exp)}`);
    out = out.replace(/\^(\-?\d+)/g, (_, exp) => superscriptDigits(exp));
    return out;
  }

  function stripInstructionPrefix(text) {
    return String(text).replace(/^[\u4e00-\u9fff]+｜/, "");
  }

  function normalizeAbsoluteValueBars(text) {
    return String(text).replace(/｜([^｜]+)｜/g, "|$1|");
  }

  function removeStrayFullwidthPipe(text) {
    return String(text).replace(/｜/g, "");
  }

  function sanitizeExamText(text) {
    if (text == null) return text;
    let out = stripInstructionPrefix(text);
    out = normalizeAbsoluteValueBars(out);
    out = removeStrayFullwidthPipe(out);
    out = caretToSuperscript(out);
    return out;
  }

  function sanitizeQuestion(question) {
    if (!question || typeof question !== "object") return question;
    const q = { ...question };
    if (q.text != null) q.text = sanitizeExamText(q.text);
    if (Array.isArray(q.choices)) q.choices = q.choices.map(sanitizeExamText);
    if (Array.isArray(q.steps)) q.steps = q.steps.map(sanitizeExamText);
    if (q.tip != null) q.tip = sanitizeExamText(q.tip);
    if (q.trap != null) q.trap = sanitizeExamText(q.trap);
    if (q.concept != null) q.concept = sanitizeExamText(q.concept);
    if (q.formula != null) q.formula = sanitizeExamText(q.formula);
    return q;
  }

  function pow(base, exp) {
    return `${base}${superscriptDigits(exp)}`;
  }

  return { superscriptDigits, caretToSuperscript, stripInstructionPrefix, sanitizeExamText, sanitizeQuestion, pow };
})();
