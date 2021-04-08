<div class="container-cart-count">
<button type="button" class="btn btn-primary"  id="listProducto">
  carrito <span class="badge badge-light" id="countCarrito"></span>
</button>
</div>
<form name="cart" id="add-product" class="scroll">
<?php 
require_once "./class/Producto-class.php";
$shoppingCart = new Producto();
$product_array = $shoppingCart->getAllProduct();
foreach ($product_array as $key => $value) {
?>
<div class="card mb-4 card-shadow">
  <img class="card-img-top img-border-radius" src="<?=$product_array[$key]["image"];?>" alt="Card image cap">
  <div class="card-body">
         <div class="info">
            <div class="info-price">
               <span>$<?=$product_array[$key]["price"];?></span>
            </div>
            <div class="infor-title">
               <span ><?=$product_array[$key]["name"];?></span>
               <input type="number" id="quantity<?=$product_array[$key]["id"];?>" name="quantity"  value=1 class="input-control">
               <input type="hidden" id="idproduct<?=$product_array[$key]["id"];?>" name="id" value="<?=$product_array[$key]["id"];?>">
               <input type="hidden" id="usuario<?=$product_array[$key]["id"];?>" name="usuario" value=10000>
            </div>
         </div>
         
         <button  type="button" onclick="AddCart(<?=$product_array[$key]['id'];?>)" class="btn-add button-add-product">add to cart</button>
  </div>
</div>
<?php } ?>
</form>
<!-- modal -->
<input class="modal-btn" type="checkbox" id="modal-btn" name="modal-btn" />
    <div class="modal">
      <div class="modal-wrap">
        <div class="modal-head"><h1 class="text-center">carrito</h1></div>
        <div class="modal-body">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">producto</th>
              <th scope="col">cantidad</th>
              <th scope="col">precio</th>
            <th scope="col">total</th>
            </tr>
          </thead>
          <tbody id="carProductList" class="test-scroll">
          </tbody>
        </table>
         </div>
      </div>
    </div>
