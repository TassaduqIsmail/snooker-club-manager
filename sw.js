const CACHE_NAME = 'snooker-club-v1';
const ASSETS = ['./', './index.html', './manifest.json'];

self.addEventListener('install', function(e) {
    e.waitUntil(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.addAll(ASSETS);
        }).then(function() {
            return self.skipWaiting();
        })
    );
});

self.addEventListener('activate', function(e) {
    e.waitUntil(
        caches.keys().then(function(keys) {
            return Promise.all(keys.filter(function(k) {
                return k !== CACHE_NAME;
            }).map(function(k) {
                return caches.delete(k);
            }));
        }).then(function() {
            return self.clients.claim();
        })
    );
});

self.addEventListener('fetch', function(e) {
    if (e.request.method !== 'GET') return;
    e.respondWith(
        fetch(e.request).then(function(response) {
            const copy = response.clone();
            caches.open(CACHE_NAME).then(function(cache) {
                cache.put(e.request, copy);
            });
            return response;
        }).catch(function() {
            return caches.match(e.request).then(function(cached) {
                return cached || caches.match('./index.html');
            });
        })
    );
});
