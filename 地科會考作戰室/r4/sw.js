const CACHE = "cap8-r4-earth-science-v2";
const SHELL = ["./", "index.html", "styles.css", "app.mjs", "assessment.mjs", "migration.mjs", "manifest.webmanifest", "../icon.svg", "runtime/content-manifest.json", "runtime/assets.json"];

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(SHELL);
    const [manifest, assets] = await Promise.all([
      fetch("runtime/content-manifest.json").then((response) => response.json()),
      fetch("runtime/assets.json").then((response) => response.json()),
    ]);
    await cache.addAll([
      ...manifest.units.map((unit) => `runtime/${unit.bundle}`),
      ...assets.map((asset) => asset.path.split("/r4/").at(-1)),
    ]);
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names.filter((name) => name.startsWith("cap8-r4-earth-science-") && name !== CACHE).map((name) => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
    const copy = response.clone();
    caches.open(CACHE).then((cache) => cache.put(event.request, copy));
    return response;
  })));
});
