/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","329a87aa44e6908d8fd009e84600dfc1"],["/about/index.html","bc8fed8b6b781aff037d896a6e5f972e"],["/album/index.html","48a13337bc525dc7351952b967047656"],["/anniversary/index.html","6aaf7c4a470cb8b2691347099a84f489"],["/anzhiyu/random.js","ab767caa87766cd645724fdfcb0bcff8"],["/archives/2023/06/index.html","37d2e2a98f479cd3aa51246470bde0d0"],["/archives/2023/07/index.html","50baddac9fd5d1f2e7b1211e71135af1"],["/archives/2023/index.html","079ecfb0e1b1d0fc0d5b9d3d9302b308"],["/archives/2024/07/index.html","27771fd4b0ddbd537e496c36aeeae145"],["/archives/2024/08/index.html","3e7e110349d1c89a8ee1ccc001c127ab"],["/archives/2024/09/index.html","9b980848daec4d2541e7b75ff1cdddd2"],["/archives/2024/index.html","aa877e21b6674778d2fdcc5843c12583"],["/archives/2024/page/2/index.html","189aebca221a104590084e77ea6384b5"],["/archives/index.html","33e793bcc3f79c94995136bb0c662a34"],["/archives/page/2/index.html","057d2897c4b25ef4485a1c7af33d1386"],["/categories/index.html","b09f3bf6e9bcd4e346afb39597477b9d"],["/categories/历史/index.html","45303563806ac8fa0e68c73502f5277d"],["/categories/学习/index.html","24c87e4e80f74d3ce2e08950cf81a22f"],["/categories/生活/index.html","76464a8e3a403016a42d9b6383e7b11f"],["/comments/index.html","f26cf96810876d215b2bca016738d99a"],["/cookies/index.html","cf6c8b630bd316d3c1b8425b41370dab"],["/copyright/index.html","742159fbeac4c3957de72792ee7189f8"],["/css/about-tag.css","cec8a4d09df053602402d1c0ed337c06"],["/css/anniversary.css","7284f4b125a9a4f255a2d70470b9ab76"],["/css/background.css","bb1f5d757743dc0c7a17eafba8d46d52"],["/css/bilibili.css","7a2b02d35a7b9dbc407829c9c96e6a4b"],["/css/douyin.css","8050710fe24df97930e914d00d93f569"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/home.css","ba627b6136a51d18416833b1e424ad24"],["/css/icat.css","8021d194de478b57a39c51e98649741f"],["/css/icon.css","7f76869eb30eaa0d42982eec6d1b8e62"],["/css/index.css","883460f74ba57fd0c447b9e263b89e4d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/weibo.css","e417a871a2eba21a6c24ec1e6f7f6354"],["/css/welcome.css","715c2af7f10bf6151251e4dd0313e0ec"],["/css/zhihu.css","05b5d9d03c466f2716d89ac38d82cd1a"],["/cutAnimals/index.html","2b0891ed7df4adc43f4afe44b851e815"],["/dailyPhoto/index.html","9b0911d985cf51559098be68575bd337"],["/essay/index.html","800c47e3e9425a3acf531d6ea084fa40"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","09ececcc5d241268a724dc8ff9849722"],["/img/algolia.svg","f60fbbe4a8afa312b3f6d12182558861"],["/img/comment_bg.png","73c4561c3dfbc7077c7525339fe5e87a"],["/img/default_cover.jpg","4fde0a97478c6436fcf406bbd1524e78"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","d6b808ce6a48efba98bc2ebddffef10e"],["/img/siteicon/16.png","40437a7e42806e0c0fa6b6c2d77a1fa5"],["/img/siteicon/32.png","6de2984e4c978f3d7b5a7d31fc439641"],["/img/siteicon/apple-icon-180.png","f6da21df9f72c54ce97346d550ce58f4"],["/img/siteicon/apple-splash-1125-2436.jpg","2ef897a6e832989b9ea7fbbd49d361f6"],["/img/siteicon/apple-splash-1136-640.jpg","6ee16bd2421904124759b3001be65047"],["/img/siteicon/apple-splash-1170-2532.jpg","68858d357559c7c2ce575193445ec074"],["/img/siteicon/apple-splash-1179-2556.jpg","1a037efdb7c40aa0e4b2e8cfce4d212f"],["/img/siteicon/apple-splash-1242-2208.jpg","5f78e5eb95eea3fcbf3e92836857db42"],["/img/siteicon/apple-splash-1242-2688.jpg","5556f1f982e46a5cc604540dd7eb221f"],["/img/siteicon/apple-splash-1284-2778.jpg","8ebddd0f8f7fac705e986b883d79e9f1"],["/img/siteicon/apple-splash-1290-2796.jpg","52ae2065253c46c2da735b7c9ab58966"],["/img/siteicon/apple-splash-1334-750.jpg","bd27733eab2f4c4e1504b371e401333a"],["/img/siteicon/apple-splash-1536-2048.jpg","e1dc64e0c2e682d7c27d4c16f624e105"],["/img/siteicon/apple-splash-1620-2160.jpg","1f7b38621ad23e7aadd2889fa3a5fa61"],["/img/siteicon/apple-splash-1668-2224.jpg","7d483bc1e3ca7edd5ea246c1f3b7d11e"],["/img/siteicon/apple-splash-1668-2388.jpg","a842930a7f01a5f2af293916a5fa8c9f"],["/img/siteicon/apple-splash-1792-828.jpg","2857ff942c80bc45f1605042155d3881"],["/img/siteicon/apple-splash-2048-1536.jpg","6254295b0fb48c01d950e5d5c78379df"],["/img/siteicon/apple-splash-2048-2732.jpg","73c508dfb39c7efc262f399397c415a4"],["/img/siteicon/apple-splash-2160-1620.jpg","98d6625402f51c7fbf9c70c115d11e56"],["/img/siteicon/apple-splash-2208-1242.jpg","47771757ba8d4a58a2c923bf61b0e1d3"],["/img/siteicon/apple-splash-2224-1668.jpg","31ed922d31cba682de352ae3db9c25cb"],["/img/siteicon/apple-splash-2388-1668.jpg","fdfe8cbda8beb5ae3d3f4d75138a47b4"],["/img/siteicon/apple-splash-2436-1125.jpg","9f7234706e66b2e01a214cef3bef901b"],["/img/siteicon/apple-splash-2532-1170.jpg","eabd23339d78fe1638b84d6533815c8d"],["/img/siteicon/apple-splash-2556-1179.jpg","01b92828c5810363c195e54ae419d1b6"],["/img/siteicon/apple-splash-2688-1242.jpg","61c7ed30771eb8b57df8828ce8b2ae78"],["/img/siteicon/apple-splash-2732-2048.jpg","e1f7bf69f473719eb380caa1ff9678f9"],["/img/siteicon/apple-splash-2778-1284.jpg","95db3fc08694fd4b3089ab61d4aa5e4a"],["/img/siteicon/apple-splash-2796-1290.jpg","29b6c101f2474a89bdcc7e19a6126651"],["/img/siteicon/apple-splash-640-1136.jpg","6b9e7493c397c364c3e549cb468d50d5"],["/img/siteicon/apple-splash-750-1334.jpg","286454d3b4439e7afc83e5d349ffa6c3"],["/img/siteicon/apple-splash-828-1792.jpg","8261f59c14231fa6b3ef47dc22730a68"],["/img/siteicon/manifest-icon-192.maskable.png","ac2ee6b9eef523ed05d3e567c0f8c65f"],["/img/siteicon/manifest-icon-512.maskable.png","119a96071074812a2aa7718221dbb4ca"],["/index.html","720b2f08acb6507c612e4a8c390118a3"],["/js/anniversary.js","4c48e3069a07275655245ef917d293d2"],["/js/anzhiyu/ai_abstract.js","393af6df4caa9f85a3763c820ffca8c5"],["/js/anzhiyu/comment_barrage.js","2163a41348d9273070e04a03a33af02c"],["/js/anzhiyu/people.js","4dd7da2c79374419fe3cc50fa203a3e9"],["/js/anzhiyu/random_friends_post.js","75b328427214c9ad003f2a04642b10d6"],["/js/anzhiyu/right_click_menu.js","e6a9ea97b47f62eb8c8ed1b025be9617"],["/js/bilibili.js","b2d6d237344181b8509ec2a28006b105"],["/js/douyin.js","595d56aeede9de1ac374d4d2381eeb06"],["/js/imgloaded.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","99cf0d990413c68b75223985a853968f"],["/js/nyan.js","89da1adc4820c2aebb7693b9d0071007"],["/js/search/algolia.js","0360e5165da2cb0c886f5f2ef2979e7d"],["/js/search/local-search.js","c2b0b0c31fd9b0eb224b37a72545eba3"],["/js/snowflake.js","4e65c3bcfb27b30670f77d9237191b04"],["/js/timing.js","390ed71f95a50677b4124aece7be95ff"],["/js/tw_cn.js","92b132ebeda0d4f417947c7e24e6b8a4"],["/js/utils.js","323ad413732b044894b953e3b26785d7"],["/js/weibo.js","030bf5733610945b5a9bd9a24adc2bc4"],["/js/welcome.js","4a0281c538dc99cb2dc33afa3a37821f"],["/js/zhihu.js","d2d6c6985a5b609ea49fff211e371fbb"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/music/index.html","51f56791c0fd6839ca0f76bce8eb0832"],["/myPassion/index.html","3453e33e1567d08634488f7c65899109"],["/page/2/index.html","f50ec621f634a5a5c2cec46268943341"],["/posts/14307/index.html","e35549488e74f03cc81eeda9313d512a"],["/posts/14373/index.html","561689037740fc41e94c6057d44782a4"],["/posts/14375/index.html","3392fa43ded7fb5ec1118a9e1422ac24"],["/posts/14833/index.html","c615e6c11c7ed7e4d0436f058ecf9bf0"],["/posts/16107/index.html","c33ce081a527b2f3b593b6462f76f418"],["/posts/19367/index.html","89f47c617325f464ca8f86fc3a7509cc"],["/posts/22648/index.html","9ea03e60d9afbfbc6a77f45b0a10f569"],["/posts/2729/index.html","dcc2df726db22fa2f51a4602187c4072"],["/posts/32968/index.html","b6270d09accea785c19e587ef7fec42b"],["/posts/53880/index.html","26b0dd03448f985df2562f3a9c9974c9"],["/posts/5548/index.html","63b2e11b89d46536a5ba60335fe7a946"],["/posts/58960/index.html","a8d67cc9e9f5b62e133138dbc2920073"],["/posts/63922/index.html","74288a3f87d709c41beefaa7c1c2e463"],["/posts/9/index.html","b37f600d54a2f4ed78ec3e84bc5c01b7"],["/posts/d50a/index.html","71ea9149f20a517e0692331158d3119e"],["/privacy/index.html","efc87b766ed9663e7834594e71a9c266"],["/sw-register.js","51b95fc78b25bbf18eb47d12e31e3ed5"],["/tags/AI/index.html","b822361c3ff862b62a53d99a98776e50"],["/tags/API/index.html","f9f13a8304d2cf24cbd27ad709cd8957"],["/tags/ChatGPT/index.html","e3aa2e1128b55b5277912f2ccbab37d2"],["/tags/Cloudflare/index.html","e6d253bb432cd72419d0607859f05ce8"],["/tags/Git/index.html","195e7182026ef8c8e01899e71004bf1e"],["/tags/Github/index.html","a36718507ba48bbe51f4aa0a9bca9640"],["/tags/Hexo/index.html","c238304f51901384f9f8498cacfe3f75"],["/tags/Markdown/index.html","c8871fb2e2182e3c2f6198857b643972"],["/tags/Pages/index.html","7f6465587b0395c594820b17eb9bf470"],["/tags/Tag-Plugins/index.html","0456b74ccd509a32c976527a52ec44b8"],["/tags/Tampermonkey/index.html","ecae2890d8c1eb97875347a9ec46e6b8"],["/tags/index.html","929ddc690d064b373f8a9a5641629284"],["/tags/不背“锅”系列/index.html","aea67ed911fb6f24b09b7c2da6275e0d"],["/tags/个人网站/index.html","921e9578ddc29b11c6b09a605bde5a4b"],["/tags/博客/index.html","954e3539f3febc6e77e67912ef35216f"],["/tags/图床/index.html","9dba69009ded89351e31de1de7425841"],["/tags/学习笔记/index.html","fd7f62dff8f6c63b4653a5779c093b18"],["/tags/工具/index.html","6a7012e2cd27ef6a4dffcdb234cd3119"],["/tags/感悟/index.html","2a2583f06d8dfccddbe6b55974a15e28"],["/tags/接口/index.html","474a540f7489457998d1a8012e84bb37"],["/tags/插件/index.html","ab1c34c3d05eacfc5635b2334eaad73b"],["/tags/生活/index.html","9a52a2e7212c6339ca9467735f08fe82"],["/tags/脚本/index.html","234f7a4e5214c081335c883b1680e9dc"],["/tags/随笔/index.html","e66274f9bf9989e30474898e4eb41e0a"],["/tags/静态网站/index.html","ecb7762bdf19c66ca37f60f2215bbe8b"]];
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
