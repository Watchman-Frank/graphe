// Graphe Service Worker — offline-first caching
// Caches Bible text, cross-refs, word study, patristic, and commentary
// as the user navigates. Previously read content works without internet.

const VERSION = 'graphe-v1';

const CACHES = {
  shell:      `${VERSION}-shell`,
  bibleText:  `${VERSION}-bible-text`,
  bibleData:  `${VERSION}-bible-data`,
  commentary: `${VERSION}-commentary`,
  assets:     `${VERSION}-assets`,
};

// App shell — pre-cached on install
const SHELL_URLS = [
  '/',
  '/bible',
  '/manifest.json',
  '/icon-192.png',
  '/icon-512.png',
];

// ── Install: cache shell ──────────────────────────────────────────────────────

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHES.shell)
      .then(c => c.addAll(SHELL_URLS).catch(() => {})) // don't fail if a shell URL 404s
      .then(() => self.skipWaiting())
  );
});

// ── Activate: delete old caches ───────────────────────────────────────────────

self.addEventListener('activate', event => {
  const keep = new Set(Object.values(CACHES));
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => !keep.has(k)).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

// ── Helpers ───────────────────────────────────────────────────────────────────

function isNavigationRequest(req) {
  return req.mode === 'navigate';
}

// NetworkFirst: try network, fall back to cache, optionally cache successful responses
async function networkFirst(req, cacheName, { timeoutMs = 10000, store = true } = {}) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    const res = await fetch(req, { signal: controller.signal });
    clearTimeout(timer);
    if (res.ok && store) {
      const cache = await caches.open(cacheName);
      cache.put(req, res.clone());
    }
    return res;
  } catch {
    clearTimeout(timer);
    const cached = await caches.match(req);
    if (cached) return cached;
    throw new Error('offline and not cached');
  }
}

// CacheFirst: serve from cache if available, fetch and cache otherwise
async function cacheFirst(req, cacheName) {
  const cached = await caches.match(req);
  if (cached) return cached;
  const res = await fetch(req);
  if (res.ok) {
    const cache = await caches.open(cacheName);
    cache.put(req, res.clone());
  }
  return res;
}

// ── Fetch routing ─────────────────────────────────────────────────────────────

self.addEventListener('fetch', event => {
  const { request } = event;
  const url = new URL(request.url);

  // Only handle GET requests
  if (request.method !== 'GET') return;

  // Skip chrome-extension and non-http(s) requests
  if (!url.protocol.startsWith('http')) return;

  const path = url.pathname;

  // 1. Pre-built static Bible data (crossrefs, patristic, wordstudy) — CacheFirst
  if (/^\/(crossrefs|patristic|wordstudy)\//.test(path)) {
    event.respondWith(cacheFirst(request, CACHES.bibleData));
    return;
  }

  // 2. Internal Bible API — NetworkFirst, cache the response
  if (path.startsWith('/api/bible')) {
    event.respondWith(networkFirst(request, CACHES.bibleText));
    return;
  }

  // 3. Internal commentary API — NetworkFirst, cache
  if (path.startsWith('/api/commentary')) {
    event.respondWith(networkFirst(request, CACHES.commentary, { timeoutMs: 15000 }));
    return;
  }

  // 4. External: bible-api.com — NetworkFirst
  if (url.hostname === 'bible-api.com') {
    event.respondWith(networkFirst(request, CACHES.bibleText));
    return;
  }

  // 5. External: bible.helloao.org (HelloAO commentary) — NetworkFirst
  if (url.hostname === 'bible.helloao.org') {
    event.respondWith(networkFirst(request, CACHES.commentary, { timeoutMs: 12000 }));
    return;
  }

  // 6. Static assets (fonts, images, icons) — CacheFirst
  if (/\.(woff2?|ttf|eot|svg|png|jpg|jpeg|webp|ico|css)$/i.test(path)) {
    event.respondWith(cacheFirst(request, CACHES.assets));
    return;
  }

  // 7. App shell / navigation — NetworkFirst with shell fallback
  if (isNavigationRequest(request)) {
    event.respondWith(
      networkFirst(request, CACHES.shell, { store: true }).catch(async () => {
        const cached = await caches.match('/') ?? new Response('Offline', { status: 503 });
        return cached;
      })
    );
    return;
  }

  // 8. Next.js chunks and other static files — CacheFirst
  if (path.startsWith('/_next/static/')) {
    event.respondWith(cacheFirst(request, CACHES.assets));
    return;
  }
});
