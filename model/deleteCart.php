<?php
define('RUTA_CLASS', dirname(dirname(__FILE__)));
require_once RUTA_CLASS."\class\Carrito-class.php";
$shoppingCart = new Carrito();
$id = isset($_POST['id']) ? $_POST['id'] : '';
$data =  $shoppingCart->deleteCart($id);
echo json_encode($data);
?>