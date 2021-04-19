const showAuthLogin = () => {
  template = `
            <div class="container-form animate__animated animate__fadeIn">
                <form>
                    <h1 class="form-title">Login in</h1>
                    <div class="group-form">
                        <input type="text" id="user" class="form-input" placeholder=" ">
                        <label class="label-control">Email</label>
                    </div>
                    <div class="group-form">
                        <input type="text" id="password" class="form-input" placeholder=" ">
                        <label class="label-control">Password</label>
                    </div>
                    <div class="group-form">
                        <button type="button" onclick="login()" class="btn-login">Sign in</button>
                    </div>
                </form>
            </div>
            `;

  document.getElementById("authDynamic").innerHTML = template;
};

const showAuthRegister = () => {
  template = `
  <div class="container-form container-form-register animate__animated animate__fadeIn">
    <form>
    <h1 class="form-title">Register</h1>
    <div class="group-form">
        <input type="text" id="firstname" class="form-input" placeholder=" ">
        <label class="label-control">First name</label>
    </div>
    <div class="group-form">
        <input type="text" id="lastname" class="form-input" placeholder=" ">
        <label class="label-control">Last Name</label>
    </div>
    <div class="group-form">
        <input type="email" id="email" class="form-input" placeholder=" ">
        <label class="label-control">Email</label>
    </div>
    <div class="group-form">
        <input type="password" id="password" class="form-input" placeholder=" ">
        <label class="label-control">Password</label>
    </div>
    <div class="group-form">
        <input type="text" id="comment" class="form-input" placeholder=" ">
        <label class="label-control">Direccion</label>
    </div>
    <div class="group-form">
        <input type="number" id="zip" class="form-input" placeholder=" ">
        <label class="label-control">zip code</label>
    </div>
    <div class="group-form">
        <input type="text" id="town" class="form-input" placeholder=" ">
        <label class="label-control">Town</label>
    </div>
    <div class="group-form">
        <input type="number" id="cell" class="form-input" placeholder=" ">
        <label class="label-control">Cell number</label>
    </div>
    <div class="group-form">
        <button type="button" onclick="register()" class="btn-login">Sign un</button>
    </div>
  </form>
  </div>  
  `;
  document.getElementById("authDynamic").innerHTML = template;
};
