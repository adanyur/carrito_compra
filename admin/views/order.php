<?php
define('__RUTA__', dirname(dirname(__FILE__)));
require_once __RUTA__."/Controller/OrderController.php";
$order = new OrderController();


$fecha = isset($_GET['fecha'])?$_GET['fecha']:null;
$idshow = isset($_GET['idshow'])?$_GET['idshow']:null;
$method =isset($_POST['method'])? $_POST['method']:null;
$REQUEST_METHOD = $method ? $method:$_SERVER['REQUEST_METHOD'];


switch ($REQUEST_METHOD) {
    case 'GET':      
            if(isset($_GET['idshow'])){
                return die($order->show($idshow));       
            }
            return die($order->index($fecha));
        break;
    
}




?>