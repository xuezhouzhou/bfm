<?php

require_once 'jssdk_mem.php';

$memcache = new Memcache;
$memcache->connect('localhost', 11211) or die ("Could not connect");

$jssdk = new JSSDK("wx58ff94baa56ffba1", "dc3884c03a78276c1c5a448599806e1e",$memcache);

$res = $jssdk->getSignPackage();


dump($res);


function dump($var){
  echo '<pre>';
  var_dump($var);
  echo '<pre>';
}  