const CACHE_NAME = 'faizenagina-v1';
const assetsToCache = [
  '/faizenagina/',
  '/faizenagina/index.html'
];

// Installs Service Worker & Caches assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

// Serve cached files when offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
