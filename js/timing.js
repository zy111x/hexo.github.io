let oSpan=document.getElementsByTagName("timing")[0];let localhostTime=new Date;function tow(t){return t>=0&&t<10?"0"+t:""+t}setInterval(function(){let t=new Date;let e=t.getTime()-localhostTime.getTime();var a=Math.floor(e/1e3);var n=Math.floor(a/86400);a=a%86400;var o=Math.floor(a/3600);a%=3600;var l=Math.floor(a/60);a%=60;var s=tow(o)+'<span class="time">小时</span>'+tow(l)+'<span class="time">分钟</span>'+tow(a)+'<span class="time">秒</span>';oSpan.innerHTML="您已浏览网页"+s},1e3);