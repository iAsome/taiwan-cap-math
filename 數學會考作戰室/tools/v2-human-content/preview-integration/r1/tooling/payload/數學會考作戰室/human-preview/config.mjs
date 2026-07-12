export const HUMAN_PREVIEW_CONFIG = Object.freeze({
  schemaVersion: "math-v2-human-preview-integration-r1",
  expectedContentVersion: "d402487b40bca04f3278b231262abfb3aa7fd1d1448454e877ff8c76af25082f",
  runtimeManifestUrl: new URL("../tools/v2-human-content/global-readiness/r1/runtime-preview/manifest.json", import.meta.url),
  syllabusLockUrl: new URL("../tools/v2-human-content/authoring/authoring-syllabus-lock-r2.json", import.meta.url),
  storagePrefix: "capMath.humanPreview.r1.",
  previewOnly: true,
  defaultStudentRouteChanged: false,
  productionActivationAllowed: false,
  oldDatabaseDeletionAllowed: false
});
