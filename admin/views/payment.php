<?php
    define('__RUTA__', dirname(dirname(__FILE__)));
    require_once __RUTA__."/Controller/PaymentController.php";
    $payment = new PaymentController();
    die($payment->SalesTotal());
?>