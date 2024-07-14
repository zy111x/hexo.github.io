/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2024/07/07/Markdown-teaching/index.html","066e5c8a152c007a275c5f2668b14cef"],["/2024/07/11/telegraph-Image/index.html","84af4963ee1adca402462bf4d76c9f94"],["/2024/07/11/搭建个人hexo博客/index.html","8fdeafee07a2799c76f0611cee60cb03"],["/2024/07/14/hello-world/index.html","58fbb3602b733ff51f7e20f64503cbe6"],["/404.html","a3a2ae1daae8cefd3e5a89a6e4567f9e"],["/album/index.html","45700073f6356f1565f9c41df5d41151"],["/anzhiyu/random.js","2702380b7f47fac51f2afb7fd589137c"],["/archives/2024/07/index.html","ea1b9e4a388564d7c9810dd0acfcb546"],["/archives/2024/index.html","5a8c0dd16c84289cdeab30f64f83ab51"],["/archives/index.html","b2328e5f92e053e02b97547a0a872ddb"],["/categories/index.html","06681be766111f44596b0abc9f1fca21"],["/categories/学习/index.html","4b72bfa4448b97e8b5d47733353cc05c"],["/comments/index.html","1c6c5b223a1a3af184b8132baab41a1f"],["/css/background.css","81c30225c3989c6c153e7409d1a8f05d"],["/css/icat.css","8021d194de478b57a39c51e98649741f"],["/css/index.css","9cdf4230cb35dfdfdc06829a1554ac7a"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/welcome.css","83005ef4c6e86c53d2a67b02fb977e93"],["/cutAnimals/index.html","1395f10c74c532cff406e6d9f742c4cd"],["/dailyPhoto/index.html","7ea6b57f389633491e2e93856947bc97"],["/essay/index.html","bab35faa7597af1619be93d2489bf188"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","09ececcc5d241268a724dc8ff9849722"],["/img/algolia.svg","f60fbbe4a8afa312b3f6d12182558861"],["/img/comment_bg.png","73c4561c3dfbc7077c7525339fe5e87a"],["/img/default_cover.jpg","4fde0a97478c6436fcf406bbd1524e78"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","d6b808ce6a48efba98bc2ebddffef10e"],["/img/siteicon/16.png","40437a7e42806e0c0fa6b6c2d77a1fa5"],["/img/siteicon/32.png","6de2984e4c978f3d7b5a7d31fc439641"],["/img/siteicon/apple-icon-180.png","f6da21df9f72c54ce97346d550ce58f4"],["/img/siteicon/manifest-icon-192.maskable.png","ac2ee6b9eef523ed05d3e567c0f8c65f"],["/img/siteicon/manifest-icon-512.maskable.png","119a96071074812a2aa7718221dbb4ca"],["/index.html","912babda02b68cf9bb85130107a97083"],["/js/anzhiyu/ai_abstract.js","2c2bd06dc3de3be0fe06ff466cff18ab"],["/js/anzhiyu/comment_barrage.js","346f27e152a4f1e34283a2c2fe13af38"],["/js/anzhiyu/people.js","98a543838a5fe64305a5cde3215864b3"],["/js/anzhiyu/random_friends_post.js","0578da1c5090e2306cb9def2da1fcda0"],["/js/anzhiyu/right_click_menu.js","e45e7f2c72ab8da3eb3d9309f4849fff"],["/js/main.js","08f5bb09839a480491356942e1ece191"],["/js/search/algolia.js","ac5941f8a9cd8ad8fe9db31867420ec6"],["/js/search/local-search.js","5680cfcdabb94d2a7936df11920cb2d3"],["/js/tw_cn.js","9d5b87a1c2d01022d5116ddf82fa28c9"],["/js/txmap.js","9eafb2cdd422f2a0252e62cd0386ccd2"],["/js/utils.js","bd28bca3ec5e74175bb5ba64bcc7551d"],["/js/welcome.js","525c1b0dcf43266247ee3f873c4036c4"],["/myPassion/index.html","21cb8ea3f93c9f47d3180486e689aa2c"],["/sw-register.js","217002008aeb819acb9fd0216b046266"],["/tags/Cloudflare/index.html","eec9b3b3fbbd08ecc13d5b712c6561fe"],["/tags/Git/index.html","37b7b2317310fd3a615fb3347f33babe"],["/tags/Github/index.html","866b6dc1df005d79d6bfec1978e9d2b5"],["/tags/Hexo/index.html","4bc38f97270ca356430213a35f0e12f9"],["/tags/Markdown/index.html","124892dc7cc80c2454b6644a96e6debf"],["/tags/Markdown语法/index.html","c4625666e08efc0e330ae64f6f26ba22"],["/tags/Node-js/index.html","2152c17ad08d078c3bc16512767cb1d3"],["/tags/Pages/index.html","f9971ef5ff5dd7d014ef7f58a19a3a78"],["/tags/index.html","d74b012007552e1bff8b0c52c1629bdf"],["/tags/telegraph-Image/index.html","fef2ec58d1d87392e4e9505398d24c8a"],["/tags/个人网站/index.html","af59d53b91308efc370e299a027d4cbf"],["/tags/免费托管/index.html","dd17cad3cc047f7bc6255f2c99e1b622"],["/tags/博客/index.html","c8a733db1e9b35c9063d33587519e1c5"],["/tags/博客搭建/index.html","9da401d959fb74ef6aa5a69ead67f94f"],["/tags/图床/index.html","c9f131603113823189965b5e597cb548"],["/tags/学习笔记/index.html","178eb2974f08ea11d09238437c75894a"],["/tags/编辑格式/index.html","6fdcac2f26e1ec8a573da65adffabe23"],["/tags/自建图床/index.html","ca79d2e636c507497e10812d419e0aed"],["/tags/静态网站/index.html","1c5ce93fc0762310de8e612c7c81d749"]];
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
