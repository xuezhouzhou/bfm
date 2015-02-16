var textAtop = '220px';
var textBtop = '340px';
var textCtop = '460px';
var picAtop = '320px';
var picBtop = '280px';
var picCtop = '320px';

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
  'anBtext':'<p class="line1">说好的青梅竹马<img src="images/emoji-10.png">当然要穿同款T恤</p>',
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
  'anCtext':'<p class="line1">只是下楼拿外卖<img src="images/emoji-18.png"><img src="images/emoji-18.png">睡衣就好啦...</p>',
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
  'anAtext':'<img src="images/ques-4a-a.jpg">',
  'anBtext':'<img src="images/ques-4a-b.jpg">',
  'anCtext':'<img src="images/ques-4a-c.jpg">',
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
  'anAtext':'<img src="images/ques-4b-a.jpg">',
  'anBtext':'<img src="images/ques-4b-b.jpg">',
  'anCtext':'<img src="images/ques-4a-c.jpg">',//与4甲C选项相同
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
  'anBtext':'<p class="line1">怎么美怎么穿<img src="images/emoji-5.png">新买了V领连衣裙呀</p>',
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
  'anBtext':'<p class="line2">翻箱倒柜也只找到连体泳衣<img src="images/emoji-55.png"><img src="images/emoji-55.png">年轻貌美就算是妈妈款也可以驾驭！</p>',
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
  'anBtext':'<p class="line2">让穿衣助手<img src="images/emoji-125.png">帮我改头换面<img src="images/emoji-101.png">前男友只有追悔莫及的份<img src="images/emoji-102.png"><img src="images/emoji-102.png"></p>',
  'anAdataKey':'que8a-an-a',
  'anBdataKey':'que8a-an-b',
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
  'anBtext':'<p class="line1"><img src="images/emoji-64.png">情侣T+<img src="images/emoji-65.png">是恋爱的最好宣言!</p>',
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
  'anAtext':'<img src="images/ques-10-a.jpg"></p>',
  'anBtext':'<img src="images/ques-10-b.jpg"></p>',
  'anCtext':'<img src="images/ques-10-c.jpg"></p>',
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
  'anAtext':'<img src="images/ques-11b-a.jpg">',
  'anBtext':'<img src="images/ques-11b-b.jpg">',
  'anCtext':'<img src="images/ques-11b-c.jpg">',
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
  'anAtext':'<img src="images/ques-12-a.jpg">',
  'anBtext':'<img src="images/ques-12-b.jpg">',
  'anCtext':'<img src="images/ques-12-c.jpg">',
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
  'anAtext':'<p class="line1">送去专业洗衣店干洗</p>',
  'anBtext':'<p class="line1">带回家自己亲自清洁</p>',
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
  'anCtext':'<p class="line3">以派对为借口，实际上相约闺蜜一起制作婚礼蛋糕<img src="images/emoji-117.png"><img src="images/emoji-117.png">给宝贝一个超级大惊喜</p>',
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
  'anAtext':'<img src="images/ques-15a-a.jpg">',
  'anBtext':'<img src="images/ques-15a-b.jpg">',
  'anCtext':'<img src="images/ques-15a-c.jpg">',
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