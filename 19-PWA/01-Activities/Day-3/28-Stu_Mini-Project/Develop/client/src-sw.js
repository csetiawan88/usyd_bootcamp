// TODO: Create a service worker that caches static assets:

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/6.3.0/workbox-sw.js"
);

workbox.setConfig({ debug: true });

// Cache static assets during the installation phase
workbox.precaching.precacheAndRoute([
  { url: "/", revision: "1" }, // Cache the root URL
  { url: "/index.html", revision: "1" }, // Cache your HTML files
  { url: "/styles.css", revision: "1" }, // Cache your CSS files
  { url: "/assets/js/main.js", revision: "1" }, // Cache your JavaScript files
  { url: "/assets/images/logo.png", revision: "1" }, // Cache your images
  // Add more assets to cache as needed
]);

// Cache the requests for your API or database data using a custom strategy
workbox.routing.registerRoute(
  "/api/data", // Replace with the URL of your data API
  new workbox.strategies.NetworkFirst()
);

// Cache Google Fonts (example)
workbox.routing.registerRoute(
  /^https:\/\/fonts\.googleapis\.com/,
  new workbox.strategies.StaleWhileRevalidate()
);

// Handle requests for offline pages (fallback)
workbox.routing.setCatchHandler(({ event }) => {
  switch (event.request.destination) {
    case "document":
      return caches.match("/offline.html"); // Provide an offline HTML page
    default:
      return Response.error();
  }
});
