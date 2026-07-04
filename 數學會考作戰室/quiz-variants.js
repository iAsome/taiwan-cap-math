(() => {
  const bank = window.QUIZ_VARIANT_BANK || {};
  const taxonomy = window.QUIZ_TAXONOMY || {};
  const VARIANTS = 10;

  for (const [quizId, chapter] of Object.entries(taxonomy)) {
    for (const section of chapter.sections || []) {
      for (const topic of section.topics || []) {
        const key = `${quizId}/${topic.id}`;
        const presets = bank[key];
        if (!presets || presets.length !== VARIANTS) {
          throw new Error(`QUIZ_VARIANT_BANK 缺少 ${key} 的 ${VARIANTS} 組變體`);
        }
        topic.variants = presets.map((preset, vi) => () => ({ ...preset, variantIndex: vi }));
      }
    }
  }
})();
