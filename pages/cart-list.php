<?php 
require_once "./class/Carrito-class.php";
$shoppingCart = new Carrito();

$id = isset($_GET['id']) ? $_GET['id'] : '';
$cantidad = isset($_GET['quantity']) ? $_GET['quantity'] : '';
$usuario = isset($_GET['usuario']) ? $_GET['usuario'] : '';

$data = $shoppingCart->getAllCarrito();
// $dataid= $shoppingCart->getCarritoByCode(1952079);
$insert= $shoppingCart->addToCart($id,$cantidad,$usuario);

// print_r($data);


?>