rm={};let aElements=document.getElementsByTagName("a");for(let e=0;e<aElements.length;e++){aElements[e].setAttribute("draggable","false");let t=aElements[e].getElementsByTagName("img");for(let e=0;e<t.length;e++){t[e].setAttribute("draggable","false")}}rm.showRightMenu=function(e,t=0,n=0){console.info(t,n);let o=document.getElementById("rightMenu");o.style.top=t+"px";o.style.left=n+"px";if(e){o.style.display="block";stopMaskScroll()}else{o.style.display="none"}};rm.hideRightMenu=function(){rm.showRightMenu(false);let e=document.querySelector("#rightmenu-mask");e.style.display="none"};let rmWidth=document.getElementById("rightMenu").offsetWidth;let rmHeight=document.getElementById("rightMenu").offsetHeight;rm.reloadrmSize=function(){rightMenu.style.visibility="hidden";rightMenu.style.display="block";rmWidth=document.getElementById("rightMenu").offsetWidth;rmHeight=document.getElementById("rightMenu").offsetHeight;rightMenu.style.visibility="visible"};let domhref="";let domImgSrc="";let globalEvent=null;var oncontextmenuFunction=function(c){if(document.body.clientWidth>768){let e=c.clientX+10;let t=c.clientY;const l=document.querySelector(".rightMenuOther");const m=document.querySelector(".rightMenuPlugin");const d=document.querySelector("#menu-copytext");const u=document.querySelector("#menu-pastetext");const s=document.querySelector("#menu-commenttext");const r=document.querySelector("#menu-newwindow");const a=document.querySelector("#menu-newwindowimg");const y=document.querySelector("#menu-copylink");const g=document.querySelector("#menu-copyimg");const h=document.querySelector("#menu-downloadimg");const p=document.querySelector("#menu-search");const f=document.querySelector("#menu-searchBaidu");const w=document.querySelector("#menu-music-toggle");const E=document.querySelector("#menu-music-back");const k=document.querySelector("#menu-music-forward");const v=document.querySelector("#menu-music-playlist");const b=document.querySelector("#menu-music-copyMusicName");let n=c.target.href;let o=c.target.currentSrc;let i=false;l.style.display="block";globalEvent=c;if(selectTextNow&&window.getSelection()){i=true;d.style.display="block";s.style.display="block";p.style.display="block";f.style.display="block"}else{d.style.display="none";s.style.display="none";f.style.display="none";p.style.display="none"}if(n){i=true;r.style.display="block";y.style.display="block";domhref=n}else{r.style.display="none";y.style.display="none"}if(o){i=true;g.style.display="block";h.style.display="block";a.style.display="block";document.getElementById("rightMenu").style.width="12rem";domImgSrc=o}else{g.style.display="none";h.style.display="none";a.style.display="none"}if(c.target.tagName.toLowerCase()==="input"||c.target.tagName.toLowerCase()==="textarea"){i=true;u.style.display="block"}else{u.style.display="none"}const B=document.querySelector("#nav-music");if(B&&B.contains(c.target)){i=true;w.style.display="block";E.style.display="block";k.style.display="block";v.style.display="block";b.style.display="block"}else{w.style.display="none";E.style.display="none";k.style.display="none";v.style.display="none";b.style.display="none"}if(i){l.style.display="none";m.style.display="block"}else{m.style.display="none"}rm.reloadrmSize();if(e+rmWidth>window.innerWidth){e-=rmWidth+10}if(t+rmHeight>window.innerHeight){t-=t+rmHeight-window.innerHeight}rm.showRightMenu(true,t,e);document.getElementById("rightmenu-mask").style.display="flex";return false}};window.oncontextmenu=oncontextmenuFunction;rm.downloadimging=false;rm.writeClipImg=function(e){console.log("按下复制");rm.hideRightMenu();anzhiyu.snackbarShow("正在下载中，请稍后",false,1e4);if(rm.downloadimging==false){rm.downloadimging=true;setTimeout(function(){copyImage(e);anzhiyu.snackbarShow("复制成功！图片已添加盲水印，请遵守版权协议");rm.downloadimging=false},"10000")}};function imageToBlob(e){const n=new Image;const o=document.createElement("canvas");const i=o.getContext("2d");n.crossOrigin="";n.src=e;return new Promise(t=>{n.onload=function(){o.width=this.naturalWidth;o.height=this.naturalHeight;i.drawImage(this,0,0);o.toBlob(e=>{t(e)},"image/png",.75)}})}async function copyImage(e){const t=await imageToBlob(e);const n=new ClipboardItem({"image/png":t});navigator.clipboard.write([n])}rm.copyUrl=function(e){const t=document.createElement("input");t.id="copyVal";document.body.appendChild(t);const n=e;t.value=n;t.select();t.setSelectionRange(0,t.value.length);document.execCommand("copy");t.remove()};function stopMaskScroll(){if(document.getElementById("rightmenu-mask")){let e=document.getElementById("rightmenu-mask");e.addEventListener("mousewheel",function(e){rm.hideRightMenu()},{passive:true})}if(document.getElementById("rightMenu")){let e=document.getElementById("rightMenu");e.addEventListener("mousewheel",function(e){rm.hideRightMenu()},{passive:true})}}rm.rightmenuCopyText=function(e){if(navigator.clipboard){navigator.clipboard.writeText(e)}rm.hideRightMenu()};rm.copyPageUrl=function(e){if(!e){e=window.location.href}rm.copyUrl(e);anzhiyu.snackbarShow("复制链接地址成功",false,2e3);rm.hideRightMenu()};var selectTextNow="";document.onmouseup=document.ondblclick=selceText;function selceText(){var e;if(document.selection){e=document.selection.createRange().text}else{e=window.getSelection().toString()}selectTextNow=e!==""?e:""}rm.readClipboard=function(){if(navigator.clipboard){navigator.clipboard.readText().then(e=>rm.insertAtCaret(globalEvent.target,e))}};rm.insertAtCaret=function(e,t){const n=e.selectionStart,o=e.selectionEnd;if(document.selection){e.focus();var i=document.selection.createRange();i.text=t;e.focus()}else{if(n||n=="0"){var c=e.scrollTop;e.value=e.value.substring(0,n)+t+e.value.substring(o,e.value.length);e.focus();e.selectionStart=n+t.length;e.selectionEnd=n+t.length;e.scrollTop=c}else{e.value+=t;e.focus()}}};rm.pasteText=function(){const e=rm.readClipboard()||"";rm.hideRightMenu()};rm.rightMenuCommentText=function(o){rm.hideRightMenu();const e=document.getElementById("post-comment");var t=e.offsetTop;window.scrollTo(0,t-80);if(o=="undefined"||o=="null")o="好棒！";function i(){setTimeout(()=>{var e=document.getElementsByClassName("el-textarea__inner")[0];if(!e)i();let t=document.createEvent("HTMLEvents");t.initEvent("input",true,true);let n=replaceAll(o,"\n","\n> ");e.value="> "+n+"\n\n";e.dispatchEvent(t);e.focus();e.setSelectionRange(-1,-1);if(document.getElementById("comment-tips")){document.getElementById("comment-tips").classList.add("show")}},100)}i()};function replaceAll(e,t,n){return e.split(t).join(n)}rm.searchBaidu=function(){anzhiyu.snackbarShow("即将跳转到百度搜索",false,2e3);setTimeout(function(){window.open("https://www.baidu.com/s?wd="+selectTextNow)},"2000");rm.hideRightMenu()};rm.copyLink=function(){rm.rightmenuCopyText(domhref);anzhiyu.snackbarShow("已复制链接地址")};function addRightMenuClickEvent(){document.getElementById("menu-backward").addEventListener("click",function(){window.history.back();rm.hideRightMenu()});document.getElementById("menu-forward").addEventListener("click",function(){window.history.forward();rm.hideRightMenu()});document.getElementById("menu-refresh").addEventListener("click",function(){window.location.reload()});document.getElementById("menu-top").addEventListener("click",function(){anzhiyu.scrollToDest(0,500);rm.hideRightMenu()});document.getElementById("menu-translate").addEventListener("click",function(){window.translateFn.translatePage();rm.hideRightMenu()});const e=document.querySelectorAll(".menu-link");e.forEach(function(e){e.addEventListener("click",rm.hideRightMenu)});document.getElementById("menu-home")&&document.getElementById("menu-home").addEventListener("click",function(){window.location.href=window.location.origin});document.getElementById("menu-randomPost").addEventListener("click",function(){toRandomPost()});document.getElementById("menu-commentBarrage").addEventListener("click",anzhiyu.switchCommentBarrage);document.getElementById("rightmenu-mask").addEventListener("click",rm.hideRightMenu);document.getElementById("rightmenu-mask").addEventListener("contextmenu",function(e){rm.hideRightMenu();e.preventDefault()});document.getElementById("menu-copy").addEventListener("click",()=>{rm.copyPageUrl()});document.getElementById("menu-pastetext").addEventListener("click",rm.pasteText);document.getElementById("menu-copytext").addEventListener("click",function(){rm.rightmenuCopyText(selectTextNow);const e=GLOBAL_CONFIG.copyright;if(e.copy){anzhiyu.snackbarShow(e.languages.copySuccess)}});document.getElementById("menu-commenttext").addEventListener("click",function(){rm.rightMenuCommentText(selectTextNow)});document.getElementById("menu-newwindow").addEventListener("click",function(){window.open(domhref,"_blank");rm.hideRightMenu()});document.getElementById("menu-copylink").addEventListener("click",rm.copyLink);document.getElementById("menu-downloadimg").addEventListener("click",function(){anzhiyu.downloadImage(domImgSrc,"anzhiyu")});document.getElementById("menu-newwindowimg").addEventListener("click",function(){window.open(domImgSrc,"_blank");rm.hideRightMenu()});document.getElementById("menu-copyimg").addEventListener("click",function(){rm.writeClipImg(domImgSrc)});document.getElementById("menu-searchBaidu").addEventListener("click",rm.searchBaidu);document.getElementById("menu-music-toggle").addEventListener("click",anzhiyu.musicToggle);document.getElementById("menu-music-back").addEventListener("click",anzhiyu.musicSkipBack);document.getElementById("menu-music-forward").addEventListener("click",anzhiyu.musicSkipForward);document.getElementById("menu-music-copyMusicName").addEventListener("click",function(){rm.rightmenuCopyText(anzhiyu.musicGetName());anzhiyu.snackbarShow("复制歌曲名称成功",false,3e3)})}addRightMenuClickEvent();