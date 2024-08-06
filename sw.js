/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7ac079a2342020d141bb1339d648741b"],["/about/index.html","4b4e888a112fe76ec14fa5541cf849fa"],["/album/index.html","7b5d36cf2da376b662425403292d8dd4"],["/anzhiyu/random.js","0316a4f881dc43f0c4ffec9c2e1929d5"],["/archives/2023/06/index.html","8e2ee7035b1d032424c4bbcbf394ec59"],["/archives/2023/07/index.html","cebdafd363ab215b7160fad307b2f324"],["/archives/2023/index.html","ce7058619acb842926519cbc06b08673"],["/archives/2024/07/index.html","5cd74b1321e8d583f058e24acb649a5b"],["/archives/2024/08/index.html","977589c8bdf38059cd539fcd1a1a2036"],["/archives/2024/index.html","2273f625f82e0268652397e2bfac5328"],["/archives/index.html","6e5eb1c64ce1de9c3037026b3b2afe72"],["/categories/index.html","0d6d1ad649f3db0d978dfb073f609cd7"],["/categories/学习/index.html","e61f81c9355845ab64fb740a54cef903"],["/comments/index.html","11d6a1228427741b3571b8160e8efb3e"],["/css/about-tag.css","cec8a4d09df053602402d1c0ed337c06"],["/css/background.css","bb1f5d757743dc0c7a17eafba8d46d52"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/home.css","ba627b6136a51d18416833b1e424ad24"],["/css/icat.css","8021d194de478b57a39c51e98649741f"],["/css/index.css","c07af947a5273697b872321d9b991968"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/welcome.css","715c2af7f10bf6151251e4dd0313e0ec"],["/cutAnimals/index.html","52f296cdbe0a3827386e2753a28e6dbd"],["/dailyPhoto/index.html","aee8215556ad1b16e7cf36a15f6a8110"],["/essay/index.html","9bb28d8b28963a079d5124bc14808db2"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","09ececcc5d241268a724dc8ff9849722"],["/img/algolia.svg","f60fbbe4a8afa312b3f6d12182558861"],["/img/comment_bg.png","73c4561c3dfbc7077c7525339fe5e87a"],["/img/default_cover.jpg","4fde0a97478c6436fcf406bbd1524e78"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","d6b808ce6a48efba98bc2ebddffef10e"],["/img/siteicon/16.png","40437a7e42806e0c0fa6b6c2d77a1fa5"],["/img/siteicon/32.png","6de2984e4c978f3d7b5a7d31fc439641"],["/img/siteicon/apple-icon-180.png","f6da21df9f72c54ce97346d550ce58f4"],["/img/siteicon/apple-splash-1125-2436.jpg","2ef897a6e832989b9ea7fbbd49d361f6"],["/img/siteicon/apple-splash-1136-640.jpg","6ee16bd2421904124759b3001be65047"],["/img/siteicon/apple-splash-1170-2532.jpg","68858d357559c7c2ce575193445ec074"],["/img/siteicon/apple-splash-1179-2556.jpg","1a037efdb7c40aa0e4b2e8cfce4d212f"],["/img/siteicon/apple-splash-1242-2208.jpg","5f78e5eb95eea3fcbf3e92836857db42"],["/img/siteicon/apple-splash-1242-2688.jpg","5556f1f982e46a5cc604540dd7eb221f"],["/img/siteicon/apple-splash-1284-2778.jpg","8ebddd0f8f7fac705e986b883d79e9f1"],["/img/siteicon/apple-splash-1290-2796.jpg","52ae2065253c46c2da735b7c9ab58966"],["/img/siteicon/apple-splash-1334-750.jpg","bd27733eab2f4c4e1504b371e401333a"],["/img/siteicon/apple-splash-1536-2048.jpg","e1dc64e0c2e682d7c27d4c16f624e105"],["/img/siteicon/apple-splash-1620-2160.jpg","1f7b38621ad23e7aadd2889fa3a5fa61"],["/img/siteicon/apple-splash-1668-2224.jpg","7d483bc1e3ca7edd5ea246c1f3b7d11e"],["/img/siteicon/apple-splash-1668-2388.jpg","a842930a7f01a5f2af293916a5fa8c9f"],["/img/siteicon/apple-splash-1792-828.jpg","2857ff942c80bc45f1605042155d3881"],["/img/siteicon/apple-splash-2048-1536.jpg","6254295b0fb48c01d950e5d5c78379df"],["/img/siteicon/apple-splash-2048-2732.jpg","73c508dfb39c7efc262f399397c415a4"],["/img/siteicon/apple-splash-2160-1620.jpg","98d6625402f51c7fbf9c70c115d11e56"],["/img/siteicon/apple-splash-2208-1242.jpg","47771757ba8d4a58a2c923bf61b0e1d3"],["/img/siteicon/apple-splash-2224-1668.jpg","31ed922d31cba682de352ae3db9c25cb"],["/img/siteicon/apple-splash-2388-1668.jpg","fdfe8cbda8beb5ae3d3f4d75138a47b4"],["/img/siteicon/apple-splash-2436-1125.jpg","9f7234706e66b2e01a214cef3bef901b"],["/img/siteicon/apple-splash-2532-1170.jpg","eabd23339d78fe1638b84d6533815c8d"],["/img/siteicon/apple-splash-2556-1179.jpg","01b92828c5810363c195e54ae419d1b6"],["/img/siteicon/apple-splash-2688-1242.jpg","61c7ed30771eb8b57df8828ce8b2ae78"],["/img/siteicon/apple-splash-2732-2048.jpg","e1f7bf69f473719eb380caa1ff9678f9"],["/img/siteicon/apple-splash-2778-1284.jpg","95db3fc08694fd4b3089ab61d4aa5e4a"],["/img/siteicon/apple-splash-2796-1290.jpg","29b6c101f2474a89bdcc7e19a6126651"],["/img/siteicon/apple-splash-640-1136.jpg","6b9e7493c397c364c3e549cb468d50d5"],["/img/siteicon/apple-splash-750-1334.jpg","286454d3b4439e7afc83e5d349ffa6c3"],["/img/siteicon/apple-splash-828-1792.jpg","8261f59c14231fa6b3ef47dc22730a68"],["/img/siteicon/manifest-icon-192.maskable.png","ac2ee6b9eef523ed05d3e567c0f8c65f"],["/img/siteicon/manifest-icon-512.maskable.png","119a96071074812a2aa7718221dbb4ca"],["/index.html","e6e5bdeba6e44099f51f7d36508691f2"],["/js/anzhiyu/ai_abstract.js","393af6df4caa9f85a3763c820ffca8c5"],["/js/anzhiyu/comment_barrage.js","2163a41348d9273070e04a03a33af02c"],["/js/anzhiyu/people.js","4dd7da2c79374419fe3cc50fa203a3e9"],["/js/anzhiyu/random_friends_post.js","75b328427214c9ad003f2a04642b10d6"],["/js/anzhiyu/right_click_menu.js","e6a9ea97b47f62eb8c8ed1b025be9617"],["/js/imgloaded.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","99cf0d990413c68b75223985a853968f"],["/js/nyan.js","89da1adc4820c2aebb7693b9d0071007"],["/js/search/algolia.js","0360e5165da2cb0c886f5f2ef2979e7d"],["/js/search/local-search.js","c2b0b0c31fd9b0eb224b37a72545eba3"],["/js/tw_cn.js","92b132ebeda0d4f417947c7e24e6b8a4"],["/js/utils.js","f7030bc946d17b8c5587f0103cb14ad0"],["/js/welcome.js","4a0281c538dc99cb2dc33afa3a37821f"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/myPassion/index.html","7f965229fffde83c6dbf6f2777143011"],["/posts/14307/index.html","8d03c0348eb76dc441f6ec25aa122f25"],["/posts/16107/index.html","edfe8954f5f608c2dcdb4c9bea7c2ed4"],["/posts/22648/index.html","42f2e77a99e39ad3cc1e03ec77a1e0b4"],["/posts/2729/index.html","f0a839ee49d82bb38f1134ad2304da9c"],["/posts/32968/index.html","047c63a7a8d66fbf75d3c78fe54b42fa"],["/posts/47193/index.html","b2eafd7ef6ad7ec6708702e1f18d63e1"],["/posts/58960/index.html","770531d72e60be17b811faf61b241c97"],["/posts/d50a/index.html","2f73be9d0e47066858014ec1f531d3ac"],["/sw-dom.js","5a79b9baf4651337ab8648feec149a9c"],["/sw-register.js","bcad0f4f65663e5e0fcdeeabb6dda25e"],["/tags/Cloudflare/index.html","a1ff0c4405abbaf0028c992e5eba1bf6"],["/tags/Git/index.html","0fab833dd423559d07933be1c4e4a11f"],["/tags/Github/index.html","444d008d809efffe4fce84407c4d7c63"],["/tags/Greasy-Fork/index.html","c4db05851ffdff7638a564085130fb8d"],["/tags/Hexo/index.html","9cd40dcdc837308db495013e223c590c"],["/tags/Markdown/index.html","138058f392d6c85ebc5388ee346e1606"],["/tags/Markdown语法/index.html","77ed3a89631e3fce87661d1895ec4252"],["/tags/Microsoft-Edge/index.html","52bdc44e04b7c42967aba5f2538956c8"],["/tags/Node-js/index.html","850349790d6c3befb97f857788e373f3"],["/tags/Pages/index.html","0e91d92a43929af78ed3421bc14e69df"],["/tags/Tag-Plugins/index.html","45b80c90ed6182e416791f479477a394"],["/tags/Tampermonkey/index.html","7e33c8e94d0cce1bbdf4ced9ece890ad"],["/tags/index.html","05b9e39eaabbfbbfbd378ed115611ac0"],["/tags/telegraph-Image/index.html","3ab21267dc34382451e386f7f6058974"],["/tags/个人网站/index.html","9c51c0aeccde824e0f4f1ba41ac1cccb"],["/tags/免费托管/index.html","5f67097fde113ed91b395d5c914a7c8c"],["/tags/博客/index.html","19cbe62c61d3b3f88e6752bd3c62ea7f"],["/tags/博客搭建/index.html","3d3cb7e74cb4d32fd79bc92a9798ae57"],["/tags/图床/index.html","2aa90a69e76fb7361c8b63c3b255057a"],["/tags/学习笔记/index.html","fb7fbc09bef0cd1e542d4867ffcece1c"],["/tags/扩展/index.html","fcba3a9185cac2d2e287ea1ff6ac33ba"],["/tags/插件/index.html","a55ed5482e331effb65026674589b4b0"],["/tags/效率/index.html","8e135a44544ce551bfe0064968b12804"],["/tags/浏览器/index.html","27cec294482cf2a59c4bc7946587e90f"],["/tags/编辑格式/index.html","2e4a50248b4472b5e53d5ee5f72f07f4"],["/tags/脚本/index.html","dd101f2ef20f38dfe41335ffd3672953"],["/tags/自建图床/index.html","fc62f46c34a2661e350a4b31a456b3b2"],["/tags/静态网站/index.html","cdc892d37ec3702dd1c1157c9248a57f"]];
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
