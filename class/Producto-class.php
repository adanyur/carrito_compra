<?php
define('RUTA_PRODUCTO', dirname(dirname(__FILE__)));
require_once RUTA_PRODUCTO."/config/DBController.php";

class Producto extends DBController
{

    function getAllProduct()
    {
        $query = "SELECT * FROM tbl_product";
        $productResult = $this->getDBResult($query);
        return $productResult;
    }
}
