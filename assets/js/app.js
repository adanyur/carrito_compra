$(document).ready(function () {
  listCategory();
  countCarrito();
  ValidacionUsario();
});

/***************LOGIN****************/

const login = () => {
  let user = document.getElementById("user").value;
  let password = document.getElementById("password").value;
  $.post("../model/Login.php", { user, password }, (data) => {
    document.getElementById("modal-btn").checked = false;
    ValidacionUsario();
  });
};

const logout = () => {
  $.get(`../model/logout.php`, (data) => {
    ValidacionUsario();
  });
};

const register = () => {
  let firstname = document.getElementById("firstname").value;
  let lastname = document.getElementById("lastname").value;
  let email = document.getElementById("email").value;
  let password = document.getElementById("passwor").value;
  let comment = document.getElementById("comment").value;
  let zip = document.getElementById("zip").value;
  let town = document.getElementById("town").value;
  let cell = document.getElementById("cell").value;

  const data = {
    firstname,
    lastname,
    email,
    password,
    comment,
    town,
    zip,
    cell,
  };
  let template = "";
  $.post("../model/user-register.php", data, (data) => {
    template = `
    <div class="container-form animate__animated animate__fadeIn">
      <div class="alert alert-success" role="alert">
            ${data}
      </div>
    </div>
    `;
    document.getElementById("register").style.display = "none";
    document.getElementById("message-auth").innerHTML = template;
    setTimeout(() => {
      document.getElementById("message-auth").style.display = "none";

      document.getElementById("login").style.display = "block";
    }, 3000);
  });
};

/************************CARRITTO*************************/

const AddCart = (id) => {
  let cantidad = document.getElementById("quantity" + id).value;
  let idproducto = document.getElementById("idproduct" + id).value;
  let usuario = document.getElementById("usuario" + id).value;

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

/*********MODAL********/
const openModal = (type) => {
  document.getElementById("viewDetail").style.display = "none";
  document.getElementById("templateDynamic").style.display = "block";
  document.getElementById("modal-btn").checked = true;
  switch (type) {
    case "CART": {
      cartProductLisModal();
      break;
    }
    case "AUTH": {
      auth();
      break;
    }
    case "EMAIL": {
      email();
      break;
    }
  }
};

const viewDetail = (idproduct) => {
  let template = "";
  document.getElementById("templateDynamic").style.display = "none";
  document.getElementById("viewDetail").style.display = "block";
  document.getElementById("modal-btn").checked = true;
  $.get(`../model/productById-model.php?id=${idproduct}`, (data) => {
    let detail = JSON.parse(data);
    detail.forEach((detail) => {
      template += `
  
          <div class="container-view-detail">
                <div class="header-view-detail">
                    <span class="view-detail-title">${detail.name}</span>
                </div>
                <div class="body-view-detail">
                      <div class="body-view-detail-img">
                        <img src="${detail.image}" class="view-detail-img">
                      </div>
                      <div class="body-view-detail-detail">
                        <span class="detail-title">Description</span>
                        <span class="detail-text">${detail.detail1}</span>
                      </div>
                </div>
                <div class="footer-view-detail"></div>
          </div>
   
      `;

      document.getElementById("viewDetail").innerHTML = template;
    });
  });
};

const auth = () => {
  const template = `
    <div class="container-nav">
      <ul class="nav">
        <li class="nav-item" onclick="showAuthLogin()">Login</li>
        <li class="nav-item" onclick="showAuthRegister()">Register</li>
      </ul>
    </div>
    ${templateDynamic()}
    <div id="message-auth"></div>
    `;
  document.getElementById("templateDynamic").innerHTML = template;
};

const email = () => {
  let template = `
<div class="container-form animate__animated animate__fadeIn">
  <form autocomplete="off">
      <h1 class="form-title">Contactenos</h1>
      <div class="group-form">
          <input type="text" id="user" class="form-input" placeholder=" ">
          <label class="label-control">Email</label>
      </div>
      <div class="group-form group-textarea">
        <textarea class="form-input" placeholder=" " rows="5" cols="10"></textarea>
        <label class="label-control">Comentario</label>
      </div>
      <div class="group-form">
          <button type="button" onclick="login()" class="btn-login">Sign in</button>
      </div>
  </form>
</div>
`;
  document.getElementById("templateDynamic").innerHTML = template;
};

const cartProductLisModal = () => {
  $.get("../model/productListById-model.php", (value) => {
    let data = JSON.parse(value);
    let template = "";

    if (value === "null") {
      template += `<h4 class="text-center">No tiene nada el carrito</h4>`;
      document.getElementById("templateDynamic").innerHTML = template;
      return;
    }

    template += `
    <div class="modal-head">
        <h1 class="modal-title">Carrito</h1>
    </div>
    <div class="modal-body">
    `;

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
    });

    template += `</div>
                  <div class="modal-footer">
                    <button class="btn-add">
                    <span id="subtotal" class="info-payment" ></span>|
                    <span class="info-payment">
                      <img src="../assets/icon/hand.svg">
                    </span>
                    </button>
                  </div>
                `;

    document.getElementById("templateDynamic").innerHTML = template;
    calculoCart();
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
                   $${data.price}
                </div>
                <div class="info-quanty">
                   <input type="number" id="quantity${data.id}" name="quantity"  value=1 class="input-control">
                </div>
          </div>
         <input type="hidden" id="idproduct${data.id}" name="id" value="${data.id}">
         <input type="hidden" id="usuario${data.id}" name="usuario" value=10000>
          </div>
          <div class="container-button">
            <button  type="button" id="product${data.id}" onclick="AddCart(${data.id})" class="btn-add button-add-product">
            <img src="../assets/icon/add-to-cart.svg" class="img-icon">
            </button>
            <button  type="button" id="product${data.id}" onclick="viewDetail(${data.id})" class="btn-add btn-secondary-product">
            <img src="../assets/icon/loupe.svg" class="img-icon">
            </button>
          </div>
      </div>
    </div>
    `;
    });
    template += `</div>`;
    document.getElementById("listAll").remove();
    document.getElementById("searchCategoryProduct").innerHTML = template;
  });
};

const perfil = (data) => {
  return `
  <div class="dropdown animate__animated animate__fadeIn">
  <span><img src="../assets/icon/user.svg"></span>
  <div class="dropdown-content">
    <div class="dropdown-content-item">
      ${data}
    </div>
    <div class="dropdown-content-item">
      perfil
    </div>
    <div class="dropdown-content-item" onclick="logout()">
      <img src="../assets/icon/logout.svg">
      cerrra session
    </div>
  </div>
  </div>
`;
};

const buttonLogin = () => {
  return `
    <button type="button" class="btn btn-black animate__animated animate__fadeIn" onclick="openModal('AUTH')">
        <img src="../assets/icon/login.svg">
    </button>    
    `;
};

const ValidacionUsario = () => {
  let template = "";
  $.get(`../model/cookies.php`, (data) => {
    template = !data ? buttonLogin() : perfil(data);
    document.getElementById("auth").innerHTML = template;
  });
};
