const getProductAll = () => {
  $.get("views/producto.php", (data) => {
    let producto = JSON.parse(data);
    let template = "";

    producto.map((value) => {
      template += `
          <div class="container-table">
              <div class="container-table-header">
                  <img src="${value.image}" class="imagen-list">
              </div>
              <div class="container-table-body">
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
              <div class="container-table-footer">
                <img src="../assets/icon/edit.svg" class="img-svg-2" onclick="AgregarEditar('producto','PUT',${value.id})">
                <img src="../assets/icon/delete.svg" class="img-svg-2" onclick="deleteProducto(${value.id})">
              </div>        
          </div>
    `;
      document.getElementById("listProduct").innerHTML = template;
    });
  });
};

const getCategoryAll = (isList = true) => {
  $.get("views/categoria.php", (data) => {
    let categoria = JSON.parse(data);
    if (isList) getCategoriaList(categoria);
    if (!isList) getCategoriaSelect(categoria);
  });
};

const getCategoriaSelect = (data) => {
  let templateOption = "";
  data.map((value) => {
    templateOption += `<option value="${value.id}">${value.name}</option>`;
    if (document.getElementById("optionCategoria"))
      document.getElementById("optionCategoria").innerHTML = templateOption;
  });
};

const getCategoriaList = (data) => {
  let template = "";
  data.map((value) => {
    template += `
      <div class="container-table" id="table-list">
        <div class="container-table-header">
          <img src="${value.image}" class="imagen-list">
        </div>
          <div class="container-table-body">
              <div class="container-row-header">
                  <div class="cell-item">Nombre</div>
              </div>  
              <div class="container-row-body">
                <div class="cell-item">${value.name}</div>
              </div>
          </div>
          <div class="container-table-footer">
            <img src="../assets/icon/edit.svg" class="img-svg-2" onclick="AgregarEditar('categoria','PUT',${value.id})">
            <img src="../assets/icon/delete.svg" class="img-svg-2" onclick="deleteCategoria(${value.id})"> 
          </div>
      </div>  `;

    document.getElementById("listCategoria").innerHTML = template;
  });
};

const registrarProducto = (verb) => {
  let formData = new FormData();

  let name = document.getElementById("name").value;
  let price = document.getElementById("price").value;
  let image = document.getElementById("imageProducto").files[0];
  let detalil1 = document.getElementById("detalil1").value;
  let detalil2 = document.getElementById("detalil2").value;
  let id = document.getElementById("idproducto").value;
  let category = document.getElementById("optionCategoria").value;
  let method = verb;

  formData.append("name", name);
  formData.append("price", price);
  formData.append("image", image);
  formData.append("detalil1", detalil1);
  formData.append("detalil2", detalil2);
  formData.append("id", id);
  formData.append("category", category);
  formData.append("method", method);

  $.ajax({
    url: "views/producto.php",
    type: "POST",
    data: formData,
    contentType: false,
    cache: false,
    processData: false,
    success: (data) => {
      getProductAll();
      document.getElementById("modal-btn").checked = false;
    },
  });
};

const showDataProducto = (data) => {
  $.get(`views/producto.php?idshow=${data}`, (value) => {
    document.getElementById("modal-btn").checked = true;
    const producto = JSON.parse(value);
    producto.map((value) => {
      document.getElementById("name").value = value.name;
      //document.getElementById("image").value = value.image;
      document.getElementById("detalil1").value = value.detail1;
      document.getElementById("detalil2").value = value.detail2;
      document.getElementById("idproducto").value = value.id;
      document.getElementById("optionCategoria").value = value.category;
      document.getElementById("price").value = value.price;
      document.getElementById("idproducto").value = value.id;
    });
  });
};

const deleteProducto = (id, method = "DELETE") => {
  $.post("views/producto.php", { id, method }, () => {
    getProductAll();
  });
};

//CATEGORIA

const showDataCategoria = (data) => {
  $.get(`views/categoria.php?idshow=${data}`, (value) => {
    document.getElementById("modal-btn").checked = true;
    const categoria = JSON.parse(value);
    categoria.map((value) => {
      document.getElementById("name").value = value.name;
      //document.getElementById("image").value = value.image;
      document.getElementById("idcategoria").value = value.id;
    });
  });
};

const deleteCategoria = (id, method = "DELETE") => {
  $.post("views/categoria.php", { id, method }, () => {
    getCategoryAll();
  });
};

const registrarCategoria = (verb) => {
  let formData = new FormData();
  let name = document.getElementById("name").value;
  let image = document.getElementById("imageCategoria").files[0];
  let id = document.getElementById("idcategoria").value;
  let method = verb;
  formData.append("name", name);
  formData.append("image", image);
  formData.append("method", method);
  formData.append("id", id);

  $.ajax({
    url: "views/categoria.php",
    type: "POST",
    data: formData,
    contentType: false,
    cache: false,
    processData: false,
    success: (data) => {
      getCategoryAll();
      document.getElementById("modal-btn").checked = false;
    },
  });
};

const onPreview = (e) => {
  const reader = new FileReader();
  reader.onload = imageIsLoaded;
  reader.readAsDataURL(e.target.files[0]);
};

const imageIsLoaded = (e) => {
  $("#file").css("color", "green");
  $("#image_preview").css("display", "block");
  $("#previewing").attr("src", e.target.result);
  $("#previewing").attr("width", "100%");
  $("#previewing").attr("height", "230px");
};

/********************LOGIN******************/

const auth = () => {
  let user = document.getElementById("useradmin").value;
  let password = document.getElementById("passworadmin").value;
  const params = { user, password };
  $.post(`views/auth.php`, params, (value) => {
    let data = JSON.parse(value);
    if (data.status) {
      seData(JSON.parse(data.data));
      return;
    }
    Toast(data.message);
  });
};

const seData = (data) => {
  data.map((val) => {
    localStorage.setItem("sessionAdmin", true);
    localStorage.setItem("userAdmin", JSON.stringify(val));
    templateHome();
  });
};

/***********************TOASTER**************************/
const Toast = (text) => {
  let message = document.getElementById("snackbar");
  message.innerText = text;
  message.className = "show show-success";
  setTimeout(() => {
    message.className = message.className.replace("show", "");
  }, 3000);
};
