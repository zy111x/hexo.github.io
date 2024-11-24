/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1d940bb6c733c7994d241997f68075d9"],["/about/index.html","767cf9481f5864ae44c11de54450fd19"],["/album/index.html","bd5678bde6150508671e4236fc61e116"],["/anzhiyu/random.js","f159fe4f236ee8a1ae9311fd2d002b94"],["/archives/2023/06/index.html","d7a29980450a1bbbca8a16e0a368d62e"],["/archives/2023/07/index.html","5f3b05ca9961f3048fa0804fa61bf92c"],["/archives/2023/index.html","6519528e7678c8209296631683405933"],["/archives/2024/07/index.html","d4b4f6a0d9f260b4b156c1e2668437c3"],["/archives/2024/08/index.html","ae4797f64af75246c4ed3bdecb3e5809"],["/archives/2024/09/index.html","343bbff5b246a365b2dab67ddd9e7d4e"],["/archives/2024/10/index.html","6b5c9091d5d33b9302149a9acf42a681"],["/archives/2024/11/index.html","4b70d982e6ee9cfe4c8fca719e7740b5"],["/archives/2024/index.html","15f7c9cf1ad4f3ecfa4e5dc6eb7801c6"],["/archives/2024/page/2/index.html","0a9beebee3eaf8df09ec61fa7a15c1d5"],["/archives/index.html","d12d07d7bb10f5ef35cbc2e917d59e44"],["/archives/page/2/index.html","edd285a4abc82822cb7e0db8c2b26a1c"],["/assets/css/APlayer.min.css","88d373542c0d9c65052751376bd75e38"],["/assets/js/APlayer.min.js","2b425eba73d6b74ed1ab3e2a769ae6cd"],["/assets/js/Meting.min.js","9d62ee4c94cdd619b2cdf6d0c59f091c"],["/categories/index.html","f11ec0bf0b02d2a854187f8c41fd9bfc"],["/categories/历史/index.html","d160b7a2fc51b8b3cb4733712c7a6b2f"],["/categories/学习/index.html","2c176ce2667558363a7d1f672cd82082"],["/categories/学习/page/2/index.html","dfc01e475f45398f588dc93e519c4ba3"],["/categories/生活/index.html","057482d45501962642b587a49325294b"],["/comments/index.html","e0c462e3866347fdc2d124355d7a2cba"],["/cookies/index.html","f02db7916b46e2367af46b201826b2b1"],["/copyright/index.html","311d397441fa124c0c00ac55a75906dc"],["/css/about-tag.css","cec8a4d09df053602402d1c0ed337c06"],["/css/animals_night.css","6a9eb90da462191eadcc477589a8eccd"],["/css/anniversary.css","7284f4b125a9a4f255a2d70470b9ab76"],["/css/aside_bg.css","3537bc52e8d60385e4a254f06da14416"],["/css/background.css","54f6c012fe69f4ae15cff51f56b8f7ff"],["/css/bilibili.css","7a2b02d35a7b9dbc407829c9c96e6a4b"],["/css/custom.css","e91d7758d01b3779aab9ba2ae3f55215"],["/css/douyin.css","8050710fe24df97930e914d00d93f569"],["/css/hbe.style.css","ce0a458b6876707a8b522b290e540409"],["/css/home.css","ba627b6136a51d18416833b1e424ad24"],["/css/icat.css","8021d194de478b57a39c51e98649741f"],["/css/icon.css","7f76869eb30eaa0d42982eec6d1b8e62"],["/css/imgloaded.css","67fdc3bb2a8df68f46ab675e99516452"],["/css/index.css","ccdaeb9ba77e9c054144c28fb2065b26"],["/css/kslink.css","229247241b34865d60f6035d094abfb6"],["/css/modify.css","606567c410f645cb5cb42c971e215d64"],["/css/progress_bar.css","c86e4aebb9a21d0c6da3768dc4ef671d"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/css/weibo.css","e417a871a2eba21a6c24ec1e6f7f6354"],["/css/welcome.css","dccae4bd5562991c47e14ea98ad3366a"],["/css/windmill.css","0ada6550cbd8e31ce61f407247f12635"],["/css/zhihu.css","05b5d9d03c466f2716d89ac38d82cd1a"],["/cutAnimals/index.html","e368151a561145dad6bf92868ae4f0cc"],["/dailyPhoto/index.html","2548f564eb1abd93badf989cddca45bc"],["/essay/index.html","7450325a429a405c58f7ff47abc4cd38"],["/fcircle/index.html","4f554337fd8f8b07a0dd944af9f44855"],["/go.html","33d79c7f51b06fc4e36632cf4d759615"],["/img/00.gif","3b8cbe8cf5789969dc4771cd918aa6a7"],["/img/404.jpg","8190796a570d269ef04b777d93d44e6d"],["/img/512.png","09ececcc5d241268a724dc8ff9849722"],["/img/algolia.svg","f60fbbe4a8afa312b3f6d12182558861"],["/img/comment_bg.png","73c4561c3dfbc7077c7525339fe5e87a"],["/img/default_cover.jpg","4fde0a97478c6436fcf406bbd1524e78"],["/img/friend_404.gif","d09ab53cb5bb15079ce8e3d90b157353"],["/img/loading.gif","d6b808ce6a48efba98bc2ebddffef10e"],["/img/siteicon/16.png","40437a7e42806e0c0fa6b6c2d77a1fa5"],["/img/siteicon/32.png","6de2984e4c978f3d7b5a7d31fc439641"],["/img/siteicon/apple-icon-180.png","f6da21df9f72c54ce97346d550ce58f4"],["/img/siteicon/apple-splash-1125-2436.jpg","2ef897a6e832989b9ea7fbbd49d361f6"],["/img/siteicon/apple-splash-1136-640.jpg","6ee16bd2421904124759b3001be65047"],["/img/siteicon/apple-splash-1170-2532.jpg","68858d357559c7c2ce575193445ec074"],["/img/siteicon/apple-splash-1179-2556.jpg","1a037efdb7c40aa0e4b2e8cfce4d212f"],["/img/siteicon/apple-splash-1242-2208.jpg","5f78e5eb95eea3fcbf3e92836857db42"],["/img/siteicon/apple-splash-1242-2688.jpg","5556f1f982e46a5cc604540dd7eb221f"],["/img/siteicon/apple-splash-1284-2778.jpg","8ebddd0f8f7fac705e986b883d79e9f1"],["/img/siteicon/apple-splash-1290-2796.jpg","52ae2065253c46c2da735b7c9ab58966"],["/img/siteicon/apple-splash-1334-750.jpg","bd27733eab2f4c4e1504b371e401333a"],["/img/siteicon/apple-splash-1536-2048.jpg","e1dc64e0c2e682d7c27d4c16f624e105"],["/img/siteicon/apple-splash-1620-2160.jpg","1f7b38621ad23e7aadd2889fa3a5fa61"],["/img/siteicon/apple-splash-1668-2224.jpg","7d483bc1e3ca7edd5ea246c1f3b7d11e"],["/img/siteicon/apple-splash-1668-2388.jpg","a842930a7f01a5f2af293916a5fa8c9f"],["/img/siteicon/apple-splash-1792-828.jpg","2857ff942c80bc45f1605042155d3881"],["/img/siteicon/apple-splash-2048-1536.jpg","6254295b0fb48c01d950e5d5c78379df"],["/img/siteicon/apple-splash-2048-2732.jpg","73c508dfb39c7efc262f399397c415a4"],["/img/siteicon/apple-splash-2160-1620.jpg","98d6625402f51c7fbf9c70c115d11e56"],["/img/siteicon/apple-splash-2208-1242.jpg","47771757ba8d4a58a2c923bf61b0e1d3"],["/img/siteicon/apple-splash-2224-1668.jpg","31ed922d31cba682de352ae3db9c25cb"],["/img/siteicon/apple-splash-2388-1668.jpg","fdfe8cbda8beb5ae3d3f4d75138a47b4"],["/img/siteicon/apple-splash-2436-1125.jpg","9f7234706e66b2e01a214cef3bef901b"],["/img/siteicon/apple-splash-2532-1170.jpg","eabd23339d78fe1638b84d6533815c8d"],["/img/siteicon/apple-splash-2556-1179.jpg","01b92828c5810363c195e54ae419d1b6"],["/img/siteicon/apple-splash-2688-1242.jpg","61c7ed30771eb8b57df8828ce8b2ae78"],["/img/siteicon/apple-splash-2732-2048.jpg","e1f7bf69f473719eb380caa1ff9678f9"],["/img/siteicon/apple-splash-2778-1284.jpg","95db3fc08694fd4b3089ab61d4aa5e4a"],["/img/siteicon/apple-splash-2796-1290.jpg","29b6c101f2474a89bdcc7e19a6126651"],["/img/siteicon/apple-splash-640-1136.jpg","6b9e7493c397c364c3e549cb468d50d5"],["/img/siteicon/apple-splash-750-1334.jpg","286454d3b4439e7afc83e5d349ffa6c3"],["/img/siteicon/apple-splash-828-1792.jpg","8261f59c14231fa6b3ef47dc22730a68"],["/img/siteicon/manifest-icon-192.maskable.png","ac2ee6b9eef523ed05d3e567c0f8c65f"],["/img/siteicon/manifest-icon-512.maskable.png","119a96071074812a2aa7718221dbb4ca"],["/index.html","b6fde3a37874013d34373d1ce8f2dc77"],["/js/anzhiyu/ai_abstract.js","c9e5a96381bea73c38f96c0f7ab1f19c"],["/js/anzhiyu/comment_barrage.js","d27c413b80b8b250eb1493281299a4e3"],["/js/anzhiyu/people.js","19feb32bba8ba6faf0ec882112eb749b"],["/js/anzhiyu/random_friends_post.js","9dbf7119b28223dad0202fa7bd5396e7"],["/js/anzhiyu/right_click_menu.js","513929cd61dd397ca4205bc97661cc9e"],["/js/bilibili.js","bb6e111a8a3621d471380e5d0af0ed82"],["/js/countdown.js","618c3dcb827fd080f5f3feeeffe900d7"],["/js/douyin.js","2ae50ae0c7155e212da2a3cbd510411c"],["/js/footer.js","dd05052857f507453ff3dbb89d0e03b2"],["/js/imgloaded.js","593a9bc380baadd89fbeb4f08d0a7d3a"],["/js/kslink.js","82c21d1b99f83263f9fe9d5d38baf8c2"],["/js/main.js","592a58866da22f6350a3776486b681b4"],["/js/search/algolia.js","d6e42f82f4a683ff9ed2796b2839e5db"],["/js/search/local-search.js","bed86ec8a774becd990e73cc14cfc0be"],["/js/snowflake.js","05c6407aaf3fb97a07cc24db4204fc35"],["/js/timing.js","aab876838bd02a8370f4fa6834151230"],["/js/tw_cn.js","00471d43321d6e0c4048a2d371880762"],["/js/utils.js","7a8eb10c7149519bb59c0cd8bd301f7a"],["/js/weibo.js","d7fa9b66fe8bfb1f9281314e52197812"],["/js/welcome.js","3a35739f20638e6bd09f778bd44e660b"],["/js/zhihu.js","9bb1dbb80769ba469ddcd320787dfd11"],["/lib/hbe.js","2261f985e85364e20ee42a81a1840ca7"],["/link/index.html","1ef1ac8ca9f2602f659661edf33b8611"],["/messages/index.html","602e30a207452195e657fc749103aee5"],["/music/index.html","e8f00839ba9d552bb755a4b0a55c06dc"],["/myPassion/index.html","c2c9029911c23106e1b4caa7b2adc335"],["/nav/index.html","85e7a5afb7e2d211cafbf94cb1d9c19b"],["/page/2/index.html","12c8e47b3347cd673a56f85a8c08dfb5"],["/posts/12051.html","9922930ead5790fcf48965cf5089572f"],["/posts/12843.html","c817b50ef4b3e2fad7b8e33e5b0bfc57"],["/posts/14307.html","9d1606e9fa3b31711e46969fdd85caad"],["/posts/14373.html","ddb32d57534a94cb5f61d2d37b5298ee"],["/posts/14375.html","098c85b88aa95a38a06504ffdd4f7c6c"],["/posts/19367.html","db4c733111bcba9532866a002af75d98"],["/posts/22648.html","fdd2f96c454957c3e06acd5ba307b008"],["/posts/2729.html","9d47962b32b8dc49d0ba77be76dbd4cd"],["/posts/32968.html","3ebb50779b55eb79e2ed58a436006834"],["/posts/41626.html","c970076df1667bb96d5ace042ef093bb"],["/posts/50489.html","2a09255cbb265a61dea642e4a778d0e4"],["/posts/53880.html","902c1e218b02fab44433a57586d419b4"],["/posts/54ee.html","019e703a12d42b11a99da3756609d0ce"],["/posts/5548.html","d781ce405733f44362bfe04cb3d1a925"],["/posts/9.html","5aba6796730902487aaa9b8d776ae743"],["/posts/d50a.html","916b9228367b65968808d42e9eff6581"],["/privacy/index.html","269d431af0dfd09c4df406d95545c317"],["/static/countup/countup.js","8033ab7ea35e6bd41681aad6d93a23cd"],["/static/cursor.js","814c506b046a1bfa95355db21146cb93"],["/static/custom/custom.css","f7b8c1921045911fdc421f20ad0ae692"],["/static/custom/custom.js","257d2385f6f7eb6411cc503b4b726088"],["/static/dark/dark.js","c8c96de7a14bba0d6bce5844c6b059ad"],["/static/essay-style.css","92e97fe72dead5b4977f12b7d2fe6c48"],["/static/icon/ali_iconfont.js","d635ce70d2587c2994ceaf752890b263"],["/static/icon/ali_iconfont_css.css","452ae4088d294af9159f828b5a86dc65"],["/static/icon/font_2508400_fpn9ui60u6q.eot","fff076f7a3239cff7b981240be4aa315"],["/static/icon/font_2508400_fpn9ui60u6q.ttf","36570b466b0e83c8bcdafa3502047a1e"],["/static/icon/font_2508400_fpn9ui60u6q.woff","87e0bc4cb177feaa316bb74bd1a96610"],["/static/js/kslink.js","82c21d1b99f83263f9fe9d5d38baf8c2"],["/static/progress_bar/progress_bar.css","c86e4aebb9a21d0c6da3768dc4ef671d"],["/static/swiper/swiper.min.css","b6d302cb0a9b20f1826131ee073fbc7d"],["/static/swiper/swiper.min.js","166ae9e72a10ff3cc4721b003ec21b87"],["/static/swiper/swiper_init.js","41f90e7698af08d426bca5b9e2f7a469"],["/sw-register.js","b1017c39bf9ed96d8d13a1931df411d7"],["/tags/AI/index.html","eda5afc1f3e2d9ea3ddfb43a7a14fa32"],["/tags/API/index.html","bf487c32ac093c8c230ea3ca65776189"],["/tags/ChatGPT/index.html","400908f00f2b87d5dd6ca356f8cdf087"],["/tags/Cloudflare/index.html","05e7ec99e04185c9f48e36b189d26d4e"],["/tags/Git/index.html","74f200137c8933763ce833d313319951"],["/tags/Github/index.html","962e4f83d4d9b19f7a28d3f4fb288330"],["/tags/Hexo/index.html","4753bfa9e9bfbe0b9af051e3d42ec58e"],["/tags/Markdown/index.html","26c36b4d431fb41199c2f7a3e77bb727"],["/tags/Pages/index.html","71d96a3a5bd28700870f4f02f3357cb6"],["/tags/Tag-Plugins/index.html","a48fafe45ad6743d3f0a1ca4b037ec91"],["/tags/Tampermonkey/index.html","ae635042ee8c4b7fdf7fa3ae95ad684c"],["/tags/index.html","b2bf3041702aeecdc1d9540ca510624a"],["/tags/serv00/index.html","2837542fd9fe5706468fe117d5fd5e57"],["/tags/不背“锅”系列/index.html","da811b256923a86243484f5b7b9b9bea"],["/tags/个人网站/index.html","0a339812c821b4e484e787bcdd71d91a"],["/tags/博客/index.html","0e87992ef6c6884cdbe9e076a349ffb7"],["/tags/历史/index.html","42594f48cc9bf0b7d1d138a1667d5372"],["/tags/图床/index.html","08d57b252bd30d5efb7c6f9a368b98d8"],["/tags/学习笔记/index.html","6b80eb820b30479b70c6c86ea1cffba4"],["/tags/工具/index.html","b25071fa6eafb6cded6f7da67cac21c1"],["/tags/感悟/index.html","2679e1b36726fceb4409a84d1b596ac0"],["/tags/接口/index.html","1fde381ba44d195757e539ba07417e4c"],["/tags/插件/index.html","f52b4e955a691cb65fc5da01e730a949"],["/tags/生活/index.html","5bdae1af8ac7d5e7f0b517b331815cf3"],["/tags/脚本/index.html","afee6e53d65823defd252835ee2d4c77"],["/tags/随笔/index.html","c15b2ae7b477f43de854884c825407d6"],["/tags/静态网站/index.html","b0ed528ae02564a9913154555e48b732"]];
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
