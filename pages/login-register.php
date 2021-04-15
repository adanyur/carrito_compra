<?php
define('RUTA_CLASS', dirname(dirname(__FILE__))); 
require_once  RUTA_CLASS.'/include/head.php';
?>
    <div class="container-form">       
            <div class="card-form">
                <form >
                    <h1 class="form-title">Sign In</h1>
                    <div class="group-form">
                        <input type="text" id="user" class="form-input">
                        <label class="label-control">User</label>
                    </div>
                    <div class="group-form">
                        <input type="text" id="password" class="form-input">
                        <label class="label-control">Password</label>
                    </div>
                    <div class="group-form">
                        <button type="button" class="btn-login">Sign In</button>
                    </div>
                    <div class="group-form">
                        <a href="index.php?action=registrar">Registrarse</a>
                    </div>
                </form>
            </div>
    </div>
<?php require_once  RUTA_CLASS.'/include/footer.php'?>