<?php
define('RUTA_CLASS', dirname(dirname(__FILE__)));
require_once RUTA_CLASS."\class\Carrito-class.php";
$shoppingCart = new Carrito();
$data =  $shoppingCart->cartProductList(10000);
die(json_encode($data));
?>