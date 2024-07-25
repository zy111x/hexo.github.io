/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2023/07/14/油猴插件的安装与使用/index.html","de0e39746d51f0b868cc998870030668"],["/2024/07/07/Markdown-teaching/index.html","f3e87862ec380a93eea9a124af35a757"],["/2024/07/11/telegraph-Image/index.html","0ca982efb7c4f7b41f860d16063729d4"],["/2024/07/11/搭建个人hexo博客/index.html","be9cf4e7f71ae0a14fb795454d1342bc"],["/2024/07/14/hello-world/index.html","5d82f8617b8a61abfafbfff616d98dec"],["/2024/07/17/非黑即白/index.html","9685534d65b0dd55bfb78ddfbebb3c59"],["/404.html","4e896de915f3a52a5ff49d8375ce8b1a"],["/album/index.html","07a430eb67f2fcc99335139edc92b960"],["/anzhiyu/random.js","f07e99a451ad82a696b9bf4ffccc208b"],["/archives/2023/07/index.html","9115723bbed48cc6845e5c0e9c35b524"],["/archives/2023/index.html","1e3db9ff13bc2f6fd64abe494809972e"],["/archives/2024/07/index.html","dd66b25593bc66cb46e3248651421e8e"],["/archives/2024/index.html","bb5225eb3892472c261551bae536d365"],["/archives/index.html","de93f55c3078d58d42602fbf6e76baf1"],["/categories/index.html","37e4aa22865bedb8034270384041d31f"],["/categories/学习/index.html","1439a1e5044326cf0e194326657ece08"],["/comments/index.html","012f92267a6b109c25e9963a3ca962a8"],["/css/background.css","bb1f5d757743dc0c7a17eafba8d46d52"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/icat.css","8021d194de478b57a39c51e98649741f"],["/css/index.css","9cdf4230cb35dfdfdc06829a1554ac7a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/welcome.css","83005ef4c6e86c53d2a67b02fb977e93"],["/cutAnimals/index.html","115e061007237182452e0a562f147921"],["/dailyPhoto/index.html","445d36b0fda63034e8ba205b71c1afb8"],["/essay/index.html","1196d55ff0facfe7f7473e0ebce78ed9"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","09ececcc5d241268a724dc8ff9849722"],["/img/algolia.svg","f60fbbe4a8afa312b3f6d12182558861"],["/img/comment_bg.png","73c4561c3dfbc7077c7525339fe5e87a"],["/img/default_cover.jpg","4fde0a97478c6436fcf406bbd1524e78"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","d6b808ce6a48efba98bc2ebddffef10e"],["/img/siteicon/16.png","40437a7e42806e0c0fa6b6c2d77a1fa5"],["/img/siteicon/32.png","6de2984e4c978f3d7b5a7d31fc439641"],["/img/siteicon/apple-icon-180.png","f6da21df9f72c54ce97346d550ce58f4"],["/img/siteicon/manifest-icon-192.maskable.png","ac2ee6b9eef523ed05d3e567c0f8c65f"],["/img/siteicon/manifest-icon-512.maskable.png","119a96071074812a2aa7718221dbb4ca"],["/index.html","ffa6c125f898c0d725fb3916784f32ff"],["/js/anzhiyu/ai_abstract.js","393af6df4caa9f85a3763c820ffca8c5"],["/js/anzhiyu/comment_barrage.js","2163a41348d9273070e04a03a33af02c"],["/js/anzhiyu/people.js","4dd7da2c79374419fe3cc50fa203a3e9"],["/js/anzhiyu/random_friends_post.js","75b328427214c9ad003f2a04642b10d6"],["/js/anzhiyu/right_click_menu.js","e6a9ea97b47f62eb8c8ed1b025be9617"],["/js/main.js","99cf0d990413c68b75223985a853968f"],["/js/search/algolia.js","0360e5165da2cb0c886f5f2ef2979e7d"],["/js/search/local-search.js","c2b0b0c31fd9b0eb224b37a72545eba3"],["/js/tw_cn.js","92b132ebeda0d4f417947c7e24e6b8a4"],["/js/txmap.js","fedc0ef6d243bfa40e0c89c565884c4c"],["/js/utils.js","f7030bc946d17b8c5587f0103cb14ad0"],["/js/welcome.js","c8fde0e7454d9d59ab4eedcc02687f26"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/myPassion/index.html","823b34c43c952e7086f7b485503e174a"],["/sw-register.js","b37e68ced46c2cf5d97bc95bc62309f6"],["/tags/Cloudflare/index.html","c703fe3e13eb69d4bb32d43afe7ee323"],["/tags/Git/index.html","bcd06529cb615246352cee913406ca91"],["/tags/Github/index.html","9152e73bee1b5bc458e54923d4ed5e38"],["/tags/Greasy-Fork/index.html","ab90fc7e68955af091e8d3d4f7127c7a"],["/tags/Hexo/index.html","fdcdb06bff001d1c11a91220f5e4c5bb"],["/tags/Markdown/index.html","66f7456668e79524fcf588b9baef97a7"],["/tags/Markdown语法/index.html","7878616e95e27bec844663aeb40f7ba6"],["/tags/Microsoft-Edge/index.html","d9cf0342239bb0f1a1f381855bb118ec"],["/tags/Node-js/index.html","4e39f7be80dfac40aa5b3d2ae9d4ccf3"],["/tags/Pages/index.html","3af57e88c6adaa8dc353b212330b7d02"],["/tags/Tampermonkey/index.html","79ee6b37276a0b653d3a9e65a22bf774"],["/tags/index.html","5ccb45e90a19808f1defe4869d75fcf6"],["/tags/telegraph-Image/index.html","be76791c05f4fbd5f342ff90857b12bc"],["/tags/个人网站/index.html","5a1ce2d59307348dfe7b8404ccef52bc"],["/tags/免费托管/index.html","03867711723176dbce2b1bb6051ef9c7"],["/tags/博客/index.html","c63180bf01aeaaa409e69817e7cdc648"],["/tags/博客搭建/index.html","45ea32fc10d5c6a9ac9d3e6cdf1b94e2"],["/tags/图床/index.html","b7fabcd40641e52b6f81f0cd50ef4a4a"],["/tags/学习笔记/index.html","14d287bd62d5bd083b82b91fbbf6d5e4"],["/tags/扩展/index.html","79d54425ae6a509736ac3a9a2462b844"],["/tags/插件/index.html","5ee744f1958a75d21b49940d26501302"],["/tags/效率/index.html","abf77acdc4b0603b658d22711e85c4b0"],["/tags/浏览器/index.html","2d42dfa7a328e28fb9df4c299151574e"],["/tags/编辑格式/index.html","54437568294a7558bebc80aeaec15988"],["/tags/脚本/index.html","b62a48a2d17587eedf7fc7b2ac8874cd"],["/tags/自建图床/index.html","be9c592f5616ee193f6532488954b78a"],["/tags/静态网站/index.html","f8578cf98ae13feed6f27dc750763c7d"]];
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
