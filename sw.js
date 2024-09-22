/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7de838c6d97da46666eb8d179c81dda6"],["/about/index.html","7a274791a1fc7f1ffb848172e7c57f5a"],["/album/index.html","d3a008923a1c76dcafc5c36a19451df4"],["/anniversary/index.html","000ffd936be7a3ce101207cd4546f98e"],["/anzhiyu/random.js","58952f7618c263d7504a71230d9e59ec"],["/archives/2023/06/index.html","f82c9e2cb3f221bd9e6ff43250dca322"],["/archives/2023/07/index.html","92b807dff1a98b411d077c0a29b60028"],["/archives/2023/index.html","ab3eea0c4a24538f373f8efd14160551"],["/archives/2024/07/index.html","8c589a5a985ed6191cd4d144e77058f1"],["/archives/2024/08/index.html","219865c9e9ef84c83ed8591917cd41e9"],["/archives/2024/09/index.html","4602959244f5da6cea854e87629e7092"],["/archives/2024/index.html","c86321842dea63968ac0a50664cec00a"],["/archives/2024/page/2/index.html","4fc0354559d7fbc200c46caded72549d"],["/archives/index.html","c6ab1516e401e4323520a30100b739f9"],["/archives/page/2/index.html","03b49b2e3ca8a265c2b98216d5103e0e"],["/categories/index.html","46e97e2fbc686ea48550d01e002c2b07"],["/categories/历史/index.html","469a96269614619d65f8c418dd063003"],["/categories/历史/不背“锅”系列/index.html","7d86313839ee82950bdb5c6d3c8f3957"],["/categories/学习/index.html","1e6543629ab5b036a870873c2671dd1d"],["/categories/生活/index.html","c6c01e364862cdd3b430e1d446e8d64d"],["/categories/转载/index.html","65bb53b29862eaa1935b6e834ab0ef7a"],["/comments/index.html","48fa09d265f633d74971291a36cda118"],["/cookies/index.html","53ff66453cbf14edde44415c04537ea3"],["/copyright/index.html","1c6ef829e0f017df6c948ea6901a6bfc"],["/css/about-tag.css","cec8a4d09df053602402d1c0ed337c06"],["/css/anniversary.css","7284f4b125a9a4f255a2d70470b9ab76"],["/css/background.css","bb1f5d757743dc0c7a17eafba8d46d52"],["/css/bilibili.css","7a2b02d35a7b9dbc407829c9c96e6a4b"],["/css/douyin.css","8050710fe24df97930e914d00d93f569"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/home.css","ba627b6136a51d18416833b1e424ad24"],["/css/icat.css","8021d194de478b57a39c51e98649741f"],["/css/icon.css","7f76869eb30eaa0d42982eec6d1b8e62"],["/css/index.css","dc0057db3f80ff84b3b44155ee470c9d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/weibo.css","1b25e722f159e825d0434be3ea22e0c5"],["/css/welcome.css","715c2af7f10bf6151251e4dd0313e0ec"],["/css/zhihu.css","05b5d9d03c466f2716d89ac38d82cd1a"],["/cutAnimals/index.html","0b3294dbd9cb9af07ce42de1573d0165"],["/dailyPhoto/index.html","57279adfc2f661374bdeb9f1efc3a21a"],["/essay/index.html","4f5244a9d60bab9465d5f9261c42527a"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","09ececcc5d241268a724dc8ff9849722"],["/img/algolia.svg","f60fbbe4a8afa312b3f6d12182558861"],["/img/comment_bg.png","73c4561c3dfbc7077c7525339fe5e87a"],["/img/default_cover.jpg","4fde0a97478c6436fcf406bbd1524e78"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","d6b808ce6a48efba98bc2ebddffef10e"],["/img/siteicon/16.png","40437a7e42806e0c0fa6b6c2d77a1fa5"],["/img/siteicon/32.png","6de2984e4c978f3d7b5a7d31fc439641"],["/img/siteicon/apple-icon-180.png","f6da21df9f72c54ce97346d550ce58f4"],["/img/siteicon/apple-splash-1125-2436.jpg","2ef897a6e832989b9ea7fbbd49d361f6"],["/img/siteicon/apple-splash-1136-640.jpg","6ee16bd2421904124759b3001be65047"],["/img/siteicon/apple-splash-1170-2532.jpg","68858d357559c7c2ce575193445ec074"],["/img/siteicon/apple-splash-1179-2556.jpg","1a037efdb7c40aa0e4b2e8cfce4d212f"],["/img/siteicon/apple-splash-1242-2208.jpg","5f78e5eb95eea3fcbf3e92836857db42"],["/img/siteicon/apple-splash-1242-2688.jpg","5556f1f982e46a5cc604540dd7eb221f"],["/img/siteicon/apple-splash-1284-2778.jpg","8ebddd0f8f7fac705e986b883d79e9f1"],["/img/siteicon/apple-splash-1290-2796.jpg","52ae2065253c46c2da735b7c9ab58966"],["/img/siteicon/apple-splash-1334-750.jpg","bd27733eab2f4c4e1504b371e401333a"],["/img/siteicon/apple-splash-1536-2048.jpg","e1dc64e0c2e682d7c27d4c16f624e105"],["/img/siteicon/apple-splash-1620-2160.jpg","1f7b38621ad23e7aadd2889fa3a5fa61"],["/img/siteicon/apple-splash-1668-2224.jpg","7d483bc1e3ca7edd5ea246c1f3b7d11e"],["/img/siteicon/apple-splash-1668-2388.jpg","a842930a7f01a5f2af293916a5fa8c9f"],["/img/siteicon/apple-splash-1792-828.jpg","2857ff942c80bc45f1605042155d3881"],["/img/siteicon/apple-splash-2048-1536.jpg","6254295b0fb48c01d950e5d5c78379df"],["/img/siteicon/apple-splash-2048-2732.jpg","73c508dfb39c7efc262f399397c415a4"],["/img/siteicon/apple-splash-2160-1620.jpg","98d6625402f51c7fbf9c70c115d11e56"],["/img/siteicon/apple-splash-2208-1242.jpg","47771757ba8d4a58a2c923bf61b0e1d3"],["/img/siteicon/apple-splash-2224-1668.jpg","31ed922d31cba682de352ae3db9c25cb"],["/img/siteicon/apple-splash-2388-1668.jpg","fdfe8cbda8beb5ae3d3f4d75138a47b4"],["/img/siteicon/apple-splash-2436-1125.jpg","9f7234706e66b2e01a214cef3bef901b"],["/img/siteicon/apple-splash-2532-1170.jpg","eabd23339d78fe1638b84d6533815c8d"],["/img/siteicon/apple-splash-2556-1179.jpg","01b92828c5810363c195e54ae419d1b6"],["/img/siteicon/apple-splash-2688-1242.jpg","61c7ed30771eb8b57df8828ce8b2ae78"],["/img/siteicon/apple-splash-2732-2048.jpg","e1f7bf69f473719eb380caa1ff9678f9"],["/img/siteicon/apple-splash-2778-1284.jpg","95db3fc08694fd4b3089ab61d4aa5e4a"],["/img/siteicon/apple-splash-2796-1290.jpg","29b6c101f2474a89bdcc7e19a6126651"],["/img/siteicon/apple-splash-640-1136.jpg","6b9e7493c397c364c3e549cb468d50d5"],["/img/siteicon/apple-splash-750-1334.jpg","286454d3b4439e7afc83e5d349ffa6c3"],["/img/siteicon/apple-splash-828-1792.jpg","8261f59c14231fa6b3ef47dc22730a68"],["/img/siteicon/manifest-icon-192.maskable.png","ac2ee6b9eef523ed05d3e567c0f8c65f"],["/img/siteicon/manifest-icon-512.maskable.png","119a96071074812a2aa7718221dbb4ca"],["/index.html","0a0fb581b690cf7f9abf90d8deba2e4f"],["/js/anniversary.js","4c48e3069a07275655245ef917d293d2"],["/js/anzhiyu/ai_abstract.js","393af6df4caa9f85a3763c820ffca8c5"],["/js/anzhiyu/comment_barrage.js","2163a41348d9273070e04a03a33af02c"],["/js/anzhiyu/people.js","4dd7da2c79374419fe3cc50fa203a3e9"],["/js/anzhiyu/random_friends_post.js","75b328427214c9ad003f2a04642b10d6"],["/js/anzhiyu/right_click_menu.js","e6a9ea97b47f62eb8c8ed1b025be9617"],["/js/bilibili.js","b2d6d237344181b8509ec2a28006b105"],["/js/douyin.js","595d56aeede9de1ac374d4d2381eeb06"],["/js/imgloaded.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","99cf0d990413c68b75223985a853968f"],["/js/nyan.js","89da1adc4820c2aebb7693b9d0071007"],["/js/search/algolia.js","0360e5165da2cb0c886f5f2ef2979e7d"],["/js/search/local-search.js","c2b0b0c31fd9b0eb224b37a72545eba3"],["/js/snowflake.js","f50234d7ebbfcccdbe7ce06207c473c6"],["/js/timing.js","390ed71f95a50677b4124aece7be95ff"],["/js/tw_cn.js","92b132ebeda0d4f417947c7e24e6b8a4"],["/js/utils.js","f7030bc946d17b8c5587f0103cb14ad0"],["/js/weibo.js","030bf5733610945b5a9bd9a24adc2bc4"],["/js/welcome.js","4a0281c538dc99cb2dc33afa3a37821f"],["/js/zhihu.js","d2d6c6985a5b609ea49fff211e371fbb"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/myPassion/index.html","d833be6637fc94dd07b32a80aceb8c4f"],["/page/2/index.html","0894ddf53e4ed042f8c83b6dfe158296"],["/posts/1/index.html","3c72fdcd6525be1f37a33cbdd29a9a9b"],["/posts/12237/index.html","172d26d17e82d710fc43d41e3d543bc2"],["/posts/14307/index.html","e90de24a2c92ba27f686605040248275"],["/posts/14373/index.html","f61ffda40b6ab60e95157bf8323a91d4"],["/posts/14375/index.html","9072feeceaf98c20b885bdf343843372"],["/posts/16107/index.html","b35d9c8c59c4fbed15e7ee21e7beb1f9"],["/posts/19367/index.html","af76bb9a556cc2308b06f6d0c68d6864"],["/posts/21496/index.html","ddde30b97ff0672e47f1e376439538ab"],["/posts/22648/index.html","c7ccdcf629d57596b6da282e3b36b18a"],["/posts/2729/index.html","d8200d7ef03192f0c5ae3587caff9304"],["/posts/32968/index.html","a8743ab3faa4bc1ed4b0f775afc066c2"],["/posts/35483/index.html","1f7a50957b5f87dd24ee83e8105087ef"],["/posts/5548/index.html","6249924f16b00c38a8c44cf09e63e391"],["/posts/58960/index.html","fd219100e4f0a8e680d03b44b5ba2612"],["/posts/63922/index.html","fd669c274d08b568cc0a4367fb853811"],["/posts/d50a/index.html","1a3e0a1b87079f42783ddcd97658cd26"],["/privacy/index.html","2e2950fea3b2053ab40161ba3429a540"],["/sw-register.js","21240325cc067db9cc11a68668094d7a"],["/tags/API/index.html","77532445eabf93f6c431292d1e4a6436"],["/tags/Cloudflare/index.html","efb0c09e9d1630c35176ff2d5b1ab59d"],["/tags/Git/index.html","c5802f344eb84cb76e3bdecf84acb55a"],["/tags/Github/index.html","3d09e8cf0261835a969742028c88c36c"],["/tags/Hexo/index.html","47508683c67c840a814e4e06cb0929c3"],["/tags/Markdown/index.html","3cbfa08ee884d18ba3030b1cd88672a3"],["/tags/Pages/index.html","87b286af99ca18571203578c31c81979"],["/tags/Tag-Plugins/index.html","3b3b8829f9b13707d1316db4d844b6c6"],["/tags/Tampermonkey/index.html","eb8f9d7c5381a7bd4a19f9b86f409bdf"],["/tags/index.html","d26fd0643c2cd02392901dc498268845"],["/tags/个人网站/index.html","4a430f7bf26e1147ebd26171cfd8e329"],["/tags/博客/index.html","ca1d35d9b344ff71cc6652cbf3238aec"],["/tags/图床/index.html","e069bb60fea0af600093896ff8c42dcb"],["/tags/学习笔记/index.html","bfbe76768497b0299ff4a2fb18d671d0"],["/tags/工具/index.html","113765d80d625cbdc303ee928c1f27ad"],["/tags/感悟/index.html","e91c7135f90cd94590dd86045469e1e1"],["/tags/接口/index.html","b9453f05f0db31bf6cd65c31ddced80e"],["/tags/插件/index.html","06f7166a1402d3f468c33c135503248a"],["/tags/生活/index.html","60fe0c03ef827bd61c473eb5e7c67556"],["/tags/脚本/index.html","5817ca4051390b4bc38f4cc88f0bbaa0"],["/tags/随笔/index.html","5dc0c1c103fa69d13c2396dcdf3e97d5"],["/tags/静态网站/index.html","4850f123d703de8d1b2a1d2a075328cf"]];
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
