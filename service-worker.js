const cacheName = "cacheAssets-v11";

self.addEventListener("install", (event) => {
  self.skipWaiting();

  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll([
        "/",
        "/index.html",
        "images/background.jpg",
        "images/logo.png",
        "/javascript.js",
        "/contact.css",
        "/manifest.json",
        "/js/scripts.js",
        "/icons/favicon-16x16.png",
        "/icons/favicon-32x32.png",
        "icons/android-chrome-192x192.png",
      ]);
    })
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(clients.claim());

  event.waitUntil(
    caches.keys().then((cacheNames) => {
      cacheNames.forEach((item) => {
        if (item !== cacheName) {
          caches.delete(item);
        }
      });
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.open(cacheName).then((cache) => {
      return cache.match(event.request).then((response) => {
        return response || fetch(event.request);
      });
    })
  );
});
