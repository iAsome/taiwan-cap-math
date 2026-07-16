const CACHE_VERSION = "cap-r4-physics-chemistry-v4.0.0";
const SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.mjs",
  "./manifest.webmanifest",
  "./runtime/content-catalog.json",
  "./runtime/content-manifest-v4.json",
  "../icon.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_VERSION).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys
    .filter((key) => key.startsWith("cap-r4-physics-chemistry-") && key !== CACHE_VERSION)
    .map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith(caches.match(event.request).then(async (cached) => {
    if (cached) return cached;
    try {
      const response = await fetch(event.request);
      if (response.ok) {
        const cache = await caches.open(CACHE_VERSION);
        cache.put(event.request, response.clone());
      }
      return response;
    } catch (error) {
      if (event.request.mode === "navigate") return caches.match("./index.html");
      throw error;
    }
  }));
});

async function notifyProgress(done, total, failed) {
  const clients = await self.clients.matchAll({ includeUncontrolled: true, type: "window" });
  clients.forEach((client) => client.postMessage({ type: "CACHE_PROGRESS", done, total, failed }));
}

function scopedUrl(repositoryPath) {
  const marker = "理化會考作戰室/r4/";
  const relative = repositoryPath.includes(marker) ? repositoryPath.split(marker)[1] : repositoryPath;
  return new URL(`./${relative}`, self.registration.scope).href;
}

async function cacheCompleteBank() {
  const manifest = await fetch("./runtime/content-manifest-v4.json").then((response) => {
    if (!response.ok) throw new Error(`manifest HTTP ${response.status}`);
    return response.json();
  });
  const artifactPaths = manifest.artifacts.map((artifact) => scopedUrl(artifact.path));
  const assetSources = await Promise.all(manifest.artifacts.filter((artifact) => artifact.type === "asset").map(async (artifact) => {
    try {
      const response = await fetch(scopedUrl(artifact.path), { cache: "no-cache" });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      return scopedUrl((await response.json()).path);
    } catch (error) {
      console.error("offline asset source lookup failed", artifact.path, error);
      return null;
    }
  }));
  const missingAssetSources = assetSources.filter((url) => !url).length;
  const urls = [...new Set([
    ...SHELL.map((path) => new URL(path, self.registration.scope).href),
    ...artifactPaths,
    ...assetSources.filter(Boolean),
  ])];
  const cache = await caches.open(CACHE_VERSION);
  let done = missingAssetSources;
  let failed = missingAssetSources;
  const total = urls.length + missingAssetSources;
  for (let start = 0; start < urls.length; start += 16) {
    const batch = urls.slice(start, start + 16);
    await Promise.all(batch.map(async (url) => {
      try {
        const response = await fetch(url, { cache: "no-cache" });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        await cache.put(url, response);
      } catch (error) {
        console.error("offline cache failed", url, error);
        failed += 1;
      } finally {
        done += 1;
      }
    }));
    await notifyProgress(done, total, failed);
  }
}

self.addEventListener("message", (event) => {
  if (event.data?.type === "CACHE_ALL") event.waitUntil(cacheCompleteBank());
});
