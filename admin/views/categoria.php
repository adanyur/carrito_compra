<?php
define('__RUTA__', dirname(dirname(__FILE__)));
require_once __RUTA__."/Controller/CategoriaController.php";

$categoria = new CategoriaController();
return die($categoria->index());


?>