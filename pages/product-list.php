<?php
define('RUTA_CLASS', dirname(dirname(__FILE__))); 
require_once  RUTA_CLASS.'/include/head.php';
require_once RUTA_CLASS."/class/Producto-class.php";
?>
<div class="container-content">
<?php 
$shoppingCart = new Producto();
$product_array = $shoppingCart->getAllProduct();
foreach ($product_array as $key => $value) {
?>
<div class="card mb-4 card-shadow card-width">
  <img class="card-img-top img-border-radius" src="<?=$product_array[$key]["image"];?>" alt="Card image cap">
  <div class="card-body">
         <div class="info">
            <div class="info-price">
               <span>$<?=$product_array[$key]["price"];?></span>
            </div>
            <div class="infor-title">
               <span><?=$product_array[$key]["name"];?></span>
               <input type="number" id="quantity<?=$product_array[$key]["id"];?>" name="quantity"  value=1 class="input-control">
               <input type="hidden" id="idproduct<?=$product_array[$key]["id"];?>" name="id" value="<?=$product_array[$key]["id"];?>">
               <input type="hidden" id="usuario<?=$product_array[$key]["id"];?>" name="usuario" value=10000>
            </div>
         </div>
         
         <button  type="button" onclick="AddCart(<?=$product_array[$key]['id'];?>)" class="btn-add button-add-product">add to cart</button>
  </div>
</div>
<?php } ?>
</div>
<?php require_once  RUTA_CLASS.'/include/modal.php'?>
<?php require_once  RUTA_CLASS.'/include/footer.php'?>