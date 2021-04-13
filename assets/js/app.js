$(document).ready(function () {
  countCarrito();
});

const AddCart = (id) => {
  let cantidad = document.getElementById("quantity" + id).value;
  let idproducto = document.getElementById("idproduct" + id).value;
  let usuario = document.getElementById("usuario" + id).value;
  document.getElementById(`product${id}`).disabled = true;
  document.getElementById(`product${id}`).style.background = "red";

  let data = { idproducto, cantidad, usuario };
  $.post("../pages/cart-list.php", data, (data) => {
    countCarrito();
  });
};

const countCarrito = () => {
  $.get("../model/countCarrito.php", (data) => {
    let count = JSON.parse(data);
    count.forEach((count) => {
      document.getElementById("countCarrito").innerHTML = count.count || 0;
    });
  });
};

document.getElementById("listProducto").addEventListener("click", (e) => {
  document.getElementById("modal-btn").checked = true;
  cartProductLisModal();
});

const cartProductLisModal = () => {
  calculoCart();
  $.get("../model/productListById-model.php", (value) => {
    let data = JSON.parse(value);
    let template = "";
    if (value === "null") {
      template += `
      <div class="card mb-2 card-shadow">
          <div class="card-body card-padding">
              <h3>No tiene nada en el carrito</h3>
            </div>
        </div>
      `;
      document.getElementById("cartProductList").innerHTML = template;
      return;
    }
    data.forEach((data) => {
      template += `<div class="card mb-2 card-shadow" width="100%">
          <div class="card-body card-padding">
              <div class="container-order">
                  <div class="container-img">
                      <img src="${data.image}" class="img-product">
                  </div>
                  <div class="container-order-detall">
                  <span class="info-total">$${data.total}</span>
                  <span class="info-detalle">${data.name}</span>
                  <img src="../assets/icon/delete.svg" class="img-svg" onclick="deleteCart(${data.id})">
                  </div>
              </div>
            </div>
        </div>
        `;
      document.getElementById("cartProductList").innerHTML = template;
    });
  });
};

const calculoCart = () => {
  $.post("../model/calculo.php", (data) => {
    let value = JSON.parse(data);
    value.map((data) => {
      document.getElementById("subtotal").innerHTML = `$${
        data.subtotal || 0.0
      }`;
    });
  });
};

const deleteCart = (id) => {
  $.post("../model/deleteCart.php", { id }, (data) => {
    countCarrito();
    calculoCart();
    cartProductLisModal();
  });
};
