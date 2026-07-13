export const HUMAN_PRODUCTION_CONFIG = Object.freeze({
  schemaVersion: "math-v2-human-runtime-production-semantic-hotfix-r1",
  expectedContentVersion: "fa2b82b77be2f4987fc52049578e53981c8c59ac33f7d64cf4c412ee48d12bbd",
  runtimeManifestUrl: new URL("./content/manifest.json", import.meta.url),
  syllabusLockUrl: new URL("./content/syllabus-lock.json", import.meta.url),
  releaseBlueprintUrl: new URL("./release-blueprint-r1.json", import.meta.url),
  storagePrefix: "capMath.human.r1.",
  productionRuntime: true,
  contentAuthority: "CHATGPT_HUMAN_AUTHORED_R1"
});
