const CACHE_NAME = "karang-taruna-cache-v1";
const urlsToCache = [
  "/index.html",
  "/admin.html",
  "/style.css",
  "/admin.css",
  "/script.js",
  "/service-worker.js",
  "/pengeluaran.css",
  "/pengeluaran.js",
  "/manifest.json",
  "/logokatar.png",
  "/logokatar2.png",
  // tambahkan file lain jika perlu:
  // "/absenanggota.html",
  // "/laporan.html",
  // "/inputanggota.html",
  // "/informasi.html",
  // "/login.html",
  // "/pengeluaran.html",
  // "/sisadana.html",
  // "/strukturorganisasi.html",
  // "/pemasukan.html",
  // "/kegiatan.html",
  // "/addberita.html",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

self.addEventListener("activate", (event) => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
