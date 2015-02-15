document.ontouchmove = function(e){ e.preventDefault();}
document.documentElement.style.webkitTouchCallout = "none";
var run = function(){
  //魅力值
  var mlz = 20;

  //气球动画时间
  var qqTime = 300;

  //记录用户每部选择的选项
  var step = [];

  //复活机会 默认一次
  var restart = 1;

  //预加载资源
  var totalRes = imgs.length;
  var curResNum  = 0;
  for(var i=0;i<totalRes;i++){
    var image = new Image(); 
    image.src = "images/" + imgs[i];

    image.onload = function(){
      curResNum++;
      var bfb = (curResNum/totalRes)*100 + '%';
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
    var dataKey = $(this).attr('data-key');
    var dataMlz = $(this).attr('data-mlz');

    //记录用户的操作
    step.push(dataKey);
    
    //更新魅力值
    changeMlz(dataMlz);

    //换下一题
    changeQue(dataKey);
  });

  //OUT页 重回18岁
  $("#out-btn-start").on('touchstart',function(){
    $(this).find('img').attr('src','images/out-btn-start-touch.png');
  }).on('touchend',function(){
    $(this).find('img').attr('src','images/out-btn-start.png');
    showStart();
  });

  
  //OUT页 我要吐槽
  $("#out-btn-tc").on('touchstart',function(){
    $(this).find('img').attr('src','images/out-btn-tc-touch.png');
  }).on('touchend',function(){
    $(this).find('img').attr('src','images/out-btn-tc.png');
    $('#share,#loading-hover').show();
  });

  //隐藏分享提示
  $('#share').on('touchstart',function(){
    $('#share,#loading-hover').hide();
  })

  //HAPPY页炫耀身份
  $("#happy-btn").on('touchstart',function(){
    $(this).find('img').attr('src','images/happy-btn-touch.png');
  }).on('touchend',function(){
    $(this).find('img').attr('src','images/happy-btn.png');
    $('#share,#loading-hover').show();
  });


  //警告页按钮点击
  $("#warning-btn").on('touchstart',function(){
    $(this).find('img').attr('src','images/warning-btn-touch.png');
  }).on('touchend',function(){
    $(this).find('img').attr('src','images/warning-btn.png');
    $('#warning').hide();
    $("#loading-hover").hide();
  });

  //显示OUT页
  function showOut(option,status){
    var shareText = option.type + '。卒！快来测测你是否一样屌丝～';
    var shareImg = siteUrl + 'images/share-out.jpg';
    wxShare(shareText,shareImg);

    //没有复活机会直接out
    if(restart<=0){
      $('#out-download').hide();
      //防止点C选项 OUT的时候 误点下载
      setTimeout(function(){$('#out-download').fadeIn(500)},500);
      $("#out-type").text(option.type);
      $("#out-content").text(option.content);
      $("#answer").hide();
      $("#out").show();
    }else{
      //有复活机会 可以重新选择本题
      showWarning();
      $("#answerA,#answerB").show();
      if(!status){
        $("#answerC").show();
      }

      //清除用户的out操作
      step.splice(step.length-1,1);
    }
  }

  //显示开始页
  function showStart(){
    $("#out").hide();
    $("#start").show();
  }

  //显示Warning页面
  function showWarning(){
    //复活机会减少一次
    --restart;
    $("#loading-hover,#warning").show();
  }

  //显示happy页
  function showHappy(option){
    $('#happy-download').hide();
    setTimeout(function(){$('#happy-download').fadeIn(500)},500);
    $("#happy-content").text(option.content);
    $("#happy-kv img").attr('src',option.kv);
    $("#answer").hide();
    $("#happy").show();
    var shareText = option.shareText + '快来测测你是哪款白富美!';
    var shareImg = siteUrl + option.shareImg;
    wxShare(shareText,shareImg);
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
      var topA = picAtop;
      var topB = picBtop;
      var topC = picCtop;
    }else if(option.type=='text'){
      $_answerA.removeClass('pic pic-a').addClass('text texta');
      $_answerB.removeClass('pic pic-b').addClass('text textb');
      $_answerC.removeClass('pic pic-c').addClass('text textc');
      var topA = textAtop;
      var topB = textBtop;
      var topC = textCtop;
    }

    if(option.anNum==2){
      $_answerC.hide();
    }else if(option.anNum==3){
      $_answerC.show();
    }

    $_answerA.css({top:deviceHeight+'px','display':'block'})
             .attr('data-key',option.anAdataKey)
             .attr('data-mlz',option.anAdataMlz);
    $_answerB.css({top:deviceHeight+'px','display':'block'})
             .attr('data-key',option.anBdataKey)
             .attr('data-mlz',option.anBdataMlz);

    $_answerA.find('.con').empty().append(option.anAtext);
    $_answerB.find('.con').empty().append(option.anBtext);         

    if(option.anNum==3){
      $_answerC.css({top:deviceHeight+'px','display':'block'})
             .attr('data-key',option.anCdataKey)
             .attr('data-mlz',option.anCdataMlz);

      $_answerC.find('.con').empty().append(option.anCtext);       
    }


    
    $_answerA.animate({top:topA},qqTime);
    $_answerB.animate({top:topB},qqTime);

    if(option.anNum==3){
      $_answerC.animate({top:topC},qqTime);
    }  
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
    //隐藏选项 删除touch样式
    $("#answer .xx").hide().removeClass('xx-touch');
    
    //还原气球
    $("#answerA .qq img").attr('src','images/qq-a.png');
    $("#answerB .qq img").attr('src','images/qq-b.png');
    $("#answerC .qq img").attr('src','images/qq-c.png');
    
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
        },false);
        break; 

      //第5题乙 A out
      case 'que5b-an-a':
        showOut({
          'type':'被我是歌手淘汰了',
          'content':'真是想太多，既没有AngelaBaby的颜值，也没有韩红大姐的气魄，请问自信是吃白米饭来的吗？'
        },false);
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
        }else{
          showQue(que8bData);
        }
        break;
        
      //8题甲 A out
      case 'que8a-an-a':
        showOut({
          'type':'被天真的小盆友嫌弃了',
          'content':'你就等着坐过山车时裙子掀到脸上吧！内裤还是大妈肉色款，怎么好意思呢...'
        },false);
        break;
        
      //第8题乙 A out
      case 'que8b-an-a': 
        showOut({
          'type':'被天真的小盆友嫌弃了',
          'content':'你就等着坐过山车时裙子掀到脸上吧！内裤还是大妈肉色款，怎么好意思呢...'
        },true);
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
        },false);
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
        //第8题答甲 (这里因为答A OUT 所以只判断是否答B) 切11题甲
        if(step[7]=='que8a-an-b'){
          showQue(que11aData);
        }else{
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
        },false);
        break;
      
      //第12题AB 切13题(需要进一步判断11题 答 甲or乙)
      case 'que12-an-a':
      case 'que12-an-b':
        //11题答甲 切13题甲
        if(step[10]=='que11a-an-a' || step[10]=='que11a-an-b' || step[10]=='que11a-an-c'){
          showQue(que13bData);  
        }else{
          showQue(que13bData);  
        }
        break;
        
      //第12题C out 
      case 'que12-an-c':
        showOut({
          'type':'被老板撕逼了',
          'content':'这位小主定是得了失心疯，哪来的疯丫头，乳臭未干就敢穿小皮草...内心戏太过，抢了老板的风头，就等着老板撕逼吧，拉出去斩了'
        },false);
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
        },false);
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
        },false);
        break;
        
      //14题甲 A 切 15题甲
      case 'que14a-an-a': 
        showQue(que15aData);
        break;
        
      //14题甲 B endingG
      case 'que14a-an-b': 
        showHappy({
          'kv':'images/happy-ljl.png',//你就是精致优雅的刘嘉玲
          'content':'就是时刻都保持精致的你，认真的时刻最美，最后收获事业爱情双丰收，人生赢家！小衣以你为榜样',  
          'shareText':'我是精致优雅的刘嘉玲。',
          'shareImg':'images/share-ljl.jpg' 
        });
        break;
        
      //14题甲 C OUT
      case 'que14a-an-c':
        showOut({
          'type':'被自己蠢哭了',
          'content':'千万不能成为随风倒的墙头草，活了一把年纪却还想不清楚自己究竟要什么，多半是废了'
        },false);
        break;      
      
      //14题乙 A 切 endingH  
      case 'que14b-an-a':
        showHappy({
          'kv':'images/happy-xs.png',//你就是的鬼灵精怪的小S
          'content':'没想到派对最后未婚夫突然出现，化身蝙蝠侠，上演浪漫求婚桥段，向所有人宣告你属于他，小衣也想赤条条秀恩爱！',  
          'shareText':'我是鬼灵精怪的小S。',
          'shareImg':'images/share-xs.jpg' 
        });
        break;
        
      //14题乙 B 切 OUT  
      case 'que14b-an-b':
        showOut({
          'type':'被婚纱勒晕了',
          'content':'都要成为人妻了，还想着不醉不归，难道不怕宿醉错过吉时吗...还有温馨小提示：未婚夫是不能存档的'
        },false);
        break;  
        
      //14题乙 C 切 15题乙 
      case 'que14b-an-c':
        showQue(que15bData);
        break;
        
      //15题甲 A 切 endingA
      case 'que15a-an-a':
        showHappy({
          'kv':'images/happy-max.png',//你就是独立自强的Max
          'content':'你的时尚品味卓越而又出众，自己打造的独立品牌也在火热筹备中，小衣无限看好你！', 
          'shareText':'我是独立自强的Max。',
          'shareImg':'images/share-max.jpg' 
        });
        break;
        
      //15题甲 B 切 endingB
      case 'que15a-an-b':
        showHappy({
          'kv':'images/happy-gl.png',//你就是的霸气干练顾里
          'content':'人美能力强的并不一定就是女魔头，小衣觉得内外兼修的你很快就会当上CEO迎娶高富帅~', 
          'shareText':'我是霸气干练的顾里。',
          'shareImg':'images/share-gl.jpg' 
        });
        break;
        
      //15题甲 C 切 endingC
      case 'que15a-an-c':
        showHappy({
          'kv':'images/happy-zms.png',//你就是温柔善良的赵默笙
          'content':'不明争不暗斗，那么恬静亲和的你每个人都爱啊，小衣虽然是女的但也忍不住喜欢你，羞羞~', 
          'shareText':'我是温柔善良的赵默笙。',
          'shareImg':'images/share-zms.jpg' 
        });
        break;    
        
      //15题乙 A 切 endingA
      case 'que15b-an-a':
        showHappy({
          'kv':'images/happy-xln.png',//你就是超凡脱俗的小龙女
          'content':'或许相濡以沫就是两人相处的最高境界，小衣也要向你们学习！',
          'shareText':'我是超凡脱俗的小龙女。',
          'shareImg':'images/share-xln.jpg'  
        });
        break;
        
      //15题乙 B 切 endingB
      case 'que15b-an-b':
        showHappy({
          'kv':'images/happy-qsy.png',//你就是敢爱敢恨的千颂伊
          'content':'爱就是要全世界都知道，有一种秀恩爱叫羡煞旁人，小衣也是羡慕嫉妒但不恨，满满都是祝福~',  
          'shareText':'我是敢爱敢恨的千颂伊。',
          'shareImg':'images/share-qsy.jpg'
        });
        break;
      
      //15题乙 C 切 endingC
      case 'que15b-an-c':
        showHappy({
          'kv':'images/happy-hyf.png',//你就是率真果断的胡一菲
          'content':'爱他就是要跟他一起追寻自由，一步步走遍全世界，看山看水看彼此，小衣坐等集齐全球明信片~', 
          'shareText':'我是率真果断的胡一菲。',
          'shareImg':'images/share-hyf.jpg'
        });
        break;
    }
  }

  //改变魅力值
  function changeMlz(dataMlz){
    mlz = mlz + parseInt(dataMlz);
    $_mlzCur = $('#mlz-cur');
    $_mlzCur.css({'opacity':1}).text(dataMlz+'分');
    $_mlzCur.animate({'opacity':0},800);
    $('#mlz-total-num').text(mlz);
  }

  //重新开始
  function initStart(){
    //初始化魅力值和用户答题记录
    mlz = 20;
    step = [];
    restart = 1;
    
    $('#mlz-total-num').text(mlz);
    $("#out,#start").hide();
    $('#que-num span').text('1');
    $('#answer').show();
    
    //显示第一题
    showQue(que1Data);
  }

  //showQue(que15bData);

  //分享
  function wxShare(title,img){
    wx.onMenuShareTimeline({
      title: title, 
      link: siteUrl, 
      imgUrl: img, 
      success: function () {
        //代码统计
      }
    });

    wx.onMenuShareAppMessage({
      title: '白富美养成记', // 分享标题
      desc: title, // 分享描述
      link: siteUrl, // 分享链接
      imgUrl: img, // 分享图标
      type: '', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () { 
        //用户确认分享后执行的回调函数
      },
    });
  }

  //默认分享设置
  setTimeout(function(){
    wxShare('成就白富美谈何容易，快来试试最强速成宝典~',siteUrl+'images/share-default.jpg');
  },1000);
  
}