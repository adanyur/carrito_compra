$(document).ready(() => {
  if (!auth) templateHome();
});

const session = () => JSON.parse(localStorage.getItem("session"));
const auth = session() ? true : false;

const templateLogin = () => {
  document.getElementById("templateDynamicAdmin").style.margin = "0 1rem";
  document
    .getElementById("templateDynamicAdmin")
    .classList.add("container-login");

  let template = `  
      <div class="card-form" id="card-login">
      <h1 class="form-title">Login in</h1>
        <div class="group-form">
          <input type="text" class="form-input" placeholder=" ">
          <label class="label-control">User</label>
        </div>
        <div class="group-form">
          <input type="text" class="form-input" placeholder=" ">
          <label class="label-control">Password</label>
        </div>
        <div class="group-form">
          <button type="button" onclick="templateHome()" class="btn-login">Sign in</button>
        </div>
      </div>
 `;
  document.getElementById("templateDynamicAdmin").innerHTML = template;
};

const templateSlider = () => {
  document.getElementById("templateDynamicAdmin").style.margin = "0";
  document
    .getElementById("templateDynamicAdmin")
    .classList.remove("container-login");
  return `
  <div class="wrapper">
  <nav id="sidebar">
      <div class="sidebar-header">
          <h3>Admin</h3>
      </div>
      <ul class="list-unstyled components">
          <p>Yur Adan</p>
          <li>
              <a href="#" onclick="templateProduct()">Producto</a>
          </li>
          <li>
              <a href="#" onclick="templateCategoria()">Categoria</a>
          </li>
          <li>
              <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Otros</a>
              <ul class="collapse list-unstyled" id="pageSubmenu">
                  <li>
                      <a href="#">Otros 1</a>
                  </li>
                  <li>
                      <a href="#">Otros 2</a>
                  </li>
                  <li>
                      <a href="#">Otros 3</a>
                  </li>
              </ul>
          </li>
      </ul>

      <ul class="list-unstyled CTAs">
          <li>
              <a href="#" class="download">Cerrar Sesion</a>
          </li>
          <li>
              <a href="%" class="article">Open</a>
          </li>
      </ul>
  </nav>
  <div id="content">
  <nav class="navbar navbar-expand-md navbar-dark bg-dark"> 
    <div class="container-fluid">
        <button type="button" id="sidebarCollapse" class="btn btn-info">
            <i class="fas fa-align-left"></i>
            <span>...</span>
        </button>
        <button class="btn btn-dark d-inline-block d-lg-none ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <i class="fas fa-align-justify"></i>
        </button> 
    </div>
</nav>
      
      <div class="template" id="template"></div>        
  </div>
</div>
  `;
};

const templateHome = () => {
  let template = `${templateSlider()}`;
  document.getElementById("templateDynamicAdmin").innerHTML = template;
  $("#sidebarCollapse").on("click", () => {
    $("#sidebar").toggleClass("active");
  });
};

const ocultarMenusLateral = () => {
  $("#sidebar").toggleClass("active");
};

const templateProduct = () => {
  ocultarMenusLateral();
  const template = `
        <div class="container-btn">
          <button class="btn-button">+Agregar</button>
        </div>
        <div class="container-responsive" id="listProduct"></div>        
    `;
  document.getElementById("template").innerHTML = template;
  getProductAll();
};

const templateCategoria = () => {
  ocultarMenusLateral();
  const template = `
        <div class="container-btn">
          <button class="btn-button">+Agregar</button>
        </div>
        <div class="container-responsive" id="listCategoria">
        </div>        
    `;
  document.getElementById("template").innerHTML = template;
  getCategoryAll();
};
