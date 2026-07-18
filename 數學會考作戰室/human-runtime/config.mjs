export const HUMAN_PRODUCTION_CONFIG = Object.freeze({
  schemaVersion: "math-v2-human-runtime-production-semantic-hotfix-r1",
  expectedContentVersion: "8fc33c2d8735dbc47154a2a2a020b6c4a91547fd7fd967a604c32cadec6d6681",
  runtimeManifestUrl: new URL("./content/manifest.json", import.meta.url),
  syllabusLockUrl: new URL("./content/syllabus-lock.json", import.meta.url),
  releaseBlueprintUrl: new URL("./release-blueprint-r1.json", import.meta.url),
  storagePrefix: "capMath.human.r1.",
  productionRuntime: true,
  contentAuthority: "CHATGPT_HUMAN_AUTHORED_R1"
});
