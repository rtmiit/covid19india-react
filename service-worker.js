if (typeof importScripts === 'function') {
  importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js'
  );

  /* global workbox */
  if (workbox) {
    console.log('Workbox is loaded 🚀');
    workbox.core.skipWaiting();

    /* injection point for manifest files.  */
    workbox.precaching.precacheAndRoute([{"revision":"2fb9926f1f9b55cab58982cfce36a6ae","url":"404.html"},{"revision":"0c209acdd19f6732370568f7a6ae0bdf","url":"ece08537062c28a2a7c1.worker.js"},{"revision":"ad8463d1313fed60e1d10324511efdc3","url":"fonts/Archia/archia-bold-webfont.woff2"},{"revision":"80da55a565ba8976b8e9e84e8c511bf7","url":"fonts/Archia/archia-medium-webfont.woff2"},{"revision":"890ee929da47c4931933ff77fd557520","url":"fonts/Archia/archia-semibold-webfont.woff2"},{"revision":"2fb9926f1f9b55cab58982cfce36a6ae","url":"index.html"},{"revision":"eeac622a866303ae87cc4c5bc1e8cc28","url":"static/css/19.f5f9d973.chunk.css"},{"revision":"3a9110ae9e9919cf864852f316e8e086","url":"static/css/2.1432c553.chunk.css"},{"revision":"723dfd96b31b160e86a3156d9d56f338","url":"static/css/20.0a66d30b.chunk.css"},{"revision":"038a830223503314180873a2c08b9a52","url":"static/js/0.3d2b55ab.chunk.js"},{"revision":"47de7fac0a8841a3862c8af3b4511698","url":"static/js/1.d1d41a33.chunk.js"},{"revision":"e8c7289ec8f096c5752679732a1ba6fa","url":"static/js/11.a020ed75.chunk.js"},{"revision":"65ccfa40894516a540f7446e52a72e6d","url":"static/js/12.096d9c24.chunk.js"},{"revision":"50a20597a4a033646e3a27a65b422022","url":"static/js/13.1aa96460.chunk.js"},{"revision":"e9d9925e659b2b1fca03f39212b2afbe","url":"static/js/14.64c2b908.chunk.js"},{"revision":"2d493ad7b1e40335e7f0f0f51ea31b49","url":"static/js/15.80558f31.chunk.js"},{"revision":"67d8a806c9874fde1170b7d93b947e51","url":"static/js/16.ca980084.chunk.js"},{"revision":"ea0992ee178606883c65bfb0ff51e1f7","url":"static/js/17.37518333.chunk.js"},{"revision":"5caa5b2d79c8100a70c0ac8c68af827a","url":"static/js/18.caa29c5f.chunk.js"},{"revision":"564a5c0768a8882191e3ed5383e32102","url":"static/js/19.ac02f9db.chunk.js"},{"revision":"4a449c4ec4d88f7091a4b2965e6eabfd","url":"static/js/2.b11ebcda.chunk.js"},{"revision":"f32eb3c6a8739ca7b2442f8d696bbb3f","url":"static/js/20.96447726.chunk.js"},{"revision":"616dc24fb6e74593c1c9814f1dc035b0","url":"static/js/21.907f352f.chunk.js"},{"revision":"bc1c0b520024b3a58b5e403f09458eb3","url":"static/js/22.8d0e0bce.chunk.js"},{"revision":"8830faa7f401a6b37ccf0da489a89208","url":"static/js/23.dcb87a78.chunk.js"},{"revision":"159f99264c51bd43e273727853656da9","url":"static/js/24.69fb1cd8.chunk.js"},{"revision":"f0a5d7dbdf5b2d914e34f5d105f7e21e","url":"static/js/25.55b2e83f.chunk.js"},{"revision":"ee7e89a65071093f821186b4b16157eb","url":"static/js/26.c8ee9216.chunk.js"},{"revision":"04902f5798d5bfc2d60192e7ea1cef75","url":"static/js/27.c98b4a21.chunk.js"},{"revision":"881c41346083586ee8e7cf4ba5f8a9d6","url":"static/js/28.86eb51a7.chunk.js"},{"revision":"d14962e9918688b5d6d043ae4ed6b88a","url":"static/js/29.ddd0e54d.chunk.js"},{"revision":"1ea851f6c40bd35f50b5cb5c2186904b","url":"static/js/3.0c7e07bb.chunk.js"},{"revision":"d3fe5bd677b1edc7dcb09fddac11081f","url":"static/js/30.72affd02.chunk.js"},{"revision":"12f3799ef71b31694ec8482cb2142bc4","url":"static/js/31.dd5509aa.chunk.js"},{"revision":"705a404ffeca983b9e601d3d1dd616e1","url":"static/js/32.f4031bb2.chunk.js"},{"revision":"e67bf210c5139ccc5142c031afe7d13e","url":"static/js/33.46fe673e.chunk.js"},{"revision":"c4a499d11bc36dcd6db456dd01c85385","url":"static/js/34.4d395c2e.chunk.js"},{"revision":"f9cfc1a65958159d7f10908e09fc6e71","url":"static/js/35.cae51304.chunk.js"},{"revision":"23a25324b9c5f9ae4e80293bbfdaeaec","url":"static/js/36.d408e911.chunk.js"},{"revision":"7777ef57e05046af530cae25550d9bda","url":"static/js/37.d6d4c3ba.chunk.js"},{"revision":"f6042f0ac2997c37180eed250ef63f4e","url":"static/js/38.ba87d737.chunk.js"},{"revision":"10738627bd1416a9a76be18a04667003","url":"static/js/39.540ea9c4.chunk.js"},{"revision":"9d2041d2f862801abc6bc0b466acd1ca","url":"static/js/4.9e8df44d.chunk.js"},{"revision":"2f93724ede8ced8b4b6996761ba06741","url":"static/js/40.03f6e85f.chunk.js"},{"revision":"69446f840392da53950bee1f15efe809","url":"static/js/41.67e36996.chunk.js"},{"revision":"0b050210ca2c7c4451fe21e4f866ee35","url":"static/js/42.8b94c6e5.chunk.js"},{"revision":"302f6f8b38e50da550e4f8eff95256b5","url":"static/js/43.54008acb.chunk.js"},{"revision":"48cb079be09c32c306d1c05110c8d99a","url":"static/js/5.c99dd339.chunk.js"},{"revision":"939a171120be774ce63ed07d7777339e","url":"static/js/6.1261f1fa.chunk.js"},{"revision":"a47ce8f68fc4fbbcdd61d3563b014344","url":"static/js/7.2a1e978d.chunk.js"},{"revision":"d92518b3d9a3ecb6c23472c5107c7230","url":"static/js/8.44ee6ac1.chunk.js"},{"revision":"d6e5b126860a4a41f2b4951ae11bb344","url":"static/js/main.73b0d3b3.chunk.js"},{"revision":"c5b76d188817106d2db2a603b1a4bb48","url":"static/js/runtime-main.95e0f324.js"}]);

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
