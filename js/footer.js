function initFooterAnimal(){const n=document.querySelector("#footer-bar");if(!n)return console.error("找不到指定元素");const e=document.createElement("div");e.id="footer-animal",e.innerHTML='\n        <img class="animal entered loaded"\n            src="https://i1.wp.com/ruom.wuaze.com/i/2024/10/19/473503.webp"\n            alt="动物" />\n    ',n.insertAdjacentElement("beforebegin",e);const t=document.createElement("style");t.textContent="\n        #footer-animal {\n            position: relative;\n        }\n        #footer-animal::before {\n            content: '';\n            position: absolute;\n            bottom: 0;\n            width: 100%;\n            height: 36px;\n            background: url(https://i1.wp.com/ruom.wuaze.com/i/2024/10/19/351933.webp) repeat center / auto 100%;\n            box-shadow: 0 4px 7px rgba(0,0,0,.15);\n        }\n        .animal {\n            position: relative;\n            max-width: min(974px, 100vw);\n            margin: 0 auto;\n            display: block;\n        }\n        #footer-bar {\n            margin-top: 0 !important;\n        }\n        @media screen and (max-width: 1023px) {\n            #footer-animal::before {\n                height: 4vw;\n            }\n        }\n        [data-theme=dark] #footer-animal {\n            filter: brightness(.8);\n        }\n    ",document.head.appendChild(t)}document.addEventListener("DOMContentLoaded",initFooterAnimal),document.addEventListener("pjax:success",initFooterAnimal);