<?php
define('__RUTA__', dirname(dirname(__FILE__)));
require_once __RUTA__."/Controller/ProductoController.php";

$productoController = new ProductoController();
return die($productoController->index());


?>