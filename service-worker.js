/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8129f9422c0235c3fbbcf4fcb2045a61"
  },
  {
    "url": "Another/Fillory.html",
    "revision": "b6366cb947356bcefd9e8112203dddda"
  },
  {
    "url": "Another/MySelf.html",
    "revision": "7fbc565e6af289b0f4bd19a466e39e83"
  },
  {
    "url": "Another/Project.html",
    "revision": "6206c1e4808e71d1e3c3c836a730699b"
  },
  {
    "url": "Another/Review.html",
    "revision": "f504be18c2648f6739a28c747b782c95"
  },
  {
    "url": "assets/css/0.styles.175dd1bb.css",
    "revision": "5d90b8683310b362908fb1fec945f904"
  },
  {
    "url": "assets/img/001.b9fa5ca8.jpg",
    "revision": "b9fa5ca84f89cadc463d44c68ea8e33e"
  },
  {
    "url": "assets/img/002.3813aefb.jpg",
    "revision": "3813aefbd1ce44d9db5ed98db9cc0f4c"
  },
  {
    "url": "assets/img/003.d5ecd8fe.jpg",
    "revision": "d5ecd8fe28a5033d57d79f2bb9f4fb42"
  },
  {
    "url": "assets/img/004.6102c5a8.jpg",
    "revision": "6102c5a8da8c9c3156dacdd3e1ae6b75"
  },
  {
    "url": "assets/img/005.5ee4517a.jpg",
    "revision": "5ee4517ae8ecac8f06ba683930d8a7f3"
  },
  {
    "url": "assets/img/githubLink.7fabd7af.jpg",
    "revision": "7fabd7af2a1a06803aa35aabfe33c5a2"
  },
  {
    "url": "assets/img/google_analysis.2edd12f3.jpg",
    "revision": "2edd12f37a95dc9fe395cb91122332b9"
  },
  {
    "url": "assets/img/google_post.e19082be.jpg",
    "revision": "e19082be1304dc86ecea9fa64a2a1dad"
  },
  {
    "url": "assets/img/linear_home.0d3acd95.jpg",
    "revision": "0d3acd9568bea627a90b9768ea9be234"
  },
  {
    "url": "assets/img/linear_scroll.396161bc.jpg",
    "revision": "396161bcf5dea38a6d98c6dca5b03f53"
  },
  {
    "url": "assets/img/logo-White.98dace1e.jpg",
    "revision": "98dace1ebcba4e9345d3aef610143b4b"
  },
  {
    "url": "assets/img/modelLeft.3a975195.jpg",
    "revision": "3a975195084b883117ec86d4262eb0a9"
  },
  {
    "url": "assets/img/modelRight.5b58ce3e.jpg",
    "revision": "5b58ce3e42b0454dd42746471d22e42e"
  },
  {
    "url": "assets/img/pwa-post.5922cce0.jpg",
    "revision": "5922cce0fd661cfc16049db6d4cade75"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/sw_popup_my.507a1597.png",
    "revision": "507a15970a1fbc312959602df805c514"
  },
  {
    "url": "assets/img/swpopup_demo.bddc4d9d.jpg",
    "revision": "bddc4d9dd7d3934d336a6ab1c554a5bb"
  },
  {
    "url": "assets/img/swpopup_old.1b1dfa29.jpg",
    "revision": "1b1dfa29f19c3a818a4532b97e618de2"
  },
  {
    "url": "assets/img/versions.6306b5ab.jpg",
    "revision": "6306b5ab6610e0e2cce99e20ac4cde9b"
  },
  {
    "url": "assets/js/10.e32f2857.js",
    "revision": "4f1fa3840fcda025eb2ad6e3d7dc0631"
  },
  {
    "url": "assets/js/11.651993f5.js",
    "revision": "1c0290b9c5a6539ab98231edef33b6b0"
  },
  {
    "url": "assets/js/12.57754c17.js",
    "revision": "543081f681fd2e1e461ac4e034cf0825"
  },
  {
    "url": "assets/js/13.b067eaf9.js",
    "revision": "08fb2ca28d5945d45bef5b71b62d13e0"
  },
  {
    "url": "assets/js/14.838082a6.js",
    "revision": "281332b01d81f47b21df960e04733fc1"
  },
  {
    "url": "assets/js/15.2cde87cb.js",
    "revision": "dc86cae4d77c4382843990f002104744"
  },
  {
    "url": "assets/js/16.f0bf0074.js",
    "revision": "bee603a34a12a95d5eeb3c28488d0b0a"
  },
  {
    "url": "assets/js/17.fb722dd7.js",
    "revision": "0fa4946740b561db1c868bf4bbb1abde"
  },
  {
    "url": "assets/js/18.d20694c7.js",
    "revision": "6555ea3da4cd20ea00f856ccf0f6ca6d"
  },
  {
    "url": "assets/js/19.177ba7a9.js",
    "revision": "e8828352e0a6773576fb60b283c019b2"
  },
  {
    "url": "assets/js/2.0fbf83c5.js",
    "revision": "f215f95d94da56964d318e62a5ee9215"
  },
  {
    "url": "assets/js/20.146182c6.js",
    "revision": "384692a2deedf75309e8b5541475e69a"
  },
  {
    "url": "assets/js/21.cd5e6045.js",
    "revision": "65c265db738d43978a033ebf7225b0f3"
  },
  {
    "url": "assets/js/22.325d9088.js",
    "revision": "08493367a7ac0899a38bb8529b4ba468"
  },
  {
    "url": "assets/js/23.eb15188b.js",
    "revision": "441698d908961ef0af2c1e65809909cf"
  },
  {
    "url": "assets/js/24.fcd6125b.js",
    "revision": "67101ccf8d3ac8f786c1f3c57e43f62b"
  },
  {
    "url": "assets/js/25.864a3e4e.js",
    "revision": "1490f0bf13ca8798512bd0eca8869afe"
  },
  {
    "url": "assets/js/26.c958279d.js",
    "revision": "1b2fd6fffcb4f2382911349891a560f6"
  },
  {
    "url": "assets/js/27.090831af.js",
    "revision": "8788aa91a172924db1cdbcaf3dd14548"
  },
  {
    "url": "assets/js/28.4092c76d.js",
    "revision": "8b565c525df338ecfb08dbdf000f160e"
  },
  {
    "url": "assets/js/29.2dbf15e8.js",
    "revision": "1cb710b76e44605655b6fe3a3d342646"
  },
  {
    "url": "assets/js/3.2a78ddf5.js",
    "revision": "3bf057b4ae63b173a3d38bf39045923e"
  },
  {
    "url": "assets/js/30.6165f666.js",
    "revision": "3050a77cb16a73726d12b0a714938344"
  },
  {
    "url": "assets/js/4.0d78e9a8.js",
    "revision": "a6e12cc6551e9f74dd209fd4b94283ac"
  },
  {
    "url": "assets/js/5.9801f46d.js",
    "revision": "a047451396d954a1e8c42395f8ce39ce"
  },
  {
    "url": "assets/js/6.1a2e8d8a.js",
    "revision": "ac1c54ba31d30c77e19f4d0f1cdaad72"
  },
  {
    "url": "assets/js/7.58ff85cf.js",
    "revision": "85a03983c1a88997ef3af57456d50585"
  },
  {
    "url": "assets/js/8.b0215451.js",
    "revision": "1cf9be2fd0340968854a150fc820f6d4"
  },
  {
    "url": "assets/js/9.be0522bf.js",
    "revision": "c89e4d822d7452112925e7ca073730d4"
  },
  {
    "url": "assets/js/app.454deba5.js",
    "revision": "9bd5a1a4b97a54f2d5c4ab9390c78f00"
  },
  {
    "url": "FAQ/Console/A000.html",
    "revision": "18e332685ded3a8f949a67e7e635e9f9"
  },
  {
    "url": "FAQ/Console/A001.html",
    "revision": "b84006d90433c368bb2fff9913268721"
  },
  {
    "url": "FAQ/Console/A002.html",
    "revision": "43a5bd3f94156ba3889ca160f553c596"
  },
  {
    "url": "FAQ/DigestionHeap/Digested.html",
    "revision": "229b1d5f502518903e10f5d66fd07ceb"
  },
  {
    "url": "FAQ/DigestionHeap/Digesting.html",
    "revision": "f9359275ac8d02a92e8c6b99c1ce663f"
  },
  {
    "url": "FAQ/DigestionHeap/DigestWill.html",
    "revision": "288d33b9a86d71a223bf04ac7f536ae9"
  },
  {
    "url": "FAQ/Wiki.html",
    "revision": "9f8d2842e680c3c72b47c7cc97253ab1"
  },
  {
    "url": "img/links/default.png",
    "revision": "bd114d9649ac225e3937b91a869b4128"
  },
  {
    "url": "img/logo-White.jpg",
    "revision": "98dace1ebcba4e9345d3aef610143b4b"
  },
  {
    "url": "img/logo.gif",
    "revision": "4fe18208b74ecb4b1c0bae6d1eb8a6ca"
  },
  {
    "url": "img/modelLeft.jpg",
    "revision": "3a975195084b883117ec86d4262eb0a9"
  },
  {
    "url": "img/modelRight.jpg",
    "revision": "5b58ce3e42b0454dd42746471d22e42e"
  },
  {
    "url": "img/users/finen.png",
    "revision": "97e6724c4f5204f87757b8c98490f506"
  },
  {
    "url": "img/users/orange.jpg",
    "revision": "dfdf9f5b6e8122ac76479ee38297b42e"
  },
  {
    "url": "img/wiki/Baidu.png",
    "revision": "dfa63b81c92322d44db59e06cd0ad259"
  },
  {
    "url": "img/wiki/baiduHelp.png",
    "revision": "d91ad7ef1b5642a4a291ea87c563d0df"
  },
  {
    "url": "img/wiki/bing.png",
    "revision": "c6c301113aeffd8f80029a72e6e7037d"
  },
  {
    "url": "img/wiki/default.png",
    "revision": "bd114d9649ac225e3937b91a869b4128"
  },
  {
    "url": "img/wiki/earth.png",
    "revision": "5bedfd819a77ac7d87befdff600e3a5f"
  },
  {
    "url": "img/wiki/google.png",
    "revision": "b4ddf57cc277d4ac6cb237c71b327c73"
  },
  {
    "url": "img/wiki/hacker.png",
    "revision": "7ce17c1d46025625752d9d8869e4b2d8"
  },
  {
    "url": "img/wiki/vue.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "img/wiki/Wikipedia.png",
    "revision": "a9bcbc01c4d9ca7c299b478d123a6a75"
  },
  {
    "url": "index.html",
    "revision": "6f0183f2aee70a19dba01733fa87b4d0"
  },
  {
    "url": "Store/Dev/Issue.html",
    "revision": "99f1a7400bb27b3cfad9771febbfe725"
  },
  {
    "url": "Store/Dev/Links.html",
    "revision": "c22580ea2c0af516ca8555874551f49e"
  },
  {
    "url": "Store/Dev/Plugins.html",
    "revision": "80f00cb2db09d9f8de1cbdd357569028"
  },
  {
    "url": "Store/index.html",
    "revision": "02449ae8647ce537e43443b73b63aec3"
  },
  {
    "url": "Thought/index.html",
    "revision": "21430d9dabc466be90595422e876aadb"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
