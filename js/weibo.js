function weibo(){let e,i={1:"weibo-boom",2:"weibo-hot",3:"weibo-boil",4:"weibo-new",5:"weibo-recommend",6:"weibo-jyzy",7:"weibo-jyzy",8:"weibo-jyzy"},o='<div id="weibo-container">',t=JSON.parse(localStorage.getItem("weibo")),n=Date.now();if(null==t||n-t.time>6e5)getData();else{e=JSON.parse(t.ls);for(let t of e)o+='<div class="weibo-list-item"><div class="weibo-hotness '+i[t.index]+'">'+t.index+'</div><span class="weibo-title"><a title="'+t.title+'" href="'+t.url+'" target="_blank" rel="external nofollow noreferrer">'+t.title+'</a></span><div class="weibo-num"><span>'+t.hot+"</span></div></div>";o+="</div>",document.getElementById("weiboContent").innerHTML=o}}function getData(){fetch("https://v2.api-m.com/api/weibohot").then((e=>e.json())).then((e=>{1===e.code?(e={time:Date.now(),ls:JSON.stringify(e.data)},localStorage.setItem("weibo",JSON.stringify(e))):console.error("获取数据失败")})).then(weibo)}if(weibo(),document.querySelector("#bber-talk"))var swiper=new swiper(".swiper-container",{direction:"vertical",loop:!0,autoplay:{delay:3e3,pauseOnMouseEnter:!0}});