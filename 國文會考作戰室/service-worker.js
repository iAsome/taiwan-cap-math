const CACHE = "cap-chinese-r4-v2";
const CORE = [
  "./",
  "./index.html",
  "./styles.css",
  "./data.js",
  "./analysis-data.js",
  "./r4-client.js",
  "./app.js",
  "../shared/fraction-markup.js",
  "../shared/text-only-policy.js",
  "../shared/paper-history-ui.js",
  "../shared/exam-choice-ui.js",
  "./r4/runtime/manifest.json",
  "./r4/runtime/catalog.json",
  "./r4/runtime/stimuli.json",
  "./r4/runtime/stimulus-questions.json",
  "./r4/runtime/writing-tasks.json",
  "./r4/runtime/assets.json",
  ...Array.from({ length: 48 }, (_, index) => `./r4/runtime/units/CHI_R4_U${String(index + 1).padStart(2, "0")}.json`),
  ...Array.from({ length: 24 }, (_, index) => `./r4/runtime/assets/CHI_R4_ASSET_${String(index + 1).padStart(3, "0")}.svg`),
];

self.addEventListener("install", event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(CORE)).then(() => self.skipWaiting())));
self.addEventListener("activate", event => event.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))).then(() => self.clients.claim())));
self.addEventListener("fetch", event => {
  if (event.request.method !== "GET" || new URL(event.request.url).origin !== location.origin) return;
  event.respondWith(caches.match(event.request, { ignoreSearch: true }).then(hit => hit || fetch(event.request).then(response => {
    if (response.ok) caches.open(CACHE).then(cache => cache.put(event.request, response.clone()));
    return response;
  }).catch(() => event.request.mode === "navigate" ? caches.match("./index.html") : Response.error())));
});
