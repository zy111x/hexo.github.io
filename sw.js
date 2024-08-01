/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","a567e7dd0cc495cdbe449b060f6e48af"],["/about/index.html","c6233f8474c7523fabf76fc13566004c"],["/album/index.html","0b12119785c3ed7ea0ba88b6936cfb9f"],["/anzhiyu/random.js","0316a4f881dc43f0c4ffec9c2e1929d5"],["/archives/2023/06/index.html","ead0ed9331968b52f212a901eee8307b"],["/archives/2023/07/index.html","eb785e2cba78ae88d576c7f568d598bd"],["/archives/2023/index.html","1f6cc6b7627854791dead84a8cf648cb"],["/archives/2024/07/index.html","61607b6539b06f38483ce577c42957b7"],["/archives/2024/08/index.html","74f7bea4ce25daa517605447e6c00cc3"],["/archives/2024/index.html","f43e854ceea9c510912ad735555346e8"],["/archives/index.html","14f0db90e699dd1c5dad31f06f7a21eb"],["/categories/index.html","5874072177f3fb15fc1ea020006e3a2f"],["/categories/学习/index.html","8a7165cf387a92f6d31c665e27e9bbc0"],["/comments/index.html","bf381f66bc60e12fc0529f14cc95b51c"],["/css/about-tag.css","cec8a4d09df053602402d1c0ed337c06"],["/css/background.css","bb1f5d757743dc0c7a17eafba8d46d52"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/home.css","ba627b6136a51d18416833b1e424ad24"],["/css/icat.css","8021d194de478b57a39c51e98649741f"],["/css/index.css","36087e3efa901b0f16d68e9d079779f1"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/welcome.css","715c2af7f10bf6151251e4dd0313e0ec"],["/cutAnimals/index.html","583b762f697b853897ad5a09508e1c32"],["/dailyPhoto/index.html","539e45db7176f6d6c8b2c6328c0ef6e5"],["/essay/index.html","dd61f21dbe52cc45a3ee53d0c6b4e8a7"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","09ececcc5d241268a724dc8ff9849722"],["/img/algolia.svg","f60fbbe4a8afa312b3f6d12182558861"],["/img/comment_bg.png","73c4561c3dfbc7077c7525339fe5e87a"],["/img/default_cover.jpg","4fde0a97478c6436fcf406bbd1524e78"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","d6b808ce6a48efba98bc2ebddffef10e"],["/img/siteicon/16.png","40437a7e42806e0c0fa6b6c2d77a1fa5"],["/img/siteicon/32.png","6de2984e4c978f3d7b5a7d31fc439641"],["/img/siteicon/apple-icon-180.png","f6da21df9f72c54ce97346d550ce58f4"],["/img/siteicon/manifest-icon-192.maskable.png","ac2ee6b9eef523ed05d3e567c0f8c65f"],["/img/siteicon/manifest-icon-512.maskable.png","119a96071074812a2aa7718221dbb4ca"],["/index.html","e55566927a95de81e36f35e0ea513f66"],["/js/anzhiyu/ai_abstract.js","393af6df4caa9f85a3763c820ffca8c5"],["/js/anzhiyu/comment_barrage.js","2163a41348d9273070e04a03a33af02c"],["/js/anzhiyu/people.js","4dd7da2c79374419fe3cc50fa203a3e9"],["/js/anzhiyu/random_friends_post.js","75b328427214c9ad003f2a04642b10d6"],["/js/anzhiyu/right_click_menu.js","e6a9ea97b47f62eb8c8ed1b025be9617"],["/js/imgloaded.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","99cf0d990413c68b75223985a853968f"],["/js/search/algolia.js","0360e5165da2cb0c886f5f2ef2979e7d"],["/js/search/local-search.js","c2b0b0c31fd9b0eb224b37a72545eba3"],["/js/tw_cn.js","92b132ebeda0d4f417947c7e24e6b8a4"],["/js/utils.js","f7030bc946d17b8c5587f0103cb14ad0"],["/js/welcome.js","4a0281c538dc99cb2dc33afa3a37821f"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/myPassion/index.html","e8a5194cb9e4b81cb9573800e3d7ae0c"],["/posts/14307/index.html","d131653c1be87fd1e88c5c727b299447"],["/posts/16107/index.html","a903d10d19ccf27bb43507e3b9995ec2"],["/posts/22648/index.html","e04a75bd03a176bdaa7e67b409e3ce30"],["/posts/2729/index.html","f496513ea2e73314ce25a80db136994f"],["/posts/32968/index.html","f0e13e763b59d91a6b671cf992897369"],["/posts/47193/index.html","eee2cdec9323ae5fcc4352cf52b607ff"],["/posts/58960/index.html","f24ea28279b1e5e045b44d0b9a4307fc"],["/posts/d50a/index.html","74bb288648274fcdb436fab24587630f"],["/sw-register.js","8bafb0ade3352886bcf4814b9bdf8b12"],["/tags/Cloudflare/index.html","5cf33779fff38142af91cff998c26c90"],["/tags/Git/index.html","f56c833f785856d98f19ceb741b6db91"],["/tags/Github/index.html","5ba32e60be4fd7bfd2717003b030cd27"],["/tags/Greasy-Fork/index.html","a3597434308532669dec1924433bcbcd"],["/tags/Hexo/index.html","f42fcba5114bc3f56a1a2c2e8b9a80c2"],["/tags/Markdown/index.html","0a11bedfeb5fc9e0164ba32e0f740ea7"],["/tags/Markdown语法/index.html","c08347c2eb419fc562bd787fe2778581"],["/tags/Microsoft-Edge/index.html","33ba5f0d7f5bb39dbbd2b188ab3319f9"],["/tags/Node-js/index.html","f2c54f033892c961fa6878c9e3bb09b9"],["/tags/Pages/index.html","6510e160d5ab222ee734d515f0887398"],["/tags/Tag-Plugins/index.html","09f80821fc4976b522c3c4f7761ea488"],["/tags/Tampermonkey/index.html","2e6c3b9c1c540d1272db0c21cb73249f"],["/tags/index.html","c7550c2cfee7818b9b6111ea45a730e4"],["/tags/telegraph-Image/index.html","45b515cf4e577976045674deb4570f7a"],["/tags/个人网站/index.html","14b5e7266d5d20409032da017262605c"],["/tags/免费托管/index.html","eff12769419e6ea02026b1e3958f6c04"],["/tags/博客/index.html","4d1879b9b60acde9b938bd8c4e0cc7ca"],["/tags/博客搭建/index.html","f94ba7b88199fc269772c73566d46785"],["/tags/图床/index.html","2bad191bd7a138ed5a7c15967e2c5c72"],["/tags/学习笔记/index.html","c8eb444c13c3b48b353aa089e3689ff0"],["/tags/扩展/index.html","75e5d9cfccb190af47b73cfb9971bb6d"],["/tags/插件/index.html","6bf1b8d72492ef09ace08aae7b128632"],["/tags/效率/index.html","6c4051428a958f42412f653b225fe2b9"],["/tags/浏览器/index.html","9b407cfe9898ef1821accde3a5d2a375"],["/tags/编辑格式/index.html","c4fc4ea7670444f7babe0e3252357d09"],["/tags/脚本/index.html","80c1da4f7e0202026612ce29db80b3c2"],["/tags/自建图床/index.html","5083702e2b44ac46fade720371982711"],["/tags/静态网站/index.html","d0ec28fa4100a6d547166864c0b0a41b"]];
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
