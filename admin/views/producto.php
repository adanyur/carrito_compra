<?php
define('__RUTA__', dirname(dirname(__FILE__)));
require_once __RUTA__."/Controller/ProductoController.php";
$productoController = new ProductoController();

switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        return die($productoController->store());  
        break;
    // case 'GET'
    //     break;    
    // case 'PUT'
    //     break;
    // case 'DELETE'    
    //     break;
    default:
        return die($productoController->index());  
}




?>