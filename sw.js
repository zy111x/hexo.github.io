/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","bb79c84c7efed17e4da6fb862b22debb"],["/about/index.html","759e459fcbf97e49a6481b0759deba4e"],["/album/index.html","db1f448c46715077f19fbe420764f30a"],["/anzhiyu/random.js","f39f802071844696438fd8e4fdd8fac8"],["/archives/2023/06/index.html","0df29983a430579ce9c6daca6bd657c4"],["/archives/2023/07/index.html","aa31cbf5cc75fe789dce75e7ddd05068"],["/archives/2023/index.html","52de0fc6ab68951eb42ef7638cdb8836"],["/archives/2024/07/index.html","5c176af3bd1aa4015e802f15faa3b269"],["/archives/2024/08/index.html","c47e4c2ae7e3d9f83d520ef608e6e4f2"],["/archives/2024/index.html","bd3513505204a6dab47e708dff2f8a66"],["/archives/index.html","d61ad296b03ece03909e2fc8abf7e631"],["/archives/page/2/index.html","6b050fdfa4a7bf0a45abe10817071bcd"],["/categories/index.html","7955d0aae652fb10b95ef4794f381bb7"],["/categories/学习/index.html","76da1a63199971db5397ae4ce79d84e7"],["/categories/生活/index.html","8f8b42084376c1cf7862935e0285d9d9"],["/categories/转载/index.html","4c7790f978c650e4717d979adf80db19"],["/comments/index.html","27a1571e394add2b25facadb9790ad9c"],["/cookies/index.html","f0cd43626338cf52dc89e2c41416b3e1"],["/copyright/index.html","2f2d61187306c09c666e790ee7568e3b"],["/css/about-tag.css","cec8a4d09df053602402d1c0ed337c06"],["/css/background.css","bb1f5d757743dc0c7a17eafba8d46d52"],["/css/bilibili.css","7a2b02d35a7b9dbc407829c9c96e6a4b"],["/css/douyin.css","8050710fe24df97930e914d00d93f569"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/home.css","ba627b6136a51d18416833b1e424ad24"],["/css/icat.css","8021d194de478b57a39c51e98649741f"],["/css/icon.css","7f76869eb30eaa0d42982eec6d1b8e62"],["/css/index.css","dc0057db3f80ff84b3b44155ee470c9d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/weibo.css","1b25e722f159e825d0434be3ea22e0c5"],["/css/welcome.css","715c2af7f10bf6151251e4dd0313e0ec"],["/css/zhihu.css","05b5d9d03c466f2716d89ac38d82cd1a"],["/cutAnimals/index.html","1d25e4cbed315f41622468e7104164eb"],["/dailyPhoto/index.html","897b98de301007b8cd2d4c1ebb5611cd"],["/essay/index.html","caf8d6edeaeb5ff5fa540dc27e074988"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","09ececcc5d241268a724dc8ff9849722"],["/img/algolia.svg","f60fbbe4a8afa312b3f6d12182558861"],["/img/comment_bg.png","73c4561c3dfbc7077c7525339fe5e87a"],["/img/default_cover.jpg","4fde0a97478c6436fcf406bbd1524e78"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","d6b808ce6a48efba98bc2ebddffef10e"],["/img/siteicon/16.png","40437a7e42806e0c0fa6b6c2d77a1fa5"],["/img/siteicon/32.png","6de2984e4c978f3d7b5a7d31fc439641"],["/img/siteicon/apple-icon-180.png","f6da21df9f72c54ce97346d550ce58f4"],["/img/siteicon/apple-splash-1125-2436.jpg","2ef897a6e832989b9ea7fbbd49d361f6"],["/img/siteicon/apple-splash-1136-640.jpg","6ee16bd2421904124759b3001be65047"],["/img/siteicon/apple-splash-1170-2532.jpg","68858d357559c7c2ce575193445ec074"],["/img/siteicon/apple-splash-1179-2556.jpg","1a037efdb7c40aa0e4b2e8cfce4d212f"],["/img/siteicon/apple-splash-1242-2208.jpg","5f78e5eb95eea3fcbf3e92836857db42"],["/img/siteicon/apple-splash-1242-2688.jpg","5556f1f982e46a5cc604540dd7eb221f"],["/img/siteicon/apple-splash-1284-2778.jpg","8ebddd0f8f7fac705e986b883d79e9f1"],["/img/siteicon/apple-splash-1290-2796.jpg","52ae2065253c46c2da735b7c9ab58966"],["/img/siteicon/apple-splash-1334-750.jpg","bd27733eab2f4c4e1504b371e401333a"],["/img/siteicon/apple-splash-1536-2048.jpg","e1dc64e0c2e682d7c27d4c16f624e105"],["/img/siteicon/apple-splash-1620-2160.jpg","1f7b38621ad23e7aadd2889fa3a5fa61"],["/img/siteicon/apple-splash-1668-2224.jpg","7d483bc1e3ca7edd5ea246c1f3b7d11e"],["/img/siteicon/apple-splash-1668-2388.jpg","a842930a7f01a5f2af293916a5fa8c9f"],["/img/siteicon/apple-splash-1792-828.jpg","2857ff942c80bc45f1605042155d3881"],["/img/siteicon/apple-splash-2048-1536.jpg","6254295b0fb48c01d950e5d5c78379df"],["/img/siteicon/apple-splash-2048-2732.jpg","73c508dfb39c7efc262f399397c415a4"],["/img/siteicon/apple-splash-2160-1620.jpg","98d6625402f51c7fbf9c70c115d11e56"],["/img/siteicon/apple-splash-2208-1242.jpg","47771757ba8d4a58a2c923bf61b0e1d3"],["/img/siteicon/apple-splash-2224-1668.jpg","31ed922d31cba682de352ae3db9c25cb"],["/img/siteicon/apple-splash-2388-1668.jpg","fdfe8cbda8beb5ae3d3f4d75138a47b4"],["/img/siteicon/apple-splash-2436-1125.jpg","9f7234706e66b2e01a214cef3bef901b"],["/img/siteicon/apple-splash-2532-1170.jpg","eabd23339d78fe1638b84d6533815c8d"],["/img/siteicon/apple-splash-2556-1179.jpg","01b92828c5810363c195e54ae419d1b6"],["/img/siteicon/apple-splash-2688-1242.jpg","61c7ed30771eb8b57df8828ce8b2ae78"],["/img/siteicon/apple-splash-2732-2048.jpg","e1f7bf69f473719eb380caa1ff9678f9"],["/img/siteicon/apple-splash-2778-1284.jpg","95db3fc08694fd4b3089ab61d4aa5e4a"],["/img/siteicon/apple-splash-2796-1290.jpg","29b6c101f2474a89bdcc7e19a6126651"],["/img/siteicon/apple-splash-640-1136.jpg","6b9e7493c397c364c3e549cb468d50d5"],["/img/siteicon/apple-splash-750-1334.jpg","286454d3b4439e7afc83e5d349ffa6c3"],["/img/siteicon/apple-splash-828-1792.jpg","8261f59c14231fa6b3ef47dc22730a68"],["/img/siteicon/manifest-icon-192.maskable.png","ac2ee6b9eef523ed05d3e567c0f8c65f"],["/img/siteicon/manifest-icon-512.maskable.png","119a96071074812a2aa7718221dbb4ca"],["/index.html","0976914548b3f153d312230a58691ca4"],["/js/anzhiyu/ai_abstract.js","393af6df4caa9f85a3763c820ffca8c5"],["/js/anzhiyu/comment_barrage.js","2163a41348d9273070e04a03a33af02c"],["/js/anzhiyu/people.js","4dd7da2c79374419fe3cc50fa203a3e9"],["/js/anzhiyu/random_friends_post.js","75b328427214c9ad003f2a04642b10d6"],["/js/anzhiyu/right_click_menu.js","e6a9ea97b47f62eb8c8ed1b025be9617"],["/js/bilibili.js","b2d6d237344181b8509ec2a28006b105"],["/js/douyin.js","595d56aeede9de1ac374d4d2381eeb06"],["/js/imgloaded.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","99cf0d990413c68b75223985a853968f"],["/js/nyan.js","89da1adc4820c2aebb7693b9d0071007"],["/js/search/algolia.js","0360e5165da2cb0c886f5f2ef2979e7d"],["/js/search/local-search.js","c2b0b0c31fd9b0eb224b37a72545eba3"],["/js/snowflake.js","f50234d7ebbfcccdbe7ce06207c473c6"],["/js/timing.js","390ed71f95a50677b4124aece7be95ff"],["/js/tw_cn.js","92b132ebeda0d4f417947c7e24e6b8a4"],["/js/utils.js","f7030bc946d17b8c5587f0103cb14ad0"],["/js/weibo.js","030bf5733610945b5a9bd9a24adc2bc4"],["/js/welcome.js","4a0281c538dc99cb2dc33afa3a37821f"],["/js/zhihu.js","d2d6c6985a5b609ea49fff211e371fbb"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/myPassion/index.html","6b224c458cf6d11a9f4479084c5e0593"],["/page/2/index.html","7847620775f4b22c42ca1e7c272d4d9f"],["/posts/1/index.html","4df2be011a920652a177ed91e9d20c5b"],["/posts/12237/index.html","863731ebbca9ef1c8be10c63d1804e61"],["/posts/14307/index.html","32a2077dad1fd837b2d55e28dc3b3848"],["/posts/14373/index.html","3f1ad0159960d26f46a7d666c75b15b7"],["/posts/16107/index.html","4be80709a35f3b20b5758c75de48d984"],["/posts/19367/index.html","ea2826ea4bdb214efa9862cb0bb7da98"],["/posts/21496/index.html","a7326f19009bdbff59a4d76b045ad515"],["/posts/22648/index.html","2ca4b74bfb43b137dcb17daac486ba99"],["/posts/2729/index.html","1a607922f9f74fe9e078dceec030f863"],["/posts/32968/index.html","8bb11fe9a5e268bff31c039328628788"],["/posts/35483/index.html","7f04906937ee6717667c41db5b57820c"],["/posts/5548/index.html","1a4fa49bb9a86d8f6d1d2c01ec648dd7"],["/posts/58960/index.html","b15a22a3976df9dee0fdea2fa6f327ba"],["/posts/d50a/index.html","67499776af822ae45550e7b8621eed20"],["/privacy/index.html","cf40e66eeed9423857afcd965f5808b2"],["/sw-register.js","2b0a5a0d16fc87cc775662ab61e14a30"],["/tags/API/index.html","7626f6d12a42489e93d8871486f7d7cc"],["/tags/Cloudflare/index.html","7f5f47446287b09afd34d11f29ebacf6"],["/tags/Git/index.html","e7a3ad05af41600101d1ce213037e360"],["/tags/Github/index.html","82d32185ae5d62b69075b35fa8b269a3"],["/tags/Greasy-Fork/index.html","0e70903c5ce1a6f56e40fbf90c291304"],["/tags/Hexo/index.html","4807b94778938e60c3717c52612cf709"],["/tags/Markdown/index.html","748d6490a14b4a625d3c1fc167cf4a51"],["/tags/Markdown语法/index.html","9e01528cdc8a51084671079fd05129d4"],["/tags/Microsoft-Edge/index.html","b162a14c63f953e6ae5638a687f7b442"],["/tags/Node-js/index.html","38e906c39a725ef29c256619c2db2a7e"],["/tags/Pages/index.html","4645ce2fe61c9f9a39bb73b62544b9c0"],["/tags/Tag-Plugins/index.html","219dcb8e96c5d2758ef58fa554fb6a93"],["/tags/Tampermonkey/index.html","879cbd668e9d3bf743e15a1a2867502b"],["/tags/index.html","05852339c6790d3ce7f357533ed28b6c"],["/tags/telegraph-Image/index.html","59daffabe6705af8b1648372a0df4f68"],["/tags/个人网站/index.html","f4cf624a8d31847ab07f33dc2f797e74"],["/tags/信息获取/index.html","a41f04b0a5d990e3d27e639a03ceec4a"],["/tags/免费托管/index.html","555006651d00a88d51d86af4b2349e54"],["/tags/博客/index.html","34cf6545774cde8ac690fef6ae68e912"],["/tags/博客搭建/index.html","7dfb31a74aab726ee607165a817c14a9"],["/tags/图床/index.html","10e8f57768342d3197eb00282b909928"],["/tags/图片获取/index.html","662ea9d5c1dcbec9a222a10727a3c113"],["/tags/学习笔记/index.html","2cd5b3ea1f1352eda336593a0257620b"],["/tags/工具/index.html","92e46fd1f009cade04dd2e6eb722fafe"],["/tags/感悟/index.html","5befabdf39171c4098e2cff7b10b9f55"],["/tags/扩展/index.html","c487ef083376a4079dad0059afd9f106"],["/tags/接口/index.html","201c0047daa3efb5406ce06e39cfbdbc"],["/tags/插件/index.html","a47d83d5b373f60f7ac89d886150f64d"],["/tags/效率/index.html","bb939f5ffa6682399a26be1533470769"],["/tags/文学/index.html","9de324fb473334f30799228e390be037"],["/tags/浏览器/index.html","c76717ee1fbabfa6672e1bc7c6d6345b"],["/tags/热搜/index.html","888142e8c21bd620650cbc9388ba0f0a"],["/tags/生活/index.html","ce07d2bda84c155b7f2328c186141349"],["/tags/编辑格式/index.html","b8e5849b3bb17802407a3fbcb3e3c995"],["/tags/脚本/index.html","99f5ba4269ba67f76f100356a6c87416"],["/tags/自建图床/index.html","fd6ddee5c59d4ba83be66f8f47922737"],["/tags/解析/index.html","7fe122cf5f4649bdfd3a25c29670f36b"],["/tags/选择/index.html","0fbaa7a6ba4c98cc273e883e0b12af16"],["/tags/随机图片/index.html","5371967fc3944f2766a5ff41c061a338"],["/tags/随笔/index.html","11d9a5596eb1b93d42b01581d4e0f73e"],["/tags/静态网站/index.html","08ba54d48996d6802e4865950df69322"]];
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
