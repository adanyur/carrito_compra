<?php
define('RUTA', dirname(dirname(dirname(__FILE__))));
require_once RUTA."/config/DBController.php";

class ProductoModel extends DBController{

   function getProductAll(){
   $query ="
        SELECT a.name AS nameproducto,
        price,
        category,
        b.name AS namecategory
        FROM tbl_product a
        JOIN tbl_category b ON (a.category=b.id)";
        return $this->getDBResult($query);;
   } 

}

?>