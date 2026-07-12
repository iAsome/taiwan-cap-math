export const HUMAN_RC_CONFIG = Object.freeze({
  schemaVersion: "math-v2-human-runtime-rc-r1",
  expectedContentVersion: "d402487b40bca04f3278b231262abfb3aa7fd1d1448454e877ff8c76af25082f",
  runtimeManifestUrl: new URL("../tools/v2-human-content/global-readiness/r1/runtime-preview/manifest.json", import.meta.url),
  syllabusLockUrl: new URL("../tools/v2-human-content/authoring/authoring-syllabus-lock-r2.json", import.meta.url),
  releaseBlueprintUrl: new URL("./release-blueprint-r1.json", import.meta.url),
  storagePrefix: "capMath.humanRc.r1.",
  releaseCandidateOnly: true,
  productionActivationAllowed: false,
  studentRouteChangeAllowed: false,
  oldDatabaseDeletionAllowed: false
});
