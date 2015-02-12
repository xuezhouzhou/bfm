<?php

function get_access_token($appid,$secret){  
  $url="https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=".$appid."&secret=".$secret;  
  $json=http_request_json($url);
  $data=json_decode($json,true);  
  if($data['access_token']){  
      return $data['access_token'];  
  }else{  
      return "获取access_token错误";  
  }         
}  
    
function http_request_json($url){    
  $ch = curl_init();  
  curl_setopt($ch, CURLOPT_URL,$url);  
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);  
  curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);  
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);  
  $result = curl_exec($ch);  
  curl_close($ch);  
  return $result;    
}

$access_token = get_access_token('wxd31771b7d224b883','60fd9ce92eb04c67514d9a971484e2d1');

echo $access_token;

?>