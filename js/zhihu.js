fetch("https://api.gmit.vip/Api/ZhiHuHot?format=json").then(t=>t.json()).then(i=>{let e="";e+='<div class="zhihu-list">';var h=1;for(let t of i.data){e+='<div class="zhihu-list-item"><div class="zhihu-hotness">'+h+"</div>"+'<span class="zhihu-title"><a title="'+t.title+'"href="'+t.url+'" target="_blank" rel="external nofollow noreferrer">'+t.title+"</a></span>"+'<div class="zhihu-hot"><span>'+t.hot+"</span></div></div>";h++}e+="</div>";document.getElementById("zhihu-container").innerHTML=e}).catch(function(t){console.log(t)});