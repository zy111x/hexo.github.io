/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","bcd58d3356f03d6ed7081cc70a1df695"],["/about/index.html","e3f6da03112d40f1e580ba2a98c822c1"],["/album/index.html","c8be6a306fe899b5a539e35aeaaff1ef"],["/anzhiyu/random.js","ce7dc2c301c1044efd3cc90ec239a4d3"],["/archives/2023/06/index.html","4404e809618a38efec630c1427cc8e02"],["/archives/2023/07/index.html","3d79b529ae80d0a6aa7bab59f0d5a3be"],["/archives/2023/index.html","d8d9a0244fdcaa86e89250c56dc1024c"],["/archives/2024/07/index.html","448393912e7af3df56d4db8061c5ce2a"],["/archives/2024/08/index.html","46bcf178740d99c589dfbeda285ebd09"],["/archives/2024/index.html","e40424d57d21e65929476300550cfc78"],["/archives/2024/page/2/index.html","b01e53b0bb7ea92bff5c8329c09b5f95"],["/archives/index.html","10593db519e8c378ba69fb04d19d3d46"],["/archives/page/2/index.html","8acccf1b99c06fdd79ebf72526296d7f"],["/categories/index.html","7abe88f6493ea25e4870a8a309823059"],["/categories/学习/index.html","e90582d60fb7d139f0f2801ad6708b9c"],["/categories/生活/index.html","4d6820e0cf380db9402796a38462bde8"],["/categories/转载/index.html","97c66addcd62424ac3ce4fda051b2389"],["/comments/index.html","b798006cb34364b570bf72b4835d87ef"],["/cookies/index.html","5c4d0ba0032c6c602b999bab8d483a57"],["/copyright/index.html","0e1c51b549c2769ddcef5004290ae2b1"],["/css/about-tag.css","cec8a4d09df053602402d1c0ed337c06"],["/css/background.css","bb1f5d757743dc0c7a17eafba8d46d52"],["/css/bilibili.css","7a2b02d35a7b9dbc407829c9c96e6a4b"],["/css/douyin.css","8050710fe24df97930e914d00d93f569"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/home.css","ba627b6136a51d18416833b1e424ad24"],["/css/icat.css","8021d194de478b57a39c51e98649741f"],["/css/icon.css","7f76869eb30eaa0d42982eec6d1b8e62"],["/css/index.css","dc0057db3f80ff84b3b44155ee470c9d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/weibo.css","1b25e722f159e825d0434be3ea22e0c5"],["/css/welcome.css","715c2af7f10bf6151251e4dd0313e0ec"],["/css/zhihu.css","05b5d9d03c466f2716d89ac38d82cd1a"],["/cutAnimals/index.html","520d300c2f3f5499664c5b4947585da7"],["/dailyPhoto/index.html","9be150e1819516a2bcc42d5f18e5cec7"],["/essay/index.html","61fc1c4310d76f25193cf3bedf58282b"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","09ececcc5d241268a724dc8ff9849722"],["/img/algolia.svg","f60fbbe4a8afa312b3f6d12182558861"],["/img/comment_bg.png","73c4561c3dfbc7077c7525339fe5e87a"],["/img/default_cover.jpg","4fde0a97478c6436fcf406bbd1524e78"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","d6b808ce6a48efba98bc2ebddffef10e"],["/img/siteicon/16.png","40437a7e42806e0c0fa6b6c2d77a1fa5"],["/img/siteicon/32.png","6de2984e4c978f3d7b5a7d31fc439641"],["/img/siteicon/apple-icon-180.png","f6da21df9f72c54ce97346d550ce58f4"],["/img/siteicon/apple-splash-1125-2436.jpg","2ef897a6e832989b9ea7fbbd49d361f6"],["/img/siteicon/apple-splash-1136-640.jpg","6ee16bd2421904124759b3001be65047"],["/img/siteicon/apple-splash-1170-2532.jpg","68858d357559c7c2ce575193445ec074"],["/img/siteicon/apple-splash-1179-2556.jpg","1a037efdb7c40aa0e4b2e8cfce4d212f"],["/img/siteicon/apple-splash-1242-2208.jpg","5f78e5eb95eea3fcbf3e92836857db42"],["/img/siteicon/apple-splash-1242-2688.jpg","5556f1f982e46a5cc604540dd7eb221f"],["/img/siteicon/apple-splash-1284-2778.jpg","8ebddd0f8f7fac705e986b883d79e9f1"],["/img/siteicon/apple-splash-1290-2796.jpg","52ae2065253c46c2da735b7c9ab58966"],["/img/siteicon/apple-splash-1334-750.jpg","bd27733eab2f4c4e1504b371e401333a"],["/img/siteicon/apple-splash-1536-2048.jpg","e1dc64e0c2e682d7c27d4c16f624e105"],["/img/siteicon/apple-splash-1620-2160.jpg","1f7b38621ad23e7aadd2889fa3a5fa61"],["/img/siteicon/apple-splash-1668-2224.jpg","7d483bc1e3ca7edd5ea246c1f3b7d11e"],["/img/siteicon/apple-splash-1668-2388.jpg","a842930a7f01a5f2af293916a5fa8c9f"],["/img/siteicon/apple-splash-1792-828.jpg","2857ff942c80bc45f1605042155d3881"],["/img/siteicon/apple-splash-2048-1536.jpg","6254295b0fb48c01d950e5d5c78379df"],["/img/siteicon/apple-splash-2048-2732.jpg","73c508dfb39c7efc262f399397c415a4"],["/img/siteicon/apple-splash-2160-1620.jpg","98d6625402f51c7fbf9c70c115d11e56"],["/img/siteicon/apple-splash-2208-1242.jpg","47771757ba8d4a58a2c923bf61b0e1d3"],["/img/siteicon/apple-splash-2224-1668.jpg","31ed922d31cba682de352ae3db9c25cb"],["/img/siteicon/apple-splash-2388-1668.jpg","fdfe8cbda8beb5ae3d3f4d75138a47b4"],["/img/siteicon/apple-splash-2436-1125.jpg","9f7234706e66b2e01a214cef3bef901b"],["/img/siteicon/apple-splash-2532-1170.jpg","eabd23339d78fe1638b84d6533815c8d"],["/img/siteicon/apple-splash-2556-1179.jpg","01b92828c5810363c195e54ae419d1b6"],["/img/siteicon/apple-splash-2688-1242.jpg","61c7ed30771eb8b57df8828ce8b2ae78"],["/img/siteicon/apple-splash-2732-2048.jpg","e1f7bf69f473719eb380caa1ff9678f9"],["/img/siteicon/apple-splash-2778-1284.jpg","95db3fc08694fd4b3089ab61d4aa5e4a"],["/img/siteicon/apple-splash-2796-1290.jpg","29b6c101f2474a89bdcc7e19a6126651"],["/img/siteicon/apple-splash-640-1136.jpg","6b9e7493c397c364c3e549cb468d50d5"],["/img/siteicon/apple-splash-750-1334.jpg","286454d3b4439e7afc83e5d349ffa6c3"],["/img/siteicon/apple-splash-828-1792.jpg","8261f59c14231fa6b3ef47dc22730a68"],["/img/siteicon/manifest-icon-192.maskable.png","ac2ee6b9eef523ed05d3e567c0f8c65f"],["/img/siteicon/manifest-icon-512.maskable.png","119a96071074812a2aa7718221dbb4ca"],["/index.html","a5b6f4a9958b5552f306080f9f34ad7e"],["/js/anzhiyu/ai_abstract.js","393af6df4caa9f85a3763c820ffca8c5"],["/js/anzhiyu/comment_barrage.js","2163a41348d9273070e04a03a33af02c"],["/js/anzhiyu/people.js","4dd7da2c79374419fe3cc50fa203a3e9"],["/js/anzhiyu/random_friends_post.js","75b328427214c9ad003f2a04642b10d6"],["/js/anzhiyu/right_click_menu.js","e6a9ea97b47f62eb8c8ed1b025be9617"],["/js/bilibili.js","b2d6d237344181b8509ec2a28006b105"],["/js/douyin.js","595d56aeede9de1ac374d4d2381eeb06"],["/js/imgloaded.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","99cf0d990413c68b75223985a853968f"],["/js/nyan.js","89da1adc4820c2aebb7693b9d0071007"],["/js/search/algolia.js","0360e5165da2cb0c886f5f2ef2979e7d"],["/js/search/local-search.js","c2b0b0c31fd9b0eb224b37a72545eba3"],["/js/snowflake.js","f50234d7ebbfcccdbe7ce06207c473c6"],["/js/timing.js","390ed71f95a50677b4124aece7be95ff"],["/js/tw_cn.js","92b132ebeda0d4f417947c7e24e6b8a4"],["/js/utils.js","f7030bc946d17b8c5587f0103cb14ad0"],["/js/weibo.js","030bf5733610945b5a9bd9a24adc2bc4"],["/js/welcome.js","4a0281c538dc99cb2dc33afa3a37821f"],["/js/zhihu.js","d2d6c6985a5b609ea49fff211e371fbb"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/myPassion/index.html","af68c5ac5f678b4dcc22fe290e7543ed"],["/page/2/index.html","4aff17f0cf99ff10cb072a2a2a20773c"],["/posts/1/index.html","2e5294adaebaebedf3e10da6c5a5f9b3"],["/posts/12237/index.html","031a63f40fe916451c758a3815fb5621"],["/posts/14307/index.html","983dd211ffd6f39ed67628139a3479b4"],["/posts/14373/index.html","cb0b53b787b60bc9655b73c3c64540a7"],["/posts/16107/index.html","231a4503bd2f3c0e01ebb3ac08d69bfe"],["/posts/19367/index.html","7aff0d6a5c83421082b0c99a18d0ec36"],["/posts/21496/index.html","66a2b0ee15a65a0e80aa0be44c951040"],["/posts/22648/index.html","c00c1588543b53d7ace1841d879f2359"],["/posts/2729/index.html","a5191deeb252121e729abae21d5348f1"],["/posts/32968/index.html","9816a110655a048708eda64bb5b7a38a"],["/posts/35483/index.html","a5d147b7c9aa36bf2d09cedd3496fdf9"],["/posts/5548/index.html","175118d8e07690e8f6d29d58ddd5e51c"],["/posts/58960/index.html","1aaf694d969d9cabd0c64c4a433bf5eb"],["/posts/d50a/index.html","3a1a39d0cef851636b7e9e9a18cc21de"],["/privacy/index.html","770509496260d49564cc81e6751f615e"],["/sw-register.js","a62d3fd3719c70094292bf9040ebc371"],["/tags/API/index.html","4880428634ff5aecd428a2baf55d56be"],["/tags/Cloudflare/index.html","25390b71a0036b42d6d0c8a77022cba9"],["/tags/Git/index.html","8f1117fe6d4d4f3f16ea9e66be847059"],["/tags/Github/index.html","65c4935446684466aa00a3fe7fcc8059"],["/tags/Greasy-Fork/index.html","f51eef9a794c48646cde017ce24c084e"],["/tags/Hexo/index.html","0c07793ee5f1385e1935914b53d659f0"],["/tags/Markdown/index.html","b621d9d896137a0132723a8c47517b54"],["/tags/Markdown语法/index.html","f19ad539f5bb0c890bcea835510732b7"],["/tags/Microsoft-Edge/index.html","0181925621c626b8d34ba72fcdb40696"],["/tags/Node-js/index.html","3b56aa8a067f0a8f531748358565baff"],["/tags/Pages/index.html","7a54ebbc73ad98722d0d54d40d548153"],["/tags/Tag-Plugins/index.html","593a1f677b4dfce9e7d3215c3d8a1d50"],["/tags/Tampermonkey/index.html","a147512d5a0dd2508be13fc9e07a1fb5"],["/tags/index.html","b28829fefcb2dffb6f741c191916a188"],["/tags/telegraph-Image/index.html","f12a4264d69b6e1bbcdfd5a1ec173444"],["/tags/个人网站/index.html","b18f05189a5e3fbf1cae7efab58ddccf"],["/tags/信息获取/index.html","1774c20de8d6ff424452e22adfcff0f9"],["/tags/免费托管/index.html","3cc900df4f7f844233b39b7dbf5b2915"],["/tags/博客/index.html","4b70b7de808088b1d6c5f171990f841e"],["/tags/博客搭建/index.html","c86a331ccb91acce0ee9724fa235b491"],["/tags/图床/index.html","c55573e5ec220347642d3d5f27d63898"],["/tags/图片获取/index.html","e0fe449e9481eff5a69987e6af33d7b6"],["/tags/学习笔记/index.html","13425a09108a26c243e960f46a6b8bb6"],["/tags/工具/index.html","7cc01cd44a37b363a100601542973659"],["/tags/感悟/index.html","484bc2ba978107b20786fff6c003a536"],["/tags/扩展/index.html","275cbb337b8f2ffedda8d77be0a7aac2"],["/tags/接口/index.html","e2bb3180cec822b62071dbcbe5f8d5a7"],["/tags/插件/index.html","e78168da5581318e4ce69729c469dafc"],["/tags/效率/index.html","1decc5ccc1b916bf28e4ec4037987828"],["/tags/浏览器/index.html","e38019295de599f764bf70f6041ae08b"],["/tags/热搜/index.html","97ded62d0535d9a4147ee451af1a1932"],["/tags/生活/index.html","a9d0ead7b019fe69ca76d813badfa4ed"],["/tags/编辑格式/index.html","f0312d4b9efc7f7ba49fa3b457ddecad"],["/tags/脚本/index.html","ce94bf83b5f70c75c2b7ba5fd4986240"],["/tags/自建图床/index.html","e09c53af97cd0ebc54f3be5c5deab169"],["/tags/解析/index.html","8586622600793707b973868f3ac4c71a"],["/tags/选择/index.html","f284538273b32b4dc8bef70ffd312ebd"],["/tags/随机图片/index.html","0641eb80ddd3949787a3c88d84ffb28f"],["/tags/随笔/index.html","4c7cdd8564b8387e83b9c64733f9c1b2"],["/tags/静态网站/index.html","cbdc3c42a70d8ad0fb85db904b60ca2f"]];
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
