/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","191de754d1c33d6553b211fdcfcc3bf9"],["/about/index.html","c6233f8474c7523fabf76fc13566004c"],["/album/index.html","0b12119785c3ed7ea0ba88b6936cfb9f"],["/anzhiyu/random.js","0316a4f881dc43f0c4ffec9c2e1929d5"],["/archives/2023/06/index.html","70138e1d5aa0c0ae56e85ea1ad7c1780"],["/archives/2023/07/index.html","c32366dd52bccc71f34022f953f4a9c3"],["/archives/2023/index.html","cfb9f7eda8c2bbd2452482f9a07142fe"],["/archives/2024/07/index.html","11ab622b2106509a4097ef2b0482b3c8"],["/archives/2024/08/index.html","4d84308781fccfcdfcc9fb34a3f681bf"],["/archives/2024/index.html","739f285e5bc9039628f6d50a57931eda"],["/archives/index.html","ca26783e314914bec31da19f0dfb1498"],["/categories/index.html","5874072177f3fb15fc1ea020006e3a2f"],["/categories/学习/index.html","6fd4986c4e2887155485831e862647fb"],["/comments/index.html","826c03b9d7ec4ea76373bd71e4209cbb"],["/css/about-tag.css","cec8a4d09df053602402d1c0ed337c06"],["/css/background.css","bb1f5d757743dc0c7a17eafba8d46d52"],["/css/hbe.style.css","f1245164f762ee83309fa797a63fb868"],["/css/home.css","ba627b6136a51d18416833b1e424ad24"],["/css/icat.css","8021d194de478b57a39c51e98649741f"],["/css/index.css","36087e3efa901b0f16d68e9d079779f1"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/welcome.css","715c2af7f10bf6151251e4dd0313e0ec"],["/cutAnimals/index.html","583b762f697b853897ad5a09508e1c32"],["/dailyPhoto/index.html","539e45db7176f6d6c8b2c6328c0ef6e5"],["/essay/index.html","dd61f21dbe52cc45a3ee53d0c6b4e8a7"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","09ececcc5d241268a724dc8ff9849722"],["/img/algolia.svg","f60fbbe4a8afa312b3f6d12182558861"],["/img/comment_bg.png","73c4561c3dfbc7077c7525339fe5e87a"],["/img/default_cover.jpg","4fde0a97478c6436fcf406bbd1524e78"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","d6b808ce6a48efba98bc2ebddffef10e"],["/img/siteicon/16.png","40437a7e42806e0c0fa6b6c2d77a1fa5"],["/img/siteicon/32.png","6de2984e4c978f3d7b5a7d31fc439641"],["/img/siteicon/apple-icon-180.png","f6da21df9f72c54ce97346d550ce58f4"],["/img/siteicon/manifest-icon-192.maskable.png","ac2ee6b9eef523ed05d3e567c0f8c65f"],["/img/siteicon/manifest-icon-512.maskable.png","119a96071074812a2aa7718221dbb4ca"],["/index.html","782f0b1e4633438d848a8982a656c90f"],["/js/anzhiyu/ai_abstract.js","393af6df4caa9f85a3763c820ffca8c5"],["/js/anzhiyu/comment_barrage.js","2163a41348d9273070e04a03a33af02c"],["/js/anzhiyu/people.js","4dd7da2c79374419fe3cc50fa203a3e9"],["/js/anzhiyu/random_friends_post.js","75b328427214c9ad003f2a04642b10d6"],["/js/anzhiyu/right_click_menu.js","e6a9ea97b47f62eb8c8ed1b025be9617"],["/js/imgloaded.js","d41d8cd98f00b204e9800998ecf8427e"],["/js/main.js","99cf0d990413c68b75223985a853968f"],["/js/search/algolia.js","0360e5165da2cb0c886f5f2ef2979e7d"],["/js/search/local-search.js","c2b0b0c31fd9b0eb224b37a72545eba3"],["/js/tw_cn.js","92b132ebeda0d4f417947c7e24e6b8a4"],["/js/utils.js","f7030bc946d17b8c5587f0103cb14ad0"],["/js/welcome.js","4a0281c538dc99cb2dc33afa3a37821f"],["/lib/hbe.js","cb004426c9bd62ba16e200b048462887"],["/myPassion/index.html","e8a5194cb9e4b81cb9573800e3d7ae0c"],["/posts/14307/index.html","954b11e7328b3513b995c790e56fda31"],["/posts/16107/index.html","e5ee3c286f9f8f16a98c32399c38ad42"],["/posts/22648/index.html","cc375e5d2ec07799a10ea8c8a91e3da1"],["/posts/2729/index.html","b98eed8998f720b5d93a392140634cf0"],["/posts/32968/index.html","5499e042caddd250aefe941d214373b5"],["/posts/47193/index.html","85c0f12d6926d6e02406de9383f9e85e"],["/posts/58960/index.html","cd0b6d0e52f658b838b8b881daab9803"],["/posts/d50a/index.html","d996c7265cffa963cd40c90c240dd3f9"],["/sw-register.js","2258c3dd56bf9f548f33d9009192fe1a"],["/tags/Cloudflare/index.html","c8aca6ab93b245e364907be2c0e31ab0"],["/tags/Git/index.html","5c08f3a5e1a9ee432b196e393ee70bf7"],["/tags/Github/index.html","6dc5eb45f43e8ae65a136c0e364d212f"],["/tags/Greasy-Fork/index.html","990629ebab0156bb42ccac5e2e210ce7"],["/tags/Hexo/index.html","821f8833cf0efd9d9fe8e2e8f8ecef25"],["/tags/Markdown/index.html","a12bfe8798e2a1de086a9f793f9675a9"],["/tags/Markdown语法/index.html","5fe7e2e9ae2f75f62aef4d90940672db"],["/tags/Microsoft-Edge/index.html","781a557e19d4ccbadbe907dee3620178"],["/tags/Node-js/index.html","4d795d489410eb112ad3f746da9623ef"],["/tags/Pages/index.html","774a336412f94d3ea6319e3c09e5af5a"],["/tags/Tag-Plugins/index.html","35e0f4d5ce983d501d9b70fa69c29845"],["/tags/Tampermonkey/index.html","b8accb47e8fe228751c5c253c9369f44"],["/tags/index.html","92997bd1d59bfa1dbd1ad4c2740f5eb1"],["/tags/telegraph-Image/index.html","1e1ef2885f67981b9f200bd27c1c9c7c"],["/tags/个人网站/index.html","5f2156bd288b64defe4f30da5ae871cf"],["/tags/免费托管/index.html","efe67af7db81b1bf57f1fe688f6d912f"],["/tags/博客/index.html","0f2ea1168579beb737c7b03621740917"],["/tags/博客搭建/index.html","d4de579afdf7036e8e64eeb980e9b405"],["/tags/图床/index.html","f77c2c2cefd23a09dfbe3986785b7f7f"],["/tags/学习笔记/index.html","06214006c5c3881a2e08de2a58cfba09"],["/tags/扩展/index.html","a241320d5c47e2fdd5c34408ad024a7b"],["/tags/插件/index.html","51f2755f9b1246853110ad8db860711b"],["/tags/效率/index.html","65c67c7cb70e53c5b2409810899cbbf0"],["/tags/浏览器/index.html","c51e08d20ff48301a87d9839a639417f"],["/tags/编辑格式/index.html","08edbdf408a1476afb66a960078a6e8f"],["/tags/脚本/index.html","cd8830a930975595cfbca3009b0ebe6e"],["/tags/自建图床/index.html","d2f7cbc57f99fba2fb892f04a153336a"],["/tags/静态网站/index.html","9894e83321c242e2741a635a2174c72a"]];
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
