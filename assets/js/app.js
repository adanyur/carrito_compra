document.getElementById("add-product").addEventListener("click", (e) => {
  let idProducto = document.getElementById("quantity").value;
  let idCantidad = document.getElementById("idproduct").value;
  let user = document.getElementById("usuario").value;

  console.log({ idProducto, idCantidad, user });

  e.preventDefault();
});

let data = document.getElementById("add-product");
formData = new FormData(data);
console.log(formData);
