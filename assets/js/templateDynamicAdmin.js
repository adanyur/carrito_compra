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
          <li >
              <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Home</a>
              <ul class="collapse list-unstyled" id="homeSubmenu">
                  <li>
                      <a href="#">Home 1</a>
                  </li>
                  <li>
                      <a href="#">Home 2</a>
                  </li>
                  <li>
                      <a href="#">Home 3</a>
                  </li>
              </ul>
          </li>
          <li>
              <a href="#">About</a>
          </li>
          <li>
              <a href="#pageSubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle">Pages</a>
              <ul class="collapse list-unstyled" id="pageSubmenu">
                  <li>
                      <a href="#">Page 1</a>
                  </li>
                  <li>
                      <a href="#">Page 2</a>
                  </li>
                  <li>
                      <a href="#">Page 3</a>
                  </li>
              </ul>
          </li>
          <li>
              <a href="#">Portfolio</a>
          </li>
          <li>
              <a href="#">Contact</a>
          </li>
      </ul>

      <ul class="list-unstyled CTAs">
          <li>
              <a href="https://bootstrapious.com/tutorial/files/sidebar.zip" class="download">Cerrar Sesion</a>
          </li>
          <li>
              <a href="https://bootstrapious.com/p/bootstrap-sidebar" class="article">Open</a>
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
      <div class="container p-4">
        <h2>Collapsible Sidebar Using Bootstrap 4</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
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
