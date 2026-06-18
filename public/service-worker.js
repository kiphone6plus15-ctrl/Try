const CACHE_NAME = "itineris-cache-v1";
const ASSETS_TO_CACHE = [
  "/",
  "/index.html",
  "/manifest.json",
  "/icon-512.jpg"
];

// Installation: cash static core elements
self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log("[Service Worker] Pre-caching core travel elements");
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activation: purge older legacy caches
self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log("[Service Worker] Purging legacy cache:", cache);
            return caches.delete(cache);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch events: apply tailored caching rules
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);

  // Network-First for Instant Weather Station Forecasts
  if (url.hostname === "api.open-meteo.com") {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.status === 200) {
            const responseClone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, responseClone);
            });
          }
          return response;
        })
        .catch(() => {
          return caches.match(event.request);
        })
    );
    return;
  }

  // Stale-While-Revalidate for JS, CSS, fonts, and assets to preserve high speeds & offline availability
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        // Fetch to update cache silently
        fetch(event.request)
          .then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse.clone());
              });
            }
          })
          .catch((err) => console.log("[Service Worker] Background update bypassed", err));

        return cachedResponse;
      }

      return fetch(event.request).then((networkResponse) => {
        if (!networkResponse || networkResponse.status !== 200) {
          return networkResponse;
        }

        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, responseToCache);
        });

        return networkResponse;
      });
    })
  );
});

// Listening to client-triggered events for simulated or direct push reminders
self.addEventListener("message", (event) => {
  if (event.data && event.data.action === "showNotification") {
    const { title, body, icon, tag } = event.data;
    const options = {
      body: body || "Itineris 歐洲行程提醒",
      icon: icon || "/icon-512.jpg",
      badge: "/icon-512.jpg",
      vibrate: [100, 50, 100],
      data: {
        dateOfArrival: Date.now()
      },
      actions: [
        { action: "explore", title: "查看行程 Explore" },
        { action: "close", title: "關閉 Close" }
      ],
      tag: tag || "itineris-reminder"
    };

    event.waitUntil(
      self.registration.showNotification(title, options)
    );
  }
});

// Open application on tapping travel notifications
self.addEventListener("notificationclick", (event) => {
  const notification = event.notification;
  const action = event.action;

  if (action === "close") {
    notification.close();
  } else {
    event.waitUntil(
      clients.matchAll({ type: "window" }).then((windowClients) => {
        for (let i = 0; i < windowClients.length; i++) {
          const client = windowClients[i];
          if (client.url === "/" && "focus" in client) {
            return client.focus();
          }
        }
        if (clients.openWindow) {
          return clients.openWindow("/");
        }
      })
    );
    notification.close();
  }
});
