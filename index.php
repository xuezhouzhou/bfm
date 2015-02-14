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
</body>
</html>