const CACHE = "cap8-r4-geography-4.0.0-final-7";
const SUBJECT_PREFIX = "地理會考作戰室/r4/";
const MANIFEST = "./content-manifest-v4.json";
const SHELL = ["./", "./index.html", "./styles.css?v=4.0.0-final-7", "./app.js?v=4.0.0-final-7", "./progress-migration.mjs?v=4.0.0-final-7", "./sw.js", MANIFEST, "./runtime/catalog.json"];

function localArtifactPath(value) {
  const index = value.indexOf(SUBJECT_PREFIX);
  return `./${index >= 0 ? value.slice(index + SUBJECT_PREFIX.length) : value}`;
}

async function contentPaths() {
  const response = await fetch(MANIFEST, { cache: "no-store" });
  if (!response.ok) throw new Error(`manifest ${response.status}`);
  const manifest = await response.json();
  const artifactPaths = manifest.artifacts.map((artifact) => localArtifactPath(artifact.path));
  const assetRecords = await Promise.all(manifest.artifacts.filter((artifact) => artifact.type === "asset").map(async (artifact) => {
    const assetResponse = await fetch(localArtifactPath(artifact.path), { cache: "no-store" });
    if (!assetResponse.ok) throw new Error(`${artifact.id} ${assetResponse.status}`);
    return assetResponse.json();
  }));
  return [...new Set([...artifactPaths, ...assetRecords.map((asset) => localArtifactPath(asset.path))])];
}

async function precache() {
  const cache = await caches.open(CACHE);
  await cache.addAll(SHELL);
  const paths = await contentPaths();
  for (let index = 0; index < paths.length; index += 64) await Promise.all(paths.slice(index, index + 64).map((value) => cache.add(value)));
}

self.addEventListener("install", (event) => {
  event.waitUntil(precache().then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key.startsWith("cap8-r4-geography-") && key !== CACHE).map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then(async (cached) => {
    if (cached) return cached;
    try {
      const response = await fetch(event.request);
      if (response.ok && new URL(event.request.url).origin === self.location.origin) {
        const cache = await caches.open(CACHE);
        await cache.put(event.request, response.clone());
      }
      return response;
    } catch (error) {
      if (event.request.mode === "navigate") return caches.match("./index.html");
      throw error;
    }
  }));
});
