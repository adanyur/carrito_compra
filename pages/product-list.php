<?php 
require_once "./class/Producto-class.php";
$shoppingCart = new Producto();
$product_array = $shoppingCart->getAllProduct();
foreach ($product_array as $key => $value) {
?>
<div class="card mb-4 card-shadow">
  <img class="card-img-top img-border-radius" src="<?=$product_array[$key]["image"];?>" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title"><?=$product_array[$key]["price"] ?>
    </h5>
    <p class="card-text"><?=$product_array[$key]["name"] ?></p>
    <a href="#" class="btn btn-primary">add to cart</a>
  </div>
</div>
<?php } ?>