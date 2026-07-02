// #region agent log
(function () {
  try {
    const ae = window.ARCHIVE_EXAMS || {};
    const years = Object.keys(ae);
    const ready = years.filter(y => ae[y]?.questions?.length);
    const missing = years.filter(y => !ae[y]?.questions?.length);
    fetch("http://127.0.0.1:7798/ingest/a5622d58-649a-4621-8246-bca30122e229", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "2846ce" },
      body: JSON.stringify({
        sessionId: "2846ce",
        location: "archive-boot-check.js:boot",
        message: "archive boot check",
        data: {
          path: location.pathname,
          hasArchiveExams: !!window.ARCHIVE_EXAMS,
          totalYears: years.length,
          readyYears: ready.length,
          missingYears: missing,
          scriptVersion: [...document.scripts].map(s => s.src).filter(Boolean).pop() || ""
        },
        timestamp: Date.now(),
        hypothesisId: "B",
        runId: "pre-fix"
      })
    }).catch(() => {});
  } catch (err) {
    fetch("http://127.0.0.1:7798/ingest/a5622d58-649a-4621-8246-bca30122e229", {
      method: "POST",
      headers: { "Content-Type": "application/json", "X-Debug-Session-Id": "2846ce" },
      body: JSON.stringify({
        sessionId: "2846ce",
        location: "archive-boot-check.js:error",
        message: "archive boot check failed",
        data: { path: location.pathname, error: String(err) },
        timestamp: Date.now(),
        hypothesisId: "B",
        runId: "pre-fix"
      })
    }).catch(() => {});
  }
})();
// #endregion
