window.EXAM_CHOICE_UI = (() => {
  function choiceAttrs({ submitted, selected, isAnswer }) {
    if (!submitted) return { class: selected ? "selected" : "", mark: false };
    const cls = [];
    if (selected && isAnswer) cls.push("picked-right");
    else if (selected) cls.push("picked-wrong");
    if (isAnswer) cls.push("is-answer");
    return { class: cls.join(" "), mark: isAnswer };
  }

  function choiceButton({ letter, textHtml, attrs, dataAttr, disabled }) {
    const mark = attrs.mark ? `<span class="choice-mark" aria-hidden="true">✓</span>` : "";
    return `<button type="button" class="choice ${attrs.class}" ${dataAttr}${disabled ? " disabled" : ""}><span class="choice-letter">${letter}</span><span>${textHtml}</span>${mark}</button>`;
  }

  return { choiceAttrs, choiceButton };
})();
