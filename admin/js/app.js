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
            <div class="container-footer">
                <button type="button" onclick="AgregarEditar('categoria','PUT',${value.id})">Editar</button>
                <button type="button" onclick="deleteCategoria(${value.id})">Eliminar</button>
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

const showDataCategoria = (data) => {
  $.get(`views/categoria.php?idshow=${data}`, (value) => {
    document.getElementById("modal-btn").checked = true;
    const categoria = JSON.parse(value);
    categoria.map((value) => {
      document.getElementById("name").value = value.name;
      document.getElementById("image").value = value.image;
      document.getElementById("idcategoria").value = value.id;
    });
  });
};

const deleteCategoria = (id, method = "DELETE") => {
  const params = { id, method };
  $.post("views/categoria.php", params, () => {
    getCategoryAll();
  });
};

const registrarCategoria = (verb, codigo = null) => {
  let name = document.getElementById("name").value;
  let image = document.getElementById("image").value;
  let id = document.getElementById("idcategoria").value;
  let method = verb;
  params = { name, image, id, method };

  $.ajax({
    url: "views/categoria.php",
    type: "POST",
    data: params,
    success: (value) => {
      document.getElementById("modal-btn").checked = false;
      getCategoryAll();
    },
  });
};
