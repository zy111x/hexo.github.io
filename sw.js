/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5c97c4571d2cec995b8d79cae88a7957"],["/about/index.html","c8ff1315ae5db1c8d7565c321d2f1664"],["/album/index.html","75835170fa0c60b1eaf3678ea3073c8c"],["/anzhiyu/random.js","0316a4f881dc43f0c4ffec9c2e1929d5"],["/archives/2023/06/index.html","66bb8c58e53041d107977e64a882bdde"],["/archives/2023/07/index.html","ad2049d707fb64edd640969281e3bc85"],["/archives/2023/index.html","a6fdb31e6028269e68fc25a44d3d3de9"],["/archives/2024/07/index.html","ff6bee36735a0ae94016d4b5a15ccdf7"],["/archives/2024/08/index.html","916cd3e45aedf3ab6561c86f670e2bbf"],["/archives/2024/index.html","a0cf5a6576cb9ec51f0099d8a1a04317"],["/archives/index.html","aae6a52c3edab7ffe12f5cd1da0419fc"],["/categories/index.html","ea497be025ae4e41c774a2c6652f0ce3"],["/categories/学习/index.html","0ae0c968527f36fd272fbc8dacfee14a"],["/comments/index.html","7ea9832c8ad21f96d912b828e1671824"],["/css/about-tag.css","cec8a4d09df053602402d1c0ed337c06"],["/css/background.css","bb1f5d757743dc0c7a17eafba8d46d52"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/home.css","ba627b6136a51d18416833b1e424ad24"],["/css/icat.css","8021d194de478b57a39c51e98649741f"],["/css/index.css","c07af947a5273697b872321d9b991968"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/welcome.css","715c2af7f10bf6151251e4dd0313e0ec"],["/cutAnimals/index.html","af461597dcf75894029bd2f68e8a5b69"],["/dailyPhoto/index.html","bb3f889f5ba2ed0a817574d01b5b7214"],["/essay/index.html","c89081b6d2526e2bc8285350fd50f689"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","09ececcc5d241268a724dc8ff9849722"],["/img/algolia.svg","f60fbbe4a8afa312b3f6d12182558861"],["/img/comment_bg.png","73c4561c3dfbc7077c7525339fe5e87a"],["/img/default_cover.jpg","4fde0a97478c6436fcf406bbd1524e78"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","d6b808ce6a48efba98bc2ebddffef10e"],["/img/siteicon/16.png","40437a7e42806e0c0fa6b6c2d77a1fa5"],["/img/siteicon/32.png","6de2984e4c978f3d7b5a7d31fc439641"],["/img/siteicon/apple-icon-180.png","f6da21df9f72c54ce97346d550ce58f4"],["/img/siteicon/manifest-icon-192.maskable.png","ac2ee6b9eef523ed05d3e567c0f8c65f"],["/img/siteicon/manifest-icon-512.maskable.png","119a96071074812a2aa7718221dbb4ca"],["/index.html","f5e0fff556cafd89a3b88befba8398db"],["/js/anzhiyu/ai_abstract.js","393af6df4caa9f85a3763c820ffca8c5"],["/js/anzhiyu/comment_barrage.js","2163a41348d9273070e04a03a33af02c"],["/js/anzhiyu/people.js","4dd7da2c79374419fe3cc50fa203a3e9"],["/js/anzhiyu/random_friends_post.js","75b328427214c9ad003f2a04642b10d6"],["/js/anzhiyu/right_click_menu.js","e6a9ea97b47f62eb8c8ed1b025be9617"],["/js/imgloaded.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","99cf0d990413c68b75223985a853968f"],["/js/nyan.js","89da1adc4820c2aebb7693b9d0071007"],["/js/search/algolia.js","0360e5165da2cb0c886f5f2ef2979e7d"],["/js/search/local-search.js","c2b0b0c31fd9b0eb224b37a72545eba3"],["/js/tw_cn.js","92b132ebeda0d4f417947c7e24e6b8a4"],["/js/utils.js","f7030bc946d17b8c5587f0103cb14ad0"],["/js/welcome.js","4a0281c538dc99cb2dc33afa3a37821f"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/myPassion/index.html","ebb4623a954c151f71a3c79d16829ec0"],["/posts/14307/index.html","90a394973c6cb2153a9922e574d3720d"],["/posts/16107/index.html","0ccdbc5443109c4fc15702e631a37df3"],["/posts/22648/index.html","33f584cc7cd1fe3b9c9ae0303449b253"],["/posts/2729/index.html","7321382352b1a894f476b11c42692423"],["/posts/32968/index.html","7f8f683c89a48ea6c0eba6ad45342a0b"],["/posts/47193/index.html","5176a37d7555342e5b953639a3d2f57a"],["/posts/58960/index.html","ec7b1c476958b8c9ead08b0c28a5ff45"],["/posts/d50a/index.html","5704bc4134f8dca57a41f2f19ef5fbc5"],["/sw-register.js","815b35b3a6edaac2c9d999ee7116e32c"],["/tags/Cloudflare/index.html","4718dc291e85b33d4d2eafb7157ead41"],["/tags/Git/index.html","00c44c0beee9506d67a81ff7dbc577c5"],["/tags/Github/index.html","7065d77edf094bc4cf4b20878750fd54"],["/tags/Greasy-Fork/index.html","522261f5b09d55ad37fd72fc582f79f3"],["/tags/Hexo/index.html","24a89aacfab9ff1574b98daabd7de9b8"],["/tags/Markdown/index.html","3116c360a8edcf223c8776c8ce10ca84"],["/tags/Markdown语法/index.html","cb15bf6a67aeb943734b7f5c8d23154f"],["/tags/Microsoft-Edge/index.html","6d31c866c91a85785b3fd58e00af18b3"],["/tags/Node-js/index.html","670c914e828f845ede2b7564d8f81f81"],["/tags/Pages/index.html","6ec4ab925364d6226aa79f8b52c31164"],["/tags/Tag-Plugins/index.html","ce638fc0ae5e74c6d45c3b0d786b404b"],["/tags/Tampermonkey/index.html","29e38ba93eeeaeeb7028b03379fd23aa"],["/tags/index.html","df12c790d5d86dc5ef5646e656d972db"],["/tags/telegraph-Image/index.html","18090a218b3abe11e064ab72999c2d98"],["/tags/个人网站/index.html","3d4347d8ec17e06e2b8a1807aefbae02"],["/tags/免费托管/index.html","48350d4fd5ee0581e8ac10000b54a83a"],["/tags/博客/index.html","dc0bd2900d85483097a5624a3b9077ae"],["/tags/博客搭建/index.html","853e97391ef219836c57f7a70df33611"],["/tags/图床/index.html","decb905b163fd419bd0d3cdbffc042b0"],["/tags/学习笔记/index.html","94863735f229a2b99397f40eb9c434ca"],["/tags/扩展/index.html","9cfddb849e026251c82a79ee1e770614"],["/tags/插件/index.html","9c857570305a70bc5b857cf0d9625742"],["/tags/效率/index.html","e5611a27b36dc68f08c6cbc4927f82e9"],["/tags/浏览器/index.html","b8bcc39592705823462b2fd294cd0d42"],["/tags/编辑格式/index.html","353a25b8ce93746f34548a6d0a53f0a5"],["/tags/脚本/index.html","710a2cc9ae3b1088aec0955ee4b9d618"],["/tags/自建图床/index.html","94c24fcb08a0d7d76b6675eb1ace9a16"],["/tags/静态网站/index.html","93327531dd52fb1e21c6af171bfe074c"]];
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
