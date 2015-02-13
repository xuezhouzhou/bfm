<?php
require_once "api/jssdk.php";
$jssdk = new JSSDK("wxd31771b7d224b883", "60fd9ce92eb04c67514d9a971484e2d1");
$signPackage = $jssdk->GetSignPackage();
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title></title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
</head>
<body>
</body>
<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
<script>
var shareTitle = '我就是独立自强的Max!美！快来测测你是哪款白富美～';
var shareLink = 'http://download.ichuanyi.com/bfm/';
var shareImg = 'http://bfm.xuezz.cn/share-test.jpg';

wx.config({
  debug: true,
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


wx.onMenuShareTimeline({

  title: shareTitle, 
  
  link: shareLink, 
  
  imgUrl: shareImg, 
  
  success: function () { 
    alert('用户确认分享');
  },
  
  cancel: function () { 
    alert('用户取消分享');
  }
});
</script>
</html>