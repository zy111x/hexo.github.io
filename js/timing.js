const startTimer = () => {
    const oSpan = document.getElementsByTagName("timing")[0];
    let startTime = localStorage.getItem("startTime"); // 从 localStorage 获取开始时间
    let totalElapsedTime = parseInt(localStorage.getItem("elapsedTime") || "0"); // 获取累计时间
    const currentTime = new Date().getTime(); // 当前时间
  
    if (!startTime) {
        // 如果没有记录起始时间，设置当前时间为起始时间
        startTime = currentTime;
        localStorage.setItem("startTime", startTime);
    } else {
        // 计算离开网页时的时间差
        totalElapsedTime += (currentTime - startTime);
        localStorage.setItem("elapsedTime", totalElapsedTime); // 更新累计时间
    }
  
    function tow(n) {
        return n >= 0 && n < 10 ? '0' + n : '' + n;
    }
  
    setInterval(function () {
        const elapsed = totalElapsedTime + (new Date().getTime() - startTime); // 计算总的浏览时间
        let second = Math.floor(elapsed / 1000); // 转换为秒
        let hour = Math.floor(second / 3600); // 小时
        second %= 3600; // 剩余秒数
        let minute = Math.floor(second / 60); // 分钟
        second %= 60; // 剩余秒数
        
        const str = tow(hour) + '<span class="time">小时</span>' 
                    + tow(minute) + '<span class="time">分钟</span>' 
                    + tow(second) + '<span class="time">秒</span>';
        
        oSpan.innerHTML = <b>友情提示🥳：</b> + "友情提示您已浏览网页" + str;; // 更新显示计时器
    }, 1000);
  
    // 当页面卸载时，清除计时记录
    window.onbeforeunload = () => {
        localStorage.removeItem("startTime");
        localStorage.removeItem("elapsedTime");
    };
  };
  