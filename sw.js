/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2020/用batocera搭建属于你的游戏天地/index.html","68afd391b29998de8213ab7ab63fa9c8"],["/2021/vm虚拟机安装甜糖及配置教程/index.html","f8d575ad38cad8d400bf4c74f0b406fc"],["/2021/为Stellar主题添加HPP说说功能/index.html","620246e7ce5f87e6a0b87ac568650769"],["/2021/优化Oneindex的nexmoe主题的加载速度/index.html","f3a46161d898b98dcd2516509806be9f"],["/2021/把玩intel的开发服务器/index.html","c2470a3e1a86ffb1097b9da391a690dd"],["/2021/搭建Teambition网盘的目录索引/index.html","19b1de54570ff9e548fa7114c0afeb72"],["/2021/解决Cloudflare-Wrangler无法获取授权/index.html","64dc90ceba8146bd10bedb5d159e3bef"],["/2021/解决VSCode安装Go扩展报错/index.html","7a7ead0fbba97f9154de5ba9ca25116c"],["/2021/解决小米手机升级MIUI12-5后无法进入谷歌商店/index.html","e1db67fc890cd28554eec3cd46f6eee9"],["/2021/记一次简单的水卡破解/index.html","a425907ad6c3a0cbacad077c063f3104"],["/2021/高质量地从ico转为svg/index.html","44730b08b13a6520f196c566f2149a53"],["/404.html","31c861058dc51219cd0c9eb163bb5153"],["/about/index.html","0b06085e88174e430304c6c94a259922"],["/archives/2020/11/index.html","58f0e644bc8c5ef950a8bd618bc32e42"],["/archives/2020/index.html","0acd4056267d6f3695262e03af285af2"],["/archives/2021/01/index.html","5d2322b5188fe563dae78ad5a8933415"],["/archives/2021/02/index.html","7649f84a03705e58a7b4e280d12285db"],["/archives/2021/04/index.html","910a5b85a43d86bd3c60bcf6ad7f0aab"],["/archives/2021/05/index.html","513099a23b2149da9091357f5ccb9b53"],["/archives/2021/06/index.html","8335f67c38f00ed76abd4779fdfe5a2f"],["/archives/2021/07/index.html","74b2704d1dea43693e2a687501bf97ae"],["/archives/2021/08/index.html","0839c0bd9ff8bb488d8c28a73c1a8dcd"],["/archives/2021/index.html","51b0b417438f7ca66deec6dab20a361f"],["/archives/index.html","143b77784150765d1ff18f37d6a425bc"],["/archives/page/2/index.html","4869081e89aa1627a67c591761b04ee7"],["/assets/js/DPlayer.min.js","472552604f19815d0a634bd3d953171e"],["/css/main.css","52c01ab14e7dace760d6c98e4ae70778"],["/friends/index.html","9091d9d6f0885f75d8e51c232650876c"],["/htalk/index.html","a14caee33117c8d732dc984d2bc8f50e"],["/img/avatar.png","2d9aa61e592b26e2745f3c161c48c397"],["/img/cookapk.png","f52ac3bb41a4bb050c683590efe0d804"],["/img/default.png","cbecf637ecf1059c2ff594cc419a04f9"],["/img/links/c4at.png","78068e91693b990c5cc8686acd146424"],["/img/loading.gif","15657539044e11a19a1c6c7e3073d1b3"],["/img/mcbed.png","d319cb6e47fc0b0758f3b0d53176eb95"],["/img/music/109951165099284336.jpg","6a672f7c423827e6203fc69ffcbea005"],["/img/music/109951165424074168.jpg","e85b4ee8bf900fb6f04691fbcaeaf68d"],["/img/music/3382097775018074.jpg","d476a079e1ca75057445596d2eb9befb"],["/img/music/zafewaeswfaewgf.png","8c6b072562798490a282cfe6518a73f9"],["/img/police_beian.png","b769e8dfde5660239317ed60758dba13"],["/img/satus.png","fdaf80b616fa2b7f96498043e5b21dc3"],["/index.html","b6cc838c28075ec7707245d9446b7b61"],["/js/Artalk.js","e4da76fbc665338ca9fb90f30e97489e"],["/js/artalkconfig.js","1d320b23ebdf4735b9ef6960797f6159"],["/js/artalkconfig1.js","7503a7c99db1a8d9f7a5ecdbc25b754d"],["/js/main.js","b2ac72c84448bfdb212e14439e573750"],["/js/plugins/friends.js","4cc40c80b253a51a4c9f4e529a0c3bd5"],["/js/plugins/sites.js","c4dadeae73ba8b89d8a22257c323188e"],["/js/search.js","b2cb417dada66d99255ed5b9ee9de042"],["/js/szgotop.js","ad6c25e2288060bb590733c48376fe24"],["/morecss/main.css","cffa09da6a7b634c97d6f20ee99e97bf"],["/morecss/search.css","78eff3946d789a1028e6d246a815b8da"],["/morecss/szgotop.css","cfb2f0fc0776c94ef6f578a5ea46be47"],["/page/2/index.html","35a5e2d6441282e89e2026e3b0c843fa"],["/say/index.html","ba955abd03d8e4e1b45ca9ad6bfa32f2"],["/sw-register.js","d1fe7cac6223d6d7a34a78759f0ac21e"],["/tags/Clouddlare/index.html","7c7d2a72f3d9c3485d7683c6c01a1e95"],["/tags/Go/index.html","8d5224d015d555d20705b94166eb411e"],["/tags/Intel/index.html","b5cba8b44746d54debc88fac31977700"],["/tags/MIUI/index.html","63f35cc670c9f78ae7691eb83c5f9209"],["/tags/blog/index.html","53ffa76e4ae06644c9b76bd3f1b40704"],["/tags/free/index.html","3b248f28d1bad92b4adcc5ff8aa3b2ec"],["/tags/index.html","0176b8de79beed5c3547c43aba9baa7f"],["/tags/linux/index.html","0e3ab9ffd4dd70968da4449afd54941a"],["/tags/oneindex/index.html","db4fa7af6f70e0ee80c9cce25e3dc4e4"],["/tags/web/index.html","2b0129bf50c35dd8fb0344d75800845e"],["/tags/甜糖/index.html","615349d87c71139c968fd77801db5516"],["/tags/网站/index.html","ec725deaff430e06c8779aa9e47f066b"],["/tags/转换/index.html","6536d1c751259786a7f57f890bd5d25d"],["/tools/ghcdn/css.css","c524d532668017eb3a7942d92ad14970"],["/tools/ghcdn/index.css","e55ac7877e073d24f94451d9dfd942db"],["/tools/ghcdn/index.html","a04781ed135e85f537f159ecfd361fb7"],["/tools/ghcdn/scrollspy.min.js","4544c47370f4b13f31311969b80d416a"],["/tools/ghcdn/skrollr.min.js","b1f41260da79657330190e2d37cfb4cb"],["/update/index.html","df01ce8f8d1a68c69c0dbeb3962add18"],["/wiki/Artalk/API/index.html","b8025123b2fc2973e86a8f3ab980fe2e"],["/wiki/Artalk/QandA/index.html","8e9534b4c60e38bed2994d0f292b6405"],["/wiki/Artalk/develop/index.html","67ced709a12ddd9ff59614921fbe411c"],["/wiki/Artalk/index.html","37c1619d4809cfedc535d35cc38ecf2e"],["/wiki/Artalk/install-go/index.html","57373f24565c9090d90fa9a628f2f9fe"],["/wiki/Artalk/install/index.html","b00ae294758572669d72cadada19ec03"],["/wiki/Artalk/more-url/index.html","40097e99b0a6e0bff622c73db9ead628"],["/wiki/Artalk/play/index.html","5ec6ded5a1e48897d0f5d0b4e42db0b1"],["/wiki/Artalk/use/index.html","aea9afb8b74c073c3e4309c3548a5354"],["/wiki/index.html","f7f980c149495088e70a66010c9983f5"],["/wiki/杂物间/camc.html","0ac622348f123976278afeadf34a6857"],["/wiki/杂物间/index.html","5f1ae2d2451902d4162f957e3aa6872c"],["/wiki/杂物间/old-pages/Free Minecraft Dungeons.html","3da7a1cef8f5a7647fa94e52459dddf8"],["/wiki/杂物间/old-pages/GitHub打不开的临时方法.html","57bc969a85267a5511c186b796bc1ea6"],["/wiki/杂物间/old-pages/hexo更新pages出错应急方法.html","474f92d434e51377b65b08d9dca2a4c3"],["/wiki/杂物间/old-pages/index.html","e724982f0ec92c3af2d6f4cec4cd409b"],["/wiki/杂物间/old-pages/免费游玩《戴森球计划》.html","6c83ebfe9bfbfd2792baf5662efeb6ca"],["/wiki/杂物间/old-pages/定时关机.html","6a6dc9f162a1b850e900d7b47d4a6a2b"],["/wiki/杂物间/old-pages/弹出C盘の快乐.html","6c76c9dc44cc88bc6d0d0ef2174823ba"],["/wiki/杂物间/old-pages/杂物.html","75348d3b073c9850235c461f6ad7bcb7"],["/wiki/杂物间/old-pages/来在MC里玩电脑.html","e84252cb186f976b9ea104e68b563ae8"],["/wiki/杂物间/old-pages/现已通过myssl认证.html","bdcba9dfd5d991899101d4c8b9c3c4e0"]];
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
