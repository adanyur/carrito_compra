<?php
define('RUTA', dirname(dirname(dirname(__FILE__))));
require_once RUTA."/config/DBController.php";

class OrderModel extends DBController{

    function getListOrder($fecha ){      
        $query = "SELECT 
                  a.id,   
                  b.Firstname as client,
		          a.payment_type,a.order_status,
		          cast(order_at as date) as fecha
                  from tbl_order a
                 join tbluser b on(a.customer_id =b.id)
                 where cast(order_at as date)=?";
        $params = array(
            array(
                "param_type" => "s",
                "param_value" => $fecha
            )
        );

        return json_encode($this->getDBResult($query, $params));

    }

    function getOrderById($id){
        $query = "SELECT a.id,b.name,b.price,b.image,a.quantity,
                 (a.quantity * b.price)as total
        from tbl_order_item a
        join tbl_product b on (a.product_id=b.id)
        where order_id = ?";

        $params = array(
            array(
                "param_type" => "s",
                "param_value" => $id
            )
        );

        return json_encode($this->getDBResult($query, $params));
    }

}


 