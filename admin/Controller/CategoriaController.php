<?php
define('__RUTA__model', dirname(dirname(__FILE__)));
require_once __RUTA__model."/model/CategoriaModel.php";


class CategoriaController extends CategoriaModel{
     
     
    function index(){
        $categoria = new CategoriaModel();
        return json_encode($categoria->getCategoriatAll());
    }

    function store(){
        $categoria = new CategoriaModel();
        return json_encode($categoria->getCategoriatAll());    
    }

}



