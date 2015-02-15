<?php
require_once "api/jssdk.php";
$jssdk = new JSSDK("wxd31771b7d224b883", "60fd9ce92eb04c67514d9a971484e2d1");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
<title>白富美养成记</title>
<link href="css/loading.css" rel="stylesheet">
<link href="css/start.css" rel="stylesheet">
<link href="css/answer.css" rel="stylesheet">
<link href="css/warning.css" rel="stylesheet">
<link href="css/out.css" rel="stylesheet">
<link href="css/happy.css" rel="stylesheet">
<link href="css/share.css" rel="stylesheet">
</head>
<body>
<!-- Loadind页遮罩层 -->
<div id="loading-hover"></div>


<!-- 进度条 -->
<div id="loading-bar-wrap">
  <div id="loading-bar">
    <div id="loading-bar-inner">
      <div class="hdj"><img src="images/loading-hdj.png"></div>
    </div>
  </div>
</div>


<!-- 开始页 -->
<div id="start">
  <div id="start-inner">
    <div id="start-kv"><img src="images/start-kv.png"></div>
    <div id="start-btn"><img src="images/start-btn.png"></div>  
  </div>
</div>



<!-- 答题页面 -->
<div id="answer">

  <!-- 头部背景 -->
  <div id="answer-header">
    <div id="answer-header-inner">
      <img src="images/answer-header.jpg">
      <img src="images/answer-header.jpg">
      <img src="images/answer-header.jpg">
      <img src="images/answer-header.jpg">
      <img src="images/answer-header.jpg">
      <img src="images/answer-header.jpg">    
    </div>
  </div>

  <div id="answer-inner">
    <!-- 题号 -->
    <div id="que-num"><span>1</span></div>

    <!-- 魅力值 -->
    <div id="mlz-wrap">
      <div id="mlz-cur"></div>
      <div id="mlz-total">
        <div class="icon"><img src="images/answer-icon-mlz.png"></div>
        <div class="lab">魅力值&nbsp;<span id="mlz-total-num">20</span></div>
      </div>
    </div>

    <!-- 问题 -->
    <div id="question"></div>

    <!-- 选项 -->
    <div id="answerA" class="xx text texta">
      <div class="con"></div> 
      <div class="qq"><img src="images/qq-a.png"></div>
      <div class="yy"><img src="images/yy-yx.png"></div>
    </div>
    
    <div id="answerB" class="xx text texta">
      <div class="con"></div>
      <div class="qq"><img src="images/qq-b.png"></div>
      <div class="yy zx"><img src="images/yy-zx.png"></div>
      <div class="yy ys"><img src="images/yy-ys.png"></div>
    </div>

    <div id="answerC" class="xx text text">
      <div class="con"></div>
      <div class="qq"><img src="images/qq-c.png"></div>
      <div class="yy"><img src="images/yy-yx.png"></div>
    </div>
  </div>
  
  <!-- 底部花纹 -->
  <div id="answer-bottom">
    <div id="answer-bottom-inner">
      <img src="images/answer-bottom.png">
      <img src="images/answer-bottom.png">
      <img src="images/answer-bottom.png">
      <img src="images/answer-bottom.png">
      <img src="images/answer-bottom.png">
      <img src="images/answer-bottom.png"> 
    </div>
  </div>
</div>

<!-- warning页 -->
<div id="warning">
  <div id="warning-inner">
    <div id="warning-kv"><img src="images/warning-kv.png"></div>
    <div id="warning-btn"><img src="images/warning-btn.png"></div>  
  </div>
</div>


<!-- OUT页 -->
<div id="out">
  <div id="out-inner">
    <div id="out-kv"><img src="images/out-kv.png"></div>
    <div id="out-type"></div>
    <div id="out-content"></div>
    <div id="out-btn-wrap">
      <div id="out-btn-start" class="btn"><img src="images/out-btn-start.png"></div>
      <div id="out-btn-tc" class="btn"><img src="images/out-btn-tc.png"></div>
    </div>
    <a id="out-download" href="http://ichuanyi.com/get/?f=game"><img src="images/out-download.png"></a>
  </div>
</div>


<!-- happy ending -->
<div id="happy">
  <div id="happy-inner">
    <div id="happy-kv"><img src=""></div>
    <div id="happy-content"></div>
    <div id="happy-btn"><img src="images/happy-btn.png"></div>
    <a id="happy-download" href="http://ichuanyi.com/get/?f=game"><img src="images/happy-download.png"></a>
  </div>
</div>

<!--分享提示页面-->
<div id="share">
  <h3>请点击右上角按钮，在选择分享到朋友圈或分享给好友</h3>
</div>

<script>
//页面统计
var _hmt = _hmt || [];
(function() {
    var hm = document.createElement("script");
    hm.src = "//hm.baidu.com/hm.js?81f958da40dae4d146ef160171e49c7e";
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(hm, s);
})();
</script>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>

<script src="js/jquery.min.js"></script>
<script src="js/res.js"></script>
<script src="js/main.js"></script>
<script>
var deviceHeight = $('body').height();
if(deviceHeight<=416){
  $.getScript('js/data-iphone4.js',run); 
}else if(deviceHeight>416 && deviceHeight<=504){
  $.getScript('js/data-iphone5.js',run);
}else if(deviceHeight>505 && deviceHeight<=603){
  $.getScript('js/data-iphone6.js',run);
}else{
  //其他情况暂时按iphone5适配
  $.getScript('js/data-iphone5.js',run);
}
</script>

<script>
wx.config({
  debug: false,
  appId: '<?php echo $signPackage["appId"];?>',
  timestamp: <?php echo $signPackage["timestamp"];?>,
  nonceStr: '<?php echo $signPackage["nonceStr"];?>',
  signature: '<?php echo $signPackage["signature"];?>',
  jsApiList: [
    //所有要调用的 API 都要加到这个列表中
    'onMenuShareTimeline',
    'onMenuShareAppMessage'
  ]
});

//默认分享到朋友圈
wx.onMenuShareTimeline({
  title: '成就白富美谈何容易，快来试试最强速成宝典~', 
  link: siteUrl, 
  imgUrl: 'images/share-default.jpg', 
  success: function () {
    //代码统计
    //alert('用户确认分享');
  }
});

//默认发送给朋友
wx.onMenuShareAppMessage({
  title: '白富美养成记', // 分享标题
  desc: '成就白富美谈何容易，快来试试最强速成宝典~', // 分享描述
  link: siteUrl, // 分享链接
  imgUrl: 'images/share-default.jpg', // 分享图标
  type: '', // 分享类型,music、video或link，不填默认为link
  dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
  success: function () { 
    // 用户确认分享后执行的回调函数
  },
}); 
</script>
</body>
</html>