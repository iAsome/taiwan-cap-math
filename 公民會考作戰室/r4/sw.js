const CACHE_PREFIX = "cap8-r4-civics-";
const META_CACHE = `${CACHE_PREFIX}meta`;
const ACTIVE_RELEASE = "./active-release";
const SHELL = ["./", "./index.html", "./app.js", "./styles.css", "./manifest.webmanifest", "./content-manifest-v4.json", "./runtime/content-index.json", "../icon.svg"];

function localPath(value) {
  const marker = "公民會考作戰室/r4/";
  const offset = value.indexOf(marker);
  if (offset < 0) throw new Error(`manifest path outside civics R4: ${value}`);
  return `./${value.slice(offset + marker.length)}`;
}

async function activeReleaseName() {
  return (await (await caches.open(META_CACHE)).match(ACTIVE_RELEASE))?.text();
}

async function cacheCompleteRelease() {
  const manifestRequest = new Request("./content-manifest-v4.json", { cache: "reload" });
  const manifestResponse = await fetch(manifestRequest);
  if (!manifestResponse.ok) throw new Error(`content manifest: ${manifestResponse.status}`);
  const manifest = await manifestResponse.clone().json();
  const release = `${CACHE_PREFIX}${manifest.buildSha256}`;
  const cache = await caches.open(release);
  await cache.put(manifestRequest, manifestResponse);
  await cache.addAll(SHELL.filter((url) => url !== "./content-manifest-v4.json"));
  const paths = [...new Set(manifest.artifacts.map((artifact) => localPath(artifact.path)))];
  for (let offset = 0; offset < paths.length; offset += 80) {
    await Promise.all(paths.slice(offset, offset + 80).map(async (url) => {
      const request = new Request(url, { cache: "reload" });
      const response = await fetch(request);
      if (!response.ok) throw new Error(`${url}: ${response.status}`);
      await cache.put(request, response);
    }));
  }
  await (await caches.open(META_CACHE)).put(ACTIVE_RELEASE, new Response(release));
  return release;
}

self.addEventListener("install", (event) => event.waitUntil((async () => {
  await cacheCompleteRelease();
  await self.skipWaiting();
})()));
self.addEventListener("activate", (event) => event.waitUntil((async () => {
  const release = await activeReleaseName() || await cacheCompleteRelease();
  const keys = await caches.keys();
  await Promise.all(keys.filter((key) => key.startsWith(CACHE_PREFIX) && key !== release && key !== META_CACHE).map((key) => caches.delete(key)));
  await self.clients.claim();
})()));
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith((async () => {
    const cached = await caches.match(event.request);
    if (cached) return cached;
    try {
      const response = await fetch(event.request);
      const release = await activeReleaseName();
      if (response.ok && release) (await caches.open(release)).put(event.request, response.clone());
      return response;
    } catch (error) {
      if (event.request.mode === "navigate") return caches.match("./index.html");
      throw error;
    }
  })());
});
