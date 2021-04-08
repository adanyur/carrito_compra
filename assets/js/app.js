$(document).ready(function () {
  countCarrito();
});

const AddCart = (id) => {
  let cantidad = document.getElementById("quantity" + id).value;
  let idproducto = document.getElementById("idproduct" + id).value;
  let usuario = document.getElementById("usuario" + id).value;
  let data = { idproducto, cantidad, usuario };
  postCart(data);
};

const postCart = (data) => {
  $.post("pages/cart-list.php", data, (data) => {
    console.log(data);
    countCarrito();
  });
};

const countCarrito = () => {
  $.get("model/countCarrito.php", (data) => {
    let count = JSON.parse(data);
    count.forEach((count) => {
      document.getElementById("countCarrito").innerHTML = count.count || 0;
    });
  });
};

const carProductList = () => {
  $.get("model/productListById-model.php", (data) => {
    let count = JSON.parse(data);
    let template = "";
    count.forEach((count, indice) => {
      template += `
      <tr>
      <th scope="row">${indice + 1}</th>
      <td>${count.name}</td>
      <td>${count.quantity}</td>
      <td>${count.price}</td>
      <td>${count.total}</td>
      </tr>  
      `;
      document.getElementById("carProductList").innerHTML = template;
    });
  });
};

document.getElementById("listProducto").addEventListener("click", (e) => {
  document.getElementById("modal-btn").checked = true;
  carProductList();
});
