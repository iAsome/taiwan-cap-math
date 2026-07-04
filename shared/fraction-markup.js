window.FRACTION_MARKUP = (() => {
  const FRAC_RE = /\[\[frac:([^|\]]+)\|([^\]]+)\]\]/g;

  function isMeasurementSlash(_left, right) {
    const r = String(right).trim();
    if (/^\d+(?:\.\d+)?(?:mm|cm|m|km|mL|L|°C|℃|Pa|N|g)$/i.test(r)) return true;
    if (/^\d+\s*g水$/i.test(r)) return true;
    if (/^100\s*g水$/i.test(r)) return true;
    return false;
  }

  function isConcentrationSlash(left, right) {
    return /g$/i.test(String(left).trim()) && /g/.test(String(right));
  }

  function skipSlash(left, right) {
    if (isMeasurementSlash(left, right)) return true;
    if (isConcentrationSlash(left, right)) return true;
    return false;
  }

  function slashToFracMarkup(text) {
    if (text == null) return text;
    let out = String(text);
    const saved = [];
    out = out.replace(/\[\[frac:[^|\]]+\|[^\]]+\]\]/g, m => {
      saved.push(m);
      return `\x00F${saved.length - 1}\x00`;
    });

    for (let pass = 0; pass < 10; pass++) {
      const before = out;
      out = out.replace(/\(([^()]*)\)\/\(([^()]*)\)/g, (m, a, b) => skipSlash(a, b) ? m : `[[frac:${a}|${b}]]`);
      out = out.replace(/\(([^()]*)\)\/([^\s,。；、=+\−\-]+)/g, (m, a, b) => skipSlash(a, b) ? m : `[[frac:${a}|${b}]]`);
      out = out.replace(/([^\s/+\−\-×÷=，。；、\[\]\x00]+)\/([^\s/+\−\-×÷=，。；、\[\]\x00]+)/g, (m, a, b) => {
        if (a.includes("http") || b.includes("://")) return m;
        if (skipSlash(a, b)) return m;
        return `[[frac:${a}|${b}]]`;
      });
      if (out === before) break;
    }

    return out.replace(/\x00F(\d+)\x00/g, (_, i) => saved[Number(i)]);
  }

  function renderMath(value, esc, chunked = false) {
    const raw = slashToFracMarkup(value);
    let html = "", last = 0;
    const textPart = text => chunked && text ? `<span class="math-chunk">${esc(text)}</span>` : esc(text);
    for (const match of raw.matchAll(FRAC_RE)) {
      html += textPart(raw.slice(last, match.index));
      const numerator = esc(match[1].trim()), denominator = esc(match[2].trim());
      html += `<span class="math-frac" role="math" aria-label="${denominator} 分之 ${numerator}"><span class="math-num">${numerator}</span><span class="math-den">${denominator}</span></span>`;
      last = match.index + match[0].length;
    }
    return html + textPart(raw.slice(last));
  }

  const MAX_DEN = 1000; // ponytail: brute-force rationals; upgrade to continued fractions if needed
  const gcd = (a, b) => { a = Math.abs(a); b = Math.abs(b); while (b) [a, b] = [b, a % b]; return a || 1; };
  const fracMarkup = (n, d) => {
    const g = gcd(n, d); n = Math.trunc(n / g); d = Math.trunc(d / g);
    if (d < 0) { n = -n; d = -d; }
    return d === 1 ? `${n}` : `[[frac:${n}|${d}]]`;
  };

  function rationalApprox(x) {
    let best = { num: Math.round(x), den: 1, err: Math.abs(x - Math.round(x)) };
    for (let den = 1; den <= MAX_DEN; den++) {
      const num = Math.round(x * den);
      const err = Math.abs(x - num / den);
      if (err < best.err) best = { num, den, err };
    }
    return best;
  }

  function repeatingToFrac(intPart, rep) {
    const ip = intPart === "-0" ? "0" : intPart;
    const rep3 = rep.startsWith("333") || rep === "3";
    const rep6 = rep.startsWith("666") || rep === "6";
    if (rep3) return ip === "0" ? "[[frac:1|3]]" : `${ip}[[frac:1|3]]`;
    if (rep6) return ip === "0" ? "[[frac:2|3]]" : `${ip}[[frac:2|3]]`;
    return null;
  }

  function floatToFracMarkup(numStr) {
    const val = Number(numStr);
    if (!Number.isFinite(val)) return numStr;
    const sign = val < 0 ? "−" : "";
    const abs = Math.abs(val);
    const whole = Math.trunc(abs);
    const frac = abs - whole;
    if (frac < 1e-9) return `${sign}${whole}`;
    const { num, den } = rationalApprox(frac);
    if (den === 1) return fracMarkup(sign === "−" ? -(whole + num) : whole + num, 1);
    if (whole === 0) return fracMarkup(sign === "−" ? -num : num, den);
    return `${sign}${whole}[[frac:${num}|${den}]]`;
  }

  function decimalToFracMarkup(text) {
    if (text == null) return text;
    let out = String(text);
    out = out.replace(/(-?\d+)\.(\d+)…/g, (m, ip, rep) => repeatingToFrac(ip, rep) || m);
    out = out.replace(/(-?\d+\.\d{4,})(?!\d)(?!\s*×\s*10)/g, m => floatToFracMarkup(m));
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
    const add = v => { v = String(v); if (v && !values.includes(v)) values.push(v); };
    add(correct);
    (distractors || []).forEach(add);
    const correctStr = String(correct);
    const numMatch = correctStr.match(/^(-?\d+(?:\.\d+)?)([\s\S]*)$/);
    let bump = 1;
    while (values.length < 4) {
      if (numMatch) {
        const num = Number(numMatch[1]);
        const suffix = numMatch[2] || "";
        if (Number.isFinite(num)) {
          for (const d of [bump, -bump, bump + 1, -(bump + 1)]) {
            if (values.length >= 4) break;
            const cand = `${num + d}${suffix}`;
            if (cand !== correctStr) add(cand);
          }
        }
      }
      add(`${correctStr}（${bump}）`);
      bump++;
      if (bump > 24) break;
    }
    return values.slice(0, 4);
  }

  return { slashToFracMarkup, renderMath, decimalToFracMarkup, normalizeChoice, fillMcValues, stripPrimeFallback };
})();
