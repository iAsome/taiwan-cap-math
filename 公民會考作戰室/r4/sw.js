const CACHE = "cap8-r4-civics-v4.0.0-r2";
const SHELL = ["./", "./index.html", "./app.js", "./styles.css", "./manifest.webmanifest", "./content-manifest-v4.json", "./runtime/content-index.json"];

function localPath(value) {
  const marker = "公民會考作戰室/r4/";
  const offset = value.indexOf(marker);
  if (offset < 0) throw new Error(`manifest path outside civics R4: ${value}`);
  return `./${value.slice(offset + marker.length)}`;
}

async function cacheCompleteRelease() {
  const cache = await caches.open(CACHE);
  await cache.addAll(SHELL);
  const manifest = await (await cache.match("./content-manifest-v4.json")).json();
  const paths = [...new Set(manifest.artifacts.map((artifact) => localPath(artifact.path)))];
  for (let offset = 0; offset < paths.length; offset += 80) {
    await Promise.all(paths.slice(offset, offset + 80).map(async (url) => {
      const request = new Request(url, { cache: "reload" });
      const response = await fetch(request);
      if (!response.ok) throw new Error(`${url}: ${response.status}`);
      await cache.put(request, response);
    }));
  }
}

self.addEventListener("install", (event) => event.waitUntil(cacheCompleteRelease()));
self.addEventListener("activate", (event) => event.waitUntil((async () => {
  const keys = await caches.keys();
  await Promise.all(keys.filter((key) => key !== CACHE && key.startsWith("cap8-r4-civics-")).map((key) => caches.delete(key)));
  await self.clients.claim();
})()));
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith((async () => {
    const cached = await caches.match(event.request);
    if (cached) return cached;
    try {
      const response = await fetch(event.request);
      if (response.ok) (await caches.open(CACHE)).put(event.request, response.clone());
      return response;
    } catch (error) {
      if (event.request.mode === "navigate") return caches.match("./index.html");
      throw error;
    }
  })());
});
