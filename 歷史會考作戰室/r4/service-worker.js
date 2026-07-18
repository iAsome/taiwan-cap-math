const VERSION = "4.0.0";
const CACHE = `cap8-r4-history-shell-${VERSION}-20260718a`;
const CONTENT_CACHE = `cap8-r4-history-${VERSION}`;
const SHELL = ["./", "./index.html", "./styles.css", "../../shared/subject-shell.css?v=20260718a", "./app.js", "./runtime.js", "./runtime/index.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys()
    .then((keys) => Promise.all(keys.filter((key) => key.startsWith("cap8-r4-history-") && ![CACHE, CONTENT_CACHE].includes(key)).map((key) => caches.delete(key))))
    .then(() => self.clients.claim()));
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  const fetchAndCache = () => fetch(event.request).then((response) => {
    if (response.ok && url.origin === location.origin) {
      const target = url.pathname.includes("/runtime/") || url.pathname.includes("/assets/") ? CONTENT_CACHE : CACHE;
      event.waitUntil(caches.open(target).then((cache) => cache.put(event.request, response.clone())));
    }
    return response;
  });
  if (url.pathname.endsWith("/runtime/index.json")) {
    event.respondWith(fetchAndCache()
      .then(async (response) => response.ok ? response : (await caches.match(event.request)) ?? response)
      .catch(async () => (await caches.match(event.request)) ?? Response.error()));
    return;
  }
  event.respondWith(caches.match(event.request).then((cached) => cached || fetchAndCache()));
});
