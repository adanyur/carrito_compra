<?php 
require_once "Carrito-class.php";
$shoppingCart = new Carrito();

$id = $_POST['id'];
$cantidad = $_POST['quantity'];
$usuario = $_POST['usuario'];

$shoppingCart->addToCart($id,$cantidad,$usuario);

echo "se grabo";

?>