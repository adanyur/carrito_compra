<?php 
require_once "./class/Producto-class.php";
$shoppingCart = new Producto();
$product_array = $shoppingCart->getAllProduct();
foreach ($product_array as $key => $value) {
?>
<div class="card mb-4 card-shadow">
  <img class="card-img-top img-border-radius" src="<?=$product_array[$key]["image"];?>" alt="Card image cap">
  <div class="card-body">
     <form action="./pages/cart-list.php" method="GET">
         <div class="info">
            <div class="info-price">
               <span>$<?=$product_array[$key]["price"];?></span>
            </div>
            <div class="infor-title">
               <span><?=$product_array[$key]["name"];?></span>
               <input type="number" name="quantity"  value=1 class="input-control">
               <input type="hidden" name="id" value="<?=$product_array[$key]["id"];?>">
               <input type="hidden" name="usuario" value="10000">
            </div>
         </div>
         <button  type="submit" class="btn-add">add to cart</button>
    </form>
  </div>
</div>
<?php } ?>