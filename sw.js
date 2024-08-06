/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b15029b72eb8203633bc1a1c8f15a9d6"],["/about/index.html","3c49f5bf9b682c6ef967b80e2316093c"],["/album/index.html","28b4e5c5d94ef8dccdbf166b45480886"],["/anzhiyu/random.js","0316a4f881dc43f0c4ffec9c2e1929d5"],["/archives/2023/06/index.html","0479267b62d22dea054c7093de1307fd"],["/archives/2023/07/index.html","b953c77f50e750f945c35f662272f8d9"],["/archives/2023/index.html","93b956becfd1086031551f0e53bb7f87"],["/archives/2024/07/index.html","412c269ad14e041ea494cbf8762d631a"],["/archives/2024/08/index.html","a543a31ecda5ad5b7ac396e91285bdb3"],["/archives/2024/index.html","23d27077de73df6adc5e244bdc9194e5"],["/archives/index.html","7d171f1615c4f31dc2619d6f4b390ca6"],["/categories/index.html","30e4666c544bd322232bb598117d290c"],["/categories/学习/index.html","cf39bbe271fdbfac3b441f9945fcf20d"],["/comments/index.html","2e1a7e2bea337847db7c70d59e4feabb"],["/css/about-tag.css","cec8a4d09df053602402d1c0ed337c06"],["/css/background.css","bb1f5d757743dc0c7a17eafba8d46d52"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/home.css","ba627b6136a51d18416833b1e424ad24"],["/css/icat.css","8021d194de478b57a39c51e98649741f"],["/css/index.css","c07af947a5273697b872321d9b991968"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/welcome.css","715c2af7f10bf6151251e4dd0313e0ec"],["/cutAnimals/index.html","bbff0f4fabebcf409123295dfa6304de"],["/dailyPhoto/index.html","1a44aa5fc0a34413fa0a8c532431b477"],["/essay/index.html","043f217116ca69641024a0f26c8ba9d3"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","701819a72025df4d8e2a111c1c8f2c72"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/comment_bg.png","fe6bbe142eb7dc7b4f876ae4f5af97d0"],["/img/default_cover.jpg","8b35831759dc5f66710c2839422109d5"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","05fb29f4e677ff6057ef55925f46e9b0"],["/img/siteicon/16.png","3de470acb5237bf16318d827443dd5f1"],["/img/siteicon/32.png","802aa4685b3652d5a1b6e5a6323cf3c0"],["/img/siteicon/apple-icon-180.png","ac045b7b6012d72ccbcffb07727c7b11"],["/img/siteicon/apple-splash-1125-2436.jpg","1139096aad468984f80778c1a712764b"],["/img/siteicon/apple-splash-1136-640.jpg","ae4849b4d58747161854a836cd2aa9b4"],["/img/siteicon/apple-splash-1170-2532.jpg","097ab1d9c1daca5ae89500484ebd8a9b"],["/img/siteicon/apple-splash-1179-2556.jpg","d924daaeb97c41982d00b254e831d05a"],["/img/siteicon/apple-splash-1242-2208.jpg","1b48f03a4b612669799dd3404a000b8f"],["/img/siteicon/apple-splash-1242-2688.jpg","427110e33933f488c2a7f025de006d93"],["/img/siteicon/apple-splash-1284-2778.jpg","daed352e01717d2cceca9790bd96e974"],["/img/siteicon/apple-splash-1290-2796.jpg","81feb64517f766eb1f9ade1f09cb4311"],["/img/siteicon/apple-splash-1334-750.jpg","0212515f9f18bb59523abb7c7ea714ea"],["/img/siteicon/apple-splash-1536-2048.jpg","7a622862d97116db889160b423405726"],["/img/siteicon/apple-splash-1620-2160.jpg","a6399501c4589b222f3734e665b3b940"],["/img/siteicon/apple-splash-1668-2224.jpg","a80302a8597f6f9d994da9e06949e364"],["/img/siteicon/apple-splash-1668-2388.jpg","703d765544c57cb408c17b78bb4254c0"],["/img/siteicon/apple-splash-1792-828.jpg","1e3e62305f9f568b294f829fb89c5a42"],["/img/siteicon/apple-splash-2048-1536.jpg","ea938e197bb6cf1fe18b656f480a7577"],["/img/siteicon/apple-splash-2048-2732.jpg","19a457e81ac1e3464abd88cfb6604ccf"],["/img/siteicon/apple-splash-2160-1620.jpg","956df89c788c0494bf8c5502e0bcd01b"],["/img/siteicon/apple-splash-2208-1242.jpg","f90a3d6908ade373ca43bf3d2debbe6b"],["/img/siteicon/apple-splash-2224-1668.jpg","9112cb377006d40af0b6c41d82d7b126"],["/img/siteicon/apple-splash-2388-1668.jpg","342ee3cd080439280078e84146832061"],["/img/siteicon/apple-splash-2436-1125.jpg","d563e41e42e35e6fd0e232ef5bb20a0e"],["/img/siteicon/apple-splash-2532-1170.jpg","a37f8763605bd84fb1d41df83b822c11"],["/img/siteicon/apple-splash-2556-1179.jpg","88e3ddf50600b16e1e46eb0c5f05d2d7"],["/img/siteicon/apple-splash-2688-1242.jpg","a322d397246e29475c831df46468bc0e"],["/img/siteicon/apple-splash-2732-2048.jpg","5b05b4ee8cafa3a4d29fe43f22c0e51e"],["/img/siteicon/apple-splash-2778-1284.jpg","a5ef27bc4ef4a86d602e7bf9b99d0934"],["/img/siteicon/apple-splash-2796-1290.jpg","4013a7bef0dd3fa56b5507d052a13c53"],["/img/siteicon/apple-splash-640-1136.jpg","dd334d9b0c1fcb67311bf2f752776354"],["/img/siteicon/apple-splash-750-1334.jpg","a02e91492884ac6ceb86b0a3285dd5c8"],["/img/siteicon/apple-splash-828-1792.jpg","4b12f2f497d4015281b7e270944f3dca"],["/img/siteicon/manifest-icon-192.maskable.png","87c1b5883834c2164e20e737bd5c2517"],["/img/siteicon/manifest-icon-512.maskable.png","85b846b5722c684339c8bb3e520bcc6a"],["/index.html","88a7433bb3f768d6331e3221d96a3436"],["/js/anzhiyu/ai_abstract.js","393af6df4caa9f85a3763c820ffca8c5"],["/js/anzhiyu/comment_barrage.js","2163a41348d9273070e04a03a33af02c"],["/js/anzhiyu/people.js","4dd7da2c79374419fe3cc50fa203a3e9"],["/js/anzhiyu/random_friends_post.js","75b328427214c9ad003f2a04642b10d6"],["/js/anzhiyu/right_click_menu.js","e6a9ea97b47f62eb8c8ed1b025be9617"],["/js/imgloaded.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","99cf0d990413c68b75223985a853968f"],["/js/nyan.js","89da1adc4820c2aebb7693b9d0071007"],["/js/search/algolia.js","0360e5165da2cb0c886f5f2ef2979e7d"],["/js/search/local-search.js","c2b0b0c31fd9b0eb224b37a72545eba3"],["/js/tw_cn.js","92b132ebeda0d4f417947c7e24e6b8a4"],["/js/utils.js","f7030bc946d17b8c5587f0103cb14ad0"],["/js/welcome.js","4a0281c538dc99cb2dc33afa3a37821f"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/myPassion/index.html","496e3668bb276f306dacd074fb883d2c"],["/posts/14307/index.html","6db37eeb1a77923ea86929699ed3ee07"],["/posts/16107/index.html","a830b286defce24b428257c42f1183b6"],["/posts/22648/index.html","ed1f0b8d7eaec52129eedef677d3b5b1"],["/posts/2729/index.html","4c47a2743024c68fdac9de94bb8bb1af"],["/posts/32968/index.html","a01ba171f78e290cd422066b3ed469b5"],["/posts/47193/index.html","a29c5b8af66a2ac4778fa038ef7e7fc4"],["/posts/58960/index.html","91c39b9960a39ad23ca3d764580073eb"],["/posts/d50a/index.html","1ccf603b5d96fabf5610e495516180d9"],["/sw-register.js","7593f747bf3105268438c7a6bbae27b7"],["/tags/Cloudflare/index.html","9bcb299904dfa45dde72216301a1abdb"],["/tags/Git/index.html","248eff744945f4e3c0b2c104aaa0c7e7"],["/tags/Github/index.html","ad8c41fb303bafd1cfe1e857b2de363a"],["/tags/Greasy-Fork/index.html","3f9b684eca793f4c40ad232bd5a8770c"],["/tags/Hexo/index.html","ff31418b31eb5fcf5a14f91515a55a14"],["/tags/Markdown/index.html","d395b5983230334b02ce980f210477a5"],["/tags/Markdown语法/index.html","5dc28214a6252486b50b675d9b8baf08"],["/tags/Microsoft-Edge/index.html","37f1e0890be7aae9009e1e48bad99a6d"],["/tags/Node-js/index.html","38efca9c8619a776a0811e3ae4dcff3c"],["/tags/Pages/index.html","5832bbbc8f3c816e2b633aaaea6d1612"],["/tags/Tag-Plugins/index.html","192f1330a5557c6acde1b5ea16e16807"],["/tags/Tampermonkey/index.html","9b50d8c02e85f3a9fe5954b04f9f570e"],["/tags/index.html","c758a6e0f1591ffd9d4f2cf02c4678ac"],["/tags/telegraph-Image/index.html","1119203b71b2bbff130642e597ba5f4f"],["/tags/个人网站/index.html","c189c9916992e8a98fd9cdf307e98a94"],["/tags/免费托管/index.html","7abb212269aca65c43bef28aee560bd4"],["/tags/博客/index.html","1b6e94a526925b00b101455b95f2a9ef"],["/tags/博客搭建/index.html","febba643e223bd272926fdfbb903a3c3"],["/tags/图床/index.html","348ac14d4ae69ca2343ed647bc5c178a"],["/tags/学习笔记/index.html","4f32682196482d026e4de4e41bf8ea6e"],["/tags/扩展/index.html","264fb09f089da1b8adb9f353cb3c21ad"],["/tags/插件/index.html","08e67e3dad875269e033b495f323adf9"],["/tags/效率/index.html","7377abbd00cfcbcf76f86b6ee0fda369"],["/tags/浏览器/index.html","97eeae911b1bf2d6f73453bf71a7e750"],["/tags/编辑格式/index.html","c3a1a5e109253adef86a627b5f89309f"],["/tags/脚本/index.html","fe8ecff00b0a9cab70a9f6f0f83cd37f"],["/tags/自建图床/index.html","5ed4f533c7f227a0e386cb9260e1c02c"],["/tags/静态网站/index.html","19648952f271701a2bfd397fd36a5f31"]];
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
