<?php
define('RUTA_CLASS', dirname(dirname(__FILE__))); 
require_once  RUTA_CLASS.'/include/head.php';
?>
    <div class="container-form">       
            <div class="card-form">
               
                    <form action="">
                        <div class="group-form">
                            <input type="text" class="form-input">
                            <label for="">User</label>
                        </div>
                        <div class="group-form">
                            <input type="text" class="form-input">
                            <label for="">Password</label>
                        </div>
                    </form>
     
            </div>
    </div>


<?php require_once  RUTA_CLASS.'/include/footer.php'?>