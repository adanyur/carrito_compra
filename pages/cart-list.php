<?php 
define('RUTA_CLASS', dirname(dirname(__FILE__)));
require_once RUTA_CLASS."\class\Carrito-class.php";
$shoppingCart = new Carrito();

$id = $cantidad = $usuario ='';


 $id = isset($_POST['id']) ? $_POST['id'] : '';
 $cantidad = isset($_POST['quantity']) ? $_POST['quantity'] : '';
 $usuario = isset($_POST['usuario']) ? $_POST['usuario'] : '';

 echo $usuario."<br>";
 echo $cantidad."<br>";
 echo $id."<br>";

//unset($_POST['id']);


echo $_SERVER['PHP_SELF'];

//$data = $shoppingCart->getAllCarrito();
//$insert= $shoppingCart->addToCart($id,$cantidad,$usuario);

//$dataid= $shoppingCart->getCarritoByCode(1952079);
//print_r($dataid);



?>