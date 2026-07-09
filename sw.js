const CACHE = 'anesthetick-v2';
const URLS = [
  'index.html',
  'app.js',
  'styles.css',
  'data.js',
  'manifest.json',
  'assets/icon.svg',
  'assets/icon-192.png',
  'assets/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(URLS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  // Never intercept cross-origin requests (e.g. api.github.com) — let them hit the network
  // directly so the app gets real JSON, not a cached HTML fallback.
  if (url.origin !== location.origin) {
    e.respondWith(fetch(e.request).catch(() => new Response('', { status: 502, statusText: 'network error' })));
    return;
  }
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(res => {
      const cp = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, cp));
      return res;
    }).catch(() => caches.match('index.html')))
  );
});
