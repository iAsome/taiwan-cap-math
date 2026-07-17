const CACHE = "cap8-r4-integrated-natural-v1";

self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const response = await fetch("runtime/precache.json", { cache: "no-store" });
    const files = await response.json();
    const cache = await caches.open(CACHE);
    await cache.addAll(files);
    self.skipWaiting();
  })());
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((key) => key.startsWith("cap8-r4-integrated-natural-") && key !== CACHE).map((key) => caches.delete(key)));
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== self.location.origin) return;
  event.respondWith((async () => {
    const cached = await caches.match(event.request);
    if (cached) return cached;
    try {
      const response = await fetch(event.request);
      if (response.ok) (await caches.open(CACHE)).put(event.request, response.clone());
      return response;
    } catch {
      return caches.match("./index.html");
    }
  })());
});
