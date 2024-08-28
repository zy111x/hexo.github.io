/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","e5be6d66c01a56003bcf8986f4abfea8"],["/about/index.html","e3f6da03112d40f1e580ba2a98c822c1"],["/album/index.html","c8be6a306fe899b5a539e35aeaaff1ef"],["/anzhiyu/random.js","ce7dc2c301c1044efd3cc90ec239a4d3"],["/archives/2023/06/index.html","deee89cd103e415d36ae90f1e19bafec"],["/archives/2023/07/index.html","cafd1861c6284940b3f63170641eb0c1"],["/archives/2023/index.html","a10b1f4d03114994478d62e816b47ace"],["/archives/2024/07/index.html","9539add8ef7d0833e27da0c4723f9213"],["/archives/2024/08/index.html","0da54cb39734dcc30f0f67f63a775572"],["/archives/2024/index.html","b23d5e4fed209f2d1141de851d4c0194"],["/archives/2024/page/2/index.html","1eb08f052b1c50f0eed8ec7293063f5d"],["/archives/index.html","5bbffe643d2b4737a447889139cf2d1f"],["/archives/page/2/index.html","39e0c04c9f7a6bb30b3518fc3dccaeb6"],["/categories/index.html","7abe88f6493ea25e4870a8a309823059"],["/categories/学习/index.html","7e7cc4480838737e55595fad5cf7ee7e"],["/categories/生活/index.html","aa6275e36a4bdc76498732cd569e5029"],["/categories/转载/index.html","cbdb0f8ba7076cab44ff820715ed96ba"],["/comments/index.html","0adb5c1a3174226f56aa924f6b1ad65a"],["/cookies/index.html","5c4d0ba0032c6c602b999bab8d483a57"],["/copyright/index.html","0e1c51b549c2769ddcef5004290ae2b1"],["/css/about-tag.css","cec8a4d09df053602402d1c0ed337c06"],["/css/background.css","bb1f5d757743dc0c7a17eafba8d46d52"],["/css/bilibili.css","7a2b02d35a7b9dbc407829c9c96e6a4b"],["/css/douyin.css","8050710fe24df97930e914d00d93f569"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/home.css","ba627b6136a51d18416833b1e424ad24"],["/css/icat.css","8021d194de478b57a39c51e98649741f"],["/css/icon.css","7f76869eb30eaa0d42982eec6d1b8e62"],["/css/index.css","dc0057db3f80ff84b3b44155ee470c9d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/weibo.css","1b25e722f159e825d0434be3ea22e0c5"],["/css/welcome.css","715c2af7f10bf6151251e4dd0313e0ec"],["/css/zhihu.css","05b5d9d03c466f2716d89ac38d82cd1a"],["/cutAnimals/index.html","520d300c2f3f5499664c5b4947585da7"],["/dailyPhoto/index.html","9be150e1819516a2bcc42d5f18e5cec7"],["/essay/index.html","61fc1c4310d76f25193cf3bedf58282b"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","09ececcc5d241268a724dc8ff9849722"],["/img/algolia.svg","f60fbbe4a8afa312b3f6d12182558861"],["/img/comment_bg.png","73c4561c3dfbc7077c7525339fe5e87a"],["/img/default_cover.jpg","4fde0a97478c6436fcf406bbd1524e78"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","d6b808ce6a48efba98bc2ebddffef10e"],["/img/siteicon/16.png","40437a7e42806e0c0fa6b6c2d77a1fa5"],["/img/siteicon/32.png","6de2984e4c978f3d7b5a7d31fc439641"],["/img/siteicon/apple-icon-180.png","f6da21df9f72c54ce97346d550ce58f4"],["/img/siteicon/apple-splash-1125-2436.jpg","2ef897a6e832989b9ea7fbbd49d361f6"],["/img/siteicon/apple-splash-1136-640.jpg","6ee16bd2421904124759b3001be65047"],["/img/siteicon/apple-splash-1170-2532.jpg","68858d357559c7c2ce575193445ec074"],["/img/siteicon/apple-splash-1179-2556.jpg","1a037efdb7c40aa0e4b2e8cfce4d212f"],["/img/siteicon/apple-splash-1242-2208.jpg","5f78e5eb95eea3fcbf3e92836857db42"],["/img/siteicon/apple-splash-1242-2688.jpg","5556f1f982e46a5cc604540dd7eb221f"],["/img/siteicon/apple-splash-1284-2778.jpg","8ebddd0f8f7fac705e986b883d79e9f1"],["/img/siteicon/apple-splash-1290-2796.jpg","52ae2065253c46c2da735b7c9ab58966"],["/img/siteicon/apple-splash-1334-750.jpg","bd27733eab2f4c4e1504b371e401333a"],["/img/siteicon/apple-splash-1536-2048.jpg","e1dc64e0c2e682d7c27d4c16f624e105"],["/img/siteicon/apple-splash-1620-2160.jpg","1f7b38621ad23e7aadd2889fa3a5fa61"],["/img/siteicon/apple-splash-1668-2224.jpg","7d483bc1e3ca7edd5ea246c1f3b7d11e"],["/img/siteicon/apple-splash-1668-2388.jpg","a842930a7f01a5f2af293916a5fa8c9f"],["/img/siteicon/apple-splash-1792-828.jpg","2857ff942c80bc45f1605042155d3881"],["/img/siteicon/apple-splash-2048-1536.jpg","6254295b0fb48c01d950e5d5c78379df"],["/img/siteicon/apple-splash-2048-2732.jpg","73c508dfb39c7efc262f399397c415a4"],["/img/siteicon/apple-splash-2160-1620.jpg","98d6625402f51c7fbf9c70c115d11e56"],["/img/siteicon/apple-splash-2208-1242.jpg","47771757ba8d4a58a2c923bf61b0e1d3"],["/img/siteicon/apple-splash-2224-1668.jpg","31ed922d31cba682de352ae3db9c25cb"],["/img/siteicon/apple-splash-2388-1668.jpg","fdfe8cbda8beb5ae3d3f4d75138a47b4"],["/img/siteicon/apple-splash-2436-1125.jpg","9f7234706e66b2e01a214cef3bef901b"],["/img/siteicon/apple-splash-2532-1170.jpg","eabd23339d78fe1638b84d6533815c8d"],["/img/siteicon/apple-splash-2556-1179.jpg","01b92828c5810363c195e54ae419d1b6"],["/img/siteicon/apple-splash-2688-1242.jpg","61c7ed30771eb8b57df8828ce8b2ae78"],["/img/siteicon/apple-splash-2732-2048.jpg","e1f7bf69f473719eb380caa1ff9678f9"],["/img/siteicon/apple-splash-2778-1284.jpg","95db3fc08694fd4b3089ab61d4aa5e4a"],["/img/siteicon/apple-splash-2796-1290.jpg","29b6c101f2474a89bdcc7e19a6126651"],["/img/siteicon/apple-splash-640-1136.jpg","6b9e7493c397c364c3e549cb468d50d5"],["/img/siteicon/apple-splash-750-1334.jpg","286454d3b4439e7afc83e5d349ffa6c3"],["/img/siteicon/apple-splash-828-1792.jpg","8261f59c14231fa6b3ef47dc22730a68"],["/img/siteicon/manifest-icon-192.maskable.png","ac2ee6b9eef523ed05d3e567c0f8c65f"],["/img/siteicon/manifest-icon-512.maskable.png","119a96071074812a2aa7718221dbb4ca"],["/index.html","9eac7457b51c46408edc64bae852453b"],["/js/anzhiyu/ai_abstract.js","393af6df4caa9f85a3763c820ffca8c5"],["/js/anzhiyu/comment_barrage.js","2163a41348d9273070e04a03a33af02c"],["/js/anzhiyu/people.js","4dd7da2c79374419fe3cc50fa203a3e9"],["/js/anzhiyu/random_friends_post.js","75b328427214c9ad003f2a04642b10d6"],["/js/anzhiyu/right_click_menu.js","e6a9ea97b47f62eb8c8ed1b025be9617"],["/js/bilibili.js","b2d6d237344181b8509ec2a28006b105"],["/js/douyin.js","595d56aeede9de1ac374d4d2381eeb06"],["/js/imgloaded.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","99cf0d990413c68b75223985a853968f"],["/js/nyan.js","89da1adc4820c2aebb7693b9d0071007"],["/js/search/algolia.js","0360e5165da2cb0c886f5f2ef2979e7d"],["/js/search/local-search.js","c2b0b0c31fd9b0eb224b37a72545eba3"],["/js/snowflake.js","f50234d7ebbfcccdbe7ce06207c473c6"],["/js/timing.js","390ed71f95a50677b4124aece7be95ff"],["/js/tw_cn.js","92b132ebeda0d4f417947c7e24e6b8a4"],["/js/utils.js","f7030bc946d17b8c5587f0103cb14ad0"],["/js/weibo.js","030bf5733610945b5a9bd9a24adc2bc4"],["/js/welcome.js","4a0281c538dc99cb2dc33afa3a37821f"],["/js/zhihu.js","d2d6c6985a5b609ea49fff211e371fbb"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/myPassion/index.html","af68c5ac5f678b4dcc22fe290e7543ed"],["/page/2/index.html","b5eab361ed5d20aa0848b6dca3be3ef7"],["/posts/1/index.html","0ee8c8cd3229a2f3670b057dfcf754e7"],["/posts/12237/index.html","ae7b4c1d48fa1e62833c12af5b7d87eb"],["/posts/14307/index.html","d08ba3b4258bd2d55988cee2fed55192"],["/posts/14373/index.html","cb0b53b787b60bc9655b73c3c64540a7"],["/posts/16107/index.html","231a4503bd2f3c0e01ebb3ac08d69bfe"],["/posts/19367/index.html","f86dc7e396b7bf021b8ecb2b80013148"],["/posts/21496/index.html","c9b33e745d855120bd043673f134f53f"],["/posts/22648/index.html","c00c1588543b53d7ace1841d879f2359"],["/posts/2729/index.html","a5191deeb252121e729abae21d5348f1"],["/posts/32968/index.html","9816a110655a048708eda64bb5b7a38a"],["/posts/35483/index.html","167e75d51ef13820a611a9f401b45f8d"],["/posts/5548/index.html","175118d8e07690e8f6d29d58ddd5e51c"],["/posts/58960/index.html","1aaf694d969d9cabd0c64c4a433bf5eb"],["/posts/d50a/index.html","3a1a39d0cef851636b7e9e9a18cc21de"],["/privacy/index.html","770509496260d49564cc81e6751f615e"],["/sw-register.js","23edeae67dbd70a8f35cd9ae1101e147"],["/tags/API/index.html","cda68d8d35b8fc5174434f8a1197be99"],["/tags/Cloudflare/index.html","d8c1882df72e5a6c309c355c4217d181"],["/tags/Git/index.html","45ddd1da0c7a3d99ce96cc9b71766fb2"],["/tags/Github/index.html","57a34f7807c9c472b818f73797120071"],["/tags/Greasy-Fork/index.html","34b1f28e2c26a2c3c040f5b8640e9354"],["/tags/Hexo/index.html","962ab4cf3e95a2cb4b3343e21601e6e9"],["/tags/Markdown/index.html","9074a97164d31781ae474a881aba41b5"],["/tags/Markdown语法/index.html","ca80c05aeb2ae7e8a5412f3ebe14ad65"],["/tags/Microsoft-Edge/index.html","f53f8209e0da9630ad41f2e32188cee4"],["/tags/Node-js/index.html","fce3b31f8c025327532eb4541e0b54f0"],["/tags/Pages/index.html","a919aa232b016e46fbee5cf89d4787a3"],["/tags/Tag-Plugins/index.html","6c67baddd239a0abf6f3475ce1d0329f"],["/tags/Tampermonkey/index.html","3199604ee695babcb0929a6b71eca74d"],["/tags/index.html","7137da826f52ec2b7576649dc61dc30a"],["/tags/telegraph-Image/index.html","94cd0a695a49837740bb5a759110f1aa"],["/tags/个人网站/index.html","19203cfe26a1cdc046315964fa889e50"],["/tags/信息获取/index.html","86da4942d23b4bb6695c2654ab0ee2be"],["/tags/免费托管/index.html","bb0b3651aaa59271963ebc66209b0707"],["/tags/博客/index.html","450443c184a9160edb14627e6d5a4443"],["/tags/博客搭建/index.html","94e8350c3418d3fabfbf7b0c9bc6989d"],["/tags/图床/index.html","e5795c60c3393514a8cbe65e49b4d555"],["/tags/图片获取/index.html","3119078b62592b8c0f86bab65a3f3568"],["/tags/学习笔记/index.html","555a4bc9ad8e0257640bc5dad214a635"],["/tags/工具/index.html","af378a75c9a97d5104240b584236bf8c"],["/tags/感悟/index.html","2c43d3e566be96b48f7c3a081f3fa1c5"],["/tags/扩展/index.html","8f3ab506ade46d2b71b6338d1c0f5fa8"],["/tags/接口/index.html","1050461fbafdf3cb16e352471a7e4409"],["/tags/插件/index.html","19f12f26c34be0d95bbdefe1989c5d22"],["/tags/效率/index.html","1898e026e570dd456fd4eb50b1b15963"],["/tags/浏览器/index.html","3ee3af41dc3428eeafa5b866a7b0b1f2"],["/tags/热搜/index.html","39f29131ede4074ea6b13f0dae047ab5"],["/tags/生活/index.html","badf4d3ab4fa6a63c0447cd57cd12c81"],["/tags/编辑格式/index.html","2d667c306e72f7ee82d993e4b72fc48e"],["/tags/脚本/index.html","ff7053f1e70b3dcab29d9f40d83303b1"],["/tags/自建图床/index.html","8c3e2eb017a0b5488532e798f76d51fa"],["/tags/解析/index.html","fc17585f335764231afbc3e49f971828"],["/tags/选择/index.html","5d6a09f8aead588311d4e9f5f6dd9744"],["/tags/随机图片/index.html","330f800d7e7c14bb000f14c7e9f33476"],["/tags/随笔/index.html","536a6233669dc9181346d61b1234775f"],["/tags/静态网站/index.html","e4a8fb35156164e08dcb16bf277f734e"]];
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
