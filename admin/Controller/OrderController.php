<?php
define('__RUTA__model', dirname(dirname(__FILE__)));
require_once __RUTA__model."/Model/OrderModel.php";

class OrderController extends OrderModel{

    function index($fecha){
        $order = new OrderModel();
        return $order->getListOrder($fecha);
    }

    function show($id){
        $order = new OrderModel();
        return $order->getOrderById($id);
    }

}
