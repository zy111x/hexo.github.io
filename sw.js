/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","10b063f3f1ee1dd9b18364b407652385"],["/about/index.html","2b1061170d12ca72747eef756b266c4a"],["/album/index.html","9cfd30f145925b4d657bc2d39f6685be"],["/anzhiyu/random.js","ce7dc2c301c1044efd3cc90ec239a4d3"],["/archives/2023/06/index.html","b1bd61040fca9d8acedb9fe81c998d6c"],["/archives/2023/07/index.html","95b65af652c1ff6b9d4104357ff5f035"],["/archives/2023/index.html","061b942fed50adf2b6fa1b859ee5e352"],["/archives/2024/07/index.html","e11914777eafe10c6583d4ce34f8dbcf"],["/archives/2024/08/index.html","484b4c3ddacc276d0454a7a51df05919"],["/archives/2024/index.html","ac40a226d9eead1ab82e7683aa2042e5"],["/archives/2024/page/2/index.html","ae4727837cc6669f47aa38fd27807d0b"],["/archives/index.html","7ebb0ac96c9646b6500ef38aee00d75d"],["/archives/page/2/index.html","6231747d366328856e15d2ee55c9c66c"],["/categories/index.html","a8ff4bd8e345bcc8ff27ac462609d644"],["/categories/学习/index.html","61c94d3868d6ebf66d83761e7bf775db"],["/categories/生活/index.html","30af3bff1c3cbb3427aca7192b326203"],["/categories/转载/index.html","f47fe08a42c3299f411fe2d104ac1404"],["/comments/index.html","eca4c23835ad492c1169b30be403261d"],["/cookies/index.html","37a7286d99954487c894be68a7fddb59"],["/copyright/index.html","64e1e2ccfcd9a68085aced313ea99050"],["/css/about-tag.css","cec8a4d09df053602402d1c0ed337c06"],["/css/background.css","bb1f5d757743dc0c7a17eafba8d46d52"],["/css/bilibili.css","7a2b02d35a7b9dbc407829c9c96e6a4b"],["/css/douyin.css","8050710fe24df97930e914d00d93f569"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/home.css","ba627b6136a51d18416833b1e424ad24"],["/css/icat.css","8021d194de478b57a39c51e98649741f"],["/css/icon.css","7f76869eb30eaa0d42982eec6d1b8e62"],["/css/index.css","dc0057db3f80ff84b3b44155ee470c9d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/weibo.css","1b25e722f159e825d0434be3ea22e0c5"],["/css/welcome.css","715c2af7f10bf6151251e4dd0313e0ec"],["/css/zhihu.css","05b5d9d03c466f2716d89ac38d82cd1a"],["/cutAnimals/index.html","fbc926f4b9b0eb0008b460b4ff0eb3a9"],["/dailyPhoto/index.html","2956504f3bbcfe387d1ae2ea96a247d2"],["/essay/index.html","87630afcaa69dc9c848579bedcca5242"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","09ececcc5d241268a724dc8ff9849722"],["/img/algolia.svg","f60fbbe4a8afa312b3f6d12182558861"],["/img/comment_bg.png","73c4561c3dfbc7077c7525339fe5e87a"],["/img/default_cover.jpg","4fde0a97478c6436fcf406bbd1524e78"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","d6b808ce6a48efba98bc2ebddffef10e"],["/img/siteicon/16.png","40437a7e42806e0c0fa6b6c2d77a1fa5"],["/img/siteicon/32.png","6de2984e4c978f3d7b5a7d31fc439641"],["/img/siteicon/apple-icon-180.png","f6da21df9f72c54ce97346d550ce58f4"],["/img/siteicon/apple-splash-1125-2436.jpg","2ef897a6e832989b9ea7fbbd49d361f6"],["/img/siteicon/apple-splash-1136-640.jpg","6ee16bd2421904124759b3001be65047"],["/img/siteicon/apple-splash-1170-2532.jpg","68858d357559c7c2ce575193445ec074"],["/img/siteicon/apple-splash-1179-2556.jpg","1a037efdb7c40aa0e4b2e8cfce4d212f"],["/img/siteicon/apple-splash-1242-2208.jpg","5f78e5eb95eea3fcbf3e92836857db42"],["/img/siteicon/apple-splash-1242-2688.jpg","5556f1f982e46a5cc604540dd7eb221f"],["/img/siteicon/apple-splash-1284-2778.jpg","8ebddd0f8f7fac705e986b883d79e9f1"],["/img/siteicon/apple-splash-1290-2796.jpg","52ae2065253c46c2da735b7c9ab58966"],["/img/siteicon/apple-splash-1334-750.jpg","bd27733eab2f4c4e1504b371e401333a"],["/img/siteicon/apple-splash-1536-2048.jpg","e1dc64e0c2e682d7c27d4c16f624e105"],["/img/siteicon/apple-splash-1620-2160.jpg","1f7b38621ad23e7aadd2889fa3a5fa61"],["/img/siteicon/apple-splash-1668-2224.jpg","7d483bc1e3ca7edd5ea246c1f3b7d11e"],["/img/siteicon/apple-splash-1668-2388.jpg","a842930a7f01a5f2af293916a5fa8c9f"],["/img/siteicon/apple-splash-1792-828.jpg","2857ff942c80bc45f1605042155d3881"],["/img/siteicon/apple-splash-2048-1536.jpg","6254295b0fb48c01d950e5d5c78379df"],["/img/siteicon/apple-splash-2048-2732.jpg","73c508dfb39c7efc262f399397c415a4"],["/img/siteicon/apple-splash-2160-1620.jpg","98d6625402f51c7fbf9c70c115d11e56"],["/img/siteicon/apple-splash-2208-1242.jpg","47771757ba8d4a58a2c923bf61b0e1d3"],["/img/siteicon/apple-splash-2224-1668.jpg","31ed922d31cba682de352ae3db9c25cb"],["/img/siteicon/apple-splash-2388-1668.jpg","fdfe8cbda8beb5ae3d3f4d75138a47b4"],["/img/siteicon/apple-splash-2436-1125.jpg","9f7234706e66b2e01a214cef3bef901b"],["/img/siteicon/apple-splash-2532-1170.jpg","eabd23339d78fe1638b84d6533815c8d"],["/img/siteicon/apple-splash-2556-1179.jpg","01b92828c5810363c195e54ae419d1b6"],["/img/siteicon/apple-splash-2688-1242.jpg","61c7ed30771eb8b57df8828ce8b2ae78"],["/img/siteicon/apple-splash-2732-2048.jpg","e1f7bf69f473719eb380caa1ff9678f9"],["/img/siteicon/apple-splash-2778-1284.jpg","95db3fc08694fd4b3089ab61d4aa5e4a"],["/img/siteicon/apple-splash-2796-1290.jpg","29b6c101f2474a89bdcc7e19a6126651"],["/img/siteicon/apple-splash-640-1136.jpg","6b9e7493c397c364c3e549cb468d50d5"],["/img/siteicon/apple-splash-750-1334.jpg","286454d3b4439e7afc83e5d349ffa6c3"],["/img/siteicon/apple-splash-828-1792.jpg","8261f59c14231fa6b3ef47dc22730a68"],["/img/siteicon/manifest-icon-192.maskable.png","ac2ee6b9eef523ed05d3e567c0f8c65f"],["/img/siteicon/manifest-icon-512.maskable.png","119a96071074812a2aa7718221dbb4ca"],["/index.html","81bd13322b6e472dd192356de39441e8"],["/js/anzhiyu/ai_abstract.js","393af6df4caa9f85a3763c820ffca8c5"],["/js/anzhiyu/comment_barrage.js","2163a41348d9273070e04a03a33af02c"],["/js/anzhiyu/people.js","4dd7da2c79374419fe3cc50fa203a3e9"],["/js/anzhiyu/random_friends_post.js","75b328427214c9ad003f2a04642b10d6"],["/js/anzhiyu/right_click_menu.js","e6a9ea97b47f62eb8c8ed1b025be9617"],["/js/bilibili.js","b2d6d237344181b8509ec2a28006b105"],["/js/douyin.js","595d56aeede9de1ac374d4d2381eeb06"],["/js/imgloaded.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","99cf0d990413c68b75223985a853968f"],["/js/nyan.js","89da1adc4820c2aebb7693b9d0071007"],["/js/search/algolia.js","0360e5165da2cb0c886f5f2ef2979e7d"],["/js/search/local-search.js","c2b0b0c31fd9b0eb224b37a72545eba3"],["/js/snowflake.js","f50234d7ebbfcccdbe7ce06207c473c6"],["/js/timing.js","390ed71f95a50677b4124aece7be95ff"],["/js/tw_cn.js","92b132ebeda0d4f417947c7e24e6b8a4"],["/js/utils.js","f7030bc946d17b8c5587f0103cb14ad0"],["/js/weibo.js","030bf5733610945b5a9bd9a24adc2bc4"],["/js/welcome.js","4a0281c538dc99cb2dc33afa3a37821f"],["/js/zhihu.js","d2d6c6985a5b609ea49fff211e371fbb"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/myPassion/index.html","4707ff089d61a265e1abb34ddfa49588"],["/page/2/index.html","be03c5d06515e75df1181acea42c7367"],["/posts/1/index.html","0b3a8203e47515c504876190a5758175"],["/posts/12237/index.html","fe590b3ccdb6d0162c607fdb8f1aafce"],["/posts/14307/index.html","37d8f034ae8fc831fd774ca2104bc785"],["/posts/14373/index.html","082b2db9ce65e99a11ed2355c62bdbd6"],["/posts/16107/index.html","27083df4b555a67347a618b10ea05083"],["/posts/19367/index.html","d3b15f715f1bc32b127922d13f4394ba"],["/posts/21496/index.html","c85b2f8fe931db737c2711d845cc3417"],["/posts/22648/index.html","bb72eba041118faa0d38a4c35bfd544f"],["/posts/2729/index.html","fe9e90ded74cf9e4e96620233c3a4163"],["/posts/32968/index.html","fd0d800f105c748d843fcfce8ce0a581"],["/posts/35483/index.html","cab1d08ae7111497cd71f3d89f95006a"],["/posts/5548/index.html","08569aabc353117fccf4794e9f89e23c"],["/posts/58960/index.html","1821fae57e46e4a2b0c6084b1728670f"],["/posts/d50a/index.html","4f25355252089cbc120460c089b09ca3"],["/privacy/index.html","1922067653990c1b7290739d0f1ec54e"],["/sw-register.js","e0e47a30a9175b4b6edb8a74eede0f23"],["/tags/API/index.html","01fd35dc7e7c8d7e476cb5bab35894b6"],["/tags/Cloudflare/index.html","82a63fb8f154cc8e07cf4343b946831a"],["/tags/Git/index.html","5e6c00cd984793d9a04da47422422c10"],["/tags/Github/index.html","5b8f52288053180010b1ff1be130de2c"],["/tags/Greasy-Fork/index.html","eda06db77d0102baec582d327458d51d"],["/tags/Hexo/index.html","3aa78a325e2b12c390f01cd586023aea"],["/tags/Markdown/index.html","fb3bc4cf48c6819111312915051db456"],["/tags/Markdown语法/index.html","eb73e75c50b8800612581442f6cca8d2"],["/tags/Microsoft-Edge/index.html","e69898776199c6bf90f9b97f82b4ccdb"],["/tags/Node-js/index.html","542cbaf7acd5c3e1ea9f9b9861793ca1"],["/tags/Pages/index.html","abe36c5d521c0b528e37156af28e1369"],["/tags/Tag-Plugins/index.html","736bee7005ef64e31a18c7ab70f82e44"],["/tags/Tampermonkey/index.html","9861af4e0cb66024800d78b769f740f0"],["/tags/index.html","5a8c0f939c00ff214fa5f66300cbe0bd"],["/tags/telegraph-Image/index.html","79ecf2b60877d46dda21a24c37fda13c"],["/tags/个人网站/index.html","128c481d0b0d3c405ef2d8317d84a752"],["/tags/信息获取/index.html","58fc47e9e7569a6c3cdfaf0e34141e1e"],["/tags/免费托管/index.html","92dcee67144d24457dbab8b8133bb4f6"],["/tags/博客/index.html","f007a6ea1241f41038959adb7f68bbed"],["/tags/博客搭建/index.html","ded2d8ecf27687ce3d1b9c03617ef325"],["/tags/图床/index.html","1b8a8f74fed2c57192cdafdee4e3a71f"],["/tags/图片获取/index.html","b11f49f26bf322654aeb875bc00fa9f9"],["/tags/学习笔记/index.html","a33521b02949a7a3971f1e76a050f66e"],["/tags/工具/index.html","261cf6e469a73f9e6c42018c7ff793e2"],["/tags/感悟/index.html","b3fe5c6f8ed13068ed9f6226e3f979f5"],["/tags/扩展/index.html","dabbb86c67469bbb9546ef14dfd796d6"],["/tags/接口/index.html","cb77a5eb9f5d40bfb21f9617b4f4373d"],["/tags/插件/index.html","9901e8bf6b5223df4dcd44bbb777fbb8"],["/tags/效率/index.html","7393ca5066b7eef3a19fdada035dcf43"],["/tags/浏览器/index.html","c32bbc2168a0de0fa065387cbba2b125"],["/tags/热搜/index.html","dafbf21c8e6ca9077f4044188d8b7dbc"],["/tags/生活/index.html","663c6cd8b4cb942e94c58d05b92eee7a"],["/tags/编辑格式/index.html","7a57e6e781386a9d4d86c04da70929b5"],["/tags/脚本/index.html","3d0b879e4e8ccb74ba2725f93ebfff1f"],["/tags/自建图床/index.html","29b8854115a8174a9e6af7c2acaec6fe"],["/tags/解析/index.html","c261982465879904126df3ce39fcc2ee"],["/tags/选择/index.html","541ca07712baec610f2f5e1f38afcf25"],["/tags/随机图片/index.html","2c10b6d802a377ad3bf1b72550cb8452"],["/tags/随笔/index.html","3df1c3f39df54d13ce14b8ec8b8a6e02"],["/tags/静态网站/index.html","fb66c6b39a343db60d511f382994194e"]];
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
