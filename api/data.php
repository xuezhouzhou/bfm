<?php

$cdnUrl = "http://download.yourdream.cc/bfm/1.0.4/";

require_once "jssdk.php";

$jssdk = new JSSDK("wxd31771b7d224b883", "60fd9ce92eb04c67514d9a971484e2d1");

$signPackage = $jssdk->GetSignPackage();