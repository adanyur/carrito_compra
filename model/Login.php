<?php
define('RUTA_CLASS', dirname(dirname(__FILE__))); 
require_once RUTA_CLASS."/class/User-class.php";

$_user = new User();
$user = isset($_POST['user']) ? $_POST['user'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';
$count = $_user->Login($user,$password);

if($count[0]['count'] > 0){
    setcookie("COOKIE_INDEFINED_SESSION", TRUE, time()+31622400);
    setcookie("COOKIE_DATA_INDEFINED_SESSION[user]", $user, time()+31622400);

    if(isset($_COOKIE['COOKIE_DATA_INDEFINED_SESSION'])){
        $nombre_user = isset($_COOKIE['COOKIE_DATA_INDEFINED_SESSION']['user']) ? $_COOKIE['COOKIE_DATA_INDEFINED_SESSION']['user'] : '';
        die($nombre_user);
    }
}

?>