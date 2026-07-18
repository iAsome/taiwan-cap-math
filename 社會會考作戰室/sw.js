const CACHE_NAME = "cap8-r4-integrated-social-v4.0.0-shell-20260718a";
const CORE = [
  "./",
  "./index.html",
  "./styles.css",
  "../shared/subject-shell.css?v=20260718a",
  "./app.js",
  "./runtime.js",
  "./runtime/catalog.json",
  "./manifest.webmanifest",
  "../icon.svg",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(CORE)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key.startsWith("cap8-r4-integrated-social-") && key !== CACHE_NAME).map((key) => caches.delete(key)))).then(() => self.clients.claim()));
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(caches.match(event.request).then((cached) => cached || fetch(event.request).then((response) => {
    if (response.ok && new URL(event.request.url).origin === self.location.origin) caches.open(CACHE_NAME).then((cache) => cache.put(event.request, response.clone()));
    return response;
  }).catch(() => event.request.mode === "navigate" ? caches.match("./index.html") : undefined)));
});
