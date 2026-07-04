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

  return { slashToFracMarkup, renderMath };
})();
