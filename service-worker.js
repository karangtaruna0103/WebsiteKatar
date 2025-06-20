self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('kartar-v1').then((cache) => {
      return cache.addAll([
        '/index.html',
        '/admin.html',
        '/style.css',
        '/admin.css',
        '/script.js',
        '/pengeluaran.css',
        '/pengeluaran.js',
        '/manifest.json',
        '/icon-192.png',
        '/icon-512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
