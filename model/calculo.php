<?php 
define('RUTA_CLASS', dirname(dirname(__FILE__))); 
require_once RUTA_CLASS."/class/Carrito-class.php"; 
$carrito = new Carrito();
$data = $carrito->Calculo(10000);
die(json_encode($data));
?>