const CONTENT_VERSION = "4.0.0";
const CACHE_TAG = CONTENT_VERSION.replaceAll(".", "-");
const CACHE = `cap8-r4-biology-shell-${CACHE_TAG}`;
const CONTENT_CACHE = `cap8-r4-biology-content-${CACHE_TAG}`;
const SHELL = ["./", "index.html", "icon.svg", "content-manifest-v4.json", "r4/ui/app.js", "r4/ui/styles.css", "r4/runtime/catalog.json"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key.startsWith("cap8-r4-biology-") && ![CACHE, CONTENT_CACHE].includes(key)).map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== location.origin) return;
  event.respondWith((async () => {
    const cached = await caches.match(event.request);
    if (cached) return cached;
    try {
      const response = await fetch(event.request);
      if (response.ok) await (await caches.open(CACHE)).put(event.request, response.clone());
      return response;
    } catch {
      return event.request.mode === "navigate" ? caches.match("./") : Response.error();
    }
  })());
});
