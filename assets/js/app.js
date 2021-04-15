$(document).ready(function () {
  listCategory();
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
      template += `<h4 class="text-center">No tiene nada el carrito</h4>`;
      document.getElementById("cartProductList").innerHTML = template;
      return;
    }

    data.forEach((data) => {
      template += `<div class="card mb-2 card-shadow card-shadow-2" >
            <div class="card-body card-padding">
              <div class="container-order">
                  <div class="container-img">
                      <img src="${data.image}" class="img-product">
                  </div>
                  <div class="container-order-detall">
                  <div class="detalle-head">
                    <span class="info-detalle">${data.name}</span>
                    <img src="../assets/icon/delete.svg" class="img-svg" onclick="deleteCart(${data.id})">
                  </div>
                  <div class="detalle-body">
                    <div class="detalle-item">
                      <span class="head-info">Cantidad</span>
                      <span class="body-info">${data.quantity}</span>
                    </div>
                    <div class="detalle-item border-separador">
                    <span class="head-info">Precio</span>
                      <span class="body-info">${data.price}</span>
                    </div>
                    <div class="detalle-item">
                    <span class="head-info">Total</span>
                      <span class="body-info">${data.total}</span>
                    </div>
                  </div>

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

const listCategory = () => {
  $.get("../model/category-list.php", (data) => {
    let template = "";
    let category = JSON.parse(data);
    template += '<div class="item"></div>';
    category.forEach((data) => {
      template += `
        <div class="item" onclick="SearchCategoryProduct(${data.id})">
            <img src="${data.image}" class="image-category animate__animated animate__fadeIn">
        </div>
      `;
    });
    document.getElementById("listCategory").innerHTML = template;
  });
};

const SearchCategoryProduct = (id) => {
  $.get(`../model/categoryListByid-model.php?id=${id}`, (data) => {
    let template = "";
    let categoryId = JSON.parse(data);
    template += `<div class="container-content animate__animated animate__fadeIn">`;
    categoryId.forEach((data) => {
      template += `
      <div class="card mb-4 card-shadow card-width ">
      <img class="card-img-top img-border-radius" src="${data.image}" alt="Card image cap">
      <div class="card-body">
          <div class="card-info">
             <div class="info-title">                
                ${data.name}
             </div>
             <div class="info-price-quanty">
                <div class="info-price">
                   ${data.price}
                </div>
                <div class="info-quanty">
                   <input type="number" id="quantity${data.id}" name="quantity"  value=1 class="input-control">
                </div>
          </div>
         <input type="hidden" id="idproduct${data.id}" name="id" value="${data.id}">
         <input type="hidden" id="usuario${data.id}" name="usuario" value=10000>
          </div>
          <button  type="button" id="product${data.id}" onclick="AddCart(${data.id})" class="btn-add button-add-product">add to cart</button>
      </div>
    </div>
    `;
    });
    template += `</div>`;
    document.getElementById("listAll").style.display = "none";
    document.getElementById("searchCategoryProduct").innerHTML = template;
  });
};
