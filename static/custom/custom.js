const allowedDomains=["localhost","blog.bsgun.cn","blog.ruom.top","ruom.netlify.app","jlinmr.github.io"];if(!allowedDomains.includes(document.domain)){Snackbar.show({text:decodeURI("您现在处于恶意镜像站中,即将跳转回源站!"),pos:"top-center",actionText:"确定",duration:5e3,onActionClick:()=>window.location.href="https://blog.bsgun.cn"});setTimeout(()=>window.location.href="https://blog.bsgun.cn",5e3)}function initFooterAnimal(){const e=document.querySelector("#footer-bar");if(!e)return console.error("找不到指定元素");const o=document.createElement("div");o.id="footer-animal";o.innerHTML=`
        <img class="animal entered loaded"
            src="https://i1.wp.com/ruom.wuaze.com/i/2024/10/19/473503.webp"
            alt="动物" />
    `;e.insertAdjacentElement("beforebegin",o);const t=document.createElement("style");t.textContent=`
        #footer-animal {
            position: relative;
        }
        #footer-animal::before {
            content: '';
            position: absolute;
            bottom: 0;
            width: 100%;
            height: 36px;
            background: url(https://i1.wp.com/ruom.wuaze.com/i/2024/10/19/351933.webp) repeat center / auto 100%;
            box-shadow: 0 4px 7px rgba(0,0,0,.15);
        }
        .animal {
            position: relative;
            max-width: min(974px, 100vw);
            margin: 0 auto;
            display: block;
        }
        #footer-bar {
            margin-top: 0 !important;
        }
        @media screen and (max-width: 1023px) {
            #footer-animal::before {
                height: 4vw;
            }
        }
        [data-theme=dark] #footer-animal {
            filter: brightness(.8);
        }
    `;document.head.appendChild(t)}document.addEventListener("DOMContentLoaded",initFooterAnimal);document.addEventListener("pjax:success",initFooterAnimal);