<?php
define('__RUTA__model', dirname(dirname(__FILE__)));
require_once __RUTA__model."/Model/PaymentModel.php";


class PaymentController extends PaymentModel{

    function SalesTotal(){
        $auth = new PaymentModel();
        $data = $auth->salesTotal();
        return json_encode(array('status'=>true,'data'=>$data));
    }


}