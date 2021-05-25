const getProductAll = () => {
  $.get("views/producto.php", (data) => {
    let producto = JSON.parse(data);
    let template = "";

    producto.map((value) => {
      template += `
          <div class="container-table">
              <div class="container-row-header">
                  <div class="cell-item">Nombre</div>
                  <div class="cell-item">Categoria</div>
                  <div class="cell-item">Precio</div>
              </div>  
              <div class="container-row-body">
                <div class="cell-item">${value.nameproducto}</div>
                <div class="cell-item">${value.namecategory}</div>
                <div class="cell-item">${value.price}</div>
              </div>
          </div>        
    `;
      document.getElementById("listProduct").innerHTML = template;
    });
  });
};

const getCategoryAll = () => {
  $.get("views/categoria.php", (data) => {
    let categoria = JSON.parse(data);
    let template = "";
    categoria.map((value) => {
      template += `
        <div class="container-table">
            <div class="container-row-header">
                <div class="cell-item">Nombre</div>
            </div>  
            <div class="container-row-body">
              <div class="cell-item">${value.name}</div>
            </div>
        </div>  `;

      document.getElementById("listCategoria").innerHTML = template;
    });
  });
};

const registrarProducto = () => {
  const data = {
    name: document.getElementById("name").value,
    price: document.getElementById("price").value,
    detalil1: document.getElementById("detalil1").value,
    detalil2: document.getElementById("detalil2").value,
  };
  $.post("views/producto.php", data, (value) => {});
};

const registrarCategoria = () => {
  const data = {
    name: document.getElementById("name").value,
  };
  $.post("views/categoria.php", data, (value) => {});

  // $.ajax({
  //   url: "views/categoria.php",
  //   type: "PUT",
  //   success: function (result) {
  //     // Do something with the result
  //   },
  // });
};
