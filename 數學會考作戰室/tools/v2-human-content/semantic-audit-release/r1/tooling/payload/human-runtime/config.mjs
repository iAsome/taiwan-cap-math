export const HUMAN_PRODUCTION_CONFIG = Object.freeze({
  schemaVersion: "math-v2-human-runtime-production-semantic-hotfix-r1",
  expectedContentVersion: "72c20aa6e8b15bbab9244693befb14dcaf6ff1b6ea6d1cddadfc265efc4298a5",
  runtimeManifestUrl: new URL("./content/manifest.json", import.meta.url),
  syllabusLockUrl: new URL("./content/syllabus-lock.json", import.meta.url),
  releaseBlueprintUrl: new URL("./release-blueprint-r1.json", import.meta.url),
  storagePrefix: "capMath.human.r1.",
  productionRuntime: true,
  contentAuthority: "CHATGPT_HUMAN_AUTHORED_R1"
});
