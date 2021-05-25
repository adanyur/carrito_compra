<?php
define('RUTA', dirname(dirname(dirname(__FILE__))));
require_once RUTA."/config/DBController.php";

class ProductoModel extends DBController{

   function getProductAll(){
   $query ="
        SELECT a.name AS nameproducto,
        price,
        category,
        b.name AS namecategory
        FROM tbl_product a
        JOIN tbl_category b ON (a.category=b.id)";
        return $this->getDBResult($query);;
   } 



   function postAddProduct(){
        $query = "INSERT INTO tbl_product (name,image,price,detail1,detail2) VALUES (?, ?, ?,?,?)";
        $params = array(
            array(
                "param_type" => "i",
                "param_value" => $product_id
            ),
            array(
                "param_type" => "i",
                "param_value" => $quantity
            ),
            array(
                "param_type" => "i",
                "param_value" => $member_id
            )
        );
        
        return $this->insertDB($query, $params);

   }


   function putEdiProduct($name,$image,$price,$detail1,$detail2){
      $query = "UPDATE tbl_product SET name='$name',image='$image',price=$price,detail1='$detail1',detail2='$detail1'";

   }

}

?>