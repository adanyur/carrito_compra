<?php
define('RUTA_CLASS', dirname(dirname(__FILE__))); 
require_once  RUTA_CLASS.'/include/head.php';
require_once  RUTA_CLASS.'/include/nav.php';
require_once RUTA_CLASS."/class/Producto-class.php";
?>

<div class="container-imgen" id="listCategory"></div>
<div id="listAll">
<div class="container-content">
<?php 
$shoppingCart = new Producto();
$product_array = $shoppingCart->getAllProduct();
foreach ($product_array as $key => $value) {
?>
<div class="card mb-4 card-shadow card-width">
  <img class="card-img-top img-border-radius" src="<?=$product_array[$key]["image"];?>" alt="Card image cap">
  <div class="card-body">
      <div class="card-info">
         <div class="info-title">
            <?=$product_array[$key]["name"];?>
         </div>
         <div class="info-price-quanty">
            <div class="info-price">
               $<?=$product_array[$key]["price"];?>
            </div>
            <div class="info-quanty">
               <input type="number" id="quantity<?=$product_array[$key]["id"];?>" name="quantity"  value=1 class="input-control">
            </div>
      </div>
	   <input type="hidden" id="idproduct<?=$product_array[$key]["id"];?>" name="id" value="<?=$product_array[$key]["id"];?>">
	   <input type="hidden" id="usuario<?=$product_array[$key]["id"];?>" name="usuario" value=10000>
      </div>
      <button  type="button" id="product<?=$product_array[$key]['id'];?>" onclick="AddCart(<?=$product_array[$key]['id'];?>)" class="btn-add button-add-product">add to cart</button>
  </div>
</div>
<?php } ?>
</div>
</div>
<div id="searchCategoryProduct"></div>
<?php require_once  RUTA_CLASS.'/include/modal.php'?>
<?php require_once  RUTA_CLASS.'/include/footer.php'?>