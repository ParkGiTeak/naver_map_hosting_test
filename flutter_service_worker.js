'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "67d298a578c70cbdc75911932990c06d",
"version.json": "5a3a2b76b17a38ac11f62607301d3632",
"index.html": "3bff1e115cca68d597d86466dfdcaa71",
"/": "3bff1e115cca68d597d86466dfdcaa71",
"main.dart.js": "3539c5f0b86a9cce5238c7341354016e",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "19d17eac4b7a04bee1c10dc25cf1044c",
".git/config": "74abde3c70e90f67b374bfe9910bb402",
".git/objects/61/ac139ffab86be98f67543f33e6e4354114585a": "dcd1b2e39afbf8d540f2f7b39ff47007",
".git/objects/95/da7412d729f2a960fcf6a756d80751101f364b": "99aa1213c13e1ff2fdbe04628b4584bc",
".git/objects/3e/d0ddd7136a48520910e7e4bf665362facd60d4": "c8322669a78b5f07c75b1decdc05718d",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/35/de968e712ec0e6a671d62eea5d47dbd040f5a2": "fd0a9bed3767fa815314d6d54944f813",
".git/objects/60/47852009112706a01c328f0c0332df87a8b8f8": "abfb5d57b3229c9b8b3480a4c6998db5",
".git/objects/5f/2d3e2465fd27286342667401b266729aa13055": "ae608914c1ea2927389906a40927fb6e",
".git/objects/05/dc48081744a6cc5741156b5b58a7e698c1e64b": "610d1fd41680bc37fcf1cbbe8c881c44",
".git/objects/9d/22c916d50b77cb84dce85379aad5a7961e2cce": "1660e1211b740ee43683f9e80de1ae41",
".git/objects/b5/408f259f12dc53fd118c51541aedcdf9d07929": "c85f5054cbce16c26a7f2335b5d8c10d",
".git/objects/bb/3e5efe2a5fd7d6782ccc7c9584dcf12b09be1a": "8c683c1c1c3c82d2bb315a78610a04f0",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/a2/1cba3d8f7d412c2b2a8cc163665747184fb105": "88e195a41964be6442f1f483b1b329c3",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/c6667bbd24db017e34680e36fe694f8dceedea": "e05bc86616721e6a20fbfdea70b4a5fa",
".git/objects/f3/58085ff1b9dc96e99330064ab295cbc01844f5": "70881dde40cb349c71c58b2fe44876a2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/368a35d623472322703b5061ae58bcdeda57b6": "3989fea8d704db2d42ebea023f53e472",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/20/15c999617eddd7444cf82abb18f8d04a08778a": "8ccd991fac7aae6c5f4a13620641f954",
".git/objects/4b/8a3082c8a952c201e988921b9166fd0ff78176": "96bfb9ce6915cb0ea597ba55dcb79a6f",
".git/objects/16/0fb7bbcf45f050878e36d3a000c3548b3f85fa": "4d6ea68a9db9a6fdc03ffeac3ea5158e",
".git/objects/89/98b64ddd31745ce038c4999ead418531e8488c": "0d648e23b64b77937a84a97a427c288f",
".git/objects/1f/23ba8cbaef72ae263649e26d58deedc46ca931": "ad53382ae2536a06f589c2cb8f68642c",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1a/bbc8189be708391a96e1177e28b2c9fc05ec78": "9b1c6c0e4e4d967c44633fb6d6eca1a3",
".git/objects/28/9797b74e2cae7ba9ed34b792275b4dfc605532": "bc11b5643d4b29e799c9c5bd7bb32ef3",
".git/objects/8f/c2ce13497bd75d2fb6424728e3536432cfd681": "e2c3f300e6fe19e796cac934c516f4b3",
".git/objects/8f/615d67300391e090efacdd80a49a99f7b4577b": "6cf603ae558a09486b52042409e88cb6",
".git/objects/8a/2c1d04c6e0762c899b570a86575c6f03a00ab9": "b2bed78df9c6e9e9d803c3e8c66800ec",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/44/3b9453a95104e49f5d2c3669867d10d1d1b318": "56c19fc508b4012c06d82c00fab45813",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/07/bb9843ac188e8c2713484ce0a2893ec2ecac15": "14e8760f8ca2df4baec46b9cde6c679e",
".git/objects/36/711c04fc6d220de396961f9c967c1f4569fd0d": "0d13de722e08ba98621302cf028aed1b",
".git/objects/5c/520472d7f8be9a934d12797a4b3d1f13a03c12": "4827175d3c1d6a0bb078043ec0b0e4cf",
".git/objects/09/fd36b08cbd780591e9e2be120ad894250cac54": "2acc47dd8168b072375140f9444fdd74",
".git/objects/54/58092400d3b4a14bda3f84cd6bb82a7607bbf9": "cd2e088d737df64ac784b8785350b429",
".git/objects/54/6d628dee44e2dc0caa60585e4e24ee4b2a3425": "1545b18c7fdb59bd41424555c68427d3",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/6c/96891d3d9bc507a9b0033de9e2c9a391a6be93": "9a93008d5ddf03a1ce0b38b00ef1ef65",
".git/objects/63/245bd77165e6e49e52dd31afde7e2f6f4f691d": "31ec1fe86b6eb3bf4d5300479ed3dcf2",
".git/objects/bf/4813f541f2c9f5ec42fa5c35e9b538cd40d85d": "32078b6c88a07fe3950af82543ed06bb",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/b6/959079e5b64a1fad944089f1837871fc4b220d": "533a29bf93d214e8b81b0d43bfec0f86",
".git/objects/a9/33d32aee4475bc825218053b76c0db691938ec": "b738ac4378af535c616f890bf2dfc34b",
".git/objects/d5/afd806f136c0fad0e44750fe6764c693a917aa": "00f3cc27f61b1de2a1b751823619aeef",
".git/objects/d5/2873754f4a9b4a9c56197bb3f5076f07598ee0": "33bf0760243ec4e786eba5c876e3bbd0",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/de/2e3fea0c39923ad07a21ab820f4bf06d28c494": "e60d98d13b8ef45c7779d0c72627e2e8",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/a1/c6b9ca0da447d4a33dcdcf949b9c4a290e241d": "76a3af5bfc8ec4075996a7fc894b8bd7",
".git/objects/f9/4dc2f3d3b70372d04988c5e528e86b6d42c8f9": "17fea559f8654de045ed38828609839f",
".git/objects/fa/d4a6b84307c3f359c5756fb462eb4eef3ed18e": "898ecc0be34a587ff3776cfa477b2200",
".git/objects/c5/0671c30f62cb982f34e8458f10378ca91dd461": "a5025b717fc334dc964d64e0615538d5",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/cb/6b7a6137f8e01d986294349a6bc2fadc6d1849": "9df7d09456db8013ef6b3c4b23309f7a",
".git/objects/cb/e66d8ce17f0cc18744bcff2aeee5532b03fad5": "776a528a0c297926079f27b1b3520cfc",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/83/91380ea9bcfe6085462d2c0f4af7a8bfa96b3b": "472b2454107c7f5273abe9e671c27eb0",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/4a/bff5308d1432ec275b05000a377a695d701375": "7313f80a84eb383198da682caa35df5f",
".git/objects/4a/4516756e489510568c7c37a80b3336491743fd": "c4268cd2273cb7d7f0e7459053a78306",
".git/objects/24/736f6be7d74a28163132a0150258758282f481": "ec6024db32eec737211ada65c9d51271",
".git/objects/4f/933a838efe9c097e69d64f7d44f632b987ac4a": "92cfb4860760944248c73e61a4909668",
".git/objects/8d/1592f7a6a20518473e14ddb8e61876f0217b22": "fe49555a9386bdaa17bdfb7fda81f890",
".git/objects/85/ab0c632f8bab05d4351fd3b39d617cf23aacfe": "98b7c3225c17e65fb5b0fa851157e93b",
".git/objects/76/82105583fd141273513d101345d0c4d5c4d73c": "9587eec83aa11aeab6dbf5cf375ab99a",
".git/objects/76/5f7f4d7dba97194ab53bc22fff784bf3329cab": "eee3b5379efb54e3829e3fed4d5688fd",
".git/objects/78/dccb4b683d7f57aa556772e75394e8da24764a": "38dba6a38d07fd30e9c3d39ef4d8be7c",
".git/objects/7f/e90fb5a781ba3398c23d9f6c50857074331e1b": "3cb73d907d693955bff2a32fd7af0a04",
".git/objects/7a/0d49ab125d637845e0981003e039fca8bf06b6": "0b87a24bc953a7ccc0e877ecd67db9d0",
".git/objects/14/b67c956699c6f22982672eeb4640f944c2d2a8": "0f23a45bb20bfc0fa1f4249e78ac110f",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d0571d4e6ebe912a354a13122ba09740",
".git/logs/refs/heads/master": "d0571d4e6ebe912a354a13122ba09740",
".git/logs/refs/remotes/origin/HEAD": "029d054b1003520f8bddea3eb1597af1",
".git/logs/refs/remotes/origin/master": "b33d3e415c28765ba991e0d3b0962f62",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "b49b7729a24a67a136a4dea646c6c9e2",
".git/refs/remotes/origin/HEAD": "73a00957034783b7b5c8294c54cd3e12",
".git/refs/remotes/origin/master": "b49b7729a24a67a136a4dea646c6c9e2",
".git/index": "6438e6194ad606ec4c1cb563956942e9",
".git/COMMIT_EDITMSG": "6b6ca13c88b17d9de845f8446c63c952",
".git/FETCH_HEAD": "bb67e64691b4499dac83beaf00a3eb66",
"assets/AssetManifest.json": "baf6eece588916c4972d1bfe86077a11",
"assets/NOTICES": "9ddd061b92471f531df07133d3e3ed61",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "256a3339e158bb6e3da0268a9c5b90e2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "154eab21dfcabbaf907c12495fd4072b",
"assets/fonts/MaterialIcons-Regular.otf": "c0ad29d56cfe3890223c02da3c6e0448",
"assets/assets/naver_map.html": "d4d24a1c51f034000f88a02b1bbdbd65",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
