<?php
require_once "config/DBController.php";

class Producto extends DBController
{

    function getAllProduct()
    {
        $query = "SELECT * FROM tbl_product";
        $productResult = $this->getDBResult($query);
        return $productResult;
    }
}
