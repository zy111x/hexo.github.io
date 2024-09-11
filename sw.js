/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","04865d3236aad02cdd1de4f71c0f5852"],["/about/index.html","bcaa594d129b014521c5ac0e8babbcb9"],["/album/index.html","ddead74c87fecfbb2615d52962a2b3ec"],["/anzhiyu/random.js","ce7dc2c301c1044efd3cc90ec239a4d3"],["/archives/2023/06/index.html","d3c7a9e045dd2075213b6d2907da073c"],["/archives/2023/07/index.html","1f7779fa4da73636554719d9067549fa"],["/archives/2023/index.html","75aa4da98eb7a9e198519e5be1d0c78d"],["/archives/2024/07/index.html","0cf419823b7b965caacc35a6ad248491"],["/archives/2024/08/index.html","a4a26ac4b217e2de599a53169a9aa66c"],["/archives/2024/index.html","3bf2f2e36a23fa410a4fcff121929489"],["/archives/2024/page/2/index.html","6260c1e92fdcc2e9f40d2847443b7bc8"],["/archives/index.html","57dd8b6c5d601ac9977dda68143e6307"],["/archives/page/2/index.html","e904636522ea4d071f7f1d1c5530b641"],["/categories/index.html","009f2538e81d10534b117f78d3cc3ea1"],["/categories/学习/index.html","00d150aee308fad0260ef39ba3ec90f0"],["/categories/生活/index.html","905e1c29d19dbb707ae56e5846a84cb0"],["/categories/转载/index.html","61149c84f26441a1b6ee641c59471ddc"],["/comments/index.html","a9a14cafd0cb686d586a3f5b545b5b66"],["/cookies/index.html","dda9b41145baaad406250f9b8b2f53ff"],["/copyright/index.html","76f4af68e436c3e44814fe7d1d169acc"],["/css/about-tag.css","cec8a4d09df053602402d1c0ed337c06"],["/css/background.css","bb1f5d757743dc0c7a17eafba8d46d52"],["/css/bilibili.css","7a2b02d35a7b9dbc407829c9c96e6a4b"],["/css/douyin.css","8050710fe24df97930e914d00d93f569"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/home.css","ba627b6136a51d18416833b1e424ad24"],["/css/icat.css","8021d194de478b57a39c51e98649741f"],["/css/icon.css","7f76869eb30eaa0d42982eec6d1b8e62"],["/css/index.css","dc0057db3f80ff84b3b44155ee470c9d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/weibo.css","1b25e722f159e825d0434be3ea22e0c5"],["/css/welcome.css","715c2af7f10bf6151251e4dd0313e0ec"],["/css/zhihu.css","05b5d9d03c466f2716d89ac38d82cd1a"],["/cutAnimals/index.html","0749d1408b4bb292d3dd6320a0099399"],["/dailyPhoto/index.html","59f57827c2bc4941cd6ba240f25d511b"],["/essay/index.html","fe09a6ffded76ba7b3a107f0fa60239e"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","09ececcc5d241268a724dc8ff9849722"],["/img/algolia.svg","f60fbbe4a8afa312b3f6d12182558861"],["/img/comment_bg.png","73c4561c3dfbc7077c7525339fe5e87a"],["/img/default_cover.jpg","4fde0a97478c6436fcf406bbd1524e78"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","d6b808ce6a48efba98bc2ebddffef10e"],["/img/siteicon/16.png","40437a7e42806e0c0fa6b6c2d77a1fa5"],["/img/siteicon/32.png","6de2984e4c978f3d7b5a7d31fc439641"],["/img/siteicon/apple-icon-180.png","f6da21df9f72c54ce97346d550ce58f4"],["/img/siteicon/apple-splash-1125-2436.jpg","2ef897a6e832989b9ea7fbbd49d361f6"],["/img/siteicon/apple-splash-1136-640.jpg","6ee16bd2421904124759b3001be65047"],["/img/siteicon/apple-splash-1170-2532.jpg","68858d357559c7c2ce575193445ec074"],["/img/siteicon/apple-splash-1179-2556.jpg","1a037efdb7c40aa0e4b2e8cfce4d212f"],["/img/siteicon/apple-splash-1242-2208.jpg","5f78e5eb95eea3fcbf3e92836857db42"],["/img/siteicon/apple-splash-1242-2688.jpg","5556f1f982e46a5cc604540dd7eb221f"],["/img/siteicon/apple-splash-1284-2778.jpg","8ebddd0f8f7fac705e986b883d79e9f1"],["/img/siteicon/apple-splash-1290-2796.jpg","52ae2065253c46c2da735b7c9ab58966"],["/img/siteicon/apple-splash-1334-750.jpg","bd27733eab2f4c4e1504b371e401333a"],["/img/siteicon/apple-splash-1536-2048.jpg","e1dc64e0c2e682d7c27d4c16f624e105"],["/img/siteicon/apple-splash-1620-2160.jpg","1f7b38621ad23e7aadd2889fa3a5fa61"],["/img/siteicon/apple-splash-1668-2224.jpg","7d483bc1e3ca7edd5ea246c1f3b7d11e"],["/img/siteicon/apple-splash-1668-2388.jpg","a842930a7f01a5f2af293916a5fa8c9f"],["/img/siteicon/apple-splash-1792-828.jpg","2857ff942c80bc45f1605042155d3881"],["/img/siteicon/apple-splash-2048-1536.jpg","6254295b0fb48c01d950e5d5c78379df"],["/img/siteicon/apple-splash-2048-2732.jpg","73c508dfb39c7efc262f399397c415a4"],["/img/siteicon/apple-splash-2160-1620.jpg","98d6625402f51c7fbf9c70c115d11e56"],["/img/siteicon/apple-splash-2208-1242.jpg","47771757ba8d4a58a2c923bf61b0e1d3"],["/img/siteicon/apple-splash-2224-1668.jpg","31ed922d31cba682de352ae3db9c25cb"],["/img/siteicon/apple-splash-2388-1668.jpg","fdfe8cbda8beb5ae3d3f4d75138a47b4"],["/img/siteicon/apple-splash-2436-1125.jpg","9f7234706e66b2e01a214cef3bef901b"],["/img/siteicon/apple-splash-2532-1170.jpg","eabd23339d78fe1638b84d6533815c8d"],["/img/siteicon/apple-splash-2556-1179.jpg","01b92828c5810363c195e54ae419d1b6"],["/img/siteicon/apple-splash-2688-1242.jpg","61c7ed30771eb8b57df8828ce8b2ae78"],["/img/siteicon/apple-splash-2732-2048.jpg","e1f7bf69f473719eb380caa1ff9678f9"],["/img/siteicon/apple-splash-2778-1284.jpg","95db3fc08694fd4b3089ab61d4aa5e4a"],["/img/siteicon/apple-splash-2796-1290.jpg","29b6c101f2474a89bdcc7e19a6126651"],["/img/siteicon/apple-splash-640-1136.jpg","6b9e7493c397c364c3e549cb468d50d5"],["/img/siteicon/apple-splash-750-1334.jpg","286454d3b4439e7afc83e5d349ffa6c3"],["/img/siteicon/apple-splash-828-1792.jpg","8261f59c14231fa6b3ef47dc22730a68"],["/img/siteicon/manifest-icon-192.maskable.png","ac2ee6b9eef523ed05d3e567c0f8c65f"],["/img/siteicon/manifest-icon-512.maskable.png","119a96071074812a2aa7718221dbb4ca"],["/index.html","c083f96460fb689759560c8f5f72709b"],["/js/anzhiyu/ai_abstract.js","393af6df4caa9f85a3763c820ffca8c5"],["/js/anzhiyu/comment_barrage.js","2163a41348d9273070e04a03a33af02c"],["/js/anzhiyu/people.js","4dd7da2c79374419fe3cc50fa203a3e9"],["/js/anzhiyu/random_friends_post.js","75b328427214c9ad003f2a04642b10d6"],["/js/anzhiyu/right_click_menu.js","e6a9ea97b47f62eb8c8ed1b025be9617"],["/js/bilibili.js","b2d6d237344181b8509ec2a28006b105"],["/js/douyin.js","595d56aeede9de1ac374d4d2381eeb06"],["/js/imgloaded.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","99cf0d990413c68b75223985a853968f"],["/js/nyan.js","89da1adc4820c2aebb7693b9d0071007"],["/js/search/algolia.js","0360e5165da2cb0c886f5f2ef2979e7d"],["/js/search/local-search.js","c2b0b0c31fd9b0eb224b37a72545eba3"],["/js/snowflake.js","f50234d7ebbfcccdbe7ce06207c473c6"],["/js/timing.js","390ed71f95a50677b4124aece7be95ff"],["/js/tw_cn.js","92b132ebeda0d4f417947c7e24e6b8a4"],["/js/utils.js","f7030bc946d17b8c5587f0103cb14ad0"],["/js/weibo.js","030bf5733610945b5a9bd9a24adc2bc4"],["/js/welcome.js","4a0281c538dc99cb2dc33afa3a37821f"],["/js/zhihu.js","d2d6c6985a5b609ea49fff211e371fbb"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/myPassion/index.html","040055897362dd4c70082619cb0b904f"],["/page/2/index.html","7e4eef406c375f79fd9f8819866356b2"],["/posts/1/index.html","5a738485bbf087629f58ab0373f753ff"],["/posts/12237/index.html","76202d9e87898a62c627d003d172eddf"],["/posts/14307/index.html","509f5a568da210c9a3cb2f856db6d402"],["/posts/14373/index.html","604353e322fc70e4ebfa941329e6f1d8"],["/posts/16107/index.html","54bae0c743a5ea6b3c6e7f1b6097642a"],["/posts/19367/index.html","5e52dd915a71d35c607f9736633bc8a3"],["/posts/21496/index.html","c5ed504391e2137c040a75d51a62ddff"],["/posts/22648/index.html","197b397ea6ef2c8b80e3ca15a431dcb9"],["/posts/2729/index.html","e7727970a4df64f27c06f1b6d9ceb3d5"],["/posts/32968/index.html","aa379da1eca1ca6b2a2f6664f28b6011"],["/posts/35483/index.html","07698b82c5e753eceb015b9a2f9f20a4"],["/posts/5548/index.html","82574ea74e9b24805687bcb676a594d5"],["/posts/58960/index.html","6cd57a1e25076dd8585d8e0b2e13dfc8"],["/posts/d50a/index.html","e1c40ca9e601cf991b2ee36b78060691"],["/privacy/index.html","477be926eb9474e5e4b2b2f08da687be"],["/sw-register.js","2d07a28fc32a5013e159892bd6391c19"],["/tags/API/index.html","086fc4a29997aa57cfc9b946a5f85210"],["/tags/Cloudflare/index.html","a751f59f81fe4ce369b6591f71550298"],["/tags/Git/index.html","37b17f0ce0d93b395b19ce60a7214675"],["/tags/Github/index.html","b8753ecd0f8e3a1ee0278041f0334441"],["/tags/Greasy-Fork/index.html","49313f8acfd3120f58cffd7838dccc89"],["/tags/Hexo/index.html","f91b6b381072718c2274174dcaae588f"],["/tags/Markdown/index.html","adac1a79b0b2a87e25650cc85dc81471"],["/tags/Markdown语法/index.html","fdb7589b3ad6ded00cca342f7009992e"],["/tags/Microsoft-Edge/index.html","61ed3390610a0eeb1bb57c64988cba4c"],["/tags/Node-js/index.html","aa978c4b95f70dcad1715a62915a81f7"],["/tags/Pages/index.html","33100303666e95a64c2d2d30ce0656f8"],["/tags/Tag-Plugins/index.html","bf8f0a62e60dcd8bd3f74b7f57d41da2"],["/tags/Tampermonkey/index.html","4bac57202545803d1c2ca5642c0c10cb"],["/tags/index.html","cbf0f3b4c4fa7ef67377c8d55f1853eb"],["/tags/telegraph-Image/index.html","de970bb99501a8e8ac174c88d78e5b31"],["/tags/个人网站/index.html","8f185bd397c866645a40c9b318d1104f"],["/tags/信息获取/index.html","1a8f623738d89a419169a9890abc0ca3"],["/tags/免费托管/index.html","691f360b91272ec3e863ada3005d6fc7"],["/tags/博客/index.html","b08dde0d686837e62fe9ad5726ed97cd"],["/tags/博客搭建/index.html","3b946987e54e17ca47babc6c947c6d11"],["/tags/图床/index.html","16fa4c8ead6819803e0630caf2dc4646"],["/tags/图片获取/index.html","fe1cd85cf0e8b3e16504451f549ffcc7"],["/tags/学习笔记/index.html","08eb6d83ba3bd744e4b0a58650c18cee"],["/tags/工具/index.html","9a989d227d06112be8f6098384998114"],["/tags/感悟/index.html","ffb722c93de009bcf4c9f2792997c9b8"],["/tags/扩展/index.html","bf6e528d845d71ef6cd9971c491b696a"],["/tags/接口/index.html","5ce2c3a101c9889174ee79179c6a748f"],["/tags/插件/index.html","b2a81f68398f46a0a306c658bb4395a0"],["/tags/效率/index.html","02aaedba66f77e06c2bc6c92bc3590e1"],["/tags/浏览器/index.html","a3b3b4e3320da1859eb707b12c4eec94"],["/tags/热搜/index.html","aa9e3fa013434337e78767f6b5ccaa9a"],["/tags/生活/index.html","ef313d258afb2a416392ae84965c94da"],["/tags/编辑格式/index.html","ede7e7950a947b871530e5dbbc41240d"],["/tags/脚本/index.html","97ec70ccc631c770404bae1daa8f2ca8"],["/tags/自建图床/index.html","1ddd8f2d943c580349e4f7a8dce62b62"],["/tags/解析/index.html","91b1a003d7fc54394e09d481b5516d83"],["/tags/选择/index.html","00c8fa8ff229dea34e599f4a239d5c79"],["/tags/随机图片/index.html","d75833b4f65f10b9e92dd20b6fe2c0a7"],["/tags/随笔/index.html","03f9a544af455d274b52aa5665bc6fd6"],["/tags/静态网站/index.html","b0ead0456954976ddb16ce318bd5da4d"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
