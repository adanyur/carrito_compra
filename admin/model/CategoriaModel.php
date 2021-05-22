<?php
define('RUTA', dirname(dirname(dirname(__FILE__))));
require_once RUTA."/config/DBController.php";


class CategoriaModel extends DBController{

    function getCategoriatAll(){
    $query ="SELECT name FROM tbl_category";
         return $this->getDBResult($query);;
    } 
 
 }