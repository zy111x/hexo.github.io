!function(){class e{constructor(e,t){this.smallSrc=e,this.largeSrc=t,this.initTpl(),this.container.addEventListener("animationend",(()=>{this.smallStage.style.display="none"}),{once:!0})}initTpl(){this.container=document.createElement("div"),this.smallStage=document.createElement("div"),this.largeStage=document.createElement("div"),this.smallImg=new Image,this.largeImg=new Image,this.container.className="pl-container",this.smallStage.className="pl-img pl-blur",this.largeStage.className="pl-img",this.container.appendChild(this.smallStage),this.container.appendChild(this.largeStage),this.smallImg.onload=this._onSmallLoaded.bind(this),this.largeImg.onload=this._onLargeLoaded.bind(this)}progressiveLoad(){this.smallImg.src=this.smallSrc,this.largeImg.src=this.largeSrc}_onLargeLoaded(){this.largeStage.classList.add("pl-visible"),this.largeStage.style.backgroundImage=`url('${this.largeSrc}')`}_onSmallLoaded(){this.smallStage.classList.add("pl-visible"),this.smallStage.style.backgroundImage=`url('${this.smallSrc}')`}}const t={light:{smallSrc:"/img/bg2_80kbver.jpg",largeSrc:"/img/bg2.jpg",mobileSmallSrc:"/img/bg2_80kbver.jpg",mobileLargeSrc:"/img/bg2.jpg",enableRoutes:["/"]},dark:{smallSrc:"/img/bg1_80kbver.jpg",largeSrc:"/img/bg1.jpg",mobileSmallSrc:"/img/bg1_80kbver.jpg",mobileLargeSrc:"/img/bg1.jpg",enableRoutes:["/"]}},a=()=>document.documentElement.getAttribute("data-theme");let l=a();s(t[l]);const i=new MutationObserver((e=>{e.forEach((e=>{"data-theme"===e.attributeName&&"/"===location.pathname&&(()=>{const e=a(),l=t[e];s(l),document.addEventListener("DOMContentLoaded",(function(){s(l)})),document.addEventListener("pjax:complete",(function(){!function(e){const t=document.getElementById("page-header");t&&t.classList.contains("full_page")&&s(e)}(l)}))})()}))}));function s(t){const a=document.querySelector(".pl-container");a&&a.remove();const l=document.getElementById("page-header");l&&l.classList.contains("full_page")&&((t,a)=>{console.log("执行渐进背景替换");const l=window.matchMedia("(max-width: 767px)").matches,i=new e(l?t.mobileSmallSrc:t.smallSrc,l?t.mobileLargeSrc:t.largeSrc);a.children[0]&&a.insertBefore(i.container,a.children[0]),i.progressiveLoad()})(t,l)}i.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]})}();