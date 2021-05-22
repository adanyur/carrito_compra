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
