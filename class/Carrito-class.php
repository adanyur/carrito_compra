<?php
require_once "config/DBController.php";

class Carrito extends DBController
{   


    function getAllCarrito()
    {
        $query = "SELECT * FROM tbl_cart";
        $productResult = $this->getDBResult($query);
        return $productResult;
    }

    function getCarritoByCode($id)
    {
        $query = "SELECT * FROM tbl_cart WHERE member_id=?";

        $params = array(
            array(
                "param_type" => "s",
                "param_value" => $id
            )
        );

        $productResult = $this->getDBResult($query, $params);
        return $productResult;
    }


    function addToCart($product_id, $quantity, $member_id)
    {
        $query = "INSERT INTO tbl_cart (product_id,quantity,member_id) VALUES (?, ?, ?)";
        $params = array(
            array(
                "param_type" => "i",
                "param_value" => $product_id
            ),
            array(
                "param_type" => "i",
                "param_value" => $quantity
            ),
            array(
                "param_type" => "i",
                "param_value" => $member_id
            )
        );
        
        $this->insertDB($query, $params);
    }
}
