const CACHE_NAME = 'naad-player-v1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './Flag_of_India.png',
  './Asap-Light.otf',
  './Asap-Regular.otf',
  './Asap-Medium.otf',
  './Asap-SemiBold.otf',
  './Asap-Bold.otf',
  './TiroDevanagariHindi-Regular.ttf'
];

// Install Event - Cache Assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate Event - Cleanup Old Caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      );
    })
  );
});

// Fetch Event - Serve from Cache, fall back to Network
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      return cachedResponse || fetch(event.request);
    })
  );
});