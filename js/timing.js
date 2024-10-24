let oSpan = document.getElementsByTagName("timing")[0];
let localhostTime = new Date();

// 获取开始计时的时间（从localStorage中获取）
function getStartTime() {
    let savedTime = localStorage.getItem('startTime');
    if (savedTime) {
        return new Date(savedTime);
    }
    return new Date();
}

// 存储当前时间为开始计时时间
function setStartTime() {
    let currentTime = new Date();
    localStorage.setItem('startTime', currentTime);
    return currentTime;
}

// 如果sessionStorage中有isNewSession，表示不是重新访问
if (!sessionStorage.getItem('isNewSession')) {
    // 新访问，刷新页面会更新时间
    localhostTime = setStartTime();
    sessionStorage.setItem('isNewSession', 'true'); // 标记会话活跃
} else {
    // 继续访问，不更新时间
    localhostTime = getStartTime();
}

function tow(n) {
    return n >= 0 && n < 10 ? '0' + n : '' + n;
}

setInterval(function () {
    let goTime = new Date(); // 获取动态时间
    let diffTime = goTime.getTime() - localhostTime.getTime();
    var second = Math.floor(diffTime / 1000); // 总秒数
    var hour = Math.floor(second / 3600); // 小时
    second %= 3600;
    var minute = Math.floor(second / 60); // 分钟
    second %= 60;

    // 构建时间字符串
    var str = tow(hour) + '<span class="time">小时</span>'
        + tow(minute) + '<span class="time">分钟</span>'
        + tow(second) + '<span class="time">秒</span>';

    oSpan.innerHTML = <b> 友情提示🎉：</b> + "您已浏览网页 " + str;
}, 1000);

// 页面关闭时清除sessionStorage标记，以便下次重新访问重新计时
window.addEventListener('beforeunload', function () {
    sessionStorage.removeItem('isNewSession');
});
