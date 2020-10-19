let CACHE_NAME = 'vasanimit9.github.io.7';

let URLS_TO_CACHE = [
  '/terminal-pwa/',
  '/terminal-pwa/mit_ascii.txt',
  '/terminal-pwa/hallows_ascii.txt',
  '/terminal-pwa/assets/CascadiaCodePL.woff2',
  '/terminal-pwa/logo.png'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(URLS_TO_CACHE);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response && !(
                    event.request.url.includes('.json') ||
                    event.request.url.toLowerCase().includes('worker')
                )) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});

self.addEventListener('activate', event => {
    let cacheWhiteList = [CACHE_NAME];
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheWhiteList.indexOf(cacheName) === -1) {
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});
