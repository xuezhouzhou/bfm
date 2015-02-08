document.ontouchmove = function(e){ e.preventDefault(); }

document.documentElement.style.webkitTouchCallout = "none";

(function($){
  //初始化魅力值
  var mlz = 20;

  //气球出来的时间
  var qqTime = 500;

  //设备宽度
  var width = $('body').width();
  
  //根据不同设备的宽度重新定位进度条的位置
  var loadingBarTop = width*0.5625 + 'px';
  $("#loading-bar-wrap").css({'top':loadingBarTop});

  //第1题
  var que1Data = {
    'queNum':'1',
    'queText':'18生日寿宴<img src="images/emoji-1.png"><img src="images/emoji-1.png">妈咪给了我500块<img src="images/emoji-2.png">自由发挥，揣着五张毛爷爷想想还有点小激动呢！！',
    'anAtext':'买一条blingbling项链作为18岁的礼物<img src="images/emoji-3.png">“跟着我左手右手，一个慢动作”',
    'anBtext':'生日PA一定要打扮得美美美<img src="images/emoji-4.png">买条漂亮的<img src="images/emoji-5.png">吧',
    'anCtext':'妈妈从小对我说，勤俭节约是美德，红票子存<img src="images/emoji-6.png">起来~',
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
    'anAtext':'小学妹要配萌萌哒小裙子，箱子什么的就交给学长啦<img src="images/emoji-9.png">',
    'anBtext':'说好的青梅竹马<img src="images/emoji-10.png">当然要穿同款T恤',
    'anCtext':'“大河向东流啊”卷起裤脚管<img src="images/emoji-11.png"><img src="images/emoji-11.png">行李箱肩上扛。',
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
    'anAtext':'小鹿乱撞少女怀春<img src="images/emoji-7.png"><img src="images/emoji-13.png">换上蕾丝小连衣裙<img src="images/emoji-14.png">娇羞扭捏地下楼去。',
    'anBtext':'跟好兄弟夜宵撸串<img src="images/emoji-15.png"><img src="images/emoji-16.png"><img src="images/emoji-17.png">必备宽松大T恤！',
    'anCtext':'只是下楼拿外卖<img src="images/emoji-18.png"><img src="images/emoji-18.png">睡衣就好啦...',
    'anAdataKey':'que3-an-a',
    'anBdataKey':'que3-an-b',
    'anCdataKey':'que3-an-c',
    'anAdataMlz':'+10',
    'anBdataMlz':'+5',
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
    'anCdataMlz':'0',
    'type':'pic',
    'anNum':3
  }
  
  //第4题 乙
  var que4bData = {
    'queNum':'5',
    'queText':'我和小仁终究还是渐行渐远<img src="images/emoji-22.png"><img src="images/emoji-23.png">接下来孤身一人闯江湖，一大波社团面试正在接近<img src="images/emoji-24.png">怎么穿<img src="images/emoji-21.png">',
    'anAtext':'<img src="images/ques-4b-a.png">',
    'anBtext':'<img src="images/ques-4b-b.png">',
    'anCtext':'<img src="images/ques-4a-c.png">',//与4甲C选项相同
    'anAdataKey':'que4b-an-a',
    'anBdataKey':'que4b-an-b',
    'anCdataKey':'que4b-an-c',
    'anAdataMlz':'0',
    'anBdataMlz':'+10',
    'anCdataMlz':'+5',
    'type':'pic',
    'anNum':3
  }

  //第5题 甲
  var que5aData = {
    'queNum':'5a',
    'queText':'大学生活远比想象中五光十色丰富多彩<img src="images/emoji-25.png">小仁参加了学生会叫我一起去...',
    'anAtext':'我只想安静低调地当个小学妹，默默陪伴<img src="images/emoji-26.png">小仁<img src="images/emoji-26.png">',
    'anBtext':'我和小仁是CP<img src="images/emoji-27.png">情侣装穿起来',
    'anCtext':'不喜欢学生会的氛围<img src="images/emoji-28.png">就是任性，不想去<img src="images/emoji-29.png">',
    'anAdataKey':'que5a-an-a',
    'anBdataKey':'que5a-an-b',
    'anCdataKey':'que5a-an-c',
    'anAdataMlz':'+10',
    'anBdataMlz':'+5',
    'anCdataMlz':'0',
    'type':'text',
    'anNum':3
  }

  //第5题 乙
  var que5bData = {
    'queNum':'5b',
    'queText':'从小就觉得自己有艺术家的气质<img src="images/emoji-30.png">万丈光芒挡不住<img src="images/emoji-31.png"><img src="images/emoji-31.png">明天就要在社团登台表演啦...怎么装扮自己呢<img src="images/emoji-21.png">',
    'anAtext':'天生丽质难自弃<img src="images/emoji-32.png">日常服也能HOLD住全场',
    'anBtext':'省吃俭用特地准备一条美裙备战<img src="images/emoji-33.png"><img src="images/emoji-33.png">',
    'anCtext':'虽然有点不合身<img src="images/emoji-34.png">但还借了美女室友的小套装',
    'anAdataKey':'que5b-an-a',
    'anBdataKey':'que5b-an-b',
    'anCdataKey':'que5b-an-c',
    'anAdataMlz':'0',
    'anBdataMlz':'+10',
    'anCdataMlz':'0',
    'type':'text',
    'anNum':3
  }


  //第6题 甲
  var que6aData = {
    'queNum':'6a',
    'queText':'感情不断升温<img src="images/emoji-35.png"><img src="images/emoji-36.png"><img src="images/emoji-37.png"><img src="images/emoji-38.png">我们就是彼此的JackRose。小仁决定要带我去见他最好的兄弟——小明<img src="images/emoji-39.png">这下要穿<img src="images/emoji-21.png">',
    'anAtext':'当然要给小仁涨面子雪纺<img src="images/emoji-40.png">最容易营造小鸟依人感<img src="images/emoji-40.png">',
    'anBtext':'怎么美怎么穿<img src="images/emoji-5.png">新买了V领连衣裙呀',
    'anCtext':'小仁的兄弟就是我的兄弟！又到了夜宵撸串之时<img src="images/emoji-41.png"><img src="images/emoji-41.png">',
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
  var que6aData = {
    'queNum':'6b',
    'queText':'热络的社团活动特别容易营造恋爱氛围<img src="images/emoji-42.png"><img src="images/emoji-43.png"><img src="images/emoji-10.png">我也遇见了那个他...我们互生情愫<img src="images/emoji-44.png">除了是小花园的常客，周末也要一起去看电影<img src="images/emoji-45.png">',
    'anAtext':'坚持自己的休闲风<img src="images/emoji-46.png">自然真实最重要',
    'anBtext':'听说学长喜欢萝莉风<img src="images/emoji-47.png">这次就为他打造一番<img src="images/emoji-48.png">',
    'anCtext':'未曾有过约会经验<img src="images/emoji-49.png"><img src="images/emoji-49.png">淑女的感觉应该没有男生会拒绝吧。',
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
    'queText':'青春就是耐不住寂寞，忍不住骚动<img src="images/emoji-50.png">一群大学生昂首阔步地踏上了海滩度假之旅<img src="images/emoji-51.png"><img src="images/emoji-52.png"><img src="images/emoji-53.png">天之蓝海之蓝都不及海边的女郎儿~',
    'anAtext':'海边=<img src="images/emoji-54.png">当然要秀身材。',
    'anBtext':'翻箱倒柜也只找到连体泳衣<img src="images/emoji-55.png"><img src="images/emoji-55.png">年轻貌美就算是妈妈款也可以驾驭！',
    'anCtext':'虽然不会游泳<img src="images/emoji-56.png"><img src="images/emoji-56.png">但是也要美美美<img src="images/emoji-57.png">让海风吹起我的长裙摆<img src="images/emoji-58.png">',
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
    'anAtext':'再也不相信爱情，该吃吃该喝喝<img src="images/emoji-98.png"><img src="images/emoji-99.png"><img src="images/emoji-100.png">',
    'anBtext':'让穿衣助手(logo)帮我改头换面<img src="images/emoji-101.png">前男友只有追悔莫及的份<img src="images/emoji-102.png"><img src="images/emoji-102.png">',
    'anAdataKey':'que8b-an-a',
    'anBdataKey':'que8b-an-b',
    'anAdataMlz':'0',
    'anBdataMlz':'+5',
    'anCdataMlz':'0',
    'type':'text',
    'anNum':2
  }

  //第8题 乙
  var que8bData = {
    'queNum':'8b',
    'queText':'游乐园是热恋必备环节<img src="images/emoji-59.png">想到要和男朋友一起坐旋转木马<img src="images/emoji-60.png">甜蜜蜜...',
    'anAtext':'虽然游乐设施都不能玩，但想穿小裙子的心就是这么执著啊<img src="images/emoji-61.png"><img src="images/emoji-62.png"><img src="images/emoji-63.png">',
    'anBtext':'<img src="images/emoji-64.png">情侣T+<img src="images/emoji-65.png">是恋爱的最好宣言!',
    'anCtext':'cosplay小萝莉<img src="images/emoji-66.png">最适合游乐园的画风啦~',
    'anAdataKey':'que8b-an-a',
    'anBdataKey':'que8b-an-b',
    'anCdataKey':'que8b-an-c',
    'anAdataMlz':'0',
    'anBdataMlz':'+5',
    'anCdataMlz':'0',
    'type':'text',
    'anNum':3
  }

  //第9题 
  var que9Data = {
    'queNum':'9',
    'queText':'学校撒欢的时间总是特别快<img src="images/emoji-67.png">转眼就放寒假惹，过年妈咪喊我回家吃饭！想到亲戚们的十万个为什么<img src="images/emoji-68.png"><img src="images/emoji-68.png">请叫我女王大人',
    'anAtext':'看我身披座山雕大虎皮<img src="images/emoji-69.png">一个字！谁还敢问我问题？！',
    'anBtext':'回家过年嘛<img src="images/emoji-70.png">老棉袄最保暖<img src="images/emoji-71.png">还能塞好多<img src="images/emoji-2.png"><img src="images/emoji-2.png"><img src="images/emoji-2.png">',
    'anCtext':'新年穿新衣<img src="images/emoji-72.png">告诉乡亲父老什么叫fashion',
    'anAdataKey':'que9-an-a',
    'anBdataKey':'que9-an-b',
    'anCdataKey':'que9-an-c',
    'anAdataMlz':'0',
    'anBdataMlz':'+5',
    'anCdataMlz':'0',
    'type':'text',
    'anNum':3
  }

  //第10题
  var que10Data = {
    'queNum':'10',
    'queText':'虽然内心永远12岁，但为了做一个勇往直前自食其力的少女<img src="images/emoji-73.png">正面临第一次的求职面试<img src="images/emoji-74.png">该怎么准备服装呢<img src="images/emoji-21.png">',
    'anAtext':'<img src="images/ques-10-a.png">',
    'anBtext':'<img src="images/ques-10-b.png">',
    'anCtext':'<img src="images/ques-10-c.png">',
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
    'anAtext':'美美美<img src="images/emoji-79.png">',
    'anBtext':'美美美<img src="images/emoji-80.png">',
    'anCtext':'美美美<img src="images/emoji-81.png">',
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
    'anAdataMlz':'0',
    'anBdataMlz':'+10',
    'anCdataMlz':'0',
    'type':'text',
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
    'anCdataMlz':'0',
    'type':'pic',
    'anNum':3
  }

  //第13题 甲
  var que13aData = {
    'queNum':'13a',
    'queText':'不知道是不是年会表现出彩<img src="images/emoji-88.png">得到老板的器重，交给我一件她出席活动要穿的羊绒大衣帮忙清洁<img src="images/emoji-89.png">这可是个表现的机会<img src="images/emoji-90.png">',
    'anAtext':'送去专业洗衣店干洗',
    'anBtext':'带回家自己亲自清洁',
    'anCtext':'我的衣服都是钟点工阿姨洗的，干净又清香',
    'anAdataKey':'que13a-an-a',
    'anBdataKey':'que13a-an-b',
    'anCdataKey':'que13a-an-c',
    'anAdataMlz':'+20',
    'anBdataMlz':'0',
    'anCdataMlz':'0',
    'type':'text',
    'anNum':3
  }

  //第13题 乙
  var que13bData = {
    'queNum':'13b',
    'queText':'终于我的爱情也开花结果<img src="images/emoji-91.png">明天要去拍婚纱照<img src="images/emoji-92.png">可是我腰好粗...',
    'anAtext':'高腰大蓬裙的设计<img src="images/emoji-93.png"><img src="images/emoji-93.png">胸下面就是腿',
    'anBtext':'超长鱼尾裙，足以引开注意的焦点<img src="images/emoji-94.png">',
    'anCtext':'像昆凌一样的露背款<img src="images/emoji-95.png">美到无法抵抗',
    'anAdataKey':'que13b-an-a',
    'anBdataKey':'que13b-an-b',
    'anCdataKey':'que13b-an-c',
    'anAdataMlz':'+20',
    'anBdataMlz':'0',
    'anCdataMlz':'0',
    'type':'text',
    'anNum':3
  }

  //14题 甲
  var que14aData = {
    'queNum':'14a',
    'queText':'工作顺风顺水<img src="images/emoji-103.png"><img src="images/emoji-103.png">母上大人却按捺不住了，着急火燎地给我安排相亲<img src="images/emoji-104.png">',
    'anAtext':'相亲这种老派的桥段怎么能靠谱<img src="images/emoji-105.png">买菜套装敷衍一下可以吗',
    'anBtext':'母亲果然懂我，找对象一定要认真对待<img src="images/emoji-106.png"><img src="images/emoji-107.png">要使出桃花妆大绝招啦',
    'anCtext':'正值工作上升期，可是也不想拒绝他<img src="images/emoji-108.png"><img src="images/emoji-108.png">先保持联系让我考虑考虑',
    'anAdataKey':'que14a-an-a',
    'anBdataKey':'que14a-an-b',
    'anCdataKey':'que14a-an-c',
    'anAdataMlz':'+20',
    'anBdataMlz':'0',
    'anCdataMlz':'0',
    'type':'text',
    'anNum':3
  }
  
  //14题 乙
  var que14bData = {
    'queNum':'14b',
    'queText':'婚期日渐临近<img src="images/emoji-109.png">也是时候准备最后的<img src="images/emoji-110.png"><img src="images/emoji-110.png">单身派对了',
    'anAtext':'约上自己的闺蜜<img src="images/emoji-111.png"><img src="images/emoji-111.png">搞一场变装PA<img src="images/emoji-112.png">变身性感猫女喵~',
    'anBtext':'最后的疯狂，先把未婚夫存档<img src="images/emoji-113.png"><img src="images/emoji-114.png"><img src="images/emoji-115.png"><img src="images/emoji-116.png">来个不醉不归！',
    'anCtext':'以派对为借口，实际上相约闺蜜一起制作婚礼蛋糕<img src="images/emoji-117.png"><img src="images/emoji-117.png">给宝贝一个超级大惊喜',
    'anAdataKey':'que14b-an-a',
    'anBdataKey':'que14b-an-b',
    'anCdataKey':'que14b-an-c',
    'anAdataMlz':'+20',
    'anBdataMlz':'0',
    'anCdataMlz':'0',
    'type':'text',
    'anNum':3
  }
  
  //15题 甲
  var que15aData = {
    'queNum':'15a',
    'queText':'一切努力都是值得的，老板最后给了我升职的机会<img src="images/emoji-118.png">为了感谢大家，我一定要组织一场庆祝party<img src="images/emoji-119.png">',
    'anAtext':'',
    'anBtext':'',
    'anCtext':'',
    'anAdataKey':'que15a-an-a',
    'anBdataKey':'que15a-an-b',
    'anCdataKey':'que15a-an-c',
    'anAdataMlz':'+20',
    'anBdataMlz':'0',
    'anCdataMlz':'0',
    'type':'pic',
    'anNum':3
  }

  //15题乙
  var que15bData = {
    'queNum':'15b',
    'queText':'婚礼上最动人的画面就是交换<img src="images/emoji-120.png">...',
    'anAtext':'只要光面对戒，里面刻上我们的名字<img src="images/emoji-121.png"><img src="images/emoji-121.png">是独属于我们的意义',
    'anBtext':'当然要3克拉的<img src="images/emoji-109.png">，满满幸福都要溢出来了',
    'anCtext':'不需要戒指了<img src="images/emoji-122.png"><img src="images/emoji-123.png"><img src="images/emoji-124.png">简单的仪式后旅行结婚吧',
    'anAdataKey':'que15b-an-a',
    'anBdataKey':'que15b-an-b',
    'anCdataKey':'que15b-an-c',
    'anAdataMlz':'+20',
    'anBdataMlz':'0',
    'anCdataMlz':'0',
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

    'answer-header.jpg',
    'answer-bottom.jpg',
    'answer-icon-mlz.png',
    'que-num.png',
    
    //图片选项人物图
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


    'qq-a.png',
    'qq-b.png',
    'qq-c.png',

    'out-bg.jpg',
    'out-btn-start.png',
    'out-btn-start-touch.png',
    'out-btn-tc.png',
    'out-btn-tc-touch.png',
    'out-download.png',
    'out-kv.png',

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

    'happy-bg.jpg',
  ];
  
  //开始页 重回18岁按钮
  $("#start-btn").on('touchstart',function(){
    $(this).find('img').attr('src','images/start-btn-touch.png');
  }).on('touchend',function(){
    $(this).find('img').attr('src','images/start-btn.png');
    initStart();
  });



  //资源总数量
  var totalRes = imgs.length;
  
  //当前加载的资源的index
  var curResNum  = 0;

  //加载资源
  for(var i=0;i<totalRes;i++){
    var image = new Image(); 
    image.src = "images/" + imgs[i];

    image.onload = function(){
      
      curResNum++;
      
      var bfb = (curResNum/totalRes)*98 + '%';
      
      $('#loading-bar-inner').css({width:bfb})

      if(curResNum==totalRes){
        setTimeout(function(){
          $('#loading-bar-wrap,#loading').hide();  
        },500);
      }
    }
  }

  //题目选项
  $('#answer .xx').on('touchstart',function(){
    $(this).addClass('xx-touch');
  }).on('touchend',function(){
    $(this).removeClass('xx-touch');
    var dataKey = $(this).attr('data-key');
    var dataMlz = $(this).attr('data-mlz');
    //切题
    changeQue(dataKey);
    
    //更新魅力值
    changeMlz(dataMlz);
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
        
        break;


      //第2题ABC都切第3题
      case 'que2-an-a':
      case 'que2-an-b':
      case 'que2-an-c':
        
        break;

      //第3题A切第4题甲
      case 'que3-an-a':
        
        break;

      //第3题BC切第4题乙
      case 'que3-an-b':  
      case 'que3-an-c':
        
        break;

      //第4题甲 ABC 切第5题甲 
      case 'que4a-an-a':
      case 'que4a-an-b':
      case 'que4a-an-c':
        
        break;

      //第4题乙 ABC 切第5题乙 
      case 'que4b-an-a':
      case 'que4b-an-b':
      case 'que4b-an-c':
        
        break;

      //第5题甲 AB 切第6题甲 
      case 'que5a-an-a':
      case 'que5a-an-b':
        showQue({
          
        },'text');
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
        
        break;

      //第6题甲乙 ABC 切第七题
      case 'que6a-an-a':
      case 'que6a-an-b':
      case 'que6a-an-c':
      case 'que6b-an-a':
      case 'que6b-an-b':
      case 'que6b-an-c': 
        showQue({
          'queText':'',
          'anAtext':'',
          'anBtext':'',
          'anCtext':'',
          'anAdataKey':'que7-an-a',
          'anBdataKey':'que7-an-b',
          'anCdataKey':'que7-an-c',
          'anAdataMlz':'+10',
          'anBdataMlz':'-10',
          'anCdataMlz':'+10',
        },'text');
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

  //显示题目
  function showQue(option){
    //更新题号
    $('#que-num span').text(option.queNum);
    
    $_quetion = $('#question');
    $_answerA = $("#answer .answerA");
    $_answerB = $("#answer .answerB");
    $_answerC = $("#answer .answerC");

    $_quetion.empty().append(option.queText);

    if(option.type=='pic'){
      $_answerA.addClass('pic pic-a');
      $_answerB.addClass('pic pic-b');
      $_answerC.addClass('pic pic-c');
      var topA = "52%";
      var topB = "47%";
      var topC = "52%";
    }else if(option.type=='text'){
      $_answerA.removeClass('pic pic-a');
      $_answerB.removeClass('pic pic-b');
      $_answerC.removeClass('pic pic-c');
      var topA = "41%";
      var topB = "62%";
      var topC = "83%";
    }

    if(option.anNum==2){
      $_answerC.hide();
    }else if(option.anNum==3){
      $_answerC.show();
    }

    $_answerA.css({top:'110%','display':'block'})
             .attr('data-key',option.anAdataKey)
             .attr('data-mlz',option.anAdataMlz);
    $_answerB.css({top:'110%','display':'block'})
             .attr('data-key',option.anBdataKey)
             .attr('data-mlz',option.anBdataMlz);

    $_answerA.find('.text').empty().append(option.anAtext);
    $_answerB.find('.text').empty().append(option.anBtext);         

    if(option.anNum==3){
      $_answerC.css({top:'110%','display':'block'})
             .attr('data-key',option.anCdataKey)
             .attr('data-mlz',option.anCdataMlz);

      $_answerC.find('.text').empty().append(option.anCtext);       
    }

    $_answerA.animate({top:topA},qqTime,function(){
      $_answerB.animate({top:topB},qqTime,function(){
        if(option.anNum==3){
          $_answerC.animate({top:topC},qqTime);
        }
      });
    });
  }


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
  });

  //显示OUT页
  function showOut(option){
    $("#out-type").text(option.type);
    $("#out-content").text(option.content);
    $("#answer").hide();
    $("#out").show();
  }

  //重新开始
  function initStart(){
    mlz = 20;
    queNum = 1;

    $('#mlz-total-num').text(mlz);
    $("#out,#start").hide();
    $('#que-num span').text(queNum);
    $('#answer').show();
    
    //显示第一题
    showQue(que1Data);
  }

  $('#happy-download').on('touchend',function(){
    window.location.herf = 'download.html';
  });

})(jQuery);