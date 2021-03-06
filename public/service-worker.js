self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('8-puzzle').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/manifest.json',
                '/js/bundle.js',
                '/js/puzzle-worker.js',
                '/css/app.css',
                '/favicon.ico',
                '/icons/8puzzle-192.png',
                '/icons/8puzzle-512.png',
                '/assets/sprites/tileset.png',
                '/assets/sprites/tileset.json',
                '/assets/sounds/click.ogg',
                '/assets/sounds/music.mp3',
                '/assets/images/puzzle-01.jpg',
                '/assets/images/puzzle-02.jpg',
                '/assets/images/puzzle-03.jpg',
                '/assets/images/puzzle-04.jpg',
                '/assets/images/puzzle-05.jpg',
                '/assets/images/puzzle-06.jpg',
                '/assets/images/puzzle-07.jpg',
                '/assets/images/puzzle-08.jpg',
                '/assets/images/puzzle-09.jpg',
                '/assets/images/puzzle-10.jpg',
            ]);
        })
    );
});

self.addEventListener('fetch', function (e) {
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});