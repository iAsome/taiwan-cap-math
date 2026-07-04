window.PAPER_HISTORY_UI = (() => {
  function localDateKey(iso) {
    const d = new Date(iso);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
  }

  function nonArchive(records) {
    return records.filter(record => record.kind !== "archive");
  }

  function paperStats(records) {
    const list = nonArchive(records);
    return [
      ["考過卷數", list.length],
      ["小考", list.filter(item => item.kind === "quiz").length],
      ["模擬考", list.filter(item => item.kind === "mock").length]
    ];
  }

  function filterByDate(records, date) {
    const list = nonArchive(records);
    if (date === "all") return list;
    return list.filter(record => localDateKey(record.finishedAt) === date);
  }

  function visibleRecords(records, { date = "all", page = 0, pageSize = 5 } = {}) {
    const filtered = filterByDate(records, date);
    const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
    const safePage = Math.min(Math.max(0, page), totalPages - 1);
    return {
      records: filtered.slice(safePage * pageSize, safePage * pageSize + pageSize),
      total: filtered.length,
      page: safePage,
      totalPages,
      pageSize
    };
  }

  function dateOptions(records) {
    return [...new Set(nonArchive(records).map(record => localDateKey(record.finishedAt)))].sort((a, b) => b.localeCompare(a));
  }

  function formatDateLabel(dateKey) {
    const [y, m, d] = dateKey.split("-");
    return `${y}年${Number(m)}月${Number(d)}日`;
  }

  function renderToolbar({ date, page, totalPages, dates }) {
    const dateOptionsHtml = `<option value="all"${date === "all" ? " selected" : ""}>全部日期</option>${dates.map(d => `<option value="${d}"${date === d ? " selected" : ""}>${formatDateLabel(d)}</option>`).join("")}`;
    return {
      toolbar: `<label class="paper-history-filter">日期 <select data-paper-date>${dateOptionsHtml}</select></label>`,
      pager: totalPages > 1
        ? `<div class="paper-history-pager-inner"><button type="button" class="secondary compact" data-paper-prev${page <= 0 ? " disabled" : ""}>上一頁</button><span class="paper-history-page-label">第 ${page + 1} / ${totalPages} 頁</span><button type="button" class="secondary compact" data-paper-next${page >= totalPages - 1 ? " disabled" : ""}>下一頁</button></div>`
        : ""
    };
  }

  function bindToolbar(toolbarRoot, pagerRoot, { getState, onChange }) {
    toolbarRoot?.querySelector("[data-paper-date]")?.addEventListener("change", event => onChange({ date: event.target.value, page: 0 }));
    pagerRoot?.querySelector("[data-paper-prev]")?.addEventListener("click", () => {
      const { page } = getState();
      if (page > 0) onChange({ page: page - 1 });
    });
    pagerRoot?.querySelector("[data-paper-next]")?.addEventListener("click", () => {
      const { page, totalPages } = getState();
      if (page < totalPages - 1) onChange({ page: page + 1 });
    });
  }

  function examKindEyebrow(kind) {
    return ({ quiz: "小考", mock: "模擬考", archive: "官方題本" })[kind] || "模擬考";
  }

  function renderHistoryCardInfo({ title, dateLine }) {
    return `<h3>${title}</h3><small>${dateLine}</small>`;
  }

  function renderScorePercent(correct, total) {
    const pct = Math.round(correct / Math.max(1, total) * 100);
    return `<div class="paper-history-score"><strong>${pct}</strong><span>%</span></div>`;
  }

  function renderScoreMath({ correct, mcCount, wrongTotal, uncorrected }) {
    const drill = wrongTotal
      ? `<div class="paper-history-score paper-history-score--drill"><strong>${uncorrected}/${wrongTotal}</strong><span>未訂正</span></div>`
      : "";
    return `<div class="paper-history-scores"><div class="paper-history-score paper-history-score--correct"><strong>${correct}/${mcCount}</strong><span>答對</span></div>${drill}</div>`;
  }

  return {
    localDateKey, paperStats, visibleRecords, dateOptions, renderToolbar, bindToolbar,
    examKindEyebrow, renderHistoryCardInfo, renderScorePercent, renderScoreMath
  };
})();
