function getDistance(e,a,s,c){const{sin:r,cos:t,asin:o,PI:i,hypot:n}=Math;let b=(e,a)=>(e*=i/180,{x:t(a*=i/180)*t(e),y:t(a)*r(e),z:r(a)}),k=b(e,a),p=b(s,c),l=2*o(n(k.x-p.x,k.y-p.y,k.z-p.z)/2)*6371;return Math.round(l)}function showWelcome(){let e,a,s,c=getDistance(121.524012,38.882522,ipLocation.result.location.lng,ipLocation.result.location.lat),r=ipLocation.result.ad_info.nation;switch(ipLocation.result.ad_info.nation){case"日本":a="よろしく，一起去看樱花吗";break;case"美国":a="Let us live in peace!";break;case"英国":a="想同你一起夜乘伦敦眼";break;case"俄罗斯":a="干了这瓶伏特加！";break;case"法国":a="C'est La Vie";break;case"德国":a="Die Zeit verging im Fluge.";break;case"澳大利亚":a="一起去大堡礁吧！";break;case"加拿大":a="拾起一片枫叶赠予你";break;case"中国":switch(r=ipLocation.result.ad_info.province+" "+ipLocation.result.ad_info.city+" "+ipLocation.result.ad_info.district,e=ipLocation.result.ip,ipLocation.result.ad_info.province){case"北京市":a="北——京——欢迎你~~~";break;case"天津市":a="讲段相声吧";break;case"河北省":a="山势巍巍成壁垒，天下雄关铁马金戈由此向，无限江山";break;case"山西省":a="展开坐具长三尺，已占山河五百余";break;case"内蒙古自治区":a="天苍苍，野茫茫，风吹草低见牛羊";break;case"辽宁省":a="我想吃烤鸡架！";break;case"吉林省":a="状元阁就是东北烧烤之王";break;case"黑龙江省":a="很喜欢哈尔滨大剧院";break;case"上海市":a="众所周知，中国只有两个城市";break;case"江苏省":switch(ipLocation.result.ad_info.city){case"南京市":a="这是我挺想去的城市啦";break;case"苏州市":a="上有天堂，下有苏杭";break;default:a="散装是必须要散装的"}break;case"浙江省":a="东风渐绿西湖柳，雁已还人未南归";break;case"河南省":switch(ipLocation.result.ad_info.city){case"郑州市":a="豫州之域，天地之中";break;case"南阳市":a="臣本布衣，躬耕于南阳此南阳非彼南阳！";break;case"驻马店市":a="峰峰有奇石，石石挟仙气嵖岈山的花很美哦！";break;case"开封市":a="刚正不阿包青天";break;case"洛阳市":a="洛阳牡丹甲天下";break;default:a="可否带我品尝河南烩面啦？"}break;case"安徽省":a="蚌埠住了，芜湖起飞";break;case"福建省":a="井邑白云间，岩城远带山";break;case"江西省":a="落霞与孤鹜齐飞，秋水共长天一色";break;case"山东省":a="遥望齐州九点烟，一泓海水杯中泻";break;case"湖北省":a="黄冈市"===ipLocation.result.ad_info.city?"红安将军县！辈出将才！":"来碗热干面~";break;case"湖南省":a="74751，长沙斯塔克";break;case"广东省":switch(ipLocation.result.ad_info.city){case"广州市":a="看小蛮腰，喝早茶了嘛~";break;case"深圳市":a="今天你逛商场了嘛~";break;case"阳江市":a="阳春合水！博主家乡~ 欢迎来玩~";break;default:a="来两斤福建人~"}break;case"广西壮族自治区":a="桂林山水甲天下";break;case"海南省":a="朝观日出逐白浪，夕看云起收霞光";break;case"四川省":a="康康川妹子";break;case"贵州省":a="茅台，学生，再塞200";break;case"云南省":a="玉龙飞舞云缠绕，万仞冰川直耸天";break;case"西藏自治区":a="躺在茫茫草原上，仰望蓝天";break;case"陕西省":a="来份臊子面加馍";break;case"甘肃省":a="羌笛何须怨杨柳，春风不度玉门关";break;case"青海省":a="牛肉干和老酸奶都好好吃";break;case"宁夏回族自治区":a="大漠孤烟直，长河落日圆";break;case"新疆维吾尔自治区":a="驼铃古道丝绸路，胡马犹闻唐汉风";break;case"台湾省":a="我在这头，大陆在那头";break;case"香港特别行政区":a="永定贼有残留地鬼嚎，迎击光非岁玉";break;case"澳门特别行政区":a="性感荷官，在线发牌";break;default:a="带我去你的城市逛逛吧！"}break;default:a="带我去你的国家逛逛吧"}let t=new Date;s=t.getHours()>=5&&t.getHours()<11?"<span>🌤️ 早上好，一日之计在于晨</span>":t.getHours()>=11&&t.getHours()<13?"<span>☀️ 中午好，记得午休喔~</span>":t.getHours()>=13&&t.getHours()<17?"<span>🕞 下午好，饮茶先啦！</span>":t.getHours()>=17&&t.getHours()<19?"<span>🚶‍♂️ 即将下班，记得按时吃饭~</span>":t.getHours()>=19&&t.getHours()<24?"<span>🌙 晚上好，夜生活嗨起来！</span>":"夜深了，早点休息，少熬夜",e.includes(":")&&(e="<br>好复杂，咱看不懂~(ipv6)");try{document.getElementById("welcome-info").innerHTML=`欢迎来自 <b><span style="color: var(--kouseki-ip-color);font-size: var(--kouseki-gl-size)">${r}</span></b> 的小友💖<br>${a}🍂<br>当前位置距博主约 <b><span style="color: var(--kouseki-ip-color)">${c}</span></b> 公里！<br>您的IP地址为：<b><span>${e}</span></b><br>${s} <br>`}catch(c){console.log("Pjax无法获取元素")}}$.ajax({type:"get",url:"https://apis.map.qq.com/ws/location/v1/ip",data:{key:"QOVBZ-SUPKT-2V4XC-V5A4R-FEHSE-X7FTV",output:"jsonp"},dataType:"jsonp",success:function(e){ipLocation=e}}),window.onload=showWelcome,document.addEventListener("pjax:complete",showWelcome);