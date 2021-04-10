<?php 
define('RUTA_CLASS', dirname(dirname(__FILE__))); 
require_once  RUTA_CLASS.'/include/head.php';
require_once RUTA_CLASS."/class/Carrito-class.php";
$carrito = new Carrito();
$data = $carrito->cartProductList(10000);
?>
<div class="container-content">
<?php
foreach ($data as $key => $value) {
?>

<div class="card mb-2 card-shadow">
    <div class="card-body card-padding">
        <div class="container-order">
            <div class="container-img">
                <img src="<?=$data[$key]['image'];?>" class="img-product">
            </div>
            <div class="container-order-detall">
                <img src="../assets/icon/delete.svg" class="img-svg" onclick="deleteCart(<?=$data[$key]['id'];?>)">
                <span class="info-total"><?=$data[$key]['total'];?></span>
                <span class="info-detalle"><?=$data[$key]['name'];?></span>
            </div>
        </div>
    </div>
</div>
<?php }?>
</div>
<?php require_once  RUTA_CLASS.'/include/footer.php'?>
