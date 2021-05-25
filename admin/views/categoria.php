<?php
define('__RUTA__', dirname(dirname(__FILE__)));
require_once __RUTA__."/Controller/CategoriaController.php";
$categoria = new CategoriaController();

switch ($_SERVER['REQUEST_METHOD']) {
    case 'POST':
        return die($categoria->store());  
        break;
    // case 'GET'
    //     break;    
    case 'PUT':
        return die($categoria->store());
        break;
    // case 'DELETE'    
    //     break;
    default:
        return die($categoria->index());
}

?>