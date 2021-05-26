<?php
define('RUTA', dirname(dirname(dirname(__FILE__))));
require_once RUTA."/config/DBController.php";


class CategoriaModel extends DBController{

    function getCategoriatAll(){
    $query ="SELECT name,id FROM tbl_category";
         return $this->getDBResult($query);;
    } 

    function postAddCategory($name,$image){
     $query = "INSERT INTO tbl_category (name,image) VALUES ('$name', '$image')";
     return $this->insertDB2($query);
     }


     function getCategoriaById($idCategoria){
          $query = "SELECT * FROM tbl_category where id=?";
          $params = array(array("param_type" => "s","param_value" => $idCategoria));    
          return $this->getDBResult($query, $params);
      }

      function putCategoria($name,$image,$id){
          $query = "UPDATE tbl_category SET name='$name', image='$image' WHERE id=?";
          $params = array(
            array(
                "param_type" => "i",
                "param_value" => $id
            )
        );
          return $this->updateDB($query,$params);
       }

       function deleteCategoria($id){
        $query ="DELETE FROM tbl_category WHERE id=?";
        $params = array(
            array(
                "param_type" => "s",
                "param_value" => $id
            )
        );
        return $this->deleteDB($query, $params);
       }

 
 }