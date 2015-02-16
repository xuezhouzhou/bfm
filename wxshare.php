<?php
$cdnUrl = "";
require_once "jssdk.php";
$jssdk = new JSSDK("wxd31771b7d224b883", "60fd9ce92eb04c67514d9a971484e2d1");
$signPackage = $jssdk->GetSignPackage();
?>
<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>微信接口测试</title>
</head>
<body>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
wx.config({
  debug: true,
  appId: '<?php echo $signPackage["appId"];?>',
  timestamp: '<?php echo $signPackage["timestamp"];?>',
  nonceStr: '<?php echo $signPackage["nonceStr"];?>',
  signature: '<?php echo $signPackage["signature"];?>',
  jsApiList: [
    //所有要调用的 API 都要加到这个列表中
    'onMenuShareTimeline',
    'onMenuShareAppMessage'
  ]
});

wx.onMenuShareTimeline({
  title: '成就白富美谈何容易，快来试试最强速成宝典~', 
  link: document.URL, 
  imgUrl:'http://android.yourdream.cc/bfm/images/share-default.jpg' , 
  success: function () {
    //代码统计
  }
});

wx.onMenuShareAppMessage({
  title: '白富美养成记', // 分享标题
  desc: '成就白富美谈何容易，快来试试最强速成宝典~', // 分享描述
  link: document.URL, // 分享链接
  imgUrl: 'http://android.yourdream.cc/bfm/images/share-default.jpg', // 分享图标
  type: '', // 分享类型,music、video或link，不填默认为link
  dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
  success: function () { 
    
  },
});
</script>
</body>
</html>