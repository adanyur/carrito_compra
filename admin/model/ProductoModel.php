<?php
define('RUTA', dirname(dirname(dirname(__FILE__))));
require_once RUTA."/config/DBController.php";

class Producto extends DBController{

   function getProductAll(){
        $query ="SELECT a.name,price,category,b.name 
                 FROM tbl_product a
                 JOIN tbl_category b ON (a.category=b.id)";
        return $this->getDBResult($query);;
   } 

}

?>