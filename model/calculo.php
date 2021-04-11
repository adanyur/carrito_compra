<?php 
define('RUTA_CLASS', dirname(dirname(__FILE__))); 
require_once RUTA_CLASS."/class/Carrito-class.php"; 
$carrito = new Carrito();
$data = $carrito->CalculoCart(10000);
die(json_encode($data));
?>