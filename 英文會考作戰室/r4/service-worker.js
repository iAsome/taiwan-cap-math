const CACHE = "cap8-r4-english-v1";
const SHELL = ["./", "./index.html", "./styles.css", "./app.mjs", "./manifest.webmanifest", "./runtime/catalog.json"];
self.addEventListener("install", (event) => event.waitUntil((async () => {
  const cache = await caches.open(CACHE);
  await cache.addAll(SHELL);
  try {
    const catalog = await fetch("./runtime/catalog.json").then((response) => response.json());
    const paths = [...catalog.units.map((unit) => unit.bundle), catalog.reading.bundle, catalog.listening.bundle, ...(catalog.audioPaths || [])];
    for (let index = 0; index < paths.length; index += 20) await cache.addAll(paths.slice(index, index + 20));
  } catch {
    // The shell remains usable and reports unavailable content if a bulk cache fails.
  }
  await self.skipWaiting();
})()));
self.addEventListener("activate", (event) => event.waitUntil((async () => {
  for (const key of await caches.keys()) if (key !== CACHE && key.startsWith("cap8-r4-english-")) await caches.delete(key);
  await self.clients.claim();
})()));
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith((async () => {
    const cached = await caches.match(event.request);
    if (cached) return cached;
    const response = await fetch(event.request);
    if (response.ok && new URL(event.request.url).origin === location.origin) (await caches.open(CACHE)).put(event.request, response.clone());
    return response;
  })());
});
