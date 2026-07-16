export const HUMAN_PRODUCTION_CONFIG = Object.freeze({
  schemaVersion: "math-v2-human-runtime-production-semantic-hotfix-r1",
  expectedContentVersion: "7ca72a11485ba760208eec76ede984a68b4f7be4183eb331ecfb016264929ddc",
  runtimeManifestUrl: new URL("./content/manifest.json", import.meta.url),
  syllabusLockUrl: new URL("./content/syllabus-lock.json", import.meta.url),
  releaseBlueprintUrl: new URL("./release-blueprint-r1.json", import.meta.url),
  storagePrefix: "capMath.human.r1.",
  productionRuntime: true,
  contentAuthority: "CHATGPT_HUMAN_AUTHORED_R1"
});
