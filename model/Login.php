<?php
define('RUTA_CLASS', dirname(dirname(__FILE__))); 
require_once RUTA_CLASS."/class/User-class.php";

$_user = new User();

$user = isset($_POST['user']) ? $_POST['user'] : '';
$password = isset($_POST['password']) ? $_POST['password'] : '';


if($_user->Login($user,MD5($password))){
    die(true);
}else{
    die(false);
}

//die(json_encode());

?>