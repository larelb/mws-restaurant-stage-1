const urls = [
    'css/styles.css',
    'img/resized_imgs/chef-small.png',
    'js/sw/index.js',
    'js/dbhelper.js',
    'js/main.js',
    'js/restaurant_info.js'

];

self.addEventListener('install', function(event){
    event.waitUntil(
        caches.open('resources').then(function (cache) {
          return cache.addAll(urls);
        })
    );
});

self.addEventListener('fetch', function(event) {
   event.respondWith(
     caches.match(event.request).then(function(response){
       return response || fetch(event.request);
     })
   );
});