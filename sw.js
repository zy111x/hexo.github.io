/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/zy111x.github.io/404.html","01c7dda3fc1c24fb677434c0eada54de"],["/zy111x.github.io/about/index.html","4b7c30d74f7928210672aac1f114a028"],["/zy111x.github.io/album/index.html","1686449e9985d2ae65cb8ddd51957e62"],["/zy111x.github.io/anzhiyu/random.js","0316a4f881dc43f0c4ffec9c2e1929d5"],["/zy111x.github.io/archives/2023/06/index.html","0269609ed9eb47211f0c45e16fd947b5"],["/zy111x.github.io/archives/2023/07/index.html","1d205b8a6f085cb6d108d647e2dbe1b2"],["/zy111x.github.io/archives/2023/index.html","b1beb4e4a218bd92c867e465cb2301a1"],["/zy111x.github.io/archives/2024/07/index.html","a81e4c1ad6fe5661a0b18de7be9562a5"],["/zy111x.github.io/archives/2024/08/index.html","3ee49724c3cf7175665ad54d41eee38a"],["/zy111x.github.io/archives/2024/index.html","4017fc4dce8df0c9b27efa45f97c0310"],["/zy111x.github.io/archives/index.html","a010daf89370bcd6d23a4424f8ab860b"],["/zy111x.github.io/categories/index.html","927fc6a2bb08eb8aa67aa82a805fde97"],["/zy111x.github.io/categories/学习/index.html","3b2179c5ce6a12a2f45f7246ec3b1787"],["/zy111x.github.io/comments/index.html","ddd02e92053210a208f51bb70b78d82c"],["/zy111x.github.io/css/about-tag.css","cec8a4d09df053602402d1c0ed337c06"],["/zy111x.github.io/css/background.css","bb1f5d757743dc0c7a17eafba8d46d52"],["/zy111x.github.io/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/zy111x.github.io/css/home.css","ba627b6136a51d18416833b1e424ad24"],["/zy111x.github.io/css/icat.css","8021d194de478b57a39c51e98649741f"],["/zy111x.github.io/css/index.css","c07af947a5273697b872321d9b991968"],["/zy111x.github.io/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/zy111x.github.io/css/welcome.css","715c2af7f10bf6151251e4dd0313e0ec"],["/zy111x.github.io/cutAnimals/index.html","44b5a02e5469bc27f62ddccba6846e3a"],["/zy111x.github.io/dailyPhoto/index.html","8cb026d209a02742862b74a531de668a"],["/zy111x.github.io/essay/index.html","99754e9ffe96bd751f3633347bbb81cc"],["/zy111x.github.io/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/zy111x.github.io/img/512.png","09ececcc5d241268a724dc8ff9849722"],["/zy111x.github.io/img/algolia.svg","f60fbbe4a8afa312b3f6d12182558861"],["/zy111x.github.io/img/comment_bg.png","73c4561c3dfbc7077c7525339fe5e87a"],["/zy111x.github.io/img/default_cover.jpg","4fde0a97478c6436fcf406bbd1524e78"],["/zy111x.github.io/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/zy111x.github.io/img/loading.gif","d6b808ce6a48efba98bc2ebddffef10e"],["/zy111x.github.io/img/siteicon/16.png","40437a7e42806e0c0fa6b6c2d77a1fa5"],["/zy111x.github.io/img/siteicon/32.png","6de2984e4c978f3d7b5a7d31fc439641"],["/zy111x.github.io/img/siteicon/apple-icon-180.png","f6da21df9f72c54ce97346d550ce58f4"],["/zy111x.github.io/img/siteicon/apple-splash-1125-2436.jpg","2ef897a6e832989b9ea7fbbd49d361f6"],["/zy111x.github.io/img/siteicon/apple-splash-1136-640.jpg","6ee16bd2421904124759b3001be65047"],["/zy111x.github.io/img/siteicon/apple-splash-1170-2532.jpg","68858d357559c7c2ce575193445ec074"],["/zy111x.github.io/img/siteicon/apple-splash-1179-2556.jpg","1a037efdb7c40aa0e4b2e8cfce4d212f"],["/zy111x.github.io/img/siteicon/apple-splash-1242-2208.jpg","5f78e5eb95eea3fcbf3e92836857db42"],["/zy111x.github.io/img/siteicon/apple-splash-1242-2688.jpg","5556f1f982e46a5cc604540dd7eb221f"],["/zy111x.github.io/img/siteicon/apple-splash-1284-2778.jpg","8ebddd0f8f7fac705e986b883d79e9f1"],["/zy111x.github.io/img/siteicon/apple-splash-1290-2796.jpg","52ae2065253c46c2da735b7c9ab58966"],["/zy111x.github.io/img/siteicon/apple-splash-1334-750.jpg","bd27733eab2f4c4e1504b371e401333a"],["/zy111x.github.io/img/siteicon/apple-splash-1536-2048.jpg","e1dc64e0c2e682d7c27d4c16f624e105"],["/zy111x.github.io/img/siteicon/apple-splash-1620-2160.jpg","1f7b38621ad23e7aadd2889fa3a5fa61"],["/zy111x.github.io/img/siteicon/apple-splash-1668-2224.jpg","7d483bc1e3ca7edd5ea246c1f3b7d11e"],["/zy111x.github.io/img/siteicon/apple-splash-1668-2388.jpg","a842930a7f01a5f2af293916a5fa8c9f"],["/zy111x.github.io/img/siteicon/apple-splash-1792-828.jpg","2857ff942c80bc45f1605042155d3881"],["/zy111x.github.io/img/siteicon/apple-splash-2048-1536.jpg","6254295b0fb48c01d950e5d5c78379df"],["/zy111x.github.io/img/siteicon/apple-splash-2048-2732.jpg","73c508dfb39c7efc262f399397c415a4"],["/zy111x.github.io/img/siteicon/apple-splash-2160-1620.jpg","98d6625402f51c7fbf9c70c115d11e56"],["/zy111x.github.io/img/siteicon/apple-splash-2208-1242.jpg","47771757ba8d4a58a2c923bf61b0e1d3"],["/zy111x.github.io/img/siteicon/apple-splash-2224-1668.jpg","31ed922d31cba682de352ae3db9c25cb"],["/zy111x.github.io/img/siteicon/apple-splash-2388-1668.jpg","fdfe8cbda8beb5ae3d3f4d75138a47b4"],["/zy111x.github.io/img/siteicon/apple-splash-2436-1125.jpg","9f7234706e66b2e01a214cef3bef901b"],["/zy111x.github.io/img/siteicon/apple-splash-2532-1170.jpg","eabd23339d78fe1638b84d6533815c8d"],["/zy111x.github.io/img/siteicon/apple-splash-2556-1179.jpg","01b92828c5810363c195e54ae419d1b6"],["/zy111x.github.io/img/siteicon/apple-splash-2688-1242.jpg","61c7ed30771eb8b57df8828ce8b2ae78"],["/zy111x.github.io/img/siteicon/apple-splash-2732-2048.jpg","e1f7bf69f473719eb380caa1ff9678f9"],["/zy111x.github.io/img/siteicon/apple-splash-2778-1284.jpg","95db3fc08694fd4b3089ab61d4aa5e4a"],["/zy111x.github.io/img/siteicon/apple-splash-2796-1290.jpg","29b6c101f2474a89bdcc7e19a6126651"],["/zy111x.github.io/img/siteicon/apple-splash-640-1136.jpg","6b9e7493c397c364c3e549cb468d50d5"],["/zy111x.github.io/img/siteicon/apple-splash-750-1334.jpg","286454d3b4439e7afc83e5d349ffa6c3"],["/zy111x.github.io/img/siteicon/apple-splash-828-1792.jpg","8261f59c14231fa6b3ef47dc22730a68"],["/zy111x.github.io/img/siteicon/manifest-icon-192.maskable.png","ac2ee6b9eef523ed05d3e567c0f8c65f"],["/zy111x.github.io/img/siteicon/manifest-icon-512.maskable.png","119a96071074812a2aa7718221dbb4ca"],["/zy111x.github.io/index.html","c2547aefad879331a66e0e4b9e1c9cf0"],["/zy111x.github.io/js/anzhiyu/ai_abstract.js","393af6df4caa9f85a3763c820ffca8c5"],["/zy111x.github.io/js/anzhiyu/comment_barrage.js","2163a41348d9273070e04a03a33af02c"],["/zy111x.github.io/js/anzhiyu/people.js","4dd7da2c79374419fe3cc50fa203a3e9"],["/zy111x.github.io/js/anzhiyu/random_friends_post.js","75b328427214c9ad003f2a04642b10d6"],["/zy111x.github.io/js/anzhiyu/right_click_menu.js","e6a9ea97b47f62eb8c8ed1b025be9617"],["/zy111x.github.io/js/imgloaded.js","d41d8cd98f00b204e9800998ecf8427e"],["/zy111x.github.io/js/main.js","99cf0d990413c68b75223985a853968f"],["/zy111x.github.io/js/nyan.js","89da1adc4820c2aebb7693b9d0071007"],["/zy111x.github.io/js/search/algolia.js","0360e5165da2cb0c886f5f2ef2979e7d"],["/zy111x.github.io/js/search/local-search.js","c2b0b0c31fd9b0eb224b37a72545eba3"],["/zy111x.github.io/js/tw_cn.js","92b132ebeda0d4f417947c7e24e6b8a4"],["/zy111x.github.io/js/utils.js","f7030bc946d17b8c5587f0103cb14ad0"],["/zy111x.github.io/js/welcome.js","4a0281c538dc99cb2dc33afa3a37821f"],["/zy111x.github.io/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/zy111x.github.io/myPassion/index.html","4bc0d923c912bbb391edf56fc472002e"],["/zy111x.github.io/posts/14307/index.html","d1e601a8fb62dceaff6b7de2f8891ba4"],["/zy111x.github.io/posts/16107/index.html","8c1383e8ecd7a672f6000354cc9de7b9"],["/zy111x.github.io/posts/22648/index.html","51f963aa5f06bebd10a85c96a24de452"],["/zy111x.github.io/posts/2729/index.html","6c9f5380f4dce40601e35588179b1de2"],["/zy111x.github.io/posts/32968/index.html","7fd10dc6f88a257df6aa12620c88e7e2"],["/zy111x.github.io/posts/47193/index.html","53b335e25159dfa9e46d5310a97135e5"],["/zy111x.github.io/posts/58960/index.html","45b7ddd71d0a5e5dfdd10d625ba1740c"],["/zy111x.github.io/posts/d50a/index.html","75bdd493a6798e5fbf8350dcf2f9ae21"],["/zy111x.github.io/sw-dom.js","5a79b9baf4651337ab8648feec149a9c"],["/zy111x.github.io/sw-register.js","ba06d1a2bbd503f05e1bc001aa44c69c"],["/zy111x.github.io/tags/Cloudflare/index.html","bb5d9dd8f05a2752d6bacb4b39bc90e9"],["/zy111x.github.io/tags/Git/index.html","d6dee132557b2adb49078ff7ee721bf8"],["/zy111x.github.io/tags/Github/index.html","cec0bda889a9d97b4a91c33eb608300a"],["/zy111x.github.io/tags/Greasy-Fork/index.html","5aa90aaea0e7ca5bfd889e2061bf380f"],["/zy111x.github.io/tags/Hexo/index.html","c820d1434071384ed1e326e15dc249a7"],["/zy111x.github.io/tags/Markdown/index.html","a89d7ede644d2651f431b827e1c75386"],["/zy111x.github.io/tags/Markdown语法/index.html","495c68cbbe7eb59106aff9e7e4049084"],["/zy111x.github.io/tags/Microsoft-Edge/index.html","b8782b49fd02fb4827d27c6836a519b5"],["/zy111x.github.io/tags/Node-js/index.html","db57d665eae11c2bb07ec4a991f0e87f"],["/zy111x.github.io/tags/Pages/index.html","49b35c49eb638d37fc6178999797099c"],["/zy111x.github.io/tags/Tag-Plugins/index.html","e78a96d39c4f2635604e9fcb6009d9f9"],["/zy111x.github.io/tags/Tampermonkey/index.html","e29dbac0e052b0035a6a045797fbfe96"],["/zy111x.github.io/tags/index.html","f907db3b99ac6717f3f8e26db2d9005b"],["/zy111x.github.io/tags/telegraph-Image/index.html","7a6e9c1bf401421e5ad1d2fb7609bd8f"],["/zy111x.github.io/tags/个人网站/index.html","015dc98090b9d6d8a986c0ef2d2016aa"],["/zy111x.github.io/tags/免费托管/index.html","da3ecb363c90ec120b6247661180dd5f"],["/zy111x.github.io/tags/博客/index.html","0033c6eff0b2c2b5af711450ef08e415"],["/zy111x.github.io/tags/博客搭建/index.html","c509a830b8dc0a51bbef8da89ec01ed2"],["/zy111x.github.io/tags/图床/index.html","32d34a258734cc6da148bbb6ffd09d73"],["/zy111x.github.io/tags/学习笔记/index.html","eaa014fbeac4747e8439f242fa2d7e1e"],["/zy111x.github.io/tags/扩展/index.html","92b3d184efb65cf3f836f25ca96bee30"],["/zy111x.github.io/tags/插件/index.html","32488d763f1be65bfaccd06f04cc2971"],["/zy111x.github.io/tags/效率/index.html","af95579411add65971124b52503a3381"],["/zy111x.github.io/tags/浏览器/index.html","83641c7592e54ea8bf61930530bd0047"],["/zy111x.github.io/tags/编辑格式/index.html","1cbca8b9c8b0f2db6f373b301954b082"],["/zy111x.github.io/tags/脚本/index.html","264b73561407ee5973905a2777728365"],["/zy111x.github.io/tags/自建图床/index.html","4cfb60d348f3c64a5f7c9db444a80c94"],["/zy111x.github.io/tags/静态网站/index.html","36821ab6fc51c4ceab546a68f5c49a1b"]];
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
