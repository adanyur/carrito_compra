<?php

if(isset($_COOKIE['COOKIE_DATA_INDEFINED_SESSION'])){
    $nombre_user = isset($_COOKIE['COOKIE_DATA_INDEFINED_SESSION']['user']) ? $_COOKIE['COOKIE_DATA_INDEFINED_SESSION']['user'] : '';
    $password_user = isset($_COOKIE['COOKIE_DATA_INDEFINED_SESSION']['password']) ? $_COOKIE['COOKIE_DATA_INDEFINED_SESSION']['password'] : '';
    
    die($nombre_user);
}else{
    die(false);
}


?>