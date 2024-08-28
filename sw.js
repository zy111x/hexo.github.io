/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f3ed58459fc1c9a838770d4c3656a190"],["/about/index.html","14affec44716025f4320ca7b3c903a96"],["/album/index.html","db1f448c46715077f19fbe420764f30a"],["/anzhiyu/random.js","ce7dc2c301c1044efd3cc90ec239a4d3"],["/archives/2023/06/index.html","bc4b183f2047a5a15b6b982591cecd47"],["/archives/2023/07/index.html","0d520217e4028716294d7548ae88eda8"],["/archives/2023/index.html","e6e538a285b1d14de55bfa9c2b026ddc"],["/archives/2024/07/index.html","b49d19f9c07010475372bc151578b2af"],["/archives/2024/08/index.html","595e1fc775a74aea712d7f6d06dd7700"],["/archives/2024/index.html","441eff6456fe918e7a54330675b546a9"],["/archives/2024/page/2/index.html","e5c4f852eb337e79730bf86f46aa319f"],["/archives/index.html","f15f6d2c2bb387fe42cba0f0d75159c9"],["/archives/page/2/index.html","846c85feb81a02b7d1345f10293621a1"],["/categories/index.html","7955d0aae652fb10b95ef4794f381bb7"],["/categories/学习/index.html","df84aa427dfb0cda5d47ab1cef964af1"],["/categories/生活/index.html","6a1e4e957b8b2480eb95c38bcfc47298"],["/categories/转载/index.html","27c9cc31cade814051ef21e65feff31c"],["/comments/index.html","0ec4794d34df39c0015672486551c1b5"],["/cookies/index.html","22badac2f20780cdbf7869b94d14314b"],["/copyright/index.html","2f2d61187306c09c666e790ee7568e3b"],["/css/about-tag.css","cec8a4d09df053602402d1c0ed337c06"],["/css/background.css","bb1f5d757743dc0c7a17eafba8d46d52"],["/css/bilibili.css","7a2b02d35a7b9dbc407829c9c96e6a4b"],["/css/douyin.css","8050710fe24df97930e914d00d93f569"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/home.css","ba627b6136a51d18416833b1e424ad24"],["/css/icat.css","8021d194de478b57a39c51e98649741f"],["/css/icon.css","7f76869eb30eaa0d42982eec6d1b8e62"],["/css/index.css","dc0057db3f80ff84b3b44155ee470c9d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/weibo.css","1b25e722f159e825d0434be3ea22e0c5"],["/css/welcome.css","715c2af7f10bf6151251e4dd0313e0ec"],["/css/zhihu.css","05b5d9d03c466f2716d89ac38d82cd1a"],["/cutAnimals/index.html","2ebf5ab196c21dc8cd1bec25ac99e68d"],["/dailyPhoto/index.html","897b98de301007b8cd2d4c1ebb5611cd"],["/essay/index.html","caf8d6edeaeb5ff5fa540dc27e074988"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","09ececcc5d241268a724dc8ff9849722"],["/img/algolia.svg","f60fbbe4a8afa312b3f6d12182558861"],["/img/comment_bg.png","73c4561c3dfbc7077c7525339fe5e87a"],["/img/default_cover.jpg","4fde0a97478c6436fcf406bbd1524e78"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","d6b808ce6a48efba98bc2ebddffef10e"],["/img/siteicon/16.png","40437a7e42806e0c0fa6b6c2d77a1fa5"],["/img/siteicon/32.png","6de2984e4c978f3d7b5a7d31fc439641"],["/img/siteicon/apple-icon-180.png","f6da21df9f72c54ce97346d550ce58f4"],["/img/siteicon/apple-splash-1125-2436.jpg","2ef897a6e832989b9ea7fbbd49d361f6"],["/img/siteicon/apple-splash-1136-640.jpg","6ee16bd2421904124759b3001be65047"],["/img/siteicon/apple-splash-1170-2532.jpg","68858d357559c7c2ce575193445ec074"],["/img/siteicon/apple-splash-1179-2556.jpg","1a037efdb7c40aa0e4b2e8cfce4d212f"],["/img/siteicon/apple-splash-1242-2208.jpg","5f78e5eb95eea3fcbf3e92836857db42"],["/img/siteicon/apple-splash-1242-2688.jpg","5556f1f982e46a5cc604540dd7eb221f"],["/img/siteicon/apple-splash-1284-2778.jpg","8ebddd0f8f7fac705e986b883d79e9f1"],["/img/siteicon/apple-splash-1290-2796.jpg","52ae2065253c46c2da735b7c9ab58966"],["/img/siteicon/apple-splash-1334-750.jpg","bd27733eab2f4c4e1504b371e401333a"],["/img/siteicon/apple-splash-1536-2048.jpg","e1dc64e0c2e682d7c27d4c16f624e105"],["/img/siteicon/apple-splash-1620-2160.jpg","1f7b38621ad23e7aadd2889fa3a5fa61"],["/img/siteicon/apple-splash-1668-2224.jpg","7d483bc1e3ca7edd5ea246c1f3b7d11e"],["/img/siteicon/apple-splash-1668-2388.jpg","a842930a7f01a5f2af293916a5fa8c9f"],["/img/siteicon/apple-splash-1792-828.jpg","2857ff942c80bc45f1605042155d3881"],["/img/siteicon/apple-splash-2048-1536.jpg","6254295b0fb48c01d950e5d5c78379df"],["/img/siteicon/apple-splash-2048-2732.jpg","73c508dfb39c7efc262f399397c415a4"],["/img/siteicon/apple-splash-2160-1620.jpg","98d6625402f51c7fbf9c70c115d11e56"],["/img/siteicon/apple-splash-2208-1242.jpg","47771757ba8d4a58a2c923bf61b0e1d3"],["/img/siteicon/apple-splash-2224-1668.jpg","31ed922d31cba682de352ae3db9c25cb"],["/img/siteicon/apple-splash-2388-1668.jpg","fdfe8cbda8beb5ae3d3f4d75138a47b4"],["/img/siteicon/apple-splash-2436-1125.jpg","9f7234706e66b2e01a214cef3bef901b"],["/img/siteicon/apple-splash-2532-1170.jpg","eabd23339d78fe1638b84d6533815c8d"],["/img/siteicon/apple-splash-2556-1179.jpg","01b92828c5810363c195e54ae419d1b6"],["/img/siteicon/apple-splash-2688-1242.jpg","61c7ed30771eb8b57df8828ce8b2ae78"],["/img/siteicon/apple-splash-2732-2048.jpg","e1f7bf69f473719eb380caa1ff9678f9"],["/img/siteicon/apple-splash-2778-1284.jpg","95db3fc08694fd4b3089ab61d4aa5e4a"],["/img/siteicon/apple-splash-2796-1290.jpg","29b6c101f2474a89bdcc7e19a6126651"],["/img/siteicon/apple-splash-640-1136.jpg","6b9e7493c397c364c3e549cb468d50d5"],["/img/siteicon/apple-splash-750-1334.jpg","286454d3b4439e7afc83e5d349ffa6c3"],["/img/siteicon/apple-splash-828-1792.jpg","8261f59c14231fa6b3ef47dc22730a68"],["/img/siteicon/manifest-icon-192.maskable.png","ac2ee6b9eef523ed05d3e567c0f8c65f"],["/img/siteicon/manifest-icon-512.maskable.png","119a96071074812a2aa7718221dbb4ca"],["/index.html","414d7e82f8beff7a5a683cc3ae023fbb"],["/js/anzhiyu/ai_abstract.js","393af6df4caa9f85a3763c820ffca8c5"],["/js/anzhiyu/comment_barrage.js","2163a41348d9273070e04a03a33af02c"],["/js/anzhiyu/people.js","4dd7da2c79374419fe3cc50fa203a3e9"],["/js/anzhiyu/random_friends_post.js","75b328427214c9ad003f2a04642b10d6"],["/js/anzhiyu/right_click_menu.js","e6a9ea97b47f62eb8c8ed1b025be9617"],["/js/bilibili.js","b2d6d237344181b8509ec2a28006b105"],["/js/douyin.js","595d56aeede9de1ac374d4d2381eeb06"],["/js/imgloaded.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","99cf0d990413c68b75223985a853968f"],["/js/nyan.js","89da1adc4820c2aebb7693b9d0071007"],["/js/search/algolia.js","0360e5165da2cb0c886f5f2ef2979e7d"],["/js/search/local-search.js","c2b0b0c31fd9b0eb224b37a72545eba3"],["/js/snowflake.js","f50234d7ebbfcccdbe7ce06207c473c6"],["/js/timing.js","390ed71f95a50677b4124aece7be95ff"],["/js/tw_cn.js","92b132ebeda0d4f417947c7e24e6b8a4"],["/js/utils.js","f7030bc946d17b8c5587f0103cb14ad0"],["/js/weibo.js","030bf5733610945b5a9bd9a24adc2bc4"],["/js/welcome.js","4a0281c538dc99cb2dc33afa3a37821f"],["/js/zhihu.js","d2d6c6985a5b609ea49fff211e371fbb"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/myPassion/index.html","6b224c458cf6d11a9f4479084c5e0593"],["/page/2/index.html","baa71df39cdc9ec5b59caf5a44d9934d"],["/posts/1/index.html","c5ec70ed8635b6b0b981dcc45e3c385e"],["/posts/12237/index.html","c20d25f28792dfe3dfd300b532a3781e"],["/posts/14307/index.html","7f261e4c528dadda801db6885b0421e0"],["/posts/14373/index.html","bf014f0b3db5dac23a2b14f2fcda2ea7"],["/posts/16107/index.html","4be80709a35f3b20b5758c75de48d984"],["/posts/19367/index.html","29bb2f486e8fc93c0dc2b418e53455cf"],["/posts/21496/index.html","9b6f2919712e864799e326fe5bc72d1f"],["/posts/22648/index.html","089c7e028694b325245e8a230f0ec593"],["/posts/2729/index.html","aff38e446677ea161b31c65540240508"],["/posts/32968/index.html","1903d41c8468c4fc9cd2c5fd18a64311"],["/posts/35483/index.html","6e4f91957d070a4b7e41d02173837058"],["/posts/5548/index.html","027eb6b0209de6ccec83d75766dcc978"],["/posts/58960/index.html","e8afe146afe5b3932539f538237ba417"],["/posts/d50a/index.html","680d52d5ba4881c56516b8208d7ffa16"],["/privacy/index.html","c5cdda77bb838c837757c6d9e666b6ee"],["/sw-register.js","35d44160668a7e7af4e53da76a6d20ea"],["/tags/API/index.html","e2f7041c7ff7c6366617cb46118de0d7"],["/tags/Cloudflare/index.html","36a1f013b7bceba357c9b54741d9412b"],["/tags/Git/index.html","18db5e76e584f8f29ada6e90eaa1adb9"],["/tags/Github/index.html","2fe388513aa291802ea5471f78e19b04"],["/tags/Greasy-Fork/index.html","6e978044512adc39b2fdb96374e21061"],["/tags/Hexo/index.html","d7784b988335eec3f4dea9469aacc689"],["/tags/Markdown/index.html","ea6f0db0e57263fe2a7939d7676d710d"],["/tags/Markdown语法/index.html","2dabfa2d4a49a123fee3454ebd1a3e7f"],["/tags/Microsoft-Edge/index.html","a7f594a2786813baa66038ddb110d983"],["/tags/Node-js/index.html","b1677ad11db0b742d439435795688af4"],["/tags/Pages/index.html","f08874b2911ce2827fdf61953097bed3"],["/tags/Tag-Plugins/index.html","d1a7f957ed9f72f57c996899a0f9ebc0"],["/tags/Tampermonkey/index.html","b6d5e7ae80d89f749397a9105e81c36f"],["/tags/index.html","07b552239c7126d03c52af767900e095"],["/tags/telegraph-Image/index.html","e21a4dcfc06dec23a40677db615c9863"],["/tags/个人网站/index.html","56f1fe3ae8a27a7f9c5f889f849b1cf0"],["/tags/信息获取/index.html","789e8727fc6684e8c0adf8ec0ad7892a"],["/tags/免费托管/index.html","b1a77b7009986913132930d864daae7e"],["/tags/博客/index.html","1a6c15d1ee9b42c31098d327cbb3ac4c"],["/tags/博客搭建/index.html","6f615cfbe9aaca88f3ffc31d92f2896a"],["/tags/图床/index.html","12d6914d25642f3f5635c140fd2d3d11"],["/tags/图片获取/index.html","6f7ebdde8e6736799e7aca5847db2926"],["/tags/学习笔记/index.html","2be1a4553483f0707aefb363f0ca8b1b"],["/tags/工具/index.html","d59b0164d8ca05151ff2d50113ff8a79"],["/tags/感悟/index.html","4e3109efbf04784ae811bfdc06850ee6"],["/tags/扩展/index.html","0ee682b120714735364b11258f929a32"],["/tags/接口/index.html","31025e08a4d5e5e1d8899e252879fb27"],["/tags/插件/index.html","f83270716ba5ec98563f7b57cf80f2d8"],["/tags/效率/index.html","4c87ecb52e7ce393cd8c1e9077ba99ac"],["/tags/文学/index.html","4ec6d33ee12a59adbb0fbb68f5e75e9b"],["/tags/浏览器/index.html","03c01ed07ccd1ba8a1bd6651f55882b4"],["/tags/热搜/index.html","a34db7db10b4ef3c34d8f748fa5996cc"],["/tags/生活/index.html","a14a36592dc1166d0e1e2105fcc1f26d"],["/tags/编辑格式/index.html","f81afc7fa3cf49848176c43ef7ffad07"],["/tags/脚本/index.html","7ca8a255c2274bf451850f6363f0918b"],["/tags/自建图床/index.html","a528ea5b9dea91cdc74f624d3933863a"],["/tags/解析/index.html","1779b24bb158c7592bd93f894816ae7f"],["/tags/选择/index.html","db175f57ca57ebe8d7eb094806ec2a4e"],["/tags/随机图片/index.html","f25671dcb4babff79b3c4a4497f95778"],["/tags/随笔/index.html","36ad6115d7a46be15ad81517ee93af06"],["/tags/静态网站/index.html","06f1f644658de496372d4b6663deae1d"]];
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
