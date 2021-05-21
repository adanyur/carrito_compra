<?php
define('__RUTA__', dirname(dirname(__FILE__)));
require_once __RUTA__."/model/ProductoModel.php";
$producto = new Producto();
return die(json_encode($producto->getProductAll()));
?>