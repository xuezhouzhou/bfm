document.ontouchmove = function(e){ e.preventDefault();}
document.documentElement.style.webkitTouchCallout = "none";

(function($){


//魅力值
var mlz = 20;

//气球动画时间
var qqTime = 300;

//记录用户每部选择的选项
var step = [];

//第1题
var que1Data = {
  'queNum':'1',
  'queText':'18生日寿宴<img src="images/emoji-1.png"><img src="images/emoji-1.png">妈咪给了我500块<img src="images/emoji-2.png">自由发挥，揣着五张毛爷爷想想还有点小激动呢！！',
  'anAtext':'<p class="line3">买一条 blingbling 项链作为18岁的礼物<img src="images/emoji-3.png">“跟着我左手右手，一个慢动作”</p>',
  'anBtext':'<p class="line2">生日PA一定要打扮得美美美<img src="images/emoji-4.png">买条漂亮的<img src="images/emoji-5.png">吧</p>',
  'anCtext':'<p class="line2">妈妈从小对我说，勤俭节约是美德，红票子存<img src="images/emoji-6.png">起来~</p>',
  'anAdataKey':'que1-an-a',
  'anBdataKey':'que1-an-b',
  'anCdataKey':'que1-an-c',
  'anAdataMlz':'+10',
  'anBdataMlz':'+10',
  'anCdataMlz':'+5',
  'type':'text',
  'anNum':3
};

//第2题
var que2Data = {
  'queNum':'2',
  'queText':'人生就如此的幸运<img src="images/emoji-7.png">谁都不要羡慕我~ 竟然和青梅竹马的李小仁考上了同一所大学<img src="images/emoji-8.png">今天是报道第一天...',
  'anAtext':'<p class="line2">小学妹要配萌萌哒小裙子，箱子什么的就交给学长啦<img src="images/emoji-9.png"></p>',
  'anBtext':'<p class="line2">说好的青梅竹马<img src="images/emoji-10.png">当然要穿同款T恤</p>',
  'anCtext':'<p class="line2">“大河向东流啊”卷起裤脚管<img src="images/emoji-11.png"><img src="images/emoji-11.png">行李箱肩上扛。</p>',
  'anAdataKey':'que2-an-a',
  'anBdataKey':'que2-an-b',
  'anCdataKey':'que2-an-c',
  'anAdataMlz':'+10',
  'anBdataMlz':'+5',
  'anCdataMlz':'-5',
  'type':'text',
  'anNum':3
}

//第3题
var que3Data = {
  'queNum':'3',
  'queText':'在一个月黑风高的夜晚<img src="images/emoji-12.png">小仁打电话叫我下楼...',
  'anAtext':'<p class="line2">小鹿乱撞少女怀春<img src="images/emoji-7.png"><img src="images/emoji-13.png">换上蕾丝小连衣裙<img src="images/emoji-14.png">娇羞扭捏地下楼去。</p>',
  'anBtext':'<p class="line2">跟好兄弟夜宵撸串<img src="images/emoji-15.png"><img src="images/emoji-16.png"><img src="images/emoji-17.png">必备宽松大T恤！</p>',
  'anCtext':'<p class="line2">只是下楼拿外卖<img src="images/emoji-18.png"><img src="images/emoji-18.png">睡衣就好啦...</p>',
  'anAdataKey':'que3-an-a',
  'anBdataKey':'que3-an-b',
  'anCdataKey':'que3-an-c',
  'anAdataMlz':'+10',
  'anBdataMlz':'+0',
  'anCdataMlz':'-5',
  'type':'text',
  'anNum':3
}

//第4题 甲
var que4aData = {
  'queNum':'4a',
  'queText':'夏天夏天悄悄过去留下小秘密<img src="images/emoji-19.png"><img src="images/emoji-19.png">就这样展开了我们的甜蜜爱恋<img src="images/emoji-20.png">好期待第一次约会~该穿什么好呢<img src="images/emoji-21.png">',
  'anAtext':'<img src="images/ques-4a-a.png">',
  'anBtext':'<img src="images/ques-4a-b.png">',
  'anCtext':'<img src="images/ques-4a-c.png">',
  'anAdataKey':'que4a-an-a',
  'anBdataKey':'que4a-an-b',
  'anCdataKey':'que4a-an-c',
  'anAdataMlz':'+10',
  'anBdataMlz':'-5',
  'anCdataMlz':'+0',
  'type':'pic',
  'anNum':3
}

//第4题 乙
var que4bData = {
  'queNum':'4b',
  'queText':'我和小仁终究还是渐行渐远<img src="images/emoji-22.png"><img src="images/emoji-23.png">接下来孤身一人闯江湖，一大波社团面试正在接近<img src="images/emoji-24.png">怎么穿<img src="images/emoji-21.png">',
  'anAtext':'<img src="images/ques-4b-a.png">',
  'anBtext':'<img src="images/ques-4b-b.png">',
  'anCtext':'<img src="images/ques-4a-c.png">',//与4甲C选项相同
  'anAdataKey':'que4b-an-a',
  'anBdataKey':'que4b-an-b',
  'anCdataKey':'que4b-an-c',
  'anAdataMlz':'+0',
  'anBdataMlz':'+10',
  'anCdataMlz':'+5',
  'type':'pic',
  'anNum':3
}

//第5题 甲
var que5aData = {
  'queNum':'5a',
  'queText':'大学生活远比想象中五光十色丰富多彩<img src="images/emoji-25.png">小仁参加了学生会叫我一起去...',
  'anAtext':'<p class="line2">我只想安静低调地当个小学妹，默默陪伴<img src="images/emoji-26.png">小仁<img src="images/emoji-26.png"></p>',
  'anBtext':'<p class="line1">我和小仁是CP<img src="images/emoji-27.png">情侣装穿起来</p>',
  'anCtext':'<p class="line2">不喜欢学生会的氛围<img src="images/emoji-28.png">就是任性，不想去<img src="images/emoji-29.png"></p>',
  'anAdataKey':'que5a-an-a',
  'anBdataKey':'que5a-an-b',
  'anCdataKey':'que5a-an-c',
  'anAdataMlz':'+10',
  'anBdataMlz':'+5',
  'anCdataMlz':'+0',
  'type':'text',
  'anNum':3
}

//第5题 乙
var que5bData = {
  'queNum':'5b',
  'queText':'从小就觉得自己有艺术家的气质<img src="images/emoji-30.png">万丈光芒挡不住<img src="images/emoji-31.png"><img src="images/emoji-31.png">明天就要在社团登台表演啦...怎么装扮自己呢<img src="images/emoji-21.png">',
  'anAtext':'<p class="line2">天生丽质难自弃<img src="images/emoji-32.png">日常服也能HOLD住全场</p>',
  'anBtext':'<p class="line2">省吃俭用特地准备一条美裙备战<img src="images/emoji-33.png"><img src="images/emoji-33.png"></p>',
  'anCtext':'<p class="line2">虽然有点不合身<img src="images/emoji-34.png">但还借了美女室友的小套装</p>',
  'anAdataKey':'que5b-an-a',
  'anBdataKey':'que5b-an-b',
  'anCdataKey':'que5b-an-c',
  'anAdataMlz':'+0',
  'anBdataMlz':'+10',
  'anCdataMlz':'+0',
  'type':'text',
  'anNum':3
}


//第6题 甲
var que6aData = {
  'queNum':'6a',
  'queText':'感情不断升温<img src="images/emoji-35.png"><img src="images/emoji-36.png"><img src="images/emoji-37.png"><img src="images/emoji-38.png">我们就是彼此的JackRose。小仁决定要带我去见他最好的兄弟——小明<img src="images/emoji-39.png">这下要穿<img src="images/emoji-21.png">',
  'anAtext':'<p class="line2">当然要给小仁涨面子雪纺<img src="images/emoji-40.png">最容易营造小鸟依人感<img src="images/emoji-40.png"></p>',
  'anBtext':'<p class="line2">怎么美怎么穿<img src="images/emoji-5.png">新买了V领连衣裙呀</p>',
  'anCtext':'<p class="line2">小仁的兄弟就是我的兄弟！又到了夜宵撸串之时<img src="images/emoji-41.png"><img src="images/emoji-41.png"></p>',
  'anAdataKey':'que6a-an-a',
  'anBdataKey':'que6a-an-b',
  'anCdataKey':'que6a-an-c',
  'anAdataMlz':'+10',
  'anBdataMlz':'-5',
  'anCdataMlz':'-10',
  'type':'text',
  'anNum':3
}

//第6题 乙
var que6bData = {
  'queNum':'6b',
  'queText':'<p style="font-size:14px">热闹的社团活动特别容易营造恋爱氛围<img src="images/emoji-42.png"><img src="images/emoji-43.png"><img src="images/emoji-10.png">我也遇见了那个他...我们互生情愫<img src="images/emoji-44.png">除了是小花园的常客，周末也要一起去看电影<img src="images/emoji-45.png"></p>',
  'anAtext':'<p class="line2">坚持自己的休闲风<img src="images/emoji-46.png">自然真实最重要</p>',
  'anBtext':'<p class="line2">听说学长喜欢萝莉风<img src="images/emoji-47.png">这次就为他打造一番<img src="images/emoji-48.png"></p>',
  'anCtext':'<p class="line2">未曾有过约会经验<img src="images/emoji-49.png"><img src="images/emoji-49.png">淑女的感觉应该没有男生会拒绝吧。</p>',
  'anAdataKey':'que6b-an-a',
  'anBdataKey':'que6b-an-b',
  'anCdataKey':'que6b-an-c',
  'anAdataMlz':'+5',
  'anBdataMlz':'+5',
  'anCdataMlz':'+10',
  'type':'text',
  'anNum':3
}

//第7题
var que7Data = {
  'queNum':'7',
  'queText':'<p style="font-size:14px">青春就是耐不住寂寞，忍不住骚动<img src="images/emoji-50.png">一群大学生昂首阔步地踏上了海滩度假之旅<img src="images/emoji-51.png"><img src="images/emoji-52.png"><img src="images/emoji-53.png">天之蓝海之蓝都不及海边的女郎儿~</p>',
  'anAtext':'<p class="line1">海边=<img src="images/emoji-54.png">当然要秀身材。</p>',
  'anBtext':'<p class="line3">翻箱倒柜也只找到连体泳衣<img src="images/emoji-55.png"><img src="images/emoji-55.png">年轻貌美就算是妈妈款也可以驾驭！</p>',
  'anCtext':'<p class="line2">虽然不会游泳<img src="images/emoji-56.png"><img src="images/emoji-56.png">但是也要美美美<img src="images/emoji-57.png">让海风吹起我的长裙摆<img src="images/emoji-58.png"></p>',
  'anAdataKey':'que7-an-a',
  'anBdataKey':'que7-an-b',
  'anCdataKey':'que7-an-c',
  'anAdataMlz':'+10',
  'anBdataMlz':'-10',
  'anCdataMlz':'+10',
  'type':'text',
  'anNum':3
}

//第8题 甲
var que8aData = {
  'queNum':'8a',
  'queText':'究竟是哪里出了错，小仁说我总是任性不懂事<img src="images/emoji-96.png">提出了分手，第一次尝到失恋的痛楚<img src="images/emoji-97.png"><img src="images/emoji-97.png">',
  'anAtext':'<p class="line2">再也不相信爱情，该吃吃该喝喝<img src="images/emoji-98.png"><img src="images/emoji-99.png"><img src="images/emoji-100.png"></p>',
  'anBtext':'<p class="line2">让穿衣助手(logo)帮我改头换面<img src="images/emoji-101.png">前男友只有追悔莫及的份<img src="images/emoji-102.png"><img src="images/emoji-102.png"></p>',
  'anAdataKey':'que8b-an-a',
  'anBdataKey':'que8b-an-b',
  'anAdataMlz':'+0',
  'anBdataMlz':'+50',
  'type':'text',
  'anNum':2
}

//第8题 乙
var que8bData = {
  'queNum':'8b',
  'queText':'游乐园是热恋必备环节<img src="images/emoji-59.png">想到要和男朋友一起坐旋转木马<img src="images/emoji-60.png">甜蜜蜜...',
  'anAtext':'<p class="line2">虽然游乐设施都不能玩，但想穿小裙子的心就是这么执著啊<img src="images/emoji-61.png"><img src="images/emoji-62.png"><img src="images/emoji-63.png"></p>',
  'anBtext':'<p class="line2"><img src="images/emoji-64.png">情侣T+<img src="images/emoji-65.png">是恋爱的最好宣言!</p>',
  'anCtext':'<p class="line2">cosplay小萝莉<img src="images/emoji-66.png">最适合游乐园的画风啦~</p>',
  'anAdataKey':'que8b-an-a',
  'anBdataKey':'que8b-an-b',
  'anCdataKey':'que8b-an-c',
  'anAdataMlz':'+0',
  'anBdataMlz':'+5',
  'anCdataMlz':'+0',
  'type':'text',
  'anNum':3
}

//第9题 
var que9Data = {
  'queNum':'9',
  'queText':'<p style="font-size:14px">学校撒欢的时间总是特别快<img src="images/emoji-67.png">转眼就放寒假惹，过年妈咪喊我回家吃饭！想到亲戚们的十万个为什么<img src="images/emoji-68.png"><img src="images/emoji-68.png">请叫我女王大人</p>',
  'anAtext':'<p class="line2">看我身披座山雕大虎皮<img src="images/emoji-69.png">一个字！谁还敢问我问题？！</p>',
  'anBtext':'<p class="line2">回家过年嘛<img src="images/emoji-70.png">老棉袄最保暖<img src="images/emoji-71.png">还能塞好多<img src="images/emoji-2.png"><img src="images/emoji-2.png"><img src="images/emoji-2.png"></p>',
  'anCtext':'<p class="line2">新年穿新衣<img src="images/emoji-72.png">告诉乡亲父老什么叫fashion</p>',
  'anAdataKey':'que9-an-a',
  'anBdataKey':'que9-an-b',
  'anCdataKey':'que9-an-c',
  'anAdataMlz':'+0',
  'anBdataMlz':'-5',
  'anCdataMlz':'+5',
  'type':'text',
  'anNum':3
}

//第10题
var que10Data = {
  'queNum':'10',
  'queText':'虽然内心永远12岁，但为了做一个勇往直前自食其力的少女<img src="images/emoji-73.png">正面临第一次的求职面试<img src="images/emoji-74.png">该怎么准备服装呢<img src="images/emoji-21.png">',
  'anAtext':'<img src="images/ques-10-a.png"></p>',
  'anBtext':'<img src="images/ques-10-b.png"></p>',
  'anCtext':'<img src="images/ques-10-c.png"></p>',
  'anAdataKey':'que10-an-a',
  'anBdataKey':'que10-an-b',
  'anCdataKey':'que10-an-c',
  'anAdataMlz':'0',
  'anBdataMlz':'+10',
  'anCdataMlz':'-5',
  'type':'pic',
  'anNum':3
}

//第11题 甲
var que11aData = {
  'queNum':'11a',
  'queText':'<img src="images/emoji-75.png"><img src="images/emoji-76.png"><img src="images/emoji-77.png">不知不觉间大家都离开了校园<img src="images/emoji-78.png">今天要参加老同学的聚会，但是听说有前男友...我一定要',
  'anAtext':'<p class="line1">美美美<img src="images/emoji-79.png"></p>',
  'anBtext':'<p class="line1">美美美<img src="images/emoji-80.png"></p>',
  'anCtext':'<p class="line1">美美美<img src="images/emoji-81.png"></p>',
  'anAdataKey':'que11a-an-a',
  'anBdataKey':'que11a-an-b',
  'anCdataKey':'que11a-an-c',
  'anAdataMlz':'+100',
  'anBdataMlz':'+100',
  'anCdataMlz':'+100',
  'type':'text',
  'anNum':3
}

//第11题 乙
var que11bData = {
  'queNum':'11b',
  'queText':'事业爱情都已经走上正轨<img src="images/emoji-82.png">宝贝说周末要带我去见他父母<img src="images/emoji-83.png"><img src="images/emoji-84.png">好紧张，裙子应该穿多长呢？',
  'anAtext':'<img src="images/ques-11b-a.png">',
  'anBtext':'<img src="images/ques-11b-b.png">',
  'anCtext':'<img src="images/ques-11b-c.png">',
  'anAdataKey':'que11b-an-a',
  'anBdataKey':'que11b-an-b',
  'anCdataKey':'que11b-an-c',
  'anAdataMlz':'+0',
  'anBdataMlz':'+10',
  'anCdataMlz':'+0',
  'type':'pic',
  'anNum':3
}

//第12题
var que12Data = {
  'queNum':'12',
  'queText':'第一次参加公司年会<img src="images/emoji-85.png"><img src="images/emoji-86.png"><img src="images/emoji-87.png">女同事们争奇斗艳百花齐放<img src="images/emoji-81.png">要怎么才可以脱颖而出呢？',
  'anAtext':'<img src="images/ques-12-a.png">',
  'anBtext':'<img src="images/ques-12-b.png">',
  'anCtext':'<img src="images/ques-12-c.png">',
  'anAdataKey':'que12-an-a',
  'anBdataKey':'que12-an-b',
  'anCdataKey':'que12-an-c',
  'anAdataMlz':'+5',
  'anBdataMlz':'+10',
  'anCdataMlz':'+0',
  'type':'pic',
  'anNum':3
}

//第13题 甲
var que13aData = {
  'queNum':'13a',
  'queText':'不知道是不是年会表现出彩<img src="images/emoji-88.png">得到老板的器重，交给我一件她出席活动要穿的羊绒大衣帮忙清洁<img src="images/emoji-89.png">这可是个表现的机会<img src="images/emoji-90.png">',
  'anAtext':'<p class="line2">送去专业洗衣店干洗</p>',
  'anBtext':'<p class="line2">带回家自己亲自清洁</p>',
  'anCtext':'<p class="line2">我的衣服都是钟点工阿姨洗的，干净又清香</p>',
  'anAdataKey':'que13a-an-a',
  'anBdataKey':'que13a-an-b',
  'anCdataKey':'que13a-an-c',
  'anAdataMlz':'+20',
  'anBdataMlz':'+0',
  'anCdataMlz':'+0',
  'type':'text',
  'anNum':3
}

//第13题 乙
var que13bData = {
  'queNum':'13b',
  'queText':'终于我的爱情也开花结果<img src="images/emoji-91.png">明天要去拍婚纱照<img src="images/emoji-92.png">可是我腰好粗...',
  'anAtext':'<p class="line2">高腰大蓬裙的设计<img src="images/emoji-93.png"><img src="images/emoji-93.png">胸下面就是腿</p>',
  'anBtext':'<p class="line2">超长鱼尾裙，足以引开注意的焦点<img src="images/emoji-94.png"></p>',
  'anCtext':'<p class="line2">像昆凌一样的露背款<img src="images/emoji-95.png">美到无法抵抗</p>',
  'anAdataKey':'que13b-an-a',
  'anBdataKey':'que13b-an-b',
  'anCdataKey':'que13b-an-c',
  'anAdataMlz':'+20',
  'anBdataMlz':'+0',
  'anCdataMlz':'+0',
  'type':'text',
  'anNum':3
}

//14题 甲
var que14aData = {
  'queNum':'14a',
  'queText':'工作顺风顺水<img src="images/emoji-103.png"><img src="images/emoji-103.png">母上大人却按捺不住了，着急火燎地给我安排相亲<img src="images/emoji-104.png">',
  'anAtext':'<p class="line2">相亲这种老派的桥段怎么能靠谱<img src="images/emoji-105.png">买菜套装敷衍一下可以吗</p>',
  'anBtext':'<p class="line2">母亲果然懂我，找对象一定要认真对待<img src="images/emoji-106.png"><img src="images/emoji-107.png">要使出桃花妆大绝招啦</p>',
  'anCtext':'<p class="line2">正值工作上升期，可是也不想拒绝他<img src="images/emoji-108.png"><img src="images/emoji-108.png">先保持联系让我考虑考虑</p>',
  'anAdataKey':'que14a-an-a',
  'anBdataKey':'que14a-an-b',
  'anCdataKey':'que14a-an-c',
  'anAdataMlz':'+0',
  'anBdataMlz':'+0',
  'anCdataMlz':'+0',
  'type':'text',
  'anNum':3
}

//14题 乙
var que14bData = {
  'queNum':'14b',
  'queText':'婚期日渐临近<img src="images/emoji-109.png">也是时候准备最后的<img src="images/emoji-110.png"><img src="images/emoji-110.png">单身派对了',
  'anAtext':'<p class="line2">约上自己的闺蜜<img src="images/emoji-111.png"><img src="images/emoji-111.png">搞一场变装PA<img src="images/emoji-112.png">变身性感猫女喵~</p>',
  'anBtext':'<p class="line2">最后的疯狂，先把未婚夫存档<img src="images/emoji-113.png"><img src="images/emoji-114.png"><img src="images/emoji-115.png"><img src="images/emoji-116.png">来个不醉不归！</p>',
  'anCtext':'<p class="line2">以派对为借口，实际上相约闺蜜一起制作婚礼蛋糕<img src="images/emoji-117.png"><img src="images/emoji-117.png">给宝贝一个超级大惊喜</p>',
  'anAdataKey':'que14b-an-a',
  'anBdataKey':'que14b-an-b',
  'anCdataKey':'que14b-an-c',
  'anAdataMlz':'+0',
  'anBdataMlz':'+10',
  'anCdataMlz':'0',
  'type':'text',
  'anNum':3
}

//15题 甲
var que15aData = {
  'queNum':'15a',
  'queText':'一切努力都是值得的，老板最后给了我升职的机会<img src="images/emoji-118.png">为了感谢大家，我一定要组织一场庆祝party<img src="images/emoji-119.png">',
  'anAtext':'<img src="images/ques-15a-a.png">',
  'anBtext':'<img src="images/ques-15a-b.png">',
  'anCtext':'<img src="images/ques-15a-c.png">',
  'anAdataKey':'que15a-an-a',
  'anBdataKey':'que15a-an-b',
  'anCdataKey':'que15a-an-c',
  'anAdataMlz':'+0',
  'anBdataMlz':'+0',
  'anCdataMlz':'+0',
  'type':'pic',
  'anNum':3
}

//15题乙
var que15bData = {
  'queNum':'15b',
  'queText':'婚礼上最动人的画面就是交换<img src="images/emoji-120.png">...',
  'anAtext':'<p class="line2">只要光面对戒，里面刻上我们的名字<img src="images/emoji-121.png"><img src="images/emoji-121.png">是独属于我们的意义</p>',
  'anBtext':'<p class="line2">当然要3克拉的<img src="images/emoji-109.png">，满满幸福都要溢出来了</p>',
  'anCtext':'<p class="line2">不需要戒指了<img src="images/emoji-122.png"><img src="images/emoji-123.png"><img src="images/emoji-124.png">简单的仪式后旅行结婚吧</p>',
  'anAdataKey':'que15b-an-a',
  'anBdataKey':'que15b-an-b',
  'anCdataKey':'que15b-an-c',
  'anAdataMlz':'+0',
  'anBdataMlz':'+0',
  'anCdataMlz':'+0',
  'type':'text',
  'anNum':3
}

//资源列表
var imgs = [
  'loading-hdj.png',
  'start-bg.jpg',
  'start-kv.png',
  'start-btn.png',
  'start-btn-touch.png',
  'ques-4a-a.png',
  'ques-4a-b.png',
  'ques-4a-c.png',
  'ques-4b-a.png',
  'ques-4b-b.png',
  'ques-10-a.png',
  'ques-10-b.png',
  'ques-10-c.png',
  'ques-11b-a.png',
  'ques-11b-b.png',
  'ques-11b-c.png',
  'ques-12-a.png',
  'ques-12-b.png',
  'ques-12-c.png',
  'ques-15a-a.png',
  'ques-15a-b.png',
  'ques-15a-c.png',
  'answer-header.jpg',
  'answer-bottom.png',
  'answer-icon-mlz.png',
  'que-num.png',
  'qq-a.png',
  'qq-b.png',
  'qq-c.png',
  'qq-bom.png',
  'out-bg.jpg',
  'out-btn-start.png',
  'out-btn-start-touch.png',
  'out-btn-tc.png',
  'out-btn-tc-touch.png',
  'out-download.png',
  'out-kv.png',
  'happy-bg.jpg',
  'happy-btn.png',
  'happy-btn-touch.png',
  'happy-download.png',
  'happy-gl.png',
  'happy-hyf.png',
  'happy-ljl.png',
  'happy-max.png',
  'happy-qsy.png',
  'happy-xln.png',
  'happy-xs.png',
  'happy-zms.png',
  'emoji-1.png',
  'emoji-2.png',
  'emoji-3.png',
  'emoji-4.png',
  'emoji-5.png',
  'emoji-6.png',
  'emoji-7.png',
  'emoji-8.png',
  'emoji-9.png',
  'emoji-10.png',
  'emoji-11.png',
  'emoji-12.png',
  'emoji-13.png',
  'emoji-14.png',
  'emoji-15.png',
  'emoji-16.png',
  'emoji-17.png',
  'emoji-18.png',
  'emoji-19.png',
  'emoji-20.png',
  'emoji-21.png',
  'emoji-22.png',
  'emoji-23.png',
  'emoji-24.png',
  'emoji-25.png',
  'emoji-26.png',
  'emoji-27.png',
  'emoji-28.png',
  'emoji-29.png',
  'emoji-30.png',
  'emoji-31.png',
  'emoji-32.png',
  'emoji-33.png',
  'emoji-34.png',
  'emoji-35.png',
  'emoji-36.png',
  'emoji-37.png',
  'emoji-38.png',
  'emoji-39.png',
  'emoji-40.png',
  'emoji-41.png',
  'emoji-42.png',
  'emoji-43.png',
  'emoji-44.png',
  'emoji-45.png',
  'emoji-46.png',
  'emoji-47.png',
  'emoji-48.png',
  'emoji-49.png',
  'emoji-50.png',
  'emoji-51.png',
  'emoji-52.png',
  'emoji-53.png',
  'emoji-54.png',
  'emoji-55.png',
  'emoji-56.png',
  'emoji-57.png',
  'emoji-58.png',
  'emoji-59.png',
  'emoji-60.png',
  'emoji-61.png',
  'emoji-62.png',
  'emoji-63.png',
  'emoji-64.png',
  'emoji-65.png',
  'emoji-66.png',
  'emoji-67.png',
  'emoji-68.png',
  'emoji-69.png',
  'emoji-70.png',
  'emoji-71.png',
  'emoji-72.png',
  'emoji-73.png',
  'emoji-74.png',
  'emoji-75.png',
  'emoji-76.png',
  'emoji-77.png',
  'emoji-78.png',
  'emoji-79.png',
  'emoji-80.png',
  'emoji-81.png',
  'emoji-82.png',
  'emoji-83.png',
  'emoji-84.png',
  'emoji-85.png',
  'emoji-86.png',
  'emoji-87.png',
  'emoji-88.png',
  'emoji-89.png',
  'emoji-90.png',
  'emoji-91.png',
  'emoji-92.png',
  'emoji-93.png',
  'emoji-94.png',
  'emoji-95.png',
  'emoji-96.png',
  'emoji-97.png',
  'emoji-98.png',
  'emoji-99.png',
  'emoji-100.png',
  'emoji-101.png',
  'emoji-102.png',
  'emoji-103.png',
  'emoji-104.png',
  'emoji-105.png',
  'emoji-106.png',
  'emoji-107.png',
  'emoji-108.png',
  'emoji-109.png',
  'emoji-110.png',
  'emoji-111.png',
  'emoji-112.png',
  'emoji-113.png',
  'emoji-114.png',
  'emoji-115.png',
  'emoji-116.png',
  'emoji-117.png',
  'emoji-118.png',
  'emoji-119.png',
  'emoji-120.png',
  'emoji-121.png',
  'emoji-122.png',
  'emoji-123.png',
  'emoji-124.png',
];


//加载资源
var totalRes = imgs.length;
var curResNum  = 0;

for(var i=0;i<totalRes;i++){
  var image = new Image(); 
  image.src = "images/" + imgs[i];

  image.onload = function(){
    curResNum++;
    var bfb = (curResNum/totalRes)*98 + '%';
    $('#loading-bar-inner').css({width:bfb})

    if(curResNum==totalRes){
      setTimeout(function(){
        $('#loading-bar-wrap,#loading-hover').hide();  
      },500);
    }
  }
}


//题目选项
$('#answer .xx').on('touchstart',function(){
  $(this).addClass('xx-touch');

  //气球爆掉
  $(this).find('.qq img').attr('src','images/qq-bom.png');

}).on('touchend',function(){
  $(this).removeClass('xx-touch');
  var dataKey = $(this).attr('data-key');
  var dataMlz = $(this).attr('data-mlz');

  //还原
  $("#answerA .qq img").attr('src','images/qq-a.png');
  $("#answerB .qq img").attr('src','images/qq-b.png');
  $("#answerC .qq img").attr('src','images/qq-c.png');
  
  //记录用户的操作
  step.push(dataKey);
  
  //切题
  changeQue(dataKey);
  
  //更新魅力值
  changeMlz(dataMlz);

})


//OUT页 回到18岁
$("#out-btn-start").on('touchstart',function(){
  $(this).find('img').attr('src','images/out-btn-start-touch.png');
}).on('touchend',function(){
  $(this).find('img').attr('src','images/out-btn-start.png');
  initStart();
});

//OUT页 我要吐槽
$("#out-btn-tc").on('touchstart',function(){
  $(this).find('img').attr('src','images/out-btn-tc-touch.png');
}).on('touchend',function(){
  $(this).find('img').attr('src','images/out-btn-tc.png');
  //我要吐槽后续处理程序。。。
});


//HAPPY页炫耀身份
$("#happy-btn").on('touchstart',function(){
  $(this).find('img').attr('src','images/happy-btn-touch.png');
}).on('touchend',function(){
  $(this).find('img').attr('src','images/happy-btn.png');
  //炫耀身份后续处理程序。。。。
});

//显示OUT页
function showOut(option){
  $('#out-download').hide();
  //防止点C选项 OUT的时候 误点下载
  setTimeout(function(){$('#out-download').fadeIn(500)},500);
  $("#out-type").text(option.type);
  $("#out-content").text(option.content);
  $("#answer").hide();
  $("#out").show();
}

//显示happy页
function showHappy(option){
  $('#happy-download').hide();
  setTimeout(function(){$('#happy-download').fadeIn(500)},500);
  $("#happy-content").text(option.content);
  $("#happy-kv img").attr('src',option.kv);
  $("#answer").hide();
  $("#happy").show();
}


//显示题目
function showQue(option){
  //更新题号
  $('#que-num span').text(option.queNum);
  
  $_quetion = $('#question');
  $_answerA = $("#answerA");
  $_answerB = $("#answerB");
  $_answerC = $("#answerC");

  $_quetion.empty().append(option.queText);

  if(option.type=='pic'){
    $_answerA.addClass('pic pic-a').removeClass('text texta');
    $_answerB.addClass('pic pic-b').removeClass('text textb');
    $_answerC.addClass('pic pic-c').removeClass('text textc');
    var topA = "280px";
    var topB = "260px";
    var topC = "280px";
  }else if(option.type=='text'){
    $_answerA.removeClass('pic pic-a').addClass('text texta');
    $_answerB.removeClass('pic pic-b').addClass('text textb');
    $_answerC.removeClass('pic pic-c').addClass('text textc');
    var topA = "208px";
    var topB = "302px";
    var topC = "396px";
  }

  if(option.anNum==2){
    $_answerC.hide();
  }else if(option.anNum==3){
    $_answerC.show();
  }

  $_answerA.css({top:'700px','display':'block'})
           .attr('data-key',option.anAdataKey)
           .attr('data-mlz',option.anAdataMlz);
  $_answerB.css({top:'700px','display':'block'})
           .attr('data-key',option.anBdataKey)
           .attr('data-mlz',option.anBdataMlz);

  $_answerA.find('.con').empty().append(option.anAtext);
  $_answerB.find('.con').empty().append(option.anBtext);         

  if(option.anNum==3){
    $_answerC.css({top:'700px','display':'block'})
           .attr('data-key',option.anCdataKey)
           .attr('data-mlz',option.anCdataMlz);

    $_answerC.find('.con').empty().append(option.anCtext);       
  }

  $_answerA.animate({top:topA},qqTime,function(){
    $_answerB.animate({top:topB},qqTime+100,function(){
      if(option.anNum==3){
        $_answerC.animate({top:topC},qqTime+100);
      }
    });
  });
}


//开始页 重回18岁按钮
$("#start-btn").on('touchstart',function(){
  $(this).find('img').attr('src','images/start-btn-touch.png');
}).on('touchend',function(){
  $(this).find('img').attr('src','images/start-btn.png');
  initStart();
});


//切换题目
function changeQue(dataKey){
  //隐藏选项
  $("#answer .xx").hide();
  
  switch(dataKey){
    //第1题ABC都切第2题
    case 'que1-an-a':
    case 'que1-an-b':
    case 'que1-an-c':
      showQue(que2Data);
      break;

    //第2题ABC都切第3题
    case 'que2-an-a':
    case 'que2-an-b':
    case 'que2-an-c':
      showQue(que3Data);
      break;

    //第3题A切第4题甲
    case 'que3-an-a':
      showQue(que4aData);
      break;

    //第3题BC切第4题乙
    case 'que3-an-b':  
    case 'que3-an-c':
      showQue(que4bData);
      break;

    //第4题甲 ABC 切第5题甲 
    case 'que4a-an-a':
    case 'que4a-an-b':
    case 'que4a-an-c':
      showQue(que5aData);
      break;

    //第4题乙 ABC 切第5题乙 
    case 'que4b-an-a':
    case 'que4b-an-b':
    case 'que4b-an-c':
      showQue(que5bData);
      break;

    //第5题甲 AB 切第6题甲 
    case 'que5a-an-a':
    case 'que5a-an-b':
      showQue(que6aData);
      break;

    //第5题甲 C out
    case 'que5a-an-c':
      showOut({
        'type':'被任性的出题人抛弃了',
        'content':'万万没想到，出题的人也这么任性，就是让你out!'
      });
      break; 

    //第5题乙 A out
    case 'que5b-an-a':
      showOut({
        'type':'被我是歌手淘汰了',
        'content':'真是想太多，既没有AngelaBaby的颜值，也没有韩红大姐的气魄，请问自信是吃白米饭来的吗？'
      });
      break; 
    
    //第5题乙 BC 切第六题乙 
    case 'que5b-an-b':
    case 'que5b-an-c':
      showQue(que6bData);
      break;

    //第6题甲乙 ABC 切第7题
    case 'que6a-an-a':
    case 'que6a-an-b':
    case 'que6a-an-c':
    case 'que6b-an-a':
    case 'que6b-an-b':
    case 'que6b-an-c':
      showQue(que7Data);  
      break;

    //第7题ABC 切第8题(需根据4甲、6甲题的选择进一步确定)
    case 'que7-an-a':
    case 'que7-an-b':
    case 'que7-an-c':
      //4甲BC or 6甲BC 切8题甲   
      if(step[3]=='que4a-an-b' || step[3]=='que4a-an-c' || step[5]=='que6a-an-b' || step[5]=='que6a-an-c'){
        showQue(que8aData);
      //4甲A 且 6甲A  或 6乙ABC 切8题乙
      }else if((step[3]=='que4a-an-a' && step[5]=='que6a-an-a') || step[5]=='que6b-an-a' || step[5]=='que6b-an-b' || step[5]=='que6b-an-c'){
        showQue(que8bData);
      }
      break;
      
    //8题甲 A out
    case 'que8a-an-a':
      showOut({
        'type':'被天真的小盆友嫌弃了',
        'content':'你就等着坐过山车时裙子掀到脸上吧！内裤还是大妈肉色款，怎么好意思呢...'
      });
      break;
      
    //第8题乙 A out
    case 'que8b-an-a': 
      showOut({
        'type':'被天真的小盆友嫌弃了',
        'content':'你就等着坐过山车时裙子掀到脸上吧！内裤还是大妈肉色款，怎么好意思呢...'
      });
      break;
      
    //第8题 甲B 乙BC  切第9题
    case 'que8a-an-b':
    case 'que8b-an-b':
    case 'que8b-an-c':
      showQue(que9Data);
      break;
    
    //第9题 A out 
    case 'que9-an-a':
      showOut({
        'type':'被城管临检了',
        'content':'座山雕？一个字？太爱演了吧...记得好好做个正常人拒绝黄赌毒'
      });
      break;
      
    //第9题 BC 切第10题  
    case 'que9-an-b':
    case 'que9-an-c':
      showQue(que10Data);
      break;
      
    //第10题 ABC 切第11题(需根据第八题答 甲or乙 做进一步判断)
    case 'que10-an-a':
    case 'que10-an-b':
    case 'que10-an-c':
      //第8题答甲 切11题甲
      if(step[7]=='que8a-an-a' || step[7]=='que8a-an-b'){
        showQue(que11aData);
      //第8题答乙 切11题乙
      }else if(step[7]=='que8b-an-a' || step[7]=='que8b-an-b' || step[7]=='que8b-an-c'){
        showQue(que11bData);
      }
      break;

    //第11题 甲ABC 乙AB 切12题
    case 'que11a-an-a':
    case 'que11a-an-b':
    case 'que11a-an-c':
    case 'que11b-an-a':
    case 'que11b-an-b':
      showQue(que12Data);
      break;
      
    //第11题乙 C out
    case 'que11b-an-c':
      showOut({
        'type':'被大水冲了龙王庙了',
        'content':'虽然你的婆婆不是雪姨，但也忍不了儿媳妇的裙子那么短吧...真要是雪姨你穿比基尼也没她美'
      });
      break;
    
    //第12题AB 切13题(需要进一步判断11题 答 甲or乙)
    case 'que12-an-a':
    case 'que12-an-b':
      //11题答甲 切13题甲
      if(step[10]=='que11a-an-a' || step[10]=='que11a-an-b' || step[10]=='que11a-an-c'){
        showQue(que13bData);  
      //11题答乙 切13题乙
      }else if(step[10]=='que11b-an-a' || step[10]=='que11b-an-b' || step[10]=='que11b-an-c'){
        showQue(que13bData);  
      }
      break;
      
    //第12题C out 
    case 'que12-an-c':
      showOut({
        'type':'被老板撕逼了',
        'content':'这位小主定是得了失心疯，哪来的疯丫头，乳臭未干就敢穿小皮草...内心戏太过，抢了老板的风头，就等着老板撕逼吧，拉出去斩了'
      });
      break;
      
    //13题甲 A 切 14题甲
    case 'que13a-an-a': 
      showQue(que14aData);
      break;
      
    //13题甲 BC OUT
    case 'que13a-an-a': 
      showOut({
        'type':'被洗衣店敲诈了',
        'content':'羊绒外套只能用专业的药水干洗，太傻太天真，就等着老板发飙炒鱿鱼吧'
      });
      break;  
    
    //13题乙 A 切 14题乙
    case 'que13b-an-a': 
      showQue(que14bData);
      break;    
    
    //13题乙 BC OUT
    case 'que13b-an-b': 
    case 'que13b-an-c':
      showOut({
        'type':'被围观群众丢臭鸡蛋了',
        'content':'人贵在有自知之明，缺点是用来隐藏的，谁让你秀给大家看的...'
      });
      break;
      
    //14题甲 A 切 15题甲
    case 'que14a-an-a': 
      showQue(que15aData);
      break;
      
    //14题甲 B endingG
    case 'que14a-an-b': 
      showHappy({
        'kv':'images/happy-ljl.png',//你就是精致优雅的刘嘉玲
        'content':'就是时刻都保持精致的你，认真的时刻最美，最后收获事业爱情双丰收，人生赢家！小衣以你为榜样'  
      });
      break;
      
    //14题甲 C OUT
    case 'que14a-an-c':
      showOut({
        'type':'被自己蠢哭了',
        'content':'千万不能成为随风倒的墙头草，活了一把年纪却还想不清楚自己究竟要什么，多半是废了'
      });
      break;      
    
    //14题乙 A 切 endingH  
    case 'que14b-an-a':
      showHappy({
        'kv':'images/happy-xs.png',//你就是的鬼灵精怪的小S
        'content':'没想到派对最后未婚夫突然出现，化身蝙蝠侠，上演浪漫求婚桥段，向所有人宣告你属于他，小衣也想赤条条秀恩爱！'  
      });
      break;
      
    //14题乙 B 切 OUT  
    case 'que14b-an-b':
      showOut({
        'type':'被婚纱勒晕了',
        'content':'都要成为人妻了，还想着不醉不归，难道不怕宿醉错过吉时吗...还有温馨小提示：未婚夫是不能存档的'
      });
      break;  
      
    //14题乙 C 切 15题乙 
    case 'que14b-an-c':
      showQue(que15bData);
      break;
      
    //15题甲 A 切 endingA
    case 'que15a-an-a':
      showHappy({
        'kv':'images/happy-max.png',//你就是独立自强的Max
        'content':'你的时尚品味卓越而又出众，自己打造的独立品牌也在火热筹备中，小衣无限看好你！'  
      });
      break;
      
    //15题甲 B 切 endingB
    case 'que15a-an-b':
      showHappy({
        'kv':'images/happy-gl.png',//你就是的霸气干练顾里
        'content':'人美能力强的并不一定就是女魔头，小衣觉得内外兼修的你很快就会当上CEO迎娶高富帅~' 
      });
      break;
      
    //15题甲 C 切 endingC
    case 'que15a-an-c':
      showHappy({
        'kv':'images/happy-zms.png',//你就是温柔善良的赵默笙
        'content':'不明争不暗斗，那么恬静亲和的你每个人都爱啊，小衣虽然是女的但也忍不住喜欢你，羞羞~' 
      });
      break;    
      
    //15题乙 A 切 endingA
    case 'que15b-an-a':
      showHappy({
        'kv':'images/happy-xln.png',//你就是超凡脱俗的小龙女
        'content':'或许相濡以沫就是两人相处的最高境界，小衣也要向你们学习！'  
      });
      break;
      
    //15题乙 B 切 endingB
    case 'que15b-an-b':
      showHappy({
        'kv':'images/happy-qsy.png',//你就是敢爱敢恨的千颂伊
        'content':'爱就是要全世界都知道，有一种秀恩爱叫羡煞旁人，小衣也是羡慕嫉妒但不恨，满满都是祝福~'  
      });
      break;
    
    //15题乙 C 切 endingC
    case 'que15b-an-c':
      showHappy({
        'kv':'images/happy-hyf.png',//你就是率真果断的胡一菲
        'content':'爱他就是要跟他一起追寻自由，一步步走遍全世界，看山看水看彼此，小衣坐等集齐全球明信片~' 
      });
      break;
  }
}


//改变魅力值
function changeMlz(dataMlz){
  mlz = mlz + parseInt(dataMlz);
  $_mlzCur = $('#mlz-cur');
  $_mlzCur.css({'opacity':1}).text(dataMlz+'分');
  $_mlzCur.animate({'opacity':0},500,function(){
    $('#mlz-total-num').text(mlz);
  });
}

//重新开始
function initStart(){
  //初始化魅力值和用户答题记录
  mlz = 20;
  step = [];
  
  $('#mlz-total-num').text(mlz);
  $("#out,#start").hide();
  $('#que-num span').text('1');
  $('#answer').show();
  
  //显示第一题
  showQue(que1Data);
}


})(jQuery);