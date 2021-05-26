<?php
define('__RUTA__model', dirname(dirname(__FILE__)));
require_once __RUTA__model."/Model/CategoriaModel.php";


class CategoriaController extends CategoriaModel{
     
     
    function index(){
        $categoria = new CategoriaModel();
        return json_encode($categoria->getCategoriatAll());
    }

    function store($name,$image){
        $categoria = new CategoriaModel();
        return json_encode($categoria->postAddCategory($name,$image));    
    }

    function show($id){
        $categoria = new CategoriaModel();
        return json_encode($categoria->getCategoriaById($id));    
    }

    function update($name,$image,$id){
        $categoria = new CategoriaModel();
        return json_encode($categoria->putCategoria($name,$image,$id));    
    }

    function delete($id){
        $categoria = new CategoriaModel();
        return json_encode($categoria->deleteCategoria($id));    
    }

}



