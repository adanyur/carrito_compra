<?php
define('__RUTA__model', dirname(dirname(__FILE__)));
require_once __RUTA__model."/model/ProductoModel.php";


class ProductoController extends ProductoModel{

       

     
    function index(){
        $producto = new ProductoModel();
        return json_encode($producto->getProductAll());
    }



}













?>