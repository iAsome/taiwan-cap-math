window.FRACTION_MARKUP = (() => {
  "use strict";

  const FRAC_RE = /\[\[frac:([^|\]]+)\|([^\]]+)\]\]/g;
  const EXPLICIT_RE = /\[\[frac:[^|\]]+\|[^\]]+\]\]/g;
  const SIMPLE_NUMERIC_RE = /-?\d+\s*\/\s*\d+/g;

  function slashToFracMarkup(text) {
    if (text == null) return text;
    let out = String(text);
    const saved = [];

    out = out.replace(EXPLICIT_RE, markup => {
      saved.push(markup);
      return `\x00F${saved.length - 1}\x00`;
    });

    out = out.replace(SIMPLE_NUMERIC_RE, (match, offset, source) => {
      const before = source[offset - 1] || "";
      const after = source[offset + match.length] || "";

      if (before === "/" || after === "/") return match;
      if (before === "." || after === ".") return match;

      const parts = match.split("/");
      if (parts.length !== 2) return match;
      const numerator = parts[0].trim();
      const denominator = parts[1].trim();
      if (!/^-?\d+$/.test(numerator) || !/^\d+$/.test(denominator)) return match;
      if (Number(denominator) === 0) return match;

      return `[[frac:${numerator}|${denominator}]]`;
    });

    return out.replace(/\x00F(\d+)\x00/g, (_, index) => saved[Number(index)]);
  }

  function renderMath(value, esc, chunked = false) {
    const raw = slashToFracMarkup(value);
    let html = "";
    let last = 0;
    const textPart = text => chunked && text
      ? `<span class="math-chunk">${esc(text)}</span>`
      : esc(text);

    for (const match of raw.matchAll(FRAC_RE)) {
      html += textPart(raw.slice(last, match.index));
      const numerator = esc(match[1].trim());
      const denominator = esc(match[2].trim());
      html += `<span class="math-frac" role="math" aria-label="${denominator} 分之 ${numerator}"><span class="math-num">${numerator}</span><span class="math-den">${denominator}</span></span>`;
      last = match.index + match[0].length;
    }

    return html + textPart(raw.slice(last));
  }

  const MAX_DEN = 1000;
  const gcd = (a, b) => {
    a = Math.abs(a);
    b = Math.abs(b);
    while (b) [a, b] = [b, a % b];
    return a || 1;
  };

  const fracMarkup = (numerator, denominator) => {
    const divisor = gcd(numerator, denominator);
    numerator = Math.trunc(numerator / divisor);
    denominator = Math.trunc(denominator / divisor);
    if (denominator < 0) {
      numerator = -numerator;
      denominator = -denominator;
    }
    return denominator === 1 ? `${numerator}` : `[[frac:${numerator}|${denominator}]]`;
  };

  function rationalApprox(value) {
    let best = { num: Math.round(value), den: 1, err: Math.abs(value - Math.round(value)) };
    for (let denominator = 1; denominator <= MAX_DEN; denominator++) {
      const numerator = Math.round(value * denominator);
      const error = Math.abs(value - numerator / denominator);
      if (error < best.err) best = { num: numerator, den: denominator, err: error };
    }
    return best;
  }

  function repeatingToFrac(integerPart, repeatingPart) {
    const integer = integerPart === "-0" ? "0" : integerPart;
    const repeatingThree = repeatingPart.startsWith("333") || repeatingPart === "3";
    const repeatingSix = repeatingPart.startsWith("666") || repeatingPart === "6";
    if (repeatingThree) return integer === "0" ? "[[frac:1|3]]" : `${integer}[[frac:1|3]]`;
    if (repeatingSix) return integer === "0" ? "[[frac:2|3]]" : `${integer}[[frac:2|3]]`;
    return null;
  }

  function floatToFracMarkup(numberText) {
    const value = Number(numberText);
    if (!Number.isFinite(value)) return numberText;
    const sign = value < 0 ? "−" : "";
    const absolute = Math.abs(value);
    const whole = Math.trunc(absolute);
    const fractional = absolute - whole;
    if (fractional < 1e-9) return `${sign}${whole}`;
    const { num, den } = rationalApprox(fractional);
    if (den === 1) return fracMarkup(sign === "−" ? -(whole + num) : whole + num, 1);
    if (whole === 0) return fracMarkup(sign === "−" ? -num : num, den);
    return `${sign}${whole}[[frac:${num}|${den}]]`;
  }

  function decimalToFracMarkup(text) {
    if (text == null) return text;
    let out = String(text);
    out = out.replace(/(-?\d+)\.(\d+)…/g, (match, integerPart, repeatingPart) =>
      repeatingToFrac(integerPart, repeatingPart) || match
    );
    out = out.replace(/(-?\d+\.\d{4,})(?!\d)(?!\s*×\s*10)/g, match =>
      floatToFracMarkup(match)
    );
    return out;
  }

  function stripPrimeFallback(text) {
    return String(text).replace(/\s*[\u2032\u0027]+\s*$/g, "");
  }

  function normalizeChoice(text) {
    if (text == null) return text;
    return decimalToFracMarkup(stripPrimeFallback(text));
  }

  function fillMcValues(correct, distractors) {
    const values = [];
    const add = value => {
      value = String(value);
      if (value && !values.includes(value)) values.push(value);
    };

    add(correct);
    (distractors || []).forEach(add);
    const correctText = String(correct);
    const numericMatch = correctText.match(/^(-?\d+(?:\.\d+)?)([\s\S]*)$/);
    let bump = 1;

    while (values.length < 4) {
      if (numericMatch) {
        const number = Number(numericMatch[1]);
        const suffix = numericMatch[2] || "";
        if (Number.isFinite(number)) {
          for (const delta of [bump, -bump, bump + 1, -(bump + 1)]) {
            if (values.length >= 4) break;
            const candidate = `${number + delta}${suffix}`;
            if (candidate !== correctText) add(candidate);
          }
        }
      }
      add(`${correctText}（${bump}）`);
      bump++;
      if (bump > 24) break;
    }

    return values.slice(0, 4);
  }

  return {
    slashToFracMarkup,
    renderMath,
    decimalToFracMarkup,
    normalizeChoice,
    fillMcValues,
    stripPrimeFallback
  };
})();
