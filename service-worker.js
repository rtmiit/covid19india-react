if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"d8aba787f1baf435830af6fbfa205c0b","url":"0c04ad058932f45ef2d0.worker.js"},{"revision":"9c9d1a26a483ae66ca8244abba938eb8","url":"404.html"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"9c9d1a26a483ae66ca8244abba938eb8","url":"index.html"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"1139c7f91659b8d1e1f13fd2fdfdf753","url":"static/css/21.f5f9d973.chunk.css"},{"revision":"e1b4bb7171f893224fd40d3fb983c9a2","url":"static/css/22.80df4701.chunk.css"},{"revision":"0ff5cf098070438329a1271ddf981ca0","url":"static/js/0.a0c39cc9.chunk.js"},{"revision":"4d9d0ef2918171537e28b021a0ea534a","url":"static/js/1.afee8a2a.chunk.js"},{"revision":"03b8f177cb7c4265ea61b90851d0df6b","url":"static/js/11.3fe09a51.chunk.js"},{"revision":"5fc243eb61452c1b3e6d81d027377ceb","url":"static/js/12.08359b2c.chunk.js"},{"revision":"b471c43ec94795d21f7eac1e9482e216","url":"static/js/13.2a89e2b4.chunk.js"},{"revision":"cb5da0790e389696572791e03befa295","url":"static/js/14.130945a9.chunk.js"},{"revision":"4f87ced6bbd0eba95d8c08cdc388fabe","url":"static/js/15.d5336327.chunk.js"},{"revision":"b5273447404d070519f374c2370fb79b","url":"static/js/16.d460e962.chunk.js"},{"revision":"2b2211266eb94ade4c3219bdd8190d11","url":"static/js/17.3b8ee9fe.chunk.js"},{"revision":"bef049d9b3486d2a79876bc5fe47512a","url":"static/js/18.76e5ccd7.chunk.js"},{"revision":"60dbbd356a4c3126cf9289e7b996df20","url":"static/js/19.06fcb32d.chunk.js"},{"revision":"f0fbd43ae3c7cb2bce87ae3f37d9b816","url":"static/js/2.b9040596.chunk.js"},{"revision":"af982a4da863fd8cbff5d5184e0bfa97","url":"static/js/20.d68d0750.chunk.js"},{"revision":"e444ba9320ab006b8cc3216d8de6cfac","url":"static/js/21.f26c751b.chunk.js"},{"revision":"907cd55183582eeb67a190c90d196428","url":"static/js/22.649b10d8.chunk.js"},{"revision":"67f3073a7a06fc87e22cf8d7b72b05d2","url":"static/js/23.18371aa3.chunk.js"},{"revision":"c6dee79f672ad5f78f91becfa53e1249","url":"static/js/24.9c449361.chunk.js"},{"revision":"dbafdbd551f5cec14aff50957cd88fce","url":"static/js/25.a843bcad.chunk.js"},{"revision":"23deca0c1af81b70fc4d458fbc84ca03","url":"static/js/26.4d1c5a86.chunk.js"},{"revision":"a9bd237625da3e52f082f4796653c7d6","url":"static/js/27.5adfbea0.chunk.js"},{"revision":"bc74680d6526f1e6383f59cf8aa8ff41","url":"static/js/28.8031687a.chunk.js"},{"revision":"b0a0037fdce0e7a78449151263fc5ba9","url":"static/js/29.40f59c61.chunk.js"},{"revision":"61381fe58b06393a5309ac941bccac99","url":"static/js/3.8db8b9e1.chunk.js"},{"revision":"0cbc69a6551fbe932348a39e56ab133e","url":"static/js/30.2de15528.chunk.js"},{"revision":"ebeba6069df8acee5ae663b798c57e9e","url":"static/js/31.f4118833.chunk.js"},{"revision":"74e9680b365c7186b3643f1f9cce9db0","url":"static/js/32.177efa5e.chunk.js"},{"revision":"97470936ee2c13625645b010b4ee7355","url":"static/js/33.169a5f31.chunk.js"},{"revision":"7f63b68ff36901ccb0fab57cf40d371d","url":"static/js/34.eec19cd9.chunk.js"},{"revision":"c1681208ecf31de54862a1da2dbaf4ba","url":"static/js/35.00259ce2.chunk.js"},{"revision":"d1a2c870c57aad02b400e52b7f5c6d00","url":"static/js/36.ff497dd1.chunk.js"},{"revision":"91644392dc03bc432021239bac76deea","url":"static/js/37.9c0fcaf3.chunk.js"},{"revision":"d8894e5e89069db1c3cea6904e3c054f","url":"static/js/38.e2ff82bb.chunk.js"},{"revision":"1b4ec1e90fb5ab762d2f7703caaeefed","url":"static/js/39.d1182d34.chunk.js"},{"revision":"6f2d773a71432e513a78fcdf2626b9a0","url":"static/js/4.2c0898e3.chunk.js"},{"revision":"274597e2ccd135b5392bb035cba20c9b","url":"static/js/40.b1fa4ad0.chunk.js"},{"revision":"053fa065e283ca71909e283e505b1ada","url":"static/js/41.e35db9af.chunk.js"},{"revision":"0ce08e946c5dc458d4c3cdafd1edaec0","url":"static/js/42.45eaf53e.chunk.js"},{"revision":"919d442a1f649d4920a7c2e27d86ccba","url":"static/js/43.732ad627.chunk.js"},{"revision":"003828e2a139ccf7b40eb589ccc970fb","url":"static/js/44.1474fed8.chunk.js"},{"revision":"13cefcd0461769506093a21639276e12","url":"static/js/45.bd4ac566.chunk.js"},{"revision":"a5483a5bb0b0a98302cf07d2452f7244","url":"static/js/46.8c39b76b.chunk.js"},{"revision":"5c89275c366c91f663327985a5625544","url":"static/js/5.83109e4c.chunk.js"},{"revision":"2586bf0c80b72ae133c72b656d3f23b3","url":"static/js/6.59de0973.chunk.js"},{"revision":"685a5ab8c030d3b9b38ab827d8d37336","url":"static/js/7.25f0e432.chunk.js"},{"revision":"6460fa53f7dd6cac66a11c1cdd841fdc","url":"static/js/8.d117be68.chunk.js"},{"revision":"78fe4ab95a7ebd202dbc82b59dd51dd4","url":"static/js/main.ad1ad89b.chunk.js"},{"revision":"0fb7c958ff33d953539cc3ce195dbfd2","url":"static/js/runtime-main.35604e5a.js"}]);

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
