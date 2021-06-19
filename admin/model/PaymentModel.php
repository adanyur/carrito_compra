<?php
define('RUTA', dirname(dirname(dirname(__FILE__))));
require_once RUTA."/config/DBController.php";



class PaymentModel extends DBController{

    function salesTotal(){ 

        $query = "SELECT  type_payment AS wayToPay, 
		         sum(venta) AS salesTotal
                FROM tbl_payment_detail
                GROUP BY type_payment
                UNION ALL
                SELECT 'TOTAL',
                        sum(venta) AS salesTotal
                FROM tbl_payment_detail
                
                ";
        $params = array();

        return json_encode($this->getDBResult($query, $params));

    }




 
 }

