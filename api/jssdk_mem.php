<?php
class JSSDK {
  private $appId;
  private $appSecret;
  private $mem;


  public function __construct($appId,$appSecret,$mem) {
    $this->appId = $appId;
    $this->appSecret = $appSecret;
    $this->mem = $mem;
  }


  public function getSignPackage() {
    $jsapiTicket = $this->getJsApiTicket();

    // 注意 URL 一定要动态获取，不能 hardcode.
    $protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
    $url = "$protocol$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";

    $timestamp = time();
    $nonceStr = $this->createNonceStr();

    // 这里参数的顺序要按照 key 值 ASCII 码升序排序
    $string = 'jsapi_ticket='.$jsapiTicket.'&noncestr='.$nonceStr.'&timestamp='.$timestamp.'&url='.$url;

    $signature = sha1($string);
    
    $signPackage = array(
      "appId"     => $this->appId,
      "nonceStr"  => $nonceStr,
      "timestamp" => $timestamp,
      "url"       => $url,
      "signature" => $signature,
      "rawString" => $string
    );

    return $signPackage; 
  }


  private function createNonceStr($length = 16) {
    $chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    $str = "";
    for ($i = 0; $i < $length; $i++) {
      $str .= substr($chars, mt_rand(0, strlen($chars) - 1), 1);
    }
    return $str;
  }


  private function getJsApiTicket() {
    //判断缓存是否存在
    if($this->mem->get('ticket')===false){
      //获取access_token
      $accessToken = $this->getAccessToken();

      //获取ticket
      $url = 'https://api.weixin.qq.com/cgi-bin/ticket/getticket?type=jsapi&access_token='.$accessToken;
      $res = json_decode($this->httpGet($url));
      $ticket = $res->ticket;

      //MEMCACHE缓存 ticket
      $this->mem->set('ticket',$ticket,MEMCACHE_COMPRESSED,7200);
      //echo "cache not exists";
    }else{
      //缓存存在直接获取 ticket
      $ticket  = $this->mem->get('ticket');
      //echo "cache exists";
    }
    
    return $ticket;
  }


  private function getAccessToken(){
    //判断缓存是否存在
    if($this->mem->get('access_token')===false){
      //获取 access_token 
      $url = 'https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid='.$this->appId.'&secret='.$this->appSecret; 
      $res = json_decode($this->httpGet($url));
      $access_token = $res->access_token;

      //MEMCACHE缓存 access_token
      $this->mem->set('access_token',$access_token,MEMCACHE_COMPRESSED,7200);
    }else{
      //缓存存在直接获取
      $access_token  = $this->mem->get('access_token');
    }

    return $access_token;
  }


  private function httpGet($url) {
    $curl = curl_init();
    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($curl, CURLOPT_TIMEOUT, 500);
    curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, false);
    curl_setopt($curl, CURLOPT_URL, $url);

    $res = curl_exec($curl);
    curl_close($curl);

    return $res;
  }

  // //获取AccessToken 测试接口
  // public function getAccessTokenApi(){
  //   return $this->getAccessToken();
  // }

  // //获取JsApiTicket 测试接口
  // public function getJsApiTicketApi(){
  //   return $this->getJsApiTicket();
  // }

}