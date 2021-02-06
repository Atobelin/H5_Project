<?php
/**
 * Created by PhpStorm.
 * User: mac
 * Date: 2019/2/25
 * Time: 11:10 AM
 */

ini_set("display_errors", "Off");
$code = $_GET['code'] ??  '';
$openid = $_GET['openid'] ?? '';
function http_get_data($url)
{

    $ch = curl_init();
    curl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'GET');
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_URL, $url);
    ob_start();
    curl_exec($ch);
    $return_content = ob_get_contents();
    ob_end_clean();

    $return_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    return $return_content;

}
if($openid){
    $local_url = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'].'?openid='.$openid;
} else {
    $local_url = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
}
//$local_url = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['PHP_SELF'];
//$local = 'http://'.$_SERVER['HTTP_HOST'].$_SERVER['REQUEST_URI'];
if (empty($code)) {
    $url = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx8b6b0d32cf2055f8&redirect_uri=$local_url&response_type=code&scope=snsapi_userinfo&state=STATE#wechat_redirect";

    header('location:'.$url);
} else {
    $code = $_GET['code'];
    $get_user_url = 'https://klingyang.com/api/Zirue/saveUserinfo?code='.$code;
    $userinfo = http_get_data($get_user_url);
    $userinfo = json_decode($userinfo,true);
// echo $userinfo['openid'];
    if($userinfo == 101 ) {
        header('location:'.$local_url);
    }

}

?>