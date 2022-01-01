if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"610906e3d239535e524875ed951c1871","url":"404.html"},{"revision":"0c209acdd19f6732370568f7a6ae0bdf","url":"ece08537062c28a2a7c1.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"610906e3d239535e524875ed951c1871","url":"index.html"},{"revision":"eeac622a866303ae87cc4c5bc1e8cc28","url":"static/css/19.f5f9d973.chunk.css"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"723dfd96b31b160e86a3156d9d56f338","url":"static/css/20.0a66d30b.chunk.css"},{"revision":"038a830223503314180873a2c08b9a52","url":"static/js/0.3d2b55ab.chunk.js"},{"revision":"ef5b8fa6dbb1c53d862c428031f5ec7a","url":"static/js/1.ce0bd934.chunk.js"},{"revision":"5f7c2a35703a71fd4db5e46a2547d443","url":"static/js/11.6097a148.chunk.js"},{"revision":"f05008898124c987511a59565e77c96f","url":"static/js/12.5979d5b2.chunk.js"},{"revision":"b346675053fac91b6670a3e2371c73ba","url":"static/js/13.c9e48b96.chunk.js"},{"revision":"1dec421ccf151c85681ac584180a95a8","url":"static/js/14.924ce59b.chunk.js"},{"revision":"2d493ad7b1e40335e7f0f0f51ea31b49","url":"static/js/15.80558f31.chunk.js"},{"revision":"40848bd9b572ab20ebed0353cd69bb8b","url":"static/js/16.c005f93e.chunk.js"},{"revision":"a5aad39191880ed324cd1cfc5e4ff9b3","url":"static/js/17.0c710a67.chunk.js"},{"revision":"f4788aed3e204308e3bad9826d65f0a0","url":"static/js/18.680329d5.chunk.js"},{"revision":"ffadb846a8dbddb925a0e2551d04a26d","url":"static/js/19.299bc49d.chunk.js"},{"revision":"4a449c4ec4d88f7091a4b2965e6eabfd","url":"static/js/2.b11ebcda.chunk.js"},{"revision":"3545cc632708637b1c5486b4e2be3c75","url":"static/js/20.b7837c85.chunk.js"},{"revision":"01410cfbb90d12dac58515a457de2426","url":"static/js/21.c694282f.chunk.js"},{"revision":"54a90b1201722307f51baa7e255578a0","url":"static/js/22.ba90a80e.chunk.js"},{"revision":"8830faa7f401a6b37ccf0da489a89208","url":"static/js/23.dcb87a78.chunk.js"},{"revision":"495318120d38bef0edf6151d9153149a","url":"static/js/24.8f6d1cc2.chunk.js"},{"revision":"bd64d2b5450f18c5b5aca30886a91c34","url":"static/js/25.fe50d40e.chunk.js"},{"revision":"ee7e89a65071093f821186b4b16157eb","url":"static/js/26.c8ee9216.chunk.js"},{"revision":"74896e5c7fc479dab4f73f12a2f03c10","url":"static/js/27.5c4eed0d.chunk.js"},{"revision":"db311d90922f0ae286a327e86aa53546","url":"static/js/28.43bba756.chunk.js"},{"revision":"d14962e9918688b5d6d043ae4ed6b88a","url":"static/js/29.ddd0e54d.chunk.js"},{"revision":"8bca5def6929b6a84a196f1750c73684","url":"static/js/3.fcdbabd9.chunk.js"},{"revision":"d3fe5bd677b1edc7dcb09fddac11081f","url":"static/js/30.72affd02.chunk.js"},{"revision":"bebae48d6e4fe8a93363f63da5fe4b95","url":"static/js/31.d6ddb51e.chunk.js"},{"revision":"95a9f6ded63376b683a5401a06ccfb4f","url":"static/js/32.55ee9b55.chunk.js"},{"revision":"72f7865135278edef93d00992ea0ae70","url":"static/js/33.da0d7c50.chunk.js"},{"revision":"2f583ea0b3abbcf02b8951a96ac82529","url":"static/js/34.7ce2e1a5.chunk.js"},{"revision":"f3b89c38c6f86d8bebdfeb1b97699246","url":"static/js/35.8a930b4a.chunk.js"},{"revision":"56420a40e5236322b6b385f27f77d94e","url":"static/js/36.cbb408c0.chunk.js"},{"revision":"11aab6549e08faaaf21f5e3d2ce1f90d","url":"static/js/37.453038bb.chunk.js"},{"revision":"45d637c43ef249c3c432c5945724bd61","url":"static/js/38.dea13c3d.chunk.js"},{"revision":"c19c6451b8616b55032b8a571485e90d","url":"static/js/39.d3938ee3.chunk.js"},{"revision":"9d2041d2f862801abc6bc0b466acd1ca","url":"static/js/4.9e8df44d.chunk.js"},{"revision":"7f68103150d2e65fadc8d3b6953369f0","url":"static/js/40.9cc27255.chunk.js"},{"revision":"5359d3c0535a105c684d8f74aa20b542","url":"static/js/41.77948080.chunk.js"},{"revision":"0b050210ca2c7c4451fe21e4f866ee35","url":"static/js/42.8b94c6e5.chunk.js"},{"revision":"302f6f8b38e50da550e4f8eff95256b5","url":"static/js/43.54008acb.chunk.js"},{"revision":"3e83f1033eb8150a43a3cf54d8c5d27b","url":"static/js/5.f2f6246f.chunk.js"},{"revision":"939a171120be774ce63ed07d7777339e","url":"static/js/6.1261f1fa.chunk.js"},{"revision":"44a899a18b7f8679390d0bb0a2b252da","url":"static/js/7.04a89fa9.chunk.js"},{"revision":"d92518b3d9a3ecb6c23472c5107c7230","url":"static/js/8.44ee6ac1.chunk.js"},{"revision":"978da8957c8e1f659742d9181d8de449","url":"static/js/main.745c043f.chunk.js"},{"revision":"44f5c73fe152e5022f01805c32f93ea2","url":"static/js/runtime-main.d19b469b.js"}]);

    /* custom cache rules */
    workbox.routing.registerRoute(
      new workbox.routing.NavigationRoute(
        new workbox.strategies.NetworkFirst({
          cacheName: 'PRODUCTION',
        })
      )
    );

    // Adding staleWhileRevalidate for all js files. Provide faster access from cache while revalidating in the background
    workbox.routing.registerRoute(
      /.*\.js$/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all html files
    workbox.routing.registerRoute(
      /.*\.html/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding staleWhileRevalidate for all css files
    workbox.routing.registerRoute(
      /.*\.css/,
      new workbox.strategies.StaleWhileRevalidate()
    );

    // Adding networkFirst for all json data. In offline mode will be fetched from cache
    workbox.routing.registerRoute(
      new RegExp('https://data\\.covid19india\\.org/.*\\.json'),
      new workbox.strategies.NetworkFirst(),
      'GET'
    );
  } else {
    console.log('Workbox could not be loaded. Hence, no offline support.');
  }
}
